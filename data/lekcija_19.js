// Lekcija 19 - Kućni pribor. Two 60-minute sessions: reflexive verbs, then appliances + furniture + prepositions of place.
COURSE.register({
  n: 19,
  title: 'Kućni pribor',
  ru: 'Возвратные глаголы; бытовая техника, мебель, предлоги места',

  vocab: [
    { id: 'smoriti-se', sr: 'smoriti se, ja se smorim', ru: 'утомиться', set: 'A' },
    { id: 'otkud', sr: 'otkud — Otkud je ova buka?', ru: 'откуда — Откуда этот шум?', set: 'A' },
    { id: 'buka', sr: 'buka', ru: 'шум', set: 'A' },
    { id: 'uzivanje', sr: 'uživanje — pravo uživanje', ru: 'наслаждение — настоящее наслаждение', set: 'A' },
    { id: 'cistiti', sr: 'čistiti kuću, ja čistim', ru: 'убирать дом', set: 'A' },
    { id: 'povratni', sr: 'povratni glagol — se', ru: 'возвратный глагол — частица se', set: 'A' },
    { id: 'kupati', sr: 'kupati psa — kupati se u moru', ru: 'купать собаку — купаться в море', set: 'A' },
    { id: 'interesovati', sr: 'interesovati (se), hvaliti (se), spremati (se)', ru: 'интересовать(ся), хвалить(ся), готовить(ся)', set: 'A' },
    { id: 'vracati', sr: 'vraćati (se), vratiti (se), češljati (se)', ru: 'возвращать(ся), вернуть(ся), причёсывать(ся)', set: 'A' },
    { id: 'secati-se', sr: 'sećati se, setiti se', ru: 'помнить, вспомнить', set: 'A' },
    { id: 'bojati-se', sr: 'bojati se, ja se bojim', ru: 'бояться', set: 'A' },
    { id: 'nadati-se19', sr: 'nadati se, boriti se', ru: 'надеяться, бороться', set: 'A' },
    { id: 'druziti-se19', sr: 'družiti se, šaliti se, smejati se', ru: 'общаться, шутить, смеяться', set: 'A' },
    { id: 'svidjati-se', sr: 'sviđati se, dopasti se', ru: 'нравиться, понравиться', set: 'A' },
    { id: 'setati19', sr: 'šetati (se), javiti (se), žuriti (se)', ru: 'гулять, позвонить, спешить', set: 'A' },
    { id: 'brinuti', sr: 'brinuti (se), zahvaljivati (se)', ru: 'заботиться, волноваться; благодарить', set: 'A' },
    { id: 'udati-se19', sr: 'Udaje se iz ljubavi.', ru: 'Она выходит замуж по любви.', set: 'A' },
    { id: 'pocinje', sr: 'Koncert počinje uveče u 8.', ru: 'Концерт начинается вечером в 8.', set: 'A' },
    { id: 'ozbiljan', sr: 'ozbiljan čovek — uvek se šali', ru: 'серьёзный человек — всегда шутит', set: 'A' },
    { id: 'odmarati-se19', sr: 'odmarati se na obali mora', ru: 'отдыхать на берегу моря', set: 'A' },
    { id: 'voleo-bih', sr: 'Voleo bih da ostanem, ali moram da idem.', ru: 'Я бы хотел остаться, но должен идти.', set: 'A' },
    { id: 'plasiti-se', sr: 'plašiti se mraka', ru: 'бояться темноты', set: 'A' },
    { id: 'zagrejati-se', sr: 'zagrejati se ispred vatre', ru: 'согреться у огня', set: 'A' },
    { id: 'grliti-se', sr: 'grliti se', ru: 'обниматься', set: 'A' },
    { id: 'izvinjavati-se', sr: 'izvinjavati se za svoje postupke', ru: 'извиняться за свои поступки', set: 'A' },
    { id: 'plivati', sr: 'plivati — ne zna da pliva', ru: 'плавать — не умеет плавать', set: 'A' },
    { id: 'oblaciti-se19', sr: 'oblačiti se u najlepšu haljinu', ru: 'одеваться в самое красивое платье', set: 'A' },

    { id: 'uredjaj', sr: 'kućni uređaj — električni uređaji u domaćinstvu', ru: 'бытовой прибор — электроприборы в хозяйстве', set: 'B' },
    { id: 'ves-masina', sr: 'veš mašina', ru: 'стиральная машина', set: 'B' },
    { id: 'masina-za-sudove', sr: 'mašina za pranje sudova', ru: 'посудомоечная машина', set: 'B' },
    { id: 'pegla', sr: 'pegla', ru: 'утюг', set: 'B' },
    { id: 'mikser', sr: 'mikser', ru: 'миксер', set: 'B' },
    { id: 'sporet', sr: 'šporet', ru: 'плита', set: 'B' },
    { id: 'frizider19', sr: 'frižider — zamrzivač', ru: 'холодильник — морозильник', set: 'B' },
    { id: 'fen19', sr: 'fen', ru: 'фен', set: 'B' },
    { id: 'usisivac', sr: 'usisivač', ru: 'пылесос', set: 'B' },
    { id: 'sokovnik', sr: 'sokovnik', ru: 'соковыжималка', set: 'B' },
    { id: 'grejalica', sr: 'grejalica', ru: 'обогреватель', set: 'B' },
    { id: 'bojler', sr: 'bojler', ru: 'бойлер', set: 'B' },
    { id: 'klima', sr: 'klima uređaj', ru: 'кондиционер', set: 'B' },
    { id: 'sto19', sr: 'sto, stolica, lampa, radijator', ru: 'стол, стул, лампа, батарея', set: 'B' },
    { id: 'ormar', sr: 'ormar, komoda, ogledalo, tepih', ru: 'шкаф, комод, зеркало, ковёр', set: 'B' },
    { id: 'jastuk', sr: 'jastuk, ćebe, čaršav, krevet', ru: 'подушка, одеяло, простыня, кровать', set: 'B' },
    { id: 'kauc', sr: 'kauč, fotelja, slike, vešalica, stepenište', ru: 'диван, кресло, картины, вешалка, лестница', set: 'B' },
    { id: 'peskir', sr: 'peškir, tuš, lavabo, kada, slavina', ru: 'полотенце, душ, раковина, ванна, кран', set: 'B' },
    { id: 'sundjer', sr: 'sunđer, sapun, četkica za zube, pasta za zube, češalj, VC šolja', ru: 'губка, мыло, зубная щётка, паста, расчёска, унитаз', set: 'B' },
    { id: 'na-ispod', sr: 'na (+ dativ / lokativ), ispod, iznad, iza (+ genitiv), u', ru: 'на, под, над, за, в', set: 'B' },
    { id: 'ispred', sr: 'ispred, između (+ genitiv), levo od, desno od', ru: 'перед, между, слева от, справа от', set: 'B' },
    { id: 'zaboravljam', sr: 'Uvek sve zaboravim i izgubim!', ru: 'Я всегда всё забываю и теряю!', set: 'B' },
    { id: 'shvatiti', sr: 'shvatio sam da nisam kupio', ru: 'я понял, что не купил', set: 'B' },
    { id: 'ostavljati', sr: 'ostavljam šoljice za kafu', ru: 'оставляю чашки от кофе', set: 'B' },
    { id: 'iskljuciti', sr: 'isključiti peglu', ru: 'выключить утюг', set: 'B' }
  ],

  verbs: {
    kupati: { inf: 'kupati se', ru: 'купаться', pos: { ja: 'se kupam', ti: 'se kupaš', on: 'se kupa', mi: 'se kupamo', vi: 'se kupate', oni: 'se kupaju' }, neg: { ja: 'se ne kupam', ti: 'se ne kupaš', on: 'se ne kupa', mi: 'se ne kupamo', vi: 'se ne kupate', oni: 'se ne kupaju' }, l: { m: 'se kupao', f: 'se kupala', n: 'se kupalo', mpl: 'se kupali', fpl: 'se kupale' } },
    bojati: { inf: 'bojati se', ru: 'бояться', pos: { ja: 'se bojim', ti: 'se bojiš', on: 'se boji', mi: 'se bojimo', vi: 'se bojite', oni: 'se boje' }, neg: { ja: 'se ne bojim', ti: 'se ne bojiš', on: 'se ne boji', mi: 'se ne bojimo', vi: 'se ne bojite', oni: 'se ne boje' }, l: { m: 'se bojao', f: 'se bojala', n: 'se bojalo', mpl: 'se bojali', fpl: 'se bojale' } },
    smejati: { inf: 'smejati se', ru: 'смеяться', pos: { ja: 'se smejem', ti: 'se smeješ', on: 'se smeje', mi: 'se smejemo', vi: 'se smejete', oni: 'se smeju' }, neg: { ja: 'se ne smejem', ti: 'se ne smeješ', on: 'se ne smeje', mi: 'se ne smejemo', vi: 'se ne smejete', oni: 'se ne smeju' }, l: { m: 'se smejao', f: 'se smejala', n: 'se smejalo', mpl: 'se smejali', fpl: 'se smejale' } },
    secati: { inf: 'sećati se', ru: 'помнить', pos: { ja: 'se sećam', ti: 'se sećaš', on: 'se seća', mi: 'se sećamo', vi: 'se sećate', oni: 'se sećaju' }, neg: { ja: 'se ne sećam', ti: 'se ne sećaš', on: 'se ne seća', mi: 'se ne sećamo', vi: 'se ne sećate', oni: 'se ne sećaju' }, l: { m: 'se sećao', f: 'se sećala', n: 'se sećalo', mpl: 'se sećali', fpl: 'se sećale' } },
    druziti: { inf: 'družiti se', ru: 'общаться', pos: { ja: 'se družim', ti: 'se družiš', on: 'se druži', mi: 'se družimo', vi: 'se družite', oni: 'se druže' }, neg: { ja: 'se ne družim', ti: 'se ne družiš', on: 'se ne druži', mi: 'se ne družimo', vi: 'se ne družite', oni: 'se ne druže' }, l: { m: 'se družio', f: 'se družila', n: 'se družilo', mpl: 'se družili', fpl: 'se družile' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '19.1',
      title: 'Povratni glagoli',
      ru: 'Возвратные глаголы: три группы, место частицы se',
      goals: [
        'различать три группы глаголов с se',
        'поставить se на второе место в предложении',
        'заметить, где сербская возвратность не совпадает с русской'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Kućni ljubimac?',
          note: 'Андрич устал от уборки, Тесла показывает робота, который умеет убирать дом. Прочитайте кириллицу сами.',
          img: 'img/l19_strip.png',
          lines: [
            { who: 'Ivo', sr: 'Smorio sam se…', ru: 'Я утомился…' },
            { who: 'Ivo', sr: 'Molim? Otkud je ova buka?', ru: 'Простите? Откуда этот шум?' },
            { who: 'Nikola', sr: 'Gospodine Andriću, ništa ne znaš o pravom uživanju!', ru: 'Господин Андрич, ты ничего не знаешь о настоящем наслаждении!' },
            { who: 'Nikola', sr: 'Vidi! Najbolji robot na svetu, jer zna da čisti kuću!', ru: 'Смотри! Лучший робот в мире, потому что умеет убирать дом!' }
          ]
        },
        {
          type: 'text', min: 10, title: 'Povratni glagoli · возвратные глаголы',
          html:
            '<p>Возвратные глаголы — с частицей <b>se</b>, равной русскому «-ся»: [[umivati se]]. Три группы:</p>' +
            '<ol><li><b>Могут быть с se и без se</b> (значение меняется, как в русском): [[Kupam psa u kadi.]] — купаю собаку; [[Kupam se u moru.]] — купаюсь. Так же: [[interesovati (se)]], [[hvaliti (se)]], [[spremati (se)]], [[pripremati (se)]], [[vraćati (se)]], [[vratiti (se)]], [[češljati (se)]].</li>' +
            '<li><b>Только с se</b>, причём русский глагол часто невозвратный: [[sećati se]] — помнить, [[setiti se]] — вспомнить, [[bojati se]] — бояться, [[nadati se]] — надеяться, [[boriti se]] — бороться, [[družiti se]] — общаться, [[šaliti se]] — шутить, [[smejati se]] — смеяться, [[sviđati se]] — нравиться, [[dopasti se]] — понравиться.</li>' +
            '<li><b>Se факультативно</b>, значение не меняется: [[šetati (se)]] — гулять, [[javiti (se)]] — позвонить, [[žuriti (se)]] — спешить, [[brinuti (se)]] — заботиться, волноваться, [[zahvaljivati (se)]] — благодарить.</li></ol>' +
            '<p><b>Место se:</b> частица стремится на второе место в предложении: [[Ja se umivam.]] [[Umivam se.]] [[Ujutru se umivam.]]</p>'
        },
        {
          type: 'sort', min: 6, title: 'Tri grupe · распределите глаголы',
          groups: ['sa se i bez se', 'samo sa se', 'se je fakultativno'],
          items: [
            { w: 'kupati (se)', g: 'sa se i bez se' }, { w: 'češljati (se)', g: 'sa se i bez se' }, { w: 'vratiti (se)', g: 'sa se i bez se' }, { w: 'hvaliti (se)', g: 'sa se i bez se' },
            { w: 'bojati se', g: 'samo sa se' }, { w: 'smejati se', g: 'samo sa se' }, { w: 'sećati se', g: 'samo sa se' }, { w: 'nadati se', g: 'samo sa se' }, { w: 'sviđati se', g: 'samo sa se' },
            { w: 'šetati (se)', g: 'se je fakultativno' }, { w: 'javiti (se)', g: 'se je fakultativno' }, { w: 'žuriti (se)', g: 'se je fakultativno' }, { w: 'brinuti (se)', g: 'se je fakultativno' }
          ]
        },
        {
          type: 'speak', min: 6, title: 'Prevedite na ruski · где возвратность не совпадает',
          note: 'Упражнение из курса: прочитайте и переведите, заметьте различия.',
          items: [
            { q: 'Udaje se iz ljubavi.', sample: 'Она выходит замуж по любви. (в русском невозвратно)' },
            { q: 'Koncert počinje uveče u 8.', sample: 'Концерт начинается в 8 вечера. (в сербском без se!)' },
            { q: 'On nije ozbiljan čovek i uvek se šali!', sample: 'Он несерьёзный человек и всегда шутит. (в сербском с se)' },
            { q: 'Često se odmaramo na obali mora.', sample: 'Мы часто отдыхаем на берегу моря. (в сербском с se)' },
            { q: 'Voleo bih da ostanem, ali moram da idem.', sample: 'Я бы хотел остаться, но должен идти. (без se)' }
          ]
        },
        {
          type: 'order', min: 10, title: 'Stavite reči u pravilnom redosledu · порядок слов',
          note: 'Упражнение из курса. Следите за местом se.',
          items: [
            'Kalemegdan se nalazi u centru Beograda.', 'Ne sviđa mi se ova dosadna knjiga.', 'Mnogi ljudi se plaše mraka.', 'Putnici mogu da se zagreju ispred vatre.',
            'Zašto ne voliš da se grliš?', 'Da li se Nikola izvinjava za svoje postupke?', 'Olga se ne kupa jer ne zna da pliva.', 'Milica želi da se oblači u najlepšu haljinu.'
          ]
        },
        {
          type: 'gap', min: 6, title: 'Sa se ili bez se? · впишите глагол',
          items: [
            'Mama {kupa} (kupati) bebu, a ja {se kupam} (kupati se) u moru.', 'Ona {češlja} (češljati) ćerku, zatim {se češlja} (češljati se) sama.',
            'Ne {se bojim|bojim se} (bojati se) pasa. — Ja {se bojim} (bojati se).', 'Uvek {se sećam} (sećati se) tvog rođendana.',
            'Koncert {počinje} (počinjati) u osam.', 'Deca {se smeju} (smejati se) i {se druže} (družiti se) u parku.'
          ]
        },
        {
          type: 'conj', min: 5, title: 'Trening · возвратные глаголы вслух',
          note: 'Форма со se: ja se kupam, ti se bojiš.',
          verbs: ['kupati', 'bojati', 'smejati', 'secati', 'druziti'], rounds: 8
        },
        {
          type: 'speak', min: 10, title: 'O sebi · разговор с возвратными глаголами',
          note: 'Ответьте друг другу; в каждом ответе должен быть возвратный глагол. Партнёр следит за местом se.',
          items: [
            { q: 'Čega se bojiš? Čega si se bojao / bojala kao dete?', sample: 'Bojim se pauka. Kao dete sam se bojala mraka.' },
            { q: 'Sa kim se družiš? Kada se smeješ?', sample: 'Družim se sa kolegama. Smejem se kad gledam komedije.' },
            { q: 'Da li se sećaš prvog dana u Srbiji?', sample: 'Da, sećam se, bilo je vruće i nisam ništa razumela.' },
            { q: 'Šta ti se sviđa u Beogradu, a šta ti se ne sviđa?', sample: 'Sviđa mi se Kalemegdan. Ne sviđa mi se gužva u busu.' },
            { q: 'Da li se žuriš ujutru? Da li se odmaraš vikendom?', sample: 'Uvek se žurim ujutru. Vikendom se odmaram i šetam se.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'kupati psa — kupati se; sećati se, bojati se, sviđati se — только с se',
            'šetati (se), javiti (se), žuriti (se) — se по желанию',
            'Ja se umivam. Umivam se. Ujutru se umivam. — se на втором месте',
            'Koncert počinje. — без se!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: возвратные глаголы', est: 9, set: 'A' },
        { type: 'conj', title: 'Тренажёр: возвратные глаголы', est: 5, verbs: ['kupati', 'bojati', 'smejati', 'secati', 'druziti'], rounds: 12 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Smorio sam se. Otkud je ova buka?'] }, { a: ['Kupam psa u kadi, a kupam se u moru.'] }, { a: ['Mnogi ljudi se plaše mraka.'] },
            { a: ['Ne sviđa mi se ova dosadna knjiga.'] }, { a: ['Olga se ne kupa jer ne zna da pliva.'] }, { a: ['On uvek se šali.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я купаюсь в море каждое утро.', a: ['Kupam se u moru svako jutro.', 'Svako jutro se kupam u moru.'] },
            { q: 'Дети боятся темноты.', a: ['Deca se boje mraka.', 'Deca se plaše mraka.'] },
            { q: 'Мне нравится эта книга.', a: ['Sviđa mi se ova knjiga.'] },
            { q: 'Он всегда шутит и смеётся.', a: ['On se uvek šali i smeje.', 'Uvek se šali i smeje.'] },
            { q: 'Концерт начинается в восемь.', a: ['Koncert počinje u osam.', 'Koncert počinje u 8.'] },
            { q: 'Я помню твой день рождения.', a: ['Sećam se tvog rođendana.', 'Ja se sećam tvog rođendana.'] },
            { q: 'Мы отдыхаем на берегу моря.', a: ['Odmaramo se na obali mora.', 'Mi se odmaramo na obali mora.'] },
            { q: 'Почему ты не любишь обниматься?', a: ['Zašto ne voliš da se grliš?'] }
          ]
        },
        {
          type: 'write', title: 'Moj dan sa povratnim glagolima', est: 7, key: 'hw-19.1-dan',
          note: '8 предложений о своём дне, в каждом — возвратный глагол (budim se, umivam se, žurim se, družim se, smejem se, odmaram se, bojim se, sećam se…).',
          sample: 'Ujutru se budim u sedam i umivam se. Uvek se žurim na posao. Na poslu se družim sa kolegama i mnogo se smejemo. Popodne se šetam parkom. Uveče se odmaram i sećam se lepih putovanja. Ne bojim se ničega, osim pauka. Vikendom se kupam u reci.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '19.2',
      title: 'Kućni uređaji i pribor',
      ru: 'Бытовая техника, мебель и ванная, предлоги места',
      goals: [
        'назвать 12 бытовых приборов и 25 предметов в доме',
        'сказать, где что лежит: na stolu, ispod stola, iza ormara, između stolica',
        'описать комнату по картинке'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст. Партнёр считает возвратные глаголы.',
          items: [{ q: 'Ujutru se budim…' }]
        },
        {
          type: 'text', min: 6, title: 'Kućni uređaji · бытовая техника',
          note: 'В курсе — видео Shtreber «Električni uređaji u domaćinstvu» (YouTube), посмотрите дома. Названия по картинкам ниже.',
          img: 'img/l19_uredjaji.png',
          tables: [
            { caption: 'Uređaji (po redu slika)', head: ['', '', '', ''], rows: [['mašina za pranje sudova — посудомойка', 'pegla — утюг', 'mikser — миксер', 'šporet — плита'], ['frižider — холодильник', 'veš mašina — стиральная машина', 'fen — фен', 'usisivač — пылесос'], ['sokovnik — соковыжималка', 'grejalica — обогреватель', 'zamrzivač — морозильник', 'bojler — бойлер'], ['klima uređaj — кондиционер', '', '', '']] }
          ]
        },
        {
          type: 'gap', bank: true, min: 4, title: 'Potpišite nazive uređaja · подпишите приборы',
          note: 'В оригинале — картинки, здесь описание.',
          items: [
            'Bela mašina sa vratima, pere tanjire — {mašina za pranje sudova}.', 'Plavi, sa ručkom, za košulje — {pegla}.', 'Ručni, sa dve metlice, za tortu — {mikser}.', 'Sa četiri ringle i rernom — {šporet}.',
            'Veliki, hladan, sa dva dela — {frižider}.', 'Okrugla vrata, pere odeću — {veš mašina}.', 'Suši kosu — {fen}.', 'Crveni, sa crevom, čisti tepih — {usisivač}.'
          ]
        },
        {
          type: 'match', min: 4, title: 'Spojite parove · прибор и описание',
          pairs: [
            ['sokovnik', 'uređaj za ekstrakciju soka iz voća i povrća'], ['grejalica', 'uređaj za grejanje i održavanje temperature u sobi'], ['zamrzivač', 'hladnjak za duboko zamrzavanje namirnica'],
            ['bojler', 'zatvorena posuda u kojoj se voda zagrijava pod pritiskom'], ['klima uređaj', 'reguliše temperaturu i vlagu']
          ]
        },
        {
          type: 'text', min: 6, title: 'Kuća · предметы в доме',
          note: 'Постер из курса: ванная, спальня, гостиная, прихожая. Найдите каждое слово на картинке и назовите комнату.',
          img: 'img/l19_kuca.png',
          tables: [
            { caption: 'Kupatilo', head: ['', '', ''], rows: [['kada — ванна', 'tuš — душ', 'lavabo — раковина'], ['slavina — кран', 'peškir — полотенце', 'sapun — мыло'], ['sunđer — губка', 'četkica za zube', 'pasta za zube'], ['češalj — расчёска', 'VC šolja — унитаз', 'toalet papir']] },
            { caption: 'Spavaća i dnevna soba', head: ['', '', ''], rows: [['krevet — кровать', 'jastuk — подушка', 'ćebe — одеяло'], ['čaršav — простыня', 'ormar — шкаф', 'komoda — комод'], ['ogledalo — зеркало', 'lampa — лампа', 'tepih — ковёр'], ['kauč — диван', 'fotelja — кресло', 'sto, stolica'], ['radijator — батарея', 'slike — картины', 'vešalica, stepenište']] }
          ]
        },
        {
          type: 'match', min: 4, title: 'Povežite reči sa prevodom',
          pairs: [
            ['tepih', 'ковёр'], ['kauč', 'диван'], ['peškir', 'полотенце'], ['lavabo', 'раковина'], ['ćebe', 'одеяло'],
            ['jastuk', 'подушка'], ['slavina', 'кран'], ['kada', 'ванна'], ['stolica', 'стул'], ['ogledalo', 'зеркало']
          ]
        },
        {
          type: 'text', min: 6, title: 'Predlozi · предлоги места',
          html:
            '<ul><li><b>na</b> + локатив: [[Lampa je na stolu.]] [[Mačka je na stolici.]] [[Šešir visi na ogledalu.]]</li>' +
            '<li><b>ispod</b> + генитив: [[Lampa je ispod stola.]] [[Šešir je ispod ogledala.]]</li>' +
            '<li><b>iznad</b> + генитив: [[Lampa je iznad stola.]] [[Slika je iznad kreveta.]]</li>' +
            '<li><b>iza</b> + генитив: [[Mačka je iza stolice.]] [[Šešir je iza ogledala.]]</li>' +
            '<li><b>ispred</b>, <b>između</b> + генитив: [[Mačka je ispred fotelje.]] [[Televizor je između fotelja.]]</li>' +
            '<li><b>levo od</b>, <b>desno od</b> + генитив: [[levo od ogledala]], [[desno od lampe]]</li>' +
            '<li><b>u</b> + локатив: [[Papir je u stolu.]] [[Papir je u komodi.]] [[Vidim sebe u ogledalu.]]</li></ul>' +
            '<p>В курсе — видео Shtreber «Ispred, iza, ispod, iznad, gore, dole, levo, desno, između», посмотрите дома.</p>'
        },
        {
          type: 'gap', min: 6, title: 'Prevedite fraze · переведите с предлогами',
          note: 'Упражнение из курса.',
          items: [
            'над кроватью — {iznad kreveta}', 'слева от зеркала — {levo od ogledala}', 'между стульями — {između stolica}', 'за диваном — {iza kauča}',
            'перед шкафом — {ispred ormara}', 'справа от лампы — {desno od lampe}', 'под столом — {ispod stola}'
          ]
        },
        {
          type: 'speak', min: 8, title: 'Pronađite predmet na slici · опишите комнату',
          note: 'Картинка из курса: гостиная с креслами, телевизором, медведем и котом. Ответьте на шесть вопросов, потом опишите свою комнату: šta je gde.',
          img: 'img/l19_soba.png',
          items: [
            { q: 'Gde je televizor?', sample: 'Televizor je između fotelja.' },
            { q: 'Gde je medved (igračka)?', sample: 'Medved je na televizoru.' },
            { q: 'Gde sedi pas?', sample: 'Pas sedi u fotelji.' },
            { q: 'Gde je telefon?', sample: 'Telefon je ispod lampe.' },
            { q: 'Gde je mačka?', sample: 'Mačka je ispred fotelje.' },
            { q: 'Koliko slika visi na zidu?', sample: 'Dve slike vise na zidu.' }
          ]
        },
        {
          type: 'gap', min: 4, title: 'Stavite imenice u padežni oblik · падежи',
          note: 'Упражнение из курса: текст о рассеянном человеке.',
          listen: true,
          items: [
            'Uvek sve zaboravim i izgubim! Hteo sam juče da operem zube, ali sam shvatio da nisam kupio {pastu za zube} (pasta za zube).',
            'Jednom sam našao {sapun} (sapun) u {komodi} (komoda) i {slavinu} (slavina) u {frižideru} (frižider).',
            'Često ostavljam šoljice za kafu ispred {televizora} (televizor) ili na {stepenicama} (stepenice).',
            'Kad odem na posao, bojim se da nisam isključio {peglu} (pegla) ili {veš mašinu} (veš mašina).'
          ]
        },
        {
          type: 'speak', min: 4, title: 'Moja soba · опишите свою комнату',
          note: 'Каждый описывает свою комнату (8+ предложений с предлогами места), партнёр рисует план по описанию.',
          items: [
            { q: 'Šta je u tvojoj sobi? Gde je krevet, sto, ormar?', sample: 'Krevet je levo od prozora. Sto je ispred prozora, a ormar je iza vrata.' },
            { q: 'Šta je na zidu? Šta je ispod kreveta?', sample: 'Iznad kreveta visi slika. Ispod kreveta su kutije.' },
            { q: 'Koje uređaje imaš? Gde su?', sample: 'Imam klimu iznad vrata i grejalicu pored stola. Fen je u komodi.' }
          ]
        },
        {
          type: 'summary', min: 4, title: 'Rezime · итог занятия',
          points: [
            'veš mašina, frižider, šporet, usisivač, pegla, fen, klima, bojler',
            'krevet, jastuk, ćebe, ormar, komoda, kauč, fotelja, tepih, ogledalo',
            'kada, tuš, lavabo, slavina, peškir, sapun, četkica za zube',
            'na stolu, u komodi, ispod / iznad / iza / ispred / između + genitiv'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: техника, мебель, ванная', est: 10, set: 'B' },
        {
          type: 'qa', mode: 'transform', title: 'Predlozi · переведите фразу', est: 6,
          items: [
            { q: 'на столе', a: ['na stolu'] }, { q: 'под кроватью', a: ['ispod kreveta'] }, { q: 'над зеркалом', a: ['iznad ogledala'] }, { q: 'за шкафом', a: ['iza ormara'] },
            { q: 'перед телевизором', a: ['ispred televizora'] }, { q: 'между креслами', a: ['između fotelja'] }, { q: 'в комоде', a: ['u komodi'] }, { q: 'слева от окна', a: ['levo od prozora'] },
            { q: 'справа от двери', a: ['desno od vrata'] }, { q: 'на ковре', a: ['na tepihu'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Lampa je na stolu, a mačka je ispod stola.'] }, { a: ['Televizor je između fotelja.'] }, { a: ['Šešir visi na ogledalu.'] },
            { a: ['Uvek sve zaboravim i izgubim!'] }, { a: ['Bojim se da nisam isključio peglu.'] }, { a: ['Vidim sebe u ogledalu.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Стиральная машина в ванной.', a: ['Veš mašina je u kupatilu.'] },
            { q: 'Пылесос за дверью.', a: ['Usisivač je iza vrata.'] },
            { q: 'Кошка спит на диване.', a: ['Mačka spava na kauču.'] },
            { q: 'Я нашёл мыло в холодильнике!', a: ['Našao sam sapun u frižideru!', 'Našla sam sapun u frižideru!'] },
            { q: 'Полотенце справа от раковины.', a: ['Peškir je desno od lavaboa.'] },
            { q: 'Картина висит над кроватью.', a: ['Slika visi iznad kreveta.'] },
            { q: 'Я забыл выключить утюг.', a: ['Zaboravio sam da isključim peglu.', 'Zaboravila sam da isključim peglu.'] }
          ]
        },
        {
          type: 'write', title: 'Moja soba · описание комнаты + запись', est: 9, key: 'hw-19.2-soba', record: true,
          note: '10 предложений о своей комнате или квартире с предлогами места и названиями мебели и техники. Запишите чтение вслух.',
          sample: 'Moja soba je mala, ali lepa. Krevet je levo od prozora, a iznad kreveta visi slika. Ispred prozora je sto sa lampom. Na stolu je laptop, a ispod stola je korpa. Ormar je iza vrata, desno od ormara je ogledalo. Na podu je veliki tepih. Klima je iznad vrata. U komodi čuvam fen i peglu. Između stola i kreveta je mala fotelja, tamo spava mačka.'
        }
      ]
    }
  ]
});
