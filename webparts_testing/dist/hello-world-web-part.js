define("e2430d8f-e2d3-4e62-8f6f-3ec319af94c8_0.0.1", ["@microsoft/sp-property-pane","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/sp-webpart-base","HelloWorldWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_Pk8u__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_hI9z__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Set the webpack public path
/******/ 	(function () {
/******/ 	  var scripts = document.getElementsByTagName('script');
/******/ 	  var regex = /hello-world-web-part\.js/i;
/******/ 	  var publicPath;
/******/
/******/ 	  if (scripts && scripts.length) {
/******/ 	    for (var i = 0; i < scripts.length; i++) {
/******/ 	      if (!scripts[i]) continue;
/******/ 	      var path = scripts[i].getAttribute('src');
/******/ 	      if (path && path.match(regex)) {
/******/ 	        publicPath = path.substring(0, path.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/
/******/ 	  if (!publicPath) {
/******/ 	    for (var global in window.__setWebpackPublicPathLoaderSrcRegistry__) {
/******/ 	      if (global && global.match(regex)) {
/******/ 	        publicPath = global.substring(0, global.lastIndexOf('/') + 1);
/******/ 	        break;
/******/ 	      }
/******/ 	    }
/******/ 	  }
/******/ 	  __webpack_require__.p = publicPath;
/******/ 	})();
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "GFLV");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/AwM":
/*!**********************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-async.js ***!
  \**********************************************************************/
/*! exports provided: queryAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return e; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "LYib");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    descriptor: function descriptor(r) {
      return {
        get: function get() {
          var _this = this;
          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var r;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.updateComplete;
                case 2:
                  return _context.abrupt("return", null === (r = _this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e));
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
        },
        enumerable: !0,
        configurable: !0
      };
    }
  });
}


/***/ }),

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "2f0T":
/*!*********************************************************!*\
  !*** ./lib/webparts/helloWorld/assets/welcome-dark.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "welcome-dark_dcd6e9e4aa4b30169bf8ab6002b643a7.png";

/***/ }),

/***/ "36NN":
/*!*******************************************************!*\
  !*** ./node_modules/@lit/reactive-element/css-tag.js ***!
  \*******************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return r; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t = window,
  e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s = Symbol(),
  n = new WeakMap();
var o = /*#__PURE__*/function () {
  function o(t, e, n) {
    _classCallCheck(this, o);
    if (this._$cssResult$ = !0, n !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  _createClass(o, [{
    key: "styleSheet",
    get: function get() {
      var t = this.o;
      var s = this.t;
      if (e && void 0 === t) {
        var _e = void 0 !== s && 1 === s.length;
        _e && (t = n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), _e && n.set(s, t));
      }
      return t;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);
  return o;
}();
var r = function r(t) {
    return new o("string" == typeof t ? t : t + "", void 0, s);
  },
  i = function i(t) {
    for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }
    var n = 1 === t.length ? t[0] : e.reduce(function (e, s, n) {
      return e + function (t) {
        if (!0 === t._$cssResult$) return t.cssText;
        if ("number" == typeof t) return t;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      }(s) + t[n + 1];
    }, t[0]);
    return new o(n, t, s);
  },
  S = function S(s, n) {
    e ? s.adoptedStyleSheets = n.map(function (t) {
      return t instanceof CSSStyleSheet ? t : t.styleSheet;
    }) : n.forEach(function (e) {
      var n = document.createElement("style"),
        o = t.litNonce;
      void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
  },
  c = e ? function (t) {
    return t;
  } : function (t) {
    return t instanceof CSSStyleSheet ? function (t) {
      var e = "";
      var _iterator = _createForOfIteratorHelper(t.cssRules),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _s = _step.value;
          e += _s.cssText;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return r(e);
    }(t) : t;
  };


/***/ }),

/***/ "A8XA":
/*!************************************************************!*\
  !*** ./node_modules/form-user-jffp/dist/form-user-jffp.js ***!
  \************************************************************/
/*! exports provided: FormUserJffp, FormUserJffpReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUserJffp", function() { return ie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUserJffpReact", function() { return Zr; });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "d/EL");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "TpIk");
var _templateObject, _templateObject2, _templateObject3;
var _excluded = ["_$Gl"];
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Vr = /* @__PURE__ */new Set(["children", "localName", "ref", "style", "className"]),
  Tt = /* @__PURE__ */new WeakMap(),
  Wr = function Wr(v, s, I, S, T) {
    var g = T == null ? void 0 : T[s];
    g === void 0 || I === S ? I == null && s in HTMLElement.prototype ? v.removeAttribute(s) : v[s] = I : function (k, x, B) {
      var N = Tt.get(k);
      N === void 0 && Tt.set(k, N = /* @__PURE__ */new Map());
      var L = N.get(x);
      B !== void 0 ? L === void 0 ? (N.set(x, L = {
        handleEvent: B
      }), k.addEventListener(x, L)) : L.handleEvent = B : L !== void 0 && (N["delete"](x), k.removeEventListener(x, L));
    }(v, g, I);
  };
function Yr() {
  var _S, _T;
  var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.React;
  var s = arguments.length > 1 ? arguments[1] : undefined;
  var I = arguments.length > 2 ? arguments[2] : undefined;
  var S = arguments.length > 3 ? arguments[3] : undefined;
  var T = arguments.length > 4 ? arguments[4] : undefined;
  var g, k, x;
  if (s === void 0) {
    var F = v;
    (k = F.tagName, x = F.elementClass, S = F.events, T = F.displayName), g = F.react;
  } else g = v, x = I, k = s;
  var B = g.Component,
    N = g.createElement,
    L = new Set(Object.keys((_S = S) !== null && _S !== void 0 ? _S : {}));
  var H = /*#__PURE__*/function (_B) {
    _inherits(H, _B);
    var _super = _createSuper(H);
    function H() {
      var _this;
      _classCallCheck(this, H);
      _this = _super.apply(this, arguments), _this.o = null;
      return _this;
    }
    _createClass(H, [{
      key: "t",
      value: function t(A) {
        if (this.o !== null) for (var G in this.i) Wr(this.o, G, this.props[G], A ? A[G] : void 0, S);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.t();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(A) {
        this.t(A);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          A = _this$props._$Gl,
          G = _objectWithoutProperties(_this$props, _excluded);
        this.h !== A && (this.u = function (M) {
          A !== null && function (W, K) {
            typeof W == "function" ? W(K) : W.current = K;
          }(A, M), _this2.o = M, _this2.h = A;
        }), this.i = {};
        var Y = {
          ref: this.u
        };
        for (var _i = 0, _Object$entries = Object.entries(G); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            M = _Object$entries$_i[0],
            W = _Object$entries$_i[1];
          Vr.has(M) ? Y[M === "className" ? "class" : M] = W : L.has(M) || M in x.prototype ? this.i[M] = W : Y[M] = W;
        }
        return N(k, Y);
      }
    }]);
    return H;
  }(B);
  H.displayName = (_T = T) !== null && _T !== void 0 ? _T : x.name;
  var Q = g.forwardRef(function (F, A) {
    return N(H, _objectSpread(_objectSpread({}, F), {}, {
      _$Gl: A
    }), F == null ? void 0 : F.children);
  });
  return Q.displayName = H.displayName, Q;
}
function zr(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v["default"] : v;
}
var We = {
    exports: {}
  },
  p = {};
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
  if (kt) return p;
  kt = 1;
  var v = Symbol["for"]("react.element"),
    s = Symbol["for"]("react.portal"),
    I = Symbol["for"]("react.fragment"),
    S = Symbol["for"]("react.strict_mode"),
    T = Symbol["for"]("react.profiler"),
    g = Symbol["for"]("react.provider"),
    k = Symbol["for"]("react.context"),
    x = Symbol["for"]("react.forward_ref"),
    B = Symbol["for"]("react.suspense"),
    N = Symbol["for"]("react.memo"),
    L = Symbol["for"]("react.lazy"),
    H = Symbol.iterator;
  function Q(r) {
    return r === null || _typeof(r) != "object" ? null : (r = H && r[H] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var F = {
      isMounted: function isMounted() {
        return !1;
      },
      enqueueForceUpdate: function enqueueForceUpdate() {},
      enqueueReplaceState: function enqueueReplaceState() {},
      enqueueSetState: function enqueueSetState() {}
    },
    A = Object.assign,
    G = {};
  function Y(r, u, d) {
    this.props = r, this.context = u, this.refs = G, this.updater = d || F;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function (r, u) {
    if (_typeof(r) != "object" && typeof r != "function" && r != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, u, "setState");
  }, Y.prototype.forceUpdate = function (r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function M() {}
  M.prototype = Y.prototype;
  function W(r, u, d) {
    this.props = r, this.context = u, this.refs = G, this.updater = d || F;
  }
  var K = W.prototype = new M();
  K.constructor = W, A(K, Y.prototype), K.isPureReactComponent = !0;
  var J = Array.isArray,
    $ = Object.prototype.hasOwnProperty,
    z = {
      current: null
    },
    X = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    };
  function te(r, u, d) {
    var h,
      y = {},
      _ = null,
      P = null;
    if (u != null) for (h in u.ref !== void 0 && (P = u.ref), u.key !== void 0 && (_ = "" + u.key), u) $.call(u, h) && !X.hasOwnProperty(h) && (y[h] = u[h]);
    var E = arguments.length - 2;
    if (E === 1) y.children = d;else if (1 < E) {
      for (var R = Array(E), U = 0; U < E; U++) R[U] = arguments[U + 2];
      y.children = R;
    }
    if (r && r.defaultProps) for (h in E = r.defaultProps, E) y[h] === void 0 && (y[h] = E[h]);
    return {
      $$typeof: v,
      type: r,
      key: _,
      ref: P,
      props: y,
      _owner: z.current
    };
  }
  function ve(r, u) {
    return {
      $$typeof: v,
      type: r.type,
      key: u,
      ref: r.ref,
      props: r.props,
      _owner: r._owner
    };
  }
  function se(r) {
    return _typeof(r) == "object" && r !== null && r.$$typeof === v;
  }
  function ke(r) {
    var u = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + r.replace(/[=:]/g, function (d) {
      return u[d];
    });
  }
  var ye = /\/+/g;
  function ce(r, u) {
    return _typeof(r) == "object" && r !== null && r.key != null ? ke("" + r.key) : u.toString(36);
  }
  function ne(r, u, d, h, y) {
    var _ = _typeof(r);
    (_ === "undefined" || _ === "boolean") && (r = null);
    var P = !1;
    if (r === null) P = !0;else switch (_) {
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
    if (P) return P = r, y = y(P), r = h === "" ? "." + ce(P, 0) : h, J(y) ? (d = "", r != null && (d = r.replace(ye, "$&/") + "/"), ne(y, u, d, "", function (U) {
      return U;
    })) : y != null && (se(y) && (y = ve(y, d + (!y.key || P && P.key === y.key ? "" : ("" + y.key).replace(ye, "$&/") + "/") + r)), u.push(y)), 1;
    if (P = 0, h = h === "" ? "." : h + ":", J(r)) for (var E = 0; E < r.length; E++) {
      _ = r[E];
      var R = h + ce(_, E);
      P += ne(_, u, d, R, y);
    } else if (R = Q(r), typeof R == "function") for (r = R.call(r), E = 0; !(_ = r.next()).done;) _ = _.value, R = h + ce(_, E++), P += ne(_, u, d, R, y);else if (_ === "object") throw u = String(r), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function q(r, u, d) {
    if (r == null) return r;
    var h = [],
      y = 0;
    return ne(r, h, "", "", function (_) {
      return u.call(d, _, y++);
    }), h;
  }
  function Z(r) {
    if (r._status === -1) {
      var u = r._result;
      u = u(), u.then(function (d) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = d);
      }, function (d) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = d);
      }), r._status === -1 && (r._status = 0, r._result = u);
    }
    if (r._status === 1) return r._result["default"];
    throw r._result;
  }
  var l = {
      current: null
    },
    re = {
      transition: null
    },
    me = {
      ReactCurrentDispatcher: l,
      ReactCurrentBatchConfig: re,
      ReactCurrentOwner: z
    };
  return p.Children = {
    map: q,
    forEach: function forEach(r, u, d) {
      q(r, function () {
        u.apply(this, arguments);
      }, d);
    },
    count: function count(r) {
      var u = 0;
      return q(r, function () {
        u++;
      }), u;
    },
    toArray: function toArray(r) {
      return q(r, function (u) {
        return u;
      }) || [];
    },
    only: function only(r) {
      if (!se(r)) throw Error("React.Children.only expected to receive a single React element child.");
      return r;
    }
  }, p.Component = Y, p.Fragment = I, p.Profiler = T, p.PureComponent = W, p.StrictMode = S, p.Suspense = B, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, p.cloneElement = function (r, u, d) {
    if (r == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var h = A({}, r.props),
      y = r.key,
      _ = r.ref,
      P = r._owner;
    if (u != null) {
      if (u.ref !== void 0 && (_ = u.ref, P = z.current), u.key !== void 0 && (y = "" + u.key), r.type && r.type.defaultProps) var E = r.type.defaultProps;
      for (R in u) $.call(u, R) && !X.hasOwnProperty(R) && (h[R] = u[R] === void 0 && E !== void 0 ? E[R] : u[R]);
    }
    var R = arguments.length - 2;
    if (R === 1) h.children = d;else if (1 < R) {
      E = Array(R);
      for (var U = 0; U < R; U++) E[U] = arguments[U + 2];
      h.children = E;
    }
    return {
      $$typeof: v,
      type: r.type,
      key: y,
      ref: _,
      props: h,
      _owner: P
    };
  }, p.createContext = function (r) {
    return r = {
      $$typeof: k,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, r.Provider = {
      $$typeof: g,
      _context: r
    }, r.Consumer = r;
  }, p.createElement = te, p.createFactory = function (r) {
    var u = te.bind(null, r);
    return u.type = r, u;
  }, p.createRef = function () {
    return {
      current: null
    };
  }, p.forwardRef = function (r) {
    return {
      $$typeof: x,
      render: r
    };
  }, p.isValidElement = se, p.lazy = function (r) {
    return {
      $$typeof: L,
      _payload: {
        _status: -1,
        _result: r
      },
      _init: Z
    };
  }, p.memo = function (r, u) {
    return {
      $$typeof: N,
      type: r,
      compare: u === void 0 ? null : u
    };
  }, p.startTransition = function (r) {
    var u = re.transition;
    re.transition = {};
    try {
      r();
    } finally {
      re.transition = u;
    }
  }, p.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  }, p.useCallback = function (r, u) {
    return l.current.useCallback(r, u);
  }, p.useContext = function (r) {
    return l.current.useContext(r);
  }, p.useDebugValue = function () {}, p.useDeferredValue = function (r) {
    return l.current.useDeferredValue(r);
  }, p.useEffect = function (r, u) {
    return l.current.useEffect(r, u);
  }, p.useId = function () {
    return l.current.useId();
  }, p.useImperativeHandle = function (r, u, d) {
    return l.current.useImperativeHandle(r, u, d);
  }, p.useInsertionEffect = function (r, u) {
    return l.current.useInsertionEffect(r, u);
  }, p.useLayoutEffect = function (r, u) {
    return l.current.useLayoutEffect(r, u);
  }, p.useMemo = function (r, u) {
    return l.current.useMemo(r, u);
  }, p.useReducer = function (r, u, d) {
    return l.current.useReducer(r, u, d);
  }, p.useRef = function (r) {
    return l.current.useRef(r);
  }, p.useState = function (r) {
    return l.current.useState(r);
  }, p.useSyncExternalStore = function (r, u, d) {
    return l.current.useSyncExternalStore(r, u, d);
  }, p.useTransition = function () {
    return l.current.useTransition();
  }, p.version = "18.2.0", p;
}
var pe = {
  exports: {}
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
pe.exports;
var Pt;
function Hr() {
  return Pt || (Pt = 1, function (v, s) {
     true && function () {
      (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__REACT_DEVTOOLS_GLOBAL_HOOK__)) < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var I = "18.2.0",
        S = Symbol["for"]("react.element"),
        T = Symbol["for"]("react.portal"),
        g = Symbol["for"]("react.fragment"),
        k = Symbol["for"]("react.strict_mode"),
        x = Symbol["for"]("react.profiler"),
        B = Symbol["for"]("react.provider"),
        N = Symbol["for"]("react.context"),
        L = Symbol["for"]("react.forward_ref"),
        H = Symbol["for"]("react.suspense"),
        Q = Symbol["for"]("react.suspense_list"),
        F = Symbol["for"]("react.memo"),
        A = Symbol["for"]("react.lazy"),
        G = Symbol["for"]("react.offscreen"),
        Y = Symbol.iterator,
        M = "@@iterator";
      function W(e) {
        if (e === null || _typeof(e) != "object") return null;
        var t = Y && e[Y] || e[M];
        return typeof t == "function" ? t : null;
      }
      var K = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        },
        J = {
          transition: null
        },
        $ = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: !1,
          didScheduleLegacyUpdate: !1
        },
        z = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        },
        X = {},
        te = null;
      function ve(e) {
        te = e;
      }
      X.setExtraStackFrame = function (e) {
        te = e;
      }, X.getCurrentStack = null, X.getStackAddendum = function () {
        var e = "";
        te && (e += te);
        var t = X.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var se = !1,
        ke = !1,
        ye = !1,
        ce = !1,
        ne = !1,
        q = {
          ReactCurrentDispatcher: K,
          ReactCurrentBatchConfig: J,
          ReactCurrentOwner: z
        };
      q.ReactDebugCurrentFrame = X, q.ReactCurrentActQueue = $;
      function Z(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
          re("warn", e, n);
        }
      }
      function l(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
          re("error", e, n);
        }
      }
      function re(e, t, n) {
        {
          var o = q.ReactDebugCurrentFrame,
            a = o.getStackAddendum();
          a !== "" && (t += "%s", n = n.concat([a]));
          var c = n.map(function (i) {
            return String(i);
          });
          c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
        }
      }
      var me = {};
      function r(e, t) {
        {
          var n = e.constructor,
            o = n && (n.displayName || n.name) || "ReactClass",
            a = o + "." + t;
          if (me[a]) return;
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
          isMounted: function isMounted(e) {
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
          enqueueForceUpdate: function enqueueForceUpdate(e, t, n) {
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
          enqueueReplaceState: function enqueueReplaceState(e, t, n, o) {
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
          enqueueSetState: function enqueueSetState(e, t, n, o) {
            r(e, "setState");
          }
        },
        d = Object.assign,
        h = {};
      Object.freeze(h);
      function y(e, t, n) {
        this.props = e, this.context = t, this.refs = h, this.updater = n || u;
      }
      y.prototype.isReactComponent = {}, y.prototype.setState = function (e, t) {
        if (_typeof(e) != "object" && typeof e != "function" && e != null) throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, y.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var _ = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          },
          P = function P(e, t) {
            Object.defineProperty(y.prototype, e, {
              get: function get() {
                Z("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
              }
            });
          };
        for (var E in _) _.hasOwnProperty(E) && P(E, _[E]);
      }
      function R() {}
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
          var t = typeof Symbol == "function" && Symbol.toStringTag,
            n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function Dt(e) {
        try {
          return ze(e), !1;
        } catch (_unused) {
          return !0;
        }
      }
      function ze(e) {
        return "" + e;
      }
      function ge(e) {
        if (Dt(e)) return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ft(e)), ze(e);
      }
      function It(e, t, n) {
        var o = e.displayName;
        if (o) return o;
        var a = t.displayName || t.name || "";
        return a !== "" ? n + "(" + a + ")" : n;
      }
      function Be(e) {
        return e.displayName || "Context";
      }
      function ee(e) {
        if (e == null) return null;
        if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
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
        if (_typeof(e) == "object") switch (e.$$typeof) {
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
          case A:
            {
              var a = e,
                c = a._payload,
                i = a._init;
              try {
                return ee(i(c));
              } catch (_unused2) {
                return null;
              }
            }
        }
        return null;
      }
      var le = Object.prototype.hasOwnProperty,
        He = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        },
        qe,
        Ge,
        je;
      je = {};
      function Ke(e) {
        if (le.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning) return !1;
        }
        return e.ref !== void 0;
      }
      function Je(e) {
        if (le.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function xt(e, t) {
        var n = function n() {
          qe || (qe = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function Lt(e, t) {
        var n = function n() {
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
      var Ae = function Ae(e, t, n, o, a, c, i) {
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
        var o,
          a = {},
          c = null,
          i = null,
          f = null,
          m = null;
        if (t != null) {
          Ke(t) && (i = t.ref, Nt(t)), Je(t) && (ge(t.key), c = "" + t.key), f = t.__self === void 0 ? null : t.__self, m = t.__source === void 0 ? null : t.__source;
          for (o in t) le.call(t, o) && !He.hasOwnProperty(o) && (a[o] = t[o]);
        }
        var b = arguments.length - 2;
        if (b === 1) a.children = n;else if (b > 1) {
          for (var w = Array(b), C = 0; C < b; C++) w[C] = arguments[C + 2];
          Object.freeze && Object.freeze(w), a.children = w;
        }
        if (e && e.defaultProps) {
          var O = e.defaultProps;
          for (o in O) a[o] === void 0 && (a[o] = O[o]);
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
        if (e == null) throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o,
          a = d({}, e.props),
          c = e.key,
          i = e.ref,
          f = e._self,
          m = e._source,
          b = e._owner;
        if (t != null) {
          Ke(t) && (i = t.ref, b = z.current), Je(t) && (ge(t.key), c = "" + t.key);
          var w;
          e.type && e.type.defaultProps && (w = e.type.defaultProps);
          for (o in t) le.call(t, o) && !He.hasOwnProperty(o) && (t[o] === void 0 && w !== void 0 ? a[o] = w[o] : a[o] = t[o]);
        }
        var C = arguments.length - 2;
        if (C === 1) a.children = n;else if (C > 1) {
          for (var O = Array(C), j = 0; j < C; j++) O[j] = arguments[j + 2];
          a.children = O;
        }
        return Ae(e.type, c, i, f, m, b, a);
      }
      function oe(e) {
        return _typeof(e) == "object" && e !== null && e.$$typeof === S;
      }
      var Qe = ".",
        Wt = ":";
      function Yt(e) {
        var t = /[=:]/g,
          n = {
            "=": "=0",
            ":": "=2"
          },
          o = e.replace(t, function (a) {
            return n[a];
          });
        return "$" + o;
      }
      var Xe = !1,
        zt = /\/+/g;
      function Ze(e) {
        return e.replace(zt, "$&/");
      }
      function $e(e, t) {
        return _typeof(e) == "object" && e !== null && e.key != null ? (ge(e.key), Yt("" + e.key)) : t.toString(36);
      }
      function be(e, t, n, o, a) {
        var c = _typeof(e);
        (c === "undefined" || c === "boolean") && (e = null);
        var i = !1;
        if (e === null) i = !0;else switch (c) {
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
          var f = e,
            m = a(f),
            b = o === "" ? Qe + $e(f, 0) : o;
          if (he(m)) {
            var w = "";
            b != null && (w = Ze(b) + "/"), be(m, t, w, "", function (Lr) {
              return Lr;
            });
          } else m != null && (oe(m) && (m.key && (!f || f.key !== m.key) && ge(m.key), m = Ut(m,
          // Keep both the (mapped) and old keys if they differ, just as
          // traverseAllChildren used to do for objects as children
          n + (
          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
          m.key && (!f || f.key !== m.key) ?
          // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
          // eslint-disable-next-line react-internal/safe-string-coercion
          Ze("" + m.key) + "/" : "") + b)), t.push(m));
          return 1;
        }
        var C,
          O,
          j = 0,
          D = o === "" ? Qe : o + Wt;
        if (he(e)) for (var Te = 0; Te < e.length; Te++) C = e[Te], O = D + $e(C, Te), j += be(C, t, n, O, a);else {
          var Ve = W(e);
          if (typeof Ve == "function") {
            var wt = e;
            Ve === wt.entries && (Xe || Z("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xe = !0);
            for (var Ir = Ve.call(wt), Ct, xr = 0; !(Ct = Ir.next()).done;) C = Ct.value, O = D + $e(C, xr++), j += be(C, t, n, O, a);
          } else if (c === "object") {
            var St = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (St === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : St) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return j;
      }
      function _e(e, t, n) {
        if (e == null) return e;
        var o = [],
          a = 0;
        return be(e, o, "", "", function (c) {
          return t.call(n, c, a++);
        }), o;
      }
      function Bt(e) {
        var t = 0;
        return _e(e, function () {
          t++;
        }), t;
      }
      function Ht(e, t, n) {
        _e(e, function () {
          t.apply(this, arguments);
        }, n);
      }
      function qt(e) {
        return _e(e, function (t) {
          return t;
        }) || [];
      }
      function Gt(e) {
        if (!oe(e)) throw new Error("React.Children.only expected to receive a single React element child.");
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
        var n = !1,
          o = !1,
          a = !1;
        {
          var c = {
            $$typeof: N,
            _context: t
          };
          Object.defineProperties(c, {
            Provider: {
              get: function get() {
                return o || (o = !0, l("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function set(i) {
                t.Provider = i;
              }
            },
            _currentValue: {
              get: function get() {
                return t._currentValue;
              },
              set: function set(i) {
                t._currentValue = i;
              }
            },
            _currentValue2: {
              get: function get() {
                return t._currentValue2;
              },
              set: function set(i) {
                t._currentValue2 = i;
              }
            },
            _threadCount: {
              get: function get() {
                return t._threadCount;
              },
              set: function set(i) {
                t._threadCount = i;
              }
            },
            Consumer: {
              get: function get() {
                return n || (n = !0, l("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), t.Consumer;
              }
            },
            displayName: {
              get: function get() {
                return t.displayName;
              },
              set: function set(i) {
                a || (Z("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", i), a = !0);
              }
            }
          }), t.Consumer = c;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var fe = -1,
        Fe = 0,
        et = 1,
        Jt = 2;
      function Qt(e) {
        if (e._status === fe) {
          var t = e._result,
            n = t();
          if (n.then(function (c) {
            if (e._status === Fe || e._status === fe) {
              var i = e;
              i._status = et, i._result = c;
            }
          }, function (c) {
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
          return a === void 0 && l("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", a), "default" in a || l("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", a), a["default"];
        } else throw e._result;
      }
      function Xt(e) {
        var t = {
            // We use these fields to store the result.
            _status: fe,
            _result: e
          },
          n = {
            $$typeof: A,
            _payload: t,
            _init: Qt
          };
        {
          var o, a;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function get() {
                return o;
              },
              set: function set(c) {
                l("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = c, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function get() {
                return a;
              },
              set: function set(c) {
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
        e != null && e.$$typeof === F ? l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? l("forwardRef requires a render function but was given %s.", e === null ? "null" : _typeof(e)) : e.length !== 0 && e.length !== 2 && l("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: L,
          render: e
        };
        {
          var n;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function get() {
              return n;
            },
            set: function set(o) {
              n = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return t;
      }
      var tt;
      tt = Symbol["for"]("react.module.reference");
      function rt(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === g || e === x || ne || e === k || e === H || e === Q || ce || e === G || se || ke || ye || _typeof(e) == "object" && e !== null && (e.$$typeof === A || e.$$typeof === F || e.$$typeof === B || e.$$typeof === N || e.$$typeof === L ||
        // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === tt || e.getModuleId !== void 0));
      }
      function er(e, t) {
        rt(e) || l("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : _typeof(e));
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
            get: function get() {
              return o;
            },
            set: function set(a) {
              o = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return n;
      }
      function V() {
        var e = K.current;
        return e === null && l("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."), e;
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
      var de = 0,
        nt,
        ot,
        at,
        ut,
        it,
        st,
        ct;
      function lt() {}
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
      var De = q.ReactCurrentDispatcher,
        Ie;
      function Ee(e, t, n) {
        {
          if (Ie === void 0) try {
            throw Error();
          } catch (a) {
            var o = a.stack.trim().match(/\n( *(at )?)/);
            Ie = o && o[1] || "";
          }
          return "\n" + Ie + e;
        }
      }
      var xe = !1,
        Re;
      {
        var gr = typeof WeakMap == "function" ? WeakMap : Map;
        Re = new gr();
      }
      function ft(e, t) {
        if (!e || xe) return "";
        {
          var n = Re.get(e);
          if (n !== void 0) return n;
        }
        var o;
        xe = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var c;
        c = De.current, De.current = null, mr();
        try {
          if (t) {
            var i = function i() {
              throw Error();
            };
            if (Object.defineProperty(i.prototype, "props", {
              set: function set() {
                throw Error();
              }
            }), (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.construct) {
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
            for (var f = D.stack.split("\n"), m = o.stack.split("\n"), b = f.length - 1, w = m.length - 1; b >= 1 && w >= 0 && f[b] !== m[w];) w--;
            for (; b >= 1 && w >= 0; b--, w--) if (f[b] !== m[w]) {
              if (b !== 1 || w !== 1) do if (b--, w--, w < 0 || f[b] !== m[w]) {
                var C = "\n" + f[b].replace(" at new ", " at ");
                return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && Re.set(e, C), C;
              } while (b >= 1 && w >= 0);
              break;
            }
          }
        } finally {
          xe = !1, De.current = c, hr(), Error.prepareStackTrace = a;
        }
        var O = e ? e.displayName || e.name : "",
          j = O ? Ee(O) : "";
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
        if (e == null) return "";
        if (typeof e == "function") return ft(e, _r(e));
        if (typeof e == "string") return Ee(e);
        switch (e) {
          case H:
            return Ee("Suspense");
          case Q:
            return Ee("SuspenseList");
        }
        if (_typeof(e) == "object") switch (e.$$typeof) {
          case L:
            return br(e.render);
          case F:
            return we(e.type, t, n);
          case A:
            {
              var o = e,
                a = o._payload,
                c = o._init;
              try {
                return we(c(a), t, n);
              } catch (_unused3) {}
            }
        }
        return "";
      }
      var dt = {},
        pt = q.ReactDebugCurrentFrame;
      function Ce(e) {
        if (e) {
          var t = e._owner,
            n = we(e.type, e._source, t ? t.type : null);
          pt.setExtraStackFrame(n);
        } else pt.setExtraStackFrame(null);
      }
      function Er(e, t, n, o, a) {
        {
          var c = Function.call.bind(le);
          for (var i in e) if (c(e, i)) {
            var f = void 0;
            try {
              if (typeof e[i] != "function") {
                var m = Error((o || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _typeof(e[i]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              f = e[i](t, i, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              f = b;
            }
            f && !(f instanceof Error) && (Ce(a), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, i, _typeof(f)), Ce(null)), f instanceof Error && !(f.message in dt) && (dt[f.message] = !0, Ce(a), l("Failed %s type: %s", n, f.message), Ce(null));
          }
        }
      }
      function ae(e) {
        if (e) {
          var t = e._owner,
            n = we(e.type, e._source, t ? t.type : null);
          ve(n);
        } else ve(null);
      }
      var Le;
      Le = !1;
      function vt() {
        if (z.current) {
          var e = ee(z.current.type);
          if (e) return "\n\nCheck the render method of `" + e + "`.";
        }
        return "";
      }
      function Rr(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""),
            n = e.lineNumber;
          return "\n\nCheck your code at " + t + ":" + n + ".";
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
          n && (t = "\n\nCheck the top-level render call using <" + n + ">.");
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
        if (_typeof(e) == "object") {
          if (he(e)) for (var n = 0; n < e.length; n++) {
            var o = e[n];
            oe(o) && mt(o, t);
          } else if (oe(e)) e._store && (e._store.validated = !0);else if (e) {
            var a = W(e);
            if (typeof a == "function" && a !== e.entries) for (var c = a.call(e), i; !(i = c.next()).done;) oe(i.value) && mt(i.value, t);
          }
        }
      }
      function gt(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string") return;
          var n;
          if (typeof t == "function") n = t.propTypes;else if (_typeof(t) == "object" && (t.$$typeof === L ||
          // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === F)) n = t.propTypes;else return;
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
          (e === void 0 || _typeof(e) == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c = wr(t);
          c ? a += c : a += vt();
          var i;
          e === null ? i = "null" : he(e) ? i = "array" : e !== void 0 && e.$$typeof === S ? (i = "<" + (ee(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : i = _typeof(e), l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", i, a);
        }
        var f = Mt.apply(this, arguments);
        if (f == null) return f;
        if (o) for (var m = 2; m < arguments.length; m++) ht(arguments[m], e);
        return e === g ? Sr(f) : gt(f), f;
      }
      var _t = !1;
      function Or(e) {
        var t = bt.bind(null, e);
        return t.type = e, _t || (_t = !0, Z("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function get() {
            return Z("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Tr(e, t, n) {
        for (var o = Vt.apply(this, arguments), a = 2; a < arguments.length; a++) ht(arguments[a], o.type);
        return gt(o), o;
      }
      function kr(e, t) {
        var n = J.transition;
        J.transition = {};
        var o = J.transition;
        J.transition._updatedFibers = /* @__PURE__ */new Set();
        try {
          e();
        } finally {
          if (J.transition = n, n === null && o._updatedFibers) {
            var a = o._updatedFibers.size;
            a > 10 && Z("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var Et = !1,
        Se = null;
      function Pr(e) {
        if (Se === null) try {
          var t = ("require" + Math.random()).slice(0, 7),
            n = v && v[t];
          Se = n.call(v, "timers").setImmediate;
        } catch (_unused4) {
          Se = function Se(a) {
            Et === !1 && (Et = !0, (typeof MessageChannel === "undefined" ? "undefined" : _typeof(MessageChannel)) > "u" && l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var c = new MessageChannel();
            c.port1.onmessage = a, c.port2.postMessage(void 0);
          };
        }
        return Se(e);
      }
      var ue = 0,
        Rt = !1;
      function jr(e) {
        {
          var t = ue;
          ue++, $.current === null && ($.current = []);
          var n = $.isBatchingLegacy,
            o;
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
          if (o !== null && _typeof(o) == "object" && typeof o.then == "function") {
            var c = o,
              i = !1,
              f = {
                then: function then(O, j) {
                  i = !0, c.then(function (D) {
                    Oe(t), ue === 0 ? Ne(D, O, j) : O(D);
                  }, function (D) {
                    Oe(t), j(D);
                  });
                }
              };
            return !Rt && (typeof Promise === "undefined" ? "undefined" : _typeof(Promise)) < "u" && Promise.resolve().then(function () {}).then(function () {
              i || (Rt = !0, l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), f;
          } else {
            var m = o;
            if (Oe(t), ue === 0) {
              var b = $.current;
              b !== null && (Ue(b), $.current = null);
              var w = {
                then: function then(O, j) {
                  $.current === null ? ($.current = [], Ne(m, O, j)) : O(m);
                }
              };
              return w;
            } else {
              var C = {
                then: function then(O, j) {
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
          if (o !== null) try {
            Ue(o), Pr(function () {
              o.length === 0 ? ($.current = null, t(e)) : Ne(e, t, n);
            });
          } catch (a) {
            n(a);
          } else t(e);
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
              do n = n(!0); while (n !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(t + 1), o;
          } finally {
            Me = !1;
          }
        }
      }
      var Ar = bt,
        $r = Tr,
        Fr = Or,
        Dr = {
          map: _e,
          forEach: Ht,
          count: Bt,
          toArray: qt,
          only: Gt
        };
      s.Children = Dr, s.Component = y, s.Fragment = g, s.Profiler = x, s.PureComponent = U, s.StrictMode = k, s.Suspense = H, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, s.cloneElement = $r, s.createContext = Kt, s.createElement = Ar, s.createFactory = Fr, s.createRef = At, s.forwardRef = Zt, s.isValidElement = oe, s.lazy = Xt, s.memo = er, s.startTransition = kr, s.unstable_act = jr, s.useCallback = sr, s.useContext = tr, s.useDebugValue = fr, s.useDeferredValue = pr, s.useEffect = ar, s.useId = vr, s.useImperativeHandle = lr, s.useInsertionEffect = ur, s.useLayoutEffect = ir, s.useMemo = cr, s.useReducer = nr, s.useRef = or, s.useState = rr, s.useSyncExternalStore = yr, s.useTransition = dr, s.version = I, (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__REACT_DEVTOOLS_GLOBAL_HOOK__)) < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(pe, pe.exports)), pe.exports;
}
 false ? undefined : We.exports = Hr();
var qr = We.exports;
var Gr = /* @__PURE__ */zr(qr);
var Kr = Object.defineProperty,
  Jr = Object.getOwnPropertyDescriptor,
  Ye = function Ye(v, s, I, S) {
    for (var T = S > 1 ? void 0 : S ? Jr(s, I) : s, g = v.length - 1, k; g >= 0; g--) (k = v[g]) && (T = (S ? k(s, I, T) : k(T)) || T);
    return S && T && Kr(s, I, T), T;
  };
var ie = /*#__PURE__*/function (_Mr) {
  _inherits(ie, _Mr);
  var _super2 = _createSuper(ie);
  function ie() {
    var _this3;
    _classCallCheck(this, ie);
    _this3 = _super2.call(this), _this3.inputLabels = [], _this3.getApiUrl = "", _this3.inputLabels = [], _this3.getApiUrl = "";
    return _this3;
  }
  _createClass(ie, [{
    key: "submitForm",
    value: function () {
      var _submitForm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(v) {
        var _ref;
        var T, s, I, S, _iterator, _step, _step$value, _g, _k, g, k;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              v.preventDefault(), v.stopPropagation();
              s = (_ref = (T = this.shadowRoot) == null ? void 0 : T.querySelector("form")) !== null && _ref !== void 0 ? _ref : null;
              if (s) {
                _context.next = 4;
                break;
              }
              return _context.abrupt("return");
            case 4:
              I = new FormData(s), S = {};
              _iterator = _createForOfIteratorHelper(I.entries());
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _step$value = _slicedToArray(_step.value, 2), _g = _step$value[0], _k = _step$value[1];
                  S[_g] = _k;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              console.log(S), console.log(JSON.stringify(S)), console.log(this.getApiUrl);
              _context.prev = 8;
              _context.next = 11;
              return fetch(this.getApiUrl, {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(S)
              });
            case 11:
              g = _context.sent;
              if (g.ok) {
                _context.next = 14;
                break;
              }
              throw new Error("HTTP error ".concat(g.status, ": ").concat(g.statusText));
            case 14:
              _context.next = 16;
              return g.json();
            case 16:
              k = _context.sent;
              console.log(k);
              _context.next = 23;
              break;
            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](8);
              console.error("Error:", _context.t0);
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[8, 20]]);
      }));
      function submitForm(_x2) {
        return _submitForm.apply(this, arguments);
      }
      return submitForm;
    }()
  }, {
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <div class=\"container\">\n          <form @submit=", ">\n          ", "\n            <button class=\"button-submit\" type=\"submit\">Submit</button>\n          </form>\n        </div>\n        "])), this.submitForm, Array.isArray(this.inputLabels) ? this.inputLabels.map(function (v) {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n                  <div class=\"infoInputs\">\n                    <label>", ":</label>\n                    <input type=\"", "\" name=", " placeholder=", " value=\"", "\" ?disabled=", " ?required=", "/>\n                  </div>\n                "])), v.label, v.type, v.name.toLowerCase(), v.placeholder, v.value, v.disabled, v.required);
      }) : "try again");
    }
  }]);
  return ie;
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
ie.styles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        .container {\n            display: grid;\n            grid-template-rows: auto auto;\n            background:    var(--body-bg, #f5f5dc);\n            color:         var(--body-color, #1F1F6F);\n            border:        var(--body-border,1px solid #1F1F6F);\n            border-radius: var(--body-border-radius,0.2rem);\n            padding:       var(--body-padding, 2rem);\n            padding:       var(--body-padding, 2rem);\n            font-family:   var(--font-family, Helvetica);\n            font-size:     var(--form-font-size, 20px);\n            font-weight:   var(--form-font-weight, 400);\n        }\n\n        from {\n            grid-column: 1/-1;\n        }\n\n        label {\n            min-width: 8rem;\n            margin-right: 1rem;\n            text-align: left;\n        }\n\n        input {\n            width: 100%;\n            box-sizing: border-box;\n\n            padding: 6px 10px;\n            margin: 1% 0;\n\n            border: 1px solid #ccc;\n            border-radius: 4px;\n        }\n\n        .infoInputs {\n            display: flex;\n            align-items: center;\n            margin-bottom: 1rem;\n        }\n\n        .button-submit {\n            grid-column: -1;\n            justify-self: flex-end;\n            background-color: var(--button-bg, #f5f5dc);\n            color:            var(--button-color, #1F1F6F);\n            border:           var(--button-border,1px solid #1F1F6F);\n            border-radius:    var(--button-border-radius,0.2rem);\n            margin-top: 2rem;\n            padding: 0.5rem 1.5rem;\n            cursor: pointer;\n            transition: background-color 0.3s;\n            font-family: var(--font-family, Helvetica);\n            font-size:   var(--button-font-size, 16px);\n            font-weight: var(--button-font-weight, 400);\n        }\n\n        .button-submit:hover {\n            background-color: var(--button-hover-color, white);\n        }\n    "])));
Ye([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Array
})], ie.prototype, "inputLabels", 2);
Ye([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: String,
  attribute: "get-api-url"
})], ie.prototype, "getApiUrl", 2);
ie = Ye([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["customElement"])("form-user-jffp")], ie);
var Zr = Yr(Gr, "form-user-jffp-react", ie, {
  onIconClick: "icon-click"
});


/***/ }),

/***/ "AaG5":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: _$LH, html, noChange, nothing, render, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return b; });
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;
var i = window,
  s = i.trustedTypes,
  e = s ? s.createPolicy("lit-html", {
    createHTML: function createHTML(t) {
      return t;
    }
  }) : void 0,
  o = "$lit$",
  n = "lit$".concat((Math.random() + "").slice(9), "$"),
  l = "?" + n,
  h = "<".concat(l, ">"),
  r = document,
  d = function d() {
    return r.createComment("");
  },
  u = function u(t) {
    return null === t || "object" != _typeof(t) && "function" != typeof t;
  },
  c = Array.isArray,
  v = function v(t) {
    return c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]);
  },
  a = "[ \t\n\f\r]",
  f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  _ = /-->/g,
  m = />/g,
  p = RegExp(">|".concat(a, "(?:([^\\s\"'>=/]+)(").concat(a, "*=").concat(a, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"),
  g = /'/g,
  $ = /"/g,
  y = /^(?:script|style|textarea|title)$/i,
  w = function w(t) {
    return function (i) {
      for (var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        s[_key - 1] = arguments[_key];
      }
      return {
        _$litType$: t,
        strings: i,
        values: s
      };
    };
  },
  x = w(1),
  b = w(2),
  T = Symbol["for"]("lit-noChange"),
  A = Symbol["for"]("lit-nothing"),
  E = new WeakMap(),
  C = r.createTreeWalker(r, 129, null, !1),
  P = function P(t, i) {
    var s = t.length - 1,
      l = [];
    var r,
      d = 2 === i ? "<svg>" : "",
      u = f;
    for (var _i = 0; _i < s; _i++) {
      var _s = t[_i];
      var _e = void 0,
        _c = void 0,
        _v = -1,
        _a = 0;
      for (; _a < _s.length && (u.lastIndex = _a, _c = u.exec(_s), null !== _c);) _a = u.lastIndex, u === f ? "!--" === _c[1] ? u = _ : void 0 !== _c[1] ? u = m : void 0 !== _c[2] ? (y.test(_c[2]) && (r = RegExp("</" + _c[2], "g")), u = p) : void 0 !== _c[3] && (u = p) : u === p ? ">" === _c[0] ? (u = null != r ? r : f, _v = -1) : void 0 === _c[1] ? _v = -2 : (_v = u.lastIndex - _c[2].length, _e = _c[1], u = void 0 === _c[3] ? p : '"' === _c[3] ? $ : g) : u === $ || u === g ? u = p : u === _ || u === m ? u = f : (u = p, r = void 0);
      var _w = u === p && t[_i + 1].startsWith("/>") ? " " : "";
      d += u === f ? _s + h : _v >= 0 ? (l.push(_e), _s.slice(0, _v) + o + _s.slice(_v) + n + _w) : _s + n + (-2 === _v ? (l.push(void 0), _i) : _w);
    }
    var c = d + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [void 0 !== e ? e.createHTML(c) : c, l];
  };
var V = /*#__PURE__*/function () {
  function V(_ref, e) {
    var t = _ref.strings,
      i = _ref._$litType$;
    _classCallCheck(this, V);
    var h;
    this.parts = [];
    var r = 0,
      u = 0;
    var c = t.length - 1,
      v = this.parts,
      _P = P(t, i),
      _P2 = _slicedToArray(_P, 2),
      a = _P2[0],
      f = _P2[1];
    if (this.el = V.createElement(a, e), C.currentNode = this.el.content, 2 === i) {
      var _t = this.el.content,
        _i2 = _t.firstChild;
      _i2.remove(), _t.append.apply(_t, _toConsumableArray(_i2.childNodes));
    }
    for (; null !== (h = C.nextNode()) && v.length < c;) {
      if (1 === h.nodeType) {
        if (h.hasAttributes()) {
          var _t2 = [];
          var _iterator = _createForOfIteratorHelper(h.getAttributeNames()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _i5 = _step.value;
              if (_i5.endsWith(o) || _i5.startsWith(n)) {
                var _s2 = f[u++];
                if (_t2.push(_i5), void 0 !== _s2) {
                  var _t4 = h.getAttribute(_s2.toLowerCase() + o).split(n),
                    _i6 = /([.?@])?(.*)/.exec(_s2);
                  v.push({
                    type: 1,
                    index: r,
                    name: _i6[2],
                    strings: _t4,
                    ctor: "." === _i6[1] ? k : "?" === _i6[1] ? I : "@" === _i6[1] ? L : R
                  });
                } else v.push({
                  type: 6,
                  index: r
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          for (var _i3 = 0, _t3 = _t2; _i3 < _t3.length; _i3++) {
            var _i4 = _t3[_i3];
            h.removeAttribute(_i4);
          }
        }
        if (y.test(h.tagName)) {
          var _t5 = h.textContent.split(n),
            _i7 = _t5.length - 1;
          if (_i7 > 0) {
            h.textContent = s ? s.emptyScript : "";
            for (var _s3 = 0; _s3 < _i7; _s3++) h.append(_t5[_s3], d()), C.nextNode(), v.push({
              type: 2,
              index: ++r
            });
            h.append(_t5[_i7], d());
          }
        }
      } else if (8 === h.nodeType) if (h.data === l) v.push({
        type: 2,
        index: r
      });else {
        var _t6 = -1;
        for (; -1 !== (_t6 = h.data.indexOf(n, _t6 + 1));) v.push({
          type: 7,
          index: r
        }), _t6 += n.length - 1;
      }
      r++;
    }
  }
  _createClass(V, null, [{
    key: "createElement",
    value: function createElement(t, i) {
      var s = r.createElement("template");
      return s.innerHTML = t, s;
    }
  }]);
  return V;
}();
function N(t, i) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
  var e = arguments.length > 3 ? arguments[3] : undefined;
  var o, n, l, h;
  if (i === T) return i;
  var r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
  var d = u(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== d && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === d ? r = void 0 : (r = new d(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = N(t, r._$AS(t, i.values), r, e)), i;
}
var S = /*#__PURE__*/function () {
  function S(t, i) {
    _classCallCheck(this, S);
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  _createClass(S, [{
    key: "parentNode",
    get: function get() {
      return this._$AM.parentNode;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "u",
    value: function u(t) {
      var i;
      var _this$_$AD = this._$AD,
        s = _this$_$AD.el.content,
        e = _this$_$AD.parts,
        o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : r).importNode(s, !0);
      C.currentNode = o;
      var n = C.nextNode(),
        l = 0,
        h = 0,
        d = e[0];
      for (; void 0 !== d;) {
        if (l === d.index) {
          var _i8 = void 0;
          2 === d.type ? _i8 = new M(n, n.nextSibling, this, t) : 1 === d.type ? _i8 = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (_i8 = new z(n, this, t)), this._$AV.push(_i8), d = e[++h];
        }
        l !== (null == d ? void 0 : d.index) && (n = C.nextNode(), l++);
      }
      return C.currentNode = r, o;
    }
  }, {
    key: "v",
    value: function v(t) {
      var i = 0;
      var _iterator2 = _createForOfIteratorHelper(this._$AV),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _s4 = _step2.value;
          void 0 !== _s4 && (void 0 !== _s4.strings ? (_s4._$AI(t, _s4, i), i += _s4.strings.length - 2) : _s4._$AI(t[i])), i++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
  return S;
}();
var M = /*#__PURE__*/function () {
  function M(t, i, s, e) {
    _classCallCheck(this, M);
    var o;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }
  _createClass(M, [{
    key: "_$AU",
    get: function get() {
      var t, i;
      return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
  }, {
    key: "parentNode",
    get: function get() {
      var t = this._$AA.parentNode;
      var i = this._$AM;
      return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
  }, {
    key: "startNode",
    get: function get() {
      return this._$AA;
    }
  }, {
    key: "endNode",
    get: function get() {
      return this._$AB;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      t = N(this, t, i), u(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : v(t) ? this.T(t) : this._(t);
    }
  }, {
    key: "k",
    value: function k(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
  }, {
    key: "$",
    value: function $(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
  }, {
    key: "_",
    value: function _(t) {
      this._$AH !== A && u(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r.createTextNode(t)), this._$AH = t;
    }
  }, {
    key: "g",
    value: function g(t) {
      var i;
      var s = t.values,
        e = t._$litType$,
        o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = V.createElement(e.h, this.options)), e);
      if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);else {
        var _t7 = new S(o, this),
          _i9 = _t7.u(this.options);
        _t7.v(s), this.$(_i9), this._$AH = _t7;
      }
    }
  }, {
    key: "_$AC",
    value: function _$AC(t) {
      var i = E.get(t.strings);
      return void 0 === i && E.set(t.strings, i = new V(t)), i;
    }
  }, {
    key: "T",
    value: function T(t) {
      c(this._$AH) || (this._$AH = [], this._$AR());
      var i = this._$AH;
      var s,
        e = 0;
      var _iterator3 = _createForOfIteratorHelper(t),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _o = _step3.value;
          e === i.length ? i.push(s = new M(this.k(d()), this.k(d()), this, this.options)) : s = i[e], s._$AI(_o), e++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
  }, {
    key: "_$AR",
    value: function _$AR() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._$AA.nextSibling;
      var i = arguments.length > 1 ? arguments[1] : undefined;
      var s;
      for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) {
        var _i10 = t.nextSibling;
        t.remove(), t = _i10;
      }
    }
  }, {
    key: "setConnected",
    value: function setConnected(t) {
      var i;
      void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
  }]);
  return M;
}();
var R = /*#__PURE__*/function () {
  function R(t, i, s, e, o) {
    _classCallCheck(this, R);
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = A;
  }
  _createClass(R, [{
    key: "tagName",
    get: function get() {
      return this.element.tagName;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var e = arguments.length > 3 ? arguments[3] : undefined;
      var o = this.strings;
      var n = !1;
      if (void 0 === o) t = N(this, t, i, 0), n = !u(t) || t !== this._$AH && t !== T, n && (this._$AH = t);else {
        var _e2 = t;
        var _l, _h;
        for (t = o[0], _l = 0; _l < o.length - 1; _l++) _h = N(this, _e2[s + _l], i, _l), _h === T && (_h = this._$AH[_l]), n || (n = !u(_h) || _h !== this._$AH[_l]), _h === A ? t = A : t !== A && (t += (null != _h ? _h : "") + o[_l + 1]), this._$AH[_l] = _h;
      }
      n && !e && this.j(t);
    }
  }, {
    key: "j",
    value: function j(t) {
      t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
  }]);
  return R;
}();
var k = /*#__PURE__*/function (_R) {
  _inherits(k, _R);
  var _super = _createSuper(k);
  function k() {
    var _this;
    _classCallCheck(this, k);
    _this = _super.apply(this, arguments), _this.type = 3;
    return _this;
  }
  _createClass(k, [{
    key: "j",
    value: function j(t) {
      this.element[this.name] = t === A ? void 0 : t;
    }
  }]);
  return k;
}(R);
var H = s ? s.emptyScript : "";
var I = /*#__PURE__*/function (_R2) {
  _inherits(I, _R2);
  var _super2 = _createSuper(I);
  function I() {
    var _this2;
    _classCallCheck(this, I);
    _this2 = _super2.apply(this, arguments), _this2.type = 4;
    return _this2;
  }
  _createClass(I, [{
    key: "j",
    value: function j(t) {
      t && t !== A ? this.element.setAttribute(this.name, H) : this.element.removeAttribute(this.name);
    }
  }]);
  return I;
}(R);
var L = /*#__PURE__*/function (_R3) {
  _inherits(L, _R3);
  var _super3 = _createSuper(L);
  function L(t, i, s, e, o) {
    var _this3;
    _classCallCheck(this, L);
    _this3 = _super3.call(this, t, i, s, e, o), _this3.type = 5;
    return _this3;
  }
  _createClass(L, [{
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s;
      if ((t = null !== (s = N(this, t, i, 0)) && void 0 !== s ? s : A) === T) return;
      var e = this._$AH,
        o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
        n = t !== A && (e === A || o);
      o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(t) {
      var i, s;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
  }]);
  return L;
}(R);
var z = /*#__PURE__*/function () {
  function z(t, i, s) {
    _classCallCheck(this, z);
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  _createClass(z, [{
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      N(this, t);
    }
  }]);
  return z;
}();
var Z = {
    O: o,
    P: n,
    A: l,
    C: 1,
    M: P,
    L: S,
    D: v,
    R: N,
    I: M,
    V: R,
    H: I,
    N: L,
    U: k,
    F: z
  },
  j = i.litHtmlPolyfillSupport;
null == j || j(V, M), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.7.4");
var B = function B(t, i, s) {
  var e, o;
  var n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  var l = n._$litPart$;
  if (void 0 === l) {
    var _t8 = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    n._$litPart$ = l = new M(i.insertBefore(d(), _t8), _t8, void 0, null != s ? s : {});
  }
  return l._$AI(t), l;
};


/***/ }),

/***/ "CGGc":
/*!****************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/reactive-element.js ***!
  \****************************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return a; });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "36NN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s;
var e = window,
  r = e.trustedTypes,
  h = r ? r.emptyScript : "",
  o = e.reactiveElementPolyfillSupport,
  n = {
    toAttribute: function toAttribute(t, i) {
      switch (i) {
        case Boolean:
          t = t ? h : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute: function fromAttribute(t, i) {
      var s = t;
      switch (i) {
        case Boolean:
          s = null !== t;
          break;
        case Number:
          s = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            s = JSON.parse(t);
          } catch (t) {
            s = null;
          }
      }
      return s;
    }
  },
  a = function a(t, i) {
    return i !== t && (i == i || t == t);
  },
  l = {
    attribute: !0,
    type: String,
    converter: n,
    reflect: !1,
    hasChanged: a
  };
var d = /*#__PURE__*/function (_HTMLElement) {
  _inherits(d, _HTMLElement);
  var _super = _createSuper(d);
  function d() {
    var _this;
    _classCallCheck(this, d);
    _this = _super.call(this), _this._$Ei = new Map(), _this.isUpdatePending = !1, _this.hasUpdated = !1, _this._$El = null, _this.u();
    return _this;
  }
  _createClass(d, [{
    key: "u",
    value: function u() {
      var _this2 = this;
      var t;
      this._$E_ = new Promise(function (t) {
        return _this2.enableUpdating = t;
      }), this._$AL = new Map(), this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach(function (t) {
        return t(_this2);
      });
    }
  }, {
    key: "addController",
    value: function addController(t) {
      var i, s;
      (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
  }, {
    key: "removeController",
    value: function removeController(t) {
      var i;
      null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
  }, {
    key: "_$Eg",
    value: function _$Eg() {
      var _this3 = this;
      this.constructor.elementProperties.forEach(function (t, i) {
        _this3.hasOwnProperty(i) && (_this3._$Ei.set(i, _this3[i]), delete _this3[i]);
      });
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var t;
      var s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
      return Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"])(s, this.constructor.elementStyles), s;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach(function (t) {
        var i;
        return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
      });
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating(t) {}
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var t;
      null === (t = this._$ES) || void 0 === t || t.forEach(function (t) {
        var i;
        return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(t, i, s) {
      this._$AK(t, s);
    }
  }, {
    key: "_$EO",
    value: function _$EO(t, i) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l;
      var e;
      var r = this.constructor._$Ep(t, s);
      if (void 0 !== r && !0 === s.reflect) {
        var _h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n).toAttribute(i, s.type);
        this._$El = t, null == _h ? this.removeAttribute(r) : this.setAttribute(r, _h), this._$El = null;
      }
    }
  }, {
    key: "_$AK",
    value: function _$AK(t, i) {
      var s;
      var e = this.constructor,
        r = e._$Ev.get(t);
      if (void 0 !== r && this._$El !== r) {
        var _t = e.getPropertyOptions(r),
          _h2 = "function" == typeof _t.converter ? {
            fromAttribute: _t.converter
          } : void 0 !== (null === (s = _t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? _t.converter : n;
        this._$El = r, this[r] = _h2.fromAttribute(i, _t.type), this._$El = null;
      }
    }
  }, {
    key: "requestUpdate",
    value: function requestUpdate(t, i, s) {
      var e = !0;
      void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
  }, {
    key: "_$Ej",
    value: function () {
      var _$Ej2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var t;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.isUpdatePending = !0;
              _context.prev = 1;
              _context.next = 4;
              return this._$E_;
            case 4:
              _context.next = 9;
              break;
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              Promise.reject(_context.t0);
            case 9:
              t = this.scheduleUpdate();
              _context.t1 = null != t;
              if (!_context.t1) {
                _context.next = 14;
                break;
              }
              _context.next = 14;
              return t;
            case 14:
              return _context.abrupt("return", !this.isUpdatePending);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 6]]);
      }));
      function _$Ej() {
        return _$Ej2.apply(this, arguments);
      }
      return _$Ej;
    }()
  }, {
    key: "scheduleUpdate",
    value: function scheduleUpdate() {
      return this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this4 = this;
      var t;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach(function (t, i) {
        return _this4[i] = t;
      }), this._$Ei = void 0);
      var i = !1;
      var s = this._$AL;
      try {
        i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach(function (t) {
          var i;
          return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
        }), this.update(s)) : this._$Ek();
      } catch (t) {
        throw i = !1, this._$Ek(), t;
      }
      i && this._$AE(s);
    }
  }, {
    key: "willUpdate",
    value: function willUpdate(t) {}
  }, {
    key: "_$AE",
    value: function _$AE(t) {
      var i;
      null === (i = this._$ES) || void 0 === i || i.forEach(function (t) {
        var i;
        return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
      }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
  }, {
    key: "_$Ek",
    value: function _$Ek() {
      this._$AL = new Map(), this.isUpdatePending = !1;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this.getUpdateComplete();
    }
  }, {
    key: "getUpdateComplete",
    value: function getUpdateComplete() {
      return this._$E_;
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(t) {
      return !0;
    }
  }, {
    key: "update",
    value: function update(t) {
      var _this5 = this;
      void 0 !== this._$EC && (this._$EC.forEach(function (t, i) {
        return _this5._$EO(i, _this5[i], t);
      }), this._$EC = void 0), this._$Ek();
    }
  }, {
    key: "updated",
    value: function updated(t) {}
  }, {
    key: "firstUpdated",
    value: function firstUpdated(t) {}
  }], [{
    key: "addInitializer",
    value: function addInitializer(t) {
      var i;
      this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this6 = this;
      this.finalize();
      var t = [];
      return this.elementProperties.forEach(function (i, s) {
        var e = _this6._$Ep(s, i);
        void 0 !== e && (_this6._$Ev.set(e, s), t.push(e));
      }), t;
    }
  }, {
    key: "createProperty",
    value: function createProperty(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l;
      if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
        var _s = "symbol" == _typeof(t) ? Symbol() : "__" + t,
          _e = this.getPropertyDescriptor(t, _s, i);
        void 0 !== _e && Object.defineProperty(this.prototype, t, _e);
      }
    }
  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(t, i, s) {
      return {
        get: function get() {
          return this[i];
        },
        set: function set(e) {
          var r = this[t];
          this[i] = e, this.requestUpdate(t, r, s);
        },
        configurable: !0,
        enumerable: !0
      };
    }
  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(t) {
      return this.elementProperties.get(t) || l;
    }
  }, {
    key: "finalize",
    value: function finalize() {
      if (this.hasOwnProperty("finalized")) return !1;
      this.finalized = !0;
      var t = Object.getPrototypeOf(this);
      if (t.finalize(), void 0 !== t.h && (this.h = _toConsumableArray(t.h)), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map(), this.hasOwnProperty("properties")) {
        var _t2 = this.properties,
          _i = [].concat(_toConsumableArray(Object.getOwnPropertyNames(_t2)), _toConsumableArray(Object.getOwnPropertySymbols(_t2)));
        var _iterator = _createForOfIteratorHelper(_i),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _s2 = _step.value;
            this.createProperty(_s2, _t2[_s2]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
  }, {
    key: "finalizeStyles",
    value: function finalizeStyles(i) {
      var s = [];
      if (Array.isArray(i)) {
        var _e2 = new Set(i.flat(1 / 0).reverse());
        var _iterator2 = _createForOfIteratorHelper(_e2),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _i2 = _step2.value;
            s.unshift(Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"])(_i2));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else void 0 !== i && s.push(Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"])(i));
      return s;
    }
  }, {
    key: "_$Ep",
    value: function _$Ep(t, i) {
      var s = i.attribute;
      return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
  }]);
  return d;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
d.finalized = !0, d.elementProperties = new Map(), d.elementStyles = [], d.shadowRootOptions = {
  mode: "open"
}, null == o || o({
  ReactiveElement: d
}), (null !== (s = e.reactiveElementVersions) && void 0 !== s ? s : e.reactiveElementVersions = []).push("1.6.1");


/***/ }),

/***/ "CQbg":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual, _$LH, html, noChange, nothing, render, svg, LitElement, UpdatingElement, _$LE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_$LE", function() { return h; });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "CGGc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["notEqual"]; });

/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "AaG5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["_$LH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["nothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["svg"]; });

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l, o;
var r = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"];
var s = /*#__PURE__*/function (_t) {
  _inherits(s, _t);
  var _super = _createSuper(s);
  function s() {
    var _this;
    _classCallCheck(this, s);
    _this = _super.apply(this, arguments), _this.renderOptions = {
      host: _assertThisInitialized(_this)
    }, _this._$Do = void 0;
    return _this;
  }
  _createClass(s, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var t, e;
      var i = _get(_getPrototypeOf(s.prototype), "createRenderRoot", this).call(this);
      return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
  }, {
    key: "update",
    value: function update(t) {
      var i = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), _get(_getPrototypeOf(s.prototype), "update", this).call(this, t), this._$Do = Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["render"])(i, this.renderRoot, this.renderOptions);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      _get(_getPrototypeOf(s.prototype), "connectedCallback", this).call(this), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var t;
      _get(_getPrototypeOf(s.prototype), "disconnectedCallback", this).call(this), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
  }, {
    key: "render",
    value: function render() {
      return lit_html__WEBPACK_IMPORTED_MODULE_1__["noChange"];
    }
  }]);
  return s;
}(_lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"]);
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
  LitElement: s
});
var n = globalThis.litElementPolyfillSupport;
null == n || n({
  LitElement: s
});
var h = {
  _$AK: function _$AK(t, e, i) {
    t._$AK(e, i);
  },
  _$AL: function _$AL(t) {
    return t._$AL;
  }
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.3.2");


/***/ }),

/***/ "FhDR":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/property.js ***!
  \*******************************************************************/
/*! exports provided: property */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return e; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i = function i(_i, e) {
  return "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? _objectSpread(_objectSpread({}, e), {}, {
    finisher: function finisher(n) {
      n.createProperty(e.key, _i);
    }
  }) : {
    kind: "field",
    key: Symbol(),
    placement: "own",
    descriptor: {},
    originalKey: e.key,
    initializer: function initializer() {
      "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
    },
    finisher: function finisher(n) {
      n.createProperty(e.key, _i);
    }
  };
};
function e(e) {
  return function (n, t) {
    return void 0 !== t ? function (i, e, n) {
      e.constructor.createProperty(n, i);
    }(e, n, t) : i(e, n);
  };
}


/***/ }),

/***/ "GFLV":
/*!******************************************************!*\
  !*** ./lib/webparts/helloWorld/HelloWorldWebPart.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-lodash-subset */ "Pk8u");
/* harmony import */ var _microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var form_user_jffp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! form-user-jffp */ "A8XA");
/* harmony import */ var _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HelloWorldWebPart.module.scss */ "lYr8");
/* harmony import */ var HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! HelloWorldWebPartStrings */ "hI9z");
/* harmony import */ var HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__);
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();







var HelloWorldWebPart = /** @class */function (_super) {
  __extends(HelloWorldWebPart, _super);
  function HelloWorldWebPart() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this._isDarkTheme = false;
    _this._environmentMessage = '';
    return _this;
  }
  HelloWorldWebPart.prototype.render = function () {
    this.domElement.innerHTML = "\n    <section class=\"".concat(_HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].helloWorld, " ").concat(!!this.context.sdks.microsoftTeams ? _HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].teams : '', "\">\n      <div class=\"").concat(_HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].welcome, "\">\n        <img alt=\"\" src=\"").concat(this._isDarkTheme ? __webpack_require__(/*! ./assets/welcome-dark.png */ "2f0T") : __webpack_require__(/*! ./assets/welcome-light.png */ "z6Ln"), "\" class=\"").concat(_HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].welcomeImage, "\" />\n        <h2>Well done, ").concat(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["escape"])(this.context.pageContext.user.displayName), "!</h2>\n        <div>").concat(this._environmentMessage, "</div>\n        <div>Web part property value: <strong>").concat(Object(_microsoft_sp_lodash_subset__WEBPACK_IMPORTED_MODULE_3__["escape"])(this.properties.description), "</strong></div>\n      </div>\n      <div>\n        <form-user-jffp \n          class=\"").concat(_HelloWorldWebPart_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].formUserJffp, "\"\n          inputLabels='[\n            {\n              \"label\":\"Name\",\n              \"name\": \"name\", \n              \"type\": \"text\",\n              \"value\": \"name\",\n              \"placeholder\": \"name\",\n              \"required\": true\n            },\n            {\n              \"label\":\"Email\",\n              \"name\": \"email\", \n              \"type\": \"text\",\n              \"placeholder\": \"Not needed for the time being\",\n              \"disabled\": true\n            },\n            {\n              \"label\":\"Password\",\n              \"name\": \"password\",\n              \"placeholder\": \"Needed for the time being\",\n              \"type\": \"password\"\n            },\n            {\n              \"label\":\"Address\",\n              \"name\": \"address\",\n              \"placeholder\": \"Address\",\n              \"type\": \"text\",\n              \"value\": \"Address\"\n            }]' \n          get-api-url=\"http://localhost:3000/usersUniqueName/register\"\n          ></form-user-jffp>\n      </div>\n    </section>");
  };
  // get-api-url="https://n5kv.sharepoint.com/sites/DeveloperSite/_api/web/lists/getbytitle(Users)/items"
  HelloWorldWebPart.prototype.onInit = function () {
    var _this = this;
    return this._getEnvironmentMessage().then(function (message) {
      _this._environmentMessage = message;
    });
  };
  HelloWorldWebPart.prototype._getEnvironmentMessage = function () {
    var _this = this;
    if (!!this.context.sdks.microsoftTeams) {
      // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext().then(function (context) {
        var environmentMessage = '';
        switch (context.app.host.name) {
          case 'Office':
            // running in Office
            environmentMessage = _this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppLocalEnvironmentOffice"] : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppOfficeEnvironment"];
            break;
          case 'Outlook':
            // running in Outlook
            environmentMessage = _this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppLocalEnvironmentOutlook"] : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppOutlookEnvironment"];
            break;
          case 'Teams':
            // running in Teams
            environmentMessage = _this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppLocalEnvironmentTeams"] : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppTeamsTabEnvironment"];
            break;
          default:
            throw new Error('Unknown host');
        }
        return environmentMessage;
      });
    }
    return Promise.resolve(this.context.isServedFromLocalhost ? HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppLocalEnvironmentSharePoint"] : HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["AppSharePointEnvironment"]);
  };
  HelloWorldWebPart.prototype.onThemeChanged = function (currentTheme) {
    if (!currentTheme) {
      return;
    }
    this._isDarkTheme = !!currentTheme.isInverted;
    var semanticColors = currentTheme.semanticColors;
    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--bodyBackground', semanticColors.bodyBackground || null);
      this.domElement.style.setProperty('--bodyDivider', semanticColors.bodyFrameBackground || null);
      this.domElement.style.setProperty('--buttonBackground', semanticColors.bodyFrameBackground || null);
      this.domElement.style.setProperty('--buttonText', semanticColors.buttonText || null);
      this.domElement.style.setProperty('--buttonBorder', semanticColors.buttonBorder || null);
      this.domElement.style.setProperty('--buttonBackgroundHovered', semanticColors.buttonBackgroundHovered || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }
  };
  Object.defineProperty(HelloWorldWebPart.prototype, "dataVersion", {
    get: function get() {
      return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse('1.0');
    },
    enumerable: false,
    configurable: true
  });
  HelloWorldWebPart.prototype.getPropertyPaneConfiguration = function () {
    return {
      pages: [{
        header: {
          description: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["PropertyPaneDescription"]
        },
        groups: [{
          groupName: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["BasicGroupName"],
          groupFields: [Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_1__["PropertyPaneTextField"])('description', {
            label: HelloWorldWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["DescriptionFieldLabel"]
          })]
        }]
      }]
    };
  };
  return HelloWorldWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_2__["BaseClientSideWebPart"]);
/* harmony default export */ __webpack_exports__["default"] = (HelloWorldWebPart);

/***/ }),

/***/ "JBoQ":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js ***!
  \**********************************************************************************/
/*! exports provided: queryAssignedElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAssignedElements", function() { return l; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "LYib");

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
var e = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? function (o, n) {
  return o.assignedElements(n);
} : function (o, n) {
  return o.assignedNodes(n).filter(function (o) {
    return o.nodeType === Node.ELEMENT_NODE;
  });
};
function l(n) {
  var _ref = null != n ? n : {},
    l = _ref.slot,
    t = _ref.selector;
  return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    descriptor: function descriptor(o) {
      return {
        get: function get() {
          var o;
          var r = "slot" + (l ? "[name=".concat(l, "]") : ":not([name])"),
            i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r),
            s = null != i ? e(i, n) : [];
          return t ? s.filter(function (o) {
            return o.matches(t);
          }) : s;
        },
        enumerable: !0,
        configurable: !0
      };
    }
  });
}


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);
      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }
      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names

  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }
      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }
      list.push(item);
    }
  };
  return list;
};
function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }
  return [content].join('\n');
} // Adapted from convert-source-map (MIT)

function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "JQ8u":
/*!****************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query.js ***!
  \****************************************************************/
/*! exports provided: query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return i; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "LYib");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function i(i, n) {
  return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    descriptor: function descriptor(o) {
      var t = {
        get: function get() {
          var o, n;
          return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
        },
        enumerable: !0,
        configurable: !0
      };
      if (n) {
        var _n = "symbol" == _typeof(o) ? Symbol() : "__" + o;
        t.get = function () {
          var o, t;
          return void 0 === this[_n] && (this[_n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[_n];
        };
      }
      return t;
    }
  });
}


/***/ }),

/***/ "LYib":
/*!***************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/base.js ***!
  \***************************************************************/
/*! exports provided: decorateProperty, legacyPrototypeMethod, standardPrototypeMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorateProperty", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacyPrototypeMethod", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardPrototypeMethod", function() { return t; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var e = function e(_e, t, o) {
    Object.defineProperty(t, o, _e);
  },
  t = function t(e, _t) {
    return {
      kind: "method",
      placement: "prototype",
      key: _t.key,
      descriptor: e
    };
  },
  o = function o(_ref) {
    var e = _ref.finisher,
      t = _ref.descriptor;
    return function (o, n) {
      var r;
      if (void 0 === n) {
        var _n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key,
          i = null != t ? {
            kind: "method",
            placement: "prototype",
            key: _n,
            descriptor: t(o.key)
          } : _objectSpread(_objectSpread({}, o), {}, {
            key: _n
          });
        return null != e && (i.finisher = function (t) {
          e(t, _n);
        }), i;
      }
      {
        var _r = o.constructor;
        void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(_r, n);
      }
    };
  };


/***/ }),

/***/ "Pk8u":
/*!**********************************************!*\
  !*** external "@microsoft/sp-lodash-subset" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_Pk8u__;

/***/ }),

/***/ "TpIk":
/*!****************************************!*\
  !*** ./node_modules/lit/decorators.js ***!
  \****************************************/
/*! exports provided: customElement, property, state, eventOptions, query, queryAll, queryAsync, queryAssignedElements, queryAssignedNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "uw6D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__["customElement"]; });

/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "FhDR");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"]; });

/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "w0Ul");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "state", function() { return _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__["state"]; });

/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "VkTL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__["eventOptions"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "JQ8u");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__["query"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "e1JD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__["queryAll"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "/AwM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__["queryAsync"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "JBoQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAssignedElements", function() { return _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__["queryAssignedElements"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "qZmm");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__["queryAssignedNodes"]; });











/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "UxF6":
/*!**************************************************************!*\
  !*** ./lib/webparts/helloWorld/HelloWorldWebPart.module.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./HelloWorldWebPart.module.css */ "mqC6");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "VkTL":
/*!************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/event-options.js ***!
  \************************************************************************/
/*! exports provided: eventOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return e; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "LYib");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    finisher: function finisher(r, t) {
      Object.assign(r.prototype[t], e);
    }
  });
}


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "d/EL":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual, _$LH, html, noChange, nothing, render, svg, LitElement, UpdatingElement, _$LE, isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "CGGc");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "AaG5");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "CQbg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["ReactiveElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["_$LH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["LitElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LE", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["_$LE"]; });

/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "oR0b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__["isServer"]; });






/***/ }),

/***/ "e1JD":
/*!********************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-all.js ***!
  \********************************************************************/
/*! exports provided: queryAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return e; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "LYib");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    descriptor: function descriptor(r) {
      return {
        get: function get() {
          var r, o;
          return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
        },
        enumerable: !0,
        configurable: !0
      };
    }
  });
}


/***/ }),

/***/ "hI9z":
/*!*******************************************!*\
  !*** external "HelloWorldWebPartStrings" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_hI9z__;

/***/ }),

/***/ "lYr8":
/*!******************************************************************!*\
  !*** ./lib/webparts/helloWorld/HelloWorldWebPart.module.scss.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./HelloWorldWebPart.module.css */ "UxF6");
var styles = {
  helloWorld: 'helloWorld_2364925d',
  teams: 'teams_2364925d',
  welcome: 'welcome_2364925d',
  welcomeImage: 'welcomeImage_2364925d',
  formUserJffp: 'formUserJffp_2364925d'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */

/***/ }),

/***/ "mqC6":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/helloWorld/HelloWorldWebPart.module.css ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".helloWorld_2364925d{color:\"[theme:bodyText, default: #323130]\";color:var(--bodyText);overflow:hidden;padding:1em}.helloWorld_2364925d.teams_2364925d{font-family:Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif}.welcome_2364925d{margin-bottom:1rem;text-align:center}.welcomeImage_2364925d{max-width:420px;width:100%}.formUserJffp_2364925d{--body-padding:3rem 5rem 3rem 5rem;--body-bg:\"[theme:bodyBackground, default: #ffffff]\";--body-bg:var(--bodyBackground);--body-color:\"[theme:bodyText, default: #323130]\";--body-color:var(--bodyText);--body-border:1px solid \"[theme:bodyDivider, default: #323130]\";--body-border:1px solid var(--bodyDivider);--body-border-radius:0.1rem;--button-bg:\"[theme:buttonBackground, default: #ffffff]\";--button-bg:var(--buttonBackground);--button-color:\"[theme:buttonText, default: #323130]\";--button-color:var(--buttonText);--button-border:1px solid \"[theme:buttonBorder, default: #323130]\";--button-border:1px solid var(--buttonBorder);--button-border-radius:0.1rem;--button-hover-color:\"[theme:buttonBackgroundHovered, default: #00a2ed]\";--button-hover-color:var(--buttonBackgroundHovered)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "oR0b":
/*!********************************************!*\
  !*** ./node_modules/lit-html/is-server.js ***!
  \********************************************/
/*! exports provided: isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return o; });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var o = !1;


/***/ }),

/***/ "qZmm":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************/
/*! exports provided: queryAssignedNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return o; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "LYib");
/* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-assigned-elements.js */ "JBoQ");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o(o, n, r) {
  var l,
    s = o;
  return "object" == _typeof(o) ? (s = o.slot, l = o) : l = {
    flatten: n
  }, r ? Object(_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__["queryAssignedElements"])({
    slot: s,
    flatten: n,
    selector: r
  }) : Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    descriptor: function descriptor(e) {
      return {
        get: function get() {
          var e, t;
          var o = "slot" + (s ? "[name=".concat(s, "]") : ":not([name])"),
            n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
          return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
        },
        enumerable: !0,
        configurable: !0
      };
    }
  });
}


/***/ }),

