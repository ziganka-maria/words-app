'use strict';
// вкладки «Грамматика» и «Профиль», приветствие
(function () {
const W = window.W, h = W.h;

// ---------- грамматика ----------
W.renderGrammar = root => {
  const lang = W.S.lang, list = (window.GRAMMAR || {})[lang] || [];
  const done = l => !!(W.S.gram[l.id] && W.S.gram[l.id].done);
  const next = list.find(l => !done(l));
  const own = W.S.level[lang] && W.S.level[lang].lv;
  const kids = [], due = W.gramDue ? W.gramDue(lang) : [], dueIds = new Set(due.map(l => l.id));
  // в конце каждого уровня — смешанное повторение по всем его урокам (если есть из чего собрать вопросы)
  const review = lv => W.openLevelReview && list.some(l => l.level === lv && W.hasPractice(l)) ? h('button', { class: 'lesson', onclick: () => W.openLevelReview(lang, lv) },
    h('span', { class: 'l-num', 'aria-hidden': 'true' }, '↻'),
    h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, 'Повторить уровень ' + lv),
      h('span', { class: 'muted small' }, W.LEVEL_REVIEW_N + ' заданий из ' + (list.some(l => l.level === lv && done(l)) ? 'пройденных уроков' : 'уроков уровня')))) : null;
  let lastLevel = null;
  list.forEach((l, i) => {
    if (l.level !== lastLevel) {
      if (lastLevel) kids.push(review(lastLevel));
      lastLevel = l.level;
      const inLevel = list.filter(x => x.level === l.level);
      kids.push(h('div', { class: 'lvl-head' }, W.levelInfo[l.level] || l.level,
        h('span', { class: 'muted small' }, ' · пройдено ' + inLevel.filter(done).length + ' из ' + inLevel.length)));
    }
    const g = W.S.gram[l.id];
    kids.push(h('button', { class: 'lesson', onclick: () => openLesson(l, i + 1) },
      h('span', { class: 'l-num' + (done(l) ? ' done' : '') }, done(l) ? '✓' : i + 1),
      h('span', { class: 'deck-main' },
        h('span', { class: 'deck-title' }, l.title, dueIds.has(l.id) ? h('span', { class: 'tag-next tag-due' }, 'повторить') : l === next ? h('span', { class: 'tag-next' }, 'дальше') : null),
        h('span', { class: 'muted small' }, l.sub + (g ? ' · лучший результат ' + g.best + '%' : '')))));
  });
  if (lastLevel) kids.push(review(lastLevel));
  W.put(root,
    h('header', { class: 'head' }, W.practiceSwitch('gram'), h('h1', null, 'Грамматика'), W.langSwitch()),
    h('p', { class: 'muted' }, 'Правило, примеры и проверка. Урок пройден при 70%. Потом — «Отработать», а через несколько дней приложение напомнит повторить.'),
    own && own !== 'A0' && list.length ? h('p', { class: 'muted small' }, 'Ваш уровень по тесту: ' + W.levelInfo[own] + '. Уроки ниже этого уровня можно пролистать и пройти быстро.') : null,
    due.length && W.dueCard ? h('div', { class: 'lessons' }, W.dueCard(lang, due)) : null,
    h('div', { class: 'lessons' }, kids),
    list.length ? (lang === 'en' ? null : h('p', { class: 'muted small' }, 'Новые уроки появятся в обновлениях.')) : h('p', { class: 'muted empty' }, 'Для этого языка уроки пока готовятся.'));
};

// ---------- тренажёры (третья вкладка «Практики») ----------
W.renderDrills = root => {
  const lang = W.S.lang;
  W.put(root,
    h('header', { class: 'head' }, W.practiceSwitch('drill'), h('h1', null, 'Тренажёры'), W.langSwitch()),
    h('p', { class: 'muted' }, 'Отработка грамматики по темам: после каждого ответа — короткое объяснение, ошибки собираются в «Моих ошибках». Сами правила — во вкладке «Грамматика».'),
    W.drillsBlock ? W.drillsBlock(lang) : null);
};

