'use strict';
// аккаунты и синхронизация через Supabase (REST, без сторонних библиотек).
// Всё сохраняется сначала в телефоне; когда есть интернет — сливается с сервером.
(function () {
const W = window.W, CFG = window.WORDS_CONFIG || {};
const AUTH = 'words-auth';
const A = W.acc = { session: null, status: 'off', lastSync: 0, error: '' };

A.configured = () => !!(CFG.supabaseUrl && CFG.supabaseKey);
const api = (path, opts = {}, token) => fetch(CFG.supabaseUrl.replace(/\/$/, '') + path, Object.assign({}, opts, {
  headers: Object.assign({ apikey: CFG.supabaseKey, 'Content-Type': 'application/json' },
    token ? { Authorization: 'Bearer ' + token } : {}, opts.headers || {})
}));
const readJson = async r => { const t = await r.text(); try { return t ? JSON.parse(t) : {}; } catch (e) { return { message: t }; } };
const errText = j => {
  const m = (j && (j.msg || j.error_description || j.message || j.error)) || '';
  if (/invalid login credentials/i.test(m)) return 'Неверная почта или пароль';
  if (/email not confirmed/i.test(m)) return 'Почта не подтверждена — откройте письмо от Supabase и нажмите ссылку';
  if (/already registered|already been registered/i.test(m)) return 'Такая почта уже зарегистрирована — войдите';
  if (/password should be at least/i.test(m)) return 'Пароль слишком короткий: нужно не меньше 6 символов';
  if (/rate limit|too many/i.test(m)) return 'Слишком много попыток. Подождите немного и попробуйте снова';
  if (/invalid.*email|unable to validate email/i.test(m)) return 'Проверьте адрес почты';
  return m || 'Что-то пошло не так';
};

const saveSession = s => {
  A.session = s;
  try { if (s) localStorage.setItem(AUTH, JSON.stringify(s)); else localStorage.removeItem(AUTH); } catch (e) {}
};
const fromToken = j => ({
  access: j.access_token, refresh: j.refresh_token,
  exp: Date.now() + ((j.expires_in || 3600) - 60) * 1000,
  user: { id: j.user.id, email: j.user.email }
});

// свежий токен (обновляем заранее); null — нет сети или вход недействителен
async function token() {
  const s = A.session;
  if (!s) return null;
  if (Date.now() < s.exp) return s.access;
  const r = await api('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: JSON.stringify({ refresh_token: s.refresh }) });
  const j = await readJson(r);
  if (!r.ok) {
    if (r.status === 400 || r.status === 401) { A.status = 'relogin'; A.error = 'Войдите в аккаунт заново'; }
    return null;
  }
  saveSession(fromToken(j));
  return A.session.access;
}

// ---------- синхронизация ----------
let busy = false, again = false, timer = null;
A.sync = async () => {
  if (!A.session || !A.configured()) return;
  if (busy) { again = true; return; }
  if (!navigator.onLine) { A.status = 'offline'; return W.accChanged && W.accChanged(); }
  busy = true; A.status = 'syncing'; W.accChanged && W.accChanged();
  try {
    const t = await token();
    if (!t) throw new Error(A.error || 'нет связи');
    const uid = A.session.user.id;
    const r = await api('/rest/v1/user_state?select=data&user_id=eq.' + uid, {}, t);
    if (!r.ok) throw new Error(errText(await readJson(r)));
    const rows = await r.json();
    const remote = rows[0] && W.validState(rows[0].data) ? rows[0].data : null;
    // merge(x, x) — одинаковая запись одинаковых данных: так сравниваем без ложных отличий
    const canon = x => JSON.stringify(W.merge(x, x));
    const merged = remote ? W.merge(W.S, remote) : W.S;
    // данные телефона меняем, только если с сервера пришло что-то новое (иначе не трогаем открытые экраны)
    if (canon(merged) !== canon(W.S)) {
      W.S = W.normalize(merged); W.save(true);
      W.onExternalChange && W.onExternalChange('sync');
    }
    if (!remote || canon(W.S) !== canon(remote)) {
      const p = await api('/rest/v1/user_state', {
        method: 'POST', headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
        body: JSON.stringify({ user_id: uid, data: W.S, updated_at: new Date().toISOString() })
      }, t);
      if (!p.ok) throw new Error(errText(await readJson(p)));
    }
    A.status = 'ok'; A.lastSync = Date.now(); A.error = '';
  } catch (e) {
    A.status = A.status === 'relogin' ? 'relogin' : 'error';
    A.error = A.error || String(e.message || e);
  } finally {
    busy = false;
    W.accChanged && W.accChanged();
    if (again) { again = false; A.sync(); }
  }
};
// после каждого изменения — отправка через 3 секунды тишины
W.afterSave = () => {
  if (!A.session) return;
  clearTimeout(timer);
  timer = setTimeout(A.sync, 3000);
};
window.addEventListener('online', () => A.sync());
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') A.sync(); });

// ---------- вход, регистрация, выход ----------
// данные этого телефона без аккаунта: спрашиваем, перенести ли их в аккаунт
async function enter(session) {
  saveSession(session);
  const guest = W.peekGuest();
  W.useStore(session.user.id);
  if (W.hasData(guest)) {
    const ask = () => new Promise(res => W.modal('Данные этого телефона',
      W.h('p', null, 'Здесь уже есть занятия без аккаунта. Добавить их в аккаунт ' + session.user.email + '?'), [
        { label: 'Не добавлять', cls: 'ghost', fn: () => res(false) },
        { label: 'Добавить', cls: 'primary', fn: () => res(true) }]));
    if (await ask()) { W.S = W.merge(W.S, guest); W.save(); W.clearGuest(); }
  }
  A.status = 'ok';
  W.onExternalChange && W.onExternalChange('switch');
  await A.sync();
}

A.signIn = async (email, password) => {
  const r = await api('/auth/v1/token?grant_type=password', { method: 'POST', body: JSON.stringify({ email, password }) });
  const j = await readJson(r);
  if (!r.ok) throw new Error(errText(j));
  await enter(fromToken(j));
};
A.signUp = async (email, password) => {
  const r = await api('/auth/v1/signup?redirect_to=' + encodeURIComponent(CFG.siteUrl), { method: 'POST', body: JSON.stringify({ email, password }) });
  const j = await readJson(r);
  if (!r.ok) throw new Error(errText(j));
  if (j.access_token) { await enter(fromToken(j)); return 'in'; }
  return 'confirm'; // нужно подтвердить почту
};
A.recover = async email => {
  const r = await api('/auth/v1/recover?redirect_to=' + encodeURIComponent(CFG.siteUrl), { method: 'POST', body: JSON.stringify({ email }) });
  if (!r.ok) throw new Error(errText(await readJson(r)));
};
A.setPassword = async password => {
  const t = await token();
  const r = await api('/auth/v1/user', { method: 'PUT', body: JSON.stringify({ password }) }, t);
  if (!r.ok) throw new Error(errText(await readJson(r)));
};
A.signOut = async () => {
  clearTimeout(timer);
  try { if (navigator.onLine) await A.sync(); } catch (e) {}
  const t = A.session && A.session.access;
  if (t && navigator.onLine) api('/auth/v1/logout', { method: 'POST' }, t).catch(() => {});
  saveSession(null);
  A.status = 'off';
  W.useStore(null);
  W.onExternalChange && W.onExternalChange('switch');
};
// удалить аккаунт целиком можно только с сервера — пока удаляем данные, а аккаунт по просьбе удаляет владелец
A.wipeRemote = async () => {
  const t = await token();
  const r = await api('/rest/v1/user_state?user_id=eq.' + A.session.user.id, { method: 'DELETE' }, t);
  if (!r.ok) throw new Error(errText(await readJson(r)));
};

// ---------- запуск ----------
// ссылка из письма (подтверждение почты или сброс пароля) приходит с токеном в адресе после #
async function fromLink() {
  const p = new URLSearchParams(location.hash.slice(1));
  if (p.get('error_description')) { history.replaceState(history.state, '', location.pathname); return W.toast('Ссылка устарела: ' + p.get('error_description')); }
  if (!p.get('access_token')) return;
  history.replaceState(history.state, '', location.pathname);
  const r = await api('/auth/v1/user', {}, p.get('access_token'));
  if (!r.ok) return W.toast('Не удалось войти по ссылке — войдите с паролем');
  const user = await r.json();
  await enter(fromToken({ access_token: p.get('access_token'), refresh_token: p.get('refresh_token'), expires_in: +p.get('expires_in') || 3600, user }));
  if (p.get('type') === 'recovery') W.askNewPassword && W.askNewPassword();
  else W.toast('Почта подтверждена, вы вошли');
}

// вызывается из boot.js до первой отрисовки: сразу открываем данные нужного аккаунта
A.boot = () => {
  if (!A.configured()) return;
  try { A.session = JSON.parse(localStorage.getItem(AUTH)); } catch (e) {}
  if (A.session && A.session.user) { W.useStore(A.session.user.id); A.status = 'ok'; }
  else A.session = null;
};
A.start = () => {
  if (!A.configured()) return;
  if (/access_token|error_description/.test(location.hash)) fromLink().catch(() => {});
  else A.sync();
};
})();
