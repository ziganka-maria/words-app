'use strict';
// отработка грамматики: смешанные задания по уроку и по уровню, интервальные повторы пройденных уроков
(function () {
const W = window.W, h = W.h;
W.PRACTICE_N = 12; W.LEVEL_REVIEW_N = 20;
const lessons = lang => (window.GRAMMAR || {})[lang] || [];
const extra = l => (window.GDRILL || {})[l.id] || [];
const xtra = l => (window.GTASK || {})[l.id] || [];

// вопрос урока по номеру: числа — проверка урока (quiz), 'dN' — доп. вопросы для отработки (GDRILL), 'xN' — задания тренажёров по темам (GTASK)
W.gramQ = (l, qi) => typeof qi !== 'string' ? l.quiz[qi] : qi[0] === 'd' ? extra(l)[+qi.slice(1)] : qi[0] === 'x' ? xtra(l)[+qi.slice(1)] : undefined;
// пока урок не пройден, вопросы его проверки не трогаем — иначе «Проверить себя» уже не проверит честно
const refs = l => (W.S.gram[l.id] && W.S.gram[l.id].done ? l.quiz.map((q, i) => i) : []).concat(extra(l).map((q, i) => 'd' + i), xtra(l).map((q, i) => 'x' + i));
// есть ли что отрабатывать: свои вопросы урока или пройденная проверка (для немецкого доп. вопросов пока нет)
W.hasPractice = l => extra(l).length > 0 || xtra(l).length > 0 || !!(W.S.gram[l.id] && W.S.gram[l.id].done);
const qKey = (l, qi) => 'g:' + l.id + ':' + qi;

// ---------- интервальные повторы ----------
// S.gram[урок].rv = { s: ступень, due: день повтора (W.dayNum), t: когда менялось — для слияния копий }
const IV = [3, 7, 16, 35, 90];
W.gramSchedule = (id, pct) => {
  const g = W.S.gram[id];
  if (!g || !g.done) return;
  const today = W.dayNum(), rv = g.rv;
  let s = 0, due = today + IV[0];
  if (rv && pct < 50) due = today + 1; // забылось — повторим завтра и начнём лестницу заново
  else if (rv) {
    if (rv.due > today) return; // повторили раньше срока и неплохо — расписание не трогаем
    s = pct >= 75 ? Math.min(rv.s + 1, IV.length - 1) : rv.s;
    due = today + IV[s];
  }
  g.rv = { s, due, t: Date.now() };
};
// уроки, пройденные до появления повторов, получают срок с разбросом, чтобы не навалились в один день
const migrate = lang => {
  let n = 0;
  for (const l of lessons(lang)) {
    const g = W.S.gram[l.id];
    if (g && g.done && !g.rv) g.rv = { s: 0, due: W.dayNum() + 1 + (n++ % 7), t: 0 };
  }
  if (n) W.save(true);
};
W.gramDue = lang => {
  migrate(lang);
  const t = W.dayNum(), G = W.S.gram;
  return lessons(lang).filter(l => G[l.id] && G[l.id].done && G[l.id].rv && G[l.id].rv.due <= t).sort((a, b) => G[a.id].rv.due - G[b.id].rv.due);
};
W.dueCard = (lang, due) => h('button', { class: 'lesson due-card', onclick: () => W.openDueReview(lang) },
  h('span', { class: 'l-num', 'aria-hidden': 'true' }, '↻'),
  h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, 'Пора повторить'),
    h('span', { class: 'muted small' }, W.plural(due.length, 'урок', 'урока', 'уроков') + ': ' + due.slice(0, 3).map(l => l.title).join(', ') + (due.length > 3 ? '…' : ''))));

// ---------- подбор заданий ----------
// вопросы поровну из каждого урока (сначала ошибки, потом не встречавшиеся), предложения — по темам этих уроков
const build = (lang, ls, total, nS, more) => {
  const per = ls.map(l => {
    const mist = new Set(((W.S.gmist || {})[l.id] || []).map(String));
    const r = W.freshFirst(refs(l), 999, qi => qKey(l, qi));
    return r.filter(qi => mist.has(String(qi))).concat(r.filter(qi => !mist.has(String(qi)))).map(qi => ({ k: 'q', l, qi }));
  });
  const byId = {};
  ls.forEach(l => { byId[l.id] = l; });
  const sents = W.lessonSentences ? ls.flatMap(l => W.lessonSentences(lang, l.id)) : [];
  // предложений по темам мало — добавляем общие предложения уровня
  const ss = W.freshFirst(sents, nS);
  if (ss.length < nS && more) ss.push(...W.freshFirst(more().filter(x => !ss.includes(x)), nS - ss.length));
  const qs = [];
  for (let i = 0; qs.length < total - ss.length && per.some(p => p.length); i = (i + 1) % per.length) if (per[i].length) qs.push(per[i].shift());
  // вид задания для предложения — тот, что пока встречался реже
  const used = { translate: 0, tiles: 0, listen: 0 };
  const sItems = ss.map(s => {
    const k = W.shuffle(W.tasks.kinds(s)).sort((a, b) => used[a] - used[b])[0];
    used[k]++;
    return { k, l: byId[s.les] || null, s };
  });
  // перемешиваем равномерно: вопросы и предложения чередуются, начинаем с вопроса
  const out = [];
  let a = 0, b = 0;
  while (a < qs.length || b < sItems.length) {
    if (b < sItems.length && (a >= qs.length || (b + 1) / (sItems.length + 1) <= a / (qs.length + 1))) out.push(sItems[b++]);
    else out.push(qs[a++]);
  }
  return out;
};
const levelSentences = (lang, lv) => () => W.sentences ? W.sentences(lang, lv) : [];

