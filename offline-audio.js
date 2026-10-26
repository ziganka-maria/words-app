'use strict';
// «Скачать весь звук»: записи всех слов, примеров, уроков и текстов выбранного голоса — в кэш телефона
(function () {
const W = window.W, h = W.h;
const AUDIO_CACHE = 'words-audio-v1'; // то же имя, что в sw.js

// все фразы языка, для которых есть записи (тот же набор, что озвучивает tools/build-audio.js)
W.allAudioTexts = lang => {
  const set = new Set();
  const add = t => { const s = W.speechText(t); if (s) set.add(s); };
  for (const d of W.allDecks(lang)) for (const c of d.cards) if (d.builtin) { add(c.w); if (c.ex) add(c.ex); }
  for (const l of (window.GRAMMAR || {})[lang] || []) for (const b of l.blocks) if (b.t === 'ex') b.rows.forEach(r => add(r[0]));
  for (const t of (window.TEXTS || {})[lang] || []) t.p.flat().forEach(s => add(s[0]));
  for (const v of W.irregulars(lang)) add(W.irregularPhrase(v));
  return [...set];
};

let job = null;
// сколько уже в телефоне
const countCached = async urls => {
  const c = await caches.open(AUDIO_CACHE);
  let n = 0;
  for (const u of urls) if (await c.match(u)) n++;
  return n;
};

W.audioPanel = () => {
  const lang = 'en';
  const box = h('div', { class: 'audio-dl' });
  if (!('caches' in window) || location.protocol === 'file:') {
    box.append(h('p', { class: 'muted small' }, 'Скачать звук можно в установленном приложении (с сайта).'));
    return box;
  }
  const urls = W.allAudioTexts(lang).map(t => W.audioUrl(t, lang));
  const line = h('p', { class: 'muted small' }, 'Проверяю, что уже скачано…');
  const bar = h('i', { style: 'width:0' });
  const btn = h('button', { class: 'btn wide' }, 'Скачать весь звук');
  const voice = W.S.set.voice === 'gb' ? 'британский' : 'американский';
  const show = (have) => {
    const left = urls.length - have, mb = Math.max(1, Math.round(left * 7.5 / 1024));
    bar.style.width = Math.round(have / urls.length * 100) + '%';
    W.put(line, have >= urls.length ? 'Весь звук (' + voice + ' голос) уже в телефоне ✓' : 'В телефоне ' + have + ' из ' + urls.length + ' записей. Осталось скачать около ' + mb + ' МБ.');
    btn.hidden = have >= urls.length;
  };
  countCached(urls).then(show);
  btn.onclick = async () => {
    if (job) { job.stop = true; return; }
    if (!navigator.onLine) return W.toast('Нужен интернет');
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
    const me = job = { stop: false };
    W.put(btn, 'Остановить');
    const c = await caches.open(AUDIO_CACHE);
    const todo = [];
    for (const u of urls) if (!(await c.match(u))) todo.push(u);
    let have = urls.length - todo.length, i = 0, errors = 0;
    const worker = async () => {
      while (!me.stop && i < todo.length) {
        const u = todo[i++];
        try { const r = await fetch(u); if (r.ok) { await c.put(u, r.clone()); have++; } else errors++; } catch (e) { errors++; }
        if (have % 20 === 0) show(have);
      }
    };
    await Promise.all([worker(), worker(), worker(), worker(), worker(), worker()]);
    job = null;
    W.put(btn, 'Скачать весь звук');
    show(have);
    if (me.stop) W.toast('Остановлено. Продолжить можно в любой момент');
    else if (errors) W.toast('Не скачалось записей: ' + errors + '. Нажмите ещё раз, чтобы докачать');
    else W.toast('Готово: весь звук в телефоне');
  };
  box.append(h('p', { class: 'small' }, 'Нейросетевой голос для всех слов, примеров, уроков и текстов — чтобы всё звучало и без интернета. Скачивается выбранный выше голос.'),
    h('div', { class: 'bar' }, bar), line, btn);
  return box;
};
})();
