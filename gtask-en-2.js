// задания тренажёров по темам (английский), часть 2: Present Perfect, будущее, условия и wish, модальные глаголы
// GTASK[урок] = [задания]; номер задания — ключ ошибок ('xN'), поэтому только дописывать в конец
window.GTASK = window.GTASK || {};
Object.assign(GTASK, {

'en-g2': [
  { q: 'I ___ this film. Let’s watch something else.', o: ['have seen', 'seen', 'see'], a: 0, w: 'Результат важен сейчас, время не названо → Present Perfect.' },
  { q: '___ you ever been to Japan?', o: ['Have', 'Did', 'Are'], a: 0, w: 'Опыт в жизни → Have you ever been…?' },
  { q: 'She ___ her keys, so she can’t get in.', o: ['have lost', 'has lost', 'loses'], a: 1, w: 'Потеряла — и сейчас нет ключей → has lost.' },
  { q: 'We haven’t finished ___.', o: ['already', 'yet', 'ever'], a: 1, w: 'В отрицании — yet в конце.' },
  { q: 'He has ___ left. You just missed him.', o: ['yet', 'just', 'ever'], a: 1, w: 'Just — «только что».' },
  { q: 'I have ___ eaten sushi. I’d love to try it.', o: ['never', 'ever', 'yet'], a: 0, w: 'Never — «никогда».' },
  { q: 'My parents ___ to Paris twice.', o: ['have been', 'have gone', 'has been'], a: 0, w: 'Побывали и вернулись → have been (gone — уехали и ещё там).' },
  { k: 'form', q: 'I ___ (already / do, Present Perfect) my homework.', t: ['have already done', "'ve already done", 'have done already', "'ve done already"], w: 'Have + already + done.' },
  { k: 'form', q: 'She ___ (not / call) me yet.', t: ["hasn't called", 'has not called'], w: 'She → hasn’t called.' },
  { k: 'form', q: '___ (you / finish) the report yet?', t: ['have you finished'], w: 'Have + you + finished.' },
  { k: 'fix', q: 'I have saw this before.', t: ['I have seen this before.', "I've seen this before."], w: 'После have — третья форма: seen.' },
  { k: 'fix', q: 'She has went home.', t: ['She has gone home.', "She's gone home.", 'She went home.'], w: 'Третья форма go — gone.' },
  { k: 're', q: 'Сделайте вопрос с ever: You have been to Italy.', t: ['Have you ever been to Italy?'], w: 'Have you ever been…?' },
  { k: 'err', q: 'Найдите ошибку: «He has finish his work.»', o: ['He', 'has finish', 'his work'], a: 1, w: 'Нужна третья форма: has finished.' }
],

'en-ppps': [
  { q: 'I ___ him last week.', o: ['have met', 'met', 'meet'], a: 1, w: 'Last week — названо время → Past Simple.' },
  { q: 'I ___ him since 2015.', o: ['know', 'knew', 'have known'], a: 2, w: 'Since + до сих пор → have known.' },
  { q: 'She ___ in Paris for three years, but now she lives in Rome.', o: ['lived', 'has lived', 'lives'], a: 0, w: 'Закончилось, она там больше не живёт → lived.' },
  { q: 'When ___ this photo?', o: ['have you taken', 'did you take', 'you took'], a: 1, w: 'Вопрос when — всегда Past Simple.' },
  { q: 'We ___ three tests this week, and it’s only Wednesday.', o: ['had', 'have had', 'have'], a: 1, w: 'Неделя ещё не кончилась → Present Perfect.' },
  { q: 'Shakespeare ___ many plays.', o: ['has written', 'wrote', 'writes'], a: 1, w: 'Автора нет в живых, период закрыт → wrote.' },
  { q: 'I ___ to the gym yesterday, but I ___ there today.', o: ['went / haven’t been', 'have gone / didn’t go', 'go / haven’t been'], a: 0, w: 'Yesterday → went; today ещё идёт → haven’t been.' },
  { k: 'form', q: 'They ___ (move) here two years ago.', t: ['moved'], w: 'Ago → Past Simple.' },
  { k: 'form', q: 'He ___ (work) here since January.', t: ['has worked', "'s worked", 'has been working', "'s been working"], w: 'Since → Present Perfect (или Perfect Continuous).' },
  { k: 'form', q: 'I ___ (lose, Present Perfect) my phone. Can you call it?', t: ['have lost', "'ve lost"], w: 'Результат сейчас → have lost.' },
  { k: 'fix', q: 'I have seen her yesterday.', t: ['I saw her yesterday.'], w: 'С yesterday — только Past Simple.' },
  { k: 'fix', q: 'How long do you know Tom?', t: ['How long have you known Tom?'], w: '«Как давно» до сих пор → How long have you known…?' },
  { k: 'err', q: 'Найдите ошибку: «I live here since 2019.»', o: ['I live', 'here', 'since 2019'], a: 0, w: 'Since → have lived.' }
],

'en-ppc': [
  { q: 'I ___ for you for an hour! Where were you?', o: ['wait', 'have been waiting', 'waited'], a: 1, w: 'Длится до сих пор, важна длительность → have been waiting.' },
  { q: 'Your eyes are red. ___ ?', o: ['Have you cried', 'Have you been crying', 'Did you cry'], a: 1, w: 'Видимый след недавнего процесса → have been crying.' },
  { q: 'She ___ three books this year.', o: ['has written', 'has been writing', 'writes'], a: 0, w: 'Сколько штук — результат → has written.' },
  { q: 'How long ___ English?', o: ['do you learn', 'have you been learning', 'are you learning'], a: 1, w: 'How long до сих пор → have you been learning.' },
  { q: 'I ___ him for years.', o: ['have known', 'have been knowing', 'know'], a: 0, w: 'Know не ставят в Continuous → have known.' },
  { k: 'form', q: 'It ___ (rain) all day. The streets are wet.', t: ['has been raining', "'s been raining", 'has rained', "'s rained"], w: 'Весь день и до сих пор → has been raining.' },
  { k: 'form', q: 'They ___ (play) tennis since ten o’clock.', t: ['have been playing', "'ve been playing"], w: 'Since + процесс → have been playing.' },
  { k: 'form', q: 'He ___ (paint) the kitchen. Look, he’s covered in paint!', t: ['has been painting', "'s been painting"], w: 'След недавнего процесса → has been painting.' },
  { k: 'fix', q: 'I am working here for five years.', t: ['I have been working here for five years.', "I've been working here for five years.", 'I have worked here for five years.', "I've worked here for five years."], w: 'For five years до сих пор → have been working / have worked.' },
  { k: 'err', q: 'Найдите ошибку: «She has been owning this car since 2018.»', o: ['She', 'has been owning', 'since 2018'], a: 1, w: 'Own — глагол состояния → has owned.' }
],

'en-future': [
  { q: 'Look at those clouds! It ___ rain.', o: ['will', 'is going to', 'is'], a: 1, w: 'Вывод из того, что видим → is going to.' },
  { q: '— The phone’s ringing. — I ___ get it.', o: ["'ll", "'m going to", 'get'], a: 0, w: 'Решение в момент речи → will (I’ll).' },
  { q: 'We ___ visit Grandma next weekend. We decided last week.', o: ['will', 'are going to', 'go'], a: 1, w: 'Заранее решённый план → going to.' },
  { q: 'I think robots ___ do most jobs in the future.', o: ['will', 'are going', 'going to'], a: 0, w: 'Мнение, прогноз с I think → will.' },
  { q: 'Don’t worry, I ___ tell anyone.', o: ["won't", "don't", "am not"], a: 0, w: 'Обещание → won’t.' },
  { q: 'She ___ be twenty next month.', o: ['will', 'is going', 'is'], a: 0, w: 'Будущий факт → will be.' },
  { k: 'form', q: 'I’m tired. I think I ___ (go) to bed.', t: ['will go', "'ll go"], w: 'Решение сейчас → I’ll go.' },
  { k: 'form', q: 'They ___ (buy) a new car. They’ve saved enough money.', t: ['are going to buy', "'re going to buy"], w: 'План с подготовкой → going to buy.' },
  { k: 'form', q: 'Careful! You ___ (fall)!', t: ['are going to fall', "'re going to fall"], w: 'Видно, что вот-вот случится → going to.' },
  { k: 'fix', q: 'I will to call you tomorrow.', t: ['I will call you tomorrow.', "I'll call you tomorrow."], w: 'После will — глагол без to.' },
  { k: 'fix', q: 'She is going buy a new dress.', t: ['She is going to buy a new dress.', "She's going to buy a new dress."], w: 'Going to + глагол.' },
  { k: 're', q: 'Сделайте вопрос: He is going to study medicine.', t: ['Is he going to study medicine?'], w: 'Is выходит вперёд.' },
  { k: 'err', q: 'Найдите ошибку: «— I’m thirsty. — Wait, I am going to get you some water.» (решение в момент речи)', o: ['I’m thirsty', 'I am going to get', 'you some water'], a: 1, w: 'Решение в момент речи → I’ll get.' }
],

'en-future2': [
  { q: 'I ___ my dentist at 4 tomorrow. It’s all arranged.', o: ['see', "'m seeing", "'ll see"], a: 1, w: 'Договорённость с временем → Present Continuous.' },
  { q: 'The train ___ at 6.15 tomorrow morning.', o: ['leaves', 'is going to leave', 'leave'], a: 0, w: 'Расписание → Present Simple.' },
  { q: 'What ___ this evening? Any plans?', o: ['do you do', 'are you doing', 'will you do'], a: 1, w: 'Планы на вечер → What are you doing…?' },
  { q: 'I’ll call you when I ___ home.', o: ['will get', 'get', 'am going to get'], a: 1, w: 'После when о будущем — Present Simple.' },
  { q: 'As soon as she ___, we’ll start.', o: ['arrives', 'will arrive', 'arrive'], a: 0, w: 'После as soon as — Present Simple.' },
  { q: 'The concert ___ at eight, so don’t be late.', o: ['starts', 'start', 'will starting'], a: 0, w: 'Расписание мероприятия → starts.' },
  { k: 'form', q: 'We ___ (fly) to Rome on Friday. We’ve got the tickets.', t: ['are flying', "'re flying", 'are going to fly', "'re going to fly"], w: 'Договорённость, билеты есть → are flying.' },
  { k: 'form', q: 'I’ll tell him when I ___ (see) him.', t: ['see'], w: 'После when — Present Simple.' },
  { k: 'fix', q: 'I will phone you when I will arrive.', t: ['I will phone you when I arrive.', "I'll phone you when I arrive."], w: 'После when — arrive, без will.' },
  { k: 'fix', q: 'What time does the meeting starts?', t: ['What time does the meeting start?'], w: 'После does — start.' },
  { k: 'err', q: 'Найдите ошибку: «Before you will leave, close the window.»', o: ['Before you will leave', 'close', 'the window'], a: 0, w: 'После before — leave без will.' }
],

'en-futureperf': [
  { q: 'By 2030, they ___ the new bridge.', o: ['will build', 'will have built', 'build'], a: 1, w: 'К моменту в будущем уже сделано → will have built.' },
  { q: 'This time tomorrow I ___ on a beach.', o: ['will lie', 'will be lying', 'will have lain'], a: 1, w: 'Процесс в момент будущего → will be lying.' },
  { q: 'Call me after nine — I ___ dinner by then.', o: ['will have finished', 'will be finishing', 'finish'], a: 0, w: 'By then — к тому времени закончу → will have finished.' },
  { q: 'Don’t phone at eight. We ___ the match.', o: ['will watch', 'will be watching', 'will have watched'], a: 1, w: 'В восемь будем в процессе → will be watching.' },
  { q: 'By next June, she ___ here for ten years.', o: ['will work', 'will have worked', 'will be work'], a: 1, w: 'К моменту в будущем наберётся десять лет → will have worked.' },
  { k: 'form', q: 'By the time you arrive, I ___ (cook) everything.', t: ['will have cooked', "'ll have cooked"], w: 'К моменту → will have cooked.' },
  { k: 'form', q: 'At midnight we ___ (fly) over the Atlantic.', t: ['will be flying', "'ll be flying"], w: 'Процесс в момент → will be flying.' },
  { k: 'fix', q: 'By Friday I will finish the report already.', t: ['By Friday I will have finished the report.', "By Friday I'll have finished the report.", 'By Friday I will already have finished the report.', 'By Friday I will have already finished the report.', 'By Friday I will have finished the report already.', "By Friday I'll have finished the report already.", "By Friday I'll already have finished the report.", "By Friday I'll have already finished the report."], w: 'By Friday → will have finished.' },
  { k: 'err', q: 'Найдите ошибку: «This time next week I will have lie on the beach.»', o: ['This time next week', 'I will have lie', 'on the beach'], a: 1, w: 'Процесс в момент будущего → I will be lying.' }
],

'en-g1': [
  { q: 'В разговоре «I’m going to call him» часто звучит как…', o: ['I’m gonna call him', 'I’m wanna call him', 'I gotta call him'], a: 0, w: 'Going to → gonna.' },
  { q: '«I want to go home» в разговоре:', o: ['I wanna go home', 'I gonna go home', 'I gotta go home'], a: 0, w: 'Want to → wanna.' },
  { q: '«I have got to go» в разговоре:', o: ['I gotta go', 'I wanna go', 'I gonna go'], a: 0, w: 'Have got to → gotta.' },
  { q: 'Где gonna употреблено правильно?', o: ['I’m gonna the shop.', 'I’m gonna buy milk.', 'I gonna buy milk.'], a: 1, w: 'Gonna = going to + глагол; am не пропускаем в аккуратной речи.' },
  { q: 'Wanna можно сказать вместо:', o: ['want to', 'wants to', 'wanted to'], a: 0, w: 'Wanna — только want to (не wants to).' },
  { q: 'Где стоит писать полную форму, а не gonna?', o: ['В чате с другом', 'В деловом письме', 'В песне'], a: 1, w: 'Gonna/wanna — разговорные, в официальных текстах их не пишут.' },
  { k: 'form', q: 'Напишите полностью: I gotta work tomorrow. → I ___ work tomorrow.', t: ['have got to', "'ve got to", 'have to'], w: 'Gotta = have got to.' },
  { k: 'form', q: 'Напишите полностью: Do you wanna dance? → Do you ___ dance?', t: ['want to'], w: 'Wanna = want to.' },
  { k: 'form', q: 'Напишите полностью: It’s gonna rain. → It’s ___ rain.', t: ['going to'], w: 'Gonna = going to.' }
],

'en-cond1': [
  { q: 'If it ___ tomorrow, we’ll stay at home.', o: ['will rain', 'rains', 'rained'], a: 1, w: 'После if о будущем — Present Simple.' },
  { q: 'If you heat ice, it ___.', o: ['melts', 'will melted', 'melted'], a: 0, w: 'Общий закон природы → нулевой тип: Present + Present.' },
  { q: 'I ___ you if I hear any news.', o: ['call', "'ll call", 'called'], a: 1, w: 'Главная часть → will.' },
  { q: 'You won’t pass the exam ___ you study.', o: ['if', 'unless', 'when'], a: 1, w: 'Unless = if not: «если не будешь заниматься».' },
  { q: 'If she ___ the bus, she’ll be late.', o: ['misses', 'will miss', 'missed'], a: 0, w: 'Present Simple после if.' },
  { k: 'form', q: 'If you ___ (not / hurry), you’ll miss the train.', t: ["don't hurry", 'do not hurry'], w: 'После if — Present Simple.' },
  { k: 'form', q: 'If I see Tom, I ___ (tell) him.', t: ['will tell', "'ll tell"], w: 'Главная часть → will tell.' },
  { k: 'fix', q: 'If it will be sunny, we will go to the beach.', t: ['If it is sunny, we will go to the beach.', "If it's sunny, we'll go to the beach.", "If it is sunny, we'll go to the beach.", "If it's sunny, we will go to the beach."], w: 'После if — is, без will.' },
  { k: 're', q: 'Перепишите с unless: If you don’t leave now, you’ll be late.', t: ['Unless you leave now, you will be late.', "Unless you leave now, you'll be late.", 'You will be late unless you leave now.', "You'll be late unless you leave now."], w: 'Unless заменяет if not.' },
  { k: 'err', q: 'Найдите ошибку: «I will buy it if it will be cheap.»', o: ['I will buy it', 'if', 'it will be cheap'], a: 2, w: 'После if — it is cheap.' }
],

'en-cond2': [
  { q: 'If I ___ rich, I would travel the world.', o: ['am', 'were', 'will be'], a: 1, w: 'Нереальное настоящее → were (или was в разговоре).' },
  { q: 'If I were you, I ___ that job.', o: ['will take', 'would take', 'took'], a: 1, w: 'Совет: If I were you, I would…' },
  { q: 'What would you do if you ___ a million?', o: ['win', 'won', 'would win'], a: 1, w: 'После if — Past Simple.' },
  { q: 'If he had more time, he ___ a language.', o: ['learns', 'will learn', 'would learn'], a: 2, w: 'Главная часть → would.' },
  { q: 'I wouldn’t do that if I ___ you.', o: ['were', 'am', 'would be'], a: 0, w: 'If I were you.' },
  { k: 'form', q: 'If I ___ (know) her number, I would call her.', t: ['knew'], w: 'После if — Past Simple.' },
  { k: 'form', q: 'If we lived by the sea, we ___ (swim) every day.', t: ['would swim', "'d swim"], w: 'Главная часть → would swim.' },
  { k: 'fix', q: 'If I would have a car, I would drive to work.', t: ['If I had a car, I would drive to work.', "If I had a car, I'd drive to work."], w: 'После if — had, без would.' },
  { k: 're', q: 'Нереальное условие: I don’t have time, so I can’t help you. → If I ___', t: ['If I had time, I could help you.', 'If I had time, I would help you.', "If I had time, I'd help you.", 'I could help you if I had time.', 'I would help you if I had time.', "I'd help you if I had time."], w: 'If + Past Simple, could/would + глагол.' },
  { k: 'err', q: 'Найдите ошибку: «If she was here, she will help us.»', o: ['If she was here', 'she will help', 'us'], a: 1, w: 'Второй тип → she would help.' }
],

'en-cond3': [
  { q: 'If I ___ earlier, I would have caught the train.', o: ['left', 'had left', 'would leave'], a: 1, w: 'Нереальное прошлое → If + Past Perfect.' },
  { q: 'She ___ the exam if she had studied.', o: ['would pass', 'would have passed', 'passed'], a: 1, w: 'Главная часть → would have + V3.' },
  { q: 'If you had told me, I ___ helped.', o: ['would have', 'would', 'had'], a: 0, w: 'Would have helped.' },
  { q: 'If I had taken the job, I ___ in London now.', o: ['would live', 'would have lived', 'lived'], a: 0, w: 'Смешанное: прошлое условие → результат сейчас: would live.' },
  { q: 'If she weren’t so shy, she ___ to the party last night.', o: ['would come', 'would have come', 'came'], a: 1, w: 'Смешанное: черта характера сейчас → результат в прошлом: would have come.' },
  { k: 'form', q: 'If we ___ (not / miss) the bus, we wouldn’t have been late.', t: ["hadn't missed", 'had not missed'], w: 'If + Past Perfect.' },
  { k: 'form', q: 'If he had asked, I ___ (lend) him the money.', t: ['would have lent', "'d have lent", "would've lent"], w: 'Would have + lent.' },
  { k: 'fix', q: 'If I would have known, I would have come.', t: ['If I had known, I would have come.', "If I'd known, I would have come.", "If I had known, I'd have come.", "If I'd known, I'd have come.", "If I had known, I would've come.", "If I'd known, I would've come."], w: 'После if — had known, без would.' },
  { k: 're', q: 'Перепишите: I didn’t know about the party, so I didn’t go. → If I ___', t: ['If I had known about the party, I would have gone.', "If I'd known about the party, I would have gone.", "If I had known about the party, I'd have gone.", "If I'd known about the party, I'd have gone.", 'I would have gone to the party if I had known about it.', "I'd have gone to the party if I'd known about it.", "I'd have gone to the party if I had known about it.", "I would have gone to the party if I'd known about it."], w: 'If + had known, would have gone.' },
  { k: 'err', q: 'Найдите ошибку: «If they had left on time, they would arrive before us.» (речь о вчерашнем дне)', o: ['If they had left on time', 'they would arrive', 'before us'], a: 1, w: 'Прошлое → would have arrived.' }
],

'en-wish': [
  { q: 'I wish I ___ taller.', o: ['am', 'were', 'will be'], a: 1, w: 'Желание о настоящем → Past: were.' },
  { q: 'I wish I ___ to the party yesterday.', o: ['went', 'had gone', 'would go'], a: 1, w: 'Сожаление о прошлом → had gone.' },
  { q: 'I wish you ___ making that noise!', o: ['stopped', 'would stop', 'had stopped'], a: 1, w: 'Раздражение, хотим, чтобы другой изменил поведение → would stop.' },
  { q: 'If only I ___ his number now!', o: ['know', 'knew', 'had known'], a: 1, w: 'If only о настоящем → knew.' },
  { q: 'She wishes she ___ so much money last month.', o: ["didn't spend", "hadn't spent", "wouldn't spend"], a: 1, w: 'Прошлое → hadn’t spent.' },
  { k: 'form', q: 'I wish I ___ (can) speak French.', t: ['could'], w: 'Can → could.' },
  { k: 'form', q: 'I wish I ___ (not / say) that to her yesterday.', t: ["hadn't said", 'had not said'], w: 'Прошлое → hadn’t said.' },
  { k: 'fix', q: 'I wish I have a dog.', t: ['I wish I had a dog.'], w: 'Wish о настоящем → had.' },
  { k: 're', q: 'Выразите сожаление с wish: I don’t live near the sea.', t: ['I wish I lived near the sea.'], w: 'Wish + Past Simple.' },
  { k: 'err', q: 'Найдите ошибку: «I wish I would be younger.»', o: ['I wish', 'I would be', 'younger'], a: 1, w: 'О себе would не говорят → I wish I were younger.' }
],

'en-unreal': [
  { q: 'It’s time we ___ home.', o: ['go', 'went', 'will go'], a: 1, w: 'It’s time + Past Simple.' },
  { q: 'I’d rather you ___ smoke in here.', o: ["don't", "didn't", "won't"], a: 1, w: 'I’d rather + кто-то + Past Simple.' },
  { q: 'He talks as if he ___ everything.', o: ['know', 'knew', 'would know'], a: 1, w: 'As if (на самом деле нет) → knew.' },
  { q: 'Suppose you ___ the lottery — what would you do?', o: ['win', 'won', 'had won'], a: 1, w: 'Suppose + Past о воображаемом.' },
  { q: 'The doctor insisted that he ___ smoking.', o: ['stop', 'stops', 'to stop'], a: 0, w: 'Insist that + базовая форма (сослагательное).' },
  { q: 'I’d rather ___ at home tonight.', o: ['stay', 'stayed', 'to stay'], a: 0, w: 'I’d rather + глагол (о себе).' },
  { k: 'form', q: 'It’s high time you ___ (find) a job.', t: ['found'], w: 'It’s high time + Past.' },
  { k: 'form', q: 'It is essential that every student ___ (be) on time.', t: ['be', 'should be', 'is'], w: 'Сослагательное: that he/she be (в BrE также should be / is).' },
  { k: 'fix', q: 'I’d rather you don’t tell anyone.', t: ["I'd rather you didn't tell anyone.", 'I would rather you did not tell anyone.', "I'd rather you did not tell anyone.", "I would rather you didn't tell anyone."], w: 'I’d rather you + Past.' },
  { k: 'err', q: 'Найдите ошибку: «It’s time we go to bed.»', o: ['It’s time', 'we go', 'to bed'], a: 1, w: 'It’s time we went.' }
],

'en-cond-adv': [
  { q: '___ I known, I would have helped.', o: ['Had', 'If', 'Have'], a: 0, w: 'Инверсия вместо if: Had I known…' },
  { q: '___ you need anything, just call.', o: ['Should', 'Would', 'Had'], a: 0, w: 'Should you… = If you…' },
  { q: '___ I in your position, I’d say no.', o: ['Were', 'Was', 'Had'], a: 0, w: 'Were I… = If I were…' },
  { q: 'You can borrow my car ___ you drive carefully.', o: ['providing', 'unless', 'otherwise'], a: 0, w: 'Providing/provided (that) = при условии, что.' },
  { q: 'Take an umbrella, ___ you’ll get wet.', o: ['otherwise', 'unless', 'provided'], a: 0, w: 'Otherwise — «иначе».' },
  { q: '___ the rain, we would have finished on time.', o: ['But for', 'Unless', 'Provided'], a: 0, w: 'But for + существительное = «если бы не».' },
  { k: 'form', q: '___ (если бы, инверсия) she called earlier, we could have met.', t: ['had'], w: 'Had she called… = If she had called…' },
  { k: 're', q: 'Перепишите с инверсией: If you should see him, tell him to call me.', t: ['Should you see him, tell him to call me.'], w: 'Should you see him…' },
  { k: 're', q: 'Перепишите с инверсией: If I had known the truth, I would have left.', t: ['Had I known the truth, I would have left.', "Had I known the truth, I'd have left."], w: 'Had I known…' },
  { k: 'err', q: 'Найдите ошибку: «Had I knew, I would have come.»', o: ['Had I knew', 'I would', 'have come'], a: 0, w: 'Had + V3: Had I known.' }
],

'en-can': [
  { q: 'She ___ swim very well.', o: ['can', 'cans', 'can to'], a: 0, w: 'Can не меняется и без to.' },
  { q: '___ I open the window?', o: ['Can', 'Do', 'Am'], a: 0, w: 'Просьба разрешения → Can I…?' },
  { q: 'I ___ find my glasses. Have you seen them?', o: ["can't", "don't can", 'not can'], a: 0, w: 'Отрицание: can’t.' },
  { q: 'When I was five, I ___ read.', o: ['could', 'can', 'could to'], a: 0, w: 'Умел в прошлом → could.' },
  { q: 'Can you play the guitar? — Yes, I ___.', o: ['can', 'do', 'play'], a: 0, w: 'Краткий ответ: Yes, I can.' },
  { q: 'Last year I ___ drive, but now I can.', o: ["couldn't", "can't", "don't can"], a: 0, w: 'Не умел в прошлом → couldn’t.' },
  { k: 'form', q: 'My grandmother ___ (can / не) use a computer.', t: ["can't", 'cannot', 'can not'], w: 'Cannot / can’t.' },
  { k: 'fix', q: 'He can to speak Chinese.', t: ['He can speak Chinese.'], w: 'После can — глагол без to.' },
  { k: 'fix', q: 'She cans dance.', t: ['She can dance.'], w: 'Can не получает -s.' },
  { k: 're', q: 'Сделайте вопрос: You can help me.', t: ['Can you help me?'], w: 'Can выходит вперёд.' },
  { k: 'err', q: 'Найдите ошибку: «Do you can come tomorrow?»', o: ['Do you can', 'come', 'tomorrow'], a: 0, w: 'Can you come…? — без do.' }
],

'en-modals': [
  { q: 'You ___ wear a seatbelt. It’s the law.', o: ['must', "don't have to", 'can'], a: 0, w: 'Закон, обязательство → must (или have to).' },
  { q: 'I ___ get up early tomorrow — my train is at six.', o: ['have to', 'must to', 'should to'], a: 0, w: 'Обязанность из обстоятельств → have to.' },
  { q: 'You ___ eat so much sugar. It’s bad for you.', o: ["shouldn't", "don't have to", "mustn't to"], a: 0, w: 'Совет → shouldn’t.' },
  { q: 'It’s Sunday. You ___ go to work.', o: ["mustn't", "don't have to", "can't to"], a: 1, w: 'Нет необходимости → don’t have to.' },
  { q: 'You ___ smoke here. It’s forbidden.', o: ["mustn't", "don't have to", "needn't"], a: 0, w: 'Запрет → mustn’t.' },
  { q: 'Yesterday I ___ work late.', o: ['had to', 'must', 'have to'], a: 0, w: 'Прошлое must → had to.' },
  { q: '___ I bring anything to the party?', o: ['Should', 'Must I to', 'Have'], a: 0, w: 'Спрашиваем совета → Should I…?' },
  { k: 'form', q: 'She ___ (have to) wear a uniform at work.', t: ['has to'], w: 'She → has to.' },
  { k: 'form', q: '___ (you / have to) work on Saturdays?', t: ['do you have to'], w: 'Do you have to…?' },
  { k: 'fix', q: 'You must to finish this today.', t: ['You must finish this today.'], w: 'После must — без to.' },
  { k: 'fix', q: 'He don’t have to come.', t: ["He doesn't have to come.", 'He does not have to come.'], w: 'He → doesn’t have to.' },
  { k: 'err', q: 'Найдите ошибку: «You should to see a doctor.»', o: ['You', 'should to see', 'a doctor'], a: 1, w: 'После should — глагол без to.' }
],

'en-deduction': [
  { q: 'He’s been working all day. He ___ be tired.', o: ['must', "can't", 'might not'], a: 0, w: 'Почти уверены «да» → must.' },
  { q: 'That ___ be Anna — she’s in Paris this week.', o: ["can't", 'must', 'might'], a: 0, w: 'Уверены «нет» → can’t.' },
  { q: 'Take an umbrella. It ___ rain later.', o: ['might', 'must', "can't"], a: 0, w: 'Возможно → might.' },
  { q: 'The lights are off. They ___ be at home.', o: ["can't", 'must', 'should'], a: 0, w: 'Вывод «точно нет» → can’t.' },
  { q: 'Where’s Tom? — I don’t know. He ___ be in the garden.', o: ['could', 'must', "can't"], a: 0, w: 'Предположение → could/might.' },
  { k: 'form', q: 'She’s smiling. She ___ (уверены, что да) have good news.', t: ['must'], w: 'Уверенный вывод → must.' },
  { k: 'form', q: 'This ___ (уверены, что нет) be his car — he doesn’t drive.', t: ["can't", 'cannot'], w: 'Невозможно → can’t.' },
  { k: 'fix', q: 'He mustn’t be at work — I saw him at the beach.', t: ["He can't be at work — I saw him at the beach.", "He can't be at work, I saw him at the beach.", "He can't be at work. I saw him at the beach.", 'He cannot be at work — I saw him at the beach.'], w: 'Вывод «точно нет» → can’t, а не mustn’t (запрет).' },
  { k: 'err', q: 'Найдите ошибку: «She must to be at home now.»', o: ['She', 'must to be', 'at home now'], a: 1, w: 'Must be — без to.' }
],

'en-pastmodals': [
  { q: 'The ground is wet. It ___ in the night.', o: ['must have rained', 'must rain', "can't have rained"], a: 0, w: 'Уверенный вывод о прошлом → must have rained.' },
  { q: 'You ___ told me! I would have helped.', o: ['should have', 'must have', 'can have'], a: 0, w: 'Упрёк: надо было → should have told.' },
  { q: 'She ___ seen us — she didn’t say hello.', o: ["can't have", "mustn't have", "shouldn't have"], a: 0, w: 'Уверены, что не видела → can’t have seen.' },
  { q: 'I’m not sure where my keys are. I ___ left them at work.', o: ['might have', 'must', 'should have'], a: 0, w: 'Возможно → might have left.' },
  { q: 'You ___ have brought a present, but thank you!', o: ["needn't", "mustn't", "can't"], a: 0, w: 'Не нужно было, но сделал → needn’t have.' },
  { k: 'form', q: 'He’s late. He ___ (might / miss) the bus.', t: ['might have missed', 'may have missed', 'could have missed', "might've missed"], w: 'Предположение о прошлом → might have missed.' },
  { k: 'form', q: 'We ___ (should / leave) earlier. Now we’re late.', t: ['should have left', "should've left"], w: 'Упрёк себе → should have left.' },
  { k: 'fix', q: 'You must have call me — I was waiting!', t: ['You should have called me — I was waiting!', 'You should have called me, I was waiting!', 'You should have called me. I was waiting!', "You should've called me — I was waiting!", 'You could have called me — I was waiting!', "You could've called me — I was waiting!"], w: 'Упрёк — should have, и нужна третья форма: called.' },
  { k: 'err', q: 'Найдите ошибку: «She should have went to the doctor.»', o: ['She', 'should have went', 'to the doctor'], a: 1, w: 'Have + V3: should have gone.' }
]
});
