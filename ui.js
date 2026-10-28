'use strict';
// общий интерфейс: помощники, экраны, вкладка «Колоды», экран колоды
(function () {
const W = window.W;
const $ = s => document.querySelector(s);

W.h = (tag, props, ...kids) => {
  const e = document.createElement(tag);
  if (props) for (const k in props) {
    const v = props[k];
    if (v == null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k === 'html') e.innerHTML = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat(Infinity)) if (c != null && c !== false) e.append(c.nodeType ? c : document.createTextNode(c));
  return e;
};
const h = W.h;
// как replaceChildren, но пропускает null/false (иначе на экране появляется слово «null»)
W.put = (el, ...kids) => el.replaceChildren(...kids.flat(Infinity).filter(k => k != null && k !== false));

W.toast = msg => {
  const t = h('div', { class: 'toast' }, msg);
  document.body.append(t);
  setTimeout(() => t.classList.add('out'), 1800);
  setTimeout(() => t.remove(), 2200);
};

W.icon = name => h('span', { class: 'ic', 'aria-hidden': 'true', html: ICONS[name] || '' });
const ICONS = {
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  sound: '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8 6.6 19.7l1.1-6.1L3.2 9.4l6.1-.8z"/></svg>',
  more: '<svg viewBox="0 0 24 24"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>',
  swap: '<svg viewBox="0 0 24 24"><path d="M4 8h14l-3-3M20 16H6l3 3"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  // нижнее меню и рубрики главной
  home: '<svg viewBox="0 0 24 24"><path d="M3.5 11L12 4l8.5 7"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5.5h4V20"/></svg>',
  gram: '<svg viewBox="0 0 24 24"><text x="12" y="18.5" text-anchor="middle" font-size="19" font-family="Georgia, serif" fill="currentColor" stroke="none">§</text></svg>',
  words: '<svg viewBox="0 0 24 24"><rect x="8" y="3" width="12" height="15" rx="1.5"/><path d="M5 6.5v13.5h11"/><text x="14" y="14" text-anchor="middle" font-size="8.5" font-family="Georgia, serif" fill="currentColor" stroke="none">Aa</text></svg>',
  read: '<svg viewBox="0 0 24 24"><path d="M3 5.5c3-1 6-.8 9 1.2V20c-3-2-6-2.2-9-1.2z"/><path d="M21 5.5c-3-1-6-.8-9 1.2V20c3-2 6-2.2 9-1.2z"/></svg>',
  practice: '<svg viewBox="0 0 24 24"><path d="M15 4l5 5L9 20H4v-5z"/><path d="M13 6l5 5"/></svg>',
  trans: '<svg viewBox="0 0 24 24"><path d="M4 8h14l-3-3M20 16H6l3 3"/></svg>',
  drills: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".8"/></svg>',
  profile: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>'
};
W.iconBtn = (name, label, onclick, cls) => h('button', { class: 'icon-btn ' + (cls || ''), 'aria-label': label, title: label, onclick }, W.icon(name));

// ---------- озвучка ----------
// английский: записи нейросетевого голоса (audio/en-us, audio/en-gb); если записи нет или нет сети —
// голос телефона, причём выбираем лучший из установленных
W.canSpeak = () => 'speechSynthesis' in window;
W.audioDir = lang => lang === 'en' ? (W.S.set.voice === 'gb' ? 'en-gb' : 'en-us') : null;
W.audioUrl = (text, lang) => { const d = W.audioDir(lang); return d ? 'audio/' + d + '/' + W.audioFile(text) + '.mp3' : null; };
const voiceScore = (v, tag, lang) => (v.lang.replace('_', '-') === tag ? 4 : v.lang.slice(0, 2) === lang ? 2 : -99)
  + (/natural|neural|premium|enhanced|siri/i.test(v.name) ? 3 : 0) + (/google/i.test(v.name) ? 2 : 0);
// голос телефона; done вызывается, когда фраза дочитана (или не прозвучала)
const sysSpeak = (text, lang, done) => {
  if (!W.canSpeak()) { W.toast('Озвучка на этом устройстве недоступна'); return done && done(); }
  const tag = W.LANGS[lang].tts, voices = speechSynthesis.getVoices();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = tag; u.rate = 0.9;
  const v = voices.slice().sort((a, b) => voiceScore(b, tag, lang) - voiceScore(a, tag, lang))[0];
  if (v && voiceScore(v, tag, lang) > 0) u.voice = v;
  else if (voices.length) W.toast('Нет голоса для языка: ' + W.LANGS[lang].name + '. См. «Профиль» → «Озвучка»');
  if (done) { u.onend = done; u.onerror = done; }
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
};
// один проигрыватель на всё приложение: Safari разрешает звук элементу, который уже играл по касанию
const player = new Audio();
let pending = null; // как завершить текущую фразу (чтобы «Стоп» не оставлял ожидание висеть)
W.stopSpeak = () => {
  player.onended = player.onerror = null;
  try { player.pause(); } catch (e) {}
  // cancel() без нужды мешает микрофону на Android, поэтому только если голос телефона что-то читает
  if (W.canSpeak() && (speechSynthesis.speaking || speechSynthesis.pending)) speechSynthesis.cancel();
  if (pending) { const p = pending; pending = null; p(); }
};
// прочитать фразу и дождаться конца: запись нейросетевого голоса, а если её нет или звук не разрешён — голос телефона
W.speakWait = (text, lang) => new Promise(res => {
  const t = W.speechText(text);
  if (!W.S.set.sound || !t) return res();
  W.stopSpeak();
  let finished = false;
  const done = () => { if (!finished) { finished = true; clearTimeout(guard); if (pending === done) pending = null; res(); } };
  pending = done;
  const guard = setTimeout(done, 20000); // на всякий случай: ни одна фраза не должна «повесить» чтение
  const url = W.audioUrl(t, lang);
  if (!url) return sysSpeak(t, lang, done);
  let fell = false;
  const fallback = () => { if (!fell && !finished) { fell = true; sysSpeak(t, lang, done); } };
  player.onended = done;
  player.onerror = fallback;
  player.src = url;
  player.play().catch(() => fallback());
});
// докачать записи в кэш (для текстов и колод)
W.prefetchUrls = urls => {
  if (!navigator.onLine || !('caches' in window)) return;
  const list = [...new Set(urls.filter(Boolean))];
  let i = 0;
  const next = () => { if (i < list.length) fetch(list[i++]).catch(() => {}).finally(next); };
  for (let k = 0; k < 4; k++) next();
};
W.speak = (text, lang) => { W.speakWait(text, lang); };
// докачиваем звук колоды в фоне, чтобы он был и без интернета
W.prefetchAudio = cards => {
  if (!navigator.onLine || !('caches' in window)) return;
  const urls = [...new Set(cards.flatMap(c => [c.w, c.ex]).filter(Boolean).map(x => W.audioUrl(x, cards[0] && cards[0].lang)).filter(Boolean))];
  let i = 0;
  const next = () => { if (i < urls.length) fetch(urls[i++]).catch(() => {}).finally(next); };
  for (let k = 0; k < 4; k++) next();
};
W.soundBtn = (text, lang) => W.S.set.sound ? W.iconBtn('sound', 'Озвучить', e => { e.stopPropagation(); W.speak(text, lang); }, 'snd') : null;

// эмблема-ласточка и строка «выпуска» в шапке
W.emblem = cls => { const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); s.setAttribute('class', cls || 'emblem'); s.setAttribute('viewBox', '0 0 190 135'); s.setAttribute('aria-hidden', 'true'); s.innerHTML = '<use href="#swallow"/>'; return s; };
W.issueLine = () => {
  const d = new Date();
  const n = Object.keys(W.S.days).length + 1; // номер выпуска — по числу дней с занятиями
  return '№ ' + n + ' · ' + d.toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' });
};
W.regBadge = r => h('span', { class: 'reg reg-' + r }, W.REG[r] || '');

// ---------- окна ----------
// у открытого окна своя запись в истории: кнопка «назад» на Android закрывает окно, а не приложение
let modalEntry = false, pendingBack = false;
const hideModal = () => { const m = $('#modal'); m.hidden = true; W.put(m); };
W.closeModal = () => {
  if (pendingBack) return;
  if (modalEntry) { pendingBack = true; history.back(); } else hideModal();
};
W.modal = (title, body, actions) => {
  const m = $('#modal');
  const close = W.closeModal;
  if (!modalEntry) { history.pushState({ s: stack.length, m: 1 }, ''); modalEntry = true; }
  const box = h('div', { class: 'sheet', role: 'dialog', 'aria-label': title },
    h('div', { class: 'sheet-head' }, h('b', null, title), W.iconBtn('close', 'Закрыть', close)),
    h('div', { class: 'sheet-body' }, body),
    actions && actions.length ? h('div', { class: 'sheet-actions' }, actions.map(a =>
      // если кнопка открыла следующее окно, его не закрываем
      h('button', { class: 'btn ' + (a.cls || ''), onclick: () => { if (a.fn() !== false && m.firstChild === box) close(); } }, a.label))) : null);
  W.put(m, box);
  m.hidden = false;
  m.onclick = e => { if (e.target === m) close(); };
  const f = box.querySelector('input,textarea,select');
  if (f) setTimeout(() => f.focus(), 50);
  return close;
};
W.confirm = (text, okLabel, fn) => W.modal('Точно?', h('p', null, text), [
  { label: 'Отмена', cls: 'ghost', fn: () => {} }, { label: okLabel, cls: 'danger', fn }]);
W.field = (label, input) => h('label', { class: 'field' }, h('span', null, label), input);
W.folderSelect = (lang, current) => {
  const s = h('select', null, h('option', { value: 'my' }, 'Мои колоды'),
    W.S.folders.filter(f => f.lang === lang).map(f => h('option', { value: f.id }, f.title)));
  s.value = current || 'my';
  return s;
};

// ---------- экраны поверх вкладок (кнопка «назад» на Android закрывает верхний) ----------
const stack = [];
W.push = build => {
  const el = h('div', { class: 'screen' });
  $('#screens').append(el);
  const item = { el, refresh: null };
  stack.push(item);
  // экран, открытый из окна, занимает запись окна в истории
  if (modalEntry) { modalEntry = false; hideModal(); history.replaceState({ s: stack.length }, ''); }
  else history.pushState({ s: stack.length }, '');
  item.refresh = build(el) || null;
  el.scrollTop = 0;
  return item;
};
// pendingBack защищает от двойного тапа: второй history.back() вывел бы из приложения
W.back = () => { if (stack.length && !pendingBack) { pendingBack = true; history.back(); } };
// закрыть экран и потом сделать fn; если закрытие не началось (двойной тап) — ничего не запоминаем
W.backThen = fn => { if (stack.length && !pendingBack) { W.afterBack = fn; W.back(); } };
W.closeAll = () => {
  const n = stack.length + (modalEntry ? 1 : 0);
  if (n && !pendingBack) { pendingBack = true; history.go(-n); }
};
window.addEventListener('popstate', () => {
  const st = history.state || {}, want = st.s || 0;
  pendingBack = false;
  let closed = false;
  while (stack.length > want) { stack.pop().el.remove(); closed = true; }
  if (W.stopSpeak) W.stopSpeak();
  if (W.stopMic) W.stopMic();
  if (!st.m) { modalEntry = false; hideModal(); }
  if (closed) {
    const top = stack[stack.length - 1];
    if (top && top.refresh) top.refresh(); else W.renderTab();
    if (W.checkStamps) setTimeout(W.checkStamps, 400);
  }
  // действие, которое ждало закрытия экрана (например, «Войти» из приветствия)
  if (W.afterBack && !stack.length) { const f = W.afterBack; W.afterBack = null; setTimeout(f, 0); }
});
W.topbar = (title, right, kind) => h('div', { class: 'topbar' },
  W.iconBtn(kind || 'back', kind === 'close' ? 'Закрыть' : 'Назад', W.back),
  h('div', { class: 'tb-title' }, title), h('div', { class: 'tb-right' }, right || null));

// ---------- вкладки ----------
let tab = 'home';
const TABS = { home: () => renderHome(), decks: () => renderDecks(), read: () => W.renderReading ? W.renderReading($('#tab-read')) : null, gram: () => W.renderGrammar($('#tab-gram')), trans: () => W.renderTranslate($('#tab-trans')), drill: () => W.renderDrills($('#tab-drill')), search: () => renderSearch(), more: () => W.renderMore($('#tab-more')) };
W.renderTab = () => { TABS[tab](); if (W.checkStamps) setTimeout(W.checkStamps, 300); };
W.showTab = t => {
  tab = t;
  // поиск — часть «Слов», перевод и тренажёры — части «Практики»
  const navTab = { search: 'decks', trans: 'gram', drill: 'gram' }[t] || t;
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('on', b.dataset.tab === navTab));
  document.querySelectorAll('main > section').forEach(s => { s.hidden = s.id !== 'tab-' + t; });
  W.renderTab();
  window.scrollTo(0, 0);
};
W.setLang = l => {
  W.S.lang = l; W.save();
  document.documentElement.dataset.lang = l;
  W.renderTab();
};
W.isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
W.standalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
// данные сменились не здесь: другая вкладка (по умолчанию), сервер ('sync') или вход/выход ('switch').
// Открытые экраны держат старые объекты колод, поэтому закрываем их
W.onExternalChange = why => {
  document.documentElement.dataset.lang = W.S.lang;
  W.applyTheme && W.applyTheme();
  if (stack.length) W.closeAll(); else W.renderTab();
  if (why === 'sync') W.toast('Подтянулись изменения с другого устройства');
  else if (!why) W.toast('Данные обновлены из другой вкладки');
};
W.langSwitch = () => h('div', { class: 'seg', role: 'tablist' }, Object.keys(W.LANGS).map(l =>
  h('button', { class: W.S.lang === l ? 'on' : '', role: 'tab', 'aria-selected': String(W.S.lang === l), onclick: () => W.setLang(l) },
    h('b', null, W.LANGS[l].short), ' ', W.LANGS[l].name)));

