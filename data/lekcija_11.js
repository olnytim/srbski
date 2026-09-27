// Lekcija 11 - Moja kuća. Two 60-minute sessions: house & flat vocabulary, then genitive.
COURSE.register({
  n: 11,
  title: 'Moja kuća',
  ru: 'Дом и квартира, этажи, родительный падеж (genitiv)',

  vocab: [
    { id: 'kuca11', sr: 'kuća — zgrada', ru: 'дом (где живёте) — здание', set: 'A' },
    { id: 'spomenik', sr: 'spomenik', ru: 'памятник', set: 'A' },
    { id: 'sto11', sr: 'sto — stolovi', ru: 'стол — столы', set: 'A' },
    { id: 'pokazati', sr: 'pokazati — Želim da vam pokažem…', ru: 'показать — Хочу вам показать…', set: 'A' },
    { id: 'nagrada', sr: 'Nobelova nagrada', ru: 'Нобелевская премия', set: 'A' },
    { id: 'stan11', sr: 'stan — četvorosoban stan', ru: 'квартира — четырёхкомнатная квартира', set: 'A' },
    { id: 'vikendica', sr: 'vikendica', ru: 'дача', set: 'A' },
    { id: 'visespratnica', sr: 'višespratnica', ru: 'многоэтажка', set: 'A' },
    { id: 'stanovati11', sr: 'stanovati, ja stanujem', ru: 'жить, проживать', set: 'A' },
    { id: 'sprat', sr: 'sprat — na 5. spratu', ru: 'этаж — на 5-м этаже', set: 'A' },
    { id: 'prizemlje', sr: 'prizemlje', ru: 'первый (наземный) этаж', set: 'A' },
    { id: 'prvi-sprat', sr: 'prvi sprat', ru: 'второй этаж (по-русски)', set: 'A' },
    { id: 'dvoriste', sr: 'dvorište', ru: 'двор', set: 'A' },
    { id: 'parking', sr: 'parking', ru: 'парковка', set: 'A' },
    { id: 'garaza', sr: 'garaža', ru: 'гараж', set: 'A' },
    { id: 'interfon', sr: 'interfon', ru: 'домофон', set: 'A' },
    { id: 'krov', sr: 'krov', ru: 'крыша', set: 'A' },
    { id: 'prozor11', sr: 'prozor', ru: 'окно', set: 'A' },
    { id: 'vrata', sr: 'vrata (mn. sr. r.) — ulazna vrata', ru: 'дверь — входная дверь', set: 'A' },
    { id: 'soba', sr: 'soba, prostorija', ru: 'комната, помещение', set: 'A' },
    { id: 'spavaca-soba', sr: 'spavaća soba', ru: 'спальня', set: 'A' },
    { id: 'dnevna-soba', sr: 'dnevna soba', ru: 'гостиная', set: 'A' },
    { id: 'decija-soba', sr: 'dečija soba', ru: 'детская', set: 'A' },
    { id: 'radna-soba', sr: 'radna soba', ru: 'кабинет', set: 'A' },
    { id: 'kuhinja', sr: 'kuhinja', ru: 'кухня', set: 'A' },
    { id: 'trpezarija', sr: 'trpezarija', ru: 'столовая', set: 'A' },
    { id: 'ostava', sr: 'ostava', ru: 'кладовка', set: 'A' },
    { id: 'predsoblje', sr: 'predsoblje', ru: 'прихожая', set: 'A' },
    { id: 'hodnik', sr: 'hodnik', ru: 'коридор', set: 'A' },
    { id: 'balkon', sr: 'balkon', ru: 'балкон', set: 'A' },
    { id: 'kupatilo', sr: 'kupatilo', ru: 'ванная', set: 'A' },
    { id: 'toalet', sr: 'toalet, WC', ru: 'туалет', set: 'A' },
    { id: 'basta', sr: 'bašta', ru: 'сад, огород', set: 'A' },
    { id: 'u-blizini', sr: 'u blizini — u blizini kuće', ru: 'поблизости — рядом с домом', set: 'A' },
    { id: 'autobuska', sr: 'autobuska stanica', ru: 'автобусная остановка', set: 'A' },
    { id: 'odluciti', sr: 'odlučiti — odlučila je da kupi', ru: 'решить — решила купить', set: 'A' },
    { id: 'van-grada', sr: 'van grada', ru: 'за городом', set: 'A' },
    { id: 'cuvati', sr: 'čuvati — čuvaju bicikle', ru: 'хранить, беречь — хранят велосипеды', set: 'A' },
    { id: 'lopta', sr: 'lopta — fudbalske lopte', ru: 'мяч — футбольные мячи', set: 'A' },
    { id: 'dosta', sr: 'dosta prostorija', ru: 'достаточно помещений', set: 'A' },

    { id: 'genitiv', sr: 'genitiv — koga? čega?', ru: 'родительный падеж — кого? чего?', set: 'B' },
    { id: 'iz-od', sr: 'iz, od, sa, kod, pored, blizu (+ genitiv)', ru: 'из, от, с, у, рядом, недалеко', set: 'B' },
    { id: 'sok-od', sr: 'sok od jabuke', ru: 'яблочный сок', set: 'B' },
    { id: 'pala-sa', sr: 'Igračka je pala sa police.', ru: 'Игрушка упала с полки.', set: 'B' },
    { id: 'kod-roditelja', sr: 'Mi smo kod roditelja.', ru: 'Мы у родителей.', set: 'B' },
    { id: 'pored-kuce', sr: 'pored moje kuće', ru: 'рядом с моим домом', set: 'B' },
    { id: 'blizu-stana', sr: 'blizu našeg stana', ru: 'недалеко от нашей квартиры', set: 'B' },
    { id: 'nekoliko', sr: 'nekoliko (+ gen. mn.) — nekoliko studenata', ru: 'несколько — несколько студентов', set: 'B' },
    { id: 'lekar-umoran', sr: 'umoran lekar — umornog lekara', ru: 'уставший врач (gen.)', set: 'B' },
    { id: 'starci', sr: 'starac — starci — staraca', ru: 'старик — старики (gen. mn.)', set: 'B' },
    { id: 'predavanje', sr: 'predavanje — dosadna predavanja', ru: 'лекция — скучные лекции', set: 'B' },
    { id: 'zubar', sr: 'zubar — kod zubara', ru: 'стоматолог — у стоматолога', set: 'B' },
    { id: 'let', sr: 'let — imam let iz Moskve', ru: 'рейс — у меня рейс из Москвы', set: 'B' },
    { id: 'sredstva', sr: 'sredstva — nemamo sredstava', ru: 'средства — у нас нет средств', set: 'B' },
    { id: 'suvenir', sr: 'suvenir — iz južnih zemalja', ru: 'сувенир — из южных стран', set: 'B' },
    { id: 'crkva', sr: 'crkva — nekoliko novih crkava', ru: 'церковь — несколько новых церквей', set: 'B' },
    { id: 'uhvatiti', sr: 'uhvatiti — uhvatila je policija', ru: 'поймать — поймала полиция', set: 'B' },
    { id: 'alkohol', sr: 'alkoholno piće', ru: 'алкогольный напиток', set: 'B' },
    { id: 'majki', sr: 'majka — majki; lampa — lampi; radnja — radnji', ru: 'ж. р. с gen. mn. на -i', set: 'B' },
    { id: 'zvezda', sr: 'zvezda — zvezda; mesto — mesta', ru: 'без беглого a в gen. mn.', set: 'B' }
  ],

  verbs: {
    stanovati: { inf: 'stanovati', ru: 'проживать', pos: { ja: 'stanujem', ti: 'stanuješ', on: 'stanuje', mi: 'stanujemo', vi: 'stanujete', oni: 'stanuju' }, neg: { ja: 'ne stanujem', ti: 'ne stanuješ', on: 'ne stanuje', mi: 'ne stanujemo', vi: 'ne stanujete', oni: 'ne stanuju' }, l: { m: 'stanovao', f: 'stanovala', n: 'stanovalo', mpl: 'stanovali', fpl: 'stanovale' } },
    odluciti: { inf: 'odlučiti', ru: 'решить', l: { m: 'odlučio', f: 'odlučila', n: 'odlučilo', mpl: 'odlučili', fpl: 'odlučile' } },
    kupiti: { inf: 'kupiti', ru: 'купить', l: { m: 'kupio', f: 'kupila', n: 'kupilo', mpl: 'kupili', fpl: 'kupile' } },
    pokazati: { inf: 'pokazati', ru: 'показать', l: { m: 'pokazao', f: 'pokazala', n: 'pokazalo', mpl: 'pokazali', fpl: 'pokazale' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '11.1',
      title: 'Moja kuća',
      ru: 'Дом и квартира: части дома, комнаты, этажи',
      goals: [
        'назвать части дома и комнаты квартиры',
        'правильно считать этажи: prizemlje, prvi sprat',
        'рассказать о месте, где живёте, по шести вопросам курса'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Ivo Andrić poziva u goste',
          note: 'Иво Андрич показывает свой дом, памятник, письменный стол и Нобелевскую премию. Прочитайте кириллицу сами.',
          img: 'img/l11_strip.png',
          lines: [
            { who: 'Ivo', sr: 'Ovo je moja kuća.', ru: 'Это мой дом.' },
            { who: 'Ivo', sr: 'Gledajte, moj spomenik.', ru: 'Смотрите, мой памятник.' },
            { who: 'Ivo', sr: 'Ovo je moj sto za kojim radim.', ru: 'Это мой стол, за которым я работаю.' },
            { who: 'Ivo', sr: 'Želim da vam pokažem i Nobelovu nagradu.', ru: 'Хочу показать вам и Нобелевскую премию.' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Kuća i stan · дом и квартира',
          img: 'img/l11_kuca.png',
          html:
            '<p><b>Kuća</b> — дом, где вы живёте; здание вообще — [[zgrada]]. [[vrata]] — «дверь» стоит во множественном числе среднего рода (как русские «очки», «часы»): [[Vrata su otvorena.]]</p>' +
            '<p><b>Этажи.</b> Наш первый этаж — [[prizemlje]], а [[prvi sprat]] — это наш второй. От русского номера этажа отнимайте единицу: русский 8-й = [[sedmi sprat]].</p>',
          tables: [
            { caption: 'Kuća', head: ['', '', ''], rows: [['prozor — окно', 'vrata — дверь', 'krov — крыша'], ['garaža — гараж', 'prizemlje — 1-й этаж', 'prvi sprat — 2-й этаж'], ['dvorište — двор', 'bašta — сад', 'parking — парковка']] },
            { caption: 'Stan', head: ['', '', ''], rows: [['predsoblje — прихожая', 'hodnik — коридор', 'soba — комната'], ['spavaća soba — спальня', 'dnevna soba — гостиная', 'dečija soba — детская'], ['radna soba — кабинет', 'kuhinja — кухня', 'trpezarija — столовая'], ['kupatilo — ванная', 'toalet — туалет', 'ostava — кладовка'], ['balkon — балкон', 'interfon — домофон', '']] }
          ]
        },
        {
          type: 'match', min: 6, title: 'Povežite reč i prevod · слово и перевод',
          pairs: [
            ['ostava', 'кладовка'], ['prizemlje', '1 этаж'], ['hodnik', 'коридор'], ['sprat', 'этаж'], ['kupatilo', 'ванная комната'],
            ['predsoblje', 'прихожая'], ['dnevna soba', 'гостиная'], ['radna soba', 'кабинет'], ['interfon', 'домофон'], ['trpezarija', 'столовая']
          ]
        },
        {
          type: 'mc', min: 5, title: 'Koji sprat? · считаем этажи',
          note: 'Русский этаж → сербский.',
          items: [
            { q: 'Живу на 1-м этаже (по-русски) → Stanujem u ….', options: ['prizemlju', 'prvom spratu', 'drugom spratu'], a: 'prizemlju' },
            { q: 'Живу на 2-м этаже → Stanujem na ….', options: ['prizemlju', 'prvom spratu', 'drugom spratu'], a: 'prvom spratu' },
            { q: 'Живу на 5-м этаже → Stanujem na ….', options: ['petom spratu', 'četvrtom spratu', 'šestom spratu'], a: 'četvrtom spratu' },
            { q: 'Живу на 8-м этаже → Stanujem na ….', options: ['osmom spratu', 'sedmom spratu', 'devetom spratu'], a: 'sedmom spratu' },
            { q: 'Stan je na 5. spratu → по-русски это … этаж.', options: ['4-й', '5-й', '6-й'], a: '6-й' }
          ]
        },
        {
          type: 'text', min: 6, title: 'Porodična kuća Pavlović · читаем текст',
          note: 'Прослушайте, потом прочитайте вслух по абзацу.',
          html:
            '<p>[[Porodica Pavlović stanuje u četvorosobnom stanu u višespratnici u centru Beograda.]]</p>' +
            '<p>[[Stan je velik i lep i nalazi se na 5. spratu. Stan ima dnevnu sobu, roditeljsku spavaću sobu, dečiju sobu blizanaca, sobu Ljubice, kuhinju i dva kupatila. Porodica koristi dnevnu sobu kao trpezariju. U predsoblju su interfon i ulazna vrata. U blizini kuće je autobuska stanica i parking. Blizanci čuvaju bicikle na balkonu, a fudbalske lopte — u ostavi.]]</p>' +
            '<p>[[Stan ima dosta prostorija, ali prošle godine porodica je odlučila da kupi vikendicu — kuću van grada sa dvorištem i baštom.]]</p>'
        },
        {
          type: 'tf', min: 4, title: 'Istina ili laž? · по тексту',
          items: [
            { q: 'Porodica Pavlović ima i stan, i kuću.', a: true, why: 'Stan u Beogradu i vikendicu van grada.' }, { q: 'Porodica stanuje u trosobnom stanu.', a: false, why: 'U četvorosobnom.' },
            { q: 'U blizini kuće nema autobuske stanice.', a: false, why: 'U blizini je autobuska stanica i parking.' }, { q: 'Stan ima trpezariju i balkon.', a: false, why: 'Trpezarije nema — dnevna soba se koristi kao trpezarija. Balkon ima.' },
            { q: 'Stan ima dva kupatila i tri spavaće sobe.', a: true }, { q: 'Kupili su vikendicu prošle godine.', a: true }
          ]
        },
        {
          type: 'gap', min: 5, title: 'Stan Pavlovića · впишите помещения',
          items: [
            'Porodica koristi dnevnu sobu kao {trpezariju}.', 'U {predsoblju} su interfon i ulazna vrata.', 'Blizanci čuvaju bicikle na {balkonu}.',
            'Fudbalske lopte su u {ostavi}.', 'Stan je na 5. {spratu}.', 'Vikendica ima {dvorište} i baštu.'
          ]
        },
        {
          type: 'speak', min: 16, title: 'Gde stanujem? · расскажите о своём жилье',
          note: 'Шесть вопросов из курса. Каждый отвечает на все, партнёр задаёт два дополнительных. Потом «экскурсия»: проведите партнёра по своей квартире: Ovo je predsoblje, ovde je…',
          items: [
            { q: 'Da li imate stan ili kuću?', sample: 'Imam stan. Nemam kuću, ali roditelji imaju vikendicu.' },
            { q: 'Kakva je zgrada u kojoj stanujete?', sample: 'Zgrada je nova višespratnica, ima deset spratova.' },
            { q: 'Da li imate dvorište? Parking? Interfon?', sample: 'Imamo parking i interfon, ali nemamo dvorište.' },
            { q: 'Koliko ima spratova?', sample: 'Zgrada ima osam spratova.' },
            { q: 'Na kojem spratu stanujete?', sample: 'Stanujem na trećem spratu.' },
            { q: 'Koliko soba imate u vašem stanu?', sample: 'Imamo dve sobe: spavaću i dnevnu, plus kuhinju i kupatilo.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'kuća — zgrada; stan; vikendica; višespratnica',
            'prizemlje, prvi sprat, drugi sprat — минус один этаж',
            'predsoblje, dnevna soba, spavaća soba, kuhinja, kupatilo, ostava',
            'Stanujem na trećem spratu. Vrata su otvorena.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: дом и квартира', est: 9, set: 'A' },
        {
          type: 'letters', title: 'Složite reč · соберите помещение', est: 4,
          items: [
            { clue: 'soba gde spavamo', word: 'spavaća' }, { clue: 'soba gde kuvamo', word: 'kuhinja' }, { clue: 'soba gde se kupamo', word: 'kupatilo' },
            { clue: 'prostorija na ulazu', word: 'predsoblje' }, { clue: 'kuća van grada', word: 'vikendica' }, { clue: 'prostor iznad kuće', word: 'krov' }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Ovo je moj sto za kojim radim.'] }, { a: ['Porodica stanuje u četvorosobnom stanu.'] }, { a: ['Stan se nalazi na petom spratu.'] },
            { a: ['U predsoblju su interfon i ulazna vrata.'] }, { a: ['U blizini kuće je autobuska stanica.'] }, { a: ['Kupili su vikendicu sa dvorištem i baštom.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Это мой дом.', a: ['Ovo je moja kuća.', 'To je moja kuća.'] },
            { q: 'Мы живём в трёхкомнатной квартире.', a: ['Stanujemo u trosobnom stanu.', 'Mi stanujemo u trosobnom stanu.', 'Živimo u trosobnom stanu.'] },
            { q: 'Квартира на четвёртом этаже (по-сербски).', a: ['Stan je na četvrtom spratu.'] },
            { q: 'У нас есть парковка и домофон.', a: ['Imamo parking i interfon.', 'Mi imamo parking i interfon.'] },
            { q: 'В квартире две ванные.', a: ['Stan ima dva kupatila.', 'U stanu su dva kupatila.'] },
            { q: 'Дети хранят велосипеды на балконе.', a: ['Deca čuvaju bicikle na balkonu.'] },
            { q: 'Рядом с домом автобусная остановка.', a: ['U blizini kuće je autobuska stanica.', 'Pored kuće je autobuska stanica.'] },
            { q: 'Они решили купить дачу.', a: ['Odlučili su da kupe vikendicu.', 'Oni su odlučili da kupe vikendicu.'] }
          ]
        },
        {
          type: 'write', title: 'Gde stanujem? · текст о жилье + запись', est: 9, key: 'hw-11.1-stan', record: true,
          note: 'Задание из курса: письменно ответьте на шесть вопросов занятия, 8–10 предложений по образцу текста о семье Павлович. Запишите чтение вслух.',
          sample: 'Stanujem u dvosobnom stanu u novoj višespratnici na Novom Beogradu. Zgrada ima dvanaest spratova, a moj stan je na petom spratu. Imamo parking, interfon i lift, ali nemamo dvorište. Stan ima predsoblje, dnevnu sobu, spavaću sobu, kuhinju i kupatilo. Dnevnu sobu koristimo kao radnu sobu. Imamo veliki balkon, tamo pijemo kafu. U blizini zgrade je autobuska stanica i pijaca.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '11.2',
      title: 'Genitiv',
      ru: 'Родительный падеж: предлоги, окончания, множественное число',
      goals: [
        'образовать генитив ед. и мн. числа с прилагательным',
        'использовать предлоги iz, od, sa, kod, pored, blizu',
        'сказать «несколько студентов», «нет средств» — генитив множественного'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст о жилье. Партнёр задаёт: Na kojem spratu? Koliko soba?',
          items: [{ q: 'Stanujem u…' }]
        },
        {
          type: 'text', min: 10, title: 'Genitiv · родительный падеж',
          html:
            '<p><b>Genitiv</b> отвечает на вопросы [[koga?]] [[čega?]] Самый частый падеж после предлогов:</p>' +
            '<ul><li><b>iz</b> (из): [[Ja dolazim iz Rusije.]]</li><li><b>od</b> (от, сделанный из): [[Ovo je sok od jabuke.]]</li><li><b>sa</b> (с): [[Igračka je pala sa police.]]</li>' +
            '<li><b>kod</b> (к, у): [[kod lekara]], [[kod prijatelja]], [[Mi smo sada kod roditelja.]]</li><li><b>pored</b> (рядом): [[Prodavnica je pored moje kuće.]]</li><li><b>blizu</b> (недалеко): [[Restoran je blizu našeg stana.]]</li></ul>' +
            '<p>Окончания: м. и ср. р. <b>-a</b>, ж. р. <b>-e</b>; мн. ч. <b>-a</b> (м., ср., ж.). Прилагательные: <b>-og</b> (м., ср.), <b>-e</b> (ж.), <b>-ih</b> (мн.).</p>',
          tables: [
            { caption: 'Genitiv — koga? čega?', head: ['rod', 'jednina', 'množina'], rows: [['M', 'velikog grada', 'velikih gradova'], ['Ž', 'lepe žene', 'lepih žena'], ['S', 'plavog mora', 'plavih mora']] }
          ],
          after:
            '<p><b>Множественное число — три тонкости:</b></p>' +
            '<ol><li>Если перед окончанием группа согласных, появляется беглое <b>a</b>: [[student — studenti — studenata]], [[sestra — sestre — sestara]], [[pismo — pisma — pisama]].</li>' +
            '<li>Беглое a не появляется у: [[mesto]], [[pozorište]], [[gnezdo]], [[zvezda]], [[vrsta]], [[bašta]] — [[mesta]], [[zvezda]], [[bašta]].</li>' +
            '<li>Некоторые ж. р. в gen. mn. получают <b>-i</b>: [[majka — majki]], [[molba — molbi]], [[radnja — radnji]], [[lopta — lopti]], [[lampa — lampi]], [[šansa — šansi]].</li></ol>'
        },
        {
          type: 'gap', min: 6, title: 'Stavite fraze u genitiv · словосочетания',
          items: [
            'malo selo — {malog sela}', 'velika kuća — {velike kuće}', 'umoran lekar — {umornog lekara}',
            'crvene lopte — {crvenih lopti}', 'pametni starci — {pametnih staraca}', 'dosadna predavanja — {dosadnih predavanja}'
          ]
        },
        {
          type: 'gap', min: 7, title: 'Upotrebite oblik genitiva · в предложении',
          note: 'В скобках — исходное словосочетание.',
          items: [
            'Moj prijatelj je iz {malog grada} (mali grad).', 'Turisti čekaju pored {sivih autobusa} (sivi autobusi).', 'Viktor stanuje blizu {lepe stanice} (lepa stanica) metroa Kropotkinskaja.',
            'On ima nekoliko {svetlih kupatila} (svetla kupatila) na svojoj vikendici.', 'U blizini kuće podignuto je nekoliko {novih crkava} (nove crkve).', 'U Subotici nema objekata koji su viši od 5 {standardnih spratova} (standardni spratovi).'
          ]
        },
        {
          type: 'gap', min: 8, title: 'Stavite imenice u genitiv · существительные',
          items: [
            'Na mapi Crna Gora je blizu {Albanije} (Albanija) i daleko od {Rusije} (Rusija).', 'Mama ide kod {zubara} (zubar) u četvrtak.', 'Nikada ranije nisam pio rakiju od {kajsija} (kajsija, mn.).',
            'Nekoliko {studenata} (studenti) je uhvatila policija.', 'Imam let iz {Moskve} (Moskva), a ne iz {Sankt Peterburga} (Sankt Peterburg).', 'Nemamo dodatnih {sredstava} (sredstva) za kupovinu kuće!',
            'Televizor je pored {prozora} (prozor).', 'Baka je donela suvenire iz južnih {zemalja} (zemlje).', 'Nikola više ne pije ništa od alkoholnih {pića} (piće, mn.).'
          ]
        },
        {
          type: 'mc', min: 6, title: 'Genitiv množine · беглое a или нет',
          items: [
            { q: 'pet … (student)', options: ['studenta', 'studenata', 'studenti'], a: 'studenata' }, { q: 'nekoliko … (sestra)', options: ['sestra', 'sestara', 'sestri'], a: 'sestara' },
            { q: 'mnogo … (pismo)', options: ['pisma', 'pisama', 'pismi'], a: 'pisama' }, { q: 'mnogo … (mesto)', options: ['mesta', 'mesata', 'mesti'], a: 'mesta' },
            { q: 'pet … (zvezda)', options: ['zvezda', 'zvezada', 'zvezdi'], a: 'zvezda' }, { q: 'nekoliko … (majka)', options: ['majka', 'majaka', 'majki'], a: 'majki' },
            { q: 'deset … (lopta)', options: ['lopta', 'lopata', 'lopti'], a: 'lopti' }, { q: 'nekoliko … (bašta)', options: ['bašta', 'bašata', 'bašti'], a: 'bašta' }
          ]
        },
        {
          type: 'speak', min: 14, title: 'Gde je…? Odakle…? · разговор с генитивом',
          note: 'Опишите, что находится рядом с вашим домом (pored, blizu, u blizini) и откуда ваши вещи (iz, od). Партнёр задаёт вопросы: Šta je blizu tvoje kuće? Odakle je ovaj sok?',
          items: [
            { q: 'Šta je pored tvoje kuće? Šta je blizu tvog stana?', sample: 'Pored moje kuće je pekara, blizu stana je park i autobuska stanica.' },
            { q: 'Odakle si? Odakle su tvoji roditelji?', sample: 'Ja sam iz Moskve, roditelji su iz malog grada blizu Kazanja.' },
            { q: 'Kod koga ideš vikendom?', sample: 'Vikendom idem kod prijatelja ili kod roditelja.' },
            { q: 'Od čega je ovaj sok? Od čega je rakija?', sample: 'Sok je od jabuke, rakija je od šljive ili od kajsije.' },
            { q: 'Koliko soba, prozora, spratova ima tvoja zgrada?', sample: 'Zgrada ima deset spratova i mnogo prozora. Stan ima pet prostorija.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'genitiv: velikog grada, lepe žene, plavog mora; mn.: -a: gradova, žena, mora',
            'iz Rusije, od jabuke, sa police, kod lekara, pored kuće, blizu stana',
            'student — studenata, sestra — sestara; mesto — mesta; majka — majki',
            'nekoliko studenata, nemamo sredstava'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: генитив и слова упражнений', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'transform', title: 'Genitiv · «pored …»', est: 6,
          items: [
            { q: 'pored … (moja kuća)', a: ['pored moje kuće', 'moje kuće'] }, { q: 'iz … (mali grad)', a: ['iz malog grada', 'malog grada'] }, { q: 'kod … (umoran lekar)', a: ['kod umornog lekara', 'umornog lekara'] },
            { q: 'blizu … (plavo more)', a: ['blizu plavog mora', 'plavog mora'] }, { q: 'od … (jabuka)', a: ['od jabuke', 'jabuke'] }, { q: 'sa … (polica)', a: ['sa police', 'police'] },
            { q: 'nekoliko … (studenti)', a: ['nekoliko studenata', 'studenata'] }, { q: 'nekoliko … (sestre)', a: ['nekoliko sestara', 'sestara'] }, { q: 'mnogo … (lopte)', a: ['mnogo lopti', 'lopti'] }, { q: 'pet … (veliki gradovi)', a: ['pet velikih gradova', 'velikih gradova'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Ja dolazim iz Rusije.'] }, { a: ['Ovo je sok od jabuke.'] }, { a: ['Mi smo sada kod roditelja.'] },
            { a: ['Prodavnica je pored moje kuće.'] }, { a: ['Mama ide kod zubara u četvrtak.'] }, { a: ['Nemamo dodatnih sredstava za kupovinu kuće!'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Мой друг из маленького города.', a: ['Moj prijatelj je iz malog grada.'] },
            { q: 'Ресторан недалеко от нашей квартиры.', a: ['Restoran je blizu našeg stana.'] },
            { q: 'Игрушка упала с полки.', a: ['Igračka je pala sa police.'] },
            { q: 'Мама идёт к стоматологу.', a: ['Mama ide kod zubara.'] },
            { q: 'Телевизор рядом с окном.', a: ['Televizor je pored prozora.'] },
            { q: 'У меня рейс из Москвы.', a: ['Imam let iz Moskve.', 'Ja imam let iz Moskve.'] },
            { q: 'Полиция поймала несколько студентов.', a: ['Policija je uhvatila nekoliko studenata.', 'Nekoliko studenata je uhvatila policija.'] },
            { q: 'Бабушка привезла сувениры из южных стран.', a: ['Baka je donela suvenire iz južnih zemalja.'] }
          ]
        },
        {
          type: 'write', title: 'Moj kraj · что рядом с домом', est: 7, key: 'hw-11.2-kraj',
          note: '8 предложений с генитивом: что находится рядом с вашим домом (pored, blizu, u blizini), откуда вы и ваши вещи (iz, od), у кого бываете (kod).',
          sample: 'Pored moje zgrade je velika pekara. Blizu stana je park i stanica metroa. U blizini kuće ima nekoliko kafića i prodavnica. Ja sam iz Moskve, a moj muž je iz malog grada blizu Kazanja. Vikendom idemo kod roditelja. Kod bake uvek pijemo sok od jabuke. Daleko od centra ima mnogo novih zgrada.'
        }
      ]
    }
  ]
});
