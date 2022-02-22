function vs(e, a, s, t) {
  return new(s || (s = Promise))((function(n, o) {
    function r(e) {
      try {
        l(t.next(e))
      } catch (e) {
        o(e)
      }
    }

    function i(e) {
      try {
        l(t.throw(e))
      } catch (e) {
        o(e)
      }
    }

    function l(e) {
      var a;
      e.done ? n(e.value) : (a = e.value, a instanceof s ? a : new s((function(e) {
        e(a)
      }))).then(r, i)
    }
    l((t = t.apply(e, a || [])).next())
  }))
}

function ws(e, a) {
  var s, t, n, o, r = {
    label: 0,
    sent: function() {
      if (1 & n[0]) throw n[1];
      return n[1]
    },
    trys: [],
    ops: []
  };
  return o = {
    next: i(0),
    throw: i(1),
    return: i(2)
  }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
    return this
  }), o;

  function i(o) {
    return function(i) {
      return function(o) {
        if (s) throw new TypeError("Generator is already executing.");
        for (; r;) try {
          if (s = 1, t && (n = 2 & o[0] ? t.return : o[0] ? t.throw || ((n = t.return) && n.call(t), 0) : t.next) && !(n = n.call(t, o[1])).done) return n;
          switch (t = 0, n && (o = [2 & o[0], n.value]), o[0]) {
            case 0:
            case 1:
              n = o;
              break;
            case 4:
              return r.label++, {
                value: o[1],
                done: !1
              };
            case 5:
              r.label++, t = o[1], o = [0];
              continue;
            case 7:
              o = r.ops.pop(), r.trys.pop();
              continue;
            default:
              if (!((n = (n = r.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                r = 0;
                continue
              }
              if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                r.label = o[1];
                break
              }
              if (6 === o[0] && r.label < n[1]) {
                r.label = n[1], n = o;
                break
              }
              if (n && r.label < n[2]) {
                r.label = n[2], r.ops.push(o);
                break
              }
              n[2] && r.ops.pop(), r.trys.pop();
              continue
          }
          o = a.call(e, r)
        } catch (e) {
          o = [6, e], t = 0
        } finally {
          s = n = 0
        }
        if (5 & o[0]) throw o[1];
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        }
      }([o, i])
    }
  }
}
customElements.define("game-keyboard", ks),
  function() {
    (console.warn || console.log).apply(console, arguments)
  }.bind("[clipboard-polyfill]");
var xs, zs, js, Ss, Cs = "undefined" == typeof navigator ? void 0 : navigator,
  Es = null == Cs ? void 0 : Cs.clipboard;
null === (xs = null == Es ? void 0 : Es.read) || void 0 === xs || xs.bind(Es), null === (zs = null == Es ? void 0 : Es.readText) || void 0 === zs || zs.bind(Es);
var _s = (null === (js = null == Es ? void 0 : Es.write) || void 0 === js || js.bind(Es), null === (Ss = null == Es ? void 0 : Es.writeText) || void 0 === Ss ? void 0 : Ss.bind(Es)),
  qs = "undefined" == typeof window ? void 0 : window,
  Ls = (null == qs || qs.ClipboardItem, qs);
var Ts = function() {
  this.success = !1
};

function As(e, a, s) {
  for (var t in e.success = !0, a) {
    var n = a[t],
      o = s.clipboardData;
    o.setData(t, n), "text/plain" === t && o.getData(t) !== n && (e.success = !1)
  }
  s.preventDefault()
}

function Is(e) {
  var a = new Ts,
    s = As.bind(this, a, e);
  document.addEventListener("copy", s);
  try {
    document.execCommand("copy")
  } finally {
    document.removeEventListener("copy", s)
  }
  return a.success
}

function Ms(e, a) {
  Os(e);
  var s = Is(a);
  return Rs(), s
}

function Os(e) {
  var a = document.getSelection();
  if (a) {
    var s = document.createRange();
    s.selectNodeContents(e), a.removeAllRanges(), a.addRange(s)
  }
}

