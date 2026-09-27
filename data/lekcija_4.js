// Lekcija 4 - Svakodnevnica. Three 60-minute sessions: week & daily routine, e-group verbs, accusative + weekly plans.
COURSE.register({
  n: 4,
  title: 'Svakodnevnica',
  ru: 'Дни недели, распорядок дня, глаголы е-группы, винительный падеж',

  vocab: [
    { id: 'ponedeljak', sr: 'ponedeljak — u ponedeljak, ponedeljkom', ru: 'понедельник — в понедельник, по понедельникам', set: 'A' },
    { id: 'utorak', sr: 'utorak — u utorak, utorkom', ru: 'вторник — во вторник, по вторникам', set: 'A' },
    { id: 'sreda', sr: 'sreda — u sredu, sredom', ru: 'среда — в среду, по средам', set: 'A' },
    { id: 'cetvrtak', sr: 'četvrtak — u četvrtak, četvrtkom', ru: 'четверг — в четверг, по четвергам', set: 'A' },
    { id: 'petak', sr: 'petak — u petak, petkom', ru: 'пятница — в пятницу, по пятницам', set: 'A' },
    { id: 'subota', sr: 'subota — u subotu, subotom', ru: 'суббота — в субботу, по субботам', set: 'A' },
    { id: 'nedelja', sr: 'nedelja — u nedelju, nedeljom', ru: 'воскресенье — в воскресенье, по воскресеньям', set: 'A' },
    { id: 'sedmica', sr: 'nedelja, sedmica', ru: 'неделя', set: 'A' },
    { id: 'radni-dani', sr: 'radni dani, neradni dani, vikend', ru: 'рабочие дни, выходные, уик-энд', set: 'A' },
    { id: 'raspored', sr: 'raspored', ru: 'расписание', set: 'A' },
    { id: 'svakodnevnica', sr: 'svakodnevnica', ru: 'повседневная жизнь, будни', set: 'A' },
    { id: 'sta-radis', sr: 'Šta radiš?', ru: 'Что делаешь?', set: 'A' },
    { id: 'pune-ruke', sr: 'Imam pune ruke posla!', ru: 'У меня забот полон рот!', set: 'A' },
    { id: 'katastrofa', sr: 'To je prava katastrofa.', ru: 'Это настоящая катастрофа.', set: 'A' },
    { id: 'zaboravljati', sr: 'zaboravljati, ja zaboravljam', ru: 'забывать', set: 'A' },
    { id: 'sve', sr: 'sve', ru: 'всё', set: 'A' },
    { id: 'uzmi', sr: 'Uzmi! (uzeti, ja uzmem)', ru: 'Возьми! (взять)', set: 'A' },
    { id: 'genije', sr: 'genije', ru: 'гений', set: 'A' },
    { id: 'brate', sr: 'brate!', ru: 'брат! дружище! (обращение)', set: 'A' },
    { id: 'ujutru-uvece', sr: 'ujutru, popodne, uveče, noću', ru: 'утром, после обеда, вечером, ночью', set: 'A' },
    { id: 'danas', sr: 'danas, sutra, juče', ru: 'сегодня, завтра, вчера', set: 'A' },
    { id: 'obicno', sr: 'obično, uvek, nikad, ponekad', ru: 'обычно, всегда, никогда, иногда', set: 'A' },
    { id: 'prvi-put', sr: 'prvi put', ru: 'в первый раз', set: 'A' },

    { id: 'buditi-se', sr: 'buditi se, ja se budim', ru: 'просыпаться', set: 'B' },
    { id: 'umivati-se', sr: 'umivati se, ja se umivam', ru: 'умываться', set: 'B' },
    { id: 'prati-zube', sr: 'prati zube, ja perem zube', ru: 'чистить зубы', set: 'B' },
    { id: 'tusirati-se', sr: 'tuširati se, ja se tuširam', ru: 'принимать душ', set: 'B' },
    { id: 'oblaciti-se', sr: 'oblačiti se, ja se oblačim', ru: 'одеваться', set: 'B' },
    { id: 'doruckovati', sr: 'doručkovati, ja doručkujem', ru: 'завтракать', set: 'B' },
    { id: 'rucati', sr: 'ručati, ja ručam', ru: 'обедать', set: 'B' },
    { id: 'vecerati', sr: 'večerati, ja večeram', ru: 'ужинать', set: 'B' },
    { id: 'piti-kafu', sr: 'piti kafu, ja pijem kafu', ru: 'пить кофе', set: 'B' },
    { id: 'ici-na-posao', sr: 'ići na posao, ja idem na posao', ru: 'идти на работу', set: 'B' },
    { id: 'raditi4', sr: 'raditi, ja radim', ru: 'работать', set: 'B' },
    { id: 'pisati', sr: 'pisati, ja pišem', ru: 'писать', set: 'B' },
    { id: 'spremati-hranu', sr: 'spremati hranu, ja spremam hranu', ru: 'готовить еду', set: 'B' },
    { id: 'kuvati', sr: 'kuvati, ja kuvam', ru: 'готовить, варить', set: 'B' },
    { id: 'kupovati', sr: 'kupovati, ja kupujem', ru: 'покупать', set: 'B' },
    { id: 'setati-se', sr: 'šetati se, ja se šetam', ru: 'гулять', set: 'B' },
    { id: 'gledati-tv', sr: 'gledati televiziju, ja gledam televiziju', ru: 'смотреть телевизор', set: 'B' },
    { id: 'citati-knjigu', sr: 'čitati knjigu, ja čitam knjigu', ru: 'читать книгу', set: 'B' },
    { id: 'ici-na-spavanje', sr: 'ići na spavanje, ja idem na spavanje', ru: 'идти спать', set: 'B' },
    { id: 'stanovati', sr: 'stanovati, ja stanujem', ru: 'проживать', set: 'B' },
    { id: 'putovati4', sr: 'putovati, ja putujem', ru: 'путешествовать', set: 'B' },
    { id: 'namirnice', sr: 'namirnice, prodavnica', ru: 'продукты, магазин', set: 'B' },
    { id: 'hrana', sr: 'hrana', ru: 'еда', set: 'B' },

    { id: 'jesti', sr: 'jesti, ja jedem', ru: 'есть', set: 'C' },
    { id: 'piti', sr: 'piti, ja pijem', ru: 'пить', set: 'C' },
    { id: 'slati', sr: 'slati, ja šaljem', ru: 'слать, отправлять', set: 'C' },
    { id: 'ucestvovati', sr: 'učestvovati, ja učestvujem', ru: 'участвовать', set: 'C' },
    { id: 'sredjivati', sr: 'sređivati, ja sređujem', ru: 'убираться, приводить в порядок', set: 'C' },
    { id: 'ici', sr: 'ići, ja idem', ru: 'идти', set: 'C' },
    { id: 'zvati', sr: 'zvati, ja zovem', ru: 'звать, звонить', set: 'C' },
    { id: 'mejl', sr: 'mejl, mejlovi', ru: 'письмо (e-mail)', set: 'C' },
    { id: 'kolega', sr: 'kolega, koleginica', ru: 'коллега', set: 'C' },
    { id: 'kompanija', sr: 'međunarodna kompanija', ru: 'международная компания', set: 'C' },
    { id: 'pismo', sr: 'pismo', ru: 'письмо', set: 'C' },
    { id: 'jabuka', sr: 'jabuka', ru: 'яблоко', set: 'C' },
    { id: 'voda-sok', sr: 'voda, sok, čaj, kafa, mleko, vino', ru: 'вода, сок, чай, кофе, молоко, вино', set: 'C' },
    { id: 'pljeskavica', sr: 'pljeskavica', ru: 'плескавица (котлета на гриле)', set: 'C' },
    { id: 'suma-park', sr: 'šuma, park, more, priroda', ru: 'лес, парк, море, природа', set: 'C' },
    { id: 'prozor', sr: 'prozor', ru: 'окно', set: 'C' },
    { id: 'ulica', sr: 'ulica', ru: 'улица', set: 'C' },
    { id: 'fudbal', sr: 'fudbal', ru: 'футбол', set: 'C' },
    { id: 'kroz', sr: 'kroz (+ akuzativ)', ru: 'через, сквозь', set: 'C' },
    { id: 'u-na', sr: 'u / na (+ akuzativ: куда?)', ru: 'в / на (направление)', set: 'C' },
    { id: 'obozavati', sr: 'obožavati, ja obožavam', ru: 'обожать', set: 'C' },
    { id: 'planirati', sr: 'planirati, ja planiram', ru: 'планировать', set: 'C' },
    { id: 'planovi', sr: 'planovi za nedelju', ru: 'планы на неделю', set: 'C' },
    { id: 'sat', sr: 'u 10 sati ujutru', ru: 'в 10 часов утра', set: 'C' }
  ],

  verbs: {
    jesti: { inf: 'jesti', ru: 'есть', pos: { ja: 'jedem', ti: 'jedeš', on: 'jede', mi: 'jedemo', vi: 'jedete', oni: 'jedu' }, neg: { ja: 'ne jedem', ti: 'ne jedeš', on: 'ne jede', mi: 'ne jedemo', vi: 'ne jedete', oni: 'ne jedu' } },
    piti: { inf: 'piti', ru: 'пить', pos: { ja: 'pijem', ti: 'piješ', on: 'pije', mi: 'pijemo', vi: 'pijete', oni: 'piju' }, neg: { ja: 'ne pijem', ti: 'ne piješ', on: 'ne pije', mi: 'ne pijemo', vi: 'ne pijete', oni: 'ne piju' } },
    pisati: { inf: 'pisati', ru: 'писать', pos: { ja: 'pišem', ti: 'pišeš', on: 'piše', mi: 'pišemo', vi: 'pišete', oni: 'pišu' }, neg: { ja: 'ne pišem', ti: 'ne pišeš', on: 'ne piše', mi: 'ne pišemo', vi: 'ne pišete', oni: 'ne pišu' } },
    ici: { inf: 'ići', ru: 'идти', pos: { ja: 'idem', ti: 'ideš', on: 'ide', mi: 'idemo', vi: 'idete', oni: 'idu' }, neg: { ja: 'ne idem', ti: 'ne ideš', on: 'ne ide', mi: 'ne idemo', vi: 'ne idete', oni: 'ne idu' } },
    prati: { inf: 'prati', ru: 'мыть', pos: { ja: 'perem', ti: 'pereš', on: 'pere', mi: 'peremo', vi: 'perete', oni: 'peru' }, neg: { ja: 'ne perem', ti: 'ne pereš', on: 'ne pere', mi: 'ne peremo', vi: 'ne perete', oni: 'ne peru' } },
    putovati: { inf: 'putovati', ru: 'путешествовать', pos: { ja: 'putujem', ti: 'putuješ', on: 'putuje', mi: 'putujemo', vi: 'putujete', oni: 'putuju' }, neg: { ja: 'ne putujem', ti: 'ne putuješ', on: 'ne putuje', mi: 'ne putujemo', vi: 'ne putujete', oni: 'ne putuju' } },
    kupovati: { inf: 'kupovati', ru: 'покупать', pos: { ja: 'kupujem', ti: 'kupuješ', on: 'kupuje', mi: 'kupujemo', vi: 'kupujete', oni: 'kupuju' }, neg: { ja: 'ne kupujem', ti: 'ne kupuješ', on: 'ne kupuje', mi: 'ne kupujemo', vi: 'ne kupujete', oni: 'ne kupuju' } },
    doruckovati: { inf: 'doručkovati', ru: 'завтракать', pos: { ja: 'doručkujem', ti: 'doručkuješ', on: 'doručkuje', mi: 'doručkujemo', vi: 'doručkujete', oni: 'doručkuju' }, neg: { ja: 'ne doručkujem', ti: 'ne doručkuješ', on: 'ne doručkuje', mi: 'ne doručkujemo', vi: 'ne doručkujete', oni: 'ne doručkuju' } },
    slati: { inf: 'slati', ru: 'отправлять', pos: { ja: 'šaljem', ti: 'šalješ', on: 'šalje', mi: 'šaljemo', vi: 'šaljete', oni: 'šalju' }, neg: { ja: 'ne šaljem', ti: 'ne šalješ', on: 'ne šalje', mi: 'ne šaljemo', vi: 'ne šaljete', oni: 'ne šalju' } },
    ziveti: { inf: 'živeti', ru: 'жить', pos: { ja: 'živim', ti: 'živiš', on: 'živi', mi: 'živimo', vi: 'živite', oni: 'žive' }, neg: { ja: 'ne živim', ti: 'ne živiš', on: 'ne živi', mi: 'ne živimo', vi: 'ne živite', oni: 'ne žive' } },
    raditi: { inf: 'raditi', ru: 'работать', pos: { ja: 'radim', ti: 'radiš', on: 'radi', mi: 'radimo', vi: 'radite', oni: 'rade' }, neg: { ja: 'ne radim', ti: 'ne radiš', on: 'ne radi', mi: 'ne radimo', vi: 'ne radite', oni: 'ne rade' } },
    gledati: { inf: 'gledati', ru: 'смотреть', pos: { ja: 'gledam', ti: 'gledaš', on: 'gleda', mi: 'gledamo', vi: 'gledate', oni: 'gledaju' }, neg: { ja: 'ne gledam', ti: 'ne gledaš', on: 'ne gleda', mi: 'ne gledamo', vi: 'ne gledate', oni: 'ne gledaju' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '4.1',
      title: 'Raspored i rutina',
      ru: 'Дни недели, «в понедельник» и «по понедельникам», распорядок дня',
      goals: [
        'назвать дни недели и сказать «в среду» / «по средам»',
        'описать своё утро, день и вечер',
        'использовать возвратные глаголы: budim se, umivam se, oblačim se'
      ],
      blocks: [
        {
          type: 'dialog', min: 6, title: 'Strip · Teslina svakodnevnica',
          note: 'Прочитайте кириллицу сами, потом проверьте по строкам. Обратите внимание на обращение «brate» и на повелительное «Uzmi!».',
          img: 'img/l4_strip.png',
          lines: [
            { who: 'Nikola', sr: 'Imam pune ruke posla, brate. Nemam vremena da pričam.', ru: 'У меня забот полон рот, дружище. Нет времени разговаривать.' },
            { who: 'Emir', sr: 'Šta radiš?', ru: 'Что делаешь?' },
            { who: 'Nikola', sr: 'To je prava katastrofa. Nemam normalnog rasporeda i zaboravljam sve.', ru: 'Это настоящая катастрофа. У меня нет нормального расписания, и я всё забываю.' },
            { who: 'Emir', sr: 'Uzmi planer.', ru: 'Возьми планер.' },
            { who: 'Nikola', sr: 'Ti si genije!', ru: 'Ты гений!' }
          ]
        },
        {
          type: 'text', min: 7, title: 'Dani u nedelji · дни недели',
          html:
            '<p>[[radni dani]] — рабочие дни, [[neradni dani]] / [[vikend]] — выходные. Слово [[nedelja]] значит и «воскресенье», и «неделя» (ещё [[sedmica]]).</p>' +
            '<p>Два способа сказать, когда: <b>u + день</b> (один раз: в среду) и <b>день + -om</b> (регулярно: по средам).</p>',
          tables: [
            { caption: 'Kada?', head: ['dan', 'u … (один раз)', '…om (регулярно)'], rows: [
              ['ponedeljak', 'u ponedeljak', 'ponedeljkom'], ['utorak', 'u utorak', 'utorkom'], ['sreda', 'u sredu', 'sredom'], ['četvrtak', 'u četvrtak', 'četvrtkom'],
              ['petak', 'u petak', 'petkom'], ['subota', 'u subotu', 'subotom'], ['nedelja', 'u nedelju', 'nedeljom'], ['vikend', 'za vikend', 'vikendom']
            ] }
          ],
          after: '<p>Женские дни (sreda, subota, nedelja) после <i>u</i> получают <b>-u</b>: [[u sredu]], [[u subotu]]. Слова [[obično]], [[uvek]], [[svaki]] подсказывают регулярность.</p>'
        },
        {
          type: 'mc', min: 6, title: 'U četvrtak ili četvrtkom? · один раз или регулярно',
          note: 'Смотрите на смысл: действие однократное или повторяется?',
          items: [
            { q: '… idem prvi put kod lekara.', options: ['U petak', 'Petkom'], a: 'U petak', ru: 'в первый раз' },
            { q: 'Prodavnica je zatvorena ….', options: ['u nedelju', 'nedeljom'], a: 'nedeljom', ru: 'всегда закрыт по воскресеньям' },
            { q: 'Goran uvek ide na posao ….', options: ['u ponedeljak', 'ponedeljkom'], a: 'ponedeljkom' },
            { q: 'Želimo da gledamo film ….', options: ['u subotu', 'subotom'], a: 'u subotu', ru: 'в эту субботу' },
            { q: '… obično imate čas srpskog jezika.', options: ['U sredu', 'Sredom'], a: 'Sredom' },
            { q: 'Ideš li kod bake …?', options: ['u utorak', 'utorkom'], a: 'u utorak', ru: 'в этот вторник' },
            { q: '… je moj rođendan.', options: ['U četvrtak', 'Četvrtkom'], a: 'U četvrtak' },
            { q: 'Deca ne idu u školu ….', options: ['u subotu', 'subotom'], a: 'subotom' }
          ]
        },
        {
          type: 'text', min: 10, title: 'Rutina · наши действия',
          html:
            '<p>Прочитайте глаголы и найдите среди них а- и и-спряжения (форма «я» подсказывает). Глаголы, у которых перед окончанием стоит <b>e</b> — е-спряжение, о нём поговорим на следующем занятии.</p>' +
            '<p>Возвратная частица <b>se</b> пишется отдельно и обычно стоит на втором месте: [[Ja se budim u sedam.]] [[Budim se u sedam.]]</p>',
          tables: [
            { caption: 'Jutro', head: ['глагол', 'ja …', 'перевод'], rows: [['buditi se', 'ja se budim', 'просыпаться'], ['umivati se', 'ja se umivam', 'умываться'], ['prati zube', 'ja perem zube', 'чистить зубы'], ['tuširati se', 'ja se tuširam', 'принимать душ'], ['oblačiti se', 'ja se oblačim', 'одеваться'], ['doručkovati', 'ja doručkujem', 'завтракать'], ['piti kafu', 'ja pijem kafu', 'пить кофе']] },
            { caption: 'Dan', head: ['глагол', 'ja …', 'перевод'], rows: [['ići na posao', 'ja idem na posao', 'идти на работу'], ['raditi', 'ja radim', 'работать'], ['pisati mejlove', 'ja pišem mejlove', 'писать письма'], ['ručati', 'ja ručam', 'обедать'], ['kupovati namirnice', 'ja kupujem namirnice', 'покупать продукты'], ['šetati se', 'ja se šetam', 'гулять']] },
            { caption: 'Veče', head: ['глагол', 'ja …', 'перевод'], rows: [['spremati hranu', 'ja spremam hranu', 'готовить еду'], ['večerati', 'ja večeram', 'ужинать'], ['gledati televiziju', 'ja gledam televiziju', 'смотреть телевизор'], ['čitati knjigu', 'ja čitam knjigu', 'читать книгу'], ['ići na spavanje', 'ja idem na spavanje', 'идти спать']] }
          ]
        },
        {
          type: 'match', min: 6, title: 'Spojite · глагол и перевод',
          pairs: [
            ['buditi se', 'просыпаться'], ['umivati se', 'умываться'], ['prati zube', 'чистить зубы'], ['oblačiti se', 'одеваться'], ['doručkovati', 'завтракать'], ['ručati', 'обедать'],
            ['večerati', 'ужинать'], ['spremati hranu', 'готовить еду'], ['šetati se', 'гулять'], ['ići na spavanje', 'идти спать'], ['tuširati se', 'принимать душ'], ['kupovati', 'покупать']
          ]
        },
        {
          type: 'gap', min: 6, title: 'Moj dan · впишите форму «я»',
          note: 'В скобках инфинитив. Не забывайте про se.',
          items: [
            'Ujutru {se budim} (buditi se) u sedam sati i {se umivam|umivam se} (umivati se).',
            'Zatim {perem} (prati) zube i {se oblačim|oblačim se} (oblačiti se).',
            'U osam {doručkujem} (doručkovati) i {pijem} (piti) kafu.',
            'U devet {idem} (ići) na posao. Na poslu {radim} (raditi) i {pišem} (pisati) mejlove.',
            'Popodne {ručam} (ručati) i {kupujem} (kupovati) namirnice.',
            'Uveče {spremam} (spremati) hranu, {večeram} (večerati) i {gledam} (gledati) televiziju.',
            'U jedanaest {idem} (ići) na spavanje.'
          ]
        },
        {
          type: 'order', min: 5, title: 'Redosled reči · соберите предложение',
          items: ['Budim se u sedam sati.', 'Ujutru pijem kafu.', 'Ponedeljkom idem na posao.', 'Uveče gledamo televiziju.', 'Subotom se šetamo u parku.', 'Da li se tuširaš ujutru?']
        },
        {
          type: 'speak', min: 12, title: 'Moj dan · расскажите о своём дне',
          note: 'Каждый рассказывает своё утро, день и вечер (по 3–4 действия). Партнёр задаёт вопросы: Kada se budiš? Šta radiš uveče? Затем сравните: Ti se budiš u sedam, a ja u osam.',
          items: [
            { q: 'Kada se budiš? Šta radiš ujutru?', sample: 'Budim se u sedam. Umivam se, perem zube i pijem kafu.' },
            { q: 'Šta radiš popodne?', sample: 'Idem na posao. Radim i pišem mejlove. Ručam u dva.' },
            { q: 'Šta radiš uveče?', sample: 'Uveče spremam hranu, večeram i čitam knjigu.' },
            { q: 'Šta radiš vikendom?', sample: 'Subotom se šetam u parku, nedeljom gledam film.' },
            { q: 'Kada ideš na spavanje?', sample: 'Idem na spavanje u jedanaest.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'ponedeljak, utorak, sreda, četvrtak, petak, subota, nedelja',
            'u sredu (один раз) — sredom (регулярно)',
            'Budim se, umivam se, oblačim se — se на втором месте',
            'Ujutru doručkujem, popodne ručam, uveče večeram'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: дни недели и фразы комикса', est: 7, set: 'A' },
        { type: 'flash', title: 'Карточки: глаголы распорядка дня', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Šta radiš?'] }, { a: ['Imam pune ruke posla.'] }, { a: ['Budim se u sedam sati.'] }, { a: ['Sredom imamo čas srpskog jezika.'] },
            { a: ['U subotu gledamo film.'] }, { a: ['Uveče idem na spavanje.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'В понедельник я иду к врачу.', a: ['U ponedeljak idem kod lekara.', 'U ponedeljak ja idem kod lekara.'] },
            { q: 'По пятницам мы ужинаем в ресторане.', a: ['Petkom večeramo u restoranu.', 'Petkom mi večeramo u restoranu.'] },
            { q: 'Утром я умываюсь и чищу зубы.', a: ['Ujutru se umivam i perem zube.', 'Ujutru se umivam i perem zube.'] },
            { q: 'Что ты делаешь вечером?', a: ['Šta radiš uveče?', 'Šta ti radiš uveče?'] },
            { q: 'Я всё забываю.', a: ['Zaboravljam sve.', 'Ja zaboravljam sve.', 'Sve zaboravljam.'] },
            { q: 'Магазин закрыт по воскресеньям.', a: ['Prodavnica je zatvorena nedeljom.', 'Nedeljom je prodavnica zatvorena.'] },
            { q: 'Ты гений!', a: ['Ti si genije!'] },
            { q: 'У меня нет времени разговаривать.', a: ['Nemam vremena da pričam.', 'Ja nemam vremena da pričam.'] }
          ]
        },
        {
          type: 'write', title: 'Moj radni dan · мой рабочий день + запись', est: 7, key: 'hw-4.1-dan', record: true,
          note: '8 предложений о своём обычном дне с указанием времени (u sedam, u devet…). Запишите чтение вслух.',
          sample: 'Ponedeljkom se budim u sedam. Umivam se, perem zube i oblačim se. U osam doručkujem i pijem kafu. U devet idem na posao. Ručam u dva. Uveče spremam hranu i večeram. Posle večere čitam knjigu. U jedanaest idem na spavanje.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '4.2',
      title: 'Glagoli e-grupe',
      ru: 'Глаголы е-спряжения: jesti, piti, pisati, ići, putovati',
      goals: [
        'спрягать глаголы е-группы, включая -ovati → -ujem',
        'различать три спряжения по форме «я»',
        'рассказать, что вы едите, пьёте, покупаете и куда ездите'
      ],
      blocks: [
        {
          type: 'conj', min: 5, title: 'Zagrevanje · разминка: и-глаголы и распорядок',
          note: 'Сначала прочитайте партнёру домашний текст о рабочем дне, потом — 8 форм вслух.',
          verbs: ['ziveti', 'raditi', 'gledati'], rounds: 8
        },
        {
          type: 'text', min: 10, title: 'Glagoli e-grupe · е-спряжение',
          html:
            '<p>Третья, самая сложная группа: инфинитив часто не похож на форму настоящего времени, многие глаголы нужно запомнить:</p>' +
            '<ul><li>[[jesti — ja jedem]] (есть), [[piti — ja pijem]] (пить), [[pisati — ja pišem]] (писать), [[slati — ja šaljem]] (отправлять), [[ići — ja idem]] (идти), [[prati — ja perem]] (мыть), [[zvati se — ja se zovem]] (зваться)</li></ul>' +
            '<p>Есть и закономерность: суффиксы <b>-ova-</b> и <b>-iva-</b> в настоящем времени превращаются в <b>-uje-</b>:</p>' +
            '<ul><li>[[putovati — ja putujem]], [[kupovati — ja kupujem]], [[stanovati — ja stanujem]], [[doručkovati — ja doručkujem]], [[učestvovati — ja učestvujem]], [[sređivati — ja sređujem]]</li></ul>',
          tables: [
            { caption: 'jesti', head: ['jednina', 'množina'], rows: [['ja jedem', 'mi jedemo'], ['ti jedeš', 'vi jedete'], ['on / ona / ono jede', 'oni / one / ona jedu']] },
            { caption: 'putovati', head: ['jednina', 'množina'], rows: [['ja putujem', 'mi putujemo'], ['ti putuješ', 'vi putujete'], ['on / ona / ono putuje', 'oni / one / ona putuju']] },
            { caption: 'Tri grupe', head: ['группа', 'ja', 'ti', 'oni'], rows: [['a: imati', 'imam', 'imaš', 'imaju'], ['i: živeti', 'živim', 'živiš', 'žive'], ['e: jesti', 'jedem', 'jedeš', 'jedu']] }
          ]
        },
        {
          type: 'mc', min: 6, title: 'Izaberite oblik · выберите форму',
          items: [
            { q: 'U petak mi … u restoranu.', options: ['idemo', 'jedem', 'idem', 'jedemo'], a: 'jedemo' },
            { q: 'Svako veče ti … zube.', options: ['pereš', 'prati', 'pere', 'pratiš'], a: 'pereš' },
            { q: 'Da li govorite i … srpski?', options: ['pisate', 'pišete', 'pisaš', 'pišeš'], a: 'pišete' },
            { q: 'Ja … mamu utorkom.', options: ['zovem', 'zovem se', 'zovim', 'zovim se'], a: 'zovem' },
            { q: 'Oni ne rade i ne … na posao.', options: ['ide', 'iću', 'iće', 'idu'], a: 'idu' },
            { q: 'Ona … kafu svako jutro.', options: ['pije', 'piti', 'pijem', 'piju'], a: 'pije' },
            { q: 'Mi … po Evropi svakog leta.', options: ['putovamo', 'putujemo', 'putuju', 'putujete'], a: 'putujemo' },
            { q: 'Ti … namirnice subotom.', options: ['kupuješ', 'kupovaš', 'kupuje', 'kupujem'], a: 'kupuješ' }
          ]
        },
        {
          type: 'gap', bank: true, min: 5, title: 'Popunite · подходящий глагол из списка',
          items: [
            'Subotom {kupujemo} namirnice u prodavnici. (mi)', '{Doručkujem} u hotelu. (ja)', 'Moj prijatelj Nikolaj i ja {doručkujemo} na poslu.',
            'Da li Vi {putujete} po Evropi?', 'Milica {stanuje} na Novom Beogradu.', 'Moji rođaci nikad ne {putuju}.'
          ]
        },
        {
          type: 'sort', min: 7, title: 'Tri grupe · распределите глаголы по спряжениям',
          note: 'Ориентируйтесь на форму «я», а не на инфинитив.',
          groups: ['a-grupa', 'e-grupa', 'i-grupa'],
          items: [
            { w: 'kuvati', g: 'a-grupa', hint: 'ja kuvam' }, { w: 'piti', g: 'e-grupa', hint: 'ja pijem' }, { w: 'imati', g: 'a-grupa', hint: 'ja imam' }, { w: 'živeti', g: 'i-grupa', hint: 'ja živim' },
            { w: 'želeti', g: 'i-grupa', hint: 'ja želim' }, { w: 'čitati', g: 'a-grupa', hint: 'ja čitam' }, { w: 'voleti', g: 'i-grupa', hint: 'ja volim' }, { w: 'raditi', g: 'i-grupa', hint: 'ja radim' },
            { w: 'umivati se', g: 'a-grupa', hint: 'ja se umivam' }, { w: 'pisati', g: 'e-grupa', hint: 'ja pišem' }, { w: 'putovati', g: 'e-grupa', hint: 'ja putujem' }, { w: 'jesti', g: 'e-grupa', hint: 'ja jedem' }
          ]
        },
        {
          type: 'gap', min: 8, title: 'Lazar · впишите глаголы в нужной форме',
          note: 'В скобках инфинитив. После проверки прочитайте текст вслух.',
          listen: true,
          items: [
            '{Zovem se} (zvati se) Lazar. Moje prezime {je} (biti) Nikolić. {Imam} (imati) 46 godina.',
            '{Radim} (raditi) u velikoj međunarodnoj kompaniji i {idem} (ići) na posao od ponedeljka do petka. Na poslu moje kolege i ja {pišemo} (pisati) mejlove.',
            'Uveče moja deca {gledaju} (gledati) TV, ja {pijem} (piti) čaj, a žena {čita} (čitati) knjigu.',
            'Petkom moja žena i ja {kupujemo} (kupovati) hranu i {kuvamo} (kuvati) zajedno. Nedeljom uvek {večeramo} (večerati) sa celom porodicom.'
          ]
        },
        {
          type: 'conj', min: 7, title: 'Trening · е-глаголы вслух',
          verbs: ['jesti', 'piti', 'pisati', 'ici', 'putovati', 'kupovati', 'prati'], rounds: 10
        },
        {
          type: 'speak', min: 10, title: 'Razgovor · что ты ешь, пьёшь, куда идёшь?',
          note: 'Вопрос, полный ответ, потом встречный вопрос. В конце расскажите о партнёре: On pije kafu, ona jede…',
          items: [
            { q: 'Šta jedeš za doručak? Šta piješ ujutru?', sample: 'Za doručak jedem jaja i hleb. Pijem kafu sa mlekom.' },
            { q: 'Da li pišeš mejlove na poslu? Kome pišeš?', sample: 'Da, pišem mnogo mejlova. Pišem kolegama.' },
            { q: 'Gde kupuješ namirnice? Kada?', sample: 'Kupujem namirnice u prodavnici subotom.' },
            { q: 'Da li putuješ? Kuda?', sample: 'Putujem svakog leta. Idem na more.' },
            { q: 'Kuda ideš posle časa?', sample: 'Idem kući i idem na spavanje!' },
            { q: 'Šta jedu i piju tvoji roditelji za večeru?', sample: 'Jedu meso i salatu, piju čaj.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'jedem, jedeš, jede, jedemo, jedete, jedu',
            'pijem, pišem, idem, perem, šaljem, zovem se — запомнить',
            '-ovati → -ujem: putujem, kupujem, stanujem, doručkujem',
            'Спряжение определяем по форме «я»: imam / živim / jedem'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: е-глаголы и слова занятия', est: 8, set: 'C' },
        { type: 'conj', title: 'Тренажёр: три спряжения вперемешку', est: 7, verbs: ['jesti', 'piti', 'pisati', 'ici', 'putovati', 'kupovati', 'doruckovati', 'slati', 'ziveti', 'raditi', 'gledati'], rounds: 16 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Svako veče pereš zube.'] }, { a: ['Da li pišete srpski?'] }, { a: ['Moji rođaci nikad ne putuju.'] },
            { a: ['Milica stanuje na Novom Beogradu.'] }, { a: ['Uveče pijem čaj, a žena čita knjigu.'] }, { a: ['Nedeljom večeramo sa celom porodicom.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я пью кофе каждое утро.', a: ['Pijem kafu svako jutro.', 'Ja pijem kafu svako jutro.', 'Svako jutro pijem kafu.'] },
            { q: 'Что ты ешь на завтрак?', a: ['Šta jedeš za doručak?', 'Šta ti jedeš za doručak?'] },
            { q: 'Мы покупаем продукты по субботам.', a: ['Kupujemo namirnice subotom.', 'Mi kupujemo namirnice subotom.', 'Subotom kupujemo namirnice.'] },
            { q: 'Они не идут на работу.', a: ['Oni ne idu na posao.', 'Ne idu na posao.'] },
            { q: 'Ты пишешь письмо?', a: ['Da li pišeš pismo?', 'Da li ti pišeš pismo?', 'Pišeš li pismo?'] },
            { q: 'Вы путешествуете по Европе?', a: ['Da li putujete po Evropi?', 'Da li vi putujete po Evropi?', 'Putujete li po Evropi?'] },
            { q: 'Где ты живёшь (проживаешь)?', a: ['Gde stanuješ?', 'Gde ti stanuješ?'] },
            { q: 'Я отправляю письмо маме.', a: ['Šaljem pismo mami.', 'Ja šaljem pismo mami.'] }
          ]
        },
        {
          type: 'write', title: 'Moja porodica radnim danom · текст с тремя спряжениями', est: 7, key: 'hw-4.2-porodica',
          note: '8 предложений о буднях вашей семьи по образцу Лазара. Используйте глаголы всех трёх групп.',
          sample: 'Zovem se Katja. Radim u firmi i idem na posao od ponedeljka do petka. Na poslu pišem mejlove i pijem mnogo kafe. Uveče moj muž kuva, a ja čitam. Subotom kupujemo namirnice. Nedeljom putujemo ili se šetamo u parku.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '4.3',
      title: 'Akuzativ i planovi',
      ru: 'Винительный падеж; планы на неделю',
      goals: [
        'поставить существительное в аккузатив (объект, направление)',
        'различать одушевлённые и неодушевлённые в мужском роде',
        'рассказать о планах на неделю по дням и часам'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст. Партнёр называет три глагола из текста и их спряжение (a, i или e).',
          items: [{ q: 'Zovem se… Radim… Pijem…' }, { q: 'Kuvati — a-grupa, ja kuvam.' }]
        },
        {
          type: 'text', min: 10, title: 'Akuzativ · винительный падеж',
          html:
            '<p><b>Akuzativ</b> отвечает на вопросы [[koga?]] [[šta?]] и обозначает объект действия, направление движения или место:</p>' +
            '<p><b>Объект:</b> [[Ona piše pismo.]] [[Moj sin jede jabuku.]] [[Mi pijemo vodu i sok.]]<br>' +
            '<b>Направление:</b> [[Ja idem u prodavnicu.]] [[Oni putuju u Bosnu.]] [[Mi se šetamo kroz šumu i park.]]</p>' +
            '<p><b>Мужской род, ед. ч.:</b> неодушевлённые не меняются, одушевлённые получают <b>-a</b>: [[Ja imam kompjuter.]] — [[Ja imam brata.]] [[Vidim grad.]] — [[Vidim Dragana.]]</p>' +
            '<p><b>Женский род:</b> -a → <b>-u</b>: [[ulica — ulicu]], [[sestra — sestru]], [[kafa — kafu]].<br><b>Средний род:</b> не меняется: [[vino]], [[ime]], [[more]].</p>',
          tables: [
            { caption: 'Akuzativ (koga? šta?)', head: ['rod', 'jednina', 'množina'], rows: [['M', 'grad, Dragana', 'gradove, Dragane'], ['Ž', 'ulicu, sestru', 'ulice, sestre'], ['S', 'vino, ime', 'vina, imena']] }
          ],
          after: '<p>Во множественном числе: м. р. <b>-e</b> ([[gradove]], [[brate]]), ж. р. <b>-e</b> ([[sestre]]), ср. р. <b>-a</b> ([[imena]]). Короткие слова м. р. — с расширением: [[vozove]], [[stanove]].</p>'
        },
        {
          type: 'sort', min: 6, title: 'Rod · распределите по родам',
          groups: ['muški rod', 'ženski rod', 'srednji rod'],
          items: [
            { w: 'vino', g: 'srednji rod' }, { w: 'Dragana', g: 'ženski rod' }, { w: 'Vladimir', g: 'muški rod' }, { w: 'fudbal', g: 'muški rod' }, { w: 'jabuka', g: 'ženski rod' },
            { w: 'ime', g: 'srednji rod' }, { w: 'jezero', g: 'srednji rod' }, { w: 'pljeskavica', g: 'ženski rod' }, { w: 'brat', g: 'muški rod' }, { w: 'more', g: 'srednji rod' },
            { w: 'čaj', g: 'muški rod' }, { w: 'kafa', g: 'ženski rod' }, { w: 'utorak', g: 'muški rod' }, { w: 'mleko', g: 'srednji rod' }, { w: 'priroda', g: 'ženski rod' }
          ]
        },
        {
          type: 'gap', min: 7, title: 'Stavite u akuzativ · те же слова в винительном',
          items: [
            'Pijem {vino} (vino) i {kafu} (kafa).', 'Zovem {Draganu} (Dragana) i {Vladimira} (Vladimir).', 'Volim {fudbal} (fudbal) i {prirodu} (priroda).',
            'Jedem {jabuku} (jabuka) i {pljeskavicu} (pljeskavica).', 'Imam {brata} (brat) i lepo {ime} (ime).', 'Gledam {jezero} (jezero) i {more} (more).',
            'Pijem {čaj} (čaj) i kupujem {mleko} (mleko).', 'Čekam {utorak} (utorak).'
          ]
        },
        {
          type: 'gap', min: 6, title: 'Izaberite oblik imenice · выберите форму',
          options: ['školu', 'škola', 'psa', 'pas', 'jezera', 'jezero', 'sestre', 'sestra', 'meso', 'mesa', 'grad', 'grada'],
          items: [
            'Danas idemo u drugu {školu}.', 'Pogledaj kroz prozor, tamo ima {psa}!', 'Srbi imaju mnogo lepih {jezera}.',
            'Vi imate dve {sestre}.', 'Ne voliš da jedeš {meso}.', 'Ljubljana je mala i simpatična, obožavam ovaj {grad}.'
          ]
        },
        {
          type: 'tf', min: 5, title: 'Tačno ili netačno? · правильная ли форма',
          note: 'Отвечайте быстро: верна ли форма аккузатива?',
          items: [
            { q: 'Ja pijem kafa.', a: false, why: 'Правильно: pijem kafu.' }, { q: 'Ona ima brata.', a: true }, { q: 'Mi gledamo film.', a: true },
            { q: 'Oni jedu pljeskavica.', a: false, why: 'Правильно: jedu pljeskavicu.' }, { q: 'Idem u prodavnicu.', a: true }, { q: 'Vidim Vladimir.', a: false, why: 'Одушевлённое: vidim Vladimira.' },
            { q: 'Kupujemo vino i mleko.', a: true }, { q: 'Volim more i prirodu.', a: true }, { q: 'Čitam knjiga.', a: false, why: 'Правильно: čitam knjigu.' }, { q: 'Putujemo u Bosna.', a: false, why: 'Правильно: u Bosnu.' }
          ]
        },
        {
          type: 'gap', min: 5, title: 'Kuda ideš? · направление с u / na',
          note: 'Куда? — u / na + аккузатив.',
          items: [
            'Idem u {prodavnicu} (prodavnica).', 'Idemo na {more} (more).', 'Putujemo u {Bosnu} (Bosna) i u {Hrvatsku} (Hrvatska).',
            'Ideš li u {školu} (škola)?', 'Deca idu u {park} (park).', 'Šetamo se kroz {šumu} (šuma).', 'Vraćam se u {Beograd} (Beograd).', 'Oni idu na {utakmicu} (utakmica).'
          ]
        },
        {
          type: 'text', min: 3, title: 'Kada? · время и дни',
          html:
            '<p>[[u 10 sati ujutru]] — в 10 часов утра, [[u 2 popodne]] — в 2 часа дня, [[u 8 uveče]] — в 8 вечера.</p>' +
            '<p>[[Šta radiš u ponedeljak?]] — в этот понедельник. [[Šta radiš ponedeljkom?]] — по понедельникам. [[Šta planiraš da radiš u sredu?]] — что планируешь делать в среду?</p>'
        },
        {
          type: 'speak', min: 12, title: 'Vaš raspored · планы на неделю',
          note: 'Каждый рассказывает свои планы на эту неделю по дням, партнёр задаёт вопросы из списка и записывает три плана. Потом проверяем: Ti u sredu ideš kod lekara, tačno?',
          items: [
            { q: 'Šta radiš u ponedeljak?', sample: 'U ponedeljak idem na posao i uveče imam čas srpskog.' },
            { q: 'Kakvi su vam planovi za nedelju uveče?', sample: 'U nedelju uveče gledamo film i večeramo sa porodicom.' },
            { q: 'Šta radiš ponedeljkom?', sample: 'Ponedeljkom obično radim i idem u teretanu.' },
            { q: 'Šta planiraš da radiš u sredu u 10 sati ujutru?', sample: 'U sredu u 10 sati ujutru planiram da pišem mejlove.' },
            { q: 'Kuda ideš za vikend?', sample: 'Za vikend idem u Novi Sad. Šetam se kroz grad i jedem pljeskavicu.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'Ž.: -a → -u: pijem kafu, idem u prodavnicu',
            'M.: kompjuter (неодуш.) — brata, Vladimira (одуш.)',
            'S.: без изменений: vino, ime, more',
            'Kuda? — u / na / kroz + akuzativ'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: слова занятия (повторно, обратная сторона)', est: 6, set: 'C' },
        {
          type: 'qa', mode: 'transform', title: 'Akuzativ · поставьте слово в винительный', est: 5,
          note: 'Напишите форму после «Vidim …».',
          items: [
            { q: 'Vidim … (sestra)', a: ['sestru'] }, { q: 'Vidim … (brat)', a: ['brata'] }, { q: 'Vidim … (grad)', a: ['grad'] }, { q: 'Vidim … (jezero)', a: ['jezero'] },
            { q: 'Vidim … (Dragana)', a: ['Draganu'] }, { q: 'Vidim … (Vladimir)', a: ['Vladimira'] }, { q: 'Vidim … (ulica)', a: ['ulicu'] }, { q: 'Vidim … (pas)', a: ['psa'] },
            { q: 'Vidim … (more)', a: ['more'] }, { q: 'Vidim … (kompjuter)', a: ['kompjuter'] }, { q: 'Vidim … (mačka)', a: ['mačku'] }, { q: 'Vidim … (prijatelj)', a: ['prijatelja'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Moj sin jede jabuku.'] }, { a: ['Mi pijemo vodu i sok.'] }, { a: ['Ja idem u prodavnicu.'] }, { a: ['Oni putuju u Bosnu.'] },
            { a: ['Šetamo se kroz šumu i park.'] }, { a: ['Šta planiraš da radiš u sredu?'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Она пишет письмо.', a: ['Ona piše pismo.'] },
            { q: 'Я пью чай.', a: ['Pijem čaj.', 'Ja pijem čaj.'] },
            { q: 'У меня есть брат и сестра.', a: ['Imam brata i sestru.', 'Ja imam brata i sestru.'] },
            { q: 'Мы едем в Боснию.', a: ['Putujemo u Bosnu.', 'Mi putujemo u Bosnu.', 'Idemo u Bosnu.'] },
            { q: 'Я обожаю этот город.', a: ['Obožavam ovaj grad.', 'Ja obožavam ovaj grad.'] },
            { q: 'Ты не любишь есть мясо.', a: ['Ne voliš da jedeš meso.', 'Ti ne voliš da jedeš meso.'] },
            { q: 'Что ты планируешь делать в субботу?', a: ['Šta planiraš da radiš u subotu?'] },
            { q: 'В воскресенье вечером мы смотрим фильм.', a: ['U nedelju uveče gledamo film.', 'U nedelju uveče mi gledamo film.'] }
          ]
        },
        {
          type: 'write', title: 'Moja nedelja · планы на неделю + запись', est: 9, key: 'hw-4.3-nedelja', record: true,
          note: 'По одному-два предложения на каждый день недели: что делаете, куда идёте, во сколько. Запишите рассказ (до 3 минут) и послушайте себя.',
          sample: 'U ponedeljak idem na posao i uveče imam čas srpskog. U utorak u 6 uveče idem u teretanu. U sredu pišem mejlove i zovem mamu. U četvrtak kupujem namirnice. U petak večeramo u restoranu. U subotu se šetamo kroz park. U nedelju gledamo film i idemo rano na spavanje.'
        }
      ]
    }
  ]
});