const plural = (n, one, few, many) => {
  const a = n % 10, b = n % 100;
  return n + ' ' + (a === 1 && b !== 11 ? one : a >= 2 && a <= 4 && (b < 12 || b > 14) ? few : many);
};
W.plural = plural;
W.words = n => plural(n, 'слово', 'слова', 'слов');
const deckCards = d => d.cards.filter(W.vis);

// «Практика» — три вкладки (грамматика, тренажёры, перевод) с переключателем сверху
W.practiceSwitch = cur => h('div', { class: 'seg practice-seg', role: 'tablist' },
  [['gram', 'Грамматика'], ['drill', 'Тренажёры'], ['trans', 'Перевод']].map(([t, l]) =>
    h('button', { class: cur === t ? 'on' : '', role: 'tab', 'aria-selected': String(cur === t), onclick: () => cur !== t && W.showTab(t) }, l)));
W.openDrills = () => W.showTab('drill');

// ---------- «Главная»: первая полоса ----------
function renderHome() {
  const root = $('#tab-home'), lang = W.S.lang;
  const all = W.allCards(lang), c = W.counts(all);
  const lessons = ((window.GRAMMAR || {})[lang] || []), texts = ((window.TEXTS || {})[lang] || []);
  const read = Object.keys(W.S.read || {}).filter(id => texts.some(t => t.id === id)).length;
  const passed = lessons.filter(l => W.S.gram[l.id] && W.S.gram[l.id].done).length;
  const due = W.gramDue ? W.gramDue(lang) : [];
  const rubric = (icon, title, sub, fn) => h('button', { class: 'lesson rubric', onclick: fn },
    h('span', { class: 'l-num' }, W.icon(icon)),
    h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, title), h('span', { class: 'muted small' }, sub)));
  const A = W.acc;
  // без аккаунта прогресс живёт только в этом телефоне — напоминаем, пока человек не вошёл
  let later = 0;
  try { later = +localStorage.getItem('words-accnote') || 0; } catch (e) {}
  const accNote = A && A.configured && A.configured() && !A.session && Date.now() - later > 7 * 864e5 ? h('div', { class: 'acc-note' },
    h('span', null, 'Войдите, чтобы прогресс не потерялся и был одинаковым на телефоне и компьютере.'),
    h('span', { class: 'acc-note-btns' },
      h('button', { class: 'link', onclick: () => W.openAccount() }, 'войти / создать'),
      h('button', { class: 'link muted', onclick: () => { try { localStorage.setItem('words-accnote', String(Date.now())); } catch (e) {} W.renderTab(); } }, 'не сейчас'))) : null;
  W.put(root,
    h('header', { class: 'head' },
      h('div', { class: 'kicker head-line' }, h('span', null, W.issueLine()), h('button', { class: 'link', onclick: () => W.showTab('search') }, 'поиск')),
      h('h1', null, h('span', { html: 'Живые<br>слова' }), W.emblem()),
      W.langSwitch()),
    iosWarn(), accNote, W.levelCard ? W.levelCard() : null, todayBlock(lang, all),
    due.length ? h('div', { class: 'lessons' }, W.dueCard(lang, due)) : null,
    h('div', { class: 'lvl-head' }, 'Разделы'),
    h('div', { class: 'lessons' },
      rubric('words', 'Слова', W.words(c.total) + ' с примерами и озвучкой' + (c.known ? ' · выучено ' + c.known : ''), () => W.showTab('decks')),
      texts.length ? rubric('read', 'Чтение', W.plural(texts.length, 'текст', 'текста', 'текстов') + ', перевод любого слова по нажатию' + (read ? ' · прочитано ' + read : '') + (W.textNew && texts.some(W.textNew) ? ' · новых ' + texts.filter(W.textNew).length : ''), () => W.showTab('read')) : null,
      rubric('gram', 'Грамматика', lessons.length ? W.plural(lessons.length, 'урок', 'урока', 'уроков') + ': правило, примеры, проверка' + (passed ? ' · пройдено ' + passed : '') : 'уроки готовятся', () => W.showTab('gram')),
      rubric('trans', 'Перевод', lang === 'en' ? 'с русского: предложения, сборка из слов, тексты на темы' : 'задания для этого языка готовятся', () => W.showTab('trans')),
      W.drillsBlock ? rubric('drills', 'Тренажёры', lang === 'en' ? 'отработка всех тем грамматики, неправильные глаголы, произношение, мои ошибки' : 'произношение', W.openDrills) : null),
    h('button', { class: 'btn ghost wide', onclick: () => W.openWelcome() }, 'Как устроено приложение'));
}

