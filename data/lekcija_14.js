// Lekcija 14 - Karijera. Three 60-minute sessions: professions & where people work, CV + personal traits, full forms of hteti + tense review.
COURSE.register({
  n: 14,
  title: 'Karijera',
  ru: 'Профессии, феминитивы, резюме, личные качества; полная форма hteti',

  vocab: [
    { id: 'naucnik', sr: 'naučnik — radim u laboratoriji', ru: 'учёный — работаю в лаборатории', set: 'A' },
    { id: 'pisac', sr: 'pisac — pišem romane i knjige', ru: 'писатель — пишу романы и книги', set: 'A' },
    { id: 'glumac14', sr: 'glumac, glumica — glumim u pozorištu', ru: 'актёр, актриса — играю в театре', set: 'A' },
    { id: 'reditelj', sr: 'reditelj, rediteljka — radim na snimanju', ru: 'режиссёр — работаю на съёмке', set: 'A' },
    { id: 'zanimanje', sr: 'zanimanje — Šta ste po zanimanju?', ru: 'профессия — Кто вы по профессии?', set: 'A' },
    { id: 'ucitelj14', sr: 'učitelj, učiteljica', ru: 'учитель', set: 'A' },
    { id: 'inzenjer', sr: 'inženjer, inženjerka', ru: 'инженер', set: 'A' },
    { id: 'kuvar', sr: 'kuvar, kuvarica', ru: 'повар', set: 'A' },
    { id: 'lekar14', sr: 'lekar, lekarka', ru: 'врач', set: 'A' },
    { id: 'sekretar', sr: 'sekretar, sekretarica', ru: 'секретарь', set: 'A' },
    { id: 'policajac', sr: 'policajac, policajka', ru: 'полицейский', set: 'A' },
    { id: 'dizajner', sr: 'dizajner, dizajnerka', ru: 'дизайнер', set: 'A' },
    { id: 'programer14', sr: 'programer, programerka', ru: 'программист', set: 'A' },
    { id: 'profesor', sr: 'profesor, profesorka', ru: 'профессор, преподаватель', set: 'A' },
    { id: 'menadzer14', sr: 'menadžer, menadžerka', ru: 'менеджер', set: 'A' },
    { id: 'gradjevinar', sr: 'građevinar, građevinarka — gradilište', ru: 'строитель — стройка', set: 'A' },
    { id: 'pekar', sr: 'pekar, pekarka', ru: 'пекарь', set: 'A' },
    { id: 'frizer', sr: 'frizer, frizerka — frizerski salon', ru: 'парикмахер — салон', set: 'A' },
    { id: 'pravnik14', sr: 'pravnik, pravnica — sud', ru: 'юрист — суд', set: 'A' },
    { id: 'prodavac', sr: 'prodavac, prodavačica', ru: 'продавец', set: 'A' },
    { id: 'konobar14', sr: 'konobar, konobarica', ru: 'официант', set: 'A' },
    { id: 'vaspitac', sr: 'vaspitač, vaspitačica — dečiji vrtić', ru: 'воспитатель — детский сад', set: 'A' },
    { id: 'pevac', sr: 'pevač, pevačica', ru: 'певец', set: 'A' },
    { id: 'umetnik', sr: 'umetnik, umetnica', ru: 'художник, артист', set: 'A' },
    { id: 'pesnik', sr: 'pesnik, pesnikinja', ru: 'поэт', set: 'A' },
    { id: 'pijanista', sr: 'pijanista, pijanistkinja', ru: 'пианист', set: 'A' },
    { id: 'stjuard', sr: 'stjuard, stjuardesa', ru: 'стюард', set: 'A' },
    { id: 'psiholog', sr: 'psiholog', ru: 'психолог', set: 'A' },
    { id: 'na-daljinu', sr: 'od kuće, na daljinu', ru: 'из дома, на удалёнке', set: 'A' },
    { id: 'na-posao', sr: 'na posao (kuda?) — na poslu (gde?)', ru: 'на работу — на работе', set: 'A' },
    { id: 'plata', sr: 'plata — povećati platu', ru: 'зарплата — повысить зарплату', set: 'A' },
    { id: 'radnik', sr: 'radnik — dobri radnici', ru: 'работник — хорошие работники', set: 'A' },
    { id: 'fabrika', sr: 'fabrika', ru: 'завод', set: 'A' },
    { id: 'bolovanje', sr: 'bolovanje', ru: 'больничный', set: 'A' },
    { id: 'sef14', sr: 'šef — skuvati kafu za šefa', ru: 'начальник — сварить кофе для начальника', set: 'A' },

    { id: 'rezime', sr: 'rezime', ru: 'резюме', set: 'B' },
    { id: 'obrazovanje', sr: 'obrazovanje', ru: 'образование', set: 'B' },
    { id: 'iskustvo', sr: 'iskustvo — radno iskustvo', ru: 'опыт — опыт работы', set: 'B' },
    { id: 'pozicija', sr: 'pozicija — Koju poziciju tražite?', ru: 'позиция — Какую позицию ищете?', set: 'B' },
    { id: 'osobine', sr: 'lične osobine i veštine', ru: 'личные качества и навыки', set: 'B' },
    { id: 'iskren', sr: 'iskren', ru: 'честный', set: 'B' },
    { id: 'pozitivan', sr: 'pozitivan', ru: 'позитивный', set: 'B' },
    { id: 'odan', sr: 'odan', ru: 'преданный', set: 'B' },
    { id: 'kreativan', sr: 'kreativan', ru: 'творческий', set: 'B' },
    { id: 'brz', sr: 'brz', ru: 'быстрый', set: 'B' },
    { id: 'pod-pritiskom', sr: 'spreman za rad pod pritiskom', ru: 'готов к работе под давлением', set: 'B' },
    { id: 'vredan', sr: 'vredan', ru: 'трудолюбивый', set: 'B' },
    { id: 'tacan', sr: 'tačan', ru: 'точный, пунктуальный', set: 'B' },
    { id: 'duhovit', sr: 'duhovit', ru: 'остроумный', set: 'B' },
    { id: 'snalazljiv', sr: 'snalažljiv', ru: 'находчивый', set: 'B' },
    { id: 'ljubazan14', sr: 'ljubazan', ru: 'вежливый', set: 'B' },
    { id: 'strpljiv', sr: 'strpljiv', ru: 'терпеливый', set: 'B' },
    { id: 'upisati', sr: 'upisati fakultet — upisala sam', ru: 'поступить на факультет', set: 'B' },
    { id: 'zaposliti-se', sr: 'zaposliti se — zaposlila sam se', ru: 'устроиться на работу', set: 'B' },
    { id: 'kancelarija14', sr: 'ići u kancelariju svaki dan', ru: 'ходить в офис каждый день', set: 'B' },
    { id: 'privlaciti', sr: 'privlače me posao i putovanja', ru: 'меня привлекают работа и путешествия', set: 'B' },
    { id: 'traziti', sr: 'tražiti novi posao', ru: 'искать новую работу', set: 'B' },
    { id: 'dinamican', sr: 'dinamično okruženje', ru: 'динамичная среда', set: 'B' },
    { id: 'javnost', sr: 'odnosi sa javnošću', ru: 'связи с общественностью', set: 'B' },
    { id: 'planinariti', sr: 'planinariti', ru: 'ходить в горы', set: 'B' },

    { id: 'hocu', sr: 'hoću, hoćeš, hoće, hoćemo, hoćete, hoće', ru: 'полная форма hteti', set: 'C' },
    { id: 'hoces-li', sr: 'Hoćeš li kafu? — Hoću.', ru: 'Будешь кофе? — Буду.', set: 'C' },
    { id: 'beseda', sr: 'beseda za posao', ru: 'собеседование', set: 'C' },
    { id: 'otkaz', sr: 'dati otkaz', ru: 'уволиться', set: 'C' },
    { id: 'seminar', sr: 'seminar sa menadžerom', ru: 'семинар с менеджером', set: 'C' },
    { id: 'poslati14', sr: 'poslati rezime', ru: 'отправить резюме', set: 'C' },
    { id: 'bolestan', sr: 'bolestan — bolesni su', ru: 'больной — они больны', set: 'C' },
    { id: 'penzija', sr: 'u penziji', ru: 'на пенсии', set: 'C' },
    { id: 'razgovor', sr: 'razgovor za posao', ru: 'собеседование (разговор)', set: 'C' },
    { id: 'kabinet', sr: 'kabinet', ru: 'кабинет', set: 'C' },
    { id: 'kompanija14', sr: 'raditi u ovoj kompaniji', ru: 'работать в этой компании', set: 'C' }
  ],

  verbs: {
    hteti: { inf: 'hteti', ru: 'хотеть', pos: { ja: 'hoću', ti: 'hoćeš', on: 'hoće', mi: 'hoćemo', vi: 'hoćete', oni: 'hoće' }, neg: { ja: 'neću', ti: 'nećeš', on: 'neće', mi: 'nećemo', vi: 'nećete', oni: 'neće' }, noQuestion: true },
    raditi: { inf: 'raditi', ru: 'работать', pos: { ja: 'radim', ti: 'radiš', on: 'radi', mi: 'radimo', vi: 'radite', oni: 'rade' }, neg: { ja: 'ne radim', ti: 'ne radiš', on: 'ne radi', mi: 'ne radimo', vi: 'ne radite', oni: 'ne rade' }, l: { m: 'radio', f: 'radila', n: 'radilo', mpl: 'radili', fpl: 'radile' } },
    raditiF: { inf: 'raditi (futur)', ru: 'будет работать', pos: { ja: 'ću raditi', ti: 'ćeš raditi', on: 'će raditi', mi: 'ćemo raditi', vi: 'ćete raditi', oni: 'će raditi' }, neg: { ja: 'neću raditi', ti: 'nećeš raditi', on: 'neće raditi', mi: 'nećemo raditi', vi: 'nećete raditi', oni: 'neće raditi' }, noQuestion: true },
    ici: { inf: 'ići (futur)', ru: 'пойдёт', pos: { ja: 'ću ići', ti: 'ćeš ići', on: 'će ići', mi: 'ćemo ići', vi: 'ćete ići', oni: 'će ići' }, neg: { ja: 'neću ići', ti: 'nećeš ići', on: 'neće ići', mi: 'nećemo ići', vi: 'nećete ići', oni: 'neće ići' }, noQuestion: true },
    imati: { inf: 'imati', ru: 'иметь', pos: { ja: 'imam', ti: 'imaš', on: 'ima', mi: 'imamo', vi: 'imate', oni: 'imaju' }, neg: { ja: 'nemam', ti: 'nemaš', on: 'nema', mi: 'nemamo', vi: 'nemate', oni: 'nemaju' }, l: { m: 'imao', f: 'imala', n: 'imalo', mpl: 'imali', fpl: 'imale' } },
    biti: { inf: 'biti', ru: 'быть', pos: { ja: 'sam', ti: 'si', on: 'je', mi: 'smo', vi: 'ste', oni: 'su' }, neg: { ja: 'nisam', ti: 'nisi', on: 'nije', mi: 'nismo', vi: 'niste', oni: 'nisu' }, noQuestion: true, l: { m: 'bio', f: 'bila', n: 'bilo', mpl: 'bili', fpl: 'bile' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '14.1',
      title: 'Posao i zanimanja',
      ru: 'Профессии, феминитивы, где кто работает',
      goals: [
        'назвать 25 профессий в мужской и женской форме',
        'сказать, где работает человек: u školi, na gradilištu, od kuće',
        'различать na posao (kuda?) и na poslu (gde?)'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Šta si?',
          note: 'Тесла — учёный, Андрич — писатель, Бикович — актёр, Кустурица — режиссёр. Прочитайте кириллицу сами.',
          img: 'img/l14_strip.png',
          lines: [
            { who: 'Nikola', sr: 'Ja sam naučnik. Radim u laboratoriji!', ru: 'Я учёный. Работаю в лаборатории!' },
            { who: 'Ivo', sr: 'Ja sam pisac. Pišem romane i knjige.', ru: 'Я писатель. Пишу романы и книги.' },
            { who: 'Miloš', sr: 'Ja sam glumac. Glumim u pozorištu!', ru: 'Я актёр. Играю в театре!' },
            { who: 'Emir', sr: 'Ja sam reditelj. Radim na snimanju.', ru: 'Я режиссёр. Работаю на съёмке.' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Zanimanja i feminitivi · профессии и феминитивы',
          img: 'img/l14_zanimanja.png',
          html:
            '<p>[[Šta ste po zanimanju?]] — Кто вы по профессии? Для большинства профессий есть женская форма с суффиксами <b>-ka</b>, <b>-ica</b>, <b>-kinja</b>.</p>',
          tables: [
            { caption: '-ka', head: ['', '', ''], rows: [['lekar — lekarka', 'pekar — pekarka', 'profesor — profesorka'], ['programer — programerka', 'dizajner — dizajnerka', 'inženjer — inženjerka'], ['menadžer — menadžerka', 'frizer — frizerka', 'građevinar — građevinarka']] },
            { caption: '-ica', head: ['', '', ''], rows: [['vaspitač — vaspitačica', 'pevač — pevačica', 'učitelj — učiteljica'], ['konobar — konobarica', 'umetnik — umetnica', 'glumac — glumica'], ['sekretar — sekretarica', 'prodavac — prodavačica', 'kuvar — kuvarica']] },
            { caption: '-kinja i ostalo', head: ['', '', ''], rows: [['pesnik — pesnikinja', 'pijanista — pijanistkinja', 'stjuard — stjuardesa'], ['policajac — policajka', 'pravnik — pravnica', 'psiholog — psiholog']] }
          ]
        },
        {
          type: 'qa', mode: 'transform', min: 5, title: 'Feminitiv · напишите женскую форму',
          items: [
            { q: 'lekar', a: ['lekarka'] }, { q: 'učitelj', a: ['učiteljica'] }, { q: 'glumac', a: ['glumica'] }, { q: 'programer', a: ['programerka'] },
            { q: 'konobar', a: ['konobarica'] }, { q: 'pesnik', a: ['pesnikinja'] }, { q: 'kuvar', a: ['kuvarica'] }, { q: 'inženjer', a: ['inženjerka'] }, { q: 'pravnik', a: ['pravnica'] }
          ]
        },
        {
          type: 'match', min: 6, title: 'Gde rade ovi ljudi? · кто где работает',
          note: 'Отвечайте в локативе: Menadžer radi u kancelariji.',
          pairs: [
            ['menadžer', 'kancelarija'], ['lekar', 'bolnica'], ['programer', 'od kuće, na daljinu'], ['frizer', 'frizerski salon'], ['učitelj', 'škola'],
            ['profesor', 'škola, univerzitet'], ['policajac', 'policijska stanica'], ['kuvar', 'restoran, kuhinja'], ['konobar', 'restoran, kafić'], ['prodavac', 'prodavnica'], ['građevinar', 'gradilište']
          ]
        },
        {
          type: 'text', min: 3, title: 'Pažljivo! · posao',
          html: '<p><b>posao — poslovi</b> (мужской род). [[Ja idem na posao.]] — kuda? akuzativ. [[Ja sam na poslu.]] — gde? lokativ. [[Radim od kuće.]] [[Radim na daljinu.]]</p>'
        },
        {
          type: 'gap', min: 7, title: 'Unesite reči u odgovarajućim padežima · падежи',
          note: 'Упражнение из курса: локатив, инструментал, датив, генитив, аккузатив.',
          items: [
            'Moja žena je učitelj, ona radi u {školi} (škola).', 'Svaki dan Sava ide na posao {tramvajem} (tramvaj).', 'Oni su povećali platu {dobrim radnicima} (dobri radnici).',
            'Sada idemo u kancelariju {taksijem} (taksi), nemamo {vremena} (vreme).', 'Programeri često rade od {kuće} (kuća).', 'Njihov tata je inženjer, radi na {fabrici|u fabrici} (fabrika).',
            'Da li imaš {bolovanje} (bolovanje)?', 'Hoće da skuva {kafu} (kafa) za {šefa} (šef).'
          ]
        },
        {
          type: 'match', min: 6, title: 'Pronađite zanimanja · профессия по описанию',
          pairs: [
            ['radi u bolnici i spašava ljudske živote', 'lekar, lekarka'], ['radi u kancelariji kao pomoćnik načelnika ili menadžera', 'sekretar, sekretarica'], ['sprema ukusnu hranu u restoranima i kafićima', 'kuvar, kuvarica'],
            ['uči decu u školi ili u dečijim vrtićima', 'učitelj, učiteljica'], ['štiti ljudska prava u sudu i sastavlja pravne papire', 'pravnik, pravnica'], ['piše kod, popravlja kod i lansira sajtove, aplikacije', 'programer, programerka'],
            ['prodaje nam proizvode i namirnice u prodavnicama', 'prodavac, prodavačica'], ['glumi u filmovima, serijama i u pozorištu', 'glumac, glumica']
          ]
        },
        {
          type: 'speak', min: 15, title: 'Šta ste po zanimanju? · разговор о работе',
          note: 'Три вопроса из курса. Потом «угадай профессию»: один описывает, что делает и где работает, второй угадывает. Минимум по три профессии каждый.',
          items: [
            { q: 'Šta ste po zanimanju? Koliko dugo radite?', sample: 'Ja sam programer. Radim pet godina.' },
            { q: 'Da li volite da radite na daljinu ili u kancelariji?', sample: 'Volim da radim od kuće, ali dva puta nedeljno idem u kancelariju.' },
            { q: 'Da li volite svoj posao? Zašto?', sample: 'Volim svoj posao, jer je kreativan i kolege su duhovite.' },
            { q: 'Ova osoba radi u…, ona… Ko je to?', sample: 'Ova osoba radi u restoranu i sprema hranu. — Kuvar!' },
            { q: 'Šta si hteo / htela da budeš kad si bio mali / bila mala?', sample: 'Kad sam bila mala, htela sam da budem glumica.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'Šta ste po zanimanju? — Ja sam programer / programerka.',
            '-ka: lekarka; -ica: učiteljica; -kinja: pesnikinja',
            'Radim u školi, u bolnici, na gradilištu, od kuće, na daljinu',
            'Idem na posao (kuda?) — Ja sam na poslu (gde?)'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: профессии', est: 10, set: 'A' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Ja sam naučnik, radim u laboratoriji.'] }, { a: ['Šta ste po zanimanju?'] }, { a: ['Moja žena je učiteljica, ona radi u školi.'] },
            { a: ['Programeri često rade od kuće.'] }, { a: ['Svaki dan idem na posao tramvajem.'] }, { a: ['Da li imaš bolovanje?'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я актриса, играю в театре.', a: ['Ja sam glumica, glumim u pozorištu.', 'Glumica sam, glumim u pozorištu.'] },
            { q: 'Он режиссёр, работает на съёмке.', a: ['On je reditelj, radi na snimanju.'] },
            { q: 'Моя сестра врач, она работает в больнице.', a: ['Moja sestra je lekarka, ona radi u bolnici.', 'Moja sestra je lekar, ona radi u bolnici.'] },
            { q: 'Я работаю из дома.', a: ['Radim od kuće.', 'Ja radim od kuće.', 'Radim na daljinu.'] },
            { q: 'Они повысили зарплату хорошим работникам.', a: ['Povećali su platu dobrim radnicima.', 'Oni su povećali platu dobrim radnicima.'] },
            { q: 'Я иду на работу. Я на работе.', a: ['Idem na posao. Ja sam na poslu.', 'Idem na posao. Na poslu sam.'] },
            { q: 'Ты любишь свою работу?', a: ['Da li voliš svoj posao?', 'Voliš li svoj posao?'] },
            { q: 'Повар готовит еду в ресторане.', a: ['Kuvar sprema hranu u restoranu.', 'Kuvar kuva hranu u restoranu.'] }
          ]
        },
        {
          type: 'write', title: 'Moj posao · текст о работе', est: 7, key: 'hw-14.1-posao',
          note: '8 предложений: кто вы по профессии, где работаете, сколько лет, что делаете, нравится ли, кем хотели быть в детстве.',
          sample: 'Ja sam programerka. Radim u IT kompaniji pet godina. Pišem kod i lansiram aplikacije. Radim od kuće, ali dva puta nedeljno idem u kancelariju. Volim svoj posao, jer je kreativan. Kolege su duhovite i ljubazne. Kad sam bila mala, htela sam da budem lekarka.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '14.2',
      title: 'Rezime',
      ru: 'Резюме Елены, личные качества, своя анкета',
      goals: [
        'понять на слух рассказ о карьере и заполнить пропуски',
        'описать себя: vredan, tačan, kreativan, strpljiv',
        'заполнить резюме на сербском'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о работе. Партнёр задаёт: Koliko dugo radiš? Šta si hteo da budeš?',
          items: [{ q: 'Ja sam… Radim…' }]
        },
        {
          type: 'text', min: 5, title: 'Jelenin rezime · резюме Елены',
          note: 'Прочитайте резюме: контакты, образование, опыт, «о себе».',
          img: 'img/l14_rezime.png',
          html:
            '<p><b>Jelena Mišić</b>, Niš, spremna za preseljenje. Marketolog, odnosi sa javnošću.<br>' +
            '<b>Obrazovanje:</b> Beogradski univerzitet, Fakultet političkih nauka, 2015–2020.<br>' +
            '<b>Iskustvo:</b> Alians IT, marketolog, 2020–2023 — kontaktirala sa javnošću, medijima, radila na velikim projektima kao što je lansiranje nove aplikacije.<br>' +
            '<b>O sebi:</b> [[Vredna i tačna, volim rad u dinamičnom okruženju. U slobodno vreme planinarim i mnogo putujem.]]</p>'
        },
        {
          type: 'gap', bank: true, listen: true, min: 10, title: 'Jelena priča · послушайте и вставьте',
          note: 'В оригинале — аудио. Сначала прослушайте, потом заполните из банка слов.',
          items: [
            'Zdravo! Ja sam Jelena, živim u Nišu ali {studirala} sam u Beogradu. Upisala sam fakultet političkih nauka kao i moj tata, on je {marketolog} u velikoj agenciji.',
            'Veoma sam {vredna}, uvek mnogo radim i želim da {naučim} nešto novo u karijeri. Posle fakulteta {zaposlila} sam se u IT kompaniju.',
            'Volim svoje kolege i našu {kompaniju}. Ali ne volim da {idem} u kancelariju svaki dan, privlače me posao {na daljinu}. Sada {tražim} novi posao.',
            'Možda {ću} raditi u Beogradu, moja sestra {će} raditi tamo u bolnici, možemo da {živimo} zajedno.'
          ]
        },
        {
          type: 'tf', min: 4, title: 'Tačno ili netačno? · по рассказу',
          items: [
            { q: 'Jelena je studirala u Nišu.', a: false, why: 'Studirala je u Beogradu, živi u Nišu.' }, { q: 'Njen tata je marketolog.', a: true },
            { q: 'Jelena voli da ide u kancelariju svaki dan.', a: false, why: 'Ne voli, privlači je posao na daljinu.' }, { q: 'Ona traži novi posao.', a: true },
            { q: 'Njena sestra će raditi u školi.', a: false, why: 'U bolnici.' }, { q: 'Jelena u slobodno vreme planinari.', a: true }
          ]
        },
        {
          type: 'text', min: 5, title: 'Lične osobine · личные качества',
          img: 'img/l14_osobine.png',
          html:
            '<ul><li>[[iskren]] — честный, [[pozitivan]] — позитивный, [[odan]] — преданный</li><li>[[kreativan]] — творческий, [[brz]] — быстрый, [[spreman za rad pod pritiskom]] — готов работать под давлением</li>' +
            '<li>[[vredan]] — трудолюбивый, [[tačan]] — пунктуальный, [[duhovit]] — остроумный</li><li>[[snalažljiv]] — находчивый, [[ljubazan]] — вежливый, [[strpljiv]] — терпеливый</li></ul>' +
            '<p>Женская форма: [[vredna]], [[tačna]], [[kreativna]], [[strpljiva]]. Множественное: [[vredni]], [[duhoviti]].</p>'
        },
        {
          type: 'match', min: 4, title: 'Osobine · качество и перевод',
          pairs: [
            ['iskren', 'честный'], ['odan', 'преданный'], ['kreativan', 'творческий'], ['brz', 'быстрый'], ['vredan', 'трудолюбивый'],
            ['tačan', 'пунктуальный'], ['duhovit', 'остроумный'], ['snalažljiv', 'находчивый'], ['ljubazan', 'вежливый'], ['strpljiv', 'терпеливый']
          ]
        },
        {
          type: 'mc', min: 4, title: 'Koja osobina? · какое качество нужно',
          items: [
            { q: 'Učitelj mora da bude ….', options: ['strpljiv', 'brz', 'duhovit'], a: 'strpljiv' }, { q: 'Dizajner mora da bude ….', options: ['tačan', 'kreativan', 'odan'], a: 'kreativan' },
            { q: 'Konobar mora da bude ….', options: ['ljubazan', 'iskren', 'kreativan'], a: 'ljubazan' }, { q: 'Lekar u hitnoj pomoći mora da bude ….', options: ['duhovit', 'spreman za rad pod pritiskom', 'odan'], a: 'spreman za rad pod pritiskom' },
            { q: 'Sekretarica mora da bude ….', options: ['tačna', 'brza', 'duhovita'], a: 'tačna' }, { q: 'Prodavac mora da bude ….', options: ['snalažljiv', 'kreativan', 'odan'], a: 'snalažljiv' }
          ]
        },
        {
          type: 'speak', min: 4, title: 'Kakve osobine imate? · вопросы из курса',
          items: [
            { q: 'Kakve lične osobine su potrebne za vašu poziciju?', sample: 'Za moju poziciju treba biti tačan, vredan i spreman za rad pod pritiskom.' },
            { q: 'Kakve osobine vi imate? Šta vam nedostaje po vašem mišljenju?', sample: 'Ja sam kreativna i duhovita, ali nisam uvek tačna. Nedostaje mi strpljenje.' },
            { q: 'Koje osobine ima tvoj partner?', sample: 'On je iskren, odan i snalažljiv.' }
          ]
        },
        {
          type: 'speak', min: 15, title: 'Popunite vaše podatke · резюме вслух',
          note: 'Анкета из курса: каждый отвечает на шесть пунктов вслух, партнёр — «работодатель» — задаёт уточняющие вопросы. Потом дома записываете письменно.',
          items: [
            { q: 'Vaše ime, prezime, grad i kontakt (telefon ili e-mail)', sample: 'Katarina Petrova, Beograd, katarina@gmail.com.' },
            { q: 'Obrazovanje', sample: 'Moskovski univerzitet, Filološki fakultet, 2012–2017.' },
            { q: 'Iskustvo', sample: 'Radila sam kao dizajnerka u agenciji pet godina, 2018–2023.' },
            { q: 'Koju poziciju tražite?', sample: 'Tražim poziciju dizajnerke u IT kompaniji, na daljinu.' },
            { q: 'O sebi: kakvi ste? Kakve imate osobine i veštine?', sample: 'Kreativna sam, vredna i tačna. Govorim ruski, engleski i malo srpski.' },
            { q: 'Vaši hobiji i slobodno vreme', sample: 'U slobodno vreme crtam, putujem i učim srpski.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'rezime: obrazovanje, iskustvo, pozicija, o sebi',
            'vredan, tačan, kreativan, iskren, odan, strpljiv, snalažljiv',
            'Upisala sam fakultet. Zaposlila sam se u IT kompaniju. Tražim novi posao.',
            'Privlači me posao na daljinu.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: резюме и качества', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Upisala sam fakultet političkih nauka.'] }, { a: ['Posle fakulteta zaposlila sam se u IT kompaniju.'] }, { a: ['Ne volim da idem u kancelariju svaki dan.'] },
            { a: ['Sada tražim novi posao.'] }, { a: ['Vredna sam i tačna.'] }, { a: ['U slobodno vreme planinarim i mnogo putujem.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Я поступила на юридический факультет.', a: ['Upisala sam pravni fakultet.'] },
            { q: 'После университета я устроился в банк.', a: ['Posle fakulteta zaposlio sam se u banku.', 'Posle univerziteta zaposlio sam se u banku.', 'Posle fakulteta sam se zaposlio u banku.'] },
            { q: 'Меня привлекает работа на удалёнке.', a: ['Privlači me posao na daljinu.'] },
            { q: 'Я трудолюбивая и пунктуальная.', a: ['Vredna sam i tačna.', 'Ja sam vredna i tačna.'] },
            { q: 'Он остроумный и находчивый.', a: ['On je duhovit i snalažljiv.'] },
            { q: 'Мне не хватает терпения.', a: ['Nedostaje mi strpljenje.', 'Nedostaje mi strpljenja.'] },
            { q: 'Какую позицию вы ищете?', a: ['Koju poziciju tražite?'] }
          ]
        },
        {
          type: 'write', title: 'Moj rezime · резюме + рассказ о себе (запись)', est: 15, key: 'hw-14.2-rezime', record: true,
          note: 'Задание из курса: заполните анкету письменно (имя, город, контакт, образование, опыт, позиция, о себе, хобби). Потом запишите рассказ о себе по образцу Елены (1–2 минуты).',
          sample: 'Katarina Petrova, Beograd, katarina@gmail.com. Obrazovanje: Moskovski univerzitet, Filološki fakultet, 2012–2017. Iskustvo: dizajnerka u agenciji „Pixel“, 2018–2023, radila sam na velikim projektima. Pozicija: dizajnerka, na daljinu. O sebi: kreativna, vredna i tačna, volim rad u dinamičnom okruženju. Hobiji: crtanje, putovanja, srpski jezik.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '14.3',
      title: 'Hoćeš li? · tri vremena',
      ru: 'Полная форма hteti: вопрос и краткий ответ; выбор времени',
      goals: [
        'задать вопрос полной формой: Hoćeš li…? и ответить: Hoću. / Neću.',
        'построить будущее время в контексте работы',
        'выбрать презент, перфект или футур по маркерам'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Партнёр — работодатель, вы читаете своё резюме. Работодатель задаёт два вопроса: Zašto tražite novi posao? Kada možete da počnete?',
          items: [{ q: 'Ja sam… Tražim poziciju…' }]
        },
        {
          type: 'text', min: 8, title: 'Pun oblik glagola hteti · полная форма',
          html:
            '<p>На прошлом уроке — краткие формы (ću, ćeš…), теперь полные: они нужны для <b>вопроса</b> с частицей <b>li</b> и для <b>краткого ответа</b>. В разговорной речи местоимение обычно опускают.</p>' +
            '<p>— [[Hoćeš li kafu?]] — Будешь кофе? — [[Hoću.]] — Буду.<br>— [[Hoćete li da idemo u kafić za ručak?]] — [[Hoćemo!]]<br>— [[Hoće li oni dati otkaz?]] — [[Neće.]]</p>',
          tables: [
            { caption: 'hteti — pun oblik', head: ['jednina', 'množina'], rows: [['ja hoću raditi', 'mi hoćemo raditi'], ['ti hoćeš raditi', 'vi hoćete raditi'], ['on / ona / ono hoće raditi', 'oni / one / ona hoće raditi']] }
          ],
          after: '<p>Три способа спросить о будущем: [[Da li ćeš raditi?]] = [[Hoćeš li raditi?]] = [[Hoćeš li da radiš?]] Ответ: [[Hoću.]] / [[Neću.]]</p>'
        },
        {
          type: 'gap', min: 6, title: 'Unesite pun oblik glagola hteti · впишите форму',
          items: [
            '— Zdravo! {Hoćete} (vi) li da idemo u kafić za ručak? — Hoćemo!', '— {Hoće} (on) li da radi od kuće ili u kancelariji? — {Hoće} (on) od kuće.',
            '— Hej, Mare, {hoćeš} (ti) li na besedu za posao? — {Hoću} (ja)!', '— {Hoće} (oni) li oni dati otkaz? — {Hoće} (oni).'
          ]
        },
        {
          type: 'gap', min: 7, title: 'Unesite glagole u obliku Futur I · будущее время',
          note: 'Пишите со связкой или слитно, оба варианта принимаются.',
          items: [
            'Ja {ću ići} (ići) na posao biciklom, danas je lepo vreme.', '{Reći ćeš} (reći, ti) mami o svojem novom poslu, to je velika sreća za tebe!', '{Čitaćemo} (čitati, mi) novu knjigu danas na seminaru sa menadžerom.',
            'Da li {ćete} (ići, vi — связка) ići s nama na ručak u kafić? Imamo slobodno vreme.', 'Milorad {će poslati} (poslati) svoj rezime sutra.',
            'Ana i Dejan {neće raditi} (raditi, negacija) u kancelariji sledeće nedelje, bolesni su.', '{Hoćeš} (hteti, ti) li da budeš programer? — Hoću.'
          ]
        },
        {
          type: 'gap', min: 10, title: 'Prezent, perfekat ili futur · выберите время',
          note: 'Упражнение из курса. В скобках — инфинитив и время.',
          items: [
            'Ranije ona {je radila} (raditi, perfekat) kao konobarica dugo, a sada ona {je} (biti, prezent) menadžer.', 'Moja majka {ima} (imati, prezent) 30 godina radnog iskustva.',
            '{Radiću} (raditi, futur, ja) kao lekar, mislim, kao zubar.', 'Mi {nismo radili} (raditi, negacija, perfekat) na daljinu nikad, a sada mi {smo} (biti, prezent) u penziji.',
            'Da li Jovan {će ići} (ići, futur) na posao danas?', 'Sanja {je imala} (imati, perfekat) razgovor za posao juče.', 'Ti {nemaš} (imati, negacija, prezent) potrebe da tražiš novi posao.',
            'Oni {su} (biti, prezent) vredni i duhoviti, odlični radnici!', 'Više {ne želim} (želeti, negacija, prezent, ja) da radim u ovoj kompaniji.', 'Vi {ćete ići} (ići, futur) u kabinet, jel tako?'
          ]
        },
        {
          type: 'conj', min: 5, title: 'Trening · hteti и футур вслух',
          verbs: ['hteti', 'raditiF', 'ici'], rounds: 8
        },
        {
          type: 'speak', min: 15, title: 'Razgovor za posao · собеседование',
          note: 'Ролевая игра: работодатель задаёт вопросы полной формой (Hoćete li…?), кандидат отвечает кратко и развёрнуто. Потом меняетесь. Используйте три времени: где работали, что делаете, что будете делать.',
          items: [
            { q: 'Gde ste radili ranije? Šta ste radili?', sample: 'Radila sam pet godina kao dizajnerka u agenciji. Radila sam na velikim projektima.' },
            { q: 'Šta radite sada? Zašto tražite novi posao?', sample: 'Sada radim od kuće, ali želim da radim u dinamičnom okruženju.' },
            { q: 'Hoćete li raditi u kancelariji ili na daljinu?', sample: 'Hoću na daljinu, ali mogu dva puta nedeljno u kancelariju.' },
            { q: 'Hoćete li da počnete sledećeg meseca?', sample: 'Hoću! Počeću prvog oktobra.' },
            { q: 'Kakve osobine imate? Hoćete li raditi pod pritiskom?', sample: 'Vredna sam i tačna. Hoću, spremna sam za rad pod pritiskom.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'hoću, hoćeš, hoće, hoćemo, hoćete, hoće — вопрос с li и краткий ответ',
            'Hoćeš li kafu? — Hoću. / Neću.',
            'Da li ćeš raditi? = Hoćeš li raditi? = Hoćeš li da radiš?',
            'Ranije sam radila… sada radim… radiću…'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: hteti и слова занятия', est: 7, set: 'C' },
        { type: 'conj', title: 'Тренажёр: hteti, futur', est: 5, verbs: ['hteti', 'raditiF', 'ici'], rounds: 12 },
        {
          type: 'qa', mode: 'transform', title: 'Pitanje sa hteti · задайте вопрос', est: 5,
          note: 'Пример: ti, raditi → Hoćeš li raditi?',
          items: [
            { q: 'ti, raditi', a: ['Hoćeš li raditi?', 'Hoćeš li da radiš?'] }, { q: 'vi, ići', a: ['Hoćete li ići?', 'Hoćete li da idete?'] }, { q: 'on, dati otkaz', a: ['Hoće li dati otkaz?', 'Hoće li da da otkaz?'] },
            { q: 'oni, poslati rezime', a: ['Hoće li poslati rezime?', 'Hoće li da pošalju rezime?'] }, { q: 'ti, kafu', a: ['Hoćeš li kafu?'] }, { q: 'mi, ručati', a: ['Hoćemo li ručati?', 'Hoćemo li da ručamo?'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Hoćeš li kafu? — Hoću.'] }, { a: ['Hoćete li da idemo u kafić za ručak?'] }, { a: ['Hoće li oni dati otkaz?'] },
            { a: ['Milorad će poslati svoj rezime sutra.'] }, { a: ['Sanja je imala razgovor za posao juče.'] }, { a: ['Više ne želim da radim u ovoj kompaniji.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Будешь кофе? — Буду.', a: ['Hoćeš li kafu? Hoću.', 'Hoćeš li kafu? — Hoću.'] },
            { q: 'Он будет работать из дома?', a: ['Hoće li raditi od kuće?', 'Da li će raditi od kuće?', 'Hoće li on raditi od kuće?'] },
            { q: 'Ты пойдёшь на собеседование? — Пойду!', a: ['Hoćeš li na besedu za posao? Hoću!', 'Hoćeš li ići na razgovor za posao? Hoću!', 'Hoćeš li na razgovor za posao? Hoću!'] },
            { q: 'Раньше она работала официанткой, а сейчас она менеджер.', a: ['Ranije je radila kao konobarica, a sada je menadžer.', 'Ranije je ona radila kao konobarica, a sada je ona menadžer.'] },
            { q: 'Я буду работать врачом.', a: ['Radiću kao lekar.', 'Ja ću raditi kao lekar.', 'Radiću kao lekarka.'] },
            { q: 'Они не будут работать на следующей неделе.', a: ['Oni neće raditi sledeće nedelje.', 'Neće raditi sledeće nedelje.'] },
            { q: 'Ты хочешь быть программистом? — Хочу.', a: ['Hoćeš li da budeš programer? Hoću.', 'Da li hoćeš da budeš programer? Hoću.'] },
            { q: 'У моей мамы 30 лет опыта работы.', a: ['Moja mama ima 30 godina radnog iskustva.', 'Moja majka ima 30 godina radnog iskustva.'] }
          ]
        },
        {
          type: 'write', title: 'Moja karijera · вчера, сегодня, завтра + запись', est: 10, key: 'hw-14.3-karijera', record: true,
          note: '10 предложений о карьере в трёх временах: где работали, что делаете сейчас, что будете делать через пять лет. Запишите чтение вслух.',
          sample: 'Posle fakulteta radila sam dve godine kao konobarica. Zatim sam se zaposlila u IT kompaniju kao dizajnerka. Sada radim od kuće i vodim velike projekte. Volim svoj posao, ali želim nešto novo. Sledeće godine ću tražiti posao u Beogradu. Radiću u dinamičnom okruženju. Za pet godina biću menadžerka. Hoću li otvoriti svoju agenciju? Možda hoću!'
        }
      ]
    }
  ]
});
