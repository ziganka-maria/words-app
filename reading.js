'use strict';
// «Чтение»: тексты по уровням, перевод слова касанием, перевод предложений, озвучка, вопросы
(function () {
const W = window.W, h = W.h;
const TEXTS = () => window.TEXTS || {};

// ---------- поиск слова в словаре с учётом форм ----------
const dict = {};
const buildDict = lang => {
  if (dict[lang]) return dict[lang];
  const words = new Map(), forms = new Map();
  for (const c of W.allCards(lang)) {
    for (const v of [c.w].concat(c.a ? c.a.split('|') : [])) {
      const k = v.toLowerCase().replace(/[!?.]/g, '').trim();
      if (k && !words.has(k)) words.set(k, c);
    }
    // формы из заметок: «Go — went — gone.», «Множественное число: children.»
    const n = c.n || '';
    for (const m of n.matchAll(/([A-Za-z]+) — ([a-z]+)(?:\/([a-z]+))?(?: — ([a-z]+)(?:\/([a-z]+))?)?/g))
      for (const f of m.slice(2)) if (f && !forms.has(f)) forms.set(f, c);
    const pl = n.match(/Множественное число: ([a-z]+)/);
    if (pl && !forms.has(pl[1])) forms.set(pl[1], c);
  }
  return (dict[lang] = { words, forms });
};
// варианты основы: worked → work, studies → study, running → run, bigger → big
const stems = w => {
  const out = [w];
  const add = x => { if (x && x.length > 1 && !out.includes(x)) out.push(x); };
  if (w.endsWith("'s")) add(w.slice(0, -2));
  if (w.endsWith('ies')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('es')) add(w.slice(0, -2));
  if (w.endsWith('s')) add(w.slice(0, -1));
  if (w.endsWith('ied')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('ed')) { add(w.slice(0, -2)); add(w.slice(0, -1)); if (/(.)\1ed$/.test(w)) add(w.slice(0, -3)); }
  if (w.endsWith('ing')) { add(w.slice(0, -3)); add(w.slice(0, -3) + 'e'); if (/(.)\1ing$/.test(w)) add(w.slice(0, -4)); }
  if (w.endsWith('er')) { add(w.slice(0, -2)); add(w.slice(0, -1)); if (/(.)\1er$/.test(w)) add(w.slice(0, -3)); }
  if (w.endsWith('est')) { add(w.slice(0, -3)); add(w.slice(0, -2)); if (/(.)\1est$/.test(w)) add(w.slice(0, -4)); }
  if (w.endsWith('ly')) add(w.slice(0, -2));
  if (w.endsWith('ier')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('iest')) add(w.slice(0, -4) + 'y');
  return out;
};
// служебные и самые частые слова, которых нет среди карточек
const COMMON = { en: {
  a: 'неопределённый артикль («один, какой-то»)', an: 'неопределённый артикль (перед гласным звуком)', the: 'определённый артикль («этот, тот самый»)',
  is: 'есть, является (be: he/she/it is)', am: 'есть (be: I am)', are: 'есть (be: you/we/they are)', was: 'был, была (be)', were: 'были (be)', been: 'был (be, 3-я форма)', being: 'будучи (be)',
  has: 'имеет, есть (have: he/she/it has)', had: 'имел; had + 3-я форма — давнее прошедшее', does: 'вспомогательный глагол (he/she/it)', did: 'сделал; вспомогательный глагол прошедшего',
  "don't": 'не (= do not)', "doesn't": 'не (= does not)', "didn't": 'не (= did not)', "isn't": 'не является (= is not)', "aren't": 'не (= are not)', "wasn't": 'не был (= was not)', "weren't": 'не были (= were not)',
  "haven't": 'не (= have not)', "hasn't": 'не (= has not)', "won't": 'не будет (= will not)', "can't": 'не может (= cannot)', cannot: 'не может', "couldn't": 'не мог (= could not)',
  "it's": 'это (= it is)', "i'm": 'я (= I am)', "you're": 'ты, вы (= you are)', "he's": 'он (= he is / he has)', "she's": 'она (= she is / she has)', "we're": 'мы (= we are)', "they're": 'они (= they are)',
  "there's": 'есть, имеется (= there is)', "what's": 'что (= what is)', "i'll": 'я (+ будущее, = I will)', "i've": 'я (= I have)', "let's": 'давай(те)', "that's": 'это (= that is)',
  can: 'мочь, уметь', could: 'мог, могла; мог бы', will: 'вспомогательный глагол будущего времени', would: 'бы; would like — хотел бы', should: 'следует, стоит', must: 'должен', may: 'может, можно',
  not: 'не', this: 'этот, это', that: 'тот, это; что (союз)', these: 'эти', those: 'те', there: 'там; there is — есть', up: 'вверх', down: 'вниз', out: 'наружу, вне', off: 'прочь, с (чего-то)', over: 'над; через; закончился',
  into: 'в (внутрь)', away: 'прочь', by: 'на (транспорте); у, около; к (сроку)', next: 'следующий', last: 'последний; прошлый', later: 'позже', soon: 'скоро', ago: 'тому назад', more: 'больше, ещё', less: 'меньше',
  few: 'мало (a few — несколько)', little: 'маленький; немного (a little)', lot: 'a lot (of) — много', thing: 'вещь', things: 'вещи', name: 'имя, название', story: 'история, рассказ', phone: 'телефон',
  problem: 'проблема', problems: 'проблемы', clothes: 'одежда', hi: 'привет', hey: 'эй, привет', thank: 'благодарить (thank you — спасибо)', excuse: 'извинять (excuse me — извините)', end: 'конец',
  top: 'верх, вершина', rest: 'отдых; остаток', moment: 'момент', piece: 'кусок, часть', sound: 'звучать; звук', simple: 'простой', social: 'социальный', media: 'медиа, СМИ', move: 'двигать(ся)',
  bright: 'яркий', large: 'большой', dead: 'мёртвый', nobody: 'никто', swallow: 'ласточка; глотать', front: 'передняя часть (in front of — перед)', forty: 'сорок', eighty: 'восемьдесят', grow: 'расти',
  grew: 'вырос, стал (grow — grew — grown)', london: 'Лондон', anna: 'Анна', tom: 'Том', 'café': 'кафе',
  so: 'так; поэтому', very: 'очень', just: 'только что; просто', yes: 'да', no: 'нет', oh: 'о!', one: 'один; одна', ok: 'ладно, хорошо', mr: 'мистер', mrs: 'миссис', dr: 'доктор'
}};
// ищем перевод: словарь текста → карточки (и их формы) → фразы из нескольких слов в этом предложении → служебные слова
W.lookup = (raw, lang, text, sentence) => {
  const w = raw.toLowerCase().replace(/[’‘]/g, "'").replace(/^'+|'+$/g, '');
  if (!w) return null;
  const gl = (text && text.gl) || {};
  const D = buildDict(lang);
  const all = stems(w);
  for (const s of all) {
    if (gl[s]) return { w: s, t: gl[s], from: 'gl' };
    if (D.words.has(s)) return { w: D.words.get(s).w, t: D.words.get(s).t, card: D.words.get(s) };
    if (D.forms.has(s)) return { w: D.forms.get(s).w, t: D.forms.get(s).t, card: D.forms.get(s), form: w };
  }
  if (sentence) {
    const low = ' ' + sentence.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-zà-ÿ' ]+/g, ' ').replace(/\s+/g, ' ') + ' ';
    for (const [k, c] of D.words) if (k.includes(' ') && k.split(' ').some(p => all.includes(p)) && low.includes(' ' + k + ' ')) return { w: c.w, t: c.t, card: c, phrase: true };
  }
  const cm = COMMON[lang] || {};
  for (const s of all) if (cm[s]) return { w: s, t: cm[s], from: 'common' };
  return null;
};
W.resetDict = () => { for (const k in dict) delete dict[k]; };

// ---------- колода «Слова из текстов» ----------
const textDeck = lang => {
  let d = W.S.decks.find(x => x.lang === lang && x.fromTexts);
  if (!d) { d = W.newDeck(lang, 'Слова из текстов', 'my'); d.emoji = '📖'; d.fromTexts = true; W.save(); }
  return d;
};
const addWord = (hit, sentence, tr, lang) => {
  const d = textDeck(lang);
  const id = hit.card ? hit.card.id : null;
  if (d.cards.some(c => (id && c.id === id) || c.w.toLowerCase() === hit.w.toLowerCase())) return W.toast('Уже есть в «Слова из текстов»');
  d.cards.push(hit.card ? Object.assign({}, hit.card) : W.newCard(lang, { w: hit.w, t: hit.t, ex: sentence, et: tr || '' }));
  W.touch(d); W.save(); W.resetDict();
  W.toast('Добавлено в «Слова из текстов»');
};

// ---------- список текстов ----------
const words = t => t.p.flat().map(s => s[0]).join(' ').split(/\s+/).length;
W.renderReading = root => {
  const lang = W.S.lang, list = TEXTS()[lang] || [];
  const read = W.S.read || {};
  const kids = [];
  let last = null;
  list.forEach((t, i) => {
    if (t.level !== last) { last = t.level; const inL = list.filter(x => x.level === t.level);
      kids.push(h('div', { class: 'lvl-head' }, W.levelInfo[t.level], h('span', { class: 'muted' }, ' · прочитано ' + inL.filter(x => read[x.id]).length + ' из ' + inL.length))); }
    const r = read[t.id], n = words(t);
    kids.push(h('button', { class: 'lesson', onclick: () => openText(t) },
      h('span', { class: 'l-num' + (r ? ' done' : '') }, r ? '✓' : i + 1),
      h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, t.title),
        h('span', { class: 'muted small' }, t.src + ' · ' + n + ' слов · ~' + Math.max(1, Math.round(n / 90)) + ' мин' + (r ? ' · вопросы ' + r.best + '%' : '')))));
  });
  W.put(root,
    h('header', { class: 'head' }, h('div', { class: 'kicker' }, 'тексты по уровням'), h('h1', null, 'Чтение'), W.langSwitch()),
    h('p', { class: 'muted' }, 'Нажмите на любое слово — появится перевод. Неизвестные слова можно сразу добавить в свою колоду.'),
    list.length ? h('div', { class: 'lessons' }, kids) : h('p', { class: 'muted empty' }, 'Тексты для этого языка готовятся.'));
};

