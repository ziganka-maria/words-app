'use strict';
// награды в журнальном стиле: «строки» (очки), звания редакции и почтовые марки за настоящие достижения
(function () {
const W = window.W, h = W.h;

// ---------- строки и звания ----------
W.RANKS = [['Стажёр', 0], ['Корреспондент', 500], ['Обозреватель', 2000], ['Редактор', 6000], ['Главный редактор', 15000]];
// строки: каждое повторение слова — 1, пройденный урок — 20, прочитанный текст — 30, тренажёр — 10
W.lines = () => {
  const S = W.S;
  const reviews = Object.values(S.days).reduce((a, b) => a + b, 0);
  const lessons = Object.values(S.gram).filter(g => g.done).length;
  const texts = Object.keys(S.read || {}).filter(W.textRead).length;
  // тренажёр приносит строки один раз в день — накрутить повторными заходами нельзя
  const drills = Object.values(S.drill || {}).reduce((a, d) => a + Object.keys(d.days || {}).length, 0);
  return reviews + lessons * 20 + texts * 30 + drills * 10;
};
W.rank = () => {
  const l = W.lines();
  let i = 0;
  while (i < W.RANKS.length - 1 && l >= W.RANKS[i + 1][1]) i++;
  const next = W.RANKS[i + 1];
  return { name: W.RANKS[i][0], lines: l, next: next ? next[0] : null, need: next ? next[1] : null, from: W.RANKS[i][1] };
};

// ---------- марки ----------
const ICON = {
  swallow: '<use href="#swallow"/>',
  flame: '<path d="M95 8 C112 34 138 46 138 78 C138 106 118 124 95 124 C72 124 52 106 52 78 C52 60 64 48 70 36 C76 54 82 60 92 60 C88 40 86 26 95 8 Z"/>',
  book: '<rect x="30" y="28" width="62" height="84" rx="3"/><rect x="98" y="28" width="62" height="84" rx="3"/>',
  plane: '<path d="M14 72 L176 22 L152 54 L100 72 L152 90 L176 122 Z"/>',
  quill: '<path d="M160 8 C116 22 70 64 46 122 L60 128 C90 78 120 44 160 8 Z"/>',
  globe: '<circle cx="95" cy="68" r="58" fill="none" stroke="currentColor" stroke-width="10"/><path d="M37 68h116M95 10c-28 32-28 84 0 116M95 10c28 32 28 84 0 116" fill="none" stroke="currentColor" stroke-width="8"/>',
  star: '<path d="M95 8 L112 54 L162 56 L122 86 L136 132 L95 104 L54 132 L68 86 L28 56 L78 54 Z"/>',
  key: '<circle cx="58" cy="68" r="34" fill="none" stroke="currentColor" stroke-width="14"/><path d="M88 62 H168 V82 H152 V96 H136 V82 H88 Z"/>',
  letter: '<rect x="22" y="30" width="146" height="84" fill="none" stroke="currentColor" stroke-width="10"/><path d="M26 34 L95 84 L164 34" fill="none" stroke="currentColor" stroke-width="10"/>',
  laurel: '<path d="M95 128 C60 110 40 80 44 40 C58 66 74 86 95 96 C116 86 132 66 146 40 C150 80 130 110 95 128 Z"/>',
  ear: '<path d="M70 100 C40 60 70 10 108 14 C146 18 156 70 126 92 C110 104 116 124 96 128 C80 130 78 112 70 100 Z"/>',
  mic: '<rect x="72" y="12" width="46" height="76" rx="23"/><path d="M52 66 C52 96 72 110 95 110 C118 110 138 96 138 66" fill="none" stroke="currentColor" stroke-width="10"/><rect x="90" y="108" width="10" height="20"/>'
};
const allCards = () => W.allCards('en').concat(W.allCards('de'));
const known = () => allCards().filter(c => W.status(c.id) === 'known').length;
const reviews = () => Object.values(W.S.days).reduce((a, b) => a + b, 0);
const lessonsDone = lv => { const L = ((window.GRAMMAR || {}).en || []).filter(l => !lv || l.level === lv); return L.length && L.every(l => W.S.gram[l.id] && W.S.gram[l.id].done); };
const deckDone = () => ['en', 'de'].some(lang => W.allDecks(lang).some(d => d.cards.length >= 10 && d.cards.every(c => W.status(c.id) === 'known')));
W.STAMPS = [
  // серия, id, название, за что, значок, номинал, цвет, условие
  ['Первые шаги', 'first-swallow', 'Первая ласточка', 'Урок грамматики без единой ошибки', 'swallow', 'A1', 'blue', () => Object.values(W.S.gram).some(g => g.best === 100)],
  ['Первые шаги', 'first-word', 'Первое слово', 'Слово, которое вы помните уже несколько дней', 'star', '1', 'red', () => known() >= 1],
  ['Первые шаги', 'level-test', 'Проверка пера', 'Пройден тест уровня', 'globe', '?', 'green', () => Object.keys(W.S.level).length > 0],
  ['Первые шаги', 'own-deck', 'Своя рубрика', 'Создана своя колода', 'quill', '1', 'gold', () => W.S.decks.some(d => !d.fromTexts && d.cards.length > 0)],
  ['Первые шаги', 'first-text', 'Первое письмо', 'Прочитан первый текст', 'letter', '1', 'red', () => Object.keys(W.S.read || {}).filter(W.textRead).length >= 1],
  ['Первые шаги', 'first-drill', 'Первая тренировка', 'Пройден первый тренажёр', 'key', '1', 'blue', () => Object.keys(W.S.drill || {}).length >= 1],
  ['Упорство', 'streak-3', 'Три дня', 'Три дня подряд', 'flame', '3', 'red', () => W.bestStreak() >= 3],
  ['Упорство', 'streak-7', 'Неделя', 'Семь дней подряд', 'flame', '7', 'red', () => W.bestStreak() >= 7],
  ['Упорство', 'streak-30', 'Месяц', 'Тридцать дней подряд', 'flame', '30', 'gold', () => W.bestStreak() >= 30],
  ['Упорство', 'streak-100', 'Сто дней', 'Сто дней подряд', 'laurel', '100', 'gold', () => W.bestStreak() >= 100],
  ['Упорство', 'day-50', 'Ударный день', '50 повторений за один день', 'star', '50', 'green', () => Object.values(W.S.days).some(n => n >= 50)],
  ['Упорство', 'reviews-1000', 'Тысяча повторений', 'Всего 1000 повторений', 'book', '1000', 'blue', () => reviews() >= 1000],
  ['Словарь', 'known-50', 'Пятьдесят слов', 'Выучено 50 слов', 'book', '50', 'green', () => known() >= 50],
  ['Словарь', 'known-100', 'Сто слов', 'Выучено 100 слов', 'book', '100', 'green', () => known() >= 100],
  ['Словарь', 'known-500', 'Пятьсот слов', 'Выучено 500 слов', 'book', '500', 'blue', () => known() >= 500],
  ['Словарь', 'known-1000', 'Тысяча слов', 'Выучено 1000 слов', 'laurel', '1000', 'gold', () => known() >= 1000],
  ['Словарь', 'deck-done', 'Колода целиком', 'Выучена целая колода', 'plane', '★', 'red', deckDone],
  ['Словарь', 'live-done', 'Свой человек', 'Выучен весь «Живой язык» одного языка', 'swallow', '★', 'gold', () => ['en', 'de'].some(l => { const c = W.allDecks(l).filter(d => d.cards[0] && d.cards[0].lv === 'live').flatMap(d => d.cards); return c.length && c.every(x => W.status(x.id) === 'known'); })],
  ['Грамматика и чтение', 'lessons-a1', 'Глава A1', 'Пройдены все уроки A1 (английский)', 'quill', 'A1', 'blue', () => lessonsDone('A1')],
  ['Грамматика и чтение', 'lessons-a2', 'Глава A2', 'Пройдены все уроки A2 (английский)', 'quill', 'A2', 'blue', () => lessonsDone('A2')],
  ['Грамматика и чтение', 'texts-5', 'Читатель', 'Прочитано 5 текстов', 'letter', '5', 'green', () => Object.keys(W.S.read || {}).filter(W.textRead).length >= 5],
  ['Грамматика и чтение', 'texts-15', 'Книжный червь', 'Прочитано 15 текстов', 'letter', '15', 'gold', () => Object.keys(W.S.read || {}).filter(W.textRead).length >= 15],
  ['Грамматика и чтение', 'dictation', 'Острый слух', 'Диктант без ошибок', 'ear', '★', 'red', () => Object.values(W.S.drill || {}).some(d => d.kind === 'dictation' && d.best === 100)],
  ['Грамматика и чтение', 'speak', 'Голос', 'Первое упражнение на произношение (нужны Chrome или Safari и интернет)', 'mic', '1', 'green', () => !!(W.S.drill || {})['speak-en'] || !!(W.S.drill || {})['speak-de']]
].map(([series, id, title, desc, icon, val, color, test]) => ({ series, id, title, desc, icon, val, color, test }));

// лучшая серия за всё время (а не только текущая)
W.bestStreak = () => {
  const days = [...new Set(Object.keys(W.S.days).concat(Object.keys(W.S.act || {})))].filter(W.active).sort();
  let best = 0, run = 0, prev = null;
  for (const k of days) {
    const d = new Date(k + 'T12:00:00');
    run = prev && Math.round((d - prev) / 864e5) === 1 ? run + 1 : 1;
    best = Math.max(best, run); prev = d;
  }
  return best;
};

W.stampEl = (s, got, big) => h('div', { class: 'stamp s-' + (got ? s.color : 'lock') + (big ? ' big-stamp' : ''), title: s.desc },
  h('div', { class: 'face' }, h('span', { class: 'val' }, got ? s.val : '?'),
    W.svg(ICON[s.icon], 'stamp-ic'),
    h('span', { class: 'nm' }, s.title)));
W.svg = (inner, cls) => { const e = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); e.setAttribute('viewBox', '0 0 190 135'); e.setAttribute('class', cls || ''); e.setAttribute('aria-hidden', 'true'); e.innerHTML = inner; return e; };

// проверка марок: новые отмечаем датой и показываем «почтовое уведомление»
let checking = false;
W.checkStamps = () => {
  if (checking) return;
  checking = true;
  try {
    const S = W.S; S.stamps = S.stamps || {};
    const fresh = W.STAMPS.filter(s => !S.stamps[s.id] && (() => { try { return s.test(); } catch (e) { return false; } })());
    if (!fresh.length) return;
    // открыто другое окно — подождём: марка выдастся при следующей проверке, с уведомлением
    if (!document.getElementById('modal').hidden) return;
    for (const s of fresh) S.stamps[s.id] = Date.now();
    W.save();
    const s = fresh[0];
    W.modal('Новая марка', h('div', { class: 'center' },
      h('div', { class: 'kicker' }, 'в ваш альбом'), W.stampEl(s, true, true),
      h('p', null, h('b', null, s.title)), h('p', { class: 'muted' }, s.desc),
      fresh.length > 1 ? h('p', { class: 'muted small' }, 'И ещё ' + W.plural(fresh.length - 1, 'марка', 'марки', 'марок') + ' — смотрите в альбоме.') : null),
      // экран, открытый из окна, сам занимает место окна в истории (см. W.push)
      [{ label: 'В альбом', cls: 'primary', fn: () => { W.openAlbum(); } }]);
  } finally { checking = false; }
};

W.openAlbum = () => W.push(el => {
  const got = W.S.stamps || {};
  const series = [...new Set(W.STAMPS.map(s => s.series))];
  W.put(el, W.topbar('Альбом марок'),
    h('p', { class: 'muted' }, 'Собрано ' + W.STAMPS.filter(s => got[s.id]).length + ' из ' + W.STAMPS.length + '. Каждая марка — за настоящее достижение.'),
    series.map(name => {
      const list = W.STAMPS.filter(s => s.series === name);
      return h('section', null,
        h('div', { class: 'lvl-head' }, 'Серия «' + name + '»', h('span', { class: 'muted' }, ' · ' + list.filter(s => got[s.id]).length + ' / ' + list.length)),
        h('div', { class: 'album' }, list.map(s => h('div', { class: 'album-cell' }, W.stampEl(s, !!got[s.id]),
          h('div', { class: 'muted small' }, got[s.id] ? new Date(got[s.id]).toLocaleDateString('ru-RU') : s.desc)))));
    }));
});

// ---------- блок профиля ----------
W.profileBlock = () => {
  const r = W.rank(), got = W.S.stamps || {};
  const name = W.acc && W.acc.session ? W.acc.session.user.email.split('@')[0] : 'Читатель';
  const pct = r.need ? Math.round((r.lines - r.from) / (r.need - r.from) * 100) : 100;
  // неделя: пн–вс текущей недели
  const now = new Date(), monday = new Date(now); monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'].map((d, i) => { const x = new Date(monday); x.setDate(monday.getDate() + i); return h('span', { class: W.active(W.dayKey(x)) ? 'x' : '' }, d); });
  const recent = W.STAMPS.filter(s => got[s.id]).sort((a, b) => got[b.id] - got[a.id]).slice(0, 3);
  return h('section', { class: 'profile' },
    h('h2', null, name),
    h('div', { class: 'rank' },
      h('div', { class: 'kicker muted' }, 'звание'), h('div', { class: 'r' }, r.name),
      h('div', { class: 'bar' }, h('i', { style: 'width:' + pct + '%' })),
      h('div', { class: 'muted small' }, r.need ? r.lines + ' из ' + r.need + ' строк до звания «' + r.next + '»' : r.lines + ' строк · высшее звание')),
    h('div', { class: 'lvl-head' }, 'Эта неделя', h('span', { class: 'muted' }, ' · серия ' + W.streak())),
    h('div', { class: 'week' }, week),
    h('div', { class: 'lvl-head' }, 'Альбом марок', h('span', { class: 'muted' }, ' · ' + Object.keys(got).length + ' из ' + W.STAMPS.length)),
    h('div', { class: 'album small-album' }, (recent.length ? recent : W.STAMPS.slice(0, 3)).map(s => W.stampEl(s, !!got[s.id]))),
    h('button', { class: 'btn wide', onclick: W.openAlbum }, 'Открыть альбом'));
};
})();