function todayBlock(lang, all) {
  const c = W.counts(all), q = W.queue(all);
  const streak = W.streak();
  const today = h('div', { class: 'today' },
    h('div', { class: 'today-top' },
      h('div', null, h('div', { class: 'today-title' }, 'Сегодня'),
        h('div', { class: 'muted' }, q.due.length || q.fresh.length
          ? [q.fresh.length ? `новых слов: ${q.fresh.length}` : '', q.due.length ? `повторить: ${q.due.length}` : ''].filter(Boolean).join(' · ')
          : 'На сегодня всё повторено 🎉')),
      streak ? h('div', { class: 'streak', title: 'Дней подряд' }, 'серия', h('b', null, String(streak)), plural(streak, 'день', 'дня', 'дней').replace(/^\d+ /, '')) : null),
    h('div', { class: 'bar' }, h('i', { style: `width:${c.total ? Math.round(c.known / c.total * 100) : 0}%` })),
    c.known || c.learning ? h('div', { class: 'muted small' }, `Выучено ${c.known} из ${c.total}` + (c.learning ? ` · в процессе ${c.learning}` : '')) : null,
    W.goalLine ? W.goalLine() : null,
    h('button', { class: 'btn primary wide', onclick: () => {
      if (q.due.length + q.fresh.length) W.study('learn', [...q.due, ...q.fresh], 'Сегодня', { queued: true });
      else W.study('learn', W.shuffle(all.filter(x => W.S.prog[x.id])).slice(0, 15), 'Повторение', { queued: true, extra: true });
    } }, q.due.length + q.fresh.length ? 'Начать занятие' : 'Повторить ещё немного'));
  return today;
}

