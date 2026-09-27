// Lekcija 5 - Ponavljanje. Review of lessons 1-4 in two 60-minute sessions; the final test is built from all four lessons.
COURSE.register({
  n: 5,
  title: 'Ponavljanje',
  ru: 'Повторение уроков 1–4: biti, imati, семья, страны, три спряжения, аккузатив',

  vocab: [
    { id: 'drugarica', sr: 'drug, drugarica', ru: 'друг, подруга (разг.)', set: 'A' },
    { id: 'devojke', sr: 'devojke', ru: 'девушки', set: 'A' },
    { id: 'pravnik', sr: 'pravnik', ru: 'юрист', set: 'A' },
    { id: 'kafana', sr: 'kafana', ru: 'кафана (традиционный ресторан)', set: 'A' },
    { id: 'zgrada', sr: 'zgrada', ru: 'здание', set: 'A' },
    { id: 'knjiga', sr: 'knjiga', ru: 'книга', set: 'A' },
    { id: 'sto', sr: 'sto, na stolu', ru: 'стол, на столе', set: 'A' },
    { id: 'nego', sr: 'nego', ru: 'а (после отрицания): ne iz Kine, nego iz Koreje', set: 'A' },
    { id: 'braca', sr: 'brat — braća', ru: 'брат — братья', set: 'A' },
    { id: 'vesele-tetke', sr: 'vesele tetke', ru: 'весёлые тёти', set: 'A' },
    { id: 'kucni-ljubimac', sr: 'kućni ljubimac', ru: 'домашний питомец', set: 'A' },
    { id: 'jako', sr: 'jako', ru: 'очень, сильно', set: 'A' },
    { id: 'vreme', sr: 'vreme — nemamo vremena', ru: 'время — у нас нет времени', set: 'A' },
    { id: 'odavno', sr: 'Odavno se nismo čuli!', ru: 'Давно не слышались!', set: 'B' },
    { id: 'uskoro', sr: 'uskoro', ru: 'скоро', set: 'B' },
    { id: 'kakav', sr: 'Kakav život imaš!', ru: 'Какая у тебя жизнь!', set: 'B' },
    { id: 'bravo', sr: 'Bravo!', ru: 'Молодец!', set: 'B' },
    { id: 'kod-prijatelja', sr: 'kod prijatelja', ru: 'у друга', set: 'B' },
    { id: 'turisticka', sr: 'turistička agencija', ru: 'турагентство', set: 'B' },
    { id: 'pravni-fakultet', sr: 'pravni fakultet', ru: 'юридический факультет', set: 'B' },
    { id: 'izgledati', sr: 'izgledati, ja izgledam', ru: 'выглядеть', set: 'B' },
    { id: 'rano', sr: 'rano', ru: 'рано', set: 'B' },
    { id: 'ceo-dan', sr: 'ceo dan', ru: 'весь день', set: 'B' },
    { id: 'nista-posebno', sr: 'ništa posebno', ru: 'ничего особенного', set: 'B' },
    { id: 'razumeti', sr: 'razumeti, ja razumem', ru: 'понимать', set: 'B' },
    { id: 'cuti-se', sr: 'čuti se, čujemo se', ru: 'созваниваться, слышаться', set: 'B' },
    { id: 'vazi', sr: 'Važi!', ru: 'Ладно! Договорились!', set: 'B' },
    { id: 'svedska', sr: 'Švedska — Stokholm', ru: 'Швеция — Стокгольм', set: 'B' },
    { id: 'sarajevo', sr: 'Sarajevo, Ljubljana, Ankara, Atina, Tokio', ru: 'Сараево, Любляна, Анкара, Афины, Токио', set: 'B' }
  ],

  verbs: {
    biti: { inf: 'biti', ru: 'быть', pos: { ja: 'sam', ti: 'si', on: 'je', mi: 'smo', vi: 'ste', oni: 'su' }, neg: { ja: 'nisam', ti: 'nisi', on: 'nije', mi: 'nismo', vi: 'niste', oni: 'nisu' }, noQuestion: true },
    imati: { inf: 'imati', ru: 'иметь', pos: { ja: 'imam', ti: 'imaš', on: 'ima', mi: 'imamo', vi: 'imate', oni: 'imaju' }, neg: { ja: 'nemam', ti: 'nemaš', on: 'nema', mi: 'nemamo', vi: 'nemate', oni: 'nemaju' } },
    ziveti: { inf: 'živeti', ru: 'жить', pos: { ja: 'živim', ti: 'živiš', on: 'živi', mi: 'živimo', vi: 'živite', oni: 'žive' }, neg: { ja: 'ne živim', ti: 'ne živiš', on: 'ne živi', mi: 'ne živimo', vi: 'ne živite', oni: 'ne žive' } },
    voleti: { inf: 'voleti', ru: 'любить', pos: { ja: 'volim', ti: 'voliš', on: 'voli', mi: 'volimo', vi: 'volite', oni: 'vole' }, neg: { ja: 'ne volim', ti: 'ne voliš', on: 'ne voli', mi: 'ne volimo', vi: 'ne volite', oni: 'ne vole' } },
    raditi: { inf: 'raditi', ru: 'работать', pos: { ja: 'radim', ti: 'radiš', on: 'radi', mi: 'radimo', vi: 'radite', oni: 'rade' }, neg: { ja: 'ne radim', ti: 'ne radiš', on: 'ne radi', mi: 'ne radimo', vi: 'ne radite', oni: 'ne rade' } },
    jesti: { inf: 'jesti', ru: 'есть', pos: { ja: 'jedem', ti: 'jedeš', on: 'jede', mi: 'jedemo', vi: 'jedete', oni: 'jedu' }, neg: { ja: 'ne jedem', ti: 'ne jedeš', on: 'ne jede', mi: 'ne jedemo', vi: 'ne jedete', oni: 'ne jedu' } },
    piti: { inf: 'piti', ru: 'пить', pos: { ja: 'pijem', ti: 'piješ', on: 'pije', mi: 'pijemo', vi: 'pijete', oni: 'piju' }, neg: { ja: 'ne pijem', ti: 'ne piješ', on: 'ne pije', mi: 'ne pijemo', vi: 'ne pijete', oni: 'ne piju' } },
    putovati: { inf: 'putovati', ru: 'путешествовать', pos: { ja: 'putujem', ti: 'putuješ', on: 'putuje', mi: 'putujemo', vi: 'putujete', oni: 'putuju' }, neg: { ja: 'ne putujem', ti: 'ne putuješ', on: 'ne putuje', mi: 'ne putujemo', vi: 'ne putujete', oni: 'ne putuju' } },
    citati: { inf: 'čitati', ru: 'читать', pos: { ja: 'čitam', ti: 'čitaš', on: 'čita', mi: 'čitamo', vi: 'čitate', oni: 'čitaju' }, neg: { ja: 'ne čitam', ti: 'ne čitaš', on: 'ne čita', mi: 'ne čitamo', vi: 'ne čitate', oni: 'ne čitaju' } },
    pisati: { inf: 'pisati', ru: 'писать', pos: { ja: 'pišem', ti: 'pišeš', on: 'piše', mi: 'pišemo', vi: 'pišete', oni: 'pišu' }, neg: { ja: 'ne pišem', ti: 'ne pišeš', on: 'ne piše', mi: 'ne pišemo', vi: 'ne pišete', oni: 'ne pišu' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '5.1',
      title: 'Upoznavanje i porodica',
      ru: 'Повторение: biti, imati, семья, числа',
      goals: [
        'без запинки спрягать biti и imati в трёх формах',
        'назвать всех родственников и рассказать о семье',
        'перевести с русского фразы «у меня есть / нет»'
      ],
      blocks: [
        {
          type: 'text', min: 3, title: 'Kako radimo ponavljanje · как проходим повторение',
          html:
            '<p>Урок 5 — повторение первых четырёх. Новых правил нет, есть новые слова из диалогов. Сегодня — знакомство, biti, imati, семья и числа; на следующем занятии — страны, три спряжения и аккузатив, потом общий тест.</p>' +
            '<p>Перед занятием откройте раздел <b>Повторение</b> и пройдите карточки, которые накопились по расписанию: это и есть повторение словаря уроков 1–4.</p>',
          tables: [
            { caption: 'biti', head: ['', 'jednina', 'množina'], rows: [['+', 'sam, si, je', 'smo, ste, su'], ['−', 'nisam, nisi, nije', 'nismo, niste, nisu'], ['?', 'jesam, jesi, jeste', 'jesmo, jeste, jesu']] }
          ]
        },
        {
          type: 'gap', listen: true, min: 6, title: 'Hajde da se upoznamo · впишите формы biti',
          note: 'Три друга гуляют по парку. Заполните пропуски и прочитайте по ролям.',
          items: [
            '<b>Nenad:</b> Ćao! Kako se zovete?',
            '<b>Liljana:</b> Hej, zdravo, Liljana {sam}, a ovo {je} moja drugarica.',
            '<b>Katarina:</b> Drago mi je, ja {sam} Katarina.',
            '<b>Nenad:</b> Drago mi je takođe, odakle {ste}, devojke?',
            '<b>Liljana:</b> Mi {smo} iz Zrenjanina.',
            '<b>Katarina:</b> Odakle {si} ti i kako se zoveš?',
            '<b>Nenad:</b> Zovem se Nenad, ja {sam} iz Kruševca.'
          ]
        },
        {
          type: 'match', min: 6, title: 'Pitanje — odgovor · соедините вопрос и ответ',
          note: 'Прочитайте каждую пару вслух после того, как соединили.',
          pairs: [
            ['Ćao! Jesi li ti pravnik?', 'Ne, nisam pravnik, ja sam programer.'],
            ['Gde je moja knjiga?', 'Ona je na stolu.'],
            ['Dobar dan! Da li ste vi porodica Marić?', 'Zdravo! Ne, nismo, mi smo porodica Grujić.'],
            ['Odakle je ona? Iz Kine?', 'Nije iz Kine, nego iz Koreje.'],
            ['Da li je tvoj stric Hrvat?', 'Nije Hrvat, moj stric je Slovenac.'],
            ['Da li žive u Beogradu ili Novom Sadu?', 'Nisu Novosađani, Beograđani su, žive u Beogradu.'],
            ['Koja je ovo zgrada? Da li je ovo zgrada broj 5?', 'Ovo nije zgrada broj 5, ovo je zgrada broj 7.'],
            ['Da li smo u restoranu?', 'Niste u restoranu, to je kafana!']
          ]
        },
        {
          type: 'conj', min: 5, title: 'Biti i imati · тренажёр вслух',
          note: 'По очереди, не глядя в таблицу.',
          verbs: ['biti', 'imati'], rounds: 10
        },
        {
          type: 'gap', bank: true, min: 7, title: 'Porodično blago · кто это?',
          note: 'В оригинале были фотографии. Здесь — описания. Выберите слово из списка.',
          items: [
            'Ćerka mojih roditelja, mlada devojka — {sestra - sestre}.',
            'Mali dečak, sin mojih roditelja — {brat - braća}.',
            'Žena sa bebom — {mama, majka}.',
            'Muškarac koji uči ćerku — {tata, otac}.',
            'Stara žena sa kolačima — {baba, baka}.',
            'Star čovek u fotelji sa unucima — {deda, deka}.',
            'Moje dete, mali dečak — {sin}.',
            'Mala devojčica, moje dete — {ćerka}.',
            'Dve žene koje se smeju uz vino — {vesele tetke}.',
            'Brat moga oca — {stric (brat oca)}; brat moje majke — {ujak (brat majke)}.',
            'Pas u dvorištu — {kućni ljubimac}.'
          ]
        },
        {
          type: 'qa', mode: 'translate', min: 9, title: 'Prevedite · переведите на сербский',
          note: 'Сначала скажите вслух, потом запишите.',
          items: [
            { q: 'У меня есть брат.', a: ['Imam brata.', 'Ja imam brata.'] },
            { q: 'У тебя есть вода?', a: ['Da li imaš vodu?', 'Imaš li vodu?', 'Da li ti imaš vodu?'] },
            { q: 'У нас нет времени.', a: ['Nemamo vremena.', 'Mi nemamo vremena.'] },
            { q: 'У Драгана есть сестра.', a: ['Dragan ima sestru.'] },
            { q: 'Мирьяне 50 лет.', a: ['Mirjana ima 50 godina.', 'Mirjana ima pedeset godina.'] },
            { q: 'У Драгиши нет питомца, но он очень хочет.', a: ['Dragiša nema ljubimca, ali jako želi.', 'Dragiša nema kućnog ljubimca, ali jako želi.', 'Dragiša nema ljubimca, ali veoma želi.', 'Dragiša nema kućnog ljubimca, ali veoma želi.'] },
            { q: 'У вас большая или маленькая семья?', a: ['Da li imate veliku ili malu porodicu?', 'Imate li veliku ili malu porodicu?'] },
            { q: 'У Уроша и Анны нет детей.', a: ['Uroš i Ana nemaju decu.', 'Uroš i Ana nemaju dece.'] }
          ]
        },
        {
          type: 'numbers', mode: 'read', min: 5, title: 'Brojevi · числа вслух',
          note: 'Сначала 1–10 подряд, потом числа с экрана. Один читает, второй проверяет.',
          fixed: [7, 15, 21, 38, 52, 99, 104, 260, 1350], max: 9999
        },
        {
          type: 'numbers', mode: 'age', min: 4, title: 'Koliko imaš godina? · godinu / godine / godina', rounds: 8
        },
        {
          type: 'speak', min: 12, title: 'Moja porodica · интервью',
          note: 'Партнёр — журналист: задаёт минимум 8 вопросов о семье, вы отвечаете полными предложениями. Потом меняетесь. В конце журналист пересказывает 3 факта.',
          items: [
            { q: 'Kako se zoveš i odakle si?', sample: 'Zovem se Katja, iz Sankt Peterburga sam.' },
            { q: 'Da li imaš veliku porodicu? Ko su oni?', sample: 'Imam malu porodicu: mamu, tatu i brata.' },
            { q: 'Koliko godina imaju tvoji roditelji?', sample: 'Mama ima 56 godina, tata ima 58.' },
            { q: 'Da li imaš strica, ujaka, tetku?', sample: 'Imam tetku i ujaka. Nemam strica.' },
            { q: 'Da li imate kućnog ljubimca?', sample: 'Da, imamo mačku. Zove se Mura.' },
            { q: 'Jesi li udata? / Jesi li oženjen?', sample: 'Nisam udata. Imam dečka.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'sam, si, je… / nisam, nisi, nije… / jesam, jesi, jeste…',
            'imam, imaš, ima… / nemam, nemaš, nema…',
            'Nemamo vremena. Nemaju decu.',
            'Nije iz Kine, nego iz Koreje.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: новые слова диалогов', est: 5, set: 'A' },
        { type: 'conj', title: 'Тренажёр: biti и imati', est: 5, verbs: ['biti', 'imati'], rounds: 14 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Ovo je moja drugarica.'] }, { a: ['Odakle ste, devojke?'] }, { a: ['Nisam pravnik, ja sam programer.'] },
            { a: ['Nije iz Kine, nego iz Koreje.'] }, { a: ['Niste u restoranu, to je kafana!'] }, { a: ['Nemamo vremena.'] }
          ]
        },
        {
          type: 'qa', mode: 'transform', title: 'Negacija · сделайте отрицание', est: 5,
          items: [
            { q: 'Ja sam pravnik.', a: ['Ja nisam pravnik.', 'Nisam pravnik.'] }, { q: 'Imamo psa.', a: ['Nemamo psa.'] }, { q: 'Ona je iz Kine.', a: ['Ona nije iz Kine.', 'Nije iz Kine.'] },
            { q: 'Oni imaju decu.', a: ['Oni nemaju decu.', 'Nemaju decu.'] }, { q: 'Vi ste porodica Marić.', a: ['Vi niste porodica Marić.', 'Niste porodica Marić.'] }, { q: 'Ti imaš vremena.', a: ['Ti nemaš vremena.', 'Nemaš vremena.'] },
            { q: 'Mi smo u restoranu.', a: ['Mi nismo u restoranu.', 'Nismo u restoranu.'] }, { q: 'Moj stric ima auto.', a: ['Moj stric nema auto.'] }
          ]
        },
        {
          type: 'write', title: 'Porodica mog partnera · семья партнёра', est: 8, key: 'hw-5.1-partner',
          note: '6–8 предложений о семье партнёра по тому, что вы узнали в интервью. На следующем занятии партнёр проверит факты.',
          sample: 'Katja je iz Sankt Peterburga. Ima malu porodicu: mamu, tatu i brata. Mama ima 56 godina, tata ima 58. Brat živi u Moskvi. Ima tetku i ujaka, nema strica. Imaju mačku Muru. Katja nije udata, ima dečka.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '5.2',
      title: 'Svet, glagoli i akuzativ',
      ru: 'Повторение: страны, три спряжения, аккузатив; итоговый тест',
      goals: [
        'назвать страны, столицы и национальности',
        'спрягать глаголы всех трёх групп в одном тексте',
        'пройти итоговый тест по урокам 1–4'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · проверка фактов',
          note: 'Прочитайте партнёру домашний текст о его семье. Партнёр отвечает: Tačno! / Nije tačno, … и исправляет.',
          items: [{ q: 'Tvoja mama ima 56 godina, tačno?', sample: 'Nije tačno, ima 55 godina.' }]
        },
        {
          type: 'match', min: 6, title: 'Zastave · флаги',
          note: 'Назовите страну вслух, потом нажмите на её название.',
          pairs: [
            ['🇧🇦', 'Bosna i Hercegovina', 'Bosna i Hercegovina'], ['🇷🇸', 'Srbija', 'Srbija'], ['🇸🇪', 'Švedska', 'Švedska'], ['🇯🇵', 'Japan', 'Japan'],
            ['🇸🇮', 'Slovenija', 'Slovenija'], ['🇭🇷', 'Hrvatska', 'Hrvatska'], ['🇩🇪', 'Nemačka', 'Nemačka'], ['🇷🇺', 'Rusija', 'Rusija'],
            ['🇹🇷', 'Turska', 'Turska'], ['🇪🇸', 'Španija', 'Španija'], ['🇭🇺', 'Mađarska', 'Mađarska'], ['🇬🇷', 'Grčka', 'Grčka']
          ]
        },
        {
          type: 'gap', min: 6, title: 'Glavni gradovi i narodi · столица и житель',
          note: 'Впишите столицу и национальность (мужской род).',
          items: [
            'Bosna i Hercegovina — {Sarajevo}, {Bosanac}.', 'Srbija — {Beograd}, {Srbin}.', 'Švedska — {Stokholm}, Šveđanin (новое слово).', 'Japan — {Tokio}, {Japanac}.',
            'Slovenija — {Ljubljana}, {Slovenac}.', 'Hrvatska — {Zagreb}, {Hrvat}.', 'Nemačka — {Berlin}, {Nemac}.', 'Rusija — {Moskva}, {Rus}.',
            'Turska — {Ankara}, {Turčin}.', 'Španija — {Madrid}, {Španac}.', 'Mađarska — {Budimpešta}, {Mađar}.', 'Grčka — {Atina}, {Grk}.'
          ]
        },
        {
          type: 'text', min: 3, title: 'Tri grupe · три спряжения',
          html: '<p>Спряжение определяем по форме «я». Отрицание <i>ne</i> пишется отдельно (кроме nisam и nemam), вопрос — через <i>Da li</i>.</p>',
          tables: [
            { caption: 'Prezent', head: ['', 'a: imati', 'i: živeti', 'e: jesti'], rows: [['ja', 'imam', 'živim', 'jedem'], ['ti', 'imaš', 'živiš', 'jedeš'], ['on', 'ima', 'živi', 'jede'], ['mi', 'imamo', 'živimo', 'jedemo'], ['vi', 'imate', 'živite', 'jedete'], ['oni', 'imaju', 'žive', 'jedu']] }
          ]
        },
        {
          type: 'gap', listen: true, min: 10, title: 'Ritam života · все три спряжения',
          note: 'В скобках — инфинитив и лицо; «negacija» — нужна отрицательная форма. После проверки прочитайте по ролям.',
          items: [
            '<b>Sava:</b> Zdravo, Tijana! Odavno nismo se čuli, kako {si} (biti, ti)?',
            '<b>Tijana:</b> Hej, gde si? Stvarno! Ja {sam} (biti) odlično, sada {živim} (živeti, ja) u Beču, uskoro {putujem} (putovati, ja) u Ameriku.',
            '<b>Sava:</b> Oho! Kakav život {imaš} (imati, ti), bravo! Ja sada {stanujem} (stanovati) kod prijatelja u Beogradu. Ja {volim} (voleti) da {radim} (raditi) ovde.',
            '<b>Tijana:</b> A gde ti {radiš} (raditi)?',
            '<b>Sava:</b> Sada {radim} (raditi, ja) kao menadžer u turističkoj agenciji. A ti?',
            '<b>Tijana:</b> Trenutno {ne radim} (raditi, negacija), ali {studiram} (studirati, ja) na pravnom fakultetu.',
            '<b>Sava:</b> Kako {izgleda} (izgledati, on) dan studenta?',
            '<b>Tijana:</b> Rano {se budim} (buditi se, ja), {pijem} (piti, ja) kafu, {doručkujem} (doručkovati, ja), {studiram} (studirati, ja), {čitam} (čitati, ja) ceo dan… ništa posebno!',
            '<b>Sava:</b> Pa dobro, {razumem} (razumeti, ja). Ništa, {čujemo se} (čuti se, mi) još!',
            '<b>Tijana:</b> Važi, ćao-ćao!'
          ]
        },
        {
          type: 'conj', min: 5, title: 'Trening · глаголы вперемешку',
          verbs: ['ziveti', 'voleti', 'raditi', 'jesti', 'piti', 'putovati', 'citati', 'pisati'], rounds: 10
        },
        {
          type: 'mc', min: 6, title: 'Kviz · akuzativ',
          items: [
            { q: 'Pijem … svako jutro.', options: ['kafa', 'kafu', 'kafe'], a: 'kafu' },
            { q: 'Imam … i sestru.', options: ['brat', 'brata', 'bratu'], a: 'brata' },
            { q: 'Idemo u … u subotu.', options: ['prodavnica', 'prodavnicu', 'prodavnice'], a: 'prodavnicu' },
            { q: 'Volim … i prirodu.', options: ['more', 'mora', 'moru'], a: 'more' },
            { q: 'Zovem … utorkom.', options: ['mama', 'mamu', 'mame'], a: 'mamu' },
            { q: 'Vidim … na ulici.', options: ['Milan', 'Milana', 'Milanu'], a: 'Milana' },
            { q: 'Kupujemo … i vino.', options: ['mleko', 'mleka', 'mleku'], a: 'mleko' },
            { q: 'Oni putuju u ….', options: ['Bosna', 'Bosnu', 'Bosni'], a: 'Bosnu' },
            { q: 'Ona ima lepo ….', options: ['ime', 'imena', 'imenu'], a: 'ime' },
            { q: 'Šetamo se kroz ….', options: ['park', 'parka', 'parku'], a: 'park' }
          ]
        },
        {
          type: 'gap', min: 12, title: 'Test · итоговый тест по урокам 1–4',
          note: 'Без подсказок и таблиц. Заполняете вдвоём по очереди, потом проверяете и обсуждаете ошибки. Ошибки в диакритике считаются за половину.',
          items: [
            'Dobar dan! Ja {sam} Marko, {Srbin} sam, iz Srbije.',
            'Moja žena {je} Ruskinja, ona je iz {Rusije}.',
            'Da li {imaš} brata? — Ne, {nemam} brata, imam sestru.',
            'Baka ima sedamdeset jednu {godinu}, deda ima sedamdeset pet {godina}.',
            'Mi {živimo} (živeti) u Beogradu i {radimo} (raditi) u firmi.',
            'Ja {volim} (voleti) da {čitam} (čitati) knjige.',
            'Ujutru {pijem} (piti) kafu i {jedem} (jesti) hleb.',
            'Subotom {kupujemo} (kupovati, mi) namirnice i {idemo} (ići, mi) u park.',
            'Volim moju {sestru} (sestra) i mog {brata} (brat).',
            'Oni {putuju} (putovati) u {Hrvatsku} (Hrvatska).',
            'Veliki stan — veliki {stanovi}; lepa žena — lepe {žene}; tiho jezero — tiha {jezera}.',
            '{U sredu} (в эту среду) idem kod lekara, a {petkom} (по пятницам) večeramo u restoranu.'
          ]
        },
        {
          type: 'speak', min: 6, title: 'Kakav je tvoj život? · разговор',
          note: 'Свободный разговор по образцу диалога Савы и Тияны: где живёшь, где работаешь или учишься, как выглядит твой день. Минимум 6 реплик каждый.',
          items: [
            { q: 'Odavno se nismo čuli! Kako si? Gde si sada?', sample: 'Odlično sam. Sada živim u Beogradu.' },
            { q: 'Gde radiš? / Šta studiraš?', sample: 'Radim kao programer u IT firmi.' },
            { q: 'Kako izgleda tvoj dan?', sample: 'Rano se budim, pijem kafu, radim ceo dan… ništa posebno!' },
            { q: 'Kuda putuješ uskoro?', sample: 'Uskoro putujem u Crnu Goru, na more.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · что дальше',
          points: [
            'Уроки 1–4 закрыты: biti, imati, семья, страны, три спряжения, аккузатив',
            'Карточки продолжают приходить в «Повторение» по расписанию',
            'Odavno se nismo čuli! Čujemo se! Važi!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: слова диалога Савы и Тияны', est: 6, set: 'B' },
        { type: 'conj', title: 'Тренажёр: все глаголы уроков 1–4', est: 8, verbs: ['biti', 'imati', 'ziveti', 'voleti', 'raditi', 'jesti', 'piti', 'putovati', 'citati', 'pisati'], rounds: 20 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Odavno se nismo čuli!'] }, { a: ['Uskoro putujem u Ameriku.'] }, { a: ['Kakav život imaš, bravo!'] },
            { a: ['Studiram na pravnom fakultetu.'] }, { a: ['Rano se budim i pijem kafu.'] }, { a: ['Ništa, čujemo se još!'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод: всё вместе', est: 10,
          items: [
            { q: 'Я из России, я русский.', a: ['Ja sam iz Rusije, ja sam Rus.', 'Iz Rusije sam, Rus sam.', 'Ja sam iz Rusije, Rus sam.'] },
            { q: 'У меня нет брата, но есть сестра.', a: ['Nemam brata, ali imam sestru.', 'Ja nemam brata, ali imam sestru.'] },
            { q: 'Мне тридцать два года.', a: ['Imam trideset dve godine.', 'Ja imam trideset dve godine.', 'Imam 32 godine.'] },
            { q: 'Мы живём в Белграде и работаем в фирме.', a: ['Živimo u Beogradu i radimo u firmi.', 'Mi živimo u Beogradu i radimo u firmi.'] },
            { q: 'Утром я пью кофе и ем хлеб.', a: ['Ujutru pijem kafu i jedem hleb.', 'Ujutru ja pijem kafu i jedem hleb.'] },
            { q: 'По субботам мы покупаем продукты.', a: ['Subotom kupujemo namirnice.', 'Subotom mi kupujemo namirnice.'] },
            { q: 'Ты любишь читать книги?', a: ['Da li voliš da čitaš knjige?', 'Voliš li da čitaš knjige?', 'Da li ti voliš da čitaš knjige?'] },
            { q: 'Они едут в Хорватию.', a: ['Oni putuju u Hrvatsku.', 'Putuju u Hrvatsku.', 'Oni idu u Hrvatsku.'] },
            { q: 'Скоро увидимся! Договорились!', a: ['Uskoro se vidimo! Važi!', 'Vidimo se uskoro! Važi!'] },
            { q: 'Ничего особенного.', a: ['Ništa posebno.'] }
          ]
        },
        {
          type: 'write', title: 'Pismo prijatelju · письмо другу + запись', est: 12, key: 'hw-5.2-pismo', record: true,
          note: '12–15 предложений: письмо другу, которого давно не видели. Кто вы, где живёте, семья, чем занимаетесь, как выглядит день, планы на неделю. Используйте всё, что прошли. Запишите чтение вслух.',
          sample: 'Ćao, Marko! Odavno se nismo čuli! Ja sam odlično. Sada živim u Beogradu i radim kao programer. Imam malu porodicu: mamu, tatu i sestru. Sestra ima 25 godina i studira u Moskvi. Rano se budim, pijem kafu i idem na posao. Uveče čitam knjige i učim srpski. Subotom kupujemo namirnice, nedeljom se šetamo kroz park. Uskoro putujem u Crnu Goru. Čujemo se! Važi?'
        }
      ]
    }
  ]
});
