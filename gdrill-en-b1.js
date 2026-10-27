// Дополнительные вопросы для «Отработать», уровень B1: GDRILL[урок] — тот же вид, что quiz в grammar-en4.js
window.GDRILL = window.GDRILL || {};
Object.assign(GDRILL, {
'en-ppps': [
  { q: 'I ___ to Paris three times. (опыт, до сих пор)', o: ['went', 'have been'], a: 1, w: 'Опыт без точного времени → Present Perfect.' },
  { q: 'We ___ to Paris last summer.', o: ['went', 'have gone'], a: 0, w: 'Точное время (last summer) → Past Simple.' },
  { q: 'She ___ in this company since 2015.', o: ['worked', 'has worked'], a: 1, w: 'since + до сих пор → Present Perfect.' },
  { q: 'When ___ you start your new job?', o: ['have', 'did'], a: 1, w: 'С when — Past Simple.' },
  { q: 'I ___ him for ages. How is he?', o: ["didn't see", "haven't seen"], a: 1, w: 'До настоящего момента → haven’t seen.' },
  { q: 'Mozart ___ more than 600 pieces of music.', o: ['wrote', 'has written'], a: 0, w: 'Человека уже нет, период закончен → Past Simple.' },
  { q: 'Have you seen the new film? — Yes, I ___ it on Friday.', o: ['saw', 'have seen'], a: 0, w: 'Уточнили время (on Friday) → Past Simple.' },
  { q: 'This is the first time I ___ sushi.', o: ['tried', 'have tried'], a: 1, w: 'This is the first time… → Present Perfect.' },
  { q: 'Я живу здесь с детства. I ___ here since I was a child. (впишите две части)', t: ['have lived', "'ve lived", 'have been living'], w: 'Живу до сих пор → have lived.' }
],
'en-ppc': [
  { q: 'I ___ for you for half an hour! Where were you?', o: ['have waited', 'have been waiting'], a: 1, w: 'Длительность действия, которое только что шло → Continuous.' },
  { q: 'Your eyes are red. ___ you been crying?', o: ['Have', 'Did', 'Are'], a: 0, w: 'Have you been crying? — видим результат процесса.' },
  { q: 'I ___ three chapters today.', o: ['have read', 'have been reading'], a: 0, w: 'Сколько сделано (результат, число) → Present Perfect Simple.' },
  { q: 'She ___ English for five years.', o: ['is learning', 'has been learning'], a: 1, w: 'С for/since о процессе до сих пор → has been learning.' },
  { q: 'How long ___ it been snowing?', o: ['has', 'is', 'did'], a: 0, w: 'How long has it been…?' },
  { q: 'They have been ___ all morning. (argue) (впишите)', t: ['arguing'], w: 'been + -ing.' },
  { q: 'I ___ him since 2010.', o: ['have known', 'have been knowing'], a: 0, w: 'Know не ставят в Continuous.' },
  { q: 'You look tired. — I ___ in the garden all day.', o: ['have worked', 'have been working'], a: 1, w: 'Объясняем вид процессом → Continuous.' },
  { q: 'Что верно?', o: ['I am living here for two years.', 'I have been living here for two years.'], a: 1, w: 'С for о периоде до сих пор — не Present Continuous.' }
],
'en-pastperf': [
  { q: 'When I got to the cinema, the film ___.', o: ['started', 'had started'], a: 1, w: 'Началось раньше, чем я пришёл → had started.' },
  { q: 'I ___ the book before I saw the film.', o: ['had read', 'have read'], a: 0, w: 'Раньше другого прошлого события → had read.' },
  { q: 'She was nervous because she ___ never flown before.', o: ['has', 'had', 'was'], a: 1, w: 'had + 3-я форма.' },
  { q: 'After they ___ dinner, they went for a walk.', o: ['had had', 'have had'], a: 0, w: 'had had — не опечатка: had + had.' },
  { q: 'By 2010 he ___ in five countries. (live)', o: ['lived', 'had lived'], a: 1, w: 'By + момент в прошлом → Past Perfect.' },
  { q: 'I didn’t know that you ___ married. (женился раньше; впишите две части)', t: ['had got', 'had gotten', "'d got", 'had been'], w: 'Женился раньше, чем я узнал → had got.' },
  { q: 'Как сказать «Когда мы пришли, все уже ушли»?', o: ['When we arrived, everyone left.', 'When we arrived, everyone had left.'], a: 1, w: 'Ушли до нашего прихода → had left.' },
  { q: 'Had you ever been abroad before that trip? — No, I ___.', o: ["hadn't", "haven't", "didn't"], a: 0, w: 'Краткий ответ: No, I hadn’t.' },
  { q: 'He realised he ___ his keys at home.', o: ['left', 'had left', 'has left'], a: 1, w: 'Оставил раньше, чем понял → had left.' }
],
'en-usedto': [
  { q: 'We ___ go to the sea every summer when I was a kid.', o: ['used to', 'use to', 'are used to'], a: 0, w: 'Привычка в прошлом → used to.' },
  { q: 'Did you ___ play the piano?', o: ['used to', 'use to'], a: 1, w: 'После did — use to (без d).' },
  { q: 'She didn’t ___ like vegetables.', o: ['used to', 'use to'], a: 1, w: 'После didn’t — use to.' },
  { q: 'She’s used to ___ alone.', o: ['live', 'living'], a: 1, w: 'be used to + -ing — привыкла.' },
  { q: 'He ___ a lot, but now he doesn’t. (smoke) (впишите две части)', t: ['used to smoke'], w: 'used to + глагол.' },
  { q: 'Как сказать «Раньше здесь был кинотеатр»?', o: ['There used to be a cinema here.', 'There was used to a cinema here.', 'There use to be a cinema here.'], a: 0, w: 'There used to be…' },
  { q: 'It took me a while to ___ driving on the left.', o: ['get used to', 'use to'], a: 0, w: 'get used to — привыкнуть.' },
  { q: 'Что значит «I used to work at night»?', o: ['Раньше я работал(а) по ночам.', 'Я привык(ла) работать по ночам.', 'Я обычно работаю по ночам.'], a: 0, w: 'used to + глагол — «раньше», сейчас уже нет.' },
  { q: 'Что значит «I’m used to working at night»?', o: ['Раньше я работал(а) по ночам.', 'Мне привычно работать по ночам.'], a: 1, w: 'be used to + -ing — привычно.' }
],
'en-cond2': [
  { q: 'If I ___ his number, I would call him.', o: ['know', 'knew', 'would know'], a: 1, w: 'Нереальное сейчас: if + Past.' },
  { q: 'If she ___ more, she would get better marks.', o: ['studied', 'studies'], a: 0, w: 'if + Past Simple.' },
  { q: 'I ___ that job if I were you.', o: ["won't take", "wouldn't take"], a: 1, w: 'Совет «на твоём месте» → would.' },
  { q: 'If we lived by the sea, we ___ swim every day.', o: ['will', 'would'], a: 1, w: 'Главная часть → would.' },
  { q: 'What would you do if you ___ a million dollars? (find)', o: ['find', 'found', 'would find'], a: 1, w: 'if + Past.' },
  { q: 'If I ___ you, I’d apologise. (впишите)', t: ['were', 'was'], w: 'If I were you — классическая форма (разговорно бывает was).' },
  { q: 'Если бы у меня была машина… If I ___ a car…', o: ['have', 'had', 'would have'], a: 1, w: 'if + had.' },
  { q: 'Какая фраза о реальной возможности?', o: ['If it rains, I’ll stay in.', 'If it rained, I’d stay in.'], a: 0, w: 'Первый тип — реально; второй — маловероятно.' },
  { q: 'She would be happier if she ___ so hard. (work, отрицание)', o: ["didn't work", "doesn't work", "wouldn't work"], a: 0, w: 'if + didn’t + глагол.' }
],
'en-passive': [
  { q: 'This bridge ___ in 1890.', o: ['built', 'was built', 'has built'], a: 1, w: 'Пассив прошлого: was + 3-я форма.' },
  { q: 'These cars ___ in Germany. (make)', o: ['make', 'are made', 'are making'], a: 1, w: 'Машины делают (кто — неважно) → are made.' },
  { q: 'The letters ___ every morning.', o: ['are delivered', 'is delivered', 'deliver'], a: 0, w: 'letters — много → are delivered.' },
  { q: 'My car ___ at the moment. (ремонтируют)', o: ['is repaired', 'is being repaired'], a: 1, w: 'Прямо сейчас → is being repaired.' },
  { q: 'The winners will ___ tonight. (объявят)', o: ['announce', 'be announced', 'announced'], a: 1, w: 'will be + 3-я форма.' },
  { q: 'The film was directed ___ a famous Italian.', o: ['by', 'with', 'from'], a: 0, w: 'Кем — by.' },
  { q: 'Всех пригласили. Everyone ___ invited. (впишите)', t: ['was', 'has been'], w: 'Everyone was invited (или has been invited).' },
  { q: 'Пассив: They have cancelled the flight. → The flight ___.', o: ['has cancelled', 'has been cancelled', 'was cancel'], a: 1, w: 'has been + 3-я форма.' },
  { q: 'Где пассив естественнее?', o: ['My bag was stolen.', 'Someone stole my bag and nobody knows who.'], a: 0, w: 'Когда исполнитель неизвестен — пассив короче и естественнее.' }
],
'en-reported': [
  { q: '"I can’t swim." → She said she ___ swim.', o: ["can't", "couldn't", "didn't"], a: 1, w: 'Сдвиг: can’t → couldn’t.' },
  { q: '"We live in Rome." → They said they ___ in Rome.', o: ['live', 'lived', 'have lived'], a: 1, w: 'Present → Past.' },
  { q: '"I saw the film." → She said she ___ the film.', o: ['saw', 'had seen', 'has seen'], a: 1, w: 'Past Simple → Past Perfect (в разговоре бывает и saw).' },
  { q: 'He told ___ that he was busy.', o: ['me', 'to me', '—'], a: 0, w: 'tell + кому (без to).' },
  { q: 'She said ___ me that she was busy.', o: ['—', 'to'], a: 1, w: 'say to someone; tell someone.' },
  { q: '"Do you like jazz?" → He asked me ___ I liked jazz.', o: ['that', 'if', 'do'], a: 1, w: 'Вопрос да/нет → if/whether.' },
  { q: '"Don’t be late." → She told us ___ late.', o: ['not be', 'not to be', "don't be"], a: 1, w: 'Просьба «не» → told us not to…' },
  { q: '"What time is it?" → She asked what time it ___. (впишите)', t: ['was'], w: 'В косвенном вопросе — прямой порядок и сдвиг: what time it was.' },
  { q: '"I’ll call tomorrow." → He said he would call ___. (пересказываете через неделю)', o: ['tomorrow', 'the next day'], a: 1, w: 'При пересказе позже tomorrow → the next day.' }
],
'en-deduction': [
  { q: 'He’s not answering. He ___ be asleep. (наверное)', o: ['must', "can't"], a: 0, w: 'Уверенная догадка → must.' },
  { q: 'That ___ be Tom. He’s in London. (не может быть)', o: ["mustn't", "can't"], a: 1, w: 'Невозможно → can’t (не mustn’t).' },
  { q: 'Take an umbrella. It ___ rain later. (возможно)', o: ['might', 'must'], a: 0, w: 'Возможно → might.' },
  { q: 'She ___ have left already. Her coat is gone.', o: ['must', "can't"], a: 0, w: 'Уверены о прошлом → must have + 3-я форма.' },
  { q: 'They ___ have seen us. It was too dark.', o: ['must', "can't"], a: 1, w: 'Невозможно в прошлом → can’t have.' },
  { q: 'I’m not sure, but he ___ be at work. (впишите might или must)', t: ['might', 'may', 'could'], w: 'Неуверенно → might/may/could.' },
  { q: 'You’ve been travelling all day. You ___ be hungry.', o: ['must', 'might not', "can't"], a: 0, w: 'Логичный вывод → must.' },
  { q: 'Как сказать «Он, наверное, забыл»?', o: ['He must forget.', 'He must have forgotten.', 'He must forgot.'], a: 1, w: 'О прошлом: must have + 3-я форма.' },
  { q: 'The keys ___ be in the car. I don’t know. (может быть)', o: ['could', 'must', "can't"], a: 0, w: 'Одна из возможностей → could.' }
],
'en-relative2': [
  { q: 'That’s the man ___ car was stolen.', o: ['who', 'whose', 'which'], a: 1, w: 'Чей → whose.' },
  { q: 'Paris, ___ I lived for two years, is beautiful.', o: ['which', 'where', 'that'], a: 1, w: 'Место, где → where.' },
  { q: 'My mother, ___ is 70, still works.', o: ['who', 'that', 'which'], a: 0, w: 'С запятыми that нельзя → who.' },
  { q: 'He passed the exam, ___ surprised everyone.', o: ['that', 'which', 'what'], a: 1, w: '…, which — относится ко всему предложению.' },
  { q: 'Нужны ли запятые? My sister who lives in Spain is a doctor. (у меня одна сестра)', o: ['да, нужны', 'нет'], a: 0, w: 'Если сестра одна, это доп. информация — в запятых.' },
  { q: 'This is the girl ___ brother plays in a band. (впишите)', t: ['whose'], w: 'Чей брат → whose.' },
  { q: 'I remember the day ___ we met.', o: ['when', 'where', 'which'], a: 0, w: 'Время → when.' },
  { q: 'В какой фразе нельзя использовать that?', o: ['The car that I bought is red.', 'My car, that I bought last year, is red.'], a: 1, w: 'После запятой — только which.' },
  { q: 'The reason ___ I called is simple.', o: ['why', 'which', 'what'], a: 0, w: 'the reason why…' }
],
'en-future2': [
  { q: 'I ___ my grandparents on Sunday. It’s all arranged.', o: ["'m visiting", 'visit'], a: 0, w: 'Договорённость → Present Continuous.' },
  { q: 'The concert ___ at 8 pm. (по расписанию)', o: ['starts', 'is going to start'], a: 0, w: 'Расписание → Present Simple.' },
  { q: 'Call me as soon as you ___.', o: ['arrive', 'will arrive'], a: 0, w: 'После as soon as о будущем — Present.' },
  { q: 'At 9 tonight I ___ my favourite show.', o: ['will watch', 'will be watching'], a: 1, w: 'Процесс в момент в будущем → will be + -ing.' },
  { q: 'What time ___ your plane leave?', o: ['does', 'is'], a: 0, w: 'Расписание → does … leave.' },
  { q: 'We ___ (meet) Anna for lunch tomorrow. (договорились; впишите две части)', t: ["are meeting", "'re meeting"], w: 'are meeting.' },
  { q: 'Don’t start until everybody ___.', o: ['arrives', 'will arrive'], a: 0, w: 'После until о будущем — Present.' },
  { q: '___ you be using the car tonight? (вежливо о планах)', o: ['Will', 'Are'], a: 0, w: 'Will you be using…? — мягкий вопрос о планах.' },
  { q: 'Что лучше для твёрдых планов на завтра с конкретным временем?', o: ["I'm seeing the dentist at ten.", 'I will see the dentist at ten.'], a: 0, w: 'Записался → Present Continuous.' }
],
'en-tags': [
  { q: 'You’re coming, ___?', o: ["aren't you", "don't you", "isn't it"], a: 0, w: 'are → aren’t you.' },
  { q: 'She can swim, ___?', o: ["can't she", "doesn't she", "isn't she"], a: 0, w: 'can → can’t she.' },
  { q: 'He doesn’t eat meat, ___?', o: ['does he', "doesn't he", 'is he'], a: 0, w: 'Отрицание → положительный хвостик.' },
  { q: 'You’ve met him, ___?', o: ["haven't you", "didn't you", "don't you"], a: 0, w: 'have → haven’t you.' },
  { q: 'It was a great party, ___?', o: ["wasn't it", "isn't it", "didn't it"], a: 0, w: 'was → wasn’t it.' },
  { q: 'Everyone’s here, ___?', o: ["aren't they", "isn't it", "don't they"], a: 0, w: 'С everyone хвостик с they: aren’t they?' },
  { q: 'Open the window, ___?', o: ['will you', 'do you', "don't you"], a: 0, w: 'После просьбы — will you?' },
  { q: 'They won’t mind, ___? (впишите два слова)', t: ['will they'], w: 'won’t → will they.' },
  { q: 'Nobody called, ___?', o: ['did they', "didn't they", 'did he'], a: 0, w: 'Nobody — отрицание; хвостик с they: did they?' }
],
'en-enough': [
  { q: 'The shoes are ___ small for me.', o: ['too', 'enough', 'so'], a: 0, w: 'Слишком → too.' },
  { q: 'Are you ___ to reach the shelf?', o: ['tall enough', 'enough tall', 'too tall'], a: 0, w: 'enough — после прилагательного: tall enough.' },
  { q: 'We don’t have ___ money for a new car.', o: ['too', 'enough', 'so'], a: 1, w: 'enough перед существительным.' },
  { q: 'It was ___ a good film that I watched it twice.', o: ['so', 'such'], a: 1, w: 'such + a + прилагательное + существительное.' },
  { q: 'She was ___ tired that she fell asleep at once.', o: ['so', 'such'], a: 0, w: 'so + прилагательное.' },
  { q: 'There were ___ many people that we left.', o: ['so', 'such', 'too'], a: 0, w: 'so many / so much.' },
  { q: 'Is the room big ___ for four people? (впишите)', t: ['enough'], w: 'big enough.' },
  { q: 'Что верно?', o: ['It’s too much expensive.', 'It’s too expensive.', 'It’s enough expensive.'], a: 1, w: 'too + прилагательное.' },
  { q: 'It was ___ an easy test that everyone passed.', o: ['so', 'such', 'too'], a: 1, w: 'such + a + прилагательное + существительное.' }
]
});