// ---------- экран текста ----------
const tokenize = s => s.split(/(\s+)/).flatMap(part => /\s/.test(part) ? [part] : part.split(/(^[^A-Za-zÀ-ÿ']+|[^A-Za-zÀ-ÿ']+$)/).filter(Boolean));
let playing = null;
const stopPlay = () => { if (playing) { playing.stop = true; playing = null; } if (W.stopSpeak) W.stopSpeak(); };

function openText(t) {
  const lang = W.S.lang;
  W.push(el => {
    let showTr = false;
    const sentences = [];
    const body = h('article', { class: 'reader' });
    const renderBody = () => {
      W.put(body, t.p.map(par => h('div', { class: 'par' },
        h('p', null, par.map(([en, ru]) => {
          const idx = sentences.length; sentences.push([en, ru]);
          return h('span', { class: 'sent', 'data-i': idx }, tokenize(en).map(tok => /^[A-Za-zÀ-ÿ']+$/.test(tok)
            ? h('span', { class: 'w', onclick: e => { e.stopPropagation(); tapWord(tok, en, ru); } }, tok)
            : tok), ' ');
        })),
        showTr ? h('p', { class: 'par-tr' }, par.map(s => s[1]).join(' ')) : null)));
      sentences.length = 0;
      // повторная разметка, чтобы индексы предложений шли по порядку
      let i = 0; body.querySelectorAll('.sent').forEach(s => { s.dataset.i = i++; });
      t.p.flat().forEach(s => sentences.push(s));
    };
    const tapWord = (tok, en, ru) => {
      const hit = W.lookup(tok, lang, t, en);
      W.modal(tok, h('div', null,
        hit ? h('div', { class: 'gloss' },
          h('div', { class: 'gloss-w' }, h('b', null, hit.w), W.soundBtn(hit.w, lang), hit.form && hit.form !== hit.w.toLowerCase() ? h('span', { class: 'muted small' }, ' (форма: ' + hit.form + ')') : null),
          h('div', { class: 'gloss-t' }, hit.t),
          hit.card && hit.card.n ? h('div', { class: 'note' }, hit.card.n) : null)
          : h('p', { class: 'muted' }, 'Этого слова нет в словаре приложения. Перевод — в предложении ниже.'),
        h('div', { class: 'gloss-s' }, h('div', { class: 'kicker' }, 'предложение'), h('p', null, en, W.soundBtn(en, lang)), h('p', { class: 'muted' }, ru))),
        hit ? [{ label: 'В мою колоду', cls: 'primary', fn: () => addWord(hit, en, ru, lang) }] : []);
    };
    const play = async () => {
      if (playing) { stopPlay(); W.put(playBtn, 'Слушать текст'); return; }
      const me = playing = { stop: false };
      W.put(playBtn, 'Остановить');
      for (let i = 0; i < sentences.length && !me.stop; i++) {
        const node = body.querySelector('.sent[data-i="' + i + '"]');
        body.querySelectorAll('.sent.now').forEach(x => x.classList.remove('now'));
        if (node) { node.classList.add('now'); node.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
        await W.speakWait(sentences[i][0], lang);
      }
      body.querySelectorAll('.sent.now').forEach(x => x.classList.remove('now'));
      if (playing === me) { playing = null; W.put(playBtn, 'Слушать текст'); }
    };
    const playBtn = h('button', { class: 'btn', onclick: play }, 'Слушать текст');
    const trBtn = h('button', { class: 'btn', onclick: () => { showTr = !showTr; W.put(trBtn, showTr ? 'Скрыть перевод' : 'Перевод'); renderBody(); } }, 'Перевод');
    renderBody();
    W.put(el, W.topbar(t.title),
      h('div', { class: 'kicker' }, W.levelInfo[t.level] + ' · ' + t.src),
      h('h2', null, t.title),
      h('div', { class: 'row-btns' }, playBtn, trBtn),
      body,
      t.q && t.q.length ? h('button', { class: 'btn primary wide', onclick: () => { stopPlay(); quiz(el, t); } }, 'Вопросы к тексту · ' + t.q.length) : null);
    return () => {};
  });
}
window.addEventListener('popstate', stopPlay);

function quiz(el, t) {
  let i = 0, right = 0;
  const body = h('div', { class: 'study' });
  W.put(el, W.topbar(t.title + ' · вопросы'), body);
  el.scrollTop = 0;
  const ask = () => {
    if (i >= t.q.length) {
      const pct = Math.round(right / t.q.length * 100), prev = (W.S.read || {})[t.id];
      W.S.read = W.S.read || {};
      W.S.read[t.id] = { n: (prev ? prev.n : 0) + 1, best: Math.max(pct, prev ? prev.best : 0), ts: Date.now() };
      W.save();
      return W.put(body, h('div', { class: 'summary' }, h('div', { class: 'big' }, right + ' из ' + t.q.length),
        h('p', null, pct >= 70 ? 'Текст прочитан! ✓' : 'Текст отмечен как прочитанный. Можно перечитать и ответить ещё раз.'),
        h('div', { class: 'col-btns' }, h('button', { class: 'btn primary', onclick: W.back }, 'К текстам'))));
    }
    const q = t.q[i], why = h('div', { class: 'result' });
    const order = W.shuffle(q.o.map((o, k) => k));
    const box = h('div', { class: 'answers' }, order.map(k => h('button', { class: 'btn answer', onclick: e => {
      box.querySelectorAll('button').forEach(b => { b.disabled = true; if (+b.dataset.k === q.a) b.classList.add('right'); });
      if (k !== q.a) e.currentTarget.classList.add('wrong'); else right++;
      why.className = 'result ' + (k === q.a ? 'right' : 'wrong');
      W.put(why, h('b', null, k === q.a ? 'Верно' : 'Не совсем'), q.w ? h('div', null, q.w) : null);
      body.append(h('button', { class: 'btn primary wide', onclick: () => { i++; ask(); } }, 'Дальше'));
    }, 'data-k': k }, q.o[k])));
    W.put(body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, 'Вопрос ' + (i + 1) + ' из ' + t.q.length), h('div', { class: 'q' }, q.q)), box, why);
  };
  ask();
}
})();
