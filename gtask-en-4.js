// задания тренажёров по темам (английский), часть 4: артикли, who/which/that и причастия, вопросы и порядок слов, фразовые глаголы, выразительность
// GTASK[урок] = [задания]; номер задания — ключ ошибок ('xN'), поэтому только дописывать в конец; lv — уровень задания, если он выше уровня урока
window.GTASK = window.GTASK || {};
Object.assign(GTASK, {

'en-articles': [
  { q: 'I saw ___ interesting film yesterday.', o: ['a', 'an', 'the'], a: 1, w: 'Интересный фильм, впервые упоминаем; перед гласным звуком → an.' },
  { q: 'I saw a film yesterday. ___ film was about space.', o: ['A', 'The', '—'], a: 1, w: 'Уже упомянули → the.' },
  { q: 'My mum is ___ nurse.', o: ['a', 'the', '—'], a: 0, w: 'Профессия → a.' },
  { q: 'I love ___ cats.', o: ['the', 'a', '—'], a: 2, w: 'Кошки вообще → без артикля.' },
  { q: 'Can you pass ___ salt, please?', o: ['a', 'the', '—'], a: 1, w: 'Та, что на столе → the.' },
  { q: 'She plays ___ violin.', o: ['a', 'the', 'an'], a: 1, w: 'Музыкальные инструменты → the.' },
  { q: 'We went to ___ Italy last year.', o: ['the', 'a', '—'], a: 2, w: 'Большинство стран — без артикля.' },
  { q: 'He lives in ___ USA.', o: ['the', 'a', '—'], a: 0, w: 'В названии есть states/kingdom → the USA, the UK.' },
  { q: 'Harvard is ___ university in the USA.', o: ['a', 'an', 'the'], a: 0, w: 'University начинается со звука [ju] → a.' },
  { q: 'Let’s have ___ lunch together.', o: ['a', 'the', '—'], a: 2, w: 'Приёмы пищи → без артикля.' },
  { k: 'form', q: 'It’s ___ (артикль) hour since he left.', t: ['an'], w: 'Hour — h не читается → an.' },
  { k: 'form', q: 'She is ___ (артикль) best singer in the group.', t: ['the'], w: 'Превосходная степень → the.' },
  { k: 'fix', q: 'I go to the bed at eleven.', t: ['I go to bed at eleven.'], w: 'Go to bed — без артикля.' },
  { k: 'fix', q: 'She is engineer.', t: ['She is an engineer.', "She's an engineer."], w: 'Профессия → an engineer.' },
  { lv: 'B1', q: '___ rich should pay more taxes.', o: ['The', 'A', '—'], a: 0, w: 'The + прилагательное = группа людей: the rich, the poor.' },
  { q: 'My kids go to ___ school by bus.', o: ['—', 'a', 'an'], a: 0, w: 'Школа как учёба → без артикля: go to school, go to bed, go to work.' },
  { k: 'err', q: 'Найдите ошибку: «The life is beautiful.»', o: ['The life', 'is', 'beautiful'], a: 0, w: 'Жизнь вообще → Life is beautiful.' }
],

'en-relative': [
  { q: 'The woman ___ lives next door is a doctor.', o: ['who', 'which', 'where'], a: 0, w: 'О человеке → who (или that).' },
  { q: 'This is the book ___ I told you about.', o: ['which', 'who', 'where'], a: 0, w: 'О предмете → which (или that).' },
  { q: 'I have a friend ___ speaks five languages.', o: ['who', 'which', 'what'], a: 0, w: 'Человек → who.' },
  { q: 'The phone ___ I bought is great.', o: ['that', 'who', 'what'], a: 0, w: 'Предмет → that/which.' },
  { q: 'Do you know the man ___ is talking to Anna?', o: ['who', 'which', 'whose'], a: 0, w: 'Человек → who.' },
  { q: 'I don’t like films ___ have sad endings.', o: ['that', 'who', 'what'], a: 0, w: 'Предметы → that/which.' },
  { k: 'form', q: 'The bus ___ (который) goes to the airport is number 5.', t: ['which', 'that'], w: 'Предмет → which / that.' },
  { k: 'form', q: 'He’s the boy ___ (который) broke the window.', t: ['who', 'that'], w: 'Человек → who / that.' },
  { k: 're', q: 'Соедините: I met a girl. She is from Spain.', t: ['I met a girl who is from Spain.', 'I met a girl that is from Spain.', "I met a girl who's from Spain.", "I met a girl that's from Spain."], w: 'She → who.' },
  { k: 're', q: 'Соедините: This is the cake. My mum made it.', t: ['This is the cake that my mum made.', 'This is the cake which my mum made.', 'This is the cake my mum made.'], w: 'It → that/which (можно опустить).' },
  { k: 'fix', q: 'The man which helped me was very kind.', t: ['The man who helped me was very kind.', 'The man that helped me was very kind.'], w: 'О человеке — who, а не which.' },
  { k: 'err', q: 'Найдите ошибку: «This is the house who I was born in.»', o: ['This is the house', 'who', 'I was born in'], a: 1, w: 'Дом — предмет → which/that (или where I was born).' }
],

'en-relative2': [
  { q: 'This is the town ___ I grew up.', o: ['where', 'which', 'who'], a: 0, w: 'Место + действие там → where.' },
  { q: 'That’s the man ___ car was stolen.', o: ['whose', 'who', 'which'], a: 0, w: 'Чей → whose.' },
  { q: 'My sister, ___ lives in Rome, is a teacher.', o: ['who', 'that', 'which'], a: 0, w: 'С запятыми (доп. информация) that нельзя → who.' },
  { q: 'Paris, ___ is the capital of France, is beautiful.', o: ['which', 'that', 'where'], a: 0, w: 'С запятыми → which.' },
  { q: 'I remember the day ___ we met.', o: ['when', 'where', 'which'], a: 0, w: 'Время → when.' },
  { q: 'He passed the exam, ___ surprised everyone.', o: ['which', 'that', 'what'], a: 0, w: 'Which о всей предыдущей фразе.' },
  { k: 'form', q: 'Is this the girl ___ (чей) dog bit you?', t: ['whose'], w: 'Whose — чей.' },
  { k: 're', q: 'Соедините с whose: I have a friend. His father is a pilot.', t: ['I have a friend whose father is a pilot.'], w: 'His → whose.' },
  { k: 're', q: 'Соедините с where: This is the café. We first met there.', t: ['This is the café where we first met.', 'This is the cafe where we first met.'], w: 'There → where.' },
  { k: 'fix', q: 'My brother, that lives in Kazan, is a doctor.', t: ['My brother, who lives in Kazan, is a doctor.'], w: 'В обособленном обороте — who, не that.' },
  { k: 'err', q: 'Найдите ошибку: «That’s the woman who’s son plays football.»', o: ['That’s the woman', 'who’s son', 'plays football'], a: 1, w: 'Чей → whose (who’s = who is).' }
],

'en-participle': [
  { q: '___ the door, she saw a stranger.', o: ['Opening', 'Opened', 'To open'], a: 0, w: 'Одновременное действие → -ing.' },
  { q: '___ in 1990, the hotel needs repairs.', o: ['Built', 'Building', 'Having built'], a: 0, w: 'Пассивное значение (был построен) → V3.' },
  { q: '___ finished her work, she went home.', o: ['Having', 'Being', 'Had'], a: 0, w: 'Сначала закончила → Having finished.' },
  { q: 'The girl ___ by the window is my sister.', o: ['sitting', 'sits', 'who sitting'], a: 0, w: 'Сокращённое who is sitting → sitting.' },
  { q: 'Most of the people ___ to the party came.', o: ['invited', 'inviting', 'who invited'], a: 0, w: 'Которых пригласили → invited.' },
  { q: 'Not ___ what to do, I called my mum.', o: ['knowing', 'known', 'to know'], a: 0, w: 'Не зная → Not knowing.' },
  { k: 'form', q: 'The man ___ (stand) at the door is my boss.', t: ['standing'], w: 'Активное, сейчас → standing.' },
  { k: 'form', q: 'The car ___ (steal) last night was found.', t: ['stolen'], w: 'Пассивное → stolen.' },
  { k: 're', q: 'Сократите: The boy who is playing with the dog is my son.', t: ['The boy playing with the dog is my son.'], w: 'Who is playing → playing.' },
  { k: 're', q: 'Перепишите с Having: After I had read the letter, I burned it.', t: ['Having read the letter, I burned it.', 'Having read the letter, I burnt it.'], w: 'Having + V3.' },
  { k: 'err', q: 'Найдите ошибку: «Walking down the street, a car nearly hit me.»', o: ['Walking down the street', 'a car', 'nearly hit me'], a: 1, w: 'Подлежащее должно быть тем, кто шёл: …, I was nearly hit by a car.' }
],

'en-howq': [
  { q: 'How ___ does this jacket cost?', o: ['much', 'many', 'long'], a: 0, w: 'Цена → How much.' },
  { q: 'How ___ people came to the party?', o: ['many', 'much', 'often'], a: 0, w: 'Исчисляемые → How many.' },
  { q: 'How ___ do you go swimming? — Twice a week.', o: ['often', 'long', 'much'], a: 0, w: 'Как часто → How often.' },
  { q: 'How ___ does it take to get there? — About an hour.', o: ['long', 'far', 'much'], a: 0, w: 'Сколько времени → How long.' },
  { q: 'How ___ is the station from here? — Two kilometres.', o: ['far', 'long', 'many'], a: 0, w: 'Расстояние → How far.' },
  { q: 'How ___ are you? — I’m 25.', o: ['old', 'many years', 'age'], a: 0, w: 'Возраст → How old.' },
  { k: 'form', q: 'How ___ (сколько) water do you drink a day?', t: ['much'], w: 'Water — неисчисляемое → much.' },
  { k: 're', q: 'Задайте вопрос к выделенному: I have lived here for [ten years].', t: ['How long have you lived here?', 'How long have you been living here?', 'How long have you lived here for?'], w: 'Длительность → How long…?' },
  { k: 're', q: 'Задайте вопрос к выделенному: She goes to the gym [three times a week].', t: ['How often does she go to the gym?'], w: 'Частота → How often…?' },
  { lv: 'B1', k: 're', q: 'Сделайте вежливый косвенный вопрос: Where is the station? → Could you tell me…', t: ['Could you tell me where the station is?', 'Could you tell me where the station is, please?'], w: 'В косвенном вопросе прямой порядок: where the station is.' },
  { lv: 'B1', k: 'fix', q: 'Do you know what time is it?', t: ['Do you know what time it is?'], w: 'Косвенный вопрос — прямой порядок: what time it is.' },
  { k: 'err', q: 'Найдите ошибку: «How much apples do you want?»', o: ['How much', 'apples', 'do you want'], a: 0, w: 'Apples — исчисляемые → How many.' },
  { lv: 'B1', q: 'Who ___ you this present?', o: ['gave', 'did give', 'did gave'], a: 0, w: 'Вопрос к подлежащему (кто?) — без did.' },
  { lv: 'B1', q: 'Who ___ at the party?', o: ['did you see', 'you saw', 'did you saw'], a: 0, w: 'Кого ты видел — вопрос к дополнению → did you see.' }
],

'en-tags': [
  { q: 'You’re from Spain, ___?', o: ["aren't you", "don't you", "isn't it"], a: 0, w: 'Are → aren’t you.' },
  { q: 'She likes coffee, ___?', o: ["doesn't she", "isn't she", "don't she"], a: 0, w: 'Likes → doesn’t she.' },
  { q: 'They didn’t come, ___?', o: ['did they', "didn't they", 'were they'], a: 0, w: 'Отрицание → положительный хвостик: did they.' },
  { q: 'You can swim, ___?', o: ["can't you", "don't you", 'can you'], a: 0, w: 'Can → can’t you.' },
  { q: 'I’m late, ___?', o: ["aren't I", "am not I", "isn't I"], a: 0, w: 'I am → aren’t I.' },
  { q: 'Let’s go, ___?', o: ['shall we', "don't we", 'will we'], a: 0, w: 'Let’s → shall we.' },
  { q: 'He has never been to Paris, ___?', o: ['has he', "hasn't he", 'did he'], a: 0, w: 'Never уже отрицание → has he.' },
  { k: 'form', q: 'It was a great film, ___ (хвостик)?', t: ["wasn't it", 'was it not'], w: 'Was → wasn’t it.' },
  { k: 'form', q: 'You’ve met my brother, ___ (хвостик)?', t: ["haven't you", 'have you not'], w: 'Have → haven’t you.' },
  { k: 'fix', q: 'She won’t be late, won’t she?', t: ["She won't be late, will she?", 'She will not be late, will she?'], w: 'Отрицание → will she.' },
  { k: 'err', q: 'Найдите ошибку: «Nobody called, didn’t they?»', o: ['Nobody', 'called', 'didn’t they'], a: 2, w: 'Nobody — отрицание → did they.' }
],

'en-adverbs': [
  { q: 'She ___ late.', o: ['is never', 'never is', 'never'], a: 0, w: 'Наречие частоты — после be.' },
  { q: 'I ___ coffee in the morning.', o: ['usually drink', 'drink usually', 'usually am drink'], a: 0, w: 'Наречие частоты — перед обычным глаголом.' },
  { q: 'He drives very ___.', o: ['carefully', 'careful', 'care'], a: 0, w: 'Как водит → наречие carefully.' },
  { q: 'She speaks English ___.', o: ['well', 'good', 'goodly'], a: 0, w: 'Good → well (наречие).' },
  { q: 'He works ___. He’s always busy.', o: ['hard', 'hardly', 'hardy'], a: 0, w: 'Hard — усердно; hardly — едва.' },
  { q: 'I can ___ hear you. Speak up!', o: ['hardly', 'hard', 'harder'], a: 0, w: 'Hardly — едва.' },
  { q: 'She ___.', o: ['plays the piano beautifully', 'plays beautifully the piano', 'plays the piano beautiful'], a: 0, w: 'Наречие образа действия — после дополнения: plays the piano beautifully.' },
  { k: 'form', q: 'He ran ___ (quick).', t: ['quickly'], w: 'Quick → quickly.' },
  { k: 'form', q: 'She ___ (easy) passed the test.', t: ['easily'], w: 'Y → ily: easily.' },
  { k: 're', q: 'Поставьте always на место: I am tired after work.', t: ['I am always tired after work.', "I'm always tired after work."], w: 'После be: am always.' },
  { k: 're', q: 'Поставьте often на место: We go to the cinema.', t: ['We often go to the cinema.'], w: 'Перед глаголом: often go.' },
  { k: 'fix', q: 'She sings very good.', t: ['She sings very well.'], w: 'Как поёт → well.' },
  { k: 'fix', q: 'I like very much chocolate.', t: ['I like chocolate very much.', 'I really like chocolate.'], w: 'Very much — после дополнения.' },
  { k: 'err', q: 'Найдите ошибку: «He speaks fluently English.»', o: ['He speaks', 'fluently', 'English'], a: 1, w: 'Глагол и дополнение не разделяем: speaks English fluently.' }
],

'en-phrasal': [
  { q: 'Please ___ your shoes before you come in.', o: ['take off', 'take on', 'take up'], a: 0, w: 'Take off — снимать.' },
  { q: 'Can you ___ the music? I can’t hear you.', o: ['turn down', 'turn up', 'turn on'], a: 0, w: 'Turn down — сделать тише.' },
  { q: 'I’m ___ my keys. Have you seen them?', o: ['looking for', 'looking after', 'looking up'], a: 0, w: 'Look for — искать.' },
  { q: 'Who ___ your kids when you’re at work?', o: ['looks after', 'looks for', 'looks at'], a: 0, w: 'Look after — присматривать.' },
  { q: 'Don’t ___! You can do it.', o: ['give up', 'give out', 'give back'], a: 0, w: 'Give up — сдаваться, бросать.' },
  { q: 'What time do you usually ___?', o: ['get up', 'get on', 'get off'], a: 0, w: 'Get up — вставать.' },
  { q: 'I’ll ___ you ___ at the station.', o: ['pick / up', 'take / off', 'look / after'], a: 0, w: 'Pick somebody up — забрать (на машине).' },
  { q: 'The meeting was ___ because the boss was ill.', o: ['called off', 'called up', 'called back'], a: 0, w: 'Call off — отменить.' },
  { q: 'Can you ___ this word in the dictionary?', o: ['look up', 'look for', 'look after'], a: 0, w: 'Look up — найти (в словаре, справочнике).' },
  { q: 'It’s cold. Where’s my jacket? I want to put ___.', o: ['it on', 'on it', 'it'], a: 0, w: 'Местоимение — между глаголом и частицей: put it on.' },
  { k: 'form', q: 'Please ___ (выключить) the light.', t: ['turn off', 'switch off', 'turn out'], w: 'Turn off / switch off.' },
  { k: 'form', q: 'We ___ (закончились) of milk, so I bought some.', t: ['ran out', 'had run out'], w: 'Run out of — закончиться.' },
  { k: 'fix', q: 'Turn off it, please.', t: ['Turn it off, please.'], w: 'Местоимение — внутрь: turn it off.' },
  { k: 'fix', q: 'I’m looking forward to see you.', t: ['I’m looking forward to seeing you.', "I'm looking forward to seeing you.", 'I am looking forward to seeing you.'], w: 'Look forward to + -ing.' },
  { lv: 'B1', q: 'I don’t ___ my boss. We argue all the time.', o: ['get on with', 'get over', 'get through'], a: 0, w: 'Get on with — ладить.' },
  { lv: 'B1', q: 'It took her months to ___ the flu.', o: ['get over', 'get on', 'get by'], a: 0, w: 'Get over — оправиться.' },
  { lv: 'B1', q: 'Prices have ___ again.', o: ['gone up', 'gone off', 'gone on'], a: 0, w: 'Go up — расти (о ценах).' },
  { lv: 'B1', q: 'She ___ the job offer because the salary was too low.', o: ['turned down', 'turned up', 'turned off'], a: 0, w: 'Turn down — отклонить.' },
  { lv: 'B1', q: 'He didn’t ___ to the meeting. Nobody knows why.', o: ['turn up', 'turn down', 'turn over'], a: 0, w: 'Turn up — появиться, прийти.' },
  { lv: 'B1', q: 'I need to ___ smoking.', o: ['give up', 'give out', 'give in'], a: 0, w: 'Give up -ing — бросить.' },
  { lv: 'B1', k: 'form', q: 'Let’s ___ (отложить) the trip until next month.', t: ['put off', 'postpone', 'delay', 'push back'], w: 'Put off — отложить.' },
  { lv: 'B1', k: 'form', q: 'I can’t ___ (выносить) this noise any more.', t: ['put up with', 'stand', 'bear', 'take'], w: 'Put up with — терпеть.' },
  { lv: 'B2', q: 'The police are ___ the robbery.', o: ['looking into', 'looking up to', 'looking over'], a: 0, w: 'Look into — расследовать.' },
  { lv: 'B2', q: 'She ___ her grandmother — they have the same eyes.', o: ['takes after', 'takes up', 'takes in'], a: 0, w: 'Take after — быть похожим (на родственника).' },
  { lv: 'B2', q: 'We need to ___ a solution by Friday.', o: ['come up with', 'come across', 'come down with'], a: 0, w: 'Come up with — придумать.' },
  { lv: 'B2', q: 'I ___ an old photo while cleaning.', o: ['came across', 'came up with', 'came round'], a: 0, w: 'Come across — случайно найти.' },
  { lv: 'B2', k: 'err', q: 'Найдите ошибку: «Can you look my cat after while I’m away?»', o: ['Can you', 'look my cat after', 'while I’m away'], a: 1, w: 'Look after неразделим: look after my cat.' }
],

'en-inversion': [
  { q: 'Never ___ such a beautiful sunset.', o: ['have I seen', 'I have seen', 'I saw'], a: 0, w: 'Never в начале → инверсия: have I seen.' },
  { q: 'Not only ___ late, but he also forgot the tickets.', o: ['was he', 'he was', 'he is'], a: 0, w: 'Not only в начале → was he.' },
  { q: 'Rarely ___ such a talented student.', o: ['do we meet', 'we meet', 'meet we'], a: 0, w: 'Rarely → do we meet.' },
  { q: 'Hardly ___ home when it started to rain.', o: ['had I got', 'I had got', 'did I got'], a: 0, w: 'Hardly … when → had I got.' },
  { q: 'Only then ___ the truth.', o: ['did I understand', 'I understood', 'understood I'], a: 0, w: 'Only then → did I understand.' },
  { q: 'Under no circumstances ___ open this door.', o: ['should you', 'you should', 'you'], a: 0, w: 'Under no circumstances → should you.' },
  { k: 'form', q: 'Little ___ (do) she know what was waiting for her.', t: ['did'], w: 'Little did she know.' },
  { k: 're', q: 'Перепишите с инверсией: I have never been so scared. → Never…', t: ['Never have I been so scared.'], w: 'Never have I been…' },
  { k: 're', q: 'Перепишите: He not only sings, but he also dances. → Not only…', t: ['Not only does he sing, but he also dances.', 'Not only does he sing but he also dances.', 'Not only does he sing, he also dances.'], w: 'Not only does he sing…' },
  { k: 'err', q: 'Найдите ошибку: «Seldom I have heard such nonsense.»', o: ['Seldom', 'I have heard', 'such nonsense'], a: 1, w: 'Seldom have I heard.' }
],

'en-cleft': [
  { q: '___ I need is a holiday.', o: ['What', 'That', 'Which'], a: 0, w: 'What I need is… — «что мне нужно, так это…»' },
  { q: 'It was Tom ___ broke the vase, not me.', o: ['who', 'what', 'which'], a: 0, w: 'It was … who/that — выделяем человека.' },
  { q: 'It’s the noise ___ I can’t stand.', o: ['that', 'what', 'who'], a: 0, w: 'It is … that.' },
  { q: 'All I want ___ some sleep.', o: ['is', 'are', 'be'], a: 0, w: 'All I want is…' },
  { q: 'The reason ___ I called is to apologise.', o: ['why', 'what', 'because'], a: 0, w: 'The reason why…' },
  { q: 'What he did ___ call the police.', o: ['was', 'did', 'has'], a: 0, w: 'What he did was (to) call…' },
  { k: 're', q: 'Выделите Anna: Anna told me the news. → It was…', t: ['It was Anna who told me the news.', 'It was Anna that told me the news.'], w: 'It was Anna who…' },
  { k: 're', q: 'Перепишите с What: I love his sense of humour.', t: ['What I love is his sense of humour.', 'What I love about him is his sense of humour.', 'What I love is his sense of humor.', 'What I love about him is his sense of humor.'], w: 'What I love is…' },
  { k: 'fix', q: 'What I need it is more time.', t: ['What I need is more time.'], w: 'Без it: What I need is…' },
  { k: 'err', q: 'Найдите ошибку: «It was in 2010 when we moved here.»', o: ['It was', 'in 2010', 'when we moved here'], a: 2, w: 'В выделительной конструкции нормативно that: It was in 2010 that we moved here (when — разговорно).' }
],

'en-ellipsis': [
  { q: '— Are you coming? — I hope ___.', o: ['so', 'it', 'yes'], a: 0, w: 'I hope so — надеюсь, да.' },
  { q: '— Will it rain? — I hope ___.', o: ['not', 'no', "don't"], a: 0, w: 'I hope not — надеюсь, нет.' },
  { q: 'I like jazz, and ___ does my wife.', o: ['so', 'too', 'also'], a: 0, w: 'So does my wife — и моя жена тоже.' },
  { q: 'I can’t swim. — ___ can I.', o: ['Neither', 'So', 'Either'], a: 0, w: 'Согласие с отрицанием → Neither can I.' },
  { q: 'She wanted to go, but I didn’t want ___.', o: ['to', 'it', '—'], a: 0, w: 'Оставляем to вместо повторения глагола.' },
  { q: 'I don’t have a pen. Can you lend me ___?', o: ['one', 'it', 'ones'], a: 0, w: 'One заменяет исчисляемое существительное.' },
  { k: 'form', q: '— I’ve never been to Japan. — ___ (я тоже нет) have I.', t: ['neither', 'nor'], w: 'Neither / Nor have I.' },
  { k: 'form', q: 'He said he would help, and he ___ (действительно помог).', t: ['did'], w: 'Did заменяет helped.' },
  { k: 'fix', q: 'I like this shirt, but I prefer the blue.', t: ['I like this shirt, but I prefer the blue one.', 'I like this shirt, but I prefer the blue shirt.'], w: 'The blue one.' },
  { k: 'err', q: 'Найдите ошибку: «— I’m tired. — So I am.»', o: ['I’m tired', 'So', 'I am'], a: 2, w: 'Согласие «я тоже» → So am I (инверсия).' },
  { q: 'Is there a problem? If ___, let me know.', o: ['so', 'it', 'yes'], a: 0, w: 'If so — «если да».' },
  { q: '— Would you like to join us? — I’d love ___!', o: ['to', 'it', '—'], a: 0, w: 'I’d love to — to заменяет весь глагол.' },
  { q: 'He promised to call, but he didn’t ___.', o: ['do so', 'make so', 'do it so'], a: 0, w: 'Do so заменяет уже названное действие (книжно).' },
  { k: 'form', q: '— You’ve finished, haven’t you? — No, I ___ (нет, ещё не закончил).', t: ["haven't", 'have not'], w: 'Краткий ответ — вспомогательный глагол без повтора: I haven’t.' }
]
});