// на iPhone вкладка Safari и иконка «Домой» хранят данные раздельно — предупреждаем заранее
const iosWarn = () => W.isIOS() && !W.standalone() ? h('div', { class: 'warn' },
  h('b', null, 'Сначала установите приложение. '),
  'На iPhone слова и прогресс во вкладке Safari и в приложении с иконки хранятся отдельно. Нажмите «Поделиться» → «На экран „Домой“» и занимайтесь оттуда. Уже занимались здесь? Сохраните копию («Профиль» → «Сохранность») и восстановите её в установленном приложении.') : null;

// ---------- «Слова»: колоды ----------
function renderDecks() {
  const root = $('#tab-decks'), lang = W.S.lang;
  const smart = h('div', { class: 'chips' }, W.smart(lang).map(d =>
    h('button', { class: 'chip', onclick: () => openDeck(d) }, d.emoji + ' ' + d.title + ' · ' + d.cards.length)),
  );

  const folders = W.builtinFolders(lang).map(f => ({ id: f.id, lang, title: f.title, decks: f.decks, builtin: true }))
    .concat(W.S.folders.filter(f => f.lang === lang).map(f => ({ id: f.id, title: f.title, decks: W.userDecks(lang).filter(d => d.folder === f.id), user: true, lang })));
  const known = new Set(W.S.folders.map(f => f.id));
  folders.push({ id: 'my', lang, title: 'Мои колоды', decks: W.userDecks(lang).filter(d => !known.has(d.folder)), mine: true });

  W.put(root,
    h('header', { class: 'head' },
      h('div', { class: 'kicker head-line' }, h('span', null, 'колоды'), h('button', { class: 'link', onclick: () => W.showTab('search') }, 'поиск')),
      h('h1', null, 'Слова'),
      W.langSwitch()),
    h('p', { class: 'muted' }, 'Слова по темам и уровням. Любую колоду можно учить отдельно, а занятие на день — на ', h('button', { class: 'inline-link', onclick: () => W.showTab('home') }, 'Главной'), '.'),
    smart,
    ...folders.map(f => folderBlock(f)),
    h('div', { class: 'row-btns' },
      h('button', { class: 'btn', onclick: () => createDeck() }, '+ Колода'),
      h('button', { class: 'btn', onclick: () => createFolder() }, '+ Папка'),
      h('button', { class: 'btn', onclick: () => importDeck() }, 'Импорт')));
}

