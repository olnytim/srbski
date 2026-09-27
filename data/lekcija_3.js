// Lekcija 3 - Poreklo, odakle si? Three 60-minute sessions: origin & countries, i-group verbs, story + gender/plural.
COURSE.register({
  n: 3,
  title: 'Poreklo, odakle si?',
  ru: 'Страны и национальности, глаголы и-группы, род и множественное число',

  vocab: [
    { id: 'srbija', sr: 'Srbija — Srbin, Srpkinja', ru: 'Сербия — серб, сербка', set: 'A' },
    { id: 'crna-gora', sr: 'Crna Gora — Crnogorac, Crnogorka', ru: 'Черногория — черногорец, черногорка', set: 'A' },
    { id: 'hrvatska', sr: 'Hrvatska — Hrvat, Hrvatica', ru: 'Хорватия — хорват, хорватка', set: 'A' },
    { id: 'bih', sr: 'Bosna i Hercegovina — Bosanac, Bosanka', ru: 'Босния и Герцеговина — босниец, боснийка', set: 'A' },
    { id: 'makedonija', sr: 'Makedonija — Makedonac, Makedonka', ru: 'Македония — македонец, македонка', set: 'A' },
    { id: 'slovenija', sr: 'Slovenija — Slovenac, Slovenka', ru: 'Словения — словенец, словенка', set: 'A' },
    { id: 'rumunija', sr: 'Rumunija — Rumun, Rumunka', ru: 'Румыния — румын, румынка', set: 'A' },
    { id: 'madjarska', sr: 'Mađarska — Mađar, Mađarica', ru: 'Венгрия — венгр, венгерка', set: 'A' },
    { id: 'bugarska', sr: 'Bugarska — Bugarin, Bugarka', ru: 'Болгария — болгарин, болгарка', set: 'A' },
    { id: 'albanija', sr: 'Albanija — Albanac, Albanka', ru: 'Албания — албанец, албанка', set: 'A' },
    { id: 'grcka', sr: 'Grčka — Grk, Grkinja', ru: 'Греция — грек, гречанка', set: 'A' },
    { id: 'turska', sr: 'Turska — Turčin, Turkinja', ru: 'Турция — турок, турчанка', set: 'A' },
    { id: 'rusija', sr: 'Rusija — Rus, Ruskinja', ru: 'Россия — русский, русская', set: 'A' },
    { id: 'belorusija', sr: 'Belorusija — Belorus, Beloruskinja', ru: 'Беларусь — белорус, белоруска', set: 'A' },
    { id: 'ukrajina', sr: 'Ukrajina — Ukrajinac, Ukrajinka', ru: 'Украина — украинец, украинка', set: 'A' },
    { id: 'poreklo', sr: 'poreklo', ru: 'происхождение', set: 'A' },
    { id: 'zemlja', sr: 'zemlja', ru: 'страна; земля', set: 'A' },
    { id: 'narod', sr: 'narod', ru: 'народ', set: 'A' },
    { id: 'glavni-grad', sr: 'glavni grad', ru: 'столица', set: 'A' },
    { id: 'stvarno', sr: 'Stvarno?', ru: 'Правда? Серьёзно?', set: 'A' },
    { id: 'opet', sr: 'opet', ru: 'опять, снова', set: 'A' },
    { id: 'ko', sr: 'ko', ru: 'кто', set: 'A' },

    { id: 'nemacka', sr: 'Nemačka — Nemac, Nemica', ru: 'Германия — немец, немка', set: 'B' },
    { id: 'francuska', sr: 'Francuska — Francuz, Francuskinja', ru: 'Франция — француз, француженка', set: 'B' },
    { id: 'italija', sr: 'Italija — Italijan, Italijanka', ru: 'Италия — итальянец, итальянка', set: 'B' },
    { id: 'spanija', sr: 'Španija — Španac, Špankinja', ru: 'Испания — испанец, испанка', set: 'B' },
    { id: 'svajcarska', sr: 'Švajcarska — Švajcarac, Švajcarkinja', ru: 'Швейцария — швейцарец, швейцарка', set: 'B' },
    { id: 'engleska', sr: 'Engleska — Englez, Engleskinja', ru: 'Англия — англичанин, англичанка', set: 'B' },
    { id: 'sad', sr: 'SAD, Amerika — Amerikanac, Amerikanka', ru: 'США, Америка — американец, американка', set: 'B' },
    { id: 'kina', sr: 'Kina — Kinez, Kineskinja', ru: 'Китай — китаец, китаянка', set: 'B' },
    { id: 'ceska', sr: 'Češka — Čeh, Čehinja', ru: 'Чехия — чех, чешка', set: 'B' },
    { id: 'poljska', sr: 'Poljska — Poljak, Poljakinja', ru: 'Польша — поляк, полька', set: 'B' },
    { id: 'japan', sr: 'Japan — Japanac, Japanka', ru: 'Япония — японец, японка', set: 'B' },
    { id: 'beograd', sr: 'Beograd, Podgorica, Zagreb', ru: 'Белград, Подгорица, Загреб', set: 'B' },
    { id: 'moskva', sr: 'Moskva, Pariz, Rim, Berlin', ru: 'Москва, Париж, Рим, Берлин', set: 'B' },
    { id: 'peking', sr: 'Peking, Vašington, Budimpešta, Prag', ru: 'Пекин, Вашингтон, Будапешт, Прага', set: 'B' },
    { id: 'jezik', sr: 'jezik — srpski, ruski, engleski', ru: 'язык — сербский, русский, английский', set: 'B' },
    { id: 'govoriti', sr: 'govoriti, ja govorim', ru: 'говорить', set: 'B' },
    { id: 'pricati', sr: 'pričati, ja pričam', ru: 'разговаривать, рассказывать', set: 'B' },

    { id: 'ziveti', sr: 'živeti, ja živim', ru: 'жить', set: 'C' },
    { id: 'zeleti', sr: 'želeti, ja želim', ru: 'хотеть, желать', set: 'C' },
    { id: 'voleti', sr: 'voleti, ja volim', ru: 'любить', set: 'C' },
    { id: 'raditi', sr: 'raditi, ja radim', ru: 'работать; делать', set: 'C' },
    { id: 'misliti', sr: 'misliti, ja mislim', ru: 'думать', set: 'C' },
    { id: 'uciti', sr: 'učiti, ja učim', ru: 'учить', set: 'C' },
    { id: 'trcati', sr: 'trčati, ja trčim', ru: 'бегать', set: 'C' },
    { id: 'lezati', sr: 'ležati, ja ležim', ru: 'лежать', set: 'C' },
    { id: 'sedeti', sr: 'sedeti, ja sedim', ru: 'сидеть', set: 'C' },
    { id: 'spavati', sr: 'spavati, ja spavam', ru: 'спать', set: 'C' },
    { id: 'pevati', sr: 'pevati, ja pevam', ru: 'петь', set: 'C' },
    { id: 'citati', sr: 'čitati, ja čitam', ru: 'читать', set: 'C' },
    { id: 'kupiti', sr: 'kupiti, ja kupim', ru: 'купить', set: 'C' },
    { id: 'studirati', sr: 'studirati, ja studiram', ru: 'учиться в вузе', set: 'C' },
    { id: 'putovati', sr: 'putovati, ja putujem', ru: 'путешествовать', set: 'C' },
    { id: 'jedinac', sr: 'jedinac', ru: 'единственный ребёнок', set: 'C' },
    { id: 'svuda-peske', sr: 'svuda peške', ru: 'везде пешком', set: 'C' },
    { id: 'bicikl', sr: 'bicikl', ru: 'велосипед', set: 'C' },
    { id: 'firma', sr: 'firma', ru: 'фирма', set: 'C' },
    { id: 'krevet', sr: 'krevet', ru: 'кровать', set: 'C' },
    { id: 'kafic', sr: 'kafić', ru: 'кафе', set: 'C' },
    { id: 'konobarica', sr: 'konobar, konobarica', ru: 'официант, официантка', set: 'C' },
    { id: 'mladji', sr: 'mlađi, mlađa', ru: 'младший, младшая', set: 'C' },
    { id: 'inostranstvo', sr: 'inostranstvo', ru: 'заграница', set: 'C' },
    { id: 'selo', sr: 'selo, na selu', ru: 'деревня, в деревне', set: 'C' },
    { id: 'slobodno-vreme', sr: 'slobodno vreme', ru: 'свободное время', set: 'C' },
    { id: 'svidja-mi-se', sr: 'Sviđa mi se…', ru: 'Мне нравится…', set: 'C' },
    { id: 'trenutno', sr: 'trenutno', ru: 'в данный момент', set: 'C' },
    { id: 'preseliti-se', sr: 'preseliti se', ru: 'переехать', set: 'C' },
    { id: 'strani-jezik', sr: 'strani jezik', ru: 'иностранный язык', set: 'C' },
    { id: 'uvek', sr: 'uvek', ru: 'всегда', set: 'C' },
    { id: 'mnogo', sr: 'mnogo', ru: 'много', set: 'C' },
    { id: 'ujutru', sr: 'ujutru', ru: 'утром', set: 'C' },
    { id: 'stan', sr: 'stan — stanovi', ru: 'квартира — квартиры', set: 'C' },
    { id: 'voz', sr: 'voz — vozovi', ru: 'поезд — поезда', set: 'C' },
    { id: 'lice', sr: 'lice — lica', ru: 'лицо — лица', set: 'C' }
  ],

  verbs: {
    imati: {
      inf: 'imati', ru: 'иметь',
      pos: { ja: 'imam', ti: 'imaš', on: 'ima', mi: 'imamo', vi: 'imate', oni: 'imaju' },
      neg: { ja: 'nemam', ti: 'nemaš', on: 'nema', mi: 'nemamo', vi: 'nemate', oni: 'nemaju' }
    },
    ziveti: { inf: 'živeti', ru: 'жить', pos: { ja: 'živim', ti: 'živiš', on: 'živi', mi: 'živimo', vi: 'živite', oni: 'žive' }, neg: { ja: 'ne živim', ti: 'ne živiš', on: 'ne živi', mi: 'ne živimo', vi: 'ne živite', oni: 'ne žive' } },
    zeleti: { inf: 'želeti', ru: 'хотеть', pos: { ja: 'želim', ti: 'želiš', on: 'želi', mi: 'želimo', vi: 'želite', oni: 'žele' }, neg: { ja: 'ne želim', ti: 'ne želiš', on: 'ne želi', mi: 'ne želimo', vi: 'ne želite', oni: 'ne žele' } },
    voleti: { inf: 'voleti', ru: 'любить', pos: { ja: 'volim', ti: 'voliš', on: 'voli', mi: 'volimo', vi: 'volite', oni: 'vole' }, neg: { ja: 'ne volim', ti: 'ne voliš', on: 'ne voli', mi: 'ne volimo', vi: 'ne volite', oni: 'ne vole' } },
    raditi: { inf: 'raditi', ru: 'работать', pos: { ja: 'radim', ti: 'radiš', on: 'radi', mi: 'radimo', vi: 'radite', oni: 'rade' }, neg: { ja: 'ne radim', ti: 'ne radiš', on: 'ne radi', mi: 'ne radimo', vi: 'ne radite', oni: 'ne rade' } },
    misliti: { inf: 'misliti', ru: 'думать', pos: { ja: 'mislim', ti: 'misliš', on: 'misli', mi: 'mislimo', vi: 'mislite', oni: 'misle' }, neg: { ja: 'ne mislim', ti: 'ne misliš', on: 'ne misli', mi: 'ne mislimo', vi: 'ne mislite', oni: 'ne misle' } },
    uciti: { inf: 'učiti', ru: 'учить', pos: { ja: 'učim', ti: 'učiš', on: 'uči', mi: 'učimo', vi: 'učite', oni: 'uče' }, neg: { ja: 'ne učim', ti: 'ne učiš', on: 'ne uči', mi: 'ne učimo', vi: 'ne učite', oni: 'ne uče' } },
    trcati: { inf: 'trčati', ru: 'бегать', pos: { ja: 'trčim', ti: 'trčiš', on: 'trči', mi: 'trčimo', vi: 'trčite', oni: 'trče' }, neg: { ja: 'ne trčim', ti: 'ne trčiš', on: 'ne trči', mi: 'ne trčimo', vi: 'ne trčite', oni: 'ne trče' } },
    lezati: { inf: 'ležati', ru: 'лежать', pos: { ja: 'ležim', ti: 'ležiš', on: 'leži', mi: 'ležimo', vi: 'ležite', oni: 'leže' }, neg: { ja: 'ne ležim', ti: 'ne ležiš', on: 'ne leži', mi: 'ne ležimo', vi: 'ne ležite', oni: 'ne leže' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '3.1',
      title: 'Odakle si?',
      ru: 'Страны, национальности, столицы; повторение imati',
      goals: [
        'сказать, откуда я и кто я по национальности',
        'назвать 20 стран, их жителей и столицы',
        'уверенно использовать imati / nemati'
      ],
      blocks: [
        {
          type: 'dialog', min: 6, title: 'Strip · Problem Ive Andrića',
          note: 'Прочитайте кириллицу сами. Иво Андрич — нобелевский лауреат, родился в Боснии, писал на сербском, жил в Белграде: отсюда его «проблема».',
          img: 'img/l3_strip.png',
          lines: [
            { who: 'Nikola', sr: 'Ćao opet! Marina, odakle si?', ru: 'Снова привет! Марина, откуда ты?' },
            { who: 'Marina', sr: 'Zdravo! Ja sam iz Srbije, Srpkinja sam.', ru: 'Здравствуй! Я из Сербии, я сербка.' },
            { who: 'Novak', sr: 'Hehe, i ja sam Srbin!', ru: 'Хе-хе, и я серб!' },
            { who: 'Ivo', sr: 'Vi ste Srbi, ali ko sam ja?', ru: 'Вы сербы, а кто я?' }
          ]
        },
        {
          type: 'text', min: 4, title: 'Nacionalnosti · как пишутся национальности',
          html:
            '<p>Национальность пишется с заглавной буквы, название языка — со строчной:</p>' +
            '<ul><li>[[Ja sam iz Mađarske, ja sam Mađar i govorim mađarski.]]</li>' +
            '<li>[[Ti si iz Crne Gore, Crnogorac si i pričaš crnogorski.]]</li>' +
            '<li>[[Mi smo Rusi, iz Rusije smo, naš jezik je ruski.]]</li></ul>' +
            '<p>Обратите внимание: после <i>iz</i> название страны меняет окончание (родительный падеж): [[iz Srbije]], [[iz Rusije]], [[iz Crne Gore]], [[iz Nemačke]]. Пока просто запоминайте формы.</p>'
        },
        {
          type: 'gap', min: 5, title: 'Oblici glagola imati · повторение',
          items: [
            'Moja mama {ima} 45 godina.', 'Moj tata {ima} auto.', 'Ja {imam} baku i deku.', 'Ti {imaš} puno rođaka.',
            'Mi {imamo} stan u Beogradu.', 'Vi {imate} kuću na selu.', 'Oni {imaju} dvoje dece.', 'One {imaju} prijatelje u Novom Sadu.'
          ]
        },
        {
          type: 'gap', min: 5, title: 'Odrični oblik glagola imati',
          note: 'Там, где местоимения нет, форма подсказывает лицо: смотрите на вторую часть предложения.',
          items: [
            '{Nemam} brata, ali imam sestru.', 'Marko {nema} sestru, on je jedinac.', 'Moji roditelji {nemaju} kuću, žive u stanu.',
            '{Nemamo} psa, jer živimo u malom stanu.', 'Oni {nemaju} auto, idu svuda peške.', '{Nemate} bicikl, idete u školu autobusom.',
            'Ti {nemaš} sestru? Mislio sam da imaš.', 'Ana {nema} decu, ali ima psa i mačku.'
          ]
        },
        {
          type: 'text', min: 8, title: 'Zemlje i narodi · страны и национальности',
          html: '<p>Прочитайте вслух все три формы. Обратите внимание на женские окончания: <b>-kinja</b> (Srpkinja, Ruskinja), <b>-ka</b> (Crnogorka, Bosanka), <b>-ica</b> (Hrvatica, Mađarica).</p>',
          tables: [
            { caption: 'Balkan i susedi', head: ['zemlja', 'on', 'ona'], rows: [
              ['Srbija', 'Srbin', 'Srpkinja'], ['Crna Gora', 'Crnogorac', 'Crnogorka'], ['Hrvatska', 'Hrvat', 'Hrvatica'], ['Bosna i Hercegovina', 'Bosanac', 'Bosanka'],
              ['Makedonija', 'Makedonac', 'Makedonka'], ['Slovenija', 'Slovenac', 'Slovenka'], ['Rumunija', 'Rumun', 'Rumunka'], ['Mađarska', 'Mađar', 'Mađarica'],
              ['Bugarska', 'Bugarin', 'Bugarka'], ['Albanija', 'Albanac', 'Albanka'], ['Grčka', 'Grk', 'Grkinja'], ['Turska', 'Turčin', 'Turkinja']
            ] },
            { caption: 'Ostale zemlje', head: ['zemlja', 'on', 'ona'], rows: [
              ['Rusija', 'Rus', 'Ruskinja'], ['Belorusija', 'Belorus', 'Beloruskinja'], ['Ukrajina', 'Ukrajinac', 'Ukrajinka'], ['Nemačka', 'Nemac', 'Nemica'],
              ['Francuska', 'Francuz', 'Francuskinja'], ['Italija', 'Italijan', 'Italijanka'], ['Španija', 'Španac', 'Špankinja'], ['Engleska', 'Englez', 'Engleskinja'],
              ['SAD, Amerika', 'Amerikanac', 'Amerikanka'], ['Kina', 'Kinez', 'Kineskinja'], ['Češka', 'Čeh', 'Čehinja'], ['Japan', 'Japanac', 'Japanka']
            ] }
          ]
        },
        {
          type: 'dialog', min: 4, title: 'Dijalog · Stvarno?',
          img: 'img/l3_dijalog.png',
          lines: [
            { who: 'Ona', sr: 'Ćao! Odakle si? Ja sam iz Mađarske.', ru: 'Привет! Откуда ты? Я из Венгрии.' },
            { who: 'On', sr: 'Stvarno? Ja sam iz Češke, Čeh sam.', ru: 'Правда? Я из Чехии, я чех.' },
            { who: 'Ona', sr: 'Drago mi je! Mađarica sam, zovem se Eszter.', ru: 'Очень приятно! Я венгерка, меня зовут Эстер.' },
            { who: 'On', sr: 'I meni je drago. Ja sam Tomaš. Gde živiš?', ru: 'Мне тоже приятно. Я Томаш. Где ты живёшь?' },
            { who: 'Ona', sr: 'Živim u Budimpešti. A ti?', ru: 'Живу в Будапеште. А ты?' },
            { who: 'On', sr: 'Ja živim u Pragu, ali radim u Beču.', ru: 'Я живу в Праге, но работаю в Вене.' }
          ]
        },
        {
          type: 'match', min: 6, title: 'Zastave · флаги и страны',
          note: 'Назовите страну вслух, потом нажмите на её название.',
          pairs: [
            ['🇨🇳', 'Kina', 'Kina'], ['🇷🇸', 'Srbija', 'Srbija'], ['🇺🇸', 'SAD, Amerika', 'SAD, Amerika'], ['🇮🇹', 'Italija', 'Italija'],
            ['🇫🇷', 'Francuska', 'Francuska'], ['🇩🇪', 'Nemačka', 'Nemačka'], ['🇭🇺', 'Mađarska', 'Mađarska'], ['🇲🇪', 'Crna Gora', 'Crna Gora'],
            ['🇷🇺', 'Rusija', 'Rusija'], ['🇪🇸', 'Španija', 'Španija'], ['🇨🇿', 'Češka', 'Češka'], ['🇭🇷', 'Hrvatska', 'Hrvatska'],
            ['🇧🇦', 'Bosna i Hercegovina', 'Bosna i Hercegovina'], ['🇬🇷', 'Grčka', 'Grčka'], ['🇹🇷', 'Turska', 'Turska'], ['🇧🇬', 'Bugarska', 'Bugarska'],
            ['🇸🇮', 'Slovenija', 'Slovenija'], ['🇷🇴', 'Rumunija', 'Rumunija']
          ]
        },
        {
          type: 'match', min: 5, title: 'Glavni gradovi · столицы',
          pairs: [
            ['Srbija', 'Beograd'], ['Crna Gora', 'Podgorica'], ['Hrvatska', 'Zagreb'], ['Mađarska', 'Budimpešta'], ['Češka', 'Prag'], ['Rusija', 'Moskva'],
            ['Nemačka', 'Berlin'], ['Francuska', 'Pariz'], ['Italija', 'Rim'], ['Španija', 'Madrid'], ['SAD, Amerika', 'Vašington'], ['Kina', 'Peking']
          ]
        },
        {
          type: 'gap', min: 6, title: 'Ko je odakle? · национальность по стране',
          note: 'Впишите национальность. Обращайте внимание на род.',
          items: [
            'Marko je iz Srbije. On je {Srbin}.', 'Ana je iz Hrvatske. Ona je {Hrvatica}.', 'Ja sam iz Rusije. Ja sam {Rus|Ruskinja}.',
            'Eszter je iz Mađarske. Ona je {Mađarica}.', 'Tomaš je iz Češke. On je {Čeh}.', 'Luka je iz Crne Gore. On je {Crnogorac}.',
            'Marija je iz Nemačke. Ona je {Nemica}.', 'Đovani je iz Italije. On je {Italijan}.', 'Lin je iz Kine. Ona je {Kineskinja}.', 'Džon je iz Amerike. On je {Amerikanac}.'
          ]
        },
        {
          type: 'speak', min: 9, title: 'Razgovor · откуда ты?',
          note: 'Играем роли: каждый выбирает себе страну из таблицы (не свою!), знакомитесь и выясняете, кто откуда, где живёт и на каком языке говорит. Потом меняете страны и повторяете.',
          items: [
            { q: 'Odakle si? / Odakle ste?', sample: 'Ja sam iz Grčke. Grk sam.' },
            { q: 'Stvarno? A gde živiš?', sample: 'Živim u Atini, ali radim u Beogradu.' },
            { q: 'Koji jezik govoriš?', sample: 'Govorim grčki i malo srpski.' },
            { q: 'Da li imaš porodicu u Srbiji?', sample: 'Nemam. Imam prijatelje u Novom Sadu.' },
            { q: 'Ko je ovo? Odakle je on / ona?', sample: 'Ovo je moja prijateljica Eszter. Ona je Mađarica, iz Budimpešte.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'Odakle si? — Ja sam iz Srbije. Srbin sam. / Srpkinja sam.',
            'Srbin, Srpkinja — с большой буквы; srpski — с маленькой',
            'iz Srbije, iz Rusije, iz Crne Gore, iz Nemačke',
            'imam / nemam, imaju / nemaju'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: Балканы, соседи, Россия', est: 8, set: 'A' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Odakle si?'] }, { a: ['Ja sam iz Srbije, Srpkinja sam.'] }, { a: ['Vi ste Srbi, ali ko sam ja?'] },
            { a: ['Stvarno? Ja sam iz Češke.'] }, { a: ['Mi smo Rusi, iz Rusije smo.'] }, { a: ['Nemam brata, ali imam sestru.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Откуда ты? — Я из России.', a: ['Odakle si? Ja sam iz Rusije.', 'Odakle si? Iz Rusije sam.'] },
            { q: 'Я русская.', a: ['Ja sam Ruskinja.', 'Ruskinja sam.'] },
            { q: 'Он серб, а она хорватка.', a: ['On je Srbin, a ona je Hrvatica.'] },
            { q: 'Правда? Я из Венгрии.', a: ['Stvarno? Ja sam iz Mađarske.', 'Stvarno? Iz Mađarske sam.'] },
            { q: 'Столица Сербии — Белград.', a: ['Glavni grad Srbije je Beograd.'] },
            { q: 'Они не из Черногории.', a: ['Oni nisu iz Crne Gore.', 'Nisu iz Crne Gore.'] },
            { q: 'У меня нет собаки, потому что мы живём в маленькой квартире.', a: ['Nemam psa, jer živimo u malom stanu.', 'Ja nemam psa, jer živimo u malom stanu.'] },
            { q: 'Кто я?', a: ['Ko sam ja?'] }
          ]
        },
        {
          type: 'write', title: 'Три человека из разных стран', est: 6, key: 'hw-3.1-ljudi',
          note: 'Напишите о трёх знакомых, друзьях или известных людях из разных стран: откуда они, кто по национальности, где живут.',
          sample: 'Moj prijatelj Marko je iz Srbije, on je Srbin i živi u Beogradu. Moja koleginica Ana je Hrvatica, iz Zagreba je. Novak Đoković je Srbin, ali živi u Monaku.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '3.2',
      title: 'Glagoli i-grupe',
      ru: 'Глаголы и-спряжения, порядок слов, конструкция da + prezent',
      goals: [
        'спрягать živeti, želeti, voleti, raditi, misliti, učiti, trčati, ležati',
        'строить утверждение, отрицание и вопрос с этими глаголами',
        'говорить «хочу делать / люблю делать» через da + prezent'
      ],
      blocks: [
        {
          type: 'conj', min: 5, title: 'Zagrevanje · разминка: imati и biti',
          note: 'Вслух, по очереди. Потом прочитайте партнёру домашний текст о трёх людях.',
          verbs: ['imati'], rounds: 8
        },
        {
          type: 'text', min: 8, title: 'Glagoli i-grupe · и-спряжение',
          html:
            '<p>Спряжение нельзя определить по инфинитиву — только по основе настоящего времени (форма «я»). У и-группы перед окончанием стоит <b>i</b>:</p>' +
            '<ul><li>[[živeti — ja živim]] (жить), [[želeti — ja želim]] (хотеть), [[voleti — ja volim]] (любить)</li>' +
            '<li>[[raditi — ja radim]] (работать), [[misliti — ja mislim]] (думать), [[učiti — ja učim]] (учить)</li>' +
            '<li>[[trčati — ja trčim]] (бегать), [[ležati — ja ležim]] (лежать)</li></ul>' +
            '<p>Инфинитивы кончаются по-разному (-eti, -iti, -ati), а в настоящем времени у всех тематическая гласная <b>i</b>.</p>',
          tables: [
            { caption: 'živeti', head: ['jednina', 'množina'], rows: [['ja živim', 'mi živimo'], ['ti živiš', 'vi živite'], ['on / ona / ono živi', 'oni / one / ona žive']] }
          ],
          after:
            '<p><b>Порядок слов.</b> Местоимение можно опустить. Отрицание <i>ne</i> пишется отдельно и стоит перед глаголом, вопрос — через <i>Da li</i>:</p>' +
            '<p>✅ [[Ja živim ovde.]] ✅ [[Živiš ovde.]]<br>❌ [[Mi ne živimo u Nišu.]] ❌ [[Ne živite u kući.]]<br>❓ [[Da li Marija živi u Parizu?]] ❓ [[Da li živi u Beču?]]</p>'
        },
        {
          type: 'order', min: 6, title: 'Obnovite redosled reči · соберите предложение',
          note: 'Первое слово — с заглавной буквы, последнее — с точкой или вопросительным знаком.',
          items: [
            'Ja živim ovde.', 'Ne živite u Parizu.', 'Ja ne radim u firmi.', 'Ne mislimo loše o tome.',
            'Ti želiš da živiš u Nju-Jorku.', 'Da li trčiš ujutru?', 'Strahinja mnogo uči na fakultetu.', 'Vaš telefon leži na stolu.'
          ]
        },
        {
          type: 'text', min: 5, title: 'Da + prezent · «хочу учить»',
          html:
            '<p>Я хочу учить сербский. = [[Ja želim da učim srpski jezik.]]</p>' +
            '<p>Там, где в русском инфинитив (хочу <i>делать</i>, люблю <i>читать</i>), в сербском — <b>da + глагол в настоящем времени</b>, оба глагола в одном лице и числе:</p>' +
            '<ul><li>Я люблю читать. — [[Ja volim da čitam.]]</li>' +
            '<li>Мы хотим учить английский. — [[Mi želimo da učimo engleski.]]</li>' +
            '<li>Она любит бегать. — [[Ona voli da trči.]]</li></ul>' +
            '<p>Инфинитив тоже возможен ([[Želim učiti srpski]]), но это скорее хорватский вариант. В Сербии говорят через <i>da</i>.</p>'
        },
        {
          type: 'gap', min: 8, title: 'Unesite oblik glagola · впишите форму',
          note: 'Подсказка — инфинитив в скобках.',
          items: [
            'Mi {živimo} (živeti) u Beogradu na Dorćolu. Gde vi živite?',
            'Ja {mislim} (misliti), to je veoma lepo. Šta ti {misliš} (misliti)?',
            'Moj pas {voli} (voleti) da {leži} (ležati) na krevetu.',
            'Moja porodica uvek mnogo {radi} (raditi). Ja takođe mnogo {radim} (raditi).',
            'Oni {trče} (trčati) na stadionu. Moja ćerka ne {voli} (voleti) da {trči} (trčati).',
            'Vi {želite} (želeti) da {kupite} (kupiti) novi laptop.',
            'Nina ne {voli} (voleti) da {sedi} (sedeti). Ona {voli} (voleti) da {radi} (raditi) gimnastiku.',
            'Ti {nemaš} (nemati) brata ili sestru, ali {želiš} (želeti) da {imaš} (imati) kućnog ljubimca.'
          ]
        },
        {
          type: 'gap', min: 5, title: 'Izaberite oblik · выберите форму',
          options: ['volim', 'voli', 'volimo', 'želi', 'želite', 'spavaš', 'živi', 'pevamo', 'leže'],
          items: [
            'Ja {volim} da pevam.', 'Ti želiš da {spavaš}.', 'Marko voli da {živi} na moru.', 'Sanja {želi} da čita knjigu.',
            'Volimo da {pevamo} zajedno.', 'Vi {želite} da učite francuski.', 'Oni vole da {leže} na krevetu.', 'Ne {volim} da trčim.'
          ]
        },
        {
          type: 'gap', min: 5, title: 'Oba glagola · впишите оба глагола',
          items: [
            'Mi {želimo} da {živimo} na Dorćolu. <i>(хотим жить)</i>',
            'Ja ne {volim} da {trčim} rano ujutru. <i>(не люблю бегать)</i>',
            'Mi {mislimo} da {kupimo} novi auto. <i>(думаем купить)</i>',
            'Da li vi {želite} da {učite} nešto novo? <i>(хотите учить)</i>',
            'Oni {vole} da {žive} u Sokobanji. <i>(любят жить)</i>'
          ]
        },
        {
          type: 'conj', min: 6, title: 'Trening · спряжение и-глаголов вслух',
          note: 'Отвечайте по очереди вслух, потом печатайте.',
          verbs: ['ziveti', 'zeleti', 'voleti', 'raditi', 'misliti', 'uciti', 'trcati', 'lezati'], rounds: 10
        },
        {
          type: 'speak', min: 10, title: 'Šta voliš da radiš? · что ты любишь делать?',
          note: 'Задайте друг другу все вопросы и ответьте полными предложениями. Потом расскажите про партнёра в третьем лице: On / ona voli da…',
          items: [
            { q: 'Gde živiš? Da li voliš da živiš tamo?', sample: 'Živim u Beogradu. Volim da živim ovde, ali želim da živim na moru.' },
            { q: 'Šta voliš da radiš u slobodno vreme?', sample: 'Volim da čitam i da trčim ujutru. Ne volim da ležim na krevetu.' },
            { q: 'Gde radiš? Da li mnogo radiš?', sample: 'Radim u firmi. Da, mnogo radim.' },
            { q: 'Šta želiš da učiš?', sample: 'Želim da učim srpski jezik i gitaru.' },
            { q: 'Šta misliš o Beogradu?', sample: 'Mislim da je Beograd veoma lep grad.' },
            { q: 'Da li tvoja porodica voli da putuje?', sample: 'Da, moji roditelji vole da putuju. Trenutno žele da kupe auto.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'živim, živiš, živi, živimo, živite, žive',
            'ne + глагол пишется отдельно: ne živim, ne radim',
            'Da li živiš u Beogradu?',
            'Želim da učim. Volim da čitam. — оба глагола в одном лице'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: глаголы и слова занятия', est: 9, set: 'C' },
        { type: 'conj', title: 'Тренажёр: и-глаголы (+, −, ?)', est: 6, verbs: ['ziveti', 'zeleti', 'voleti', 'raditi', 'misliti', 'uciti', 'trcati', 'lezati'], rounds: 15 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Ja želim da učim srpski jezik.'] }, { a: ['Da li trčiš ujutru?'] }, { a: ['Ne živite u Parizu.'] },
            { a: ['Moj pas voli da leži na krevetu.'] }, { a: ['Vaš telefon leži na stolu.'] }, { a: ['Šta ti misliš?'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я хочу учить сербский.', a: ['Želim da učim srpski.', 'Ja želim da učim srpski.', 'Želim da učim srpski jezik.', 'Ja želim da učim srpski jezik.'] },
            { q: 'Мы любим петь вместе.', a: ['Volimo da pevamo zajedno.', 'Mi volimo da pevamo zajedno.'] },
            { q: 'Она не любит бегать.', a: ['Ona ne voli da trči.', 'Ne voli da trči.'] },
            { q: 'Где вы живёте?', a: ['Gde živite?', 'Gde vi živite?'] },
            { q: 'Ты много работаешь?', a: ['Da li mnogo radiš?', 'Da li ti mnogo radiš?', 'Da li radiš mnogo?'] },
            { q: 'Они хотят купить новую машину.', a: ['Oni žele da kupe novi auto.', 'Žele da kupe novi auto.'] },
            { q: 'Я думаю, что это очень красиво.', a: ['Mislim da je to veoma lepo.', 'Ja mislim da je to veoma lepo.', 'Mislim da je to vrlo lepo.'] },
            { q: 'Мой брат учится в университете и много учит.', a: ['Moj brat studira na fakultetu i mnogo uči.', 'Moj brat studira na univerzitetu i mnogo uči.'] }
          ]
        },
        {
          type: 'write', title: 'Šta volim, a šta ne volim da radim', est: 6, key: 'hw-3.2-volim', record: true,
          note: '6 предложений: три с volim da…, три с ne volim da… / želim da…. Прочитайте вслух и запишите.',
          sample: 'Volim da čitam knjige. Volim da trčim ujutru. Volim da učim srpski. Ne volim da ležim na krevetu ceo dan. Ne volim da radim vikendom. Želim da živim na moru.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '3.3',
      title: 'Duga priča i rod reči',
      ru: 'Длинная история Бояны; род существительных и множественное число',
      goals: [
        'понять на слух рассказ о семье и пересказать его',
        'определить род существительного и образовать множественное число',
        'рассказать о своей семье связным текстом'
      ],
      blocks: [
        {
          type: 'speak', min: 5, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст «Šta volim da radim». Партнёр пересказывает его в третьем лице: On voli da…',
          items: [
            { q: 'Ja volim da… / Ne volim da…' },
            { q: 'On / ona voli da…, ne voli da…' }
          ]
        },
        {
          type: 'gap', bank: true, listen: true, min: 10, title: 'Duga priča · послушайте и вставьте',
          note: 'Сначала слушаем целиком, не глядя на слова. Потом заполняем пропуски и читаем по абзацу вслух.',
          items: [
            'Zdravo! Ja {sam} Bojana. Srpkinja sam, {živim} u Novom Sadu i studiram matematiku. Moja mama je {Hrvatica}, ona je iz Zagreba. Ona ima {43} godine, a tata ima {47} godina. Da, tata se zove Andrija, on je {Srbin} iz Kragujevca. Oni su se upoznali sa mamom u Beogradu na univerzitetu.',
            'U slobodno vreme ja {radim} u kafiću kao konobarica. Imam takođe mlađeg brata, on {živi} i studira u Nemačkoj. Mi mnogo putujemo sa porodicom, ja volim da {učim} strane jezike.',
            'Imam baku i dedu, oni {žive} na selu i ne {vole} veliki grad. Moj tata posećuje ih svakog leta. Moja baka se zove Dara, a deda Rajko. Baka Dara ima {74} godine, deda ima {77}.',
            'Baš volim svoju porodicu i svoj život. Sviđa mi se da {živim} u Vojvodini, ali trenutno želim da {se} preselim u Beograd.'
          ]
        },
        {
          type: 'tf', min: 5, title: 'Istina ili laž? · верно или неверно',
          items: [
            { q: 'Bojana je Hrvatica.', a: false, why: 'Bojana je Srpkinja, Hrvatica je njena mama.' },
            { q: 'Bojanina mama je mlađa nego njen tata.', a: true },
            { q: 'Tata je iz Kruševca.', a: false, why: 'Tata je iz Kragujevca.' },
            { q: 'U slobodno vreme Bojana radi u kafiću kao kuvarica.', a: false, why: 'Radi kao konobarica.' },
            { q: 'Oni sa porodicom često putuju.', a: true },
            { q: 'Brat Bojane živi u inostranstvu.', a: true },
            { q: 'Baka i deka Bojane vole život na selu.', a: true },
            { q: 'Bojana ne voli da živi u Vojvodini.', a: false, why: 'Sviđa joj se Vojvodina, ali želi da se preseli u Beograd.' }
          ]
        },
        {
          type: 'speak', min: 6, title: 'Prepričajte · перескажите историю Бояны',
          note: 'Один пересказывает первую половину (Bojana, mama, tata), второй — вторую (posao, brat, baka i deda). Без подглядывания в текст, можно по вопросам.',
          items: [
            { q: 'Ko je Bojana? Odakle je? Šta studira?', sample: 'Bojana je Srpkinja. Živi u Novom Sadu i studira matematiku.' },
            { q: 'Odakle su mama i tata? Koliko imaju godina?', sample: 'Mama je Hrvatica iz Zagreba, ima 43 godine. Tata je Srbin iz Kragujevca, ima 47 godina.' },
            { q: 'Gde Bojana radi? Gde živi brat?', sample: 'Radi u kafiću kao konobarica. Brat živi i studira u Nemačkoj.' },
            { q: 'Gde žive baka i deda? Šta Bojana želi?', sample: 'Žive na selu. Bojana želi da se preseli u Beograd.' }
          ]
        },
        {
          type: 'text', min: 10, title: 'Gramatički rod · род и множественное число',
          html:
            '<p>Три рода: мужской, женский, средний. Род почти всегда видно по окончанию:</p>' +
            '<p><b>Мужской</b> — нулевое окончание, во мн. ч. <b>-i</b>: [[konj — konji]], [[Nemac — Nemci]], [[tanjir — tanjiri]]. Особенности:</p>' +
            '<ul><li>короткие слова расширяются: <b>-ovi</b> после твёрдых ([[voz — vozovi]], [[sok — sokovi]], [[stan — stanovi]]), <b>-evi</b> после мягких j, lj, nj, ć, đ, č, dž, š, ž ([[muž — muževi]]);</li>' +
            '<li>перед <b>-i</b> чередование k, g, h → c, z, s: [[momak — momci]], [[psiholog — psiholozi]], [[Čeh — Česi]];</li>' +
            '<li>некоторые слова на <b>-o</b> тоже мужского рода: [[sto — stolovi]], [[orao — orlovi]], [[posao — poslovi]].</li></ul>' +
            '<p><b>Женский</b> — <b>-a</b>, во мн. ч. <b>-e</b>: [[kuća — kuće]], [[sestra — sestre]], [[porodica — porodice]].</p>' +
            '<p><b>Средний</b> — <b>-o / -e</b>, во мн. ч. <b>-a</b>: [[lice — lica]], [[jezero — jezera]], [[ime — imena]].</p>',
          tables: [
            { caption: 'Gramatički rod reči', head: ['rod', 'jednina', 'množina'], rows: [['M.', 'konj, voz', 'konji, vozovi'], ['Ž.', 'kuća, sestra', 'kuće, sestre'], ['Sr.', 'lice, jezero', 'lica, jezera']] }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Unesite oblik množine · множественное число',
          note: 'Прилагательное уже стоит во множественном числе — оно подсказывает род.',
          items: [
            'Veliki stan — veliki {stanovi}.', 'Lepa žena — lepe {žene}.', 'Tiho jezero — tiha {jezera}.', 'Čisto lice — čista {lica}.',
            'Mala porodica — male {porodice}.', 'Visoki Srbin — visoki {Srbi}.', 'Pametan momak — pametni {momci}.', 'Dobar muž — dobri {muževi}.'
          ]
        },
        {
          type: 'gap', min: 6, title: 'Još množine · ещё множественное число',
          note: 'Исключение на будущее: brat — braća, dete — deca.',
          items: [
            'Jedan voz — {vozovi}.', 'Jedan sok — {sokovi}.',
            'Jedna sestra — {sestre}.', 'Jedno ime — {imena}.', 'Jedan konj — {konji}.', 'Jedan Nemac — {Nemci}.',
            'Jedan psiholog — {psiholozi}.', 'Jedan posao — {poslovi}.', 'Jedna kuća — {kuće}.', 'Jedan Čeh — {Česi}.'
          ]
        },
        {
          type: 'speak', min: 10, title: 'Moja duga priča · моя длинная история',
          note: 'Каждый рассказывает о своей семье 2 минуты по образцу Бояны: кто, откуда, сколько лет, где живут, что любят. Партнёр записывает 3 факта и потом пересказывает их.',
          items: [
            { q: 'Ja sam … Živim u … i radim / studiram …', sample: 'Ja sam Katja. Ruskinja sam, živim u Beogradu i radim kao dizajner.' },
            { q: 'Moja mama je …, ona je iz … Ima … godina.', sample: 'Moja mama je iz Sankt Peterburga. Ima 56 godina.' },
            { q: 'Imam brata / sestru, on / ona živi u …', sample: 'Imam mlađeg brata, on živi i studira u Moskvi.' },
            { q: 'Baka i deda žive …, oni vole …', sample: 'Baka i deda žive na selu i ne vole veliki grad.' },
            { q: 'Sviđa mi se da živim u …, ali želim …', sample: 'Sviđa mi se da živim u Beogradu, ali želim da putujem.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'M.: konj — konji, voz — vozovi, muž — muževi, momak — momci',
            'Ž.: sestra — sestre; Sr.: jezero — jezera, ime — imena',
            'Sviđa mi se da živim u Vojvodini.',
            'Želim da se preselim u Beograd.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: остальные страны, столицы, языки', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'transform', title: 'Jednina → množina · единственное → множественное', est: 5,
          note: 'Напишите форму множественного числа.',
          items: [
            { q: 'stan', a: ['stanovi'] }, { q: 'sestra', a: ['sestre'] }, { q: 'jezero', a: ['jezera'] }, { q: 'muž', a: ['muževi'] },
            { q: 'momak', a: ['momci'] }, { q: 'porodica', a: ['porodice'] }, { q: 'lice', a: ['lica'] }, { q: 'Srbin', a: ['Srbi'] },
            { q: 'posao', a: ['poslovi'] }, { q: 'ime', a: ['imena'] }, { q: 'voz', a: ['vozovi'] }, { q: 'Čeh', a: ['Česi'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант по тексту Бояны', est: 5,
          items: [
            { a: ['Srpkinja sam, živim u Novom Sadu.'] }, { a: ['Moja mama je Hrvatica, ona je iz Zagreba.'] }, { a: ['Radim u kafiću kao konobarica.'] },
            { a: ['Volim da učim strane jezike.'] }, { a: ['Oni žive na selu i ne vole veliki grad.'] }, { a: ['Želim da se preselim u Beograd.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'У меня есть младший брат, он живёт в Германии.', a: ['Imam mlađeg brata, on živi u Nemačkoj.'] },
            { q: 'Мы много путешествуем с семьёй.', a: ['Mnogo putujemo sa porodicom.', 'Mi mnogo putujemo sa porodicom.'] },
            { q: 'Бабушка и дедушка живут в деревне.', a: ['Baka i deda žive na selu.'] },
            { q: 'Мне нравится жить в Белграде.', a: ['Sviđa mi se da živim u Beogradu.'] },
            { q: 'Я хочу переехать в Нови-Сад.', a: ['Želim da se preselim u Novi Sad.', 'Ja želim da se preselim u Novi Sad.'] },
            { q: 'Большие квартиры и маленькие дома.', a: ['Veliki stanovi i male kuće.'] },
            { q: 'Красивые озёра.', a: ['Lepa jezera.'] }
          ]
        },
        {
          type: 'write', title: 'Moja duga priča · текст о семье + запись', est: 12, key: 'hw-3.3-prica', record: true,
          note: '10–12 предложений по образцу Бояны: вы, родители, братья и сёстры, бабушки и дедушки, что вам нравится и чего хотите. Запишите чтение вслух.',
          sample: 'Zdravo! Ja sam Timur. Rus sam, živim u Beogradu i radim u IT firmi. Moja mama je iz Kazanja, ima 55 godina. Tata ima 58 godina, on je iz Moskve. Imam sestru, ona živi u Sankt Peterburgu. Baka živi na selu i ne voli veliki grad. Volim da putujem i da učim strane jezike. Sviđa mi se da živim u Srbiji.'
        }
      ]
    }
  ]
});
