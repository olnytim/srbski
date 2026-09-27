// Lekcija 30 - Finalni test. Two 60-minute sessions: grammar test (auxiliary verbs, verb forms, cases) and speaking/writing test (essay, ticket steps, emergency call), plus a final review.
COURSE.register({
  n: 30,
  title: 'Finalni test',
  ru: 'Итоговый тест: вспомогательные глаголы, формы глагола, падежи, сочинение, монолог',

  vocab: [
    { id: 'pomocni-glagoli', sr: 'pomoćni glagoli: biti, hteti', ru: 'вспомогательные глаголы', set: 'A' },
    { id: 'jesam', sr: 'jesam — sam, jesi — si, jeste — je', ru: 'полные и краткие формы «быть»', set: 'A' },
    { id: 'nisam', sr: 'nisam, nisi, nije, nismo, niste, nisu', ru: 'отрицательные формы «быть»', set: 'A' },
    { id: 'cu', sr: 'ću, ćeš, će, ćemo, ćete, će', ru: 'футур: краткие формы hteti', set: 'A' },
    { id: 'bih', sr: 'bih, bi, bi, bismo, biste, bi', ru: 'потенциал', set: 'A' },
    { id: 'uspomene', sr: 'tople uspomene', ru: 'тёплые воспоминания', set: 'A' },
    { id: 'postati', sr: 'postati arhitekta', ru: 'стать архитектором', set: 'A' },
    { id: 'saren', sr: 'šaren, predivan, dvorac', ru: 'пёстрый, чудесный, замок', set: 'A' },
    { id: 'upisati', sr: 'upisati fakultet, završiti fakultet', ru: 'поступить в университет, окончить', set: 'A' },
    { id: 'gradjevinski', sr: 'građevinski fakultet, studentski dom', ru: 'строительный факультет, общежитие', set: 'A' },
    { id: 'preseliti', sr: 'preseliti se iz Leskovca u Beograd', ru: 'переехать', set: 'A' },
    { id: 'kancelarija30', sr: 'raditi u kancelariji, u drugoj firmi', ru: 'работать в офисе, в другой фирме', set: 'A' },
    { id: 'prvi-razred', sr: 'ići u školu, u prvi razred', ru: 'идти в школу, в первый класс', set: 'A' },
    { id: 'brinuti', sr: 'brinuti se — Ne brinem se o tome.', ru: 'беспокоиться', set: 'A' },
    { id: 'popricati', sr: 'popričati sa ljudima', ru: 'поболтать с людьми', set: 'A' },
    { id: 'raspust', sr: 'raspust, tokom raspusta', ru: 'каникулы, во время каникул', set: 'A' },
    { id: 'menjacnica', sr: 'menjačnica, klinika', ru: 'обменник, клиника', set: 'A' },

    { id: 'sastav', sr: 'sastav, naslov', ru: 'сочинение, заголовок', set: 'B' },
    { id: 'planovi', sr: 'planovi za budućnost', ru: 'планы на будущее', set: 'B' },
    { id: 'veb-stranica', sr: 'otvoriti veb-stranicu', ru: 'открыть веб-страницу', set: 'B' },
    { id: 'rezervacija', sr: 'rezervacija leta, tarifa', ru: 'бронирование рейса, тариф', set: 'B' },
    { id: 'licni-podaci', sr: 'uneti lične podatke', ru: 'ввести личные данные', set: 'B' },
    { id: 'platna-kartica', sr: 'podaci platne kartice', ru: 'данные банковской карты', set: 'B' },
    { id: 'potvrditi', sr: 'potvrditi pritiskom na dugme', ru: 'подтвердить нажатием кнопки', set: 'B' },
    { id: 'povratni-let', sr: 'povratni let, dodati prtljag', ru: 'обратный рейс, добавить багаж', set: 'B' },
    { id: 'hitna', sr: 'hitna pomoć, dispečer', ru: 'скорая помощь, диспетчер', set: 'B' },
    { id: 'simptomi', sr: 'simptomi: kašalj, kijavica, temperatura', ru: 'симптомы: кашель, насморк, температура', set: 'B' },
    { id: 'groznica', sr: 'groznica, mučnina, povraćanje, glavobolja', ru: 'лихорадка, тошнота, рвота, головная боль', set: 'B' },
    { id: 'bolujem', sr: 'Bolujem već pet dana.', ru: 'Болею уже пять дней.', set: 'B' },
    { id: 'pol', sr: 'ime, pol, godine, adresa', ru: 'имя, пол, возраст, адрес', set: 'B' },
    { id: 'osiguranje', sr: 'Imam osiguranje. — Nemam osiguranje.', ru: 'У меня есть страховка. — Нет страховки.', set: 'B' }
  ],

  verbs: {
    biti: { inf: 'biti', ru: 'быть', l: { m: 'bio', f: 'bila', n: 'bilo', mpl: 'bili', fpl: 'bile' } },
    zeleti: { inf: 'želeti', ru: 'хотеть', l: { m: 'želeo', f: 'želela', n: 'želelo', mpl: 'želeli', fpl: 'želele' } },
    zavrsiti: { inf: 'završiti', ru: 'закончить', l: { m: 'završio', f: 'završila', n: 'završilo', mpl: 'završili', fpl: 'završile' } },
    raditi: { inf: 'raditi', ru: 'работать', pos: { ja: 'radim', ti: 'radiš', on: 'radi', mi: 'radimo', vi: 'radite', oni: 'rade' }, neg: { ja: 'ne radim', ti: 'ne radiš', on: 'ne radi', mi: 'ne radimo', vi: 'ne radite', oni: 'ne rade' }, l: { m: 'radio', f: 'radila', n: 'radilo', mpl: 'radili', fpl: 'radile' } },
    ziveti: { inf: 'živeti', ru: 'жить', pos: { ja: 'živim', ti: 'živiš', on: 'živi', mi: 'živimo', vi: 'živite', oni: 'žive' }, neg: { ja: 'ne živim', ti: 'ne živiš', on: 'ne živi', mi: 'ne živimo', vi: 'ne živite', oni: 'ne žive' }, l: { m: 'živeo', f: 'živela', n: 'živelo', mpl: 'živeli', fpl: 'živele' } },
    imati: { inf: 'imati', ru: 'иметь', pos: { ja: 'imam', ti: 'imaš', on: 'ima', mi: 'imamo', vi: 'imate', oni: 'imaju' }, neg: { ja: 'nemam', ti: 'nemaš', on: 'nema', mi: 'nemamo', vi: 'nemate', oni: 'nemaju' }, l: { m: 'imao', f: 'imala', n: 'imalo', mpl: 'imali', fpl: 'imale' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '30.1',
      title: 'Finalni test · gramatika',
      ru: 'Вспомогательные глаголы, формы глагола в тексте, падежи',
      goals: [
        'пройти тест на вспомогательные глаголы без подсказок',
        'вставить 30 форм глаголов в текст: перфект, презент, футур',
        'поставить 17 существительных в нужный падеж'
      ],
      blocks: [
        {
          type: 'text', min: 3, title: 'Ovo nije običan čas · вступление',
          img: 'img/l30_test.png',
          html: '<p>[[Ovo nije običan čas — ovo je finalno testiranje! Srećno!]]</p><p>Правила: три задания подряд, без словаря и без подсказок партнёра. Каждый решает на своём экране по очереди или по половине заданий. Считайте ответы «с первой попытки».</p>'
        },
        {
          type: 'mc', min: 12, title: 'Pomoćni glagoli · тест на время (13 вопросов)',
          note: 'В курсе это тест на 25 минут; содержание не сохранилось, вопросы составлены заново. Засеките 10 минут.',
          items: [
            { q: 'Ja … student.', options: ['sam', 'je', 'su'], a: 'sam' },
            { q: 'Da li … vi iz Rusije?', options: ['ste', 'smo', 'su'], a: 'ste' },
            { q: 'Oni … došli juče.', options: ['su', 'smo', 'ste'], a: 'su' },
            { q: 'Mi … bili u Nišu.', options: ['smo', 'su', 'ste'], a: 'smo' },
            { q: '… li ti kod kuće?', options: ['Jesi', 'Jesu', 'Jeste'], a: 'Jesi' },
            { q: 'Ja … Marko, ja sam Petar.', options: ['nisam', 'nije', 'nisu'], a: 'nisam' },
            { q: 'Sutra … ići u bioskop. (mi)', options: ['ćemo', 'ćete', 'će'], a: 'ćemo' },
            { q: 'Da li … doći na žurku? (ti)', options: ['ćeš', 'ću', 'će'], a: 'ćeš' },
            { q: 'Oni … putovati u Grčku.', options: ['će', 'ćemo', 'ćeš'], a: 'će' },
            { q: 'Ja … voleo da ti pomognem.', options: ['bih', 'bi', 'bismo'], a: 'bih' },
            { q: 'Mi … rado došli.', options: ['bismo', 'biste', 'bih'], a: 'bismo' },
            { q: 'Da li … vi mogli da nam kažete?', options: ['biste', 'bismo', 'bi'], a: 'biste' },
            { q: '… li on kod kuće?', options: ['Je', 'Jeste', 'Jesu'], a: 'Je' }
          ]
        },
        {
          type: 'gap', min: 22, title: 'Unesite ispravni oblik glagola · текст из курса',
          note: 'Рассказчик — мужчина (жена Бояна). В скобках подсказка. Оба порядка «sam + причастие» и «причастие + sam» принимаются.',
          items: [
            'Kada {sam bio|bio sam} <i>(biti, ja, perfekat)</i> dete, {sam želeo|želeo sam} <i>(želeti, ja, perfekat)</i> da postanem arhitekta. Moja mama {je kupila|kupila je} <i>(kupiti, perfekat)</i> mnogo knjiga za mene, sve knjige {su bile|bile su} <i>(biti, perfekat)</i> lepe, šarene, sa predivnim slikama različitih zgrada i dvoraca.',
            'Mi {smo čitali|čitali smo} <i>(čitati, perfekat)</i> ove knjige zajedno sa mamom i ponekad starijom sestrom. Ovo su baš tople uspomene za mene.',
            'Kasnije učenici {su išli|išli su} <i>(ići, perfekat)</i> na fakultet. Takođe {sam upisao|upisao sam} <i>(upisati, ja, perfekat)</i> građevinski fakultet u Beogradu. {Preselio sam} <i>(preseliti, ja, perfekat)</i> se iz Leskovca u Beograd, {živeo sam|sam živeo} <i>(živeti, ja, perfekat)</i> u studentskom domu 5 godina. {Radio sam} <i>(raditi, ja, perfekat)</i> kao konobar u kafiću pored fakulteta.',
            '{Završio sam} <i>(završiti, ja, perfekat)</i> fakultet pre 7 godina. Moji prijatelji takođe {su završili|završili su} <i>(završiti, perfekat)</i> fakultet, mnogi već {imaju} <i>(imati, oni, prezent)</i> porodice i decu. I ja {imam} <i>(imati, prezent)</i> porodicu, ženu i ćerku.',
            'Moja žena {se zove} <i>(zvati se, prezent)</i> Bojana, a ćerka {se zove} <i>(zvati se, prezent)</i> Isidora. Isidora {ima} <i>(imati, prezent)</i> 5 godina. Bojana {radi} <i>(raditi, prezent)</i> kao učiteljica u školi, a ja {radim} <i>(raditi, prezent)</i> u kancelariji.',
            'Naša porodica {živi} <i>(živeti, prezent)</i> u Beogradu. Moji mama i tata {su ostali|ostali su} <i>(ostati, perfekat)</i> u Leskovcu. Kad smo kod njih, uvek idemo zajedno u prodavnicu. Mama {kaže} <i>(kazati, prezent)</i> da {voli} <i>(voleti)</i> popričati sa ljudima.',
            'Sledeće godine ja {ću raditi|radiću} <i>(raditi, futur)</i> u drugoj firmi. A moja ćerka {će imati|imaće} <i>(imati, futur)</i> 6 godina. {Ići će|Ide} <i>(ići, futur)</i> u školu, u prvi razred.',
            'Moja žena malo se boji kako {će biti|biće} <i>(biti, ono, futur)</i> u školi, ali ja mislim, {biće|će biti} <i>(biti, ono, futur)</i> sve u redu. Ne brinem se o tome.'
          ]
        },
        {
          type: 'gap', min: 14, title: 'Stavite reč u odgovarajući padež · из курса',
          note: 'В скобках слово и падеж.',
          items: [
            '1. Hajde da idemo u {restoran} <i>(restoran, akuzativ)</i> večeras!',
            '2. Putovale su u {Japan} <i>(Japan, akuzativ)</i>, sada one žive u {Brazilu} <i>(Brazil, lokativ)</i>.',
            '3. Svaki dan idemo na posao {metroom} <i>(metro, instrumental)</i> i {taksijem} <i>(taksi, instrumental)</i>, ponekad ja idem {autom} <i>(auto, instrumental)</i>.',
            '4. Da li si ti dala poklon {mami} <i>(mama, dativ)</i>?',
            '5. Čitaćeš ovu {knjigu} <i>(knjiga, akuzativ)</i> tokom {raspusta} <i>(raspust, genitiv)</i>.',
            '6. Mirjana ima {brata} <i>(brat, akuzativ)</i> i {sestru} <i>(sestra, akuzativ)</i>.',
            '7. Pored {prodavnice} <i>(prodavnica, genitiv)</i> se nalazi menjačnica.',
            '8. Između {kauča} <i>(kauč, genitiv)</i> i {stola} <i>(sto, genitiv)</i> je ormar.',
            '9. Njena baka je sada u {klinici} <i>(klinika, lokativ)</i>.',
            '10. Iskreno, mi bismo hteli da gledamo {seriju} <i>(serija, akuzativ)</i> kod {kuće} <i>(kuća, genitiv)</i>.'
          ]
        },
        {
          type: 'speak', min: 5, title: 'Prepričajte · перескажите текст',
          note: 'Один пересказывает историю рассказчика в третьем лице (on je želeo…), второй считает ошибки в связках и падежах.',
          items: [
            { q: 'Šta je želeo kad je bio dete? Šta je studirao?', sample: 'Kad je bio dete, želeo je da postane arhitekta. Upisao je građevinski fakultet u Beogradu.' },
            { q: 'Kakva je njegova porodica sada? Šta će biti sledeće godine?', sample: 'Ima ženu Bojanu i ćerku Isidoru. Sledeće godine će raditi u drugoj firmi, a ćerka će ići u školu.' }
          ]
        },
        {
          type: 'summary', min: 4, title: 'Rezime · что проверили',
          points: [
            'sam / si / je / smo / ste / su; nisam…; ću / ćeš / će…; bih / bi / bismo / biste',
            'perfekat: bio sam, kupila je, išli su; futur: radiću, imaće, ići će, biće',
            'akuzativ za kretanje: u restoran, u Japan; lokativ za mesto: u Brazilu, u klinici',
            'instrumental: metroom, taksijem, autom; genitiv: pored prodavnice, između kauča i stola'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: вспомогательные глаголы и текст', est: 8, set: 'A' },
        {
          type: 'conj', title: 'Тренажёр перфекта', est: 6,
          tense: 'past', verbs: ['biti', 'zeleti', 'zavrsiti', 'raditi', 'ziveti', 'imati'], rounds: 10
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Когда я был ребёнком, я хотел стать архитектором.', a: ['Kad sam bio dete, želeo sam da postanem arhitekta.', 'Kada sam bio dete, želeo sam da postanem arhitekta.', 'Kad sam bila dete, želela sam da postanem arhitekta.'] },
            { q: 'Я переехал из Лесковца в Белград.', a: ['Preselio sam se iz Leskovca u Beograd.', 'Preselila sam se iz Leskovca u Beograd.'] },
            { q: 'Мои родители остались в Лесковце.', a: ['Moji roditelji su ostali u Leskovcu.', 'Moji roditelji ostali su u Leskovcu.'] },
            { q: 'В следующем году я буду работать в другой фирме.', a: ['Sledeće godine ću raditi u drugoj firmi.', 'Sledeće godine radiću u drugoj firmi.'] },
            { q: 'Всё будет в порядке, я не беспокоюсь об этом.', a: ['Biće sve u redu, ne brinem se o tome.', 'Sve će biti u redu, ne brinem se o tome.'] },
            { q: 'Рядом с магазином находится обменник.', a: ['Pored prodavnice se nalazi menjačnica.', 'Pored prodavnice nalazi se menjačnica.'] },
            { q: 'Ты дала подарок маме?', a: ['Da li si dala poklon mami?', 'Jesi li dala poklon mami?', 'Da li si ti dala poklon mami?'] }
          ]
        },
        {
          type: 'write', title: 'Moja priča · рассказ о себе по образцу текста', est: 10, key: 'hw-30.1-prica', record: true,
          note: '10 предложений о себе по образцу текста: кем хотели стать, что изучали, где жили, кто ваша семья, что будет в следующем году. Три времени: перфект, презент, футур. Запишите чтение вслух.',
          sample: 'Kad sam bio dete, želeo sam da postanem pilot. Mama mi je kupila mnogo knjiga o avionima. Kasnije sam upisao ekonomski fakultet u Moskvi. Živeo sam u studentskom domu tri godine i radio sam kao kurir. Završio sam fakultet pre pet godina. Sada radim u kancelariji i učim srpski. Moja devojka se zove Ana, ona radi kao dizajnerka. Živimo u Beogradu, a moji roditelji su ostali u Rusiji. Sledeće godine ćemo putovati po Srbiji. Biće super, ne brinem se o tome!'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '30.2',
      title: 'Finalni test · pisanje i govor',
      ru: 'Сочинение, шаги покупки билета, звонок в скорую помощь, итог курса',
      goals: [
        'написать сочинение на одну из четырёх тем курса',
        'восстановить порядок покупки билета на сайте Air Serbia',
        'позвонить в скорую и описать симптомы по сценарию'
      ],
      blocks: [
        {
          type: 'write', min: 18, title: 'Sastav · выберите одну тему и напишите сочинение', key: 'test-30.2-sastav',
          note: 'Задание из курса. Темы: 1. Moje omiljeno putovanje, 2. Hobiji koje ja volim, 3. Zašto volim Srbiju, 4. Planovi za budućnost. Минимум 10 предложений, 15 минут, без словаря. Потом партнёр читает и задаёт три вопроса.',
          sample: 'Zašto volim Srbiju. Volim Srbiju zbog ljudi i hrane. Srbi su otvoreni i vole da popričaju sa strancima. Kad sam prvi put došla u Beograd, komšija mi je odmah doneo ajvar i rakiju. Volim da šetam Kalemegdanom i da gledam Dunav i Savu. Vikendom idemo na Kopaonik ili na Taru, priroda je predivna. U kafani uvek naručujem gibanicu i kiselu vodu. Naučila sam da igram kolo na slavi kod prijatelja. Ponekad mi je teško sa padežima, ali svaki dan pričam srpski. Sledeće godine bih volela da putujem na jug, u Niš i Pirot. Srbija je sada moj drugi dom.'
        },
        {
          type: 'match', min: 8, title: 'Kupovina karte · восстановите порядок шагов',
          note: 'Задание из курса по видео Air Serbia «Brže do karte». Соедините номер шага и действие.',
          pairs: [
            ['1', 'Otvorite veb-stranicu Air Srbija', 'Prvo, otvorite veb-stranicu Air Srbija.'],
            ['2', 'U segmentu za rezervaciju leta unesite informaciju', 'Drugo, u segmentu za rezervaciju leta unesite informaciju.'],
            ['3', 'Odaberite vreme koje vam odgovara', 'Treće, odaberite vreme koje vam odgovara.'],
            ['4', 'Zatim odaberite tarifu', 'Četvrto, zatim odaberite tarifu.'],
            ['5', 'Ukoliko vam je potrebno, možete dodati prtljag', 'Peto, ukoliko vam je potrebno, možete dodati prtljag.'],
            ['6', 'Ponovite proces za povratni let', 'Šesto, ponovite proces za povratni let.'],
            ['7', 'Unesite lične podatke', 'Sedmo, unesite lične podatke.'],
            ['8', 'Posle unesite podatke vaše platne kartice', 'Osmo, posle unesite podatke vaše platne kartice.'],
            ['9', 'Potvrdite pritiskom na dugme „Nastavi“', 'Deveto, potvrdite pritiskom na dugme Nastavi.'],
            ['10', 'Gotovo je! Karte su na vašoj pošti', 'Deseto, gotovo je! Karte su na vašoj pošti.']
          ]
        },
        {
          type: 'text', min: 4, title: 'Zovite hitnu pomoć · слова для монолога',
          html: '<p><b>Scenario 1:</b> [[kašalj]] — кашель, [[kijavica]] — насморк, [[temperatura 39]], [[bolujem pet dana]], [[imam osiguranje]].</p>' +
            '<p><b>Scenario 2:</b> [[groznica]] — лихорадка, [[mučnina]] — тошнота, [[povraćanje]] — рвота, [[glavobolja]] — головная боль, [[bolujem tri dana]], [[nemam osiguranje]].</p>' +
            '<p>Оба: [[Zovem se…]], [[muško / žensko]], [[imam … godina]], [[moja adresa je…]], [[Pošaljite hitnu pomoć, molim vas.]]</p>'
        },
        {
          type: 'speak', min: 14, title: 'Poziv hitnoj pomoći · монолог по сценарию, 3 минуты',
          note: 'Задание из курса: выберите сценарий и представьте, что говорите с диспетчером скорой помощи. Запишите монолог (в курсе на запись 3 минуты). Партнёр — диспетчер, задаёт уточняющие вопросы.',
          record: true,
          items: [
            { q: 'Dispečer: Hitna pomoć, izvolite. Šta se desilo?', sample: 'Dobar dan, zovem se Ana Petrović. Imam kašalj i kijavicu, temperatura mi je 39. Bolujem već pet dana.' },
            { q: 'Dispečer: Recite ime, pol, godine i adresu.', sample: 'Ana Petrović, žensko, imam 32 godine. Adresa je Cara Dušana 27, treći sprat.' },
            { q: 'Dispečer: Da li imate osiguranje?', sample: 'Da, imam osiguranje. Molim vas, pošaljite hitnu pomoć, ne mogu da ustanem.' },
            { q: 'Scenario 2: groznica, mučnina, povraćanje, glavobolja, tri dana, bez osiguranja.', sample: 'Imam groznicu i jaku glavobolju, muka mi je i povraćam. Bolujem tri dana. Nemam osiguranje, ali mogu da platim.' }
          ]
        },
        {
          type: 'flash', min: 8, title: 'Karte · слова всего курса на повторение', set: 'B'
        },
        {
          type: 'speak', min: 6, title: 'Kraj kursa · итоговый разговор',
          note: 'Тридцать уроков позади. Каждый отвечает по-сербски.',
          items: [
            { q: 'Šta ste naučili za ovih trideset lekcija? Šta vam je bilo najteže?', sample: 'Naučio sam da pričam o porodici, poslu i putovanjima. Najteži su mi bili padeži.' },
            { q: 'Koja lekcija vam se najviše svidela?', sample: 'Najviše mi se svidela lekcija o hrani, jer smo posle otišli u kafanu.' },
            { q: 'Šta ćete raditi dalje sa srpskim?', sample: 'Pričaću srpski svaki dan i čitaću knjige. Sledeće godine ću polagati ispit.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Čestitamo! · курс пройден',
          points: [
            'Trideset lekcija, sve teme od upoznavanja do turizma i kulture',
            'Perfekat, futur, potencijal, svi padeži, povratni glagoli, predlozi mesta',
            'Sastav, dijalog, monolog: možete da pričate srpski!',
            'Pričaj srpski da te ceo svet razume.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: билет и скорая помощь', est: 7, set: 'B' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: шаги и симптомы', est: 6,
          items: [
            { a: ['Otvorite veb-stranicu Air Srbija.'] }, { a: ['Unesite lične podatke.'] }, { a: ['Potvrdite pritiskom na dugme Nastavi.'] },
            { a: ['Imam kašalj i temperaturu trideset devet.'] }, { a: ['Bolujem već pet dana.'] }, { a: ['Pošaljite hitnu pomoć, molim vas.'] }
          ]
        },
        {
          type: 'write', title: 'Poziv hitnoj pomoći · монолог + запись', est: 8, key: 'hw-30.2-hitna', record: true,
          note: 'Запишите текст монолога по второму сценарию (тому, что не взяли на занятии): 8 предложений. Запишите чтение вслух.',
          sample: 'Dobar dan, zovem hitnu pomoć. Zovem se Marko Ilić, muško, imam 40 godina. Imam groznicu i temperaturu, boli me glava. Muka mi je i povraćam od jutros. Bolujem već tri dana. Nemam osiguranje, ali mogu da platim pregled. Adresa je Njegoševa 15, drugi sprat. Molim vas, dođite što pre.'
        },
        {
          type: 'write', title: 'Sastav · вторая тема из четырёх', est: 12, key: 'hw-30.2-sastav2', record: true,
          note: 'Напишите сочинение на другую тему из четырёх (не ту, что на занятии): 10 предложений. Запишите чтение вслух.',
          sample: 'Planovi za budućnost. Sledeće godine ću polagati ispit iz srpskog jezika. Zato ću svaki dan čitati i pričati srpski. Želim da nađem posao u Beogradu. Radio bih u firmi koja pravi aplikacije. Moja devojka i ja ćemo iznajmiti veći stan sa terasom. Leti ćemo putovati u Crnu Goru, na more. Kupiću bicikl i vozićemo se pored Dunava. Voleo bih da naučim da igram kolo. Za pet godina ćemo možda imati psa i kuću sa baštom. Biće lepo, ne brinem se o tome!'
        }
      ]
    }
  ]
});
