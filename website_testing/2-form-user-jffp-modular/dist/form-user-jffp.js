import { css as Nr, LitElement as Mr, html as Ot } from "lit";
import { property as jt, customElement as Ur } from "lit/decorators.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vr = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), Tt = /* @__PURE__ */ new WeakMap(), Wr = (v, s, I, S, T) => {
  const g = T == null ? void 0 : T[s];
  g === void 0 || I === S ? I == null && s in HTMLElement.prototype ? v.removeAttribute(s) : v[s] = I : ((k, x, B) => {
    let N = Tt.get(k);
    N === void 0 && Tt.set(k, N = /* @__PURE__ */ new Map());
    let L = N.get(x);
    B !== void 0 ? L === void 0 ? (N.set(x, L = { handleEvent: B }), k.addEventListener(x, L)) : L.handleEvent = B : L !== void 0 && (N.delete(x), k.removeEventListener(x, L));
  })(v, g, I);
};
function Yr(v = window.React, s, I, S, T) {
  let g, k, x;
  if (s === void 0) {
    const F = v;
    ({ tagName: k, elementClass: x, events: S, displayName: T } = F), g = F.react;
  } else
    g = v, x = I, k = s;
  const B = g.Component, N = g.createElement, L = new Set(Object.keys(S ?? {}));
  class H extends B {
    constructor() {
      super(...arguments), this.o = null;
    }
    t(A) {
      if (this.o !== null)
        for (const G in this.i)
          Wr(this.o, G, this.props[G], A ? A[G] : void 0, S);
    }
    componentDidMount() {
      this.t();
    }
    componentDidUpdate(A) {
      this.t(A);
    }
    render() {
      const { _$Gl: A, ...G } = this.props;
      this.h !== A && (this.u = (M) => {
        A !== null && ((W, K) => {
          typeof W == "function" ? W(K) : W.current = K;
        })(A, M), this.o = M, this.h = A;
      }), this.i = {};
      const Y = { ref: this.u };
      for (const [M, W] of Object.entries(G))
        Vr.has(M) ? Y[M === "className" ? "class" : M] = W : L.has(M) || M in x.prototype ? this.i[M] = W : Y[M] = W;
      return N(k, Y);
    }
  }
  H.displayName = T ?? x.name;
  const Q = g.forwardRef((F, A) => N(H, { ...F, _$Gl: A }, F == null ? void 0 : F.children));
  return Q.displayName = H.displayName, Q;
}
function zr(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var We = { exports: {} }, p = {};
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
  var v = Symbol.for("react.element"), s = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), k = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), N = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), H = Symbol.iterator;
  function Q(r) {
    return r === null || typeof r != "object" ? null : (r = H && r[H] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var F = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, A = Object.assign, G = {};
  function Y(r, u, d) {
    this.props = r, this.context = u, this.refs = G, this.updater = d || F;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(r, u) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, u, "setState");
  }, Y.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function M() {
  }
  M.prototype = Y.prototype;
  function W(r, u, d) {
    this.props = r, this.context = u, this.refs = G, this.updater = d || F;
  }
  var K = W.prototype = new M();
  K.constructor = W, A(K, Y.prototype), K.isPureReactComponent = !0;
  var J = Array.isArray, $ = Object.prototype.hasOwnProperty, z = { current: null }, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(r, u, d) {
    var h, y = {}, _ = null, P = null;
    if (u != null)
      for (h in u.ref !== void 0 && (P = u.ref), u.key !== void 0 && (_ = "" + u.key), u)
        $.call(u, h) && !X.hasOwnProperty(h) && (y[h] = u[h]);
    var E = arguments.length - 2;
    if (E === 1)
      y.children = d;
    else if (1 < E) {
      for (var R = Array(E), U = 0; U < E; U++)
        R[U] = arguments[U + 2];
      y.children = R;
    }
    if (r && r.defaultProps)
      for (h in E = r.defaultProps, E)
        y[h] === void 0 && (y[h] = E[h]);
    return { $$typeof: v, type: r, key: _, ref: P, props: y, _owner: z.current };
  }
  function ve(r, u) {
    return { $$typeof: v, type: r.type, key: u, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function se(r) {
    return typeof r == "object" && r !== null && r.$$typeof === v;
  }
  function ke(r) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(d) {
      return u[d];
    });
  }
  var ye = /\/+/g;
  function ce(r, u) {
    return typeof r == "object" && r !== null && r.key != null ? ke("" + r.key) : u.toString(36);
  }
  function ne(r, u, d, h, y) {
    var _ = typeof r;
    (_ === "undefined" || _ === "boolean") && (r = null);
    var P = !1;
    if (r === null)
      P = !0;
    else
      switch (_) {
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case v:
            case s:
              P = !0;
          }
      }
    if (P)
      return P = r, y = y(P), r = h === "" ? "." + ce(P, 0) : h, J(y) ? (d = "", r != null && (d = r.replace(ye, "$&/") + "/"), ne(y, u, d, "", function(U) {
        return U;
      })) : y != null && (se(y) && (y = ve(y, d + (!y.key || P && P.key === y.key ? "" : ("" + y.key).replace(ye, "$&/") + "/") + r)), u.push(y)), 1;
    if (P = 0, h = h === "" ? "." : h + ":", J(r))
      for (var E = 0; E < r.length; E++) {
        _ = r[E];
        var R = h + ce(_, E);
        P += ne(_, u, d, R, y);
      }
    else if (R = Q(r), typeof R == "function")
      for (r = R.call(r), E = 0; !(_ = r.next()).done; )
        _ = _.value, R = h + ce(_, E++), P += ne(_, u, d, R, y);
    else if (_ === "object")
      throw u = String(r), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function q(r, u, d) {
    if (r == null)
      return r;
    var h = [], y = 0;
    return ne(r, h, "", "", function(_) {
      return u.call(d, _, y++);
    }), h;
  }
  function Z(r) {
    if (r._status === -1) {
      var u = r._result;
      u = u(), u.then(function(d) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = d);
      }, function(d) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = d);
      }), r._status === -1 && (r._status = 0, r._result = u);
    }
    if (r._status === 1)
      return r._result.default;
    throw r._result;
  }
  var l = { current: null }, re = { transition: null }, me = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: re, ReactCurrentOwner: z };
  return p.Children = { map: q, forEach: function(r, u, d) {
    q(r, function() {
      u.apply(this, arguments);
    }, d);
  }, count: function(r) {
    var u = 0;
    return q(r, function() {
      u++;
    }), u;
  }, toArray: function(r) {
    return q(r, function(u) {
      return u;
    }) || [];
  }, only: function(r) {
    if (!se(r))
      throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, p.Component = Y, p.Fragment = I, p.Profiler = T, p.PureComponent = W, p.StrictMode = S, p.Suspense = B, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, p.cloneElement = function(r, u, d) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var h = A({}, r.props), y = r.key, _ = r.ref, P = r._owner;
    if (u != null) {
      if (u.ref !== void 0 && (_ = u.ref, P = z.current), u.key !== void 0 && (y = "" + u.key), r.type && r.type.defaultProps)
        var E = r.type.defaultProps;
      for (R in u)
        $.call(u, R) && !X.hasOwnProperty(R) && (h[R] = u[R] === void 0 && E !== void 0 ? E[R] : u[R]);
    }
    var R = arguments.length - 2;
    if (R === 1)
      h.children = d;
    else if (1 < R) {
      E = Array(R);
      for (var U = 0; U < R; U++)
        E[U] = arguments[U + 2];
      h.children = E;
    }
    return { $$typeof: v, type: r.type, key: y, ref: _, props: h, _owner: P };
  }, p.createContext = function(r) {
    return r = { $$typeof: k, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: g, _context: r }, r.Consumer = r;
  }, p.createElement = te, p.createFactory = function(r) {
    var u = te.bind(null, r);
    return u.type = r, u;
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(r) {
    return { $$typeof: x, render: r };
  }, p.isValidElement = se, p.lazy = function(r) {
    return { $$typeof: L, _payload: { _status: -1, _result: r }, _init: Z };
  }, p.memo = function(r, u) {
    return { $$typeof: N, type: r, compare: u === void 0 ? null : u };
  }, p.startTransition = function(r) {
    var u = re.transition;
    re.transition = {};
    try {
      r();
    } finally {
      re.transition = u;
    }
  }, p.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, p.useCallback = function(r, u) {
    return l.current.useCallback(r, u);
  }, p.useContext = function(r) {
    return l.current.useContext(r);
  }, p.useDebugValue = function() {
  }, p.useDeferredValue = function(r) {
    return l.current.useDeferredValue(r);
  }, p.useEffect = function(r, u) {
    return l.current.useEffect(r, u);
  }, p.useId = function() {
    return l.current.useId();
  }, p.useImperativeHandle = function(r, u, d) {
    return l.current.useImperativeHandle(r, u, d);
  }, p.useInsertionEffect = function(r, u) {
    return l.current.useInsertionEffect(r, u);
  }, p.useLayoutEffect = function(r, u) {
    return l.current.useLayoutEffect(r, u);
  }, p.useMemo = function(r, u) {
    return l.current.useMemo(r, u);
  }, p.useReducer = function(r, u, d) {
    return l.current.useReducer(r, u, d);
  }, p.useRef = function(r) {
    return l.current.useRef(r);
  }, p.useState = function(r) {
    return l.current.useState(r);
  }, p.useSyncExternalStore = function(r, u, d) {
    return l.current.useSyncExternalStore(r, u, d);
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
  return Pt || (Pt = 1, function(v, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var I = "18.2.0", S = Symbol.for("react.element"), T = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), N = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), Y = Symbol.iterator, M = "@@iterator";
      function W(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = Y && e[Y] || e[M];
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
      }, X = {}, te = null;
      function ve(e) {
        te = e;
      }
      X.setExtraStackFrame = function(e) {
        te = e;
      }, X.getCurrentStack = null, X.getStackAddendum = function() {
        var e = "";
        te && (e += te);
        var t = X.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var se = !1, ke = !1, ye = !1, ce = !1, ne = !1, q = {
        ReactCurrentDispatcher: K,
        ReactCurrentBatchConfig: J,
        ReactCurrentOwner: z
      };
      q.ReactDebugCurrentFrame = X, q.ReactCurrentActQueue = $;
      function Z(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o];
          re("warn", e, n);
        }
      }
      function l(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o];
          re("error", e, n);
        }
      }
      function re(e, t, n) {
        {
          var o = q.ReactDebugCurrentFrame, a = o.getStackAddendum();
          a !== "" && (t += "%s", n = n.concat([a]));
          var c = n.map(function(i) {
            return String(i);
          });
          c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
        }
      }
      var me = {};
      function r(e, t) {
        {
          var n = e.constructor, o = n && (n.displayName || n.name) || "ReactClass", a = o + "." + t;
          if (me[a])
            return;
          l("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, o), me[a] = !0;
        }
      }
      var u = {
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
        enqueueReplaceState: function(e, t, n, o) {
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
        enqueueSetState: function(e, t, n, o) {
          r(e, "setState");
        }
      }, d = Object.assign, h = {};
      Object.freeze(h);
      function y(e, t, n) {
        this.props = e, this.context = t, this.refs = h, this.updater = n || u;
      }
      y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, y.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var _ = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, P = function(e, t) {
          Object.defineProperty(y.prototype, e, {
            get: function() {
              Z("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var E in _)
          _.hasOwnProperty(E) && P(E, _[E]);
      }
      function R() {
      }
      R.prototype = y.prototype;
      function U(e, t, n) {
        this.props = e, this.context = t, this.refs = h, this.updater = n || u;
      }
      var Pe = U.prototype = new R();
      Pe.constructor = U, d(Pe, y.prototype), Pe.isPureReactComponent = !0;
      function At() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var $t = Array.isArray;
      function he(e) {
        return $t(e);
      }
      function Ft(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function Dt(e) {
        try {
          return ze(e), !1;
        } catch {
          return !0;
        }
      }
      function ze(e) {
        return "" + e;
      }
      function ge(e) {
        if (Dt(e))
          return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ft(e)), ze(e);
      }
      function It(e, t, n) {
        var o = e.displayName;
        if (o)
          return o;
        var a = t.displayName || t.name || "";
        return a !== "" ? n + "(" + a + ")" : n;
      }
      function Be(e) {
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
          case g:
            return "Fragment";
          case T:
            return "Portal";
          case x:
            return "Profiler";
          case k:
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
              return Be(t) + ".Consumer";
            case B:
              var n = e;
              return Be(n._context) + ".Provider";
            case L:
              return It(e, e.render, "ForwardRef");
            case F:
              var o = e.displayName || null;
              return o !== null ? o : ee(e.type) || "Memo";
            case A: {
              var a = e, c = a._payload, i = a._init;
              try {
                return ee(i(c));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var le = Object.prototype.hasOwnProperty, He = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, qe, Ge, je;
      je = {};
      function Ke(e) {
        if (le.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Je(e) {
        if (le.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function xt(e, t) {
        var n = function() {
          qe || (qe = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function Lt(e, t) {
        var n = function() {
          Ge || (Ge = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function Nt(e) {
        if (typeof e.ref == "string" && z.current && e.__self && z.current.stateNode !== e.__self) {
          var t = ee(z.current.type);
          je[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), je[t] = !0);
        }
      }
      var Ae = function(e, t, n, o, a, c, i) {
        var f = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: n,
          props: i,
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
          value: o
        }), Object.defineProperty(f, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
      };
      function Mt(e, t, n) {
        var o, a = {}, c = null, i = null, f = null, m = null;
        if (t != null) {
          Ke(t) && (i = t.ref, Nt(t)), Je(t) && (ge(t.key), c = "" + t.key), f = t.__self === void 0 ? null : t.__self, m = t.__source === void 0 ? null : t.__source;
          for (o in t)
            le.call(t, o) && !He.hasOwnProperty(o) && (a[o] = t[o]);
        }
        var b = arguments.length - 2;
        if (b === 1)
          a.children = n;
        else if (b > 1) {
          for (var w = Array(b), C = 0; C < b; C++)
            w[C] = arguments[C + 2];
          Object.freeze && Object.freeze(w), a.children = w;
        }
        if (e && e.defaultProps) {
          var O = e.defaultProps;
          for (o in O)
            a[o] === void 0 && (a[o] = O[o]);
        }
        if (c || i) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && xt(a, j), i && Lt(a, j);
        }
        return Ae(e, c, i, f, m, z.current, a);
      }
      function Ut(e, t) {
        var n = Ae(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Vt(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, a = d({}, e.props), c = e.key, i = e.ref, f = e._self, m = e._source, b = e._owner;
        if (t != null) {
          Ke(t) && (i = t.ref, b = z.current), Je(t) && (ge(t.key), c = "" + t.key);
          var w;
          e.type && e.type.defaultProps && (w = e.type.defaultProps);
          for (o in t)
            le.call(t, o) && !He.hasOwnProperty(o) && (t[o] === void 0 && w !== void 0 ? a[o] = w[o] : a[o] = t[o]);
        }
        var C = arguments.length - 2;
        if (C === 1)
          a.children = n;
        else if (C > 1) {
          for (var O = Array(C), j = 0; j < C; j++)
            O[j] = arguments[j + 2];
          a.children = O;
        }
        return Ae(e.type, c, i, f, m, b, a);
      }
      function oe(e) {
        return typeof e == "object" && e !== null && e.$$typeof === S;
      }
      var Qe = ".", Wt = ":";
      function Yt(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(t, function(a) {
          return n[a];
        });
        return "$" + o;
      }
      var Xe = !1, zt = /\/+/g;
      function Ze(e) {
        return e.replace(zt, "$&/");
      }
      function $e(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (ge(e.key), Yt("" + e.key)) : t.toString(36);
      }
      function be(e, t, n, o, a) {
        var c = typeof e;
        (c === "undefined" || c === "boolean") && (e = null);
        var i = !1;
        if (e === null)
          i = !0;
        else
          switch (c) {
            case "string":
            case "number":
              i = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case S:
                case T:
                  i = !0;
              }
          }
        if (i) {
          var f = e, m = a(f), b = o === "" ? Qe + $e(f, 0) : o;
          if (he(m)) {
            var w = "";
            b != null && (w = Ze(b) + "/"), be(m, t, w, "", function(Lr) {
              return Lr;
            });
          } else
            m != null && (oe(m) && (m.key && (!f || f.key !== m.key) && ge(m.key), m = Ut(
              m,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (m.key && (!f || f.key !== m.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Ze("" + m.key) + "/"
              ) : "") + b
            )), t.push(m));
          return 1;
        }
        var C, O, j = 0, D = o === "" ? Qe : o + Wt;
        if (he(e))
          for (var Te = 0; Te < e.length; Te++)
            C = e[Te], O = D + $e(C, Te), j += be(C, t, n, O, a);
        else {
          var Ve = W(e);
          if (typeof Ve == "function") {
            var wt = e;
            Ve === wt.entries && (Xe || Z("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xe = !0);
            for (var Ir = Ve.call(wt), Ct, xr = 0; !(Ct = Ir.next()).done; )
              C = Ct.value, O = D + $e(C, xr++), j += be(C, t, n, O, a);
          } else if (c === "object") {
            var St = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (St === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : St) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return j;
      }
      function _e(e, t, n) {
        if (e == null)
          return e;
        var o = [], a = 0;
        return be(e, o, "", "", function(c) {
          return t.call(n, c, a++);
        }), o;
      }
      function Bt(e) {
        var t = 0;
        return _e(e, function() {
          t++;
        }), t;
      }
      function Ht(e, t, n) {
        _e(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function qt(e) {
        return _e(e, function(t) {
          return t;
        }) || [];
      }
      function Gt(e) {
        if (!oe(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Kt(e) {
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
        var n = !1, o = !1, a = !1;
        {
          var c = {
            $$typeof: N,
            _context: t
          };
          Object.defineProperties(c, {
            Provider: {
              get: function() {
                return o || (o = !0, l("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(i) {
                t.Provider = i;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(i) {
                t._currentValue = i;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(i) {
                t._currentValue2 = i;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(i) {
                t._threadCount = i;
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
              set: function(i) {
                a || (Z("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", i), a = !0);
              }
            }
          }), t.Consumer = c;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var fe = -1, Fe = 0, et = 1, Jt = 2;
      function Qt(e) {
        if (e._status === fe) {
          var t = e._result, n = t();
          if (n.then(function(c) {
            if (e._status === Fe || e._status === fe) {
              var i = e;
              i._status = et, i._result = c;
            }
          }, function(c) {
            if (e._status === Fe || e._status === fe) {
              var i = e;
              i._status = Jt, i._result = c;
            }
          }), e._status === fe) {
            var o = e;
            o._status = Fe, o._result = n;
          }
        }
        if (e._status === et) {
          var a = e._result;
          return a === void 0 && l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, a), "default" in a || l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, a), a.default;
        } else
          throw e._result;
      }
      function Xt(e) {
        var t = {
          // We use these fields to store the result.
          _status: fe,
          _result: e
        }, n = {
          $$typeof: A,
          _payload: t,
          _init: Qt
        };
        {
          var o, a;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(c) {
                l("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = c, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(c) {
                l("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = c, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function Zt(e) {
        e != null && e.$$typeof === F ? l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? l("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && l("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: L,
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
            set: function(o) {
              n = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return t;
      }
      var tt;
      tt = Symbol.for("react.module.reference");
      function rt(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === g || e === x || ne || e === k || e === H || e === Q || ce || e === G || se || ke || ye || typeof e == "object" && e !== null && (e.$$typeof === A || e.$$typeof === F || e.$$typeof === B || e.$$typeof === N || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === tt || e.getModuleId !== void 0));
      }
      function er(e, t) {
        rt(e) || l("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: F,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var o;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(a) {
              o = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return n;
      }
      function V() {
        var e = K.current;
        return e === null && l(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function tr(e) {
        var t = V();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? l("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && l("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function rr(e) {
        var t = V();
        return t.useState(e);
      }
      function nr(e, t, n) {
        var o = V();
        return o.useReducer(e, t, n);
      }
      function or(e) {
        var t = V();
        return t.useRef(e);
      }
      function ar(e, t) {
        var n = V();
        return n.useEffect(e, t);
      }
      function ur(e, t) {
        var n = V();
        return n.useInsertionEffect(e, t);
      }
      function ir(e, t) {
        var n = V();
        return n.useLayoutEffect(e, t);
      }
      function sr(e, t) {
        var n = V();
        return n.useCallback(e, t);
      }
      function cr(e, t) {
        var n = V();
        return n.useMemo(e, t);
      }
      function lr(e, t, n) {
        var o = V();
        return o.useImperativeHandle(e, t, n);
      }
      function fr(e, t) {
        {
          var n = V();
          return n.useDebugValue(e, t);
        }
      }
      function dr() {
        var e = V();
        return e.useTransition();
      }
      function pr(e) {
        var t = V();
        return t.useDeferredValue(e);
      }
      function vr() {
        var e = V();
        return e.useId();
      }
      function yr(e, t, n) {
        var o = V();
        return o.useSyncExternalStore(e, t, n);
      }
      var de = 0, nt, ot, at, ut, it, st, ct;
      function lt() {
      }
      lt.__reactDisabledLog = !0;
      function mr() {
        {
          if (de === 0) {
            nt = console.log, ot = console.info, at = console.warn, ut = console.error, it = console.group, st = console.groupCollapsed, ct = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: lt,
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
      function hr() {
        {
          if (de--, de === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: d({}, e, {
                value: nt
              }),
              info: d({}, e, {
                value: ot
              }),
              warn: d({}, e, {
                value: at
              }),
              error: d({}, e, {
                value: ut
              }),
              group: d({}, e, {
                value: it
              }),
              groupCollapsed: d({}, e, {
                value: st
              }),
              groupEnd: d({}, e, {
                value: ct
              })
            });
          }
          de < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var De = q.ReactCurrentDispatcher, Ie;
      function Ee(e, t, n) {
        {
          if (Ie === void 0)
            try {
              throw Error();
            } catch (a) {
              var o = a.stack.trim().match(/\n( *(at )?)/);
              Ie = o && o[1] || "";
            }
          return `
` + Ie + e;
        }
      }
      var xe = !1, Re;
      {
        var gr = typeof WeakMap == "function" ? WeakMap : Map;
        Re = new gr();
      }
      function ft(e, t) {
        if (!e || xe)
          return "";
        {
          var n = Re.get(e);
          if (n !== void 0)
            return n;
        }
        var o;
        xe = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var c;
        c = De.current, De.current = null, mr();
        try {
          if (t) {
            var i = function() {
              throw Error();
            };
            if (Object.defineProperty(i.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(i, []);
              } catch (D) {
                o = D;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (D) {
                o = D;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (D) {
              o = D;
            }
            e();
          }
        } catch (D) {
          if (D && o && typeof D.stack == "string") {
            for (var f = D.stack.split(`
`), m = o.stack.split(`
`), b = f.length - 1, w = m.length - 1; b >= 1 && w >= 0 && f[b] !== m[w]; )
              w--;
            for (; b >= 1 && w >= 0; b--, w--)
              if (f[b] !== m[w]) {
                if (b !== 1 || w !== 1)
                  do
                    if (b--, w--, w < 0 || f[b] !== m[w]) {
                      var C = `
` + f[b].replace(" at new ", " at ");
                      return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && Re.set(e, C), C;
                    }
                  while (b >= 1 && w >= 0);
                break;
              }
          }
        } finally {
          xe = !1, De.current = c, hr(), Error.prepareStackTrace = a;
        }
        var O = e ? e.displayName || e.name : "", j = O ? Ee(O) : "";
        return typeof e == "function" && Re.set(e, j), j;
      }
      function br(e, t, n) {
        return ft(e, !1);
      }
      function _r(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function we(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return ft(e, _r(e));
        if (typeof e == "string")
          return Ee(e);
        switch (e) {
          case H:
            return Ee("Suspense");
          case Q:
            return Ee("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              return br(e.render);
            case F:
              return we(e.type, t, n);
            case A: {
              var o = e, a = o._payload, c = o._init;
              try {
                return we(c(a), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var dt = {}, pt = q.ReactDebugCurrentFrame;
      function Ce(e) {
        if (e) {
          var t = e._owner, n = we(e.type, e._source, t ? t.type : null);
          pt.setExtraStackFrame(n);
        } else
          pt.setExtraStackFrame(null);
      }
      function Er(e, t, n, o, a) {
        {
          var c = Function.call.bind(le);
          for (var i in e)
            if (c(e, i)) {
              var f = void 0;
              try {
                if (typeof e[i] != "function") {
                  var m = Error((o || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw m.name = "Invariant Violation", m;
                }
                f = e[i](t, i, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (b) {
                f = b;
              }
              f && !(f instanceof Error) && (Ce(a), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, i, typeof f), Ce(null)), f instanceof Error && !(f.message in dt) && (dt[f.message] = !0, Ce(a), l("Failed %s type: %s", n, f.message), Ce(null));
            }
        }
      }
      function ae(e) {
        if (e) {
          var t = e._owner, n = we(e.type, e._source, t ? t.type : null);
          ve(n);
        } else
          ve(null);
      }
      var Le;
      Le = !1;
      function vt() {
        if (z.current) {
          var e = ee(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Rr(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
      function wr(e) {
        return e != null ? Rr(e.__source) : "";
      }
      var yt = {};
      function Cr(e) {
        var t = vt();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
      function mt(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = Cr(t);
          if (!yt[n]) {
            yt[n] = !0;
            var o = "";
            e && e._owner && e._owner !== z.current && (o = " It was passed a child from " + ee(e._owner.type) + "."), ae(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), ae(null);
          }
        }
      }
      function ht(e, t) {
        if (typeof e == "object") {
          if (he(e))
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              oe(o) && mt(o, t);
            }
          else if (oe(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var a = W(e);
            if (typeof a == "function" && a !== e.entries)
              for (var c = a.call(e), i; !(i = c.next()).done; )
                oe(i.value) && mt(i.value, t);
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
          else if (typeof t == "object" && (t.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === F))
            n = t.propTypes;
          else
            return;
          if (n) {
            var o = ee(t);
            Er(n, e.props, "prop", o, e);
          } else if (t.PropTypes !== void 0 && !Le) {
            Le = !0;
            var a = ee(t);
            l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", a || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Sr(e) {
        {
          for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
            var o = t[n];
            if (o !== "children" && o !== "key") {
              ae(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), ae(null);
              break;
            }
          }
          e.ref !== null && (ae(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), ae(null));
        }
      }
      function bt(e, t, n) {
        var o = rt(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c = wr(t);
          c ? a += c : a += vt();
          var i;
          e === null ? i = "null" : he(e) ? i = "array" : e !== void 0 && e.$$typeof === S ? (i = "<" + (ee(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : i = typeof e, l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", i, a);
        }
        var f = Mt.apply(this, arguments);
        if (f == null)
          return f;
        if (o)
          for (var m = 2; m < arguments.length; m++)
            ht(arguments[m], e);
        return e === g ? Sr(f) : gt(f), f;
      }
      var _t = !1;
      function Or(e) {
        var t = bt.bind(null, e);
        return t.type = e, _t || (_t = !0, Z("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return Z("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Tr(e, t, n) {
        for (var o = Vt.apply(this, arguments), a = 2; a < arguments.length; a++)
          ht(arguments[a], o.type);
        return gt(o), o;
      }
      function kr(e, t) {
        var n = J.transition;
        J.transition = {};
        var o = J.transition;
        J.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (J.transition = n, n === null && o._updatedFibers) {
            var a = o._updatedFibers.size;
            a > 10 && Z("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var Et = !1, Se = null;
      function Pr(e) {
        if (Se === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = v && v[t];
            Se = n.call(v, "timers").setImmediate;
          } catch {
            Se = function(a) {
              Et === !1 && (Et = !0, typeof MessageChannel > "u" && l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var c = new MessageChannel();
              c.port1.onmessage = a, c.port2.postMessage(void 0);
            };
          }
        return Se(e);
      }
      var ue = 0, Rt = !1;
      function jr(e) {
        {
          var t = ue;
          ue++, $.current === null && ($.current = []);
          var n = $.isBatchingLegacy, o;
          try {
            if ($.isBatchingLegacy = !0, o = e(), !n && $.didScheduleLegacyUpdate) {
              var a = $.current;
              a !== null && ($.didScheduleLegacyUpdate = !1, Ue(a));
            }
          } catch (O) {
            throw Oe(t), O;
          } finally {
            $.isBatchingLegacy = n;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var c = o, i = !1, f = {
              then: function(O, j) {
                i = !0, c.then(function(D) {
                  Oe(t), ue === 0 ? Ne(D, O, j) : O(D);
                }, function(D) {
                  Oe(t), j(D);
                });
              }
            };
            return !Rt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              i || (Rt = !0, l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), f;
          } else {
            var m = o;
            if (Oe(t), ue === 0) {
              var b = $.current;
              b !== null && (Ue(b), $.current = null);
              var w = {
                then: function(O, j) {
                  $.current === null ? ($.current = [], Ne(m, O, j)) : O(m);
                }
              };
              return w;
            } else {
              var C = {
                then: function(O, j) {
                  O(m);
                }
              };
              return C;
            }
          }
        }
      }
      function Oe(e) {
        e !== ue - 1 && l("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ue = e;
      }
      function Ne(e, t, n) {
        {
          var o = $.current;
          if (o !== null)
            try {
              Ue(o), Pr(function() {
                o.length === 0 ? ($.current = null, t(e)) : Ne(e, t, n);
              });
            } catch (a) {
              n(a);
            }
          else
            t(e);
        }
      }
      var Me = !1;
      function Ue(e) {
        if (!Me) {
          Me = !0;
          var t = 0;
          try {
            for (; t < e.length; t++) {
              var n = e[t];
              do
                n = n(!0);
              while (n !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(t + 1), o;
          } finally {
            Me = !1;
          }
        }
      }
      var Ar = bt, $r = Tr, Fr = Or, Dr = {
        map: _e,
        forEach: Ht,
        count: Bt,
        toArray: qt,
        only: Gt
      };
      s.Children = Dr, s.Component = y, s.Fragment = g, s.Profiler = x, s.PureComponent = U, s.StrictMode = k, s.Suspense = H, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, s.cloneElement = $r, s.createContext = Kt, s.createElement = Ar, s.createFactory = Fr, s.createRef = At, s.forwardRef = Zt, s.isValidElement = oe, s.lazy = Xt, s.memo = er, s.startTransition = kr, s.unstable_act = jr, s.useCallback = sr, s.useContext = tr, s.useDebugValue = fr, s.useDeferredValue = pr, s.useEffect = ar, s.useId = vr, s.useImperativeHandle = lr, s.useInsertionEffect = ur, s.useLayoutEffect = ir, s.useMemo = cr, s.useReducer = nr, s.useRef = or, s.useState = rr, s.useSyncExternalStore = yr, s.useTransition = dr, s.version = I, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(pe, pe.exports)), pe.exports;
}
process.env.NODE_ENV === "production" ? We.exports = Br() : We.exports = Hr();
var qr = We.exports;
const Gr = /* @__PURE__ */ zr(qr);
var Kr = Object.defineProperty, Jr = Object.getOwnPropertyDescriptor, Ye = (v, s, I, S) => {
  for (var T = S > 1 ? void 0 : S ? Jr(s, I) : s, g = v.length - 1, k; g >= 0; g--)
    (k = v[g]) && (T = (S ? k(s, I, T) : k(T)) || T);
  return S && T && Kr(s, I, T), T;
};
let ie = class extends Mr {
  constructor() {
    super(), this.inputLabels = [], this.getApiUrl = "", this.inputLabels = [], this.getApiUrl = "";
  }
  async submitForm(v) {
    var T;
    v.preventDefault(), v.stopPropagation();
    const s = ((T = this.shadowRoot) == null ? void 0 : T.querySelector("form")) ?? null;
    if (!s)
      return;
    const I = new FormData(s), S = {};
    for (const [g, k] of I.entries())
      S[g] = k;
    console.log(S), console.log(JSON.stringify(S)), console.log(this.getApiUrl);
    try {
      const g = await fetch(this.getApiUrl, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(S)
      });
      if (!g.ok)
        throw new Error(`HTTP error ${g.status}: ${g.statusText}`);
      const k = await g.json();
      console.log(k);
    } catch (g) {
      console.error("Error:", g);
    }
  }
  render() {
    return Ot`
        <div class="container">
          <form @submit=${this.submitForm}>
          ${Array.isArray(this.inputLabels) ? this.inputLabels.map(
      (v) => Ot`
                  <div class="infoInputs">
                    <label>${v.label}:</label>
                    <input type="${v.type}" name=${v.name.toLowerCase()} placeholder=${v.placeholder} value="${v.value}" ?disabled=${v.disabled} ?required=${v.required}/>
                  </div>
                `
    ) : "try again"}
            <button class="button-submit" type="submit">Submit</button>
          </form>
        </div>
        `;
  }
};
ie.styles = Nr`
        .container {
            display: grid;
            grid-template-rows: auto auto;
            background:    var(--body-bg, #f5f5dc);
            color:         var(--body-color, #1F1F6F);
            border:        var(--body-border,1px solid #1F1F6F);
            border-radius: var(--body-border-radius,0.2rem);
            padding:       var(--body-padding, 2rem);
            padding:       var(--body-padding, 2rem);
            font-family:   var(--font-family, Helvetica);
            font-size:     var(--form-font-size, 20px);
            font-weight:   var(--form-font-weight, 400);
        }

        from {
            grid-column: 1/-1;
        }

        label {
            min-width: 8rem;
            margin-right: 1rem;
            text-align: left;
        }

        input {
            width: 100%;
            box-sizing: border-box;

            padding: 6px 10px;
            margin: 1% 0;

            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .infoInputs {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
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
Ye([
  jt({ type: Array })
], ie.prototype, "inputLabels", 2);
Ye([
  jt({ type: String, attribute: "get-api-url" })
], ie.prototype, "getApiUrl", 2);
ie = Ye([
  Ur("form-user-jffp")
], ie);
const Zr = Yr(
  Gr,
  "form-user-jffp-react",
  ie,
  {
    onIconClick: "icon-click"
  }
);
export {
  ie as FormUserJffp,
  Zr as FormUserJffpReact
};
