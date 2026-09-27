// Lekcija 26 - Turizam. Three 60-minute sessions: Serbia's destinations + Kopaonik, bus station dialogue + travel words, Serbian food and restaurant phrases.
COURSE.register({
  n: 26,
  title: 'Turizam',
  ru: 'Путешествие по Сербии: Копаоник, автовокзал и билеты, сербские специалитеты и фразы в ресторане',

  vocab: [
    { id: 'destinacija', sr: 'destinacija, odredište', ru: 'место назначения', set: 'A' },
    { id: 'skijaski-centar', sr: 'skijaški centar', ru: 'горнолыжный курорт', set: 'A' },
    { id: 'staza', sr: 'staza', ru: 'тропа, трасса', set: 'A' },
    { id: 'namena', sr: 'namena', ru: 'предназначение', set: 'A' },
    { id: 'profesionalni-skijas', sr: 'profesionalni skijaš', ru: 'профессиональный лыжник', set: 'A' },
    { id: 'amater', sr: 'amater', ru: 'любитель', set: 'A' },
    { id: 'uzivati', sr: 'uživati u nečemu — uživam u prirodi', ru: 'наслаждаться чем-то', set: 'A' },
    { id: 'na-otvorenom', sr: 'na otvorenom', ru: 'на открытом воздухе', set: 'A' },
    { id: 'ovde-se-nalazi', sr: 'ovde se nalazi', ru: 'здесь находится', set: 'A' },
    { id: 'lokalitet', sr: 'lokalitet', ru: 'местонахождение', set: 'A' },
    { id: 'nadmorska-visina', sr: 'nadmorska visina', ru: 'высота над уровнем моря', set: 'A' },
    { id: 'vrh', sr: 'vrh, planina, vodopad', ru: 'вершина, гора, водопад', set: 'A' },
    { id: 'suncan-dan', sr: 'sunčan dan, vedro', ru: 'солнечный день, ясно', set: 'A' },
    { id: 'planinariti', sr: 'planinariti, ja planinarim', ru: 'ходить в горы', set: 'A' },
    { id: 'smestaj', sr: 'smeštaj', ru: 'жильё (на время поездки)', set: 'A' },
    { id: 'jug', sr: 'na jug — na jugu; sever, istok, zapad', ru: 'на юг — на юге; север, восток, запад', set: 'A' },
    { id: 'sto-juznije', sr: 'Što južnije, to tužnije.', ru: 'Чем южнее, тем грустнее (поговорка).', set: 'A' },
    { id: 'susedne-zemlje', sr: 'susedne zemlje', ru: 'соседние страны', set: 'A' },
    { id: 'reseno', sr: 'Rešeno!', ru: 'Решено!', set: 'A' },

    { id: 'autobuska-stanica', sr: 'autobuska stanica', ru: 'автовокзал', set: 'B' },
    { id: 'zeleznicka-stanica', sr: 'železnička stanica', ru: 'ж/д вокзал', set: 'B' },
    { id: 'aerodrom', sr: 'aerodrom, luka', ru: 'аэропорт, порт', set: 'B' },
    { id: 'karta26', sr: 'karta u jednom smeru — povratna karta', ru: 'билет в одну сторону — туда-обратно', set: 'B' },
    { id: 'zeton', sr: 'žeton', ru: 'жетон (для выхода на перрон)', set: 'B' },
    { id: 'kod-prozora', sr: 'kod prozora — u hodniku', ru: 'у окна — в проходе', set: 'B' },
    { id: 'kofer', sr: 'kofer, prtljag, ručni prtljag', ru: 'чемодан, багаж, ручная кладь', set: 'B' },
    { id: 'sediste', sr: 'sedište', ru: 'место, сиденье', set: 'B' },
    { id: 'peron', sr: 'peron', ru: 'перрон', set: 'B' },
    { id: 'termin', sr: 'termin', ru: 'время отправления, окно времени', set: 'B' },
    { id: 'dolasci', sr: 'dolasci — odlasci', ru: 'прибытия — отправления', set: 'B' },
    { id: 'let', sr: 'avion, let, bording karta', ru: 'самолёт, рейс, посадочный талон', set: 'B' },
    { id: 'kuset', sr: 'kušet kola, klima', ru: 'купе, кондиционер', set: 'B' },
    { id: 'rezervisati26', sr: 'rezervisati, ja rezervišem', ru: 'резервировать', set: 'B' },
    { id: 'putovati26', sr: 'putovati, ja putujem', ru: 'путешествовать', set: 'B' },
    { id: 'odmor26', sr: 'odmor, godišnji odmor, izlet', ru: 'отдых, отпуск, экскурсия', set: 'B' },
    { id: 'salter', sr: 'šalter, kasir', ru: 'окошко кассы, кассир', set: 'B' },
    { id: 'pojma-nemam', sr: 'Pojma nemam.', ru: 'Понятия не имею.', set: 'B' },
    { id: 'zadrzavati-red', sr: 'Nemojte zadržavati red!', ru: 'Не задерживайте очередь!', set: 'B' },
    { id: 'kes-kartica', sr: 'Keš ili kartica?', ru: 'Наличные или карта?', set: 'B' },
    { id: 'ukupno', sr: 'ukupno', ru: 'итого, в целом', set: 'B' },

    { id: 'kulen', sr: 'kulen', ru: 'кулен (острая колбаса из Воеводины)', set: 'C' },
    { id: 'cilim', sr: 'ćilim', ru: 'килим, тканый ковёр', set: 'C' },
    { id: 'prsut', sr: 'pršut', ru: 'пршут, вяленое мясо', set: 'C' },
    { id: 'rakija26', sr: 'rakija, šljivovica', ru: 'ракия, сливовица', set: 'C' },
    { id: 'ajvar', sr: 'ajvar', ru: 'айвар (паста из печёного перца)', set: 'C' },
    { id: 'kajmak', sr: 'kajmak', ru: 'каймак', set: 'C' },
    { id: 'vranac', sr: 'vino Vranac', ru: 'красное вино Вранац', set: 'C' },
    { id: 'kackavalj', sr: 'kačkavalj', ru: 'качкаваль, твёрдый сыр', set: 'C' },
    { id: 'gibanica', sr: 'gibanica', ru: 'гибаница (пирог с яйцами, йогуртом и сыром)', set: 'C' },
    { id: 'pljeskavica', sr: 'pljeskavica, ćevapi', ru: 'плескавица, чевапчичи', set: 'C' },
    { id: 'corba', sr: 'pileća / riblja / teleća čorba', ru: 'куриный / рыбный / телячий суп', set: 'C' },
    { id: 'sarma', sr: 'sarma', ru: 'сарма (голубцы)', set: 'C' },
    { id: 'karadjordjeva', sr: 'karađorđeva šnicla', ru: 'карагеоргиев шницель', set: 'C' },
    { id: 'burek', sr: 'burek, proja, lepinja, kifla', ru: 'бурек, проя, лепёшка, булочка', set: 'C' },
    { id: 'pasulj', sr: 'pasulj, kačamak', ru: 'фасоль, качамак', set: 'C' },
    { id: 'moskva-snit', sr: 'Moskva šnit, palačinke', ru: 'торт Москва шнит, блинчики', set: 'C' },
    { id: 'pohovani-sir', sr: 'pohovani sir, urnebes', ru: 'сыр в панировке, урнебес', set: 'C' },
    { id: 'pastrmka', sr: 'pastrmka', ru: 'речная форель', set: 'C' },
    { id: 'kafana', sr: 'kafana, kafić, pekara, restoran', ru: 'кафана, кафе, пекарня, ресторан', set: 'C' },
    { id: 'kisela-voda', sr: 'kisela voda', ru: 'минеральная вода', set: 'C' },
    { id: 'za-poneti', sr: 'za poneti', ru: 'с собой', set: 'C' },
    { id: 'taman', sr: 'taman', ru: 'как раз', set: 'C' },
    { id: 'jelo', sr: 'jelo, jelovnik, račun', ru: 'блюдо, меню, счёт', set: 'C' },
    { id: 'preporuciti', sr: 'Šta preporučujete?', ru: 'Что посоветуете?', set: 'C' }
  ],

  verbs: {
    rezervisati: { inf: 'rezervisati', ru: 'резервировать', pos: { ja: 'rezervišem', ti: 'rezervišeš', on: 'rezerviše', mi: 'rezervišemo', vi: 'rezervišete', oni: 'rezervišu' }, neg: { ja: 'ne rezervišem', ti: 'ne rezervišeš', on: 'ne rezerviše', mi: 'ne rezervišemo', vi: 'ne rezervišete', oni: 'ne rezervišu' }, l: { m: 'rezervisao', f: 'rezervisala', n: 'rezervisalo', mpl: 'rezervisali', fpl: 'rezervisale' } },
    putovati: { inf: 'putovati', ru: 'путешествовать', pos: { ja: 'putujem', ti: 'putuješ', on: 'putuje', mi: 'putujemo', vi: 'putujete', oni: 'putuju' }, neg: { ja: 'ne putujem', ti: 'ne putuješ', on: 'ne putuje', mi: 'ne putujemo', vi: 'ne putujete', oni: 'ne putuju' }, l: { m: 'putovao', f: 'putovala', n: 'putovalo', mpl: 'putovali', fpl: 'putovale' } },
    kupovati: { inf: 'kupovati', ru: 'покупать', pos: { ja: 'kupujem', ti: 'kupuješ', on: 'kupuje', mi: 'kupujemo', vi: 'kupujete', oni: 'kupuju' }, neg: { ja: 'ne kupujem', ti: 'ne kupuješ', on: 'ne kupuje', mi: 'ne kupujemo', vi: 'ne kupujete', oni: 'ne kupuju' }, l: { m: 'kupovao', f: 'kupovala', n: 'kupovalo', mpl: 'kupovali', fpl: 'kupovale' } },
    planinariti: { inf: 'planinariti', ru: 'ходить в горы', pos: { ja: 'planinarim', ti: 'planinariš', on: 'planinari', mi: 'planinarimo', vi: 'planinarite', oni: 'planinare' }, neg: { ja: 'ne planinarim', ti: 'ne planinariš', on: 'ne planinari', mi: 'ne planinarimo', vi: 'ne planinarite', oni: 'ne planinare' }, l: { m: 'planinario', f: 'planinarila', n: 'planinarilo', mpl: 'planinarili', fpl: 'planinarile' } },
    posetiti: { inf: 'posetiti', ru: 'посетить', l: { m: 'posetio', f: 'posetila', n: 'posetilo', mpl: 'posetili', fpl: 'posetile' } },
    spakovati: { inf: 'spakovati', ru: 'упаковать', l: { m: 'spakovao', f: 'spakovala', n: 'spakovalo', mpl: 'spakovali', fpl: 'spakovale' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '26.1',
      title: 'Srbija — priroda i društvo',
      ru: 'Карта Сербии, Ксения планирует поездку, Копаоник',
      goals: [
        'назвать главные туристические места Сербии и рассказать, где были',
        'вставить формы глаголов в рассказ Ксении: перфект, футур, отрицание',
        'прочитать текст о Копаонике и проверить утверждения'
      ],
      blocks: [
        {
          type: 'text', min: 6, title: 'Karta Srbije · лучшие направления',
          note: 'Карта из курса. Найдите каждое место и произнесите название.',
          img: 'img/l26_mapa.png',
          html: '<ul><li>Sever: [[Subotica]], [[Sombor]], [[Novi Sad]], [[Sremska Mitrovica]], [[Kikinda]], [[Vršac]]</li>' +
            '<li>Centar: [[Beograd]], [[Šumadijske njive]], [[Studenica]], [[Vinarije Aleksandrovca]], [[Rajačke pimnice]]</li>' +
            '<li>Istok: [[Đerdapska klisura]], [[Niš]], [[Pirotski ćilim]], [[Leskovački ajvar]]</li>' +
            '<li>Zapad i jug: [[Tara]], [[Šarganska osmica]], [[Novi Pazar]], [[Peć]], [[Šar-planina]], [[Kopaonik]]</li></ul>' +
            '<p>Strane sveta: [[sever]] — север, [[jug]] — юг, [[istok]] — восток, [[zapad]] — запад. [[Idem na jug.]] — [[Živim na jugu.]]</p>'
        },
        {
          type: 'speak', min: 6, title: 'Pitanja · вопросы из курса',
          items: [
            { q: 'Šta ste posetili u Srbiji?', sample: 'Posetio sam Novi Sad i Petrovaradinsku tvrđavu. Bila sam na Tari.' },
            { q: 'Da li ste putovali u susedne zemlje?', sample: 'Da, putovali smo u Crnu Goru i Bosnu. U Mađarsku još nismo.' },
            { q: 'Gde biste otišli sledeći put?', sample: 'Sledeći put bih otišao na Đerdap, a ona bi otišla u Niš.' }
          ]
        },
        {
          type: 'gap', min: 10, title: 'Ksenija putuje po Srbiji · впишите формы',
          note: 'Упражнение из курса. Ксения — наша спутница, пишет о себе. В скобках подсказка. Порядок «sam + причастие» или «причастие + sam» принимается оба.',
          items: [
            'Hmm, već dva meseca {živim} <i>(živeti, ja)</i> u Beogradu, ali nigde osim Beograda {nisam bila} <i>(biti, perfekat, negacija)</i>.',
            'Mislim, {putovaću|ću putovati} <i>(putovati, ja, futur 1)</i> na {jug} <i>(jug)</i>. Srbi kažu „što južnije, to tužnije“, ali ne verujem to.',
            'Na {jugu} <i>(jug)</i> ima mnogo prelepih gradova — Pirot, Niš, Leskovac, Vranje…',
            'Ipak prvo želim da vidim planine! Rešeno, idem do {Kopaonika} <i>(Kopaonik)</i>, odavno {nisam planinarila} <i>(planinariti, perfekat, negacija)</i>.',
            '{Treba} <i>(trebati)</i> da kupim karte za autobus, da {rezervišem} <i>(rezervisati, ja)</i> smeštaj i da pozovem svoju drugaricu Lenu.',
            '{Biće} <i>(biti, futur 1)</i> super! Samo da pogledam, šta sve ima tamo.'
          ]
        },
        {
          type: 'match', min: 6, title: 'Spojite reči · слова о Копаонике',
          note: 'Упражнение из курса.',
          pairs: [
            ['skijaški centar', 'горнолыжный курорт'], ['staza', 'тропа, трасса'], ['namena', 'предназначение'], ['profesionalni skijaš', 'профессиональный лыжник'], ['amater', 'любитель'],
            ['uživati u nečemu', 'наслаждаться чем-то'], ['na otvorenom', 'на открытом воздухе'], ['ovde se nalazi', 'здесь находится'], ['lokalitet', 'местонахождение'], ['nadmorska visina', 'высота над уровнем моря']
          ]
        },
        {
          type: 'text', min: 8, title: 'Šta je Kopaonik? · текст вместо видео',
          note: 'В курсе здесь фрагмент видео «Top 10 mesta u Srbiji» (1:57–3:15), его можно посмотреть дома на YouTube. На занятии читаем текст: сначала прослушать, потом прочитать вслух по абзацу.',
          html: '<p>[[Kopaonik je najveći skijaški centar u Srbiji i jedan od najpoznatijih u istočnoj Evropi. Nalazi se na jugu Srbije. Najviši vrh je Pančićev vrh, 2017 metara nadmorske visine.]]</p>' +
            '<p>[[Kopaonik zovu „Sunčana planina“, jer ima oko 200 sunčanih dana godišnje. Obično je vedro, ali sneg pada često: leži od novembra do maja. Sezona skijanja traje od decembra do aprila.]]</p>' +
            '<p>[[Skijaški centar ima oko 60 kilometara staza. Namena staza je različita: neke su za profesionalne skijaše, a neke za amatere. Leti ljudi ovde planinare, voze bicikl i uživaju u prirodi na otvorenom.]]</p>' +
            '<p>[[Na lokalitetu Nebeske stolice nalaze se ostaci crkve iz petog veka. U nacionalnom parku žive srne, lisice i divlje svinje. Vodopad Jelovarnik je najviši vodopad u Srbiji, visok je 71 metar.]]</p>'
        },
        {
          type: 'tf', min: 6, title: 'Izaberite istinite tvrdnje · утверждения из курса',
          note: 'Те же утверждения, что в курсе; проверяем по тексту.',
          items: [
            { q: 'Kopaonik je poznat kao najbolje skijalište u istočnoj Evropi.', a: false, why: 'Jedan od najpoznatijih, ne najbolji.' },
            { q: 'Obično na Kopaoniku je veoma vedro.', a: true },
            { q: 'Ima čak 200 sunčanih dana.', a: true },
            { q: 'Na Kopaoniku retko ide sneg.', a: false, why: 'Sneg pada često, leži od novembra do maja.' },
            { q: 'Sezona skijanja traje od novembra do marta.', a: false, why: 'Od decembra do aprila.' },
            { q: 'Skijaški centar ima više od 100 kilometara staza.', a: false, why: 'Oko 60 kilometara.' },
            { q: 'Na Nebeskim stolicama žive medvedi.', a: false, why: 'Tamo su ostaci crkve iz petog veka.' },
            { q: 'Vodopad Jelovarnik je najviši vodopad u zemlji.', a: true }
          ]
        },
        {
          type: 'speak', min: 12, title: 'Moj plan putovanja · спланируйте поездку',
          note: 'По образцу Ксении: каждый планирует поездку на выходные по Сербии. Куда, как, где жить, что делать. Партнёр задаёт вопросы: Kad? Kako putuješ? Gde ćeš spavati?',
          items: [
            { q: 'Kuda ideš i zašto?', sample: 'Idem na Taru, jer volim planine i želim da vidim reku Drinu.' },
            { q: 'Kako putuješ i gde ćeš spavati?', sample: 'Putovaću autobusom. Rezervisaću smeštaj u malom hotelu.' },
            { q: 'Šta ćeš raditi tamo?', sample: 'Planinariću, uživaću u prirodi na otvorenom i probaću lokalnu hranu.' },
            { q: 'Koga ćeš pozvati?', sample: 'Pozvaću drugaricu. Biće super!' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'sever — jug — istok — zapad; na jug — na jugu',
            'Kopaonik: skijaški centar, staza, nadmorska visina, sunčani dani, vodopad',
            'Odavno nisam planinarila. Treba da kupim karte. Biće super!',
            'Gde biste otišli sledeći put? — Otišao bih na Đerdap.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: природа и туризм', est: 8, set: 'A' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: Ксения и Копаоник', est: 6,
          items: [
            { a: ['Već dva meseca živim u Beogradu.'] }, { a: ['Odavno nisam planinarila.'] }, { a: ['Treba da rezervišem smeštaj.'] },
            { a: ['Kopaonik je najveći skijaški centar u Srbiji.'] }, { a: ['Ima oko dvesta sunčanih dana godišnje.'] }, { a: ['Vodopad Jelovarnik je najviši vodopad u Srbiji.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Что вы посетили в Сербии?', a: ['Šta ste posetili u Srbiji?'] },
            { q: 'Мы ещё не путешествовали в соседние страны.', a: ['Još nismo putovali u susedne zemlje.', 'Nismo još putovali u susedne zemlje.'] },
            { q: 'Я поеду на юг.', a: ['Putovaću na jug.', 'Ću putovati na jug.', 'Ići ću na jug.', 'Idem na jug.'] },
            { q: 'На юге много красивых городов.', a: ['Na jugu ima mnogo lepih gradova.', 'Na jugu ima mnogo prelepih gradova.'] },
            { q: 'Нужно купить билеты на автобус.', a: ['Treba kupiti karte za autobus.', 'Treba da kupimo karte za autobus.', 'Treba da kupim karte za autobus.'] },
            { q: 'Летом люди здесь ходят в горы.', a: ['Leti ljudi ovde planinare.', 'Ljudi ovde leti planinare.'] },
            { q: 'Куда бы ты поехал в следующий раз?', a: ['Gde bi otišao sledeći put?', 'Kuda bi otišao sledeći put?', 'Gde bi putovao sledeći put?'] }
          ]
        },
        {
          type: 'write', title: 'Moje omiljeno mesto u Srbiji · текст + запись', est: 9, key: 'hw-26.1-mesto', record: true,
          note: '8 предложений о месте в Сербии, где вы были или куда хотите поехать: где находится, как добраться, что там есть, почему нравится. Запишите чтение вслух.',
          sample: 'Moje omiljeno mesto u Srbiji je Novi Sad. Nalazi se na severu, na Dunavu. Od Beograda se putuje sat vremena vozom. Tamo je Petrovaradinska tvrđava sa koje se vidi ceo grad. U centru ima mnogo kafića i pekara. Bila sam tamo prošle godine sa drugaricom. Sledeći put bih otišla na festival Exit. Volim ovaj grad, jer je miran i lep.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '26.2',
      title: 'Poštovani putnici',
      ru: 'Автовокзал, покупка билетов, диалог Ксении и Лены с кассиром',
      goals: [
        'выучить слова вокзала и аэропорта: karta u jednom smeru, povratna, žeton, peron, prtljag',
        'дополнить диалог у кассы и прочитать его по ролям',
        'купить билет в ролевой игре'
      ],
      blocks: [
        {
          type: 'text', min: 8, title: 'Autobuska stanica · слова из курса',
          img: 'img/l26_stanica.png',
          html: '<ul><li>[[kod prozora]] — у окна, [[u hodniku]] — в проходе, [[sedište]] — место</li>' +
            '<li>[[žeton]] — жетон для выхода на перрон, [[peron]] — перрон, [[termin]] — время отправления</li>' +
            '<li>[[karta u jednom smeru]] — билет в одну сторону, [[povratna karta]] — туда-обратно</li>' +
            '<li>[[kofer]] — чемодан, [[prtljag]] — багаж, [[ručni prtljag]] — ручная кладь</li>' +
            '<li>[[autobus]] / [[bus]], [[voz]], [[avion]], [[let]], [[kola]] — автобус, поезд, самолёт, рейс, машина</li></ul>',
          tables: [
            { caption: 'Gde?', head: ['mesto', 'перевод', 'šta radimo'], rows: [
              ['autobuska stanica', 'автовокзал', 'kupujemo kartu na šalteru, uzimamo žeton'],
              ['železnička stanica', 'ж/д вокзал', 'čekamo voz na peronu, biramo kušet kola'],
              ['aerodrom', 'аэропорт', 'dobijamo bording kartu, predajemo prtljag'],
              ['luka', 'порт', 'čekamo brod, gledamo dolaske i odlaske']
            ] }
          ]
        },
        {
          type: 'text', min: 3, title: 'Priča se nastavlja · история продолжается',
          html: '<p>[[Ksenija je spakovala kofer i torbu. Dalje devojka je otišla na autobusku stanicu kod Zelenog venca da se nađe sa Lenom. Posle drugarice su prišli šalteru da kupe karte.]]</p>'
        },
        {
          type: 'gap', bank: true, min: 10, title: 'Na šalteru · выберите верный вариант',
          note: 'Диалог из курса. В каждом пропуске выберите слово из списка.',
          items: [
            'Ksenija: Zdravo! Želimo da kupimo {karte} do Kopaonika. — Kasir: Dobar dan! Imamo karte samo do Sunčanih vrhova.',
            'Lena: {Sunčani vrhovi}? Šta je to? — Kasir: Turistički centar. {Koje} tačno naselje vam treba?',
            'Ksenija: {Rezervisala} sam apartman u Brzeću. Da li je daleko? — Kasir: Da li sam ja {turistički vodič}, gospođo? Pojma nemam, nikad {nisam} bio tamo.',
            'Lena: Mogu da pogledam… to je 22 minute ako idemo {kolima}. — Ksenija: Je li tamo ima neki lokalni bus ili taksi?',
            'Lena: Sigurno ima taksi, o busu ne znam ništa. Možemo da idemo {peške}! — Kasir: Devojke, {nemojte} zadržavati red! {Kupujete} karte ili mrš!',
            'Ksenija: Polako, gospodine! Kupujemo dve karte do Sunčanih vrhova danas u 16:05. — Lena: I dva žetona! — Kasir: U jednom smeru ili {povratna}?',
            'Ksenija: U jednom smeru, molim vas. — Kasir: Ukupno karte i žetoni {koštaju} 3055 dinara. Keš ili kartica? — Lena: Keš, izvolite. Hvala!'
          ]
        },
        {
          type: 'dialog', min: 7, title: 'Pročitajte po ulogama · диалог целиком',
          note: 'Один читает Ксению и Лену, второй кассира. Потом поменяйтесь.',
          lines: [
            { who: 'Ksenija', sr: 'Zdravo! Želimo da kupimo karte do Kopaonika.', ru: 'Здравствуйте! Мы хотим купить билеты до Копаоника.' },
            { who: 'Kasir', sr: 'Dobar dan! Imamo karte samo do Sunčanih vrhova.', ru: 'Добрый день! У нас билеты только до Сунчани врхови.' },
            { who: 'Lena', sr: 'Sunčani vrhovi? Šta je to?', ru: 'Сунчани врхови? Что это?' },
            { who: 'Kasir', sr: 'Turistički centar. Koje tačno naselje vam treba?', ru: 'Туристический центр. Какой именно посёлок вам нужен?' },
            { who: 'Ksenija', sr: 'Rezervisala sam apartman u Brzeću. Da li je daleko?', ru: 'Я забронировала апартаменты в Брзече. Это далеко?' },
            { who: 'Kasir', sr: 'Da li sam ja turistički vodič, gospođo? Pojma nemam, nikad nisam bio tamo.', ru: 'Я что, гид, госпожа? Понятия не имею, никогда там не был.' },
            { who: 'Lena', sr: 'Mogu da pogledam… to je 22 minute ako idemo kolima.', ru: 'Могу посмотреть… это 22 минуты, если ехать на машине.' },
            { who: 'Ksenija', sr: 'Je li tamo ima neki lokalni bus ili taksi?', ru: 'Там есть какой-нибудь местный автобус или такси?' },
            { who: 'Lena', sr: 'Sigurno ima taksi, o busu ne znam ništa. Možemo da idemo peške!', ru: 'Такси точно есть, про автобус ничего не знаю. Можем пойти пешком!' },
            { who: 'Kasir', sr: 'Devojke, nemojte zadržavati red! Kupujete karte ili mrš!', ru: 'Девушки, не задерживайте очередь! Покупаете билеты или прочь!' },
            { who: 'Ksenija', sr: 'Polako, gospodine! Kupujemo dve karte do Sunčanih vrhova danas u 16:05.', ru: 'Спокойно, господин! Покупаем два билета до Сунчани врхови сегодня в 16:05.' },
            { who: 'Lena', sr: 'I dva žetona!', ru: 'И два жетона!' },
            { who: 'Kasir', sr: 'U jednom smeru ili povratna?', ru: 'В одну сторону или туда-обратно?' },
            { who: 'Ksenija', sr: 'U jednom smeru, molim vas.', ru: 'В одну сторону, пожалуйста.' },
            { who: 'Kasir', sr: 'Ukupno karte i žetoni koštaju 3055 dinara. Keš ili kartica?', ru: 'Итого билеты и жетоны стоят 3055 динаров. Наличные или карта?' },
            { who: 'Lena', sr: 'Keš, izvolite. Hvala!', ru: 'Наличные, пожалуйста. Спасибо!' }
          ]
        },
        {
          type: 'conj', min: 5, title: 'Trening · rezervisati, putovati, kupovati',
          verbs: ['rezervisati', 'putovati', 'kupovati'], rounds: 8
        },
        {
          type: 'speak', min: 8, title: 'Avionom · что нужно сделать, если лететь самолётом',
          note: 'В курсе здесь видео Air Serbia о покупке билета онлайн (можно посмотреть дома). Отвечайте в потенциале: Šta bi morale da rade Lena i Ksenija, ako bi putovale avionom?',
          items: [
            { q: 'Šta bi prvo morale da urade?', sample: 'Prvo bi morale da otvore sajt Air Srbije i da izaberu let.' },
            { q: 'Šta bi unele?', sample: 'Unele bi datum, lične podatke i podatke platne kartice.' },
            { q: 'Šta bi uradile na aerodromu?', sample: 'Predale bi prtljag, dobile bi bording kartu i čekale bi let.' },
            { q: 'Šta biste vi radije: autobus, voz ili avion? Zašto?', sample: 'Ja bih radije voz, jer mogu da gledam kroz prozor i da spavam u kušet kolima.' }
          ]
        },
        {
          type: 'speak', min: 13, title: 'Na šalteru · ролевая игра',
          note: 'Один — путешественник, другой — кассир. Купите билет: куда, когда, в одну сторону или туда-обратно, место у окна или в проходе, багаж, оплата. Потом поменяйтесь и смените транспорт (voz / avion).',
          record: true,
          items: [
            { q: 'Putnik: Dobar dan, treba mi karta do …', sample: 'Dobar dan, treba mi jedna karta do Niša za sutra ujutru.' },
            { q: 'Kasir: U jednom smeru ili povratna? Kod prozora ili u hodniku?', sample: 'Povratna, molim vas. Kod prozora, ako može.' },
            { q: 'Kasir: Imate li prtljag? Keš ili kartica?', sample: 'Imam jedan kofer i ručni prtljag. Platiću karticom.' },
            { q: 'Putnik: Sa kog perona polazi? U koliko sati?', sample: 'Polazi sa perona 7 u 8:15. Ne zaboravite žeton!' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'karta u jednom smeru — povratna karta; kod prozora — u hodniku',
            'žeton, peron, termin, prtljag, kofer, bording karta',
            'Rezervisala sam apartman. Pojma nemam. Nemojte zadržavati red!',
            'Keš ili kartica? — Keš, izvolite.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: вокзал и путешествие', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: на вокзале', est: 6,
          items: [
            { a: ['Želimo da kupimo karte do Kopaonika.'] }, { a: ['U jednom smeru ili povratna?'] }, { a: ['Rezervisala sam apartman u Brzeću.'] },
            { a: ['Nikad nisam bio tamo.'] }, { a: ['Nemojte zadržavati red!'] }, { a: ['Keš ili kartica?'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Мне нужен билет в одну сторону до Ниша.', a: ['Treba mi karta u jednom smeru do Niša.', 'Trebam kartu u jednom smeru do Niša.'] },
            { q: 'Место у окна, пожалуйста.', a: ['Sedište kod prozora, molim.', 'Sedište kod prozora, molim vas.', 'Kod prozora, molim vas.', 'Kod prozora, molim.'] },
            { q: 'С какого перрона отправляется автобус?', a: ['Sa kog perona polazi autobus?', 'Sa kog perona kreće autobus?'] },
            { q: 'У вас есть багаж?', a: ['Da li imate prtljag?', 'Imate li prtljag?'] },
            { q: 'Понятия не имею.', a: ['Pojma nemam.'] },
            { q: 'Ксения упаковала чемодан и сумку.', a: ['Ksenija je spakovala kofer i torbu.'] },
            { q: 'Итого билеты стоят три тысячи динаров.', a: ['Ukupno karte koštaju tri hiljade dinara.', 'Ukupno karte koštaju 3000 dinara.'] }
          ]
        },
        {
          type: 'write', title: 'Dijalog na stanici · диалог + запись', est: 9, key: 'hw-26.2-dijalog', record: true,
          note: 'Напишите диалог из 10 реплик между путешественником и кассиром на вокзале или в аэропорту. Запишите, читая обе роли.',
          sample: 'Putnik: Dobar dan, treba mi povratna karta do Novog Sada. Kasir: Za kada? Putnik: Za subotu ujutru, povratak u nedelju uveče. Kasir: Ima voz u 7:20. Kod prozora ili u hodniku? Putnik: Kod prozora, molim. Kasir: Imate li prtljag? Putnik: Samo ručni prtljag. Kasir: Ukupno 1200 dinara. Keš ili kartica? Putnik: Kartica. Sa kog perona polazi? Kasir: Sa perona 3. Srećan put!'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '26.3',
      title: 'Ukusi i doživljaji',
      ru: 'Сербские специалитеты и сувениры, блюда, фразы в ресторане',
      goals: [
        'узнать 8 специалитетов и сувениров: kulen, ćilim, pršut, rakija, ajvar, kajmak, Vranac, kačkavalj',
        'разобрать 25 названий блюд и рассортировать их',
        'заказать еду в кафане: фразы из курса своими силами'
      ],
      blocks: [
        {
          type: 'text', min: 6, title: 'Srpski specijaliteti i suveniri · фото из курса',
          note: 'На фото слева направо: kajmak, ćilim, kulen, rakija; vino Vranac, ajvar, kačkavalj, pršut.',
          img: 'img/l26_specijaliteti.png',
          html: '<ul><li>[[kulen]] — острая сухая колбаса из Воеводины</li><li>[[ćilim]] — тканый ковёр, самый известный из Пирота</li><li>[[pršut]] — вяленое мясо, похоже на прошутто</li>' +
            '<li>[[rakija]] — фруктовая водка; [[šljivovica]] — из сливы</li><li>[[ajvar]] — паста из печёного перца, самый известный из Лесковца</li><li>[[kajmak]] — сливочный молочный продукт, едят с хлебом</li>' +
            '<li>[[vino Vranac]] — красное вино из Черногории и юга Сербии</li><li>[[kačkavalj]] — твёрдый жёлтый сыр</li></ul>'
        },
        {
          type: 'match', min: 5, title: 'Šta je šta? · соедините описание и слово',
          pairs: [
            ['kajmak', 'mlečni proizvod, jede se sa hlebom'], ['ćilim', 'tepih, ručni rad iz Pirota'], ['kulen', 'suva kobasica sa paprikom iz Vojvodine'], ['rakija', 'jako piće od voća, na primer od šljive'],
            ['vino Vranac', 'crno vino iz Crne Gore i sa juga Srbije'], ['ajvar', 'namaz od pečene paprike'], ['kačkavalj', 'tvrdi žuti sir'], ['pršut', 'suvo meso, sušena šunka']
          ]
        },
        {
          type: 'text', min: 7, title: 'Rečnik jela · блюда из словаря курса',
          html: '<p><b>Čorbe i glavna jela:</b> [[pileća čorba]], [[riblja čorba]], [[teleća čorba]], [[pasulj]], [[sarma]], [[pljeskavica]], [[ćevapi]], [[karađorđeva šnicla]], [[pastrmka]], [[kačamak]], [[pohovani sir]].</p>' +
            '<p><b>Pecivo i testo:</b> [[burek]], [[gibanica]], [[proja]], [[lepinja]], [[kifla]]. <b>Slatko:</b> [[palačinke]], [[Moskva šnit]]. <b>Namazi:</b> [[urnebes]], [[kajmak]], [[ajvar]].</p>' +
            '<p><b>Gde jedemo:</b> [[kafana]] — сербский ресторан с музыкой, [[kafić]], [[pekara]], [[restoran]]. <b>Korisno:</b> [[za poneti]] — с собой, [[ukupno]] — итого, [[taman]] — как раз, [[kisela voda]], [[jogurt]], [[jelo]] — блюдо.</p>',
          tables: [
            { caption: 'Šta je unutra?', head: ['jelo', 'šta je to'], rows: [
              ['gibanica', 'pita sa jajima, jogurtom i sirom'], ['burek', 'masna pita sa mesom, sirom ili spanaćem'], ['sarma', 'kiseli kupus sa mesom i pirinčem'],
              ['karađorđeva šnicla', 'rolovano meso sa kajmakom, pohovano'], ['proja', 'hleb od kukuruznog brašna'], ['kačamak', 'kaša od kukuruznog brašna'],
              ['urnebes', 'namaz od sira, paprike i belog luka'], ['Moskva šnit', 'torta sa voćem i kremom']
            ] }
          ]
        },
        {
          type: 'sort', min: 7, title: 'Razvrstajte jela · по группам',
          groups: ['Čorbe', 'Meso', 'Pecivo i testo', 'Slatko', 'Sirevi i namazi'],
          items: [
            { w: 'pileća čorba', g: 'Čorbe' }, { w: 'riblja čorba', g: 'Čorbe' }, { w: 'teleća čorba', g: 'Čorbe' },
            { w: 'pljeskavica', g: 'Meso' }, { w: 'ćevapi', g: 'Meso' }, { w: 'karađorđeva šnicla', g: 'Meso' }, { w: 'pršut', g: 'Meso' }, { w: 'kulen', g: 'Meso' },
            { w: 'burek', g: 'Pecivo i testo' }, { w: 'gibanica', g: 'Pecivo i testo' }, { w: 'proja', g: 'Pecivo i testo' }, { w: 'kifla', g: 'Pecivo i testo' }, { w: 'lepinja', g: 'Pecivo i testo' },
            { w: 'Moskva šnit', g: 'Slatko' }, { w: 'palačinke', g: 'Slatko', hint: 'Palačinke sa džemom su slatke.' }, { w: 'baklava', g: 'Slatko' },
            { w: 'kajmak', g: 'Sirevi i namazi' }, { w: 'ajvar', g: 'Sirevi i namazi' }, { w: 'urnebes', g: 'Sirevi i namazi' }, { w: 'kačkavalj', g: 'Sirevi i namazi' }, { w: 'pohovani sir', g: 'Sirevi i namazi' }
          ]
        },
        {
          type: 'qa', mode: 'translate', min: 10, title: 'Fraze u restoranu · переведите фразы',
          note: 'В курсе это карточки Wordwall «Fraze koje mi koristimo u restoranu». Переведите, потом произнесите вслух.',
          items: [
            { q: 'У вас есть свободный столик?', a: ['Da li imate slobodan sto?', 'Imate li slobodan sto?'] },
            { q: 'Столик на двоих, пожалуйста.', a: ['Sto za dvoje, molim.', 'Sto za dvoje, molim vas.'] },
            { q: 'Меню, пожалуйста.', a: ['Jelovnik, molim.', 'Jelovnik, molim vas.', 'Molim vas jelovnik.'] },
            { q: 'Что вы посоветуете?', a: ['Šta preporučujete?'] },
            { q: 'Я буду куриный суп и чевапчичи.', a: ['Ja ću pileću čorbu i ćevape.', 'Uzeću pileću čorbu i ćevape.'] },
            { q: 'Одну минеральную воду, пожалуйста.', a: ['Jednu kiselu vodu, molim.', 'Jednu kiselu vodu, molim vas.'] },
            { q: 'Можно с собой?', a: ['Može li za poneti?', 'Može za poneti?', 'Da li može za poneti?'] },
            { q: 'Счёт, пожалуйста.', a: ['Račun, molim.', 'Račun, molim vas.'] },
            { q: 'Могу я заплатить картой?', a: ['Da li mogu da platim karticom?', 'Mogu li da platim karticom?'] },
            { q: 'Сдача для вас. Приятного аппетита!', a: ['Kusur je za vas. Prijatno!'] }
          ]
        },
        {
          type: 'speak', min: 8, title: 'Pitanja · вопросы из курса',
          items: [
            { q: 'Koje je najneobičnije srpsko jelo koje ste probali?', sample: 'Najneobičnije jelo je urnebes: ljut namaz od sira i paprike.' },
            { q: 'Šta volite, a šta ne volite od srpske hrane?', sample: 'Volim ćevape i gibanicu, ali ne volim pasulj.' },
            { q: 'Šta biste kupili kao suvenir iz Srbije?', sample: 'Kupio bih ajvar i rakiju, a ona bi kupila pirotski ćilim.' }
          ]
        },
        {
          type: 'speak', min: 11, title: 'U kafani · ролевая игра',
          note: 'Ксения и Лена в кафане. Один — гость, другой — официант. Закажите суп, главное блюдо, напиток, попросите счёт. Потом поменяйтесь.',
          record: true,
          items: [
            { q: 'Konobar: Dobro veče, izvolite. Šta želite?', sample: 'Dobro veče. Da li imate slobodan sto za dvoje?' },
            { q: 'Gost: Šta preporučujete?', sample: 'Preporučujem teleću čorbu i karađorđevu šniclu sa kajmakom.' },
            { q: 'Konobar: Šta ćete piti?', sample: 'Jednu kiselu vodu i čašu Vranca, molim.' },
            { q: 'Gost: Račun, molim. Da li mogu da platim karticom?', sample: 'Naravno. Ukupno je 2400 dinara. Prijatno!' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'kulen, ćilim, pršut, rakija, ajvar, kajmak, Vranac, kačkavalj',
            'čorba, sarma, gibanica, burek, proja, kačamak, urnebes, Moskva šnit',
            'Šta preporučujete? Ja ću pileću čorbu. Može li za poneti? Račun, molim.',
            'kafana — kafić — pekara — restoran; za poneti, ukupno, taman'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: еда и ресторан', est: 9, set: 'C' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: в кафане', est: 6,
          items: [
            { a: ['Da li imate slobodan sto za dvoje?'] }, { a: ['Šta preporučujete?'] }, { a: ['Ja ću riblju čorbu i pastrmku.'] },
            { a: ['Jednu kiselu vodu, molim vas.'] }, { a: ['Može li za poneti?'] }, { a: ['Račun, molim. Kusur je za vas.'] }
          ]
        },
        {
          type: 'gap', bank: true, title: 'Šta je to? · вставьте название', est: 6,
          items: [
            'Namaz od pečene paprike iz Leskovca je {ajvar}.', 'Tepih ručne izrade iz Pirota je {ćilim}.', 'Pita sa jajima, jogurtom i sirom je {gibanica}.',
            'Kiseli kupus sa mesom i pirinčem je {sarma}.', 'Jako piće od šljive je {šljivovica}.', 'Hleb od kukuruznog brašna je {proja}.',
            'Sušena šunka je {pršut}.', 'Torta sa voćem i kremom je {Moskva šnit}.'
          ]
        },
        {
          type: 'write', title: 'Moj omiljeni srpski specijalitet · текст + запись', est: 9, key: 'hw-26.3-jelo', record: true,
          note: '8 предложений: какое сербское блюдо любите больше всего, что в нём, где его едите, что не любите и почему. Запишите чтение вслух.',
          sample: 'Moje omiljeno srpsko jelo je gibanica. To je pita sa jajima, jogurtom i sirom. Najbolju gibanicu jedem u pekari blizu posla, uvek za poneti. Uz gibanicu pijem jogurt. Volim i ćevape sa kajmakom u kafani. Ne volim pasulj, jer je pretežak za mene. Kad dođu gosti iz Rusije, kupujem im ajvar i rakiju kao suvenir. Prijatno!'
        }
      ]
    }
  ]
});