function block(b) {
  switch (b.t) {
    case 'p': return h('p', { html: b.h });
    case 'h': return h('h3', null, b.h);
    case 'tip': return h('div', { class: 'tip', html: '💡 ' + b.h });
    case 'warn': return h('div', { class: 'warn', html: '⚠️ ' + b.h });
    case 'table': return h('div', { class: 'tbl-wrap' }, h('table', { class: 'tbl' },
      h('thead', null, h('tr', null, b.head.map(x => h('th', { html: x })))),
      h('tbody', null, b.rows.map(r => h('tr', null, r.map(x => h('td', { html: x })))))));
    case 'ex': return h('div', { class: 'exs' }, b.rows.map(([f, r]) =>
      h('div', { class: 'ex-row' }, h('div', null, h('b', null, f), h('div', { class: 'muted' }, r)), W.soundBtn(f, W.S.lang))));
  }
  return null;
}

// открыть урок откуда угодно (например, из итогов отработки)
W.openLesson = l => openLesson(l, ((window.GRAMMAR || {})[W.S.lang] || []).indexOf(l) + 1);
function openLesson(l, num) {
  W.push(el => {
    const passed = !!(W.S.gram[l.id] && W.S.gram[l.id].done);
    W.put(el, W.topbar('Урок ' + num),
      h('article', { class: 'lesson-body' }, h('h2', null, l.title), l.blocks.map(block)),
      h('div', { class: 'col-btns' },
        h('button', { class: 'btn wide' + (passed ? '' : ' primary'), onclick: () => quiz(el, l, num) }, 'Проверить себя · ' + W.plural(l.quiz.length, 'вопрос', 'вопроса', 'вопросов')),
        W.openPractice && W.hasPractice(l) ? h('button', { class: 'btn wide' + (passed ? ' primary' : ''), onclick: () => W.openPractice(l) }, 'Отработать · ' + W.PRACTICE_N + ' заданий') : null),
      W.openPractice && W.hasPractice(l) ? h('p', { class: 'muted small' }, '«Отработать» — вопросы на эту тему, перевод, сборка из слов и диктант. Каждый раз другие: сначала то, что вам ещё не встречалось.') : null);
  });
}

// подсказка к виду задания (q.k) — задания тренажёров по темам
W.TASK_KIND = { form: 'Впишите нужную форму', fix: 'Исправьте ошибку и напишите предложение целиком', re: 'Перестройте предложение' };
// один вопрос урока — t = { body, q, label, key, grade(ok), next }; варианты (q.o) или ввод ответа (q.t)
W.taskQuestion = t => {
  const q = t.q, why = h('div', { class: 'result' });
  if (t.key) W.markSeen(t.key);
  const after = (ok, extra) => {
    t.grade(ok);
    W.save();
    why.className = 'result ' + (ok ? 'right' : 'wrong');
    W.put(why, h('b', null, ok ? 'Верно!' : 'Не совсем'), extra || null, h('div', null, q.w));
    t.body.append(h('button', { class: 'btn primary wide', onclick: t.next }, 'Дальше'));
  };
  let ctl;
  if (q.o) {
    // варианты в случайном порядке, чтобы верный ответ не угадывался по месту
    const order = W.shuffle(q.o.map((o, k) => k));
    ctl = h('div', { class: 'answers' }, order.map(k => h('button', { class: 'btn answer', 'data-k': k, onclick: e => {
      ctl.querySelectorAll('button').forEach(b => { b.disabled = true; if (+b.dataset.k === q.a) b.classList.add('right'); });
      if (k !== q.a) e.currentTarget.classList.add('wrong');
      after(k === q.a);
    } }, q.o[k])));
  } else {
    const input = h('input', { type: 'text', class: 'write-in', autocapitalize: 'off', autocomplete: 'off', spellcheck: 'false' });
    // задания тренажёров (q.k): начальные the / to — часть ответа, поэтому сравниваем строго; опечатку можно исправить один раз
    const flat = s => W.canon(s).replace(/ /g, '');
    const grade1 = (v, x) => !q.k ? W.check(v, { w: x }) : flat(v) === flat(x) ? 'ok' : W.check(v, { w: x }) === 'close' ? 'close' : 'bad';
    let retried = false;
    ctl = h('form', { class: 'write', onsubmit: e => {
      e.preventDefault();
      if (input.disabled || !input.value.trim()) return;
      const res = q.t.map(x => grade1(input.value, x)), ok = res.includes('ok');
      if (!ok && !retried && res.includes('close')) {
        retried = true;
        why.className = 'result';
        W.put(why, h('b', null, 'Почти'), h('div', null, 'Проверьте написание и нажмите «Проверить» ещё раз.'));
        return input.focus();
      }
      input.disabled = true;
      after(ok, ok ? null : h('div', null, 'Правильно: ', h('b', null, q.t[0])));
    } }, input, h('button', { type: 'submit', class: 'btn primary wide' }, 'Проверить'));
    setTimeout(() => input.focus(), 60);
  }
  W.put(t.body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, [W.TASK_KIND[q.k], t.label].filter(Boolean).join(' · ')), h('div', { class: 'q' }, q.q)), ctl, why);
};

