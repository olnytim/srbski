// Lekcija 15 - Ponavljanje. Review of lessons 11-14 in two 60-minute sessions: Kalemegdan + all cases, then tenses + professions.
COURSE.register({
  n: 15,
  title: 'Ponavljanje',
  ru: 'Повторение уроков 11–14: Калемегдан, все падежи, три времени, профессии',

  vocab: [
    { id: 'kalemegdan', sr: 'Kalemegdan — Kališ', ru: 'Калемегдан — Калиш (разг.)', set: 'A' },
    { id: 'tvrdjava', sr: 'tvrđava — Beogradska tvrđava', ru: 'крепость — Белградская крепость', set: 'A' },
    { id: 'kula', sr: 'kula — Kula Nebojša', ru: 'башня — башня Небойша', set: 'A' },
    { id: 'spomenik-pobednik', sr: 'Spomenik Pobednik', ru: 'памятник Победителю', set: 'A' },
    { id: 'crkva-ruzica', sr: 'Crkva Ružica, Kapela Svete Petke', ru: 'церковь Ружица, часовня Святой Петки', set: 'A' },
    { id: 'vojni-muzej', sr: 'Vojni muzej', ru: 'Военный музей', set: 'A' },
    { id: 'zoo', sr: 'Beogradski zoološki vrt', ru: 'Белградский зоопарк', set: 'A' },
    { id: 'igraliste', sr: 'igralište za košarku', ru: 'баскетбольная площадка', set: 'A' },
    { id: 'struja', sr: 'struja', ru: 'электричество', set: 'A' },
    { id: 'cekati', sr: 'čekati, ja čekam', ru: 'ждать', set: 'A' },
    { id: 'junaci', sr: 'junak — junaci', ru: 'герой — герои', set: 'A' },
    { id: 'top', sr: 'top', ru: 'пушка', set: 'A' },
    { id: 'kosarkas', sr: 'košarkaš', ru: 'баскетболист', set: 'A' },
    { id: 'sahista', sr: 'šahista — igra šah', ru: 'шахматист — играет в шахматы', set: 'A' },
    { id: 'skakavac', sr: 'skakavac', ru: 'кузнечик', set: 'A' },
    { id: 'strazar', sr: 'stražari se nikoga ne boje', ru: 'стражи никого не боятся', set: 'A' },
    { id: 'veterinar', sr: 'veterinar', ru: 'ветеринар', set: 'A' },
    { id: 'porasti', sr: 'kada poraste', ru: 'когда вырастет', set: 'A' },
    { id: 'krempita15', sr: 'krempita', ru: 'кремпита', set: 'A' },
    { id: 'orao', sr: 'orao, mač', ru: 'орёл, меч', set: 'A' },
    { id: 'suncati-se', sr: 'sunčati se na plaži', ru: 'загорать на пляже', set: 'A' },
    { id: 'lift', sr: 'lift — liftovi', ru: 'лифт — лифты', set: 'A' },
    { id: 'terasa', sr: 'terasa', ru: 'терраса', set: 'A' },
    { id: 'smisao', sr: 'nema nikakvog smisla', ru: 'нет никакого смысла', set: 'A' },
    { id: 'zauzeti', sr: 'zauzeti prazno mesto', ru: 'занять свободное место', set: 'A' },
    { id: 'besplatan', sr: 'besplatni parking', ru: 'бесплатная парковка', set: 'A' },
    { id: 'tezak', sr: 'teške torbe', ru: 'тяжёлые сумки', set: 'A' },
    { id: 'komsija', sr: 'komšija — komšije', ru: 'сосед — соседи', set: 'A' },
    { id: 'potrositi', sr: 'potrošiti novac', ru: 'потратить деньги', set: 'A' },
    { id: 'izgraditi', sr: 'izgraditi vikendicu sa bazenom', ru: 'построить дачу с бассейном', set: 'A' },
    { id: 'kupati-se', sr: 'kupati se u hladnoj vodi', ru: 'купаться в холодной воде', set: 'A' },
    { id: 'skadarsko', sr: 'Skadarsko jezero', ru: 'Скадарское озеро', set: 'A' },
    { id: 'savrsen', sr: 'savršena gibanica', ru: 'идеальная гибаница', set: 'A' }
  ],

  verbs: {
    biti: { inf: 'biti', ru: 'быть', pos: { ja: 'sam', ti: 'si', on: 'je', mi: 'smo', vi: 'ste', oni: 'su' }, neg: { ja: 'nisam', ti: 'nisi', on: 'nije', mi: 'nismo', vi: 'niste', oni: 'nisu' }, noQuestion: true, l: { m: 'bio', f: 'bila', n: 'bilo', mpl: 'bili', fpl: 'bile' } },
    raditi: { inf: 'raditi', ru: 'работать', pos: { ja: 'radim', ti: 'radiš', on: 'radi', mi: 'radimo', vi: 'radite', oni: 'rade' }, neg: { ja: 'ne radim', ti: 'ne radiš', on: 'ne radi', mi: 'ne radimo', vi: 'ne radite', oni: 'ne rade' }, l: { m: 'radio', f: 'radila', n: 'radilo', mpl: 'radili', fpl: 'radile' } },
    putovati: { inf: 'putovati', ru: 'путешествовать', pos: { ja: 'putujem', ti: 'putuješ', on: 'putuje', mi: 'putujemo', vi: 'putujete', oni: 'putuju' }, neg: { ja: 'ne putujem', ti: 'ne putuješ', on: 'ne putuje', mi: 'ne putujemo', vi: 'ne putujete', oni: 'ne putuju' }, l: { m: 'putovao', f: 'putovala', n: 'putovalo', mpl: 'putovali', fpl: 'putovale' } },
    ici: { inf: 'ići', ru: 'идти', pos: { ja: 'idem', ti: 'ideš', on: 'ide', mi: 'idemo', vi: 'idete', oni: 'idu' }, neg: { ja: 'ne idem', ti: 'ne ideš', on: 'ne ide', mi: 'ne idemo', vi: 'ne idete', oni: 'ne idu' }, l: { m: 'išao', f: 'išla', n: 'išlo', mpl: 'išli', fpl: 'išle' } },
    kupiti: { inf: 'kupiti', ru: 'купить', l: { m: 'kupio', f: 'kupila', n: 'kupilo', mpl: 'kupili', fpl: 'kupile' } },
    doci: { inf: 'doći', ru: 'прийти', l: { m: 'došao', f: 'došla', n: 'došlo', mpl: 'došli', fpl: 'došle' } },
    stanovati: { inf: 'stanovati', ru: 'проживать', pos: { ja: 'stanujem', ti: 'stanuješ', on: 'stanuje', mi: 'stanujemo', vi: 'stanujete', oni: 'stanuju' }, neg: { ja: 'ne stanujem', ti: 'ne stanuješ', on: 'ne stanuje', mi: 'ne stanujemo', vi: 'ne stanujete', oni: 'ne stanuju' }, l: { m: 'stanovao', f: 'stanovala', n: 'stanovalo', mpl: 'stanovali', fpl: 'stanovale' } },
    raditiF: { inf: 'raditi (futur)', ru: 'будет работать', pos: { ja: 'ću raditi', ti: 'ćeš raditi', on: 'će raditi', mi: 'ćemo raditi', vi: 'ćete raditi', oni: 'će raditi' }, neg: { ja: 'neću raditi', ti: 'nećeš raditi', on: 'neće raditi', mi: 'nećemo raditi', vi: 'nećete raditi', oni: 'neće raditi' }, noQuestion: true },
    putovatiF: { inf: 'putovati (futur)', ru: 'будет путешествовать', pos: { ja: 'ću putovati', ti: 'ćeš putovati', on: 'će putovati', mi: 'ćemo putovati', vi: 'ćete putovati', oni: 'će putovati' }, neg: { ja: 'neću putovati', ti: 'nećeš putovati', on: 'neće putovati', mi: 'nećemo putovati', vi: 'nećete putovati', oni: 'neće putovati' }, noQuestion: true },
    iciF: { inf: 'ići (futur)', ru: 'пойдёт', pos: { ja: 'ću ići', ti: 'ćeš ići', on: 'će ići', mi: 'ćemo ići', vi: 'ćete ići', oni: 'će ići' }, neg: { ja: 'neću ići', ti: 'nećeš ići', on: 'neće ići', mi: 'nećemo ići', vi: 'nećete ići', oni: 'neće ići' }, noQuestion: true }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '15.1',
      title: 'Moj Beograde i padeži',
      ru: 'Калемегдан по видео; все шесть падежей в упражнениях',
      goals: [
        'назвать достопримечательности Калемегдана и ответить на вопросы по видео',
        'вспомнить вопросы всех шести падежей',
        'поставить существительное с прилагательным в нужный падеж'
      ],
      blocks: [
        {
          type: 'text', min: 4, title: 'Ponavljanje · как проходим',
          img: 'img/l15_beograd.png',
          html: '<p>Урок 15 — повторение уроков 11–14: дом, город, транспорт, путешествия, профессии, четыре новых падежа (genitiv, instrumental, dativ, lokativ) и три времени. Перед занятием пройдите карточки в разделе <b>Повторение</b>.</p>' +
            '<p>В курсе к уроку прилагается детское видео <b>«Ana i Luka upoznaju Srbiju: Kalemegdan»</b> (канал Prve Knjige на YouTube, около 8 минут). Посмотрите его дома до занятия и выпишите незнакомые слова.</p>'
        },
        {
          type: 'match', min: 6, title: 'Nove reči iz videa · слова из видео',
          pairs: [
            ['struja', 'электричество'], ['čekati', 'ждать'], ['junaci', 'герои'], ['kula', 'башня'], ['tvrđava', 'крепость'],
            ['top', 'пушка'], ['košarkaš', 'баскетболист'], ['šahista', 'шахматист'], ['skakavac', 'кузнечик']
          ]
        },
        {
          type: 'gap', bank: true, min: 5, title: 'Mesta Kalemegdana · достопримечательности',
          note: 'В оригинале — фото. По описанию впишите место из списка.',
          items: [
            'Stari top na zidu — {Vojni muzej}.', 'Crveni teren, koš — {Igralište za košarku}.', 'Stara kamena kula pored reke — {Kula Nebojša}.', 'Mala crkva sa zelenim krovom — {Crkva Ružica}.',
            'Kapela obrasla zelenilom — {Kapela Svete Petke}.', 'Ulaz, životinje, deca — {Beogradski zoološki vrt}.', 'Kamene zidine i kule iznad Save i Dunava — {Beogradska tvrđava}.', 'Bronzani muškarac sa orlom i mačem — {Spomenik Pobednik}.'
          ]
        },
        {
          type: 'text', min: 3, title: 'Spomenik Pobednik · памятник Победителю',
          html: '<p>Памятник Победителю установлен в 1928 году в крепости Калемегдан к десятилетию прорыва Салоникского фронта. Скульптор — Иван Мештрович. Бронзовый мужчина держит орла в левой руке и меч в правой. Сербы шутят, что памятник уверенно смотрит вперёд, а всех неприятелей оставляет за спиной.</p>' +
            '<p>[[Sa mesta pored spomenika Pobedniku vidi se Novi Beograd.]]</p>'
        },
        {
          type: 'speak', min: 6, title: 'Odgovorite na pitanja · по видео',
          note: 'Семь вопросов из курса. Если видео не смотрели — ответы в образцах, прочитайте их вслух и запомните.',
          items: [
            { q: 'Kako se još zove Kalemegdan?', sample: 'Kališ.' }, { q: 'Šta deda skoro svaki dan radi na Kalemegdanu?', sample: 'Igra šah.' },
            { q: 'Kako se zove voz na struju koji liči na skakavca?', sample: 'Tramvaj.' }, { q: 'Šta se vidi sa mesta pored spomenika Pobedniku?', sample: 'Novi Beograd.' },
            { q: 'Zašto se kula Nebojša tako zove?', sample: 'Stražari se nikoga ne boje.' }, { q: 'Koje zanimanje Ana želi kada poraste?', sample: 'Veterinar.' },
            { q: 'Šta je baka napravila za ručak?', sample: 'Krempitu.' }
          ]
        },
        {
          type: 'text', min: 3, title: 'Padežna pitanja · вопросы падежей',
          tables: [
            { caption: 'Šest padeža', head: ['padež', 'pitanje', 'primer'], rows: [['Nominativ', 'ko? šta?', 'veliki grad'], ['Genitiv', 'koga? čega?', 'iz velikog grada'], ['Dativ', 'kome? čemu?', 'ka velikom gradu'], ['Akuzativ', 'koga? šta?', 'u veliki grad'], ['Instrumental', 'kim? čim?', 'sa velikim gradom'], ['Lokativ', 'o kome? o čemu?', 'u velikom gradu']] }
          ]
        },
        {
          type: 'gap', min: 8, title: 'Stavi imenice u ispravan oblik · падежи',
          note: 'Упражнение из курса.',
          items: [
            'Posle koncerta idemo u {restoran} (restoran).', 'U koju {zemlju} (zemlja) želite da putujete?', 'Moja kuća ima nove {prozore} (prozor, mn.).', 'Ne volim da se sunčam na {plaži} (plaža).',
            'U mojoj {ulici} (ulica) ne stanuju ti {ljudi} (čovek, mn.).', 'Koliko {liftova} (liftovi) ima tvoja {višespratnica} (višespratnica)?', 'Često sedim na {terasi} (terasa).', 'Nema nikakvog {smisla} (smisao) da se vraćamo kući {taksijem} (taksi).'
          ]
        },
        {
          type: 'gap', min: 8, title: 'Imenica sa pridevom · с прилагательным',
          note: 'Упражнение из курса.',
          items: [
            'Koliko koštaju dve {povratne karte} (povratna karta)?', 'Voz polazi sa {železničke stanice} (železnička stanica) u 20 časova.', 'Mogu da vidim sve {dolaske} (dolazak, mn.) i {odlaske} (odlazak, mn.) na aerodrom Šeremetjevo onlajn.',
            'Olga je zauzela {prazno mesto} (prazno mesto) pored prozora.', 'U blizini vaše kuće nema {besplatnog parkinga} (besplatni parking).', 'Moji rođaci obično idu na odmor sa {teškim torbama} (teške torbe).',
            'Šta ste po {zanimanju} (zanimanje)?', 'Hoćeš li ići {autobusom} (autobus) ili {brzim vozom} (brz voz)?'
          ]
        },
        {
          type: 'gap', min: 7, title: 'Još padeža · ещё падежи',
          note: 'Упражнение из курса.',
          items: [
            'Idem u {školu} (škola) pre podne.', 'Pored {crkve} (crkva) ima jedna mala prodavnica.', 'U kojem se {bioskopu} (bioskop) daje onaj film?', 'Ići ću {vozom} (voz) jer je jeftinije.',
            'Ne volim da se sunčam na {plaži} (plaža).', 'Te biljke obično rastu pored {mora} (more).', 'Svaki dan komuniciramo sa {roditeljima} (roditelji).', 'Moja kuća ima 8 {spratova} (spratovi), {garažu} (garaža) i {parking} (parking).'
          ]
        },
        {
          type: 'speak', min: 8, title: 'Šetnja po Kalemegdanu · разговор',
          note: 'Партнёр — турист, вы — гид. Расскажите о Калемегдане: что там есть, как дойти, что видно, чем добраться. Используйте все падежи.',
          items: [
            { q: 'Kako da odem do Kalemegdana? Čime?', sample: 'Idite tramvajem do Knez Mihailove ulice, zatim pravo do tvrđave.' },
            { q: 'Šta ima na Kalemegdanu?', sample: 'Ima Vojni muzej, kula Nebojša, crkva Ružica, zoološki vrt i spomenik Pobednik.' },
            { q: 'Šta se vidi sa tvrđave? Sa kim ideš?', sample: 'Vidi se Novi Beograd i reke Sava i Dunav. Idem sa prijateljima.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'Kalemegdan: tvrđava, kula Nebojša, spomenik Pobednik, Vojni muzej',
            'ko? koga? kome? koga? kim? o kome?',
            'iz velikog grada — ka velikom gradu — sa velikim gradom — u velikom gradu',
            'dve povratne karte, sa teškim torbama, brzim vozom'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: Калемегдан и слова упражнений', est: 8, set: 'A' },
        {
          type: 'qa', mode: 'transform', title: 'Padeži · поставьте в падеж', est: 8,
          note: 'В скобках слово и падеж.',
          items: [
            { q: 'iz … (mali grad, genitiv)', a: ['iz malog grada', 'malog grada'] }, { q: 'ka … (stanica, dativ)', a: ['ka stanici', 'stanici'] }, { q: 'u … (restoran, akuzativ)', a: ['u restoran', 'restoran'] },
            { q: 'sa … (muž, instrumental)', a: ['sa mužem', 'mužem'] }, { q: 'u … (grad, lokativ)', a: ['u gradu', 'gradu'] }, { q: 'pored … (crkva, genitiv)', a: ['pored crkve', 'crkve'] },
            { q: '… (voz, instrumental)', a: ['vozom'] }, { q: 'na … (terasa, lokativ)', a: ['na terasi', 'terasi'] }, { q: 'dve … (povratna karta, genitiv jd.)', a: ['dve povratne karte', 'povratne karte'] },
            { q: 'sa … (teške torbe, instrumental)', a: ['sa teškim torbama', 'teškim torbama'] }, { q: 'nema … (besplatni parking, genitiv)', a: ['nema besplatnog parkinga', 'besplatnog parkinga'] }, { q: 'kupila je … (sestra, dativ) poklon', a: ['sestri'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Posle koncerta idemo u restoran.'] }, { a: ['Voz polazi sa železničke stanice u 20 časova.'] }, { a: ['Olga je zauzela prazno mesto pored prozora.'] },
            { a: ['Svaki dan komuniciramo sa roditeljima.'] }, { a: ['Hoćeš li ići autobusom ili brzim vozom?'] }, { a: ['Stražari se nikoga ne boje.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'В какую страну вы хотите поехать?', a: ['U koju zemlju želite da putujete?'] },
            { q: 'Я часто сижу на террасе.', a: ['Često sedim na terasi.', 'Ja često sedim na terasi.'] },
            { q: 'Сколько стоят два билета туда-обратно?', a: ['Koliko koštaju dve povratne karte?'] },
            { q: 'Рядом с церковью есть маленький магазин.', a: ['Pored crkve ima jedna mala prodavnica.', 'Pored crkve je mala prodavnica.', 'Pored crkve ima mala prodavnica.'] },
            { q: 'Поеду поездом, потому что дешевле.', a: ['Ići ću vozom jer je jeftinije.', 'Ići ću vozom, jer je jeftinije.'] },
            { q: 'Мои родственники едут в отпуск с тяжёлыми сумками.', a: ['Moji rođaci idu na odmor sa teškim torbama.'] },
            { q: 'У моего дома восемь этажей и гараж.', a: ['Moja kuća ima osam spratova i garažu.', 'Moja kuća ima 8 spratova i garažu.'] },
            { q: 'Кем вы работаете (по профессии)?', a: ['Šta ste po zanimanju?'] }
          ]
        },
        {
          type: 'write', title: 'Moje omiljeno mesto u gradu · любимое место', est: 8, key: 'hw-15.1-mesto',
          note: '8 предложений о любимом месте в городе: где находится, как добраться, что там есть, с кем ходите. Минимум четыре разных падежа.',
          sample: 'Moje omiljeno mesto u Beogradu je Kalemegdan. Nalazi se u centru, blizu Knez Mihailove ulice. Idem tamo tramvajem ili peške. Na Kalemegdanu ima stara tvrđava, muzej i zoološki vrt. Sa tvrđave se vidi Novi Beograd i dve reke. Šetam se tamo sa devojkom vikendom. Pored spomenika Pobedniku uvek ima mnogo turista. Volim Kalemegdan zbog pogleda na reke.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '15.2',
      title: 'Glagolska vremena',
      ru: 'Презент, перфект, футур; профессии; книга-путеводитель',
      goals: [
        'выбрать время по контексту и поставить глагол в нужную форму',
        'вспомнить три спряжения, перфект и футур',
        'назвать профессии по описанию в мужском и женском роде'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о любимом месте. Партнёр называет три падежа, которые услышал.',
          items: [{ q: 'Moje omiljeno mesto je…' }]
        },
        {
          type: 'text', min: 4, title: 'Tri vremena · сводка',
          tables: [
            { caption: 'Prezent', head: ['', 'a: čitati', 'e: jesti', 'i: živeti'], rows: [['ja', 'čitam', 'jedem', 'živim'], ['ti', 'čitaš', 'jedeš', 'živiš'], ['on', 'čita', 'jede', 'živi'], ['mi', 'čitamo', 'jedemo', 'živimo'], ['vi', 'čitate', 'jedete', 'živite'], ['oni', 'čitaju', 'jedu', 'žive']] },
            { caption: 'Perfekat i futur I', head: ['perfekat', 'futur I'], rows: [['sam / si / je / smo / ste / su + radio, radila, radili, radile', 'ću / ćeš / će / ćemo / ćete / će + raditi; radiću'], ['nisam radio', 'neću raditi']] }
          ]
        },
        {
          type: 'gap', bank: true, min: 8, title: 'Sadašnje i prošlo vreme · из банка слов',
          note: 'Упражнение из курса: вставьте глаголы в презенте или перфекте.',
          items: [
            'Sekretarica uvek {kuva} ukusnu kafu.', 'Nekada ovde {je bilo} pozorište, a sada {je} prodavnica.', 'Radnici danas nisu {došli} na posao.', 'Neki ljudi {se kupaju} u potpuno hladnoj vodi.',
            'Ranije {sam voleo} da putujem, ali sada {su} avionske karte veoma skupe.', 'U Beograd {stižem} 20. septembra.', 'Moje komšije {su potrošile} mnogo novca i {izgradile} ogromnu vikendicu sa bazenom.', 'Posle semafora {skrenite} levo pa {idite} pravo do kraja ulice.'
          ]
        },
        {
          type: 'gap', min: 7, title: 'Koristite oblici Futura I · будущее время',
          note: 'Упражнение из курса. Со связкой или слитно.',
          items: [
            'Sutra u 8 sati {će doći|doći će} (doći) Miloš i Jasna.', '{Kupiću} (kupiti, ja) kartu u jednom pravcu za Tursku sa popustom.', 'Sigurno {ćete raditi} (raditi, vi) kao lekari.',
            'Vožnja taksijem {će biti} (biti) neverovatno skupa jer pada sneg.', '{Naučiće} (naučiti, oni) srpski jer uče svaki dan.', '{Ići ćemo} (ići, mi) za vikend na Skadarsko jezero.',
            '{Pročitaću} (pročitati, ja) ovu knjigu za nedelju dana.', 'Kuvar {će ispeći} (ispeći) savršenu gibanicu.'
          ]
        },
        {
          type: 'gap', min: 6, title: 'Upotrebite ispravno glagolsko vreme · выберите время',
          note: 'Упражнение из курса (повтор из урока 13, теперь без подсказок о времени).',
          items: [
            'Prošle godine Marko {je bio} (biti) u Kini, a sledeće godine {će ići} (ići) u Ameriku.', 'Svake nedelje mi {igramo} (igrati) fudbal sa svojim kolegama.',
            'Sada Dragan i Milica {nemaju} (imati, odrični) para, pa ne {putuju} (putovati).', 'Kada stignem u Italiju, {poslaću} (poslati) majci razglednicu.',
            'Znam da ti {si izgubio|si izgubila} (izgubiti) pasoš.', 'Moramo odmah da {rezervišemo} (rezervisati) hotel!'
          ]
        },
        {
          type: 'gap', min: 6, title: 'Zanimanja · профессии по описанию (м. и ж. род)',
          note: 'В оригинале — картинки. Впишите профессию в указанном роде.',
          items: [
            'Žena u kacigi sa čekićem na gradilištu — {građevinarka}.', 'Muškarac u beloj kapi sa tiganjem — {kuvar}.', 'Žena u uniformi sa koferom u avionu — {stjuardesa}.', 'Žena sa stetoskopom — {lekarka}.',
            'Žena za kompjuterom sa slušalicama — {sekretarica|programerka}.', 'Muškarac u uniformi pored auta — {policajac}.', 'Žena sa poslužavnikom u restoranu — {konobarica}.', 'Žena sa mapom i pokazivačem — {učiteljica|profesorka}.'
          ]
        },
        {
          type: 'conj', min: 5, title: 'Trening · три времени вперемешку',
          verbs: ['raditi', 'putovati', 'ici', 'stanovati', 'raditiF', 'putovatiF', 'iciF'], rounds: 8
        },
        {
          type: 'conj', tense: 'past', min: 4, title: 'Trening · перфект',
          verbs: ['biti', 'raditi', 'putovati', 'ici', 'kupiti', 'doci', 'stanovati'], rounds: 6
        },
        {
          type: 'text', min: 3, title: 'Knjiga-vodič · Beograd za decu',
          html: '<p>В курсе прилагается путеводитель <b>Jovo Anđić — «Beograd za decu»</b> (120 страниц, PDF в оригинальном курсе). Милый и яркий путеводитель для детей, полезен для изучения сербского и знакомства с достопримечательностями Белграда. Если у вас есть доступ к PDF в Edvibe — читайте по 2–3 страницы в неделю и выписывайте слова.</p>'
        },
        {
          type: 'speak', min: 10, title: 'Juče, danas, sutra u Beogradu · итоговый разговор',
          note: 'Свободный разговор в трёх временах: что делали в Белграде на прошлой неделе, что делаете обычно, что будете делать в выходные. Партнёр следит, чтобы прозвучали все три времени и минимум три профессии или места.',
          items: [
            { q: 'Šta si radio / radila prošle nedelje u gradu?', sample: 'Prošle nedelje sam bio na Kalemegdanu i jeo sam u kafani sa prijateljima.' },
            { q: 'Šta obično radiš vikendom? Gde radiš?', sample: 'Obično se šetam kejom i pijem kafu. Radim kao programer od kuće.' },
            { q: 'Šta ćeš raditi sledećeg vikenda?', sample: 'Ići ću na Skadarsko jezero vozom. Rezervisaću hotel i kupiću povratnu kartu.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · что дальше',
          points: [
            'Уроки 11–14 закрыты: дом, город, транспорт, путешествия, профессии; genitiv, dativ, instrumental, lokativ; perfekat, futur I',
            'Карточки продолжают приходить в «Повторение»',
            'Дальше — урок 16'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: слова урока (обратная сторона)', est: 6, set: 'A' },
        { type: 'conj', title: 'Тренажёр: презент и футур', est: 6, verbs: ['raditi', 'putovati', 'ici', 'stanovati', 'raditiF', 'putovatiF', 'iciF'], rounds: 14 },
        { type: 'conj', tense: 'past', title: 'Тренажёр: перфект', est: 5, verbs: ['biti', 'raditi', 'putovati', 'ici', 'kupiti', 'doci', 'stanovati'], rounds: 10 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Sekretarica uvek kuva ukusnu kafu.'] }, { a: ['Radnici danas nisu došli na posao.'] }, { a: ['U Beograd stižem 20. septembra.'] },
            { a: ['Kupiću kartu u jednom pravcu za Tursku.'] }, { a: ['Ići ćemo za vikend na Skadarsko jezero.'] }, { a: ['Kuvar će ispeći savršenu gibanicu.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод: всё вместе', est: 10,
          items: [
            { q: 'Раньше я любил путешествовать, но сейчас билеты очень дорогие.', a: ['Ranije sam voleo da putujem, ali sada su karte veoma skupe.', 'Ranije sam volela da putujem, ali sada su karte veoma skupe.'] },
            { q: 'Соседи построили огромную дачу с бассейном.', a: ['Komšije su izgradile ogromnu vikendicu sa bazenom.', 'Komšije su izgradili ogromnu vikendicu sa bazenom.'] },
            { q: 'Завтра в 8 часов приедут Милош и Ясна.', a: ['Sutra u 8 sati će doći Miloš i Jasna.', 'Sutra u 8 sati doći će Miloš i Jasna.', 'Sutra u osam sati će doći Miloš i Jasna.'] },
            { q: 'Вы точно будете работать врачами.', a: ['Sigurno ćete raditi kao lekari.'] },
            { q: 'Такси будет невероятно дорогим, потому что идёт снег.', a: ['Vožnja taksijem će biti neverovatno skupa jer pada sneg.', 'Taksi će biti neverovatno skup jer pada sneg.'] },
            { q: 'После светофора поверните налево.', a: ['Posle semafora skrenite levo.'] },
            { q: 'Она стюардесса, а он строитель.', a: ['Ona je stjuardesa, a on je građevinar.'] },
            { q: 'Я прочитаю эту книгу за неделю.', a: ['Pročitaću ovu knjigu za nedelju dana.', 'Ja ću pročitati ovu knjigu za nedelju dana.'] }
          ]
        },
        {
          type: 'write', title: 'Moj Beograd · сочинение в трёх временах + запись', est: 12, key: 'hw-15.2-beograd', record: true,
          note: '12 предложений о своём городе: что вы там делали, что делаете, что будете делать; где живёте, кем работаете, чем ездите. Используйте минимум четыре падежа и три времени. Запишите чтение вслух.',
          sample: 'Živim u Beogradu dve godine. Stanujem u stanu na Vračaru, na trećem spratu. Radim kao programer od kuće. Prošle godine sam mnogo putovao po Srbiji vozom i busom. Bio sam u Novom Sadu i na Skadarskom jezeru. Obično vikendom idem na Kalemegdan sa devojkom. Šetamo se kejom i pijemo kafu u kafiću pored reke. Sledećeg meseca ću ići u Niš. Kupiću povratnu kartu i rezervisaću hotel. Posetiću tvrđavu i jesti ću burek. Neću raditi ceo vikend. Volim ovaj grad!'
        }
      ]
    }
  ]
});