function Rs() {
  var e = document.getSelection();
  e && e.removeAllRanges()
}

function Hs(e) {
  return vs(this, void 0, void 0, (function() {
    var a;
    return ws(this, (function(s) {
      if (a = "text/plain" in e, "undefined" == typeof ClipboardEvent && void 0 !== Ls.clipboardData && void 0 !== Ls.clipboardData.setData) {
        if (!a) throw new Error("No `text/plain` value was specified.");
        if (t = e["text/plain"], Ls.clipboardData.setData("Text", t)) return [2, !0];
        throw new Error("Copying failed, possibly because the user rejected it.")
      }
      var t;
      return Is(e) || navigator.userAgent.indexOf("Edge") > -1 || Ms(document.body, e) || function(e) {
        var a = document.createElement("div");
        a.setAttribute("style", "-webkit-user-select: text !important"), a.textContent = "temporary element", document.body.appendChild(a);
        var s = Ms(a, e);
        return document.body.removeChild(a), s
      }(e) || function(e) {
        var a = document.createElement("div");
        a.setAttribute("style", "-webkit-user-select: text !important");
        var s = a;
        a.attachShadow && (s = a.attachShadow({
          mode: "open"
        }));
        var t = document.createElement("span");
        t.innerText = e, s.appendChild(t), document.body.appendChild(a), Os(t);
        var n = document.execCommand("copy");
        return Rs(), document.body.removeChild(a), n
      }(e["text/plain"]) ? [2, !0] : [2, !1]
    }))
  }))
}

function Ns(e, a, s) {
  try {
    Sa() && !(navigator.userAgent.toLowerCase().indexOf("firefox") > -1) && void 0 !== navigator.share && navigator.canShare && navigator.canShare(e) ? navigator.share(e) : function(e) {
      return vs(this, void 0, void 0, (function() {
        return ws(this, (function(a) {
          if (_s) return [2, _s(e)];
          if (!Hs(function(e) {
              var a = {};
              return a["text/plain"] = e, a
            }(e))) throw new Error("writeText() failed");
          return [2]
        }))
      }))
    }(e.text).then(a, s)
  } catch (e) {
    s()
  }
}
var Ps = document.createElement("template");
Ps.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 20px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statistics</h1>\n    <div id="statistics"></div>\n    <h1>Guess Distribution</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
var $s = document.createElement("template");
$s.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
var Ds = document.createElement("template");
Ds.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
var Bs = document.createElement("template");
Bs.innerHTML = '\n  <div class="countdown">\n    <h1>Next WORDLE</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Share <game-icon icon="share"></game-icon>\n    </button>\n  </div>\n';
var Gs = {
    currentStreak: "Current Streak",
    maxStreak: "Max Streak",
    winPercentage: "Win %",
    gamesPlayed: "Played",
    gamesWon: "Won",
    averageGuesses: "Av. Guesses"
  },
  Vs = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), o(m(e = a.call(this)), "stats", {}), o(m(e), "gameApp", void 0), e.attachShadow({
        mode: "open"
      }), e.stats = Xa(), e
    }
    return n(t, [{
      key: "connectedCallback",
      value: function() {
        var e = this;
        this.shadowRoot.appendChild(Ps.content.cloneNode(!0));
        var a = this.shadowRoot.getElementById("statistics"),
          s = this.shadowRoot.getElementById("guess-distribution"),
          t = Math.max.apply(Math, g(Object.values(this.stats.guesses)));
        if (Object.values(this.stats.guesses).every((function(e) {
            return 0 === e
          }))) {
          var n = document.createElement("div");
          n.classList.add("no-data"), n.innerText = "No Data", s.appendChild(n)
        } else
          for (var o = 1; o < Object.keys(this.stats.guesses).length; o++) {
            var r = o,
              i = this.stats.guesses[o],
              l = Ds.content.cloneNode(!0),
              d = Math.max(7, Math.round(i / t * 100));
            l.querySelector(".guess").textContent = r;
            var c = l.querySelector(".graph-bar");
            if (c.style.width = "".concat(d, "%"), "number" == typeof i) {
              l.querySelector(".num-guesses").textContent = i, i > 0 && c.classList.add("align-right");
              var u = parseInt(this.getAttribute("highlight-guess"), 10);
              u && o === u && c.classList.add("highlight")
            }
            s.appendChild(l)
          }
        if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach((function(s) {
            var t = Gs[s],
              n = e.stats[s],
              o = $s.content.cloneNode(!0);
            o.querySelector(".label").textContent = t, o.querySelector(".statistic").textContent = n, a.appendChild(o)
          })), this.gameApp.gameStatus !== ls) {
          var m = this.shadowRoot.querySelector(".footer"),
            p = Bs.content.cloneNode(!0);
          m.appendChild(p), this.shadowRoot.querySelector("button#share-button").addEventListener("click", (function(a) {
            a.preventDefault(), a.stopPropagation();
            Ns(function(e) {
              var a = e.evaluations,
                s = e.dayOffset,
                t = e.rowIndex,
                n = e.isHardMode,
                o = e.isWin,
                r = JSON.parse(window.localStorage.getItem(j)),
                i = JSON.parse(window.localStorage.getItem(S)),
                l = "Wordle ".concat(s);
              l += " ".concat(o ? t : "X", "/").concat(6), n && (l += "*");
              var d = "";
              return a.forEach((function(e) {
                e && (e.forEach((function(e) {
                  if (e) {
                    var a = "";
                    switch (e) {
                      case Ha:
                        a = function(e) {
                          return e ? "🟧" : "🟩"
                        }(i);
                        break;
                      case Ra:
                        a = function(e) {
                          return e ? "🟦" : "🟨"
                        }(i);
                        break;
                      case Na:
                        a = function(e) {
                          return e ? "⬛" : "⬜"
                        }(r)
                    }
                    d += a
                  }
                })), d += "\n")
              })), {
                text: "".concat(l, "\n\n").concat(d.trimEnd())
              }
            }({
              evaluations: e.gameApp.evaluations,
              dayOffset: e.gameApp.dayOffset,
              rowIndex: e.gameApp.rowIndex,
              isHardMode: e.gameApp.hardMode,
              isWin: e.gameApp.gameStatus === ds
            }), (function() {
              e.gameApp.addToast("Copied results to clipboard", 2e3, !0)
            }), (function() {
              e.gameApp.addToast("Share failed", 2e3, !0)
            }))
          }))
        }
      }
    }]), t
  }(u(HTMLElement));