// ---------- экран отработки ----------
// single — отработка одного урока: его название уже в заголовке, над вопросом не повторяем
function run(lang, title, make, again, single) {
  W.push(el => {
    const bar = h('i'), body = h('div', { class: 'study' }), count = h('span', { class: 'muted small' });
    W.put(el, W.topbar(title, null, 'close'), h('div', { class: 'bar' }, bar), count, body);
    el.classList.add('study-screen');
    const start = () => {
      const items = make();
      if (!items.length) return W.put(body, h('p', { class: 'muted empty' }, 'Заданий пока нет.'));
      let i = 0, right = 0;
      const stat = {};
      const finish = () => {
        bar.style.width = '100%'; count.textContent = '';
        const pct = Math.round(right / items.length * 100);
        // расписание повторов — по каждому уроку, если на него было хотя бы два задания
        for (const x of Object.values(stat)) if (x.n >= 2) W.gramSchedule(x.l.id, Math.round(x.r / x.n * 100));
        if (right > 0) W.drillDone('gp-' + lang, 'gpractice', pct); else W.save();
        const weak = Object.values(stat).filter(x => x.n >= 2 && x.r / x.n < 0.6).map(x => x.l);
        W.put(body, h('div', { class: 'summary' },
          h('div', { class: 'big' }, right + ' из ' + items.length),
          h('p', null, pct === 100 ? 'Без единой ошибки!' : pct >= 70 ? 'Хороший результат.' : 'Стоит повторить ещё раз.'),
          weak.length ? h('div', null, h('p', { class: 'muted small' }, 'Стоит перечитать правило:'),
            h('div', { class: 'col-btns' }, weak.map(l => h('button', { class: 'btn ghost', onclick: () => W.openLesson(l) }, l.title)))) : null,
          right < items.length ? h('p', { class: 'muted small' }, 'Ошибки сохранились в «Моих ошибках» — их можно повторить отдельно.') : null,
          h('div', { class: 'col-btns' },
            again ? h('button', { class: 'btn', onclick: start }, again) : null,
            h('button', { class: 'btn primary', onclick: W.back }, 'Готово'))));
        el.scrollTop = 0;
      };
      const ask = () => {
        bar.style.width = Math.round(i / items.length * 100) + '%';
        count.textContent = i + ' / ' + items.length;
        if (i >= items.length) return finish();
        const it = items[i];
        const grade = ok => {
          if (ok) right++;
          if (it.l) { const x = stat[it.l.id] = stat[it.l.id] || { l: it.l, r: 0, n: 0 }; x.n++; if (ok) x.r++; }
        };
        const next = () => { i++; ask(); el.scrollTop = 0; };
        if (it.k === 'q') W.taskQuestion({ body, q: W.gramQ(it.l, it.qi), label: single ? 'Вопрос по теме' : it.l.title, key: qKey(it.l, it.qi), grade: ok => { grade(ok); W.noteGrammarMistake(it.l.id, it.qi, ok); }, next });
        else W.tasks[it.k]({ body, lang, q: it.s, grade, next });
      };
      ask();
    };
    start();
  });
}

// один урок: 12 заданий, примерно треть — предложения по его теме
W.openPractice = l => {
  const lang = W.S.lang;
  run(lang, 'Отработка · ' + l.title, () => build(lang, [l], W.PRACTICE_N, 5, null), 'Ещё ' + W.PRACTICE_N, true);
};
// весь уровень: пройденные уроки, а если их нет — те, где есть свои вопросы для отработки
W.openLevelReview = (lang, lv) => {
  const all = lessons(lang).filter(l => l.level === lv);
  const passed = all.filter(l => W.S.gram[l.id] && W.S.gram[l.id].done), ready = all.filter(W.hasPractice);
  run(lang, 'Повторение · ' + lv, () => build(lang, W.shuffle(passed.length ? passed : ready.length ? ready : all), W.LEVEL_REVIEW_N, 7, levelSentences(lang, lv)), 'Ещё ' + W.LEVEL_REVIEW_N);
};
// уроки, которым пора на повтор: не больше шести за раз, самые давние первыми
W.openDueReview = lang => {
  const due = W.gramDue(lang).slice(0, 6);
  if (!due.length) return W.toast('Сейчас повторять нечего');
  run(lang, 'Пора повторить', () => build(lang, due, Math.min(W.LEVEL_REVIEW_N, due.length * 6), Math.min(6, due.length * 2), null), null);
};
})();
