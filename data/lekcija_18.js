// Lekcija 18 - Sve za lepotu. Two 60-minute sessions: beauty services + negative imperative, then booking dialogs & spa.
COURSE.register({
  n: 18,
  title: 'Sve za lepotu',
  ru: 'Салоны красоты и услуги; отрицательный императив; запись на приём',

  vocab: [
    { id: 'osisati-se', sr: 'ošišati se, ja se ošišam — šišati se, ja se šišam', ru: 'подстричься — стричься', set: 'A' },
    { id: 'ofarbati-se', sr: 'ofarbati se, ja se ofarbam — farbati kosu', ru: 'покраситься — красить волосы', set: 'A' },
    { id: 'sminka', sr: 'šminka', ru: 'макияж', set: 'A' },
    { id: 'majke-mi', sr: 'Majke mi!', ru: 'Мамочки!', set: 'A' },
    { id: 'srediti', sr: 'srediti nešto, ja sredim — sređivati bradu i brkove', ru: 'привести в порядок — подравнивать бороду и усы', set: 'A' },
    { id: 'fen', sr: 'fen za kosu — feniranje', ru: 'фен для волос — укладка', set: 'A' },
    { id: 'frizura', sr: 'frizura — šiške', ru: 'причёска — чёлка', set: 'A' },
    { id: 'frizerski-salon', sr: 'frizerski salon — frizer', ru: 'парикмахерская — парикмахер', set: 'A' },
    { id: 'berbernica', sr: 'berbernica', ru: 'барбершоп', set: 'A' },
    { id: 'salon-za-masazu', sr: 'salon za masažu — ići na masažu', ru: 'массажный салон — ходить на массаж', set: 'A' },
    { id: 'salon-za-nokte', sr: 'salon za nokte', ru: 'ногтевой салон', set: 'A' },
    { id: 'salon-lepote', sr: 'salon lepote, kozmetički salon, SPA salon', ru: 'салон красоты, косметический салон, спа', set: 'A' },
    { id: 'nadograditi', sr: 'nadograđivati nokte, ja nadograđujem', ru: 'наращивать ногти', set: 'A' },
    { id: 'gel-lak', sr: 'skinuti gel lak sa noktiju — uraditi gel nokte', ru: 'снять гель-лак — сделать гель-лак', set: 'A' },
    { id: 'manikir', sr: 'uraditi manikir, ja uradim', ru: 'сделать маникюр', set: 'A' },
    { id: 'tretman', sr: 'uraditi tretman', ru: 'сделать уход, процедуру', set: 'A' },
    { id: 'negovati', sr: 'negovati kožu, ja negujem — Negujmo sebe!', ru: 'ухаживать за кожей — Ухаживаем за собой!', set: 'A' },
    { id: 'stucovanje', sr: 'štucovanje brade — brijanje', ru: 'стрижка бороды — бритьё', set: 'A' },
    { id: 'izlivanje', sr: 'izlivanje gelom — ojačavanje', ru: 'покрытие гелем — укрепление', set: 'A' },
    { id: 'banja', sr: 'banja — Vrnjačka banja', ru: 'бальнеологический курорт — Врнячка-Баня', set: 'A' },
    { id: 'lokal', sr: 'omiljeni lokal', ru: 'любимое заведение', set: 'A' },
    { id: 'nemoj', sr: 'nemoj, nemojte, nemojmo', ru: 'не (делай, делайте, будем делать)', set: 'A' },
    { id: 'ne-cekaj', sr: 'Ne čekaj! Nemoj čekati! Neka ne čeka!', ru: 'Не жди! Пусть не ждёт!', set: 'A' },
    { id: 'skociti', sr: 'skočiti u bazen', ru: 'прыгнуть в бассейн', set: 'A' },
    { id: 'cupav', sr: 'čupava mačka', ru: 'лохматая кошка', set: 'A' },
    { id: 'pusiti', sr: 'pušiti', ru: 'курить', set: 'A' },
    { id: 'majstor', sr: 'majstor za sve', ru: 'мастер на все руки', set: 'A' },

    { id: 'zakazati', sr: 'zakazati termin, ja zakažem', ru: 'записаться, назначить время', set: 'B' },
    { id: 'odgovarati18', sr: 'Koji datum vam odgovara?', ru: 'Какая дата вам подходит?', set: 'B' },
    { id: 'fade', sr: 'fade šišanje, muško šišanje klasik / makazama', ru: 'фейд, мужская стрижка классик / ножницами', set: 'B' },
    { id: 'ocekujemo', sr: 'Očekujemo vas kod nas.', ru: 'Ждём вас у нас.', set: 'B' },
    { id: 'nemojte-kasniti', sr: 'Nemojte kasniti! — Doći ću na vreme.', ru: 'Не опаздывайте! — Приду вовремя.', set: 'B' },
    { id: 'klijent', sr: 'klijent — imamo mnogo klijenata', ru: 'клиент — у нас много клиентов', set: 'B' },
    { id: 'na-zalost', sr: 'na žalost', ru: 'к сожалению', set: 'B' },
    { id: 'godisnji18', sr: 'biće na godišnjem odmoru', ru: 'будет в отпуске', set: 'B' },
    { id: 'skidanje-laka', sr: 'skidanje laka i izlivanje gel laka', ru: 'снятие лака и покрытие гель-лаком', set: 'B' },
    { id: 'korisnicki', sr: 'korisnički broj', ru: 'номер клиента', set: 'B' },
    { id: 'uzivajte', sr: 'Uživajte!', ru: 'Наслаждайтесь!', set: 'B' },
    { id: 'cenovnik', sr: 'cenovnik — relaks, sportske, terapeutske masaže', ru: 'прайс — релакс, спортивный, терапевтический массаж', set: 'B' },
    { id: 'uzitak', sr: 'potpuni užitak i relaksacija', ru: 'полное наслаждение и расслабление', set: 'B' },
    { id: 'cula', sr: 'sva vaša čula', ru: 'все ваши чувства', set: 'B' },
    { id: 'tenzija', sr: 'oslobađanje od tenzije', ru: 'освобождение от напряжения', set: 'B' },
    { id: 'pokloniti-sebi', sr: 'Poklonite sebi…', ru: 'Подарите себе…', set: 'B' },
    { id: 'slobodan-frizer', sr: 'nemamo slobodnih frizera', ru: 'нет свободных парикмахеров', set: 'B' },
    { id: 'usluga', sr: 'usluga — koja usluga?', ru: 'услуга — какая услуга?', set: 'B' },
    { id: 'zensko-sisanje', sr: 'žensko šišanje', ru: 'женская стрижка', set: 'B' }
  ],

  verbs: {
    sisati: { inf: 'šišati se', ru: 'стричься', imp: { ti: 'šišaj se', vi: 'šišajte se' }, nimp: { ti: 'ne šišaj se', vi: 'ne šišajte se' } },
    ici: { inf: 'ići', ru: 'идти', imp: { ti: 'idi', vi: 'idite' }, nimp: { ti: 'ne idi', vi: 'ne idite' } },
    raditi: { inf: 'raditi', ru: 'делать', imp: { ti: 'radi', vi: 'radite' }, nimp: { ti: 'ne radi', vi: 'ne radite' } },
    negovati: { inf: 'negovati', ru: 'ухаживать', imp: { ti: 'neguj', vi: 'negujte' }, nimp: { ti: 'ne neguj', vi: 'ne negujte' } },
    zakazati: { inf: 'zakazati', ru: 'записаться', pos: { ja: 'zakažem', ti: 'zakažeš', on: 'zakaže', mi: 'zakažemo', vi: 'zakažete', oni: 'zakažu' }, neg: { ja: 'ne zakažem', ti: 'ne zakažeš', on: 'ne zakaže', mi: 'ne zakažemo', vi: 'ne zakažete', oni: 'ne zakažu' }, l: { m: 'zakazao', f: 'zakazala', n: 'zakazalo', mpl: 'zakazali', fpl: 'zakazale' } },
    hteti: { inf: 'hteti', ru: 'хотеть', pos: { ja: 'hoću', ti: 'hoćeš', on: 'hoće', mi: 'hoćemo', vi: 'hoćete', oni: 'hoće' }, neg: { ja: 'neću', ti: 'nećeš', on: 'neće', mi: 'nećemo', vi: 'nećete', oni: 'neće' }, noQuestion: true }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '18.1',
      title: 'Usluge lepote',
      ru: 'Салоны и услуги; отрицательная форма императива',
      goals: [
        'назвать салоны и услуги: šišanje, farbanje, manikir, masaža',
        'распределить услуги по местам',
        'построить отрицательный императив: ne čekaj / nemoj čekati'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Lepotani i lepotice',
          note: 'Марина выбирает, Джокович удивляется макияжу, Андрич бреется, Тесла жалеет, что не изобрёл фен. Прочитайте кириллицу сами.',
          img: 'img/l18_strip.png',
          lines: [
            { who: 'Marina', sr: 'Hmm… da se ošišam? Ili da se ofarbam?', ru: 'Хм… подстричься? Или покраситься?' },
            { who: 'Novak', sr: 'Koliko šminke, majke mi… Kako žene to svaki dan rade?', ru: 'Сколько макияжа, мамочки… Как женщины это каждый день делают?' },
            { who: 'Ivo', sr: 'Lele! Gusta mi je brada. Samo da je malo sredim… Opa!', ru: 'Ой! Густая у меня борода. Только чуть подровняю… Опа!' },
            { who: 'Nikola', sr: 'Fen za kosu… Zašto to nisam ja izmislio…', ru: 'Фен для волос… Почему это не я изобрёл…' }
          ]
        },
        {
          type: 'text', min: 7, title: 'Negujmo sebe! · салоны',
          img: 'img/l18_usluge.png',
          html:
            '<ul><li>[[frizerski salon]] — парикмахерская, [[berbernica]] — барбершоп</li><li>[[salon za masažu]] — массажный салон, [[salon za nokte]] — ногтевой салон</li><li>[[kozmetički salon]], [[salon lepote]], [[SPA salon]] — салон красоты, спа</li></ul>' +
            '<p><b>Zanimljivost:</b> сербская [[banja]] — не русская баня, а бальнеологический курорт с минеральными или термальными водами: [[Vrnjačka banja]], Jošanička, Kuršumlijska, Niška, Sokobanja.</p>',
          tables: [
            { caption: 'Usluge', head: ['frizerski salon, berbernica', 'salon za nokte', 'salon lepote'], rows: [['šišati se — стричься', 'uraditi manikir — маникюр', 'uraditi tretman — уход'], ['farbati kosu — красить волосы', 'nadograđivati nokte — наращивать', 'negovati kožu — ухаживать за кожей'], ['sređivati bradu i brkove', 'skinuti gel lak — снять гель-лак', 'ići na masažu — на массаж'], ['feniranje — укладка', 'uraditi gel nokte — гель-лак', 'šminka — макияж']] }
          ]
        },
        {
          type: 'sort', min: 6, title: 'Usluge i mesta · распределите услуги',
          groups: ['Frizerski salon, berbernica', 'Salon za nokte', 'Salon lepote'],
          items: [
            { w: 'nadograđivati nokte', g: 'Salon za nokte' }, { w: 'skinuti gel lak sa noktiju', g: 'Salon za nokte' }, { w: 'uraditi gel nokte', g: 'Salon za nokte' }, { w: 'uraditi manikir', g: 'Salon za nokte' },
            { w: 'sređivati bradu i brkove', g: 'Frizerski salon, berbernica' }, { w: 'šišati se', g: 'Frizerski salon, berbernica' }, { w: 'farbati kosu', g: 'Frizerski salon, berbernica' }, { w: 'feniranje', g: 'Frizerski salon, berbernica' },
            { w: 'ići na masažu', g: 'Salon lepote' }, { w: 'uraditi tretman', g: 'Salon lepote' }, { w: 'negovati kožu', g: 'Salon lepote' }, { w: 'šminka', g: 'Salon lepote' }
          ]
        },
        {
          type: 'gap', bank: true, min: 3, title: 'Unesite reč · какой это салон',
          note: 'В оригинале — фото.',
          items: ['Muškarac u stolici, brijač sa mašinicom — {berbernica}.', 'Žena farba kosu klijentkinji — {frizerski salon}.', 'Žena leži sa peškirom, masaža — {SPA salon, salon lepote}.', 'Ruke, lak, lampa — {salon za nokte}.']
        },
        {
          type: 'speak', min: 6, title: 'Pitanja · вопросы из курса',
          items: [
            { q: 'Koja mesta vi posećujete?', sample: 'Posećujem frizerski salon i ponekad salon za masažu.' },
            { q: 'Koliko često idete tamo?', sample: 'Idem kod frizera jednom mesečno, na masažu dva puta godišnje.' },
            { q: 'Imate li omiljene lokale tamo gde živite?', sample: 'Da, imam omiljenu berbernicu na Dorćolu, majstor se zove Marko.' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Odrični oblik imperativa · отрицательный императив',
          img: 'img/l18_odricni.png',
          html:
            '<p>✅ [[Radi!]] ❌ [[Ne radi!]] = [[Nemoj raditi!]]</p>' +
            '<ul><li>Частица <b>ne</b> + императив — с глаголами несовершенного вида (šta raditi?): [[Ne gledaj!]] [[Ne idite tamo!]] [[Ne šišajte se kratko!]]</li>' +
            '<li><b>nemoj / nemojte / nemojmo</b> + инфинитив (или da + prezent) — с глаголами обоих видов: [[Nemoj gledati ovaj film!]] [[Nemojte gledati ovu seriju!]] [[Nemojmo gledati ovih ljudi!]]</li></ul>',
          tables: [
            { caption: 'Odrični oblik imperativa — čekati', head: ['', 'jednina', 'množina'], rows: [['ti / vi', 'ne čekaj! nemoj čekati!', 'ne čekajte! nemojte čekati!'], ['mi', '', 'hajde da ne čekamo! ne čekajmo! nemojmo čekati!'], ['on / oni', 'neka ne čeka!', 'neka ne čekaju!']] }
          ]
        },
        {
          type: 'gap', min: 6, title: 'Izaberite tačan odgovor · выберите форму',
          options: ['skakati', 'skočiti', 'pričaj', 'pričajte', 'sređuje', 'ide', 'gledaj', 'gledajte', 'nemojte', 'nemoj', 'šišaju', 'šišajte'],
          items: [
            'Milane, nemoj {skakati} u bazen! To je banja, to nije igralište!', 'Joj, ne {pričaj} mi o mojoj frizuri ništa… Izgledam kao čupava mačka!', 'Neka on ne {sređuje} bradu kod bake, neka {ide} u berbernicu!',
            'Slavice moja, ne {gledaj} me tako! Da, imam zelenu kosu, šta sad?', 'Deda, tata, {nemojte} pušiti ovde! To je SPA salon, niste vi u kafani!', 'Oni neka se ne {šišaju}! Radim u salonu samo 2 dana, nisam majstor za sve!'
          ]
        },
        {
          type: 'gap', min: 6, title: 'Napravite običan i odrični imperativ · оба императива',
          note: 'Упражнение из курса. Впишите утвердительную и отрицательную форму для указанного лица.',
          items: [
            'Marija se šiša u salonu pored svoje kuće. → (ti) {Šišaj se}! / {Ne šišaj se|Nemoj se šišati}!', 'Petar ide u berbernicu na Dorćolu. → (ti) {Idi}! / {Ne idi|Nemoj ići}!',
            'Danas idemo na masažu u SPA salon. → (mi) {Hajde da idemo|Idemo}! / {Nemojmo ići|Ne idimo}!', 'Njena sestra radi nokte kod drugarice. → (ti) {Radi}! / {Ne radi|Nemoj raditi}!',
            'Vi se šišate u frizerskom salonu. → (vi) {Šišajte se}! / {Ne šišajte se|Nemojte se šišati}!', 'Oni neguju kožu u salonu lepote. → (oni) {Neka neguju}! / {Neka ne neguju}!', 'Ti ideš na masažu dva puta nedeljno. → (ti) {Idi}! / {Ne idi|Nemoj ići}!'
          ]
        },
        {
          type: 'gap', bank: true, min: 5, title: 'Unesite odgovarajuće oblike · из банка слов',
          note: 'Упражнение из курса.',
          items: [
            'Tijana, {nemoj} kasniti danas! Škola počinje u 8:00.', '{Ne šišajte se} kratko! Imate toliko lepu i zdravu kosu!', 'Reci sinu da {neka ne} pije hladnu vodu, razboleće se.',
            'Mama, {jedi} sarmu! Sveža je i dobra.', 'Joj, Mirko, {idi} kod frizera! Šiške su ti porasle.', '{Hajmo} na masažu? Dugo nismo bili u salonu.', 'Moji roditelji nikada nisu bili u SPA centru. {Neka posete}!'
          ]
        },
        {
          type: 'speak', min: 5, title: 'Saveti · советы в императиве',
          note: 'Партнёр описывает проблему (duga kosa, čupava brada, umor, loši nokti), вы даёте два совета: один утвердительный, один отрицательный. Потом меняетесь.',
          items: [
            { q: 'Kosa mi je preduga i suva.', sample: 'Idi kod frizera i ošišaj se! Nemoj farbati kosu sada.' },
            { q: 'Umoran sam, bole me leđa.', sample: 'Idi na masažu u SPA salon! Ne sedi ceo dan za kompjuterom.' },
            { q: 'Brada mi je čupava.', sample: 'Sredi bradu u berbernici! Nemoj je sam brijati.' },
            { q: 'Nokti su mi loši.', sample: 'Uradi manikir u salonu za nokte! Ne skidaj gel lak sama.' }
          ]
        },
        {
          type: 'summary', min: 3, title: 'Rezime · итог занятия',
          points: [
            'frizerski salon, berbernica, salon za nokte, salon za masažu, salon lepote',
            'šišati se, farbati kosu, uraditi manikir, ići na masažu, negovati kožu',
            'Ne čekaj! = Nemoj čekati! — Ne čekajte! = Nemojte čekati!',
            'Neka ne čeka! Hajde da ne čekamo!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: салоны и услуги', est: 9, set: 'A' },
        {
          type: 'qa', mode: 'transform', title: 'Odrični imperativ · сделайте отрицание', est: 6,
          note: 'Пример: Čekaj! → Ne čekaj! или Nemoj čekati!',
          items: [
            { q: 'Čekaj!', a: ['Ne čekaj!', 'Nemoj čekati!'] }, { q: 'Idite tamo!', a: ['Ne idite tamo!', 'Nemojte ići tamo!'] }, { q: 'Gledaj!', a: ['Ne gledaj!', 'Nemoj gledati!'] },
            { q: 'Šišajte se!', a: ['Ne šišajte se!', 'Nemojte se šišati!'] }, { q: 'Puši!', a: ['Ne puši!', 'Nemoj pušiti!'] }, { q: 'Neka čeka!', a: ['Neka ne čeka!'] },
            { q: 'Hajde da idemo!', a: ['Nemojmo ići!', 'Hajde da ne idemo!', 'Ne idimo!'] }, { q: 'Kasni!', a: ['Ne kasni!', 'Nemoj kasniti!'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Da se ošišam? Ili da se ofarbam?'] }, { a: ['Gusta mi je brada, samo da je malo sredim.'] }, { a: ['Nemoj skakati u bazen!'] },
            { a: ['Ne šišajte se kratko!'] }, { a: ['Idi kod frizera, šiške su ti porasle.'] }, { a: ['Hajmo na masažu?'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Я стригусь в парикмахерской рядом с домом.', a: ['Šišam se u frizerskom salonu pored kuće.', 'Šišam se u salonu pored kuće.'] },
            { q: 'Не крась волосы!', a: ['Ne farbaj kosu!', 'Nemoj farbati kosu!'] },
            { q: 'Не курите здесь, это спа-салон!', a: ['Ne pušite ovde, to je SPA salon!', 'Nemojte pušiti ovde, to je SPA salon!'] },
            { q: 'Пусть он не подравнивает бороду сам.', a: ['Neka on ne sređuje bradu sam.', 'Neka ne sređuje bradu sam.'] },
            { q: 'Давай не будем опаздывать!', a: ['Nemojmo kasniti!', 'Hajde da ne kasnimo!', 'Ne kasnimo!'] },
            { q: 'Как часто ты ходишь на массаж?', a: ['Koliko često ideš na masažu?'] },
            { q: 'Мне нужно сделать маникюр.', a: ['Treba da uradim manikir.'] }
          ]
        },
        {
          type: 'write', title: 'Saveti prijatelju · советы в императиве', est: 7, key: 'hw-18.1-saveti',
          note: '8 советов другу, который хочет выглядеть лучше: 4 утвердительных и 4 отрицательных императива.',
          sample: 'Idi kod frizera i ošišaj se! Nemoj farbati kosu sam kod kuće. Sredi bradu u berbernici. Ne sedi ceo dan pred ekranom. Idi na masažu jednom mesečno. Nemoj jesti mnogo slatkiša. Neguj kožu svaki dan. Ne kasni na termin!'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '18.2',
      title: 'Zakazivanje termina',
      ru: 'Объявления салонов, запись к парикмахеру и в ногтевой салон, спа',
      goals: [
        'прочитать объявление салона: услуги и цены',
        'записаться на приём: Želim da zakažem termin. Koji datum vam odgovara?',
        'разыграть три диалога: барбершоп, ногтевой салон, спа'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашние советы. Партнёр реагирует: Važi! / Neću!',
          items: [{ q: 'Idi kod frizera…' }]
        },
        {
          type: 'text', min: 5, title: 'Oglasi · объявления салонов',
          html:
            '<p>В курсе — реальные объявления белградских салонов с сайта <b>SrediMe</b> (сервис записи в салоны). Примеры услуг и цен:</p>' +
            '<ul><li><b>Premijer Gold</b>, Duke Dinić 96: [[štucovanje brade]] 500, [[muško šišanje klasik]] 900, [[muško šišanje makazama]] 1000 din.</li>' +
            '<li><b>Queens — My Way Palilula</b>: [[stilizovanje brade]] 400, [[brijanje brade]] 500, [[muško šišanje makazama i mašinicom]] 700 din.</li>' +
            '<li><b>Infinite Beauty</b>: [[skidanje gela + manikir]] 1300, [[izlivanje noktiju gelom]] 2500 din.</li>' +
            '<li><b>Studio Nice</b>: [[trajni lak — ruke]] 1650, [[estetski pedikir]] 1500, [[ojačavanje noktiju gelom]] 1800 din.</li></ul>' +
            '<p>[[štucovanje]] — стрижка бороды, [[izlivanje gelom]] — покрытие гелем, [[ojačavanje]] — укрепление.</p>'
        },
        {
          type: 'gap', min: 7, title: 'U berbernici · впишите форму',
          note: 'Диалог из курса. В скобках — что нужно (императив, футур, презент).',
          options: ['zakažem', 'zakazati', 'odgovara', 'odgovarate', 'ćete', 'hoćete', 'očekujemo', 'očekujte', 'nemojte', 'nemoj', 'doći ću', 'dolazim'],
          items: [
            '<b>Đorđe:</b> Dobar dan! Želim da {zakažem} termin kod frizera Jovana.', '<b>Radnik:</b> Dobar dan! Koji datum vam {odgovara}?', '<b>Đorđe:</b> Može li 23. decembra u 17.00?',
            '<b>Radnik:</b> Može, imamo baš jedan termin. Šta {ćete} raditi?', '<b>Đorđe:</b> Fade-šišanje i štucovanje brade.', '<b>Radnik:</b> Važi, {očekujemo} vas kod nas 23. decembra u 17.00. Molim vas, {nemojte} kasniti! Pre Nove godine imamo mnogo klijenata.',
            '<b>Đorđe:</b> Dobro, {doći ću} na vreme. Hvala vam, doviđenja!'
          ]
        },
        {
          type: 'gap', min: 8, title: 'U salonu za nokte · впишите форму',
          note: 'Диалог из курса. В скобках — глагол и форма.',
          items: [
            '<b>Radmila:</b> Ćao! Mogu li zakazati termin kod vas?', '<b>Radnica:</b> Dobar dan, gospođo! Salon za nokte „Nailsmile“! Da, koji datum želite?',
            '<b>Radmila:</b> {Pogledajte} (pogledati, vi, imperativ) da li Dara ima slobodno vreme 9. januara.', '<b>Radnica:</b> Na žalost, Dara {će biti} (biti, futur) na godišnjem odmoru u ovaj dan. {Hoćete} (hteti, futur, полная форма) li neki drugi dan?',
            '<b>Radmila:</b> Onda 16. januara?', '<b>Radnica:</b> Da, može. Šta {ćete raditi} (raditi, vi, futur)?', '<b>Radmila:</b> {Radiću} (raditi, ja, futur) skidanje laka i izlivanje gel laka.',
            '<b>Radnica:</b> Da li ste već bile kod nas?', '<b>Radmila:</b> {Jesam} (biti, prezent, полная форма), moj korisnički broj je 455634.', '<b>Radnica:</b> Važi, hvala na informacijama, zakazala sam vaš termin. {Uživajte} (uživati, vi, imperativ)!'
          ]
        },
        {
          type: 'gap', bank: true, listen: true, min: 5, title: 'U banji · реклама спа',
          note: 'В курсе — прайс и аудио Wellness & spa центра Врнячка-Баня. Вставьте слова из банка.',
          items: [
            'Svaka od naših ekskluzivnih masaža {pružiće} vam potpuni užitak i {relaksacije}… da sva vaša čula budu {istovremeno} relaksirana i probuđena!',
            '{Poklonite} sebi neverovatno iskustvo oslobađanja od {tenzije}, duboke {relaksacije} i povratka vašeg mentalnog i spiritualnog zdravlja!'
          ]
        },
        {
          type: 'gap', min: 6, title: 'Prevedite reči · переведите слова в диалоге',
          note: 'Упражнение из курса: впишите сербское слово вместо русского.',
          items: [
            '<b>Klijent:</b> Dobar dan! Mogu li zakazati {termin} (окошко, время) kod vas?', '<b>Radnik:</b> Halo, dobar dan! Da, koji {datum} (дата) i koja usluga?',
            '<b>Klijent:</b> Žensko {šišanje} (стрижка). Može li 23. aprila?', '<b>Radnik:</b> Izvinite, {na žalost} (к сожалению), nemamo slobodnih frizera u ovaj dan.',
            '<b>Klijent:</b> Može li onda 25. aprila?', '<b>Radnik:</b> Da, da li vam {odgovara} (подходит) u 18:00?', '<b>Klijent:</b> Jeste, odlično.', '<b>Radnik:</b> {Nemojte kasniti} (Не опаздывайте), molim vas, imamo baš mnogo ljudi. Hvala!'
          ]
        },
        {
          type: 'speak', min: 20, title: 'Zakažite termin · три диалога',
          note: 'Три сцены по образцам: барбершоп (fade, štucovanje), ногтевой салон (gel lak, manikir), спа (masaža). В каждой — дата, время, услуга, «da li vam odgovara», «nemojte kasniti». Меняйтесь ролями.',
          items: [
            { q: 'Radnik: Dobar dan! Kako mogu da vam pomognem?', sample: 'Klijent: Želim da zakažem termin kod frizera. Može li u subotu u 11?' },
            { q: 'Radnik: Koja usluga? Šta ćete raditi?', sample: 'Klijent: Muško šišanje makazama i štucovanje brade. Koliko košta?' },
            { q: 'Radnik: Na žalost, u subotu nemamo slobodnih frizera. Hoćete li drugi dan?', sample: 'Klijent: Onda u nedelju u 12? — Da, može. Da li vam odgovara?' },
            { q: 'Radnik: Da li ste već bili kod nas? Imate li korisnički broj?', sample: 'Klijent: Jesam, moj broj je 12345. — Važi, zakazala sam. Nemojte kasniti!' },
            { q: 'Klijent: Želim relaks masažu, 60 minuta.', sample: 'Radnik: Poklonite sebi i terapeutsku masažu! Očekujemo vas u petak u 17. Uživajte!' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'Želim da zakažem termin. Koji datum vam odgovara?',
            'Šta ćete raditi? — Fade šišanje i štucovanje brade. / Skidanje laka i izlivanje gel laka.',
            'Na žalost, nemamo slobodnih frizera. Hoćete li drugi dan?',
            'Očekujemo vas. Nemojte kasniti! Uživajte!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: запись на приём', est: 8, set: 'B' },
        { type: 'conj', title: 'Тренажёр: zakazati, hteti', est: 4, verbs: ['zakazati', 'hteti'], rounds: 8 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Želim da zakažem termin kod frizera.'] }, { a: ['Koji datum vam odgovara?'] }, { a: ['Šta ćete raditi?'] },
            { a: ['Na žalost, nemamo slobodnih frizera u ovaj dan.'] }, { a: ['Očekujemo vas kod nas u sedamnaest sati.'] }, { a: ['Molim vas, nemojte kasniti!'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Можно записаться к вам?', a: ['Mogu li zakazati termin kod vas?', 'Mogu li da zakažem termin kod vas?'] },
            { q: 'Какая дата вам подходит?', a: ['Koji datum vam odgovara?'] },
            { q: 'Можно 23 декабря в 17:00?', a: ['Može li 23. decembra u 17.00?', 'Može li dvadeset trećeg decembra u sedamnaest sati?'] },
            { q: 'Что вы будете делать? — Стрижку и бороду.', a: ['Šta ćete raditi? Šišanje i bradu.', 'Šta ćete raditi? — Šišanje i bradu.'] },
            { q: 'Вы уже были у нас?', a: ['Da li ste već bili kod nas?', 'Da li ste već bile kod nas?', 'Jeste li već bili kod nas?'] },
            { q: 'Ждём вас, не опаздывайте!', a: ['Očekujemo vas, nemojte kasniti!', 'Očekujemo vas, ne kasnite!'] },
            { q: 'Приду вовремя.', a: ['Doći ću na vreme.'] },
            { q: 'Подарите себе массаж!', a: ['Poklonite sebi masažu!'] }
          ]
        },
        {
          type: 'write', title: 'Dijalog: zakazivanje · письменный диалог + запись', est: 10, key: 'hw-18.2-zakazivanje', record: true,
          note: '10–12 реплик: запись в салон (любой) по образцу диалогов — дата, услуга, цена, подходит ли время, номер клиента. Запишите оба голоса.',
          sample: 'Klijent: Dobar dan! Želim da zakažem termin za manikir. Radnica: Dobar dan! Koji datum vam odgovara? Klijent: Može li u sredu u 15? Radnica: Na žalost, u sredu je sve zauzeto. Hoćete li četvrtak? Klijent: Može, četvrtak u 15. Radnica: Šta ćete raditi? Klijent: Skidanje gel laka i novi gel lak. Koliko košta? Radnica: 2500 dinara. Da li ste već bili kod nas? Klijent: Nisam, prvi put. Radnica: Važi, zakazala sam. Nemojte kasniti! Klijent: Doći ću na vreme, hvala!'
        }
      ]
    }
  ]
});