/***/ "uw6D":
/*!*************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/custom-element.js ***!
  \*************************************************************************/
/*! exports provided: customElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return e; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var e = function e(_e) {
  return function (n) {
    return "function" == typeof n ? function (e, n) {
      return customElements.define(e, n), n;
    }(_e, n) : function (e, n) {
      var t = n.kind,
        s = n.elements;
      return {
        kind: t,
        elements: s,
        finisher: function finisher(n) {
          customElements.define(e, n);
        }
      };
    }(_e, n);
  };
};


/***/ }),

/***/ "vicT":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var g;

// This works in non-strict mode
g = function () {
  return this;
}();
try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "w0Ul":
/*!****************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/state.js ***!
  \****************************************************************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return t; });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "FhDR");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t(t) {
  return Object(_property_js__WEBPACK_IMPORTED_MODULE_0__["property"])(_objectSpread(_objectSpread({}, t), {}, {
    state: !0
  }));
}


/***/ }),

/***/ "xMn6":
/*!*****************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function now() {
  return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
  var start = now();
  func();
  var end = now();
  _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
  var state = _root.__themeState__ || {
    theme: undefined,
    lastStyleElement: undefined,
    registeredStyles: []
  };
  if (!state.runState) {
    state = Object.assign(Object.assign({}, state), {
      perf: {
        count: 0,
        duration: 0
      },
      runState: {
        flushTimer: 0,
        mode: 0 /* Mode.sync */,
        buffer: []
      }
    });
  }
  if (!state.registeredThemableStyles) {
    state = Object.assign(Object.assign({}, state), {
      registeredThemableStyles: []
    });
  }
  _root.__themeState__ = state;
  return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles) {
  var loadAsync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  measure(function () {
    var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
    var _themeState$runState = _themeState.runState,
      mode = _themeState$runState.mode,
      buffer = _themeState$runState.buffer,
      flushTimer = _themeState$runState.flushTimer;
    if (loadAsync || mode === 1 /* Mode.async */) {
      buffer.push(styleParts);
      if (!flushTimer) {
        _themeState.runState.flushTimer = asyncLoadStyles();
      }
    } else {
      applyThemableStyles(styleParts);
    }
  });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
  _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
  _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
  measure(function () {
    var styleArrays = _themeState.runState.buffer.slice();
    _themeState.runState.buffer = [];
    var mergedStyleArray = [].concat.apply([], styleArrays);
    if (mergedStyleArray.length > 0) {
      applyThemableStyles(mergedStyleArray);
    }
  });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
  return setTimeout(function () {
    _themeState.runState.flushTimer = 0;
    flush();
  }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
  if (_themeState.loadStyles) {
    _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
  } else {
    registerStyles(stylesArray);
  }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
  _themeState.theme = theme;
  // reload styles.
  reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  if (option === 3 /* ClearStyleOptions.all */ || option === 2 /* ClearStyleOptions.onlyNonThemable */) {
    clearStylesInternal(_themeState.registeredStyles);
    _themeState.registeredStyles = [];
  }
  if (option === 3 /* ClearStyleOptions.all */ || option === 1 /* ClearStyleOptions.onlyThemable */) {
    clearStylesInternal(_themeState.registeredThemableStyles);
    _themeState.registeredThemableStyles = [];
  }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
  records.forEach(function (styleRecord) {
    var styleElement = styleRecord && styleRecord.styleElement;
    if (styleElement && styleElement.parentElement) {
      styleElement.parentElement.removeChild(styleElement);
    }
  });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
  if (_themeState.theme) {
    var themableStyles = [];
    var _iterator = _createForOfIteratorHelper(_themeState.registeredThemableStyles),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var styleRecord = _step.value;
        themableStyles.push(styleRecord.themableStyle);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (themableStyles.length > 0) {
      clearStyles(1 /* ClearStyleOptions.onlyThemable */);
      applyThemableStyles([].concat.apply([], themableStyles));
    }
  }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
  if (styles) {
    styles = resolveThemableArray(splitStyles(styles)).styleString;
  }
  return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
  var theme = _themeState.theme;
  var themable = false;
  // Resolve the array of theming instructions to an array of strings.
  // Then join the array to produce the final CSS string.
  var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
    var themeSlot = currentValue.theme;
    if (themeSlot) {
      themable = true;
      // A theming annotation. Resolve it.
      var themedValue = theme ? theme[themeSlot] : undefined;
      var defaultValue = currentValue.defaultValue || 'inherit';
      // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
      // Allow the themedValue to be undefined to explicitly request the default value.
      if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
        console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
      }
      return themedValue || defaultValue;
    } else {
      // A non-themable string. Preserve it.
      return currentValue.rawString;
    }
  });
  return {
    styleString: resolvedArray.join(''),
    themable: themable
  };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
  var result = [];
  if (styles) {
    var pos = 0; // Current position in styles.
    var tokenMatch;
    while (tokenMatch = _themeTokenRegex.exec(styles)) {
      var matchIndex = tokenMatch.index;
      if (matchIndex > pos) {
        result.push({
          rawString: styles.substring(pos, matchIndex)
        });
      }
      result.push({
        theme: tokenMatch[1],
        defaultValue: tokenMatch[2] // May be undefined
      });
      // index of the first character after the current match
      pos = _themeTokenRegex.lastIndex;
    }
    // Push the rest of the string after the last match.
    result.push({
      rawString: styles.substring(pos)
    });
  }
  return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
  if (typeof document === 'undefined') {
    return;
  }
  var head = document.getElementsByTagName('head')[0];
  var styleElement = document.createElement('style');
  var _resolveThemableArray = resolveThemableArray(styleArray),
    styleString = _resolveThemableArray.styleString,
    themable = _resolveThemableArray.themable;
  styleElement.setAttribute('data-load-themed-styles', 'true');
  if (_styleNonce) {
    styleElement.setAttribute('nonce', _styleNonce);
  }
  styleElement.appendChild(document.createTextNode(styleString));
  _themeState.perf.count++;
  head.appendChild(styleElement);
  var ev = document.createEvent('HTMLEvents');
  ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
  ev.args = {
    newStyle: styleElement
  };
  document.dispatchEvent(ev);
  var record = {
    styleElement: styleElement,
    themableStyle: styleArray
  };
  if (themable) {
    _themeState.registeredThemableStyles.push(record);
  } else {
    _themeState.registeredStyles.push(record);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../sp-build-web/node_modules/webpack/buildin/global.js */ "vicT")))

/***/ }),

/***/ "z6Ln":
/*!**********************************************************!*\
  !*** ./lib/webparts/helloWorld/assets/welcome-light.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "welcome-light_1eaf582a9b78272e22113e1e733138b8.png";

/***/ })

/******/ })});;
//# sourceMappingURL=hello-world-web-part.js.map