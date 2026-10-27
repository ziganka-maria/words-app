// Дополнительные вопросы для «Отработать», уровень A2: GDRILL[урок] — тот же вид, что quiz в grammar-en2.js и grammar-en3.js
window.GDRILL = window.GDRILL || {};
Object.assign(GDRILL, {
'en-countable': [
  { q: 'How ___ people came to the party?', o: ['much', 'many'], a: 1, w: 'People — исчисляемое → many.' },
  { q: 'There isn’t ___ milk left.', o: ['many', 'much'], a: 1, w: 'Milk — неисчисляемое, отрицание → much.' },
  { q: 'I’ve got ___ ideas. (немного, несколько)', o: ['a few', 'a little'], a: 0, w: 'Ideas исчисляемые → a few.' },
  { q: 'Can I have ___ sugar in my tea? (чуть-чуть)', o: ['a few', 'a little'], a: 1, w: 'Sugar неисчисляемое → a little.' },
  { q: 'She drinks ___ coffee. (много, в утверждении)', o: ['a lot of', 'many'], a: 0, w: 'В утверждениях естественнее a lot of; many — для исчисляемых.' },
  { q: 'Что неисчисляемое?', o: ['furniture', 'table', 'lamp'], a: 0, w: 'Furniture неисчисляемое: some furniture, a piece of furniture.' },
  { q: 'Как сказать «хороший совет»?', o: ['a good advice', 'some good advice', 'good advices'], a: 1, w: 'Advice без a и без -s.' },
  { q: 'We don’t have ___ time. Hurry up! (впишите much или many)', t: ['much'], w: 'Time здесь неисчисляемое → much.' },
  { q: 'Что верно?', o: ['The news are good.', 'The news is good.'], a: 1, w: 'News — неисчисляемое, глагол в единственном: is.' }
],
'en-comparative': [
  { q: 'My new flat is ___ than the old one. (big)', o: ['biger', 'bigger', 'more big'], a: 1, w: 'Короткое слово на гласная+согласная: удваиваем — bigger.' },
  { q: 'This book is ___ than the film. (interesting)', o: ['interestinger', 'more interesting', 'most interesting'], a: 1, w: 'Длинное слово → more.' },
  { q: 'This bag is ___ than mine. (heavy) (впишите)', t: ['heavier'], w: 'y → ier: heavier.' },
  { q: 'Your English is ___ than mine. (good)', o: ['gooder', 'better', 'more good'], a: 1, w: 'Исключение: good → better.' },
  { q: 'My cold is ___ than yesterday. (bad)', o: ['worse', 'badder', 'more bad'], a: 0, w: 'Исключение: bad → worse.' },
  { q: 'She is taller ___ her mother.', o: ['that', 'than', 'then'], a: 1, w: 'Сравнение — than.' },
  { q: 'The second half was ___ than the first. (boring)', o: ['boringer', 'more boring', 'most boring'], a: 1, w: 'Длинное слово → more.' },
  { q: 'Как сказать «Он не такой высокий, как я»?', o: ["He isn't as tall as me.", "He isn't so tall that me.", "He isn't tall as me."], a: 0, w: 'not as … as.' },
  { q: 'The train is ___ than the bus. (fast)', o: ['faster', 'more fast', 'fastly'], a: 0, w: 'fast → faster.' }
],
'en-superlative': [
  { q: 'This is ___ restaurant in town. (good)', o: ['the best', 'the goodest', 'the better'], a: 0, w: 'good → the best.' },
  { q: 'Who is ___ person in your family? (old)', o: ['the older', 'the oldest', 'oldest'], a: 1, w: 'Превосходная — the + -est.' },
  { q: 'It was ___ day of the year. (hot)', o: ['the hotest', 'the hottest', 'the most hot'], a: 1, w: 'Удваиваем t: the hottest.' },
  { q: 'This is ___ book I have ever read. (boring)', o: ['the boringest', 'the most boring', 'the more boring'], a: 1, w: 'Длинное слово → the most.' },
  { q: 'He is the ___ person I know. (funny) (впишите)', t: ['funniest'], w: 'y → iest: funniest.' },
  { q: 'That was ___ film ever! (bad)', o: ['the baddest', 'the worst', 'the most bad'], a: 1, w: 'bad → the worst.' },
  { q: 'Moscow is the biggest city ___ Russia.', o: ['of', 'in', 'from'], a: 1, w: 'С местом — in: the biggest city in Russia.' },
  { q: 'She is the youngest ___ the three sisters.', o: ['in', 'of', 'from'], a: 1, w: 'Из группы — of.' },
  { q: 'Что верно?', o: ['the most cheap', 'the cheapest', 'the cheaper'], a: 1, w: 'cheap — короткое слово: the cheapest.' }
],
'en-future': [
  { q: 'We’ve bought the tickets. We ___ fly to Rome in May.', o: ['will', 'are going to'], a: 1, w: 'Решено заранее → going to.' },
  { q: 'It’s cold. — I ___ close the window. (решил прямо сейчас)', o: ["'ll", "'m going to"], a: 0, w: 'Решение в момент речи → will.' },
  { q: 'I think it ___ be sunny tomorrow.', o: ['will', 'is'], a: 0, w: 'Мнение о будущем (I think) → will.' },
  { q: 'Look at that old ladder! It ___ break.', o: ['will', 'is going to'], a: 1, w: 'Видно по ситуации, что вот-вот случится → going to.' },
  { q: 'She ___ (not) come tonight. She’s ill. (впишите кратко)', t: ["won't", "isn't going to"], w: 'won’t = will not.' },
  { q: '___ you help me with my bag? (просьба)', o: ['Will', 'Are'], a: 0, w: 'Просьба — Will you…?' },
  { q: 'What are you going ___ this weekend?', o: ['do', 'to do', 'doing'], a: 1, w: 'going to + глагол.' },
  { q: 'Я обещаю, что позвоню. I promise I ___ call you.', o: ['will', 'am going'], a: 0, w: 'Обещание → will.' },
  { q: 'Что верно?', o: ['I will to call you.', "I'll call you.", 'I going to call you.'], a: 1, w: 'will + глагол без to.' }
],
'en-g1': [
  { q: 'Разговорная форма going to:', o: ['gonna', 'wanna', 'gotta'], a: 0, w: 'going to → gonna.' },
  { q: 'Разговорная форма have got to:', o: ['gonna', 'gotta', 'wanna'], a: 1, w: 'have got to → gotta.' },
  { q: 'I ___ see that film. (хочу, разговорно)', o: ['wanna', 'gonna', 'gotta'], a: 0, w: 'want to → wanna.' },
  { q: 'Что значит «I gotta go»?', o: ['Мне пора идти.', 'Я хочу пойти.', 'Я пойду завтра.'], a: 0, w: 'Gotta — надо.' },
  { q: 'Где gonna уместно?', o: ['в сообщении другу', 'в резюме', 'в письме в банк'], a: 0, w: 'Только в разговоре и неформальной переписке.' },
  { q: 'Напишите полную форму: gonna → … (впишите)', t: ['going to'], w: 'gonna = going to.' },
  { q: 'Что значит «Wanna come?»', o: ['Хочешь пойти?', 'Тебе надо прийти.', 'Ты придёшь?'], a: 0, w: 'Wanna come? = Do you want to come?' },
  { q: 'Что значит «Lemme see»?', o: ['Дай посмотреть.', 'Я вижу.', 'Посмотри на меня.'], a: 0, w: 'Lemme = let me.' },
  { q: 'Что верно в разговорной речи?', o: ["I'm gonna call her.", "I gonna call her.", "I'm gonna to call her."], a: 0, w: 'I’m gonna + глагол (to уже внутри gonna).' }
],
'en-modals': [
  { q: 'You ___ wear a seatbelt. It’s the law.', o: ['must', 'should', "don't have to"], a: 0, w: 'Закон, строгое правило → must.' },
  { q: 'You ___ come early. The meeting starts at ten. (не обязательно)', o: ["mustn't", "don't have to"], a: 1, w: 'Не обязательно → don’t have to.' },
  { q: 'You ___ eat so much sugar. It’s bad for you. (совет)', o: ["shouldn't", "don't have to"], a: 0, w: 'Совет «не стоит» → shouldn’t.' },
  { q: 'I ___ work yesterday. (пришлось)', o: ['must', 'had to', 'have to'], a: 1, w: 'В прошлом — had to.' },
  { q: 'Does she ___ get up early?', o: ['has to', 'have to', 'must'], a: 1, w: 'После does — have to.' },
  { q: 'You ___ use your phone during the exam. (запрещено)', o: ["mustn't", "don't have to"], a: 0, w: 'Запрет → mustn’t.' },
  { q: 'Как дать совет «Тебе стоит увидеть этот фильм»?', o: ['You should see this film.', 'You must to see this film.', 'You have see this film.'], a: 0, w: 'should + глагол.' },
  { q: 'We ___ hurry. We have lots of time. (впишите кратко)', t: ["don't have to", 'do not have to', "don't need to"], w: 'Нет необходимости → don’t have to.' },
  { q: 'Что верно?', o: ['I can to swim.', 'I can swim.', 'I cans swim.'], a: 1, w: 'После модального глагола — без to.' }
],
'en-adverbs': [
  { q: 'She speaks English very ___. (good)', o: ['good', 'well', 'goodly'], a: 1, w: 'good → well.' },
  { q: 'He ___ late for work. (никогда не опаздывает)', o: ['never is', 'is never', 'never'], a: 1, w: 'С be — после глагола: is never.' },
  { q: 'Please drive ___. (slow)', o: ['slow', 'slowly'], a: 1, w: 'Как именно — наречие: slowly.' },
  { q: 'I ___ have breakfast. (обычно)', o: ['usually', 'usual'], a: 0, w: 'Как часто — usually, перед глаголом.' },
  { q: 'He works very ___. (hard)', o: ['hard', 'hardly'], a: 0, w: 'Hard — и прилагательное, и наречие; hardly — «едва».' },
  { q: 'Прилагательное happy → наречие: (впишите)', t: ['happily'], w: 'y → ily: happily.' },
  { q: 'She is a ___ swimmer. (fast)', o: ['fast', 'fastly'], a: 0, w: 'Fast — и прилагательное, и наречие; fastly нет.' },
  { q: 'Куда поставить «sometimes»?', o: ['We sometimes eat out.', 'We eat sometimes out.'], a: 0, w: 'Перед смысловым глаголом.' },
  { q: 'The soup smells ___.', o: ['good', 'well'], a: 0, w: 'После smell, look, taste — прилагательное.' }
],
'en-pastcont': [
  { q: 'What ___ you doing at 8 pm yesterday?', o: ['did', 'were', 'was'], a: 1, w: 'you → were + -ing.' },
  { q: 'The sun ___ when we woke up. (shine)', o: ['shone', 'was shining', 'is shining'], a: 1, w: 'Фон в прошлом → was shining.' },
  { q: 'I ___ my leg while I was skiing.', o: ['broke', 'was breaking'], a: 0, w: 'Короткое событие на фоне → Past Simple.' },
  { q: 'They ___ (wait) for us at the station. (впишите две части)', t: ['were waiting'], w: 'they → were waiting.' },
  { q: 'She ___ sleeping when the phone rang. (отрицание)', o: ["wasn't", "weren't", "didn't"], a: 0, w: 'she → wasn’t.' },
  { q: '___ it raining when you left?', o: ['Was', 'Were', 'Did'], a: 0, w: 'it → Was…?' },
  { q: 'While she ___, I cleaned the flat. (cook)', o: ['cooked', 'was cooking'], a: 1, w: 'Длительное действие с while → was cooking.' },
  { q: 'When I arrived, they ___ dinner. (уже сидели и ели)', o: ['had', 'were having'], a: 1, w: 'Процесс в момент события → were having.' },
  { q: 'Что верно?', o: ['I was knowing the answer.', 'I knew the answer.'], a: 1, w: 'Know не ставят в -ing.' }
],
'en-g2': [
  { q: 'I ___ my keys! I can’t find them anywhere.', o: ['lost', 'have lost'], a: 1, w: 'Результат важен сейчас → have lost.' },
  { q: 'Have you ___ been to Japan?', o: ['ever', 'yet', 'already'], a: 0, w: 'Когда-нибудь — ever.' },
  { q: 'She hasn’t called ___.', o: ['already', 'yet', 'ever'], a: 1, w: 'В отрицаниях в конце — yet.' },
  { q: 'Третья форма глагола eat: (впишите)', t: ['eaten'], w: 'eat — ate — eaten.' },
  { q: 'We ___ this film. Let’s watch something else.', o: ['have seen', 'have saw', 'saw already'], a: 0, w: 'have + 3-я форма: seen.' },
  { q: 'Has he finished? — Yes, he ___.', o: ['has', 'have', 'did'], a: 0, w: 'Краткий ответ: Yes, he has.' },
  { q: 'Он бывал в Лондоне (и вернулся). He has ___ to London.', o: ['been', 'gone'], a: 0, w: 'Been — съездил и вернулся; gone — уехал и ещё там.' },
  { q: 'I have ___ finished my work.', o: ['just', 'yet', 'ever'], a: 0, w: 'Только что — just.' },
  { q: 'Что верно?', o: ['I have seen him yesterday.', 'I saw him yesterday.'], a: 1, w: 'С yesterday — Past Simple.' }
],
'en-cond1': [
  { q: 'If you ___ now, you’ll catch the train.', o: ['leave', 'will leave'], a: 0, w: 'После if — Present Simple.' },
  { q: 'If she calls, I ___ you.', o: ['tell', "'ll tell"], a: 1, w: 'В главной части — will.' },
  { q: 'We won’t go out if it ___. (rain)', o: ['rains', 'will rain'], a: 0, w: 'После if — rains.' },
  { q: 'If you heat ice, it ___.', o: ['melts', 'will melt', 'melted'], a: 0, w: 'О законах природы — if + Present, Present (will melt тоже возможно, но реже).' },
  { q: 'I’ll buy it if it ___ too expensive. (отрицание, кратко)', o: ["isn't", "won't be"], a: 0, w: 'После if — isn’t.' },
  { q: 'What will you do if you ___ the exam? (fail) (впишите)', t: ['fail'], w: 'После if — Present Simple.' },
  { q: '___ you hurry, you’ll be late.', o: ['If', 'Unless'], a: 1, w: 'Unless = if not: если не поторопишься.' },
  { q: 'Call me when you ___ home.', o: ['get', 'will get'], a: 0, w: 'После when о будущем — тоже Present.' },
  { q: 'Что верно?', o: ['Unless you hurry, you will be late.', 'Unless you will hurry, you are late.'], a: 0, w: 'После unless, как после if, — Present.' }
],
'en-ing': [
  { q: 'I hope ___ you soon.', o: ['to see', 'seeing'], a: 0, w: 'hope + to.' },
  { q: 'She doesn’t mind ___ late.', o: ['to work', 'working'], a: 1, w: 'mind + -ing.' },
  { q: 'We’re thinking about ___ a car.', o: ['to buy', 'buying'], a: 1, w: 'После предлога — -ing.' },
  { q: 'He promised ___ me.', o: ['to help', 'helping'], a: 0, w: 'promise + to.' },
  { q: 'I’m good at ___. (cook)', o: ['cook', 'cooking', 'to cook'], a: 1, w: 'После предлога at — -ing.' },
  { q: 'They want ___ abroad. (live) (впишите)', t: ['to live'], w: 'want + to.' },
  { q: 'Stop ___! I’m trying to sleep. (talk)', o: ['to talk', 'talking'], a: 1, w: 'Перестать что-то делать — stop + -ing.' },
  { q: '___ is good for your health.', o: ['Swim', 'Swimming', 'To swimming'], a: 1, w: 'Действие как подлежащее — -ing.' },
  { q: 'I’d love ___ to your party.', o: ['to come', 'coming'], a: 0, w: 'would love + to.' }
],
'en-howq': [
  { q: '___ do you take the bus? — Every day.', o: ['How often', 'How long', 'How much'], a: 0, w: 'Как часто — how often.' },
  { q: '___ does it take to get there? — About an hour.', o: ['How long', 'How far', 'How often'], a: 0, w: 'Сколько времени — how long.' },
  { q: '___ is your brother? — He’s 1 metre 90.', o: ['How tall', 'How high', 'How long'], a: 0, w: 'Рост — how tall.' },
  { q: '___ milk do we need?', o: ['How many', 'How much'], a: 1, w: 'Milk неисчисляемое → how much.' },
  { q: '___ are you? — Fine, thanks.', o: ['How', 'What', 'How old'], a: 0, w: 'Как дела — How are you?' },
  { q: '___ is the river? (длина)', o: ['How long', 'How much', 'How tall'], a: 0, w: 'Длина — how long.' },
  { q: 'How ___ countries have you visited? (впишите)', t: ['many'], w: 'Countries исчисляемые → many.' },
  { q: '___ is the airport from here?', o: ['How far', 'How long', 'How much'], a: 0, w: 'Расстояние — how far.' },
  { q: '___ do you spell your name?', o: ['How', 'What', 'Which'], a: 0, w: 'How do you spell…? — как пишется.' }
],
'en-relative': [
  { q: 'I know a man ___ can fix your car.', o: ['who', 'which'], a: 0, w: 'О человеке — who.' },
  { q: 'The phone ___ I bought last week is broken.', o: ['who', 'which'], a: 1, w: 'О предмете — which/that.' },
  { q: 'This is the shop ___ sells old books.', o: ['who', 'that', 'where'], a: 1, w: 'Shop — предмет; продаёт сам магазин → that/which.' },
  { q: 'Do you remember the hotel ___ we stayed?', o: ['which', 'where', 'who'], a: 1, w: 'Место, где — where.' },
  { q: 'The people ___ live upstairs are very noisy.', o: ['who', 'which'], a: 0, w: 'People → who.' },
  { q: 'Можно ли опустить that? The film (that) we saw was great.', o: ['можно', 'нельзя'], a: 0, w: 'Если после that идёт подлежащее (we), that можно опустить.' },
  { q: 'Можно ли опустить who? The girl who lives here is nice.', o: ['можно', 'нельзя'], a: 1, w: 'Who здесь подлежащее (lives) — опускать нельзя.' },
  { q: 'That’s the teacher ___ helped me. (впишите who или which)', t: ['who', 'that'], w: 'О человеке — who (или that).' },
  { q: 'Что верно?', o: ['The cake who you made is great.', 'The cake that you made is great.'], a: 1, w: 'Cake — предмет: that/which.' }
],
'en-phrasal': [
  { q: 'Please ___ your shoes. (сними)', o: ['take off', 'put on', 'turn off'], a: 0, w: 'take off — снять.' },
  { q: 'It’s cold. ___ your coat. (надень)', o: ['Take off', 'Put on', 'Turn on'], a: 1, w: 'put on — надеть.' },
  { q: 'Can you ___ the TV? I want to watch the news. (включи)', o: ['turn on', 'turn off', 'turn up'], a: 0, w: 'turn on — включить.' },
  { q: 'I ___ at seven every day. (встаю)', o: ['get up', 'get on', 'go up'], a: 0, w: 'get up — вставать.' },
  { q: 'Где ставить it? The music is loud. Turn ___.', o: ['down it', 'it down'], a: 1, w: 'Местоимение — в середину: turn it down.' },
  { q: 'Please ___ the form. (заполните)', o: ['fill in', 'fill on', 'fill at'], a: 0, w: 'fill in — заполнить.' },
  { q: 'I’ll ___ you ___ at the station. (заберу)', o: ['pick … up', 'pick … on', 'take … off'], a: 0, w: 'pick up — забрать.' },
  { q: 'We ran ___ of milk. (закончилось) (впишите одно слово)', t: ['out'], w: 'run out of — закончиться.' },
  { q: 'Что значит «Hold on, please» (по телефону)?', o: ['Подождите, пожалуйста.', 'Держитесь крепче.', 'Положите трубку.'], a: 0, w: 'По телефону hold on — подождите.' }
]
});