function quiz(el, l, num) {
  let i = 0, right = 0;
  const bar = h('i'), body = h('div', { class: 'study' });
  W.put(el, W.topbar('Урок ' + num + ' · проверка'), h('div', { class: 'bar' }, bar), body);
  el.scrollTop = 0;
  const ask = () => {
    bar.style.width = Math.round(i / l.quiz.length * 100) + '%';
    if (i >= l.quiz.length) {
      const pct = Math.round(right / l.quiz.length * 100), prev = W.S.gram[l.id];
      W.S.gram[l.id] = Object.assign({}, prev, { done: (prev && prev.done) || pct >= 70, best: Math.max(pct, prev ? prev.best : 0) });
      // пройденная проверка — тоже повторение урока
      if (W.gramSchedule) W.gramSchedule(l.id, pct);
      if (W.markDay) W.markDay();
      W.save();
      return W.put(body, h('div', { class: 'summary' },
        h('div', { class: 'big' }, `${right} из ${l.quiz.length}`),
        h('p', null, pct >= 70 ? 'Урок пройден! ✓' : 'Чтобы пройти урок, нужно 70%. Перечитайте правило и попробуйте ещё раз.'),
        pct >= 70 && W.openPractice ? h('p', { class: 'muted small' }, 'Чтобы закрепить, попробуйте «Отработать»: задания на эту тему, перевод и диктант.') : null,
        h('div', { class: 'col-btns' },
          pct >= 70 && W.openPractice ? h('button', { class: 'btn', onclick: () => W.openPractice(l) }, 'Отработать') : null,
          h('button', { class: 'btn', onclick: () => { i = 0; right = 0; ask(); } }, 'Пройти ещё раз'),
          h('button', { class: 'btn primary', onclick: W.back }, 'К урокам'))));
    }
    const k = i;
    W.taskQuestion({ body, q: l.quiz[k], label: `Вопрос ${k + 1} из ${l.quiz.length}`, key: 'g:' + l.id + ':' + k,
      grade: ok => { if (ok) right++; if (W.noteGrammarMistake) W.noteGrammarMistake(l.id, k, ok); }, next: () => { i++; ask(); } });
  };
  ask();
}

// ---------- «Профиль»: настройки, копия, установка ----------
let installEvt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault(); installEvt = e;
  const more = document.getElementById('tab-more');
  if (more && !more.hidden) W.renderMore(more);
});

W.applyTheme = () => {
  const t = W.S.set.theme;
  if (t === 'auto') delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = t;
};