customElements.define("game-stats", Vs);
var Fs = document.createElement("template"),
  Ws = [{
    id: "spelling-bee",
    name: "Spelling Bee",
    url: "/puzzles/spelling-bee",
    backgroundImage: "var(--spelling-bee)"
  }, {
    id: "crossword",
    name: "The Crossword",
    url: "/crosswords/game/daily",
    backgroundImage: "var(--daily)"
  }, {
    id: "mini",
    name: "The Mini",
    url: "/crosswords/game/mini",
    backgroundImage: "var(--mini)"
  }, {
    id: "tiles",
    name: "Tiles",
    url: "/puzzles/tiles",
    backgroundImage: "var(--tiles)"
  }, {
    id: "sudoku",
    name: "Sudoku",
    url: "/puzzles/sudoku",
    backgroundImage: "var(--sudoku)"
  }, {
    id: "vertex",
    name: "Vertex",
    url: "/puzzles/vertex",
    backgroundImage: "var(--vertex)"
  }, {
    id: "letter-boxed",
    name: "Letter Boxed",
    url: "/puzzles/letter-boxed",
    backgroundImage: "var(--letter-boxed)"
  }, {
    id: "all-games",
    name: "All Games",
    url: "/puzzles"
  }].map((function(e) {
    return "\n    <a href=".concat(e.url, " id=").concat(e.id, '>\n      <div class="nav-item" style="--hover-color: var(--color-nav-hover)">\n        <span style="background-image: ').concat(e.backgroundImage, '; background-size: 20px;"class="nav-icon"></span>\n          ').concat(e.name, " \n      </div>\n    </a>\n    ")
  })).join("");
