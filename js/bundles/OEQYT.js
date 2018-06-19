var pageComponent =
webpackJsonppageComponent([7],{

/***/ 288:
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

var _step_3Soy = __webpack_require__(289);

var _step_3Soy2 = _interopRequireDefault(_step_3Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OEQYT = function (_Component) {
  _inherits(OEQYT, _Component);

  function OEQYT() {
    _classCallCheck(this, OEQYT);

    return _possibleConstructorReturn(this, (OEQYT.__proto__ || Object.getPrototypeOf(OEQYT)).apply(this, arguments));
  }

  return OEQYT;
}(_metalComponent2.default);

;

_metalSoy2.default.register(OEQYT, _step_3Soy2.default);

exports.default = OEQYT;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.OEQYT = undefined;

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

  // This file was automatically generated from step_3.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace OEQYT.
   * @public
   */

  goog.module('OEQYT.incrementaldom');

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
    var param994 = function param994() {
      ie_open('h2');
      var dyn36 = opt_data.page.title;
      if (typeof dyn36 == 'function') dyn36();else if (dyn36 != null) itext(dyn36);
      ie_close('h2');
      ie_open('p');
      itext('We will have an overview of what Atom.apex looks like in action.');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, Object> initialData = new Map<String, Object>{ ... };\nnew Atom(initialData)\n    .then(new CustomBeforeCompute())\n    .then(new Atom.ForEachStep(\'item\', \'items\', new CustomCompute()))\n    .then(new CustomAfterCompute())\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we split our business logic into ');
      ie_open('code');
      itext('CustomBeforeCompute');
      ie_close('code');
      itext(', ');
      ie_open('code');
      itext('CustomCompute');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('CustomAfterCompute');
      ie_close('code');
      itext('. The Atom instance is created with the initial data, then it will execute the ');
      ie_open('code');
      itext('CustomBeforeCompute');
      ie_close('code');
      itext('. After that, it will do a \'for-each\' loop of CustomCompute over the data indexed by \'items\', and the looping item will be saved under the key of \'item\'. Finally it will do the ');
      ie_open('code');
      itext('CustomAfterCompute');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('All is not set off until the fork is invoked. During any step, if governor limits are reached, a new queueable job will be created to continue to run the remaining logic.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param994 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'OEQYT.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var OEQYT = function (_Component) {
  _inherits(OEQYT, _Component);

  function OEQYT() {
    _classCallCheck(this, OEQYT);

    return _possibleConstructorReturn(this, (OEQYT.__proto__ || Object.getPrototypeOf(OEQYT)).apply(this, arguments));
  }

  return OEQYT;
}(_metalComponent2.default);

_metalSoy2.default.register(OEQYT, templates);
exports.OEQYT = OEQYT;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[288]);