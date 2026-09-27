// Lekcija 9 - Restoran i nacionalna kuhinja. Three 60-minute sessions: Serbian dishes + possessives, dative + demonstratives, at the restaurant.
COURSE.register({
  n: 9,
  title: 'Restoran i nacionalna kuhinja',
  ru: 'Сербская кухня, притяжательные и указательные местоимения, дательный падеж, в ресторане',

  vocab: [
    { id: 'gladan9', sr: 'gladan, gladna', ru: 'голодный', set: 'A' },
    { id: 'zedan', sr: 'žedan, žedna', ru: 'хочет пить, жаждущий', set: 'A' },
    { id: 'prijatno9', sr: 'Prijatno!', ru: 'Приятного аппетита! (или: всего доброго)', set: 'A' },
    { id: 'ziveli', sr: 'Živeli!', ru: 'Будем! (тост)', set: 'A' },
    { id: 'kao', sr: 'kao — lep kao lutka', ru: 'как — красивый, как кукла', set: 'A' },
    { id: 'uzivati', sr: 'uživati u (+ lokativ), ja uživam', ru: 'наслаждаться чем-то', set: 'A' },
    { id: 'bas', sr: 'baš — Baš je lepo!', ru: 'прямо, очень — Как здорово!', set: 'A' },
    { id: 'cevapi', sr: 'ćevapi', ru: 'чевапчичи', set: 'A' },
    { id: 'pljeskavica9', sr: 'pljeskavica', ru: 'плескавица', set: 'A' },
    { id: 'corba', sr: 'čorba — pileća, riblja, teleća', ru: 'чорба (суп) — куриный, рыбный, из телятины', set: 'A' },
    { id: 'burek', sr: 'burek', ru: 'бурек (пирог с мясом, сыром или шпинатом)', set: 'A' },
    { id: 'gibanica', sr: 'gibanica', ru: 'гибаница (пирог с яйцами, йогуртом и сыром)', set: 'A' },
    { id: 'sarma9', sr: 'sarma', ru: 'сарма (голубцы)', set: 'A' },
    { id: 'karadjordjeva', sr: 'karađorđeva šnicla', ru: 'карагеоргиев шницель', set: 'A' },
    { id: 'mesano-meso', sr: 'mešano meso', ru: 'мясное ассорти на гриле', set: 'A' },
    { id: 'kajmak', sr: 'kajmak', ru: 'каймак', set: 'A' },
    { id: 'ajvar', sr: 'ajvar', ru: 'айвар', set: 'A' },
    { id: 'pasulj', sr: 'pasulj', ru: 'фасоль (блюдо)', set: 'A' },
    { id: 'proja', sr: 'proja', ru: 'проя (кукурузный хлеб)', set: 'A' },
    { id: 'kacamak', sr: 'kačamak', ru: 'качамак (кукурузная каша)', set: 'A' },
    { id: 'prsut', sr: 'pršut', ru: 'пршут (вяленое мясо)', set: 'A' },
    { id: 'urnebes', sr: 'urnebes', ru: 'урнебес (паста из сыра с чесноком)', set: 'A' },
    { id: 'pohovani-sir', sr: 'pohovani sir', ru: 'сыр в панировке', set: 'A' },
    { id: 'lepinja', sr: 'lepinja', ru: 'домашняя лепёшка', set: 'A' },
    { id: 'kafana9', sr: 'kafana, kafić, restoran, pekara', ru: 'кафана, кафе, ресторан, пекарня', set: 'A' },
    { id: 'probati', sr: 'probati, ja probam — Šta ste već probali?', ru: 'пробовать — Что вы уже пробовали?', set: 'A' },
    { id: 'moj9', sr: 'moj, moja, moje / moji, moje', ru: 'мой, моя, моё / мои', set: 'A' },
    { id: 'tvoj9', sr: 'tvoj, tvoja, tvoje / tvoji, tvoje', ru: 'твой', set: 'A' },
    { id: 'njegov', sr: 'njegov, njegova, njegovo / njegovi, njegove', ru: 'его', set: 'A' },
    { id: 'njen', sr: 'njen, njena, njeno / njeni, njene', ru: 'её', set: 'A' },
    { id: 'nas9', sr: 'naš, naša, naše / naši, naše', ru: 'наш', set: 'A' },
    { id: 'vas9', sr: 'vaš, vaša, vaše / vaši, vaše', ru: 'ваш', set: 'A' },
    { id: 'njihov', sr: 'njihov, njihova, njihovo / njihovi, njihove', ru: 'их', set: 'A' },

    { id: 'dativ', sr: 'dativ — kome? čemu?', ru: 'дательный падеж — кому? чему?', set: 'B' },
    { id: 'ka', sr: 'ka, prema, nasuprot (+ dativ)', ru: 'к, по направлению к, напротив', set: 'B' },
    { id: 'poklon', sr: 'poklon — kupila sam poklon sestri', ru: 'подарок — я купила подарок сестре', set: 'B' },
    { id: 'naruciti9', sr: 'naručiti — brat je naručio drugaru vodu', ru: 'заказать — брат заказал другу воду', set: 'B' },
    { id: 'stanica', sr: 'stanica — ka stanici', ru: 'остановка, станция — к остановке', set: 'B' },
    { id: 'prozor9', sr: 'prozor — ka prozoru', ru: 'окно — к окну', set: 'B' },
    { id: 'ovaj', sr: 'ovaj, ova, ovo / ovi, ove', ru: 'этот (у говорящего)', set: 'B' },
    { id: 'taj', sr: 'taj, ta, to / ti, te', ru: 'тот (у собеседника)', set: 'B' },
    { id: 'onaj', sr: 'onaj, ona, ono / oni, one', ru: 'вон тот (далеко от обоих)', set: 'B' },
    { id: 'skuvati', sr: 'skuvati — skuvala je čorbu', ru: 'сварить — она сварила чорбу', set: 'B' },
    { id: 'ispeci', sr: 'ispeći — ispekla je palačinke', ru: 'испечь — она испекла блинчики', set: 'B' },
    { id: 'pojesti', sr: 'pojesti — pojeli smo tortu', ru: 'съесть — мы съели торт', set: 'B' },
    { id: 'popiti', sr: 'popiti — popio je tri čaše vina', ru: 'выпить — он выпил три бокала вина', set: 'B' },
    { id: 'spremiti', sr: 'spremiti — spremila je ručak', ru: 'приготовить — она приготовила обед', set: 'B' },
    { id: 'napraviti', sr: 'napraviti — hoću da napravim ćevape', ru: 'сделать — хочу сделать чевапчичи', set: 'B' },
    { id: 'rakija', sr: 'rakija — mnogo rakije', ru: 'ракия — много ракии', set: 'B' },
    { id: 'palacinke', sr: 'palačinke', ru: 'блинчики', set: 'B' },
    { id: 'casa', sr: 'čaša — tri čaše vina', ru: 'бокал — три бокала вина', set: 'B' },

    { id: 'konobar9', sr: 'konobar, konobarica', ru: 'официант, официантка', set: 'C' },
    { id: 'izvolite', sr: 'Izvolite!', ru: 'Пожалуйста! Слушаю вас! Вот!', set: 'C' },
    { id: 'jelovnik', sr: 'jelovnik', ru: 'меню', set: 'C' },
    { id: 'predjelo', sr: 'hladna / topla predjela', ru: 'холодные / горячие закуски', set: 'C' },
    { id: 'porudzbina', sr: 'jela po porudžbini', ru: 'блюда на заказ', set: 'C' },
    { id: 'desert', sr: 'deserti — sladoled, palačinke, Moskva šnit', ru: 'десерты — мороженое, блинчики, торт «Москва»', set: 'C' },
    { id: 'moze-li', sr: 'Može li…? — Može!', ru: 'Можно…? — Можно!', set: 'C' },
    { id: 'nesto-od-pica', sr: 'Nešto od pića?', ru: 'Что-нибудь из напитков?', set: 'C' },
    { id: 'naravno', sr: 'Naravno!', ru: 'Конечно!', set: 'C' },
    { id: 'taman', sr: 'taman — Taman da pojedemo.', ru: 'как раз — Как раз поедим.', set: 'C' },
    { id: 'uzasno', sr: 'užasno gladna', ru: 'ужасно голодная', set: 'C' },
    { id: 'sjajna-ideja', sr: 'sjajna ideja', ru: 'отличная идея', set: 'C' },
    { id: 'vranac', sr: 'crnogorski vranac', ru: 'черногорское вино «Вранац»', set: 'C' },
    { id: 'pastrmka', sr: 'pastrmka', ru: 'речная форель', set: 'C' },
    { id: 'sopska', sr: 'šopska salata, salata od paradajza', ru: 'шопский салат, салат из помидоров', set: 'C' },
    { id: 'gulas', sr: 'gulaš', ru: 'гуляш', set: 'C' },
    { id: 'divno', sr: 'Divno!', ru: 'Чудесно!', set: 'C' },
    { id: 'bice-spremno', sr: 'Biće spremno za 20 minuta.', ru: 'Будет готово через 20 минут.', set: 'C' },
    { id: 'doneti', sr: 'doneti — Da donesem vino odmah?', ru: 'принести — Принести вино сразу?', set: 'C' },
    { id: 'molim-vas', sr: 'Molim Vas.', ru: 'Пожалуйста (прошу вас).', set: 'C' },
    { id: 'za-poneti', sr: 'za poneti ili ovde?', ru: 'с собой или здесь?', set: 'C' },
    { id: 'racun', sr: 'račun — Treba li račun?', ru: 'счёт — Нужен ли счёт?', set: 'C' },
    { id: 'pre-pola-godine', sr: 'pre pola godine', ru: 'полгода назад', set: 'C' },
    { id: 'ovde', sr: 'ovde', ru: 'здесь', set: 'C' }
  ],

  verbs: {
    naruciti: { inf: 'naručiti', ru: 'заказать', pos: { ja: 'naručim', ti: 'naručiš', on: 'naruči', mi: 'naručimo', vi: 'naručite', oni: 'naruče' }, neg: { ja: 'ne naručim', ti: 'ne naručiš', on: 'ne naruči', mi: 'ne naručimo', vi: 'ne naručite', oni: 'ne naruče' }, l: { m: 'naručio', f: 'naručila', n: 'naručilo', mpl: 'naručili', fpl: 'naručile' } },
    probati: { inf: 'probati', ru: 'пробовать', pos: { ja: 'probam', ti: 'probaš', on: 'proba', mi: 'probamo', vi: 'probate', oni: 'probaju' }, neg: { ja: 'ne probam', ti: 'ne probaš', on: 'ne proba', mi: 'ne probamo', vi: 'ne probate', oni: 'ne probaju' }, l: { m: 'probao', f: 'probala', n: 'probalo', mpl: 'probali', fpl: 'probale' } },
    uzivati: { inf: 'uživati', ru: 'наслаждаться', pos: { ja: 'uživam', ti: 'uživaš', on: 'uživa', mi: 'uživamo', vi: 'uživate', oni: 'uživaju' }, neg: { ja: 'ne uživam', ti: 'ne uživaš', on: 'ne uživa', mi: 'ne uživamo', vi: 'ne uživate', oni: 'ne uživaju' }, l: { m: 'uživao', f: 'uživala', n: 'uživalo', mpl: 'uživali', fpl: 'uživale' } },
    pojesti: { inf: 'pojesti', ru: 'съесть', l: { m: 'pojeo', f: 'pojela', n: 'pojelo', mpl: 'pojeli', fpl: 'pojele' } },
    popiti: { inf: 'popiti', ru: 'выпить', l: { m: 'popio', f: 'popila', n: 'popilo', mpl: 'popili', fpl: 'popile' } },
    skuvati: { inf: 'skuvati', ru: 'сварить', l: { m: 'skuvao', f: 'skuvala', n: 'skuvalo', mpl: 'skuvali', fpl: 'skuvale' } },
    ispeci: { inf: 'ispeći', ru: 'испечь', l: { m: 'ispekao', f: 'ispekla', n: 'ispeklo', mpl: 'ispekli', fpl: 'ispekle' } },
    kupiti: { inf: 'kupiti', ru: 'купить', l: { m: 'kupio', f: 'kupila', n: 'kupilo', mpl: 'kupili', fpl: 'kupile' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '9.1',
      title: 'Srpska kuhinja',
      ru: 'Национальные блюда, где едим, притяжательные местоимения',
      goals: [
        'назвать 15 сербских блюд и сказать, что уже пробовали',
        'различать kafić, kafana, restoran, pekara',
        'правильно выбирать moj / moja / moje, njegov / njen, njihov'
      ],
      blocks: [
        {
          type: 'dialog', min: 6, title: 'Strip · Prijatno!',
          note: 'Тесла в кафане: живая музыка, ракия и тост «Živeli!». Прочитайте по ролям.',
          img: 'img/l9_strip.png',
          lines: [
            { who: 'Nikola', sr: 'Koliko sam gladan i žedan! Prijatno!', ru: 'Как я голоден и хочу пить! Приятного аппетита!' },
            { who: 'Gost', sr: 'Dobra hrana je kao muzika! Živeli!', ru: 'Хорошая еда — как музыка! Будем!' },
            { who: 'Nikola', sr: 'Da, baš je lepo uživati u dobroj hrani i muzici.', ru: 'Да, как здорово наслаждаться хорошей едой и музыкой.' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Srpska jela · национальные блюда',
          note: 'Фото из курса: назовите блюда по порядку, потом проверьте по таблице. Нажимайте на названия, чтобы услышать.',
          img: 'img/l9_jela.png',
          tables: [
            { caption: 'Šta je na slikama (s leva na desno)', head: ['1. red', '2. red', '3. red'], rows: [['ćevapi — колбаски из фарша с лепёшкой и луком', 'pljeskavica — большая котлета из фарша', 'pasulj — фасоль с копчёным мясом'], ['čorba — густой суп', 'ajvar — паста из печёного перца', 'proja — кукурузный хлеб с каймаком'], ['burek — слоёный пирог', 'kajmak — сливочный «сыр»', 'sarma — голубцы в квашеной капусте'], ['mešano meso — мясное ассорти', 'gibanica — пирог с сыром и яйцами', 'karađorđeva šnicla — рулет с каймаком в панировке']] },
            { caption: 'Još jela', head: ['', '', ''], rows: [['kačamak', 'pršut', 'urnebes'], ['pohovani sir', 'lepinja', 'palačinke'], ['pileća čorba', 'riblja čorba', 'teleća čorba']] }
          ]
        },
        {
          type: 'match', min: 6, title: 'Koje je ovo jelo? · блюдо и описание',
          pairs: [
            ['ćevapi', 'male kobasice od mlevenog mesa, sa lukom i lepinjom'], ['burek', 'pita sa mesom, sirom ili spanaćem'], ['kajmak', 'mlečni proizvod, kao mladi sir sa puterom'],
            ['ajvar', 'namaz od pečene paprike'], ['sarma', 'meso i pirinač u listu kiselog kupusa'], ['gibanica', 'pita sa sirom, jajima i jogurtom'],
            ['pasulj', 'jelo od graha sa suvim mesom'], ['proja', 'hleb od kukuruznog brašna'], ['karađorđeva šnicla', 'rolovano meso sa kajmakom, pohovano'],
            ['čorba', 'gusta supa: pileća, riblja, teleća'], ['pljeskavica', 'velika okrugla „kotleta“ od mlevenog mesa'], ['mešano meso', 'ćevapi, pljeskavica, kobasica — sve zajedno na žaru']
          ]
        },
        {
          type: 'text', min: 3, title: 'Gde idemo? · куда пойдём',
          img: 'img/l9_gde.png',
          html: '<p>[[kafić]] — кафе: кофе, напитки, иногда сладкое. [[kafana]] — традиционный сербский ресторан: домашняя еда, ракия, живая музыка. [[restoran]] — ресторан. [[pekara]] — пекарня: бурек, кифлы, йогурт, часто «za poneti».</p>'
        },
        {
          type: 'text', min: 6, title: 'Prisvojne zamenice · притяжательные местоимения',
          html:
            '<p>Отвечают на вопрос [[čiji? čija? čije?]] — чей? Изменяются как прилагательные. Главное отличие от русского: в 3-м лице есть род владельца — <b>njegov</b> (его), <b>njen</b> (её), <b>njihov</b> (их).</p>' +
            '<ul><li>[[moj, moja, moje]] / [[moji, moje]] — [[tvoj, tvoja, tvoje]] / [[tvoji, tvoje]]</li>' +
            '<li>[[njegov, njegova, njegovo]] / [[njegovi, njegove]] — [[njen, njena, njeno]] / [[njeni, njene]]</li>' +
            '<li>[[naš, naša, naše]] / [[naši, naše]] — [[vaš, vaša, vaše]] / [[vaši, vaše]] — [[njihov, njihova, njihovo]] / [[njihovi, njihove]]</li></ul>',
          tables: [
            { caption: 'Prisvojne zamenice', head: ['', 'jednina', 'množina'], rows: [['1. lice', 'moj', 'naš'], ['2. lice', 'tvoj', 'vaš'], ['3. lice', 'njegov / njen', 'njihov']] }
          ]
        },
        {
          type: 'mc', min: 7, title: 'Izaberite zamenicu · выберите местоимение',
          items: [
            { q: 'Ovo je … kafa.', options: ['moj', 'moja', 'moje', 'moji'], a: 'moja' },
            { q: 'To je … unuka.', options: ['njegov', 'njegovo', 'njegova', 'njegovi'], a: 'njegova' },
            { q: 'Da li je ovo … jelo?', options: ['tvoje', 'tvoja', 'tvoj', 'tvoji'], a: 'tvoje' },
            { q: 'Da, vidim, to je … sto.', options: ['naša', 'naše', 'naši', 'naš'], a: 'naš' },
            { q: 'Ovo nije … pljeskavica.', options: ['vaš', 'vaše', 'vaša', 'vaši'], a: 'vaša' },
            { q: 'To su … prijatelji.', options: ['njihovi', 'njihove', 'njihova', 'njihovo'], a: 'njihovi' },
            { q: 'Vidim, to su … sestre.', options: ['njegov', 'njegove', 'njegovi', 'njegova'], a: 'njegove' },
            { q: '… baka kuva odličnu čorbu!', options: ['Njeno', 'Njen', 'Njene', 'Njena'], a: 'Njena' },
            { q: '… prezime je Šapić.', options: ['Vaše', 'Vaš', 'Vaša', 'Vaši'], a: 'Vaše' }
          ]
        },
        {
          type: 'gap', min: 5, title: 'Čiji je? · впишите местоимение',
          note: 'В скобках — владелец.',
          items: [
            'Ovo je {moja} kafa. (ja)', 'To je {njegov} burek. (on)', 'Ovo su {naše} palačinke. (mi)', 'Da li je to {tvoj} sto? (ti)',
            '{Njena} mama kuva sarmu. (ona)', '{Njihov} restoran je u centru. (oni)', '{Vaša} čorba je odlična! (vi)', 'To su {moji} prijatelji. (ja)'
          ]
        },
        {
          type: 'speak', min: 15, title: 'Sviđa li vam se srpska kuhinja? · разговор',
          note: 'Три вопроса из курса плюс свои. Отвечайте развёрнуто, используйте перфект: Probala sam…, Bili smo u kafani… В конце составьте «топ-3» любимых сербских блюд каждого.',
          items: [
            { q: 'Sviđa li vam se srpska kuhinja? Zašto?', sample: 'Da, sviđa mi se, jer je jednostavna i ukusna. Ima mnogo mesa.' },
            { q: 'Šta ste već probali? Šta vam se najviše svidelo?', sample: 'Probala sam ćevape, burek i gibanicu. Najviše mi se svidela gibanica.' },
            { q: 'Da li ste bili u kafani? Kako je bilo?', sample: 'Da, bili smo u kafani „Tri šešira“. Bila je muzika uživo, jeli smo mešano meso.' },
            { q: 'Šta niste probali, a želite?', sample: 'Nisam probao karađorđevu šniclu. Želim da probam kačamak.' },
            { q: 'Koje je vaše omiljeno jelo? Čije jelo je najbolje — mamino, bakino?', sample: 'Moje omiljeno jelo je sarma. Bakina sarma je najbolja!' }
          ]
        },
        {
          type: 'summary', min: 4, title: 'Rezime · итог занятия',
          points: [
            'ćevapi, pljeskavica, burek, gibanica, sarma, ajvar, kajmak, pasulj',
            'kafić — kafana — restoran — pekara',
            'moj / moja / moje, njegov (его), njen (её), njihov (их)',
            'Prijatno! Živeli!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: блюда и притяжательные местоимения', est: 9, set: 'A' },
        {
          type: 'letters', title: 'Složite jelo · соберите блюдо из букв', est: 5,
          items: [
            { clue: 'male kobasice od mlevenog mesa', word: 'ćevapi' }, { clue: 'pita sa mesom ili sirom', word: 'burek' }, { clue: 'namaz od pečene paprike', word: 'ajvar' },
            { clue: 'meso u listu kupusa', word: 'sarma' }, { clue: 'pita sa sirom i jajima', word: 'gibanica' }, { clue: 'mlečni proizvod, kao puter', word: 'kajmak' }, { clue: 'jelo od graha', word: 'pasulj' }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Koliko sam gladan i žedan!'] }, { a: ['Dobra hrana je kao muzika!'] }, { a: ['Baš je lepo uživati u dobroj hrani.'] },
            { a: ['Njena baka kuva odličnu čorbu.'] }, { a: ['To su njihovi prijatelji.'] }, { a: ['Vaše prezime je Šapić.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Это мой кофе.', a: ['Ovo je moja kafa.', 'To je moja kafa.'] },
            { q: 'Это его внучка.', a: ['To je njegova unuka.', 'Ovo je njegova unuka.'] },
            { q: 'Её бабушка варит отличную чорбу.', a: ['Njena baka kuva odličnu čorbu.'] },
            { q: 'Это их друзья.', a: ['To su njihovi prijatelji.', 'Ovo su njihovi prijatelji.'] },
            { q: 'Ваша фамилия — Шапич?', a: ['Vaše prezime je Šapić?', 'Da li je vaše prezime Šapić?'] },
            { q: 'Я пробовала чевапчичи и бурек.', a: ['Probala sam ćevape i burek.', 'Ja sam probala ćevape i burek.'] },
            { q: 'Мы были в кафане.', a: ['Bili smo u kafani.', 'Mi smo bili u kafani.', 'Bile smo u kafani.'] },
            { q: 'Хорошая еда — как музыка!', a: ['Dobra hrana je kao muzika!'] }
          ]
        },
        {
          type: 'write', title: 'Moja tri omiljena srpska jela', est: 6, key: 'hw-9.1-jela',
          note: '6–8 предложений: три любимых сербских блюда, где вы их пробовали, что в них есть, чьё блюдо лучшее.',
          sample: 'Moje omiljeno srpsko jelo je gibanica. Probala sam je u pekari kod kuće. U gibanici ima sir, jaja i jogurt. Drugo jelo su ćevapi sa lukom i kajmakom. Treće je sarma, ali samo bakina sarma je najbolja! Nisam probala kačamak.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '9.2',
      title: 'Dativ i pokazne zamenice',
      ru: 'Дательный падеж; ovaj / taj / onaj',
      goals: [
        'образовать датив: sestri, drugaru, ka stanici',
        'построить предложение с двумя объектами: kupila sam poklon sestri',
        'различать три степени удалённости: ovaj, taj, onaj'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о трёх блюдах. Партнёр говорит, что из этого пробовал: I ja sam probao… / Nisam probao…',
          items: [{ q: 'Moje omiljeno srpsko jelo je…' }]
        },
        {
          type: 'text', min: 9, title: 'Dativ · дательный падеж',
          html:
            '<p><b>Dativ</b> отвечает на вопросы [[kome?]] [[čemu?]] Употребляется с предлогами <b>ka</b> (к — направление), <b>nasuprot</b> (напротив), <b>prema</b> (к, по отношению к) и в двух главных случаях:</p>' +
            '<ol><li><b>Объект — кому?</b> [[Ja sam kupila poklon sestri.]] [[Brat je naručio drugaru vodu.]]</li>' +
            '<li><b>Направление движения:</b> [[Mila je išla ka stanici.]] [[Mi smo trčali ka prozoru.]]</li></ol>' +
            '<p>Окончания совпадают с локативом: м. и ср. р. <b>-u</b>, ж. р. <b>-i</b>; мн. ч. <b>-ima</b> / <b>-ama</b>. Прилагательные: <b>-om</b> (м., ср.), <b>-oj</b> (ж.), <b>-im</b> (мн.).</p>',
          tables: [
            { caption: 'Dativ — kome? čemu?', head: ['rod', 'jednina', 'množina'], rows: [['M', 'velikom gradu', 'velikim gradovima'], ['Ž', 'lepoj ženi', 'lepim ženama'], ['S', 'plavom moru', 'plavim morima']] }
          ]
        },
        {
          type: 'mc', min: 6, title: 'Kviz · dativ',
          items: [
            { q: 'Kupila sam poklon ….', options: ['sestra', 'sestri', 'sestru'], a: 'sestri' },
            { q: 'Brat je naručio … vodu.', options: ['drugar', 'drugaru', 'drugara'], a: 'drugaru' },
            { q: 'Mila je išla ka ….', options: ['stanica', 'stanici', 'stanicu'], a: 'stanici' },
            { q: 'Trčali smo ka ….', options: ['prozor', 'prozoru', 'prozora'], a: 'prozoru' },
            { q: 'Konobar je doneo vino ….', options: ['gosti', 'gostima', 'goste'], a: 'gostima' },
            { q: 'Poklonila sam knjigu ….', options: ['mama', 'mami', 'mamu'], a: 'mami' },
            { q: 'Idemo ka … moru.', options: ['plavo', 'plavom', 'plavog'], a: 'plavom' },
            { q: 'Pisao je pismo … ženi.', options: ['lepa', 'lepoj', 'lepu'], a: 'lepoj' },
            { q: 'Deca su dala cveće ….', options: ['učiteljica', 'učiteljici', 'učiteljicu'], a: 'učiteljici' },
            { q: 'Kupili smo poklone ….', options: ['prijatelji', 'prijateljima', 'prijatelje'], a: 'prijateljima' }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Kome? · впишите датив',
          items: [
            'Kupila sam poklon {sestri} (sestra) i {bratu} (brat).', 'Konobar donosi jelovnik {gostima} (gosti).', 'Naručio sam {drugaru} (drugar) kafu.',
            'Idem ka {restoranu} (restoran).', 'Baka je ispekla palačinke {unucima} (unuci).', 'Mama je skuvala čorbu {tati} (tata).',
            'Deca trče ka {moru} (more).', 'Poklonili smo cveće {učiteljici} (učiteljica).'
          ]
        },
        {
          type: 'order', min: 8, title: 'Obnovite redosled reči · соберите предложения',
          note: 'Все предложения в перфекте. Обратите внимание, где стоит связка.',
          items: [
            'Ovo je moja velika porodica.', 'Njegova žena je skuvala riblju čorbu.', 'Da li je tvoja mama ispekla palačinke?', 'Ne, nismo pojeli tu tortu.',
            'Njihova sestra je spremila ručak.', 'Njen muž je popio tri čaše vina.', 'Ja sam htela da napravim ćevapi i pečenu papriku.', 'Naš deda je ispekao mnogo rakije.'
          ]
        },
        {
          type: 'text', min: 5, title: 'Pokazne zamenice · указательные местоимения',
          html:
            '<p>Три степени удалённости вместо русских двух («этот — тот»). Окончания меняются, как у прилагательных.</p>' +
            '<ul><li>[[Ova ukusna gibanica.]] — эта (у говорящего)</li><li>[[Ta ukusna gibanica.]] — вон та (у собеседника)</li><li>[[Ona ukusna gibanica.]] — та (дальше всего от обоих)</li></ul>',
          tables: [
            { caption: 'Pokazne zamenice', head: ['где', 'm / ž / s', 'množina'], rows: [['bliže govorniku', 'ovaj, ova, ovo', 'ovi, ove'], ['bliže sagovorniku', 'taj, ta, to', 'ti, te'], ['daleko od oboje', 'onaj, ona, ono', 'oni, one']] }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Izaberite varijantu · ovaj, taj или onaj',
          note: 'Выбирайте по смыслу и по роду. Иногда подходят два варианта — тогда принимается любой.',
          options: ['ova', 'ta', 'ona', 'ovaj', 'taj', 'onaj', 'ovo', 'to', 'ono', 'ovu', 'tu', 'onu', 'moj', 'tvoja', 'njegov'],
          items: [
            'Ovo je {ova|ta} čorba, gde je {ona|ta}?', 'Ne znam {tu|onu} ženu.', '{Ovaj|Taj} otac uvek sprema odlično mešano meso.', '{Onaj|Taj} momak tamo je pojeo tortu.',
            'Ana ima baku na selu, {ta|ona} baka ima najbolji ajvar.', '{Ovo|To} je vino iz Italije.', '{Ovaj|Taj} brat je naručio pivo i pohovani sir.', 'Pričali samo sa Markom, to je {taj|onaj} prijatelj.'
          ]
        },
        {
          type: 'speak', min: 12, title: 'Ovaj ili onaj? · за столом',
          note: 'Представьте, что вы в кафане и выбираете еду, показывая на блюда: Hoću ovu gibanicu, ne tu, onu tamo! Один заказывает, второй — официант. Потом обсудите, кому что дарите на праздники (датив): Mami poklanjam…',
          items: [
            { q: 'Šta želite? Ovu ili onu salatu?', sample: 'Želim onu salatu tamo, i ovaj burek ovde.' },
            { q: 'Čija je ova kafa? A ta?', sample: 'Ova kafa je moja, a ta je tvoja.' },
            { q: 'Kome kupuješ poklone za Novu godinu?', sample: 'Mami kupujem knjigu, tati vino, sestri parfem, a drugarima čokoladu.' },
            { q: 'Kome si naručio / naručila piće?', sample: 'Naručio sam drugaru pivo, a sebi kiselu vodu.' }
          ]
        },
        {
          type: 'summary', min: 4, title: 'Rezime · итог занятия',
          points: [
            'dativ: sestri, drugaru, moru; mn.: gostima, ženama',
            'ka stanici, ka prozoru — направление',
            'Kupila sam poklon sestri. Naručio je drugaru vodu.',
            'ovaj — taj — onaj: три степени удалённости'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: датив, указательные, глаголы', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'transform', title: 'Dativ · «Dajem poklon …»', est: 5,
          items: [
            { q: 'Dajem poklon … (sestra)', a: ['sestri'] }, { q: 'Dajem poklon … (brat)', a: ['bratu'] }, { q: 'Dajem poklon … (mama)', a: ['mami'] }, { q: 'Dajem poklon … (drugar)', a: ['drugaru'] },
            { q: 'Dajem poklon … (učiteljica)', a: ['učiteljici'] }, { q: 'Dajem poklon … (deda)', a: ['dedi'] }, { q: 'Dajem poklon … (prijatelji)', a: ['prijateljima'] }, { q: 'Dajem poklon … (sestre)', a: ['sestrama'] },
            { q: 'Dajem poklon … (dete)', a: ['detetu'] }, { q: 'Dajem poklon … (gosti)', a: ['gostima'] }
          ]
        },
        { type: 'conj', tense: 'past', title: 'Тренажёр: перфект (глаголы еды)', est: 6, verbs: ['naruciti', 'probati', 'pojesti', 'popiti', 'skuvati', 'ispeci', 'kupiti'], rounds: 12 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Ja sam kupila poklon sestri.'] }, { a: ['Brat je naručio drugaru vodu.'] }, { a: ['Mila je išla ka stanici.'] },
            { a: ['Njen muž je popio tri čaše vina.'] }, { a: ['Naš deda je ispekao mnogo rakije.'] }, { a: ['Ona baka ima najbolji ajvar.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я купила подарок сестре.', a: ['Kupila sam poklon sestri.', 'Ja sam kupila poklon sestri.'] },
            { q: 'Брат заказал другу воду.', a: ['Brat je naručio drugaru vodu.'] },
            { q: 'Мы бежали к окну.', a: ['Trčali smo ka prozoru.', 'Mi smo trčali ka prozoru.'] },
            { q: 'Его жена сварила рыбную чорбу.', a: ['Njegova žena je skuvala riblju čorbu.'] },
            { q: 'Мы не съели тот торт.', a: ['Nismo pojeli tu tortu.', 'Mi nismo pojeli tu tortu.'] },
            { q: 'Эта гибаница вкусная, а та — нет.', a: ['Ova gibanica je ukusna, a ta nije.', 'Ova gibanica je ukusna, a ona nije.'] },
            { q: 'Тот парень там съел торт.', a: ['Onaj momak tamo je pojeo tortu.'] },
            { q: 'Официант принёс гостям меню.', a: ['Konobar je doneo gostima jelovnik.', 'Konobar je doneo jelovnik gostima.'] }
          ]
        },
        {
          type: 'write', title: 'Pokloni · кому что дарю', est: 6, key: 'hw-9.2-pokloni',
          note: '6–8 предложений в дативе: кому вы что дарите или дарили на праздники. Хотя бы два предложения в перфекте.',
          sample: 'Za Novu godinu mami poklanjam knjigu, a tati kupujem vino. Sestri sam prošle godine poklonila parfem. Baki uvek kupujem čokoladu. Drugarima poklanjam male poklone. Mom dečku sam poklonila sat.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '9.3',
      title: 'U restoranu',
      ru: 'Диалог в ресторане, меню, заказ и оплата',
      goals: [
        'понять диалог официанта и гостей и разыграть его',
        'заказать по меню три блюда и напиток, спросить счёт',
        'ответить на вопросы официанта: za poneti ili ovde? karticom ili kešom?'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о подарках. Партнёр отвечает: A ja sam mami poklonio…',
          items: [{ q: 'Mami poklanjam…, tati…, sestri…' }]
        },
        {
          type: 'gap', listen: true, min: 12, title: 'Ručak u restoranu · диалог с пропусками',
          note: 'В оригинале диалог на кириллице. Сначала прослушайте, потом впишите указательные местоимения и прочитайте по ролям (Ljubica, Milan, konobar).',
          items: [
            '<b>Ljubica:</b> Ćao, Milane! <b>Milan:</b> Zdravo, Ljubice! Kako si? <b>Ljubica:</b> Nije loše, ali sam užasno gladna i žedna. <b>Milan:</b> Odlično! Taman da pojedemo.',
            '<b>Konobar:</b> Dobar dan! Izvolite. <b>Milan:</b> Može li {ovu} salatu od paradajza, {ovu} pileću čorbu i {ovaj} gulaš? <b>Konobar:</b> Naravno! Nešto od pića? <b>Milan:</b> Da, može kafu i {tu} kiselu vodu.',
            '<b>Konobar:</b> Možda vino? Imamo odličan crnogorski vranac. <b>Milan:</b> Hm, ne znam, sada je tek 14 sati. Šta misliš, Ljubice? <b>Ljubica:</b> Mislim da je {to} sjajna ideja. <b>Milan:</b> Haha! Dobro, onda dve čaše {ovog} vranca.',
            '<b>Konobar:</b> Divno! Nešto za vas? <b>Ljubica:</b> Da, molim Vas, imate li {onu} dobru riblju čorbu koju ste imali pre pola godine? <b>Konobar:</b> O da, od pastrmke. Mislite na {onu}? <b>Ljubica:</b> Tačno, onda {onu} čorbu, šopsku salatu i može pileću šniclu.',
            '<b>Konobar:</b> Super, biće spremno za 20 minuta. Da donesem vino odmah? <b>Milan:</b> Da, molim vas.'
          ]
        },
        {
          type: 'tf', min: 4, title: 'Tačno ili netačno? · по диалогу',
          items: [
            { q: 'Ljubica nije gladna.', a: false, why: 'Užasno je gladna i žedna.' }, { q: 'Milan naručuje salatu od paradajza, pileću čorbu i gulaš.', a: true },
            { q: 'Konobar predlaže italijansko vino.', a: false, why: 'Predlaže crnogorski vranac.' }, { q: 'Sada je 14 sati.', a: true },
            { q: 'Ljubica želi riblju čorbu od pastrmke.', a: true }, { q: 'Jelo će biti spremno za 40 minuta.', a: false, why: 'Za 20 minuta.' }
          ]
        },
        {
          type: 'text', min: 6, title: 'Jelovnik · меню',
          note: 'Прочитайте меню вслух с ценами: salata od paradajza — sto pedeset dinara.',
          img: 'img/l9_jelovnik.png',
          html:
            '<p>Вопросы официанта и ответы:</p>' +
            '<ul><li>[[Izvolite! Šta želite?]] — [[Može li…? / Za mene…]]</li><li>[[Da li želite nešto od pića?]] — [[Da, jednu kiselu vodu.]]</li>' +
            '<li>[[Za poneti ili ovde?]] — [[Ovde, molim.]]</li><li>[[Platite karticom ili kešom?]] — [[Karticom.]]</li><li>[[Treba li račun?]] — [[Da, molim vas račun.]]</li></ul>'
        },
        {
          type: 'match', min: 4, title: 'Konobar — gost · соедините реплики',
          pairs: [
            ['Izvolite, šta želite?', 'Može li jednu pljeskavicu i šopsku salatu?'], ['Nešto od pića?', 'Da, jednu limunadu, molim.'], ['Za poneti ili ovde?', 'Ovde, molim.'],
            ['Platite karticom ili kešom?', 'Karticom.'], ['Treba li račun?', 'Da, molim vas račun.'], ['Da donesem vino odmah?', 'Da, molim vas.'],
            ['Nešto za desert?', 'Palačinke sa eurokremom, molim.'], ['Biće spremno za 20 minuta.', 'Nema problema, hvala.']
          ]
        },
        {
          type: 'numbers', mode: 'read', min: 4, title: 'Koliko košta? · цены из меню вслух',
          note: 'Читаем цены из меню и считаем счёт: ćevapi + limunada + sladoled = ?',
          fixed: [150, 250, 225, 550, 600, 350, 110, 90, 400, 450, 790, 1100], max: 2000
        },
        {
          type: 'speak', min: 20, title: 'Dijalog u restoranu · ролевая игра',
          note: 'По меню: гость заказывает три блюда и напиток, официант предлагает вино или десерт, потом счёт и оплата. Сначала один — гость, другой — официант, потом меняетесь. Третий раунд: вы двое гостей, спорите, что заказать (ovu ili onu?). Считайте счёт вслух.',
          items: [
            { q: 'Konobar: Dobar dan! Izvolite.', sample: 'Gost: Dobar dan! Može li ovu šopsku salatu, pileću čorbu i ćevape?' },
            { q: 'Konobar: Nešto od pića? Možda vino?', sample: 'Gost: Jednu kiselu vodu i čašu belog vina, molim.' },
            { q: 'Konobar: Nešto za desert?', sample: 'Gost: Da, palačinke sa džemom.' },
            { q: 'Gost: Račun, molim vas. Koliko je ukupno?', sample: 'Konobar: Ukupno je hiljadu petsto dinara. Karticom ili kešom?' },
            { q: 'Gost: Karticom. Hvala, prijatno!', sample: 'Konobar: Hvala vama, doviđenja!' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'Izvolite! Šta želite? — Može li…?',
            'Nešto od pića? Za poneti ili ovde? Karticom ili kešom? Treba li račun?',
            'Biće spremno za 20 minuta. Da donesem vino odmah?',
            'Taman da pojedemo. Sjajna ideja! Divno!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: фразы в ресторане', est: 8, set: 'C' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант по диалогу', est: 6,
          items: [
            { a: ['Užasno sam gladna i žedna.'] }, { a: ['Taman da pojedemo.'] }, { a: ['Može li ovu salatu od paradajza?'] }, { a: ['Nešto od pića?'] },
            { a: ['Mislim da je to sjajna ideja.'] }, { a: ['Biće spremno za 20 minuta.'] }, { a: ['Da donesem vino odmah?'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Можно этот салат и куриную чорбу?', a: ['Može li ovu salatu i pileću čorbu?', 'Može li ova salata i pileća čorba?'] },
            { q: 'Что-нибудь из напитков?', a: ['Nešto od pića?', 'Da li želite nešto od pića?'] },
            { q: 'Две чаши этого вина, пожалуйста.', a: ['Dve čaše ovog vina, molim.', 'Dve čaše ovog vina, molim vas.'] },
            { q: 'С собой или здесь?', a: ['Za poneti ili ovde?'] },
            { q: 'Будет готово через 20 минут.', a: ['Biće spremno za 20 minuta.', 'Biće spremno za dvadeset minuta.'] },
            { q: 'Нужен счёт?', a: ['Treba li račun?'] },
            { q: 'Я плачу картой.', a: ['Platim karticom.', 'Plaćam karticom.', 'Ja platim karticom.'] },
            { q: 'Отличная идея!', a: ['Sjajna ideja!'] }
          ]
        },
        {
          type: 'write', title: 'Dijalog u restoranu · напишите диалог + запись', est: 12, key: 'hw-9.3-dijalog', record: true,
          note: 'Задание из курса: составьте диалог в ресторане, закажите три блюда и напиток по меню. 10–12 реплик: заказ, вопросы официанта, счёт, оплата. Запишите оба голоса сами.',
          sample: 'Konobar: Dobar dan! Izvolite. Gost: Dobar dan! Može li šopsku salatu, riblju čorbu i pljeskavicu? Konobar: Naravno. Nešto od pića? Gost: Jednu limunadu, molim. Konobar: Za poneti ili ovde? Gost: Ovde. Konobar: Nešto za desert? Gost: Sladoled, molim. Konobar: Biće spremno za 15 minuta. Gost: Hvala. Račun, molim vas. Konobar: Ukupno 1340 dinara. Karticom ili kešom? Gost: Karticom. Prijatno!'
        }
      ]
    }
  ]
});
