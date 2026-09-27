// Lekcija 23 - Sport i zdrav način života. Three 60-minute sessions: sports & equipment, modal verbs + trebati, healthy lifestyle.
COURSE.register({
  n: 23,
  title: 'Sport i zdrav način života',
  ru: 'Спорт и инвентарь; znati / moći; модальные глаголы и trebati; здоровый образ жизни',

  vocab: [
    { id: 'trcanje23', sr: 'trčanje, skokovi', ru: 'бег, прыжки', set: 'A' },
    { id: 'pusiti23', sr: 'pušiti, ja pušim — Prestani da pušiš!', ru: 'курить — Перестань курить!', set: 'A' },
    { id: 'pritisak', sr: 'pritisak — to mi je za pritisak', ru: 'давление — это мне от давления', set: 'A' },
    { id: 'dirati', sr: 'dirati, ja diram — ne diraj', ru: 'трогать — не трогай', set: 'A' },
    { id: 'razvijen', sr: 'razvijen kao albanski turizam', ru: '«развит, как албанский туризм» (шутка: не очень)', set: 'A' },
    { id: 'fudbal23', sr: 'fudbal, odbojka, košarka, tenis', ru: 'футбол, волейбол, баскетбол, теннис', set: 'A' },
    { id: 'stoni-tenis', sr: 'stoni tenis, hokej', ru: 'настольный теннис, хоккей', set: 'A' },
    { id: 'joga23', sr: 'joga, istezanje, plivanje', ru: 'йога, растяжка, плавание', set: 'A' },
    { id: 'bicikliranje', sr: 'bicikliranje, snoubording, alpsko skijanje', ru: 'велоспорт, сноуборд, горные лыжи', set: 'A' },
    { id: 'sah', sr: 'šah, gimnastika, boks, borba', ru: 'шахматы, гимнастика, бокс, борьба', set: 'A' },
    { id: 'klizanje', sr: 'klizanje, balsko sportski ples', ru: 'катание на коньках, бальные танцы', set: 'A' },
    { id: 'klizaljke', sr: 'klizaljke, skije, snoubord, koturaljke', ru: 'коньки, лыжи, сноуборд, ролики', set: 'A' },
    { id: 'tegovi', sr: 'tegovi, prostirka za vežbanje, lopta', ru: 'гантели, коврик, мяч', set: 'A' },
    { id: 'bicikl23', sr: 'bicikl, teniski reket, kupaći kostim / kupaće gaće', ru: 'велосипед, ракетка, купальник / плавки', set: 'A' },
    { id: 'teretana', sr: 'teretana — vežbati sa tegovima', ru: 'спортзал — заниматься с гантелями', set: 'A' },
    { id: 'bazen', sr: 'bazen — plivati', ru: 'бассейн — плавать', set: 'A' },
    { id: 'teren', sr: 'fudbalski / košarkaški / odbojkaški teren — igrati sa loptom', ru: 'игровое поле — играть с мячом', set: 'A' },
    { id: 'teniski-teren', sr: 'teniski teren — igrati tenis', ru: 'теннисный корт', set: 'A' },
    { id: 'teren-otvoreno', sr: 'teren za vežbanje na otvorenom — vežbati u dvorištu', ru: 'площадка для воркаута', set: 'A' },
    { id: 'klizaliste', sr: 'klizalište — klizati; skijalište — skijati', ru: 'каток — кататься; горнолыжный курорт — кататься на лыжах', set: 'A' },
    { id: 'znati-moci', sr: 'znati — уметь; moći — мочь', ru: 'Ja znam da skijam, ali ne mogu zato što boli me noga.', set: 'A' },
    { id: 'igrati-fudbal', sr: 'igrati fudbal, odbojku, košarku, tenis', ru: 'играть в футбол, волейбол, баскетбол, теннис', set: 'A' },

    { id: 'modalni', sr: 'modalni glagoli — morati, moći, hteti / želeti', ru: 'модальные глаголы', set: 'B' },
    { id: 'moci23', sr: 'moći — mogu, možeš, može, možemo, možete, mogu', ru: 'мочь', set: 'B' },
    { id: 'morati23', sr: 'morati — moram, moraš, mora…', ru: 'быть должным (жёстко)', set: 'B' },
    { id: 'trebati', sr: 'trebati — treba da + prezent', ru: 'нужно, надо, следует', set: 'B' },
    { id: 'treba-mi', sr: 'Novac mi treba za poklon. Knjige ti trebaju za rad.', ru: 'обычное значение: нуждаться (изменяется)', set: 'B' },
    { id: 'trebalo-je', sr: 'trebalo je da + prezent; trebaće da + prezent', ru: 'нужно было; нужно будет', set: 'B' },
    { id: 'uskoro-treba', sr: 'Uskoro treba da dođe.', ru: 'Должно быть, он скоро придёт.', set: 'B' },
    { id: 'kako-treba', sr: 'kako treba', ru: 'как надо', set: 'B' },
    { id: 'tako-treba', sr: 'Tako vam i treba!', ru: 'Так вам и надо!', set: 'B' },
    { id: 'jos-bi', sr: 'Još bi nam samo to trebalo!', ru: 'Только этого нам и не хватало!', set: 'B' },
    { id: 'popusiti', sr: 'popušiti kutiju cigareta', ru: 'выкурить пачку сигарет', set: 'B' },
    { id: 'brza-hrana', sr: 'brza hrana — zdrava hrana', ru: 'фастфуд — здоровая еда', set: 'B' },
    { id: 'ustati', sr: 'ustati — ustaje u 8, ide u krevet u 22', ru: 'встать — встаёт в 8, ложится в 22', set: 'B' },
    { id: 'poceti', sr: 'početi novi život', ru: 'начать новую жизнь', set: 'B' },
    { id: 'budilnik', sr: 'budilnik', ru: 'будильник', set: 'B' },
    { id: 'nije-me-briga', sr: 'Nije me briga.', ru: 'Мне всё равно.', set: 'B' },
    { id: 'potruditi-se', sr: 'potruditi se — ako će se potruditi više', ru: 'постараться — если постарается больше', set: 'B' },
    { id: 'svetski-nivo', sr: 'na svetskom nivou', ru: 'на мировом уровне', set: 'B' },
    { id: 'mentalno', sr: 'mentalno zdravlje', ru: 'ментальное здоровье', set: 'B' },
    { id: 'smrsati', sr: 'smršati', ru: 'похудеть', set: 'B' },

    { id: 'zdrav-nacin', sr: 'zdrav način života', ru: 'здоровый образ жизни', set: 'C' },
    { id: 'zdrava-hrana', sr: 'jesti zdravu hranu, više kretanja, manje stresa', ru: 'есть здоровую еду, больше движения, меньше стресса', set: 'C' },
    { id: 'odmoriti', sr: 'odmoriti se na vreme, odbiti loše navike', ru: 'отдыхать вовремя, отказаться от плохих привычек', set: 'C' },
    { id: 'higijena', sr: 'pravila lične higijene, vežbanje, ojačati imunitet', ru: 'правила гигиены, тренировки, укрепить иммунитет', set: 'C' },
    { id: 'navika', sr: 'navika — dobra / loša navika', ru: 'привычка — хорошая / плохая', set: 'C' },
    { id: 'dorucak', sr: 'Doručak je najvažniji obrok u danu.', ru: 'Завтрак — самый важный приём пищи.', set: 'C' },
    { id: 'zitarice', sr: 'žitarice, voće, sendvič', ru: 'злаки, фрукты, сэндвич', set: 'C' },
    { id: 'kondicija', sr: 'kondicija, uspravno držanje', ru: 'физическая форма, прямая осанка', set: 'C' },
    { id: 'smeh', sr: 'smeh — Redovno se smejte!', ru: 'смех — Регулярно смейтесь!', set: 'C' },
    { id: 'endorfin', sr: 'hormon endorfin — anksioznost, stres, depresija', ru: 'эндорфин — тревожность, стресс, депрессия', set: 'C' },
    { id: 'pregled', sr: 'redovni sistematski pregledi', ru: 'регулярные медосмотры', set: 'C' },
    { id: 'pusenje', sr: 'pušenje — udisanje dima od cigareta', ru: 'курение — вдыхание сигаретного дыма', set: 'C' },
    { id: 'drustvene-mreze', sr: 'pratiti društvene mreže', ru: 'сидеть в соцсетях', set: 'C' },
    { id: 'kasno-spavanje', sr: 'ići na spavanje kasno — biti dugo budan', ru: 'ложиться поздно — долго не спать', set: 'C' },
    { id: 'steci', sr: 'steći naviku za 21 dan', ru: 'приобрести привычку за 21 день', set: 'C' },
    { id: 'osloboditi', sr: 'osloboditi se loše navike', ru: 'избавиться от плохой привычки', set: 'C' },
    { id: 'staza', sr: 'biciklistička staza', ru: 'велодорожка', set: 'C' },
    { id: 'kopaonik', sr: 'Kopaonik — najveće skijalište u Srbiji', ru: 'Копаоник — крупнейший горнолыжный курорт Сербии', set: 'C' }
  ],

  verbs: {
    moci: { inf: 'moći', ru: 'мочь', pos: { ja: 'mogu', ti: 'možeš', on: 'može', mi: 'možemo', vi: 'možete', oni: 'mogu' }, neg: { ja: 'ne mogu', ti: 'ne možeš', on: 'ne može', mi: 'ne možemo', vi: 'ne možete', oni: 'ne mogu' } },
    morati: { inf: 'morati', ru: 'быть должным', pos: { ja: 'moram', ti: 'moraš', on: 'mora', mi: 'moramo', vi: 'morate', oni: 'moraju' }, neg: { ja: 'ne moram', ti: 'ne moraš', on: 'ne mora', mi: 'ne moramo', vi: 'ne morate', oni: 'ne moraju' } },
    znati: { inf: 'znati', ru: 'знать, уметь', pos: { ja: 'znam', ti: 'znaš', on: 'zna', mi: 'znamo', vi: 'znate', oni: 'znaju' }, neg: { ja: 'ne znam', ti: 'ne znaš', on: 'ne zna', mi: 'ne znamo', vi: 'ne znate', oni: 'ne znaju' } },
    hteti: { inf: 'hteti', ru: 'хотеть', pos: { ja: 'hoću', ti: 'hoćeš', on: 'hoće', mi: 'hoćemo', vi: 'hoćete', oni: 'hoće' }, neg: { ja: 'neću', ti: 'nećeš', on: 'neće', mi: 'nećemo', vi: 'nećete', oni: 'neće' }, noQuestion: true },
    vezbati: { inf: 'vežbati', ru: 'тренироваться', pos: { ja: 'vežbam', ti: 'vežbaš', on: 'vežba', mi: 'vežbamo', vi: 'vežbate', oni: 'vežbaju' }, neg: { ja: 'ne vežbam', ti: 'ne vežbaš', on: 'ne vežba', mi: 'ne vežbamo', vi: 'ne vežbate', oni: 'ne vežbaju' }, l: { m: 'vežbao', f: 'vežbala', n: 'vežbalo', mpl: 'vežbali', fpl: 'vežbale' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '23.1',
      title: 'Sport',
      ru: 'Виды спорта, инвентарь, спортивные локации; znati и moći',
      goals: [
        'назвать 20 видов спорта и 12 предметов инвентаря',
        'сказать, где чем занимаются: u teretani vežbam sa tegovima',
        'различать znati (уметь) и moći (мочь)'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Đoković se nervira',
          note: 'Джокович-тренер нервничает: бабушка курит, Тесла не хочет отжиматься, Андрич медитирует. Прочитайте кириллицу сами.',
          img: 'img/l23_strip.png',
          lines: [
            { who: 'Novak', sr: 'Ajde-ajde! Prvo trčanje, zatim skokovi, zatim odbojka, zatim…', ru: 'Давай-давай! Сначала бег, потом прыжки, потом волейбол, потом…' },
            { who: 'Novak', sr: 'Hej! Prestani da pušiš! Kad ćeš razumeti da nije dobro za zdravlje!', ru: 'Эй! Перестань курить! Когда ты поймёшь, что это вредно для здоровья!' },
            { who: 'Baka', sr: 'Molim?! Dečko, ne diraj moje cigare! To mi je za pritisak!', ru: 'Что?! Парень, не трогай мои сигары! Это мне от давления!' },
            { who: 'Novak', sr: 'Ne znam šta da radim sa njima. Razvijeni su kao albanski turizam!', ru: 'Не знаю, что с ними делать. Развиты, как албанский туризм!' }
          ]
        },
        {
          type: 'text', min: 6, title: 'Čime se vi bavite? · виды спорта',
          note: 'Повторение: baviti se + инструментал. Igrati fudbal, odbojku, košarku, tenis — аккузатив.',
          img: 'img/l23_sport.png',
          tables: [
            { caption: 'Sportovi', head: ['', '', '', ''], rows: [['fudbal', 'odbojka', 'košarka', 'tenis'], ['stoni tenis', 'hokej', 'joga / istezanje', 'plivanje'], ['bicikliranje', 'snoubording', 'alpsko skijanje', 'klizanje'], ['šah', 'gimnastika', 'boks', 'borba'], ['balsko sportski ples', '', '', '']] }
          ]
        },
        {
          type: 'speak', min: 5, title: 'Pitanja za vas · вопросы из курса',
          items: [
            { q: 'Čime se vi bavite?', sample: 'Bavim se plivanjem i jogom.' },
            { q: 'Koju vrstu sporta volite i zašto?', sample: 'Volim tenis, jer je dinamičan i igra se na otvorenom.' },
            { q: 'Koju vrstu sporta ne volite?', sample: 'Ne volim boks, jer je opasan.' }
          ]
        },
        {
          type: 'sort', min: 5, title: 'Zimski ili drugi sport? · распределите',
          note: 'Упражнение из курса.',
          groups: ['Zimski sportovi', 'Ostali sportovi'],
          items: [
            { w: 'bicikliranje', g: 'Ostali sportovi' }, { w: 'joga', g: 'Ostali sportovi' }, { w: 'snoubording', g: 'Zimski sportovi' }, { w: 'ples', g: 'Ostali sportovi' }, { w: 'šah', g: 'Ostali sportovi' }, { w: 'boks', g: 'Ostali sportovi' },
            { w: 'alpsko skijanje', g: 'Zimski sportovi' }, { w: 'hokej', g: 'Zimski sportovi' }, { w: 'fudbal', g: 'Ostali sportovi' }, { w: 'gimnastika', g: 'Ostali sportovi' }, { w: 'klizanje', g: 'Zimski sportovi' }, { w: 'istezanje', g: 'Ostali sportovi' }
          ]
        },
        {
          type: 'text', min: 4, title: 'Sportska oprema · инвентарь',
          img: 'img/l23_oprema.png',
          html: '<ul><li>[[klizaljke]] — коньки, [[skije]] — лыжи, [[snoubord]] — сноуборд, [[koturaljke]] — ролики</li><li>[[tegovi]] — гантели, [[prostirka za vežbanje]] — коврик, [[lopta]] — мяч, [[bicikl]] — велосипед</li><li>[[teniski reket]] — ракетка, [[kupaći kostim]] / [[kupaće gaće]] — купальник / плавки</li></ul>'
        },
        {
          type: 'gap', bank: true, min: 5, title: 'Koji predmet fali? · какого инвентаря не хватает',
          note: 'Упражнение из курса.',
          items: [
            'Ja obožavam da skijam i za rođendan dobila sam sjajne {klizaljke}? Не — {skije}. <i>(здесь принимаются skije; в оригинале банк без skije — исправлено)</i>',
            'Goca ide danas na jogu, kupila je {prostirku za vežbanje}.', 'Moj muž ide u teretanu i vežba sa {tegovima}.', 'Igre sa {loptom} su košarka, odbojka i fudbal.',
            'Naša porodica ima nekoliko {bicikla}, mi volimo biciklirati u parku.', 'Veljko je izgubio {kupaće gaće} u bazenu!', 'U proleće ću izvaditi svoje {koturaljke} iz ormara.'
          ]
        },
        {
          type: 'match', min: 5, title: 'Sportske lokacije · место и действие',
          note: 'Упражнение из курса.',
          pairs: [
            ['teretana', 'vežbati sa tegovima'], ['bazen', 'plivati'], ['fudbalski / košarkaški / odbojkaški teren', 'igrati sa loptom'], ['teniski teren', 'igrati tenis'],
            ['teren za vežbanje na otvorenom', 'vežbati u dvorištu'], ['klizalište', 'klizati'], ['skijalište', 'skijati']
          ]
        },
        {
          type: 'text', min: 3, title: 'Znati i moći · уметь и мочь',
          html: '<p>[[znati]] — знать, уметь; [[moći]] — мочь, быть в состоянии. [[Ja znam da skijam, ali ne mogu zato što me boli noga.]] — Я умею кататься на лыжах, но не могу, потому что болит нога.</p>' +
            '<p>[[Bavim se plesom. Znam da plešem dobro!]] [[Moj omiljeni sport je skijanje. Mogu da skijam sjajno!]] [[Ja obožavam jogu! Volim da se istežem i znam mnogo!]]</p>'
        },
        {
          type: 'gap', bank: true, min: 4, title: 'Znam, ali ne mogu · выберите по смыслу',
          note: 'Упражнение из курса.',
          items: [
            'Mi {znamo} da klizamo, ali ne {možemo} zato što u gradu nema klizališta.', 'Ja {mogu} da probam skijanje, ali ne {znam} kako.',
            'Ti {znaš} da igraš košarku kao profesionalac.', 'On {može} da igra odbojku na svetskom nivou, ako će se potruditi više.'
          ]
        },
        {
          type: 'gap', bank: true, min: 3, title: 'Unesite odgovarajuće reči · спорт по фото',
          note: 'В оригинале — 8 фото.',
          items: ['Lopta iznad mreže — {odbojka}.', 'Lopta u košu — {košarka}.', 'Lopta u golu — {fudbal}.', 'Reket i teren — {tenis}.', 'Klizaljke na ledu — {klizanje}.', 'Sneg i skije — {skijanje}.', 'Balerina na zalasku — {ples}.', 'Žena u jogi — {istezanje}.']
        },
        {
          type: 'speak', min: 12, title: 'Znam ili mogu? · разговор',
          note: 'Ответьте друг другу и составьте по три предложения с znam / ne znam / mogu / ne mogu про спорт. Потом: где в вашем городе есть teretana, bazen, klizalište?',
          items: [
            { q: 'Šta znaš da radiš dobro? Šta ne znaš?', sample: 'Znam da plivam dobro, ali ne znam da skijam.' },
            { q: 'Šta možeš, a šta ne možeš sada?', sample: 'Mogu da trčim svaki dan, ali ne mogu da igram fudbal, jer me boli koleno.' },
            { q: 'Gde vežbaš? Koju opremu imaš?', sample: 'Vežbam u teretani sa tegovima. Imam bicikl i prostirku za jogu.' },
            { q: 'Da li u tvom gradu ima klizalište, bazen, skijalište?', sample: 'Ima bazen i teretana, ali nema skijališta.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'fudbal, odbojka, košarka, tenis, plivanje, skijanje, klizanje, joga, šah',
            'klizaljke, skije, tegovi, lopta, bicikl, reket, prostirka',
            'teretana, bazen, teren, klizalište, skijalište',
            'znam da plivam — умею; mogu da plivam — могу'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: спорт и инвентарь', est: 10, set: 'A' },
        { type: 'conj', title: 'Тренажёр: moći, znati', est: 4, verbs: ['moci', 'znati'], rounds: 8 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Prestani da pušiš! Nije dobro za zdravlje!'] }, { a: ['Ne diraj moje cigare, to mi je za pritisak!'] }, { a: ['Znam da skijam, ali ne mogu, boli me noga.'] },
            { a: ['Moj muž ide u teretanu i vežba sa tegovima.'] }, { a: ['Veljko je izgubio kupaće gaće u bazenu!'] }, { a: ['U gradu nema klizališta.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Я умею плавать, но не умею кататься на лыжах.', a: ['Znam da plivam, ali ne znam da skijam.'] },
            { q: 'Мы умеем кататься на коньках, но не можем: в городе нет катка.', a: ['Znamo da klizamo, ali ne možemo, u gradu nema klizališta.', 'Znamo da klizamo, ali ne možemo zato što u gradu nema klizališta.'] },
            { q: 'Ты играешь в баскетбол как профессионал.', a: ['Ti znaš da igraš košarku kao profesionalac.', 'Igraš košarku kao profesionalac.'] },
            { q: 'Игры с мячом — это баскетбол, волейбол и футбол.', a: ['Igre sa loptom su košarka, odbojka i fudbal.'] },
            { q: 'Я иду в спортзал три раза в неделю.', a: ['Idem u teretanu tri puta nedeljno.', 'Ja idem u teretanu tri puta nedeljno.'] },
            { q: 'Какой вид спорта ты любишь и почему?', a: ['Koju vrstu sporta voliš i zašto?'] },
            { q: 'Перестань курить!', a: ['Prestani da pušiš!'] }
          ]
        },
        {
          type: 'write', title: 'Sport u mom životu · текст', est: 7, key: 'hw-23.1-sport',
          note: '8 предложений: каким спортом занимаетесь, где, с каким инвентарём, что умеете и не умеете, что можете и не можете.',
          sample: 'Bavim se plivanjem i bicikliranjem. Plivam u bazenu dva puta nedeljno, a vikendom vozim bicikl u parku. Imam bicikl, kupaći kostim i prostirku za jogu. Znam da plivam dobro, ali ne znam da skijam. Mogu da trčim, ali ne mogu da igram fudbal, jer me boli koleno. Želim da probam klizanje. U mom gradu ima klizalište i teretana.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '23.2',
      title: 'Modalni glagoli',
      ru: 'morati, moći, hteti; глагол trebati в двух значениях и трёх временах',
      goals: [
        'выбрать модальный глагол по смыслу: moram / mogu / hoću',
        'различать trebati обычный (treba mi) и модальный (treba da)',
        'использовать treba da / trebalo je da / trebaće da'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о спорте. Партнёр задаёт: Šta znaš? Šta možeš?',
          items: [{ q: 'Bavim se…' }]
        },
        {
          type: 'text', min: 6, title: 'Modalni glagoli · модальные глаголы',
          html:
            '<ul><li>[[morati]] — быть должным (жёсткое долженствование): [[Moram sutra kod doktora.]]</li>' +
            '<li>[[moći]] — мочь, иметь возможность: [[Mogu da trčim.]]</li>' +
            '<li>[[hteti]], [[želeti]] — хотеть, иметь намерение: [[Hoćemo da idemo na skijanje.]]</li></ul>',
          tables: [
            { caption: 'moći', head: ['jednina', 'množina'], rows: [['ja mogu', 'mi možemo'], ['ti možeš', 'vi možete'], ['on / ona / ono može', 'oni / one / ona mogu']] },
            { caption: 'morati', head: ['jednina', 'množina'], rows: [['ja moram', 'mi moramo'], ['ti moraš', 'vi morate'], ['on / ona / ono mora', 'oni / one / ona moraju']] }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Ubacite odgovarajući modalni glagol · по подсказке',
          note: 'Упражнение из курса. Подсказка в скобках — по-русски.',
          items: [
            'Boli me zub. {Moram} (я должен) sutra kod doktora.', 'Za novogodišnje praznike mi {hoćemo|želimo} (хотим, имеем желание) da idemo na skijanje u Alpe.',
            '{Hoćeš} (хочешь, имеешь намерение) li da napravim pileću supu za ručak?', 'Stefan {može} (может) da popuši kutiju cigareta za jedan dan.',
            'Prestanite da jedete brzu hranu! {Morate} (вы должны) da jedete zdravu hranu.', 'Ujutru {hoću|želim} (хочу, имею желание) da trčim, ali ne {mogu} (могу, не имею возможности) da ustanem iz kreveta.'
          ]
        },
        {
          type: 'text', min: 8, title: 'Glagol trebati · два значения',
          html:
            '<p><b>1. Обычное значение</b> — «нуждаться в чём-либо», изменяется по лицам и числам: [[Novac mi treba za poklon.]] — Деньги мне нужны для подарка. [[Knjige ti trebaju za rad.]] — Книги тебе нужны для работы.</p>' +
            '<p><b>2. Модальное значение</b> — застывшая форма 3-го лица ед. ч. ср. рода, два смысла:</p>' +
            '<ul><li>«нужно, надо, следует»: [[Treba da idemo.]] — Нам нужно идти.</li><li>«должно быть, наверное»: [[Uskoro treba da dođe.]] — Должно быть, он скоро придёт.</li></ul>',
          tables: [
            { caption: 'trebati (modalno) u vremenima', head: ['vreme', 'oblik'], rows: [['Prezent', 'treba da + prezent'], ['Perfekat', 'trebalo je da + prezent'], ['Futur', 'trebaće da + prezent']] }
          ],
          after: '<p><b>Izrazi:</b> [[kako treba]] — как надо; [[Tako vam i treba!]] — Так вам и надо!; [[Još bi nam samo to trebalo!]] — Только этого нам и не хватало!</p>'
        },
        {
          type: 'gap', min: 7, title: 'Koristite glagol trebati u modalnom značenju · три времени',
          note: 'Упражнение из курса. В скобках — глагол и время.',
          items: [
            'Zaboravili smo! {Trebalo je da kupimo} (kupiti, perfekat, mi) više povrća i voća.', 'Ti {treba da ustaneš} (ustati, prezent) u 8 ujutru i ideš u krevet u 22 sata.',
            'Vi {treba da pušite} (pušiti, prezent) manje ako želite da trčite maraton.', 'U ponedeljak {treba da počnem} (početi, ja, prezent) novi život!',
            'Nije me briga. {Trebaće da jedem} (jesti, ja, futur) mnogo nezdrave hrane i pijem alkohol tokom praznika.', 'Nikada nije ustao pre 12. {Treba da mu poklonimo} (pokloniti, mi, prezent) budilnik.'
          ]
        },
        {
          type: 'qa', mode: 'translate', min: 9, title: 'Prevedite rečenice · переведите на сербский',
          note: 'Упражнение из курса. Сначала вслух.',
          items: [
            { q: 'Я очень хочу заниматься теннисом, но это очень дорогой спорт, а у меня нет денег.', a: ['Jako želim da se bavim tenisom, ali to je veoma skup sport, a ja nemam novca.', 'Mnogo želim da se bavim tenisom, ali to je veoma skup sport, a nemam novca.', 'Jako hoću da se bavim tenisom, ali to je veoma skup sport, a nemam novca.'] },
            { q: 'Милица умеет кататься на коньках и лыжах.', a: ['Milica zna da kliza i skija.', 'Milica zna da kliza i da skija.'] },
            { q: 'Для сохранения своего ментального здоровья нужно вовремя ложиться спать.', a: ['Za očuvanje mentalnog zdravlja treba da idete na spavanje na vreme.', 'Za očuvanje svog mentalnog zdravlja treba na vreme ići na spavanje.', 'Za mentalno zdravlje treba da se ide na spavanje na vreme.'] },
            { q: 'Единственный спорт, которым он занимается, это шахматы.', a: ['Jedini sport kojim se on bavi je šah.', 'Jedini sport kojim se bavi je šah.'] },
            { q: 'Должно быть, он бросит курить в следующем месяце.', a: ['Treba da prestane da puši sledećeg meseca.', 'Sledećeg meseca treba da prestane da puši.'] },
            { q: 'Если хочешь похудеть, нужно бегать по выходным и перестать есть фастфуд.', a: ['Ako želiš da smršaš, treba da trčiš vikendom i prestaneš da jedeš brzu hranu.', 'Ako hoćeš da smršaš, treba da trčiš vikendom i da prestaneš da jedeš brzu hranu.'] },
            { q: 'Я могу пробежать марафон, но не хочу.', a: ['Mogu da trčim maraton, ali neću.', 'Mogu da istrčim maraton, ali ne želim.', 'Mogu da trčim maraton, ali ne želim.'] }
          ]
        },
        {
          type: 'conj', min: 5, title: 'Trening · модальные глаголы вслух',
          verbs: ['moci', 'morati', 'hteti', 'znati'], rounds: 8
        },
        {
          type: 'speak', min: 12, title: 'Moram, mogu, hoću · разговор',
          note: 'Три вещи, которые вы должны делать, три — можете, три — хотите, и три с treba da. Партнёр реагирует: Tako ti i treba! / Još bi nam to trebalo!',
          items: [
            { q: 'Šta moraš da radiš svaki dan, a ne voliš?', sample: 'Moram da ustajem u sedam i moram da idem u kancelariju.' },
            { q: 'Šta možeš da radiš dobro? Šta hoćeš da naučiš?', sample: 'Mogu da kuvam dobro. Hoću da naučim da skijam.' },
            { q: 'Šta treba da radiš za zdravlje? Šta je trebalo da uradiš prošle nedelje?', sample: 'Treba da jedem više povrća. Trebalo je da idem kod zubara, ali nisam.' },
            { q: 'Šta ti treba za sreću?', sample: 'Treba mi more, dobra hrana i slobodno vreme.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'moram — должен, mogu — могу, hoću / želim — хочу',
            'Novac mi treba. Knjige ti trebaju. — нуждаться',
            'treba da + prezent; trebalo je da; trebaće da',
            'Tako vam i treba! Još bi nam samo to trebalo!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: модальные глаголы и trebati', est: 8, set: 'B' },
        { type: 'conj', title: 'Тренажёр: moći, morati, hteti, znati', est: 6, verbs: ['moci', 'morati', 'hteti', 'znati'], rounds: 14 },
        {
          type: 'qa', mode: 'transform', title: 'Trebati · поставьте в нужное время', est: 5,
          note: 'Пример: kupiti, mi, perfekat → trebalo je da kupimo.',
          items: [
            { q: 'ići, mi, prezent', a: ['treba da idemo'] }, { q: 'ustati, ti, prezent', a: ['treba da ustaneš'] }, { q: 'kupiti, mi, perfekat', a: ['trebalo je da kupimo'] },
            { q: 'jesti, ja, futur', a: ['trebaće da jedem'] }, { q: 'početi, ja, prezent', a: ['treba da počnem'] }, { q: 'doći, on, prezent', a: ['treba da dođe'] },
            { q: 'vežbati, vi, perfekat', a: ['trebalo je da vežbate'] }, { q: 'spavati, oni, futur', a: ['trebaće da spavaju'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Boli me zub, moram sutra kod doktora.'] }, { a: ['Morate da jedete zdravu hranu.'] }, { a: ['Novac mi treba za poklon.'] },
            { a: ['Trebalo je da kupimo više povrća i voća.'] }, { a: ['U ponedeljak treba da počnem novi život!'] }, { a: ['Još bi nam samo to trebalo!'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я должен завтра к врачу.', a: ['Moram sutra kod doktora.', 'Moram sutra kod lekara.', 'Ja moram sutra kod doktora.'] },
            { q: 'Мы хотим поехать кататься на лыжах в Альпы.', a: ['Hoćemo da idemo na skijanje u Alpe.', 'Želimo da idemo na skijanje u Alpe.'] },
            { q: 'Хочешь, сделаю куриный суп на обед?', a: ['Hoćeš li da napravim pileću supu za ručak?'] },
            { q: 'Утром хочу бегать, но не могу встать с кровати.', a: ['Ujutru hoću da trčim, ali ne mogu da ustanem iz kreveta.', 'Ujutru želim da trčim, ali ne mogu da ustanem iz kreveta.'] },
            { q: 'Тебе нужно вставать в 8 утра.', a: ['Treba da ustaneš u 8 ujutru.', 'Ti treba da ustaneš u 8 ujutru.', 'Treba da ustaneš u osam ujutru.'] },
            { q: 'Нужно было купить больше овощей.', a: ['Trebalo je da kupimo više povrća.', 'Trebalo je kupiti više povrća.'] },
            { q: 'Нам нужно подарить ему будильник.', a: ['Treba da mu poklonimo budilnik.'] },
            { q: 'Так вам и надо!', a: ['Tako vam i treba!'] }
          ]
        },
        {
          type: 'write', title: 'Novi život od ponedeljka · планы с модальными глаголами', est: 7, key: 'hw-23.2-novi-zivot',
          note: '8 предложений: что вы должны, можете, хотите и что вам нужно сделать для здоровья с понедельника. Минимум по два moram, mogu, hoću, treba da.',
          sample: 'Od ponedeljka počinjem novi život! Moram da ustajem u sedam i moram da trčim ujutru. Mogu da idem u teretanu tri puta nedeljno. Hoću da naučim da plivam bolje. Treba da jedem više povrća i manje brze hrane. Trebalo je da počnem prošle godine, ali nisam mogao. Ne smem da pušim. Trebaće da spavam osam sati.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '23.3',
      title: 'Zdrav način života',
      ru: 'Здоровые и вредные привычки, текст с заголовками, разговор о привычках',
      goals: [
        'назвать составляющие здорового образа жизни',
        'прочитать четыре абзаца и подобрать заголовки',
        'рассказать о своих привычках и ответить на пять вопросов курса'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст «Novi život». Партнёр говорит, во что верит, а во что нет: Verujem! / Ne verujem!',
          items: [{ q: 'Od ponedeljka…' }]
        },
        {
          type: 'text', min: 6, title: 'Zdrav način života · здоровый образ жизни',
          img: 'img/l23_zdrav.png',
          html: '<ul><li>[[jesti zdravu hranu]] — есть здоровую еду</li><li>[[više kretanja]] — больше движения</li><li>[[manje stresa]] — меньше стресса</li><li>[[odmoriti se na vreme]] — отдыхать вовремя</li>' +
            '<li>[[odbiti loše navike]] — отказаться от вредных привычек</li><li>[[pravila lične higijene]] — правила личной гигиены</li><li>[[vežbanje]] — тренировки</li><li>[[ojačati imunitet]] — укрепить иммунитет</li></ul>'
        },
        {
          type: 'gap', bank: true, listen: true, min: 10, title: 'Pročitajte tekst i izaberite naslov · заголовки',
          note: 'Упражнение из курса: четыре абзаца, четыре заголовка. Прослушайте и прочитайте вслух, потом подберите.',
          items: [
            '<b>{Jesti zdravu hranu na vreme}</b>. Doručak je najvažniji obrok u danu i jedna od najboljih zdravih navika koje možemo usvojiti. Doručak se može sastojati od žitarica, voća, sendviča, važno da je dovoljan za dobar početak dana!',
            '<b>{Vežbanje}</b>. Vežbanje minimalno dva puta je navika koju bi svako trebao uzeti u obzir kako bi se održala osnovna kondicija, uspravno držanje i zdravo funkcioniranje organizma.',
            '<b>{Redovno se smejte}</b>. Istraživanja pokazuju da smeh može smanjiti razinu stresa i ojačati imunitet. Hormon endorfina koji lučimo za vreme smeha pozitivno utječe na anksioznost, stres i depresiju.',
            '<b>{Kod lekara}</b>. Koliko god radili na sebi i pazili se, važno je provoditi redovite sistematske preglede i kontrolirati se. Redovita poseta lekara ili zubara će omogućiti miran san i pravovremenu reakciju.'
          ]
        },
        {
          type: 'match', min: 5, title: 'Loše navike · найдите определение',
          note: 'Упражнение из курса: соедините привычку с описанием и переведите.',
          pairs: [
            ['pušenje', 'udisanje dima od cigareta'], ['piti alkohol', 'pijenje pića nakon čega ne bi trebalo da vozite'], ['jesti brzu hranu', 'jedete hamburgere i pijete sodu u Mekdonaldsu'],
            ['pratiti društvene mreže', 'prelistavanje Telegrama (Fejsbuka, Instagrama)'], ['ići na spavanje kasno (posle ponoći)', 'biti dugo budan i malo spavati']
          ]
        },
        {
          type: 'gap', bank: true, min: 6, title: 'Izaberite tačnu reč · спорт и инвентарь в падежах',
          note: 'Упражнение из курса.',
          items: [
            'Maja se bavi {klizanjem}, ona je kupila nove lepe klizaljke.', 'Svaku subotu Mile ide na košarkaški {teren}, bavi se košarkom.', 'Ja idem u teretanu tri puta nedeljno, bavim se jogom, uzimam {prostirku} tamo.',
            'Kao poklon kupila sam tebi {kupaći kostim}, jer ti voliš plivanje.', 'Svaku godinu porodica Pavlović ide na Kopaonik, to je najveće {skijalište} u Srbiji.', 'Goran i njegovo društvo danima igraju {stoni tenis}, prekršili su već 7 teniskih reketa!',
            'Preselila sam se na Novi Beograd zbog toga što volim {bicikliranje}, a ovde ima mnogo biciklističkih staza.', 'Moja žena ne ide u teretanu, kupila je prostirku, {tegove} i kaže da će vežbati kod kuće.', 'Deca su igrala fudbal i pogodila {loptom} u prozor učiteljice!'
          ]
        },
        {
          type: 'tf', min: 4, title: 'Tačno ili netačno? · по тексту',
          items: [
            { q: 'Doručak je najvažniji obrok u danu.', a: true }, { q: 'Treba vežbati minimalno jednom nedeljno.', a: false, why: 'Minimalno dva puta.' },
            { q: 'Smeh može ojačati imunitet.', a: true }, { q: 'Ako radite na sebi, ne treba ići kod lekara.', a: false, why: 'Važno je provoditi redovne preglede.' },
            { q: 'Endorfin pozitivno utiče na stres i depresiju.', a: true }
          ]
        },
        {
          type: 'speak', min: 20, title: 'Navike · пять вопросов из курса',
          note: 'Ответьте развёрнуто, используя модальные глаголы, потенциал и treba da. В конце — «21 дан»: составьте план новой привычки на три недели.',
          items: [
            { q: 'Kakve dobre navike imate?', sample: 'Doručkujem svaki dan, trčim tri puta nedeljno i idem na spavanje pre ponoći.' },
            { q: 'Kakve loše navike imate?', sample: 'Pratim društvene mreže previše i ponekad jedem brzu hranu.' },
            { q: 'Koju novu naviku biste želeli da steknete?', sample: 'Želela bih da steknem naviku da čitam svako veče.' },
            { q: 'Koje loše navike biste voleli da se oslobodite?', sample: 'Voleo bih da se oslobodim navike da idem na spavanje kasno.' },
            { q: 'Verujete li da se bilo koja navika može steći za 21 dan?', sample: 'Mislim da je moguće, ali treba da se potrudimo svaki dan.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'zdrava hrana, više kretanja, manje stresa, odmor na vreme, bez loših navika',
            'dobra navika — loša navika; steći naviku; osloboditi se navike',
            'Doručak je najvažniji obrok. Redovno se smejte! Idite kod lekara.',
            'pušenje, alkohol, brza hrana, društvene mreže, kasno spavanje'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: здоровый образ жизни', est: 8, set: 'C' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант по тексту', est: 5,
          items: [
            { a: ['Doručak je najvažniji obrok u danu.'] }, { a: ['Vežbanje minimalno dva puta nedeljno je dobra navika.'] }, { a: ['Smeh može smanjiti stres i ojačati imunitet.'] },
            { a: ['Važno je ići na redovne sistematske preglede.'] }, { a: ['Pušenje je udisanje dima od cigareta.'] }, { a: ['Koju novu naviku biste želeli da steknete?'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Завтрак — самый важный приём пищи.', a: ['Doručak je najvažniji obrok u danu.', 'Doručak je najvažniji obrok.'] },
            { q: 'Смех может укрепить иммунитет.', a: ['Smeh može da ojača imunitet.', 'Smeh može ojačati imunitet.'] },
            { q: 'Нужно отказаться от вредных привычек.', a: ['Treba odbiti loše navike.', 'Treba da odbijemo loše navike.'] },
            { q: 'Я слишком много сижу в соцсетях.', a: ['Previše pratim društvene mreže.', 'Pratim društvene mreže previše.'] },
            { q: 'Я бы хотел избавиться от привычки поздно ложиться.', a: ['Voleo bih da se oslobodim navike da idem na spavanje kasno.', 'Hteo bih da se oslobodim navike da idem na spavanje kasno.'] },
            { q: 'Верите ли вы, что привычку можно приобрести за 21 день?', a: ['Verujete li da se navika može steći za 21 dan?', 'Da li verujete da se navika može steći za 21 dan?'] },
            { q: 'Майя занимается катанием на коньках.', a: ['Maja se bavi klizanjem.'] },
            { q: 'Копаоник — крупнейший горнолыжный курорт в Сербии.', a: ['Kopaonik je najveće skijalište u Srbiji.'] }
          ]
        },
        {
          type: 'write', title: 'Moje navike · сочинение + запись', est: 12, key: 'hw-23.3-navike', record: true,
          note: 'Письменно ответьте на пять вопросов занятия (по два предложения на каждый) и добавьте план новой привычки на 21 день с treba da / moram / mogu. Запишите чтение вслух.',
          sample: 'Imam nekoliko dobrih navika: doručkujem svaki dan i trčim tri puta nedeljno. Ali imam i loše navike: pratim društvene mreže previše i idem na spavanje posle ponoći. Želeo bih da steknem naviku da čitam svako veče. Voleo bih da se oslobodim telefona pre spavanja. Verujem da se navika može steći za 21 dan, ako se potrudimo. Moj plan: od sutra moram da isključim telefon u deset. Mogu da čitam pola sata. Treba da idem na spavanje u jedanaest. Za tri nedelje biću zdraviji!'
        }
      ]
    }
  ]
});
