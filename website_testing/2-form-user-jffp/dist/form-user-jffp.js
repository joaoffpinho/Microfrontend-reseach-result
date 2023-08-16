import { css as Nr, LitElement as Lr, html as Mr } from "lit";
import { property as Pe, customElement as Ur } from "lit/decorators.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vr = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), Tt = /* @__PURE__ */ new WeakMap(), Wr = (m, s, V, j, T) => {
  const k = T == null ? void 0 : T[s];
  k === void 0 || V === j ? V == null && s in HTMLElement.prototype ? m.removeAttribute(s) : m[s] = V : ((A, D, B) => {
    let N = Tt.get(A);
    N === void 0 && Tt.set(A, N = /* @__PURE__ */ new Map());
    let x = N.get(D);
    B !== void 0 ? x === void 0 ? (N.set(D, x = { handleEvent: B }), A.addEventListener(D, x)) : x.handleEvent = B : x !== void 0 && (N.delete(D), A.removeEventListener(D, x));
  })(m, k, V);
};
function Yr(m = window.React, s, V, j, T) {
  let k, A, D;
  if (s === void 0) {
    const F = m;
    ({ tagName: A, elementClass: D, events: j, displayName: T } = F), k = F.react;
  } else
    k = m, D = V, A = s;
  const B = k.Component, N = k.createElement, x = new Set(Object.keys(j ?? {}));
  class H extends B {
    constructor() {
      super(...arguments), this.o = null;
    }
    t(P) {
      if (this.o !== null)
        for (const G in this.i)
          Wr(this.o, G, this.props[G], P ? P[G] : void 0, j);
    }
    componentDidMount() {
      this.t();
    }
    componentDidUpdate(P) {
      this.t(P);
    }
    render() {
      const { _$Gl: P, ...G } = this.props;
      this.h !== P && (this.u = (L) => {
        P !== null && ((W, K) => {
          typeof W == "function" ? W(K) : W.current = K;
        })(P, L), this.o = L, this.h = P;
      }), this.i = {};
      const Y = { ref: this.u };
      for (const [L, W] of Object.entries(G))
        Vr.has(L) ? Y[L === "className" ? "class" : L] = W : x.has(L) || L in D.prototype ? this.i[L] = W : Y[L] = W;
      return N(A, Y);
    }
  }
  H.displayName = T ?? D.name;
  const Q = k.forwardRef((F, P) => N(H, { ...F, _$Gl: P }, F == null ? void 0 : F.children));
  return Q.displayName = H.displayName, Q;
}
function zr(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var ze = { exports: {} }, p = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function Br() {
  if (kt)
    return p;
  kt = 1;
  var m = Symbol.for("react.element"), s = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), A = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), N = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), H = Symbol.iterator;
  function Q(r) {
    return r === null || typeof r != "object" ? null : (r = H && r[H] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, G = {};
  function Y(r, i, d) {
    this.props = r, this.context = i, this.refs = G, this.updater = d || F;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(r, i) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, i, "setState");
  }, Y.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function L() {
  }
  L.prototype = Y.prototype;
  function W(r, i, d) {
    this.props = r, this.context = i, this.refs = G, this.updater = d || F;
  }
  var K = W.prototype = new L();
  K.constructor = W, P(K, Y.prototype), K.isPureReactComponent = !0;
  var J = Array.isArray, $ = Object.prototype.hasOwnProperty, z = { current: null }, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(r, i, d) {
    var h, v = {}, g = null, S = null;
    if (i != null)
      for (h in i.ref !== void 0 && (S = i.ref), i.key !== void 0 && (g = "" + i.key), i)
        $.call(i, h) && !X.hasOwnProperty(h) && (v[h] = i[h]);
    var _ = arguments.length - 2;
    if (_ === 1)
      v.children = d;
    else if (1 < _) {
      for (var E = Array(_), M = 0; M < _; M++)
        E[M] = arguments[M + 2];
      v.children = E;
    }
    if (r && r.defaultProps)
      for (h in _ = r.defaultProps, _)
        v[h] === void 0 && (v[h] = _[h]);
    return { $$typeof: m, type: r, key: g, ref: S, props: v, _owner: z.current };
  }
  function ye(r, i) {
    return { $$typeof: m, type: r.type, key: i, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function se(r) {
    return typeof r == "object" && r !== null && r.$$typeof === m;
  }
  function je(r) {
    var i = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(d) {
      return i[d];
    });
  }
  var me = /\/+/g;
  function ce(r, i) {
    return typeof r == "object" && r !== null && r.key != null ? je("" + r.key) : i.toString(36);
  }
  function ae(r, i, d, h, v) {
    var g = typeof r;
    (g === "undefined" || g === "boolean") && (r = null);
    var S = !1;
    if (r === null)
      S = !0;
    else
      switch (g) {
        case "string":
        case "number":
          S = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case m:
            case s:
              S = !0;
          }
      }
    if (S)
      return S = r, v = v(S), r = h === "" ? "." + ce(S, 0) : h, J(v) ? (d = "", r != null && (d = r.replace(me, "$&/") + "/"), ae(v, i, d, "", function(M) {
        return M;
      })) : v != null && (se(v) && (v = ye(v, d + (!v.key || S && S.key === v.key ? "" : ("" + v.key).replace(me, "$&/") + "/") + r)), i.push(v)), 1;
    if (S = 0, h = h === "" ? "." : h + ":", J(r))
      for (var _ = 0; _ < r.length; _++) {
        g = r[_];
        var E = h + ce(g, _);
        S += ae(g, i, d, E, v);
      }
    else if (E = Q(r), typeof E == "function")
      for (r = E.call(r), _ = 0; !(g = r.next()).done; )
        g = g.value, E = h + ce(g, _++), S += ae(g, i, d, E, v);
    else if (g === "object")
      throw i = String(r), Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    return S;
  }
  function q(r, i, d) {
    if (r == null)
      return r;
    var h = [], v = 0;
    return ae(r, h, "", "", function(g) {
      return i.call(d, g, v++);
    }), h;
  }
  function Z(r) {
    if (r._status === -1) {
      var i = r._result;
      i = i(), i.then(function(d) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = d);
      }, function(d) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = d);
      }), r._status === -1 && (r._status = 0, r._result = i);
    }
    if (r._status === 1)
      return r._result.default;
    throw r._result;
  }
  var l = { current: null }, ne = { transition: null }, he = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: ne, ReactCurrentOwner: z };
  return p.Children = { map: q, forEach: function(r, i, d) {
    q(r, function() {
      i.apply(this, arguments);
    }, d);
  }, count: function(r) {
    var i = 0;
    return q(r, function() {
      i++;
    }), i;
  }, toArray: function(r) {
    return q(r, function(i) {
      return i;
    }) || [];
  }, only: function(r) {
    if (!se(r))
      throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, p.Component = Y, p.Fragment = V, p.Profiler = T, p.PureComponent = W, p.StrictMode = j, p.Suspense = B, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, p.cloneElement = function(r, i, d) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var h = P({}, r.props), v = r.key, g = r.ref, S = r._owner;
    if (i != null) {
      if (i.ref !== void 0 && (g = i.ref, S = z.current), i.key !== void 0 && (v = "" + i.key), r.type && r.type.defaultProps)
        var _ = r.type.defaultProps;
      for (E in i)
        $.call(i, E) && !X.hasOwnProperty(E) && (h[E] = i[E] === void 0 && _ !== void 0 ? _[E] : i[E]);
    }
    var E = arguments.length - 2;
    if (E === 1)
      h.children = d;
    else if (1 < E) {
      _ = Array(E);
      for (var M = 0; M < E; M++)
        _[M] = arguments[M + 2];
      h.children = _;
    }
    return { $$typeof: m, type: r.type, key: v, ref: g, props: h, _owner: S };
  }, p.createContext = function(r) {
    return r = { $$typeof: A, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: k, _context: r }, r.Consumer = r;
  }, p.createElement = re, p.createFactory = function(r) {
    var i = re.bind(null, r);
    return i.type = r, i;
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(r) {
    return { $$typeof: D, render: r };
  }, p.isValidElement = se, p.lazy = function(r) {
    return { $$typeof: x, _payload: { _status: -1, _result: r }, _init: Z };
  }, p.memo = function(r, i) {
    return { $$typeof: N, type: r, compare: i === void 0 ? null : i };
  }, p.startTransition = function(r) {
    var i = ne.transition;
    ne.transition = {};
    try {
      r();
    } finally {
      ne.transition = i;
    }
  }, p.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, p.useCallback = function(r, i) {
    return l.current.useCallback(r, i);
  }, p.useContext = function(r) {
    return l.current.useContext(r);
  }, p.useDebugValue = function() {
  }, p.useDeferredValue = function(r) {
    return l.current.useDeferredValue(r);
  }, p.useEffect = function(r, i) {
    return l.current.useEffect(r, i);
  }, p.useId = function() {
    return l.current.useId();
  }, p.useImperativeHandle = function(r, i, d) {
    return l.current.useImperativeHandle(r, i, d);
  }, p.useInsertionEffect = function(r, i) {
    return l.current.useInsertionEffect(r, i);
  }, p.useLayoutEffect = function(r, i) {
    return l.current.useLayoutEffect(r, i);
  }, p.useMemo = function(r, i) {
    return l.current.useMemo(r, i);
  }, p.useReducer = function(r, i, d) {
    return l.current.useReducer(r, i, d);
  }, p.useRef = function(r) {
    return l.current.useRef(r);
  }, p.useState = function(r) {
    return l.current.useState(r);
  }, p.useSyncExternalStore = function(r, i, d) {
    return l.current.useSyncExternalStore(r, i, d);
  }, p.useTransition = function() {
    return l.current.useTransition();
  }, p.version = "18.2.0", p;
}
var pe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
pe.exports;
var Pt;
function Hr() {
  return Pt || (Pt = 1, function(m, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var V = "18.2.0", j = Symbol.for("react.element"), T = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), N = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), Y = Symbol.iterator, L = "@@iterator";
      function W(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = Y && e[Y] || e[L];
        return typeof t == "function" ? t : null;
      }
      var K = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, J = {
        transition: null
      }, $ = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, z = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, X = {}, re = null;
      function ye(e) {
        re = e;
      }
      X.setExtraStackFrame = function(e) {
        re = e;
      }, X.getCurrentStack = null, X.getStackAddendum = function() {
        var e = "";
        re && (e += re);
        var t = X.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var se = !1, je = !1, me = !1, ce = !1, ae = !1, q = {
        ReactCurrentDispatcher: K,
        ReactCurrentBatchConfig: J,
        ReactCurrentOwner: z
      };
      q.ReactDebugCurrentFrame = X, q.ReactCurrentActQueue = $;
      function Z(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          ne("warn", e, n);
        }
      }
      function l(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          ne("error", e, n);
        }
      }
      function ne(e, t, n) {
        {
          var a = q.ReactDebugCurrentFrame, o = a.getStackAddendum();
          o !== "" && (t += "%s", n = n.concat([o]));
          var c = n.map(function(u) {
            return String(u);
          });
          c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
        }
      }
      var he = {};
      function r(e, t) {
        {
          var n = e.constructor, a = n && (n.displayName || n.name) || "ReactClass", o = a + "." + t;
          if (he[o])
            return;
          l("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, a), he[o] = !0;
        }
      }
      var i = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, t, n) {
          r(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, t, n, a) {
          r(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, t, n, a) {
          r(e, "setState");
        }
      }, d = Object.assign, h = {};
      Object.freeze(h);
      function v(e, t, n) {
        this.props = e, this.context = t, this.refs = h, this.updater = n || i;
      }
      v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, v.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var g = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, S = function(e, t) {
          Object.defineProperty(v.prototype, e, {
            get: function() {
              Z("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var _ in g)
          g.hasOwnProperty(_) && S(_, g[_]);
      }
      function E() {
      }
      E.prototype = v.prototype;
      function M(e, t, n) {
        this.props = e, this.context = t, this.refs = h, this.updater = n || i;
      }
      var Ae = M.prototype = new E();
      Ae.constructor = M, d(Ae, v.prototype), Ae.isPureReactComponent = !0;
      function jt() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var At = Array.isArray;
      function be(e) {
        return At(e);
      }
      function $t(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function Ft(e) {
        try {
          return Be(e), !1;
        } catch {
          return !0;
        }
      }
      function Be(e) {
        return "" + e;
      }
      function ge(e) {
        if (Ft(e))
          return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $t(e)), Be(e);
      }
      function It(e, t, n) {
        var a = e.displayName;
        if (a)
          return a;
        var o = t.displayName || t.name || "";
        return o !== "" ? n + "(" + o + ")" : n;
      }
      function He(e) {
        return e.displayName || "Context";
      }
      function ee(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case k:
            return "Fragment";
          case T:
            return "Portal";
          case D:
            return "Profiler";
          case A:
            return "StrictMode";
          case H:
            return "Suspense";
          case Q:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              var t = e;
              return He(t) + ".Consumer";
            case B:
              var n = e;
              return He(n._context) + ".Provider";
            case x:
              return It(e, e.render, "ForwardRef");
            case F:
              var a = e.displayName || null;
              return a !== null ? a : ee(e.type) || "Memo";
            case P: {
              var o = e, c = o._payload, u = o._init;
              try {
                return ee(u(c));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var le = Object.prototype.hasOwnProperty, qe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ge, Ke, $e;
      $e = {};
      function Je(e) {
        if (le.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Qe(e) {
        if (le.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Dt(e, t) {
        var n = function() {
          Ge || (Ge = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function xt(e, t) {
        var n = function() {
          Ke || (Ke = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function Nt(e) {
        if (typeof e.ref == "string" && z.current && e.__self && z.current.stateNode !== e.__self) {
          var t = ee(z.current.type);
          $e[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), $e[t] = !0);
        }
      }
      var Fe = function(e, t, n, a, o, c, u) {
        var f = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: j,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: n,
          props: u,
          // Record the component responsible for creating this element.
          _owner: c
        };
        return f._store = {}, Object.defineProperty(f._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(f, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.defineProperty(f, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
      };
      function Lt(e, t, n) {
        var a, o = {}, c = null, u = null, f = null, y = null;
        if (t != null) {
          Je(t) && (u = t.ref, Nt(t)), Qe(t) && (ge(t.key), c = "" + t.key), f = t.__self === void 0 ? null : t.__self, y = t.__source === void 0 ? null : t.__source;
          for (a in t)
            le.call(t, a) && !qe.hasOwnProperty(a) && (o[a] = t[a]);
        }
        var b = arguments.length - 2;
        if (b === 1)
          o.children = n;
        else if (b > 1) {
          for (var R = Array(b), w = 0; w < b; w++)
            R[w] = arguments[w + 2];
          Object.freeze && Object.freeze(R), o.children = R;
        }
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (a in C)
            o[a] === void 0 && (o[a] = C[a]);
        }
        if (c || u) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Dt(o, O), u && xt(o, O);
        }
        return Fe(e, c, u, f, y, z.current, o);
      }
      function Mt(e, t) {
        var n = Fe(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Ut(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, o = d({}, e.props), c = e.key, u = e.ref, f = e._self, y = e._source, b = e._owner;
        if (t != null) {
          Je(t) && (u = t.ref, b = z.current), Qe(t) && (ge(t.key), c = "" + t.key);
          var R;
          e.type && e.type.defaultProps && (R = e.type.defaultProps);
          for (a in t)
            le.call(t, a) && !qe.hasOwnProperty(a) && (t[a] === void 0 && R !== void 0 ? o[a] = R[a] : o[a] = t[a]);
        }
        var w = arguments.length - 2;
        if (w === 1)
          o.children = n;
        else if (w > 1) {
          for (var C = Array(w), O = 0; O < w; O++)
            C[O] = arguments[O + 2];
          o.children = C;
        }
        return Fe(e.type, c, u, f, y, b, o);
      }
      function oe(e) {
        return typeof e == "object" && e !== null && e.$$typeof === j;
      }
      var Xe = ".", Vt = ":";
      function Wt(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(t, function(o) {
          return n[o];
        });
        return "$" + a;
      }
      var Ze = !1, Yt = /\/+/g;
      function et(e) {
        return e.replace(Yt, "$&/");
      }
      function Ie(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (ge(e.key), Wt("" + e.key)) : t.toString(36);
      }
      function _e(e, t, n, a, o) {
        var c = typeof e;
        (c === "undefined" || c === "boolean") && (e = null);
        var u = !1;
        if (e === null)
          u = !0;
        else
          switch (c) {
            case "string":
            case "number":
              u = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case j:
                case T:
                  u = !0;
              }
          }
        if (u) {
          var f = e, y = o(f), b = a === "" ? Xe + Ie(f, 0) : a;
          if (be(y)) {
            var R = "";
            b != null && (R = et(b) + "/"), _e(y, t, R, "", function(xr) {
              return xr;
            });
          } else
            y != null && (oe(y) && (y.key && (!f || f.key !== y.key) && ge(y.key), y = Mt(
              y,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (y.key && (!f || f.key !== y.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                et("" + y.key) + "/"
              ) : "") + b
            )), t.push(y));
          return 1;
        }
        var w, C, O = 0, I = a === "" ? Xe : a + Vt;
        if (be(e))
          for (var ke = 0; ke < e.length; ke++)
            w = e[ke], C = I + Ie(w, ke), O += _e(w, t, n, C, o);
        else {
          var Ye = W(e);
          if (typeof Ye == "function") {
            var Ct = e;
            Ye === Ct.entries && (Ze || Z("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ze = !0);
            for (var Ir = Ye.call(Ct), St, Dr = 0; !(St = Ir.next()).done; )
              w = St.value, C = I + Ie(w, Dr++), O += _e(w, t, n, C, o);
          } else if (c === "object") {
            var Ot = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Ot === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Ot) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return O;
      }
      function Ee(e, t, n) {
        if (e == null)
          return e;
        var a = [], o = 0;
        return _e(e, a, "", "", function(c) {
          return t.call(n, c, o++);
        }), a;
      }
      function zt(e) {
        var t = 0;
        return Ee(e, function() {
          t++;
        }), t;
      }
      function Bt(e, t, n) {
        Ee(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function Ht(e) {
        return Ee(e, function(t) {
          return t;
        }) || [];
      }
      function qt(e) {
        if (!oe(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Gt(e) {
        var t = {
          $$typeof: N,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        t.Provider = {
          $$typeof: B,
          _context: t
        };
        var n = !1, a = !1, o = !1;
        {
          var c = {
            $$typeof: N,
            _context: t
          };
          Object.defineProperties(c, {
            Provider: {
              get: function() {
                return a || (a = !0, l("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(u) {
                t.Provider = u;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(u) {
                t._currentValue = u;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(u) {
                t._currentValue2 = u;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(u) {
                t._threadCount = u;
              }
            },
            Consumer: {
              get: function() {
                return n || (n = !0, l("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), t.Consumer;
              }
            },
            displayName: {
              get: function() {
                return t.displayName;
              },
              set: function(u) {
                o || (Z("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", u), o = !0);
              }
            }
          }), t.Consumer = c;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var fe = -1, De = 0, tt = 1, Kt = 2;
      function Jt(e) {
        if (e._status === fe) {
          var t = e._result, n = t();
          if (n.then(function(c) {
            if (e._status === De || e._status === fe) {
              var u = e;
              u._status = tt, u._result = c;
            }
          }, function(c) {
            if (e._status === De || e._status === fe) {
              var u = e;
              u._status = Kt, u._result = c;
            }
          }), e._status === fe) {
            var a = e;
            a._status = De, a._result = n;
          }
        }
        if (e._status === tt) {
          var o = e._result;
          return o === void 0 && l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, o), "default" in o || l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, o), o.default;
        } else
          throw e._result;
      }
      function Qt(e) {
        var t = {
          // We use these fields to store the result.
          _status: fe,
          _result: e
        }, n = {
          $$typeof: P,
          _payload: t,
          _init: Jt
        };
        {
          var a, o;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(c) {
                l("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = c, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(c) {
                l("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = c, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function Xt(e) {
        e != null && e.$$typeof === F ? l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? l("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && l("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: x,
          render: e
        };
        {
          var n;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return n;
            },
            set: function(a) {
              n = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return t;
      }
      var rt;
      rt = Symbol.for("react.module.reference");
      function nt(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === k || e === D || ae || e === A || e === H || e === Q || ce || e === G || se || je || me || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === F || e.$$typeof === B || e.$$typeof === N || e.$$typeof === x || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === rt || e.getModuleId !== void 0));
      }
      function Zt(e, t) {
        nt(e) || l("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: F,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var a;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return n;
      }
      function U() {
        var e = K.current;
        return e === null && l(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function er(e) {
        var t = U();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? l("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && l("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function tr(e) {
        var t = U();
        return t.useState(e);
      }
      function rr(e, t, n) {
        var a = U();
        return a.useReducer(e, t, n);
      }
      function nr(e) {
        var t = U();
        return t.useRef(e);
      }
      function ar(e, t) {
        var n = U();
        return n.useEffect(e, t);
      }
      function or(e, t) {
        var n = U();
        return n.useInsertionEffect(e, t);
      }
      function ir(e, t) {
        var n = U();
        return n.useLayoutEffect(e, t);
      }
      function ur(e, t) {
        var n = U();
        return n.useCallback(e, t);
      }
      function sr(e, t) {
        var n = U();
        return n.useMemo(e, t);
      }
      function cr(e, t, n) {
        var a = U();
        return a.useImperativeHandle(e, t, n);
      }
      function lr(e, t) {
        {
          var n = U();
          return n.useDebugValue(e, t);
        }
      }
      function fr() {
        var e = U();
        return e.useTransition();
      }
      function dr(e) {
        var t = U();
        return t.useDeferredValue(e);
      }
      function pr() {
        var e = U();
        return e.useId();
      }
      function vr(e, t, n) {
        var a = U();
        return a.useSyncExternalStore(e, t, n);
      }
      var de = 0, at, ot, it, ut, st, ct, lt;
      function ft() {
      }
      ft.__reactDisabledLog = !0;
      function yr() {
        {
          if (de === 0) {
            at = console.log, ot = console.info, it = console.warn, ut = console.error, st = console.group, ct = console.groupCollapsed, lt = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ft,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          de++;
        }
      }
      function mr() {
        {
          if (de--, de === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: d({}, e, {
                value: at
              }),
              info: d({}, e, {
                value: ot
              }),
              warn: d({}, e, {
                value: it
              }),
              error: d({}, e, {
                value: ut
              }),
              group: d({}, e, {
                value: st
              }),
              groupCollapsed: d({}, e, {
                value: ct
              }),
              groupEnd: d({}, e, {
                value: lt
              })
            });
          }
          de < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xe = q.ReactCurrentDispatcher, Ne;
      function Re(e, t, n) {
        {
          if (Ne === void 0)
            try {
              throw Error();
            } catch (o) {
              var a = o.stack.trim().match(/\n( *(at )?)/);
              Ne = a && a[1] || "";
            }
          return `
` + Ne + e;
        }
      }
      var Le = !1, we;
      {
        var hr = typeof WeakMap == "function" ? WeakMap : Map;
        we = new hr();
      }
      function dt(e, t) {
        if (!e || Le)
          return "";
        {
          var n = we.get(e);
          if (n !== void 0)
            return n;
        }
        var a;
        Le = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var c;
        c = xe.current, xe.current = null, yr();
        try {
          if (t) {
            var u = function() {
              throw Error();
            };
            if (Object.defineProperty(u.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(u, []);
              } catch (I) {
                a = I;
              }
              Reflect.construct(e, [], u);
            } else {
              try {
                u.call();
              } catch (I) {
                a = I;
              }
              e.call(u.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (I) {
              a = I;
            }
            e();
          }
        } catch (I) {
          if (I && a && typeof I.stack == "string") {
            for (var f = I.stack.split(`
`), y = a.stack.split(`
`), b = f.length - 1, R = y.length - 1; b >= 1 && R >= 0 && f[b] !== y[R]; )
              R--;
            for (; b >= 1 && R >= 0; b--, R--)
              if (f[b] !== y[R]) {
                if (b !== 1 || R !== 1)
                  do
                    if (b--, R--, R < 0 || f[b] !== y[R]) {
                      var w = `
` + f[b].replace(" at new ", " at ");
                      return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && we.set(e, w), w;
                    }
                  while (b >= 1 && R >= 0);
                break;
              }
          }
        } finally {
          Le = !1, xe.current = c, mr(), Error.prepareStackTrace = o;
        }
        var C = e ? e.displayName || e.name : "", O = C ? Re(C) : "";
        return typeof e == "function" && we.set(e, O), O;
      }
      function br(e, t, n) {
        return dt(e, !1);
      }
      function gr(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function Ce(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return dt(e, gr(e));
        if (typeof e == "string")
          return Re(e);
        switch (e) {
          case H:
            return Re("Suspense");
          case Q:
            return Re("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case x:
              return br(e.render);
            case F:
              return Ce(e.type, t, n);
            case P: {
              var a = e, o = a._payload, c = a._init;
              try {
                return Ce(c(o), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var pt = {}, vt = q.ReactDebugCurrentFrame;
      function Se(e) {
        if (e) {
          var t = e._owner, n = Ce(e.type, e._source, t ? t.type : null);
          vt.setExtraStackFrame(n);
        } else
          vt.setExtraStackFrame(null);
      }
      function _r(e, t, n, a, o) {
        {
          var c = Function.call.bind(le);
          for (var u in e)
            if (c(e, u)) {
              var f = void 0;
              try {
                if (typeof e[u] != "function") {
                  var y = Error((a || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw y.name = "Invariant Violation", y;
                }
                f = e[u](t, u, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (b) {
                f = b;
              }
              f && !(f instanceof Error) && (Se(o), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, u, typeof f), Se(null)), f instanceof Error && !(f.message in pt) && (pt[f.message] = !0, Se(o), l("Failed %s type: %s", n, f.message), Se(null));
            }
        }
      }
      function ie(e) {
        if (e) {
          var t = e._owner, n = Ce(e.type, e._source, t ? t.type : null);
          ye(n);
        } else
          ye(null);
      }
      var Me;
      Me = !1;
      function yt() {
        if (z.current) {
          var e = ee(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Er(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
      function Rr(e) {
        return e != null ? Er(e.__source) : "";
      }
      var mt = {};
      function wr(e) {
        var t = yt();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
      function ht(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = wr(t);
          if (!mt[n]) {
            mt[n] = !0;
            var a = "";
            e && e._owner && e._owner !== z.current && (a = " It was passed a child from " + ee(e._owner.type) + "."), ie(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), ie(null);
          }
        }
      }
      function bt(e, t) {
        if (typeof e == "object") {
          if (be(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              oe(a) && ht(a, t);
            }
          else if (oe(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var o = W(e);
            if (typeof o == "function" && o !== e.entries)
              for (var c = o.call(e), u; !(u = c.next()).done; )
                oe(u.value) && ht(u.value, t);
          }
        }
      }
      function gt(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var n;
          if (typeof t == "function")
            n = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === x || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === F))
            n = t.propTypes;
          else
            return;
          if (n) {
            var a = ee(t);
            _r(n, e.props, "prop", a, e);
          } else if (t.PropTypes !== void 0 && !Me) {
            Me = !0;
            var o = ee(t);
            l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Cr(e) {
        {
          for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
            var a = t[n];
            if (a !== "children" && a !== "key") {
              ie(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), ie(null);
              break;
            }
          }
          e.ref !== null && (ie(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
        }
      }
      function _t(e, t, n) {
        var a = nt(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c = Rr(t);
          c ? o += c : o += yt();
          var u;
          e === null ? u = "null" : be(e) ? u = "array" : e !== void 0 && e.$$typeof === j ? (u = "<" + (ee(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, o);
        }
        var f = Lt.apply(this, arguments);
        if (f == null)
          return f;
        if (a)
          for (var y = 2; y < arguments.length; y++)
            bt(arguments[y], e);
        return e === k ? Cr(f) : gt(f), f;
      }
      var Et = !1;
      function Sr(e) {
        var t = _t.bind(null, e);
        return t.type = e, Et || (Et = !0, Z("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return Z("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Or(e, t, n) {
        for (var a = Ut.apply(this, arguments), o = 2; o < arguments.length; o++)
          bt(arguments[o], a.type);
        return gt(a), a;
      }
      function Tr(e, t) {
        var n = J.transition;
        J.transition = {};
        var a = J.transition;
        J.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (J.transition = n, n === null && a._updatedFibers) {
            var o = a._updatedFibers.size;
            o > 10 && Z("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), a._updatedFibers.clear();
          }
        }
      }
      var Rt = !1, Oe = null;
      function kr(e) {
        if (Oe === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = m && m[t];
            Oe = n.call(m, "timers").setImmediate;
          } catch {
            Oe = function(o) {
              Rt === !1 && (Rt = !0, typeof MessageChannel > "u" && l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var c = new MessageChannel();
              c.port1.onmessage = o, c.port2.postMessage(void 0);
            };
          }
        return Oe(e);
      }
      var ue = 0, wt = !1;
      function Pr(e) {
        {
          var t = ue;
          ue++, $.current === null && ($.current = []);
          var n = $.isBatchingLegacy, a;
          try {
            if ($.isBatchingLegacy = !0, a = e(), !n && $.didScheduleLegacyUpdate) {
              var o = $.current;
              o !== null && ($.didScheduleLegacyUpdate = !1, We(o));
            }
          } catch (C) {
            throw Te(t), C;
          } finally {
            $.isBatchingLegacy = n;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var c = a, u = !1, f = {
              then: function(C, O) {
                u = !0, c.then(function(I) {
                  Te(t), ue === 0 ? Ue(I, C, O) : C(I);
                }, function(I) {
                  Te(t), O(I);
                });
              }
            };
            return !wt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              u || (wt = !0, l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), f;
          } else {
            var y = a;
            if (Te(t), ue === 0) {
              var b = $.current;
              b !== null && (We(b), $.current = null);
              var R = {
                then: function(C, O) {
                  $.current === null ? ($.current = [], Ue(y, C, O)) : C(y);
                }
              };
              return R;
            } else {
              var w = {
                then: function(C, O) {
                  C(y);
                }
              };
              return w;
            }
          }
        }
      }
      function Te(e) {
        e !== ue - 1 && l("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ue = e;
      }
      function Ue(e, t, n) {
        {
          var a = $.current;
          if (a !== null)
            try {
              We(a), kr(function() {
                a.length === 0 ? ($.current = null, t(e)) : Ue(e, t, n);
              });
            } catch (o) {
              n(o);
            }
          else
            t(e);
        }
      }
      var Ve = !1;
      function We(e) {
        if (!Ve) {
          Ve = !0;
          var t = 0;
          try {
            for (; t < e.length; t++) {
              var n = e[t];
              do
                n = n(!0);
              while (n !== null);
            }
            e.length = 0;
          } catch (a) {
            throw e = e.slice(t + 1), a;
          } finally {
            Ve = !1;
          }
        }
      }
      var jr = _t, Ar = Or, $r = Sr, Fr = {
        map: Ee,
        forEach: Bt,
        count: zt,
        toArray: Ht,
        only: qt
      };
      s.Children = Fr, s.Component = v, s.Fragment = k, s.Profiler = D, s.PureComponent = M, s.StrictMode = A, s.Suspense = H, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, s.cloneElement = Ar, s.createContext = Gt, s.createElement = jr, s.createFactory = $r, s.createRef = jt, s.forwardRef = Xt, s.isValidElement = oe, s.lazy = Qt, s.memo = Zt, s.startTransition = Tr, s.unstable_act = Pr, s.useCallback = ur, s.useContext = er, s.useDebugValue = lr, s.useDeferredValue = dr, s.useEffect = ar, s.useId = pr, s.useImperativeHandle = cr, s.useInsertionEffect = or, s.useLayoutEffect = ir, s.useMemo = sr, s.useReducer = rr, s.useRef = nr, s.useState = tr, s.useSyncExternalStore = vr, s.useTransition = fr, s.version = V, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(pe, pe.exports)), pe.exports;
}
process.env.NODE_ENV === "production" ? ze.exports = Br() : ze.exports = Hr();
var qr = ze.exports;
const Gr = /* @__PURE__ */ zr(qr);
var Kr = Object.defineProperty, Jr = Object.getOwnPropertyDescriptor, ve = (m, s, V, j) => {
  for (var T = j > 1 ? void 0 : j ? Jr(s, V) : s, k = m.length - 1, A; k >= 0; k--)
    (A = m[k]) && (T = (j ? A(s, V, T) : A(T)) || T);
  return j && T && Kr(s, V, T), T;
};
let te = class extends Lr {
  constructor() {
    super(), this.GetApiUrl = "", this.name = "", this.password = "", this.email = "";
  }
  async submitForm(m) {
    m.stopPropagation(), console.log(this.name, this.password, this.email), await fetch(this.GetApiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.name,
        password: this.password,
        email: this.email
      })
    }).then((s) => s.json()).then(
      (s) => {
        console.log(s);
      }
    );
  }
  render() {
    return Mr`
        <div class="container"> 
            <form>
                <div class="infoInputs">
                    <label for="name">Name:</label>
                    <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    .value=${this.name} 
                    @input="${this.handleName}" 
                    required/>
                </div>
                <div class="infoInputs">
                    <label for="password">Password:</label>
                    <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    .value=${this.password} 
                    @input="${this.handlePassword}" 
                    required/>
                </div>
                <div class="infoInputs">
                    <label for="email">Email:</label>
                    <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    .value=${this.email} 
                    @input="${this.handleEmail}" 
                    required/>
                </div>
            </form>
            <button class="button-submit" type="submit" @click=${this.submitForm}>Submit</button>
        </div>
        `;
  }
  handleName(m) {
    this.name = m.target.value;
  }
  handlePassword(m) {
    this.password = m.target.value;
  }
  handleEmail(m) {
    this.email = m.target.value;
  }
};
te.styles = Nr`
        .container {
            display: grid;
            grid-template-rows: auto auto;
            background:    var(--body-bg, #f5f5dc);
            color:         var(--body-color, #1F1F6F);
            border:        var(--body-border,1px solid #1F1F6F);
            border-radius: var(--body-border-radius,0.2rem);
            padding:       var(--body-padding, 2rem);
            font-family:   var(--font-family, Helvetica);
            font-size:     var(--form-font-size, 20px);
            font-weight:   var(--form-font-weight, 400);
        }

        from {
            grid-column: 1/-1;
        }

        input {
            width: fit-content;
            padding: 6px 10px;
            margin: 1% 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .infoInputs {
            margin-top: 2%;
        }
        
        .button-submit {
            grid-column: -1;
            justify-self: flex-end;
            background-color: var(--button-bg, #f5f5dc);
            color:            var(--button-color, #1F1F6F);
            border:           var(--button-border,1px solid #1F1F6F);
            border-radius:    var(--button-border-radius,0.2rem);
            margin-top: 2rem;
            padding: 0.5rem 1.5rem;
            cursor: pointer;
            transition: background-color 0.3s;
            font-family: var(--font-family, Helvetica);
            font-size:   var(--button-font-size, 16px);
            font-weight: var(--button-font-weight, 400);
        }

        .button-submit:hover {
            background-color: var(--button-hover-color, white);
        }
    `;
ve([
  Pe({ type: String, reflect: !0 })
], te.prototype, "name", 2);
ve([
  Pe({ type: String, reflect: !0 })
], te.prototype, "password", 2);
ve([
  Pe({ type: String, reflect: !0 })
], te.prototype, "email", 2);
ve([
  Pe({ type: URL })
], te.prototype, "GetApiUrl", 2);
te = ve([
  Ur("form-user-jffp")
], te);
const Zr = Yr(
  Gr,
  "form-user-jffp-react",
  te,
  {
    onIconClick: "icon-click"
  }
);
export {
  te as FormUserJffp,
  Zr as FormUserJffpReact
};
