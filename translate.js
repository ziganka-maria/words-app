'use strict';
// вкладка «Перевод»: перевод предложений с русского, сборка из слов, топики
(function () {
const W = window.W, h = W.h;

// ---------- банк предложений ----------
// примеры из карточек, уроков и текстов выбранного уровня; ключ — по английскому тексту, чтобы помнить ошибки
const words = s => s.trim().split(/\s+/).length;
let bank = null;
const buildBank = () => {
  bank = {};
  const add = (lang, lv, en, ru, hint) => {
    if (!en || !ru || /[а-яё]/i.test(en) || !/[а-яё]/i.test(ru)) return;
    // не для перевода: реплики с именем говорящего, два варианта через «/», прямая речь в кавычках
    if (/^[A-Z][a-z]+:/.test(en) || en.includes('/') || /[«»“”"]/.test(en)) return;
    const n = words(en);
    if (n < 3 || n > 16) return;
    const key = lang + ':' + W.audioKey(W.speechText(en));
    const b = (bank[lang] = bank[lang] || {});
    if (!b[key]) b[key] = { key, lang, lv, en, ru, hint, n };
  };
  for (const lang of Object.keys(W.LANGS)) {
    for (const d of W.allDecks(lang)) if (d.builtin) for (const c of d.cards) if (c.ex && c.lv && c.lv !== 'live') add(lang, c.lv, c.ex, c.et, c.w + ' — ' + c.t);
    for (const l of (window.GRAMMAR || {})[lang] || []) for (const b of l.blocks) if (b.t === 'ex') b.rows.forEach(r => add(lang, l.level, r[0], r[1], 'урок: ' + l.title));
    for (const t of (window.TEXTS || {})[lang] || []) for (const s of t.p.flat()) add(lang, t.level, s[0], s[1], 'текст «' + t.title + '»');
  }
};
const pool = (lang, lv) => { if (!bank) buildBank(); return Object.values(bank[lang] || {}).filter(x => x.lv === lv); };
const byKey = key => { if (!bank) buildBank(); const lang = key.split(':')[0]; return (bank[lang] || {})[key]; };

// ---------- сравнение ответа ----------
const CONTR = [[/\b(can)'t\b/g, 'cannot'], [/\bwon't\b/g, 'will not'], [/\bshan't\b/g, 'shall not'], [/n't\b/g, ' not'], [/'re\b/g, ' are'], [/\bi'm\b/g, 'i am'],
  [/'ve\b/g, ' have'], [/'ll\b/g, ' will'], [/\bcan not\b/g, 'cannot'], [/\ba (hundred|thousand|million)\b/g, 'one $1'],
  // 's (is / has) и 'd (would / had) отделяем знаком — при сравнении он равен любой из двух полных форм, а сами is и has не путаются
  [/\b(it|he|she|that|what|there|here|who|where|how|everything|nothing)'s\b/g, "$1 's"], [/\b(i|you|he|she|it|we|they|there|who)'d\b/g, "$1 'd"]];
const AMB = { "'s": ['is', 'has'], "'d": ['would', 'had'] };
const eq = (x, y) => x === y || (AMB[x] || []).includes(y) || (AMB[y] || []).includes(x);
// приводим к одному виду: регистр, апострофы, сокращения, числа словами, без знаков препинания
const norm = s => {
  let t = W.spellNumbers(String(s).toLowerCase().replace(/[’‘`]/g, "'"));
  for (const [re, to] of CONTR) t = t.replace(re, to);
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
// 'ok' | 'close' (артикль или опечатка) | 'bad'; refMiss — номера слов эталона, которых нет у пользователя
const compare = (input, ref) => {
  const u = toks(input), r = toks(ref);
  if (!u.length) return { v: 'bad', refMiss: new Set(r.map((x, i) => i)) };
  const { inA, inB } = lcs(r, u);
  if (inA.size === r.length && inB.size === u.length) return { v: 'ok', refMiss: new Set() };
  const miss = r.map((x, i) => i).filter(i => !inA.has(i));
  const extra = u.filter((x, j) => !inB.has(j));
  const missW = miss.map(i => r[i]);
  const onlyArts = [...missW, ...extra].every(x => ARTS.has(x));
  const oneTypo = missW.length === 1 && extra.length === 1 && typo(extra[0], missW[0]);
  return { v: onlyArts || oneTypo ? 'close' : 'bad', refMiss: new Set(miss), why: onlyArts ? 'Проверьте артикли.' : oneTypo ? 'Опечатка: «' + extra[0] + '» → «' + missW[0] + '».' : '' };
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
const pick = (list, n) => W.shuffle(list).slice(0, n);

// ---------- режим 1: перевести предложение ----------
function openSentences(lang, lv, given) {
  W.push(el => {
    const s = shell(el, given ? 'Ошибки перевода' : 'Перевод · ' + lv);
    const start = () => {
      const qs = given ? pick(given(), 10) : pick(pool(lang, lv).filter(x => x.n <= 14), 10);
      if (!qs.length) return W.put(s.body, h('p', { class: 'muted empty' }, 'Для этого уровня пока нет предложений.'));
      let i = 0, right = 0;
      const ask = () => {
        s.progress(i, qs.length);
        if (i >= qs.length) return summary(s, right, qs.length, start, 'tr-sent-' + lang);
        const q = qs[i], res = h('div', { class: 'result' }), acts = h('div', { class: 'col-btns' });
        const inp = h('textarea', { class: 'write-in tr-in', rows: 3, placeholder: 'Перевод на ' + (lang === 'en' ? 'английский' : 'немецкий'), autocapitalize: 'sentences', autocomplete: 'off', spellcheck: 'false' });
        let done = false, hinted = false;
        const next = () => { i++; ask(); };
        const grade = ok => { if (ok) right++; noteMistake(q.key, ok); W.save(); W.put(acts, h('button', { class: 'btn primary wide', onclick: next }, 'Дальше')); };
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
        W.put(s.body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, 'Переведите на ' + (lang === 'en' ? 'английский' : 'немецкий')), h('div', { class: 'q tr-ru' }, q.ru), hintBox),
          inp, h('div', { class: 'w-actions' }, h('button', { class: 'btn primary wide', onclick: check }, 'Проверить')), res, acts,
          h('div', { class: 'col-btns' }, hintBtn, h('button', { class: 'btn ghost', onclick: () => { if (!done) noteMistake(q.key, false); W.save(); next(); } }, 'Пропустить')));
        inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); check(); } });
        setTimeout(() => inp.focus(), 60);
      };
      ask();
    };
    start();
  });
}

// ---------- режим 2: собрать из слов ----------
function openTiles(lang, lv) {
  W.push(el => {
    const s = shell(el, 'Собрать из слов · ' + lv);
    const start = () => {
      const all = pool(lang, lv).filter(x => x.n >= 3 && x.n <= 10);
      const qs = pick(all, 10);
      if (!qs.length) return W.put(s.body, h('p', { class: 'muted empty' }, 'Для этого уровня пока нет предложений.'));
      let i = 0, right = 0;
      const ask = () => {
        s.progress(i, qs.length);
        if (i >= qs.length) return summary(s, right, qs.length, start, 'tr-tiles-' + lang);
        const q = qs[i];
        // плашки: слова предложения без знаков препинания + два лишних слова из других предложений
        const clean = w => w.replace(/^[^\wÄÖÜäöüß']+|[^\wÄÖÜäöüß']+$/g, '');
        const own = q.en.split(/\s+/).map(clean).filter(Boolean);
        // заглавная буква подсказала бы первое слово — в английском её убираем (кроме I); в немецком существительные с заглавной, их не трогаем
        if (lang === 'en' && own[0] && own[0] !== 'I' && !/^I'/.test(own[0])) own[0] = own[0][0].toLowerCase() + own[0].slice(1);
        const ownSet = new Set(own.map(w => w.toLowerCase()));
        const extra = [];
        // лишние слова — из середины других предложений и без заглавных, чтобы не выделялись
        for (const o of W.shuffle(all)) { for (const w of o.en.split(/\s+/).slice(1).map(clean)) if (w && w === w.toLowerCase() && !ownSet.has(w) && !extra.includes(w) && extra.length < 2) extra.push(w); if (extra.length >= 2) break; }
        const tiles = W.shuffle([...own, ...extra]).map((w, k) => ({ w, k }));
        const chosen = [];
        const line = h('div', { class: 'tr-tiles tr-line' }), bankEl = h('div', { class: 'tr-tiles' }), res = h('div', { class: 'result' }), acts = h('div', { class: 'col-btns' });
        let done = false;
        const draw = () => {
          W.put(line, chosen.length ? chosen.map(t => h('button', { class: 'tr-tile on', onclick: () => { if (done) return; chosen.splice(chosen.indexOf(t), 1); draw(); } }, t.w)) : h('span', { class: 'muted small' }, 'Нажимайте на слова по порядку'));
          W.put(bankEl, tiles.map(t => h('button', { class: 'tr-tile', disabled: chosen.includes(t) || done, onclick: () => { chosen.push(t); draw(); } }, t.w)));
        };
        const next = () => { i++; ask(); };
        const grade = ok => { if (ok) right++; noteMistake(q.key, ok); W.save(); W.put(acts, h('button', { class: 'btn primary wide', onclick: next }, 'Дальше')); };
        const check = () => {
          if (done || !chosen.length) return;
          done = true; draw();
          const said = chosen.map(t => t.w).join(' ');
          const ok = toks(said).join(' ') === toks(q.en).join(' ');
          res.className = 'result ' + (ok ? 'right' : 'wrong');
          W.put(res, h('b', null, ok ? 'Верно!' : 'Не совсем'), h('div', { class: 'tr-ref' }, q.en), W.soundBtn(q.en, lang));
          if (ok) grade(true);
          else W.put(acts, h('div', { class: 'row-btns' }, h('button', { class: 'btn', onclick: () => { grade(false); next(); } }, 'Дальше'), h('button', { class: 'btn ghost', onclick: () => grade(true) }, 'Мой порядок тоже верный')));
        };
        draw();
        W.put(s.body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, 'Соберите перевод'), h('div', { class: 'q tr-ru' }, q.ru)),
          line, bankEl, h('div', { class: 'w-actions' }, h('button', { class: 'btn primary wide', onclick: check }, 'Проверить')), res, acts,
          h('div', { class: 'col-btns' }, h('button', { class: 'btn ghost', onclick: () => { chosen.length = 0; draw(); } }, 'Сбросить')));
      };
      ask();
    };
    start();
  });
}

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
  const mist = mistakes(lang);
  const card = (emoji, title, sub, fn) => h('button', { class: 'lesson', onclick: fn },
    h('span', { class: 'l-num', 'aria-hidden': 'true' }, emoji), h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, title), h('span', { class: 'muted small' }, sub)));
  W.put(root,
    h('header', { class: 'head' }, W.practiceSwitch('trans'), h('h1', null, 'Перевод'), W.langSwitch()),
    h('p', { class: 'muted' }, 'Переводите с русского: предложения, сборка из слов и короткие тексты на тему.'),
    levels.length ? h('div', { class: 'chips' }, levels.map(l => h('button', { class: 'chip' + (l === L ? ' on' : ''), 'aria-pressed': l === L ? 'true' : 'false', onclick: () => { curLv = l; W.renderTab(); } }, l))) : null,
    !levels.length ? h('p', { class: 'muted empty' }, 'Для этого языка задания пока готовятся.') : h('section', null,
      h('div', { class: 'lvl-head' }, 'Задания · ' + (W.levelInfo[L] || L)),
      card('✍', 'Перевести предложение', '10 предложений · пишете перевод сами', () => openSentences(lang, L)),
      card('▦', 'Собрать из слов', '10 предложений · складываете из плашек', () => openTiles(lang, L)),
      mist.length ? card('!', 'Ошибки перевода', mist.length + ' к повторению', () => openSentences(lang, L, () => mistakes(lang))) : null),
    topics.length ? h('section', null,
      h('div', { class: 'lvl-head' }, 'Топики · ' + L),
      ...topics.map(t => { const d = (W.S.topics || {})[t.id]; return card(d && d.done ? '✓' : '¶', t.title, d && d.done ? 'написано · можно переписать' : d && d.text ? 'черновик сохранён' : t.len + ' · ' + t.plan.length + ' пункта плана', () => openTopic(t, lang)); })) : null);
};
})();
