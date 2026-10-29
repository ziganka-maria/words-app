'use strict';
// «Своя книга»: загрузка EPUB / FB2 / TXT, разбор на главы, частые незнакомые слова → колода, чтение по главам.
// Книга хранится только в этом браузере (IndexedDB 'words-books'); колода и прогресс по словам синхронизируются как обычно.
(function () {
const W = window.W, h = W.h;

// ---------- хранилище ----------
const DB = 'words-books', ST = 'books';
const db = () => new Promise((ok, bad) => {
  const r = indexedDB.open(DB, 1);
  r.onupgradeneeded = () => r.result.createObjectStore(ST, { keyPath: 'id' });
  r.onsuccess = () => ok(r.result); r.onerror = () => bad(r.error);
});
const tx = async (mode, fn) => { const d = await db(); return new Promise((ok, bad) => { const t = d.transaction(ST, mode), s = t.objectStore(ST); const r = fn(s); t.oncomplete = () => ok(r && r.result); t.onerror = () => bad(t.error); }); };
const allBooks = () => tx('readonly', s => s.getAll()).then(x => (x || []).sort((a, b) => b.added - a.added));
const getBook = id => tx('readonly', s => s.get(id));
const putBook = b => tx('readwrite', s => s.put(b));
const delBook = id => tx('readwrite', s => s.delete(id));

// ---------- разбор файлов ----------
const clean = s => s.replace(/ /g, ' ').replace(/[­​]/g, '').replace(/\s+/g, ' ').trim();
const wc = s => (s.match(/[A-Za-zÀ-ÿ']+/g) || []).length;
// zip: центральный каталог → файлы; сжатые (deflate) распаковываем встроенным DecompressionStream
async function unzip(buf) {
  if (typeof DecompressionStream === 'undefined') throw new Error('Этот браузер не умеет открывать EPUB и ZIP. Обновите систему телефона или загрузите книгу в формате FB2 или TXT.');
  const dv = new DataView(buf), u8 = new Uint8Array(buf);
  let e = buf.byteLength - 22;
  while (e >= 0 && dv.getUint32(e, true) !== 0x06054b50) e--;
  if (e < 0) throw new Error('не zip');
  const n = dv.getUint16(e + 10, true), files = {};
  let p = dv.getUint32(e + 16, true);
  for (let i = 0; i < n; i++) {
    const method = dv.getUint16(p + 10, true), size = dv.getUint32(p + 20, true), nl = dv.getUint16(p + 28, true), el = dv.getUint16(p + 30, true), cl = dv.getUint16(p + 32, true), off = dv.getUint32(p + 42, true);
    files[new TextDecoder().decode(u8.subarray(p + 46, p + 46 + nl))] = { method, size, off };
    p += 46 + nl + el + cl;
  }
  const read = async name => {
    const f = files[name]; if (!f) return null;
    const start = f.off + 30 + dv.getUint16(f.off + 26, true) + dv.getUint16(f.off + 28, true);
    const data = u8.slice(start, start + f.size);
    if (f.method === 0) return data.buffer;
    return new Response(new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer();
  };
  return { names: Object.keys(files), read };
}
const xml = (s, type) => new DOMParser().parseFromString(s, type || 'application/xml');
const txt = b => new TextDecoder('utf-8').decode(b);
const dir = p => p.includes('/') ? p.slice(0, p.lastIndexOf('/') + 1) : '';
const dec = s => { try { return decodeURIComponent(s); } catch (e) { return s; } };
const join = (base, rel) => { const parts = (base + dec(rel.split('#')[0])).split('/'), out = []; for (const x of parts) { if (x === '..') out.pop(); else if (x !== '.') out.push(x); } return out.join('/'); };

async function parseEpub(buf) {
  const z = await unzip(buf);
  const cont = xml(txt(await z.read('META-INF/container.xml')));
  const opfPath = cont.querySelector('rootfile').getAttribute('full-path');
  const opf = xml(txt(await z.read(opfPath))), base = dir(opfPath);
  const meta = tag => { const x = opf.getElementsByTagName('dc:' + tag)[0] || opf.getElementsByTagName(tag)[0]; return x ? clean(x.textContent) : ''; };
  const man = {}; for (const it of opf.getElementsByTagNameNS('*', 'item')) man[it.getAttribute('id')] = it.getAttribute('href');
  const chapters = [];
  for (const ref of opf.getElementsByTagNameNS('*', 'itemref')) {
    const href = man[ref.getAttribute('idref')]; if (!href) continue;
    const raw = await z.read(join(base, href)); if (!raw) continue;
    let doc = xml(txt(raw), 'application/xhtml+xml');
    if (doc.getElementsByTagName('parsererror').length) doc = xml(txt(raw), 'text/html');
    const pars = [];
    let title = '';
    for (const el of doc.querySelectorAll('h1,h2,h3,p,li,blockquote,div')) {
      if (/^(div|blockquote|li)$/i.test(el.tagName) && el.querySelector('p,div,h1,h2,h3,li,blockquote')) continue; // только «листья», иначе текст задвоится
      const s = clean(el.textContent); if (!s) continue;
      if (/^h[123]$/i.test(el.tagName) && !title) { title = s; continue; }
      pars.push(s);
    }
    if (pars.reduce((n, s) => n + wc(s), 0) >= 30) chapters.push({ t: title, p: pars });
  }
  return { title: meta('title'), author: meta('creator'), chapters };
}

function parseFb2Text(s) {
  const doc = xml(s);
  const ti = doc.getElementsByTagName('title-info')[0];
  const g = (el, t) => el && el.getElementsByTagName(t)[0] ? clean(el.getElementsByTagName(t)[0].textContent) : '';
  const au = ti && ti.getElementsByTagName('author')[0];
  const body = [...doc.getElementsByTagName('body')].find(b => !b.getAttribute('name')) || doc.getElementsByTagName('body')[0];
  const chapters = [];
  const leaf = sec => [...sec.children].filter(c => c.tagName === 'section');
  // свои абзацы и стихи секции (без подсекций и заголовка) — отдельной главой, потом подсекции
  const walk = sec => {
    const t = [...sec.children].find(c => c.tagName === 'title');
    const pars = [...sec.querySelectorAll('p, v')].filter(p => p.closest('section, body') === sec && !p.closest('title')).map(p => clean(p.textContent)).filter(Boolean);
    if (pars.reduce((n, x) => n + wc(x), 0) >= 30) chapters.push({ t: t ? clean(t.textContent) : '', p: pars });
    leaf(sec).forEach(walk);
  };
  if (body) walk(body);
  return { title: g(ti, 'book-title'), author: au ? [g(au, 'first-name'), g(au, 'last-name')].filter(Boolean).join(' ') : '', chapters };
}
const decodeFb2 = buf => { const head = new TextDecoder('ascii').decode(new Uint8Array(buf).subarray(0, 200)); const m = head.match(/encoding=["']([^"']+)/i); return new TextDecoder(m ? m[1] : 'utf-8').decode(buf); };

function parseTxt(buf, name) {
  let s = new TextDecoder('utf-8').decode(buf);
  if ((s.match(/�/g) || []).length > 20) {
    // не UTF-8: кириллица в старой кодировке или английский текст в windows-1252
    const u8 = new Uint8Array(buf), cyr = u8.filter(x => x >= 0xc0).length;
    s = new TextDecoder(cyr > u8.length / 50 ? 'windows-1251' : 'windows-1252').decode(buf);
  }
  s = s.replace(/\r\n?/g, '\n');
  const blocks = /\n\s*\n/.test(s) ? s.split(/\n\s*\n+/) : s.split('\n');
  const NUM = '([0-9]+|[IVXLCDM]+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty)';
  const HEAD = new RegExp('^\\s*((chapter|book|part)\\s+' + NUM + '\\b[.:]?.{0,60}|[IVXLCDM]{2,7}\\.?|[IVXLCDM]\\.|\\d{1,3}\\.?)\\s*$'); // одиночное «I» без точки — это местоимение, а не глава
  const HEADI = new RegExp('^\\s*(chapter|book|part)\\s+' + NUM + '\\b', 'i');
  let chapters = [], cur = null;
  for (const b of blocks) {
    const x = clean(b); if (!x) continue;
    if (x.length < 80 && (HEAD.test(x) || HEADI.test(x) && !/[a-z]{3,}\s+[a-z]{3,}\s+[a-z]{3,}/.test(x.replace(HEADI, '')))) { cur = { t: x, p: [] }; chapters.push(cur); continue; }
    if (!cur) { cur = { t: '', p: [] }; chapters.push(cur); }
    cur.p.push(x);
  }
  // слишком короткие «главы» (ложный заголовок) не выбрасываем, а приклеиваем к предыдущей
  // (первую короткую часть, если приклеить не к чему, переносим в начало следующей)
  const merged = [];
  let carry = null;
  for (const c of chapters) {
    if (carry) { c.p.unshift(...carry); carry = null; }
    const n = c.p.reduce((k, x) => k + wc(x), 0);
    if (n < 30 && merged.length) { if (c.t) merged[merged.length - 1].p.push(c.t); merged[merged.length - 1].p.push(...c.p); }
    else if (n < 30) carry = (c.t ? [c.t] : []).concat(c.p);
    else merged.push(c);
  }
  if (carry) merged.push({ t: '', p: carry });
  chapters = merged.filter(c => c.p.reduce((n, x) => n + wc(x), 0) >= 30);
  // глав не нашлось или их слишком много — режем на части примерно по 2500 слов
  if (chapters.length <= 1 || chapters.length > 300) {
    const all = chapters.flatMap(c => c.p), out = [];
    let part = { t: '', p: [] }, n = 0;
    for (const p of all) { part.p.push(p); n += wc(p); if (n >= 2500) { out.push(part); part = { t: '', p: [] }; n = 0; } }
    if (part.p.length) out.push(part);
    chapters = out;
  }
  return { title: name.replace(/\.[^.]+$/, '').replace(/[_]+/g, ' '), author: '', chapters };
}

async function parseFile(file) {
  const name = file.name.toLowerCase(), buf = await file.arrayBuffer();
  if (name.endsWith('.pdf')) throw new Error('pdf');
  let b;
  if (name.endsWith('.epub')) b = await parseEpub(buf);
  else if (name.endsWith('.fb2')) b = parseFb2Text(decodeFb2(buf));
  else if (name.endsWith('.zip')) { const z = await unzip(buf), f = z.names.find(n => /\.fb2$/i.test(n)); if (!f) throw new Error('В архиве нет книги FB2'); b = parseFb2Text(decodeFb2(await z.read(f))); }
  else b = parseTxt(buf, file.name);
  if (!b.chapters.length) throw new Error('empty');
  b.chapters.forEach((c, i) => { if (!c.t) c.t = 'Часть ' + (i + 1); });
  return Object.assign(b, { id: W.uid('b'), title: b.title || file.name.replace(/\.[^.]+$/, ''), added: Date.now(), pos: 0 });
}

// ---------- разбор слов ----------
// ключ слова — карточка из словаря (тогда есть перевод) или само слово (нет в словаре)
const SKIP = /^[A-Z]/; // имена и слова с заглавной в середине предложения не считаем
// служебные слова в колоду по книге не берём — их и так знают с первых уроков
const STOP = new Set(('a an the and or but if so as at by for from in into of off on onto out over to up with without about above after again against all am any are be been before being below between both can could did do does doing down during each few further had has have having he her here hers herself him himself his how i is it its itself just me more most my myself no nor not now once only other our ours ourselves own same she should some such than that their theirs them themselves then there these they this those through too under until very was we were what when where which while who whom why will would you your yours yourself yourselves yes one two three got get go going went come came say said like also back well much many even still way may might must shall let lets ok oh').split(' '));
function analyse(book) {
  const lang = 'en', cache = new Map(), cards = new Map(), none = new Map();
  let total = 0;
  for (const ch of book.chapters) for (const par of ch.p) {
    const toks = par.match(/[A-Za-zÀ-ÿ']+(?:-[A-Za-zÀ-ÿ']+)*/g) || [];
    toks.forEach((tok, i) => {
      total++;
      const lw = tok.toLowerCase().replace(/^'+|'+$/g, '');
      if (lw.length < 2) return;
      let hit = cache.get(lw);
      if (hit === undefined) { hit = W.lookup(lw, lang) || null; cache.set(lw, hit); }
      if (hit && hit.card && STOP.has(hit.card.w.toLowerCase())) return;
      if (hit && hit.card) { const x = cards.get(hit.card.id) || { c: hit.card, n: 0, s: '' }; x.n++; if (!x.s && par.length < 400) x.s = par; cards.set(hit.card.id, x); }
      else if (!hit && !(i > 0 && SKIP.test(tok)) && lw.length > 3) none.set(lw, (none.get(lw) || 0) + 1);
    });
  }
  const list = [...cards.values()].sort((a, b) => b.n - a.n);
  const known = list.filter(x => W.status(x.c.id) === 'known').length;
  return { total, list, known, none: [...none.entries()].filter(x => x[1] >= 2).sort((a, b) => b[1] - a[1]) };
}
// предложение из книги, где встречается слово (для заметки в карточке)
const sentenceWith = (par, w) => { const ss = par.split(/(?<=[.!?…])\s+/); return (ss.find(s => s.toLowerCase().includes(w.toLowerCase().split(' ')[0])) || ss[0]).slice(0, 220); };

const bookDeck = (b, make) => {
  let d = W.S.decks.find(x => x.lang === 'en' && x.bookId === b.id);
  if (!d && make) { d = W.newDeck('en', 'Книга: ' + b.title.slice(0, 40), 'my'); d.emoji = '📕'; d.bookId = b.id; W.save(); }
  return d;
};
function buildDeck(b, stat, n) {
  const d = bookDeck(b, true), have = new Set(d.cards.map(c => c.id));
  // слова уровней ниже вашего (по тесту уровня) считаем знакомыми — в колоду сразу идут нужные
  const ul = W.LEVELS.indexOf(W.userLevel('en')), below = c => { const i = W.LEVELS.indexOf(c.lv); return i >= 0 && i < ul; };
  let added = 0;
  for (const x of stat.list) {
    if (added >= n) break;
    if (have.has(x.c.id) || W.status(x.c.id) === 'known' || below(x.c) || W.commonWord(x.c.w) || STOP.has(x.c.w.toLowerCase()) || x.c.w.length < 3 || x.c.lv === 'live' && x.n < 2) continue;
    const c = Object.assign({}, x.c);
    if (x.s) c.n = [c.n, 'В книге: «' + sentenceWith(x.s, c.w) + '»'].filter(Boolean).join('\n');
    d.cards.push(c); added++;
  }
  W.touch(d); W.save(); W.resetDict();
  return { d, added };
}

W.bookParse = parseFile; // для проверок

// ---------- экраны ----------
const pickFile = onBook => {
  const inp = h('input', { type: 'file', accept: '.epub,.fb2,.txt,.zip,.pdf', style: 'display:none' });
  inp.onchange = async () => {
    const f = inp.files[0]; inp.remove(); if (!f) return;
    W.toast('Читаю книгу…');
    try { const b = await parseFile(f); await putBook(b); onBook(b); }
    catch (e) {
      W.toast(e.message === 'pdf' ? 'PDF не поддерживается: текст в нём часто «рассыпается». Сохраните книгу в EPUB, FB2 или TXT.'
        : e.message === 'empty' ? 'Не нашёл в файле текста. Попробуйте другой формат книги.' : 'Не получилось открыть файл: ' + e.message);
    }
  };
  document.body.append(inp); inp.click();
};

W.bookBlock = lang => {
  const box = h('div', { class: 'lessons' });
  const list = h('div');
  const render = books => W.put(list, books.map(b => h('button', { class: 'lesson', onclick: () => openBook(b.id) },
    h('span', { class: 'l-num' }, '📕'),
    h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, b.title),
      h('span', { class: 'muted small' }, [b.author, W.plural(b.chapters.length, 'глава', 'главы', 'глав'), b.pos ? 'остановились на ' + (b.pos + 1) : ''].filter(Boolean).join(' · '))))));
  if (window.indexedDB) allBooks().then(render).catch(() => {});
  box.append(h('div', { class: 'lvl-head' }, 'Мои книги'),
    h('p', { class: 'muted small' }, 'Загрузите свою книгу на английском (EPUB, FB2 или TXT): приложение разберёт её на главы, покажет, сколько слов вы уже знаете, и соберёт колоду из частых незнакомых. Книга хранится только в этом телефоне.'),
    list,
    h('button', { class: 'btn wide', onclick: () => pickFile(b => { W.renderTab(); openBook(b.id); }) }, '+ Загрузить книгу'));
  return box;
};

async function openBook(id) {
  const b = await getBook(id); if (!b) return;
  W.push(el => {
    let cached = null;
    const render = () => {
      // разбор книги — один раз за открытие; «знаете» пересчитываем дёшево по готовому списку
      const stat = cached || (cached = analyse(b)), d = bookDeck(b);
      stat.known = stat.list.filter(x => W.status(x.c.id) === 'known').length;
      const pct = stat.list.length ? Math.round(stat.known / stat.list.length * 100) : 0;
      const ch = (c, i) => h('button', { class: 'lesson', onclick: () => readChapter(b, i, render) },
        h('span', { class: 'l-num' + (i < b.pos ? ' done' : '') }, i < b.pos ? '✓' : i + 1),
        h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, c.t), h('span', { class: 'muted small' }, c.p.reduce((n, x) => n + wc(x), 0) + ' слов')));
      const mk = n => h('button', { class: 'chip', onclick: () => { const r = buildDeck(b, stat, n); W.toast(r.added ? 'В колоду «' + r.d.title + '» добавлено слов: ' + r.added + '. Она в «Словах» → «Мои колоды».' : 'Новых слов для колоды нет — все частые уже в ней или выучены'); render(); } }, '+' + n + ' слов');
      W.put(el, W.topbar('Книга'),
        h('h2', null, b.title), b.author ? h('p', { class: 'muted' }, b.author) : null,
        h('div', { class: 'today' },
          h('p', null, h('b', null, stat.total.toLocaleString('ru') + ' слов'), ' в книге, из них ', h('b', null, stat.list.length.toLocaleString('ru')), ' разных слов из словаря приложения.'),
          h('p', null, 'Вы уже знаете ', h('b', null, stat.known + ' (' + pct + '%)'), '. Незнакомых: ', h('b', null, String(stat.list.length - stat.known)), '.'),
          h('div', { class: 'bar' }, h('i', { style: 'width:' + pct + '%' }))),
        h('div', { class: 'lvl-head' }, 'Колода по книге'),
        h('p', { class: 'muted small' }, 'Самые частые незнакомые слова книги — сначала те, что встречаются чаще; слова ниже вашего уровня по тесту пропускаем. В каждой карточке — предложение из книги.' + (d ? ' Сейчас в колоде: ' + d.cards.length + '.' : '')),
        h('div', { class: 'chips' }, mk(50), mk(100), mk(200)),
        stat.none.length ? h('details', null, h('summary', { class: 'muted small' }, 'Слова, которых нет в словаре приложения · ' + stat.none.length),
          h('p', { class: 'muted small' }, stat.none.slice(0, 60).map(x => x[0] + ' (' + x[1] + ')').join(', ') + '. Их можно добавить в колоду при чтении и вписать перевод самой.')) : null,
        h('div', { class: 'lvl-head' }, 'Главы'),
        h('button', { class: 'btn primary wide', onclick: () => readChapter(b, Math.min(b.pos, b.chapters.length - 1), render) }, b.pos ? 'Продолжить: ' + b.chapters[Math.min(b.pos, b.chapters.length - 1)].t : 'Начать читать'),
        h('div', { class: 'lessons' }, b.chapters.map(ch)),
        h('button', { class: 'btn ghost wide', onclick: () => W.modal('Удалить книгу?', h('p', null, 'Книга удалится из этого телефона. Колода по ней и выученные слова останутся.'), [{ label: 'Удалить', cls: 'primary', fn: () => { delBook(b.id).then(() => W.renderTab()); W.closeAll(); return false; } }]) }, 'Удалить книгу'));
    };
    render();
    return render;
  });
}

function readChapter(b, i, refresh) {
  const c = b.chapters[i];
  const split = p => p.split(/(?<=[.!?…]["»”’)]?)\s+(?=[A-Z"“«(‘])/).map(s => [s, '']);
  // позицию сохраняем; экран книги перерисуется сам, когда к нему вернутся
  const save = async pos => { if (pos > b.pos) { b.pos = pos; await putBook(b); } };
  save(i);
  W.openText({ id: 'book:' + b.id + ':' + i, book: true, title: c.t, src: b.title + ' · глава ' + (i + 1) + ' из ' + b.chapters.length, p: c.p.map(split), gl: {}, q: [],
    deck: () => bookDeck(b, true),
    after: stop => i + 1 < b.chapters.length ? h('button', { class: 'btn primary wide', onclick: () => {
      stop(); save(i + 1);
      // следующую главу открываем, когда закрылась текущая (W.back асинхронный — через историю браузера)
      const go = () => { window.removeEventListener('popstate', go); setTimeout(() => readChapter(b, i + 1, refresh), 0); };
      window.addEventListener('popstate', go); W.back();
    } }, 'Следующая глава →') : h('p', { class: 'muted' }, 'Это последняя глава. Поздравляю!') });
}
})();
