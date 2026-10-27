'use strict';
// «Чтение»: тексты по уровням, перевод слова касанием, перевод предложений, озвучка, вопросы
(function () {
const W = window.W, h = W.h;
const TEXTS = () => window.TEXTS || {};
W.READ_PASS = 70; // текст считается прочитанным, если на вопросы ответили не меньше чем на 70%
W.textRead = id => { const r = (W.S.read || {})[id]; return !!r && r.best >= W.READ_PASS; };
// «Новое»: текст добавлен недавно (поле nw — дата выпуска) и ещё не открывался
W.NEW_DAYS = 45;
W.textNew = t => !!t.nw && !(W.S.read || {})[t.id] && !(W.S.seen || {})['t:' + t.id] && Date.now() - Date.parse(t.nw) < W.NEW_DAYS * 864e5;
// тексты лежат в нескольких файлах — показываем по уровням, внутри уровня в порядке выпуска
const LV = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
W.textsSorted = lang => ((TEXTS()[lang] || []).map((t, i) => [t, i])).sort((a, b) => LV.indexOf(a[0].level) - LV.indexOf(b[0].level) || a[1] - b[1]).map(x => x[0]);

// ---------- поиск слова в словаре с учётом форм ----------
const dict = {};
const key = v => v.toLowerCase().replace(/[’‘]/g, "'").replace(/[!?.,]/g, '').trim();
const buildDict = lang => {
  if (dict[lang]) return dict[lang];
  const words = new Map(), forms = new Map(), phrases = [];
  const cards = W.allCards(lang);
  // сначала сами слова карточек, потом их «другие верные ответы» — чтобы fall (осень) не перебивал fall (падать)
  for (const c of cards) { const k = key(c.w); if (k && !words.has(k)) words.set(k, c); }
  for (const c of cards) for (const v of (c.a ? c.a.split('|') : [])) { const k = key(v); if (k && !words.has(k)) words.set(k, c); }
  for (const [k, c] of words) if (k.includes(' ')) phrases.push({ parts: k.split(' '), c });
  for (const c of cards) {
    // формы из заметок: «Go — went — gone.», «Множественное число: children.»
    const n = c.n || '';
    for (const m of n.matchAll(/([A-Za-z]+) — ([a-z]+)(?:\/([a-z]+))?(?: — ([a-z]+)(?:\/([a-z]+))?)?/g))
      for (const f of m.slice(2)) if (f && !forms.has(f)) forms.set(f, c);
    const pl = n.match(/Множественное число: ([a-z]+)/);
    if (pl && !forms.has(pl[1])) forms.set(pl[1], c);
  }
  const inPh = new Set(phrases.flatMap(p => p.parts));
  return (dict[lang] = { words, forms, phrases, inPh });
};
// варианты основы: worked → work, studies → study, running → run, bigger → big; основы короче 3 букв не берём (best ≠ be)
const stems = w => {
  const out = [];
  const add = x => { if (x && x.length >= 3 && x !== w && !out.includes(x)) out.push(x); };
  if (w.endsWith("'s")) add(w.slice(0, -2));
  if (w.endsWith('ies')) add(w.slice(0, -3) + 'y');
  // после -s/-es основа может быть короткой: goes → go, does → do
  const add2 = x => { if (x && x.length >= 2 && x !== w && !out.includes(x)) out.push(x); };
  if (w.endsWith('es')) add2(w.slice(0, -2));
  if (w.endsWith('s') && !w.endsWith('ss')) add2(w.slice(0, -1));
  if (w.endsWith('ied')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('ed')) { add(w.slice(0, -2)); add(w.slice(0, -1)); if (/(.)\1ed$/.test(w)) add(w.slice(0, -3)); }
  if (w.endsWith('ing')) { add(w.slice(0, -3)); add(w.slice(0, -3) + 'e'); if (/(.)\1ing$/.test(w)) add(w.slice(0, -4)); }
  if (w.endsWith('ier')) add(w.slice(0, -3) + 'y');
  if (w.endsWith('iest')) add(w.slice(0, -4) + 'y');
  if (w.endsWith('er')) { add(w.slice(0, -2)); add(w.slice(0, -1)); if (/(.)\1er$/.test(w)) add(w.slice(0, -3)); }
  if (w.endsWith('est')) { add(w.slice(0, -3)); add(w.slice(0, -2)); if (/(.)\1est$/.test(w)) add(w.slice(0, -4)); }
  if (w.endsWith('ly')) add(w.slice(0, -2));
  return out;
};
// служебные и самые частые слова, которых нет среди карточек
const COMMON = { en: {
  a: 'неопределённый артикль («один, какой-то»)', an: 'неопределённый артикль (перед гласным звуком)', the: 'определённый артикль («этот, тот самый»)',
  is: 'есть, является (be: he/she/it is)', am: 'есть (be: I am)', are: 'есть (be: you/we/they are)', was: 'был, была (be)', were: 'были (be)', been: 'был (be, 3-я форма)', being: 'будучи (be)',
  has: 'имеет, есть (have: he/she/it has)', had: 'имел; had + 3-я форма — давнее прошедшее', does: 'делает; вспомогательный глагол (he/she/it)', did: 'сделал; вспомогательный глагол прошедшего',
  "don't": 'не (= do not)', "doesn't": 'не (= does not)', "didn't": 'не (= did not)', "isn't": 'не является (= is not)', "aren't": 'не (= are not)', "wasn't": 'не был (= was not)', "weren't": 'не были (= were not)',
  "haven't": 'не (= have not)', "hasn't": 'не (= has not)', "won't": 'не будет (= will not)', "can't": 'не может (= cannot)', cannot: 'не может', "couldn't": 'не мог (= could not)',
  "it's": 'это (= it is)', "i'm": 'я (= I am)', "you're": 'ты, вы (= you are)', "he's": 'он (= he is / he has)', "she's": 'она (= she is / she has)', "we're": 'мы (= we are)', "they're": 'они (= they are)',
  "there's": 'есть, имеется (= there is)', "what's": 'что (= what is)', "i'll": 'я (+ будущее, = I will)', "i've": 'я (= I have)', "let's": 'давай(те)', "that's": 'это (= that is)',
  can: 'мочь, уметь', could: 'мог, могла; мог бы', will: 'вспомогательный глагол будущего времени', would: 'бы; would like — хотел бы', should: 'следует, стоит', must: 'должен', may: 'может, можно',
  not: 'не', this: 'этот, это', that: 'тот, это; что, который', these: 'эти', those: 'те', there: 'там; there is — есть', up: 'вверх', down: 'вниз', out: 'наружу, вне', off: 'прочь, с (чего-то)', over: 'над; через; закончился',
  into: 'в (внутрь)', away: 'прочь', by: 'на (транспорте); у, около; к (сроку)', next: 'следующий', last: 'последний; прошлый', later: 'позже', soon: 'скоро', ago: 'тому назад', more: 'больше, ещё', less: 'меньше',
  few: 'мало (a few — несколько)', little: 'маленький; немного (a little)', lot: 'a lot (of) — много', thing: 'вещь', things: 'вещи', name: 'имя, название', story: 'история, рассказ', phone: 'телефон',
  problem: 'проблема', problems: 'проблемы', clothes: 'одежда', hi: 'привет', hey: 'эй, привет', thank: 'благодарить (thank you — спасибо)', excuse: 'извинять (excuse me — извините)', end: 'конец',
  top: 'верх, вершина', rest: 'отдых; остаток', moment: 'момент', piece: 'кусок, часть', sound: 'звучать; звук', simple: 'простой', social: 'социальный', media: 'медиа, СМИ', move: 'двигать(ся)',
  bright: 'яркий', large: 'большой', dead: 'мёртвый', nobody: 'никто', swallow: 'ласточка; глотать', front: 'передняя часть (in front of — перед)', forty: 'сорок', eighty: 'восемьдесят', grow: 'расти',
  grew: 'вырос, стал (grow — grew — grown)', london: 'Лондон', anna: 'Анна', tom: 'Том', 'café': 'кафе', best: 'лучший; лучше всего', news: 'новость, новости', used: 'использовал; used to — раньше (делал)',
  nothing: 'ничего, ничто', something: 'что-то, что-нибудь', anything: 'что-нибудь; ничего (в отрицании)', everything: 'всё', everyone: 'все, каждый', everybody: 'все, каждый', everywhere: 'везде',
  someone: 'кто-то', anyone: 'кто-нибудь; никто (в отрицании)', himself: 'себя, сам (о нём)', herself: 'себя, сама (о ней)', myself: 'себя, сам', themselves: 'себя, сами (о них)',
  most: 'больше всего; большинство (most people)', each: 'каждый', better: 'лучше', born: 'рождённый (be born — родиться)', life: 'жизнь', idea: 'идея, мысль', going: 'идущий; be going to — собираться',
  become: 'становиться (become — became — become)', became: 'стал (become)', seem: 'казаться', seemed: 'казался', dad: 'папа', mum: 'мама', result: 'результат', results: 'результаты',
  "you'll": 'ты, вы (+ будущее, = you will)', "we'll": 'мы (+ будущее, = we will)', "he'll": 'он (+ будущее, = he will)', "she'll": 'она (+ будущее, = she will)', "they'll": 'они (+ будущее, = they will)', "it'll": 'это (+ будущее, = it will)',
  "i'd": 'я бы; я (= I would / I had)', "you'd": 'ты бы (= you would / you had)', "he'd": 'он бы (= he would / he had)', "she'd": 'она бы (= she would / she had)', "we'd": 'мы бы (= we would / we had)', "they'd": 'они бы (= they would / they had)',
  yourself: 'себя, сам (о тебе)', itself: 'себя, само', own: 'собственный; свой', whenever: 'всякий раз, когда', till: 'до, пока не', past: 'мимо; прошлое', late: 'поздно; поздний', great: 'великий; огромный; отличный',
  lady: 'дама, леди', king: 'король', police: 'полиция', officers: 'офицеры; полицейские', officer: 'офицер; полицейский', voice: 'голос', mind: 'ум; возражать (do you mind)', power: 'сила, власть',
  decision: 'решение', part: 'часть', parts: 'части', place: 'место', brain: 'мозг', instead: 'вместо этого', form: 'форма; образовать', process: 'процесс', system: 'система', letters: 'письма; буквы',
  recommend: 'рекомендовать', actions: 'действия', action: 'действие', downstairs: 'внизу, вниз (по лестнице)', upstairs: 'наверху, наверх', fifteen: 'пятнадцать', eighth: 'восьмой', perfectly: 'совершенно, идеально', happily: 'счастливо, радостно',
  care: 'забота, внимание; заботиться', newspaper: 'газета', list: 'список', unable: 'неспособный (unable to — не в силах)', accept: 'принять', sudden: 'внезапный', alive: 'живой', air: 'воздух',
  somewhere: 'где-то, куда-то', recognise: 'узнавать', lips: 'губы', let: 'позволять, пускать (let me — дай мне)', victory: 'победа', entered: 'вошёл (enter — входить)', accident: 'несчастный случай, авария', joy: 'радость',
  kills: 'убивает (kill — убивать)', soldier: 'солдат', soldiers: 'солдаты', well: 'хорошо; ну; колодец', earlier: 'раньше, ранее', might: 'мог бы, может быть', stepped: 'шагнул (step — шагать)', aside: 'в сторону',
  pain: 'боль', onto: 'на (с движением)', leaf: 'лист (дерева)', drop: 'капля; ронять', tongue: 'язык (орган)', silence: 'тишина, молчание', gently: 'мягко, нежно', side: 'сторона, бок',
  modern: 'современный', society: 'общество', beyond: 'за пределами, сверх', certain: 'определённый; уверенный', researchers: 'исследователи', option: 'вариант', whether: 'ли (I wonder whether — интересно, ли)',
  alternative: 'альтернатива', types: 'типы', examine: 'изучать, осматривать', depend: 'зависеть', remains: 'остаётся (remain — оставаться)', rather: 'скорее; довольно (rather than — вместо того чтобы)', perfect: 'идеальный',
  suffered: 'страдал (suffer from — страдать от)', makers: 'создатели, те, кто делает',
  worse: 'хуже (bad — worse — worst)', worst: 'худший (bad — worse — worst)', else: 'ещё; другой (nobody else — никто другой)', way: 'путь, дорога; способ', dear: 'дорогой (в обращении)', sir: 'сэр, господин', fun: 'веселье; весёлый (for fun — ради забавы)',
  business: 'бизнес, дело', businesses: 'предприятия, компании', several: 'несколько', plenty: 'множество (plenty of — полно, много)', none: 'ни один, никто', anybody: 'кто-нибудь; никто (в отрицании)', "we've": 'мы (= we have)', "they've": 'они (= they have)', "you've": 'ты, вы (= you have)',
  completely: 'полностью, совершенно', complete: 'полный, законченный; завершить', useful: 'полезный', useless: 'бесполезный', lucky: 'везучий, удачливый', millions: 'миллионы', million: 'миллион', gentleman: 'джентльмен, господин', whom: 'кого, кому (книжн.)', halfway: 'на полпути',
  doing: 'делающий (do — делать)', able: 'способный (be able to — мочь)', age: 'возраст', country: 'страна; сельская местность', group: 'группа', such: 'такой', either: 'любой из двух; тоже (в отрицании)', added: 'добавил (add)', speech: 'речь', workers: 'работники', worker: 'работник',
  world: 'мир, свет', history: 'история (наука, прошлое)', health: 'здоровье', danger: 'опасность', within: 'в пределах, в течение, внутри', though: 'хотя', upon: 'на; по (книжн. = on)', figure: 'фигура; цифра', stone: 'камень', stones: 'камни',
  silent: 'безмолвный, молчаливый', kill: 'убить', killed: 'убил; убит (kill)', "wouldn't": 'не (= would not)', "shouldn't": 'не следует (= should not)', beside: 'рядом с', disappear: 'исчезать', disappeared: 'исчез (disappear)', human: 'человек; человеческий', terribly: 'ужасно',
  middle: 'середина (in the middle of — посреди)', reached: 'достиг, дошёл (reach)', mad: 'сумасшедший; злой', enter: 'входить', entrance: 'вход', precious: 'драгоценный', weak: 'слабый', strict: 'строгий', escape: 'сбежать; побег', asleep: 'спящий (fall asleep — уснуть)', soul: 'душа', insult: 'оскорбление; оскорбить',
  according: 'согласно (according to — по словам, согласно)', further: 'дальше, далее; дополнительный', provide: 'обеспечивать, предоставлять', information: 'информация, сведения', general: 'общий (in general — в целом)', attention: 'внимание', difference: 'разница', differences: 'различия',
  remain: 'оставаться', active: 'активный', fill: 'заполнять', filled: 'заполненный (fill)', surprise: 'удивление; удивлять', somebody: 'кто-то', interest: 'интерес; интересовать', neither: 'ни один из двух; тоже не (neither do I — я тоже нет)', add: 'добавлять', adding: 'добавляя (add)',
  easily: 'легко', control: 'контроль; управлять', conversations: 'разговоры', conversation: 'разговор',
  so: 'так; поэтому', very: 'очень', just: 'только что; просто', yes: 'да', no: 'нет', oh: 'о!', one: 'один; одна', ok: 'ладно, хорошо', mr: 'мистер', mrs: 'миссис', dr: 'доктор'
}};
const ART = new Set(['a', 'an', 'the']);
const tokWord = t => t.toLowerCase().replace(/[’‘]/g, "'").replace(/^'+|'+$/g, '');
// порядок: словарь текста → служебные слова и сокращения → фраза, в которой стоит именно это слово → карточка и её формы → основы → служебные по основе
W.lookup = (raw, lang, text, sentence, idx) => {
  const w = tokWord(raw);
  if (!w) return null;
  const gl = (text && text.gl) || {}, cm = COMMON[lang] || {};
  const D = buildDict(lang);
  if (gl[w]) return { w, t: gl[w], from: 'gl' };
  // короткое служебное слово: сначала проверяем фразу (by the way), но артикли фраз не запускают (a little mouse ≠ «немного»)
  const short = cm[w] && (w.length <= 3 || w.includes("'"));
  if (short && (!D.inPh.has(w) || ART.has(w))) return { w, t: cm[w], from: 'common' };
  if (sentence) {
    const toks = sentence.split(/\s+/).map(x => tokWord(x.replace(/^[^A-Za-zÀ-ÿ']+|[^A-Za-zÀ-ÿ']+$/g, ''))).filter(Boolean);
    const at = idx != null ? idx : toks.indexOf(w);
    let best = null;
    for (const p of D.phrases) for (let s = Math.max(0, at - p.parts.length + 1); s <= at; s++) {
      if (p.parts.every((x, k) => toks[s + k] === x) && (!best || p.parts.length > best.parts.length)) best = p;
    }
    if (best) return { w: best.c.w, t: best.c.t, card: best.c, phrase: true };
  }
  if (short) return { w, t: cm[w], from: 'common' }; // фраза не нашлась — служебное значение, а не карточка (may ≠ «май»)
  if (D.words.has(w)) return { w: D.words.get(w).w, t: D.words.get(w).t, card: D.words.get(w) };
  if (D.forms.has(w)) return { w: D.forms.get(w).w, t: D.forms.get(w).t, card: D.forms.get(w), form: w };
  if (cm[w]) return { w, t: cm[w], from: 'common' };
  for (const s of stems(w)) {
    if (gl[s]) return { w: s, t: gl[s], from: 'gl' };
    if (D.words.has(s)) return { w: D.words.get(s).w, t: D.words.get(s).t, card: D.words.get(s), form: w };
    if (D.forms.has(s)) return { w: D.forms.get(s).w, t: D.forms.get(s).t, card: D.forms.get(s), form: w };
    if (cm[s]) return { w: s, t: cm[s], from: 'common' };
  }
  // слово через дефис: пробуем части
  if (w.includes('-')) { const parts = w.split('-').map(p => W.lookup(p, lang, text)).filter(Boolean); if (parts.length) return { w, t: parts.map(p => p.t.split(/[;,]/)[0]).join(' + '), from: 'parts' }; }
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
  const lang = W.S.lang, list = W.textsSorted(lang);
  const read = W.S.read || {};
  const kids = [], nNew = list.filter(W.textNew).length;
  let last = null;
  list.forEach((t, i) => {
    if (t.level !== last) { last = t.level; const inL = list.filter(x => x.level === t.level);
      kids.push(h('div', { class: 'lvl-head' }, W.levelInfo[t.level], h('span', { class: 'muted' }, ' · прочитано ' + inL.filter(x => W.textRead(x.id)).length + ' из ' + inL.length))); }
    const r = read[t.id], n = words(t), ok = W.textRead(t.id);
    kids.push(h('button', { class: 'lesson', onclick: () => openText(t) },
      h('span', { class: 'l-num' + (ok ? ' done' : '') }, ok ? '✓' : i + 1),
      h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, t.title, W.textNew(t) ? h('span', { class: 'tag-next' }, 'новое') : null),
        h('span', { class: 'muted small' }, t.src + ' · ' + n + ' слов · ~' + Math.max(1, Math.round(n / 90)) + ' мин' + (r ? ' · вопросы ' + r.best + '%' : '')))));
  });
  W.put(root,
    h('header', { class: 'head' }, h('div', { class: 'kicker' }, 'тексты по уровням'), h('h1', null, 'Чтение'), W.langSwitch()),
    nNew ? h('p', { class: 'small' }, h('b', null, 'Новые тексты: ' + nNew), ' — отмечены «новое».') : null,
    h('p', { class: 'muted' }, 'Нажмите на любое слово — появится перевод. Неизвестные слова можно сразу добавить в свою колоду. Текст засчитывается, когда на вопросы отвечено хотя бы на 70%.'),
    list.length ? h('div', { class: 'lessons' }, kids) : h('p', { class: 'muted empty' }, 'Тексты для этого языка готовятся.'));
};

