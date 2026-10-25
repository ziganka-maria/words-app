// Грамматика английского, уровень A1. Блоки: p/h/ex/table/tip/warn. Вопросы: o — варианты (a — номер верного), t — ответы для ввода.
window.GRAMMAR = window.GRAMMAR || {};
GRAMMAR.en = [
{ id: 'en-be', level: 'A1', title: 'Глагол to be: am, is, are', sub: 'Я студент, она дома, мы голодны',
  blocks: [
    { t: 'p', h: 'В русском мы говорим «Я студент» без всякого глагола. В английском глагол нужен <b>всегда</b>: <b>I am a student</b>. Этот глагол — <b>to be</b> («быть»), и в настоящем времени он меняется по лицам.' },
    { t: 'table', head: ['Кто', 'Форма', 'Кратко'], rows: [
      ['I', 'am', "I'm"], ['you', 'are', "you're"], ['he / she / it', 'is', "he's / she's / it's"],
      ['we', 'are', "we're"], ['they', 'are', "they're"]] },
    { t: 'h', h: 'Отрицание и вопрос' },
    { t: 'table', head: ['', 'Схема', 'Пример'], rows: [
      ['−', 'be + <b>not</b>', "She <b>isn't</b> at home. / I'm not tired."],
      ['?', 'be на первое место', '<b>Are</b> you hungry?'],
      ['краткий ответ', 'Yes, … am/is/are. No, … isn\'t/aren\'t.', "Is he a doctor? — Yes, he is. / No, he isn't."]] },
    { t: 'ex', rows: [
      ["I am from Russia.", 'Я из России.'], ["She is a teacher.", 'Она учитель.'], ["We are very tired.", 'Мы очень устали.'],
      ["Are they at school?", 'Они в школе?'], ["It is not expensive.", 'Это недорого.']] },
    { t: 'warn', h: 'Возраст и ощущения с <b>be</b>, а не с have: <b>I am 20</b> (не «I have 20»), <b>I am cold</b> (мне холодно), <b>I am hungry</b> (я голоден).' }
  ],
  quiz: [
    { q: 'She ___ a doctor.', o: ['am', 'is', 'are'], a: 1, w: 'she → is.' },
    { q: 'We ___ at home.', o: ['is', 'am', 'are'], a: 2, w: 'we → are.' },
    { q: 'I ___ 25 years old.', o: ['am', 'have', 'is'], a: 0, w: 'Возраст — с be: I am 25.' },
    { q: 'Mia ___ a student. (впишите)', t: ['is'], w: 'Mia = she → is.' },
    { q: '___ you hungry?', o: ['Is', 'Are', 'Do'], a: 1, w: 'Вопрос с be: Are you…?' },
    { q: 'It ___ cold today.', o: ['are', 'am', 'is'], a: 2, w: 'it → is.' },
    { q: 'Как сказать «Мне холодно»?', o: ['I have cold.', 'I am cold.', 'I cold.'], a: 1, w: 'Ощущения — с be: I am cold.' },
    { q: 'He ___ not at home. (впишите)', t: ['is'], w: 'He is not at home.' }
  ]
},
{ id: 'en-articles', level: 'A1', title: 'Артикли: a, an, the', sub: 'Почему «a cat», но «the cat»',
  blocks: [
    { t: 'p', h: 'В русском артиклей нет, поэтому с ними у русскоговорящих больше всего ошибок. Правило проще, чем кажется: артикль показывает, <b>о каком именно предмете</b> мы говорим.' },
    { t: 'table', head: ['Артикль', 'Когда', 'Пример'], rows: [
      ['<b>a / an</b>', 'один из многих, упоминаем впервые', 'I have <b>a</b> dog.'],
      ['<b>the</b>', 'известный, конкретный или единственный', '<b>The</b> dog is black. / <b>The</b> sun is hot.'],
      ['<b>—</b> (без артикля)', 'множественное число и неисчисляемое «вообще»', 'I like dogs. / I like music.']] },
    { t: 'p', h: '<b>an</b> ставим перед <b>гласным звуком</b>: <b>an</b> apple, <b>an</b> hour (h не читается). А <b>a</b> — перед согласным звуком: <b>a</b> university (читается «юни…»).' },
    { t: 'ex', rows: [
      ['I have a cat. The cat is white.', 'У меня есть кошка. Кошка белая.'], ['She is an engineer.', 'Она инженер.'],
      ['Close the door, please.', 'Закрой дверь, пожалуйста.'], ['We have breakfast at eight.', 'Мы завтракаем в восемь.']] },
    { t: 'tip', h: 'Без артикля: приёмы пищи (<b>have lunch</b>), языки (<b>speak English</b>), виды спорта (<b>play tennis</b>), большинство городов и стран (<b>in London</b>).' },
    { t: 'warn', h: 'Профессию называем <b>с артиклем</b>: <b>She is a teacher</b> (не «She is teacher»).' }
  ],
  quiz: [
    { q: 'I have ___ umbrella.', o: ['a', 'an', 'the'], a: 1, w: 'Umbrella начинается с гласного звука → an.' },
    { q: 'She is ___ engineer.', o: ['a', 'an', '—'], a: 1, w: 'Профессия с артиклем; engineer — гласный звук → an.' },
    { q: '___ sun is very hot today.', o: ['A', 'The', '—'], a: 1, w: 'Солнце одно — the.' },
    { q: 'He plays ___ football on Sunday.', o: ['a', 'the', '— (без артикля)'], a: 2, w: 'С видами спорта артикля нет.' },
    { q: 'I saw a cat. ___ cat was black.', o: ['A', 'The', '—'], a: 1, w: 'Вторая отсылка к уже названной кошке — the.' },
    { q: 'Oxford is ___ famous university.', o: ['a', 'an', 'the'], a: 0, w: 'University читается «юни…» — согласный звук → a.' },
    { q: 'We have ___ lunch at one.', o: ['a', 'the', '— (без артикля)'], a: 2, w: 'С приёмами пищи артикля нет.' },
    { q: 'Что верно?', o: ['She is teacher.', 'She is a teacher.'], a: 1, w: 'Перед профессией нужен артикль.' }
  ]
},
{ id: 'en-plural', level: 'A1', title: 'Множественное число существительных', sub: 'cat → cats, box → boxes, child → children',
  blocks: [
    { t: 'p', h: 'Обычно в конец слова просто добавляется <b>-s</b>. Но есть несколько правил и исключений.' },
    { t: 'table', head: ['Правило', 'Пример'], rows: [
      ['+ <b>s</b>', 'cat → cats, book → books'],
      ['после s, x, ch, sh — + <b>es</b>', 'bus → buses, box → boxes, watch → watches'],
      ['согласная + y → <b>ies</b>', 'city → cities, baby → babies'],
      ['f / fe → <b>ves</b> (в большинстве слов)', 'wife → wives, knife → knives; но roof → roofs'],
      ['гласная + y — просто <b>s</b>', 'day → days, boy → boys']] },
    { t: 'h', h: 'Особые формы (их надо выучить)' },
    { t: 'table', head: ['Один', 'Много'], rows: [
      ['man / woman', 'men / women'], ['child', 'children'], ['person', 'people'], ['foot / tooth', 'feet / teeth'],
      ['mouse', 'mice'], ['fish / sheep', 'fish / sheep (не меняются)']] },
    { t: 'tip', h: 'Некоторые слова бывают только во множественном числе: <b>trousers, jeans, glasses, scissors</b>. А <b>news</b>, <b>money</b>, <b>hair</b> — единственное число: <b>The news is good.</b>' }
  ],
  quiz: [
    { q: 'Множественное число от «city»:', o: ['citys', 'cities', 'cityes'], a: 1, w: 'Согласная + y → ies.' },
    { q: 'Множественное число от «box»:', o: ['boxs', 'boxes', 'boxies'], a: 1, w: 'После x → es.' },
    { q: 'Множественное число от «child»:', t: ['children'], w: 'child → children.' },
    { q: 'Множественное число от «woman»:', t: ['women'], w: 'woman → women.' },
    { q: 'Множественное число от «day»:', o: ['days', 'daies', 'dayes'], a: 0, w: 'Гласная + y — просто s.' },
    { q: 'Множественное число от «knife»:', o: ['knifes', 'knives', 'knifies'], a: 1, w: 'fe → ves.' },
    { q: 'Many ___ live in this city.', o: ['person', 'persons', 'people'], a: 2, w: 'Множественное от person — people.' },
    { q: 'I have two ___ (foot).', t: ['feet'], w: 'foot → feet.' }
  ]
},
{ id: 'en-this', level: 'A1', title: 'This, that, these, those', sub: 'Этот, тот, эти, те',
  blocks: [
    { t: 'p', h: 'Эти слова показывают, <b>близко</b> предмет или <b>далеко</b>, один он или несколько.' },
    { t: 'table', head: ['', 'Близко', 'Далеко'], rows: [['один предмет', '<b>this</b> (этот)', '<b>that</b> (тот)'], ['много', '<b>these</b> (эти)', '<b>those</b> (те)']] },
    { t: 'ex', rows: [
      ['This is my phone.', 'Это мой телефон.'], ['That is my school over there.', 'Вон там моя школа.'],
      ['These shoes are new.', 'Эти туфли новые.'], ['Those people are my neighbours.', 'Те люди — мои соседи.'],
      ['Is this seat free?', 'Это место свободно?']] },
    { t: 'tip', h: 'Знакомясь, говорим: <b>This is Anna</b> («Это Анна»). По телефону: <b>This is Tom</b> («Это Том»).' },
    { t: 'warn', h: 'После this/that — единственное число, после these/those — множественное: <b>this book</b>, <b>these books</b> (не «these book»).' }
  ],
  quiz: [
    { q: '___ is my bag. (в руках)', o: ['This', 'These', 'Those'], a: 0, w: 'Один предмет рядом — this.' },
    { q: '___ shoes are new. (на мне)', o: ['This', 'That', 'These'], a: 2, w: 'Много предметов рядом — these.' },
    { q: 'Look at ___ mountains over there!', o: ['this', 'these', 'those'], a: 2, w: 'Много и далеко — those.' },
    { q: '___ is my school over there.', o: ['This', 'That', 'These'], a: 1, w: 'Один и далеко — that.' },
    { q: 'Что верно?', o: ['These book is old.', 'These books are old.', 'This books are old.'], a: 1, w: 'Множественное число везде: these books are.' },
    { q: 'Anna, ___ is my friend Tom.', o: ['this', 'these', 'those'], a: 0, w: 'Знакомим: This is…' },
    { q: 'Is ___ seat free? (рядом со мной)', o: ['this', 'those', 'these'], a: 0, w: 'One seat рядом — this.' },
    { q: '___ children are my cousins. (далеко)', o: ['This', 'That', 'Those'], a: 2, w: 'Много и далеко — those.' }
  ]
},
{ id: 'en-possessive', level: 'A1', title: 'Мой, твой и ’s: чьё это?', sub: 'my, your, his, her… и Tom’s book',
  blocks: [
    { t: 'p', h: 'Чтобы сказать «чьё», есть два способа: притяжательные слова и окончание <b>’s</b>.' },
    { t: 'table', head: ['Кто', 'Чей', 'Пример'], rows: [
      ['I', '<b>my</b>', 'my house'], ['you', '<b>your</b>', 'your bag'], ['he', '<b>his</b>', 'his car'], ['she', '<b>her</b>', 'her phone'],
      ['it', '<b>its</b>', 'its tail'], ['we', '<b>our</b>', 'our school'], ['they', '<b>their</b>', 'their dog']] },
    { t: 'ex', rows: [
      ["This is Tom's bike.", 'Это велосипед Тома.'], ["My sister's name is Kate.", 'Мою сестру зовут Кейт.'],
      ['Whose book is this? — It is mine.', 'Чья это книга? — Моя.'], ['The children’s toys are here.', 'Игрушки детей здесь.']] },
    { t: 'tip', h: 'Выбор <b>his/her</b> зависит от <b>владельца</b>, а не от предмета: <b>Tom and his sister</b>, <b>Anna and her brother</b>.' },
    { t: 'warn', h: '<b>its</b> («его, её» о предмете) пишется без апострофа. <b>it’s</b> = it is: <b>It’s cold</b>.' }
  ],
  quiz: [
    { q: 'Anna has a brother. ___ brother is a doctor.', o: ['His', 'Her', 'She'], a: 1, w: 'Владелец — Anna (she) → her.' },
    { q: 'Tom and ___ sister live here.', o: ['her', 'his', 'he'], a: 1, w: 'Владелец — Tom → his.' },
    { q: 'We love ___ new flat.', o: ['we', 'us', 'our'], a: 2, w: 'Притяжательное для we — our.' },
    { q: 'Как сказать «машина Мэри»?', o: ["Mary's car", 'Marys car', 'Mary car'], a: 0, w: 'Владелец + ’s: Mary’s car.' },
    { q: 'The dog is happy. ___ tail is long.', o: ['It’s', 'Its', 'It'], a: 1, w: 'Для животного/предмета — its (без апострофа).' },
    { q: 'Whose bag is this? — It is ___.', o: ['my', 'mine', 'me'], a: 1, w: 'Без существительного — mine.' },
    { q: 'They love ___ children.', o: ['they', 'their', 'them'], a: 1, w: 'Притяжательное для they — their.' },
    { q: 'Что верно?', o: ["It's name is Max.", 'Its name is Max.'], a: 1, w: 'Its — притяжательное, без апострофа.' }
  ]
},
{ id: 'en-havegot', level: 'A1', title: 'Have got и have: у меня есть', sub: 'I have a car / I’ve got a car',
  blocks: [
    { t: 'p', h: 'Чтобы сказать «у меня есть», в английском используют <b>have</b> или <b>have got</b>. Значение одно и то же.' },
    { t: 'table', head: ['', 'have got (чаще в Британии)', 'have (чаще в США)'], rows: [
      ['+', 'I <b>have got</b> a car. / She <b>has got</b> a car.', 'I <b>have</b> a car. / She <b>has</b> a car.'],
      ['−', "I <b>haven't got</b> a car. / She <b>hasn't got</b>…", "I <b>don't have</b> a car. / She <b>doesn't have</b>…"],
      ['?', '<b>Have</b> you <b>got</b> a car?', '<b>Do</b> you <b>have</b> a car?']] },
    { t: 'ex', rows: [
      ["I've got two brothers.", 'У меня два брата.'], ["She has got blue eyes.", 'У неё голубые глаза.'],
      ["Have you got a pen? — Yes, I have.", 'У тебя есть ручка? — Да.'], ["We don't have any bread.", 'У нас нет хлеба.']] },
    { t: 'warn', h: 'С he/she/it — <b>has</b>, а не «have»: <b>He has</b>. А в отрицании и вопросе без got нужен <b>do/does</b>: <b>Does he have a car?</b>' },
    { t: 'tip', h: 'Have got <b>нельзя</b> использовать для действий: <b>have breakfast, have a shower</b> — только have.' }
  ],
  quiz: [
    { q: 'She ___ got blue eyes.', o: ['have', 'has', 'is'], a: 1, w: 'she → has got.' },
    { q: 'I ___ got a car.', o: ['hasn’t', 'haven’t', 'don’t'], a: 1, w: 'I → haven’t got.' },
    { q: '___ you got a pen?', o: ['Do', 'Have', 'Are'], a: 1, w: 'Have you got…?' },
    { q: '___ you have a pen? (США)', o: ['Do', 'Have', 'Does'], a: 0, w: 'Без got — с do.' },
    { q: 'He ___ have a car. (отрицание)', o: ["doesn't", "don't", "hasn't"], a: 0, w: 'he → doesn’t have.' },
    { q: 'We often ___ breakfast at seven.', o: ['have got', 'have', 'are'], a: 1, w: 'Действие — только have.' },
    { q: 'They ___ two children. (впишите: have или has)', t: ['have'], w: 'they → have.' },
    { q: 'Что верно?', o: ['He have a dog.', 'He has a dog.'], a: 1, w: 'he → has.' }
  ]
},
{ id: 'en-present1', level: 'A1', title: 'Present Simple: что я делаю обычно', sub: 'I work, she works, we don’t work',
  blocks: [
    { t: 'p', h: '<b>Present Simple</b> — время для <b>привычек, расписаний и фактов</b>: что вы делаете обычно, часто, каждый день.' },
    { t: 'table', head: ['Кто', 'Глагол', 'Пример'], rows: [
      ['I / you / we / they', 'просто глагол', 'I <b>work</b>, they <b>live</b>'],
      ['he / she / it', 'глагол + <b>s</b>', 'she <b>works</b>, he <b>lives</b>']] },
    { t: 'p', h: 'Пишется <b>-es</b> после <b>s, sh, ch, x, o</b>: <b>watch → watches</b>, <b>go → goes</b>; <b>согласная + y → ies</b>: <b>study → studies</b>, но гласная + y — просто s: <b>play → plays</b>. Особый глагол: <b>have → has</b>.' },
    { t: 'h', h: 'Отрицание: don’t / doesn’t' },
    { t: 'table', head: ['Кто', 'Схема', 'Пример'], rows: [
      ['I / you / we / they', "<b>don't</b> + глагол", "I don't drink coffee."],
      ['he / she / it', "<b>doesn't</b> + глагол (без s!)", "She doesn't drink coffee."]] },
    { t: 'ex', rows: [
      ['I get up at seven.', 'Я встаю в семь.'], ['She works in a bank.', 'Она работает в банке.'],
      ['He studies English.', 'Он изучает английский.'], ["We don't watch TV in the morning.", 'Утром мы не смотрим телевизор.'],
      ["It doesn't rain here in summer.", 'Здесь летом не бывает дождей.']] },
    { t: 'tip', h: 'Слова-подсказки Present Simple: <b>always, usually, often, sometimes, never, every day, on Mondays</b>.' },
    { t: 'warn', h: 'После <b>doesn’t</b> окончание -s уже не нужно: <b>She doesn’t work</b>, а не «She doesn’t works».' }
  ],
  quiz: [
    { q: 'She ___ in a bank.', o: ['work', 'works', 'is work'], a: 1, w: 'she → глагол + s.' },
    { q: 'He ___ English every day. (study)', o: ['studys', 'studies', 'study'], a: 1, w: 'согласная + y → ies.' },
    { q: 'My brother ___ football on Sunday. (play)', t: ['plays'], w: 'he/she/it → plays.' },
    { q: 'We ___ watch TV in the morning.', o: ["don't", "doesn't", "aren't"], a: 0, w: 'we → don’t.' },
    { q: 'She ___ drink coffee.', o: ["don't", "doesn't", "isn't"], a: 1, w: 'she → doesn’t.' },
    { q: 'He doesn’t ___ meat.', o: ['eats', 'eat', 'eating'], a: 1, w: 'После doesn’t — глагол без s.' },
    { q: 'Как правильно?', o: ['He go to school.', 'He goes to school.', 'He gos to school.'], a: 1, w: 'go → goes (после o добавляем es).' },
    { q: 'Какое слово подходит к Present Simple?', o: ['now', 'usually', 'at the moment'], a: 1, w: 'Usually — привычка, это Present Simple.' }
  ]
},
{ id: 'en-present2', level: 'A1', title: 'Present Simple: вопросы', sub: 'Do you…? Does she…? Where do you live?',
  blocks: [
    { t: 'p', h: 'Вопрос в Present Simple строится с помощью <b>do</b> или <b>does</b>. Смысловой глагол остаётся в начальной форме — <b>без -s</b>.' },
    { t: 'table', head: ['Кто', 'Схема', 'Пример'], rows: [
      ['I / you / we / they', '<b>Do</b> + кто + глагол?', '<b>Do</b> you like tea?'],
      ['he / she / it', '<b>Does</b> + кто + глагол?', '<b>Does</b> she like tea?']] },
    { t: 'h', h: 'Вопросительное слово — в начало' },
    { t: 'table', head: ['Вопрос', 'Ответ'], rows: [
      ['<b>Where</b> do you live?', 'I live in Moscow.'], ['<b>What</b> does he do?', 'He is a driver.'],
      ['<b>When</b> do they get up?', 'At seven.'], ['<b>Why</b> does she study English?', 'Because she loves it.']] },
    { t: 'ex', rows: [
      ['Do you speak English? — Yes, I do.', 'Ты говоришь по-английски? — Да.'], ["Does he play tennis? — No, he doesn't.", 'Он играет в теннис? — Нет.'],
      ['What time do you start work?', 'Во сколько ты начинаешь работу?']] },
    { t: 'warn', h: '<b>Does</b> уже показывает he/she/it, поэтому -s у глагола не нужен: <b>Does he work?</b> (не «Does he works?»). И с <b>be</b> do не используется: <b>Are you tired?</b>' }
  ],
  quiz: [
    { q: '___ you like tea?', o: ['Do', 'Does', 'Are'], a: 0, w: 'you → Do.' },
    { q: '___ she live here?', o: ['Do', 'Does', 'Is'], a: 1, w: 'she → Does.' },
    { q: 'Does he ___ in a bank?', o: ['works', 'work', 'working'], a: 1, w: 'После Does — глагол без s.' },
    { q: '___ do you live? — In Moscow.', o: ['What', 'Where', 'Who'], a: 1, w: 'Ответ «в Москве» — Where.' },
    { q: 'Do they speak French? — Yes, they ___.', t: ['do'], w: 'Краткий ответ: Yes, they do.' },
    { q: 'Does she play tennis? — No, she ___.', t: ["doesn't", 'does not'], w: 'No, she doesn’t.' },
    { q: 'Что верно?', o: ['Does he likes coffee?', 'Does he like coffee?', 'Do he like coffee?'], a: 1, w: 'Does + he + like (без s).' },
    { q: '___ you tired? (глагол be)', o: ['Do', 'Does', 'Are'], a: 2, w: 'С be вопрос без do: Are you…?' }
  ]
},
{ id: 'en-there', level: 'A1', title: 'There is / there are', sub: 'В комнате есть стол, в саду — деревья',
  blocks: [
    { t: 'p', h: 'Чтобы сказать, что что-то <b>есть</b> в каком-то месте, говорим <b>there is</b> (один предмет) или <b>there are</b> (несколько).' },
    { t: 'table', head: ['', 'Один предмет', 'Несколько'], rows: [
      ['+', 'There <b>is</b> a bank here.', 'There <b>are</b> two banks here.'],
      ['−', "There <b>isn't</b> a park.", "There <b>aren't</b> any parks."],
      ['?', '<b>Is there</b> a park?', '<b>Are there</b> any parks?']] },
    { t: 'ex', rows: [
      ['There is a cat on the sofa.', 'На диване сидит кошка.'], ['There are five people in the room.', 'В комнате пять человек.'],
      ['Is there a shop near here? — Yes, there is.', 'Рядом есть магазин? — Да.'], ['How many students are there?', 'Сколько здесь студентов?']] },
    { t: 'tip', h: 'В утверждениях с множественным числом обычно <b>some</b>, в отрицаниях и вопросах — <b>any</b>: <b>There are some apples. Are there any apples?</b>' },
    { t: 'warn', h: 'В русском порядок слов «в комнате есть стол», а в английском фраза начинается с <b>there is/are</b>, а место — в конце: <b>There is a table in the room</b>.' }
  ],
  quiz: [
    { q: 'There ___ a book on the table.', o: ['is', 'are', 'am'], a: 0, w: 'a book — один предмет → is.' },
    { q: 'There ___ three chairs in the room.', o: ['is', 'are', 'be'], a: 1, w: 'three chairs → are.' },
    { q: '___ there a shop near here?', o: ['Are', 'Is', 'Do'], a: 1, w: 'a shop → Is there…?' },
    { q: 'There aren’t ___ apples.', o: ['some', 'any', 'a'], a: 1, w: 'В отрицании — any.' },
    { q: 'Is there a park? — No, ___.', o: ["there isn't", "it isn't", "isn't there"], a: 0, w: 'Краткий ответ: No, there isn’t.' },
    { q: 'How many people ___ there in the class?', o: ['is', 'are', 'does'], a: 1, w: 'people — множественное → are there.' },
    { q: 'Что верно?', o: ['In the room is a table.', 'There is a table in the room.'], a: 1, w: 'Фраза начинается с There is.' },
    { q: 'There ___ some milk in the fridge.', o: ['is', 'are', 'have'], a: 0, w: 'Milk неисчисляемое → is.' }
  ]
},
{ id: 'en-can', level: 'A1', title: 'Can и can’t: я умею, мне можно', sub: 'I can swim, can I sit here?',
  blocks: [
    { t: 'p', h: '<b>Can</b> — «мочь, уметь». Он не меняется ни по лицам, ни по числам, и после него глагол идёт <b>без to</b>.' },
    { t: 'table', head: ['', 'Схема', 'Пример'], rows: [
      ['+', 'кто + <b>can</b> + глагол', 'She <b>can</b> swim.'],
      ['−', "кто + <b>can't</b> (cannot) + глагол", "I <b>can't</b> swim."],
      ['?', '<b>Can</b> + кто + глагол?', '<b>Can</b> you swim?']] },
    { t: 'ex', rows: [
      ['I can speak three languages.', 'Я говорю на трёх языках.'], ["He can't drive.", 'Он не умеет водить.'],
      ['Can I sit here?', 'Можно мне сесть здесь?'], ['Can you help me, please?', 'Ты можешь мне помочь?'],
      ["Can you hear me? — No, I can't.", 'Ты меня слышишь? — Нет.']] },
    { t: 'tip', h: 'Через <b>can</b> удобно просить: <b>Can I have a coffee?</b> («Можно кофе?») и спрашивать разрешения: <b>Can I open the window?</b>' },
    { t: 'warn', h: 'Не говорим «She cans» и «She can to swim». Правильно: <b>She can swim</b>. Вопрос без do: <b>Can you…?</b>, а не «Do you can…?».' }
  ],
  quiz: [
    { q: 'She ___ swim very well.', o: ['can', 'cans', 'can to'], a: 0, w: 'Can не меняется и без to.' },
    { q: 'I ___ drive. I’m too young.', o: ["can't", "don't can", "not can"], a: 0, w: 'Отрицание — can’t.' },
    { q: '___ you speak French?', o: ['Do', 'Can', 'Are'], a: 1, w: 'Can you speak…?' },
    { q: 'Can I ___ here?', o: ['to sit', 'sitting', 'sit'], a: 2, w: 'После can — глагол без to.' },
    { q: 'He can ___ English and French. (speak)', t: ['speak'], w: 'can + speak.' },
    { q: 'Как вежливо попросить кофе?', o: ['Can I have a coffee?', 'I can coffee.', 'Do I can a coffee?'], a: 0, w: 'Can I have…?' },
    { q: 'Can you play the piano? — No, I ___.', t: ["can't", 'cannot'], w: 'No, I can’t.' },
    { q: 'Что верно?', o: ['She can swims.', 'She can swim.'], a: 1, w: 'Глагол после can без s.' }
  ]
},
{ id: 'en-continuous', level: 'A1', title: 'Present Continuous: что происходит сейчас', sub: 'I am reading, she is cooking',
  blocks: [
    { t: 'p', h: '<b>Present Continuous</b> — действие, которое происходит <b>прямо сейчас</b> или в этот период. Формула: <b>am / is / are + глагол с -ing</b>.' },
    { t: 'table', head: ['', 'Схема', 'Пример'], rows: [
      ['+', 'be + глагол<b>-ing</b>', 'I <b>am reading</b>. She <b>is cooking</b>.'],
      ['−', 'be + <b>not</b> + глагол-ing', "They <b>aren't</b> working."],
      ['?', 'be + кто + глагол-ing?', '<b>Are</b> you <b>listening</b>?']] },
    { t: 'p', h: 'Правила написания -ing: <b>make → making</b> (e пропадает), <b>run → running</b> (согласная удваивается), <b>lie → lying</b>.' },
    { t: 'ex', rows: [
      ['Look! It is raining.', 'Смотри! Идёт дождь.'], ["I'm studying English now.", 'Сейчас я учу английский.'],
      ['What are you doing?', 'Что ты делаешь?'], ["He isn't sleeping.", 'Он не спит.']] },
    { t: 'tip', h: 'Слова-подсказки: <b>now, at the moment, today, look!, listen!</b>' },
    { t: 'warn', h: 'Глаголы состояния обычно <b>не</b> используются в Continuous: <b>like, love, want, need, know, understand</b>. Говорим <b>I want tea</b>, а не «I am wanting tea».' }
  ],
  quiz: [
    { q: 'She ___ a book now.', o: ['reads', 'is reading', 'read'], a: 1, w: 'Now → Present Continuous.' },
    { q: 'They ___ football at the moment.', o: ['are playing', 'play', 'plays'], a: 0, w: 'At the moment → are playing.' },
    { q: 'I am ___ (make) dinner.', t: ['making'], w: 'make → making (e пропадает).' },
    { q: 'He is ___ (run) in the park.', t: ['running'], w: 'run → running (удвоение).' },
    { q: '___ you listening to me?', o: ['Do', 'Are', 'Is'], a: 1, w: 'Are you listening…?' },
    { q: 'Look! It ___ .', o: ["rains", "is raining", "rained"], a: 1, w: 'Look! → прямо сейчас.' },
    { q: 'Что верно?', o: ['I am wanting a coffee.', 'I want a coffee.'], a: 1, w: 'Want — глагол состояния, без -ing.' },
    { q: 'Мы не спим. We ___ sleeping.', o: ["don't", "aren't", "isn't"], a: 1, w: 'we → aren’t sleeping.' }
  ]
},
{ id: 'en-prep', level: 'A1', title: 'Предлоги in, on, at', sub: 'in May, on Monday, at six',
  blocks: [
    { t: 'p', h: 'Три главных предлога <b>in, on, at</b> работают и для <b>времени</b>, и для <b>места</b>. Можно думать так: <b>in</b> — внутри большого, <b>on</b> — на поверхности или в «днях», <b>at</b> — в точке.' },
    { t: 'table', head: ['', 'in', 'on', 'at'], rows: [
      ['<b>время</b>', 'in May, in 2024, in summer, in the morning', 'on Monday, on 5 May, on my birthday', 'at six, at night, at the weekend'],
      ['<b>место</b>', 'in London, in the room, in a box', 'on the table, on the wall, on the second floor', 'at home, at school, at the bus stop']] },
    { t: 'ex', rows: [
      ['My birthday is in May.', 'Мой день рождения в мае.'], ['The lesson starts at nine on Monday.', 'Урок начинается в девять в понедельник.'],
      ['The keys are on the table.', 'Ключи на столе.'], ['I am at home. She is in the kitchen.', 'Я дома. Она на кухне.']] },
    { t: 'warn', h: 'Исключения: <b>in the morning / in the afternoon / in the evening</b>, но <b>at night</b>. И <b>at the weekend</b> (в Британии), а в США — <b>on the weekend</b>.' }
  ],
  quiz: [
    { q: 'My birthday is ___ May.', o: ['in', 'on', 'at'], a: 0, w: 'Месяц → in.' },
    { q: 'The lesson starts ___ nine.', o: ['in', 'on', 'at'], a: 2, w: 'Точное время → at.' },
    { q: 'We have a party ___ Saturday.', o: ['in', 'on', 'at'], a: 1, w: 'День недели → on.' },
    { q: 'I get up ___ the morning.', o: ['in', 'on', 'at'], a: 0, w: 'in the morning.' },
    { q: 'I sleep ___ night.', o: ['in', 'on', 'at'], a: 2, w: 'at night — исключение.' },
    { q: 'The book is ___ the table.', o: ['in', 'on', 'at'], a: 1, w: 'На поверхности → on.' },
    { q: 'She lives ___ London.', o: ['in', 'on', 'at'], a: 0, w: 'Город → in.' },
    { q: 'I am ___ home now.', o: ['in', 'on', 'at'], a: 2, w: 'at home — устойчивое сочетание.' }
  ]
},
{ id: 'en-object', level: 'A1', title: 'Me, him, them и some / any', sub: 'Call me, I see them, I have some milk',
  blocks: [
    { t: 'p', h: 'Когда местоимение — <b>не подлежащее</b>, а «кого? кому?», его форма меняется.' },
    { t: 'table', head: ['Кто делает', 'Кого? Кому?'], rows: [
      ['I', '<b>me</b>'], ['you', '<b>you</b>'], ['he', '<b>him</b>'], ['she', '<b>her</b>'], ['it', '<b>it</b>'], ['we', '<b>us</b>'], ['they', '<b>them</b>']] },
    { t: 'ex', rows: [
      ['Call me tomorrow.', 'Позвони мне завтра.'], ['I love her.', 'Я люблю её.'], ['Tom helps us.', 'Том помогает нам.'], ['I see them every day.', 'Я вижу их каждый день.']] },
    { t: 'h', h: 'Some и any' },
    { t: 'table', head: ['', 'Слово', 'Пример'], rows: [
      ['утверждение', '<b>some</b>', 'I have <b>some</b> milk.'],
      ['отрицание', '<b>any</b>', "I haven't got <b>any</b> milk."],
      ['вопрос', '<b>any</b>', 'Have you got <b>any</b> milk?'],
      ['предложение, просьба', '<b>some</b>', 'Would you like <b>some</b> tea?']] },
    { t: 'warn', h: 'После глагола ставим <b>me, him, them</b>, а не «I, he, they»: <b>Help me</b> (не «Help I»).' }
  ],
  quiz: [
    { q: 'Tom is my friend. I like ___.', o: ['he', 'him', 'his'], a: 1, w: 'Кого? — him.' },
    { q: 'Anna is here. Can you help ___?', o: ['she', 'her', 'hers'], a: 1, w: 'Кому? — her.' },
    { q: 'My parents are at home. I call ___ every day.', o: ['they', 'their', 'them'], a: 2, w: 'Кого? — them.' },
    { q: 'Come with ___, please. (мы)', o: ['we', 'us', 'our'], a: 1, w: 'С кем? — us.' },
    { q: 'I have ___ friends in London.', o: ['some', 'any', 'a'], a: 0, w: 'В утверждении — some.' },
    { q: 'I haven’t got ___ money.', o: ['some', 'any', 'a'], a: 1, w: 'В отрицании — any.' },
    { q: 'Have you got ___ questions?', o: ['some', 'any', 'an'], a: 1, w: 'В вопросе — any.' },
    { q: 'Would you like ___ biscuits?', o: ['some', 'any', 'a'], a: 0, w: 'В предложении — some.' }
  ]
},
{ id: 'en-was', level: 'A1', title: 'Was и were: я был, мы были', sub: 'I was at home, they were late',
  blocks: [
    { t: 'p', h: 'Это прошедшее время от <b>to be</b>. Всего две формы:' },
    { t: 'table', head: ['Кто', 'Форма'], rows: [['I / he / she / it', '<b>was</b>'], ['you / we / they', '<b>were</b>']] },
    { t: 'table', head: ['', 'Схема', 'Пример'], rows: [
      ['−', "<b>wasn't / weren't</b>", "She <b>wasn't</b> at home."],
      ['?', '<b>Was / Were</b> + кто?', '<b>Were</b> you tired?']] },
    { t: 'ex', rows: [
      ['I was in London last week.', 'На прошлой неделе я был в Лондоне.'], ['They were very happy.', 'Они были очень счастливы.'],
      ["He wasn't at work yesterday.", 'Вчера его не было на работе.'], ['Where were you last night?', 'Где ты был вчера вечером?']] },
    { t: 'tip', h: 'Слова-подсказки прошедшего: <b>yesterday, last week, in 2019, two days ago</b>.' },
    { t: 'warn', h: 'Вопрос и отрицание с <b>was/were</b> строятся <b>без did</b>: <b>Was he late?</b> (не «Did he was late?»).' }
  ],
  quiz: [
    { q: 'I ___ at home yesterday.', o: ['was', 'were', 'am'], a: 0, w: 'I → was.' },
    { q: 'They ___ very happy.', o: ['was', 'were', 'are'], a: 1, w: 'they → were.' },
    { q: 'She ___ late for work. (отрицание)', o: ["wasn't", "weren't", "didn't"], a: 0, w: 'she → wasn’t.' },
    { q: '___ you tired last night?', o: ['Was', 'Were', 'Did'], a: 1, w: 'you → Were.' },
    { q: 'We ___ in Spain last summer. (впишите)', t: ['were'], w: 'we → were.' },
    { q: 'Where ___ she yesterday?', o: ['was', 'were', 'is'], a: 0, w: 'she → was.' },
    { q: 'Что верно?', o: ['Did he was late?', 'Was he late?'], a: 1, w: 'С was/were — без did.' },
    { q: 'It ___ a nice day. (впишите)', t: ['was'], w: 'it → was.' }
  ]
},
{ id: 'en-past1', level: 'A1', title: 'Past Simple: что было', sub: 'I worked, she went, we saw',
  blocks: [
    { t: 'p', h: '<b>Past Simple</b> — действие, которое <b>закончилось</b> в прошлом. У правильных глаголов добавляем <b>-ed</b>, а у неправильных форму нужно <b>выучить</b>.' },
    { t: 'table', head: ['Правило', 'Пример'], rows: [
      ['+ <b>ed</b>', 'work → worked, play → played'],
      ['глагол на e → + <b>d</b>', 'live → lived, like → liked'],
      ['согласная + y → <b>ied</b>', 'study → studied, try → tried'],
      ['краткий гласный + согласная → удвоение', 'stop → stopped, plan → planned']] },
    { t: 'h', h: 'Частые неправильные глаголы' },
    { t: 'table', head: ['Сейчас', 'Прошлое'], rows: [
      ['go', 'went'], ['see', 'saw'], ['eat', 'ate'], ['have', 'had'], ['buy', 'bought'], ['come', 'came'], ['make', 'made'], ['take', 'took'], ['write', 'wrote'], ['get', 'got']] },
    { t: 'ex', rows: [
      ['I worked all day yesterday.', 'Вчера я работал весь день.'], ['She went to the cinema on Saturday.', 'В субботу она ходила в кино.'],
      ['We saw a good film.', 'Мы смотрели хороший фильм.'], ['He bought a new car last year.', 'В прошлом году он купил новую машину.']] },
    { t: 'tip', h: 'Форма прошедшего одна для <b>всех лиц</b>: I went, he went, they went. Добавлять -s не нужно.' },
    { t: 'warn', h: '<b>-ed</b> читается по-разному: <b>worked</b> [т], <b>played</b> [д], <b>wanted</b> [ид].' }
  ],
  quiz: [
    { q: 'Yesterday I ___ at home.', o: ['work', 'worked', 'works'], a: 1, w: 'Вчера → Past Simple: worked.' },
    { q: 'She ___ to the cinema last week. (go)', t: ['went'], w: 'go → went.' },
    { q: 'We ___ a nice film. (see)', t: ['saw'], w: 'see → saw.' },
    { q: 'He ___ a new car last year. (buy)', t: ['bought'], w: 'buy → bought.' },
    { q: 'They ___ in London in 2019. (live)', t: ['lived'], w: 'live → lived.' },
    { q: 'I ___ English at school. (study)', t: ['studied'], w: 'study → studied.' },
    { q: 'Как правильно?', o: ['He goed home.', 'He went home.', 'He go home.'], a: 1, w: 'go — неправильный глагол: went.' },
    { q: 'Прошедшее от «eat»:', t: ['ate'], w: 'eat → ate.' }
  ]
},
{ id: 'en-past2', level: 'A1', title: 'Past Simple: отрицания и вопросы', sub: 'I didn’t go, Did you see it?',
  blocks: [
    { t: 'p', h: 'В отрицании и вопросах прошедшего помощником становится <b>did</b>, а смысловой глагол снова возвращается в <b>начальную форму</b> (без -ed и без неправильной формы).' },
    { t: 'table', head: ['', 'Схема', 'Пример'], rows: [
      ['+', 'глагол в прошедшем', 'She <b>went</b> home.'],
      ['−', "<b>didn't</b> + начальная форма", "She <b>didn't go</b> home."],
      ['?', '<b>Did</b> + кто + начальная форма?', '<b>Did</b> she <b>go</b> home?'],
      ['краткие ответы', 'Yes, … did. / No, … didn\'t.', "Did you see it? — Yes, I did."]] },
    { t: 'ex', rows: [
      ["I didn't watch TV last night.", 'Вчера вечером я не смотрел телевизор.'], ['Did you enjoy the party?', 'Тебе понравилась вечеринка?'],
      ['What did you eat for lunch?', 'Что ты ел на обед?'], ['Where did they go?', 'Куда они пошли?']] },
    { t: 'warn', h: 'Прошедшее время показывает только <b>did</b>. Поэтому <b>Did you went?</b> и <b>I didn’t went</b> — ошибки. Правильно: <b>Did you go?</b>, <b>I didn’t go</b>.' },
    { t: 'tip', h: 'С <b>was / were</b> did не нужен: <b>Was she tired?</b>' }
  ],
  quiz: [
    { q: 'I ___ watch TV last night.', o: ["didn't", "don't", "wasn't"], a: 0, w: 'Отрицание прошедшего — didn’t.' },
    { q: '___ you enjoy the party?', o: ['Do', 'Did', 'Were'], a: 1, w: 'Вопрос прошедшего — Did.' },
    { q: 'Did she ___ home?', o: ['went', 'go', 'goes'], a: 1, w: 'После did — начальная форма.' },
    { q: 'He didn’t ___ the answer. (know)', t: ['know'], w: 'didn’t + know.' },
    { q: 'What ___ you eat for lunch?', o: ['do', 'did', 'were'], a: 1, w: 'What did you eat…?' },
    { q: 'Did they see the film? — Yes, they ___.', t: ['did'], w: 'Краткий ответ: Yes, they did.' },
    { q: 'Что верно?', o: ["I didn't went to school.", "I didn't go to school."], a: 1, w: 'После didn’t — начальная форма.' },
    { q: '___ he late for work? (be)', o: ['Did', 'Was', 'Does'], a: 1, w: 'С be — без did: Was he late?' }
  ]
}
];
