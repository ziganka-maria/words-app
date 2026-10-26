// Грамматика английского, уровень B2
GRAMMAR.en.push(
{ id: 'en-cond3', level: 'B2', title: 'Третий тип условий и смешанные', sub: 'If I had known, I would have come',
  blocks: [
    { t: 'p', h: 'Третий тип — о <b>прошлом, которое уже не изменить</b>: «если бы тогда…, то бы…». Обычно это сожаление или упрёк.' },
    { t: 'table', head: ['Условие (if)', 'Результат'], rows: [
      ['If + Past Perfect (had + V3)', 'would have + V3'],
      ['If I <b>had known</b> about the party,', 'I <b>would have come</b>.'],
      ["If we <b>hadn't missed</b> the train,", 'we <b>wouldn’t have been</b> late.']] },
    { t: 'h', h: 'Смешанные условия' },
    { t: 'p', h: 'Условие в прошлом, а результат <b>сейчас</b>: <i>If I <b>had studied</b> medicine, I <b>would be</b> a doctor now.</i> Или наоборот — постоянное условие и результат в прошлом: <i>If I <b>were</b> braver, I <b>would have asked</b> her out.</i>' },
    { t: 'ex', rows: [
      ['If I had known, I would have told you.', 'Если бы я знал, я бы тебе сказал.'], ["If she hadn't helped me, I would have failed.", 'Если бы она мне не помогла, я бы провалился.'],
      ['We could have won if we had played better.', 'Мы могли бы выиграть, если бы играли лучше.'], ['If I had taken that job, I would be rich now.', 'Если бы я тогда согласился на ту работу, сейчас был бы богат.'],
      ["If he weren't so lazy, he would have finished by now.", 'Не будь он таким ленивым, уже бы закончил.']] },
    { t: 'tip', h: 'В речи <b>would have</b> звучит как «вудэв» и пишется <b>would’ve</b>. Частая ошибка носителей — писать «would of»: так неправильно.' },
    { t: 'warn', h: 'В части с if не ставится would: <i>If I <b>had known</b></i>, а не «If I would have known».' }
  ],
  quiz: [
    { q: 'If I ___ about the problem, I would have helped.', o: ['knew', 'had known', 'would know'], a: 1, w: 'Прошлое — If + had + V3.' },
    { q: 'If you had asked me, I ___ you.', o: ['would help', 'would have helped', 'had helped'], a: 1, w: 'Результат в прошлом — would have + V3.' },
    { q: "If we hadn't got lost, we ___ on time.", o: ["would have arrived", 'would arrive', 'arrived'], a: 0, w: 'Третий тип — would have arrived.' },
    { q: 'If I had studied harder at school, I ___ a better job now.', o: ['would have', 'would have had', 'had'], a: 0, w: 'Смешанное: прошлое условие → результат сейчас (now): would have.' },
    { q: "If you ___ me the truth yesterday, I wouldn't be angry now.", o: ['told', 'had told', 'would tell'], a: 1, w: 'Смешанное: прошлое (yesterday) → результат сейчас (now): had told … wouldn’t be.' },
    { q: 'Какая фраза о прошлом, которое не изменить?', o: ['If it rains, we stay home.', 'If I had seen him, I would have said hello.', 'If I had money, I would buy it.'], a: 1, w: 'Had + V3 / would have + V3 — третий тип.' },
    { q: 'Допишите: If I had known, I ___ (come).', t: ['would have come', "would've come"], w: 'I would have come.' },
    { q: 'Допишите: If you ___ (not / call), I would have forgotten.', t: ["hadn't called", 'had not called'], w: "If you hadn't called…" }
  ]
},
{ id: 'en-wish', level: 'B2', title: 'Wish и if only: сожаления', sub: 'I wish I had more time · I wish I hadn’t said that',
  blocks: [
    { t: 'p', h: '<b>wish</b> и <b>if only</b> выражают сожаление о том, что есть или было. Время после них — «на шаг назад», как в условиях.' },
    { t: 'table', head: ['О чём', 'Схема', 'Пример'], rows: [
      ['о настоящем', 'wish + Past Simple', 'I wish I <b>had</b> more time. (а времени нет)'],
      ['о прошлом', 'wish + Past Perfect', "I wish I <b>hadn't said</b> that. (а я сказал)"],
      ['раздражение, просьба', 'wish + would', 'I wish you <b>would stop</b> talking!'],
      ['умение', 'wish + could', 'I wish I <b>could</b> swim.']] },
    { t: 'p', h: '<b>If only</b> — то же самое, но сильнее, эмоциональнее: <i>If only I <b>had listened</b> to you!</i> — Ах, если бы я тебя послушал!' },
    { t: 'ex', rows: [
      ['I wish I lived by the sea.', 'Жаль, что я не живу у моря.'], ["I wish I hadn't eaten so much.", 'Зря я столько съел.'],
      ['I wish it would stop raining.', 'Хоть бы дождь перестал.'], ['If only I knew the answer!', 'Если бы я только знал ответ!'],
      ['She wishes she could speak French.', 'Ей бы хотелось говорить по-французски.']] },
    { t: 'warn', h: 'О себе <b>wish + would</b> не говорят: «I wish I would…» — ошибка. Надо <i>I wish I could…</i> или <i>I wish I were…</i>' },
    { t: 'tip', h: 'С be часто ставят <b>were</b> для всех лиц: <i>I wish I <b>were</b> taller.</i> В разговорной речи можно и was.' }
  ],
  quiz: [
    { q: 'I wish I ___ a car. (сейчас нет)', o: ['have', 'had', 'would have'], a: 1, w: 'О настоящем — wish + Past Simple.' },
    { q: "I wish I ___ that email. (а я отправил)", o: ["didn't send", "hadn't sent", "wouldn't send"], a: 1, w: 'О прошлом — wish + Past Perfect.' },
    { q: 'I wish you ___ leaving your socks on the floor!', o: ['stop', 'would stop', 'had stopped'], a: 1, w: 'Раздражение — wish + would.' },
    { q: 'I wish I ___ play the guitar.', o: ['could', 'would', 'can'], a: 0, w: 'Умение — wish + could.' },
    { q: 'If only I ___ to you yesterday!', o: ['listened', 'had listened', 'would listen'], a: 1, w: 'Прошлое — had listened.' },
    { q: 'She wishes she ___ taller.', o: ['is', 'were', 'will be'], a: 1, w: 'wish + were.' },
    { q: 'Допишите: I wish I ___ (know) the answer.', t: ['knew'], w: 'I wish I knew the answer.' },
    { q: 'Допишите: I wish I ___ (not / eat) so much last night.', t: ["hadn't eaten", 'had not eaten'], w: "I wish I hadn't eaten so much." }
  ]
},
{ id: 'en-causative', level: 'B2', title: 'Have something done', sub: 'I had my hair cut · We’re getting the car repaired',
  blocks: [
    { t: 'p', h: 'Когда работу делает <b>кто-то другой</b> по нашей просьбе или за деньги, говорят <b>have + предмет + V3</b>. По-русски — «мне подстригли», «я отдал в ремонт».' },
    { t: 'table', head: ['Сравните', 'Смысл'], rows: [
      ['I <b>cut my hair</b>.', 'Я сам подстригся.'],
      ['I <b>had my hair cut</b>.', 'Меня подстригли (в парикмахерской).']] },
    { t: 'p', h: 'В разговорной речи вместо have часто говорят <b>get</b>: <i>I need to <b>get</b> my phone <b>fixed</b>.</i> Конструкцию можно ставить в любое время: <i>We<b>’re having</b> the kitchen <b>painted</b>. I<b>’ll have</b> it <b>delivered</b>.</i>' },
    { t: 'p', h: 'Ещё одно значение — что-то неприятное <b>случилось с нами</b>: <i>She <b>had her bag stolen</b>.</i> — У неё украли сумку.' },
    { t: 'ex', rows: [
      ['I had my hair cut yesterday.', 'Вчера я подстриглась.'], ['We need to get the car repaired.', 'Надо отдать машину в ремонт.'],
      ["We're having a new kitchen fitted.", 'Нам ставят новую кухню.'], ['He had his phone stolen on the metro.', 'У него в метро украли телефон.'],
      ['Where do you get your nails done?', 'Где ты делаешь маникюр?']] },
    { t: 'warn', h: 'Порядок важен: <b>have + что + V3</b>. «I had cut my hair» — это уже Past Perfect: «я (сам) подстригся раньше».' },
    { t: 'tip', h: 'Чтобы сказать, кто сделал, добавьте <b>by</b>: <i>I had my portrait painted by a famous artist.</i>' }
  ],
  quiz: [
    { q: 'Мне подстригли волосы в салоне: I ___ .', o: ['cut my hair', 'had my hair cut', 'had cut my hair'], a: 1, w: 'Делал кто-то другой — had my hair cut.' },
    { q: 'We need to get the roof ___ .', o: ['repair', 'repaired', 'repairing'], a: 1, w: 'get + что + V3.' },
    { q: 'She had her wallet ___ on the bus.', o: ['stolen', 'stole', 'steal'], a: 0, w: 'Неприятность — had her wallet stolen.' },
    { q: "We're ___ the house painted next week.", o: ['having', 'doing', 'making'], a: 0, w: 'having the house painted.' },
    { q: 'Where do you get your nails ___?', o: ['do', 'did', 'done'], a: 2, w: 'get your nails done.' },
    { q: 'I ___ my car serviced every year.', o: ['have', 'make', 'do'], a: 0, w: 'have + что + V3.' },
    { q: 'Скажите «Мне доставят диван»: I’ll have the sofa ___ .', t: ['delivered'], w: 'I’ll have the sofa delivered.' },
    { q: 'Скажите «Я отдал телефон в ремонт»: I got my phone ___ .', t: ['repaired', 'fixed'], w: 'I got my phone repaired / fixed.' }
  ]
},
{ id: 'en-futureperf', level: 'B2', title: 'Future Perfect и Future Continuous', sub: "By 2030 I'll have finished · This time tomorrow I'll be flying",
  blocks: [
    { t: 'p', h: '<b>Future Continuous</b> (will be + -ing) — действие <b>будет идти</b> в определённый момент будущего. <b>Future Perfect</b> (will have + V3) — действие <b>уже завершится</b> к моменту в будущем.' },
    { t: 'table', head: ['Время', 'Схема', 'Пример'], rows: [
      ['Future Continuous', 'will be + -ing', "At 9 tomorrow I<b>'ll be sitting</b> an exam."],
      ['Future Perfect', 'will have + V3', "By Friday I<b>'ll have finished</b> the report."],
      ['Future Perfect Continuous', 'will have been + -ing', "In May I<b>'ll have been working</b> here for ten years."]] },
    { t: 'p', h: 'Сигнал Future Perfect — <b>by</b> (к): <i>by tomorrow, by the end of the year, by the time you arrive</i>.' },
    { t: 'ex', rows: [
      ["This time next week I'll be lying on a beach.", 'В это же время через неделю я буду лежать на пляже.'], ["Don't call at eight — we'll be having dinner.", 'Не звони в восемь — мы будем ужинать.'],
      ["By the time you get here, we'll have left.", 'К тому времени, как ты придёшь, мы уже уйдём.'], ["Will you have finished by Monday?", 'Ты закончишь к понедельнику?'],
      ["Next year we'll have been married for twenty years.", 'В следующем году исполнится двадцать лет, как мы женаты.']] },
    { t: 'tip', h: 'Future Continuous — вежливый способ спросить о планах: <i>Will you be using the car tonight?</i> — Ты будешь брать машину вечером?' },
    { t: 'warn', h: 'После <b>by the time, when, before</b> — настоящее время: <i>by the time you <b>get</b> here</i>, не «will get».' }
  ],
  quiz: [
    { q: "By 2030 they ___ the new bridge.", o: ['will build', 'will have built', 'will be building'], a: 1, w: 'К моменту в будущем — Future Perfect.' },
    { q: "At 10 a.m. tomorrow I ___ to Rome.", o: ["'ll fly", "'ll be flying", "'ll have flown"], a: 1, w: 'Процесс в момент будущего — Future Continuous.' },
    { q: "By the time you ___, I'll have cooked dinner.", o: ['arrive', 'will arrive', 'arrived'], a: 0, w: 'После by the time — настоящее.' },
    { q: '___ you be using the printer this afternoon?', o: ['Will', 'Do', 'Have'], a: 0, w: 'Вежливый вопрос — Will you be using…?' },
    { q: 'In June she ___ here for five years.', o: ['will work', "will have been working", 'works'], a: 1, w: 'Длительность к моменту — Future Perfect Continuous.' },
    { q: "Don't call at seven — I ___ the kids to bed.", o: ["'ll be putting", "'ll have put", 'put'], a: 0, w: 'В этот момент буду занята — Future Continuous.' },
    { q: 'Допишите: By Friday I ___ (finish) the project.', t: ["will have finished", "'ll have finished"], w: "By Friday I'll have finished." },
    { q: 'Допишите: This time tomorrow we ___ (lie) on the beach.', t: ['will be lying', "'ll be lying"], w: "We'll be lying on the beach." }
  ]
},
{ id: 'en-pastmodals', level: 'B2', title: 'Модальные о прошлом', sub: 'should have, could have, needn’t have',
  blocks: [
    { t: 'p', h: 'Модальный глагол + <b>have + V3</b> — оценка прошлого: упрёк, сожаление, упущенная возможность, догадка.' },
    { t: 'table', head: ['Форма', 'Смысл', 'Пример'], rows: [
      ['should have + V3', 'надо было (а не сделал)', 'You <b>should have told</b> me.'],
      ["shouldn't have + V3", 'не надо было (а сделал)', "I <b>shouldn't have eaten</b> so much."],
      ['could have + V3', 'мог бы (но не сделал)', 'You <b>could have called</b>!'],
      ['would have + V3', 'сделал бы (при других условиях)', 'I <b>would have helped</b>, but I was busy.'],
      ["needn't have + V3", 'зря сделал (не было нужды)', "You <b>needn't have brought</b> food — we had plenty."],
      ['must / might / can’t have + V3', 'догадка о прошлом', 'She <b>must have forgotten</b>.']] },
    { t: 'ex', rows: [
      ['You should have seen his face!', 'Видел бы ты его лицо!'], ["I shouldn't have said that.", 'Зря я это сказал.'],
      ['We could have taken a taxi.', 'Мы могли бы взять такси.'], ["You needn't have worried.", 'Зря ты волновался.'],
      ["He can't have finished already!", 'Не может быть, что он уже закончил!']] },
    { t: 'warn', h: "<b>needn't have done</b> — сделал, но зря. <b>didn't need to do</b> — не нужно было, и обычно не делал: <i>I didn't need to wait.</i>" },
    { t: 'tip', h: 'В речи слышится «шудэв», «кудэв»: <b>should’ve</b>, <b>could’ve</b>.' }
  ],
  quiz: [
    { q: "I failed. I ___ harder.", o: ['should study', 'should have studied', 'must have studied'], a: 1, w: 'Надо было — should have + V3.' },
    { q: 'You ___ me! I would have picked you up.', o: ['could have called', 'should call', 'must have called'], a: 0, w: 'Мог бы — could have called.' },
    { q: "I ___ so much cake. I feel sick.", o: ["shouldn't have eaten", "couldn't have eaten", "needn't eat"], a: 0, w: 'Зря съел — shouldn’t have eaten.' },
    { q: 'You ___ brought an umbrella — it was sunny all day.', o: ["needn't have", "mustn't have", "can't have"], a: 0, w: 'Принёс, но зря — needn’t have.' },
    { q: "She isn't answering. She ___ her phone at home.", o: ['must have left', 'should have left', 'needn’t have left'], a: 0, w: 'Догадка — must have left.' },
    { q: "He ___ the money — he was with me all evening.", o: ["can't have taken", "shouldn't have taken", "needn't have taken"], a: 0, w: 'Точно нет — can’t have taken.' },
    { q: 'Скажите «Надо было тебе сказать мне»: You ___ me.', t: ['should have told', "should've told"], w: 'You should have told me.' },
    { q: 'Скажите «Мы могли бы выиграть»: We ___ .', t: ['could have won', "could've won"], w: 'We could have won.' }
  ]
},
{ id: 'en-participle', level: 'B2', title: 'Причастные обороты', sub: 'Feeling tired, I went to bed · Built in 1900, the house…',
  blocks: [
    { t: 'p', h: 'Чтобы писать короче, часть предложения можно заменить <b>причастием</b> — как русский деепричастный или причастный оборот.' },
    { t: 'table', head: ['Форма', 'Смысл', 'Пример'], rows: [
      ['-ing', 'одновременно / причина (активно)', '<b>Feeling</b> tired, I went to bed.'],
      ['V3', 'пассив: что сделали с подлежащим', '<b>Built</b> in 1900, the house needs repairs.'],
      ['Having + V3', 'сначала одно, потом другое', '<b>Having finished</b> work, she went home.']] },
    { t: 'p', h: 'Ещё причастие сокращает определения: <i>The man <b>sitting</b> by the window</i> (= who is sitting) и <i>a book <b>written</b> by a child</i> (= which was written).' },
    { t: 'ex', rows: [
      ['Not knowing what to do, I called my mum.', 'Не зная, что делать, я позвонил маме.'], ['Having lost his keys, he couldn’t get in.', 'Потеряв ключи, он не мог попасть внутрь.'],
      ['Made in Italy, these shoes are very expensive.', 'Эти туфли сделаны в Италии и стоят очень дорого.'], ['The girl wearing the red dress is my sister.', 'Девушка в красном платье — моя сестра.'],
      ['Most of the people invited to the party came.', 'Большинство приглашённых на вечеринку пришли.']] },
    { t: 'warn', h: 'Подлежащее оборота и главной части должно совпадать. «Walking home, the rain started» — ошибка: дождь не шёл домой. Правильно: <i>Walking home, <b>I</b> got caught in the rain.</i>' },
    { t: 'tip', h: 'Отрицание — <b>not</b> перед причастием: <i>Not wanting to wake her, I left quietly.</i>' }
  ],
  quiz: [
    { q: '___ tired, she went to bed early.', o: ['Felt', 'Feeling', 'Having felt'], a: 1, w: 'Причина, одновременно — Feeling.' },
    { q: '___ in 1850, the bridge is still in use.', o: ['Building', 'Built', 'Having built'], a: 1, w: 'Мост построили — пассив: Built.' },
    { q: '___ the report, he sent it to his boss.', o: ['Having written', 'Written', 'Write'], a: 0, w: 'Сначала написал, потом отправил — Having written.' },
    { q: 'The man ___ next to me was very loud.', o: ['sat', 'sitting', 'having sat'], a: 1, w: '= who was sitting → sitting.' },
    { q: 'Это предложение с ошибкой?', o: ['Walking to school, I saw a fox.', 'Walking to school, a fox crossed the road.', 'Seeing the fox, I stopped.'], a: 1, w: 'Лиса не шла в школу — подлежащие не совпадают.' },
    { q: '___ what to say, I stayed silent.', o: ["Not knowing", "Don't knowing", 'Knowing not'], a: 0, w: 'Отрицание — Not knowing.' },
    { q: 'Сократите: The car which was stolen last week was found. → The car ___ last week was found.', t: ['stolen'], w: 'The car stolen last week…' },
    { q: 'Сократите: People who live here are friendly. → People ___ here are friendly.', t: ['living'], w: 'People living here…' }
  ]
},
{ id: 'en-reportverbs', level: 'B2', title: 'Глаголы для пересказа', sub: 'He suggested going · She denied taking it',
  blocks: [
    { t: 'p', h: 'Вместо бесконечного <b>said</b> пересказ точнее передают особые глаголы. Главное — запомнить, какая конструкция идёт после каждого.' },
    { t: 'table', head: ['Конструкция', 'Глаголы', 'Пример'], rows: [
      ['+ to do', 'agree, refuse, offer, promise, threaten', 'He <b>offered to help</b>.'],
      ['+ кого + to do', 'advise, warn, remind, encourage, persuade, invite', 'She <b>reminded me to call</b>.'],
      ['+ -ing', 'deny, admit, suggest, recommend', 'He <b>denied taking</b> the money.'],
      ['+ предлог + -ing', 'apologise for, insist on, accuse of, blame for', 'She <b>apologised for being</b> late.'],
      ['+ that', 'explain, claim, complain, admit, insist', 'He <b>complained that</b> it was cold.']] },
    { t: 'ex', rows: [
      ['She refused to answer.', 'Она отказалась отвечать.'], ['The doctor advised me to rest.', 'Врач посоветовал мне отдыхать.'],
      ['He suggested going to the cinema.', 'Он предложил пойти в кино.'], ['They accused him of cheating.', 'Его обвинили в жульничестве.'],
      ['I apologised for forgetting her birthday.', 'Я извинился, что забыл о её дне рождения.']] },
    { t: 'warn', h: '<b>suggest</b> не ставится с «кого + to»: «He suggested me to go» — ошибка. Правильно: <i>He suggested <b>going</b></i> или <i>He suggested <b>that I go</b></i>.' },
    { t: 'tip', h: 'Сравните: <i>She <b>said</b> she was sorry</i> → <i>She <b>apologised</b></i>. Один глагол вместо целой фразы.' }
  ],
  quiz: [
    { q: 'He ___ to lend me his car.', o: ['suggested', 'offered', 'denied'], a: 1, w: 'offer + to do.' },
    { q: 'She denied ___ the window.', o: ['to break', 'breaking', 'that break'], a: 1, w: 'deny + -ing.' },
    { q: 'My friend suggested ___ a taxi.', o: ['to take', 'me to take', 'taking'], a: 2, w: 'suggest + -ing.' },
    { q: 'They accused her ___ lying.', o: ['for', 'of', 'about'], a: 1, w: 'accuse of + -ing.' },
    { q: 'He apologised ___ late.', o: ['for being', 'to be', 'being'], a: 0, w: 'apologise for + -ing.' },
    { q: 'The teacher reminded ___ our homework.', o: ['to bring', 'us to bring', 'us bringing'], a: 1, w: 'remind + кого + to do.' },
    { q: '"I didn’t take it!" → He denied ___ it.', t: ['taking', 'having taken'], w: 'He denied taking it.' },
    { q: '"I’ll call you, I promise." → She promised ___ me.', t: ['to call'], w: 'She promised to call me.' }
  ]
},
{ id: 'en-gerinf2', level: 'B2', title: 'To или -ing: меняется смысл', sub: 'stop smoking / stop to smoke · remember, try, forget',
  blocks: [
    { t: 'p', h: 'После некоторых глаголов можно и <b>to</b>, и <b>-ing</b>, но <b>смысл разный</b>.' },
    { t: 'table', head: ['Глагол', '+ -ing', '+ to'], rows: [
      ['stop', 'перестать: <i>I stopped <b>smoking</b>.</i> (бросил курить)', 'остановиться, чтобы: <i>I stopped <b>to smoke</b>.</i> (остановился покурить)'],
      ['remember', 'помнить, что было: <i>I remember <b>meeting</b> her.</i>', 'не забыть сделать: <i>Remember <b>to lock</b> the door.</i>'],
      ['forget', 'забыть, что было: <i>I’ll never forget <b>seeing</b> the sea.</i>', 'забыть сделать: <i>I forgot <b>to call</b> him.</i>'],
      ['try', 'попробовать как способ: <i>Try <b>restarting</b> it.</i>', 'постараться (трудно): <i>I tried <b>to open</b> it, but couldn’t.</i>'],
      ['regret', 'жалеть о сделанном: <i>I regret <b>telling</b> him.</i>', 'с сожалением сообщать: <i>We regret <b>to inform</b> you…</i>'],
      ['go on', 'продолжать то же: <i>She went on <b>talking</b>.</i>', 'перейти к другому: <i>Then he went on <b>to talk</b> about money.</i>']] },
    { t: 'ex', rows: [
      ['Please stop talking.', 'Пожалуйста, перестаньте разговаривать.'], ['We stopped to buy some water.', 'Мы остановились купить воды.'],
      ['Did you remember to buy milk?', 'Ты не забыл купить молока?'], ['I remember living in that house.', 'Я помню, как жил в том доме.'],
      ['Try turning it off and on again.', 'Попробуй выключить и снова включить.']] },
    { t: 'tip', h: 'Простое правило: <b>to</b> смотрит в будущее (что нужно сделать), <b>-ing</b> — на то, что уже было или происходит.' },
    { t: 'warn', h: '<b>like / love / hate / prefer</b> допускают оба варианта почти без разницы: <i>I like swimming = I like to swim.</i>' }
  ],
  quiz: [
    { q: 'He stopped ___ when he was 40. (бросил курить)', o: ['to smoke', 'smoking', 'smoke'], a: 1, w: 'Перестал — stop + -ing.' },
    { q: 'We stopped ___ some coffee. (чтобы купить)', o: ['buying', 'to buy', 'buy'], a: 1, w: 'Остановились, чтобы — stop + to.' },
    { q: "Don't forget ___ the lights.", o: ['to turn off', 'turning off', 'turn off'], a: 0, w: 'Не забыть сделать — forget + to.' },
    { q: 'I remember ___ you at the party last year.', o: ['to see', 'seeing', 'see'], a: 1, w: 'Помню то, что было — remember + -ing.' },
    { q: "The laptop won't start. Try ___ the battery.", o: ['to charge', 'charging', 'charge'], a: 1, w: 'Попробовать как способ — try + -ing.' },
    { q: 'I tried ___ the jar, but it was too tight.', o: ['to open', 'opening', 'open'], a: 0, w: 'Старался, но не вышло — try + to.' },
    { q: 'Допишите: I regret ___ (say) that to her.', t: ['saying', 'having said'], w: 'I regret saying that.' },
    { q: 'Допишите: Remember ___ (lock) the door when you leave.', t: ['to lock'], w: 'Remember to lock the door.' }
  ]
},
{ id: 'en-narrative', level: 'B2', title: 'Времена для рассказа', sub: 'Past Perfect Continuous · had been waiting',
  blocks: [
    { t: 'p', h: 'В рассказе о прошлом обычно смешиваются четыре времени. Каждое отвечает за своё.' },
    { t: 'table', head: ['Время', 'Роль', 'Пример'], rows: [
      ['Past Simple', 'основные события по порядку', 'I <b>opened</b> the door and <b>saw</b> him.'],
      ['Past Continuous', 'фон, процесс', 'It <b>was raining</b>.'],
      ['Past Perfect', 'то, что было раньше', 'He <b>had left</b> a note.'],
      ['Past Perfect Continuous', 'длилось до момента в прошлом', 'She <b>had been waiting</b> for an hour.']] },
    { t: 'p', h: '<b>Past Perfect Continuous</b> — had been + -ing. Показывает, <b>как долго</b> что-то длилось до момента в прошлом, или объясняет видимый результат: <i>Her eyes were red. She <b>had been crying</b>.</i>' },
    { t: 'ex', rows: [
      ['We had been walking for hours when we found the village.', 'Мы шли уже несколько часов, когда нашли деревню.'], ['He was tired because he had been working all night.', 'Он устал, потому что работал всю ночь.'],
      ['The ground was wet. It had been raining.', 'Земля была мокрой: до этого шёл дождь.'], ['While I was cooking, the lights went out.', 'Пока я готовила, погас свет.'],
      ["When I arrived, everyone had already eaten.", 'Когда я пришёл, все уже поели.']] },
    { t: 'tip', h: 'Сравните: <i>I <b>had read</b> the book</i> — закончил. <i>I <b>had been reading</b> for an hour</i> — процесс, длительность.' },
    { t: 'warn', h: 'Глаголы состояния (know, like, own) в Continuous не ставят: <i>I <b>had known</b> him for years</i>, а не «had been knowing».' }
  ],
  quiz: [
    { q: 'She was out of breath because she ___ .', o: ['ran', 'had been running', 'was run'], a: 1, w: 'Объясняем результат процессом — had been running.' },
    { q: 'We ___ for two hours when the bus finally came.', o: ['had been waiting', 'were waiting', 'waited'], a: 0, w: 'Длительность до момента — had been waiting.' },
    { q: 'When I got home, I ___ that someone had broken in.', o: ['had realised', 'realised', 'was realising'], a: 1, w: 'Основное событие — Past Simple.' },
    { q: 'It ___ when we left the house.', o: ['was snowing', 'had snowed', 'snowed'], a: 0, w: 'Фон — Past Continuous.' },
    { q: 'I ___ him for ten years before we got married.', o: ['had been knowing', 'had known', 'was knowing'], a: 1, w: 'Know — глагол состояния: had known.' },
    { q: 'By the time the film started, we ___ all the popcorn.', o: ['had eaten', 'had been eating', 'were eating'], a: 0, w: 'Закончено к моменту — had eaten.' },
    { q: 'Допишите: His hands were dirty. He ___ (work) in the garden.', t: ['had been working'], w: 'He had been working in the garden.' },
    { q: 'Допишите: They ___ (drive) for six hours when the car broke down.', t: ['had been driving'], w: 'They had been driving for six hours.' }
  ]
},
{ id: 'en-quantifiers', level: 'B2', title: 'Both, either, neither, each, every', sub: 'оба, любой из двух, ни один, каждый',
  blocks: [
    { t: 'p', h: 'Эти слова говорят о <b>двух</b> предметах или о <b>каждом</b> из группы.' },
    { t: 'table', head: ['Слово', 'Значение', 'Пример'], rows: [
      ['both', 'оба (2)', '<b>Both</b> my parents are teachers.'],
      ['either', 'любой из двух; тоже не (в конце)', 'You can take <b>either</b> bus. I don’t like it <b>either</b>.'],
      ['neither', 'ни один из двух', '<b>Neither</b> answer is correct.'],
      ['each', 'каждый (по отдельности)', '<b>Each</b> student got a book.'],
      ['every', 'каждый, все (вместе, 3+)', '<b>Every</b> room has a TV.']] },
    { t: 'h', h: 'Пары' },
    { t: 'p', h: '<b>both … and</b> — и … и; <b>either … or</b> — или … или; <b>neither … nor</b> — ни … ни. <i>She speaks <b>both</b> English <b>and</b> French. You can <b>either</b> stay <b>or</b> go. <b>Neither</b> Tom <b>nor</b> Anna came.</i>' },
    { t: 'ex', rows: [
      ['Both of them are doctors.', 'Они оба врачи.'], ['Neither of us knew the answer.', 'Никто из нас двоих не знал ответа.'],
      ["I don't eat meat. — I don't either.", 'Я не ем мясо. — Я тоже.'], ['Each of the children got a present.', 'Каждый из детей получил подарок.'],
      ['I go swimming every morning.', 'Я плаваю каждое утро.']] },
    { t: 'warn', h: 'После <b>neither</b> глагол утвердительный: <i>Neither of them <b>came</b></i>, а не «didn’t come» — отрицание уже есть.' },
    { t: 'tip', h: '<b>Every</b> не ставится с of: <i>every one of them</i>, но <i>each of them</i>.' }
  ],
  quiz: [
    { q: '___ my brothers live in London. (оба)', o: ['Either', 'Both', 'Each'], a: 1, w: 'Оба — both.' },
    { q: '___ of the two answers is right — both are wrong.', o: ['Either', 'Neither', 'Both'], a: 1, w: 'Ни один из двух — neither.' },
    { q: "I can't swim. — I can't ___ .", o: ['too', 'either', 'neither'], a: 1, w: 'Тоже не — not … either.' },
    { q: 'You can pay ___ by card or in cash.', o: ['either', 'both', 'neither'], a: 0, w: 'Или … или — either … or.' },
    { q: '___ Tom nor his sister came to the party.', o: ['Either', 'Neither', 'Both'], a: 1, w: 'Ни … ни — neither … nor.' },
    { q: 'Neither of my friends ___ the film.', o: ['liked', "didn't like", 'not liked'], a: 0, w: 'После neither — утвердительный глагол.' },
    { q: 'I check my email ___ day.', o: ['each of', 'every', 'both'], a: 1, w: 'Каждый день — every day.' },
    { q: 'Вставьте слово: ___ of the students has a laptop. (каждый по отдельности)', t: ['each'], w: 'Each of the students has a laptop.' }
  ]
}
);
