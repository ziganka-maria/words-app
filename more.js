'use strict';
// вкладки «Грамматика» и «Ещё»
(function () {
const W = window.W, h = W.h;

// ---------- грамматика ----------
W.renderGrammar = root => {
  const lang = W.S.lang, list = (window.GRAMMAR || {})[lang] || [];
  W.put(root, 
    h('header', { class: 'head' }, h('h1', null, 'Грамматика'), W.langSwitch()),
    h('p', { class: 'muted' }, 'Короткие уроки по порядку: правило простыми словами, примеры из живой речи и проверка.'),
    h('div', { class: 'lessons' }, list.map((l, i) => {
      const g = W.S.gram[l.id];
      return h('button', { class: 'lesson', onclick: () => openLesson(l, i + 1) },
        h('span', { class: 'l-num' + (g && g.done ? ' done' : '') }, g && g.done ? '✓' : i + 1),
        h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, l.title),
          h('span', { class: 'muted small' }, l.level + ' · ' + l.sub + (g ? ` · лучший результат ${g.best}%` : ''))));
    })),
    h('p', { class: 'muted small' }, 'Следующие уроки появятся в обновлениях.'));
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

function openLesson(l, num) {
  W.push(el => {
    W.put(el, W.topbar('Урок ' + num),
      h('article', { class: 'lesson-body' }, h('h2', null, l.title), l.blocks.map(block)),
      h('button', { class: 'btn primary wide', onclick: () => quiz(el, l, num) }, 'Проверить себя · ' + W.plural(l.quiz.length, 'вопрос', 'вопроса', 'вопросов')));
  });
}

function quiz(el, l, num) {
  let i = 0, right = 0;
  const bar = h('i'), body = h('div', { class: 'study' });
  W.put(el, W.topbar('Урок ' + num + ' · проверка'), h('div', { class: 'bar' }, bar), body);
  el.scrollTop = 0;
  const ask = () => {
    bar.style.width = Math.round(i / l.quiz.length * 100) + '%';
    if (i >= l.quiz.length) {
      const pct = Math.round(right / l.quiz.length * 100), prev = W.S.gram[l.id];
      W.S.gram[l.id] = { done: (prev && prev.done) || pct >= 70, best: Math.max(pct, prev ? prev.best : 0) };
      W.save();
      return W.put(body, h('div', { class: 'summary' },
        h('div', { class: 'big' }, `${right} из ${l.quiz.length}`),
        h('p', null, pct >= 70 ? 'Урок пройден! ✓' : 'Чтобы пройти урок, нужно 70%. Перечитайте правило и попробуйте ещё раз.'),
        h('div', { class: 'col-btns' },
          h('button', { class: 'btn', onclick: () => { i = 0; right = 0; ask(); } }, 'Пройти ещё раз'),
          h('button', { class: 'btn primary', onclick: W.back }, 'К урокам'))));
    }
    const q = l.quiz[i], why = h('div', { class: 'result' });
    const after = (ok, extra) => {
      if (ok) right++;
      why.className = 'result ' + (ok ? 'right' : 'wrong');
      W.put(why, h('b', null, ok ? 'Верно!' : 'Не совсем'), extra || null, h('div', null, q.w));
      body.append(h('button', { class: 'btn primary wide', onclick: () => { i++; ask(); } }, 'Дальше'));
    };
    let ctl;
    if (q.o) {
      ctl = h('div', { class: 'answers' }, q.o.map((o, k) => h('button', { class: 'btn answer', onclick: e => {
        ctl.querySelectorAll('button').forEach((b, j) => { b.disabled = true; if (j === q.a) b.classList.add('right'); });
        if (k !== q.a) e.currentTarget.classList.add('wrong');
        after(k === q.a);
      } }, o)));
    } else {
      const input = h('input', { type: 'text', class: 'write-in', autocapitalize: 'off', autocomplete: 'off', spellcheck: 'false' });
      ctl = h('form', { class: 'write', onsubmit: e => {
        e.preventDefault();
        if (input.disabled || !input.value.trim()) return;
        input.disabled = true;
        const ok = q.t.some(t => W.check(input.value, { w: t }) === 'ok');
        after(ok, ok ? null : h('div', null, 'Правильно: ', h('b', null, q.t[0])));
      } }, input, h('button', { type: 'submit', class: 'btn primary wide' }, 'Проверить'));
      setTimeout(() => input.focus(), 60);
    }
    W.put(body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, `Вопрос ${i + 1} из ${l.quiz.length}`), h('div', { class: 'q' }, q.q)), ctl, why);
  };
  ask();
}

// ---------- «Ещё»: настройки, копия, установка ----------
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
    h('header', { class: 'head' }, h('h1', null, 'Ещё')),
    accountPanel(),
    h('section', { class: 'panel' }, h('h3', null, 'Учёба'),
      h('label', { class: 'set-row' }, h('span', null, 'Новых слов в день'), sel('newPerDay', [[5, '5'], [10, '10'], [15, '15'], [20, '20'], [30, '30']])),
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
        h('button', { class: 'btn', onclick: () => W.speak('Hallo! Wie geht\'s?', 'de') }, 'Проверить DE'))),
    h('section', { class: 'panel' }, h('h3', null, 'Сброс'),
      h('button', { class: 'btn danger', onclick: () => W.confirm('Весь прогресс по словам и урокам обнулится. Ваши колоды останутся.', 'Сбросить', () => {
        S.prog = {}; S.days = {}; S.gram = {}; S.newToday = { d: 0 }; W.save(); W.toast('Прогресс сброшен'); W.renderTab();
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
  panel.append(h('p', { class: 'muted small' }, 'Войдите, чтобы прогресс сохранялся на сервере и был одинаковым на телефоне и компьютере. Без интернета всё работает, как раньше.'), loginForm(''));
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
// обновляем блок аккаунта, если вкладка «Ещё» открыта
W.accChanged = () => {
  const old = document.getElementById('acc-panel');
  if (old && !document.getElementById('tab-more').hidden && !old.contains(document.activeElement)) old.replaceWith(accountPanel());
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
      W.confirm(`Ваши текущие колоды и прогресс заменятся данными из копии (колод: ${n}, слов с прогрессом: ${p}). Если передумаете — в «Ещё» появится кнопка «Вернуть, как было».`, 'Восстановить', () => {
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
