// Lekcija 10 - Ponavljanje. Review of lessons 6-9 in two 60-minute sessions; the timed test is rebuilt from those lessons.
COURSE.register({
  n: 10,
  title: 'Ponavljanje',
  ru: 'Повторение уроков 6–9: еда, внешность, традиции, падежи, перфект',

  vocab: [
    { id: 'primetiti', sr: 'primetiti — primetio sam tebe', ru: 'заметить — я тебя заметил', set: 'A' },
    { id: 'setati-se10', sr: 'šetati se — šetao sam se u parku', ru: 'гулять — я гулял в парке', set: 'A' },
    { id: 'u-redu', sr: 'u redu sam', ru: 'у меня всё в порядке', set: 'A' },
    { id: 'udati-se10', sr: 'udala sam se — udala se', ru: 'я вышла замуж — вышла замуж', set: 'A' },
    { id: 'preseliti-se10', sr: 'preselila sam se u Kruševac', ru: 'я переехала в Крушевац', set: 'A' },
    { id: 'kad-je-mala', sr: 'kad je bila mala', ru: 'когда была маленькой', set: 'A' },
    { id: 'jel', sr: 'Jel? — Je li?', ru: 'Да? Правда?', set: 'A' },
    { id: 'nadam-se', sr: 'Nadam se da ti se sviđa!', ru: 'Надеюсь, тебе нравится!', set: 'A' },
    { id: 'ostajem', sr: 'ostajem tri meseca', ru: 'остаюсь на три месяца', set: 'A' },
    { id: 'vec', sr: 'već — Da li si već bio tamo?', ru: 'уже — Ты уже был там?', set: 'A' },
    { id: 'jos-nisam', sr: 'Ne, još nisam.', ru: 'Нет, ещё нет.', set: 'A' },
    { id: 'onda-srecno', sr: 'Onda srećno!', ru: 'Тогда удачи!', set: 'A' },
    { id: 'svez', sr: 'svež, sveža — svež hleb', ru: 'свежий — свежий хлеб', set: 'A' },
    { id: 'kovrdzav', sr: 'kovrdžava kosa', ru: 'кудрявые волосы', set: 'A' },
    { id: 'sed', sr: 'seda kosa', ru: 'седые волосы', set: 'A' },
    { id: 'krempita', sr: 'krempita, šlag', ru: 'кремпита (пирожное с кремом), взбитые сливки', set: 'A' },
    { id: 'rezervisati', sr: 'rezervisati — rezervisali smo stočić', ru: 'забронировать — мы забронировали столик', set: 'A' },
    { id: 'sastav', sr: 'sastav', ru: 'сочинение', set: 'A' }
  ],

  verbs: {
    biti: { inf: 'biti', ru: 'быть', l: { m: 'bio', f: 'bila', n: 'bilo', mpl: 'bili', fpl: 'bile' } },
    raditi: { inf: 'raditi', ru: 'работать', l: { m: 'radio', f: 'radila', n: 'radilo', mpl: 'radili', fpl: 'radile' } },
    ziveti: { inf: 'živeti', ru: 'жить', l: { m: 'živeo', f: 'živela', n: 'živelo', mpl: 'živeli', fpl: 'živele' } },
    putovati: { inf: 'putovati', ru: 'путешествовать', l: { m: 'putovao', f: 'putovala', n: 'putovalo', mpl: 'putovali', fpl: 'putovale' } },
    kupiti: { inf: 'kupiti', ru: 'купить', l: { m: 'kupio', f: 'kupila', n: 'kupilo', mpl: 'kupili', fpl: 'kupile' } },
    jesti: { inf: 'jesti', ru: 'есть', l: { m: 'jeo', f: 'jela', n: 'jelo', mpl: 'jeli', fpl: 'jele' } },
    piti: { inf: 'piti', ru: 'пить', l: { m: 'pio', f: 'pila', n: 'pilo', mpl: 'pili', fpl: 'pile' } },
    ici: { inf: 'ići', ru: 'идти', l: { m: 'išao', f: 'išla', n: 'išlo', mpl: 'išli', fpl: 'išle' } },
    naruciti: { inf: 'naručiti', ru: 'заказать', l: { m: 'naručio', f: 'naručila', n: 'naručilo', mpl: 'naručili', fpl: 'naručile' } },
    slaviti: { inf: 'slaviti', ru: 'праздновать', l: { m: 'slavio', f: 'slavila', n: 'slavilo', mpl: 'slavili', fpl: 'slavile' } },
    pokloniti: { inf: 'pokloniti', ru: 'подарить', l: { m: 'poklonio', f: 'poklonila', n: 'poklonilo', mpl: 'poklonili', fpl: 'poklonile' } },
    reci: { inf: 'reći', ru: 'сказать', l: { m: 'rekao', f: 'rekla', n: 'reklo', mpl: 'rekli', fpl: 'rekle' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '10.1',
      title: 'Kako izgleda ovo?',
      ru: 'Повторение: еда и цвета, внешность, притяжательные, перфект в диалоге',
      goals: [
        'описать продукт: что это и какого цвета',
        'быстро подобрать притяжательное местоимение',
        'понять на слух диалог в перфекте и пересказать его'
      ],
      blocks: [
        {
          type: 'text', min: 3, title: 'Ponavljanje · как проходим',
          html: '<p>Урок 10 — повторение уроков 6–9: еда, внешность, традиции, падежи и перфект. Новой грамматики нет, только несколько новых слов из диалога. На втором занятии — тест на 30 вопросов и сочинение. Перед занятием пройдите карточки в разделе <b>Повторение</b>.</p>'
        },
        {
          type: 'gap', min: 8, title: 'Šta je ovo? Koje je boje? · что это и какого цвета',
          note: 'В оригинале — фото. Здесь описание: впишите продукт (в им. п.) и цвет (в форме «X je … boje» — ж. р.: crvene, žute…).',
          items: [
            'Okruglo povrće za salatu — {paradajz}. Boja: {crvene} boje.', 'Kiselo žuto voće — {limun}. Boja: {žute} boje.', 'Dugo zeleno povrće — {krastavac}. Boja: {zelene} boje.',
            'Ljubičasto povrće — {plavi patlidžan|patlidžan}. Boja: {ljubičaste} boje.', 'Okruglo narandžasto voće — {narandža}. Boja: {narandžaste} boje.', 'Belo piće od krave — {mleko}. Boja: {bele} boje.',
            'Piće od grožđa u čaši — {vino}. Boja: {crvene|crne} boje.', 'Malo ljubičasto voće sa košticom — {šljiva}. Boja: {ljubičaste|plave} boje.', 'Malo crveno voće, raste u Srbiji — {malina}. Boja: {crvene} boje.',
            'Topli napitak, pije se ujutru — {kafa}. Boja: {braon|crne} boje.', 'Dugo narandžasto povrće — {šargarepa}. Boja: {narandžaste} boje.', 'Meso u lepinji sa lukom — {pljeskavica}. Boja: {braon} boje.'
          ]
        },
        {
          type: 'match', min: 7, title: 'Uspostavite vezu · соедините предложения по смыслу',
          note: 'Прочитайте пары вслух: в них повторяются притяжательные, указательные, цвета и перфект.',
          pairs: [
            ['Marko ima baku.', 'Njegova baka ima zelene oči i sedu kosu.'], ['Ja sam kupila hleb.', 'Ovaj hleb je svež, on je lepe žute boje.'], ['Ona se zove Liljana.', 'Njeno ime je Liljana, a prezime je Petrović.'],
            ['Ovo je moj brat Dragiša.', 'Njegovo lice je lepo, on ima lepe oči braon boje i kovrdžavu kosu.'], ['Da li vi imate kuću?', 'Da, to je naša kuća, ona je bela.'], ['Gde si kupila jabuke?', 'Ove crvene jabuke sam kupila na pijaci, a ove zelene u onoj prodavnici.'],
            ['Oni imaju unuka i ćerku.', 'Njihov unuk ima 5 godina, a njihova ćerka ima 31 godinu.'], ['To je naš tata, a ovo je naša mama.', 'A gde su vaši baba i deda?']
          ]
        },
        {
          type: 'gap', bank: true, listen: true, min: 10, title: 'Uroš i Ana · послушайте и вставьте глаголы',
          note: 'В оригинале диалог на кириллице. Сначала слушаем, потом вставляем причастия из списка и читаем по ролям.',
          items: [
            '<b>Uroš:</b> Hej, zdravo! Ana, jesi li ovo ti?',
            '<b>Ana:</b> A? Uroše? Gde si, prijatelju! Ćaoo!',
            '<b>Uroš:</b> Ja sam se {šetao} u parku i {primetio} sam tebe! Kako si?',
            '<b>Ana:</b> Ništa, u redu sam, {udala} sam se u Kruševac, {preselila} sam se, {radila} sam tamo u kafiću tri meseca, sada radim u kancelariji.',
            '<b>Uroš:</b> Nadam se da ti se sviđa! Moja mama je {živela} u Kruševcu kad je {bila} mala.',
            '<b>Ana:</b> Jel?',
            '<b>Uroš:</b> Da, ali {preselila} se i sada živi u Nišu.',
            '<b>Ana:</b> Divno, šta radiš? Gde si {bio}?',
            '<b>Uroš:</b> Ja sam {putovao} u Poljsku, Finsku i Nemačku, sada idem u Češku, ostajem u Češkoj tri meseca.',
            '<b>Ana:</b> Da li si već {bio} tamo?',
            '<b>Uroš:</b> Ne, još nisam.',
            '<b>Ana:</b> Onda srećno!'
          ]
        },
        {
          type: 'speak', min: 5, title: 'Prepričajte · перескажите диалог',
          note: 'Один — за Ану, второй — за Уроша, в третьем лице: Ana se udala…, Uroš je putovao…',
          items: [
            { q: 'Šta je Ana radila? Gde sada radi?', sample: 'Ana se udala i preselila se u Kruševac. Radila je u kafiću, sada radi u kancelariji.' },
            { q: 'Gde je Uroš putovao? Kuda ide sada?', sample: 'Putovao je u Poljsku, Finsku i Nemačku. Sada ide u Češku na tri meseca.' },
            { q: 'Gde je živela Uroševa mama?', sample: 'Živela je u Kruševcu kad je bila mala, a sada živi u Nišu.' }
          ]
        },
        {
          type: 'conj', tense: 'past', min: 6, title: 'Trening · перфект вслух',
          verbs: ['biti', 'raditi', 'ziveti', 'putovati', 'kupiti', 'jesti', 'ici', 'naruciti'], rounds: 10
        },
        {
          type: 'mc', min: 6, title: 'Vuci kartu! · притяжательные местоимения',
          note: 'Аналог карточного квиза из курса: тяните карту, отвечайте быстро.',
          items: [
            { q: 'Ovo je … (ja) sestra.', options: ['moj', 'moja', 'moje'], a: 'moja' }, { q: 'To je … (on) auto.', options: ['njegov', 'njegova', 'njen'], a: 'njegov' },
            { q: '… (ona) baka kuva sarmu.', options: ['Njegova', 'Njena', 'Njihova'], a: 'Njena' }, { q: 'Gde su … (vi) deca?', options: ['vaši', 'vaša', 'vaše'], a: 'vaša' },
            { q: 'Ovo su … (mi) prijatelji.', options: ['naši', 'naše', 'naša'], a: 'naši' }, { q: '… (oni) kuća je bela.', options: ['Njihov', 'Njihova', 'Njihovo'], a: 'Njihova' },
            { q: 'Da li je ovo … (ti) jelo?', options: ['tvoj', 'tvoja', 'tvoje'], a: 'tvoje' }, { q: '… (ona) oči su zelene.', options: ['Njeni', 'Njene', 'Njena'], a: 'Njene' },
            { q: '… (on) sestre žive u Nišu.', options: ['Njegove', 'Njegovi', 'Njegova'], a: 'Njegove' }, { q: '… (mi) selo je malo.', options: ['Naš', 'Naša', 'Naše'], a: 'Naše' }
          ]
        },
        {
          type: 'speak', min: 12, title: 'Kako izgleda…? Šta si radio…? · разговор',
          note: 'Партнёр описывает внешность и настроение общего знакомого или актёра, вы угадываете. Потом обмен «новостями» в перфекте по образцу Уроша и Аны: где были, что делали, куда едете.',
          items: [
            { q: 'Kako izgleda? Kakvu kosu i oči ima? Kakav je danas?', sample: 'Visok je, ima kovrdžavu crnu kosu i braon oči. Danas je umoran i iznerviran.' },
            { q: 'Gde si bio / bila prošle nedelje? Šta si radio / radila?', sample: 'Bila sam u Novom Sadu, šetala sam se i jela sam u kafani.' },
            { q: 'Kuda ideš uskoro? Da li si već bio / bila tamo?', sample: 'Idem u Crnu Goru. Ne, još nisam bio tamo.' },
            { q: 'Šta si kupio / kupila juče? Gde?', sample: 'Kupila sam hleb u pekari i voće na pijaci.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'Limun je žute boje. Paradajz je crven.',
            'moj / moja / moje, njegov, njen, njihov',
            'Šetao sam se, primetio sam tebe. Udala sam se, preselila sam se.',
            'Da li si već bio tamo? — Ne, još nisam. — Onda srećno!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: новые слова диалога', est: 5, set: 'A' },
        { type: 'conj', tense: 'past', title: 'Тренажёр: перфект', est: 7, verbs: ['biti', 'raditi', 'ziveti', 'putovati', 'kupiti', 'jesti', 'piti', 'ici', 'naruciti', 'slaviti', 'pokloniti', 'reci'], rounds: 16 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Šetao sam se u parku i primetio sam tebe.'] }, { a: ['Udala sam se i preselila sam se u Kruševac.'] }, { a: ['Moja mama je živela u Kruševcu kad je bila mala.'] },
            { a: ['Putovao sam u Poljsku, Finsku i Nemačku.'] }, { a: ['Da li si već bio tamo?'] }, { a: ['Ne, još nisam. — Onda srećno!'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Его бабушка имеет зелёные глаза и седые волосы.', a: ['Njegova baka ima zelene oči i sedu kosu.'] },
            { q: 'Этот хлеб свежий.', a: ['Ovaj hleb je svež.'] },
            { q: 'Эти красные яблоки я купила на рынке.', a: ['Ove crvene jabuke sam kupila na pijaci.', 'Ove crvene jabuke kupila sam na pijaci.'] },
            { q: 'Их внуку 5 лет.', a: ['Njihov unuk ima 5 godina.', 'Njihov unuk ima pet godina.'] },
            { q: 'Я гулял в парке.', a: ['Šetao sam se u parku.', 'Ja sam se šetao u parku.'] },
            { q: 'Она вышла замуж и переехала в Ниш.', a: ['Udala se i preselila se u Niš.', 'Ona se udala i preselila se u Niš.'] },
            { q: 'Ты уже был там?', a: ['Da li si već bio tamo?', 'Jesi li već bio tamo?'] },
            { q: 'Надеюсь, тебе нравится!', a: ['Nadam se da ti se sviđa!'] }
          ]
        },
        {
          type: 'write', title: 'Vesti · новости для друга в перфекте', est: 8, key: 'hw-10.1-vesti',
          note: '8 предложений по образцу Аны и Уроша: что изменилось за последний год (переезд, работа, поездки). Только перфект.',
          sample: 'Prošle godine sam se preselila u Beograd. Radila sam tri meseca u kafiću, sada radim u firmi. Putovala sam u Crnu Goru i Bosnu. Kupila sam bicikl. Naučila sam mnogo srpskih reči. Bila sam na slavi kod prijatelja. Nisam bila u Nišu, ali idem u maju.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '10.2',
      title: 'Kupovina, planovi i test',
      ru: 'Повторение падежей; тест по урокам 6–9; сочинение о любимом празднике',
      goals: [
        'выбрать нужный падеж: аккузатив, локатив или датив',
        'пройти тест по урокам 6–9 за 30 минут',
        'рассказать о любимом празднике (устно, потом письменно)'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашние «новости». Партнёр реагирует: Jel? Divno! Onda srećno!',
          items: [{ q: 'Prošle godine sam…' }]
        },
        {
          type: 'text', min: 3, title: 'Tri padeža · напоминание',
          tables: [
            { caption: 'Akuzativ — Lokativ — Dativ', head: ['', 'akuzativ (koga? šta? kuda?)', 'lokativ (gde? o čemu?)', 'dativ (kome?)'], rows: [['M', 'grad, brata', 'u gradu', 'bratu'], ['Ž', 'kafu', 'u kafi, na pijaci', 'sestri'], ['S', 'vino', 'u vinu', 'moru'], ['mn.', 'gradove, kafe', 'gradovima, kafama', 'gostima, sestrama']] }
          ]
        },
        {
          type: 'gap', min: 10, title: 'Akuzativ, lokativ ili dativ? · впишите форму',
          note: 'Упражнение из курса. В скобках — слово и падеж.',
          items: [
            'Hej, zdravo! Sada smo na {pijaci} (pijaca, lokativ), kupujemo {ajvar} (ajvar, akuzativ) i {kajmak} (kajmak, akuzativ). Da, bili smo u {kafiću} (kafić, lokativ) i ja sam kupio {sinu} (sin, dativ) sladoled sa šumskim voćem.',
            'Ja sam putovala u {Crnu Goru} (Crna Gora, akuzativ), kupila sam mužu {pršut} (pršut, akuzativ) i {vino} (vino, akuzativ) vranac.',
            'Moja mama je rekla {bratu} (brat, dativ) da kupi {krastavce} (krastavci, akuzativ), {sir} (sir, akuzativ) i {paradajz} (paradajz, akuzativ). Naša porodica voli {šopsku salatu} (šopska salata, akuzativ).',
            'Njegova devojka je u {kafiću} (kafić, lokativ), ona je naručila {kafu} (kafa, akuzativ) sa šlagom, {krempitu} (krempita, akuzativ) i {vodu} (voda, akuzativ).',
            'Milica ima rođendan. Pripremili smo {Milici} (Milica, dativ) poklon. Za njen rođendan smo rezervisali stočić u {kafani} (kafana, lokativ). Ona obožava {muziku} (muzika, akuzativ), {mešano meso} (mešano meso, akuzativ) i {kačamak} (kačamak, akuzativ).'
          ]
        },
        {
          type: 'gap', min: 15, title: 'Test · тест по урокам 6–9',
          note: 'В курсе тест на 31 вопрос и 45 минут. Здесь 46 пропусков, без подсказок и таблиц. Заполняете по очереди, потом проверяете и разбираете ошибки. Засеките 15 минут.',
          items: [
            'Hleb kupujem u {pekari}, a voće na {pijaci}. <i>(pekara, pijaca)</i>',
            'Voće je {jeftino}, a riba je {skupa}. <i>(дёшево, дорогая)</i>',
            'Ja sam u {prodavnici}, idem u {prodavnicu}. <i>(gde? kuda?)</i>',
            'U {junu} idemo na more. Često mislim o {porodici}.',
            'Treba da {kupim} mleko. Moram da {idem} u pekaru. <i>(kupiti, ići — ja)</i>',
            'Limun je {žute} boje. Nebo je {plavo}. <i>(žut, plav)</i>',
            'Ona ima {dugu} {plavu} kosu. <i>(dug, plav)</i>',
            'Veliki grad — veliki {gradovi}; lepa žena — lepe {žene}.',
            'Danas sam {umoran|umorna} i {srećan|srećna}. <i>(уставший, счастливый)</i>',
            'Zimi skijam, {leti} idem na more, {u proleće} se šetam. <i>(летом, весной)</i>',
            'Božić je 7. {januara}. Nova godina je 31. {decembra}.',
            'Juče {sam} bio u kafiću. Marija {je} bila u parku. <i>(связка)</i>',
            'čitati — {čitao}, {čitala}; jesti — {jeo}, {jela}; ići — {išao}, {išla}',
            'Mama {je pripremila} ukusnu hranu. <i>(pripremiti)</i> Deca {su pozvala} prijatelje. <i>(pozvati)</i>',
            'Nikad {nisam} bio na slavi. Na slavi su slavski {kolač}, žito i sveća.',
            'Ovo je {moja} kafa, to je {njegov} burek, a ono su {njihovi} prijatelji. <i>(ja, on, oni)</i>',
            'Kupila sam poklon {sestri} i {bratu}. Idem ka {stanici}. <i>(dativ)</i>',
            '{Ova} gibanica ovde, {ta} kod tebe, {ona} tamo daleko. <i>(указательные, ж. р.)</i>',
            'Konobar: Izvolite! Nešto od {pića}? Za poneti ili {ovde}? Treba li {račun}?'
          ]
        },
        {
          type: 'speak', min: 8, title: 'Razgovor o testu · разбор',
          note: 'Каждый называет три пункта, в которых ошибся или сомневался, и объясняет партнёру правило. Если оба ошиблись — найдите правило в уроке 6–9 и прочитайте вслух.',
          items: [{ q: 'Pogrešio sam u… Pravilo je…', sample: 'Pogrešila sam u lokativu: „u prodavnici“, jer je to mesto, a ne pravac.' }]
        },
        {
          type: 'speak', min: 14, title: 'Omiljeni praznik · любимый праздник',
          note: 'Подготовка к сочинению: каждый рассказывает 2 минуты по вопросам из курса. Партнёр записывает ключевые слова и задаёт два уточняющих вопроса. Используйте перфект для прошлого раза и презент для «обычно».',
          items: [
            { q: 'Koji je tvoj omiljeni praznik? Kada je?', sample: 'Moj omiljeni praznik je Nova godina, 31. decembra.' },
            { q: 'Kako slavite? Ko dolazi?', sample: 'Slavimo kod kuće, dolaze roditelji i prijatelji. Kitimo jelku.' },
            { q: 'Šta kuvate za praznik? Šta jedete i pijete?', sample: 'Mama kuva meso i salate, ja pravim tortu. Pijemo vino i šampanjac.' },
            { q: 'Kako si slavio / slavila prošle godine?', sample: 'Prošle godine sam slavila kod bake na selu, jeli smo sarmu.' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · что дальше',
          points: [
            'Уроки 6–9 закрыты: еда и магазины, локатив, внешность и цвета, перфект, датив, ресторан',
            'Карточки продолжают приходить в «Повторение»',
            'Дома — сочинение о любимом празднике (10 предложений)'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: слова урока (обратная сторона)', est: 5, set: 'A' },
        {
          type: 'qa', mode: 'transform', title: 'Padeži · поставьте в нужный падеж', est: 6,
          note: 'В скобках слово и падеж.',
          items: [
            { q: 'Kupujem … (ajvar, akuzativ)', a: ['ajvar'] }, { q: 'Bili smo u … (kafić, lokativ)', a: ['u kafiću', 'kafiću'] }, { q: 'Kupio sam … sladoled (sin, dativ)', a: ['sinu'] },
            { q: 'Putovala sam u … (Crna Gora, akuzativ)', a: ['u Crnu Goru', 'Crnu Goru'] }, { q: 'Rekla je … (brat, dativ)', a: ['bratu'] }, { q: 'Volimo … (šopska salata, akuzativ)', a: ['šopsku salatu'] },
            { q: 'Naručila je … (kafa, akuzativ)', a: ['kafu'] }, { q: 'Pripremili smo … poklon (Milica, dativ)', a: ['Milici'] }, { q: 'Stočić u … (kafana, lokativ)', a: ['u kafani', 'kafani'] }, { q: 'Obožava … (muzika, akuzativ)', a: ['muziku'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Sada smo na pijaci, kupujemo ajvar i kajmak.'] }, { a: ['Kupila sam mužu pršut i vino.'] }, { a: ['Naša porodica voli šopsku salatu.'] },
            { a: ['Naručila je kafu sa šlagom.'] }, { a: ['Rezervisali smo stočić u kafani.'] }, { a: ['Ona obožava muziku i mešano meso.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод: всё вместе', est: 10,
          items: [
            { q: 'Мы на рынке, покупаем айвар и каймак.', a: ['Mi smo na pijaci, kupujemo ajvar i kajmak.', 'Na pijaci smo, kupujemo ajvar i kajmak.'] },
            { q: 'Я купил сыну мороженое.', a: ['Kupio sam sinu sladoled.', 'Ja sam kupio sinu sladoled.'] },
            { q: 'Мама сказала брату купить огурцы.', a: ['Mama je rekla bratu da kupi krastavce.'] },
            { q: 'Его девушка в кафе, она заказала кофе.', a: ['Njegova devojka je u kafiću, ona je naručila kafu.', 'Njegova devojka je u kafiću, naručila je kafu.'] },
            { q: 'Мы забронировали столик в кафане.', a: ['Rezervisali smo stočić u kafani.', 'Mi smo rezervisali stočić u kafani.'] },
            { q: 'У неё день рождения в мае.', a: ['Ona ima rođendan u maju.', 'Njen rođendan je u maju.'] },
            { q: 'Прошлой зимой мы были в Черногории.', a: ['Prošle zime smo bili u Crnoj Gori.', 'Prošle zime bili smo u Crnoj Gori.'] },
            { q: 'Я никогда не пробовал качамак.', a: ['Nikad nisam probao kačamak.', 'Nikad nisam probala kačamak.'] },
            { q: 'Какого цвета твои глаза?', a: ['Koje su boje tvoje oči?', 'Koje boje su tvoje oči?'] },
            { q: 'Тогда удачи!', a: ['Onda srećno!'] }
          ]
        },
        {
          type: 'write', title: 'Sastav: Omiljeni praznik · сочинение + запись', est: 15, key: 'hw-10.2-sastav', record: true,
          note: 'Задание из курса: рассказ о любимом празднике, минимум 10 предложений. Kako slavite? Kada? Šta kuvate za praznik? Šta jedete i pijete? Используйте перфект (прошлый раз) и презент (обычно). Запишите чтение вслух.',
          sample: 'Moj omiljeni praznik je Nova godina. Slavimo je 31. decembra kod kuće. Obično dolaze roditelji, sestra i naši prijatelji. Kitimo jelku i kupujemo poklone. Mama kuva meso i pravi šopsku salatu, a ja pravim tortu. Jedemo mnogo i pijemo vino i šampanjac. U ponoć gledamo vatromet. Prošle godine smo slavili kod bake na selu. Jeli smo sarmu i pili rakiju. Bilo je divno! Ove godine želim da slavim u Beogradu.'
        }
      ]
    }
  ]
});
