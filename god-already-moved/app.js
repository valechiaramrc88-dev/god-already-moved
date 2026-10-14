/* God Already Moved — app logic. The words live in content.js. */
(function () {
  "use strict";

  var KEY = "god-already-moved-v1";
  var TOTAL = WEEKS.length * 7;
  var view = document.getElementById("view");
  var modal = document.getElementById("modal");
  var modalBody = document.getElementById("modalBody");

  /* ---------- storage (kept in this browser only) ---------- */
  var state = { start: null, done: [], missed: [], drafts: [], bonus: false };
  try {
    var saved = JSON.parse(localStorage.getItem(KEY));
    if (saved && typeof saved === "object") state = Object.assign(state, saved);
  } catch (e) { /* storage unavailable: the app still works for this visit */ }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  }
  function daysBetween(a, b) {
    return Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 86400000);
  }
  function longDate() {
    return new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  }
  function clock() {
    return new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  }
  function actionAt(i) {
    var w = Math.floor(i / 7);
    return { week: w + 1, day: i + 1, text: WEEKS[w].actions[i % 7], data: WEEKS[w] };
  }
  function doneToday() {
    var last = state.done[state.done.length - 1];
    return last && last.date === today() ? last : null;
  }
  function isTurningPoint(entry) {
    return state.missed.some(function (m) {
      var gap = daysBetween(m.date, entry.date);
      return gap >= 1 && gap <= 3;
    });
  }

  /* ---------- modal ---------- */
  function openModal(html) {
    modalBody.innerHTML = html;
    modal.hidden = false;
    modal.querySelector(".sheet").scrollTop = 0;
  }
  function closeModal() { modal.hidden = true; modalBody.innerHTML = ""; }
  document.getElementById("modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* ---------- TODAY ---------- */
  function renderWelcome() {
    document.body.classList.add("hide-tabs");
    view.innerHTML =
      '<section class="welcome">' +
      '<p class="eyebrow">A 12-week Christian devotional</p>' +
      '<img src="assets/cover.jpg" alt="Cover of God Already Moved by Mia Luce">' +
      '<h1>The book is for the night.</h1>' +
      '<p class="script">This is for the morning after.</p>' +
      '<hr class="rule" style="margin-left:auto;margin-right:auto">' +
      '<p>' + esc(SITE.tagline) + '</p>' +
      '<p class="muted small">No account. No points. Miss a day and nothing is lost: the same action waits for you.</p>' +
      '<button class="btn" id="begin" type="button">Begin day 1</button>' +
      '</section>';
    document.getElementById("begin").addEventListener("click", function () {
      state.start = today();
      save();
      document.body.classList.remove("hide-tabs");
      render();
    });
  }

  function renderToday() {
    if (!state.start) return renderWelcome();

    var finished = state.done.length >= TOTAL;
    var done = doneToday();
    var index = done ? state.done.length - 1 : state.done.length;

    if (finished && !done) {
      view.innerHTML =
        '<p class="eyebrow">' + esc(longDate()) + '</p>' +
        '<h1>Twelve weeks.</h1><p class="script">You did it anyway.</p><hr class="rule">' +
        '<p>You have completed ' + TOTAL + ' faithful actions. Nobody is telling you what to do today. Choose one faithful thing yourself.</p>' +
        '<a class="btn ghost" href="#path">Read your journal</a>';
      return;
    }

    var a = actionAt(index);
    var html =
      '<p class="eyebrow">' + esc(longDate()) + '</p>' +
      '<h1>Week ' + a.week + ' · Day ' + a.day + '</h1>' +
      '<p class="muted">' + esc(a.data.theme) + '</p>' +
      '<div class="card verse"><blockquote>&ldquo;' + esc(a.data.verse) + '&rdquo;</blockquote><cite>' + esc(a.data.ref) + '</cite></div>' +
      '<p class="eyebrow" style="margin-top:26px">Your action today</p>' +
      '<p class="action-text">' + esc(a.text) + '</p>';

    if (done) {
      html +=
        '<div class="card" style="text-align:center">' +
        '<p class="script">Done.</p>' +
        '<p>You did one faithful thing today. That counts, even if you felt nothing.</p>' +
        (done.note ? '<p class="muted small">&ldquo;' + esc(done.note) + '&rdquo;</p>' : '') +
        '<p class="muted small" style="margin:0">Tomorrow\'s action will be here in the morning.</p></div>' +
        (done.note ? '' : '<button class="btn ghost" id="tell" type="button">Tell me how it went</button>');
    } else {
      html +=
        '<button class="btn" id="did" type="button">I did this today &#10003;</button>' +
        '<div class="pair">' +
        '<button class="btn ghost" id="couldnt" type="button">I couldn\'t do it today</button>' +
        '<button class="btn ghost" id="tell" type="button">Tell me how it went</button>' +
        '</div>';
    }

    html += '<details class="prayer"><summary>Prayer of the day</summary><p>' + esc(a.data.prayer) + '</p></details>';
    view.innerHTML = html;

    var did = document.getElementById("did");
    if (did) did.addEventListener("click", function () { complete(index, ""); render(); });
    var tell = document.getElementById("tell");
    if (tell) tell.addEventListener("click", function () { openTell(index); });
    var couldnt = document.getElementById("couldnt");
    if (couldnt) couldnt.addEventListener("click", function () { openCouldnt(index); });
  }

  function complete(index, note) {
    var d = doneToday();
    if (d) { if (note) d.note = note; }
    else state.done.push({ i: index, date: today(), note: note || "" });
    save();
  }

  function openTell(index) {
    openModal(
      '<h2 style="margin-top:0">You did one faithful thing today.</h2>' +
      '<p>That counts, even if you felt nothing.</p>' +
      '<p><strong>In one sentence: what exactly did you do?</strong><br><span class="muted">Not how you felt. What you did.</span></p>' +
      '<textarea id="note" rows="3" maxlength="150" aria-label="What you did"></textarea>' +
      '<p class="count"><span id="left">150</span> characters left</p>' +
      '<button class="btn" id="saveNote" type="button">Save to my journal</button>' +
      '<p class="muted small" style="margin-top:12px;text-align:center">Private. It stays on this device.</p>'
    );
    var note = document.getElementById("note");
    note.addEventListener("input", function () { document.getElementById("left").textContent = 150 - note.value.length; });
    note.focus();
    document.getElementById("saveNote").addEventListener("click", function () {
      complete(index, note.value.trim());
      closeModal();
      render();
    });
  }

  function openCouldnt(index) {
    openModal(
      '<p class="script">That\'s okay.</p>' +
      '<p>Elijah sat down under a broom tree and told God he couldn\'t go on. God did not rebuke him. He brought him bread.</p>' +
      '<p>Tomorrow the same action will be waiting for you.<br>Don\'t start over.<br>Continue from here.</p>' +
      '<label for="what" class="muted small">Do you want to tell me what happened today? (optional)</label>' +
      '<textarea id="what" rows="3"></textarea>' +
      '<button class="btn" id="seeYou" type="button">Close — see you tomorrow</button>'
    );
    document.getElementById("seeYou").addEventListener("click", function () {
      var t = today();
      var text = document.getElementById("what").value.trim();
      var existing = state.missed.filter(function (m) { return m.date === t; })[0];
      if (existing) { if (text) existing.note = text; }
      else state.missed.push({ i: index, date: t, note: text });
      save();
      closeModal();
    });
  }

  /* ---------- MY PATH ---------- */
  function renderPath() {
    var n = state.done.length;
    var html = '<p class="eyebrow">My Path</p><h1>Your path</h1><hr class="rule">';

    WEEKS.forEach(function (w, k) {
      var c = Math.max(0, Math.min(7, n - k * 7));
      var here = c < 7 && n >= k * 7 && n < (k + 1) * 7;
      var label = c === 7 ? "completed ✓" : here ? c + "/7 · you are here" : c > 0 ? c + "/7 days" : "not yet";
      var bar = "";
      for (var j = 0; j < 7; j++) bar += '<i class="' + (j < c ? "on" : "") + '"></i>';
      html += '<div class="week' + (here ? " here" : "") + '"><span>Week ' + (k + 1) + '</span><span class="bar">' + bar + '</span><span class="state">' + label + '</span></div>';
    });

    html += '<h2>Your faithful actions</h2>' +
      '<p class="count-line">You have completed <b>' + n + '</b> faithful action' + (n === 1 ? "" : "s") + '.</p>';

    var turns = state.done.filter(isTurningPoint);
    if (turns.length) {
      html += '<h2>Turning points</h2>';
      turns.forEach(function (d) {
        html += '<p class="turn">Day ' + (d.i + 1) + ' — You came back. This is the courage nobody sees.</p>';
      });
    }

    var entries = state.done.filter(function (d) { return d.note; }).map(function (d) {
      return { date: d.date, day: d.i + 1, note: d.note, missed: false };
    }).concat(state.missed.filter(function (m) { return m.note; }).map(function (m) {
      return { date: m.date, day: m.i + 1, note: m.note, missed: true };
    })).sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });

    html += '<h2>Your journal</h2>';
    if (!entries.length) {
      html += '<p class="muted">Whatever you write in &ldquo;Tell me how it went&rdquo; will be kept here, in order.</p>';
    } else {
      entries.forEach(function (e) {
        html += '<div class="entry' + (e.missed ? " missed" : "") + '"><div class="day">Day ' + e.day + (e.missed ? " · couldn't today" : "") + '</div>&ldquo;' + esc(e.note) + '&rdquo;</div>';
      });
    }
    view.innerHTML = html;
  }

  /* ---------- TOOLKIT ---------- */
  function renderToolkit() {
    var html = '<p class="eyebrow">Toolkit</p><h1>What the book can\'t hold</h1><hr class="rule">';

    html += '<button class="row night-card" data-open="night" type="button"><span>Emergency Letter<small class="muted">Is it a hard night? Get tonight\'s letter.</small></span><span class="tag" style="color:#e9c9b9">Open</span></button>';

    html += '<h2>Printable templates</h2>';
    TEMPLATES.forEach(function (t, k) {
      html += '<button class="row" data-template="' + k + '" type="button"><span>' + esc(t.title) + '<small>' + esc(t.where) + ' · ' + esc(t.columns.slice(0, 3).join(" / ")) + '</small></span><span class="tag">Print / PDF</span></button>';
    });

    html += '<h2>Scripts for hard conversations</h2><p class="muted small">Don\'t know what to say? Here is a place to start.</p>';
    SCRIPTS.forEach(function (s, k) {
      html += '<button class="row" data-script="' + k + '" type="button"><span>' + esc(s.title) + '</span><span class="tag">Read</span></button>';
    });

    html += '<h2>Bonus</h2>';
    html += '<button class="row bonus-card" data-open="bonus" type="button"><span>' + esc(BONUS.name) + '<small>' + (state.bonus ? "Unlocked. Thank you." : esc(BONUS.pitch)) + '</small></span><span class="tag">' + (state.bonus ? "Open" : "Locked") + '</span></button>';

    view.innerHTML = html;
  }

  view.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.open === "night") openNight();
    else if (b.dataset.open === "bonus") openBonus();
    else if (b.dataset.template) printTemplate(TEMPLATES[+b.dataset.template]);
    else if (b.dataset.script) openScript(SCRIPTS[+b.dataset.script]);
  });

  function openScript(s) {
    openModal('<h2 style="margin-top:0">' + esc(s.title) + '</h2>' +
      s.lines.map(function (l) { return '<p class="script-line">' + esc(l) + '</p>'; }).join("") +
      '<p class="muted small">Change the words until they sound like you.</p>');
  }

  function crisis() {
    return '<p class="crisis">' + esc(SITE.crisisText) + ' <a href="' + esc(SITE.crisisUrl) + '" target="_blank" rel="noopener">' + esc(SITE.crisisLinkLabel) + '</a>. In the US, call or text 988.</p>';
  }

  function openNight() {
    openModal(
      '<p class="eyebrow">Emergency Letter</p><h2 style="margin-top:0">Is it a hard night?</h2>' +
      '<p>Tell me what is happening right now:</p>' +
      '<div class="options">' + LETTERS.map(function (l, k) {
        return '<label><input type="radio" name="st" value="' + k + '"><span>' + esc(l.state) + '</span></label>';
      }).join("") + '</div>' +
      '<button class="btn" id="give" type="button">Give me tonight\'s letter</button>' + crisis()
    );
    document.getElementById("give").addEventListener("click", function () {
      var picked = modalBody.querySelector("input[name=st]:checked");
      if (picked) openLetter(LETTERS[+picked.value]);
    });
  }

  function openLetter(l) {
    var html = '<div class="letter">' + l.body.map(function (p) {
      return '<p>' + esc(p.replace("{time}", clock())) + '</p>';
    }).join("");
    if (l.draft) {
      html += '<textarea id="unsent" rows="6" aria-label="The message you will not send"></textarea>' +
        '<p class="muted small" style="margin-top:-6px">Private. Kept on this device only. It cannot be sent or shared from here.</p>';
    }
    html += '<p><em>' + esc(l.closing) + '</em></p></div>' +
      '<button class="btn" id="closeLetter" type="button">Close</button>' + crisis();
    openModal(html);
    document.getElementById("closeLetter").addEventListener("click", function () {
      var u = document.getElementById("unsent");
      if (u && u.value.trim()) { state.drafts.push({ date: today(), text: u.value.trim() }); save(); }
      closeModal();
    });
  }

  function openBonus() {
    if (!state.bonus) {
      openModal(
        '<p class="eyebrow">Bonus</p><h2 style="margin-top:0">' + esc(BONUS.name) + '</h2>' +
        '<p>' + esc(BONUS.pitch) + '</p>' +
        '<p class="muted small">Inside: three letters for Day 85, ' + esc(BONUS.prayerTitle) + ', twelve printable verse cards, and a script for when he texts first.</p>' +
        '<p>If the book has helped you, would you leave an honest review? Any rating. It helps another woman find it on her own hard night.</p>' +
        '<a class="btn gold" href="' + esc(SITE.reviewUrl) + '" target="_blank" rel="noopener">Leave a review</a>' +
        '<div style="height:10px"></div>' +
        '<button class="btn ghost" id="unlock" type="button">I left my review</button>'
      );
      document.getElementById("unlock").addEventListener("click", function () {
        state.bonus = true; save(); render(); openBonus();
      });
      return;
    }
    openModal(
      '<p class="eyebrow">Bonus</p><h2 style="margin-top:0">' + esc(BONUS.name) + '</h2>' +
      '<p class="script">Thank you.</p>' +
      '<h3 style="margin-top:22px">' + esc(BONUS.prayerTitle) + '</h3>' +
      BONUS.prayer.map(function (p) { return '<p><em>' + esc(p) + '</em></p>'; }).join("") +
      '<h3 style="margin-top:26px">Letters to read on Day 85</h3>' +
      BONUS.letters.map(function (l) { return '<div class="card"><h3>' + esc(l.title) + '</h3><p style="margin:0">' + esc(l.text) + '</p></div>'; }).join("") +
      '<h3 style="margin-top:26px">' + esc(BONUS.script.title) + '</h3>' +
      BONUS.script.lines.map(function (l) { return '<p class="script-line">' + esc(l) + '</p>'; }).join("") +
      '<div style="height:10px"></div>' +
      '<button class="btn ghost" id="cards" type="button">Print the 12 verse cards</button>'
    );
    document.getElementById("cards").addEventListener("click", printCards);
  }

  /* ---------- printing ---------- */
  function printHtml(html) {
    document.getElementById("printArea").innerHTML = html;
    window.print();
  }
  function printTemplate(t) {
    var rows = "";
    for (var r = 0; r < t.rows; r++) {
      rows += "<tr>" + t.columns.map(function (c, k) {
        return "<td>" + (t.numbered && k === 0 ? r + 1 : "") + "</td>";
      }).join("") + "</tr>";
    }
    printHtml('<div class="sheet-print"><p class="eyebrow">' + esc(SITE.title) + ' · ' + esc(t.where) + '</p><h1>' + esc(t.title) + '</h1>' +
      '<table><thead><tr>' + t.columns.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + '</tr></thead><tbody>' + rows + '</tbody></table></div>');
  }
  function printCards() {
    printHtml('<div class="sheet-print"><p class="eyebrow">' + esc(SITE.title) + '</p><h1>Verse cards</h1><div class="cards-print">' +
      WEEKS.map(function (w, k) { return '<div>&ldquo;' + esc(w.verse) + '&rdquo;<span>' + esc(w.ref) + ' · Week ' + (k + 1) + '</span></div>'; }).join("") +
      '</div></div>');
  }

  /* ---------- routing ---------- */
  function render() {
    var tab = (location.hash || "#today").slice(1);
    if (["today", "path", "toolkit"].indexOf(tab) < 0) tab = "today";
    if (!state.start) tab = "today";
    document.body.classList.toggle("hide-tabs", !state.start);
    document.querySelectorAll(".tabs a").forEach(function (a) { a.classList.toggle("on", a.dataset.tab === tab); });
    if (tab === "path") renderPath();
    else if (tab === "toolkit") renderToolkit();
    else renderToday();
    window.scrollTo(0, 0);
  }

  document.getElementById("nightBtn").addEventListener("click", openNight);
  window.addEventListener("hashchange", render);
  render();
})();
