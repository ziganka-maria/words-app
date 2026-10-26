'use strict';
// ядро: состояние, хранение, интервальные повторения, проверка ответов
(function () {
const W = window.W = window.W || {};

W.LANGS = {
  en: { name: 'Английский', short: 'EN', tts: 'en-US' },
  de: { name: 'Немецкий', short: 'DE', tts: 'de-DE' }
};
W.REG = { n: 'нейтрально', i: 'разговорное', s: 'сленг', r: 'грубо' };

// хранилище: у гостя ключ BASE, у каждого аккаунта свой — BASE:<id пользователя>
const BASE = 'words-state-v1';
let KEY = BASE;
W.storeKey = () => KEY;
const defaults = () => ({
  v: 1, lang: 'en', folders: [], decks: [], prog: {}, fav: {}, days: {}, gram: {}, level: {}, stamps: {}, read: {}, drill: {}, tomb: {}, mod: 0,
  newToday: { d: 0 },
  set: { sound: true, hideRude: false, newPerDay: 10, dir: 'fw', theme: 'auto', voice: 'us', goal: 20 }
});
W.defaults = defaults;

// проверка формы данных: битая копия не должна ломать запуск
const isObj = x => !!x && typeof x === 'object' && !Array.isArray(x);
W.validState = s => isObj(s) && s.v === 1 &&
  Array.isArray(s.decks) && s.decks.every(d => isObj(d) && typeof d.id === 'string' && Array.isArray(d.cards) &&
    d.cards.every(c => isObj(c) && typeof c.id === 'string' && typeof c.w === 'string' && typeof c.t === 'string')) &&
  (s.folders === undefined || (Array.isArray(s.folders) && s.folders.every(isObj))) &&
  ['prog', 'fav', 'days', 'gram', 'set', 'newToday', 'tomb', 'level', 'stamps', 'read', 'drill'].every(k => s[k] === undefined || isObj(s[k]));

W.normalize = s => {
  const d = defaults();
  for (const k in d) if (s[k] === undefined) s[k] = d[k];
  s.set = Object.assign(d.set, s.set);
  for (const l in s.level) if (!s.level[l] || !['A0', 'A1', 'A2', 'B1', 'B2', 'C1'].includes(s.level[l].lv) || !s.level[l].ts) delete s.level[l];
  return s;
};
W.load = (key = KEY) => {
  let s = null, raw = null;
  try { raw = localStorage.getItem(key); s = JSON.parse(raw); } catch (e) {}
  if (!W.validState(s)) {
    // испорченные данные не затираем молча — откладываем копию
    if (raw) try { localStorage.setItem(key + '-broken', raw); } catch (e) {}
    return defaults();
  }
  return W.normalize(s);
};
W.S = W.load();
// переключиться на хранилище аккаунта (uid) или гостя (null)
W.useStore = uid => { KEY = uid ? BASE + ':' + uid : BASE; W.S = W.load(); };
W.hasData = s => !!s && (Object.keys(s.prog || {}).length > 0 || (s.decks || []).length > 0);
W.peekGuest = () => W.load(BASE);
W.clearGuest = () => { try { localStorage.removeItem(BASE); } catch (e) {} };

let saveWarned = false;
// quiet — запись без отметки «изменено» (когда кладём данные, пришедшие с сервера)
W.save = quiet => {
  if (!quiet) W.S.mod = Date.now();
  try { localStorage.setItem(KEY, JSON.stringify(W.S)); saveWarned = false; }
  catch (e) {
    if (!saveWarned && W.toast) W.toast('Не удалось сохранить! Сделайте копию в «Ещё» → «Сохранность»');
    saveWarned = true;
  }
  if (!quiet && W.afterSave) W.afterSave();
};
// отметки времени для слияния данных с разных устройств
W.touch = o => { o.u = Date.now(); return o; };
W.bury = key => { W.S.tomb[key] = Date.now(); };
// приложение открыто в двух местах (иконка и вкладка): берём свежие данные, чтобы не затереть их
window.addEventListener('storage', e => {
  if (e.key !== KEY || !e.newValue) return;
  try { const s = JSON.parse(e.newValue); if (W.validState(s)) { W.S = W.load(); if (W.onExternalChange) W.onExternalChange(); } } catch (x) {}
});

// слияние двух копий данных (этот телефон и сервер): прогресс — по каждому слову, колоды — по каждой колоде
W.merge = (a, b) => {
  a = W.normalize(JSON.parse(JSON.stringify(a))); b = W.normalize(JSON.parse(JSON.stringify(b)));
  const newer = (a.mod || 0) >= (b.mod || 0) ? a : b, older = newer === a ? b : a;
  const r = JSON.parse(JSON.stringify(newer));
  const tomb = Object.assign({}, older.tomb);
  for (const k in newer.tomb) tomb[k] = Math.max(tomb[k] || 0, newer.tomb[k]);
  const month3 = Date.now() - 90 * 864e5;
  for (const k in tomb) if (tomb[k] < month3) delete tomb[k];
  r.tomb = tomb;
  r.prog = {};
  for (const id of new Set([...Object.keys(a.prog), ...Object.keys(b.prog)])) {
    const x = a.prog[id], y = b.prog[id];
    r.prog[id] = !x ? y : !y ? x : ((x.u || 0) !== (y.u || 0) ? ((x.u || 0) > (y.u || 0) ? x : y) : (x.n >= y.n ? x : y));
  }
  r.days = Object.assign({}, a.days);
  for (const k in b.days) r.days[k] = Math.max(r.days[k] || 0, b.days[k]);
  r.gram = Object.assign({}, a.gram);
  for (const k in b.gram) {
    const x = r.gram[k], y = b.gram[k];
    r.gram[k] = !x ? y : { done: !!(x.done || y.done), best: Math.max(x.best || 0, y.best || 0) };
  }
  // результат теста уровня — самый свежий
  r.level = Object.assign({}, a.level);
  for (const l in b.level) if (!r.level[l] || (b.level[l].ts || 0) > (r.level[l].ts || 0)) r.level[l] = b.level[l];
  // марки: дата первого получения
  r.stamps = Object.assign({}, a.stamps);
  for (const k in b.stamps) r.stamps[k] = r.stamps[k] ? Math.min(r.stamps[k], b.stamps[k]) : b.stamps[k];
  // тексты и тренажёры: лучший результат и большее число прохождений
  const best = (x, y) => !x ? y : !y ? x : Object.assign({}, x, y, { n: Math.max(x.n || 0, y.n || 0), best: Math.max(x.best || 0, y.best || 0), ts: Math.max(x.ts || 0, y.ts || 0) });
  r.read = {}; for (const k of new Set([...Object.keys(a.read), ...Object.keys(b.read)])) r.read[k] = best(a.read[k], b.read[k]);
  r.drill = {}; for (const k of new Set([...Object.keys(a.drill), ...Object.keys(b.drill)])) r.drill[k] = best(a.drill[k], b.drill[k]);
  r.fav = {};
  for (const id of new Set([...Object.keys(a.fav), ...Object.keys(b.fav)])) {
    const t = Math.max(+a.fav[id] || 0, +b.fav[id] || 0);
    if (!(tomb['fav:' + id] > t)) r.fav[id] = t;
  }
  const byId = (xs, ys, kind) => {
    const m = new Map();
    for (const o of [...xs, ...ys]) { const p = m.get(o.id); if (!p || (o.u || 0) > (p.u || 0)) m.set(o.id, o); }
    return [...m.values()].filter(o => !(tomb[kind + ':' + o.id] >= (o.u || 0)));
  };
  r.decks = byId(older.decks, newer.decks, 'deck');
  r.folders = byId(older.folders, newer.folders, 'folder');
  r.mod = Math.max(a.mod || 0, b.mod || 0);
  return r;
};

// ---------- даты ----------
W.dayNum = (d = new Date()) => Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 864e5);
// местная дата (toISOString дал бы UTC: в Москве после полуночи до 3:00 — «вчера»)
W.dayKey = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');

// ---------- встроенные колоды ----------
W.slug = s => s.toLowerCase().replace(/[^a-z0-9а-яёäöüß]+/g, '-').replace(/^-+|-+$/g, '') || 'x';
W.uid = p => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

const toCard = (a, lang, deckId, used, reg) => {
  // 7-й элемент — другие верные ответы через «|». Внимание: id строится из слова,
  // поэтому написание встроенного слова после выпуска не менять — иначе пропадёт прогресс
  const c = Array.isArray(a) ? { w: a[0], t: a[1], ex: a[2] || '', et: a[3] || '', r: a[4] || reg || 'i', n: a[5] || '', a: a[6] || '' } : a;
  let id = deckId + ':' + W.slug(c.w), k = 2;
  while (used.has(id)) id = deckId + ':' + W.slug(c.w) + '-' + k++;
  used.add(id);
  c.id = id; c.lang = lang;
  return c;
};

W.prepare = () => {
  const C = window.CONTENT || {};
  for (const lang in C) for (const f of C[lang].folders) {
    f.lang = lang; f.builtin = true;
    for (const d of f.decks) {
      const used = new Set();
      d.lang = lang; d.folder = f.id; d.builtin = true;
      d.cards = d.cards.map(a => toCard(a, lang, d.id, used, d.reg));
      d.cards.forEach(c => { c.lv = d.level || 'live'; });
    }
  }
};

W.builtinFolders = lang => ((window.CONTENT || {})[lang] || { folders: [] }).folders;
W.userDecks = lang => W.S.decks.filter(d => d.lang === lang);
W.allDecks = lang => W.builtinFolders(lang).flatMap(f => f.decks).concat(W.userDecks(lang));
W.findDeck = id => {
  for (const lang in W.LANGS) for (const d of W.allDecks(lang)) if (d.id === id) return d;
  return null;
};
W.vis = c => !(W.S.set.hideRude && c.r === 'r');
W.allCards = lang => {
  const m = new Map();
  for (const d of W.allDecks(lang)) for (const c of d.cards) if (!m.has(c.id) && W.vis(c)) m.set(c.id, c);
  return [...m.values()];
};

// ---------- интервальные повторения ----------
const INT = [0, 1, 2, 4, 8, 16, 32];
W.KNOWN_BOX = 4;

W.status = id => {
  const p = W.S.prog[id];
  if (!p) return 'new';
  return p.b >= W.KNOWN_BOX ? 'known' : 'learning';
};
W.isDue = id => { const p = W.S.prog[id]; return !!p && p.d <= W.dayNum(); };

W.preview = (id, r) => {
  const p = W.S.prog[id] || { b: 0 };
  if (r === 'again') return 0;
  if (r === 'hard') return Math.max(1, INT[Math.max(1, p.b)] >> 1);
  if (r === 'good') return INT[Math.min(6, p.b + 1)];
  return INT[Math.min(6, p.b + 2)];
};

// принимает карточку целиком: лимит новых слов считается отдельно для каждого языка
W.rate = (c, r) => {
  const t = W.dayNum(), S = W.S, id = c.id;
  let p = S.prog[id];
  if (!p) {
    p = S.prog[id] = { b: 0, d: t, n: 0, ok: 0, bad: 0 };
    if (S.newToday.d !== t) S.newToday = { d: t };
    S.newToday[c.lang] = (S.newToday[c.lang] || 0) + 1;
  }
  const gap = W.preview(id, r);
  p.n++;
  if (r === 'again') { p.b = 1; p.bad++; }
  else {
    p.ok++;
    if (r === 'hard') p.b = Math.max(1, p.b);
    else p.b = Math.min(6, p.b + (r === 'good' ? 1 : 2));
  }
  p.d = t + gap;
  p.u = Date.now();
  const k = W.dayKey();
  S.days[k] = (S.days[k] || 0) + 1;
  W.save();
};

// ответ в тесте/письме двигает карточку только если она новая или «к повторению».
// soft — для «Карточек»: «ещё учу» не роняет слово, которому ещё рано повторяться
W.record = (c, ok, soft) => {
  const early = W.S.prog[c.id] && !W.isDue(c.id);
  if (!ok) { if (!(soft && early)) W.rate(c, 'again'); return; }
  if (!early) W.rate(c, 'good');
};
// оценка в «Заучивании»: досрочное повторение не растягивает интервал
W.grade = (c, r) => {
  if (W.S.prog[c.id] && !W.isDue(c.id)) { if (r === 'again') W.rate(c, 'again'); }
  else W.rate(c, r);
};

W.newBudget = lang => {
  const S = W.S, t = W.dayNum();
  return Math.max(0, S.set.newPerDay - (S.newToday.d === t ? S.newToday[lang] || 0 : 0));
};

W.LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
W.levelInfo = { A0: 'Начальный (до A1)', A1: 'A1 · Начальный', A2: 'A2 · Элементарный', B1: 'B1 · Средний', B2: 'B2 · Выше среднего', C1: 'C1 · Продвинутый' };
W.userLevel = lang => (W.S.level[lang] && W.S.level[lang].lv) || 'A1';
// новые слова на сегодня: по очереди из колод уровня пользователя и из «живого языка», потом остальные по уровню
W.freshOrder = (cards, lang) => {
  const lv = W.userLevel(lang) === 'A0' ? 'A1' : W.userLevel(lang);
  const own = cards.filter(c => c.lv === lv), live = cards.filter(c => c.lv === 'live'), mine = cards.filter(c => !c.lv);
  const rank = c => { const i = W.LEVELS.indexOf(c.lv); return i < 0 ? 99 : Math.abs(i - W.LEVELS.indexOf(lv)) + (i < W.LEVELS.indexOf(lv) ? 0.5 : 0); };
  const rest = cards.filter(c => c.lv && c.lv !== lv && c.lv !== 'live').map((c, i) => [c, i]).sort((a, b) => rank(a[0]) - rank(b[0]) || a[1] - b[1]).map(x => x[0]);
  const out = [];
  for (let i = 0; i < Math.max(own.length, live.length, mine.length); i++) { if (mine[i]) out.push(mine[i]); if (own[i]) out.push(own[i]); if (live[i]) out.push(live[i]); }
  return out.concat(rest);
};
W.queue = cards => {
  const t = W.dayNum(), P = W.S.prog;
  const due = cards.filter(c => P[c.id] && P[c.id].d <= t).sort((a, b) => P[a.id].d - P[b.id].d).slice(0, 50);
  const fresh = cards.length ? W.freshOrder(cards.filter(c => !P[c.id]), cards[0].lang).slice(0, W.newBudget(cards[0].lang)) : [];
  return { due, fresh };
};

W.counts = cards => {
  const r = { total: cards.length, new: 0, learning: 0, known: 0, due: 0 };
  for (const c of cards) { r[W.status(c.id)]++; if (W.isDue(c.id)) r.due++; }
  return r;
};

W.streak = () => {
  const d = new Date(); let n = 0;
  if (!W.S.days[W.dayKey(d)]) d.setDate(d.getDate() - 1);
  while (W.S.days[W.dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
};

W.smart = lang => {
  const all = W.allCards(lang), P = W.S.prog;
  return [
    { id: 'smart:fav', smart: true, lang, emoji: '★', title: 'Избранное', cards: all.filter(c => W.S.fav[c.id]) },
    { id: 'smart:hard', smart: true, lang, emoji: '✎', title: 'Трудные', cards: all.filter(c => P[c.id] && P[c.id].bad > 0 && P[c.id].b <= 2) }
  ];
};

// ---------- проверка ответа ----------
const deumlaut = s => s.replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue');
const plain = s => s.replace(/ß/g, 's').replace(/[äöü]/g, m => ({ ä: 'a', ö: 'o', ü: 'u' })[m]);
const clean = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
// апострофы не считаем ошибкой: «im down» = «I'm down»
const base = s => s.toLowerCase().replace(/['’‘`´]/g, '').replace(/\([^)]*\)/g, ' ');
W.canon = s => clean(deumlaut(base(s)));
const loose = s => clean(plain(deumlaut(base(s)).replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u').replace(/ss/g, 's')));
const ART = /^(the|a|an|to|der|die|das|ein|eine) /;

// латинская расшифровка в скобках у перевода: «кстати (by the way)»
const LATIN_PAREN = /\s*\(([^)]*[a-zäöüß][^)]*)\)/gi;
W.answers = c => {
  const list = [c.w].concat(c.a ? c.a.split('|') : []);
  for (const m of (c.t || '').matchAll(LATIN_PAREN)) list.push(m[1]);
  return [...new Set(list.flatMap(x => x.split('/')).map(x => x.trim()).filter(Boolean))];
};
// подсказка в «Письме» без расшифровки, иначе ответ виден заранее
W.promptText = c => (c.t || '').replace(LATIN_PAREN, '').trim() || c.t;

const lev = (a, b) => {
  const m = a.length, n = b.length, d = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    let prev = d[0]; d[0] = i;
    for (let j = 1; j <= n; j++) {
      const t = d[j];
      d[j] = Math.min(d[j] + 1, d[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = t;
    }
  }
  return d[n];
};

// 'ok' — верно, 'close' — почти (опечатка или без умляута), 'bad' — неверно
W.check = (input, c) => {
  const u = W.canon(input), uNo = u.replace(ART, '');
  if (!u) return 'bad';
  let close = false;
  for (const raw of W.answers(c)) {
    const v = W.canon(raw), vNo = v.replace(ART, '');
    if (u === v || u === vNo || (uNo === vNo && v === vNo)) return 'ok';
    // пробелы не важны: zB = z. B., naja = na ja, achso = ach so
    if (u.replace(/ /g, '') === v.replace(/ /g, '') || u.replace(/ /g, '') === vNo.replace(/ /g, '')) return 'ok';
    // слово верное, но артикль другой (die Hammer вместо der Hammer) — «почти»
    if (uNo === vNo) { close = true; continue; }
    if (loose(input).replace(ART, '') === loose(raw).replace(ART, '')) close = true;
    // опечатка в одну букву — только в длинных словах (иначе salt сойдёт за salty)
    if (vNo.length >= 6 && lev(uNo, vNo) <= 1) close = true;
  }
  return close ? 'close' : 'bad';
};

// значения перевода по отдельности: «подарок; настоящее» → [подарок, настоящее]
W.meanings = t => (t || '').toLowerCase().replace(/\([^)]*\)/g, ' ').split(/[;,]/).map(s => s.trim()).filter(Boolean);
// у карточек есть общее значение — значит, это синонимы (gift и present — «подарок»)
W.sameMeaning = (a, b) => { const m = new Set(W.meanings(a.t)); return W.meanings(b.t).some(x => m.has(x)); };
// в «Письме»: если написан синоним с тем же значением, засчитываем как «почти»
W.synonymHit = (input, c) => {
  const key = W.meanings(c.t)[0];
  if (!key || key.length < 4) return null; // «его», «уже», «из» — слишком общие
  return W.allCards(c.lang).find(x => x.id !== c.id && W.meanings(x.t).includes(key) && W.check(input, x) === 'ok') || null;
};

// ---------- импорт / экспорт ----------
W.parseImport = text => {
  let skipped = 0;
  const cards = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean).map(l => {
    let p;
    if (l.includes('\t')) p = l.split('\t');
    else if (l.includes(';')) p = l.split(';');
    else if (/\s[-–—]\s/.test(l)) p = l.split(/\s[-–—]\s/);
    else { skipped++; return null; }
    p = p.map(x => x.trim());
    if (!p[0] || !p[1]) { skipped++; return null; }
    return { w: p[0], t: p[1], ex: p[2] || '', et: p[3] || '', r: 'n', n: '' };
  }).filter(Boolean);
  return { cards, skipped };
};
W.exportText = cards => cards.map(c => [c.w, c.t, c.ex, c.et].join('\t').replace(/\t+$/, '')).join('\n');

W.newDeck = (lang, title, folder) => {
  const d = { id: W.uid('d'), lang, folder: folder || 'my', title, emoji: '📝', cards: [], u: Date.now() };
  W.S.decks.push(d); W.save();
  return d;
};
W.newCard = (lang, f) => Object.assign({ id: W.uid('c'), lang, w: '', t: '', ex: '', et: '', r: 'n', n: '' }, f);

W.shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
// ---------- озвучка из файлов ----------
// текст → имя файла: одинаково считают приложение и tools/build-audio.js
W.speechText = t => (t || '').replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
W.audioKey = t => {
  const s = W.speechText(t);
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0') + '-' + s.length;
};
})();
