// Lekcija 6 - Hrana je život. Three 60-minute sessions: food & shops, locative, shopping list + da-prezent.
COURSE.register({
  n: 6,
  title: 'Hrana je život',
  ru: 'Еда, магазины, предложный падеж (lokativ), покупки',

  vocab: [
    { id: 'hrana6', sr: 'hrana', ru: 'еда', set: 'A' },
    { id: 'frizider', sr: 'frižider', ru: 'холодильник', set: 'A' },
    { id: 'mozda', sr: 'možda', ru: 'может быть', set: 'A' },
    { id: 'nesto', sr: 'nešto', ru: 'что-то', set: 'A' },
    { id: 'naruciti', sr: 'naručiti, ja naručim', ru: 'заказать (в кафе, доставке)', set: 'A' },
    { id: 'boze-sacuvaj', sr: 'Bože, sačuvaj!', ru: 'О Боже мой! (букв. Боже сохрани!)', set: 'A' },
    { id: 'nema-hrane', sr: 'Nema hrane!', ru: 'Нет еды!', set: 'A' },
    { id: 'voce', sr: 'voće', ru: 'фрукты', set: 'A' },
    { id: 'jabuka6', sr: 'jabuka', ru: 'яблоко', set: 'A' },
    { id: 'sljiva', sr: 'šljiva', ru: 'слива', set: 'A' },
    { id: 'banana', sr: 'banana', ru: 'банан', set: 'A' },
    { id: 'breskva', sr: 'breskva', ru: 'персик', set: 'A' },
    { id: 'grozdje', sr: 'grožđe', ru: 'виноград', set: 'A' },
    { id: 'dinja', sr: 'dinja', ru: 'дыня', set: 'A' },
    { id: 'narandza', sr: 'narandža', ru: 'апельсин', set: 'A' },
    { id: 'lubenica', sr: 'lubenica', ru: 'арбуз', set: 'A' },
    { id: 'jagoda', sr: 'jagoda', ru: 'клубника', set: 'A' },
    { id: 'malina', sr: 'malina', ru: 'малина', set: 'A' },
    { id: 'limun', sr: 'limun', ru: 'лимон', set: 'A' },
    { id: 'kruska', sr: 'kruška', ru: 'груша', set: 'A' },
    { id: 'kajsija', sr: 'kajsija', ru: 'абрикос', set: 'A' },
    { id: 'povrce', sr: 'povrće', ru: 'овощи', set: 'A' },
    { id: 'krompir', sr: 'krompir', ru: 'картофель', set: 'A' },
    { id: 'paradajz', sr: 'paradajz', ru: 'помидор', set: 'A' },
    { id: 'krastavac', sr: 'krastavac', ru: 'огурец', set: 'A' },
    { id: 'salata', sr: 'salata', ru: 'салат зелёный', set: 'A' },
    { id: 'kupus', sr: 'kupus', ru: 'капуста', set: 'A' },
    { id: 'luk', sr: 'luk, beli luk', ru: 'лук, чеснок', set: 'A' },
    { id: 'paprika', sr: 'paprika', ru: 'паприка, перец', set: 'A' },
    { id: 'patlidzan', sr: 'plavi patlidžan', ru: 'баклажан', set: 'A' },
    { id: 'sargarepa', sr: 'šargarepa', ru: 'морковь', set: 'A' },
    { id: 'tikvica', sr: 'tikvica, bundeva', ru: 'кабачок, тыква', set: 'A' },

    { id: 'meso6', sr: 'meso', ru: 'мясо', set: 'B' },
    { id: 'govedina', sr: 'govedina', ru: 'говядина', set: 'B' },
    { id: 'svinjetina', sr: 'svinjetina', ru: 'свинина', set: 'B' },
    { id: 'piletina', sr: 'piletina, teletina', ru: 'курятина, телятина', set: 'B' },
    { id: 'riba', sr: 'riba', ru: 'рыба', set: 'B' },
    { id: 'jaje', sr: 'jaje — jaja', ru: 'яйцо — яйца', set: 'B' },
    { id: 'hleb', sr: 'hleb', ru: 'хлеб', set: 'B' },
    { id: 'kifla', sr: 'kifla, kiflice', ru: 'булочка, рогалик', set: 'B' },
    { id: 'makaroni', sr: 'makaroni, pirinač', ru: 'макароны, рис', set: 'B' },
    { id: 'zacin', sr: 'začin', ru: 'приправа', set: 'B' },
    { id: 'grickalice', sr: 'grickalice', ru: 'снеки', set: 'B' },
    { id: 'torta', sr: 'torta', ru: 'торт', set: 'B' },
    { id: 'mleko6', sr: 'mleko, jogurt', ru: 'молоко, йогурт', set: 'B' },
    { id: 'pice', sr: 'piće — čaj, kafa, sok, voda, vino, pivo, rakija, limunada', ru: 'напитки — чай, кофе, сок, вода, вино, пиво, ракия, лимонад', set: 'B' },
    { id: 'skupo', sr: 'skupo — košta mnogo', ru: 'дорого', set: 'B' },
    { id: 'jeftino', sr: 'jeftino — košta malo', ru: 'дёшево', set: 'B' },
    { id: 'kostati', sr: 'koštati, to košta', ru: 'стоить, это стоит', set: 'B' },
    { id: 'prodavnica6', sr: 'prodavnica', ru: 'магазин', set: 'B' },
    { id: 'pijaca', sr: 'pijaca', ru: 'рынок', set: 'B' },
    { id: 'mesara', sr: 'mesara', ru: 'мясная лавка', set: 'B' },
    { id: 'pekara', sr: 'pekara', ru: 'пекарня', set: 'B' },
    { id: 'poslasticarnica', sr: 'poslastičarnica', ru: 'кондитерская', set: 'B' },
    { id: 'kasa', sr: 'kasa', ru: 'касса', set: 'B' },
    { id: 'gotovina', sr: 'gotovina, keš', ru: 'наличные', set: 'B' },
    { id: 'kartica', sr: 'kartica', ru: 'банковская карта', set: 'B' },
    { id: 'kusur', sr: 'kusur', ru: 'сдача', set: 'B' },
    { id: 'kesa', sr: 'kesa', ru: 'пакет', set: 'B' },
    { id: 'platiti', sr: 'platiti, ja platim (karticom, kešom)', ru: 'заплатить (картой, наличными)', set: 'B' },
    { id: 'dinar', sr: 'dinar — 100 dinara', ru: 'динар — 100 динаров', set: 'B' },

    { id: 'kancelarija', sr: 'kancelarija', ru: 'офис', set: 'C' },
    { id: 'domaca-kuhinja', sr: 'domaća kuhinja', ru: 'домашняя кухня', set: 'C' },
    { id: 'cesto-retko', sr: 'često, retko, ponekad, obično', ru: 'часто, редко, иногда, обычно', set: 'C' },
    { id: 'meseci', sr: 'januar, februar, jun, avgust, decembar', ru: 'январь, февраль, июнь, август, декабрь', set: 'C' },
    { id: 'razmisljati', sr: 'razmišljati o (+ lokativ)', ru: 'размышлять о', set: 'C' },
    { id: 'pricati-o', sr: 'pričati o, misliti o', ru: 'говорить о, думать о', set: 'C' },
    { id: 'omiljeni', sr: 'omiljeni, omiljena', ru: 'любимый, любимая', set: 'C' },
    { id: 'kisela-voda', sr: 'kisela voda', ru: 'газированная вода', set: 'C' },
    { id: 'sladoled', sr: 'sladoled', ru: 'мороженое', set: 'C' },
    { id: 'treba', sr: 'treba da…, treba mi…', ru: 'нужно…, мне нужно…', set: 'C' },
    { id: 'moci', sr: 'moći, ja mogu, ti možeš', ru: 'мочь', set: 'C' },
    { id: 'morati', sr: 'morati, ja moram', ru: 'быть должным', set: 'C' },
    { id: 'nadati-se', sr: 'nadati se, ja se nadam', ru: 'надеяться', set: 'C' },
    { id: 'pomoci', sr: 'pomoći, ja pomognem', ru: 'помочь', set: 'C' },
    { id: 'ustajati', sr: 'ustajati, ja ustajem', ru: 'вставать', set: 'C' },
    { id: 'posetiti', sr: 'posetiti, ja posetim', ru: 'посетить, навестить', set: 'C' },
    { id: 'skuvati', sr: 'skuvati supu', ru: 'сварить суп', set: 'C' },
    { id: 'ukupno', sr: 'ukupno', ru: 'всего, в сумме', set: 'C' },
    { id: 'svakako', sr: 'svakako', ru: 'в любом случае', set: 'C' },
    { id: 'negde', sr: 'negde', ru: 'где-то', set: 'C' },
    { id: 'znaci', sr: 'znači', ru: 'значит', set: 'C' },
    { id: 'zaboraviti', sr: 'Da ne zaboravim!', ru: 'Не забыть бы!', set: 'C' },
    { id: 'ljubavi', sr: 'ljubavi!', ru: 'любимая! / любимый! (обращение)', set: 'C' }
  ],

  verbs: {
    kupovati: { inf: 'kupovati', ru: 'покупать', pos: { ja: 'kupujem', ti: 'kupuješ', on: 'kupuje', mi: 'kupujemo', vi: 'kupujete', oni: 'kupuju' }, neg: { ja: 'ne kupujem', ti: 'ne kupuješ', on: 'ne kupuje', mi: 'ne kupujemo', vi: 'ne kupujete', oni: 'ne kupuju' } },
    jesti: { inf: 'jesti', ru: 'есть', pos: { ja: 'jedem', ti: 'jedeš', on: 'jede', mi: 'jedemo', vi: 'jedete', oni: 'jedu' }, neg: { ja: 'ne jedem', ti: 'ne jedeš', on: 'ne jede', mi: 'ne jedemo', vi: 'ne jedete', oni: 'ne jedu' } },
    piti: { inf: 'piti', ru: 'пить', pos: { ja: 'pijem', ti: 'piješ', on: 'pije', mi: 'pijemo', vi: 'pijete', oni: 'piju' }, neg: { ja: 'ne pijem', ti: 'ne piješ', on: 'ne pije', mi: 'ne pijemo', vi: 'ne pijete', oni: 'ne piju' } },
    platiti: { inf: 'platiti', ru: 'заплатить', pos: { ja: 'platim', ti: 'platiš', on: 'plati', mi: 'platimo', vi: 'platite', oni: 'plate' }, neg: { ja: 'ne platim', ti: 'ne platiš', on: 'ne plati', mi: 'ne platimo', vi: 'ne platite', oni: 'ne plate' } },
    moci: { inf: 'moći', ru: 'мочь', pos: { ja: 'mogu', ti: 'možeš', on: 'može', mi: 'možemo', vi: 'možete', oni: 'mogu' }, neg: { ja: 'ne mogu', ti: 'ne možeš', on: 'ne može', mi: 'ne možemo', vi: 'ne možete', oni: 'ne mogu' } },
    morati: { inf: 'morati', ru: 'быть должным', pos: { ja: 'moram', ti: 'moraš', on: 'mora', mi: 'moramo', vi: 'morate', oni: 'moraju' }, neg: { ja: 'ne moram', ti: 'ne moraš', on: 'ne mora', mi: 'ne moramo', vi: 'ne morate', oni: 'ne moraju' } },
    kuvati: { inf: 'kuvati', ru: 'готовить', pos: { ja: 'kuvam', ti: 'kuvaš', on: 'kuva', mi: 'kuvamo', vi: 'kuvate', oni: 'kuvaju' }, neg: { ja: 'ne kuvam', ti: 'ne kuvaš', on: 'ne kuva', mi: 'ne kuvamo', vi: 'ne kuvate', oni: 'ne kuvaju' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '6.1',
      title: 'Hrana',
      ru: 'Фрукты, овощи, мясо, напитки; магазины; дорого и дёшево',
      goals: [
        'назвать 40 продуктов и распределить их по группам',
        'сказать, где что покупаете: u pekari, na pijaci',
        'рассказать о любимой и нелюбимой еде'
      ],
      blocks: [
        {
          type: 'dialog', min: 6, title: 'Strip · Jesi li za ručak?',
          note: 'Прочитайте кириллицу сами. Wolt — сервис доставки еды, очень популярный в Белграде.',
          img: 'img/l6_strip.png',
          lines: [
            { who: 'Nikola', sr: 'Hm… Nema hrane!', ru: 'Хм… Нет еды!' },
            { who: 'Nikola', sr: 'Možda ima nešto u frižideru.', ru: 'Может быть, есть что-то в холодильнике.' },
            { who: 'Novak', sr: 'Hej, Kole! Možemo da naručimo Wolt!', ru: 'Эй, Коле! Мы можем заказать Wolt!' },
            { who: 'Nikola', sr: 'Bože, sačuvaj!', ru: 'Боже мой!' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Voće i povrće · фрукты и овощи',
          note: 'Прочитайте слова вслух, назовите свои любимые: Moje omiljeno voće je…',
          img: 'img/l6_voce.png',
          html: '<p>Слайды с овощами, мясом и напитками не попали на скриншоты. Ниже — те же группы таблицей, по словарю урока.</p>',
          tables: [
            { caption: 'Voće', head: ['', '', '', ''], rows: [['jabuka', 'šljiva', 'banana', 'breskva'], ['grožđe', 'dinja', 'narandža', 'lubenica'], ['jagoda', 'limun', 'kruška', 'kajsija']] },
            { caption: 'Povrće', head: ['', '', '', ''], rows: [['krompir', 'paradajz', 'krastavac', 'salata'], ['kupus', 'luk', 'beli luk', 'paprika'], ['plavi patlidžan', 'šargarepa', 'tikvica', 'bundeva']] },
            { caption: 'Meso i ostalo', head: ['', '', '', ''], rows: [['meso', 'govedina', 'svinjetina', 'piletina'], ['teletina', 'riba', 'jaje', 'hleb'], ['kifla', 'makaroni', 'pirinač', 'začin'], ['grickalice', 'torta', 'mleko', 'jogurt']] },
            { caption: 'Piće', head: ['', '', '', ''], rows: [['voda', 'kisela voda', 'sok', 'limunada'], ['čaj', 'kafa', 'mleko', ''], ['vino', 'pivo', 'rakija', '']] }
          ],
          after: '<p><b>Zanimljivost:</b> Сербия — один из крупнейших экспортёров малины ([[malina]]) в мире наравне с Россией, Польшей, США и Мексикой: 76 846 тонн в 2013 году.</p>'
        },
        {
          type: 'sort', min: 7, title: 'Voće ili povrće? · фрукт или овощ',
          groups: ['Voće', 'Povrće'],
          items: [
            { w: 'jabuka', g: 'Voće' }, { w: 'krompir', g: 'Povrće' }, { w: 'šljiva', g: 'Voće' }, { w: 'paradajz', g: 'Povrće' }, { w: 'breskva', g: 'Voće' }, { w: 'krastavac', g: 'Povrće' },
            { w: 'grožđe', g: 'Voće' }, { w: 'kupus', g: 'Povrće' }, { w: 'lubenica', g: 'Voće' }, { w: 'šargarepa', g: 'Povrće' }, { w: 'jagoda', g: 'Voće' }, { w: 'paprika', g: 'Povrće' },
            { w: 'kruška', g: 'Voće' }, { w: 'tikvica', g: 'Povrće' }, { w: 'kajsija', g: 'Voće' }, { w: 'beli luk', g: 'Povrće' }
          ]
        },
        {
          type: 'sort', min: 7, title: 'Meso, povrće ili piće? · распределите продукты',
          groups: ['Meso', 'Povrće', 'Piće'],
          items: [
            { w: 'svinjetina', g: 'Meso' }, { w: 'čaj', g: 'Piće' }, { w: 'krastavac', g: 'Povrće' }, { w: 'voda', g: 'Piće' }, { w: 'vino', g: 'Piće' }, { w: 'govedina', g: 'Meso' }, { w: 'salata', g: 'Povrće' },
            { w: 'teletina', g: 'Meso' }, { w: 'luk', g: 'Povrće' }, { w: 'piletina', g: 'Meso' }, { w: 'plavi patlidžan', g: 'Povrće' }, { w: 'paradajz', g: 'Povrće' }, { w: 'limunada', g: 'Piće' },
            { w: 'tikvica', g: 'Povrće' }, { w: 'kafa', g: 'Piće' }, { w: 'beli luk', g: 'Povrće' }, { w: 'sok', g: 'Piće' }, { w: 'šargarepa', g: 'Povrće' }, { w: 'paprika', g: 'Povrće' }, { w: 'kupus', g: 'Povrće' }, { w: 'rakija', g: 'Piće' }
          ]
        },
        {
          type: 'match', min: 5, title: 'Prodavnice · где что продаётся',
          note: 'Соедините слово с объяснением на сербском.',
          pairs: [
            ['skupo', 'košta mnogo'], ['jeftino', 'košta malo'], ['mesara', 'prodavnica mesa'], ['pekara', 'prodavnica peciva'],
            ['prodavnica', 'mesto gde mi kupujemo namirnice'], ['poslastičarnica', 'prodavnica slatkiša'], ['pijaca', 'prodavnica na otvorenom']
          ]
        },
        {
          type: 'text', min: 4, title: 'Gde kupujemo? · где покупаем',
          html:
            '<p>Место отвечает на вопрос <b>gde?</b> и стоит в предложном падеже (lokativ), о нём — на следующем занятии. Пока запомните готовые формы:</p>' +
            '<ul><li>[[u prodavnici]] — в магазине, [[u pekari]] — в пекарне, [[u mesari]] — в мясной лавке, [[u poslastičarnici]] — в кондитерской</li>' +
            '<li>[[na pijaci]] — на рынке, [[u kafiću]] — в кафе, [[u restoranu]] — в ресторане</li></ul>' +
            '<p>[[Hleb kupujem u pekari, a voće na pijaci.]] [[Meso je skupo u prodavnici, a jeftino u mesari.]]</p>'
        },
        {
          type: 'gap', min: 6, title: 'Šta gde kupujemo? · впишите место',
          items: [
            'Hleb i kifle kupujem u {pekari}. <i>(pekara)</i>', 'Meso kupujemo u {mesari}. <i>(mesara)</i>', 'Voće i povrće kupujem na {pijaci}. <i>(pijaca)</i>',
            'Tortu kupujemo u {poslastičarnici}. <i>(poslastičarnica)</i>', 'Mleko i jogurt kupujem u {prodavnici}. <i>(prodavnica)</i>', 'Kafu pijem u {kafiću}. <i>(kafić)</i>'
          ]
        },
        {
          type: 'speak', min: 14, title: 'Šta voliš da jedeš? · разговор о еде',
          note: 'Обсудите вдвоём. Отвечайте полными предложениями, используйте volim / ne volim / obožavam, skupo / jeftino, u pekari / na pijaci.',
          items: [
            { q: 'Koje je tvoje omiljeno voće? A povrće?', sample: 'Moje omiljeno voće je lubenica. Obožavam paradajz, a ne volim kupus.' },
            { q: 'Šta jedeš za doručak, ručak i večeru?', sample: 'Za doručak jedem jaja i hleb, za ručak piletinu i pirinač, za večeru salatu.' },
            { q: 'Da li jedeš meso? Koje?', sample: 'Jedem piletinu i ribu, ne jedem svinjetinu.' },
            { q: 'Šta piješ ujutru, a šta uveče?', sample: 'Ujutru pijem kafu, uveče čaj. Ponekad pijem vino.' },
            { q: 'Gde kupuješ hleb, meso, voće?', sample: 'Hleb kupujem u pekari, meso u mesari, voće na pijaci.' },
            { q: 'Šta je u Beogradu skupo, a šta jeftino?', sample: 'Voće na pijaci je jeftino, a riba je skupa.' },
            { q: 'Šta ima u tvom frižideru sada?', sample: 'U frižideru ima mleko, jaja i paradajz. Nema mesa!' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'voće: jabuka, šljiva, breskva, grožđe, lubenica, jagoda…',
            'povrće: krompir, paradajz, krastavac, kupus, luk, paprika…',
            'u pekari, u mesari, u prodavnici, na pijaci',
            'skupo — košta mnogo, jeftino — košta malo'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: фрукты и овощи', est: 8, set: 'A' },
        { type: 'flash', title: 'Карточки: мясо, напитки, магазины', est: 8, set: 'B' },
        {
          type: 'letters', title: 'Složite reč · соберите продукт из букв', est: 5,
          items: [
            { clue: 'crveno voće, malo, slatko (клубника)', word: 'jagoda' }, { clue: 'veliko zeleno voće, crveno unutra (арбуз)', word: 'lubenica' }, { clue: 'narandžasto povrće (морковь)', word: 'šargarepa' },
            { clue: 'crveno povrće za salatu (помидор)', word: 'paradajz' }, { clue: 'meso od svinje (свинина)', word: 'svinjetina' }, { clue: 'prodavnica hleba (пекарня)', word: 'pekara' },
            { clue: 'prodavnica na otvorenom (рынок)', word: 'pijaca' }, { clue: 'ljubičasto povrće (баклажан)', word: 'patlidžan' }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Nema hrane!'] }, { a: ['Možda ima nešto u frižideru.'] }, { a: ['Možemo da naručimo Wolt!'] },
            { a: ['Hleb kupujem u pekari.'] }, { a: ['Voće na pijaci je jeftino.'] }, { a: ['Moje omiljeno voće je lubenica.'] }
          ]
        },
        {
          type: 'write', title: 'Moj frižider · что в моём холодильнике', est: 6, key: 'hw-6.1-frizider',
          note: '6–8 предложений: что есть в холодильнике, чего нет, что любите есть, где это покупаете.',
          sample: 'U mom frižideru ima mleko, jogurt, jaja i paradajz. Nema mesa i nema voća. Volim da jedem jagode i lubenicu. Voće kupujem na pijaci, a hleb u pekari. Ne volim kupus.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '6.2',
      title: 'Lokativ',
      ru: 'Предложный падеж: место, время, «о ком / о чём»',
      goals: [
        'образовать локатив всех трёх родов в единственном и множественном числе',
        'различать gde? (lokativ) и kuda? (akuzativ)',
        'сказать, где вы, когда (в июне) и о чём думаете'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о холодильнике. Партнёр задаёт два вопроса: Da li ima…? Gde kupuješ…?',
          items: [{ q: 'U mom frižideru ima…, nema…' }]
        },
        {
          type: 'text', min: 10, title: 'Lokativ · предложный падеж',
          html:
            '<p><b>Lokativ</b> отвечает на вопросы [[o kome?]] [[o čemu?]] и, главное, [[gde?]] — статичное местонахождение. Сравните: [[Idem u prodavnicu]] (kuda? — akuzativ) и [[Ja sam u prodavnici]] (gde? — lokativ).</p>' +
            '<p><b>Три частых случая:</b></p>' +
            '<ol><li><b>Место:</b> [[Ja sam u prodavnici.]] [[Milka je u kafiću.]]</li>' +
            '<li><b>Время:</b> [[Idem na more u junu.]] [[Vraćam se u decembru.]]</li>' +
            '<li><b>Объект с предлогом o:</b> [[Često mislim o ženi.]] [[Retko pričamo o bratu.]]</li></ol>' +
            '<p>Окончания: м. и ср. род — <b>-u</b>; ж. род <b>-a → -i</b>; мн. ч. — <b>-ima</b> (м., ср.) и <b>-ama</b> (ж.).</p>',
          tables: [
            { caption: 'Lokativ (o kome? o čemu?)', head: ['rod', 'jednina', 'množina'], rows: [['M', 'o gradu', 'o gradovima'], ['Ž', 'o sestri', 'o sestrama'], ['S', 'o vinu', 'o vinima']] }
          ],
          after: '<p>Чередование в ж. р. перед <b>-i</b>: k → c, g → z, h → s: [[banka — u banci]], [[Amerika — u Americi]], [[knjiga — u knjizi]]. Предлоги с локативом: <b>u, na, o, po, prema</b>.</p>'
        },
        {
          type: 'gap', min: 6, title: 'Izaberite varijantu · выберите форму',
          options: ['prodavnici', 'prodavnicu', 'kafiću', 'kafić', 'bratu', 'brata', 'pijaci', 'pijacu', 'poslastičarnici', 'poslastičarnicu', 'restoranu', 'restoran', 'Beogradu', 'Beograd', 'junu', 'jun', 'parku', 'park'],
          items: [
            'Mi smo u {prodavnici}.', 'Moj brat je u {kafiću} sa devojkom.', 'Oni često pričaju o {bratu}.', 'Ja sam na {pijaci}, kupujem voće.',
            'Oni kupuju sladoled sa šumskim voćem u {poslastičarnici}.', 'U {restoranu} ja sam jela mnogo ribe.', 'Da li si ti bio u {Beogradu} u {junu}?', 'Maja i Rajko su u {parku}, piju pivo i jedu grickalice.'
          ]
        },
        {
          type: 'gap', min: 8, title: 'Unesite lokativ · впишите форму',
          note: 'В скобках — начальная форма.',
          items: [
            'Moje kolege su u {restoranu} (restoran), a ja sam u {kancelariji} (kancelarija). Ja ne volim da jedem u {restoranima} (restorani), volim domaću kuhinju.',
            'Sa tatom često kupujemo voće i povrće na {pijaci} (pijaca). On obožava paradajz, papriku i patlidžan, a ja volim jagodu, malinu, šljivu. Mi ne volimo da kupujemo voće i povrće u {prodavnici} (prodavnica).',
            'U {Srbiji} (Srbija) ljudi piju mnogo kafe, u {Rusiji} (Rusija) i {Kini} (Kina) piju mnogo čaja. Šta piju ljudi u {Španiji} (Španija)?',
            'Da li vi često jedete lubenicu u {avgustu} (avgust)? — Da, jedemo lubenicu, dinju, kajsiju, mi živimo na {selu} (selo).'
          ]
        },
        {
          type: 'gap', min: 8, title: 'Mali dijalozi · впишите форму',
          listen: true,
          items: [
            '— Halo, mama! Ja sam u {prodavnici} (prodavnica), da, treba li da kupim voće? — Ćao, ljubavi, ne, ne treba, mogu ja da kupim na {pijaci} (pijaca). — Važi!',
            '— U {januaru} (januar) ti si u {Nemačkoj} (Nemačka), u {februaru} (februar) ti si u {Italiji} (Italija), veoma često putuješ! — Da, ja volim takav život.',
            '— Da li često razmišljate o {porodici} (porodica)? — Da, porodica je za mene veoma važna, takođe često razmišljam o {poslu} (posao).',
            'Volimo da se šetamo u {parku} (park). Moj omiljeni park je Tašmajdan, tamo volim da pijem kafu i kiselu vodu sa prijateljima, volimo da sedimo u {kafiću} (kafić) „Poslednja šansa“.',
            'Sada moja žena i ćerka su na {moru} (more). U {junu} (jun) one uvek putuju na more, a ja ponekad idem sa njima, ponekad ostajem u {gradu} (grad).'
          ]
        },
        {
          type: 'mc', min: 6, title: 'Gde ili kuda? · lokativ или akuzativ',
          note: 'Статичное место (gde?) — локатив, направление (kuda?) — аккузатив.',
          items: [
            { q: 'Idem u ….', options: ['prodavnicu', 'prodavnici'], a: 'prodavnicu', ru: 'kuda?' },
            { q: 'Ja sam u ….', options: ['prodavnicu', 'prodavnici'], a: 'prodavnici', ru: 'gde?' },
            { q: 'Živim u ….', options: ['Beograd', 'Beogradu'], a: 'Beogradu' },
            { q: 'Putujem u ….', options: ['Beograd', 'Beogradu'], a: 'Beograd' },
            { q: 'Sedimo u ….', options: ['kafić', 'kafiću'], a: 'kafiću' },
            { q: 'Idemo na ….', options: ['pijacu', 'pijaci'], a: 'pijacu' },
            { q: 'Kupujem voće na ….', options: ['pijacu', 'pijaci'], a: 'pijaci' },
            { q: 'Mislim o ….', options: ['sestru', 'sestri'], a: 'sestri' },
            { q: 'Deca su u ….', options: ['školu', 'školi'], a: 'školi' },
            { q: 'Deca idu u ….', options: ['školu', 'školi'], a: 'školu' }
          ]
        },
        {
          type: 'speak', min: 15, title: 'Gde si? O čemu misliš? · разговор',
          note: 'Отвечайте полными предложениями, следите за окончаниями. Потом каждый рассказывает, где бывает в течение недели (u ponedeljak sam u kancelariji, u subotu na pijaci…).',
          items: [
            { q: 'Gde si sada? Gde si obično ujutru, a gde uveče?', sample: 'Sada sam u stanu. Ujutru sam u kancelariji, uveče sam u parku ili u kafiću.' },
            { q: 'Gde kupuješ hranu? Gde voliš da jedeš?', sample: 'Kupujem na pijaci i u prodavnici. Volim da jedem u restoranu „Tri šešira“.' },
            { q: 'Gde si u julu? A u decembru?', sample: 'U julu sam na moru u Crnoj Gori, u decembru sam u Beogradu.' },
            { q: 'O čemu često misliš? O kome pričaš sa prijateljima?', sample: 'Često mislim o poslu i o porodici. Sa prijateljima pričamo o filmovima.' },
            { q: 'Koji je tvoj omiljeni park ili kafić u gradu?', sample: 'Moj omiljeni park je Kalemegdan, tamo pijem kafu i čitam.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'gde? — lokativ: u gradu, u sestri → o sestri, u vinu; mn.: gradovima, sestrama',
            'kuda? — akuzativ: idem u prodavnicu; gde? — ja sam u prodavnici',
            'u junu, u decembru — время',
            'mislim o poslu, pričamo o bratu — объект с o'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: слова занятия', est: 6, set: 'C' },
        {
          type: 'qa', mode: 'transform', title: 'Lokativ · поставьте в предложный', est: 6,
          note: 'Напишите форму после «u …» или «o …», как указано.',
          items: [
            { q: 'u … (grad)', a: ['u gradu'] }, { q: 'u … (prodavnica)', a: ['u prodavnici'] }, { q: 'o … (sestra)', a: ['o sestri'] }, { q: 'u … (vino)', a: ['u vinu'] },
            { q: 'u … (Srbija)', a: ['u Srbiji'] }, { q: 'na … (pijaca)', a: ['na pijaci'] }, { q: 'u … (kafić)', a: ['u kafiću'] }, { q: 'u … (Amerika)', a: ['u Americi'] },
            { q: 'o … (posao)', a: ['o poslu'] }, { q: 'u … (jun)', a: ['u junu'] }, { q: 'u … (gradovi)', a: ['u gradovima'] }, { q: 'o … (sestre)', a: ['o sestrama'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Ja sam u prodavnici.'] }, { a: ['Idem na more u junu.'] }, { a: ['Često mislim o ženi.'] },
            { a: ['Moje kolege su u restoranu.'] }, { a: ['U Srbiji ljudi piju mnogo kafe.'] }, { a: ['Volimo da se šetamo u parku.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я в магазине.', a: ['Ja sam u prodavnici.', 'U prodavnici sam.'] },
            { q: 'Я иду в магазин.', a: ['Idem u prodavnicu.', 'Ja idem u prodavnicu.'] },
            { q: 'Мы живём в Белграде.', a: ['Živimo u Beogradu.', 'Mi živimo u Beogradu.'] },
            { q: 'В июне мы едем на море.', a: ['U junu putujemo na more.', 'U junu idemo na more.', 'U junu mi putujemo na more.'] },
            { q: 'Я часто думаю о семье.', a: ['Često mislim o porodici.', 'Ja često mislim o porodici.'] },
            { q: 'Брат в кафе с девушкой.', a: ['Brat je u kafiću sa devojkom.'] },
            { q: 'В России пьют много чая.', a: ['U Rusiji piju mnogo čaja.', 'U Rusiji ljudi piju mnogo čaja.'] },
            { q: 'Мы любим гулять в парке.', a: ['Volimo da se šetamo u parku.', 'Mi volimo da se šetamo u parku.'] }
          ]
        },
        {
          type: 'write', title: 'Gde sam u toku nedelje · где я бываю', est: 7, key: 'hw-6.2-gde', record: true,
          note: '7 предложений, по одному на день: где вы бываете и что там делаете. Каждое — с локативом. Запишите чтение вслух.',
          sample: 'U ponedeljak sam u kancelariji ceo dan. U utorak uveče sam u teretani. U sredu sedim u kafiću sa drugaricom. U četvrtak sam u prodavnici i u pekari. U petak večeramo u restoranu. U subotu sam na pijaci. U nedelju se šetamo u parku.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '6.3',
      title: 'Prema listi',
      ru: 'Список покупок, цены, оплата; da + prezent с moram, mogu, treba',
      goals: [
        'понять на слух список покупок с ценами',
        'сказать, как платите: karticom, kešom, и попросить пакет',
        'использовать moram / mogu / treba / nadam se + da + prezent'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст «где я бываю». Партнёр повторяет три места в локативе.',
          items: [{ q: 'U ponedeljak sam u…, u subotu sam na…' }]
        },
        {
          type: 'text', min: 4, title: 'Treba, mogu, moram · «нужно, могу, должен»',
          html:
            '<p>Все три слова соединяются со вторым глаголом через <b>da + prezent</b>:</p>' +
            '<ul><li>[[Treba da kupim hleb.]] — Мне нужно купить хлеб. (<i>treba</i> не меняется)</li>' +
            '<li>[[Mogu da kupim na pijaci.]] — Я могу купить на рынке. (mogu, možeš, može, možemo, možete, mogu)</li>' +
            '<li>[[Moram da idem u pekaru.]] — Я должен пойти в пекарню. (moram, moraš, mora…)</li>' +
            '<li>[[Treba li da kupim ribu?]] — Нужно ли купить рыбу?</li></ul>' +
            '<p>Цена: [[To košta 370 dinara.]] [[Ukupno treba mi 1595 dinara.]] [[Da li je ovo jeftino ili skupo?]]</p>'
        },
        {
          type: 'gap', bank: true, listen: true, min: 12, title: 'Prema listi · послушайте и вставьте',
          note: 'Сначала слушаем целиком. Потом заполняем: продукты и цены. Числа читаем вслух по-сербски.',
          items: [
            'Hm-hm… Danas idem u {prodavnicu}, treba da kupim {jogurt} i {mleko}. To košta {370} dinara, skupo je. Ali šta sad!',
            'Dalje treba da idem u {pekaru}, tamo kupujem {hleb} i {kiflice}. Negde {150} dinara, važi.',
            'Posle kupujem u mesari {svinjetinu} i {govedinu}, da skuvam supu i ostalo. Meso košta {615} dinara, mislim.',
            'Treba li da kupim {ribu}? Ne, mislim ne treba, svakako ne jedemo ribu.',
            'Aha! Tačno, da ne zaboravim, treba da idem na {pijacu} i da kupim {paradajz}, {krastavac}, {tikvice} i {breskvu}. Znači, {350} dinara.',
            'Posle u poslastičarnici kupujem {tortu}, {110} dinara.',
            'Ukupno treba mi {1595} dinara. Da li je ovo jeftino ili skupo? Joj, ne znam!'
          ]
        },
        {
          type: 'tf', min: 4, title: 'Tačno ili netačno? · по тексту',
          items: [
            { q: 'Ona kupuje mleko u pekari.', a: false, why: 'Mleko kupuje u prodavnici, u pekari kupuje hleb i kiflice.' },
            { q: 'Meso košta 615 dinara.', a: true }, { q: 'Ona kupuje ribu.', a: false, why: 'Ne kupuje ribu, oni ne jedu ribu.' },
            { q: 'Na pijaci kupuje paradajz, krastavac, tikvice i breskvu.', a: true }, { q: 'Torta košta 150 dinara.', a: false, why: 'Torta košta 110 dinara.' },
            { q: 'Ukupno treba 1595 dinara.', a: true }
          ]
        },
        {
          type: 'dialog', min: 5, title: 'Kartica ili keš? · как платим',
          note: 'Прочитайте по ролям, потом ответьте на вопросы: Kako vi obično platite? Da li uzimate kesu? Šta često kupujete?',
          img: 'img/l6_kartica.png',
          lines: [
            { who: 'Ona', sr: 'Ja obično platim karticom.', ru: 'Я обычно плачу картой.' },
            { who: 'Ona 2', sr: 'Retko platim karticom, uzimam keš.', ru: 'Редко плачу картой, беру наличные.' },
            { who: 'Kasirka', sr: 'Dobar dan! Kartica ili keš?', ru: 'Добрый день! Карта или наличные?' },
            { who: 'Kupac', sr: 'Keš, izvolite. Treba mi kesa.', ru: 'Наличные, пожалуйста. Мне нужен пакет.' },
            { who: 'Kasirka', sr: 'Izvolite kusur i kesu. Prijatno!', ru: 'Вот сдача и пакет. Всего доброго!' }
          ]
        },
        {
          type: 'match', min: 6, title: 'Da + prezent · соедините части предложения',
          pairs: [
            ['Moja majka želi', '… da često ustaje rano.'], ['Ja moram', '… da pomognem sestri oko domaćeg zadatka.'], ['Oni se nadaju', '… da dođu u Srbiju.'],
            ['Mi volimo', '… da posetimo baku vikendom.'], ['Moj otac kaže', '… da nauči da peva.'], ['Naši prijatelji iz Nemačke žele', '… da vide Beograd.'],
            ['Vi želite', '… da govorite srpski jezik dobro.'], ['Želim', '… da vidim novi film.']
          ]
        },
        {
          type: 'gap', min: 6, title: 'Mogu, moram, treba · впишите форму',
          items: [
            'Ja {moram} (morati) da idem u pekaru.', 'Ti {možeš} (moći) da kupiš voće na pijaci.', 'Mi {moramo} (morati) da platimo karticom.',
            'Oni {mogu} (moći) da naruče Wolt.', '{Treba} da kupim mleko i jogurt.', 'Vi {morate} (morati) da uzmete kesu.', 'Ona {može} (moći) da skuva supu.', 'Da li {treba} da kupim ribu?'
          ]
        },
        {
          type: 'speak', min: 16, title: 'U prodavnici · ролевая игра',
          note: 'Первая сцена: покупатель и продавец на рынке (цены придумываете, торгуетесь: Skupo je! Može jeftinije?). Вторая: у кассы в магазине — карта или наличные, пакет, сдача. Потом меняетесь ролями. В конце каждый составляет вслух свой список покупок на неделю: Treba da kupim…',
          items: [
            { q: 'Dobar dan! Šta želite?', sample: 'Dobar dan! Treba mi kilogram paradajza i dve breskve. Koliko košta?' },
            { q: 'Koliko košta…? — To košta … dinara.', sample: 'Koliko košta lubenica? — 350 dinara. — Skupo je! Može 300?' },
            { q: 'Kartica ili keš?', sample: 'Karticom, molim. Treba mi kesa.' },
            { q: 'Izvolite kusur.', sample: 'Hvala! Prijatno!' },
            { q: 'Šta treba da kupiš ove nedelje?', sample: 'Treba da kupim hleb u pekari, meso u mesari i voće na pijaci. Ukupno oko 2000 dinara.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'Treba da kupim… / Moram da idem… / Mogu da platim…',
            'To košta 370 dinara. Ukupno treba mi 1595 dinara.',
            'Platim karticom / kešom. Treba mi kesa. Izvolite kusur.',
            'jeftino ili skupo?'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: мясо, напитки, магазины (обратная сторона)', est: 6, set: 'B' },
        { type: 'conj', title: 'Тренажёр: moći, morati, kupovati, platiti', est: 6, verbs: ['moci', 'morati', 'kupovati', 'platiti', 'jesti', 'piti', 'kuvati'], rounds: 14 },
        { type: 'numbers', mode: 'listen', title: 'Цены на слух: услышьте и запишите', est: 5, rounds: 10, max: 9999 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Treba da kupim jogurt i mleko.'] }, { a: ['To košta 370 dinara, skupo je.'] }, { a: ['Da ne zaboravim, treba da idem na pijacu.'] },
            { a: ['Ukupno treba mi 1595 dinara.'] }, { a: ['Ja obično platim karticom.'] }, { a: ['Da li je ovo jeftino ili skupo?'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Мне нужно купить хлеб и молоко.', a: ['Treba da kupim hleb i mleko.'] },
            { q: 'Я должен пойти в пекарню.', a: ['Moram da idem u pekaru.', 'Ja moram da idem u pekaru.'] },
            { q: 'Ты можешь купить фрукты на рынке.', a: ['Možeš da kupiš voće na pijaci.', 'Ti možeš da kupiš voće na pijaci.'] },
            { q: 'Сколько стоит арбуз?', a: ['Koliko košta lubenica?'] },
            { q: 'Это стоит 350 динаров.', a: ['To košta 350 dinara.', 'To košta trista pedeset dinara.', 'Košta 350 dinara.'] },
            { q: 'Я обычно плачу картой.', a: ['Obično platim karticom.', 'Ja obično platim karticom.', 'Obično plaćam karticom.'] },
            { q: 'Мне нужен пакет.', a: ['Treba mi kesa.'] },
            { q: 'Мы надеемся увидеть Белград.', a: ['Nadamo se da vidimo Beograd.', 'Mi se nadamo da vidimo Beograd.'] }
          ]
        },
        {
          type: 'write', title: 'Moja lista za kupovinu · список покупок + запись', est: 10, key: 'hw-6.3-lista', record: true,
          note: 'Составьте по образцу текста «Prema listi» свой список покупок на неделю: куда идёте, что покупаете, сколько стоит, чем платите. 8–10 предложений, запишите чтение вслух.',
          sample: 'Danas idem u prodavnicu, treba da kupim mleko, jogurt i jaja. To košta 400 dinara. Posle idem u pekaru i kupujem hleb, 100 dinara. Na pijaci kupujem paradajz, krastavac i jagode, negde 500 dinara. Ne kupujem meso, ne jedemo meso. Ukupno treba mi 1000 dinara. Platim karticom. Mislim da je to jeftino.'
        }
      ]
    }
  ]
});
