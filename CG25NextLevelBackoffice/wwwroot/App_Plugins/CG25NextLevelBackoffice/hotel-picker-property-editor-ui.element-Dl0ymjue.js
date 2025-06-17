var vt = (i) => {
  throw TypeError(i);
};
var rt = (i, t, e) => t.has(i) || vt("Cannot " + e);
var k = (i, t, e) => (rt(i, t, "read from private field"), e ? e.call(i) : t.get(i)), G = (i, t, e) => t.has(i) ? vt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), nt = (i, t, e, s) => (rt(i, t, "write to private field"), s ? s.call(i, e) : t.set(i, e), e), yt = (i, t, e) => (rt(i, t, "access private method"), e);
import { ifDefined as K, LitElement as oe, html as L, nothing as ct, repeat as ae, css as he, property as Ht, state as Rt, customElement as le } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as Dt } from "@umbraco-cms/backoffice/element-api";
import { UMB_PROPERTY_DATASET_CONTEXT as ce } from "@umbraco-cms/backoffice/property";
import { UMB_DOCUMENT_ITEM_REPOSITORY_ALIAS as de, UmbDocumentDetailRepository as ue, UmbDocumentItemDataResolver as pe } from "@umbraco-cms/backoffice/document";
import { UmbPickerInputContext as fe } from "@umbraco-cms/backoffice/picker-input";
import { UmbModalToken as _e } from "@umbraco-cms/backoffice/modal";
import { UmbArrayState as $e } from "@umbraco-cms/backoffice/observable-api";
import { UmbChangeEvent as me } from "@umbraco-cms/backoffice/event";
import { UUICardElement as zt } from "@umbraco-cms/backoffice/external/uui";
const ve = new _e("UmbraGo.Modal.HotelPicker", {
  modal: {
    type: "sidebar",
    size: "small"
  }
});
var A, I, it, Nt;
class ye extends fe {
  constructor(e) {
    super(e, de, ve);
    G(this, it);
    G(this, A);
    G(this, I);
    nt(this, A, new $e(
      [],
      (s) => s.unique
    )), this.itemsWithDetails = k(this, A).asObservable(), nt(this, I, new ue(this)), this.observe(this.selection, (s) => {
      yt(this, it, Nt).call(this, s);
    });
  }
}
A = new WeakMap(), I = new WeakMap(), it = new WeakSet(), Nt = async function(e) {
  if (e.length === 0) {
    k(this, A).setValue([]);
    return;
  }
  const s = e.map(
    (n) => {
      var h;
      return (h = k(this, I)) == null ? void 0 : h.requestByUnique(n);
    }
  ), o = (await Promise.all(s)).map((n) => n.data).filter(Boolean);
  k(this, A).setValue(o);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J = globalThis, dt = J.ShadowRoot && (J.ShadyCSS === void 0 || J.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ut = Symbol(), gt = /* @__PURE__ */ new WeakMap();
let qt = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== ut) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (dt && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = gt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && gt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const ge = (i) => new qt(typeof i == "string" ? i : i + "", void 0, ut), be = (i, ...t) => {
  const e = i.length === 1 ? i[0] : t.reduce((s, r, o) => s + ((n) => {
    if (n._$cssResult$ === !0) return n.cssText;
    if (typeof n == "number") return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + i[o + 1], i[0]);
  return new qt(e, i, ut);
}, Ae = (i, t) => {
  if (dt) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), r = J.litNonce;
    r !== void 0 && s.setAttribute("nonce", r), s.textContent = e.cssText, i.appendChild(s);
  }
}, bt = dt ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return ge(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ee, defineProperty: we, getOwnPropertyDescriptor: Se, getOwnPropertyNames: Ce, getOwnPropertySymbols: Pe, getPrototypeOf: xe } = Object, v = globalThis, At = v.trustedTypes, Ue = At ? At.emptyScript : "", ot = v.reactiveElementPolyfillSupport, R = (i, t) => i, Q = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? Ue : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, pt = (i, t) => !Ee(i, t), Et = { attribute: !0, type: String, converter: Q, reflect: !1, useDefault: !1, hasChanged: pt };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), v.litPropertyMetadata ?? (v.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let C = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Et) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), r = this.getPropertyDescriptor(t, s, e);
      r !== void 0 && we(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: r, set: o } = Se(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: r, set(n) {
      const h = r == null ? void 0 : r.call(this);
      o == null || o.call(this, n), this.requestUpdate(t, h, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Et;
  }
  static _$Ei() {
    if (this.hasOwnProperty(R("elementProperties"))) return;
    const t = xe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(R("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(R("properties"))) {
      const e = this.properties, s = [...Ce(e), ...Pe(e)];
      for (const r of s) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, r] of e) this.elementProperties.set(s, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const r = this._$Eu(e, s);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const r of s) e.unshift(bt(r));
    } else t !== void 0 && e.push(bt(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ae(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    var o;
    const s = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, s);
    if (r !== void 0 && s.reflect === !0) {
      const n = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : Q).toAttribute(e, s.type);
      this._$Em = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o, n;
    const s = this.constructor, r = s._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const h = s.getPropertyOptions(r), a = typeof h.converter == "function" ? { fromAttribute: h.converter } : ((o = h.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? h.converter : Q;
      this._$Em = r, this[r] = a.fromAttribute(e, h.type) ?? ((n = this._$Ej) == null ? void 0 : n.get(r)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    var r;
    if (t !== void 0) {
      const o = this.constructor, n = this[t];
      if (s ?? (s = o.getPropertyOptions(t)), !((s.hasChanged ?? pt)(n, e) || s.useDefault && s.reflect && n === ((r = this._$Ej) == null ? void 0 : r.get(t)) && !this.hasAttribute(o._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: r, wrapped: o }, n) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), o !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), r === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, n] of this._$Ep) this[o] = n;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [o, n] of r) {
        const { wrapped: h } = n, a = this[o];
        h !== !0 || this._$AL.has(o) || a === void 0 || this.C(o, void 0, n, a);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((r) => {
        var o;
        return (o = r.hostUpdate) == null ? void 0 : o.call(r);
      }), this.update(e)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var r;
      return (r = s.hostUpdated) == null ? void 0 : r.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
C.elementStyles = [], C.shadowRootOptions = { mode: "open" }, C[R("elementProperties")] = /* @__PURE__ */ new Map(), C[R("finalized")] = /* @__PURE__ */ new Map(), ot == null || ot({ ReactiveElement: C }), (v.reactiveElementVersions ?? (v.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D = globalThis, tt = D.trustedTypes, wt = tt ? tt.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, Bt = "$lit$", $ = `lit$${Math.random().toFixed(9).slice(2)}$`, It = "?" + $, Oe = `<${It}>`, w = document, z = () => w.createComment(""), N = (i) => i === null || typeof i != "object" && typeof i != "function", ft = Array.isArray, Me = (i) => ft(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", at = `[ 	
\f\r]`, H = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, St = /-->/g, Ct = />/g, g = RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Pt = /'/g, xt = /"/g, Lt = /^(?:script|style|textarea|title)$/i, Te = (i) => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), O = Te(1), M = Symbol.for("lit-noChange"), c = Symbol.for("lit-nothing"), Ut = /* @__PURE__ */ new WeakMap(), b = w.createTreeWalker(w, 129);
function Wt(i, t) {
  if (!ft(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return wt !== void 0 ? wt.createHTML(t) : t;
}
const ke = (i, t) => {
  const e = i.length - 1, s = [];
  let r, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = H;
  for (let h = 0; h < e; h++) {
    const a = i[h];
    let d, u, l = -1, f = 0;
    for (; f < a.length && (n.lastIndex = f, u = n.exec(a), u !== null); ) f = n.lastIndex, n === H ? u[1] === "!--" ? n = St : u[1] !== void 0 ? n = Ct : u[2] !== void 0 ? (Lt.test(u[2]) && (r = RegExp("</" + u[2], "g")), n = g) : u[3] !== void 0 && (n = g) : n === g ? u[0] === ">" ? (n = r ?? H, l = -1) : u[1] === void 0 ? l = -2 : (l = n.lastIndex - u[2].length, d = u[1], n = u[3] === void 0 ? g : u[3] === '"' ? xt : Pt) : n === xt || n === Pt ? n = g : n === St || n === Ct ? n = H : (n = g, r = void 0);
    const _ = n === g && i[h + 1].startsWith("/>") ? " " : "";
    o += n === H ? a + Oe : l >= 0 ? (s.push(d), a.slice(0, l) + Bt + a.slice(l) + $ + _) : a + $ + (l === -2 ? h : _);
  }
  return [Wt(i, o + (i[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class q {
  constructor({ strings: t, _$litType$: e }, s) {
    let r;
    this.parts = [];
    let o = 0, n = 0;
    const h = t.length - 1, a = this.parts, [d, u] = ke(t, e);
    if (this.el = q.createElement(d, s), b.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (r = b.nextNode()) !== null && a.length < h; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const l of r.getAttributeNames()) if (l.endsWith(Bt)) {
          const f = u[n++], _ = r.getAttribute(l).split($), V = /([.?@])?(.*)/.exec(f);
          a.push({ type: 1, index: o, name: V[2], strings: _, ctor: V[1] === "." ? Re : V[1] === "?" ? De : V[1] === "@" ? ze : st }), r.removeAttribute(l);
        } else l.startsWith($) && (a.push({ type: 6, index: o }), r.removeAttribute(l));
        if (Lt.test(r.tagName)) {
          const l = r.textContent.split($), f = l.length - 1;
          if (f > 0) {
            r.textContent = tt ? tt.emptyScript : "";
            for (let _ = 0; _ < f; _++) r.append(l[_], z()), b.nextNode(), a.push({ type: 2, index: ++o });
            r.append(l[f], z());
          }
        }
      } else if (r.nodeType === 8) if (r.data === It) a.push({ type: 2, index: o });
      else {
        let l = -1;
        for (; (l = r.data.indexOf($, l + 1)) !== -1; ) a.push({ type: 7, index: o }), l += $.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const s = w.createElement("template");
    return s.innerHTML = t, s;
  }
}
function T(i, t, e = i, s) {
  var n, h;
  if (t === M) return t;
  let r = s !== void 0 ? (n = e._$Co) == null ? void 0 : n[s] : e._$Cl;
  const o = N(t) ? void 0 : t._$litDirective$;
  return (r == null ? void 0 : r.constructor) !== o && ((h = r == null ? void 0 : r._$AO) == null || h.call(r, !1), o === void 0 ? r = void 0 : (r = new o(i), r._$AT(i, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = r : e._$Cl = r), r !== void 0 && (t = T(i, r._$AS(i, t.values), r, s)), t;
}
class He {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, r = ((t == null ? void 0 : t.creationScope) ?? w).importNode(e, !0);
    b.currentNode = r;
    let o = b.nextNode(), n = 0, h = 0, a = s[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let d;
        a.type === 2 ? d = new W(o, o.nextSibling, this, t) : a.type === 1 ? d = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (d = new Ne(o, this, t)), this._$AV.push(d), a = s[++h];
      }
      n !== (a == null ? void 0 : a.index) && (o = b.nextNode(), n++);
    }
    return b.currentNode = w, r;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class W {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, r) {
    this.type = 2, this._$AH = c, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = T(this, t, e), N(t) ? t === c || t == null || t === "" ? (this._$AH !== c && this._$AR(), this._$AH = c) : t !== this._$AH && t !== M && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Me(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== c && N(this._$AH) ? this._$AA.nextSibling.data = t : this.T(w.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var o;
    const { values: e, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = q.createElement(Wt(s.h, s.h[0]), this.options)), s);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === r) this._$AH.p(e);
    else {
      const n = new He(r, this), h = n.u(this.options);
      n.p(e), this.T(h), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = Ut.get(t.strings);
    return e === void 0 && Ut.set(t.strings, e = new q(t)), e;
  }
  k(t) {
    ft(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, r = 0;
    for (const o of t) r === e.length ? e.push(s = new W(this.O(z()), this.O(z()), this, this.options)) : s = e[r], s._$AI(o), r++;
    r < e.length && (this._$AR(s && s._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class st {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, r, o) {
    this.type = 1, this._$AH = c, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = c;
  }
  _$AI(t, e = this, s, r) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = T(this, t, e, 0), n = !N(t) || t !== this._$AH && t !== M, n && (this._$AH = t);
    else {
      const h = t;
      let a, d;
      for (t = o[0], a = 0; a < o.length - 1; a++) d = T(this, h[s + a], e, a), d === M && (d = this._$AH[a]), n || (n = !N(d) || d !== this._$AH[a]), d === c ? t = c : t !== c && (t += (d ?? "") + o[a + 1]), this._$AH[a] = d;
    }
    n && !r && this.j(t);
  }
  j(t) {
    t === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Re extends st {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === c ? void 0 : t;
  }
}
class De extends st {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== c);
  }
}
class ze extends st {
  constructor(t, e, s, r, o) {
    super(t, e, s, r, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = T(this, t, e, 0) ?? c) === M) return;
    const s = this._$AH, r = t === c && s !== c || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, o = t !== c && (s === c || r);
    r && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ne {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    T(this, t);
  }
}
const ht = D.litHtmlPolyfillSupport;
ht == null || ht(q, W), (D.litHtmlVersions ?? (D.litHtmlVersions = [])).push("3.3.0");
const qe = (i, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let r = s._$litPart$;
  if (r === void 0) {
    const o = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = r = new W(t.insertBefore(z(), o), o, void 0, e ?? {});
  }
  return r._$AI(i), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E = globalThis;
class Y extends C {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = qe(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return M;
  }
}
var kt;
Y._$litElement$ = !0, Y.finalized = !0, (kt = E.litElementHydrateSupport) == null || kt.call(E, { LitElement: Y });
const lt = E.litElementPolyfillSupport;
lt == null || lt({ LitElement: Y });
(E.litElementVersions ?? (E.litElementVersions = [])).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Be = (i) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(i, t);
  }) : customElements.define(i, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ie = { attribute: !0, type: String, converter: Q, reflect: !1, hasChanged: pt }, Le = (i = Ie, t, e) => {
  const { kind: s, metadata: r } = e;
  let o = globalThis.litPropertyMetadata.get(r);
  if (o === void 0 && globalThis.litPropertyMetadata.set(r, o = /* @__PURE__ */ new Map()), s === "setter" && ((i = Object.create(i)).wrapped = !0), o.set(e.name, i), s === "accessor") {
    const { name: n } = e;
    return { set(h) {
      const a = t.get.call(this);
      t.set.call(this, h), this.requestUpdate(n, a, i);
    }, init(h) {
      return h !== void 0 && this.C(n, void 0, i, h), h;
    } };
  }
  if (s === "setter") {
    const { name: n } = e;
    return function(h) {
      const a = this[n];
      t.call(this, h), this.requestUpdate(n, a, i);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function jt(i) {
  return (t, e) => typeof e == "object" ? Le(i, t, e) : ((s, r, o) => {
    const n = r.hasOwnProperty(o);
    return r.constructor.createProperty(o, s), n ? Object.getOwnPropertyDescriptor(r, o) : void 0;
  })(i, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function We(i) {
  return jt({ ...i, state: !0, attribute: !1 });
}
var je = Object.defineProperty, Ve = Object.getOwnPropertyDescriptor, Vt = (i) => {
  throw TypeError(i);
}, _t = (i, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? Ve(t, e) : t, o = i.length - 1, n; o >= 0; o--)
    (n = i[o]) && (r = (s ? n(t, e, r) : n(r)) || r);
  return s && r && je(t, e, r), r;
}, Gt = (i, t, e) => t.has(i) || Vt("Cannot " + e), Ot = (i, t, e) => (Gt(i, t, "read from private field"), e ? e.call(i) : t.get(i)), Mt = (i, t, e) => t.has(i) ? Vt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), P = (i, t, e) => (Gt(i, t, "access private method"), e), Z, m, Kt, Ft, Jt, Yt, $t;
let B = class extends Dt(
  zt
) {
  constructor() {
    super(), Mt(this, m), this._name = "", Mt(this, Z, new pe(this)), this.observe(
      Ot(this, Z).name,
      (i) => this._name = i ?? ""
    );
  }
  get item() {
    return this._item;
  }
  set item(i) {
    this._item = i, Ot(this, Z).setData(i);
  }
  renderMedia() {
    const i = P(this, m, Kt).call(this);
    return O`<umb-imaging-thumbnail
      id="media"
      unique=${i}
    ></umb-imaging-thumbnail>`;
  }
  render() {
    return O` ${this.renderMedia()}
      ${this.href ? P(this, m, Yt).call(this) : P(this, m, Jt).call(this)}
      <!-- Select border must be right after .open-part -->
      <div id="select-border"></div>
      <slot name="tag"></slot>
      <slot name="actions"></slot>`;
  }
};
Z = /* @__PURE__ */ new WeakMap();
m = /* @__PURE__ */ new WeakSet();
Kt = function() {
  var e, s;
  const i = (s = (e = this._item) == null ? void 0 : e.values.find(
    (r) => r.alias === "picture"
  )) == null ? void 0 : s.value, t = i == null ? void 0 : i[0];
  return t == null ? void 0 : t.mediaKey;
};
Ft = function() {
  var t, e;
  const i = (e = (t = this._item) == null ? void 0 : t.values.find(
    (s) => s.alias === "tagline"
  )) == null ? void 0 : e.value;
  return i ? O`<div id="detail">${i}</div>` : c;
};
Jt = function() {
  return O`
      <button
        id="open-part"
        tabindex=${this.disabled ? c : "0"}
        @click=${this.handleOpenClick}
        @keydown=${this.handleOpenKeydown}
      >
        ${P(this, m, $t).call(this)}
      </button>
    `;
};
Yt = function() {
  return O`
      <a
        id="open-part"
        tabindex=${this.disabled ? c : "0"}
        href=${K(this.disabled ? void 0 : this.href)}
        target=${K(this.target || void 0)}
        rel=${K(
    this.rel || K(
      this.target === "_blank" ? "noopener noreferrer" : void 0
    )
  )}
      >
        ${P(this, m, $t).call(this)}
      </a>
    `;
};
$t = function() {
  return O`
      <div id="content" class="uui-text">
        <span id="name" title="${this._name}">${this._name}</span>
        ${P(this, m, Ft).call(this)}
      </div>
    `;
};
B.styles = [
  ...zt.styles,
  be`
      slot[name="tag"] {
        position: absolute;
        top: var(--uui-size-4);
        right: var(--uui-size-4);
        display: flex;
        justify-content: right;
        z-index: 2;
      }

      slot[name="actions"] {
        position: absolute;
        top: var(--uui-size-4);
        right: var(--uui-size-4);
        display: flex;
        justify-content: right;
        z-index: 2;
        opacity: 0;
        transition: opacity 120ms;
      }
      :host(:focus) slot[name="actions"],
      :host(:focus-within) slot[name="actions"],
      :host(:hover) slot[name="actions"] {
        opacity: 1;
      }

      slot:not([name])::slotted(*) {
        align-self: center;
        border-radius: var(--uui-border-radius);
        object-fit: cover;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      #media {
        border-radius: var(--uui-border-radius);
      }

      #open-part {
        position: absolute;
        z-index: 1;
        inset: 0;
        color: var(--uui-color-interactive);
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      :host([disabled]) #open-part {
        pointer-events: none;
        color: var(--uui-color-contrast-disabled);
      }

      #open-part:hover {
        color: var(--uui-color-interactive-emphasis);
      }
      #open-part:hover #name {
        text-decoration: underline;
      }

      #open-part #name {
        font-weight: bold;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: anywhere;
      }

      :host([image]:not([image=""])) #open-part {
        transition: opacity 0.5s 0.5s;
        opacity: 0;
      }

      #content {
        position: relative;
        display: flex;
        flex-direction: column;
        font-family: inherit;
        box-sizing: border-box;
        text-align: left;
        word-break: break-word;
        padding: var(--uui-size-space-5);
        margin: var(--uui-size-space-5);
      }

      #content::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: var(--uui-border-radius);
        background-color: var(--uui-color-surface);
        pointer-events: none;
        opacity: 0.96;
      }

      #detail {
        opacity: 0.6;
      }

      :host(
          [image]:not([image=""]):hover,
          [image]:not([image=""]):focus,
          [image]:not([image=""]):focus-within,
          [selected][image]:not([image=""]),
          [error][image]:not([image=""])
        )
        #open-part {
        opacity: 1;
        transition-duration: 120ms;
        transition-delay: 0s;
      }

      :host([selectable]) #open-part {
        inset: var(--uui-size-space-3) var(--uui-size-space-4);
      }
      :host(:not([selectable])) #content {
        padding: var(--uui-size-space-3) var(--uui-size-space-4);
      }
      :host([selectable]) #content::before {
        inset: calc(var(--uui-size-space-3) * -1)
          calc(var(--uui-size-space-4) * -1);
        top: 0;
      }
    `
];
_t([
  jt({ type: Object })
], B.prototype, "item", 1);
_t([
  We()
], B.prototype, "_name", 2);
B = _t([
  Be("umbrago-hotel-detail-card")
], B);
var Ge = Object.defineProperty, Ke = Object.getOwnPropertyDescriptor, Zt = (i) => {
  throw TypeError(i);
}, j = (i, t, e, s) => {
  for (var r = s > 1 ? void 0 : s ? Ke(t, e) : t, o = i.length - 1, n; o >= 0; o--)
    (n = i[o]) && (r = (s ? n(t, e, r) : n(r)) || r);
  return s && r && Ge(t, e, r), r;
}, mt = (i, t, e) => t.has(i) || Zt("Cannot " + e), x = (i, t, e) => (mt(i, t, "read from private field"), e ? e.call(i) : t.get(i)), F = (i, t, e) => t.has(i) ? Zt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, e), Tt = (i, t, e, s) => (mt(i, t, "write to private field"), t.set(i, e), e), y = (i, t, e) => (mt(i, t, "access private method"), e), et, X, U, p, Xt, Qt, te, ee, ie, se, re, ne;
let S = class extends Dt(
  oe
) {
  constructor() {
    super(), F(this, p), F(this, et), this.readonly = !1, this._facilityValue = [], this._items = [], F(this, X), F(this, U, new ye(this)), this.consumeContext(ce, (i) => {
      Tt(this, et, i), y(this, p, Xt).call(this);
    }), this.observe(
      x(this, U).itemsWithDetails,
      (i) => {
        this._items = i;
        const t = i == null ? void 0 : i.filter((e) => e).map((e) => ({
          type: "document",
          unique: e.unique
        }));
        y(this, p, Qt).call(this, t);
      },
      "uopObserveSelectedItems"
    );
  }
  get value() {
    return x(this, X);
  }
  set value(i) {
    Tt(this, X, i);
    const t = (i == null ? void 0 : i.map((e) => e.unique)) ?? [];
    x(this, U).setSelection(t);
  }
  render() {
    return L`${y(this, p, ie).call(this)}`;
  }
};
et = /* @__PURE__ */ new WeakMap();
X = /* @__PURE__ */ new WeakMap();
U = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakSet();
Xt = async function() {
  var i;
  this.observe(
    await ((i = x(this, et)) == null ? void 0 : i.propertyValueByAlias("facilities")),
    (t) => {
      this._facilityValue = t || [];
    }
  );
};
Qt = function(i) {
  this.value = i, this.dispatchEvent(new me());
};
te = function() {
  x(this, U).openPicker({
    facilityDocuments: this._facilityValue.map((i) => i.unique)
  });
};
ee = function(i) {
  i && x(this, U).requestRemoveItem(i);
};
ie = function() {
  return this._items ? L`
      <div id="card-grid">
        ${ae(
    this._items,
    (i) => i.unique,
    (i) => y(this, p, se).call(this, i)
  )}
        ${y(this, p, ne).call(this)}
      </div>
    ` : ct;
};
se = function(i) {
  return i.unique ? L`
      <umbrago-hotel-detail-card .item=${i} id=${i.unique}>
        <uui-action-bar slot="actions">
          ${y(this, p, re).call(this, i)}
        </uui-action-bar>
      </umbrago-hotel-detail-card>
    ` : ct;
};
re = function(i) {
  return this.readonly ? ct : L`
      <uui-button
        look="secondary"
        label=${this.localize.term("general_remove")}
        @click=${() => y(this, p, ee).call(this, i.unique)}
      ></uui-button>
    `;
};
ne = function() {
  return L`
      <uui-button
        id="btn-add"
        look="placeholder"
        label=${this.localize.term("general_choose")}
        @click=${y(this, p, te)}
        ?disabled=${this.readonly}
      ></uui-button>
    `;
};
S.styles = [
  he`
      :host {
        width: 100%;
      }

      #card-grid {
        display: grid;
        gap: var(--uui-size-space-5);
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: 250px;
      }

      #btn-add {
        width: 100%;
      }
    `
];
j([
  Ht({ type: Array })
], S.prototype, "value", 1);
j([
  Ht({ type: Boolean, reflect: !0 })
], S.prototype, "readonly", 2);
j([
  Rt()
], S.prototype, "_facilityValue", 2);
j([
  Rt()
], S.prototype, "_items", 2);
S = j([
  le("umbrago-hotel-picker-property-editor-ui")
], S);
export {
  S as UmbraGoHotelPickerPropertyEditorUiElement,
  S as element
};
//# sourceMappingURL=hotel-picker-property-editor-ui.element-Dl0ymjue.js.map
