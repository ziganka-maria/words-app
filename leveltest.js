'use strict';
// тест уровня: блоки по 4 вопроса, сложность подстраивается под ответы
(function () {
const W = window.W, h = W.h;
const BLOCK = 4, PASS = 3;

// ---------- движок (без интерфейса — проверяется отдельно) ----------
W.levelTest = lang => {
  const bank = (window.LEVELTEST || {})[lang] || [];
  // варианты перемешиваем: в банке верный ответ часто стоит первым
  const mix = q => { const o = W.shuffle(q.o.map((t, i) => ({ t, ok: i === q.a }))); return Object.assign({}, q, { o: o.map(x => x.t), a: o.findIndex(x => x.ok) }); };
  const byLevel = lv => ({ g: W.shuffle(bank.filter(q => q.lv === lv && q.k === 'g')).map(mix), v: W.shuffle(bank.filter(q => q.lv === lv && q.k === 'v')).map(mix) });
  const pools = W.LEVELS.map(byLevel);
  const T = { idx: 1, tested: {}, log: [], queue: [], done: false, result: null };
  // вопросы блока: поровну грамматики и слов
  const load = () => {
    const p = pools[T.idx], q = [];
    for (let i = 0; q.length < BLOCK && (p.g.length || p.v.length); i++) {
      const src = i % 2 === 0 ? (p.g.length ? p.g : p.v) : (p.v.length ? p.v : p.g);
      q.push(src.shift());
    }
    T.queue = q; T.block = { idx: T.idx, c: 0, n: 0 };
    if (!q.length) finish();
  };
  const finish = () => {
    T.done = true;
    const passed = Object.keys(T.tested).filter(i => T.tested[i].pass).map(Number);
    const top = passed.length ? Math.max(...passed) : -1;
    const stat = k => { const a = T.log.filter(x => x.q.k === k); return { c: a.filter(x => x.ok).length, n: a.length }; };
    T.result = { lv: top < 0 ? 'A0' : W.LEVELS[top], g: stat('g'), v: stat('v'), n: T.log.length };
  };
  T.next = () => T.done ? null : T.queue[0] || null;
  T.answer = choice => {
    const q = T.queue.shift(), ok = choice === q.a;
    T.log.push({ q, choice, ok });
    T.block.n++; if (ok) T.block.c++;
    if (!T.queue.length) {
      const prev = T.tested[T.idx];
      // провал «на волосок» (2 из 4) проверяем ещё одним блоком, чтобы случайная ошибка не занизила уровень
      if (!prev && T.block.c === BLOCK - 2 && (pools[T.idx].g.length + pools[T.idx].v.length) >= BLOCK) {
        T.tested[T.idx] = { c: T.block.c, n: T.block.n, pass: false, pending: true };
        load();
        return ok;
      }
      const c = (prev ? prev.c : 0) + T.block.c, n = (prev ? prev.n : 0) + T.block.n;
      const pass = prev ? c >= 5 : c >= PASS;
      T.tested[T.idx] = { c, n, pass };
      let next = null;
      if (pass) { if (T.idx < W.LEVELS.length - 1 && !T.tested[T.idx + 1]) next = T.idx + 1; }
      else if (T.idx > 0 && !T.tested[T.idx - 1] && !(T.tested[T.idx - 1] && T.tested[T.idx - 1].pass)) {
        // если уровнем ниже уже есть пройденный, дальше вниз идти не нужно
        const anyBelow = Object.keys(T.tested).some(i => +i < T.idx && T.tested[i].pass);
        if (!anyBelow) next = T.idx - 1;
      }
      if (next === null) finish(); else { T.idx = next; load(); }
    }
    return ok;
  };
  load();
  return T;
};

// ---------- карточка на главной ----------
W.levelCard = () => {
  const lang = W.S.lang;
  if (!((window.LEVELTEST || {})[lang] || []).length) return null;
  const r = W.S.level[lang];
  return h('div', { class: 'levelcard' },
    h('div', null,
      h('b', null, r ? 'Ваш уровень: ' + W.levelInfo[r.lv] : 'Узнайте свой уровень'),
      h('div', { class: 'muted small' }, r ? 'Сдан ' + new Date(r.ts).toLocaleDateString('ru-RU') + ' · можно пересдать' : '10–15 минут, вопросы подстраиваются под вас')),
    h('button', { class: 'btn' + (r ? '' : ' primary'), onclick: () => W.openLevelTest(lang) }, r ? 'Пересдать' : 'Пройти тест'));
};

// ---------- экран теста ----------
W.openLevelTest = lang => W.push(el => {
  let T = W.levelTest(lang);
  const body = h('div', { class: 'study' });
  W.put(el, W.topbar('Тест уровня', null, 'close'), body);
  el.classList.add('study-screen');

  const intro = () => W.put(body, h('div', { class: 'summary' },
    h('div', { class: 'big' }, '📝'),
    h('p', null, 'Вопросы по грамматике и словам, сначала средней сложности. Если отвечаете верно, становится сложнее, если нет — проще.'),
    h('p', { class: 'muted small' }, 'Не угадывайте: если не знаете, нажмите «Не знаю». Так результат будет точнее. Подсказок и ответов по ходу теста нет, разбор — в конце.'),
    h('div', { class: 'col-btns' }, h('button', { class: 'btn primary wide', onclick: ask }, 'Начать'))));
  // повторное прохождение — в том же экране
  const again = () => { T = W.levelTest(lang); intro(); el.scrollTop = 0; };

  const ask = () => {
    const q = T.next();
    if (!q) return result();
    const num = T.log.length + 1;
    const box = h('div', { class: 'answers' });
    let locked = false;
    q.o.forEach((o, i) => box.append(h('button', { class: 'btn answer', onclick: () => { if (locked) return; locked = true; T.answer(i); ask(); } }, o)));
    box.append(h('button', { class: 'btn ghost', onclick: () => { if (locked) return; locked = true; T.answer(-1); ask(); } }, 'Не знаю'));
    W.put(body, h('div', { class: 'prompt' },
      h('div', { class: 'muted small' }, 'Вопрос ' + num + (q.k === 'g' ? ' · грамматика' : ' · слова')),
      h('div', { class: 'q' }, q.q)), box);
    el.scrollTop = 0;
  };

  const result = () => {
    const r = T.result, mistakes = T.log.filter(x => !x.ok);
    W.S.level[lang] = { lv: r.lv, ts: Date.now(), g: r.g, v: r.v };
    W.save();
    // на главной сразу раскрываем папку с подходящими колодами
    W.expandFolder(lang, lang + '-' + (r.lv === 'A0' || r.lv === 'A1' ? 'a1' : 'a2'));
    const hint = { A0: 'Начните с самого начала: колоды A1 и уроки грамматики 1–16.',
      A1: 'Дальше — колоды и уроки A1, потом A2.', A2: 'Вы можете смело браться за колоды и уроки A2. Базу A1 лучше быстро повторить.',
      B1: 'Колоды и уроки B1 появятся на следующих этапах. Пока освежите A2 и учите «Живой язык».',
      B2: 'Материалы B2 появятся на следующих этапах. Пока можно повторить A2 и учить «Живой язык».',
      C1: 'Материалы C1 появятся позже. Пока пригодятся «Живой язык» и повторение слов.' }[r.lv];
    W.put(body, h('div', { class: 'summary' },
      h('div', { class: 'muted small' }, 'Ваш уровень'),
      h('div', { class: 'big' }, W.levelInfo[r.lv]),
      h('p', null, `Грамматика: ${r.g.c} из ${r.g.n} · Слова: ${r.v.c} из ${r.v.n}`),
      h('p', null, hint),
      h('p', { class: 'muted small' }, 'Это ориентир, а не сертификат: короткий тест не заменяет экзамен.'),
      mistakes.length ? h('div', { class: 'mistakes' }, h('h3', null, 'Разбор ошибок'),
        mistakes.map(x => h('div', { class: 'mistake' }, h('b', null, x.q.q),
          h('div', { class: 'wrong-a' }, 'Ваш ответ: ' + (x.choice < 0 ? 'не знаю' : x.q.o[x.choice])),
          h('div', { class: 'right-a' }, 'Верно: ' + x.q.o[x.q.a])))) : h('p', null, 'Без единой ошибки! 🎯'),
      h('div', { class: 'col-btns' },
        h('button', { class: 'btn primary wide', onclick: () => { W.back(); } }, 'К колодам'),
        h('button', { class: 'btn wide', onclick: again }, 'Пройти ещё раз'))));
    el.scrollTop = 0;
  };

  intro();
  return () => W.renderTab();
});
})();
