'use strict';
// тренажёры: неправильные глаголы, артикли, диктант, произношение, «Мои ошибки», цель дня
(function () {
const W = window.W, h = W.h;

W.drillDone = (id, kind, pct) => {
  const S = W.S; S.drill = S.drill || {};
  const p = S.drill[id];
  S.drill[id] = { kind, n: (p ? p.n : 0) + 1, best: Math.max(pct, p ? p.best : 0), ts: Date.now() };
  W.save();
};

// ---------- данные для тренажёров ----------
// три формы из заметок карточек: «Go — went — gone.»
W.irregulars = lang => {
  const seen = new Set(), out = [];
  for (const c of W.allCards(lang)) {
    const m = (c.n || '').match(/^([A-Z][a-z]+) — ([a-z]+(?:\/[a-z]+)?) — ([a-z]+(?:\/[a-z]+)?)[ .]/);
    if (!m || seen.has(m[1].toLowerCase())) continue;
    seen.add(m[1].toLowerCase());
    out.push({ base: m[1].toLowerCase(), past: m[2].split('/'), pp: m[3].split('/'), t: c.t, card: c });
  }
  return out;
};
// предложения для диктанта: примеры из колод своего уровня и предложения из текстов (до 12 слов)
const dictationPool = lang => {
  const lv = W.userLevel(lang) === 'A0' ? 'A1' : W.userLevel(lang);
  const fromCards = W.allCards(lang).filter(c => c.ex && (c.lv === lv || c.lv === 'live')).map(c => ({ en: c.ex, ru: c.et }));
  const fromTexts = ((window.TEXTS || {})[lang] || []).filter(t => t.level === lv || (lv === 'A1' && t.level === 'A1'))
    .flatMap(t => t.p.flat()).filter(s => s[0].split(' ').length <= 12 && !/[«»:]/.test(s[0])).map(s => ({ en: s[0], ru: s[1] }));
  return fromCards.concat(fromTexts).filter(x => x.en.split(' ').length >= 3);
};
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

// ---------- список тренажёров (в разделе «Грамматика») ----------
W.drillsBlock = lang => {
  const D = (window.DRILLS || {})[lang] || {}, done = W.S.drill || {};
  const irr = W.irregulars(lang), mist = W.mistakeCount(lang);
  const row = (id, title, sub, fn, ok) => ok ? h('button', { class: 'lesson', onclick: fn },
    h('span', { class: 'l-num' + (done[id] ? ' done' : '') }, done[id] ? '✓' : '§'),
    h('span', { class: 'deck-main' }, h('span', { class: 'deck-title' }, title),
      h('span', { class: 'muted small' }, sub + (done[id] ? ' · лучший результат ' + done[id].best + '%' : '')))) : null;
  return h('section', null,
    h('div', { class: 'lvl-head' }, 'Тренажёры'),
    row('irr-' + lang, 'Неправильные глаголы', irr.length + ' глаголов · напишите две формы', () => openIrregular(lang), irr.length >= 5),
    row('art-' + lang, 'Артикли a, an, the', 'выберите артикль или «без артикля»', () => openArticles(lang), (D.articles || []).length > 0),
    row('dictation-' + lang, 'Диктант на слух', 'послушайте фразу и запишите', () => openDictation(lang), dictationPool(lang).length >= 5),
    row('speak-' + lang, 'Произношение', SR ? 'скажите слово в микрофон' : 'на этом устройстве не работает', () => openSpeak(lang), true),
    row('mist-' + lang, 'Мои ошибки', mist ? mist + ' к повторению' : 'пока пусто — и это прекрасно', () => openMistakes(lang), true));
};

// ---------- общая оболочка ----------
const shell = (el, title) => {
  const bar = h('i'), body = h('div', { class: 'study' }), count = h('span', { class: 'muted small' });
  W.put(el, W.topbar(title, null, 'close'), h('div', { class: 'bar' }, bar), count, body);
  el.classList.add('study-screen');
  return { body, progress: (d, n) => { bar.style.width = Math.round(d / n * 100) + '%'; count.textContent = d + ' / ' + n; } };
};
const finish = (s, id, kind, right, total, again, extra) => {
  const pct = Math.round(right / total * 100);
  W.drillDone(id, kind, pct);
  W.put(s.body, h('div', { class: 'summary' }, h('div', { class: 'big' }, right + ' из ' + total),
    h('p', null, pct === 100 ? 'Без единой ошибки!' : pct >= 70 ? 'Хороший результат.' : 'Стоит повторить ещё раз.'),
    extra || null,
    h('div', { class: 'col-btns' }, h('button', { class: 'btn', onclick: again }, 'Ещё раз'), h('button', { class: 'btn primary', onclick: W.back }, 'Готово'))));
};

// ---------- неправильные глаголы ----------
function openIrregular(lang) {
  W.push(el => {
    const s = shell(el, 'Неправильные глаголы');
    const start = () => {
      const qs = W.shuffle(W.irregulars(lang)).slice(0, 10);
      let i = 0, right = 0;
      const wrong = [];
      const ask = () => {
        s.progress(i, qs.length);
        if (i >= qs.length) return finish(s, 'irr-' + lang, 'irregular', right, qs.length, start,
          wrong.length ? h('div', { class: 'list' }, wrong.map(v => h('div', { class: 'card-row' }, h('div', { class: 'cr-main' },
            h('div', { class: 'cr-word' }, h('b', null, v.base + ' — ' + v.past.join('/') + ' — ' + v.pp.join('/'))), h('div', null, v.t))))) : null);
        const v = qs[i];
        const inp = ph => h('input', { type: 'text', class: 'write-in', placeholder: ph, autocapitalize: 'off', autocomplete: 'off', spellcheck: 'false' });
        const p1 = inp('прошедшее'), p2 = inp('3-я форма'), res = h('div', { class: 'result' });
        let done = false;
        const form = h('form', { class: 'write', onsubmit: e => {
          e.preventDefault();
          if (done) { i++; return ask(); }
          if (!p1.value.trim() || !p2.value.trim()) return;
          const ok1 = v.past.some(x => W.canon(p1.value) === x), ok2 = v.pp.some(x => W.canon(p2.value) === x);
          const ok = ok1 && ok2;
          done = true; p1.readOnly = p2.readOnly = true;
          if (ok) right++; else wrong.push(v);
          if (!ok) W.record(v.card, false, true);
          res.className = 'result ' + (ok ? 'right' : 'wrong');
          W.put(res, h('b', null, ok ? 'Верно' : 'Не совсем'),
            h('div', null, h('b', null, v.base + ' — ' + v.past.join('/') + ' — ' + v.pp.join('/')), W.soundBtn(v.base + ', ' + v.past[0] + ', ' + v.pp[0], lang)));
          W.put(btns, h('button', { type: 'submit', class: 'btn primary wide' }, 'Дальше'));
        } },
          h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, 'Напишите прошедшее время и третью форму'), h('div', { class: 'big' }, v.base), h('div', { class: 'muted' }, v.t)),
          p1, p2, null, res);
        const btns = h('div', { class: 'w-actions' }, h('button', { type: 'submit', class: 'btn primary wide' }, 'Проверить'));
        form.insertBefore(btns, res);
        W.put(s.body, form);
        setTimeout(() => p1.focus(), 60);
      };
      ask();
    };
    start();
  });
}

