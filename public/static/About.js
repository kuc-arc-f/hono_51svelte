var D = Object.defineProperty;
var F = (t, e, n) => e in t ? D(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var x = (t, e, n) => (F(t, typeof e != "symbol" ? e + "" : e, n), n);
function c() {
}
function I(t) {
  return t();
}
function k() {
  return /* @__PURE__ */ Object.create(null);
}
function g(t) {
  t.forEach(I);
}
function L(t) {
  return typeof t == "function";
}
function M(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function G(t) {
  return Object.keys(t).length === 0;
}
function y(t, e) {
  t.appendChild(e);
}
function P(t, e, n) {
  t.insertBefore(e, n || null);
}
function A(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function $(t) {
  return document.createElement(t);
}
function J(t) {
  return document.createTextNode(t);
}
function K() {
  return J(" ");
}
function b(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Q(t) {
  return Array.from(t.childNodes);
}
let C;
function p(t) {
  C = t;
}
const h = [], B = [];
let _ = [];
const H = [], W = /* @__PURE__ */ Promise.resolve();
let v = !1;
function X() {
  v || (v = !0, W.then(T));
}
function E(t) {
  _.push(t);
}
const w = /* @__PURE__ */ new Set();
let d = 0;
function T() {
  if (d !== 0)
    return;
  const t = C;
  do {
    try {
      for (; d < h.length; ) {
        const e = h[d];
        d++, p(e), Y(e.$$);
      }
    } catch (e) {
      throw h.length = 0, d = 0, e;
    }
    for (p(null), h.length = 0, d = 0; B.length; )
      B.pop()();
    for (let e = 0; e < _.length; e += 1) {
      const n = _[e];
      w.has(n) || (w.add(n), n());
    }
    _.length = 0;
  } while (h.length);
  for (; H.length; )
    H.pop()();
  v = !1, w.clear(), p(t);
}
function Y(t) {
  if (t.fragment !== null) {
    t.update(), g(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(E);
  }
}
function Z(t) {
  const e = [], n = [];
  _.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), _ = e;
}
const m = /* @__PURE__ */ new Set();
let tt;
function R(t, e) {
  t && t.i && (m.delete(t), t.i(e));
}
function et(t, e, n, r) {
  if (t && t.o) {
    if (m.has(t))
      return;
    m.add(t), tt.c.push(() => {
      m.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function nt(t) {
  t && t.c();
}
function U(t, e, n) {
  const { fragment: r, after_update: s } = t.$$;
  r && r.m(e, n), E(() => {
    const u = t.$$.on_mount.map(I).filter(L);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : g(u), t.$$.on_mount = [];
  }), s.forEach(E);
}
function V(t, e) {
  const n = t.$$;
  n.fragment !== null && (Z(n.after_update), g(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function rt(t, e) {
  t.$$.dirty[0] === -1 && (h.push(t), X(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function q(t, e, n, r, s, u, a = null, f = [-1]) {
  const l = C;
  p(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: c,
    not_equal: s,
    bound: k(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: k(),
    dirty: f,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  a && a(o.root);
  let N = !1;
  if (o.ctx = n ? n(t, e.props || {}, (i, O, ...S) => {
    const j = S.length ? S[0] : O;
    return o.ctx && s(o.ctx[i], o.ctx[i] = j) && (!o.skip_bound && o.bound[i] && o.bound[i](j), N && rt(t, i)), O;
  }) : [], o.update(), N = !0, g(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const i = Q(e.target);
      o.fragment && o.fragment.l(i), i.forEach(A);
    } else
      o.fragment && o.fragment.c();
    e.intro && R(t.$$.fragment), U(t, e.target, e.anchor), T();
  }
  p(l);
}
class z {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    x(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    x(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    V(this, 1), this.$destroy = c;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!L(n))
      return c;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const s = r.indexOf(n);
      s !== -1 && r.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !G(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ot);
function st(t) {
  let e;
  return {
    c() {
      e = $("header"), e.innerHTML = '<div class="container"><span><a href="/">[ Home ]</a></span> <span><a href="/about">[ about ]</a></span> <span><a href="/test">[ test ]</a></span></div> <hr/>', b(e, "class", "");
    },
    m(n, r) {
      P(n, e, r);
    },
    p: c,
    i: c,
    o: c,
    d(n) {
      n && A(e);
    }
  };
}
class ut extends z {
  constructor(e) {
    super(), q(this, e, null, st, M, {});
  }
}
function ft(t) {
  let e, n, r, s, u, a;
  return r = new ut({}), {
    c() {
      e = $("main"), n = $("div"), nt(r.$$.fragment), s = K(), u = $("h1"), u.textContent = "About...", b(u, "class", "text-4xl font-bold"), b(n, "class", "container mx-auto my-2 px-8 bg-white");
    },
    m(f, l) {
      P(f, e, l), y(e, n), U(r, n, null), y(n, s), y(n, u), a = !0;
    },
    p: c,
    i(f) {
      a || (R(r.$$.fragment, f), a = !0);
    },
    o(f) {
      et(r.$$.fragment, f), a = !1;
    },
    d(f) {
      f && A(e), V(r);
    }
  };
}
function it(t) {
  return console.log("#about"), [];
}
class at extends z {
  constructor(e) {
    super(), q(this, e, it, ft, M, {});
  }
}
const lt = new at({
  target: document.getElementById("app")
});
export {
  lt as default
};
