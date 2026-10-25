// Тексты для чтения (английский), A1–A2. p — абзацы из предложений [англ., рус.]; gl — слова, которых нет в словаре; q — вопросы (a — номер верного)
window.TEXTS = window.TEXTS || {};
TEXTS.en = [
{ id: 'en-t-day', level: 'A1', title: "Anna's Day", src: 'История', p: [
  [["My name is Anna.", "Меня зовут Анна."], ["I am twenty-six years old and I live in a small flat in Moscow.", "Мне двадцать шесть лет, и я живу в маленькой квартире в Москве."]],
  [["I get up at seven o'clock every day.", "Я встаю в семь часов каждый день."], ["First, I have a shower.", "Сначала я принимаю душ."], ["Then I have breakfast: an egg, bread and a cup of coffee.", "Потом я завтракаю: яйцо, хлеб и чашка кофе."]],
  [["I go to work by bus.", "Я езжу на работу на автобусе."], ["I work in an office near the river.", "Я работаю в офисе у реки."], ["My colleagues are friendly, and my boss is very kind.", "Мои коллеги дружелюбные, а начальник очень добрый."]],
  [["I finish work at six.", "Я заканчиваю работу в шесть."], ["In the evening I cook dinner, read a book or watch a film.", "Вечером я готовлю ужин, читаю книгу или смотрю фильм."], ["I go to bed at eleven.", "Я ложусь спать в одиннадцать."]],
  [["On Saturdays I meet my friends.", "По субботам я встречаюсь с друзьями."], ["We go to a café or walk in the park.", "Мы ходим в кафе или гуляем в парке."], ["I love my weekends!", "Я люблю свои выходные!"]]
], gl: { 'twenty-six': 'двадцать шесть', moscow: 'Москва', anna: 'Анна', first: 'сначала; первый', then: 'потом', weekends: 'выходные' }, q: [
  { q: 'Во сколько Анна встаёт?', o: ['В семь', 'В шесть', 'В одиннадцать'], a: 0 },
  { q: 'Как Анна ездит на работу?', o: ['На машине', 'На автобусе', 'Пешком'], a: 1 },
  { q: 'Что Анна делает по субботам?', o: ['Работает', 'Встречается с друзьями', 'Учит английский'], a: 1 }
]},

{ id: 'en-t-flat', level: 'A1', title: 'A New Flat', src: 'История', p: [
  [["Tom has a new flat.", "У Тома новая квартира."], ["It is not big, but it is very nice.", "Она небольшая, но очень хорошая."]],
  [["There are two rooms, a kitchen and a bathroom.", "В ней две комнаты, кухня и ванная."], ["The living room has a big window, so it is light and warm.", "В гостиной большое окно, поэтому там светло и тепло."], ["There is a green sofa, a small table and a lot of books.", "Там есть зелёный диван, маленький стол и много книг."]],
  [["The bedroom is small.", "Спальня маленькая."], ["There is a bed, a lamp and a picture of the sea on the wall.", "Там есть кровать, лампа и картина с морем на стене."]],
  [["The kitchen is Tom's favourite room.", "Кухня — любимая комната Тома."], ["He likes cooking, and his friends often come for dinner.", "Он любит готовить, и друзья часто приходят к нему на ужин."]],
  [["There is one problem: the flat is on the fifth floor and there is no lift!", "Есть одна проблема: квартира на шестом этаже, а лифта нет!"], ["But Tom says: «It's good exercise.»", "Но Том говорит: «Это хорошая зарядка»."]]
], gl: { tom: 'Том', fifth: 'пятый', favourite: 'любимый', problem: 'проблема', says: 'говорит', likes: 'любит', cooking: 'готовка, готовить' }, q: [
  { q: 'Сколько комнат в квартире Тома?', o: ['Одна', 'Две', 'Три'], a: 1 },
  { q: 'Какая комната любимая у Тома?', o: ['Спальня', 'Гостиная', 'Кухня'], a: 2 },
  { q: 'Какая в квартире проблема?', o: ['Нет лифта', 'Маленькое окно', 'Нет кухни'], a: 0 }
]},

{ id: 'en-t-cafe', level: 'A1', title: 'At the Café', src: 'Диалог', p: [
  [["Waiter: Good morning! What would you like?", "Официант: Доброе утро! Что вы хотите?"]],
  [["Kate: Hello! Can I have a cup of tea, please?", "Кейт: Здравствуйте! Можно мне чашку чая?"]],
  [["Waiter: Of course. Black tea or green tea?", "Официант: Конечно. Чёрный чай или зелёный?"]],
  [["Kate: Black tea with milk, please. And a cheese sandwich.", "Кейт: Чёрный, с молоком, пожалуйста. И сэндвич с сыром."]],
  [["Waiter: Anything else?", "Официант: Что-нибудь ещё?"]],
  [["Kate: Yes, a piece of chocolate cake. How much is that?", "Кейт: Да, кусок шоколадного торта. Сколько с меня?"]],
  [["Waiter: That's eight pounds fifty.", "Официант: С вас восемь фунтов пятьдесят."]],
  [["Kate: Can I pay by card?", "Кейт: Можно оплатить картой?"]],
  [["Waiter: Yes, no problem. Here you are. Enjoy your breakfast!", "Официант: Да, без проблем. Пожалуйста. Приятного завтрака!"]],
  [["Kate: Thank you very much!", "Кейт: Большое спасибо!"]]
], gl: { kate: 'Кейт', would: 'бы (вежливая просьба): would you like — хотите ли вы', anything: 'что-нибудь', else: 'ещё (кроме)', piece: 'кусок', 'that\'s': 'это (= that is)', here: 'здесь; here you are — пожалуйста (подавая)' }, q: [
  { q: 'Какой чай заказывает Кейт?', o: ['Зелёный', 'Чёрный с молоком', 'С лимоном'], a: 1 },
  { q: 'Что Кейт берёт к чаю?', o: ['Сэндвич с сыром и торт', 'Только торт', 'Салат'], a: 0 },
  { q: 'Как Кейт платит?', o: ['Наличными', 'Картой', 'Не платит'], a: 1 }
]},

{ id: 'en-t-lion', level: 'A1', title: 'The Lion and the Mouse', src: 'По мотивам басни Эзопа', p: [
  [["A big lion is sleeping in the forest.", "В лесу спит большой лев."], ["A little mouse runs across his face.", "Маленькая мышка пробегает по его морде."], ["The lion wakes up. He is angry.", "Лев просыпается. Он сердит."]],
  [["He catches the mouse in his big paw.", "Он ловит мышку своей большой лапой."], ["«Please, don't eat me!» says the mouse. «One day I can help you.»", "«Пожалуйста, не ешь меня! — говорит мышка. — Однажды я смогу тебе помочь»."]],
  [["The lion laughs. «You are very small. How can you help me?»", "Лев смеётся: «Ты совсем маленькая. Как ты можешь мне помочь?»"], ["But he is kind, and he lets the mouse go.", "Но он добрый и отпускает мышку."]],
  [["A week later, hunters catch the lion in a net.", "Через неделю охотники ловят льва сетью."], ["He cannot move. He roars and roars.", "Он не может пошевелиться. Он рычит и рычит."]],
  [["The little mouse hears him.", "Маленькая мышка слышит его."], ["She runs to the net and bites the ropes with her sharp teeth.", "Она бежит к сети и перегрызает верёвки острыми зубами."], ["Soon the lion is free!", "Скоро лев свободен!"]],
  [["«Thank you, my little friend,» says the lion.", "«Спасибо, мой маленький друг», — говорит лев."], ["Even a small friend can be a big help.", "Даже маленький друг может очень помочь."]]
], gl: { paw: 'лапа', hunters: 'охотники', net: 'сеть', roars: 'рычит', ropes: 'верёвки', lets: 'позволяет; lets go — отпускает', later: 'позже; a week later — через неделю', soon: 'скоро', move: 'двигаться', cannot: 'не может', says: 'говорит', wakes: 'просыпается', runs: 'бежит' }, q: [
  { q: 'Почему лев рассердился?', o: ['Мышка его разбудила', 'Он был голоден', 'Пошёл дождь'], a: 0 },
  { q: 'Кто поймал льва?', o: ['Мышка', 'Охотники', 'Другой лев'], a: 1 },
  { q: 'Как мышка помогла льву?', o: ['Позвала друзей', 'Перегрызла верёвки', 'Принесла еду'], a: 1 },
  { q: 'Главная мысль басни:', o: ['Сильный всегда прав', 'Даже маленький друг может очень помочь', 'Не спи в лесу'], a: 1 }
]},

{ id: 'en-t-msg', level: 'A1', title: 'A Message from Tom', src: 'Переписка', p: [
  [["Hi Anna!", "Привет, Анна!"], ["How are you?", "Как дела?"], ["I'm in Edinburgh with my brother this week.", "На этой неделе я в Эдинбурге с братом."]],
  [["The city is beautiful, but the weather is cold and windy.", "Город красивый, но погода холодная и ветреная."], ["Today we visited the castle and a big museum.", "Сегодня мы были в замке и в большом музее."], ["Tomorrow we're going to the mountains.", "Завтра мы едем в горы."]],
  [["The food here is good. I love fish and chips!", "Еда здесь хорошая. Обожаю рыбу с картошкой!"], ["I'm back on Sunday.", "Я вернусь в воскресенье."], ["Are you free on Monday evening? Let's have dinner together.", "Ты свободна в понедельник вечером? Давай поужинаем вместе."]],
  [["See you soon,", "До скорой встречи,"], ["Tom", "Том"], ["PS: I have a little present for you!", "P.S. У меня для тебя маленький подарок!"]]
], gl: { edinburgh: 'Эдинбург (город в Шотландии)', visited: 'посетили', chips: 'картофель фри', back: 'обратно; I\'m back — я вернусь', "let's": 'давай(те)', soon: 'скоро', ps: 'P.S., постскриптум', "we're": 'мы (= we are)', "i'm": 'я (= I am)', going: 'going to — собираться; едем' }, q: [
  { q: 'Где сейчас Том?', o: ['В Лондоне', 'В Эдинбурге', 'В Москве'], a: 1 },
  { q: 'Какая там погода?', o: ['Тёплая и солнечная', 'Холодная и ветреная', 'Идёт снег'], a: 1 },
  { q: 'Что Том предлагает Анне?', o: ['Поужинать в понедельник', 'Поехать в горы', 'Позвонить в субботу'], a: 0 }
]},

{ id: 'en-t-lost', level: 'A2', title: 'Lost in London', src: 'История', p: [
  [["Last summer I went to London for the first time.", "Прошлым летом я впервые поехала в Лондон."], ["On my second day, I wanted to visit a famous market, but I got lost.", "На второй день я хотела побывать на известном рынке, но заблудилась."]],
  [["My phone battery was dead, so I couldn't use the map.", "Батарея телефона села, поэтому я не могла воспользоваться картой."], ["I was standing on a busy street and I didn't know what to do.", "Я стояла на оживлённой улице и не знала, что делать."]],
  [["Then I saw an elderly woman with a small dog.", "Потом я увидела пожилую женщину с маленькой собачкой."], ["«Excuse me,» I said. «How can I get to the market?»", "«Извините, — сказала я. — Как пройти к рынку?»"]],
  [["She smiled. «It's not far. Go straight on, turn left at the traffic lights and cross the bridge.", "Она улыбнулась: «Это недалеко. Идите прямо, на светофоре поверните налево и перейдите мост."], ["The market is on the right, next to the station.»", "Рынок будет справа, рядом со станцией»."]],
  [["I thanked her and followed her directions.", "Я поблагодарила её и пошла, как она сказала."], ["Ten minutes later I was there!", "Через десять минут я была на месте!"]],
  [["The market was amazing: there were hundreds of stalls with food, clothes and old books.", "Рынок был потрясающим: сотни прилавков с едой, одеждой и старыми книгами."], ["I bought a souvenir for my mother and had the best coffee of the trip.", "Я купила маме сувенир и выпила лучший кофе за всю поездку."]],
  [["Since then I always carry a paper map — just in case!", "С тех пор я всегда ношу с собой бумажную карту — на всякий случай!"]]
], gl: { lost: 'потерянный; got lost — заблудилась', dead: 'мёртвый; battery was dead — батарея села', "couldn't": 'не могла (= could not)', busy: 'оживлённый', cross: 'переходить', thanked: 'поблагодарила', directions: 'указания, как пройти', amazing: 'потрясающий', hundreds: 'сотни', stalls: 'прилавки', paper: 'бумажный', case: 'случай; just in case — на всякий случай', got: 'got lost — заблудилась' }, q: [
  { q: 'Почему рассказчица не могла воспользоваться картой в телефоне?', o: ['Телефон украли', 'Батарея села', 'Не было интернета'], a: 1 },
  { q: 'Кто помог найти дорогу?', o: ['Полицейский', 'Пожилая женщина с собакой', 'Водитель такси'], a: 1 },
  { q: 'Где находится рынок?', o: ['Рядом со станцией', 'Рядом с замком', 'За рекой, у парка'], a: 0 },
  { q: 'Что она делает с тех пор?', o: ['Не ездит в Лондон', 'Всегда носит бумажную карту', 'Покупает новый телефон'], a: 1 }
]},

{ id: 'en-t-elves', level: 'A2', title: 'The Elves and the Shoemaker', src: 'По мотивам сказки братьев Гримм', p: [
  [["Once upon a time there was a poor shoemaker.", "Жил-был бедный сапожник."], ["He worked very hard, but he only had enough leather for one pair of shoes.", "Он очень много работал, но кожи у него оставалось только на одну пару обуви."]],
  [["One evening he cut the leather and left it on the table.", "Однажды вечером он раскроил кожу и оставил её на столе."], ["«I'll make the shoes tomorrow,» he said, and went to bed.", "«Сошью туфли завтра», — сказал он и лёг спать."]],
  [["In the morning he couldn't believe his eyes.", "Утром он не поверил своим глазам."], ["On the table there was a pair of beautiful shoes!", "На столе стояла пара прекрасных туфель!"], ["A rich man bought them for a lot of money.", "Богатый человек купил их за большие деньги."]],
  [["With the money, the shoemaker bought leather for two pairs.", "На эти деньги сапожник купил кожи на две пары."], ["The next morning, two pairs were ready.", "На следующее утро были готовы две пары."], ["This happened again and again, and soon the shoemaker wasn't poor any more.", "Так повторялось снова и снова, и вскоре сапожник перестал быть бедным."]],
  [["One night, he and his wife decided to hide and watch.", "Однажды ночью он и его жена решили спрятаться и посмотреть."], ["At midnight two little elves came in. They had no clothes, and they were shivering.", "В полночь вошли два маленьких эльфа. На них не было одежды, и они дрожали."], ["They sat down and worked quickly until the shoes were ready.", "Они сели и быстро работали, пока туфли не были готовы."]],
  [["«They have helped us so much,» said his wife. «Let's make them some clothes.»", "«Они так нам помогли, — сказала жена. — Давай сошьём им одежду»."], ["She made two little shirts and two pairs of trousers, and he made two tiny pairs of shoes.", "Она сшила две маленькие рубашки и две пары брюк, а он — две крошечные пары обуви."]],
  [["When the elves found the presents, they were so happy that they danced around the room.", "Когда эльфы нашли подарки, они так обрадовались, что пустились в пляс по комнате."], ["They never came back, but the shoemaker and his wife were happy for the rest of their lives.", "Они больше не вернулись, но сапожник с женой были счастливы до конца своих дней."]]
], gl: { once: 'однажды; once upon a time — жили-были', shoemaker: 'сапожник', leather: 'кожа (материал)', believe: 'верить', midnight: 'полночь', elves: 'эльфы', shivering: 'дрожащий от холода', tiny: 'крошечный', rest: 'остаток; for the rest of their lives — до конца жизни', lives: 'жизни', danced: 'танцевали', "wasn't": 'не был (= was not)', more: 'больше; not any more — больше не', upon: 'на; once upon a time — жили-были', decided: 'решили', happened: 'случилось', "i'll": 'я (сделаю) (= I will)', next: 'следующий' }, q: [
  { q: 'Почему сапожник был бедным в начале сказки?', o: ['Он был ленивым', 'У него было мало кожи и денег', 'Его обманули'], a: 1 },
  { q: 'Кто шил туфли по ночам?', o: ['Жена сапожника', 'Два эльфа', 'Сосед'], a: 1 },
  { q: 'Чем отблагодарили эльфов?', o: ['Деньгами', 'Едой', 'Одеждой и обувью'], a: 2 }
]},

{ id: 'en-t-interview', level: 'A2', title: 'The Job Interview', src: 'История', p: [
  [["Max had his first job interview on Monday.", "В понедельник у Макса было первое собеседование."], ["He was very nervous, so he prepared everything on Sunday.", "Он очень нервничал, поэтому подготовил всё в воскресенье."]],
  [["He read about the company on its website and practised answers to common questions.", "Он почитал о компании на её сайте и отрепетировал ответы на обычные вопросы."], ["He also ironed his best shirt and checked the journey: forty minutes by train.", "Ещё он погладил свою лучшую рубашку и проверил дорогу: сорок минут на поезде."]],
  [["On Monday morning the train was delayed.", "В понедельник утром поезд задержали."], ["Max was worried, but he arrived at the office five minutes early.", "Макс волновался, но приехал в офис на пять минут раньше."]],
  [["The manager was friendly.", "Руководитель был приветливым."], ["She asked him about his experience, his skills and his plans for the future.", "Она спросила его об опыте, навыках и планах на будущее."], ["Max answered honestly. «I don't have much experience yet, but I learn quickly and I enjoy working in a team.»", "Макс отвечал честно: «У меня пока мало опыта, но я быстро учусь и люблю работать в команде»."]],
  [["At the end she asked: «Do you have any questions for us?»", "В конце она спросила: «У вас есть к нам вопросы?»"], ["Max asked about training and about the team.", "Макс спросил про обучение и про команду."], ["The manager smiled. «Good questions.»", "Руководитель улыбнулась: «Хорошие вопросы»."]],
  [["Two days later, Max received an email.", "Через два дня Макс получил письмо."], ["He opened it slowly… and then he shouted: «I've got the job!»", "Он медленно открыл его… а потом закричал: «Меня взяли!»"]]
], gl: { max: 'Макс', practised: 'репетировал', common: 'обычный, частый', ironed: 'погладил', delayed: 'задержан', early: 'рано', future: 'будущее', honestly: 'честно', "i've": 'я (= I have)', "i've got the job": 'меня взяли на работу', end: 'конец', everything: 'всё', its: 'его, её (о предмете)', prepared: 'подготовил' }, q: [
  { q: 'Что Макс сделал в воскресенье?', o: ['Отдыхал', 'Подготовился к собеседованию', 'Поехал в офис'], a: 1 },
  { q: 'Что случилось утром в понедельник?', o: ['Он проспал', 'Поезд задержали', 'Пошёл дождь'], a: 1 },
  { q: 'Чем закончилась история?', o: ['Макса взяли на работу', 'Макс отказался', 'Письмо не пришло'], a: 0 }
]},

{ id: 'en-t-wolf', level: 'A2', title: 'The Boy Who Cried Wolf', src: 'По мотивам басни Эзопа', p: [
  [["A young shepherd boy looked after the sheep near his village.", "Юный пастушок пас овец недалеко от своей деревни."], ["It was a boring job, and he wanted some excitement.", "Работа была скучной, и ему хотелось чего-нибудь интересного."]],
  [["One day he ran to the village and shouted: «Wolf! Wolf! A wolf is attacking the sheep!»", "Однажды он прибежал в деревню и закричал: «Волк! Волк! Волк нападает на овец!»"], ["The villagers stopped working and ran to help him.", "Жители бросили работу и побежали ему на помощь."], ["But there was no wolf. The boy laughed at them.", "Но волка не было. Мальчик над ними посмеялся."]],
  [["A week later he did the same thing.", "Через неделю он сделал то же самое."], ["Again the villagers came, and again there was no wolf.", "Жители снова прибежали, и снова волка не было."], ["They were angry. «Don't tell lies,» they said.", "Они рассердились: «Не лги»."]],
  [["Then, one evening, a real wolf came out of the forest.", "А потом однажды вечером из леса вышел настоящий волк."], ["The boy was terrified. «Wolf! Wolf! Please help me!» he shouted.", "Мальчик ужасно испугался. «Волк! Волк! Помогите!» — кричал он."]],
  [["The villagers heard him, but this time nobody came.", "Жители его услышали, но на этот раз никто не пришёл."], ["«He's lying again,» they thought.", "«Он опять врёт», — подумали они."], ["The wolf ate many sheep, and the boy learned a hard lesson.", "Волк съел много овец, а мальчик получил суровый урок."]],
  [["Nobody believes a liar, even when he tells the truth.", "Лжецу не верят, даже когда он говорит правду."]]
], gl: { shepherd: 'пастух', excitement: 'волнение, что-то интересное', attacking: 'нападает', villagers: 'жители деревни', lies: 'ложь; tell lies — лгать', terrified: 'в ужасе', nobody: 'никто', lying: 'лжёт', liar: 'лжец', truth: 'правда', believes: 'верит', thought: 'подумали', ate: 'съел', "he's": 'он (= he is)', same: 'тот же' }, q: [
  { q: 'Зачем мальчик кричал «Волк!» в первый раз?', o: ['Он увидел волка', 'Ему было скучно', 'Он заблудился'], a: 1 },
  { q: 'Почему в конце никто не пришёл на помощь?', o: ['Никто не услышал', 'Жители решили, что он опять врёт', 'Было слишком поздно'], a: 1 },
  { q: 'Главная мысль басни:', o: ['Лжецу не верят, даже когда он говорит правду', 'Волки опасны', 'Работа пастуха скучная'], a: 0 }
]},

{ id: 'en-t-chat', level: 'A2', title: 'Group Chat: Friday Plans', src: 'Переписка · живой английский', p: [
  [["Jess: hey guys, what's up? Anyone free on Friday?", "Джесс: привет всем, как дела? Кто-нибудь свободен в пятницу?"]],
  [["Leo: I'm down! What's the plan?", "Лео: Я за! Какой план?"]],
  [["Jess: There's a new burger place near the station. The reviews are awesome, no cap.", "Джесс: У вокзала открылась новая бургерная. Отзывы огонь, честно."]],
  [["Mia: lowkey I wanted to stay home and binge-watch my show… but burgers 😍", "Мия: вообще-то я хотела остаться дома и посмотреть сериал запоем… но бургеры 😍"]],
  [["Leo: lol. Come on Mia, you can watch it on Saturday.", "Лео: ха-ха. Да ладно, Мия, посмотришь в субботу."]],
  [["Mia: ok ok, I'm in. What time?", "Мия: ладно-ладно, я с вами. Во сколько?"]],
  [["Jess: 7? BTW, Sam said he's coming too.", "Джесс: в 7? Кстати, Сэм сказал, что тоже придёт."]],
  [["Leo: Sam?? He ghosted us last time 💀", "Лео: Сэм?? Он в прошлый раз пропал 💀"]],
  [["Jess: my bad, I forgot to tell you: his phone was broken. He's legit this time.", "Джесс: мой косяк, забыла сказать: у него сломался телефон. В этот раз всё по-честному."]],
  [["Mia: fine. But if the burgers are mid, I'm blaming you, Jess 😂", "Мия: ладно. Но если бургеры окажутся так себе, виновата будешь ты, Джесс 😂"]],
  [["Jess: deal. See you Friday!", "Джесс: договорились. До пятницы!"]]
], gl: { guys: 'ребята', anyone: 'кто-нибудь', jess: 'Джесс', leo: 'Лео', mia: 'Мия', sam: 'Сэм', burger: 'бургер', burgers: 'бургеры', place: 'место, заведение', reviews: 'отзывы', show: 'шоу, сериал', "i'm": 'я (= I am)', 'in': 'в; I\'m in — я с вами', blaming: 'винить', deal: 'сделка; deal! — договорились!', "there's": 'есть, имеется (= there is)', "he's": 'он (= he is)', ok: 'окей, ладно', lol: 'ха-ха, ору', come: 'приходить; come on — да ладно', broken: 'сломанный', forgot: 'забыла' }, q: [
  { q: 'Куда друзья идут в пятницу?', o: ['В кино', 'В новую бургерную', 'На концерт'], a: 1 },
  { q: 'Что значит «I\'m down» в ответе Лео?', o: ['Мне грустно', 'Я за', 'Я внизу'], a: 1 },
  { q: 'Почему в прошлый раз Сэм «пропал»?', o: ['Он обиделся', 'У него сломался телефон', 'Он заболел'], a: 1 },
  { q: 'Что Мия сделает, если бургеры будут «mid»?', o: ['Обвинит Джесс', 'Уйдёт домой', 'Закажет пиццу'], a: 0 }
]}
];
