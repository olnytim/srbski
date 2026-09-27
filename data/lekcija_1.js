// Lekcija 1 - Ćao! Two 60-minute sessions: alphabet + greetings, then the verb "biti".
COURSE.register({
  n: 1,
  title: 'Ćao!',
  ru: 'Алфавит, приветствия, глагол biti',

  vocab: [
    { id: 'zdravo', sr: 'Zdravo!', ru: 'Здравствуйте! (более формально)', set: 'A' },
    { id: 'cao', sr: 'Ćao!', ru: 'Привет! / Пока! (менее формально)', set: 'A' },
    { id: 'dobro-jutro', sr: 'Dobro jutro!', ru: 'Доброе утро!', set: 'A' },
    { id: 'dobar-dan', sr: 'Dobar dan!', ru: 'Добрый день!', set: 'A' },
    { id: 'dobro-vece', sr: 'Dobro veče!', ru: 'Добрый вечер!', set: 'A' },
    { id: 'laku-noc', sr: 'Laku noć!', ru: 'Спокойной ночи!', set: 'A' },
    { id: 'dovidjenja', sr: 'Doviđenja!', ru: 'До свидания!', set: 'A' },
    { id: 'vidimo-se', sr: 'Vidimo se!', ru: 'Увидимся! До скорой встречи!', set: 'A' },
    { id: 'drago-mi-je', sr: 'Drago mi je!', ru: 'Очень приятно!', set: 'A' },
    { id: 'prijatno', sr: 'Prijatno!', ru: 'Всего доброго! / Приятного аппетита!', set: 'A' },
    { id: 'dobro-dosli', sr: 'Dobro došli!', ru: 'Добро пожаловать!', set: 'A' },
    { id: 'zovem-se', sr: 'Ja se zovem… / Zovem se…', ru: 'Меня зовут…', set: 'A' },
    { id: 'ja-sam', sr: 'Ja sam… / (ime) sam', ru: 'Я … (имя)', set: 'A' },
    { id: 'kako-se-zoves', sr: 'Kako se zoveš? Kako se zovete?', ru: 'Как тебя зовут? Как вас зовут?', set: 'A' },
    { id: 'kako-si', sr: 'Kako si? Kako ste?', ru: 'Как у тебя дела? Как у вас дела?', set: 'A' },
    { id: 'dobro-sam', sr: 'Dobro sam.', ru: 'У меня всё хорошо.', set: 'A' },
    { id: 'nije-lose', sr: 'Nije loše!', ru: 'Неплохо!', set: 'A' },
    { id: 'fino', sr: 'fino', ru: 'хорошо, классно', set: 'A' },
    { id: 'hvala', sr: 'Hvala!', ru: 'Спасибо!', set: 'A' },
    { id: 'takodje', sr: 'takođe', ru: 'также, тоже', set: 'A' },
    { id: 'odakle', sr: 'Odakle si? Odakle ste?', ru: 'Откуда ты? Откуда вы?', set: 'A' },
    { id: 'gde-zivis', sr: 'Gde živiš? Gde živite?', ru: 'Где ты живёшь? Где вы живёте?', set: 'A' },
    { id: 'zivim-u', sr: 'Ja živim u… / Živim u…', ru: 'Я живу в…', set: 'A' },
    { id: 'kako', sr: 'kako', ru: 'как', set: 'A' },
    { id: 'gde', sr: 'gde', ru: 'где', set: 'A' },
    { id: 'ali', sr: 'ali', ru: 'но', set: 'A' },

    { id: 'prijatelj', sr: 'prijatelj, prijateljica', ru: 'друг, подруга', set: 'B' },
    { id: 'veoma', sr: 'veoma', ru: 'очень', set: 'B' },
    { id: 'ljubazan', sr: 'ljubazan (ljubazni)', ru: 'вежливый (вежливые)', set: 'B' },
    { id: 'ovo-je', sr: 'Ovo je…', ru: 'Это…', set: 'B' },
    { id: 'moj', sr: 'moj, moja', ru: 'мой, моя', set: 'B' },
    { id: 'ucenik', sr: 'učenik, učenica', ru: 'ученик, ученица', set: 'B' },
    { id: 'student', sr: 'student, studentkinja', ru: 'студент, студентка', set: 'B' },
    { id: 'menadzer', sr: 'menadžer', ru: 'менеджер', set: 'B' },
    { id: 'lekar', sr: 'lekar, lekari', ru: 'врач, врачи', set: 'B' },
    { id: 'programer', sr: 'programer', ru: 'программист', set: 'B' },
    { id: 'grad', sr: 'grad', ru: 'город', set: 'B' },
    { id: 'jezero', sr: 'jezero', ru: 'озеро', set: 'B' },
    { id: 'veliko', sr: 'veliki, velika, veliko', ru: 'большой, большая, большое', set: 'B' },
    { id: 'lep', sr: 'lep, lepa, lepo', ru: 'красивый, красивая, красивое', set: 'B' },
    { id: 'visok', sr: 'visok', ru: 'высокий', set: 'B' },
    { id: 'mali', sr: 'mali, mala', ru: 'маленький, маленькая', set: 'B' },
    { id: 'jos', sr: 'još', ru: 'ещё', set: 'B' },
    { id: 'srbin', sr: 'Srbin, Srpkinja', ru: 'серб, сербка', set: 'B' },
    { id: 'rus', sr: 'Rus, Ruskinja', ru: 'русский, русская', set: 'B' },
    { id: 'iz', sr: 'iz (Moskve, Beograda)', ru: 'из (Москвы, Белграда)', set: 'B' },
    { id: 'ljudi', sr: 'ljudi', ru: 'люди', set: 'B' },
    { id: 'dobrodosli', sr: 'Dobrodošli!', ru: 'Добро пожаловать!', set: 'B' },
    { id: 'joj', sr: 'Joj!', ru: 'Ой!', set: 'B' }
  ],

  verbs: {
    biti: {
      inf: 'biti', ru: 'быть',
      pos: { ja: 'sam', ti: 'si', on: 'je', mi: 'smo', vi: 'ste', oni: 'su' },
      neg: { ja: 'nisam', ti: 'nisi', on: 'nije', mi: 'nismo', vi: 'niste', oni: 'nisu' },
      noQuestion: true
    }
  },

  sessions: [
    /* ------------------------------------------------------------------ */
    {
      id: '1.1',
      title: 'Azbuka i pozdravi',
      ru: 'Алфавит, правила чтения, приветствия и знакомство',
      goals: [
        'прочитать любое слово на латинице и на кириллице',
        'поздороваться, попрощаться, представиться',
        'спросить, как зовут и откуда собеседник'
      ],
      blocks: [
        {
          type: 'text', min: 8, title: 'Azbuka · алфавит',
          html:
            '<p>В Сербии две графики: латиница и кириллица. Документы пишут кириллицей, в интернете чаще латиницей, иногда без диакритики («ošišana latinica» — «стриженая»). <b>Произношение от графики не меняется.</b></p>' +
            '<p>Нажмите на любую букву, чтобы послушать. Порядок букв в двух алфавитах разный.</p>',
          tables: [
            { caption: 'Latinica → Ћирилица', head: ['', '', '', '', '', ''], rows: [
              [['A a — А а', 'a'], ['B b — Б б', 'b'], ['C c — Ц ц', 'c'], ['Č č — Ч ч', 'č'], ['Ć ć — Ћ ћ', 'ć'], ['D d — Д д', 'd']],
              [['Dž dž — Џ џ', 'dž'], ['Đ đ — Ђ ђ', 'đ'], ['E e — Е е', 'e'], ['F f — Ф ф', 'f'], ['G g — Г г', 'g'], ['H h — Х х', 'h']],
              [['I i — И и', 'i'], ['J j — Ј ј', 'j'], ['K k — К к', 'k'], ['L l — Л л', 'l'], ['Lj lj — Љ љ', 'lj'], ['M m — М м', 'm']],
              [['N n — Н н', 'n'], ['Nj nj — Њ њ', 'nj'], ['O o — О о', 'o'], ['P p — П п', 'p'], ['R r — Р р', 'r'], ['S s — С с', 's']],
              [['Š š — Ш ш', 'š'], ['T t — Т т', 't'], ['U u — У у', 'u'], ['V v — В в', 'v'], ['Z z — З з', 'z'], ['Ž ž — Ж ж', 'ž']]
            ] }
          ],
          after: '<p>Порядок кириллицы: [[а б в г д ђ е ж з и ј к л љ м н њ о п р с т ћ у ф х ц ч џ ш]].</p>'
        },
        {
          type: 'text', min: 7, title: 'Pravila čitanja · правила чтения',
          html:
            '<ol><li>Мягких согласных всего пять: <b>ć, đ, lj, nj, j</b>. Все остальные всегда твёрдые: [[ti]], [[ne]], [[deset]].</li>' +
            '<li>Ударение обычно в начале или середине слова, на последний слог не падает.</li>' +
            '<li>Двойных согласных почти нет: [[Ana]], [[profesor]].</li>' +
            '<li>Главное правило: [[Piši kao što govoriš, a čitaj kao što je napisano.]] — пиши, как говоришь, читай, как написано.</li></ol>',
          tables: [
            { caption: 'Сложные буквы', head: ['буква', 'звук', 'комментарий'], rows: [
              ['c', '[ц]', 'всегда «ц»: cigareta, otac'],
              ['č', '[ч]', 'твёрже русского «ч»: čaša, čokolada'],
              ['ć', '[ч’]', 'мягче русского «ч»: sreća, ćao'],
              ['dž', '[дж]', 'слитно, твёрдо: džep, pidžama'],
              ['đ', '[д’ж’]', 'слитно, мягко: đon, posuđe'],
              ['lj', '[л’]', 'мягче русского «ль»: ljudi, ljubav'],
              ['nj', '[н’]', 'мягче русского «нь»: njuška, konj'],
              ['š', '[ш]', 'как русское «ш»: škola'],
              ['ž', '[ж]', 'как русское «ж»: žirafa'],
              ['h', '[х]', 'как русское «х»: hvala'],
              ['j', '[й]', 'всегда «й»: jaje, januar']
            ] }
          ]
        },
        {
          type: 'speak', min: 7, title: 'Zvučni parovi · читаем пары вслух',
          note: 'Прочитайте каждую пару вслух, потом послушайте и повторите. Обратите внимание на разницу между твёрдым и мягким звуком.',
          items: [
            { q: 'čaša — sreća', ru: 'стакан — счастье' },
            { q: 'pidžama — posuđe', ru: 'пижама — посуда' },
            { q: 'lubenica — zanimljivo', ru: 'арбуз — интересно' },
            { q: 'nos — njuška', ru: 'нос — мордочка' },
            { q: 'jaje, majka, Srbija', ru: 'яйцо, мать, Сербия' },
            { q: 'čelo — ćurka', ru: 'лоб — индюшка' },
            { q: 'vrapčić — čačkalica', ru: 'воробушек — зубочистка' },
            { q: 'džamija — đon', ru: 'мечеть — подошва' },
            { q: 'džez — leđa', ru: 'джаз — спина' },
            { q: 'lutka — ljuljaške', ru: 'кукла — качели' },
            { q: 'lišće — ljubazan', ru: 'листья — вежливый' },
            { q: 'nana — njiva', ru: 'мята — поле' },
            { q: 'nebo — konj', ru: 'небо — конь' },
            { q: 'jagoda, jahta, januar', ru: 'клубника, яхта, январь' }
          ]
        },
        {
          type: 'speak', min: 4, title: 'Brzalice · скороговорки',
          note: 'Сначала медленно, потом быстрее. Кто прочитает быстрее без ошибок?',
          items: [
            { q: 'Na vrh brda vrba mrda.', ru: 'На вершине холма ива шевелится.' },
            { q: 'Čokanjčićem ćeš me, čokanjčićem ću te!', ru: 'Ты меня рюмочкой, я тебя рюмочкой!' },
            { q: 'Petar Petru plete plot, sa tri pruta po tri puta brzo pleti Petre plot.', ru: 'Петар Петру плетёт плетень…' }
          ]
        },
        {
          type: 'match', min: 6, title: 'Ćirilica · подберите слово к букве',
          note: 'Слева — кириллическая буква, справа — слово на латинице, в котором она есть.',
          pairs: [
            ['Њ њ', 'Njemica'], ['Ђ ђ', 'đon'], ['Ц ц', 'cigareta'], ['Ј ј', 'januar'], ['Ч ч', 'čokolada'], ['Ж ж', 'žirafa'],
            ['Љ љ', 'ljudi'], ['Ћ ћ', 'ponoć'], ['Џ џ', 'džep'], ['Ш ш', 'škola'], ['З з', 'zima'], ['С с', 'sestra']
          ]
        },
        {
          type: 'dialog', min: 6, title: 'Strip · Dobrodošli!',
          note: 'Герои комикса — известные сербы: Никола Тесла, Новак Джокович, Эмир Кустурица, Марина Абрамович, Александар Вучич. Прочитайте кириллицу сами, потом проверьте себя по строкам справа.',
          img: 'img/l1_strip.png',
          lines: [
            { who: 'Nikola', sr: 'Zdravo! Ja sam Nikola.', ru: 'Здравствуйте! Я Никола.' },
            { who: 'Novak', sr: 'A kako se vi zovete?', ru: 'А как вас зовут?' },
            { who: 'Marina', sr: 'Drago mi je, zovem se Marina.', ru: 'Очень приятно, меня зовут Марина.' },
            { who: 'Emir', sr: 'Ćao!', ru: 'Привет!' },
            { who: 'Svi', sr: 'Dobrodošli!', ru: 'Добро пожаловать!' }
          ]
        },
        {
          type: 'match', min: 5, title: 'Pozdravi · приветствия и прощания',
          pairs: [
            ['Zdravo!', 'Здравствуйте! (более формально)'], ['Ćao!', 'Привет! / Пока! (менее формально)'], ['Doviđenja!', 'До свидания!'],
            ['Vidimo se!', 'Увидимся!'], ['Dobro jutro!', 'Доброе утро!'], ['Dobar dan!', 'Добрый день!'],
            ['Dobro veče!', 'Добрый вечер!'], ['Laku noć!', 'Спокойной ночи!'], ['Drago mi je!', 'Очень приятно!'],
            ['Dobro došli!', 'Добро пожаловать!'], ['Prijatno!', 'Всего доброго! / Приятного аппетита!'], ['Hvala!', 'Спасибо!']
          ]
        },
        {
          type: 'dialog', min: 5, title: 'Dijalog · formalno upoznavanje',
          note: 'Формальное общение — на «Vi». Прочитайте по ролям, потом поменяйтесь.',
          img: 'img/l1_dijalog.png',
          lines: [
            { who: 'Tijana', sr: 'Zdravo! Ja sam Tijana. Kako se Vi zovete?', ru: 'Здравствуйте! Я Тияна. Как вас зовут?' },
            { who: 'Nikola', sr: 'Dobar dan! Zovem se Nikola. Drago mi je!', ru: 'Добрый день! Меня зовут Никола. Очень приятно!' },
            { who: 'Tijana', sr: 'Drago mi je takođe!', ru: 'Мне тоже очень приятно!' }
          ]
        },
        {
          type: 'text', min: 3, title: 'Leksika · слова для разговора',
          html:
            '<ul><li>[[takođe]] — тоже, также</li><li>[[odakle]] — откуда: [[Odakle si?]] / [[Odakle ste?]]</li>' +
            '<li>[[ali]] — но</li><li>[[fino]] — хорошо, классно</li>' +
            '<li>[[Kako si?]] / [[Kako ste?]] — как дела? Ответ: [[Dobro sam.]] [[Nije loše!]] [[Fino!]]</li>' +
            '<li>[[Ja se zovem Marina.]] = [[Zovem se Marina.]] = [[Ja sam Marina.]]</li></ul>'
        },
        {
          type: 'speak', min: 7, title: 'Upoznavanje · познакомьтесь',
          note: 'Сыграйте две сцены: неформальную (на «ti») и формальную (на «Vi»). Потом представьте друг друга третьему человеку: Ovo je moj prijatelj…',
          items: [
            { q: 'Zdravo! / Ćao! Ja sam …', sample: 'Ćao! Ja sam Timur. — Zdravo! Ja sam Katja.' },
            { q: 'Kako se zoveš? / Kako se Vi zovete?', sample: 'Zovem se Ana. Drago mi je! — Drago mi je takođe!' },
            { q: 'Odakle si? / Odakle ste?', sample: 'Ja sam iz Moskve. A ti? — Ja sam iz Sankt Peterburga.' },
            { q: 'Kako si? / Kako ste?', sample: 'Dobro sam, hvala. A ti? — Nije loše!' },
            { q: 'Doviđenja! / Vidimo se! / Ćao!', sample: 'Vidimo se! — Ćao!' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'Piši kao što govoriš, a čitaj kao što je napisano.',
            'Мягкие: ć, đ, lj, nj, j. Остальные твёрдые.',
            'Zdravo! Ćao! Dobar dan! Doviđenja! Vidimo se!',
            'Ja sam… / Zovem se… / Kako se zoveš? / Odakle si? / Drago mi je!'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: приветствия и знакомство', est: 7, set: 'A' },
        {
          type: 'qa', mode: 'transform', title: 'Ćirilica → latinica · перепишите латиницей', est: 5,
          note: 'Прочитайте слово на кириллице вслух и запишите его латиницей.',
          items: [
            { q: 'Њемица', a: ['Njemica'] }, { q: 'ђон', a: ['đon'] }, { q: 'цигарета', a: ['cigareta'] }, { q: 'јануар', a: ['januar'] },
            { q: 'чоколада', a: ['čokolada'] }, { q: 'жирафа', a: ['žirafa'] }, { q: 'људи', a: ['ljudi'] }, { q: 'поноћ', a: ['ponoć'] },
            { q: 'џеп', a: ['džep'] }, { q: 'школа', a: ['škola'] }, { q: 'Добродошли!', a: ['Dobrodošli!'] }, { q: 'Драго ми је!', a: ['Drago mi je!'] }
          ]
        },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант', est: 5,
          items: [
            { a: ['Dobro jutro!'] }, { a: ['Kako se zoveš?'] }, { a: ['Zovem se Marina.'] }, { a: ['Drago mi je takođe!'] },
            { a: ['Odakle si?'] }, { a: ['Laku noć!'] }, { a: ['Vidimo se!'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Добрый день! Меня зовут Никола.', a: ['Dobar dan! Zovem se Nikola.', 'Dobar dan! Ja se zovem Nikola.'] },
            { q: 'Как вас зовут?', a: ['Kako se zovete?', 'Kako se Vi zovete?'] },
            { q: 'Очень приятно!', a: ['Drago mi je!'] },
            { q: 'Мне тоже очень приятно.', a: ['Drago mi je takođe.', 'Takođe, drago mi je.', 'I meni je drago.'] },
            { q: 'Откуда ты?', a: ['Odakle si?', 'Odakle si ti?'] },
            { q: 'Как дела? — Хорошо, спасибо.', a: ['Kako si? Dobro sam, hvala.', 'Kako si? Dobro, hvala.', 'Kako ste? Dobro sam, hvala.'] },
            { q: 'Спокойной ночи!', a: ['Laku noć!'] },
            { q: 'До свидания! Увидимся!', a: ['Doviđenja! Vidimo se!'] }
          ]
        },
        {
          type: 'write', title: 'Напишите своё представление + запись', est: 6, key: 'hw-1.1-intro', record: true,
          note: '3–4 предложения: как вас зовут, откуда вы, где живёте. Прочитайте вслух и запишите себя.',
          sample: 'Zdravo! Ja sam Katja. Zovem se Ekaterina. Ja sam iz Sankt Peterburga. Živim u Beogradu. Drago mi je!'
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: '1.2',
      title: 'Glagol biti',
      ru: 'Глагол-связка biti: формы, отрицание, вопрос и краткий ответ',
      goals: [
        'сказать, кто я, откуда и какой (Ja sam…, Mi smo…)',
        'построить отрицание: nisam, nisi, nije…',
        'задать вопрос Jesi li…? и коротко ответить: Jesam. / Nisam.'
      ],
      blocks: [
        {
          type: 'speak', min: 4, title: 'Zagrevanje · разминка',
          note: 'Поздоровайтесь по времени суток, спросите, как дела, и представьтесь. Потом прочитайте домашнее представление партнёру.',
          items: [
            { q: 'Dobro jutro! / Dobar dan! / Dobro veče!' },
            { q: 'Kako si? — Dobro sam, hvala. A ti?' },
            { q: 'Ja sam … Odakle si?' }
          ]
        },
        {
          type: 'text', min: 8, title: 'Glagol «biti» · глагол-связка',
          html:
            '<p>В русском «я из Москвы» связки нет, в сербском она обязательна: [[Ja sam iz Moskve.]] — «я <i>есть</i> из Москвы». [[Ja sam Aleksandar.]]</p>' +
            '<p>Формы <i>sam, si, je…</i> — <b>энклитики</b>: безударные слова, которые не могут стоять в начале предложения. Местоимение часто опускают, и тогда связка уходит на второе место: [[Iz Moskve sam.]] [[Student sam.]]</p>' +
            '<p><b>Oni / one / ona:</b> [[Oni su porodica.]] — мужчины или смешанная группа; [[One su sestre.]] — только женщины; [[Ova jezera su lepa.]] — средний род (озёра).</p>',
          tables: [
            { caption: 'biti (kratki oblik)', head: ['jednina', 'množina'], rows: [['ja sam', 'mi smo'], ['ti si', 'vi ste'], ['on / ona / ono je', 'oni / one / ona su']] }
          ]
        },
        {
          type: 'gap', min: 5, title: 'Izaberite oblik glagola biti · выберите форму',
          options: ['sam', 'si', 'je', 'smo', 'ste', 'su'],
          items: [
            'Ja {sam} iz Moskve.',
            'Moja mama {je} iz Crne Gore.',
            'Ti {si} menadžer.',
            'Anastasija {je} Francuskinja.',
            'Mi {smo} prijatelji.',
            'Vi {ste} ljubazni.',
            'Oni {su} u restoranu.',
            'Jezero {je} veliko i lepo.'
          ]
        },
        {
          type: 'gap', bank: true, min: 8, title: 'Dijalozi · вставьте слово из списка',
          note: 'После проверки прочитайте диалоги по ролям.',
          items: [
            '<b>A:</b> Zdravo! {Ja} sam Milica. Imam 25 (dvadeset pet) godina. A {ti} si? <b>B:</b> Ćao! Drago mi je, {ja} sam Srđan.',
            '<b>A:</b> Dobar dan! {Vi} ste Petar Kovačević? <b>B:</b> Dobar dan, da. A {Vi}? <b>A:</b> Ja {sam} Željko Hadžić. Drago mi {je}.',
            '<b>A:</b> Joj! Vi {ste} visok! <b>B:</b> A ti {si} još mala.',
            'Mi {smo} porodica. Moji mama i tata {su} muž i žena. Moj brat {je} učenik, a ja {sam} studentkinja.',
            '<b>Nina:</b> Ćao, Ana! Ovo {je} moj prijatelj Mirko. <b>Ana:</b> Zdravo, Nina! Drago mi je, Mirko. Ja {sam} Ana. <b>Mirko:</b> Drago mi je takođe, Ana. <b>Nina:</b> Ja i Mirko {smo} iz Subotice. <b>Ana:</b> Lepo! Beograđanka {sam}, živim u Beogradu. <b>Mirko:</b> Ljudi u Beogradu {su} veoma ljubazni. <b>Ana:</b> Da? To je super!'
          ]
        },
        {
          type: 'gap', min: 4, title: 'Unesite oblik glagola biti · впишите форму',
          items: [
            'Ona {je} Liljana.', 'Mi {smo} Rusi.', 'Vi {ste} dobra porodica.', 'Ovo jezero {je} veliko i lepo.',
            'Ja {sam} Aleksandar.', 'Ti {si} Brankica.', 'Marko {je} programer.', 'Oni {su} lekari.'
          ]
        },
        {
          type: 'text', min: 4, title: 'Odrični oblik · отрицание',
          html:
            '<p>Отрицание строится через сам глагол-связку, отдельное <i>ne</i> не ставится:</p>' +
            '<p>❌ Ona je ne iz Srbije. ✅ [[Ona nije iz Srbije.]]</p>' +
            '<p>Отрицательная форма ударная, поэтому может стоять в начале: [[Nisam iz Moskve.]]</p>',
          tables: [
            { caption: 'biti — odrični oblik', head: ['jednina', 'množina'], rows: [['ja nisam', 'mi nismo'], ['ti nisi', 'vi niste'], ['on / ona / ono nije', 'oni / one / ona nisu']] }
          ]
        },
        {
          type: 'qa', mode: 'transform', min: 6, title: 'Napravite negaciju · сделайте отрицание',
          note: 'Скажите вслух, потом запишите.',
          items: [
            { q: 'Mi smo iz Amerike.', a: ['Mi nismo iz Amerike.', 'Nismo iz Amerike.'] },
            { q: 'Srbi su.', a: ['Srbi nisu.', 'Nisu Srbi.'] },
            { q: 'Ja sam iz Bara.', a: ['Ja nisam iz Bara.', 'Nisam iz Bara.'] },
            { q: 'Ona je Viktorija.', a: ['Ona nije Viktorija.', 'Nije Viktorija.'] },
            { q: 'Brat je student.', a: ['Brat nije student.'] },
            { q: 'Vi ste porodica.', a: ['Vi niste porodica.', 'Niste porodica.'] },
            { q: 'Menadžer si.', a: ['Menadžer nisi.', 'Nisi menadžer.'] }
          ]
        },
        {
          type: 'text', min: 4, title: 'Pun oblik · полная форма и краткий ответ',
          html:
            '<p>Кроме краткой формы у <i>biti</i> есть полная. Ею задают вопрос и дают краткий ответ:</p>' +
            '<p><b>A:</b> [[Jesi li ti Marko?]] <b>B:</b> [[Jesam.]]<br><b>A:</b> [[Jeste li vi iz Rusije?]] <b>B:</b> [[Jesmo.]]<br><b>A:</b> [[Je li ona iz Budve?]] <b>B:</b> [[Nije.]]</p>',
          tables: [
            { caption: 'biti — pun oblik', head: ['jednina', 'množina'], rows: [['ja jesam', 'mi jesmo'], ['ti jesi', 'vi jeste'], ['on / ona / ono jeste', 'oni / one / ona jesu']] }
          ]
        },
        {
          type: 'gap', bank: true, min: 4, title: 'Dajte kratak odgovor · краткий ответ',
          items: [
            '— Jesi li ti studentkinja? — {Jesam}.',
            '— Je li ona iz Budve? — {Jeste}.',
            '— Jeste li Srbi? — {Jesmo}.',
            '— Jesmo li na moru? — {Jesmo}.',
            '— Jesu li iz Samare? — {Jesu}.'
          ]
        },
        {
          type: 'gap', bank: true, listen: true, min: 6, title: 'Saslušajte priču · прослушайте и вставьте',
          note: 'Сначала прослушайте текст целиком, не глядя на список слов. Потом заполните пропуски и прочитайте вслух.',
          items: [
            'Ćao! Ja {sam} Dejan Ljubić. Imam {35} godina. Ja sam {Srbin}, a moja žena je {Ruskinja}. Ona se zove {Ksenija}. Ksenija ima {33} godine. Živimo u {Novom Sadu}, ovo je veoma lep grad. Dobrodošli!'
          ]
        },
        {
          type: 'speak', min: 5, title: 'O sebi · о себе',
          note: 'Каждый рассказывает о себе по образцу Деяна. Второй задаёт вопросы полной формой: Jesi li ti…? и получает краткий ответ.',
          items: [
            { q: 'Ja sam … Imam … godina.', sample: 'Ja sam Timur. Imam 30 godina.' },
            { q: 'Ja sam Rus / Ruskinja. Nisam Srbin / Srpkinja.', sample: 'Ja sam Ruskinja, nisam Srpkinja.' },
            { q: 'Živim u … Ovo je veoma lep grad.', sample: 'Živim u Beogradu. Ovo je veoma lep grad.' },
            { q: 'Jesi li ti iz Moskve? — Jesam. / Nisam.', sample: 'Jesi li ti student? — Nisam, ja sam programer.' }
          ]
        },
        {
          type: 'summary', min: 2, title: 'Rezime · итог занятия',
          points: [
            'sam, si, je, smo, ste, su — энклитики, не в начале предложения',
            'nisam, nisi, nije, nismo, niste, nisu — отрицание',
            'jesam, jesi, jeste, jesmo, jeste, jesu — вопрос и краткий ответ',
            'Jesi li ti Marko? — Jesam. / Nisam.'
          ]
        }
      ],
      homework: [
        { type: 'flash', title: 'Карточки: люди, профессии, прилагательные', est: 7, set: 'B' },
        { type: 'conj', title: 'Тренажёр: формы biti (утверждение и отрицание)', est: 5, verbs: ['biti'], rounds: 12 },
        {
          type: 'qa', mode: 'dictation', title: 'Диктант: диалог Milan i Jelena', est: 6,
          items: [
            { a: ['Kako se zoveš?'] }, { a: ['Ja sam Jelena, a ti?'] }, { a: ['Odakle si, Jelena?'] },
            { a: ['Ja sam iz Banja Luke.'] }, { a: ['Iz Kragujevca sam.'] }, { a: ['Drago mi je takođe.'] }, { a: ['Vidimo se!'] }
          ]
        },
        {
          type: 'qa', mode: 'translate', title: 'Перевод на сербский', est: 8,
          items: [
            { q: 'Я из Москвы.', a: ['Ja sam iz Moskve.', 'Iz Moskve sam.'] },
            { q: 'Мы друзья.', a: ['Mi smo prijatelji.', 'Prijatelji smo.'] },
            { q: 'Она не из Сербии.', a: ['Ona nije iz Srbije.', 'Nije iz Srbije.'] },
            { q: 'Вы очень вежливые.', a: ['Vi ste veoma ljubazni.', 'Veoma ste ljubazni.'] },
            { q: 'Это мой друг Мирко.', a: ['Ovo je moj prijatelj Mirko.'] },
            { q: 'Ты студентка? — Да.', a: ['Jesi li ti studentkinja? Jesam.', 'Jesi li studentkinja? Jesam.', 'Da li si studentkinja? Jesam.'] },
            { q: 'Они не врачи.', a: ['Oni nisu lekari.', 'Nisu lekari.'] },
            { q: 'Озеро большое и красивое.', a: ['Jezero je veliko i lepo.'] }
          ]
        },
        {
          type: 'write', title: 'Текст о себе по образцу Деяна + запись', est: 6, key: 'hw-1.2-o-sebi', record: true,
          note: '5–6 предложений: имя, возраст, национальность, город. Используйте и отрицание (nisam…). Запишите чтение вслух.',
          sample: 'Ćao! Ja sam Dejan Ljubić. Imam 35 godina. Ja sam Srbin, nisam Rus. Moja žena je Ruskinja, zove se Ksenija. Živimo u Novom Sadu, ovo je veoma lep grad.'
        }
      ]
    }
  ]
});
