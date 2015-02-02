!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = e.length, n = Z.type(e);
        return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function i(e, t, n) {
        if (Z.isFunction(t))return Z.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType)return Z.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t))return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function (e) {
            return Q.call(t, e) >= 0 !== n
        })
    }

    function r(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = ht[e] = {};
        return Z.each(e.match(pt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
    }

    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = Z.expando + Math.random()
    }

    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)if (i = "data-" + t.replace(wt, "-$1").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : bt.test(n) ? Z.parseJSON(n) : n
            } catch (r) {
            }
            yt.set(e, t, n)
        } else n = void 0;
        return n
    }

    function c() {
        return !0
    }

    function u() {
        return !1
    }

    function f() {
        try {
            return J.activeElement
        } catch (e) {
        }
    }

    function d(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function h(e) {
        var t = Mt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n = 0, i = e.length; i > n; n++)vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
    }

    function g(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (vt.hasData(e) && (o = vt.access(e), a = vt.set(t, o), c = o.events)) {
                delete a.handle, a.events = {};
                for (r in c)for (n = 0, i = c[r].length; i > n; n++)Z.event.add(t, r, c[r][n])
            }
            yt.hasData(e) && (s = yt.access(e), l = Z.extend({}, s), yt.set(t, l))
        }
    }

    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }

    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Tt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function b(t, n) {
        var i, r = Z(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : Z.css(r[0], "display");
        return r.detach(), o
    }

    function w(e) {
        var t = J, n = qt[e];
        return n || (n = b(e, t), "none" !== n && n || (Pt = (Pt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Pt[0].contentDocument, t.write(), t.close(), n = b(e, t), Pt.detach()), qt[e] = n), n
    }

    function x(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || zt(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Bt.test(a) && Rt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function C(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function k(e, t) {
        if (t in e)return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = Vt.length; r--;)if (t = Vt[r] + n, t in e)return t;
        return i
    }

    function T(e, t, n) {
        var i = Xt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function F(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += Z.css(e, n + Ct[o], !0, r)), i ? ("content" === n && (a -= Z.css(e, "padding" + Ct[o], !0, r)), "margin" !== n && (a -= Z.css(e, "border" + Ct[o] + "Width", !0, r))) : (a += Z.css(e, "padding" + Ct[o], !0, r), "padding" !== n && (a += Z.css(e, "border" + Ct[o] + "Width", !0, r)));
        return a
    }

    function S(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = zt(e), a = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = x(e, t, o), (0 > r || null == r) && (r = e.style[t]), Bt.test(r))return r;
            i = a && (G.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + F(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }

    function L(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; s > a; a++)i = e[a], i.style && (o[a] = vt.get(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && kt(i) && (o[a] = vt.access(i, "olddisplay", w(i.nodeName)))) : (r = kt(i), "none" === n && r || vt.set(i, "olddisplay", r ? n : Z.css(i, "display"))));
        for (a = 0; s > a; a++)i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function D(e, t, n, i, r) {
        return new D.prototype.init(e, t, n, i, r)
    }

    function j() {
        return setTimeout(function () {
            Gt = void 0
        }), Gt = Z.now()
    }

    function E(e, t) {
        var n, i = 0, r = {height: e};
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Ct[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function N(e, t, n) {
        for (var i, r = (nn[t] || []).concat(nn["*"]), o = 0, a = r.length; a > o; o++)if (i = r[o].call(n, t, e))return i
    }

    function A(e, t, n) {
        var i, r, o, a, s, l, c, u, f = this, d = {}, p = e.style, h = e.nodeType && kt(e), m = vt.get(e, "fxshow");
        n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, f.always(function () {
            f.always(function () {
                s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = Z.css(e, "display"), u = "none" === c ? vt.get(e, "olddisplay") || w(e.nodeName) : c, "inline" === u && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (i in t)if (r = t[i], Kt.exec(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                if ("show" !== r || !m || void 0 === m[i])continue;
                h = !0
            }
            d[i] = m && m[i] || Z.style(e, i)
        } else c = void 0;
        if (Z.isEmptyObject(d))"inline" === ("none" === c ? w(e.nodeName) : c) && (p.display = c); else {
            m ? "hidden"in m && (h = m.hidden) : m = vt.access(e, "fxshow", {}), o && (m.hidden = !h), h ? Z(e).show() : f.done(function () {
                Z(e).hide()
            }), f.done(function () {
                var t;
                vt.remove(e, "fxshow");
                for (t in d)Z.style(e, t, d[t])
            });
            for (i in d)a = N(h ? m[i] : 0, i, f), i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function _(e, t) {
        var n, i, r, o, a;
        for (n in e)if (i = Z.camelCase(n), r = t[i], o = e[n], Z.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = Z.cssHooks[i], a && "expand"in a) {
            o = a.expand(o), delete e[i];
            for (n in o)n in e || (e[n] = o[n], t[n] = r)
        } else t[i] = r
    }

    function $(e, t, n) {
        var i, r, o = 0, a = tn.length, s = Z.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r)return !1;
            for (var t = Gt || j(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; l > a; a++)c.tweens[a].run(o);
            return s.notifyWith(e, [c, o, n]), 1 > o && l ? n : (s.resolveWith(e, [c]), !1)
        }, c = s.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Gt || j(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var i = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (r)return this;
                for (r = !0; i > n; n++)c.tweens[n].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
            }
        }), u = c.props;
        for (_(u, c.opts.specialEasing); a > o; o++)if (i = tn[o].call(c, e, u, c.opts))return i;
        return Z.map(u, N, c), Z.isFunction(c.opts.start) && c.opts.start.call(e, c), Z.fx.timer(Z.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function O(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(pt) || [];
            if (Z.isFunction(n))for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function M(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0, Z.each(e[s] || [], function (e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }

        var o = {}, a = e === Cn;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function H(e, t) {
        var n, i, r = Z.ajaxSettings.flatOptions || {};
        for (n in t)void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Z.extend(!0, e, i), e
    }

    function I(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)for (r in s)if (s[r] && s[r].test(i)) {
            l.unshift(r);
            break
        }
        if (l[0]in n)o = l[0]; else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function P(e, t, n, i) {
        var r, o, a, s, l, c = {}, u = e.dataTypes.slice();
        if (u[1])for (a in e.converters)c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)for (r in c)if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                break
            }
            if (a !== !0)if (a && e["throws"])t = a(t); else try {
                t = a(t)
            } catch (f) {
                return {state: "parsererror", error: a ? f : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function q(e, t, n, i) {
        var r;
        if (Z.isArray(t))Z.each(t, function (t, r) {
            n || Sn.test(e) ? i(e, r) : q(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== Z.type(t))i(e, t); else for (r in t)q(e + "[" + r + "]", t[r], n, i)
    }

    function R(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var B = [], z = B.slice, W = B.concat, X = B.push, Q = B.indexOf, U = {}, Y = U.toString, V = U.hasOwnProperty, G = {}, J = e.document, K = "2.1.1", Z = function (e, t) {
        return new Z.fn.init(e, t)
    }, et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, tt = /^-ms-/, nt = /-([\da-z])/gi, it = function (e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: K, constructor: Z, selector: "", length: 0, toArray: function () {
            return z.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
        }, pushStack: function (e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return Z.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(Z.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(z.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: X, sort: B.sort, splice: B.splice
    }, Z.extend = Z.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)if (null != (e = arguments[s]))for (t in e)n = a[t], i = e[t], a !== i && (c && i && (Z.isPlainObject(i) || (r = Z.isArray(i))) ? (r ? (r = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === Z.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            return !Z.isArray(e) && e - parseFloat(e) >= 0
        }, isPlainObject: function (e) {
            return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !V.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[Y.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(tt, "ms-").replace(nt, it)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, i) {
            var r, o = 0, a = e.length, s = n(e);
            if (i) {
                if (s)for (; a > o && (r = t.apply(e[o], i), r !== !1); o++); else for (o in e)if (r = t.apply(e[o], i), r === !1)break
            } else if (s)for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++); else for (o in e)if (r = t.call(e[o], o, e[o]), r === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(et, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : X.call(i, e)), i
        }, inArray: function (e, t, n) {
            return null == t ? -1 : Q.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++)e[r++] = t[i];
            return e.length = r, e
        }, grep: function (e, t, n) {
            for (var i, r = [], o = 0, a = e.length, s = !n; a > o; o++)i = !t(e[o], o), i !== s && r.push(e[o]);
            return r
        }, map: function (e, t, i) {
            var r, o = 0, a = e.length, s = n(e), l = [];
            if (s)for (; a > o; o++)r = t(e[o], o, i), null != r && l.push(r); else for (o in e)r = t(e[o], o, i), null != r && l.push(r);
            return W.apply([], l)
        }, guid: 1, proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (i = z.call(arguments, 2), r = function () {
                return e.apply(t || this, i.concat(z.call(arguments)))
            }, r.guid = e.guid = e.guid || Z.guid++, r) : void 0
        }, now: Date.now, support: G
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        U["[object " + t + "]"] = t.toLowerCase()
    });
    var rt = function (e) {
        function t(e, t, n, i) {
            var r, o, a, s, l, c, f, p, h, m;
            if ((t ? t.ownerDocument || t : q) !== A && N(t), t = t || A, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (s = t.nodeType) && 9 !== s)return [];
            if ($ && !i) {
                if (r = yt.exec(e))if (a = r[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode)return n;
                        if (o.id === a)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a)return n.push(o), n
                } else {
                    if (r[2])return Z.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = r[3]) && x.getElementsByClassName && t.getElementsByClassName)return Z.apply(n, t.getElementsByClassName(a)), n
                }
                if (x.qsa && (!O || !O.test(e))) {
                    if (p = f = P, h = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = F(e), (f = t.getAttribute("id")) ? p = f.replace(wt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)c[l] = p + d(c[l]);
                        h = bt.test(e) && u(t.parentNode) || t, m = c.join(",")
                    }
                    if (m)try {
                        return Z.apply(n, h.querySelectorAll(m)), n
                    } catch (g) {
                    } finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return L(e.replace(lt, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
            }

            var t = [];
            return e
        }

        function i(e) {
            return e[P] = !0, e
        }

        function r(e) {
            var t = A.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--;)C.attrHandle[n[i]] = t
        }

        function a(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (i)return i;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--;)n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function u(e) {
            return e && typeof e.getElementsByTagName !== U && e
        }

        function f() {
        }

        function d(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
            return i
        }

        function p(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, o = B++;
            return t.first ? function (t, n, o) {
                for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, o)
            } : function (t, n, a) {
                var s, l, c = [R, o];
                if (a) {
                    for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, a))return !0
                } else for (; t = t[i];)if (1 === t.nodeType || r) {
                    if (l = t[P] || (t[P] = {}), (s = l[i]) && s[0] === R && s[1] === o)return c[2] = s[2];
                    if (l[i] = c, c[2] = e(t, n, a))return !0
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, i) {
                for (var r = e.length; r--;)if (!e[r](t, n, i))return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; o > r; r++)t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), c && t.push(s));
            return a
        }

        function v(e, t, n, r, o, a) {
            return r && !r[P] && (r = v(r)), o && !o[P] && (o = v(o, a)), i(function (i, a, s, l) {
                var c, u, f, d = [], p = [], h = a.length, v = i || m(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? v : g(v, d, e, s, l), b = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, b, s, l), r)for (c = g(b, p), r(c, [], s, l), u = c.length; u--;)(f = c[u]) && (b[p[u]] = !(y[p[u]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = b.length; u--;)(f = b[u]) && c.push(y[u] = f);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(f = b[u]) && (c = o ? tt.call(i, f) : d[u]) > -1 && (i[c] = !(a[c] = f))
                    }
                } else b = g(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = p(function (e) {
                return e === t
            }, a, !0), c = p(function (e) {
                return tt.call(t, e) > -1
            }, a, !0), u = [function (e, n, i) {
                return !o && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
            }]; r > s; s++)if (n = C.relative[e[s].type])u = [p(h(u), n)]; else {
                if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (i = ++s; r > i && !C.relative[e[i].type]; i++);
                    return v(s > 1 && h(u), s > 1 && d(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(lt, "$1"), n, i > s && y(e.slice(s, i)), r > i && y(e = e.slice(i)), r > i && d(e))
                }
                u.push(n)
            }
            return h(u)
        }

        function b(e, n) {
            var r = n.length > 0, o = e.length > 0, a = function (i, a, s, l, c) {
                var u, f, d, p = 0, h = "0", m = i && [], v = [], y = D, b = i || o && C.find.TAG("*", c), w = R += null == y ? 1 : Math.random() || .1, x = b.length;
                for (c && (D = a !== A && a); h !== x && null != (u = b[h]); h++) {
                    if (o && u) {
                        for (f = 0; d = e[f++];)if (d(u, a, s)) {
                            l.push(u);
                            break
                        }
                        c && (R = w)
                    }
                    r && ((u = !d && u) && p--, i && m.push(u))
                }
                if (p += h, r && h !== p) {
                    for (f = 0; d = n[f++];)d(m, v, a, s);
                    if (i) {
                        if (p > 0)for (; h--;)m[h] || v[h] || (v[h] = J.call(l));
                        v = g(v)
                    }
                    Z.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                }
                return c && (R = w, D = y), m
            };
            return r ? i(a) : a
        }

        var w, x, C, k, T, F, S, L, D, j, E, N, A, _, $, O, M, H, I, P = "sizzle" + -new Date, q = e.document, R = 0, B = 0, z = n(), W = n(), X = n(), Q = function (e, t) {
            return e === t && (E = !0), 0
        }, U = "undefined", Y = 1 << 31, V = {}.hasOwnProperty, G = [], J = G.pop, K = G.push, Z = G.push, et = G.slice, tt = G.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                return -1
            }, nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = rt.replace("w", "w#"), at = "\\[" + it + "*(" + rt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]", st = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)", lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"), ct = new RegExp("^" + it + "*," + it + "*"), ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), ft = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"), dt = new RegExp(st), pt = new RegExp("^" + ot + "$"), ht = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + at),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + nt + ")$", "i"),
            needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
        }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, wt = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), Ct = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        };
        try {
            Z.apply(G = et.call(q.childNodes), q.childNodes), G[q.childNodes.length].nodeType
        } catch (kt) {
            Z = {
                apply: G.length ? function (e, t) {
                    K.apply(e, et.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, T = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, N = t.setDocument = function (e) {
            var t, n = e ? e.ownerDocument || e : q, i = n.defaultView;
            return n !== A && 9 === n.nodeType && n.documentElement ? (A = n, _ = n.documentElement, $ = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                N()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                N()
            })), x.attributes = r(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = r(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = vt.test(n.getElementsByClassName) && r(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), x.getById = r(function (e) {
                return _.appendChild(e).id = P, !n.getElementsByName || !n.getElementsByName(P).length
            }), x.getById ? (C.find.ID = function (e, t) {
                if (typeof t.getElementById !== U && $) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function (e) {
                var t = e.replace(xt, Ct);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete C.find.ID, C.filter.ID = function (e) {
                var t = e.replace(xt, Ct);
                return function (e) {
                    var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = x.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];)1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, C.find.CLASS = x.getElementsByClassName && function (e, t) {
                return typeof t.getElementsByClassName !== U && $ ? t.getElementsByClassName(e) : void 0
            }, M = [], O = [], (x.qsa = vt.test(n.querySelectorAll)) && (r(function (e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && O.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + it + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
            }), r(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + it + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (x.matchesSelector = vt.test(H = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && r(function (e) {
                x.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), M.push("!=", st)
            }), O = O.length && new RegExp(O.join("|")), M = M.length && new RegExp(M.join("|")), t = vt.test(_.compareDocumentPosition), I = t || vt.test(_.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, Q = t ? function (e, t) {
                if (e === t)return E = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === q && I(q, e) ? -1 : t === n || t.ownerDocument === q && I(q, t) ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t)return E = !0, 0;
                var i, r = 0, o = e.parentNode, s = t.parentNode, l = [e], c = [t];
                if (!o || !s)return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0;
                if (o === s)return a(e, t);
                for (i = e; i = i.parentNode;)l.unshift(i);
                for (i = t; i = i.parentNode;)c.unshift(i);
                for (; l[r] === c[r];)r++;
                return r ? a(l[r], c[r]) : l[r] === q ? -1 : c[r] === q ? 1 : 0
            }, n) : A
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== A && N(e), n = n.replace(ft, "='$1']"), !(!x.matchesSelector || !$ || M && M.test(n) || O && O.test(n)))try {
                var i = H.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
            } catch (r) {
            }
            return t(n, A, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== A && N(e), I(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== A && N(e);
            var n = C.attrHandle[t.toLowerCase()], i = n && V.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
            return void 0 !== i ? i : x.attributes || !$ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], i = 0, r = 0;
            if (E = !x.detectDuplicates, j = !x.sortStable && e.slice(0), e.sort(Q), E) {
                for (; t = e[r++];)t === e[r] && (i = n.push(r));
                for (; i--;)e.splice(n[i], 1)
            }
            return j = null, e
        }, k = t.getText = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += k(e)
                } else if (3 === r || 4 === r)return e.nodeValue
            } else for (; t = e[i++];)n += k(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xt, Ct), e[3] = (e[3] || e[4] || e[5] || "").replace(xt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return ht.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && dt.test(n) && (t = F(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xt, Ct).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && z(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, i) {
                    return function (r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === i && 0 === r ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, f, d, p, h, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (f = t; f = f[m];)if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                for (u = g[P] || (g[P] = {}), c = u[e] || [], p = c[0] === R && c[1], d = c[0] === R && c[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (d = p = 0) || h.pop();)if (1 === f.nodeType && ++d && f === t) {
                                    u[e] = [R, p, d];
                                    break
                                }
                            } else if (y && (c = (t[P] || (t[P] = {}))[e]) && c[0] === R)d = c[1]; else for (; (f = ++p && f && f[m] || (d = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[P] || (f[P] = {}))[e] = [R, d]), f !== t)););
                            return d -= r, d === i || d % i === 0 && d / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[P] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, r = o(e, n), a = r.length; a--;)i = tt.call(e, r[a]), e[i] = !(t[i] = r[a])
                    }) : function (e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = S(e.replace(lt, "$1"));
                    return r[P] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xt, Ct).toLowerCase(), function (t) {
                        var n;
                        do if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === _
                }, focus: function (e) {
                    return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !C.pseudos.empty(e)
                }, header: function (e) {
                    return gt.test(e.nodeName)
                }, input: function (e) {
                    return mt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: c(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                    return e
                }), gt: c(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;)e.push(i);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[w] = s(w);
        for (w in{submit: !0, reset: !0})C.pseudos[w] = l(w);
        return f.prototype = C.filters = C.pseudos, C.setFilters = new f, F = t.tokenize = function (e, n) {
            var i, r, o, a, s, l, c, u = W[e + " "];
            if (u)return n ? 0 : u.slice(0);
            for (s = e, l = [], c = C.preFilter; s;) {
                (!i || (r = ct.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i = !1, (r = ut.exec(s)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(lt, " ")
                }), s = s.slice(i.length));
                for (a in C.filter)!(r = ht[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: a,
                    matches: r
                }), s = s.slice(i.length));
                if (!i)break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, S = t.compile = function (e, t) {
            var n, i = [], r = [], o = X[e + " "];
            if (!o) {
                for (t || (t = F(e)), n = t.length; n--;)o = y(t[n]), o[P] ? i.push(o) : r.push(o);
                o = X(e, b(r, i)), o.selector = e
            }
            return o
        }, L = t.select = function (e, t, n, i) {
            var r, o, a, s, l, c = "function" == typeof e && e, f = !i && F(e = c.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && $ && C.relative[o[1].type]) {
                    if (t = (C.find.ID(a.matches[0].replace(xt, Ct), t) || [])[0], !t)return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = ht.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)if ((l = C.find[s]) && (i = l(a.matches[0].replace(xt, Ct), bt.test(o[0].type) && u(t.parentNode) || t))) {
                    if (o.splice(r, 1), e = i.length && d(o), !e)return Z.apply(n, i), n;
                    break
                }
            }
            return (c || S(e, f))(i, t, !$, n, bt.test(e) && u(t.parentNode) || t), n
        }, x.sortStable = P.split("").sort(Q).join("") === P, x.detectDuplicates = !!E, N(), x.sortDetached = r(function (e) {
            return 1 & e.compareDocumentPosition(A.createElement("div"))
        }), r(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), r(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(nt, function (e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    Z.find = rt, Z.expr = rt.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = rt.uniqueSort, Z.text = rt.getText, Z.isXMLDoc = rt.isXML, Z.contains = rt.contains;
    var ot = Z.expr.match.needsContext, at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, st = /^.[^:#\[\.,]*$/;
    Z.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Z.fn.extend({
        find: function (e) {
            var t, n = this.length, i = [], r = this;
            if ("string" != typeof e)return this.pushStack(Z(e).filter(function () {
                for (t = 0; n > t; t++)if (Z.contains(r[t], this))return !0
            }));
            for (t = 0; n > t; t++)Z.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        }, is: function (e) {
            return !!i(this, "string" == typeof e && ot.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ut = Z.fn.init = function (e, t) {
        var n, i;
        if (!e)return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ct.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || lt).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), at.test(n[1]) && Z.isPlainObject(t))for (n in t)Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return i = J.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof lt.ready ? lt.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    };
    ut.prototype = Z.fn, lt = Z(J);
    var ft = /^(?:parents|prev(?:Until|All))/, dt = {children: !0, contents: !0, next: !0, prev: !0};
    Z.extend({
        dir: function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
                if (r && Z(e).is(n))break;
                i.push(e)
            }
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), Z.fn.extend({
        has: function (e) {
            var t = Z(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++)if (Z.contains(this, t[e]))return !0
            })
        }, closest: function (e, t) {
            for (var n, i = 0, r = this.length, o = [], a = ot.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; r > i; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? Q.call(Z(e), this[0]) : Q.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Z.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return Z.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return Z.dir(e, "parentNode", n)
        }, next: function (e) {
            return r(e, "nextSibling")
        }, prev: function (e) {
            return r(e, "previousSibling")
        }, nextAll: function (e) {
            return Z.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return Z.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return Z.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return Z.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return Z.sibling(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function (e, t) {
        Z.fn[e] = function (n, i) {
            var r = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Z.filter(i, r)), this.length > 1 && (dt[e] || Z.unique(r), ft.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var pt = /\S+/g, ht = {};
    Z.Callbacks = function (e) {
        e = "string" == typeof e ? ht[e] || o(e) : Z.extend({}, e);
        var t, n, i, r, a, s, l = [], c = !e.once && [], u = function (o) {
            for (t = e.memory && o, n = !0, s = r || 0, r = 0, a = l.length, i = !0; l && a > s; s++)if (l[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            i = !1, l && (c ? c.length && u(c.shift()) : t ? l = [] : f.disable())
        }, f = {
            add: function () {
                if (l) {
                    var n = l.length;
                    !function o(t) {
                        Z.each(t, function (t, n) {
                            var i = Z.type(n);
                            "function" === i ? e.unique && f.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    }(arguments), i ? a = l.length : t && (r = n, u(t))
                }
                return this
            }, remove: function () {
                return l && Z.each(arguments, function (e, t) {
                    for (var n; (n = Z.inArray(t, l, n)) > -1;)l.splice(n, 1), i && (a >= n && a--, s >= n && s--)
                }), this
            }, has: function (e) {
                return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], a = 0, this
            }, disable: function () {
                return l = c = t = void 0, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return c = void 0, t || f.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (e, t) {
                return !l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)), this
            }, fire: function () {
                return f.fireWith(this, arguments), this
            }, fired: function () {
                return !!n
            }
        };
        return f
    }, Z.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]], n = "pending", i = {
                state: function () {
                    return n
                }, always: function () {
                    return r.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return Z.Deferred(function (n) {
                        Z.each(t, function (t, o) {
                            var a = Z.isFunction(e[t]) && e[t];
                            r[o[1]](function () {
                                var e = a && a.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? Z.extend(e, i) : i
                }
            }, r = {};
            return i.pipe = i.then, Z.each(t, function (e, o) {
                var a = o[2], s = o[3];
                i[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), i.promise(r), e && e.call(r, r), r
        }, when: function (e) {
            var t, n, i, r = 0, o = z.call(arguments), a = o.length, s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0, l = 1 === s ? e : Z.Deferred(), c = function (e, n, i) {
                return function (r) {
                    n[e] = this, i[e] = arguments.length > 1 ? z.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (a > 1)for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++)o[r] && Z.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
            return s || l.resolveWith(i, o), l.promise()
        }
    });
    var mt;
    Z.fn.ready = function (e) {
        return Z.ready.promise().done(e), this
    }, Z.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? Z.readyWait++ : Z.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (mt.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }), Z.ready.promise = function (t) {
        return mt || (mt = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), mt.promise(t)
    }, Z.ready.promise();
    var gt = Z.access = function (e, t, n, i, r, o, a) {
        var s = 0, l = e.length, c = null == n;
        if ("object" === Z.type(n)) {
            r = !0;
            for (s in n)Z.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== i && (r = !0, Z.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                return c.call(Z(e), n)
            })), t))for (; l > s; s++)t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    };
    Z.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
        key: function (e) {
            if (!s.accepts(e))return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {value: n}, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n, Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        }, set: function (e, t, n) {
            var i, r = this.key(e), o = this.cache[r];
            if ("string" == typeof t)o[t] = n; else if (Z.isEmptyObject(o))Z.extend(this.cache[r], t); else for (i in t)o[i] = t[i];
            return o
        }, get: function (e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        }, access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i, r, o = this.key(e), a = this.cache[o];
            if (void 0 === t)this.cache[o] = {}; else {
                Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (r = Z.camelCase(t), t in a ? i = [t, r] : (i = r, i = i in a ? [i] : i.match(pt) || [])), n = i.length;
                for (; n--;)delete a[i[n]]
            }
        }, hasData: function (e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        }, discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var vt = new s, yt = new s, bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, wt = /([A-Z])/g;
    Z.extend({
        hasData: function (e) {
            return yt.hasData(e) || vt.hasData(e)
        }, data: function (e, t, n) {
            return yt.access(e, t, n)
        }, removeData: function (e, t) {
            yt.remove(e, t)
        }, _data: function (e, t, n) {
            return vt.access(e, t, n)
        }, _removeData: function (e, t) {
            vt.remove(e, t)
        }
    }), Z.fn.extend({
        data: function (e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;)a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(o, i, r[i])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                yt.set(this, e)
            }) : gt(this, function (t) {
                var n, i = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = yt.get(o, e), void 0 !== n)return n;
                    if (n = yt.get(o, i), void 0 !== n)return n;
                    if (n = l(o, i, void 0), void 0 !== n)return n
                } else this.each(function () {
                    var n = yt.get(this, i);
                    yt.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                yt.remove(this, e)
            })
        }
    }), Z.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = vt.get(e, t), n && (!i || Z.isArray(n) ? i = vt.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = Z.queue(e, t), i = n.length, r = n.shift(), o = Z._queueHooks(e, t), a = function () {
                Z.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return vt.get(e, n) || vt.access(e, n, {
                    empty: Z.Callbacks("once memory").add(function () {
                        vt.remove(e, [t + "queue", n])
                    })
                })
        }
    }), Z.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                Z.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1, r = Z.Deferred(), o = this, a = this.length, s = function () {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)n = vt.get(o[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ct = ["Top", "Right", "Bottom", "Left"], kt = function (e, t) {
        return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    }, Tt = /^(?:checkbox|radio)$/i;
    !function () {
        var e = J.createDocumentFragment(), t = e.appendChild(J.createElement("div")), n = J.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ft = "undefined";
    G.focusinBubbles = "onfocusin"in e;
    var St = /^key/, Lt = /^(?:mouse|pointer|contextmenu)|click/, Dt = /^(?:focusinfocus|focusoutblur)$/, jt = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o, a, s, l, c, u, f, d, p, h, m, g = vt.get(e);
            if (g)for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = Z.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                return typeof Z !== Ft && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(pt) || [""], c = t.length; c--;)s = jt.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p && (f = Z.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = Z.event.special[p] || {}, u = Z.extend({
                type: p,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && Z.expr.match.needsContext.test(r),
                namespace: h.join(".")
            }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), Z.event.global[p] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, l, c, u, f, d, p, h, m, g = vt.hasData(e) && vt.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(pt) || [""], c = t.length; c--;)if (s = jt.exec(t[c]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                    for (f = Z.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;)u = d[o], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                    a && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || Z.removeEvent(e, p, g.handle), delete l[p])
                } else for (p in l)Z.event.remove(e, p + t[c], n, i, !0);
                Z.isEmptyObject(l) && (delete g.handle, vt.remove(e, "events"))
            }
        },
        trigger: function (t, n, i, r) {
            var o, a, s, l, c, u, f, d = [i || J], p = V.call(t, "type") ? t.type : t, h = V.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !Dt.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[p] || {}, r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
                if (!r && !f.noBubble && !Z.isWindow(i)) {
                    for (l = f.delegateType || p, Dt.test(l + p) || (a = a.parentNode); a; a = a.parentNode)d.push(a), s = a;
                    s === (i.ownerDocument || J) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = d[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? l : f.bindType || p, u = (vt.get(a, "events") || {})[t.type] && vt.get(a, "handle"), u && u.apply(a, n), u = c && a[c], u && u.apply && Z.acceptData(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Z.acceptData(i) || c && Z.isFunction(i[p]) && !Z.isWindow(i) && (s = i[c], s && (i[c] = null), Z.event.triggered = p, i[p](), Z.event.triggered = void 0, s && (i[c] = s)), t.result
            }
        },
        dispatch: function (e) {
            e = Z.event.fix(e);
            var t, n, i, r, o, a = [], s = z.call(arguments), l = (vt.get(this, "events") || {})[e.type] || [], c = Z.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = Z.event.handlers.call(this, e, l), t = 0; (r = a[t++]) && !e.isPropagationStopped();)for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))for (; l !== this; l = l.parentNode || this)if (l.disabled !== !0 || "click" !== e.type) {
                for (i = [], n = 0; s > n; n++)o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? Z(r, this).index(l) >= 0 : Z.find(r, this, null, [l]).length), i[r] && i.push(o);
                i.length && a.push({elem: l, handlers: i})
            }
            return s < t.length && a.push({elem: this, handlers: t.slice(s)}), a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Z.expando])return e;
            var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Lt.test(r) ? this.mouseHooks : St.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = i.length; t--;)n = i[t], e[n] = o[n];
            return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== f() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return Z.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = Z.extend(new Z.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            i ? Z.event.trigger(r, null, t) : Z.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, Z.Event = function (e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : u) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    }, Z.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Z.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return (!r || r !== i && !Z.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), G.focusinBubbles || Z.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this, r = vt.access(i, t);
                r || i.addEventListener(e, n, !0), vt.access(i, t, (r || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this, r = vt.access(i, t) - 1;
                r ? vt.access(i, t, r) : (i.removeEventListener(e, n, !0), vt.remove(i, t))
            }
        }
    }), Z.fn.extend({
        on: function (e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e)this.on(a, t, n, e[a], r);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1)i = u; else if (!i)return this;
            return 1 === r && (o = i, i = function (e) {
                return Z().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = Z.guid++)), this.each(function () {
                Z.event.add(this, e, i, n, t)
            })
        }, one: function (e, t, n, i) {
            return this.on(e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e)this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = u), this.each(function () {
                Z.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                Z.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Nt = /<([\w:]+)/, At = /<|&#?\w+;/, _t = /<(?:script|style|link)/i, $t = /checked\s*(?:[^=]|=\s*.checked.)/i, Ot = /^$|\/(?:java|ecma)script/i, Mt = /^true\/(.*)/, Ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, It = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    It.optgroup = It.option, It.tbody = It.tfoot = It.colgroup = It.caption = It.thead, It.th = It.td, Z.extend({
        clone: function (e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0), l = Z.contains(e.ownerDocument, e);
            if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))for (a = v(s), o = v(e), i = 0, r = o.length; r > i; i++)y(o[i], a[i]);
            if (t)if (n)for (o = o || v(e), a = a || v(s), i = 0, r = o.length; r > i; i++)g(o[i], a[i]); else g(e, s);
            return a = v(s, "script"), a.length > 0 && m(a, !l && v(e, "script")), s
        }, buildFragment: function (e, t, n, i) {
            for (var r, o, a, s, l, c, u = t.createDocumentFragment(), f = [], d = 0, p = e.length; p > d; d++)if (r = e[d], r || 0 === r)if ("object" === Z.type(r))Z.merge(f, r.nodeType ? [r] : r); else if (At.test(r)) {
                for (o = o || u.appendChild(t.createElement("div")), a = (Nt.exec(r) || ["", ""])[1].toLowerCase(), s = It[a] || It._default, o.innerHTML = s[1] + r.replace(Et, "<$1></$2>") + s[2], c = s[0]; c--;)o = o.lastChild;
                Z.merge(f, o.childNodes), o = u.firstChild, o.textContent = ""
            } else f.push(t.createTextNode(r));
            for (u.textContent = "", d = 0; r = f[d++];)if ((!i || -1 === Z.inArray(r, i)) && (l = Z.contains(r.ownerDocument, r), o = v(u.appendChild(r), "script"), l && m(o), n))for (c = 0; r = o[c++];)Ot.test(r.type || "") && n.push(r);
            return u
        }, cleanData: function (e) {
            for (var t, n, i, r, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (Z.acceptData(n) && (r = n[vt.expando], r && (t = vt.cache[r]))) {
                    if (t.events)for (i in t.events)o[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                    vt.cache[r] && delete vt.cache[r]
                }
                delete yt.cache[n[yt.expando]]
            }
        }
    }), Z.fn.extend({
        text: function (e) {
            return gt(this, function (e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, i = e ? Z.filter(e, this) : this, r = 0; null != (n = i[r]); r++)t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && m(v(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return Z.clone(this, e, t)
            })
        }, html: function (e) {
            return gt(this, function (e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                if ("string" == typeof e && !_t.test(e) && !It[(Nt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Et, "<$1></$2>");
                    try {
                        for (; i > n; n++)t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = W.apply([], e);
            var n, i, r, o, a, s, l = 0, c = this.length, u = this, f = c - 1, d = e[0], m = Z.isFunction(d);
            if (m || c > 1 && "string" == typeof d && !G.checkClone && $t.test(d))return this.each(function (n) {
                var i = u.eq(n);
                m && (e[0] = d.call(this, n, i.html())), i.domManip(e, t)
            });
            if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (r = Z.map(v(n, "script"), p), o = r.length; c > l; l++)a = n, l !== f && (a = Z.clone(a, !0, !0), o && Z.merge(r, v(a, "script"))), t.call(this[l], a, l);
                if (o)for (s = r[r.length - 1].ownerDocument, Z.map(r, h), l = 0; o > l; l++)a = r[l], Ot.test(a.type || "") && !vt.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Ht, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Z.fn[e] = function (e) {
            for (var n, i = [], r = Z(e), o = r.length - 1, a = 0; o >= a; a++)n = a === o ? this : this.clone(!0), Z(r[a])[t](n), X.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Pt, qt = {}, Rt = /^margin/, Bt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"), zt = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    !function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top, i = "4px" === t.width, r.removeChild(o)
        }

        var n, i, r = J.documentElement, o = J.createElement("div"), a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(G, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == i && t(), i
            }, reliableMarginRight: function () {
                var t, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), t
            }
        }))
    }(), Z.swap = function (e, t, n, i) {
        var r, o, a = {};
        for (o in t)a[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t)e.style[o] = a[o];
        return r
    };
    var Wt = /^(none|table(?!-c[ea]).+)/, Xt = new RegExp("^(" + xt + ")(.*)$", "i"), Qt = new RegExp("^([+-])=(" + xt + ")", "i"), Ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Yt = {letterSpacing: "0", fontWeight: "400"}, Vt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = x(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = Z.camelCase(t), l = e.style;
                return t = Z.cssProps[s] || (Z.cssProps[s] = k(l, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get"in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t] : (o = typeof n, "string" === o && (r = Qt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set"in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n)), void 0)
            }
        },
        css: function (e, t, n, i) {
            var r, o, a, s = Z.camelCase(t);
            return t = Z.cssProps[s] || (Z.cssProps[s] = k(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get"in a && (r = a.get(e, !0, n)), void 0 === r && (r = x(e, t, i)), "normal" === r && t in Yt && (r = Yt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || Z.isNumeric(o) ? o || 0 : r) : r
        }
    }), Z.each(["height", "width"], function (e, t) {
        Z.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? Wt.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ut, function () {
                    return S(e, t, i)
                }) : S(e, t, i) : void 0
            }, set: function (e, n, i) {
                var r = i && zt(e);
                return T(e, n, i ? F(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), Z.cssHooks.marginRight = C(G.reliableMarginRight, function (e, t) {
        return t ? Z.swap(e, {display: "inline-block"}, x, [e, "marginRight"]) : void 0
    }), Z.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        Z.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[e + Ct[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Rt.test(e) || (Z.cssHooks[e + t].set = T)
    }), Z.fn.extend({
        css: function (e, t) {
            return gt(this, function (e, t, n) {
                var i, r, o = {}, a = 0;
                if (Z.isArray(t)) {
                    for (i = zt(e), r = t.length; r > a; a++)o[t[a]] = Z.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return L(this, !0)
        }, hide: function () {
            return L(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                kt(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), Z.Tween = D, D.prototype = {
        constructor: D, init: function (e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = D.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Z.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, Z.fx = D.prototype.init, Z.fx.step = {};
    var Gt, Jt, Kt = /^(?:toggle|show|hide)$/, Zt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"), en = /queueHooks$/, tn = [A], nn = {
        "*": [function (e, t) {
            var n = this.createTween(e, t), i = n.cur(), r = Zt.exec(t), o = r && r[3] || (Z.cssNumber[e] ? "" : "px"), a = (Z.cssNumber[e] || "px" !== o && +i) && Zt.exec(Z.css(n.elem, e)), s = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], r = r || [], a = +i || 1;
                do s = s || ".5", a /= s, Z.style(n.elem, e, a + o); while (s !== (s = n.cur() / i) && 1 !== s && --l)
            }
            return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
        }]
    };
    Z.Animation = Z.extend($, {
        tweener: function (e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++)n = e[i], nn[n] = nn[n] || [], nn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? tn.unshift(e) : tn.push(e)
        }
    }), Z.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? Z.extend({}, e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
        }, i
    }, Z.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(kt).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = Z.isEmptyObject(e), o = Z.speed(t, n, i), a = function () {
                var t = $(this, Z.extend({}, e), o);
                (r || vt.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, r = null != e && e + "queueHooks", o = Z.timers, a = vt.get(this);
                if (r)a[r] && a[r].stop && i(a[r]); else for (r in a)a[r] && a[r].stop && en.test(r) && i(a[r]);
                for (r = o.length; r--;)o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                (t || !n) && Z.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = vt.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = Z.timers, a = i ? i.length : 0;
                for (n.finish = !0, Z.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function (e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(E(t, !0), e, i, r)
        }
    }), Z.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        Z.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), Z.timers = [], Z.fx.tick = function () {
        var e, t = 0, n = Z.timers;
        for (Gt = Z.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(), Gt = void 0
    }, Z.fx.timer = function (e) {
        Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function () {
        Jt || (Jt = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function () {
        clearInterval(Jt), Jt = null
    }, Z.fx.speeds = {slow: 600, fast: 200, _default: 400}, Z.fn.delay = function (e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, function () {
        var e = J.createElement("input"), t = J.createElement("select"), n = t.appendChild(J.createElement("option"));
        e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
    }();
    var rn, on, an = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function (e, t) {
            return gt(this, Z.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                Z.removeAttr(this, e)
            })
        }
    }), Z.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)return typeof e.getAttribute === Ft ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? on : rn)), void 0 === n ? i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = Z.find.attr(e, t), null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        }, removeAttr: function (e, t) {
            var n, i, r = 0, o = t && t.match(pt);
            if (o && 1 === e.nodeType)for (; n = o[r++];)i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!G.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), on = {
        set: function (e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = an[t] || Z.find.attr;
        an[t] = function (e, t, i) {
            var r, o;
            return i || (o = an[t], an[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, an[t] = o), r
        }
    });
    var sn = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function (e, t) {
            return gt(this, Z.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[Z.propFix[e] || e]
            })
        }
    }), Z.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var i, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a)return o = 1 !== a || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, r = Z.propHooks[t]), void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || sn.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), G.optSelected || (Z.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Z.propFix[this.toLowerCase()] = this
    });
    var ln = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function (e) {
            var t, n, i, r, o, a, s = "string" == typeof e && e, l = 0, c = this.length;
            if (Z.isFunction(e))return this.each(function (t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (s)for (t = (e || "").match(pt) || []; c > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : " ")) {
                for (o = 0; r = t[o++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                a = Z.trim(i), n.className !== a && (n.className = a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, r, o, a, s = 0 === arguments.length || "string" == typeof e && e, l = 0, c = this.length;
            if (Z.isFunction(e))return this.each(function (t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (s)for (t = (e || "").match(pt) || []; c > l; l++)if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ln, " ") : "")) {
                for (o = 0; r = t[o++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
                a = e ? Z.trim(i) : "", n.className !== a && (n.className = a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ? function (n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)for (var t, i = 0, r = Z(this), o = e.match(pt) || []; t = o[i++];)r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else(n === Ft || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ln, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    });
    var cn = /\r/g;
    Z.fn.extend({
        val: function (e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length)return i = Z.isFunction(e), this.each(function (n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, Z(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Z.isArray(r) && (r = Z.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r)return t = Z.valHooks[r.type] || Z.valHooks[r.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(cn, "") : null == n ? "" : n)
            }
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, a = o ? null : [], s = o ? r + 1 : i.length, l = 0 > r ? s : o ? r : 0; s > l; l++)if (n = i[l], !(!n.selected && l !== r || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Z(n).val(), o)return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    for (var n, i, r = e.options, o = Z.makeArray(t), a = r.length; a--;)i = r[a], (i.selected = Z.inArray(i.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function () {
        Z.valHooks[this] = {
            set: function (e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        }, G.checkOn || (Z.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Z.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Z.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var un = Z.now(), fn = /\?/;
    Z.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, Z.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e)return null;
        try {
            n = new DOMParser, t = n.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
    };
    var dn, pn, hn = /#.*$/, mn = /([?&])_=[^&]*/, gn = /^(.*?):[ \t]*([^\r\n]*)$/gm, vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, yn = /^(?:GET|HEAD)$/, bn = /^\/\//, wn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, xn = {}, Cn = {}, kn = "*/".concat("*");
    try {
        pn = location.href
    } catch (Tn) {
        pn = J.createElement("a"), pn.href = "", pn = pn.href
    }
    dn = wn.exec(pn.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pn,
            type: "GET",
            isLocal: vn.test(dn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": Z.parseJSON, "text xml": Z.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? H(H(e, Z.ajaxSettings), t) : H(Z.ajaxSettings, e)
        },
        ajaxPrefilter: O(xn),
        ajaxTransport: O(Cn),
        ajax: function (e, t) {
            function n(e, t, n, a) {
                var l, u, v, y, w, C = t;
                2 !== b && (b = 2, s && clearTimeout(s), i = void 0, o = a || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = I(f, x, n)), y = P(f, y, x, l), l ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (Z.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (Z.etag[r] = w)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, l = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || C) + "", l ? h.resolveWith(d, [u, C, x]) : h.rejectWith(d, [x, C, v]), x.statusCode(g), g = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, f, l ? u : v]), m.fireWith(d, [x, C]), c && (p.trigger("ajaxComplete", [x, f]), --Z.active || Z.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, r, o, a, s, l, c, u, f = Z.ajaxSetup({}, t), d = f.context || f, p = f.context && (d.nodeType || d.jquery) ? Z(d) : Z.event, h = Z.Deferred(), m = Z.Callbacks("once memory"), g = f.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === b) {
                        if (!a)for (a = {}; t = gn.exec(o);)a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === b ? o : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return b || (f.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > b)for (t in e)g[t] = [g[t], e[t]]; else x.always(e[x.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return i && i.abort(t), n(0, t), this
                }
            };
            if (h.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, f.url = ((e || f.url || pn) + "").replace(hn, "").replace(bn, dn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(pt) || [""], null == f.crossDomain && (l = wn.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === dn[1] && l[2] === dn[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (dn[3] || ("http:" === dn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), M(xn, f, t, x), 2 === b)return x;
            c = f.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !yn.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (fn.test(r) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = mn.test(r) ? r.replace(mn, "$1_=" + un++) : r + (fn.test(r) ? "&" : "?") + "_=" + un++)), f.ifModified && (Z.lastModified[r] && x.setRequestHeader("If-Modified-Since", Z.lastModified[r]), Z.etag[r] && x.setRequestHeader("If-None-Match", Z.etag[r])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + kn + "; q=0.01" : "") : f.accepts["*"]);
            for (u in f.headers)x.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (f.beforeSend.call(d, x, f) === !1 || 2 === b))return x.abort();
            w = "abort";
            for (u in{success: 1, error: 1, complete: 1})x[u](f[u]);
            if (i = M(Cn, f, t, x)) {
                x.readyState = 1, c && p.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
                    x.abort("timeout")
                }, f.timeout));
                try {
                    b = 1, i.send(v, n)
                } catch (C) {
                    if (!(2 > b))throw C;
                    n(-1, C)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function (e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }), Z.each(["get", "post"], function (e, t) {
        Z[t] = function (e, n, i, r) {
            return Z.isFunction(n) && (r = r || i, i = n, n = void 0), Z.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Z.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Z._evalUrl = function (e) {
        return Z.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, Z.fn.extend({
        wrapAll: function (e) {
            var t;
            return Z.isFunction(e) ? this.each(function (t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return this.each(Z.isFunction(e) ? function (t) {
                Z(this).wrapInner(e.call(this, t))
            } : function () {
                var t = Z(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = Z.isFunction(e);
            return this.each(function (n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, Z.expr.filters.visible = function (e) {
        return !Z.expr.filters.hidden(e)
    };
    var Fn = /%20/g, Sn = /\[\]$/, Ln = /\r?\n/g, Dn = /^(?:submit|button|image|reset|file)$/i, jn = /^(?:input|select|textarea|keygen)/i;
    Z.param = function (e, t) {
        var n, i = [], r = function (e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e))Z.each(e, function () {
            r(this.name, this.value)
        }); else for (n in e)q(n, e[n], t, r);
        return i.join("&").replace(Fn, "+")
    }, Z.fn.extend({
        serialize: function () {
            return Z.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && jn.test(this.nodeName) && !Dn.test(e) && (this.checked || !Tt.test(e))
            }).map(function (e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function (e) {
                    return {name: t.name, value: e.replace(Ln, "\r\n")}
                }) : {name: t.name, value: n.replace(Ln, "\r\n")}
            }).get()
        }
    }), Z.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var En = 0, Nn = {}, An = {0: 200, 1223: 204}, _n = Z.ajaxSettings.xhr();
    e.ActiveXObject && Z(e).on("unload", function () {
        for (var e in Nn)Nn[e]()
    }), G.cors = !!_n && "withCredentials"in _n, G.ajax = _n = !!_n, Z.ajaxTransport(function (e) {
        var t;
        return G.cors || _n && !e.crossDomain ? {
            send: function (n, i) {
                var r, o = e.xhr(), a = ++En;
                if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (r in e.xhrFields)o[r] = e.xhrFields[r];
                e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (r in n)o.setRequestHeader(r, n[r]);
                t = function (e) {
                    return function () {
                        t && (delete Nn[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(An[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = t(), o.onerror = t("error"), t = Nn[a] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch (s) {
                    if (t)throw s
                }
            }, abort: function () {
                t && t()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return Z.globalEval(e), e
            }
        }
    }), Z.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, r) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), J.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var $n = [], On = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = $n.pop() || Z.expando + "_" + un++;
            return this[e] = !0, e
        }
    }), Z.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r, o, a, s = t.jsonp !== !1 && (On.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && On.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(On, "$1" + r) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || Z.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            a = arguments
        }, i.always(function () {
            e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, $n.push(r)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), Z.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || J;
        var i = at.exec(e), r = !n && [];
        return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, r), r && r.length && Z(r).remove(), Z.merge([], i.childNodes))
    };
    var Mn = Z.fn.load;
    Z.fn.load = function (e, t, n) {
        if ("string" != typeof e && Mn)return Mn.apply(this, arguments);
        var i, r, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (i = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && Z.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
        }).complete(n && function (e, t) {
            a.each(n, o || [e.responseText, t, e])
        }), this
    }, Z.expr.filters.animated = function (e) {
        return Z.grep(Z.timers, function (t) {
            return e === t.elem
        }).length
    };
    var Hn = e.document.documentElement;
    Z.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, c, u = Z.css(e, "position"), f = Z(e), d = {};
            "static" === u && (e.style.position = "relative"), s = f.offset(), o = Z.css(e, "top"), l = Z.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (i = f.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using"in t ? t.using.call(e, d) : f.css(d)
        }
    }, Z.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0], r = {top: 0, left: 0}, o = i && i.ownerDocument;
            if (o)return t = o.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== Ft && (r = i.getBoundingClientRect()), n = R(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], i = {top: 0, left: 0};
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - Z.css(n, "marginTop", !0),
                    left: t.left - i.left - Z.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Hn; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");)e = e.offsetParent;
                return e || Hn
            })
        }
    }), Z.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, n) {
        var i = "pageYOffset" === n;
        Z.fn[t] = function (r) {
            return gt(this, function (t, r, o) {
                var a = R(t);
                return void 0 === o ? a ? a[n] : t[r] : void(a ? a.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o)
            }, t, r, arguments.length, null)
        }
    }), Z.each(["top", "left"], function (e, t) {
        Z.cssHooks[t] = C(G.pixelPosition, function (e, n) {
            return n ? (n = x(e, t), Bt.test(n) ? Z(e).position()[t] + "px" : n) : void 0
        })
    }), Z.each({Height: "height", Width: "width"}, function (e, t) {
        Z.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
            Z.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i), a = n || (i === !0 || r === !0 ? "margin" : "border");
                return gt(this, function (t, n, i) {
                    var r;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? Z.css(t, n, a) : Z.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), Z.fn.size = function () {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Z
    });
    var In = e.jQuery, Pn = e.$;
    return Z.noConflict = function (t) {
        return e.$ === Z && (e.$ = Pn), t && e.jQuery === Z && (e.jQuery = In), Z
    }, typeof t === Ft && (e.jQuery = e.$ = Z), Z
}), function (e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function (t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function () {
            var t = e("meta[name=csrf-token]").attr("content"), n = e("meta[name=csrf-param]").attr("content");
            e('form input[name="' + n + '"]').val(t)
        },
        fire: function (t, n, i) {
            var r = e.Event(n);
            return t.trigger(r, i), r.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (i) {
            var r, o, a, s, l, c, u, f;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("cross-domain"), l = s === t ? null : s, c = i.data("with-credentials") || null, u = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"), o = i.attr("action"), a = i.serializeArray();
                    var d = i.data("ujs:submit-button");
                    d && (a.push(d), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), a = i.data("params") || null);
                return f = {
                    type: r || "GET", data: a, dataType: u, beforeSend: function (e, r) {
                        return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [e, r]) ? void i.trigger("ajax:send", e) : !1
                    }, success: function (e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    }, complete: function (e, t) {
                        i.trigger("ajax:complete", [e, t])
                    }, error: function (e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    }, crossDomain: l
                }, c && (f.xhrFields = {withCredentials: c}), o && (f.url = o), n.ajax(f)
            }
            return !1
        },
        handleMethod: function (i) {
            var r = n.href(i), o = i.data("method"), a = i.attr("target"), s = e("meta[name=csrf-token]").attr("content"), l = e("meta[name=csrf-param]").attr("content"), c = e('<form method="post" action="' + r + '"></form>'), u = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== t && s !== t && (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
        },
        formElements: function (t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function (t) {
            n.formElements(t, n.disableSelector).each(function () {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function (e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), e.data("ujs:enable-with", e[n]()), i !== t && e[n](i), e.prop("disabled", !0)
        },
        enableFormElements: function (t) {
            n.formElements(t, n.enableSelector).each(function () {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function (e) {
            var t = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") && e[t](e.data("ujs:enable-with")), e.prop("disabled", !1)
        },
        allowAction: function (e) {
            var t, i = e.data("confirm"), r = !1;
            return i ? (n.fire(e, "confirm") && (r = n.confirm(i), t = n.fire(e, "confirm:complete", [r])), r && t) : !0
        },
        blankInputs: function (t, n, i) {
            var r, o, a = e(), s = n || "input,textarea", l = t.find(s);
            return l.each(function () {
                if (r = e(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length)return !0;
                    a = a.add(r)
                }
            }), a.length ? a : !1
        },
        nonBlankInputs: function (e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            var i = e.data("disable-with");
            e.data("ujs:enable-with", e.html()), i !== t && e.html(i), e.bind("click.railsDisable", function (e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function (e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), e(window).on("pageshow.rails", function () {
        e(e.rails.enableSelector).each(function () {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function () {
            var t = e(this);
            t.data("ujs:enable-with") && e.rails.enableElement(t)
        })
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(e(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function () {
        n.enableFormElement(e(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
        var r = e(this), o = r.data("method"), a = r.data("params"), s = i.metaKey || i.ctrlKey;
        if (!n.allowAction(r))return n.stopEverything(i);
        if (!s && r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== t) {
            if (s && (!o || "GET" === o) && !a)return !0;
            var l = n.handleRemote(r);
            return l === !1 ? n.enableElement(r) : l.fail(function () {
                n.enableElement(r)
            }), !1
        }
        return o ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function (t) {
        var i = e(this);
        if (!n.allowAction(i))return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.fail(function () {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function (t) {
        var i = e(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
        var r, o, a = e(this), s = a.data("remote") !== t;
        if (!n.allowAction(a))return n.stopEverything(i);
        if (a.attr("novalidate") == t && (r = n.blankInputs(a, n.requiredInputSelector), r && n.fire(a, "ajax:aborted:required", [r])))return n.stopEverything(i);
        if (s) {
            if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function () {
                    n.disableFormElements(a)
                }, 13);
                var l = n.fire(a, "ajax:aborted:file", [o]);
                return l || setTimeout(function () {
                    n.enableFormElements(a)
                }, 13), l
            }
            return n.handleRemote(a), !1
        }
        setTimeout(function () {
            n.disableFormElements(a)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function (t) {
        var i = e(this);
        if (!n.allowAction(i))return n.stopEverything(t);
        var r = i.attr("name"), o = r ? {name: r, value: i.val()} : null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function (t) {
        this == t.target && n.disableFormElements(e(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function () {
        n.refreshCSRFTokens()
    }))
}(jQuery), !function (e) {
    function t(t, n, i) {
        var r = t[n];
        r && (t[n] = function () {
            return arguments[i] = arguments[i].replace(/@([\w\u00c0-\uFFFF\-]+)/g, '[role~="$1"]'), r.apply(t, arguments)
        }, e.extend(t[n], r))
    }

    function n(t, n) {
        for (var i, r = [], o = e.trim(t).split(/\s+/), a = 0; a < o.length; a++)i = o[a], ~e.inArray(i, r) || n && ~e.inArray(i, n) || r.push(i);
        return r
    }

    t(e, "find", 0), t(e, "multiFilter", 0), t(e.find, "matchesSelector", 1), t(e.find, "matches", 0), e.extend(e.fn, {
        roles: function () {
            return n(this.attr("role"))
        }, hasRole: function (e) {
            for (var t = n(e), i = 0; i < t.length; i++)if (!this.is("@" + t[i]))return !1;
            return !0
        }, addRole: function (t) {
            return this.hasRole(t) ? this : this.each(function (i, r) {
                var o = e(r);
                o.attr("role", n(o.attr("role") + " " + t).join(" "))
            })
        }, removeRole: function (t) {
            return this.hasRole(t) ? this.each(function (i, r) {
                var o = e(r);
                o.attr("role", n(o.attr("role"), n(t)).join(" "))
            }) : this
        }, toggleRole: function (e) {
            for (var t = n(e), i = 0; i < t.length; i++)this[this.hasRole(t[i]) ? "removeRole" : "addRole"].call(this, t[i]);
            return this
        }
    })
}(jQuery), function (e) {
    "use strict";
    e(["jquery"], function (e) {
        function t(t) {
            return e.isFunction(t) || e.isPlainObject(t) ? t : {top: t, left: t}
        }

        var n = e.scrollTo = function (t, n, i) {
            return e(window).scrollTo(t, n, i)
        };
        return n.defaults = {axis: "xy", duration: 0, limit: !0}, n.window = function () {
            return e(window)._scrollable()
        }, e.fn._scrollable = function () {
            return this.map(function () {
                var t = this, n = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                if (!n)return t;
                var i = (t.contentWindow || t).document || t.ownerDocument || t;
                return /webkit/i.test(navigator.userAgent) || "BackCompat" == i.compatMode ? i.body : i.documentElement
            })
        }, e.fn.scrollTo = function (i, r, o) {
            return "object" == typeof r && (o = r, r = 0), "function" == typeof o && (o = {onAfter: o}), "max" == i && (i = 9e9), o = e.extend({}, n.defaults, o), r = r || o.duration, o.queue = o.queue && o.axis.length > 1, o.queue && (r /= 2), o.offset = t(o.offset), o.over = t(o.over), this._scrollable().each(function () {
                function a(e) {
                    c.animate(f, r, o.easing, e && function () {
                        e.call(this, u, o)
                    })
                }

                if (null != i) {
                    var s, l = this, c = e(l), u = i, f = {}, d = c.is("html,body");
                    switch (typeof u) {
                        case"number":
                        case"string":
                            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)) {
                                u = t(u);
                                break
                            }
                            if (u = d ? e(u) : e(u, this), !u.length)return;
                        case"object":
                            (u.is || u.style) && (s = (u = e(u)).offset())
                    }
                    var p = e.isFunction(o.offset) && o.offset(l, u) || o.offset;
                    e.each(o.axis.split(""), function (e, t) {
                        var i = "x" == t ? "Left" : "Top", r = i.toLowerCase(), h = "scroll" + i, m = l[h], g = n.max(l, t);
                        if (s)f[h] = s[r] + (d ? 0 : m - c.offset()[r]), o.margin && (f[h] -= parseInt(u.css("margin" + i)) || 0, f[h] -= parseInt(u.css("border" + i + "Width")) || 0), f[h] += p[r] || 0, o.over[r] && (f[h] += u["x" == t ? "width" : "height"]() * o.over[r]); else {
                            var v = u[r];
                            f[h] = v.slice && "%" == v.slice(-1) ? parseFloat(v) / 100 * g : v
                        }
                        o.limit && /^\d+$/.test(f[h]) && (f[h] = f[h] <= 0 ? 0 : Math.min(f[h], g)), !e && o.queue && (m != f[h] && a(o.onAfterFirst), delete f[h])
                    }), a(o.onAfter)
                }
            }).end()
        }, n.max = function (t, n) {
            var i = "x" == n ? "Width" : "Height", r = "scroll" + i;
            if (!e(t).is("html,body"))return t[r] - e(t)[i.toLowerCase()]();
            var o = "client" + i, a = t.ownerDocument.documentElement, s = t.ownerDocument.body;
            return Math.max(a[r], s[r]) - Math.min(a[o], s[o])
        }, n
    })
}("function" == typeof define && define.amd ? define : function (e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}), function () {
    var e, t, n, i, r, o, a, s, l, c;
    e = window.device, window.device = {}, n = window.document.documentElement, c = window.navigator.userAgent.toLowerCase(), device.ios = function () {
        return device.iphone() || device.ipod() || device.ipad()
    }, device.iphone = function () {
        return i("iphone")
    }, device.ipod = function () {
        return i("ipod")
    }, device.ipad = function () {
        return i("ipad")
    }, device.android = function () {
        return i("android")
    }, device.androidPhone = function () {
        return device.android() && i("mobile")
    }, device.androidTablet = function () {
        return device.android() && !i("mobile")
    }, device.blackberry = function () {
        return i("blackberry") || i("bb10") || i("rim")
    }, device.blackberryPhone = function () {
        return device.blackberry() && !i("tablet")
    }, device.blackberryTablet = function () {
        return device.blackberry() && i("tablet")
    }, device.windows = function () {
        return i("windows")
    }, device.windowsPhone = function () {
        return device.windows() && i("phone")
    }, device.windowsTablet = function () {
        return device.windows() && i("touch") && !device.windowsPhone()
    }, device.fxos = function () {
        return (i("(mobile;") || i("(tablet;")) && i("; rv:")
    }, device.fxosPhone = function () {
        return device.fxos() && i("mobile")
    }, device.fxosTablet = function () {
        return device.fxos() && i("tablet")
    }, device.meego = function () {
        return i("meego")
    }, device.cordova = function () {
        return window.cordova && "file:" === location.protocol
    }, device.nodeWebkit = function () {
        return "object" == typeof window.process
    }, device.mobile = function () {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego()
    }, device.tablet = function () {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet()
    }, device.desktop = function () {
        return !device.tablet() && !device.mobile()
    }, device.portrait = function () {
        return window.innerHeight / window.innerWidth > 1
    }, device.landscape = function () {
        return window.innerHeight / window.innerWidth < 1
    }, device.noConflict = function () {
        return window.device = e, this
    }, i = function (e) {
        return -1 !== c.indexOf(e)
    }, o = function (e) {
        var t;
        return t = new RegExp(e, "i"), n.className.match(t)
    }, t = function (e) {
        return o(e) ? void 0 : n.className += " " + e
    }, s = function (e) {
        return o(e) ? n.className = n.className.replace(e, "") : void 0
    }, device.ios() ? device.ipad() ? t("ios ipad tablet") : device.iphone() ? t("ios iphone mobile") : device.ipod() && t("ios ipod mobile") : t(device.android() ? device.androidTablet() ? "android tablet" : "android mobile" : device.blackberry() ? device.blackberryTablet() ? "blackberry tablet" : "blackberry mobile" : device.windows() ? device.windowsTablet() ? "windows tablet" : device.windowsPhone() ? "windows mobile" : "desktop" : device.fxos() ? device.fxosTablet() ? "fxos tablet" : "fxos mobile" : device.meego() ? "meego mobile" : device.nodeWebkit() ? "node-webkit" : "desktop"), device.cordova() && t("cordova"), r = function () {
        return device.landscape() ? (s("portrait"), t("landscape")) : (s("landscape"), t("portrait"))
    }, l = "onorientationchange"in window, a = l ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, r, !1) : window.attachEvent ? window.attachEvent(a, r) : window[a] = r, r()
}.call(this), function () {
    $(".scrollto").on("click", function (e) {
        var t;
        return e.preventDefault(), t = $($(this).attr("href")), $("html, body").animate({scrollTop: t.offset().top}, 500)
    }), $(function () {
        var e, t;
        if ($("@timer_container")[0])return e = $("@timer_container").FlipClock({
            clockFace: "HourlyCounter",
            autoStart: !1,
            callbacks: {
                stop: function () {
                    return $("#final-page")[0] ? void 0 : location.reload()
                }
            }
        }), t = parseInt($("@timer_container").data("remainingtime")), e.setTime(t), e.setCountdown(!0), e.start()
    })
}.call(this), function () {
    $(function () {
        return $("body").on("click", "@ya-target", function () {
            var e;
            return e = $(this).data("target"), "undefined" != typeof yaCounter28043865 && null !== yaCounter28043865 && "undefined" != typeof yaCounter28043865 && null !== yaCounter28043865 ? yaCounter28043865.reachGoal(e) : void 0
        })
    })
}.call(this), function () {
    this.Sharing = {
        pageuri: App.rootUrl, facebook: function (e, t) {
            var n;
            return n = e.url, this._share("http://www.facebook.com/sharer.php", {u: n}, t)
        }, twitter: function (e, t) {
            var n, i, r;
            return r = e.url, i = e.message, device.ios() ? (n = "twitter://post?message=" + encodeURI(i) + "%20" + r, window.location.replace(n), setTimeout(function () {
                return this._share("http://twitter.com/intent/tweet", {text: i, url: r}, t)
            }, 1), setTimeout(App.afterSharing, 10)) : this._share("http://twitter.com/intent/tweet", {
                text: i,
                url: r
            }, t)
        }, vkontakte: function (e, t) {
            var n, i, r, o, a;
            return o = e.title, a = e.url, r = e.message, i = e.image, device.ios() ? (n = "vk://vk.com/share.php?url=" + a + "&title=" + o + "&description=" + r + "&image=" + i, window.location.replace(n), setTimeout(function () {
                return this._share("http://vk.com/share.php", {url: a, title: o, description: r, image: i}, t)
            }, 1), setTimeout(App.afterSharing, 10)) : this._share("http://vk.com/share.php", {
                url: a,
                title: o,
                description: r,
                image: i
            }, t)
        }, google: function (e, t) {
            var n;
            return n = e.url, this._share("https://plus.google.com/share", {url: n}, t)
        }, fbCount: function () {
            return $.getJSON("http://graph.facebook.com/?id=" + this.pageuri, function (e) {
                return $("@fb_count").text(e.shares)
            })
        }, vkCount: function () {
            var e;
            return e = App.rootUrl, window.VK = {}, VK.Share = {}, VK.Share.count = function (e, t) {
                return $("@vk_count").text(t)
            }, $.getJSON("http://vkontakte.ru/share.php?act=count&index=1&url=" + this.pageuri + "&format=json&callback=?")
        }, twCount: function () {
            var e;
            return e = App.rootUrl, $.getJSON("http://urls.api.twitter.com/1/urls/count.json?url=" + this.pageuri + "&callback=?", function (e) {
                return $("@tw_count").text(e.count)
            })
        }, _share: function (e, t, n) {
            var i, r;
            return r = "" + e + "?" + $.param(t), this.window = window.open(r, "Sharing", "width=740,height=440"), i = this, clearInterval(this.interval), this.interval = setInterval(function () {
                return i.window.closed && (clearInterval(i.interval), n) ? n() : void 0
            }, 500)
        }
    }, $(function () {
        return window.App = window.App || {}, $(document).on("click", "@share", function () {
            var e, t;
            return e = $(this), t = e.data("network"), "function" == typeof Sharing[t] ? Sharing[t]({
                url: location.href,
                title: App.metaTags.title,
                message: App.metaTags.description,
                image: App.metaTags.vkontakte_image
            }) : void 0
        })
    })
}.call(this), function () {
    $(function () {
        var e, t, n, i, r, o, a, s, l, c, u;
        return t = "/promo/cities", $("body").on("click", "@start", function () {
            var e, n, i;
            for (n = 0; ;)if (n = App.cities[Math.floor(Math.random() * App.cities.length)].id, n !== App.selected_city.point.id)break;
            return e = {
                target_city_id: null != (i = App.selected_city.point.id) ? i : App.selected_city,
                random_city_id: n
            }, $.post("" + t + "/user_cities.json", {user_city: e}).done(function (e) {
                return window.location = "" + t + "/" + e.user_city.permalink
            }).fail(function (e) {
                return console.log(JSON.parse(e.responseText).error)
            }), !1
        }), a = function (e) {
            return $("html, body").animate({scrollTop: $(e).offset().top}, 400)
        }, $("body").on("click", "@start_vote", function () {
            var e;
            return $("@start_vote").hide(), $("@sharing_tags").addClass("show"), e = setInterval(function () {
                return Sharing.window && Sharing.window.closed ? (n(), clearInterval(e), setTimeout(function () {
                    return App.showEmailPopup = !0, l()
                }, 2e3)) : void 0
            }, 100)
        }), n = function () {
            var e;
            return e = {user_city: {permalink: App.permalink}}, $.post("" + t + "/user_cities/start_voting.json", e).done(function (e) {
                return i(e), $("@text_plus_one_vote").hide(), setTimeout(function () {
                    return $("@how_to_win, @game_beginnig").addClass("show").removeClass("hidden"), a("@game_beginnig")
                }, 1e3)
            })
        }, App.afterSharing = n, i = function (e) {
            var t;
            return t = $("@target_city_counter, @random_city_counter"), t.addClass("change_text"), $("@target_city_counter").html(e.user_city.target_city_counter), $("@random_city_counter").html(e.user_city.random_city_counter), setTimeout(function () {
                return t.removeClass("change_text")
            }, 500)
        }, c = function (e) {
            return c = {
                user_cities_id: App.user_city_id,
                is_target: e
            }, $.post("" + t + "/votes.json", {vote: c}).done(i)
        }, o = function () {
            return $("@vote_for_target, @vote_for_random").hide(), $("@join_us").show(), a("#join_us")
        }, $("body").on("click", "@vote_for_target", function () {
            return c(!0), setTimeout(o, 1e3)
        }), $("body").on("click", "@vote_for_random", function () {
            return c(!1), setTimeout(o, 1e3)
        }), $("body").on("click", "@save_email_button", function () {
            var e, n;
            return e = $($("@email")[0]).val(), 0 === e.length && (e = $($("@email")[1]).val()), n = {
                user: {email: e},
                permalink: App.permalink
            }, App.showEmailPopup = !1, $.ajax({
                type: "PUT",
                dataType: "json",
                url: "" + t + "/users.json",
                headers: {"X-HTTP-Method-Override": "PUT"},
                data: n
            }).done(function () {
                return r(), $("@save_email_requirement").hide(500)
            })
        }), $("body").on("click", "@request_url_input", function () {
            return this.setSelectionRange(0, this.value.length)
        }), device.mobile() || device.ios() || device.android() || device.windowsPhone() ? ($("@request_url_input").addClass("mobile"), $("@copy_button").hide()) : (u = new ZeroClipboard($("@copy_button")[0]), u.on("copy", function (e) {
            var t, n;
            return t = e.clipboardData, n = $("@request_url_input").val(), t.setData("text/plain", n)
        })), $("body").on("click", "@scroll_to_map", function () {
            return a("@main-map")
        }), $("@target_city_counter")[0] && setInterval(function () {
            var e;
            return e = "" + t + "/get_counts/" + App.permalink + ".json", $.post(e).done(function (e) {
                var t, n;
                return n = e.user_city, t = $("@target_city_counter").html() !== n.target_city_counter || $("@random_city_counter").html() !== n.random_city_counter, t ? i(e) : void 0
            })
        }, 3e4), e = $("@popup_email"), r = function () {
            return e.bPopup().close(), App.showEmailPopup = !1
        }, $("@popup_email @close").click(r), s = function () {
            return App.showEmailPopup ? (e.bPopup({
                onClose: function () {
                    return App.showEmailPopup = !1
                }
            }), App.showEmailPopup = !1) : void 0
        }, l = function () {
            return setTimeout(s, 5e3)
        }, l(), device.mobile() || device.tablet() || $(document).mouseleave(function (e) {
            return e.offsetY - $(window).scrollTop() < 0 && $(window).scrollTop() < 10 ? (e.preventDefault(), s()) : void 0
        }), $("body").on("click", "@email", function () {
            return App.showEmailPopup = !1
        })
    })
}.call(this), function (e, t) {
    "use strict";
    var n, i = e, r = i.document, o = i.navigator, a = i.setTimeout, s = i.encodeURIComponent, l = i.ActiveXObject, c = i.Number.parseInt || i.parseInt, u = i.Number.parseFloat || i.parseFloat, f = i.Number.isNaN || i.isNaN, d = i.Math.round, p = i.Date.now, h = i.Object.keys, m = i.Object.defineProperty, g = i.Object.prototype.hasOwnProperty, v = i.Array.prototype.slice, y = function (e) {
        return v.call(e, 0)
    }, b = function () {
        var e, n, i, r, o, a, s = y(arguments), l = s[0] || {};
        for (e = 1, n = s.length; n > e; e++)if (null != (i = s[e]))for (r in i)g.call(i, r) && (o = l[r], a = i[r], l !== a && a !== t && (l[r] = a));
        return l
    }, w = function (e) {
        var t, n, i, r;
        if ("object" != typeof e || null == e)t = e; else if ("number" == typeof e.length)for (t = [], n = 0, i = e.length; i > n; n++)g.call(e, n) && (t[n] = w(e[n])); else {
            t = {};
            for (r in e)g.call(e, r) && (t[r] = w(e[r]))
        }
        return t
    }, x = function (e, t) {
        for (var n = {}, i = 0, r = t.length; r > i; i++)t[i]in e && (n[t[i]] = e[t[i]]);
        return n
    }, C = function (e, t) {
        var n = {};
        for (var i in e)-1 === t.indexOf(i) && (n[i] = e[i]);
        return n
    }, k = function (e) {
        if (e)for (var t in e)g.call(e, t) && delete e[t];
        return e
    }, T = function (e, t) {
        if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument))do {
            if (e === t)return !0;
            e = e.parentNode
        } while (e);
        return !1
    }, F = {
        bridge: null,
        version: "0.0.0",
        pluginType: "unknown",
        disabled: null,
        outdated: null,
        unavailable: null,
        deactivated: null,
        overdue: null,
        ready: null
    }, S = "11.0.0", L = {}, D = {}, j = null, E = {
        ready: "Flash communication is established",
        error: {
            "flash-disabled": "Flash is disabled or not installed",
            "flash-outdated": "Flash is too outdated to support ZeroClipboard",
            "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
            "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
            "flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
        }
    }, N = function () {
        var e, t, n, i, o = "ZeroClipboard.swf";
        if (!r.currentScript || !(i = r.currentScript.src)) {
            var a = r.getElementsByTagName("script");
            if ("readyState"in a[0])for (e = a.length; e-- && ("interactive" !== a[e].readyState || !(i = a[e].src));); else if ("loading" === r.readyState)i = a[a.length - 1].src; else {
                for (e = a.length; e--;) {
                    if (n = a[e].src, !n) {
                        t = null;
                        break
                    }
                    if (n = n.split("#")[0].split("?")[0], n = n.slice(0, n.lastIndexOf("/") + 1), null == t)t = n; else if (t !== n) {
                        t = null;
                        break
                    }
                }
                null !== t && (i = t)
            }
        }
        return i && (i = i.split("#")[0].split("?")[0], o = i.slice(0, i.lastIndexOf("/") + 1) + o), o
    }(), A = {
        swfPath: N,
        trustedDomains: e.location.host ? [e.location.host] : [],
        cacheBust: !0,
        forceEnhancedClipboard: !1,
        flashLoadTimeout: 3e4,
        autoActivate: !0,
        bubbleEvents: !0,
        containerId: "global-zeroclipboard-html-bridge",
        containerClass: "global-zeroclipboard-container",
        swfObjectId: "global-zeroclipboard-flash-bridge",
        hoverClass: "zeroclipboard-is-hover",
        activeClass: "zeroclipboard-is-active",
        forceHandCursor: !1,
        title: null,
        zIndex: 999999999
    }, _ = function (e) {
        if ("object" == typeof e && null !== e)for (var t in e)if (g.call(e, t))if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t))A[t] = e[t]; else if (null == F.bridge)if ("containerId" === t || "swfObjectId" === t) {
            if (!Y(e[t]))throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
            A[t] = e[t]
        } else A[t] = e[t];
        {
            if ("string" != typeof e || !e)return w(A);
            if (g.call(A, e))return A[e]
        }
    }, $ = function () {
        return {
            browser: x(o, ["userAgent", "platform", "appName"]),
            flash: C(F, ["bridge"]),
            zeroclipboard: {version: kt.version, config: kt.config()}
        }
    }, O = function () {
        return !!(F.disabled || F.outdated || F.unavailable || F.deactivated)
    }, M = function (e, t) {
        var n, i, r, o = {};
        if ("string" == typeof e && e)r = e.toLowerCase().split(/\s+/); else if ("object" == typeof e && e && "undefined" == typeof t)for (n in e)g.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && kt.on(n, e[n]);
        if (r && r.length) {
            for (n = 0, i = r.length; i > n; n++)e = r[n].replace(/^on/, ""), o[e] = !0, L[e] || (L[e] = []), L[e].push(t);
            if (o.ready && F.ready && kt.emit({type: "ready"}), o.error) {
                var a = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                for (n = 0, i = a.length; i > n; n++)if (F[a[n]] === !0) {
                    kt.emit({type: "error", name: "flash-" + a[n]});
                    break
                }
            }
        }
        return kt
    }, H = function (e, t) {
        var n, i, r, o, a;
        if (0 === arguments.length)o = h(L); else if ("string" == typeof e && e)o = e.split(/\s+/); else if ("object" == typeof e && e && "undefined" == typeof t)for (n in e)g.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && kt.off(n, e[n]);
        if (o && o.length)for (n = 0, i = o.length; i > n; n++)if (e = o[n].toLowerCase().replace(/^on/, ""), a = L[e], a && a.length)if (t)for (r = a.indexOf(t); -1 !== r;)a.splice(r, 1), r = a.indexOf(t, r); else a.length = 0;
        return kt
    }, I = function (e) {
        var t;
        return t = "string" == typeof e && e ? w(L[e]) || null : w(L)
    }, P = function (e) {
        var t, n, i;
        return e = V(e), e && !tt(e) ? "ready" === e.type && F.overdue === !0 ? kt.emit({
            type: "error",
            name: "flash-overdue"
        }) : (t = b({}, e), et.call(this, t), "copy" === e.type && (i = st(D), n = i.data, j = i.formatMap), n) : void 0
    }, q = function () {
        if ("boolean" != typeof F.ready && (F.ready = !1), !kt.isFlashUnusable() && null === F.bridge) {
            var e = A.flashLoadTimeout;
            "number" == typeof e && e >= 0 && a(function () {
                "boolean" != typeof F.deactivated && (F.deactivated = !0), F.deactivated === !0 && kt.emit({
                    type: "error",
                    name: "flash-deactivated"
                })
            }, e), F.overdue = !1, ot()
        }
    }, R = function () {
        kt.clearData(), kt.blur(), kt.emit("destroy"), at(), kt.off()
    }, B = function (e, t) {
        var n;
        if ("object" == typeof e && e && "undefined" == typeof t)n = e, kt.clearData(); else {
            if ("string" != typeof e || !e)return;
            n = {}, n[e] = t
        }
        for (var i in n)"string" == typeof i && i && g.call(n, i) && "string" == typeof n[i] && n[i] && (D[i] = n[i])
    }, z = function (e) {
        "undefined" == typeof e ? (k(D), j = null) : "string" == typeof e && g.call(D, e) && delete D[e]
    }, W = function (e) {
        return "undefined" == typeof e ? w(D) : "string" == typeof e && g.call(D, e) ? D[e] : void 0
    }, X = function (e) {
        if (e && 1 === e.nodeType) {
            n && (mt(n, A.activeClass), n !== e && mt(n, A.hoverClass)), n = e, ht(e, A.hoverClass);
            var t = e.getAttribute("title") || A.title;
            if ("string" == typeof t && t) {
                var i = rt(F.bridge);
                i && i.setAttribute("title", t)
            }
            var r = A.forceHandCursor === !0 || "pointer" === gt(e, "cursor");
            wt(r), bt()
        }
    }, Q = function () {
        var e = rt(F.bridge);
        e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.top = "1px"), n && (mt(n, A.hoverClass), mt(n, A.activeClass), n = null)
    }, U = function () {
        return n || null
    }, Y = function (e) {
        return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
    }, V = function (e) {
        var t;
        if ("string" == typeof e && e ? (t = e, e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type), t) {
            b(e, {
                type: t.toLowerCase(),
                target: e.target || n || null,
                relatedTarget: e.relatedTarget || null,
                currentTarget: F && F.bridge || null,
                timeStamp: e.timeStamp || p() || null
            });
            var i = E[e.type];
            return "error" === e.type && e.name && i && (i = i[e.name]), i && (e.message = i), "ready" === e.type && b(e, {
                target: null,
                version: F.version
            }), "error" === e.type && (/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name) && b(e, {
                target: null,
                minimumVersion: S
            }), /^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name) && b(e, {version: F.version})), "copy" === e.type && (e.clipboardData = {
                setData: kt.setData,
                clearData: kt.clearData
            }), "aftercopy" === e.type && (e = lt(e, j)), e.target && !e.relatedTarget && (e.relatedTarget = G(e.target)), e = J(e)
        }
    }, G = function (e) {
        var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
        return t ? r.getElementById(t) : null
    }, J = function (e) {
        if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
            var n = e.target, o = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : t, a = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : t, s = yt(n), l = i.screenLeft || i.screenX || 0, c = i.screenTop || i.screenY || 0, u = r.body.scrollLeft + r.documentElement.scrollLeft, f = r.body.scrollTop + r.documentElement.scrollTop, d = s.left + ("number" == typeof e._stageX ? e._stageX : 0), p = s.top + ("number" == typeof e._stageY ? e._stageY : 0), h = d - u, m = p - f, g = l + h, v = c + m, y = "number" == typeof e.movementX ? e.movementX : 0, w = "number" == typeof e.movementY ? e.movementY : 0;
            delete e._stageX, delete e._stageY, b(e, {
                srcElement: n,
                fromElement: o,
                toElement: a,
                screenX: g,
                screenY: v,
                pageX: d,
                pageY: p,
                clientX: h,
                clientY: m,
                x: h,
                y: m,
                movementX: y,
                movementY: w,
                offsetX: 0,
                offsetY: 0,
                layerX: 0,
                layerY: 0
            })
        }
        return e
    }, K = function (e) {
        var t = e && "string" == typeof e.type && e.type || "";
        return !/^(?:(?:before)?copy|destroy)$/.test(t)
    }, Z = function (e, t, n, i) {
        i ? a(function () {
            e.apply(t, n)
        }, 0) : e.apply(t, n)
    }, et = function (e) {
        if ("object" == typeof e && e && e.type) {
            var t = K(e), n = L["*"] || [], r = L[e.type] || [], o = n.concat(r);
            if (o && o.length) {
                var a, s, l, c, u, f = this;
                for (a = 0, s = o.length; s > a; a++)l = o[a], c = f, "string" == typeof l && "function" == typeof i[l] && (l = i[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = b({}, e), Z(l, c, [u], t))
            }
            return this
        }
    }, tt = function (e) {
        var t = e.target || n || null, i = "swf" === e._source;
        delete e._source;
        var r = ["flash-disabled", "flash-outdated", "flash-unavailable", "flash-deactivated", "flash-overdue"];
        switch (e.type) {
            case"error":
                -1 !== r.indexOf(e.name) && b(F, {
                    disabled: "flash-disabled" === e.name,
                    outdated: "flash-outdated" === e.name,
                    unavailable: "flash-unavailable" === e.name,
                    deactivated: "flash-deactivated" === e.name,
                    overdue: "flash-overdue" === e.name,
                    ready: !1
                });
                break;
            case"ready":
                var o = F.deactivated === !0;
                b(F, {disabled: !1, outdated: !1, unavailable: !1, deactivated: !1, overdue: o, ready: !o});
                break;
            case"copy":
                var a, s, l = e.relatedTarget;
                !D["text/html"] && !D["text/plain"] && l && (s = l.value || l.outerHTML || l.innerHTML) && (a = l.value || l.textContent || l.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", a), s !== a && e.clipboardData.setData("text/html", s)) : !D["text/plain"] && e.target && (a = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", a));
                break;
            case"aftercopy":
                kt.clearData(), t && t !== pt() && t.focus && t.focus();
                break;
            case"_mouseover":
                kt.focus(t), A.bubbleEvents === !0 && i && (t && t !== e.relatedTarget && !T(e.relatedTarget, t) && nt(b({}, e, {
                    type: "mouseenter",
                    bubbles: !1,
                    cancelable: !1
                })), nt(b({}, e, {type: "mouseover"})));
                break;
            case"_mouseout":
                kt.blur(), A.bubbleEvents === !0 && i && (t && t !== e.relatedTarget && !T(e.relatedTarget, t) && nt(b({}, e, {
                    type: "mouseleave",
                    bubbles: !1,
                    cancelable: !1
                })), nt(b({}, e, {type: "mouseout"})));
                break;
            case"_mousedown":
                ht(t, A.activeClass), A.bubbleEvents === !0 && i && nt(b({}, e, {type: e.type.slice(1)}));
                break;
            case"_mouseup":
                mt(t, A.activeClass), A.bubbleEvents === !0 && i && nt(b({}, e, {type: e.type.slice(1)}));
                break;
            case"_click":
            case"_mousemove":
                A.bubbleEvents === !0 && i && nt(b({}, e, {type: e.type.slice(1)}))
        }
        return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type) ? !0 : void 0
    }, nt = function (e) {
        if (e && "string" == typeof e.type && e) {
            var t, n = e.target || null, o = n && n.ownerDocument || r, a = {
                view: o.defaultView || i,
                canBubble: !0,
                cancelable: !0,
                detail: "click" === e.type ? 1 : 0,
                button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : o.createEvent ? 0 : 1
            }, s = b(a, e);
            n && o.createEvent && n.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget], t = o.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, s), t._source = "js", n.dispatchEvent(t)))
        }
    }, it = function () {
        var e = r.createElement("div");
        return e.id = A.containerId, e.className = A.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + xt(A.zIndex), e
    }, rt = function (e) {
        for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode;)t = t.parentNode;
        return t || null
    }, ot = function () {
        var e, t = F.bridge, n = rt(t);
        if (!t) {
            var o = dt(i.location.host, A), a = "never" === o ? "none" : "all", s = ut(A), l = A.swfPath + ct(A.swfPath, A);
            n = it();
            var c = r.createElement("div");
            n.appendChild(c), r.body.appendChild(n);
            var u = r.createElement("div"), f = "activex" === F.pluginType;
            u.innerHTML = '<object id="' + A.swfObjectId + '" name="' + A.swfObjectId + '" width="100%" height="100%" ' + (f ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (f ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + o + '"/><param name="allowNetworking" value="' + a + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/></object>', t = u.firstChild, u = null, t.ZeroClipboard = kt, n.replaceChild(t, c)
        }
        return t || (t = r[A.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && n && (t = n.firstChild)), F.bridge = t || null, t
    }, at = function () {
        var e = F.bridge;
        if (e) {
            var t = rt(e);
            t && ("activex" === F.pluginType && "readyState"in e ? (e.style.display = "none", function n() {
                if (4 === e.readyState) {
                    for (var i in e)"function" == typeof e[i] && (e[i] = null);
                    e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
                } else a(n, 10)
            }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), F.ready = null, F.bridge = null, F.deactivated = null
        }
    }, st = function (e) {
        var t = {}, n = {};
        if ("object" == typeof e && e) {
            for (var i in e)if (i && g.call(e, i) && "string" == typeof e[i] && e[i])switch (i.toLowerCase()) {
                case"text/plain":
                case"text":
                case"air:text":
                case"flash:text":
                    t.text = e[i], n.text = i;
                    break;
                case"text/html":
                case"html":
                case"air:html":
                case"flash:html":
                    t.html = e[i], n.html = i;
                    break;
                case"application/rtf":
                case"text/rtf":
                case"rtf":
                case"richtext":
                case"air:rtf":
                case"flash:rtf":
                    t.rtf = e[i], n.rtf = i
            }
            return {data: t, formatMap: n}
        }
    }, lt = function (e, t) {
        if ("object" != typeof e || !e || "object" != typeof t || !t)return e;
        var n = {};
        for (var i in e)if (g.call(e, i)) {
            if ("success" !== i && "data" !== i) {
                n[i] = e[i];
                continue
            }
            n[i] = {};
            var r = e[i];
            for (var o in r)o && g.call(r, o) && g.call(t, o) && (n[i][t[o]] = r[o])
        }
        return n
    }, ct = function (e, t) {
        var n = null == t || t && t.cacheBust === !0;
        return n ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + p() : ""
    }, ut = function (e) {
        var t, n, r, o, a = "", l = [];
        if (e.trustedDomains && ("string" == typeof e.trustedDomains ? o = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length"in e.trustedDomains && (o = e.trustedDomains)), o && o.length)for (t = 0, n = o.length; n > t; t++)if (g.call(o, t) && o[t] && "string" == typeof o[t]) {
            if (r = ft(o[t]), !r)continue;
            if ("*" === r) {
                l.length = 0, l.push(r);
                break
            }
            l.push.apply(l, [r, "//" + r, i.location.protocol + "//" + r])
        }
        return l.length && (a += "trustedOrigins=" + s(l.join(","))), e.forceEnhancedClipboard === !0 && (a += (a ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof e.swfObjectId && e.swfObjectId && (a += (a ? "&" : "") + "swfObjectId=" + s(e.swfObjectId)), a
    }, ft = function (e) {
        if (null == e || "" === e)return null;
        if (e = e.replace(/^\s+|\s+$/g, ""), "" === e)return null;
        var t = e.indexOf("//");
        e = -1 === t ? e : e.slice(t + 2);
        var n = e.indexOf("/");
        return e = -1 === n ? e : -1 === t || 0 === n ? null : e.slice(0, n), e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
    }, dt = function () {
        var e = function (e) {
            var t, n, i, r = [];
            if ("string" == typeof e && (e = [e]), "object" != typeof e || !e || "number" != typeof e.length)return r;
            for (t = 0, n = e.length; n > t; t++)if (g.call(e, t) && (i = ft(e[t]))) {
                if ("*" === i) {
                    r.length = 0, r.push("*");
                    break
                }
                -1 === r.indexOf(i) && r.push(i)
            }
            return r
        };
        return function (t, n) {
            var i = ft(n.swfPath);
            null === i && (i = t);
            var r = e(n.trustedDomains), o = r.length;
            if (o > 0) {
                if (1 === o && "*" === r[0])return "always";
                if (-1 !== r.indexOf(t))return 1 === o && t === i ? "sameDomain" : "always"
            }
            return "never"
        }
    }(), pt = function () {
        try {
            return r.activeElement
        } catch (e) {
            return null
        }
    }, ht = function (e, t) {
        if (!e || 1 !== e.nodeType)return e;
        if (e.classList)return e.classList.contains(t) || e.classList.add(t), e;
        if (t && "string" == typeof t) {
            var n = (t || "").split(/\s+/);
            if (1 === e.nodeType)if (e.className) {
                for (var i = " " + e.className + " ", r = e.className, o = 0, a = n.length; a > o; o++)i.indexOf(" " + n[o] + " ") < 0 && (r += " " + n[o]);
                e.className = r.replace(/^\s+|\s+$/g, "")
            } else e.className = t
        }
        return e
    }, mt = function (e, t) {
        if (!e || 1 !== e.nodeType)return e;
        if (e.classList)return e.classList.contains(t) && e.classList.remove(t), e;
        if ("string" == typeof t && t) {
            var n = t.split(/\s+/);
            if (1 === e.nodeType && e.className) {
                for (var i = (" " + e.className + " ").replace(/[\n\t]/g, " "), r = 0, o = n.length; o > r; r++)i = i.replace(" " + n[r] + " ", " ");
                e.className = i.replace(/^\s+|\s+$/g, "")
            }
        }
        return e
    }, gt = function (e, t) {
        var n = i.getComputedStyle(e, null).getPropertyValue(t);
        return "cursor" !== t || n && "auto" !== n || "A" !== e.nodeName ? n : "pointer"
    }, vt = function () {
        var e, t, n, i = 1;
        return "function" == typeof r.body.getBoundingClientRect && (e = r.body.getBoundingClientRect(), t = e.right - e.left, n = r.body.offsetWidth, i = d(t / n * 100) / 100), i
    }, yt = function (e) {
        var t = {left: 0, top: 0, width: 0, height: 0};
        if (e.getBoundingClientRect) {
            var n, o, a, s = e.getBoundingClientRect();
            "pageXOffset"in i && "pageYOffset"in i ? (n = i.pageXOffset, o = i.pageYOffset) : (a = vt(), n = d(r.documentElement.scrollLeft / a), o = d(r.documentElement.scrollTop / a));
            var l = r.documentElement.clientLeft || 0, c = r.documentElement.clientTop || 0;
            t.left = s.left + n - l, t.top = s.top + o - c, t.width = "width"in s ? s.width : s.right - s.left, t.height = "height"in s ? s.height : s.bottom - s.top
        }
        return t
    }, bt = function () {
        var e;
        if (n && (e = rt(F.bridge))) {
            var t = yt(n);
            b(e.style, {
                width: t.width + "px",
                height: t.height + "px",
                top: t.top + "px",
                left: t.left + "px",
                zIndex: "" + xt(A.zIndex)
            })
        }
    }, wt = function (e) {
        F.ready === !0 && (F.bridge && "function" == typeof F.bridge.setHandCursor ? F.bridge.setHandCursor(e) : F.ready = !1)
    }, xt = function (e) {
        if (/^(?:auto|inherit)$/.test(e))return e;
        var t;
        return "number" != typeof e || f(e) ? "string" == typeof e && (t = xt(c(e, 10))) : t = e, "number" == typeof t ? t : "auto"
    }, Ct = function (e) {
        function t(e) {
            var t = e.match(/[\d]+/g);
            return t.length = 3, t.join(".")
        }

        function n(e) {
            return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
        }

        function i(e) {
            e && (l = !0, e.version && (d = t(e.version)), !d && e.description && (d = t(e.description)), e.filename && (f = n(e.filename)))
        }

        var r, a, s, l = !1, c = !1, f = !1, d = "";
        if (o.plugins && o.plugins.length)r = o.plugins["Shockwave Flash"], i(r), o.plugins["Shockwave Flash 2.0"] && (l = !0, d = "2.0.0.11"); else if (o.mimeTypes && o.mimeTypes.length)s = o.mimeTypes["application/x-shockwave-flash"], r = s && s.enabledPlugin, i(r); else if ("undefined" != typeof e) {
            c = !0;
            try {
                a = new e("ShockwaveFlash.ShockwaveFlash.7"), l = !0, d = t(a.GetVariable("$version"))
            } catch (p) {
                try {
                    a = new e("ShockwaveFlash.ShockwaveFlash.6"), l = !0, d = "6.0.21"
                } catch (h) {
                    try {
                        a = new e("ShockwaveFlash.ShockwaveFlash"), l = !0, d = t(a.GetVariable("$version"))
                    } catch (m) {
                        c = !1
                    }
                }
            }
        }
        F.disabled = l !== !0, F.outdated = d && u(d) < u(S), F.version = d || "0.0.0", F.pluginType = f ? "pepper" : c ? "activex" : l ? "netscape" : "unknown"
    };
    Ct(l);
    var kt = function () {
        return this instanceof kt ? void("function" == typeof kt._createClient && kt._createClient.apply(this, y(arguments))) : new kt
    };
    m(kt, "version", {value: "2.1.2", writable: !1, configurable: !0, enumerable: !0}), kt.config = function () {
        return _.apply(this, y(arguments))
    }, kt.state = function () {
        return $.apply(this, y(arguments))
    }, kt.isFlashUnusable = function () {
        return O.apply(this, y(arguments))
    }, kt.on = function () {
        return M.apply(this, y(arguments))
    }, kt.off = function () {
        return H.apply(this, y(arguments))
    }, kt.handlers = function () {
        return I.apply(this, y(arguments))
    }, kt.emit = function () {
        return P.apply(this, y(arguments))
    }, kt.create = function () {
        return q.apply(this, y(arguments))
    }, kt.destroy = function () {
        return R.apply(this, y(arguments))
    }, kt.setData = function () {
        return B.apply(this, y(arguments))
    }, kt.clearData = function () {
        return z.apply(this, y(arguments))
    }, kt.getData = function () {
        return W.apply(this, y(arguments))
    }, kt.focus = kt.activate = function () {
        return X.apply(this, y(arguments))
    }, kt.blur = kt.deactivate = function () {
        return Q.apply(this, y(arguments))
    }, kt.activeElement = function () {
        return U.apply(this, y(arguments))
    };
    var Tt = 0, Ft = {}, St = 0, Lt = {}, Dt = {};
    b(A, {autoActivate: !0});
    var jt = function (e) {
        var t = this;
        t.id = "" + Tt++, Ft[t.id] = {
            instance: t,
            elements: [],
            handlers: {}
        }, e && t.clip(e), kt.on("*", function (e) {
            return t.emit(e)
        }), kt.on("destroy", function () {
            t.destroy()
        }), kt.create()
    }, Et = function (e, t) {
        var n, i, r, o = {}, a = Ft[this.id] && Ft[this.id].handlers;
        if ("string" == typeof e && e)r = e.toLowerCase().split(/\s+/); else if ("object" == typeof e && e && "undefined" == typeof t)for (n in e)g.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.on(n, e[n]);
        if (r && r.length) {
            for (n = 0, i = r.length; i > n; n++)e = r[n].replace(/^on/, ""), o[e] = !0, a[e] || (a[e] = []), a[e].push(t);
            if (o.ready && F.ready && this.emit({type: "ready", client: this}), o.error) {
                var s = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                for (n = 0, i = s.length; i > n; n++)if (F[s[n]]) {
                    this.emit({type: "error", name: "flash-" + s[n], client: this});
                    break
                }
            }
        }
        return this
    }, Nt = function (e, t) {
        var n, i, r, o, a, s = Ft[this.id] && Ft[this.id].handlers;
        if (0 === arguments.length)o = h(s); else if ("string" == typeof e && e)o = e.split(/\s+/); else if ("object" == typeof e && e && "undefined" == typeof t)for (n in e)g.call(e, n) && "string" == typeof n && n && "function" == typeof e[n] && this.off(n, e[n]);
        if (o && o.length)for (n = 0, i = o.length; i > n; n++)if (e = o[n].toLowerCase().replace(/^on/, ""), a = s[e], a && a.length)if (t)for (r = a.indexOf(t); -1 !== r;)a.splice(r, 1), r = a.indexOf(t, r); else a.length = 0;
        return this
    }, At = function (e) {
        var t = null, n = Ft[this.id] && Ft[this.id].handlers;
        return n && (t = "string" == typeof e && e ? n[e] ? n[e].slice(0) : [] : w(n)), t
    }, _t = function (e) {
        if (It.call(this, e)) {
            "object" == typeof e && e && "string" == typeof e.type && e.type && (e = b({}, e));
            var t = b({}, V(e), {client: this});
            Pt.call(this, t)
        }
        return this
    }, $t = function (e) {
        e = qt(e);
        for (var t = 0; t < e.length; t++)if (g.call(e, t) && e[t] && 1 === e[t].nodeType) {
            e[t].zcClippingId ? -1 === Lt[e[t].zcClippingId].indexOf(this.id) && Lt[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + St++, Lt[e[t].zcClippingId] = [this.id], A.autoActivate === !0 && Rt(e[t]));
            var n = Ft[this.id] && Ft[this.id].elements;
            -1 === n.indexOf(e[t]) && n.push(e[t])
        }
        return this
    }, Ot = function (e) {
        var t = Ft[this.id];
        if (!t)return this;
        var n, i = t.elements;
        e = "undefined" == typeof e ? i.slice(0) : qt(e);
        for (var r = e.length; r--;)if (g.call(e, r) && e[r] && 1 === e[r].nodeType) {
            for (n = 0; -1 !== (n = i.indexOf(e[r], n));)i.splice(n, 1);
            var o = Lt[e[r].zcClippingId];
            if (o) {
                for (n = 0; -1 !== (n = o.indexOf(this.id, n));)o.splice(n, 1);
                0 === o.length && (A.autoActivate === !0 && Bt(e[r]), delete e[r].zcClippingId)
            }
        }
        return this
    }, Mt = function () {
        var e = Ft[this.id];
        return e && e.elements ? e.elements.slice(0) : []
    }, Ht = function () {
        this.unclip(), this.off(), delete Ft[this.id]
    }, It = function (e) {
        if (!e || !e.type)return !1;
        if (e.client && e.client !== this)return !1;
        var t = Ft[this.id] && Ft[this.id].elements, n = !!t && t.length > 0, i = !e.target || n && -1 !== t.indexOf(e.target), r = e.relatedTarget && n && -1 !== t.indexOf(e.relatedTarget), o = e.client && e.client === this;
        return i || r || o ? !0 : !1
    }, Pt = function (e) {
        if ("object" == typeof e && e && e.type) {
            var t = K(e), n = Ft[this.id] && Ft[this.id].handlers["*"] || [], r = Ft[this.id] && Ft[this.id].handlers[e.type] || [], o = n.concat(r);
            if (o && o.length) {
                var a, s, l, c, u, f = this;
                for (a = 0, s = o.length; s > a; a++)l = o[a], c = f, "string" == typeof l && "function" == typeof i[l] && (l = i[l]), "object" == typeof l && l && "function" == typeof l.handleEvent && (c = l, l = l.handleEvent), "function" == typeof l && (u = b({}, e), Z(l, c, [u], t))
            }
            return this
        }
    }, qt = function (e) {
        return "string" == typeof e && (e = []), "number" != typeof e.length ? [e] : e
    }, Rt = function (e) {
        if (e && 1 === e.nodeType) {
            var t = function (e) {
                (e || (e = i.event)) && ("js" !== e._source && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source)
            }, n = function (n) {
                (n || (n = i.event)) && (t(n), kt.focus(e))
            };
            e.addEventListener("mouseover", n, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), Dt[e.zcClippingId] = {
                mouseover: n,
                mouseout: t,
                mouseenter: t,
                mouseleave: t,
                mousemove: t
            }
        }
    }, Bt = function (e) {
        if (e && 1 === e.nodeType) {
            var t = Dt[e.zcClippingId];
            if ("object" == typeof t && t) {
                for (var n, i, r = ["move", "leave", "enter", "out", "over"], o = 0, a = r.length; a > o; o++)n = "mouse" + r[o], i = t[n], "function" == typeof i && e.removeEventListener(n, i, !1);
                delete Dt[e.zcClippingId]
            }
        }
    };
    kt._createClient = function () {
        jt.apply(this, y(arguments))
    }, kt.prototype.on = function () {
        return Et.apply(this, y(arguments))
    }, kt.prototype.off = function () {
        return Nt.apply(this, y(arguments))
    }, kt.prototype.handlers = function () {
        return At.apply(this, y(arguments))
    }, kt.prototype.emit = function () {
        return _t.apply(this, y(arguments))
    }, kt.prototype.clip = function () {
        return $t.apply(this, y(arguments))
    }, kt.prototype.unclip = function () {
        return Ot.apply(this, y(arguments))
    }, kt.prototype.elements = function () {
        return Mt.apply(this, y(arguments))
    }, kt.prototype.destroy = function () {
        return Ht.apply(this, y(arguments))
    }, kt.prototype.setText = function (e) {
        return kt.setData("text/plain", e), this
    }, kt.prototype.setHtml = function (e) {
        return kt.setData("text/html", e), this
    }, kt.prototype.setRichText = function (e) {
        return kt.setData("application/rtf", e), this
    }, kt.prototype.setData = function () {
        return kt.setData.apply(this, y(arguments)), this
    }, kt.prototype.clearData = function () {
        return kt.clearData.apply(this, y(arguments)), this
    }, kt.prototype.getData = function () {
        return kt.getData.apply(this, y(arguments))
    }, "function" == typeof define && define.amd ? define(function () {
        return kt
    }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = kt : e.ZeroClipboard = kt
}(function () {
    return this || window
}()), ZeroClipboard.config({swfPath: "http://www.aviasales.ru/promo/cities/assets/ZeroClipboard-5b06d92f439a674f4ea3a6d9703e563e.swf"});
var Base = function () {
};
Base.extend = function (e, t) {
    "use strict";
    var n = Base.prototype.extend;
    Base._prototyping = !0;
    var i = new this;
    n.call(i, e), i.base = function () {
    }, delete Base._prototyping;
    var r = i.constructor, o = i.constructor = function () {
        if (!Base._prototyping)if (this._constructing || this.constructor == o)this._constructing = !0, r.apply(this, arguments), delete this._constructing; else if (null !== arguments[0])return (arguments[0].extend || n).call(arguments[0], i)
    };
    return o.ancestor = this, o.extend = this.extend, o.forEach = this.forEach, o.implement = this.implement, o.prototype = i, o.toString = this.toString, o.valueOf = function (e) {
        return "object" == e ? o : r.valueOf()
    }, n.call(o, t), "function" == typeof o.init && o.init(), o
}, Base.prototype = {
    extend: function (e, t) {
        if (arguments.length > 1) {
            var n = this[e];
            if (n && "function" == typeof t && (!n.valueOf || n.valueOf() != t.valueOf()) && /\bbase\b/.test(t)) {
                var i = t.valueOf();
                t = function () {
                    var e = this.base || Base.prototype.base;
                    this.base = n;
                    var t = i.apply(this, arguments);
                    return this.base = e, t
                }, t.valueOf = function (e) {
                    return "object" == e ? t : i
                }, t.toString = Base.toString
            }
            this[e] = t
        } else if (e) {
            var r = Base.prototype.extend;
            Base._prototyping || "function" == typeof this || (r = this.extend || r);
            for (var o = {toSource: null}, a = ["constructor", "toString", "valueOf"], s = Base._prototyping ? 0 : 1; l = a[s++];)e[l] != o[l] && r.call(this, l, e[l]);
            for (var l in e)o[l] || r.call(this, l, e[l])
        }
        return this
    }
}, Base = Base.extend({
    constructor: function () {
        this.extend(arguments[0])
    }
}, {
    ancestor: Object, version: "1.1", forEach: function (e, t, n) {
        for (var i in e)void 0 === this.prototype[i] && t.call(n, e[i], i, e)
    }, implement: function () {
        for (var e = 0; e < arguments.length; e++)"function" == typeof arguments[e] ? arguments[e](this.prototype) : this.prototype.extend(arguments[e]);
        return this
    }, toString: function () {
        return String(this.valueOf())
    }
});
var FlipClock;
!function (e) {
    "use strict";
    FlipClock = function (e, t, n) {
        return t instanceof Object && t instanceof Date == !1 && (n = t, t = 0), new FlipClock.Factory(e, t, n)
    }, FlipClock.Lang = {}, FlipClock.Base = Base.extend({
        buildDate: "2014-12-12",
        version: "0.7.7",
        constructor: function (t, n) {
            "object" != typeof t && (t = {}), "object" != typeof n && (n = {}), this.setOptions(e.extend(!0, {}, t, n))
        },
        callback: function (e) {
            if ("function" == typeof e) {
                for (var t = [], n = 1; n <= arguments.length; n++)arguments[n] && t.push(arguments[n]);
                e.apply(this, t)
            }
        },
        log: function (e) {
            window.console && console.log && console.log(e)
        },
        getOption: function (e) {
            return this[e] ? this[e] : !1
        },
        getOptions: function () {
            return this
        },
        setOption: function (e, t) {
            this[e] = t
        },
        setOptions: function (e) {
            for (var t in e)"undefined" != typeof e[t] && this.setOption(t, e[t])
        }
    })
}(jQuery), function (e) {
    "use strict";
    FlipClock.Face = FlipClock.Base.extend({
        autoStart: !0, dividers: [], factory: !1, lists: [], constructor: function (e, t) {
            this.dividers = [], this.lists = [], this.base(t), this.factory = e
        }, build: function () {
            this.autoStart && this.start()
        }, createDivider: function (t, n, i) {
            "boolean" != typeof n && n || (i = n, n = t);
            var r = ['<span class="' + this.factory.classes.dot + ' top"></span>', '<span class="' + this.factory.classes.dot + ' bottom"></span>'].join("");
            i && (r = "");
            var o = ['<span class="' + this.factory.classes.divider + " " + (n ? n : "").toLowerCase() + '">', r, "</span>"], a = e(o.join(""));
            return this.dividers.push(a), a
        }, createList: function (e, t) {
            "object" == typeof e && (t = e, e = 0);
            var n = new FlipClock.List(this.factory, e, t);
            return this.lists.push(n), n
        }, reset: function () {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0, {minimumDigits: this.factory.minimumDigits}), this.flip(this.factory.original, !1)
        }, appendDigitToClock: function (e) {
            e.$el.append(!1)
        }, addDigit: function (e) {
            var t = this.createList(e, {
                classes: {
                    active: this.factory.classes.active,
                    before: this.factory.classes.before,
                    flip: this.factory.classes.flip
                }
            });
            this.appendDigitToClock(t)
        }, start: function () {
        }, stop: function () {
        }, autoIncrement: function () {
            this.factory.countdown ? this.decrement() : this.increment()
        }, increment: function () {
            this.factory.time.addSecond()
        }, decrement: function () {
            0 == this.factory.time.getTimeSeconds() ? this.factory.stop() : this.factory.time.subSecond()
        }, flip: function (t, n) {
            var i = this;
            e.each(t, function (e, t) {
                var r = i.lists[e];
                r ? (n || t == r.digit || r.play(), r.select(t)) : i.addDigit(t)
            })
        }
    })
}(jQuery), function (e) {
    "use strict";
    FlipClock.Factory = FlipClock.Base.extend({
        animationRate: 1e3,
        autoStart: !0,
        callbacks: {destroy: !1, create: !1, init: !1, interval: !1, start: !1, stop: !1, reset: !1},
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            divider: "flip-clock-divider",
            dot: "flip-clock-dot",
            label: "flip-clock-label",
            flip: "flip",
            play: "play",
            wrapper: "flip-clock-wrapper"
        },
        clockFace: "HourlyCounter",
        countdown: !1,
        defaultClockFace: "HourlyCounter",
        defaultLanguage: "english",
        $el: !1,
        face: !0,
        lang: !1,
        language: "english",
        minimumDigits: 0,
        original: !1,
        running: !1,
        time: !1,
        timer: !1,
        $wrapper: !1,
        constructor: function (t, n, i) {
            i || (i = {}), this.lists = [], this.running = !1, this.base(i), this.$el = e(t).addClass(this.classes.wrapper), this.$wrapper = this.$el, this.original = n instanceof Date ? n : n ? Math.round(n) : 0, this.time = new FlipClock.Time(this, this.original, {
                minimumDigits: this.minimumDigits,
                animationRate: this.animationRate
            }), this.timer = new FlipClock.Timer(this, i), this.loadLanguage(this.language), this.loadClockFace(this.clockFace, i), this.autoStart && this.start()
        },
        loadClockFace: function (e, t) {
            var n, i = "Face", r = !1;
            return e = e.ucfirst() + i, this.face.stop && (this.stop(), r = !0), this.$el.html(""), this.time.minimumDigits = this.minimumDigits, n = FlipClock[e] ? new FlipClock[e](this, t) : new FlipClock[this.defaultClockFace + i](this, t), n.build(), this.face = n, r && this.start(), this.face
        },
        loadLanguage: function (e) {
            var t;
            return t = FlipClock.Lang[e.ucfirst()] ? FlipClock.Lang[e.ucfirst()] : FlipClock.Lang[e] ? FlipClock.Lang[e] : FlipClock.Lang[this.defaultLanguage], this.lang = t
        },
        localize: function (e, t) {
            var n = this.lang;
            if (!e)return null;
            var i = e.toLowerCase();
            return "object" == typeof t && (n = t), n && n[i] ? n[i] : e
        },
        start: function (e) {
            var t = this;
            t.running || t.countdown && !(t.countdown && t.time.time > 0) ? t.log("Trying to start timer when countdown already at 0") : (t.face.start(t.time), t.timer.start(function () {
                t.flip(), "function" == typeof e && e()
            }))
        },
        stop: function (e) {
            this.face.stop(), this.timer.stop(e);
            for (var t in this.lists)this.lists.hasOwnProperty(t) && this.lists[t].stop()
        },
        reset: function (e) {
            this.timer.reset(e), this.face.reset()
        },
        setTime: function (e) {
            this.time.time = e, this.flip(!0)
        },
        getTime: function () {
            return this.time
        },
        setCountdown: function (e) {
            var t = this.running;
            this.countdown = e ? !0 : !1, t && (this.stop(), this.start())
        },
        flip: function (e) {
            this.face.flip(!1, e)
        }
    })
}(jQuery), function (e) {
    "use strict";
    FlipClock.List = FlipClock.Base.extend({
        digit: 0,
        classes: {active: "flip-clock-active", before: "flip-clock-before", flip: "flip"},
        factory: !1,
        $el: !1,
        $obj: !1,
        items: [],
        lastDigit: 0,
        constructor: function (e, t) {
            this.factory = e, this.digit = t, this.lastDigit = t, this.$el = this.createList(), this.$obj = this.$el, t > 0 && this.select(t), this.factory.$el.append(this.$el)
        },
        select: function (e) {
            if ("undefined" == typeof e ? e = this.digit : this.digit = e, this.digit != this.lastDigit) {
                var t = this.$el.find("." + this.classes.before).removeClass(this.classes.before);
                this.$el.find("." + this.classes.active).removeClass(this.classes.active).addClass(this.classes.before), this.appendListItem(this.classes.active, this.digit), t.remove(), this.lastDigit = this.digit
            }
        },
        play: function () {
            this.$el.addClass(this.factory.classes.play)
        },
        stop: function () {
            var e = this;
            setTimeout(function () {
                e.$el.removeClass(e.factory.classes.play)
            }, this.factory.timer.interval)
        },
        createListItem: function (e, t) {
            return ['<li class="' + (e ? e : "") + '">', '<a href="#">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + (t ? t : "") + "</div>", "</div>", '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + (t ? t : "") + "</div>", "</div>", "</a>", "</li>"].join("")
        },
        appendListItem: function (e, t) {
            var n = this.createListItem(e, t);
            this.$el.append(n)
        },
        createList: function () {
            var t = this.getPrevDigit() ? this.getPrevDigit() : this.digit, n = e(['<ul class="' + this.classes.flip + " " + (this.factory.running ? this.factory.classes.play : "") + '">', this.createListItem(this.classes.before, t), this.createListItem(this.classes.active, this.digit), "</ul>"].join(""));
            return n
        },
        getNextDigit: function () {
            return 9 == this.digit ? 0 : this.digit + 1
        },
        getPrevDigit: function () {
            return 0 == this.digit ? 9 : this.digit - 1
        }
    })
}(jQuery), function (e) {
    "use strict";
    String.prototype.ucfirst = function () {
        return this.substr(0, 1).toUpperCase() + this.substr(1)
    }, e.fn.FlipClock = function (t, n) {
        return new FlipClock(e(this), t, n)
    }, e.fn.flipClock = function (t, n) {
        return e.fn.FlipClock(t, n)
    }
}(jQuery), function (e) {
    "use strict";
    FlipClock.Time = FlipClock.Base.extend({
        time: 0, factory: !1, minimumDigits: 0, constructor: function (e, t, n) {
            "object" != typeof n && (n = {}), n.minimumDigits || (n.minimumDigits = e.minimumDigits), this.base(n), this.factory = e, t && (this.time = t)
        }, convertDigitsToArray: function (e) {
            var t = [];
            e = e.toString();
            for (var n = 0; n < e.length; n++)e[n].match(/^\d*$/g) && t.push(e[n]);
            return t
        }, digit: function (e) {
            var t = this.toString(), n = t.length;
            return t[n - e] ? t[n - e] : !1
        }, digitize: function (t) {
            var n = [];
            if (e.each(t, function (e, t) {
                    t = t.toString(), 1 == t.length && (t = "0" + t);
                    for (var i = 0; i < t.length; i++)n.push(t.charAt(i))
                }), n.length > this.minimumDigits && (this.minimumDigits = n.length), this.minimumDigits > n.length)for (var i = n.length; i < this.minimumDigits; i++)n.unshift("0");
            return n
        }, getDateObject: function () {
            return this.time instanceof Date ? this.time : new Date((new Date).getTime() + 1e3 * this.getTimeSeconds())
        }, getDayCounter: function (e) {
            var t = [this.getDays(), this.getHours(!0), this.getMinutes(!0)];
            return e && t.push(this.getSeconds(!0)), this.digitize(t)
        }, getDays: function (e) {
            var t = this.getTimeSeconds() / 60 / 60 / 24;
            return e && (t %= 7), Math.floor(t)
        }, getHourCounter: function () {
            var e = this.digitize([this.getHours(), this.getMinutes(!0), this.getSeconds(!0)]);
            return e
        }, getHourly: function () {
            return this.getHourCounter()
        }, getHours: function (e) {
            var t = this.getTimeSeconds() / 60 / 60;
            return e && (t %= 24), Math.floor(t)
        }, getMilitaryTime: function (e, t) {
            "undefined" == typeof t && (t = !0), e || (e = this.getDateObject());
            var n = [e.getHours(), e.getMinutes()];
            return t === !0 && n.push(e.getSeconds()), this.digitize(n)
        }, getMinutes: function (e) {
            var t = this.getTimeSeconds() / 60;
            return e && (t %= 60), Math.floor(t)
        }, getMinuteCounter: function () {
            var e = this.digitize([this.getMinutes(), this.getSeconds(!0)]);
            return e
        }, getTimeSeconds: function (e) {
            return e || (e = new Date), this.time instanceof Date ? this.factory.countdown ? Math.max(this.time.getTime() / 1e3 - e.getTime() / 1e3, 0) : e.getTime() / 1e3 - this.time.getTime() / 1e3 : this.time
        }, getTime: function (e, t) {
            "undefined" == typeof t && (t = !0), e || (e = this.getDateObject()), console.log(e);
            var n = e.getHours(), i = [n > 12 ? n - 12 : 0 === n ? 12 : n, e.getMinutes()];
            return t === !0 && i.push(e.getSeconds()), this.digitize(i)
        }, getSeconds: function (e) {
            var t = this.getTimeSeconds();
            return e && (60 == t ? t = 0 : t %= 60), Math.ceil(t)
        }, getWeeks: function (e) {
            var t = this.getTimeSeconds() / 60 / 60 / 24 / 7;
            return e && (t %= 52), Math.floor(t)
        }, removeLeadingZeros: function (t, n) {
            var i = 0, r = [];
            return e.each(n, function (e) {
                t > e ? i += parseInt(n[e], 10) : r.push(n[e])
            }), 0 === i ? r : n
        }, addSeconds: function (e) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() + e) : this.time += e
        }, addSecond: function () {
            this.addSeconds(1)
        }, subSeconds: function (e) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() - e) : this.time -= e
        }, subSecond: function () {
            this.subSeconds(1)
        }, toString: function () {
            return this.getTimeSeconds().toString()
        }
    })
}(jQuery), function () {
    "use strict";
    FlipClock.Timer = FlipClock.Base.extend({
        callbacks: {
            destroy: !1,
            create: !1,
            init: !1,
            interval: !1,
            start: !1,
            stop: !1,
            reset: !1
        }, count: 0, factory: !1, interval: 1e3, animationRate: 1e3, constructor: function (e, t) {
            this.base(t), this.factory = e, this.callback(this.callbacks.init), this.callback(this.callbacks.create)
        }, getElapsed: function () {
            return this.count * this.interval
        }, getElapsedTime: function () {
            return new Date(this.time + this.getElapsed())
        }, reset: function (e) {
            clearInterval(this.timer), this.count = 0, this._setInterval(e), this.callback(this.callbacks.reset)
        }, start: function (e) {
            this.factory.running = !0, this._createTimer(e), this.callback(this.callbacks.start)
        }, stop: function (e) {
            this.factory.running = !1, this._clearInterval(e), this.callback(this.callbacks.stop), this.callback(e)
        }, _clearInterval: function () {
            clearInterval(this.timer)
        }, _createTimer: function (e) {
            this._setInterval(e)
        }, _destroyTimer: function (e) {
            this._clearInterval(), this.timer = !1, this.callback(e), this.callback(this.callbacks.destroy)
        }, _interval: function (e) {
            this.callback(this.callbacks.interval), this.callback(e), this.count++
        }, _setInterval: function (e) {
            var t = this;
            t._interval(e), t.timer = setInterval(function () {
                t._interval(e)
            }, this.interval)
        }
    })
}(jQuery), function (e) {
    FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({
        constructor: function (e, t) {
            this.base(e, t)
        }, build: function (t) {
            var n = this, i = this.factory.$el.find("ul");
            this.factory.time.time || (this.factory.original = new Date, this.factory.time = new FlipClock.Time(this.factory, this.factory.original));
            var t = t ? t : this.factory.time.getMilitaryTime(!1, this.showSeconds);
            t.length > i.length && e.each(t, function (e, t) {
                n.createList(t)
            }), this.createDivider(), this.createDivider(), e(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el), e(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el), this.base()
        }, flip: function (e, t) {
            this.autoIncrement(), e = e ? e : this.factory.time.getMilitaryTime(!1, this.showSeconds), this.base(e, t)
        }
    })
}(jQuery), function (e) {
    FlipClock.CounterFace = FlipClock.Face.extend({
        shouldAutoIncrement: !1, constructor: function (e, t) {
            "object" != typeof t && (t = {}), e.autoStart = t.autoStart ? !0 : !1, t.autoStart && (this.shouldAutoIncrement = !0), e.increment = function () {
                e.countdown = !1, e.setTime(e.getTime().getTimeSeconds() + 1)
            }, e.decrement = function () {
                e.countdown = !0;
                var t = e.getTime().getTimeSeconds();
                t > 0 && e.setTime(t - 1)
            }, e.setValue = function (t) {
                e.setTime(t)
            }, e.setCounter = function (t) {
                e.setTime(t)
            }, this.base(e, t)
        }, build: function () {
            var t = this, n = this.factory.$el.find("ul"), i = this.factory.getTime().digitize([this.factory.getTime().time]);
            i.length > n.length && e.each(i, function (e, n) {
                var i = t.createList(n);
                i.select(n)
            }), e.each(this.lists, function (e, t) {
                t.play()
            }), this.base()
        }, flip: function (e, t) {
            this.shouldAutoIncrement && this.autoIncrement(), e || (e = this.factory.getTime().digitize([this.factory.getTime().time])), this.base(e, t)
        }, reset: function () {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0), this.flip()
        }
    })
}(jQuery), function (e) {
    FlipClock.DailyCounterFace = FlipClock.Face.extend({
        showSeconds: !0, constructor: function (e, t) {
            this.base(e, t)
        }, build: function (t) {
            var n = this, i = this.factory.$el.find("ul"), r = 0;
            t = t ? t : this.factory.time.getDayCounter(this.showSeconds), t.length > i.length && e.each(t, function (e, t) {
                n.createList(t)
            }), this.showSeconds ? e(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el) : r = 2, e(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4 + r].$el), e(this.createDivider("Hours")).insertBefore(this.lists[this.lists.length - 6 + r].$el), e(this.createDivider("Days", !0)).insertBefore(this.lists[0].$el), this.base()
        }, flip: function (e, t) {
            e || (e = this.factory.time.getDayCounter(this.showSeconds)), this.autoIncrement(), this.base(e, t)
        }
    })
}(jQuery), function (e) {
    FlipClock.HourlyCounterFace = FlipClock.Face.extend({
        constructor: function (e, t) {
            this.base(e, t)
        }, build: function (t, n) {
            var i = this, r = this.factory.$el.find("ul");
            n = n ? n : this.factory.time.getHourCounter(), n.length > r.length && e.each(n, function (e, t) {
                i.createList(t)
            }), e(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el), e(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4].$el), t || e(this.createDivider("Hours", !0)).insertBefore(this.lists[0].$el), this.base()
        }, flip: function (e, t) {
            e || (e = this.factory.time.getHourCounter()), this.autoIncrement(), this.base(e, t)
        }, appendDigitToClock: function (e) {
            this.base(e), this.dividers[0].insertAfter(this.dividers[0].next())
        }
    })
}(jQuery), function () {
    FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({
        clearExcessDigits: !1,
        constructor: function (e, t) {
            this.base(e, t)
        },
        build: function () {
            this.base(!0, this.factory.time.getMinuteCounter())
        },
        flip: function (e, t) {
            e || (e = this.factory.time.getMinuteCounter()), this.base(e, t)
        }
    })
}(jQuery), function (e) {
    FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
        meridium: !1,
        meridiumText: "AM",
        build: function () {
            var t = this.factory.time.getTime(!1, this.showSeconds);
            this.base(t), this.meridiumText = this.getMeridium(), this.meridium = e(['<ul class="flip-clock-meridium">', "<li>", '<a href="#">' + this.meridiumText + "</a>", "</li>", "</ul>"].join("")), this.meridium.insertAfter(this.lists[this.lists.length - 1].$el)
        },
        flip: function (e, t) {
            this.meridiumText != this.getMeridium() && (this.meridiumText = this.getMeridium(), this.meridium.find("a").html(this.meridiumText)), this.base(this.factory.time.getTime(!1, this.showSeconds), t)
        },
        getMeridium: function () {
            return (new Date).getHours() >= 12 ? "PM" : "AM"
        },
        isPM: function () {
            return "PM" == this.getMeridium() ? !0 : !1
        },
        isAM: function () {
            return "AM" == this.getMeridium() ? !0 : !1
        }
    })
}(jQuery), function () {
    FlipClock.Lang.Arabic = {
        years: "\u0633\u0646\u0648\u0627\u062a",
        months: "\u0634\u0647\u0648\u0631",
        days: "\u0623\u064a\u0627\u0645",
        hours: "\u0633\u0627\u0639\u0627\u062a",
        minutes: "\u062f\u0642\u0627\u0626\u0642",
        seconds: "\u062b\u0648\u0627\u0646\u064a"
    }, FlipClock.Lang.ar = FlipClock.Lang.Arabic, FlipClock.Lang["ar-ar"] = FlipClock.Lang.Arabic, FlipClock.Lang.arabic = FlipClock.Lang.Arabic
}(jQuery), function () {
    FlipClock.Lang.Danish = {
        years: "\xc5r",
        months: "M\xe5neder",
        days: "Dage",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.da = FlipClock.Lang.Danish, FlipClock.Lang["da-dk"] = FlipClock.Lang.Danish, FlipClock.Lang.danish = FlipClock.Lang.Danish
}(jQuery), function () {
    FlipClock.Lang.German = {
        years: "Jahre",
        months: "Monate",
        days: "Tage",
        hours: "Stunden",
        minutes: "Minuten",
        seconds: "Sekunden"
    }, FlipClock.Lang.de = FlipClock.Lang.German, FlipClock.Lang["de-de"] = FlipClock.Lang.German, FlipClock.Lang.german = FlipClock.Lang.German
}(jQuery), function () {
    FlipClock.Lang.English = {
        years: "Years",
        months: "Months",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
    }, FlipClock.Lang.en = FlipClock.Lang.English, FlipClock.Lang["en-us"] = FlipClock.Lang.English, FlipClock.Lang.english = FlipClock.Lang.English
}(jQuery), function () {
    FlipClock.Lang.Spanish = {
        years: "A&#241;os",
        months: "Meses",
        days: "D&#205;as",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundo"
    }, FlipClock.Lang.es = FlipClock.Lang.Spanish, FlipClock.Lang["es-es"] = FlipClock.Lang.Spanish, FlipClock.Lang.spanish = FlipClock.Lang.Spanish
}(jQuery), function () {
    FlipClock.Lang.Finnish = {
        years: "Vuotta",
        months: "Kuukautta",
        days: "P\xe4iv\xe4\xe4",
        hours: "Tuntia",
        minutes: "Minuuttia",
        seconds: "Sekuntia"
    }, FlipClock.Lang.fi = FlipClock.Lang.Finnish, FlipClock.Lang["fi-fi"] = FlipClock.Lang.Finnish, FlipClock.Lang.finnish = FlipClock.Lang.Finnish
}(jQuery), function () {
    FlipClock.Lang.French = {
        years: "Ans",
        months: "Mois",
        days: "Jours",
        hours: "Heures",
        minutes: "Minutes",
        seconds: "Secondes"
    }, FlipClock.Lang.fr = FlipClock.Lang.French, FlipClock.Lang["fr-ca"] = FlipClock.Lang.French, FlipClock.Lang.french = FlipClock.Lang.French
}(jQuery), function () {
    FlipClock.Lang.Italian = {
        years: "Anni",
        months: "Mesi",
        days: "Giorni",
        hours: "Ore",
        minutes: "Minuti",
        seconds: "Secondi"
    }, FlipClock.Lang.it = FlipClock.Lang.Italian, FlipClock.Lang["it-it"] = FlipClock.Lang.Italian, FlipClock.Lang.italian = FlipClock.Lang.Italian
}(jQuery), function () {
    FlipClock.Lang.Latvian = {
        years: "Gadi",
        months: "M\u0113ne\u0161i",
        days: "Dienas",
        hours: "Stundas",
        minutes: "Min\u016btes",
        seconds: "Sekundes"
    }, FlipClock.Lang.lv = FlipClock.Lang.Latvian, FlipClock.Lang["lv-lv"] = FlipClock.Lang.Latvian, FlipClock.Lang.latvian = FlipClock.Lang.Latvian
}(jQuery), function () {
    FlipClock.Lang.Dutch = {
        years: "Jaren",
        months: "Maanden",
        days: "Dagen",
        hours: "Uren",
        minutes: "Minuten",
        seconds: "Seconden"
    }, FlipClock.Lang.nl = FlipClock.Lang.Dutch, FlipClock.Lang["nl-be"] = FlipClock.Lang.Dutch, FlipClock.Lang.dutch = FlipClock.Lang.Dutch
}(jQuery), function () {
    FlipClock.Lang.Norwegian = {
        years: "\xc5r",
        months: "M\xe5neder",
        days: "Dager",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.no = FlipClock.Lang.Norwegian, FlipClock.Lang.nb = FlipClock.Lang.Norwegian, FlipClock.Lang["no-nb"] = FlipClock.Lang.Norwegian, FlipClock.Lang.norwegian = FlipClock.Lang.Norwegian
}(jQuery), function () {
    FlipClock.Lang.Portuguese = {
        years: "Anos",
        months: "Meses",
        days: "Dias",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos"
    }, FlipClock.Lang.pt = FlipClock.Lang.Portuguese, FlipClock.Lang["pt-br"] = FlipClock.Lang.Portuguese, FlipClock.Lang.portuguese = FlipClock.Lang.Portuguese
}(jQuery), function () {
    FlipClock.Lang.Russian = {
        years: "\u043b\u0435\u0442",
        months: "\u043c\u0435\u0441\u044f\u0446\u0435\u0432",
        days: "\u0434\u043d\u0435\u0439",
        hours: "\u0447\u0430\u0441\u043e\u0432",
        minutes: "\u043c\u0438\u043d\u0443\u0442",
        seconds: "\u0441\u0435\u043a\u0443\u043d\u0434"
    }, FlipClock.Lang.ru = FlipClock.Lang.Russian, FlipClock.Lang["ru-ru"] = FlipClock.Lang.Russian, FlipClock.Lang.russian = FlipClock.Lang.Russian
}(jQuery), function () {
    FlipClock.Lang.Swedish = {
        years: "\xc5r",
        months: "M\xe5nader",
        days: "Dagar",
        hours: "Timmar",
        minutes: "Minuter",
        seconds: "Sekunder"
    }, FlipClock.Lang.sv = FlipClock.Lang.Swedish, FlipClock.Lang["sv-se"] = FlipClock.Lang.Swedish, FlipClock.Lang.swedish = FlipClock.Lang.Swedish
}(jQuery), function () {
    FlipClock.Lang.Chinese = {
        years: "\u5e74",
        months: "\u6708",
        days: "\u65e5",
        hours: "\u65f6",
        minutes: "\u5206",
        seconds: "\u79d2"
    }, FlipClock.Lang.zh = FlipClock.Lang.Chinese, FlipClock.Lang["zh-cn"] = FlipClock.Lang.Chinese, FlipClock.Lang.chinese = FlipClock.Lang.Chinese
}(jQuery), function (e) {
    "use strict";
    e.fn.bPopup = function (t, n) {
        function i() {
            m(w.onOpen), R = (O.data("bPopup") || 0) + 1, x = I + R + "__", k = "auto" !== w.position[1], T = "auto" !== w.position[0], F = "fixed" === w.positionStyle, D = A.outerHeight(!0), j = A.outerWidth(!0), w.loadUrl ? r() : o()
        }

        function r() {
            switch (w.contentContainer = e(w.contentContainer || A), w.content) {
                case"iframe":
                    var t = e('<iframe class="b-iframe" ' + w.iframeAttr + "></iframe>");
                    t.appendTo(w.contentContainer), D = A.outerHeight(!0), j = A.outerWidth(!0), o(), t.attr("src", w.loadUrl), m(w.loadCallback);
                    break;
                case"image":
                    o(), e("<img />").load(function () {
                        m(w.loadCallback), l(e(this))
                    }).attr("src", w.loadUrl).hide().appendTo(w.contentContainer);
                    break;
                default:
                    o(), e('<div class="b-ajax-wrapper"></div>').load(w.loadUrl, w.loadData, function (t, n) {
                        m(w.loadCallback, n), l(e(this))
                    }).hide().appendTo(w.contentContainer)
            }
        }

        function o() {
            w.modal && e('<div class="b-modal ' + x + '"></div>').css({
                backgroundColor: w.modalColor,
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0,
                zIndex: w.zIndex + R
            }).appendTo(w.appendTo).fadeTo(w.speed, w.opacity), g(), A.data("bPopup", w).data("id", x).css({
                left: "slideIn" == w.transition || "slideBack" == w.transition ? "slideBack" == w.transition ? _.scrollLeft() + H : -1 * (L + j) : p(!(!w.follow[0] && T || F)),
                position: w.positionStyle || "absolute",
                top: "slideDown" == w.transition || "slideUp" == w.transition ? "slideUp" == w.transition ? _.scrollTop() + M : S + -1 * D : h(!(!w.follow[1] && k || F)),
                "z-index": w.zIndex + R + 1
            }).each(function () {
                w.appending && e(this).appendTo(w.appendTo)
            }), f(!0)
        }

        function a() {
            return w.modal && e(".b-modal." + A.data("id")).fadeTo(w.speed, 0, function () {
                e(this).remove()
            }), u(), clearTimeout(N), f(), !1
        }

        function s(t) {
            M = y(), H = b(), C = v(), C && (clearTimeout(E), E = setTimeout(function () {
                g(), t = t || w.followSpeed, A.dequeue().each(function () {
                    F ? e(this).css({left: L, top: S}) : e(this).animate({
                        left: w.follow[0] ? p(!0) : "auto",
                        top: w.follow[1] ? h(!0) : "auto"
                    }, t, w.followEasing)
                })
            }, 50))
        }

        function l(e) {
            var t = e.width(), n = e.height(), i = {};
            w.contentContainer.css({
                height: n,
                width: t
            }), n >= A.height() && (i.height = A.height()), t >= A.width() && (i.width = A.width()), D = A.outerHeight(!0), j = A.outerWidth(!0), g(), w.contentContainer.css({
                height: "auto",
                width: "auto"
            }), i.left = p(!(!w.follow[0] && T || F)), i.top = h(!(!w.follow[1] && k || F)), A.animate(i, 250, function () {
                e.show(), C = v()
            })
        }

        function c() {
            O.data("bPopup", R), A.delegate(".bClose, ." + w.closeClass, "click." + x, a), w.modalClose && e(".b-modal." + x).css("cursor", "pointer").bind("click", a), P || !w.follow[0] && !w.follow[1] || O.bind("scroll." + x, function () {
                C && A.dequeue().animate({
                    left: w.follow[0] ? p(!F) : "auto",
                    top: w.follow[1] ? h(!F) : "auto"
                }, w.followSpeed, w.followEasing)
            }).bind("resize." + x, function () {
                s()
            }), w.escClose && _.bind("keydown." + x, function (e) {
                27 == e.which && a()
            })
        }

        function u() {
            w.scrollBar || e("html").css("overflow", "auto"), e(".b-modal." + x).unbind("click"), _.unbind("keydown." + x), O.unbind("." + x).data("bPopup", O.data("bPopup") - 1 > 0 ? O.data("bPopup") - 1 : null), A.undelegate(".bClose, ." + w.closeClass, "click." + x, a).data("bPopup", null)
        }

        function f(e) {
            function t(t) {
                A.css({display: "block", opacity: 1}).animate(t, w.speed, w.easing, function () {
                    d(e)
                })
            }

            switch (e ? w.transition : w.transitionClose || w.transition) {
                case"slideIn":
                    t({left: e ? p(!(!w.follow[0] && T || F)) : _.scrollLeft() - (j || A.outerWidth(!0)) - q});
                    break;
                case"slideBack":
                    t({left: e ? p(!(!w.follow[0] && T || F)) : _.scrollLeft() + H + q});
                    break;
                case"slideDown":
                    t({top: e ? h(!(!w.follow[1] && k || F)) : _.scrollTop() - (D || A.outerHeight(!0)) - q});
                    break;
                case"slideUp":
                    t({top: e ? h(!(!w.follow[1] && k || F)) : _.scrollTop() + M + q});
                    break;
                default:
                    A.stop().fadeTo(w.speed, e ? 1 : 0, function () {
                        d(e)
                    })
            }
        }

        function d(e) {
            e ? (c(), m(n), w.autoClose && (N = setTimeout(a, w.autoClose))) : (A.hide(), m(w.onClose), w.loadUrl && (w.contentContainer.empty(), A.css({
                height: "auto",
                width: "auto"
            })))
        }

        function p(e) {
            return e ? L + _.scrollLeft() : L
        }

        function h(e) {
            return e ? S + _.scrollTop() : S
        }

        function m(t, n) {
            e.isFunction(t) && t.call(A, n)
        }

        function g() {
            S = k ? w.position[1] : Math.max(0, (M - A.outerHeight(!0)) / 2 - w.amsl), L = T ? w.position[0] : (H - A.outerWidth(!0)) / 2, C = v()
        }

        function v() {
            return M > A.outerHeight(!0) && H > A.outerWidth(!0)
        }

        function y() {
            return $.innerHeight || O.height()
        }

        function b() {
            return $.innerWidth || O.width()
        }

        e.isFunction(t) && (n = t, t = null);
        var w = e.extend({}, e.fn.bPopup.defaults, t);
        w.scrollBar || e("html").css("overflow", "hidden");
        var x, C, k, T, F, S, L, D, j, E, N, A = this, _ = e(document), $ = window, O = e($), M = y(), H = b(), I = "__b-popup", P = /OS 6(_\d)+/i.test(navigator.userAgent), q = 200, R = 0;
        return A.close = function () {
            a()
        }, A.reposition = function (e) {
            s(e)
        }, A.each(function () {
            e(this).data("bPopup") || i()
        })
    }, e.fn.bPopup.defaults = {
        amsl: 50,
        appending: !0,
        appendTo: "body",
        autoClose: !1,
        closeClass: "b-close",
        content: "ajax",
        contentContainer: !1,
        easing: "swing",
        escClose: !0,
        follow: [!0, !0],
        followEasing: "swing",
        followSpeed: 500,
        iframeAttr: 'scrolling="no" frameborder="0"',
        loadCallback: !1,
        loadData: !1,
        loadUrl: !1,
        modal: !0,
        modalClose: !0,
        modalColor: "#000",
        onClose: !1,
        onOpen: !1,
        opacity: .7,
        position: ["auto", "auto"],
        positionStyle: "absolute",
        scrollBar: !0,
        speed: 250,
        transition: "fadeIn",
        transitionClose: !1,
        zIndex: 9997
    }
}(jQuery), function () {
    $(function () {
        return $("@popup_rules @close").click(function () {
            return $("@popup_rules").bPopup().close()
        }), $("@rules").click(function () {
            return $("@popup_rules").bPopup()
        })
    })
}.call(this);