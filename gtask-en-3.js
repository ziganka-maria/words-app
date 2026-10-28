// задания тренажёров по темам (английский), часть 3: пассив, косвенная речь, to или -ing, предлоги, сравнения, количество
// GTASK[урок] = [задания]; номер задания — ключ ошибок ('xN'), поэтому только дописывать в конец; lv — уровень задания, если он выше уровня урока
window.GTASK = window.GTASK || {};
Object.assign(GTASK, {

'en-passive': [
  { q: 'This bridge ___ in 1890.', o: ['built', 'was built', 'has built'], a: 1, w: 'Мост построили (кто — неважно) → was built.' },
  { q: 'English ___ all over the world.', o: ['speaks', 'is spoken', 'is speaking'], a: 1, w: 'На нём говорят → is spoken.' },
  { q: 'The letters ___ every morning.', o: ['are delivered', 'deliver', 'is delivered'], a: 0, w: 'Letters → are delivered.' },
  { q: 'My car ___ at the moment.', o: ['is repaired', 'is being repaired', 'repairs'], a: 1, w: 'Прямо сейчас → is being repaired.' },
  { q: 'The thief ___ yet.', o: ["hasn't been caught", "hasn't caught", "haven't been caught"], a: 0, w: 'Yet → Present Perfect passive: hasn’t been caught.' },
  { q: 'The results ___ next week.', o: ['will announce', 'will be announced', 'are announce'], a: 1, w: 'Будущее → will be announced.' },
  { q: '"Hamlet" was written ___ Shakespeare.', o: ['by', 'from', 'with'], a: 0, w: 'Кем сделано → by.' },
  { k: 'form', q: 'Coffee ___ (grow) in Brazil.', t: ['is grown'], w: 'Is + V3: is grown.' },
  { k: 'form', q: 'The window ___ (break) last night.', t: ['was broken', 'got broken'], w: 'Прошлое → was broken.' },
  { k: 'form', q: 'Two new schools ___ (build) so far this year.', t: ['have been built'], w: 'So far this year → Present Perfect passive: have been built.' },
  { k: 're', q: 'Перепишите в пассиве: They clean the rooms every day.', t: ['The rooms are cleaned every day.'], w: 'The rooms + are cleaned.' },
  { k: 're', q: 'Перепишите в пассиве: Someone stole my bike.', t: ['My bike was stolen.', 'My bike got stolen.'], w: 'My bike + was stolen; someone не нужно.' },
  { k: 'fix', q: 'The museum was build in 1900.', t: ['The museum was built in 1900.'], w: 'Нужна третья форма: built.' },
  { k: 'err', q: 'Найдите ошибку: «The dinner is cooking by my dad.»', o: ['The dinner', 'is cooking', 'by my dad'], a: 1, w: 'Ужин готовят (пассив) → is being cooked / is cooked.' }
],

'en-causative': [
  { q: 'I ___ my hair cut yesterday.', o: ['had', 'did', 'made'], a: 0, w: 'Сделал не сам, а в салоне → had my hair cut.' },
  { q: 'We’re having our kitchen ___.', o: ['paint', 'painted', 'painting'], a: 1, w: 'Have + объект + V3.' },
  { q: 'She got her phone ___ last week.', o: ['repaired', 'repair', 'to repair'], a: 0, w: 'Get + объект + V3 (разговорнее, чем have).' },
  { q: 'He had his wallet ___ on the bus.', o: ['stolen', 'steal', 'stole'], a: 0, w: 'Have something done — и о неприятностях: у него украли кошелёк.' },
  { q: 'You should ___ your eyes tested.', o: ['have', 'make', 'do'], a: 0, w: 'Have your eyes tested — проверить зрение (у врача).' },
  { k: 'form', q: 'I need to have my car ___ (wash).', t: ['washed'], w: 'V3: washed.' },
  { k: 're', q: 'Перепишите с have something done: A mechanic is repairing my bike.', t: ['I am having my bike repaired.', "I'm having my bike repaired.", 'I am getting my bike repaired.', "I'm getting my bike repaired.", "I'm having my bike repaired by a mechanic.", 'I am having my bike repaired by a mechanic.'], w: 'I’m having my bike repaired.' },
  { k: 're', q: 'Перепишите с have something done: The hairdresser cut her hair.', t: ['She had her hair cut.', 'She got her hair cut.', 'She had her hair cut by the hairdresser.', 'She got her hair cut by the hairdresser.'], w: 'She had her hair cut.' },
  { k: 'fix', q: 'I cut my hair at the hairdresser’s yesterday.', t: ['I had my hair cut at the hairdresser’s yesterday.', 'I got my hair cut at the hairdresser’s yesterday.', 'I had my hair cut yesterday at the hairdresser’s.'], w: 'Если стриг парикмахер — had my hair cut.' },
  { k: 'err', q: 'Найдите ошибку: «We had our house paint last summer.»', o: ['We had', 'our house paint', 'last summer'], a: 1, w: 'Нужно V3: our house painted.' }
],

'en-impersonal': [
  { q: 'It ___ that the company will close.', o: ['is said', 'says', 'is saying'], a: 0, w: 'Говорят, что… → It is said that…' },
  { q: 'He is believed ___ abroad.', o: ['to live', 'living', 'that he lives'], a: 0, w: 'He is believed + to + глагол.' },
  { q: 'The painting is thought ___ stolen in 1990.', o: ['to be', 'to have been', 'being'], a: 1, w: 'О прошлом → to have been stolen.' },
  { q: 'She is said ___ the best surgeon in the city.', o: ['to be', 'being', 'be'], a: 0, w: 'Is said + to be.' },
  { q: 'There ___ to be problems with the new system.', o: ['are reported', 'reports', 'is reporting'], a: 0, w: 'There are reported to be… — сообщают, что есть…' },
  { k: 'form', q: 'The president is expected ___ (arrive) tomorrow.', t: ['to arrive'], w: 'Is expected + to arrive.' },
  { k: 're', q: 'Перепишите, начиная с He: People say that he is very rich.', t: ['He is said to be very rich.', "He's said to be very rich."], w: 'He is said to be…' },
  { k: 're', q: 'Перепишите, начиная с It: People believe that the treasure is in the cave.', t: ['It is believed that the treasure is in the cave.', "It's believed that the treasure is in the cave.", 'It is believed the treasure is in the cave.', "It's believed the treasure is in the cave."], w: 'It is believed that…' },
  { k: 'fix', q: 'She is known to win three gold medals in 2016.', t: ['She is known to have won three gold medals in 2016.', "She's known to have won three gold medals in 2016."], w: 'О прошлом → to have won.' },
  { k: 'err', q: 'Найдите ошибку: «It is say that he lied.»', o: ['It is say', 'that', 'he lied'], a: 0, w: 'It is said.' }
],

'en-reported': [
  { q: '"I’m tired," she said last week. → She said she ___ tired.', o: ['is', 'was', 'were'], a: 1, w: 'Сдвиг времени: am → was.' },
  { q: '"I will call you," he said last month. → He said he ___ call me.', o: ['will', 'would', 'can'], a: 1, w: 'Will → would.' },
  { q: '"We saw the film," they said. → They said they ___ the film.', o: ['had saw', 'had seen', 'have seen'], a: 1, w: 'Past Simple → Past Perfect: had seen (в речи можно оставить saw).' },
  { q: 'He asked me where ___.', o: ['I lived', 'did I live', 'do I live'], a: 0, w: 'В косвенном вопросе — прямой порядок слов, без did.' },
  { q: 'She asked ___ I liked jazz.', o: ['if', 'that', 'do'], a: 0, w: 'Вопрос «да/нет» → asked if / whether.' },
  { q: 'He told ___ to wait.', o: ['me', 'to me', 'that'], a: 0, w: 'Tell + кому: told me.' },
  { q: '"Don’t touch it," she said. → She told me ___ it.', o: ['not to touch', "don't touch", 'to not touched'], a: 0, w: 'Просьба/приказ → told me not to touch.' },
  { k: 'form', q: '"I can swim." → She said she ___ swim.', t: ['could'], w: 'Can → could.' },
  { k: 'form', q: '"I have finished." → He said he ___ finished.', t: ['had'], w: 'Have finished → had finished.' },
  { k: 're', q: 'Перескажите: "I live in London," Tom said. → Tom said…', t: ['Tom said he lived in London.', 'Tom said that he lived in London.', 'Tom said he lives in London.', 'Tom said that he lives in London.'], w: 'Live → lived (если факт ещё верен, можно оставить lives).' },
  { k: 're', q: 'Перескажите вопрос: "Where are you going?" she asked me. → She asked me…', t: ['She asked me where I was going.'], w: 'Where + I was going — прямой порядок.' },
  { k: 'fix', q: 'She said me that she was busy.', t: ['She told me that she was busy.', 'She told me she was busy.', 'She said that she was busy.', 'She said she was busy.'], w: 'Said — без «кому»; с кому → told me.' },
  { k: 'err', q: 'Найдите ошибку: «He asked me what time was it.»', o: ['He asked me', 'what time', 'was it'], a: 2, w: 'Прямой порядок: what time it was.' }
],

'en-reportverbs': [
  { q: 'He ___ me to see a doctor.', o: ['advised', 'suggested', 'said'], a: 0, w: 'Advise + кого + to do.' },
  { q: 'She ___ going to the cinema.', o: ['suggested', 'offered', 'told'], a: 0, w: 'Suggest + -ing.' },
  { q: 'He ___ to help me with the bags.', o: ['offered', 'suggested', 'denied'], a: 0, w: 'Offer + to do.' },
  { q: 'The boy ___ breaking the window.', o: ['denied', 'refused', 'promised'], a: 0, w: 'Deny + -ing — отрицать.' },
  { q: 'She ___ me of lying.', o: ['accused', 'blamed', 'denied'], a: 0, w: 'Accuse somebody of -ing.' },
  { q: 'They ___ to pay the bill.', o: ['refused', 'denied', 'suggested'], a: 0, w: 'Refuse + to do — отказаться.' },
  { q: 'He apologised ___ late.', o: ['for being', 'to be', 'being'], a: 0, w: 'Apologise for + -ing.' },
  { q: 'She reminded me ___ the door.', o: ['to lock', 'locking', 'lock'], a: 0, w: 'Remind + кого + to do.' },
  { k: 'form', q: 'He admitted ___ (take) the money.', t: ['taking', 'having taken'], w: 'Admit + -ing.' },
  { k: 're', q: 'Перескажите с promise: "I’ll be on time," he said.', t: ['He promised to be on time.', 'He promised that he would be on time.', 'He promised he would be on time.', 'He promised he’d be on time.', 'He promised that he’d be on time.'], w: 'Promise + to do.' },
  { k: 'fix', q: 'She suggested me to take a taxi.', t: ['She suggested that I take a taxi.', 'She suggested that I should take a taxi.', 'She suggested taking a taxi.', 'She suggested I take a taxi.', 'She suggested I should take a taxi.'], w: 'Suggest не употребляют с «кого + to».' },
  { k: 'err', q: 'Найдите ошибку: «He insisted to pay for dinner.»', o: ['He insisted', 'to pay', 'for dinner'], a: 1, w: 'Insist on + -ing: insisted on paying.' }
],

'en-ing': [
  { q: 'I enjoy ___ in the rain.', o: ['walking', 'to walk', 'walk'], a: 0, w: 'Enjoy + -ing.' },
  { q: 'She decided ___ a new job.', o: ['to find', 'finding', 'find'], a: 0, w: 'Decide + to.' },
  { q: 'They want ___ abroad.', o: ['to travel', 'travelling', 'travel'], a: 0, w: 'Want + to.' },
  { q: 'Do you mind ___ the window?', o: ['opening', 'to open', 'open'], a: 0, w: 'Mind + -ing.' },
  { q: 'He’s good at ___.', o: ['cooking', 'to cook', 'cook'], a: 0, w: 'После предлога — -ing.' },
  { q: 'I hope ___ you soon.', o: ['to see', 'seeing', 'see'], a: 0, w: 'Hope + to.' },
  { q: 'Have you finished ___ the book?', o: ['reading', 'to read', 'read'], a: 0, w: 'Finish + -ing.' },
  { q: '___ is good for your health.', o: ['Swimming', 'Swim', 'To swimming'], a: 0, w: 'Действие как подлежащее — обычно -ing.' },
  { q: 'I can’t afford ___ a new car.', o: ['to buy', 'buying', 'buy'], a: 0, w: 'Afford + to.' },
  { k: 'form', q: 'Stop ___ (talk), please!', t: ['talking'], w: 'Stop + -ing — перестать.' },
  { q: 'She promised ___ me.', o: ['to call', 'calling', 'call'], a: 0, w: 'Promise + to.' },
  { k: 'form', q: 'I’m looking forward to ___ (meet) you.', t: ['meeting'], w: 'Look forward to + -ing (to здесь предлог).' },
  { k: 'fix', q: 'I suggest to go by train.', t: ['I suggest going by train.', 'I suggest that we go by train.', 'I suggest we go by train.', 'I suggest that we should go by train.', 'I suggest we should go by train.'], w: 'Suggest + -ing.' },
  { k: 'err', q: 'Найдите ошибку: «He avoided to answer my question.»', o: ['He avoided', 'to answer', 'my question'], a: 1, w: 'Avoid + -ing: avoided answering.' }
],

'en-gerinf2': [
  { q: 'I stopped ___ a coffee. I was really tired.', o: ['to have', 'having', 'have'], a: 0, w: 'Stop to do — остановиться, чтобы что-то сделать.' },
  { q: 'I stopped ___ sugar last year. Now I feel better.', o: ['eating', 'to eat', 'eat'], a: 0, w: 'Stop -ing — бросить, перестать.' },
  { q: 'Remember ___ the door when you leave!', o: ['to lock', 'locking', 'lock'], a: 0, w: 'Remember to do — не забыть сделать.' },
  { q: 'I remember ___ him at a party years ago.', o: ['meeting', 'to meet', 'meet'], a: 0, w: 'Remember -ing — помнить, что было.' },
  { q: 'I’ll never forget ___ the Alps for the first time.', o: ['seeing', 'to see', 'see'], a: 0, w: 'Forget -ing — забыть, как было (обычно never forget).' },
  { q: 'It still doesn’t work? Try ___ it off and on again and see if that helps.', o: ['turning', 'to turn', 'turn'], a: 0, w: 'Try -ing — попробовать как способ.' },
  { q: 'I tried ___ the box, but it was too heavy.', o: ['to lift', 'lifting', 'lift'], a: 0, w: 'Try to do — пытаться (с усилием).' },
  { q: 'We regret ___ you that the flight is cancelled.', o: ['to inform', 'informing', 'inform'], a: 0, w: 'Regret to inform — с сожалением сообщаем.' },
  { k: 'form', q: 'I regret ___ (not / study) harder at school.', t: ['not studying', 'not having studied'], w: 'Regret -ing — жалеть о сделанном.' },
  { q: 'Did you remember ___ milk?', o: ['to buy', 'buying', 'buy'], a: 0, w: 'Не забыл ли купить → remember to.' },
  { k: 'fix', q: 'I asked him to stop, but he went on to talk.', t: ['I asked him to stop, but he went on talking.', 'I asked him to stop, but he kept talking.', 'I asked him to stop, but he kept on talking.', 'I asked him to stop, but he carried on talking.'], w: 'Go on -ing — продолжать то же; go on to do — перейти к новому.' },
  { k: 'err', q: 'Найдите ошибку: «Please remember sending me the file tomorrow.»', o: ['Please remember', 'sending me', 'the file tomorrow'], a: 1, w: 'О будущем деле → remember to send.' }
],

'en-prep': [
  { q: 'My birthday is ___ May.', o: ['in', 'on', 'at'], a: 0, w: 'Месяцы → in.' },
  { q: 'See you ___ Monday!', o: ['on', 'in', 'at'], a: 0, w: 'Дни недели → on.' },
  { q: 'The film starts ___ seven o’clock.', o: ['at', 'in', 'on'], a: 0, w: 'Время по часам → at.' },
  { q: 'I live ___ Moscow.', o: ['in', 'at', 'on'], a: 0, w: 'Город → in.' },
  { q: 'The picture is ___ the wall.', o: ['on', 'in', 'at'], a: 0, w: 'На поверхности → on.' },
  { q: 'Wait for me ___ the bus stop.', o: ['at', 'in', 'on'], a: 0, w: 'Точка, место встречи → at.' },
  { q: 'We go skiing ___ winter.', o: ['in', 'on', 'at'], a: 0, w: 'Времена года → in.' },
  { q: 'What do you do ___ the weekend?', o: ['at', 'in', 'by'], a: 0, w: 'BrE: at the weekend (в AmE — on the weekend).' },
  { q: 'She was born ___ 1995.', o: ['in', 'on', 'at'], a: 0, w: 'Год → in.' },
  { q: 'He’s ___ the train now.', o: ['on', 'in', 'at'], a: 0, w: 'Транспорт, в котором можно ходить (bus, train, plane) → on.' },
  { k: 'form', q: 'I’ll call you ___ (в) the morning.', t: ['in'], w: 'In the morning.' },
  { k: 'form', q: 'The meeting is ___ (в) 10th June.', t: ['on'], w: 'Дата → on.' },
  { k: 'fix', q: 'I was born at 15 March.', t: ['I was born on 15 March.', 'I was born on the 15th of March.', 'I was born on March 15.', 'I was born on 15th March.', 'I was born on March 15th.', 'I was born on March the 15th.'], w: 'Дата → on.' },
  { k: 'err', q: 'Найдите ошибку: «We met in Christmas Day.»', o: ['We met', 'in', 'Christmas Day'], a: 1, w: 'Конкретный день → on Christmas Day.' },
  { lv: 'A2', q: 'She’s afraid ___ spiders.', o: ['of', 'from', 'about'], a: 0, w: 'Afraid of.' },
  { lv: 'A2', q: 'I’m interested ___ history.', o: ['in', 'on', 'about'], a: 0, w: 'Interested in.' },
  { lv: 'A2', q: 'Listen ___ me!', o: ['to', 'at', '—'], a: 0, w: 'Listen to.' },
  { lv: 'A2', q: 'It depends ___ the weather.', o: ['on', 'of', 'from'], a: 0, w: 'Depend on.' },
  { lv: 'A2', q: 'We arrived ___ the airport at six.', o: ['at', 'to', 'in'], a: 0, w: 'Arrive at (здание, точка); arrive in (город, страна); arrive to — неверно.' },
  { lv: 'B1', q: 'I’m not very good ___ maths.', o: ['at', 'in', 'on'], a: 0, w: 'Good at.' },
  { lv: 'B1', q: 'She’s married ___ a doctor.', o: ['to', 'with', 'on'], a: 0, w: 'Married to.' },
  { lv: 'B1', q: 'He apologised ___ the mistake.', o: ['for', 'about', 'of'], a: 0, w: 'Apologise for.' },
  { lv: 'B1', q: 'Thank you ___ your help.', o: ['for', 'about', 'with'], a: 0, w: 'Thank you for.' },
  { lv: 'B1', k: 'form', q: 'Congratulations ___ (с) your new job!', t: ['on'], w: 'Congratulations on.' },
  { lv: 'B1', k: 'form', q: 'I’m tired ___ (от) waiting.', t: ['of'], w: 'Tired of.' },
  { lv: 'B1', k: 'fix', q: 'We discussed about the plan.', t: ['We discussed the plan.'], w: 'Discuss — без предлога.' },
  { lv: 'B2', q: 'There’s been a sharp rise ___ prices.', o: ['in', 'of', 'on'], a: 0, w: 'A rise in (prices); a rise of 5% — величина.' },
  { lv: 'B2', q: 'She insisted ___ paying.', o: ['on', 'in', 'to'], a: 0, w: 'Insist on.' },
  { lv: 'B2', q: 'He was accused ___ fraud.', o: ['of', 'for', 'in'], a: 0, w: 'Accuse of.' },
  { lv: 'B2', k: 'err', q: 'Найдите ошибку: «It’s a good solution of the problem.»', o: ['It’s a good', 'solution of', 'the problem'], a: 1, w: 'A solution to a problem.' }
],

'en-comparative': [
  { q: 'My brother is ___ than me.', o: ['taller', 'more tall', 'tallest'], a: 0, w: 'Короткое прилагательное → -er.' },
  { q: 'This book is ___ than that one.', o: ['more interesting', 'interestinger', 'most interesting'], a: 0, w: 'Длинное → more.' },
  { q: 'Today is ___ than yesterday.', o: ['hotter', 'hoter', 'more hot'], a: 0, w: 'Hot → hotter (удвоение).' },
  { q: 'Her English is ___ than mine.', o: ['better', 'gooder', 'more good'], a: 0, w: 'Good → better.' },
  { q: 'The weather is getting ___.', o: ['worse', 'badder', 'more bad'], a: 0, w: 'Bad → worse.' },
  { q: 'This test is ___ than the last one.', o: ['easier', 'more easy', 'easyer'], a: 0, w: 'Y → ier: easier.' },
  { q: 'He’s not as tall ___ his father.', o: ['as', 'than', 'like'], a: 0, w: 'Not as … as.' },
  { k: 'form', q: 'A car is ___ (expensive) than a bike.', t: ['more expensive'], w: 'More expensive.' },
  { k: 'form', q: 'London is ___ (big) than Oxford.', t: ['bigger'], w: 'Big → bigger.' },
  { k: 'form', q: 'Could you speak a bit ___ (slowly)?', t: ['more slowly', 'slower'], w: 'Наречие → more slowly (разговорно slower).' },
  { k: 'fix', q: 'She is more young than her sister.', t: ['She is younger than her sister.', "She's younger than her sister."], w: 'Young → younger.' },
  { k: 'fix', q: 'This phone is cheaper that the other one.', t: ['This phone is cheaper than the other one.'], w: 'После сравнительной степени — than.' },
  { lv: 'B1', q: 'The more you practise, the ___ you get.', o: ['better', 'best', 'more good'], a: 0, w: 'The more…, the better.' },
  { k: 'err', q: 'Найдите ошибку: «My flat is more bigger than yours.»', o: ['My flat is', 'more bigger', 'than yours'], a: 1, w: 'Либо bigger, либо more + длинное; не оба сразу.' }
],

'en-superlative': [
  { q: 'It’s ___ day of the year.', o: ['the hottest', 'the most hot', 'hottest'], a: 0, w: 'The + -est: the hottest.' },
  { q: 'She’s ___ student in the class.', o: ['the best', 'the goodest', 'the better'], a: 0, w: 'Good → the best.' },
  { q: 'This is ___ film I’ve ever seen.', o: ['the most boring', 'the boringest', 'most boring'], a: 0, w: 'Длинное → the most.' },
  { q: 'Everest is the highest mountain ___ the world.', o: ['in', 'of', 'at'], a: 0, w: 'Место → in the world.' },
  { q: 'That was ___ meal of my life.', o: ['the worst', 'the baddest', 'the most bad'], a: 0, w: 'Bad → the worst.' },
  { k: 'form', q: 'It’s ___ (cheap) hotel in town.', t: ['the cheapest'], w: 'The cheapest.' },
  { k: 'form', q: 'He’s ___ (funny) person I know.', t: ['the funniest'], w: 'Y → iest.' },
  { k: 'form', q: 'This is ___ (beautiful) place in the city.', t: ['the most beautiful'], w: 'The most beautiful.' },
  { k: 'fix', q: 'It was the most happiest day of my life.', t: ['It was the happiest day of my life.'], w: 'Happy → the happiest, без most.' },
  { k: 'fix', q: 'She is the taller girl in our class.', t: ['She is the tallest girl in our class.', "She's the tallest girl in our class."], w: 'Из всех → превосходная: the tallest.' },
  { k: 'err', q: 'Найдите ошибку: «Moscow is the biggest city of Russia.»', o: ['Moscow is', 'the biggest city', 'of Russia'], a: 2, w: 'Место → in Russia.' }
],

'en-enough': [
  { q: 'This coffee is ___ hot to drink.', o: ['too', 'enough', 'very'], a: 0, w: 'Слишком (нельзя) → too + прилагательное + to.' },
  { q: 'He isn’t old ___ to drive.', o: ['enough', 'too', 'so'], a: 0, w: 'Прилагательное + enough.' },
  { q: 'We don’t have ___ chairs.', o: ['enough', 'too', 'too much'], a: 0, w: 'Enough + существительное.' },
  { q: 'It was ___ a good film that I watched it twice.', o: ['such', 'so', 'too'], a: 0, w: 'Such + a + прилагательное + существительное.' },
  { q: 'She was ___ tired that she fell asleep.', o: ['so', 'such', 'too'], a: 0, w: 'So + прилагательное + that.' },
  { q: 'There are ___ people here. Let’s go somewhere quieter.', o: ['too many', 'too much', 'enough'], a: 0, w: 'Слишком много (исчисляемые) → too many.' },
  { q: 'I’ve eaten ___ chocolate.', o: ['too much', 'too many', 'so many'], a: 0, w: 'Неисчисляемое → too much.' },
  { k: 'form', q: 'The bag is ___ (слишком) heavy for me.', t: ['too'], w: 'Too heavy.' },
  { k: 'form', q: 'Is the room big ___ (достаточно)?', t: ['enough'], w: 'Big enough — enough после прилагательного.' },
  { k: 'fix', q: 'He is enough tall to play basketball.', t: ['He is tall enough to play basketball.', "He's tall enough to play basketball."], w: 'Прилагательное + enough.' },
  { k: 'fix', q: 'It was so a nice day.', t: ['It was such a nice day.', 'It was so nice a day.'], w: 'Such a nice day.' },
  { k: 're', q: 'Перепишите с too: The water is very cold. We can’t swim.', t: ['The water is too cold to swim.', 'The water is too cold for us to swim.', 'The water is too cold to swim in.', 'The water is too cold for us to swim in.', 'The water is too cold for swimming.'], w: 'Too cold to swim.' },
  { k: 'err', q: 'Найдите ошибку: «There isn’t milk enough for coffee.»', o: ['There isn’t', 'milk enough', 'for coffee'], a: 1, w: 'Enough перед существительным: enough milk.' }
],

'en-countable': [
  { q: 'How ___ money do you need?', o: ['much', 'many', 'lot'], a: 0, w: 'Money — неисчисляемое → much.' },
  { q: 'How ___ brothers have you got?', o: ['many', 'much', 'lot of'], a: 0, w: 'Brothers — исчисляемые → many.' },
  { q: 'There isn’t ___ time left.', o: ['much', 'many', 'a few'], a: 0, w: 'Time → much.' },
  { q: 'I’ve got ___ friends in Spain.', o: ['a few', 'a little', 'much'], a: 0, w: 'Исчисляемые → a few.' },
  { q: 'Can I have ___ sugar, please?', o: ['a little', 'a few', 'many'], a: 0, w: 'Неисчисляемое → a little.' },
  { q: 'She gave me some good ___.', o: ['advice', 'advices', 'an advice'], a: 0, w: 'Advice — неисчисляемое, без -s.' },
  { q: 'We have ___ homework today.', o: ['a lot of', 'many', 'a few'], a: 0, w: 'Homework — неисчисляемое; в утверждении — a lot of.' },
  { q: 'I need ___ information about the course.', o: ['some', 'an', 'a few'], a: 0, w: 'Information — неисчисляемое → some.' },
  { k: 'form', q: 'There aren’t ___ (много) cars in the street.', t: ['many', 'a lot of', 'lots of'], w: 'Исчисляемые в отрицании → many.' },
  { k: 'form', q: 'Very ___ (мало) people came — only three.', t: ['few'], w: 'Few — мало (почти нет), с исчисляемыми.' },
  { k: 'fix', q: 'I have many work today.', t: ['I have a lot of work today.', 'I have lots of work today.', 'I have much work today.'], w: 'Work — неисчисляемое: a lot of work.' },
  { k: 'fix', q: 'Can you give me an information?', t: ['Can you give me some information?', 'Can you give me information?', 'Can you give me a piece of information?'], w: 'Information — без an.' },
  { k: 'err', q: 'Найдите ошибку: «How much eggs do we need?»', o: ['How much', 'eggs', 'do we need'], a: 0, w: 'Eggs — исчисляемые → How many.' }
],

'en-quantifiers': [
  { q: '___ my parents are teachers.', o: ['Both', 'Either', 'Each'], a: 0, w: 'Оба → both (+ are).' },
  { q: 'You can take ___ bus — they both go to the centre.', o: ['either', 'both', 'neither'], a: 0, w: 'Любой из двух → either + единственное.' },
  { q: '___ of my sisters lives here. They’re both in Spain.', o: ['Neither', 'Either', 'Both'], a: 0, w: 'Ни одна из двух → neither.' },
  { q: '___ student has a laptop.', o: ['Every', 'All', 'Both'], a: 0, w: 'Каждый (в общем) → every + единственное.' },
  { q: '___ of the children got a present.', o: ['Each', 'Every', 'No'], a: 0, w: 'Перед of — each (every of — нельзя).' },
  { q: 'I’ve read ___ the books on this shelf.', o: ['all', 'every', 'each'], a: 0, w: 'All (of) the books.' },
  { q: '___ of the answers were correct. I got 0 out of 10.', o: ['None', 'Neither', 'No'], a: 0, w: 'Ни один из многих → none of.' },
  { k: 'form', q: 'I like ___ (оба) of them.', t: ['both'], w: 'Both of them.' },
  { k: 'form', q: '— Tea or coffee? — ___ (ни то, ни другое), thanks.', t: ['neither', 'neither of them'], w: 'Neither — ни то, ни другое.' },
  { k: 'fix', q: 'Every students must bring a pen.', t: ['Every student must bring a pen.', 'All students must bring a pen.', 'All the students must bring a pen.', 'Each student must bring a pen.'], w: 'Every + единственное: every student.' },
  { k: 'fix', q: 'Neither of them don’t like it.', t: ["Neither of them likes it.", 'Neither of them like it.'], w: 'Neither уже отрицательное — второе not не нужно.' },
  { k: 'err', q: 'Найдите ошибку: «Both of the answer are wrong.»', o: ['Both of', 'the answer', 'are wrong'], a: 1, w: 'Both of + множественное: the answers.' }
]
});