Fs.innerHTML = "\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: left;\n      justify-content: center;\n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    .nav-container {\n      flex: 1;\n    }\n\n    .nav-container .nav {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .nav-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    .nav-list {\n        list-style: none;\n        color: var(--color-tone-1);\n        padding: unset;\n        margin: unset;\n    }\n\n    .nav-item {\n        display: flex;\n        justify-content: left;\n        align-items: center;\n        height: 40px;\n        font-weight: 500;\n        font-family: 'nyt-franklin';\n        font-size: 16px;\n        line-height: 16px;\n        padding-left: 18px;\n    }\n\n    .nav-item:hover {\n        background-color: var(--hover-color);\n    }\n\n    .nav-icon {\n        padding-bottom: 2px;\n        content: '';\n        height: 20px;\n        width: 28px;\n        padding-right: 8px;\n        display: inline-block;\n        vertical-align: middle;\n        background-repeat: no-repeat;\n    }\n\n    #nav {\n      padding-bottom: 10px;\n    }\n\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    .more-text {\n        font-family: 'nyt-franklin-700';\n        font-weight: 700;\n        text-transform: uppercase;\n        font-size: 12px;\n        line-height: 12px;\n        margin: 32px 0px 24px 0px;\n        padding-left: 18px;\n    }\n\n    .nav-header {\n        padding-top: 18px;\n        padding-left: 18px;\n    }\n\n    .privacy {\n      letter-spacing: .5px;\n      font-family: 'nyt-franklin';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: 0px 25px 0px 17px;\n      padding: 12px 0px;\n      border-top: 1px solid #DCDCDC;\n      color: var(--color-tone-1);\n      font-size: 15px;\n      text-align: right;\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-end;\n    }\n  </style>\n\n  <div class=\"container\">\n    <span class=\"nav-header\">\n        <nyt-icon></nyt-icon>\n    </span>\n    <span class=\"more-text\">More New York Times Games</span>\n    <div class=\"nav-list\">".concat(Ws, '</div>\n    <div class="privacy">\n      <a href="https://www.nytimes.com/privacy/privacy-policy" onmouseover="this.style.textDecoration=\'underline\';" \n      onmouseout="this.style.textDecoration=\'none\';">\n        Privacy Policy\n      </a>\n    </div>\n  </div>\n');
var Ys = function(e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), o(m(e = a.call(this)), "gameApp", void 0), e.attachShadow({
      mode: "open"
    }), e
  }
  return n(t, [{
    key: "connectedCallback",
    value: function() {
      this.shadowRoot.appendChild(Fs.content.cloneNode(!0))
    }
  }]), t
}(u(HTMLElement));
customElements.define("game-nav", Ys);
var Us = document.createElement("template");
Us.innerHTML = "\n  <style>\n    .overlay-nav {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      z-index: ".concat(3e3, ';\n      background-color: transparent;\n      justify-content: left;\n      align-items: unset;\n    }\n\n    :host([open]) .overlay-nav {\n      display: flex;\n    }\n\n    .content-nav {\n      position: relative;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      overflow-y: auto;\n      animation: SlideRight 200ms;\n      max-width: var(--game-max-width);\n      box-sizing: border-box;\n      width: 100%;\n      border-radius: 0px;\n      box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.15);\n      max-height: calc(100% - var(--header-height) - 1px);\n      margin-top: calc(var(--header-height) + 1px);\n      padding: 0px;\n    }\n\n    @media (min-width: 415px) {\n      .content-nav {\n        width: 375px;\n      }\n    }\n\n    .content-nav.closing-nav {\n      animation: SlideLeft 200ms;\n    }\n\n    .close-icon-nav {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideRight {\n      0% {\n        transform: translateX(-100px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateX(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideLeft {\n      0% {\n        transform: translateX(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateX(-200px);\n      }\n    }\n  </style>\n  <div class="overlay-nav">\n    <div class="content-nav">\n      <slot></slot>\n      <div class="close-icon-nav">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
var Js = function(e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), (e = a.call(this)).attachShadow({
      mode: "open"
    }), e
  }
  return n(t, [{
    key: "connectedCallback",
    value: function() {
      var e = this;
      this.shadowRoot.appendChild(Us.content.cloneNode(!0)), this.addEventListener("click", (function(a) {
        e.shadowRoot.querySelector(".content-nav").classList.add("closing-nav")
      })), this.shadowRoot.addEventListener("animationend", (function(a) {
        "SlideLeft" === a.animationName && (e.shadowRoot.querySelector(".content-nav").classList.remove("closing-nav"), e.removeChild(e.firstChild), e.removeAttribute("open"))
      }))
    }
  }]), t
}(u(HTMLElement));
customElements.define("game-nav-modal", Js);
var Xs = document.createElement("template");
Xs.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
var Zs = function(e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), (e = a.call(this)).attachShadow({
      mode: "open"
    }), e
  }
  return n(t, [{
    key: "connectedCallback",
    value: function() {
      var e = this;
      this.shadowRoot.appendChild(Xs.content.cloneNode(!0)), this.shadowRoot.querySelector(".container").addEventListener("click", (function(a) {
        a.stopPropagation(), e.hasAttribute("checked") ? e.removeAttribute("checked") : e.setAttribute("checked", ""), e.dispatchEvent(new CustomEvent("game-switch-change", {
          bubbles: !0,
          composed: !0,
          detail: {
            name: e.getAttribute("name"),
            checked: e.hasAttribute("checked"),
            disabled: e.hasAttribute("disabled")
          }
        }))
      }))
    }
  }], [{
    key: "observedAttributes",
    get: function() {
      return ["checked"]
    }
  }]), t
}(u(HTMLElement));
customElements.define("game-switch", Zs);
var Ks = document.createElement("template");
Ks.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Guess the <strong>WORDLE</strong> in six tries.</p>\n      <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>\n      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>\n      <div class="examples">\n        <p><strong>Examples</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="w" evaluation="correct" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="y"></game-tile>\n          </div>\n          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="p"></game-tile>\n            <game-tile letter="i" evaluation="present" reveal></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="s"></game-tile>\n          </div>\n          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="g"></game-tile>\n            <game-tile letter="u" evaluation="absent" reveal></game-tile>\n            <game-tile letter="e"></game-tile>\n          </div>\n          <p>The letter <strong>U</strong> is not in the word in any spot.</p>\n        </div>\n      </div>\n      <p><strong>A new WORDLE will be available each day!<strong></p>\n    </div>\n  </section>\n';
var Qs = function(e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), (e = a.call(this)).attachShadow({
      mode: "open"
    }), e
  }
  return n(t, [{
    key: "connectedCallback",
    value: function() {
      this.shadowRoot.appendChild(Ks.content.cloneNode(!0))
    }
  }]), t
}(u(HTMLElement));
customElements.define("game-help", Qs);
var et = document.createElement("template");
et.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2e3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
var at = function(e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), (e = a.call(this)).attachShadow({
      mode: "open"
    }), e
  }
  return n(t, [{
    key: "connectedCallback",
    value: function() {
      var e = this;
      this.shadowRoot.appendChild(et.content.cloneNode(!0)), this.shadowRoot.querySelector("game-icon").addEventListener("click", (function(a) {
        e.shadowRoot.querySelector(".overlay").classList.add("closing")
      })), this.shadowRoot.addEventListener("animationend", (function(a) {
        "SlideOut" === a.animationName && (e.shadowRoot.querySelector(".overlay").classList.remove("closing"), Array.from(e.childNodes).forEach((function(a) {
          e.removeChild(a)
        })), e.removeAttribute("open"))
      }))
    }
  }]), t
}(u(HTMLElement));
customElements.define("game-page", at);
var st = document.createElement("template");
st.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-1) />\n  </svg>\n';
var tt = {
    help: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
    settings: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
    backspace: "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
    close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    share: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
    statistics: "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
  },
  nt = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      return s(this, t), (e = a.call(this)).attachShadow({
        mode: "open"
      }), e
    }
    return n(t, [{
      key: "connectedCallback",
      value: function() {
        this.shadowRoot.appendChild(st.content.cloneNode(!0));
        var e = this.getAttribute("icon");
        this.shadowRoot.querySelector("path").setAttribute("d", tt[e]), "backspace" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)"), "share" === e && this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)")
      }
    }]), t
  }(u(HTMLElement));
