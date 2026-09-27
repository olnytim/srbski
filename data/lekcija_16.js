// Lekcija 16 - U bolnici. Two 60-minute sessions: symptoms & medical vocabulary + imperative, then calling an ambulance.
COURSE.register({
  n: 16,
  title: 'U bolnici',
  ru: 'Болезни и симптомы, врач и скорая, повелительное наклонение (imperativ)',

  vocab: [
    { id: 'apciha', sr: 'Apćiha!', ru: 'Апчхи!', set: 'A' },
    { id: 'modrica', sr: 'modrica', ru: 'синяк', set: 'A' },
    { id: 'slomiti', sr: 'slomiti nogu, ja slomim — slomio sam nogu', ru: 'сломать ногу — я сломал ногу', set: 'A' },
    { id: 'na-pregledu', sr: 'na pregledu kod lekara', ru: 'на осмотре у врача', set: 'A' },
    { id: 'boli-me', sr: 'Boli me! Boli me zub. Boli me glava.', ru: 'Мне больно! У меня болит зуб / голова.', set: 'A' },
    { id: 'dom-zdravlja16', sr: 'dom zdravlja, čekaonica', ru: 'поликлиника, зал ожидания', set: 'A' },
    { id: 'bolnica16', sr: 'bolnica, urgentni centar', ru: 'больница, приёмный покой / неотложка', set: 'A' },
    { id: 'klinika', sr: 'privatna klinika, državna bolnica', ru: 'частная клиника, государственная больница', set: 'A' },
    { id: 'knjizica', sr: 'zdravstvena knjižica, zdravstveni karton', ru: 'полис, карта пациента', set: 'A' },
    { id: 'osiguranje', sr: 'osiguranje', ru: 'страховка', set: 'A' },
    { id: 'hitna', sr: 'hitna pomoć — 194', ru: 'скорая помощь — номер 194', set: 'A' },
    { id: 'sta-se-desilo', sr: 'Šta se desilo?', ru: 'Что случилось?', set: 'A' },
    { id: 'toplomer', sr: 'toplomer, termometar', ru: 'градусник', set: 'A' },
    { id: 'temperatura16', sr: 'temperatura, groznica', ru: 'температура, лихорадка', set: 'A' },
    { id: 'mucnina', sr: 'mučnina, povraćanje', ru: 'тошнота, рвота', set: 'A' },
    { id: 'bol-u-zubima', sr: 'bol u zubima, bol u leđima, bol u stomaku', ru: 'зубная боль, боль в спине, боль в животе', set: 'A' },
    { id: 'malaksalost', sr: 'malaksalost, umor', ru: 'слабость, усталость', set: 'A' },
    { id: 'prelom', sr: 'prelom', ru: 'перелом', set: 'A' },
    { id: 'kijavica', sr: 'kijavica, curenje nosa', ru: 'насморк', set: 'A' },
    { id: 'dijareja', sr: 'dijareja', ru: 'диарея', set: 'A' },
    { id: 'mamurluk', sr: 'mamurluk', ru: 'похмелье', set: 'A' },
    { id: 'upala', sr: 'upala', ru: 'воспаление', set: 'A' },
    { id: 'kasalj', sr: 'kašalj', ru: 'кашель', set: 'A' },
    { id: 'glavobolja', sr: 'glavobolja', ru: 'головная боль', set: 'A' },
    { id: 'dati-infuziju', sr: 'dati infuziju, ja dajem infuziju', ru: 'поставить капельницу', set: 'A' },
    { id: 'ici-na-pregled', sr: 'ići na pregled kod lekara', ru: 'идти на осмотр к врачу', set: 'A' },
    { id: 'prijaviti-se', sr: 'prijaviti se na termin kod lekara, ja se prijavim', ru: 'записаться к врачу', set: 'A' },
    { id: 'vakcinisati-se', sr: 'vakcinisati se, ja se vakcinišem — primiti vakcinu', ru: 'сделать прививку', set: 'A' },
    { id: 'razboleti-se', sr: 'razboleti se, ja se razbolim', ru: 'заболеть', set: 'A' },
    { id: 'biti-bolestan', sr: 'biti bolestan / bolesna, bolesni', ru: 'быть больным, болеть', set: 'A' },
    { id: 'oporaviti-se', sr: 'oporaviti se, ozdraviti se', ru: 'поправиться, выздороветь', set: 'A' },

    { id: 'imperativ', sr: 'imperativ — od 3. lica množine (oni)', ru: 'повелительное наклонение — от формы «они»', set: 'B' },
    { id: 'cekaj', sr: 'čekaj! čekajte! hajde da sačekamo!', ru: 'жди! ждите! давайте подождём!', set: 'B' },
    { id: 'govori', sr: 'govori! govorite! hajde da govorimo!', ru: 'говори! говорите! давайте говорить!', set: 'B' },
    { id: 'reci-imp', sr: 'reci! recite! — pomozi! pomozite! — peci! pecite!', ru: 'скажи! скажите! — помоги! помогите! — пеки! пеките!', set: 'B' },
    { id: 'neka', sr: 'neka čeka, neka govore', ru: 'пусть ждёт, пусть говорят', set: 'B' },
    { id: 'potpisati', sr: 'potpisati, ja potpišem — potpiši ovde', ru: 'подписать — подпиши здесь', set: 'B' },
    { id: 'zubar16', sr: 'zubar — boli me zub', ru: 'стоматолог — болит зуб', set: 'B' },
    { id: 'kost', sr: 'kost — prelomio je kost', ru: 'кость — он сломал кость', set: 'B' },
    { id: 'potres', sr: 'potres glave', ru: 'сотрясение мозга', set: 'B' },
    { id: 'kapsula', sr: 'kapsula — iseći na dva dela', ru: 'капсула — разрезать на две части', set: 'B' },
    { id: 'popiti-pola', sr: 'popiti samo polovinu', ru: 'выпить только половину', set: 'B' },
    { id: 'virus', sr: 'virus — to je neki virus', ru: 'вирус — это какой-то вирус', set: 'B' },
    { id: 'bol-u-telu', sr: 'bol u telu', ru: 'ломота в теле', set: 'B' },
    { id: 'kolika-temp', sr: 'Kolika je temperatura?', ru: 'Какая температура?', set: 'B' },
    { id: 'kada-razboleli', sr: 'Kada ste se razboleli? — Pre tri dana.', ru: 'Когда вы заболели? — Три дня назад.', set: 'B' },
    { id: 'adresa', sr: 'Vaša adresa? — ulica, stan broj 40', ru: 'Ваш адрес? — улица, квартира 40', set: 'B' },
    { id: 'ocekujte', sr: 'Očekujte lekara u roku od 35 minuta.', ru: 'Ожидайте врача в течение 35 минут.', set: 'B' },
    { id: 'hvala-na-pozivu', sr: 'Hvala vam na pozivu.', ru: 'Спасибо за звонок.', set: 'B' },
    { id: 'grlo', sr: 'grlo — njeno grlo je crveno', ru: 'горло — у неё красное горло', set: 'B' },
    { id: 'probuditi-se', sr: 'probudio se zbog groznice', ru: 'проснулся из-за жара', set: 'B' },
    { id: 'losa-hrana', sr: 'loša hrana', ru: 'плохая еда', set: 'B' },
    { id: 'ekran', sr: 'gledati u ekran', ru: 'смотреть в экран', set: 'B' }
  ],

  verbs: {
    cekati: { inf: 'čekati', ru: 'ждать', imp: { ti: 'čekaj', vi: 'čekajte', mi: 'hajde da sačekamo' } },
    govoriti: { inf: 'govoriti', ru: 'говорить', imp: { ti: 'govori', vi: 'govorite', mi: 'hajde da govorimo' } },
    reci: { inf: 'reći', ru: 'сказать', imp: { ti: 'reci', vi: 'recite', mi: 'hajde da recimo' } },
    pomoci: { inf: 'pomoći', ru: 'помочь', imp: { ti: 'pomozi', vi: 'pomozite', mi: 'hajde da pomognemo' } },
    razboleti: { inf: 'razboleti se', ru: 'заболеть', l: { m: 'se razboleo', f: 'se razbolela', n: 'se razbolelo', mpl: 'se razboleli', fpl: 'se razbolele' } },
    slomiti: { inf: 'slomiti', ru: 'сломать', l: { m: 'slomio', f: 'slomila', n: 'slomilo', mpl: 'slomili', fpl: 'slomile' } },
    vakcinisati: { inf: 'vakcinisati se', ru: 'сделать прививку', l: { m: 'se vakcinisao', f: 'se vakcinisala', n: 'se vakcinisalo', mpl: 'se vakcinisali', fpl: 'se vakcinisale' } },
    biti: { inf: 'biti', ru: 'быть', l: { m: 'bio', f: 'bila', n: 'bilo', mpl: 'bili', fpl: 'bile' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '16.1',
      title: 'Boli me, boli!',
      ru: 'Симптомы, где лечатся в Сербии, повелительное наклонение',
      goals: [
        'назвать 15 симптомов и сказать, что болит: boli me glava',
        'различать dom zdravlja, bolnica, urgentni centar, privatna klinika',
        'образовать императив: čekaj / čekajte, govori / govorite, reci / recite'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Boli me, boli!',
          note: 'Тесла на рентгене, Джокович с синяком, Андрич чихает, Кустурица сломал ногу. Прочитайте кириллицу сами.',
          img: 'img/l16_strip.png',
          lines: [
            { who: 'Nikola', sr: 'Na pregledu kod lekara sam!', ru: 'Я на осмотре у врача!' },
            { who: 'Novak', sr: 'Uf… imam modricu.', ru: 'Уф… у меня синяк.' },
            { who: 'Ivo', sr: 'Apćiha! Joj…', ru: 'Апчхи! Ой…' },
            { who: 'Emir', sr: 'Slomio sam nogu kad sam plesao na stolu sa Bregovićem.', ru: 'Я сломал ногу, когда танцевал на столе с Бреговичем.' }
          ]
        },
        {
          type: 'text', min: 7, title: 'Gde idemo kod lekara u Srbiji? · где лечатся',
          img: 'img/l16_bolnica.png',
          html:
            '<ul><li>[[dom zdravlja]] — поликлиника, там [[čekaonica]] — зал ожидания</li><li>[[bolnica]] — больница, [[urgentni centar]] — приёмный покой, неотложка</li>' +
            '<li>[[privatna klinika]] — частная клиника, [[državna bolnica]] — государственная больница</li>' +
            '<li>[[zdravstvena knjižica]] — полис, [[zdravstveni karton]] — карта пациента, [[osiguranje]] — страховка</li></ul>' +
            '<p>[[Hitna pomoć, šta se desilo?]] — Скорая, что случилось? Номер скорой в Сербии — <b>194</b>. [[Imam visoku temperaturu, 39,8.]] [[toplomer]] — градусник.</p>',
          tables: [
            { caption: 'Simptomi', head: ['', '', ''], rows: [['temperatura, groznica — температура', 'glavobolja — головная боль', 'kašalj — кашель'], ['kijavica, curenje nosa — насморк', 'mučnina, povraćanje — тошнота, рвота', 'dijareja — диарея'], ['bol u stomaku — боль в животе', 'bol u leđima — боль в спине', 'bol u zubima — зубная боль'], ['prelom — перелом', 'upala — воспаление', 'malaksalost, umor — слабость'], ['mamurluk — похмелье', 'modrica — синяк', 'Boli me! — Мне больно!']] }
          ]
        },
        {
          type: 'gap', bank: true, min: 6, title: 'Simptomi · какой симптом',
          note: 'В оригинале — фото. По описанию впишите симптом из списка.',
          items: [
            'Žena u krevetu sa toplomerom — {temperatura, groznica}.', 'Muškarac drži glavu, boli ga — {glavobolja}.', 'Žena drži stomak, hoće da povraća — {mučnina, povraćanje}.', 'Muškarac drži leđa — {bol u leđima}.',
            'Ruka u gipsu — {prelom}.', 'Žena drži stomak, grči se — {bol u stomaku}.', 'Muškarac sa čašom vina drži glavu ujutru — {mamurluk}.', 'Žena leži umorna na kauču — {malaksalost, umor}.',
            'Muškarac kašlje — {kašalj}.', 'Žena briše nos maramicom — {kijavica, curenje nosa}.', 'Dete sedi na WC šolji — {dijareja}.', 'Crveno, otečeno koleno — {upala}.'
          ]
        },
        {
          type: 'text', min: 4, title: 'Kod lekara · что делают у врача',
          img: 'img/l16_procedure.png',
          html: '<ul><li>[[dati infuziju]] — поставить капельницу</li><li>[[ići na pregled kod lekara]] — пойти на осмотр к врачу</li><li>[[prijaviti se na termin kod lekara]] — записаться на приём</li><li>[[primiti vakcinu]], [[vakcinisati se]] — сделать прививку</li></ul>' +
            '<p>[[Boli me glava.]] [[Boli me zub.]] [[Bole me leđa.]] — «болит» + аккузатив того, кто страдает: boli <b>me</b>, boli <b>te</b>, boli <b>ga</b>, boli <b>je</b>.</p>'
        },
        {
          type: 'qa', mode: 'translate', min: 8, title: 'Prevedite · переведите на сербский',
          note: 'Упражнение из курса. Сначала вслух, потом запишите.',
          items: [
            { q: 'Я была на осмотре у врача в клинике, у меня была температура.', a: ['Bila sam na pregledu kod lekara u klinici, imala sam temperaturu.', 'Bila sam na pregledu kod lekara na klinici, imala sam temperaturu.'] },
            { q: 'Мой сын плохо ест, у него диарея и температура.', a: ['Moj sin loše jede, ima dijareju i temperaturu.'] },
            { q: 'Мы пойдём в больницу завтра, мама будет делать прививку.', a: ['Ići ćemo u bolnicu sutra, mama će se vakcinisati.', 'Ići ćemo u bolnicu sutra, mama će primiti vakcinu.', 'Sutra ćemo ići u bolnicu, mama će se vakcinisati.'] },
            { q: 'Аца звонит в скорую, у него перелом.', a: ['Aca zove hitnu pomoć, ima prelom.', 'Aca zove hitnu, ima prelom.'] },
            { q: 'Ой, зачем вы пили вчера так много? У вас похмелье!', a: ['Joj, zašto ste juče pili tako mnogo? Imate mamurluk!', 'Joj, zašto ste pili juče tako mnogo? Imate mamurluk!'] },
            { q: 'Мая и Рашо ходили вчера к врачу, их собака съела градусник.', a: ['Maja i Rašo su juče išli kod lekara, njihov pas je pojeo toplomer.', 'Maja i Rašo su išli juče kod lekara, njihov pas je pojeo toplomer.'] }
          ]
        },
        {
          type: 'text', min: 8, title: 'Imperativ · повелительное наклонение',
          html:
            '<p>Императив образуется от формы <b>3-го лица множественного числа (oni)</b> настоящего времени. Три типа:</p>' +
            '<ol><li>Глаголы, у которых форма «oni» кончается на <b>-je, -ju</b> (imaju, čekaju, broje, stoje, putuju, kupuju): окончания <b>-j, -jte, -mo</b>: [[čekaj!]] [[čekajte!]] [[hajde da sačekamo!]]</li>' +
            '<li>Остальные глаголы (pišu, govore, sede, idu): окончания <b>-i, -ite, -imo</b>: [[govori!]] [[govorite!]] [[hajde da govorimo!]]</li>' +
            '<li>Глаголы на <b>-ći</b> с чередованием (peku, seku, pomognu): k, g перед i → c, z: [[reci!]] [[recite!]], [[pomozi!]] [[pomozite!]], [[peci!]] [[pecite!]]</li></ol>' +
            '<p>Третье лицо — через <b>neka</b>: [[Neka čeka!]] [[Neka govore!]] Первое лицо мн. ч. — через <b>hajde da</b>.</p>',
          tables: [
            { caption: 'Imperativ', head: ['', 'čekati (-je, -ju)', 'govoriti (ostali)', 'reći (alternacija)'], rows: [['ti', 'čekaj!', 'govori!', 'reci!'], ['vi', 'čekajte!', 'govorite!', 'recite!'], ['mi', 'hajde da sačekamo!', 'hajde da govorimo!', 'hajde da recimo!'], ['on / ona', 'neka čeka!', 'neka govori!', 'neka reče!'], ['oni', 'neka čekaju!', 'neka govore!', 'neka reku!']] }
          ]
        },
        {
          type: 'gap', min: 4, title: 'Izaberite ispravnu varijantu · императив -je, -ju',
          options: ['čekaj', 'čekajte', 'sačekajte', 'stanite', 'stani', 'putuj', 'putujte', 'kupujte', 'hajde da sačekamo'],
          items: [
            'Mare, {čekaj}! Treba da idemo u bolnicu, on je prelomio kost.', 'Mama, tata, hajde da {stanite|sačekajte} ovde! Morate da se vakcinišete.', 'Ne možete da putujete sada, dobili ste infuziju. {Putujte} malo kasnije!'
          ]
        },
        {
          type: 'gap', min: 4, title: 'Unesite ispravni oblik imperativa · второй тип',
          items: [
            'Dom zdravlja „Grocka“, {govorite} (govoriti, vi), molim Vas.', 'Mila, {potpiši} (potpisati, ti) ovde. Ovo je tvoj zdravstveni karton.', 'Hajde da {idemo} (ići, mi) kod zubara, boli me zub, mama.'
          ]
        },
        {
          type: 'gap', bank: true, min: 3, title: 'Unesite ispravnu varijantu · чередование',
          items: [
            'Moja ćerka ima potres glave! {Pomozite} mi, molim vas!', '{Recite}, koliko dugo imate temperaturu?', '{Neka iseče} kapsulu na dva dela, pa popije samo polovinu.'
          ]
        },
        {
          type: 'speak', min: 9, title: 'Kod lekara · ролевая игра',
          note: 'Врач и пациент: пациент описывает симптомы (boli me…, imam…), врач задаёт вопросы и даёт указания в императиве (recite, pokažite, popijte, ležite). Потом меняетесь.',
          items: [
            { q: 'Lekar: Dobar dan, šta vas boli?', sample: 'Pacijent: Boli me glava i imam temperaturu 38,5. Imam i kašalj.' },
            { q: 'Lekar: Koliko dugo imate temperaturu? Recite mi sve simptome.', sample: 'Pacijent: Dva dana. Imam kijavicu, umor i bol u telu.' },
            { q: 'Lekar: Otvorite usta. Pokažite mi grlo. Ležite kod kuće i pijte čaj.', sample: 'Pacijent: Da li treba da idem u bolnicu? — Ne, to je virus. Popijte ovaj lek dva puta dnevno.' },
            { q: 'Pacijent: Slomio sam nogu. Šta da radim?', sample: 'Lekar: Idite u urgentni centar! Ne stojte na nozi. Sačekajte hitnu pomoć.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'Boli me glava. Imam temperaturu, kašalj, kijavicu, mučninu.',
            'dom zdravlja, bolnica, urgentni centar, hitna pomoć — 194',
            'čekaj! čekajte! — govori! govorite! — reci! recite! pomozi! pomozite!',
            'neka čeka! hajde da sačekamo!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: симптомы и медицина', est: 10, set: 'A' },
        {
          type: 'qa', mode: 'transform', title: 'Imperativ · напишите форму ti / vi', est: 6,
          note: 'Пример: čekati, ti → čekaj.',
          items: [
            { q: 'čekati, ti', a: ['čekaj'] }, { q: 'čekati, vi', a: ['čekajte'] }, { q: 'govoriti, ti', a: ['govori'] }, { q: 'govoriti, vi', a: ['govorite'] },
            { q: 'reći, ti', a: ['reci'] }, { q: 'reći, vi', a: ['recite'] }, { q: 'pomoći, vi', a: ['pomozite'] }, { q: 'ići, mi', a: ['hajde da idemo', 'idemo'] },
            { q: 'kupovati, ti', a: ['kupuj'] }, { q: 'pisati, vi', a: ['pišite'] }, { q: 'peći, ti', a: ['peci'] }, { q: 'potpisati, ti', a: ['potpiši'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Na pregledu kod lekara sam.'] }, { a: ['Slomio sam nogu kad sam plesao na stolu.'] }, { a: ['Imam visoku temperaturu, 39,8.'] },
            { a: ['Hitna pomoć, šta se desilo?'] }, { a: ['Potpiši ovde, ovo je tvoj zdravstveni karton.'] }, { a: ['Recite, koliko dugo imate temperaturu?'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'У меня болит голова и зуб.', a: ['Boli me glava i zub.', 'Bole me glava i zub.'] },
            { q: 'У него насморк и кашель.', a: ['On ima kijavicu i kašalj.', 'Ima kijavicu i kašalj.'] },
            { q: 'Я записался к врачу на вторник.', a: ['Prijavio sam se na termin kod lekara za utorak.', 'Prijavila sam se na termin kod lekara za utorak.'] },
            { q: 'Подожди! Нам нужно в больницу.', a: ['Čekaj! Treba da idemo u bolnicu.', 'Čekaj! Moramo u bolnicu.'] },
            { q: 'Помогите мне, пожалуйста!', a: ['Pomozite mi, molim vas!', 'Pomozite mi, molim Vas!'] },
            { q: 'Скажите, что случилось?', a: ['Recite, šta se desilo?'] },
            { q: 'У тебя есть страховка?', a: ['Da li imaš osiguranje?', 'Imaš li osiguranje?'] }
          ]
        },
        {
          type: 'write', title: 'Kad sam bio bolestan · как я болел', est: 7, key: 'hw-16.1-bolestan',
          note: '8 предложений в перфекте о том, как вы последний раз болели: симптомы, что делали, ходили ли к врачу, как выздоровели.',
          sample: 'Prošle zime sam se razboleo. Imao sam visoku temperaturu, kašalj i kijavicu. Boleli su me glava i grlo. Išao sam na pregled kod lekara u dom zdravlja. Lekar je rekao da je to virus. Pio sam čaj i ležao sam tri dana. Nisam išao na posao. Posle nedelju dana sam se oporavio.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '16.2',
      title: 'Zovem hitnu pomoć',
      ru: 'Разговор со скорой, порядок событий, ролевая игра',
      goals: [
        'понять на слух разговор со скорой и восстановить ход событий',
        'подобрать симптом по контексту',
        'вызвать скорую: имя, возраст, симптомы, адрес, страховка'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о болезни. Партнёр — врач, даёт три совета в императиве: Pijte…, Ležite…, Idite…',
          items: [{ q: 'Prošle zime sam se razboleo…' }]
        },
        {
          type: 'gap', bank: true, listen: true, min: 10, title: 'Zovem hitnu pomoć · послушайте и вставьте',
          note: 'В оригинале диалог на кириллице. Сначала прослушайте, потом вставьте слова из банка и прочитайте по ролям (Hitna, Jovan).',
          img: 'img/l16_hitna.png',
          items: [
            '<b>Hitna:</b> Dobar dan! Hitna pomoć, slušam vas.',
            '<b>Jovan:</b> Zdravo! Imam visoku temperaturu, {kašalj} i bol u telu. Mislim, to je neki {virus}.',
            '<b>Hitna:</b> Kolika je temperatura? <b>Jovan:</b> Samo sekund, da uzmem toplomer… {39} je.',
            '<b>Hitna:</b> Dobro, hvala, imate li {mučninu}, dijareju, druge simptome? <b>Jovan:</b> Nemam, možda samo {kijavicu}.',
            '<b>Hitna:</b> Kako se zovete i koliko imate godina? <b>Jovan:</b> Jovan sam, Jovan Marić. Imam {36} godina.',
            '<b>Hitna:</b> Kada ste se razboleli? <b>Jovan:</b> Tri dana {pre}.',
            '<b>Hitna:</b> Važi. Vaša adresa? <b>Jovan:</b> Milana Rakića, {37}, stan broj 40.',
            '<b>Hitna:</b> Dobro, hvala vam na {pozivu}. Očekujte lekara u roku od {35} minuta.'
          ]
        },
        {
          type: 'order', min: 5, title: 'Obnovite redosled događaja · восстановите ход событий',
          note: 'Соберите каждое предложение, потом расставьте их в порядке диалога: 1 — звонок, 2 — симптомы, 3 — температура, 4 — насморк, 5 — имя и возраст, 6 — сколько болеет, 7 — адрес.',
          items: [
            'Prvo Jovan je pozvao hitnu pomoć.', 'Zatim nazvao je simptome.', 'Naveo je takođe temperaturu.', 'Dodao je da ima kijavicu.',
            'Naveo je svoje ime i godine.', 'Rekao je koliko dugo je bolestan.', 'Nazvao je svoju adresu.'
          ]
        },
        {
          type: 'gap', bank: true, min: 5, title: 'Stavite odgovarajuće simptome · симптом по контексту',
          note: 'Упражнение из курса.',
          items: [
            'Nevena, radila si tri nedelje bez vikenda! Imaš {umor}.', 'Probudio se zbog groznice, bila je visoka {temperatura}.', 'Ako ćeš pojesti ovu lošu hranu, imaćeš {mučninu}.',
            'Juče moj drug je popio baš mnogo piva, a sada ima {mamurluk}!', 'Imam {glavobolju}, dugo sam sedela i gledala u ekran.', 'Njeno grlo je crveno! Ima {kašalj} i kijavicu.'
          ]
        },
        {
          type: 'match', min: 3, title: 'Uspostavite vezu · процедура и описание',
          pairs: [
            ['vakcinisati se', 'igla u rame, primiti vakcinu'], ['infuzija', 'kesa sa tečnošću i cevčica'], ['pregled kod lekara', 'lekar sa maskom sluša pacijenta'], ['osiguranje', 'kartica „health insurance“ i stetoskop']
          ]
        },
        {
          type: 'text', min: 4, title: 'Kako pozvati hitnu · как вызвать скорую',
          html:
            '<p>Порядок разговора со скорой (194):</p>' +
            '<ol><li>[[Zdravo! Zovem hitnu pomoć.]] — поздороваться</li><li>[[Imam visoku temperaturu i kašalj.]] — симптомы</li><li>[[Kolika je temperatura? — 39 je.]] — температура</li>' +
            '<li>[[Zovem se… Imam … godina.]] — имя, возраст, пол</li><li>[[Razboleo sam se pre tri dana.]] — когда заболел</li><li>[[Moja adresa je…, stan broj…]] — адрес</li><li>[[Imam osiguranje.]] / [[Nemam osiguranje.]] — страховка</li></ol>' +
            '<p>Ответ: [[Hvala vam na pozivu. Očekujte lekara u roku od 35 minuta.]]</p>'
        },
        {
          type: 'speak', min: 24, title: 'Zovem hitnu! · ролевая игра из курса',
          note: 'Задание из курса: партнёр называет случайные симптомы (тяните карты: prelom, mučnina, glavobolja, temperatura 40, mamurluk, bol u stomaku…), вы звоните в скорую. Представьтесь, назовите имя, возраст, пол, опишите симптомы, в конце — адрес и есть ли страховка. Диспетчер задаёт все вопросы из диалога. Три раунда, меняйтесь ролями.',
          items: [
            { q: 'Hitna: Hitna pomoć, slušam vas. Šta se desilo?', sample: 'Zdravo! Zovem se Marko Petrović, imam 32 godine. Imam bol u stomaku i mučninu.' },
            { q: 'Hitna: Kolika je temperatura? Imate li druge simptome?', sample: '38 je. Imam i dijareju. Mislim da sam pojeo lošu hranu.' },
            { q: 'Hitna: Kada ste se razboleli? Vaša adresa?', sample: 'Razboleo sam se sinoć. Adresa je Bulevar kralja Aleksandra 15, stan broj 7.' },
            { q: 'Hitna: Da li imate osiguranje?', sample: 'Da, imam osiguranje i zdravstvenu knjižicu.' },
            { q: 'Hitna: Hvala na pozivu. Očekujte lekara u roku od 30 minuta.', sample: 'Hvala vam! Doviđenja.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'Hitna pomoć, slušam vas. Šta se desilo?',
            'Kolika je temperatura? Kada ste se razboleli? Vaša adresa?',
            'Imam temperaturu, kašalj, mučninu, kijavicu…',
            'Hvala vam na pozivu. Očekujte lekara u roku od 35 minuta.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: императив и слова диалога', est: 8, set: 'B' },
        { type: 'conj', tense: 'past', title: 'Тренажёр: перфект (заболеть, сломать, привиться)', est: 5, verbs: ['razboleti', 'slomiti', 'vakcinisati', 'biti'], rounds: 10 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант по диалогу', est: 6,
          items: [
            { a: ['Hitna pomoć, slušam vas.'] }, { a: ['Imam visoku temperaturu, kašalj i bol u telu.'] }, { a: ['Kolika je temperatura?'] },
            { a: ['Kada ste se razboleli? — Pre tri dana.'] }, { a: ['Milana Rakića 37, stan broj 40.'] }, { a: ['Očekujte lekara u roku od 35 minuta.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я звоню в скорую!', a: ['Zovem hitnu pomoć!', 'Zovem hitnu!'] },
            { q: 'У меня высокая температура и ломота в теле.', a: ['Imam visoku temperaturu i bol u telu.'] },
            { q: 'Это, наверное, какой-то вирус.', a: ['Mislim, to je neki virus.', 'To je verovatno neki virus.', 'Mislim da je to neki virus.'] },
            { q: 'Я заболел три дня назад.', a: ['Razboleo sam se pre tri dana.', 'Razbolela sam se pre tri dana.'] },
            { q: 'Ты работала три недели без выходных, у тебя усталость.', a: ['Radila si tri nedelje bez vikenda, imaš umor.'] },
            { q: 'У него похмелье, он выпил много пива.', a: ['Ima mamurluk, popio je mnogo piva.', 'On ima mamurluk, popio je mnogo piva.'] },
            { q: 'Спасибо за звонок.', a: ['Hvala vam na pozivu.', 'Hvala na pozivu.'] },
            { q: 'Ожидайте врача в течение 20 минут.', a: ['Očekujte lekara u roku od 20 minuta.', 'Očekujte lekara u roku od dvadeset minuta.'] }
          ]
        },
        {
          type: 'write', title: 'Dijalog sa hitnom · письменный диалог + запись', est: 10, key: 'hw-16.2-hitna', record: true,
          note: 'Задание из курса: напишите свой разговор со скорой (10–12 реплик) по образцу Йована: симптомы, температура, имя и возраст, когда заболели, адрес, страховка. Запишите оба голоса.',
          sample: 'Hitna: Dobar dan! Hitna pomoć, slušam vas. Ja: Zdravo! Imam jak bol u stomaku i mučninu. Hitna: Kolika je temperatura? Ja: 38,2. Hitna: Imate li dijareju? Ja: Da, od jutros. Hitna: Kako se zovete i koliko imate godina? Ja: Ana Ivanova, imam 29 godina. Hitna: Kada ste se razboleli? Ja: Sinoć. Hitna: Vaša adresa? Ja: Njegoševa 12, stan broj 5. Imam osiguranje. Hitna: Hvala na pozivu, očekujte lekara u roku od 30 minuta.'
        }
      ]
    }
  ]
});
