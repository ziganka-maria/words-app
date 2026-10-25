'use strict';
// режимы тренировки: заучивание, карточки, тест, подбор пар, письмо
(function () {
const W = window.W, h = W.h;

const TITLES = { learn: 'Заучивание', cards: 'Карточки', test: 'Тест', match: 'Подбор пар', write: 'Письмо' };
const MODES = { learn, cards: flash, test, match, write };

W.study = (mode, cards, title, opts = {}) => {
  cards = cards.filter(W.vis);
  if (!cards.length) return W.toast('Нет слов для тренировки');
  W.push(el => { MODES[mode](el, cards, title, opts); });
};

const dirOf = () => W.S.set.dir === 'mix' ? (Math.random() < 0.5 ? 'fw' : 'bw') : W.S.set.dir;
const days = n => n === 0 ? 'сейчас' : W.plural(n, 'день', 'дня', 'дней');

function shell(el, mode, title, extra) {
  const bar = h('i'), body = h('div', { class: 'study' }), count = h('span', { class: 'muted small' });
  W.put(el, W.topbar(h('span', null, TITLES[mode], h('span', { class: 'muted small' }, ' · ' + title)), extra || null, 'close'),
    h('div', { class: 'bar' }, bar), count, body);
  el.classList.add('study-screen');
  return { body, progress: (done, total) => { bar.style.width = Math.round(done / total * 100) + '%'; count.textContent = `${done} / ${total}`; } };
}

// лицевая и обратная стороны карточки
function front(c, dir) {
  return dir === 'fw'
    ? h('div', { class: 'face' }, h('div', { class: 'big' }, c.w), W.soundBtn(c.w, c.lang), W.regBadge(c.r))
    : h('div', { class: 'face' }, h('div', { class: 'big ru' }, c.t), W.regBadge(c.r));
}
function backSide(c) {
  return h('div', { class: 'face back' },
    h('div', { class: 'big' }, c.w), W.soundBtn(c.w, c.lang),
    h('div', { class: 'tr' }, c.t),
    c.ex ? h('div', { class: 'ex' }, h('span', null, c.ex), W.soundBtn(c.ex, c.lang), c.et ? h('div', { class: 'muted' }, c.et) : null) : null,
    c.n ? h('div', { class: 'note' }, c.n) : null,
    W.regBadge(c.r));
}

function summary(s, title, lines, actions) {
  W.put(s.body, h('div', { class: 'summary' },
    h('div', { class: 'big' }, title),
    lines.map(l => typeof l === 'string' ? h('p', null, l) : l),
    h('div', { class: 'col-btns' }, actions.filter(Boolean).map(a => h('button', { class: 'btn wide ' + (a.cls || ''), onclick: a.fn }, a.label)))));
}
const doneBtn = { label: 'Готово', cls: 'primary', fn: () => W.back() };

// ---------- заучивание (интервальные повторения) ----------
function learn(el, cards, title, opts) {
  const s = shell(el, 'learn', title);
  const q = opts.queued ? cards.slice() : W.shuffle(cards);
  const total = q.length, seen = new Set();
  let again = 0;
  const next = () => {
    s.progress(seen.size, total);
    if (!q.length) return summary(s, 'Готово! 🎉', [
      `Пройдено: ${W.words(total)}.`, again ? `Пришлось повторить: ${again}.` : 'Без единой ошибки!',
      h('p', { class: 'muted small' }, 'Слова вернутся, когда подойдёт срок повторения — приложение посчитает само.')], [doneBtn]);
    const c = q[0], dir = dirOf();
    const isNew = !W.S.prog[c.id], early = !isNew && !W.isDue(c.id);
    const card = h('div', { class: 'flash', role: 'button', tabindex: '0' }, isNew ? h('span', { class: 'tag-new' }, 'новое') : null, front(c, dir));
    const btns = h('div', { class: 'rate' });
    const reveal = () => {
      W.put(card, backSide(c));
      card.onclick = null; card.classList.add('open');
      W.put(btns, ...[['again', 'Не помню'], ['hard', 'Трудно'], ['good', 'Помню'], ['easy', 'Легко']].map(([r, label]) =>
        h('button', { class: 'btn r-' + r, onclick: () => rate(r) }, h('b', null, label), h('span', { class: 'small' }, early && r !== 'again' ? 'срок тот же' : days(W.preview(c.id, r))))));
    };
    const rate = r => {
      W.grade(c, r);
      q.shift();
      if (r === 'again') { again++; q.splice(Math.min(3, q.length), 0, c); }
      else seen.add(c.id);
      next();
    };
    card.onclick = reveal;
    btns.append(h('button', { class: 'btn primary wide', onclick: reveal }, 'Показать ответ'));
    W.put(s.body, card, btns);
  };
  next();
}

// ---------- карточки ----------
function flash(el, cards, title) {
  let dir = W.S.set.dir === 'bw' ? 'bw' : 'fw';
  const swap = W.iconBtn('swap', 'Сменить сторону', () => { dir = dir === 'fw' ? 'bw' : 'fw'; show(); });
  const s = shell(el, 'cards', title, swap);
  let deck = W.shuffle(cards), i = 0, flipped = false;
  const known = [], learning = [];
  const show = () => {
    s.progress(i, deck.length);
    if (i >= deck.length) return summary(s, 'Круг пройден', [`Знаю: ${known.length} · Ещё учу: ${learning.length}`], [
      learning.length ? { label: `Повторить «ещё учу» (${learning.length})`, cls: 'primary', fn: () => restart(learning.slice()) } : null,
      { label: 'Ещё раз все', fn: () => restart(cards) }, learning.length ? doneBtn : Object.assign({}, doneBtn, { cls: 'primary' })]);
    const c = deck[i];
    const card = h('div', { class: 'flash' + (flipped ? ' flipped' : ''), role: 'button', tabindex: '0' }, flipped ? backSide(c) : front(c, dir));
    card.onclick = () => { flipped = !flipped; show(); };
    W.put(s.body, card, h('p', { class: 'muted small center' }, 'Нажмите на карточку, чтобы перевернуть'),
      h('div', { class: 'rate two' },
        h('button', { class: 'btn r-again', onclick: () => mark(false) }, 'Ещё учу'),
        h('button', { class: 'btn r-good', onclick: () => mark(true) }, 'Знаю')));
  };
  const mark = ok => { const c = deck[i]; W.record(c, ok, true); (ok ? known : learning).push(c); i++; flipped = false; show(); };
  const restart = list => { deck = W.shuffle(list); i = 0; flipped = false; known.length = 0; learning.length = 0; show(); };
  show();
}

// ---------- тест ----------
function options(c, dir, cards) {
  const key = x => dir === 'fw' ? x.t : x.w;
  const right = key(c), used = new Set([right.toLowerCase()]), out = [right];
  const pools = [W.shuffle(cards), W.shuffle(W.allCards(c.lang))];
  for (const pool of pools) for (const x of pool) {
    if (out.length >= 4) break;
    const k = key(x);
    // синонимы в варианты не берём: иначе верных ответов окажется два
    if (x.id === c.id || used.has(k.toLowerCase()) || W.sameMeaning(x, c)) continue;
    used.add(k.toLowerCase()); out.push(k);
  }
  return W.shuffle(out);
}

function test(el, cards, title) {
  const s = shell(el, 'test', title);
  let qs, i, wrong;
  const start = list => { qs = W.shuffle(list).slice(0, 20); i = 0; wrong = []; ask(); };
  const ask = () => {
    s.progress(i, qs.length);
    if (i >= qs.length) {
      const score = qs.length - wrong.length;
      return summary(s, `${score} из ${qs.length}`, [
        score === qs.length ? 'Идеально! 🎯' : 'Ошибки:',
        wrong.length ? h('div', { class: 'list' }, wrong.map(c => W.cardRow(c, { onchange: () => {} }))) : null], [
        wrong.length ? { label: 'Повторить ошибки', cls: 'primary', fn: () => start(wrong.slice()) } : null,
        { label: 'Новый тест', fn: () => start(cards) }, doneBtn]);
    }
    const c = qs[i], dir = dirOf(), right = dir === 'fw' ? c.t : c.w;
    const opts = options(c, dir, cards);
    const box = h('div', { class: 'answers' });
    let answered = false;
    opts.forEach(o => box.append(h('button', { class: 'btn answer', onclick: e => {
      if (answered) return;
      answered = true;
      const ok = o === right;
      W.record(c, ok);
      e.currentTarget.classList.add(ok ? 'right' : 'wrong');
      box.querySelectorAll('button').forEach(b => { if (b.textContent === right) b.classList.add('right'); b.disabled = true; });
      if (ok) setTimeout(() => { i++; ask(); }, 700);
      else {
        wrong.push(c);
        s.body.append(backSide(c), h('button', { class: 'btn primary wide', onclick: () => { i++; ask(); } }, 'Дальше'));
      }
    } }, o)));
    W.put(s.body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, dir === 'fw' ? 'Выберите перевод' : 'Как это сказать?'),
      front(c, dir)), box);
  };
  start(cards);
}

