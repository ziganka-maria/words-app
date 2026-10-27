// Дополнительные вопросы для «Отработать», уровень A1: GDRILL[урок] — тот же вид, что quiz в grammar-en.js
// (o — варианты, a — номер верного; t — ответы для ввода; w — пояснение)
// Ошибки хранятся по номеру вопроса ('d3'), поэтому вопросы только дописываем в конец и не переставляем
window.GDRILL = window.GDRILL || {};
Object.assign(GDRILL, {
'en-be': [
  { q: 'My parents ___ at work now.', o: ['is', 'are', 'am'], a: 1, w: 'parents = they → are.' },
  { q: 'I ___ not hungry, thank you.', o: ['am', 'is', 'are'], a: 0, w: 'I → am.' },
  { q: 'The weather ___ nice today. (впишите)', t: ['is'], w: 'the weather = it → is.' },
  { q: '___ your brother a student?', o: ['Are', 'Is', 'Am'], a: 1, w: 'your brother = he → Is…?' },
  { q: 'Are you from Spain? — No, ___.', o: ["I'm not", "I isn't", "I aren't"], a: 0, w: 'Краткий ответ: No, I’m not.' },
  { q: 'Как сказать «Ему 30 лет»?', o: ['He has 30 years.', 'He is 30.', 'He 30 years.'], a: 1, w: 'Возраст — с be: He is 30.' },
  { q: 'Tom and I ___ friends. (впишите)', t: ['are'], w: 'Tom and I = we → are.' },
  { q: 'The shops ___ open on Sunday. (отрицание, кратко)', o: ["isn't", "aren't", "not"], a: 1, w: 'the shops = they → aren’t.' },
  { q: 'Как сказать «Мне страшно»?', o: ['I am afraid.', 'I have afraid.', 'I afraid.'], a: 0, w: 'Состояния — с be: I am afraid.' }
],
'en-articles': [
  { q: 'I need ___ hour to finish this.', o: ['a', 'an', 'the'], a: 1, w: 'В hour буква h не читается — гласный звук → an.' },
  { q: 'He wants to be ___ doctor.', o: ['a', 'the', '—'], a: 0, w: 'Профессия — с a.' },
  { q: 'Can you open ___ window, please? (в этой комнате)', o: ['a', 'the', '—'], a: 1, w: 'Понятно, какое именно окно, — the.' },
  { q: 'She speaks ___ English very well.', o: ['an', 'the', '— (без артикля)'], a: 2, w: 'С названиями языков артикля нет.' },
  { q: 'I like ___ cats.', o: ['a', 'the', '— (без артикля)'], a: 2, w: 'Множественное число «вообще» — без артикля.' },
  { q: 'It is ___ old house.', o: ['a', 'an', '—'], a: 1, w: 'Old начинается с гласного звука → an.' },
  { q: 'Is there ___ bank near here?', o: ['a', 'an', 'the'], a: 0, w: 'Любой банк, впервые — a; bank — согласный звук.' },
  { q: '___ Earth goes round the Sun.', o: ['A', 'The', '—'], a: 1, w: 'Земля одна — the Earth.' },
  { q: 'She lives in ___ Paris.', o: ['the', 'a', '— (без артикля)'], a: 2, w: 'С большинством городов артикля нет.' }
],
'en-plural': [
  { q: 'Множественное число от «man»:', o: ['mans', 'men', 'mens'], a: 1, w: 'Исключение: man → men.' },
  { q: 'Множественное число от «baby»:', o: ['babys', 'babies', 'babyes'], a: 1, w: 'Согласная + y → ies.' },
  { q: 'Множественное число от «bus»: (впишите)', t: ['buses'], w: 'После s добавляем -es: buses.' },
  { q: 'Множественное число от «tooth»:', o: ['tooths', 'teeth', 'teeths'], a: 1, w: 'Исключение: tooth → teeth.' },
  { q: 'Множественное число от «toy»:', o: ['toys', 'toies'], a: 0, w: 'Гласная + y → просто -s: toys.' },
  { q: 'Множественное число от «mouse»:', o: ['mouses', 'mice', 'mices'], a: 1, w: 'Исключение: mouse → mice.' },
  { q: 'Множественное число от «watch»: (впишите)', t: ['watches'], w: 'После ch добавляем -es.' },
  { q: 'Множественное число от «leaf»:', o: ['leafs', 'leaves', 'leafes'], a: 1, w: 'f → ves: leaf → leaves.' },
  { q: 'I can see three ___ in the field. (sheep)', o: ['sheep', 'sheeps', 'sheepes'], a: 0, w: 'Sheep не меняется: one sheep, three sheep.' }
],
'en-this': [
  { q: '___ are my keys. (в руке)', o: ['This', 'These', 'Those'], a: 1, w: 'Рядом, много → these.' },
  { q: 'Who is ___ man over there?', o: ['this', 'that', 'these'], a: 1, w: 'Далеко, один → that.' },
  { q: 'Do you like ___ T-shirt? (на мне сейчас)', o: ['this', 'these', 'those'], a: 0, w: 'Рядом, один → this.' },
  { q: '___ houses over there are very old.', o: ['These', 'This', 'Those'], a: 2, w: 'Далеко, много → those.' },
  { q: 'Mum, ___ is my teacher, Mrs Brown. (знакомлю)', o: ['this', 'that', 'it'], a: 0, w: 'Представляем человека рядом — this is…' },
  { q: 'Is ___ your phone? (на столе рядом)', o: ['this', 'these', 'those'], a: 0, w: 'Рядом, один → this.' },
  { q: 'Что верно?', o: ['Those car is mine.', 'That cars are mine.', 'That car is mine.'], a: 2, w: 'That + единственное число.' },
  { q: '___ was a great film! (о фильме, который только что закончился)', o: ['That', 'These', 'Those'], a: 0, w: 'Об одном и уже прошедшем обычно говорят that.' },
  { q: 'Can you see ___ boats on the lake? (далеко)', o: ['this', 'these', 'those'], a: 2, w: 'Далеко, много → those.' }
],
'en-possessive': [
  { q: 'This is Kate. ___ eyes are green.', o: ['His', 'Her', 'Its'], a: 1, w: 'Kate — она → her.' },
  { q: 'We live in London. ___ house is small.', o: ['Our', 'Their', 'Us'], a: 0, w: 'we → our.' },
  { q: 'Как сказать «друзья моего брата»?', o: ["my brother's friends", "my brothers friend", "friends my brother"], a: 0, w: 'Чьё — с ’s: my brother’s friends.' },
  { q: 'Is this car ___? (ваша)', o: ['your', 'yours', 'you'], a: 1, w: 'Без существительного после — yours.' },
  { q: 'The children love ___ teacher.', o: ['they', 'their', 'there'], a: 1, w: 'they → their.' },
  { q: 'Как сказать «комната моих родителей»?', o: ["my parent's room", "my parents' room", "my parents's room"], a: 1, w: 'Множественное на -s: апостроф после s — parents’.' },
  { q: 'Mark, is this ___ bag? (твоя)', o: ['you', 'your', 'yours'], a: 1, w: 'Перед существительным — your.' },
  { q: 'Paris is famous for ___ museums.', o: ["it's", 'its', 'their'], a: 1, w: 'Its — «его» о городе или вещи; it’s = it is.' },
  { q: 'These books are not mine. They are ___. (её)', t: ['hers'], w: 'Без существительного после — hers.' }
],
'en-havegot': [
  { q: 'My parents ___ got a house in the country.', o: ['has', 'have', 'are'], a: 1, w: 'my parents = they → have got.' },
  { q: 'We ___ got a garden. (отрицание, кратко)', o: ["haven't", "hasn't", "don't"], a: 0, w: 'we → haven’t got.' },
  { q: 'Has he got a bike? — Yes, he ___.', o: ['has', 'have', 'is'], a: 0, w: 'Краткий ответ: Yes, he has.' },
  { q: 'Does she ___ a car?', o: ['has', 'have', 'got'], a: 1, w: 'После does — have.' },
  { q: 'I ___ a headache. (впишите: have или has)', t: ['have'], w: 'I → have.' },
  { q: 'Что верно?', o: ["She doesn't has a dog.", "She doesn't have a dog.", "She don't have a dog."], a: 1, w: 'she → doesn’t + have.' },
  { q: 'They ___ got a big family.', o: ['has', 'have', 'are'], a: 1, w: 'they → have got.' },
  { q: 'Как сказать «У тебя есть вопросы?» (с got)', o: ['Do you got any questions?', 'Have you got any questions?', 'Are you got any questions?'], a: 1, w: 'Have you got…?' },
  { q: 'Tom ___ a shower every morning. (принимает душ)', o: ['has got', 'has', 'have'], a: 1, w: 'О действиях (have a shower, have lunch) — только have, без got.' }
],
'en-present1': [
  { q: 'My dad ___ the dishes every evening. (wash)', o: ['wash', 'washs', 'washes'], a: 2, w: 'После sh → -es: washes.' },
  { q: 'She ___ to music every day. (listen) (впишите)', t: ['listens'], w: 'she → listens.' },
  { q: 'He ___ his homework in the evening. (do)', o: ['do', 'does', 'dos'], a: 1, w: 'do → does.' },
  { q: 'The baby ___ a lot. (cry)', o: ['crys', 'cries', 'cryes'], a: 1, w: 'Согласная + y → ies: cries.' },
  { q: 'We ___ in a small town.', o: ['live', 'lives', 'living'], a: 0, w: 'we → live, без -s.' },
  { q: 'My cat ___ milk.', o: ["don't like", "doesn't like", "doesn't likes"], a: 1, w: 'it → doesn’t + like.' },
  { q: 'She ___ to work by bus. (go) (впишите)', t: ['goes'], w: 'go → goes.' },
  { q: 'I usually ___ up at seven.', o: ['get', 'gets', 'getting'], a: 0, w: 'I → get.' },
  { q: 'Что верно?', o: ['He play the guitar.', 'He plays the guitar.', 'He playes the guitar.'], a: 1, w: 'he → plays (гласная + y → просто -s).' }
],
'en-present2': [
  { q: '___ your sister work in a hospital?', o: ['Do', 'Does', 'Is'], a: 1, w: 'your sister = she → Does…?' },
  { q: 'What time ___ you get up?', o: ['do', 'does', 'are'], a: 0, w: 'you → do.' },
  { q: 'Does he ___ coffee?', o: ['drinks', 'drink', 'drinking'], a: 1, w: 'После does — глагол без -s.' },
  { q: 'Do you like pizza? — Yes, I ___.', o: ['like', 'do', 'am'], a: 1, w: 'Краткий ответ: Yes, I do.' },
  { q: 'Where ___ your parents live now? (впишите)', t: ['do'], w: 'your parents = they → do.' },
  { q: 'How often ___ she go to the gym?', o: ['do', 'does', 'is'], a: 1, w: 'she → does.' },
  { q: 'Что верно?', o: ['Do your friends live here?', 'Does your friends live here?', 'Do your friends lives here?'], a: 0, w: 'your friends = they → Do … live.' },
  { q: 'Does it rain a lot here? — No, it ___.', o: ["don't", "doesn't", "isn't"], a: 1, w: 'it → doesn’t.' },
  { q: 'What ___ this word mean?', o: ['do', 'does', 'is'], a: 1, w: 'this word = it → does.' }
],
'en-there': [
  { q: 'There ___ an old man at the door.', o: ['is', 'are'], a: 0, w: 'Один человек → there is.' },
  { q: 'There ___ many people here today.', o: ['is', 'are'], a: 1, w: 'Много людей → there are.' },
  { q: '___ there any eggs in the fridge?', o: ['Is', 'Are'], a: 1, w: 'eggs — много → Are there…?' },
  { q: 'There ___ a bank near my house. (отрицание, кратко)', o: ["isn't", "aren't"], a: 0, w: 'Один банк → there isn’t.' },
  { q: 'Are there any shops here? — Yes, there ___.', o: ['is', 'are', 'have'], a: 1, w: 'Краткий ответ: Yes, there are.' },
  { q: 'There ___ a lot of noise outside. (впишите)', t: ['is'], w: 'Noise неисчисляемое → there is.' },
  { q: 'Как сказать «В комнате два окна»?', o: ['In the room are two windows.', 'There are two windows in the room.', 'There is two windows in the room.'], a: 1, w: 'There are + много + где.' },
  { q: 'How many bedrooms ___ there in your flat?', o: ['is', 'are'], a: 1, w: 'bedrooms — много → are there.' },
  { q: 'There ___ a table and four chairs in the kitchen.', o: ['is', 'are'], a: 0, w: 'Глагол по первому предмету: a table → there is.' }
],
'en-can': [
  { q: 'I’m sorry, I ___ come to your party.', o: ["can't", "don't can", "can not to"], a: 0, w: 'Не смогу — can’t.' },
  { q: 'She can ___ very fast.', o: ['runs', 'run', 'to run'], a: 1, w: 'После can — глагол без to и без -s.' },
  { q: 'Can you help me? — Yes, I ___.', o: ['can', 'do', 'help'], a: 0, w: 'Краткий ответ: Yes, I can.' },
  { q: '___ I open the window? (можно?)', o: ['Do', 'Can', 'Am'], a: 1, w: 'Разрешение — Can I…?' },
  { q: 'He ___ play chess. (умеет) (впишите)', t: ['can'], w: 'He can play chess.' },
  { q: 'Что верно?', o: ['Can you to help me?', 'Can you help me?', 'Do you can help me?'], a: 1, w: 'Can + подлежащее + глагол без to.' },
  { q: 'You ___ smoke here. It is not allowed.', o: ['can', "can't", 'are'], a: 1, w: 'Запрет — can’t.' },
  { q: 'Как сказать «Я не слышу тебя»?', o: ["I can't hear you.", "I don't can hear you.", "I not hear you can."], a: 0, w: 'С hear и see часто используют can: I can’t hear you.' },
  { q: '___ your brother drive? (умеет?)', o: ['Does', 'Can', 'Is'], a: 1, w: 'Умеет — Can your brother drive?' }
],
'en-continuous': [
  { q: 'Be quiet! The baby ___.', o: ['sleeps', 'is sleeping', 'sleeping'], a: 1, w: 'Прямо сейчас → is sleeping.' },
  { q: 'I ___ (sit) on the bus now. (впишите две части)', t: ['am sitting', "'m sitting"], w: 'sit → sitting (удваиваем t).' },
  { q: 'What ___ you doing?', o: ['do', 'are', 'is'], a: 1, w: 'you → are.' },
  { q: 'She ___ (write) an email. (впишите две части)', t: ['is writing', "'s writing"], w: 'write → writing (е выпадает).' },
  { q: 'They ___ watching TV. They are in the garden.', o: ["aren't", "isn't", "don't"], a: 0, w: 'they → aren’t.' },
  { q: 'Is it raining? — Yes, it ___.', o: ['is', 'does', 'rains'], a: 0, w: 'Краткий ответ: Yes, it is.' },
  { q: 'Что верно?', o: ['I am knowing her.', 'I know her.'], a: 1, w: 'Know не ставят в -ing.' },
  { q: 'Look! Your dog ___ the ball.', o: ['is chasing', 'chases', 'chasing'], a: 0, w: 'Look! — происходит сейчас → is chasing.' },
  { q: 'Every day I walk to work, but today I ___ the bus.', o: ['take', 'am taking', 'takes'], a: 1, w: 'Обычно — Present Simple, сегодня/сейчас — Continuous.' }
],
'en-prep': [
  { q: 'I was born ___ 1995.', o: ['in', 'on', 'at'], a: 0, w: 'Годы — in.' },
  { q: 'See you ___ Monday!', o: ['in', 'on', 'at'], a: 1, w: 'Дни недели — on.' },
  { q: 'The film starts ___ 8 pm.', o: ['in', 'on', 'at'], a: 2, w: 'Точное время — at.' },
  { q: 'I’ll meet you ___ the airport.', o: ['in', 'on', 'at'], a: 2, w: 'В точке, у места — at the airport.' },
  { q: 'We go skiing ___ winter. (впишите)', t: ['in'], w: 'Времена года — in.' },
  { q: 'She is waiting ___ the bus stop.', o: ['in', 'on', 'at'], a: 2, w: 'В точке, у места — at.' },
  { q: 'My keys are ___ my bag.', o: ['in', 'on', 'at'], a: 0, w: 'Внутри — in.' },
  { q: 'What do you do ___ the weekend? (британский вариант)', o: ['in', 'at', 'to'], a: 1, w: 'В Британии — at the weekend (в США — on the weekend).' },
  { q: 'Her birthday is ___ 5 June. (впишите)', t: ['on'], w: 'Даты — on.' }
],
'en-object': [
  { q: 'I know Lisa. I see ___ every day.', o: ['she', 'her', 'hers'], a: 1, w: 'После глагола — her.' },
  { q: 'Can you give ___ the salt? (мне)', o: ['I', 'me', 'my'], a: 1, w: 'После глагола — me.' },
  { q: 'These are my friends. I love ___.', o: ['they', 'their', 'them'], a: 2, w: 'После глагола — them.' },
  { q: 'Is there ___ milk? (вопрос)', o: ['some', 'any'], a: 1, w: 'В вопросах — any.' },
  { q: 'I want ___ water, please.', o: ['some', 'any'], a: 0, w: 'В утверждениях — some.' },
  { q: 'Mr Smith is our teacher. We like ___. (впишите)', t: ['him'], w: 'Mr Smith — он → him.' },
  { q: 'Can I have ___ bread, please?', o: ['some', 'any'], a: 0, w: 'В просьбах — some.' },
  { q: 'Wait for ___! (нас)', o: ['we', 'us', 'our'], a: 1, w: 'После предлога — us.' },
  { q: 'There aren’t ___ chairs in the room.', o: ['some', 'any'], a: 1, w: 'В отрицаниях — any.' }
],
'en-was': [
  { q: 'The film ___ very long.', o: ['was', 'were'], a: 0, w: 'the film = it → was.' },
  { q: 'My friends ___ at the party.', o: ['was', 'were'], a: 1, w: 'my friends = they → were.' },
  { q: 'I ___ at school yesterday. I was ill. (отрицание, кратко)', o: ["wasn't", "weren't", "didn't"], a: 0, w: 'I → wasn’t.' },
  { q: '___ they at home last night?', o: ['Was', 'Were', 'Did'], a: 1, w: 'they → Were…?' },
  { q: 'Was it cold? — Yes, it ___.', o: ['was', 'were', 'did'], a: 0, w: 'Краткий ответ: Yes, it was.' },
  { q: 'Where ___ you at ten o’clock yesterday? (впишите)', t: ['were'], w: 'you → were.' },
  { q: 'Как сказать «Мне было 10 лет»?', o: ['I had 10 years.', 'I was 10.', 'I were 10.'], a: 1, w: 'Возраст — с be: I was 10.' },
  { q: 'The shops ___ open yesterday. (отрицание, кратко)', o: ["wasn't", "weren't"], a: 1, w: 'the shops = they → weren’t.' },
  { q: 'Вы были в Лондоне в прошлом году? ___ you in London last year?', o: ['Was', 'Were', 'Did'], a: 1, w: 'you → Were…?' }
],
'en-past1': [
  { q: 'I ___ my grandma last Sunday. (visit) (впишите)', t: ['visited'], w: 'Правильный глагол: visit → visited.' },
  { q: 'She ___ a letter yesterday. (write)', o: ['writed', 'wrote', 'written'], a: 1, w: 'write → wrote (неправильный).' },
  { q: 'We ___ to Italy two years ago. (fly)', o: ['flied', 'flew', 'flown'], a: 1, w: 'fly → flew.' },
  { q: 'The bus ___ near my house. (stop)', o: ['stoped', 'stopped', 'stopt'], a: 1, w: 'Короткий глагол на согласную: stop → stopped.' },
  { q: 'They ___ a lot of photos. (take)', o: ['taked', 'took', 'taken'], a: 1, w: 'take → took.' },
  { q: 'I ___ him at the station. (meet) (впишите)', t: ['met'], w: 'meet → met.' },
  { q: 'He ___ the bus this morning. (miss)', o: ['missed', 'mist', 'missd'], a: 0, w: 'Правильный глагол: miss → missed.' },
  { q: 'Прошедшее от «have»:', o: ['haved', 'had', 'has'], a: 1, w: 'have → had.' },
  { q: 'Какое слово подходит к Past Simple?', o: ['now', 'every day', 'last week'], a: 2, w: 'last week, yesterday, ago — признаки прошлого.' }
],
'en-past2': [
  { q: 'I ___ like the film. (не понравился)', o: ["didn't", "wasn't", "don't"], a: 0, w: 'Отрицание в прошлом — didn’t + глагол.' },
  { q: 'She didn’t ___ to the party. (come)', o: ['came', 'come', 'comes'], a: 1, w: 'После didn’t — начальная форма.' },
  { q: 'Where ___ you go on holiday last summer?', o: ['did', 'were', 'do'], a: 0, w: 'Вопрос в прошлом — did.' },
  { q: 'Did you call him? — No, I ___.', o: ["don't", "didn't", "wasn't"], a: 1, w: 'Краткий ответ: No, I didn’t.' },
  { q: 'What time ___ the train leave? (вчера) (впишите)', t: ['did'], w: 'What time did the train leave?' },
  { q: 'Что верно?', o: ['Did she bought it?', 'Did she buy it?', 'Does she bought it?'], a: 1, w: 'Did + начальная форма.' },
  { q: 'We didn’t ___ anything. (see)', o: ['saw', 'see', 'seen'], a: 1, w: 'После didn’t — see.' },
  { q: 'Как сказать «Тебе понравилось?»', o: ['Did you like it?', 'Do you liked it?', 'Were you like it?'], a: 0, w: 'Did you like it?' },
  { q: '___ it cold yesterday? (be)', o: ['Did', 'Was', 'Were'], a: 1, w: 'С be в прошлом — was/were без did.' }
]
});