// ---------- артикли ----------
function openArticles(lang) {
  W.push(el => {
    const s = shell(el, 'Артикли');
    const start = () => {
      const qs = W.shuffle((W.DRILLS_GET(lang).articles || [])).slice(0, 12);
      let i = 0, right = 0;
      const ask = () => {
        s.progress(i, qs.length);
        if (i >= qs.length) return finish(s, 'art-' + lang, 'articles', right, qs.length, start);
        const q = qs[i], res = h('div', { class: 'result' });
        const box = h('div', { class: 'rate' }, ['a', 'an', 'the', '—'].map(o => h('button', { class: 'btn', onclick: e => {
          box.querySelectorAll('button').forEach(b => { b.disabled = true; if (b.textContent === q.a) b.classList.add('r-good'); });
          const ok = o === q.a; if (ok) right++; else e.currentTarget.classList.add('r-again');
          res.className = 'result ' + (ok ? 'right' : 'wrong');
          W.put(res, h('b', null, ok ? 'Верно' : 'Не совсем'), h('div', null, q.w));
          s.body.append(h('button', { class: 'btn primary wide', onclick: () => { i++; ask(); } }, 'Дальше'));
        } }, o)));
        W.put(s.body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, 'Какой артикль нужен? «—» — без артикля'), h('div', { class: 'q' }, q.s)), box, res);
      };
      ask();
    };
    start();
  });
}
W.DRILLS_GET = lang => (window.DRILLS || {})[lang] || {};

