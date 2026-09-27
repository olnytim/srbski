// Lekcija 2 - Porodično stablo. Split into two 60-minute sessions, each with homework.
// Text markup: [[...]] marks a Serbian fragment (clickable for TTS, follows the Lat/Cyr toggle).
// Gap markup: {answer|alternative} marks a blank.
COURSE.register({
  n: 2,
  title: 'Porodično stablo',
  ru: 'Семейное древо',

  vocab: [
    { id: 'porodica', sr: 'porodica', ru: 'семья', set: 'A' },
    { id: 'porodicni', sr: 'porodični', ru: 'семейный', set: 'A' },
    { id: 'porodicno-stablo', sr: 'porodično stablo', ru: 'семейное древо', set: 'A' },
    { id: 'rodjendan', sr: 'rođendan', ru: 'день рождения', set: 'A' },
    { id: 'srecan-rodjendan', sr: 'Srećan rođendan!', ru: 'С днём рождения!', set: 'A' },
    { id: 'ime', sr: 'ime', ru: 'имя', set: 'A' },
    { id: 'prezime', sr: 'prezime', ru: 'фамилия', set: 'A' },
    { id: 'rodjak', sr: 'rođak', ru: 'родственник', set: 'A' },
    { id: 'majka', sr: 'majka, mama', ru: 'мать, мама', set: 'A' },
    { id: 'otac', sr: 'otac, tata', ru: 'отец, папа', set: 'A' },
    { id: 'baka', sr: 'baka, baba', ru: 'бабушка', set: 'A' },
    { id: 'deda', sr: 'deka, deda', ru: 'дедушка', set: 'A' },
    { id: 'sin', sr: 'sin', ru: 'сын', set: 'A' },
    { id: 'cerka', sr: 'ćerka', ru: 'дочь', set: 'A' },
    { id: 'brat', sr: 'brat', ru: 'брат', set: 'A' },
    { id: 'sestra', sr: 'sestra', ru: 'сестра', set: 'A' },
    { id: 'dete', sr: 'dete — deca', ru: 'ребёнок — дети', set: 'A' },
    { id: 'muz', sr: 'muž', ru: 'муж', set: 'A' },
    { id: 'zena', sr: 'žena', ru: 'жена', set: 'A' },
    { id: 'pas', sr: 'pas', ru: 'собака, пёс', set: 'A' },
    { id: 'macka', sr: 'mačka', ru: 'кошка', set: 'A' },
    { id: 'kuca', sr: 'kuća', ru: 'дом', set: 'A' },
    { id: 'imati', sr: 'imati, ja imam', ru: 'иметь', set: 'A' },
    { id: 'nemati', sr: 'nemati, ja nemam', ru: 'не иметь', set: 'A' },

    { id: 'godina', sr: 'godina', ru: 'год', set: 'B' },
    { id: 'broj', sr: 'broj', ru: 'число, номер', set: 'B' },
    { id: 'broj-telefona', sr: 'broj telefona', ru: 'номер телефона', set: 'B' },
    { id: 'blizanci', sr: 'blizanci', ru: 'близнецы', set: 'B' },
    { id: 'roditelji', sr: 'roditelji', ru: 'родители', set: 'B' },
    { id: 'unuk', sr: 'unuk', ru: 'внук', set: 'B' },
    { id: 'unuka', sr: 'unuka', ru: 'внучка', set: 'B' },
    { id: 'ujak', sr: 'ujak', ru: 'дядя (брат мамы)', set: 'B' },
    { id: 'ujna', sr: 'ujna', ru: 'тётя (жена брата мамы)', set: 'B' },
    { id: 'stric', sr: 'stric', ru: 'дядя (брат папы)', set: 'B' },
    { id: 'strina', sr: 'strina', ru: 'тётя (жена брата папы)', set: 'B' },
    { id: 'tetka', sr: 'tetka', ru: 'тётя (сестра мамы или папы)', set: 'B' },
    { id: 'tetak', sr: 'tetak', ru: 'дядя (муж сестры мамы или папы)', set: 'B' },
    { id: 'necak', sr: 'nećak', ru: 'племянник', set: 'B' },
    { id: 'necakinja', sr: 'nećakinja', ru: 'племянница', set: 'B' },
    { id: 'bratanac', sr: 'bratanac', ru: 'племянник (сын брата)', set: 'B' },
    { id: 'bratanica', sr: 'bratanica', ru: 'племянница (дочь брата)', set: 'B' },
    { id: 'sestric', sr: 'sestrić', ru: 'племянник (сын сестры)', set: 'B' },
    { id: 'sestricina', sr: 'sestričina', ru: 'племянница (дочь сестры)', set: 'B' },
    { id: 'tast', sr: 'tast', ru: 'тесть', set: 'B' },
    { id: 'tasta', sr: 'tašta', ru: 'тёща', set: 'B' },
    { id: 'svekar', sr: 'svekar', ru: 'свёкор', set: 'B' },
    { id: 'svekrva', sr: 'svekrva', ru: 'свекровь', set: 'B' },
    { id: 'momak', sr: 'momak, dečko', ru: 'парень', set: 'B' },
    { id: 'devojka', sr: 'devojka', ru: 'девушка', set: 'B' },
    { id: 'suprug', sr: 'suprug, supruga, supruzi', ru: 'супруг, супруга, супруги', set: 'B' },
    { id: 'udati-se', sr: 'udati se, ja se udam', ru: 'выйти замуж', set: 'B' },
    { id: 'ozeniti-se', sr: 'oženiti se, ja se oženim', ru: 'жениться', set: 'B' },
    { id: 'udata', sr: 'udata', ru: 'замужем', set: 'B' },
    { id: 'ozenjen', sr: 'oženjen', ru: 'женат', set: 'B' },
    { id: 'ljubimac', sr: 'ljubimac', ru: 'питомец, любимец', set: 'B' }
  ],

  verbs: {
    imati: {
      inf: 'imati', ru: 'иметь',
      pos: { ja: 'imam', ti: 'imaš', on: 'ima', mi: 'imamo', vi: 'imate', oni: 'imaju' },
      neg: { ja: 'nemam', ti: 'nemaš', on: 'nema', mi: 'nemamo', vi: 'nemate', oni: 'nemaju' }
    },
    biti: {
      inf: 'biti', ru: 'быть',
      pos: { ja: 'sam', ti: 'si', on: 'je', mi: 'smo', vi: 'ste', oni: 'su' },
      neg: { ja: 'nisam', ti: 'nisi', on: 'nije', mi: 'nismo', vi: 'niste', oni: 'nisu' },
      noQuestion: true
    }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '2.1',
      title: 'Imam veliku porodicu',
      ru: 'Глагол imati, отрицание, вопросы с «Da li…?»',
      goals: [
        'сказать, что у меня есть / чего нет (imam / nemam)',
        'задать вопрос с Da li…? и ответить на него',
        'различать biti и imati'
      ],
      blocks: [
        {
          type: 'gap', min: 5, title: 'Zagrevanje · разминка: местоимения',
          note: 'Повторяем глагол-связку из урока 1. Выберите местоимение и прочитайте фразу вслух.',
          options: ['Ja', 'Ti', 'On', 'Mi', 'Vi', 'Oni'],
          items: [
            '{Vi} ste Rusi.',
            '{Mi} imamo veliku kuću.',
            '{Ja} živim u Crnoj Gori.',
            '{On} se zove Vladislav.',
            'Goran i Milan su Srbi. {Oni} žive u Subotici.',
            '{Ti} imaš mačku.'
          ]
        },
        {
          type: 'dialog', min: 7, title: 'Strip · Porodično stablo Nikole Tesle',
          note: '1) Послушайте. 2) Прочитайте хором за диктором. 3) Прочитайте по ролям. Комикс на кириллице — попробуйте сначала прочитать его сами.',
          img: 'img/l2_strip.png',
          lines: [
            { who: 'Gosti', sr: 'Srećan rođendan!', ru: 'С днём рождения!' },
            { who: 'Nikola', sr: 'Da li su svi rođaci došli?', ru: 'Все ли родственники пришли?' },
            { who: 'Nikola', sr: 'Pogledajte na naše porodično stablo.', ru: 'Посмотрите на наше семейное древо.' },
            { who: 'Nikola', sr: 'Imam veoma veliku porodicu i svi su došli na moj rođendan.', ru: 'У меня очень большая семья, и все пришли на мой день рождения.' },
            { who: 'Nikola', sr: 'I sestre, i nećaci, i stric...', ru: 'И сёстры, и племянники, и дядя...' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Glagol «imati» · иметь',
          html:
            '<p>В русском говорят «у меня есть…», в сербском — «я имею»: [[Imam sestru]]. Этим же глаголом говорят о возрасте: [[Imam dvadeset godina]] — «мне двадцать лет».</p>' +
            '<ul><li>[[Ja imam brata i sestru.]] — У меня есть брат и сестра.</li>' +
            '<li>[[Mi imamo lepu kuću.]] — У нас красивый дом.</li>' +
            '<li>[[Ti imaš trideset godina.]] — Тебе 30 лет.</li>' +
            '<li>[[Ovde ima mnogo sunca.]] — Здесь много солнца.</li></ul>' +
            '<p><b>ima / nema</b> (3-е лицо ед. ч.) = «есть / нет» чего-либо: [[Kod kuće ima vode.]] — Дома есть вода. [[Kod kuće nema mesa.]] — Дома нет мяса.</p>' +
            '<p><b>Отрицание:</b> <i>ne</i> сливается с глаголом → <b>nemam</b>. Так бывает только у нескольких глаголов, у остальных <i>ne</i> пишется отдельно.</p>' +
            '<p><i>Imati</i> — глагол <b>a-спряжения</b>: тематическая гласная <b>a</b> перед окончанием. Всего спряжений три: a, i, e.</p>',
          tables: [
            { caption: 'imati', head: ['jednina', 'množina'], rows: [['ja imam', 'mi imamo'], ['ti imaš', 'vi imate'], ['on / ona / ono ima', 'oni / one / ona imaju']] },
            { caption: 'nemati', head: ['jednina', 'množina'], rows: [['ja nemam', 'mi nemamo'], ['ti nemaš', 'vi nemate'], ['on / ona / ono nema', 'oni / one / ona nemaju']] }
          ]
        },
        {
          type: 'gap', min: 5, title: 'Napišite oblike glagola imati · впишите форму imati',
          items: [
            'Moja majka {ima} sestru.',
            'Tvoji baka i deda {imaju} psa i mačku.',
            'Vi {imate} bratanca.',
            'Moj brat i ja {imamo} tetku.',
            'Ti {imaš} decu.',
            'Ja {imam} veliku porodicu.'
          ]
        },
        {
          type: 'gap', min: 5, title: 'Odrični oblik · отрицательная форма imati',
          items: [
            'Vi {nemate} slobodnog vremena.',
            'One {nemaju} posla. <i>(работы, чем заняться)</i>',
            'Ja {nemam} pojma. <i>— Я понятия не имею.</i>',
            'Ti {nemaš} modernog telefona.',
            'Julija {nema} strpljenja. <i>(терпения)</i>',
            'Višnja i ja {nemamo} časove <i>(уроки)</i> srpskog jezika.'
          ]
        },
        {
          type: 'text', min: 4, title: 'Pitanja · вопросы с «Da li…?»',
          html:
            '<p>Общий вопрос: <b>Da li</b> + глагол + остальное. Местоимение обычно опускают.</p>' +
            '<p><b>A:</b> [[Da li imaš brata?]]<br><b>B:</b> [[Da, imam brata.]]</p>' +
            '<p><b>A:</b> [[Da li Vi imate veliku porodicu?]]<br><b>B:</b> [[Ne, nemamo, imamo malu porodicu.]]</p>' +
            '<p>С глаголом <i>biti</i> после <i>Da li</i> стоит краткая форма: [[Da li si u restoranu?]] [[Da li su svi rođaci došli?]]</p>',
          tables: [
            { caption: 'Pitanja sa «Da li…?»', head: ['jednina', 'množina'], rows: [['Da li ja imam sestru?', 'Da li mi imamo tetku?'], ['Da li ti imaš brata?', 'Da li vi imate baku?'], ['Da li on ima ženu?', 'Da li oni imaju decu?']] }
          ]
        },
        {
          type: 'qa', mode: 'transform', min: 8, title: 'Postavite pitanja · сделайте из утверждения вопрос',
          note: 'Сначала произнесите вопрос вслух, потом запишите.',
          items: [
            { q: 'Ti si u restoranu.', a: ['Da li si u restoranu?', 'Da li ti si u restoranu?', 'Da li si ti u restoranu?'] },
            { q: 'Mi imamo brata i sestru.', a: ['Da li imamo brata i sestru?', 'Da li mi imamo brata i sestru?'] },
            { q: 'Ja sam iz Herceg Novog.', a: ['Da li sam iz Herceg Novog?', 'Da li sam ja iz Herceg Novog?', 'Da li ja sam iz Herceg Novog?'] },
            { q: 'Balša ima sina.', a: ['Da li Balša ima sina?'] },
            { q: 'Vi živite u Beogradu pet godina.', a: ['Da li živite u Beogradu pet godina?', 'Da li vi živite u Beogradu pet godina?'] },
            { q: 'Lepojka ima ćerku.', a: ['Da li Lepojka ima ćerku?'] },
            { q: 'Oni žive dobro.', a: ['Da li žive dobro?', 'Da li oni žive dobro?'] }
          ]
        },
        {
          type: 'gap', min: 7, title: 'Biti ili imati? · выберите глагол и форму',
          note: 'Формы могут быть и отрицательными.',
          items: [
            'Moja majka {ima} muža, to {je} moj otac.',
            'Koliko Vi {imate} godina?',
            'Baka i deda {imaju} pet sinova. Oni {su} srećni u braku.',
            'Ja {sam} jedino dete u porodici. {Nemam} ni brata ni sestru.',
            'Ivan i ja {nismo} Srbi. Mi {nemamo} srpski pasoš.',
            'Ti {nisi} star, {imaš} samo 30 godina.'
          ]
        },
        {
          type: 'speak', min: 9, title: 'Razgovor · говорим по очереди',
          note: 'Один спрашивает, другой отвечает полным предложением, потом меняетесь. В конце каждый придумывает ещё по 2 своих вопроса с Da li…?',
          items: [
            { q: 'Da li imaš brata ili sestru?', sample: 'Da, imam brata. / Ne, nemam ni brata ni sestru.' },
            { q: 'Da li imate veliku porodicu?', sample: 'Ne, nemamo. Imamo malu porodicu.' },
            { q: 'Da li imaš psa ili mačku?', sample: 'Imam mačku. Nemam psa.' },
            { q: 'Da li tvoja mama ima sestru?', sample: 'Da, moja mama ima sestru. To je moja tetka.' },
            { q: 'Da li imaš slobodnog vremena?', sample: 'Nemam slobodnog vremena. Imam posla.' },
            { q: 'Da li si iz Srbije?', sample: 'Ne, nisam iz Srbije. Ja sam iz Rusije.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'imam, imaš, ima, imamo, imate, imaju',
            'nemam, nemaš, nema… — ne + imati пишется слитно',
            'ima / nema = есть / нет (чего-либо)',
            'Da li + глагол…? — общий вопрос'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: семья (базовые слова)', est: 7, set: 'A' },
        { type: 'conj', title: 'Тренажёр спряжения: imati, nemati, biti', est: 5, verbs: ['imati', 'biti'], rounds: 12 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 6,
          items: [
            { a: ['Srećan rođendan!'] },
            { a: ['Da li imaš brata?'] },
            { a: ['Imam veoma veliku porodicu.'] },
            { a: ['Nemam slobodnog vremena.'] },
            { a: ['Da li su svi rođaci došli?'] },
            { a: ['Moja majka ima sestru.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'У меня есть брат и сестра.', a: ['Imam brata i sestru.', 'Ja imam brata i sestru.'] },
            { q: 'У нас большой дом.', a: ['Imamo veliku kuću.', 'Mi imamo veliku kuću.'] },
            { q: 'У тебя есть кошка?', a: ['Da li imaš mačku?', 'Da li ti imaš mačku?', 'Imaš li mačku?'] },
            { q: 'У них нет детей.', a: ['Nemaju decu.', 'Oni nemaju decu.', 'Nemaju dece.', 'Oni nemaju dece.'] },
            { q: 'У меня нет свободного времени.', a: ['Nemam slobodnog vremena.', 'Ja nemam slobodnog vremena.'] },
            { q: 'Все родственники пришли?', a: ['Da li su svi rođaci došli?'] },
            { q: 'Нет, у нас маленькая семья.', a: ['Ne, imamo malu porodicu.', 'Ne, mi imamo malu porodicu.', 'Ne, nemamo, imamo malu porodicu.'] },
            { q: 'Я не из Сербии.', a: ['Nisam iz Srbije.', 'Ja nisam iz Srbije.'] }
          ]
        },
        {
          type: 'write', title: 'Письменно: 5 вопросов партнёру', est: 5, key: 'hw-2.1-questions',
          note: 'Напишите 5 вопросов с Da li…? — зададите их на следующем занятии в разминке.',
          sample: 'Da li imaš sestru? Da li tvoj otac ima brata? Da li imate psa? Da li si iz Moskve? Da li tvoja baka ima mačku?'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '2.2',
      title: 'Brojevi i porodica',
      ru: 'Числа, возраст, родственники',
      goals: [
        'назвать любое число, номер телефона и возраст',
        'правильно выбрать godinu / godine / godina',
        'рассказать о своей семье: кто есть, как зовут, сколько лет'
      ],
      blocks: [
        {
          type: 'conj', min: 5, title: 'Zagrevanje · разминка: imati / nemati + вопросы из домашки',
          note: 'Сначала зададите друг другу вопросы, которые написали дома. Потом — 8 форм в тренажёре, вслух.',
          verbs: ['imati'], rounds: 8
        },
        {
          type: 'text', min: 8, title: 'Brojevi · числа',
          html:
            '<p>Составные числа читаются подряд, без союза: [[dvadeset pet]], [[sto pedeset šest]], [[hiljadu sedamsto osamdeset jedan]], [[pedeset hiljada dvesta pet]].</p>' +
            '<p>У сотен 200–900 есть второй вариант: [[dve stotine]], [[tri stotine]], [[pet stotina]]… Обратите внимание на <b>dvest<u>a</u></b> и <b>trist<u>a</u></b>.</p>' +
            '<p>Тысячи: [[hiljadu]] (1000), [[dve hiljade]], [[tri hiljade]], [[pet hiljada]].</p>',
          tables: [
            { caption: '0–10', head: ['', '', '', ''], rows: [['0 nula', '1 jedan', '2 dva', '3 tri'], ['4 četiri', '5 pet', '6 šest', '7 sedam'], ['8 osam', '9 devet', '10 deset', '']] },
            { caption: '11–19', head: ['', '', ''], rows: [['11 jedanaest', '12 dvanaest', '13 trinaest'], ['14 četrnaest', '15 petnaest', '16 šesnaest'], ['17 sedamnaest', '18 osamnaest', '19 devetnaest']] },
            { caption: 'Desetice i stotine', head: ['', '', ''], rows: [['20 dvadeset', '30 trideset', '40 četrdeset'], ['50 pedeset', '60 šezdeset', '70 sedamdeset'], ['80 osamdeset', '90 devedeset', '100 sto'], ['200 dvesta', '300 trista', '400 četiristo'], ['500 petsto', '600 šeststo', '700 sedamsto'], ['800 osamsto', '900 devetsto', '1000 hiljadu']] }
          ]
        },
        {
          type: 'numbers', mode: 'read', min: 7, title: 'Pročitajte brojeve · читаем числа вслух',
          note: 'По очереди: один читает число вслух, второй проверяет по подсказке. Сначала числа из курса, дальше — случайные.',
          fixed: [45, 209, 58441, 17, 1986, 864, 2023, 12350], max: 99999
        },
        {
          type: 'numbers', mode: 'phone', min: 4, title: 'Koji imaš broj telefona? · номер телефона',
          note: 'Прочитайте номера по цифрам. Потом спросите друг друга: Koji imaš broj telefona? — и назовите свой.',
          fixed: ['+381 64 962 38 65', '+7 968 457 22 31', '+44 113 543 70 00']
        },
        {
          type: 'text', min: 4, title: 'Koliko imaš godina? · возраст',
          html:
            '<p>— [[Koliko imaš godina?]] — [[Imam dvadeset pet godina.]]</p>' +
            '<p>Форма слова <i>godina</i> зависит от последней цифры:</p>',
          tables: [
            { caption: 'godinu / godine / godina', head: ['число оканчивается на', 'форма', 'пример'], rows: [['1 (но не 11)', 'godinu', 'Imam dvadeset jednu godinu.'], ['2, 3, 4 (но не 12–14)', 'godine', 'Imaš trideset tri godine.'], ['0, 5–9 и 11–19', 'godina', 'Ima pedeset šest godina.']] }
          ],
          after: '<p>С <i>godina</i> (ж. р.) числа 1 и 2 тоже женского рода: <b>jednu</b> godinu, <b>dve</b> godine. Правило работает для всех существительных, не только для лет.</p>'
        },
        {
          type: 'numbers', mode: 'age', min: 5, title: 'Godinu, godine ili godina? · выберите форму',
          note: 'Выберите окончание, затем произнесите всю фразу вслух.', rounds: 10
        },
        {
          type: 'text', min: 6, title: 'Porodica · родственники',
          img: 'img/l2_stablo.png',
          html:
            '<p>В сербском у каждого родственника своё название. «Тётя» — это три разных слова:</p>' +
            '<ul><li>[[tetka]] — сестра мамы или папы; её муж — [[tetak]]</li>' +
            '<li>[[stric]] — брат папы; его жена — [[strina]]</li>' +
            '<li>[[ujak]] — брат мамы; его жена — [[ujna]]</li>' +
            '<li>[[sestrić]], [[sestričina]] — дети сестры; [[bratanac]], [[bratanica]] — дети брата; [[nećak]], [[nećakinja]] — общее слово</li></ul>' +
            '<p><b>se</b> — возвратная частица (русское «-ся»), пишется отдельно: [[Ona se zove Maja.]] — её зовут Майя. Без <i>se</i> смысл другой: [[On zove mamu.]] — он зовёт маму.</p>'
        },
        {
          type: 'gap', bank: true, min: 7, title: 'Pročitajte tekst i dopunite · вставьте пропущенные слова',
          note: 'Смотрите на семейное древо семьи Павлович. После проверки прочитайте текст вслух целиком.',
          img: 'img/l2_stablo.png',
          items: [
            'Ćao! Zovem se Ljubica. Imam {21} godinu. Imam ogromnu porodicu. Imamo {prezime} Pavlović. Živimo u Beogradu na Dorćolu u velikom stanu. Imam baku {Milicu} i {deda|dedu} Sergeja. Baka Milica ima 77 godina, a deda Sergej {ima} 78 godina. Moja majka se zove {Snežana}. Ona ima 52 godine. Moj otac je Mihajlo. Ima 57 {godina}. Imam dva brata. Marko i Goran su blizanci i imaju 13 godina. Imamo {psa}. Njegovo ime je Laki. Nemamo mačku.'
          ]
        },
        {
          type: 'speak', min: 5, title: 'Odgovorite na pitanja · ответьте по древу',
          img: 'img/l2_stablo.png',
          items: [
            { q: 'Koje članove porodice Ljubica nije navela?', sample: 'Ljubica nije navela strica Nemanju, strinu Katarinu i Strahinju.' },
            { q: 'Koliko godina ima stric Nemanja?', sample: 'Stric Nemanja ima pedeset jednu godinu.' },
            { q: 'Koliko godina ima strina Katarina?', sample: 'Strina Katarina ima četrdeset devet godina.' },
            { q: 'Kako se zove bratanac?', sample: 'Bratanac se zove Strahinja.' }
          ]
        },
        {
          type: 'match', min: 4, title: 'Spojite reči sa prevodom · соедините пары',
          pairs: [
            ['stric', 'дядя (брат папы)'], ['ujak', 'дядя (брат мамы)'], ['tetka', 'тётя (сестра мамы или папы)'],
            ['strina', 'тётя (жена брата папы)'], ['ujna', 'тётя (жена брата мамы)'], ['bratanac', 'племянник (сын брата)'],
            ['bratanica', 'племянница (дочь брата)'], ['sestrić', 'племянник (сын сестры)'], ['sestričina', 'племянница (дочь сестры)'],
            ['unuk', 'внук'], ['unuka', 'внучка'], ['ćerka', 'дочь']
          ]
        },
        {
          type: 'speak', min: 5, title: 'Moja porodica · расскажите о своей семье',
          note: 'Каждый рассказывает 1–2 минуты по образцу текста Любицы. Второй задаёт 2 уточняющих вопроса: Koliko godina ima…? Kako se zove…? Da li imaš…?',
          items: [
            { q: 'Kako se zoveš? Koliko imaš godina?', sample: 'Zovem se … Imam … godina.' },
            { q: 'Da li imaš veliku porodicu? Gde živite?', sample: 'Imam malu porodicu. Živimo u …' },
            { q: 'Kako se zovu tvoji roditelji? Koliko imaju godina?', sample: 'Moja majka se zove … Ona ima … godina. Moj otac je … Ima … godina.' },
            { q: 'Da li imaš brata, sestru, strica, ujaka, tetku?', sample: 'Imam tetku. Zove se … Nemam strica.' }
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: родственники и числа', est: 8, set: 'B' },
        {
          type: 'letters', title: 'Pogodite ko su ovi rođaci · угадайте родственника', est: 4,
          items: [
            { clue: 'mama i tata', word: 'roditelji' },
            { clue: 'mama moje mame', word: 'baka' },
            { clue: 'sin moga oca', word: 'brat' },
            { clue: 'ćerka moje ćerke', word: 'unuka' },
            { clue: 'tatin brat', word: 'stric' },
            { clue: 'mamin brat', word: 'ujak' },
            { clue: 'sestra moje mame', word: 'tetka' },
            { clue: 'moj pas ili mačka', word: 'ljubimac' }
          ]
        },
        { type: 'numbers', mode: 'listen', title: 'Числа на слух: услышьте и запишите цифрами', est: 5, rounds: 10, max: 9999 },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Сколько тебе лет?', a: ['Koliko imaš godina?', 'Koliko godina imaš?'] },
            { q: 'Мне тридцать лет.', a: ['Imam trideset godina.', 'Ja imam trideset godina.', 'Imam 30 godina.'] },
            { q: 'Бабушке семьдесят семь лет.', a: ['Baka ima sedamdeset sedam godina.', 'Baka ima 77 godina.'] },
            { q: 'Моего дядю (брата папы) зовут Неманья.', a: ['Moj stric se zove Nemanja.'] },
            { q: 'У меня два брата.', a: ['Imam dva brata.', 'Ja imam dva brata.'] },
            { q: 'Они близнецы.', a: ['Oni su blizanci.'] },
            { q: 'Какой у тебя номер телефона?', a: ['Koji imaš broj telefona?', 'Koji je tvoj broj telefona?'] },
            { q: 'У нас есть пёс. Его зовут Лаки.', a: ['Imamo psa. Zove se Laki.', 'Imamo psa. Njegovo ime je Laki.', 'Imamo psa. On se zove Laki.'] }
          ]
        },
        {
          type: 'write', title: 'Napišite tekst o svojoj porodici · текст о своей семье + аудиозапись', est: 12, key: 'hw-2.2-porodica', record: true,
          note: 'Koliko imaju godina, kako se zovu i gde žive? 8–10 предложений. Затем прочитайте текст вслух и запишите себя; на следующем занятии прочитаете его партнёру.',
          sample: 'Ćao! Zovem se Ekaterina. Imam 25 godina. Imam malu porodicu. Imamo prezime Danilkina. Živimo u Sankt Peterburgu. Imam baku Zinaidu. Baka Zinaida ima 79 godina. Moja majka se zove Ina. Ona ima 56 godina. Moj otac je Aleksej. Ima 55 godina. Nemamo mačku ni psa.'
        }
      ]
    }
  ]
});
