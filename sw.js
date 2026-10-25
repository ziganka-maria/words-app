const CACHE = 'words-v1';
const FILES = ['./', './index.html', './style.css', './core.js', './ui.js', './study.js', './more.js', './boot.js',
  './data-en.js', './data-de.js', './grammar-en.js', './grammar-de.js',
  './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  // cache: 'reload' — мимо HTTP-кэша браузера, чтобы не смешать файлы старой и новой версии
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

// сначала сеть (чтобы после обновления сразу видеть новую версию), но не дольше 3 секунд:
// при слабом интернете отдаём из кэша, а свежий ответ всё равно кладём в кэш
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
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