const openFolders = new Map();
W.expandFolder = (lang, id) => openFolders.set(lang + ':' + id, true);
function folderBlock(f) {
  if (f.mine && !f.decks.length) return h('div', { class: 'folder' },
    h('div', { class: 'folder-title' }, f.title),
    h('p', { class: 'muted empty' }, 'Здесь появятся ваши колоды. Создайте свою или добавляйте слова из готовых через «⋯» у карточки.'));
  // папки с классическим курсом и профессиями по умолчанию свёрнуты; что открыл пользователь, помним до перезапуска
  const key = f.lang + ':' + f.id, want = openFolders.has(key) ? openFolders.get(key) : !/^(en|de)-([abc]\d|pro-)/.test(f.id);
  const box = h('details', { class: 'folder', open: want, ontoggle: () => openFolders.set(key, box.open) },
    h('summary', { class: 'folder-title' }, f.title, h('span', { class: 'muted small' }, ' · ' + plural(f.decks.length, 'колода', 'колоды', 'колод')),
      f.user ? h('button', { class: 'link', onclick: e => { e.preventDefault(); folderMenu(f); } }, 'изменить') : null),
    f.decks.length ? f.decks.map(deckRow) : h('p', { class: 'muted empty' }, 'Пустая папка'));
  return box;
}

function deckRow(d) {
  const cards = deckCards(d), c = W.counts(cards);
  return h('button', { class: 'deck', onclick: () => openDeck(d) },
    h('span', { class: 'deck-emoji' }, d.emoji || '📝'),
    h('span', { class: 'deck-main' },
      h('span', { class: 'deck-title' }, d.title),
      h('span', { class: 'muted small' }, W.words(c.total) + (c.known ? ` · выучено ${c.known}` : '')),
      h('span', { class: 'bar thin' }, h('i', { style: `width:${c.total ? Math.round(c.known / c.total * 100) : 0}%` }))),
    c.due ? h('span', { class: 'due', title: 'К повторению' }, c.due) : null);
}

