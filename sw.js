const CACHE = 'words-v20';
// звук хранится отдельно и не стирается при обновлении приложения
const AUDIO = 'words-audio-v1';
const FILES = ['./', './index.html', './style.css', './core.js', './ui.js', './study.js', './more.js', './sync.js', './config.js', './boot.js',
  './data-lib.js', './data-en.js', './data-en-a1.js', './data-en-a1b.js', './data-en-a1c.js', './data-en-a2.js', './data-en-a2b.js', './data-en-a2c.js', './data-en-b1.js', './data-en-b1b.js', './data-en-b1c.js', './data-en-b1d.js', './data-en-b1e.js', './data-en-irr.js', './data-en-b2.js', './data-en-b2b.js', './data-en-b2c.js', './data-en-b2d.js', './data-en-b2e.js', './data-en-c1.js', './data-en-c1b.js', './data-en-c1c.js', './data-en-c1d.js', './data-en-trade.js', './data-en-trade2.js', './data-en-trade3.js', './data-de.js', './grammar-en.js', './grammar-en2.js', './grammar-en3.js', './grammar-en4.js', './grammar-en5.js', './grammar-en6.js', './grammar-de.js', './test-en.js', './leveltest.js', './rewards.js', './reading.js', './texts-en.js', './texts-en2.js', './texts-en3.js', './texts-en4.js', './texts-en5.js', './texts-en6.js', './texts-en7.js', './texts-en8.js', './texts-en9.js', './texts-en10.js', './texts-en11.js', './texts-en12.js', './texts-en-trade.js', './topics-en.js', './topics-en-trade.js', './drills-en.js', './drills.js', './translate.js', './practice.js', './gtrain.js', './gtask-en-1.js', './gtask-en-2.js', './gtask-en-3.js', './gtask-en-4.js', './bank-en-a1.js', './gdrill-en-a1.js', './bank-en-a2.js', './gdrill-en-a2.js', './bank-en-b1.js', './gdrill-en-b1.js', './bank-en-b2.js', './gdrill-en-b2.js', './bank-en-c1.js', './gdrill-en-c1.js', './offline-audio.js', './fonts.css', './fonts/ibmplexmono-normal-cyrillic.woff2', './fonts/ibmplexmono-normal-latin.woff2', './fonts/lora-italic-cyrillic.woff2', './fonts/lora-italic-latin.woff2', './fonts/lora-normal-cyrillic.woff2', './fonts/lora-normal-latin.woff2', './fonts/playfairdisplay-normal-cyrillic.woff2', './fonts/playfairdisplay-normal-latin.woff2',
  './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  // cache: 'reload' — мимо HTTP-кэша браузера, чтобы не смешать файлы старой и новой версии
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== AUDIO).map(k => caches.delete(k)))));
  self.clients.claim();
});

// сначала сеть (чтобы после обновления сразу видеть новую версию), но не дольше 3 секунд:
// при слабом интернете отдаём из кэша, а свежий ответ всё равно кладём в кэш
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // файлы звука не меняются (имя = отпечаток текста), поэтому сначала кэш
  if (/\/audio\/.+\.mp3$/.test(new URL(e.request.url).pathname)) {
    e.respondWith(caches.open(AUDIO).then(c => c.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok) e.waitUntil(c.put(e.request, res.clone()));
      return res;
    }))));
    return;
  }
  const same = new URL(e.request.url).origin === location.origin;
  const net = fetch(e.request, same ? { cache: 'no-cache' } : undefined).then(res => {
    if (res.ok && same) {
      const copy = res.clone();
      e.waitUntil(caches.open(CACHE).then(c => c.put(e.request, copy)));
    }
    return res;
  });
  const cached = () => caches.match(e.request, { ignoreSearch: true })
    .then(r => r || (e.request.mode === 'navigate' ? caches.match('./index.html') : undefined));
  const slow = new Promise(r => setTimeout(r, 3000)).then(cached);
  e.respondWith(
    Promise.race([net.catch(() => cached()), slow.then(r => r || net)])
      .then(r => r || net)
      .catch(() => cached().then(r => r || Response.error()))
  );
});
