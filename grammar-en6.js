// Грамматика английского, уровень C1
GRAMMAR.en.push(
{ id: 'en-inversion', level: 'C1', title: 'Инверсия для выразительности', sub: 'Never have I seen… · Not only… but also',
  blocks: [
    { t: 'p', h: 'Если предложение начинается с <b>отрицательного или ограничительного</b> слова, порядок становится вопросительным: <b>вспомогательный глагол + подлежащее</b>. Так звучит официально, литературно или эмоционально.' },
    { t: 'table', head: ['Начало', 'Пример', 'Обычный порядок'], rows: [
      ['Never / Rarely / Seldom', '<b>Never have I</b> seen such a mess.', 'I have never seen…'],
      ['Not only … but also', '<b>Not only did she</b> win, but she also broke the record.', 'She not only won…'],
      ['Hardly / Scarcely … when', '<b>Hardly had we</b> arrived <b>when</b> it started to rain.', 'We had hardly arrived…'],
      ['No sooner … than', '<b>No sooner had</b> I sat down <b>than</b> the phone rang.', 'As soon as I sat down…'],
      ['Under no circumstances', '<b>Under no circumstances should you</b> open this door.', 'You should never open…'],
      ['Only then / Only when / Not until', '<b>Only then did I</b> realise the truth.', 'I realised only then…'],
      ['Little', '<b>Little did he know</b> what was coming.', 'He didn’t know…']] },
    { t: 'ex', rows: [
      ['Never have I been so embarrassed.', 'Никогда ещё мне не было так стыдно.'], ['Not only is it cheap, but it is also good.', 'Это не только дёшево, но и хорошо.'],
      ['Rarely do we see such talent.', 'Редко встретишь такой талант.'], ['Under no circumstances should you share your password.', 'Ни при каких обстоятельствах не сообщайте пароль.'],
      ['Little did they know that he was a spy.', 'Они и не подозревали, что он шпион.']] },
    { t: 'warn', h: 'Если вспомогательного глагола нет, добавляем <b>do / does / did</b>: <i>Rarely <b>does</b> he call.</i>' },
    { t: 'tip', h: 'После <b>Hardly / Scarcely</b> — when, после <b>No sooner</b> — than. Обе конструкции обычно с Past Perfect.' }
  ],
  quiz: [
    { q: 'Never ___ such a beautiful sunset.', o: ['I have seen', 'have I seen', 'I saw'], a: 1, w: 'После Never — инверсия: have I seen.' },
    { q: 'Not only ___ late, but he also forgot the tickets.', o: ['he was', 'was he', 'did he'], a: 1, w: 'Not only + was he.' },
    { q: 'Hardly had we started ___ the lights went out.', o: ['than', 'when', 'then'], a: 1, w: 'Hardly … when.' },
    { q: 'No sooner had she left ___ he arrived.', o: ['when', 'than', 'that'], a: 1, w: 'No sooner … than.' },
    { q: 'Rarely ___ to the cinema these days.', o: ['we go', 'do we go', 'go we'], a: 1, w: 'Нет вспомогательного — добавляем do.' },
    { q: 'Under no circumstances ___ the building.', o: ['you should leave', 'should you leave', 'you leave'], a: 1, w: 'Under no circumstances + should you.' },
    { q: 'Little ___ that she was watching him.', o: ['he knew', 'did he know', 'knew he'], a: 1, w: 'Little did he know.' },
    { q: 'Допишите: Only then ___ (I / realise) my mistake.', t: ['did i realise', 'did i realize'], w: 'Only then did I realise my mistake.' }
  ]
},
{ id: 'en-cleft', level: 'C1', title: 'Усилительные конструкции', sub: 'What I need is… · It was Tom who…',
  blocks: [
    { t: 'p', h: 'Чтобы выделить главное, английский «раскалывает» предложение на две части. По-русски мы сделали бы это интонацией или словами «именно», «вот что».' },
    { t: 'table', head: ['Конструкция', 'Пример', 'Что выделяем'], rows: [
      ['It is / was … that / who', '<b>It was Tom who</b> broke the window.', 'именно Том'],
      ['What … is / was', '<b>What I need is</b> a holiday.', 'вот что мне нужно'],
      ['All … is / was', '<b>All I want is</b> some sleep.', 'всё, чего я хочу'],
      ['The thing / reason / place …', '<b>The reason I called is</b> to apologise.', 'причина'],
      ['What … do is', '<b>What she did was</b> call the police.', 'действие']] },
    { t: 'ex', rows: [
      ["It was in Paris that they first met.", 'Именно в Париже они познакомились.'], ['What I love about her is her honesty.', 'Что я в ней люблю — это её честность.'],
      ["All you need to do is press this button.", 'Всё, что нужно, — нажать эту кнопку.'], ["What happened was that the train broke down.", 'А случилось вот что: поезд сломался.'],
      ["It's not the money that worries me.", 'Меня беспокоят не деньги.']] },
    { t: 'tip', h: 'После <b>What … do is</b> глагол стоит без to или с to — оба варианта правильны: <i>What I did was (to) call him.</i>' },
    { t: 'warn', h: 'Глагол be согласуется со второй частью по смыслу и времени: <i>What I need <b>is</b> a rest</i>, <i>What I needed <b>was</b> a rest</i>.' }
  ],
  quiz: [
    { q: '___ I need is a long holiday.', o: ['That', 'What', 'Which'], a: 1, w: 'What I need is…' },
    { q: 'It was my sister ___ told me the news.', o: ['which', 'who', 'what'], a: 1, w: 'It was + человек + who.' },
    { q: '___ you have to do is sign here.', o: ['All', 'Every', 'Each'], a: 0, w: 'All you have to do is…' },
    { q: 'It was in 2010 ___ we moved to London.', o: ['that', 'when', 'which'], a: 0, w: 'It was … that.' },
    { q: 'What she did ___ call her lawyer.', o: ['is', 'was', 'did'], a: 1, w: 'Прошлое — was.' },
    { q: 'Выделите «именно деньги»: It’s ___ worries me.', o: ['the money what', 'the money that', 'money which it'], a: 1, w: 'It’s the money that…' },
    { q: 'Перепишите с усилением: I want some peace. → What I want ___ some peace.', t: ['is'], w: 'What I want is some peace.' },
    { q: 'Перепишите: Tom found the keys. → It was Tom ___ found the keys.', t: ['who', 'that'], w: 'It was Tom who / that found the keys.' }
  ]
},
{ id: 'en-impersonal', level: 'C1', title: 'Безличный пассив', sub: 'It is said that… · He is believed to have…',
  blocks: [
    { t: 'p', h: 'В новостях и официальной речи чужое мнение передают безлично: «говорят», «считается», «по слухам». Есть два способа.' },
    { t: 'table', head: ['Схема', 'Пример'], rows: [
      ['It is + V3 + that …', '<b>It is said that</b> he is very rich.'],
      ['Кто + is + V3 + to + глагол', 'He <b>is said to be</b> very rich.'],
      ['… to have + V3 (о прошлом)', 'He <b>is believed to have left</b> the country.'],
      ['… to be + -ing (сейчас)', 'She <b>is thought to be living</b> in Spain.']] },
    { t: 'p', h: 'Глаголы: <b>say, believe, think, report, expect, know, consider, claim, allege, estimate</b>.' },
    { t: 'ex', rows: [
      ['It is believed that the painting is a fake.', 'Считается, что картина — подделка.'], ['The president is expected to resign.', 'Ожидается, что президент уйдёт в отставку.'],
      ['The thieves are thought to have escaped by car.', 'Предполагается, что воры скрылись на машине.'], ['It has been reported that ten people were injured.', 'Сообщается, что пострадали десять человек.'],
      ['She is said to be working on a new album.', 'Говорят, она работает над новым альбомом.']] },
    { t: 'tip', h: 'Конструкция с to удобна, когда главное — человек: <i>He is known to be…</i> Конструкция с It — когда главное — сам факт.' },
    { t: 'warn', h: 'Если событие было раньше, чем о нём говорят, — <b>to have + V3</b>: <i>He is said to <b>have stolen</b> it</i> (говорят сейчас, украл раньше).' }
  ],
  quiz: [
    { q: 'It ___ that the company will close.', o: ['says', 'is said', 'has said'], a: 1, w: 'Безлично — It is said that…' },
    { q: 'He is believed ___ abroad last week.', o: ['to go', 'to have gone', 'going'], a: 1, w: 'Прошлое — to have gone.' },
    { q: 'She is thought ___ in Paris at the moment.', o: ['to live', 'to be living', 'to have lived'], a: 1, w: 'Сейчас, процесс — to be living.' },
    { q: 'The minister ___ to announce his resignation today.', o: ['is expected', 'expects', 'is expecting'], a: 0, w: 'Ожидается — is expected to.' },
    { q: 'It ___ reported that the fire was caused by a cigarette.', o: ['has been', 'has', 'is being'], a: 0, w: 'It has been reported that…' },
    { q: 'The painting ___ worth millions.', o: ['is said to be', 'is said being', 'says to be'], a: 0, w: 'is said to be.' },
    { q: 'Перепишите: People say he is a genius. → He ___ a genius.', t: ['is said to be'], w: 'He is said to be a genius.' },
    { q: 'Перепишите: They believe she stole it. → She is believed ___ it.', t: ['to have stolen'], w: 'She is believed to have stolen it.' }
  ]
},
{ id: 'en-unreal', level: 'C1', title: 'Нереальное прошлое и сослагательное', sub: "It's time we left · I'd rather you didn't · suggest that he be",
  blocks: [
    { t: 'p', h: 'После некоторых выражений Past Simple означает <b>не прошлое, а нереальность</b> или пожелание в настоящем.' },
    { t: 'table', head: ['Выражение', 'Пример', 'Смысл'], rows: [
      ["It's (high) time + Past", "It's time we <b>left</b>.", 'пора бы уже'],
      ["I'd rather + кто + Past", "I'd rather you <b>didn't</b> smoke here.", 'я бы предпочёл, чтобы'],
      ['as if / as though + Past', 'He acts as if he <b>owned</b> the place.', 'будто бы'],
      ['suppose / imagine + Past', 'Suppose you <b>won</b> the lottery…', 'представь, что']] },
    { t: 'h', h: 'Сослагательное наклонение' },
    { t: 'p', h: 'После <b>suggest, recommend, insist, demand, it is essential / vital that</b> в официальной речи ставят <b>глагол без окончаний</b> для всех лиц: <i>I suggest that he <b>be</b> told. It is vital that she <b>attend</b>.</i> В британской речи можно <i>should + глагол</i>.' },
    { t: 'ex', rows: [
      ["It's high time you got a job.", 'Тебе давно пора найти работу.'], ["I'd rather you didn't tell anyone.", 'Я бы предпочёл, чтобы ты никому не говорил.'],
      ['She talks as if she knew everything.', 'Она говорит так, будто всё знает.'], ['The doctor recommended that he stop smoking.', 'Врач рекомендовал ему бросить курить.'],
      ['It is essential that every child be safe.', 'Необходимо, чтобы каждый ребёнок был в безопасности.']] },
    { t: 'warn', h: "<b>I'd rather + глагол</b> (о себе) — без to и без сдвига: <i>I'd rather <b>stay</b> home.</i> Сдвиг в прошлое только когда речь о другом человеке: <i>I'd rather you <b>stayed</b>.</i>" },
    { t: 'tip', h: 'В сослагательном нет -s и нет was: <i>suggest that he <b>go</b></i>, <i>demand that it <b>be</b> done</i>.' }
  ],
  quiz: [
    { q: "It's time we ___ home.", o: ['go', 'went', 'will go'], a: 1, w: "It's time + Past Simple." },
    { q: "I'd rather you ___ that to anyone.", o: ["don't say", "didn't say", "not say"], a: 1, w: "I'd rather + кто + Past." },
    { q: "I'd rather ___ at home tonight.", o: ['stay', 'stayed', 'to stay'], a: 0, w: 'О себе — без сдвига: I’d rather stay.' },
    { q: 'He talks as if he ___ the boss.', o: ['is being', 'were', 'will be'], a: 1, w: 'as if + Past (were).' },
    { q: 'The doctor suggested that she ___ more rest.', o: ['gets', 'get', 'got'], a: 1, w: 'Сослагательное — get без -s.' },
    { q: 'It is essential that the report ___ finished today.', o: ['is', 'be', 'was'], a: 1, w: 'Сослагательное — be.' },
    { q: "Допишите: It's high time you ___ (start) studying.", t: ['started'], w: "It's high time you started studying." },
    { q: 'Допишите: They insisted that he ___ (leave) immediately.', t: ['leave', 'should leave'], w: 'They insisted that he leave (should leave).' }
  ]
},
{ id: 'en-cond-adv', level: 'C1', title: 'Условия без if', sub: 'Were I you… · Should you need… · But for…',
  blocks: [
    { t: 'p', h: 'В официальной и книжной речи <b>if</b> часто убирают и ставят вспомогательный глагол в начало (инверсия). Есть и другие слова-заменители.' },
    { t: 'table', head: ['Вместо', 'Схема', 'Пример'], rows: [
      ['If I were', '<b>Were</b> + кто + …', '<b>Were I</b> you, I would accept.'],
      ['If you should', '<b>Should</b> + кто + глагол', '<b>Should you need</b> help, call me.'],
      ['If I had known', '<b>Had</b> + кто + V3', '<b>Had I known</b>, I would have come.'],
      ['If it weren’t for / If it hadn’t been for', '<b>But for</b> + существительное', '<b>But for</b> your help, we would have failed.'],
      ['если не', '<b>unless</b>', "I won't go <b>unless</b> you come."],
      ['при условии, что', '<b>provided / providing / as long as</b>', 'You can borrow it <b>provided</b> you return it.'],
      ['иначе', '<b>otherwise</b>', 'Hurry, <b>otherwise</b> we’ll miss it.']] },
    { t: 'ex', rows: [
      ['Were it not for the rain, we would go out.', 'Если бы не дождь, мы бы пошли гулять.'], ['Should you have any questions, please ask.', 'Если у вас будут вопросы, спрашивайте.'],
      ['Had we left earlier, we would have caught the train.', 'Выйди мы раньше, успели бы на поезд.'], ['But for the seat belt, he would have died.', 'Если бы не ремень, он бы погиб.'],
      ["Supposing it rains, what shall we do?", 'А если пойдёт дождь, что будем делать?']] },
    { t: 'warn', h: 'Отрицание в инверсии без сокращения: <i><b>Had I not</b> seen it…</i>, а не «Hadn’t I seen it».' },
    { t: 'tip', h: '<b>Unless</b> уже содержит отрицание: <i>unless you hurry</i> = <i>if you don’t hurry</i>. Не говорите «unless you don’t».' }
  ],
  quiz: [
    { q: '___ I you, I would apologise.', o: ['If', 'Were', 'Had'], a: 1, w: 'Were I you = If I were you.' },
    { q: '___ you need anything, just call.', o: ['Should', 'Would', 'Had'], a: 0, w: 'Should you need = If you need.' },
    { q: '___ I known, I would have helped.', o: ['Were', 'Had', 'Should'], a: 1, w: 'Had I known = If I had known.' },
    { q: '___ your advice, I would have made a mistake.', o: ['Unless', 'But for', 'Provided'], a: 1, w: 'But for + существительное.' },
    { q: "We'll miss the bus ___ we hurry.", o: ['unless', 'provided', 'if'], a: 0, w: 'unless = if not.' },
    { q: 'You can use my car ___ you drive carefully.', o: ['unless', 'provided', 'otherwise'], a: 1, w: 'При условии — provided.' },
    { q: '___ not seen it myself, I would never have believed it.', o: ['Had I', "Hadn't I", 'If I'], a: 0, w: 'Had I not seen…' },
    { q: 'Перепишите: If you should see him, tell him. → ___ you see him, tell him.', t: ['should'], w: 'Should you see him…' }
  ]
},
{ id: 'en-ellipsis', level: 'C1', title: 'Замены и пропуски', sub: 'I hope so · I think not · Yes, I did · so do I',
  blocks: [
    { t: 'p', h: 'Чтобы не повторяться, англичане заменяют часть фразы коротким словом или пропускают её. Это делает речь естественной.' },
    { t: 'table', head: ['Приём', 'Пример', 'Вместо'], rows: [
      ['so / not после think, hope, suppose, expect, afraid', '«Will it rain?» — «I <b>hope not</b>.»', 'I hope it won’t rain.'],
      ['вспомогательный глагол', '«Did you call?» — «Yes, I <b>did</b>.»', 'Yes, I called.'],
      ['so / neither + вспомогательный + кто', '«I love jazz.» — «<b>So do I</b>.»', 'I love jazz too.'],
      ['one / ones', 'I want the red <b>one</b>.', 'the red dress'],
      ['do so', 'He promised to call and he <b>did so</b>.', 'he called'],
      ['to (без глагола)', "I'd love <b>to</b>.", "I'd love to come."]] },
    { t: 'ex', rows: [
      ["Is he coming? — I don't think so.", 'Он придёт? — Не думаю.'], ["I'm afraid not.", 'Боюсь, что нет.'],
      ["I can't swim. — Neither can I.", 'Я не умею плавать. — Я тоже.'], ['Which cake do you want? — The chocolate one.', 'Какой торт ты хочешь? — Шоколадный.'],
      ["You don't have to come, but I'd like you to.", 'Ты не обязан приходить, но я бы хотел.']] },
    { t: 'warn', h: 'Говорят <i>I <b>don’t think so</b></i>, а не «I think not so». Форма <i>I think not</i> существует, но звучит книжно.' },
    { t: 'tip', h: 'В ответах «я тоже» глагол повторяет время фразы: <i>I went there. — So <b>did</b> I. I’ve been there. — So <b>have</b> I.</i>' }
  ],
  quiz: [
    { q: 'Will it be sunny tomorrow? — I hope ___ .', o: ['it', 'so', 'yes'], a: 1, w: 'I hope so.' },
    { q: 'Is she angry? — I don’t think ___ .', o: ['it', 'that', 'so'], a: 2, w: "I don't think so." },
    { q: 'I love sushi. — ___ do I.', o: ['So', 'Neither', 'Too'], a: 0, w: 'Утверждение — So do I.' },
    { q: "I haven't seen it. — ___ have I.", o: ['So', 'Neither', 'Either'], a: 1, w: 'Отрицание — Neither have I.' },
    { q: 'Did you lock the door? — Yes, I ___ .', o: ['locked', 'did', 'do'], a: 1, w: 'Повторяем вспомогательный — did.' },
    { q: 'These shoes are too small. Do you have bigger ___ ?', o: ['one', 'ones', 'them'], a: 1, w: 'Множественное — ones.' },
    { q: 'Would you like to come? — I’d love ___ .', o: ['to', 'it', 'so'], a: 0, w: "I'd love to." },
    { q: 'Ответьте «Боюсь, что нет»: I’m afraid ___ .', t: ['not'], w: "I'm afraid not." }
  ]
}
);