// ---------- диктант ----------
// сравнение по словам: какие слова написаны верно
const wordDiff = (typed, target) => {
  const a = W.canon(typed).split(' ').filter(Boolean), b = W.canon(target).split(' ').filter(Boolean);
  const m = b.map(() => false);
  let j = 0;
  for (const w of a) { const k = b.findIndex((x, i) => i >= j && x === w && !m[i]); if (k >= 0) { m[k] = true; j = k + 1; } }
  return { ok: m.filter(Boolean).length, total: b.length, marks: m };
};
function openDictation(lang) {
  W.push(el => {
    const s = shell(el, 'Диктант');
    const start = () => {
      const qs = W.shuffle(dictationPool(lang)).slice(0, 8);
      let i = 0, right = 0;
      const ask = () => {
        s.progress(i, qs.length);
        if (i >= qs.length) return finish(s, 'dictation-' + lang, 'dictation', right, qs.length, start);
        const q = qs[i], res = h('div', { class: 'result' });
        const input = h('textarea', { rows: 2, class: 'write-in', placeholder: 'напишите, что услышали', autocapitalize: 'off', autocomplete: 'off', spellcheck: 'false' });
        let done = false;
        const play = () => W.speak(q.en, lang);
        const form = h('form', { class: 'write', onsubmit: e => {
          e.preventDefault();
          if (done) { i++; return ask(); }
          if (!input.value.trim()) return;
          done = true; input.readOnly = true;
          const d = wordDiff(input.value, q.en), ok = d.ok === d.total;
          if (ok) right++;
          const words = q.en.split(' ');
          res.className = 'result ' + (ok ? 'right' : d.ok / d.total >= 0.7 ? 'close' : 'wrong');
          W.put(res, h('b', null, ok ? 'Верно' : 'Верных слов: ' + d.ok + ' из ' + d.total),
            h('div', { class: 'dict-line' }, words.map((w, k) => h('span', { class: d.marks[k] ? 'ok' : 'miss' }, w + ' '))),
            h('div', { class: 'muted' }, q.ru));
          W.put(acts, h('button', { type: 'submit', class: 'btn primary wide' }, 'Дальше'));
        } },
          h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, 'Нажмите, чтобы послушать. Можно несколько раз'),
            h('button', { type: 'button', class: 'btn primary', onclick: play }, '▶ Слушать')),
          input);
        const acts = h('div', { class: 'w-actions' }, h('button', { type: 'button', class: 'btn ghost', onclick: () => W.speakSlow ? W.speakSlow(q.en, lang) : play() }, 'Ещё раз'), h('button', { type: 'submit', class: 'btn primary' }, 'Проверить'));
        form.append(acts, res);
        W.put(s.body, form);
        setTimeout(play, 300);
      };
      ask();
    };
    start();
  });
}

