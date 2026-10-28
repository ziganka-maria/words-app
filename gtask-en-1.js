// задания тренажёров по темам (английский), часть 1: основа, существительные и местоимения, Present, прошедшие времена
// GTASK[урок] = [задания]; номер задания — ключ ошибок ('xN'), поэтому только дописывать в конец
window.GTASK = window.GTASK || {};
Object.assign(GTASK, {

'en-be': [
  { q: 'My parents ___ at work now.', o: ['is', 'are', 'am'], a: 1, w: 'Parents — они → are.' },
  { q: 'I ___ not hungry, thanks.', o: ['am', 'is', 'are'], a: 0, w: 'С I — только am.' },
  { q: '___ your brother a student?', o: ['Are', 'Is', 'Am'], a: 1, w: 'Brother — он → is; в вопросе is выходит вперёд.' },
  { q: 'It ___ cold today. Take a jacket.', o: ['are', 'be', 'is'], a: 2, w: 'It → is.' },
  { q: '— Are you tired? — Yes, I ___.', o: ['am', "I'm", 'are'], a: 0, w: 'В кратком ответе сокращение не ставят: Yes, I am.' },
  { k: 'form', q: 'We ___ (be) from Kazan.', t: ['are', "'re"], w: 'We → are.' },
  { k: 'form', q: 'The coffee ___ (be) very hot.', t: ['is', "'s"], w: 'Coffee — оно → is.' },
  { k: 'form', q: 'She ___ (be / не) at home.', t: ['is not', "isn't", "'s not"], w: 'Отрицание: is not = isn’t.' },
  { k: 'fix', q: 'They is my friends.', t: ['They are my friends.', "They're my friends."], w: 'They → are.' },
  { k: 'fix', q: 'I is a teacher.', t: ['I am a teacher.', "I'm a teacher."], w: 'I → am.' },
  { k: 're', q: 'Сделайте вопрос: You are from Moscow.', t: ['Are you from Moscow?'], w: 'В вопросе глагол be ставим перед подлежащим.' },
  { k: 're', q: 'Сделайте отрицание: He is happy.', t: ['He is not happy.', "He isn't happy.", "He's not happy."], w: 'Not — после is.' },
  { k: 'err', q: 'Найдите ошибку: «My sister and I is in London.»', o: ['My sister and I', 'is', 'in London'], a: 1, w: 'My sister and I — это «мы» → are.' },
  { q: 'Where ___ my keys?', o: ['is', 'are', 'am'], a: 1, w: 'Keys — множественное число → are.' }
],

'en-there': [
  { q: '___ a supermarket near my house.', o: ['There is', 'There are', 'It is'], a: 0, w: 'Один supermarket → there is.' },
  { q: 'There ___ two windows in the room.', o: ['is', 'are', 'be'], a: 1, w: 'Two windows → there are.' },
  { q: '___ any milk in the fridge?', o: ['Are there', 'Is there', 'There is'], a: 1, w: 'Milk — неисчисляемое → is; в вопросе is there.' },
  { q: 'There ___ some apples on the table.', o: ['are', 'is', 'am'], a: 0, w: 'Apples → are.' },
  { q: '— Is there a bank here? — No, there ___.', o: ["isn't", "aren't", 'not'], a: 0, w: 'Краткий ответ: No, there isn’t.' },
  { q: 'There ___ a lot of people at the party.', o: ['was', 'were', 'is'], a: 1, w: 'People — множественное число → were (в прошлом).' },
  { k: 'form', q: 'There ___ (be) a cat in the garden right now.', t: ['is', "'s"], w: 'Один кот, сейчас → there is.' },
  { k: 'form', q: 'There ___ (be / не) any chairs in the kitchen.', t: ['are not', "aren't"], w: 'Chairs → are; отрицание aren’t.' },
  { k: 'fix', q: 'There is three books on the desk.', t: ['There are three books on the desk.'], w: 'Three books → there are.' },
  { k: 'fix', q: 'It is a park near our school.', t: ['There is a park near our school.', "There's a park near our school."], w: '«Есть, находится» → there is, а не it is.' },
  { k: 're', q: 'Сделайте вопрос: There are some shops in this street.', t: ['Are there any shops in this street?'], w: 'В вопросе are there, а some обычно меняем на any.' },
  { k: 'err', q: 'Найдите ошибку: «Are there a hotel near the station?»', o: ['Are there', 'a hotel', 'near the station'], a: 0, w: 'A hotel — один → Is there.' }
],

'en-havegot': [
  { q: 'She ___ two brothers.', o: ['have got', 'has got', 'is got'], a: 1, w: 'She → has got.' },
  { q: '___ you got a car?', o: ['Have', 'Has', 'Do'], a: 0, w: 'You → Have you got…?' },
  { q: 'We ___ a dog, but we have a cat.', o: ["haven't got", "hasn't got", "don't got"], a: 0, w: 'We → haven’t got.' },
  { q: 'Do you have any brothers? — Yes, I ___.', o: ['do', 'have', 'got'], a: 0, w: 'Вопрос с do → ответ Yes, I do.' },
  { q: 'He ___ a lot of free time.', o: ["doesn't have", "don't have", "hasn't"], a: 0, w: 'Have без got: отрицание doesn’t have.' },
  { q: 'Has she got a phone? — No, she ___.', o: ["hasn't", "doesn't", "haven't"], a: 0, w: 'Has she got…? → No, she hasn’t.' },
  { k: 'form', q: 'My flat ___ (have got) a big balcony.', t: ['has got', "'s got", 'has'], w: 'Flat — оно → has got.' },
  { k: 'form', q: 'I ___ (have got / не) a laptop.', t: ['have not got', "haven't got", "don't have", 'do not have'], w: 'I → haven’t got (или don’t have).' },
  { k: 'fix', q: 'She have got blue eyes.', t: ['She has got blue eyes.', "She's got blue eyes.", 'She has blue eyes.'], w: 'She → has.' },
  { k: 'fix', q: 'Do you have got a pen?', t: ['Have you got a pen?', 'Do you have a pen?'], w: 'Либо Have you got…, либо Do you have… — не смешиваем.' },
  { k: 're', q: 'Сделайте вопрос: They have got a big house.', t: ['Have they got a big house?', 'Do they have a big house?'], w: 'Have выходит вперёд: Have they got…?' },
  { k: 'err', q: 'Найдите ошибку: «My brother don’t have a car.»', o: ['My brother', 'don’t have', 'a car'], a: 1, w: 'Brother — он → doesn’t have.' }
],

'en-this': [
  { q: '___ is my phone, here in my hand.', o: ['This', 'That', 'These'], a: 0, w: 'Рядом, в руке, одно → this.' },
  { q: 'Look at ___ birds over there!', o: ['this', 'these', 'those'], a: 2, w: 'Далеко и много → those.' },
  { q: '___ shoes are new. I bought them yesterday.', o: ['This', 'These', 'That'], a: 1, w: 'Обувь на мне, много (shoes) → these.' },
  { q: 'Who is ___ man over there?', o: ['this', 'that', 'these'], a: 1, w: 'Далеко, один → that.' },
  { q: 'Hello, ___ is Anna. Can I speak to Tom?', o: ['this', 'that', 'these'], a: 0, w: 'Представляемся по телефону: This is…' },
  { k: 'form', q: '___ (этот) book is really interesting.', t: ['this'], w: 'Одна книга рядом → this.' },
  { k: 'form', q: 'Are ___ (те) your children in the park?', t: ['those'], w: 'Далеко и много → those.' },
  { k: 'fix', q: 'This apples are sweet.', t: ['These apples are sweet.'], w: 'Apples — много → these.' },
  { k: 'fix', q: 'Those is my car.', t: ['That is my car.', "That's my car."], w: 'Car — одна → that is.' },
  { k: 'err', q: 'Найдите ошибку: «I like this jeans.»', o: ['I like', 'this', 'jeans'], a: 1, w: 'Jeans — всегда множественное число → these jeans.' }
],

'en-plural': [
  { q: 'I have two ___.', o: ['childs', 'children', 'childrens'], a: 1, w: 'Child → children (исключение).' },
  { q: 'There are three ___ in the box.', o: ['boxs', 'boxes', 'box'], a: 1, w: 'После x добавляем -es: boxes.' },
  { q: 'Two ___ are waiting outside.', o: ['womans', 'women', 'woman'], a: 1, w: 'Woman → women.' },
  { q: 'My ___ hurt after the long walk.', o: ['foots', 'feet', 'feets'], a: 1, w: 'Foot → feet.' },
  { q: 'The ___ are playing in the garden.', o: ['babys', 'babies', 'babyes'], a: 1, w: 'Согласная + y → -ies: babies.' },
  { q: 'We saw a lot of ___ on the farm.', o: ['sheeps', 'sheep', 'sheepes'], a: 1, w: 'Sheep во множественном не меняется.' },
  { q: 'Can you give me some ___?', o: ['knifes', 'knives', 'knife'], a: 1, w: 'Knife → knives (f → ves).' },
  { k: 'form', q: 'Put the ___ (dish) in the sink, please.', t: ['dishes'], w: 'После sh → -es.' },
  { k: 'form', q: 'Cats catch ___ (mouse).', t: ['mice'], w: 'Mouse → mice.' },
  { k: 'form', q: 'I bought two ___ (tomato).', t: ['tomatoes'], w: 'Tomato → tomatoes (как potato → potatoes).' },
  { k: 'form', q: 'There are many ___ (city) in Russia.', t: ['cities'], w: 'Согласная + y → -ies.' },
  { k: 'fix', q: 'Brush your tooths twice a day.', t: ['Brush your teeth twice a day.'], w: 'Tooth → teeth.' },
  { k: 'fix', q: 'Three persons came to the meeting.', t: ['Three people came to the meeting.'], w: 'Обычное множественное от person — people.' },
  { k: 'err', q: 'Найдите ошибку: «Two mans are standing at the door.»', o: ['Two mans', 'are standing', 'at the door'], a: 0, w: 'Man → men.' }
],

'en-possessive': [
  { q: 'This is ___ car. It belongs to my father.', o: ["my father's", 'my fathers', "my fathers'"], a: 0, w: 'Принадлежность одному: father’s.' },
  { q: 'Is this bag ___? — Yes, it’s mine.', o: ['your', 'yours', "you're"], a: 1, w: 'Без существительного после — yours.' },
  { q: 'The dog is wagging ___ tail.', o: ["it's", 'its', 'it'], a: 1, w: 'Its — «его» (притяжательное); it’s = it is.' },
  { q: 'We love ___ new flat.', o: ['our', 'ours', 'us'], a: 0, w: 'Перед существительным — our.' },
  { q: 'That’s not my pen. It’s ___.', o: ['her', 'hers', "her's"], a: 1, w: 'Без существительного — hers (без апострофа).' },
  { q: 'The ___ room is upstairs. Both of them sleep there.', o: ["children's", "childrens'", "childs'"], a: 0, w: 'Children + ’s → children’s.' },
  { q: 'This is the ___ office. They all work here.', o: ["teachers'", "teacher's", "teachers's"], a: 0, w: 'Много учителей (teachers) → апостроф после s: teachers’.' },
  { k: 'form', q: 'Is this ___ (они) house?', t: ['their'], w: 'Перед существительным — their.' },
  { k: 'form', q: 'This seat is ___ (мой) — I was here first.', t: ['mine'], w: 'Без существительного после — mine.' },
  { k: 'fix', q: 'That’s the book of Maria.', t: ["That's Maria's book.", 'That is Maria’s book.', "That is Maria's book."], w: 'О человеке говорят Maria’s book, а не the book of Maria.' },
  { k: 'fix', q: 'Is this you phone?', t: ['Is this your phone?'], w: 'Your — «твой/ваш».' },
  { k: 'err', q: 'Найдите ошибку: «The cat is playing with it’s ball.»', o: ['The cat', 'is playing', 'with it’s ball'], a: 2, w: 'Нужно its (без апострофа): it’s = it is.' }
],

'en-object': [
  { q: 'Can you help ___, please?', o: ['I', 'me', 'my'], a: 1, w: 'После глагола — me.' },
  { q: 'I like Anna. I often call ___.', o: ['she', 'her', 'hers'], a: 1, w: 'После глагола — her.' },
  { q: 'Where are my glasses? I can’t find ___.', o: ['it', 'them', 'they'], a: 1, w: 'Glasses — множественное → them.' },
  { q: 'Is there ___ bread left?', o: ['some', 'any', 'a'], a: 1, w: 'В вопросах обычно any.' },
  { q: 'Would you like ___ tea?', o: ['some', 'any', 'an'], a: 0, w: 'В предложении (would you like) — some.' },
  { q: 'I haven’t got ___ money.', o: ['some', 'any', 'no'], a: 1, w: 'В отрицании — any.' },
  { q: 'This present is for you and ___.', o: ['he', 'him', 'his'], a: 1, w: 'После предлога for — him.' },
  { k: 'form', q: 'Our teacher gave ___ (мы) a lot of homework.', t: ['us'], w: 'После глагола — us.' },
  { k: 'form', q: 'There are ___ (немного, some/any) eggs in the fridge.', t: ['some'], w: 'Утверждение → some.' },
  { k: 'fix', q: 'Me and him are friends.', t: ['He and I are friends.', 'He and I are friends'], w: 'Подлежащее — he and I.' },
  { k: 'fix', q: 'I don’t have some questions.', t: ['I don’t have any questions.', 'I do not have any questions.', 'I have no questions.'], w: 'В отрицании — any.' },
  { k: 'err', q: 'Найдите ошибку: «Tell they about the party.»', o: ['Tell', 'they', 'about the party'], a: 1, w: 'После глагола — them.' }
],

'en-present1': [
  { q: 'She ___ in a bank.', o: ['work', 'works', 'working'], a: 1, w: 'He/she/it → -s: works.' },
  { q: 'My parents ___ TV in the evening.', o: ['watch', 'watches', 'watching'], a: 0, w: 'Parents — они → без -s.' },
  { q: 'He ___ coffee. He prefers tea.', o: ["don't like", "doesn't like", "doesn't likes"], a: 1, w: 'He → doesn’t + глагол без -s.' },
  { q: 'Water ___ at 100 degrees.', o: ['boil', 'boils', 'is boil'], a: 1, w: 'Факт, it → boils.' },
  { q: 'Tom ___ to the gym every day.', o: ['go', 'gos', 'goes'], a: 2, w: 'Go → goes.' },
  { q: 'The shop ___ at nine.', o: ['open', 'opens', 'opening'], a: 1, w: 'Расписание, it → opens.' },
  { k: 'form', q: 'My brother ___ (study) at university.', t: ['studies'], w: 'Согласная + y → -ies.' },
  { k: 'form', q: 'She ___ (watch) films on Fridays.', t: ['watches'], w: 'После ch → -es.' },
  { k: 'form', q: 'We ___ (not / live) in the city centre.', t: ["don't live", 'do not live'], w: 'We → don’t + глагол.' },
  { k: 'form', q: 'He ___ (have) breakfast at seven.', t: ['has'], w: 'Have → has для he/she/it.' },
  { k: 'fix', q: 'My sister speak three languages.', t: ['My sister speaks three languages.'], w: 'Sister — она → speaks.' },
  { k: 'fix', q: "He don't eat meat.", t: ["He doesn't eat meat.", 'He does not eat meat.'], w: 'He → doesn’t.' },
  { k: 'err', q: 'Найдите ошибку: «She doesn’t drinks coffee.»', o: ['She', 'doesn’t drinks', 'coffee'], a: 1, w: 'После doesn’t — глагол без -s: doesn’t drink.' }
],

'en-present2': [
  { q: '___ you like pizza?', o: ['Do', 'Does', 'Are'], a: 0, w: 'You → Do.' },
  { q: '___ your sister live in Moscow?', o: ['Do', 'Does', 'Is'], a: 1, w: 'Sister — она → Does.' },
  { q: 'Where ___ he work?', o: ['do', 'does', 'is'], a: 1, w: 'He → does.' },
  { q: 'Does she speak English? — Yes, she ___.', o: ['does', 'speaks', 'do'], a: 0, w: 'Краткий ответ: Yes, she does.' },
  { q: 'What time ___ the film start?', o: ['do', 'does', 'is'], a: 1, w: 'Film — оно → does.' },
  { q: 'Who ___ the cooking in your family?', o: ['do', 'does', 'doing'], a: 1, w: 'Вопрос к подлежащему с who: глагол как для he — Who does…' },
  { k: 'form', q: '___ (do/does) they go to school by bus?', t: ['do'], w: 'They → do.' },
  { k: 'form', q: 'How often ___ (do/does) your dad cook?', t: ['does'], w: 'Dad — он → does.' },
  { k: 're', q: 'Сделайте вопрос: She plays tennis.', t: ['Does she play tennis?'], w: 'Does + she + глагол без -s.' },
  { k: 're', q: 'Сделайте вопрос со словом where: They live in Paris.', t: ['Where do they live?'], w: 'Where + do + they + live.' },
  { k: 'fix', q: 'Does he works on Saturdays?', t: ['Does he work on Saturdays?'], w: 'После does — глагол без -s.' },
  { k: 'fix', q: 'What you do at the weekend?', t: ['What do you do at the weekend?'], w: 'В вопросе нужен вспомогательный do.' },
  { k: 'err', q: 'Найдите ошибку: «Where does she lives?»', o: ['Where', 'does she', 'lives'], a: 2, w: 'После does — live без -s.' }
],

'en-continuous': [
  { q: 'Be quiet! The baby ___.', o: ['sleeps', 'is sleeping', 'sleep'], a: 1, w: 'Прямо сейчас → Present Continuous.' },
  { q: 'I usually ___ to work, but today I’m taking the bus.', o: ['walk', 'am walking', 'walks'], a: 0, w: 'Usually → Present Simple.' },
  { q: 'Look! It ___.', o: ['snows', 'is snowing', 'snowing'], a: 1, w: 'Look! — происходит сейчас.' },
  { q: 'Water ___ at zero degrees.', o: ['freezes', 'is freezing', 'freeze'], a: 0, w: 'Общий факт → Present Simple.' },
  { q: 'I ___ what you mean.', o: ['understand', 'am understanding', 'understanding'], a: 0, w: 'Understand не ставят в Continuous.' },
  { q: 'She ___ for a new job these days.', o: ['looks', 'is looking', 'look'], a: 1, w: 'Временный процесс «в эти дни» → Continuous.' },
  { q: 'This soup ___ delicious.', o: ['tastes', 'is tasting', 'taste'], a: 0, w: 'Taste в значении «на вкус» — Simple.' },
  { q: 'What ___ ? — I’m reading a book.', o: ['do you do', 'are you doing', 'you are doing'], a: 1, w: 'Что делаешь сейчас → What are you doing?' },
  { k: 'form', q: 'They ___ (play) football right now.', t: ['are playing', "'re playing"], w: 'Right now → are playing.' },
  { k: 'form', q: 'He ___ (not / work) today. He’s ill.', t: ["isn't working", 'is not working', "'s not working"], w: 'Сегодня, временно → isn’t working.' },
  { k: 'form', q: 'I ___ (know) the answer.', t: ['know'], w: 'Know — глагол состояния, только Simple.' },
  { k: 'fix', q: 'I am wanting a coffee.', t: ['I want a coffee.'], w: 'Want не используют в Continuous.' },
  { k: 'fix', q: 'She is go to school now.', t: ['She is going to school now.', "She's going to school now."], w: 'Continuous: is + глагол с -ing.' },
  { k: 're', q: 'Сделайте вопрос: He is cooking dinner.', t: ['Is he cooking dinner?'], w: 'Is выходит вперёд.' },
  { k: 'err', q: 'Найдите ошибку: «Listen! Somebody sings in the next room.»', o: ['Listen!', 'Somebody sings', 'in the next room'], a: 1, w: 'Listen! — сейчас → is singing.' }
],

'en-was': [
  { q: 'I ___ at home yesterday evening.', o: ['was', 'were', 'am'], a: 0, w: 'I → was.' },
  { q: 'They ___ very happy with the hotel.', o: ['was', 'were', 'is'], a: 1, w: 'They → were.' },
  { q: '___ you at the party last night?', o: ['Was', 'Were', 'Did'], a: 1, w: 'You → Were.' },
  { q: 'It ___ cold, so we stayed inside.', o: ['were', 'was', 'did'], a: 1, w: 'It → was.' },
  { q: 'Was the film good? — No, it ___.', o: ["wasn't", "weren't", "didn't"], a: 0, w: 'Краткий ответ: No, it wasn’t.' },
  { k: 'form', q: 'We ___ (be) in Spain last summer.', t: ['were'], w: 'We → were.' },
  { k: 'form', q: 'The shop ___ (be / не) open on Sunday.', t: ["wasn't", 'was not'], w: 'Shop — оно → wasn’t.' },
  { k: 'fix', q: 'My friends was late.', t: ['My friends were late.'], w: 'Friends — они → were.' },
  { k: 're', q: 'Сделайте вопрос: She was tired.', t: ['Was she tired?'], w: 'Was выходит вперёд.' },
  { k: 'err', q: 'Найдите ошибку: «Where was you yesterday?»', o: ['Where', 'was you', 'yesterday'], a: 1, w: 'You → were.' }
],

'en-past1': [
  { q: 'We ___ a great film last night.', o: ['see', 'saw', 'seen'], a: 1, w: 'See → saw (неправильный глагол).' },
  { q: 'She ___ in London for five years when she was young.', o: ['lives', 'lived', 'living'], a: 1, w: 'Прошлое → lived.' },
  { q: 'I ___ my keys this morning.', o: ['lose', 'lost', 'losed'], a: 1, w: 'Lose → lost.' },
  { q: 'They ___ to the beach yesterday.', o: ['go', 'went', 'gone'], a: 1, w: 'Go → went.' },
  { q: 'He ___ the door and went out.', o: ['opened', 'opens', 'open'], a: 0, w: 'Прошлое правильного глагола: -ed.' },
  { k: 'form', q: 'I ___ (buy) a new phone last week.', t: ['bought'], w: 'Buy → bought.' },
  { k: 'form', q: 'She ___ (stop) the car.', t: ['stopped'], w: 'Одна гласная + одна согласная в конце → согласная удваивается: stopped.' },
  { k: 'form', q: 'We ___ (study) all night.', t: ['studied'], w: 'Согласная + y → -ied.' },
  { k: 'form', q: 'He ___ (write) a letter to his grandma.', t: ['wrote'], w: 'Write → wrote.' },
  { k: 'form', q: 'They ___ (eat) pizza for dinner.', t: ['ate'], w: 'Eat → ate.' },
  { k: 'fix', q: 'Yesterday I go to the cinema.', t: ['Yesterday I went to the cinema.'], w: 'Yesterday → прошедшее: went.' },
  { k: 'fix', q: 'She buyed a dress.', t: ['She bought a dress.'], w: 'Buy — неправильный: bought.' },
  { k: 'err', q: 'Найдите ошибку: «Last year we travel to Italy.»', o: ['Last year', 'we travel', 'to Italy'], a: 1, w: 'Last year → travelled (в США — traveled).' }
],

'en-past2': [
  { q: 'I ___ him yesterday.', o: ["didn't see", "didn't saw", "not saw"], a: 0, w: 'После didn’t — первая форма: see.' },
  { q: '___ you enjoy the concert?', o: ['Do', 'Did', 'Were'], a: 1, w: 'Вопрос в прошлом → Did.' },
  { q: 'Did she call you? — No, she ___.', o: ["didn't", "doesn't", "wasn't"], a: 0, w: 'Краткий ответ: No, she didn’t.' },
  { q: 'Where ___ last summer?', o: ['you went', 'did you go', 'did you went'], a: 1, w: 'Where + did + you + go.' },
  { q: 'Who ___ the window?', o: ['broke', 'did break', 'did broke'], a: 0, w: 'Вопрос к подлежащему: без did — Who broke…?' },
  { k: 'form', q: 'We ___ (not / have) time for lunch.', t: ["didn't have", 'did not have'], w: 'Didn’t + have.' },
  { k: 'form', q: 'What time ___ (you / get up) today?', t: ['did you get up'], w: 'Did + you + get up.' },
  { k: 're', q: 'Сделайте отрицание: He passed the exam.', t: ["He didn't pass the exam.", 'He did not pass the exam.'], w: 'Didn’t + первая форма: pass.' },
  { k: 're', q: 'Сделайте вопрос: They bought a car.', t: ['Did they buy a car?'], w: 'Did + they + buy.' },
  { k: 'fix', q: 'Did you went to work yesterday?', t: ['Did you go to work yesterday?'], w: 'После did — go.' },
  { k: 'fix', q: "She didn't knew the answer.", t: ["She didn't know the answer.", 'She did not know the answer.'], w: 'После didn’t — know.' },
  { k: 'err', q: 'Найдите ошибку: «What did he said?»', o: ['What', 'did he', 'said'], a: 2, w: 'После did — say.' }
],

'en-pastcont': [
  { q: 'At eight o’clock yesterday I ___ dinner.', o: ['cooked', 'was cooking', 'cook'], a: 1, w: 'В конкретный момент в прошлом шло действие → was cooking.' },
  { q: 'While we ___ TV, the lights went out.', o: ['watched', 'were watching', 'are watching'], a: 1, w: 'Длительный фон → were watching; короткое событие → went out.' },
  { q: 'She ___ when the phone rang.', o: ['was sleeping', 'slept', 'sleeps'], a: 0, w: 'Фон — was sleeping, перебившее событие — rang.' },
  { q: 'I ___ my leg while I was skiing.', o: ['was breaking', 'broke', 'break'], a: 1, w: 'Короткое событие → Past Simple.' },
  { q: 'What ___ at midnight? Your light was on.', o: ['did you do', 'were you doing', 'you were doing'], a: 1, w: 'Процесс в момент прошлого → were you doing.' },
  { k: 'form', q: 'It ___ (rain) when we left the house.', t: ['was raining'], w: 'Фон → was raining.' },
  { k: 'form', q: 'They ___ (not / listen) when the teacher explained it.', t: ["weren't listening", 'were not listening'], w: 'They → weren’t listening.' },
  { k: 'form', q: 'He ___ (fall) while he was running.', t: ['fell'], w: 'Короткое событие → fell.' },
  { k: 'fix', q: 'When I arrived, they had dinner, so I joined them.', t: ['When I arrived, they were having dinner, so I joined them.'], w: 'Процесс в момент прихода → were having.' },
  { k: 'fix', q: 'I was knowing the answer.', t: ['I knew the answer.'], w: 'Know — глагол состояния, без Continuous.' },
  { k: 'err', q: 'Найдите ошибку: «While I was walking in the park, I was seeing an old friend.»', o: ['While I was walking', 'in the park', 'I was seeing an old friend'], a: 2, w: 'Встреча — короткое событие на фоне прогулки → I saw an old friend.' }
],

'en-pastperf': [
  { q: 'When we arrived, the film ___.', o: ['already started', 'had already started', 'has already started'], a: 1, w: 'Случилось раньше другого прошлого → had started.' },
  { q: 'She was nervous because she ___ before.', o: ["hadn't flown", "didn't fly", "hasn't flown"], a: 0, w: 'Опыт до момента в прошлом → hadn’t flown.' },
  { q: 'After he ___ his homework, he went out.', o: ['had finished', 'has finished', 'finishing'], a: 0, w: 'Сначала закончил, потом вышел → had finished.' },
  { q: 'I didn’t recognise him because he ___ a lot.', o: ['was changing', 'had changed', 'has changed'], a: 1, w: 'Изменился до встречи → had changed.' },
  { q: 'By the time the police came, the thief ___.', o: ['has escaped', 'had escaped', 'escapes'], a: 1, w: 'By the time + прошлое → Past Perfect.' },
  { k: 'form', q: 'When I got to the station, the train ___ (leave).', t: ['had left', "'d left", 'had already left'], w: 'Ушёл раньше, чем я пришёл → had left.' },
  { k: 'form', q: 'They ___ (never / see) snow before that trip.', t: ['had never seen', "'d never seen"], w: 'Never + Past Perfect.' },
  { k: 'fix', q: 'I was hungry because I didn’t eat since morning.', t: ['I was hungry because I hadn’t eaten since morning.', "I was hungry because I hadn't eaten since morning.", 'I was hungry because I had not eaten since morning.'], w: 'До момента в прошлом с since → hadn’t eaten.' },
  { k: 're', q: 'Соедините в одно предложение с after: She read the book. Then she watched the film.', t: ['After she had read the book, she watched the film.', 'After she’d read the book, she watched the film.', 'After she read the book, she watched the film.', 'She watched the film after she had read the book.', 'She watched the film after she’d read the book.', 'She watched the film after she read the book.', 'After reading the book, she watched the film.'], w: 'After + had read (с after можно и просто read).' },
  { k: 'err', q: 'Найдите ошибку: «I couldn’t pay because I have lost my wallet.»', o: ['I couldn’t pay', 'because I have lost', 'my wallet'], a: 1, w: 'Потерял раньше другого прошлого → I had lost.' }
],

'en-usedto': [
  { q: 'I ___ play the piano when I was a child.', o: ['used to', 'use to', 'am used to'], a: 0, w: 'Привычка в прошлом → used to.' },
  { q: '___ you use to live here?', o: ['Did', 'Do', 'Were'], a: 0, w: 'Вопрос: Did you use to…?' },
  { q: 'She didn’t ___ like vegetables.', o: ['used to', 'use to', 'using to'], a: 1, w: 'После didn’t — use to (без d).' },
  { q: 'We used to ___ to the sea every summer.', o: ['go', 'going', 'went'], a: 0, w: 'Used to + глагол без to/-ing.' },
  { q: 'There ___ be a cinema here, but now it’s a shop.', o: ['used to', 'was used to', 'uses to'], a: 0, w: 'Раньше было → there used to be.' },
  { q: 'Now I ___ get up early every day.', o: ['usually', 'used to', 'use to'], a: 0, w: 'Used to — только о прошлом; о настоящем — usually.' },
  { k: 'form', q: 'My dad ___ (used to / smoke), but he stopped ten years ago.', t: ['used to smoke'], w: 'Раньше курил → used to smoke.' },
  { k: 'form', q: 'I ___ (not / used to / like) coffee, but now I love it.', t: ["didn't use to like", 'did not use to like', 'never used to like'], w: 'Didn’t use to + like.' },
  { k: 'fix', q: 'I use to live in Omsk when I was young.', t: ['I used to live in Omsk when I was young.'], w: 'В утверждении — used to.' },
  { k: 're', q: 'Перепишите с used to: When I was a child, I often climbed trees.', t: ['When I was a child, I used to climb trees.', 'I used to climb trees when I was a child.', 'When I was a child, I often used to climb trees.', 'I often used to climb trees when I was a child.', 'When I was a child, I used to climb trees often.'], w: 'Повторявшееся в прошлом → used to climb.' },
  { k: 'err', q: 'Найдите ошибку: «Did you used to play football?»', o: ['Did you', 'used to', 'play football'], a: 1, w: 'После did — use to.' }
],

'en-narrative': [
  { q: 'It was a dark night. The wind ___ and nobody was in the street.', o: ['blows', 'was blowing', 'had blown'], a: 1, w: 'Фон рассказа → Past Continuous.' },
  { q: 'When I opened the door, I saw that someone ___ the room.', o: ['searched', 'had searched', 'was searched'], a: 1, w: 'Обыскали раньше, чем я открыл → had searched.' },
  { q: 'He ___ for two hours when the bus finally came.', o: ['was waiting', 'had been waiting', 'waited'], a: 1, w: 'Длилось до момента в прошлом → had been waiting.' },
  { q: 'She picked up the letter, ___ it and started to cry.', o: ['read', 'was reading', 'had read'], a: 0, w: 'Цепочка действий одно за другим → Past Simple.' },
  { q: 'By the time we got there, everyone ___.', o: ['left', 'had left', 'was leaving'], a: 1, w: 'Ушли до нашего прихода → had left.' },
  { k: 'form', q: 'I ___ (walk) home when I heard a strange noise.', t: ['was walking'], w: 'Фон → was walking.' },
  { k: 'form', q: 'She was tired because she ___ (work) all day.', t: ['had been working', "'d been working", 'had worked'], w: 'Причина в длительном действии до того → had been working.' },
  { k: 'form', q: 'Suddenly the lights ___ (go) out.', t: ['went'], w: 'Внезапное событие → Past Simple.' },
  { k: 'fix', q: 'When I arrived, the party already finished.', t: ['When I arrived, the party had already finished.'], w: 'Раньше моего прихода → had finished.' },
  { k: 'err', q: 'Найдите ошибку: «I had been reading for an hour when the phone was ringing.»', o: ['I had been reading', 'for an hour', 'the phone was ringing'], a: 2, w: 'Перебившее короткое событие → the phone rang.' }
]
});
