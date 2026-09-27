// Lekcija 13 - Putovanja. Three 60-minute sessions: travel vocabulary & station dialogs, futur I, merged future + tenses review.
COURSE.register({
  n: 13,
  title: 'Putovanja',
  ru: 'Путешествия: аэропорт, вокзал, автовокзал; будущее время (futur I)',

  vocab: [
    { id: 'dokle-vise', sr: 'Dokle više?', ru: 'Сколько можно?', set: 'A' },
    { id: 'lako', sr: 'lako — nije lako', ru: 'легко — нелегко', set: 'A' },
    { id: 'gnjaviti-se', sr: 'gnjaviti se, ja se gnjavim', ru: 'заморачиваться, мучиться', set: 'A' },
    { id: 'prevoz', sr: 'prevoz', ru: 'транспорт', set: 'A' },
    { id: 'susedni', sr: 'susedni grad', ru: 'соседний город', set: 'A' },
    { id: 'hvala-bogu', sr: 'Hvala Bogu da sam kod kuće.', ru: 'Слава Богу, что я дома.', set: 'A' },
    { id: 'putovanje', sr: 'putovanje, putovati, ja putujem', ru: 'путешествие, путешествовать', set: 'A' },
    { id: 'odmor', sr: 'odmor, godišnji odmor', ru: 'отдых, отпуск', set: 'A' },
    { id: 'izlet', sr: 'izlet', ru: 'экскурсия, поездка за город', set: 'A' },
    { id: 'hotel', sr: 'hotel — rezervisati, ja rezervišem', ru: 'отель — бронировать', set: 'A' },
    { id: 'karta13', sr: 'karta — povratna karta, karta u jednom smeru', ru: 'билет — туда-обратно, в одну сторону', set: 'A' },
    { id: 'aerodrom13', sr: 'aerodrom — dolasci, odlasci', ru: 'аэропорт — прилёты, вылеты', set: 'A' },
    { id: 'let', sr: 'let — broj leta', ru: 'рейс — номер рейса', set: 'A' },
    { id: 'prtljag', sr: 'prtljag, ručni prtljag, kofer', ru: 'багаж, ручная кладь, чемодан', set: 'A' },
    { id: 'sediste', sr: 'sedište — kod prozora, u hodniku', ru: 'место — у окна, у прохода', set: 'A' },
    { id: 'bording', sr: 'bording karta', ru: 'посадочный талон', set: 'A' },
    { id: 'zeleznicka', sr: 'železnička stanica — peron, termin', ru: 'ж/д вокзал — перрон, время отправления', set: 'A' },
    { id: 'klima', sr: 'klima', ru: 'кондиционер', set: 'A' },
    { id: 'kuset', sr: 'kušet kola — ležaj, vagon', ru: 'купе — полка, вагон', set: 'A' },
    { id: 'autobuska13', sr: 'autobuska stanica — žeton, peronska karta', ru: 'автовокзал — жетон, перронный билет', set: 'A' },
    { id: 'luka', sr: 'luka', ru: 'порт', set: 'A' },
    { id: 'dolazim-po', sr: 'Dolazim po tebe.', ru: 'Я за тобой приеду.', set: 'A' },
    { id: 'polaziti', sr: 'Voz polazi u 22.15.', ru: 'Поезд отправляется в 22:15.', set: 'A' },
    { id: 'odgovarati', sr: 'Da li odgovara?', ru: 'Подходит?', set: 'A' },
    { id: 'promeniti', sr: 'promeniti datum', ru: 'изменить дату', set: 'A' },
    { id: 'kasno', sr: 'Danas je veoma kasno.', ru: 'Сегодня уже слишком поздно.', set: 'A' },
    { id: 'srecan-put', sr: 'Srećan put!', ru: 'Счастливого пути!', set: 'A' },
    { id: 'onlajn', sr: 'onlajn ili u kasi', ru: 'онлайн или в кассе', set: 'A' },

    { id: 'futur', sr: 'futur I — hteti: ću, ćeš, će, ćemo, ćete, će', ru: 'будущее время — краткие формы hteti', set: 'B' },
    { id: 'necu', sr: 'neću, nećeš, neće, nećemo, nećete, neće', ru: 'не буду…', set: 'B' },
    { id: 'radicu', sr: 'radiću, radićeš, radiće…', ru: 'слитная форма: буду работать', set: 'B' },
    { id: 'sledece', sr: 'sledeće nedelje, sledeće godine', ru: 'на следующей неделе, в следующем году', set: 'B' },
    { id: 'sutra', sr: 'sutra, prekosutra, uskoro', ru: 'завтра, послезавтра, скоро', set: 'B' },
    { id: 'odmarati-se', sr: 'odmarati se na plaži', ru: 'отдыхать на пляже', set: 'B' },
    { id: 'uzivati13', sr: 'uživati u suncu', ru: 'наслаждаться солнцем', set: 'B' },
    { id: 'posetiti13', sr: 'posetiti 5 različitih zemalja', ru: 'посетить 5 разных стран', set: 'B' },
    { id: 'pakovati', sr: 'pakovati stvari', ru: 'паковать вещи', set: 'B' },
    { id: 'propustiti', sr: 'propustiti voz', ru: 'пропустить поезд', set: 'B' },
    { id: 'unapred', sr: 'unapred', ru: 'заранее', set: 'B' },
    { id: 'sedeti-pored', sr: 'sedeti pored prozora', ru: 'сидеть у окна', set: 'B' },
    { id: 'pozvati13', sr: 'pozvaću te kad stignem', ru: 'позвоню тебе, когда приеду', set: 'B' },
    { id: 'izaci', sr: 'izaći na svež vazduh', ru: 'выйти на свежий воздух', set: 'B' },
    { id: 'sresti-se', sr: 'sresti se ispred pozorišta', ru: 'встретиться перед театром', set: 'B' },
    { id: 'ekskurzija', sr: 'ekskurzija', ru: 'экскурсия', set: 'B' },
    { id: 'razglednica', sr: 'razglednica — poslati razglednicu', ru: 'открытка — отправить открытку', set: 'B' },
    { id: 'izgubiti', sr: 'izgubiti pasoš', ru: 'потерять паспорт', set: 'B' },
    { id: 'pare', sr: 'pare — nemamo para', ru: 'деньги — у нас нет денег', set: 'B' }
  ],

  verbs: {
    hteti: { inf: 'hteti', ru: 'хотеть', pos: { ja: 'hoću', ti: 'hoćeš', on: 'hoće', mi: 'hoćemo', vi: 'hoćete', oni: 'hoće' }, neg: { ja: 'neću', ti: 'nećeš', on: 'neće', mi: 'nećemo', vi: 'nećete', oni: 'neće' }, noQuestion: true },
    putovati: { inf: 'putovati', ru: 'путешествовать', pos: { ja: 'ću putovati', ti: 'ćeš putovati', on: 'će putovati', mi: 'ćemo putovati', vi: 'ćete putovati', oni: 'će putovati' }, neg: { ja: 'neću putovati', ti: 'nećeš putovati', on: 'neće putovati', mi: 'nećemo putovati', vi: 'nećete putovati', oni: 'neće putovati' }, noQuestion: true, l: { m: 'putovao', f: 'putovala', n: 'putovalo', mpl: 'putovali', fpl: 'putovale' } },
    raditi: { inf: 'raditi', ru: 'работать', pos: { ja: 'ću raditi', ti: 'ćeš raditi', on: 'će raditi', mi: 'ćemo raditi', vi: 'ćete raditi', oni: 'će raditi' }, neg: { ja: 'neću raditi', ti: 'nećeš raditi', on: 'neće raditi', mi: 'nećemo raditi', vi: 'nećete raditi', oni: 'neće raditi' }, noQuestion: true, l: { m: 'radio', f: 'radila', n: 'radilo', mpl: 'radili', fpl: 'radile' } },
    kupiti: { inf: 'kupiti', ru: 'купить', pos: { ja: 'ću kupiti', ti: 'ćeš kupiti', on: 'će kupiti', mi: 'ćemo kupiti', vi: 'ćete kupiti', oni: 'će kupiti' }, neg: { ja: 'neću kupiti', ti: 'nećeš kupiti', on: 'neće kupiti', mi: 'nećemo kupiti', vi: 'nećete kupiti', oni: 'neće kupiti' }, noQuestion: true, l: { m: 'kupio', f: 'kupila', n: 'kupilo', mpl: 'kupili', fpl: 'kupile' } },
    ici: { inf: 'ići', ru: 'идти', pos: { ja: 'ću ići', ti: 'ćeš ići', on: 'će ići', mi: 'ćemo ići', vi: 'ćete ići', oni: 'će ići' }, neg: { ja: 'neću ići', ti: 'nećeš ići', on: 'neće ići', mi: 'nećemo ići', vi: 'nećete ići', oni: 'neće ići' }, noQuestion: true, l: { m: 'išao', f: 'išla', n: 'išlo', mpl: 'išli', fpl: 'išle' } },
    leteti: { inf: 'leteti', ru: 'лететь', pos: { ja: 'ću leteti', ti: 'ćeš leteti', on: 'će leteti', mi: 'ćemo leteti', vi: 'ćete leteti', oni: 'će leteti' }, neg: { ja: 'neću leteti', ti: 'nećeš leteti', on: 'neće leteti', mi: 'nećemo leteti', vi: 'nećete leteti', oni: 'neće leteti' }, noQuestion: true, l: { m: 'leteo', f: 'letela', n: 'letelo', mpl: 'leteli', fpl: 'letele' } },
    posetiti: { inf: 'posetiti', ru: 'посетить', pos: { ja: 'ću posetiti', ti: 'ćeš posetiti', on: 'će posetiti', mi: 'ćemo posetiti', vi: 'ćete posetiti', oni: 'će posetiti' }, neg: { ja: 'neću posetiti', ti: 'nećeš posetiti', on: 'neće posetiti', mi: 'nećemo posetiti', vi: 'nećete posetiti', oni: 'neće posetiti' }, noQuestion: true, l: { m: 'posetio', f: 'posetila', n: 'posetilo', mpl: 'posetili', fpl: 'posetile' } },
    rezervisati: { inf: 'rezervisati', ru: 'бронировать', pos: { ja: 'ću rezervisati', ti: 'ćeš rezervisati', on: 'će rezervisati', mi: 'ćemo rezervisati', vi: 'ćete rezervisati', oni: 'će rezervisati' }, neg: { ja: 'neću rezervisati', ti: 'nećeš rezervisati', on: 'neće rezervisati', mi: 'nećemo rezervisati', vi: 'nećete rezervisati', oni: 'neće rezervisati' }, noQuestion: true, l: { m: 'rezervisao', f: 'rezervisala', n: 'rezervisalo', mpl: 'rezervisali', fpl: 'rezervisale' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '13.1',
      title: 'Putovanje',
      ru: 'Аэропорт, вокзал, автовокзал: слова и диалоги',
      goals: [
        'назвать, откуда отправляемся и на чём',
        'купить билет на вокзале: termin, kušet kola, povratna karta',
        'понять диалоги на вокзале и в чате и разыграть их'
      ],
      blocks: [
        {
          type: 'dialog', min: 5, title: 'Strip · Idem preko zemlje Srbije',
          note: 'Тесла в поезде, Эдисон в самолёте, а бабушки в автобусе. Прочитайте кириллицу сами.',
          img: 'img/l13_strip.png',
          lines: [
            { who: 'Nikola', sr: 'Joj, Bože… dokle više? Putujem vozom u susedni grad i to tri sata.', ru: 'Ой, Боже… сколько можно? Еду поездом в соседний город, и это три часа.' },
            { who: 'Edison', sr: 'Ura! Avionom na more! Ha-ha, ćao, Edisonu!', ru: 'Ура! Самолётом на море! Ха-ха, пока, Эдисону!' },
            { who: 'Putnik', sr: 'Ee… izgleda da putovati busom nije lako za visoke… moja kolena…', ru: 'Э-э… похоже, ехать автобусом нелегко для высоких… мои колени…' },
            { who: 'Žena', sr: 'Hvala Bogu da sam kod kuće i ne gnjavim se po prevozu.', ru: 'Слава Богу, что я дома и не мучаюсь в транспорте.' }
          ]
        },
        {
          type: 'text', min: 7, title: 'Odakle putujemo? · откуда отправляемся',
          note: 'Нажимайте на слова и повторяйте.',
          img: 'img/l13_aerodrom.png',
          html: '<p>[[aerodrom]] — [[avionom]]; [[železnička stanica]] — [[vozom]]; [[autobuska stanica]] — [[busom]]; [[luka]] — [[brodom]].</p>',
          tables: [
            { caption: 'Aerodrom', head: ['', '', ''], rows: [['dolasci — прилёты', 'odlasci — вылеты', 'avion / let — самолёт / рейс'], ['prtljag — багаж', 'ručni prtljag — ручная кладь', 'sedište — место'], ['bording karta — посадочный', 'broj leta — номер рейса', 'Dolazim po tebe. — Приеду за тобой.']] },
            { caption: 'Železnička stanica', head: ['', '', ''], rows: [['termin — время отправления', 'peron — перрон', 'voz — поезд'], ['klima — кондиционер', 'kušet kola — купе', 'povratna karta — билет туда-обратно'], ['ležaj — полка', 'vagon — вагон', 'Voz polazi u 22.15.']] },
            { caption: 'Autobuska stanica', head: ['', '', ''], rows: [['kod prozora — у окна', 'u hodniku — у прохода', 'autobus — автобус'], ['žeton — жетон', 'peronska karta — перронный билет', 'kofer — чемодан'], ['karta u jednom smeru — в одну сторону', 'promeniti datum — изменить дату', 'Srećan put!']] }
          ]
        },
        {
          type: 'gap', min: 4, title: 'Stavite reč u instrumental · повторение',
          items: [
            'Ja sam stigao na aerodrom, putujem {avionom} (avion) u Italiju.', 'Kupili ste karte na železničkoj stanici jer idete {vozom} (voz) u Crnu Goru.',
            'Prvi put putuje {brodom} (brod) i zato je na luci.', 'Ranije nisi voleo da putuješ {busom} (bus), ali sada si kupio karte na autobuskoj stanici.'
          ]
        },
        {
          type: 'gap', bank: true, min: 5, title: 'Čet na WA · чат Видое и Марины',
          note: 'Вставьте слова из списка и прочитайте по ролям.',
          items: [
            '<b>Vidoje:</b> Ćao! Gde si? Kada dolaziš i koji je broj tvog {leta}?', '<b>Marina:</b> Hej, zdravo! Dolazim u 7.05, imam let broj DT-0056.',
            '<b>Vidoje:</b> Dobro, dolazim po tebe na {aerodrom}.', '<b>Marina:</b> Super, hvala! {Dolasci} su na drugom spratu.',
            '<b>Vidoje:</b> Da li imaš mnogo prtljaga? <b>Marina:</b> Ne, samo {ručni} {prtljag}.', '<b>Vidoje:</b> Okej, vidimo se!'
          ]
        },
        {
          type: 'gap', min: 8, title: 'Stanica Beograd centar · впишите форму глагола',
          note: 'В скобках — инфинитив и лицо. Потом прочитайте по ролям.',
          listen: true,
          items: [
            '<b>Nikola:</b> Dobar dan! {Želim} (želeti, ja) da {kupim} (kupiti, ja) karte do Bara.',
            '<b>Kasirka:</b> Dobar dan! Koji dan vam treba?',
            '<b>Nikola:</b> Sreda, 25. novembar. Koji termini {imate} (imati, vi)?',
            '<b>Kasirka:</b> Voz polazi u 22.15. Da li {odgovara} (odgovarati)?',
            '<b>Nikola:</b> Jeste. Imate li mesto u kušet kolima?',
            '<b>Kasirka:</b> Da, {imamo} (imati, mi). Prvi ležaj u trećem vagonu.',
            '<b>Nikola:</b> Odlično, koliko {košta} (koštati) povratna karta?',
            '<b>Kasirka:</b> Povratna karta košta 7.156 dinara. Da li {plaćate} (platiti, vi) karticom ili kešom?',
            '<b>Nikola:</b> Karticom. Izvolite. <b>Kasirka:</b> Hvala! Vaše karte, izvolite, srećan put!'
          ]
        },
        {
          type: 'text', min: 5, title: 'Autobuska stanica na Zelenom vencu · читаем диалог',
          note: 'Перица хочет изменить дату билета. Прослушайте, потом прочитайте по ролям.',
          html:
            '<p><b>Perica:</b> [[Zdravo! Kupio sam karte do Niša, ali želim da promenim datum.]]<br><b>Kasirka:</b> [[Dobar dan! Kada ste kupili karte?]]<br><b>Perica:</b> [[Ja sam bio na stanici juče, dakle 3. aprila.]]<br>' +
            '<b>Kasirka:</b> [[Dobro, samo sekund. Hm… mogli ste da promenite karte samo juče. Danas je veoma kasno.]]<br><b>Perica:</b> [[Jooj, Bože! Šta da radim? Ne mogu da idem danas!]]<br>' +
            '<b>Kasirka:</b> [[Možete da date karte nekome drugome na peronu i da kupite nove. Koji datum vam treba?]]<br><b>Perica:</b> [[Treba mi 6. april, u petak, jedna karta do Niša u jednom smeru.]]<br>' +
            '<b>Kasirka:</b> [[Može li u hodniku?]] <b>Perica:</b> [[Naravno! Koliko košta?]]<br><b>Kasirka:</b> [[Karta košta 2560 dinara, peronska karta ili žeton košta 150.]]<br><b>Perica:</b> [[Dobro, platim kešom. Hvala, doviđenja!]] <b>Kasirka:</b> [[Ništa, doviđenja!]]</p>'
        },
        {
          type: 'tf', min: 3, title: 'Tačno ili netačno? · по диалогу',
          items: [
            { q: 'Perica želi da promeni datum karte.', a: true }, { q: 'Kupio je karte 6. aprila.', a: false, why: 'Kupio ih je 3. aprila, juče.' },
            { q: 'Kasirka može da promeni karte danas.', a: false, why: 'Mogao je samo juče, danas je kasno.' }, { q: 'Perica kupuje novu kartu u jednom smeru.', a: true },
            { q: 'Karta košta 2560, a žeton 150 dinara.', a: true }, { q: 'Perica plaća karticom.', a: false, why: 'Plaća kešom.' }
          ]
        },
        {
          type: 'gap', min: 5, title: 'Izaberite padež imenice · падеж',
          options: ['stanici', 'stanicu', 'odmoru', 'odmor', 'koferi', 'kofera', 'para', 'pare', 'vozom', 'busom', 'avionom', 'karte', 'karata'],
          items: [
            'Moj muž me uvek čeka na {stanici}.', 'Olga sanja o godišnjem {odmoru}.', 'Moji {koferi} su preteški.', 'Nemam {para} pa neću ići u Nemačku.',
            'Moji roditelji su putovali u Crnu Goru {vozom}, {busom} i {avionom}.', 'Kupili smo dve {karte} za voz s popustom.'
          ]
        },
        {
          type: 'speak', min: 14, title: 'Na stanici · ролевая игра',
          note: 'Три вопроса из курса, потом две сцены: покупка билета на вокзале (дата, время, купе, туда-обратно, оплата) и изменение даты на автовокзале. Меняйтесь ролями.',
          items: [
            { q: 'Kako vi obično putujete? Koji je vaš omiljeni prevoz?', sample: 'Obično putujem avionom, ali moj omiljeni prevoz je voz.' },
            { q: 'Da li kupujete karte onlajn ili u kasi?', sample: 'Kupujem karte onlajn, unapred, jer su jeftinije.' },
            { q: 'Kasirka: Dobar dan! Koji dan vam treba?', sample: 'Putnik: Želim da kupim povratnu kartu do Novog Sada za subotu. Koji termini imate?' },
            { q: 'Kasirka: Voz polazi u 9.30. Kod prozora ili u hodniku?', sample: 'Putnik: Kod prozora, molim. Koliko košta? Platim karticom.' },
            { q: 'Putnik: Želim da promenim datum karte.', sample: 'Kasirka: Kada ste kupili karte? … Danas je kasno, možete da kupite nove.' }
          ]
        },
        {
          type: 'summary', min: 4, title: 'Rezime · итог занятия',
          points: [
            'aerodrom — dolasci, odlasci, let, prtljag, bording karta',
            'železnička stanica — termin, peron, kušet kola, povratna karta',
            'autobuska stanica — kod prozora / u hodniku, žeton, karta u jednom smeru',
            'Koji termini imate? Da li odgovara? Srećan put!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: путешествия, аэропорт, вокзал', est: 9, set: 'A' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Putujem vozom u susedni grad.'] }, { a: ['Dolazim po tebe na aerodrom.'] }, { a: ['Voz polazi u 22.15.'] },
            { a: ['Koliko košta povratna karta?'] }, { a: ['Želim da promenim datum.'] }, { a: ['Vaše karte, izvolite, srećan put!'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я приеду за тобой в аэропорт.', a: ['Dolazim po tebe na aerodrom.', 'Doći ću po tebe na aerodrom.'] },
            { q: 'Прилёты на втором этаже.', a: ['Dolasci su na drugom spratu.'] },
            { q: 'У меня только ручная кладь.', a: ['Imam samo ručni prtljag.'] },
            { q: 'Какие есть времена отправления?', a: ['Koji termini imate?', 'Koje termine imate?'] },
            { q: 'Есть место в купе?', a: ['Imate li mesto u kušet kolima?', 'Da li imate mesto u kušet kolima?'] },
            { q: 'Мне нужен билет в одну сторону до Ниша.', a: ['Treba mi karta do Niša u jednom smeru.', 'Treba mi jedna karta do Niša u jednom smeru.'] },
            { q: 'У окна или у прохода?', a: ['Kod prozora ili u hodniku?'] },
            { q: 'Счастливого пути!', a: ['Srećan put!'] }
          ]
        },
        {
          type: 'write', title: 'Dijalog na stanici · письменный диалог', est: 8, key: 'hw-13.1-dijalog',
          note: '10 реплик: покупка билета на поезд или автобус — дата, время, место, туда-обратно, оплата.',
          sample: 'Putnik: Dobar dan! Želim da kupim kartu do Novog Sada. Kasirka: Koji dan vam treba? Putnik: Subota, 10. maj. Kasirka: Voz polazi u 8.15 i u 12.40. Putnik: U 8.15, kod prozora, molim. Povratna karta. Kasirka: 1200 dinara. Karticom ili kešom? Putnik: Karticom. Kasirka: Izvolite karte, srećan put!'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '13.2',
      title: 'Futur I',
      ru: 'Будущее время: ću + инфинитив и слитная форма radiću',
      goals: [
        'построить будущее время с краткой формой hteti',
        'образовать слитную форму: radiću, pozvaću, reći ću',
        'рассказать о планах на отпуск в будущем времени'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Разыграйте домашний диалог на вокзале с партнёром.',
          items: [{ q: 'Dobar dan! Želim da kupim kartu do…' }]
        },
        {
          type: 'text', min: 10, title: 'Futur I · будущее время',
          html:
            '<p>В сербском два будущих времени; <b>futur I</b> используется гораздо чаще и соответствует русскому будущему. Образуется из краткой формы глагола <b>hteti</b> + инфинитив.</p>' +
            '<p>Краткие формы — энклитики, как <i>sam, si, je</i>: не могут стоять в начале предложения.</p>' +
            '<p>✅ [[Ja ću raditi.]] ❌ <s>Ću raditi.</s> ✅ [[Radiću.]]</p>' +
            '<p>Отрицание: <b>ne + ću = neću</b>, эта форма ударная и может стоять в начале: [[Neću raditi.]] [[Nećemo putovati.]]</p>',
          tables: [
            { caption: 'Futur I = hteti + infinitiv', head: ['jednina', 'množina'], rows: [['ja ću raditi', 'mi ćemo raditi'], ['ti ćeš raditi', 'vi ćete raditi'], ['on / ona / ono će raditi', 'oni / one / ona će raditi']] },
            { caption: 'Odrični oblik', head: ['jednina', 'množina'], rows: [['neću raditi', 'nećemo raditi'], ['nećeš raditi', 'nećete raditi'], ['neće raditi', 'neće raditi']] }
          ],
          after:
            '<p><b>Слитная форма.</b> Если предложение начинается с глагола (подлежащее опущено), связка сливается с ним:</p>' +
            '<ul><li>глаголы на <b>-ti</b>: отбрасываем -ti, добавляем ću: [[radiću, radićeš, radiće, radićemo, radićete, radiće]]; [[pozvaću te]], [[spavaće]];</li>' +
            '<li>глаголы на <b>-ći</b>: пишется раздельно: [[reći ću]], [[izaći ću]], [[stići ćete]], [[doći će]];</li>' +
            '<li>глаголы на <b>-sti</b>: тоже раздельно: [[jesti ću]], [[sresti ćemo se]].</li></ul>'
        },
        {
          type: 'gap', min: 6, title: 'Upišite oblik glagola hteti · связка',
          note: 'Впишите краткую форму по местоимению в скобках. Потом устно постройте отрицание.',
          items: [
            'Sledeće nedelje {ćemo} (mi) se odmarati na plaži i uživati u suncu.', 'Sutra {ćeš} (ti) kupiti avionske karte.', 'Prekosutra Marko i Tijana {će} (oni) leteti avionom za Pariz.',
            'Uskoro {ću} (ja) putovati po Evropi vozom.', 'Sledeće godine Nikola {će} (on) posetiti 5 različitih zemalja.', 'Da li {ćete} (vi) ići na odmor?'
          ]
        },
        {
          type: 'gap', bank: true, min: 6, title: 'Popunite prazna mesta · связка + глагол из списка',
          items: [
            'Marija {će kupiti} karte unapred jer su jeftinije.', 'Sutra {ću rezervisati} hotel sa 5 zvezdica.', 'Moji roditelji uskoro {će imati} godišnji odmor.',
            'Uskoro dolaze praznici i svi Rusi {će ići} na vikendice.', 'Vaše sedište je A30, vi {ćete sedeti} pored prozora.', 'Ako {ćeš pakovati} svoje stvari predugo, mi {ćemo propustiti} voz.'
          ]
        },
        {
          type: 'gap', min: 7, title: 'Slitna forma · слитная форма',
          note: 'В скобках — инфинитив и лицо. Для -ći и -sti пишите раздельно.',
          items: [
            '{Pozvaću} (pozvati, ja) te kad stignem u hotel.', '{Reći ćemo} (reći, mi) im da smo na odmoru.', '{Spavaće} (spavati, oni) kod kuće, očekuje ih ekskurzija.',
            '{Izaći ću} (izaći, ja) nakratko na svež vazduh.', '{Sresti ćemo} (sresti, mi) se ispred pozorišta.', '{Stići ćete} (stići, vi) u Beograd autobusom.'
          ]
        },
        {
          type: 'conj', min: 6, title: 'Trening · будущее время вслух',
          note: 'Назовите форму со связкой: ja ću putovati / neću putovati.',
          verbs: ['putovati', 'raditi', 'kupiti', 'ici', 'leteti', 'posetiti', 'rezervisati'], rounds: 10
        },
        {
          type: 'speak', min: 16, title: 'Planovi za odmor · планы на отпуск',
          note: 'Каждый рассказывает планы на следующий отпуск в будущем времени: куда, чем, с кем, что будете делать. Партнёр задаёт вопросы и потом пересказывает: On će putovati…',
          items: [
            { q: 'Kuda ćeš putovati sledećeg leta? Čime?', sample: 'Sledećeg leta ću putovati u Grčku. Letećemo avionom.' },
            { q: 'Šta ćeš raditi na odmoru?', sample: 'Odmaraću se na plaži, uživaću u suncu i jesti ću ribu svaki dan.' },
            { q: 'Da li ćeš rezervisati hotel unapred?', sample: 'Da, rezervisaću hotel sledeće nedelje.' },
            { q: 'Koga ćeš pozvati kad stigneš?', sample: 'Pozvaću mamu i reći ću joj da sam stigla.' },
            { q: 'Šta nećeš raditi na odmoru?', sample: 'Neću raditi i neću čitati mejlove!' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'ću, ćeš, će, ćemo, ćete, će + infinitiv: ja ću raditi',
            'neću, nećeš, neće… — может стоять в начале',
            'radiću, pozvaću, spavaće — слитно для -ti',
            'reći ću, doći će, jesti ću — раздельно для -ći, -sti'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: будущее время и планы', est: 8, set: 'B' },
        { type: 'conj', title: 'Тренажёр: futur I (утверждение и отрицание)', est: 6, verbs: ['putovati', 'raditi', 'kupiti', 'ici', 'leteti', 'posetiti', 'rezervisati'], rounds: 14 },
        {
          type: 'qa', mode: 'transform', title: 'Slitna forma · напишите слитную форму', est: 5,
          note: 'Пример: raditi, ja → radiću.',
          items: [
            { q: 'raditi, ja', a: ['radiću'] }, { q: 'putovati, mi', a: ['putovaćemo'] }, { q: 'kupiti, ti', a: ['kupićeš'] }, { q: 'spavati, oni', a: ['spavaće'] },
            { q: 'pozvati, ja', a: ['pozvaću'] }, { q: 'reći, mi', a: ['reći ćemo'] }, { q: 'doći, on', a: ['doći će'] }, { q: 'jesti, ja', a: ['jesti ću'] },
            { q: 'posetiti, vi', a: ['posetićete'] }, { q: 'stići, vi', a: ['stići ćete'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Sutra ćeš kupiti avionske karte.'] }, { a: ['Uskoro ću putovati po Evropi vozom.'] }, { a: ['Pozvaću te kad stignem u hotel.'] },
            { a: ['Reći ćemo im da smo na odmoru.'] }, { a: ['Sresti ćemo se ispred pozorišta.'] }, { a: ['Neću raditi na odmoru.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 7,
          items: [
            { q: 'Завтра я куплю билеты.', a: ['Sutra ću kupiti karte.', 'Kupiću karte sutra.'] },
            { q: 'Мы будем отдыхать на пляже.', a: ['Odmaraćemo se na plaži.', 'Mi ćemo se odmarati na plaži.'] },
            { q: 'Он посетит пять стран.', a: ['On će posetiti pet zemalja.', 'Posetiće pet zemalja.'] },
            { q: 'Ты поедешь в отпуск?', a: ['Da li ćeš ići na odmor?', 'Hoćeš li ići na odmor?'] },
            { q: 'Я не буду работать в субботу.', a: ['Neću raditi u subotu.', 'Ja neću raditi u subotu.'] },
            { q: 'Я позвоню тебе, когда приеду.', a: ['Pozvaću te kad stignem.', 'Pozvaću te kada stignem.'] },
            { q: 'Мы встретимся перед театром.', a: ['Sresti ćemo se ispred pozorišta.', 'Srešćemo se ispred pozorišta.'] }
          ]
        },
        {
          type: 'write', title: 'Moj sledeći odmor · планы в будущем + запись', est: 8, key: 'hw-13.2-odmor', record: true,
          note: '10 предложений о следующем отпуске в будущем времени, минимум три слитные формы и одно отрицание. Запишите чтение вслух.',
          sample: 'Sledećeg leta ću putovati u Grčku sa devojkom. Letećemo avionom iz Beograda. Rezervisaću hotel blizu mora. Svaki dan ćemo se odmarati na plaži i uživati u suncu. Jesti ćemo ribu i piti belo vino. Posetićemo Atinu i jedno ostrvo. Neću raditi i neću čitati mejlove. Pozvaću mamu kad stignemo. Kupiću suvenire. Vratićemo se za deset dana.'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '13.3',
      title: 'Prošlost, sadašnjost, budućnost',
      ru: 'Три времени вместе; путешествие в перфекте, презенте и футуре',
      goals: [
        'выбрать нужное время по контексту: prošle godine / svake nedelje / sledeće godine',
        'рассказать о поездке в трёх временах',
        'понимать песню о поездке на поезде'
      ],
      blocks: [
        {
          type: 'speak', min: 5, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний текст об отпуске. Партнёр пересказывает в третьем лице: Ona će putovati…',
          items: [{ q: 'Sledećeg leta ću…' }]
        },
        {
          type: 'text', min: 5, title: 'Tri vremena · три времени',
          html: '<p>Маркеры времени подсказывают форму: <b>prošle godine, juče, prošlog meseca</b> → перфект; <b>svake nedelje, sada, obično</b> → презент; <b>sledeće godine, sutra, uskoro, kada stignem</b> → футур.</p>',
          tables: [
            { caption: 'putovati', head: ['perfekat', 'prezent', 'futur I'], rows: [['ja sam putovao / putovala', 'ja putujem', 'ja ću putovati / putovaću'], ['on je putovao', 'on putuje', 'on će putovati'], ['mi smo putovali', 'mi putujemo', 'mi ćemo putovati'], ['nisam putovao', 'ne putujem', 'neću putovati']] }
          ]
        },
        {
          type: 'gap', min: 8, title: 'Upotrebite ispravno vreme · выберите время',
          note: 'Упражнение из курса. В скобках — инфинитив; ориентируйтесь на маркеры времени.',
          items: [
            'Prošle godine Marko {je bio} (biti) u Kini, a sledeće godine {će ići} (ići) u Ameriku.', 'Svake nedelje mi {igramo} (igrati) fudbal sa svojim kolegama.',
            'Sada Dragan i Milica {nemaju} (imati, odrični) para, pa ne {putuju} (putovati).', 'Kada stignem u Italiju, {poslaću} (poslati, ja) majci razglednicu.',
            'Znam da prošlog meseca ti {si izgubio|si izgubila} (izgubiti) pasoš.', 'Moramo odmah da {rezervišemo} (rezervisati) hotel!'
          ]
        },
        {
          type: 'mc', min: 6, title: 'Koje vreme? · какое время',
          items: [
            { q: 'Juče … u Novi Sad.', options: ['idem', 'sam išao', 'ću ići'], a: 'sam išao' }, { q: 'Sutra … karte.', options: ['kupujem', 'sam kupio', 'ću kupiti'], a: 'ću kupiti' },
            { q: 'Svakog leta … na more.', options: ['idemo', 'smo išli', 'ćemo ići'], a: 'idemo' }, { q: 'Prošle nedelje … hotel.', options: ['rezervišem', 'sam rezervisao', 'ću rezervisati'], a: 'sam rezervisao' },
            { q: 'Uskoro … avionom u Pariz.', options: ['letimo', 'smo leteli', 'ćemo leteti'], a: 'ćemo leteti' }, { q: 'Sada … na stanici i čekam voz.', options: ['sam', 'sam bio', 'ću biti'], a: 'sam' },
            { q: 'Kad stignem, … te.', options: ['zovem', 'sam zvao', 'pozvaću'], a: 'pozvaću' }, { q: 'Nikad … u Kini.', options: ['nisam bio', 'nisam', 'neću'], a: 'nisam bio' }
          ]
        },
        {
          type: 'text', min: 5, title: 'Pesme i put · песня о поезде',
          html:
            '<p>В курсе к этому уроку прилагается песня <b>Bajaga i Instruktori — «Ruski voz»</b> (1988): лирический герой едет ночным поездом через Харьков, Гомель и Ленинград и пишет письмо о своей любви. Найдите её на YouTube и послушайте дома два-три раза.</p>' +
            '<p>Слова, которые стоит поймать на слух: [[voz]], [[pospani]] (сонный), [[hartija]] (бумага), [[poštar]] (почтальон), [[pismo]], [[marka]], [[tuga]] (тоска), [[votka]], [[poljubac]] (поцелуй). Текст песни здесь не приводим, попробуйте записать строчки, которые узнаёте.</p>'
        },
        {
          type: 'qa', mode: 'transform', min: 8, title: 'Tri vremena · переведите предложение в другое время',
          note: 'Перепишите в указанном времени. Род — мужской.',
          items: [
            { q: 'Putujem vozom. → perfekat', a: ['Putovao sam vozom.', 'Ja sam putovao vozom.'] }, { q: 'Putujem vozom. → futur', a: ['Putovaću vozom.', 'Ja ću putovati vozom.'] },
            { q: 'Kupujem karte. → futur', a: ['Kupiću karte.', 'Ja ću kupiti karte.', 'Kupovaću karte.'] }, { q: 'Rezervišem hotel. → perfekat', a: ['Rezervisao sam hotel.', 'Ja sam rezervisao hotel.'] },
            { q: 'Idem na odmor. → futur', a: ['Ići ću na odmor.', 'Ja ću ići na odmor.'] }, { q: 'Letim avionom. → perfekat', a: ['Leteo sam avionom.', 'Ja sam leteo avionom.'] },
            { q: 'Ne radim. → futur', a: ['Neću raditi.', 'Ja neću raditi.'] }, { q: 'Nisam na moru. → futur', a: ['Neću biti na moru.', 'Ja neću biti na moru.'] }
          ]
        },
        {
          type: 'speak', min: 18, title: 'Moje putovanje: juče, danas, sutra · рассказ в трёх временах',
          note: 'Каждый рассказывает о путешествиях: где был (перфект), как обычно путешествует (презент), куда поедет (футур), по 4 предложения на каждое время. Партнёр отмечает, все ли три времени прозвучали, и задаёт по одному вопросу на каждое.',
          items: [
            { q: 'Gde si bio / bila prošle godine? Čime si putovao / putovala?', sample: 'Prošle godine sam bila u Crnoj Gori. Putovala sam vozom, bilo je dugo.' },
            { q: 'Kako obično putuješ? Sa kim?', sample: 'Obično putujem avionom, sa devojkom. Karte kupujem onlajn.' },
            { q: 'Kuda ćeš putovati sledeće godine? Šta ćeš raditi?', sample: 'Sledeće godine ću putovati u Italiju. Posetiću Rim i jesti ću picu svaki dan.' },
            { q: 'Šta nikad nisi radio / radila, a želiš? Kada ćeš to uraditi?', sample: 'Nikad nisam putovala brodom. Sledećeg leta ću ići brodom na ostrvo.' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'prošle godine — sam putovao; svake nedelje — putujem; sledeće godine — ću putovati',
            'nisam putovao — ne putujem — neću putovati',
            'Kad stignem, pozvaću te.',
            'Nikad nisam bio u Kini, ali ću ići sledeće godine.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: повтор всего урока', est: 7, set: 'A' },
        { type: 'conj', tense: 'past', title: 'Тренажёр: перфект (повтор)', est: 5, verbs: ['putovati', 'raditi', 'kupiti', 'ici', 'leteti', 'posetiti', 'rezervisati'], rounds: 10 },
        { type: 'conj', title: 'Тренажёр: futur I (повтор)', est: 5, verbs: ['putovati', 'raditi', 'kupiti', 'ici', 'leteti', 'posetiti', 'rezervisati'], rounds: 10 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Prošle godine Marko je bio u Kini.'] }, { a: ['Sledeće godine će ići u Ameriku.'] }, { a: ['Svake nedelje igramo fudbal.'] },
            { a: ['Kada stignem u Italiju, poslaću majci razglednicu.'] }, { a: ['Prošlog meseca si izgubio pasoš.'] }, { a: ['Moramo odmah da rezervišemo hotel!'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод: три времени', est: 8,
          items: [
            { q: 'В прошлом году я был в Китае.', a: ['Prošle godine sam bio u Kini.', 'Prošle godine sam bila u Kini.', 'Bio sam u Kini prošle godine.'] },
            { q: 'В следующем году я поеду в Америку.', a: ['Sledeće godine ću ići u Ameriku.', 'Ići ću u Ameriku sledeće godine.', 'Sledeće godine ću putovati u Ameriku.'] },
            { q: 'Каждую неделю мы играем в футбол.', a: ['Svake nedelje igramo fudbal.', 'Svake nedelje mi igramo fudbal.'] },
            { q: 'Когда приеду, отправлю маме открытку.', a: ['Kad stignem, poslaću mami razglednicu.', 'Kada stignem, poslaću mami razglednicu.', 'Kad stignem, poslaću majci razglednicu.'] },
            { q: 'Ты потерял паспорт?', a: ['Da li si izgubio pasoš?', 'Jesi li izgubio pasoš?', 'Izgubio si pasoš?'] },
            { q: 'Мы должны сразу забронировать отель.', a: ['Moramo odmah da rezervišemo hotel.'] },
            { q: 'Я никогда не путешествовал на пароме.', a: ['Nikad nisam putovao brodom.', 'Nikad nisam putovala brodom.'] },
            { q: 'Сейчас у них нет денег, поэтому они не путешествуют.', a: ['Sada nemaju para, pa ne putuju.', 'Sada oni nemaju para, pa ne putuju.'] }
          ]
        },
        {
          type: 'write', title: 'Juče, danas, sutra · текст в трёх временах + запись', est: 12, key: 'hw-13.3-tri-vremena', record: true,
          note: '12 предложений: 4 о прошлой поездке (перфект), 4 о том, как обычно путешествуете (презент), 4 о будущей (футур). Запишите чтение вслух.',
          sample: 'Prošle godine sam putovala u Crnu Goru. Išla sam vozom sa sestrom. Bile smo na moru deset dana. Jele smo ribu i pile vino. Obično putujem avionom. Karte kupujem onlajn, unapred. Volim da sedim kod prozora. Ne volim da putujem busom. Sledeće godine ću ići u Italiju. Letećemo avionom u Rim. Posetiću muzeje i jesti ću picu. Pozvaću mamu kad stignem.'
        }
      ]
    }
  ]
});
