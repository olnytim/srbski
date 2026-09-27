(function () {
  'use strict';

  /* ---------- tiny DOM helper ---------- */
  function h(tag, attrs) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v == null || v === false) return;
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    });
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) c.forEach(function (x) { append(el, x); });
    else el.appendChild(typeof c === 'object' ? c : document.createTextNode(String(c)));
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function rnd(n) { return Math.floor(Math.random() * n); }

  /* ---------- persistent state ---------- */
  var STORE_KEY = 'srb.v1';
  var state = { done: {}, srs: {}, texts: {}, cyr: false, rate: 1 };
  try { Object.assign(state, JSON.parse(localStorage.getItem(STORE_KEY) || '{}')); } catch (e) { /* storage unavailable */ }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ } }

  /* ---------- script conversion and answer checking ---------- */
  var LAT2CYR = { a: 'а', b: 'б', c: 'ц', 'č': 'ч', 'ć': 'ћ', d: 'д', 'đ': 'ђ', e: 'е', f: 'ф', g: 'г', h: 'х', i: 'и', j: 'ј', k: 'к', l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', r: 'р', s: 'с', 'š': 'ш', t: 'т', u: 'у', v: 'в', z: 'з', 'ž': 'ж' };
  var DIGRAPHS = { lj: 'љ', nj: 'њ', 'dž': 'џ' };
  function toCyr(s) {
    var out = '';
    for (var i = 0; i < s.length; i++) {
      var two = s.substr(i, 2), lo2 = two.toLowerCase(), ch = s[i], lo = ch.toLowerCase(), c;
      if (DIGRAPHS[lo2]) { c = DIGRAPHS[lo2]; out += two[0] !== lo2[0] ? c.toUpperCase() : c; i++; continue; }
      c = LAT2CYR[lo];
      out += c ? (ch !== lo ? c.toUpperCase() : c) : ch;
    }
    return out;
  }
  var CYR2LAT = { 'љ': 'lj', 'њ': 'nj', 'џ': 'dž' };
  Object.keys(LAT2CYR).forEach(function (k) { CYR2LAT[LAT2CYR[k]] = k; });
  function toLat(s) { return s.replace(/[Ѐ-ӿ]/g, function (ch) { var lo = ch.toLowerCase(); return CYR2LAT[lo] || ch; }); }

  function norm(s) { return toLat(String(s).toLowerCase()).replace(/[.,!?;:"“”„«»()\-–—…]/g, ' ').replace(/\s+/g, ' ').trim(); }
  function bare(s) { return norm(s).replace(/[čć]/g, 'c').replace(/š/g, 's').replace(/ž/g, 'z').replace(/đ/g, 'dj'); }
  // Returns 'ok', 'almost' (only diacritics differ) or 'no'.
  function check(input, answers) {
    var n = norm(input), b = bare(input), almost = false;
    for (var i = 0; i < answers.length; i++) {
      if (norm(answers[i]) === n) return 'ok';
      if (bare(answers[i]) === b) almost = true;
    }
    return almost ? 'almost' : 'no';
  }

  /* ---------- Serbian numbers ---------- */
  var UNITS = ['nula', 'jedan', 'dva', 'tri', 'četiri', 'pet', 'šest', 'sedam', 'osam', 'devet', 'deset', 'jedanaest', 'dvanaest', 'trinaest', 'četrnaest', 'petnaest', 'šesnaest', 'sedamnaest', 'osamnaest', 'devetnaest'];
  var TENS = ['', '', 'dvadeset', 'trideset', 'četrdeset', 'pedeset', 'šezdeset', 'sedamdeset', 'osamdeset', 'devedeset'];
  var HUNDREDS = ['', 'sto', 'dvesta', 'trista', 'četiristo', 'petsto', 'šeststo', 'sedamsto', 'osamsto', 'devetsto'];
  // gender: 'm' (default), 'f' (jedna, dve) or 'facc' (jednu, dve)
  function unitWord(n, gender) {
    if (n === 1 && gender === 'f') return 'jedna';
    if (n === 1 && gender === 'facc') return 'jednu';
    if (n === 2 && gender && gender !== 'm') return 'dve';
    return UNITS[n];
  }
  function below1000(n, gender) {
    var parts = [], rest = n % 100;
    if (n >= 100) parts.push(HUNDREDS[Math.floor(n / 100)]);
    if (rest > 0 && rest < 20) parts.push(unitWord(rest, gender));
    else if (rest >= 20) { parts.push(TENS[Math.floor(rest / 10)]); if (rest % 10) parts.push(unitWord(rest % 10, gender)); }
    return parts.join(' ');
  }
  function numToSr(n, gender) {
    if (n === 0) return 'nula';
    var th = Math.floor(n / 1000), rest = n % 1000, parts = [];
    if (th === 1) parts.push('hiljadu');
    else if (th > 1) {
      var l2 = th % 100, l = th % 10;
      parts.push(below1000(th, 'f') + ' ' + ((l >= 2 && l <= 4 && !(l2 >= 12 && l2 <= 14)) ? 'hiljade' : 'hiljada'));
    }
    if (rest) parts.push(below1000(rest, gender));
    return parts.join(' ');
  }
  function godinaForm(n) {
    var l2 = n % 100, l = n % 10;
    if (l2 >= 11 && l2 <= 14) return 'godina';
    if (l === 1) return 'godinu';
    if (l >= 2 && l <= 4) return 'godine';
    return 'godina';
  }

  /* ---------- speech ---------- */
  var voice = null;
  function pickVoice() {
    if (!window.speechSynthesis) return;
    var vs = speechSynthesis.getVoices(), prefs = ['sr', 'hr', 'bs'];
    voice = null;
    for (var p = 0; p < prefs.length && !voice; p++) for (var i = 0; i < vs.length; i++) if (vs[i].lang.toLowerCase().indexOf(prefs[p]) === 0) { voice = vs[i]; break; }
    var warn = document.getElementById('ttsWarn');
    if (!vs.length) return;
    if (!voice) { warn.hidden = false; warn.textContent = 'Озвучка недоступна: в системе нет сербского или хорватского голоса. macOS: Системные настройки → Универсальный доступ → Устный контент → Системный голос → Управлять голосами → Hrvatski (Lana) или Srpski.'; }
    else warn.hidden = true;
  }
  if (window.speechSynthesis) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function say(text, onend) {
    if (!window.speechSynthesis || !voice) { if (onend) onend(); return; }
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(toLat(text).replace(/\s*\/\s*/g, ', ').replace(/—/g, ','));
    u.voice = voice; u.lang = voice.lang; u.rate = 0.9 * state.rate;
    if (onend) u.onend = onend;
    speechSynthesis.speak(u);
  }

  // A Serbian text fragment: click to hear, follows the Lat/Cyr toggle.
  function sr(text, cls, spoken) {
    return h('span', { class: 'sr ' + (cls || ''), 'data-lat': text, 'data-say': spoken, title: 'Нажмите, чтобы послушать' }, state.cyr ? toCyr(text) : text);
  }
  function markup(html) { return html.replace(/\[\[(.+?)\]\]/g, function (_, t) { return '<span class="sr" data-lat="' + t.replace(/"/g, '&quot;') + '" title="Нажмите, чтобы послушать">' + (state.cyr ? toCyr(t) : t) + '</span>'; }); }
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('.sr');
    if (el && !e.target.closest('button')) say(el.getAttribute('data-say') || el.getAttribute('data-lat'));
  });
  function applyScript() {
    document.querySelectorAll('.sr').forEach(function (el) { var t = el.getAttribute('data-lat'); el.textContent = state.cyr ? toCyr(t) : t; });
    document.getElementById('cyrBtn').textContent = state.cyr ? 'Ћир' : 'Lat';
  }

  /* ---------- keypad for special letters ---------- */
  var lastInput = null, keypad = document.getElementById('keypad');
  ['č', 'ć', 'š', 'ž', 'đ'].forEach(function (ch) {
    keypad.appendChild(h('button', { type: 'button', onmousedown: function (e) {
      e.preventDefault();
      if (!lastInput) return;
      var s = lastInput.selectionStart, en = lastInput.selectionEnd, v = lastInput.value;
      var c = (s === 0 || /[.!?]\s*$/.test(v.slice(0, s))) && lastInput.tagName === 'TEXTAREA' ? ch.toUpperCase() : ch;
      lastInput.value = v.slice(0, s) + c + v.slice(en);
      lastInput.selectionStart = lastInput.selectionEnd = s + 1;
      lastInput.dispatchEvent(new Event('input'));
    } }, ch));
  });
  document.addEventListener('focusin', function (e) {
    if (e.target.matches('input[type=text], textarea')) { lastInput = e.target; keypad.hidden = false; }
  });

  /* ---------- SRS ---------- */
  var INTERVALS = [0, 1, 3, 7, 14, 30]; // days per box
  var DAY = 86400000;
  function allCards() {
    var out = [];
    Object.keys(COURSE.lessons).forEach(function (n) { COURSE.lessons[n].vocab.forEach(function (v) { out.push(Object.assign({ key: n + ':' + v.id }, v)); }); });
    return out;
  }
  function dueCards() { var now = Date.now(); return allCards().filter(function (c) { var s = state.srs[c.key]; return s && s.due <= now; }); }
  function grade(card, g) { // g: 0 = no, 1 = hard, 2 = know
    var s = state.srs[card.key] || { box: 0, due: 0 };
    if (g === 0) { s.box = 0; s.due = Date.now(); }
    else if (g === 1) { s.due = Date.now() + DAY; }
    else { s.box = Math.min(s.box + 1, INTERVALS.length - 1); s.due = Date.now() + INTERVALS[s.box] * DAY; }
    state.srs[card.key] = s; save(); updateBadge();
  }
  function updateBadge() { var n = dueCards().length; document.getElementById('dueBadge').textContent = n ? n : ''; }

  /* ---------- shared bits ---------- */
  function feedback(el, status, text) { el.className = 'fb ' + status; el.textContent = text; }
  function recorder() {
    var box = h('div', { class: 'recorder' });
    if (!navigator.mediaDevices || !window.MediaRecorder) { box.appendChild(h('span', { class: 'muted' }, 'Запись в этом браузере недоступна — запишите себя на диктофон телефона.')); return box; }
    var rec = null, chunks = [], audio = h('audio', { controls: true, hidden: true });
    var btn = h('button', { class: 'ghost', onclick: function () {
      if (rec && rec.state === 'recording') { rec.stop(); return; }
      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        chunks = []; rec = new MediaRecorder(stream);
        rec.ondataavailable = function (e) { chunks.push(e.data); };
        rec.onstop = function () { stream.getTracks().forEach(function (t) { t.stop(); }); audio.src = URL.createObjectURL(new Blob(chunks)); audio.hidden = false; btn.textContent = '● Записать заново'; };
        rec.start(); btn.textContent = '■ Остановить';
      }).catch(function () { btn.textContent = 'Нет доступа к микрофону'; });
    } }, '● Записать себя');
    append(box, [btn, audio]);
    return box;
  }

  /* ---------- block renderers: each returns a DOM node, calls done() when completed ---------- */
  var R = {};

  R.text = function (b) {
    var box = h('div');
    if (b.img) box.appendChild(h('img', { class: 'pic', src: b.img, alt: '' }));
    if (b.html) box.appendChild(h('div', { class: 'prose', html: markup(b.html) }));
    (b.tables || []).forEach(function (t) { box.appendChild(table(t)); });
    if (b.after) box.appendChild(h('div', { class: 'prose', html: markup(b.after) }));
    return box;
  };
  function table(t) {
    var hasHead = t.head.some(function (x) { return x; });
    return h('figure', { class: 'tbl' },
      h('figcaption', null, t.caption),
      h('table', null,
        hasHead && h('thead', null, h('tr', null, t.head.map(function (c) { return h('th', null, c); }))),
        h('tbody', null, t.rows.map(function (r) { return h('tr', null, r.map(function (c) {
          if (Array.isArray(c)) return h('td', null, sr(c[0], '', c[1])); // [display, spoken]
          return h('td', null, c && /[a-zčćšžđ]/i.test(c) && !/[а-я]/i.test(c) ? sr(c, '', c.replace(/^\d+\s+/, '')) : c);
        })); }))));
  }

  R.dialog = function (b) {
    var showRu = false, list = h('div', { class: 'lines' });
    function draw() {
      list.innerHTML = '';
      b.lines.forEach(function (l) { list.appendChild(h('div', { class: 'line' }, h('b', { class: 'who' }, l.who), h('div', null, sr(l.sr), showRu && h('div', { class: 'muted' }, l.ru)))); });
    }
    draw();
    function playAll(i) { if (i < b.lines.length) say(b.lines[i].sr, function () { setTimeout(function () { playAll(i + 1); }, 350); }); }
    return h('div', { class: 'dialog' },
      b.img && h('img', { class: 'pic tall', src: b.img, alt: '' }),
      h('div', null,
        h('div', { class: 'row' },
          h('button', { onclick: function () { playAll(0); } }, '▶ Прослушать всё'),
          h('button', { class: 'ghost', onclick: function () { showRu = !showRu; draw(); } }, 'Перевод')),
        list));
  };

  R.gap = function (b, done) {
    var blanks = [], box = h('div');
    if (b.img) box.appendChild(h('img', { class: 'pic', src: b.img, alt: '' }));
    var bank = null;
    if (b.bank) { bank = []; b.items.forEach(function (it) { it.replace(/\{(.+?)\}/g, function (_, a) { bank.push(a.split('|')[0]); }); }); bank = shuffle(bank.filter(function (x, i) { return bank.indexOf(x) === i; })); }
    var opts = b.options || bank;
    var ol = h(b.items.length > 1 ? 'ol' : 'div', { class: 'gaps' });
    b.items.forEach(function (it) {
      var li = h(b.items.length > 1 ? 'li' : 'p');
      it.split(/(\{.+?\})/).forEach(function (part) {
        var m = part.match(/^\{(.+)\}$/);
        if (!m) { li.appendChild(h('span', { html: part })); return; }
        var answers = m[1].split('|'), field;
        if (opts) field = h('select', null, h('option', { value: '' }, '…'), opts.map(function (o) { return h('option', { value: o }, o); }));
        else field = h('input', { type: 'text', size: Math.max(answers[0].length + 1, 5), autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false' });
        blanks.push({ field: field, answers: answers });
        li.appendChild(field);
      });
      ol.appendChild(li);
    });
    var fb = h('div', { class: 'fb' });
    function run(reveal) {
      var ok = 0, almost = 0;
      blanks.forEach(function (x) {
        if (reveal) x.field.value = x.answers[0];
        var r = check(x.field.value, x.answers);
        x.field.className = r === 'ok' ? 'good' : r === 'almost' ? 'almost' : x.field.value ? 'bad' : '';
        if (r === 'ok') ok++; if (r === 'almost') almost++;
      });
      if (ok === blanks.length) { feedback(fb, 'good', reveal ? 'Ответы показаны. Прочитайте всё вслух.' : 'Tačno! Всё верно. Прочитайте всё вслух.'); done(); }
      else feedback(fb, 'bad', 'Верно: ' + ok + ' из ' + blanks.length + (almost ? ' · жёлтые — проверьте č ć š ž đ' : ''));
    }
    var listen = b.listen && h('button', { class: 'ghost', onclick: function () {
      say(b.items.map(function (it) { return it.replace(/\{(.+?)\}/g, function (_, a) { return a.split('|')[0]; }).replace(/<[^>]+>/g, ''); }).join(' '));
    } }, '🔊 Прослушать текст');
    append(box, [ol, h('div', { class: 'row' }, listen, h('button', { onclick: function () { run(false); } }, 'Проверить'), h('button', { class: 'ghost', onclick: function () { run(true); } }, 'Показать ответы')), fb]);
    return box;
  };

  // Prompt -> typed answer. Modes: transform (Serbian prompt), translate (Russian prompt), dictation (audio prompt).
  R.qa = function (b, done) {
    var i = 0, score = 0, box = h('div', { class: 'qa' });
    function draw() {
      box.innerHTML = '';
      if (i >= b.items.length) { box.appendChild(h('p', { class: 'fb good' }, 'Готово: ' + score + ' из ' + b.items.length + ' с первой попытки.')); box.appendChild(h('button', { class: 'ghost', onclick: function () { i = 0; score = 0; draw(); } }, 'Ещё раз')); done(); return; }
      var it = b.items[i], tried = false;
      var input = h('input', { type: 'text', class: 'wide', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: 'Ваш ответ на сербском' });
      var fb = h('div', { class: 'fb' }), extra = h('div', { class: 'row' });
      var next = function () { i++; draw(); };
      function submit() {
        var r = check(input.value, it.a);
        if (r === 'ok') { if (!tried) score++; feedback(fb, 'good', 'Tačno!'); say(it.a[0]); extra.innerHTML = ''; extra.appendChild(h('button', { onclick: next }, 'Дальше →')); extra.firstChild.focus(); }
        else {
          tried = true;
          feedback(fb, r === 'almost' ? 'almost' : 'bad', r === 'almost' ? 'Почти: проверьте č ć š ž đ' : 'Не совпало с образцом.');
          extra.innerHTML = '';
          append(extra, [h('button', { class: 'ghost', onclick: function () { extra.innerHTML = ''; append(extra, [h('div', { class: 'sample' }, 'Образец: ', sr(it.a[0])), h('button', { onclick: next }, 'Дальше →')]); say(it.a[0]); } }, 'Показать образец')]);
        }
      }
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
      var prompt;
      if (b.mode === 'dictation') { prompt = h('button', { class: 'big', onclick: function () { say(it.a[0]); input.focus(); } }, '🔊 Прослушать'); setTimeout(function () { say(it.a[0]); }, 300); }
      else if (b.mode === 'translate') prompt = h('div', { class: 'prompt' }, it.q);
      else prompt = h('div', { class: 'prompt' }, sr(it.q));
      append(box, [h('div', { class: 'muted' }, (i + 1) + ' / ' + b.items.length), prompt, input, h('div', { class: 'row' }, h('button', { onclick: submit }, 'Проверить')), fb, extra]);
      input.focus();
    }
    draw();
    return box;
  };

  R.match = function (b, done) {
    var CH = 6, round = 0, box = h('div');
    function draw() {
      box.innerHTML = '';
      var pairs = b.pairs.slice(round * CH, round * CH + CH);
      if (!pairs.length) { box.appendChild(h('p', { class: 'fb good' }, 'Все пары собраны!')); done(); return; }
      var left = null, solved = 0;
      var L = h('div', { class: 'col' }), Rr = h('div', { class: 'col' });
      shuffle(pairs).forEach(function (p) { L.appendChild(h('button', { class: 'tile', 'data-k': p[0], onclick: function (e) { if (left) left.classList.remove('sel'); left = e.currentTarget; left.classList.add('sel'); say(p[2] || p[0]); } }, state.cyr ? toCyr(p[0]) : p[0])); });
      shuffle(pairs).forEach(function (p) { Rr.appendChild(h('button', { class: 'tile', onclick: function (e) {
        if (!left) return;
        var t = e.currentTarget;
        if (left.getAttribute('data-k') === p[0]) { [left, t].forEach(function (x) { x.classList.remove('sel'); x.classList.add('good'); x.disabled = true; }); left = null; if (++solved === pairs.length) setTimeout(function () { round++; draw(); }, 600); }
        else { t.classList.add('bad'); setTimeout(function () { t.classList.remove('bad'); }, 500); }
      } }, p[1])); });
      append(box, [h('div', { class: 'muted' }, 'Раунд ' + (round + 1) + ' из ' + Math.ceil(b.pairs.length / CH)), h('div', { class: 'match' }, L, Rr)]);
    }
    draw();
    return box;
  };

  R.letters = function (b, done) {
    var i = 0, box = h('div', { class: 'qa' });
    function draw() {
      box.innerHTML = '';
      if (i >= b.items.length) { box.appendChild(h('p', { class: 'fb good' }, 'Готово!')); done(); return; }
      var it = b.items[i], placed = [], pool = shuffle(it.word.split('').map(function (c, k) { return { c: c, k: k }; }));
      var top = h('div', { class: 'letters' }), bottom = h('div', { class: 'letters' }), fb = h('div', { class: 'fb' });
      function redraw() {
        top.innerHTML = ''; bottom.innerHTML = '';
        for (var s = 0; s < it.word.length; s++) (function (s) {
          var p = placed[s];
          top.appendChild(h('button', { class: 'letter' + (p ? '' : ' empty'), onclick: function () { if (p) { placed.splice(s, 1); redraw(); } } }, p ? p.c : ''));
        })(s);
        pool.forEach(function (p) { var used = placed.indexOf(p) >= 0; bottom.appendChild(h('button', { class: 'letter', disabled: used, onclick: function () { placed.push(p); redraw(); } }, p.c)); });
        if (placed.length === it.word.length) {
          if (placed.map(function (p) { return p.c; }).join('') === it.word) { feedback(fb, 'good', 'Tačno!'); say(it.word); setTimeout(function () { i++; draw(); }, 1100); }
          else feedback(fb, 'bad', 'Не то. Нажмите на букву, чтобы убрать её.');
        } else fb.textContent = '';
      }
      redraw();
      append(box, [h('div', { class: 'muted' }, (i + 1) + ' / ' + b.items.length), h('div', { class: 'prompt' }, sr(it.clue)), top, h('hr'), bottom, fb]);
    }
    draw();
    return box;
  };


  // Rebuild a sentence from shuffled word tiles.
  R.order = function (b, done) {
    var i = 0, box = h('div', { class: 'qa' });
    function draw() {
      box.innerHTML = '';
      if (i >= b.items.length) { box.appendChild(h('p', { class: 'fb good' }, 'Готово!')); done(); return; }
      var sentence = b.items[i], words = sentence.split(' '), placed = [], pool = shuffle(words.map(function (w, k) { return { w: w, k: k }; }));
      var top = h('div', { class: 'letters' }), bottom = h('div', { class: 'letters' }), fb = h('div', { class: 'fb' });
      function redraw() {
        top.innerHTML = ''; bottom.innerHTML = '';
        placed.forEach(function (p, s) { top.appendChild(h('button', { class: 'letter word', onclick: function () { placed.splice(s, 1); redraw(); } }, p.w)); });
        if (!placed.length) top.appendChild(h('span', { class: 'muted' }, 'Нажимайте на слова по порядку'));
        pool.forEach(function (p) { bottom.appendChild(h('button', { class: 'letter word', disabled: placed.indexOf(p) >= 0, onclick: function () { placed.push(p); redraw(); } }, p.w)); });
        if (placed.length === words.length) {
          if (placed.map(function (p) { return p.w; }).join(' ') === sentence) { feedback(fb, 'good', 'Tačno!'); say(sentence); setTimeout(function () { i++; draw(); }, 1200); }
          else feedback(fb, 'bad', 'Порядок не тот. Нажмите на слово, чтобы вернуть его.');
        } else fb.textContent = '';
      }
      redraw();
      append(box, [h('div', { class: 'muted' }, (i + 1) + ' / ' + b.items.length), top, h('hr'), bottom, fb]);
    }
    draw();
    return box;
  };

  // True / false statements about a text.
  R.tf = function (b, done) {
    var box = h('div'), score = 0, answered = 0;
    if (b.img) box.appendChild(h('img', { class: 'pic', src: b.img, alt: '' }));
    var ol = h('ol', { class: 'speak' });
    b.items.forEach(function (it) {
      var fb = h('span', { class: 'fb' }), locked = false;
      var mk = function (val, label) {
        return h('button', { class: 'tile small', onclick: function (e) {
          if (locked) return; locked = true; answered++;
          if (val === it.a) { score++; e.currentTarget.classList.add('good'); } else e.currentTarget.classList.add('bad');
          fb.textContent = val === it.a ? 'Tačno!' : (it.a ? 'На самом деле: верно.' : 'На самом деле: неверно.') + (it.why ? ' ' + it.why : '');
          if (answered === b.items.length) done();
        } }, label);
      };
      ol.appendChild(h('li', null, sr(it.q), h('div', { class: 'row' }, mk(true, 'Tačno'), mk(false, 'Netačno'), fb)));
    });
    box.appendChild(ol);
    return box;
  };


  // Multiple choice: one sentence, several options, one correct.
  R.mc = function (b, done) {
    var box = h('div'), answered = 0;
    var ol = h('ol', { class: 'speak' });
    b.items.forEach(function (it) {
      var locked = false, fb = h('span', { class: 'fb' });
      var row = h('div', { class: 'row' }, shuffle(it.options).map(function (o) {
        return h('button', { class: 'tile small', onclick: function (e) {
          if (locked) return; locked = true; answered++;
          var full = it.q.replace('…', it.a);
          if (o === it.a) { e.currentTarget.classList.add('good'); fb.textContent = 'Tačno!'; } else { e.currentTarget.classList.add('bad'); fb.textContent = 'Правильно: ' + it.a; }
          say(full);
          if (answered === b.items.length) done();
        } }, o);
      }));
      ol.appendChild(h('li', null, sr(it.q), it.ru && h('span', { class: 'muted' }, ' — ' + it.ru), row, fb));
    });
    box.appendChild(ol);
    return box;
  };

  // Sort words into groups: pick a word, then its group.
  R.sort = function (b, done) {
    var box = h('div'), cur = null, left = b.items.length;
    var pool = h('div', { class: 'letters' }), fb = h('div', { class: 'fb' });
    var cols = h('div', { class: 'match cols' + b.groups.length }, b.groups.map(function (g) {
      var col = h('div', { class: 'col group' }, h('button', { class: 'tile', onclick: function () {
        if (!cur) return;
        if (cur.item.g === g) { cur.btn.remove(); col.appendChild(h('div', { class: 'placed' }, sr(cur.item.w))); cur = null; fb.textContent = ''; if (--left === 0) { feedback(fb, 'good', 'Готово!'); done(); } }
        else { feedback(fb, 'bad', 'Не сюда. ' + (cur.item.hint || '')); }
      } }, g));
      return col;
    }));
    shuffle(b.items).forEach(function (it) {
      var btn = h('button', { class: 'letter word', onclick: function () { pool.querySelectorAll('.sel').forEach(function (x) { x.classList.remove('sel'); }); btn.classList.add('sel'); cur = { item: it, btn: btn }; say(it.w); } }, it.w);
      pool.appendChild(btn);
    });
    append(box, [h('p', { class: 'muted' }, 'Нажмите на слово, потом на название группы.'), pool, cols, fb]);
    return box;
  };

  R.speak = function (b, done) {
    var box = h('div');
    if (b.img) box.appendChild(h('img', { class: 'pic', src: b.img, alt: '' }));
    var ol = h('ol', { class: 'speak' });
    b.items.forEach(function (it) {
      var sample = it.sample && h('div', { class: 'sample', hidden: true }, sr(it.sample));
      ol.appendChild(h('li', null, sr(it.q, 'q'), it.ru && h('span', { class: 'muted' }, ' — ' + it.ru), ' ',
        sample && h('button', { class: 'ghost small', onclick: function () { sample.hidden = !sample.hidden; } }, 'образец'), sample));
    });
    append(box, [ol, b.record && recorder()]);
    done();
    return box;
  };

  R.summary = function (b, done) {
    done();
    return h('ul', { class: 'summary' }, b.points.map(function (p) { return h('li', null, sr(p)); }));
  };

  R.write = function (b, done) {
    var ta = h('textarea', { rows: 8, spellcheck: 'false', placeholder: 'Pišite ovde…' });
    ta.value = state.texts[b.key] || '';
    var count = h('span', { class: 'muted' });
    function upd() { var w = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0; count.textContent = 'Слов: ' + w; if (w >= 15) done(); }
    ta.addEventListener('input', function () { state.texts[b.key] = ta.value; save(); upd(); });
    upd();
    var sample = h('div', { class: 'sample', hidden: true }, sr(b.sample));
    return h('div', null, ta, h('div', { class: 'row' }, count,
      h('button', { class: 'ghost small', onclick: function () { sample.hidden = !sample.hidden; } }, 'Пример'),
      h('button', { class: 'ghost small', onclick: function () { say(ta.value); } }, '🔊 Прослушать мой текст')),
      sample, b.record && recorder());
  };

  R.conj = function (b, done, lesson) {
    var PRON = { ja: ['ja'], ti: ['ti'], on: ['on', 'ona', 'ono'], mi: ['mi'], vi: ['vi'], oni: ['oni', 'one'] };
    var AUX = { ja: 'sam', ti: 'si', on: 'je', mi: 'smo', vi: 'ste', oni: 'su' }, NAUX = { ja: 'nisam', ti: 'nisi', on: 'nije', mi: 'nismo', vi: 'niste', oni: 'nisu' };
    var POT = { ja: 'bih', ti: 'bi', on: 'bi', mi: 'bismo', vi: 'biste', oni: 'bi' };
    var n = 0, score = 0, total = b.rounds || 10, box = h('div', { class: 'qa' });
    function draw() {
      box.innerHTML = '';
      if (n >= total) { box.appendChild(h('p', { class: 'fb good' }, 'Результат: ' + score + ' из ' + total)); box.appendChild(h('button', { class: 'ghost', onclick: function () { n = 0; score = 0; draw(); } }, 'Ещё раз')); done(); return; }
      var v = lesson.verbs[b.verbs[rnd(b.verbs.length)]], keys = Object.keys(PRON), k = keys[rnd(keys.length)];
      var pron = PRON[k][rnd(PRON[k].length)], answers, full, kind, label;
      if (b.tense === 'past' || b.tense === 'pot') {
        // Perfekat: auxiliary + l-participle; gender follows the pronoun (ja/ti/mi/vi get a random gender).
        var g = pron === 'on' ? 'm' : pron === 'ona' ? 'f' : pron === 'ono' ? 'n' : pron === 'one' ? 'fpl' : pron === 'oni' ? 'mpl' : (k === 'mi' || k === 'vi') ? (rnd(2) ? 'mpl' : 'fpl') : (rnd(2) ? 'm' : 'f');
        var part = v.l[g] || v.l[g.replace('pl', '')], neg = rnd(3) === 0;
        kind = neg ? '−' : '+'; label = neg ? 'отрицание' : 'утверждение';
        var gLabel = { m: 'муж.', f: 'жен.', n: 'ср.', mpl: 'муж. мн.', fpl: 'жен. мн.' }[g];
        if (b.tense === 'pot') {
          full = neg ? pron + ' ne ' + POT[k] + ' ' + part : pron + ' ' + POT[k] + ' ' + part;
          answers = neg ? ['ne ' + POT[k] + ' ' + part, pron + ' ne ' + POT[k] + ' ' + part] : [POT[k] + ' ' + part, pron + ' ' + POT[k] + ' ' + part, part + ' ' + POT[k]];
        } else {
          full = neg ? pron + ' ' + NAUX[k] + ' ' + part : pron + ' ' + AUX[k] + ' ' + part;
          answers = neg ? [NAUX[k] + ' ' + part, pron + ' ' + NAUX[k] + ' ' + part] : [AUX[k] + ' ' + part, pron + ' ' + AUX[k] + ' ' + part, part + ' ' + AUX[k]];
        }
        label += ' · ' + gLabel;
      } else {
        var kinds = v.noQuestion ? ['+', '−'] : ['+', '−', '?']; kind = kinds[rnd(kinds.length)];
        var form = kind === '−' ? v.neg[k] : v.pos[k];
        answers = kind === '?' ? ['Da li ' + form, 'Da li ' + pron + ' ' + form, form + ' li'] : [form, pron + ' ' + form];
        label = { '+': 'утверждение', '−': 'отрицание', '?': 'вопрос (Da li…)' }[kind];
        full = kind === '?' ? 'Da li ' + pron + ' ' + form + '?' : pron + ' ' + form;
      }
      var input = h('input', { type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', placeholder: b.tense === 'pot' ? 'bih / bi / bismo + причастие' : b.tense === 'past' ? 'связка + причастие' : 'форма глагола' }), fb = h('div', { class: 'fb' }), locked = false;
      function submit() {
        if (locked) { n++; draw(); return; }
        var r = check(input.value, answers);
        if (r === 'ok') { score++; feedback(fb, 'good', 'Tačno! ' + full); } else feedback(fb, r === 'almost' ? 'almost' : 'bad', 'Правильно: ' + full);
        say(full); locked = true; btn.textContent = 'Дальше →';
      }
      var btn = h('button', { onclick: submit }, 'Проверить');
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
      append(box, [h('div', { class: 'muted' }, (n + 1) + ' / ' + total), h('div', { class: 'prompt' }, h('b', null, pron), ' + ', v.inf, ' ', h('span', { class: 'chip' }, kind + ' ' + label)), input, h('div', { class: 'row' }, btn), fb]);
      input.focus();
    }
    draw();
    return box;
  };

  R.numbers = function (b, done) {
    var n = 0, box = h('div', { class: 'qa' }), total = b.rounds || 0, score = 0;
    function randomNumber() { var max = b.max || 999, digits = 1 + rnd(String(max).length); return Math.min(max, 1 + rnd(Math.pow(10, digits) - 1)); }
    function phoneWords(p) { return p.replace(/\+/g, 'plus ').replace(/\d/g, function (d) { return UNITS[+d] + ' '; }).replace(/\s+/g, ' ').trim(); }
    function nextBtn() { return h('button', { onclick: function () { n++; draw(); } }, 'Дальше →'); }
    function draw() {
      box.innerHTML = '';
      var fixed = b.fixed || [];
      if (fixed.length && n >= fixed.length) done();
      if (total && n >= total) { box.appendChild(h('p', { class: 'fb good' }, 'Результат: ' + score + ' из ' + total)); box.appendChild(h('button', { class: 'ghost', onclick: function () { n = 0; score = 0; draw(); } }, 'Ещё раз')); done(); return; }

      if (b.mode === 'phone') {
        if (n >= fixed.length) { box.appendChild(h('p', { class: 'fb good' }, 'Теперь назовите друг другу свои номера: Koji imaš broj telefona?')); return; }
        var ans = h('div', { class: 'sample', hidden: true }, sr(phoneWords(fixed[n])));
        append(box, [h('div', { class: 'bignum' }, fixed[n]), h('div', { class: 'row' }, h('button', { class: 'ghost', onclick: function () { ans.hidden = false; say(phoneWords(fixed[n])); } }, 'Проверить себя'), nextBtn()), ans]);
        return;
      }
      var num = n < fixed.length ? fixed[n] : (b.mode === 'age' ? 1 + rnd(99) : randomNumber());
      if (b.mode === 'read') {
        var a = h('div', { class: 'sample', hidden: true }, sr(numToSr(num)));
        append(box, [h('div', { class: 'muted' }, n < fixed.length ? (n + 1) + ' / ' + fixed.length : 'случайное число'), h('div', { class: 'bignum' }, String(num)),
          h('div', { class: 'row' }, h('button', { class: 'ghost', onclick: function () { a.hidden = false; say(numToSr(num)); } }, 'Проверить себя'), nextBtn()), a]);
      } else if (b.mode === 'age') {
        var fb = h('div', { class: 'fb' }), right = godinaForm(num), answered = false;
        var btns = ['godinu', 'godine', 'godina'].map(function (f) {
          return h('button', { class: 'tile', onclick: function (e) {
            if (answered) return; answered = true;
            var full = 'Imam ' + numToSr(num, 'facc') + ' ' + right + '.';
            if (f === right) { score++; e.currentTarget.classList.add('good'); feedback(fb, 'good', full); } else { e.currentTarget.classList.add('bad'); feedback(fb, 'bad', 'Правильно: ' + full); }
            say(full); box.appendChild(nextBtn());
          } }, f);
        });
        append(box, [h('div', { class: 'muted' }, (n + 1) + ' / ' + total), h('div', { class: 'bignum' }, 'Imam ' + num + ' …'), h('div', { class: 'row' }, btns), fb]);
      } else { // listen: hear the number, type digits
        var input = h('input', { type: 'text', inputmode: 'numeric', autocomplete: 'off', placeholder: 'цифрами' }), fb2 = h('div', { class: 'fb' }), locked = false;
        var submit = function () {
          if (locked) { n++; draw(); return; }
          if (input.value.replace(/\D/g, '') === String(num)) { score++; feedback(fb2, 'good', 'Tačno! ' + num + ' — ' + numToSr(num)); } else feedback(fb2, 'bad', 'Было: ' + num + ' — ' + numToSr(num));
          locked = true; go.textContent = 'Дальше →';
        };
        var go = h('button', { onclick: submit }, 'Проверить');
        input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
        append(box, [h('div', { class: 'muted' }, (n + 1) + ' / ' + total), h('button', { class: 'big', onclick: function () { say(numToSr(num)); input.focus(); } }, '🔊 Прослушать'), input, h('div', { class: 'row' }, go), fb2]);
        setTimeout(function () { say(numToSr(num)); }, 300); input.focus();
      }
    }
    draw();
    return box;
  };

  // Flashcards. cards: explicit list (review) or taken from the lesson vocab by set.
  R.flash = function (b, done, lesson, cards) {
    cards = cards || lesson.vocab.filter(function (v) { return !b.set || v.set === b.set; }).map(function (v) { return Object.assign({ key: lesson.n + ':' + v.id }, v); });
    var queue = shuffle(cards), toSr = false, total = queue.length, box = h('div', { class: 'qa' });
    function draw() {
      box.innerHTML = '';
      var dir = h('button', { class: 'ghost small', onclick: function () { toSr = !toSr; draw(); } }, toSr ? 'Режим: рус → серб (вспомнить)' : 'Режим: серб → рус (узнать)');
      if (!queue.length) { append(box, [h('p', { class: 'fb good' }, 'Колода пройдена! Слова попали в «Повторение» и будут возвращаться по расписанию.'), !toSr && h('button', { onclick: function () { toSr = true; queue = shuffle(cards); draw(); } }, 'Теперь в обратную сторону: рус → серб')]); done(); return; }
      var c = queue[0], back = h('div', { class: 'back', hidden: true }, toSr ? sr(c.sr) : c.ru), btns = h('div', { class: 'row', hidden: true });
      function answer(g) { grade(c, g); queue.shift(); if (g === 0) queue.splice(Math.min(3, queue.length), 0, c); draw(); }
      append(btns, [h('button', { class: 'tile bad', onclick: function () { answer(0); } }, 'Не знаю'), h('button', { class: 'tile almost', onclick: function () { answer(1); } }, 'С трудом'), h('button', { class: 'tile good', onclick: function () { answer(2); } }, 'Знаю')]);
      var show = h('button', { onclick: function () { back.hidden = false; btns.hidden = false; show.hidden = true; say(c.sr); } }, 'Показать');
      append(box, [h('div', { class: 'row' }, h('span', { class: 'muted' }, 'Осталось: ' + queue.length + ' из ' + total), dir),
        h('div', { class: 'card' }, h('div', { class: 'front' }, toSr ? c.ru : sr(c.sr)), back), show, btns]);
      if (!toSr) say(c.sr);
    }
    draw();
    return box;
  };

  /* ---------- pages ---------- */
  var app = document.getElementById('app');
  var timer = { id: null, start: 0 };

  function sessionDone(s, part) { var list = part === 'hw' ? s.homework : s.blocks; return list.filter(function (_, i) { return state.done[s.id + '/' + part + '/' + i]; }).length; }

  function pageHome() {
    var list = h('div', { class: 'lessons' });
    COURSE.manifest.forEach(function (m) {
      var L = COURSE.lessons[m.n];
      if (!L) { list.appendChild(h('div', { class: 'lesson off' }, h('h3', null, 'Lekcija ' + m.n), h('span', { class: 'muted' }, 'ещё не перенесён'))); return; }
      list.appendChild(h('div', { class: 'lesson' }, h('h3', null, 'Lekcija ' + L.n + ' · ' + L.title, h('span', { class: 'muted' }, ' — ' + L.ru)),
        h('div', { class: 'sessions' }, L.sessions.map(function (s) {
          var cd = sessionDone(s, 'class'), hd = sessionDone(s, 'hw');
          return h('div', { class: 'session' },
            h('div', null, h('b', null, 'Занятие ' + s.id + ' · '), sr(s.title), h('div', { class: 'muted' }, s.ru)),
            h('div', { class: 'row' },
              h('a', { class: 'btn', href: '#/s/' + s.id + '/class' }, 'Занятие · 60 мин ' + (cd === s.blocks.length ? '✓' : cd + '/' + s.blocks.length)),
              h('a', { class: 'btn ghost', href: '#/s/' + s.id + '/hw' }, 'Домашка · ~' + s.homework.reduce(function (a, x) { return a + (x.est || 0); }, 0) + ' мин ' + (hd === s.homework.length ? '✓' : hd + '/' + s.homework.length))));
        }))));
    });
    var due = dueCards().length;
    append(app, [h('div', { class: 'hero' }, h('h1', null, 'Srpski jezik'), h('p', { class: 'muted' }, 'Занятие — 60 минут вдвоём. Домашка — 25–35 минут, каждый сам. Перед занятием — 5–10 минут повторения карточек.'),
      h('a', { class: 'btn', href: '#/review' }, due ? 'Повторить сегодня: ' + due : 'Повторение: на сегодня всё')), list]);
  }

  function findSession(id) {
    var found = null;
    Object.keys(COURSE.lessons).forEach(function (n) { COURSE.lessons[n].sessions.forEach(function (s) { if (s.id === id) found = { lesson: COURSE.lessons[n], session: s }; }); });
    return found;
  }

  function pageSession(id, part, idx) {
    var f = findSession(id);
    if (!f) { app.appendChild(h('p', null, 'Занятие не найдено.')); return; }
    var s = f.session, blocks = part === 'hw' ? s.homework : s.blocks;
    idx = Math.max(0, Math.min(+idx || 0, blocks.length - 1));
    var b = blocks[idx], key = s.id + '/' + part + '/' + idx, base = '#/s/' + s.id + '/' + part + '/';
    var minutes = function (x) { return part === 'hw' ? x.est : x.min; };

    var side = h('aside', { class: 'outline' },
      h('div', { class: 'tabs' }, h('a', { class: part === 'class' ? 'on' : '', href: '#/s/' + s.id + '/class' }, 'Занятие'), h('a', { class: part === 'hw' ? 'on' : '', href: '#/s/' + s.id + '/hw' }, 'Домашка')),
      h('ol', null, blocks.map(function (x, i) {
        return h('li', { class: (i === idx ? 'cur ' : '') + (state.done[s.id + '/' + part + '/' + i] ? 'done' : '') }, h('a', { href: base + i }, x.title), h('span', { class: 'muted' }, ' ' + minutes(x) + '′'));
      })),
      part === 'class' && h('div', { class: 'goals' }, h('b', null, 'После занятия вы сможете:'), h('ul', null, s.goals.map(function (g) { return h('li', null, g); }))));

    var clock = h('span', { class: 'clock' });
    if (part === 'class') {
      var planned = 0; for (var i = 0; i <= idx; i++) planned += blocks[i].min;
      var tick = function () {
        if (!timer.start) { clock.textContent = ''; return; }
        var el = Math.floor((Date.now() - timer.start) / 1000), m = Math.floor(el / 60);
        clock.textContent = m + ':' + ('0' + el % 60).slice(-2) + ' / план к концу блока ' + planned + ':00';
        clock.className = 'clock' + (m >= planned ? ' late' : '');
      };
      clearInterval(timer.id); timer.id = setInterval(tick, 1000); tick();
    }
    var startBtn = part === 'class' && h('button', { class: 'ghost small', onclick: function () { timer.start = timer.start ? 0 : Date.now(); route(); } }, timer.start ? 'Сбросить таймер' : '▶ Старт таймера');

    var markDone = function () { if (!state.done[key]) { state.done[key] = true; save(); } };
    var body = (R[b.type] || R.text)(b, markDone, f.lesson);
    var main = h('section', { class: 'block' },
      h('div', { class: 'blockhead' }, h('div', { class: 'muted' }, 'Lekcija ' + f.lesson.n + ' · ' + (part === 'hw' ? 'домашка ' : 'занятие ') + s.id + ' · шаг ' + (idx + 1) + ' из ' + blocks.length + ' · ' + minutes(b) + ' мин'), h('div', { class: 'row' }, clock, startBtn)),
      h('h2', null, b.title), b.note && h('p', { class: 'note' }, b.note), body,
      h('div', { class: 'pager' },
        idx > 0 ? h('a', { class: 'btn ghost', href: base + (idx - 1) }, '← Назад') : h('span'),
        idx < blocks.length - 1
          ? h('a', { class: 'btn', href: base + (idx + 1), onclick: function () { if (b.type === 'text' || b.type === 'dialog') markDone(); } }, 'Далее →')
          : h('a', { class: 'btn', href: part === 'class' ? '#/s/' + s.id + '/hw' : '#/', onclick: markDone }, part === 'class' ? 'К домашке →' : 'Готово ✓')));
    app.appendChild(h('div', { class: 'layout' }, side, main));
  }

  function pageReview() {
    var due = dueCards();
    app.appendChild(h('section', { class: 'block narrow' }, h('h2', null, 'Повторение'),
      h('p', { class: 'note' }, 'Сюда попадают слова из пройденных карточек. Интервалы: 1 → 3 → 7 → 14 → 30 дней.'),
      due.length ? R.flash({}, function () {}, null, due) : h('p', null, 'На сегодня повторять нечего. Новые слова появятся после карточек в домашке.')));
  }

  function pageDict() {
    var rows = allCards().map(function (c) { var s = state.srs[c.key]; return h('tr', null, h('td', null, sr(c.sr)), h('td', null, c.ru), h('td', { class: 'muted' }, s ? '▮'.repeat(s.box + 1) : '—')); });
    app.appendChild(h('section', { class: 'block narrow' }, h('h2', null, 'Словарь'), h('table', { class: 'dict' }, h('tbody', null, rows))));
  }

  function route() {
    var p = location.hash.replace(/^#\/?/, '').split('/');
    app.innerHTML = ''; keypad.hidden = true; clearInterval(timer.id);
    if (window.speechSynthesis) speechSynthesis.cancel();
    if (p[0] === 's') pageSession(p[1], p[2] === 'hw' ? 'hw' : 'class', p[3]);
    else if (p[0] === 'review') pageReview();
    else if (p[0] === 'dict') pageDict();
    else pageHome();
    updateBadge(); window.scrollTo(0, 0);
  }

  document.getElementById('cyrBtn').addEventListener('click', function () { state.cyr = !state.cyr; save(); applyScript(); });
  document.getElementById('rateBtn').addEventListener('click', function (e) { state.rate = state.rate === 1 ? 0.75 : 1; save(); e.currentTarget.textContent = state.rate === 1 ? '1×' : '0.75×'; });
  document.getElementById('rateBtn').textContent = state.rate === 1 ? '1×' : '0.75×';
  applyScript();

  /* ---------- boot: load lesson data files listed in the manifest ---------- */
  var files = COURSE.manifest.filter(function (m) { return m.file; }), pending = files.length;
  function ready() { window.addEventListener('hashchange', route); route(); }
  if (!pending) ready();
  files.forEach(function (m) {
    var sc = document.createElement('script');
    sc.src = m.file; sc.onload = sc.onerror = function () { if (--pending === 0) ready(); };
    document.head.appendChild(sc);
  });
})();
