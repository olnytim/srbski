// Lekcija 8 - Tradicije. Three 60-minute sessions: seasons & holidays, perfekat, slava & traditions.
COURSE.register({
  n: 8,
  title: 'Tradicije',
  ru: 'Времена года, месяцы, праздники, прошедшее время (perfekat), слава',

  vocab: [
    { id: 'slava', sr: 'slava — Srećna slava!', ru: 'слава (семейный праздник святого) — С праздником!', set: 'A' },
    { id: 'pozvati8', sr: 'pozvati, ja pozovem — pozvao si nas', ru: 'пригласить — ты нас пригласил', set: 'A' },
    { id: 'izum', sr: 'izum', ru: 'изобретение', set: 'A' },
    { id: 'ocekivati', sr: 'očekivati, ja očekujem — Nisam ovo očekivao.', ru: 'ожидать — Этого я не ожидал.', set: 'A' },
    { id: 'postoji', sr: 'Postoji nešto važnije od…', ru: 'Есть кое-что важнее, чем…', set: 'A' },
    { id: 'dame-gospodo', sr: 'Dame i gospodo!', ru: 'Дамы и господа!', set: 'A' },
    { id: 'godisnja-doba', sr: 'godišnja doba', ru: 'времена года', set: 'A' },
    { id: 'zima', sr: 'zima — zimi', ru: 'зима — зимой', set: 'A' },
    { id: 'prolece', sr: 'proleće — u proleće', ru: 'весна — весной', set: 'A' },
    { id: 'leto', sr: 'leto — leti', ru: 'лето — летом', set: 'A' },
    { id: 'jesen', sr: 'jesen — u jesen', ru: 'осень — осенью', set: 'A' },
    { id: 'meseci-1', sr: 'januar, februar, mart, april', ru: 'январь, февраль, март, апрель', set: 'A' },
    { id: 'meseci-2', sr: 'maj, jun, jul, avgust', ru: 'май, июнь, июль, август', set: 'A' },
    { id: 'meseci-3', sr: 'septembar, oktobar, novembar, decembar', ru: 'сентябрь, октябрь, ноябрь, декабрь', set: 'A' },
    { id: 'u-mesecu', sr: 'u januaru, u martu, u avgustu', ru: 'в январе, в марте, в августе', set: 'A' },
    { id: 'datum', sr: '31. decembra, 8. marta, 1. maja', ru: '31 декабря, 8 марта, 1 мая', set: 'A' },
    { id: 'nova-godina', sr: 'Nova godina', ru: 'Новый год', set: 'A' },
    { id: 'bozic', sr: 'Božić — Srećan Božić!', ru: 'Рождество — С Рождеством!', set: 'A' },
    { id: 'uskrs', sr: 'Uskrs, Vaskrs — Hristos vaskrse!', ru: 'Пасха — Христос воскресе!', set: 'A' },
    { id: 'dan-zena', sr: 'Dan žena, Praznik rada, Dan pobede', ru: 'Женский день, День труда, День Победы', set: 'A' },
    { id: 'praznik', sr: 'praznik — praznici', ru: 'праздник — праздники', set: 'A' },
    { id: 'slaviti', sr: 'slaviti, ja slavim', ru: 'праздновать', set: 'A' },
    { id: 'rodjendan8', sr: 'U kom mesecu slaviš rođendan?', ru: 'В каком месяце ты празднуешь день рождения?', set: 'A' },
    { id: 'omiljeno-doba', sr: 'omiljeno godišnje doba', ru: 'любимое время года', set: 'A' },

    { id: 'perfekat', sr: 'perfekat — prošlo vreme', ru: 'перфект — прошедшее время', set: 'B' },
    { id: 'juce', sr: 'juče, prošle godine, prošle nedelje', ru: 'вчера, в прошлом году, на прошлой неделе', set: 'B' },
    { id: 'nikad', sr: 'nikad — Nikad nisam bio na slavi.', ru: 'никогда — Я никогда не был на славе.', set: 'B' },
    { id: 'poceti', sr: 'početi, ja počnem — počeo, počela', ru: 'начать', set: 'B' },
    { id: 'znati', sr: 'znati, ja znam — znao, znala', ru: 'знать', set: 'B' },
    { id: 'ozeniti-se8', sr: 'oženio se, udala se', ru: 'женился, вышла замуж', set: 'B' },
    { id: 'docekati', sr: 'dočekati, ja dočekam', ru: 'встречать (праздник)', set: 'B' },
    { id: 'kititi', sr: 'kititi, ja kitim — kititi jelku', ru: 'наряжать — наряжать ёлку', set: 'B' },
    { id: 'pripremiti', sr: 'pripremiti, ja pripremim', ru: 'приготовить', set: 'B' },
    { id: 'pokloniti', sr: 'pokloniti, ja poklonim', ru: 'подарить', set: 'B' },
    { id: 'jelka', sr: 'jelka', ru: 'ёлка', set: 'B' },
    { id: 'ukusan', sr: 'ukusna hrana', ru: 'вкусная еда', set: 'B' },
    { id: 'kutija', sr: 'kutija čokolade', ru: 'коробка шоколада', set: 'B' },
    { id: 'ogroman', sr: 'ogroman, ogromna', ru: 'огромный', set: 'B' },
    { id: 'bez', sr: 'bez vikenda', ru: 'без выходных', set: 'B' },
    { id: 'ostati', sr: 'ostati — ostao, ostala', ru: 'остаться', set: 'B' },
    { id: 'tresti', sr: 'tresti, tresem — tresao, tresla', ru: 'трясти', set: 'B' },
    { id: 'rasti', sr: 'rasti, rastem — rastao, rasla', ru: 'расти', set: 'B' },
    { id: 'krasti', sr: 'krasti, kradem — krao, krala', ru: 'красть', set: 'B' },
    { id: 'plesti', sr: 'plesti, pletem — pleo, plela', ru: 'вязать, плести', set: 'B' },
    { id: 'seci', sr: 'seći, sečem — sekao, sekla', ru: 'резать', set: 'B' },
    { id: 'reci', sr: 'reći, kažem — rekao, rekla', ru: 'сказать', set: 'B' },
    { id: 'doci', sr: 'doći — došao, došla; otići — otišao, otišla', ru: 'прийти; уйти', set: 'B' },

    { id: 'poslovica', sr: 'Gde ima slave, ima Srba.', ru: '«Где есть слава, там есть сербы» (пословица)', set: 'C' },
    { id: 'obicaj', sr: 'običaj — narodno-crkveni običaj', ru: 'обычай — народно-церковный обычай', set: 'C' },
    { id: 'ikona', sr: 'ikona', ru: 'икона', set: 'C' },
    { id: 'svetac', sr: 'svetac — hrišćanski svetac', ru: 'святой — христианский святой', set: 'C' },
    { id: 'zastitnik', sr: 'zaštitnik kuće i porodice', ru: 'защитник дома и семьи', set: 'C' },
    { id: 'pravoslavni', sr: 'pravoslavni kalendar', ru: 'православный календарь', set: 'C' },
    { id: 'najvazniji', sr: 'najvažniji dan', ru: 'самый важный день', set: 'C' },
    { id: 'najblizi', sr: 'najbliži', ru: 'самые близкие', set: 'C' },
    { id: 'slavski-kolac', sr: 'slavski kolač', ru: 'славский пирог (праздничный хлеб)', set: 'C' },
    { id: 'zito', sr: 'žito, koljivo', ru: 'кутья (варёная пшеница)', set: 'C' },
    { id: 'slavska-sveca', sr: 'slavska sveća', ru: 'славская свеча', set: 'C' },
    { id: 'goreti', sr: 'goreti — sveća gori', ru: 'гореть — свеча горит', set: 'C' },
    { id: 'peci', sr: 'peći — hleb se peče', ru: 'печь — хлеб печётся', set: 'C' },
    { id: 'nikoljdan', sr: 'Nikoljdan (19. decembra), Savindan (27. januara), Đurđevdan (6. maja)', ru: 'Николин день, Саввин день, Юрьев день', set: 'C' },
    { id: 'u-zavisnosti', sr: 'u zavisnosti od regiona', ru: 'в зависимости от региона', set: 'C' },
    { id: 'svuda', sr: 'svuda isti', ru: 'везде одинаковый', set: 'C' },
    { id: 'posvecen', sr: 'potpuno posvećen porodici', ru: 'полностью посвящён семье', set: 'C' },
    { id: 'verovati', sr: 'Veruje se da…', ru: 'Считается, что…', set: 'C' },
    { id: 'generacija', sr: 'slavi se generacijama', ru: 'празднуется поколениями', set: 'C' },
    { id: 'uci', sr: 'ući — Kada uđete u srpsku kuću…', ru: 'войти — Когда вы входите в сербский дом…', set: 'C' }
  ],

  verbs: {
    biti: { inf: 'biti', ru: 'быть', pos: { ja: 'sam', ti: 'si', on: 'je', mi: 'smo', vi: 'ste', oni: 'su' }, neg: { ja: 'nisam', ti: 'nisi', on: 'nije', mi: 'nismo', vi: 'niste', oni: 'nisu' }, noQuestion: true, l: { m: 'bio', f: 'bila', n: 'bilo', mpl: 'bili', fpl: 'bile' } },
    raditi: { inf: 'raditi', ru: 'работать', l: { m: 'radio', f: 'radila', n: 'radilo', mpl: 'radili', fpl: 'radile' } },
    citati: { inf: 'čitati', ru: 'читать', l: { m: 'čitao', f: 'čitala', n: 'čitalo', mpl: 'čitali', fpl: 'čitale' } },
    kupiti: { inf: 'kupiti', ru: 'купить', l: { m: 'kupio', f: 'kupila', n: 'kupilo', mpl: 'kupili', fpl: 'kupile' } },
    jesti: { inf: 'jesti', ru: 'есть', l: { m: 'jeo', f: 'jela', n: 'jelo', mpl: 'jeli', fpl: 'jele' } },
    ici: { inf: 'ići', ru: 'идти', l: { m: 'išao', f: 'išla', n: 'išlo', mpl: 'išli', fpl: 'išle' } },
    doci: { inf: 'doći', ru: 'прийти', l: { m: 'došao', f: 'došla', n: 'došlo', mpl: 'došli', fpl: 'došle' } },
    reci: { inf: 'reći', ru: 'сказать', l: { m: 'rekao', f: 'rekla', n: 'reklo', mpl: 'rekli', fpl: 'rekle' } },
    ziveti: { inf: 'živeti', ru: 'жить', l: { m: 'živeo', f: 'živela', n: 'živelo', mpl: 'živeli', fpl: 'živele' } },
    slaviti: { inf: 'slaviti', ru: 'праздновать', l: { m: 'slavio', f: 'slavila', n: 'slavilo', mpl: 'slavili', fpl: 'slavile' } },
    putovati: { inf: 'putovati', ru: 'путешествовать', l: { m: 'putovao', f: 'putovala', n: 'putovalo', mpl: 'putovali', fpl: 'putovale' } },
    pokloniti: { inf: 'pokloniti', ru: 'подарить', l: { m: 'poklonio', f: 'poklonila', n: 'poklonilo', mpl: 'poklonili', fpl: 'poklonile' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '8.1',
      title: 'Godišnja doba i praznici',
      ru: 'Времена года, месяцы, даты, праздники',
      goals: [
        'назвать времена года и 12 месяцев, сказать «зимой», «в марте»',
        'назвать дату праздника: 8. marta, 31. decembra',
        'рассказать, что делаете в разные сезоны'
      ],
      blocks: [
        {
          type: 'dialog', min: 6, title: 'Strip · Teslina slava',
          note: 'Тесла пригласил друзей на славу и показал новое изобретение. Прочитайте по ролям.',
          img: 'img/l8_strip.png',
          lines: [
            { who: 'Gosti', sr: 'Srećna slava!', ru: 'С праздником!' },
            { who: 'Gost', sr: 'Hvala što si nas pozvao na slavu.', ru: 'Спасибо, что пригласил нас на славу.' },
            { who: 'Nikola', sr: 'Postoji nešto važnije od slave…', ru: 'Есть кое-что важнее славы…' },
            { who: 'Nikola', sr: 'Dame i gospodo, moj novi izum!', ru: 'Дамы и господа, моё новое изобретение!' },
            { who: 'Nikola', sr: 'Nisam ovo očekivao…', ru: 'Этого я не ожидал…' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Godišnja doba i meseci · времена года и месяцы',
          img: 'img/l8_doba.png',
          html:
            '<p>В Сербии сезоны считают по астрономическому календарю, поэтому они начинаются позже: [[zima]] — до 20 марта, [[proleće]] — с 20 марта, [[leto]] — с 20 июня, [[jesen]] — с 22 сентября.</p>' +
            '<p>«Зимой, летом» — особые формы: [[zimi]], [[leti]]; «весной, осенью» — с предлогом: [[u proleće]], [[u jesen]].</p>' +
            '<p>Месяцы — в локативе: [[u januaru]], [[u martu]], [[u avgustu]]. Дата — порядковое число + месяц в родительном падеже: [[31. decembra]] — читается [[trideset prvog decembra]], [[8. marta]] — [[osmog marta]].</p>',
          tables: [
            { caption: 'Meseci', head: ['', '', '', ''], rows: [['januar', 'februar', 'mart', 'april'], ['maj', 'jun', 'jul', 'avgust'], ['septembar', 'oktobar', 'novembar', 'decembar']] },
            { caption: 'Kada?', head: ['doba', 'kada?', 'mesec', 'kada?'], rows: [['zima', 'zimi', 'januar', 'u januaru'], ['proleće', 'u proleće', 'april', 'u aprilu'], ['leto', 'leti', 'jul', 'u julu'], ['jesen', 'u jesen', 'oktobar', 'u oktobru']] }
          ]
        },
        {
          type: 'letters', min: 7, title: 'Meseci · соберите название месяца',
          items: [
            { clue: 'četvrti mesec', word: 'april' }, { clue: 'deveti mesec', word: 'septembar' }, { clue: 'prvi mesec', word: 'januar' },
            { clue: 'šesti mesec', word: 'jun' }, { clue: 'jedanaesti mesec', word: 'novembar' }, { clue: 'drugi mesec', word: 'februar' }, { clue: 'osmi mesec', word: 'avgust' }
          ]
        },
        {
          type: 'match', min: 6, title: 'Ruski praznici · праздник и дата',
          note: 'Прочитайте дату вслух: zimi, trideset prvog decembra.',
          pairs: [
            ['Nova godina', 'zimi, 31. decembra'], ['Dan žena', 'u proleće, 8. marta'], ['Praznik rada', 'u proleće, 1. maja'], ['Božić', 'zimi, 7. januara'],
            ['Dan branioca otadžbine', 'zimi, 23. februara'], ['Uskrs, Vaskrs', 'u proleće'], ['Dan znanja', 'u jesen, 1. septembra'], ['Dan pobede', 'u proleće, 9. maja']
          ]
        },
        {
          type: 'gap', min: 8, title: 'Kada? · впишите форму',
          items: [
            'Idem na more {leti} (leto).', 'Skijamo {zimi} (zima).', '{U proleće} (proleće) kupujemo jagode.', '{U jesen} (jesen) idemo u školu.',
            'Rođendan slavim u {martu} (mart).', 'Božić je u {januaru} (januar).', 'Odmor imamo u {avgustu} (avgust).', 'Nova godina je u {decembru} (decembar).'
          ]
        },
        {
          type: 'mc', min: 7, title: 'Koje je godišnje doba? · какой сезон',
          items: [
            { q: '15. januar — to je ….', options: ['zima', 'proleće', 'leto', 'jesen'], a: 'zima' },
            { q: '10. maj — to je ….', options: ['zima', 'proleće', 'leto', 'jesen'], a: 'proleće' },
            { q: '1. avgust — to je ….', options: ['zima', 'proleće', 'leto', 'jesen'], a: 'leto' },
            { q: '25. oktobar — to je ….', options: ['zima', 'proleće', 'leto', 'jesen'], a: 'jesen' },
            { q: '15. mart u Srbiji — to je još ….', options: ['zima', 'proleće', 'leto', 'jesen'], a: 'zima', ru: 'по астрономическому календарю' },
            { q: '10. septembar u Srbiji — to je još ….', options: ['zima', 'proleće', 'leto', 'jesen'], a: 'leto' }
          ]
        },
        {
          type: 'speak', min: 14, title: 'Pitanja · вопросы о временах года',
          note: 'Ответьте друг другу полными предложениями, минимум по два предложения. Потом каждый рассказывает свой год по сезонам: Zimi…, u proleće…, leti…, u jesen…',
          items: [
            { q: 'Koje vam je omiljeno godišnje doba i zašto?', sample: 'Moje omiljeno godišnje doba je leto, jer volim more i sunce.' },
            { q: 'U kom mesecu slavite rođendan?', sample: 'Rođendan slavim u martu, u proleće.' },
            { q: 'Šta obično radite zimi? Leti? U jesen? U proleće?', sample: 'Zimi skijam i pijem čaj. Leti putujem na more. U jesen mnogo radim. U proleće se šetam u parku.' },
            { q: 'Koji je vaš omiljeni praznik? Kada je?', sample: 'Moj omiljeni praznik je Nova godina, 31. decembra.' }
          ]
        },
        {
          type: 'summary', min: 4, title: 'Rezime · итог занятия',
          points: [
            'zima — zimi, leto — leti, u proleće, u jesen',
            'u januaru, u martu, u avgustu, u decembru',
            '31. decembra, 8. marta, 1. maja',
            'Srećna slava! Srećan Božić! Srećna Nova godina!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: сезоны, месяцы, праздники', est: 8, set: 'A' },
        {
          type: 'qa', mode: 'transform', title: 'Meseci · напишите месяц по номеру', est: 5,
          items: [
            { q: '1.', a: ['januar'] }, { q: '2.', a: ['februar'] }, { q: '3.', a: ['mart'] }, { q: '4.', a: ['april'] }, { q: '5.', a: ['maj'] }, { q: '6.', a: ['jun'] },
            { q: '7.', a: ['jul'] }, { q: '8.', a: ['avgust'] }, { q: '9.', a: ['septembar'] }, { q: '10.', a: ['oktobar'] }, { q: '11.', a: ['novembar'] }, { q: '12.', a: ['decembar'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Hvala što si nas pozvao na slavu.'] }, { a: ['Dame i gospodo, moj novi izum!'] }, { a: ['Nisam ovo očekivao.'] },
            { a: ['Zimi skijam, leti idem na more.'] }, { a: ['Rođendan slavim u martu.'] }, { a: ['Nova godina je 31. decembra.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Моё любимое время года — лето.', a: ['Moje omiljeno godišnje doba je leto.'] },
            { q: 'Зимой мы катаемся на лыжах.', a: ['Zimi skijamo.', 'Zimi mi skijamo.'] },
            { q: 'Весной я покупаю клубнику.', a: ['U proleće kupujem jagode.', 'U proleće ja kupujem jagode.'] },
            { q: 'В каком месяце ты празднуешь день рождения?', a: ['U kom mesecu slaviš rođendan?'] },
            { q: 'Рождество — седьмого января.', a: ['Božić je 7. januara.', 'Božić je sedmog januara.'] },
            { q: 'Осенью много работы.', a: ['U jesen ima mnogo posla.', 'U jesen je mnogo posla.'] },
            { q: 'Спасибо, что пригласил нас.', a: ['Hvala što si nas pozvao.'] },
            { q: 'Дамы и господа!', a: ['Dame i gospodo!'] }
          ]
        },
        {
          type: 'write', title: 'Moja godina · мой год по сезонам', est: 7, key: 'hw-8.1-godina', record: true,
          note: 'По 2 предложения на каждое время года: что делаете, какие праздники. Запишите чтение вслух.',
          sample: 'Zimi slavim Novu godinu i Božić. Volim da pijem čaj i gledam filmove. U proleće se šetam u parku, 8. marta kupujem cveće mami. Leti putujem na more, u avgustu imam odmor. U jesen mnogo radim, u oktobru slavim rođendan.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '8.2',
      title: 'Perfekat',
      ru: 'Прошедшее время: biti + причастие на -l',
      goals: [
        'образовать причастие на -l от глаголов на -ti, -sti, -ći',
        'построить утверждение и отрицание в перфекте с правильной связкой',
        'рассказать, что делали вчера и в прошлом году'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст «Moja godina». Партнёр задаёт: Šta radiš zimi? Kada slaviš rođendan?',
          items: [{ q: 'Zimi…, u proleće…, leti…, u jesen…' }]
        },
        {
          type: 'text', min: 10, title: 'Perfekat · прошедшее время',
          html:
            '<p>В сербском несколько прошедших времён, но почти всегда используется <b>перфект</b>: краткая форма <b>biti</b> + причастие на <b>-l</b> (как русское «работал, работала»). <u>Связка ставится всегда</u>, в отличие от русского.</p>' +
            '<p>[[Ja sam radio.]] (м.) [[Ja sam radila.]] (ж.) [[Mi smo radili.]] [[One su radile.]] — у <i>one</i> (группа женщин) особое окончание <b>-le</b>: [[One su čitale.]]</p>' +
            '<p>Связка — энклитика, не стоит в начале: [[Juče sam bio u kafiću.]] [[Marija je bila u kafiću.]] Отрицание — через nisam: [[Nisam bio na slavi.]]</p>',
          tables: [
            { caption: 'Perfekat = biti + l-forma', head: ['', 'm', 'ž', 's', 'mn. m', 'mn. ž'], rows: [['ja sam / ti si / on je', 'radio', 'radila', 'radilo', '', ''], ['mi smo / vi ste / oni su', '', '', '', 'radili', 'radile']] }
          ],
          after:
            '<p><b>Как образовать причастие:</b></p>' +
            '<ol><li>Глагол на <b>-ti</b>: от основы инфинитива: [[čitati — čitao, čitala]], [[kupiti — kupio, kupila]].</li>' +
            '<li>Глагол на <b>-sti</b>: от основы настоящего времени + беглое <b>a</b>: [[gristi — grizu — grizao, grizla]], [[tresti — tresao, tresla]].</li>' +
            '<li>Если в настоящем времени есть <b>t, d</b>, в причастии их нет: [[jesti — jedu — jeo, jela]], [[krasti — krao, krala]].</li>' +
            '<li>Глагол на <b>-ći</b>: от основы настоящего времени, в м. р. беглое <b>a</b>: [[peći — peku — pekao, pekla]], [[reći — rekao, rekla]].</li>' +
            '<li>[[ići — išao, išla]] и приставочные: [[doći — došao, došla]], [[otići — otišao, otišla]].</li></ol>'
        },
        {
          type: 'gap', min: 7, title: 'L-forma · образуйте причастие (м., ж.)',
          items: [
            'osta-ti — {ostao}, {ostala}', 'kupi-ti — {kupio}, {kupila}', 'tresti — {tresao}, {tresla}', 'rasti — {rastao}, {rasla}',
            'krasti — {krao}, {krala}', 'plesti — {pleo}, {plela}', 'seći — {sekao}, {sekla}', 'reći — {rekao}, {rekla}',
            'doći — {došao}, {došla}', 'otići — {otišao}, {otišla}'
          ]
        },
        {
          type: 'gap', min: 5, title: 'Oblik glagola biti · выберите связку',
          options: ['sam', 'si', 'je', 'smo', 'ste', 'su', 'nisam', 'nisi', 'nije', 'nismo', 'niste', 'nisu'],
          items: [
            'Znam da ti nikad {nisi} bio na slavi.', 'Mama i baka {su} kupile hranu za Novu godinu.', 'Mi {smo} počeli da učimo srpski jezik.',
            'Prošle godine za rođendan ja {sam} pozvao sve svoje prijatelje.', 'Vi {ste} znali da se Marko oženio prošle nedelje.', 'Juče Marija {je} bila u kafiću.'
          ]
        },
        {
          type: 'gap', min: 7, title: 'Porodica Pavlović · глаголы в перфекте',
          note: 'В скобках инфинитив. Впишите связку и причастие в нужном роде и числе.',
          listen: true,
          items: [
            'Porodica Pavlović veoma voli praznike. Prošle godine posebno dobro porodica {je dočekala} (dočekati) zimski praznici: Novu godinu i Božić.',
            'Baka i deda {su kitili} (kititi) jelku, mama {je pripremila} (pripremiti) mnogo ukusne hrane, a deca {su pozvala} (pozvati) svoje prijatelje.',
            'Malom Goranu roditelji {su poklonili} (pokloniti) kutiju čokolade. On {je bio} (biti) srećan.'
          ]
        },
        {
          type: 'conj', tense: 'past', min: 7, title: 'Trening · перфект вслух',
          note: 'Назовите форму с связкой: ja sam radio / ona je radila / oni su radili. Род указан в подсказке.',
          verbs: ['biti', 'raditi', 'citati', 'kupiti', 'jesti', 'ici', 'doci', 'reci'], rounds: 10
        },
        {
          type: 'qa', mode: 'translate', min: 8, title: 'Prevedite · переведите на сербский',
          note: 'Сначала скажите вслух, потом запишите.',
          items: [
            { q: 'Вчера мы ужинали в ресторане.', a: ['Juče smo večerali u restoranu.', 'Juče smo večerale u restoranu.', 'Mi smo juče večerali u restoranu.'] },
            { q: 'Ольга отмечает день рождения в сентябре.', a: ['Olga slavi rođendan u septembru.'] },
            { q: 'Родители купили огромный арбуз.', a: ['Roditelji su kupili ogromnu lubenicu.'] },
            { q: 'Обычно летом я путешествовала по Балканам.', a: ['Obično sam leti putovala po Balkanu.', 'Leti sam obično putovala po Balkanu.', 'Obično leti sam putovala po Balkanu.'] },
            { q: 'Твой любимый цвет был фиолетовый.', a: ['Tvoja omiljena boja je bila ljubičasta.', 'Tvoja omiljena boja bila je ljubičasta.'] },
            { q: 'В прошлом году ты работала без выходных.', a: ['Prošle godine si radila bez vikenda.', 'Prošle godine ti si radila bez vikenda.', 'Ti si prošle godine radila bez vikenda.'] }
          ]
        },
        {
          type: 'speak', min: 9, title: 'Šta si radio juče? · разговор в прошедшем времени',
          note: 'Каждый рассказывает вчерашний день в перфекте (6+ предложений), партнёр задаёт три вопроса: Gde si bio? Šta si jeo? Da li si…?',
          items: [
            { q: 'Šta si radio / radila juče?', sample: 'Juče sam se probudio u sedam, pio sam kafu i išao na posao.' },
            { q: 'Gde si bio / bila prošle nedelje?', sample: 'Prošle nedelje sam bila u Novom Sadu, kod tetke.' },
            { q: 'Šta si jeo / jela za večeru?', sample: 'Jeo sam pljeskavicu i salatu, pio sam pivo.' },
            { q: 'Da li si nekad bio / bila na slavi?', sample: 'Ne, nikad nisam bio na slavi. A ti?' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'sam / si / je / smo / ste / su + radio / radila / radilo / radili / radile',
            'Juče sam bio u kafiću. — связка на втором месте',
            'Nisam bio na slavi. — отрицание через nisam',
            'jesti — jeo, jela; ići — išao, išla; reći — rekao, rekla'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: глаголы и слова перфекта', est: 8, set: 'B' },
        { type: 'conj', tense: 'past', title: 'Тренажёр: перфект', est: 7, verbs: ['biti', 'raditi', 'citati', 'kupiti', 'jesti', 'ici', 'doci', 'reci', 'ziveti', 'slaviti', 'putovati', 'pokloniti'], rounds: 16 },
        {
          type: 'qa', mode: 'transform', title: 'Prezent → perfekat · переведите в прошедшее', est: 6,
          note: 'Перепишите предложение в перфекте, род — мужской.',
          items: [
            { q: 'Ja radim.', a: ['Ja sam radio.', 'Radio sam.'] }, { q: 'Ona čita.', a: ['Ona je čitala.', 'Čitala je.'] }, { q: 'Mi jedemo.', a: ['Mi smo jeli.', 'Jeli smo.'] },
            { q: 'Oni idu.', a: ['Oni su išli.', 'Išli su.'] }, { q: 'Ti kupuješ.', a: ['Ti si kupovao.', 'Kupovao si.'] }, { q: 'One putuju.', a: ['One su putovale.', 'Putovale su.'] },
            { q: 'Vi dolazite.', a: ['Vi ste dolazili.', 'Dolazili ste.'] }, { q: 'On kaže.', a: ['On je rekao.', 'Rekao je.'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Juče Marija je bila u kafiću.'] }, { a: ['Mi smo počeli da učimo srpski jezik.'] }, { a: ['Mama je pripremila mnogo ukusne hrane.'] },
            { a: ['Roditelji su poklonili kutiju čokolade.'] }, { a: ['Nikad nisi bio na slavi.'] }, { a: ['Prošle godine si radila bez vikenda.'] }
          ]
        },
        {
          type: 'write', title: 'Juče · мой вчерашний день + запись', est: 8, key: 'hw-8.2-juce', record: true,
          note: '8–10 предложений о вчерашнем дне в перфекте. Хотя бы одно отрицание. Запишите чтение вслух.',
          sample: 'Juče sam se probudila u sedam. Pila sam kafu i jela hleb sa sirom. Išla sam na posao autobusom. Na poslu sam pisala mejlove i pričala sa kolegama. Ručala sam u restoranu. Uveče sam kupila namirnice i kuvala večeru. Nisam gledala televiziju, čitala sam knjigu. Išla sam na spavanje u jedanaest.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '8.3',
      title: 'Slava i tradicije',
      ru: 'Текст о славе, известные славы, рассказ о своих праздниках в перфекте',
      goals: [
        'прочитать и понять текст о славе, ответить на вопросы',
        'объяснить, что такое slava, slavski kolač, žito, sveća',
        'рассказать о своём последнем празднике в перфекте'
      ],
      blocks: [
        {
          type: 'speak', min: 5, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст «Juče». Партнёр пересказывает в третьем лице: On je juče…',
          items: [{ q: 'Juče sam… — On / ona je juče…' }]
        },
        {
          type: 'text', min: 10, title: 'Slava · читаем текст',
          note: 'Сначала прослушайте, потом прочитайте по абзацам вслух. Незнакомые слова — по клику.',
          img: 'img/l8_slava.png',
          html:
            '<p>[[„Gde ima slave, ima Srba!“ — narodna poslovica. Slava je narodno-crkveni običaj koji u ovom obliku postoji samo kod Srba.]]</p>' +
            '<p>[[Kada uđete u srpsku kuću, obično vidite ikonu koja prikazuje određenog hrišćanskog sveca. Veruje se da je ovaj svetac zaštitnik domaćinove kuće i porodice i obično se slavi generacijama. Svaki hrišćanski svetac ima svoj dan u pravoslavnom kalendaru. Taj dan je najvažniji dan koji porodica slavi, odmah posle Božića i Uskrsa. Na taj dan Srbi su potpuno posvećeni svojoj porodici i najbližima.]]</p>' +
            '<p>[[Postoje različiti načini za proslavu slave, u zavisnosti od regiona zemlje, ali postoje neki običaji koji su svuda isti: slavski kolač — svečani hleb koji se peče noć pred slavu; žito ili koljivo; slavska sveća — koja gori tokom celog dana kada je slava.]]</p>',
          tables: [
            { caption: 'Nove reči', head: ['srpski', 'ruski'], rows: [['običaj', 'обычай'], ['ikona, svetac', 'икона, святой'], ['zaštitnik', 'защитник'], ['najvažniji, najbliži', 'самый важный, самые близкие'], ['slavski kolač', 'праздничный хлеб'], ['žito, koljivo', 'кутья'], ['sveća gori', 'свеча горит'], ['u zavisnosti od', 'в зависимости от']] }
          ]
        },
        {
          type: 'speak', min: 7, title: 'Odgovorite na pitanja · по тексту',
          items: [
            { q: 'Šta je slava?', sample: 'Slava je narodno-crkveni običaj koji postoji samo kod Srba. Porodica slavi svog sveca zaštitnika.' },
            { q: 'Koji je datum slave? Od čega zavisi?', sample: 'Svaki svetac ima svoj dan u pravoslavnom kalendaru. Datum zavisi od sveca koji porodica slavi.' },
            { q: 'Koja dva pravoslavna praznika osim slave su veoma važna za Srbe?', sample: 'Božić i Uskrs.' },
            { q: 'Koja jela i predmeti moraju biti na slavi?', sample: 'Slavski kolač, žito ili koljivo i slavska sveća.' }
          ]
        },
        {
          type: 'tf', min: 4, title: 'Tačno ili netačno?',
          items: [
            { q: 'Slava postoji kod svih pravoslavnih naroda.', a: false, why: 'U ovom obliku postoji samo kod Srba.' },
            { q: 'Svetac zaštitnik se slavi generacijama.', a: true },
            { q: 'Slava je važnija od Božića.', a: false, why: 'Slava je najvažniji dan odmah posle Božića i Uskrsa.' },
            { q: 'Slavski kolač se peče noć pred slavu.', a: true },
            { q: 'Slavska sveća gori samo ujutru.', a: false, why: 'Gori tokom celog dana.' },
            { q: 'Običaji su isti u celoj Srbiji.', a: false, why: 'Zavise od regiona, ali kolač, žito i sveća su svuda.' }
          ]
        },
        {
          type: 'text', min: 5, title: 'Zanimljivost · самые известные славы',
          html:
            '<ul><li><b>[[Nikoljdan]]</b> — 19 декабря, святой Николай. Самая распространённая слава: около 30 % сербов считают её своей семейной.</li>' +
            '<li><b>[[Savindan]]</b> — 27 января, святой Савва. Школьная слава, похожа на День учителя: школьники устраивают концерты и представления.</li>' +
            '<li><b>[[Đurđevdan]]</b> — 6 мая, святой Георгий. Переплетение православия и языческих обрядов Юрьева дня; в списке нематериального культурного наследия Сербии.</li></ul>' +
            '<p>К Đurđevdan есть знаменитая песня группы <b>Bijelo Dugme — «Đurđevdan»</b>. В оригинальном курсе к ней было задание на пропуски. Найдите её на YouTube, послушайте дома два-три раза и попробуйте записать на слух слова, которые узнаёте: <i>đurđevak</i> (ландыш), <i>proleće</i>, <i>zora</i> (заря), <i>rame</i>.</p>'
        },
        {
          type: 'match', min: 4, title: 'Slave i datumi',
          pairs: [
            ['Nikoljdan', '19. decembra, sveti Nikola'], ['Savindan', '27. januara, sveti Sava'], ['Đurđevdan', '6. maja, sveti Đorđe'],
            ['Božić', '7. januara'], ['Nova godina', '31. decembra / 1. januara'], ['slavski kolač', 'svečani hleb'], ['koljivo', 'žito'], ['slavska sveća', 'gori ceo dan']
          ]
        },
        {
          type: 'gap', min: 6, title: 'Prošle godine · перфект в рассказе о празднике',
          note: 'Впишите связку и причастие. Рассказывает женщина.',
          items: [
            'Prošle godine {sam bila} (biti, ja) na slavi kod prijatelja u Nišu.',
            'Domaćin {je pozvao} (pozvati) celu porodicu i prijatelje.',
            'Baka {je ispekla} (ispeći) slavski kolač, a mama {je pripremila} (pripremiti) žito.',
            'Sveća {je gorela} (goreti) ceo dan.',
            'Mi {smo jeli} (jesti) sarmu i {smo pili} (piti) rakiju.',
            'Gosti {su rekli} (reći): „Srećna slava!“ Ja {nisam znala} (znati, negacija) ništa o slavi, ali {sam naučila} (naučiti) mnogo.'
          ]
        },
        {
          type: 'speak', min: 15, title: 'Moj poslednji praznik · мой последний праздник',
          note: 'Каждый рассказывает о последнем празднике в перфекте (2 минуты): какой, когда, кто пришёл, что ели, что дарили. Партнёр задаёт 3 вопроса и потом пересказывает. Затем сравните русские и сербские традиции: Kod nas…, a u Srbiji…',
          items: [
            { q: 'Koji praznik si slavio / slavila poslednji put? Kada?', sample: 'Poslednji put sam slavila Novu godinu, 31. decembra.' },
            { q: 'Ko je došao? Šta ste jeli i pili?', sample: 'Došli su moji roditelji i prijatelji. Jeli smo salatu i tortu, pili smo vino.' },
            { q: 'Šta ste poklonili? Šta ste dobili?', sample: 'Poklonila sam mami knjigu. Dobila sam kutiju čokolade.' },
            { q: 'Kako slavite Novu godinu u Rusiji? A kako u Srbiji?', sample: 'Kod nas kitimo jelku i gledamo film. U Srbiji ljudi idu u restorane i slave dva puta: 31. decembra i 13. januara!' }
          ]
        },
        {
          type: 'summary', min: 4, title: 'Rezime · итог занятия',
          points: [
            'Slava — narodno-crkveni običaj: ikona, svetac zaštitnik',
            'slavski kolač, žito (koljivo), slavska sveća',
            'Nikoljdan 19. 12., Savindan 27. 1., Đurđevdan 6. 5.',
            'Prošle godine sam bila na slavi. Gosti su rekli: Srećna slava!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: слова текста о славе', est: 8, set: 'C' },
        { type: 'conj', tense: 'past', title: 'Тренажёр: перфект (повтор)', est: 6, verbs: ['biti', 'raditi', 'jesti', 'ici', 'doci', 'reci', 'slaviti', 'pokloniti'], rounds: 12 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант по тексту', est: 5,
          items: [
            { a: ['Gde ima slave, ima Srba!'] }, { a: ['Svaki svetac ima svoj dan u pravoslavnom kalendaru.'] }, { a: ['Slavski kolač se peče noć pred slavu.'] },
            { a: ['Sveća gori tokom celog dana.'] }, { a: ['Nikoljdan je 19. decembra.'] }, { a: ['Gosti su rekli: Srećna slava!'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Слава — это обычай, который есть только у сербов.', a: ['Slava je običaj koji postoji samo kod Srba.'] },
            { q: 'Каждая семья празднует своего святого.', a: ['Svaka porodica slavi svog sveca.'] },
            { q: 'Бабушка испекла славский пирог.', a: ['Baka je ispekla slavski kolač.'] },
            { q: 'Свеча горела весь день.', a: ['Sveća je gorela ceo dan.', 'Sveća je gorela tokom celog dana.'] },
            { q: 'Гости сказали: «С праздником!»', a: ['Gosti su rekli: Srećna slava!', 'Gosti su rekli: „Srećna slava!“'] },
            { q: 'Я никогда не была на славе.', a: ['Nikad nisam bila na slavi.', 'Ja nikad nisam bila na slavi.'] },
            { q: 'Мы ели сарму и пили ракию.', a: ['Jeli smo sarmu i pili rakiju.', 'Mi smo jeli sarmu i pili rakiju.', 'Jeli smo sarmu i pili smo rakiju.'] },
            { q: 'Родители подарили мне книгу.', a: ['Roditelji su mi poklonili knjigu.'] }
          ]
        },
        {
          type: 'write', title: 'Naš praznik · как мы праздновали + запись', est: 12, key: 'hw-8.3-praznik', record: true,
          note: '10–12 предложений в перфекте о последнем большом празднике: подготовка, гости, еда, подарки, настроение. Запишите чтение вслух (до 2 минут).',
          sample: 'Prošle godine smo slavili Novu godinu kod mojih roditelja. Mama je pripremila mnogo ukusne hrane, a tata je kupio vino. Ja sam kitila jelku sa sestrom. Došli su baka, deda i naši prijatelji. Jeli smo salatu, meso i tortu. U ponoć smo pili šampanjac. Poklonila sam mami knjigu, a tati sam poklonila kravatu. Dobila sam novi telefon! Bili smo veoma srećni. Nisam spavala do četiri ujutru.'
        }
      ]
    }
  ]
});
