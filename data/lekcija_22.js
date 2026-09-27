// Lekcija 22 - Moda. Three 60-minute sessions: clothes & style, loanwords declension, dressing for weather + describing people.
COURSE.register({
  n: 22,
  title: 'Moda',
  ru: 'Одежда и стиль; склонение заимствований (-o, -e, -u, -i); как одеться',

  vocab: [
    { id: 'peglati', sr: 'peglati odeću, ja peglam', ru: 'гладить одежду', set: 'A' },
    { id: 'pregib', sr: 'pregib', ru: 'складка', set: 'A' },
    { id: 'zguzvana', sr: 'zgužvana odeća', ru: 'мятая одежда', set: 'A' },
    { id: 'ne-podnosim', sr: 'ne podnosim', ru: 'терпеть не могу', set: 'A' },
    { id: 'kravata', sr: 'kravata — kolekcija kravata', ru: 'галстук — коллекция галстуков', set: 'A' },
    { id: 'birati', sr: 'birati, ja biram', ru: 'выбирать', set: 'A' },
    { id: 'majica', sr: 'majica — majica sa kratkim rukavima', ru: 'майка, футболка', set: 'A' },
    { id: 'farmerke', sr: 'farmerke', ru: 'джинсы', set: 'A' },
    { id: 'pantalone', sr: 'pantalone', ru: 'брюки', set: 'A' },
    { id: 'suknja', sr: 'suknja', ru: 'юбка', set: 'A' },
    { id: 'kosulja', sr: 'košulja', ru: 'рубашка', set: 'A' },
    { id: 'dukserica', sr: 'dukserica', ru: 'толстовка', set: 'A' },
    { id: 'carape', sr: 'čarape', ru: 'носки', set: 'A' },
    { id: 'helanke', sr: 'helanke — holahopke', ru: 'леггинсы — колготки', set: 'A' },
    { id: 'jakna', sr: 'jakna, kabanica', ru: 'куртка, ветровка', set: 'A' },
    { id: 'kaput', sr: 'kaput', ru: 'пальто', set: 'A' },
    { id: 'trenerka', sr: 'trenerka', ru: 'спортивный костюм', set: 'A' },
    { id: 'haljina', sr: 'haljina', ru: 'платье', set: 'A' },
    { id: 'cipele', sr: 'cipele, patike, čizme', ru: 'туфли, кроссовки, сапоги', set: 'A' },
    { id: 'kacket', sr: 'kačket, kapa, sunčanice', ru: 'кепка, шапка, солнечные очки', set: 'A' },
    { id: 'kupaci', sr: 'kupaći kostim, šorts', ru: 'купальник, шорты', set: 'A' },
    { id: 'nositi', sr: 'nositi + akuzativ, ja nosim', ru: 'носить', set: 'A' },
    { id: 'obuci-se', sr: 'obući se, ja se obučem', ru: 'одеться (сов.)', set: 'A' },
    { id: 'oblaciti-se22', sr: 'oblačiti se, ja se oblačim — Mama oblači Anu u jaknu.', ru: 'одеваться — Мама одевает Ану в куртку.', set: 'A' },
    { id: 'elegantno', sr: 'elegantno', ru: 'элегантно', set: 'A' },
    { id: 'svecano', sr: 'svečano', ru: 'торжественно, празднично', set: 'A' },
    { id: 'svakodnevno', sr: 'svakodnevno', ru: 'повседневно', set: 'A' },
    { id: 'sportski', sr: 'sportski', ru: 'спортивно', set: 'A' },
    { id: 'neobicno', sr: 'neobično, čudno', ru: 'необычно, странно', set: 'A' },
    { id: 'stilski', sr: 'stilski', ru: 'стильно', set: 'A' },
    { id: 'hrabro', sr: 'hrabro, otvoreno', ru: 'смело, открыто', set: 'A' },
    { id: 'ruzno', sr: 'ružno', ru: 'некрасиво, страшно', set: 'A' },

    { id: 'pozajmljenica', sr: 'pozajmljenica', ru: 'заимствование', set: 'B' },
    { id: 'rezime22', sr: 'rezime — rezimea, rezimeu, rezimeom', ru: 'резюме (склоняется с сохранением -e)', set: 'B' },
    { id: 'nivo', sr: 'nivo, biro, bife, kakadu, metro, intervju, tabu', ru: 'уровень, бюро, буфет, какаду, метро, интервью, табу', set: 'B' },
    { id: 'kupe', sr: 'kupe, atelje, siže', ru: 'купе, ателье, сюжет', set: 'B' },
    { id: 'taksi22', sr: 'taksi — taksija, taksiju, taksijem', ru: 'такси (вставное j)', set: 'B' },
    { id: 'ziri', sr: 'žiri, si-vi, viski, Soči, Helsinki, Tbilisi', ru: 'жюри, CV, виски, Сочи, Хельсинки, Тбилиси', set: 'B' },
    { id: 'auto22', sr: 'auto — auta, autu, autom; auti', ru: 'автомобиль (отбрасывает -o)', set: 'B' },
    { id: 'veto', sr: 'veto, tornado, evro, kakao, kazino, Meksiko, Čikago, Maroko', ru: 'вето, торнадо, евро, какао, казино, Мехико, Чикаго, Марокко', set: 'B' },
    { id: 'radio', sr: 'radio — radija, radiju, radiom', ru: 'радио', set: 'B' },
    { id: 'tokio', sr: 'Tokio — u Tokiju; Baku — u Bakuu', ru: 'Токио — в Токио; Баку — в Баку', set: 'B' },
    { id: 'lici', sr: 'ličiš na kakadua', ru: 'ты похожа на какаду', set: 'B' },
    { id: 'kostim', sr: 'kostim — prelepi kostimi', ru: 'костюм — прекрасные костюмы', set: 'B' },
    { id: 'donji-ves', sr: 'donji veš', ru: 'нижнее бельё', set: 'B' },
    { id: 'radovati-se', sr: 'radovati se (+ dativ)', ru: 'радоваться', set: 'B' },
    { id: 'u-trendu', sr: 'u trendu', ru: 'в тренде', set: 'B' },

    { id: 'hladno', sr: 'hladno vreme — vruće vreme', ru: 'холодная погода — жаркая погода', set: 'C' },
    { id: 'moda-sada', sr: 'Danas je moda drugačija nego nekad.', ru: 'Сегодня мода отличается от прежней.', set: 'C' },
    { id: 'prakticna', sr: 'praktična i kvalitetna odeća', ru: 'практичная и качественная одежда', set: 'C' },
    { id: 'nakit', sr: 'nakit, ukrasi, pojasevi', ru: 'украшения, аксессуары, ремни', set: 'C' },
    { id: 'lezerno', sr: 'ležerna odeća', ru: 'повседневная (casual) одежда', set: 'C' },
    { id: 'sokantan', sr: 'šokantne frizure', ru: 'шокирующие причёски', set: 'C' },
    { id: 'sesir', sr: 'šešir, marama, naočare', ru: 'шляпа, платок, очки', set: 'C' },
    { id: 'odelo', sr: 'odelo', ru: 'костюм (мужской)', set: 'C' },
    { id: 'mrsav', sr: 'mršav — debeo', ru: 'худой — толстый', set: 'C' },
    { id: 'zgodan', sr: 'zgodan, zgodna', ru: 'привлекательный', set: 'C' },
    { id: 'struk', sr: 'uzak struk, široka ramena', ru: 'узкая талия, широкие плечи', set: 'C' },
    { id: 'seda', sr: 'plava, seda, smeđa kosa', ru: 'светлые, седые, каштановые волосы', set: 'C' },
    { id: 'podignuta', sr: 'podignuta kosa', ru: 'поднятые волосы', set: 'C' },
    { id: 'naocare-za-sunce', sr: 'naočare za sunce', ru: 'солнечные очки', set: 'C' }
  ],

  verbs: {
    nositi: { inf: 'nositi', ru: 'носить', pos: { ja: 'nosim', ti: 'nosiš', on: 'nosi', mi: 'nosimo', vi: 'nosite', oni: 'nose' }, neg: { ja: 'ne nosim', ti: 'ne nosiš', on: 'ne nosi', mi: 'ne nosimo', vi: 'ne nosite', oni: 'ne nose' }, l: { m: 'nosio', f: 'nosila', n: 'nosilo', mpl: 'nosili', fpl: 'nosile' } },
    oblaciti: { inf: 'oblačiti se', ru: 'одеваться', pos: { ja: 'se oblačim', ti: 'se oblačiš', on: 'se oblači', mi: 'se oblačimo', vi: 'se oblačite', oni: 'se oblače' }, neg: { ja: 'se ne oblačim', ti: 'se ne oblačiš', on: 'se ne oblači', mi: 'se ne oblačimo', vi: 'se ne oblačite', oni: 'se ne oblače' }, l: { m: 'se oblačio', f: 'se oblačila', n: 'se oblačilo', mpl: 'se oblačili', fpl: 'se oblačile' } },
    obuci: { inf: 'obući se', ru: 'одеться', pos: { ja: 'se obučem', ti: 'se obučeš', on: 'se obuče', mi: 'se obučemo', vi: 'se obučete', oni: 'se obuku' }, neg: { ja: 'se ne obučem', ti: 'se ne obučeš', on: 'se ne obuče', mi: 'se ne obučemo', vi: 'se ne obučete', oni: 'se ne obuku' }, l: { m: 'se obukao', f: 'se obukla', n: 'se obuklo', mpl: 'se obukli', fpl: 'se obukle' } },
    peglati: { inf: 'peglati', ru: 'гладить', pos: { ja: 'peglam', ti: 'peglaš', on: 'pegla', mi: 'peglamo', vi: 'peglate', oni: 'peglaju' }, neg: { ja: 'ne peglam', ti: 'ne peglaš', on: 'ne pegla', mi: 'ne peglamo', vi: 'ne peglate', oni: 'ne peglaju' }, l: { m: 'peglao', f: 'peglala', n: 'peglalo', mpl: 'peglali', fpl: 'peglale' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '22.1',
      title: 'Odeća i stil',
      ru: 'Одежда, nositi / obući se / oblačiti se, как описать стиль',
      goals: [
        'назвать 25 предметов одежды и обуви',
        'различать nositi, obući se, oblačiti se и oblačiti nekoga',
        'описать стиль: elegantno, sportski, svakodnevno, neobično'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Ko šta oblači',
          note: 'Андрич гладит рубашки, Джокович носит только кроссовки, Тесла выбирает галстук, Абрамович любит необычные платья. Прочитайте кириллицу сами.',
          img: 'img/l22_strip.png',
          lines: [
            { who: 'Ivo', sr: 'Volim da peglam košulje, jer ne podnosim zgužvanu odeću… Evo opet pregib!', ru: 'Люблю гладить рубашки, потому что терпеть не могу мятую одежду… Вот опять складка!' },
            { who: 'Novak', sr: 'Samo patike! Najbolje su za sportiste, ništa drugo ni ne nosim.', ru: 'Только кроссовки! Они лучшие для спортсменов, ничего другого и не ношу.' },
            { who: 'Nikola', sr: 'A ja imam kolekciju kravata. Hmm… koju da biram danas?', ru: 'А у меня коллекция галстуков. Хм… какой выбрать сегодня?' },
            { who: 'Marina', sr: 'Kao umetnica, volim lepe, neobične haljine!', ru: 'Как художница, я люблю красивые, необычные платья!' }
          ]
        },
        {
          type: 'text', min: 7, title: 'Odeća · одежда',
          note: 'В курсе — 12 фото. Прочитайте все слова вслух, потом закройте таблицу и назовите, что на вас сейчас.',
          tables: [
            { caption: 'Odeća', head: ['', '', '', ''], rows: [['majica — футболка', 'farmerke — джинсы', 'pantalone — брюки', 'suknja — юбка'], ['košulja — рубашка', 'dukserica — толстовка', 'čarape — носки', 'helanke — леггинсы'], ['holahopke — колготки', 'jakna / kabanica — куртка', 'kaput — пальто', 'trenerka — спорткостюм'], ['haljina — платье', 'kupaći kostim — купальник', 'šorts — шорты', 'donji veš — бельё']] },
            { caption: 'Obuća i ostalo', head: ['', '', '', ''], rows: [['cipele — туфли', 'patike — кроссовки', 'čizme — сапоги', 'kačket — кепка'], ['kapa — шапка', 'sunčanice — солнечные очки', 'kravata — галстук', 'šešir — шляпа']] }
          ]
        },
        {
          type: 'gap', bank: true, min: 5, title: 'Šta nosite danas? · подпишите одежду',
          note: 'В оригинале — фото. По описанию впишите слово из банка.',
          items: [
            'Plave, od teksasa — {farmerke}.', 'Duga crna, na bretele — {haljina}.', 'Crna, sa kratkim rukavima — {majica}.', 'Plava, od tila, za devojku — {suknja}.',
            'Bela, sa kragnom i dugmadima — {košulja}.', 'Plave, uske, za jogu — {helanke}.', 'Šarene, za stopala — {čarape}.', 'Žuta, debela, za zimu — {jakna/kabanica}.',
            'Dug, braon, za jesen — {kaput}.', 'Žuta, sa kapuljačom — {dukserica}.', 'Crvene, od somota — {pantalone}.', 'Za sport, gornji i donji deo — {trenerka}.'
          ]
        },
        {
          type: 'text', min: 5, title: 'Nositi, obući se, oblačiti se',
          html:
            '<ul><li>[[nositi]] + аккузатив — носить что-то: [[Nosim farmerke i majicu.]]</li>' +
            '<li>[[obući se]], ja se obučem — одеться (один раз): [[Obukla sam se za pet minuta.]]</li>' +
            '<li>[[oblačiti se]], ja se oblačim — одеваться (обычно): [[Volim da se oblačim sportski.]]</li>' +
            '<li>«Одеть кого-то» — убрать se: [[Mama oblači Anu u jaknu.]]</li></ul>',
          img: 'img/l22_stil.png'
        },
        {
          type: 'match', min: 5, title: 'Da opišemo izgled · как описать стиль',
          pairs: [
            ['elegantno', 'элегантно, изящно'], ['svečano', 'торжественно, празднично'], ['svakodnevno', 'повседневно'], ['sportski', 'спортивно'], ['neobično', 'необычно'],
            ['stilski', 'стильно'], ['hrabro', 'смело'], ['otvoreno', 'откровенно, открыто'], ['čudno', 'странно'], ['ružno', 'некрасиво, страшно']
          ]
        },
        {
          type: 'gap', min: 5, title: 'Nositi ili oblačiti? · впишите глагол',
          items: [
            'Danas {nosim} (nositi, ja) farmerke i majicu.', 'Ujutru {se oblačim} (oblačiti se, ja) brzo.', 'Mama {oblači} (oblačiti) sina u jaknu.',
            'Za slavu {se obukla} (obući se, ona, perfekat) svečano.', 'Novak uvek {nosi} (nositi) patike.', 'Kako {se oblačiš} (oblačiti se, ti) za posao?'
          ]
        },
        {
          type: 'speak', min: 8, title: 'Kako izgledaju ovi ljudi? · опишите наряды',
          note: 'В курсе — четыре фото известных людей (Айрис Апфель и другие). Опишите одежду и стиль друг друга и трёх знакомых людей: šta nosi, kako se oblači.',
          items: [
            { q: 'Šta nosiš danas? Kako se obično oblačiš?', sample: 'Danas nosim farmerke, belu košulju i patike. Obično se oblačim svakodnevno i sportski.' },
            { q: 'Kako se oblači tvoj partner / tvoja mama / tvoj šef?', sample: 'Moj šef se oblači elegantno: nosi odelo i kravatu. Mama se oblači stilski.' },
            { q: 'Ajris Apfel: kako izgleda?', sample: 'Nosi velike naočare, mnogo nakita i šarenu jaknu. Oblači se hrabro i neobično!' }
          ]
        },
        {
          type: 'speak', min: 17, title: 'Šta nosite kada je…? · вопросы из курса',
          note: 'Ответьте друг другу, потом «модный совет»: партнёр называет событие (svadba, plaža, intervju za posao, planinarenje), вы говорите, что надеть.',
          items: [
            { q: 'Šta nosite danas?', sample: 'Nosim crne pantalone, plavu košulju i cipele.' },
            { q: 'Šta nosite kada je hladno / toplo / vruće?', sample: 'Kad je hladno, nosim kaput, kapu i čizme. Kad je vruće, nosim šorts, majicu i sunčanice.' },
            { q: 'Šta bi obukao / obukla za svadbu? Za plažu? Za intervju?', sample: 'Za svadbu bih obukla svečanu haljinu i cipele. Za plažu kupaći kostim i šešir.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'majica, farmerke, pantalone, suknja, košulja, dukserica, jakna, kaput, haljina',
            'cipele, patike, čizme; kačket, kapa, sunčanice',
            'nositi + akuzativ; obući se — oblačiti se; oblačiti nekoga',
            'elegantno, svečano, svakodnevno, sportski, neobično, stilski'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: одежда и стиль', est: 10, set: 'A' },
        { type: 'conj', title: 'Тренажёр: nositi, oblačiti se, obući se, peglati', est: 5, verbs: ['nositi', 'oblaciti', 'obuci', 'peglati'], rounds: 10 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Volim da peglam košulje, jer ne podnosim zgužvanu odeću.'] }, { a: ['Samo patike! Ništa drugo ni ne nosim.'] }, { a: ['Imam kolekciju kravata.'] },
            { a: ['Volim lepe, neobične haljine!'] }, { a: ['Mama oblači Anu u jaknu.'] }, { a: ['Volim da se oblačim sportski.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Сегодня я ношу джинсы и футболку.', a: ['Danas nosim farmerke i majicu.', 'Danas ja nosim farmerke i majicu.'] },
            { q: 'Когда холодно, я ношу пальто и шапку.', a: ['Kad je hladno, nosim kaput i kapu.', 'Kada je hladno, nosim kaput i kapu.'] },
            { q: 'Она одевается элегантно.', a: ['Ona se oblači elegantno.', 'Oblači se elegantno.'] },
            { q: 'Я оделся за пять минут.', a: ['Obukao sam se za pet minuta.', 'Obukla sam se za pet minuta.'] },
            { q: 'Мама одевает сына в куртку.', a: ['Mama oblači sina u jaknu.'] },
            { q: 'Терпеть не могу мятую одежду.', a: ['Ne podnosim zgužvanu odeću.'] },
            { q: 'Какой галстук выбрать сегодня?', a: ['Koju kravatu da biram danas?', 'Koju kravatu da izaberem danas?'] }
          ]
        },
        {
          type: 'write', title: 'Moj stil · текст о своём стиле', est: 7, key: 'hw-22.1-stil',
          note: '8 предложений: что носите обычно, что в холод и жару, как одеваетесь на работу и на праздник, какой стиль вам нравится.',
          sample: 'Obično se oblačim svakodnevno: nosim farmerke, majicu i patike. Kad je hladno, nosim kaput, kapu i čizme. Leti nosim šorts i sunčanice. Na posao se oblačim malo elegantnije: košulja i pantalone. Za slavu bih obukla svečanu haljinu. Ne volim da peglam, zato ne nosim košulje često. Sviđa mi se stilska, ali udobna odeća.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '22.2',
      title: 'Pozajmljenice',
      ru: 'Склонение заимствований: rezime, taksi, auto',
      goals: [
        'различать три типа заимствований мужского рода на гласный',
        'просклонять rezime (сохраняет -e), taksi (вставное j), auto (отбрасывает -o)',
        'использовать их в предложениях: taksijem, u Meksiku, u Tokiju'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о стиле. Партнёр описывает ваш стиль одним словом из списка: elegantno, sportski…',
          items: [{ q: 'Obično se oblačim…' }]
        },
        {
          type: 'text', min: 10, title: 'Pozajmljenice · заимствования',
          html:
            '<p>Существительные мужского рода обычно кончаются на согласный, но есть класс слов на гласный — многочисленные <b>заимствования</b>. Три типа:</p>' +
            '<p><b>1. На -o, -e, -u</b> — сохраняют конечный гласный и присоединяют окончание: [[nivo]], [[biro]], [[bife]], [[kakadu]], [[rezime]], [[metro]], [[intervju]], [[tabu]], [[kupe]], [[atelje]], [[siže]], Čile, Baku, Peru.</p>',
          tables: [
            { caption: 'dobar rezime', head: ['padež', 'jednina', 'množina'], rows: [['N', 'dobar rezime', 'dobri rezimei'], ['G', 'dobrog rezimea', 'dobrih rezimea'], ['D', 'dobrom rezimeu', 'dobrim rezimeima'], ['A', 'dobar rezime', 'dobre rezimee'], ['I', 'dobrim rezimeom', 'dobrim rezimeima'], ['L', 'dobrom rezimeu', 'dobrim rezimeima']] }
          ],
          after:
            '<p><b>2. На -i</b> — во множественном числе и в косвенных падежах появляется вставное <b>j</b>: [[žiri]], [[si-vi]], [[viski]], [[taksi]], Soči, Helsinki, Tbilisi.</p>' +
            '<p><b>3. Отбрасывают конечный гласный</b>, на его место встаёт окончание: [[veto]], [[tornado]], [[auto]], [[evro]], [[kakao]], [[kazino]], Meksiko, Čikago, Maroko.</p>'
        },
        {
          type: 'text', min: 3, title: 'Tablice · taksi i auto',
          tables: [
            { caption: 'skup taksi (тип 2)', head: ['padež', 'jednina', 'množina'], rows: [['N', 'skup taksi', 'skupi taksiji'], ['G', 'skupog taksija', 'skupih taksija'], ['D', 'skupom taksiju', 'skupim taksijima'], ['A', 'skup taksi', 'skupe taksije'], ['I', 'skupim taksijem', 'skupim taksijima'], ['L', 'skupom taksiju', 'skupim taksijima']] },
            { caption: 'nov auto (тип 3)', head: ['padež', 'jednina', 'množina'], rows: [['N', 'nov auto', 'novi auti'], ['G', 'novog auta', 'novih auta'], ['D', 'novom autu', 'novim autima'], ['A', 'nov auto', 'nove aute'], ['I', 'novim autom', 'novim autima'], ['L', 'novom autu', 'novim autima']] }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Upišite odgovarajući oblik · первый тип',
          note: 'Упражнение из курса.',
          items: [
            'Mi putujemo u {kupeu} (kupe), oblačili smo se u trenerke.', 'Nataša retko ide {metroom} (metro) zbog toga što voli da nosi svečanu odeću.', 'Mamice-mamice! Pogledaj moju novu haljinu! Baka je kupila u {ateljeu} (atelje).',
            'Danas Gordan nosi pantalone i košulju, on se slika za {rezime} (rezime).', 'Joj, seko, u ovoj haljini ličiš na {kakadua} (kakadu)!', 'Baš nam se dopao taj film — odličan {siže} (siže) i lepa odeća!', 'Na ovom {nivou} (nivo) prodaju se čarape, helanke, donji veš…'
          ]
        },
        {
          type: 'gap', min: 8, title: 'Deklinišite reči · просклоняйте viski и Soči',
          note: 'Упражнение из курса: второй тип, вставное j.',
          items: [
            'Viski: N — ovo je dobar {viski}. G — mi nemamo tog dobrog {viskija}. D — imam odličan odnos prema tom dobrom {viskiju}.',
            'A — ne pamtim taj dobar {viski}. I — zadovoljni smo tim dobrim {viskijem}. L — često priča o tom dobrom {viskiju}.',
            'Soči: N — Ovo je grad {Soči}. G — u Srbiji nema {Sočija}. D — idemo sada ka {Sočiju}.',
            'A — želim da vidim {Soči}. I — oduševljeni smo gradom {Sočijem}. L — retko mislim o {Sočiju}.'
          ]
        },
        {
          type: 'mc', min: 6, title: 'Izaberite ispravnu varijantu · все три типа',
          note: 'Упражнение из курса.',
          items: [
            { q: 'Dana nosi haljine, suknje i putuje samo ….', options: ['taksiem', 'taksijem', 'taksiim', 'taksem'], a: 'taksijem' },
            { q: 'Obožavam farmerke Levi’s, to su dizajne na visokom …!', options: ['nivoju', 'nivu', 'nivou', 'nivoa'], a: 'nivou' },
            { q: 'U … žene ponekad nose specijalne haljine — kimono.', options: ['Tokiu', 'Tokio', 'Tokijo', 'Tokiju'], a: 'Tokiju' },
            { q: 'Matija kaže da je u … vruće i niko ne nosi čarape tamo!', options: ['Meksiku', 'Meksiko', 'Meksikuu', 'Meksikou'], a: 'Meksiku' },
            { q: 'Čula sam preko … da su ove majice u trendu!', options: ['radioa', 'radija', 'radia', 'radioja'], a: 'radija' },
            { q: 'Njena slika u … je odlična. Košulja, kosa, šminka — savršeno!', options: ['rezimeju', 'rezime', 'rezimeja', 'rezimeu'], a: 'rezimeu' },
            { q: 'Ne možemo zamisliti zimu bez toplih čarapa, snega, jakna, rukavica i ….', options: ['kakaa', 'kakaoa', 'kakaja', 'kakaoja'], a: 'kakaa' },
            { q: 'U … je toplo i prijatno, danas smo se obukli u majice i šortseve.', options: ['Baku', 'Bakuu', 'Bakua', 'Bakuju'], a: 'Bakuu' }
          ]
        },
        {
          type: 'gap', min: 8, title: 'Unesite odgovarajući oblik · все три типа',
          note: 'Упражнение из курса.',
          items: [
            'Putujemo u udobnom {kupeu} (kupe).', 'Da li često idete {taksijem} (taksi)?', 'U Beogradu nema {metroa} (metro).', 'Moja ćerka želi da popije malo {kakaa} (kakao).',
            'Ova devojka ima lepu sliku u {rezimeu} (rezime)!', 'Dali smo Mirku poklon, on se baš radovao skupom {viskiju} (viski)!', 'U {Meksiku} (Meksiko) smo bili u decembru, bilo je vruće.',
            'Društvo je putovalo novim {autom} (auto).', 'Pa on nema više {evra} (evro)!', 'U {Čikagu} (Čikago) živi mnogo Srba.'
          ]
        },
        {
          type: 'speak', min: 12, title: 'Priča sa pozajmljenicama · разговор',
          note: 'Каждый строит 6 предложений с заимствованиями в разных падежах: taksi, metro, auto, evro, kakao, rezime, viski, Tokio, Meksiko. Партнёр называет тип (1, 2 или 3).',
          items: [
            { q: 'Čime ideš na posao: taksijem, metroom ili autom?', sample: 'Idem metroom, ali nekad taksijem. Nemam auto.' },
            { q: 'Koliko evra košta dobar viski?', sample: 'Dobar viski košta trideset evra. Ne pijem viski, više volim kakao.' },
            { q: 'Da li si bio / bila u Tokiju, Meksiku, Čikagu?', sample: 'Nisam bila u Tokiju, ali sam bila u Meksiku.' },
            { q: 'Šta piše u tvom rezimeu?', sample: 'U mom rezimeu piše da govorim tri jezika.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'тип 1: rezime — rezimea, rezimeu, rezimeom; u kupeu, na nivou, metroom',
            'тип 2: taksi — taksija, taksiju, taksijem; u Tokiju, viskijem',
            'тип 3: auto — auta, autu, autom; u Meksiku, u Čikagu, malo kakaa, nema evra',
            'radio — radija (вставное j)'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: заимствования', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'transform', title: 'Pozajmljenice · поставьте в падеж', est: 6,
          items: [
            { q: 'idem … (taksi, instrumental)', a: ['taksijem'] }, { q: 'nema … (metro, genitiv)', a: ['metroa'] }, { q: 'u … (Tokio, lokativ)', a: ['u Tokiju', 'Tokiju'] }, { q: 'u … (Meksiko, lokativ)', a: ['u Meksiku', 'Meksiku'] },
            { q: 'novim … (auto, instrumental)', a: ['autom'] }, { q: 'malo … (kakao, genitiv)', a: ['kakaa'] }, { q: 'u … (rezime, lokativ)', a: ['u rezimeu', 'rezimeu'] }, { q: 'skupim … (viski, instrumental)', a: ['viskijem'] },
            { q: 'nema … (evro, genitiv mn.)', a: ['evra'] }, { q: 'u … (kupe, lokativ)', a: ['u kupeu', 'kupeu'] }, { q: 'preko … (radio, genitiv)', a: ['radija'] }, { q: 'u … (Čikago, lokativ)', a: ['u Čikagu', 'Čikagu'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Mi putujemo u kupeu.'] }, { a: ['Nataša retko ide metroom.'] }, { a: ['U ovoj haljini ličiš na kakadua!'] },
            { a: ['Da li često idete taksijem?'] }, { a: ['U Beogradu nema metroa.'] }, { a: ['U Čikagu živi mnogo Srba.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Я еду на такси.', a: ['Idem taksijem.', 'Ja idem taksijem.'] },
            { q: 'В Белграде нет метро.', a: ['U Beogradu nema metroa.'] },
            { q: 'Моя дочь хочет выпить немного какао.', a: ['Moja ćerka želi da popije malo kakaa.'] },
            { q: 'Мы были в Мексике в декабре.', a: ['Bili smo u Meksiku u decembru.', 'U Meksiku smo bili u decembru.'] },
            { q: 'Компания поехала на новой машине.', a: ['Društvo je putovalo novim autom.'] },
            { q: 'У него больше нет евро.', a: ['On nema više evra.', 'Nema više evra.'] },
            { q: 'У этой девушки красивое фото в резюме.', a: ['Ova devojka ima lepu sliku u rezimeu.'] }
          ]
        },
        {
          type: 'write', title: 'Putovanje sa pozajmljenicama · текст', est: 7, key: 'hw-22.2-putovanje',
          note: '8 предложений о поездке (реальной или выдуманной) с минимум шестью заимствованиями в разных падежах: taksi, metro, auto, evro, kupe, Tokio, Meksiko, Čikago, viski, kakao.',
          sample: 'Prošle godine sam putovao u Tokio. Do aerodroma sam išao taksijem, jer nemam auto. Let je koštao petsto evra. U Tokiju nema metroa? Ima, i vozio sam se metroom svaki dan! Pio sam kakao u malom bifeu. Kupio sam poklon u ateljeu. Sledeće godine idem u Meksiko ili Čikago.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '22.3',
      title: 'Kako da se obučem?',
      ru: 'Одежда по погоде, текст «Moda sada», описание людей',
      goals: [
        'распределить одежду по погоде: hladno / vruće vreme',
        'понять текст о современной моде и ответить на вопросы',
        'описать внешность и одежду человека по картинке'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст. Партнёр называет все заимствования и их тип.',
          items: [{ q: 'Prošle godine sam putovao…' }]
        },
        {
          type: 'sort', min: 6, title: 'Stavite odeću na policu · холод или жара',
          note: 'Упражнение из курса.',
          groups: ['Hladno vreme', 'Vruće vreme'],
          items: [
            { w: 'čarape', g: 'Hladno vreme' }, { w: 'patike', g: 'Vruće vreme' }, { w: 'kapa', g: 'Hladno vreme' }, { w: 'kupaći kostim', g: 'Vruće vreme' }, { w: 'dukserica', g: 'Hladno vreme' },
            { w: 'suknja', g: 'Vruće vreme' }, { w: 'sunčanice', g: 'Vruće vreme' }, { w: 'kaput', g: 'Hladno vreme' }, { w: 'čizme', g: 'Hladno vreme' }, { w: 'kačket', g: 'Vruće vreme' },
            { w: 'majica', g: 'Vruće vreme' }, { w: 'haljina', g: 'Vruće vreme' }, { w: 'jakna', g: 'Hladno vreme' }, { w: 'kabanica', g: 'Hladno vreme' }, { w: 'helanke', g: 'Hladno vreme' }
          ]
        },
        {
          type: 'sort', min: 6, title: 'Saslušajte audiciju · кто что носит',
          note: 'В курсе — аудио с тремя говорящими. Здесь — их описания; распределите одежду по говорящим.',
          groups: ['Prvi govornik: sportista', 'Drugi govornik: poslovna žena', 'Treći govornik: turista zimi'],
          items: [
            { w: 'majicu sa kratkim rukavima', g: 'Prvi govornik: sportista' }, { w: 'patike', g: 'Prvi govornik: sportista' }, { w: 'kačket', g: 'Prvi govornik: sportista' }, { w: 'helanke', g: 'Prvi govornik: sportista' },
            { w: 'suknju', g: 'Drugi govornik: poslovna žena' }, { w: 'košulju', g: 'Drugi govornik: poslovna žena' }, { w: 'cipele', g: 'Drugi govornik: poslovna žena' }, { w: 'sunčanice', g: 'Drugi govornik: poslovna žena' },
            { w: 'kaput', g: 'Treći govornik: turista zimi' }, { w: 'čizme', g: 'Treći govornik: turista zimi' }, { w: 'kapu', g: 'Treći govornik: turista zimi' }, { w: 'čarape', g: 'Treći govornik: turista zimi' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Moda sada · текст из учебника',
          note: 'Текст на кириллице из сербского учебника. Прочитайте вслух по абзацу (переключатель Lat / Ћир вверху), потом ответьте на вопросы.',
          img: 'img/l22_moda.png',
          html:
            '<p>[[Danas je moda drugačija nego nekad. Važno je da je odeća praktična i kvalitetna. Ljudi danas nose različitu odeću i sve može biti moderno. Nosi se moderna, elegantna ili sportska odeća i obuća. I žene i muškarci nose nakit, ukrase, pojaseve, šminku. Žene ne nose samo haljine, suknje i kostime, često nose pantalone i odela. Današnje žene ponekad liče na muškarce. Muškarci danas nose odeću različitih boja. Ne nose samo odela tamnih boja kao nekad.]]</p>' +
            '<p>[[Često žene i muškarci nose sličnu odeću — farmerice, majice, sakoe, patike, trenerke. Odeća i obuća koju ljudi nose zavisi od njihovog zanimanja. Ako rade u firmi, onda moraju da nose elegantna odela. Ali, ako rade u školi ili na fakultetu, onda mogu da nose ležernu odeću. Ako su popularni glumci ili pevači, onda često nose neobičnu odeću i imaju šokantne frizure.]]</p>'
        },
        {
          type: 'tf', min: 4, title: 'Tačno ili netačno? · по тексту',
          items: [
            { q: 'Danas je važno da je odeća praktična i kvalitetna.', a: true }, { q: 'Muškarci ne nose nakit i šminku.', a: false, why: 'I žene i muškarci nose nakit, ukrase, šminku.' },
            { q: 'Žene nose samo haljine i suknje.', a: false, why: 'Često nose pantalone i odela.' }, { q: 'Muškarci danas nose odeću različitih boja.', a: true },
            { q: 'Ljudi u firmi mogu da nose ležernu odeću.', a: false, why: 'U firmi moraju da nose elegantna odela; ležerna odeća je za školu i fakultet.' }, { q: 'Glumci i pevači često nose neobičnu odeću.', a: true }
          ]
        },
        {
          type: 'text', min: 3, title: 'Tito i gosti · фотография 1973',
          html: '<p>В учебнике — фото Йосипа Броз Тито и Йованки Броз с гостями, американскими кинозвёздами Элизабет Тейлор и Ричардом Бартоном, 1973 год, во время съёмок фильма «Сутьеска» (Бартон играл Тито). Задание: кто что носит.</p>'
        },
        {
          type: 'mc', min: 5, title: 'Šta nose ljudi na fotografiji? · по фото из учебника',
          items: [
            { q: 'Žene nose …', options: ['pantalone', 'haljine', 'kapute'], a: 'haljine' }, { q: 'Žene nose …', options: ['nakit', 'puštenu kosu', 'naočare'], a: 'nakit' },
            { q: 'Žene imaju …', options: ['šešire', 'marame', 'kape'], a: 'marame' }, { q: 'Muškarci ne nose …', options: ['šešire', 'marame', 'kape'], a: 'šešire' },
            { q: 'Muškarci nose …', options: ['šortseve', 'pantalone', 'farmerice'], a: 'pantalone' }, { q: 'Muškarci drže …', options: ['cveće', 'cveće i cigaru', 'cigare'], a: 'cveće i cigaru' }
          ]
        },
        {
          type: 'match', min: 6, title: 'Kako izgledaju ovi ljudi? · соедините описание с человеком',
          note: 'Картинка из учебника: четыре человека. Соедините номер с описанием, потом прочитайте описания вслух.',
          img: 'img/l22_ljudi.png',
          pairs: [
            ['1 — mlada žena u zelenoj haljini', 'Visoka i mršava. Ima dugu, svetlu kosu i tamne oči, lepo lice i lepe, bele zube.'],
            ['2 — stariji čovek u crvenoj majici', 'Nije mršav, debeo je. Nije visok. Ima sedu kosu i svetle oči.'],
            ['3 — gospođa u plavoj haljini', 'Veoma lepa, nije mlada, ali je zgodna. Lep vrat, široka ramena, uzak struk, tamna dugačka kosa, podignuta kosa i naočare za sunce.'],
            ['4 — mladić u farmerkama', 'Nizak i mršav. Usko lice i velike, smeđe oči. Plava, kratka kosa. Uska ramena i duge ruke.']
          ]
        },
        {
          type: 'speak', min: 15, title: 'Opišite šta nose ovi ljudi · описание людей',
          note: 'Задание из курса: опишите двух-трёх людей (по фото в телефоне или знакомых): рост, волосы, глаза, одежда, стиль. Партнёр угадывает, кто это. Потом «стилист»: посоветуйте партнёру, как одеться на три события в потенциале: Obukao bih…',
          items: [
            { q: 'Kako izgleda? Šta nosi?', sample: 'Ona je visoka i mršava, ima dugu smeđu kosu. Nosi belu košulju, farmerke i patike. Oblači se svakodnevno.' },
            { q: 'Kako se oblači tvoj omiljeni glumac / pevač?', sample: 'Nosi neobičnu odeću i ima šokantnu frizuru. Oblači se hrabro.' },
            { q: 'Šta bi obukao / obukla za svadbu, intervju, planinarenje?', sample: 'Za svadbu bih obukla svečanu haljinu i cipele, za intervju košulju i pantalone, za planinarenje trenerku i patike.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'hladno vreme: kaput, kapa, čizme, dukserica; vruće vreme: majica, šorts, sunčanice, kupaći kostim',
            'Danas je moda drugačija nego nekad. Odeća zavisi od zanimanja.',
            'visok / nizak, mršav / debeo, plava / seda / smeđa kosa, uzak struk, široka ramena',
            'Ona nosi… Oblači se elegantno / sportski / neobično.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: погода, мода, описание', est: 8, set: 'C' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант по тексту', est: 5,
          items: [
            { a: ['Danas je moda drugačija nego nekad.'] }, { a: ['Važno je da je odeća praktična i kvalitetna.'] }, { a: ['Žene ne nose samo haljine, suknje i kostime.'] },
            { a: ['Odeća koju ljudi nose zavisi od njihovog zanimanja.'] }, { a: ['Ako rade u firmi, moraju da nose elegantna odela.'] }, { a: ['Glumci često nose neobičnu odeću i imaju šokantne frizure.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Когда жарко, я ношу шорты и солнечные очки.', a: ['Kad je vruće, nosim šorts i sunčanice.', 'Kada je vruće, nosim šorts i sunčanice.'] },
            { q: 'Сегодня мода отличается от прежней.', a: ['Danas je moda drugačija nego nekad.'] },
            { q: 'Одежда зависит от профессии.', a: ['Odeća zavisi od zanimanja.'] },
            { q: 'Эта женщина высокая и худая, у неё длинные светлые волосы.', a: ['Ova žena je visoka i mršava, ima dugu svetlu kosu.', 'Ova žena je visoka i mršava, ona ima dugu, svetlu kosu.'] },
            { q: 'Этот пожилой человек не худой, он толстый.', a: ['Ovaj stariji čovek nije mršav, on je debeo.'] },
            { q: 'У неё узкая талия и широкие плечи.', a: ['Ima uzak struk i široka ramena.', 'Ona ima uzak struk i široka ramena.'] },
            { q: 'Мужчины носят одежду разных цветов.', a: ['Muškarci nose odeću različitih boja.'] },
            { q: 'Что бы ты надел на свадьбу?', a: ['Šta bi obukao za svadbu?', 'Šta bi obukla za svadbu?'] }
          ]
        },
        {
          type: 'write', title: 'Opis osobe · описание человека + запись', est: 10, key: 'hw-22.3-opis', record: true,
          note: 'Задание из курса: опишите человека (на фото или знакомого) по образцу текстов из учебника: внешность, одежда, стиль, профессия. 10 предложений. Запишите чтение вслух.',
          sample: 'Ovo je moja sestra Ana. Ona je mlada, visoka i mršava. Ima dugu, smeđu kosu i velike zelene oči. Ima lepo lice i lep osmeh. Danas nosi belu košulju, crne pantalone i cipele, jer radi u firmi i mora da se oblači elegantno. Vikendom nosi farmerke, majicu i patike. Voli nakit i sunčanice. Oblači se stilski, ali ne neobično. Za svadbu bi obukla dugu svečanu haljinu.'
        }
      ]
    }
  ]
});
