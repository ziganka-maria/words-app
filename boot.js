'use strict';
(function () {
const W = window.W;
W.VERSION = '0.5';
W.prepare();
// вошедший пользователь — сразу открываем его данные
if (W.acc) W.acc.boot();
document.documentElement.dataset.lang = W.S.lang;
W.applyTheme();
document.querySelectorAll('nav button').forEach(b => b.prepend(W.icon(b.dataset.icon)));
document.querySelectorAll('nav button').forEach(b => b.addEventListener('click', () => {
  W.closeAll();
  W.showTab(b.dataset.tab);
}));
// после перезагрузки на открытом экране в истории остаются его записи — возвращаемся к началу
const st = history.state;
// приветствие открываем, только когда история уже отмотана, иначе запоздалый popstate закроет его
const rewind = st && (st.s > 0 || st.m);
if (rewind) { addEventListener('popstate', () => W.maybeWelcome(), { once: true }); history.go(-((st.s || 0) + (st.m ? 1 : 0))); }
else history.replaceState({ s: 0 }, '');
W.showTab('home');
if (W.acc) W.acc.start();
if (!rewind) W.maybeWelcome();
// записи звука под старыми именами больше не нужны — освобождаем место (раз на версию)
if (W.cleanAudioCache) setTimeout(W.cleanAudioCache, 8000);
// просим браузер не стирать данные при нехватке места
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
