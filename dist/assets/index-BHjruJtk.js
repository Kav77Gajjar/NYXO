(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) return;
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) processPreload(link);
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") continue;
      for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
    }
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep) return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
  function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, D = {};
  function E(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  E.prototype.isReactComponent = {};
  E.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  E.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F() {
  }
  F.prototype = E.prototype;
  function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = D;
    this.updater = e || B;
  }
  var H = G.prototype = new F();
  H.constructor = G;
  C(H, E.prototype);
  H.isPureReactComponent = true;
  var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
  function M(a, b, e) {
    var d, c = {}, k = null, h = null;
    if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
    var g = arguments.length - 2;
    if (1 === g) c.children = e;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      c.children = f;
    }
    if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
    return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
  }
  function N(a, b) {
    return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l;
  }
  function escape(a) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var P = /\/+/g;
  function Q(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
  }
  function R(a, b, e, d, c) {
    var k = typeof a;
    if ("undefined" === k || "boolean" === k) a = null;
    var h = false;
    if (null === a) h = true;
    else switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l:
          case n:
            h = true;
        }
    }
    if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
    h = 0;
    d = "" === d ? "." : d + ":";
    if (I(a)) for (var g = 0; g < a.length; g++) {
      k = a[g];
      var f = d + Q(k, g);
      h += R(k, b, e, f, c);
    }
    else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
    else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
    return h;
  }
  function S(a, b, e) {
    if (null == a) return a;
    var d = [], c = 0;
    R(a, d, "", "", function(a2) {
      return b.call(e, a2, c++);
    });
    return d;
  }
  function T(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      b.then(function(b2) {
        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
      }, function(b2) {
        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
      });
      -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
  }
  var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S, forEach: function(a, b, e) {
    S(a, function() {
      b.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b = 0;
    S(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return S(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  react_production_min.Component = E;
  react_production_min.Fragment = p;
  react_production_min.Profiler = r;
  react_production_min.PureComponent = G;
  react_production_min.StrictMode = q;
  react_production_min.Suspense = w;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
  react_production_min.act = X;
  react_production_min.cloneElement = function(a, b, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
    if (null != b) {
      void 0 !== b.ref && (k = b.ref, h = K.current);
      void 0 !== b.key && (c = "" + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) d.children = e;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      d.children = g;
    }
    return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
  };
  react_production_min.createContext = function(a) {
    a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t, _context: a };
    return a.Consumer = a;
  };
  react_production_min.createElement = M;
  react_production_min.createFactory = function(a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a) {
    return { $$typeof: v, render: a };
  };
  react_production_min.isValidElement = O;
  react_production_min.lazy = function(a) {
    return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
  };
  react_production_min.memo = function(a, b) {
    return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
  };
  react_production_min.startTransition = function(a) {
    var b = V.transition;
    V.transition = {};
    try {
      a();
    } finally {
      V.transition = b;
    }
  };
  react_production_min.unstable_act = X;
  react_production_min.useCallback = function(a, b) {
    return U.current.useCallback(a, b);
  };
  react_production_min.useContext = function(a) {
    return U.current.useContext(a);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a) {
    return U.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function(a, b) {
    return U.current.useEffect(a, b);
  };
  react_production_min.useId = function() {
    return U.current.useId();
  };
  react_production_min.useImperativeHandle = function(a, b, e) {
    return U.current.useImperativeHandle(a, b, e);
  };
  react_production_min.useInsertionEffect = function(a, b) {
    return U.current.useInsertionEffect(a, b);
  };
  react_production_min.useLayoutEffect = function(a, b) {
    return U.current.useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function(a, b) {
    return U.current.useMemo(a, b);
  };
  react_production_min.useReducer = function(a, b, e) {
    return U.current.useReducer(a, b, e);
  };
  react_production_min.useRef = function(a) {
    return U.current.useRef(a);
  };
  react_production_min.useState = function(a) {
    return U.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function(a, b, e) {
    return U.current.useSyncExternalStore(a, b, e);
  };
  react_production_min.useTransition = function() {
    return U.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f = requireReact(), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
var reactExports = requireReact();
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function(exports) {
    function f(a, b) {
      var c = a.length;
      a.push(b);
      a: for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
        else break a;
      }
    }
    function h(a) {
      return 0 === a.length ? null : a[0];
    }
    function k(a) {
      if (0 === a.length) return null;
      var b = a[0], c = a.pop();
      if (c !== b) {
        a[0] = c;
        a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
          var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
          if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
          else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
          else break a;
        }
      }
      return b;
    }
    function g(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l = performance;
      exports.unstable_now = function() {
        return l.now();
      };
    } else {
      var p = Date, q = p.now();
      exports.unstable_now = function() {
        return p.now() - q;
      };
    }
    var r = [], t = [], u = 1, v = null, y = 3, z = false, A = false, B = false, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G(a) {
      for (var b = h(t); null !== b; ) {
        if (null === b.callback) k(t);
        else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
        else break;
        b = h(t);
      }
    }
    function H(a) {
      B = false;
      G(a);
      if (!A) if (null !== h(r)) A = true, I(J);
      else {
        var b = h(t);
        null !== b && K(H, b.startTime - a);
      }
    }
    function J(a, b) {
      A = false;
      B && (B = false, E(L), L = -1);
      z = true;
      var c = y;
      try {
        G(b);
        for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
          var d = v.callback;
          if ("function" === typeof d) {
            v.callback = null;
            y = v.priorityLevel;
            var e = d(v.expirationTime <= b);
            b = exports.unstable_now();
            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
            G(b);
          } else k(r);
          v = h(r);
        }
        if (null !== v) var w = true;
        else {
          var m = h(t);
          null !== m && K(H, m.startTime - b);
          w = false;
        }
        return w;
      } finally {
        v = null, y = c, z = false;
      }
    }
    var N = false, O = null, L = -1, P = 5, Q = -1;
    function M() {
      return exports.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports.unstable_now();
        Q = a;
        var b = true;
        try {
          b = O(true, a);
        } finally {
          b ? S() : (N = false, O = null);
        }
      } else N = false;
    }
    var S;
    if ("function" === typeof F) S = function() {
      F(R);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T = new MessageChannel(), U = T.port2;
      T.port1.onmessage = R;
      S = function() {
        U.postMessage(null);
      };
    } else S = function() {
      D(R, 0);
    };
    function I(a) {
      O = a;
      N || (N = true, S());
    }
    function K(a, b) {
      L = D(function() {
        a(exports.unstable_now());
      }, b);
    }
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function() {
      A || z || (A = true, I(J));
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
      return y;
    };
    exports.unstable_getFirstCallbackNode = function() {
      return h(r);
    };
    exports.unstable_next = function(a) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = y;
      }
      var c = y;
      y = b;
      try {
        return a();
      } finally {
        y = c;
      }
    };
    exports.unstable_pauseExecution = function() {
    };
    exports.unstable_requestPaint = function() {
    };
    exports.unstable_runWithPriority = function(a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = y;
      y = a;
      try {
        return b();
      } finally {
        y = c;
      }
    };
    exports.unstable_scheduleCallback = function(a, b, c) {
      var d = exports.unstable_now();
      "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = { id: u++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
      c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = true, I(J)));
      return a;
    };
    exports.unstable_shouldYield = M;
    exports.unstable_wrapCallback = function(a) {
      var b = y;
      return function() {
        var c = y;
        y = b;
        try {
          return a.apply(this, arguments);
        } finally {
          y = c;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(), ca = requireScheduler();
  function p(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a, b) {
    ha(a, b);
    ha(a + "Capture", b);
  }
  function ha(a, b) {
    ea[a] = b;
    for (a = 0; a < b.length; a++) da.add(b[a]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a) {
    if (ja.call(ma, a)) return true;
    if (ja.call(la, a)) return false;
    if (ka.test(a)) return ma[a] = true;
    la[a] = true;
    return false;
  }
  function pa(a, b, c, d) {
    if (null !== c && 0 === c.type) return false;
    switch (typeof b) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d) return false;
        if (null !== c) return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return false;
    }
  }
  function qa(a, b, c, d) {
    if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
    if (d) return false;
    if (null !== c) switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
    return false;
  }
  function v(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b = a[0];
    z[b] = new v(b, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z[a] = new v(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z[a] = new v(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z[a] = new v(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z[a] = new v(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b = a.replace(
      ra,
      sa
    );
    z[b] = new v(b, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b = a.replace(ra, sa);
    z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
  });
  function ta(a, b, c, d) {
    var e = z.hasOwnProperty(b) ? z[b] : null;
    if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var A = Object.assign, La;
  function Ma(a) {
    if (void 0 === La) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
    return "\n" + La + a;
  }
  var Na = false;
  function Oa(a, b) {
    if (!a || Na) return "";
    Na = true;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b) if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l) {
          var d = l;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l) {
          d = l;
        }
        a.call(b.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l) {
          d = l;
        }
        a();
      }
    } catch (l) {
      if (l && d && "string" === typeof l.stack) {
        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h]) {
                var k = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                return k;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  }
  function Pa(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  }
  function Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
    return null;
  }
  function Ra(a) {
    var b = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b.displayName || "Context") + ".Consumer";
      case 10:
        return (b._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b);
      case 8:
        return b === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b) return b.displayName || b.name || null;
        if ("string" === typeof b) return b;
    }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function Ta(a) {
    var b = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
  }
  function Ua(a) {
    var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
    if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
      var e = c.get, f = c.set;
      Object.defineProperty(a, b, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d = "" + a2;
        f.call(this, a2);
      } });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return { getValue: function() {
        return d;
      }, setValue: function(a2) {
        d = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b];
      } };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a) return false;
    var b = a._valueTracker;
    if (!b) return true;
    var c = b.getValue();
    var d = "";
    a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d;
    return a !== c ? (b.setValue(a), true) : false;
  }
  function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function Ya(a, b) {
    var c = b.checked;
    return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
  }
  function Za(a, b) {
    var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
  }
  function ab(a, b) {
    b = b.checked;
    null != b && ta(a, "checked", b, false);
  }
  function bb(a, b) {
    ab(a, b);
    var c = Sa(b.value), d = b.type;
    if (null != c) if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
    else if ("submit" === d || "reset" === d) {
      a.removeAttribute("value");
      return;
    }
    b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
    null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
  }
  function db(a, b, c) {
    if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
      var d = b.type;
      if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
      b = "" + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    "" !== c && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c && (a.name = c);
  }
  function cb(a, b, c) {
    if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
  }
  var eb = Array.isArray;
  function fb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
      for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
    } else {
      c = "" + Sa(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = true;
          d && (a[e].defaultSelected = true);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = true);
    }
  }
  function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
    return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }
  function hb(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b) throw Error(p(92));
        if (eb(c)) {
          if (1 < c.length) throw Error(p(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = "");
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a, b) {
    var c = Sa(b.value), d = Sa(b.defaultValue);
    null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = "" + d);
  }
  function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
  }
  function kb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a, b) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
  }
  var mb, nb = (function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b, c, d, e);
      });
    } : a;
  })(function(a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
      for (; b.firstChild; ) a.appendChild(b.firstChild);
    }
  });
  function ob(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b] = pb[a];
    });
  });
  function rb(a, b, c) {
    return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
  }
  function sb(a, b) {
    a = a.style;
    for (var c in b) if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
  }
  var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a, b) {
    if (b) {
      if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children) throw Error(p(60));
        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
    }
  }
  function vb(a, b) {
    if (-1 === a.indexOf("-")) return "string" === typeof b.is;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a) {
    if (a = Cb(a)) {
      if ("function" !== typeof yb) throw Error(p(280));
      var b = a.stateNode;
      b && (b = Db(b), yb(a.stateNode, a.type, b));
    }
  }
  function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  }
  function Fb() {
    if (zb) {
      var a = zb, b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
    }
  }
  function Gb(a, b) {
    return a(b);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a, b, c) {
    if (Ib) return a(b, c);
    Ib = true;
    try {
      return Gb(a, b, c);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
    if (a) return null;
    if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
    return c;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
  function Nb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l);
    } catch (m) {
      this.onError(m);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  function Tb(a, b, c, d, e, f, g, h, k) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a, b, c, d, e, f, g, h, k) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p(198));
      Qb || (Qb = true, Rb = l);
    }
  }
  function Vb(a) {
    var b = a, c = a;
    if (a.alternate) for (; b.return; ) b = b.return;
    else {
      a = b;
      do
        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function Wb(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
      if (null !== b) return b.dehydrated;
    }
    return null;
  }
  function Xb(a) {
    if (Vb(a) !== a) throw Error(p(188));
  }
  function Yb(a) {
    var b = a.alternate;
    if (!b) {
      b = Vb(a);
      if (null === b) throw Error(p(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c) return Xb(e), a;
          if (f === d) return Xb(e), b;
          f = f.sibling;
        }
        throw Error(p(188));
      }
      if (c.return !== d.return) c = e, d = f;
      else {
        for (var g = false, h = e.child; h; ) {
          if (h === c) {
            g = true;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = true;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h; ) {
            if (h === c) {
              g = true;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = true;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(p(189));
        }
      }
      if (c.alternate !== d) throw Error(p(190));
    }
    if (3 !== c.tag) throw Error(p(188));
    return c.stateNode.current === c ? a : b;
  }
  function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
  }
  function $b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      var b = $b(a);
      if (null !== b) return b;
      a = a.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
    } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function vc(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
      var g = 31 - oc(f), h = 1 << g, k = e[g];
      if (-1 === k) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
      } else k <= b && (a.expiredLanes |= h);
      f &= ~h;
    }
  }
  function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
  }
  function zc(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function Ac(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - oc(b);
    a[b] = c;
  }
  function Bc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;
    for (a = a.expirationTimes; 0 < c; ) {
      var e = 31 - oc(c), f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  }
  function Cc(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c; ) {
      var d = 31 - oc(c), e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var C = 0;
  function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a, b) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b.pointerId);
    }
  }
  function Tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }
  function Uc(a, b, c, d, e) {
    switch (b) {
      case "focusin":
        return Lc = Tc(Lc, a, b, c, d, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b, c, d, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b, c, d, e), true;
      case "pointerover":
        var f = e.pointerId;
        Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
        return true;
      case "gotpointercapture":
        return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), true;
    }
    return false;
  }
  function Vc(a) {
    var b = Wc(a.target);
    if (null !== b) {
      var c = Vb(b);
      if (null !== c) {
        if (b = c.tag, 13 === b) {
          if (b = Wb(c), null !== b) {
            a.blockedOn = b;
            Ic(a.priority, function() {
              Gc(c);
            });
            return;
          }
        } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Xc(a) {
    if (null !== a.blockedOn) return false;
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null === c) {
        c = a.nativeEvent;
        var d = new c.constructor(c.type, c);
        wb = d;
        c.target.dispatchEvent(d);
        wb = null;
      } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
      b.shift();
    }
    return true;
  }
  function Zc(a, b, c) {
    Xc(a) && c.delete(b);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a, b) {
    a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a) {
    function b(b2) {
      return ad(b2, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c = 1; c < Kc.length; c++) {
        var d = Kc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b);
    Pc.forEach(b);
    for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
    for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
      C = 1, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f;
    }
  }
  function gd(a, b, c, d) {
    var e = C, f = cd.transition;
    cd.transition = null;
    try {
      C = 4, fd(a, b, c, d);
    } finally {
      C = e, cd.transition = f;
    }
  }
  function fd(a, b, c, d) {
    if (dd) {
      var e = Yc(a, b, c, d);
      if (null === e) hd(a, b, d, id, c), Sc(a, d);
      else if (Uc(e, a, b, c, d)) d.stopPropagation();
      else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
        for (; null !== e; ) {
          var f = Cb(e);
          null !== f && Ec(f);
          f = Yc(a, b, c, d);
          null === f && hd(a, b, d, id, c);
          if (f === e) break;
          e = f;
        }
        null !== e && d.stopPropagation();
      } else hd(a, b, d, null, c);
    }
  }
  var id = null;
  function Yc(a, b, c, d) {
    id = null;
    a = xb(d);
    a = Wc(a);
    if (null !== a) if (b = Vb(a), null === b) a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a) return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else b !== a && (a = null);
    id = a;
    return null;
  }
  function jd(a) {
    switch (a) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++) ;
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
    return md = e.slice(a, 1 < d ? 1 - d : void 0);
  }
  function od(a) {
    var b = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a) {
    function b(b2, d, e, f, g) {
      this._reactName = b2;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
      this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a) return a.movementX;
    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, { key: function(a) {
    if (a.key) {
      var b = Md[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }
    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return "keypress" === a.type ? od(a) : 0;
  }, keyCode: function(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function(a) {
    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
  function ge(a, b) {
    switch (a) {
      case "keyup":
        return -1 !== $d.indexOf(b.keyCode);
      case "keydown":
        return 229 !== b.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
  }
  var ie = false;
  function je(a, b) {
    switch (a) {
      case "compositionend":
        return he(b);
      case "keypress":
        if (32 !== b.which) return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b) {
    if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
          if (b.char && 1 < b.char.length) return b.char;
          if (b.which) return String.fromCharCode(b.which);
        }
        return null;
      case "compositionend":
        return de && "ko" !== b.locale ? null : b.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
  }
  function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, "onChange");
    0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
  }
  var pe = null, qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b = ue(a);
    if (Wa(b)) return a;
  }
  function ve(a, b) {
    if ("change" === a) return b;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = "oninput" in document;
      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }
      xe = ye;
    } else xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      Jb(re, b);
    }
  }
  function Ce(a, b, c) {
    "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
  }
  function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
  }
  function Ee(a, b) {
    if ("click" === a) return te(b);
  }
  function Fe(a, b) {
    if ("input" === a || "change" === a) return te(b);
  }
  function Ge(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a, b) {
    if (He(a, b)) return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
    var c = Object.keys(a), d = Object.keys(b);
    if (c.length !== d.length) return false;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!ja.call(b, e) || !He(a[e], b[e])) return false;
    }
    return true;
  }
  function Je(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function Ke(a, b) {
    var c = Je(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b) return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Je(c);
    }
  }
  function Le(a, b) {
    return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
  }
  function Me() {
    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = "string" === typeof b.contentWindow.location.href;
      } catch (d) {
        c = false;
      }
      if (c) a = b.contentWindow;
      else break;
      b = Xa(a.document);
    }
    return b;
  }
  function Ne(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
  }
  function Oe(a) {
    var b = Me(), c = a.focusedElem, d = a.selectionRange;
    if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
      if (null !== d && Ne(c)) {
        if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
        else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c.textContent.length, f = Math.min(d.start, e);
          d = void 0 === d.end ? f : Math.min(d.end, e);
          !a.extend && f > d && (e = d, d = f, f = e);
          e = Ke(c, f);
          var g = Ke(
            c,
            d
          );
          e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
        }
      }
      b = [];
      for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      "function" === typeof c.focus && c.focus();
      for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
  function Ue(a, b, c) {
    var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
  }
  function Ve(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    return c;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a) {
    if (Xe[a]) return Xe[a];
    if (!We[a]) return a;
    var b = We[a], c;
    for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
    return a;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a, b) {
    df.set(a, b);
    fa(b, [a]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a, b, c) {
    var d = a.type || "unknown-event";
    a.currentTarget = c;
    Ub(d, b, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b) {
    b = 0 !== (b & 4);
    for (var c = 0; c < a.length; c++) {
      var d = a[c], e = d.event;
      d = d.listeners;
      a: {
        var f = void 0;
        if (b) for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          nf(e, h, l);
          f = k;
        }
        else for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped()) break a;
          nf(e, h, l);
          f = k;
        }
      }
    }
    if (Qb) throw a = Rb, Qb = false, Rb = null, a;
  }
  function D(a, b) {
    var c = b[of];
    void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
    var d = a + "__bubble";
    c.has(d) || (pf(b, a, 2, false), c.add(d));
  }
  function qf(a, b, c) {
    var d = 0;
    b && (d |= 4);
    pf(c, a, d, b);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b2) {
        "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
      });
      var b = 9 === a.nodeType ? a : a.ownerDocument;
      null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
    }
  }
  function pf(a, b, c, d) {
    switch (jd(b)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
    d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
  }
  function hd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
      if (null === d) return;
      var g = d.tag;
      if (3 === g || 4 === g) {
        var h = d.stateNode.containerInfo;
        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
        if (4 === g) for (g = d.return; null !== g; ) {
          var k = g.tag;
          if (3 === k || 4 === k) {
            if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
          }
          g = g.return;
        }
        for (; null !== h; ) {
          g = Wc(h);
          if (null === g) return;
          k = g.tag;
          if (5 === k || 6 === k) {
            d = f = g;
            continue a;
          }
          h = h.parentNode;
        }
      }
      d = d.return;
    }
    Jb(function() {
      var d2 = f, e2 = xb(c), g2 = [];
      a: {
        var h2 = df.get(a);
        if (void 0 !== h2) {
          var k2 = td, n = a;
          switch (a) {
            case "keypress":
              if (0 === od(c)) break a;
            case "keydown":
            case "keyup":
              k2 = Rd;
              break;
            case "focusin":
              n = "focus";
              k2 = Fd;
              break;
            case "focusout":
              n = "blur";
              k2 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k2 = Fd;
              break;
            case "click":
              if (2 === c.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k2 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k2 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k2 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k2 = Hd;
              break;
            case cf:
              k2 = Xd;
              break;
            case "scroll":
              k2 = vd;
              break;
            case "wheel":
              k2 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k2 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k2 = Td;
          }
          var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
          t = [];
          for (var w = d2, u; null !== w; ) {
            u = w;
            var F = u.stateNode;
            5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
            if (J) break;
            w = w.return;
          }
          0 < t.length && (h2 = new k2(h2, n, null, c, e2), g2.push({ event: h2, listeners: t }));
        }
      }
      if (0 === (b & 7)) {
        a: {
          h2 = "mouseover" === a || "pointerover" === a;
          k2 = "mouseout" === a || "pointerout" === a;
          if (h2 && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
          if (k2 || h2) {
            h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
            if (k2) {
              if (n = c.relatedTarget || c.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
            } else k2 = null, n = d2;
            if (k2 !== n) {
              t = Bd;
              F = "onMouseLeave";
              x = "onMouseEnter";
              w = "mouse";
              if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
              J = null == k2 ? h2 : ue(k2);
              u = null == n ? h2 : ue(n);
              h2 = new t(F, w + "leave", k2, c, e2);
              h2.target = J;
              h2.relatedTarget = u;
              F = null;
              Wc(e2) === d2 && (t = new t(x, w + "enter", n, c, e2), t.target = u, t.relatedTarget = J, F = t);
              J = F;
              if (k2 && n) b: {
                t = k2;
                x = n;
                w = 0;
                for (u = t; u; u = vf(u)) w++;
                u = 0;
                for (F = x; F; F = vf(F)) u++;
                for (; 0 < w - u; ) t = vf(t), w--;
                for (; 0 < u - w; ) x = vf(x), u--;
                for (; w--; ) {
                  if (t === x || null !== x && t === x.alternate) break b;
                  t = vf(t);
                  x = vf(x);
                }
                t = null;
              }
              else t = null;
              null !== k2 && wf(g2, h2, k2, t, false);
              null !== n && null !== J && wf(g2, J, n, t, true);
            }
          }
        }
        a: {
          h2 = d2 ? ue(d2) : window;
          k2 = h2.nodeName && h2.nodeName.toLowerCase();
          if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
          else if (me(h2)) if (we) na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
          else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
          if (na && (na = na(a, d2))) {
            ne(g2, na, c, e2);
            break a;
          }
          xa && xa(a, h2, d2);
          "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
        }
        xa = d2 ? ue(d2) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g2, c, e2);
            break;
          case "selectionchange":
            if (Pe) break;
          case "keydown":
          case "keyup":
            Ue(g2, c, e2);
        }
        var $a;
        if (ae) b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
      }
      se(g2, b);
    });
  }
  function tf(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  }
  function oe(a, b) {
    for (var c = b + "Capture", d = []; null !== a; ) {
      var e = a, f = e.stateNode;
      5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
      a = a.return;
    }
    return d;
  }
  function vf(a) {
    if (null === a) return null;
    do
      a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function wf(a, b, c, d, e) {
    for (var f = b._reactName, g = []; null !== c && c !== d; ) {
      var h = c, k = h.alternate, l = h.stateNode;
      if (null !== k && k === d) break;
      5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
      c = c.return;
    }
    0 !== g.length && a.push({ event: b, listeners: g });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
  }
  function Af(a, b, c) {
    b = zf(b);
    if (zf(a) !== b && c) throw Error(p(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a, b) {
    return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  function If(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function Kf(a, b) {
    var c = b, d = 0;
    do {
      var e = c.nextSibling;
      a.removeChild(c);
      if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else "$" !== c && "$?" !== c && "$!" !== c || d++;
      c = e;
    } while (c);
    bd(b);
  }
  function Lf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b) break;
      if (8 === b) {
        b = a.data;
        if ("$" === b || "$!" === b || "$?" === b) break;
        if ("/$" === b) return null;
      }
    }
    return a;
  }
  function Mf(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if ("$" === c || "$!" === c || "$?" === c) {
          if (0 === b) return a;
          b--;
        } else "/$" === c && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a) {
    var b = a[Of];
    if (b) return b;
    for (var c = a.parentNode; c; ) {
      if (b = c[uf] || c[Of]) {
        c = b.alternate;
        if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
          if (c = a[Of]) return c;
          a = Mf(a);
        }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(p(33));
  }
  function Db(a) {
    return a[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a) {
    return { current: a };
  }
  function E(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G(a, b) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Vf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f;
    for (f in c) e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $f() {
    E(Wf);
    E(H);
  }
  function ag(a, b, c) {
    if (H.current !== Vf) throw Error(p(168));
    G(H, b);
    G(Wf, c);
  }
  function bg(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
    return A({}, c, d);
  }
  function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G(H, a);
    G(Wf, Wf.current);
    return true;
  }
  function dg(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(p(169));
    c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
    G(Wf, c);
  }
  var eg = null, fg = false, gg = false;
  function hg(a) {
    null === eg ? eg = [a] : eg.push(a);
  }
  function ig(a) {
    fg = true;
    hg(a);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a = 0, b = C;
      try {
        var c = eg;
        for (C = 1; a < c.length; a++) {
          var d = c[a];
          do
            d = d(true);
          while (null !== d);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C = b, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a, b) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b;
  }
  function ug(a, b, c) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d = rg;
    a = sg;
    var e = 32 - oc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - oc(b) + e;
    if (30 < f) {
      var g = e - e % 5;
      f = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      rg = 1 << 32 - oc(b) + e | c << e | d;
      sg = f + a;
    } else rg = 1 << f | c << e | d, sg = a;
  }
  function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
  }
  function wg(a) {
    for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I = false, zg = null;
  function Ag(a, b) {
    var c = Bg(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c.return = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function Cg(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
        return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
      case 6:
        return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
      case 13:
        return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function Eg(a) {
    if (I) {
      var b = yg;
      if (b) {
        var c = b;
        if (!Cg(a, b)) {
          if (Dg(a)) throw Error(p(418));
          b = Lf(c.nextSibling);
          var d = xg;
          b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
        }
      } else {
        if (Dg(a)) throw Error(p(418));
        a.flags = a.flags & -4097 | 2;
        I = false;
        xg = a;
      }
    }
  }
  function Fg(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
    xg = a;
  }
  function Gg(a) {
    if (a !== xg) return false;
    if (!I) return Fg(a), I = true, false;
    var b;
    (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
    if (b && (b = yg)) {
      if (Dg(a)) throw Hg(), Error(p(418));
      for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(p(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ("/$" === c) {
              if (0 === b) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b--;
            } else "$" !== c && "$!" !== c && "$?" !== c || b++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a = yg; a; ) a = Lf(a.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I = false;
  }
  function Jg(a) {
    null === zg ? zg = [a] : zg.push(a);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a, b, c) {
    a = c.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(p(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(p(147, a));
        var e = d, f = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
        b = function(a2) {
          var b2 = e.refs;
          null === a2 ? delete b2[f] : b2[f] = a2;
        };
        b._stringRef = f;
        return b;
      }
      if ("string" !== typeof a) throw Error(p(284));
      if (!c._owner) throw Error(p(290, a));
    }
    return a;
  }
  function Mg(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function Ng(a) {
    var b = a._init;
    return b(a._payload);
  }
  function Og(a) {
    function b(b2, c2) {
      if (a) {
        var d2 = b2.deletions;
        null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
      }
    }
    function c(c2, d2) {
      if (!a) return null;
      for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
      return null;
    }
    function d(a2, b2) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
      return a2;
    }
    function e(a2, b2) {
      a2 = Pg(a2, b2);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f(b2, c2, d2) {
      b2.index = d2;
      if (!a) return b2.flags |= 1048576, c2;
      d2 = b2.alternate;
      if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
      b2.flags |= 2;
      return c2;
    }
    function g(b2) {
      a && null === b2.alternate && (b2.flags |= 2);
      return b2;
    }
    function h(a2, b2, c2, d2) {
      if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function k(a2, b2, c2, d2) {
      var f2 = c2.type;
      if (f2 === ya) return m(a2, b2, c2.props.children, d2, c2.key);
      if (null !== b2 && (b2.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
      d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
      d2.ref = Lg(a2, b2, c2);
      d2.return = a2;
      return d2;
    }
    function l(a2, b2, c2, d2) {
      if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
      b2 = e(b2, c2.children || []);
      b2.return = a2;
      return b2;
    }
    function m(a2, b2, c2, d2, f2) {
      if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f2), b2.return = a2, b2;
      b2 = e(b2, c2);
      b2.return = a2;
      return b2;
    }
    function q(a2, b2, c2) {
      if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
      if ("object" === typeof b2 && null !== b2) {
        switch (b2.$$typeof) {
          case va:
            return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
          case wa:
            return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
          case Ha:
            var d2 = b2._init;
            return q(a2, d2(b2._payload), c2);
        }
        if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
        Mg(a2, b2);
      }
      return null;
    }
    function r(a2, b2, c2, d2) {
      var e2 = null !== b2 ? b2.key : null;
      if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case va:
            return c2.key === e2 ? k(a2, b2, c2, d2) : null;
          case wa:
            return c2.key === e2 ? l(a2, b2, c2, d2) : null;
          case Ha:
            return e2 = c2._init, r(
              a2,
              b2,
              e2(c2._payload),
              d2
            );
        }
        if (eb(c2) || Ka(c2)) return null !== e2 ? null : m(a2, b2, c2, d2, null);
        Mg(a2, c2);
      }
      return null;
    }
    function y(a2, b2, c2, d2, e2) {
      if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
      if ("object" === typeof d2 && null !== d2) {
        switch (d2.$$typeof) {
          case va:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k(b2, a2, d2, e2);
          case wa:
            return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l(b2, a2, d2, e2);
          case Ha:
            var f2 = d2._init;
            return y(a2, b2, c2, f2(d2._payload), e2);
        }
        if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m(b2, a2, d2, e2, null);
        Mg(b2, d2);
      }
      return null;
    }
    function n(e2, g2, h2, k2) {
      for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
        u.index > w ? (x = u, u = null) : x = u.sibling;
        var n2 = r(e2, u, h2[w], k2);
        if (null === n2) {
          null === u && (u = x);
          break;
        }
        a && u && null === n2.alternate && b(e2, u);
        g2 = f(n2, g2, w);
        null === m2 ? l2 = n2 : m2.sibling = n2;
        m2 = n2;
        u = x;
      }
      if (w === h2.length) return c(e2, u), I && tg(e2, w), l2;
      if (null === u) {
        for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
        I && tg(e2, w);
        return l2;
      }
      for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
      a && u.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w);
      return l2;
    }
    function t(e2, g2, h2, k2) {
      var l2 = Ka(h2);
      if ("function" !== typeof l2) throw Error(p(150));
      h2 = l2.call(h2);
      if (null == h2) throw Error(p(151));
      for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
        m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
        var t2 = r(e2, m2, n2.value, k2);
        if (null === t2) {
          null === m2 && (m2 = x);
          break;
        }
        a && m2 && null === t2.alternate && b(e2, m2);
        g2 = f(t2, g2, w);
        null === u ? l2 = t2 : u.sibling = t2;
        u = t2;
        m2 = x;
      }
      if (n2.done) return c(
        e2,
        m2
      ), I && tg(e2, w), l2;
      if (null === m2) {
        for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
        I && tg(e2, w);
        return l2;
      }
      for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
      a && m2.forEach(function(a2) {
        return b(e2, a2);
      });
      I && tg(e2, w);
      return l2;
    }
    function J(a2, d2, f2, h2) {
      "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
      if ("object" === typeof f2 && null !== f2) {
        switch (f2.$$typeof) {
          case va:
            a: {
              for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                if (l2.key === k2) {
                  k2 = f2.type;
                  if (k2 === ya) {
                    if (7 === l2.tag) {
                      c(a2, l2.sibling);
                      d2 = e(l2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                  } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                    c(a2, l2.sibling);
                    d2 = e(l2, f2.props);
                    d2.ref = Lg(a2, l2, f2);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                  c(a2, l2);
                  break;
                } else b(a2, l2);
                l2 = l2.sibling;
              }
              f2.type === ya ? (d2 = Tg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f2), h2.return = a2, a2 = h2);
            }
            return g(a2);
          case wa:
            a: {
              for (l2 = f2.key; null !== d2; ) {
                if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
                else b(a2, d2);
                d2 = d2.sibling;
              }
              d2 = Sg(f2, a2.mode, h2);
              d2.return = a2;
              a2 = d2;
            }
            return g(a2);
          case Ha:
            return l2 = f2._init, J(a2, d2, l2(f2._payload), h2);
        }
        if (eb(f2)) return n(a2, d2, f2, h2);
        if (Ka(f2)) return t(a2, d2, f2, h2);
        Mg(a2, f2);
      }
      return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
    }
    return J;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a) {
    var b = Wg.current;
    E(Wg);
    a._currentValue = b;
  }
  function bh(a, b, c) {
    for (; null !== a; ) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a.return;
    }
  }
  function ch(a, b) {
    Xg = a;
    Zg = Yg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
  }
  function eh(a) {
    var b = a._currentValue;
    if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
      if (null === Xg) throw Error(p(308));
      Yg = a;
      Xg.dependencies = { lanes: 0, firstContext: a };
    } else Yg = Yg.next = a;
    return b;
  }
  var fh = null;
  function gh(a) {
    null === fh ? fh = [a] : fh.push(a);
  }
  function hh(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return ih(a, d);
  }
  function ih(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
    return 3 === c.tag ? c.stateNode : null;
  }
  var jh = false;
  function kh(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function mh(a, b) {
    return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (K & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return ih(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return ih(a, c);
  }
  function oh(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  function ph(a, b) {
    var c = a.updateQueue, d = a.alternate;
    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null, f = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);
        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;
      c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }
  function qh(a, b, c, d) {
    var e = a.updateQueue;
    jh = false;
    var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k = h, l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var m = a.alternate;
      null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }
    if (null !== f) {
      var q = e.baseState;
      g = 0;
      m = l = k = null;
      h = f;
      do {
        var r = h.lane, y = h.eventTime;
        if ((d & r) === r) {
          null !== m && (m = m.next = {
            eventTime: y,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          a: {
            var n = a, t = h;
            r = b;
            y = c;
            switch (t.tag) {
              case 1:
                n = t.payload;
                if ("function" === typeof n) {
                  q = n.call(y, q, r);
                  break a;
                }
                q = n;
                break a;
              case 3:
                n.flags = n.flags & -65537 | 128;
              case 0:
                n = t.payload;
                r = "function" === typeof n ? n.call(y, q, r) : n;
                if (null === r || void 0 === r) break a;
                q = A({}, q, r);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
        } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;
        else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
      } while (1);
      null === m && (k = q);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do
          g |= e.lane, e = e.next;
        while (e !== b);
      } else null === f && (e.shared.lanes = 0);
      rh |= g;
      a.lanes = g;
      a.memoizedState = q;
    }
  }
  function sh(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(p(191, e));
        e.call(d);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a) {
    if (a === th) throw Error(p(174));
    return a;
  }
  function yh(a, b) {
    G(wh, b);
    G(vh, a);
    G(uh, th);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
        break;
      default:
        a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
    }
    E(uh);
    G(uh, b);
  }
  function zh() {
    E(uh);
    E(vh);
    E(wh);
  }
  function Ah(a) {
    xh(wh.current);
    var b = xh(uh.current);
    var c = lb(b, a.type);
    b !== c && (G(vh, a), G(uh, c));
  }
  function Bh(a) {
    vh.current === a && (E(uh), E(vh));
  }
  var L = Uf(0);
  function Ch(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P() {
    throw Error(p(321));
  }
  function Mh(a, b) {
    if (null === b) return false;
    for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
    return true;
  }
  function Nh(a, b, c, d, e, f) {
    Hh = f;
    M = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
    a = c(d, e);
    if (Jh) {
      f = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f) throw Error(p(301));
        f += 1;
        O = N = null;
        b.updateQueue = null;
        Fh.current = Qh;
        a = c(d, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b = null !== N && null !== N.next;
    Hh = 0;
    O = N = M = null;
    Ih = false;
    if (b) throw Error(p(300));
    return a;
  }
  function Sh() {
    var a = 0 !== Kh;
    Kh = 0;
    return a;
  }
  function Th() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
    return O;
  }
  function Uh() {
    if (null === N) {
      var a = M.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = N.next;
    var b = null === O ? M.memoizedState : O.next;
    if (null !== b) O = b, N = a;
    else {
      if (null === a) throw Error(p(310));
      N = a;
      a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
    }
    return O;
  }
  function Vh(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Wh(a) {
    var b = Uh(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = N, e = d.baseQueue, f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      f = e.next;
      d = d.baseState;
      var h = g = null, k = null, l = f;
      do {
        var m = l.lane;
        if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a(d, l.action);
        else {
          var q = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          null === k ? (h = k = q, g = d) : k = k.next = q;
          M.lanes |= m;
          rh |= m;
        }
        l = l.next;
      } while (null !== l && l !== f);
      null === k ? g = d : k.next = h;
      He(d, b.memoizedState) || (dh = true);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do
        f = e.lane, M.lanes |= f, rh |= f, e = e.next;
      while (e !== a);
    } else null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function Xh(a) {
    var b = Uh(), c = b.queue;
    if (null === c) throw Error(p(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch, e = c.pending, f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do
        f = a(f, g.action), g = g.next;
      while (g !== e);
      He(f, b.memoizedState) || (dh = true);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function Yh() {
  }
  function Zh(a, b) {
    var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
    f && (d.memoizedState = e, dh = true);
    d = d.queue;
    $h(ai.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
      c.flags |= 2048;
      bi(9, ci.bind(null, c, d, e, b), void 0, null);
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(c, b, e);
    }
    return e;
  }
  function di(a, b, c) {
    a.flags |= 16384;
    a = { getSnapshot: b, value: c };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }
  function ci(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    ei(b) && fi(a);
  }
  function ai(a, b, c) {
    return c(function() {
      ei(b) && fi(a);
    });
  }
  function ei(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !He(a, c);
    } catch (d) {
      return true;
    }
  }
  function fi(a) {
    var b = ih(a, 1);
    null !== b && gi(b, a, 1, -1);
  }
  function hi(a) {
    var b = Th();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
    b.queue = a;
    a = a.dispatch = ii.bind(null, M, a);
    return [b.memoizedState, a];
  }
  function bi(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = M.updateQueue;
    null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a, b, c, d) {
    var e = Th();
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function li(a, b, c, d) {
    var e = Uh();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== N) {
      var g = N.memoizedState;
      f = g.destroy;
      if (null !== d && Mh(d, g.deps)) {
        e.memoizedState = bi(b, c, f, d);
        return;
      }
    }
    M.flags |= a;
    e.memoizedState = bi(1 | b, c, f, d);
  }
  function mi(a, b) {
    return ki(8390656, 8, a, b);
  }
  function $h(a, b) {
    return li(2048, 8, a, b);
  }
  function ni(a, b) {
    return li(4, 2, a, b);
  }
  function oi(a, b) {
    return li(4, 4, a, b);
  }
  function pi(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function() {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
      b.current = null;
    };
  }
  function qi(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return li(4, 4, pi.bind(null, b, a), c);
  }
  function ri() {
  }
  function si(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function ti(a, b) {
    var c = Uh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Mh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function ui(a, b, c) {
    if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
    He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
    return b;
  }
  function vi(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(true);
    var d = Gh.transition;
    Gh.transition = {};
    try {
      a(false), b();
    } finally {
      C = c, Gh.transition = d;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a, b, c) {
    var d = yi(a);
    c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b, c);
    else if (c = hh(a, b, c, d), null !== c) {
      var e = R();
      gi(c, a, d, e);
      Bi(c, b, d);
    }
  }
  function ii(a, b, c) {
    var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b, e);
    else {
      var f = a.alternate;
      if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
        var g = b.lastRenderedState, h = f(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k = b.interleaved;
          null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l) {
      } finally {
      }
      c = hh(a, b, e, d);
      null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
    }
  }
  function zi(a) {
    var b = a.alternate;
    return a === M || null !== b && b === M;
  }
  function Ai(a, b) {
    Jh = Ih = true;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function Bi(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Cc(a, c);
    }
  }
  var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
    Th().memoizedState = [a, void 0 === b ? null : b];
    return a;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b, a),
      c
    );
  }, useLayoutEffect: function(a, b) {
    return ki(4194308, 4, a, b);
  }, useInsertionEffect: function(a, b) {
    return ki(4, 2, a, b);
  }, useMemo: function(a, b) {
    var c = Th();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  }, useReducer: function(a, b, c) {
    var d = Th();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
    d.queue = a;
    a = a.dispatch = xi.bind(null, M, a);
    return [d.memoizedState, a];
  }, useRef: function(a) {
    var b = Th();
    a = { current: a };
    return b.memoizedState = a;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
    return Th().memoizedState = a;
  }, useTransition: function() {
    var a = hi(false), b = a[0];
    a = vi.bind(null, a[1]);
    Th().memoizedState = a;
    return [b, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b, c) {
    var d = M, e = Th();
    if (I) {
      if (void 0 === c) throw Error(p(407));
      c = c();
    } else {
      c = b();
      if (null === Q) throw Error(p(349));
      0 !== (Hh & 30) || di(d, b, c);
    }
    e.memoizedState = c;
    var f = { value: c, getSnapshot: b };
    e.queue = f;
    mi(ai.bind(
      null,
      d,
      f,
      a
    ), [a]);
    d.flags |= 2048;
    bi(9, ci.bind(null, d, f, c, b), void 0, null);
    return c;
  }, useId: function() {
    var a = Th(), b = Q.identifierPrefix;
    if (I) {
      var c = sg;
      var d = rg;
      c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
      b = ":" + b + "R" + c;
      c = Kh++;
      0 < c && (b += "H" + c.toString(32));
      b += ":";
    } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
    return a.memoizedState = b;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a) {
      var b = Uh();
      return ui(b, N.memoizedState, a);
    },
    useTransition: function() {
      var a = Wh(Vh)[0], b = Uh().memoizedState;
      return [a, b];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a) {
    var b = Uh();
    return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
  }, useTransition: function() {
    var a = Xh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a, b) {
    if (a && a.defaultProps) {
      b = A({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function Di(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : A({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var Ei = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f = mh(d, e);
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueReplaceState: function(a, b, c) {
    a = a._reactInternals;
    var d = R(), e = yi(a), f = mh(d, e);
    f.tag = 1;
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = nh(a, f, e);
    null !== b && (gi(b, a, e, d), oh(b, a, e));
  }, enqueueForceUpdate: function(a, b) {
    a = a._reactInternals;
    var c = R(), d = yi(a), e = mh(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = nh(a, e, d);
    null !== b && (gi(b, a, d, c), oh(b, a, d));
  } };
  function Fi(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : true;
  }
  function Gi(a, b, c) {
    var d = false, e = Vf;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Ei;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function Hi(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
  }
  function Ii(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    kh(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ji(a, b) {
    try {
      var c = "", d = b;
      do
        c += Pa(d), d = d.return;
      while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return { value: a, source: b, stack: e, digest: null };
  }
  function Ki(a, b, c) {
    return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
  }
  function Li(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function() {
      Oi || (Oi = true, Pi = d);
      Li(a, b);
    };
    return c;
  }
  function Qi(a, b, c) {
    c = mh(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function() {
        return d(e);
      };
      c.callback = function() {
        Li(a, b);
      };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
      Li(a, b);
      "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c2 = b.stack;
      this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
    });
    return c;
  }
  function Si(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
  }
  function Ui(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
      if (b) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Vi(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a, b, c, d) {
    b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
  }
  function Yi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    ch(b, e);
    d = Nh(a, b, c, d, f, e);
    c = Sh();
    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && c && vg(b);
    b.flags |= 1;
    Xi(a, b, d, e);
    return b.child;
  }
  function $i(a, b, c, d, e) {
    if (null === a) {
      var f = c.type;
      if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, bj(a, b, f, d, e);
      a = Rg(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a.return = b;
      return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
      var g = f.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Ie;
      if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
    }
    b.flags |= 1;
    a = Pg(f, d);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  function bj(a, b, c, d, e) {
    if (null !== a) {
      var f = a.memoizedProps;
      if (Ie(f, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
      else return b.lanes = a.lanes, Zi(a, b, e);
    }
    return cj(a, b, c, d, e);
  }
  function dj(a, b, c) {
    var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
    else {
      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f ? f.baseLanes : c;
      G(ej, fj);
      fj |= d;
    }
    else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
    Xi(a, b, e, c);
    return b.child;
  }
  function gj(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }
  function cj(a, b, c, d, e) {
    var f = Zf(c) ? Xf : H.current;
    f = Yf(b, f);
    ch(b, e);
    c = Nh(a, b, c, d, f, e);
    d = Sh();
    if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
    I && d && vg(b);
    b.flags |= 1;
    Xi(a, b, c, e);
    return b.child;
  }
  function hj(a, b, c, d, e) {
    if (Zf(c)) {
      var f = true;
      cg(b);
    } else f = false;
    ch(b, e);
    if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
    else if (null === a) {
      var g = b.stateNode, h = b.memoizedProps;
      g.props = h;
      var k = g.context, l = c.contextType;
      "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
      var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
      q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
      jh = false;
      var r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      k = b.memoizedState;
      h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
    } else {
      g = b.stateNode;
      lh(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : Ci(b.type, h);
      g.props = l;
      q = b.pendingProps;
      r = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
      var y = c.getDerivedStateFromProps;
      (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
      jh = false;
      r = b.memoizedState;
      g.state = r;
      qh(b, d, g, e);
      var n = b.memoizedState;
      h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = false);
    }
    return jj(a, b, c, d, f, e);
  }
  function jj(a, b, c, d, e, f) {
    gj(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && dg(b, c, false), Zi(a, b, f);
    d = b.stateNode;
    Wi.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
    b.memoizedState = d.state;
    e && dg(b, c, true);
    return b.child;
  }
  function kj(a) {
    var b = a.stateNode;
    b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
    yh(a, b.containerInfo);
  }
  function lj(a, b, c, d, e) {
    Ig();
    Jg(e);
    b.flags |= 256;
    Xi(a, b, c, d);
    return b.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function oj(a, b, c) {
    var d = b.pendingProps, e = L.current, f = false, g = 0 !== (b.flags & 128), h;
    (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h) f = true, b.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    G(L, e & 1);
    if (null === a) {
      Eg(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f ? (d = b.mode, f = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
    if (f) {
      f = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k = { mode: "hidden", children: d.children };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
      f.return = b;
      d.return = b;
      d.sibling = f;
      b.child = d;
      d = f;
      f = b.child;
      g = a.child.memoizedState;
      g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
      f.memoizedState = g;
      f.childLanes = a.childLanes & ~c;
      b.memoizedState = mj;
      return d;
    }
    f = a.child;
    a = f.sibling;
    d = Pg(f, { mode: "visible", children: d.children });
    0 === (b.mode & 1) && (d.lanes = c);
    d.return = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function qj(a, b) {
    b = pj({ mode: "visible", children: b }, a.mode, 0, null);
    b.return = a;
    return a.child = b;
  }
  function sj(a, b, c, d) {
    null !== d && Jg(d);
    Ug(b, a.child, null, c);
    a = qj(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function rj(a, b, c, d, e, f, g) {
    if (c) {
      if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
      if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
      f = d.fallback;
      e = b.mode;
      d = pj({ mode: "visible", children: d.children }, e, 0, null);
      f = Tg(f, e, g, null);
      f.flags |= 2;
      d.return = b;
      f.return = b;
      d.sibling = f;
      b.child = d;
      0 !== (b.mode & 1) && Ug(b, a.child, null, g);
      b.child.memoizedState = nj(g);
      b.memoizedState = mj;
      return f;
    }
    if (0 === (b.mode & 1)) return sj(a, b, g, null);
    if ("$!" === e.data) {
      d = e.nextSibling && e.nextSibling.dataset;
      if (d) var h = d.dgst;
      d = h;
      f = Error(p(419));
      d = Ki(f, d, void 0);
      return sj(a, b, g, d);
    }
    h = 0 !== (g & a.childLanes);
    if (dh || h) {
      d = Q;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
      }
      tj();
      d = Ki(Error(p(421)));
      return sj(a, b, g, d);
    }
    if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
    a = f.treeContext;
    yg = Lf(e.nextSibling);
    xg = b;
    I = true;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
    b = qj(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function vj(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    bh(a.return, b, c);
  }
  function wj(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
  }
  function xj(a, b, c) {
    var d = b.pendingProps, e = d.revealOrder, f = d.tail;
    Xi(a, b, d.children, c);
    d = L.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
        if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
        else if (19 === a.tag) vj(a, c, b);
        else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === b) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d &= 1;
    }
    G(L, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;
    else switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        wj(b, false, e, c, f);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Ch(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        wj(b, true, c, null, f);
        break;
      case "together":
        wj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function ij(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }
  function Zi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    rh |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(p(153));
    if (null !== b.child) {
      a = b.child;
      c = Pg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  function yj(a, b, c) {
    switch (b.tag) {
      case 3:
        kj(b);
        Ig();
        break;
      case 5:
        Ah(b);
        break;
      case 1:
        Zf(b.type) && cg(b);
        break;
      case 4:
        yh(b, b.stateNode.containerInfo);
        break;
      case 10:
        var d = b.type._context, e = b.memoizedProps.value;
        G(Wg, d._currentValue);
        d._currentValue = e;
        break;
      case 13:
        d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
          G(L, L.current & 1);
          a = Zi(a, b, c);
          return null !== a ? a.sibling : null;
        }
        G(L, L.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d) return xj(a, b, c);
          b.flags |= 128;
        }
        e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G(L, L.current);
        if (d) break;
        else return null;
      case 22:
      case 23:
        return b.lanes = 0, dj(a, b, c);
    }
    return Zi(a, b, c);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      xh(uh.current);
      var f = null;
      switch (c) {
        case "input":
          e = Ya(a, e);
          d = Ya(a, d);
          f = [];
          break;
        case "select":
          e = A({}, e, { value: void 0 });
          d = A({}, d, { value: void 0 });
          f = [];
          break;
        case "textarea":
          e = gb(a, e);
          d = gb(a, d);
          f = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
      }
      ub(c, d);
      var g;
      c = null;
      for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
        var h = e[l];
        for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
      } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
      for (l in d) {
        var k = d[l];
        h = null != e ? e[l] : void 0;
        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
        } else c || (f || (f = []), f.push(
          l,
          c
        )), c = k;
        else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
      }
      c && (f = f || []).push("style", c);
      var l = f;
      if (b.updateQueue = l) b.flags |= 4;
    }
  };
  Cj = function(a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  function Dj(a, b) {
    if (!I) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function S(a) {
    var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
    if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Ej(a, b, c) {
    var d = b.pendingProps;
    wg(b);
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S(b), null;
      case 1:
        return Zf(b.type) && $f(), S(b), null;
      case 3:
        d = b.stateNode;
        zh();
        E(Wf);
        E(H);
        Eh();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a, b);
        S(b);
        return null;
      case 5:
        Bh(b);
        var e = xh(wh.current);
        c = b.type;
        if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        else {
          if (!d) {
            if (null === b.stateNode) throw Error(p(166));
            S(b);
            return null;
          }
          a = xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[Of] = b;
            d[Pf] = f;
            a = 0 !== (b.mode & 1);
            switch (c) {
              case "dialog":
                D("cancel", d);
                D("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", d);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], d);
                break;
              case "source":
                D("error", d);
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  d
                );
                D("load", d);
                break;
              case "details":
                D("toggle", d);
                break;
              case "input":
                Za(d, f);
                D("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!f.multiple };
                D("invalid", d);
                break;
              case "textarea":
                hb(d, f), D("invalid", d);
            }
            ub(c, f);
            e = null;
            for (var g in f) if (f.hasOwnProperty(g)) {
              var h = f[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
            switch (c) {
              case "input":
                Va(d);
                db(d, f, true);
                break;
              case "textarea":
                Va(d);
                jb(d);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f.onClick && (d.onclick = Bf);
            }
            d = e;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
            a[Of] = b;
            a[Pf] = d;
            zj(a, b, false, false);
            b.stateNode = a;
            a: {
              g = vb(c, d);
              switch (c) {
                case "dialog":
                  D("cancel", a);
                  D("close", a);
                  e = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", a);
                  e = d;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], a);
                  e = d;
                  break;
                case "source":
                  D("error", a);
                  e = d;
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    a
                  );
                  D("load", a);
                  e = d;
                  break;
                case "details":
                  D("toggle", a);
                  e = d;
                  break;
                case "input":
                  Za(a, d);
                  e = Ya(a, d);
                  D("invalid", a);
                  break;
                case "option":
                  e = d;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d.multiple };
                  e = A({}, d, { value: void 0 });
                  D("invalid", a);
                  break;
                case "textarea":
                  hb(a, d);
                  e = gb(a, d);
                  D("invalid", a);
                  break;
                default:
                  e = d;
              }
              ub(c, e);
              h = e;
              for (f in h) if (h.hasOwnProperty(f)) {
                var k = h[f];
                "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
              }
              switch (c) {
                case "input":
                  Va(a);
                  db(a, d, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  null != d.value && a.setAttribute("value", "" + Sa(d.value));
                  break;
                case "select":
                  a.multiple = !!d.multiple;
                  f = d.value;
                  null != f ? fb(a, !!d.multiple, f, false) : null != d.defaultValue && fb(
                    a,
                    !!d.multiple,
                    d.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a.onclick = Bf);
              }
              switch (c) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break a;
                case "img":
                  d = true;
                  break a;
                default:
                  d = false;
              }
            }
            d && (b.flags |= 4);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        S(b);
        return null;
      case 6:
        if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
        else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
          c = xh(wh.current);
          xh(uh.current);
          if (Gg(b)) {
            d = b.stateNode;
            c = b.memoizedProps;
            d[Of] = b;
            if (f = d.nodeValue !== c) {
              if (a = xg, null !== a) switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
            }
            f && (b.flags |= 4);
          } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
        }
        S(b);
        return null;
      case 13:
        E(L);
        d = b.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = false;
          else if (f = Gg(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!f) throw Error(p(318));
              f = b.memoizedState;
              f = null !== f ? f.dehydrated : null;
              if (!f) throw Error(p(317));
              f[Of] = b;
            } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            S(b);
            f = false;
          } else null !== zg && (Fj(zg), zg = null), f = true;
          if (!f) return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        d = null !== d;
        d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
        null !== b.updateQueue && (b.flags |= 4);
        S(b);
        return null;
      case 4:
        return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
      case 10:
        return ah(b.type._context), S(b), null;
      case 17:
        return Zf(b.type) && $f(), S(b), null;
      case 19:
        E(L);
        f = b.memoizedState;
        if (null === f) return S(b), null;
        d = 0 !== (b.flags & 128);
        g = f.rendering;
        if (null === g) if (d) Dj(f, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
            g = Ch(a);
            if (null !== g) {
              b.flags |= 128;
              Dj(f, false);
              d = g.updateQueue;
              null !== d && (b.updateQueue = d, b.flags |= 4);
              b.subtreeFlags = 0;
              d = c;
              for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
              G(L, L.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== f.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
        }
        else {
          if (!d) if (a = Ch(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
          } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f, false), b.lanes = 4194304);
          f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
        }
        if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
        S(b);
        return null;
      case 22:
      case 23:
        return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, b.tag));
  }
  function Ij(a, b) {
    wg(b);
    switch (b.tag) {
      case 1:
        return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return Bh(b), null;
      case 13:
        E(L);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(p(340));
          Ig();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return E(L), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
  function Lj(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      W(a, b, d);
    }
    else c.current = null;
  }
  function Mj(a, b, c) {
    try {
      c();
    } catch (d) {
      W(a, b, d);
    }
  }
  var Nj = false;
  function Oj(a, b) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
      else a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f.nodeType;
          } catch (F) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
          b: for (; ; ) {
            for (var y; ; ) {
              q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
              q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
              3 === q.nodeType && (g += q.nodeValue.length);
              if (null === (y = q.firstChild)) break;
              r = q;
              q = y;
            }
            for (; ; ) {
              if (q === a) break b;
              r === c && ++l === e && (h = g);
              r === f && ++m === d && (k = g);
              if (null !== (y = q.nextSibling)) break;
              q = r;
              r = q.parentNode;
            }
            q = y;
          }
          c = -1 === h || -1 === k ? null : { start: h, end: k };
        } else c = null;
      }
      c = c || { start: 0, end: 0 };
    } else c = null;
    Df = { focusedElem: a, selectionRange: c };
    dd = false;
    for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
    else for (; null !== V; ) {
      b = V;
      try {
        var n = b.alternate;
        if (0 !== (b.flags & 1024)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n) {
              var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
              x.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var u = b.stateNode.containerInfo;
            1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (F) {
        W(b, b.return, F);
      }
      a = b.sibling;
      if (null !== a) {
        a.return = b.return;
        V = a;
        break;
      }
      V = b.return;
    }
    n = Nj;
    Nj = false;
    return n;
  }
  function Pj(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = void 0;
          void 0 !== f && Mj(b, c, f);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Qj(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;
    if (null !== b) {
      var c = b = b.next;
      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }
        c = c.next;
      } while (c !== b);
    }
  }
  function Rj(a) {
    var b = a.ref;
    if (null !== b) {
      var c = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c;
          break;
        default:
          a = c;
      }
      "function" === typeof b ? b(a) : b.current = a;
    }
  }
  function Sj(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Sj(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Uj(a) {
    a: for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Tj(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;
        else a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Vj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
    else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
  }
  function Wj(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
  }
  var X = null, Xj = false;
  function Yj(a, b, c) {
    for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
  }
  function Zj(a, b, c) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
    switch (c.tag) {
      case 5:
        U || Lj(c, b);
      case 6:
        var d = X, e = Xj;
        X = null;
        Yj(a, b, c);
        X = d;
        Xj = e;
        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
        break;
      case 18:
        null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
        break;
      case 4:
        d = X;
        e = Xj;
        X = c.stateNode.containerInfo;
        Xj = true;
        Yj(a, b, c);
        X = d;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f = e, g = f.destroy;
            f = f.tag;
            void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Yj(a, b, c);
        break;
      case 1:
        if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
        Yj(a, b, c);
        break;
      case 21:
        Yj(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
        break;
      default:
        Yj(a, b, c);
    }
  }
  function ak(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Kj());
      b.forEach(function(b2) {
        var d = bk.bind(null, a, b2);
        c.has(b2) || (c.add(b2), b2.then(d, d));
      });
    }
  }
  function ck(a, b) {
    var c = b.deletions;
    if (null !== c) for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f = a, g = b, h = g;
        a: for (; null !== h; ) {
          switch (h.tag) {
            case 5:
              X = h.stateNode;
              Xj = false;
              break a;
            case 3:
              X = h.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X = h.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h = h.return;
        }
        if (null === X) throw Error(p(160));
        Zj(f, g, e);
        X = null;
        Xj = false;
        var k = e.alternate;
        null !== k && (k.return = null);
        e.return = null;
      } catch (l) {
        W(e, b, l);
      }
    }
    if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
  }
  function dk(a, b) {
    var c = a.alternate, d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b, a);
        ek(a);
        if (d & 4) {
          try {
            Pj(3, a, a.return), Qj(3, a);
          } catch (t) {
            W(a, a.return, t);
          }
          try {
            Pj(5, a, a.return);
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 1:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        break;
      case 5:
        ck(b, a);
        ek(a);
        d & 512 && null !== c && Lj(c, c.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t) {
            W(a, a.return, t);
          }
        }
        if (d & 4 && (e = a.stateNode, null != e)) {
          var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
          a.updateQueue = null;
          if (null !== k) try {
            "input" === h && "radio" === f.type && null != f.name && ab(e, f);
            vb(h, g);
            var l = vb(h, f);
            for (g = 0; g < k.length; g += 2) {
              var m = k[g], q = k[g + 1];
              "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
            }
            switch (h) {
              case "input":
                bb(e, f);
                break;
              case "textarea":
                ib(e, f);
                break;
              case "select":
                var r = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f.multiple;
                var y = f.value;
                null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                  e,
                  !!f.multiple,
                  f.defaultValue,
                  true
                ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
            }
            e[Pf] = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 6:
        ck(b, a);
        ek(a);
        if (d & 4) {
          if (null === a.stateNode) throw Error(p(162));
          e = a.stateNode;
          f = a.memoizedProps;
          try {
            e.nodeValue = f;
          } catch (t) {
            W(a, a.return, t);
          }
        }
        break;
      case 3:
        ck(b, a);
        ek(a);
        if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
          bd(b.containerInfo);
        } catch (t) {
          W(a, a.return, t);
        }
        break;
      case 4:
        ck(b, a);
        ek(a);
        break;
      case 13:
        ck(b, a);
        ek(a);
        e = a.child;
        e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
        d & 4 && ak(a);
        break;
      case 22:
        m = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
        ek(a);
        if (d & 8192) {
          l = null !== a.memoizedState;
          if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
            for (q = V = m; null !== V; ) {
              r = V;
              y = r.child;
              switch (r.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r, r.return);
                  break;
                case 1:
                  Lj(r, r.return);
                  var n = r.stateNode;
                  if ("function" === typeof n.componentWillUnmount) {
                    d = r;
                    c = r.return;
                    try {
                      b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                    } catch (t) {
                      W(d, c, t);
                    }
                  }
                  break;
                case 5:
                  Lj(r, r.return);
                  break;
                case 22:
                  if (null !== r.memoizedState) {
                    gk(q);
                    continue;
                  }
              }
              null !== y ? (y.return = r, V = y) : gk(q);
            }
            m = m.sibling;
          }
          a: for (m = null, q = a; ; ) {
            if (5 === q.tag) {
              if (null === m) {
                m = q;
                try {
                  e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                } catch (t) {
                  W(a, a.return, t);
                }
              }
            } else if (6 === q.tag) {
              if (null === m) try {
                q.stateNode.nodeValue = l ? "" : q.memoizedProps;
              } catch (t) {
                W(a, a.return, t);
              }
            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
              q.child.return = q;
              q = q.child;
              continue;
            }
            if (q === a) break a;
            for (; null === q.sibling; ) {
              if (null === q.return || q.return === a) break a;
              m === q && (m = null);
              q = q.return;
            }
            m === q && (m = null);
            q.sibling.return = q.return;
            q = q.sibling;
          }
        }
        break;
      case 19:
        ck(b, a);
        ek(a);
        d & 4 && ak(a);
        break;
      case 21:
        break;
      default:
        ck(
          b,
          a
        ), ek(a);
    }
  }
  function ek(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        a: {
          for (var c = a.return; null !== c; ) {
            if (Tj(c)) {
              var d = c;
              break a;
            }
            c = c.return;
          }
          throw Error(p(160));
        }
        switch (d.tag) {
          case 5:
            var e = d.stateNode;
            d.flags & 32 && (ob(e, ""), d.flags &= -33);
            var f = Uj(a);
            Wj(a, f, e);
            break;
          case 3:
          case 4:
            var g = d.stateNode.containerInfo, h = Uj(a);
            Vj(a, h, g);
            break;
          default:
            throw Error(p(161));
        }
      } catch (k) {
        W(a, a.return, k);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function hk(a, b, c) {
    V = a;
    ik(a);
  }
  function ik(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== V; ) {
      var e = V, f = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Jj;
        if (!g) {
          var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
          h = Jj;
          var l = U;
          Jj = g;
          if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
          for (; null !== f; ) V = f, ik(f), f = f.sibling;
          V = e;
          Jj = h;
          U = l;
        }
        kk(a);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a);
    }
  }
  function kk(a) {
    for (; null !== V; ) {
      var b = V;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Qj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
              else {
                var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f = b.updateQueue;
              null !== f && sh(b, f, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child) switch (b.child.tag) {
                  case 5:
                    c = b.child.stateNode;
                    break;
                  case 1:
                    c = b.child.stateNode;
                }
                sh(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && c.focus();
                    break;
                  case "img":
                    k.src && (c.src = k.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l = b.alternate;
                if (null !== l) {
                  var m = l.memoizedState;
                  if (null !== m) {
                    var q = m.dehydrated;
                    null !== q && bd(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
          U || b.flags & 512 && Rj(b);
        } catch (r) {
          W(b, b.return, r);
        }
      }
      if (b === a) {
        V = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function gk(a) {
    for (; null !== V; ) {
      var b = V;
      if (b === a) {
        V = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c.return = b.return;
        V = c;
        break;
      }
      V = b.return;
    }
  }
  function jk(a) {
    for (; null !== V; ) {
      var b = V;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b.return;
            try {
              Qj(4, b);
            } catch (k) {
              W(b, c, k);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b.return;
              try {
                d.componentDidMount();
              } catch (k) {
                W(b, e, k);
              }
            }
            var f = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, f, k);
            }
            break;
          case 5:
            var g = b.return;
            try {
              Rj(b);
            } catch (k) {
              W(b, g, k);
            }
        }
      } catch (k) {
        W(b, b.return, k);
      }
      if (b === a) {
        V = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h.return = b.return;
        V = h;
        break;
      }
      V = b.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R() {
    return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
  }
  function yi(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a = C;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
  }
  function gi(a, b, c, d) {
    if (50 < yk) throw yk = 0, zk = null, Error(p(185));
    Ac(a, c, d);
    if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
  }
  function Dk(a, b) {
    var c = a.callbackNode;
    wc(a, b);
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
    else if (b = d & -d, a.callbackPriority !== b) {
      null != c && bc(c);
      if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
      else {
        switch (Dc(d)) {
          case 1:
            c = fc;
            break;
          case 4:
            c = gc;
            break;
          case 16:
            c = hc;
            break;
          case 536870912:
            c = jc;
            break;
          default:
            c = hc;
        }
        c = Fk(c, Gk.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Gk(a, b) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K & 6)) throw Error(p(327));
    var c = a.callbackNode;
    if (Hk() && a.callbackNode !== c) return null;
    var d = uc(a, a === Q ? Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
    else {
      b = d;
      var e = K;
      K |= 2;
      var f = Jk();
      if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
      do
        try {
          Lk();
          break;
        } catch (h) {
          Mk(a, h);
        }
      while (1);
      $g();
      mk.current = f;
      K = e;
      null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
    }
    if (0 !== b) {
      2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
      if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      if (6 === b) Ck(a, d);
      else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            Pk(a, tk, uk);
            break;
          case 3:
            Ck(a, d);
            if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
              if (0 !== uc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                R();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 4:
            Ck(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;
            for (e = -1; 0 < d; ) {
              var g = 31 - oc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }
            d = e;
            d = B() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 5:
            Pk(a, tk, uk);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    Dk(a, B());
    return a.callbackNode === c ? Gk.bind(null, a) : null;
  }
  function Nk(a, b) {
    var c = sk;
    a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
    a = Ik(a, b);
    2 !== a && (b = tk, tk = c, null !== b && Fj(b));
    return a;
  }
  function Fj(a) {
    null === tk ? tk = a : tk.push.apply(tk, a);
  }
  function Ok(a) {
    for (var b = a; ; ) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d], f = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f(), e)) return false;
          } catch (g) {
            return false;
          }
        }
      }
      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
      else {
        if (b === a) break;
        for (; null === b.sibling; ) {
          if (null === b.return || b.return === a) return true;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return true;
  }
  function Ck(a, b) {
    b &= ~rk;
    b &= ~qk;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - oc(b), d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Ek(a) {
    if (0 !== (K & 6)) throw Error(p(327));
    Hk();
    var b = uc(a, 0);
    if (0 === (b & 1)) return Dk(a, B()), null;
    var c = Ik(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = xc(a);
      0 !== d && (b = d, c = Nk(a, d));
    }
    if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
    if (6 === c) throw Error(p(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Pk(a, tk, uk);
    Dk(a, B());
    return null;
  }
  function Qk(a, b) {
    var c = K;
    K |= 1;
    try {
      return a(b);
    } finally {
      K = c, 0 === K && (Gj = B() + 500, fg && jg());
    }
  }
  function Rk(a) {
    null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
    var b = K;
    K |= 1;
    var c = ok.transition, d = C;
    try {
      if (ok.transition = null, C = 1, a) return a();
    } finally {
      C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E(ej);
  }
  function Kk(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && (a.timeoutHandle = -1, Gf(c));
    if (null !== Y) for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          zh();
          E(Wf);
          E(H);
          Eh();
          break;
        case 5:
          Bh(d);
          break;
        case 4:
          zh();
          break;
        case 13:
          E(L);
          break;
        case 19:
          E(L);
          break;
        case 10:
          ah(d.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c = c.return;
    }
    Q = a;
    Y = a = Pg(a.current, null);
    Z = fj = b;
    T = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f = c.pending;
        if (null !== f) {
          var g = f.next;
          f.next = e;
          d.next = g;
        }
        c.pending = d;
      }
      fh = null;
    }
    return a;
  }
  function Mk(a, b) {
    do {
      var c = Y;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d = M.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Ih = false;
        }
        Hh = 0;
        O = N = M = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c || null === c.return) {
          T = 1;
          pk = b;
          Y = null;
          break;
        }
        a: {
          var f = a, g = c.return, h = c, k = b;
          b = Z;
          h.flags |= 32768;
          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k, m = h, q = m.tag;
            if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
              var r = m.alternate;
              r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var y = Ui(g);
            if (null !== y) {
              y.flags &= -257;
              Vi(y, g, h, f, b);
              y.mode & 1 && Si(f, l, b);
              b = y;
              k = l;
              var n = b.updateQueue;
              if (null === n) {
                var t = /* @__PURE__ */ new Set();
                t.add(k);
                b.updateQueue = t;
              } else n.add(k);
              break a;
            } else {
              if (0 === (b & 1)) {
                Si(f, l, b);
                tj();
                break a;
              }
              k = Error(p(426));
            }
          } else if (I && h.mode & 1) {
            var J = Ui(g);
            if (null !== J) {
              0 === (J.flags & 65536) && (J.flags |= 256);
              Vi(J, g, h, f, b);
              Jg(Ji(k, h));
              break a;
            }
          }
          f = k = Ji(k, h);
          4 !== T && (T = 2);
          null === sk ? sk = [f] : sk.push(f);
          f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var x = Ni(f, k, b);
                ph(f, x);
                break a;
              case 1:
                h = k;
                var w = f.type, u = f.stateNode;
                if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var F = Qi(f, h, b);
                  ph(f, F);
                  break a;
                }
            }
            f = f.return;
          } while (null !== f);
        }
        Sk(c);
      } catch (na) {
        b = na;
        Y === c && null !== c && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a = mk.current;
    mk.current = Rh;
    return null === a ? Rh : a;
  }
  function tj() {
    if (0 === T || 3 === T || 2 === T) T = 4;
    null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
  }
  function Ik(a, b) {
    var c = K;
    K |= 2;
    var d = Jk();
    if (Q !== a || Z !== b) uk = null, Kk(a, b);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a, e);
      }
    while (1);
    $g();
    K = c;
    mk.current = d;
    if (null !== Y) throw Error(p(261));
    Q = null;
    Z = 0;
    return T;
  }
  function Tk() {
    for (; null !== Y; ) Uk(Y);
  }
  function Lk() {
    for (; null !== Y && !cc(); ) Uk(Y);
  }
  function Uk(a) {
    var b = Vk(a.alternate, a, fj);
    a.memoizedProps = a.pendingProps;
    null === b ? Sk(a) : Y = b;
    nk.current = null;
  }
  function Sk(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 32768)) {
        if (c = Ej(c, b, fj), null !== c) {
          Y = c;
          return;
        }
      } else {
        c = Ij(c, b);
        if (null !== c) {
          c.flags &= 32767;
          Y = c;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T = 6;
          Y = null;
          return;
        }
      }
      b = b.sibling;
      if (null !== b) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (null !== b);
    0 === T && (T = 5);
  }
  function Pk(a, b, c) {
    var d = C, e = ok.transition;
    try {
      ok.transition = null, C = 1, Wk(a, b, c, d);
    } finally {
      ok.transition = e, C = d;
    }
    return null;
  }
  function Wk(a, b, c, d) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K & 6)) throw Error(p(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(p(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Bc(a, f);
    a === Q && (Y = Q = null, Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
      f = ok.transition;
      ok.transition = null;
      var g = C;
      C = 1;
      var h = K;
      K |= 4;
      nk.current = null;
      Oj(a, c);
      dk(c, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c;
      hk(c);
      dc();
      K = h;
      C = g;
      ok.transition = f;
    } else a.current = c;
    vk && (vk = false, wk = a, xk = e);
    f = a.pendingLanes;
    0 === f && (Ri = null);
    mc(c.stateNode);
    Dk(a, B());
    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi) throw Oi = false, a = Pi, Pi = null, a;
    0 !== (xk & 1) && 0 !== a.tag && Hk();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a = Dc(xk), b = ok.transition, c = C;
      try {
        ok.transition = null;
        C = 16 > a ? 16 : a;
        if (null === wk) var d = false;
        else {
          a = wk;
          wk = null;
          xk = 0;
          if (0 !== (K & 6)) throw Error(p(331));
          var e = K;
          K |= 4;
          for (V = a.current; null !== V; ) {
            var f = V, g = f.child;
            if (0 !== (V.flags & 16)) {
              var h = f.deletions;
              if (null !== h) {
                for (var k = 0; k < h.length; k++) {
                  var l = h[k];
                  for (V = l; null !== V; ) {
                    var m = V;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m, f);
                    }
                    var q = m.child;
                    if (null !== q) q.return = m, V = q;
                    else for (; null !== V; ) {
                      m = V;
                      var r = m.sibling, y = m.return;
                      Sj(m);
                      if (m === l) {
                        V = null;
                        break;
                      }
                      if (null !== r) {
                        r.return = y;
                        V = r;
                        break;
                      }
                      V = y;
                    }
                  }
                }
                var n = f.alternate;
                if (null !== n) {
                  var t = n.child;
                  if (null !== t) {
                    n.child = null;
                    do {
                      var J = t.sibling;
                      t.sibling = null;
                      t = J;
                    } while (null !== t);
                  }
                }
                V = f;
              }
            }
            if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
            else b: for (; null !== V; ) {
              f = V;
              if (0 !== (f.flags & 2048)) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f, f.return);
              }
              var x = f.sibling;
              if (null !== x) {
                x.return = f.return;
                V = x;
                break b;
              }
              V = f.return;
            }
          }
          var w = a.current;
          for (V = w; null !== V; ) {
            g = V;
            var u = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
            else b: for (g = w; null !== V; ) {
              h = V;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h);
                }
              } catch (na) {
                W(h, h.return, na);
              }
              if (h === g) {
                V = null;
                break b;
              }
              var F = h.sibling;
              if (null !== F) {
                F.return = h.return;
                V = F;
                break b;
              }
              V = h.return;
            }
          }
          K = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
          d = true;
        }
        return d;
      } finally {
        C = c, ok.transition = b;
      }
    }
    return false;
  }
  function Xk(a, b, c) {
    b = Ji(c, b);
    b = Ni(a, b, 1);
    a = nh(a, b, 1);
    b = R();
    null !== a && (Ac(a, 1, b), Dk(a, b));
  }
  function W(a, b, c) {
    if (3 === a.tag) Xk(a, a, c);
    else for (; null !== b; ) {
      if (3 === b.tag) {
        Xk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
          a = Ji(c, a);
          a = Qi(b, a, 1);
          b = nh(b, a, 1);
          a = R();
          null !== b && (Ac(b, 1, a), Dk(b, a));
          break;
        }
      }
      b = b.return;
    }
  }
  function Ti(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = R();
    a.pingedLanes |= a.suspendedLanes & c;
    Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
    Dk(a, b);
  }
  function Yk(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c = R();
    a = ih(a, b);
    null !== a && (Ac(a, b, c), Dk(a, c));
  }
  function uj(a) {
    var b = a.memoizedState, c = 0;
    null !== b && (c = b.retryLane);
    Yk(a, c);
  }
  function bk(a, b) {
    var c = 0;
    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;
      case 19:
        d = a.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    null !== d && d.delete(b);
    Yk(a, c);
  }
  var Vk;
  Vk = function(a, b, c) {
    if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
      dh = 0 !== (a.flags & 131072) ? true : false;
    }
    else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        ij(a, b);
        a = b.pendingProps;
        var e = Yf(b, H.current);
        ch(b, c);
        e = Nh(null, b, d, a, e, c);
        var f = Sh();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = true, cg(b)) : f = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f, c)) : (b.tag = 0, I && f && vg(b), Xi(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          ij(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = Zk(d);
          a = Ci(d, a);
          switch (e) {
            case 0:
              b = cj(null, b, d, a, c);
              break a;
            case 1:
              b = hj(null, b, d, a, c);
              break a;
            case 11:
              b = Yi(null, b, d, a, c);
              break a;
            case 14:
              b = $i(null, b, d, Ci(d.type, a), c);
              break a;
          }
          throw Error(p(
            306,
            d,
            ""
          ));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
      case 3:
        a: {
          kj(b);
          if (null === a) throw Error(p(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          lh(a, b);
          qh(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Ji(Error(p(423)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ji(Error(p(424)), b);
            b = lj(a, b, d, c, e);
            break a;
          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
          else {
            Ig();
            if (d === e) {
              b = Zi(a, b, c);
              break a;
            }
            Xi(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
      case 6:
        return null === a && Eg(b), null;
      case 13:
        return oj(a, b, c);
      case 4:
        return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
      case 7:
        return Xi(a, b, b.pendingProps, c), b.child;
      case 8:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return Xi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          G(Wg, d._currentValue);
          d._currentValue = g;
          if (null !== f) if (He(f.value, g)) {
            if (f.children === e.children && !Wf.current) {
              b = Zi(a, b, c);
              break a;
            }
          } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
            var h = f.dependencies;
            if (null !== h) {
              g = f.child;
              for (var k = h.firstContext; null !== k; ) {
                if (k.context === d) {
                  if (1 === f.tag) {
                    k = mh(-1, c & -c);
                    k.tag = 2;
                    var l = f.updateQueue;
                    if (null !== l) {
                      l = l.shared;
                      var m = l.pending;
                      null === m ? k.next = k : (k.next = m.next, m.next = k);
                      l.pending = k;
                    }
                  }
                  f.lanes |= c;
                  k = f.alternate;
                  null !== k && (k.lanes |= c);
                  bh(
                    f.return,
                    c,
                    b
                  );
                  h.lanes |= c;
                  break;
                }
                k = k.next;
              }
            } else if (10 === f.tag) g = f.type === b.type ? null : f.child;
            else if (18 === f.tag) {
              g = f.return;
              if (null === g) throw Error(p(341));
              g.lanes |= c;
              h = g.alternate;
              null !== h && (h.lanes |= c);
              bh(g, c, b);
              g = f.sibling;
            } else g = f.child;
            if (null !== g) g.return = f;
            else for (g = f; null !== g; ) {
              if (g === b) {
                g = null;
                break;
              }
              f = g.sibling;
              if (null !== f) {
                f.return = g.return;
                g = f;
                break;
              }
              g = g.return;
            }
            f = g;
          }
          Xi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
      case 15:
        return bj(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
      case 19:
        return xj(a, b, c);
      case 22:
        return dj(a, b, c);
    }
    throw Error(p(156, b.tag));
  };
  function Fk(a, b) {
    return ac(a, b);
  }
  function $k(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a, b, c, d) {
    return new $k(a, b, c, d);
  }
  function aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Zk(a) {
    if ("function" === typeof a) return aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Da) return 11;
      if (a === Ga) return 14;
    }
    return 2;
  }
  function Pg(a, b) {
    var c = a.alternate;
    null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Rg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) aj(a) && (g = 1);
    else if ("string" === typeof a) g = 5;
    else a: switch (a) {
      case ya:
        return Tg(c.children, e, f, b);
      case za:
        g = 8;
        e |= 8;
        break;
      case Aa:
        return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
      case Ea:
        return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
      case Fa:
        return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
      case Ia:
        return pj(c, e, f, b);
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case Ba:
            g = 10;
            break a;
          case Ca:
            g = 9;
            break a;
          case Da:
            g = 11;
            break a;
          case Ga:
            g = 14;
            break a;
          case Ha:
            g = 16;
            d = null;
            break a;
        }
        throw Error(p(130, null == a ? a : typeof a, ""));
    }
    b = Bg(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function Tg(a, b, c, d) {
    a = Bg(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function pj(a, b, c, d) {
    a = Bg(22, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    a.stateNode = { isHidden: false };
    return a;
  }
  function Qg(a, b, c) {
    a = Bg(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Sg(a, b, c) {
    b = Bg(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b;
  }
  function al(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a, b, c, d, e, f, g, h, k) {
    a = new al(a, b, c, h, k);
    1 === b ? (b = 1, true === f && (b |= 8)) : b = 0;
    f = Bg(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f);
    return a;
  }
  function cl(a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
  }
  function dl(a) {
    if (!a) return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
      var b = a;
      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;
          case 1:
            if (Zf(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b = b.return;
      } while (null !== b);
      throw Error(p(171));
    }
    if (1 === a.tag) {
      var c = a.type;
      if (Zf(c)) return bg(a, c, b);
    }
    return b;
  }
  function el(a, b, c, d, e, f, g, h, k) {
    a = bl(c, d, true, a, e, f, g, h, k);
    a.context = dl(null);
    c = a.current;
    d = R();
    e = yi(c);
    f = mh(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    nh(c, f, e);
    a.current.lanes = e;
    Ac(a, e, d);
    Dk(a, d);
    return a;
  }
  function fl(a, b, c, d) {
    var e = b.current, f = R(), g = yi(e);
    c = dl(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = mh(f, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = nh(e, b, g);
    null !== a && (gi(a, e, g, f), oh(a, e, g));
    return g;
  }
  function gl(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function hl(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function il(a, b) {
    hl(a, b);
    (a = a.alternate) && hl(a, b);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
  };
  function ll(a) {
    this._internalRoot = a;
  }
  ml.prototype.render = ll.prototype.render = function(a) {
    var b = this._internalRoot;
    if (null === b) throw Error(p(409));
    fl(a, b, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
      this._internalRoot = null;
      var b = a.containerInfo;
      Rk(function() {
        fl(null, a, null, null);
      });
      b[uf] = null;
    }
  };
  function ml(a) {
    this._internalRoot = a;
  }
  ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b = Hc();
      a = { blockedOn: null, target: a, priority: b };
      for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
      Qc.splice(c, 0, a);
      0 === c && Vc(a);
    }
  };
  function nl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
  }
  function ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }
  function pl() {
  }
  function ql(a, b, c, d, e) {
    if (e) {
      if ("function" === typeof d) {
        var f = d;
        d = function() {
          var a2 = gl(g);
          f.call(a2);
        };
      }
      var g = el(b, d, a, 0, null, false, false, "", pl);
      a._reactRootContainer = g;
      a[uf] = g.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk();
      return g;
    }
    for (; e = a.lastChild; ) a.removeChild(e);
    if ("function" === typeof d) {
      var h = d;
      d = function() {
        var a2 = gl(k);
        h.call(a2);
      };
    }
    var k = bl(a, 0, false, null, null, false, false, "", pl);
    a._reactRootContainer = k;
    a[uf] = k.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk(function() {
      fl(b, k, c, d);
    });
    return k;
  }
  function rl(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f;
      if ("function" === typeof e) {
        var h = e;
        e = function() {
          var a2 = gl(g);
          h.call(a2);
        };
      }
      fl(b, g, a, e);
    } else g = ql(c, b, a, e, d);
    return gl(g);
  }
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = tc(b.pendingLanes);
          0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b2 = ih(a, 1);
          if (null !== b2) {
            var c2 = R();
            gi(b2, a, 1, c2);
          }
        }), il(a, 1);
    }
  };
  Fc = function(a) {
    if (13 === a.tag) {
      var b = ih(a, 134217728);
      if (null !== b) {
        var c = R();
        gi(b, a, 134217728, c);
      }
      il(a, 134217728);
    }
  };
  Gc = function(a) {
    if (13 === a.tag) {
      var b = yi(a), c = ih(a, b);
      if (null !== c) {
        var d = R();
        gi(c, a, b, d);
      }
      il(a, b);
    }
  };
  Hc = function() {
    return C;
  };
  Ic = function(a, b) {
    var c = C;
    try {
      return C = a, b();
    } finally {
      C = c;
    }
  };
  yb = function(a, b, c) {
    switch (b) {
      case "input":
        bb(a, c);
        b = c.name;
        if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode; ) c = c.parentNode;
          c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e) throw Error(p(90));
              Wa(d);
              bb(d, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c);
        break;
      case "select":
        b = c.value, null != b && fb(a, !!c.multiple, b, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a, b) {
    var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b)) throw Error(p(200));
    return cl(a, b, null, c);
  };
  reactDom_production_min.createRoot = function(a, b) {
    if (!nl(a)) throw Error(p(299));
    var c = false, d = "", e = kl;
    null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
    b = bl(a, 1, false, null, null, c, false, d, e);
    a[uf] = b.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ll(b);
  };
  reactDom_production_min.findDOMNode = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(p(188));
      a = Object.keys(a).join(",");
      throw Error(p(268, a));
    }
    a = Zb(b);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function(a) {
    return Rk(a);
  };
  reactDom_production_min.hydrate = function(a, b, c) {
    if (!ol(b)) throw Error(p(200));
    return rl(null, a, b, true, c);
  };
  reactDom_production_min.hydrateRoot = function(a, b, c) {
    if (!nl(a)) throw Error(p(405));
    var d = null != c && c.hydratedSources || null, e = false, f = "", g = kl;
    null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
    b = el(b, null, a, 1, null != c ? c : null, e, false, f, g);
    a[uf] = b.current;
    sf(a);
    if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
      c,
      e
    );
    return new ml(b);
  };
  reactDom_production_min.render = function(a, b, c) {
    if (!ol(b)) throw Error(p(200));
    return rl(null, a, b, false, c);
  };
  reactDom_production_min.unmountComponentAtNode = function(a) {
    if (!ol(a)) throw Error(p(40));
    return a._reactRootContainer ? (Rk(function() {
      rl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
    if (!ol(c)) throw Error(p(200));
    if (null == a || void 0 === a._reactInternals) throw Error(p(38));
    return rl(a, b, c, false, d);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = requireReactDom();
  {
    client.createRoot = m.createRoot;
    client.hydrateRoot = m.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(clientExports);
const TranslationContext = reactExports.createContext();
const translations = {
  english: {
    // Navigation
    dashboard: "Dashboard",
    jobMatches: "Job Matches",
    applications: "Applications",
    toolkit: "Toolkit",
    jobController: "Job Controller",
    profile: "Profile",
    // Dashboard
    hello: "Hello",
    ready: "Ready to accelerate your career? Here's your personalized job search dashboard.",
    today: "Today",
    yourActivity: "Your Activity",
    jobsSearched: "Jobs Searched",
    applicationsSent: "Applications Sent",
    interviews: "Interviews",
    thisWeek: "this week",
    newMatches: "new matches",
    upcoming: "upcoming",
    // Recent Activities
    recentActivities: "Recent Activities",
    viewAll: "View All",
    applied: "Applied",
    matched: "Matched",
    interview: "Interview",
    searched: "Searched",
    track: "Track",
    applyNow: "Apply Now",
    prepare: "Prepare",
    viewResults: "View Results",
    // Quick Actions
    quickActions: "Quick Actions",
    updateProfile: "Update Profile",
    updateProfileDesc: "Keep your profile fresh and attract better opportunities",
    careerTools: "Career Tools",
    careerToolsDesc: "Resume builder, interview prep, and skill assessments",
    jobSearch: "Job Search",
    jobSearchDesc: "Find new opportunities and track your applications",
    // Job Applications
    myJobApplications: "My Job Applications",
    trackApplications: "Track all your job applications and their current status",
    totalApplications: "Total Applications",
    underReview: "Under Review",
    offers: "Offers",
    filterByStatus: "Filter by Status:",
    sortBy: "Sort by:",
    applicationDate: "Application Date",
    companyName: "Company Name",
    position: "Position",
    status: "Status",
    allApplications: "All Applications",
    interviewScheduled: "Interview Scheduled",
    offerReceived: "Offer Received",
    rejected: "Rejected",
    withdrawn: "Withdrawn",
    // Job Matches
    personalizedJobMatches: "Personalized Job Matches",
    jobMatchesDesc: "Discover opportunities tailored to your skills and preferences",
    // Common
    apply: "Apply",
    save: "Save",
    viewDetails: "View Details",
    followUp: "Follow Up",
    withdraw: "Withdraw",
    acceptOffer: "Accept Offer",
    close: "Close",
    edit: "Edit",
    cancel: "Cancel",
    submit: "Submit"
  },
  hindi: {
    // Navigation
    dashboard: "डैशबोर्ड",
    jobMatches: "जॉब मैच",
    applications: "आवेदन",
    toolkit: "टूलकिट",
    jobController: "जॉब कंट्रोलर",
    profile: "प्रोफाइल",
    // Dashboard
    hello: "नमस्ते",
    ready: "अपने करियर को तेज़ी से बढ़ाने के लिए तैयार हैं? यहाँ आपका व्यक्तिगत जॉब सर्च डैशबोर्ड है।",
    today: "आज",
    yourActivity: "आपकी गतिविधि",
    jobsSearched: "जॉब्स खोजे गए",
    applicationsSent: "आवेदन भेजे गए",
    interviews: "इंटरव्यू",
    thisWeek: "इस सप्ताह",
    newMatches: "नए मैच",
    upcoming: "आगामी",
    // Recent Activities
    recentActivities: "हाल की गतिविधियाँ",
    viewAll: "सभी देखें",
    applied: "आवेदन किया",
    matched: "मैच किया",
    interview: "इंटरव्यू",
    searched: "खोजा",
    track: "ट्रैक करें",
    applyNow: "अभी आवेदन करें",
    prepare: "तैयारी करें",
    viewResults: "परिणाम देखें",
    // Quick Actions
    quickActions: "त्वरित कार्य",
    updateProfile: "प्रोफाइल अपडेट करें",
    updateProfileDesc: "अपनी प्रोफाइल को ताज़ा रखें और बेहतर अवसर आकर्षित करें",
    careerTools: "करियर टूल्स",
    careerToolsDesc: "रिज्यूमे बिल्डर, इंटरव्यू की तैयारी, और स्किल असेसमेंट",
    jobSearch: "जॉब सर्च",
    jobSearchDesc: "नए अवसर खोजें और अपने आवेदनों को ट्रैक करें",
    // Job Applications
    myJobApplications: "मेरे जॉब आवेदन",
    trackApplications: "अपने सभी जॉब आवेदनों और उनकी वर्तमान स्थिति को ट्रैक करें",
    totalApplications: "कुल आवेदन",
    underReview: "समीक्षाधीन",
    offers: "ऑफर",
    filterByStatus: "स्थिति के अनुसार फ़िल्टर करें:",
    sortBy: "इसके अनुसार क्रमबद्ध करें:",
    applicationDate: "आवेदन तिथि",
    companyName: "कंपनी का नाम",
    position: "पद",
    status: "स्थिति",
    allApplications: "सभी आवेदन",
    interviewScheduled: "इंटरव्यू निर्धारित",
    offerReceived: "ऑफर प्राप्त",
    rejected: "अस्वीकृत",
    withdrawn: "वापस लिया गया",
    // Job Matches
    personalizedJobMatches: "व्यक्तिगत जॉब मैच",
    jobMatchesDesc: "आपके कौशल और प्राथमिकताओं के अनुरूप अवसर खोजें",
    // Common
    apply: "आवेदन करें",
    save: "सेव करें",
    viewDetails: "विवरण देखें",
    followUp: "फॉलो अप",
    withdraw: "वापस लें",
    acceptOffer: "ऑफर स्वीकार करें",
    close: "बंद करें",
    edit: "संपादित करें",
    cancel: "रद्द करें",
    submit: "जमा करें"
  },
  gujarati: {
    // Navigation
    dashboard: "ડેશબોર્ડ",
    jobMatches: "જોબ મેચ",
    applications: "અરજીઓ",
    toolkit: "ટૂલકિટ",
    jobController: "જોબ કંટ્રોલર",
    profile: "પ્રોફાઇલ",
    // Dashboard
    hello: "નમસ્તે",
    ready: "તમારી કારકિર્દીને ઝડપથી આગળ વધારવા માટે તૈયાર છો? અહીં તમારું વ્યક્તિગત જોબ સર્ચ ડેશબોર્ડ છે।",
    today: "આજે",
    yourActivity: "તમારી પ્રવૃત્તિ",
    jobsSearched: "જોબ્સ શોધ્યા",
    applicationsSent: "અરજીઓ મોકલેલ",
    interviews: "ઇન્ટરવ્યુ",
    thisWeek: "આ અઠવાડિયે",
    newMatches: "નવા મેચ",
    upcoming: "આગામી",
    // Recent Activities
    recentActivities: "તાજેતરની પ્રવૃત્તિઓ",
    viewAll: "બધું જુઓ",
    applied: "અરજી કરી",
    matched: "મેચ થયો",
    interview: "ઇન્ટરવ્યુ",
    searched: "શોધ્યું",
    track: "ટ્રેક કરો",
    applyNow: "હવે અરજી કરો",
    prepare: "તૈયારી કરો",
    viewResults: "પરિણામો જુઓ",
    // Quick Actions
    quickActions: "ઝડપી ક્રિયાઓ",
    updateProfile: "પ્રોફાઇલ અપડેટ કરો",
    updateProfileDesc: "તમારી પ્રોફાઇલને તાજી રાખો અને વધુ સારી તકો આકર્ષિત કરો",
    careerTools: "કારકિર્દી ટૂલ્સ",
    careerToolsDesc: "રિઝ્યુમે બિલ્ડર, ઇન્ટરવ્યુ તૈયારી, અને કુશળતા મૂલ્યાંકન",
    jobSearch: "જોબ સર્ચ",
    jobSearchDesc: "નવી તકો શોધો અને તમારી અરજીઓને ટ્રેક કરો",
    // Job Applications
    myJobApplications: "મારી જોબ અરજીઓ",
    trackApplications: "તમારી બધી જોબ અરજીઓ અને તેમની વર્તમાન સ્થિતિને ટ્રેક કરો",
    totalApplications: "કુલ અરજીઓ",
    underReview: "સમીક્ષા હેઠળ",
    offers: "ઓફર",
    filterByStatus: "સ્થિતિ અનુસાર ફિલ્ટર કરો:",
    sortBy: "આના અનુસાર ક્રમ કરો:",
    applicationDate: "અરજી તારીખ",
    companyName: "કંપનીનું નામ",
    position: "પદ",
    status: "સ્થિતિ",
    allApplications: "બધી અરજીઓ",
    interviewScheduled: "ઇન્ટરવ્યુ નિર્ધારિત",
    offerReceived: "ઓફર મળ્યો",
    rejected: "નકારાયું",
    withdrawn: "પાછી ખેંચી",
    // Job Matches
    personalizedJobMatches: "વ્યક્તિગત જોબ મેચ",
    jobMatchesDesc: "તમારી કુશળતા અને પસંદગીઓ અનુસાર તકો શોધો",
    // Common
    apply: "અરજી કરો",
    save: "સેવ કરો",
    viewDetails: "વિગતો જુઓ",
    followUp: "ફોલો અપ",
    withdraw: "પાછી ખેંચો",
    acceptOffer: "ઓફર સ્વીકારો",
    close: "બંધ કરો",
    edit: "સંપાદિત કરો",
    cancel: "રદ કરો",
    submit: "સબમિટ કરો"
  }
};
function TranslationProvider({ children }) {
  const [language, setLanguage] = reactExports.useState("english");
  reactExports.useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "english";
    setLanguage(savedLanguage);
    const handleLanguageChange = (event) => {
      setLanguage(event.detail);
    };
    window.addEventListener("languageChange", handleLanguageChange);
    return () => window.removeEventListener("languageChange", handleLanguageChange);
  }, []);
  const t = (key) => {
    return translations[language]?.[key] || translations.english[key] || key;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TranslationContext.Provider, { value: { t, language, setLanguage }, children });
}
function useTranslation() {
  const context = reactExports.useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
const API_BASE_URL = "/api/v1";
class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem("accessToken");
  }
  // Set authentication token
  setToken(token) {
    this.token = token;
    localStorage.setItem("accessToken", token);
  }
  // Remove authentication token
  removeToken() {
    this.token = null;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
  // Get authentication headers
  getAuthHeaders() {
    const headers = {
      "Content-Type": "application/json"
    };
    if (this.token) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }
    return headers;
  }
  // Generic request method with error handling
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.getAuthHeaders(),
      ...options
    };
    try {
      const response = await fetch(url, config);
      if (response.status === 401) {
        const refreshed = await this.refreshToken();
        if (refreshed) {
          config.headers = this.getAuthHeaders();
          const retryResponse = await fetch(url, config);
          return await this.handleResponse(retryResponse);
        } else {
          this.removeToken();
          window.location.href = "/auth";
          throw new Error("Authentication failed");
        }
      }
      return await this.handleResponse(response);
    } catch (error) {
      console.error("API Request failed:", error);
      throw error;
    }
  }
  // Handle API response
  async handleResponse(response) {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || errorData.message || `HTTP ${response.status}`);
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }
    return await response.text();
  }
  // Refresh authentication token
  async refreshToken() {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) return false;
    try {
      const response = await fetch(`${this.baseURL}/auth/token/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken })
      });
      if (response.ok) {
        const data = await response.json();
        this.setToken(data.access);
        return true;
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
    }
    return false;
  }
  // Authentication Methods
  async register(userData) {
    return await this.request("/auth/register/", {
      method: "POST",
      body: JSON.stringify(userData)
    });
  }
  async login(credentials) {
    const response = await this.request("/auth/login/", {
      method: "POST",
      body: JSON.stringify(credentials)
    });
    if (response.tokens?.access) {
      this.setToken(response.tokens.access);
      localStorage.setItem("refreshToken", response.tokens.refresh);
    }
    return response;
  }
  async logout() {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        await this.request("/auth/logout/", {
          method: "POST",
          body: JSON.stringify({ refresh: refreshToken })
        });
      }
    } catch (error) {
      console.error("Logout request failed:", error);
    } finally {
      this.removeToken();
    }
  }
  async getCurrentUser() {
    return await this.request("/auth/profile/");
  }
  async updateCurrentUser(userData) {
    return await this.request("/auth/profile/", {
      method: "PUT",
      body: JSON.stringify(userData)
    });
  }
  // User Profile Methods
  async getProfile() {
    return await this.request("/profiles/user-profile/");
  }
  async updateProfile(profileData) {
    return await this.request("/profiles/profile/", {
      method: "PATCH",
      body: JSON.stringify(profileData)
    });
  }
  async uploadResume(file) {
    const formData = new FormData();
    formData.append("resume", file);
    return await this.request("/profiles/profile/upload_resume/", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${this.token}`
      },
      body: formData
    });
  }
  // Skills Methods
  async getSkills() {
    return await this.request("/profiles/skills/");
  }
  async addSkill(skillData) {
    return await this.request("/profiles/skills/", {
      method: "POST",
      body: JSON.stringify(skillData)
    });
  }
  async updateSkill(skillId, skillData) {
    return await this.request(`/profiles/skills/${skillId}/`, {
      method: "PATCH",
      body: JSON.stringify(skillData)
    });
  }
  async deleteSkill(skillId) {
    return await this.request(`/profiles/skills/${skillId}/`, {
      method: "DELETE"
    });
  }
  // Work Experience Methods
  async getWorkExperience() {
    return await this.request("/profiles/work-experience/");
  }
  async addWorkExperience(experienceData) {
    return await this.request("/profiles/work-experience/", {
      method: "POST",
      body: JSON.stringify(experienceData)
    });
  }
  async updateWorkExperience(experienceId, experienceData) {
    return await this.request(`/profiles/work-experience/${experienceId}/`, {
      method: "PUT",
      body: JSON.stringify(experienceData)
    });
  }
  async deleteWorkExperience(experienceId) {
    return await this.request(`/profiles/work-experience/${experienceId}/`, {
      method: "DELETE"
    });
  }
  // Education Methods
  async getEducation() {
    return await this.request("/profiles/education/");
  }
  async addEducation(educationData) {
    return await this.request("/profiles/education/", {
      method: "POST",
      body: JSON.stringify(educationData)
    });
  }
  async updateEducation(educationId, educationData) {
    return await this.request(`/profiles/education/${educationId}/`, {
      method: "PUT",
      body: JSON.stringify(educationData)
    });
  }
  async deleteEducation(educationId) {
    return await this.request(`/profiles/education/${educationId}/`, {
      method: "DELETE"
    });
  }
  // Achievements Methods
  async getAchievements() {
    return await this.request("/profiles/achievements/");
  }
  async addAchievement(achievementData) {
    return await this.request("/profiles/achievements/", {
      method: "POST",
      body: JSON.stringify(achievementData)
    });
  }
  async updateAchievement(achievementId, achievementData) {
    return await this.request(`/profiles/achievements/${achievementId}/`, {
      method: "PUT",
      body: JSON.stringify(achievementData)
    });
  }
  async deleteAchievement(achievementId) {
    return await this.request(`/profiles/achievements/${achievementId}/`, {
      method: "DELETE"
    });
  }
  // Portfolio Methods
  async getPortfolioItems() {
    return await this.request("/profiles/portfolio/");
  }
  async addPortfolioItem(itemData) {
    return await this.request("/profiles/portfolio/", {
      method: "POST",
      body: JSON.stringify(itemData)
    });
  }
  async updatePortfolioItem(itemId, itemData) {
    return await this.request(`/profiles/portfolio/${itemId}/`, {
      method: "PATCH",
      body: JSON.stringify(itemData)
    });
  }
  async deletePortfolioItem(itemId) {
    return await this.request(`/profiles/portfolio/${itemId}/`, {
      method: "DELETE"
    });
  }
  // Job Methods
  async getJobs(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/jobs/jobs/${queryString ? `?${queryString}` : ""}`);
  }
  async getJob(jobId) {
    return await this.request(`/jobs/jobs/${jobId}/`);
  }
  async searchJobs(searchParams) {
    return await this.request("/jobs/jobs/search/", {
      method: "POST",
      body: JSON.stringify(searchParams)
    });
  }
  async getJobMatches() {
    return await this.request("/jobs/jobs/matches/");
  }
  async saveJob(jobId) {
    return await this.request(`/jobs/jobs/${jobId}/save/`, {
      method: "POST"
    });
  }
  async unsaveJob(jobId) {
    return await this.request(`/jobs/jobs/${jobId}/unsave/`, {
      method: "POST"
    });
  }
  // Job Application Methods
  async getApplications() {
    return await this.request("/applications/applications/");
  }
  async createApplication(applicationData) {
    return await this.request("/applications/applications/", {
      method: "POST",
      body: JSON.stringify(applicationData)
    });
  }
  async updateApplication(applicationId, applicationData) {
    return await this.request(`/applications/applications/${applicationId}/`, {
      method: "PATCH",
      body: JSON.stringify(applicationData)
    });
  }
  async deleteApplication(applicationId) {
    return await this.request(`/applications/applications/${applicationId}/`, {
      method: "DELETE"
    });
  }
  async getApplicationStats() {
    return await this.request("/applications/applications/stats/");
  }
  // Analytics Methods
  async getAnalyticsDashboard() {
    try {
      const [
        careereInsights,
        recommendations,
        successMetrics
      ] = await Promise.allSettled([
        this.request("/analytics/career-insights/"),
        this.request("/analytics/recommendations/"),
        this.request("/analytics/success-metrics/")
      ]);
      return {
        career_insights: careereInsights.status === "fulfilled" ? careereInsights.value : [],
        recommendations: recommendations.status === "fulfilled" ? recommendations.value : [],
        success_metrics: successMetrics.status === "fulfilled" ? successMetrics.value : [],
        // Add some computed values
        jobs_searched_count: 0,
        // Will be populated from applications
        applications_this_week: 0,
        job_matches_count: 0,
        new_matches_this_week: 0
      };
    } catch (error) {
      console.error("Error loading analytics dashboard:", error);
      return {
        career_insights: [],
        recommendations: [],
        success_metrics: [],
        jobs_searched_count: 0,
        applications_this_week: 0,
        job_matches_count: 0,
        new_matches_this_week: 0
      };
    }
  }
  async getMarketAnalytics(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/analytics/market-analytics/${queryString ? `?${queryString}` : ""}`);
  }
  async getCareerInsights() {
    return await this.request("/analytics/career-insights/");
  }
  async getRecommendations() {
    return await this.request("/analytics/recommendations/");
  }
  async getSuccessMetrics() {
    return await this.request("/analytics/success-metrics/");
  }
  async getCareerProgress() {
    return await this.request("/analytics/career-progress/");
  }
  // Job Search Methods
  async searchJobs(searchParams) {
    return await this.request("/external/search/", {
      method: "POST",
      body: JSON.stringify(searchParams)
    });
  }
  async getJobs(params = {}) {
    const queryString = new URLSearchParams(params).toString();
    return await this.request(`/jobs/${queryString ? `?${queryString}` : ""}`);
  }
  async getJobRecommendations() {
    return await this.request("/jobs/recommendations/");
  }
  async calculateJobMatches() {
    return await this.request("/jobs/calculate-matches/", {
      method: "POST"
    });
  }
  async getJobMatchDetails(jobId) {
    return await this.request(`/jobs/${jobId}/match-details/`);
  }
  async getSearchHistory() {
    return await this.request("/external/search/history/");
  }
  // External API Methods
  async syncExternalJobs() {
    return await this.request("/external-apis/sync-jobs/", {
      method: "POST"
    });
  }
  async getExternalJobsStatus() {
    return await this.request("/external-apis/sync-status/");
  }
}
const apiService = new ApiService();
const {
  register,
  login,
  logout,
  getCurrentUser,
  updateCurrentUser,
  getProfile,
  updateProfile,
  uploadResume,
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
  getWorkExperience,
  addWorkExperience,
  updateWorkExperience,
  deleteWorkExperience,
  getEducation,
  addEducation,
  updateEducation,
  deleteEducation,
  getAchievements,
  addAchievement,
  updateAchievement,
  deleteAchievement,
  getPortfolioItems,
  addPortfolioItem,
  updatePortfolioItem,
  deletePortfolioItem,
  getJobs,
  getJob,
  searchJobs,
  getJobMatches,
  saveJob,
  unsaveJob,
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
  getApplicationStats,
  getAnalyticsDashboard,
  getMarketAnalytics,
  getCareerInsights,
  getRecommendations,
  getSuccessMetrics,
  getCareerProgress,
  syncExternalJobs,
  getExternalJobsStatus
} = apiService;
const AuthContext = reactExports.createContext();
const useAuth = () => {
  const context = reactExports.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
const AuthProvider = ({ children }) => {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [isAuthenticated, setIsAuthenticated] = reactExports.useState(false);
  reactExports.useEffect(() => {
    checkAuthStatus();
  }, []);
  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const userData = await apiService.getCurrentUser();
        setUser(userData);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      apiService.removeToken();
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  const login2 = async (credentials) => {
    try {
      setLoading(true);
      const response = await apiService.login(credentials);
      if (response.user) {
        setUser(response.user);
        setIsAuthenticated(true);
        return { success: true, user: response.user };
      }
      const userData = await apiService.getCurrentUser();
      setUser(userData);
      setIsAuthenticated(true);
      return { success: true, user: userData };
    } catch (error) {
      console.error("Login failed:", error);
      return {
        success: false,
        error: error.message || "Login failed. Please check your credentials."
      };
    } finally {
      setLoading(false);
    }
  };
  const register2 = async (userData) => {
    try {
      setLoading(true);
      const response = await apiService.register(userData);
      if (response.user) {
        const loginResult = await login2({
          email: userData.email,
          password: userData.password
        });
        return loginResult;
      }
      return { success: true, user: response.user };
    } catch (error) {
      console.error("Registration failed:", error);
      return {
        success: false,
        error: error.message || "Registration failed. Please try again."
      };
    } finally {
      setLoading(false);
    }
  };
  const logout2 = async () => {
    try {
      await apiService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      setIsAuthenticated(false);
    }
  };
  const updateUser = (userData) => {
    setUser((prevUser) => ({ ...prevUser, ...userData }));
  };
  const value = {
    user,
    isAuthenticated,
    loading,
    login: login2,
    register: register2,
    logout: logout2,
    updateUser,
    checkAuthStatus
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value, children });
};
const DataContext = reactExports.createContext();
const useData = () => {
  const context = reactExports.useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
const DataProvider = ({ children }) => {
  const { isAuthenticated, user } = useAuth();
  const [profile, setProfile] = reactExports.useState(null);
  const [jobs, setJobs] = reactExports.useState([]);
  const [jobMatches, setJobMatches] = reactExports.useState([]);
  const [applications, setApplications] = reactExports.useState([]);
  const [analytics, setAnalytics] = reactExports.useState(null);
  const [skills, setSkills] = reactExports.useState([]);
  const [portfolioItems, setPortfolioItems] = reactExports.useState([]);
  const [profileLoading, setProfileLoading] = reactExports.useState(false);
  const [jobsLoading, setJobsLoading] = reactExports.useState(false);
  const [applicationsLoading, setApplicationsLoading] = reactExports.useState(false);
  const [analyticsLoading, setAnalyticsLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isAuthenticated && user) {
      loadInitialData();
    } else {
      clearAllData();
    }
  }, [isAuthenticated, user]);
  const clearAllData = () => {
    setProfile(null);
    setJobs([]);
    setJobMatches([]);
    setApplications([]);
    setAnalytics(null);
    setSkills([]);
    setPortfolioItems([]);
  };
  const loadInitialData = async () => {
    try {
      await Promise.allSettled([
        loadProfile(),
        loadRecentJobs(),
        loadApplications(),
        loadAnalytics()
      ]);
    } catch (error) {
      console.error("Error loading initial data:", error);
    }
  };
  const loadProfile = async () => {
    try {
      setProfileLoading(true);
      const profileData = await apiService.getProfile();
      setProfile(profileData);
      const [skillsData, portfolioData] = await Promise.allSettled([
        apiService.getSkills(),
        apiService.getPortfolioItems()
      ]);
      if (skillsData.status === "fulfilled") {
        setSkills(skillsData.value.results || skillsData.value);
      }
      if (portfolioData.status === "fulfilled") {
        setPortfolioItems(portfolioData.value.results || portfolioData.value);
      }
    } catch (error) {
      console.error("Error loading profile:", error);
    } finally {
      setProfileLoading(false);
    }
  };
  const updateProfile2 = async (profileData) => {
    try {
      const updatedProfile = await apiService.updateProfile(profileData);
      setProfile(updatedProfile);
      return { success: true, data: updatedProfile };
    } catch (error) {
      console.error("Error updating profile:", error);
      return { success: false, error: error.message };
    }
  };
  const addSkill2 = async (skillData) => {
    try {
      const newSkill = await apiService.addSkill(skillData);
      setSkills((prev) => [...prev, newSkill]);
      return { success: true, data: newSkill };
    } catch (error) {
      console.error("Error adding skill:", error);
      return { success: false, error: error.message };
    }
  };
  const updateSkill2 = async (skillId, skillData) => {
    try {
      const updatedSkill = await apiService.updateSkill(skillId, skillData);
      setSkills((prev) => prev.map(
        (skill) => skill.id === skillId ? updatedSkill : skill
      ));
      return { success: true, data: updatedSkill };
    } catch (error) {
      console.error("Error updating skill:", error);
      return { success: false, error: error.message };
    }
  };
  const deleteSkill2 = async (skillId) => {
    try {
      await apiService.deleteSkill(skillId);
      setSkills((prev) => prev.filter((skill) => skill.id !== skillId));
      return { success: true };
    } catch (error) {
      console.error("Error deleting skill:", error);
      return { success: false, error: error.message };
    }
  };
  const addPortfolioItem2 = async (itemData) => {
    try {
      const newItem = await apiService.addPortfolioItem(itemData);
      setPortfolioItems((prev) => [...prev, newItem]);
      return { success: true, data: newItem };
    } catch (error) {
      console.error("Error adding portfolio item:", error);
      return { success: false, error: error.message };
    }
  };
  const updatePortfolioItem2 = async (itemId, itemData) => {
    try {
      const updatedItem = await apiService.updatePortfolioItem(itemId, itemData);
      setPortfolioItems((prev) => prev.map(
        (item) => item.id === itemId ? updatedItem : item
      ));
      return { success: true, data: updatedItem };
    } catch (error) {
      console.error("Error updating portfolio item:", error);
      return { success: false, error: error.message };
    }
  };
  const deletePortfolioItem2 = async (itemId) => {
    try {
      await apiService.deletePortfolioItem(itemId);
      setPortfolioItems((prev) => prev.filter((item) => item.id !== itemId));
      return { success: true };
    } catch (error) {
      console.error("Error deleting portfolio item:", error);
      return { success: false, error: error.message };
    }
  };
  const loadRecentJobs = async (params = {}) => {
    try {
      setJobsLoading(true);
      const jobsData = await apiService.getJobs(params);
      setJobs(jobsData.results || jobsData);
      return { success: true, data: jobsData };
    } catch (error) {
      console.error("Error loading jobs:", error);
      return { success: false, error: error.message };
    } finally {
      setJobsLoading(false);
    }
  };
  const searchJobs2 = async (searchParams) => {
    try {
      setJobsLoading(true);
      const jobsData = await apiService.searchJobs(searchParams);
      setJobs(jobsData.results || jobsData);
      return { success: true, data: jobsData };
    } catch (error) {
      console.error("Error searching jobs:", error);
      return { success: false, error: error.message };
    } finally {
      setJobsLoading(false);
    }
  };
  const loadJobMatches = async () => {
    try {
      const matchesData = await apiService.getJobMatches();
      setJobMatches(matchesData.results || matchesData);
      return { success: true, data: matchesData };
    } catch (error) {
      console.error("Error loading job matches:", error);
      return { success: false, error: error.message };
    }
  };
  const saveJob2 = async (jobId) => {
    try {
      await apiService.saveJob(jobId);
      setJobs((prev) => prev.map(
        (job) => job.id === jobId ? { ...job, is_saved: true } : job
      ));
      return { success: true };
    } catch (error) {
      console.error("Error saving job:", error);
      return { success: false, error: error.message };
    }
  };
  const unsaveJob2 = async (jobId) => {
    try {
      await apiService.unsaveJob(jobId);
      setJobs((prev) => prev.map(
        (job) => job.id === jobId ? { ...job, is_saved: false } : job
      ));
      return { success: true };
    } catch (error) {
      console.error("Error unsaving job:", error);
      return { success: false, error: error.message };
    }
  };
  const loadApplications = async () => {
    try {
      setApplicationsLoading(true);
      const applicationsData = await apiService.getApplications();
      setApplications(applicationsData.results || applicationsData);
      return { success: true, data: applicationsData };
    } catch (error) {
      console.error("Error loading applications:", error);
      return { success: false, error: error.message };
    } finally {
      setApplicationsLoading(false);
    }
  };
  const createApplication2 = async (applicationData) => {
    try {
      const newApplication = await apiService.createApplication(applicationData);
      setApplications((prev) => [newApplication, ...prev]);
      return { success: true, data: newApplication };
    } catch (error) {
      console.error("Error creating application:", error);
      return { success: false, error: error.message };
    }
  };
  const updateApplication2 = async (applicationId, applicationData) => {
    try {
      const updatedApplication = await apiService.updateApplication(applicationId, applicationData);
      setApplications((prev) => prev.map(
        (app) => app.id === applicationId ? updatedApplication : app
      ));
      return { success: true, data: updatedApplication };
    } catch (error) {
      console.error("Error updating application:", error);
      return { success: false, error: error.message };
    }
  };
  const deleteApplication2 = async (applicationId) => {
    try {
      await apiService.deleteApplication(applicationId);
      setApplications((prev) => prev.filter((app) => app.id !== applicationId));
      return { success: true };
    } catch (error) {
      console.error("Error deleting application:", error);
      return { success: false, error: error.message };
    }
  };
  const loadAnalytics = async () => {
    try {
      setAnalyticsLoading(true);
      const analyticsData = await apiService.getAnalyticsDashboard();
      setAnalytics(analyticsData);
      return { success: true, data: analyticsData };
    } catch (error) {
      console.error("Error loading analytics:", error);
      return { success: false, error: error.message };
    } finally {
      setAnalyticsLoading(false);
    }
  };
  const getMarketAnalytics2 = async (params) => {
    try {
      return await apiService.getMarketAnalytics(params);
    } catch (error) {
      console.error("Error getting market analytics:", error);
      return { success: false, error: error.message };
    }
  };
  const getCareerInsights2 = async () => {
    try {
      return await apiService.getCareerInsights();
    } catch (error) {
      console.error("Error getting career insights:", error);
      return { success: false, error: error.message };
    }
  };
  const getRecommendations2 = async () => {
    try {
      return await apiService.getRecommendations();
    } catch (error) {
      console.error("Error getting recommendations:", error);
      return { success: false, error: error.message };
    }
  };
  const syncExternalJobs2 = async () => {
    try {
      const result = await apiService.syncExternalJobs();
      await loadRecentJobs();
      return { success: true, data: result };
    } catch (error) {
      console.error("Error syncing external jobs:", error);
      return { success: false, error: error.message };
    }
  };
  const value = {
    // Data
    profile,
    jobs,
    jobMatches,
    applications,
    analytics,
    skills,
    portfolioItems,
    // Loading states
    profileLoading,
    jobsLoading,
    applicationsLoading,
    analyticsLoading,
    // Profile methods
    loadProfile,
    updateProfile: updateProfile2,
    // Skills methods
    addSkill: addSkill2,
    updateSkill: updateSkill2,
    deleteSkill: deleteSkill2,
    // Portfolio methods
    addPortfolioItem: addPortfolioItem2,
    updatePortfolioItem: updatePortfolioItem2,
    deletePortfolioItem: deletePortfolioItem2,
    // Job methods
    loadRecentJobs,
    searchJobs: searchJobs2,
    loadJobMatches,
    saveJob: saveJob2,
    unsaveJob: unsaveJob2,
    // Application methods
    loadApplications,
    createApplication: createApplication2,
    updateApplication: updateApplication2,
    deleteApplication: deleteApplication2,
    // Analytics methods
    loadAnalytics,
    getMarketAnalytics: getMarketAnalytics2,
    getCareerInsights: getCareerInsights2,
    getRecommendations: getRecommendations2,
    // External API methods
    syncExternalJobs: syncExternalJobs2,
    // Utility methods
    loadInitialData,
    clearAllData
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DataContext.Provider, { value, children });
};
function Toolkit({ activeCategory = "all", setActiveCategory, onNavigateBack }) {
  const [localActiveCategory, setLocalActiveCategory] = reactExports.useState("all");
  const currentActiveCategory = activeCategory || localActiveCategory;
  const tools = [
    {
      id: "resume-builder",
      name: "Resume Builder",
      description: "Create ATS-friendly resumes with professional templates",
      icon: "📄",
      category: "Documents"
    }
  ];
  const handleToolClick = (toolId) => {
    console.log(`Navigating to ${toolId}`);
    if (toolId === "resume-builder") {
      const event = new CustomEvent("navigate", {
        detail: {
          page: "resume-templates"
        }
      });
      window.dispatchEvent(event);
    } else {
      if (toolId === "interview-prep") {
        const event = new CustomEvent("navigate", {
          detail: { page: "error-page", featureName: "Interview Preparation" }
        });
        window.dispatchEvent(event);
        return;
      }
      alert(`Navigating to ${toolId} page`);
    }
  };
  const filteredTools = currentActiveCategory === "all" ? tools : tools.filter((tool) => tool.category.toLowerCase() === currentActiveCategory.toLowerCase());
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "toolkit", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "toolkit-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "toolkit-cards-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tools-grid", children: filteredTools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: "tool-card",
      onClick: () => handleToolClick(tool.id),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tool-card-icon", children: tool.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tool-card-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: tool.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: tool.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tool-category", children: tool.category })
        ] })
      ]
    },
    tool.id
  )) }) }) }) });
}
const UniversalJobCard = ({
  job,
  onToggleLike,
  onApply,
  showMatchScore = true,
  showHeart = true,
  showSource = true,
  variant = "default"
  // 'default', 'application', 'saved'
}) => {
  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = /* @__PURE__ */ new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };
  const handleApplyClick = () => {
    if (onApply) {
      onApply(job);
    } else {
      window.open(job.applyUrl || "#", "_blank");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "universal-job-card", style: {
    background: "#ffffff",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    padding: "1.25rem",
    transition: "all 0.2s ease",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    position: "relative"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "job-header", style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "0.5rem"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
        margin: "0",
        fontSize: "1.1rem",
        fontWeight: "600",
        color: "#111827",
        lineHeight: "1.4"
      }, children: job.title || job.position }),
      (showHeart || showMatchScore) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        overflow: "hidden",
        marginLeft: "auto"
      }, children: [
        showHeart && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `heart-btn ${job.isLiked ? "liked" : ""}`,
            onClick: () => onToggleLike && onToggleLike(job.id),
            "aria-label": job.isLiked ? "Remove from wishlist" : "Add to wishlist",
            style: {
              background: "none",
              border: "none",
              fontSize: "1rem",
              cursor: "pointer",
              padding: "0.25rem 0.75rem",
              color: job.isLiked ? "#ef4444" : "#9ca3af",
              borderRight: showMatchScore ? "1px solid #d1d5db" : "none",
              display: "flex",
              alignItems: "center",
              height: "32px"
            },
            children: "♥"
          }
        ),
        showMatchScore && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "match-score-btn",
            style: {
              background: "none",
              border: "none",
              fontSize: "0.95rem",
              color: "#10b981",
              padding: "0.25rem 0.75rem",
              display: "flex",
              alignItems: "center",
              height: "32px",
              fontWeight: "500"
            },
            "aria-label": "Match score",
            children: job.matchScore ? `${job.matchScore}% Match` : "Match Score"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      margin: "0 0 0.75rem 0",
      fontSize: "0.95rem",
      fontWeight: "500",
      color: "#4b5563"
    }, children: job.company }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      marginBottom: "1rem",
      fontSize: "0.85rem",
      color: "#6b7280",
      display: "flex",
      flexDirection: "column",
      gap: "0.25rem"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: job.location }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: getRelativeTime(job.postedDate || job.appliedDate) })
    ] }),
    job.tags && job.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "job-tags", style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1rem"
    }, children: [
      job.tags.slice(0, 3).map((tag, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        background: "#f3f4f6",
        color: "#374151",
        padding: "0.25rem 0.5rem",
        borderRadius: "50px",
        fontSize: "0.75rem",
        fontWeight: "500"
      }, children: tag }, index)),
      job.tags.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
        background: "#f3f4f6",
        color: "#6b7280",
        padding: "0.25rem 0.5rem",
        borderRadius: "50px",
        fontSize: "0.75rem"
      }, children: [
        "+",
        job.tags.length - 3
      ] })
    ] }),
    variant === "application" && job.appliedDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "#f9fafb",
      padding: "0.75rem",
      borderRadius: "6px",
      marginBottom: "1rem",
      border: "1px solid #e5e7eb"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", color: "#6b7280" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "500" }, children: "Applied:" }),
        " ",
        new Date(job.appliedDate).toLocaleDateString(),
        " (",
        getRelativeTime(job.appliedDate),
        ")"
      ] }),
      job.salary && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: "0.85rem", color: "#6b7280", marginTop: "0.25rem" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "500" }, children: "Salary:" }),
        " ",
        job.salary
      ] })
    ] }),
    job.description && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      marginBottom: "1.25rem",
      flex: 1
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      margin: 0,
      fontSize: "0.875rem",
      lineHeight: "1.5",
      color: "#6b7280",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }, children: job.description }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "job-actions", style: {
      display: "flex",
      marginBottom: "0.75rem"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handleApplyClick,
        style: {
          background: variant === "application" ? "#10b981" : "rgba(17, 24, 39, 0.1)",
          color: variant === "application" ? "#ffffff" : "#111827",
          border: "1px solid #d1d5db",
          padding: "0.75rem 1rem",
          borderRadius: "6px",
          fontSize: "0.95rem",
          fontWeight: "500",
          cursor: "pointer",
          width: "100%",
          height: "44px"
        },
        children: variant === "application" ? "View Application" : "Apply"
      }
    ) }),
    showSource && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      borderTop: "1px solid #f3f4f6",
      paddingTop: "0.75rem",
      textAlign: "center"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
      fontSize: "0.75rem",
      color: "#9ca3af",
      fontWeight: "500"
    }, children: [
      "via ",
      job.source || job.applicationMethod || "Company Website"
    ] }) })
  ] });
};
function JobController({ activeTab = "search", setActiveTab, onNavigateBack }) {
  const [localActiveTab, setLocalActiveTab] = reactExports.useState("search");
  const currentActiveTab = activeTab || localActiveTab;
  const currentSetActiveTab = setActiveTab || setLocalActiveTab;
  const [openDropdown, setOpenDropdown] = reactExports.useState(null);
  const [searchResults, setSearchResults] = reactExports.useState([]);
  const [isSearching, setIsSearching] = reactExports.useState(false);
  const [searchError, setSearchError] = reactExports.useState(null);
  const [searchFilters, setSearchFilters] = reactExports.useState({
    keywords: "",
    location: "",
    job_type: "",
    experience_level: "",
    salary_min: "",
    salary_max: ""
  });
  const handleSearch = async () => {
    if (!searchFilters.keywords.trim()) {
      setSearchError("Please enter job keywords to search");
      return;
    }
    setIsSearching(true);
    setSearchError(null);
    try {
      const searchParams = {
        keywords: searchFilters.keywords,
        location: searchFilters.location,
        job_type: searchFilters.job_type || void 0,
        experience_level: searchFilters.experience_level || void 0,
        salary_min: searchFilters.salary_min || void 0,
        salary_max: searchFilters.salary_max || void 0,
        page: 1,
        limit: 20
      };
      Object.keys(searchParams).forEach(
        (key) => searchParams[key] === void 0 && delete searchParams[key]
      );
      const response = await apiService.searchJobs(searchParams);
      if (response.success) {
        setSearchResults(response.jobs || []);
      } else {
        setSearchError(response.error || "Failed to search jobs");
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Job search failed:", error);
      setSearchError("Failed to search jobs. Please try again.");
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };
  const updateSearchFilter = (field, value) => {
    setSearchFilters((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  reactExports.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".custom-dropdown")) {
        document.querySelectorAll('[id^="dropdown-"]').forEach((dropdown) => {
          dropdown.style.display = "none";
          const trigger = dropdown.previousElementSibling;
          if (trigger) {
            trigger.setAttribute("aria-expanded", "false");
          }
        });
      }
    };
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        document.querySelectorAll('[id^="dropdown-"]').forEach((dropdown) => {
          dropdown.style.display = "none";
          const trigger = dropdown.previousElementSibling;
          if (trigger) {
            trigger.setAttribute("aria-expanded", "false");
            trigger.focus();
          }
        });
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);
  const toggleDropdown = (dropdownId) => {
    document.querySelectorAll('[id^="dropdown-"]').forEach((dropdown2) => {
      if (dropdown2.id !== `dropdown-${dropdownId}`) {
        dropdown2.style.display = "none";
        const otherTrigger = dropdown2.previousElementSibling;
        if (otherTrigger) {
          otherTrigger.setAttribute("aria-expanded", "false");
        }
      }
    });
    const dropdown = document.getElementById(`dropdown-${dropdownId}`);
    const trigger = dropdown ? dropdown.previousElementSibling : null;
    if (dropdown && trigger) {
      const isCurrentlyOpen = dropdown.style.display === "block";
      if (isCurrentlyOpen) {
        dropdown.style.display = "none";
        trigger.setAttribute("aria-expanded", "false");
      } else {
        dropdown.style.display = "block";
        dropdown.style.opacity = "1";
        dropdown.style.visibility = "visible";
        dropdown.style.zIndex = "9999";
        dropdown.style.position = "absolute";
        dropdown.style.top = "100%";
        dropdown.style.left = "0";
        dropdown.style.right = "0";
        trigger.setAttribute("aria-expanded", "true");
        const containers = [
          dropdown.closest(".filter-options-container"),
          dropdown.closest(".search-controls"),
          dropdown.closest(".job-search-section"),
          dropdown.closest(".tab-content"),
          dropdown.closest(".job-controller")
        ];
        containers.forEach((container) => {
          if (container) {
            container.style.overflow = "visible";
            container.style.zIndex = "auto";
          }
        });
        const items = dropdown.querySelectorAll(".dropdown-item");
        items.forEach((item) => {
          item.style.display = "block";
          item.style.visibility = "visible";
        });
        setTimeout(() => {
          const firstItem = dropdown.querySelector(".dropdown-item");
          if (firstItem) {
            firstItem.focus();
          }
        }, 100);
      }
    }
  };
  const [savedJobs, setSavedJobs] = reactExports.useState([
    {
      id: 1,
      company: "DevCompany",
      position: "Senior Frontend Developer",
      location: "New York, NY",
      type: "Full-time",
      postedDate: "2025-09-03",
      match: "95%",
      description: "Looking for an experienced React developer to join our growing team. Work with modern technologies and build scalable web applications.",
      source: "LinkedIn",
      isLiked: true,
      tags: ["Full-time", "Remote", "Start Immediate", "3+ Years Experience", "React", "TypeScript"]
    },
    {
      id: 2,
      company: "WebSolutions",
      position: "React Native Developer",
      location: "Los Angeles, CA",
      type: "Contract",
      postedDate: "2025-09-04",
      match: "88%",
      description: "Build cross-platform mobile applications using React Native. Experience with iOS and Android development preferred.",
      source: "Indeed",
      isLiked: true,
      tags: ["Contract", "Part-time", "Remote", "Immediate Start", "Mobile", "React Native"]
    },
    {
      id: 3,
      company: "TechStartup",
      position: "JavaScript Developer",
      location: "Remote",
      type: "Full-time",
      postedDate: "2025-09-02",
      match: "92%",
      description: "Join our innovative startup building cutting-edge web applications. Strong JavaScript and Node.js skills required.",
      source: "Glassdoor",
      isLiked: true,
      tags: ["Full-time", "Remote", "Trainership", "Fresher Friendly", "Node.js", "Startup"]
    },
    {
      id: 4,
      company: "InnovateCorp",
      position: "Frontend Intern",
      location: "San Francisco, CA",
      type: "Internship",
      postedDate: "2025-09-04",
      match: "85%",
      description: "Perfect opportunity for students and fresh graduates to gain hands-on experience in frontend development.",
      source: "AngelList",
      isLiked: true,
      tags: ["Internship", "Fresher", "Part-time", "Learning Opportunity", "HTML/CSS", "JavaScript"]
    }
  ]);
  const handleToggleLike = (jobId) => {
    setSavedJobs(
      (prevJobs) => prevJobs.map(
        (job) => job.id === jobId ? { ...job, isLiked: !job.isLiked } : job
      ).filter((job) => job.isLiked)
    );
  };
  const renderSavedJobs = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "saved-jobs-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-header", style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem",
      flexWrap: "wrap",
      gap: "1rem"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "0.5rem", justifyContent: "center", textAlign: "center", fontSize: "1.65em", width: "100%" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { verticalAlign: "middle" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 20.5C12 20.5 4 13.5 4 8.5C4 5.5 6.5 4 8.5 4C10 4 12 5.5 12 7C12 5.5 14 4 15.5 4C17.5 4 20 5.5 20 8.5C20 13.5 12 20.5 12 20.5Z", stroke: "#FF7F50", strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }) }),
      "Liked Jobs"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "saved-jobs-grid", style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "1rem"
    }, children: savedJobs.filter((job) => job.isLiked).map((job) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      UniversalJobCard,
      {
        job,
        onToggleLike: handleToggleLike,
        showMatchScore: true,
        showHeart: true,
        showSource: true,
        variant: "saved"
      },
      job.id
    )) })
  ] });
  const renderJobSearch = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "job-search-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "svg",
        {
          width: "32",
          height: "32",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: { verticalAlign: "middle" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.35-4.35" })
          ]
        }
      ),
      "Search Work"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-controls", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-form", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-inputs-container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Job title, keywords, or company",
              className: "search-input",
              value: searchFilters.keywords,
              onChange: (e) => updateSearchFilter("keywords", e.target.value),
              onKeyPress: (e) => e.key === "Enter" && handleSearch()
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              placeholder: "Location",
              className: "location-input",
              value: searchFilters.location,
              onChange: (e) => updateSearchFilter("location", e.target.value),
              onKeyPress: (e) => e.key === "Enter" && handleSearch()
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-btns-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "search-btn compound-main",
              onClick: handleSearch,
              disabled: isSearching,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-icon-container", children: isSearching ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spinner", style: {
                width: "20px",
                height: "20px",
                border: "2px solid #f3f3f3",
                borderTop: "2px solid #3498db",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              } }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.35-4.35" })
                  ]
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "liked-btn compound-side", onClick: () => currentSetActiveTab("saved"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "btn-icon-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "heart-icon", children: "❤" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-options-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-dropdown", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "dropdown-selected",
              onClick: () => toggleDropdown("job-type"),
              onKeyDown: (e) => e.key === "Enter" && toggleDropdown("job-type"),
              tabIndex: "0",
              role: "button",
              "aria-expanded": "false",
              "aria-haspopup": "listbox",
              "aria-label": "Select job type",
              children: [
                "Job Type",
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-arrow" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              id: "dropdown-job-type",
              className: "dropdown-menu",
              role: "listbox",
              "aria-label": "Job type options",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "dropdown-item",
                    role: "option",
                    tabIndex: "0",
                    onClick: () => {
                      const selectedText = "Full-time";
                      updateSearchFilter("job_type", "full-time");
                      document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent = selectedText;
                      document.querySelector("#dropdown-job-type").style.display = "none";
                      document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded", "false");
                    },
                    onKeyDown: (e) => {
                      if (e.key === "Enter") {
                        const selectedText = "Full-time";
                        updateSearchFilter("job_type", "full-time");
                        document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent = selectedText;
                        document.querySelector("#dropdown-job-type").style.display = "none";
                        document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded", "false");
                      }
                    },
                    children: "Full-time"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "dropdown-item",
                    role: "option",
                    tabIndex: "0",
                    onClick: () => {
                      const selectedText = "Part-time";
                      updateSearchFilter("job_type", "part-time");
                      document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent = selectedText;
                      document.querySelector("#dropdown-job-type").style.display = "none";
                      document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded", "false");
                    },
                    onKeyDown: (e) => {
                      if (e.key === "Enter") {
                        const selectedText = "Part-time";
                        updateSearchFilter("job_type", "part-time");
                        document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent = selectedText;
                        document.querySelector("#dropdown-job-type").style.display = "none";
                        document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded", "false");
                      }
                    },
                    children: "Part-time"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "dropdown-item",
                    role: "option",
                    tabIndex: "0",
                    onClick: () => {
                      const selectedText = "Contract";
                      updateSearchFilter("job_type", "contract");
                      document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent = selectedText;
                      document.querySelector("#dropdown-job-type").style.display = "none";
                      document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded", "false");
                    },
                    onKeyDown: (e) => {
                      if (e.key === "Enter") {
                        const selectedText = "Contract";
                        updateSearchFilter("job_type", "contract");
                        document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent = selectedText;
                        document.querySelector("#dropdown-job-type").style.display = "none";
                        document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded", "false");
                      }
                    },
                    children: "Contract"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "dropdown-item",
                    role: "option",
                    tabIndex: "0",
                    onClick: () => {
                      const selectedText = "Remote";
                      updateSearchFilter("job_type", "remote");
                      document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent = selectedText;
                      document.querySelector("#dropdown-job-type").style.display = "none";
                      document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded", "false");
                    },
                    onKeyDown: (e) => {
                      if (e.key === "Enter") {
                        const selectedText = "Remote";
                        updateSearchFilter("job_type", "remote");
                        document.querySelector("#dropdown-job-type").previousElementSibling.firstChild.textContent = selectedText;
                        document.querySelector("#dropdown-job-type").style.display = "none";
                        document.querySelector("#dropdown-job-type").previousElementSibling.setAttribute("aria-expanded", "false");
                      }
                    },
                    children: "Remote"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-dropdown", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "dropdown-selected",
              onClick: () => toggleDropdown("experience"),
              onKeyDown: (e) => e.key === "Enter" && toggleDropdown("experience"),
              tabIndex: "0",
              role: "button",
              "aria-expanded": "false",
              "aria-haspopup": "listbox",
              "aria-label": "Select experience level",
              children: [
                "Experience Level",
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-arrow" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              id: "dropdown-experience",
              className: "dropdown-menu",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-item", onClick: () => {
                  document.querySelector("#dropdown-experience").previousElementSibling.firstChild.textContent = "Entry Level";
                  document.querySelector("#dropdown-experience").style.display = "none";
                }, children: "Entry Level" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-item", onClick: () => {
                  document.querySelector("#dropdown-experience").previousElementSibling.firstChild.textContent = "Mid Level";
                  document.querySelector("#dropdown-experience").style.display = "none";
                }, children: "Mid Level" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-item", onClick: () => {
                  document.querySelector("#dropdown-experience").previousElementSibling.firstChild.textContent = "Senior Level";
                  document.querySelector("#dropdown-experience").style.display = "none";
                }, children: "Senior Level" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-item", onClick: () => {
                  document.querySelector("#dropdown-experience").previousElementSibling.firstChild.textContent = "Executive";
                  document.querySelector("#dropdown-experience").style.display = "none";
                }, children: "Executive" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "custom-dropdown", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "dropdown-selected",
              onClick: () => toggleDropdown("salary"),
              onKeyDown: (e) => e.key === "Enter" && toggleDropdown("salary"),
              tabIndex: "0",
              role: "button",
              "aria-expanded": "false",
              "aria-haspopup": "listbox",
              "aria-label": "Select salary range",
              children: [
                "Salary Range",
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-arrow" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              id: "dropdown-salary",
              className: "dropdown-menu",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-item", onClick: () => {
                  document.querySelector("#dropdown-salary").previousElementSibling.firstChild.textContent = "$40,000 - $60,000";
                  document.querySelector("#dropdown-salary").style.display = "none";
                }, children: "$40,000 - $60,000" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-item", onClick: () => {
                  document.querySelector("#dropdown-salary").previousElementSibling.firstChild.textContent = "$60,000 - $80,000";
                  document.querySelector("#dropdown-salary").style.display = "none";
                }, children: "$60,000 - $80,000" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-item", onClick: () => {
                  document.querySelector("#dropdown-salary").previousElementSibling.firstChild.textContent = "$80,000 - $100,000";
                  document.querySelector("#dropdown-salary").style.display = "none";
                }, children: "$80,000 - $100,000" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dropdown-item", onClick: () => {
                  document.querySelector("#dropdown-salary").previousElementSibling.firstChild.textContent = "$100,000+";
                  document.querySelector("#dropdown-salary").style.display = "none";
                }, children: "$100,000+" })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-results", children: [
      searchError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message", style: {
        color: "#ff4444",
        background: "rgba(255, 68, 68, 0.1)",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem"
      }, children: searchError }),
      isSearching ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "loading-container", style: {
        textAlign: "center",
        padding: "2rem"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "spinner", style: {
          width: "40px",
          height: "40px",
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #3498db",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          margin: "0 auto"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { marginTop: "1rem" }, children: "Searching for jobs..." })
      ] }) : searchResults.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "search-results-grid", style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem"
      }, children: searchResults.map((job, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        UniversalJobCard,
        {
          job: {
            id: job.external_id || job.id || index,
            company: job.company || "Unknown Company",
            position: job.title || "Position Title",
            location: job.location || "Location not specified",
            type: job.job_type || "Full-time",
            postedDate: job.posted_date || (/* @__PURE__ */ new Date()).toISOString(),
            description: job.description || "No description available",
            source: job.source || "External",
            isLiked: false,
            tags: job.tags || [],
            sourceUrl: job.source_url || "#"
          },
          onToggleLike: () => {
          },
          showMatchScore: false,
          showHeart: true,
          showSource: true,
          variant: "search"
        },
        job.external_id || job.id || index
      )) }) : searchFilters.keywords ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "no-results", style: {
        textAlign: "center",
        padding: "2rem",
        color: "#666"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No jobs found for your search criteria." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Try adjusting your keywords or filters." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Use the search form above to find new job opportunities that match your profile." })
    ] })
  ] });
  const renderAnalytics = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "analytics-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-header", style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem",
      flexWrap: "wrap",
      gap: "1rem"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "📊 Job Search Analytics" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "analytics-grid", style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: "1.5rem"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metric-card", style: {
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "12px",
        padding: "1.5rem",
        textAlign: "center",
        transition: "all 0.3s ease"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Jobs Searched" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "metric-value", children: "128" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Total job search queries made" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metric-card", style: {
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "12px",
        padding: "1.5rem",
        textAlign: "center",
        transition: "all 0.3s ease"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Jobs Applied" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "metric-value", children: "46" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Applications submitted from your account" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metric-card", style: {
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "12px",
        padding: "1.5rem",
        textAlign: "center",
        transition: "all 0.3s ease"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Most Applied Platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "metric-value", children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Platform with the highest number of applications" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "metric-card", style: {
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "12px",
        padding: "1.5rem",
        textAlign: "center",
        transition: "all 0.3s ease"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Active Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "metric-value", children: "3h 12m" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Time spent actively searching / applying" })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "job-controller", style: { maxWidth: "1400px", margin: "0 auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "jobcontroller-content", children: [
    currentActiveTab !== "search" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "top-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "back-btn",
        onClick: () => currentSetActiveTab("search"),
        "aria-label": "Go back",
        title: "Go back",
        children: "← Back"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tab-content", style: {
      background: "white",
      borderRadius: "12px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      padding: "2rem",
      minHeight: "500px"
    }, children: [
      currentActiveTab === "search" && renderJobSearch(),
      currentActiveTab === "saved" && renderSavedJobs(),
      currentActiveTab === "analytics" && renderAnalytics()
    ] })
  ] }) });
}
function Profile({ userEmail, activeSection = "personal", setActiveSection, onNavigateBack }) {
  const [localActiveSection, setLocalActiveSection] = reactExports.useState("personal");
  const currentActiveSection = activeSection || localActiveSection;
  const currentSetActiveSection = setActiveSection || setLocalActiveSection;
  const { user, updateUser } = useAuth();
  const {
    profile,
    skills,
    profileLoading,
    loadProfile,
    updateProfile: updateProfile2,
    addSkill: addSkill2,
    deleteSkill: deleteSkill2
  } = useData();
  const [profileData, setProfileData] = reactExports.useState({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      website: "",
      aboutMe: ""
    },
    experience: [],
    education: [],
    skills: [],
    achievements: []
  });
  reactExports.useEffect(() => {
    if (user) {
      updateProfileData();
    }
  }, [user, profile, skills]);
  const updateProfileData = () => {
    if (!user) return;
    const userData = {
      personalInfo: {
        fullName: user.full_name || `${user.first_name || ""} ${user.last_name || ""}`.trim(),
        email: user.email || "",
        phone: user.phone || "",
        location: user.location || "",
        linkedin: user.linkedin_url || "",
        github: user.github_url || "",
        website: user.website_url || "",
        aboutMe: profile?.bio || ""
      },
      experience: [],
      // Will be loaded from API separately
      education: [],
      // Will be loaded from API separately  
      skills: skills ? skills.map((skill) => skill.name) : [],
      achievements: []
      // Will be loaded from API separately
    };
    setProfileData(userData);
  };
  reactExports.useEffect(() => {
    const loadAdditionalData = async () => {
      if (!user) return;
      try {
        const [experienceData, educationData, achievementsData] = await Promise.allSettled([
          apiService.getWorkExperience(),
          apiService.getEducation(),
          apiService.getAchievements()
        ]);
        setProfileData((prev) => ({
          ...prev,
          experience: experienceData.status === "fulfilled" ? (experienceData.value.results || experienceData.value || []).map((exp) => ({
            id: exp.id,
            title: exp.title,
            company: exp.company,
            duration: exp.duration,
            description: exp.description
          })) : [],
          education: educationData.status === "fulfilled" ? (educationData.value.results || educationData.value || []).map((edu) => ({
            id: edu.id,
            degree: edu.degree,
            school: edu.school,
            year: edu.year_range,
            gpa: edu.gpa ? `${edu.gpa}/4.0` : ""
          })) : [],
          achievements: achievementsData.status === "fulfilled" ? (achievementsData.value.results || achievementsData.value || []).map((ach) => ({
            id: ach.id,
            title: ach.title,
            description: ach.description,
            date: ach.date_achieved,
            category: ach.category,
            image: ach.image
          })) : []
        }));
      } catch (error) {
        console.error("Error loading additional profile data:", error);
      }
    };
    loadAdditionalData();
  }, [user]);
  const [skillInput, setSkillInput] = reactExports.useState("");
  const [showSuggestions, setShowSuggestions] = reactExports.useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = reactExports.useState([]);
  const [isEditing, setIsEditing] = reactExports.useState({
    personal: false,
    experience: false,
    education: false,
    skills: false,
    otherSkills: false,
    achievements: false
  });
  const [otherSkills, setOtherSkills] = reactExports.useState([
    "Figma",
    "Photoshop",
    "Illustrator"
  ]);
  const [otherSkillInput, setOtherSkillInput] = reactExports.useState("");
  const addOtherSkill = (skill) => {
    const s = (skill || "").trim();
    if (!s) return;
    setOtherSkills((prev) => prev.includes(s) ? prev : [...prev, s]);
  };
  const removeOtherSkill = (skillToRemove) => {
    setOtherSkills((prev) => prev.filter((s) => s !== skillToRemove));
  };
  const [fieldErrors, setFieldErrors] = reactExports.useState({});
  const [showAddAchievementDialog, setShowAddAchievementDialog] = reactExports.useState(false);
  const [newAchievement, setNewAchievement] = reactExports.useState({
    title: "",
    description: "",
    date: "",
    category: "Work",
    image: null
  });
  const [achievementErrors, setAchievementErrors] = reactExports.useState({});
  const [showAddExperienceDialog, setShowAddExperienceDialog] = reactExports.useState(false);
  const [newExperience, setNewExperience] = reactExports.useState({
    title: "",
    company: "",
    duration: "",
    description: ""
  });
  const [experienceErrors, setExperienceErrors] = reactExports.useState({});
  const [showAddEducationDialog, setShowAddEducationDialog] = reactExports.useState(false);
  const [newEducation, setNewEducation] = reactExports.useState({
    degree: "",
    school: "",
    startYear: "",
    endYear: "",
    gpa: ""
  });
  const [educationErrors, setEducationErrors] = reactExports.useState({});
  const [showDeleteEducationDialog, setShowDeleteEducationDialog] = reactExports.useState(false);
  const [educationToDelete, setEducationToDelete] = reactExports.useState(null);
  const [showDeleteExperienceDialog, setShowDeleteExperienceDialog] = reactExports.useState(false);
  const [experienceToDelete, setExperienceToDelete] = reactExports.useState(null);
  const technicalSkills = [
    "React",
    "Vue.js",
    "Angular",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "C#",
    "PHP",
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
    "Spring Boot",
    "Ruby on Rails",
    "Laravel",
    "ASP.NET",
    "HTML",
    "CSS",
    "SASS",
    "SCSS",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
    "Chakra UI",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Firebase",
    "SQLite",
    "Oracle",
    "SQL Server",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Git",
    "GitHub",
    "GitLab",
    "Linux",
    "Ubuntu",
    "Windows Server",
    "Apache",
    "Nginx",
    "REST APIs",
    "GraphQL",
    "WebSockets",
    "React Native",
    "Flutter",
    "Ionic",
    "Xamarin",
    "Swift",
    "Kotlin",
    "Objective-C",
    "Machine Learning",
    "AI",
    "Data Science",
    "TensorFlow",
    "PyTorch",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Cybersecurity",
    "Penetration Testing",
    "Network Security",
    "Cryptography",
    "Blockchain",
    "Web3",
    "DevOps",
    "CI/CD",
    "Terraform",
    "Ansible",
    "Monitoring",
    "Logging",
    "Microservices",
    "Serverless"
  ];
  const softSkills = [
    "Communication",
    "Leadership",
    "Teamwork",
    "Problem Solving",
    "Critical Thinking",
    "Creativity",
    "Adaptability",
    "Time Management",
    "Organization",
    "Attention to Detail",
    "Work Ethic",
    "Reliability",
    "Emotional Intelligence",
    "Conflict Resolution",
    "Negotiation",
    "Public Speaking",
    "Presentation Skills",
    "Customer Service",
    "Mentoring",
    "Coaching",
    "Project Management",
    "Agile Methodology",
    "Scrum",
    "Collaboration",
    "Cross-functional Teams",
    "Remote Work",
    "Cultural Awareness",
    "Diversity & Inclusion",
    "Continuous Learning",
    "Self-motivation",
    "Resilience",
    "Stress Management",
    "Decision Making",
    "Strategic Planning",
    "Risk Management",
    "Quality Assurance",
    "Process Improvement",
    "Innovation",
    "Analytical Thinking",
    "Research Skills",
    "Data Analysis",
    "Reporting",
    "Documentation",
    "Client Relations",
    "Stakeholder Management",
    "Budget Management",
    "Resource Allocation"
  ];
  const allSkills = [...technicalSkills, ...softSkills];
  const handleSkillInputChange = (e) => {
    const value = e.target.value;
    setSkillInput(value);
    if (value.length > 0) {
      const filtered = allSkills.filter(
        (skill) => skill.toLowerCase().includes(value.toLowerCase()) && !profileData.skills.includes(skill)
      );
      setFilteredSuggestions(filtered.slice(0, 8));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  const addSkillToProfile = async (skillName) => {
    const skillToAdd = skillName || skillInput.trim();
    if (!skillToAdd || profileData.skills.includes(skillToAdd)) {
      if (!skillToAdd) return;
      if (profileData.skills.includes(skillToAdd)) {
        setSkillInput("");
        setShowSuggestions(false);
        return;
      }
    }
    try {
      const result = await addSkill2({
        name: skillToAdd,
        level: "intermediate",
        // Default level
        category: "technical"
        // Default category
      });
      if (result.success) {
        setProfileData((prev) => ({
          ...prev,
          skills: [...prev.skills, skillToAdd]
        }));
        setSkillInput("");
        setShowSuggestions(false);
      } else {
        console.error("Failed to add skill:", result.error);
        alert("Failed to add skill. Please try again.");
      }
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Failed to add skill. Please try again.");
    }
  };
  const removeSkillFromProfile = async (skillToRemove) => {
    try {
      const skillToDelete = skills.find((skill) => skill.name === skillToRemove);
      if (skillToDelete) {
        const result = await deleteSkill2(skillToDelete.id);
        if (result.success) {
          setProfileData((prev) => ({
            ...prev,
            skills: prev.skills.filter((skill) => skill !== skillToRemove)
          }));
        } else {
          console.error("Failed to remove skill:", result.error);
          alert("Failed to remove skill. Please try again.");
        }
      } else {
        setProfileData((prev) => ({
          ...prev,
          skills: prev.skills.filter((skill) => skill !== skillToRemove)
        }));
      }
    } catch (error) {
      console.error("Error removing skill:", error);
      alert("Failed to remove skill. Please try again.");
    }
  };
  const selectSuggestion = (skill) => {
    addSkillToProfile(skill);
  };
  const addAchievement2 = () => {
    const errors = validateAchievement();
    if (Object.keys(errors).length > 0) {
      setAchievementErrors(errors);
      return;
    }
    const achievementToAdd = {
      id: Date.now(),
      title: newAchievement.title.trim(),
      description: newAchievement.description.trim(),
      date: newAchievement.date,
      category: newAchievement.category,
      image: newAchievement.image
    };
    setProfileData((prev) => ({
      ...prev,
      achievements: [...prev.achievements, achievementToAdd]
    }));
    setNewAchievement({
      title: "",
      description: "",
      date: "",
      category: "Work",
      image: null
    });
    setAchievementErrors({});
    setShowAddAchievementDialog(false);
  };
  const removeAchievement = (achievementId) => {
    setProfileData((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((achievement) => achievement.id !== achievementId)
    }));
  };
  const validateAchievement = () => {
    const errors = {};
    if (!newAchievement.title.trim()) {
      errors.title = "Title is required";
    }
    if (!newAchievement.description.trim()) {
      errors.description = "Description is required";
    }
    if (!newAchievement.date) {
      errors.date = "Date is required";
    }
    return errors;
  };
  const handleAchievementInputChange = (field, value) => {
    setNewAchievement((prev) => ({
      ...prev,
      [field]: value
    }));
    if (achievementErrors[field]) {
      setAchievementErrors((prev) => ({
        ...prev,
        [field]: ""
      }));
    }
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewAchievement((prev) => ({
          ...prev,
          image: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleCancelAchievement = () => {
    setNewAchievement({
      title: "",
      description: "",
      date: "",
      category: "Work",
      image: null
    });
    setAchievementErrors({});
    setShowAddAchievementDialog(false);
  };
  const toggleEdit = (section) => {
    setIsEditing((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const handlePersonalInfoChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
    validateField(field, value);
  };
  const validateField = (field, value) => {
    let error = "";
    const requiredFields = ["fullName", "email", "phone", "location", "linkedin"];
    if (requiredFields.includes(field)) {
      if (!value || value.trim() === "") {
        error = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")} is required`;
      }
    }
    if (value && value.trim() !== "") {
      switch (field) {
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            error = "Please enter a valid email address";
          }
          break;
        case "phone":
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
          const cleanPhone = value.replace(/[\s\-\(\)]/g, "");
          if (!phoneRegex.test(cleanPhone)) {
            error = "Please enter a valid phone number";
          }
          break;
        case "linkedin":
        case "github":
        case "website":
          try {
            new URL(value.startsWith("http") ? value : "https://" + value);
          } catch {
            error = "Please enter a valid URL";
          }
          break;
      }
    }
    setFieldErrors((prev) => ({
      ...prev,
      [field]: error
    }));
  };
  const handleSavePersonalInfo = async () => {
    const requiredFields = {
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      location: "Location"
    };
    const emptyFields = [];
    const invalidFields = [];
    Object.keys(requiredFields).forEach((field) => {
      const value = profileData.personalInfo[field];
      if (!value || value.trim() === "") {
        emptyFields.push(requiredFields[field]);
      }
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (profileData.personalInfo.email && !emailRegex.test(profileData.personalInfo.email)) {
      invalidFields.push("Email format is invalid");
    }
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = profileData.personalInfo.phone.replace(/[\s\-\(\)]/g, "");
    if (profileData.personalInfo.phone && !phoneRegex.test(cleanPhone)) {
      invalidFields.push("Phone number format is invalid");
    }
    if (profileData.personalInfo.linkedin && profileData.personalInfo.linkedin.trim() !== "") {
      try {
        new URL(profileData.personalInfo.linkedin.startsWith("http") ? profileData.personalInfo.linkedin : "https://" + profileData.personalInfo.linkedin);
      } catch {
        invalidFields.push("LinkedIn URL format is invalid");
      }
    }
    const optionalUrlFields = ["github", "website"];
    optionalUrlFields.forEach((field) => {
      const value = profileData.personalInfo[field];
      if (value && value.trim() !== "") {
        try {
          new URL(value.startsWith("http") ? value : "https://" + value);
        } catch {
          invalidFields.push(`${field.charAt(0).toUpperCase() + field.slice(1)} URL format is invalid`);
        }
      }
    });
    if (emptyFields.length > 0) {
      alert(`Please fill in the following required fields:
• ${emptyFields.join("\n• ")}`);
      return;
    }
    if (invalidFields.length > 0) {
      alert(`Please correct the following issues:
• ${invalidFields.join("\n• ")}`);
      return;
    }
    try {
      const nameParts = profileData.personalInfo.fullName.trim().split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";
      const userUpdateData = {
        first_name: firstName,
        last_name: lastName,
        phone: profileData.personalInfo.phone,
        location: profileData.personalInfo.location,
        linkedin_url: profileData.personalInfo.linkedin || null,
        github_url: profileData.personalInfo.github || null,
        website_url: profileData.personalInfo.website || null
      };
      await apiService.updateCurrentUser(userUpdateData);
      if (profileData.personalInfo.aboutMe) {
        const profileUpdateData = {
          bio: profileData.personalInfo.aboutMe
        };
        await updateProfile2(profileUpdateData);
      }
      updateUser({
        ...user,
        first_name: firstName,
        last_name: lastName,
        full_name: profileData.personalInfo.fullName,
        phone: profileData.personalInfo.phone,
        location: profileData.personalInfo.location,
        linkedin_url: profileData.personalInfo.linkedin,
        github_url: profileData.personalInfo.github,
        website_url: profileData.personalInfo.website
      });
      setIsEditing((prev) => ({
        ...prev,
        personal: false
      }));
      alert("Personal information saved successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile information. Please try again.");
    }
  };
  const handleAddExperience = () => {
    setShowAddExperienceDialog(true);
  };
  const handleAddEducation = () => {
    setShowAddEducationDialog(true);
  };
  const handleExperienceInputChange = (field, value) => {
    setNewExperience((prev) => ({
      ...prev,
      [field]: value
    }));
    if (experienceErrors[field]) {
      setExperienceErrors((prev) => ({
        ...prev,
        [field]: ""
      }));
    }
  };
  const handleEducationInputChange = (field, value) => {
    setNewEducation((prev) => ({
      ...prev,
      [field]: value
    }));
    if (educationErrors[field]) {
      setEducationErrors((prev) => ({
        ...prev,
        [field]: ""
      }));
    }
  };
  const validateExperience = () => {
    const errors = {};
    const requiredFields = {
      title: "Job Role/Title",
      company: "Company/Firm Name",
      duration: "Duration",
      description: "Work Description"
    };
    Object.keys(requiredFields).forEach((field) => {
      if (!newExperience[field] || newExperience[field].trim() === "") {
        errors[field] = `${requiredFields[field]} is required`;
      }
    });
    return errors;
  };
  const validateEducation = () => {
    const errors = {};
    const requiredFields = {
      degree: "Course Name",
      school: "University Name",
      startYear: "Start Year",
      endYear: "End Year",
      gpa: "CGPA"
    };
    Object.keys(requiredFields).forEach((field) => {
      if (!newEducation[field] || newEducation[field].trim() === "") {
        errors[field] = `${requiredFields[field]} is required`;
      }
    });
    if (newEducation.startYear && newEducation.endYear) {
      const startYear = parseInt(newEducation.startYear);
      const endYear = parseInt(newEducation.endYear);
      if (startYear >= endYear) {
        errors.endYear = "End year must be after start year";
      }
    }
    if (newEducation.gpa) {
      const gpaValue = parseFloat(newEducation.gpa);
      if (isNaN(gpaValue) || gpaValue < 0 || gpaValue > 10) {
        errors.gpa = "CGPA must be a number between 0 and 10";
      }
    }
    return errors;
  };
  const handleSaveExperience = () => {
    const errors = validateExperience();
    if (Object.keys(errors).length > 0) {
      setExperienceErrors(errors);
      return;
    }
    const experienceToAdd = {
      id: Date.now(),
      // Simple ID generation
      title: newExperience.title.trim(),
      company: newExperience.company.trim(),
      duration: newExperience.duration.trim(),
      description: newExperience.description.trim()
    };
    const updatedProfileData = {
      ...profileData,
      experience: [...profileData.experience, experienceToAdd]
    };
    setProfileData(updatedProfileData);
    try {
      localStorage.setItem("userProfileData", JSON.stringify(updatedProfileData));
      window.dispatchEvent(new CustomEvent("profileUpdated"));
    } catch (error) {
      console.error("Error saving experience:", error);
    }
    setNewExperience({
      title: "",
      company: "",
      duration: "",
      description: ""
    });
    setExperienceErrors({});
    setShowAddExperienceDialog(false);
    alert("Experience added successfully!");
  };
  const handleSaveEducation = () => {
    const errors = validateEducation();
    if (Object.keys(errors).length > 0) {
      setEducationErrors(errors);
      return;
    }
    const educationToAdd = {
      id: Date.now(),
      // Simple ID generation
      degree: newEducation.degree.trim(),
      school: newEducation.school.trim(),
      year: `${newEducation.startYear} - ${newEducation.endYear}`,
      gpa: newEducation.gpa.trim()
    };
    const updatedProfileData = {
      ...profileData,
      education: [...profileData.education, educationToAdd]
    };
    setProfileData(updatedProfileData);
    try {
      localStorage.setItem("userProfileData", JSON.stringify(updatedProfileData));
      window.dispatchEvent(new CustomEvent("profileUpdated"));
    } catch (error) {
      console.error("Error saving education:", error);
    }
    setNewEducation({
      degree: "",
      school: "",
      startYear: "",
      endYear: "",
      gpa: ""
    });
    setEducationErrors({});
    setShowAddEducationDialog(false);
    alert("Education added successfully!");
  };
  const handleCancelExperience = () => {
    setNewExperience({
      title: "",
      company: "",
      duration: "",
      description: ""
    });
    setExperienceErrors({});
    setShowAddExperienceDialog(false);
  };
  const handleCancelEducation = () => {
    setNewEducation({
      degree: "",
      school: "",
      startYear: "",
      endYear: "",
      gpa: ""
    });
    setEducationErrors({});
    setShowAddEducationDialog(false);
  };
  const handleRemoveExperience = (experienceId) => {
    console.log("=== REMOVE EXPERIENCE DEBUG ===");
    console.log("Experience ID to remove:", experienceId);
    const experienceItem = profileData.experience.find((exp) => exp.id === experienceId);
    console.log("Experience item found:", experienceItem);
    if (experienceItem) {
      setExperienceToDelete(experienceItem);
      setShowDeleteExperienceDialog(true);
    } else {
      alert("Experience not found!");
    }
  };
  const confirmDeleteExperience = () => {
    if (experienceToDelete) {
      console.log("Confirming deletion of experience:", experienceToDelete);
      setProfileData((prev) => {
        const updatedExperience = prev.experience.filter((exp) => exp.id !== experienceToDelete.id);
        console.log("Updated experience after filter:", updatedExperience);
        return {
          ...prev,
          experience: updatedExperience
        };
      });
      setShowDeleteExperienceDialog(false);
      setExperienceToDelete(null);
      alert("Experience removed successfully!");
    }
  };
  const cancelDeleteExperience = () => {
    setShowDeleteExperienceDialog(false);
    setExperienceToDelete(null);
    console.log("Experience deletion cancelled");
  };
  const handleRemoveEducation = (educationId) => {
    console.log("=== REMOVE EDUCATION DEBUG ===");
    console.log("Education ID to remove:", educationId);
    const educationItem = profileData.education.find((edu) => edu.id === educationId);
    console.log("Education item found:", educationItem);
    if (educationItem) {
      setEducationToDelete(educationItem);
      setShowDeleteEducationDialog(true);
    } else {
      alert("Education not found!");
    }
  };
  const confirmDeleteEducation = () => {
    if (educationToDelete) {
      console.log("Confirming deletion of education:", educationToDelete);
      setProfileData((prev) => {
        const updatedEducation = prev.education.filter((edu) => edu.id !== educationToDelete.id);
        console.log("Updated education after filter:", updatedEducation);
        return {
          ...prev,
          education: updatedEducation
        };
      });
      setShowDeleteEducationDialog(false);
      setEducationToDelete(null);
      alert("Education removed successfully!");
    }
  };
  const cancelDeleteEducation = () => {
    setShowDeleteEducationDialog(false);
    setEducationToDelete(null);
    console.log("Education deletion cancelled");
  };
  const handleEducationChange = (educationId, field, value) => {
    setProfileData((prev) => ({
      ...prev,
      education: prev.education.map(
        (edu) => edu.id === educationId ? { ...edu, [field]: value } : edu
      )
    }));
  };
  const handleExperienceChange = (experienceId, field, value) => {
    setProfileData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp) => exp.id === experienceId ? { ...exp, [field]: value } : exp
      )
    }));
  };
  const renderPersonalInfo = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "👤 Personal Information" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "edit-btn",
          onClick: () => isEditing.personal ? handleSavePersonalInfo() : toggleEdit("personal"),
          children: isEditing.personal ? "Save" : "Edit"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "personal-info-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Full Name *" }),
        isEditing.personal ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: profileData.personalInfo.fullName,
              onChange: (e) => handlePersonalInfoChange("fullName", e.target.value),
              className: `edit-input ${fieldErrors.fullName ? "error" : ""}`,
              required: true
            }
          ),
          fieldErrors.fullName && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: fieldErrors.fullName })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: profileData.personalInfo.fullName || /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "missing-field", children: "Please add your full name" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email *" }),
        isEditing.personal ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              value: profileData.personalInfo.email,
              onChange: (e) => handlePersonalInfoChange("email", e.target.value),
              className: `edit-input ${fieldErrors.email ? "error" : ""}`,
              required: true
            }
          ),
          fieldErrors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: fieldErrors.email })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: profileData.personalInfo.email || /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "missing-field", children: "Please add your email" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone *" }),
        isEditing.personal ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "tel",
              value: profileData.personalInfo.phone,
              onChange: (e) => handlePersonalInfoChange("phone", e.target.value),
              className: `edit-input ${fieldErrors.phone ? "error" : ""}`,
              required: true
            }
          ),
          fieldErrors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: fieldErrors.phone })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: profileData.personalInfo.phone || /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "missing-field", children: "Please add your phone number" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location *" }),
        isEditing.personal ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: profileData.personalInfo.location,
              onChange: (e) => handlePersonalInfoChange("location", e.target.value),
              className: `edit-input ${fieldErrors.location ? "error" : ""}`,
              required: true
            }
          ),
          fieldErrors.location && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: fieldErrors.location })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: profileData.personalInfo.location || /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "missing-field", children: "Please add your location" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          "LinkedIn ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "optional-label", children: "(Optional)" })
        ] }),
        isEditing.personal ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "url",
              value: profileData.personalInfo.linkedin,
              onChange: (e) => handlePersonalInfoChange("linkedin", e.target.value),
              className: `edit-input ${fieldErrors.linkedin ? "error" : ""}`,
              placeholder: "linkedin.com/in/yourprofile"
            }
          ),
          fieldErrors.linkedin && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: fieldErrors.linkedin })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: profileData.personalInfo.linkedin || /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "missing-field", children: "Add your LinkedIn profile (optional)" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          "GitHub ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "optional-label", children: "(Optional)" })
        ] }),
        isEditing.personal ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "url",
              value: profileData.personalInfo.github,
              onChange: (e) => handlePersonalInfoChange("github", e.target.value),
              className: `edit-input ${fieldErrors.github ? "error" : ""}`,
              placeholder: "github.com/yourprofile"
            }
          ),
          fieldErrors.github && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: fieldErrors.github })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: profileData.personalInfo.github || /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "missing-field", children: "Add your GitHub profile (optional)" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-field", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
          "Website ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "optional-label", children: "(Optional)" })
        ] }),
        isEditing.personal ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "url",
              value: profileData.personalInfo.website,
              onChange: (e) => handlePersonalInfoChange("website", e.target.value),
              className: `edit-input ${fieldErrors.website ? "error" : ""}`,
              placeholder: "yourwebsite.com"
            }
          ),
          fieldErrors.website && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: fieldErrors.website })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: profileData.personalInfo.website || /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "missing-field", children: "Add your website (optional)" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "about-me-field", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
        "About Me ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "optional-label", children: "(Optional)" })
      ] }),
      isEditing.personal ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          className: "edit-textarea about-me-input",
          value: profileData.personalInfo.aboutMe,
          onChange: (e) => handlePersonalInfoChange("aboutMe", e.target.value),
          placeholder: "Write a short summary about yourself for your resume...",
          rows: 8
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "about-me-text", children: profileData.personalInfo.aboutMe ? profileData.personalInfo.aboutMe.split("\n").map((line, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        line,
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {})
      ] }, idx)) : /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Add an About Me summary for your resume (optional)" }) })
    ] })
  ] });
  const renderExperience = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "💼 Work Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "add-btn", onClick: handleAddExperience, children: "+ Add Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "edit-btn",
            onClick: () => toggleEdit("experience"),
            children: isEditing.experience ? "Save" : "Edit"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "experience-list", children: profileData.experience.map((exp) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-header", children: [
        isEditing.experience ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: exp.title,
            onChange: (e) => handleExperienceChange(exp.id, "title", e.target.value),
            className: "edit-input title-input"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: exp.title }),
        isEditing.experience && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "remove-btn-experience",
            onClick: () => handleRemoveExperience(exp.id),
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "experience-details", children: isEditing.experience ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: exp.company,
            onChange: (e) => handleExperienceChange(exp.id, "company", e.target.value),
            className: "edit-input company-input",
            placeholder: "Company"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: exp.duration,
            onChange: (e) => handleExperienceChange(exp.id, "duration", e.target.value),
            className: "edit-input duration-input",
            placeholder: "Duration"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: exp.description,
            onChange: (e) => handleExperienceChange(exp.id, "description", e.target.value),
            className: "edit-textarea",
            placeholder: "Description"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "company", children: exp.company }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "duration", children: exp.duration }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "description", children: exp.description })
      ] }) })
    ] }, exp.id)) })
  ] });
  const renderEducation = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🎓 Education" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "add-btn", onClick: handleAddEducation, children: "+ Add Education" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "edit-btn",
            onClick: () => toggleEdit("education"),
            children: isEditing.education ? "Save" : "Edit"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "education-list", children: profileData.education.map((edu) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-header", children: [
        isEditing.education ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: edu.degree,
            onChange: (e) => handleEducationChange(edu.id, "degree", e.target.value),
            className: "edit-input degree-input"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: edu.degree }),
        isEditing.education && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "remove-btn-education",
            onClick: () => handleRemoveEducation(edu.id),
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "education-details", children: isEditing.education ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: edu.school,
            onChange: (e) => handleEducationChange(edu.id, "school", e.target.value),
            className: "edit-input school-input",
            placeholder: "School"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: edu.year,
            onChange: (e) => handleEducationChange(edu.id, "year", e.target.value),
            className: "edit-input year-input",
            placeholder: "Year"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: edu.gpa,
            onChange: (e) => handleEducationChange(edu.id, "gpa", e.target.value),
            className: "edit-input gpa-input",
            placeholder: "GPA"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "school", children: edu.school }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "year", children: edu.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "gpa", children: [
          "GPA: ",
          edu.gpa
        ] })
      ] }) })
    ] }, edu.id)) })
  ] });
  const renderSkills = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🛠️ Skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "edit-btn",
          onClick: () => toggleEdit("skills"),
          children: isEditing.skills ? "Save" : "Edit"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-container", children: isEditing.skills ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-edit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skill-input-container", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skill-input-wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: skillInput,
              onChange: handleSkillInputChange,
              placeholder: "Type a skill name...",
              className: "skill-input",
              onKeyPress: (e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkillToProfile();
                }
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "add-skill-btn",
              onClick: () => addSkillToProfile(),
              disabled: !skillInput.trim(),
              children: "Add Skill"
            }
          )
        ] }),
        showSuggestions && filteredSuggestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "suggestions-dropdown", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "suggestions-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Suggested Skills" }) }),
          filteredSuggestions.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "suggestion-item",
              onClick: () => selectSuggestion(skill),
              children: skill
            },
            index
          ))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "added-skills", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
          "Added Skills (",
          profileData.skills.length,
          ")"
        ] }),
        profileData.skills.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "edit-skills-instruction", children: "💡 Click on any skill to remove it" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-grid", children: [
          profileData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "skill-tag editable",
              onClick: () => removeSkillFromProfile(skill),
              title: "Click to remove this skill",
              children: [
                skill,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "remove-skill-btn",
                    onClick: () => removeSkillFromProfile(skill),
                    title: "Remove skill",
                    children: "×"
                  }
                )
              ]
            },
            index
          )),
          profileData.skills.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "no-skills", children: "No skills added yet. Start typing to add skills!" })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-grid", children: [
      profileData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "skill-tag", children: skill }, index)),
      profileData.skills.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "no-skills", children: "No skills added yet." })
    ] }) }) })
  ] });
  const renderOtherSkills = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "✨ Other Skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "edit-btn",
          onClick: () => toggleEdit("otherSkills"),
          children: isEditing.otherSkills ? "Save" : "Edit"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-container", children: isEditing.otherSkills ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-edit", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skill-input-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skill-input-wrapper", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: otherSkillInput,
            onChange: (e) => setOtherSkillInput(e.target.value),
            placeholder: "Type an other skill...",
            className: "skill-input",
            onKeyPress: (e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (otherSkillInput.trim()) {
                  addOtherSkill(otherSkillInput.trim());
                  setOtherSkillInput("");
                }
              }
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "add-skill-btn",
            onClick: () => {
              if (otherSkillInput.trim()) {
                addOtherSkill(otherSkillInput.trim());
                setOtherSkillInput("");
              }
            },
            disabled: !otherSkillInput.trim(),
            children: "Add Skill"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "added-skills", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
          "Other Skills (",
          otherSkills.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-grid", children: [
          otherSkills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "skill-tag editable",
              onClick: () => removeOtherSkill(skill),
              title: "Click to remove this skill",
              children: [
                skill,
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "remove-skill-btn",
                    onClick: () => removeOtherSkill(skill),
                    title: "Remove skill",
                    children: "×"
                  }
                )
              ]
            },
            index
          )),
          otherSkills.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "no-skills", children: "No other skills added yet." })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-display", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-grid", children: [
      otherSkills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "skill-tag", children: skill }, index)),
      otherSkills.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "no-skills", children: "No other skills added yet." })
    ] }) }) })
  ] });
  const renderAchievements = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "section-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🏆 Achievements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "edit-btn",
          onClick: () => toggleEdit("achievements"),
          children: isEditing.achievements ? "Save" : "Edit"
        }
      )
    ] }),
    isEditing.achievements && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "add-section", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "add-btn",
        onClick: () => setShowAddAchievementDialog(true),
        children: "➕ Add Achievement"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "achievements-grid", children: profileData.achievements.length > 0 ? profileData.achievements.map((achievement) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "achievement-card", children: [
      achievement.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "achievement-image", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: achievement.image, alt: achievement.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "achievement-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "achievement-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: achievement.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "achievement-category", children: achievement.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "achievement-description", children: achievement.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "achievement-date", children: new Date(achievement.date).toLocaleDateString() }),
        isEditing.achievements && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "achievement-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "remove-btn",
            onClick: () => removeAchievement(achievement.id),
            title: "Remove achievement",
            children: "Remove"
          }
        ) })
      ] })
    ] }, achievement.id)) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "no-achievements", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No achievements added yet." }),
      isEditing.achievements && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'Click "Add Achievement" to showcase your accomplishments!' })
    ] }) })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-sidebar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sidebar-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "👤 Profile" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sidebar-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `sidebar-nav-item ${currentActiveSection === "personal" ? "active" : ""}`,
            onClick: () => currentSetActiveSection("personal"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: "📝" }),
              "Personal Info"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `sidebar-nav-item ${currentActiveSection === "experience" ? "active" : ""}`,
            onClick: () => currentSetActiveSection("experience"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: "💼" }),
              "Experience"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `sidebar-nav-item ${currentActiveSection === "education" ? "active" : ""}`,
            onClick: () => currentSetActiveSection("education"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: "🎓" }),
              "Education"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `sidebar-nav-item ${currentActiveSection === "skills" ? "active" : ""}`,
            onClick: () => currentSetActiveSection("skills"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: "⚡" }),
              "Skills"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: `sidebar-nav-item ${currentActiveSection === "achievements" ? "active" : ""}`,
            onClick: () => currentSetActiveSection("achievements"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: "🏆" }),
              "Achievements"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-horizontal-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: currentActiveSection === "personal" ? "active" : "",
            onClick: () => currentSetActiveSection("personal"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: "📝" }),
              "Personal Info"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: currentActiveSection === "experience" ? "active" : "",
            onClick: () => currentSetActiveSection("experience"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: "💼" }),
              "Experience"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: currentActiveSection === "education" ? "active" : "",
            onClick: () => currentSetActiveSection("education"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: "🎓" }),
              "Education"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: currentActiveSection === "skills" ? "active" : "",
            onClick: () => currentSetActiveSection("skills"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: "⚡" }),
              "Skills"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: currentActiveSection === "achievements" ? "active" : "",
            onClick: () => currentSetActiveSection("achievements"),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-icon", children: "🏆" }),
              "Achievements"
            ]
          }
        )
      ] }),
      currentActiveSection === "personal" && renderPersonalInfo(),
      currentActiveSection === "experience" && renderExperience(),
      currentActiveSection === "education" && renderEducation(),
      currentActiveSection === "skills" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        renderSkills(),
        renderOtherSkills()
      ] }),
      currentActiveSection === "achievements" && renderAchievements()
    ] }),
    showAddExperienceDialog && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dialog-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "➕ Add Work Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-close", onClick: handleCancelExperience, children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Job Role/Title *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: newExperience.title,
              onChange: (e) => handleExperienceInputChange("title", e.target.value),
              className: `dialog-input ${experienceErrors.title ? "error" : ""}`,
              placeholder: "e.g. Frontend Developer, Software Engineer"
            }
          ),
          experienceErrors.title && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: experienceErrors.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Company/Firm Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: newExperience.company,
              onChange: (e) => handleExperienceInputChange("company", e.target.value),
              className: `dialog-input ${experienceErrors.company ? "error" : ""}`,
              placeholder: "e.g. TechCorp Inc., Google, Microsoft"
            }
          ),
          experienceErrors.company && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: experienceErrors.company })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Duration *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: newExperience.duration,
              onChange: (e) => handleExperienceInputChange("duration", e.target.value),
              className: `dialog-input ${experienceErrors.duration ? "error" : ""}`,
              placeholder: "e.g. Jan 2023 - Present, Jun 2021 - Dec 2022"
            }
          ),
          experienceErrors.duration && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: experienceErrors.duration })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Work Description *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: newExperience.description,
              onChange: (e) => handleExperienceInputChange("description", e.target.value),
              className: `dialog-textarea ${experienceErrors.description ? "error" : ""}`,
              placeholder: "Briefly describe your role, responsibilities, and achievements...",
              rows: "4"
            }
          ),
          experienceErrors.description && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: experienceErrors.description })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-btn cancel", onClick: handleCancelExperience, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-btn save", onClick: handleSaveExperience, children: "Add Experience" })
      ] })
    ] }) }),
    showAddEducationDialog && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dialog-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🎓 Add Education" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-close", onClick: handleCancelEducation, children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Course Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: newEducation.degree,
              onChange: (e) => handleEducationInputChange("degree", e.target.value),
              className: `dialog-input ${educationErrors.degree ? "error" : ""}`,
              placeholder: "e.g. Bachelor of Science in Computer Science, MBA"
            }
          ),
          educationErrors.degree && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: educationErrors.degree })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "University Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: newEducation.school,
              onChange: (e) => handleEducationInputChange("school", e.target.value),
              className: `dialog-input ${educationErrors.school ? "error" : ""}`,
              placeholder: "e.g. Stanford University, MIT, IIT Delhi"
            }
          ),
          educationErrors.school && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: educationErrors.school })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Start From *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: newEducation.startYear,
                onChange: (e) => handleEducationInputChange("startYear", e.target.value),
                className: `dialog-input ${educationErrors.startYear ? "error" : ""}`,
                placeholder: "2019",
                min: "1950",
                max: (/* @__PURE__ */ new Date()).getFullYear() + 10
              }
            ),
            educationErrors.startYear && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: educationErrors.startYear })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Ended On *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                value: newEducation.endYear,
                onChange: (e) => handleEducationInputChange("endYear", e.target.value),
                className: `dialog-input ${educationErrors.endYear ? "error" : ""}`,
                placeholder: "2023",
                min: "1950",
                max: (/* @__PURE__ */ new Date()).getFullYear() + 10
              }
            ),
            educationErrors.endYear && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: educationErrors.endYear })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "CGPA *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              step: "0.01",
              value: newEducation.gpa,
              onChange: (e) => handleEducationInputChange("gpa", e.target.value),
              className: `dialog-input ${educationErrors.gpa ? "error" : ""}`,
              placeholder: "e.g. 8.5, 3.7",
              min: "0",
              max: "10"
            }
          ),
          educationErrors.gpa && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: educationErrors.gpa })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-btn cancel", onClick: handleCancelEducation, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-btn save", onClick: handleSaveEducation, children: "Add Education" })
      ] })
    ] }) }),
    showDeleteExperienceDialog && experienceToDelete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dialog-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog delete-confirmation-dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "⚠️ Confirm Experience Deletion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-close", onClick: cancelDeleteExperience, children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dialog-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "delete-warning", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "warning-text", children: "Are you sure you want to permanently delete this work experience entry?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "experience-preview", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "experience-title", children: experienceToDelete.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "experience-company", children: experienceToDelete.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "experience-duration", children: experienceToDelete.duration }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "experience-description", children: experienceToDelete.description })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "warning-note", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "This action cannot be undone." }),
          " All information related to this work experience will be permanently removed from your profile."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-btn cancel", onClick: cancelDeleteExperience, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-btn delete", onClick: confirmDeleteExperience, children: "Delete Experience" })
      ] })
    ] }) }),
    showDeleteEducationDialog && educationToDelete && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dialog-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog delete-confirmation-dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "⚠️ Confirm Education Deletion" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-close", onClick: cancelDeleteEducation, children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dialog-content", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "delete-warning", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "warning-text", children: "Are you sure you want to permanently delete this education entry?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "education-preview", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-info", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "education-degree", children: educationToDelete.degree }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "education-school", children: educationToDelete.school }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "education-year", children: educationToDelete.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "education-gpa", children: [
            "GPA: ",
            educationToDelete.gpa
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "warning-note", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "This action cannot be undone." }),
          " All information related to this education will be permanently removed from your profile."
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-btn cancel", onClick: cancelDeleteEducation, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-btn delete", onClick: confirmDeleteEducation, children: "Delete Education" })
      ] })
    ] }) }),
    showAddAchievementDialog && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "dialog-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🏆 Add Achievement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-close", onClick: handleCancelAchievement, children: "×" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Achievement Title *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: newAchievement.title,
              onChange: (e) => handleAchievementInputChange("title", e.target.value),
              className: `dialog-input ${achievementErrors.title ? "error" : ""}`,
              placeholder: "e.g., Employee of the Month, Certification, Award..."
            }
          ),
          achievementErrors.title && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: achievementErrors.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Description *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: newAchievement.description,
              onChange: (e) => handleAchievementInputChange("description", e.target.value),
              className: `dialog-textarea ${achievementErrors.description ? "error" : ""}`,
              placeholder: "Describe your achievement and its significance...",
              rows: "4"
            }
          ),
          achievementErrors.description && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: achievementErrors.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Date *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                value: newAchievement.date,
                onChange: (e) => handleAchievementInputChange("date", e.target.value),
                className: `dialog-input ${achievementErrors.date ? "error" : ""}`
              }
            ),
            achievementErrors.date && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: achievementErrors.date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: newAchievement.category,
                onChange: (e) => handleAchievementInputChange("category", e.target.value),
                className: "dialog-select",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Work", children: "Work" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Education", children: "Education" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Personal", children: "Personal" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Sports", children: "Sports" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Volunteer", children: "Volunteer" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Other", children: "Other" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-field", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Achievement Image/Certificate (Optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              onChange: handleImageUpload,
              className: "dialog-file-input"
            }
          ),
          newAchievement.image && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "image-preview", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: newAchievement.image, alt: "Achievement preview" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dialog-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-btn cancel", onClick: handleCancelAchievement, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "dialog-btn primary", onClick: addAchievement2, children: "Add Achievement" })
      ] })
    ] }) })
  ] });
}
function JobMatches({ userEmail, onNavigateBack }) {
  const [filter, setFilter] = reactExports.useState("all");
  const [sortBy, setSortBy] = reactExports.useState("match");
  const jobMatches = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechFlow Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      matchScore: 95,
      postedDate: "2 days ago",
      skills: ["React", "JavaScript", "TypeScript", "Node.js"],
      description: "We are looking for a skilled Frontend Developer to join our dynamic team...",
      remote: true
    },
    {
      id: 2,
      title: "React Developer",
      company: "Innovation Labs",
      location: "Remote",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      matchScore: 92,
      postedDate: "1 day ago",
      skills: ["React", "Redux", "JavaScript", "CSS"],
      description: "Join our team to build cutting-edge web applications...",
      remote: true
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      matchScore: 88,
      postedDate: "3 days ago",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      description: "Exciting opportunity to work on diverse projects...",
      remote: false
    },
    {
      id: 4,
      title: "Frontend Engineer",
      company: "DesignCorp",
      location: "Austin, TX",
      type: "Contract",
      salary: "$80 - $100/hour",
      matchScore: 85,
      postedDate: "5 days ago",
      skills: ["React", "Vue.js", "HTML", "CSS"],
      description: "Contract position for an experienced frontend engineer...",
      remote: true
    },
    {
      id: 5,
      title: "JavaScript Developer",
      company: "WebSolutions",
      location: "Seattle, WA",
      type: "Part-time",
      salary: "$60,000 - $80,000",
      matchScore: 82,
      postedDate: "1 week ago",
      skills: ["JavaScript", "HTML", "CSS", "jQuery"],
      description: "Part-time opportunity for a JavaScript developer...",
      remote: false
    }
  ];
  const filteredJobs = jobMatches.filter((job) => {
    if (filter === "all") return true;
    if (filter === "remote") return job.remote;
    if (filter === "onsite") return !job.remote;
    if (filter === "fulltime") return job.type === "Full-time";
    if (filter === "contract") return job.type === "Contract";
    return true;
  });
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === "match") return b.matchScore - a.matchScore;
    if (sortBy === "date") return new Date(b.postedDate) - new Date(a.postedDate);
    if (sortBy === "salary") return b.salary.localeCompare(a.salary);
    return 0;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "job-matches", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "job-matches-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Your Job Matches" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Jobs tailored to your skills and preferences" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-number", children: jobMatches.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: "Total Matches" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-number", children: jobMatches.filter((j) => j.matchScore >= 90).length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "stat-label", children: "Top Matches" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "job-matches-controls", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `filter-btn ${filter === "all" ? "active" : ""}`,
            onClick: () => setFilter("all"),
            children: "All Jobs"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `filter-btn ${filter === "remote" ? "active" : ""}`,
            onClick: () => setFilter("remote"),
            children: "Remote"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `filter-btn ${filter === "onsite" ? "active" : ""}`,
            onClick: () => setFilter("onsite"),
            children: "On-site"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `filter-btn ${filter === "fulltime" ? "active" : ""}`,
            onClick: () => setFilter("fulltime"),
            children: "Full-time"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `filter-btn ${filter === "contract" ? "active" : ""}`,
            onClick: () => setFilter("contract"),
            children: "Contract"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sort-controls", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Sort by:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: sortBy,
            onChange: (e) => setSortBy(e.target.value),
            className: "sort-select",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "match", children: "Match Score" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date", children: "Date Posted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "salary", children: "Salary" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "job-matches-list", style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "1.5rem"
    }, children: sortedJobs.map((job) => {
      const jobData = {
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        postedDate: job.postedDate,
        description: job.description,
        salary: job.salary,
        source: "Job Board",
        matchScore: job.matchScore,
        tags: [...job.skills || [], job.type, job.remote ? "Remote" : ""].filter(Boolean).slice(0, 4),
        isLiked: false
        // Can be managed by parent component
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        UniversalJobCard,
        {
          job: jobData,
          showMatchScore: true,
          showHeart: true,
          showSource: true,
          variant: "default",
          onApply: (job2) => {
            console.log("Apply to job:", job2.title);
          },
          onToggleLike: (jobId) => {
            console.log("Toggle like for job:", jobId);
          }
        },
        job.id
      );
    }) }),
    sortedJobs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "no-matches", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-matches-icon", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "No matches found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Try adjusting your filters to see more job opportunities." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "reset-filters-btn", onClick: () => setFilter("all"), children: "Reset Filters" })
    ] })
  ] });
}
function JobApplications({ userEmail, onNavigateBack }) {
  const [sortBy, setSortBy] = reactExports.useState("company-az");
  const jobApplications = [
    {
      id: 1,
      company: "TechFlow Solutions",
      position: "Senior Frontend Developer",
      appliedDate: "2025-08-27",
      status: "under_review",
      location: "Remote",
      jobType: "Full-time",
      salary: "$95,000 - $120,000",
      applicationMethod: "Company Website",
      notes: "Applied through their careers page. HR confirmed receipt.",
      companyLogo: "🏢",
      responseTime: "2-3 business days expected"
    },
    {
      id: 2,
      company: "Innovation Labs",
      position: "React Developer",
      appliedDate: "2025-08-25",
      status: "interview_scheduled",
      location: "San Francisco, CA",
      jobType: "Remote",
      salary: "$85,000 - $110,000",
      applicationMethod: "LinkedIn",
      notes: "Recruiter reached out. Technical interview scheduled for tomorrow.",
      companyLogo: "🚀",
      responseTime: "Responded in 1 day"
    },
    {
      id: 3,
      company: "DataTech Corp",
      position: "Full Stack Engineer",
      appliedDate: "2025-08-24",
      status: "rejected",
      location: "New York, NY",
      jobType: "Hybrid",
      salary: "$100,000 - $130,000",
      applicationMethod: "Job Board",
      notes: "Position filled internally. Encouraged to apply for future openings.",
      companyLogo: "📊",
      responseTime: "Responded in 3 days"
    },
    {
      id: 4,
      company: "StartupHub",
      position: "Frontend Developer",
      appliedDate: "2025-08-23",
      status: "under_review",
      location: "Austin, TX",
      jobType: "On-site",
      salary: "$70,000 - $90,000",
      applicationMethod: "AngelList",
      notes: "Early-stage startup. Direct application to CTO.",
      companyLogo: "💡",
      responseTime: "1-2 weeks expected"
    },
    {
      id: 5,
      company: "DesignCorp",
      position: "UI/UX Developer",
      appliedDate: "2025-08-22",
      status: "offer_received",
      location: "Seattle, WA",
      jobType: "Remote",
      salary: "$88,000 - $105,000",
      applicationMethod: "Referral",
      notes: "Referred by former colleague. Offer received pending decision.",
      companyLogo: "🎨",
      responseTime: "Responded in 2 days"
    },
    {
      id: 6,
      company: "CloudTech Systems",
      position: "Software Engineer",
      appliedDate: "2025-08-20",
      status: "under_review",
      location: "Denver, CO",
      jobType: "Hybrid",
      salary: "$80,000 - $100,000",
      applicationMethod: "Company Website",
      notes: "Applied for cloud infrastructure role. Waiting for response.",
      companyLogo: "☁️",
      responseTime: "5-7 business days expected"
    },
    {
      id: 7,
      company: "FinTech Solutions",
      position: "Frontend Developer",
      appliedDate: "2025-08-18",
      status: "rejected",
      location: "Boston, MA",
      jobType: "On-site",
      salary: "$90,000 - $115,000",
      applicationMethod: "Recruiter",
      notes: "Not a good culture fit according to feedback.",
      companyLogo: "💰",
      responseTime: "Responded in 1 week"
    },
    {
      id: 8,
      company: "EcommerceGiant",
      position: "Senior React Developer",
      appliedDate: "2025-08-16",
      status: "interview_scheduled",
      location: "Los Angeles, CA",
      jobType: "Part-time",
      salary: "$105,000 - $135,000",
      applicationMethod: "LinkedIn",
      notes: "Second round interview next week. Technical round completed.",
      companyLogo: "🛒",
      responseTime: "Responded in 2 days"
    },
    {
      id: 9,
      company: "AI Innovations",
      position: "Frontend Engineer",
      appliedDate: "2025-08-15",
      status: "under_review",
      location: "Chicago, IL",
      jobType: "Remote",
      salary: "$95,000 - $125,000",
      applicationMethod: "Job Board",
      notes: "AI/ML focused company. Very interested in the role.",
      companyLogo: "🤖",
      responseTime: "2-3 weeks expected"
    },
    {
      id: 10,
      company: "MediaStream Co",
      position: "Web Developer",
      appliedDate: "2025-08-14",
      status: "withdrawn",
      location: "Miami, FL",
      jobType: "Contract",
      salary: "$65,000 - $85,000",
      applicationMethod: "Company Website",
      notes: "Withdrew application due to salary mismatch.",
      companyLogo: "📺",
      responseTime: "Self-withdrawn"
    }
  ];
  const sortedApplications = [...jobApplications].sort((a, b) => {
    switch (sortBy) {
      case "company-az":
        return a.company.localeCompare(b.company);
      case "company-za":
        return b.company.localeCompare(a.company);
      case "date":
        return new Date(b.appliedDate) - new Date(a.appliedDate);
      case "date-old":
        return new Date(a.appliedDate) - new Date(b.appliedDate);
      default:
        return a.company.localeCompare(b.company);
    }
  });
  const getTimeBasedCounts = () => {
    const now = /* @__PURE__ */ new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1e3);
    const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1e3);
    const thisWeek = jobApplications.filter((app) => {
      const appDate = new Date(app.appliedDate);
      return appDate >= oneWeekAgo;
    }).length;
    const thisMonth = jobApplications.filter((app) => {
      const appDate = new Date(app.appliedDate);
      return appDate >= oneMonthAgo;
    }).length;
    return { thisWeek, thisMonth };
  };
  const timeCounts = getTimeBasedCounts();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "job-applications", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "applications-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "header-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "My Job Applications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Track all your job applications and their current status" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "applications-stats", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-card primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-number", children: jobApplications.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "Total Applications Sent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-description", children: "All time applications" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-card secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-number", children: timeCounts.thisMonth }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-label", children: "Applications This Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-description", children: "Last 30 days activity" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "applications-controls", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sort-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "sort-by", children: "Sort by:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "sort-by",
          value: sortBy,
          onChange: (e) => setSortBy(e.target.value),
          className: "sort-select",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "company-az", children: "Company Name (A-Z)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "company-za", children: "Company Name (Z-A)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date", children: "Application Date (Newest First)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "date-old", children: "Application Date (Oldest First)" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "applications-list", style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "1.5rem"
    }, children: sortedApplications.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "no-applications", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-applications-icon", children: "📝" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "No applications found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No applications match your current filter criteria." })
    ] }) : sortedApplications.map((application) => {
      const jobData = {
        id: application.id,
        title: application.position,
        company: application.company,
        location: application.location,
        appliedDate: application.appliedDate,
        salary: application.salary,
        description: `Applied via ${application.applicationMethod}`,
        source: application.applicationMethod,
        applicationMethod: application.applicationMethod,
        tags: [application.jobType, application.salary ? "Salary Listed" : "Salary TBD"].filter(Boolean)
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        UniversalJobCard,
        {
          job: jobData,
          showMatchScore: false,
          showHeart: false,
          showSource: true,
          variant: "application",
          onApply: (job) => {
            console.log("View application for:", job.title);
          }
        },
        application.id
      );
    }) })
  ] });
}
const AcademicTemplate = ({ data }) => {
  const defaultData = {
    name: "ELLIOT WU",
    photo: null,
    // Photo URL or base64 string
    location: "PHILADELPHIA, PA 19001",
    phone: "(555) 555-5555",
    email: "EXAMPLE@EXAMPLE.COM",
    summary: "Results-driven marketing researcher with over 10 years of experience specializing in consumer behavior, brand strategy and digital marketing analytics. Proven expertise in leading cross-functional research projects, delivering actionable insights and driving 15% year-over-year revenue growth for Fortune 500 clients. Skilled in advanced statistical methods, market segmentation and developing predictive models that optimize marketing strategies. Published author with a strong track record of impactful research and peer-reviewed articles.",
    qualifications: {
      left: [
        "Quantitative and qualitative research",
        "Consumer behavior analysis",
        "Digital marketing analytics",
        "Data visualization (Tableau, Power BI)"
      ],
      right: [
        "Advanced statistical analysis (R, Python)",
        "Predictive modeling and machine learning",
        "Survey design and administration",
        "Strategic communication and reporting"
      ]
    },
    education: [
      {
        degree: "Master of Science - Digital Marketing",
        school: "Temple University",
        location: "Philadelphia, PA",
        details: [
          "GPA: 3.8",
          "Honors: Magna cum laude",
          "Thesis: Measuring the Effectiveness of Influencer Marketing Across Different Social Media Platforms"
        ]
      },
      {
        degree: "Certificate - Business Analytics",
        school: "Temple University",
        location: "Philadelphia, PA",
        details: []
      },
      {
        degree: "Bachelor of Science - Marketing",
        school: "Temple University",
        location: "Philadelphia, PA",
        details: [
          "GPA: 3.8",
          "Honors: Magna cum laude",
          "Minor: Advertising",
          "Student Marketing Club, President"
        ]
      }
    ],
    experience: [
      {
        company: "CMI Media Group",
        position: "Senior Marketing Research Analyst",
        location: "Philadelphia, PA",
        period: "January 2018 to Current",
        responsibilities: [
          "Direct consumer segmentation studies for global clients, increasing customer retention by 20%.",
          "Design and implement predictive models that enhanced campaign ROI by 25%.",
          "Manage a team of five analysts, delivering 98% of research projects under budget and ahead of schedule."
        ]
      },
      {
        company: "Insight Global",
        position: "Marketing Research Consultant",
        location: "Philadelphia, PA",
        period: "May 2015 to December 2017",
        responsibilities: [
          "Conducted in-depth qualitative and quantitative research for 12 startups, leading to an average 18% increase in market share.",
          "Developed competitive benchmarking reports that informed strategic decisions for five key industries."
        ]
      }
    ]
  };
  const templateData = data || defaultData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "academic-template", style: {
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "white",
    color: "black",
    padding: "24px",
    maxWidth: "768px",
    margin: "0 auto",
    fontSize: "12px",
    lineHeight: "1.4"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      borderTop: "8px solid #3B82F6",
      width: "100%",
      marginBottom: "16px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
      color: "#3B82F6",
      fontSize: "24px",
      fontWeight: "normal",
      textAlign: "center",
      marginBottom: "4px"
    }, children: templateData.name }),
    templateData.photo && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "12px"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: templateData.photo,
        alt: "Profile",
        style: {
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #3B82F6"
        }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      textAlign: "center",
      fontSize: "12px",
      fontWeight: "800",
      lineHeight: "none",
      margin: "0"
    }, children: templateData.location }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
      textAlign: "center",
      fontSize: "12px",
      fontWeight: "800",
      lineHeight: "none",
      marginBottom: "12px"
    }, children: [
      templateData.phone,
      " | ",
      templateData.email
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: {
      border: "none",
      borderTop: "1px dotted #9CA3AF",
      marginBottom: "12px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      fontSize: "12px",
      fontWeight: "800",
      marginBottom: "4px"
    }, children: "SUMMARY STATEMENT" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      fontSize: "12px",
      marginBottom: "16px"
    }, children: templateData.summary }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: {
      border: "none",
      borderTop: "1px dotted #9CA3AF",
      marginBottom: "12px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      fontSize: "12px",
      fontWeight: "800",
      marginBottom: "8px"
    }, children: "CORE QUALIFICATIONS" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px 24px",
      fontSize: "12px",
      marginBottom: "16px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
        listStyle: "disc",
        paddingLeft: "16px",
        margin: "0"
      }, children: templateData.qualifications.left.map((qualification, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: "2px" }, children: qualification }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
        listStyle: "disc",
        paddingLeft: "16px",
        margin: "0"
      }, children: templateData.qualifications.right.map((qualification, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: "2px" }, children: qualification }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      fontSize: "12px",
      fontWeight: "800",
      marginBottom: "4px"
    }, children: "EDUCATION" }),
    templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "8px" }, children: [
      edu.degree && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        fontSize: "12px",
        fontWeight: "800",
        marginBottom: "2px"
      }, children: edu.degree }),
      (edu.school || edu.location) && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
        fontSize: "12px",
        marginBottom: "2px"
      }, children: [
        edu.school,
        " ",
        edu.school && edu.location && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: "normal" }, children: [
          " // ",
          edu.location
        ] })
      ] }),
      edu.details && edu.details.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
        listStyle: "disc",
        paddingLeft: "16px",
        fontSize: "12px",
        marginBottom: "8px"
      }, children: edu.details.map((detail, detailIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: "2px" }, children: detail.includes("Honors:") ? /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: detail.replace("Honors: ", "") }) : detail }, detailIndex)) })
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
      fontSize: "12px",
      fontWeight: "800",
      marginBottom: "4px"
    }, children: "WORK EXPERIENCE" }),
    templateData.experience.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: index < templateData.experience.length - 1 ? "12px" : "0" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        fontSize: "12px",
        fontWeight: "800",
        marginBottom: "2px"
      }, children: exp.company }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
        fontSize: "12px",
        marginBottom: "2px"
      }, children: [
        exp.position,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontWeight: "normal" }, children: [
          "// ",
          exp.location,
          " // ",
          exp.period
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
        listStyle: "disc",
        paddingLeft: "16px",
        fontSize: "12px",
        marginBottom: index < templateData.experience.length - 1 ? "12px" : "0"
      }, children: exp.responsibilities.map((responsibility, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: "2px" }, children: responsibility }, respIndex)) })
    ] }, index))
  ] });
};
const CreativeTemplate = ({ data }) => {
  const defaultData = {
    name: "OLIVIA WILSON",
    title: "Marketing Manager",
    photo: null,
    // Photo URL or base64 string
    contact: {
      email: "hello@reallygreatsite.com",
      phone: "+123-456-7890",
      address: "123 Anywhere St., Any City",
      website: "reallygreatsite.com"
    },
    about: "An experienced Marketing Manager with exceptional skills in creating marketing plans, launching products, promoting them, and increasing brand awareness. I'm creative, detail-oriented, a team player, with extensive world media audience engagement, and brand management.",
    education: [
      {
        degree: "Master of Business",
        school: "Wardiere University",
        period: "2016 - 2018"
      },
      {
        degree: "BA Sales and Commerce",
        school: "Wardiere University",
        period: "2012 - 2016"
      }
    ],
    skills: [
      "BCR Calculations",
      "Social media marketing",
      "Product development lifecycle",
      "Marketing strategy",
      "Product promotion",
      "Value propositions"
    ],
    languages: ["English", "French"],
    experience: [
      {
        position: "Marketing Manager",
        company: "Borcelle Company",
        period: "Aug 2018 - present",
        responsibilities: [
          "Handled various office tasks.",
          "Constantly updated the company's content and mailing lists.",
          "Monitored ongoing marketing campaigns.",
          "Increased sales coverage."
        ]
      },
      {
        position: "Marketing Assistant",
        company: "Timmerman Industries",
        period: "Jul 2016 - Aug 2018",
        responsibilities: [
          "Handled the company's online presence — regularly updated the company's website and various social media accounts.",
          "Monitored ongoing marketing campaigns."
        ]
      },
      {
        position: "Marketing Assistant",
        company: "Utenim & Co",
        period: "Aug 2014 - Jul 2016",
        responsibilities: [
          "Handled the company's online presence — regularly updated the company's website and various social media accounts."
        ]
      }
    ],
    references: [
      {
        name: "Estelle Darcy",
        title: "Wardiere Inc. | CEO",
        phone: "+123-456-7890",
        email: "hello@reallygreatsite.com"
      },
      {
        name: "Harper Russo",
        title: "Timmerman | CEO",
        phone: "+123-456-7890",
        email: "hello@reallygreatsite.com"
      }
    ]
  };
  const templateData = data || defaultData;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f3f4f6",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: {
    maxWidth: "1024px",
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { style: {
      width: "33.333333%",
      backgroundColor: "#2c3e50",
      color: "white",
      padding: "32px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "144px",
        height: "144px",
        borderRadius: "50%",
        border: "4px solid #9CA3AF",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#2c3e50",
        backgroundImage: templateData.photo ? `url(${templateData.photo})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }, children: !templateData.photo && templateData.name.split(" ").map((n) => n[0]).join("") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: "bold",
          borderBottom: "2px solid #6B7280",
          paddingBottom: "8px",
          marginBottom: "16px",
          fontFamily: "'League Spartan', sans-serif"
        }, children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
            display: "flex",
            alignItems: "center",
            margin: "0",
            fontSize: "14px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: "12px" }, children: "✉️" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: templateData.contact.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
            display: "flex",
            alignItems: "center",
            margin: "0",
            fontSize: "14px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: "12px" }, children: "📞" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: templateData.contact.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
            display: "flex",
            alignItems: "center",
            margin: "0",
            fontSize: "14px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: "12px" }, children: "📍" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: templateData.contact.address })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
            display: "flex",
            alignItems: "center",
            margin: "0",
            fontSize: "14px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { marginRight: "12px" }, children: "🌐" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: templateData.contact.website })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: "bold",
          borderBottom: "2px solid #6B7280",
          paddingBottom: "8px",
          marginBottom: "16px",
          fontFamily: "'League Spartan', sans-serif"
        }, children: "Education" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontWeight: "600",
            margin: "0",
            fontSize: "14px"
          }, children: edu.degree }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontStyle: "italic",
            fontSize: "12px",
            margin: "0",
            color: "#E5E7EB"
          }, children: edu.school }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "10px",
            color: "#D1D5DB",
            margin: "0"
          }, children: edu.period })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: "bold",
          borderBottom: "2px solid #6B7280",
          paddingBottom: "8px",
          marginBottom: "16px",
          fontFamily: "'League Spartan', sans-serif"
        }, children: "Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
          listStyle: "disc",
          paddingLeft: "16px",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }, children: templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { fontSize: "14px" }, children: skill }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: "bold",
          borderBottom: "2px solid #6B7280",
          paddingBottom: "8px",
          marginBottom: "16px",
          fontFamily: "'League Spartan', sans-serif"
        }, children: "Language" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: templateData.languages.map((language, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0", fontSize: "14px" }, children: language }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      width: "66.666667%",
      padding: "32px",
      color: "#374151"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { style: {
        marginBottom: "40px",
        textAlign: "left"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
          fontSize: "48px",
          fontWeight: "bold",
          color: "#1F2937",
          margin: "0",
          fontFamily: "'League Spartan', sans-serif"
        }, children: templateData.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "20px",
          color: "#6B7280",
          marginTop: "4px",
          margin: "4px 0 0 0"
        }, children: templateData.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "32px",
          fontWeight: "bold",
          color: "#1F2937",
          borderBottom: "2px solid #E5E7EB",
          paddingBottom: "8px",
          marginBottom: "16px",
          fontFamily: "'League Spartan', sans-serif"
        }, children: "About Me" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          lineHeight: "1.625",
          margin: "0",
          fontSize: "14px"
        }, children: templateData.about })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "32px",
          fontWeight: "bold",
          color: "#1F2937",
          borderBottom: "2px solid #E5E7EB",
          paddingBottom: "8px",
          marginBottom: "16px",
          fontFamily: "'League Spartan', sans-serif"
        }, children: "Work Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: templateData.experience.map((job, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "18px",
            fontWeight: "600",
            margin: "0"
          }, children: job.position }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "16px",
            color: "#4B5563",
            margin: "0"
          }, children: job.company }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "14px",
            color: "#6B7280",
            fontStyle: "italic",
            margin: "0"
          }, children: job.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
            listStyle: "disc",
            paddingLeft: "16px",
            marginTop: "8px",
            margin: "8px 0 0 16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px"
          }, children: job.responsibilities.map((resp, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { fontSize: "14px" }, children: resp }, respIndex)) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "32px",
          fontWeight: "bold",
          color: "#1F2937",
          borderBottom: "2px solid #E5E7EB",
          paddingBottom: "8px",
          marginBottom: "16px",
          fontFamily: "'League Spartan', sans-serif"
        }, children: "References" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "32px"
        }, children: templateData.references.map((ref, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontWeight: "bold",
            margin: "0",
            fontSize: "14px"
          }, children: ref.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "12px",
            margin: "0"
          }, children: ref.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
            fontSize: "12px",
            marginTop: "4px",
            margin: "4px 0 0 0"
          }, children: [
            "Phone: ",
            ref.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
            fontSize: "12px",
            margin: "0"
          }, children: [
            "Email: ",
            ref.email
          ] })
        ] }, index)) })
      ] })
    ] })
  ] }) });
};
function ResumeTemplates({ onNavigateBack }) {
  const [selectedTemplate, setSelectedTemplate] = reactExports.useState(null);
  const templates = [
    {
      id: "template1",
      name: "Professional",
      description: "Clean and minimalist design for corporate roles",
      color: "#4A6FDC",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "professional-preview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-name", children: "JOHN DOE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-title", children: "Senior Product Manager" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-divider" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-contact", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📧 john.doe@example.com" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📱 (123) 456-7890" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📍 San Francisco, CA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🔗 linkedin.com/in/johndoe" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-section-title", children: "PROFESSIONAL SUMMARY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-text-content", children: "Results-driven Product Manager with 8+ years of experience leading cross-functional teams to deliver innovative digital products. Proven track record in market analysis, product strategy, and agile development." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-section-title", children: "WORK EXPERIENCE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-experience", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-job-header", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-job-title", children: "Senior Product Manager" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-job-date", children: "2019 - Present" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-company", children: "TechSolutions Inc., San Francisco, CA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-responsibilities", children: [
                  "• Led product strategy and roadmap for SaaS platform, resulting in 40% increase in user engagement",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Managed cross-functional team of 12 engineers, designers, and marketers using Agile methodologies",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Conducted market research and competitive analysis to identify $2M revenue opportunity"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-experience", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-job-header", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-job-title", children: "Product Manager" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-job-date", children: "2016 - 2019" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-company", children: "Digital Innovations Co., New York, NY" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-responsibilities", children: [
                  "• Launched mobile app that acquired 500K users in first 6 months",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Collaborated with UX team to redesign onboarding flow, reducing drop-off rate by 35%",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "• Established product metrics framework to track KPIs and inform roadmap priorities"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-section-title", children: "TECHNICAL SKILLS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-skills", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-skill", children: "Product Strategy & Roadmapping" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-skill", children: "Market Research & Analysis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-skill", children: "Agile & Scrum Methodologies" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-skill", children: "Data Analysis & Metrics" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-skill", children: "User Experience Design" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-section-title", children: "BUSINESS SKILLS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-skills", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-skill", children: "Strategic Planning" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-skill", children: "Cross-functional Leadership" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-skill", children: "Stakeholder Management" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-skill", children: "Financial Analysis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-skill", children: "Go-to-Market Strategy" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-section-title", children: "EDUCATION" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-education", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-degree", children: "MBA, Business Administration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-school", children: "Stanford University" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-date", children: "2014 - 2016" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-education", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-degree", children: "BS, Computer Science" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-school", children: "University of California, Berkeley" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-date", children: "2010 - 2014" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-section-title", children: "CERTIFICATIONS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-certifications", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-certification", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-cert-name", children: "Certified Scrum Product Owner" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-cert-issuer", children: "Scrum Alliance, 2018" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-certification", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-cert-name", children: "Google Analytics Certification" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-cert-issuer", children: "Google, 2017" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-section", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-section-title", children: "LANGUAGES" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-languages", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-language", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "preview-lang-name", children: "English" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "preview-lang-level", children: "Native" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-language", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "preview-lang-name", children: "Spanish" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "preview-lang-level", children: "Professional" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "preview-language", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "preview-lang-name", children: "French" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "preview-lang-level", children: "Intermediate" })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] })
    },
    {
      id: "template2",
      name: "Creative",
      description: "Bold layout for design and creative positions",
      color: "#FF7B54",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        height: "100%",
        backgroundImage: 'url("/creative.jpg")',
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "4px"
      } })
    },
    {
      id: "template3",
      name: "Academic",
      description: "Structured format for research and education roles",
      color: "#6E44FF",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        height: "100%",
        backgroundImage: 'url("/Acedemic.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "4px"
      } })
    },
    {
      id: "template4",
      name: "Technical",
      description: "Optimized for IT and engineering positions",
      color: "#2AB3A6",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        height: "100%",
        backgroundImage: 'url("/Technical.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "4px"
      } })
    },
    {
      id: "template5",
      name: "Executive",
      description: "Sophisticated design for leadership positions",
      color: "#345995",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        height: "100%",
        backgroundImage: 'url("/Executive.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "4px"
      } })
    },
    {
      id: "template6",
      name: "Modern",
      description: "Contemporary layout with clean typography",
      color: "#FB4D3D",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        height: "100%",
        backgroundImage: 'url("/mordern.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "4px"
      } })
    },
    {
      id: "template7",
      name: "Simple",
      description: "Straightforward and effective for all positions",
      color: "#03CEA4",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        height: "100%",
        backgroundImage: 'url("/simple.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "4px"
      } })
    },
    {
      id: "template8",
      name: "Entry-Level",
      description: "Perfect for graduates and first-time job seekers",
      color: "#6ea6b9",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        height: "100%",
        backgroundImage: 'url("/entry-level.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "4px"
      } })
    },
    {
      id: "template9",
      name: "Chronological",
      description: "Timeline-based layout focusing on work history",
      color: "#118AB2",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 200 280", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "280", fill: "#ffffff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "20", width: "180", height: "30", fill: "#118AB220" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "30", width: "100", height: "10", fill: "#118AB260" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "30", y1: "70", x2: "30", y2: "250", stroke: "#118AB2", strokeWidth: "2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "90", r: "6", fill: "#118AB2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "80", width: "60", height: "8", fill: "#118AB280" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "95", width: "40", height: "6", fill: "#118AB240" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "110", width: "135", height: "6", fill: "#118AB220" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "125", width: "135", height: "6", fill: "#118AB220" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "150", r: "6", fill: "#118AB2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "140", width: "60", height: "8", fill: "#118AB280" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "155", width: "40", height: "6", fill: "#118AB240" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "170", width: "135", height: "6", fill: "#118AB220" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "185", width: "135", height: "6", fill: "#118AB220" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "30", cy: "210", r: "6", fill: "#118AB2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "200", width: "60", height: "8", fill: "#118AB280" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "215", width: "40", height: "6", fill: "#118AB240" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "230", width: "135", height: "6", fill: "#118AB220" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "45", y: "245", width: "135", height: "6", fill: "#118AB220" })
      ] })
    },
    {
      id: "template10",
      name: "Skills-Based",
      description: "Emphasizes competencies over work history",
      color: "#FFD166",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 200 280", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "280", fill: "#ffffff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "20", width: "180", height: "40", fill: "#FFD16610" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "30", width: "120", height: "10", fill: "#FFD16680" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "45", width: "80", height: "6", fill: "#FFD16660" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "80", width: "80", height: "8", fill: "#FFD166" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "95", width: "180", height: "6", fill: "#FFD16640", rx: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "95", width: "150", height: "6", fill: "#FFD166", rx: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "110", width: "180", height: "6", fill: "#FFD16640", rx: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "110", width: "120", height: "6", fill: "#FFD166", rx: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "125", width: "180", height: "6", fill: "#FFD16640", rx: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "125", width: "160", height: "6", fill: "#FFD166", rx: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "140", width: "180", height: "6", fill: "#FFD16640", rx: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "140", width: "90", height: "6", fill: "#FFD166", rx: "3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "170", width: "80", height: "8", fill: "#FFD166" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "185", width: "180", height: "6", fill: "#FFD16620" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "200", width: "180", height: "6", fill: "#FFD16620" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "230", width: "80", height: "8", fill: "#FFD166" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "245", width: "180", height: "6", fill: "#FFD16620" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "260", width: "180", height: "6", fill: "#FFD16620" })
      ] })
    },
    {
      id: "template11",
      name: "Combination",
      description: "Balances skills and experience effectively",
      color: "#073B4C",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 200 280", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "280", fill: "#ffffff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "60", fill: "#073B4C" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "30", r: "20", fill: "white", fillOpacity: "0.2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "70", y: "20", width: "120", height: "10", fill: "white", fillOpacity: "0.3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "70", y: "35", width: "80", height: "6", fill: "white", fillOpacity: "0.2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "70", width: "85", height: "100", fill: "#073B4C10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "80", width: "65", height: "8", fill: "#073B4C50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "95", width: "65", height: "6", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "110", width: "65", height: "6", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "125", width: "65", height: "6", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "20", y: "140", width: "65", height: "6", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "105", y: "80", width: "85", height: "8", fill: "#073B4C50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "105", y: "95", width: "85", height: "6", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "105", y: "110", width: "85", height: "6", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "105", y: "125", width: "85", height: "6", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "180", width: "180", height: "1", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "190", width: "80", height: "8", fill: "#073B4C50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "205", width: "180", height: "6", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "220", width: "180", height: "6", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "235", width: "180", height: "6", fill: "#073B4C30" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "250", width: "180", height: "6", fill: "#073B4C30" })
      ] })
    },
    {
      id: "template12",
      name: "ATS-Optimized",
      description: "Designed to pass applicant tracking systems",
      color: "#06D6A0",
      previewContent: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 200 280", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "200", height: "280", fill: "#ffffff" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "20", width: "180", height: "15", fill: "#06D6A080" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "45", width: "120", height: "10", fill: "#06D6A060" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "65", width: "180", height: "2", fill: "#06D6A0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "80", width: "80", height: "8", fill: "#06D6A0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "95", width: "180", height: "6", fill: "#06D6A020" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "110", width: "180", height: "6", fill: "#06D6A020" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "125", width: "180", height: "6", fill: "#06D6A020" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "140", width: "180", height: "6", fill: "#06D6A020" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "165", width: "80", height: "8", fill: "#06D6A0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "180", width: "180", height: "6", fill: "#06D6A020" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "195", width: "180", height: "6", fill: "#06D6A020" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "210", width: "180", height: "6", fill: "#06D6A020" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "225", width: "180", height: "6", fill: "#06D6A020" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "250", width: "180", height: "15", fill: "#06D6A040" })
      ] })
    }
  ];
  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    if (template.id === "template1") {
      const event = new CustomEvent("navigate", {
        detail: { page: "professional-resume-template" }
      });
      window.dispatchEvent(event);
    } else if (template.id === "template2") {
      const event = new CustomEvent("navigate", {
        detail: { page: "creative-resume-template" }
      });
      window.dispatchEvent(event);
    } else if (template.id === "template3") {
      const event = new CustomEvent("navigate", {
        detail: { page: "academic-resume-template" }
      });
      window.dispatchEvent(event);
    } else if (template.id === "template4") {
      const event = new CustomEvent("navigate", {
        detail: { page: "technical-resume-template" }
      });
      window.dispatchEvent(event);
    } else if (template.id === "template5") {
      const event = new CustomEvent("navigate", {
        detail: { page: "executive-resume-template" }
      });
      window.dispatchEvent(event);
    } else if (template.id === "template6") {
      const event = new CustomEvent("navigate", {
        detail: { page: "modern-resume-template" }
      });
      window.dispatchEvent(event);
    } else if (template.id === "template7") {
      const event = new CustomEvent("navigate", {
        detail: { page: "simple-resume-template" }
      });
      window.dispatchEvent(event);
    } else if (template.id === "template8") {
      const event = new CustomEvent("navigate", {
        detail: { page: "entry-level-resume-template" }
      });
      window.dispatchEvent(event);
    } else {
      console.log(`Selected template: ${template.name}`);
      alert(`${template.name} template will be available soon!`);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "resume-templates", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "top-bar", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack || (() => window.history.back()),
          "aria-label": "Go back",
          title: "Go back",
          children: "← Back to Tools"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Resume Templates" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "templates-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Choose a Resume Template" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Select from our collection of professional, ATS-friendly templates to get started" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "templates-grid", children: templates.map((template) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "template-card",
        onClick: () => handleSelectTemplate(template),
        style: { borderTopColor: template.color },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "template-preview",
              children: template.previewContent
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-info", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-description", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: template.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: template.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "use-template-btn",
                style: { backgroundColor: template.color },
                children: "Use This Template"
              }
            ) })
          ] })
        ]
      },
      template.id
    )) })
  ] });
}
const ProfessionalTemplate = ({ data }) => {
  const getUserProfileData = () => {
    try {
      const savedProfile = localStorage.getItem("userProfileData");
      if (savedProfile) {
        const profileData = JSON.parse(savedProfile);
        return {
          fullName: profileData.personalInfo?.fullName?.toUpperCase() || "JOHN DOE",
          jobTitle: profileData.experience?.[0]?.title || "Senior Software Engineer",
          email: profileData.personalInfo?.email || "john.doe@email.com",
          phone: profileData.personalInfo?.phone || "(555) 123-4567",
          location: profileData.personalInfo?.location || "San Francisco, CA",
          linkedin: profileData.personalInfo?.linkedin || "linkedin.com/in/johndoe",
          summary: profileData.personalInfo?.aboutMe || "Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.",
          experiences: profileData.experience?.map((exp) => ({
            title: exp.title || "",
            company: exp.company || "",
            location: profileData.personalInfo?.location || "",
            startDate: exp.duration?.split(" - ")[0] || "",
            endDate: exp.duration?.split(" - ")[1] || "",
            responsibilities: [exp.description || ""]
          })) || [{
            title: "Senior Software Engineer",
            company: "Tech Corp",
            location: "San Francisco, CA",
            startDate: "2020",
            endDate: "Present",
            responsibilities: [
              "Led development of microservices architecture serving 1M+ users",
              "Mentored junior developers and conducted code reviews",
              "Implemented CI/CD pipelines reducing deployment time by 50%"
            ]
          }],
          education: profileData.education?.map((edu) => ({
            degree: edu.degree || "",
            school: edu.school || "",
            startDate: edu.year?.split(" - ")[0] || "",
            endDate: edu.year?.split(" - ")[1] || ""
          })) || [{
            degree: "Bachelor of Science in Computer Science",
            school: "University of Technology",
            startDate: "2012",
            endDate: "2016"
          }],
          technicalSkills: profileData.skills?.slice(0, Math.ceil((profileData.skills?.length || 0) / 2)) || ["JavaScript", "React", "Node.js", "Python", "Docker"],
          businessSkills: profileData.skills?.slice(Math.ceil((profileData.skills?.length || 0) / 2)) || ["Project Management", "Team Leadership", "Agile/Scrum"],
          certifications: [{
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            year: "2022"
          }],
          languages: [{
            language: "English",
            proficiency: "Native"
          }]
        };
      }
    } catch (error) {
      console.error("Error loading profile data:", error);
    }
    return {
      fullName: "JOHN DOE",
      jobTitle: "Senior Software Engineer",
      email: "john.doe@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johndoe",
      summary: "Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.",
      experiences: [{
        title: "Senior Software Engineer",
        company: "Tech Corp",
        location: "San Francisco, CA",
        startDate: "2020",
        endDate: "Present",
        responsibilities: [
          "Led development of microservices architecture serving 1M+ users",
          "Mentored junior developers and conducted code reviews",
          "Implemented CI/CD pipelines reducing deployment time by 50%"
        ]
      }],
      education: [{
        degree: "Bachelor of Science in Computer Science",
        school: "University of Technology",
        startDate: "2012",
        endDate: "2016"
      }],
      technicalSkills: ["JavaScript", "React", "Node.js", "Python", "Docker"],
      businessSkills: ["Project Management", "Team Leadership", "Agile/Scrum"],
      certifications: [{
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2022"
      }],
      languages: [{
        language: "English",
        proficiency: "Native"
      }]
    };
  };
  const templateData = data || getUserProfileData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    fontFamily: "Inter, sans-serif",
    maxWidth: "1024px",
    margin: "0 auto",
    background: "white",
    color: "#333",
    lineHeight: "1.6"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "#4A5568 !important",
      color: "white !important",
      padding: "2.5rem 2rem",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
        fontSize: "3rem !important",
        fontWeight: "700 !important",
        margin: "0 0 0.5rem 0 !important",
        letterSpacing: "0.05em !important",
        color: "white !important"
      }, children: templateData.fullName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontSize: "1.5rem !important",
        color: "#e5e7eb !important",
        margin: "0 0 1.5rem 0 !important",
        fontWeight: "400 !important"
      }, children: templateData.jobTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        justifyContent: "center",
        gap: "2.5rem",
        flexWrap: "wrap",
        fontSize: "1rem !important",
        color: "white !important"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "white !important" }, children: [
          "📧 ",
          templateData.email
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "white !important" }, children: [
          "📞 ",
          templateData.phone
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "white !important" }, children: [
          "📍 ",
          templateData.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "white !important" }, children: [
          "🔗 ",
          templateData.linkedin
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3rem",
      padding: "2.5rem"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "2.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: "1.4rem !important",
            fontWeight: "600 !important",
            color: "#4A5568 !important",
            marginBottom: "1rem !important",
            borderBottom: "3px solid #3182CE !important",
            paddingBottom: "0.5rem !important"
          }, children: "Professional Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            lineHeight: "1.7 !important",
            margin: "0 !important",
            color: "#4A5568 !important",
            fontSize: "0.95rem !important"
          }, children: templateData.summary })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: "1.4rem !important",
            fontWeight: "600 !important",
            color: "#4A5568 !important",
            marginBottom: "1.5rem !important",
            borderBottom: "3px solid #3182CE !important",
            paddingBottom: "0.5rem !important"
          }, children: "Work Experience" }),
          templateData.experiences.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "2rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "0.75rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                fontWeight: "600 !important",
                color: "#4A5568 !important",
                fontSize: "1.1rem !important",
                marginBottom: "0.25rem !important"
              }, children: exp.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
                color: "#718096 !important",
                fontWeight: "500 !important",
                marginBottom: "0.25rem !important"
              }, children: [
                exp.company,
                " • ",
                exp.location
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
                color: "#A0AEC0 !important",
                fontSize: "0.9rem !important"
              }, children: [
                exp.startDate,
                " - ",
                exp.endDate
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
              listStyleType: "disc !important",
              paddingLeft: "1.5rem !important",
              color: "#4A5568 !important",
              margin: "0 !important"
            }, children: exp.responsibilities.map((resp, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: {
              marginBottom: "0.4rem !important",
              fontSize: "0.95rem !important",
              color: "#4A5568 !important"
            }, children: resp }, respIndex)) })
          ] }, index))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "2.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: "1.4rem !important",
            fontWeight: "600 !important",
            color: "#4A5568 !important",
            marginBottom: "1.5rem !important",
            borderBottom: "3px solid #3182CE !important",
            paddingBottom: "0.5rem !important"
          }, children: "Skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.5rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: {
              fontWeight: "600 !important",
              marginBottom: "0.75rem !important",
              color: "#4A5568 !important",
              fontSize: "1.1rem !important"
            }, children: "Technical Skills" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem"
            }, children: templateData.technicalSkills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              background: "#EDF2F7 !important",
              padding: "0.4rem 0.8rem !important",
              borderRadius: "6px !important",
              fontSize: "0.9rem !important",
              color: "#4A5568 !important",
              fontWeight: "500 !important"
            }, children: skill }, index)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: {
              fontWeight: "600 !important",
              marginBottom: "0.75rem !important",
              color: "#4A5568 !important",
              fontSize: "1.1rem !important"
            }, children: "Business Skills" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem"
            }, children: templateData.businessSkills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              background: "#EDF2F7 !important",
              padding: "0.4rem 0.8rem !important",
              borderRadius: "6px !important",
              fontSize: "0.9rem !important",
              color: "#4A5568 !important",
              fontWeight: "500 !important"
            }, children: skill }, index)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "2.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: "1.4rem !important",
            fontWeight: "600 !important",
            color: "#4A5568 !important",
            marginBottom: "1.5rem !important",
            borderBottom: "3px solid #3182CE !important",
            paddingBottom: "0.5rem !important"
          }, children: "Education" }),
          templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.25rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontWeight: "600 !important",
              color: "#4A5568 !important",
              fontSize: "1.05rem !important",
              marginBottom: "0.25rem !important"
            }, children: edu.degree }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              color: "#718096 !important",
              fontWeight: "500 !important",
              marginBottom: "0.25rem !important"
            }, children: edu.school }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
              color: "#A0AEC0 !important",
              fontSize: "0.9rem !important"
            }, children: [
              edu.startDate,
              " - ",
              edu.endDate
            ] })
          ] }, index))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "2.5rem" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: "1.4rem !important",
            fontWeight: "600 !important",
            color: "#4A5568 !important",
            marginBottom: "1.5rem !important",
            borderBottom: "3px solid #3182CE !important",
            paddingBottom: "0.5rem !important"
          }, children: "Certifications" }),
          templateData.certifications.map((cert, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "1.25rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontWeight: "600 !important",
              color: "#4A5568 !important",
              fontSize: "1.05rem !important",
              marginBottom: "0.25rem !important"
            }, children: cert.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              color: "#718096 !important",
              fontWeight: "500 !important",
              marginBottom: "0.25rem !important"
            }, children: cert.issuer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              color: "#A0AEC0 !important",
              fontSize: "0.9rem !important"
            }, children: cert.year })
          ] }, index))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontSize: "1.4rem !important",
            fontWeight: "600 !important",
            color: "#4A5568 !important",
            marginBottom: "1.5rem !important",
            borderBottom: "3px solid #3182CE !important",
            paddingBottom: "0.5rem !important"
          }, children: "Languages" }),
          templateData.languages.map((lang, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "0.75rem" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              fontWeight: "600 !important",
              color: "#4A5568 !important",
              fontSize: "1.05rem !important",
              marginBottom: "0.25rem !important"
            }, children: lang.language }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
              color: "#718096 !important",
              fontSize: "0.9rem !important"
            }, children: lang.proficiency })
          ] }, index))
        ] })
      ] })
    ] })
  ] });
};
const ProfessionalTemplateEditor = ({ onNavigateBack, onSave, initialData }) => {
  const getUserProfileData = () => {
    try {
      const savedProfile = localStorage.getItem("userProfileData");
      if (savedProfile) {
        const profileData = JSON.parse(savedProfile);
        return {
          fullName: profileData.personalInfo?.fullName?.toUpperCase() || "JOHN DOE",
          jobTitle: profileData.experience?.[0]?.title || "Senior Software Engineer",
          email: profileData.personalInfo?.email || "john.doe@email.com",
          phone: profileData.personalInfo?.phone || "(555) 123-4567",
          location: profileData.personalInfo?.location || "San Francisco, CA",
          linkedin: profileData.personalInfo?.linkedin || "linkedin.com/in/johndoe",
          summary: profileData.personalInfo?.aboutMe || "Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.",
          experiences: profileData.experience?.map((exp) => ({
            title: exp.title || "",
            company: exp.company || "",
            location: profileData.personalInfo?.location || "",
            startDate: exp.duration?.split(" - ")[0] || "",
            endDate: exp.duration?.split(" - ")[1] || "",
            responsibilities: [exp.description || ""]
          })) || [{
            title: "Senior Software Engineer",
            company: "Tech Corp",
            location: "San Francisco, CA",
            startDate: "2020",
            endDate: "Present",
            responsibilities: [
              "Led development of microservices architecture serving 1M+ users",
              "Mentored junior developers and conducted code reviews",
              "Implemented CI/CD pipelines reducing deployment time by 50%"
            ]
          }],
          education: profileData.education?.map((edu) => ({
            degree: edu.degree || "",
            school: edu.school || "",
            startDate: edu.year?.split(" - ")[0] || "",
            endDate: edu.year?.split(" - ")[1] || ""
          })) || [{
            degree: "Bachelor of Science in Computer Science",
            school: "University of Technology",
            startDate: "2012",
            endDate: "2016"
          }],
          technicalSkills: profileData.skills?.slice(0, Math.ceil((profileData.skills?.length || 0) / 2)) || ["JavaScript", "React", "Node.js", "Python", "Docker"],
          businessSkills: profileData.skills?.slice(Math.ceil((profileData.skills?.length || 0) / 2)) || ["Project Management", "Team Leadership", "Agile/Scrum"],
          certifications: [{
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            year: "2022"
          }],
          languages: [{
            language: "English",
            proficiency: "Native"
          }]
        };
      }
    } catch (error) {
      console.error("Error loading profile data:", error);
    }
    return {
      fullName: "JOHN DOE",
      jobTitle: "Senior Software Engineer",
      email: "john.doe@email.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johndoe",
      summary: "Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.",
      experiences: [{
        title: "Senior Software Engineer",
        company: "Tech Corp",
        location: "San Francisco, CA",
        startDate: "2020",
        endDate: "Present",
        responsibilities: [
          "Led development of microservices architecture serving 1M+ users",
          "Mentored junior developers and conducted code reviews",
          "Implemented CI/CD pipelines reducing deployment time by 50%"
        ]
      }],
      education: [{
        degree: "Bachelor of Science in Computer Science",
        school: "University of Technology",
        startDate: "2012",
        endDate: "2016"
      }],
      technicalSkills: ["JavaScript", "React", "Node.js", "Python", "Docker"],
      businessSkills: ["Project Management", "Team Leadership", "Agile/Scrum"],
      certifications: [{
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2022"
      }],
      languages: [{
        language: "English",
        proficiency: "Native"
      }]
    };
  };
  const [templateData, setTemplateData] = reactExports.useState(initialData || getUserProfileData());
  const [activeSection, setActiveSection] = reactExports.useState("personal");
  const handlePersonalInfoChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSummaryChange = (value) => {
    setTemplateData((prev) => ({
      ...prev,
      summary: value
    }));
  };
  const handleExperienceChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experiences: prev.experiences.map(
        (exp, i) => i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };
  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experiences: prev.experiences.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.map(
            (resp, j) => j === respIndex ? value : resp
          )
        } : exp
      )
    }));
  };
  const addExperience = () => {
    setTemplateData((prev) => ({
      ...prev,
      experiences: [...prev.experiences, {
        title: "",
        company: "",
        location: "",
        startDate: "",
        endDate: "",
        responsibilities: [""]
      }]
    }));
  };
  const removeExperience = (index) => {
    if (templateData.experiences.length > 1) {
      setTemplateData((prev) => ({
        ...prev,
        experiences: prev.experiences.filter((_, i) => i !== index)
      }));
    }
  };
  const addResponsibility = (expIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experiences: prev.experiences.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: [...exp.responsibilities, ""]
        } : exp
      )
    }));
  };
  const removeResponsibility = (expIndex, respIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experiences: prev.experiences.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.filter((_, j) => j !== respIndex)
        } : exp
      )
    }));
  };
  const handleSkillChange = (skillType, index, value) => {
    setTemplateData((prev) => ({
      ...prev,
      [skillType]: prev[skillType].map(
        (skill, i) => i === index ? value : skill
      )
    }));
  };
  const addSkill2 = (skillType) => {
    setTemplateData((prev) => ({
      ...prev,
      [skillType]: [...prev[skillType], ""]
    }));
  };
  const removeSkill = (skillType, index) => {
    if (templateData[skillType].length > 1) {
      setTemplateData((prev) => ({
        ...prev,
        [skillType]: prev[skillType].filter((_, i) => i !== index)
      }));
    }
  };
  const handleEducationChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.map(
        (edu, i) => i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };
  const addEducation2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      education: [...prev.education, {
        degree: "",
        school: "",
        startDate: "",
        endDate: ""
      }]
    }));
  };
  const removeEducation = (index) => {
    if (templateData.education.length > 1) {
      setTemplateData((prev) => ({
        ...prev,
        education: prev.education.filter((_, i) => i !== index)
      }));
    }
  };
  const handleCertificationChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      certifications: prev.certifications.map(
        (cert, i) => i === index ? { ...cert, [field]: value } : cert
      )
    }));
  };
  const addCertification = () => {
    setTemplateData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, {
        name: "",
        issuer: "",
        year: ""
      }]
    }));
  };
  const removeCertification = (index) => {
    if (templateData.certifications.length > 1) {
      setTemplateData((prev) => ({
        ...prev,
        certifications: prev.certifications.filter((_, i) => i !== index)
      }));
    }
  };
  const handleLanguageChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      languages: prev.languages.map(
        (lang, i) => i === index ? { ...lang, [field]: value } : lang
      )
    }));
  };
  const addLanguage = () => {
    setTemplateData((prev) => ({
      ...prev,
      languages: [...prev.languages, {
        language: "",
        proficiency: ""
      }]
    }));
  };
  const removeLanguage = (index) => {
    if (templateData.languages.length > 1) {
      setTemplateData((prev) => ({
        ...prev,
        languages: prev.languages.filter((_, i) => i !== index)
      }));
    }
  };
  const handleSave = () => {
    onSave(templateData);
  };
  const renderPersonalSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Personal Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Full Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: templateData.fullName,
          onChange: (e) => handlePersonalInfoChange("fullName", e.target.value),
          className: "form-input",
          placeholder: "Your Full Name"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Job Title" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          value: templateData.jobTitle,
          onChange: (e) => handlePersonalInfoChange("jobTitle", e.target.value),
          className: "form-input",
          placeholder: "Your Job Title"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: templateData.email,
            onChange: (e) => handlePersonalInfoChange("email", e.target.value),
            className: "form-input",
            placeholder: "your.email@example.com"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.phone,
            onChange: (e) => handlePersonalInfoChange("phone", e.target.value),
            className: "form-input",
            placeholder: "(555) 123-4567"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.location,
            onChange: (e) => handlePersonalInfoChange("location", e.target.value),
            className: "form-input",
            placeholder: "City, State"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.linkedin,
            onChange: (e) => handlePersonalInfoChange("linkedin", e.target.value),
            className: "form-input",
            placeholder: "linkedin.com/in/yourprofile"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Professional Summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: templateData.summary,
          onChange: (e) => handleSummaryChange(e.target.value),
          className: "form-textarea",
          rows: "4",
          placeholder: "Brief professional summary highlighting your experience and key skills..."
        }
      )
    ] })
  ] });
  const renderExperienceSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Work Experience" }),
    templateData.experiences.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Job Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.title,
              onChange: (e) => handleExperienceChange(index, "title", e.target.value),
              className: "form-input",
              placeholder: "Senior Software Engineer"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.company,
              onChange: (e) => handleExperienceChange(index, "company", e.target.value),
              className: "form-input",
              placeholder: "Company Name"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.location,
              onChange: (e) => handleExperienceChange(index, "location", e.target.value),
              className: "form-input",
              placeholder: "San Francisco, CA"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Start Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.startDate,
              onChange: (e) => handleExperienceChange(index, "startDate", e.target.value),
              className: "form-input",
              placeholder: "2020"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "End Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.endDate,
              onChange: (e) => handleExperienceChange(index, "endDate", e.target.value),
              className: "form-input",
              placeholder: "Present"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "responsibilities-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Responsibilities" }),
        exp.responsibilities.map((resp, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: resp,
              onChange: (e) => handleResponsibilityChange(index, respIndex, e.target.value),
              className: "form-textarea",
              rows: "2",
              placeholder: "Describe your key responsibilities and achievements..."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeResponsibility(index, respIndex),
              className: "remove-btn",
              disabled: exp.responsibilities.length === 1,
              children: "✕"
            }
          )
        ] }, respIndex)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => addResponsibility(index),
            className: "add-btn",
            children: "+ Add Responsibility"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeExperience(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          disabled: templateData.experiences.length === 1,
          children: "Remove Experience"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addExperience,
        className: "add-btn",
        children: "+ Add Experience"
      }
    )
  ] });
  const renderSkillsSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Skills" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-subsection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Technical Skills" }),
      templateData.technicalSkills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: skill,
            onChange: (e) => handleSkillChange("technicalSkills", index, e.target.value),
            className: "form-input",
            placeholder: "JavaScript, React, Node.js..."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => removeSkill("technicalSkills", index),
            className: "remove-btn",
            disabled: templateData.technicalSkills.length === 1,
            children: "✕"
          }
        )
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => addSkill2("technicalSkills"),
          className: "add-btn",
          children: "+ Add Technical Skill"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-subsection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Business Skills" }),
      templateData.businessSkills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: skill,
            onChange: (e) => handleSkillChange("businessSkills", index, e.target.value),
            className: "form-input",
            placeholder: "Project Management, Team Leadership..."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => removeSkill("businessSkills", index),
            className: "remove-btn",
            disabled: templateData.businessSkills.length === 1,
            children: "✕"
          }
        )
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => addSkill2("businessSkills"),
          className: "add-btn",
          children: "+ Add Business Skill"
        }
      )
    ] })
  ] });
  const renderEducationSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Education" }),
    templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Degree" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.degree,
              onChange: (e) => handleEducationChange(index, "degree", e.target.value),
              className: "form-input",
              placeholder: "Bachelor of Science in Computer Science"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "School" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.school,
              onChange: (e) => handleEducationChange(index, "school", e.target.value),
              className: "form-input",
              placeholder: "University of Technology"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Start Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.startDate,
              onChange: (e) => handleEducationChange(index, "startDate", e.target.value),
              className: "form-input",
              placeholder: "2012"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "End Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.endDate,
              onChange: (e) => handleEducationChange(index, "endDate", e.target.value),
              className: "form-input",
              placeholder: "2016"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeEducation(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          disabled: templateData.education.length === 1,
          children: "Remove Education"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addEducation2,
        className: "add-btn",
        children: "+ Add Education"
      }
    )
  ] });
  const renderCertificationsSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Certifications" }),
    templateData.certifications.map((cert, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "certification-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Certification Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: cert.name,
              onChange: (e) => handleCertificationChange(index, "name", e.target.value),
              className: "form-input",
              placeholder: "AWS Certified Solutions Architect"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Issuer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: cert.issuer,
              onChange: (e) => handleCertificationChange(index, "issuer", e.target.value),
              className: "form-input",
              placeholder: "Amazon Web Services"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Year" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: cert.year,
              onChange: (e) => handleCertificationChange(index, "year", e.target.value),
              className: "form-input",
              placeholder: "2022"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeCertification(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          disabled: templateData.certifications.length === 1,
          children: "Remove Certification"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addCertification,
        className: "add-btn",
        children: "+ Add Certification"
      }
    )
  ] });
  const renderLanguagesSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Languages" }),
    templateData.languages.map((lang, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "language-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Language" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: lang.language,
              onChange: (e) => handleLanguageChange(index, "language", e.target.value),
              className: "form-input",
              placeholder: "English"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Proficiency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: lang.proficiency,
              onChange: (e) => handleLanguageChange(index, "proficiency", e.target.value),
              className: "form-input",
              placeholder: "Native, Fluent, Conversational"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeLanguage(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          disabled: templateData.languages.length === 1,
          children: "Remove Language"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addLanguage,
        className: "add-btn",
        children: "+ Add Language"
      }
    )
  ] });
  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalSection();
      case "experience":
        return renderExperienceSection();
      case "skills":
        return renderSkillsSection();
      case "education":
        return renderEducationSection();
      case "certifications":
        return renderCertificationsSection();
      case "languages":
        return renderLanguagesSection();
      default:
        return renderPersonalSection();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-editor", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack,
          children: "← Back to Templates"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Professional Resume Editor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "save-btn",
          onClick: handleSave,
          children: "💾 Save Template"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "editor-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "personal" ? "active" : ""}`,
            onClick: () => setActiveSection("personal"),
            children: "👤 Personal Info"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "experience" ? "active" : ""}`,
            onClick: () => setActiveSection("experience"),
            children: "💼 Experience"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "skills" ? "active" : ""}`,
            onClick: () => setActiveSection("skills"),
            children: "🛠️ Skills"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "education" ? "active" : ""}`,
            onClick: () => setActiveSection("education"),
            children: "🎓 Education"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "certifications" ? "active" : ""}`,
            onClick: () => setActiveSection("certifications"),
            children: "📜 Certifications"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "languages" ? "active" : ""}`,
            onClick: () => setActiveSection("languages"),
            children: "🌐 Languages"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-main", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-form", children: renderActiveSection() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-preview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Live Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          backgroundImage: 'url("/professional.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          minHeight: "400px",
          borderRadius: "8px",
          position: "relative"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "scale(0.4)", transformOrigin: "top left", width: "250%", height: "250%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfessionalTemplate, { data: templateData }) }) }) }) })
      ] })
    ] })
  ] });
};
function ProfessionalResumeTemplate({ onNavigateBack, onEdit }) {
  const [currentView, setCurrentView] = reactExports.useState("preview");
  const [templateData, setTemplateData] = reactExports.useState(null);
  const handleEditTemplate = () => {
    if (onEdit) {
      onEdit();
    } else {
      setCurrentView("editor");
    }
  };
  const handleBackToPreview = () => {
    setCurrentView("preview");
  };
  const handleSaveTemplate = (data) => {
    setTemplateData(data);
  };
  const handleDownloadPDF = () => {
    const getUserProfileData = () => {
      try {
        const savedProfile = localStorage.getItem("userProfileData");
        if (savedProfile) {
          const profileData = JSON.parse(savedProfile);
          return {
            fullName: profileData.personalInfo?.fullName?.toUpperCase() || "YOUR NAME",
            jobTitle: profileData.experience?.[0]?.title || "Your Job Title",
            email: profileData.personalInfo?.email || "your.email@example.com",
            phone: profileData.personalInfo?.phone || "(123) 456-7890",
            location: profileData.personalInfo?.location || "Your Location",
            linkedin: profileData.personalInfo?.linkedin || "linkedin.com/in/yourprofile",
            summary: profileData.personalInfo?.aboutMe || "Professional with extensive experience in the field.",
            experiences: profileData.experience?.map((exp) => ({
              title: exp.title || "",
              company: exp.company || "",
              location: profileData.personalInfo?.location || "",
              startDate: exp.duration?.split(" - ")[0] || "",
              endDate: exp.duration?.split(" - ")[1] || "",
              responsibilities: [exp.description || ""]
            })) || [],
            education: profileData.education?.map((edu) => ({
              degree: edu.degree || "",
              school: edu.school || "",
              startDate: edu.year?.split(" - ")[0] || "",
              endDate: edu.year?.split(" - ")[1] || ""
            })) || [],
            technicalSkills: profileData.skills?.slice(0, Math.ceil((profileData.skills?.length || 0) / 2)) || [],
            businessSkills: profileData.skills?.slice(Math.ceil((profileData.skills?.length || 0) / 2)) || [],
            certifications: [{
              name: "Professional Certification",
              issuer: "Professional Body",
              year: "2023"
            }],
            languages: [{
              language: "English",
              proficiency: "Native"
            }]
          };
        }
      } catch (error) {
        console.error("Error loading profile data:", error);
      }
      return {
        fullName: "JOHN DOE",
        jobTitle: "Senior Software Engineer",
        email: "john.doe@email.com",
        phone: "(555) 123-4567",
        location: "San Francisco, CA",
        linkedin: "linkedin.com/in/johndoe",
        summary: "Experienced software engineer with 8+ years developing scalable web applications and leading cross-functional teams.",
        experiences: [{
          title: "Senior Software Engineer",
          company: "Tech Corp",
          location: "San Francisco, CA",
          startDate: "2020",
          endDate: "Present",
          responsibilities: [
            "Led development of microservices architecture serving 1M+ users",
            "Mentored junior developers and conducted code reviews",
            "Implemented CI/CD pipelines reducing deployment time by 50%"
          ]
        }],
        education: [{
          degree: "Bachelor of Science in Computer Science",
          school: "University of Technology",
          startDate: "2012",
          endDate: "2016"
        }],
        technicalSkills: ["JavaScript", "React", "Node.js", "Python", "Docker"],
        businessSkills: ["Project Management", "Team Leadership", "Agile/Scrum"],
        certifications: [{
          name: "AWS Certified Solutions Architect",
          issuer: "Amazon Web Services",
          year: "2022"
        }],
        languages: [{
          language: "English",
          proficiency: "Native"
        }]
      };
    };
    const currentData = templateData || getUserProfileData();
    const printWindow = window.open("", "_blank");
    const templateHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Professional Resume - ${currentData.fullName}</title>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Inter', sans-serif !important;
              background: white !important;
              color: #333 !important;
              line-height: 1.6 !important;
              -webkit-font-smoothing: antialiased !important;
            }
            .resume-container {
              max-width: 1024px;
              margin: 0 auto;
              background: white !important;
              color: #333 !important;
              line-height: 1.6 !important;
            }
            .resume-header {
              background: #4A5568 !important;
              color: white !important;
              padding: 2.5rem 2rem;
              text-align: center;
            }
            .resume-name {
              font-size: 3rem !important;
              font-weight: 700 !important;
              margin: 0 0 0.5rem 0 !important;
              letter-spacing: 0.05em !important;
              color: white !important;
            }
            .resume-title {
              font-size: 1.5rem !important;
              color: #e5e7eb !important;
              margin: 0 0 1.5rem 0 !important;
              font-weight: 400 !important;
            }
            .resume-contact {
              display: flex;
              justify-content: center;
              gap: 2.5rem;
              flex-wrap: wrap;
              font-size: 1rem !important;
              color: white !important;
            }
            .resume-contact span {
              color: white !important;
            }
            .resume-content {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 3rem;
              padding: 2.5rem;
            }
            .section-title {
              font-size: 1.4rem !important;
              font-weight: 600 !important;
              color: #4A5568 !important;
              margin-bottom: 1.5rem !important;
              border-bottom: 3px solid #3182CE !important;
              padding-bottom: 0.5rem !important;
            }
            .experience-item, .education-item {
              margin-bottom: 2rem;
            }
            .experience-header {
              margin-bottom: 0.75rem;
            }
            .experience-title {
              font-weight: 600 !important;
              color: #4A5568 !important;
              font-size: 1.1rem !important;
              margin-bottom: 0.25rem !important;
            }
            .experience-company {
              color: #718096 !important;
              font-weight: 500 !important;
              margin-bottom: 0.25rem !important;
            }
            .experience-date {
              color: #A0AEC0 !important;
              font-size: 0.9rem !important;
            }
            .responsibilities {
              list-style-type: disc !important;
              padding-left: 1.5rem !important;
              color: #4A5568 !important;
              margin: 0 !important;
            }
            .responsibilities li {
              margin-bottom: 0.4rem !important;
              font-size: 0.95rem !important;
              color: #4A5568 !important;
            }
            .skills-grid {
              margin-bottom: 1.5rem;
            }
            .skill-category {
              margin-bottom: 1.5rem;
            }
            .skill-category h4 {
              font-weight: 600 !important;
              margin-bottom: 0.75rem !important;
              color: #4A5568 !important;
              font-size: 1.1rem !important;
            }
            .skill-list {
              display: flex;
              flex-wrap: wrap;
              gap: 0.5rem;
            }
            .skill-item {
              background: #EDF2F7 !important;
              padding: 0.4rem 0.8rem !important;
              border-radius: 6px !important;
              font-size: 0.9rem !important;
              color: #4A5568 !important;
              font-weight: 500 !important;
            }
            @media print {
              body { 
                margin: 0 !important; 
                padding: 0 !important; 
                background: white !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .resume-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
              }
              .resume-header {
                background: #4A5568 !important;
                color: white !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .resume-name, .resume-title, .resume-contact, .resume-contact span {
                color: white !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .section-title {
                border-bottom: 3px solid #3182CE !important;
                color: #4A5568 !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              .skill-item {
                background: #EDF2F7 !important;
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              @page {
                margin: 0.5in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <div class="resume-container">
            <div class="resume-header">
              <h1 class="resume-name">${currentData.fullName}</h1>
              <h2 class="resume-title">${currentData.jobTitle}</h2>
              <div class="resume-contact">
                <span>📧 ${currentData.email}</span>
                <span>📞 ${currentData.phone}</span>
                <span>📍 ${currentData.location}</span>
                <span>🔗 ${currentData.linkedin}</span>
              </div>
            </div>
            
            <div class="resume-content">
              <div class="left-column">
                <section class="summary-section">
                  <h3 class="section-title">Professional Summary</h3>
                  <p style="line-height: 1.7 !important; margin: 0 !important; color: #4A5568 !important; font-size: 0.95rem !important;">${currentData.summary}</p>
                </section>
                
                <section class="experience-section">
                  <h3 class="section-title">Work Experience</h3>
                  ${currentData.experiences.map((exp) => `
                    <div class="experience-item">
                      <div class="experience-header">
                        <div class="experience-title">${exp.title}</div>
                        <div class="experience-company">${exp.company} • ${exp.location}</div>
                        <div class="experience-date">${exp.startDate} - ${exp.endDate}</div>
                      </div>
                      <ul class="responsibilities">
                        ${exp.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
                      </ul>
                    </div>
                  `).join("")}
                </section>
              </div>
              
              <div class="right-column">
                <section class="skills-section">
                  <h3 class="section-title">Skills</h3>
                  <div class="skill-category">
                    <h4>Technical Skills</h4>
                    <div class="skill-list">
                      ${currentData.technicalSkills.map((skill) => `<span class="skill-item">${skill}</span>`).join("")}
                    </div>
                  </div>
                  <div class="skill-category">
                    <h4>Business Skills</h4>
                    <div class="skill-list">
                      ${currentData.businessSkills.map((skill) => `<span class="skill-item">${skill}</span>`).join("")}
                    </div>
                  </div>
                </section>
                
                <section class="education-section">
                  <h3 class="section-title">Education</h3>
                  ${currentData.education.map((edu) => `
                    <div class="education-item">
                      <div class="experience-title">${edu.degree}</div>
                      <div class="experience-company">${edu.school}</div>
                      <div class="experience-date">${edu.startDate} - ${edu.endDate}</div>
                    </div>
                  `).join("")}
                </section>
                
                <section class="certifications-section">
                  <h3 class="section-title">Certifications</h3>
                  ${currentData.certifications.map((cert) => `
                    <div class="education-item">
                      <div class="experience-title">${cert.name}</div>
                      <div class="experience-company">${cert.issuer}</div>
                      <div class="experience-date">${cert.year}</div>
                    </div>
                  `).join("")}
                </section>
                
                <section class="languages-section">
                  <h3 class="section-title">Languages</h3>
                  ${currentData.languages.map((lang) => `
                    <div class="education-item">
                      <div class="experience-title">${lang.language}</div>
                      <div class="experience-company">${lang.proficiency}</div>
                    </div>
                  `).join("")}
                </section>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 2e3);
  };
  if (currentView === "editor") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProfessionalTemplateEditor,
      {
        onNavigateBack: handleBackToPreview,
        onSave: handleSaveTemplate,
        initialData: templateData
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "resume-template-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack || (() => window.history.back()),
          "aria-label": "Go back",
          title: "Go back to templates",
          children: "← Back to Templates"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Professional Resume Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Clean and modern layout for all professional positions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "edit-btn", onClick: handleEditTemplate, children: "✏️ Edit Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownloadPDF, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfessionalTemplate, { data: templateData }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-features", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "features-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "💼" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Professional Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Clean and sophisticated layout that makes a great first impression" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "📊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Skills Showcase" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Organized sections to highlight your technical and business skills" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "🎯" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "ATS Friendly" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Optimized format that works well with applicant tracking systems" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "📱" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Print Ready" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Perfectly formatted for both digital viewing and professional printing" })
      ] })
    ] }) })
  ] });
}
function AcademicTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    name: "ELLIOT WU",
    photo: null,
    // Photo URL or base64 string
    location: "PHILADELPHIA, PA 19001",
    phone: "(555) 555-5555",
    email: "EXAMPLE@EXAMPLE.COM",
    summary: "Results-driven marketing researcher with over 10 years of experience specializing in consumer behavior, brand strategy and digital marketing analytics. Proven expertise in leading cross-functional research projects, delivering actionable insights and driving 15% year-over-year revenue growth for Fortune 500 clients. Skilled in advanced statistical methods, market segmentation and developing predictive models that optimize marketing strategies. Published author with a strong track record of impactful research and peer-reviewed articles.",
    qualifications: {
      left: [
        "Quantitative and qualitative research",
        "Consumer behavior analysis",
        "Digital marketing analytics",
        "Data visualization (Tableau, Power BI)"
      ],
      right: [
        "Advanced statistical analysis (R, Python)",
        "Predictive modeling and machine learning",
        "Survey design and administration",
        "Strategic communication and reporting"
      ]
    },
    education: [
      {
        degree: "Master of Science - Digital Marketing",
        school: "Temple University",
        location: "Philadelphia, PA",
        details: [
          "GPA: 3.8",
          "Honors: Magna cum laude",
          "Thesis: Measuring the Effectiveness of Influencer Marketing Across Different Social Media Platforms"
        ]
      },
      {
        degree: "Certificate - Business Analytics",
        school: "Temple University",
        location: "Philadelphia, PA",
        details: []
      },
      {
        degree: "Bachelor of Science - Marketing",
        school: "Temple University",
        location: "Philadelphia, PA",
        details: [
          "GPA: 3.8",
          "Honors: Magna cum laude",
          "Minor: Advertising",
          "Student Marketing Club, President"
        ]
      }
    ],
    experience: [
      {
        company: "CMI Media Group",
        position: "Senior Marketing Research Analyst",
        location: "Philadelphia, PA",
        period: "January 2018 to Current",
        responsibilities: [
          "Direct consumer segmentation studies for global clients, increasing customer retention by 20%.",
          "Design and implement predictive models that enhanced campaign ROI by 25%.",
          "Manage a team of five analysts, delivering 98% of research projects under budget and ahead of schedule."
        ]
      },
      {
        company: "Insight Global",
        position: "Marketing Research Consultant",
        location: "Philadelphia, PA",
        period: "May 2015 to December 2017",
        responsibilities: [
          "Conducted in-depth qualitative and quantitative research for 12 startups, leading to an average 18% increase in market share.",
          "Developed competitive benchmarking reports that informed strategic decisions for five key industries."
        ]
      }
    ]
  };
  const [templateData, setTemplateData] = reactExports.useState(initialData || defaultData);
  const [activeSection, setActiveSection] = reactExports.useState("personal");
  const handleInputChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setTemplateData((prev) => ({
            ...prev,
            photo: e.target.result
          }));
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid image file (PNG, JPG, JPEG, GIF)");
      }
    }
  };
  const removePhoto = () => {
    setTemplateData((prev) => ({
      ...prev,
      photo: null
    }));
  };
  const handleQualificationChange = (side, index, value) => {
    setTemplateData((prev) => ({
      ...prev,
      qualifications: {
        ...prev.qualifications,
        [side]: prev.qualifications[side].map((item, i) => i === index ? value : item)
      }
    }));
  };
  const addQualification = (side) => {
    setTemplateData((prev) => ({
      ...prev,
      qualifications: {
        ...prev.qualifications,
        [side]: [...prev.qualifications[side], "New qualification"]
      }
    }));
  };
  const removeQualification = (side, index) => {
    setTemplateData((prev) => ({
      ...prev,
      qualifications: {
        ...prev.qualifications,
        [side]: prev.qualifications[side].filter((_, i) => i !== index)
      }
    }));
  };
  const handleEducationChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.map(
        (edu, i) => i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };
  const handleEducationDetailChange = (eduIndex, detailIndex, value) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.map(
        (edu, i) => i === eduIndex ? {
          ...edu,
          details: edu.details.map((detail, j) => j === detailIndex ? value : detail)
        } : edu
      )
    }));
  };
  const addEducationDetail = (eduIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.map(
        (edu, i) => i === eduIndex ? { ...edu, details: [...edu.details, "New detail"] } : edu
      )
    }));
  };
  const handleExperienceChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };
  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.map((resp, j) => j === respIndex ? value : resp)
        } : exp
      )
    }));
  };
  const addResponsibility = (expIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? { ...exp, responsibilities: [...exp.responsibilities, "New responsibility"] } : exp
      )
    }));
  };
  const handleSave = () => {
    if (onSave) {
      onSave(templateData);
    }
    alert("Template saved successfully! Changes will be reflected in the preview.");
  };
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    const templateHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Academic Resume - ${templateData.name}</title>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;800&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Roboto', sans-serif; 
              background: white;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
              }
              .template-container {
                box-shadow: none !important;
                margin: 0 !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0.75in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <div class="template-container" style="
            font-family: 'Roboto', sans-serif;
            background-color: white;
            color: black;
            padding: 24px;
            max-width: 768px;
            margin: 0 auto;
            font-size: 12px;
            line-height: 1.4;
            width: 210mm;
            min-height: 297mm;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          ">
            <!-- Header Border -->
            <div style="
              border-top: 8px solid #3B82F6;
              width: 100%;
              margin-bottom: 16px;
            "></div>
            
            <!-- Name -->
            <h1 style="
              color: #3B82F6;
              font-size: 24px;
              font-weight: normal;
              text-align: center;
              margin-bottom: 4px;
            ">${templateData.name}</h1>
            
            <!-- Photo -->
            ${templateData.photo ? `
              <div style="
                display: flex;
                justify-content: center;
                margin-bottom: 12px;
              ">
                <img 
                  src="${templateData.photo}" 
                  alt="Profile" 
                  style="
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #3B82F6;
                  "
                />
              </div>
            ` : ""}
            
            <!-- Contact Info -->
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin: 0;
            ">${templateData.location}</p>
            
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin-bottom: 12px;
            ">${templateData.phone} | ${templateData.email}</p>
            
            <!-- Divider -->
            <hr style="
              border: none;
              border-top: 1px dotted #9CA3AF;
              margin-bottom: 12px;
            " />
            
            <!-- Summary Section -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 4px;
            ">SUMMARY STATEMENT</p>
            <p style="
              font-size: 12px;
              margin-bottom: 16px;
            ">${templateData.summary}</p>
            
            <!-- Core Qualifications -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">CORE QUALIFICATIONS</p>
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              margin-bottom: 16px;
            ">
              <div>
                ${templateData.qualifications.left.map((qual) => `
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${qual}
                  </p>
                `).join("")}
              </div>
              <div>
                ${templateData.qualifications.right.map((qual) => `
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${qual}
                  </p>
                `).join("")}
              </div>
            </div>
            
            <!-- Education -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">EDUCATION</p>
            ${templateData.education.map((edu) => `
              <div style="margin-bottom: 12px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${edu.degree}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${edu.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${edu.school}, ${edu.location}</p>
                ${edu.details ? edu.details.map((detail) => `
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${detail}
                  </p>
                `).join("") : ""}
              </div>
            `).join("")}
            
            <!-- Professional Experience -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
              margin-top: 16px;
            ">PROFESSIONAL EXPERIENCE</p>
            ${templateData.experience.map((exp) => `
              <div style="margin-bottom: 16px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${exp.position}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${exp.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${exp.company}, ${exp.location}</p>
                ${exp.responsibilities.map((resp) => `
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${resp}
                  </p>
                `).join("")}
              </div>
            `).join("")}
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  const renderPersonalSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Personal Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.name,
            onChange: (e) => handleInputChange("name", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.location,
            onChange: (e) => handleInputChange("location", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.phone,
            onChange: (e) => handleInputChange("phone", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: templateData.email,
            onChange: (e) => handleInputChange("email", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Profile Photo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
          templateData.photo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: templateData.photo,
                alt: "Profile preview",
                style: {
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #3B82F6"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: removePhoto,
                className: "remove-btn",
                style: { padding: "5px 10px", fontSize: "12px" },
                children: "Remove Photo"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              onChange: handlePhotoUpload,
              className: "form-input",
              style: { padding: "8px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { style: { color: "#666", fontSize: "12px" }, children: "Upload a profile photo (PNG, JPG, JPEG, GIF)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Summary Statement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: templateData.summary,
            onChange: (e) => handleInputChange("summary", e.target.value),
            className: "form-textarea",
            rows: "4"
          }
        )
      ] })
    ] })
  ] });
  const renderQualificationsSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Core Qualifications" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualifications-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Left Column" }),
        templateData.qualifications.left.map((qual, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: qual,
              onChange: (e) => handleQualificationChange("left", index, e.target.value),
              className: "form-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeQualification("left", index),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, index)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => addQualification("left"),
            className: "add-btn",
            children: "+ Add Qualification"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Right Column" }),
        templateData.qualifications.right.map((qual, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: qual,
              onChange: (e) => handleQualificationChange("right", index, e.target.value),
              className: "form-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeQualification("right", index),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, index)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => addQualification("right"),
            className: "add-btn",
            children: "+ Add Qualification"
          }
        )
      ] })
    ] })
  ] });
  const renderEducationSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Education" }),
    templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Degree" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.degree,
              onChange: (e) => handleEducationChange(index, "degree", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "School" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.school,
              onChange: (e) => handleEducationChange(index, "school", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.location,
              onChange: (e) => handleEducationChange(index, "location", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "details-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Details" }),
        edu.details.map((detail, detailIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "detail-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: detail,
            onChange: (e) => handleEducationDetailChange(index, detailIndex, e.target.value),
            className: "form-input"
          }
        ) }, detailIndex)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => addEducationDetail(index),
            className: "add-btn small",
            children: "+ Add Detail"
          }
        )
      ] })
    ] }, index))
  ] });
  const renderExperienceSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Work Experience" }),
    templateData.experience.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.company,
              onChange: (e) => handleExperienceChange(index, "company", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.position,
              onChange: (e) => handleExperienceChange(index, "position", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.location,
              onChange: (e) => handleExperienceChange(index, "location", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.period,
              onChange: (e) => handleExperienceChange(index, "period", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "responsibilities-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Responsibilities" }),
        exp.responsibilities.map((resp, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "responsibility-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: resp,
            onChange: (e) => handleResponsibilityChange(index, respIndex, e.target.value),
            className: "form-textarea",
            rows: "2"
          }
        ) }, respIndex)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => addResponsibility(index),
            className: "add-btn small",
            children: "+ Add Responsibility"
          }
        )
      ] })
    ] }, index))
  ] });
  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalSection();
      case "qualifications":
        return renderQualificationsSection();
      case "education":
        return renderEducationSection();
      case "experience":
        return renderExperienceSection();
      default:
        return renderPersonalSection();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-editor", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack,
          "aria-label": "Go back",
          children: "← Back to Template"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Edit Academic Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customize your resume content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "save-btn", onClick: handleSave, children: "💾 Save Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "editor-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "personal" ? "active" : ""}`,
            onClick: () => setActiveSection("personal"),
            children: "👤 Personal Info"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "qualifications" ? "active" : ""}`,
            onClick: () => setActiveSection("qualifications"),
            children: "🎯 Qualifications"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "education" ? "active" : ""}`,
            onClick: () => setActiveSection("education"),
            children: "🎓 Education"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "experience" ? "active" : ""}`,
            onClick: () => setActiveSection("experience"),
            children: "💼 Experience"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-main", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-form", children: renderActiveSection() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-preview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Live Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          backgroundImage: 'url("/Acedemic.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          minHeight: "400px",
          borderRadius: "8px",
          position: "relative"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "scale(0.6)", transformOrigin: "top left", width: "166.67%", height: "166.67%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AcademicTemplate, { data: templateData }) }) }) }) })
      ] })
    ] })
  ] });
}
function AcademicResumeTemplate({ onNavigateBack, onEdit }) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [templateData, setTemplateData] = reactExports.useState(null);
  const handleDownload = () => {
    const currentData = templateData || {
      name: "ELLIOT WU",
      photo: null,
      location: "PHILADELPHIA, PA 19001",
      phone: "(555) 555-5555",
      email: "EXAMPLE@EXAMPLE.COM",
      summary: "Results-driven marketing researcher with over 10 years of experience specializing in consumer behavior, brand strategy and digital marketing analytics. Proven expertise in leading cross-functional research projects, delivering actionable insights and driving 15% year-over-year revenue growth for Fortune 500 clients. Skilled in advanced statistical methods, market segmentation and developing predictive models that optimize marketing strategies. Published author with a strong track record of impactful research and peer-reviewed articles.",
      qualifications: {
        left: [
          "Quantitative and qualitative research",
          "Consumer behavior analysis",
          "Digital marketing analytics",
          "Data visualization (Tableau, Power BI)"
        ],
        right: [
          "Advanced statistical analysis (R, Python)",
          "Predictive modeling and machine learning",
          "Survey design and administration",
          "Strategic communication and reporting"
        ]
      },
      education: [
        {
          degree: "Master of Science - Digital Marketing",
          school: "Temple University",
          location: "Philadelphia, PA",
          period: "2018 - 2020",
          details: [
            "GPA: 3.8",
            'Thesis: "Consumer Response Patterns in Digital Advertising Ecosystems"',
            "Graduate Research Assistant for Consumer Behavior Lab"
          ]
        },
        {
          degree: "Bachelor of Science - Psychology",
          school: "Pennsylvania State University",
          location: "University Park, PA",
          period: "2014 - 2018",
          details: [
            "Magna Cum Laude, GPA: 3.7",
            "Minor in Statistics",
            "President, Psychology Student Association"
          ]
        }
      ],
      experience: [
        {
          position: "Senior Marketing Research Analyst",
          company: "TechFlow Solutions",
          location: "Philadelphia, PA",
          period: "2022 - Present",
          responsibilities: [
            "Lead comprehensive market research initiatives for B2B technology products, resulting in 25% improvement in product-market fit scores",
            "Design and execute advanced statistical analyses using R and Python to identify consumer behavior patterns and market trends",
            "Collaborate with cross-functional teams to translate research insights into actionable marketing strategies, contributing to 15% revenue growth",
            "Manage research budget of $500K annually and oversee team of 3 junior analysts"
          ]
        },
        {
          position: "Marketing Research Specialist",
          company: "DataVision Analytics",
          location: "Philadelphia, PA",
          period: "2020 - 2022",
          responsibilities: [
            "Conducted quantitative and qualitative research studies for Fortune 500 clients across retail, healthcare, and financial services sectors",
            "Developed predictive models to forecast consumer purchasing behavior with 85% accuracy rate",
            "Created comprehensive research reports and presented findings to C-level executives",
            "Implemented new survey methodologies that improved response rates by 40%"
          ]
        }
      ]
    };
    const printWindow = window.open("", "_blank");
    const templateHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Academic Resume - ${currentData.name}</title>
          <meta charset="UTF-8">
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;800&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Roboto', sans-serif; 
              background: white;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
              }
              .template-container {
                box-shadow: none !important;
                margin: 0 !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0.75in;
                size: A4;
              }
            }
          </style>
        </head>
        <body>
          <div class="template-container" style="
            font-family: 'Roboto', sans-serif;
            background-color: white;
            color: black;
            padding: 24px;
            max-width: 768px;
            margin: 0 auto;
            font-size: 12px;
            line-height: 1.4;
            width: 210mm;
            min-height: 297mm;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          ">
            <!-- Header Border -->
            <div style="
              border-top: 8px solid #3B82F6;
              width: 100%;
              margin-bottom: 16px;
            "></div>
            
            <!-- Name -->
            <h1 style="
              color: #3B82F6;
              font-size: 24px;
              font-weight: normal;
              text-align: center;
              margin-bottom: 4px;
            ">${currentData.name}</h1>
            
            <!-- Photo -->
            ${currentData.photo ? `
              <div style="
                display: flex;
                justify-content: center;
                margin-bottom: 12px;
              ">
                <img 
                  src="${currentData.photo}" 
                  alt="Profile" 
                  style="
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 2px solid #3B82F6;
                  "
                />
              </div>
            ` : ""}
            
            <!-- Contact Info -->
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin: 0;
            ">${currentData.location}</p>
            
            <p style="
              text-align: center;
              font-size: 12px;
              font-weight: 800;
              line-height: none;
              margin-bottom: 12px;
            ">${currentData.phone} | ${currentData.email}</p>
            
            <!-- Divider -->
            <hr style="
              border: none;
              border-top: 1px dotted #9CA3AF;
              margin-bottom: 12px;
            " />
            
            <!-- Summary Section -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 4px;
            ">SUMMARY STATEMENT</p>
            <p style="
              font-size: 12px;
              margin-bottom: 16px;
            ">${currentData.summary}</p>
            
            <!-- Core Qualifications -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">CORE QUALIFICATIONS</p>
            <div style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
              margin-bottom: 16px;
            ">
              <div>
                ${currentData.qualifications.left.map((qual) => `
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${qual}
                  </p>
                `).join("")}
              </div>
              <div>
                ${currentData.qualifications.right.map((qual) => `
                  <p style="
                    font-size: 12px;
                    margin-bottom: 4px;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${qual}
                  </p>
                `).join("")}
              </div>
            </div>
            
            <!-- Education -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
            ">EDUCATION</p>
            ${currentData.education.map((edu) => `
              <div style="margin-bottom: 12px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${edu.degree}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${edu.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${edu.school}, ${edu.location}</p>
                ${edu.details ? edu.details.map((detail) => `
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${detail}
                  </p>
                `).join("") : ""}
              </div>
            `).join("")}
            
            <!-- Professional Experience -->
            <p style="
              font-size: 12px;
              font-weight: 800;
              margin-bottom: 8px;
              margin-top: 16px;
            ">PROFESSIONAL EXPERIENCE</p>
            ${currentData.experience.map((exp) => `
              <div style="margin-bottom: 16px;">
                <div style="
                  display: flex;
                  justify-content: space-between;
                  align-items: flex-start;
                  margin-bottom: 2px;
                ">
                  <h3 style="
                    font-size: 12px;
                    font-weight: 800;
                    margin: 0;
                  ">${exp.position}</h3>
                  <span style="
                    font-size: 12px;
                    font-weight: 800;
                  ">${exp.period}</span>
                </div>
                <p style="
                  font-size: 12px;
                  margin: 0 0 4px 0;
                ">${exp.company}, ${exp.location}</p>
                ${exp.responsibilities.map((resp) => `
                  <p style="
                    font-size: 12px;
                    margin: 2px 0;
                    padding-left: 8px;
                    position: relative;
                  ">
                    <span style="
                      position: absolute;
                      left: 0;
                      top: 0;
                    ">•</span>
                    ${resp}
                  </p>
                `).join("")}
              </div>
            `).join("")}
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    } else {
      setIsEditing(true);
    }
  };
  const handleSaveTemplate = (newData) => {
    setTemplateData(newData);
    setIsEditing(false);
  };
  const handleBackFromEditor = () => {
    setIsEditing(false);
  };
  if (isEditing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AcademicTemplateEditor,
      {
        onNavigateBack: handleBackFromEditor,
        onSave: handleSaveTemplate,
        initialData: templateData
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "resume-template-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack || (() => window.history.back()),
          "aria-label": "Go back",
          title: "Go back to templates",
          children: "← Back to Templates"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Academic Resume Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Structured format for research and education roles" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "edit-btn", onClick: handleEdit, children: "✏️ Edit Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AcademicTemplate, { data: templateData }) }) }),
    "      ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-features", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "features-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "🎓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Education Focused" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Highlights academic achievements, research, and publications" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "📊" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Research Friendly" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Perfect format for showcasing research projects and methodologies" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "🤖" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "ATS Compatible" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Optimized structure that passes through applicant tracking systems" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "📱" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Print Ready" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Professional formatting that looks great on paper and screen" })
      ] })
    ] }) })
  ] });
}
function CreativeTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    name: "OLIVIA WILSON",
    title: "Marketing Manager",
    photo: null,
    // Photo URL or base64 string
    contact: {
      email: "hello@reallygreatsite.com",
      phone: "+123-456-7890",
      address: "123 Anywhere St., Any City",
      website: "reallygreatsite.com"
    },
    about: "An experienced Marketing Manager with exceptional skills in creating marketing plans, launching products, promoting them, and increasing brand awareness. I'm creative, detail-oriented, a team player, with extensive world media audience engagement, and brand management.",
    education: [
      {
        degree: "Master of Business",
        school: "Wardiere University",
        period: "2016 - 2018"
      },
      {
        degree: "BA Sales and Commerce",
        school: "Wardiere University",
        period: "2012 - 2016"
      }
    ],
    skills: [
      "BCR Calculations",
      "Social media marketing",
      "Product development lifecycle",
      "Marketing strategy",
      "Product promotion",
      "Value propositions"
    ],
    languages: ["English", "French"],
    experience: [
      {
        position: "Marketing Manager",
        company: "Borcelle Company",
        period: "Aug 2018 - present",
        responsibilities: [
          "Handled various office tasks.",
          "Constantly updated the company's content and mailing lists.",
          "Monitored ongoing marketing campaigns.",
          "Increased sales coverage."
        ]
      },
      {
        position: "Marketing Assistant",
        company: "Timmerman Industries",
        period: "Jul 2016 - Aug 2018",
        responsibilities: [
          "Handled the company's online presence — regularly updated the company's website and various social media accounts.",
          "Monitored ongoing marketing campaigns."
        ]
      },
      {
        position: "Marketing Assistant",
        company: "Utenim & Co",
        period: "Aug 2014 - Jul 2016",
        responsibilities: [
          "Handled the company's online presence — regularly updated the company's website and various social media accounts."
        ]
      }
    ],
    references: [
      {
        name: "Estelle Darcy",
        title: "Wardiere Inc. | CEO",
        phone: "+123-456-7890",
        email: "hello@reallygreatsite.com"
      },
      {
        name: "Harper Russo",
        title: "Timmerman | CEO",
        phone: "+123-456-7890",
        email: "hello@reallygreatsite.com"
      }
    ]
  };
  const [templateData, setTemplateData] = reactExports.useState(initialData || defaultData);
  const [activeSection, setActiveSection] = reactExports.useState("personal");
  const handleInputChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  const handleContactChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }));
  };
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setTemplateData((prev) => ({
            ...prev,
            photo: e.target.result
          }));
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid image file (PNG, JPG, JPEG, GIF)");
      }
    }
  };
  const removePhoto = () => {
    setTemplateData((prev) => ({
      ...prev,
      photo: null
    }));
  };
  const handleSkillChange = (index, value) => {
    setTemplateData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };
  const addSkill2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      skills: [...prev.skills, "New skill"]
    }));
  };
  const removeSkill = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };
  const handleLanguageChange = (index, value) => {
    setTemplateData((prev) => ({
      ...prev,
      languages: prev.languages.map((lang, i) => i === index ? value : lang)
    }));
  };
  const addLanguage = () => {
    setTemplateData((prev) => ({
      ...prev,
      languages: [...prev.languages, "New language"]
    }));
  };
  const removeLanguage = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };
  const handleEducationChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.map(
        (edu, i) => i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };
  const addEducation2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", school: "", period: "" }]
    }));
  };
  const removeEducation = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };
  const handleExperienceChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };
  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.map((resp, j) => j === respIndex ? value : resp)
        } : exp
      )
    }));
  };
  const addResponsibility = (expIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? { ...exp, responsibilities: [...exp.responsibilities, "New responsibility"] } : exp
      )
    }));
  };
  const removeResponsibility = (expIndex, respIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.filter((_, j) => j !== respIndex)
        } : exp
      )
    }));
  };
  const addExperience = () => {
    setTemplateData((prev) => ({
      ...prev,
      experience: [...prev.experience, {
        position: "",
        company: "",
        period: "",
        responsibilities: [""]
      }]
    }));
  };
  const removeExperience = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };
  const handleReferenceChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      references: prev.references.map(
        (ref, i) => i === index ? { ...ref, [field]: value } : ref
      )
    }));
  };
  const addReference = () => {
    setTemplateData((prev) => ({
      ...prev,
      references: [...prev.references, {
        name: "",
        title: "",
        phone: "",
        email: ""
      }]
    }));
  };
  const removeReference = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index)
    }));
  };
  const handleSave = () => {
    if (onSave) {
      onSave(templateData);
    }
    alert("Template saved successfully! Changes will be reflected in the preview.");
  };
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    const templateHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Creative Resume - ${templateData.name}</title>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Poppins', sans-serif;
              background: #f3f4f6;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="outer-container" style="
            font-family: 'Poppins', sans-serif;
            background-color: #f3f4f6;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1024px;
              width: 100%;
              background-color: white;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              border-radius: 8px;
              overflow: hidden;
              display: flex;
              flex-direction: row;
            ">
              <!-- Left Column (Dark Background) -->
              <aside style="
                width: 33.333333%;
                background-color: #2c3e50;
                color: white;
                padding: 32px;
              ">
                <!-- Profile Picture -->
                <div style="
                  display: flex;
                  justify-content: center;
                  margin-bottom: 32px;
                ">
                  <div style="
                    width: 144px;
                    height: 144px;
                    border-radius: 50%;
                    border: 4px solid #9CA3AF;
                    background-color: #ffffff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    font-weight: bold;
                    color: #2c3e50;
                    ${templateData.photo ? `background-image: url(${templateData.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ""}
                  ">
                    ${!templateData.photo ? templateData.name.split(" ").map((n) => n[0]).join("") : ""}
                  </div>
                </div>

                <!-- Contact Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Contact</h2>
                  <div style="display: flex; flex-direction: column; gap: 12px;">
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">📧</span>
                      ${templateData.contact.email}
                    </p>
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">📞</span>
                      ${templateData.contact.phone}
                    </p>
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">📍</span>
                      ${templateData.contact.address}
                    </p>
                    <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                      <span style="margin-right: 8px;">🌐</span>
                      ${templateData.contact.website}
                    </p>
                  </div>
                </section>

                <!-- Education Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Education</h2>
                  ${templateData.education.map((edu) => `
                    <div style="margin-bottom: 20px;">
                      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px; color: white;">${edu.degree}</h3>
                      <p style="font-size: 14px; color: #D1D5DB; margin-bottom: 2px;">${edu.school}</p>
                      <p style="font-size: 12px; color: #9CA3AF; margin: 0;">${edu.period}</p>
                    </div>
                  `).join("")}
                </section>

                <!-- Skills Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Skills</h2>
                  ${templateData.skills.map((skill) => `
                    <div style="margin-bottom: 8px;">
                      <span style="font-size: 14px; color: white;">• ${skill}</span>
                    </div>
                  `).join("")}
                </section>

                <!-- Languages Section -->
                <section>
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    border-bottom: 2px solid #6B7280;
                    padding-bottom: 8px;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">Languages</h2>
                  ${templateData.languages.map((lang) => `
                    <div style="margin-bottom: 8px;">
                      <span style="font-size: 14px; color: white;">• ${lang}</span>
                    </div>
                  `).join("")}
                </section>
              </aside>

              <!-- Right Column (Main Content) -->
              <div style="
                flex: 1;
                padding: 32px;
                color: #374151;
              ">
                <!-- Header -->
                <header style="
                  margin-bottom: 32px;
                  text-align: left;
                ">
                  <h1 style="
                    font-size: 48px;
                    font-weight: bold;
                    color: #1F2937;
                    margin: 0;
                    font-family: 'League Spartan', sans-serif;
                    line-height: 1.1;
                  ">${templateData.name}</h1>
                  <p style="
                    font-size: 20px;
                    color: #6B7280;
                    margin: 8px 0 0 0;
                    font-weight: 500;
                  ">${templateData.title}</p>
                </header>

                <!-- About Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    color: #1F2937;
                    margin-bottom: 16px;
                    font-family: 'League Spartan', sans-serif;
                  ">About Me</h2>
                  <p style="
                    font-size: 14px;
                    line-height: 1.6;
                    color: #4B5563;
                    margin: 0;
                  ">${templateData.about}</p>
                </section>

                <!-- Experience Section -->
                <section style="margin-bottom: 40px;">
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    color: #1F2937;
                    margin-bottom: 24px;
                    font-family: 'League Spartan', sans-serif;
                  ">Work Experience</h2>
                  ${templateData.experience.map((exp) => `
                    <div style="margin-bottom: 32px;">
                      <div style="margin-bottom: 12px;">
                        <h3 style="
                          font-size: 18px;
                          font-weight: 600;
                          color: #1F2937;
                          margin: 0;
                        ">${exp.position}</h3>
                        <p style="
                          font-size: 16px;
                          color: #6B7280;
                          font-weight: 500;
                          margin: 4px 0;
                        ">${exp.company}</p>
                        <p style="
                          font-size: 14px;
                          color: #9CA3AF;
                          margin: 0;
                        ">${exp.period}</p>
                      </div>
                      <ul style="
                        margin: 0;
                        padding-left: 20px;
                        color: #4B5563;
                      ">
                        ${exp.responsibilities.map((resp) => `
                          <li style="
                            font-size: 14px;
                            line-height: 1.5;
                            margin-bottom: 4px;
                          ">${resp}</li>
                        `).join("")}
                      </ul>
                    </div>
                  `).join("")}
                </section>

                <!-- References Section -->
                <section>
                  <h2 style="
                    font-size: 24px;
                    font-weight: bold;
                    color: #1F2937;
                    margin-bottom: 24px;
                    font-family: 'League Spartan', sans-serif;
                  ">References</h2>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                    ${templateData.references.map((ref) => `
                      <div>
                        <h3 style="
                          font-size: 16px;
                          font-weight: 600;
                          color: #1F2937;
                          margin: 0 0 4px 0;
                        ">${ref.name}</h3>
                        <p style="
                          font-size: 14px;
                          color: #6B7280;
                          margin: 0 0 8px 0;
                        ">${ref.title}</p>
                        <p style="
                          font-size: 12px;
                          color: #9CA3AF;
                          margin: 2px 0;
                        ">${ref.phone}</p>
                        <p style="
                          font-size: 12px;
                          color: #9CA3AF;
                          margin: 2px 0;
                        ">${ref.email}</p>
                      </div>
                    `).join("")}
                  </div>
                </section>
              </div>
            </main>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  const renderPersonalSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Personal Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.name,
            onChange: (e) => handleInputChange("name", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Job Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.title,
            onChange: (e) => handleInputChange("title", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: templateData.contact.email,
            onChange: (e) => handleContactChange("email", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.contact.phone,
            onChange: (e) => handleContactChange("phone", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.contact.address,
            onChange: (e) => handleContactChange("address", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Website" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.contact.website,
            onChange: (e) => handleContactChange("website", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Profile Photo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
          templateData.photo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: templateData.photo,
                alt: "Profile preview",
                style: {
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #ddd"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: removePhoto,
                className: "remove-btn",
                style: { padding: "5px 10px", fontSize: "12px" },
                children: "Remove Photo"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              onChange: handlePhotoUpload,
              className: "form-input",
              style: { padding: "8px" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("small", { style: { color: "#666", fontSize: "12px" }, children: "Upload a profile photo (PNG, JPG, JPEG, GIF)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "About Me" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: templateData.about,
            onChange: (e) => handleInputChange("about", e.target.value),
            className: "form-textarea",
            rows: "4"
          }
        )
      ] })
    ] })
  ] });
  const renderSkillsSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Skills & Languages" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualifications-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Skills" }),
        templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: skill,
              onChange: (e) => handleSkillChange(index, e.target.value),
              className: "form-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeSkill(index),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, index)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: addSkill2,
            className: "add-btn",
            children: "+ Add Skill"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Languages" }),
        templateData.languages.map((language, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: language,
              onChange: (e) => handleLanguageChange(index, e.target.value),
              className: "form-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeLanguage(index),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, index)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: addLanguage,
            className: "add-btn",
            children: "+ Add Language"
          }
        )
      ] })
    ] })
  ] });
  const renderEducationSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Education" }),
    templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Degree" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.degree,
              onChange: (e) => handleEducationChange(index, "degree", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "School" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.school,
              onChange: (e) => handleEducationChange(index, "school", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.period,
              onChange: (e) => handleEducationChange(index, "period", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeEducation(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Education"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addEducation2,
        className: "add-btn",
        children: "+ Add Education"
      }
    )
  ] });
  const renderExperienceSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Work Experience" }),
    templateData.experience.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.position,
              onChange: (e) => handleExperienceChange(index, "position", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.company,
              onChange: (e) => handleExperienceChange(index, "company", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.period,
              onChange: (e) => handleExperienceChange(index, "period", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "responsibilities-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Responsibilities" }),
        exp.responsibilities.map((resp, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: resp,
              onChange: (e) => handleResponsibilityChange(index, respIndex, e.target.value),
              className: "form-textarea",
              rows: "2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeResponsibility(index, respIndex),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, respIndex)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => addResponsibility(index),
            className: "add-btn small",
            children: "+ Add Responsibility"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeExperience(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Experience"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addExperience,
        className: "add-btn",
        children: "+ Add Experience"
      }
    )
  ] });
  const renderReferencesSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "References" }),
    templateData.references.map((ref, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: ref.name,
              onChange: (e) => handleReferenceChange(index, "name", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: ref.title,
              onChange: (e) => handleReferenceChange(index, "title", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: ref.phone,
              onChange: (e) => handleReferenceChange(index, "phone", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              value: ref.email,
              onChange: (e) => handleReferenceChange(index, "email", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeReference(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Reference"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addReference,
        className: "add-btn",
        children: "+ Add Reference"
      }
    )
  ] });
  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalSection();
      case "skills":
        return renderSkillsSection();
      case "education":
        return renderEducationSection();
      case "experience":
        return renderExperienceSection();
      case "references":
        return renderReferencesSection();
      default:
        return renderPersonalSection();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-editor", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack,
          "aria-label": "Go back",
          children: "← Back to Template"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Edit Creative Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customize your resume content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "save-btn", onClick: handleSave, children: "💾 Save Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "editor-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "personal" ? "active" : ""}`,
            onClick: () => setActiveSection("personal"),
            children: "👤 Personal Info"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "skills" ? "active" : ""}`,
            onClick: () => setActiveSection("skills"),
            children: "🎯 Skills & Languages"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "education" ? "active" : ""}`,
            onClick: () => setActiveSection("education"),
            children: "🎓 Education"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "experience" ? "active" : ""}`,
            onClick: () => setActiveSection("experience"),
            children: "💼 Experience"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "references" ? "active" : ""}`,
            onClick: () => setActiveSection("references"),
            children: "👥 References"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-main", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-form", children: renderActiveSection() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-preview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Live Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          backgroundImage: 'url("/mordern.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          minHeight: "400px",
          borderRadius: "8px",
          position: "relative"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "scale(0.4)", transformOrigin: "top left", width: "250%", height: "250%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreativeTemplate, { data: templateData }) }) }) }) })
      ] })
    ] })
  ] });
}
function CreativeResumeTemplate({ onNavigateBack }) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [templateData, setTemplateData] = reactExports.useState(null);
  const handleDownload = () => {
    const currentData = templateData || {
      name: "OLIVIA WILSON",
      title: "Marketing Manager",
      photo: null,
      contact: {
        email: "hello@reallygreatsite.com",
        phone: "+123-456-7890",
        address: "123 Anywhere St., Any City",
        website: "reallygreatsite.com"
      },
      about: "An experienced Marketing Manager with exceptional skills in creating marketing plans, launching products, promoting them, and increasing brand awareness. I'm creative, detail-oriented, a team player, with extensive world media audience engagement, and brand management.",
      education: [
        {
          degree: "Master of Business",
          school: "Wardiere University",
          period: "2016 - 2018"
        },
        {
          degree: "BA Sales and Commerce",
          school: "Wardiere University",
          period: "2012 - 2016"
        }
      ],
      skills: [
        "BCR Calculations",
        "Social media marketing",
        "Product development lifecycle",
        "Marketing strategy",
        "Product promotion",
        "Value propositions"
      ],
      languages: ["English", "French"],
      experience: [
        {
          position: "Marketing Manager",
          company: "Borcelle Company",
          period: "Aug 2018 - present",
          responsibilities: [
            "Handled various office tasks.",
            "Constantly updated the company's content and mailing lists.",
            "Monitored ongoing marketing campaigns.",
            "Increased sales coverage."
          ]
        },
        {
          position: "Marketing Assistant",
          company: "Timmerman Industries",
          period: "Jul 2016 - Aug 2018",
          responsibilities: [
            "Handled the company's online presence — regularly updated the company's website and various social media accounts.",
            "Monitored ongoing marketing campaigns."
          ]
        }
      ],
      references: [
        {
          name: "Estelle Darcy",
          title: "Wardiere Inc. | CEO",
          phone: "+123-456-7890",
          email: "hello@reallygreatsite.com"
        },
        {
          name: "Harper Russo",
          title: "Timmerman | CEO",
          phone: "+123-456-7890",
          email: "hello@reallygreatsite.com"
        }
      ]
    };
    const printWindow = window.open("", "_blank");
    const templateHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Creative Resume - ${currentData.name}</title>
          <meta charset="UTF-8">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Poppins', sans-serif;
              background: #f3f4f6;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="outer-container" style="
            font-family: 'Poppins', sans-serif;
            background-color: #f3f4f6;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1024px;
              width: 100%;
              background-color: white;
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
              border-radius: 8px;
              overflow: hidden;
              display: flex;
              flex-direction: row;
            ">
              <!-- Left Column (Dark Background) -->
              <aside style="
                width: 33.333333%;
                background-color: #2c3e50;
                color: white;
                padding: 32px;
              ">
              <!-- Profile Picture -->
              <div style="
                display: flex;
                justify-content: center;
                margin-bottom: 32px;
              ">
                <div style="
                  width: 144px;
                  height: 144px;
                  border-radius: 50%;
                  border: 4px solid #9CA3AF;
                  background-color: #ffffff;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  font-weight: bold;
                  color: #2c3e50;
                  ${currentData.photo ? `background-image: url(${currentData.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ""}
                ">
                  ${!currentData.photo ? currentData.name.split(" ").map((n) => n[0]).join("") : ""}
                </div>
              </div>

              <!-- Contact Section -->
              <section style="margin-bottom: 40px;">
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  border-bottom: 2px solid #6B7280;
                  padding-bottom: 8px;
                  margin-bottom: 16px;
                  font-family: 'League Spartan', sans-serif;
                ">Contact</h2>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">📧</span>
                    ${currentData.contact.email}
                  </p>
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">📞</span>
                    ${currentData.contact.phone}
                  </p>
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">📍</span>
                    ${currentData.contact.address}
                  </p>
                  <p style="display: flex; align-items: center; margin: 0; font-size: 14px;">
                    <span style="margin-right: 8px;">🌐</span>
                    ${currentData.contact.website}
                  </p>
                </div>
              </section>

              <!-- Education Section -->
              <section style="margin-bottom: 40px;">
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  border-bottom: 2px solid #6B7280;
                  padding-bottom: 8px;
                  margin-bottom: 16px;
                  font-family: 'League Spartan', sans-serif;
                ">Education</h2>
                ${currentData.education.map((edu) => `
                  <div style="margin-bottom: 20px;">
                    <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">${edu.degree}</h3>
                    <p style="font-size: 14px; color: #D1D5DB; margin-bottom: 2px;">${edu.school}</p>
                    <p style="font-size: 12px; color: #9CA3AF; margin: 0;">${edu.period}</p>
                  </div>
                `).join("")}
              </section>

              <!-- Skills Section -->
              <section style="margin-bottom: 40px;">
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  border-bottom: 2px solid #6B7280;
                  padding-bottom: 8px;
                  margin-bottom: 16px;
                  font-family: 'League Spartan', sans-serif;
                ">Skills</h2>
                ${currentData.skills.map((skill) => `
                  <div style="margin-bottom: 8px;">
                    <span style="font-size: 14px;">• ${skill}</span>
                  </div>
                `).join("")}
              </section>

              <!-- Languages Section -->
              <section>
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  border-bottom: 2px solid #6B7280;
                  padding-bottom: 8px;
                  margin-bottom: 16px;
                  font-family: 'League Spartan', sans-serif;
                ">Languages</h2>
                ${currentData.languages.map((lang) => `
                  <div style="margin-bottom: 8px;">
                    <span style="font-size: 14px;">• ${lang}</span>
                  </div>
                `).join("")}
              </section>
            </aside>

            <!-- Main Content -->
            <div style="
              flex: 1;
              padding: 32px;
              color: #374151;
            ">
              <!-- Header -->
              <header style="
                margin-bottom: 32px;
                text-align: left;
              ">
                <h1 style="
                  font-size: 48px;
                  font-weight: bold;
                  color: #1F2937;
                  margin: 0;
                  font-family: 'League Spartan', sans-serif;
                  line-height: 1.1;
                ">${currentData.name}</h1>
                <p style="
                  font-size: 20px;
                  color: #6B7280;
                  margin: 8px 0 0 0;
                  font-weight: 500;
                ">${currentData.title}</p>
              </header>

              <!-- About Section -->
              <section style="margin-bottom: 40px;">
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  color: #1F2937;
                  margin-bottom: 16px;
                  font-family: 'League Spartan', sans-serif;
                ">About Me</h2>
                <p style="
                  font-size: 14px;
                  line-height: 1.6;
                  color: #4B5563;
                  margin: 0;
                ">${currentData.about}</p>
              </section>

              <!-- Experience Section -->
              <section style="margin-bottom: 40px;">
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  color: #1F2937;
                  margin-bottom: 24px;
                  font-family: 'League Spartan', sans-serif;
                ">Work Experience</h2>
                ${currentData.experience.map((exp) => `
                  <div style="margin-bottom: 32px;">
                    <div style="margin-bottom: 12px;">
                      <h3 style="
                        font-size: 18px;
                        font-weight: 600;
                        color: #1F2937;
                        margin: 0;
                      ">${exp.position}</h3>
                      <p style="
                        font-size: 16px;
                        color: #6B7280;
                        font-weight: 500;
                        margin: 4px 0;
                      ">${exp.company}</p>
                      <p style="
                        font-size: 14px;
                        color: #9CA3AF;
                        margin: 0;
                      ">${exp.period}</p>
                    </div>
                    <ul style="
                      margin: 0;
                      padding-left: 20px;
                      color: #4B5563;
                    ">
                      ${exp.responsibilities.map((resp) => `
                        <li style="
                          font-size: 14px;
                          line-height: 1.5;
                          margin-bottom: 4px;
                        ">${resp}</li>
                      `).join("")}
                    </ul>
                  </div>
                `).join("")}
              </section>

              <!-- References Section -->
              <section>
                <h2 style="
                  font-size: 24px;
                  font-weight: bold;
                  color: #1F2937;
                  margin-bottom: 24px;
                  font-family: 'League Spartan', sans-serif;
                ">References</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                  ${currentData.references.map((ref) => `
                    <div>
                      <h3 style="
                        font-size: 16px;
                        font-weight: 600;
                        color: #1F2937;
                        margin: 0 0 4px 0;
                      ">${ref.name}</h3>
                      <p style="
                        font-size: 14px;
                        color: #6B7280;
                        margin: 0 0 8px 0;
                      ">${ref.title}</p>
                      <p style="
                        font-size: 12px;
                        color: #9CA3AF;
                        margin: 2px 0;
                      ">${ref.phone}</p>
                      <p style="
                        font-size: 12px;
                        color: #9CA3AF;
                        margin: 2px 0;
                      ">${ref.email}</p>
                    </div>
                  `).join("")}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSaveTemplate = (newData) => {
    setTemplateData(newData);
    setIsEditing(false);
  };
  const handleBackFromEditor = () => {
    setIsEditing(false);
  };
  if (isEditing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CreativeTemplateEditor,
      {
        onNavigateBack: handleBackFromEditor,
        onSave: handleSaveTemplate,
        initialData: templateData
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "resume-template-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack || (() => window.history.back()),
          "aria-label": "Go back",
          title: "Go back to templates",
          children: "← Back to Templates"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Creative Resume Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Bold layout for design and creative positions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "edit-btn", onClick: handleEdit, children: "✏️ Edit Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreativeTemplate, { data: templateData }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-features", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "features-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "🎨" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Creative Design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Eye-catching layout with bold colors and modern typography" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "🖼️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Visual Impact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Perfect for designers, marketers, and creative professionals" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "🎯" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Brand Focused" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Showcases personality and creativity while maintaining professionalism" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: "📱" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Modern Layout" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Two-column design that looks great both digitally and in print" })
      ] })
    ] }) })
  ] });
}
const TechnicalTemplate = ({ data }) => {
  const defaultData = {
    personalInfo: {
      fullName: "Dwight Mackenzie",
      position: "Research Engineer",
      address: "400 Whipoorville Road, New York , NY 10014, United States",
      phone: "(917) 348-3212",
      email: "Mack_nz85_sd@gmail.com"
    },
    skills: [
      "Knowledge of Engineering Principles",
      "Strategic and Tactical Planning",
      "Leadership Skills",
      "Complex Problem Solving",
      "Interpersonal Communication Skills"
    ],
    languages: [
      "German",
      "English",
      "Dutch"
    ],
    profile: "Experienced Research Engineer with an extensive background in engineering principles, project leadership, and the effective application of research in technological companies. Bringing forth extensive experience in performing research on product development processes and offering solutions and alterations to improve safety and effectiveness. Adept in working with engineers and project managers at multiple levels to utilize research data effectively and achieve optimal results.",
    experience: [
      {
        position: "Research Engineer",
        company: "AGR, New York",
        period: "May 2016 — January 2019",
        responsibilities: [
          "Worked with Project Managers to discuss equipment function, processes, and productivity, while offering solutions to current issues.",
          "Researched technological improvements currently dominating the field, and tested their outcome for specific products.",
          "Wrote daily reports and organized data presentations for accountability and quality assurance.",
          "Tested the efficacy and safety of products and analyzed the results in relation to procedures."
        ]
      },
      {
        position: "Research Engineer",
        company: "United Technologies Research Center, New York",
        period: "June 2012 — April 2016",
        responsibilities: [
          "Led the research and development of technologies.",
          "Worked in collaboration with other researchers to promote world-class applications and services.",
          "Delivered production-level code to support applications.",
          "Implemented innovative software solutions."
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Biochemical Engineering",
        institution: "NYU, New York",
        period: "September 2007 — May 2012"
      },
      {
        degree: "Bachelor of Biochemical Engineering",
        institution: "NYU, New York",
        period: "September 2003 — May 2007"
      }
    ]
  };
  const templateData = data || defaultData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    fontFamily: '"Inter", sans-serif',
    backgroundColor: "white",
    color: "#111827",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "16px 24px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { style: {
      backgroundColor: "#f3f4f6",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: "800px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
          fontSize: "32px",
          fontWeight: "800",
          lineHeight: "1.2",
          color: "#111827",
          margin: "0 0 8px 0"
        }, children: templateData.personalInfo.fullName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "1.3",
          color: "#374151",
          margin: "0"
        }, children: templateData.personalInfo.position })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { style: {
        fontStyle: "normal",
        fontSize: "14px",
        fontWeight: "400",
        color: "#374151",
        maxWidth: "512px",
        lineHeight: "1.5"
      }, children: [
        templateData.personalInfo.address,
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        templateData.personalInfo.phone,
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${templateData.personalInfo.email}`, style: {
          textDecoration: "underline",
          color: "#374151"
        }, children: templateData.personalInfo.email })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      marginTop: "32px",
      display: "flex",
      flexDirection: "row",
      gap: "48px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { style: { width: "33.333333%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "32px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontWeight: "700",
            fontSize: "14px",
            marginBottom: "8px",
            color: "#111827"
          }, children: "Skills" }),
          templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "12px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: "14px",
              lineHeight: "1.4",
              marginBottom: "4px",
              color: "#111827"
            }, children: skill }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: {
              border: "none",
              borderTop: "2px solid #111827",
              width: "80px",
              margin: "0"
            } })
          ] }, index))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontWeight: "700",
            fontSize: "14px",
            marginBottom: "8px",
            color: "#111827"
          }, children: "Languages" }),
          templateData.languages.map((language, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "12px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: "14px",
              lineHeight: "1.4",
              marginBottom: "4px",
              color: "#111827"
            }, children: language }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: {
              border: "none",
              borderTop: "2px solid #111827",
              width: "80px",
              margin: "0"
            } })
          ] }, index))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { style: { width: "66.666667%" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "32px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
            fontWeight: "700",
            fontSize: "18px",
            marginBottom: "8px",
            color: "#111827"
          }, children: "Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#111827"
          }, children: templateData.profile })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "32px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
            fontWeight: "700",
            fontSize: "18px",
            marginBottom: "8px",
            color: "#111827"
          }, children: "Employment History" }),
          templateData.experience.map((job, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "24px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
              fontWeight: "600",
              fontSize: "14px",
              marginBottom: "4px",
              color: "#111827"
            }, children: [
              job.position,
              ", ",
              job.company
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: "12px",
              marginBottom: "8px",
              color: "#111827"
            }, children: job.period }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
              listStyleType: "disc",
              listStylePosition: "inside",
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#111827",
              margin: "0",
              padding: "0"
            }, children: job.responsibilities.map((responsibility, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: "4px" }, children: responsibility }, idx)) })
          ] }, index))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
            fontWeight: "700",
            fontSize: "18px",
            marginBottom: "8px",
            color: "#111827"
          }, children: "Education" }),
          templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
              fontWeight: "600",
              fontSize: "14px",
              marginBottom: "4px",
              color: "#111827"
            }, children: [
              edu.degree,
              ", ",
              edu.institution
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontSize: "12px",
              color: "#111827"
            }, children: edu.period })
          ] }, index))
        ] })
      ] })
    ] })
  ] });
};
function TechnicalTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    personalInfo: {
      fullName: "Dwight Mackenzie",
      position: "Research Engineer",
      address: "400 Whipoorville Road, New York , NY 10014, United States",
      phone: "(917) 348-3212",
      email: "Mack_nz85_sd@gmail.com"
    },
    skills: [
      "Knowledge of Engineering Principles",
      "Strategic and Tactical Planning",
      "Leadership Skills",
      "Complex Problem Solving",
      "Interpersonal Communication Skills"
    ],
    languages: [
      "German",
      "English",
      "Dutch"
    ],
    profile: "Experienced Research Engineer with an extensive background in engineering principles, project leadership, and the effective application of research in technological companies. Bringing forth extensive experience in performing research on product development processes and offering solutions and alterations to improve safety and effectiveness. Adept in working with engineers and project managers at multiple levels to utilize research data effectively and achieve optimal results.",
    experience: [
      {
        position: "Research Engineer",
        company: "AGR, New York",
        period: "May 2016 — January 2019",
        responsibilities: [
          "Worked with Project Managers to discuss equipment function, processes, and productivity, while offering solutions to current issues.",
          "Researched technological improvements currently dominating the field, and tested their outcome for specific products.",
          "Wrote daily reports and organized data presentations for accountability and quality assurance.",
          "Tested the efficacy and safety of products and analyzed the results in relation to procedures."
        ]
      },
      {
        position: "Research Engineer",
        company: "United Technologies Research Center, New York",
        period: "June 2012 — April 2016",
        responsibilities: [
          "Led the research and development of technologies.",
          "Worked in collaboration with other researchers to promote world-class applications and services.",
          "Delivered production-level code to support applications.",
          "Implemented innovative software solutions."
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Biochemical Engineering",
        institution: "NYU, New York",
        period: "September 2007 — May 2012"
      },
      {
        degree: "Bachelor of Biochemical Engineering",
        institution: "NYU, New York",
        period: "September 2003 — May 2007"
      }
    ]
  };
  const [templateData, setTemplateData] = reactExports.useState(initialData || defaultData);
  const [activeSection, setActiveSection] = reactExports.useState("personal");
  const handlePersonalInfoChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };
  const handleSkillChange = (index, value) => {
    const newSkills = [...templateData.skills];
    newSkills[index] = value;
    setTemplateData((prev) => ({ ...prev, skills: newSkills }));
  };
  const addSkill2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""]
    }));
  };
  const removeSkill = (index) => {
    const newSkills = templateData.skills.filter((_, i) => i !== index);
    setTemplateData((prev) => ({ ...prev, skills: newSkills }));
  };
  const handleLanguageChange = (index, value) => {
    const newLanguages = [...templateData.languages];
    newLanguages[index] = value;
    setTemplateData((prev) => ({ ...prev, languages: newLanguages }));
  };
  const addLanguage = () => {
    setTemplateData((prev) => ({
      ...prev,
      languages: [...prev.languages, ""]
    }));
  };
  const removeLanguage = (index) => {
    const newLanguages = templateData.languages.filter((_, i) => i !== index);
    setTemplateData((prev) => ({ ...prev, languages: newLanguages }));
  };
  const handleExperienceChange = (expIndex, field, value) => {
    const newExperience = [...templateData.experience];
    newExperience[expIndex] = { ...newExperience[expIndex], [field]: value };
    setTemplateData((prev) => ({ ...prev, experience: newExperience }));
  };
  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    const newExperience = [...templateData.experience];
    newExperience[expIndex].responsibilities[respIndex] = value;
    setTemplateData((prev) => ({ ...prev, experience: newExperience }));
  };
  const addResponsibility = (expIndex) => {
    const newExperience = [...templateData.experience];
    newExperience[expIndex].responsibilities.push("");
    setTemplateData((prev) => ({ ...prev, experience: newExperience }));
  };
  const removeResponsibility = (expIndex, respIndex) => {
    const newExperience = [...templateData.experience];
    newExperience[expIndex].responsibilities = newExperience[expIndex].responsibilities.filter((_, i) => i !== respIndex);
    setTemplateData((prev) => ({ ...prev, experience: newExperience }));
  };
  const addExperience = () => {
    setTemplateData((prev) => ({
      ...prev,
      experience: [...prev.experience, {
        position: "",
        company: "",
        period: "",
        responsibilities: [""]
      }]
    }));
  };
  const removeExperience = (index) => {
    const newExperience = templateData.experience.filter((_, i) => i !== index);
    setTemplateData((prev) => ({ ...prev, experience: newExperience }));
  };
  const handleEducationChange = (eduIndex, field, value) => {
    const newEducation = [...templateData.education];
    newEducation[eduIndex] = { ...newEducation[eduIndex], [field]: value };
    setTemplateData((prev) => ({ ...prev, education: newEducation }));
  };
  const addEducation2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      education: [...prev.education, {
        degree: "",
        institution: "",
        period: ""
      }]
    }));
  };
  const removeEducation = (index) => {
    const newEducation = templateData.education.filter((_, i) => i !== index);
    setTemplateData((prev) => ({ ...prev, education: newEducation }));
  };
  const handleSave = () => {
    if (onSave) {
      onSave(templateData);
    }
  };
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    const templateHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Technical Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', sans-serif; background: white; }
            @media print { body { -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <div id="resume-content"></div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHtml);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 1e3);
  };
  const renderPersonalSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Personal Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.fullName,
            onChange: (e) => handlePersonalInfoChange("fullName", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Position" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.position,
            onChange: (e) => handlePersonalInfoChange("position", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.phone,
            onChange: (e) => handlePersonalInfoChange("phone", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: templateData.personalInfo.email,
            onChange: (e) => handlePersonalInfoChange("email", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.address,
            onChange: (e) => handlePersonalInfoChange("address", e.target.value),
            className: "form-input"
          }
        )
      ] })
    ] })
  ] });
  const renderProfileSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Profile" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Professional Summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: templateData.profile,
          onChange: (e) => setTemplateData((prev) => ({ ...prev, profile: e.target.value })),
          className: "form-textarea",
          rows: "6",
          placeholder: "Write your professional summary..."
        }
      )
    ] })
  ] });
  const renderSkillsSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Skills & Languages" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "subsection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Skills" }),
      templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "array-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: skill,
            onChange: (e) => handleSkillChange(index, e.target.value),
            className: "form-input",
            placeholder: "Enter a skill"
          }
        ),
        templateData.skills.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => removeSkill(index),
            className: "remove-btn",
            children: "✕"
          }
        )
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: addSkill2, className: "add-btn", children: "+ Add Skill" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "subsection", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Languages" }),
      templateData.languages.map((language, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "array-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: language,
            onChange: (e) => handleLanguageChange(index, e.target.value),
            className: "form-input",
            placeholder: "Enter a language"
          }
        ),
        templateData.languages.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => removeLanguage(index),
            className: "remove-btn",
            children: "✕"
          }
        )
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: addLanguage, className: "add-btn", children: "+ Add Language" })
    ] })
  ] });
  const renderExperienceSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Experience" }),
    templateData.experience.map((exp, expIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
          "Experience ",
          expIndex + 1
        ] }),
        templateData.experience.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => removeExperience(expIndex),
            className: "remove-btn",
            children: "✕ Remove"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.position,
              onChange: (e) => handleExperienceChange(expIndex, "position", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.company,
              onChange: (e) => handleExperienceChange(expIndex, "company", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.period,
              onChange: (e) => handleExperienceChange(expIndex, "period", e.target.value),
              className: "form-input",
              placeholder: "e.g., May 2016 — January 2019"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "responsibilities-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Responsibilities" }),
        exp.responsibilities.map((resp, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "array-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: resp,
              onChange: (e) => handleResponsibilityChange(expIndex, respIndex, e.target.value),
              className: "form-textarea",
              rows: "2",
              placeholder: "Describe your responsibility..."
            }
          ),
          exp.responsibilities.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => removeResponsibility(expIndex, respIndex),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, respIndex)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => addResponsibility(expIndex),
            className: "add-btn small",
            children: "+ Add Responsibility"
          }
        )
      ] })
    ] }, expIndex)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: addExperience, className: "add-btn", children: "+ Add Experience" })
  ] });
  const renderEducationSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Education" }),
    templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
          "Education ",
          index + 1
        ] }),
        templateData.education.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => removeEducation(index),
            className: "remove-btn",
            children: "✕ Remove"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Degree" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.degree,
              onChange: (e) => handleEducationChange(index, "degree", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Institution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.institution,
              onChange: (e) => handleEducationChange(index, "institution", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.period,
              onChange: (e) => handleEducationChange(index, "period", e.target.value),
              className: "form-input",
              placeholder: "e.g., September 2007 — May 2012"
            }
          )
        ] })
      ] })
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: addEducation2, className: "add-btn", children: "+ Add Education" })
  ] });
  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          renderPersonalSection(),
          renderProfileSection()
        ] });
      case "skills":
        return renderSkillsSection();
      case "experience":
        return renderExperienceSection();
      case "education":
        return renderEducationSection();
      default:
        return renderPersonalSection();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-editor", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack,
          "aria-label": "Go back",
          children: "← Back to Template"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Edit Technical Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customize your resume content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "save-btn", onClick: handleSave, children: "💾 Save Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "editor-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "personal" ? "active" : ""}`,
            onClick: () => setActiveSection("personal"),
            children: "👤 Personal & Profile"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "skills" ? "active" : ""}`,
            onClick: () => setActiveSection("skills"),
            children: "🎯 Skills & Languages"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "experience" ? "active" : ""}`,
            onClick: () => setActiveSection("experience"),
            children: "💼 Experience"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "education" ? "active" : ""}`,
            onClick: () => setActiveSection("education"),
            children: "🎓 Education"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-main", children: renderActiveSection() }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-preview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Live Preview" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-content", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          backgroundImage: 'url("/Technical.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          minHeight: "400px",
          borderRadius: "8px",
          position: "relative"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-scale", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TechnicalTemplate, { data: templateData }) }) }) }) })
      ] })
    ] })
  ] });
}
function TechnicalResumeTemplate({ onNavigateBack, onEdit }) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [templateData, setTemplateData] = reactExports.useState(null);
  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    } else {
      setIsEditing(true);
    }
  };
  const handleSave = (data) => {
    setTemplateData(data);
    setIsEditing(false);
  };
  const handleBack = () => {
    setIsEditing(false);
  };
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    const templateHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Technical Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Inter', sans-serif; background: white; }
            @media print { body { -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <div id="resume-content"></div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHtml);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 1e3);
  };
  if (isEditing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TechnicalTemplateEditor,
      {
        onNavigateBack: handleBack,
        onSave: handleSave,
        initialData: templateData
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "creative-resume-template", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack || (() => window.history.back()),
          "aria-label": "Go back",
          title: "Go back to templates",
          children: "← Back to Templates"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Technical Resume Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Professional layout for technical and engineering positions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "edit-btn", onClick: handleEdit, children: "✏️ Edit Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TechnicalTemplate, { data: templateData }) }) })
  ] });
}
const ExecutiveTemplate = ({ data }) => {
  const defaultData = {
    personalInfo: {
      fullName: "MARGARET M. NERNEY",
      position: "Director",
      department: "Product Marketing",
      address: "584 Castro St San Francisco, CA 94114",
      phone: "(888) 123-4567",
      email: "m.nerney@gmail.com",
      linkedin: "linkedin.com/in/margaret.nerney"
    },
    profile: "Responsible for developing the product marketing strategy for highly complex products and services in the capacity of an expert individual contributor. Responsible for the success of a product line through development and execution of comprehensive marketing plan. Key Roles and Responsibilities: Develop business plans and positioning of cutting edge products in the marketplace.",
    skills: [
      "Team Building and Leadership",
      "P&L Management",
      "Product Development",
      "Customer Focused",
      "Contract Negotiation"
    ],
    experience: [
      {
        company: "AT&T",
        position: "DIRECTOR PRODUCT MARKETING",
        period: "Jul. 2018 – Present",
        achievements: [
          "Accolades: Recognized as the top performer out of 400+ individuals in 2018",
          "Manage a $320M annual development budget focused on delivering new features to increase sales conversion, service monetization and improve customer service for AT&T NOW.",
          "Delivered ~$50M improvements to P&L.",
          "Supervise 4 direct reports and 2 SaFe agile teams (~20 people)"
        ]
      },
      {
        company: "",
        position: "MARKETING MANAGER",
        period: "Nov. 2016 – Jul. 2018",
        achievements: [
          "Accolades: Top 10% in performance in 2016 & 2017",
          "O.G. AT&T launch team that delivered 1.5M customers in less than 18 months",
          "Successfully launching a secondary OTT service AT&T NOW in 2018 with more than 600K subscribers and on pace to double by EOY 2019",
          "Managed partnerships with respective SVOD and AVOD partners (i.e. Fullscreen, Pandora, Amazon Music and VRV) resulting in 1M+ customers 2016-2018"
        ]
      },
      {
        company: "VERIZON",
        position: "LEAD MANAGER MARKETING COMMS",
        period: "Mar. 2015 – Oct. 2016",
        achievements: [
          "Accolades: Top 10% in performance in 2016 & 2017",
          "Chief of staff and communication lead for the Chief Marketing Officer (Business)",
          'Researched, developed and drafted quarterly "state of the business" presentation (P&L, OI initiatives, strategic recommendations) for senior leadership and (Vteam)',
          "Dramatically improved employee satisfaction over a six month period among 2K+"
        ]
      }
    ],
    education: [
      {
        institution: "Verizon",
        degree: "Data Driven Marketing Analytics Degree",
        period: "Feb. - Nov. 2016"
      },
      {
        institution: "AT&T Marketing Leadership Development",
        degree: "",
        period: "Dec. 2017"
      },
      {
        institution: "Boston College",
        degree: "Bachelor of Arts",
        period: "May 2011"
      }
    ]
  };
  const templateData = data || defaultData;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    fontFamily: '"Open Sans", sans-serif',
    backgroundColor: "#f0f4f8",
    color: "#374151",
    maxWidth: "1536px",
    margin: "0 auto",
    padding: "24px 48px",
    display: "flex",
    flexDirection: "row",
    gap: "80px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      backgroundColor: "#e8eef4",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "24px",
      padding: "48px",
      width: "360px",
      flexShrink: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
        fontSize: "24px",
        fontWeight: "600",
        color: "#111827",
        marginBottom: "8px",
        textAlign: "center",
        lineHeight: "1.2"
      }, children: templateData.personalInfo.fullName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { style: {
        textAlign: "center",
        color: "#374151",
        fontWeight: "600",
        fontStyle: "italic",
        fontSize: "14px",
        marginBottom: "32px",
        lineHeight: "1.4"
      }, children: [
        templateData.personalInfo.position,
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontStyle: "normal" }, children: templateData.personalInfo.department })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100%",
        borderTop: "1px solid #d1d5db",
        marginBottom: "32px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { width: "100%", marginBottom: "32px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          textTransform: "uppercase",
          fontSize: "12px",
          fontWeight: "600",
          color: "#6b7280",
          letterSpacing: "0.05em",
          marginBottom: "12px"
        }, children: "PROFILE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "12px",
          color: "#374151",
          lineHeight: "1.6"
        }, children: templateData.profile })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { width: "100%", marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          textTransform: "uppercase",
          fontSize: "12px",
          fontWeight: "600",
          color: "#6b7280",
          letterSpacing: "0.05em",
          marginBottom: "12px"
        }, children: "SKILLS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
          fontSize: "12px",
          color: "#374151",
          listStyleType: "disc",
          listStylePosition: "inside",
          margin: "0",
          padding: "0"
        }, children: templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: "4px" }, children: skill }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
        width: "100%",
        color: "#6b7280",
        fontSize: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: "14px", textAlign: "center" }, children: "📍" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: templateData.personalInfo.address })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: "14px", textAlign: "center" }, children: "✉️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${templateData.personalInfo.email}`, style: {
            color: "#6b7280",
            textDecoration: "none"
          }, children: templateData.personalInfo.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: "14px", textAlign: "center" }, children: "📞" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${templateData.personalInfo.phone}`, style: {
            color: "#6b7280",
            textDecoration: "none"
          }, children: templateData.personalInfo.phone })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: "14px", textAlign: "center" }, children: "🔗" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://${templateData.personalInfo.linkedin}`, style: {
            color: "#6b7280",
            textDecoration: "none"
          }, children: templateData.personalInfo.linkedin })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      flex: 1,
      fontSize: "13px",
      lineHeight: "1.6",
      color: "#374151"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: "600",
        color: "#6b7280",
        letterSpacing: "0.05em",
        marginBottom: "8px"
      }, children: "WORK EXPERIENCE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: {
        border: "none",
        borderTop: "1px solid #d1d5db",
        marginBottom: "24px"
      } }),
      templateData.experience.map((job, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { style: { marginBottom: "24px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "4px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            job.company && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontWeight: "600",
              color: "#111827",
              fontSize: "13px",
              lineHeight: "1.2",
              margin: "0"
            }, children: job.company }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontStyle: "italic",
              fontSize: "12px",
              color: "#374151",
              lineHeight: "1.2",
              margin: "0"
            }, children: job.position })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "11px",
            color: "#6b7280",
            fontWeight: "600",
            lineHeight: "1.2",
            margin: "0"
          }, children: job.period })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
          listStyleType: "disc",
          listStylePosition: "inside",
          fontSize: "12px",
          color: "#374151",
          margin: "0",
          padding: "0"
        }, children: job.achievements.map((achievement, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { marginBottom: "4px" }, children: achievement }, idx)) })
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
        textTransform: "uppercase",
        fontSize: "12px",
        fontWeight: "600",
        color: "#6b7280",
        letterSpacing: "0.05em",
        marginBottom: "8px",
        marginTop: "40px"
      }, children: "ACADEMIC" }),
      templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { style: {
        fontSize: "12px",
        color: "#374151",
        marginBottom: "12px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
          fontWeight: "600",
          color: "#111827",
          fontSize: "13px",
          lineHeight: "1.2",
          margin: "0",
          display: "flex",
          justifyContent: "space-between"
        }, children: [
          edu.institution,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontSize: "11px",
            color: "#6b7280",
            fontWeight: "400"
          }, children: edu.period })
        ] }),
        edu.degree && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontStyle: "italic",
          margin: "0",
          lineHeight: "1.2"
        }, children: edu.degree })
      ] }, index))
    ] })
  ] });
};
const ExecutiveResumeTemplate = ({ onNavigateBack, onEdit }) => {
  const defaultData = {
    personalInfo: {
      fullName: "MARGARET M. NERNEY",
      position: "Director",
      department: "Product Marketing",
      address: "584 Castro St San Francisco, CA 94114",
      phone: "(888) 123-4567",
      email: "m.nerney@gmail.com",
      linkedin: "linkedin.com/in/margaret.nerney"
    },
    profile: "Responsible for developing the product marketing strategy for highly complex products and services in the capacity of an expert individual contributor. Responsible for the success of a product line through development and execution of comprehensive marketing plan. Key Roles and Responsibilities: Develop business plans and positioning of cutting edge products in the marketplace.",
    skills: [
      "Team Building and Leadership",
      "P&L Management",
      "Product Development",
      "Customer Focused",
      "Contract Negotiation"
    ],
    experience: [
      {
        company: "AT&T",
        position: "DIRECTOR PRODUCT MARKETING",
        period: "Jul. 2018 – Present",
        achievements: [
          "Accolades: Recognized as the top performer out of 400+ individuals in 2018",
          "Manage a $320M annual development budget focused on delivering new features to increase sales conversion, service monetization and improve customer service for AT&T NOW.",
          "Delivered ~$50M improvements to P&L.",
          "Supervise 4 direct reports and 2 SaFe agile teams (~20 people)"
        ]
      },
      {
        company: "",
        position: "MARKETING MANAGER",
        period: "Nov. 2016 – Jul. 2018",
        achievements: [
          "Accolades: Top 10% in performance in 2016 & 2017",
          "O.G. AT&T launch team that delivered 1.5M customers in less than 18 months",
          "Successfully launching a secondary OTT service AT&T NOW in 2018 with more than 600K subscribers and on pace to double by EOY 2019",
          "Managed partnerships with respective SVOD and AVOD partners (i.e. Fullscreen, Pandora, Amazon Music and VRV) resulting in 1M+ customers 2016-2018"
        ]
      },
      {
        company: "VERIZON",
        position: "LEAD MANAGER MARKETING COMMS",
        period: "Mar. 2015 – Oct. 2016",
        achievements: [
          "Accolades: Top 10% in performance in 2016 & 2017",
          "Chief of staff and communication lead for the Chief Marketing Officer (Business)",
          'Researched, developed and drafted quarterly "state of the business" presentation (P&L, OI initiatives, strategic recommendations) for senior leadership and (Vteam)',
          "Dramatically improved employee satisfaction over a six month period among 2K+"
        ]
      }
    ],
    education: [
      {
        institution: "Verizon",
        degree: "Data Driven Marketing Analytics Degree",
        period: "Feb. - Nov. 2016"
      },
      {
        institution: "AT&T Marketing Leadership Development",
        degree: "",
        period: "Dec. 2017"
      },
      {
        institution: "Boston College",
        degree: "Bachelor of Arts",
        period: "May 2011"
      }
    ]
  };
  const downloadPDF = () => {
    const printWindow = window.open("", "_blank");
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${defaultData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            @media print {
              body {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              
              * {
                -webkit-print-color-adjust: exact !important;
                color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              
              .outer-container {
                padding: 0 !important;
                background-color: #f0f4f8 !important;
              }
              
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                max-width: 100% !important;
                width: 100% !important;
              }
              
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="outer-container" style="
            font-family: 'Open Sans', sans-serif;
            background-color: #f0f4f8;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1536px;
              width: 100%;
              background-color: #f0f4f8;
              color: #374151;
              margin: 0 auto;
              padding: 24px 48px;
              display: flex;
              flex-direction: row;
              gap: 80px;
            ">
              <!-- Left Panel -->
              <section style="
                background-color: #e8eef4;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 24px;
                padding: 48px;
                width: 360px;
                flex-shrink: 0;
              ">
                <h1 style="
                  font-size: 24px;
                  font-weight: 600;
                  color: #111827;
                  margin-bottom: 8px;
                  text-align: center;
                  line-height: 1.2;
                ">
                  ${defaultData.personalInfo.fullName}
                </h1>
                
                <h2 style="
                  text-align: center;
                  color: #374151;
                  font-weight: 600;
                  font-style: italic;
                  font-size: 14px;
                  margin-bottom: 32px;
                  line-height: 1.4;
                ">
                  ${defaultData.personalInfo.position}
                  <br />
                  <span style="font-style: normal;">
                    ${defaultData.personalInfo.department}
                  </span>
                </h2>

                <div style="
                  width: 100%;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 32px;
                "></div>

                <!-- Profile Section -->
                <section style="width: 100%; margin-bottom: 32px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    PROFILE
                  </h3>
                  <p style="
                    font-size: 12px;
                    color: #374151;
                    line-height: 1.6;
                  ">
                    ${defaultData.profile}
                  </p>
                </section>

                <!-- Skills Section -->
                <section style="width: 100%; margin-bottom: 40px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    SKILLS
                  </h3>
                  <ul style="
                    font-size: 12px;
                    color: #374151;
                    list-style-type: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                  ">
                    ${defaultData.skills.map((skill) => `
                      <li style="margin-bottom: 4px;">
                        ${skill}
                      </li>
                    `).join("")}
                  </ul>
                </section>

                <!-- Contact Information -->
                <section style="
                  width: 100%;
                  color: #6b7280;
                  font-size: 12px;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                ">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📍</span>
                    <span>${defaultData.personalInfo.address}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">✉️</span>
                    <a href="mailto:${defaultData.personalInfo.email}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${defaultData.personalInfo.email}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📞</span>
                    <a href="tel:${defaultData.personalInfo.phone}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${defaultData.personalInfo.phone}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">🔗</span>
                    <a href="https://${defaultData.personalInfo.linkedin}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${defaultData.personalInfo.linkedin}
                    </a>
                  </div>
                </section>
              </section>

              <!-- Right Panel -->
              <section style="
                flex: 1;
                font-size: 13px;
                line-height: 1.6;
                color: #374151;
              ">
                <!-- Work Experience -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                ">
                  WORK EXPERIENCE
                </h3>
                <hr style="
                  border: none;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 24px;
                " />

                ${defaultData.experience.map((job) => `
                  <article style="margin-bottom: 24px;">
                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-start;
                      margin-bottom: 4px;
                    ">
                      <div>
                        ${job.company ? `
                          <p style="
                            font-weight: 600;
                            color: #111827;
                            font-size: 13px;
                            line-height: 1.2;
                            margin: 0;
                          ">
                            ${job.company}
                          </p>
                        ` : ""}
                        <p style="
                          font-style: italic;
                          font-size: 12px;
                          color: #374151;
                          line-height: 1.2;
                          margin: 0;
                        ">
                          ${job.position}
                        </p>
                      </div>
                      <p style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 600;
                        line-height: 1.2;
                        margin: 0;
                      ">
                        ${job.period}
                      </p>
                    </div>
                    <ul style="
                      list-style-type: disc;
                      list-style-position: inside;
                      font-size: 12px;
                      color: #374151;
                      margin: 0;
                      padding: 0;
                    ">
                      ${job.achievements.map((achievement) => `
                        <li style="margin-bottom: 4px;">
                          ${achievement}
                        </li>
                      `).join("")}
                    </ul>
                  </article>
                `).join("")}

                <!-- Education -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                  margin-top: 40px;
                ">
                  ACADEMIC
                </h3>

                ${defaultData.education.map((edu) => `
                  <article style="
                    font-size: 12px;
                    color: #374151;
                    margin-bottom: 12px;
                  ">
                    <p style="
                      font-weight: 600;
                      color: #111827;
                      font-size: 13px;
                      line-height: 1.2;
                      margin: 0;
                      display: flex;
                      justify-content: space-between;
                    ">
                      ${edu.institution}
                      <span style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 400;
                      ">
                        ${edu.period}
                      </span>
                    </p>
                    ${edu.degree ? `
                      <p style="
                        font-style: italic;
                        margin: 0;
                        line-height: 1.2;
                      ">
                        ${edu.degree}
                      </p>
                    ` : ""}
                  </article>
                `).join("")}
              </section>
            </main>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "20px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { maxWidth: "1200px", margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onNavigateBack,
          style: {
            padding: "10px 20px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500"
          },
          children: "← Back to Templates"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
        fontSize: "28px",
        fontWeight: "bold",
        color: "#333",
        margin: "0"
      }, children: "Executive Resume Template" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onEdit,
            style: {
              padding: "10px 20px",
              backgroundColor: "#345995",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500"
            },
            children: "✏️ Edit Resume"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: downloadPDF,
            style: {
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500"
            },
            children: "📄 Download PDF"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      backgroundColor: "white",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExecutiveTemplate, { data: defaultData }) })
  ] }) });
};
function ExecutiveTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    personalInfo: {
      fullName: "MARGARET M. NERNEY",
      position: "Director",
      department: "Product Marketing",
      address: "584 Castro St San Francisco, CA 94114",
      phone: "(888) 123-4567",
      email: "m.nerney@gmail.com",
      linkedin: "linkedin.com/in/margaret.nerney"
    },
    profile: "Responsible for developing the product marketing strategy for highly complex products and services in the capacity of an expert individual contributor. Responsible for the success of a product line through development and execution of comprehensive marketing plan. Key Roles and Responsibilities: Develop business plans and positioning of cutting edge products in the marketplace.",
    skills: [
      "Team Building and Leadership",
      "P&L Management",
      "Product Development",
      "Customer Focused",
      "Contract Negotiation"
    ],
    experience: [
      {
        company: "AT&T",
        position: "DIRECTOR PRODUCT MARKETING",
        period: "Jul. 2018 – Present",
        achievements: [
          "Accolades: Recognized as the top performer out of 400+ individuals in 2018",
          "Manage a $320M annual development budget focused on delivering new features to increase sales conversion, service monetization and improve customer service for AT&T NOW.",
          "Delivered ~$50M improvements to P&L.",
          "Supervise 4 direct reports and 2 SaFe agile teams (~20 people)"
        ]
      },
      {
        company: "",
        position: "MARKETING MANAGER",
        period: "Nov. 2016 – Jul. 2018",
        achievements: [
          "Accolades: Top 10% in performance in 2016 & 2017",
          "O.G. AT&T launch team that delivered 1.5M customers in less than 18 months",
          "Successfully launching a secondary OTT service AT&T NOW in 2018 with more than 600K subscribers and on pace to double by EOY 2019",
          "Managed partnerships with respective SVOD and AVOD partners (i.e. Fullscreen, Pandora, Amazon Music and VRV) resulting in 1M+ customers 2016-2018"
        ]
      },
      {
        company: "VERIZON",
        position: "LEAD MANAGER MARKETING COMMS",
        period: "Mar. 2015 – Oct. 2016",
        achievements: [
          "Accolades: Top 10% in performance in 2016 & 2017",
          "Chief of staff and communication lead for the Chief Marketing Officer (Business)",
          'Researched, developed and drafted quarterly "state of the business" presentation (P&L, OI initiatives, strategic recommendations) for senior leadership and (Vteam)',
          "Dramatically improved employee satisfaction over a six month period among 2K+"
        ]
      }
    ],
    education: [
      {
        institution: "Verizon",
        degree: "Data Driven Marketing Analytics Degree",
        period: "Feb. - Nov. 2016"
      },
      {
        institution: "AT&T Marketing Leadership Development",
        degree: "",
        period: "Dec. 2017"
      },
      {
        institution: "Boston College",
        degree: "Bachelor of Arts",
        period: "May 2011"
      }
    ]
  };
  const [templateData, setTemplateData] = reactExports.useState(initialData || defaultData);
  const [activeSection, setActiveSection] = reactExports.useState("personal");
  const handlePersonalInfoChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };
  const handleInputChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSkillChange = (index, value) => {
    setTemplateData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };
  const addSkill2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      skills: [...prev.skills, "New skill"]
    }));
  };
  const removeSkill = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };
  const handleEducationChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.map(
        (edu, i) => i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };
  const addEducation2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      education: [...prev.education, { institution: "", degree: "", period: "" }]
    }));
  };
  const removeEducation = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };
  const handleExperienceChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };
  const handleAchievementChange = (expIndex, achIndex, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          achievements: exp.achievements.map((ach, j) => j === achIndex ? value : ach)
        } : exp
      )
    }));
  };
  const addAchievement2 = (expIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? { ...exp, achievements: [...exp.achievements, "New achievement"] } : exp
      )
    }));
  };
  const removeAchievement = (expIndex, achIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          achievements: exp.achievements.filter((_, j) => j !== achIndex)
        } : exp
      )
    }));
  };
  const addExperience = () => {
    setTemplateData((prev) => ({
      ...prev,
      experience: [...prev.experience, {
        company: "",
        position: "",
        period: "",
        achievements: [""]
      }]
    }));
  };
  const removeExperience = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };
  const handleSave = () => {
    if (onSave) {
      onSave(templateData);
    }
    alert("Template saved successfully! Changes will be reflected in the preview.");
  };
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${templateData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Open Sans', sans-serif;
              background: #f0f4f8;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              /* Hide print headers and footers */
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="outer-container" style="
            font-family: 'Open Sans', sans-serif;
            background-color: #f0f4f8;
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <main class="main-container" style="
              max-width: 1536px;
              width: 100%;
              background-color: #f0f4f8;
              color: #374151;
              margin: 0 auto;
              padding: 24px 48px;
              display: flex;
              flex-direction: row;
              gap: 80px;
            ">
              <!-- Left Panel -->
              <section style="
                background-color: #e8eef4;
                display: flex;
                flex-direction: column;
                align-items: center;
                border-radius: 24px;
                padding: 48px;
                width: 360px;
                flex-shrink: 0;
              ">
                <h1 style="
                  font-size: 24px;
                  font-weight: 600;
                  color: #111827;
                  margin-bottom: 8px;
                  text-align: center;
                  line-height: 1.2;
                ">
                  ${templateData.personalInfo.fullName}
                </h1>
                
                <h2 style="
                  text-align: center;
                  color: #374151;
                  font-weight: 600;
                  font-style: italic;
                  font-size: 14px;
                  margin-bottom: 32px;
                  line-height: 1.4;
                ">
                  ${templateData.personalInfo.position}
                  <br />
                  <span style="font-style: normal;">
                    ${templateData.personalInfo.department}
                  </span>
                </h2>

                <div style="
                  width: 100%;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 32px;
                "></div>

                <!-- Profile Section -->
                <section style="width: 100%; margin-bottom: 32px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    PROFILE
                  </h3>
                  <p style="
                    font-size: 12px;
                    color: #374151;
                    line-height: 1.6;
                  ">
                    ${templateData.profile}
                  </p>
                </section>

                <!-- Skills Section -->
                <section style="width: 100%; margin-bottom: 40px;">
                  <h3 style="
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 600;
                    color: #6b7280;
                    letter-spacing: 0.05em;
                    margin-bottom: 12px;
                  ">
                    SKILLS
                  </h3>
                  <ul style="
                    font-size: 12px;
                    color: #374151;
                    list-style-type: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                  ">
                    ${templateData.skills.map((skill) => `
                      <li style="margin-bottom: 4px;">
                        ${skill}
                      </li>
                    `).join("")}
                  </ul>
                </section>

                <!-- Contact Information -->
                <section style="
                  width: 100%;
                  color: #6b7280;
                  font-size: 12px;
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                ">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📍</span>
                    <span>${templateData.personalInfo.address}</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">✉️</span>
                    <a href="mailto:${templateData.personalInfo.email}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${templateData.personalInfo.email}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">📞</span>
                    <a href="tel:${templateData.personalInfo.phone}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${templateData.personalInfo.phone}
                    </a>
                  </div>
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <span style="width: 14px; text-align: center;">🔗</span>
                    <a href="https://${templateData.personalInfo.linkedin}" style="
                      color: #6b7280;
                      text-decoration: none;
                    ">
                      ${templateData.personalInfo.linkedin}
                    </a>
                  </div>
                </section>
              </section>

              <!-- Right Panel -->
              <section style="
                flex: 1;
                font-size: 13px;
                line-height: 1.6;
                color: #374151;
              ">
                <!-- Work Experience -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                ">
                  WORK EXPERIENCE
                </h3>
                <hr style="
                  border: none;
                  border-top: 1px solid #d1d5db;
                  margin-bottom: 24px;
                " />

                ${templateData.experience.map((job) => `
                  <article style="margin-bottom: 24px;">
                    <div style="
                      display: flex;
                      justify-content: space-between;
                      align-items: flex-start;
                      margin-bottom: 4px;
                    ">
                      <div>
                        ${job.company ? `
                          <p style="
                            font-weight: 600;
                            color: #111827;
                            font-size: 13px;
                            line-height: 1.2;
                            margin: 0;
                          ">
                            ${job.company}
                          </p>
                        ` : ""}
                        <p style="
                          font-style: italic;
                          font-size: 12px;
                          color: #374151;
                          line-height: 1.2;
                          margin: 0;
                        ">
                          ${job.position}
                        </p>
                      </div>
                      <p style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 600;
                        line-height: 1.2;
                        margin: 0;
                      ">
                        ${job.period}
                      </p>
                    </div>
                    <ul style="
                      list-style-type: disc;
                      list-style-position: inside;
                      font-size: 12px;
                      color: #374151;
                      margin: 0;
                      padding: 0;
                    ">
                      ${job.achievements.map((achievement) => `
                        <li style="margin-bottom: 4px;">
                          ${achievement}
                        </li>
                      `).join("")}
                    </ul>
                  </article>
                `).join("")}

                <!-- Education -->
                <h3 style="
                  text-transform: uppercase;
                  font-size: 12px;
                  font-weight: 600;
                  color: #6b7280;
                  letter-spacing: 0.05em;
                  margin-bottom: 8px;
                  margin-top: 40px;
                ">
                  ACADEMIC
                </h3>

                ${templateData.education.map((edu) => `
                  <article style="
                    font-size: 12px;
                    color: #374151;
                    margin-bottom: 12px;
                  ">
                    <p style="
                      font-weight: 600;
                      color: #111827;
                      font-size: 13px;
                      line-height: 1.2;
                      margin: 0;
                      display: flex;
                      justify-content: space-between;
                    ">
                      ${edu.institution}
                      <span style="
                        font-size: 11px;
                        color: #6b7280;
                        font-weight: 400;
                      ">
                        ${edu.period}
                      </span>
                    </p>
                    ${edu.degree ? `
                      <p style="
                        font-style: italic;
                        margin: 0;
                        line-height: 1.2;
                      ">
                        ${edu.degree}
                      </p>
                    ` : ""}
                  </article>
                `).join("")}
              </section>
            </main>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  const renderPersonalSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Personal Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.fullName,
            onChange: (e) => handlePersonalInfoChange("fullName", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Position" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.position,
            onChange: (e) => handlePersonalInfoChange("position", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Department" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.department,
            onChange: (e) => handlePersonalInfoChange("department", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: templateData.personalInfo.email,
            onChange: (e) => handlePersonalInfoChange("email", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.phone,
            onChange: (e) => handlePersonalInfoChange("phone", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.linkedin,
            onChange: (e) => handlePersonalInfoChange("linkedin", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: templateData.personalInfo.address,
            onChange: (e) => handlePersonalInfoChange("address", e.target.value),
            className: "form-textarea",
            rows: "3"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Profile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: templateData.profile,
            onChange: (e) => handleInputChange("profile", e.target.value),
            className: "form-textarea",
            rows: "4"
          }
        )
      ] })
    ] })
  ] });
  const renderSkillsSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Skills" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "qualifications-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-column", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Professional Skills" }),
      templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: skill,
            onChange: (e) => handleSkillChange(index, e.target.value),
            className: "form-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => removeSkill(index),
            className: "remove-btn",
            children: "✕"
          }
        )
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: addSkill2,
          className: "add-btn",
          children: "+ Add Skill"
        }
      )
    ] }) })
  ] });
  const renderEducationSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Education" }),
    templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Institution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.institution,
              onChange: (e) => handleEducationChange(index, "institution", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Degree/Program" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.degree,
              onChange: (e) => handleEducationChange(index, "degree", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.period,
              onChange: (e) => handleEducationChange(index, "period", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeEducation(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Education"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addEducation2,
        className: "add-btn",
        children: "+ Add Education"
      }
    )
  ] });
  const renderExperienceSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Work Experience" }),
    templateData.experience.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.company,
              onChange: (e) => handleExperienceChange(index, "company", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.position,
              onChange: (e) => handleExperienceChange(index, "position", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.period,
              onChange: (e) => handleExperienceChange(index, "period", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "responsibilities-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Key Achievements" }),
        exp.achievements.map((ach, achIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: ach,
              onChange: (e) => handleAchievementChange(index, achIndex, e.target.value),
              className: "form-textarea",
              rows: "2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeAchievement(index, achIndex),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, achIndex)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => addAchievement2(index),
            className: "add-btn small",
            children: "+ Add Achievement"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeExperience(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Experience"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addExperience,
        className: "add-btn",
        children: "+ Add Experience"
      }
    )
  ] });
  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalSection();
      case "skills":
        return renderSkillsSection();
      case "education":
        return renderEducationSection();
      case "experience":
        return renderExperienceSection();
      default:
        return renderPersonalSection();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-editor", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack,
          "aria-label": "Go back",
          children: "← Back to Template"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Edit Executive Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customize your resume content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "save-btn", onClick: handleSave, children: "💾 Save Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "editor-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "personal" ? "active" : ""}`,
            onClick: () => setActiveSection("personal"),
            children: "👤 Personal Info"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "skills" ? "active" : ""}`,
            onClick: () => setActiveSection("skills"),
            children: "🎯 Skills"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "education" ? "active" : ""}`,
            onClick: () => setActiveSection("education"),
            children: "🎓 Education"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "experience" ? "active" : ""}`,
            onClick: () => setActiveSection("experience"),
            children: "💼 Experience"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-main", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-form", children: renderActiveSection() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-preview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Live Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          backgroundImage: 'url("/Executive.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          minHeight: "400px",
          borderRadius: "8px",
          position: "relative"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "scale(0.4)", transformOrigin: "top left", width: "250%", height: "250%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExecutiveTemplate, { data: templateData }) }) }) }) })
      ] })
    ] })
  ] });
}
const ModernTemplate = ({ data }) => {
  const defaultData = {
    personalInfo: {
      fullName: "Alfredo Curtis",
      position: "UX / UI Designer",
      photo: null,
      location: "Istanbul, Türkiye",
      experience: "6 years of experience creating captivating web and mobile interfaces.",
      description: "Graphic design graduate from Istanbul University, blending strong visual aesthetics with user-centric design principles. Passionate about transforming complex ideas into intuitive, engaging digital experiences. Constantly evolving skill set to stay ahead in the fast-paced tech world."
    },
    contact: {
      website: "burakhanarsicicek.com",
      email: "burakhanarsicicek@outlook.com",
      phone: "+90 505 514 9960",
      linkedin: "Linkedin"
    },
    skills: [
      "Product design",
      "Prototyping",
      "Flowchart",
      "Wireframing",
      "Interface design"
    ],
    tools: [
      "Figma",
      "Framer",
      "Adobe XD",
      "Sketch",
      "Photoshop"
    ],
    languages: [
      "Turkish (Native)",
      "English (C1)"
    ],
    experience: [
      {
        position: "Product Designer",
        company: "Air BnB",
        year: "2024"
      },
      {
        position: "Framer Partner",
        company: "Framer",
        year: "2024"
      },
      {
        position: "Project Manager",
        company: "Apple",
        year: "2023"
      },
      {
        position: "UX / UI Designer",
        company: "Fiverr LTD",
        year: "2020"
      },
      {
        position: "Graphic Designer",
        company: "Meta Inc.",
        year: "2018"
      },
      {
        position: "Accounting Intern",
        company: "Domino's",
        year: "2017"
      }
    ],
    education: [
      {
        degree: "Computer Programming",
        institution: "Istanbul University",
        period: "August 2024"
      }
    ],
    portfolio: {
      text: "Check out my portfolio",
      qrCode: null
    }
  };
  const templateData = data || defaultData;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: "#f3f4f6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "16px"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: {
    backgroundColor: "white",
    maxWidth: "800px",
    width: "100%",
    padding: "32px",
    position: "relative",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      gap: "24px",
      marginBottom: "24px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "100px",
        height: "100px",
        borderRadius: "12px",
        backgroundColor: "#f3f4f6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#374151",
        flexShrink: 0,
        backgroundImage: templateData.personalInfo.photo ? `url(${templateData.personalInfo.photo})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }, children: !templateData.personalInfo.photo && templateData.personalInfo.fullName.split(" ").map((n) => n[0]).join("") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        flex: 1,
        fontSize: "13px",
        lineHeight: "1.4",
        color: "#1a1a1a"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
          fontWeight: "600",
          fontSize: "14px",
          margin: "0 0 2px 0"
        }, children: templateData.personalInfo.fullName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          color: "#666666",
          marginBottom: "8px",
          fontSize: "12px",
          margin: "0 0 8px 0"
        }, children: templateData.personalInfo.position }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { margin: "0 0 8px 0" }, children: [
          "Based in ",
          templateData.personalInfo.location,
          ". ",
          templateData.personalInfo.experience
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0" }, children: templateData.personalInfo.description })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      marginTop: "24px",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "32px 32px",
      fontSize: "11px",
      color: "#1a1a1a"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontWeight: "600",
          marginBottom: "4px",
          fontSize: "12px",
          margin: "0 0 4px 0"
        }, children: "Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "2px"
        }, children: templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: skill }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontWeight: "600",
          marginBottom: "4px",
          fontSize: "12px",
          margin: "0 0 4px 0"
        }, children: "Tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "2px"
        }, children: templateData.tools.map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: tool }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontWeight: "600",
          marginBottom: "4px",
          fontSize: "12px",
          margin: "0 0 4px 0"
        }, children: "Languages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "2px"
        }, children: templateData.languages.map((language, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: language }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontWeight: "600",
          marginBottom: "4px",
          fontSize: "12px",
          margin: "0 0 4px 0"
        }, children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { style: {
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "2px"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `https://${templateData.contact.website}`, style: {
            color: "#1a1a1a",
            textDecoration: "underline"
          }, children: templateData.contact.website }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${templateData.contact.email}`, style: {
            color: "#1a1a1a",
            textDecoration: "underline"
          }, children: templateData.contact.email }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${templateData.contact.phone}`, style: {
            color: "#1a1a1a",
            textDecoration: "underline"
          }, children: templateData.contact.phone }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", style: {
            color: "#1a1a1a",
            textDecoration: "underline"
          }, children: templateData.contact.linkedin }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      marginTop: "24px",
      fontSize: "12px",
      color: "#1a1a1a"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontWeight: "600",
        marginBottom: "12px",
        fontSize: "13px",
        margin: "0 0 12px 0"
      }, children: "Work Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "32px 32px"
      }, children: templateData.experience.map((job, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "2px",
          margin: "0 0 2px 0"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "black",
            display: "inline-block"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "600" }, children: job.position })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "11px",
          marginBottom: "2px",
          margin: "0 0 2px 0"
        }, children: job.company }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "10px",
          color: "#666666",
          margin: "0"
        }, children: job.year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { style: {
          border: "none",
          borderTop: "1px solid #d9d9d9",
          marginTop: "12px",
          margin: "12px 0 0 0"
        } })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      marginTop: "24px",
      fontSize: "12px",
      color: "#1a1a1a"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontWeight: "600",
        marginBottom: "8px",
        fontSize: "13px",
        margin: "0 0 8px 0"
      }, children: "Education" }),
      templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "2px",
          margin: "0 0 2px 0"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "black",
            display: "inline-block"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: "600" }, children: edu.degree })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "11px",
          marginBottom: "2px",
          margin: "0 0 2px 0"
        }, children: edu.institution }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "10px",
          color: "#666666",
          margin: "0"
        }, children: edu.period })
      ] }, index))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: {
      marginTop: "32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "12px",
      color: "#1a1a1a",
      fontFamily: "'Indie Flower', cursive",
      position: "absolute",
      bottom: "32px",
      right: "32px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
        marginBottom: "4px",
        lineHeight: "1.1",
        textAlign: "center",
        margin: "0 0 4px 0"
      }, children: [
        templateData.portfolio.text.split(" ").slice(0, 2).join(" "),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        templateData.portfolio.text.split(" ").slice(2).join(" ")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "80px",
        height: "80px",
        backgroundColor: "#f3f4f6",
        border: "2px solid #e5e7eb",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        color: "#6b7280",
        textAlign: "center",
        backgroundImage: templateData.portfolio.qrCode ? `url(${templateData.portfolio.qrCode})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }, children: !templateData.portfolio.qrCode && "QR Code" })
    ] })
  ] }) });
};
function ModernTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    personalInfo: {
      fullName: "Alfredo Curtis",
      position: "UX / UI Designer",
      photo: null,
      location: "Istanbul, Türkiye",
      experience: "6 years of experience creating captivating web and mobile interfaces.",
      description: "Graphic design graduate from Istanbul University, blending strong visual aesthetics with user-centric design principles. Passionate about transforming complex ideas into intuitive, engaging digital experiences. Constantly evolving skill set to stay ahead in the fast-paced tech world."
    },
    contact: {
      website: "burakhanarsicicek.com",
      email: "burakhanarsicicek@outlook.com",
      phone: "+90 505 514 9960",
      linkedin: "Linkedin"
    },
    skills: [
      "Product design",
      "Prototyping",
      "Flowchart",
      "Wireframing",
      "Interface design"
    ],
    tools: [
      "Figma",
      "Framer",
      "Adobe XD",
      "Sketch",
      "Photoshop"
    ],
    languages: [
      "Turkish (Native)",
      "English (C1)"
    ],
    experience: [
      {
        position: "Product Designer",
        company: "Air BnB",
        year: "2024"
      },
      {
        position: "Framer Partner",
        company: "Framer",
        year: "2024"
      },
      {
        position: "Project Manager",
        company: "Apple",
        year: "2023"
      },
      {
        position: "UX / UI Designer",
        company: "Fiverr LTD",
        year: "2020"
      },
      {
        position: "Graphic Designer",
        company: "Meta Inc.",
        year: "2018"
      },
      {
        position: "Accounting Intern",
        company: "Domino's",
        year: "2017"
      }
    ],
    education: [
      {
        degree: "Computer Programming",
        institution: "Istanbul University",
        period: "August 2024"
      }
    ],
    portfolio: {
      text: "Check out my portfolio",
      qrCode: null
    }
  };
  const [templateData, setTemplateData] = reactExports.useState(initialData || defaultData);
  const [activeSection, setActiveSection] = reactExports.useState("personal");
  const handlePersonalInfoChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };
  const handleContactChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }));
  };
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setTemplateData((prev) => ({
            ...prev,
            personalInfo: {
              ...prev.personalInfo,
              photo: e.target.result
            }
          }));
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid image file (PNG, JPG, JPEG, GIF)");
      }
    }
  };
  const removePhoto = () => {
    setTemplateData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        photo: null
      }
    }));
  };
  const handleQRCodeUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setTemplateData((prev) => ({
            ...prev,
            portfolio: {
              ...prev.portfolio,
              qrCode: e.target.result
            }
          }));
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid image file (PNG, JPG, JPEG, GIF)");
      }
    }
  };
  const removeQRCode = () => {
    setTemplateData((prev) => ({
      ...prev,
      portfolio: {
        ...prev.portfolio,
        qrCode: null
      }
    }));
  };
  const handleSkillChange = (index, value) => {
    setTemplateData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };
  const addSkill2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      skills: [...prev.skills, "New skill"]
    }));
  };
  const removeSkill = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };
  const handleToolChange = (index, value) => {
    setTemplateData((prev) => ({
      ...prev,
      tools: prev.tools.map((tool, i) => i === index ? value : tool)
    }));
  };
  const addTool = () => {
    setTemplateData((prev) => ({
      ...prev,
      tools: [...prev.tools, "New tool"]
    }));
  };
  const removeTool = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      tools: prev.tools.filter((_, i) => i !== index)
    }));
  };
  const handleLanguageChange = (index, value) => {
    setTemplateData((prev) => ({
      ...prev,
      languages: prev.languages.map((lang, i) => i === index ? value : lang)
    }));
  };
  const addLanguage = () => {
    setTemplateData((prev) => ({
      ...prev,
      languages: [...prev.languages, "New language"]
    }));
  };
  const removeLanguage = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, i) => i !== index)
    }));
  };
  const handleEducationChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.map(
        (edu, i) => i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };
  const addEducation2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", institution: "", period: "" }]
    }));
  };
  const removeEducation = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };
  const handleExperienceChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };
  const addExperience = () => {
    setTemplateData((prev) => ({
      ...prev,
      experience: [...prev.experience, {
        position: "",
        company: "",
        year: ""
      }]
    }));
  };
  const removeExperience = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };
  const handleSave = () => {
    if (onSave) {
      onSave(templateData);
    }
    alert("Template saved successfully! Changes will be reflected in the preview.");
  };
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${templateData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Inter', sans-serif;
              background: #f3f4f6;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div style="
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 16px;
          ">
            <main style="
              background-color: white;
              max-width: 800px;
              width: 100%;
              padding: 32px;
              position: relative;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
            ">
              <!-- Header Section -->
              <section style="
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                gap: 24px;
                margin-bottom: 24px;
              ">
                <!-- Profile Photo -->
                <div style="
                  width: 100px;
                  height: 100px;
                  border-radius: 12px;
                  background-color: #f3f4f6;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  font-weight: bold;
                  color: #374151;
                  flex-shrink: 0;
                  ${templateData.personalInfo.photo ? `background-image: url(${templateData.personalInfo.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ""}
                ">
                  ${!templateData.personalInfo.photo ? templateData.personalInfo.fullName.split(" ").map((n) => n[0]).join("") : ""}
                </div>

                <!-- Personal Info -->
                <div style="
                  flex: 1;
                  font-size: 13px;
                  line-height: 1.4;
                  color: #1a1a1a;
                ">
                  <h1 style="
                    font-weight: 600;
                    font-size: 14px;
                    margin: 0 0 2px 0;
                  ">
                    ${templateData.personalInfo.fullName}
                  </h1>
                  
                  <p style="
                    color: #666666;
                    margin: 0 0 8px 0;
                    font-size: 12px;
                  ">
                    ${templateData.personalInfo.position}
                  </p>
                  
                  <p style="margin: 0 0 8px 0;">
                    Based in ${templateData.personalInfo.location}. ${templateData.personalInfo.experience}
                  </p>
                  
                  <p style="margin: 0;">
                    ${templateData.personalInfo.description}
                  </p>
                </div>
              </section>

              <!-- Skills, Tools, Languages & Contact Grid -->
              <section style="
                margin-top: 24px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 32px;
                font-size: 11px;
                color: #1a1a1a;
              ">
                <!-- Skills -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Skills
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${templateData.skills.map((skill) => `<li>${skill}</li>`).join("")}
                  </ul>
                </div>

                <!-- Tools -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Tools
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${templateData.tools.map((tool) => `<li>${tool}</li>`).join("")}
                  </ul>
                </div>

                <!-- Languages -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Languages
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${templateData.languages.map((language) => `<li>${language}</li>`).join("")}
                  </ul>
                </div>

                <!-- Contact -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Contact
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    <li>
                      <a href="https://${templateData.contact.website}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${templateData.contact.website}
                      </a>
                    </li>
                    <li>
                      <a href="mailto:${templateData.contact.email}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${templateData.contact.email}
                      </a>
                    </li>
                    <li>
                      <a href="tel:${templateData.contact.phone}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${templateData.contact.phone}
                      </a>
                    </li>
                    <li>
                      <a href="#" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${templateData.contact.linkedin}
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <!-- Work Experience Section -->
              <section style="
                margin-top: 24px;
                font-size: 12px;
                color: #1a1a1a;
              ">
                <h2 style="
                  font-weight: 600;
                  margin: 0 0 12px 0;
                  font-size: 13px;
                ">
                  Work Experience
                </h2>
                
                <div style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 32px;
                ">
                  ${templateData.experience.map((job) => `
                    <div>
                      <p style="
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin: 0 0 2px 0;
                      ">
                        <span style="
                          width: 8px;
                          height: 8px;
                          border-radius: 50%;
                          background-color: black;
                          display: inline-block;
                        "></span>
                        <span style="font-weight: 600;">
                          ${job.position}
                        </span>
                      </p>
                      <p style="
                        font-size: 11px;
                        margin: 0 0 2px 0;
                      ">
                        ${job.company}
                      </p>
                      <p style="
                        font-size: 10px;
                        color: #666666;
                        margin: 0;
                      ">
                        ${job.year}
                      </p>
                      <hr style="
                        border: none;
                        border-top: 1px solid #d9d9d9;
                        margin: 12px 0 0 0;
                      " />
                    </div>
                  `).join("")}
                </div>
              </section>

              <!-- Education Section -->
              <section style="
                margin-top: 24px;
                font-size: 12px;
                color: #1a1a1a;
              ">
                <h2 style="
                  font-weight: 600;
                  margin: 0 0 8px 0;
                  font-size: 13px;
                ">
                  Education
                </h2>
                
                ${templateData.education.map((edu) => `
                  <div>
                    <p style="
                      display: flex;
                      align-items: center;
                      gap: 8px;
                      margin: 0 0 2px 0;
                    ">
                      <span style="
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: black;
                        display: inline-block;
                      "></span>
                      <span style="font-weight: 600;">
                        ${edu.degree}
                      </span>
                    </p>
                    <p style="
                      font-size: 11px;
                      margin: 0 0 2px 0;
                    ">
                      ${edu.institution}
                    </p>
                    <p style="
                      font-size: 10px;
                      color: #666666;
                      margin: 0;
                    ">
                      ${edu.period}
                    </p>
                  </div>
                `).join("")}
              </section>

              <!-- Portfolio Section -->
              <section style="
                margin-top: 32px;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 12px;
                color: #1a1a1a;
                font-family: 'Indie Flower', cursive;
                position: absolute;
                bottom: 32px;
                right: 32px;
              ">
                <p style="
                  margin: 0 0 4px 0;
                  line-height: 1.1;
                  text-align: center;
                ">
                  ${templateData.portfolio.text.split(" ").slice(0, 2).join(" ")}<br/>
                  ${templateData.portfolio.text.split(" ").slice(2).join(" ")}
                </p>
                
                <div style="
                  width: 80px;
                  height: 80px;
                  background-color: #f3f4f6;
                  border: 2px solid #e5e7eb;
                  border-radius: 4px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 10px;
                  color: #6b7280;
                  text-align: center;
                  ${templateData.portfolio.qrCode ? `background-image: url(${templateData.portfolio.qrCode}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ""}
                ">
                  ${!templateData.portfolio.qrCode ? "QR Code" : ""}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  const renderPersonalSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Personal Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.fullName,
            onChange: (e) => handlePersonalInfoChange("fullName", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Job Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.position,
            onChange: (e) => handlePersonalInfoChange("position", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.location,
            onChange: (e) => handlePersonalInfoChange("location", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Profile Photo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
          templateData.personalInfo.photo && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: templateData.personalInfo.photo,
                alt: "Profile preview",
                style: {
                  width: "60px",
                  height: "60px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  border: "2px solid #ddd"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: removePhoto,
                className: "remove-btn",
                style: { padding: "5px 10px", fontSize: "12px" },
                children: "Remove Photo"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              onChange: handlePhotoUpload,
              className: "form-input",
              style: { padding: "8px" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Experience Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.experience,
            onChange: (e) => handlePersonalInfoChange("experience", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            value: templateData.personalInfo.description,
            onChange: (e) => handlePersonalInfoChange("description", e.target.value),
            className: "form-textarea",
            rows: "4"
          }
        )
      ] })
    ] })
  ] });
  const renderContactSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Contact Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Website" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.contact.website,
            onChange: (e) => handleContactChange("website", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: templateData.contact.email,
            onChange: (e) => handleContactChange("email", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.contact.phone,
            onChange: (e) => handleContactChange("phone", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "LinkedIn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.contact.linkedin,
            onChange: (e) => handleContactChange("linkedin", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Portfolio QR Code" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
          templateData.portfolio.qrCode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: templateData.portfolio.qrCode,
                alt: "QR Code preview",
                style: {
                  width: "60px",
                  height: "60px",
                  borderRadius: "4px",
                  objectFit: "cover",
                  border: "2px solid #ddd"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: removeQRCode,
                className: "remove-btn",
                style: { padding: "5px 10px", fontSize: "12px" },
                children: "Remove QR Code"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              onChange: handleQRCodeUpload,
              className: "form-input",
              style: { padding: "8px" }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Portfolio Text" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.portfolio.text,
            onChange: (e) => setTemplateData((prev) => ({
              ...prev,
              portfolio: {
                ...prev.portfolio,
                text: e.target.value
              }
            })),
            className: "form-input"
          }
        )
      ] })
    ] })
  ] });
  const renderSkillsSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Skills & Tools" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualifications-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Skills" }),
        templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: skill,
              onChange: (e) => handleSkillChange(index, e.target.value),
              className: "form-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeSkill(index),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, index)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: addSkill2,
            className: "add-btn",
            children: "+ Add Skill"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-column", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Tools" }),
        templateData.tools.map((tool, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: tool,
              onChange: (e) => handleToolChange(index, e.target.value),
              className: "form-input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeTool(index),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, index)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: addTool,
            className: "add-btn",
            children: "+ Add Tool"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Languages" }),
      templateData.languages.map((language, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: language,
            onChange: (e) => handleLanguageChange(index, e.target.value),
            className: "form-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => removeLanguage(index),
            className: "remove-btn",
            children: "✕"
          }
        )
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: addLanguage,
          className: "add-btn",
          children: "+ Add Language"
        }
      )
    ] })
  ] });
  const renderEducationSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Education" }),
    templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Degree" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.degree,
              onChange: (e) => handleEducationChange(index, "degree", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Institution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.institution,
              onChange: (e) => handleEducationChange(index, "institution", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.period,
              onChange: (e) => handleEducationChange(index, "period", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeEducation(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Education"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addEducation2,
        className: "add-btn",
        children: "+ Add Education"
      }
    )
  ] });
  const renderExperienceSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Work Experience" }),
    templateData.experience.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.position,
              onChange: (e) => handleExperienceChange(index, "position", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.company,
              onChange: (e) => handleExperienceChange(index, "company", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Year" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.year,
              onChange: (e) => handleExperienceChange(index, "year", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeExperience(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Experience"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addExperience,
        className: "add-btn",
        children: "+ Add Experience"
      }
    )
  ] });
  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalSection();
      case "contact":
        return renderContactSection();
      case "skills":
        return renderSkillsSection();
      case "education":
        return renderEducationSection();
      case "experience":
        return renderExperienceSection();
      default:
        return renderPersonalSection();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-editor", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack,
          "aria-label": "Go back",
          children: "← Back to Template"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Edit Modern Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customize your resume content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "save-btn", onClick: handleSave, children: "💾 Save Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "editor-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "personal" ? "active" : ""}`,
            onClick: () => setActiveSection("personal"),
            children: "👤 Personal Info"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "contact" ? "active" : ""}`,
            onClick: () => setActiveSection("contact"),
            children: "📞 Contact & Portfolio"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "skills" ? "active" : ""}`,
            onClick: () => setActiveSection("skills"),
            children: "🎯 Skills & Tools"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "education" ? "active" : ""}`,
            onClick: () => setActiveSection("education"),
            children: "🎓 Education"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "experience" ? "active" : ""}`,
            onClick: () => setActiveSection("experience"),
            children: "💼 Experience"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-main", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-form", children: renderActiveSection() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-preview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Live Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          backgroundImage: 'url("/mordern.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          minHeight: "400px",
          borderRadius: "8px",
          position: "relative"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "scale(0.4)", transformOrigin: "top left", width: "250%", height: "250%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModernTemplate, { data: templateData }) }) }) }) })
      ] })
    ] })
  ] });
}
function EmailPopup({ isOpen, onClose, onSubmit, isLoading }) {
  const [email, setEmail] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  const validateEmail = (email2) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email2);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit(email);
    }
  };
  const handleClose = () => {
    setEmail("");
    setErrors({});
    onClose();
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popup-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popup-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popup-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "📧 Get Your Resume as PDF" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "close-btn",
          onClick: handleClose,
          disabled: isLoading,
          children: "×"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "popup-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Enter your email address and we'll send your professional resume as a PDF directly to your inbox." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "email-form", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              id: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: "Enter your email address",
              className: errors.email ? "error" : "",
              disabled: isLoading,
              autoFocus: true
            }
          ),
          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-text", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-actions", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "cancel-btn",
              onClick: handleClose,
              disabled: isLoading,
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "submit",
              className: "send-btn",
              disabled: isLoading,
              children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "loading-spinner" }),
                "Sending..."
              ] }) : "📤 Send PDF to Email"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "popup-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("small", { children: "🔒 Your email is secure and will only be used to send the resume. We don't store or share your information." }) })
    ] })
  ] }) });
}
function Notification({ type = "success", message, isVisible, onClose, duration = 4e3 }) {
  reactExports.useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);
  if (!isVisible) return null;
  const getIcon = () => {
    switch (type) {
      case "success":
        return "✅";
      case "error":
        return "❌";
      case "warning":
        return "⚠️";
      case "info":
        return "ℹ️";
      default:
        return "✅";
    }
  };
  const getTypeClass = () => {
    switch (type) {
      case "success":
        return "notification-success";
      case "error":
        return "notification-error";
      case "warning":
        return "notification-warning";
      case "info":
        return "notification-info";
      default:
        return "notification-success";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `notification ${getTypeClass()}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "notification-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "notification-icon", children: getIcon() }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "notification-message", children: message })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        className: "notification-close",
        onClick: onClose,
        "aria-label": "Close notification",
        children: "×"
      }
    )
  ] });
}
const sendResumeByEmail = async (email, resumeData, templateType = "modern") => {
  await new Promise((resolve) => setTimeout(resolve, 2e3));
  try {
    console.log("Sending resume to:", email);
    console.log("Resume data:", resumeData);
    console.log("Template type:", templateType);
    const response = {
      success: true,
      message: "Resume sent successfully to your email!",
      emailId: `email_${Date.now()}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    };
    return response;
  } catch (error) {
    console.error("Email sending error:", error);
    throw new Error("Failed to send resume. Please try again later.");
  }
};
function ModernResumeTemplate({ onNavigateBack }) {
  const [currentView, setCurrentView] = reactExports.useState("preview");
  const [templateData, setTemplateData] = reactExports.useState(null);
  const [showEmailPopup, setShowEmailPopup] = reactExports.useState(false);
  const [isEmailLoading, setIsEmailLoading] = reactExports.useState(false);
  const [notification, setNotification] = reactExports.useState({
    isVisible: false,
    type: "success",
    message: ""
  });
  const handleEditTemplate = () => {
    setCurrentView("editor");
  };
  const handleBackToPreview = () => {
    setCurrentView("preview");
  };
  const handleSaveTemplate = (data) => {
    setTemplateData(data);
  };
  const handleEmailSubmit = async (email) => {
    setIsEmailLoading(true);
    try {
      await sendResumeByEmail(email, templateData, "modern");
      setShowEmailPopup(false);
      setNotification({
        isVisible: true,
        type: "success",
        message: `Resume sent successfully to ${email}! Check your inbox.`
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setNotification({
        isVisible: true,
        type: "error",
        message: "Failed to send resume. Please try again later."
      });
    } finally {
      setIsEmailLoading(false);
    }
  };
  const hideNotification = () => {
    setNotification({ ...notification, isVisible: false });
  };
  const handleDownloadPDF = () => {
    setShowEmailPopup(true);
  };
  const handleDirectDownload = () => {
    const printWindow = window.open("", "_blank");
    const currentData = templateData || {
      personalInfo: {
        fullName: "Alfredo Curtis",
        position: "UX / UI Designer",
        photo: null,
        location: "Istanbul, Türkiye",
        experience: "6 years of experience creating captivating web and mobile interfaces.",
        description: "Graphic design graduate from Istanbul University, blending strong visual aesthetics with user-centric design principles. Passionate about transforming complex ideas into intuitive, engaging digital experiences. Constantly evolving skill set to stay ahead in the fast-paced tech world."
      },
      contact: {
        website: "burakhanarsicicek.com",
        email: "burakhanarsicicek@outlook.com",
        phone: "+90 505 514 9960",
        linkedin: "Linkedin"
      },
      skills: [
        "Product design",
        "Prototyping",
        "Flowchart",
        "Wireframing",
        "Interface design"
      ],
      tools: [
        "Figma",
        "Framer",
        "Adobe XD",
        "Sketch",
        "Photoshop"
      ],
      languages: [
        "Turkish (Native)",
        "English (C1)"
      ],
      experience: [
        {
          position: "Product Designer",
          company: "Air BnB",
          year: "2024"
        },
        {
          position: "Framer Partner",
          company: "Framer",
          year: "2024"
        },
        {
          position: "Project Manager",
          company: "Apple",
          year: "2023"
        },
        {
          position: "UX / UI Designer",
          company: "Fiverr LTD",
          year: "2020"
        },
        {
          position: "Graphic Designer",
          company: "Meta Inc.",
          year: "2018"
        },
        {
          position: "Accounting Intern",
          company: "Domino's",
          year: "2017"
        }
      ],
      education: [
        {
          degree: "Computer Programming",
          institution: "Istanbul University",
          period: "August 2024"
        }
      ],
      portfolio: {
        text: "Check out my portfolio",
        qrCode: null
      }
    };
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${currentData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Inter', sans-serif;
              background: #f3f4f6;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div style="
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 16px;
          ">
            <main style="
              background-color: white;
              max-width: 800px;
              width: 100%;
              padding: 32px;
              position: relative;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
            ">
              <!-- Header Section -->
              <section style="
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                gap: 24px;
                margin-bottom: 24px;
              ">
                <!-- Profile Photo -->
                <div style="
                  width: 100px;
                  height: 100px;
                  border-radius: 12px;
                  background-color: #f3f4f6;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 24px;
                  font-weight: bold;
                  color: #374151;
                  flex-shrink: 0;
                  ${currentData.personalInfo.photo ? `background-image: url(${currentData.personalInfo.photo}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ""}
                ">
                  ${!currentData.personalInfo.photo ? currentData.personalInfo.fullName.split(" ").map((n) => n[0]).join("") : ""}
                </div>

                <!-- Personal Info -->
                <div style="
                  flex: 1;
                  font-size: 13px;
                  line-height: 1.4;
                  color: #1a1a1a;
                ">
                  <h1 style="
                    font-weight: 600;
                    font-size: 14px;
                    margin: 0 0 2px 0;
                  ">
                    ${currentData.personalInfo.fullName}
                  </h1>
                  
                  <p style="
                    color: #666666;
                    margin: 0 0 8px 0;
                    font-size: 12px;
                  ">
                    ${currentData.personalInfo.position}
                  </p>
                  
                  <p style="margin: 0 0 8px 0;">
                    Based in ${currentData.personalInfo.location}. ${currentData.personalInfo.experience}
                  </p>
                  
                  <p style="margin: 0;">
                    ${currentData.personalInfo.description}
                  </p>
                </div>
              </section>

              <!-- Skills, Tools, Languages & Contact Grid -->
              <section style="
                margin-top: 24px;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 32px;
                font-size: 11px;
                color: #1a1a1a;
              ">
                <!-- Skills -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Skills
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${currentData.skills.map((skill) => `<li>${skill}</li>`).join("")}
                  </ul>
                </div>

                <!-- Tools -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Tools
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${currentData.tools.map((tool) => `<li>${tool}</li>`).join("")}
                  </ul>
                </div>

                <!-- Languages -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Languages
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${currentData.languages.map((language) => `<li>${language}</li>`).join("")}
                  </ul>
                </div>

                <!-- Contact -->
                <div>
                  <h2 style="
                    font-weight: 600;
                    margin: 0 0 4px 0;
                    font-size: 12px;
                  ">
                    Contact
                  </h2>
                  <ul style="
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    <li>
                      <a href="https://${currentData.contact.website}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${currentData.contact.website}
                      </a>
                    </li>
                    <li>
                      <a href="mailto:${currentData.contact.email}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${currentData.contact.email}
                      </a>
                    </li>
                    <li>
                      <a href="tel:${currentData.contact.phone}" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${currentData.contact.phone}
                      </a>
                    </li>
                    <li>
                      <a href="#" style="
                        color: #1a1a1a;
                        text-decoration: underline;
                      ">
                        ${currentData.contact.linkedin}
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <!-- Work Experience Section -->
              <section style="
                margin-top: 24px;
                font-size: 12px;
                color: #1a1a1a;
              ">
                <h2 style="
                  font-weight: 600;
                  margin: 0 0 12px 0;
                  font-size: 13px;
                ">
                  Work Experience
                </h2>
                
                <div style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 32px;
                ">
                  ${currentData.experience.map((job) => `
                    <div>
                      <p style="
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin: 0 0 2px 0;
                      ">
                        <span style="
                          width: 8px;
                          height: 8px;
                          border-radius: 50%;
                          background-color: black;
                          display: inline-block;
                        "></span>
                        <span style="font-weight: 600;">
                          ${job.position}
                        </span>
                      </p>
                      <p style="
                        font-size: 11px;
                        margin: 0 0 2px 0;
                      ">
                        ${job.company}
                      </p>
                      <p style="
                        font-size: 10px;
                        color: #666666;
                        margin: 0;
                      ">
                        ${job.year}
                      </p>
                      <hr style="
                        border: none;
                        border-top: 1px solid #d9d9d9;
                        margin: 12px 0 0 0;
                      " />
                    </div>
                  `).join("")}
                </div>
              </section>

              <!-- Education Section -->
              <section style="
                margin-top: 24px;
                font-size: 12px;
                color: #1a1a1a;
              ">
                <h2 style="
                  font-weight: 600;
                  margin: 0 0 8px 0;
                  font-size: 13px;
                ">
                  Education
                </h2>
                
                ${currentData.education.map((edu) => `
                  <div>
                    <p style="
                      display: flex;
                      align-items: center;
                      gap: 8px;
                      margin: 0 0 2px 0;
                    ">
                      <span style="
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: black;
                        display: inline-block;
                      "></span>
                      <span style="font-weight: 600;">
                        ${edu.degree}
                      </span>
                    </p>
                    <p style="
                      font-size: 11px;
                      margin: 0 0 2px 0;
                    ">
                      ${edu.institution}
                    </p>
                    <p style="
                      font-size: 10px;
                      color: #666666;
                      margin: 0;
                    ">
                      ${edu.period}
                    </p>
                  </div>
                `).join("")}
              </section>

              <!-- Portfolio Section -->
              <section style="
                margin-top: 32px;
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 12px;
                color: #1a1a1a;
                font-family: 'Indie Flower', cursive;
                position: absolute;
                bottom: 32px;
                right: 32px;
              ">
                <p style="
                  margin: 0 0 4px 0;
                  line-height: 1.1;
                  text-align: center;
                ">
                  ${currentData.portfolio.text.split(" ").slice(0, 2).join(" ")}<br/>
                  ${currentData.portfolio.text.split(" ").slice(2).join(" ")}
                </p>
                
                <div style="
                  width: 80px;
                  height: 80px;
                  background-color: #f3f4f6;
                  border: 2px solid #e5e7eb;
                  border-radius: 4px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 10px;
                  color: #6b7280;
                  text-align: center;
                  ${currentData.portfolio.qrCode ? `background-image: url(${currentData.portfolio.qrCode}); background-size: cover; background-position: center; background-repeat: no-repeat;` : ""}
                ">
                  ${!currentData.portfolio.qrCode ? "QR Code" : ""}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  if (currentView === "editor") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      ModernTemplateEditor,
      {
        onNavigateBack: handleBackToPreview,
        onSave: handleSaveTemplate,
        initialData: templateData
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack,
          "aria-label": "Go back",
          children: "← Back to Templates"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Modern Resume Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Contemporary layout with clean typography" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "edit-btn", onClick: handleEditTemplate, children: "✏️ Edit Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownloadPDF, children: "� Get PDF via Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDirectDownload, style: { background: "#28a745" }, children: "�📄 Download Now" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModernTemplate, { data: templateData }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmailPopup,
      {
        isOpen: showEmailPopup,
        onClose: () => setShowEmailPopup(false),
        onSubmit: handleEmailSubmit,
        isLoading: isEmailLoading
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Notification,
      {
        type: notification.type,
        message: notification.message,
        isVisible: notification.isVisible,
        onClose: hideNotification
      }
    )
  ] });
}
function SimpleTemplate({ data }) {
  const defaultData = {
    personalInfo: {
      fullName: "SANDRA WARD",
      phone: "(555)555-5555",
      email: "example@example.com",
      address: "ABC Street, City, State 12345"
    },
    summary: "Highly skilled and creative Photographer with 4 years of experience in capturing stunning photographs for various clients and projects. Proficient in using Adobe Photoshop and Lightroom for editing and retouching images. Strong ability to understand client vision and deliver exceptional results. Experienced in graphic design and digital marketing, with a Bachelor's degree in Graphic Design and a Master's degree in Photography.",
    skills: [
      "Photographer",
      "Adobe Photoshop",
      "Lighting",
      "Photo Editing",
      "Graphic Design",
      "Digital Marketing",
      "Social Media Management",
      "Event Coordination"
    ],
    experience: [
      {
        position: "Photographer",
        company: "ABC Studios",
        location: "New York, New York",
        period: "Jan 2018 - Dec 2020",
        responsibilities: [
          "Captured high-quality photographs for various clients and projects",
          "Managed and organized photoshoots, including location scouting and model selection",
          "Edited and retouched images using Adobe Photoshop and Lightroom",
          "Collaborated with clients to understand their vision and deliver exceptional results"
        ]
      },
      {
        position: "Graphic Designer",
        company: "XYZ Agency",
        location: "Los Angeles, California",
        period: "Jan 2016 - Dec 2017",
        responsibilities: [
          "Designed and created visually appealing graphics for various marketing materials",
          "Collaborated with clients to understand their design needs and requirements",
          "Managed multiple projects simultaneously and met tight deadlines",
          "Worked closely with the marketing team to develop effective visual communication strategies"
        ]
      },
      {
        position: "Marketing Assistant",
        company: "123 Company",
        location: "Chicago, Illinois",
        period: "Jan 2014 - Dec 2015",
        responsibilities: [
          "Assisted in the development and implementation of marketing campaigns",
          "Conducted market research and analyzed consumer behavior",
          "Assisted social media accounts and created engaging content",
          "Assisted organizing and coordinating promotional events"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Fine Arts in Photography",
        institution: "University of ABC",
        location: "New York, New York",
        date: "Jun 2015"
      },
      {
        degree: "Bachelor of Arts in Graphic Design",
        institution: "XYZ College",
        location: "Los Angeles, California",
        date: "Jun 2013"
      }
    ]
  };
  const templateData = data || defaultData;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    fontFamily: "'Open Sans', sans-serif",
    backgroundColor: "white",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "24px"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: {
    backgroundColor: "white",
    borderRadius: "12px",
    maxWidth: "768px",
    width: "100%",
    padding: "40px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    position: "relative",
    zIndex: 10,
    marginTop: "48px",
    fontSize: "12px",
    lineHeight: "1.3",
    color: "#4b4b4b"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { style: {
      textAlign: "center",
      marginBottom: "24px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
        fontWeight: "800",
        color: "#374151",
        fontSize: "18px",
        letterSpacing: "0.05em",
        margin: "0"
      }, children: templateData.personalInfo.fullName }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
        marginTop: "4px",
        color: "#9ca3af",
        letterSpacing: "0.05em",
        margin: "4px 0 0 0"
      }, children: [
        templateData.personalInfo.phone,
        " • ",
        templateData.personalInfo.email,
        " • ",
        templateData.personalInfo.address
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontWeight: "bold",
        color: "#374151",
        fontSize: "12px",
        marginBottom: "4px",
        margin: "0 0 4px 0"
      }, children: "PROFESSIONAL SUMMARY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
        color: "#4b5563",
        lineHeight: "1.3",
        margin: "0"
      }, children: templateData.summary })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontWeight: "bold",
        color: "#374151",
        fontSize: "12px",
        marginBottom: "4px",
        margin: "0 0 4px 0"
      }, children: "SKILLS" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "0 24px",
        color: "#4b5563",
        fontSize: "12px",
        lineHeight: "1.3"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
          listStyle: "disc",
          listStylePosition: "inside",
          margin: "0",
          padding: "0",
          display: "flex",
          flexDirection: "column",
          gap: "2px"
        }, children: templateData.skills.slice(0, Math.ceil(templateData.skills.length / 2)).map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: skill }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
          listStyle: "disc",
          listStylePosition: "inside",
          margin: "0",
          padding: "0",
          display: "flex",
          flexDirection: "column",
          gap: "2px"
        }, children: templateData.skills.slice(Math.ceil(templateData.skills.length / 2)).map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: skill }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontWeight: "bold",
        color: "#374151",
        fontSize: "12px",
        marginBottom: "4px",
        margin: "0 0 4px 0"
      }, children: "WORK HISTORY" }),
      templateData.experience.map((job, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { style: {
        marginBottom: index === templateData.experience.length - 1 ? "0" : "12px"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
          color: "#4b5563",
          fontSize: "12px",
          fontWeight: "600",
          margin: "0"
        }, children: [
          job.period,
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          job.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
          fontWeight: "600",
          color: "#374151",
          fontSize: "12px",
          marginTop: "4px",
          margin: "4px 0 0 0"
        }, children: [
          job.position,
          " / ",
          job.company
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
          listStyle: "disc",
          listStylePosition: "inside",
          color: "#4b5563",
          fontSize: "12px",
          lineHeight: "1.3",
          marginTop: "4px",
          margin: "4px 0 0 0",
          padding: "0",
          display: "flex",
          flexDirection: "column",
          gap: "2px"
        }, children: job.responsibilities.map((responsibility, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: responsibility }, respIndex)) })
      ] }, index))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
        fontWeight: "bold",
        color: "#374151",
        fontSize: "12px",
        marginBottom: "4px",
        margin: "0 0 4px 0"
      }, children: "EDUCATION" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        color: "#4b5563",
        fontSize: "12px",
        lineHeight: "1.3",
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }, children: templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
          fontWeight: "600",
          margin: "0"
        }, children: [
          edu.date,
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          edu.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontWeight: "600",
          color: "#374151",
          marginTop: "2px",
          margin: "2px 0 0 0"
        }, children: edu.degree }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0" }, children: edu.institution })
      ] }, index)) })
    ] })
  ] }) });
}
function SimpleTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    personalInfo: {
      fullName: "SANDRA WARD",
      phone: "(555)555-5555",
      email: "example@example.com",
      address: "ABC Street, City, State 12345"
    },
    summary: "Highly skilled and creative Photographer with 4 years of experience in capturing stunning photographs for various clients and projects. Proficient in using Adobe Photoshop and Lightroom for editing and retouching images. Strong ability to understand client vision and deliver exceptional results. Experienced in graphic design and digital marketing, with a Bachelor's degree in Graphic Design and a Master's degree in Photography.",
    skills: [
      "Photographer",
      "Adobe Photoshop",
      "Lighting",
      "Photo Editing",
      "Graphic Design",
      "Digital Marketing",
      "Social Media Management",
      "Event Coordination"
    ],
    experience: [
      {
        position: "Photographer",
        company: "ABC Studios",
        location: "New York, New York",
        period: "Jan 2018 - Dec 2020",
        responsibilities: [
          "Captured high-quality photographs for various clients and projects",
          "Managed and organized photoshoots, including location scouting and model selection",
          "Edited and retouched images using Adobe Photoshop and Lightroom",
          "Collaborated with clients to understand their vision and deliver exceptional results"
        ]
      },
      {
        position: "Graphic Designer",
        company: "XYZ Agency",
        location: "Los Angeles, California",
        period: "Jan 2016 - Dec 2017",
        responsibilities: [
          "Designed and created visually appealing graphics for various marketing materials",
          "Collaborated with clients to understand their design needs and requirements",
          "Managed multiple projects simultaneously and met tight deadlines",
          "Worked closely with the marketing team to develop effective visual communication strategies"
        ]
      },
      {
        position: "Marketing Assistant",
        company: "123 Company",
        location: "Chicago, Illinois",
        period: "Jan 2014 - Dec 2015",
        responsibilities: [
          "Assisted in the development and implementation of marketing campaigns",
          "Conducted market research and analyzed consumer behavior",
          "Assisted social media accounts and created engaging content",
          "Assisted organizing and coordinating promotional events"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Fine Arts in Photography",
        institution: "University of ABC",
        location: "New York, New York",
        date: "Jun 2015"
      },
      {
        degree: "Bachelor of Arts in Graphic Design",
        institution: "XYZ College",
        location: "Los Angeles, California",
        date: "Jun 2013"
      }
    ]
  };
  const [templateData, setTemplateData] = reactExports.useState(initialData || defaultData);
  const [activeSection, setActiveSection] = reactExports.useState("personal");
  const handlePersonalInfoChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };
  const handleSummaryChange = (value) => {
    setTemplateData((prev) => ({
      ...prev,
      summary: value
    }));
  };
  const handleSkillChange = (index, value) => {
    setTemplateData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };
  const addSkill2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      skills: [...prev.skills, "New skill"]
    }));
  };
  const removeSkill = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };
  const handleExperienceChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };
  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.map(
            (resp, j) => j === respIndex ? value : resp
          )
        } : exp
      )
    }));
  };
  const addResponsibility = (expIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: [...exp.responsibilities, "New responsibility"]
        } : exp
      )
    }));
  };
  const removeResponsibility = (expIndex, respIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.filter((_, j) => j !== respIndex)
        } : exp
      )
    }));
  };
  const addExperience = () => {
    setTemplateData((prev) => ({
      ...prev,
      experience: [...prev.experience, {
        position: "",
        company: "",
        location: "",
        period: "",
        responsibilities: ["New responsibility"]
      }]
    }));
  };
  const removeExperience = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };
  const handleEducationChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.map(
        (edu, i) => i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };
  const addEducation2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", institution: "", location: "", date: "" }]
    }));
  };
  const removeEducation = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };
  const handleSave = () => {
    if (onSave) {
      onSave(templateData);
    }
    alert("Template saved successfully! Changes will be reflected in the preview.");
  };
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${templateData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Open Sans', sans-serif;
              background: white;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div style="
            font-family: 'Open Sans', sans-serif;
            background-color: white;
            min-height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 24px;
          ">
            <main style="
              background-color: white;
              border-radius: 12px;
              max-width: 768px;
              width: 100%;
              padding: 40px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              position: relative;
              z-index: 10;
              margin-top: 48px;
              font-size: 12px;
              line-height: 1.3;
              color: #4b4b4b;
            ">
              <!-- Header -->
              <header style="
                text-align: center;
                margin-bottom: 24px;
              ">
                <h1 style="
                  font-weight: 800;
                  color: #374151;
                  font-size: 18px;
                  letter-spacing: 0.05em;
                  margin: 0;
                ">
                  ${templateData.personalInfo.fullName}
                </h1>
                <p style="
                  margin-top: 4px;
                  color: #9ca3af;
                  letter-spacing: 0.05em;
                  margin: 4px 0 0 0;
                ">
                  ${templateData.personalInfo.phone} • ${templateData.personalInfo.email} • ${templateData.personalInfo.address}
                </p>
              </header>

              <!-- Professional Summary -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  PROFESSIONAL SUMMARY
                </h2>
                <p style="
                  color: #4b5563;
                  line-height: 1.3;
                  margin: 0;
                ">
                  ${templateData.summary}
                </p>
              </section>

              <!-- Skills -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  SKILLS
                </h2>
                <div style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 0 24px;
                  color: #4b5563;
                  font-size: 12px;
                  line-height: 1.3;
                ">
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${templateData.skills.slice(0, Math.ceil(templateData.skills.length / 2)).map((skill) => `<li>${skill}</li>`).join("")}
                  </ul>
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${templateData.skills.slice(Math.ceil(templateData.skills.length / 2)).map((skill) => `<li>${skill}</li>`).join("")}
                  </ul>
                </div>
              </section>

              <!-- Work History -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  WORK HISTORY
                </h2>
                ${templateData.experience.map((job, index) => `
                  <article style="
                    margin-bottom: ${index === templateData.experience.length - 1 ? "0" : "12px"};
                  ">
                    <p style="
                      color: #4b5563;
                      font-size: 12px;
                      font-weight: 600;
                      margin: 0;
                    ">
                      ${job.period}<br/>
                      ${job.location}
                    </p>
                    <p style="
                      font-weight: 600;
                      color: #374151;
                      font-size: 12px;
                      margin-top: 4px;
                      margin: 4px 0 0 0;
                    ">
                      ${job.position} / ${job.company}
                    </p>
                    <ul style="
                      list-style: disc;
                      list-style-position: inside;
                      color: #4b5563;
                      font-size: 12px;
                      line-height: 1.3;
                      margin-top: 4px;
                      margin: 4px 0 0 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 2px;
                    ">
                      ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
                    </ul>
                  </article>
                `).join("")}
              </section>

              <!-- Education -->
              <section>
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  EDUCATION
                </h2>
                <div style="
                  color: #4b5563;
                  font-size: 12px;
                  line-height: 1.3;
                  display: flex;
                  flex-direction: column;
                  gap: 12px;
                ">
                  ${templateData.education.map((edu) => `
                    <div>
                      <p style="
                        font-weight: 600;
                        margin: 0;
                      ">
                        ${edu.date}<br/>
                        ${edu.location}
                      </p>
                      <p style="
                        font-weight: 600;
                        color: #374151;
                        margin-top: 2px;
                        margin: 2px 0 0 0;
                      ">
                        ${edu.degree}
                      </p>
                      <p style="margin: 0;">
                        ${edu.institution}
                      </p>
                    </div>
                  `).join("")}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  const renderPersonalSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Personal Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.fullName,
            onChange: (e) => handlePersonalInfoChange("fullName", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.phone,
            onChange: (e) => handlePersonalInfoChange("phone", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: templateData.personalInfo.email,
            onChange: (e) => handlePersonalInfoChange("email", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.address,
            onChange: (e) => handlePersonalInfoChange("address", e.target.value),
            className: "form-input"
          }
        )
      ] })
    ] })
  ] });
  const renderSummarySection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Professional Summary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: templateData.summary,
          onChange: (e) => handleSummaryChange(e.target.value),
          className: "form-textarea",
          rows: "6"
        }
      )
    ] }) })
  ] });
  const renderSkillsSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Skills" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
      templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: skill,
            onChange: (e) => handleSkillChange(index, e.target.value),
            className: "form-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => removeSkill(index),
            className: "remove-btn",
            children: "✕"
          }
        )
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: addSkill2,
          className: "add-btn",
          children: "+ Add Skill"
        }
      )
    ] })
  ] });
  const renderExperienceSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Work Experience" }),
    templateData.experience.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-item", style: { marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.position,
              onChange: (e) => handleExperienceChange(index, "position", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.company,
              onChange: (e) => handleExperienceChange(index, "company", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.location,
              onChange: (e) => handleExperienceChange(index, "location", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.period,
              onChange: (e) => handleExperienceChange(index, "period", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "15px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Responsibilities" }),
        exp.responsibilities.map((resp, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", style: { marginBottom: "5px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: resp,
              onChange: (e) => handleResponsibilityChange(index, respIndex, e.target.value),
              className: "form-textarea",
              rows: "2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeResponsibility(index, respIndex),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, respIndex)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => addResponsibility(index),
            className: "add-btn",
            style: { fontSize: "12px", padding: "5px 10px" },
            children: "+ Add Responsibility"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeExperience(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Experience"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addExperience,
        className: "add-btn",
        children: "+ Add Experience"
      }
    )
  ] });
  const renderEducationSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Education" }),
    templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-item", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Degree" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.degree,
              onChange: (e) => handleEducationChange(index, "degree", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Institution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.institution,
              onChange: (e) => handleEducationChange(index, "institution", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.location,
              onChange: (e) => handleEducationChange(index, "location", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.date,
              onChange: (e) => handleEducationChange(index, "date", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeEducation(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Education"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addEducation2,
        className: "add-btn",
        children: "+ Add Education"
      }
    )
  ] });
  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalSection();
      case "summary":
        return renderSummarySection();
      case "skills":
        return renderSkillsSection();
      case "experience":
        return renderExperienceSection();
      case "education":
        return renderEducationSection();
      default:
        return renderPersonalSection();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-editor", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack,
          "aria-label": "Go back",
          children: "← Back to Template"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Edit Simple Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customize your resume content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "save-btn", onClick: handleSave, children: "💾 Save Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "editor-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "personal" ? "active" : ""}`,
            onClick: () => setActiveSection("personal"),
            children: "👤 Personal Info"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "summary" ? "active" : ""}`,
            onClick: () => setActiveSection("summary"),
            children: "📝 Summary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "skills" ? "active" : ""}`,
            onClick: () => setActiveSection("skills"),
            children: "🎯 Skills"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "experience" ? "active" : ""}`,
            onClick: () => setActiveSection("experience"),
            children: "💼 Experience"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "education" ? "active" : ""}`,
            onClick: () => setActiveSection("education"),
            children: "🎓 Education"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-main", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-form", children: renderActiveSection() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-preview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Live Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          backgroundImage: 'url("/simple.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          minHeight: "400px",
          borderRadius: "8px",
          position: "relative"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "scale(0.4)", transformOrigin: "top left", width: "250%", height: "250%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleTemplate, { data: templateData }) }) }) }) })
      ] })
    ] })
  ] });
}
function SimpleResumeTemplate({ onNavigateBack }) {
  const [currentView, setCurrentView] = reactExports.useState("preview");
  const [templateData, setTemplateData] = reactExports.useState(null);
  const [showEmailPopup, setShowEmailPopup] = reactExports.useState(false);
  const [isEmailLoading, setIsEmailLoading] = reactExports.useState(false);
  const [notification, setNotification] = reactExports.useState({
    isVisible: false,
    type: "success",
    message: ""
  });
  const handleEditTemplate = () => {
    setCurrentView("editor");
  };
  const handleBackToPreview = () => {
    setCurrentView("preview");
  };
  const handleSaveTemplate = (data) => {
    setTemplateData(data);
  };
  const handleEmailSubmit = async (email) => {
    setIsEmailLoading(true);
    try {
      await sendResumeByEmail(email, templateData, "simple");
      setShowEmailPopup(false);
      setNotification({
        isVisible: true,
        type: "success",
        message: `Resume sent successfully to ${email}! Check your inbox.`
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setNotification({
        isVisible: true,
        type: "error",
        message: "Failed to send resume. Please try again later."
      });
    } finally {
      setIsEmailLoading(false);
    }
  };
  const hideNotification = () => {
    setNotification({ ...notification, isVisible: false });
  };
  const handleDownloadPDF = () => {
    setShowEmailPopup(true);
  };
  const handleDirectDownload = () => {
    const printWindow = window.open("", "_blank");
    const currentData = templateData || {
      personalInfo: {
        fullName: "SANDRA WARD",
        phone: "(555)555-5555",
        email: "example@example.com",
        address: "ABC Street, City, State 12345"
      },
      summary: "Highly skilled and creative Photographer with 4 years of experience in capturing stunning photographs for various clients and projects. Proficient in using Adobe Photoshop and Lightroom for editing and retouching images. Strong ability to understand client vision and deliver exceptional results. Experienced in graphic design and digital marketing, with a Bachelor's degree in Graphic Design and a Master's degree in Photography.",
      skills: [
        "Photographer",
        "Adobe Photoshop",
        "Lighting",
        "Photo Editing",
        "Graphic Design",
        "Digital Marketing",
        "Social Media Management",
        "Event Coordination"
      ],
      experience: [
        {
          position: "Photographer",
          company: "ABC Studios",
          location: "New York, New York",
          period: "Jan 2018 - Dec 2020",
          responsibilities: [
            "Captured high-quality photographs for various clients and projects",
            "Managed and organized photoshoots, including location scouting and model selection",
            "Edited and retouched images using Adobe Photoshop and Lightroom",
            "Collaborated with clients to understand their vision and deliver exceptional results"
          ]
        },
        {
          position: "Graphic Designer",
          company: "XYZ Agency",
          location: "Los Angeles, California",
          period: "Jan 2016 - Dec 2017",
          responsibilities: [
            "Designed and created visually appealing graphics for various marketing materials",
            "Collaborated with clients to understand their design needs and requirements",
            "Managed multiple projects simultaneously and met tight deadlines",
            "Worked closely with the marketing team to develop effective visual communication strategies"
          ]
        },
        {
          position: "Marketing Assistant",
          company: "123 Company",
          location: "Chicago, Illinois",
          period: "Jan 2014 - Dec 2015",
          responsibilities: [
            "Assisted in the development and implementation of marketing campaigns",
            "Conducted market research and analyzed consumer behavior",
            "Assisted social media accounts and created engaging content",
            "Assisted organizing and coordinating promotional events"
          ]
        }
      ],
      education: [
        {
          degree: "Master of Fine Arts in Photography",
          institution: "University of ABC",
          location: "New York, New York",
          date: "Jun 2015"
        },
        {
          degree: "Bachelor of Arts in Graphic Design",
          institution: "XYZ College",
          location: "Los Angeles, California",
          date: "Jun 2013"
        }
      ]
    };
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${currentData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Open Sans', sans-serif;
              background: white;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div style="
            font-family: 'Open Sans', sans-serif;
            background-color: white;
            min-height: 100vh;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding: 24px;
          ">
            <main style="
              background-color: white;
              border-radius: 12px;
              max-width: 768px;
              width: 100%;
              padding: 40px;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              position: relative;
              z-index: 10;
              margin-top: 48px;
              font-size: 12px;
              line-height: 1.3;
              color: #4b4b4b;
            ">
              <!-- Header -->
              <header style="
                text-align: center;
                margin-bottom: 24px;
              ">
                <h1 style="
                  font-weight: 800;
                  color: #374151;
                  font-size: 18px;
                  letter-spacing: 0.05em;
                  margin: 0;
                ">
                  ${currentData.personalInfo.fullName}
                </h1>
                <p style="
                  margin-top: 4px;
                  color: #9ca3af;
                  letter-spacing: 0.05em;
                  margin: 4px 0 0 0;
                ">
                  ${currentData.personalInfo.phone} • ${currentData.personalInfo.email} • ${currentData.personalInfo.address}
                </p>
              </header>

              <!-- Professional Summary -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  PROFESSIONAL SUMMARY
                </h2>
                <p style="
                  color: #4b5563;
                  line-height: 1.3;
                  margin: 0;
                ">
                  ${currentData.summary}
                </p>
              </section>

              <!-- Skills -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  SKILLS
                </h2>
                <div style="
                  display: grid;
                  grid-template-columns: repeat(2, 1fr);
                  gap: 0 24px;
                  color: #4b5563;
                  font-size: 12px;
                  line-height: 1.3;
                ">
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${currentData.skills.slice(0, Math.ceil(currentData.skills.length / 2)).map((skill) => `<li>${skill}</li>`).join("")}
                  </ul>
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                  ">
                    ${currentData.skills.slice(Math.ceil(currentData.skills.length / 2)).map((skill) => `<li>${skill}</li>`).join("")}
                  </ul>
                </div>
              </section>

              <!-- Work History -->
              <section style="margin-bottom: 20px;">
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  WORK HISTORY
                </h2>
                ${currentData.experience.map((job, index) => `
                  <article style="
                    margin-bottom: ${index === currentData.experience.length - 1 ? "0" : "12px"};
                  ">
                    <p style="
                      color: #4b5563;
                      font-size: 12px;
                      font-weight: 600;
                      margin: 0;
                    ">
                      ${job.period}<br/>
                      ${job.location}
                    </p>
                    <p style="
                      font-weight: 600;
                      color: #374151;
                      font-size: 12px;
                      margin-top: 4px;
                      margin: 4px 0 0 0;
                    ">
                      ${job.position} / ${job.company}
                    </p>
                    <ul style="
                      list-style: disc;
                      list-style-position: inside;
                      color: #4b5563;
                      font-size: 12px;
                      line-height: 1.3;
                      margin-top: 4px;
                      margin: 4px 0 0 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 2px;
                    ">
                      ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
                    </ul>
                  </article>
                `).join("")}
              </section>

              <!-- Education -->
              <section>
                <h2 style="
                  font-weight: bold;
                  color: #374151;
                  font-size: 12px;
                  margin-bottom: 4px;
                  margin: 0 0 4px 0;
                ">
                  EDUCATION
                </h2>
                <div style="
                  color: #4b5563;
                  font-size: 12px;
                  line-height: 1.3;
                  display: flex;
                  flex-direction: column;
                  gap: 12px;
                ">
                  ${currentData.education.map((edu) => `
                    <div>
                      <p style="
                        font-weight: 600;
                        margin: 0;
                      ">
                        ${edu.date}<br/>
                        ${edu.location}
                      </p>
                      <p style="
                        font-weight: 600;
                        color: #374151;
                        margin-top: 2px;
                        margin: 2px 0 0 0;
                      ">
                        ${edu.degree}
                      </p>
                      <p style="margin: 0;">
                        ${edu.institution}
                      </p>
                    </div>
                  `).join("")}
                </div>
              </section>
            </main>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  if (currentView === "editor") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SimpleTemplateEditor,
      {
        onNavigateBack: handleBackToPreview,
        onSave: handleSaveTemplate,
        initialData: templateData
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack,
          "aria-label": "Go back",
          children: "← Back to Templates"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Simple Resume Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Straightforward and effective for all positions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "edit-btn", onClick: handleEditTemplate, children: "✏️ Edit Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownloadPDF, children: "� Get PDF via Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDirectDownload, style: { background: "#28a745" }, children: "�📄 Download Now" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleTemplate, { data: templateData }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      EmailPopup,
      {
        isOpen: showEmailPopup,
        onClose: () => setShowEmailPopup(false),
        onSubmit: handleEmailSubmit,
        isLoading: isEmailLoading
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Notification,
      {
        type: notification.type,
        message: notification.message,
        isVisible: notification.isVisible,
        onClose: hideNotification
      }
    )
  ] });
}
const EntryLevelTemplate = ({ data }) => {
  const defaultData = {
    personalInfo: {
      fullName: "Thomas Beasley",
      jobTitle: "Entry-level Resume",
      phone: "(206) 555-1234",
      email: "your-name@email.com",
      address: "3665 McLaughlin Street, Seattle, WA 98039",
      photo: null
      // Photo URL or base64 string
    },
    summary: "Passionate Technology Assistant skilled at troubleshooting and repairing digital devices. Excellent people skills from managing the tech support desk at Seattle Community Center. Looking to secure an entry-level position in retail where I can utilize my strong customer service skills and technical knowledge to enhance the customer experience and contribute positively to the team at [Company Name].",
    education: [
      {
        degree: "Bachelor's Degree in Business Administration I",
        institution: "Spokane University",
        location: "Spokane, WA",
        date: "May 20XX",
        gpa: "3.7/4.0",
        coursework: "Implementation of Contemporary Business Practices",
        dissertation: "Federal & State Business Law & Regulations, Introduction to HR Theory & Practices, Company Diversity and Inclusion, Introduction to Employer Contract Law"
      }
    ],
    experience: [
      {
        position: "Volunteer Technology Assistant I",
        company: "Seattle Community Center",
        location: "Seattle, WA",
        period: "Feb 20XX – Present",
        responsibilities: [
          "Set up and repair technology devices for community members",
          "Manage service queues, ensuring community members receive timely updates on service status",
          "Engage with diverse clients to understand technology issues",
          "Document detailed notes and estimate completion times"
        ]
      }
    ],
    skills: [
      "Customer service",
      "Team collaboration",
      "Troubleshooting",
      "Multitasking",
      "Organizing and scheduling",
      "Time management",
      "Verbal communication"
    ],
    hobbies: [
      {
        title: "Coding",
        description: "Recently completed a Python bootcamp"
      },
      {
        title: "Digital art",
        description: "Create unique illustrations using Adobe Fresco"
      },
      {
        title: "Soccer",
        description: "Play for a local team"
      }
    ]
  };
  const templateData = data || defaultData;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "#f3f4f6",
    padding: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: {
    maxWidth: "1024px",
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { style: {
      width: "33.333333%",
      backgroundColor: "#dbe7f0",
      color: "#1f2937",
      padding: "32px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px"
      }, children: templateData.personalInfo.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: templateData.personalInfo.photo,
          alt: "Profile",
          style: {
            width: "144px",
            height: "144px",
            borderRadius: "50%",
            border: "4px solid #6ea6b9",
            objectFit: "cover"
          }
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        width: "144px",
        height: "144px",
        borderRadius: "50%",
        border: "4px solid #6ea6b9",
        backgroundColor: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#1f2937"
      }, children: templateData.personalInfo.fullName.split(" ").map((n) => n[0]).join("") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: "bold",
          borderBottom: "2px solid #6ea6b9",
          paddingBottom: "8px",
          marginBottom: "16px",
          color: "#1f2937"
        }, children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0", fontSize: "14px", fontWeight: "600" }, children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0", fontSize: "12px", color: "#4b5563" }, children: templateData.personalInfo.email })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0", fontSize: "14px", fontWeight: "600" }, children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0", fontSize: "12px", color: "#4b5563" }, children: templateData.personalInfo.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0", fontSize: "14px", fontWeight: "600" }, children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0", fontSize: "12px", color: "#4b5563" }, children: templateData.personalInfo.address })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: "bold",
          borderBottom: "2px solid #6ea6b9",
          paddingBottom: "8px",
          marginBottom: "16px",
          color: "#1f2937"
        }, children: "Education" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontWeight: "600",
            margin: "0",
            fontSize: "14px"
          }, children: edu.degree }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontStyle: "italic",
            fontSize: "12px",
            margin: "0",
            color: "#4b5563"
          }, children: edu.institution }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "10px",
            color: "#6b7280",
            margin: "0"
          }, children: edu.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
            fontSize: "10px",
            color: "#6b7280",
            margin: "4px 0 0 0"
          }, children: [
            "GPA: ",
            edu.gpa
          ] })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: "bold",
          borderBottom: "2px solid #6ea6b9",
          paddingBottom: "8px",
          marginBottom: "16px",
          color: "#1f2937"
        }, children: "Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
          listStyle: "disc",
          paddingLeft: "16px",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }, children: templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: { fontSize: "14px" }, children: skill }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
          fontSize: "24px",
          fontWeight: "bold",
          borderBottom: "2px solid #6ea6b9",
          paddingBottom: "8px",
          marginBottom: "16px",
          color: "#1f2937"
        }, children: "Hobbies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: templateData.hobbies.map((hobby, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0", fontSize: "14px", fontWeight: "600" }, children: hobby.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0", fontSize: "12px", color: "#4b5563" }, children: hobby.description })
        ] }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      width: "66.666667%",
      padding: "32px",
      color: "#374151"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { style: {
        marginBottom: "40px",
        textAlign: "left"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { style: {
          fontSize: "48px",
          fontWeight: "bold",
          color: "#1f2937",
          margin: "0"
        }, children: templateData.personalInfo.fullName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "20px",
          color: "#6b7280",
          margin: "8px 0 0 0",
          textTransform: "uppercase",
          letterSpacing: "0.1em"
        }, children: templateData.personalInfo.jobTitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: "28px",
          fontWeight: "bold",
          color: "#1f2937",
          margin: "0 0 16px 0",
          borderBottom: "2px solid #6ea6b9",
          paddingBottom: "8px"
        }, children: "Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontSize: "16px",
          lineHeight: "1.6",
          color: "#374151",
          margin: "0"
        }, children: templateData.summary })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { style: { marginBottom: "40px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: "28px",
          fontWeight: "bold",
          color: "#1f2937",
          margin: "0 0 24px 0",
          borderBottom: "2px solid #6ea6b9",
          paddingBottom: "8px"
        }, children: "Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "24px" }, children: templateData.experience.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "8px"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: {
                fontSize: "18px",
                fontWeight: "600",
                color: "#1f2937",
                margin: "0"
              }, children: exp.position }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                fontSize: "16px",
                color: "#6ea6b9",
                margin: "4px 0 0 0",
                fontWeight: "500"
              }, children: exp.company })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "right" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                fontSize: "14px",
                color: "#6b7280",
                margin: "0"
              }, children: exp.period }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                fontSize: "12px",
                color: "#9ca3af",
                margin: "0"
              }, children: exp.location })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { style: {
            listStyle: "disc",
            paddingLeft: "20px",
            margin: "8px 0 0 0",
            display: "flex",
            flexDirection: "column",
            gap: "4px"
          }, children: exp.responsibilities.map((resp, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { style: {
            fontSize: "14px",
            lineHeight: "1.5",
            color: "#374151"
          }, children: resp }, respIndex)) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
          fontSize: "28px",
          fontWeight: "bold",
          color: "#1f2937",
          margin: "0 0 16px 0",
          borderBottom: "2px solid #6ea6b9",
          paddingBottom: "8px"
        }, children: "Relevant Coursework" }),
        templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: "16px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "16px",
            fontWeight: "600",
            color: "#1f2937",
            margin: "0 0 8px 0"
          }, children: edu.coursework }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontSize: "14px",
            color: "#374151",
            margin: "0",
            lineHeight: "1.5"
          }, children: edu.dissertation })
        ] }, index))
      ] })
    ] })
  ] }) });
};
function EntryLevelTemplateEditor({ onNavigateBack, onSave, initialData }) {
  const defaultData = {
    personalInfo: {
      fullName: "Thomas Beasley",
      jobTitle: "Entry-level Resume",
      phone: "(206) 555-1234",
      email: "your-name@email.com",
      address: "3665 McLaughlin Street, Seattle, WA 98039",
      photo: null
    },
    summary: "Passionate Technology Assistant skilled at troubleshooting and repairing digital devices. Excellent people skills from managing the tech support desk at Seattle Community Center. Looking to secure an entry-level position in retail where I can utilize my strong customer service skills and technical knowledge to enhance the customer experience and contribute positively to the team at [Company Name].",
    education: [
      {
        degree: "Bachelor's Degree in Business Administration I",
        institution: "Spokane University",
        location: "Spokane, WA",
        date: "May 20XX",
        gpa: "3.7/4.0",
        coursework: "Implementation of Contemporary Business Practices",
        dissertation: "Federal & State Business Law & Regulations, Introduction to HR Theory & Practices, Company Diversity and Inclusion, Introduction to Employer Contract Law"
      }
    ],
    experience: [
      {
        position: "Volunteer Technology Assistant I",
        company: "Seattle Community Center",
        location: "Seattle, WA",
        period: "Feb 20XX – Present",
        responsibilities: [
          "Set up and repair technology devices for community members",
          "Manage service queues, ensuring community members receive timely updates on service status",
          "Engage with diverse clients to understand technology issues",
          "Document detailed notes and estimate completion times"
        ]
      }
    ],
    skills: [
      "Customer service",
      "Team collaboration",
      "Troubleshooting",
      "Multitasking",
      "Organizing and scheduling",
      "Time management",
      "Verbal communication"
    ],
    hobbies: [
      {
        title: "Coding",
        description: "Recently completed a Python bootcamp"
      },
      {
        title: "Digital art",
        description: "Create unique illustrations using Adobe Fresco"
      },
      {
        title: "Soccer",
        description: "Play for a local team"
      }
    ]
  };
  const [templateData, setTemplateData] = reactExports.useState(initialData || defaultData);
  const [activeSection, setActiveSection] = reactExports.useState("personal");
  const handlePersonalInfoChange = (field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        handlePersonalInfoChange("photo", event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handlePhotoRemove = () => {
    handlePersonalInfoChange("photo", null);
  };
  const handleSummaryChange = (value) => {
    setTemplateData((prev) => ({
      ...prev,
      summary: value
    }));
  };
  const handleEducationChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.map(
        (edu, i) => i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };
  const addEducation2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      education: [...prev.education, {
        degree: "",
        institution: "",
        location: "",
        date: "",
        gpa: "",
        coursework: "",
        dissertation: ""
      }]
    }));
  };
  const removeEducation = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };
  const handleExperienceChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };
  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.map(
            (resp, j) => j === respIndex ? value : resp
          )
        } : exp
      )
    }));
  };
  const addResponsibility = (expIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: [...exp.responsibilities, "New responsibility"]
        } : exp
      )
    }));
  };
  const removeResponsibility = (expIndex, respIndex) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.map(
        (exp, i) => i === expIndex ? {
          ...exp,
          responsibilities: exp.responsibilities.filter((_, j) => j !== respIndex)
        } : exp
      )
    }));
  };
  const addExperience = () => {
    setTemplateData((prev) => ({
      ...prev,
      experience: [...prev.experience, {
        position: "",
        company: "",
        location: "",
        period: "",
        responsibilities: ["New responsibility"]
      }]
    }));
  };
  const removeExperience = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };
  const handleSkillChange = (index, value) => {
    setTemplateData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };
  const addSkill2 = () => {
    setTemplateData((prev) => ({
      ...prev,
      skills: [...prev.skills, "New skill"]
    }));
  };
  const removeSkill = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };
  const handleHobbyChange = (index, field, value) => {
    setTemplateData((prev) => ({
      ...prev,
      hobbies: prev.hobbies.map(
        (hobby, i) => i === index ? { ...hobby, [field]: value } : hobby
      )
    }));
  };
  const addHobby = () => {
    setTemplateData((prev) => ({
      ...prev,
      hobbies: [...prev.hobbies, { title: "", description: "" }]
    }));
  };
  const removeHobby = (index) => {
    setTemplateData((prev) => ({
      ...prev,
      hobbies: prev.hobbies.filter((_, i) => i !== index)
    }));
  };
  const handleSave = () => {
    if (onSave) {
      onSave(templateData);
    }
    alert("Template saved successfully! Changes will be reflected in the preview.");
  };
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    const templateHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Resume - ${templateData.personalInfo.fullName}</title>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: 'Montserrat', sans-serif;
              background: #f5f5f5;
              color: #1f2937;
            }
            @media print {
              body { 
                margin: 0; 
                padding: 0; 
                background: white !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              .outer-container {
                background: white !important;
                padding: 0 !important;
              }
              .main-container {
                box-shadow: none !important;
                border-radius: 0 !important;
                margin: 0 !important;
                max-width: none !important;
                width: 100% !important;
              }
              @page {
                margin: 0;
                size: A4;
              }
              @page:first {
                margin-top: 0;
              }
            }
          </style>
        </head>
        <body>
          <div style="
            font-family: 'Montserrat', sans-serif;
            background-color: #f5f5f5;
            color: #1f2937;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 32px 16px;
          ">
            <div style="
              max-width: 896px;
              width: 100%;
              margin: 32px auto;
              background-color: white;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
              overflow: hidden;
            ">
              <!-- Header -->
              <header style="
                background-color: #dbe7f0;
                text-align: center;
                padding: 32px 16px;
              ">
                <h1 style="
                  font-size: 24px;
                  font-weight: 600;
                  line-height: 1.2;
                  margin: 0;
                ">
                  ${templateData.personalInfo.fullName}
                </h1>
                <p style="
                  text-transform: uppercase;
                  font-size: 12px;
                  letter-spacing: 0.1em;
                  color: #4b5563;
                  margin: 4px 0 0 0;
                ">
                  ${templateData.personalInfo.jobTitle}
                </p>
                <div style="
                  color: #4b5563;
                  margin-top: 12px;
                  font-size: 14px;
                  max-width: 512px;
                  margin: 12px auto 0 auto;
                  display: flex;
                  flex-direction: column;
                  gap: 8px;
                  align-items: center;
                ">
                  <div style="
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                  ">
                    <span>${templateData.personalInfo.phone}</span>
                    <span>•</span>
                    <span>${templateData.personalInfo.address}</span>
                    <span>•</span>
                    <a href="mailto:${templateData.personalInfo.email}" style="
                      color: #4b5563;
                      text-decoration: none;
                    ">
                      ${templateData.personalInfo.email}
                    </a>
                  </div>
                </div>
              </header>

              <!-- Main Content -->
              <main style="padding: 24px;">
                <!-- Summary -->
                <section style="
                  background-color: #6ea6b9;
                  color: white;
                  border-radius: 6px;
                  padding: 16px;
                  margin-bottom: 24px;
                ">
                  <h2 style="
                    text-align: center;
                    font-weight: 600;
                    margin-bottom: 8px;
                    font-size: 16px;
                    margin: 0 0 8px 0;
                  ">
                    Summary
                  </h2>
                  <p style="
                    font-size: 14px;
                    line-height: 1.5;
                    margin: 0;
                  ">
                    ${templateData.summary}
                  </p>
                </section>

                <!-- Education -->
                <section style="margin-bottom: 24px;">
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Education
                  </h3>
                  ${templateData.education.map((edu) => `
                    <div>
                      <p style="
                        font-size: 16px;
                        margin: 0 0 8px 0;
                      ">
                        <strong>${edu.degree}</strong> ${edu.institution}
                      </p>
                      <p style="
                        font-size: 14px;
                        color: #374151;
                        margin: 0 0 8px 0;
                      ">
                        ${edu.date} I ${edu.location}
                      </p>
                      <p style="
                        font-size: 14px;
                        margin: 0 0 4px 0;
                      ">
                        <strong>GPA:</strong> ${edu.gpa}
                      </p>
                      <p style="
                        font-size: 14px;
                        margin: 0 0 4px 0;
                      ">
                        <strong>Relevant Coursework:</strong> ${edu.coursework}
                      </p>
                      <p style="
                        font-size: 14px;
                        margin: 0;
                      ">
                        <strong>Dissertation Title:</strong> ${edu.dissertation}
                      </p>
                    </div>
                  `).join("")}
                </section>

                <!-- Experience -->
                <section style="margin-bottom: 24px;">
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Relevant Experience
                  </h3>
                  ${templateData.experience.map((exp) => `
                    <div>
                      <p style="
                        font-size: 16px;
                        margin: 0 0 8px 0;
                      ">
                        <strong>${exp.position}</strong> ${exp.company}
                      </p>
                      <p style="
                        font-size: 14px;
                        color: #374151;
                        margin: 0 0 8px 0;
                      ">
                        ${exp.period} I ${exp.location}
                      </p>
                      <ul style="
                        list-style: disc;
                        list-style-position: inside;
                        font-size: 14px;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        gap: 4px;
                        color: #1f2937;
                      ">
                        ${exp.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
                      </ul>
                    </div>
                  `).join("")}
                </section>

                <!-- Skills -->
                <section style="margin-bottom: 24px;">
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Key Skills
                  </h3>
                  <div style="
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0 48px;
                    font-size: 14px;
                    color: #1f2937;
                  ">
                    <ul style="
                      list-style: disc;
                      list-style-position: inside;
                      margin: 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 4px;
                    ">
                      ${templateData.skills.slice(0, Math.ceil(templateData.skills.length / 2)).map((skill) => `<li>${skill}</li>`).join("")}
                    </ul>
                    <ul style="
                      list-style: disc;
                      list-style-position: inside;
                      margin: 0;
                      padding: 0;
                      display: flex;
                      flex-direction: column;
                      gap: 4px;
                    ">
                      ${templateData.skills.slice(Math.ceil(templateData.skills.length / 2)).map((skill) => `<li>${skill}</li>`).join("")}
                    </ul>
                  </div>
                </section>

                <!-- Hobbies & Interests -->
                <section>
                  <h3 style="
                    background-color: #dbe7f0;
                    text-align: center;
                    font-weight: 600;
                    padding: 4px 0;
                    margin-bottom: 12px;
                    font-size: 16px;
                    margin: 0 0 12px 0;
                  ">
                    Hobbies & Interests
                  </h3>
                  <ul style="
                    list-style: disc;
                    list-style-position: inside;
                    font-size: 14px;
                    color: #1f2937;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                  ">
                    ${templateData.hobbies.map((hobby) => `
                      <li>
                        <strong>${hobby.title}:</strong> ${hobby.description}
                      </li>
                    `).join("")}
                  </ul>
                </section>
              </main>
            </div>
          </div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHTML);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
    }, 1e3);
  };
  const renderPersonalSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Personal Information" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Full Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.fullName,
            onChange: (e) => handlePersonalInfoChange("fullName", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Job Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.jobTitle,
            onChange: (e) => handlePersonalInfoChange("jobTitle", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Phone" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.phone,
            onChange: (e) => handlePersonalInfoChange("phone", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            value: templateData.personalInfo.email,
            onChange: (e) => handlePersonalInfoChange("email", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: templateData.personalInfo.address,
            onChange: (e) => handlePersonalInfoChange("address", e.target.value),
            className: "form-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Profile Photo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "photo-upload-container", children: templateData.personalInfo.photo ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "photo-preview", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: templateData.personalInfo.photo,
              alt: "Profile",
              className: "photo-preview-img"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: handlePhotoRemove,
              className: "photo-remove-btn",
              title: "Remove photo",
              children: "✕"
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "photo-upload", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "file",
              accept: "image/*",
              onChange: handlePhotoUpload,
              className: "photo-input",
              id: "photo-upload"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "photo-upload", className: "photo-upload-label", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "photo-upload-placeholder", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "photo-upload-icon", children: "📷" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Click to upload photo" })
          ] }) })
        ] }) })
      ] })
    ] })
  ] });
  const renderSummarySection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Summary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Professional Summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: templateData.summary,
          onChange: (e) => handleSummaryChange(e.target.value),
          className: "form-textarea",
          rows: "6"
        }
      )
    ] }) })
  ] });
  const renderEducationSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Education" }),
    templateData.education.map((edu, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "education-item", style: { marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Degree" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.degree,
              onChange: (e) => handleEducationChange(index, "degree", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Institution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.institution,
              onChange: (e) => handleEducationChange(index, "institution", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.location,
              onChange: (e) => handleEducationChange(index, "location", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.date,
              onChange: (e) => handleEducationChange(index, "date", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "GPA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.gpa,
              onChange: (e) => handleEducationChange(index, "gpa", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Relevant Coursework" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: edu.coursework,
              onChange: (e) => handleEducationChange(index, "coursework", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Dissertation Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: edu.dissertation,
              onChange: (e) => handleEducationChange(index, "dissertation", e.target.value),
              className: "form-textarea",
              rows: "3"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeEducation(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Education"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addEducation2,
        className: "add-btn",
        children: "+ Add Education"
      }
    )
  ] });
  const renderExperienceSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Experience" }),
    templateData.experience.map((exp, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "experience-item", style: { marginBottom: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Position" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.position,
              onChange: (e) => handleExperienceChange(index, "position", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.company,
              onChange: (e) => handleExperienceChange(index, "company", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.location,
              onChange: (e) => handleExperienceChange(index, "location", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Period" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: exp.period,
              onChange: (e) => handleExperienceChange(index, "period", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "15px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Responsibilities" }),
        exp.responsibilities.map((resp, respIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", style: { marginBottom: "5px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              value: resp,
              onChange: (e) => handleResponsibilityChange(index, respIndex, e.target.value),
              className: "form-textarea",
              rows: "2"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => removeResponsibility(index, respIndex),
              className: "remove-btn",
              children: "✕"
            }
          )
        ] }, respIndex)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => addResponsibility(index),
            className: "add-btn",
            style: { fontSize: "12px", padding: "5px 10px" },
            children: "+ Add Responsibility"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeExperience(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Experience"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addExperience,
        className: "add-btn",
        children: "+ Add Experience"
      }
    )
  ] });
  const renderSkillsSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Skills" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "10px" }, children: [
      templateData.skills.map((skill, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: skill,
            onChange: (e) => handleSkillChange(index, e.target.value),
            className: "form-input"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => removeSkill(index),
            className: "remove-btn",
            children: "✕"
          }
        )
      ] }, index)),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: addSkill2,
          className: "add-btn",
          children: "+ Add Skill"
        }
      )
    ] })
  ] });
  const renderHobbiesSection = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Hobbies & Interests" }),
    templateData.hobbies.map((hobby, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "qualification-item", style: { marginBottom: "15px", padding: "10px", border: "1px solid #ddd", borderRadius: "6px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: hobby.title,
              onChange: (e) => handleHobbyChange(index, "title", e.target.value),
              className: "form-input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: hobby.description,
              onChange: (e) => handleHobbyChange(index, "description", e.target.value),
              className: "form-input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => removeHobby(index),
          className: "remove-btn",
          style: { marginTop: "10px" },
          children: "Remove Hobby"
        }
      )
    ] }, index)),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: addHobby,
        className: "add-btn",
        children: "+ Add Hobby"
      }
    )
  ] });
  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalSection();
      case "summary":
        return renderSummarySection();
      case "education":
        return renderEducationSection();
      case "experience":
        return renderExperienceSection();
      case "skills":
        return renderSkillsSection();
      case "hobbies":
        return renderHobbiesSection();
      default:
        return renderPersonalSection();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-editor", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack,
          "aria-label": "Go back",
          children: "← Back to Template"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Edit Entry-Level Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Customize your resume content" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "save-btn", onClick: handleSave, children: "💾 Save Changes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-sidebar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "editor-nav", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "personal" ? "active" : ""}`,
            onClick: () => setActiveSection("personal"),
            children: "👤 Personal Info"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "summary" ? "active" : ""}`,
            onClick: () => setActiveSection("summary"),
            children: "📝 Summary"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "education" ? "active" : ""}`,
            onClick: () => setActiveSection("education"),
            children: "🎓 Education"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "experience" ? "active" : ""}`,
            onClick: () => setActiveSection("experience"),
            children: "💼 Experience"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "skills" ? "active" : ""}`,
            onClick: () => setActiveSection("skills"),
            children: "🎯 Skills"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `nav-item ${activeSection === "hobbies" ? "active" : ""}`,
            onClick: () => setActiveSection("hobbies"),
            children: "🎮 Hobbies"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-main", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "editor-form", children: renderActiveSection() }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "editor-preview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Live Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          backgroundImage: 'url("/entry-level.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          minHeight: "400px",
          borderRadius: "8px",
          position: "relative"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: "scale(0.35)", transformOrigin: "top left", width: "285%", height: "285%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EntryLevelTemplate, { data: templateData }) }) }) }) })
      ] })
    ] })
  ] });
}
function EntryLevelResumeTemplate({ onNavigateBack, onEdit }) {
  const [isEditing, setIsEditing] = reactExports.useState(false);
  const [templateData, setTemplateData] = reactExports.useState(null);
  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    } else {
      setIsEditing(true);
    }
  };
  const handleSave = (data) => {
    setTemplateData(data);
    setIsEditing(false);
  };
  const handleBack = () => {
    setIsEditing(false);
  };
  const handleDownload = () => {
    const printWindow = window.open("", "_blank");
    const templateHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Entry-Level Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Montserrat', sans-serif; background: white; }
            @media print { body { -webkit-print-color-adjust: exact; } }
          </style>
        </head>
        <body>
          <div id="resume-content"></div>
        </body>
      </html>
    `;
    printWindow.document.write(templateHtml);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 1e3);
  };
  if (isEditing) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      EntryLevelTemplateEditor,
      {
        onNavigateBack: handleBack,
        onSave: handleSave,
        initialData: templateData
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "creative-resume-template", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-btn",
          onClick: onNavigateBack || (() => window.history.back()),
          "aria-label": "Go back",
          title: "Go back to templates",
          children: "← Back to Templates"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-title", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Entry-Level Resume Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Perfect for graduates and first-time job seekers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "template-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "edit-btn", onClick: handleEdit, children: "✏️ Edit Template" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "download-btn", onClick: handleDownload, children: "📄 Download PDF" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsx(EntryLevelTemplate, { data: templateData }) }) })
  ] });
}
function ErrorPage({ onNavigateBack, featureName = "This Feature" }) {
  const availableFeatures = [
    {
      name: "Job Controller",
      description: "Search jobs, manage and track your saved job applications",
      icon: "💼",
      status: "Available",
      action: "Go to Job Controller"
    },
    {
      name: "Resume Builder",
      description: "Create professional resumes with multiple templates (Professional, Creative, Technical, etc.)",
      icon: "📄",
      status: "Available",
      action: "Go to Resume Builder"
    }
  ];
  const upcomingFeatures = [
    {
      name: "Interview Preparation",
      description: "AI-powered mock interviews and practice questions",
      icon: "🎤",
      status: "Coming Soon"
    },
    {
      name: "Skill Assessment",
      description: "Evaluate and track your technical skills",
      icon: "🎯",
      status: "Coming Soon"
    },
    {
      name: "Salary Calculator",
      description: "Research market rates and salary insights",
      icon: "💰",
      status: "Coming Soon"
    },
    {
      name: "Profile Management",
      description: "Advanced profile customization and settings",
      icon: "⚙️",
      status: "Coming Soon"
    }
  ];
  const handleFeatureClick = (featureName2) => {
    let targetPage = "";
    switch (featureName2) {
      case "Job Controller":
        targetPage = "jobcontroller";
        break;
      case "Resume Builder":
        targetPage = "resume-templates";
        break;
      case "Profile Management":
        targetPage = "profile";
        break;
      default:
        targetPage = "dashboard";
    }
    const event = new CustomEvent("navigate", {
      detail: { page: targetPage }
    });
    window.dispatchEvent(event);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "error-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "error-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-icon", children: "🚧" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Feature Under Development" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "error-subtitle", children: [
        featureName,
        " is not yet available in our MVP prototype"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mvp-banner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mvp-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🚀 NYXO Platform - MVP Phase" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "We're currently in the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Minimum Viable Product (MVP)" }),
        " phase, focusing on core functionality to deliver the best user experience. More features are coming soon!"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "features-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "✅ Available Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "features-grid", children: availableFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "feature-card available",
          onClick: () => handleFeatureClick(feature.name),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: feature.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-content", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: feature.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: feature.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "feature-status available", children: feature.status }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "feature-action", children: feature.action })
            ] })
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "features-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "🔮 Coming Soon" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "features-grid", children: upcomingFeatures.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-card upcoming", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "feature-icon", children: feature.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "feature-content", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: feature.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: feature.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "feature-status upcoming", children: feature.status })
        ] })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "error-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "back-btn primary", onClick: onNavigateBack, children: "← Back to Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "feature-btn secondary",
          onClick: () => handleFeatureClick("Job Controller"),
          children: "Explore Job Controller"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Thank you for testing our platform! Your feedback helps us build better features.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Expected Timeline:" }),
      " Full feature set coming in Q4 2025"
    ] }) })
  ] }) });
}
const Sitemap = ({ onNavigate }) => {
  const handleNavigation = (page) => {
    onNavigate(page);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sitemap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sitemap-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Site Map" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Navigate through all pages and sections of NYXO" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "back-button",
          onClick: () => handleNavigation("dashboard"),
          children: "← Back to Dashboard"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🏠 Main Pages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "sitemap-link main",
                onClick: () => handleNavigation("dashboard"),
                children: "Dashboard"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sub-links", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Your Activity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Job Search" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Quick Actions" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "sitemap-link main",
                onClick: () => handleNavigation("toolkit"),
                children: "Toolkit"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sub-links", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Resume Builder" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Resume Templates" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "sitemap-link main",
                onClick: () => handleNavigation("job-controller"),
                children: "Job Controller"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sub-links", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Job Applications" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Job Matches" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Application Tracker" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Interview Schedule" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "sitemap-link main",
                onClick: () => handleNavigation("profile"),
                children: "Profile"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sub-links", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Personal Information" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Account Settings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Privacy Settings" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Notification Preferences" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🔧 Tools & Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link main", children: "Resume Builder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sub-links", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Professional Template" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Creative Template" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Modern Template" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Classic Template" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link main", children: "Career Resources" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sub-links", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Interview Preparation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Skill Assessments" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Career Advice" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Industry Insights" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "📋 Account & Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link main", children: "Account Management" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sub-links", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Login / Register" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Password Reset" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Delete Account" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link main", children: "Help & Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sub-links", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "FAQ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Contact Support" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "User Guide" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Tutorials" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sitemap-item", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link main", children: "Legal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sub-links", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Privacy Policy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Terms of Service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "Cookie Policy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "sitemap-link sub", children: "GDPR Compliance" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
};
function Dashboard({ onLogout, userEmail, onNavigate }) {
  const [currentPage, setCurrentPage] = reactExports.useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = reactExports.useState(false);
  const [profileActiveSection, setProfileActiveSection] = reactExports.useState("personal");
  const [jobControllerActiveTab, setJobControllerActiveTab] = reactExports.useState("search");
  const [toolkitActiveCategory, setToolkitActiveCategory] = reactExports.useState("all");
  const [errorPageFeatureName, setErrorPageFeatureName] = reactExports.useState("");
  const { t } = useTranslation();
  const { user } = useAuth();
  const {
    analytics,
    applications,
    jobs,
    analyticsLoading,
    applicationsLoading,
    loadAnalytics,
    loadApplications
  } = useData();
  reactExports.useEffect(() => {
    const handleCustomNavigation = (event) => {
      if (event.detail && event.detail.page) {
        if (event.detail.page === "error-page") {
          setErrorPageFeatureName(event.detail.featureName || "This Feature");
        }
        setCurrentPage(event.detail.page);
      }
    };
    window.addEventListener("navigate", handleCustomNavigation);
    return () => {
      window.removeEventListener("navigate", handleCustomNavigation);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };
  const renderDashboardNavigation = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: `dashboard-navbar ${currentPage === "profile" || currentPage === "jobcontroller" || currentPage === "toolkit" ? "with-subnav" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-nav-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `dashboard-nav-menu ${isMobileMenuOpen ? "active" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `dashboard-nav-link ${currentPage === "dashboard" ? "active" : ""}`,
            onClick: () => handlePageChange("dashboard"),
            children: t("dashboard")
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `dashboard-nav-link ${currentPage === "toolkit" ? "active" : ""}`,
            onClick: () => handlePageChange("toolkit"),
            children: t("toolkit")
          }
        ),
        currentPage === "toolkit" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-subnav", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-subnav-header", children: "Toolkit Categories" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${toolkitActiveCategory === "all" ? "active" : ""}`,
              onClick: () => {
                setToolkitActiveCategory("all");
                setIsMobileMenuOpen(false);
              },
              children: "🔧 All Tools"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${toolkitActiveCategory === "documents" ? "active" : ""}`,
              onClick: () => {
                setToolkitActiveCategory("documents");
                setIsMobileMenuOpen(false);
              },
              children: "📄 Documents"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${toolkitActiveCategory === "preparation" ? "active" : ""}`,
              onClick: () => {
                setToolkitActiveCategory("preparation");
                setIsMobileMenuOpen(false);
              },
              children: "🎤 Preparation"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${toolkitActiveCategory === "skills" ? "active" : ""}`,
              onClick: () => {
                setToolkitActiveCategory("skills");
                setIsMobileMenuOpen(false);
              },
              children: "🎯 Skills"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${toolkitActiveCategory === "research" ? "active" : ""}`,
              onClick: () => {
                setToolkitActiveCategory("research");
                setIsMobileMenuOpen(false);
              },
              children: "💰 Research"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `dashboard-nav-link ${currentPage === "jobcontroller" ? "active" : ""}`,
            onClick: () => handlePageChange("jobcontroller"),
            children: t("jobController")
          }
        ),
        currentPage === "jobcontroller" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-subnav", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-subnav-header", children: "Job Controller" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${jobControllerActiveTab === "search" ? "active" : ""}`,
              onClick: () => {
                setJobControllerActiveTab("search");
                setIsMobileMenuOpen(false);
              },
              children: "🔍 Job Search"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${jobControllerActiveTab === "saved" ? "active" : ""}`,
              onClick: () => {
                setJobControllerActiveTab("saved");
                setIsMobileMenuOpen(false);
              },
              children: "💾 Saved Jobs"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${jobControllerActiveTab === "analytics" ? "active" : ""}`,
              onClick: () => {
                setJobControllerActiveTab("analytics");
                setIsMobileMenuOpen(false);
              },
              children: "📊 Analytics"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: `dashboard-nav-link ${currentPage === "profile" ? "active" : ""}`,
            onClick: () => handlePageChange("profile"),
            children: t("profile")
          }
        ),
        currentPage === "profile" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-subnav", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mobile-subnav-header", children: "Profile Sections" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${profileActiveSection === "personal" ? "active" : ""}`,
              onClick: () => {
                setProfileActiveSection("personal");
                setIsMobileMenuOpen(false);
              },
              children: "👤 Personal Info"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${profileActiveSection === "experience" ? "active" : ""}`,
              onClick: () => {
                setProfileActiveSection("experience");
                setIsMobileMenuOpen(false);
              },
              children: "💼 Experience"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${profileActiveSection === "education" ? "active" : ""}`,
              onClick: () => {
                setProfileActiveSection("education");
                setIsMobileMenuOpen(false);
              },
              children: "🎓 Education"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${profileActiveSection === "skills" ? "active" : ""}`,
              onClick: () => {
                setProfileActiveSection("skills");
                setIsMobileMenuOpen(false);
              },
              children: "🎯 Skills"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `mobile-subnav-btn ${profileActiveSection === "preferences" ? "active" : ""}`,
              onClick: () => {
                setProfileActiveSection("preferences");
                setIsMobileMenuOpen(false);
              },
              children: "⚙️ Preferences"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `dashboard-nav-toggle ${isMobileMenuOpen ? "active" : ""}`, onClick: toggleMobileMenu, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bar" })
      ] })
    ] }) }),
    isMobileMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "mobile-menu-overlay",
        onClick: () => setIsMobileMenuOpen(false)
      }
    )
  ] });
  const renderDashboardHome = () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-home", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-bar-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "search-section-label", children: "Find Your Perfect Job" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "search-section-description", children: "Search thousands of job opportunities from top companies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "search-input",
              placeholder: "Search for jobs, companies, or keywords...",
              onKeyDown: (e) => {
                if (e.key === "Enter") {
                  setCurrentPage("jobcontroller");
                  setJobControllerActiveTab("search");
                }
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "search-button",
              onClick: () => {
                setCurrentPage("jobcontroller");
                setJobControllerActiveTab("search");
              },
              "aria-label": "Search",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.35-4.35" })
                  ]
                }
              )
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity-overview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: t("yourActivity") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity-grid", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity-header", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-icon job-searched", children: "🔍" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-title", children: t("jobsSearched") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-number", children: analyticsLoading ? "..." : analytics?.jobs_searched_count || jobs?.length || 0 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity-trend positive", children: [
              "+",
              analytics?.jobs_searched_this_week || 0,
              " ",
              t("thisWeek")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "activity-card clickable",
              onClick: () => setCurrentPage("applications"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity-header", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-icon job-applied", children: "📝" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-title", children: t("applicationsSent") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-arrow", children: "→" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-number", children: applicationsLoading ? "..." : applications?.length || 0 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity-trend positive", children: [
                  "+",
                  analytics?.applications_this_week || 0,
                  " ",
                  t("thisWeek")
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "activity-card clickable",
              onClick: () => setCurrentPage("jobmatches"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity-header", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-icon job-matched", children: "✨" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-title", children: t("jobMatches") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-arrow", children: "→" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "activity-number", children: analyticsLoading ? "..." : analytics?.job_matches_count || 0 }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "activity-trend positive", children: [
                  "+",
                  analytics?.new_matches_this_week || 0,
                  " ",
                  t("newMatches")
                ] })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "quick-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Quick Actions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "main-actions-border-container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "actions-grid no-hover", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "action-card primary",
              onClick: () => setCurrentPage("profile"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "action-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "8", r: "4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 20c0-4 4-6 8-6s8 2 8 6" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-content", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Update Profile" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Keep your profile fresh and attract better opportunities" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "action-arrow", children: "→" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "action-card secondary",
              onClick: () => setCurrentPage("toolkit"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "action-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2l7 4-7 4-7-4 7-4z", fill: "#b3c6e0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 10v4", stroke: "#64748b" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "17", cy: "17", r: "3", stroke: "#64748b", fill: "#fff" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17 15.5v1M17 20v-1.5M18.5 17h-1M15.5 17h1", stroke: "#64748b" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-content", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Career Tools" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Resume builder and career toolkit" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "action-arrow", children: "→" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "action-card secondary",
              onClick: () => setCurrentPage("jobcontroller"),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "action-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m21 21-4.35-4.35" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-content", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Find Work" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Find new opportunities and manage job search" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "action-arrow", children: "→" })
              ]
            }
          )
        ] }) })
      ] })
    ] });
  };
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "toolkit":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Toolkit,
          {
            activeCategory: toolkitActiveCategory,
            setActiveCategory: setToolkitActiveCategory,
            onNavigateBack: () => setCurrentPage("dashboard")
          }
        );
      case "jobcontroller":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          JobController,
          {
            activeTab: jobControllerActiveTab,
            setActiveTab: setJobControllerActiveTab,
            onNavigateBack: () => setCurrentPage("dashboard")
          }
        );
      case "jobmatches":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(JobMatches, { onNavigateBack: () => setCurrentPage("dashboard") });
      case "applications":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(JobApplications, { onNavigateBack: () => setCurrentPage("dashboard") });
      case "profile":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Profile,
          {
            userEmail,
            activeSection: profileActiveSection,
            setActiveSection: setProfileActiveSection,
            onNavigateBack: () => setCurrentPage("dashboard")
          }
        );
      case "resume-templates":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ResumeTemplates, {});
      case "professional-resume-template":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ProfessionalResumeTemplate, { onNavigateBack: () => setCurrentPage("resume-templates"), onEdit: () => setCurrentPage("professional-template-editor") });
      case "professional-template-editor":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ProfessionalTemplateEditor, { onNavigateBack: () => setCurrentPage("professional-resume-template") });
      case "academic-resume-template":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AcademicResumeTemplate, { onNavigateBack: () => setCurrentPage("resume-templates"), onEdit: () => setCurrentPage("academic-template-editor") });
      case "academic-template-editor":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(AcademicTemplateEditor, { onNavigateBack: () => setCurrentPage("academic-resume-template") });
      case "creative-resume-template":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CreativeResumeTemplate, { onNavigateBack: () => setCurrentPage("resume-templates"), onEdit: () => setCurrentPage("creative-template-editor") });
      case "creative-template-editor":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CreativeTemplateEditor, { onNavigateBack: () => setCurrentPage("creative-resume-template") });
      case "technical-resume-template":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TechnicalResumeTemplate, { onNavigateBack: () => setCurrentPage("resume-templates"), onEdit: () => setCurrentPage("technical-template-editor") });
      case "technical-template-editor":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TechnicalTemplateEditor, { onNavigateBack: () => setCurrentPage("technical-resume-template") });
      case "executive-resume-template":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ExecutiveResumeTemplate, { onNavigateBack: () => setCurrentPage("resume-templates"), onEdit: () => setCurrentPage("executive-template-editor") });
      case "executive-template-editor":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ExecutiveTemplateEditor, { onNavigateBack: () => setCurrentPage("executive-resume-template") });
      case "modern-resume-template":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ModernResumeTemplate, { onNavigateBack: () => setCurrentPage("resume-templates"), onEdit: () => setCurrentPage("modern-template-editor") });
      case "modern-template-editor":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ModernTemplateEditor, { onNavigateBack: () => setCurrentPage("modern-resume-template") });
      case "simple-resume-template":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleResumeTemplate, { onNavigateBack: () => setCurrentPage("resume-templates"), onEdit: () => setCurrentPage("simple-template-editor") });
      case "simple-template-editor":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(SimpleTemplateEditor, { onNavigateBack: () => setCurrentPage("simple-resume-template") });
      case "entry-level-resume-template":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(EntryLevelResumeTemplate, { onNavigateBack: () => setCurrentPage("resume-templates"), onEdit: () => setCurrentPage("entry-level-template-editor") });
      case "entry-level-template-editor":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(EntryLevelTemplateEditor, { onNavigateBack: () => setCurrentPage("entry-level-resume-template") });
      case "error-page":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ErrorPage,
          {
            onNavigateBack: () => setCurrentPage("dashboard"),
            featureName: errorPageFeatureName
          }
        );
      case "sitemap":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Sitemap, { onNavigate: setCurrentPage });
      default:
        return renderDashboardHome();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard", children: [
    renderDashboardNavigation(),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: `dashboard-main ${currentPage === "profile" || currentPage === "jobcontroller" || currentPage === "toolkit" ? "with-subnav" : ""}`, children: renderCurrentPage() })
  ] });
}
const Footer = ({ onNavigate }) => {
  const handleNavigation = (page) => {
    const navigationEvent = new CustomEvent("navigate", {
      detail: { page }
    });
    window.dispatchEvent(navigationEvent);
    if (onNavigate && page === "sitemap") {
      onNavigate(page);
    }
  };
  const handleLinkClick = (e, page) => {
    e.preventDefault();
    handleNavigation(page);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "footer-title", children: "NYXO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "footer-description", children: "Your career companion for finding the perfect job opportunities and building your professional future." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "footer-heading", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#dashboard",
              onClick: (e) => handleLinkClick(e, "dashboard"),
              className: "footer-link-active",
              children: "Dashboard"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#toolkit",
              onClick: (e) => handleLinkClick(e, "toolkit"),
              className: "footer-link-active",
              children: "Toolkit"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#job-controller",
              onClick: (e) => handleLinkClick(e, "jobcontroller"),
              className: "footer-link-active",
              children: "Job Controller"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#profile",
              onClick: (e) => handleLinkClick(e, "profile"),
              className: "footer-link-active",
              children: "Profile"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "footer-heading", children: "Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "footer-links", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#resume-builder",
              onClick: (e) => handleLinkClick(e, "resume-templates"),
              className: "footer-link-active",
              children: "Resume Builder"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#interview-prep",
              className: "footer-link-disabled",
              title: "Coming Soon",
              onClick: (e) => e.preventDefault(),
              children: "Interview Prep"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#career-advice",
              className: "footer-link-disabled",
              title: "Coming Soon",
              onClick: (e) => e.preventDefault(),
              children: "Career Advice"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2025 NYXO. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "footer-actions", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "sitemap-button",
            onClick: () => onNavigate && onNavigate("sitemap"),
            children: "🗺️ Site Map"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-social", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Contact Us" }) })
      ] })
    ] })
  ] }) });
};
function AuthPage() {
  const [isSignUp, setIsSignUp] = reactExports.useState(true);
  const [formData, setFormData] = reactExports.useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const { login: login2, register: register2 } = useAuth();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  const validateSignUp = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };
  const validateLogin = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = isSignUp ? validateSignUp() : validateLogin();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsLoading(true);
    setErrors({});
    try {
      let result;
      if (isSignUp) {
        result = await register2({
          email: formData.email,
          password: formData.password,
          first_name: formData.name.split(" ")[0] || "",
          last_name: formData.name.split(" ").slice(1).join(" ") || "",
          username: formData.username
        });
      } else {
        result = await login2({
          email: formData.email,
          password: formData.password
        });
      }
      if (!result.success) {
        if (result.error.includes("email")) {
          setErrors({ email: result.error });
        } else if (result.error.includes("password")) {
          setErrors({ password: result.error });
        } else if (result.error.includes("username")) {
          setErrors({ username: result.error });
        } else {
          setErrors({ general: result.error });
        }
      } else {
        setFormData({
          name: "",
          username: "",
          email: "",
          password: ""
        });
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setErrors({ general: "An unexpected error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };
  const switchToLogin = () => {
    setIsSignUp(false);
    setFormData({
      name: "",
      username: "",
      email: "",
      password: ""
    });
    setErrors({});
  };
  const switchToSignUp = () => {
    setIsSignUp(true);
    setFormData({
      name: "",
      username: "",
      email: "",
      password: ""
    });
    setErrors({});
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "auth-page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "auth-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "auth-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: isSignUp ? "Create Account" : "Welcome Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: isSignUp ? "Join NYXO and start your career journey" : "Sign in to continue your job search" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "auth-form", onSubmit: handleSubmit, children: [
      errors.general && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error-message general-error", children: errors.general }),
      isSignUp && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              id: "name",
              name: "name",
              value: formData.name,
              onChange: handleInputChange,
              placeholder: "Enter your full name",
              className: errors.name ? "error" : "",
              disabled: isLoading
            }
          ),
          errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "username", children: "Username" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              id: "username",
              name: "username",
              value: formData.username,
              onChange: handleInputChange,
              placeholder: "Choose a username",
              className: errors.username ? "error" : "",
              disabled: isLoading
            }
          ),
          errors.username && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: errors.username })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: formData.email,
            onChange: handleInputChange,
            placeholder: "Enter your email",
            className: errors.email ? "error" : "",
            disabled: isLoading
          }
        ),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "password",
            id: "password",
            name: "password",
            value: formData.password,
            onChange: handleInputChange,
            placeholder: isSignUp ? "Create a password" : "Enter your password",
            className: errors.password ? "error" : "",
            disabled: isLoading
          }
        ),
        errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "error-message", children: errors.password })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "submit-btn", disabled: isLoading, children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "loading-spinner-small" }),
        isSignUp ? "Creating Account..." : "Signing In..."
      ] }) : isSignUp ? "Create Account" : "Sign In" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-footer", children: isSignUp ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "link-btn",
            onClick: switchToLogin,
            disabled: isLoading,
            children: "Sign in here"
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "link-btn",
            onClick: switchToSignUp,
            disabled: isLoading,
            children: "Create one here"
          }
        )
      ] }) })
    ] })
  ] }) });
}
function AppContent() {
  const [currentPage, setCurrentPage] = reactExports.useState("dashboard");
  const { user, isAuthenticated, loading, logout: logout2 } = useAuth();
  const handleLogout = async () => {
    await logout2();
    setCurrentPage("dashboard");
  };
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "App", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "loading-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-spinner" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Loading..." })
    ] }) });
  }
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "App", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AuthPage, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { onNavigate: handleNavigate })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "App", children: [
    currentPage === "dashboard" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dashboard,
      {
        onLogout: handleLogout,
        userEmail: user?.email || "user@example.com",
        onNavigate: handleNavigate
      }
    ) : currentPage === "sitemap" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sitemap, { onNavigate: handleNavigate }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dashboard,
      {
        onLogout: handleLogout,
        userEmail: user?.email || "user@example.com",
        onNavigate: handleNavigate
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { onNavigate: handleNavigate })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TranslationProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DataProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AppContent, {}) }) }) });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
