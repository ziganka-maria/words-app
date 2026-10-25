// уроки грамматики: блоки p/h/ex/table/tip/warn, вопросы: o — варианты (a — номер верного), t — ответы для ввода
window.GRAMMAR = window.GRAMMAR || {};
GRAMMAR.en = [
{ id: 'en-g1', level: 'A2', title: 'Разговорные сокращения: gonna, wanna, gotta', sub: 'Как говорят в сериалах и чатах',
  blocks: [
    { t: 'p', h: 'В живой речи носители «склеивают» слова. В учебнике написано <b>going to</b>, а в сериале вы слышите <b>gonna</b>. Знать эти формы нужно хотя бы для того, чтобы понимать на слух.' },
    { t: 'table', head: ['Полная форма', 'В речи', 'Значение'], rows: [
      ['going to', 'gonna', 'собираюсь, буду'],
      ['want to', 'wanna', 'хочу'],
      ['have got to', 'gotta', 'надо, должен (≈ have to)'],
      ['kind of', 'kinda', 'вроде, довольно'],
      ["don't know", 'dunno', 'не знаю'],
      ['let me', 'lemme', 'дай-ка я'],
      ['give me', 'gimme', 'дай мне']
    ]},
    { t: 'h', h: 'Как это звучит' },
    { t: 'ex', rows: [
      ["I'm gonna call you later.", 'Я позвоню тебе позже.'],
      ['I wanna go home.', 'Я хочу домой.'],
      ['I gotta go. See you!', 'Мне надо бежать. Пока!'],
      ["It's kinda cold today.", 'Сегодня довольно холодно.'],
      ['Dunno. Maybe tomorrow?', 'Не знаю. Может, завтра?'],
      ['Lemme check.', 'Дай-ка проверю.']
    ]},
    { t: 'tip', h: '<b>gonna</b> заменяет только «going to + глагол»: <b>I\'m gonna sleep</b>. А во фразе «I\'m going to the shop» (иду в магазин) gonna не ставят — там нет второго глагола.' },
    { t: 'tip', h: 'Вопрос «Do you want to…?» в речи часто сжимается до <b>Wanna…?</b> — <b>Wanna grab a coffee?</b> = «Пойдём выпьем кофе?»' },
    { t: 'warn', h: 'С he/she/it говорят <b>he wants to</b>, а не «he wanna». И в письмах начальнику, в сочинениях и на экзаменах пишите полные формы: going to, want to, have to.' }
  ],
  quiz: [
    { q: "I'm ___ call you tomorrow.", o: ['gonna', 'wanna', 'gotta'], a: 0, w: 'Планы: going to → gonna.' },
    { q: 'I ___ go to the cinema tonight. (хочу)', o: ['gotta', 'wanna', 'gonna'], a: 1, w: 'Хотеть: want to → wanna.' },
    { q: 'Sorry, I ___ leave now. My bus is here.', o: ['gotta', 'wanna', 'kinda'], a: 0, w: 'Надо: have got to → gotta.' },
    { q: 'Напишите разговорную форму: want to → …', t: ['wanna'], w: 'want to → wanna.' },
    { q: "It's ___ cold today.", o: ['kinda', 'gonna', 'gotta'], a: 0, w: 'kind of → kinda: «довольно, вроде».' },
    { q: 'Что подходит для письма начальнику?', o: ["I'm gonna send the report.", 'I am going to send the report tomorrow.'], a: 1, w: 'В деловом письме — полные формы.' },
    { q: "Напишите разговорную форму: I don't know → I …", t: ['dunno', 'i dunno'], w: "don't know → dunno." },
    { q: 'Какая фраза правильная?', o: ['She wanna go home.', 'She wants to go home.'], a: 1, w: 'С he/she/it: wants to.' }
  ]
},
{ id: 'en-g2', level: 'A2', title: 'Present Perfect: «уже случилось»', sub: 'have/has + третья форма глагола',
  blocks: [
    { t: 'p', h: 'Present Perfect связывает прошлое с настоящим: действие уже было, но важно, что из этого есть <b>сейчас</b> — опыт или результат.' },
    { t: 'h', h: 'Как строится' },
    { t: 'table', head: ['', 'Схема', 'Пример'], rows: [
      ['+', 'I / you / we / they <b>have</b> + V3', 'I have seen it.'],
      ['+', 'he / she / it <b>has</b> + V3', 'She has left.'],
      ['−', "haven't / hasn't + V3", "We haven't finished."],
      ['?', 'Have / Has + кто + V3?', 'Have you eaten?']
    ]},
    { t: 'p', h: '<b>V3</b> — третья форма глагола. У правильных глаголов это +ed: play → played. Неправильные надо выучить: go → <b>gone</b>, see → <b>seen</b>, eat → <b>eaten</b>, do → <b>done</b>, write → <b>written</b>, take → <b>taken</b>, be → <b>been</b>, have → <b>had</b>, make → <b>made</b>.' },
    { t: 'h', h: 'Когда используем' },
    { t: 'ex', rows: [
      ['Have you ever binge-watched a whole season?', 'Ты когда-нибудь смотрел целый сезон запоем? (опыт)'],
      ["I've never tried sushi.", 'Я никогда не пробовал суши. (опыт)'],
      ["I've lost my keys.", 'Я потерял ключи. (их нет сейчас)'],
      ["She's just left.", 'Она только что ушла.'],
      ["I've already done it.", 'Я уже это сделал.'],
      ["I haven't finished yet.", 'Я ещё не закончил.']
    ]},
    { t: 'warn', h: 'Если назван момент в прошлом (<b>yesterday, last week, in 2019, two days ago</b>), нужен Past Simple: <b>I saw it yesterday</b>, а не «I have seen it yesterday».' },
    { t: 'tip', h: '<b>been</b> и <b>gone</b>: She has <b>been</b> to Paris — была в Париже (и вернулась). She has <b>gone</b> to Paris — уехала в Париж (и сейчас там).' }
  ],
  quiz: [
    { q: 'I ___ never ___ sushi.', o: ['have … eaten', 'has … eaten', 'have … ate'], a: 0, w: 'I → have, eat → eaten.' },
    { q: 'She ___ just left.', o: ['have', 'has', 'is'], a: 1, w: 'she → has.' },
    { q: 'We ___ to Paris in 2019.', o: ['went', 'have gone', 'have been'], a: 0, w: 'Есть точное время (in 2019) — Past Simple.' },
    { q: '___ you ever seen this show?', o: ['Did', 'Have', 'Has'], a: 1, w: 'Опыт «когда-нибудь» — Have you ever…?' },
    { q: 'Третья форма глагола write:', t: ['written'], w: 'write — wrote — written.' },
    { q: "I haven't finished ___.", o: ['yet', 'ago', 'yesterday'], a: 0, w: 'yet — «ещё (не)» в конце отрицания.' },
    { q: 'He ___ already ___ his homework.', o: ['has … done', 'have … done', 'has … did'], a: 0, w: 'he → has, do → done.' },
    { q: 'Твой друг уехал в Лондон и сейчас там. He has ___ to London.', o: ['been', 'gone'], a: 1, w: 'gone — уехал и ещё не вернулся.' }
  ]
}
];