// ---------- создание колод и папок ----------
function createDeck(after) {
  const lang = W.S.lang;
  const name = h('input', { type: 'text', placeholder: 'Например: Путешествия', maxlength: 60 });
  const folder = W.folderSelect(lang);
  W.modal('Новая колода · ' + W.LANGS[lang].name, [W.field('Название', name), W.field('Папка', folder)], [
    { label: 'Создать', cls: 'primary', fn: () => {
      if (!name.value.trim()) { W.toast('Введите название'); return false; }
      const d = W.newDeck(lang, name.value.trim(), folder.value);
      if (after) after(d); else { W.renderTab(); openDeck(d); }
    } }]);
}
W.createDeck = createDeck;

function createFolder() {
  const name = h('input', { type: 'text', placeholder: 'Например: Для работы', maxlength: 40 });
  W.modal('Новая папка', W.field('Название', name), [{ label: 'Создать', cls: 'primary', fn: () => {
    if (!name.value.trim()) { W.toast('Введите название'); return false; }
    W.S.folders.push({ id: W.uid('f'), lang: W.S.lang, title: name.value.trim(), u: Date.now() }); W.save(); W.renderTab();
  } }]);
}

function folderMenu(f) {
  const name = h('input', { type: 'text', value: f.title, maxlength: 40 });
  W.modal('Папка', W.field('Название', name), [
    { label: 'Удалить папку', cls: 'danger', fn: () => {
      W.confirm('Папка исчезнет, а колоды из неё перейдут в «Мои колоды».', 'Удалить', () => {
        W.S.folders = W.S.folders.filter(x => x.id !== f.id); W.bury('folder:' + f.id);
        W.S.decks.forEach(d => { if (d.folder === f.id) { d.folder = 'my'; W.touch(d); } });
        W.save(); W.renderTab();
      });
      return false;
    } },
    { label: 'Сохранить', cls: 'primary', fn: () => {
      const x = W.S.folders.find(x => x.id === f.id);
      if (x && name.value.trim()) { x.title = name.value.trim(); W.touch(x); W.save(); W.renderTab(); }
    } }]);
}

function importDeck() {
  const lang = W.S.lang;
  const name = h('input', { type: 'text', placeholder: 'Название колоды', maxlength: 60 });
  const text = h('textarea', { rows: 8, placeholder: 'hang out ; тусоваться\nmy bad ; мой косяк ; Oh, my bad!\n\nМожно вставить список из Quizlet (через Tab).' });
  const folder = W.folderSelect(lang);
  W.modal('Импорт слов · ' + W.LANGS[lang].name, [
    h('p', { class: 'muted small' }, 'Каждое слово — с новой строки: слово, перевод, пример, перевод примера. Разделитель — точка с запятой, Tab или тире с пробелами.'),
    W.field('Название', name), W.field('Список', text), W.field('Папка', folder)], [
    { label: 'Создать колоду', cls: 'primary', fn: () => {
      const r = W.parseImport(text.value);
      if (!r.cards.length) { W.toast('Не нашла ни одной строки «слово ; перевод»'); return false; }
      const d = W.newDeck(lang, name.value.trim() || 'Импорт', folder.value);
      d.cards = r.cards.map(c => W.newCard(lang, c)); W.touch(d); W.save();
      W.toast(`Добавлено: ${W.words(d.cards.length)}` + (r.skipped ? `, пропущено строк: ${r.skipped}` : ''));
      W.renderTab(); openDeck(d);
    } }]);
}

// ---------- экран колоды ----------
function openDeck(d) {
  if (d.lang === 'en') setTimeout(() => W.prefetchAudio(d.cards), 800);
  W.push(el => {
    const render = () => {
      if (d.smart) d = W.smart(d.lang).find(x => x.id === d.id);
      const cards = d.smart ? d.cards : deckCards(d), c = W.counts(cards), lang = d.lang;
      const qd = W.queue(cards), due = [...qd.due, ...qd.fresh]; // новые — в пределах дневного лимита
      const mode = (key, title, sub, need) => h('button', { class: 'mode', disabled: cards.length < need, onclick: () => W.study(key, cards, d.title) },
        h('b', null, title), h('span', { class: 'muted small' }, sub));
      W.put(el, 
        W.topbar(d.title, d.builtin || d.smart ? null : W.iconBtn('more', 'Меню колоды', () => deckMenu(d, render))),
        d.desc ? h('p', { class: 'muted' }, d.desc) : null,
        h('div', { class: 'stats' },
          h('span', null, h('b', null, c.total), ' всего'), h('span', null, h('b', null, c.new), ' новых'),
          h('span', null, h('b', null, c.learning), ' учу'), h('span', null, h('b', null, c.known), ' выучено')),
        cards.length ? h('div', { class: 'modes' },
          h('button', { class: 'mode main', onclick: () => W.study('learn', due.length ? due : (cards.some(x => W.S.prog[x.id]) ? cards.filter(x => W.S.prog[x.id]) : cards), d.title, { queued: !!due.length }) },
            h('b', null, 'Заучивание'), h('span', { class: 'small' }, due.length ? `${qd.due.length} повторить · ${qd.fresh.length} новых` : c.new ? 'лимит новых на сегодня исчерпан — можно повторить' : 'всё повторено — можно ещё раз')),
          mode('cards', 'Карточки', 'листать и переворачивать', 1),
          mode('test', 'Тест', 'выбрать перевод', 2),
          mode('match', 'Подбор пар', 'на скорость', 3),
          mode('write', 'Письмо', 'написать слово', 1))
          : h('p', { class: 'muted empty' }, d.smart ? (d.id === 'smart:fav' ? 'Нажмите ☆ у любой карточки, и она появится здесь.' : 'Слова, на которых вы ошибались, соберутся здесь сами.') : 'В колоде пока нет слов.'),
        !d.builtin && !d.smart ? h('div', { class: 'row-btns' },
          h('button', { class: 'btn primary', onclick: () => editCard(d, null, render) }, '+ Слово'),
          h('button', { class: 'btn', onclick: () => addMany(d, render) }, 'Добавить списком')) : null,
        h('div', { class: 'list' }, cards.map(x => W.cardRow(x, { deck: d, onchange: render }))));
    };
    render();
    return render;
  });
}
W.openDeck = openDeck;

