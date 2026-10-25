'use strict';
(function () {
const W = window.W;
W.VERSION = '0.1';
W.prepare();
document.documentElement.dataset.lang = W.S.lang;
W.applyTheme();
document.querySelectorAll('nav button').forEach(b => b.addEventListener('click', () => {
  W.closeAll();
  W.showTab(b.dataset.tab);
}));
// после перезагрузки на открытом экране в истории остаются его записи — возвращаемся к началу
const st = history.state;
if (st && (st.s > 0 || st.m)) history.go(-((st.s || 0) + (st.m ? 1 : 0)));
else history.replaceState({ s: 0 }, '');
W.showTab('decks');
// просим браузер не стирать данные при нехватке места
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});
})();
