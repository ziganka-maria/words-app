// Тексты для чтения (английский), A1 — вторая порция: истории, диалоги, письмо, объявление, басня. nw — дата выпуска (для отметки «новое»)
TEXTS.en.push(
{ id: 'en-t-market', level: 'A1', nw: '2026-10-27', title: 'At the Market', src: 'Диалог', p: [
  [["Seller: Good morning! Can I help you?", "Продавец: Доброе утро! Чем могу помочь?"]],
  [["Ben: Yes, please. I want some apples. How much are they?", "Бен: Да, пожалуйста. Мне нужны яблоки. Сколько они стоят?"]],
  [["Seller: The red apples are two pounds a kilo. The green apples are one pound fifty.", "Продавец: Красные яблоки — два фунта за килограмм. Зелёные — фунт пятьдесят."]],
  [["Ben: A kilo of red apples, please. And do you have bananas?", "Бен: Килограмм красных, пожалуйста. А бананы у вас есть?"]],
  [["Seller: Sorry, no bananas today. But we have very good oranges.", "Продавец: Извините, сегодня бананов нет. Но у нас очень хорошие апельсины."]],
  [["Ben: OK, six oranges, please. And three tomatoes.", "Бен: Хорошо, шесть апельсинов, пожалуйста. И три помидора."]],
  [["Seller: Here you are. That's five pounds twenty.", "Продавец: Пожалуйста. С вас пять фунтов двадцать."]],
  [["Ben: Here's ten pounds.", "Бен: Вот десять фунтов."]],
  [["Seller: And here's your change: four pounds eighty. Have a nice day!", "Продавец: А вот ваша сдача — четыре фунта восемьдесят. Хорошего дня!"]],
  [["Ben: Thank you. You too!", "Бен: Спасибо. И вам!"]]
], gl: { ben: 'Бен (имя)', seller: 'продавец', kilo: 'килограмм', pounds: 'фунты (деньги)', change: 'сдача; менять', "here's": 'вот (= here is)', twenty: 'двадцать', eighty: 'восемьдесят', fifty: 'пятьдесят' }, q: [
  { q: 'Какие яблоки купил Бен?', o: ['Красные', 'Зелёные', 'Никакие'], a: 0 },
  { q: 'Чего сегодня нет у продавца?', o: ['Апельсинов', 'Бананов', 'Помидоров'], a: 1 },
  { q: 'Сколько стоили покупки?', o: ['Четыре фунта восемьдесят', 'Десять фунтов', 'Пять фунтов двадцать'], a: 2 }
]},

{ id: 'en-t-cat', level: 'A1', nw: '2026-10-27', title: 'My Cat Max', src: 'История', p: [
  [["I have a cat. His name is Max.", "У меня есть кот. Его зовут Макс."], ["He is big and orange, and he has green eyes.", "Он большой и рыжий, а глаза у него зелёные."]],
  [["Max is four years old. He likes fish and milk, but he doesn't like dogs.", "Максу четыре года. Он любит рыбу и молоко, но не любит собак."]],
  [["Every morning Max sits in the kitchen and waits for his breakfast.", "Каждое утро Макс сидит на кухне и ждёт завтрак."], ["He is very loud when he is hungry!", "Когда он голодный, он очень громко мяукает!"]],
  [["In the afternoon he sleeps on the sofa or in a box.", "Днём он спит на диване или в коробке."], ["He loves boxes. Big boxes, small boxes — all boxes!", "Он обожает коробки. Большие коробки, маленькие коробки — все коробки!"]],
  [["In the evening Max plays with a small ball.", "Вечером Макс играет с маленьким мячиком."], ["Then he sits next to me when I read.", "Потом он сидит рядом со мной, когда я читаю."]],
  [["Max is not just a cat. He is my friend.", "Макс не просто кот. Он мой друг."]]
], gl: { max: 'Макс (имя)', orange: 'рыжий; оранжевый; апельсин', boxes: 'коробки', loud: 'громкий' }, q: [
  { q: 'Какого цвета Макс?', o: ['Рыжий', 'Чёрный', 'Белый'], a: 0 },
  { q: 'Что Макс не любит?', o: ['Рыбу', 'Собак', 'Коробки'], a: 1 },
  { q: 'Где Макс спит днём?', o: ['На кровати', 'На кухне', 'На диване или в коробке'], a: 2 }
]},

{ id: 'en-t-lunch', level: 'A1', nw: '2026-10-27', title: 'Sunday Lunch', src: 'История', p: [
  [["Every Sunday my family has lunch at my grandmother's house.", "Каждое воскресенье наша семья обедает у бабушки."], ["She lives in a small village near the city.", "Она живёт в маленькой деревне недалеко от города."]],
  [["We go there by car. It takes forty minutes.", "Мы едем туда на машине. Дорога занимает сорок минут."]],
  [["My grandmother is seventy-eight, but she is very active.", "Моей бабушке семьдесят восемь, но она очень активная."], ["She cooks a big lunch for everyone: soup, chicken, potatoes and salad.", "Она готовит большой обед на всех: суп, курицу, картошку и салат."]],
  [["My uncle and aunt come too, with my two cousins.", "Дядя и тётя тоже приезжают с моими двумя двоюродными братьями."], ["The house is very noisy, but it's fun.", "В доме очень шумно, но весело."]],
  [["After lunch the children play in the garden and the adults drink tea and talk.", "После обеда дети играют в саду, а взрослые пьют чай и разговаривают."]],
  [["At five o'clock we say goodbye and go home.", "В пять часов мы прощаемся и едем домой."], ["I always feel happy on Sunday evenings.", "По воскресеньям вечером мне всегда хорошо."]]
], gl: { 'active': 'активный', 'fun': 'веселье (it\'s fun — весело)', 'seventy-eight': 'семьдесят восемь', cousins: 'двоюродные братья и сёстры', noisy: 'шумный', adults: 'взрослые', forty: 'сорок', "grandmother's": 'бабушкин (у бабушки)' }, q: [
  { q: 'Где живёт бабушка?', o: ['В деревне', 'В центре города', 'У моря'], a: 0 },
  { q: 'Сколько лет бабушке?', o: ['Сорок', 'Семьдесят восемь', 'Восемьдесят семь'], a: 1 },
  { q: 'Что делают взрослые после обеда?', o: ['Играют в саду', 'Спят', 'Пьют чай и разговаривают'], a: 2 }
]},

{ id: 'en-t-postcard', level: 'A1', nw: '2026-10-27', title: 'A Postcard from the Sea', src: 'Открытка', p: [
  [["Dear Grandma,", "Дорогая бабушка,"]],
  [["We are on holiday by the sea! The weather is hot and sunny.", "Мы отдыхаем на море! Погода жаркая и солнечная."]],
  [["Our hotel is small, but it's very clean, and it's next to the beach.", "Наш отель маленький, но очень чистый, и он рядом с пляжем."], ["From our window we can see the sea.", "Из окна нам видно море."]],
  [["Every day we swim and play on the beach.", "Каждый день мы плаваем и играем на пляже."], ["Dad reads books, and Mum takes a lot of photos.", "Папа читает книги, а мама много фотографирует."]],
  [["The food is great. I eat ice cream every day!", "Еда отличная. Я ем мороженое каждый день!"]],
  [["We come home on Saturday. See you soon!", "Мы возвращаемся домой в субботу. До скорой встречи!"]],
  [["Lots of love,", "Целую,"], ["Lily", "Лили"]]
], gl: { 'dear': 'дорогой (в обращении)', 'cream': 'сливки (ice cream — мороженое)', grandma: 'бабушка (ласково)', lily: 'Лили (имя)', postcard: 'открытка', lots: 'много (lots of love — целую, с любовью)' }, q: [
  { q: 'Какая погода на море?', o: ['Жаркая и солнечная', 'Холодная', 'Дождливая'], a: 0 },
  { q: 'Что делает мама?', o: ['Читает книги', 'Много фотографирует', 'Плавает весь день'], a: 1 },
  { q: 'Когда семья вернётся домой?', o: ['В понедельник', 'В воскресенье', 'В субботу'], a: 2 }
]},

{ id: 'en-t-weather', level: 'A1', nw: '2026-10-27', title: "What's the Weather Like?", src: 'Телефонный разговор', p: [
  [["Sam: Hi, Mum! How are you?", "Сэм: Привет, мам! Как ты?"]],
  [["Mum: I'm fine, thanks. How's Scotland? What's the weather like?", "Мама: Хорошо, спасибо. Как Шотландия? Какая там погода?"]],
  [["Sam: It's cold and windy. It's raining now, and it rained yesterday too!", "Сэм: Холодно и ветрено. Сейчас идёт дождь, и вчера тоже был дождь!"]],
  [["Mum: Oh no! Here it's warm and sunny. It's twenty-two degrees.", "Мама: Ой, нет! А у нас тепло и солнечно. Двадцать два градуса."]],
  [["Sam: Lucky you! It's only ten degrees here.", "Сэм: Повезло вам! А здесь всего десять градусов."]],
  [["Mum: Do you have a warm jacket?", "Мама: У тебя есть тёплая куртка?"]],
  [["Sam: Yes, and a hat and an umbrella. Don't worry.", "Сэм: Да, и шапка, и зонт. Не волнуйся."]],
  [["Mum: And what about tomorrow?", "Мама: А какая погода будет завтра?"]],
  [["Sam: Cloudy, but no rain. We want to walk in the mountains.", "Сэм: Облачно, но без дождя. Мы хотим погулять в горах."]],
  [["Mum: Great! Have fun and call me tomorrow.", "Мама: Отлично! Хорошо вам погулять! И позвони мне завтра."]]
], gl: { sam: 'Сэм (имя)', scotland: 'Шотландия', "how's": 'как (= how is)', degrees: 'градусы', 'twenty-two': 'двадцать два', lucky: 'везучий (lucky you — повезло тебе)', windy: 'ветреный', cloudy: 'облачный' }, q: [
  { q: 'Какая погода в Шотландии?', o: ['Холодно, ветрено и дождь', 'Тепло и солнечно', 'Снег'], a: 0 },
  { q: 'Сколько градусов у мамы?', o: ['Десять', 'Двадцать два', 'Двенадцать'], a: 1 },
  { q: 'Что Сэм хочет делать завтра?', o: ['Остаться в отеле', 'Плавать', 'Гулять в горах'], a: 2 }
]},

{ id: 'en-t-fox', level: 'A1', nw: '2026-10-27', title: 'The Fox and the Grapes', src: 'По мотивам басни Эзопа', p: [
  [["It is a hot summer day. A fox is walking in a garden.", "Жаркий летний день. Лиса гуляет по саду."], ["She is very hungry and thirsty.", "Она очень голодная, и ей хочется пить."]],
  [["Suddenly she sees some grapes. They are high up on a vine.", "Вдруг она видит виноград. Он высоко на лозе."], ["The grapes are big, purple and sweet.", "Виноград крупный, фиолетовый и сладкий."]],
  [["«I want those grapes!» says the fox.", "«Хочу этот виноград!» — говорит лиса."], ["She jumps, but she can't get them.", "Она прыгает, но не может их достать."]],
  [["She jumps again and again. One, two, three, ten times!", "Она прыгает снова и снова. Раз, два, три, десять раз!"], ["But the grapes are too high.", "Но виноград слишком высоко."]],
  [["At last the fox is tired. She sits down and looks at the grapes.", "Наконец лиса устала. Она садится и смотрит на виноград."]],
  [["«I don't want them,» she says. «They are not sweet. They are sour!»", "«Не нужен он мне, — говорит она. — Он не сладкий. Он кислый!»"], ["And she walks away.", "И уходит."]],
  [["Sometimes people say something is bad when they can't have it.", "Иногда люди говорят, что что-то плохое, когда не могут это получить."]]
], gl: { 'vine': 'виноградная лоза', fox: 'лиса', grapes: 'виноград', purple: 'фиолетовый', sour: 'кислый', thirsty: 'испытывающий жажду (be thirsty — хотеть пить)', jumps: 'прыгает (jump — прыгать)' }, q: [
  { q: 'Где виноград?', o: ['Высоко на лозе', 'На земле', 'В корзине'], a: 0 },
  { q: 'Почему лиса не может достать виноград?', o: ['Он невкусный', 'Он слишком высоко', 'Его охраняет собака'], a: 1 },
  { q: 'Что лиса говорит в конце?', o: ['«Я попробую завтра»', '«Виноград сладкий»', '«Виноград кислый, он мне не нужен»'], a: 2 }
]},

{ id: 'en-t-room', level: 'A1', nw: '2026-10-27', title: 'Room for Rent', src: 'Объявление и переписка', p: [
  [["ROOM FOR RENT. A nice room in a quiet flat in the city centre.", "СДАЁТСЯ КОМНАТА. Хорошая комната в тихой квартире в центре города."], ["The room has a bed, a desk and a big window.", "В комнате есть кровать, письменный стол и большое окно."], ["There is a kitchen and a bathroom. No pets, please. Five hundred pounds a month.", "Есть кухня и ванная. Без домашних животных, пожалуйста. Пятьсот фунтов в месяц."]],
  [["Message from Nina: Hello! Is the room still free? I'm a student, and I'm twenty years old.", "Сообщение от Нины: Здравствуйте! Комната ещё свободна? Я студентка, мне двадцать лет."]],
  [["Answer: Hi, Nina! Yes, it's free. Do you smoke?", "Ответ: Здравствуйте, Нина! Да, свободна. Вы курите?"]],
  [["Nina: No, I don't. Is there Wi-Fi in the flat?", "Нина: Нет, не курю. В квартире есть Wi-Fi?"]],
  [["Answer: Yes, there is, and there's a washing machine too. Can you come and see the room on Friday at six?", "Ответ: Да, есть, и стиральная машина тоже. Можете прийти посмотреть комнату в пятницу в шесть?"]],
  [["Nina: Yes, I can. What's the address?", "Нина: Да, смогу. Какой адрес?"]],
  [["Answer: 14 Park Street, flat 3. See you on Friday!", "Ответ: Парк-стрит, дом 14, квартира 3. До встречи в пятницу!"]]
], gl: { rent: 'аренда (for rent — сдаётся)', nina: 'Нина (имя)', pets: 'домашние животные', 'wi-fi': 'вайфай', hundred: 'сто (five hundred — пятьсот)', washing: 'стирка (washing machine — стиральная машина)', smoke: 'курить', desk: 'письменный стол' }, q: [
  { q: 'Где находится комната?', o: ['В центре города', 'За городом', 'У моря'], a: 0 },
  { q: 'Чего нельзя в этой квартире?', o: ['Готовить', 'Держать животных', 'Пользоваться Wi-Fi'], a: 1 },
  { q: 'Когда Нина придёт посмотреть комнату?', o: ['В понедельник в шесть', 'В субботу утром', 'В пятницу в шесть'], a: 2 }
]}
);
