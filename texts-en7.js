// Тексты для чтения (английский), A2 — вторая порция: диалог, путевые заметки, отзыв, басня, история, письмо, новость
TEXTS.en.push(
{ id: 'en-t-doctor', level: 'A2', nw: '2026-10-27', title: "At the Doctor's", src: 'Диалог', p: [
  [["Doctor: Good morning. Please sit down. What's the matter?", "Врач: Доброе утро. Садитесь, пожалуйста. Что вас беспокоит?"]],
  [["Paul: I've had a terrible headache for three days, and I've got a sore throat.", "Пол: У меня уже три дня ужасно болит голова, и горло болит."]],
  [["Doctor: Have you got a temperature?", "Врач: Температура есть?"]],
  [["Paul: Yes, a little. It was thirty-eight this morning.", "Пол: Да, небольшая. Утром было тридцать восемь."]],
  [["Doctor: Are you sleeping well?", "Врач: Вы хорошо спите?"]],
  [["Paul: Not really. I cough a lot at night.", "Пол: Не очень. По ночам я сильно кашляю."]],
  [["Doctor: Let me look at your throat. Open your mouth, please… Yes, it's quite red. I think it's a bad cold, not the flu.", "Врач: Давайте посмотрю горло. Откройте рот, пожалуйста… Да, довольно красное. Думаю, это сильная простуда, а не грипп."]],
  [["Paul: Do I need antibiotics?", "Пол: Мне нужны антибиотики?"]],
  [["Doctor: No, you don't. Antibiotics don't help with colds. You should stay at home and rest for a few days.", "Врач: Нет, не нужны. Антибиотики не помогают от простуды. Вам стоит несколько дней побыть дома и отдохнуть."], ["Drink a lot of warm water and tea with honey. You can take these tablets for the headache, twice a day after meals.", "Пейте много тёплой воды и чая с мёдом. От головной боли можно принимать эти таблетки, два раза в день после еды."]],
  [["Paul: Can I go to work?", "Пол: А на работу мне можно?"]],
  [["Doctor: Not this week. If you don't feel better in five days, come back and see me.", "Врач: На этой неделе нет. Если через пять дней не станет лучше, приходите ещё раз."]],
  [["Paul: Thank you, doctor.", "Пол: Спасибо, доктор."]]
], gl: { 'matter': 'дело (what\'s the matter — что случилось)', 'throat': 'горло', paul: 'Пол (имя)', "what's": 'что (= what is; what is the matter — что случилось)', 'thirty-eight': 'тридцать восемь', antibiotics: 'антибиотики', cough: 'кашлять', tablets: 'таблетки', meals: 'приёмы пищи, еда', flu: 'грипп', sore: 'больной (sore throat — болит горло)' }, q: [
  { q: 'Сколько дней у Пола болит голова?', o: ['Три дня', 'Неделю', 'Один день'], a: 0 },
  { q: 'Что, по мнению врача, у Пола?', o: ['Грипп', 'Сильная простуда', 'Ничего серьёзного, можно работать'], a: 1 },
  { q: 'Почему врач не выписал антибиотики?', o: ['Они дорогие', 'У Пола аллергия', 'Они не помогают от простуды'], a: 2 },
  { q: 'Когда Полу нужно прийти снова?', o: ['Если через пять дней не станет лучше', 'Завтра утром', 'Через месяц'], a: 0 }
]},

{ id: 'en-t-edinburgh', level: 'A2', nw: '2026-10-27', title: 'A Weekend in Edinburgh', src: 'Путевые заметки', p: [
  [["Last month my husband and I spent a weekend in Edinburgh, the capital of Scotland.", "В прошлом месяце мы с мужем провели выходные в Эдинбурге, столице Шотландии."], ["We took the train from London. The journey was long, more than four hours, but the views were beautiful.", "Мы ехали поездом из Лондона. Дорога была долгой, больше четырёх часов, но виды были прекрасные."]],
  [["On Saturday morning we visited Edinburgh Castle. It stands on a hill in the middle of the city.", "В субботу утром мы побывали в Эдинбургском замке. Он стоит на холме посреди города."], ["There were a lot of tourists, so we had to wait for half an hour, but it was worth it.", "Туристов было много, и нам пришлось ждать полчаса, но оно того стоило."]],
  [["After that we walked down the Royal Mile, the most famous street in the old town.", "Потом мы прошлись по Королевской миле — самой известной улице старого города."], ["It is full of small shops, cafés and old buildings.", "Она полна маленьких магазинов, кафе и старинных зданий."], ["I bought a warm scarf, and my husband tried haggis, a traditional Scottish dish. He loved it. I didn't!", "Я купила тёплый шарф, а муж попробовал хаггис — традиционное шотландское блюдо. Ему очень понравилось. Мне — нет!"]],
  [["On Sunday it rained all morning, so we went to the National Museum. It's free, and it's really interesting.", "В воскресенье всё утро шёл дождь, поэтому мы пошли в Национальный музей. Вход бесплатный, и там очень интересно."]],
  [["In the afternoon the sun came out, and we climbed Arthur's Seat, an old volcano.", "Днём выглянуло солнце, и мы поднялись на Трон Артура — древний вулкан."], ["It took us an hour to get to the top, but the view of the city was amazing.", "Подъём занял час, но вид на город был потрясающий."]],
  [["My advice: take good shoes and an umbrella. The weather changes every hour!", "Мой совет: возьмите удобную обувь и зонт. Погода меняется каждый час!"]]
], gl: { 'middle': 'середина (in the middle of — посреди)', 'traditional': 'традиционный', 'amazing': 'потрясающий', edinburgh: 'Эдинбург', scotland: 'Шотландия', scottish: 'шотландский', royal: 'королевский', mile: 'миля', haggis: 'хаггис (шотландское блюдо)', volcano: 'вулкан', "arthur's": 'Артура (Arthur\'s Seat — Трон Артура)', seat: 'сиденье, место', national: 'национальный', climbed: 'поднялись, забрались (climb)', worth: 'стоящий (it was worth it — оно того стоило)' }, q: [
  { q: 'Как они добрались до Эдинбурга?', o: ['На поезде', 'На самолёте', 'На машине'], a: 0 },
  { q: 'Кому понравился хаггис?', o: ['Автору', 'Мужу', 'Никому'], a: 1 },
  { q: 'Почему в воскресенье они пошли в музей?', o: ['Он был рядом с отелем', 'Там была выставка', 'Шёл дождь'], a: 2 },
  { q: 'Что такое Arthur\'s Seat?', o: ['Древний вулкан', 'Замок', 'Улица в старом городе'], a: 0 }
]},

{ id: 'en-t-review', level: 'A2', nw: '2026-10-27', title: 'Review: Luigi\'s Pizza', src: 'Отзыв', p: [
  [["★★★☆☆ Good pizza, slow service", "★★★☆☆ Хорошая пицца, медленное обслуживание"]],
  [["I went to Luigi's with three friends last Friday evening.", "В прошлую пятницу вечером я ходила в «Луиджи» с тремя подругами."], ["We booked a table for eight o'clock, but we waited twenty minutes because our table wasn't ready.", "Мы заказали столик на восемь, но ждали двадцать минут, потому что столик не был готов."]],
  [["The restaurant is small and cosy, with candles on the tables and nice Italian music.", "Ресторан маленький и уютный, со свечами на столах и приятной итальянской музыкой."], ["However, it was very busy and quite noisy.", "Однако народу было очень много, и было довольно шумно."]],
  [["The pizza was excellent: thin, crispy and with lots of fresh tomatoes and cheese.", "Пицца была отличная: тонкая, хрустящая, с большим количеством свежих помидоров и сыра."], ["My friend's pasta was good too, but it wasn't very hot.", "Паста у моей подруги тоже была хорошая, но не очень горячая."]],
  [["The problem was the service. The waiter forgot our drinks, and we had to ask three times for the bill.", "Проблема была в обслуживании. Официант забыл про наши напитки, и счёт нам пришлось просить три раза."]],
  [["The prices are not bad: about fifteen pounds for a pizza and a drink.", "Цены неплохие: около пятнадцати фунтов за пиццу и напиток."]],
  [["Would I go back? Maybe for a takeaway. The food is great, but I don't want to wait so long again.", "Пойду ли я туда снова? Может быть, возьму еду навынос. Еда отличная, но так долго ждать снова мне не хочется."]]
], gl: { 'excellent': 'отличный', "luigi's": '«Луиджи» (название)', review: 'отзыв, обзор', italian: 'итальянский', candles: 'свечи', crispy: 'хрустящий', takeaway: 'еда навынос', service: 'обслуживание', cosy: 'уютный', however: 'однако', "friend's": 'друга, подруги', fifteen: 'пятнадцать', twenty: 'двадцать' }, q: [
  { q: 'Почему им пришлось ждать в начале?', o: ['Столик не был готов', 'Они пришли рано', 'Ресторан был закрыт'], a: 0 },
  { q: 'Что автору понравилось больше всего?', o: ['Обслуживание', 'Пицца', 'Тишина'], a: 1 },
  { q: 'Что было не так с официантом?', o: ['Он был грубым', 'Он принёс не ту пиццу', 'Он забыл напитки и долго не нёс счёт'], a: 2 },
  { q: 'Как автор поступит в следующий раз?', o: ['Возможно, закажет навынос', 'Никогда не вернётся', 'Придёт с семьёй'], a: 0 }
]},

{ id: 'en-t-ant', level: 'A2', nw: '2026-10-27', title: 'The Ant and the Grasshopper', src: 'По мотивам басни Эзопа', p: [
  [["One summer day a grasshopper was sitting in a field. He was singing and enjoying the sun.", "Однажды летом кузнечик сидел в поле. Он пел и наслаждался солнцем."]],
  [["An ant walked past. She was carrying a big grain of corn to her home.", "Мимо прошла муравьиха. Она несла к себе домой большое зерно кукурузы."]],
  [["«Why are you working so hard?» asked the grasshopper. «Come and sing with me!»", "«Зачем ты так много работаешь? — спросил кузнечик. — Иди сюда, попой со мной!»"]],
  [["«I'm collecting food for the winter,» said the ant. «You should do the same.»", "«Я собираю еду на зиму, — сказала муравьиха. — И тебе стоит тоже»."]],
  [["«Winter? It's months away!» laughed the grasshopper. «There's a lot of food now.»", "«Зима? Ещё много месяцев! — засмеялся кузнечик. — Сейчас еды полно»."], ["And he went on singing.", "И продолжил петь."]],
  [["The ant worked every day, all summer and all autumn.", "Муравьиха работала каждый день — всё лето и всю осень."], ["The grasshopper sang and danced and slept.", "А кузнечик пел, танцевал и спал."]],
  [["Then winter came. The fields were covered with snow, and there was no food anywhere.", "Потом пришла зима. Поля замело снегом, и еды нигде не было."]],
  [["The grasshopper was cold and hungry. He knocked on the ant's door.", "Кузнечику было холодно и голодно. Он постучал в дверь муравьихи."], ["«Please give me something to eat,» he said.", "«Пожалуйста, дай мне что-нибудь поесть», — сказал он."]],
  [["«What did you do all summer?» asked the ant. «I sang,» said the grasshopper.", "«А что ты делал всё лето?» — спросила муравьиха. «Я пел», — ответил кузнечик."], ["«Well, now you can dance,» said the ant. But she was kind, and she gave him some corn.", "«Ну что ж, теперь можешь потанцевать», — сказала муравьиха. Но она была доброй и дала ему немного кукурузы."]],
  [["The grasshopper learned an important lesson: work today, and you will have something tomorrow.", "Кузнечик усвоил важный урок: работай сегодня — и завтра у тебя что-то будет."]]
], gl: { 'grain': 'зерно', 'field': 'поле', 'fields': 'поля', ant: 'муравей', "ant's": 'муравья, муравьихи', grasshopper: 'кузнечик', corn: 'кукуруза; зерно', collecting: 'собирающий (collect — собирать)', knocked: 'постучал (knock — стучать)', covered: 'покрытый (be covered with — быть покрытым чем-то)', anywhere: 'где-нибудь; нигде (в отрицании)' }, q: [
  { q: 'Что делала муравьиха летом?', o: ['Собирала еду на зиму', 'Пела', 'Спала'], a: 0 },
  { q: 'Почему кузнечик не работал?', o: ['Он был болен', 'Он думал, что до зимы далеко', 'У него был запас еды'], a: 1 },
  { q: 'Чем закончилась басня в этом пересказе?', o: ['Муравьиха прогнала кузнечика', 'Кузнечик нашёл еду сам', 'Муравьиха всё-таки дала ему кукурузы'], a: 2 }
]},

{ id: 'en-t-neighbour', level: 'A2', nw: '2026-10-27', title: 'The New Neighbour', src: 'История', p: [
  [["When Mrs Green moved into the flat next to mine, I didn't like her at all.", "Когда миссис Грин переехала в квартиру рядом с моей, она мне совсем не понравилась."]],
  [["She never said hello. She played the piano late at night, and her music was very loud.", "Она никогда не здоровалась. Она играла на пианино поздно ночью, и музыка была очень громкой."], ["Once I knocked on her door to complain, but she didn't open it.", "Однажды я постучала к ней, чтобы пожаловаться, но она не открыла."]],
  [["Then one cold evening in December I lost my keys.", "А потом, одним холодным декабрьским вечером, я потеряла ключи."], ["I was standing outside my door, tired and angry, and I didn't know what to do.", "Я стояла у своей двери, уставшая и злая, и не знала, что делать."]],
  [["Mrs Green's door opened. «Are you all right?» she asked quietly.", "Дверь миссис Грин открылась. «С вами всё в порядке?» — тихо спросила она."], ["I explained my problem. «Come in and have some tea,» she said. «You can call someone from here.»", "Я объяснила, в чём дело. «Заходите, выпейте чаю, — сказала она. — Отсюда можно кому-нибудь позвонить»."]],
  [["Her flat was warm and full of books and old photos.", "Её квартира была тёплой, в ней было полно книг и старых фотографий."], ["While we were waiting for the locksmith, she told me about her life.", "Пока мы ждали мастера по замкам, она рассказала мне о своей жизни."], ["She was a music teacher for forty years. Her husband died last year, and she moved here to be near her daughter.", "Она сорок лет была учительницей музыки. Её муж умер в прошлом году, и она переехала сюда, чтобы быть ближе к дочери."]],
  [["«I'm sorry about the piano,» she said. «I can't sleep well, and music helps me. And I'm a little deaf, so I don't hear people at the door.»", "«Простите за пианино, — сказала она. — Я плохо сплю, и музыка мне помогает. А ещё я немного глуховата, поэтому не слышу, когда стучат»."]],
  [["Now we have tea together every Sunday. She plays the piano in the afternoon, and I really enjoy listening.", "Теперь мы каждое воскресенье пьём вместе чай. Она играет на пианино днём, и я с удовольствием слушаю."], ["I learned something important: don't judge people before you know them.", "Я поняла важную вещь: не суди людей, пока их не узнаешь."]]
], gl: { 'mine': 'мой (без существительного: next to mine — рядом с моей)', 'mrs': 'миссис', "green's": 'миссис Грин (Mrs Green\'s door — дверь миссис Грин)', green: 'Грин (фамилия); зелёный', complain: 'жаловаться', locksmith: 'мастер по замкам, слесарь', deaf: 'глухой', judge: 'судить, оценивать; судья', forty: 'сорок' }, q: [
  { q: 'Почему соседка сначала не понравилась рассказчице?', o: ['Она громко играла на пианино ночью и не здоровалась', 'Она шумно ремонтировала квартиру', 'У неё была злая собака'], a: 0 },
  { q: 'Что случилось в декабре?', o: ['Миссис Грин заболела', 'Рассказчица потеряла ключи', 'Сломалось пианино'], a: 1 },
  { q: 'Почему миссис Грин не открывала дверь?', o: ['Она боялась гостей', 'Её не было дома', 'Она плохо слышит'], a: 2 },
  { q: 'Какой урок вынесла рассказчица?', o: ['Не суди людей, пока их не узнаешь', 'Всегда носи запасные ключи', 'Не живи рядом с музыкантами'], a: 0 }
]},

{ id: 'en-t-hotel', level: 'A2', nw: '2026-10-27', title: 'An Email to a Hotel', src: 'Письмо', p: [
  [["Subject: Problems with my room", "Тема: Проблемы с моим номером"]],
  [["Dear Sir or Madam,", "Уважаемые господа,"]],
  [["I stayed at your hotel from the 3rd to the 6th of May, in room 214.", "Я проживал в вашем отеле с 3 по 6 мая, в номере 214."], ["I'm writing because I was not happy with my stay.", "Пишу, потому что остался недоволен проживанием."]],
  [["First, the room was not clean when I arrived. There were dirty towels in the bathroom.", "Во-первых, когда я приехал, номер не был убран. В ванной лежали грязные полотенца."]],
  [["Second, the air conditioning didn't work, and the room was very hot.", "Во-вторых, не работал кондиционер, и в номере было очень жарко."], ["I called reception twice, but nobody came to fix it.", "Я дважды звонил на ресепшен, но никто не пришёл его починить."]],
  [["Finally, your website says that breakfast is included, but I had to pay for it every morning.", "И наконец, на вашем сайте написано, что завтрак включён, но мне приходилось платить за него каждое утро."]],
  [["I have stayed at your hotel before, and I was always very happy, so I was surprised and disappointed this time.", "Я и раньше останавливался в вашем отеле и всегда был очень доволен, поэтому в этот раз удивился и расстроился."]],
  [["I would like you to return the money for the breakfasts. I'm attaching my receipts.", "Прошу вернуть деньги за завтраки. Прикладываю чеки."]],
  [["I look forward to hearing from you.", "Жду вашего ответа."]],
  [["Yours faithfully,", "С уважением,"], ["Daniel Brooks", "Дэниел Брукс"]]
], gl: { 'dear': 'уважаемый, дорогой (в обращении)', 'sir': 'сэр, господин', subject: 'тема (письма)', madam: 'мадам (Dear Sir or Madam — уважаемые господа)', '3rd': 'третье (число)', '6th': 'шестое (число)', reception: 'ресепшен, стойка регистрации', 'air': 'воздух (air conditioning — кондиционер)', conditioning: 'кондиционирование', included: 'включённый', attaching: 'прикладываю (attach — прикреплять)', receipts: 'чеки', faithfully: 'преданно (Yours faithfully — с уважением)', daniel: 'Дэниел (имя)', brooks: 'Брукс (фамилия)', towels: 'полотенца', twice: 'дважды', disappointed: 'разочарованный, расстроенный' }, q: [
  { q: 'Что было в ванной, когда Дэниел приехал?', o: ['Грязные полотенца', 'Сломанный душ', 'Ничего не было'], a: 0 },
  { q: 'Что не работало в номере?', o: ['Телевизор', 'Кондиционер', 'Свет'], a: 1 },
  { q: 'Что Дэниел просит сделать?', o: ['Дать скидку на следующий раз', 'Извиниться письменно', 'Вернуть деньги за завтраки'], a: 2 },
  { q: 'Почему он удивился?', o: ['Раньше в этом отеле всё было хорошо', 'Отель был новый', 'Друзья хвалили отель'], a: 0 }
]},

{ id: 'en-t-dog', level: 'A2', nw: '2026-10-27', title: 'Lost Dog Walks 60 Kilometres Home', src: 'Новость', p: [
  [["A small dog called Bella has surprised her family by walking sixty kilometres home.", "Маленькая собака по кличке Белла удивила свою семью: она прошла шестьдесят километров до дома."]],
  [["Bella, a four-year-old terrier, got lost three weeks ago when the family was visiting friends in another town.", "Белла, четырёхлетний терьер, потерялась три недели назад, когда семья гостила у друзей в другом городе."], ["She ran away after she heard fireworks.", "Она убежала, испугавшись фейерверка."]],
  [["The family looked for her for two days. They put photos of her on social media and on trees and shops in the town.", "Семья искала её два дня. Её фотографии разместили в соцсетях, на деревьях и в магазинах города."], ["But nobody saw her, and they went home very sad.", "Но никто её не видел, и они вернулись домой очень грустными."]],
  [["Last Tuesday morning, Jenny Clark, aged eleven, opened the front door to go to school. Bella was sitting on the doorstep.", "В прошлый вторник утром одиннадцатилетняя Дженни Кларк открыла входную дверь, чтобы пойти в школу. На крыльце сидела Белла."]],
  [["«She was very thin and dirty, and her paws were sore, but she was wagging her tail,» said Jenny. «I started crying.»", "«Она была очень худая и грязная, лапы поранены, но она виляла хвостом, — рассказала Дженни. — Я заплакала»."]],
  [["The vet says Bella is fine now. She just needs food and a lot of rest.", "Ветеринар говорит, что сейчас с Беллой всё хорошо. Ей нужны только еда и много отдыха."]],
  [["Nobody knows how she found the way. «Dogs have an amazing sense of smell,» the vet explained. «Some can find their home from very far away.»", "Никто не знает, как она нашла дорогу. «У собак удивительный нюх, — объяснил ветеринар. — Некоторые находят дом издалека»."]]
], gl: { 'paws': 'лапы', 'sore': 'больной, натёртый', 'way': 'путь, дорога (find the way — найти дорогу)', 'amazing': 'удивительный', bella: 'Белла (кличка)', sixty: 'шестьдесят', kilometres: 'километры', 'four-year-old': 'четырёхлетний', terrier: 'терьер', fireworks: 'фейерверк', jenny: 'Дженни (имя)', clark: 'Кларк (фамилия)', aged: 'в возрасте', eleven: 'одиннадцать', doorstep: 'порог, крыльцо', wagging: 'виляя (wag — вилять)', tail: 'хвост', vet: 'ветеринар', smell: 'запах; нюх', thin: 'худой; тонкий', media: 'медиа (social media — соцсети)' }, q: [
  { q: 'Почему Белла убежала?', o: ['Испугалась фейерверка', 'Погналась за кошкой', 'Её забыли в машине'], a: 0 },
  { q: 'Кто нашёл Беллу?', o: ['Ветеринар', 'Дженни, когда шла в школу', 'Друзья в другом городе'], a: 1 },
  { q: 'Как, по словам ветеринара, собаки находят дорогу?', o: ['По солнцу', 'Им помогают люди', 'У них удивительный нюх'], a: 2 }
]}
);
