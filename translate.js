'use strict';
// вкладка «Перевод»: перевод предложений с русского, сборка из слов, топики
(function () {
const W = window.W, h = W.h;

// ---------- банк предложений ----------
// свой банк предложений (BANK, к ним привязан урок грамматики), примеры из карточек, уроков и текстов;
// ключ — по английскому тексту, чтобы помнить ошибки и что уже встречалось
const words = s => s.trim().split(/\s+/).length;
let bank = null;
const buildBank = () => {
  bank = {};
  const add = (lang, lv, en, ru, hint, les) => {
    if (!en || !ru || /[а-яё]/i.test(en) || !/[а-яё]/i.test(ru)) return;
    // не для перевода: реплики с именем говорящего, два варианта через «/», прямая речь в кавычках
    if (/^[A-Z][a-z]+:/.test(en) || en.includes('/') || /[«»“”"]/.test(en)) return;
    const n = words(en);
    if (n < 3 || n > 16) return;
    const key = lang + ':' + W.audioKey(W.speechText(en));
    const b = (bank[lang] = bank[lang] || {});
    if (!b[key]) b[key] = { key, lang, lv, en, ru, hint, n, les };
  };
  const titles = {};
  for (const lang of Object.keys(W.LANGS)) for (const l of (window.GRAMMAR || {})[lang] || []) titles[l.id] = l.title;
  for (const lang of Object.keys(W.LANGS)) {
    const B = (window.BANK || {})[lang] || {};
    for (const lv in B) for (const [en, ru, les] of B[lv]) add(lang, lv, en, ru, les && titles[les] ? 'урок: ' + titles[les] : '', les || null);
    for (const d of W.allDecks(lang)) if (d.builtin) for (const c of d.cards) if (c.ex && c.lv && c.lv !== 'live') add(lang, c.lv, c.ex, c.et, c.w + ' — ' + c.t);
    for (const l of (window.GRAMMAR || {})[lang] || []) for (const b of l.blocks) if (b.t === 'ex') b.rows.forEach(r => add(lang, l.level, r[0], r[1], 'урок: ' + l.title, l.id));
    for (const t of (window.TEXTS || {})[lang] || []) for (const s of t.p.flat()) add(lang, t.level, s[0], s[1], 'текст «' + t.title + '»');
  }
};
const pool = (lang, lv) => { if (!bank) buildBank(); return Object.values(bank[lang] || {}).filter(x => x.lv === lv); };
W.sentences = pool;
W.lessonSentences = (lang, id) => { if (!bank) buildBank(); return Object.values(bank[lang] || {}).filter(x => x.les === id); };
const byKey = key => { if (!bank) buildBank(); const lang = key.split(':')[0]; return (bank[lang] || {})[key]; };

// ---------- сравнение ответа ----------
const CONTR = [[/\b(can)'t\b/g, 'cannot'], [/\bwon't\b/g, 'will not'], [/\bshan't\b/g, 'shall not'], [/n't\b/g, ' not'], [/'re\b/g, ' are'], [/\bi'm\b/g, 'i am'],
  [/'ve\b/g, ' have'], [/'ll\b/g, ' will'], [/\bcan not\b/g, 'cannot'], [/\ba (hundred|thousand|million)\b/g, 'one $1'],
  // 's (is / has) и 'd (would / had) отделяем знаком — при сравнении он равен любой из двух полных форм, а сами is и has не путаются
  [/\b(it|he|she|that|what|there|here|who|where|how|everything|nothing)'s\b/g, "$1 's"], [/\b(i|you|he|she|it|we|they|there|who)'d\b/g, "$1 'd"]];
const AMB = { "'s": ['is', 'has'], "'d": ['would', 'had'] };
const eq = (x, y) => x === y || (AMB[x] || []).includes(y) || (AMB[y] || []).includes(x);
// разговорные формы и одинаковые по смыслу обороты: gonna = going to, lots of = a lot of
const SPOKEN = [[/\bgonna\b/g, 'going to'], [/\bwanna\b/g, 'want to'], [/\bgotta\b/g, 'have to'], [/\blemme\b/g, 'let me'], [/\bgimme\b/g, 'give me'],
  [/\blots of\b/g, 'a lot of'], [/\bhave got to\b/g, 'have to'], [/\bhas got to\b/g, 'has to']];
// приводим к одному виду: регистр, апострофы, сокращения, числа словами, без знаков препинания
const norm = s => {
  let t = W.spellNumbers(String(s).toLowerCase().replace(/[’‘`]/g, "'"));
  for (const [re, to] of CONTR) t = t.replace(re, to);
  for (const [re, to] of SPOKEN) t = t.replace(re, to);
  return t.replace(/-/g, ' ').replace(/[^a-zäöüßàâçéèêëîïôûùüÿñæœ0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
};
const toks = s => norm(s).split(' ').filter(Boolean);
const ARTS = new Set(['a', 'an', 'the']);
// наибольшая общая подпоследовательность слов — что совпало, чего не хватает, что лишнее
const lcs = (a, b) => {
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) d[i][j] = eq(a[i], b[j]) ? d[i + 1][j + 1] + 1 : Math.max(d[i + 1][j], d[i][j + 1]);
  const inA = new Set(), inB = new Set();
  for (let i = 0, j = 0; i < m && j < n;) {
    if (eq(a[i], b[j]) && d[i][j] === d[i + 1][j + 1] + 1) { inA.add(i); inB.add(j); i++; j++; }
    else if (d[i + 1][j] >= d[i][j + 1]) i++; else j++;
  }
  return { inA, inB };
};
// опечатка в длинном слове; 'ok' от W.check тоже годится (Strasse = Straße)
const typo = (x, y) => x.length >= 5 && y.length >= 5 && W.check(x, { w: y }) !== 'bad';
// британское и американское написание и слова — одно и то же
const SYN = { mom: 'mum', moms: 'mums', apartment: 'flat', apartments: 'flats', movie: 'film', movies: 'films', color: 'colour', colors: 'colours',
  favorite: 'favourite', center: 'centre', neighbor: 'neighbour', neighbors: 'neighbours', theater: 'theatre', gray: 'grey', mommy: 'mummy',
  vacation: 'holiday', vacations: 'holidays', elevator: 'lift', highway: 'motorway' };
const HAVE = new Set(['have', 'has', "'s"]);
// слова к одному виду с номерами исходных слов (чтобы подсветить пропуски в эталоне):
// have got = have, don't have = haven't, do you have = have you, on the weekend = at the weekend
const canon = tokens => {
  const out = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t === 'got' && tokens.slice(Math.max(0, i - 3), i).some(x => HAVE.has(x))) continue;
    if ((t === 'do' || t === 'does') && tokens.slice(i + 1, i + 5).includes('have')) {
      const j = tokens.indexOf('have', i + 1);
      // do not have → have not; do you have → have you (have переносим на место do)
      out.push({ t: t === 'does' ? 'has' : 'have', i: [i, j] });
      for (let k = i + 1; k < j; k++) out.push({ t: tokens[k], i: [k] });
      i = j;
      continue;
    }
    if (t === 'on' && tokens[i + 1] === 'the' && tokens[i + 2] === 'weekend') { out.push({ t: 'at', i: [i] }); continue; }
    out.push({ t: SYN[t] || t, i: [i] });
  }
  return out;
};
const sameBag = (a, b) => {
  if (a.length !== b.length) return false;
  const left = b.slice();
  return a.every(x => { const k = left.findIndex(y => eq(x, y)); if (k < 0) return false; left.splice(k, 1); return true; });
};
// близкие слова: ответ «почти верно» с пояснением
const NEAR = [[['like', 'love'], 'Подходят оба: like — «нравится», love — сильнее, «очень люблю».'],
  [['start', 'begin'], 'Start и begin здесь почти одно и то же.'], [['started', 'began'], 'Start и begin здесь почти одно и то же.'],
  [['hard', 'difficult'], 'Hard и difficult здесь почти одно и то же.'], [['gift', 'present'], 'Gift и present — оба «подарок».'],
  [['trip', 'journey'], 'Trip — поездка целиком, journey — сама дорога; часто подходят оба.'], [['must', 'have'], 'Must и have to близки: must — «сам считаю нужным», have to — «так требуют обстоятельства».']];
const near = (a, b) => NEAR.find(([p]) => p.includes(a) && p.includes(b) && a !== b);
// 'ok' | 'close' (артикль, опечатка, порядок слов) | 'bad'; refMiss — номера слов эталона, которых нет у пользователя
const compare = (input, ref) => {
  const uc = canon(toks(input)), rc = canon(toks(ref)), u = uc.map(x => x.t), r = rc.map(x => x.t);
  const missSet = idx => new Set(idx.flatMap(i => rc[i].i));
  if (!u.length) return { v: 'bad', refMiss: missSet(r.map((x, i) => i)) };
  const { inA, inB } = lcs(r, u);
  if (inA.size === r.length && inB.size === u.length) return { v: 'ok', refMiss: new Set() };
  const miss = r.map((x, i) => i).filter(i => !inA.has(i));
  const extra = u.filter((x, j) => !inB.has(j));
  const missW = miss.map(i => r[i]);
  const refMiss = missSet(miss);
  // те же слова, другой порядок: по-русски обстоятельство часто стоит в начале
  if (sameBag(u, r)) return { v: 'close', refMiss, why: 'Слова те же, порядок другой — сравните с образцом.' };
  const onlyArts = [...missW, ...extra].every(x => ARTS.has(x));
  const oneTypo = missW.length === 1 && extra.length === 1 && typo(extra[0], missW[0]);
  // must ↔ have to: одно слово против двух (have + лишнее to)
  const rest = (xs, w) => xs.filter(x => x !== w);
  const mustHave = (a, b) => a.includes('must') && b.includes('have') && b.includes('to') && rest(a, 'must').length === 0 && rest(rest(b, 'have'), 'to').length === 0;
  const pair = missW.length === 1 && extra.length === 1 ? near(missW[0], extra[0])
    : mustHave(missW, extra) || mustHave(extra, missW) ? NEAR[NEAR.length - 1] : null;
  return { v: onlyArts || oneTypo || pair ? 'close' : 'bad', refMiss,
    why: onlyArts ? 'Проверьте артикли.' : oneTypo ? 'Опечатка: «' + extra[0] + '» → «' + missW[0] + '».' : pair ? pair[1] : '' };
};
W.translateCompare = compare;

// эталон с подсветкой слов, которых не хватило в ответе
const refView = (ref, refMiss) => {
  let k = 0;
  return h('div', { class: 'tr-ref' }, ref.split(/(\s+)/).map(part => {
    if (/^\s+$/.test(part) || !part) return part;
    // одно слово эталона может дать несколько токенов (don't → do not), поэтому сверяем по счёту токенов
    const n = toks(part).length, hit = [...Array(n)].some((_, q) => refMiss.has(k + q));
    k += n;
    return hit ? h('mark', null, part) : part;
  }));
};

// ---------- ошибки перевода ----------
// S.tmist[ключ] = время ошибки (> 0) или исправления (< 0)
const noteMistake = (key, ok) => { const S = W.S; S.tmist = S.tmist || {}; if (ok) { if (S.tmist[key] > 0) S.tmist[key] = -Date.now(); } else S.tmist[key] = Date.now(); };
const mistakes = lang => Object.entries(W.S.tmist || {}).filter(([k, v]) => v > 0 && k.startsWith(lang + ':')).map(([k]) => byKey(k)).filter(Boolean);
W.translateMistakeCount = lang => mistakes(lang).length;

// ---------- общая оболочка экрана ----------
const shell = (el, title) => {
  const bar = h('i'), body = h('div', { class: 'study' }), count = h('span', { class: 'muted small' });
  W.put(el, W.topbar(title, null, 'close'), h('div', { class: 'bar' }, bar), count, body);
  el.classList.add('study-screen');
  return { body, progress: (d, n) => { bar.style.width = Math.round(d / n * 100) + '%'; count.textContent = d + ' / ' + n; } };
};
const summary = (s, right, total, again, id) => {
  const pct = total ? Math.round(right / total * 100) : 0;
  if (right > 0) W.drillDone(id, 'translate', pct);
  W.put(s.body, h('div', { class: 'summary' }, h('div', { class: 'big' }, right + ' из ' + total),
    h('p', null, pct === 100 ? 'Без единой ошибки!' : pct >= 70 ? 'Хороший результат.' : 'Стоит повторить ещё раз.'),
    h('div', { class: 'col-btns' }, h('button', { class: 'btn', onclick: again }, 'Ещё 10'), h('button', { class: 'btn primary', onclick: W.back }, 'Готово'))));
};
const pick = (list, n) => W.freshFirst(list, n);
W.noteTranslateMistake = (key, ok) => noteMistake(key, ok);
W.openTranslateMistakes = lang => openSentences(lang, null, () => mistakes(lang));

// ---------- задания на одно предложение (их же берёт отработка грамматики) ----------
// t = { body, lang, q, grade(ok), next } — задание рисует себя в body, сообщает оценку и по «Дальше» вызывает next
W.tasks = W.tasks || {};
// «Дальше» встаёт на место только что нажатой кнопки — первые мгновения она не нажимается, чтобы двойной тап не пропустил результат
W.nextBtn = fn => { const b = h('button', { type: 'button', class: 'btn primary wide', disabled: true, onclick: fn }, 'Дальше'); setTimeout(() => { b.disabled = false; }, 400); return b; };
// оценка ставится один раз (t.graded), даже если нажать «Ошибся» и «Пропустить» подряд
const scored = (t, acts) => ok => { if (t.graded) return; t.graded = true; t.grade(ok); noteMistake(t.q.key, ok); W.save(); W.put(acts, W.nextBtn(t.next)); };

// перевести с русского
W.tasks.translate = t => {
  const { q, lang } = t, res = h('div', { class: 'result' }), acts = h('div', { class: 'col-btns' });
  W.markSeen(q.key);
  const inp = h('textarea', { class: 'write-in tr-in', rows: 3, placeholder: 'Перевод на ' + (lang === 'en' ? 'английский' : 'немецкий'), autocapitalize: 'sentences', autocomplete: 'off', spellcheck: 'false' });
  let done = false, hinted = false;
  const grade = scored(t, acts);
  const check = () => {
    if (done || !inp.value.trim()) return;
    done = true; inp.readOnly = true;
    const c = compare(inp.value, q.en);
    if (c.v === 'ok' || c.v === 'close') {
      res.className = 'result ' + (c.v === 'ok' ? 'right' : 'close');
      W.put(res, h('b', null, c.v === 'ok' ? 'Верно!' : 'Почти верно'), c.why ? h('div', null, c.why) : null, refView(q.en, c.refMiss), W.soundBtn(q.en, lang));
      grade(true);
    } else {
      res.className = 'result wrong';
      W.put(res, h('b', null, 'Сравните с образцом'), h('div', { class: 'muted small' }, 'Выделены слова, которых нет в вашем ответе. Перевести можно по-разному — оцените сами.'),
        refView(q.en, c.refMiss), W.soundBtn(q.en, lang));
      W.put(acts, h('div', { class: 'row-btns' },
        h('button', { class: 'btn', onclick: () => grade(false) }, 'Ошибся'),
        h('button', { class: 'btn primary', onclick: () => grade(true) }, 'Мой вариант тоже верный')));
    }
  };
  const hintBox = h('div', { class: 'muted small tr-hint' });
  const hintBtn = h('button', { class: 'btn ghost', onclick: () => {
    if (hinted) return; hinted = true;
    // подсказка: первые буквы слов и откуда предложение
    W.put(hintBox, h('div', null, q.en.split(/\s+/).map(w => w.replace(/^([^A-Za-zÄÖÜäöüß]*[A-Za-zÄÖÜäöüß])[A-Za-zÄÖÜäöüß'’]*/, '$1…')).join(' ')), h('div', null, q.hint || ''));
  } }, 'Подсказка');
  W.put(t.body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, t.label || 'Переведите на ' + (lang === 'en' ? 'английский' : 'немецкий')), h('div', { class: 'q tr-ru' }, q.ru), hintBox),
    inp, h('div', { class: 'w-actions' }, h('button', { class: 'btn primary wide', onclick: check }, 'Проверить')), res, acts,
    h('div', { class: 'col-btns' }, hintBtn, h('button', { class: 'btn ghost', onclick: () => { done = true; if (!t.graded) { t.graded = true; t.grade(false); noteMistake(q.key, false); } W.save(); t.next(); } }, 'Пропустить')));
  inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); check(); } });
  setTimeout(() => inp.focus(), 60);
};

// собрать перевод из плашек; others — откуда брать лишние слова
W.tasks.tiles = t => {
  const { q, lang } = t, others = t.others || pool(lang, q.lv);
  W.markSeen(q.key);
  // плашки: слова предложения без знаков препинания + два лишних слова из других предложений
  const clean = w => w.replace(/^[^\wÄÖÜäöüß']+|[^\wÄÖÜäöüß']+$/g, '');
  const raw = q.en.split(/\s+/);
  // заглавная буква подсказала бы начало предложения — в английском её убираем (кроме I), и у второго предложения тоже;
  // в немецком существительные с заглавной, их не трогаем
  const own = raw.map((w, k) => {
    const c = clean(w), start = k === 0 || /[.!?]$/.test(raw[k - 1]);
    return lang === 'en' && start && c && c !== 'I' && !/^I'/.test(c) ? c[0].toLowerCase() + c.slice(1) : c;
  }).filter(Boolean);
  const ownSet = new Set(own.map(w => w.toLowerCase()));
  const extra = [];
  // лишние слова — из середины других предложений и без заглавных, чтобы не выделялись
  for (const o of W.shuffle(others).slice(0, 40)) { for (const w of o.en.split(/\s+/).slice(1).map(clean)) if (w && w === w.toLowerCase() && !ownSet.has(w) && !extra.includes(w) && extra.length < 2) extra.push(w); if (extra.length >= 2) break; }
  const tiles = W.shuffle([...own, ...extra]).map((w, k) => ({ w, k }));
  const chosen = [];
  const line = h('div', { class: 'tr-tiles tr-line' }), bankEl = h('div', { class: 'tr-tiles' }), res = h('div', { class: 'result' }), acts = h('div', { class: 'col-btns' });
  let done = false;
  const draw = () => {
    W.put(line, chosen.length ? chosen.map(x => h('button', { class: 'tr-tile on', onclick: () => { if (done) return; chosen.splice(chosen.indexOf(x), 1); draw(); } }, x.w)) : h('span', { class: 'muted small' }, 'Нажимайте на слова по порядку'));
    W.put(bankEl, tiles.map(x => h('button', { class: 'tr-tile', disabled: chosen.includes(x) || done, onclick: () => { chosen.push(x); draw(); } }, x.w)));
  };
  const grade = scored(t, acts);
  const check = () => {
    if (done || !chosen.length) return;
    done = true; draw();
    const said = chosen.map(x => x.w).join(' ');
    // please в начале или в конце — оба порядка верны
    const flat = x => toks(x).filter(w => w !== 'please').join(' ');
    const ok = toks(said).join(' ') === toks(q.en).join(' ') || (toks(q.en).includes('please') && flat(said) === flat(q.en));
    res.className = 'result ' + (ok ? 'right' : 'wrong');
    W.put(res, h('b', null, ok ? 'Верно!' : 'Не совсем'), h('div', { class: 'tr-ref' }, q.en), W.soundBtn(q.en, lang));
    if (ok) grade(true);
    else W.put(acts, h('div', { class: 'row-btns' }, h('button', { class: 'btn', onclick: () => { grade(false); t.next(); } }, 'Дальше'), h('button', { class: 'btn ghost', onclick: () => grade(true) }, 'Мой порядок тоже верный')));
  };
  draw();
  W.put(t.body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, t.label || 'Соберите перевод'), h('div', { class: 'q tr-ru' }, q.ru)),
    line, bankEl, h('div', { class: 'w-actions' }, h('button', { class: 'btn primary wide', onclick: check }, 'Проверить')), res, acts,
    h('div', { class: 'col-btns' }, h('button', { class: 'btn ghost', onclick: () => { if (done) return; chosen.length = 0; draw(); } }, 'Сбросить')));
};
// какие задания подходят предложению: длинное в плашки не годится, диктант — только со звуком и без цифр (год на слух пишут словами)
W.tasks.kinds = q => ['translate'].concat(q.n <= 10 ? ['tiles'] : [], q.n <= 12 && W.S.set.sound && !/[-—–0-9]/.test(q.en) ? ['listen'] : []);

// ---------- режимы вкладки: 10 заданий одного вида ----------
function openRun(lang, kind, title, list, id) {
  W.push(el => {
    const s = shell(el, title);
    const start = () => {
      const qs = list();
      if (!qs.length) return W.put(s.body, h('p', { class: 'muted empty' }, 'Для этого уровня пока нет предложений.'));
      let i = 0, right = 0;
      const ask = () => {
        s.progress(i, qs.length);
        if (i >= qs.length) return summary(s, right, qs.length, start, id);
        W.tasks[kind]({ body: s.body, lang, q: qs[i], grade: ok => { if (ok) right++; }, next: () => { i++; ask(); } });
      };
      ask();
    };
    start();
  });
}
const openSentences = (lang, lv, given) => openRun(lang, 'translate', given ? 'Ошибки в предложениях' : 'Перевод · ' + lv,
  () => given ? pick(given(), 10) : pick(pool(lang, lv).filter(x => x.n <= 14), 10), 'tr-sent-' + lang);
const openTiles = (lang, lv) => openRun(lang, 'tiles', 'Собрать из слов · ' + lv, () => pick(pool(lang, lv).filter(x => x.n >= 3 && x.n <= 10), 10), 'tr-tiles-' + lang);
const openListen = (lang, lv) => openRun(lang, 'listen', 'На слух · ' + lv, () => pick(pool(lang, lv).filter(x => W.tasks.kinds(x).includes('listen')), 10), 'tr-listen-' + lang);

// ---------- режим 3: топики ----------
function openTopic(t, lang) {
  W.push(el => {
    // W.S может смениться (синхронизация с другим устройством), поэтому каждый раз берём текущий
    const store = () => (W.S.topics = W.S.topics || {});
    const saved = store()[t.id] || {};
    const inp = h('textarea', { class: 'write-in tr-in topic-in', rows: 9, placeholder: 'Пишите по-английски…', spellcheck: 'false' });
    inp.value = saved.text || '';
    const cnt = h('span', { class: 'muted small' });
    const phraseEls = t.phrases.map(p => ({ p, el: h('li', null, h('b', null, p[0]), ' — ', p[1]) }));
    // какие полезные выражения уже есть в тексте — зачёркиваем, чтобы было видно прогресс
    // «There is / There are…», «He / She has got…», «It's a … directed by…» — варианты через «/» и части вокруг «…»
    const variants = p => {
      const parts = p.replace(/\(.*?\)/g, ' ').split(' / ');
      if (parts.length !== 2) return parts;
      const [a, b] = parts.map(x => x.trim());
      return a.includes(' ') ? [a, b] : [a + ' ' + b.split(' ').slice(1).join(' '), b];
    };
    const used = (txt, p) => variants(p).some(v => {
      const frags = v.split(/…|\.\.\./).map(f => toks(f).join(' ')).filter(Boolean);
      return frags.length > 0 && frags.every(f => txt.includes(' ' + f + ' '));
    });
    const mark = () => {
      const txt = ' ' + toks(inp.value).join(' ') + ' ';
      phraseEls.forEach(({ p, el }) => el.classList.toggle('used', used(txt, p[0])));
      const n = inp.value.trim() ? words(inp.value) : 0;
      cnt.textContent = n + ' ' + (n % 10 === 1 && n % 100 !== 11 ? 'слово' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 'слова' : 'слов') + ' · нужно ' + t.len;
    };
    let timer = null;
    // текст сразу кладём в состояние, а на диск пишем с небольшой задержкой и при уходе из поля / сворачивании
    const keep = () => { const T = store(); T[t.id] = Object.assign({}, T[t.id], { text: inp.value, ts: Date.now() }); };
    const flush = () => { clearTimeout(timer); timer = null; W.save(); };
    inp.addEventListener('input', () => { mark(); keep(); clearTimeout(timer); timer = setTimeout(flush, 600); });
    inp.addEventListener('blur', () => { if (timer) flush(); });
    const model = h('div', { class: 'tr-model', hidden: true },
      h('div', { class: 'lvl-head' }, 'Образец'),
      ...t.model.map(m => h('p', null, h('span', null, m[0]), ' ', W.soundBtn(m[0], lang), h('br'), h('span', { class: 'muted small' }, m[1]))),
      h('p', { class: 'muted small' }, 'Сравните со своим текстом: всё ли из плана вы раскрыли, какие выражения можно взять себе. Ваш текст не обязан совпадать с образцом.'));
    const done = () => {
      if (!inp.value.trim()) return W.toast('Сначала напишите текст');
      clearTimeout(timer); timer = null;
      store()[t.id] = { text: inp.value, ts: Date.now(), done: 1 };
      W.drillDone('tr-topic-' + lang, 'topic', 100);
      model.hidden = false; model.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };
    W.put(el, W.topbar(t.title, null, 'close'),
      h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, 'Топик · ' + t.level), h('div', { class: 'q' }, t.task)),
      h('div', { class: 'lvl-head' }, 'План'), h('ul', { class: 'tr-plan' }, t.plan.map(p => h('li', null, p))),
      h('div', { class: 'lvl-head' }, 'Полезные выражения'), h('ul', { class: 'tr-phrases' }, phraseEls.map(x => x.el)),
      inp, cnt,
      h('div', { class: 'col-btns' }, h('button', { class: 'btn primary wide', onclick: done }, 'Готово — показать образец'),
        saved.done ? h('button', { class: 'btn ghost', onclick: () => { model.hidden = !model.hidden; } }, 'Показать / скрыть образец') : null),
      model);
    el.classList.add('study-screen');
    mark();
  });
}

// черновики и прочее — на диск, когда приложение сворачивают или закрывают
addEventListener('pagehide', () => W.save(true));
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') W.save(true); });

// ---------- вкладка ----------
let curLv = null;
W.renderTranslate = root => {
  const lang = W.S.lang;
  const own = W.userLevel(lang);
  const lv = curLv || (own === 'A0' ? 'A1' : own);
  const levels = W.LEVELS.filter(l => pool(lang, l).length >= 10);
  const L = levels.includes(lv) ? lv : levels[0];
  const topics = ((window.TOPICS || {})[lang] || []).filter(t => t.level === L);
  const mist = mistakes(lang), seen = W.S.seen || {};
  const fresh = L ? pool(lang, L).filter(x => !seen[x.key]).length : 0;
  const card = (emoji, title, sub, fn) => h('button', { class: 'lesson', onclick: fn },
    h('span', { class: 'l-num', 'aria-hidden': 'true' }, emoji), h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, title), h('span', { class: 'muted small' }, sub)));
  W.put(root,
    h('header', { class: 'head' }, W.practiceSwitch('trans'), h('h1', null, 'Перевод'), W.langSwitch()),
    h('p', { class: 'muted' }, 'Переводите с русского, собирайте из слов, пишите на слух и сочиняйте короткие тексты на тему.'),
    levels.length ? h('div', { class: 'chips' }, levels.map(l => h('button', { class: 'chip' + (l === L ? ' on' : ''), 'aria-pressed': l === L ? 'true' : 'false', onclick: () => { curLv = l; W.renderTab(); } }, l))) : null,
    !levels.length ? h('p', { class: 'muted empty' }, 'Для этого языка задания пока готовятся.') : h('section', null,
      h('div', { class: 'lvl-head' }, 'Задания · ' + (W.levelInfo[L] || L)),
      fresh ? h('p', { class: 'muted small' }, 'Предложений уровня ' + L + ', которые вам ещё не встречались: ' + fresh + '. Они идут первыми.') : null,
      card('✍', 'Перевести предложение', '10 предложений · пишете перевод сами', () => openSentences(lang, L)),
      card('▦', 'Собрать из слов', '10 предложений · складываете из плашек', () => openTiles(lang, L)),
      W.S.set.sound ? card('♪', 'На слух', '10 предложений · слушаете и записываете', () => openListen(lang, L)) : null,
      mist.length ? card('!', 'Ошибки в предложениях', mist.length + ' к повторению · как перевод с русского', () => openSentences(lang, L, () => mistakes(lang))) : null),
    topics.length ? h('section', null,
      h('div', { class: 'lvl-head' }, 'Топики · ' + L),
      ...topics.map(t => { const d = (W.S.topics || {})[t.id]; return card(d && d.done ? '✓' : '¶', t.title, d && d.done ? 'написано · можно переписать' : d && d.text ? 'черновик сохранён' : t.len + ' · ' + t.plan.length + ' пункта плана', () => openTopic(t, lang)); })) : null);
};
})();