W.renderMore = root => {
  const S = W.S, set = S.set;
  const sel = (key, opts, after) => {
    const s = h('select', { onchange: () => { set[key] = isNaN(+s.value) ? s.value : +s.value; W.save(); after && after(); } },
      opts.map(([v, l]) => h('option', { value: v }, l)));
    s.value = String(set[key]);
    return s;
  };
  const toggle = (key, label, sub) => {
    const c = h('input', { type: 'checkbox', onchange: () => { set[key] = c.checked; W.save(); } });
    c.checked = !!set[key];
    return h('label', { class: 'set-row' }, h('span', null, label, sub ? h('span', { class: 'muted small block' }, sub) : null), c);
  };
  const isIOS = W.isIOS(), standalone = W.standalone();
  let prev = null;
  try { prev = localStorage.getItem(PREV()); } catch (e) {}
  W.put(root, 
    h('header', { class: 'head' }, h('div', { class: 'kicker' }, 'профиль и настройки'), h('h1', null, 'Профиль')),
    W.profileBlock ? W.profileBlock() : null,
    accountPanel(),
    h('section', { class: 'panel' }, h('h3', null, 'Учёба'),
      h('label', { class: 'set-row' }, h('span', null, 'Новых слов в день'), sel('newPerDay', [[5, '5'], [10, '10'], [15, '15'], [20, '20'], [30, '30']])),
      h('label', { class: 'set-row' }, h('span', null, 'Цель дня', h('span', { class: 'muted small block' }, 'сколько повторений в день')), sel('goal', [[10, '10'], [20, '20'], [30, '30'], [50, '50'], [100, '100']])),
      h('label', { class: 'set-row' }, h('span', null, 'Что показывать сначала'),
        sel('dir', [['fw', 'иностранное слово'], ['bw', 'русский перевод'], ['mix', 'вперемешку']])),
      h('label', { class: 'set-row' }, h('span', null, 'Голос (английский)', h('span', { class: 'muted small block' }, 'Нейросетевой; звук докачивается и потом работает без интернета')),
        sel('voice', [['us', 'американский'], ['gb', 'британский']])),
      toggle('sound', 'Кнопки озвучки', 'Немецкий пока озвучивает голос телефона'),
      toggle('hideRude', 'Скрыть грубые слова', 'Слова с пометкой «грубо» пропадут из колод и тренировок')),
    h('section', { class: 'panel' }, h('h3', null, 'Вид'),
      h('label', { class: 'set-row' }, h('span', null, 'Тема'), sel('theme', [['auto', 'как в телефоне'], ['light', 'светлая'], ['dark', 'тёмная']], W.applyTheme))),
    h('section', { class: 'panel' }, h('h3', null, 'Сохранность'),
      h('p', { class: 'muted small' }, 'Все слова и прогресс хранятся только в этом телефоне. Раз в пару недель сохраняйте копию — пригодится при смене телефона или очистке браузера.'),
      h('div', { class: 'row-btns' },
        h('button', { class: 'btn primary', onclick: exportBackup }, 'Сохранить копию'),
        h('button', { class: 'btn', onclick: importBackup }, 'Восстановить')),
      S.lastBackup ? h('p', { class: 'muted small' }, 'Последняя копия: ' + new Date(S.lastBackup).toLocaleDateString('ru-RU')) : null,
      isIOS ? h('p', { class: 'muted small' }, 'Важно: если удалить иконку приложения с экрана iPhone, все слова и прогресс сотрутся.') : null,
      prev ? h('button', { class: 'btn ghost wide', onclick: undoRestore }, 'Вернуть данные, как было до восстановления') : null),
    h('section', { class: 'panel' }, h('h3', null, 'Поставить на телефон'),
      standalone ? h('p', null, '✓ Приложение уже установлено.')
        : installEvt ? h('button', { class: 'btn primary wide', onclick: () => { const e = installEvt; installEvt = null; if (e) e.prompt(); W.renderTab(); } }, 'Установить приложение')
        : null,
      h('p', { class: 'small' }, h('b', null, 'Android (Chrome): '), 'меню ⋮ → «Добавить на главный экран» или «Установить приложение».'),
      h('p', { class: 'small' }, h('b', null, 'iPhone (Safari): '), 'кнопка «Поделиться» (квадрат со стрелкой) → «На экран „Домой“». Открывать нужно именно в Safari.'),
      isIOS ? h('p', { class: 'muted small' }, 'На iPhone данные надёжнее хранятся, когда приложение запускают с иконки на экране, а не из вкладки Safari.') : null),
    h('section', { class: 'panel' }, h('h3', null, 'Озвучка'),
      h('p', { class: 'small' }, 'Если слова не озвучиваются: ', h('b', null, 'Android'), ' — Настройки → Специальные возможности → Синтез речи → установить английский и немецкий голоса. ',
        h('b', null, 'iPhone'), ' — проверьте, что выключен беззвучный режим (переключатель сбоку), и посмотрите Настройки → Универсальный доступ → Устное содержание → Голоса.'),
      h('div', { class: 'row-btns' },
        h('button', { class: 'btn', onclick: () => W.speak('Hello! How are you?', 'en') }, 'Проверить EN'),
        h('button', { class: 'btn', onclick: () => W.speak('Hallo! Wie geht\'s?', 'de') }, 'Проверить DE')),
      W.audioPanel ? W.audioPanel() : null),
    h('section', { class: 'panel' }, h('h3', null, 'Сброс'),
      h('button', { class: 'btn danger', onclick: () => W.confirm('Весь прогресс по словам и урокам обнулится. Ваши колоды останутся.', 'Сбросить', () => {
        S.prog = {}; S.days = {}; S.gram = {}; S.read = {}; S.drill = {}; S.gmist = {}; S.tmist = {}; S.seen = {}; S.stamps = {}; S.act = {}; S.newToday = { d: 0 }; W.save(); W.toast('Прогресс сброшен'); W.renderTab();
      }) }, 'Сбросить прогресс')),
    h('p', { class: 'muted small center' }, 'Живые слова · версия ' + W.VERSION));
};

