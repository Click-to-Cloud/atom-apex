var pageComponent =
webpackJsonppageComponent([2],{

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _step_8Soy = __webpack_require__(299);

var _step_8Soy2 = _interopRequireDefault(_step_8Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var dvrXy = function (_Component) {
  _inherits(dvrXy, _Component);

  function dvrXy() {
    _classCallCheck(this, dvrXy);

    return _possibleConstructorReturn(this, (dvrXy.__proto__ || Object.getPrototypeOf(dvrXy)).apply(this, arguments));
  }

  return dvrXy;
}(_metalComponent2.default);

;

_metalSoy2.default.register(dvrXy, _step_8Soy2.default);

exports.default = dvrXy;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.dvrXy = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from step_8.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace dvrXy.
   * @public
   */

  goog.module('dvrXy.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param1104 = function param1104() {
      ie_open('h2');
      var dyn41 = opt_data.page.title;
      if (typeof dyn41 == 'function') dyn41();else if (dyn41 != null) itext(dyn41);
      ie_close('h2');
      ie_open('p');
      itext('Atom.apex embraces functional style programming. You can pass in a Func to be used as a Compute or a Step.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(R.debug.apply(\'Running\'))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Atom.apex has a helper Func to get values from the state, provide them to the given Func and apply the computed value back to the state.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(Atom.F.compute.apply(\'count\', R.inc, \'count\'))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The code above will get the number indexed by ');
      ie_open('code');
      itext('count');
      ie_close('code');
      itext(', increment it and set it back to ');
      ie_open('code');
      itext('count');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('If a Func returns ');
      ie_open('code');
      itext('true');
      ie_close('code');
      itext(' without being set to the state, the interrupted flag will be marked.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(Atom.F.compute.apply(R.equals.apply(1), \'count\'))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This code will request an interruption if the count equals with 1.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1104 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'dvrXy.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var dvrXy = function (_Component) {
  _inherits(dvrXy, _Component);

  function dvrXy() {
    _classCallCheck(this, dvrXy);

    return _possibleConstructorReturn(this, (dvrXy.__proto__ || Object.getPrototypeOf(dvrXy)).apply(this, arguments));
  }

  return dvrXy;
}(_metalComponent2.default);

_metalSoy2.default.register(dvrXy, templates);
exports.dvrXy = dvrXy;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[298]);