// ---------- экран текста ----------
const WORD = /^[A-Za-zÀ-ÿ']+(?:-[A-Za-zÀ-ÿ']+)*$/;
const tokenize = s => s.split(/(\s+)/).flatMap(part => /\s/.test(part) ? [part] : part.split(/(^[^A-Za-zÀ-ÿ']+|[^A-Za-zÀ-ÿ']+$)/).filter(Boolean));
let playing = null;

function openText(t) {
  const lang = W.S.lang;
  if (W.textNew(t)) { W.markSeen('t:' + t.id); W.save(); }
  W.resetDict(); // словарь мог измениться: свои колоды, вход в аккаунт, «скрыть грубые»
  // докачиваем звук предложений, чтобы текст звучал и без интернета
  if (W.prefetchUrls && lang === 'en') setTimeout(() => W.prefetchUrls(t.p.flat().map(s => W.audioUrl(s[0], lang))), 800);
  W.push(el => {
    let showTr = false;
    const sentences = t.p.flat();
    const body = h('article', { class: 'reader' });
    const renderBody = () => {
      let si = 0;
      W.put(body, t.p.map(par => h('div', { class: 'par' },
        h('p', null, par.map(([en, ru]) => {
          let wi = 0;
          return h('span', { class: 'sent', 'data-i': si++ }, tokenize(en).map(tok => {
            if (!WORD.test(tok)) return tok;
            const my = wi++;
            return h('span', { class: 'w', onclick: e => { e.stopPropagation(); tapWord(tok, en, ru, my); } }, tok);
          }), ' ');
        })),
        showTr ? h('p', { class: 'par-tr' }, par.map(s => s[1]).join(' ')) : null)));
    };
    const tapWord = (tok, en, ru, idx) => {
      const hit = W.lookup(tok, lang, t, en, idx);
      W.modal(tok, h('div', null,
        hit ? h('div', { class: 'gloss' },
          h('div', { class: 'gloss-w' }, h('b', null, hit.w), W.soundBtn(hit.w, lang), hit.form && hit.form !== hit.w.toLowerCase() ? h('span', { class: 'muted small' }, ' (форма: ' + hit.form + ')') : null),
          h('div', { class: 'gloss-t' }, hit.t),
          hit.card && hit.card.n ? h('div', { class: 'note' }, hit.card.n) : null)
          : h('p', { class: 'muted' }, 'Этого слова нет в словаре приложения. Перевод — в предложении ниже.'),
        h('div', { class: 'gloss-s' }, h('div', { class: 'kicker' }, 'предложение'), h('p', null, en, W.soundBtn(en, lang)), h('p', { class: 'muted' }, ru))),
        hit ? [{ label: 'В мою колоду', cls: 'primary', fn: () => addWord(hit, en, ru, lang) }] : []);
    };
    const stop = () => { if (playing) { playing.stop = true; playing = null; } W.stopSpeak(); W.put(playBtn, 'Слушать текст'); body.querySelectorAll('.sent.now').forEach(x => x.classList.remove('now')); };
    const play = async () => {
      if (playing) return stop();
      const me = playing = { stop: false };
      W.put(playBtn, 'Остановить');
      for (let i = 0; i < sentences.length && !me.stop; i++) {
        const node = body.querySelector('.sent[data-i="' + i + '"]');
        body.querySelectorAll('.sent.now').forEach(x => x.classList.remove('now'));
        if (node) { node.classList.add('now'); node.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
        await W.speakWait(sentences[i][0], lang, true);
      }
      if (playing === me) stop();
    };
    const playBtn = h('button', { class: 'btn', onclick: play }, 'Слушать текст');
    const trBtn = h('button', { class: 'btn', onclick: () => { showTr = !showTr; W.put(trBtn, showTr ? 'Скрыть перевод' : 'Перевод'); renderBody(); } }, 'Перевод');
    renderBody();
    W.put(el, W.topbar(t.title),
      h('div', { class: 'kicker' }, W.levelInfo[t.level] + ' · ' + t.src),
      h('h2', null, t.title),
      h('div', { class: 'row-btns' }, playBtn, trBtn),
      body,
      t.q && t.q.length ? h('button', { class: 'btn primary wide', onclick: () => { stop(); quiz(el, t); } }, 'Вопросы к тексту · ' + t.q.length) : null);
    // чтение вслух останавливаем, только когда ушли с экрана текста (окно слова поверх — не повод)
    const onPop = () => { if (!el.isConnected) { stop(); window.removeEventListener('popstate', onPop); } };
    window.addEventListener('popstate', onPop);
    return () => {};
  });
}

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
      if (W.markDay) W.markDay();
      W.save();
      return W.put(body, h('div', { class: 'summary' }, h('div', { class: 'big' }, right + ' из ' + t.q.length),
        h('p', null, pct >= W.READ_PASS ? 'Текст прочитан! ✓' : 'Чтобы текст засчитался, нужно ответить хотя бы на 70%. Перечитайте и попробуйте ещё раз.'),
        h('div', { class: 'col-btns' },
          pct < W.READ_PASS ? h('button', { class: 'btn', onclick: () => { i = 0; right = 0; ask(); } }, 'Ответить ещё раз') : null,
          h('button', { class: 'btn primary', onclick: W.back }, 'К текстам'))));
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