// ---------- произношение (распознавание речи; нужен интернет в Chrome) ----------
function openSpeak(lang) {
  W.push(el => {
    const s = shell(el, 'Произношение');
    if (!SR) {
      W.put(s.body, h('div', { class: 'summary' }, h('p', null, 'Этот браузер не умеет распознавать речь.'),
        h('p', { class: 'muted' }, 'Попробуйте в Chrome на Android или в Safari на iPhone. Для распознавания нужен интернет.'),
        h('button', { class: 'btn primary', onclick: W.back }, 'Понятно')));
      return;
    }
    const pool = () => {
      const learned = W.allCards(lang).filter(c => W.S.prog[c.id] && c.w.split(' ').length <= 3 && /^[A-Za-zäöüßÄÖÜ' -]+$/.test(c.w));
      const lv = W.userLevel(lang) === 'A0' ? 'A1' : W.userLevel(lang);
      return learned.length >= 6 ? learned : W.allCards(lang).filter(c => c.lv === lv && c.w.split(' ').length <= 2 && /^[A-Za-zäöüßÄÖÜ' -]+$/.test(c.w));
    };
    const start = () => {
      const qs = W.shuffle(pool()).slice(0, 8);
      let i = 0, right = 0;
      const ask = () => {
        s.progress(i, qs.length);
        if (i >= qs.length) return finish(s, 'speak-' + lang, 'speak', right, qs.length, start);
        const c = qs[i], res = h('div', { class: 'result' });
        let tries = 0;
        const mic = h('button', { class: 'btn primary wide', onclick: () => {
          const r = new SR();
          r.lang = W.LANGS[lang].tts; r.interimResults = false; r.maxAlternatives = 5;
          W.put(mic, '… говорите'); mic.disabled = true;
          r.onresult = e => {
            const alts = [...e.results[0]].map(x => x.transcript);
            const hit = alts.find(t => W.check(t, c) !== 'bad');
            tries++;
            res.className = 'result ' + (hit ? 'right' : 'wrong');
            W.put(res, h('b', null, hit ? 'Отлично, понятно!' : 'Не расслышала'), h('div', null, 'Распознано: «' + alts[0] + '»'));
            if (hit || tries >= 2) {
              if (hit) right++;
              W.put(acts, h('button', { class: 'btn primary wide', onclick: () => { i++; ask(); } }, 'Дальше'));
            }
          };
          r.onerror = e => { W.put(res, h('b', null, e.error === 'not-allowed' ? 'Нет доступа к микрофону' : e.error === 'network' ? 'Нужен интернет' : 'Не получилось распознать')); res.className = 'result wrong'; };
          r.onend = () => { mic.disabled = false; W.put(mic, '🎙 Сказать ещё раз'); };
          try { r.start(); } catch (x) { mic.disabled = false; }
        } }, '🎙 Сказать');
        const acts = h('div', { class: 'col-btns' }, h('button', { class: 'btn ghost', onclick: () => { i++; ask(); } }, 'Пропустить'));
        W.put(s.body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, 'Послушайте и повторите'), h('div', { class: 'big' }, c.w), W.soundBtn(c.w, lang), h('div', { class: 'muted' }, c.t)), mic, res, acts);
      };
      ask();
    };
    start();
  });
}

// ---------- «Мои ошибки» ----------
// ошибки в вопросах грамматики хранятся как S.gmist[урок] = [номера вопросов]
W.noteGrammarMistake = (lessonId, qi, ok) => {
  const S = W.S; S.gmist = S.gmist || {};
  const list = new Set(S.gmist[lessonId] || []);
  if (ok) list.delete(qi); else list.add(qi);
  if (list.size) S.gmist[lessonId] = [...list]; else delete S.gmist[lessonId];
};
const grammarMistakes = lang => {
  const out = [];
  for (const l of (window.GRAMMAR || {})[lang] || []) for (const qi of ((W.S.gmist || {})[l.id] || [])) if (l.quiz[qi]) out.push({ l, qi, q: l.quiz[qi] });
  return out;
};
const hardWords = lang => (W.smart(lang).find(d => d.id === 'smart:hard') || { cards: [] }).cards;
W.mistakeCount = lang => grammarMistakes(lang).length + hardWords(lang).length;

function openMistakes(lang) {
  W.push(el => {
    const render = () => {
      const g = grammarMistakes(lang), w = hardWords(lang);
      W.put(el, W.topbar('Мои ошибки'),
        h('p', { class: 'muted' }, 'Здесь собирается всё, на чём вы ошибались. Ответили верно — пункт исчезает.'),
        h('div', { class: 'lvl-head' }, 'Слова', h('span', { class: 'muted' }, ' · ' + w.length)),
        w.length ? h('button', { class: 'btn primary wide', style: 'margin:10px 0', onclick: () => W.study('learn', w, 'Трудные слова', {}) }, 'Повторить трудные слова') : h('p', { class: 'muted empty' }, 'Трудных слов нет.'),
        h('div', { class: 'lvl-head' }, 'Грамматика', h('span', { class: 'muted' }, ' · ' + g.length)),
        g.length ? h('button', { class: 'btn primary wide', style: 'margin:10px 0', onclick: () => grammarRetry(lang) }, 'Повторить вопросы') : h('p', { class: 'muted empty' }, 'Ошибок в уроках нет.'),
        g.length ? h('div', { class: 'list' }, g.map(x => h('div', { class: 'card-row' }, h('div', { class: 'cr-main' }, h('div', null, x.q.q), h('div', { class: 'muted small' }, 'Урок: ' + x.l.title))))) : null);
    };
    render();
    return render;
  });
}
function grammarRetry(lang) {
  W.push(el => {
    const s = shell(el, 'Ошибки в грамматике');
    const qs = grammarMistakes(lang);
    let i = 0, right = 0;
    const ask = () => {
      s.progress(i, qs.length);
      if (i >= qs.length) { W.save(); return W.put(s.body, h('div', { class: 'summary' }, h('div', { class: 'big' }, right + ' из ' + qs.length), h('p', null, right === qs.length ? 'Все ошибки исправлены!' : 'Оставшиеся вопросы ждут вас в «Моих ошибках».'), h('button', { class: 'btn primary', onclick: W.back }, 'Готово'))); }
      const { l, qi, q } = qs[i], res = h('div', { class: 'result' });
      const after = ok => {
        if (ok) right++;
        W.noteGrammarMistake(l.id, qi, ok);
        res.className = 'result ' + (ok ? 'right' : 'wrong');
        W.put(res, h('b', null, ok ? 'Верно' : 'Не совсем'), !ok && q.t ? h('div', null, 'Правильно: ' + q.t[0]) : null, h('div', null, q.w));
        s.body.append(h('button', { class: 'btn primary wide', onclick: () => { i++; ask(); } }, 'Дальше'));
      };
      let ctl;
      if (q.o) ctl = h('div', { class: 'answers' }, q.o.map((o, k) => h('button', { class: 'btn answer', onclick: e => {
        ctl.querySelectorAll('button').forEach((b, j) => { b.disabled = true; if (j === q.a) b.classList.add('right'); });
        if (k !== q.a) e.currentTarget.classList.add('wrong'); after(k === q.a);
      } }, o)));
      else { const input = h('input', { type: 'text', class: 'write-in', autocapitalize: 'off', spellcheck: 'false' });
        ctl = h('form', { class: 'write', onsubmit: e => { e.preventDefault(); if (input.readOnly || !input.value.trim()) return; input.readOnly = true; after(q.t.some(t => W.check(input.value, { w: t }) === 'ok')); } }, input, h('button', { type: 'submit', class: 'btn primary wide' }, 'Проверить')); }
      W.put(s.body, h('div', { class: 'prompt' }, h('div', { class: 'muted small' }, l.title), h('div', { class: 'q' }, q.q)), ctl, res);
    };
    ask();
  });
}

// ---------- цель дня ----------
W.goalLine = () => {
  const goal = W.S.set.goal || 20, done = W.S.days[W.dayKey()] || 0;
  return h('div', { class: 'goal' }, h('span', { class: 'kicker' }, 'цель дня'),
    h('span', { class: 'bar' }, h('i', { style: 'width:' + Math.min(100, Math.round(done / goal * 100)) + '%' })),
    h('span', { class: 'muted small' }, done >= goal ? 'выполнена ✓' : done + ' из ' + goal));
};
})();
