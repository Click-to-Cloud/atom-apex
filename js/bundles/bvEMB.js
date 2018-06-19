var pageComponent =
webpackJsonppageComponent([3],{

/***/ 296:
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

var _step_7Soy = __webpack_require__(297);

var _step_7Soy2 = _interopRequireDefault(_step_7Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var bvEMB = function (_Component) {
  _inherits(bvEMB, _Component);

  function bvEMB() {
    _classCallCheck(this, bvEMB);

    return _possibleConstructorReturn(this, (bvEMB.__proto__ || Object.getPrototypeOf(bvEMB)).apply(this, arguments));
  }

  return bvEMB;
}(_metalComponent2.default);

;

_metalSoy2.default.register(bvEMB, _step_7Soy2.default);

exports.default = bvEMB;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.bvEMB = undefined;

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

  // This file was automatically generated from step_7.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace bvEMB.
   * @public
   */

  goog.module('bvEMB.incrementaldom');

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
    var param1083 = function param1083() {
      ie_open('h2');
      var dyn40 = opt_data.page.title;
      if (typeof dyn40 == 'function') dyn40();else if (dyn40 != null) itext(dyn40);
      ie_close('h2');
      ie_open('p');
      itext('In Atom.apex, when the governor limits are reached, we try to create a new queueable job to execute the remaining logic. The attempt to switch to a new queueable job is called an interruption.');
      ie_close('p');
      ie_open('p');
      itext('Most of the time, we do not need to request for interruptions. But if we do, we can use this.');
      ie_close('p');
      $templateAlias2({ code: 'public class CustomCompute extends Atom.Compute {\n    public override void execute(Atom.State s) {\n        s.setInterrupted(true);\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Also notice that new queueable jobs will not fix all the governor limit issues. So we have a limit for the interruptions. When an Atom tries the limit number of interruptions and still fails to resolve the resource issue, an exception will be thrown to indicate that.');
      ie_close('p');
      ie_open('p');
      itext('You can set the interruption limit.');
      ie_close('p');
      $templateAlias2({ code: 'new Atom()\n    .setMaxInterruptions(20)\n    .then(...)\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1083 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'bvEMB.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var bvEMB = function (_Component) {
  _inherits(bvEMB, _Component);

  function bvEMB() {
    _classCallCheck(this, bvEMB);

    return _possibleConstructorReturn(this, (bvEMB.__proto__ || Object.getPrototypeOf(bvEMB)).apply(this, arguments));
  }

  return bvEMB;
}(_metalComponent2.default);

_metalSoy2.default.register(bvEMB, templates);
exports.bvEMB = bvEMB;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[296]);