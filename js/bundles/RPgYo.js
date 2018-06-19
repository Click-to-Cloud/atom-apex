var pageComponent =
webpackJsonppageComponent([15],{

/***/ 278:
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

var _indexSoy = __webpack_require__(279);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RPgYo = function (_Component) {
  _inherits(RPgYo, _Component);

  function RPgYo() {
    _classCallCheck(this, RPgYo);

    return _possibleConstructorReturn(this, (RPgYo.__proto__ || Object.getPrototypeOf(RPgYo)).apply(this, arguments));
  }

  return RPgYo;
}(_metalComponent2.default);

;

_metalSoy2.default.register(RPgYo, _indexSoy2.default);

exports.default = RPgYo;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.RPgYo = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace RPgYo.
   * @public
   */

  goog.module('RPgYo.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param905 = function param905() {
      ie_open('h6');
      var dyn32 = opt_data.page.description;
      if (typeof dyn32 == 'function') dyn32();else if (dyn32 != null) itext(dyn32);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is a Step?');
      ie_close('h2');
      ie_open('p');
      itext('A step is the basic component of an Atom.');
      ie_close('p');
      ie_open('p');
      itext('Atom.apex supports many types of steps.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Simple Step');
      ie_close('li');
      ie_open('li');
      itext('Composite Step');
      ie_close('li');
      ie_open('li');
      itext('ForEach Step');
      ie_close('li');
      ie_open('li');
      itext('Range Step');
      ie_close('li');
      ie_open('li');
      itext('Repeat Step');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Simple Step');
      ie_close('h2');
      ie_open('p');
      itext('A simple step is one that contains a compute. The only job for a simple step is to execute that compute.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(new Atom.SimpleStep(new CustomCompute()))\n    .then(new CustomCompute()) // equivalent to above\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Constructor');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('SimpleStep(Atom.Compute)');
      ie_close('td');
      ie_open('td');
      itext('Create a simple step from the compute');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Composite Step');
      ie_close('h2');
      ie_open('p');
      itext('A composite step is one that can contain multiple steps. It executes the children steps one by one.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(\n        new Atom.CompositeStep()\n            .then(...)\n    )\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Constructor');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('CompositeStep()');
      ie_close('td');
      ie_open('td');
      itext('Create an empty composite step');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('CompositeStep then(Atom.Step)');
      ie_close('td');
      ie_open('td');
      itext('Chain the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('CompositeStep then(Atom.Compute)');
      ie_close('td');
      ie_open('td');
      itext('Chain the next compute as the step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('CompositeStep then(Func)');
      ie_close('td');
      ie_open('td');
      itext('Chain the next Func as the step');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('ForEach Step');
      ie_close('h2');
      ie_open('p');
      itext('A ForEachStep is one that executes the \'for-each\' loop with the given step. It looks up for the collection data with the given name from the Atom state, and creates a new looping item before invoking the looping step.');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, Object> initialData = new Map<String, Object>{ \'items\' => new List<Object>{ ... } };\nnew Atom(initialData)\n    .then(new Atom.ForEachStep(\'item\', \'items\', new CustomStep()))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Constructor');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('ForEachStep(String, String, List<Object>, Atom.Step)');
      ie_close('td');
      ie_open('td');
      itext('Create a ForEachStep with item key, values key, values and the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ForEachStep(String, String, Atom.Step)');
      ie_close('td');
      ie_open('td');
      itext('Create a ForEachStep with item key, values key and the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ForEachStep(String, List<Object>, Atom.Step)');
      ie_close('td');
      ie_open('td');
      itext('Create a ForEachStep with item key, values and the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ForEachStep(String, String, Atom.Compute)');
      ie_close('td');
      ie_open('td');
      itext('Create a ForEachStep with item key, values key and compute as the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ForEachStep(String, List<Object>, Atom.Compute)');
      ie_close('td');
      ie_open('td');
      itext('Create a ForEachStep with item key, values and compute as the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ForEachStep(String, String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Create a ForEachStep with item key, values key and Func as the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('ForEachStep(String, List<Object>, Func)');
      ie_close('td');
      ie_open('td');
      itext('Create a ForEachStep with item key, values and Func as the next step');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Range Step');
      ie_close('h2');
      ie_open('p');
      itext('A RangeStep is one that executes the given step with a range of numbers.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(new Atom.RangeStep(\'n\', 1, 10, new CustomStep()))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Constructor');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('RangeStep(String, Integer, Intger, Atom.Step)');
      ie_close('td');
      ie_open('td');
      itext('Create a RangeStep with the item key, min value, max value and the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('RangeStep(String, Integer, Intger, Atom.Compute)');
      ie_close('td');
      ie_open('td');
      itext('Create a RangeStep with the item key, min value, max value and compute as the  next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('RangeStep(String, Integer, Intger, Func)');
      ie_close('td');
      ie_open('td');
      itext('Create a RangeStep with the item key, min value, max value and Func as the  next step');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Repeat Step');
      ie_close('h2');
      ie_open('p');
      itext('A RepeatStep is one that repeats the given step until N times.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(new Atom.RepeatStep(10, new CustomStep()))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Constructor');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('RepeatStep(String, Integer, Atom.Step)');
      ie_close('td');
      ie_open('td');
      itext('Create a RepeatStep with the item key, count and the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('RepeatStep(String, Integer, Atom.Compute)');
      ie_close('td');
      ie_open('td');
      itext('Create a RepeatStep with the item key, count and compute as the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('RepeatStep(String, Integer, Func)');
      ie_close('td');
      ie_open('td');
      itext('Create a RepeatStep with the item key, count and Func as the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('RepeatStep(Integer, Atom.Step)');
      ie_close('td');
      ie_open('td');
      itext('Create a RepeatStep with count and the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('RepeatStep(Integer, Atom.Compute)');
      ie_close('td');
      ie_open('td');
      itext('Create a RepeatStep with count and compute as the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('RepeatStep(Integer, Func)');
      ie_close('td');
      ie_open('td');
      itext('Create a RepeatStep with count and Func as the next step');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param905 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'RPgYo.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var RPgYo = function (_Component) {
  _inherits(RPgYo, _Component);

  function RPgYo() {
    _classCallCheck(this, RPgYo);

    return _possibleConstructorReturn(this, (RPgYo.__proto__ || Object.getPrototypeOf(RPgYo)).apply(this, arguments));
  }

  return RPgYo;
}(_metalComponent2.default);

_metalSoy2.default.register(RPgYo, templates);
exports.RPgYo = RPgYo;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[278]);