// ---------- аккаунт ----------
function accountPanel() {
  const A = W.acc;
  const panel = h('section', { class: 'panel', id: 'acc-panel' }, h('h3', null, 'Аккаунт'));
  if (!A || !A.configured()) {
    panel.append(h('p', { class: 'muted small' }, 'Аккаунты скоро заработают. Пока всё хранится в этом телефоне.'));
    return panel;
  }
  if (A.session) {
    const st = { ok: 'Сохранено на сервере' + (A.lastSync ? ' · ' + new Date(A.lastSync).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) : ''),
      syncing: 'Синхронизация…', offline: 'Нет интернета — сохранится, когда появится связь',
      error: 'Не удалось связаться с сервером: ' + A.error, relogin: 'Нужно войти заново' }[A.status] || '';
    W.put(panel, h('h3', null, 'Аккаунт'),
      h('p', null, '👤 ', h('b', null, A.session.user.email)),
      h('p', { class: 'muted small' }, st),
      A.status === 'relogin' ? loginForm(A.session.user.email) : null,
      h('div', { class: 'row-btns' },
        h('button', { class: 'btn', onclick: () => A.sync() }, 'Синхронизировать'),
        h('button', { class: 'btn', onclick: () => W.confirm('Выйти из аккаунта? Данные останутся на сервере, а на этом телефоне откроется режим без аккаунта.', 'Выйти', () => { A.signOut(); }) }, 'Выйти')));
    return panel;
  }
  panel.append(h('p', { class: 'muted small' }, 'Войдите, чтобы прогресс сохранялся на сервере и был одинаковым на телефоне и компьютере. Без интернета приложение тоже работает.'), loginForm(''));
  return panel;
}

