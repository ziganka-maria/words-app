// Грамматика английского, уровень B1
GRAMMAR.en.push(
{ id: 'en-ppps', level: 'B1', title: 'Present Perfect или Past Simple', sub: 'I have been / I went · for, since, just, yet',
  blocks: [
    { t: 'p', h: 'Оба времени говорят о прошлом, но по-разному. <b>Past Simple</b> — законченное событие с <b>известным временем</b>: yesterday, in 2020, last week. <b>Present Perfect</b> — опыт или результат, когда время <b>не названо</b> или период ещё не закончился: today, this week, ever, never.' },
    { t: 'table', head: ['Past Simple', 'Present Perfect'], rows: [
      ['I <b>saw</b> him yesterday.', 'I <b>have seen</b> this film.'],
      ['She <b>lived</b> in Paris in 2015.', 'She <b>has lived</b> here for ten years.'],
      ['<b>Did</b> you <b>call</b> her last night?', '<b>Have</b> you ever <b>been</b> to Japan?']] },
    { t: 'h', h: 'For и since' },
    { t: 'p', h: 'С Present Perfect: <b>for</b> + отрезок времени (for two years, for a week), <b>since</b> + точка начала (since 2019, since Monday, since I was a child).' },
    { t: 'h', h: 'Just, already, yet' },
    { t: 'p', h: '<b>just</b> — только что, <b>already</b> — уже (оба перед V3), <b>yet</b> — в вопросах «уже?» и в отрицаниях «ещё не» (в конце фразы).' },
    { t: 'ex', rows: [
      ['I have known her since school.', 'Я знаю её со школы.'], ['We have been married for twenty years.', 'Мы женаты двадцать лет.'],
      ['She has just left.', 'Она только что ушла.'], ['Have you finished yet?', 'Ты уже закончил?'],
      ["I haven't decided yet.", 'Я ещё не решил.'], ['I went to London last summer.', 'Прошлым летом я ездил в Лондон.']] },
    { t: 'warn', h: 'Русское «я живу здесь пять лет» — это <b>I have lived here for five years</b>, а не «I live here for five years».' },
    { t: 'tip', h: 'Если в вопросе <b>When…?</b> — отвечаем в Past Simple: <i>When did you arrive?</i> — <i>I arrived at six.</i>' }
  ],
  quiz: [
    { q: 'I ___ him yesterday.', o: ['have seen', 'saw', 'see'], a: 1, w: 'Yesterday — известное время, Past Simple.' },
    { q: 'She has lived here ___ 2018.', o: ['for', 'since', 'from'], a: 1, w: '2018 — точка начала: since.' },
    { q: 'We have been friends ___ ten years.', o: ['since', 'during', 'for'], a: 2, w: 'Отрезок времени — for.' },
    { q: 'Have you ever ___ to Italy?', o: ['been', 'went', 'go'], a: 0, w: 'Have + V3: been.' },
    { q: "I haven't finished my homework ___ .", o: ['already', 'yet', 'just'], a: 1, w: 'В отрицании в конце — yet.' },
    { q: 'When ___ you arrive?', o: ['have', 'did', 'has'], a: 1, w: 'When — Past Simple: When did you arrive?' },
    { q: 'Переведите: «Я знаю его три года». I ___ him for three years.', t: ['have known', "'ve known"], w: 'I have known him for three years.' },
    { q: 'She has ___ left. (только что)', o: ['yet', 'just', 'ever'], a: 1, w: 'Только что — just.' }
  ]
},
{ id: 'en-ppc', level: 'B1', title: 'Present Perfect Continuous', sub: "I've been waiting for an hour",
  blocks: [
    { t: 'p', h: '<b>Present Perfect Continuous</b> — действие началось в прошлом, <b>длится до сих пор</b> (или только что закончилось), и важна его <b>продолжительность</b>. Формула: <b>have / has been + глагол-ing</b>.' },
    { t: 'table', head: ['', 'Схема', 'Пример'], rows: [
      ['+', 'have / has been + -ing', "I<b>'ve been waiting</b> for an hour."],
      ['−', "haven't / hasn't been + -ing", "She <b>hasn't been sleeping</b> well."],
      ['?', 'Have / Has + кто + been + -ing?', 'How long <b>have</b> you <b>been learning</b> English?']] },
    { t: 'h', h: 'Чем отличается от Present Perfect' },
    { t: 'p', h: 'Present Perfect — <b>результат</b> (сколько сделано): <i>I have written three emails.</i> Continuous — <b>процесс</b> (как долго): <i>I have been writing emails all morning.</i>' },
    { t: 'ex', rows: [
      ["I've been waiting for you for an hour!", 'Я жду тебя уже час!'], ['How long have you been learning English?', 'Сколько ты уже учишь английский?'],
      ["It's been raining since morning.", 'Дождь идёт с утра.'], ["You look tired. Have you been working?", 'Ты выглядишь усталым. Работал?'],
      ["She's been living here for two years.", 'Она живёт здесь два года.']] },
    { t: 'warn', h: 'Глаголы состояния (know, like, want, have в значении «иметь») в Continuous не ставятся: <b>I have known him for years</b>, а не «have been knowing».' },
    { t: 'tip', h: 'Вопрос «Сколько ты уже…?» почти всегда начинается с <b>How long have you been…?</b>' }
  ],
  quiz: [
    { q: "I ___ for an hour. (wait)", o: ['am waiting', "'ve been waiting", 'waited'], a: 1, w: 'Длится до сих пор, важна длительность — have been waiting.' },
    { q: 'How long ___ you been learning English?', o: ['have', 'did', 'are'], a: 0, w: 'How long have you been…?' },
    { q: 'It ___ raining since morning.', o: ['has been', 'have been', 'was'], a: 0, w: 'It → has been.' },
    { q: 'I have ___ him for years. (know)', o: ['been knowing', 'known', 'knowing'], a: 1, w: 'Know — глагол состояния: have known.' },
    { q: 'I have ___ three emails today.', o: ['written', 'been writing', 'wrote'], a: 0, w: 'Результат, количество — Present Perfect.' },
    { q: 'She looks tired. She ___ all day. (work)', o: ['has worked', 'has been working', 'works'], a: 1, w: 'Процесс, объясняющий результат — has been working.' },
    { q: 'Поставьте глагол: They ___ (live) here since 2020.', t: ['have been living', "'ve been living", 'have lived', "'ve lived"], w: 'They have been living (или have lived) here since 2020.' },
    { q: 'We have been ___ for two hours. (walk)', o: ['walked', 'walk', 'walking'], a: 2, w: 'been + -ing.' }
  ]
},
{ id: 'en-pastperf', level: 'B1', title: 'Past Perfect: что случилось раньше', sub: 'When I arrived, the film had started',
  blocks: [
    { t: 'p', h: '<b>Past Perfect</b> показывает действие, которое произошло <b>раньше другого действия в прошлом</b>. Формула для всех лиц одна: <b>had + V3</b>.' },
    { t: 'table', head: ['', 'Схема', 'Пример'], rows: [
      ['+', 'had + V3', 'The train <b>had left</b>.'],
      ['−', "hadn't + V3", "I <b>hadn't seen</b> it before."],
      ['?', 'Had + кто + V3?', '<b>Had</b> you <b>met</b> him before?']] },
    { t: 'p', h: 'Сравните: <i>When I arrived, the film <b>started</b></i> — пришёл, и фильм начался. <i>When I arrived, the film <b>had started</b></i> — фильм уже шёл, когда я пришёл.' },
    { t: 'ex', rows: [
      ['When we got to the station, the train had left.', 'Когда мы добрались до вокзала, поезд уже ушёл.'], ["I had never seen the sea before that trip.", 'До той поездки я ни разу не видел моря.'],
      ['She was sad because she had lost her keys.', 'Она грустила, потому что потеряла ключи.'], ['Had you eaten before you came?', 'Ты поел перед тем, как прийти?'],
      ['By the time he called, I had gone to bed.', 'К тому времени, как он позвонил, я уже лёг спать.']] },
    { t: 'tip', h: 'Сигналы Past Perfect: <b>by the time</b> (к тому времени как), <b>before</b>, <b>after</b>, <b>already</b>, <b>never… before</b>.' },
    { t: 'warn', h: 'Если порядок понятен из <b>before / after</b>, можно и Past Simple: <i>I ate before I left</i>. Past Perfect нужен, когда без него непонятно, что было раньше.' }
  ],
  quiz: [
    { q: 'When we arrived, the train ___ .', o: ['left', 'had left', 'has left'], a: 1, w: 'Поезд ушёл раньше нашего прихода — had left.' },
    { q: "I ___ never seen snow before I moved to Canada.", o: ['had', 'have', 'was'], a: 0, w: 'Опыт до момента в прошлом — had seen.' },
    { q: 'By the time he called, I ___ to bed.', o: ['went', 'had gone', 'have gone'], a: 1, w: 'By the time — had gone.' },
    { q: 'She was upset because she ___ her phone.', o: ['had lost', 'has lost', 'loses'], a: 0, w: 'Потеря была раньше — had lost.' },
    { q: '___ you met him before the party?', o: ['Have', 'Did', 'Had'], a: 2, w: 'Had you met…?' },
    { q: 'Past Perfect образуется так:', o: ['have + V3', 'had + V3', 'was + -ing'], a: 1, w: 'had + V3 для всех лиц.' },
    { q: 'Поставьте глагол: The film ___ (start) when we got there.', t: ['had started', "'d started"], w: 'The film had started.' },
    { q: 'They ___ (not / finish) when I arrived.', t: ["hadn't finished", 'had not finished'], w: "They hadn't finished." }
  ]
},
{ id: 'en-usedto', level: 'B1', title: 'Used to: как было раньше', sub: 'I used to smoke · I’m used to it',
  blocks: [
    { t: 'p', h: '<b>used to + глагол</b> — привычка или состояние в прошлом, которых <b>больше нет</b>. По-русски — «раньше (бывало)…».' },
    { t: 'table', head: ['', 'Схема', 'Пример'], rows: [
      ['+', 'used to + глагол', 'I <b>used to play</b> the piano.'],
      ['−', "didn't use to + глагол", "She <b>didn't use to like</b> coffee."],
      ['?', 'Did + кто + use to…?', '<b>Did</b> you <b>use to</b> live here?']] },
    { t: 'warn', h: 'После did пишется <b>use</b> без -d: <i>Did you use to…? I didn’t use to…</i>' },
    { t: 'h', h: 'Be used to — совсем другое' },
    { t: 'p', h: '<b>be used to + существительное / -ing</b> — «привык к чему-то». <b>get used to</b> — «привыкать». <i>I’m used to getting up early.</i> — Я привык рано вставать.' },
    { t: 'ex', rows: [
      ['I used to live in Moscow.', 'Раньше я жил в Москве.'], ["We didn't use to have a car.", 'Раньше у нас не было машины.'],
      ['Did you use to play football?', 'Ты раньше играл в футбол?'], ["I'm used to working at night.", 'Я привык работать по ночам.'],
      ["You'll get used to the weather.", 'Ты привыкнешь к погоде.']] },
    { t: 'tip', h: 'Для повторявшихся действий в рассказах о прошлом ещё говорят <b>would</b>: <i>Every summer we would go to the sea.</i> Но для состояний — только used to: <i>I used to have long hair.</i>' }
  ],
  quiz: [
    { q: 'I ___ smoke, but I stopped.', o: ['use to', 'used to', 'am used to'], a: 1, w: 'Прошлая привычка — used to.' },
    { q: '___ you use to live here?', o: ['Did', 'Were', 'Do'], a: 0, w: 'Did you use to…?' },
    { q: "She didn't ___ like coffee.", o: ['used to', 'use to', 'using to'], a: 1, w: "После didn't — use to." },
    { q: "I'm used to ___ up early.", o: ['get', 'getting', 'got'], a: 1, w: 'be used to + -ing.' },
    { q: "Don't worry, you'll ___ used to it.", o: ['get', 'be using', 'use'], a: 0, w: 'Привыкнешь — get used to.' },
    { q: 'I used to ___ long hair.', o: ['have', 'having', 'had'], a: 0, w: 'used to + базовая форма.' },
    { q: 'Переведите: «Раньше я жил в Лондоне». I ___ in London.', t: ['used to live'], w: 'I used to live in London.' },
    { q: '«Я привык к шуму»: I ___ the noise.', o: ['used to', "'m used to", 'use to'], a: 1, w: "I'm used to the noise." }
  ]
},
{ id: 'en-cond2', level: 'B1', title: 'Если бы: второй тип условий', sub: 'If I had money, I would travel',
  blocks: [
    { t: 'p', h: 'Второй тип условий — про <b>нереальное или маловероятное</b> в настоящем или будущем. По-русски — «если бы…, то бы…».' },
    { t: 'table', head: ['Условие (if)', 'Результат'], rows: [
      ['If + Past Simple', 'would + глагол'],
      ['If I <b>had</b> more time,', 'I <b>would learn</b> Chinese.'],
      ['If she <b>lived</b> closer,', 'we <b>would see</b> her more often.']] },
    { t: 'p', h: 'С глаголом be в условии можно <b>were</b> для всех лиц: <i>If I <b>were</b> you, I would call her.</i> — На твоём месте я бы ей позвонил.' },
    { t: 'ex', rows: [
      ['If I had a million dollars, I would buy an island.', 'Будь у меня миллион долларов, я бы купил остров.'], ['If I were you, I would take the job.', 'На твоём месте я бы согласился на эту работу.'],
      ["What would you do if you lost your phone?", 'Что бы ты сделал, если бы потерял телефон?'], ["I wouldn't go there if I were you.", 'Я бы на твоём месте туда не ходил.'],
      ['If it was warmer, we could swim.', 'Будь теплее, мы могли бы поплавать.']] },
    { t: 'warn', h: '<b>would</b> не ставится в часть с if: <i>If I <b>had</b> time</i>, а не «If I would have time».' },
    { t: 'tip', h: 'Сравните: <i>If it <b>rains</b>, I <b>will</b> stay home</i> — реально (первый тип). <i>If it <b>snowed</b> in July, I <b>would</b> be surprised</i> — нереально (второй тип).' }
  ],
  quiz: [
    { q: 'If I ___ rich, I would travel the world.', o: ['am', 'were', 'will be'], a: 1, w: 'Нереальное условие — were.' },
    { q: 'If she had a car, she ___ drive to work.', o: ['will', 'would', 'does'], a: 1, w: 'Результат — would.' },
    { q: 'If I were you, I ___ call him.', o: ['would', 'will', 'am'], a: 0, w: 'Совет — If I were you, I would…' },
    { q: 'What would you do if you ___ the lottery?', o: ['win', 'won', 'would win'], a: 1, w: 'If + Past Simple: won.' },
    { q: 'If it ___ warmer, we could go to the beach.', o: ['was', 'is', 'will be'], a: 0, w: 'If + Past: was / were.' },
    { q: 'Какая фраза — нереальное условие?', o: ['If it rains, I will stay.', 'If I knew her number, I would call.', 'If you heat ice, it melts.'], a: 1, w: 'If + Past, would — второй тип.' },
    { q: 'Поставьте глагол: If I ___ (have) more time, I would read more.', t: ['had'], w: 'If I had more time…' },
    { q: 'I ___ (not / buy) that phone if I were you.', t: ["wouldn't buy", 'would not buy'], w: "I wouldn't buy that phone." }
  ]
},
{ id: 'en-passive', level: 'B1', title: 'Пассивный залог', sub: 'English is spoken here · It was built in 1890',
  blocks: [
    { t: 'p', h: 'Пассив нужен, когда важно <b>действие или объект</b>, а не тот, кто действует: «Дом построили», «Здесь говорят по-английски». Формула: <b>be + V3</b>.' },
    { t: 'table', head: ['Время', 'Схема', 'Пример'], rows: [
      ['Present Simple', 'am / is / are + V3', 'English <b>is spoken</b> here.'],
      ['Past Simple', 'was / were + V3', 'The bridge <b>was built</b> in 1890.'],
      ['Present Perfect', 'has / have been + V3', 'My bike <b>has been stolen</b>.'],
      ['Будущее', 'will be + V3', 'You <b>will be met</b> at the airport.']] },
    { t: 'p', h: 'Кто сделал — через <b>by</b>: <i>The book was written <b>by</b> Tolstoy.</i> Чаще всего его не упоминают вовсе.' },
    { t: 'ex', rows: [
      ['This cheese is made in France.', 'Этот сыр делают во Франции.'], ['The window was broken last night.', 'Окно разбили вчера ночью.'],
      ['The film was directed by Christopher Nolan.', 'Фильм снял Кристофер Нолан.'], ['My flight has been cancelled.', 'Мой рейс отменили.'],
      ['The results will be announced tomorrow.', 'Результаты объявят завтра.'], ['Where were you born?', 'Где ты родился?']] },
    { t: 'tip', h: 'Русское «меня зовут», «мне сказали», «его уволили» часто переводится пассивом: <i>I was told</i>, <i>he was fired</i>.' },
    { t: 'warn', h: '«Я родился» — только пассив: <b>I was born</b>, а не «I born» или «I am born».' }
  ],
  quiz: [
    { q: 'English ___ in many countries.', o: ['speaks', 'is spoken', 'is speaking'], a: 1, w: 'Пассив Present — is spoken.' },
    { q: 'The castle ___ in the 12th century.', o: ['was built', 'built', 'is build'], a: 0, w: 'Пассив Past — was built.' },
    { q: 'My wallet has ___ stolen.', o: ['be', 'being', 'been'], a: 2, w: 'Present Perfect Passive — has been stolen.' },
    { q: 'The book was written ___ Agatha Christie.', o: ['from', 'by', 'with'], a: 1, w: 'Кто сделал — by.' },
    { q: 'I ___ born in 1990.', o: ['am', 'was', 'have'], a: 1, w: 'I was born.' },
    { q: 'The results ___ announced tomorrow.', o: ['will be', 'will', 'are being'], a: 0, w: 'Будущее — will be + V3.' },
    { q: 'Сделайте пассив: They clean the office every day. → The office ___ every day.', t: ['is cleaned'], w: 'The office is cleaned every day.' },
    { q: 'Пассив Past: Someone stole my bike. → My bike ___ .', t: ['was stolen'], w: 'My bike was stolen.' }
  ]
},
{ id: 'en-reported', level: 'B1', title: 'Косвенная речь', sub: 'She said that she was tired',
  blocks: [
    { t: 'p', h: 'Когда пересказываем чужие слова после <b>said / told</b> в прошедшем, время глагола обычно <b>сдвигается на шаг назад</b>.' },
    { t: 'table', head: ['Прямая речь', 'Косвенная речь'], rows: [
      ['"I <b>am</b> tired."', 'She said (that) she <b>was</b> tired.'],
      ['"I <b>live</b> in Rome."', 'He said he <b>lived</b> in Rome.'],
      ['"I <b>will</b> call you."', 'She said she <b>would</b> call me.'],
      ['"I <b>can</b> swim."', 'He said he <b>could</b> swim.'],
      ['"I <b>saw</b> it."', 'She said she <b>had seen</b> it.']] },
    { t: 'h', h: 'Say или tell' },
    { t: 'p', h: '<b>tell</b> — обязательно с тем, кому: <i>She <b>told me</b> that…</i>. <b>say</b> — без него: <i>She <b>said</b> that…</i> (или <i>said to me</i>).' },
    { t: 'h', h: 'Вопросы и просьбы' },
    { t: 'p', h: 'Вопрос становится утверждением: <i>"Where do you live?"</i> → <i>He asked where I <b>lived</b>.</i> Без do/did! Да/нет-вопросы — через <b>if</b>: <i>She asked <b>if</b> I was hungry.</i> Просьбы — <b>asked / told + to</b>: <i>He told me <b>to wait</b>.</i>' },
    { t: 'ex', rows: [
      ['She said that she was busy.', 'Она сказала, что занята.'], ['He told me he would be late.', 'Он сказал мне, что опоздает.'],
      ['They asked where we lived.', 'Они спросили, где мы живём.'], ['She asked if I liked jazz.', 'Она спросила, люблю ли я джаз.'],
      ['The doctor told me to rest.', 'Врач велел мне отдыхать.']] },
    { t: 'tip', h: 'Меняются и слова времени: today → that day, tomorrow → the next day, yesterday → the day before, here → there.' }
  ],
  quiz: [
    { q: '"I am hungry." → She said she ___ hungry.', o: ['is', 'was', 'were'], a: 1, w: 'am → was.' },
    { q: '"I will help you." → He said he ___ help me.', o: ['will', 'would', 'can'], a: 1, w: 'will → would.' },
    { q: 'She ___ me that she was leaving.', o: ['said', 'told', 'asked'], a: 1, w: 'С «кому» — told me.' },
    { q: 'He ___ that he was tired.', o: ['told', 'said', 'told to'], a: 1, w: 'Без «кому» — said.' },
    { q: '"Where do you work?" → She asked where I ___ .', o: ['worked', 'did work', 'do work'], a: 0, w: 'Без do/did, сдвиг времени: worked.' },
    { q: '"Are you OK?" → He asked ___ I was OK.', o: ['that', 'if', 'what'], a: 1, w: 'Да/нет-вопрос — if.' },
    { q: '"Wait here." → He told me ___ there.', t: ['to wait'], w: 'He told me to wait there.' },
    { q: '"I can drive." → She said she ___ drive.', t: ['could'], w: 'can → could.' }
  ]
},
{ id: 'en-deduction', level: 'B1', title: 'Догадки: must, might, can’t', sub: 'He must be tired · She can’t be at home',
  blocks: [
    { t: 'p', h: 'Модальные глаголы помогают показать, <b>насколько мы уверены</b> в догадке о настоящем.' },
    { t: 'table', head: ['Уверенность', 'Глагол', 'Пример'], rows: [
      ['почти 100% «да»', '<b>must</b>', 'He’s worked all day. He <b>must be</b> tired.'],
      ['возможно', '<b>might / may / could</b>', 'She <b>might be</b> at work.'],
      ['почти 100% «нет»', "<b>can't</b>", "That <b>can't be</b> true!"]] },
    { t: 'warn', h: 'Противоположность must в догадках — <b>can’t</b>, а не mustn’t. <i>Mustn’t</i> значит «нельзя».' },
    { t: 'p', h: 'О прошлом — <b>must / might / can’t + have + V3</b>: <i>She <b>must have forgotten</b>.</i> — Она, должно быть, забыла.' },
    { t: 'ex', rows: [
      ["You must be Anna's brother.", 'Вы, должно быть, брат Анны.'], ["He might be in the kitchen.", 'Возможно, он на кухне.'],
      ["It can't be true!", 'Не может быть!'], ['They may be late because of the traffic.', 'Они могут опоздать из-за пробок.'],
      ['She must have missed the bus.', 'Она, наверное, опоздала на автобус.'], ["He can't have seen us.", 'Не может быть, что он нас видел.']] },
    { t: 'tip', h: '<b>must be</b> часто звучит, когда мы выражаем сочувствие: <i>That must be hard for you.</i> — Тебе, наверное, нелегко.' }
  ],
  quiz: [
    { q: 'He has been running for two hours. He ___ be tired.', o: ['must', "can't", 'might not'], a: 0, w: 'Почти уверены — must.' },
    { q: "That ___ be Tom — he's in Paris now.", o: ['must', "can't", 'might'], a: 1, w: 'Точно нет — can’t.' },
    { q: "I'm not sure where she is. She ___ be at the gym.", o: ['must', "can't", 'might'], a: 2, w: 'Возможно — might.' },
    { q: 'Противоположность must в значении догадки:', o: ["mustn't", "can't", "don't have to"], a: 1, w: "Can't be." },
    { q: 'You won the lottery? You ___ be very happy!', o: ['must', 'may not', "can't"], a: 0, w: 'Очевидный вывод — must.' },
    { q: 'She must ___ forgotten about the meeting.', o: ['has', 'have', 'had'], a: 1, w: 'must have + V3.' },
    { q: '«Не может быть, что это правда»: It ___ be true.', t: ["can't", 'cannot'], w: "It can't be true." },
    { q: '«Возможно, они дома»: They ___ be at home.', t: ['might', 'may', 'could'], w: 'They might / may / could be at home.' }
  ]
},
{ id: 'en-relative2', level: 'B1', title: 'Where, whose и запятые', sub: 'The town where I grew up · My friend, who lives in Rome,',
  blocks: [
    { t: 'p', h: 'Кроме <b>who / which / that</b> есть ещё <b>where</b> (где — о месте) и <b>whose</b> (чей).' },
    { t: 'ex', rows: [
      ['This is the town where I grew up.', 'Это город, где я вырос.'], ['That’s the man whose dog bit me.', 'Это тот человек, чья собака меня укусила.'],
      ['My sister, who lives in Rome, is a doctor.', 'Моя сестра, которая живёт в Риме, врач.'], ['The hotel where we stayed was great.', 'Отель, в котором мы жили, был отличный.']] },
    { t: 'h', h: 'С запятыми и без' },
    { t: 'p', h: '<b>Без запятых</b> — уточняем, о ком речь: <i>The girl <b>who</b> called you is my cousin.</i> <b>С запятыми</b> — добавляем лишнюю информацию о том, кто уже понятен: <i>My mum, <b>who</b> is 60, still works.</i>' },
    { t: 'warn', h: 'В части с запятыми нельзя использовать <b>that</b>: <i>Paris, <b>which</b> is…</i>, а не «Paris, that is…».' },
    { t: 'tip', h: 'Если who/which/that — дополнение, его можно опустить: <i>The film (that) we saw was boring.</i> Но не в части с запятыми.' }
  ],
  quiz: [
    { q: 'This is the café ___ we first met.', o: ['which', 'where', 'who'], a: 1, w: 'Место — where.' },
    { q: 'That’s the woman ___ son is a pilot.', o: ['who', 'whose', 'which'], a: 1, w: 'Чей — whose.' },
    { q: 'My brother, ___ lives in Berlin, is visiting us.', o: ['that', 'who', 'which'], a: 1, w: 'С запятыми о человеке — who (не that).' },
    { q: 'London, ___ is the capital, is very expensive.', o: ['that', 'which', 'where'], a: 1, w: 'С запятыми о вещи — which.' },
    { q: 'The book ___ I bought is great.', o: ['who', 'whose', 'that'], a: 2, w: 'Вещь — that / which (можно опустить).' },
    { q: 'В какой фразе можно опустить who/that?', o: ['The man who called is my boss.', 'The film that we watched was long.', 'My dad, who is a pilot, travels a lot.'], a: 1, w: 'Когда это дополнение: the film (that) we watched.' },
    { q: 'Вставьте слово: The village ___ I was born is small.', t: ['where'], w: 'where — о месте.' },
    { q: 'Вставьте слово: He’s the singer ___ songs I love.', t: ['whose'], w: 'whose — чьи.' }
  ]
},
{ id: 'en-future2', level: 'B1', title: 'Будущее: планы и договорённости', sub: "I'm meeting Tom tomorrow · The train leaves at 6",
  blocks: [
    { t: 'p', h: 'В английском несколько способов говорить о будущем, и выбор зависит от того, <b>насколько оно решено</b>.' },
    { t: 'table', head: ['Форма', 'Когда', 'Пример'], rows: [
      ['Present Continuous', 'договорённость: время и место назначены', "I<b>'m meeting</b> Tom at six."],
      ['going to', 'намерение, решение уже принято', "I<b>'m going to</b> learn Spanish."],
      ['will', 'решение в момент речи, обещание, прогноз', "I<b>'ll</b> help you. It <b>will</b> rain."],
      ['Present Simple', 'расписание', 'The train <b>leaves</b> at 6.'],
      ['Future Continuous', 'процесс в момент будущего', 'This time tomorrow I<b>’ll be flying</b> to Rome.']] },
    { t: 'ex', rows: [
      ["What are you doing this weekend?", 'Что ты делаешь на выходных?'], ["We're flying to Spain on Friday.", 'В пятницу мы летим в Испанию.'],
      ['The film starts at eight.', 'Фильм начинается в восемь.'], ["Don't worry, I'll call you.", 'Не волнуйся, я тебе позвоню.'],
      ["This time next week I'll be lying on the beach.", 'В это же время через неделю я буду лежать на пляже.']] },
    { t: 'tip', h: 'Вопрос о планах — почти всегда в Present Continuous: <i>What are you doing tonight?</i>' },
    { t: 'warn', h: 'После <b>when, as soon as, before, after, until</b> о будущем говорят в настоящем: <i>I’ll call you when I <b>arrive</b></i>, а не «when I will arrive».' }
  ],
  quiz: [
    { q: "I ___ my dentist at 3 p.m. tomorrow. (договорились)", o: ["'m seeing", "'ll see", 'see'], a: 0, w: 'Договорённость — Present Continuous.' },
    { q: 'The train ___ at 7:15.', o: ['is going to leave', 'leaves', 'will be leaving'], a: 1, w: 'Расписание — Present Simple.' },
    { q: "The phone's ringing. — I ___ get it!", o: ["'m going to", "'ll", "'m getting"], a: 1, w: 'Решение в момент речи — will.' },
    { q: "I've decided. I ___ learn to drive this year.", o: ["'ll", "'m going to", 'learn'], a: 1, w: 'Принятое решение — going to.' },
    { q: "I'll call you when I ___ home.", o: ['get', 'will get', 'am getting'], a: 0, w: 'После when — настоящее.' },
    { q: 'This time tomorrow I ___ to Rome.', o: ["'ll fly", "'ll be flying", 'fly'], a: 1, w: 'Процесс в момент будущего — will be flying.' },
    { q: 'Спросите о планах: What ___ you ___ tonight? (do)', o: ['will / do', 'are / doing', 'do / do'], a: 1, w: 'What are you doing tonight?' },
    { q: 'Поставьте глагол: Wait here until I ___ (come) back.', t: ['come'], w: 'После until — настоящее: until I come back.' }
  ]
},
{ id: 'en-tags', level: 'B1', title: 'Разделительные вопросы', sub: "It's cold, isn't it? · You don't smoke, do you?",
  blocks: [
    { t: 'p', h: 'Короткий «хвостик» в конце фразы — как русское «да?», «не так ли?», «правда?». Правило: <b>утверждение + отрицательный хвостик</b>, <b>отрицание + положительный</b>.' },
    { t: 'table', head: ['Фраза', 'Хвостик'], rows: [
      ["It's cold,", "<b>isn't it</b>?"], ["You like coffee,", "<b>don't you</b>?"], ["She went home,", "<b>didn't she</b>?"],
      ["You can swim,", "<b>can't you</b>?"], ["They aren't here,", "<b>are they</b>?"], ["He hasn't called,", "<b>has he</b>?"]] },
    { t: 'p', h: 'В хвостике повторяется <b>вспомогательный глагол</b> из фразы. Если его нет — берём do / does / did.' },
    { t: 'ex', rows: [
      ["It's a lovely day, isn't it?", 'Чудесный день, правда?'], ["You don't eat meat, do you?", 'Ты ведь не ешь мясо?'],
      ["She lives near here, doesn't she?", 'Она ведь живёт рядом?'], ["We've met before, haven't we?", 'Мы ведь уже встречались?'],
      ["Let's go, shall we?", 'Пошли, а?']] },
    { t: 'warn', h: 'Особые случаи: <i>I’m right, <b>aren’t I</b>?</i> и <i>Let’s go, <b>shall we</b>?</i>' },
    { t: 'tip', h: 'Голос вниз — просим согласиться. Голос вверх — действительно спрашиваем.' }
  ],
  quiz: [
    { q: "It's hot today, ___ ?", o: ['is it', "isn't it", "doesn't it"], a: 1, w: "Утверждение с is → isn't it." },
    { q: "You don't like fish, ___ ?", o: ['do you', "don't you", 'are you'], a: 0, w: 'Отрицание → положительный хвостик: do you.' },
    { q: 'She works in a bank, ___ ?', o: ["isn't she", "doesn't she", "didn't she"], a: 1, w: "Present Simple → doesn't she." },
    { q: 'They went to Spain, ___ ?', o: ["didn't they", "weren't they", "don't they"], a: 0, w: "Past Simple → didn't they." },
    { q: "He can't drive, ___ ?", o: ["can't he", 'can he', 'does he'], a: 1, w: 'can’t → can he.' },
    { q: "I'm late, ___ ?", o: ["amn't I", "aren't I", "isn't I"], a: 1, w: "Особый случай — aren't I." },
    { q: "Let's have lunch, ___ ?", o: ['shall we', "don't we", 'will you'], a: 0, w: "Let's → shall we." },
    { q: "Допишите хвостик: You've seen this film, ___ ?", t: ["haven't you", 'have you not'], w: "You've seen…, haven't you?" }
  ]
},
{ id: 'en-enough', level: 'B1', title: 'Too, enough, so, such', sub: "too hot · old enough · so tired · such a nice day",
  blocks: [
    { t: 'p', h: '<b>too</b> — «слишком» (больше, чем нужно), <b>enough</b> — «достаточно». <b>So</b> и <b>such</b> — «такой, так» для усиления.' },
    { t: 'table', head: ['Слово', 'Порядок', 'Пример'], rows: [
      ['too', 'too + прилагательное', "It's <b>too hot</b> to sleep."],
      ['enough', 'прилагательное + enough', "He isn't <b>old enough</b> to drive."],
      ['enough', 'enough + существительное', 'We have <b>enough time</b>.'],
      ['so', 'so + прилагательное', "I'm <b>so tired</b>."],
      ['such', 'such (a) + прилагательное + существительное', "It's <b>such a nice day</b>."]] },
    { t: 'ex', rows: [
      ['This coffee is too hot to drink.', 'Этот кофе слишком горячий, чтобы пить.'], ["I'm not tall enough to reach the shelf.", 'Я недостаточно высокий, чтобы достать до полки.'],
      ["We don't have enough money.", 'У нас не хватает денег.'], ['The film was so boring that I fell asleep.', 'Фильм был таким скучным, что я уснул.'],
      ['They are such nice people.', 'Они такие милые люди.']] },
    { t: 'warn', h: '<b>Enough</b> стоит <b>после</b> прилагательного: <i>good enough</i>, а не «enough good».' },
    { t: 'tip', h: 'Перед существительным — <b>such</b>, перед одним прилагательным — <b>so</b>: <i>so beautiful</i>, но <i>such a beautiful place</i>.' }
  ],
  quiz: [
    { q: "I can't drink this tea. It's ___ hot.", o: ['too', 'enough', 'such'], a: 0, w: 'Слишком — too.' },
    { q: "She isn't ___ to vote.", o: ['enough old', 'old enough', 'too old'], a: 1, w: 'Прилагательное + enough.' },
    { q: 'We have ___ chairs for everyone.', o: ['enough', 'too', 'so'], a: 0, w: 'enough + существительное.' },
    { q: "It's ___ a beautiful city!", o: ['so', 'such', 'too'], a: 1, w: 'Перед a + прил. + сущ. — such.' },
    { q: "I'm ___ happy to see you!", o: ['such', 'so', 'enough'], a: 1, w: 'Перед прилагательным — so.' },
    { q: 'The box was ___ heavy that I couldn’t lift it.', o: ['so', 'such', 'too'], a: 0, w: 'so … that.' },
    { q: 'Переведите: «недостаточно хорошо» — not ___ .', t: ['good enough'], w: 'good enough.' },
    { q: 'They are ___ nice people.', o: ['so', 'such', 'such a'], a: 1, w: 'Множественное число — such без a.' }
  ]
}
);
