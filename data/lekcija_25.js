// Lekcija 25 - Ponavljanje. Review of lessons 21-24 in two 60-minute sessions. The original is three Wordwall widgets + a test (not captured) + a "favourite animals" psychotest + merged vocabulary.
COURSE.register({
  n: 25,
  title: 'Ponavljanje',
  ru: 'Повторение уроков 21–24: хобби, потенциал, мода, заимствования, спорт, модальные глаголы, животные, местоимения',

  vocab: [
    { id: 'r25-baviti', sr: 'baviti se + instrumental — bavim se sportom', ru: 'заниматься', set: 'A' },
    { id: 'r25-pot', sr: 'bih, bi, bi, bismo, biste, bi + hteo', ru: 'потенциал', set: 'A' },
    { id: 'r25-nositi', sr: 'nositi, obući se, oblačiti se', ru: 'носить, одеться, одеваться', set: 'A' },
    { id: 'r25-pozajm', sr: 'taksijem, u Meksiku, u rezimeu, autom', ru: 'заимствования в падежах', set: 'A' },
    { id: 'r25-modalni', sr: 'moram, mogu, hoću, treba da', ru: 'модальные глаголы', set: 'A' },
    { id: 'r25-znati', sr: 'znam da plivam — mogu da plivam', ru: 'умею — могу', set: 'A' },
    { id: 'r25-zamenice', sr: 'koga? čega? kome? sa kim? o čemu?', ru: 'вопросительные местоимения', set: 'A' },
    { id: 'r25-koji', sr: 'koji — kakav', ru: 'который — какой', set: 'A' },
    { id: 'r25-ni', sr: 'niko / neko / iko, ništa / nešto / išta, nigde / negde, nikada / nekada', ru: 'отрицательные и неопределённые', set: 'A' },
    { id: 'r25-zivotinje', sr: 'kućni ljubimci, stoka, divlje životinje', ru: 'питомцы, скот, дикие животные', set: 'A' }
  ],

  verbs: {
    hteti: { inf: 'hteti', ru: 'хотеть', l: { m: 'hteo', f: 'htela', n: 'htelo', mpl: 'hteli', fpl: 'htele' } },
    voleti: { inf: 'voleti', ru: 'любить', l: { m: 'voleo', f: 'volela', n: 'volelo', mpl: 'voleli', fpl: 'volele' } },
    ici: { inf: 'ići', ru: 'идти', l: { m: 'išao', f: 'išla', n: 'išlo', mpl: 'išli', fpl: 'išle' } },
    kupiti: { inf: 'kupiti', ru: 'купить', l: { m: 'kupio', f: 'kupila', n: 'kupilo', mpl: 'kupili', fpl: 'kupile' } },
    baviti: { inf: 'baviti se', ru: 'заниматься', pos: { ja: 'se bavim', ti: 'se baviš', on: 'se bavi', mi: 'se bavimo', vi: 'se bavite', oni: 'se bave' }, neg: { ja: 'se ne bavim', ti: 'se ne baviš', on: 'se ne bavi', mi: 'se ne bavimo', vi: 'se ne bavite', oni: 'se ne bave' }, l: { m: 'se bavio', f: 'se bavila', n: 'se bavilo', mpl: 'se bavili', fpl: 'se bavile' } },
    moci: { inf: 'moći', ru: 'мочь', pos: { ja: 'mogu', ti: 'možeš', on: 'može', mi: 'možemo', vi: 'možete', oni: 'mogu' }, neg: { ja: 'ne mogu', ti: 'ne možeš', on: 'ne može', mi: 'ne možemo', vi: 'ne možete', oni: 'ne mogu' } },
    morati: { inf: 'morati', ru: 'быть должным', pos: { ja: 'moram', ti: 'moraš', on: 'mora', mi: 'moramo', vi: 'morate', oni: 'moraju' }, neg: { ja: 'ne moram', ti: 'ne moraš', on: 'ne mora', mi: 'ne moramo', vi: 'ne morate', oni: 'ne moraju' } },
    nositi: { inf: 'nositi', ru: 'носить', pos: { ja: 'nosim', ti: 'nosiš', on: 'nosi', mi: 'nosimo', vi: 'nosite', oni: 'nose' }, neg: { ja: 'ne nosim', ti: 'ne nosiš', on: 'ne nosi', mi: 'ne nosimo', vi: 'ne nosite', oni: 'ne nose' }, l: { m: 'nosio', f: 'nosila', n: 'nosilo', mpl: 'nosili', fpl: 'nosile' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '25.1',
      title: 'Ako bih…',
      ru: 'Повторение: потенциал, trebati, местоимения, заимствования',
      goals: [
        'ответить на вопросы «Ako bih…?» в потенциале без подготовки',
        'вставить treba da / trebalo je da / trebaće da',
        'расставить местоимения в тексте'
      ],
      blocks: [
        {
          type: 'text', min: 3, title: 'Ponavljanje · как проходим',
          html: '<p>Урок 25 — повторение уроков 21–24: хобби и потенциал, мода и заимствования, спорт и модальные глаголы, животные и местоимения. В оригинале это три интерактива Wordwall, тест и психотест «три любимых животных». Здесь два занятия. Перед занятием пройдите карточки в разделе <b>Повторение</b>.</p>'
        },
        {
          type: 'speak', min: 10, title: 'Ako bih…? · случайное колесо в потенциале',
          note: 'Аналог колеса Wordwall из курса: партнёр называет номер вопроса (или бросает кубик), вы отвечаете двумя предложениями в потенциале. По шесть вопросов каждый.',
          items: [
            { q: '1. Šta bi radio / radila, kad bi imao / imala milion evra?', sample: 'Kupio bih kuću na moru i putovao bih širom sveta.' },
            { q: '2. Kuda bi putovao / putovala, kad bi mogao / mogla bilo gde?', sample: 'Putovala bih u Japan, jer bih volela da vidim Tokio.' },
            { q: '3. Koju životinju bi imao / imala, kad bi mogao / mogla?', sample: 'Imao bih psa, jer bih se šetao sa njim svaki dan.' },
            { q: '4. Šta bi obukao / obukla za svadbu?', sample: 'Obukla bih dugu svečanu haljinu i cipele.' },
            { q: '5. Kojim sportom bi se bavio / bavila, kad bi imao / imala vremena?', sample: 'Bavio bih se plivanjem i išao bih u teretanu.' },
            { q: '6. Šta bi promenio / promenila u svom životu?', sample: 'Manje bih radio i više bih se odmarao.' }
          ]
        },
        {
          type: 'conj', tense: 'pot', min: 4, title: 'Trening · потенциал',
          verbs: ['hteti', 'voleti', 'ici', 'kupiti'], rounds: 6
        },
        {
          type: 'gap', min: 8, title: 'Dopunite rečenice glagolom trebati · «open the box»',
          note: 'Аналог интерактива из курса: в каждом «ящике» — предложение с trebati в одном из трёх времён.',
          items: [
            'Boli me zub. {Treba da idem} (ići, ja, prezent) kod zubara.', 'Zaboravili smo hranu za psa! {Trebalo je da kupimo} (kupiti, mi, perfekat) juče.',
            'Sutra je maraton. {Trebaće da ustanem} (ustati, ja, futur) u pet.', 'Papagaj je bolestan. {Treba da ga odvedemo} (odvesti ga, mi, prezent) kod veterinara.',
            'Ti {treba da se obučeš} (obući se, prezent) elegantno za intervju.', 'Deca {treba da jedu} (jesti, prezent) više povrća.',
            'Novac mi {treba} (trebati, обычное значение) za novi bicikl.', 'Knjige ti {trebaju} (trebati, обычное значение) za fakultet.'
          ]
        },
        {
          type: 'gap', bank: true, min: 8, title: 'Zamenice u tekstu · расставьте местоимения',
          note: 'Аналог интерактива «Zamenice pokazne, odrične, neodređene»: перетащите слова в пропуски.',
          items: [
            'Juče sam bio u azilu. {Neko} je ostavio malog psa ispred vrata. {Niko} ne zna {čiji} je.',
            'Pitao sam: „{Koji} pas je najstariji?“ — „{Onaj} tamo, sa belim repom.“ „{Kakav} je?“ — „Nežan i miran.“',
            '{Nikada} nisam imao psa. {Nešto} u meni je reklo: uzmi ga! Sada {ništa} nije važnije od njega.',
            '{Nigde} nema boljeg prijatelja. Da li si {ikada} bio u azilu? Idi {negde} i uzmi ljubimca!'
          ]
        },
        {
          type: 'gap', min: 7, title: 'Pozajmljenice · заимствования в падежах',
          items: [
            'Idem na posao {taksijem} (taksi).', 'U Beogradu nema {metroa} (metro).', 'Bili smo u {Meksiku} (Meksiko) i u {Tokiju} (Tokio).',
            'Putujemo novim {autom} (auto).', 'Moja slika u {rezimeu} (rezime) je odlična.', 'Pio je {viski} (viski) i kakao — malo {kakaa} (kakao).', 'Nema više {evra} (evro).'
          ]
        },
        {
          type: 'gap', min: 10, title: 'Test 1 · хобби, мода, местоимения',
          note: 'Без подсказок. По очереди, потом разбор.',
          items: [
            'Bavim se {plivanjem} i {trčanjem}. <i>(plivanje, trčanje)</i>', 'Plivati — {plivanje}; čitati — {čitanje}; kuvati — {kuvanje}.',
            'Ako {bih imao} (imati, ja) više vremena, {bavio bih se} (baviti se) muzikom.', 'Hteo {bih} kafu. Da li {biste} hteli čaj? Rado {bismo} išli sa vama.',
            'Danas {nosim} (nositi, ja) farmerke. Ujutru {se oblačim} (oblačiti se, ja) brzo. Mama {oblači} (oblačiti) sina u jaknu.',
            'Kad je hladno, nosim {kaput} i {kapu}. Kad je vruće, nosim {šorts} i {sunčanice}. <i>(пальто, шапка; шорты, очки)</i>',
            '{Koji} pas je tvoj? — Onaj crni. {Kakav} je? — Nežan.', '{Niko} ne kupuje zmiju. {Nikada} nismo bili u azilu. {Ničiji} rep.'
          ]
        },
        {
          type: 'speak', min: 8, title: 'Moj stil i moj hobi · разговор',
          note: 'Расскажите друг другу о хобби и стиле в одном монологе на 2 минуты: baviti se, nositi, oblačiti se, потенциал.',
          items: [
            { q: 'Čime se baviš i kako se oblačiš za to?', sample: 'Bavim se jogom, za jogu nosim helanke i majicu. Kad bih imao više vremena, bavio bih se i plivanjem.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'bih, bi, bismo + hteo; Ako bih imao…, bavio bih se…',
            'treba da / trebalo je da / trebaće da; treba mi, trebaju ti',
            'neko / niko / iko; nešto / ništa; koji — kakav',
            'taksijem, metroa, u Meksiku, u Tokiju, autom, kakaa'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: сводка уроков 21–24', est: 6, set: 'A' },
        { type: 'conj', tense: 'pot', title: 'Тренажёр: потенциал', est: 5, verbs: ['hteti', 'voleti', 'ici', 'kupiti', 'baviti', 'nositi'], rounds: 12 },
        {
          type: 'qa', mode: 'transform', title: 'Zamenice i pozajmljenice · переведите', est: 5,
          items: [
            { q: 'кто-то', a: ['neko'] }, { q: 'никто', a: ['niko'] }, { q: 'ничего', a: ['ništa'] }, { q: 'где-то', a: ['negde'] }, { q: 'никогда', a: ['nikada', 'nikad'] },
            { q: 'на такси (instr.)', a: ['taksijem'] }, { q: 'в Мексике', a: ['u Meksiku'] }, { q: 'в Токио', a: ['u Tokiju'] }, { q: 'в резюме', a: ['u rezimeu'] }, { q: 'нет метро', a: ['nema metroa'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Bavim se sportom i muzikom.'] }, { a: ['Hteo bih da popijem kafu sa tobom.'] }, { a: ['Trebalo je da kupimo hranu za psa.'] },
            { a: ['Koji pas je tvoj? Kakav je?'] }, { a: ['Niko ne zna čiji je.'] }, { a: ['Idem na posao taksijem, jer nema metroa.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод: уроки 21–22', est: 8,
          items: [
            { q: 'Я занимаюсь фотографией.', a: ['Bavim se fotografisanjem.', 'Bavim se fotografijom.'] },
            { q: 'Если бы у меня было больше денег, я бы путешествовал по всему миру.', a: ['Kad bih imao više novca, putovao bih širom sveta.', 'Ako bih imao više novca, putovao bih širom sveta.'] },
            { q: 'Вы бы хотели выпить кофе?', a: ['Da li biste hteli da popijete kafu?', 'Da li biste hteli popiti kafu?'] },
            { q: 'Я ношу джинсы и кроссовки.', a: ['Nosim farmerke i patike.', 'Ja nosim farmerke i patike.'] },
            { q: 'Она одевается элегантно.', a: ['Ona se oblači elegantno.'] },
            { q: 'Мы ехали на такси.', a: ['Išli smo taksijem.', 'Putovali smo taksijem.', 'Vozili smo se taksijem.'] },
            { q: 'В Белграде нет метро.', a: ['U Beogradu nema metroa.'] },
            { q: 'Нужно было купить билеты раньше.', a: ['Trebalo je da kupimo karte ranije.', 'Trebalo je kupiti karte ranije.'] }
          ]
        },
        {
          type: 'write', title: 'Kad bih bio životinja · текст в потенциале', est: 7, key: 'hw-25.1-zivotinja',
          note: '8 предложений: каким животным вы были бы и почему, что бы делали, где бы жили. Только потенциал.',
          sample: 'Kad bih bio životinja, bio bih sova. Živeo bih u šumi i spavao bih ceo dan. Noću bih leteo i gledao bih zvezde. Niko me ne bi video. Jeo bih miševe, ali ne bih jeo žabe. Bio bih mudar i miran. Ne bih nikada išao u grad. Voleo bih tišinu.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '25.2',
      title: 'Test i psihotest',
      ru: 'Тест по урокам 21–24; психотест «три любимых животных»',
      goals: [
        'пройти тест по спорту, модальным глаголам и животным',
        'описать животное и объяснить, почему оно любимое',
        'рассказать о привычках и спорте с модальными глаголами'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст «Kad bih bio životinja». Партнёр угадывает, почему именно это животное.',
          items: [{ q: 'Kad bih bio životinja…' }]
        },
        {
          type: 'sort', min: 6, title: 'Životinje · три группы',
          groups: ['Kućni ljubimci', 'Stoka', 'Divlje životinje'],
          items: [
            { w: 'hrčak', g: 'Kućni ljubimci' }, { w: 'krava', g: 'Stoka' }, { w: 'vuk', g: 'Divlje životinje' }, { w: 'papagaj', g: 'Kućni ljubimci' }, { w: 'ovca', g: 'Stoka' }, { w: 'jelen', g: 'Divlje životinje' },
            { w: 'kornjača', g: 'Kućni ljubimci' }, { w: 'kokoška', g: 'Stoka' }, { w: 'lisica', g: 'Divlje životinje' }, { w: 'mačka', g: 'Kućni ljubimci' }, { w: 'magarac', g: 'Stoka' }, { w: 'jež', g: 'Divlje životinje' }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Modalni glagoli · впишите',
          items: [
            'Boli me zub, {moram} (morati, ja) kod zubara.', 'Ne {mogu} (moći, ja) da ustanem iz kreveta.', '{Hoćeš} (hteti, ti) li da napravim supu?',
            '{Znam} (znati, ja) da plivam, ali ne {mogu} (moći) zato što me boli noga.', 'Vi {morate} (morati) da jedete zdravu hranu.', 'Oni {mogu} (moći) da igraju košarku kao profesionalci.'
          ]
        },
        {
          type: 'gap', min: 14, title: 'Test 2 · спорт, здоровье, животные, местоимения',
          note: 'В курсе — тест (содержимое не попало на скриншоты). Этот составлен по урокам 21–24. Без подсказок, 15 минут, потом разбор.',
          items: [
            'Igre sa loptom su {košarka}, {odbojka} i {fudbal}. <i>(баскетбол, волейбол, футбол)</i>',
            'U {teretani} vežbam sa {tegovima}, u {bazenu} plivam, na {klizalištu} klizam. <i>(спортзал, гантели, бассейн, каток)</i>',
            'Znam da {skijam}, ali ne {mogu}, boli me noga. <i>(кататься на лыжах; могу)</i>',
            'Doručak je {najvažniji} obrok u danu. Smeh može {ojačati} imunitet. <i>(самый важный; укрепить)</i>',
            'Loše navike: {pušenje}, jesti {brzu} hranu, {pratiti} društvene mreže. <i>(курение; фаст-; сидеть в)</i>',
            'Maja ima {štene}, njegova {rasa} je labrador. Pas ima {povodac} i {ogrlicu}. <i>(щенок; порода; поводок; ошейник)</i>',
            'Papagaj živi u {kavezu}. Mačor voli da {se mazi}. Uzeli su ga iz {azila}. <i>(клетка; ласкаться; приют)</i>',
            '{Čega} se plaši tvoj pas? Sa {kim} putuješ? O {čemu} razmišljaš? <i>(чего; кем; чём)</i>',
            'Jelen ima {rogove} i {kopita}. Riba ima {ljusku} i {peraja}. Ptica ima {krila} i {kljun}. <i>(рога, копыта; чешуя, плавники; крылья, клюв)</i>',
            'Glup kao {guska}. Veran kao {pas}. Mudar kao {sova}.',
            '{Nikada} nisam video medveda. {Niko} ne kupuje zmiju. {Nešto} je kupio.'
          ]
        },
        {
          type: 'text', min: 3, title: 'Psihotest: najomiljenije životinje',
          img: 'img/l25_psihotest.png',
          html: '<p>Задание из курса: напишите трёх любимых животных и объясните почему. Расшифровка теста (второй слайд не попал на скриншоты, привожу распространённую версию): <b>первое животное</b> — каким вы хотите казаться, <b>второе</b> — каким вас видят другие, <b>третье</b> — какой вы на самом деле.</p>'
        },
        {
          type: 'speak', min: 12, title: 'Tri omiljene životinje · психотест вслух',
          note: 'Каждый называет трёх любимых животных и объясняет, почему (kakva je, šta ima, šta radi). Потом читаете расшифровку и обсуждаете: Da li je tačno?',
          items: [
            { q: 'Koja je tvoja prva omiljena životinja? Zašto?', sample: 'Pas, jer je veran i voli da se šeta. Ima mekane šape i dugu dlaku.' },
            { q: 'Druga? Treća?', sample: 'Sova, jer je mudra i mirna. Mačka, jer je nežna i voli da se mazi.' },
            { q: 'Da li je psihotest tačan? Kakav si ti u stvari?', sample: 'Mislim da je tačan: hoću da izgledam veran, drugi me vide kao mudrog, a u stvari sam nežan i lenj kao mačka!' }
          ]
        },
        {
          type: 'speak', min: 10, title: 'Sport, navike i ljubimci · итоговый разговор',
          note: 'Свободный разговор по всем темам уроков 21–24, минимум 8 реплик каждый, с модальными глаголами и потенциалом.',
          items: [
            { q: 'Čime se baviš? Šta moraš, a šta hoćeš da radiš za zdravlje?', sample: 'Bavim se trčanjem. Moram da spavam više, hoću da jedem zdravo.' },
            { q: 'Kakve navike bi voleo / volela da promeniš?', sample: 'Voleo bih da manje pratim društvene mreže.' },
            { q: 'Da li imaš ljubimca? Kakav je? Čega se plaši?', sample: 'Imam mačku. Nežna je i smešna. Plaši se usisivača.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · что дальше',
          points: [
            'Уроки 21–24 закрыты: хобби, потенциал, мода, заимствования, спорт, модальные глаголы, животные, местоимения',
            'Карточки продолжают приходить в «Повторение»',
            'Дальше — урок 26'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: сводка (обратная сторона)', est: 6, set: 'A' },
        { type: 'conj', title: 'Тренажёр: модальные и baviti se', est: 5, verbs: ['moci', 'morati', 'baviti', 'nositi'], rounds: 12 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Znam da skijam, ali ne mogu, boli me noga.'] }, { a: ['Doručak je najvažniji obrok u danu.'] }, { a: ['Papagaj živi u kavezu.'] },
            { a: ['Čega se plaši tvoj pas?'] }, { a: ['Jelen ima rogove i kopita.'] }, { a: ['Nikada nisam video medveda.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод: уроки 23–24', est: 8,
          items: [
            { q: 'Я умею плавать, но не могу сегодня.', a: ['Znam da plivam, ali ne mogu danas.'] },
            { q: 'Мы должны есть здоровую еду.', a: ['Moramo da jedemo zdravu hranu.', 'Mi moramo da jedemo zdravu hranu.'] },
            { q: 'Нужно вставать в восемь.', a: ['Treba da ustanemo u osam.', 'Treba ustati u osam.', 'Treba da ustaneš u osam.'] },
            { q: 'У Маи есть щенок, его порода — лабрадор.', a: ['Maja ima štene, njegova rasa je labrador.'] },
            { q: 'Чего боится твоя собака?', a: ['Čega se plaši tvoj pas?', 'Čega se boji tvoj pas?'] },
            { q: 'Который кот твой? Какой он?', a: ['Koji mačak je tvoj? Kakav je?'] },
            { q: 'Никто не покупает змею.', a: ['Niko ne kupuje zmiju.'] },
            { q: 'У совы большие глаза и крылья.', a: ['Sova ima velike oči i krila.'] }
          ]
        },
        {
          type: 'write', title: 'Moje tri omiljene životinje · сочинение + запись', est: 12, key: 'hw-25.2-psihotest', record: true,
          note: 'Задание из курса: напишите о трёх любимых животных (части тела, характер, где живёт, что ест) и объясните, почему они любимые. 12 предложений. Запишите чтение вслух.',
          sample: 'Moja prva omiljena životinja je pas. Pas je veran i voli da se šeta. Ima mekane šape, dugu dlaku i veseo rep. Druga je sova. Sova je mudra ptica, ima velike oči i krila, živi u šumi i leti noću. Treća je mačka, jer je nežna i voli da se mazi. Ima dugu dlaku i tanke šape. Kad bih mogao, imao bih sve tri! Psihotest kaže: hoću da izgledam veran, drugi me vide kao mudrog, a u stvari sam nežan i volim da spavam. Mislim da je tačno.'
        }
      ]
    }
  ]
});