customElements.define("game-icon", nt);
var ot = document.createElement("template");
ot.innerHTML = '\n  <a href="https://www.nytimes.com/crosswords">\n  <svg\n    className="pz-nav__logo"\n    width="95"\n    height="18"\n    viewBox="0 0 138 25"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n    aria-label="New York Times Games Logo. Click for more puzzles"\n  >\n    <rect width="138" height="25" fill="none" />\n    <path\n      d="M42.4599 1.03519C44.219 1.00558 45.9577 1.41634 47.5176 2.23008V1.45245H53.4162V8.80515H47.5239C47.1067 7.03494 46.3607 6.2257 44.5904 6.2257C42.365 6.23834 41.0058 7.86947 41.0058 12.4151C41.0058 17.3148 42.2386 18.8827 45.0077 18.8827C45.7187 18.8975 46.4203 18.7183 47.0371 18.3643V16.2211H45.2037V11.9283H53.4225V24.0543H48.3648V22.9289C46.902 24.0012 45.1195 24.5471 43.307 24.4778C36.9216 24.4778 32.4392 20.2546 32.4392 12.4214C32.4708 5.2584 36.9849 1.03519 42.4599 1.03519Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M59.8645 24.3471C56.3494 24.3471 54.2883 22.4505 54.2883 19.2198C54.2883 15.9892 56.7097 13.9345 60.541 13.9345C61.9923 13.9222 63.4232 14.2767 64.701 14.965C64.6377 13.2264 63.3164 12.0947 60.8634 12.0947C59.0925 12.1015 57.3477 12.5215 55.7677 13.3212V9.25608C58.149 8.58084 60.6136 8.24457 63.0888 8.25718C69.7966 8.25718 72.0853 11.1907 72.0853 13.7701V19.8647H73.4382V24.0563H64.7705V22.5074C63.544 23.8603 61.7359 24.3471 59.8645 24.3471ZM64.859 18.8658C64.888 18.6431 64.8655 18.4166 64.7931 18.204C64.7207 17.9914 64.6005 17.7982 64.4417 17.6394C64.2829 17.4805 64.0897 17.3603 63.877 17.288C63.6644 17.2156 63.438 17.193 63.2153 17.222C62.1215 17.222 61.3755 17.7721 61.3755 18.8974C61.3755 20.0228 62.0077 20.478 63.1836 20.478C64.3596 20.478 64.8653 19.9911 64.8653 18.8848L64.859 18.8658Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M75.8371 19.8644V12.7709H74.5726V8.57927H83.1455V10.2546C85.1433 8.73732 86.2055 8.25684 87.786 8.25684C89.7206 8.25684 90.8839 8.80687 92.3949 10.3874C94.3611 8.83848 95.7456 8.25684 97.4526 8.25684C100.614 8.25684 102.801 10.419 102.801 13.2197V19.858H104.066V24.0496H95.5054V14.6739C95.5054 13.4473 95.0249 12.7772 94.1841 12.7772C93.3432 12.7772 92.9576 13.4094 92.9576 14.6739V19.8644H94.0513V24.056H85.6681V14.6106C85.6681 13.5169 85.1497 12.7709 84.4036 12.7709C83.6576 12.7709 83.1392 13.479 83.1392 14.6106V19.8644H84.2646V24.056H74.5474V19.8644H75.8371Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M113.781 24.3784C111.46 24.3784 108.881 23.8979 107.073 22.2858C106.216 21.5344 105.534 20.6058 105.072 19.5643C104.61 18.5229 104.38 17.3935 104.398 16.2544C104.398 11.1967 108.432 8.25684 113.25 8.25684C118.453 8.25684 121.924 11.93 121.924 16.3555C121.924 16.874 121.892 17.3545 121.86 17.8729H111.745C111.941 19.681 112.908 20.4839 114.387 20.4839C114.871 20.4803 115.347 20.3544 115.769 20.1178C116.191 19.8813 116.547 19.5418 116.803 19.131H121.86C120.773 22.6777 117.498 24.3784 113.781 24.3784ZM111.688 15.5273H115.481V15.1417C115.481 13.8204 115.159 12.4674 113.585 12.4674C113.201 12.4558 112.824 12.5691 112.51 12.7903C112.197 13.0115 111.964 13.3286 111.846 13.6939C111.68 14.2856 111.624 14.9028 111.682 15.5147L111.688 15.5273Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M126.195 24.059H122.712V18.8875H126.164C126.581 20.2404 127.131 20.9485 128.452 20.9485C129.451 20.9485 130.064 20.5313 130.064 19.7536C130.064 19.2036 129.71 18.7863 129.034 18.4892L125.683 17.073C124.909 16.7631 124.246 16.2281 123.779 15.5371C123.313 14.8462 123.064 14.0312 123.066 13.1975C123.066 10.5549 125.677 8.23462 128.964 8.23462C130.352 8.25084 131.718 8.58156 132.96 9.20191V8.5697H136.469V13.4062H133.244C132.954 11.9584 132.372 11.244 131.215 11.244C130.374 11.244 129.729 11.6612 129.729 12.3377C129.729 12.9194 130.115 13.3998 130.924 13.7223L134.212 14.9867C136.374 15.8276 137.373 17.2121 137.373 19.0835C137.373 22.0486 134.844 24.3372 131.215 24.3372C129.603 24.3372 128.477 24.078 126.157 23.2435L126.195 24.059Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M25.9544 1.46704H25.3601V24.0372H25.9544V1.46704Z"\n      fill=var(--color-tone-1)\n    />\n    <path\n      d="M19.2574 15.4535C18.8889 16.497 18.3042 17.4509 17.5416 18.2527C16.7789 19.0546 15.8555 19.6863 14.8318 20.1066V15.4535L17.3607 13.1586L14.8318 10.8952V7.69619C15.8763 7.67489 16.8715 7.24792 17.6067 6.50567C18.3419 5.76342 18.7593 4.76418 18.7706 3.71953C18.7706 0.975708 16.1532 0.00209168 14.6675 0.00209168C14.2653 -0.0102783 13.8633 0.0322617 13.4726 0.128535V0.261301C13.6686 0.261301 13.9594 0.22969 14.0542 0.22969C15.0847 0.22969 15.8624 0.716498 15.8624 1.65218C15.8562 1.85411 15.809 2.05266 15.7235 2.23571C15.638 2.41875 15.5161 2.58244 15.3652 2.71677C15.2143 2.85109 15.0376 2.95323 14.8459 3.01695C14.6542 3.08066 14.4515 3.1046 14.2502 3.08732C11.7213 3.08732 8.693 1.01996 5.43075 1.01996C2.52255 1.00732 0.537385 3.17583 0.537385 5.36962C0.537385 7.56342 1.80182 8.24622 3.12316 8.7267L3.15477 8.60026C2.91743 8.45028 2.72511 8.23886 2.59822 7.98842C2.47133 7.73797 2.41459 7.45785 2.43404 7.17777C2.4493 6.92796 2.51386 6.68363 2.62398 6.45888C2.73411 6.23414 2.88763 6.03341 3.07569 5.86826C3.26375 5.70312 3.48264 5.57683 3.71973 5.49668C3.95683 5.41652 4.20745 5.38408 4.45714 5.40124C7.20096 5.40124 11.6265 7.69619 14.3766 7.69619H14.6359V10.9268L12.107 13.1586L14.6359 15.4535V20.1572C13.5788 20.533 12.4638 20.7192 11.342 20.7072C7.07452 20.7072 4.38759 18.1215 4.38759 13.8287C4.37897 12.8127 4.51955 11.8009 4.80486 10.8257L6.93543 9.88999V19.3733L11.2661 17.4766V7.75941L4.88072 10.6044C5.17861 9.73458 5.646 8.93247 6.25588 8.24446C6.86575 7.55645 7.606 6.99621 8.43379 6.59613L8.40218 6.5013C4.13471 7.43698 0 10.6739 0 15.5167C0 21.1055 4.71635 25 10.2103 25C16.0267 25 19.3206 21.1245 19.3522 15.4725L19.2574 15.4535Z"\n      fill=var(--color-tone-1)\n    />\n  </svg>\n  </a>\n';
var rt = function(e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), (e = a.call(this)).attachShadow({
      mode: "open"
    }), e
  }
  return n(t, [{
    key: "connectedCallback",
    value: function() {
      this.shadowRoot.appendChild(ot.content.cloneNode(!0))
    }
  }]), t
}(u(HTMLElement));
customElements.define("nyt-icon", rt);
var it = document.createElement("template");
it.innerHTML = '\n<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <rect x="0.172974" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n    <rect x="0.172974" y="7" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n    <rect x="0.172974" y="14" width="20" height="3" rx="1.5" fill=var(--color-tone-1) />\n</svg>\n';
var lt = function(e) {
  r(t, e);
  var a = h(t);

  function t() {
    var e;
    return s(this, t), (e = a.call(this)).attachShadow({
      mode: "open"
    }), e
  }
  return n(t, [{
    key: "connectedCallback",
    value: function() {
      this.shadowRoot.appendChild(it.content.cloneNode(!0))
    }
  }]), t
}(u(HTMLElement));
customElements.define("nav-icon", lt);
var dt = document.createElement("template");
dt.innerHTML = '\n  <div id="timer"></div>\n';
var ct = 6e4,
  ut = 36e5,
  mt = function(e) {
    r(t, e);
    var a = h(t);

    function t() {
      var e;
      s(this, t), o(m(e = a.call(this)), "targetEpochMS", void 0), o(m(e), "intervalId", void 0), o(m(e), "$timer", void 0), e.attachShadow({
        mode: "open"
      });
      var n = new Date;
      return n.setDate(n.getDate() + 1), n.setHours(0, 0, 0, 0), e.targetEpochMS = n.getTime(), e
    }
    return n(t, [{
      key: "padDigit",
      value: function(e) {
        return e.toString().padStart(2, "0")
      }
    }, {
      key: "updateTimer",
      value: function() {
        var e, a = (new Date).getTime(),
          s = Math.floor(this.targetEpochMS - a);
        if (s <= 0) e = "00:00:00";
        else {
          var t = Math.floor(s % 864e5 / ut),
            n = Math.floor(s % ut / ct),
            o = Math.floor(s % ct / 1e3);
          e = "".concat(this.padDigit(t), ":").concat(this.padDigit(n), ":").concat(this.padDigit(o))
        }
        this.$timer.textContent = e
      }
    }, {
      key: "connectedCallback",
      value: function() {
        var e = this;
        this.shadowRoot.appendChild(dt.content.cloneNode(!0)), this.$timer = this.shadowRoot.querySelector("#timer"), this.intervalId = setInterval((function() {
          e.updateTimer()
        }), 200)
      }
    }, {
      key: "disconnectedCallback",
      value: function() {
        clearInterval(this.intervalId)
      }
    }]), t
  }(u(HTMLElement));
return customElements.define("countdown-timer", mt), e.CountdownTimer = mt, e.GameApp = ms, e.GameHelp = Qs, e.GameIcon = nt, e.GameKeyboard = ks, e.GameModal = hs, e.GameNav = Ys, e.GamePage = at, e.GameRow = x, e.GameSettings = Ta, e.GameStats = Vs, e.GameSwitch = Zs, e.GameThemeManager = C, e.GameTile = v, e.GameToast = Ia, e.NYTIcon = rt, e.NavIcon = lt, e.NavModal = Js, Object.defineProperty(e, "__esModule", {
  value: !0
}), e
}({});