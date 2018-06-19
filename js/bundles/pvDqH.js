var pageComponent =
webpackJsonppageComponent([5],{

/***/ 292:
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

var _step_5Soy = __webpack_require__(293);

var _step_5Soy2 = _interopRequireDefault(_step_5Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pvDqH = function (_Component) {
  _inherits(pvDqH, _Component);

  function pvDqH() {
    _classCallCheck(this, pvDqH);

    return _possibleConstructorReturn(this, (pvDqH.__proto__ || Object.getPrototypeOf(pvDqH)).apply(this, arguments));
  }

  return pvDqH;
}(_metalComponent2.default);

;

_metalSoy2.default.register(pvDqH, _step_5Soy2.default);

exports.default = pvDqH;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.pvDqH = undefined;

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

  // This file was automatically generated from step_5.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace pvDqH.
   * @public
   */

  goog.module('pvDqH.incrementaldom');

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
    var param1026 = function param1026() {
      ie_open('h2');
      var dyn38 = opt_data.page.title;
      if (typeof dyn38 == 'function') dyn38();else if (dyn38 != null) itext(dyn38);
      ie_close('h2');
      ie_open('p');
      itext('A ');
      ie_open('strong');
      itext('step');
      ie_close('strong');
      itext(' is the basic component of an ');
      ie_open('strong');
      itext('Atom');
      ie_close('strong');
      itext('. Here is how we chain the steps into an Atom.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(step1)\n    .then(step2)\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('We have different kinds of steps in Atom.apex.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Simple Step');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('A simple step is one that contains a compute. The only job for a simple step is to execute that compute.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(new Atom.SimpleStep(new CustomCompute()))\n    .then(new CustomCompute()) // equivalent to above\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Composite Step');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('A composite step is one that can contain multiple steps. It executes the children steps one by one.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(\n        new Atom.CompositeStep()\n            .then(...)\n    )\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('ForEach Step');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('A ForEachStep is one that executes the \'for-each\' loop with the given step. It looks up for the collection data with the given name from the Atom state, and creates a new looping item before invoking the looping step.');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, Object> initialData = new Map<String, Object>{ \'items\' => new List<Object>{ ... } };\nnew Atom(initialData)\n    .then(new Atom.ForEachStep(\'item\', \'items\', new CustomStep()))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Range Step');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('A RangeStep is one that executes the given step with a range of numbers.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(new Atom.RangeStep(\'n\', 1, 10, new CustomStep()))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Repeat Step');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('A RepeatStep is one that repeats the given step until N times.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(new Atom.RepeatStep(10, new CustomStep()))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1026 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'pvDqH.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var pvDqH = function (_Component) {
  _inherits(pvDqH, _Component);

  function pvDqH() {
    _classCallCheck(this, pvDqH);

    return _possibleConstructorReturn(this, (pvDqH.__proto__ || Object.getPrototypeOf(pvDqH)).apply(this, arguments));
  }

  return pvDqH;
}(_metalComponent2.default);

_metalSoy2.default.register(pvDqH, templates);
exports.pvDqH = pvDqH;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[292]);