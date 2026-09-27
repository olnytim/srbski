// Lekcija 12 - U gradu. Two 60-minute sessions: places in town & directions, then instrumental + transport.
COURSE.register({
  n: 12,
  title: 'U gradu',
  ru: 'Город: места, ориентация, транспорт; творительный падеж (instrumental)',

  vocab: [
    { id: 'kisa', sr: 'Kiša je!', ru: 'Дождь идёт!', set: 'A' },
    { id: 'hajde', sr: 'Hajde! Hajmo!', ru: 'Давай! Давайте!', set: 'A' },
    { id: 'stici', sr: 'stići, ja stižem', ru: 'прибывать, приезжать', set: 'A' },
    { id: 'tek', sr: 'tek — tek za 40 minuta', ru: 'только — только через 40 минут', set: 'A' },
    { id: 'mrzeti', sr: 'mrzeti, ja mrzim — Mrzim ovo!', ru: 'ненавидеть — Ненавижу это!', set: 'A' },
    { id: 'kola', sr: 'kola, auto — leteća kola', ru: 'автомобиль — летающая машина', set: 'A' },
    { id: 'za-svaki-slucaj', sr: 'za svaki slučaj', ru: 'на всякий случай', set: 'A' },
    { id: 'skola12', sr: 'škola, univerzitet', ru: 'школа, университет', set: 'A' },
    { id: 'bioskop', sr: 'bioskop, pozorište, muzej', ru: 'кинотеатр, театр, музей', set: 'A' },
    { id: 'apoteka', sr: 'apoteka, bolnica, dom zdravlja', ru: 'аптека, больница, поликлиника', set: 'A' },
    { id: 'prodavnica12', sr: 'prodavnica, tržni centar, pekara', ru: 'магазин, торговый центр, пекарня', set: 'A' },
    { id: 'kancelarija12', sr: 'kancelarija, biznis-centar', ru: 'офис, бизнес-центр', set: 'A' },
    { id: 'sportski', sr: 'sportski centar', ru: 'спортивный центр', set: 'A' },
    { id: 'aerodrom', sr: 'aerodrom', ru: 'аэропорт', set: 'A' },
    { id: 'stanica12', sr: 'železnička stanica, autobuska stanica', ru: 'ж/д вокзал, автобусная остановка / автовокзал', set: 'A' },
    { id: 'policija', sr: 'policijska stanica', ru: 'полицейский участок', set: 'A' },
    { id: 'ulica12', sr: 'ulica, trg, venac', ru: 'улица, площадь, венац (полукруглая улица)', set: 'A' },
    { id: 'kej', sr: 'kej', ru: 'набережная', set: 'A' },
    { id: 'autoput', sr: 'autoput, bulevar', ru: 'автомагистраль, бульвар', set: 'A' },
    { id: 'kruzni-tok', sr: 'kružni tok', ru: 'круговое движение', set: 'A' },
    { id: 'raskrsnica', sr: 'raskrsnica', ru: 'перекрёсток', set: 'A' },
    { id: 'reka', sr: 'reka, kanal, potok, park, most', ru: 'река, канал, ручей, парк, мост', set: 'A' },
    { id: 'pravo', sr: 'Idite pravo! Idite levo! Idite desno!', ru: 'Идите прямо! Налево! Направо!', set: 'A' },
    { id: 'stanite', sr: 'Stanite! Skrenite!', ru: 'Остановитесь! Поверните!', set: 'A' },
    { id: 'semafor', sr: 'semafor, pešački prelaz', ru: 'светофор, пешеходный переход', set: 'A' },
    { id: 'kako-da-odem', sr: 'Izvini, kako da odem do…?', ru: 'Извини, как мне дойти до…?', set: 'A' },
    { id: 'na-kraju', sr: 'na kraju ulice', ru: 'в конце улицы', set: 'A' },
    { id: 'predjite', sr: 'Pređite preko mosta.', ru: 'Перейдите через мост.', set: 'A' },
    { id: 'pritisnite', sr: 'Pritisnite taster da biste prešli ulicu.', ru: 'Нажмите на кнопку, чтобы перейти улицу.', set: 'A' },

    { id: 'instrumental', sr: 'instrumental — kim? čim?', ru: 'творительный падеж — кем? чем?', set: 'B' },
    { id: 'sa-za-nad', sr: 'sa, za, nad, pod, među, pred (+ instr.)', ru: 'с, за, над, под, между, перед', set: 'B' },
    { id: 'busom', sr: 'busom, vozom, avionom, kolima', ru: 'на автобусе, поезде, самолёте, машине', set: 'B' },
    { id: 'bus', sr: 'bus, autobus', ru: 'автобус', set: 'B' },
    { id: 'voz', sr: 'voz', ru: 'поезд', set: 'B' },
    { id: 'avion', sr: 'avion', ru: 'самолёт', set: 'B' },
    { id: 'tramvaj', sr: 'tramvaj', ru: 'трамвай', set: 'B' },
    { id: 'metro', sr: 'metro', ru: 'метро', set: 'B' },
    { id: 'brod', sr: 'brod', ru: 'паром, корабль', set: 'B' },
    { id: 'bicikl12', sr: 'bicikl', ru: 'велосипед', set: 'B' },
    { id: 'motor', sr: 'motor', ru: 'мотоцикл, мопед', set: 'B' },
    { id: 'taksi', sr: 'taksi', ru: 'такси', set: 'B' },
    { id: 'oblaci', sr: 'oblak — nad gradom lete oblaci', ru: 'облако — над городом летят облака', set: 'B' },
    { id: 'pod-zemljom', sr: 'Pod zemljom ide metro.', ru: 'Под землёй идёт метро.', set: 'B' },
    { id: 'tajna', sr: 'tajna — ostaje među tobom i mnom', ru: 'тайна — остаётся между тобой и мной', set: 'B' },
    { id: 'sef', sr: 'šef — drhtim pred šefom', ru: 'начальник — дрожу перед начальником', set: 'B' },
    { id: 'druziti-se', sr: 'družiti se sa (+ instr.)', ru: 'дружить, общаться с', set: 'B' },
    { id: 'leteti', sr: 'leteti, ja letim — leteo, letela', ru: 'лететь', set: 'B' },
    { id: 'voziti-se', sr: 'voziti se, ja se vozim', ru: 'ездить', set: 'B' },
    { id: 'fakultet', sr: 'fakultet', ru: 'факультет, вуз', set: 'B' },
    { id: 'zemlja12', sr: 'pod zemljom, nad gradom', ru: 'под землёй, над городом', set: 'B' }
  ],

  verbs: {
    ici: { inf: 'ići', ru: 'идти, ехать', pos: { ja: 'idem', ti: 'ideš', on: 'ide', mi: 'idemo', vi: 'idete', oni: 'idu' }, neg: { ja: 'ne idem', ti: 'ne ideš', on: 'ne ide', mi: 'ne idemo', vi: 'ne idete', oni: 'ne idu' }, l: { m: 'išao', f: 'išla', n: 'išlo', mpl: 'išli', fpl: 'išle' } },
    leteti: { inf: 'leteti', ru: 'лететь', pos: { ja: 'letim', ti: 'letiš', on: 'leti', mi: 'letimo', vi: 'letite', oni: 'lete' }, neg: { ja: 'ne letim', ti: 'ne letiš', on: 'ne leti', mi: 'ne letimo', vi: 'ne letite', oni: 'ne lete' }, l: { m: 'leteo', f: 'letela', n: 'letelo', mpl: 'leteli', fpl: 'letele' } },
    putovati: { inf: 'putovati', ru: 'путешествовать', pos: { ja: 'putujem', ti: 'putuješ', on: 'putuje', mi: 'putujemo', vi: 'putujete', oni: 'putuju' }, neg: { ja: 'ne putujem', ti: 'ne putuješ', on: 'ne putuje', mi: 'ne putujemo', vi: 'ne putujete', oni: 'ne putuju' }, l: { m: 'putovao', f: 'putovala', n: 'putovalo', mpl: 'putovali', fpl: 'putovale' } },
    voziti: { inf: 'voziti se', ru: 'ездить', pos: { ja: 'se vozim', ti: 'se voziš', on: 'se vozi', mi: 'se vozimo', vi: 'se vozite', oni: 'se voze' }, neg: { ja: 'se ne vozim', ti: 'se ne voziš', on: 'se ne vozi', mi: 'se ne vozimo', vi: 'se ne vozite', oni: 'se ne voze' }, l: { m: 'se vozio', f: 'se vozila', n: 'se vozilo', mpl: 'se vozili', fpl: 'se vozile' } },
    trcati: { inf: 'trčati', ru: 'бегать', l: { m: 'trčao', f: 'trčala', n: 'trčalo', mpl: 'trčali', fpl: 'trčale' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '12.1',
      title: 'Šta je sve tu',
      ru: 'Места в городе, карта Доброграда, как пройти',
      goals: [
        'назвать 20 мест в городе',
        'объяснить дорогу: idite pravo, skrenite levo, pređite preko mosta',
        'ориентироваться по карте и спросить, как пройти'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Beogradski prevoz',
          note: 'Дождь, автобус и 40 минут ожидания. Прочитайте кириллицу сами.',
          img: 'img/l12_strip.png',
          lines: [
            { who: 'Novak', sr: 'Kiša je! Hajde da idemo busom!', ru: 'Дождь! Давай поедем на автобусе!' },
            { who: 'Nikola', sr: 'Hajmo, imam i karticu, za svaki slučaj!', ru: 'Давай, у меня и карточка есть, на всякий случай!' },
            { who: 'Novak', sr: 'Sledeći bus stiže tek za 40 minuta.', ru: 'Следующий автобус приходит только через 40 минут.' },
            { who: 'Nikola', sr: 'Brate, mrzim ovo! Treba mi leteća kola!', ru: 'Брат, ненавижу это! Мне нужна летающая машина!' }
          ]
        },
        {
          type: 'match', min: 7, title: 'Koja mesta imamo u gradu? · места в городе',
          pairs: [
            ['škola', 'школа'], ['pozorište', 'театр'], ['aerodrom', 'аэропорт'], ['autobuska stanica', 'автобусная остановка / автовокзал'], ['železnička stanica', 'вокзал'],
            ['prodavnica', 'магазин'], ['kafić', 'кафе'], ['restoran', 'ресторан'], ['policijska stanica', 'полицейский участок'], ['bolnica', 'больница'],
            ['apoteka', 'аптека'], ['kancelarija', 'офис'], ['biznis-centar', 'бизнес-центр'], ['dom zdravlja', 'поликлиника']
          ]
        },
        {
          type: 'text', min: 6, title: 'Mapa Dobrograda · карта города',
          note: 'Найдите на карте: aerodrom, kanal Čopića, ulica Teslina, park Platan, kružni tok, Pozorišni trg, reka Plitka, bulevar Pupina, autoput 103.',
          img: 'img/l12_mapa.png',
          html:
            '<ul><li>[[ulica]] — улица, [[trg]] — площадь, [[venac]] — «венец», улица полукругом (Njegošev venac)</li>' +
            '<li>[[kej]] — набережная, [[autoput]] — автомагистраль, [[bulevar]] — бульвар</li>' +
            '<li>[[kružni tok]] — круговое движение, [[raskrsnica]] — перекрёсток, [[most]] — мост</li>' +
            '<li>[[reka]] — река, [[kanal]] — канал, [[potok]] — ручей, [[park]] — парк</li></ul>' +
            '<p><b>Zanimljivost:</b> [[Autokomanda]] — съезд с магистрали и одноимённый квартал в Белграде на пересечении Вождовца, Савского венца и Врачара.</p>'
        },
        {
          type: 'text', min: 5, title: 'Gradske oznake · как объяснить дорогу',
          img: 'img/l12_oznake.png',
          html:
            '<p>[[Idite pravo!]] — прямо, [[Idite levo!]] — налево, [[Idite desno!]] — направо, [[Stanite!]] — стойте, [[Skrenite desno!]] — поверните направо, [[Pređite preko mosta.]] — перейдите через мост.</p>' +
            '<p>[[semafor]] — светофор, [[pešački prelaz]] — пешеходный переход. Белградский светофор говорит: [[Pritisnite taster da biste prešli ulicu.]] — «Нажмите кнопку, чтобы перейти улицу».</p>' +
            '<p>Спросить дорогу: [[Izvini, kako da odem do Glavnog trga?]] Ответ: [[Prvo idi pravo do ulice Kneza Lazara, zatim desno i idi ulicom Pupina, trg je na kraju ulice!]]</p>'
        },
        {
          type: 'dialog', min: 4, title: 'Dijalog · Kako da odem do…?',
          img: 'img/l12_dijalog.png',
          lines: [
            { who: 'Ona', sr: 'Izvini, kako da odem do Glavnog trga?', ru: 'Извини, как мне дойти до Главной площади?' },
            { who: 'Ona 2', sr: 'Prvo idi pravo do ulice Kneza Lazara, zatim desno i idi ulicom Pupina, trg je na kraju ulice!', ru: 'Сначала иди прямо до улицы Князя Лазаря, потом направо и иди по улице Пупина, площадь в конце улицы!' },
            { who: 'Ona', sr: 'Hvala! A gde je apoteka?', ru: 'Спасибо! А где аптека?' },
            { who: 'Ona 2', sr: 'Apoteka je pored semafora, blizu pešačkog prelaza.', ru: 'Аптека рядом со светофором, недалеко от пешеходного перехода.' }
          ]
        },
        {
          type: 'gap', bank: true, min: 6, title: 'Mesta u gradu · какое это место',
          note: 'В оригинале — фото. По описанию впишите место из списка.',
          items: [
            'Velika stara zgrada, deca uče — {škola/univerzitet}.', 'Kolica, police sa hranom — {prodavnica}.', 'Slike na zidovima, tiho — {muzej}.', 'Krevet, lekar, beli zidovi — {bolnica}.',
            'Hleb, kifle, burek — {pekara}.', 'Mnogo prodavnica pod jednim krovom — {tržni centar}.', 'Policajci, auto sa sirenom — {policijska stanica}.', 'Scena, zavesa, glumci — {pozorište}.',
            'Veliko platno, film, kokice — {bioskop}.', 'Stolovi, kompjuteri, kolege — {kancelarija}.', 'Lekovi, žena u belom mantilu — {apoteka}.', 'Kafa, konobar, muzika — {restoran/kafić}.'
          ]
        },
        {
          type: 'gap', min: 6, title: 'Šetamo se gradom · ориентация по карте',
          note: 'Смотрите на карту Доброграда (блок выше) и впишите место в именительном падеже. Если сомневаетесь — вернитесь к карте.',
          items: [
            'Idite pravo po kanalu Čopića do raskrsnice sa ulicom Pančića, zatim skrenite desno i idite do kanala Andrića. Šta je ovde na kanalu Andrića? — {prodavnica|pijaca}.',
            'Vi ste na kružnom toku. Pređite preko mosta, preko reke Plitke. Šta vidite na Pozorišnom trgu? — {pozorište}.',
            'Idite od Njegoševog venca po kanalu Čopića do kraja i skrenite desno. Gde ste? — {aerodrom}.',
            'Idite od raskrsnice kanala Andrića sa Teslinom ulicom po kanalu do kraja. Šta je na kraju ulice? — {biznis-centar|kancelarija}.'
          ]
        },
        {
          type: 'speak', min: 16, title: 'Kako da odem do…? · объясняем дорогу',
          note: 'По карте Доброграда: один спрашивает дорогу от аэропорта до театра, до рынка, до парка. Второй объясняет: idite pravo, skrenite levo, pređite preko mosta. Потом меняетесь. Третий раунд: объясните дорогу от своего дома до ближайшего магазина.',
          items: [
            { q: 'Izvini, kako da odem od aerodroma do pozorišta?', sample: 'Idite pravo po kanalu Čopića, pređite preko mosta i skrenite desno. Pozorište je na Pozorišnom trgu.' },
            { q: 'Gde je najbliža apoteka / pekara / stanica?', sample: 'Pekara je blizu, pored semafora. Idite levo i ona je na kraju ulice.' },
            { q: 'Kako da odem od tvoje kuće do prodavnice?', sample: 'Izađi iz zgrade, idi desno do raskrsnice, pređi ulicu na pešačkom prelazu, prodavnica je pored parka.' },
            { q: 'Šta ima u tvom kraju? Šta nedostaje?', sample: 'U mom kraju ima škola, pijaca i dom zdravlja. Nema bioskopa.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'škola, bolnica, apoteka, pošta, bioskop, pozorište, pekara, tržni centar',
            'ulica, trg, kej, bulevar, raskrsnica, kružni tok, most',
            'Idite pravo / levo / desno. Skrenite. Pređite preko mosta. Stanite!',
            'Izvini, kako da odem do…? — Trg je na kraju ulice.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: места в городе и ориентация', est: 9, set: 'A' },
        {
          type: 'letters', title: 'Složite mesto · соберите слово', est: 4,
          items: [
            { clue: 'tamo gledamo film', word: 'bioskop' }, { clue: 'tamo kupujemo lekove', word: 'apoteka' }, { clue: 'tamo lete avioni', word: 'aerodrom' },
            { clue: 'tamo su glumci i scena', word: 'pozorište' }, { clue: 'tamo rade policajci', word: 'policija' }, { clue: 'ulica pored reke', word: 'kej' }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Kiša je! Hajde da idemo busom!'] }, { a: ['Sledeći bus stiže tek za 40 minuta.'] }, { a: ['Izvini, kako da odem do Glavnog trga?'] },
            { a: ['Idi pravo, zatim skreni desno.'] }, { a: ['Trg je na kraju ulice.'] }, { a: ['Pređite preko mosta.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Идите прямо, потом поверните налево.', a: ['Idite pravo, zatim skrenite levo.', 'Idite pravo, onda skrenite levo.'] },
            { q: 'Аптека рядом со светофором.', a: ['Apoteka je pored semafora.'] },
            { q: 'Перейдите улицу на пешеходном переходе.', a: ['Pređite ulicu na pešačkom prelazu.'] },
            { q: 'Где ближайшая пекарня?', a: ['Gde je najbliža pekara?'] },
            { q: 'Театр на площади, в конце улицы.', a: ['Pozorište je na trgu, na kraju ulice.'] },
            { q: 'Дождь! Давай поедем на автобусе.', a: ['Kiša je! Hajde da idemo busom.', 'Kiša je! Hajde da idemo autobusom.'] },
            { q: 'Ненавижу это!', a: ['Mrzim ovo!'] },
            { q: 'Следующий автобус через 40 минут.', a: ['Sledeći bus stiže za 40 minuta.', 'Sledeći bus je za 40 minuta.', 'Sledeći autobus stiže za 40 minuta.'] }
          ]
        },
        {
          type: 'write', title: 'Put do moje kuće · как дойти до меня', est: 7, key: 'hw-12.1-put',
          note: '6–8 предложений: объясните другу дорогу от ближайшей остановки или метро до вашего дома, с ориентирами (semafor, raskrsnica, park, prodavnica).',
          sample: 'Izađi iz metroa i idi pravo ulicom do semafora. Na semaforu pređi ulicu i skreni levo. Idi pored parka do raskrsnice. Na raskrsnici skreni desno. Moja zgrada je pored pekare, na kraju ulice. Ulaz je iz dvorišta.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '12.2',
      title: 'Instrumental i prevoz',
      ru: 'Творительный падеж: средство, место, совместность; транспорт',
      goals: [
        'образовать инструментал ед. и мн. числа с прилагательным',
        'сказать, на чём едете: busom, vozom, avionom, kolima',
        'использовать sa, nad, pod, među, pred + instrumental'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашнее описание дороги. Партнёр рисует маршрут на бумаге и повторяет: Prvo idem…, zatim…',
          items: [{ q: 'Izađi iz metroa i…' }]
        },
        {
          type: 'text', min: 10, title: 'Instrumental · творительный падеж',
          html:
            '<p><b>Instrumental</b> отвечает на вопросы [[kim?]] [[čim?]] Предлоги: <b>s / sa</b> (с), <b>za</b> (за), <b>nad</b> (над), <b>pod</b> (под), <b>među</b> (между), <b>pred</b> (перед).</p>' +
            '<ol><li><b>Средство:</b> [[Idem na stanicu busom.]] [[Mi često putujemo vozom.]] — без предлога!</li>' +
            '<li><b>Место:</b> [[Tvoja lopta je pod stolom.]] [[Veliki oblaci su nad mojim gradom.]] [[Šetamo se lepom ulicom.]]</li>' +
            '<li><b>Совместность:</b> [[Mnogo se družite sa Goranom.]] [[Dara putuje u Češku sa mamom.]]</li></ol>' +
            '<p>[[Idem na more sa mužem.]] [[Stojimo za bioskopom.]] [[Pod zemljom ide metro.]] [[Ovo ostaje među tobom i mnom.]] [[Uvek drhtim pred šefom.]]</p>' +
            '<p>Окончания: м. и ср. р. <b>-om</b> (после мягких — <b>-em</b>: morem, mužem), ж. р. <b>-om</b>; мн. ч. <b>-ima</b> / <b>-ama</b>. Прилагательные: <b>-im</b> (м., ср.), <b>-om</b> (ж.), <b>-im</b> (мн.).</p>',
          tables: [
            { caption: 'Instrumental — kim? čim?', head: ['rod', 'jednina', 'množina'], rows: [['M', 'velikim gradom', 'velikim gradovima'], ['Ž', 'lepom ženom', 'lepim ženama'], ['S', 'plavim morem', 'plavim morima']] },
            { caption: 'Prevoz — čime se vozimo?', head: ['', '', ''], rows: [['bus — busom', 'voz — vozom', 'avion — avionom'], ['tramvaj — tramvajem', 'metro — metroom', 'brod — brodom'], ['auto / kola — autom / kolima', 'bicikl — biciklom', 'motor — motorom'], ['taksi — taksijem', 'peške (пешком)', '']] }
          ]
        },
        {
          type: 'match', min: 5, title: 'Čime se vozimo? · транспорт',
          note: 'В оригинале — фото. Соедините слово с описанием.',
          pairs: [
            ['bus', 'veliki, narandžasti, gradski prevoz'], ['voz', 'ide po šinama između gradova'], ['avion', 'leti'], ['tramvaj', 'žuti, ide po šinama u gradu'],
            ['auto / kola', 'lični prevoz, četiri točka'], ['brod', 'ide po vodi'], ['metro', 'ide pod zemljom'], ['taksi', 'žuti auto, platite vožnju'],
            ['bicikl', 'dva točka, pedale'], ['motor', 'dva točka, motor, kaciga']
          ]
        },
        {
          type: 'gap', min: 7, title: 'Izaberite ispravnu varijantu · инструментал',
          options: ['busom', 'bus', 'zemljom', 'zemlja', 'prijateljima', 'prijatelji', 'peške', 'pešaka', 'kolima', 'kola', 'gradom', 'grad', 'mamom', 'mama', 'vozom', 'avionom'],
          items: [
            'Svakog dana idem na fakultet {busom}.', 'Pod {zemljom} ide brzi voz — Soko. Da li putujete Sokolom?', 'Danas idemo sa {prijateljima} u bioskop da gledamo film.',
            'Zašto nikad ne idete {peške}?', 'Njen tata ide na posao samo {kolima}.', 'Nad njegovim {gradom} je mnogo crnih oblaka.', 'Ona putuje sa {mamom} u Italiju.'
          ]
        },
        {
          type: 'gap', min: 6, title: 'Unesite instrumental · впишите форму',
          items: [
            'Idem na more sa {mužem} (muž).', 'Stojimo za {bioskopom} (bioskop).', 'Lopta je pod {stolom} (sto).', 'Šetamo se lepom {ulicom} (ulica).',
            'Putujemo {vozom} (voz) i {brodom} (brod).', 'Družim se sa {Goranom} (Goran) i {Milicom} (Milica).', 'Oblaci su nad velikim {gradovima} (gradovi).', 'Idemo u školu sa {decom} (deca).'
          ]
        },
        {
          type: 'qa', mode: 'translate', min: 8, title: 'Prevedite · переведите (ići = ехать, leteti = лететь)',
          note: 'Задание из курса. Сначала вслух, потом запишите.',
          items: [
            { q: 'Они очень любят гулять по городу.', a: ['Oni mnogo vole da se šetaju gradom.', 'Oni jako vole da se šetaju gradom.', 'Oni veoma vole da se šetaju gradom.', 'Oni mnogo vole da šetaju gradom.'] },
            { q: 'Ненад путешествует с друзьями на машине.', a: ['Nenad putuje sa prijateljima kolima.', 'Nenad putuje kolima sa prijateljima.', 'Nenad putuje sa prijateljima autom.'] },
            { q: 'Ой, он не любит ездить на автобусе! Только на такси.', a: ['Joj, on ne voli da ide busom! Samo taksijem.', 'Joj, on ne voli da se vozi busom! Samo taksijem.', 'Joj, on ne voli da ide autobusom! Samo taksijem.'] },
            { q: 'С братом мы летали на самолёте в Канаду и Англию.', a: ['Sa bratom smo leteli avionom u Kanadu i Englesku.', 'Sa bratom smo letele avionom u Kanadu i Englesku.', 'Leteli smo sa bratom avionom u Kanadu i Englesku.'] },
            { q: 'Ты ехал на поезде или на пароме?', a: ['Da li si išao vozom ili brodom?', 'Jesi li išao vozom ili brodom?', 'Da li si išla vozom ili brodom?', 'Da li si putovao vozom ili brodom?'] },
            { q: 'Раньше я бегал по набережной каждый день!', a: ['Ranije sam trčao kejom svaki dan!', 'Ranije sam trčala kejom svaki dan!', 'Ranije sam svaki dan trčao kejom!'] }
          ]
        },
        {
          type: 'speak', min: 15, title: 'Kako putuješ? · разговор о транспорте',
          note: 'Ответьте друг другу, потом расскажите о самой долгой поездке в перфекте: Putovao sam vozom 30 sati… В конце — «летающая машина Теслы»: чем бы вы хотели ездить и почему.',
          items: [
            { q: 'Čime ideš na posao? Koliko traje put?', sample: 'Na posao idem metroom i busom, put traje 40 minuta.' },
            { q: 'Da li voliš da putuješ vozom, avionom ili kolima? Zašto?', sample: 'Volim da putujem vozom, jer mogu da čitam i gledam kroz prozor.' },
            { q: 'Sa kim obično putuješ?', sample: 'Obično putujem sa devojkom ili sa prijateljima.' },
            { q: 'Koji prevoz mrziš? Šta je pod tvojim stanom, nad tvojim gradom?', sample: 'Mrzim gradski bus kad je gužva. Pod stanom je garaža, nad gradom su oblaci.' },
            { q: 'Kako je izgledalo tvoje najduže putovanje?', sample: 'Putovala sam vozom iz Moskve u Sočи 30 sati, sa sestrom. Bilo je dugo, ali lepo.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'instrumental: velikim gradom, lepom ženom, plavim morem; mn.: gradovima, ženama',
            'busom, vozom, avionom, kolima, biciklom, taksijem, peške',
            'sa mužem, pod stolom, nad gradom, među nama, pred šefom',
            'Šetamo se gradom. Družim se sa Goranom.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: транспорт и инструментал', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'transform', title: 'Instrumental · «Putujem …»', est: 6,
          items: [
            { q: 'Putujem … (voz)', a: ['vozom'] }, { q: 'Putujem … (avion)', a: ['avionom'] }, { q: 'Putujem … (kola)', a: ['kolima'] }, { q: 'Idem … (bus)', a: ['busom'] },
            { q: 'Idem … (taksi)', a: ['taksijem'] }, { q: 'Idem … (bicikl)', a: ['biciklom'] }, { q: 'Idem sa … (muž)', a: ['sa mužem', 'mužem'] }, { q: 'Idem sa … (sestra)', a: ['sa sestrom', 'sestrom'] },
            { q: 'Idem sa … (prijatelji)', a: ['sa prijateljima', 'prijateljima'] }, { q: 'Šetam se … (lepa ulica)', a: ['lepom ulicom'] }
          ]
        },
        { type: 'conj', tense: 'past', title: 'Тренажёр: перфект глаголов движения', est: 5, verbs: ['ici', 'leteti', 'putovati', 'trcati'], rounds: 10 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Idem na stanicu busom.'] }, { a: ['Mi često putujemo vozom.'] }, { a: ['Tvoja lopta je pod stolom.'] },
            { a: ['Veliki oblaci su nad mojim gradom.'] }, { a: ['Dara putuje u Češku sa mamom.'] }, { a: ['Pod zemljom ide metro.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Я еду на работу на трамвае.', a: ['Idem na posao tramvajem.', 'Ja idem na posao tramvajem.'] },
            { q: 'Мы путешествуем с детьми на машине.', a: ['Putujemo sa decom kolima.', 'Putujemo kolima sa decom.', 'Mi putujemo sa decom kolima.'] },
            { q: 'Под столом лежит кошка.', a: ['Pod stolom leži mačka.', 'Mačka leži pod stolom.'] },
            { q: 'Эта тайна останется между нами.', a: ['Ova tajna ostaje među nama.', 'Ta tajna ostaje među nama.'] },
            { q: 'Я гуляю по парку с собакой.', a: ['Šetam se parkom sa psom.', 'Šetam parkom sa psom.'] },
            { q: 'Почему вы никогда не ходите пешком?', a: ['Zašto nikad ne idete peške?'] },
            { q: 'Он летел самолётом в Лондон.', a: ['Leteo je avionom u London.', 'On je leteo avionom u London.'] }
          ]
        },
        {
          type: 'write', title: 'Moje putovanje · поездка в перфекте + запись', est: 8, key: 'hw-12.2-putovanje', record: true,
          note: '8 предложений о какой-нибудь поездке: чем ехали, с кем, куда, что видели. Минимум четыре инструментала. Запишите чтение вслух.',
          sample: 'Prošlog leta sam putovala sa sestrom u Crnu Goru. Išle smo vozom iz Beograda do Bara, put je trajao dvanaest sati. Vozom smo prošle preko mostova i kroz tunele. U Baru smo se vozile taksijem do hotela. Šetale smo se kejom svako veče. Jednog dana smo išle brodom na ostrvo. Nad morem su leteli galebovi. Vratile smo se avionom.'
        }
      ]
    }
  ]
});
