// Lekcija 28 - Tehnika i uređaji. Three 60-minute sessions: home appliances + flat ad + household items, prepositions of place, gadgets + reflexive verbs.
COURSE.register({
  n: 28,
  title: 'Tehnika i uređaji',
  ru: 'Бытовая техника, квартира и предметы в ней, предлоги места, гаджеты и возвратные глаголы',

  vocab: [
    { id: 'frizider', sr: 'frižider, zamrzivač', ru: 'холодильник, морозильник', set: 'A' },
    { id: 'mikrotalasna', sr: 'mikrotalasna peć', ru: 'микроволновка', set: 'A' },
    { id: 'ves-masina', sr: 'veš mašina, mašina za sušenje', ru: 'стиральная машина, сушилка', set: 'A' },
    { id: 'cajnik', sr: 'električni čajnik', ru: 'электрочайник', set: 'A' },
    { id: 'sporet', sr: 'šporet, rerna', ru: 'плита, духовка', set: 'A' },
    { id: 'sudomasina', sr: 'mašina za sudove, sudopera', ru: 'посудомойка, мойка (раковина на кухне)', set: 'A' },
    { id: 'usisivac', sr: 'usisivač, bojler, grejalica', ru: 'пылесос, бойлер, обогреватель', set: 'A' },
    { id: 'klima28', sr: 'klima, aspirator', ru: 'кондиционер, вытяжка', set: 'A' },
    { id: 'stan-izdavanje', sr: 'stan za izdavanje, izdaje se', ru: 'квартира в аренду, сдаётся', set: 'A' },
    { id: 'opremljen', sr: 'opremljen, namešten', ru: 'оборудован, меблирован', set: 'A' },
    { id: 'spavaca', sr: 'spavaća soba, dnevni boravak', ru: 'спальня, гостиная', set: 'A' },
    { id: 'kupatilo28', sr: 'kupatilo, terasa, hodnik', ru: 'ванная, терраса, коридор', set: 'A' },
    { id: 'kirija', sr: 'kirija, dodatna plata', ru: 'арендная плата, доплата', set: 'A' },
    { id: 'povrsina', sr: 'površina, kvadratni metar, sprat', ru: 'площадь, квадратный метр, этаж', set: 'A' },
    { id: 'ugradjen', sr: 'ugrađen — sa ugrađenim zamrzivačem', ru: 'встроенный', set: 'A' },
    { id: 'dogovoriti', sr: 'dogovoriti se — možemo da se dogovorimo', ru: 'договориться', set: 'A' },
    { id: 'sto-stolica', sr: 'sto, stolica, lampa, radijator', ru: 'стол, стул, лампа, батарея', set: 'A' },
    { id: 'ormar', sr: 'ormar, komoda, ogledalo, tepih', ru: 'шкаф, комод, зеркало, ковёр', set: 'A' },
    { id: 'krevet', sr: 'krevet, jastuk, ćebe, čaršav', ru: 'кровать, подушка, одеяло, простыня', set: 'A' },
    { id: 'kauc', sr: 'kauč, slike, vešalica, stepenište', ru: 'диван, картины, вешалка, лестница', set: 'A' },
    { id: 'peskir', sr: 'peškir, tuš, lavabo, kada, slavina', ru: 'полотенце, душ, раковина, ванна, кран', set: 'A' },
    { id: 'sundjer', sr: 'sunđer, sapun, češalj', ru: 'губка, мыло, расчёска', set: 'A' },
    { id: 'cetkica', sr: 'četkica za zube, pasta za zube, VC šolja', ru: 'зубная щётка, зубная паста, унитаз', set: 'A' },

    { id: 'na-lok', sr: 'na + lokativ — Lampa je na stolu.', ru: 'на — Лампа на столе.', set: 'B' },
    { id: 'ispod', sr: 'ispod + genitiv — Mačka je ispod stolice.', ru: 'под — Кошка под стулом.', set: 'B' },
    { id: 'iznad', sr: 'iznad + genitiv — Šešir je iznad ogledala.', ru: 'над — Шляпа над зеркалом.', set: 'B' },
    { id: 'izmedju', sr: 'između + genitiv — između stola i ogledala', ru: 'между — между столом и зеркалом', set: 'B' },
    { id: 'iza', sr: 'iza + genitiv — Lampa je iza stola.', ru: 'за — Лампа за столом.', set: 'B' },
    { id: 'u-lok', sr: 'u + lokativ — Papir je u komodi.', ru: 'в — Бумага в комоде.', set: 'B' },
    { id: 'pored', sr: 'pored + genitiv — pored prozora', ru: 'рядом с — рядом с окном', set: 'B' },
    { id: 'plafon', sr: 'plafon, pod, zid', ru: 'потолок, пол, стена', set: 'B' },
    { id: 'polica', sr: 'polica, ugao, centar', ru: 'полка, угол, центр', set: 'B' },
    { id: 'jastuci', sr: 'jastuci su između prozora i ogledala', ru: 'подушки между окном и зеркалом', set: 'B' },
    { id: 'ukljuciti', sr: 'uključiti — isključiti', ru: 'включить — выключить', set: 'B' },
    { id: 'stoji-lezi', sr: 'stoji, leži, visi', ru: 'стоит, лежит, висит', set: 'B' },

    { id: 'telefon28', sr: 'telefon, tablet', ru: 'телефон, планшет', set: 'C' },
    { id: 'laptop', sr: 'laptop / kompjuter, ekran, tastatura, miš', ru: 'ноутбук / компьютер, экран, клавиатура, мышь', set: 'C' },
    { id: 'slusalice', sr: 'slušalice — bežične / žične', ru: 'наушники — беспроводные / проводные', set: 'C' },
    { id: 'punjac', sr: 'punjač, baterija, prazna baterija', ru: 'зарядка, батарея, севшая батарея', set: 'C' },
    { id: 'zvucnik', sr: 'zvučnik, kamera, štampač', ru: 'колонка, камера, принтер', set: 'C' },
    { id: 'pametni-sat', sr: 'pametni sat', ru: 'умные часы', set: 'C' },
    { id: 'aplikacija', sr: 'aplikacija, internet, vaj-faj', ru: 'приложение, интернет, вай-фай', set: 'C' },
    { id: 'puniti', sr: 'puniti telefon, koristiti tehniku', ru: 'заряжать телефон, пользоваться техникой', set: 'C' },
    { id: 'olaksava', sr: 'Tehnika nam olakšava život.', ru: 'Техника облегчает нам жизнь.', set: 'C' },
    { id: 'srcani-ritam', sr: 'izmeravati srčani ritam', ru: 'измерять пульс', set: 'C' },
    { id: 'graficki-tablet', sr: 'grafički tablet i olovka', ru: 'графический планшет и стилус', set: 'C' },
    { id: 'kvalitet-slike', sr: 'dobar kvalitet slike', ru: 'хорошее качество изображения', set: 'C' },
    { id: 'buditi-se', sr: 'buditi se, ja se budim', ru: 'просыпаться', set: 'C' },
    { id: 'tusirati-se', sr: 'tuširati se, kupati se', ru: 'принимать душ, купаться', set: 'C' },
    { id: 'brijati-se', sr: 'brijati se, češljati se, šminkati se', ru: 'бриться, причёсываться, краситься', set: 'C' },
    { id: 'odmarati-se', sr: 'odmarati se, smejati se', ru: 'отдыхать, смеяться', set: 'C' },
    { id: 'nalaziti-se', sr: 'nalaziti se — Gde se nalazi?', ru: 'находиться — Где находится?', set: 'C' }
  ],

  verbs: {
    nalaziti: { inf: 'nalaziti se', ru: 'находиться', pos: { ja: 'se nalazim', ti: 'se nalaziš', on: 'se nalazi', mi: 'se nalazimo', vi: 'se nalazite', oni: 'se nalaze' }, neg: { ja: 'se ne nalazim', ti: 'se ne nalaziš', on: 'se ne nalazi', mi: 'se ne nalazimo', vi: 'se ne nalazite', oni: 'se ne nalaze' }, l: { m: 'se nalazio', f: 'se nalazila', n: 'se nalazilo', mpl: 'se nalazili', fpl: 'se nalazile' } },
    tusirati: { inf: 'tuširati se', ru: 'принимать душ', pos: { ja: 'se tuširam', ti: 'se tuširaš', on: 'se tušira', mi: 'se tuširamo', vi: 'se tuširate', oni: 'se tuširaju' }, neg: { ja: 'se ne tuširam', ti: 'se ne tuširaš', on: 'se ne tušira', mi: 'se ne tuširamo', vi: 'se ne tuširate', oni: 'se ne tuširaju' }, l: { m: 'se tuširao', f: 'se tuširala', n: 'se tuširalo', mpl: 'se tuširali', fpl: 'se tuširale' } },
    buditi: { inf: 'buditi se', ru: 'просыпаться', pos: { ja: 'se budim', ti: 'se budiš', on: 'se budi', mi: 'se budimo', vi: 'se budite', oni: 'se bude' }, neg: { ja: 'se ne budim', ti: 'se ne budiš', on: 'se ne budi', mi: 'se ne budimo', vi: 'se ne budite', oni: 'se ne bude' }, l: { m: 'se budio', f: 'se budila', n: 'se budilo', mpl: 'se budili', fpl: 'se budile' } },
    odmarati: { inf: 'odmarati se', ru: 'отдыхать', pos: { ja: 'se odmaram', ti: 'se odmaraš', on: 'se odmara', mi: 'se odmaramo', vi: 'se odmarate', oni: 'se odmaraju' }, neg: { ja: 'se ne odmaram', ti: 'se ne odmaraš', on: 'se ne odmara', mi: 'se ne odmaramo', vi: 'se ne odmarate', oni: 'se ne odmaraju' }, l: { m: 'se odmarao', f: 'se odmarala', n: 'se odmaralo', mpl: 'se odmarali', fpl: 'se odmarale' } },
    koristiti: { inf: 'koristiti', ru: 'пользоваться', pos: { ja: 'koristim', ti: 'koristiš', on: 'koristi', mi: 'koristimo', vi: 'koristite', oni: 'koriste' }, neg: { ja: 'ne koristim', ti: 'ne koristiš', on: 'ne koristi', mi: 'ne koristimo', vi: 'ne koristite', oni: 'ne koriste' }, l: { m: 'koristio', f: 'koristila', n: 'koristilo', mpl: 'koristili', fpl: 'koristile' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '28.1',
      title: 'Kućni uređaji i stan',
      ru: 'Бытовая техника, объявление о квартире, предметы в доме',
      goals: [
        'назвать 14 бытовых приборов и рассказать, что есть в вашей квартире',
        'прочитать объявление о квартире и оценить утверждения: tačno, netačno, ne zna se',
        'рассортировать предметы по комнатам: кухня, спальня, ванная'
      ],
      blocks: [
        {
          type: 'text', min: 7, title: 'Bela tehnika · бытовая техника',
          note: 'Первый слайд из курса; второй слайд не сохранился, его слова в списке.',
          img: 'img/l28_bela.png',
          html: '<ul><li>[[frižider]] — холодильник, [[zamrzivač]] — морозильник, [[mikrotalasna peć]] — микроволновка</li>' +
            '<li>[[veš mašina]] — стиральная машина, [[mašina za sušenje]] — сушилка, [[mašina za sudove]] — посудомойка</li>' +
            '<li>[[električni čajnik]] — электрочайник, [[šporet]] — плита, [[rerna]] — духовка, [[aspirator]] — вытяжка</li>' +
            '<li>[[usisivač]] — пылесос, [[bojler]] — бойлер, [[grejalica]] — обогреватель, [[klima]] — кондиционер</li></ul>' +
            '<p>[[uključiti]] — включить, [[isključiti]] — выключить, [[ugrađen]] — встроенный, [[opremljen]] — оборудован.</p>'
        },
        {
          type: 'speak', min: 5, title: 'Pitanja · вопросы из курса',
          items: [
            { q: 'Koju tehniku imate u svom stanu?', sample: 'Imam frižider sa zamrzivačem, veš mašinu, šporet sa rernom i klimu.' },
            { q: 'Šta vam fali?', sample: 'Fali mi mašina za sudove i mašina za sušenje.' }
          ]
        },
        {
          type: 'text', min: 5, title: 'Stan za izdavanje · объявление из курса',
          note: 'Прослушайте, потом прочитайте вслух.',
          html: '<p>[[Izdaje se stan, opština Stari grad, ulica Cara Dušana 27. Stan je odlično opremljen, ima sve što treba za udoban život. Objekat ima dve spavaće sobe, kupatilo, terasu i kuhinju ujedinjenu sa dnevnim boravkom.]]</p>' +
            '<p>[[U kupatilu ima veš mašina, mašina za sušenje i grejalica. Kuhinja je opremljena šporetom sa rernom, mikrotalasnom peći, takođe kao i frižiderom sa ugrađenim zamrzivačem.]]</p>' +
            '<p>[[Stan ima klime u spavaćim sobama, ukoliko vam treba električni čajnik i usisivač — možemo da se dogovorimo uz dodatnu platu. Kirija je 1200 evra mesečno, površina je 112 metara kvadratnih, treći sprat. Stan je namešten i ima terasu.]]</p>'
        },
        {
          type: 'mc', min: 6, title: 'Istina, laž, neodređeno · по объявлению',
          note: 'Упражнение из курса: tačno, netačno или ne zna se (в тексте нет информации).',
          items: [
            { q: 'Stan je renoviran. — …', options: ['tačno', 'netačno', 'ne zna se'], a: 'ne zna se', ru: 'о ремонте в объявлении ничего нет' },
            { q: 'Ima 6 prostorija. — …', options: ['tačno', 'netačno', 'ne zna se'], a: 'netačno', ru: 'две спальни, ванная, терраса, кухня с гостиной — пять' },
            { q: 'Frižider ima zamrzivač. — …', options: ['tačno', 'netačno', 'ne zna se'], a: 'tačno' },
            { q: 'U celom stanu su klime. — …', options: ['tačno', 'netačno', 'ne zna se'], a: 'netačno', ru: 'только в спальнях' },
            { q: 'Čajnik i usisivač nisu u ponudi. — …', options: ['tačno', 'netačno', 'ne zna se'], a: 'tačno', ru: 'только за доплату' },
            { q: 'Stan nije prazan, ne treba kupovati dodatni nameštaj. — …', options: ['tačno', 'netačno', 'ne zna se'], a: 'tačno', ru: 'stan je namešten' }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Dopunite · факты из объявления',
          items: [
            'Stan se nalazi u opštini {Stari grad}, u ulici Cara Dušana {27}.', 'Objekat ima {dve} spavaće sobe, kupatilo, {terasu} i kuhinju.',
            'U kupatilu ima veš mašina, mašina za {sušenje} i grejalica.', 'Kuhinja je opremljena {šporetom} sa rernom i mikrotalasnom {peći}.',
            'Kirija je {1200} evra mesečno, površina je {112} metara kvadratnih.', 'Stan je {namešten} i ima terasu.'
          ]
        },
        {
          type: 'text', min: 6, title: 'Kućni pribor · предметы в доме',
          note: 'Словарь из курса. Читайте по комнатам.',
          tables: [
            { caption: 'Po sobama', head: ['soba', 'reči'], rows: [
              ['dnevna soba', 'sto, stolica, lampa, kauč, tepih, slike, komoda, radijator'],
              ['spavaća soba', 'krevet, jastuk, ćebe, čaršav, ormar, ogledalo, vešalica'],
              ['kupatilo', 'peškir, tuš, lavabo, kada, slavina, sunđer, sapun, četkica za zube, pasta za zube, češalj, VC šolja'],
              ['hodnik', 'vešalica, ogledalo, stepenište']
            ] }
          ],
          html: '<p>[[Na krevetu su jastuk i ćebe.]] [[U kupatilu je kada sa tušem.]] [[Peškir visi pored lavaboa.]] [[Vešalica je u hodniku.]]</p>'
        },
        {
          type: 'sort', min: 7, title: 'Razvrstajte · где что стоит',
          groups: ['Kupatilo', 'Spavaća soba', 'Dnevna soba'],
          items: [
            { w: 'tuš', g: 'Kupatilo' }, { w: 'lavabo', g: 'Kupatilo' }, { w: 'kada', g: 'Kupatilo' }, { w: 'slavina', g: 'Kupatilo' }, { w: 'sunđer', g: 'Kupatilo' }, { w: 'sapun', g: 'Kupatilo' },
            { w: 'četkica za zube', g: 'Kupatilo' }, { w: 'pasta za zube', g: 'Kupatilo' }, { w: 'peškir', g: 'Kupatilo' }, { w: 'VC šolja', g: 'Kupatilo' },
            { w: 'krevet', g: 'Spavaća soba' }, { w: 'jastuk', g: 'Spavaća soba' }, { w: 'ćebe', g: 'Spavaća soba' }, { w: 'čaršav', g: 'Spavaća soba' }, { w: 'ormar', g: 'Spavaća soba' },
            { w: 'kauč', g: 'Dnevna soba' }, { w: 'tepih', g: 'Dnevna soba' }, { w: 'slike', g: 'Dnevna soba' }, { w: 'sto', g: 'Dnevna soba' }, { w: 'stolica', g: 'Dnevna soba' }, { w: 'komoda', g: 'Dnevna soba' }
          ]
        },
        {
          type: 'speak', min: 12, title: 'Moj stan · опишите свою квартиру',
          note: 'Каждый описывает свою квартиру как объявление: сколько комнат, какая техника, что есть в ванной и на кухне, что бы добавили. Партнёр — арендатор, задаёт вопросы: Ima li klimu? Koliko je kirija?',
          record: true,
          items: [
            { q: 'Koliko soba ima stan? Na kom je spratu?', sample: 'Stan ima jednu spavaću sobu, dnevni boravak i kupatilo. Na petom je spratu.' },
            { q: 'Koja tehnika je u kuhinji i kupatilu?', sample: 'U kuhinji je šporet sa rernom, frižider i mikrotalasna. U kupatilu je veš mašina i bojler.' },
            { q: 'Šta fali? Šta biste kupili?', sample: 'Fali mašina za sudove. Kupio bih i klimu za leto.' },
            { q: 'Kolika je kirija? Da li je stan namešten?', sample: 'Kirija je 600 evra. Stan je namešten, ima kauč, sto i ormar.' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'frižider, mikrotalasna peć, veš mašina, čajnik, šporet, rerna, usisivač, bojler, klima',
            'Izdaje se stan. Stan je opremljen i namešten. Kirija je 1200 evra mesečno.',
            'krevet, jastuk, ćebe, čaršav; tuš, lavabo, kada, slavina; kauč, tepih, komoda',
            'tačno — netačno — ne zna se'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: техника и предметы в доме', est: 9, set: 'A' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: квартира', est: 6,
          items: [
            { a: ['Izdaje se stan u opštini Stari grad.'] }, { a: ['Stan je odlično opremljen.'] }, { a: ['Kuhinja je opremljena šporetom sa rernom.'] },
            { a: ['Frižider ima ugrađen zamrzivač.'] }, { a: ['Kirija je hiljadu dvesta evra mesečno.'] }, { a: ['U kupatilu je kada sa tušem.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Какая техника у вас в квартире?', a: ['Koju tehniku imate u stanu?', 'Koju tehniku imate u svom stanu?'] },
            { q: 'Мне не хватает посудомойки.', a: ['Fali mi mašina za sudove.', 'Nedostaje mi mašina za sudove.'] },
            { q: 'Квартира меблирована и имеет террасу.', a: ['Stan je namešten i ima terasu.'] },
            { q: 'Кондиционер только в спальне.', a: ['Klima je samo u spavaćoj sobi.'] },
            { q: 'Можем договориться за доплату.', a: ['Možemo da se dogovorimo uz dodatnu platu.'] },
            { q: 'Полотенце висит рядом с раковиной.', a: ['Peškir visi pored lavaboa.'] },
            { q: 'Включи обогреватель, холодно.', a: ['Uključi grejalicu, hladno je.'] }
          ]
        },
        {
          type: 'write', title: 'Oglas · объявление о своей квартире + запись', est: 8, key: 'hw-28.1-oglas', record: true,
          note: 'Напишите объявление о сдаче своей (или воображаемой) квартиры по образцу из курса: 8 предложений. Запишите чтение вслух.',
          sample: 'Izdaje se stan, opština Vračar, ulica Njegoševa 15. Stan ima jednu spavaću sobu, dnevni boravak sa kuhinjom i kupatilo. Kuhinja je opremljena šporetom, frižiderom i mikrotalasnom peći. U kupatilu ima veš mašina i bojler. Stan ima klimu u dnevnoj sobi. Namešten je: krevet, ormar, kauč i sto. Kirija je 500 evra mesečno, površina je 45 kvadratnih metara. Drugi sprat, ima lift.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '28.2',
      title: 'Gde se nalazi? · predlozi mesta',
      ru: 'Предлоги места na, u, ispod, iznad, između, iza, pored и падежи после них',
      goals: [
        'выучить шесть предлогов места и падежи: na / u + локатив, ispod / iznad / između / iza + генитив',
        'перевести семь предложений из курса о технике в квартире',
        'описать, где что находится в комнате'
      ],
      blocks: [
        {
          type: 'text', min: 9, title: 'Predlozi · предлоги места из курса',
          note: 'В курсе после na и u написан «датив»: формы локатива и датива совпадают.',
          img: 'img/l28_predlozi.png',
          tables: [
            { caption: 'Predlozi mesta', head: ['predlog', 'padež', 'primer'], rows: [
              ['na', 'lokativ', ['Lampa je na stolu. Mačka je na stolici. Šešir visi na ogledalu.', 'Lampa je na stolu. Mačka je na stolici. Šešir visi na ogledalu.']],
              ['u', 'lokativ', ['Papir je u stolu. Papir je u komodi. Vidim sebe u ogledalu.', 'Papir je u stolu. Papir je u komodi. Vidim sebe u ogledalu.']],
              ['ispod', 'genitiv', ['Lampa je ispod stola. Mačka je ispod stolice. Šešir je ispod ogledala.', 'Lampa je ispod stola. Mačka je ispod stolice. Šešir je ispod ogledala.']],
              ['iznad', 'genitiv', ['Lampa je iznad stola. Mačka je iznad stolice. Šešir je iznad ogledala.', 'Lampa je iznad stola. Mačka je iznad stolice. Šešir je iznad ogledala.']],
              ['između', 'genitiv', ['Lampa je između stola i ogledala. Šešir je između stolice i kreveta.', 'Lampa je između stola i ogledala. Šešir je između stolice i kreveta.']],
              ['iza', 'genitiv', ['Lampa je iza stola. Mačka je iza stolice. Šešir je iza ogledala.', 'Lampa je iza stola. Mačka je iza stolice. Šešir je iza ogledala.']],
              ['pored', 'genitiv', ['Sto je pored prozora. Peškir visi pored lavaboa.', 'Sto je pored prozora. Peškir visi pored lavaboa.']]
            ] }
          ],
          html: '<p>Локатив: [[sto — na stolu]], [[stolica — na stolici]], [[ogledalo — u ogledalu]], [[polica — na polici]], [[plafon — na plafonu]]. Генитив: [[sto — stola]], [[stolica — stolice]], [[ogledalo — ogledala]], [[šporet — šporeta]], [[veš mašina — veš mašine]].</p>'
        },
        {
          type: 'text', min: 5, title: 'Gde se nalazi · кухня из курса',
          img: 'img/l28_kuhinja.png',
          html: '<ul><li>[[Lampa je na plafonu.]] — Лампа на потолке.</li><li>[[Aspirator je iznad šporeta.]] — Вытяжка над плитой.</li><li>[[Šporet je ispod aspiratora.]] — Плита под вытяжкой.</li>' +
            '<li>[[Prozor je iza stola.]] — Окно за столом.</li><li>[[Jastuci su između prozora i ogledala.]] — Подушки между окном и зеркалом.</li><li>[[Sto i stolice su u centru.]] — Стол и стулья в центре.</li></ul>'
        },
        {
          type: 'gap', bank: true, min: 7, title: 'Predlog i padež · впишите предлог и форму',
          note: 'В каждом пропуске один предлог из списка. Форму существительного проверьте вслух.',
          items: [
            'Lampa visi {na} plafonu, a tepih leži {na} podu.', 'Mikrotalasna peć stoji {iznad} šporeta, {na} polici.', 'Mačka spava {ispod} stola, a pas {iza} kauča.',
            'Komoda je {između} kreveta i ormara.', 'Papir je {u} komodi, a ključevi su {u} torbi.', 'Sto se nalazi {pored} prozora.'
          ]
        },
        {
          type: 'qa', mode: 'translate', min: 12, title: 'Prevedite sa ruskog · семь предложений из курса',
          note: 'Упражнение из курса. Обратите внимание на предлог и падеж.',
          items: [
            { q: 'В спальне пылесос стоит в шкафу.', a: ['U spavaćoj sobi usisivač stoji u ormaru.', 'U spavaćoj sobi usisivač je u ormaru.', 'Usisivač stoji u ormaru u spavaćoj sobi.'] },
            { q: 'На кухне между раковиной и плитой находится посудомойка.', a: ['U kuhinji između sudopere i šporeta nalazi se mašina za sudove.', 'U kuhinji između sudopere i šporeta se nalazi mašina za sudove.', 'U kuhinji između sudopere i šporeta nalazi se sudomašina.', 'U kuhinji između lavaboa i šporeta nalazi se mašina za sudove.'] },
            { q: 'Кондиционер на потолке в коридоре, включи.', a: ['Klima je na plafonu u hodniku, uključi je.', 'Klima je na plafonu u hodniku, uključi.', 'Klima uređaj je na plafonu u hodniku, uključi ga.'] },
            { q: 'Бойлер в ванной над стиральной машиной.', a: ['Bojler je u kupatilu iznad veš mašine.', 'Bojler u kupatilu je iznad veš mašine.'] },
            { q: 'В холодильнике ничего нет, надо сходить в магазин.', a: ['U frižideru nema ničega, treba otići u prodavnicu.', 'U frižideru nema ništa, treba otići u prodavnicu.', 'U frižideru nema ničega, treba da odemo u prodavnicu.', 'U frižideru nema ničega, treba ići u prodavnicu.'] },
            { q: 'На балконе лежит чайник, мы не используем его, потому что пьём только кофе.', a: ['Na balkonu leži čajnik, ne koristimo ga, jer pijemo samo kafu.', 'Na terasi leži čajnik, ne koristimo ga, jer pijemo samo kafu.', 'Na balkonu leži čajnik, mi ga ne koristimo, jer pijemo samo kafu.'] },
            { q: 'Микроволновка стоит над плитой, на полке.', a: ['Mikrotalasna peć stoji iznad šporeta, na polici.', 'Mikrotalasna stoji iznad šporeta, na polici.', 'Mikrotalasna peć je iznad šporeta, na polici.'] }
          ]
        },
        {
          type: 'speak', min: 6, title: 'Opišite sobu · кухня из курса',
          note: 'Первая из четырёх картинок курса. Опишите, где находятся: rerna, mikrotalasna peć, sto, aspirator, prozor.',
          img: 'img/l28_soba.png',
          items: [
            { q: 'Gde je rerna? Gde je mikrotalasna peć?', sample: 'Rerna je ispod šporeta, levo. Mikrotalasna peć je iznad radne površine, desno, pored vrata.' },
            { q: 'Gde je sto? Gde je aspirator? Gde je prozor?', sample: 'Sto je u centru kuhinje. Aspirator je iznad šporeta. Prozor je iza stola, između zidova.' }
          ]
        },
        {
          type: 'speak', min: 15, title: 'Moja soba · опишите, партнёр рисует',
          note: 'Один описывает свою комнату (или кухню), где что стоит, лежит и висит. Второй рисует план по описанию и переспрашивает: Gde je lampa? Šta je između prozora i ormara? Потом сравните рисунок с реальностью и поменяйтесь.',
          record: true,
          items: [
            { q: 'Šta je u centru sobe? Šta je pored prozora?', sample: 'U centru sobe je tepih. Pored prozora stoji sto sa laptopom.' },
            { q: 'Šta je na zidu? Šta visi na plafonu?', sample: 'Na zidu su slike, iznad kreveta. Na plafonu visi lampa.' },
            { q: 'Šta je ispod, iznad, iza, između?', sample: 'Ispod kreveta je kofer. Iznad komode je ogledalo. Iza vrata je vešalica. Između ormara i zida je usisivač.' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'na, u + lokativ: na stolu, u komodi, na plafonu, na polici',
            'ispod, iznad, između, iza, pored + genitiv: ispod stola, iznad šporeta, između prozora i ogledala',
            'stoji, leži, visi; uključi — isključi',
            'U frižideru nema ničega. Mikrotalasna je iznad šporeta, na polici.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: предлоги места', est: 7, set: 'B' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: где что', est: 6,
          items: [
            { a: ['Lampa je na plafonu.'] }, { a: ['Aspirator je iznad šporeta.'] }, { a: ['Jastuci su između prozora i ogledala.'] },
            { a: ['Usisivač stoji u ormaru.'] }, { a: ['Bojler je iznad veš mašine.'] }, { a: ['Sto se nalazi pored prozora.'] }
          ]
        },
        {
          type: 'gap', title: 'Padež posle predloga · впишите форму', est: 7,
          note: 'В скобках начальная форма.',
          items: [
            'Mačka spava na {stolici} <i>(stolica)</i>.', 'Ključevi su u {komodi} <i>(komoda)</i>.', 'Tepih je ispod {stola} <i>(sto)</i>.',
            'Ogledalo visi iznad {lavaboa} <i>(lavabo)</i>.', 'Kauč je između {prozora} <i>(prozor)</i> i {vrata} <i>(vrata)</i>.', 'Pas se krije iza {kauča} <i>(kauč)</i>.',
            'Peškir visi pored {kade} <i>(kada)</i>.', 'Slike su na {zidu} <i>(zid)</i>.'
          ]
        },
        {
          type: 'write', title: 'Moja kuhinja · описание + запись', est: 10, key: 'hw-28.2-kuhinja', record: true,
          note: '8 предложений о своей кухне или комнате: где стоит техника и мебель. Используйте все семь предлогов. Запишите чтение вслух.',
          sample: 'Moja kuhinja je mala, ali udobna. Šporet je pored prozora, a aspirator je iznad šporeta. Frižider stoji između šporeta i zida. Mikrotalasna peć je na polici, iznad frižidera. Sto i dve stolice su u centru. Ispod stola leži mali tepih. Iza vrata visi vešalica sa kecljom. Na zidu je sat i nekoliko slika.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '28.3',
      title: 'Tehnika u ruci',
      ru: 'Гаджеты, аудирование о четырёх людях, возвратные глаголы',
      goals: [
        'назвать 12 гаджетов и рассказать, чем пользуетесь каждый день',
        'заполнить текст аудирования о Деяне, Майе, Драгане и Горане',
        'проспрягать возвратные глаголы: buditi se, tuširati se, odmarati se, nalaziti se'
      ],
      blocks: [
        {
          type: 'text', min: 7, title: 'Tehnika koja nam olakšava život… ili ne? · гаджеты',
          note: 'Первый слайд из курса; второй не сохранился, его слова в списке.',
          img: 'img/l28_gadzeti.png',
          html: '<ul><li>[[telefon]] — телефон, [[laptop]] / [[kompjuter]] — ноутбук / компьютер, [[tablet]] — планшет</li>' +
            '<li>[[slušalice]] — наушники: [[bežične]] — беспроводные, [[žične]] — проводные; [[punjač]] — зарядка; [[zvučnik]] — колонка</li>' +
            '<li>[[pametni sat]] — умные часы, [[ekran]] — экран, [[tastatura]] — клавиатура, [[miš]] — мышь, [[kamera]], [[štampač]] — принтер</li>' +
            '<li>[[baterija je prazna]] — батарея села, [[puniti telefon]] — заряжать телефон, [[aplikacija]], [[vaj-faj]]</li></ul>'
        },
        {
          type: 'mc', min: 7, title: 'Kviz · Digitalni uređaji',
          note: 'В курсе это викторина Wordwall; вопросы составлены заново.',
          items: [
            { q: 'Slušamo muziku bez kabla preko … slušalica.', options: ['bežičnih', 'žičnih', 'pametnih'], a: 'bežičnih' },
            { q: 'Kad je baterija prazna, treba nam ….', options: ['punjač', 'štampač', 'zvučnik'], a: 'punjač' },
            { q: 'Na ruci nosimo …, on meri srčani ritam.', options: ['pametni sat', 'tablet', 'miš'], a: 'pametni sat' },
            { q: 'Dizajner crta na grafičkom ….', options: ['tabletu', 'zvučniku', 'punjaču'], a: 'tabletu' },
            { q: 'Na predavanja studenti nose ….', options: ['laptop', 'štampač', 'frižider'], a: 'laptop' },
            { q: 'Da bi slika bila velika, kupujemo veliki ….', options: ['ekran', 'miš', 'punjač'], a: 'ekran' },
            { q: 'Dokument na papiru pravi ….', options: ['štampač', 'kamera', 'tastatura'], a: 'štampač' },
            { q: 'Muziku u kuhinji slušamo preko ….', options: ['zvučnika', 'tastature', 'miša'], a: 'zvučnika' }
          ]
        },
        {
          type: 'gap', bank: true, listen: true, min: 10, title: 'Uređaji · аудирование из курса',
          note: 'Нажмите «Прослушать текст», потом выберите слова. Четыре человека и их техника.',
          items: [
            'Dejan je student druge godine, studira na pravnom fakultetu. Za učenje koristi različitu {tehniku}. Na primer, na predavanja nosi {laptop}, a kod kuće koristi {kompjuter}.',
            'Maja obožava da trči svako veče. Sa sobom ona uvek ima {pametni sat} da izmerava srčani ritam i kilometre. Takođe Maja ima {bežične slušalice}, tako je mnogo udobnije.',
            'Dragana je dizajnerka, na poslu koristi veliki {ekran}, obavezno grafički {tablet} i {olovku}. Za Draganu je veoma važan dobar kvalitet slike.',
            'Goran voli da kuva, kad kuva gleda serije na {tabletu} ili sluša muziku preko radija i preko {zvučnika}. On takođe gleda recepte na {telefonu}.'
          ]
        },
        {
          type: 'tf', min: 4, title: 'Ko šta koristi? · по тексту',
          items: [
            { q: 'Dejan studira medicinu.', a: false, why: 'Studira na pravnom fakultetu.' }, { q: 'Maja meri srčani ritam pametnim satom.', a: true },
            { q: 'Dragana koristi mali ekran.', a: false, why: 'Koristi veliki ekran, važan joj je kvalitet slike.' }, { q: 'Goran gleda recepte na telefonu.', a: true }
          ]
        },
        {
          type: 'text', min: 5, title: 'Povratni glagoli · возвратные глаголы',
          note: 'В словаре курса ссылка на Quizlet «Povratni glagoli». Частица se всегда на втором месте: Budim se rano. Rano se budim.',
          tables: [
            { caption: 'buditi se', head: ['jednina', 'množina'], rows: [['ja se budim', 'mi se budimo'], ['ti se budiš', 'vi se budite'], ['on / ona se budi', 'oni / one se bude']] },
            { caption: 'tuširati se', head: ['jednina', 'množina'], rows: [['ja se tuširam', 'mi se tuširamo'], ['ti se tuširaš', 'vi se tuširate'], ['on / ona se tušira', 'oni / one se tuširaju']] }
          ],
          html: '<p>[[buditi se]] — просыпаться, [[tuširati se]] — принимать душ, [[kupati se]] — купаться, [[brijati se]] — бриться, [[češljati se]] — причёсываться, [[šminkati se]] — краситься, [[oblačiti se]] — одеваться, [[odmarati se]] — отдыхать, [[smejati se]] — смеяться, [[nalaziti se]] — находиться.</p>' +
            '<p>[[Ujutru se budim, tuširam se i oblačim se.]] [[Uveče se odmaram i slušam muziku preko zvučnika.]] [[Perfekat: Probudio sam se rano. Ona se tuširala.]]</p>'
        },
        {
          type: 'conj', min: 6, title: 'Trening · povratni glagoli',
          verbs: ['buditi', 'tusirati', 'odmarati', 'nalaziti'], rounds: 8
        },
        {
          type: 'speak', min: 15, title: 'Tehnika i moj dan · расскажите',
          note: 'Расскажите про свой день с техникой и возвратными глаголами: когда просыпаетесь (будильник в телефоне?), что слушаете, на чём работаете, как отдыхаете. Потом дискуссия: Da li nam tehnika olakšava život… ili ne? Каждый даёт два аргумента.',
          record: true,
          items: [
            { q: 'Kako se budiš? Šta prvo uzimaš u ruku?', sample: 'Budim se u sedam, alarm je na telefonu. Prvo gledam poruke, a onda se tuširam.' },
            { q: 'Koju tehniku koristiš na poslu?', sample: 'Na poslu koristim laptop, veliki ekran i bežične slušalice.' },
            { q: 'Kako se odmaraš uveče?', sample: 'Uveče se odmaram: gledam serije na tabletu i slušam muziku preko zvučnika.' },
            { q: 'Da li nam tehnika olakšava život? Zašto da, zašto ne?', sample: 'Da, jer sve radimo brže. Ne, jer stalno gledamo u ekran i ne odmaramo se.' }
          ]
        },
        {
          type: 'summary', min: 6, title: 'Rezime · итог занятия',
          points: [
            'telefon, laptop, tablet, bežične / žične slušalice, punjač, zvučnik, pametni sat, ekran, štampač',
            'Baterija je prazna, treba mi punjač. Gleda recepte na telefonu.',
            'buditi se, tuširati se, oblačiti se, odmarati se, smejati se, nalaziti se; se na drugom mestu',
            'Tehnika nam olakšava život… ili ne?'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: гаджеты и возвратные глаголы', est: 8, set: 'C' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: техника', est: 6,
          items: [
            { a: ['Na predavanja nosi laptop.'] }, { a: ['Maja ima bežične slušalice.'] }, { a: ['Dragana koristi grafički tablet i olovku.'] },
            { a: ['Goran gleda recepte na telefonu.'] }, { a: ['Baterija je prazna, treba mi punjač.'] }, { a: ['Ujutru se budim i tuširam se.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Я просыпаюсь в семь.', a: ['Budim se u sedam.', 'Ja se budim u sedam.'] },
            { q: 'Она принимает душ каждое утро.', a: ['Ona se tušira svako jutro.', 'Tušira se svako jutro.'] },
            { q: 'Мы отдыхаем вечером и смотрим сериалы на планшете.', a: ['Odmaramo se uveče i gledamo serije na tabletu.', 'Uveče se odmaramo i gledamo serije na tabletu.'] },
            { q: 'Где находится зарядка?', a: ['Gde se nalazi punjač?', 'Gde je punjač?'] },
            { q: 'Он слушает музыку через колонку.', a: ['On sluša muziku preko zvučnika.', 'Sluša muziku preko zvučnika.'] },
            { q: 'Батарея села.', a: ['Baterija je prazna.'] },
            { q: 'Техника облегчает нам жизнь.', a: ['Tehnika nam olakšava život.'] }
          ]
        },
        {
          type: 'write', title: 'Moj dan i tehnika · текст + запись', est: 9, key: 'hw-28.3-dan', record: true,
          note: '8 предложений о своём дне с пятью возвратными глаголами и пятью гаджетами. Запишите чтение вслух.',
          sample: 'Budim se u pola sedam, alarm je na pametnom satu. Tuširam se i oblačim se, a onda pijem kafu i gledam vesti na telefonu. Na posao nosim laptop i bežične slušalice. Na poslu koristim dva ekrana i štampač. Uveče se odmaram na kauču i gledam serije na tabletu. Ponekad se smejem sa prijateljima preko video poziva. Pre spavanja punim telefon i sat. Tehnika mi olakšava život, ali ponekad želim da isključim sve.'
        }
      ]
    }
  ]
});
