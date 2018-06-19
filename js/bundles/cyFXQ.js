var pageComponent =
webpackJsonppageComponent([20],{

/***/ 268:
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

var _computeSoy = __webpack_require__(269);

var _computeSoy2 = _interopRequireDefault(_computeSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cyFXQ = function (_Component) {
  _inherits(cyFXQ, _Component);

  function cyFXQ() {
    _classCallCheck(this, cyFXQ);

    return _possibleConstructorReturn(this, (cyFXQ.__proto__ || Object.getPrototypeOf(cyFXQ)).apply(this, arguments));
  }

  return cyFXQ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(cyFXQ, _computeSoy2.default);

exports.default = cyFXQ;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.cyFXQ = undefined;

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

  // This file was automatically generated from compute.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace cyFXQ.
   * @public
   */

  goog.module('cyFXQ.incrementaldom');

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
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is a Compute?');
      ie_close('h2');
      ie_open('p');
      itext('A compute is the basic unit of you business logic, the building blocks.');
      ie_close('p');
      ie_open('p');
      itext('Most of the time, you will group your code into computes and then chain them into Atoms.');
      ie_close('p');
      ie_open('p');
      itext('A compute should be planned carefully so that it runs within the governor limits. To make it simple, double check that no loops are used with a possible large dataset.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Custom Compute');
      ie_close('h2');
      ie_open('p');
      itext('You can create a custom compute.');
      ie_close('p');
      $templateAlias2({ code: 'public class CustomCompute extends Atom.Compute {\n    public override void execute(Atom.State s) {\n        Integer count = (Integer)s.getData(\'count\');\n        count += 1;\n        s.setData(\'count\', count);\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Bear in mind that computes run in queueable jobs, and they should interact only with Atom states.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Func Compute');
      ie_close('h2');
      ie_open('p');
      itext('Atom.apex offers ');
      ie_open('code');
      itext('FuncCompute');
      ie_close('code');
      itext(' to help wrap functions into computes.');
      ie_close('p');
      ie_open('p');
      itext('Here is an example:');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(new Atom.FuncCompute(R.debug.apply(\'test\')))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In fact, this is usually simplified into this:');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .then(R.debug.apply(\'test\'))\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'cyFXQ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var cyFXQ = function (_Component) {
  _inherits(cyFXQ, _Component);

  function cyFXQ() {
    _classCallCheck(this, cyFXQ);

    return _possibleConstructorReturn(this, (cyFXQ.__proto__ || Object.getPrototypeOf(cyFXQ)).apply(this, arguments));
  }

  return cyFXQ;
}(_metalComponent2.default);

_metalSoy2.default.register(cyFXQ, templates);
exports.cyFXQ = cyFXQ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);