const STATUS = { new: 'новое', learning: 'учу', known: 'выучено' };
W.cardRow = (c, o = {}) => {
  const st = W.status(c.id);
  const star = W.iconBtn('star', '', () => {
    if (W.S.fav[c.id]) { delete W.S.fav[c.id]; W.bury('fav:' + c.id); } else W.S.fav[c.id] = Date.now();
    W.save(); paint();
    o.onchange ? o.onchange() : W.renderTab();
  });
  // звёздочку перекрашиваем на месте: строка может стоять там, где список не перерисовывается
  const paint = () => {
    const on = !!W.S.fav[c.id];
    star.className = 'icon-btn fav' + (on ? ' on' : '');
    star.title = on ? 'Убрать из избранного' : 'В избранное';
    star.setAttribute('aria-label', star.title);
  };
  paint();
  return h('div', { class: 'card-row' },
    h('div', { class: 'cr-main' },
      h('div', { class: 'cr-word' }, h('b', null, c.w), W.soundBtn(c.w, c.lang)),
      h('div', null, c.t),
      c.ex ? h('div', { class: 'cr-ex' }, c.ex, c.et ? h('span', { class: 'muted' }, ' — ' + c.et) : null) : null,
      h('div', { class: 'cr-tags' }, W.regBadge(c.r), h('span', { class: 'st st-' + st }, STATUS[st]),
        o.showDeck ? h('span', { class: 'muted small' }, o.showDeck) : null)),
    h('div', { class: 'cr-side' },
      star,
      W.iconBtn('more', 'Действия', () => cardMenu(c, o))));
};

function cardMenu(c, o) {
  const d = o.deck, mine = d && !d.builtin && !d.smart;
  const acts = [{ label: 'В мою колоду…', cls: '', fn: () => { copyToDeck(c, o.onchange); } }];
  if (mine) {
    acts.push({ label: 'Изменить', cls: 'primary', fn: () => { editCard(d, c, o.onchange); } });
    acts.push({ label: 'Удалить', cls: 'danger', fn: () => {
      W.confirm('Слово «' + c.w + '» удалится из колоды «' + d.title + '».', 'Удалить', () => {
        d.cards = d.cards.filter(x => x !== c); W.touch(d); W.save(); o.onchange && o.onchange();
      });
      return false;
    } });
  }
  W.modal(c.w, h('p', { class: 'muted' }, c.n || c.t), acts);
}

function copyToDeck(c, after) {
  const decks = W.userDecks(c.lang);
  const add = d => {
    if (d.cards.some(x => x.id === c.id)) return W.toast('Это слово уже есть в «' + d.title + '»');
    d.cards.push(Object.assign({}, c)); W.touch(d); W.save();
    W.toast('Добавлено в «' + d.title + '»');
    after && after();
  };
  if (!decks.length) return createDeck(add);
  W.modal('В какую колоду?', h('div', { class: 'pick' },
    decks.map(d => h('button', { class: 'btn wide', onclick: () => { W.closeModal(); add(d); } }, (d.emoji || '📝') + ' ' + d.title)),
    h('button', { class: 'btn ghost wide', onclick: () => createDeck(add) }, '+ Новая колода')));
}

