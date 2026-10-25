// помощник: добавить колоды в папку (папка создаётся при первом обращении)
// addDecks('en', 'en-a1', 'Базовый английский · A1', [ {id, emoji, title, level, reg, cards: [...]} ])
window.CONTENT = window.CONTENT || {};
window.addDecks = (lang, folderId, folderTitle, decks) => {
  const C = CONTENT[lang] = CONTENT[lang] || { folders: [] };
  let f = C.folders.find(x => x.id === folderId);
  if (!f) { f = { id: folderId, title: folderTitle, decks: [] }; C.folders.push(f); }
  f.decks.push(...decks);
};
