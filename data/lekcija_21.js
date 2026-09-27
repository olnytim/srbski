// Lekcija 21 - Hobiji i slobodno vreme. Two 60-minute sessions: hobbies + baviti se, then potencijal.
COURSE.register({
  n: 21,
  title: 'Hobiji i slobodno vreme',
  ru: 'Хобби, baviti se + инструментал; сослагательное наклонение (potencijal)',

  vocab: [
    { id: 'trcati21', sr: 'trčati — trčanje', ru: 'бегать — бег', set: 'A' },
    { id: 'tenis', sr: 'tenis', ru: 'теннис', set: 'A' },
    { id: 'fudbal21', sr: 'fudbal', ru: 'футбол', set: 'A' },
    { id: 'kosarka', sr: 'košarka', ru: 'баскетбол', set: 'A' },
    { id: 'odbojka', sr: 'odbojka', ru: 'волейбол', set: 'A' },
    { id: 'joga', sr: 'joga', ru: 'йога', set: 'A' },
    { id: 'plivati21', sr: 'plivati — plivanje', ru: 'плавать — плавание', set: 'A' },
    { id: 'plesati', sr: 'plesati — ples', ru: 'танцевать — танец', set: 'A' },
    { id: 'slikati', sr: 'slikati', ru: 'рисовать / фотографировать', set: 'A' },
    { id: 'citati-knjige', sr: 'čitati knjige — čitanje', ru: 'читать книги — чтение', set: 'A' },
    { id: 'fotografisati', sr: 'fotografisati — fotografisanje', ru: 'фотографировать', set: 'A' },
    { id: 'gajiti-cvece', sr: 'gajiti cveće', ru: 'выращивать цветы', set: 'A' },
    { id: 'kuvati21', sr: 'kuvati — kuvanje', ru: 'готовить — готовка', set: 'A' },
    { id: 'rucni-rad', sr: 'ručni rad', ru: 'рукоделие', set: 'A' },
    { id: 'gledati-film', sr: 'gledati film / seriju — gledanje', ru: 'смотреть фильм / сериал', set: 'A' },
    { id: 'igrice', sr: 'igrati kompjuterske igrice', ru: 'играть в компьютерные игры', set: 'A' },
    { id: 'baviti-se', sr: 'baviti se (+ instrumental), ja se bavim', ru: 'заниматься, увлекаться', set: 'A' },
    { id: 'bavim-se-sportom', sr: 'Bavim se sportom i muzikom.', ru: 'Я занимаюсь спортом и музыкой.', set: 'A' },
    { id: 'osloboditi-se', sr: 'osloboditi se rutine i stresa', ru: 'освободиться от рутины и стресса', set: 'A' },
    { id: 'razvoj', sr: 'razvoj mozga, razvoj mašte', ru: 'развитие мозга, развитие воображения', set: 'A' },
    { id: 'novinar', sr: 'novinar — profesionalac', ru: 'журналист — профессионал', set: 'A' },
    { id: 'remont', sr: 'remont', ru: 'ремонт', set: 'A' },
    { id: 'filozofija', sr: 'filozofija', ru: 'философия', set: 'A' },
    { id: 'igrati-kolo', sr: 'igrati kolo — plesati ili igrati?', ru: 'танцевать коло', set: 'A' },
    { id: 'kolo', sr: 'kolo', ru: 'коло (южнославянский хоровод)', set: 'A' },

    { id: 'potencijal', sr: 'potencijal — bih, bi, bi, bismo, biste, bi', ru: 'сослагательное наклонение', set: 'B' },
    { id: 'hteo-bih', sr: 'hteo bih / htela bih', ru: 'я хотел бы / хотела бы', set: 'B' },
    { id: 'voleo-bih21', sr: 'Voleo bih da…', ru: 'Я бы хотел, чтобы…', set: 'B' },
    { id: 'molila-bih', sr: 'Molila bih čašu vode.', ru: 'Я бы попросила стакан воды.', set: 'B' },
    { id: 'da-li-biste', sr: 'Da li biste hteli popiti kafu?', ru: 'Вы бы хотели выпить кофе?', set: 'B' },
    { id: 'bih-kratko', sr: '— Da li bi ti želeo…? — Bih!', ru: '— Ты бы хотел…? — Хотел бы!', set: 'B' },
    { id: 'rado', sr: 'rado — rado bismo išli', ru: 'охотно — мы бы охотно пошли', set: 'B' },
    { id: 'skijanje', sr: 'skijanje', ru: 'катание на лыжах', set: 'B' },
    { id: 'planinarenje', sr: 'planinarenje', ru: 'горный туризм', set: 'B' },
    { id: 'strpljenje', sr: 'strpljenje', ru: 'терпение', set: 'B' },
    { id: 'svirati', sr: 'svirati muzički instrument', ru: 'играть на музыкальном инструменте', set: 'B' },
    { id: 'masta', sr: 'mašta', ru: 'воображение', set: 'B' },
    { id: 'civilizacija', sr: 'stare civilizacije', ru: 'древние цивилизации', set: 'B' },
    { id: 'ako', sr: 'ako — Ako bih imao vremena, bavio bih se…', ru: 'если — Если бы у меня было время…', set: 'B' },
    { id: 'kad-bih', sr: 'Kad bih mogao…', ru: 'Если бы я мог…', set: 'B' },
    { id: 'maraton', sr: 'godišnji prolećni maraton', ru: 'ежегодный весенний марафон', set: 'B' },
    { id: 'pozorisne-karte', sr: 'pozorišne karte', ru: 'билеты в театр', set: 'B' },
    { id: 'crtati', sr: 'crtati, ja crtam', ru: 'рисовать', set: 'B' },
    { id: 'postati', sr: 'postati — postao bi pilot', ru: 'стать — он стал бы пилотом', set: 'B' },
    { id: 'hitovi', sr: 'rok hitovi', ru: 'рок-хиты', set: 'B' },
    { id: 'zaraditi', sr: 'zaraditi mnogo novca', ru: 'заработать много денег', set: 'B' },
    { id: 'sirom-sveta', sr: 'širom sveta', ru: 'по всему миру', set: 'B' },
    { id: 'pre-svega', sr: 'pre svega', ru: 'прежде всего', set: 'B' }
  ],

  verbs: {
    hteti: { inf: 'hteti', ru: 'хотеть', l: { m: 'hteo', f: 'htela', n: 'htelo', mpl: 'hteli', fpl: 'htele' } },
    voleti: { inf: 'voleti', ru: 'любить', l: { m: 'voleo', f: 'volela', n: 'volelo', mpl: 'voleli', fpl: 'volele' } },
    ici: { inf: 'ići', ru: 'идти', l: { m: 'išao', f: 'išla', n: 'išlo', mpl: 'išli', fpl: 'išle' } },
    kupiti: { inf: 'kupiti', ru: 'купить', l: { m: 'kupio', f: 'kupila', n: 'kupilo', mpl: 'kupili', fpl: 'kupile' } },
    putovati: { inf: 'putovati', ru: 'путешествовать', l: { m: 'putovao', f: 'putovala', n: 'putovalo', mpl: 'putovali', fpl: 'putovale' } },
    baviti: { inf: 'baviti se', ru: 'заниматься', pos: { ja: 'se bavim', ti: 'se baviš', on: 'se bavi', mi: 'se bavimo', vi: 'se bavite', oni: 'se bave' }, neg: { ja: 'se ne bavim', ti: 'se ne baviš', on: 'se ne bavi', mi: 'se ne bavimo', vi: 'se ne bavite', oni: 'se ne bave' }, l: { m: 'se bavio', f: 'se bavila', n: 'se bavilo', mpl: 'se bavili', fpl: 'se bavile' } },
    uciti: { inf: 'učiti', ru: 'учить', l: { m: 'učio', f: 'učila', n: 'učilo', mpl: 'učili', fpl: 'učile' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '21.1',
      title: 'Šta je vaš hobi?',
      ru: 'Хобби, отглагольные существительные на -nje, baviti se + инструментал',
      goals: [
        'назвать 16 хобби и образовать существительное: plivati → plivanje',
        'сказать, чем занимаетесь: bavim se sportom',
        'рассказать о своём хобби и расспросить партнёра'
      ],
      blocks: [
        {
          type: 'text', min: 6, title: 'Šta je vaš hobi? · хобби',
          note: 'Нажимайте на слова и повторяйте. В курсе два слайда: активные и спокойные хобби.',
          img: 'img/l21_hobiji.png',
          tables: [
            { caption: 'Aktivni hobiji', head: ['', '', '', ''], rows: [['trčati — бегать', 'tenis — теннис', 'fudbal — футбол', 'košarka — баскетбол'], ['odbojka — волейбол', 'joga — йога', 'plivati — плавать', 'plesati — танцевать']] },
            { caption: 'Mirni hobiji', head: ['', '', '', ''], rows: [['slikati — рисовать', 'čitati knjige — читать', 'fotografisati — фотографировать', 'gajiti cveće — выращивать цветы'], ['kuvati — готовить', 'ručni rad — рукоделие', 'gledati film / seriju', 'igrati kompjuterske igrice']] }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Napravite imenicu od glagola · существительное на -nje',
          note: 'Упражнение из курса. Пример: plivati → plivanje. Обратите внимание на первую букву.',
          items: [
            '{Trčanje} (trčati) je najbolji način da se oslobodite rutine i stresa.', '{Čitanje} (čitati) knjiga pomaže u razvoju vašeg mozga.', 'Najbolji način da provedete nedelju je {gledanje} (gledati) filmova.',
            '{Slikanje} (slikati) pomaže u razvoju mašte.', 'Omiljeni hobi moje bake je {kuvanje} (kuvati).', 'Novinar je bio profesionalac u {fotografisanju} (fotografisati).'
          ]
        },
        {
          type: 'text', min: 3, title: 'Baviti se + Instrumental',
          html: '<p>[[baviti se]] — «заниматься, увлекаться», глагол и-группы, употребляется с творительным падежом: [[Bavim se sportom i muzikom.]] [[Čime se baviš?]] — Чем ты занимаешься?</p>'
        },
        {
          type: 'gap', min: 6, title: 'Upotrebite glagol i imenicu u pravilnom obliku · baviti se',
          note: 'Упражнение из курса: глагол в настоящем времени, существительное в инструментале.',
          items: [
            'Ja {se bavim plivanjem} (ja, baviti se, plivanje).', 'Marija {se bavi filozofijom} (baviti se, filozofija).', 'Moje komšije {se bave remontom} (baviti se, remont).',
            'Milica, nisam znao da {se baviš trčanjem} (ti, baviti se, trčanje).', 'Da li {se bavite fotografisanjem} (vi, baviti se, fotografisanje)?'
          ]
        },
        {
          type: 'text', min: 4, title: 'Zanimljivost · plesati ili igrati?',
          html: '<p>«Танцевать» по-сербски — и [[plesati]], и [[igrati]], что непривычно для русскоязычных. [[Igrati kolo]] — танцевать коло, южнославянский народный танец-хоровод, базовые движения которого знают все от мала до велика, поэтому его часто танцуют на праздниках.</p>' +
            '<p>В курсе — видео «Najveće Užičko kolo u Užicu — Licidersko srce» (YouTube, Oglasna tabla). Посмотрите дома.</p>'
        },
        {
          type: 'letters', min: 6, title: 'Pogodite, koji je ovo hobi · соберите хобби из букв',
          items: [
            { clue: 'igra sa loptom i košem', word: 'košarka' }, { clue: 'vežbe za telo i um', word: 'joga' }, { clue: 'kretanje u vodi', word: 'plivanje' },
            { clue: 'pokret uz muziku', word: 'plesanje' }, { clue: 'slike aparatom', word: 'fotografisanje' }, { clue: 'igra sa reketom', word: 'tenis' }
          ]
        },
        {
          type: 'conj', min: 4, title: 'Trening · baviti se',
          verbs: ['baviti'], rounds: 6
        },
        {
          type: 'speak', min: 20, title: 'Čime se baviš? · разговор о хобби',
          note: 'Расспросите друг друга; отвечайте с baviti se + инструментал и с существительными на -nje. Потом расскажите о хобби членов семьи. В конце — опрос: три хобби, которые вы хотели бы попробовать.',
          items: [
            { q: 'Čime se baviš u slobodno vreme?', sample: 'Bavim se trčanjem i fotografisanjem. Volim i kuvanje.' },
            { q: 'Koliko dugo se time baviš? Koliko često?', sample: 'Bavim se jogom dve godine, tri puta nedeljno.' },
            { q: 'Čime se bave tvoji roditelji, brat, sestra?', sample: 'Mama se bavi gajenjem cveća, tata se bavi ribolovom, brat igra košarku.' },
            { q: 'Da li voliš da plešeš? Da li si igrao / igrala kolo?', sample: 'Volim da plešem, ali nikad nisam igrala kolo.' },
            { q: 'Koji hobi bi želeo / želela da probaš?', sample: 'Želim da probam plivanje i ručni rad.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'trčati — trčanje, plivati — plivanje, kuvati — kuvanje, slikati — slikanje',
            'Bavim se sportom / jogom / fotografisanjem. Čime se baviš?',
            'plesati = igrati; igrati kolo',
            'Čitanje knjiga pomaže u razvoju mozga.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: хобби', est: 9, set: 'A' },
        {
          type: 'qa', mode: 'transform', title: 'Imenica na -nje · образуйте существительное', est: 5,
          items: [
            { q: 'plivati', a: ['plivanje'] }, { q: 'trčati', a: ['trčanje'] }, { q: 'čitati', a: ['čitanje'] }, { q: 'kuvati', a: ['kuvanje'] }, { q: 'slikati', a: ['slikanje'] },
            { q: 'gledati', a: ['gledanje'] }, { q: 'fotografisati', a: ['fotografisanje'] }, { q: 'plesati', a: ['plesanje'] }, { q: 'pevati', a: ['pevanje'] }, { q: 'putovati', a: ['putovanje'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Trčanje je najbolji način da se oslobodite stresa.'] }, { a: ['Čitanje knjiga pomaže u razvoju mozga.'] }, { a: ['Bavim se sportom i muzikom.'] },
            { a: ['Da li se bavite fotografisanjem?'] }, { a: ['Omiljeni hobi moje bake je kuvanje.'] }, { a: ['Volim da igram kolo na svadbama.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Я занимаюсь плаванием.', a: ['Bavim se plivanjem.', 'Ja se bavim plivanjem.'] },
            { q: 'Чем ты занимаешься в свободное время?', a: ['Čime se baviš u slobodno vreme?'] },
            { q: 'Мария занимается философией.', a: ['Marija se bavi filozofijom.'] },
            { q: 'Мои соседи занимаются ремонтом.', a: ['Moje komšije se bave remontom.'] },
            { q: 'Рисование помогает развитию воображения.', a: ['Slikanje pomaže u razvoju mašte.'] },
            { q: 'Я не знал, что ты занимаешься бегом.', a: ['Nisam znao da se baviš trčanjem.', 'Nisam znala da se baviš trčanjem.'] },
            { q: 'Лучший способ провести воскресенье — смотреть фильмы.', a: ['Najbolji način da provedete nedelju je gledanje filmova.', 'Najbolji način da se provede nedelja je gledanje filmova.'] }
          ]
        },
        {
          type: 'write', title: 'Moj hobi · текст о хобби + запись', est: 8, key: 'hw-21.1-hobi', record: true,
          note: '8 предложений: чем занимаетесь, как давно, как часто, почему нравится, чем занимались в детстве. Минимум три формы baviti se и два существительных на -nje. Запишите чтение вслух.',
          sample: 'Bavim se trčanjem tri godine. Trčim tri puta nedeljno u parku, jer trčanje pomaže da se oslobodim stresa. Bavim se i fotografisanjem: fotografišem ulice Beograda. U detinjstvu sam se bavio plivanjem i igrao sam fudbal. Moja devojka se bavi jogom i kuvanjem. Vikendom zajedno gledamo filmove. Želim da probam ples, možda kolo!'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '21.2',
      title: 'Potencijal',
      ru: 'Сослагательное наклонение: bih + причастие; вежливые просьбы; условия с ako / kad',
      goals: [
        'образовать потенциал: ja bih hteo, mi bismo išli',
        'вежливо попросить: Molila bih čašu vode. Da li biste hteli…?',
        'построить условие: Ako bih imao vremena, bavio bih se muzikom'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о хобби. Партнёр задаёт: Koliko dugo? Zašto?',
          items: [{ q: 'Bavim se…' }]
        },
        {
          type: 'text', min: 10, title: 'Potencijal · сослагательное наклонение',
          img: 'img/l21_potencijal.png',
          html:
            '<p><b>Potencijal</b> выражает возможное, предположительное или желательное действие (русское «пошёл бы, купила бы»). Образуется из <b>аориста глагола biti</b> (bih, bi, bi, bismo, biste, bi) + причастия на <b>-l</b>.</p>' +
            '<p>Форма <i>bi</i> — энклитика, не стоит в начале предложения: [[Hteo bih kafu.]] [[Ja bih hteo kafu.]] Но в разговорной речи как краткий ответ возможна: [[— Da li bi ti želeo da popiješ kafu sa mnom? — Bih!]]</p>' +
            '<p><b>Нормы этикета:</b> потенциал делает просьбу вежливой: [[Molila bih čašu vode.]] [[Da li biste hteli popiti kafu?]]</p>',
          tables: [
            { caption: 'hteti u potencijalu', head: ['jednina', 'množina'], rows: [['ja bih hteo / htela', 'mi bismo hteli / htele'], ['ti bi hteo / htela', 'vi biste hteli / htele'], ['on / ona bi hteo / htela', 'oni / one bi hteli / htele']] }
          ],
          after: '<p><b>Условие:</b> [[Ako bih imao više vremena, bavio bih se muzikom.]] [[Kad bismo mogli putovati kroz vreme, otišli bismo u prošlost.]] — оба глагола в потенциале.</p>'
        },
        {
          type: 'gap', min: 5, title: 'Ubacite pomoćni glagol biti · связка потенциала',
          note: 'Упражнение из курса.',
          items: [
            'Marija {bi} volela da gleda TV serije kod kuće po ceo dan.', 'Da li {bi} (ti) želeo da naučiš kineski?', 'Hvala na pozivu, rado {bismo} (mi) išli na skijanje!',
            'Da li {biste} (vi) popili limunadu ili nešto jače?', 'Bavio {bih} (ja) se sportom, ali nemam vremena.', 'Moji prijatelji {bi} hteli da idu na planinarenje.'
          ]
        },
        {
          type: 'gap', min: 7, title: 'Koristite oblik Potencijala · глагол + связка',
          note: 'Упражнение из курса. Род — мужской, если не указано.',
          items: [
            'Marko, ako {bi hteo} (hteti), {bi učio} (učiti) strane jezike.', 'Ako {bih imao} (imati, ja) više strpljenja, {bih naučio} (naučiti) da sviram muzički instrument.',
            'Kad {biste imali} (imati, vi) više vremena, {biste se bavili} (baviti se) fotografijom.', 'Ako Uroš {bi imao} (imati) više mašte, {bi počeo} (početi) da piše knjige.',
            'Kad {bismo mogli} (moći, mi) putovati kroz vreme, {bismo otišli} (otići) u prošlost da vidimo stare civilizacije.'
          ]
        },
        {
          type: 'mc', min: 6, title: 'Odredite oblik glagola · какое время или наклонение',
          note: 'Упражнение из курса.',
          items: [
            { q: 'Trčaćemo godišnji prolećni maraton.', options: ['Potencijal', 'Sadašnje vreme', 'Futur', 'Perfekat'], a: 'Futur' },
            { q: 'Hteli bismo da kupimo dve pozorišne karte.', options: ['Perfekat', 'Potencijal', 'Futur', 'Imperativ'], a: 'Potencijal' },
            { q: 'Moj glavni zadatak je da naučim da crtam.', options: ['Sadašnje vreme', 'Perfekat', 'Potencijal', 'Imperativ'], a: 'Sadašnje vreme' },
            { q: 'Mihailo, spremi mi šopsku salatu i pileću supu.', options: ['Potencijal', 'Perfekat', 'Sadašnje vreme', 'Imperativ'], a: 'Imperativ' },
            { q: 'Prošlog vikenda sam posetio muzej.', options: ['Imperativ', 'Sadašnje vreme', 'Potencijal', 'Perfekat'], a: 'Perfekat' },
            { q: 'Voleo je da se bavi sportom.', options: ['Imperativ', 'Sadašnje vreme', 'Perfekat', 'Potencijal'], a: 'Perfekat' },
            { q: 'Voleo bi da postane pilot.', options: ['Perfekat', 'Sadašnje vreme', 'Imperativ', 'Potencijal'], a: 'Potencijal' }
          ]
        },
        {
          type: 'gap', min: 7, title: 'Napišite glagol u pravilnom obliku Potencijala · текст',
          note: 'Упражнение из курса: мечты музыканта. Род — мужской.',
          listen: true,
          items: [
            'Ako {bih imao} (imati, ja) više slobodnog vremena, {bih se bavio} (baviti se) muzikom. {Kupio bih} (kupiti) gitaru i klavir i {naučio bih} (naučiti) da pišem rok hitove.',
            'Jednog dana {postao bih} (postati) poznat i {zaradio bih} (zaraditi) mnogo novca. Ako {bih imao} (imati) mnogo novca, {putovao bih} (putovati) širom sveta.',
            'Pre svega {otišao bih} (otići) u Južnu Ameriku i {završio bih} (završiti) svoje putovanje u Indiji.'
          ]
        },
        {
          type: 'conj', tense: 'pot', min: 5, title: 'Trening · потенциал вслух',
          note: 'Форма: ja bih hteo / ona bi htela / mi bismo išli.',
          verbs: ['hteti', 'voleti', 'ici', 'kupiti', 'putovati', 'uciti'], rounds: 8
        },
        {
          type: 'speak', min: 12, title: 'Šta bi radio, kad bi…? · мечты в потенциале',
          note: 'Ответьте друг другу; каждый ответ — два глагола в потенциале. Потом вежливые просьбы: попросите партнёра о трёх вещах через Molio bih… / Da li biste…',
          items: [
            { q: 'Šta bi radio / radila, kad bi imao / imala više slobodnog vremena?', sample: 'Kad bih imala više vremena, bavila bih se slikanjem i učila bih italijanski.' },
            { q: 'Kuda bi putovao / putovala, kad bi imao / imala mnogo novca?', sample: 'Putovao bih širom sveta, pre svega otišao bih u Japan.' },
            { q: 'Šta bi hteo / htela da postaneš?', sample: 'Htela bih da postanem fotograf.' },
            { q: 'Molio bih… / Da li biste…', sample: 'Molio bih čašu vode. Da li biste mi pomogli sa domaćim zadatkom?' }
          ]
        },
        {
          type: 'summary', min: 4, title: 'Rezime · итог занятия',
          points: [
            'bih, bi, bi, bismo, biste, bi + hteo / htela / hteli',
            'Hteo bih kafu. Ja bih hteo kafu. — bi не в начале',
            'Molila bih čašu vode. Da li biste hteli…? — вежливая просьба',
            'Ako bih imao vremena, bavio bih se muzikom.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: потенциал и слова занятия', est: 8, set: 'B' },
        { type: 'conj', tense: 'pot', title: 'Тренажёр: потенциал', est: 6, verbs: ['hteti', 'voleti', 'ici', 'kupiti', 'putovati', 'uciti'], rounds: 14 },
        {
          type: 'qa', mode: 'transform', title: 'Prezent → potencijal', est: 5,
          note: 'Перепишите в потенциале, род — мужской. Пример: Hoću kafu. → Hteo bih kafu.',
          items: [
            { q: 'Hoću kafu.', a: ['Hteo bih kafu.', 'Ja bih hteo kafu.'] }, { q: 'Idemo na skijanje.', a: ['Išli bismo na skijanje.', 'Mi bismo išli na skijanje.'] }, { q: 'Ona voli da čita.', a: ['Ona bi volela da čita.', 'Volela bi da čita.'] },
            { q: 'Kupujem gitaru.', a: ['Kupio bih gitaru.', 'Ja bih kupio gitaru.'] }, { q: 'Putujete širom sveta.', a: ['Putovali biste širom sveta.', 'Vi biste putovali širom sveta.'] }, { q: 'Oni uče kineski.', a: ['Oni bi učili kineski.', 'Učili bi kineski.'] },
            { q: 'Molim čašu vode.', a: ['Molio bih čašu vode.', 'Ja bih molio čašu vode.'] }, { q: 'Da li želiš kafu?', a: ['Da li bi želeo kafu?', 'Da li bi ti želeo kafu?'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Da li bi ti želeo da popiješ kafu sa mnom?'] }, { a: ['Molila bih čašu vode.'] }, { a: ['Rado bismo išli na skijanje!'] },
            { a: ['Bavio bih se sportom, ali nemam vremena.'] }, { a: ['Kupio bih gitaru i naučio bih da pišem rok hitove.'] }, { a: ['Voleo bi da postane pilot.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я бы хотел выпить кофе.', a: ['Hteo bih da popijem kafu.', 'Ja bih hteo da popijem kafu.', 'Hteo bih popiti kafu.'] },
            { q: 'Вы бы хотели лимонад или что-нибудь покрепче?', a: ['Da li biste hteli limunadu ili nešto jače?', 'Da li biste popili limunadu ili nešto jače?'] },
            { q: 'Мои друзья хотели бы пойти в горы.', a: ['Moji prijatelji bi hteli da idu na planinarenje.'] },
            { q: 'Если бы у меня было больше времени, я бы занимался музыкой.', a: ['Ako bih imao više vremena, bavio bih se muzikom.', 'Kad bih imao više vremena, bavio bih se muzikom.'] },
            { q: 'Она бы хотела стать пилотом.', a: ['Ona bi htela da postane pilot.', 'Htela bi da postane pilot.'] },
            { q: 'Мы бы охотно пошли с вами.', a: ['Rado bismo išli sa vama.', 'Mi bismo rado išli sa vama.'] },
            { q: 'Я бы попросила стакан воды.', a: ['Molila bih čašu vode.'] },
            { q: 'Ты бы хотел выучить китайский?', a: ['Da li bi želeo da naučiš kineski?', 'Da li bi hteo da naučiš kineski?'] }
          ]
        },
        {
          type: 'write', title: 'Kad bih imao milion · сочинение в потенциале + запись', est: 10, key: 'hw-21.2-milion', record: true,
          note: '10 предложений: что бы вы делали, если бы у вас был миллион евро и год свободного времени. Каждое предложение — в потенциале. Запишите чтение вслух.',
          sample: 'Kad bih imao milion evra i godinu dana slobodnog vremena, prvo bih putovao širom sveta. Otišao bih u Japan i Južnu Ameriku. Kupio bih kuću na moru. Bavio bih se fotografisanjem svaki dan. Naučio bih da sviram klavir. Pozvao bih prijatelje na veliku slavu. Ne bih radio ni jedan dan! Možda bih otvorio mali kafić. Pomogao bih roditeljima. Bio bih veoma srećan.'
        }
      ]
    }
  ]
});
