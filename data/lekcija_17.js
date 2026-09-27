// Lekcija 17 - U banci. Two 60-minute sessions: bank & money + ATM, then ordinal numbers + conjunctions.
COURSE.register({
  n: 17,
  title: 'U banci',
  ru: 'Деньги, банк, банкомат; порядковые числительные; союзы',

  vocab: [
    { id: 'novcanica', sr: 'novčanica — novčić', ru: 'купюра — монета', set: 'A' },
    { id: 'naslikati17', sr: 'naslikati, ja naslikam', ru: 'нарисовать', set: 'A' },
    { id: 'kartica17', sr: 'kartica', ru: 'карточка', set: 'A' },
    { id: 'novac', sr: 'novac, pare', ru: 'деньги', set: 'A' },
    { id: 'kes', sr: 'keš, gotovina', ru: 'наличные', set: 'A' },
    { id: 'novcanik', sr: 'novčanik', ru: 'кошелёк', set: 'A' },
    { id: 'racun17', sr: 'račun — tekući račun, devizni račun', ru: 'счёт, чек — текущий счёт, валютный счёт', set: 'A' },
    { id: 'bankomat', sr: 'bankomat', ru: 'банкомат', set: 'A' },
    { id: 'platiti17', sr: 'platiti, ja platim', ru: 'платить', set: 'A' },
    { id: 'otvoriti-racun', sr: 'otvoriti / zatvoriti tekući račun', ru: 'открыть / закрыть текущий счёт', set: 'A' },
    { id: 'podici-novac', sr: 'podići novac, ja podignem', ru: 'снять деньги', set: 'A' },
    { id: 'uplatiti', sr: 'uplatiti novac, ja uplatim', ru: 'положить деньги', set: 'A' },
    { id: 'pin', sr: 'pin broj', ru: 'пин-код', set: 'A' },
    { id: 'menjacnica', sr: 'menjačnica', ru: 'обмен валюты', set: 'A' },
    { id: 'transakcija', sr: 'izvršiti transakciju', ru: 'совершить транзакцию', set: 'A' },
    { id: 'otvor', sr: 'otvor za uplatu novca', ru: 'отверстие для внесения денег', set: 'A' },
    { id: 'iznos', sr: 'iznos', ru: 'сумма', set: 'A' },
    { id: 'svrha', sr: 'svrha otvaranja računa', ru: 'цель открытия счёта', set: 'A' },
    { id: 'cuvanje', sr: 'čuvanje novca', ru: 'хранение денег', set: 'A' },
    { id: 'izvor-prihoda', sr: 'izvor prihoda', ru: 'источник дохода', set: 'A' },
    { id: 'licni-podaci', sr: 'lični podaci, kontakt podaci', ru: 'личные данные, контактные данные', set: 'A' },
    { id: 'maticni-broj', sr: 'matični broj', ru: 'личный номер (ID)', set: 'A' },
    { id: 'mesto-stanovanja', sr: 'mesto stanovanja', ru: 'место жительства', set: 'A' },
    { id: 'pruziti', sr: 'pružiti informacije, ja pružim', ru: 'предоставить информацию', set: 'A' },
    { id: 'popuniti', sr: 'popuniti formular — Popunite!', ru: 'заполнить бланк — Заполните!', set: 'A' },
    { id: 'potpisite', sr: 'potpišite i stavite datum', ru: 'подпишите и поставьте дату', set: 'A' },
    { id: 'beli-karton', sr: 'beli karton', ru: '«белый картон» (регистрация иностранца)', set: 'A' },
    { id: 'trajati', sr: 'trajati — traje od nekoliko dana do nedelje', ru: 'длиться — занимает от нескольких дней до недели', set: 'A' },
    { id: 'radni-dan', sr: 'u roku od 5–7 radnih dana', ru: 'в течение 5–7 рабочих дней', set: 'A' },
    { id: 'ubacite', sr: 'ubacite karticu, unesite pin broj', ru: 'вставьте карточку, введите пин-код', set: 'A' },
    { id: 'taster', sr: 'taster, ponuđena opcija', ru: 'кнопка, предлагаемая опция', set: 'A' },
    { id: 'dodaj-novac', sr: 'dodaj novac, molimo sačekajte', ru: 'добавь денег, пожалуйста подождите', set: 'A' },
    { id: 'podizanje', sr: 'podizanje gotovine, uplata novca', ru: 'снятие наличных, внесение денег', set: 'A' },
    { id: 'priznanica', sr: 'Da li vam treba priznanica?', ru: 'Вам нужен чек?', set: 'A' },
    { id: 'vratiti', sr: 'Bankomat će vam vratiti karticu.', ru: 'Банкомат вернёт вам карточку.', set: 'A' },
    { id: 'ne-zaboravite', sr: 'Ne zaboravite da uzmete novac.', ru: 'Не забудьте взять деньги.', set: 'A' },

    { id: 'redni', sr: 'redni brojevi — prvi, drugi, treći', ru: 'порядковые числительные', set: 'B' },
    { id: 'redni-1-5', sr: 'prvi, drugi, treći, četvrti, peti', ru: '1-й … 5-й', set: 'B' },
    { id: 'redni-6-10', sr: 'šesti, sedmi, osmi, deveti, deseti', ru: '6-й … 10-й', set: 'B' },
    { id: 'redni-11-20', sr: 'jedanaesti, dvanaesti… dvadeseti', ru: '11-й … 20-й', set: 'B' },
    { id: 'redni-desetice', sr: 'dvadeseti, trideseti, stoti, hiljaditi, nulti', ru: '20-й, 30-й, 100-й, 1000-й, нулевой', set: 'B' },
    { id: 'tacka', sr: '8. sprat, 1912. godina, 31. decembar', ru: 'точка после порядкового числа', set: 'B' },
    { id: 'rimski', sr: 'XIV vek, XIX stoleće, Karl III', ru: 'римские цифры без точки', set: 'B' },
    { id: 'kada-slavimo', sr: 'Slavimo trideset prvog decembra i prvog januara.', ru: 'Празднуем 31 декабря и 1 января.', set: 'B' },
    { id: 'katolici', sr: 'Katolici slave Božić dvadeset petog decembra.', ru: 'Католики празднуют Рождество 25 декабря.', set: 'B' },
    { id: 'dan-zaljubljenih', sr: 'Dan zaljubljenih — četrnaestog februara', ru: 'День влюблённых — 14 февраля', set: 'B' },
    { id: 'otvorio-prozor', sr: 'Petar Prvi je „otvorio prozor“ u Evropu.', ru: 'Пётр Первый «прорубил окно» в Европу.', set: 'B' },
    { id: 'veznik', sr: 'veznik — a, ali, ili, nego, kada', ru: 'союз — а, но, или, чем, когда', set: 'B' },
    { id: 'cim', sr: 'čim', ru: 'как только', set: 'B' },
    { id: 'dok', sr: 'dok', ru: 'в то время как, пока', set: 'B' },
    { id: 'jer', sr: 'jer, zato što', ru: 'потому что, так как', set: 'B' },
    { id: 'kao', sr: 'kao, kako', ru: 'как', set: 'B' },
    { id: 'da-veznik', sr: 'da — Želim da otvorim račun. Kaže da sve zna. Dođite da se upoznamo.', ru: 'da — чтобы / что / цель', set: 'B' },
    { id: 'beskontaktno', sr: 'platiti beskontaktno', ru: 'заплатить бесконтактно', set: 'B' },
    { id: 'kredit', sr: 'uzeti kredit — kreditna kartica', ru: 'взять кредит — кредитная карта', set: 'B' },
    { id: 'uslovi', sr: 'uslovi — mnogo bolji uslovi', ru: 'условия — намного лучшие условия', set: 'B' },
    { id: 'potpisati17', sr: 'potpisati dokumente', ru: 'подписать документы', set: 'B' }
  ],

  verbs: {
    platiti: { inf: 'platiti', ru: 'платить', pos: { ja: 'platim', ti: 'platiš', on: 'plati', mi: 'platimo', vi: 'platite', oni: 'plate' }, neg: { ja: 'ne platim', ti: 'ne platiš', on: 'ne plati', mi: 'ne platimo', vi: 'ne platite', oni: 'ne plate' }, l: { m: 'platio', f: 'platila', n: 'platilo', mpl: 'platili', fpl: 'platile' } },
    podici: { inf: 'podići', ru: 'снять (деньги)', pos: { ja: 'podignem', ti: 'podigneš', on: 'podigne', mi: 'podignemo', vi: 'podignete', oni: 'podignu' }, neg: { ja: 'ne podignem', ti: 'ne podigneš', on: 'ne podigne', mi: 'ne podignemo', vi: 'ne podignete', oni: 'ne podignu' }, l: { m: 'podigao', f: 'podigla', n: 'podiglo', mpl: 'podigli', fpl: 'podigle' } },
    uplatiti: { inf: 'uplatiti', ru: 'внести', pos: { ja: 'uplatim', ti: 'uplatiš', on: 'uplati', mi: 'uplatimo', vi: 'uplatite', oni: 'uplate' }, neg: { ja: 'ne uplatim', ti: 'ne uplatiš', on: 'ne uplati', mi: 'ne uplatimo', vi: 'ne uplatite', oni: 'ne uplate' }, l: { m: 'uplatio', f: 'uplatila', n: 'uplatilo', mpl: 'uplatili', fpl: 'uplatile' } },
    otvoriti: { inf: 'otvoriti', ru: 'открыть', pos: { ja: 'otvorim', ti: 'otvoriš', on: 'otvori', mi: 'otvorimo', vi: 'otvorite', oni: 'otvore' }, neg: { ja: 'ne otvorim', ti: 'ne otvoriš', on: 'ne otvori', mi: 'ne otvorimo', vi: 'ne otvorite', oni: 'ne otvore' }, l: { m: 'otvorio', f: 'otvorila', n: 'otvorilo', mpl: 'otvorili', fpl: 'otvorile' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '17.1',
      title: 'U banci',
      ru: 'Деньги, купюры, открытие счёта, банкомат',
      goals: [
        'назвать деньги, купюры, монеты и людей на сербских динарах',
        'понять диалог об открытии счёта и разыграть его',
        'выполнить операцию в банкомате: ubacite karticu, unesite pin, podignite novac'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Pare pare pare',
          note: 'Люди на купюрах: Вук Караджич на 10 динарах, Тесла на 100, а Кустурице купюру никто не дал. Прочитайте кириллицу сами.',
          img: 'img/l17_strip.png',
          lines: [
            { who: 'Andrić', sr: 'Poznajete li ljude na novčanicama?', ru: 'Знаете ли вы людей на купюрах?' },
            { who: 'Vuk', sr: 'Ja sam lingvista Vuk Karadžić, imam sliku na 10 dinara.', ru: 'Я лингвист Вук Караджич, у меня портрет на 10 динарах.' },
            { who: 'Nikola', sr: 'Ja sam naučnik Nikola Tesla, imam sliku na 100 dinara.', ru: 'Я учёный Никола Тесла, у меня портрет на 100 динарах.' },
            { who: 'Emir', sr: 'Pa ja sam Kusturica, niko mi nije dao novčanicu, pa sam sebi naslikao.', ru: 'Ну а я Кустурица, мне никто купюру не дал, так что я себе нарисовал.' }
          ]
        },
        {
          type: 'text', min: 6, title: 'U banci · слова',
          img: 'img/l17_banka.png',
          html:
            '<ul><li>[[kartica]] — карточка, [[novac]] / [[pare]] — деньги, [[keš]] / [[gotovina]] — наличные</li><li>[[bankomat]] — банкомат, [[račun]] — счёт или чек, [[novčanik]] — кошелёк</li>' +
            '<li>[[novčanica]] — купюра, [[novčić]] — монета, [[menjačnica]] — обмен валюты, [[pin broj]] — пин-код</li>' +
            '<li>[[otvoriti tekući račun]] — открыть текущий счёт, [[podići novac]] — снять деньги, [[uplatiti novac]] — положить деньги</li></ul>'
        },
        {
          type: 'gap', bank: true, listen: true, min: 10, title: 'Otvaranje računa · послушайте и вставьте',
          note: 'В оригинале — аудио. Сначала прослушайте, потом заполните из банка слов и прочитайте по ролям.',
          items: [
            '<b>Klijent:</b> Dobar dan, želim da otvorim {račun} u vašoj banci.',
            '<b>Radnik banke:</b> Dobar dan! Sa zadovoljstvom vam možemo pomoći u tome. Koja je {svrha} otvaranja računa?',
            '<b>Klijent:</b> Za {čuvanje} novca i svakodnevnu kupovinu.',
            '<b>Radnik banke:</b> U redu. Koji je Vaš {izvor prihoda}?',
            '<b>Klijent:</b> Ja sam {programer}, radim u velikoj međunarodnoj kompaniji.',
            '<b>Radnik banke:</b> U redu, biće mi potrebni vaši {lični podaci} kao što su {matični broj}, {mesto stanovanja} i kontakt podaci.',
            '<b>Klijent:</b> Spreman sam da {pružim} potrebne informacije. Evo moj pasoš i beli karton.',
            '<b>Radnik banke:</b> Odlično. {Popunite} ove formulare, potpišite i stavite datum pored znakova X.',
            '<b>Klijent:</b> Sve sam popunio. Recite mi, molim vas, kada će račun biti otvoren?',
            '<b>Radnik banke:</b> Obično otvaranje računa {traje} od nekoliko dana do nedelje, a kartica će biti spremna u roku od 5–7 radnih dana nakon otvaranja računa.',
            '<b>Klijent:</b> Hvala na informaciji.'
          ]
        },
        {
          type: 'text', min: 5, title: 'Srpske novčanice · сербские купюры',
          img: 'img/l17_novcanice.png',
          html:
            '<p><b>Zanimljivost:</b></p><ul><li><b>10 dinara</b> — лингвист [[Vuk Karadžić]] и введённые им буквы кириллицы</li><li><b>20 dinara</b> — правитель Черногории [[Petar II Petrović Njegoš]] и мавзолей на горе Ловчен</li>' +
            '<li><b>50 dinara</b> — композитор [[Stevan Mokranjac]]</li><li><b>100 dinara</b> — учёный [[Nikola Tesla]] и катушка трансформатора</li><li><b>200 dinara</b> — художница [[Nadežda Petrović]] и монастырь Грачаница</li></ul>'
        },
        {
          type: 'match', min: 4, title: 'Povežite reč sa opisom · слово и описание',
          pairs: [
            ['novčanik', 'gde čuvamo i nosimo novac, kartice, slike'], ['menjačnica', 'gde menjamo pare i kupujemo valutu'], ['gotovina', 'keš'],
            ['račun', 'dokumenat ili faktura od strane prodavca kupcu'], ['kartica', 'jedno od bezgotovinskih sredstava plaćanja'], ['pin broj', 'lozinka za karticu ili račun']
          ]
        },
        {
          type: 'text', min: 3, title: 'Bankomat · как пользоваться',
          html: '<p>В курсе — два видео с YouTube: «Uplata novca i pazara na bankomatima» (UniCredit Banka Srbija) и «Podizanje gotovine na bankomatu VB» (OTP Banka). Посмотрите их дома, там реальные экраны банкоматов. Ниже — фразы из видео.</p>'
        },
        {
          type: 'match', min: 5, title: 'Povežite frazu sa prevodom · фразы банкомата',
          pairs: [
            ['ubacite karticu', 'вставьте карточку'], ['unesite pin broj', 'внесите ПИН-код'], ['izvršiti transakciju', 'совершить транзакцию'], ['taster', 'кнопка'],
            ['ponuđena opcija', 'предлагаемая опция'], ['otvor za uplatu novca', 'отверстие для внесения денег'], ['dodaj novac', 'добавь денег'], ['molimo sačekajte', 'пожалуйста, подождите'], ['iznos', 'сумма']
          ]
        },
        {
          type: 'qa', mode: 'translate', min: 7, title: 'Prevedite · переведите фразы из видео',
          note: 'Упражнение из курса.',
          items: [
            { q: 'Нажмите кнопку «снять наличные».', a: ['Pritisnite taster „podizanje gotovine“.', 'Pritisnite taster podizanje gotovine.', 'Pritisnite taster „podigni gotovinu“.'] },
            { q: 'Выберите одну из предложенных сумм.', a: ['Izaberite jedan od ponuđenih iznosa.', 'Izaberite jednu od ponuđenih opcija.'] },
            { q: 'Вам нужен чек?', a: ['Da li vam treba priznanica?', 'Da li vam treba račun?', 'Treba li vam priznanica?'] },
            { q: 'Банкомат вернёт вам карточку.', a: ['Bankomat će vam vratiti karticu.'] },
            { q: 'Не забудьте взять деньги и карточку.', a: ['Ne zaboravite da uzmete novac i karticu.'] }
          ]
        },
        {
          type: 'speak', min: 12, title: 'U banci i na bankomatu · ролевая игра',
          note: 'Сцена 1: клиент и работник банка — открытие счёта по образцу диалога (цель, доход, документы, сроки). Сцена 2: один читает вслух «экран банкомата» в императиве, другой выполняет и комментирует: Ubacujem karticu, unosim pin… Меняйтесь ролями.',
          items: [
            { q: 'Radnik: Dobar dan! Kako mogu da vam pomognem?', sample: 'Klijent: Želim da otvorim tekući račun. Svrha je čuvanje novca i plata.' },
            { q: 'Radnik: Koji je vaš izvor prihoda? Imate li beli karton?', sample: 'Klijent: Radim kao dizajnerka u IT firmi. Da, evo pasoš i beli karton.' },
            { q: 'Radnik: Popunite formular i potpišite. Kartica će biti spremna za 5 dana.', sample: 'Klijent: Hvala. Da li mogu da platim beskontaktno ovom karticom?' },
            { q: 'Bankomat: Ubacite karticu. Unesite pin broj. Izaberite opciju.', sample: 'Ja: Ubacujem karticu, unosim pin, biram „podizanje gotovine“, iznos 2000 dinara.' },
            { q: 'Bankomat: Molimo sačekajte. Uzmite novac i karticu.', sample: 'Ja: Uzimam novac i karticu. Ne treba mi priznanica.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'novac / pare, keš / gotovina, kartica, novčanik, bankomat, račun',
            'otvoriti tekući račun, podići novac, uplatiti novac, platiti karticom',
            'Koja je svrha otvaranja računa? Koji je vaš izvor prihoda? Popunite formular.',
            'Ubacite karticu. Unesite pin broj. Izaberite iznos. Molimo sačekajte.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: банк и деньги', est: 10, set: 'A' },
        { type: 'conj', title: 'Тренажёр: platiti, podići, uplatiti, otvoriti', est: 5, verbs: ['platiti', 'podici', 'uplatiti', 'otvoriti'], rounds: 10 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Želim da otvorim račun u vašoj banci.'] }, { a: ['Koja je svrha otvaranja računa?'] }, { a: ['Koji je vaš izvor prihoda?'] },
            { a: ['Popunite ove formulare, potpišite i stavite datum.'] }, { a: ['Kartica će biti spremna u roku od pet radnih dana.'] }, { a: ['Ubacite karticu i unesite pin broj.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Я хочу открыть текущий счёт.', a: ['Želim da otvorim tekući račun.'] },
            { q: 'Для хранения денег и повседневных покупок.', a: ['Za čuvanje novca i svakodnevnu kupovinu.'] },
            { q: 'Вот мой паспорт и белый картон.', a: ['Evo moj pasoš i beli karton.'] },
            { q: 'Когда счёт будет открыт?', a: ['Kada će račun biti otvoren?'] },
            { q: 'Я снимаю деньги в банкомате.', a: ['Podižem novac na bankomatu.', 'Ja podižem novac na bankomatu.'] },
            { q: 'У тебя есть наличные или только карточка?', a: ['Da li imaš keš ili samo karticu?', 'Imaš li gotovinu ili samo karticu?', 'Da li imaš gotovinu ili samo karticu?'] },
            { q: 'Где здесь обмен валюты?', a: ['Gde je ovde menjačnica?'] }
          ]
        },
        {
          type: 'write', title: 'Dijalog u banci · письменный диалог', est: 8, key: 'hw-17.1-banka',
          note: '10 реплик: открытие счёта или обмен валюты — цель, документы, сроки, вопросы клиента.',
          sample: 'Klijent: Dobar dan, želim da otvorim devizni račun. Radnik: Koja je svrha? Klijent: Za platu iz inostranstva. Radnik: Koji je vaš izvor prihoda? Klijent: Radim na daljinu za rusku firmu. Radnik: Treba mi pasoš i beli karton. Klijent: Izvolite. Radnik: Popunite formular i potpišite. Klijent: Kada će kartica biti spremna? Radnik: U roku od sedam radnih dana.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '17.2',
      title: 'Redni brojevi i veznici',
      ru: 'Порядковые числительные, даты; союзы čim, dok, jer, nego, da',
      goals: [
        'назвать порядковые числительные до 20 и даты: trideset prvog decembra',
        'правильно писать точку после порядкового числа',
        'выбрать союз по смыслу: čim, dok, jer, nego, ali, da'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Разыграйте домашний диалог в банке с партнёром.',
          items: [{ q: 'Dobar dan, želim da otvorim…' }]
        },
        {
          type: 'text', min: 8, title: 'Redni brojevi · порядковые числительные',
          img: 'img/l17_redni.png',
          html:
            '<p>Количественные числительные были во 2-м уроке; порядковые отвечают на вопрос [[koji?]] и изменяются как прилагательные: [[prvi]], [[prva]], [[prvo]].</p>' +
            '<p><b>Точка после порядкового числа.</b> [[8. sprat]] — osmi sprat, [[1912. godina]], [[31. decembar]], [[13. sedište]]. После точки предложение продолжается с маленькой буквы.</p>' +
            '<p><b>Исключение — римские цифры</b> без точки: [[XIV vek]], [[XIX stoleće]], [[Karl III]], [[Aleksandar II Karađorđević]].</p>',
          tables: [
            { caption: 'Redni brojevi', head: ['', '', '', ''], rows: [['0 nulti', '1 prvi', '2 drugi', '3 treći'], ['4 četvrti', '5 peti', '6 šesti', '7 sedmi'], ['8 osmi', '9 deveti', '10 deseti', '11 jedanaesti'], ['12 dvanaesti', '13 trinaesti', '20 dvadeseti', '21 dvadeset prvi'], ['30 trideseti', '100 stoti', '1000 hiljaditi', '']] }
          ],
          after: '<p><b>Даты:</b> порядковое число + месяц в генитиве, оба в генитиве: [[Slavimo trideset prvog decembra i prvog januara.]] [[Rođen sam petog maja.]]</p>'
        },
        {
          type: 'qa', mode: 'transform', min: 5, title: 'Redni brojevi · напишите словами',
          items: [
            { q: '1.', a: ['prvi'] }, { q: '3.', a: ['treći'] }, { q: '5.', a: ['peti'] }, { q: '7.', a: ['sedmi'] }, { q: '8.', a: ['osmi'] },
            { q: '10.', a: ['deseti'] }, { q: '12.', a: ['dvanaesti'] }, { q: '20.', a: ['dvadeseti'] }, { q: '21.', a: ['dvadeset prvi'] }, { q: '0.', a: ['nulti'] }
          ]
        },
        {
          type: 'speak', min: 8, title: 'Odgovorite koristeći redne brojeve · даты',
          note: 'Вопросы из курса. Отвечайте полным предложением с датой в генитиве: dvadeset petog decembra.',
          items: [
            { q: 'Kada katolici slave Božić?', sample: 'Katolici slave Božić dvadeset petog decembra.' },
            { q: 'Kada slavite rođendan?', sample: 'Slavim rođendan petnaestog marta.' },
            { q: 'Koji je danas datum?', sample: 'Danas je dvadeset četvrti septembar. / Danas je dvadeset četvrtog septembra.' },
            { q: 'Ko je „otvorio prozor“ u Evropu?', sample: 'Petar Prvi je otvorio prozor u Evropu.' },
            { q: 'Kada je Dan zaljubljenih?', sample: 'Dan zaljubljenih je četrnaestog februara.' },
            { q: 'Na kojem spratu stanuješ? Koji je tvoj omiljeni mesec?', sample: 'Stanujem na trećem spratu. Moj omiljeni mesec je jun, šesti mesec.' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Veznici · союзы',
          img: 'img/l17_veznici.png',
          html:
            '<p>Многозначный союз <b>da</b>:</p><ol><li>da + prezent: [[Želim da otvorim račun.]]</li><li>«что»: [[Kaže da sve zna.]] [[Drago mi je da…]] [[Žao mi je da…]]</li><li>«чтобы»: [[Dođite da se upoznamo.]]</li><li>побуждение: [[Da se upoznamo!]] = [[Upoznajmo se!]]</li></ol>',
          tables: [
            { caption: 'Veznici', head: ['srpski', 'ruski', 'srpski', 'ruski'], rows: [['a', 'а', 'čim', 'как только'], ['ali', 'но', 'dok', 'в то время как, пока'], ['ili', 'или', 'jer', 'потому что, так как'], ['nego', 'чем (после сравнения)', 'zato što', 'потому что'], ['kada / kad', 'когда', 'kao / kako', 'как']] }
          ]
        },
        {
          type: 'gap', bank: true, min: 6, title: 'Izaberite odgovarajući veznik · союз по смыслу',
          note: 'Упражнение из курса.',
          items: [
            'Sačekaj ispred banke, {dok} podignem novac.', 'Sada mogu da platim beskontaktno, {jer} imam karticu srpske banke.', 'Dođite {da} se potpišemo dokumente.',
            'Nikola želi da otvori još jedan račun, {ali} ne može.', '{Čim} uzmeš kredit, kupićeš sebi stan.', 'Uslovi nove kreditne kartice su mnogo bolji {nego} uslovi moje stare.'
          ]
        },
        {
          type: 'mc', min: 6, title: 'Još veznika · выберите союз',
          items: [
            { q: 'Idem u banku … kod mene nema keša.', options: ['jer', 'nego', 'čim'], a: 'jer' }, { q: 'Ne pijem kafu, … čaj.', options: ['nego', 'ali', 'jer'], a: 'nego' },
            { q: '… stignem kući, pozvaću te.', options: ['Čim', 'Dok', 'Jer'], a: 'Čim' }, { q: 'Čitam knjigu … čekam voz.', options: ['dok', 'čim', 'nego'], a: 'dok' },
            { q: 'Kaže … nema para.', options: ['da', 'jer', 'kao'], a: 'da' }, { q: 'Hoćeš kafu … čaj?', options: ['ili', 'ali', 'a'], a: 'ili' },
            { q: 'Ja radim, … on se odmara.', options: ['a', 'nego', 'jer'], a: 'a' }, { q: 'Radi … ja: brzo i tačno.', options: ['kao', 'jer', 'dok'], a: 'kao' }
          ]
        },
        {
          type: 'speak', min: 12, title: 'Priča sa veznicima · рассказ с союзами',
          note: 'Каждый рассказывает о своём последнем визите в банк или к банкомату (или придумывает), используя минимум пять союзов: čim, dok, jer, ali, nego, da. Партнёр считает союзы и задаёт вопросы с датами: Kada si otvorio račun?',
          items: [
            { q: 'Kada si otvorio / otvorila račun u Srbiji? Zašto?', sample: 'Otvorila sam račun petog aprila, jer sam dobila posao u Beogradu.' },
            { q: 'Šta si radio / radila dok si čekao / čekala?', sample: 'Dok sam čekala, čitala sam formulare i pila kafu.' },
            { q: 'Šta si uradio / uradila čim si dobio / dobila karticu?', sample: 'Čim sam dobila karticu, platila sam beskontaktno u prodavnici.' },
            { q: 'Da li više voliš keš nego karticu?', sample: 'Više volim karticu nego keš, ali na pijaci treba gotovina.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'prvi, drugi, treći, četvrti, peti… dvadeseti, stoti',
            '8. sprat, 31. decembar — точка; XIV vek — без точки',
            'Slavimo trideset prvog decembra i prvog januara.',
            'čim — как только, dok — пока, jer — потому что, nego — чем, da — что / чтобы'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: порядковые и союзы', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'transform', title: 'Datumi · напишите дату словами (в генитиве)', est: 6,
          note: 'Пример: 1. 1. → prvog januara.',
          items: [
            { q: '31. 12.', a: ['trideset prvog decembra'] }, { q: '25. 12.', a: ['dvadeset petog decembra'] }, { q: '14. 2.', a: ['četrnaestog februara'] }, { q: '8. 3.', a: ['osmog marta'] },
            { q: '1. 5.', a: ['prvog maja'] }, { q: '9. 5.', a: ['devetog maja'] }, { q: '7. 1.', a: ['sedmog januara'] }, { q: '19. 12.', a: ['devetnaestog decembra'] }, { q: '6. 5.', a: ['šestog maja'] }, { q: '27. 1.', a: ['dvadeset sedmog januara'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Slavimo trideset prvog decembra i prvog januara.'] }, { a: ['Stanujem na osmom spratu.'] }, { a: ['Sačekaj ispred banke dok podignem novac.'] },
            { a: ['Čim uzmeš kredit, kupićeš sebi stan.'] }, { a: ['Dođite da potpišemo dokumente.'] }, { a: ['Nikola želi da otvori još jedan račun, ali ne može.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Католики празднуют Рождество 25 декабря.', a: ['Katolici slave Božić dvadeset petog decembra.', 'Katolici slave Božić 25. decembra.'] },
            { q: 'День влюблённых — 14 февраля.', a: ['Dan zaljubljenih je četrnaestog februara.', 'Dan zaljubljenih je 14. februara.'] },
            { q: 'Это мой первый счёт в Сербии.', a: ['Ovo je moj prvi račun u Srbiji.', 'To je moj prvi račun u Srbiji.'] },
            { q: 'Как только получишь карточку, позвони мне.', a: ['Čim dobiješ karticu, pozovi me.'] },
            { q: 'Я могу платить бесконтактно, потому что у меня есть карточка.', a: ['Mogu da platim beskontaktno, jer imam karticu.', 'Mogu da platim beskontaktno jer imam karticu.'] },
            { q: 'Условия новой карты лучше, чем условия старой.', a: ['Uslovi nove kartice su bolji nego uslovi stare.', 'Uslovi nove kartice su bolji od uslova stare.'] },
            { q: 'Подожди, пока я сниму деньги.', a: ['Sačekaj dok podignem novac.', 'Čekaj dok podignem novac.'] },
            { q: 'Приходите, чтобы мы познакомились.', a: ['Dođite da se upoznamo.'] }
          ]
        },
        {
          type: 'write', title: 'Važni datumi · важные даты моей жизни + запись', est: 8, key: 'hw-17.2-datumi', record: true,
          note: '8 предложений с датами в генитиве и союзами: день рождения, переезд, первый день на работе, праздники. Запишите чтение вслух.',
          sample: 'Rođena sam dvadeset trećeg avgusta. Preselila sam se u Beograd petnaestog marta, jer sam dobila posao. Prvi dan na poslu je bio prvog aprila. Čim sam stigla, otvorila sam račun u banci. Rođendan slavim sa prijateljima, dok mama pravi tortu. Nova godina je trideset prvog decembra, a Božić sedmog januara. Više volim leto nego zimu. Dan zaljubljenih je četrnaestog februara, ali mi ga ne slavimo.'
        }
      ]
    }
  ]
});
