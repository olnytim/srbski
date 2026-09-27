// Lekcija 24 - Kućni ljubimci i životinje. Three 60-minute sessions: pets + texts, pronouns (interrogative, koji/kakav, negative/indefinite), wild & farm animals.
COURSE.register({
  n: 24,
  title: 'Kućni ljubimci i životinje',
  ru: 'Питомцы, дикие и домашние животные; вопросительные, koji / kakav, отрицательные и неопределённые местоимения',

  vocab: [
    { id: 'osmeh24', sr: 'Osmeh!', ru: 'Улыбка! Улыбочку!', set: 'A' },
    { id: 'kuc-kuc', sr: 'kuc-kuc — mac-mac', ru: 'как подзывают собак — кошек', set: 'A' },
    { id: 'dodji', sr: 'Dođi!', ru: 'Иди сюда!', set: 'A' },
    { id: 'kuca', sr: 'kuca — pas', ru: 'собачка — собака', set: 'A' },
    { id: 'ludak', sr: 'ludak', ru: 'сумасшедший', set: 'A' },
    { id: 'guska', sr: 'guska — vrh!', ru: 'гусь — класс, отлично!', set: 'A' },
    { id: 'macak', sr: 'mačak / mačka / mačor', ru: 'кот / кошка / котище', set: 'A' },
    { id: 'papagaj', sr: 'papagaj', ru: 'попугай', set: 'A' },
    { id: 'pacov', sr: 'pacov, činčila, hrčak, morsko prase', ru: 'крыса, шиншилла, хомяк, морская свинка', set: 'A' },
    { id: 'kornjaca', sr: 'kornjača, zmija, zec / kunić, ribica', ru: 'черепаха, змея, заяц / кролик, рыбка', set: 'A' },
    { id: 'hrana-za-pse', sr: 'hrana za pse, poslastica', ru: 'корм для собак, угощение', set: 'A' },
    { id: 'rasa', sr: 'rasa — labrador', ru: 'порода — лабрадор', set: 'A' },
    { id: 'povodac', sr: 'povodac, ogrlica', ru: 'поводок, ошейник', set: 'A' },
    { id: 'stene', sr: 'štene, psić', ru: 'щенок, пёсик', set: 'A' },
    { id: 'maziti-se', sr: 'maziti se, ja se mazim', ru: 'ласкаться', set: 'A' },
    { id: 'azil', sr: 'azil', ru: 'приют', set: 'A' },
    { id: 'lezaj', sr: 'ležaj, kućica', ru: 'лежанка, домик', set: 'A' },
    { id: 'masnica', sr: 'igrati se sa mašnicom', ru: 'играть с бантиком', set: 'A' },
    { id: 'brbljivac', sr: 'brbljivac, pričljiv', ru: 'болтун, разговорчивый', set: 'A' },
    { id: 'kavez', sr: 'kavez', ru: 'клетка', set: 'A' },
    { id: 'zaljubljen24', sr: 'zaljubljen u svog papagaja žako', ru: 'влюблён в своего попугая жако', set: 'A' },
    { id: 'hraniti', sr: 'hraniti, ja hranim — dobro hrani psa', ru: 'кормить — хорошо кормит собаку', set: 'A' },
    { id: 'setnja', sr: 'ići u šetnju dva puta dnevno', ru: 'ходить гулять два раза в день', set: 'A' },

    { id: 'upitne', sr: 'upitne zamenice — ko? šta? koga? čega? kome? čemu? kim? čim?', ru: 'вопросительные местоимения (без мн. числа)', set: 'B' },
    { id: 'koji-kakav', sr: 'koji? — который из; kakav? — какой по качеству', ru: 'Koji mačak je tvoj? — Kakav je tvoj mačak?', set: 'B' },
    { id: 'nista', sr: 'ništa — nešto — išta', ru: 'ничего — что-то — что-либо', set: 'B' },
    { id: 'niko', sr: 'niko — neko — iko', ru: 'никто — кто-то — кто-либо', set: 'B' },
    { id: 'nigde', sr: 'nigde — negde — igde', ru: 'нигде — где-то — где-либо', set: 'B' },
    { id: 'nikako', sr: 'nikako — nekako — ikako', ru: 'никак — как-то — как-либо', set: 'B' },
    { id: 'niciji', sr: 'ničiji — nečiji — ičiji', ru: 'ничей — чей-то — чей-либо', set: 'B' },
    { id: 'nikada', sr: 'nikada — nekada — ikada', ru: 'никогда — когда-то — когда-либо', set: 'B' },
    { id: 'cistiti-kavez', sr: 'čistiti kavez za papagaja', ru: 'чистить клетку попугая', set: 'B' },
    { id: 'plasiti-se24', sr: 'plašiti se vatrometa, skrivati se ispod kauča', ru: 'бояться фейерверка, прятаться под диваном', set: 'B' },
    { id: 'ostaviti', sr: 'ostaviti samu', ru: 'оставить одну', set: 'B' },
    { id: 'kasa', sr: 'kaša — davati kašu ovcama', ru: 'каша — давать кашу овцам', set: 'B' },
    { id: 'lov', sr: 'ići u lov na divlju svinju', ru: 'идти на охоту на кабана', set: 'B' },
    { id: 'nezan', sr: 'nežan, smešan', ru: 'нежный, смешной', set: 'B' },
    { id: 'useliti', sr: 'useliti iz azila', ru: 'взять из приюта (заселить)', set: 'B' },
    { id: 'milijarda', sr: 'milijarda', ru: 'миллиард', set: 'B' },
    { id: 'veterinar24', sr: 'kod veterinara', ru: 'у ветеринара', set: 'B' },
    { id: 'ara', sr: 'papagaj ara', ru: 'попугай ара', set: 'B' },

    { id: 'lisica', sr: 'lisica, vuk, medved, šišmiš', ru: 'лиса, волк, медведь, летучая мышь', set: 'C' },
    { id: 'jelen', sr: 'jelen, sova, jež, divlja svinja, žaba', ru: 'олень, сова, ёж, кабан, лягушка', set: 'C' },
    { id: 'krava', sr: 'krava, konj, kokoška / petao, svinja', ru: 'корова, конь, курица / петух, свинья', set: 'C' },
    { id: 'curka', sr: 'ćurka, patka, guska, ovca, magarac', ru: 'индюшка, утка, гусь, овца, осёл', set: 'C' },
    { id: 'dlaka', sr: 'dlaka, rep, šapa', ru: 'шерсть, хвост, лапа', set: 'C' },
    { id: 'krilo', sr: 'krilo, kljun, perje', ru: 'крыло, клюв, перья', set: 'C' },
    { id: 'ljuska', sr: 'ljuska, peraja, rogovi, kopito', ru: 'чешуя, плавники, рога, копыто', set: 'C' },
    { id: 'kukavica', sr: 'kukavica — strašljiv', ru: 'кукушка — трусливый', set: 'C' },
    { id: 'zmaj', sr: 'zmaj — snalažljiv', ru: 'дракон — находчивый', set: 'C' },
    { id: 'pas-veran', sr: 'pas — veran; sova — mudar', ru: 'собака — верный; сова — мудрый', set: 'C' },
    { id: 'magarac-glup', sr: 'konj / magarac — glup; svinja — pametan, čist', ru: 'конь / осёл — глупый; свинья — умный, чистый', set: 'C' },
    { id: 'glup-kao-guska', sr: 'Glup kao guska.', ru: 'Глуп, как гусь.', set: 'C' },
    { id: 'biser', sr: 'Biser ne valja pred svinje bacati.', ru: 'Не мечи бисер перед свиньями.', set: 'C' },
    { id: 'misevi', sr: 'Gde nema mačke, tu miševi kolo vode.', ru: 'Кот из дома — мыши в пляс.', set: 'C' },
    { id: 'tele', sr: 'Gledi kao tele u šarena vrata.', ru: 'Смотрит, как баран на новые ворота.', set: 'C' },
    { id: 'corava-koka', sr: 'I ćorava koka nađe zrno.', ru: 'И слепая курица найдёт зерно.', set: 'C' },
    { id: 'stoka', sr: 'stoka — domaće životinje', ru: 'скот — домашние животные', set: 'C' },
    { id: 'kresta', sr: 'crvena kresta na glavi', ru: 'красный гребень на голове', set: 'C' },
    { id: 'muce', sr: 'muče i daje mleko', ru: 'мычит и даёт молоко', set: 'C' }
  ],

  verbs: {
    hraniti: { inf: 'hraniti', ru: 'кормить', pos: { ja: 'hranim', ti: 'hraniš', on: 'hrani', mi: 'hranimo', vi: 'hranite', oni: 'hrane' }, neg: { ja: 'ne hranim', ti: 'ne hraniš', on: 'ne hrani', mi: 'ne hranimo', vi: 'ne hranite', oni: 'ne hrane' }, l: { m: 'hranio', f: 'hranila', n: 'hranilo', mpl: 'hranili', fpl: 'hranile' } },
    maziti: { inf: 'maziti se', ru: 'ласкаться', pos: { ja: 'se mazim', ti: 'se maziš', on: 'se mazi', mi: 'se mazimo', vi: 'se mazite', oni: 'se maze' }, neg: { ja: 'se ne mazim', ti: 'se ne maziš', on: 'se ne mazi', mi: 'se ne mazimo', vi: 'se ne mazite', oni: 'se ne maze' }, l: { m: 'se mazio', f: 'se mazila', n: 'se mazilo', mpl: 'se mazili', fpl: 'se mazile' } },
    plasiti: { inf: 'plašiti se', ru: 'бояться', pos: { ja: 'se plašim', ti: 'se plašiš', on: 'se plaši', mi: 'se plašimo', vi: 'se plašite', oni: 'se plaše' }, neg: { ja: 'se ne plašim', ti: 'se ne plašiš', on: 'se ne plaši', mi: 'se ne plašimo', vi: 'se ne plašite', oni: 'se ne plaše' }, l: { m: 'se plašio', f: 'se plašila', n: 'se plašilo', mpl: 'se plašili', fpl: 'se plašile' } },
    cistiti: { inf: 'čistiti', ru: 'чистить', l: { m: 'čistio', f: 'čistila', n: 'čistilo', mpl: 'čistili', fpl: 'čistile' } },
    kupiti: { inf: 'kupiti', ru: 'купить', l: { m: 'kupio', f: 'kupila', n: 'kupilo', mpl: 'kupili', fpl: 'kupile' } },
    videti: { inf: 'videti', ru: 'видеть', l: { m: 'video', f: 'videla', n: 'videlo', mpl: 'videli', fpl: 'videle' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '24.1',
      title: 'Naši ljubimci',
      ru: 'Питомцы, три текста о Шишко, Крцко и Эдуарде, разговор о питомцах',
      goals: [
        'назвать 12 питомцев и аксессуары: povodac, ogrlica, kavez, ležaj',
        'прочитать три текста и пересказать их',
        'рассказать о своём питомце или о том, кого хотели бы завести'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Male njuške',
          note: 'Тесла с голубем, Андрич с собакой, а дед с гусями всех считает сумасшедшими. Прочитайте кириллицу сами.',
          img: 'img/l24_strip.png',
          lines: [
            { who: 'Nikola', sr: 'Golube, moj golube! Volim te najviše od svega na svetu!', ru: 'Голубь, мой голубь! Люблю тебя больше всего на свете!' },
            { who: 'Ivo', sr: 'He-he, osmeh! Kuc-kuc, lepa kuca! Dođi dođi!', ru: 'Хе-хе, улыбочку! Куц-куц, красивая собачка! Иди, иди сюда!' },
            { who: 'Deda', sr: 'Pa ja ovih ludaka ne razumem, meni je na selu sa guskama vrh!', ru: 'Я этих сумасшедших не понимаю, мне в деревне с гусями — класс!' }
          ]
        },
        {
          type: 'text', min: 5, title: 'Kućni ljubimci · питомцы',
          img: 'img/l24_ljubimci.png',
          html: '<ul><li>[[pas]] / [[kuca]] — собака, [[mačak]] / [[mačka]] / [[mačor]] — кот / кошка / котище</li><li>[[pacov]] — крыса, [[činčila]] — шиншилла, [[papagaj]] — попугай, [[hrčak]] — хомяк</li><li>[[zmija]] — змея, [[kornjača]] — черепаха, [[morsko prase]] — морская свинка, [[zec]] / [[kunić]] — заяц / кролик, [[ribica]] — рыбка</li></ul>' +
            '<p>Как подзывают: [[kuc-kuc]] — собак, [[mac-mac]] — кошек. [[Dođi!]] — Иди сюда!</p>'
        },
        {
          type: 'speak', min: 5, title: 'Pitanja · вопросы из курса',
          items: [
            { q: 'Da li vi imate kućnih ljubimaca?', sample: 'Imam mačku. Zove se Mura, ima tri godine.' },
            { q: 'Ako ne, koga biste želeli?', sample: 'Nemam, ali bih želeo psa, labradora.' },
            { q: 'Ko je, po vašem mišljenju, najbolji ljubimac i zašto?', sample: 'Mislim da je pas najbolji ljubimac, jer je veran i voli da se šeta.' }
          ]
        },
        {
          type: 'match', min: 4, title: 'Prevedite reči · слова из текстов',
          pairs: [
            ['hrana za pse', 'корм для собак'], ['poslastica', 'угощение'], ['rasa', 'порода'], ['povodac', 'поводок'], ['ogrlica', 'ошейник'],
            ['mačor', 'котище'], ['maziti se', 'ласкаться'], ['azil', 'приют'], ['ležaj', 'лежанка'], ['brbljivac', 'болтун'], ['pričljiv', 'разговорчивый'], ['kavez', 'клетка для животных']
          ]
        },
        {
          type: 'text', min: 6, title: 'Pročitajte tekstove · три текста',
          note: 'Прослушайте каждый, потом прочитайте вслух.',
          html:
            '<p><b>Šiško.</b> [[Maja ima štene, malog psića. Njen psić se zove Šiško. Šiško ima 7 meseci, njegova rasa je labrador. Maja ide sa njim u šetnju dva puta dnevno i dobro hrani Šiška. Maja daje psu hranu za pse i poslastice. Šiško takođe ima svoj povodac i ogrlicu.]]</p>' +
            '<p><b>Krcko.</b> [[Petar i Ana imaju mačaka. Ne, to nije mačak, to je mačor! Mačor se zove Krcko i ima 7 godina. Obožava da se mazi i da se igra sa mašnicom. Petar i Ana su uzeli Krcka iz azila. Sada Krcko ima i svoju kućicu, i svoj ležaj.]]</p>' +
            '<p><b>Eduard.</b> [[Dejan je prosto zaljubljen u svog papagaja žako! Papagaj je star 5 godina, zove se Eduard. Eduard je pravi brbljivac, veoma je pričljiv i veseo ljubimac. Papagaj živi u kavezu.]]</p>'
        },
        {
          type: 'tf', min: 4, title: 'Tačno ili netačno? · по текстам',
          items: [
            { q: 'Šiško je mačak.', a: false, why: 'Šiško je štene, labrador.' }, { q: 'Maja šeta Šiška dva puta dnevno.', a: true }, { q: 'Krcko je mačka.', a: false, why: 'Krcko je mačor!' },
            { q: 'Petar i Ana su uzeli Krcka iz azila.', a: true }, { q: 'Eduard je tih papagaj.', a: false, why: 'Eduard je brbljivac, veoma je pričljiv.' }, { q: 'Papagaj živi u kavezu.', a: true }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Dopunite · впишите слова из текстов',
          items: [
            'Maja ima {štene}, malog psića. Njegova {rasa} je labrador.', 'Maja daje psu {hranu} za pse i {poslastice}.', 'Šiško ima svoj {povodac} i {ogrlicu}.',
            'To nije mačak, to je {mačor}! Obožava da {se mazi}.', 'Petar i Ana su uzeli Krcka iz {azila}. Sada ima svoj {ležaj}.', 'Eduard je pravi {brbljivac}. Papagaj živi u {kavezu}.'
          ]
        },
        {
          type: 'conj', min: 4, title: 'Trening · hraniti, maziti se, plašiti se',
          verbs: ['hraniti', 'maziti', 'plasiti'], rounds: 6
        },
        {
          type: 'speak', min: 15, title: 'Moj ljubimac · расскажите по образцу',
          note: 'Каждый рассказывает о своём питомце (или о питомце друзей, или о воображаемом) по образцу текстов: кто, как зовут, сколько лет, порода, что любит, что ест, где живёт. Партнёр задаёт три вопроса. Потом пересказ в третьем лице.',
          items: [
            { q: 'Ko je tvoj ljubimac? Kako se zove? Koliko ima godina?', sample: 'Imam mačku. Zove se Mura, ima tri godine, rasa je britanska.' },
            { q: 'Šta voli da radi? Šta jede?', sample: 'Voli da se mazi i da spava na kauču. Jede hranu za mačke i ribu.' },
            { q: 'Gde ste je uzeli? Gde živi?', sample: 'Uzeli smo je iz azila. Živi u stanu, ima svoj ležaj i kućicu.' },
            { q: 'Koga bi želeo / želela da imaš?', sample: 'Želela bih papagaja, jer je pričljiv i veseo.' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'pas / kuca, mačak / mačka / mačor, papagaj, hrčak, kornjača, zmija, ribica',
            'hrana za pse, poslastica, povodac, ogrlica, kavez, ležaj, azil',
            'Ide u šetnju dva puta dnevno. Obožava da se mazi. Pravi brbljivac.',
            'kuc-kuc, mac-mac, Dođi!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: питомцы', est: 9, set: 'A' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант по текстам', est: 5,
          items: [
            { a: ['Maja ima štene, malog psića.'] }, { a: ['Njegova rasa je labrador.'] }, { a: ['To nije mačak, to je mačor!'] },
            { a: ['Obožava da se mazi i da se igra sa mašnicom.'] }, { a: ['Uzeli su Krcka iz azila.'] }, { a: ['Eduard je pravi brbljivac.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'У тебя есть домашние животные?', a: ['Da li imaš kućne ljubimce?', 'Da li imaš kućnih ljubimaca?', 'Imaš li kućne ljubimce?'] },
            { q: 'Мая гуляет с собакой два раза в день.', a: ['Maja ide sa psom u šetnju dva puta dnevno.', 'Maja šeta psa dva puta dnevno.'] },
            { q: 'Кот любит ласкаться.', a: ['Mačak voli da se mazi.', 'Mačor voli da se mazi.'] },
            { q: 'Мы взяли кошку из приюта.', a: ['Uzeli smo mačku iz azila.'] },
            { q: 'Попугай живёт в клетке.', a: ['Papagaj živi u kavezu.'] },
            { q: 'Я бы хотел завести хомяка.', a: ['Želeo bih da imam hrčka.', 'Hteo bih da imam hrčka.', 'Želela bih da imam hrčka.'] },
            { q: 'Собака — лучший питомец, потому что она верная.', a: ['Pas je najbolji ljubimac, jer je veran.'] }
          ]
        },
        {
          type: 'write', title: 'Moj ljubimac · текст по образцу + запись', est: 8, key: 'hw-24.1-ljubimac', record: true,
          note: '8 предложений о своём или воображаемом питомце по образцу текстов. Запишите чтение вслух.',
          sample: 'Imam mačku. Zove se Mura i ima tri godine. Njena rasa je britanska. Uzela sam je iz azila pre dve godine. Mura obožava da se mazi i da spava na kauču. Dajem joj hranu za mačke i ponekad ribu. Ima svoj ležaj i kućicu. Ne voli povodac, ali voli mašnice!'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '24.2',
      title: 'Zamenice',
      ru: 'Вопросительные местоимения по падежам; koji или kakav; ništa / nešto / išta',
      goals: [
        'задать вопрос нужным падежным местоимением: koga? čemu? sa kim? o čemu?',
        'различать koji (который из) и kakav (какой по качеству)',
        'использовать отрицательные и неопределённые местоимения: niko, neko, iko…'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о питомце. Партнёр задаёт три вопроса: Kako se zove? Šta jede? Gde spava?',
          items: [{ q: 'Imam…' }]
        },
        {
          type: 'text', min: 5, title: 'Upitne zamenice · вопросительные местоимения',
          html: '<p>Эти формы знакомы по таблицам склонений, но они используются и сами по себе как вопросительные местоимения. У них нет множественного числа.</p>' +
            '<p>[[Šta si dao svom hrčaku?]] [[Čega se boji tvoja kuca?]] [[Koga je ugrizao tvoj pacov?]]</p>',
          tables: [
            { caption: 'Ko? Šta?', head: ['padež', 'zamenica'], rows: [['Nominativ', 'ko? šta?'], ['Genitiv', 'koga? čega?'], ['Dativ', 'kome? čemu?'], ['Akuzativ', 'koga? šta?'], ['Instrumental', 'kim? čim?'], ['Lokativ', 'o kome? o čemu?']] }
          ]
        },
        {
          type: 'gap', min: 7, title: 'Unesite odgovarajuće pitanje · вопросительное местоимение',
          note: 'Упражнение из курса.',
          items: [
            '— {Šta} si radio juče? — Pa čistio sam kavez za papagaja.', '— {Čega} se plaši tvoj pas? — Baš se plaši vatrometa, uvek skriva se ispod kauča.',
            '— Sa {kim} ćete putovati sutra? — Putovaćemo sa porodicom i takođe sa činčilom, jer ne možemo nju da ostavimo samu.', '— {Koga} je ona videla u šumi? — Kaže da je videla medveda i neku drugu životinju, možda divlju svinju.',
            '— {Kome} će davati ovu kašu i mleko? — Davaće ovu kašu i mleko ovcama u dvorištu.', '— {Čemu} se raduješ? — Novom kućnom ljubimcu! Mama je kupila ribica i kornjaču.', '— O {čemu} razmišljaju? — Sada razmišljaju da idu u lov na divlju svinju.'
          ]
        },
        {
          type: 'text', min: 4, title: 'Koji ili kakav? · который или какой',
          html: '<p>Две формы часто путают, но разница ключевая:</p><ul><li><b>koji</b> — который из множества, какой из множества: [[Koji mačak je tvoj? — Ovaj crn sa belim repom.]]</li><li><b>kakav</b> — какой по качеству, свойству: [[Kakav je tvoj mačak? — On je crn, velik i veoma veseo!]]</li></ul>' +
            '<p>Оба склоняются как прилагательные: koji, koja, koje, koji, koje; kakav, kakva, kakvo, kakvi, kakve.</p>'
        },
        {
          type: 'gap', min: 6, title: 'Izaberite tačan odgovor · koji или kakav',
          note: 'Упражнение из курса.',
          options: ['Koji', 'Koja', 'Koje', 'Koju', 'Kakav', 'Kakva', 'Kakve', 'kojeg', 'kakve', 'koje', 'kojom', 'kakvom'],
          items: [
            '{Kakav} je tvoj pas? — Veoma smešan i nežan, voli da se mazi i da se igra.', '{Koju} ribicu želiš da kupimo? Ima ih mnogo. — Ovu, vidi, ovu žutu sa plavim repom!',
            '{Kakve} lepe lisice! Pogledaj samo njihove tanke šape i guste repove!', 'To te taj psić, {kojeg} sam usela iz azila.',
            'Ne volimo, {kakve} ogrlice ona kupuje za pse i mačke — veoma su male.', 'Ne znam ni ja, {koje} zmiju su izgubili! Ima ih ovde milijarda!?', 'Sa {kojom} pticom je bila ova žena kod veterinara? — Sa lepom, velikom, kao papagaj ara.'
          ]
        },
        {
          type: 'text', min: 5, title: 'Odrične i neodređene zamenice · ni- / ne- / i-',
          html: '<p>[[ništa]] — ничего, [[nešto]] — что-то, [[išta]] — что-либо. Эта логика с приставками распространяется и на другие местоимения:</p>',
          tables: [
            { caption: 'ni- / ne- / i-', head: ['ni- (нет)', 'ne- (какой-то)', 'i- (какой-либо)'], rows: [['ništa', 'nešto', 'išta'], ['niko', 'neko', 'iko'], ['nigde', 'negde', 'igde'], ['nikako', 'nekako', 'ikako'], ['ničiji', 'nečiji', 'ičiji'], ['nikada', 'nekada', 'ikada']] }
          ]
        },
        {
          type: 'qa', mode: 'translate', min: 8, title: 'Prevedite · переведите на сербский',
          note: 'Упражнение из курса. Сначала вслух.',
          items: [
            { q: 'Кто-то вчера купил того хомяка. Но никто не покупает змею!', a: ['Neko je juče kupio tog hrčka. Ali niko ne kupuje zmiju!', 'Neko je juče kupio onog hrčka. Ali niko ne kupuje zmiju!'] },
            { q: 'Нигде нет корма для свиней! Где-то нужно купить.', a: ['Nigde nema hrane za svinje! Negde treba kupiti.', 'Nigde nema hrane za svinje! Treba negde da kupimo.'] },
            { q: 'Ты что-либо видел? — Нет, я ничего не видел! Только сову!', a: ['Da li si išta video? Ne, nisam ništa video! Samo sovu!', 'Jesi li išta video? Ne, ništa nisam video! Samo sovu!'] },
            { q: 'Мы никогда не были в приюте, а сейчас хотим собаку и кошку.', a: ['Nikada nismo bili u azilu, a sada hoćemo psa i mačku.', 'Nikada nismo bili u azilu, a sada želimo psa i mačku.'] },
            { q: 'Чей это хвост? — Ничей, это моя игрушка.', a: ['Čiji je ovo rep? Ničiji, to je moja igračka.', 'Čiji je to rep? Ničiji, to je moja igračka.'] },
            { q: 'Как-нибудь мы поедем с попугаем в самолёте, он болтун — это проблема.', a: ['Nekako ćemo putovati sa papagajem u avionu, on je brbljivac, to je problem.', 'Nekako ćemo ići sa papagajem avionom, on je brbljivac, to je problem.'] }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Unesite oblik zamenice · по подсказке',
          note: 'Упражнение из курса. Подсказка — по-русски.',
          items: [
            '{Nekada} (когда-то) moja porodica je imala psa.', 'Mačka {nikako} (никак) nije htela da popije lek.', 'Da li ste {ikada} (когда-либо) imali kućnog ljubimca?',
            '{Kakva} (какая) je ta krava? Da li je velika?', '{Čime} (чем) ti hraniš svoje svinje?', '{Koja} (которая) od ovih ovca je tvoja?', 'Tata je {nešto} (что-то) kupio, mislim, to je hrčak!', '{Nikada} (никогда) nisam video papagaja ara.'
          ]
        },
        {
          type: 'speak', min: 12, title: 'Pitanja i zamenice · разговор',
          note: 'Задайте друг другу по шесть вопросов о питомцах и животных, используя разные падежные местоимения (koga, čega, kome, sa kim, o čemu) и koji / kakav. Отвечайте с neko / niko / nešto / ništa / nigde / nikada.',
          items: [
            { q: 'Čega se plaši tvoj ljubimac? Sa kim se igra?', sample: 'Plaši se usisivača. Igra se sa mnom i sa mojom sestrom.' },
            { q: 'Kakav je tvoj pas? Koji pas u parku je tvoj?', sample: 'Moj pas je veliki i nežan. Onaj crni sa belim repom je moj.' },
            { q: 'Da li si ikada video / videla medveda? Da li neko u tvojoj porodici ima zmiju?', sample: 'Nikada nisam video medveda. Niko nema zmiju, ali neko ima kornjaču.' },
            { q: 'O čemu razmišljaš kad vidiš pacova?', sample: 'Ne razmišljam ni o čemu, samo bežim!' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'ko? koga? kome? koga? kim? o kome? — šta? čega? čemu? šta? čim? o čemu?',
            'Koji mačak je tvoj? — Kakav je tvoj mačak?',
            'ništa — nešto — išta; niko — neko — iko; nigde — negde — igde; nikada — nekada — ikada',
            'Nikada nismo bili u azilu. Ničiji rep.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: местоимения и слова упражнений', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'transform', title: 'Zamenice · переведите слово', est: 5,
          items: [
            { q: 'никто', a: ['niko'] }, { q: 'кто-то', a: ['neko'] }, { q: 'кто-либо', a: ['iko'] }, { q: 'ничего', a: ['ništa'] }, { q: 'что-то', a: ['nešto'] },
            { q: 'нигде', a: ['nigde'] }, { q: 'где-то', a: ['negde'] }, { q: 'никогда', a: ['nikada', 'nikad'] }, { q: 'когда-то', a: ['nekada', 'nekad'] }, { q: 'ничей', a: ['ničiji'] }, { q: 'никак', a: ['nikako'] }, { q: 'как-то', a: ['nekako'] }
          ]
        },
        { type: 'conj', tense: 'past', title: 'Тренажёр: перфект', est: 4, verbs: ['cistiti', 'kupiti', 'videti', 'hraniti'], rounds: 8 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Čega se plaši tvoj pas?'] }, { a: ['Sa kim ćete putovati sutra?'] }, { a: ['Čemu se raduješ? Novom kućnom ljubimcu!'] },
            { a: ['Koji mačak je tvoj? Kakav je tvoj mačak?'] }, { a: ['Nigde nema hrane za svinje!'] }, { a: ['Nikada nisam video papagaja ara.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Что ты дал своему хомяку?', a: ['Šta si dao svom hrčaku?', 'Šta si dala svom hrčaku?'] },
            { q: 'Кого укусила твоя крыса?', a: ['Koga je ugrizao tvoj pacov?'] },
            { q: 'О чём они думают?', a: ['O čemu razmišljaju?', 'O čemu oni razmišljaju?', 'O čemu misle?'] },
            { q: 'Какой (по качеству) твой пёс? — Смешной и нежный.', a: ['Kakav je tvoj pas? Smešan i nežan.', 'Kakav je tvoj pas? — Smešan i nežan.'] },
            { q: 'Которую рыбку ты хочешь купить?', a: ['Koju ribicu želiš da kupiš?', 'Koju ribicu hoćeš da kupiš?'] },
            { q: 'Никто не покупает змею.', a: ['Niko ne kupuje zmiju.'] },
            { q: 'Ты когда-либо имел питомца?', a: ['Da li si ikada imao kućnog ljubimca?', 'Jesi li ikada imao kućnog ljubimca?', 'Da li si ikada imala kućnog ljubimca?'] },
            { q: 'Кошка никак не хотела выпить лекарство.', a: ['Mačka nikako nije htela da popije lek.'] }
          ]
        },
        {
          type: 'write', title: 'Intervju sa vlasnikom ljubimca · 8 вопросов', est: 7, key: 'hw-24.2-intervju',
          note: 'Напишите 8 вопросов владельцу питомца с разными местоимениями (ko, koga, čega, kome, sa kim, o čemu, koji, kakav) и ответы на них с neko / niko / nešto / ništa / nikada.',
          sample: 'Ko je tvoj ljubimac? — Mačka. Kakva je? — Nežna i smešna. Čega se plaši? — Ničega, samo usisivača. Sa kim se igra? — Sa svima. Koju hranu jede? — Samo suvu hranu. Kome daješ mačku kad putuješ? — Nikome, ide sa mnom. O čemu razmišlja? — O ničemu, samo spava. Da li je ikada bila kod veterinara? — Da, nekada davno.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '24.3',
      title: 'Repovi i rogovi',
      ru: 'Дикие животные и скот, части тела животных, фразеологизмы',
      goals: [
        'назвать 20 диких и домашних животных и части их тела',
        'распределить животных: kućni ljubimci, stoka, divlje životinje',
        'понять сербские фразеологизмы о животных'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Задайте партнёру домашние вопросы; он отвечает без подготовки.',
          items: [{ q: 'Ko je tvoj ljubimac? Čega se plaši?' }]
        },
        {
          type: 'text', min: 6, title: 'Ko živi u srpskim šumama i planinama · дикие животные и скот',
          img: 'img/l24_divlje.png',
          tables: [
            { caption: 'Divlje životinje', head: ['', '', ''], rows: [['lisica — лиса', 'vuk — волк', 'medved — медведь'], ['šišmiš — летучая мышь', 'jelen — олень', 'sova — сова'], ['jež — ёж', 'divlja svinja — кабан', 'žaba — лягушка']] },
            { caption: 'Stoka — domaće životinje', head: ['', '', ''], rows: [['krava — корова', 'konj — конь', 'kokoška / petao — курица / петух'], ['svinja — свинья', 'ćurka — индюшка', 'patka — утка'], ['guska — гусь', 'ovca — овца', 'magarac — осёл']] },
            { caption: 'Delovi tela', head: ['', '', ''], rows: [['dlaka — шерсть', 'rep — хвост', 'šapa — лапа'], ['krilo — крыло', 'kljun — клюв', 'perje — перья'], ['ljuska — чешуя', 'peraja — плавники', 'rogovi, kopito — рога, копыто']] }
          ]
        },
        {
          type: 'sort', min: 8, title: 'Divlje ili ne? · распределите животных',
          note: 'Упражнение из курса.',
          img: 'img/l24_zivotinje.png',
          groups: ['Kućni ljubimci', 'Stoka', 'Divlje životinje'],
          items: [
            { w: 'guska', g: 'Stoka' }, { w: 'jež', g: 'Divlje životinje' }, { w: 'medved', g: 'Divlje životinje' }, { w: 'ćurka', g: 'Stoka' }, { w: 'morsko prase', g: 'Kućni ljubimci' }, { w: 'hrčak', g: 'Kućni ljubimci' }, { w: 'žaba', g: 'Divlje životinje' },
            { w: 'ovca', g: 'Stoka' }, { w: 'pas', g: 'Kućni ljubimci' }, { w: 'vuk', g: 'Divlje životinje' }, { w: 'zmija', g: 'Kućni ljubimci' }, { w: 'lisica', g: 'Divlje životinje' }, { w: 'divlja svinja', g: 'Divlje životinje' }, { w: 'činčila', g: 'Kućni ljubimci' }, { w: 'sova', g: 'Divlje životinje' },
            { w: 'krava', g: 'Stoka' }, { w: 'magarac', g: 'Stoka' }, { w: 'kornjača', g: 'Kućni ljubimci' }, { w: 'konj', g: 'Stoka' }, { w: 'zec', g: 'Kućni ljubimci' }, { w: 'papagaj', g: 'Kućni ljubimci' }, { w: 'šišmiš', g: 'Divlje životinje' },
            { w: 'pacov', g: 'Kućni ljubimci' }, { w: 'svinja', g: 'Stoka' }, { w: 'ribica', g: 'Kućni ljubimci' }, { w: 'jelen', g: 'Divlje životinje' }, { w: 'kokoška', g: 'Stoka' }, { w: 'mačka', g: 'Kućni ljubimci' }, { w: 'patka', g: 'Stoka' }
          ]
        },
        {
          type: 'match', min: 5, title: 'Pogodi životinju prema opisu · угадайте по описанию',
          note: 'Упражнение из курса.',
          pairs: [
            ['Ima rogove, kopita i kratku dlaku, živi u šumi', 'jelen'], ['Ima krila, crvenu krestu na glavi i žute noge, mali kljun, telo joj je belo', 'kokoška'],
            ['Ima peraja, ljusku i živi samo u vodi', 'riba'], ['Njene šape su mekane, dlaka je duga, a rep nije baš, voli miševe i maziti se', 'mačka'],
            ['Ima četiri kopita, crnu i belu boju, takođe ima male rogove, muče i daje mleko', 'krava'], ['Ima kopita, gustu dlaku, divlja opasna životinja koja živi u šumi', 'divlja svinja']
          ]
        },
        {
          type: 'match', min: 4, title: 'Kakva značenja ove životinje imaju u srpskom? · символика',
          note: 'Упражнение из курса: какие значения закрепились за животными.',
          pairs: [
            ['kukavica', 'strašljiv'], ['zmaj', 'snalažljiv'], ['pas', 'veran'], ['konj / magarac', 'glup'], ['svinja', 'pametan, čist'], ['sova', 'mudar']
          ]
        },
        {
          type: 'text', min: 5, title: 'Frazeologizmi o životinjama · крылатые выражения',
          html: '<p>У одного и того же животного не всегда одинаковый «имидж» в разных языках, хотя общего много. Примеры из курса:</p>' +
            '<ol><li>[[Glup kao guska.]] — глуп как гусь (у нас — как пробка)</li><li>[[Pametan i čist kao svinja.]] — умный и чистый как свинья (без иронии!)</li><li>[[Biser ne valja pred svinje bacati.]] — не мечи бисер перед свиньями</li>' +
            '<li>[[Gde nema mačke, tu miševi kolo vode.]] — кот из дома, мыши в пляс</li><li>[[I guska katkad na leđu posrne.]] — и на старуху бывает проруха</li><li>[[Gledi kao tele u šarena vrata.]] — смотрит как баран на новые ворота</li><li>[[I ćorava koka nađe zrno.]] — и слепая курица найдёт зерно</li></ol>' +
            '<p>Какие русские фразеологизмы они вам напоминают?</p>'
        },
        {
          type: 'gap', bank: true, min: 5, title: 'Frazeologizmi · вставьте животное',
          items: [
            'Glup kao {guska}.', 'Pametan i čist kao {svinja}.', 'Biser ne valja pred {svinje} bacati.', 'Gde nema {mačke}, tu miševi kolo vode.',
            'Gledi kao {tele} u šarena vrata.', 'I ćorava {koka} nađe zrno.', 'Veran kao {pas}.', 'Mudar kao {sova}.'
          ]
        },
        {
          type: 'letters', min: 5, title: 'Složite životinju · соберите из букв',
          items: [
            { clue: 'ima rogove, živi u šumi', word: 'jelen' }, { clue: 'leti noću', word: 'šišmiš' }, { clue: 'ima ljusku i peraja', word: 'riba' },
            { clue: 'muče i daje mleko', word: 'krava' }, { clue: 'mudra ptica', word: 'sova' }, { clue: 'ima bodlje', word: 'jež' }, { clue: 'kaže „ga-ga“', word: 'guska' }
          ]
        },
        {
          type: 'speak', min: 15, title: 'Opišite životinju · угадайка',
          note: 'Один описывает животное (части тела, где живёт, что ест, какой характер), другой угадывает. По пять животных каждый. Потом: какое животное вы, если бы были животным, и почему (в потенциале).',
          items: [
            { q: 'Ima… Živi u… Jede… Kakav je?', sample: 'Ima dugu dlaku, gust rep i tanke šape. Živi u šumi. Snalažljiva je i lukava. — Lisica!' },
            { q: 'Koja životinja si ti? Zašto?', sample: 'Bio bih pas, jer sam veran i volim da se šetam. Ne bih bio guska!' },
            { q: 'Koje životinje ima u Srbiji, a nema u Rusiji? I obrnuto?', sample: 'U Srbiji ima divljih svinja i šišmiša. U Rusiji ima više medveda i vukova.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'divlje: lisica, vuk, medved, jelen, sova, jež, šišmiš, divlja svinja, žaba',
            'stoka: krava, konj, kokoška, svinja, ovca, guska, patka, ćurka, magarac',
            'dlaka, rep, šapa, krilo, kljun, perje, ljuska, peraja, rogovi, kopito',
            'Glup kao guska. Pametan kao svinja. Veran kao pas. Mudar kao sova.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: животные и части тела', est: 10, set: 'C' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Jelen ima rogove, kopita i kratku dlaku.'] }, { a: ['Kokoška ima krila, crvenu krestu i mali kljun.'] }, { a: ['Riba ima peraja i ljusku.'] },
            { a: ['Krava muče i daje mleko.'] }, { a: ['Gde nema mačke, tu miševi kolo vode.'] }, { a: ['I ćorava koka nađe zrno.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'В сербских лесах живут волки, медведи и кабаны.', a: ['U srpskim šumama žive vukovi, medvedi i divlje svinje.'] },
            { q: 'У кошки мягкие лапы и длинная шерсть.', a: ['Mačka ima mekane šape i dugu dlaku.'] },
            { q: 'У совы большие глаза и крылья.', a: ['Sova ima velike oči i krila.'] },
            { q: 'Корова даёт молоко, а курица — яйца.', a: ['Krava daje mleko, a kokoška jaja.', 'Krava daje mleko, a kokoška daje jaja.'] },
            { q: 'Собака — верное животное.', a: ['Pas je verna životinja.'] },
            { q: 'Глуп как гусь!', a: ['Glup kao guska!'] },
            { q: 'Я никогда не видел ежа в городе.', a: ['Nikada nisam video ježa u gradu.', 'Nikada nisam videla ježa u gradu.'] }
          ]
        },
        {
          type: 'write', title: 'Životinje u mom kraju · сочинение + запись', est: 10, key: 'hw-24.3-zivotinje', record: true,
          note: '10 предложений: какие животные живут там, откуда вы (дикие, домашние), каких видели, каких боитесь, какой фразеологизм с животным вам нравится. Запишите чтение вслух.',
          sample: 'Ja sam iz malog grada blizu Kazanja. Tamo u šumama žive lisice, zečevi i ježevi. Nekada sam video vuka, ali nikada medveda. Na selu kod bake ima krava, kokošaka i gusaka. Baka ima psa i dve mačke. Plašim se zmija i pacova. Volim ptice: sove i patke. Moj omiljeni frazeologizam je „Gde nema mačke, tu miševi kolo vode“, jer imam mačku i nema miševa!'
        }
      ]
    }
  ]
});