function editCard(d, c, after) {
  const f = c || {};
  const inp = (v, ph) => h('input', { type: 'text', value: v || '', placeholder: ph || '', autocapitalize: 'off', spellcheck: 'false' });
  const w = inp(f.w, d.lang === 'de' ? 'z. B. der Kumpel' : 'e.g. hang out'), t = inp(f.t, 'перевод'),
    ex = inp(f.ex, 'пример (необязательно)'), et = inp(f.et, 'перевод примера'), n = inp(f.n, 'заметка');
  const r = h('select', null, Object.keys(W.REG).map(k => h('option', { value: k }, W.REG[k])));
  r.value = f.r || 'i';
  W.modal(c ? 'Изменить слово' : 'Новое слово', [W.field('Слово', w), W.field('Перевод', t), W.field('Пример', ex),
    W.field('Перевод примера', et), W.field('Пометка', r), W.field('Заметка', n)], [
    { label: 'Сохранить', cls: 'primary', fn: () => {
      if (!w.value.trim() || !t.value.trim()) { W.toast('Нужны слово и перевод'); return false; }
      const v = { w: w.value.trim(), t: t.value.trim(), ex: ex.value.trim(), et: et.value.trim(), r: r.value, n: n.value.trim() };
      if (c) {
        // копия встроенной карточки после правки живёт своей жизнью: новый id, прогресс переносим
        if (!/^c/.test(c.id) && ['w', 't', 'ex', 'et', 'r', 'n'].some(k => v[k] !== (c[k] || ''))) {
          const old = c.id; c.id = W.uid('c');
          if (W.S.prog[old]) W.S.prog[c.id] = Object.assign({}, W.S.prog[old]);
          if (W.S.fav[old]) W.S.fav[c.id] = Date.now();
        }
        Object.assign(c, v);
      } else d.cards.push(W.newCard(d.lang, v));
      W.touch(d); W.save(); after && after();
    } }]);
}

function addMany(d, after) {
  const text = h('textarea', { rows: 8, placeholder: 'слово ; перевод ; пример ; перевод примера' });
  W.modal('Добавить списком', [h('p', { class: 'muted small' }, 'Каждое слово с новой строки. Разделитель — «;», Tab или « - ».'), text], [
    { label: 'Добавить', cls: 'primary', fn: () => {
      const r = W.parseImport(text.value);
      if (!r.cards.length) { W.toast('Не нашла ни одной строки «слово ; перевод»'); return false; }
      d.cards.push(...r.cards.map(c => W.newCard(d.lang, c))); W.touch(d); W.save();
      W.toast('Добавлено: ' + W.words(r.cards.length) + (r.skipped ? `, пропущено строк: ${r.skipped}` : ''));
      after && after();
    } }]);
}

function deckMenu(d, render) {
  const name = h('input', { type: 'text', value: d.title, maxlength: 60 });
  const emoji = h('input', { type: 'text', value: d.emoji || '📝', maxlength: 12, class: 'emoji-in' });
  const folder = W.folderSelect(d.lang, d.folder);
  W.modal('Колода', [W.field('Название', name), W.field('Значок', emoji), W.field('Папка', folder),
    h('button', { class: 'btn wide', onclick: () => {
      const txt = W.exportText(d.cards);
      const done = () => W.toast('Список скопирован — можно отправить другу');
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, () => showText(txt)); else showText(txt);
    } }, 'Скопировать списком (для друга)')], [
    { label: 'Удалить', cls: 'danger', fn: () => {
      W.confirm('Колода «' + d.title + '» удалится. Прогресс по словам сохранится.', 'Удалить', () => {
        W.S.decks = W.S.decks.filter(x => x !== d); W.bury('deck:' + d.id); W.save(); W.back();
      });
      return false;
    } },
    { label: 'Сохранить', cls: 'primary', fn: () => {
      d.title = name.value.trim() || d.title; d.emoji = emoji.value.trim() || '📝'; d.folder = folder.value;
      W.touch(d); W.save(); render();
    } }]);
}
function showText(txt) { W.modal('Скопируйте текст', h('textarea', { rows: 10, readonly: true }, txt)); }

// ---------- поиск ----------
let query = '';
function renderSearch() {
  const root = $('#tab-search');
  const input = h('input', { type: 'search', placeholder: 'Слово или перевод…', value: query, autocapitalize: 'off', spellcheck: 'false' });
  const list = h('div', { class: 'list' });
  const run = () => {
    query = input.value;
    const q = query.trim().toLowerCase();
    if (!q) { W.put(list, h('p', { class: 'muted empty' }, 'Ищу по всем колодам выбранного языка: по слову, переводу и примерам.')); return; }
    const lang = W.S.lang, where = new Map();
    for (const d of W.allDecks(lang)) for (const c of d.cards) if (!where.has(c.id)) where.set(c.id, d.title);
    const hits = W.allCards(lang).filter(c => [c.w, c.t, c.ex, c.et].some(s => (s || '').toLowerCase().includes(q))).slice(0, 60);
    W.put(list, ...(hits.length ? hits.map(c => W.cardRow(c, { showDeck: where.get(c.id), onchange: run }))
      : [h('p', { class: 'muted empty' }, 'Ничего не нашлось. Можно добавить слово в свою колоду.')]));
  };
  input.addEventListener('input', run);
  W.put(root, h('header', { class: 'head' }, h('div', { class: 'kicker' }, 'по всем колодам'), h('h1', null, 'Поиск'), W.langSwitch()),
    h('button', { class: 'link', style: 'margin:0 0 8px', onclick: () => W.showTab('decks') }, '← к колодам'), input, list);
  run();
}
})();
