// Lekcija 7 - Kako izgledam? Two 60-minute sessions: body & colours + adjective agreement, then moods.
COURSE.register({
  n: 7,
  title: 'Kako izgledam?',
  ru: 'Части тела и лица, цвета, прилагательные, настроение',

  vocab: [
    { id: 'naslikati', sr: 'naslikati, ja naslikam', ru: 'написать (красками), сфотографировать', set: 'A' },
    { id: 'lep7', sr: 'lep, lepa, lepo', ru: 'красивый, -ая, -ое', set: 'A' },
    { id: 'snazan', sr: 'snažan, snažna, snažno', ru: 'сильный, -ая, -ое', set: 'A' },
    { id: 'stvar', sr: 'stvar — glavna stvar', ru: 'вещь — главное', set: 'A' },
    { id: 'dusa', sr: 'duša', ru: 'душа', set: 'A' },
    { id: 'vazno', sr: 'To nije važno.', ru: 'Это не важно.', set: 'A' },
    { id: 'spoljasnost', sr: 'spoljašnost', ru: 'внешность', set: 'A' },
    { id: 'deo', sr: 'deo — delovi', ru: 'часть — части', set: 'A' },
    { id: 'glava', sr: 'glava', ru: 'голова', set: 'A' },
    { id: 'lice7', sr: 'lice', ru: 'лицо', set: 'A' },
    { id: 'kosa', sr: 'kosa — duga ravna kosa', ru: 'волосы — длинные прямые волосы', set: 'A' },
    { id: 'uvo', sr: 'uvo — uši', ru: 'ухо — уши', set: 'A' },
    { id: 'oko', sr: 'oko — oči', ru: 'глаз — глаза', set: 'A' },
    { id: 'nos', sr: 'nos', ru: 'нос', set: 'A' },
    { id: 'usne', sr: 'usne', ru: 'губы', set: 'A' },
    { id: 'usta', sr: 'usta', ru: 'рот', set: 'A' },
    { id: 'zub', sr: 'zub — zubi', ru: 'зуб — зубы', set: 'A' },
    { id: 'zenice', sr: 'zenice', ru: 'зрачки', set: 'A' },
    { id: 'celo', sr: 'čelo', ru: 'лоб', set: 'A' },
    { id: 'brada', sr: 'brada', ru: 'подбородок, борода', set: 'A' },
    { id: 'trepavice', sr: 'trepavice', ru: 'ресницы', set: 'A' },
    { id: 'obrve', sr: 'obrva — obrve', ru: 'бровь — брови', set: 'A' },
    { id: 'vrat', sr: 'vrat', ru: 'шея', set: 'A' },
    { id: 'rame', sr: 'rame — ramena', ru: 'плечо — плечи', set: 'A' },
    { id: 'ruka', sr: 'ruka — ruke', ru: 'рука — руки', set: 'A' },
    { id: 'lakat', sr: 'lakat', ru: 'локоть', set: 'A' },
    { id: 'dlan', sr: 'dlan', ru: 'ладонь', set: 'A' },
    { id: 'prst', sr: 'prst — prsti', ru: 'палец — пальцы', set: 'A' },
    { id: 'noga', sr: 'noga — noge', ru: 'нога — ноги', set: 'A' },
    { id: 'koleno', sr: 'koleno', ru: 'колено', set: 'A' },
    { id: 'stopalo', sr: 'stopalo', ru: 'ступня', set: 'A' },
    { id: 'stomak', sr: 'stomak', ru: 'живот', set: 'A' },
    { id: 'ledja', sr: 'leđa', ru: 'спина', set: 'A' },

    { id: 'boja', sr: 'boja — Koje je boje?', ru: 'цвет — Какого цвета?', set: 'B' },
    { id: 'crven', sr: 'crven, crvena, crveno', ru: 'красный', set: 'B' },
    { id: 'narandzast', sr: 'narandžast', ru: 'оранжевый', set: 'B' },
    { id: 'zut', sr: 'žut, žuta, žuto', ru: 'жёлтый', set: 'B' },
    { id: 'zelen', sr: 'zelen, zelena, zeleno', ru: 'зелёный', set: 'B' },
    { id: 'plav', sr: 'plav — svetlo plav, tamno plav', ru: 'синий, голубой — светло-, тёмно-', set: 'B' },
    { id: 'braon', sr: 'braon', ru: 'коричневый (не склоняется)', set: 'B' },
    { id: 'ljubicast', sr: 'ljubičast', ru: 'фиолетовый', set: 'B' },
    { id: 'ruzicast', sr: 'ružičast', ru: 'розовый', set: 'B' },
    { id: 'crn', sr: 'crn, crna, crno', ru: 'чёрный', set: 'B' },
    { id: 'beo', sr: 'beo, bela, belo', ru: 'белый', set: 'B' },
    { id: 'siv', sr: 'siv, siva, sivo — teget', ru: 'серый — тёмно-синий', set: 'B' },
    { id: 'plavusa', sr: 'plavuša — plava kosa', ru: 'блондинка — светлые волосы', set: 'B' },
    { id: 'veliki7', sr: 'veliki, velika, veliko', ru: 'большой', set: 'B' },
    { id: 'mali7', sr: 'mali, mala, malo', ru: 'маленький', set: 'B' },
    { id: 'dug', sr: 'dug, duga, dugo', ru: 'длинный', set: 'B' },
    { id: 'kratak', sr: 'kratak, kratka, kratko', ru: 'короткий', set: 'B' },
    { id: 'jak', sr: 'jak, jaka, jako', ru: 'сильный, крепкий', set: 'B' },
    { id: 'visok7', sr: 'visok, visoka, visoko', ru: 'высокий', set: 'B' },
    { id: 'nizak', sr: 'nizak, niska, nisko', ru: 'низкий', set: 'B' },
    { id: 'klempav', sr: 'klempavo uvo', ru: 'оттопыренное ухо', set: 'B' },
    { id: 'pametan7', sr: 'pametan, pametna', ru: 'умный', set: 'B' },
    { id: 'pazljiv', sr: 'pažljiv, pažljiva', ru: 'внимательный', set: 'B' },
    { id: 'haljina', sr: 'haljina', ru: 'платье', set: 'B' },
    { id: 'osmeh', sr: 'osmeh — prelep osmeh', ru: 'улыбка — прекрасная улыбка', set: 'B' },

    { id: 'raspolozenje', sr: 'raspoloženje', ru: 'настроение', set: 'C' },
    { id: 'tuzan', sr: 'tužan, tužna', ru: 'грустный', set: 'C' },
    { id: 'miran', sr: 'miran, mirna', ru: 'спокойный', set: 'C' },
    { id: 'opusten', sr: 'opušten, opuštena — Opušteno!', ru: 'расслабленный — Расслабься!', set: 'C' },
    { id: 'iznerviran', sr: 'iznerviran, iznervirana', ru: 'нервный, раздражённый', set: 'C' },
    { id: 'umoran', sr: 'umoran, umorna', ru: 'уставший', set: 'C' },
    { id: 'srecan', sr: 'srećan, srećna', ru: 'счастливый', set: 'C' },
    { id: 'sokiran', sr: 'šokiran, šokirana', ru: 'удивлённый, шокированный', set: 'C' },
    { id: 'zadovoljan', sr: 'zadovoljan, zadovoljna', ru: 'довольный', set: 'C' },
    { id: 'gladan', sr: 'gladan, gladna', ru: 'голодный', set: 'C' },
    { id: 'zaljubljen', sr: 'zaljubljen — Zaljubio si se? U koga?', ru: 'влюблённый — Ты влюбился? В кого?', set: 'C' },
    { id: 'salis-se', sr: 'Šališ se?', ru: 'Ты шутишь?', set: 'C' },
    { id: 'nema-veze', sr: 'nema veze', ru: 'неважно, ничего страшного', set: 'C' },
    { id: 'omiljena-boja', sr: 'omiljena boja, omiljeno jelo', ru: 'любимый цвет, любимое блюдо', set: 'C' },
    { id: 'zajednicko', sr: 'Imamo mnogo zajedničkog.', ru: 'У нас много общего.', set: 'C' },
    { id: 'nedavno', sr: 'nedavno', ru: 'недавно', set: 'C' },
    { id: 'preseliti-se7', sr: 'preselila se u Beograd', ru: 'переехала в Белград', set: 'C' },
    { id: 'poznavati', sr: 'poznavati, ja poznajem', ru: 'знать (кого-то)', set: 'C' },
    { id: 'pozvati', sr: 'pozvati, ja pozovem', ru: 'пригласить, позвать', set: 'C' },
    { id: 'ruza', sr: 'ruža — ruže', ru: 'роза — розы', set: 'C' },
    { id: 'sarma', sr: 'sarma', ru: 'сарма (голубцы)', set: 'C' },
    { id: 'kamilica', sr: 'čaj od kamilice', ru: 'ромашковый чай', set: 'C' },
    { id: 'meditirati', sr: 'meditirati, ja meditiram', ru: 'медитировать', set: 'C' },
    { id: 'ciniti', sr: 'Šta vas čini srećnim?', ru: 'Что делает вас счастливым?', set: 'C' },
    { id: 'poslednji-put', sr: 'poslednji put', ru: 'в последний раз', set: 'C' },
    { id: 'kakav', sr: 'Kakvi ste danas?', ru: 'Какие вы сегодня?', set: 'C' }
  ],

  verbs: {
    biti: { inf: 'biti', ru: 'быть', pos: { ja: 'sam', ti: 'si', on: 'je', mi: 'smo', vi: 'ste', oni: 'su' }, neg: { ja: 'nisam', ti: 'nisi', on: 'nije', mi: 'nismo', vi: 'niste', oni: 'nisu' }, noQuestion: true },
    imati: { inf: 'imati', ru: 'иметь', pos: { ja: 'imam', ti: 'imaš', on: 'ima', mi: 'imamo', vi: 'imate', oni: 'imaju' }, neg: { ja: 'nemam', ti: 'nemaš', on: 'nema', mi: 'nemamo', vi: 'nemate', oni: 'nemaju' } },
    izgledati: { inf: 'izgledati', ru: 'выглядеть', pos: { ja: 'izgledam', ti: 'izgledaš', on: 'izgleda', mi: 'izgledamo', vi: 'izgledate', oni: 'izgledaju' }, neg: { ja: 'ne izgledam', ti: 'ne izgledaš', on: 'ne izgleda', mi: 'ne izgledamo', vi: 'ne izgledate', oni: 'ne izgledaju' } },
    poznavati: { inf: 'poznavati', ru: 'знать кого-то', pos: { ja: 'poznajem', ti: 'poznaješ', on: 'poznaje', mi: 'poznajemo', vi: 'poznajete', oni: 'poznaju' }, neg: { ja: 'ne poznajem', ti: 'ne poznaješ', on: 'ne poznaje', mi: 'ne poznajemo', vi: 'ne poznajete', oni: 'ne poznaju' } }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '7.1',
      title: 'Spoljašnost i boje',
      ru: 'Части тела и лица, цвета, согласование прилагательных',
      goals: [
        'назвать части тела и лица',
        'назвать 14 цветов и согласовать их с существительным',
        'описать внешность человека: kosa, oči, visok, jak'
      ],
      blocks: [
        {
          type: 'dialog', min: 6, title: 'Strip · Inspiracija umetnika',
          note: 'Художник ищет, кого написать: Биковича, Абрамович, Джоковича… Прочитайте кириллицу сами.',
          img: 'img/l7_strip.png',
          lines: [
            { who: 'Umetnik', sr: 'Želim da naslikam nekoga…', ru: 'Хочу написать кого-нибудь…' },
            { who: 'Umetnik', sr: 'Biković je lep muškarac…', ru: 'Бикович — красивый мужчина…' },
            { who: 'Umetnik', sr: '…Abramović ima dugu ravnu kosu…', ru: '…У Абрамович длинные прямые волосы…' },
            { who: 'Umetnik', sr: '…Đoković ima snažne ruke…', ru: '…У Джоковича сильные руки…' },
            { who: 'Umetnik', sr: 'Ali to nije važno, glavna stvar je duša!', ru: 'Но это не важно, главное — душа!' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Delovi tela i lica · части тела и лица',
          note: 'Нажимайте на слова и повторяйте. Покажите на себе: glava, nos, rame, koleno.',
          img: 'img/l7_telo.png',
          html: '<p>[[spoljašnost]] — внешность; [[deo — delovi]] — часть (мужской род на -o, как sto, beo, orao).</p>',
          tables: [
            { caption: 'Lice', head: ['', '', ''], rows: [['glava', 'lice', 'kosa'], ['čelo', 'oko — oči', 'obrva — obrve'], ['trepavice', 'nos', 'uvo — uši'], ['usta', 'usne', 'zub — zubi'], ['brada', 'vrat', 'zenice']] },
            { caption: 'Telo', head: ['', '', ''], rows: [['rame — ramena', 'ruka — ruke', 'lakat'], ['dlan', 'prst — prsti', 'stomak'], ['leđa', 'noga — noge', 'koleno'], ['stopalo', '', '']] }
          ]
        },
        {
          type: 'sort', min: 6, title: 'Lice ili telo? · лицо или тело',
          groups: ['Lice', 'Telo'],
          items: [
            { w: 'stopalo', g: 'Telo' }, { w: 'trepavice', g: 'Lice' }, { w: 'prsti', g: 'Telo' }, { w: 'glava', g: 'Lice' }, { w: 'oči', g: 'Lice' }, { w: 'nos', g: 'Lice' }, { w: 'stomak', g: 'Telo' },
            { w: 'noga', g: 'Telo' }, { w: 'koleno', g: 'Telo' }, { w: 'usta', g: 'Lice' }, { w: 'kosa', g: 'Lice' }, { w: 'ruka', g: 'Telo' }, { w: 'dlan', g: 'Telo' }, { w: 'usne', g: 'Lice' },
            { w: 'obrva', g: 'Lice' }, { w: 'zubi', g: 'Lice' }, { w: 'vrat', g: 'Telo' }, { w: 'lakat', g: 'Telo' }, { w: 'uši', g: 'Lice' }, { w: 'rame', g: 'Telo' }
          ]
        },
        {
          type: 'text', min: 7, title: 'Boje · цвета',
          img: 'img/l7_boje.png',
          html:
            '<p>[[narandžast]] — оранжевый, но [[narandžasta boja]] — оранжевый цвет. <b>Прилагательное всегда согласуется с существительным по роду, числу и падежу.</b></p>' +
            '<ul><li>[[Ja vidim plavo jezero.]] — Я вижу голубое озеро.</li><li>[[Ovo jezero je plave boje.]] — Это озеро голубого цвета.</li><li>[[Jezero je plavo.]] — Озеро голубое.</li></ul>' +
            '<p>Вопрос: [[Koje je boje…?]] — какого цвета? [[Limun je žute boje.]] = [[Limun je žut.]]</p>' +
            '<p><b>Zanimljivost:</b> [[Devojka ima plavu kosu.]] — у девушки не синие волосы, а светлые: <i>plava kosa</i> — блонд, блондинка — [[plavuša]].</p>',
          tables: [
            { caption: 'Boje (m / ž / s)', head: ['', '', ''], rows: [['crven / crvena / crveno', 'žut / žuta / žuto', 'zelen / zelena / zeleno'], ['plav / plava / plavo', 'crn / crna / crno', 'beo / bela / belo'], ['siv / siva / sivo', 'narandžast / -a / -o', 'ljubičast / -a / -o'], ['ružičast / -a / -o', 'braon (не меняется)', 'teget (не меняется)']] }
          ]
        },
        {
          type: 'gap', min: 5, title: 'Koje je boje? · какого цвета',
          note: 'Впишите прилагательное в нужной форме. Форма «boje» (род. п.) требует женского рода: žute boje.',
          items: [
            'Limun je {žute} boje. <i>(žut)</i>', 'Ovo je {Crveni} trg. <i>(crven, m.)</i>', 'Pepa Prase je {ružičaste} boje. <i>(ružičast)</i>',
            'Ovo je {crna} rupa. <i>(crn, ž.)</i>', 'Zec je {bele} boje. <i>(beo)</i>', 'Kosa je {plava}. <i>(plav, ž.)</i>',
            'Trava je {zelena}. <i>(zelen, ž.)</i>', 'Nebo je {plavo}. <i>(plav, s.)</i>', 'Sneg je {beo}. <i>(beo, m.)</i>'
          ]
        },
        {
          type: 'text', min: 3, title: 'Pridevi · прилагательные во множественном числе',
          html: '<p>Окончания прилагательных не всегда совпадают с окончаниями существительных: м. р. <b>-i</b>, ж. р. <b>-e</b>, ср. р. <b>-a</b>. Беглое <i>a</i> выпадает: [[jak — jaki]], [[pametan — pametni]], [[kratak — kratki]].</p>',
          tables: [
            { caption: 'Pridevi', head: ['rod', 'jednina', 'množina'], rows: [['M', 'veliki grad', 'veliki gradovi'], ['Ž', 'lepa žena', 'lepe žene'], ['S', 'crno vino', 'crna vina']] }
          ]
        },
        {
          type: 'gap', min: 5, title: 'Množina · прилагательное + существительное',
          items: [
            'jaka noga — {jake noge}', 'belo lice — {bela lica}', 'duga ruka — {duge ruke}', 'veliki nos — {veliki nosevi}',
            'beli zub — {beli zubi}', 'plavo oko — {plave oči}', 'klempavo uvo — {klempave uši}'
          ]
        },
        {
          type: 'gap', min: 5, title: 'Izaberite oblik · согласуйте',
          options: ['visoka', 'visoki', 'visoko', 'jaki', 'jaka', 'jako', 'pametni', 'pametna', 'pametno', 'pažljivi', 'pažljiva', 'pažljivo', 'plavo', 'plava', 'plavi'],
          items: [
            'Ulicom ide {visoka} devojka.', 'Tata i stric su {jaki} kao vukovi.', 'Česi su {pametni} i uče mnogo stranih jezika.',
            'Anton i ja smo {pažljivi} na detalje.', 'Da li ste {pažljiva} osoba?', 'Kroz prozor se vidi {plavo} more.'
          ]
        },
        {
          type: 'gap', bank: true, min: 4, title: 'Popunite praznine · банк слов',
          items: [
            'Udaje se i kupuje {belu} haljinu.', 'Oči su joj bile {plave} kao more.', 'Jagode su {crvene}.',
            'Volim film Barbi i {ružičastu} boju.', 'Obično uz meso piju {crno} vino.', 'Ovo pivo je {svetlo}.'
          ]
        },
        {
          type: 'speak', min: 9, title: 'Kako izgleda…? · опишите внешность',
          note: 'Каждый описывает известного человека, не называя имени: рост, волосы, глаза, что сильное или красивое. Партнёр угадывает. Потом опишите друг друга: Ti imaš…',
          items: [
            { q: 'Kako izgleda? Da li je visok ili nizak?', sample: 'On je visok i jak. Ima kratku crnu kosu i braon oči.' },
            { q: 'Kakvu kosu ima? Kakve oči?', sample: 'Ona ima dugu plavu kosu i zelene oči. Plavuša je.' },
            { q: 'Šta je kod njega lepo?', sample: 'Ima lep osmeh i snažne ruke. Ali glavna stvar je duša!' },
            { q: 'Koja je tvoja omiljena boja? Koje je boje tvoja kosa, tvoje oči?', sample: 'Moja omiljena boja je zelena. Kosa mi je braon, oči su mi sive.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'glava, lice, kosa, oči, nos, usta, uši; ruke, noge, ramena, stomak, leđa',
            'crven, žut, zelen, plav, crn, beo, siv; braon и teget не меняются',
            'plavo jezero / plava kosa / plavi zid — согласование по роду',
            'mn.: veliki gradovi, lepe žene, crna vina'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: части тела и лица', est: 8, set: 'A' },
        { type: 'flash', title: 'Карточки: цвета и прилагательные', est: 8, set: 'B' },
        {
          type: 'qa', mode: 'transform', title: 'Jednina → množina · прилагательное с существительным', est: 5,
          items: [
            { q: 'jaka noga', a: ['jake noge'] }, { q: 'belo lice', a: ['bela lica'] }, { q: 'duga ruka', a: ['duge ruke'] }, { q: 'veliki nos', a: ['veliki nosevi'] },
            { q: 'beli zub', a: ['beli zubi'] }, { q: 'plavo oko', a: ['plave oči'] }, { q: 'klempavo uvo', a: ['klempave uši'] }, { q: 'lepa žena', a: ['lepe žene'] },
            { q: 'crno vino', a: ['crna vina'] }, { q: 'visoka devojka', a: ['visoke devojke'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Želim da naslikam nekoga.'] }, { a: ['Abramović ima dugu ravnu kosu.'] }, { a: ['Đoković ima snažne ruke.'] },
            { a: ['Glavna stvar je duša!'] }, { a: ['Limun je žute boje.'] }, { a: ['Devojka ima plavu kosu.'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Он красивый мужчина.', a: ['On je lep muškarac.'] },
            { q: 'У неё длинные прямые волосы.', a: ['Ona ima dugu ravnu kosu.', 'Ima dugu ravnu kosu.'] },
            { q: 'Лимон жёлтый.', a: ['Limun je žut.', 'Limun je žute boje.'] },
            { q: 'Я вижу голубое озеро.', a: ['Vidim plavo jezero.', 'Ja vidim plavo jezero.'] },
            { q: 'У девушки голубые глаза и белые зубы.', a: ['Devojka ima plave oči i bele zube.'] },
            { q: 'Папа и дядя сильные как волки.', a: ['Tata i stric su jaki kao vukovi.'] },
            { q: 'Это не важно, главное — душа.', a: ['To nije važno, glavna stvar je duša.', 'Ali to nije važno, glavna stvar je duša.'] },
            { q: 'Какого цвета твои волосы?', a: ['Koje je boje tvoja kosa?', 'Koje boje je tvoja kosa?'] }
          ]
        },
        {
          type: 'write', title: 'Portret · опишите человека + запись', est: 7, key: 'hw-7.1-portret', record: true,
          note: '8 предложений о внешности близкого человека или актёра: рост, волосы, глаза, лицо, что красивое. Запишите чтение вслух.',
          sample: 'Moja sestra je visoka i mršava. Ima dugu plavu kosu i velike zelene oči. Nos je mali, usne su crvene. Ima lep osmeh i bele zube. Ruke su joj duge, prsti su tanki. Njena omiljena boja je ljubičasta. Ona je prelepa, ali glavna stvar je duša!'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '7.2',
      title: 'Raspoloženje',
      ru: 'Настроение и состояние; диалог «Zaljubio si se?»',
      goals: [
        'сказать, как вы себя чувствуете: umoran sam, srećna sam',
        'спросить и ответить: Kakav si danas? Šta te čini srećnim?',
        'понять на слух диалог с мамой и пересказать его'
      ],
      blocks: [
        {
          type: 'speak', min: 5, title: 'Zagrevanje · разминка',
          note: 'Прочитайте партнёру домашний портрет. Партнёр рисует (буквально, на бумаге!) по описанию и показывает.',
          items: [{ q: 'Ona ima dugu plavu kosu i…' }]
        },
        {
          type: 'text', min: 8, title: 'Raspoloženje · настроение',
          note: 'Нажмите на слова, повторите. Прилагательные состояния тоже согласуются: umoran / umorna / umorni.',
          img: 'img/l7_raspolozenje.png',
          html:
            '<ul><li>[[tužan, tužna]] — грустный</li><li>[[miran, mirna]] — спокойный</li><li>[[opušten, opuštena]] — расслабленный ([[Opušteno!]] — Расслабься! почти как «polako»)</li>' +
            '<li>[[iznerviran, iznervirana]] — нервный, раздражённый</li><li>[[umoran, umorna]] — уставший</li><li>[[srećan, srećna]] — счастливый</li>' +
            '<li>[[šokiran, šokirana]] — удивлённый, шокированный</li><li>[[zadovoljan, zadovoljna]] — довольный</li><li>[[gladan, gladna]] — голодный</li></ul>' +
            '<p>Вопрос: [[Kakav si danas?]] (м.) / [[Kakva si danas?]] (ж.) / [[Kakvi ste danas?]] (мн.). Ответ: [[Umoran sam.]] [[Srećna sam.]] [[Mirni smo.]]</p>'
        },
        {
          type: 'match', min: 4, title: 'Spojite · настроение и перевод',
          pairs: [
            ['tužan', 'грустный'], ['miran', 'спокойный'], ['opušten', 'расслабленный'], ['iznerviran', 'нервный'],
            ['umoran', 'уставший'], ['srećan', 'счастливый'], ['šokiran', 'удивлённый'], ['zadovoljan', 'довольный'], ['gladan', 'голодный']
          ]
        },
        {
          type: 'gap', min: 5, title: 'Izaberite oblik · прилагательное состояния',
          options: ['umoran', 'umorna', 'umorni', 'mirna', 'miran', 'mirni', 'zadovoljni', 'zadovoljan', 'zadovoljna', 'srećan', 'srećna', 'srećni', 'gladan', 'gladna'],
          items: [
            'Sergej je veoma {umoran} jer je radio 12 sati.', 'Ona je tako {umorna} posle putovanja.', '{Mirna} sam, zato što svake nedelje meditiram i pijem čaj od kamilice. <i>(говорит женщина)</i>',
            'Jedemo tortu i veoma smo {zadovoljni}.', 'Deca su {srećna} jer su na moru.', 'Jesi li {gladan}, sine?'
          ]
        },
        {
          type: 'gap', bank: true, listen: true, min: 10, title: 'Mama i Siniša · послушайте и вставьте',
          note: 'Сначала слушаем целиком. Потом заполняем и читаем по ролям.',
          items: [
            '<b>Mama:</b> Sine, zašto ti je lice tako belo i {tužno}? Jesi li gladan?',
            '<b>Siniša:</b> Ne, nisam gladan mama, samo sam {se zaljubio}…',
            '<b>Mama:</b> {Šališ se}? Zaljubio si se? U koga?',
            '<b>Siniša:</b> U moju novu kolegu na poslu. Njeno ime je Aleksandra. Nedavno {se preselila} u Beograd iz Belorusije.',
            '<b>Mama:</b> Da li zna srpski?',
            '<b>Siniša:</b> Ne znam, {nema veze}, lepa je. Ima plavu dugu kosu, sive oči i {prelep osmeh}.',
            '<b>Mama:</b> Ali ti tako malo poznaješ {ovu plavušu}…',
            '<b>Siniša:</b> Znam dovoljno: imamo mnogo zajedničkog. {Omiljena boja} nam je zelena, a omiljeno jelo je sarma. Želim da pozovem Aleksandru u restoran. Treba li kupiti {ruže} ili čokoladu?',
            '<b>Mama:</b> Zašto u restoran, pozovi kod nas na večeru.'
          ]
        },
        {
          type: 'tf', min: 4, title: 'Tačno ili netačno? · по диалогу',
          items: [
            { q: 'Siniša je gladan.', a: false, why: 'Nije gladan, zaljubio se.' }, { q: 'Aleksandra je iz Belorusije.', a: true },
            { q: 'Aleksandra ima crnu kosu i plave oči.', a: false, why: 'Ima plavu dugu kosu i sive oči.' }, { q: 'Omiljena boja im je zelena.', a: true },
            { q: 'Omiljeno jelo im je pljeskavica.', a: false, why: 'Omiljeno jelo je sarma.' }, { q: 'Mama želi da Siniša pozove Aleksandru na večeru kod njih.', a: true }
          ]
        },
        {
          type: 'speak', min: 5, title: 'Prepričajte · перескажите',
          note: 'Один — за Синишу (ko je Aleksandra, kako izgleda), второй — за маму (šta mama misli, šta predlaže).',
          items: [
            { q: 'Ko je Aleksandra? Odakle je? Kako izgleda?', sample: 'Aleksandra je nova kolega na poslu. Iz Belorusije je. Ima plavu kosu, sive oči i prelep osmeh.' },
            { q: 'Šta imaju zajedničko? Šta Siniša želi?', sample: 'Omiljena boja im je zelena, omiljeno jelo sarma. Siniša želi da pozove Aleksandru u restoran.' },
            { q: 'Šta mama misli?', sample: 'Mama misli da Siniša malo poznaje plavušu. Predlaže da je pozove kod njih na večeru.' }
          ]
        },
        {
          type: 'speak', min: 14, title: 'Moje raspoloženje · вопросы о настроении',
          note: 'Ответьте друг другу на пять вопросов из курса полными предложениями, минимум по два предложения на вопрос. Потом расскажите про партнёра: Ona je srećna kada…',
          items: [
            { q: 'Šta radite kada ste tužni?', sample: 'Kada sam tužan, slušam muziku i zovem prijatelja.' },
            { q: 'Šta vas čini srećnim?', sample: 'Srećnim me čini more, dobra hrana i moja porodica.' },
            { q: 'Kada ste poslednji put bili umorni?', sample: 'Poslednji put sam bila umorna u petak, posle posla.' },
            { q: 'Kada ste iznervirani?', sample: 'Iznerviran sam kada autobus kasni.' },
            { q: 'Kakvi ste danas?', sample: 'Danas sam miran i zadovoljan. A ti?' }
          ]
        },
        {
          type: 'summary', min: 5, title: 'Rezime · итог занятия',
          points: [
            'tužan, miran, opušten, iznerviran, umoran, srećan, šokiran, zadovoljan',
            'Kakav si danas? — Umoran sam. Kakva si? — Srećna sam.',
            'Zaljubio si se? U koga? — Šališ se? — Nema veze.',
            'Imamo mnogo zajedničkog.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: настроение и слова диалога', est: 8, set: 'C' },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Jesi li gladan?'] }, { a: ['Šališ se? Zaljubio si se?'] }, { a: ['Ima plavu dugu kosu i sive oči.'] },
            { a: ['Imamo mnogo zajedničkog.'] }, { a: ['Treba li kupiti ruže ili čokoladu?'] }, { a: ['Kakvi ste danas?'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я устал (говорит мужчина).', a: ['Umoran sam.', 'Ja sam umoran.'] },
            { q: 'Она сегодня грустная.', a: ['Ona je danas tužna.', 'Danas je tužna.'] },
            { q: 'Мы довольны.', a: ['Zadovoljni smo.', 'Mi smo zadovoljni.'] },
            { q: 'Ты шутишь?', a: ['Šališ se?'] },
            { q: 'В кого ты влюбился?', a: ['U koga si se zaljubio?', 'Zaljubio si se? U koga?'] },
            { q: 'Неважно, она красивая.', a: ['Nema veze, lepa je.', 'Nema veze, ona je lepa.'] },
            { q: 'Что делает тебя счастливым?', a: ['Šta te čini srećnim?', 'Šta vas čini srećnim?'] },
            { q: 'Я спокоен, потому что каждую неделю медитирую.', a: ['Miran sam, zato što svake nedelje meditiram.', 'Mirna sam, zato što svake nedelje meditiram.', 'Miran sam, jer svake nedelje meditiram.'] }
          ]
        },
        {
          type: 'write', title: 'Moje raspoloženje · текст о настроении + запись', est: 8, key: 'hw-7.2-raspolozenje', record: true,
          note: 'Ответьте письменно на пять вопросов занятия (по 1–2 предложения). Запишите чтение вслух.',
          sample: 'Kada sam tužna, gledam film i jedem čokoladu. Srećnom me čini more i moja porodica. Poslednji put sam bila umorna u sredu posle posla. Iznervirana sam kada nemam vremena. Danas sam mirna i zadovoljna.'
        },
        {
          type: 'write', title: 'Poruka Aleksandri · сообщение от Синиши', est: 6, key: 'hw-7.2-poruka',
          note: 'Напишите от имени Синиши сообщение Александре: приглашение на ужин к маме, 4–5 предложений.',
          sample: 'Ćao, Aleksandra! Kako si danas? Moja mama pravi sarmu u subotu. Želim da te pozovem kod nas na večeru. Da li si slobodna u subotu uveče?'
        }
      ]
    }
  ]
});
