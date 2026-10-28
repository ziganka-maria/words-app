'use strict';
// тренажёры грамматики по темам: тема = несколько уроков, задания — из GTASK[урок] (файлы gtask-en-*.js)
// задание: { q, o, a, w } — выбор; { k: 'form'|'fix'|'re', q, t: [верные ответы], w } — ввод; k: 'err' — выбор фрагмента с ошибкой
(function () {
const W = window.W, h = W.h;
W.GT_N = 15;
const LV = ['A1', 'A2', 'B1', 'B2', 'C1'];
window.GTASK = window.GTASK || {};
window.GTRAIN = window.GTRAIN || {};
GTRAIN.en = [
  { id: 'basics', title: 'Основа: to be, there is, have got', lessons: ['en-be', 'en-there', 'en-havegot', 'en-this'] },
  { id: 'nouns', title: 'Существительные и местоимения', lessons: ['en-plural', 'en-possessive', 'en-object'] },
  { id: 'articles', title: 'Артикли в предложениях', lessons: ['en-articles'] },
  { id: 'present', title: 'Present Simple и Continuous', lessons: ['en-present1', 'en-present2', 'en-continuous'] },
  { id: 'past', title: 'Прошедшие времена', lessons: ['en-was', 'en-past1', 'en-past2', 'en-pastcont', 'en-pastperf', 'en-usedto', 'en-narrative'] },
  { id: 'perfect', title: 'Present Perfect', lessons: ['en-g2', 'en-ppps', 'en-ppc'] },
  { id: 'future', title: 'Будущее время', lessons: ['en-future', 'en-future2', 'en-futureperf', 'en-g1'] },
  { id: 'cond', title: 'Условия и сожаления: if, wish', lessons: ['en-cond1', 'en-cond2', 'en-cond3', 'en-wish', 'en-unreal', 'en-cond-adv'] },
  { id: 'modals', title: 'Модальные глаголы', lessons: ['en-can', 'en-modals', 'en-deduction', 'en-pastmodals'] },
  { id: 'passive', title: 'Пассивный залог', lessons: ['en-passive', 'en-causative', 'en-impersonal'] },
  { id: 'reported', title: 'Косвенная речь', lessons: ['en-reported', 'en-reportverbs'] },
  { id: 'ing', title: 'To или -ing', lessons: ['en-ing', 'en-gerinf2'] },
  { id: 'prep', title: 'Предлоги', lessons: ['en-prep'] },
  { id: 'compare', title: 'Сравнения: bigger, the most, too, enough', lessons: ['en-comparative', 'en-superlative', 'en-enough'] },
  { id: 'quant', title: 'Количество: much, many, some, any, both', lessons: ['en-countable', 'en-quantifiers'] },
  { id: 'relative', title: 'Who, which, that и причастия', lessons: ['en-relative', 'en-relative2', 'en-participle'] },
  { id: 'questions', title: 'Вопросы и порядок слов', lessons: ['en-howq', 'en-tags', 'en-adverbs'] },
  { id: 'phrasal', title: 'Фразовые глаголы', lessons: ['en-phrasal'] },
  { id: 'emphasis', title: 'Выразительность: инверсия, усиление, пропуски', lessons: ['en-inversion', 'en-cleft', 'en-ellipsis'] }
];

const lessonMap = lang => { const m = {}; for (const l of (window.GRAMMAR || {})[lang] || []) m[l.id] = l; return m; };
// все задания темы: { l, qi: 'xN', q, key }
const pool = (lang, th) => {
  const m = lessonMap(lang), out = [];
  // вопросы проверки урока не берём — иначе «Проверить себя» уже не проверит честно
  for (const id of th.lessons) { const l = m[id]; if (l) (GTASK[id] || []).forEach((q, i) => { if (!W.gtDupQuiz(l, q)) out.push({ l, qi: 'x' + i, q, key: 'g:' + id + ':x' + i }); }); }
  return out;
};
// уровень задания: свой (q.lv), если задан, иначе уровень урока
const lvIdx = x => LV.indexOf(x.q.lv || x.l.level);
const userIdx = lang => Math.max(0, LV.indexOf(W.userLevel(lang) === 'A0' ? 'A1' : W.userLevel(lang)));
const range = items => { const ls = [...new Set(items.map(lvIdx))].sort(); return ls.length ? LV[ls[0]] + (ls.length > 1 ? '–' + LV[ls[ls.length - 1]] : '') : ''; };

W.gtBlock = (lang, row) => {
  const themes = (GTRAIN[lang] || []).map(th => ({ th, items: pool(lang, th) })).filter(x => x.items.length);
  if (!themes.length) return null;
  return h('div', null,
    h('div', { class: 'lvl-head' }, 'Грамматика по темам'),
    themes.map(({ th, items }) => row('gt-' + lang + '-' + th.id, th.title, W.plural(items.length, 'задание', 'задания', 'заданий') + ' · ' + range(items), () => openTheme(lang, th), true)));
};

let allLevels = false; // переключатель «все уровни» — на время работы приложения
function openTheme(lang, th) {
  W.push(el => render(el, lang, th));
}
// экран темы; переключатель уровней перерисовывает его на месте
function render(el, lang, th) {
  {
    const s = W.drillShell(el, th.title);
    const start = () => {
      const all = pool(lang, th), up = userIdx(lang);
      const mine = all.filter(x => lvIdx(x) <= up);
      const src = allLevels || mine.length < 5 ? all : mine;
      // сначала ошибки, потом невиденные
      const mist = x => ((W.S.gmist || {})[x.l.id] || []).includes(x.qi);
      const fresh = W.freshFirst(src, 999, x => x.key);
      const qs = fresh.filter(mist).concat(fresh.filter(x => !mist(x))).slice(0, W.GT_N);
      let i = 0, right = 0;
      const weak = {};
      const ask = () => {
        s.progress(i, qs.length);
        if (i >= qs.length) {
          W.save();
          const ls = Object.values(weak).filter(x => x.bad > 0).sort((a, b) => b.bad - a.bad).map(x => x.l).slice(0, 3);
          return W.drillFinish(s, 'gt-' + lang + '-' + th.id, 'gtheme', right, qs.length, start,
            ls.length ? h('div', null, h('p', { class: 'muted small' }, 'Стоит перечитать правило:'),
              h('div', { class: 'col-btns' }, ls.map(l => h('button', { class: 'btn ghost', onclick: () => W.openLesson(l) }, l.title)))) : null);
        }
        const x = qs[i];
        W.taskQuestion({ body: s.body, q: x.q, label: (x.q.lv || x.l.level) + ' · ' + x.l.title, key: x.key,
          grade: ok => { if (ok) right++; else (weak[x.l.id] = weak[x.l.id] || { l: x.l, bad: 0 }).bad++; W.noteGrammarMistake(x.l.id, x.qi, ok); },
          next: () => { i++; ask(); el.scrollTop = 0; } });
      };
      ask();
    };
    // выбор уровня — над заданиями, если выше уровня пользователя есть ещё задания
    const all = pool(lang, th), mine = all.filter(x => lvIdx(x) <= userIdx(lang));
    if (all.length > mine.length && mine.length >= 5) {
      const chip = (on, text, v) => h('button', { class: 'chip' + (on ? ' on' : ''), 'aria-pressed': on ? 'true' : 'false', onclick: () => { if (allLevels !== v) { allLevels = v; render(el, lang, th); } } }, text);
      s.body.before(h('div', { class: 'chips gt-lv' }, chip(!allLevels, 'до ' + LV[userIdx(lang)], false), chip(allLevels, 'все уровни', true)));
    }
    start();
  }
}
})();
