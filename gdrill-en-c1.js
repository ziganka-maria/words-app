// Дополнительные вопросы для «Отработать», уровень C1: GDRILL[урок] — тот же вид, что quiz в grammar-en6.js
// Ошибки хранятся по номеру вопроса ('d3'), поэтому вопросы только дописываем в конец и не переставляем
window.GDRILL = window.GDRILL || {};
Object.assign(GDRILL, {
'en-inversion': [
  { q: 'Seldom ___ such talent in someone so young.', o: ['we see', 'do we see', 'we do see'], a: 1, w: 'После seldom в начале — вспомогательный глагол перед подлежащим.' },
  { q: 'Not until I got home ___ I had lost my wallet.', o: ['I realised', 'did I realise', 'I did realise'], a: 1, w: 'Not until … — инверсия во второй части: did I realise.' },
  { q: 'Only after the meeting ___ the truth.', o: ['did she learn', 'she learned', 'she did learn'], a: 0, w: 'Only after … → did she learn.' },
  { q: 'Scarcely ___ the house when it started to rain.', o: ['had I left', 'I had left', 'did I leave'], a: 0, w: 'Scarcely had … when — схема как у hardly.' },
  { q: 'At no time ___ that he was lying.', o: ['she suspected', 'did she suspect', 'she did suspect'], a: 1, w: 'At no time → did she suspect.' },
  { q: 'Such ___ the noise that nobody could sleep.', o: ['was', 'it was', 'were'], a: 0, w: 'Such was the noise that… — инверсия с such.' },
  { q: 'Нужна ли инверсия? «Only Tom knew the answer.»', o: ['нет — only относится к подлежащему', 'да: Only did Tom know'], a: 0, w: 'Инверсия нужна, когда only + обстоятельство: Only then did…' },
  { q: 'Допишите: Not once ___ (he / thank) me. (впишите три слова)', t: ['did he thank'], w: 'Not once did he thank me.' },
  { q: 'Only once ___ me in ten years.', o: ['did he visit', 'he visited', 'he did visit'], a: 0, w: 'Only once в начале → did he visit.' }
],
'en-cleft': [
  { q: 'What annoys me ___ his attitude.', o: ['is', 'are', 'it is'], a: 0, w: 'What … is …' },
  { q: 'It was because of you ___ I stayed.', o: ['that', 'why', 'what'], a: 0, w: 'It was … that…' },
  { q: 'All I want ___ a cup of tea.', o: ['is', 'are', 'that'], a: 0, w: 'All I want is… — «всё, что мне нужно».' },
  { q: 'The reason ___ I called is to apologise.', o: ['why', 'what', 'that why'], a: 0, w: 'The reason why…' },
  { q: 'It’s not the money ___ matters, it’s the principle.', o: ['what', 'that', 'who'], a: 1, w: 'It’s … that…' },
  { q: 'What happened ___ that the car broke down.', o: ['was', 'is it', 'were'], a: 0, w: 'What happened was that…' },
  { q: 'Перепишите с усилением: She lost her keys. → What she did ___ lose her keys. (впишите)', t: ['was'], w: 'What she did was (to) lose…' },
  { q: 'It’s not his words ___ upset me, it’s his tone.', o: ['that', 'what', 'which'], a: 0, w: 'It’s not … that…, it’s …' },
  { q: 'It was only when I saw him ___ I remembered.', o: ['that', 'what', 'then'], a: 0, w: 'It was only when … that…' }
],
'en-impersonal': [
  { q: 'It ___ that the economy will grow next year.', o: ['expects', 'is expected', 'expected'], a: 1, w: 'It is expected that…' },
  { q: 'The thieves are thought ___ through the roof.', o: ['to get in', 'to have got in', 'getting in'], a: 1, w: 'Раньше → to have + 3-я форма.' },
  { q: 'She is said ___ very rich.', o: ['being', 'to be', 'be'], a: 1, w: 'is said to be — говорят, что она…' },
  { q: 'There are thought ___ over a thousand species here.', o: ['to be', 'being', 'that'], a: 0, w: 'There are thought to be…' },
  { q: 'The company is reported ___ losing money.', o: ['to be', 'that', 'be'], a: 0, w: 'is reported to be + -ing — процесс сейчас.' },
  { q: 'It is known ___ the castle was built in 1200.', o: ['that', 'to', 'what'], a: 0, w: 'It is known that…' },
  { q: 'Перепишите: People think he is hiding. → He is thought to ___ hiding. (впишите)', t: ['be'], w: 'He is thought to be hiding.' },
  { q: 'He is understood ___ the offer yesterday.', o: ['to accept', 'to have accepted'], a: 1, w: 'Принял вчера → to have accepted.' },
  { q: 'Где такая конструкция уместнее всего?', o: ['в новостях и отчётах', 'в сообщении другу'], a: 0, w: 'It is said that… — официальный, газетный стиль.' }
],
'en-unreal': [
  { q: 'It’s about time the council ___ the road.', o: ['fix', 'fixed', 'will fix'], a: 1, w: 'It’s (about) time + Past — давно пора.' },
  { q: 'Would you rather I ___ you a lift?', o: ['give', 'gave', 'will give'], a: 1, w: 'would rather + Past.' },
  { q: 'She acted as though nothing ___.', o: ['happens', 'had happened', 'will happen'], a: 1, w: 'О прошлом — as though + had happened.' },
  { q: 'Suppose you ___ the job — would you move?', o: ['get', 'got', 'will get'], a: 1, w: 'Suppose + Past — гипотеза.' },
  { q: 'The committee recommended that the rule ___ changed.', o: ['is', 'be', 'was'], a: 1, w: 'Сослагательное: recommend that + be.' },
  { q: 'It’s vital that every guest ___ a ticket. (формально, сослагательное)', o: ['has', 'have', 'had'], a: 1, w: 'Сослагательное: that + have (без -s); в британской речи бывает и has.' },
  { q: 'He looked as if he ___ a ghost.', o: ['saw', 'has seen', 'had seen'], a: 2, w: 'О прошлом в прошлом — as if + had seen.' },
  { q: 'Допишите: I’d sooner you ___ (pay) by card. (впишите)', t: ['paid'], w: 'would sooner + Past: paid.' },
  { q: 'If only he ___ listen to me!', o: ['will', 'would', 'is'], a: 1, w: 'If only + would — досада, хочется перемены.' }
],
'en-cond-adv': [
  { q: '___ he apologise, I will forgive him.', o: ['Should', 'Would', 'Had'], a: 0, w: 'Should + подлежащее = if he should…' },
  { q: '___ it not been for you, I would have failed.', o: ['Had', 'Were', 'Should'], a: 0, w: 'Had it not been for… = If it hadn’t been for…' },
  { q: '___ the weather be bad, the event will move indoors.', o: ['Should', 'Were', 'Had'], a: 0, w: 'Should the weather be bad…' },
  { q: 'You can borrow it ___ you bring it back tomorrow.', o: ['providing', 'unless', 'otherwise'], a: 0, w: 'providing = при условии, что.' },
  { q: 'Take a map, ___ you’ll get lost.', o: ['otherwise', 'unless', 'provided'], a: 0, w: 'otherwise — иначе.' },
  { q: '___ you require further information, please contact us.', o: ['Should', 'Would', 'Had'], a: 0, w: 'Should you require… = If you require…' },
  { q: '___ we to accept, what would happen?', o: ['Were', 'Had', 'Should'], a: 0, w: 'Were we to… — очень маловероятное условие.' },
  { q: 'Перепишите: If it were not for you… → ___ it not for you… (впишите)', t: ['were'], w: 'Were it not for…' },
  { q: 'I’ll go, ___ you come with me.', o: ['on condition that', 'in case', 'otherwise'], a: 0, w: 'on condition that — при условии, что.' }
],
'en-ellipsis': [
  { q: 'Are you coming? — I think ___.', o: ['so', 'it', 'yes'], a: 0, w: 'I think so.' },
  { q: 'She can’t swim, and ___ can I.', o: ['neither', 'so', 'either'], a: 0, w: 'Neither can I — я тоже не умею.' },
  { q: 'I’m not hungry. — I’m not ___.', o: ['either', 'too', 'neither'], a: 0, w: 'В отрицании «тоже» — either.' },
  { q: 'I haven’t finished, but Tom ___.', o: ['has', 'did', 'have'], a: 0, w: 'Повторяем только вспомогательный: Tom has.' },
  { q: 'Which cake would you like? — The chocolate ___.', o: ['one', 'ones', 'it'], a: 0, w: 'one вместо повторения существительного.' },
  { q: 'Is it going to rain? — I hope ___.', o: ['not', "don't", 'no'], a: 0, w: 'I hope not.' },
  { q: 'He said he would help, and he ___.', o: ['did', 'helped it', 'was'], a: 0, w: 'and he did — сделал.' },
  { q: 'You don’t have to come if you don’t want ___. (впишите)', t: ['to'], w: 'Оставляем только to: if you don’t want to.' },
  { q: 'My brother likes jazz, and ___ my dad.', o: ['so does', 'so is', 'does so'], a: 0, w: 'so does + подлежащее.' }
]
});
