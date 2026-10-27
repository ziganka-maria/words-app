// Дополнительные вопросы для «Отработать», уровень B2: GDRILL[урок] — тот же вид, что quiz в grammar-en5.js
// Ошибки хранятся по номеру вопроса ('d3'), поэтому вопросы только дописываем в конец и не переставляем
window.GDRILL = window.GDRILL || {};
Object.assign(GDRILL, {
'en-cond3': [
  { q: 'If we ___ earlier, we wouldn’t have missed the train.', o: ['left', 'had left', 'would leave'], a: 1, w: 'Нереальное прошлое: if + had + 3-я форма.' },
  { q: 'She ___ the job if she had applied.', o: ['would get', 'would have got', 'had got'], a: 1, w: 'Главная часть: would have + 3-я форма.' },
  { q: 'If it hadn’t rained, the match ___ cancelled.', o: ["wouldn't be", "wouldn't have been", "hadn't been"], a: 1, w: 'Результат в прошлом → wouldn’t have been.' },
  { q: 'If I ___ that film, I wouldn’t be so scared of the dark now.', o: ["hadn't watched", "didn't watch", "wouldn't watch"], a: 0, w: 'Смешанный: прошлое условие (had) → результат сейчас (would).' },
  { q: 'If she were more careful, she ___ that mistake yesterday.', o: ["wouldn't make", "wouldn't have made"], a: 1, w: 'Смешанный: черта характера сейчас → результат в прошлом.' },
  { q: 'Что значит «If I had known, I would have told you»?', o: ['Я не знал(а) и не сказал(а).', 'Я знал(а) и сказал(а).', 'Если узнаю — скажу.'], a: 0, w: 'Третий тип — о том, чего не было.' },
  { q: 'Допишите: If they ___ (not / help) us, we would have failed. (впишите)', t: ["hadn't helped", 'had not helped'], w: 'if + hadn’t + 3-я форма.' },
  { q: 'We could have won if we ___ harder.', o: ['tried', 'had tried', 'would try'], a: 1, w: 'if + had tried.' },
  { q: 'Какое предложение с ошибкой?', o: ['If I would have known, I would have come.', 'If I had known, I would have come.'], a: 0, w: 'После if — had, а не would have.' }
],
'en-wish': [
  { q: 'I wish my flat ___ bigger.', o: ['is', 'were', 'would be'], a: 1, w: 'Сожаление о настоящем: wish + were.' },
  { q: 'I wish I ___ to the party. (а я не пошла)', o: ['went', 'had gone', 'would go'], a: 1, w: 'О прошлом: wish + had + 3-я форма.' },
  { q: 'I wish it ___ raining. (раздражает)', o: ['stops', 'would stop', 'stopped'], a: 1, w: 'Раздражение, хочется перемены: wish + would.' },
  { q: 'If only I ___ the truth then!', o: ['knew', 'had known'], a: 1, w: 'Прошлое → had known.' },
  { q: 'She wishes she ___ in a bigger city.', o: ['lives', 'lived', 'would live'], a: 1, w: 'Настоящее: wish + lived.' },
  { q: 'I wish I ___ speak French. (не умею)', o: ['can', 'could', 'would'], a: 1, w: 'can → could после wish.' },
  { q: 'Можно ли сказать I wish I would…?', o: ['обычно нет — говорят I wish I could', 'да, это обычная форма'], a: 0, w: 'Wish + would — о других людях или вещах, не о себе.' },
  { q: 'Допишите: I wish you ___ (be) here. (впишите)', t: ['were', 'was'], w: 'wish + were (разговорно — was).' },
  { q: 'If only you ___ so loud! (мешаешь сейчас)', o: ["weren't", "aren't", "won't be"], a: 0, w: 'If only + Past — о настоящем.' }
],
'en-causative': [
  { q: 'I’m going to ___ my hair cut tomorrow.', o: ['have', 'make', 'do'], a: 0, w: 'have something done — кто-то сделает для меня.' },
  { q: 'We had the kitchen ___ last year.', o: ['paint', 'painted', 'painting'], a: 1, w: 'have + предмет + 3-я форма.' },
  { q: 'She got her car ___ at the garage.', o: ['repair', 'repaired', 'to repair'], a: 1, w: 'get + предмет + 3-я форма.' },
  { q: 'Как сказать «Мне проверили зрение»?', o: ['I had my eyes tested.', 'I tested my eyes.', 'I had tested my eyes.'], a: 0, w: 'have + предмет + 3-я форма.' },
  { q: 'We had our car ___ last night. (неприятность: поцарапали)', o: ['scratch', 'scratched', 'scratching'], a: 1, w: 'had + предмет + 3-я форма — и для неприятностей.' },
  { q: 'Where do you usually ___ your suits cleaned?', o: ['get', 'make', 'let'], a: 0, w: 'get something done.' },
  { q: 'Допишите: I need to have my passport ___ (renew). (впишите)', t: ['renewed'], w: 'have + passport + renewed.' },
  { q: 'Что значит «I cut my hair»?', o: ['Я сам(а) подстригся (подстриглась).', 'Меня подстригли в салоне.'], a: 0, w: 'Строго — сам(а); в разговоре так говорят и о салоне, но правильно — I had my hair cut.' },
  { q: 'They’re having a new fence ___.', o: ['put up', 'putting up', 'to put up'], a: 0, w: 'having + предмет + 3-я форма (put up).' }
],
'en-futureperf': [
  { q: 'By the end of the year, I ___ here for a decade.', o: ['will work', 'will have worked', 'am working'], a: 1, w: 'К моменту в будущем — will have + 3-я форма.' },
  { q: 'Text me, don’t call — I ___ in a meeting all morning.', o: ['will be sitting', 'will sit', 'will have sat'], a: 0, w: 'Процесс в момент в будущем — will be + -ing.' },
  { q: 'By the time you arrive, the film ___.', o: ['will start', 'will have started'], a: 1, w: 'Уже начнётся к твоему приходу → will have started.' },
  { q: 'This time next year she ___ at university.', o: ['will be studying', 'will have studied'], a: 0, w: 'Процесс в момент → will be studying.' },
  { q: 'I ___ the book by Monday, so you can borrow it then.', o: ['will finish', 'will have finished'], a: 1, w: 'К понедельнику — will have finished.' },
  { q: '___ you be going past the shop? Could you get some milk?', o: ['Will', 'Are', 'Do'], a: 0, w: 'Will you be going…? — мягкий вопрос о планах.' },
  { q: 'By the time we get there, the shop ___ (close). (впишите три слова)', t: ['will have closed', "'ll have closed"], w: 'К моменту в будущем — will have closed.' },
  { q: 'At midnight we ___ over the Atlantic.', o: ['will fly', 'will be flying'], a: 1, w: 'В момент в будущем — процесс.' },
  { q: 'Какое слово часто стоит рядом с Future Perfect?', o: ['by', 'yesterday', 'ago'], a: 0, w: 'by + время: by Friday, by then.' }
],
'en-pastmodals': [
  { q: 'You ___ told me earlier! Now it’s too late.', o: ['should have', 'must have', 'might'], a: 0, w: 'Упрёк о прошлом — should have.' },
  { q: 'She ___ left already — her coat isn’t here.', o: ['must have', 'should have', "can't have"], a: 0, w: 'Уверенный вывод о прошлом — must have.' },
  { q: 'She ___ seen me — she didn’t say hello. (не могла)', o: ["can't have", "mustn't have", "shouldn't have"], a: 0, w: 'Невозможно в прошлом — can’t have.' },
  { q: 'We ___ taken a taxi. The bus was quick. (не нужно было)', o: ["needn't have", "mustn't have", "couldn't"], a: 0, w: 'Сделали зря — needn’t have.' },
  { q: 'I don’t know where he is. He ___ gone home.', o: ['might have', 'must', 'should have'], a: 0, w: 'Неуверенно — might have.' },
  { q: 'You ___ been hurt! Be more careful. (могло случиться)', o: ['could have', 'should have', 'must'], a: 0, w: 'Могло, но не случилось — could have.' },
  { q: 'Допишите: I ___ (not / say) that. I’m sorry. (жалею; впишите)', t: ["shouldn't have said", 'should not have said'], w: 'Сожаление — shouldn’t have + 3-я форма.' },
  { q: 'Что значит «You didn’t need to bring food»?', o: ['Приносить не требовалось (может, и не принёс).', 'Ты принёс зря.'], a: 0, w: 'didn’t need to — не было необходимости; needn’t have — сделал зря.' },
  { q: 'They ___ forgotten — they never miss a meeting.', o: ["can't have", "mustn't have", "shouldn't have"], a: 0, w: 'Отрицательная догадка о прошлом — can’t have (не mustn’t).' }
],
'en-participle': [
  { q: '___ the door, she noticed a letter on the floor.', o: ['Opening', 'Opened', 'To open'], a: 0, w: 'Одновременно с действием — -ing.' },
  { q: '___ by the noise, the baby started crying.', o: ['Waking', 'Woken', 'Woke'], a: 1, w: 'Пассивный смысл (его разбудили) → 3-я форма.' },
  { q: '___ finished her work, she went home.', o: ['Having', 'Had', 'Being'], a: 0, w: 'Сначала одно, потом другое → Having + 3-я форма.' },
  { q: 'The bus ___ to the airport leaves every hour.', o: ['going', 'gone', 'goes'], a: 0, w: 'which goes → going.' },
  { q: 'Most of the cars ___ in this factory are exported.', o: ['making', 'made', 'make'], a: 1, w: 'which are made → made.' },
  { q: '___ to wake anyone, she closed the door quietly.', o: ['Not wanting', "Don't wanting", 'Wanting not'], a: 0, w: 'Отрицание — not перед причастием.' },
  { q: 'Какое предложение с ошибкой?', o: ['Driving to work, I heard the news.', 'Driving to work, the radio broke.'], a: 1, w: 'Подлежащее после запятой должно совершать действие: радио не ехало на работу.' },
  { q: 'Сократите: As she felt ill, she stayed at home. → ___ ill, she stayed at home. (впишите)', t: ['feeling'], w: 'Feeling ill, …' },
  { q: '___ in 1990, the company now has 500 employees.', o: ['Founding', 'Founded', 'Having founding'], a: 1, w: 'Компанию основали → Founded.' }
],
'en-reportverbs': [
  { q: 'She offered ___ me with my bags.', o: ['to help', 'helping', 'help'], a: 0, w: 'offer + to.' },
  { q: 'He admitted ___ the money.', o: ['to take', 'taking', 'take'], a: 1, w: 'admit + -ing.' },
  { q: 'They warned us ___ swim there.', o: ['not to', "don't", 'not'], a: 0, w: 'warn somebody not to…' },
  { q: 'She insisted ___ paying for dinner.', o: ['on', 'to', 'for'], a: 0, w: 'insist on + -ing.' },
  { q: 'He refused ___ the question.', o: ['to answer', 'answering', 'answer'], a: 0, w: 'refuse + to.' },
  { q: 'My boss congratulated me ___ the promotion.', o: ['for', 'on', 'with'], a: 1, w: 'congratulate on.' },
  { q: '"Let’s go to the cinema." → She suggested ___ to the cinema.', o: ['to go', 'going', 'us go to'], a: 1, w: 'suggest + -ing (или suggest that we go).' },
  { q: '"Don’t forget your keys." → He reminded me ___ my keys. (впишите)', t: ['to take', 'not to forget', 'to bring'], w: 'remind somebody to…' },
  { q: 'She blamed me ___ the mistake.', o: ['for', 'of', 'in'], a: 0, w: 'blame somebody for.' }
],
'en-gerinf2': [
  { q: 'I’ll never forget ___ the Alps for the first time.', o: ['to see', 'seeing'], a: 1, w: 'Воспоминание о прошлом — forget + -ing.' },
  { q: 'Don’t forget ___ the cat while I’m away.', o: ['to feed', 'feeding'], a: 0, w: 'Не забыть сделать — forget + to.' },
  { q: 'I regret ___ you that the flight is cancelled. (официально)', o: ['to tell', 'telling'], a: 0, w: 'regret to inform/tell — с сожалением сообщаем.' },
  { q: 'Try ___ the computer off and on again. (как эксперимент)', o: ['to turn', 'turning'], a: 1, w: 'Попробовать способ — try + -ing.' },
  { q: 'She stopped ___ to her neighbour. (остановилась, чтобы поговорить)', o: ['to talk', 'talking'], a: 0, w: 'Остановиться, чтобы — stop + to.' },
  { q: 'He went on ___ for hours. (продолжал говорить)', o: ['to talk', 'talking'], a: 1, w: 'Продолжать то же — go on + -ing.' },
  { q: 'After the degree, she went on ___ a doctor. (потом стала)', o: ['to become', 'becoming'], a: 0, w: 'Перейти к следующему — go on + to.' },
  { q: 'I remember ___ the door, but now it’s open! (помню, что запер(ла))', o: ['to lock', 'locking'], a: 1, w: 'Помню, как сделал(а) — remember + -ing.' },
  { q: 'This shirt needs ___. (её надо погладить)', o: ['to iron', 'ironing'], a: 1, w: 'needs + -ing = нужно сделать с ней (пассивный смысл).' }
],
'en-narrative': [
  { q: 'It was a cold night. Snow ___ and the streets were empty.', o: ['fell', 'was falling', 'had fallen'], a: 1, w: 'Фон рассказа — Past Continuous.' },
  { q: 'I opened the door and ___ a strange man.', o: ['saw', 'was seeing', 'had seen'], a: 0, w: 'Цепочка событий — Past Simple.' },
  { q: 'She was upset because someone ___ her bike.', o: ['stole', 'had stolen', 'was stealing'], a: 1, w: 'Раньше основного события — Past Perfect.' },
  { q: 'Her eyes were red because she ___.', o: ['had been crying', 'cried', 'was crying'], a: 0, w: 'Долгий процесс до момента в прошлом — Past Perfect Continuous.' },
  { q: 'While we ___ dinner, the lights went out.', o: ['had', 'were having', 'had had'], a: 1, w: 'Фон → were having.' },
  { q: 'When the police arrived, the thieves ___.', o: ['escaped', 'had escaped'], a: 1, w: 'Уже сбежали к приезду → had escaped.' },
  { q: 'Допишите: We ___ (walk) for hours when we finally found a café. (впишите)', t: ['had been walking'], w: 'Долгий процесс до момента → had been walking.' },
  { q: 'When I got home, my brother ___ TV. (как раз смотрел)', o: ['watched', 'was watching', 'had watched'], a: 1, w: 'В процессе → was watching.' },
  { q: 'When I got home, I ___ TV. (сначала пришёл (пришла), потом включил(а))', o: ['watched', 'was watching', 'had watched'], a: 0, w: 'Последовательные действия → watched.' }
],
'en-quantifiers': [
  { q: 'I’ve got two cats. ___ of them is black.', o: ['One', 'Both', 'Each'], a: 0, w: 'Одна из двух — one of them, глагол is.' },
  { q: 'You can sit on ___ side. It doesn’t matter.', o: ['both', 'either', 'neither'], a: 1, w: 'Любая из двух — either.' },
  { q: '___ student gets a certificate.', o: ['Every', 'All', 'Both'], a: 0, w: 'Every + единственное число.' },
  { q: '___ of us wanted to leave — we both stayed.', o: ['Either', 'Neither', 'Both'], a: 1, w: 'Ни один из двух — neither.' },
  { q: 'The tickets cost ten euros ___.', o: ['each', 'every', 'all'], a: 0, w: 'В конце — each: по десять за каждый.' },
  { q: 'I like ___ tea and coffee.', o: ['either', 'both', 'neither'], a: 1, w: 'both … and.' },
  { q: 'Do you want tea or coffee? — ___ is fine.', o: ['Either', 'Both', 'Every'], a: 0, w: 'Что угодно из двух — either.' },
  { q: 'There’s a café on ___ corner of the square. (на каждом из четырёх)', o: ['every', 'either', 'both'], a: 0, w: 'Больше двух, все — every.' },
  { q: 'Что верно?', o: ['Neither of them know.', "Neither of them knows.", "Neither of them don't know."], a: 1, w: 'Neither of… — формально с единственным числом; двойного отрицания нет.' }
]
});
