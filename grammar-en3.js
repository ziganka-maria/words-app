// Грамматика английского, уровень A2 (часть 2)
GRAMMAR.en.push(
{ id: 'en-pastcont', level: 'A2', title: 'Past Continuous: что происходило', sub: 'I was reading when you called',
  blocks: [
    { t: 'p', h: '<b>Past Continuous</b> описывает действие, которое <b>было в процессе</b> в какой-то момент прошлого. Формула: <b>was / were + глагол-ing</b>.' },
    { t: 'table', head: ['', 'Схема', 'Пример'], rows: [
      ['+', 'was / were + глагол-ing', 'I <b>was reading</b>. They <b>were playing</b>.'],
      ['−', "wasn't / weren't + глагол-ing", "She <b>wasn't sleeping</b>."],
      ['?', 'Was / Were + кто + глагол-ing?', '<b>Were</b> you <b>working</b>?']] },
    { t: 'h', h: 'Past Continuous + Past Simple' },
    { t: 'p', h: 'Длинное действие («фон») — в Continuous, а то, что его <b>прервало</b>, — в Past Simple. Союзы: <b>when</b> (когда), <b>while</b> (пока).' },
    { t: 'ex', rows: [
      ['I was cooking when the phone rang.', 'Я готовил, когда зазвонил телефон.'], ['While she was walking, it started to rain.', 'Пока она шла, начался дождь.'],
      ['What were you doing at nine?', 'Что ты делал в девять?'], ['We were watching TV all evening.', 'Мы смотрели телевизор весь вечер.']] },
    { t: 'tip', h: '<b>While</b> обычно стоит перед длинным действием (Past Continuous), <b>when</b> — перед коротким (Past Simple).' },
    { t: 'warn', h: 'Глаголы состояния (like, know, want) в Continuous не употребляются: <b>I knew the answer</b>, а не «I was knowing».' }
  ],
  quiz: [
    { q: 'I ___ when you called. (sleep)', o: ['was sleeping', 'slept', 'am sleeping'], a: 0, w: 'Действие в процессе — was sleeping.' },
    { q: 'They ___ football at five o’clock. (play)', t: ['were playing'], w: 'They were playing.' },
    { q: 'She was cooking ___ the phone rang.', o: ['while', 'when', 'during'], a: 1, w: 'Короткое действие — when.' },
    { q: 'I was walking home ___ I met Tom.', o: ['when', 'while', 'during'], a: 0, w: 'Встреча — короткое действие: when.' },
    { q: '___ you working at nine? ', o: ['Was', 'Were', 'Did'], a: 1, w: 'you → Were you working?' },
    { q: 'It ___ when we left. (rain)', o: ['was raining', 'rains', 'is raining'], a: 0, w: 'Фон — Past Continuous.' },
    { q: 'He wasn’t ___ .', o: ['sleep', 'sleeping', 'slept'], a: 1, w: 'wasn’t + -ing.' },
    { q: 'While I ___ TV, my brother called.', o: ['watched', 'was watching', 'watch'], a: 1, w: 'Длинное действие — Past Continuous.' }
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
      ['?', 'Have / Has + кто + V3?', 'Have you eaten?']] },
    { t: 'p', h: '<b>V3</b> — третья форма глагола. У правильных глаголов это +ed: play → played. Неправильные надо выучить: go → <b>gone</b>, see → <b>seen</b>, eat → <b>eaten</b>, do → <b>done</b>, write → <b>written</b>, take → <b>taken</b>, be → <b>been</b>, have → <b>had</b>, make → <b>made</b>.' },
    { t: 'h', h: 'Когда используем' },
    { t: 'ex', rows: [
      ['Have you ever been to London?', 'Ты когда-нибудь был в Лондоне? (опыт)'],
      ["I've never tried sushi.", 'Я никогда не пробовал суши. (опыт)'],
      ["I've lost my keys.", 'Я потерял ключи. (их нет сейчас)'],
      ["She's just left.", 'Она только что ушла.'],
      ["I've already done it.", 'Я уже это сделал.'],
      ["I haven't finished yet.", 'Я ещё не закончил.']] },
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
},
{ id: 'en-cond1', level: 'A2', title: 'Условия: If it rains, I will stay', sub: 'First conditional — реальные условия',
  blocks: [
    { t: 'p', h: 'Если условие <b>реально</b> и может выполниться, используем: <b>If + Present Simple, will + глагол</b>.' },
    { t: 'table', head: ['Условие (if)', 'Результат'], rows: [
      ['If it <b>rains</b>', 'I <b>will stay</b> at home.'],
      ["If you <b>study</b> hard", 'you <b>will pass</b> the exam.'],
      ["If she <b>doesn't call</b>", "I <b>won't wait</b>."]] },
    { t: 'p', h: 'Части можно менять местами. Запятая нужна, если <b>if</b> стоит в начале: <b>If it rains, I’ll stay.</b> — <b>I’ll stay if it rains.</b>' },
    { t: 'ex', rows: [
      ["If I have time, I'll call you.", 'Если у меня будет время, я тебе позвоню.'],
      ["We'll miss the train if we don't hurry.", 'Мы опоздаем на поезд, если не поторопимся.'],
      ['What will you do if you lose your job?', 'Что ты будешь делать, если потеряешь работу?']] },
    { t: 'warn', h: 'После <b>if</b> будущее время <b>не ставится</b>: говорим <b>If it rains</b> (Present), а не «If it will rain». Это главная ошибка русскоговорящих.' },
    { t: 'tip', h: 'Вместо <b>will</b> можно использовать <b>can, must, should</b> или совет: <b>If you feel sick, you should see a doctor.</b>' }
  ],
  quiz: [
    { q: 'If it ___ tomorrow, we’ll stay at home.', o: ['rains', 'will rain', 'rained'], a: 0, w: 'После if — Present Simple.' },
    { q: 'If you study hard, you ___ the exam.', o: ['pass', 'will pass', 'passed'], a: 1, w: 'Результат — will + глагол.' },
    { q: "If she ___ call, I won’t wait. (not)", t: ["doesn't", 'does not'], w: "If she doesn’t call…" },
    { q: 'I’ll call you if I ___ time. (have)', t: ['have'], w: 'If I have time.' },
    { q: 'We’ll miss the bus if we ___ hurry.', o: ["don't", "won't", "aren't"], a: 0, w: 'If we don’t hurry.' },
    { q: 'Что верно?', o: ["If it will rain, I'll stay home.", "If it rains, I'll stay home."], a: 1, w: 'После if — без will.' },
    { q: 'What ___ you do if you lose your job?', o: ['are', 'will', 'would be'], a: 1, w: 'What will you do if…?' },
    { q: 'I’ll be happy if you ___ . (come)', t: ['come'], w: 'После if — Present Simple: if you come.' }
  ]
},
{ id: 'en-ing', level: 'A2', title: 'Глагол + to или -ing', sub: 'I want to go, I enjoy swimming',
  blocks: [
    { t: 'p', h: 'После некоторых глаголов следующий глагол нужно ставить в определённой форме. Заранее знать, какая нужна, нельзя — это нужно запомнить по группам.' },
    { t: 'table', head: ['После…', 'Форма', 'Пример'], rows: [
      ['<b>want, need, hope, decide, plan, learn, would like</b>', '<b>to</b> + глагол', 'I want <b>to go</b>. I need <b>to study</b>.'],
      ['<b>enjoy, like, love, hate, finish, stop, mind</b>', 'глагол<b>-ing</b>', 'I enjoy <b>swimming</b>. She finished <b>working</b>.'],
      ['<b>can, must, should, will</b>', 'глагол без to', 'I can <b>swim</b>. You should <b>go</b>.']] },
    { t: 'ex', rows: [
      ['I want to learn English.', 'Я хочу выучить английский.'], ['She enjoys reading in bed.', 'Ей нравится читать в постели.'],
      ["We decided to go by train.", 'Мы решили поехать на поезде.'], ['Would you like to come with us?', 'Хочешь пойти с нами?'], ['He stopped smoking.', 'Он бросил курить.']] },
    { t: 'tip', h: '<b>Like</b>, <b>love</b>, <b>hate</b> допускают обе формы, но чаще <b>-ing</b>: <b>I like swimming</b>. А <b>would like</b> — только с <b>to</b>: <b>I’d like to swim</b>. И осторожно со <b>stop</b>: <b>stop smoking</b> — бросить курить, а <b>stop to smoke</b> — остановиться, чтобы покурить.' },
    { t: 'warn', h: 'После предлога тоже ставим <b>-ing</b>: <b>I’m interested in learning</b>, <b>Thank you for helping</b>.' }
  ],
  quiz: [
    { q: 'I want ___ English.', o: ['learn', 'to learn', 'learning'], a: 1, w: 'want + to.' },
    { q: 'She enjoys ___ books.', o: ['read', 'to read', 'reading'], a: 2, w: 'enjoy + -ing.' },
    { q: 'We decided ___ by train.', o: ['to go', 'going', 'go'], a: 0, w: 'decide + to.' },
    { q: 'I can ___ very fast. (swim)', t: ['swim'], w: 'can + глагол без to.' },
    { q: 'He finished ___ his homework. (do)', t: ['doing'], w: 'finish + -ing.' },
    { q: 'Would you like ___ with us?', o: ['come', 'to come', 'coming'], a: 1, w: 'would like + to.' },
    { q: 'Thank you for ___ me.', o: ['help', 'to help', 'helping'], a: 2, w: 'После предлога — -ing.' },
    { q: 'Что верно?', o: ['I enjoy to swim.', 'I enjoy swimming.'], a: 1, w: 'enjoy + -ing.' }
  ]
},
{ id: 'en-howq', level: 'A2', title: 'Вопросы how: how much, how long', sub: 'Как часто, как долго, сколько стоит',
  blocks: [
    { t: 'p', h: 'Слово <b>how</b> с прилагательным или наречием превращается в целую серию полезных вопросов.' },
    { t: 'table', head: ['Вопрос', 'Что спрашиваем', 'Пример'], rows: [
      ['<b>How much</b> is…?', 'цену, количество (неисчисл.)', 'How much is this coat?'],
      ['<b>How many</b>…?', 'число (исчисл.)', 'How many brothers do you have?'],
      ['<b>How long</b>…?', 'длительность или длину', 'How long is the film?'],
      ['<b>How often</b>…?', 'частоту', 'How often do you swim?'],
      ['<b>How old</b>…?', 'возраст', 'How old is your son?'],
      ['<b>How far</b>…?', 'расстояние', 'How far is the station?'],
      ['<b>How tall / big / heavy</b>…?', 'размер', 'How tall is your brother?']] },
    { t: 'ex', rows: [
      ['How much does a ticket cost? — Ten euros.', 'Сколько стоит билет? — Десять евро.'], ['How long did the journey take? — Three hours.', 'Сколько длилась дорога? — Три часа.'],
      ['How often do you go to the gym? — Twice a week.', 'Как часто ты ходишь в спортзал? — Два раза в неделю.'], ['How far is it? — About five kilometres.', 'Как далеко это? — Около пяти километров.']] },
    { t: 'warn', h: 'После вопросительной фразы порядок слов обычный для вопроса: <b>How often do you swim?</b> (не «How often you swim?»).' }
  ],
  quiz: [
    { q: '___ is this coat? — Fifty euros.', o: ['How many', 'How much', 'How long'], a: 1, w: 'Цена — how much.' },
    { q: '___ brothers do you have? — Two.', o: ['How much', 'How many', 'How long'], a: 1, w: 'Число исчисляемых — how many.' },
    { q: '___ is the film? — Two hours.', o: ['How long', 'How far', 'How old'], a: 0, w: 'Длительность — how long.' },
    { q: '___ do you go to the gym? — Twice a week.', o: ['How long', 'How often', 'How much'], a: 1, w: 'Частота — how often.' },
    { q: '___ is your son? — He is nine.', o: ['How old', 'How tall', 'How long'], a: 0, w: 'Возраст — how old.' },
    { q: '___ is the station? — Two kilometres.', o: ['How far', 'How long time', 'How many'], a: 0, w: 'Расстояние — how far.' },
    { q: 'Что верно?', o: ['How often you swim?', 'How often do you swim?'], a: 1, w: 'Порядок вопроса: how often do you…' },
    { q: 'How ___ time do we have? (впишите: much или many)', t: ['much'], w: 'Time — неисчисляемое → much.' }
  ]
},
{ id: 'en-relative', level: 'A2', title: 'Who, which, that: уточняем', sub: 'The man who lives next door',
  blocks: [
    { t: 'p', h: 'Слова <b>who, which, that, where</b> соединяют два предложения и уточняют, о ком или о чём речь (по-русски: «который, где»).' },
    { t: 'table', head: ['Слово', 'О ком/чём', 'Пример'], rows: [
      ['<b>who</b>', 'о людях', 'The man <b>who</b> lives next door is a doctor.'],
      ['<b>which</b>', 'о предметах', 'This is the book <b>which</b> I bought.'],
      ['<b>that</b>', 'о людях и предметах (в разговоре)', 'The girl <b>that</b> called you is my sister.'],
      ['<b>where</b>', 'о местах', 'This is the town <b>where</b> I was born.']] },
    { t: 'ex', rows: [
      ['I have a friend who speaks five languages.', 'У меня есть друг, который говорит на пяти языках.'], ['This is the bag that I want.', 'Это сумка, которую я хочу.'],
      ['That is the café where we met.', 'Это кафе, где мы познакомились.']] },
    { t: 'tip', h: 'Если слово после who/which/that не подлежащее (<b>the book I bought</b>), его можно <b>опустить</b>: <b>This is the book I bought.</b>' },
    { t: 'warn', h: 'Не нужно повторять подлежащее: <b>The man who lives here is kind</b> (не «The man who he lives…»).' }
  ],
  quiz: [
    { q: 'The woman ___ lives next door is a doctor.', o: ['who', 'which', 'where'], a: 0, w: 'О человеке — who.' },
    { q: 'This is the book ___ I bought.', o: ['who', 'which', 'where'], a: 1, w: 'О предмете — which.' },
    { q: 'That is the town ___ I was born.', o: ['who', 'which', 'where'], a: 2, w: 'О месте — where.' },
    { q: 'I have a friend ___ speaks five languages.', o: ['who', 'which', 'where'], a: 0, w: 'О человеке — who.' },
    { q: 'The car ___ is red is mine.', o: ['who', 'that', 'where'], a: 1, w: 'О предмете — that/which.' },
    { q: 'The girl ___ called you is my sister.', o: ['who', 'which', 'where'], a: 0, w: 'О человеке — who.' },
    { q: 'Что верно?', o: ['The man who he lives here is kind.', 'The man who lives here is kind.'], a: 1, w: 'Подлежащее не повторяем.' },
    { q: 'This is the café ___ we met. (где)', t: ['where'], w: 'where для места.' }
  ]
},
{ id: 'en-phrasal', level: 'A2', title: 'Фразовые глаголы: порядок слов', sub: 'put on your coat / put it on',
  blocks: [
    { t: 'p', h: '<b>Фразовые глаголы</b> — это глагол + маленькое слово (<b>up, on, off, out, down</b>), которое меняет значение: <b>give up</b> — «бросить», <b>look for</b> — «искать». Их нужно запоминать целиком.' },
    { t: 'h', h: 'Разделяемые и неразделяемые' },
    { t: 'table', head: ['Тип', 'Порядок слов', 'Пример'], rows: [
      ['<b>разделяемые</b> (put on, turn off, pick up)', 'существительное — до или после; <b>местоимение — только между</b>', 'Put on your coat. = Put your coat on. → <b>Put it on.</b> (не «Put on it»)'],
      ['<b>неразделяемые</b> (look for, look after, get on)', 'всегда вместе', 'I’m looking for my keys. → I’m looking for <b>them</b>.']] },
    { t: 'ex', rows: [
      ['Turn off the light. / Turn it off.', 'Выключи свет. / Выключи его.'], ['She looks after her grandmother.', 'Она ухаживает за бабушкой.'],
      ['Pick the kids up at five.', 'Забери детей в пять.'], ["Don't give up!", 'Не сдавайся!']] },
    { t: 'tip', h: 'У фразового глагола может быть значение, не равное значению частей: <b>give up</b> ≠ «дать наверх». Учите их с примерами — например, в колоде «Фразовые глаголы A2».' },
    { t: 'warn', h: 'Частая ошибка: <b>Turn off it</b>. Верно: <b>Turn it off</b> (местоимение стоит между).' }
  ],
  quiz: [
    { q: 'Как правильно? ', o: ['Turn off it.', 'Turn it off.'], a: 1, w: 'Местоимение — между глаголом и частицей.' },
    { q: 'The light is on. Please ___ . (выключи)', o: ['turn it off', 'turn off it', 'turn on it'], a: 0, w: 'turn it off.' },
    { q: 'Where are my keys? I am ___ them. (ищу)', o: ['looking for', 'looking after', 'looking at'], a: 0, w: 'look for = искать.' },
    { q: 'She ___ her grandmother every day. (ухаживает)', o: ['looks for', 'looks after', 'looks up'], a: 1, w: 'look after = ухаживать.' },
    { q: 'Что верно?', o: ['Put on your coat.', 'Put on it.', 'Both ok'], a: 0, w: 'С существительным — можно; а Put on it — нельзя.' },
    { q: 'Don’t ___! You can do it. (сдаваться)', o: ['give away', 'give up', 'give off'], a: 1, w: 'give up = сдаваться, бросать.' },
    { q: 'Please sit ___ . (садитесь)', t: ['down'], w: 'sit down.' },
    { q: 'I pick the children ___ at five. (забираю)', t: ['up'], w: 'pick up.' }
  ]
}
);
