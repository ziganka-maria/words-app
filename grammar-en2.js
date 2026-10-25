// Грамматика английского, уровень A2 (часть 1)
GRAMMAR.en.push(
{ id: 'en-countable', level: 'A2', title: 'Исчисляемые и неисчисляемые: much, many, a lot of', sub: 'How much water? How many apples?',
  blocks: [
    { t: 'p', h: 'Существительные бывают <b>исчисляемые</b> (их можно посчитать: <b>an apple, two apples</b>) и <b>неисчисляемые</b> (их не считают по штукам: <b>water, money, bread, advice</b>).' },
    { t: 'table', head: ['', 'Исчисляемые', 'Неисчисляемые'], rows: [
      ['много', '<b>many</b> apples', '<b>much</b> water'],
      ['в утверждении', '<b>a lot of</b> apples', '<b>a lot of</b> water'],
      ['немного', '<b>a few</b> apples', '<b>a little</b> water'],
      ['вопрос о количестве', '<b>How many</b> apples?', '<b>How much</b> water?'],
      ['артикль a/an', 'an apple ✓', 'a water ✗']] },
    { t: 'ex', rows: [
      ['How many people are there? — A lot.', 'Сколько там людей? — Много.'], ["I haven't got much time.", 'У меня мало времени.'],
      ['We need a few eggs and a little milk.', 'Нам нужно несколько яиц и немного молока.'], ['She has a lot of friends.', 'У неё много друзей.']] },
    { t: 'tip', h: 'В утверждении лучше <b>a lot of</b>, а <b>much</b> чаще используют в вопросах и отрицаниях: <b>I don’t have much money</b>.' },
    { t: 'warn', h: 'Русские «новости, информация, совет, мебель» в английском — <b>неисчисляемые</b>: <b>some advice</b>, <b>some news</b>, <b>some information</b> (не «an advice», «advices»).' }
  ],
  quiz: [
    { q: 'How ___ apples do you want?', o: ['much', 'many', 'a lot'], a: 1, w: 'Apples — исчисляемое → many.' },
    { q: 'How ___ water do you drink?', o: ['much', 'many', 'few'], a: 0, w: 'Water — неисчисляемое → much.' },
    { q: 'I haven’t got ___ money.', o: ['many', 'much', 'a few'], a: 1, w: 'Money — неисчисляемое → much.' },
    { q: 'She has ___ friends in London. (несколько)', o: ['a few', 'a little', 'much'], a: 0, w: 'Friends — исчисляемое → a few.' },
    { q: 'Add ___ salt, please. (немного)', o: ['a few', 'a little', 'many'], a: 1, w: 'Salt — неисчисляемое → a little.' },
    { q: 'Что неисчисляемое?', o: ['apple', 'advice', 'chair'], a: 1, w: 'Advice — неисчисляемое.' },
    { q: 'Что верно?', o: ['I need some advices.', 'I need some advice.'], a: 1, w: 'Advice без -s.' },
    { q: 'We have ___ of time. (много)', t: ['a lot', 'lots'], w: 'a lot of time.' }
  ]
},
{ id: 'en-comparative', level: 'A2', title: 'Сравнение: bigger, more interesting', sub: 'Она выше меня, этот фильм интереснее',
  blocks: [
    { t: 'p', h: 'Чтобы сравнить два предмета, у коротких прилагательных добавляем <b>-er</b>, а у длинных ставим <b>more</b>. «Чем» — это <b>than</b>.' },
    { t: 'table', head: ['Тип', 'Правило', 'Пример'], rows: [
      ['короткие (1 слог)', '+ <b>er</b>', 'tall → <b>taller</b> than, cold → <b>colder</b>'],
      ['на -e', '+ <b>r</b>', 'nice → nicer, large → larger'],
      ['одна согласная после гласной', 'удвоение + er', 'big → <b>bigger</b>, hot → <b>hotter</b>'],
      ['двусложные на -y', 'y → <b>ier</b>', 'easy → <b>easier</b>, happy → <b>happier</b>'],
      ['остальные из 2+ слогов', '<b>more</b> + прилагательное', '<b>more</b> interesting, <b>more</b> expensive']] },
    { t: 'h', h: 'Исключения' },
    { t: 'table', head: ['Обычная', 'Сравнительная'], rows: [['good', '<b>better</b>'], ['bad', '<b>worse</b>'], ['far', '<b>farther / further</b>']] },
    { t: 'ex', rows: [
      ['My brother is taller than me.', 'Мой брат выше меня.'], ['This book is more interesting than that one.', 'Эта книга интереснее той.'],
      ['The weather is better today.', 'Сегодня погода лучше.'], ["She isn't as tall as her sister.", 'Она не такая высокая, как сестра.']] },
    { t: 'warn', h: 'Нельзя ставить два сравнения: <b>more taller</b> — ошибка. Нужно либо <b>taller</b>, либо <b>more interesting</b>.' }
  ],
  quiz: [
    { q: 'My brother is ___ than me. (tall)', t: ['taller'], w: 'tall → taller.' },
    { q: 'This sofa is ___ than that one. (comfortable)', o: ['comfortabler', 'more comfortable', 'most comfortable'], a: 1, w: 'Длинное прилагательное → more.' },
    { q: 'Today is ___ than yesterday. (hot)', t: ['hotter'], w: 'hot → hotter.' },
    { q: 'The exam was ___ than I thought. (easy)', t: ['easier'], w: 'easy → easier.' },
    { q: 'She is a ___ singer than me. (good)', t: ['better'], w: 'good → better.' },
    { q: 'The weather is ___ today. (bad)', t: ['worse'], w: 'bad → worse.' },
    { q: 'Что верно?', o: ['more taller', 'taller', 'more tall'], a: 1, w: 'Короткое прилагательное — только -er.' },
    { q: 'He is ___ than his brother. (old)', o: ['older', 'more old', 'oldest'], a: 0, w: 'old → older.' }
  ]
},
{ id: 'en-superlative', level: 'A2', title: 'Самый-самый: the biggest, the most', sub: 'Самый высокий, самый интересный',
  blocks: [
    { t: 'p', h: 'Превосходная степень — <b>самый</b>. Всегда ставим <b>the</b>. У коротких слов — <b>-est</b>, у длинных — <b>the most</b>.' },
    { t: 'table', head: ['Тип', 'Правило', 'Пример'], rows: [
      ['короткие', '<b>the</b> + прилагательное<b>-est</b>', 'tall → <b>the tallest</b>, cold → <b>the coldest</b>'],
      ['двусложные на -y', 'y → <b>iest</b>', 'easy → <b>the easiest</b>'],
      ['остальные из 2+ слогов', '<b>the most</b> + прилагательное', '<b>the most</b> interesting'],
      ['исключения', '', 'good → <b>the best</b>, bad → <b>the worst</b>, far → <b>the farthest</b>']] },
    { t: 'ex', rows: [
      ['Mount Everest is the highest mountain in the world.', 'Эверест — самая высокая гора в мире.'], ['She is the best student in the class.', 'Она лучшая ученица в классе.'],
      ['This is the most expensive hotel in town.', 'Это самый дорогой отель в городе.']] },
    { t: 'tip', h: 'После превосходной степени используем <b>in</b> с местом и группой (<b>in the world, in the class</b>) и <b>of</b> с набором (<b>of all</b>).' },
    { t: 'warn', h: 'Без <b>the</b> нельзя: <b>the biggest</b>, а не «biggest» (кроме случаев вроде <b>I like her most</b>).' }
  ],
  quiz: [
    { q: 'Everest is ___ mountain in the world. (high)', o: ['the higher', 'the highest', 'highest'], a: 1, w: 'the + -est.' },
    { q: 'She is ___ student in the class. (good)', t: ['the best'], w: 'good → the best.' },
    { q: 'It is ___ film I know. (interesting)', o: ['the most interesting', 'the interestingest', 'more interesting'], a: 0, w: 'Длинное прилагательное → the most.' },
    { q: 'January is ___ month of the year. (cold)', t: ['the coldest'], w: 'cold → the coldest.' },
    { q: 'This is ___ day of my life! (bad)', t: ['the worst'], w: 'bad → the worst.' },
    { q: 'He is the ___ boy in our school. (tall)', t: ['tallest'], w: 'the tallest.' },
    { q: 'This is the ___ test. (easy)', t: ['easiest'], w: 'easy → easiest.' },
    { q: 'Что верно?', o: ['It is biggest city in Spain.', 'It is the biggest city in Spain.'], a: 1, w: 'Нужен the.' }
  ]
},
{ id: 'en-future', level: 'A2', title: 'Будущее: going to и will', sub: 'Я собираюсь… / Я, пожалуй, …',
  blocks: [
    { t: 'p', h: 'В английском есть два основных способа говорить о будущем.' },
    { t: 'table', head: ['', 'Когда', 'Пример'], rows: [
      ['<b>be going to</b> + глагол', 'заранее принятое решение, план, или видим по признакам', "I'm <b>going to</b> visit my aunt on Sunday. Look at the clouds! It's <b>going to</b> rain."],
      ['<b>will</b> + глагол', 'решение прямо сейчас, обещание, предположение', "It's cold. I'<b>ll</b> close the window. I <b>will</b> call you. It <b>will</b> be sunny tomorrow."]] },
    { t: 'table', head: ['', 'going to', 'will'], rows: [
      ['+', "I'm going to work.", "I'll work. / I will work."],
      ['−', "I'm not going to work.", "I won't work."],
      ['?', 'Are you going to work?', 'Will you work?']] },
    { t: 'ex', rows: [
      ["We're going to buy a new car next month.", 'Мы собираемся купить новую машину в следующем месяце.'], ["The phone is ringing. — I'll answer it!", 'Звонит телефон. — Я отвечу!'],
      ["I promise I won't be late.", 'Обещаю, что не опоздаю.'], ['Do you think it will rain?', 'Как думаешь, будет дождь?']] },
    { t: 'tip', h: 'После <b>will</b> глагол без to и без -s: <b>She will come</b>. Сокращения: <b>I’ll, you’ll, she’ll, won’t</b> (= will not).' },
    { t: 'warn', h: 'Не используем <b>will</b> после <b>if</b> и <b>when</b> в значении будущего: <b>If it rains, I’ll stay home</b> (не «If it will rain»).' }
  ],
  quiz: [
    { q: 'I have a plan: I ___ visit my aunt on Sunday.', o: ["am going to", "will to", "am go to"], a: 0, w: 'Заранее принятый план — be going to.' },
    { q: 'The phone is ringing. — I ___ answer it!', o: ["am going to", "'ll", "do"], a: 1, w: 'Решение «на месте» — will (’ll).' },
    { q: 'Look at the sky! It ___ rain.', o: ["is going to", "will to", "goes to"], a: 0, w: 'Есть признаки в настоящем — going to.' },
    { q: 'I promise I ___ be late. (will not)', o: ["won't", "don't", "am not"], a: 0, w: 'Won’t — отрицание will.' },
    { q: 'What ___ you ___ tomorrow? (do, план)', o: ['are … going to do', 'will … to do', 'do … going do'], a: 0, w: 'What are you going to do?' },
    { q: 'She ___ come tomorrow. (will)', o: ['will comes', 'will come', 'will to come'], a: 1, w: 'After will — глагол без -s и to.' },
    { q: 'If it rains tomorrow, I ___ at home.', o: ["stay", "will stay", "would stay"], a: 1, w: 'If it rains — настоящее, а в главной части — will.' },
    { q: 'Что верно?', o: ["If it will rain, I'll stay home.", "If it rains, I'll stay home."], a: 1, w: 'После if — Present Simple.' }
  ]
},
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
{ id: 'en-modals', level: 'A2', title: 'Нужно и можно: have to, must, should', sub: 'Обязан, нельзя, советую',
  blocks: [
    { t: 'table', head: ['Слово', 'Значение', 'Пример'], rows: [
      ['<b>have to</b>', 'вынужден, должен (по обстоятельствам, правилам)', 'I <b>have to</b> get up at six.'],
      ['<b>must</b>', 'должен (сильное «надо», слова говорящего)', 'You <b>must</b> see this film!'],
      ['<b>mustn\'t</b>', 'нельзя', "You <b>mustn't</b> smoke here."],
      ["<b>don't have to</b>", 'не нужно (но можно)', "You <b>don't have to</b> come."],
      ['<b>should</b>', 'стоит, следует (совет)', 'You <b>should</b> sleep more.']] },
    { t: 'ex', rows: [
      ['I have to wear a uniform at work.', 'На работе мне приходится носить форму.'], ["He doesn't have to pay. It's free.", 'Ему не нужно платить. Это бесплатно.'],
      ["You mustn't touch the paintings.", 'Картины трогать нельзя.'], ['You should see a doctor.', 'Тебе стоит сходить к врачу.']] },
    { t: 'warn', h: 'Ловушка: <b>mustn’t</b> = «нельзя», а <b>don’t have to</b> = «необязательно». Это <b>не одно и то же</b>: <b>You don’t have to come</b> («можешь не приходить»), <b>You mustn’t come</b> («не приходи»).' },
    { t: 'tip', h: 'После <b>must</b> и <b>should</b> — глагол без to: <b>must go</b>, <b>should go</b>. А у have to меняется have: <b>She has to go</b>, <b>Do you have to go?</b>' }
  ],
  quiz: [
    { q: 'I ___ get up at six every day. (так надо)', o: ['have to', 'mustn’t', 'should to'], a: 0, w: 'Обстоятельства — have to.' },
    { q: 'You ___ park here. It’s forbidden.', o: ["mustn't", "don't have to", "shouldn't have"], a: 0, w: 'Запрет — mustn’t.' },
    { q: 'You ___ come with me. It’s OK, I can go alone.', o: ["mustn't", "don't have to", "can't"], a: 1, w: 'Необязательно — don’t have to.' },
    { q: 'You look tired. You ___ go to bed.', o: ['should', 'have to', 'can'], a: 0, w: 'Совет — should.' },
    { q: 'She ___ work on Sundays. (has to)', t: ['has to'], w: 'she → has to.' },
    { q: '___ you have to wear a uniform?', o: ['Do', 'Does', 'Must'], a: 0, w: 'Вопрос с have to — Do you have to…?' },
    { q: 'Что верно?', o: ['You must to go.', 'You must go.'], a: 1, w: 'После must — без to.' },
    { q: 'Что значит «You mustn’t touch it»?', o: ['Это необязательно', 'Это нельзя'], a: 1, w: 'mustn’t = нельзя.' }
  ]
},
{ id: 'en-adverbs', level: 'A2', title: 'Как часто и как именно: always, quickly', sub: 'Наречия частоты и образа действия',
  blocks: [
    { t: 'h', h: 'Как часто' },
    { t: 'table', head: ['', 'Слово', 'Пример'], rows: [
      ['100%', '<b>always</b>', 'I always drink tea.'], ['90%', '<b>usually</b>', 'She usually gets up early.'],
      ['70%', '<b>often</b>', 'We often go out.'], ['40%', '<b>sometimes</b>', 'He sometimes cooks.'],
      ['10%', '<b>rarely</b>', 'They rarely call.'], ['0%', '<b>never</b>', 'I never smoke.']] },
    { t: 'p', h: '<b>Место</b> такого слова: <b>перед</b> смысловым глаголом (<b>I always drink</b>), но <b>после</b> глагола <b>to be</b> (<b>She is always late</b>).' },
    { t: 'h', h: 'Как именно (наречия образа действия)' },
    { t: 'p', h: 'Обычно прилагательное + <b>-ly</b>: <b>quick → quickly</b>, <b>careful → carefully</b>, <b>easy → easily</b>. Особые: <b>good → well</b>, <b>fast → fast</b>, <b>hard → hard</b>.' },
    { t: 'ex', rows: [
      ['He usually drives to work.', 'Обычно он ездит на работу на машине.'], ['She is always happy.', 'Она всегда радостна.'],
      ['Please speak slowly.', 'Пожалуйста, говорите медленно.'], ['She plays the piano well.', 'Она хорошо играет на пианино.']] },
    { t: 'warn', h: 'Прилагательное описывает <b>предмет</b> (<b>a good singer</b>), а наречие — <b>действие</b> (<b>sings well</b>). «She sings good» — ошибка.' }
  ],
  quiz: [
    { q: 'I ___ drink coffee in the morning. (всегда)', o: ['always', 'never', 'rarely'], a: 0, w: 'always = всегда.' },
    { q: 'She ___ late. (всегда опаздывает)', o: ['always is', 'is always', 'is late always'], a: 1, w: 'После be: is always.' },
    { q: 'We ___ go to the cinema. (редко)', o: ['rarely', 'always', 'usually'], a: 0, w: 'rarely = редко.' },
    { q: 'He drives ___ . (carefully)', t: ['carefully'], w: 'careful → carefully.' },
    { q: 'She sings ___ . (good)', o: ['good', 'well', 'goodly'], a: 1, w: 'Наречие от good — well.' },
    { q: 'He is a ___ driver. (careful)', o: ['careful', 'carefully'], a: 0, w: 'Перед существительным — прилагательное.' },
    { q: 'Where does «often» go? I ___ go to the park.', o: ['often', 'go often', 'often to'], a: 0, w: 'Перед глаголом: I often go.' },
    { q: 'Прилагательное quick → наречие:', t: ['quickly'], w: 'quick → quickly.' }
  ]
}
);
