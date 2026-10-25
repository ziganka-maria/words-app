// уроки грамматики: блоки p/h/ex/table/tip/warn, вопросы: o — варианты (a — номер верного), t — ответы для ввода
window.GRAMMAR = window.GRAMMAR || {};
GRAMMAR.de = [
{ id: 'de-g1', level: 'A2', title: 'Perfekt: разговорное прошедшее', sub: 'haben / sein + Partizip II',
  blocks: [
    { t: 'p', h: 'Рассказывая о прошлом, немцы в разговоре почти всегда используют Perfekt. Он состоит из двух частей: <b>haben</b> или <b>sein</b> на втором месте и <b>Partizip II</b> в самом конце предложения.' },
    { t: 'ex', rows: [
      ['Ich habe gestern Pizza gegessen.', 'Я вчера ел пиццу.'],
      ['Wir sind nach Hamburg gefahren.', 'Мы съездили в Гамбург.'],
      ['Hast du schon gefrühstückt?', 'Ты уже позавтракал?']
    ]},
    { t: 'h', h: 'Как образовать Partizip II' },
    { t: 'table', head: ['Тип глагола', 'Схема', 'Пример'], rows: [
      ['Слабые', 'ge + основа + t', 'machen → gemacht<br>spielen → gespielt'],
      ['Сильные', 'ge + основа + en<br>(основа часто меняется)', 'essen → gegessen<br>schreiben → geschrieben'],
      ['С отделяемой приставкой', 'приставка + ge + …', 'einkaufen → eingekauft<br>aufmachen → aufgemacht'],
      ['На -ieren и с be-, ver-, er-…', 'без ge', 'studieren → studiert<br>besuchen → besucht']
    ]},
    { t: 'h', h: 'haben или sein?' },
    { t: 'p', h: 'Почти все глаголы — с <b>haben</b>. С <b>sein</b> — глаголы движения (gehen, fahren, kommen, fliegen), изменения состояния (aufstehen, einschlafen), а ещё sein, bleiben, werden.' },
    { t: 'ex', rows: [
      ['Ich bin ins Kino gegangen.', 'Я сходил в кино.'],
      ['Sie ist zu Hause geblieben.', 'Она осталась дома.'],
      ['Er ist um sechs aufgestanden.', 'Он встал в шесть.']
    ]},
    { t: 'tip', h: 'Главное — «рамка»: haben/sein стоит на втором месте, а Partizip II уходит в самый конец: Ich <b>habe</b> gestern mit Anna im Café Kaffee <b>getrunken</b>. В вопросе без вопросительного слова haben/sein встаёт на первое место: <b>Hast</b> du schon <b>gefrühstückt</b>?' },
    { t: 'warn', h: 'Исключения: с sein, haben и модальными глаголами в речи обычно берут простое прошедшее — <b>ich war, ich hatte, ich konnte</b>. «Ich war gestern müde» звучит естественнее, чем «Ich bin gestern müde gewesen».' }
  ],
  quiz: [
    { q: 'Ich ___ gestern lange geschlafen.', o: ['habe', 'bin', 'hat'], a: 0, w: 'schlafen — не движение, значит haben.' },
    { q: 'Wir ___ nach Berlin gefahren.', o: ['haben', 'sind', 'ist'], a: 1, w: 'fahren — движение, значит sein; wir → sind.' },
    { q: 'Partizip II от machen:', t: ['gemacht'], w: 'Слабый глагол: ge + mach + t.' },
    { q: 'Partizip II от essen:', t: ['gegessen'], w: 'essen → gegessen — особая форма, её просто запоминают.' },
    { q: 'Er hat das Fenster ___.', o: ['aufgemacht', 'geaufmacht', 'aufgemachen'], a: 0, w: 'Отделяемая приставка: auf + ge + macht.' },
    { q: 'Sie ___ zu Hause geblieben.', o: ['hat', 'ist', 'sind'], a: 1, w: 'bleiben — с sein.' },
    { q: 'Ich habe Medizin ___. (studieren)', o: ['gestudiert', 'studiert', 'studieren'], a: 1, w: 'Глаголы на -ieren — без ge.' },
    { q: 'Как естественнее сказать «Я вчера был дома»?', o: ['Ich war gestern zu Hause.', 'Ich bin gestern zu Hause gewesen.'], a: 0, w: 'С sein в речи обычно Präteritum: ich war.' }
  ]
},
{ id: 'de-g2', level: 'A2', title: 'Как говорят на самом деле', sub: "hab, gibt's, 'ne, nix — разговорные сокращения",
  blocks: [
    { t: 'p', h: 'В живой речи немцы «глотают» окончания и склеивают слова. В чатах и субтитрах на месте пропавших букв часто стоит апостроф. Пугаться не надо: это те же самые слова.' },
    { t: 'table', head: ['Полная форма', 'В речи', 'Пример'], rows: [
      ['ich habe', 'ich hab', 'Ich hab Hunger.'],
      ['es gibt', "gibt's", "Was gibt's Neues?"],
      ['wie geht es', "wie geht's", "Wie geht's dir?"],
      ['eine', "'ne", "Gib mir 'ne Minute."],
      ['einen', "'nen", "Ich brauch 'nen Kaffee."],
      ['nicht', 'nich', 'Ich weiß nich.'],
      ['etwas', 'was', 'Hast du was zu trinken?'],
      ['nichts', 'nix', 'Ich hab nix gehört.'],
      ['nein', 'nee / nö', 'Nö, keine Lust.']
    ]},
    { t: 'tip', h: '<b>was</b> в значении «что-нибудь» — частая ловушка. В «Hast du <b>was</b> zu trinken?» это не вопрос «что?», а сокращение от <b>etwas</b>: «Есть что-нибудь попить?»' },
    { t: 'tip', h: "'ne и 'nen подчиняются тем же правилам, что eine и einen: die Minute → 'ne Minute, der Kaffee (кого? что?) → 'nen Kaffee." },
    { t: 'warn', h: 'В письмах, на собеседовании и на экзаменах (Goethe, telc) пишите полные формы: ich habe, nicht, etwas, nichts. Разговорные — для друзей и чатов.' }
  ],
  quiz: [
    { q: "Ich hab 'nen Bruder. — 'nen значит…", o: ['einen', 'eine', 'nicht'], a: 0, w: "'nen = einen (der Bruder, кого? — einen)." },
    { q: "Gib mir mal 'ne Minute. — 'ne значит…", o: ['nein', 'eine', 'nicht'], a: 1, w: "'ne = eine (die Minute)." },
    { q: 'Hast du ___ zu essen? (что-нибудь)', o: ['was', 'wer', 'wo'], a: 0, w: 'was = etwas.' },
    { q: 'Ich hab nix gehört. — nix значит…', o: ['nichts', 'nicht', 'nie'], a: 0, w: 'nix = nichts, «ничего».' },
    { q: "Напишите полностью: gibt's → gibt …", t: ['es', 'gibt es'], w: "gibt's = gibt es." },
    { q: 'Что подходит для письма в компанию?', o: ['Ich hab leider keine Zeit.', 'Ich habe leider keine Zeit.'], a: 1, w: 'В письмах — полная форма ich habe.' },
    { q: "Wie ___ dir? (как дела)", o: ["geht's", "gibt's", 'gehts nich'], a: 0, w: "Wie geht's? = Wie geht es?" }
  ]
}
];
