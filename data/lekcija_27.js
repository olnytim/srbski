// Lekcija 27 - Kulturni život. Two 60-minute sessions: cultural places + book fair story + Ethnographic museum; Tesla museum, Vuk & Dositej museum, children's theatre.
COURSE.register({
  n: 27,
  title: 'Kulturni život',
  ru: 'Культурная жизнь: куда сходить, музеи Белграда, театр',

  vocab: [
    { id: 'muzej', sr: 'muzej', ru: 'музей', set: 'A' },
    { id: 'pozoriste', sr: 'pozorište, predstava', ru: 'театр, представление', set: 'A' },
    { id: 'sajam', sr: 'sajam — sajam knjiga', ru: 'ярмарка — книжная ярмарка', set: 'A' },
    { id: 'bioskop', sr: 'bioskop', ru: 'кинотеатр', set: 'A' },
    { id: 'izlozba', sr: 'izložba, izlagati', ru: 'выставка, выставлять', set: 'A' },
    { id: 'koncert', sr: 'koncert, muzikanti', ru: 'концерт, музыканты', set: 'A' },
    { id: 'glumac', sr: 'glumac, glumica, izvoditi predstavu', ru: 'актёр, актриса, играть спектакль', set: 'A' },
    { id: 'dogadjaj', sr: 'događaj — javni događaj', ru: 'событие — публичное событие', set: 'A' },
    { id: 'svrha', sr: 'svrha — ekonomska, kulturna, socijalna', ru: 'цель, назначение', set: 'A' },
    { id: 'trajno', sr: 'trajno — privremeno', ru: 'постоянно — временно', set: 'A' },
    { id: 'red27', sr: 'stajati u redu', ru: 'стоять в очереди', set: 'A' },
    { id: 'pauza', sr: 'napraviti pauzu za kafu', ru: 'сделать перерыв на кофе', set: 'A' },
    { id: 'udzbenik', sr: 'udžbenik, bojanka, kuvar', ru: 'учебник, раскраска, поваренная книга', set: 'A' },
    { id: 'obicaji', sr: 'običaji, verovanja', ru: 'обычаи, верования', set: 'A' },
    { id: 'zajednica', sr: 'zajednica — etnička zajednica', ru: 'сообщество — этническая община', set: 'A' },
    { id: 'stvaralastvo', sr: 'narodno stvaralaštvo', ru: 'народное творчество', set: 'A' },
    { id: 'cuvati', sr: 'čuvati — muzej čuva predmete', ru: 'хранить', set: 'A' },
    { id: 'proucavati', sr: 'proučavati, prikupljati', ru: 'изучать, собирать', set: 'A' },
    { id: 'odnosi', sr: 'društveni odnosi', ru: 'общественные отношения', set: 'A' },
    { id: 'muzealija', sr: 'muzealija, etnografski predmet', ru: 'экспонат, этнографический предмет', set: 'A' },
    { id: 'okruzen', sr: 'okružen — okružen fakultetima', ru: 'окружён', set: 'A' },

    { id: 'posvecen', sr: 'posvećen — muzej posvećen Tesli', ru: 'посвящён', set: 'B' },
    { id: 'naucnik', sr: 'naučnik, izum', ru: 'учёный, изобретение', set: 'B' },
    { id: 'posetilac', sr: 'posetilac, posetioci', ru: 'посетитель, посетители', set: 'B' },
    { id: 'urna', sr: 'urna, preneta', ru: 'урна, перенесена', set: 'B' },
    { id: 'protest', sr: 'protest, protivljenje', ru: 'протест, сопротивление', set: 'B' },
    { id: 'memorijalni', sr: 'memorijalni muzej, lični predmeti', ru: 'мемориальный музей, личные вещи', set: 'B' },
    { id: 'zbirka', sr: 'zbirka, postavka, fond', ru: 'коллекция, экспозиция, фонд', set: 'B' },
    { id: 'reformator', sr: 'reformator i tvorac književnog jezika', ru: 'реформатор и создатель литературного языка', set: 'B' },
    { id: 'prosvetitelj', sr: 'prosvetitelj, ministar prosvete', ru: 'просветитель, министр просвещения', set: 'B' },
    { id: 'promaja', sr: 'promaja — strah od promaje', ru: 'сквозняк — страх сквозняка', set: 'B' },
    { id: 'kapa', sr: 'kapa za spavanje', ru: 'ночной колпак', set: 'B' },
    { id: 'preporuciti27', sr: 'preporučiti — Šta možete preporučiti?', ru: 'посоветовать', set: 'B' },
    { id: 'sala', sr: 'sala, scena, bina', ru: 'зал, сцена', set: 'B' },
    { id: 'publika', sr: 'publika, gledaoci', ru: 'публика, зрители', set: 'B' },
    { id: 'lutka', sr: 'lutka, lutkarska predstava', ru: 'кукла, кукольный спектакль', set: 'B' },
    { id: 'kostim', sr: 'kostim, garderoba', ru: 'костюм, гардероб', set: 'B' },
    { id: 'osnovan', sr: 'osnovan, otvoren', ru: 'основан, открыт', set: 'B' },
    { id: 'deca-mladi', sr: 'za decu i mlade — za odrasle', ru: 'для детей и молодёжи — для взрослых', set: 'B' },
    { id: 'ulaznica', sr: 'ulaznica, blagajna', ru: 'входной билет, касса', set: 'B' }
  ],

  verbs: {
    posetiti: { inf: 'posetiti', ru: 'посетить', l: { m: 'posetio', f: 'posetila', n: 'posetilo', mpl: 'posetili', fpl: 'posetile' } },
    pogledati: { inf: 'pogledati', ru: 'посмотреть', l: { m: 'pogledao', f: 'pogledala', n: 'pogledalo', mpl: 'pogledali', fpl: 'pogledale' } },
    kupiti: { inf: 'kupiti', ru: 'купить', l: { m: 'kupio', f: 'kupila', n: 'kupilo', mpl: 'kupili', fpl: 'kupile' } },
    otici: { inf: 'otići', ru: 'пойти, уйти', l: { m: 'otišao', f: 'otišla', n: 'otišlo', mpl: 'otišli', fpl: 'otišle' } },
    preporuciti: { inf: 'preporučiti', ru: 'посоветовать', pos: { ja: 'preporučim', ti: 'preporučiš', on: 'preporuči', mi: 'preporučimo', vi: 'preporučite', oni: 'preporuče' }, neg: { ja: 'ne preporučim', ti: 'ne preporučiš', on: 'ne preporuči', mi: 'ne preporučimo', vi: 'ne preporučite', oni: 'ne preporuče' }, l: { m: 'preporučio', f: 'preporučila', n: 'preporučilo', mpl: 'preporučili', fpl: 'preporučile' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '27.1',
      title: 'Gde da idemo?',
      ru: 'Куда сходить, Никола на книжной ярмарке, Этнографический музей',
      goals: [
        'назвать пять культурных мест и объяснить, что там происходит',
        'восстановить историю Николы и пересказать её в перфекте',
        'дополнить текст об Этнографическом музее словами из банка'
      ],
      blocks: [
        {
          type: 'letters', min: 6, title: 'Pogodite reč iz opisa · слово по описанию',
          note: 'Упражнение из курса: соберите слово из букв.',
          items: [
            { clue: 'Događaj gde sviraju muzikanti, a mi slušamo muziku', word: 'koncert' },
            { clue: 'Javni događaj na kome se trajno ili privremeno izlažu razni umetnički ili drugi predmeti', word: 'izložba' },
            { clue: 'Mesto gde glumci izvode predstavu', word: 'pozorište' },
            { clue: 'Mesto gde ljudi gledaju filmove', word: 'bioskop' },
            { clue: 'Događaj koji ima ekonomsku, kulturnu ili socijalnu svrhu', word: 'sajam' }
          ]
        },
        {
          type: 'text', min: 5, title: 'Kulturna mesta · слова',
          html: '<ul><li>[[muzej]] — музей, [[izložba]] — выставка, [[izlagati]] — выставлять, [[muzealija]] — экспонат</li>' +
            '<li>[[pozorište]] — театр, [[predstava]] — спектакль, [[glumac]] / [[glumica]] — актёр / актриса, [[bina]] — сцена, [[publika]] — публика</li>' +
            '<li>[[bioskop]] — кино, [[koncert]] — концерт, [[muzikanti]] — музыканты, [[sajam]] — ярмарка, [[sajam knjiga]] — книжная ярмарка</li>' +
            '<li>[[ulaznica]] / [[karta]] — билет, [[blagajna]] — касса, [[stajati u redu]] — стоять в очереди, [[napraviti pauzu]] — сделать перерыв</li></ul>' +
            '<p>[[Idem u pozorište.]] — [[Bio sam u pozorištu.]] [[Idem na koncert.]] — [[Bila sam na koncertu.]] [[Idem na sajam.]] — [[Bili smo na sajmu.]]</p>'
        },
        {
          type: 'speak', min: 6, title: 'Pitanja · вопросы из курса',
          items: [
            { q: 'Gde najviše volite da idete od ovih kulturnih i obrazovnih mesta? Zašto?', sample: 'Najviše volim da idem u bioskop, jer volim filmove i kokice.' },
            { q: 'Recite šta ste poslednji put posetili? Da li vam se svidelo?', sample: 'Poslednji put sam posetio izložbu fotografija. Svidela mi se.' },
            { q: 'Da li ste ikada bili na sajmu?', sample: 'Da, bila sam na sajmu knjiga u Beogradu prošlog oktobra.' }
          ]
        },
        {
          type: 'match', min: 7, title: 'Nikola na sajmu knjiga · восстановите порядок',
          note: 'Упражнение из курса: Никола рассказывает, как ходил на книжную ярмарку. Соедините номер шага и предложение.',
          pairs: [
            ['1', 'Nikola je pročitao na internetu kada će biti sajam knjiga.', 'Prvo, Nikola je pročitao na internetu kada će biti sajam knjiga.'],
            ['2', 'Nikola je kupio karte za sebe i prijatelja.', 'Drugo, Nikola je kupio karte za sebe i prijatelja.'],
            ['3', 'Rano je došao da ne bi stajao u redu.', 'Treće, rano je došao da ne bi stajao u redu.'],
            ['4', 'Nikola je dugo birao knjige.', 'Četvrto, Nikola je dugo birao knjige.'],
            ['5', 'Onda je odlučio da napravi pauzu za kafu i sendvič.', 'Peto, onda je odlučio da napravi pauzu za kafu i sendvič.'],
            ['6', 'Nakon toga je nastavio da bira knjige i poklone.', 'Šesto, nakon toga je nastavio da bira knjige i poklone.'],
            ['7', 'Na kraju je sebi kupio udžbenike engleskog jezika, sestri bojanku, a majci veliki kuvar.', 'Sedmo, na kraju je sebi kupio udžbenike engleskog jezika, sestri bojanku, a majci veliki kuvar.']
          ]
        },
        {
          type: 'text', min: 4, title: 'Priča o sajmu · прочитайте целиком',
          note: 'Прослушайте, потом один читает вслух, второй пересказывает в третьем лице, третьим шагом — от первого лица (ja sam pročitao…).',
          html: '<p>[[Nikola je pročitao na internetu kada će biti sajam knjiga. Kupio je karte za sebe i prijatelja. Rano je došao da ne bi stajao u redu. Dugo je birao knjige. Onda je odlučio da napravi pauzu za kafu i sendvič. Nakon toga je nastavio da bira knjige i poklone. Na kraju je sebi kupio udžbenike engleskog jezika, sestri bojanku, a majci veliki kuvar.]]</p>'
        },
        {
          type: 'text', min: 4, title: 'Etnografski muzej · перед текстом',
          img: 'img/l27_etnografski.png',
          html: '<p>Этнографический музей на Студентском тргу. Слова для текста: [[običaji]] — обычаи, [[zajednica]] — община, [[procesi]] — процессы, [[kod]] — у, около, [[već]] — а, но (здесь: «но и»), [[kultura]], [[nalazi se]] — находится, [[čuva]] — хранит, [[odnosi]] — отношения, [[stvaralaštvo]] — творчество.</p>'
        },
        {
          type: 'gap', bank: true, listen: true, min: 10, title: 'Saslušajte i unesite reči · текст из курса',
          note: 'В курсе это аудирование. Нажмите «Прослушать текст», потом заполните пропуски словами из списка.',
          items: [
            '{Kod} Studentskog parka, na Studentskom trgu 13, okružen Rektoratom, Filološkim fakultetom i Prirodno-matematičkim fakultetom, {nalazi se} Etnografski muzej.',
            'Etnografski muzej ne proučava samo srpsku kulturu, {već} i kulturu drugih etničkih {zajednica} iz susedstva.',
            'U muzeju se prikupljaju i proučavaju muzejski predmeti, etnogenetski {procesi}, tradicionalna materijalna {kultura}, društveni {odnosi} i porodični život: {običaji}, verovanja i narodno {stvaralaštvo}.',
            'Ovaj muzej sada {čuva} oko 50.000 etnografskih predmeta i više od 120.000 muzealija.'
          ]
        },
        {
          type: 'speak', min: 12, title: 'Gde smo bili? · расскажите по образцу Николы',
          note: 'Каждый рассказывает о своём последнем культурном выходе в 6–7 шагах, как Никола: prvo, zatim, onda, nakon toga, na kraju. Партнёр задаёт два вопроса.',
          record: true,
          items: [
            { q: 'Gde ste bili i kako ste saznali za događaj?', sample: 'Prošle nedelje sam bila na koncertu. Pročitala sam na internetu kada će biti.' },
            { q: 'Šta ste uradili prvo, zatim, onda?', sample: 'Prvo sam kupila karte. Zatim sam rano došla da ne bih stajala u redu. Onda sam napravila pauzu za kafu.' },
            { q: 'Šta je bilo na kraju? Da li vam se svidelo?', sample: 'Na kraju sam kupila majicu sa koncerta. Svidelo mi se, muzikanti su bili sjajni.' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'koncert, izložba, pozorište, bioskop, sajam; glumac, predstava, publika',
            'Idem u pozorište — bio sam u pozorištu; idem na koncert — bila sam na koncertu',
            'Prvo… zatim… onda… nakon toga… na kraju; da ne bih stajao u redu',
            'Muzej se nalazi kod parka, čuva predmete, proučava običaje i narodno stvaralaštvo'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: культурные места и музей', est: 8, set: 'A' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант по истории Николы', est: 6,
          items: [
            { a: ['Nikola je kupio karte za sebe i prijatelja.'] }, { a: ['Rano je došao da ne bi stajao u redu.'] }, { a: ['Onda je odlučio da napravi pauzu za kafu.'] },
            { a: ['Na kraju je majci kupio veliki kuvar.'] }, { a: ['Muzej se nalazi kod Studentskog parka.'] }, { a: ['Muzej čuva oko pedeset hiljada predmeta.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Куда ты больше всего любишь ходить?', a: ['Gde najviše voliš da ideš?', 'Kuda najviše voliš da ideš?'] },
            { q: 'Ты когда-нибудь был на ярмарке?', a: ['Da li si ikada bio na sajmu?', 'Jesi li ikada bio na sajmu?'] },
            { q: 'В прошлый раз мы были на выставке.', a: ['Prošli put smo bili na izložbi.', 'Poslednji put smo bili na izložbi.'] },
            { q: 'Он долго выбирал книги.', a: ['Dugo je birao knjige.', 'On je dugo birao knjige.'] },
            { q: 'Актёры играют спектакль в театре.', a: ['Glumci izvode predstavu u pozorištu.'] },
            { q: 'Музей изучает обычаи и народное творчество.', a: ['Muzej proučava običaje i narodno stvaralaštvo.'] },
            { q: 'Мне понравилось.', a: ['Svidelo mi se.'] }
          ]
        },
        {
          type: 'write', title: 'Moj dan na sajmu · рассказ по шагам + запись', est: 9, key: 'hw-27.1-sajam', record: true,
          note: 'Опишите свой (или воображаемый) поход на ярмарку, концерт или выставку в 7 шагах, как Никола: prvo, zatim, onda, nakon toga, na kraju. Запишите чтение вслух.',
          sample: 'Prvo sam pročitala na internetu kada će biti sajam knjiga. Zatim sam kupila kartu. Došla sam rano da ne bih stajala u redu. Dugo sam birala knjige o Srbiji. Onda sam napravila pauzu za kafu i burek. Nakon toga sam nastavila da biram poklone. Na kraju sam sebi kupila rečnik, a mami kuvar sa srpskim receptima.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '27.2',
      title: 'Najbolji muzeji Beograda i pozorište',
      ru: 'Музей Николы Теслы, музей Вука и Доситея, Малый театр «Душко Радович»',
      goals: [
        'прочитать два текста о музеях и восстановить пропущенные слова и формы',
        'посоветовать музей и объяснить, куда бы вы не советовали идти',
        'разобрать текст о детском театре и проверить утверждения'
      ],
      blocks: [
        {
          type: 'gap', bank: true, min: 10, title: 'Muzej Nikole Tesle · выберите слово',
          note: 'Упражнение из курса. Сначала прочитайте текст с пропусками, потом выберите слова.',
          img: 'img/l27_tesla.png',
          items: [
            'Na adresi Krunska 51 {nalazi se} muzej posvećen {Nikoli Tesli}, jednom od najvećih i najznačajnijih naučnika sa naših prostora.',
            '{Posetioci} ne samo što mogu da vide kako „rade“ Teslini izumi već mogu i da {pogledaju} kraći dokumentarni film o njegovom {životu}.',
            'U {muzeju} Nikole Tesle se od 1957. {godine} nalazi i njegova urna. Ona je zamalo preneta u {Hram} Svetog Save 2014. godine, ali se to, nakon protesta i protivljenja samog muzeja, ipak nije desilo.'
          ]
        },
        {
          type: 'gap', min: 10, title: 'Muzej Vuka i Dositeja · слово в нужной форме',
          note: 'Упражнение из курса: в скобках начальная форма, впишите нужную.',
          img: 'img/l27_vuk.png',
          items: [
            'Još jedan memorijalni muzej u {Beogradu} <i>(Beograd)</i> je Muzej Vuka i Dositeja. Lociran u Gospodar Jevremovoj 21, ova institucija otvorena je 1949. godine i nudi zbirku {ličnih predmeta} <i>(lični predmeti)</i>, najvažnijih dela i umetničkih prikaza Vuka Karadžića, reformatora i tvorca srpskog književnog jezika, i Dositeja Obradovića, {prosvetitelja} <i>(prosvetitelj)</i> i našeg {prvog ministra} <i>(prvi ministar)</i> prosvete.',
            'Postavka je izuzetno bogata, a deo fonda dolazi upravo iz {Narodnog muzeja} <i>(Narodni muzej)</i>. Tamo vas takođe {čeka} <i>(čekati)</i> i nekadašnja soba {Vuka Karadžića} <i>(Vuk Karadžić)</i>, sa sve kolekcijom kapa koje su mu služile za spavanje i smanjenje hroničnog straha od {promaje} <i>(promaja)</i> po kojem je i za života bio poznat.'
          ]
        },
        {
          type: 'speak', min: 7, title: 'Pitanja · вопросы из курса',
          items: [
            { q: 'Recite koje još muzeje u Beogradu poznajete?', sample: 'Poznajem Narodni muzej na Trgu republike i Muzej savremene umetnosti.' },
            { q: 'Šta možete preporučiti?', sample: 'Preporučujem Muzej Nikole Tesle, tamo izumi zaista rade.' },
            { q: 'Gde ne biste preporučili da idete? Zašto?', sample: 'Ne bih preporučio Muzej vazduhoplovstva zimi, jer je hladno i daleko.' }
          ]
        },
        {
          type: 'text', min: 6, title: 'Malo pozorište „Duško Radović“ · текст вместо видео',
          note: 'В курсе видео «O pozorištu» (посмотрите дома на YouTube). На занятии: прослушать, прочитать по абзацу.',
          html: '<p>[[Malo pozorište „Duško Radović“ nalazi se u Beogradu, kod Tašmajdana. To je pozorište za decu i mlade: prikazuje lutkarske i dramske predstave za najmlađu publiku, a uveče ponekad i za odrasle.]]</p>' +
            '<p>[[Pozorište je osnovano 1949. godine, a ime Duška Radovića nosi od 1985. godine. Duško Radović je bio pisac i pesnik, poznat po knjigama za decu i po aforizmima.]]</p>' +
            '<p>[[Pozorište ima dve scene: veliku i malu. Ima modernu tehniku: svetlo, zvuk i video projekcije. U garderobi se čuvaju stotine kostima i lutaka. Glumci i lutkari rade sa decom i posle predstave.]]</p>'
        },
        {
          type: 'tf', min: 5, title: 'Istina ili laž? · утверждения из курса',
          note: 'Те же утверждения, что в курсе; проверяем по тексту.',
          items: [
            { q: 'Pozorište se nalazi na Tašmajdanu.', a: true },
            { q: 'Pozorište prikazuje predstave za odrasle.', a: false, why: 'Pre svega za decu i mlade, za odrasle samo ponekad uveče.' },
            { q: 'Pozorište je otvoreno 1998. godine.', a: false, why: 'Osnovano je 1949. godine.' },
            { q: 'Duško Radović — pisac.', a: true },
            { q: 'U pozorištu je malo moderne tehnologije.', a: false, why: 'Ima modernu tehniku: svetlo, zvuk i video projekcije.' },
            { q: 'Pozorište ima dve scene.', a: true }
          ]
        },
        {
          type: 'conj', min: 5, title: 'Trening · perfekat: posetiti, pogledati, kupiti, otići',
          tense: 'past', verbs: ['posetiti', 'pogledati', 'kupiti', 'otici'], rounds: 8
        },
        {
          type: 'speak', min: 11, title: 'Hajde u pozorište! · договоритесь о походе',
          note: 'Дополнительный материал курса не сохранился, поэтому вместо него разговор. Один предлагает сходить в театр, музей или кино, другой сомневается и задаёт вопросы: kad, koliko košta, gde se nalazi, za koga je. Договоритесь и составьте план.',
          record: true,
          items: [
            { q: 'Hajde da idemo u pozorište u subotu! Šta misliš?', sample: 'Može, ali koja predstava? I koliko košta ulaznica?' },
            { q: 'Gde se nalazi? Kako idemo tamo?', sample: 'Nalazi se kod Tašmajdana, idemo tramvajem. Predstava počinje u sedam.' },
            { q: 'Šta ćemo raditi pre i posle predstave?', sample: 'Pre predstave ćemo popiti kafu, a posle ćemo prošetati do Kalemegdana.' },
            { q: 'A šta bi ti radije: muzej, bioskop ili koncert?', sample: 'Ja bih radije koncert, ali pozorište je takođe dobra ideja.' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'muzej posvećen Tesli; posetioci, izumi, urna, Hram Svetog Save',
            'Muzej Vuka i Dositeja: lični predmeti, zbirka, prosvetitelj, strah od promaje',
            'Malo pozorište „Duško Radović“: za decu i mlade, dve scene, lutke i kostimi',
            'Šta možete preporučiti? — Preporučujem… Ne bih preporučio…'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: музеи и театр', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: музеи', est: 6,
          items: [
            { a: ['Muzej je posvećen Nikoli Tesli.'] }, { a: ['Posetioci mogu da vide kako rade Teslini izumi.'] }, { a: ['U muzeju se nalazi i njegova urna.'] },
            { a: ['Vuk Karadžić je tvorac srpskog književnog jezika.'] }, { a: ['Pozorište je osnovano hiljadu devetsto četrdeset devete godine.'] }, { a: ['Glumci rade sa decom posle predstave.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Музей находится на улице Крунска, 51.', a: ['Muzej se nalazi u Krunskoj 51.', 'Muzej se nalazi na adresi Krunska 51.', 'Muzej se nalazi u ulici Krunska 51.'] },
            { q: 'Какие музеи в Белграде вы знаете?', a: ['Koje muzeje u Beogradu poznajete?', 'Koje muzeje u Beogradu znate?'] },
            { q: 'Что вы можете посоветовать?', a: ['Šta možete da preporučite?', 'Šta možete preporučiti?'] },
            { q: 'Я бы не советовал идти туда зимой.', a: ['Ne bih preporučio da idete tamo zimi.', 'Ne bih preporučio da se ide tamo zimi.', 'Ne bih preporučila da idete tamo zimi.'] },
            { q: 'Театр показывает спектакли для детей.', a: ['Pozorište prikazuje predstave za decu.'] },
            { q: 'Мы посмотрели короткий документальный фильм.', a: ['Pogledali smo kraći dokumentarni film.', 'Pogledali smo kratak dokumentarni film.', 'Pogledali smo kratki dokumentarni film.'] },
            { q: 'Пойдём в театр в субботу!', a: ['Hajde da idemo u pozorište u subotu!', 'Hajdemo u pozorište u subotu!'] }
          ]
        },
        {
          type: 'write', title: 'Preporuka · рекомендация музея или спектакля + запись', est: 9, key: 'hw-27.2-preporuka', record: true,
          note: '8 предложений: посоветуйте другу музей, спектакль или концерт в вашем городе: где находится, чему посвящён, что можно увидеть, сколько стоит билет, почему стоит пойти. Запишите чтение вслух.',
          sample: 'Preporučujem ti Muzej Nikole Tesle. Nalazi se u Krunskoj ulici, blizu centra. Muzej je posvećen velikom naučniku. Posetioci mogu da vide kako rade njegovi izumi. Vodič pokazuje eksperimente sa strujom. Ulaznica košta oko 800 dinara. Muzej je otvoren svaki dan osim ponedeljka. Idi rano, jer je često red!'
        }
      ]
    }
  ]
});