// ---------- подбор пар ----------
function match(el, cards, title) {
  const s = shell(el, 'match', title);
  const all = W.shuffle(cards), rounds = Math.max(1, Math.ceil(all.length / 6));
  let round = 0, timer = null;
  // последний неполный раунд добираем словами с конца, чтобы ни одно слово не выпало
  const partOf = r => all.length <= 6 ? all : r < rounds - 1 ? all.slice(r * 6, r * 6 + 6) : all.slice(-6);
  const play = () => {
    const part = partOf(round);
    const tiles = W.shuffle(part.flatMap(c => [{ c, side: 'w', text: c.w }, { c, side: 't', text: c.t }]));
    let sel = null, left = part.length, miss = 0;
    const t0 = Date.now(), clock = h('div', { class: 'clock' }, '0.0 с');
    clearInterval(timer);
    timer = setInterval(() => { if (!el.isConnected) return clearInterval(timer); clock.textContent = ((Date.now() - t0) / 1000).toFixed(1) + ' с'; }, 100);
    // пара верна и когда у двух разных карточек одинаковый текст
    const pairs = (a, b) => a.side !== b.side && (a.c.id === b.c.id || (a.side === 'w' ? a.c.t === b.text : a.c.w === b.text));
    const grid = h('div', { class: 'tiles' }, tiles.map(t => {
      const b = h('button', { class: 'tile' + (t.side === 'w' ? ' fx' : ''), onclick: () => {
        if (b.classList.contains('gone')) return;
        if (!sel) { sel = { t, b }; b.classList.add('sel'); return; }
        if (sel.b === b) { b.classList.remove('sel'); sel = null; return; }
        if (pairs(sel.t, t)) {
          [sel.b, b].forEach(x => { x.classList.remove('sel'); x.classList.add('gone'); });
          sel = null;
          if (--left === 0) finish();
        } else {
          miss++;
          const a = sel.b; a.classList.remove('sel'); sel = null;
          [a, b].forEach(x => { x.classList.add('bad'); setTimeout(() => x.classList.remove('bad'), 450); });
        }
      } }, t.text);
      return b;
    }));
    const finish = () => {
      clearInterval(timer);
      const sec = ((Date.now() - t0) / 1000).toFixed(1);
      const more = round < rounds - 1;
      s.progress(round + 1, rounds);
      summary(s, `${sec} с`, [miss ? `Промахов: ${miss}` : 'Без промахов! ⚡', rounds > 1 ? h('p', { class: 'muted small' }, `Раунд ${round + 1} из ${rounds}`) : null], [
        more ? { label: 'Следующие слова', cls: 'primary', fn: () => { round++; play(); } } : null,
        { label: 'Ещё раз', cls: more ? '' : 'primary', fn: () => { if (!more) round = 0; play(); } }, doneBtn]);
    };
    s.progress(round, rounds);
    W.put(s.body, h('div', { class: 'muted small center' }, 'Соедините слово и перевод'), clock, grid);
  };
  play();
}

