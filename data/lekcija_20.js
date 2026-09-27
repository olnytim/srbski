// Lekcija 20 - Ponavljanje. Review of lessons 16-19 in two 60-minute sessions. The original is a quiz (not captured) + the merged vocabulary.
COURSE.register({
  n: 20,
  title: 'Ponavljanje',
  ru: 'Повторение уроков 16–19: врач, банк, салон, дом; императив, возвратные глаголы, союзы',

  vocab: [
    { id: 'r20-hitna', sr: 'hitna pomoć — 194', ru: 'скорая — 194', set: 'A' },
    { id: 'r20-boli', sr: 'Boli me glava. Imam temperaturu.', ru: 'Болит голова. У меня температура.', set: 'A' },
    { id: 'r20-racun', sr: 'otvoriti račun, podići novac, platiti karticom', ru: 'открыть счёт, снять деньги, заплатить картой', set: 'A' },
    { id: 'r20-termin', sr: 'zakazati termin — Koji datum vam odgovara?', ru: 'записаться — Какая дата вам подходит?', set: 'A' },
    { id: 'r20-imperativ', sr: 'čekaj / čekajte — ne čekaj / nemoj čekati', ru: 'жди / ждите — не жди', set: 'A' },
    { id: 'r20-se', sr: 'sećati se, bojati se, sviđati se, smejati se', ru: 'помнить, бояться, нравиться, смеяться', set: 'A' },
    { id: 'r20-veznici', sr: 'čim, dok, jer, nego, da', ru: 'как только, пока, потому что, чем, что / чтобы', set: 'A' },
    { id: 'r20-redni', sr: 'prvi, drugi, treći… trideset prvog decembra', ru: 'порядковые, даты', set: 'A' },
    { id: 'r20-predlozi', sr: 'na stolu, ispod stola, iznad, iza, ispred, između', ru: 'предлоги места', set: 'A' },
    { id: 'r20-uredjaji', sr: 'veš mašina, frižider, šporet, usisivač, pegla', ru: 'техника', set: 'A' }
  ],

  verbs: {
    cekati: { inf: 'čekati', ru: 'ждать', imp: { ti: 'čekaj', vi: 'čekajte' } },
    kupati: { inf: 'kupati se', ru: 'купаться', pos: { ja: 'se kupam', ti: 'se kupaš', on: 'se kupa', mi: 'se kupamo', vi: 'se kupate', oni: 'se kupaju' }, neg: { ja: 'se ne kupam', ti: 'se ne kupaš', on: 'se ne kupa', mi: 'se ne kupamo', vi: 'se ne kupate', oni: 'se ne kupaju' }, l: { m: 'se kupao', f: 'se kupala', n: 'se kupalo', mpl: 'se kupali', fpl: 'se kupale' } },
    bojati: { inf: 'bojati se', ru: 'бояться', pos: { ja: 'se bojim', ti: 'se bojiš', on: 'se boji', mi: 'se bojimo', vi: 'se bojite', oni: 'se boje' }, neg: { ja: 'se ne bojim', ti: 'se ne bojiš', on: 'se ne boji', mi: 'se ne bojimo', vi: 'se ne bojite', oni: 'se ne boje' }, l: { m: 'se bojao', f: 'se bojala', n: 'se bojalo', mpl: 'se bojali', fpl: 'se bojale' } },
    secati: { inf: 'sećati se', ru: 'помнить', pos: { ja: 'se sećam', ti: 'se sećaš', on: 'se seća', mi: 'se sećamo', vi: 'se sećate', oni: 'se sećaju' }, neg: { ja: 'se ne sećam', ti: 'se ne sećaš', on: 'se ne seća', mi: 'se ne sećamo', vi: 'se ne sećate', oni: 'se ne sećaju' }, l: { m: 'se sećao', f: 'se sećala', n: 'se sećalo', mpl: 'se sećali', fpl: 'se sećale' } },
    platiti: { inf: 'platiti', ru: 'платить', pos: { ja: 'platim', ti: 'platiš', on: 'plati', mi: 'platimo', vi: 'platite', oni: 'plate' }, neg: { ja: 'ne platim', ti: 'ne platiš', on: 'ne plati', mi: 'ne platimo', vi: 'ne platite', oni: 'ne plate' }, l: { m: 'platio', f: 'platila', n: 'platilo', mpl: 'platili', fpl: 'platile' } },
    razboleti: { inf: 'razboleti se', ru: 'заболеть', l: { m: 'se razboleo', f: 'se razbolela', n: 'se razbolelo', mpl: 'se razboleli', fpl: 'se razbolele' } },
    zakazati: { inf: 'zakazati', ru: 'записаться', pos: { ja: 'zakažem', ti: 'zakažeš', on: 'zakaže', mi: 'zakažemo', vi: 'zakažete', oni: 'zakažu' }, neg: { ja: 'ne zakažem', ti: 'ne zakažeš', on: 'ne zakaže', mi: 'ne zakažemo', vi: 'ne zakažete', oni: 'ne zakažu' }, l: { m: 'zakazao', f: 'zakazala', n: 'zakazalo', mpl: 'zakazali', fpl: 'zakazale' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '20.1',
      title: 'Lekar, banka, salon',
      ru: 'Повторение: симптомы, банк, салон; императив и союзы',
      goals: [
        'вспомнить лексику врача, банка и салона',
        'быстро образовать утвердительный и отрицательный императив',
        'подобрать союз и порядковое числительное'
      ],
      blocks: [
        {
          type: 'text', min: 3, title: 'Ponavljanje · как проходим',
          html: '<p>Урок 20 — повторение уроков 16–19: врач и скорая, банк и деньги, салоны красоты, дом и техника; императив (в том числе отрицательный), возвратные глаголы, союзы, порядковые числительные, предлоги места. В оригинале это квиз и сводный словарь; здесь — два занятия с упражнениями и тестом. Перед занятием пройдите карточки в разделе <b>Повторение</b>: там накопились все слова четырёх уроков.</p>'
        },
        {
          type: 'sort', min: 6, title: 'Gde to čujemo? · где это говорят',
          groups: ['Kod lekara', 'U banci', 'U salonu'],
          items: [
            { w: 'Boli me glava.', g: 'Kod lekara' }, { w: 'Kolika je temperatura?', g: 'Kod lekara' }, { w: 'Imate li osiguranje?', g: 'Kod lekara' }, { w: 'Dajemo infuziju.', g: 'Kod lekara' },
            { w: 'Želim da otvorim račun.', g: 'U banci' }, { w: 'Koji je vaš izvor prihoda?', g: 'U banci' }, { w: 'Unesite pin broj.', g: 'U banci' }, { w: 'Podižem gotovinu.', g: 'U banci' },
            { w: 'Želim da zakažem termin.', g: 'U salonu' }, { w: 'Fade šišanje i štucovanje brade.', g: 'U salonu' }, { w: 'Skidanje gel laka.', g: 'U salonu' }, { w: 'Nemojte kasniti!', g: 'U salonu' }
          ]
        },
        {
          type: 'gap', bank: true, min: 6, title: 'Simptomi i usluge · слово по контексту',
          items: [
            'Popio je mnogo piva, sada ima {mamurluk}.', 'Nos joj curi, ima {kijavicu}.', 'Slomio je ruku, to je {prelom}.', 'Sedela je ceo dan za ekranom, ima {glavobolju}.',
            'Kosa mi je duga, idem u {frizerski salon}.', 'Brada mi je čupava, idem u {berbernicu}.', 'Bole me leđa, idem na {masažu}.', 'Nokti su loši, idem u {salon za nokte}.'
          ]
        },
        {
          type: 'gap', min: 8, title: 'Imperativ · утвердительный и отрицательный',
          note: 'Впишите форму для указанного лица.',
          items: [
            'čekati, ti: {Čekaj}! — {Ne čekaj|Nemoj čekati}!', 'govoriti, vi: {Govorite}! — {Ne govorite|Nemojte govoriti}!', 'reći, vi: {Recite}! — {Nemojte reći|Ne recite}!',
            'ići, ti: {Idi}! — {Ne idi|Nemoj ići}!', 'pomoći, vi: {Pomozite}! — {Nemojte pomoći}!', 'šišati se, vi: {Šišajte se}! — {Ne šišajte se|Nemojte se šišati}!',
            'pušiti, ti: {Puši}! — {Ne puši|Nemoj pušiti}!', 'čekati, on: {Neka čeka}! — {Neka ne čeka}!'
          ]
        },
        {
          type: 'mc', min: 5, title: 'Veznici · выберите союз',
          items: [
            { q: 'Sačekaj, … podignem novac.', options: ['dok', 'nego', 'jer'], a: 'dok' }, { q: 'Platim karticom, … nemam keš.', options: ['jer', 'čim', 'nego'], a: 'jer' },
            { q: '… stignem, pozvaću te.', options: ['Čim', 'Dok', 'Nego'], a: 'Čim' }, { q: 'Više volim čaj … kafu.', options: ['nego', 'ali', 'jer'], a: 'nego' },
            { q: 'Dođite … potpišemo dokumente.', options: ['da', 'jer', 'dok'], a: 'da' }, { q: 'Želi da otvori račun, … ne može.', options: ['ali', 'jer', 'čim'], a: 'ali' }
          ]
        },
        {
          type: 'qa', mode: 'transform', min: 5, title: 'Datumi · напишите дату (генитив)',
          items: [
            { q: '25. 12.', a: ['dvadeset petog decembra'] }, { q: '1. 1.', a: ['prvog januara'] }, { q: '14. 2.', a: ['četrnaestog februara'] }, { q: '8. 3.', a: ['osmog marta'] },
            { q: '9. 5.', a: ['devetog maja'] }, { q: '31. 12.', a: ['trideset prvog decembra'] }, { q: '3. sprat', a: ['treći sprat'] }, { q: '10. sprat', a: ['deseti sprat'] }
          ]
        },
        {
          type: 'gap', min: 12, title: 'Test 1 · врач, банк, салон',
          note: 'Без подсказок. Заполняете по очереди, потом разбираете ошибки.',
          items: [
            'Zdravo! Zovem hitnu pomoć. Imam visoku {temperaturu} i {kašalj}. <i>(температуру, кашель)</i>',
            'Kolika je temperatura? — {39} je. Kada ste se {razboleli}? — Pre tri dana. <i>(тридцать девять; заболели)</i>',
            '{Recite} (reći, vi), šta vas boli? {Pomozite} (pomoći, vi) mi!',
            'Želim da {otvorim} tekući {račun}. Koja je {svrha}? — Za čuvanje novca. <i>(открыть, счёт, цель)</i>',
            '{Ubacite} karticu, {unesite} pin broj, {podignite} novac. <i>(вставьте, введите, снимите)</i>',
            'Slavimo Novu godinu {trideset prvog} decembra i {prvog} januara.',
            'Želim da {zakažem} termin kod frizera. Koji datum vam {odgovara}? {Nemojte} kasniti!',
            '{Ne šišajte se} kratko! Neka on {ne} sređuje bradu sam. <i>(не стригитесь; не)</i>',
            'Sačekaj {dok} podignem novac. Platim karticom, {jer} imam račun. {Čim} uzmeš kredit, kupićeš stan.'
          ]
        },
        {
          type: 'speak', min: 12, title: 'Tri situacije · три ролевые игры',
          note: 'По 4 минуты на сцену, меняйтесь ролями: 1) звонок в скорую; 2) открытие счёта в банке; 3) запись в салон. В каждой — минимум два императива.',
          items: [
            { q: 'Hitna: Slušam vas, šta se desilo?', sample: 'Boli me stomak, imam mučninu i temperaturu 38. Razboleo sam se sinoć. Adresa je…' },
            { q: 'Radnik banke: Koja je svrha otvaranja računa?', sample: 'Za platu. Radim kao programer. Evo pasoš i beli karton. Popunite formular? Važi.' },
            { q: 'Salon: Koji datum vam odgovara?', sample: 'Može li subota u 11? Muško šišanje i brada. — Nemojte kasniti! — Doći ću na vreme.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'Boli me… Imam… Kolika je temperatura? Kada ste se razboleli?',
            'otvoriti račun, podići novac, ubacite karticu, unesite pin',
            'zakazati termin, koji datum vam odgovara, nemojte kasniti',
            'čekaj / ne čekaj / nemoj čekati; čim, dok, jer, nego, da'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: сводка уроков 16–19', est: 6, set: 'A' },
        { type: 'conj', tense: 'past', title: 'Тренажёр: перфект (заболеть, платить, записаться)', est: 5, verbs: ['razboleti', 'platiti', 'zakazati'], rounds: 10 },
        {
          type: 'qa', mode: 'transform', title: 'Imperativ · утвердительная форма', est: 5,
          items: [
            { q: 'čekati, vi', a: ['čekajte'] }, { q: 'govoriti, ti', a: ['govori'] }, { q: 'reći, ti', a: ['reci'] }, { q: 'pomoći, vi', a: ['pomozite'] },
            { q: 'popuniti, vi', a: ['popunite'] }, { q: 'potpisati, ti', a: ['potpiši'] }, { q: 'ubaciti, vi', a: ['ubacite'] }, { q: 'kasniti, ti (odrični)', a: ['ne kasni', 'nemoj kasniti'] },
            { q: 'pušiti, vi (odrični)', a: ['ne pušite', 'nemojte pušiti'] }, { q: 'ići, mi', a: ['hajde da idemo', 'idemo', 'hajdemo'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Imam visoku temperaturu, kašalj i bol u telu.'] }, { a: ['Želim da otvorim račun u vašoj banci.'] }, { a: ['Ubacite karticu i unesite pin broj.'] },
            { a: ['Želim da zakažem termin kod frizera.'] }, { a: ['Nemojte kasniti, imamo mnogo klijenata.'] }, { a: ['Čim uzmeš kredit, kupićeš sebi stan.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод: уроки 16–18', est: 8,
          items: [
            { q: 'У меня болит голова, и я устал.', a: ['Boli me glava i umoran sam.', 'Boli me glava i umorna sam.'] },
            { q: 'Скажите, когда вы заболели?', a: ['Recite, kada ste se razboleli?'] },
            { q: 'Я хочу снять деньги в банкомате.', a: ['Želim da podignem novac na bankomatu.', 'Hoću da podignem novac na bankomatu.'] },
            { q: 'Заполните бланк и подпишите.', a: ['Popunite formular i potpišite.'] },
            { q: 'Какая дата вам подходит?', a: ['Koji datum vam odgovara?'] },
            { q: 'Не стригитесь коротко!', a: ['Ne šišajte se kratko!', 'Nemojte se šišati kratko!'] },
            { q: 'Подожди, пока я сниму деньги.', a: ['Sačekaj dok podignem novac.', 'Čekaj dok podignem novac.'] },
            { q: 'Рождество — седьмого января.', a: ['Božić je sedmog januara.', 'Božić je 7. januara.'] }
          ]
        },
        {
          type: 'write', title: 'Uputstvo · инструкция в императиве', est: 7, key: 'hw-20.1-uputstvo',
          note: 'Напишите инструкцию из 8 шагов в императиве (vi): как снять деньги в банкомате или как записаться к врачу. Минимум два отрицательных императива.',
          sample: 'Kako podići novac: 1. Ubacite karticu. 2. Unesite pin broj. 3. Nemojte pokazivati pin drugima! 4. Izaberite „podizanje gotovine“. 5. Unesite iznos. 6. Sačekajte. 7. Uzmite novac i karticu. 8. Ne zaboravite priznanicu!'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '20.2',
      title: 'Kuća i povratni glagoli',
      ru: 'Повторение: возвратные глаголы, предлоги места, техника; большой тест',
      goals: [
        'поставить se на нужное место',
        'описать, где что находится в доме',
        'пройти тест по урокам 16–19'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашнюю инструкцию. Партнёр выполняет шаги «в воздухе» и повторяет.',
          items: [{ q: 'Ubacite karticu…' }]
        },
        {
          type: 'order', min: 7, title: 'Povratni glagoli · порядок слов',
          items: [
            'Ujutru se umivam i češljam.', 'Ne sećam se njegovog imena.', 'Deca se boje mraka.', 'Sviđa mi se ova frizura.', 'Zašto se ne smeješ?', 'Koncert počinje u osam.'
          ]
        },
        {
          type: 'gap', min: 6, title: 'Sa se ili bez se?',
          items: [
            'Mama {kupa} (kupati) bebu, a tata {se kupa} (kupati se) u reci.', 'Ona {češlja} (češljati) ćerku i zatim {se češlja} (češljati se).',
            'Film {počinje} (počinjati) u devet.', 'Mi {se družimo} (družiti se) sa komšijama.', 'Uvek {se žurim|žurim} (žuriti) ujutru.', 'Baka {se seća} (sećati se) rata.'
          ]
        },
        {
          type: 'conj', min: 5, title: 'Trening · возвратные глаголы',
          verbs: ['kupati', 'bojati', 'secati'], rounds: 8
        },
        {
          type: 'gap', min: 7, title: 'Predlozi mesta · впишите предлог и форму',
          items: [
            'Lampa je {na stolu} (на столе).', 'Mačka spava {ispod kreveta} (под кроватью).', 'Slika visi {iznad kauča} (над диваном).', 'Usisivač je {iza vrata} (за дверью).',
            'Televizor je {između fotelja} (между креслами).', 'Tepih je {ispred kamina} (перед камином).', 'Peškir je {desno od lavaboa} (справа от раковины).', 'Sapun je {u komodi} (в комоде).'
          ]
        },
        {
          type: 'match', min: 4, title: 'Uređaji · прибор и назначение',
          pairs: [
            ['veš mašina', 'pere odeću'], ['mašina za pranje sudova', 'pere tanjire'], ['usisivač', 'čisti tepih'], ['frižider', 'hladi hranu'],
            ['šporet', 'kuvamo na njemu'], ['pegla', 'pegla košulje'], ['fen', 'suši kosu'], ['klima', 'hladi sobu leti']
          ]
        },
        {
          type: 'gap', min: 14, title: 'Test 2 · дом, возвратные глаголы, все темы',
          note: 'Без подсказок. 15 минут, потом разбор.',
          items: [
            'Ujutru {se} budim u sedam, {se} umivam i {se} češljam. <i>(частица)</i>',
            'Ne {se bojim|bojim se} (bojati se) pasa, ali {se sećam} (sećati se) da me je pas ujeo.',
            '{Sviđa} mi se ovaj stan. Koncert {počinje} u osam. <i>(нравится; начинается)</i>',
            'Krevet je {ispod} prozora, slika je {iznad} kreveta, ormar je {iza} vrata. <i>(под, над, за)</i>',
            'Oprala sam veš u {veš mašini} i sudove u {mašini za sudove}. <i>(стиральной машине, посудомойке)</i>',
            'Boli me {zub}, idem kod {zubara}. <i>(зуб; стоматолога)</i>',
            'Platim {karticom} ili {kešom}? Treba mi {priznanica}. <i>(картой, наличными; чек)</i>',
            'Idem u {berbernicu} da sredim bradu, a žena ide u {salon za nokte}.',
            '{Čekaj}! (čekati, ti) {Nemoj} kasniti! Neka on {ne} puši ovde!',
            'Rođendan slavim {petog} maja, a Božić {sedmog} januara. <i>(5., 7.)</i>',
            'Više volim keš {nego} karticu, {jer} na pijaci nema bankomata.'
          ]
        },
        {
          type: 'speak', min: 10, title: 'Moj dom i moj dan · итоговый разговор',
          note: 'Каждый рассказывает 2 минуты: как выглядит квартира (предлоги места, техника), что делаете утром (возвратные глаголы), куда ходите (врач, банк, салон). Партнёр задаёт три вопроса.',
          items: [
            { q: 'Šta je gde u tvom stanu?', sample: 'Kauč je ispred televizora, veš mašina je u kupatilu, klima je iznad vrata.' },
            { q: 'Šta radiš ujutru? Čega se bojiš?', sample: 'Budim se, umivam se i žurim se na posao. Bojim se da nisam isključio peglu.' },
            { q: 'Kada si poslednji put bio kod lekara, u banci, u salonu?', sample: 'Kod lekara sam bio u martu, u banci prošle nedelje, u berbernici juče.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · что дальше',
          points: [
            'Уроки 16–19 закрыты: врач, банк, салон, дом; императив, возвратные глаголы, союзы, предлоги места',
            'Карточки продолжают приходить в «Повторение»',
            'Дальше — урок 21'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: сводка (обратная сторона)', est: 6, set: 'A' },
        { type: 'conj', title: 'Тренажёр: возвратные и обычные глаголы', est: 5, verbs: ['kupati', 'bojati', 'secati', 'platiti', 'zakazati'], rounds: 12 },
        {
          type: 'qa', mode: 'transform', title: 'Predlozi · переведите', est: 5,
          items: [
            { q: 'на столе', a: ['na stolu'] }, { q: 'под столом', a: ['ispod stola'] }, { q: 'над столом', a: ['iznad stola'] }, { q: 'за столом (позади)', a: ['iza stola'] },
            { q: 'перед столом', a: ['ispred stola'] }, { q: 'между столами', a: ['između stolova'] }, { q: 'в шкафу', a: ['u ormaru'] }, { q: 'слева от кровати', a: ['levo od kreveta'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Ujutru se umivam i češljam.'] }, { a: ['Ne sećam se njegovog imena.'] }, { a: ['Mačka spava ispod kreveta.'] },
            { a: ['Slika visi iznad kauča.'] }, { a: ['Bojim se da nisam isključio peglu.'] }, { a: ['Sviđa mi se ova frizura.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод: всё вместе', est: 9,
          items: [
            { q: 'Я не боюсь собак.', a: ['Ne bojim se pasa.', 'Ja se ne bojim pasa.'] },
            { q: 'Мне нравится эта квартира.', a: ['Sviđa mi se ovaj stan.'] },
            { q: 'Пылесос за дверью, а утюг в комоде.', a: ['Usisivač je iza vrata, a pegla je u komodi.'] },
            { q: 'Не опаздывай к врачу!', a: ['Nemoj kasniti kod lekara!', 'Ne kasni kod lekara!'] },
            { q: 'Как только я сниму деньги, мы пойдём в салон.', a: ['Čim podignem novac, idemo u salon.', 'Čim podignem novac, ići ćemo u salon.'] },
            { q: 'Помнишь ли ты его день рождения? — Помню, восьмого марта.', a: ['Da li se sećaš njegovog rođendana? Sećam se, osmog marta.', 'Sećaš li se njegovog rođendana? Sećam se, osmog marta.'] },
            { q: 'Стиральная машина сломалась, помогите!', a: ['Veš mašina se pokvarila, pomozite!', 'Veš mašina je pokvarena, pomozite!'] },
            { q: 'Выключи плиту и не забудь ключи.', a: ['Isključi šporet i ne zaboravi ključeve.', 'Isključi šporet i nemoj zaboraviti ključeve.'] }
          ]
        },
        {
          type: 'write', title: 'Jedan dan u Beogradu · сочинение + запись', est: 12, key: 'hw-20.2-dan', record: true,
          note: '12 предложений о дне, в котором вы были у врача, в банке и в салоне: возвратные глаголы, императив (что вам сказали), союзы, предлоги места. Запишите чтение вслух.',
          sample: 'Juče sam se probudio rano, jer me je boleo zub. Otišao sam kod zubara. Zubar je rekao: „Otvorite usta i nemojte se bojati!“ Posle sam išao u banku da podignem novac. Radnica je rekla: „Ubacite karticu i unesite pin.“ Čim sam podigao novac, otišao sam u berbernicu. Frizer je rekao: „Sedite ovde, ispred ogledala.“ Sredio mi je bradu. Kod kuće sam se odmarao na kauču ispred televizora. Sećam se da sam zaboravio da isključim peglu! Ali sve je bilo u redu.'
        }
      ]
    }
  ]
});
