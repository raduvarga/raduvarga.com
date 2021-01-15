!(function () {
    function j(e, t, o, n) {
        var r = new Date();
        r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3);
        r = "expires=" + r.toUTCString();
        (n = n || "samesite=None;"), (document.cookie = e + "=" + t + ";" + r + ";" + n + "path=/;Secure");
    }
    function z(e) {
        for (var t = e + "=", o = decodeURIComponent(document.cookie).split(";"), n = 0; n < o.length; n++) {
            for (var r = o[n]; " " == r.charAt(0); ) r = r.substring(1);
            if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
        }
        return "";
    }
    var G,
        Y,
        o,
        X = "https://www.powr.io";
    function F() {
        return function () {};
    }
    function K(e, t, o) {
        e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && e.attachEvent("on" + t, o);
    }
    function Q(e, t, o, n, r, i) {
        var l = e;
        F()("Match:", e);
        var a = l.match(/powr-[^\s\]]*/i),
            e = l.match(/id="[^"]*"/i);
        null == e && (e = l.match(/id='[^']*'/i)),
            null == e && null != (e = l.match(/id=[^\]]*/i)) && (e = e[0].replace("id=", 'id="') + '"'),
            null == e && (e = l.match(/label="[^"]*"/i)),
            null == e && (e = l.match(/label='[^']*'/i)),
            null == e && (e = "");
        e = '<div class="' + a + '" ' + e + "></div>";
        return F()("Result is:" + e), e;
    }
    function Z(e) {
        for (var t = {}, o = e.search("\\?"), n = (e = e.substr(o + 1)).split("&"), r = 0; r < n.length; r++) {
            var i,
                l = n[r].split("=");
            void 0 === t[l[0]] ? (t[l[0]] = l[1]) : "string" == typeof t[l[0]] ? ((i = [t[l[0]], l[1]]), (t[l[0]] = i)) : t[l[0]].push(l[1]);
        }
        return t;
    }
    function $() {
        var e = navigator.userAgent.toLowerCase();
        return -1 != e.indexOf("msie") && parseInt(e.split("msie")[1]);
    }
    function ee(e) {
        return (
            -1 <
            [
                "popup",
                "sales-popup",
                "sales-pop",
                "exit-popup",
                "exit-intent-popup",
                "overlay-popup",
                "onclick-popup",
                "popup-form",
                "email-popup",
                "coupon-box",
                "email-subscription-popup",
                "popup-notification",
                "full-screen-popup",
                "survey-popup",
                "splash-popup",
                "popup-maker",
                "slide-in",
                "modal-popup",
            ].indexOf(e)
        );
    }
    function te(e) {
        for (var t = !1, o = e; o && o !== document; o = o.parentNode)
            if (null != o.classList && o.classList.contains("powr-ignore")) {
                t = !0;
                break;
            }
        return t;
    }
    function oe() {
        try {
            return window.top.location.href;
        } catch (e) {
            return F()("Couldn't get page url:", e), "";
        }
    }
    function ne(o) {
        var n = new XMLHttpRequest();
        n.open("GET", POWR_RECEIVERS[o].data_url, !0),
            (n.withCredentials = !0),
            (n.onreadystatechange = function () {
                var e, t;
                (n.readyState != XMLHttpRequest.DONE && 4 != n.readyState) ||
                    (200 == n.status
                        ? (((e = JSON.parse(n.responseText)).iframe_index = o),
                          (POWR_RECEIVERS[o].data = e),
                          (t = setInterval(function () {
                              POWR_RECEIVERS[o].loaded && (POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({ message: "loadView", data: e }), POWR_RECEIVERS[o].url), clearInterval(t));
                          }, 10)))
                        : F()("Error receiving POWr App Data"));
            }),
            n.send();
    }
    function l(e) {
        switch (e.scrollTo) {
            case "top":
                r(0, e.scrollSpeed);
                break;
            case "bottom":
                (n = e.scrollSpeed), r((document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight + 50, n);
                break;
            case "text":
                (n = e.scrollToText),
                    (o = e.scrollSpeed),
                    !void (
                        (n = (function (e) {
                            for (var t = document.querySelectorAll("body, body *"), o = 0; o < t.length; o++)
                                for (var n = t[o], r = n.childNodes, i = 0; i < r.length; i++) {
                                    var l = r[i];
                                    if (3 == l.nodeType) if (-1 < l.nodeValue.search(e)) return n;
                                }
                            return !1;
                        })(n)) && r(n.getBoundingClientRect().top + window.scrollY - 150, o)
                    );
                break;
            case "anchor":
                (o = e.scrollToAnchor), (t = e.scrollSpeed), !void ((o = document.getElementById(o)) && r(o.getBoundingClientRect().top + window.scrollY - 150, t));
                break;
            case "app":
                t = document.querySelector('iframe[src="' + e.url + '"]');
                if (t) {
                    if (e.ios) {
                        window.scrollTo(0, t.offsetTop - 50);
                        break;
                    }
                    r(t.offsetTop - 50, e.scrollSpeed);
                    break;
                }
                window.scrollBy(0, e.distance);
        }
        var t, o, n;
    }
    function r(e, t, o) {
        var n = document.documentElement.scrollTop || document.body.scrollTop;
        n !== o &&
            (window.requestAnimationFrame(function () {
                r(e, t, n);
            }),
            n < e ? window.scrollTo(0, n + (e - n) / t) : window.scrollTo(0, n - (n - e) / t));
    }
    function e(e) {
        F()("Settings got a message!", e);
        try {
            var t = JSON.parse(e.data);
            if ("viewLoaded" == t.message) {
                F()("Settings received view loaded");
                var o = t.data.iframe_index;
                POWR_RECEIVERS[o].loaded = !0;
                var n = t.data.cookiesToGet;
                0 < n.length &&
                    ((POWR_RECEIVERS[o].cookies = n.map(function (e) {
                        return { cname: e, value: z(e) };
                    })),
                    POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({ message: "cookiesSent", cookies: POWR_RECEIVERS[o].cookies }), POWR_RECEIVERS[o].url));
            } else if ("updateSize" == t.message) {
                "undefined" != typeof gadgets && void 0 !== gadgets.window && void 0 !== gadgets.window.adjustHeight && gadgets.window.adjustHeight(t.data.height);
                var o = t.data.iframe_index,
                    r = document.querySelectorAll('[powrindex="' + o + '"]')[0];
                if (r && ((r.height = t.data.height + "px"), (r.style.height = t.data.height + "px"), (r.style.display = "inline"), null != t.data.postCss)) for (var i in t.data.postCss) r.style[i] = t.data.postCss[i];
                t.data.postMessage && "scrollTo" == t.data.postMessage.messageType && l(t.data.postMessage), F()("Updating size of el", r);
            } else
                "loadMe" == t.message
                    ? (F()("Settings received loadMe request"),
                      (o = t.data.iframe_index),
                      null != POWR_RECEIVERS[o] && null != POWR_RECEIVERS[o].data && POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({ message: "loadView", data: POWR_RECEIVERS[o].data }), POWR_RECEIVERS[o].url))
                    : "setCookie" === t.message && j(t.cname, t.value, t.exdays);
        } catch (e) {}
    }
    function re() {
        return window.CookieControl && window.CookieControl.isPOWrAllowed && window.CookieControl.isPOWrAllowed();
    }
    "undefined" == typeof loadPowr
        ? ((function () {
              for (var e = document.querySelectorAll(".powrLoaded"), t = 0; t < e.length; t++) {
                  var o = e[t];
                  (o.innerHTML = ""), o.classList.remove("powrLoaded");
              }
          })(),
          window.addEventListener ? window.addEventListener("message", e) : window.attachEvent("onmessage", e),
          (G = 0),
          (POWR_RECEIVERS = []),
          (Y = document.createEvent("Event")).initEvent("powrPingListener", !0, !0),
          (loadPowr = function () {
              if (document.body) {
                  for (var t = null, e = null, o = null, n = !1, r = document.querySelectorAll("script"), i = 0; i < r.length; i++) {
                      var l = r[i],
                          a = l.getAttribute("src");
                      if (null != a) {
                          var s = l.getAttribute("powr-token"),
                              d = l.getAttribute("external-type");
                          (o = Z(a)) &&
                              o.loadApp &&
                              o.uniqueId &&
                              !l.getAttribute("auto-add") &&
                              ((v = document.createElement("div")).setAttribute("class", "powr-" + o.loadApp), v.setAttribute("id", o.uniqueId), document.body.appendChild(v), l.setAttribute("auto-add", !0)),
                              (d = d || l.getAttribute("platform"));
                          var c,
                              u = l.getAttribute("template-powr-token"),
                              p = l.getAttribute("powr-load");
                          if (
                              (null == p && (p = "sync"),
                              $() && $() <= 9 && (p = "sync"),
                              (n = l.getAttribute("demo-mode")),
                              null != s ? (t = s) : -1 < a.search("powr-token") && void 0 !== o["powr-token"] && 0 < o["powr-token"].length && (t = o["powr-token"]),
                              null != d
                                  ? (e = d)
                                  : -1 < a.search("external-type")
                                  ? null != (c = (o = Z(a))["external-type"]) && 0 < c.length && (e = c)
                                  : -1 < a.search("platform") && null != (c = (o = Z(a)).platform) && 0 < c.length && (e = c),
                              "ecwid" == e && (p = "sync"),
                              null != t || null != e)
                          )
                              break;
                      }
                  }
                  if (null == t || 0 == t.length)
                      try {
                          t = window.top.location.host;
                      } catch (e) {
                          t = "";
                      }
                  "wix-oauth" == e &&
                      document.querySelectorAll("head .powr-popup, head .powr-chat").forEach(function (e) {
                          document.body.append(e);
                      });
                  for (var m, g, w, E, f = /\[powr-[^\]]*\]/gi, h = /\[powr-[^\s\]]*/gi, R = document.querySelectorAll("a"), i = 0; i < R.length; i++)
                      te((y = R[i])) ||
                          ((m = y.previousSibling),
                          (g = y.nextSibling),
                          m &&
                              g &&
                              y.getAttribute("href") &&
                              -1 < y.getAttribute("href").search("tel") &&
                              3 == m.nodeType &&
                              3 == g.nodeType &&
                              m.nodeValue.match(h) &&
                              -1 < g.nodeValue.search("]") &&
                              ((w = y.innerHTML),
                              (E = m.nodeValue.match(/powr-[^\s\]]*/gi)[0]),
                              ((I = document.createElement("div")).innerHTML = '<div class="' + E + '" label="' + w + '"></div>'),
                              m.parentNode.removeChild(m),
                              g.parentNode.removeChild(g),
                              y.parentNode.replaceChild(I, y)));
                  for (var v, C, R = document.querySelectorAll("body, body *"), i = 0; i < R.length; i++) {
                      var y,
                          S = (y = R[i]).childNodes;
                      if (!te(y))
                          for (var b = 0; b < S.length; b++) {
                              var _,
                                  O,
                                  I,
                                  P = S[b];
                              3 != P.nodeType || ((O = (_ = P.nodeValue).replace(f, Q)) != _ && (((I = document.createElement("div")).innerHTML = O), y.replaceChild(I, P)));
                          }
                  }
                  0 == document.querySelectorAll("#powrIframeLoader").length &&
                      ((v = document.createElement("div")),
                      (C = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0]),
                      (v.id = "powrIframeLoader"),
                      (v.innerHTML = "&shy;<style> .powrLoaded iframe { visibility: hidden; } </style>"),
                      C.parentNode.insertBefore(v, C));
                  for (var k = document.querySelectorAll("[class*=powr-]"), W = !1, V = !1, i = 0; i < k.length; i++) {
                      var A = k[i];
                      if (!te(A) && !(A instanceof SVGElement || -1 < A.className.search("powrLoaded"))) {
                          for (var T = A.className.split(/\s+/), b = 0; b < T.length; b++)
                              if (0 === T[b].toLowerCase().search("powr-")) {
                                  var L = T[b].toLowerCase().replace("powr-", "");
                                  break;
                              }
                          if (void 0 !== L) {
                              ee(L) && (W = !0), ("scroll-to-top" != L && !ee(L)) || (V = !0);
                              var x = A.getAttribute("label");
                              if ((null == x && (x = ""), "weebly_" != x)) {
                                  (A.className += " powrLoaded"), null == u && (u = "");
                                  var N = A.getAttribute("id");
                                  null == N && (N = "");
                                  var M = A.getAttribute("view-mode"),
                                      q = "true" == n || "true" == A.getAttribute("demo-mode"),
                                      H = X + "/" + L + "/u/" + N;
                                  !1 === re() && (H += "/cookieless"), (H += "#platform=" + (c || "html"));
                                  var J,
                                      B = encodeURIComponent(x),
                                      x = X + "/plugins/" + L + "/cached_view?load=" + p + "&index=" + G + "&unique_label=" + N + "&powr_token=" + t + "&user_label=" + B + "&demo_mode=" + q + "&isCookieAllowed=" + re(),
                                      q = "https://www.powr.io/plugins/" + L + "/view.json?unique_label=" + N + "&powr_token=" + t + "&user_label=" + B + "&demo_mode=" + q + "&isCookieAllowed=" + re();
                                  if (
                                      (null != e && ((q += J = "&external_type=" + e), (x += J)),
                                      null != u && ((q += J = "&template_powr_token=" + u), (x += J)),
                                      null != M && ((q += M = "&view_mode=" + M), (x += M)),
                                      F()("page url IS " + oe()),
                                      oe() && (q += "&url=" + encodeURIComponent(oe())),
                                      document.location.host)
                                  )
                                      var U = document.location.protocol + "//" + document.location.host;
                                  else
                                      try {
                                          var U = document.location.ancestorOrigins[0];
                                      } catch (e) {
                                          U = window.top && window.top.location && window.top.location.host ? window.top.location.protocol + "//" + window.top.location.host : "";
                                      }
                                  if (
                                      ((q += "&request_url=" + encodeURIComponent(U)),
                                      (x += "&request_url=" + encodeURIComponent(document.location.href)),
                                      0 == B.length && ((x = H), oe() && (x += "&url=" + encodeURIComponent(oe()))),
                                      window.CookieControl && "function" == typeof window.CookieControl.isPOWrAllowed)
                                  ) {
                                      var D = z("isJimdoCookieSettingsShownBefore");
                                      if (!re() && !D)
                                          return void setTimeout(function () {
                                              window.CookieControl && window.CookieControl.showCookieSettings && (window.CookieControl.showCookieSettings(), j("isJimdoCookieSettingsShownBefore", !0, 1));
                                          }, 1e3);
                                  }
                                  D = document.createElement("iframe");
                                  (D.src = x),
                                      D.setAttribute("powrindex", G),
                                      (D.width = "100%"),
                                      (D.height = D.style.height = "0px"),
                                      ee(L) || ((D.style.transition = "height 0.3s"), (D.style.webkitTransition = "height 0.3s")),
                                      (D.style.display = "block"),
                                      (D.frameBorder = "0"),
                                      (D.style.visibility = "visible"),
                                      D.setAttribute("webkitallowfullscreen", ""),
                                      D.setAttribute("mozallowfullscreen", ""),
                                      D.setAttribute("allowfullscreen", ""),
                                      "ecwid" == e && (A.style.minWidth = "280px"),
                                      (function (t, o, n) {
                                          function e() {
                                              var e = {
                                                  message: "loaded",
                                                  data: {
                                                      iframe_index: o,
                                                      parent_window_width: window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth,
                                                      parent_window_height: window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight,
                                                  },
                                              };
                                              F()("POWr.js sending load message to url" + n + "; iframe:", t), t.contentWindow.postMessage(JSON.stringify(e), n);
                                          }
                                          t.addEventListener ? t.addEventListener("load", e) : t.attachEvent("onload", e);
                                      })(D, G, x),
                                      A.appendChild(D);
                                  A = D.contentWindow;
                                  POWR_RECEIVERS.push({ receiver: A, url: x, data_url: q }),
                                      "async" == p &&
                                          (ne(G),
                                          (function t(o, e) {
                                              e.addEventListener &&
                                                  (e.addEventListener(
                                                      "powrPingListener",
                                                      function () {
                                                          return (POWR_RECEIVERS[o].listenerConnected = !0);
                                                      },
                                                      !1
                                                  ),
                                                  (POWR_RECEIVERS[o].ping_interval = setInterval(function () {
                                                      var e = document.querySelectorAll('[powrindex="' + o + '"]')[0];
                                                      e &&
                                                          ((POWR_RECEIVERS[o].listenerConnected = !1),
                                                          e.dispatchEvent(Y),
                                                          !1 === POWR_RECEIVERS[o].listenerConnected &&
                                                              (console.log("POWr Lost connection. Reconnecting"), clearInterval(POWR_RECEIVERS[o].ping_interval), (POWR_RECEIVERS[o].receiver = e.contentWindow), ne(o), t(o, e)));
                                                  }, 2e3)));
                                          })(G, D)),
                                      G++;
                              }
                          }
                      }
                  }
                  W &&
                      (K(document, "click", function (e) {
                          e = (e = e || window.event).relatedTarget || e.toElement || e.target;
                          if (e && e.classList.contains("trigger-popup")) for (var t = 0; t < POWR_RECEIVERS.length; t++) POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({ message: "triggerPowrPopupClick" }), POWR_RECEIVERS[t].url);
                      }),
                      K(document, "mouseout", function (e) {
                          if ((e = e || window.event).clientY < 5) for (var t = 0; t < POWR_RECEIVERS.length; t++) POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({ message: "exitDocument" }), POWR_RECEIVERS[t].url);
                      })),
                      V &&
                          K(document, "scroll", function (e) {
                              for (
                                  var t = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight, o = (100 * (document.documentElement.scrollTop || document.body.scrollTop)) / t, n = 0;
                                  n < POWR_RECEIVERS.length;
                                  n++
                              )
                                  POWR_RECEIVERS[n].receiver.postMessage(JSON.stringify({ message: "scrollPosition", scrollPercentage: o }), POWR_RECEIVERS[n].url);
                          });
              }
          }),
          loadPowr(),
          setInterval(function () {
              loadPowr();
          }, 500),
          K(window, "load", loadPowr),
          (o = !1),
          K(window, "keydown", function (e) {
              if (
                  (80 == e.keyCode &&
                      ((o = !0),
                      setTimeout(function () {
                          o = !1;
                      }, 2e3)),
                  38 == e.keyCode && o)
              ) {
                  for (var t = 0; t < POWR_RECEIVERS.length; t++) POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({ message: "showEdit" }), POWR_RECEIVERS[t].url);
                  return e.preventDefault(), !1;
              }
              if (40 == e.keyCode && o) {
                  for (t = 0; t < POWR_RECEIVERS.length; t++) POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({ message: "hideEdit" }), POWR_RECEIVERS[t].url);
                  return e.preventDefault(), !1;
              }
          }))
        : F()("Powr already loaded");
})();