// ---------- письмо ----------
// поле ввода одно на всю тренировку: на iPhone клавиатура не прячется между словами
function write(el, cards, title) {
  const s = shell(el, 'write', title);
  const lang = cards[0].lang;
  const input = h('input', { type: 'text', class: 'write-in', autocapitalize: 'off', autocomplete: 'off', autocorrect: 'off', spellcheck: 'false',
    enterkeyhint: 'done', lang: W.LANGS[lang].tts });
  const prompt = h('div', { class: 'prompt' }), res = h('div', { class: 'result' }), actions = h('div', { class: 'w-actions' });
  const keys = lang === 'de' ? h('div', { class: 'keys' }, ['ä', 'ö', 'ü', 'ß'].map(k => h('button', { type: 'button', class: 'key',
    onpointerdown: e => e.preventDefault(), // не забирать фокус у поля — иначе клавиатура прыгает
    onclick: () => {
      if (input.readOnly) return;
      const p = input.selectionStart ?? input.value.length;
      input.value = input.value.slice(0, p) + k + input.value.slice(input.selectionEnd ?? p);
      input.focus(); input.setSelectionRange(p + 1, p + 1);
    } }, k))) : null;
  let q, total, firstOk, missed, c, hint, done, target, gen = 0, timer = null;
  const form = h('form', { class: 'write', onsubmit: e => {
    e.preventDefault();
    if (done) return next();
    if (!input.value.trim()) return;
    const verdict = W.check(input.value, c), syn = verdict === 'bad' ? W.synonymHit(input.value, c) : null;
    settle(syn ? 'close' : verdict, input.value.trim(), syn);
  } }, prompt, input, keys, actions, res);
  const next = () => { clearTimeout(timer); q.shift(); ask(); };
  const start = list => { q = W.shuffle(list); total = q.length; firstOk = 0; missed = new Set(); W.put(s.body, form); ask(); };
  const ask = () => {
    gen++;
    s.progress(total - q.length, total);
    if (!q.length) return summary(s, `${firstOk} из ${total}`, ['с первой попытки', missed.size ? `Ошибок было: ${missed.size}` : 'Без ошибок! ✍️'], [
      missed.size ? { label: 'Повторить ошибки', cls: 'primary', fn: () => start(cards.filter(x => missed.has(x.id))) } : null,
      { label: 'Ещё раз', fn: () => start(cards) }, doneBtn]);
    c = q[0]; hint = 0; done = false;
    target = W.answers(c)[0].replace(/\([^)]*\)/g, '').trim();
    input.value = ''; input.readOnly = false;
    input.placeholder = lang === 'de' ? 'по-немецки…' : 'по-английски…';
    W.put(prompt, h('div', { class: 'muted small' }, 'Напишите по-' + (lang === 'de' ? 'немецки' : 'английски')),
      h('div', { class: 'big ru' }, W.promptText(c)), W.regBadge(c.r));
    W.put(res);
    res.className = 'result';
    W.put(actions,
      h('button', { type: 'button', class: 'btn ghost', onpointerdown: e => e.preventDefault(), onclick: () => {
        hint = Math.min(target.length, hint + 1);
        input.placeholder = target.slice(0, hint) + target.slice(hint).replace(/\S/g, '·');
      } }, 'Подсказка'),
      h('button', { type: 'button', class: 'btn ghost', onclick: () => settle('bad', '') }, 'Не знаю'),
      h('button', { type: 'submit', class: 'btn primary' }, 'Проверить'));
    if (document.activeElement !== input) input.focus();
  };
  const settle = (verdict, typed, syn) => {
    done = true; input.readOnly = true;
    const ok = verdict !== 'bad';
    if (ok && !missed.has(c.id)) firstOk++;
    if (!ok) { missed.add(c.id); q.push(c); }
    W.record(c, ok);
    res.className = 'result ' + (verdict === 'ok' ? 'right' : verdict === 'close' ? 'close' : 'wrong');
    W.put(res,
      h('b', null, verdict === 'ok' ? 'Верно!' : syn ? 'Засчитано!' : verdict === 'close' ? 'Почти! Засчитано.' : typed ? 'Неверно' : 'Ответ'),
      syn ? h('div', null, '«' + syn.w + '» тоже так переводится. Но здесь загадано другое слово:') : null,
      verdict !== 'ok' ? h('div', null, 'Правильно: ', h('b', null, c.w), W.soundBtn(c.w, lang)) : null,
      typed && verdict === 'bad' ? h('div', { class: 'muted' }, 'Вы написали: ' + typed) : null,
      c.ex ? h('div', { class: 'ex' }, c.ex) : null);
    W.put(actions, h('button', { type: 'submit', class: 'btn primary wide' }, 'Дальше'));
    const mine = gen;
    if (verdict === 'ok') timer = setTimeout(() => { if (el.isConnected && gen === mine && done) next(); }, 900);
  };
  start(cards);
}
})();
