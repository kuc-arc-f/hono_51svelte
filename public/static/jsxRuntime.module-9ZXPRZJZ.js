var W, p, a_, S, Z, p_, I, P = {}, J = [], k_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, K = Array.isArray;
function H(e, _) {
  for (var t in _)
    e[t] = _[t];
  return e;
}
function h_(e) {
  var _ = e.parentNode;
  _ && _.removeChild(e);
}
function b_(e, _, t) {
  var n, r, i, u = {};
  for (i in _)
    i == "key" ? n = _[i] : i == "ref" ? r = _[i] : u[i] = _[i];
  if (arguments.length > 2 && (u.children = arguments.length > 3 ? W.call(arguments, 2) : t), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      u[i] === void 0 && (u[i] = e.defaultProps[i]);
  return U(e, u, n, r, null);
}
function U(e, _, t, n, r) {
  var i = { type: e, props: _, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: r ?? ++a_, __i: -1, __u: 0 };
  return r == null && p.vnode != null && p.vnode(i), i;
}
function V(e) {
  return e.children;
}
function A(e, _) {
  this.props = e, this.context = _;
}
function x(e, _) {
  if (_ == null)
    return e.__ ? x(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++)
    if ((t = e.__k[_]) != null && t.__e != null)
      return t.__e;
  return typeof e.type == "function" ? x(e) : null;
}
function $_(e, _, t) {
  var n, r = e.__v, i = r.__e, u = e.__P;
  if (u)
    return (n = H({}, r)).__v = r.__v + 1, p.vnode && p.vnode(n), Q(u, n, r, e.__n, u.ownerSVGElement !== void 0, 32 & r.__u ? [i] : null, _, i ?? x(r), !!(32 & r.__u), t), n.__v = r.__v, n.__.__k[n.__i] = n, n.__d = void 0, n.__e != i && d_(n), n;
}
function d_(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
      if ((t = e.__k[_]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return d_(e);
  }
}
function __(e) {
  (!e.__d && (e.__d = !0) && S.push(e) && !M.__r++ || Z !== p.debounceRendering) && ((Z = p.debounceRendering) || p_)(M);
}
function M() {
  var e, _, t, n = [], r = [];
  for (S.sort(I); e = S.shift(); )
    e.__d && (t = S.length, _ = $_(e, n, r) || _, t === 0 || S.length > t ? (R(n, _, r), r.length = n.length = 0, _ = void 0, S.sort(I)) : _ && p.__c && p.__c(_, J));
  _ && R(n, _, r), M.__r = 0;
}
function v_(e, _, t, n, r, i, u, f, c, l, a) {
  var o, h, s, m, $, g = n && n.__k || J, d = _.length;
  for (t.__d = c, w_(t, _, g), c = t.__d, o = 0; o < d; o++)
    (s = t.__k[o]) != null && typeof s != "boolean" && typeof s != "function" && (h = s.__i === -1 ? P : g[s.__i] || P, s.__i = o, Q(e, s, h, r, i, u, f, c, l, a), m = s.__e, s.ref && h.ref != s.ref && (h.ref && X(h.ref, null, s), a.push(s.ref, s.__c || m, s)), $ == null && m != null && ($ = m), 65536 & s.__u || h.__k === s.__k ? c = y_(s, c, e) : typeof s.type == "function" && s.__d !== void 0 ? c = s.__d : m && (c = m.nextSibling), s.__d = void 0, s.__u &= -196609);
  t.__d = c, t.__e = $;
}
function w_(e, _, t) {
  var n, r, i, u, f, c = _.length, l = t.length, a = l, o = 0;
  for (e.__k = [], n = 0; n < c; n++)
    u = n + o, (r = e.__k[n] = (r = _[n]) == null || typeof r == "boolean" || typeof r == "function" ? null : typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? U(null, r, null, null, null) : K(r) ? U(V, { children: r }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? U(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) != null ? (r.__ = e, r.__b = e.__b + 1, f = H_(r, t, u, a), r.__i = f, i = null, f !== -1 && (a--, (i = t[f]) && (i.__u |= 131072)), i == null || i.__v === null ? (f == -1 && o--, typeof r.type != "function" && (r.__u |= 65536)) : f !== u && (f === u + 1 ? o++ : f > u ? a > c - u ? o += f - u : o-- : f < u ? f == u - 1 && (o = f - u) : o = 0, f !== n + o && (r.__u |= 65536))) : (i = t[u]) && i.key == null && i.__e && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = x(i)), j(i, i, !1), t[u] = null, a--);
  if (a)
    for (n = 0; n < l; n++)
      (i = t[n]) != null && !(131072 & i.__u) && (i.__e == e.__d && (e.__d = x(i)), j(i, i));
}
function y_(e, _, t) {
  var n, r;
  if (typeof e.type == "function") {
    for (n = e.__k, r = 0; n && r < n.length; r++)
      n[r] && (n[r].__ = e, _ = y_(n[r], _, t));
    return _;
  }
  e.__e != _ && (t.insertBefore(e.__e, _ || null), _ = e.__e);
  do
    _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function H_(e, _, t, n) {
  var r = e.key, i = e.type, u = t - 1, f = t + 1, c = _[t];
  if (c === null || c && r == c.key && i === c.type && !(131072 & c.__u))
    return t;
  if (n > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; u >= 0 || f < _.length; ) {
      if (u >= 0) {
        if ((c = _[u]) && !(131072 & c.__u) && r == c.key && i === c.type)
          return u;
        u--;
      }
      if (f < _.length) {
        if ((c = _[f]) && !(131072 & c.__u) && r == c.key && i === c.type)
          return f;
        f++;
      }
    }
  return -1;
}
function e_(e, _, t) {
  _[0] === "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || k_.test(_) ? t : t + "px";
}
function D(e, _, t, n, r) {
  var i;
  _:
    if (_ === "style")
      if (typeof t == "string")
        e.style.cssText = t;
      else {
        if (typeof n == "string" && (e.style.cssText = n = ""), n)
          for (_ in n)
            t && _ in t || e_(e.style, _, "");
        if (t)
          for (_ in t)
            n && t[_] === n[_] || e_(e.style, _, t[_]);
      }
    else if (_[0] === "o" && _[1] === "n")
      i = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1")), _ = _.toLowerCase() in e ? _.toLowerCase().slice(2) : _.slice(2), e.l || (e.l = {}), e.l[_ + i] = t, t ? n ? t.u = n.u : (t.u = Date.now(), e.addEventListener(_, i ? n_ : t_, i)) : e.removeEventListener(_, i ? n_ : t_, i);
    else {
      if (r)
        _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (_ !== "width" && _ !== "height" && _ !== "href" && _ !== "list" && _ !== "form" && _ !== "tabIndex" && _ !== "download" && _ !== "rowSpan" && _ !== "colSpan" && _ !== "role" && _ in e)
        try {
          e[_] = t ?? "";
          break _;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, t));
    }
}
function t_(e) {
  if (this.l) {
    var _ = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= _.u)
        return;
    } else
      e.t = Date.now();
    return _(p.event ? p.event(e) : e);
  }
}
function n_(e) {
  if (this.l)
    return this.l[e.type + !0](p.event ? p.event(e) : e);
}
function Q(e, _, t, n, r, i, u, f, c, l) {
  var a, o, h, s, m, $, g, d, k, w, C, E, Y, N, B, b = _.type;
  if (_.constructor !== void 0)
    return null;
  128 & t.__u && (c = !!(32 & t.__u), i = [f = _.__e = t.__e]), (a = p.__b) && a(_);
  _:
    if (typeof b == "function")
      try {
        if (d = _.props, k = (a = b.contextType) && n[a.__c], w = a ? k ? k.props.value : a.__ : n, t.__c ? g = (o = _.__c = t.__c).__ = o.__E : ("prototype" in b && b.prototype.render ? _.__c = o = new b(d, w) : (_.__c = o = new A(d, w), o.constructor = b, o.render = x_), k && k.sub(o), o.props = d, o.state || (o.state = {}), o.context = w, o.__n = n, h = o.__d = !0, o.__h = [], o._sb = []), o.__s == null && (o.__s = o.state), b.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = H({}, o.__s)), H(o.__s, b.getDerivedStateFromProps(d, o.__s))), s = o.props, m = o.state, o.__v = _, h)
          b.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), o.componentDidMount != null && o.__h.push(o.componentDidMount);
        else {
          if (b.getDerivedStateFromProps == null && d !== s && o.componentWillReceiveProps != null && o.componentWillReceiveProps(d, w), !o.__e && (o.shouldComponentUpdate != null && o.shouldComponentUpdate(d, o.__s, w) === !1 || _.__v === t.__v)) {
            for (_.__v !== t.__v && (o.props = d, o.state = o.__s, o.__d = !1), _.__e = t.__e, _.__k = t.__k, _.__k.forEach(function(T) {
              T && (T.__ = _);
            }), C = 0; C < o._sb.length; C++)
              o.__h.push(o._sb[C]);
            o._sb = [], o.__h.length && u.push(o);
            break _;
          }
          o.componentWillUpdate != null && o.componentWillUpdate(d, o.__s, w), o.componentDidUpdate != null && o.__h.push(function() {
            o.componentDidUpdate(s, m, $);
          });
        }
        if (o.context = w, o.props = d, o.__P = e, o.__e = !1, E = p.__r, Y = 0, "prototype" in b && b.prototype.render) {
          for (o.state = o.__s, o.__d = !1, E && E(_), a = o.render(o.props, o.state, o.context), N = 0; N < o._sb.length; N++)
            o.__h.push(o._sb[N]);
          o._sb = [];
        } else
          do
            o.__d = !1, E && E(_), a = o.render(o.props, o.state, o.context), o.state = o.__s;
          while (o.__d && ++Y < 25);
        o.state = o.__s, o.getChildContext != null && (n = H(H({}, n), o.getChildContext())), h || o.getSnapshotBeforeUpdate == null || ($ = o.getSnapshotBeforeUpdate(s, m)), v_(e, K(B = a != null && a.type === V && a.key == null ? a.props.children : a) ? B : [B], _, t, n, r, i, u, f, c, l), o.base = _.__e, _.__u &= -161, o.__h.length && u.push(o), g && (o.__E = o.__ = null);
      } catch (T) {
        _.__v = null, c || i != null ? (_.__e = f, _.__u |= c ? 160 : 32, i[i.indexOf(f)] = null) : (_.__e = t.__e, _.__k = t.__k), p.__e(T, _, t);
      }
    else
      i == null && _.__v === t.__v ? (_.__k = t.__k, _.__e = t.__e) : _.__e = S_(t.__e, _, t, n, r, i, u, c, l);
  (a = p.diffed) && a(_);
}
function R(e, _, t) {
  for (var n = 0; n < t.length; n++)
    X(t[n], t[++n], t[++n]);
  p.__c && p.__c(_, e), e.some(function(r) {
    try {
      e = r.__h, r.__h = [], e.some(function(i) {
        i.call(r);
      });
    } catch (i) {
      p.__e(i, r.__v);
    }
  });
}
function S_(e, _, t, n, r, i, u, f, c) {
  var l, a, o, h, s, m, $, g = t.props, d = _.props, k = _.type;
  if (k === "svg" && (r = !0), i != null) {
    for (l = 0; l < i.length; l++)
      if ((s = i[l]) && "setAttribute" in s == !!k && (k ? s.localName === k : s.nodeType === 3)) {
        e = s, i[l] = null;
        break;
      }
  }
  if (e == null) {
    if (k === null)
      return document.createTextNode(d);
    e = r ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, d.is && d), i = null, f = !1;
  }
  if (k === null)
    g === d || f && e.data === d || (e.data = d);
  else {
    if (i = i && W.call(e.childNodes), g = t.props || P, !f && i != null)
      for (g = {}, l = 0; l < e.attributes.length; l++)
        g[(s = e.attributes[l]).name] = s.value;
    for (l in g)
      s = g[l], l == "children" || (l == "dangerouslySetInnerHTML" ? o = s : l === "key" || l in d || D(e, l, null, s, r));
    for (l in d)
      s = d[l], l == "children" ? h = s : l == "dangerouslySetInnerHTML" ? a = s : l == "value" ? m = s : l == "checked" ? $ = s : l === "key" || f && typeof s != "function" || g[l] === s || D(e, l, s, g[l], r);
    if (a)
      f || o && (a.__html === o.__html || a.__html === e.innerHTML) || (e.innerHTML = a.__html), _.__k = [];
    else if (o && (e.innerHTML = ""), v_(e, K(h) ? h : [h], _, t, n, r && k !== "foreignObject", i, u, i ? i[0] : t.__k && x(t, 0), f, c), i != null)
      for (l = i.length; l--; )
        i[l] != null && h_(i[l]);
    f || (l = "value", m !== void 0 && (m !== e[l] || k === "progress" && !m || k === "option" && m !== g[l]) && D(e, l, m, g[l], !1), l = "checked", $ !== void 0 && $ !== e[l] && D(e, l, $, g[l], !1));
  }
  return e;
}
function X(e, _, t) {
  try {
    typeof e == "function" ? e(_) : e.current = _;
  } catch (n) {
    p.__e(n, t);
  }
}
function j(e, _, t) {
  var n, r;
  if (p.unmount && p.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || X(n, null, _)), (n = e.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        p.__e(i, _);
      }
    n.base = n.__P = null, e.__c = void 0;
  }
  if (n = e.__k)
    for (r = 0; r < n.length; r++)
      n[r] && j(n[r], _, t || typeof e.type != "function");
  t || e.__e == null || h_(e.__e), e.__ = e.__e = e.__d = void 0;
}
function x_(e, _, t) {
  return this.constructor(e, t);
}
function D_(e, _, t) {
  var n, r, i, u;
  p.__ && p.__(e, _), r = (n = typeof t == "function") ? null : t && t.__k || _.__k, i = [], u = [], Q(_, e = (!n && t || _).__k = b_(V, null, [e]), r || P, P, _.ownerSVGElement !== void 0, !n && t ? [t] : r ? null : _.firstChild ? W.call(_.childNodes) : null, i, !n && t ? t : r ? r.__e : _.firstChild, n, u), e.__d = void 0, R(i, e, u);
}
W = J.slice, p = { __e: function(e, _, t, n) {
  for (var r, i, u; _ = _.__; )
    if ((r = _.__c) && !r.__)
      try {
        if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(e)), u = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, n || {}), u = r.__d), u)
          return r.__E = r;
      } catch (f) {
        e = f;
      }
  throw e;
} }, a_ = 0, A.prototype.setState = function(e, _) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = H({}, this.state), typeof e == "function" && (e = e(H({}, t), this.props)), e && H(t, e), e != null && this.__v && (_ && this._sb.push(_), __(this));
}, A.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), __(this));
}, A.prototype.render = V, S = [], p_ = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I = function(e, _) {
  return e.__v.__b - _.__v.__b;
}, M.__r = 0;
var z, v, q, o_, O = 0, m_ = [], F = [], y = p, r_ = y.__b, i_ = y.__r, l_ = y.diffed, u_ = y.__c, f_ = y.unmount, c_ = y.__;
function E_(e, _) {
  y.__h && y.__h(v, e, O || _), O = 0;
  var t = v.__H || (v.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({ __V: F }), t.__[e];
}
function U_(e) {
  return O = 1, P_(g_, e);
}
function P_(e, _, t) {
  var n = E_(z++, 2);
  if (n.t = e, !n.__c && (n.__ = [t ? t(_) : g_(void 0, _), function(f) {
    var c = n.__N ? n.__N[0] : n.__[0], l = n.t(c, f);
    c !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = v, !v.u)) {
    var r = function(f, c, l) {
      if (!n.__c.__H)
        return !0;
      var a = n.__c.__H.__.filter(function(h) {
        return !!h.__c;
      });
      if (a.every(function(h) {
        return !h.__N;
      }))
        return !i || i.call(this, f, c, l);
      var o = !1;
      return a.forEach(function(h) {
        if (h.__N) {
          var s = h.__[0];
          h.__ = h.__N, h.__N = void 0, s !== h.__[0] && (o = !0);
        }
      }), !(!o && n.__c.props === f) && (!i || i.call(this, f, c, l));
    };
    v.u = !0;
    var i = v.shouldComponentUpdate, u = v.componentWillUpdate;
    v.componentWillUpdate = function(f, c, l) {
      if (this.__e) {
        var a = i;
        i = void 0, r(f, c, l), i = a;
      }
      u && u.call(this, f, c, l);
    }, v.shouldComponentUpdate = r;
  }
  return n.__N || n.__;
}
function C_() {
  for (var e; e = m_.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(L), e.__H.__h.forEach(G), e.__H.__h = [];
      } catch (_) {
        e.__H.__h = [], y.__e(_, e.__v);
      }
}
y.__b = function(e) {
  v = null, r_ && r_(e);
}, y.__ = function(e, _) {
  e && _.__k && _.__k.__m && (e.__m = _.__k.__m), c_ && c_(e, _);
}, y.__r = function(e) {
  i_ && i_(e), z = 0;
  var _ = (v = e.__c).__H;
  _ && (q === v ? (_.__h = [], v.__h = [], _.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = F, t.__N = t.i = void 0;
  })) : (_.__h.forEach(L), _.__h.forEach(G), _.__h = [], z = 0)), q = v;
}, y.diffed = function(e) {
  l_ && l_(e);
  var _ = e.__c;
  _ && _.__H && (_.__H.__h.length && (m_.push(_) !== 1 && o_ === y.requestAnimationFrame || ((o_ = y.requestAnimationFrame) || N_)(C_)), _.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== F && (t.__ = t.__V), t.i = void 0, t.__V = F;
  })), q = v = null;
}, y.__c = function(e, _) {
  _.some(function(t) {
    try {
      t.__h.forEach(L), t.__h = t.__h.filter(function(n) {
        return !n.__ || G(n);
      });
    } catch (n) {
      _.some(function(r) {
        r.__h && (r.__h = []);
      }), _ = [], y.__e(n, t.__v);
    }
  }), u_ && u_(e, _);
}, y.unmount = function(e) {
  f_ && f_(e);
  var _, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      L(n);
    } catch (r) {
      _ = r;
    }
  }), t.__H = void 0, _ && y.__e(_, t.__v));
};
var s_ = typeof requestAnimationFrame == "function";
function N_(e) {
  var _, t = function() {
    clearTimeout(n), s_ && cancelAnimationFrame(_), setTimeout(e);
  }, n = setTimeout(t, 100);
  s_ && (_ = requestAnimationFrame(t));
}
function L(e) {
  var _ = v, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), v = _;
}
function G(e) {
  var _ = v;
  e.__c = e.__(), v = _;
}
function g_(e, _) {
  return typeof _ == "function" ? _(e) : _;
}
var T_ = 0;
function A_(e, _, t, n, r, i) {
  var u, f, c = {};
  for (f in _)
    f == "ref" ? u = _[f] : c[f] = _[f];
  var l = { type: e, props: c, key: t, ref: u, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --T_, __i: -1, __u: 0, __source: r, __self: i };
  if (typeof e == "function" && (u = e.defaultProps))
    for (f in u)
      c[f] === void 0 && (c[f] = u[f]);
  return p.vnode && p.vnode(l), l;
}
export {
  D_ as B,
  V as g,
  U_ as p,
  A_ as u
};
