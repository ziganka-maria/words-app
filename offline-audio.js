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
  for (const t of (window.TOPICS || {})[lang] || []) t.model.forEach(m => add(m[0]));
  for (const v of W.irregulars(lang)) add(W.irregularPhrase(v));
  return [...set];
};

// убрать из кэша записи, которых больше нет (сменилось имя файла или текст примера)
W.cleanAudioCache = async () => {
  if (!('caches' in window) || location.protocol === 'file:') return;
  try { if (localStorage.getItem('words-audio-clean') === W.VERSION) return; } catch (e) { return; }
  try {
    const keep = new Set(W.allAudioTexts('en').map(t => W.audioFile(t) + '.mp3'));
    const c = await caches.open(AUDIO_CACHE);
    for (const r of await c.keys()) {
      const f = new URL(r.url).pathname.split('/').pop();
      if (r.url.includes('/audio/') && !keep.has(f)) await c.delete(r);
    }
    localStorage.setItem('words-audio-clean', W.VERSION);
  } catch (e) {}
};

let job = null;
// что уже в телефоне: один запрос списка вместо проверки каждой записи (их тысячи)
const path = u => new URL(u, location.href).pathname;
const cachedSet = async () => new Set((await (await caches.open(AUDIO_CACHE)).keys()).map(r => new URL(r.url).pathname));
const countCached = async urls => { const have = await cachedSet(); return urls.filter(u => have.has(path(u))).length; };

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
    const have0 = await cachedSet();
    const todo = urls.filter(u => !have0.has(path(u)));
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
