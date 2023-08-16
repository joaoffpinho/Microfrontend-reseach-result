import { css as Nr, LitElement as xr, html as ze } from "lit";
import { property as ye, customElement as Ur } from "lit/decorators.js";
import { when as Vr } from "lit/directives/when.js";
import { classMap as Wr } from "lit/directives/class-map.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yr = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), Tt = /* @__PURE__ */ new WeakMap(), zr = (d, s, V, j, O) => {
  const T = O == null ? void 0 : O[s];
  T === void 0 || V === j ? V == null && s in HTMLElement.prototype ? d.removeAttribute(s) : d[s] = V : ((A, L, B) => {
    let M = Tt.get(A);
    M === void 0 && Tt.set(A, M = /* @__PURE__ */ new Map());
    let F = M.get(L);
    B !== void 0 ? F === void 0 ? (M.set(L, F = { handleEvent: B }), A.addEventListener(L, F)) : F.handleEvent = B : F !== void 0 && (M.delete(L), A.removeEventListener(L, F));
  })(d, T, V);
};
function Br(d = window.React, s, V, j, O) {
  let T, A, L;
  if (s === void 0) {
    const D = d;
    ({ tagName: A, elementClass: L, events: j, displayName: O } = D), T = D.react;
  } else
    T = d, L = V, A = s;
  const B = T.Component, M = T.createElement, F = new Set(Object.keys(j ?? {}));
  class H extends B {
    constructor() {
      super(...arguments), this.o = null;
    }
    t(P) {
      if (this.o !== null)
        for (const q in this.i)
          zr(this.o, q, this.props[q], P ? P[q] : void 0, j);
    }
    componentDidMount() {
      this.t();
    }
    componentDidUpdate(P) {
      this.t(P);
    }
    render() {
      const { _$Gl: P, ...q } = this.props;
      this.h !== P && (this.u = (N) => {
        P !== null && ((W, K) => {
          typeof W == "function" ? W(K) : W.current = K;
        })(P, N), this.o = N, this.h = P;
      }), this.i = {};
      const Y = { ref: this.u };
      for (const [N, W] of Object.entries(q))
        Yr.has(N) ? Y[N === "className" ? "class" : N] = W : F.has(N) || N in L.prototype ? this.i[N] = W : Y[N] = W;
      return M(A, Y);
    }
  }
  H.displayName = O ?? L.name;
  const X = T.forwardRef((D, P) => M(H, { ...D, _$Gl: P }, D == null ? void 0 : D.children));
  return X.displayName = H.displayName, X;
}
function Hr(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
var Be = {}, Gr = {
  get exports() {
    return Be;
  },
  set exports(d) {
    Be = d;
  }
}, v = {};
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
function qr() {
  if (Pt)
    return v;
  Pt = 1;
  var d = Symbol.for("react.element"), s = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), A = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), M = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), H = Symbol.iterator;
  function X(r) {
    return r === null || typeof r != "object" ? null : (r = H && r[H] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var D = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, P = Object.assign, q = {};
  function Y(r, u, p) {
    this.props = r, this.context = u, this.refs = q, this.updater = p || D;
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
  function W(r, u, p) {
    this.props = r, this.context = u, this.refs = q, this.updater = p || D;
  }
  var K = W.prototype = new N();
  K.constructor = W, P(K, Y.prototype), K.isPureReactComponent = !0;
  var J = Array.isArray, $ = Object.prototype.hasOwnProperty, z = { current: null }, Z = { key: !0, ref: !0, __self: !0, __source: !0 };
  function re(r, u, p) {
    var m, y = {}, _ = null, S = null;
    if (u != null)
      for (m in u.ref !== void 0 && (S = u.ref), u.key !== void 0 && (_ = "" + u.key), u)
        $.call(u, m) && !Z.hasOwnProperty(m) && (y[m] = u[m]);
    var b = arguments.length - 2;
    if (b === 1)
      y.children = p;
    else if (1 < b) {
      for (var E = Array(b), x = 0; x < b; x++)
        E[x] = arguments[x + 2];
      y.children = E;
    }
    if (r && r.defaultProps)
      for (m in b = r.defaultProps, b)
        y[m] === void 0 && (y[m] = b[m]);
    return { $$typeof: d, type: r, key: _, ref: S, props: y, _owner: z.current };
  }
  function he(r, u) {
    return { $$typeof: d, type: r.type, key: u, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function ce(r) {
    return typeof r == "object" && r !== null && r.$$typeof === d;
  }
  function je(r) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(p) {
      return u[p];
    });
  }
  var me = /\/+/g;
  function le(r, u) {
    return typeof r == "object" && r !== null && r.key != null ? je("" + r.key) : u.toString(36);
  }
  function oe(r, u, p, m, y) {
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
            case d:
            case s:
              S = !0;
          }
      }
    if (S)
      return S = r, y = y(S), r = m === "" ? "." + le(S, 0) : m, J(y) ? (p = "", r != null && (p = r.replace(me, "$&/") + "/"), oe(y, u, p, "", function(x) {
        return x;
      })) : y != null && (ce(y) && (y = he(y, p + (!y.key || S && S.key === y.key ? "" : ("" + y.key).replace(me, "$&/") + "/") + r)), u.push(y)), 1;
    if (S = 0, m = m === "" ? "." : m + ":", J(r))
      for (var b = 0; b < r.length; b++) {
        _ = r[b];
        var E = m + le(_, b);
        S += oe(_, u, p, E, y);
      }
    else if (E = X(r), typeof E == "function")
      for (r = E.call(r), b = 0; !(_ = r.next()).done; )
        _ = _.value, E = m + le(_, b++), S += oe(_, u, p, E, y);
    else if (_ === "object")
      throw u = String(r), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return S;
  }
  function G(r, u, p) {
    if (r == null)
      return r;
    var m = [], y = 0;
    return oe(r, m, "", "", function(_) {
      return u.call(p, _, y++);
    }), m;
  }
  function ee(r) {
    if (r._status === -1) {
      var u = r._result;
      u = u(), u.then(function(p) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = p);
      }, function(p) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = p);
      }), r._status === -1 && (r._status = 0, r._result = u);
    }
    if (r._status === 1)
      return r._result.default;
    throw r._result;
  }
  var l = { current: null }, ne = { transition: null }, ge = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: ne, ReactCurrentOwner: z };
  return v.Children = { map: G, forEach: function(r, u, p) {
    G(r, function() {
      u.apply(this, arguments);
    }, p);
  }, count: function(r) {
    var u = 0;
    return G(r, function() {
      u++;
    }), u;
  }, toArray: function(r) {
    return G(r, function(u) {
      return u;
    }) || [];
  }, only: function(r) {
    if (!ce(r))
      throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, v.Component = Y, v.Fragment = V, v.Profiler = O, v.PureComponent = W, v.StrictMode = j, v.Suspense = B, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ge, v.cloneElement = function(r, u, p) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var m = P({}, r.props), y = r.key, _ = r.ref, S = r._owner;
    if (u != null) {
      if (u.ref !== void 0 && (_ = u.ref, S = z.current), u.key !== void 0 && (y = "" + u.key), r.type && r.type.defaultProps)
        var b = r.type.defaultProps;
      for (E in u)
        $.call(u, E) && !Z.hasOwnProperty(E) && (m[E] = u[E] === void 0 && b !== void 0 ? b[E] : u[E]);
    }
    var E = arguments.length - 2;
    if (E === 1)
      m.children = p;
    else if (1 < E) {
      b = Array(E);
      for (var x = 0; x < E; x++)
        b[x] = arguments[x + 2];
      m.children = b;
    }
    return { $$typeof: d, type: r.type, key: y, ref: _, props: m, _owner: S };
  }, v.createContext = function(r) {
    return r = { $$typeof: A, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: T, _context: r }, r.Consumer = r;
  }, v.createElement = re, v.createFactory = function(r) {
    var u = re.bind(null, r);
    return u.type = r, u;
  }, v.createRef = function() {
    return { current: null };
  }, v.forwardRef = function(r) {
    return { $$typeof: L, render: r };
  }, v.isValidElement = ce, v.lazy = function(r) {
    return { $$typeof: F, _payload: { _status: -1, _result: r }, _init: ee };
  }, v.memo = function(r, u) {
    return { $$typeof: M, type: r, compare: u === void 0 ? null : u };
  }, v.startTransition = function(r) {
    var u = ne.transition;
    ne.transition = {};
    try {
      r();
    } finally {
      ne.transition = u;
    }
  }, v.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, v.useCallback = function(r, u) {
    return l.current.useCallback(r, u);
  }, v.useContext = function(r) {
    return l.current.useContext(r);
  }, v.useDebugValue = function() {
  }, v.useDeferredValue = function(r) {
    return l.current.useDeferredValue(r);
  }, v.useEffect = function(r, u) {
    return l.current.useEffect(r, u);
  }, v.useId = function() {
    return l.current.useId();
  }, v.useImperativeHandle = function(r, u, p) {
    return l.current.useImperativeHandle(r, u, p);
  }, v.useInsertionEffect = function(r, u) {
    return l.current.useInsertionEffect(r, u);
  }, v.useLayoutEffect = function(r, u) {
    return l.current.useLayoutEffect(r, u);
  }, v.useMemo = function(r, u) {
    return l.current.useMemo(r, u);
  }, v.useReducer = function(r, u, p) {
    return l.current.useReducer(r, u, p);
  }, v.useRef = function(r) {
    return l.current.useRef(r);
  }, v.useState = function(r) {
    return l.current.useState(r);
  }, v.useSyncExternalStore = function(r, u, p) {
    return l.current.useSyncExternalStore(r, u, p);
  }, v.useTransition = function() {
    return l.current.useTransition();
  }, v.version = "18.2.0", v;
}
var ve = {}, Kr = {
  get exports() {
    return ve;
  },
  set exports(d) {
    ve = d;
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
  return jt || (jt = 1, function(d, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var V = "18.2.0", j = Symbol.for("react.element"), O = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), M = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), Y = Symbol.iterator, N = "@@iterator";
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
      }, Z = {}, re = null;
      function he(e) {
        re = e;
      }
      Z.setExtraStackFrame = function(e) {
        re = e;
      }, Z.getCurrentStack = null, Z.getStackAddendum = function() {
        var e = "";
        re && (e += re);
        var t = Z.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var ce = !1, je = !1, me = !1, le = !1, oe = !1, G = {
        ReactCurrentDispatcher: K,
        ReactCurrentBatchConfig: J,
        ReactCurrentOwner: z
      };
      G.ReactDebugCurrentFrame = Z, G.ReactCurrentActQueue = $;
      function ee(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o];
          ne("warn", e, n);
        }
      }
      function l(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o];
          ne("error", e, n);
        }
      }
      function ne(e, t, n) {
        {
          var o = G.ReactDebugCurrentFrame, a = o.getStackAddendum();
          a !== "" && (t += "%s", n = n.concat([a]));
          var c = n.map(function(i) {
            return String(i);
          });
          c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
        }
      }
      var ge = {};
      function r(e, t) {
        {
          var n = e.constructor, o = n && (n.displayName || n.name) || "ReactClass", a = o + "." + t;
          if (ge[a])
            return;
          l("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, o), ge[a] = !0;
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
      }, p = Object.assign, m = {};
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
              ee("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
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
      var Ae = x.prototype = new E();
      Ae.constructor = x, p(Ae, y.prototype), Ae.isPureReactComponent = !0;
      function At() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var $t = Array.isArray;
      function _e(e) {
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
          return He(e), !1;
        } catch {
          return !0;
        }
      }
      function He(e) {
        return "" + e;
      }
      function be(e) {
        if (It(e))
          return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dt(e)), He(e);
      }
      function Lt(e, t, n) {
        var o = e.displayName;
        if (o)
          return o;
        var a = t.displayName || t.name || "";
        return a !== "" ? n + "(" + a + ")" : n;
      }
      function Ge(e) {
        return e.displayName || "Context";
      }
      function te(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case T:
            return "Fragment";
          case O:
            return "Portal";
          case L:
            return "Profiler";
          case A:
            return "StrictMode";
          case H:
            return "Suspense";
          case X:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case M:
              var t = e;
              return Ge(t) + ".Consumer";
            case B:
              var n = e;
              return Ge(n._context) + ".Provider";
            case F:
              return Lt(e, e.render, "ForwardRef");
            case D:
              var o = e.displayName || null;
              return o !== null ? o : te(e.type) || "Memo";
            case P: {
              var a = e, c = a._payload, i = a._init;
              try {
                return te(i(c));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var fe = Object.prototype.hasOwnProperty, qe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ke, Je, $e;
      $e = {};
      function Qe(e) {
        if (fe.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Xe(e) {
        if (fe.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Ft(e, t) {
        var n = function() {
          Ke || (Ke = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function Mt(e, t) {
        var n = function() {
          Je || (Je = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function Nt(e) {
        if (typeof e.ref == "string" && z.current && e.__self && z.current.stateNode !== e.__self) {
          var t = te(z.current.type);
          $e[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), $e[t] = !0);
        }
      }
      var De = function(e, t, n, o, a, c, i) {
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
          value: o
        }), Object.defineProperty(f, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
      };
      function xt(e, t, n) {
        var o, a = {}, c = null, i = null, f = null, h = null;
        if (t != null) {
          Qe(t) && (i = t.ref, Nt(t)), Xe(t) && (be(t.key), c = "" + t.key), f = t.__self === void 0 ? null : t.__self, h = t.__source === void 0 ? null : t.__source;
          for (o in t)
            fe.call(t, o) && !qe.hasOwnProperty(o) && (a[o] = t[o]);
        }
        var g = arguments.length - 2;
        if (g === 1)
          a.children = n;
        else if (g > 1) {
          for (var R = Array(g), w = 0; w < g; w++)
            R[w] = arguments[w + 2];
          Object.freeze && Object.freeze(R), a.children = R;
        }
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (o in C)
            a[o] === void 0 && (a[o] = C[o]);
        }
        if (c || i) {
          var k = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Ft(a, k), i && Mt(a, k);
        }
        return De(e, c, i, f, h, z.current, a);
      }
      function Ut(e, t) {
        var n = De(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Vt(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, a = p({}, e.props), c = e.key, i = e.ref, f = e._self, h = e._source, g = e._owner;
        if (t != null) {
          Qe(t) && (i = t.ref, g = z.current), Xe(t) && (be(t.key), c = "" + t.key);
          var R;
          e.type && e.type.defaultProps && (R = e.type.defaultProps);
          for (o in t)
            fe.call(t, o) && !qe.hasOwnProperty(o) && (t[o] === void 0 && R !== void 0 ? a[o] = R[o] : a[o] = t[o]);
        }
        var w = arguments.length - 2;
        if (w === 1)
          a.children = n;
        else if (w > 1) {
          for (var C = Array(w), k = 0; k < w; k++)
            C[k] = arguments[k + 2];
          a.children = C;
        }
        return De(e.type, c, i, f, h, g, a);
      }
      function ae(e) {
        return typeof e == "object" && e !== null && e.$$typeof === j;
      }
      var Ze = ".", Wt = ":";
      function Yt(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(t, function(a) {
          return n[a];
        });
        return "$" + o;
      }
      var et = !1, zt = /\/+/g;
      function tt(e) {
        return e.replace(zt, "$&/");
      }
      function Ie(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (be(e.key), Yt("" + e.key)) : t.toString(36);
      }
      function Ee(e, t, n, o, a) {
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
                case O:
                  i = !0;
              }
          }
        if (i) {
          var f = e, h = a(f), g = o === "" ? Ze + Ie(f, 0) : o;
          if (_e(h)) {
            var R = "";
            g != null && (R = tt(g) + "/"), Ee(h, t, R, "", function(Mr) {
              return Mr;
            });
          } else
            h != null && (ae(h) && (h.key && (!f || f.key !== h.key) && be(h.key), h = Ut(
              h,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (h.key && (!f || f.key !== h.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                tt("" + h.key) + "/"
              ) : "") + g
            )), t.push(h));
          return 1;
        }
        var w, C, k = 0, I = o === "" ? Ze : o + Wt;
        if (_e(e))
          for (var Pe = 0; Pe < e.length; Pe++)
            w = e[Pe], C = I + Ie(w, Pe), k += Ee(w, t, n, C, a);
        else {
          var Ye = W(e);
          if (typeof Ye == "function") {
            var St = e;
            Ye === St.entries && (et || ee("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), et = !0);
            for (var Lr = Ye.call(St), kt, Fr = 0; !(kt = Lr.next()).done; )
              w = kt.value, C = I + Ie(w, Fr++), k += Ee(w, t, n, C, a);
          } else if (c === "object") {
            var Ot = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Ot === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Ot) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return k;
      }
      function Re(e, t, n) {
        if (e == null)
          return e;
        var o = [], a = 0;
        return Ee(e, o, "", "", function(c) {
          return t.call(n, c, a++);
        }), o;
      }
      function Bt(e) {
        var t = 0;
        return Re(e, function() {
          t++;
        }), t;
      }
      function Ht(e, t, n) {
        Re(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function Gt(e) {
        return Re(e, function(t) {
          return t;
        }) || [];
      }
      function qt(e) {
        if (!ae(e))
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
        var n = !1, o = !1, a = !1;
        {
          var c = {
            $$typeof: M,
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
                a || (ee("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", i), a = !0);
              }
            }
          }), t.Consumer = c;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var pe = -1, Le = 0, rt = 1, Jt = 2;
      function Qt(e) {
        if (e._status === pe) {
          var t = e._result, n = t();
          if (n.then(function(c) {
            if (e._status === Le || e._status === pe) {
              var i = e;
              i._status = rt, i._result = c;
            }
          }, function(c) {
            if (e._status === Le || e._status === pe) {
              var i = e;
              i._status = Jt, i._result = c;
            }
          }), e._status === pe) {
            var o = e;
            o._status = Le, o._result = n;
          }
        }
        if (e._status === rt) {
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
          _status: pe,
          _result: e
        }, n = {
          $$typeof: P,
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
        e != null && e.$$typeof === D ? l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? l("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && l("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: F,
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
      var nt;
      nt = Symbol.for("react.module.reference");
      function ot(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === T || e === L || oe || e === A || e === H || e === X || le || e === q || ce || je || me || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === D || e.$$typeof === B || e.$$typeof === M || e.$$typeof === F || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === nt || e.getModuleId !== void 0));
      }
      function er(e, t) {
        ot(e) || l("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: D,
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
        var o = U();
        return o.useReducer(e, t, n);
      }
      function or(e) {
        var t = U();
        return t.useRef(e);
      }
      function ar(e, t) {
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
        var o = U();
        return o.useImperativeHandle(e, t, n);
      }
      function fr(e, t) {
        {
          var n = U();
          return n.useDebugValue(e, t);
        }
      }
      function pr() {
        var e = U();
        return e.useTransition();
      }
      function dr(e) {
        var t = U();
        return t.useDeferredValue(e);
      }
      function vr() {
        var e = U();
        return e.useId();
      }
      function yr(e, t, n) {
        var o = U();
        return o.useSyncExternalStore(e, t, n);
      }
      var de = 0, at, ut, it, st, ct, lt, ft;
      function pt() {
      }
      pt.__reactDisabledLog = !0;
      function hr() {
        {
          if (de === 0) {
            at = console.log, ut = console.info, it = console.warn, st = console.error, ct = console.group, lt = console.groupCollapsed, ft = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: pt,
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
              log: p({}, e, {
                value: at
              }),
              info: p({}, e, {
                value: ut
              }),
              warn: p({}, e, {
                value: it
              }),
              error: p({}, e, {
                value: st
              }),
              group: p({}, e, {
                value: ct
              }),
              groupCollapsed: p({}, e, {
                value: lt
              }),
              groupEnd: p({}, e, {
                value: ft
              })
            });
          }
          de < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Fe = G.ReactCurrentDispatcher, Me;
      function we(e, t, n) {
        {
          if (Me === void 0)
            try {
              throw Error();
            } catch (a) {
              var o = a.stack.trim().match(/\n( *(at )?)/);
              Me = o && o[1] || "";
            }
          return `
` + Me + e;
        }
      }
      var Ne = !1, Ce;
      {
        var gr = typeof WeakMap == "function" ? WeakMap : Map;
        Ce = new gr();
      }
      function dt(e, t) {
        if (!e || Ne)
          return "";
        {
          var n = Ce.get(e);
          if (n !== void 0)
            return n;
        }
        var o;
        Ne = !0;
        var a = Error.prepareStackTrace;
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
                o = I;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (I) {
                o = I;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (I) {
              o = I;
            }
            e();
          }
        } catch (I) {
          if (I && o && typeof I.stack == "string") {
            for (var f = I.stack.split(`
`), h = o.stack.split(`
`), g = f.length - 1, R = h.length - 1; g >= 1 && R >= 0 && f[g] !== h[R]; )
              R--;
            for (; g >= 1 && R >= 0; g--, R--)
              if (f[g] !== h[R]) {
                if (g !== 1 || R !== 1)
                  do
                    if (g--, R--, R < 0 || f[g] !== h[R]) {
                      var w = `
` + f[g].replace(" at new ", " at ");
                      return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && Ce.set(e, w), w;
                    }
                  while (g >= 1 && R >= 0);
                break;
              }
          }
        } finally {
          Ne = !1, Fe.current = c, mr(), Error.prepareStackTrace = a;
        }
        var C = e ? e.displayName || e.name : "", k = C ? we(C) : "";
        return typeof e == "function" && Ce.set(e, k), k;
      }
      function _r(e, t, n) {
        return dt(e, !1);
      }
      function br(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function Se(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return dt(e, br(e));
        if (typeof e == "string")
          return we(e);
        switch (e) {
          case H:
            return we("Suspense");
          case X:
            return we("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case F:
              return _r(e.render);
            case D:
              return Se(e.type, t, n);
            case P: {
              var o = e, a = o._payload, c = o._init;
              try {
                return Se(c(a), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var vt = {}, yt = G.ReactDebugCurrentFrame;
      function ke(e) {
        if (e) {
          var t = e._owner, n = Se(e.type, e._source, t ? t.type : null);
          yt.setExtraStackFrame(n);
        } else
          yt.setExtraStackFrame(null);
      }
      function Er(e, t, n, o, a) {
        {
          var c = Function.call.bind(fe);
          for (var i in e)
            if (c(e, i)) {
              var f = void 0;
              try {
                if (typeof e[i] != "function") {
                  var h = Error((o || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw h.name = "Invariant Violation", h;
                }
                f = e[i](t, i, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (g) {
                f = g;
              }
              f && !(f instanceof Error) && (ke(a), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, i, typeof f), ke(null)), f instanceof Error && !(f.message in vt) && (vt[f.message] = !0, ke(a), l("Failed %s type: %s", n, f.message), ke(null));
            }
        }
      }
      function ue(e) {
        if (e) {
          var t = e._owner, n = Se(e.type, e._source, t ? t.type : null);
          he(n);
        } else
          he(null);
      }
      var xe;
      xe = !1;
      function ht() {
        if (z.current) {
          var e = te(z.current.type);
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
      var mt = {};
      function Cr(e) {
        var t = ht();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
      function gt(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = Cr(t);
          if (!mt[n]) {
            mt[n] = !0;
            var o = "";
            e && e._owner && e._owner !== z.current && (o = " It was passed a child from " + te(e._owner.type) + "."), ue(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), ue(null);
          }
        }
      }
      function _t(e, t) {
        if (typeof e == "object") {
          if (_e(e))
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              ae(o) && gt(o, t);
            }
          else if (ae(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var a = W(e);
            if (typeof a == "function" && a !== e.entries)
              for (var c = a.call(e), i; !(i = c.next()).done; )
                ae(i.value) && gt(i.value, t);
          }
        }
      }
      function bt(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var n;
          if (typeof t == "function")
            n = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === F || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === D))
            n = t.propTypes;
          else
            return;
          if (n) {
            var o = te(t);
            Er(n, e.props, "prop", o, e);
          } else if (t.PropTypes !== void 0 && !xe) {
            xe = !0;
            var a = te(t);
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
              ue(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), ue(null);
              break;
            }
          }
          e.ref !== null && (ue(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
        }
      }
      function Et(e, t, n) {
        var o = ot(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c = wr(t);
          c ? a += c : a += ht();
          var i;
          e === null ? i = "null" : _e(e) ? i = "array" : e !== void 0 && e.$$typeof === j ? (i = "<" + (te(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : i = typeof e, l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", i, a);
        }
        var f = xt.apply(this, arguments);
        if (f == null)
          return f;
        if (o)
          for (var h = 2; h < arguments.length; h++)
            _t(arguments[h], e);
        return e === T ? Sr(f) : bt(f), f;
      }
      var Rt = !1;
      function kr(e) {
        var t = Et.bind(null, e);
        return t.type = e, Rt || (Rt = !0, ee("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return ee("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Or(e, t, n) {
        for (var o = Vt.apply(this, arguments), a = 2; a < arguments.length; a++)
          _t(arguments[a], o.type);
        return bt(o), o;
      }
      function Tr(e, t) {
        var n = J.transition;
        J.transition = {};
        var o = J.transition;
        J.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (J.transition = n, n === null && o._updatedFibers) {
            var a = o._updatedFibers.size;
            a > 10 && ee("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var wt = !1, Oe = null;
      function Pr(e) {
        if (Oe === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = d && d[t];
            Oe = n.call(d, "timers").setImmediate;
          } catch {
            Oe = function(a) {
              wt === !1 && (wt = !0, typeof MessageChannel > "u" && l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var c = new MessageChannel();
              c.port1.onmessage = a, c.port2.postMessage(void 0);
            };
          }
        return Oe(e);
      }
      var ie = 0, Ct = !1;
      function jr(e) {
        {
          var t = ie;
          ie++, $.current === null && ($.current = []);
          var n = $.isBatchingLegacy, o;
          try {
            if ($.isBatchingLegacy = !0, o = e(), !n && $.didScheduleLegacyUpdate) {
              var a = $.current;
              a !== null && ($.didScheduleLegacyUpdate = !1, We(a));
            }
          } catch (C) {
            throw Te(t), C;
          } finally {
            $.isBatchingLegacy = n;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var c = o, i = !1, f = {
              then: function(C, k) {
                i = !0, c.then(function(I) {
                  Te(t), ie === 0 ? Ue(I, C, k) : C(I);
                }, function(I) {
                  Te(t), k(I);
                });
              }
            };
            return !Ct && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              i || (Ct = !0, l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), f;
          } else {
            var h = o;
            if (Te(t), ie === 0) {
              var g = $.current;
              g !== null && (We(g), $.current = null);
              var R = {
                then: function(C, k) {
                  $.current === null ? ($.current = [], Ue(h, C, k)) : C(h);
                }
              };
              return R;
            } else {
              var w = {
                then: function(C, k) {
                  C(h);
                }
              };
              return w;
            }
          }
        }
      }
      function Te(e) {
        e !== ie - 1 && l("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ie = e;
      }
      function Ue(e, t, n) {
        {
          var o = $.current;
          if (o !== null)
            try {
              We(o), Pr(function() {
                o.length === 0 ? ($.current = null, t(e)) : Ue(e, t, n);
              });
            } catch (a) {
              n(a);
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
          } catch (o) {
            throw e = e.slice(t + 1), o;
          } finally {
            Ve = !1;
          }
        }
      }
      var Ar = Et, $r = Or, Dr = kr, Ir = {
        map: Re,
        forEach: Ht,
        count: Bt,
        toArray: Gt,
        only: qt
      };
      s.Children = Ir, s.Component = y, s.Fragment = T, s.Profiler = L, s.PureComponent = x, s.StrictMode = A, s.Suspense = H, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, s.cloneElement = $r, s.createContext = Kt, s.createElement = Ar, s.createFactory = Dr, s.createRef = At, s.forwardRef = Zt, s.isValidElement = ae, s.lazy = Xt, s.memo = er, s.startTransition = Tr, s.unstable_act = jr, s.useCallback = sr, s.useContext = tr, s.useDebugValue = fr, s.useDeferredValue = dr, s.useEffect = ar, s.useId = vr, s.useImperativeHandle = lr, s.useInsertionEffect = ur, s.useLayoutEffect = ir, s.useMemo = cr, s.useReducer = nr, s.useRef = or, s.useState = rr, s.useSyncExternalStore = yr, s.useTransition = pr, s.version = V, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kr, ve)), ve;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = qr() : d.exports = Jr();
})(Gr);
const Qr = /* @__PURE__ */ Hr(Be);
var Xr = Object.defineProperty, Zr = Object.getOwnPropertyDescriptor, se = (d, s, V, j) => {
  for (var O = j > 1 ? void 0 : j ? Zr(s, V) : s, T = d.length - 1, A; T >= 0; T--)
    (A = d[T]) && (O = (j ? A(s, V, O) : A(O)) || O);
  return j && O && Xr(s, V, O), O;
};
let Q = class extends xr {
  constructor() {
    super(...arguments), this.title = "WIDGET", this.icon = "1", this.GetApiUrl = "", this.workers = [], this.opened = !1;
  }
  onIconClickHandler(d) {
    d.stopPropagation(), this.dispatchEvent(new CustomEvent("icon-click", { bubbles: !0 }));
  }
  onGetWorkersClickHandler(d) {
    d.stopPropagation(), fetch(this.GetApiUrl).then((s) => s.json()).then(
      (s) => {
        this.workers = s, console.log(this.workers);
      }
    );
  }
  render() {
    return ze`
        <div> 
            <div class="${Wr({ title: !0, closed: !this.opened })}" @click=${() => this.opened = !this.opened}> 
                ${this.title}
                <button @click=${this.onGetWorkersClickHandler}>getWorkers</button>
                <div @click=${this.onIconClickHandler}>${this.icon}</div>
            </div>

            ${Vr(
      this.opened,
      () => {
        var d;
        return ze`<div class="body">
                <slot name="topList"></slot>
                
                <ul>
                ${(d = this.workers) == null ? void 0 : d.map(
          (s) => ze`<li>${s.name} - ${s.email}</li>`
        )}
                </ul>
                <slot name="bottomList"></slot>
                </div>`;
      }
    )}

            
        </div>
        `;
  }
};
Q.styles = Nr`
        .title {
            background: var(--my-panel-jffp-primary-bg, lightgreen);
            color: var(--my-panel-jffp-primary-color, #222);
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
se([
  ye({ type: String })
], Q.prototype, "title", 2);
se([
  ye({ type: String })
], Q.prototype, "icon", 2);
se([
  ye({ type: URL })
], Q.prototype, "GetApiUrl", 2);
se([
  ye({ type: Array })
], Q.prototype, "workers", 2);
se([
  ye({ type: Boolean })
], Q.prototype, "opened", 2);
Q = se([
  Ur("my-panel-jffp")
], Q);
const on = Br(
  Qr,
  "my-panel-jffp-react",
  Q,
  {
    onIconClick: "icon-click"
  }
);
export {
  Q as MyPanelJffp,
  on as MyPanelJffpReact
};
