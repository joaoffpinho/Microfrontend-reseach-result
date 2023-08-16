import { css as Nr, LitElement as xr, html as kt } from "lit";
import { property as ze, customElement as Ur } from "lit/decorators.js";
import { when as Vr } from "lit/directives/when.js";
import { classMap as Wr } from "lit/directives/class-map.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yr = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), Tt = /* @__PURE__ */ new WeakMap(), zr = (v, s, V, j, k) => {
  const T = k == null ? void 0 : k[s];
  T === void 0 || V === j ? V == null && s in HTMLElement.prototype ? v.removeAttribute(s) : v[s] = V : ((A, F, B) => {
    let M = Tt.get(A);
    M === void 0 && Tt.set(A, M = /* @__PURE__ */ new Map());
    let L = M.get(F);
    B !== void 0 ? L === void 0 ? (M.set(F, L = { handleEvent: B }), A.addEventListener(F, L)) : L.handleEvent = B : L !== void 0 && (M.delete(F), A.removeEventListener(F, L));
  })(v, T, V);
};
function Br(v = window.React, s, V, j, k) {
  let T, A, F;
  if (s === void 0) {
    const D = v;
    ({ tagName: A, elementClass: F, events: j, displayName: k } = D), T = D.react;
  } else
    T = v, F = V, A = s;
  const B = T.Component, M = T.createElement, L = new Set(Object.keys(j ?? {}));
  class H extends B {
    constructor() {
      super(...arguments), this.o = null;
    }
    t(P) {
      if (this.o !== null)
        for (const G in this.i)
          zr(this.o, G, this.props[G], P ? P[G] : void 0, j);
    }
    componentDidMount() {
      this.t();
    }
    componentDidUpdate(P) {
      this.t(P);
    }
    render() {
      const { _$Gl: P, ...G } = this.props;
      this.h !== P && (this.u = (N) => {
        P !== null && ((W, K) => {
          typeof W == "function" ? W(K) : W.current = K;
        })(P, N), this.o = N, this.h = P;
      }), this.i = {};
      const Y = { ref: this.u };
      for (const [N, W] of Object.entries(G))
        Yr.has(N) ? Y[N === "className" ? "class" : N] = W : L.has(N) || N in F.prototype ? this.i[N] = W : Y[N] = W;
      return M(A, Y);
    }
  }
  H.displayName = k ?? F.name;
  const Q = T.forwardRef((D, P) => M(H, { ...D, _$Gl: P }, D == null ? void 0 : D.children));
  return Q.displayName = H.displayName, Q;
}
function Hr(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var Ye = {}, qr = {
  get exports() {
    return Ye;
  },
  set exports(v) {
    Ye = v;
  }
}, p = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function Gr() {
  if (Pt)
    return p;
  Pt = 1;
  var v = Symbol.for("react.element"), s = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), A = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), M = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), H = Symbol.iterator;
  function Q(r) {
    return r === null || typeof r != "object" ? null : (r = H && r[H] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var D = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, G = {};
  function Y(r, u, d) {
    this.props = r, this.context = u, this.refs = G, this.updater = d || D;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(r, u) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, u, "setState");
  }, Y.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function N() {
  }
  N.prototype = Y.prototype;
  function W(r, u, d) {
    this.props = r, this.context = u, this.refs = G, this.updater = d || D;
  }
  var K = W.prototype = new N();
  K.constructor = W, P(K, Y.prototype), K.isPureReactComponent = !0;
  var J = Array.isArray, $ = Object.prototype.hasOwnProperty, z = { current: null }, X = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(r, u, d) {
    var m, y = {}, _ = null, S = null;
    if (u != null)
      for (m in u.ref !== void 0 && (S = u.ref), u.key !== void 0 && (_ = "" + u.key), u)
        $.call(u, m) && !X.hasOwnProperty(m) && (y[m] = u[m]);
    var b = arguments.length - 2;
    if (b === 1)
      y.children = d;
    else if (1 < b) {
      for (var E = Array(b), x = 0; x < b; x++)
        E[x] = arguments[x + 2];
      y.children = E;
    }
    if (r && r.defaultProps)
      for (m in b = r.defaultProps, b)
        y[m] === void 0 && (y[m] = b[m]);
    return { $$typeof: v, type: r, key: _, ref: S, props: y, _owner: z.current };
  }
  function ve(r, u) {
    return { $$typeof: v, type: r.type, key: u, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function se(r) {
    return typeof r == "object" && r !== null && r.$$typeof === v;
  }
  function Pe(r) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(d) {
      return u[d];
    });
  }
  var ye = /\/+/g;
  function ce(r, u) {
    return typeof r == "object" && r !== null && r.key != null ? Pe("" + r.key) : u.toString(36);
  }
  function ae(r, u, d, m, y) {
    var _ = typeof r;
    (_ === "undefined" || _ === "boolean") && (r = null);
    var S = !1;
    if (r === null)
      S = !0;
    else
      switch (_) {
        case "string":
        case "number":
          S = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case v:
            case s:
              S = !0;
          }
      }
    if (S)
      return S = r, y = y(S), r = m === "" ? "." + ce(S, 0) : m, J(y) ? (d = "", r != null && (d = r.replace(ye, "$&/") + "/"), ae(y, u, d, "", function(x) {
        return x;
      })) : y != null && (se(y) && (y = ve(y, d + (!y.key || S && S.key === y.key ? "" : ("" + y.key).replace(ye, "$&/") + "/") + r)), u.push(y)), 1;
    if (S = 0, m = m === "" ? "." : m + ":", J(r))
      for (var b = 0; b < r.length; b++) {
        _ = r[b];
        var E = m + ce(_, b);
        S += ae(_, u, d, E, y);
      }
    else if (E = Q(r), typeof E == "function")
      for (r = E.call(r), b = 0; !(_ = r.next()).done; )
        _ = _.value, E = m + ce(_, b++), S += ae(_, u, d, E, y);
    else if (_ === "object")
      throw u = String(r), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return S;
  }
  function q(r, u, d) {
    if (r == null)
      return r;
    var m = [], y = 0;
    return ae(r, m, "", "", function(_) {
      return u.call(d, _, y++);
    }), m;
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
  var l = { current: null }, re = { transition: null }, he = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: re, ReactCurrentOwner: z };
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
  } }, p.Component = Y, p.Fragment = V, p.Profiler = k, p.PureComponent = W, p.StrictMode = j, p.Suspense = B, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, p.cloneElement = function(r, u, d) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var m = P({}, r.props), y = r.key, _ = r.ref, S = r._owner;
    if (u != null) {
      if (u.ref !== void 0 && (_ = u.ref, S = z.current), u.key !== void 0 && (y = "" + u.key), r.type && r.type.defaultProps)
        var b = r.type.defaultProps;
      for (E in u)
        $.call(u, E) && !X.hasOwnProperty(E) && (m[E] = u[E] === void 0 && b !== void 0 ? b[E] : u[E]);
    }
    var E = arguments.length - 2;
    if (E === 1)
      m.children = d;
    else if (1 < E) {
      b = Array(E);
      for (var x = 0; x < E; x++)
        b[x] = arguments[x + 2];
      m.children = b;
    }
    return { $$typeof: v, type: r.type, key: y, ref: _, props: m, _owner: S };
  }, p.createContext = function(r) {
    return r = { $$typeof: A, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: T, _context: r }, r.Consumer = r;
  }, p.createElement = te, p.createFactory = function(r) {
    var u = te.bind(null, r);
    return u.type = r, u;
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(r) {
    return { $$typeof: F, render: r };
  }, p.isValidElement = se, p.lazy = function(r) {
    return { $$typeof: L, _payload: { _status: -1, _result: r }, _init: Z };
  }, p.memo = function(r, u) {
    return { $$typeof: M, type: r, compare: u === void 0 ? null : u };
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
var pe = {}, Kr = {
  get exports() {
    return pe;
  },
  set exports(v) {
    pe = v;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt;
function Jr() {
  return jt || (jt = 1, function(v, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var V = "18.2.0", j = Symbol.for("react.element"), k = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), M = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), Y = Symbol.iterator, N = "@@iterator";
      function W(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = Y && e[Y] || e[N];
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
      var se = !1, Pe = !1, ye = !1, ce = !1, ae = !1, q = {
        ReactCurrentDispatcher: K,
        ReactCurrentBatchConfig: J,
        ReactCurrentOwner: z
      };
      q.ReactDebugCurrentFrame = X, q.ReactCurrentActQueue = $;
      function Z(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          re("warn", e, n);
        }
      }
      function l(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
          re("error", e, n);
        }
      }
      function re(e, t, n) {
        {
          var a = q.ReactDebugCurrentFrame, o = a.getStackAddendum();
          o !== "" && (t += "%s", n = n.concat([o]));
          var c = n.map(function(i) {
            return String(i);
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
      }, d = Object.assign, m = {};
      Object.freeze(m);
      function y(e, t, n) {
        this.props = e, this.context = t, this.refs = m, this.updater = n || u;
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
        }, S = function(e, t) {
          Object.defineProperty(y.prototype, e, {
            get: function() {
              Z("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var b in _)
          _.hasOwnProperty(b) && S(b, _[b]);
      }
      function E() {
      }
      E.prototype = y.prototype;
      function x(e, t, n) {
        this.props = e, this.context = t, this.refs = m, this.updater = n || u;
      }
      var je = x.prototype = new E();
      je.constructor = x, d(je, y.prototype), je.isPureReactComponent = !0;
      function At() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var $t = Array.isArray;
      function me(e) {
        return $t(e);
      }
      function Dt(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function It(e) {
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
        if (It(e))
          return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dt(e)), Be(e);
      }
      function Ft(e, t, n) {
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
          case T:
            return "Fragment";
          case k:
            return "Portal";
          case F:
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
            case M:
              var t = e;
              return He(t) + ".Consumer";
            case B:
              var n = e;
              return He(n._context) + ".Provider";
            case L:
              return Ft(e, e.render, "ForwardRef");
            case D:
              var a = e.displayName || null;
              return a !== null ? a : ee(e.type) || "Memo";
            case P: {
              var o = e, c = o._payload, i = o._init;
              try {
                return ee(i(c));
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
      }, Ge, Ke, Ae;
      Ae = {};
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
      function Lt(e, t) {
        var n = function() {
          Ge || (Ge = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function Mt(e, t) {
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
          Ae[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), Ae[t] = !0);
        }
      }
      var $e = function(e, t, n, a, o, c, i) {
        var f = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: j,
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
          value: a
        }), Object.defineProperty(f, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
      };
      function xt(e, t, n) {
        var a, o = {}, c = null, i = null, f = null, h = null;
        if (t != null) {
          Je(t) && (i = t.ref, Nt(t)), Qe(t) && (ge(t.key), c = "" + t.key), f = t.__self === void 0 ? null : t.__self, h = t.__source === void 0 ? null : t.__source;
          for (a in t)
            le.call(t, a) && !qe.hasOwnProperty(a) && (o[a] = t[a]);
        }
        var g = arguments.length - 2;
        if (g === 1)
          o.children = n;
        else if (g > 1) {
          for (var R = Array(g), w = 0; w < g; w++)
            R[w] = arguments[w + 2];
          Object.freeze && Object.freeze(R), o.children = R;
        }
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (a in C)
            o[a] === void 0 && (o[a] = C[a]);
        }
        if (c || i) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Lt(o, O), i && Mt(o, O);
        }
        return $e(e, c, i, f, h, z.current, o);
      }
      function Ut(e, t) {
        var n = $e(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Vt(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, o = d({}, e.props), c = e.key, i = e.ref, f = e._self, h = e._source, g = e._owner;
        if (t != null) {
          Je(t) && (i = t.ref, g = z.current), Qe(t) && (ge(t.key), c = "" + t.key);
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
        return $e(e.type, c, i, f, h, g, o);
      }
      function oe(e) {
        return typeof e == "object" && e !== null && e.$$typeof === j;
      }
      var Xe = ".", Wt = ":";
      function Yt(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(t, function(o) {
          return n[o];
        });
        return "$" + a;
      }
      var Ze = !1, zt = /\/+/g;
      function et(e) {
        return e.replace(zt, "$&/");
      }
      function De(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (ge(e.key), Yt("" + e.key)) : t.toString(36);
      }
      function _e(e, t, n, a, o) {
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
                case j:
                case k:
                  i = !0;
              }
          }
        if (i) {
          var f = e, h = o(f), g = a === "" ? Xe + De(f, 0) : a;
          if (me(h)) {
            var R = "";
            g != null && (R = et(g) + "/"), _e(h, t, R, "", function(Mr) {
              return Mr;
            });
          } else
            h != null && (oe(h) && (h.key && (!f || f.key !== h.key) && ge(h.key), h = Ut(
              h,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (h.key && (!f || f.key !== h.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                et("" + h.key) + "/"
              ) : "") + g
            )), t.push(h));
          return 1;
        }
        var w, C, O = 0, I = a === "" ? Xe : a + Wt;
        if (me(e))
          for (var ke = 0; ke < e.length; ke++)
            w = e[ke], C = I + De(w, ke), O += _e(w, t, n, C, o);
        else {
          var We = W(e);
          if (typeof We == "function") {
            var Ct = e;
            We === Ct.entries && (Ze || Z("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ze = !0);
            for (var Fr = We.call(Ct), St, Lr = 0; !(St = Fr.next()).done; )
              w = St.value, C = I + De(w, Lr++), O += _e(w, t, n, C, o);
          } else if (c === "object") {
            var Ot = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Ot === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Ot) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return O;
      }
      function be(e, t, n) {
        if (e == null)
          return e;
        var a = [], o = 0;
        return _e(e, a, "", "", function(c) {
          return t.call(n, c, o++);
        }), a;
      }
      function Bt(e) {
        var t = 0;
        return be(e, function() {
          t++;
        }), t;
      }
      function Ht(e, t, n) {
        be(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function qt(e) {
        return be(e, function(t) {
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
          $$typeof: M,
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
            $$typeof: M,
            _context: t
          };
          Object.defineProperties(c, {
            Provider: {
              get: function() {
                return a || (a = !0, l("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
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
                o || (Z("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", i), o = !0);
              }
            }
          }), t.Consumer = c;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var fe = -1, Ie = 0, tt = 1, Jt = 2;
      function Qt(e) {
        if (e._status === fe) {
          var t = e._result, n = t();
          if (n.then(function(c) {
            if (e._status === Ie || e._status === fe) {
              var i = e;
              i._status = tt, i._result = c;
            }
          }, function(c) {
            if (e._status === Ie || e._status === fe) {
              var i = e;
              i._status = Jt, i._result = c;
            }
          }), e._status === fe) {
            var a = e;
            a._status = Ie, a._result = n;
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
      function Xt(e) {
        var t = {
          // We use these fields to store the result.
          _status: fe,
          _result: e
        }, n = {
          $$typeof: P,
          _payload: t,
          _init: Qt
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
      function Zt(e) {
        e != null && e.$$typeof === D ? l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? l("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && l("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
        return !!(typeof e == "string" || typeof e == "function" || e === T || e === F || ae || e === A || e === H || e === Q || ce || e === G || se || Pe || ye || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === D || e.$$typeof === B || e.$$typeof === M || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === rt || e.getModuleId !== void 0));
      }
      function er(e, t) {
        nt(e) || l("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: D,
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
      function tr(e) {
        var t = U();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? l("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && l("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function rr(e) {
        var t = U();
        return t.useState(e);
      }
      function nr(e, t, n) {
        var a = U();
        return a.useReducer(e, t, n);
      }
      function ar(e) {
        var t = U();
        return t.useRef(e);
      }
      function or(e, t) {
        var n = U();
        return n.useEffect(e, t);
      }
      function ur(e, t) {
        var n = U();
        return n.useInsertionEffect(e, t);
      }
      function ir(e, t) {
        var n = U();
        return n.useLayoutEffect(e, t);
      }
      function sr(e, t) {
        var n = U();
        return n.useCallback(e, t);
      }
      function cr(e, t) {
        var n = U();
        return n.useMemo(e, t);
      }
      function lr(e, t, n) {
        var a = U();
        return a.useImperativeHandle(e, t, n);
      }
      function fr(e, t) {
        {
          var n = U();
          return n.useDebugValue(e, t);
        }
      }
      function dr() {
        var e = U();
        return e.useTransition();
      }
      function pr(e) {
        var t = U();
        return t.useDeferredValue(e);
      }
      function vr() {
        var e = U();
        return e.useId();
      }
      function yr(e, t, n) {
        var a = U();
        return a.useSyncExternalStore(e, t, n);
      }
      var de = 0, at, ot, ut, it, st, ct, lt;
      function ft() {
      }
      ft.__reactDisabledLog = !0;
      function hr() {
        {
          if (de === 0) {
            at = console.log, ot = console.info, ut = console.warn, it = console.error, st = console.group, ct = console.groupCollapsed, lt = console.groupEnd;
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
                value: ut
              }),
              error: d({}, e, {
                value: it
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
      var Fe = q.ReactCurrentDispatcher, Le;
      function Ee(e, t, n) {
        {
          if (Le === void 0)
            try {
              throw Error();
            } catch (o) {
              var a = o.stack.trim().match(/\n( *(at )?)/);
              Le = a && a[1] || "";
            }
          return `
` + Le + e;
        }
      }
      var Me = !1, Re;
      {
        var gr = typeof WeakMap == "function" ? WeakMap : Map;
        Re = new gr();
      }
      function dt(e, t) {
        if (!e || Me)
          return "";
        {
          var n = Re.get(e);
          if (n !== void 0)
            return n;
        }
        var a;
        Me = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var c;
        c = Fe.current, Fe.current = null, hr();
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
              } catch (I) {
                a = I;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (I) {
                a = I;
              }
              e.call(i.prototype);
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
`), h = a.stack.split(`
`), g = f.length - 1, R = h.length - 1; g >= 1 && R >= 0 && f[g] !== h[R]; )
              R--;
            for (; g >= 1 && R >= 0; g--, R--)
              if (f[g] !== h[R]) {
                if (g !== 1 || R !== 1)
                  do
                    if (g--, R--, R < 0 || f[g] !== h[R]) {
                      var w = `
` + f[g].replace(" at new ", " at ");
                      return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && Re.set(e, w), w;
                    }
                  while (g >= 1 && R >= 0);
                break;
              }
          }
        } finally {
          Me = !1, Fe.current = c, mr(), Error.prepareStackTrace = o;
        }
        var C = e ? e.displayName || e.name : "", O = C ? Ee(C) : "";
        return typeof e == "function" && Re.set(e, O), O;
      }
      function _r(e, t, n) {
        return dt(e, !1);
      }
      function br(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function we(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return dt(e, br(e));
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
              return _r(e.render);
            case D:
              return we(e.type, t, n);
            case P: {
              var a = e, o = a._payload, c = a._init;
              try {
                return we(c(o), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var pt = {}, vt = q.ReactDebugCurrentFrame;
      function Ce(e) {
        if (e) {
          var t = e._owner, n = we(e.type, e._source, t ? t.type : null);
          vt.setExtraStackFrame(n);
        } else
          vt.setExtraStackFrame(null);
      }
      function Er(e, t, n, a, o) {
        {
          var c = Function.call.bind(le);
          for (var i in e)
            if (c(e, i)) {
              var f = void 0;
              try {
                if (typeof e[i] != "function") {
                  var h = Error((a || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw h.name = "Invariant Violation", h;
                }
                f = e[i](t, i, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (g) {
                f = g;
              }
              f && !(f instanceof Error) && (Ce(o), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, i, typeof f), Ce(null)), f instanceof Error && !(f.message in pt) && (pt[f.message] = !0, Ce(o), l("Failed %s type: %s", n, f.message), Ce(null));
            }
        }
      }
      function ue(e) {
        if (e) {
          var t = e._owner, n = we(e.type, e._source, t ? t.type : null);
          ve(n);
        } else
          ve(null);
      }
      var Ne;
      Ne = !1;
      function yt() {
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
      var ht = {};
      function Cr(e) {
        var t = yt();
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
          if (!ht[n]) {
            ht[n] = !0;
            var a = "";
            e && e._owner && e._owner !== z.current && (a = " It was passed a child from " + ee(e._owner.type) + "."), ue(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), ue(null);
          }
        }
      }
      function gt(e, t) {
        if (typeof e == "object") {
          if (me(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              oe(a) && mt(a, t);
            }
          else if (oe(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var o = W(e);
            if (typeof o == "function" && o !== e.entries)
              for (var c = o.call(e), i; !(i = c.next()).done; )
                oe(i.value) && mt(i.value, t);
          }
        }
      }
      function _t(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var n;
          if (typeof t == "function")
            n = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === D))
            n = t.propTypes;
          else
            return;
          if (n) {
            var a = ee(t);
            Er(n, e.props, "prop", a, e);
          } else if (t.PropTypes !== void 0 && !Ne) {
            Ne = !0;
            var o = ee(t);
            l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Sr(e) {
        {
          for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
            var a = t[n];
            if (a !== "children" && a !== "key") {
              ue(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), ue(null);
              break;
            }
          }
          e.ref !== null && (ue(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
        }
      }
      function bt(e, t, n) {
        var a = nt(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c = wr(t);
          c ? o += c : o += yt();
          var i;
          e === null ? i = "null" : me(e) ? i = "array" : e !== void 0 && e.$$typeof === j ? (i = "<" + (ee(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : i = typeof e, l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", i, o);
        }
        var f = xt.apply(this, arguments);
        if (f == null)
          return f;
        if (a)
          for (var h = 2; h < arguments.length; h++)
            gt(arguments[h], e);
        return e === T ? Sr(f) : _t(f), f;
      }
      var Et = !1;
      function Or(e) {
        var t = bt.bind(null, e);
        return t.type = e, Et || (Et = !0, Z("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return Z("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function kr(e, t, n) {
        for (var a = Vt.apply(this, arguments), o = 2; o < arguments.length; o++)
          gt(arguments[o], a.type);
        return _t(a), a;
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
      var Rt = !1, Se = null;
      function Pr(e) {
        if (Se === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = v && v[t];
            Se = n.call(v, "timers").setImmediate;
          } catch {
            Se = function(o) {
              Rt === !1 && (Rt = !0, typeof MessageChannel > "u" && l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var c = new MessageChannel();
              c.port1.onmessage = o, c.port2.postMessage(void 0);
            };
          }
        return Se(e);
      }
      var ie = 0, wt = !1;
      function jr(e) {
        {
          var t = ie;
          ie++, $.current === null && ($.current = []);
          var n = $.isBatchingLegacy, a;
          try {
            if ($.isBatchingLegacy = !0, a = e(), !n && $.didScheduleLegacyUpdate) {
              var o = $.current;
              o !== null && ($.didScheduleLegacyUpdate = !1, Ve(o));
            }
          } catch (C) {
            throw Oe(t), C;
          } finally {
            $.isBatchingLegacy = n;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var c = a, i = !1, f = {
              then: function(C, O) {
                i = !0, c.then(function(I) {
                  Oe(t), ie === 0 ? xe(I, C, O) : C(I);
                }, function(I) {
                  Oe(t), O(I);
                });
              }
            };
            return !wt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              i || (wt = !0, l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), f;
          } else {
            var h = a;
            if (Oe(t), ie === 0) {
              var g = $.current;
              g !== null && (Ve(g), $.current = null);
              var R = {
                then: function(C, O) {
                  $.current === null ? ($.current = [], xe(h, C, O)) : C(h);
                }
              };
              return R;
            } else {
              var w = {
                then: function(C, O) {
                  C(h);
                }
              };
              return w;
            }
          }
        }
      }
      function Oe(e) {
        e !== ie - 1 && l("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ie = e;
      }
      function xe(e, t, n) {
        {
          var a = $.current;
          if (a !== null)
            try {
              Ve(a), Pr(function() {
                a.length === 0 ? ($.current = null, t(e)) : xe(e, t, n);
              });
            } catch (o) {
              n(o);
            }
          else
            t(e);
        }
      }
      var Ue = !1;
      function Ve(e) {
        if (!Ue) {
          Ue = !0;
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
            Ue = !1;
          }
        }
      }
      var Ar = bt, $r = kr, Dr = Or, Ir = {
        map: be,
        forEach: Ht,
        count: Bt,
        toArray: qt,
        only: Gt
      };
      s.Children = Ir, s.Component = y, s.Fragment = T, s.Profiler = F, s.PureComponent = x, s.StrictMode = A, s.Suspense = H, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, s.cloneElement = $r, s.createContext = Kt, s.createElement = Ar, s.createFactory = Dr, s.createRef = At, s.forwardRef = Zt, s.isValidElement = oe, s.lazy = Xt, s.memo = er, s.startTransition = Tr, s.unstable_act = jr, s.useCallback = sr, s.useContext = tr, s.useDebugValue = fr, s.useDeferredValue = pr, s.useEffect = or, s.useId = vr, s.useImperativeHandle = lr, s.useInsertionEffect = ur, s.useLayoutEffect = ir, s.useMemo = cr, s.useReducer = nr, s.useRef = ar, s.useState = rr, s.useSyncExternalStore = yr, s.useTransition = dr, s.version = V, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kr, pe)), pe;
}
(function(v) {
  process.env.NODE_ENV === "production" ? v.exports = Gr() : v.exports = Jr();
})(qr);
const Qr = /* @__PURE__ */ Hr(Ye);
var Xr = Object.defineProperty, Zr = Object.getOwnPropertyDescriptor, Te = (v, s, V, j) => {
  for (var k = j > 1 ? void 0 : j ? Zr(s, V) : s, T = v.length - 1, A; T >= 0; T--)
    (A = v[T]) && (k = (j ? A(s, V, k) : A(k)) || k);
  return j && k && Xr(s, V, k), k;
};
let ne = class extends xr {
  constructor() {
    super(...arguments), this.title = "WIDGET", this.icon = "1", this.opened = !1;
  }
  onIconClickHandler(v) {
    v.stopPropagation(), this.dispatchEvent(new CustomEvent("icon-click", { bubbles: !0 }));
  }
  render() {
    return kt`
        <div> 
            <div class="${Wr({ title: !0, closed: !this.opened })}" @click=${() => this.opened = !this.opened}> 
                ${this.title}
                <div @click=${this.onIconClickHandler}>${this.icon}</div>
            </div>

            ${Vr(
      this.opened,
      () => kt`<div class="body"> 
                <slot></slot>
                </div>`
    )}

            
        </div>
        `;
  }
};
ne.styles = Nr`
        .title {
            background: var(--my-panel-jffp-react-primary-bg, lightgreen);
            color: var(--my-panel-jffp-react-primary-color, #222);
            padding: 0.8rem;
            border-radius: 1rem 1rem 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.2s ease-in-out
        }

        .title.closed {
            border-bottom-right-radius: 1rem;
            border-bottom-left-radius: 1rem;
        }

        .body {
            padding: 1rem;
            border: 1px solid aquamarine
        }
    `;
Te([
  ze({ type: String })
], ne.prototype, "title", 2);
Te([
  ze({ type: String })
], ne.prototype, "icon", 2);
Te([
  ze({ type: Boolean })
], ne.prototype, "opened", 2);
ne = Te([
  Ur("my-panel-jffp-react")
], ne);
const an = Br(
  Qr,
  "my-panel-jffp-react",
  ne,
  {
    onIconClick: "icon-click"
  }
);
export {
  ne as MyPanelJffpReact,
  an as MyPanelJffpReactExport
};
