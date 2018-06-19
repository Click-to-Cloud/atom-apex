var pageComponent =
webpackJsonppageComponent([1],{

/***/ 300:
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

var _step_9Soy = __webpack_require__(301);

var _step_9Soy2 = _interopRequireDefault(_step_9Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VLUUu = function (_Component) {
  _inherits(VLUUu, _Component);

  function VLUUu() {
    _classCallCheck(this, VLUUu);

    return _possibleConstructorReturn(this, (VLUUu.__proto__ || Object.getPrototypeOf(VLUUu)).apply(this, arguments));
  }

  return VLUUu;
}(_metalComponent2.default);

;

_metalSoy2.default.register(VLUUu, _step_9Soy2.default);

exports.default = VLUUu;

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.VLUUu = undefined;

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

  // This file was automatically generated from step_9.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace VLUUu.
   * @public
   */

  goog.module('VLUUu.incrementaldom');

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
    var param1130 = function param1130() {
      ie_open('h2');
      var dyn42 = opt_data.page.title;
      if (typeof dyn42 == 'function') dyn42();else if (dyn42 != null) itext(dyn42);
      ie_close('h2');
      ie_open('p');
      itext('When the governor limits are reached is determined by monitors.');
      ie_close('p');
      ie_open('p');
      itext('Atom.apex has the following built-in monitors.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Name');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('AggregateQueriesMonitor');
      ie_close('td');
      ie_open('td');
      itext('Aggregate query limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('CalloutsMonitor');
      ie_close('td');
      ie_open('td');
      itext('Call out limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('CpuTimeMonitor');
      ie_close('td');
      ie_open('td');
      itext('Cpu time limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DMLRowsMonitor');
      ie_close('td');
      ie_open('td');
      itext('DML rows limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DMLStatementsMonitor');
      ie_close('td');
      ie_open('td');
      itext('DML statement limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('EmailInvocationsMonitor');
      ie_close('td');
      ie_open('td');
      itext('Email invocation limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('FutureCallsMonitor');
      ie_close('td');
      ie_open('td');
      itext('Future call limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('HeapSizeMonitor');
      ie_close('td');
      ie_open('td');
      itext('Heap size limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MobilePushApexCallsMonitor');
      ie_close('td');
      ie_open('td');
      itext('Mobile push apex call limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('QueriesMonitor');
      ie_close('td');
      ie_open('td');
      itext('Query limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('QueryLocatorRowsMonitor');
      ie_close('td');
      ie_open('td');
      itext('Query locator row limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('QueryRowsMonitor');
      ie_close('td');
      ie_open('td');
      itext('Query row limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('QueueableJobsMonitor');
      ie_close('td');
      ie_open('td');
      itext('Queueable job limit');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('SoslQueriesMonitor');
      ie_close('td');
      ie_open('td');
      itext('SOSL query limit');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Most of the time, you don\'t need to care about monitors. However, you could still provide your own monitor.');
      ie_close('p');
      $templateAlias2({ code: 'public class CustomMonitor extends Atom.DefaultMonitor {\n    public CustomMonitor() {\n        super(\'Custom limit is reached\');\n    }\n\n    public override Integer getCurrentValue(Atom.State s) {\n        return (Integer)s.getData(\'count\');\n    }\n\n    public override Integer getMaxValue(Atom.State s) {\n        return 1000;\n    }\n}\n\nAtom.registerMonitor(new CustomMonitor());', mode: 'java' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param1130 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'VLUUu.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var VLUUu = function (_Component) {
  _inherits(VLUUu, _Component);

  function VLUUu() {
    _classCallCheck(this, VLUUu);

    return _possibleConstructorReturn(this, (VLUUu.__proto__ || Object.getPrototypeOf(VLUUu)).apply(this, arguments));
  }

  return VLUUu;
}(_metalComponent2.default);

_metalSoy2.default.register(VLUUu, templates);
exports.VLUUu = VLUUu;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[300]);