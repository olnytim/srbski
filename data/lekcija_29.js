// Lekcija 29 - Pričaj srpski! Three 60-minute sessions: Serbian loanwords + phraseology, Serbian vs Croatian vs Montenegrin, revision exercises from the extra materials.
COURSE.register({
  n: 29,
  title: 'Pričaj srpski!',
  ru: 'Сербизмы и фразеологизмы, сербский против хорватского и черногорского, повторение падежей и потенциала',

  vocab: [
    { id: 'srbizam', sr: 'srbizam — srpska reč u drugim jezicima', ru: 'сербизм', set: 'A' },
    { id: 'paprika', sr: 'paprika', ru: 'перец (овощ)', set: 'A' },
    { id: 'sljivovica29', sr: 'šljivovica — nacionalno srpsko piće', ru: 'сливовица', set: 'A' },
    { id: 'slava', sr: 'slava — praznik porodice', ru: 'слава, праздник семейного святого', set: 'A' },
    { id: 'zadruga', sr: 'zadruga — porodično društvo', ru: 'задруга, большая семья-община', set: 'A' },
    { id: 'zaduzbina', sr: 'zadužbina — zgrada za nečiji spomen, „za dušu“', ru: 'задужбина, постройка в память', set: 'A' },
    { id: 'skupstina', sr: 'skupština — sastanak većeg broja ljudi', ru: 'скупщина, собрание', set: 'A' },
    { id: 'vampir', sr: 'vampir — biće koje se hrani krvlju', ru: 'вампир', set: 'A' },
    { id: 'vila', sr: 'vila — čarobnica iz šuma, polja i voda', ru: 'вила, фея-русалка', set: 'A' },
    { id: 'kolo29', sr: 'kolo — narodna igra', ru: 'коло, хоровод', set: 'A' },
    { id: 'neprevodiv', sr: 'neprevodiv pojam, folklor, verovanje', ru: 'непереводимое понятие, фольклор, верование', set: 'A' },
    { id: 'pusiti-turcin', sr: 'pušiti kao Turčin', ru: 'курить как паровоз', set: 'A' },
    { id: 'pasti-na-pamet', sr: 'pasti na pamet — Palo mi je na pamet.', ru: 'прийти в голову', set: 'A' },
    { id: 'jezik-za-zubima', sr: 'držati jezik za zubima', ru: 'держать язык за зубами', set: 'A' },
    { id: 'dim-vatra', sr: 'Gde ima dima, ima i vatre.', ru: 'Нет дыма без огня.', set: 'A' },
    { id: 'magarac-magla', sr: 'kao magarac u magli', ru: 'потерялся, как осёл в тумане', set: 'A' },
    { id: 'bozic-badnji', sr: 'kao Božić i Badnji dan', ru: 'неразлучны, как Рождество и сочельник', set: 'A' },
    { id: 'gluv-top', sr: 'gluv kao top', ru: 'глухая тетеря', set: 'A' },
    { id: 'bubice', sr: 'imati bubice u glavi', ru: 'тараканы в голове', set: 'A' },
    { id: 'svoja-voda', sr: 'biti u svojoj vodi', ru: 'быть в своей тарелке', set: 'A' },
    { id: 'voda-dlan', sr: 'čuvati kao malo vode na dlanu', ru: 'беречь как зеницу ока', set: 'A' },

    { id: 'srpskohrvatski', sr: 'srpskohrvatski jezik', ru: 'сербохорватский язык', set: 'B' },
    { id: 'cirilica-latinica', sr: 'ćirilica — latinica', ru: 'кириллица — латиница', set: 'B' },
    { id: 'ekavica', sr: 'ekavica — ijekavica — ikavica', ru: 'экавица — иекавица — икавица', set: 'B' },
    { id: 'muva-muha', sr: 'muva — muha; kuvati — kuhati', ru: 'муха; готовить (SR — HR)', set: 'B' },
    { id: 'vera-vjera', sr: 'vera — vjera; lepo — lijepo', ru: 'вера; красиво (SR — HR)', set: 'B' },
    { id: 'radicu', sr: 'radiću — radit ću', ru: 'буду работать (SR — HR)', set: 'B' },
    { id: 'fudbal-nogomet', sr: 'fudbal — nogomet; rukomet', ru: 'футбол; гандбол (SR — HR)', set: 'B' },
    { id: 'kajsija-marelica', sr: 'kajsija — marelica; paradajz — rajčica', ru: 'абрикос; помидор (SR — HR)', set: 'B' },
    { id: 'manastir-samostan', sr: 'manastir — samostan; muzika — glazba', ru: 'монастырь; музыка (SR — HR)', set: 'B' },
    { id: 'hleb-kruh', sr: 'hleb — kruh; voz — vlak; hiljada — tisuća', ru: 'хлеб; поезд; тысяча (SR — HR)', set: 'B' },
    { id: 'galeb', sr: 'galeb, pučina, more', ru: 'чайка, открытое море, море', set: 'B' },
    { id: 'lipo', sr: 'lipo = lepo (ikavica, Dalmacija)', ru: 'красиво (далматинский говор)', set: 'B' },
    { id: 'crnogorski', sr: 'crnogorski jezik — ijekavica, slova ś i ź', ru: 'черногорский язык', set: 'B' },
    { id: 'dje', sr: 'đe = gde; sjutra = sutra; nijesam = nisam', ru: 'где; завтра; я не (черногорские формы)', set: 'B' },
    { id: 'kilo-rakije', sr: 'kilo rakije = litar rakije', ru: '«кило» ракии = литр', set: 'B' },
    { id: 'stereotip', sr: 'stereotip, skraćivati reči', ru: 'стереотип, сокращать слова', set: 'B' },
    { id: 'razlika', sr: 'razlika između srpskog i hrvatskog', ru: 'разница между сербским и хорватским', set: 'B' },

    { id: 'tvrdjava', sr: 'Petrovaradinska tvrđava', ru: 'Петроварадинская крепость', set: 'C' },
    { id: 'fina-devojka', sr: 'fina devojka, dati predlog', ru: 'милая девушка, дать совет / предложение', set: 'C' },
    { id: 'idealan-odmor', sr: 'idealan odmor, savršen odmor', ru: 'идеальный отдых, совершенный отдых', set: 'C' },
    { id: 'iznajmiti', sr: 'iznajmiti apartman blizu plaže', ru: 'снять апартаменты у пляжа', set: 'C' },
    { id: 'suncati-se', sr: 'sunčati se, plivati u moru', ru: 'загорать, плавать в море', set: 'C' },
    { id: 'obala', sr: 'obala — šetati pored obale', ru: 'берег — гулять вдоль берега', set: 'C' },
    { id: 'pecati', sr: 'pecati — ići na reku da pecam', ru: 'рыбачить', set: 'C' },
    { id: 'pobeci', sr: 'pobeći u prirodu', ru: 'сбежать на природу', set: 'C' },
    { id: 'jedva-cekam', sr: 'Jedva čekam!', ru: 'Жду не дождусь!', set: 'C' },
    { id: 'vencati-se', sr: 'venčati se — Venčali su se prošle godine.', ru: 'пожениться', set: 'C' },
    { id: 'reci-istinu', sr: 'reći istinu — Da li si mu rekla istinu?', ru: 'сказать правду', set: 'C' },
    { id: 'akuzativ-lokativ', sr: 'idem u školu (akuzativ) — u školi sam (lokativ)', ru: 'куда — где', set: 'C' }
  ],

  verbs: {
    setati: { inf: 'šetati', ru: 'гулять', l: { m: 'šetao', f: 'šetala', n: 'šetalo', mpl: 'šetali', fpl: 'šetale' } },
    upoznati: { inf: 'upoznati', ru: 'познакомиться', l: { m: 'upoznao', f: 'upoznala', n: 'upoznalo', mpl: 'upoznali', fpl: 'upoznale' } },
    iznajmiti: { inf: 'iznajmiti', ru: 'снять (жильё)', l: { m: 'iznajmio', f: 'iznajmila', n: 'iznajmilo', mpl: 'iznajmili', fpl: 'iznajmile' } },
    plivati: { inf: 'plivati', ru: 'плавать', l: { m: 'plivao', f: 'plivala', n: 'plivalo', mpl: 'plivali', fpl: 'plivale' } },
    moci: { inf: 'moći', ru: 'мочь', l: { m: 'mogao', f: 'mogla', n: 'moglo', mpl: 'mogli', fpl: 'mogle' } },
    putovati: { inf: 'putovati', ru: 'путешествовать', l: { m: 'putovao', f: 'putovala', n: 'putovalo', mpl: 'putovali', fpl: 'putovale' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '29.1',
      title: 'Srbizmi i frazeologizmi',
      ru: 'Сербские слова, которые знает весь мир, вилы и десять фразеологизмов',
      goals: [
        'прочитать текст о сербизмах и объяснить 9 слов по-сербски',
        'соединить 10 фразеологизмов с русскими и использовать три в речи',
        'узнать, откуда выражение «вилами по воде писано»'
      ],
      blocks: [
        {
          type: 'text', min: 7, title: 'Pričaj srpski da te ceo svet razume · текст из курса',
          note: 'Прослушайте, потом прочитайте по абзацу.',
          html: '<p><b>Koje srpske reči koriste stranci iz celog sveta?</b></p>' +
            '<p>[[Reč paprika se često spominje kao srbizam. Stranci sa zadovoljstvom piju i zovu srpskim imenom nacionalno srpsko piće šljivovica.]]</p>' +
            '<p>[[Srbi su jedini narod u svetu koji ima običaj da proslavlja praznik porodice, odnosno slavu. Neprevodivi srpski pojmovi takođe uključuju reči zadruga, zadužbina i skupština.]]</p>' +
            '<p>[[Možemo se setiti reči vampir i vila iz folklora srpskog naroda. Kada govorimo o običajima tu je i reč kolo.]]</p>'
        },
        {
          type: 'match', min: 6, title: 'Povežite pojam sa objašnjenjem · упражнение из курса',
          pairs: [
            ['vampir', 'Mitološko biće, koji se hrani krvlju.'], ['vila', 'Mitološko biće u verovanju Srba. Čarobnica koja živi u šumama, poljima i vodama.'],
            ['zadužbina', 'Zgrada za nečiji spomen, „za dušu“.'], ['zadruga', 'Društvo, porodična zajednica.'],
            ['skupština', 'Sastanak većeg broja ljudi, sazvan radi raspravljanja ili rešavanja nekih pitanja.'], ['paprika', 'Vrsta povrtne biljke.']
          ]
        },
        {
          type: 'text', min: 4, title: 'Zanimljivost · вилами по воде писано',
          img: 'img/l29_vile.png',
          html: '<p>Есть версия, что выражение «вилами по воде писано» связано не с сельскохозяйственным инструментом, а с сербскими мифологическими феями-русалками [[vilama]], красоте и словам которых ни в коем случае нельзя доверять.</p>' +
            '<p>[[Vile žive u šumama, poljima i vodama. Lepe su, ali im ne treba verovati.]]</p>'
        },
        {
          type: 'match', min: 8, title: 'Frazeologizmi · соедините с русской версией',
          note: 'Упражнение из курса.',
          pairs: [
            ['pušiti kao Turčin', 'курить как паровоз'], ['pasti na pamet', 'прийти в голову'], ['držati jezik za zubima', 'держать язык за зубами'],
            ['gde ima dima, ima i vatre', 'нет дыма без огня'], ['kao magarac u magli', 'потерялся, как осёл в тумане'], ['kao Božić i Badnji dan', 'о тех, кто неразлучен'],
            ['gluv kao top', 'глухая тетеря'], ['imati bubice u glavi', 'тараканы в голове'], ['biti u svojoj vodi', 'быть в своей тарелке'], ['kao malo vode na dlanu', 'относиться к кому-то бережно, заботливо']
          ]
        },
        {
          type: 'gap', bank: true, min: 9, title: 'Frazeologizam u kontekstu · выберите',
          items: [
            'Deda puši dve kutije dnevno, puši kao {Turčin}.', 'Nisam znao šta da kažem, i onda mi je {palo na pamet} da pozovem tebe.',
            'To je tajna, drži jezik za {zubima}!', 'Svi pričaju da se rastaju. Gde ima {dima}, ima i vatre.',
            'Prvi dan u novom gradu, hodam kao magarac u {magli}.', 'Marko i Petar su uvek zajedno, kao Božić i {Badnji dan}.',
            'Baka ne čuje ništa, gluva je kao {top}.', 'Moj brat ima čudne ideje, ima {bubice} u glavi.',
            'Na moru sam u svojoj {vodi}, tamo sam srećna.', 'Ona čuva svog psa kao malo vode na {dlanu}.'
          ]
        },
        {
          type: 'speak', min: 8, title: 'Pitanja · вопросы',
          items: [
            { q: 'Koje srpske reči znaju vaši prijatelji u Rusiji?', sample: 'Moji prijatelji znaju reči rakija, ćevapi i slava.' },
            { q: 'Koji ruski pojam je neprevodiv na srpski?', sample: 'Mislim da je reč „dača“ neprevodiva, Srbi kažu vikendica, ali to nije isto.' },
            { q: 'Da li ste bili na slavi? Kako je bilo?', sample: 'Bio sam na slavi kod kolege. Bilo je mnogo hrane, jeli smo ceo dan.' }
          ]
        },
        {
          type: 'speak', min: 12, title: 'Tri frazeologizma o meni · употребите в речи',
          note: 'Каждый рассказывает три коротких истории о себе или знакомых, в каждой один фразеологизм. Партнёр угадывает, какой фразеологизм был и переводит на русский.',
          record: true,
          items: [
            { q: 'Ko od vaših poznanika puši kao Turčin? Ko ima bubice u glavi?', sample: 'Moj komšija puši kao Turčin, svako jutro ga vidim sa cigaretom. Moja sestra ima bubice u glavi: želi da živi na brodu.' },
            { q: 'Kada ste bili kao magarac u magli? Gde ste u svojoj vodi?', sample: 'Kad sam prvi put došao u Beograd, bio sam kao magarac u magli. U kuhinji sam u svojoj vodi.' },
            { q: 'Šta vam je palo na pamet danas?', sample: 'Danas mi je palo na pamet da naučim tri nove reči.' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'srbizmi: paprika, šljivovica, slava, zadruga, zadužbina, skupština, vampir, vila, kolo',
            'pušiti kao Turčin, pasti na pamet, držati jezik za zubima, gde ima dima, ima i vatre',
            'kao magarac u magli, kao Božić i Badnji dan, gluv kao top, imati bubice u glavi',
            'biti u svojoj vodi, čuvati kao malo vode na dlanu'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: сербизмы и фразеологизмы', est: 9, set: 'A' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: фразеологизмы', est: 6,
          items: [
            { a: ['Puši kao Turčin.'] }, { a: ['Palo mi je na pamet.'] }, { a: ['Drži jezik za zubima!'] },
            { a: ['Gde ima dima, ima i vatre.'] }, { a: ['Oni su kao Božić i Badnji dan.'] }, { a: ['Srbi proslavljaju slavu, praznik porodice.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Какие сербские слова используют иностранцы?', a: ['Koje srpske reči koriste stranci?'] },
            { q: 'Сербы — единственный народ, который празднует славу.', a: ['Srbi su jedini narod koji proslavlja slavu.', 'Srbi su jedini narod koji slavi slavu.'] },
            { q: 'Вилы живут в лесах, полях и водах.', a: ['Vile žive u šumama, poljima i vodama.'] },
            { q: 'Мне пришло в голову позвонить тебе.', a: ['Palo mi je na pamet da te pozovem.', 'Palo mi je na pamet da ti pozvonim.'] },
            { q: 'Держи язык за зубами!', a: ['Drži jezik za zubima!'] },
            { q: 'Бабушка глухая, как тетеря.', a: ['Baka je gluva kao top.'] },
            { q: 'На море я в своей тарелке.', a: ['Na moru sam u svojoj vodi.'] }
          ]
        },
        {
          type: 'write', title: 'Priča sa tri frazeologizma · текст + запись', est: 8, key: 'hw-29.1-fraze', record: true,
          note: 'Короткая история из 8 предложений, в которой есть три фразеологизма и два сербизма. Запишите чтение вслух.',
          sample: 'Prošle subote bili smo na slavi kod Milana. Milan i njegov brat su uvek zajedno, kao Božić i Badnji dan. Deda je sedeo na terasi i pušio kao Turčin. Baka je gluva kao top, pa smo svi vikali. Palo mi je na pamet da probam šljivovicu. Posle dve čaše bio sam kao magarac u magli! Milanova mama nas je čuvala kao malo vode na dlanu i dala nam sarmu. Bilo je lepo, ali sutra sam držao jezik za zubima o rakiji.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '29.2',
      title: 'Srpski, hrvatski, crnogorski',
      ru: 'Пять различий сербского и хорватского, далматинская песня, черногорский вариант',
      goals: [
        'назвать пять различий между сербским и хорватским с примерами',
        'рассортировать 24 слова: сербское или хорватское',
        'прочитать текст о черногорском и проверить утверждения'
      ],
      blocks: [
        {
          type: 'text', min: 10, title: 'Razlike srpskog i hrvatskog · из курса',
          note: 'В курсе здесь видео «Сербохорватский язык? Сейчас объясню!» (Энциклоп), посмотрите дома. Пять пунктов из курса:',
          tables: [
            { caption: 'Pet razlika', head: ['razlika', 'srpski', 'hrvatski'], rows: [
              ['1. pismo', 'ćirilica zvanično, latinica dozvoljena', 'samo latinica'],
              ['2. v — h', ['muva, kuvati', 'muva, kuvati'], ['muha, kuhati', 'muha, kuhati']],
              ['3. ekavica — ijekavica', ['vera, lepo, mleko', 'vera, lepo, mleko'], ['vjera, lijepo, mlijeko', 'vjera, lijepo, mlijeko']],
              ['4. futur', ['radiću, ja ću raditi', 'radiću, ja ću raditi'], ['radit ću', 'radit ću']],
              ['5. leksika', ['fudbal, kajsija, paradajz, manastir, muzika', 'fudbal, kajsija, paradajz, manastir, muzika'], ['nogomet, marelica, rajčica, samostan, glazba', 'nogomet, marelica, rajčica, samostan, glazba']]
            ] }
          ],
          html: '<p>Još primera: [[hleb — kruh]], [[voz — vlak]], [[hiljada — tisuća]], [[nedelja — tjedan]], [[pozorište — kazalište]], [[ostrvo — otok]]. Gandbol je i tamo i tamo [[rukomet]], od reči [[glas]] je hrvatska [[glazba]].</p>'
        },
        {
          type: 'sort', min: 8, title: 'Srpski ili hrvatski? · рассортируйте',
          groups: ['srpski', 'hrvatski'],
          items: [
            { w: 'muva', g: 'srpski' }, { w: 'muha', g: 'hrvatski' }, { w: 'kuvati', g: 'srpski' }, { w: 'kuhati', g: 'hrvatski' },
            { w: 'vera', g: 'srpski' }, { w: 'vjera', g: 'hrvatski' }, { w: 'lepo', g: 'srpski' }, { w: 'lijepo', g: 'hrvatski' },
            { w: 'radiću', g: 'srpski' }, { w: 'radit ću', g: 'hrvatski' }, { w: 'fudbal', g: 'srpski' }, { w: 'nogomet', g: 'hrvatski' },
            { w: 'kajsija', g: 'srpski' }, { w: 'marelica', g: 'hrvatski' }, { w: 'paradajz', g: 'srpski' }, { w: 'rajčica', g: 'hrvatski' },
            { w: 'manastir', g: 'srpski' }, { w: 'samostan', g: 'hrvatski' }, { w: 'muzika', g: 'srpski' }, { w: 'glazba', g: 'hrvatski' },
            { w: 'hleb', g: 'srpski' }, { w: 'kruh', g: 'hrvatski' }, { w: 'voz', g: 'srpski' }, { w: 'vlak', g: 'hrvatski' }
          ]
        },
        {
          type: 'text', min: 5, title: 'Oliver Dragojević — „Galeb i ja“ · песня',
          note: 'В курсе задание послушать песню и найти особенности хорватского. Текст песни здесь не приводим, слушайте дома (YouTube, 1:49). Далматинский говор: икавица.',
          img: 'img/l29_galeb.png',
          html: '<p>Что искать в песне: [[lipo]] вместо lepo и [[vrime]] вместо vreme (икавица), инфинитив без -i: [[ležat]], [[gledat]], [[letit]]; [[nimat]] = nemati, [[ča]] = šta (чакавский говор), [[straja]] = straha.</p>' +
            '<p>Слова: [[galeb]] — чайка, [[pučina]] — открытое море, [[oluja]] / [[bura]] — буря, [[nevera]] — шторм на море, [[dlan]] — ладонь. Шоколад «Galeb» из Суботицы получил имя от той же чайки.</p>'
        },
        {
          type: 'text', min: 7, title: 'Srpski VS crnogorski · текст вместо видео',
          note: 'В курсе видео «Brazilac sa Balkana — Tijago vredno uči crnogorski» (linkTV), посмотрите дома. На занятии: прослушать, прочитать.',
          html: '<p>[[Crnogorski jezik je veoma blizak srpskom. Glavna razlika je ijekavica: Crnogorci kažu lijepo, mlijeko, vrijeme. Crnogorski ima i dva dodatna slova, ś i ź, na primer śutra umesto sutra.]]</p>' +
            '<p>[[U razgovoru Crnogorci vole da skraćuju reči i kažu đe umesto gde, ovđe umesto ovde, nijesam umesto nisam. Padeže ne koriste uvek pravilno, ali to rade i mnogi Srbi.]]</p>' +
            '<p>[[Rakiju u Crnoj Gori mere na kilo: kilo rakije je litar rakije. Postoji stereotip da Crnogorci ne vole da rade i da vole da leže, ali to je samo šala. Brazilac Tijago u emisiji uči crnogorski i smeje se sa domaćinima.]]</p>'
        },
        {
          type: 'tf', min: 6, title: 'Rešite test · утверждения из курса',
          note: 'Те же утверждения, что в курсе; проверяем по тексту.',
          items: [
            { q: 'Crnogorci uvek pravilno koriste padeže.', a: false, why: 'Ne uvek, kao ni mnogi Srbi.' },
            { q: 'Postoji stereotip da Crnogorci ne vole da rade.', a: true },
            { q: 'Crnogorci vole da skraćuju reči.', a: true },
            { q: 'Litar rakije = kilo rakije.', a: true },
            { q: 'Crnogorski ima dodatna slova.', a: true, why: 'ś i ź' },
            { q: 'Crnogorci govore ekavicu.', a: false, why: 'Govore ijekavicu: lijepo, mlijeko.' },
            { q: 'Voditelj je došao iz Brazila.', a: true }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Prevedite na srpski · с хорватского и черногорского',
          note: 'Впишите сербский эквивалент.',
          items: [
            'hr: kruh — sr: {hleb}', 'hr: vlak — sr: {voz}', 'hr: kuhati — sr: {kuvati}', 'hr: lijepo — sr: {lepo}', 'hr: radit ću — sr: {radiću}',
            'cg: đe si? — sr: {gde} si?', 'cg: nijesam — sr: {nisam}', 'cg: śutra — sr: {sutra}', 'cg: kilo rakije — sr: {litar} rakije'
          ]
        },
        {
          type: 'speak', min: 12, title: 'Razgovor · какой вариант вам ближе',
          record: true,
          items: [
            { q: 'Koji jezik vam je lakši za razumevanje: srpski, hrvatski ili crnogorski? Zašto?', sample: 'Srpski mi je lakši, jer učim ekavicu i ćirilicu. Hrvatski razumem, ali reči kao glazba ne znam.' },
            { q: 'Koja hrvatska reč vam je najčudnija?', sample: 'Najčudnija mi je rajčica, jer na srpskom kažemo paradajz kao na ruskom.' },
            { q: 'Da li biste voleli da posetite Crnu Goru ili Hrvatsku? Šta biste tamo radili?', sample: 'Voleo bih da posetim Crnu Goru. Plivao bih u moru i probao bih kilo rakije, šalim se!' },
            { q: 'Kako biste objasnili strancu razliku između srpskog i hrvatskog u tri rečenice?', sample: 'Srbi pišu i ćirilicom, Hrvati samo latinicom. Srbi kažu lepo, Hrvati lijepo. Neke reči su potpuno različite, na primer hleb i kruh.' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'ćirilica + latinica — samo latinica; muva — muha; vera — vjera; radiću — radit ću',
            'fudbal — nogomet, kajsija — marelica, paradajz — rajčica, manastir — samostan, muzika — glazba',
            'hleb — kruh, voz — vlak, hiljada — tisuća; ikavica: lipo, vrime',
            'crnogorski: ijekavica, ś i ź, đe, nijesam, kilo rakije'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: сербский и хорватский', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: различия', est: 6,
          items: [
            { a: ['U hrvatskom je samo latinica.'] }, { a: ['Srbi kažu muva, a Hrvati muha.'] }, { a: ['Radiću sutra ceo dan.'] },
            { a: ['Fudbal je na hrvatskom nogomet.'] }, { a: ['Crnogorski ima dva dodatna slova.'] }, { a: ['Kilo rakije je litar rakije.'] }
          ]
        },
        {
          type: 'gap', bank: true, title: 'Srpska reč · выберите сербский вариант', est: 6,
          items: [
            'Hrvati kažu kruh, a Srbi {hleb}.', 'Hrvati kažu vlak, a Srbi {voz}.', 'Hrvati kažu glazba, a Srbi {muzika}.', 'Hrvati kažu tjedan, a Srbi {nedelja}.',
            'Hrvati kažu kazalište, a Srbi {pozorište}.', 'Hrvati kažu rajčica, a Srbi {paradajz}.', 'Hrvati kažu tisuća, a Srbi {hiljada}.', 'Hrvati kažu otok, a Srbi {ostrvo}.'
          ]
        },
        {
          type: 'write', title: 'Pismo prijatelju o jezicima · текст + запись', est: 10, key: 'hw-29.2-jezici', record: true,
          note: 'Напишите другу, который хочет учить «сербохорватский», 8 предложений: чем отличаются языки, какой учить и почему. Запишите чтение вслух.',
          sample: 'Ćao Ivane! Pitaš me da li da učiš srpski ili hrvatski. To su veoma slični jezici, ali ima razlika. Srbi pišu i ćirilicom, a Hrvati samo latinicom. Srbi kažu lepo i mleko, a Hrvati lijepo i mlijeko. Neke reči su potpuno različite: hleb i kruh, voz i vlak. Crnogorski je još bliži srpskom, samo sa ijekavicom. Ja bih ti preporučio srpski, jer ćeš razumeti sve tri zemlje. Jedva čekam da pričamo srpski zajedno!'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '29.3',
      title: 'Dodatni materijali · ponavljanje',
      ru: 'Письмо Марко, аккузатив и локатив, порядок слов, потенциал',
      goals: [
        'вставить формы глаголов и существительных в письмо Марко',
        'различать аккузатив движения и локатив места в тексте',
        'собрать шесть предложений и дополнить текст потенциалом'
      ],
      blocks: [
        {
          type: 'text', min: 3, title: 'Frazeološki rečnik · заметка',
          html: '<p>В курсе здесь PDF «Сербохорватско-русский фразеологический словарь» И. О. Трофимкиной (149 страниц). Он не сохранился в скриншотах; найдите его дома по названию. Дальше четыре упражнения курса.</p>'
        },
        {
          type: 'gap', min: 12, title: 'Pismo · glagole i imenice stavite u pravilan oblik',
          note: 'Упражнение из курса. Марко пишет Стефану. В скобках начальная форма. Порядок «sam + причастие» и «причастие + sam» принимается оба.',
          items: [
            'Ćao Stefane, pišem ti iz {Beograda} <i>(Beograd)</i>. Upravo sedim u jednom malom {kafiću} <i>(kafić)</i> u centru {grada} <i>(grad)</i> i pijem kafu. Vreme je divno!',
            'Prošle nedelje {sam bio|bio sam} <i>(ja, biti)</i> u {Novom Sadu} <i>(Novi Sad)</i>. {Posetio sam|Sam posetio} <i>(ja, posetiti)</i> Petrovaradinsku tvrđavu i {šetao sam|šetao} <i>(ja, šetati)</i> pored {Dunava} <i>(Dunav)</i>.',
            'Grad mi se mnogo {svideo} <i>(svideti)</i>. Tamo {sam upoznao|upoznao sam} <i>(ja, upoznati)</i> jednu finu devojku iz {Subotice} <i>(Subotica)</i>. Razgovarali smo o {muzici} <i>(muzika)</i> i {filmovima} <i>(filmovi)</i>.',
            'Sada {razmišljam} <i>(ja, razmišljati)</i> o sledećoj destinaciji. Šta ti misliš? Gde {bih mogao} <i>(ja, moći, potencijal)</i> da idem? Daj mi neki predlog! Puno pozdrava, Marko'
          ]
        },
        {
          type: 'gap', bank: true, min: 12, title: 'Akuzativ za kretanje, lokativ za mesto · выберите форму',
          note: 'Упражнение из курса: куда — аккузатив, где — локатив.',
          items: [
            'Svakog jutra idem u {kancelariju}. U {kancelariji} provedem osam sati. Posle posla idem na {trening}. Na {treningu} uvek sretnem prijatelje.',
            'Za vikend putujemo na {more}. Bićemo na {moru} dva dana. Kad stignemo, prvo ćemo otići u {hotel} da ostavimo stvari. U {hotelu} uvek je toplo i prijatno.',
            'Posle toga, planiram da idem na {reku} da pecam. Kažu da u {reci} ima mnogo ribe. Uveče ćemo svi sedeti u {bašti} i gledati zvezde.',
            'Jedva čekam da pobegnem u {prirodu}. U {prirodi} se najbolje odmaram.'
          ]
        },
        {
          type: 'order', min: 8, title: 'Sastavite rečenice od datih reči · порядок слов',
          note: 'Упражнение из курса. Помните: se, si, su, će, bih, mu стоят на втором месте.',
          items: [
            'Zašto se ti smeješ?', 'Oni će nam pomoći sutra.', 'Da li si mu rekla istinu?', 'Ja bih rado putovala na more.', 'Oni su se venčali prošle godine.', 'Jutros sam se probudio rano.'
          ]
        },
        {
          type: 'gap', bank: true, min: 10, title: 'Idealan odmor · dopunite potencijalom',
          note: 'Упражнение из курса: выберите форму потенциала из списка.',
          items: [
            'Razmišljam o idealnom odmoru. Kad {bih mogao} da biram, {putovao bih} u Španiju. Tamo {bih iznajmio} mali apartman blizu plaže. Svaki dan {bih plivao} u moru i {sunčao bih se}.',
            'Uveče mi {bismo šetali} pored obale i {jeli bismo} u lokalnim restoranima. Šta {bi ti rekao} na taj plan? Da li {bi išao} sa mnom? Mislim da {bismo se proveli} lepo. To {bi bio} savršen odmor.'
          ]
        },
        {
          type: 'speak', min: 9, title: 'Moj idealan odmor · расскажите в потенциале',
          note: 'По образцу текста: куда бы поехали, что бы делали каждый день, кого бы позвали. Партнёр отвечает: Išao bih! / Ne bih išla, jer…',
          record: true,
          items: [
            { q: 'Kad bi mogao da biraš, gde bi putovao?', sample: 'Kad bih mogla da biram, putovala bih u Grčku, na ostrvo.' },
            { q: 'Šta bi radio svaki dan?', sample: 'Svaki dan bih plivao u moru, sunčao bih se i čitao bih knjige.' },
            { q: 'Da li bi tvoj partner išao sa tobom? Šta bi rekao?', sample: 'Išla bih! Ali bih radije bila u planinama nego na plaži.' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'iz Beograda, u kafiću, u centru grada, pored Dunava, o muzici i filmovima',
            'idem u kancelariju — u kancelariji sam; na more — na moru; u prirodu — u prirodi',
            'Zašto se ti smeješ? Oni će nam pomoći. Jutros sam se probudio rano.',
            'Kad bih mogao da biram, putovao bih… To bi bio savršen odmor.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: отдых и повторение', est: 7, set: 'C' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: письмо и отдых', est: 6,
          items: [
            { a: ['Pišem ti iz Beograda.'] }, { a: ['Prošle nedelje sam bio u Novom Sadu.'] }, { a: ['Šetao sam pored Dunava.'] },
            { a: ['Svakog jutra idem u kancelariju.'] }, { a: ['Jedva čekam da pobegnem u prirodu.'] }, { a: ['To bi bio savršen odmor.'] }
          ]
        },
        {
          type: 'conj', title: 'Тренажёр потенциала', est: 6,
          tense: 'pot', verbs: ['setati', 'upoznati', 'iznajmiti', 'plivati', 'moci', 'putovati'], rounds: 10
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 6,
          items: [
            { q: 'Я иду в офис. Я в офисе.', a: ['Idem u kancelariju. U kancelariji sam.', 'Idem u kancelariju. Ja sam u kancelariji.'] },
            { q: 'Мы едем на море. Мы на море.', a: ['Idemo na more. Na moru smo.', 'Putujemo na more. Na moru smo.'] },
            { q: 'Почему ты смеёшься?', a: ['Zašto se smeješ?', 'Zašto se ti smeješ?'] },
            { q: 'Они поженились в прошлом году.', a: ['Oni su se venčali prošle godine.', 'Venčali su se prošle godine.'] },
            { q: 'Ты сказала ему правду?', a: ['Da li si mu rekla istinu?', 'Jesi li mu rekla istinu?'] },
            { q: 'Я бы снял квартиру у пляжа.', a: ['Iznajmio bih apartman blizu plaže.', 'Ja bih iznajmio apartman blizu plaže.', 'Iznajmio bih stan blizu plaže.'] }
          ]
        },
        {
          type: 'write', title: 'Odgovor Marku · ответ на письмо + запись', est: 10, key: 'hw-29.3-pismo', record: true,
          note: 'Ответьте Марко от имени Стефана: 8 предложений, предложите ему следующий город и объясните, что бы он там делал (потенциал). Запишите чтение вслух.',
          sample: 'Ćao Marko! Drago mi je da ti se svideo Novi Sad. Ja bih ti predložio Niš. Tamo bi video tvrđavu i Ćele-kulu. Mogao bi da probaš najbolji burek u Srbiji. Uveče bi šetao pored Nišave i slušao muziku u kafani. Iz Niša bi lako otišao na Suvu planinu. Javi mi kad krećeš, možda bih išao sa tobom! Pozdrav, Stefan'
        }
      ]
    }
  ]
});