function loginForm(email) {
  const A = W.acc;
  const mail = h('input', { type: 'email', placeholder: 'почта', autocomplete: 'email', value: email, autocapitalize: 'off' });
  const pass = h('input', { type: 'password', placeholder: 'пароль (от 6 символов)', autocomplete: 'current-password' });
  const msg = h('p', { class: 'small' });
  const run = async (fn, okText) => {
    if (!mail.value.trim()) { msg.textContent = 'Введите почту'; return; }
    msg.textContent = 'Подождите…';
    try { const r = await fn(); if (okText) msg.textContent = typeof okText === 'function' ? okText(r) : okText; }
    catch (e) { msg.textContent = navigator.onLine ? e.message : 'Нет интернета'; }
  };
  return h('form', { class: 'login', onsubmit: e => { e.preventDefault(); run(() => A.signIn(mail.value.trim(), pass.value)); } },
    mail, pass,
    h('div', { class: 'row-btns' },
      h('button', { type: 'submit', class: 'btn primary' }, 'Войти'),
      h('button', { type: 'button', class: 'btn', onclick: () => {
        if (pass.value.length < 6) { msg.textContent = 'Придумайте пароль от 6 символов'; return; }
        run(() => A.signUp(mail.value.trim(), pass.value), r => r === 'confirm'
          ? 'Готово! Мы отправили письмо на ' + mail.value.trim() + '. Откройте его и нажмите ссылку — после этого войдите здесь.' : '');
      } }, 'Создать аккаунт')),
    h('button', { type: 'button', class: 'link', onclick: () => run(() => A.recover(mail.value.trim()), 'Письмо для смены пароля отправлено на ' + mail.value.trim()) }, 'Забыли пароль?'),
    msg);
}

W.askNewPassword = () => {
  const pass = h('input', { type: 'password', placeholder: 'новый пароль (от 6 символов)', autocomplete: 'new-password' });
  W.modal('Новый пароль', W.field('Пароль', pass), [{ label: 'Сохранить', cls: 'primary', fn: () => {
    if (pass.value.length < 6) { W.toast('Нужно не меньше 6 символов'); return false; }
    W.acc.setPassword(pass.value).then(() => W.toast('Пароль изменён'), e => W.toast(e.message));
  } }]);
};
// обновляем блок аккаунта, если вкладка «Профиль» открыта, и напоминание о входе на главной
W.accChanged = () => {
  const old = document.getElementById('acc-panel');
  if (old && !document.getElementById('tab-more').hidden && !old.contains(document.activeElement)) old.replaceWith(accountPanel());
  if (!document.getElementById('tab-home').hidden && !document.getElementById('screens').children.length) W.renderTab();
};
// «Профиль» сразу на форме входа
W.openAccount = () => {
  W.showTab('more');
  setTimeout(() => {
    const p = document.getElementById('acc-panel');
    if (!p) return;
    p.scrollIntoView({ block: 'start' });
    const mail = p.querySelector('input[type=email]');
    if (mail && !mail.value) mail.focus({ preventScroll: true });
  }, 60);
};

// ---------- приветствие: первая полоса при первом запуске ----------
const WELCOME = 'words-welcome-v1';
W.openWelcome = () => W.push(el => {
  // без аккаунтов (нет настроек сервера) звать некуда — показываем один раз
  if (!(W.acc && W.acc.configured && W.acc.configured())) try { localStorage.setItem(WELCOME, 'off'); } catch (e) {}
  const n = W.allCards('en').length, A = W.acc;
  const signed = A && A.session, canSign = A && A.configured && A.configured();
  // кнопки сначала закрывают статью, а потом открывают нужное — иначе «назад» вернул бы в статью
  const go = fn => () => W.backThen(fn);
  const part = (title, text) => h('p', null, h('b', null, title + '. '), text);
  W.put(el, W.topbar('', null, 'close'),
    h('article', { class: 'welcome' },
      h('div', { class: 'kicker head-line' }, h('span', null, 'Живые слова'), h('span', null, new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }))),
      W.emblem('emblem welcome-emblem'),
      h('h1', null, 'Язык, на котором говорят на самом деле'),
      h('p', { class: 'lead' }, 'Учебники учат «London is the capital». А люди в чатах, сериалах и на работе говорят иначе. Здесь собран язык, который вы услышите в жизни.'),
      h('div', { class: 'welcome-cols' },
        part('Слова', 'Больше ' + (Math.floor(n / 1000) * 1000).toLocaleString('ru-RU') + ' карточек от A1 до C1, у каждой пример и озвучка. Приложение само напоминает повторить слово, когда вы начинаете его забывать.'),
        part('Чтение', 'Рассказы и статьи: нажмите на любое слово, чтобы увидеть перевод.'),
        part('Грамматика', 'Короткие уроки с примерами и заданиями.'),
        part('Перевод', 'Переводите предложения с русского, собирайте из слов, пишите короткие тексты на темы.'),
        part('Тренажёры', 'Неправильные глаголы, произношение (говорите в микрофон — приложение проверит) и работа над своими ошибками.')),
      h('p', null, 'Начните с теста уровня или сразу с занятия на день: приложение само подберёт слова. Есть и немецкий — он пока в начале пути.'),
      h('p', { class: 'muted' }, 'Всё работает без интернета.'),
      h('div', { class: 'col-btns' },
        canSign && !signed ? h('button', { class: 'btn primary wide', onclick: go(W.openAccount) }, 'Войти или создать аккаунт') : null,
        canSign && !signed ? h('p', { class: 'muted small center' }, 'прогресс не потеряется и будет одинаковым на телефоне и компьютере') : null,
        W.openLevelTest ? h('button', { class: 'btn wide', onclick: go(() => { if (W.S.lang !== 'en' && !((window.LEVELTEST || {})[W.S.lang] || []).length) W.setLang('en'); W.openLevelTest(W.S.lang); }) }, 'Узнать свой уровень') : null,
        h('button', { class: 'link welcome-skip', onclick: () => W.back() }, signed ? 'К занятиям →' : 'Продолжить без аккаунта →'),
        signed || !canSign ? null : h('button', { class: 'link welcome-skip muted', onclick: () => {
          try { localStorage.setItem(WELCOME, 'off'); } catch (e) {}
          W.back();
        } }, 'Больше не показывать'))));
});
// при каждом запуске, пока человек не вошёл в аккаунт или не попросил больше не показывать
W.maybeWelcome = () => {
  let off = false;
  try { off = localStorage.getItem(WELCOME) === 'off'; } catch (e) {}
  if (!off && !(W.acc && W.acc.session)) W.openWelcome();
};

function exportBackup() {
  const data = JSON.stringify(W.S);
  const name = 'zhivye-slova-' + W.dayKey() + '.json';
  const file = new File([data], name, { type: 'application/json' });
  const mark = () => { W.S.lastBackup = Date.now(); W.save(); W.renderTab(); };
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator.share({ files: [file], title: 'Копия «Живые слова»' }).then(mark, () => {});
    return;
  }
  const url = URL.createObjectURL(file), a = h('a', { href: url, download: name });
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
  mark();
  W.toast('Проверьте папку «Загрузки»: там должен появиться ' + name);
}

const KEY = () => W.storeKey(), PREV = () => W.storeKey() + '-prev';
function undoRestore() {
  W.confirm('Данные вернутся к состоянию до последнего восстановления из копии.', 'Вернуть', () => {
    try {
      const p = localStorage.getItem(PREV());
      if (!p || !W.validState(JSON.parse(p))) return W.toast('Предыдущих данных нет');
      localStorage.setItem(KEY(), p); localStorage.removeItem(PREV());
    } catch (e) { return W.toast('Не получилось'); }
    location.reload();
  });
}

function importBackup() {
  const inp = h('input', { type: 'file', accept: '.json,application/json' });
  inp.onchange = () => {
    const f = inp.files[0];
    if (!f) return;
    f.text().then(t => {
      let s;
      try { s = JSON.parse(t); } catch (e) { return W.toast('Это не файл копии'); }
      if (!W.validState(s)) return W.toast('Это не файл копии «Живых слов» или он повреждён');
      const n = s.decks.length, p = Object.keys(s.prog || {}).length;
      W.confirm(`Ваши текущие колоды и прогресс заменятся данными из копии (колод: ${n}, слов с прогрессом: ${p}). Если передумаете — в «Профиле» появится кнопка «Вернуть, как было».`, 'Восстановить', () => {
        try {
          localStorage.setItem(PREV(), JSON.stringify(W.S));
          s.mod = Date.now(); localStorage.setItem(KEY(), JSON.stringify(s));
        } catch (e) { return W.toast('Не удалось сохранить'); }
        location.reload();
      });
    });
  };
  inp.click();
}
})();
