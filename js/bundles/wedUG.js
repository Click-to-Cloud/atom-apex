var pageComponent =
webpackJsonppageComponent([19],{

/***/ 270:
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

var _indexSoy = __webpack_require__(271);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wedUG = function (_Component) {
  _inherits(wedUG, _Component);

  function wedUG() {
    _classCallCheck(this, wedUG);

    return _possibleConstructorReturn(this, (wedUG.__proto__ || Object.getPrototypeOf(wedUG)).apply(this, arguments));
  }

  return wedUG;
}(_metalComponent2.default);

;

_metalSoy2.default.register(wedUG, _indexSoy2.default);

exports.default = wedUG;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.wedUG = undefined;

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
   * @fileoverview Templates in namespace wedUG.
   * @public
   */

  goog.module('wedUG.incrementaldom');

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
    var param341 = function param341() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is an Atom?');
      ie_close('h2');
      ie_open('p');
      itext('An atom is originally an unsplittable unit. In Atom.apex, we refer it as a piece of business logic that gets executed even when governor limits are reached.');
      ie_close('p');
      ie_open('p');
      itext('Usually when we reach the governor limits(heap size, cpu time, query, ...), it is because we are repeating a resource-consuming action. Everything works when there is reasonable repetition. But the unexpected data may cause the repetition count to grow out of control. By then, the governor limits are reached, exceptions are thrown, business logic is aborted and you are left in a mess(especially when you interact with external services).');
      ie_close('p');
      ie_open('p');
      itext('What we have dreamed is that if the governor limits are reached, Salesforce does not throw exceptions directly, and instead it will schedule our remaining logic to the next available time spot to continue.');
      ie_close('p');
      ie_open('p');
      itext('Sadly this has always been a dream and Salesforce aborts your execution brutally in this case(roll back your transaction as well, which is a good thing).');
      ie_close('p');
      ie_open('p');
      itext('This is how we got our inspiration. We want to ');
      ie_open('strong');
      itext('split');
      ie_close('strong');
      itext(' our business logic into ');
      ie_open('strong');
      itext('steps');
      ie_close('strong');
      itext(', so that each step can be executed sequentially and if resources are running out, we have a chance to save our progress and then continue the remaining steps.');
      ie_close('p');
      ie_open('p');
      itext('We call the whole process an ');
      ie_open('strong');
      itext('Atom');
      ie_close('strong');
      itext(', which means that your business logic is guaranteed to be executed even if some governor limits are reached, so that it will not be broken.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('How is Atom implemented?');
      ie_close('h2');
      ie_open('p');
      itext('In essence, an Atom is just a chain of queueable jobs in Apex.');
      ie_close('p');
      ie_open('p');
      itext('We split an Atom instance into steps, and each step is executed one after another. Every time a step is executed, Atom.apex will check if the governor limits are reached. If so, Atom.apex will stop executing, save the current data and start a new queueable job to continue the remaining code.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('How should Atom be used?');
      ie_close('h2');
      ie_open('p');
      itext('Atom.apex should be used when there is the need to handle scalable code execution that may break the governor limits.');
      ie_close('p');
      ie_open('p');
      itext('So it should be used at the entry point of the execution context. Also it uses chained queueable jobs to execute the code, which means that it cannot be used in a synchronous context.');
      ie_close('p');
      ie_open('p');
      itext('Here is the outline of the usage.');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, Object> initialData = new Map<String, Object>{ ... };\nnew Atom(initialData)\n    .then(new CustomBeforeCompute())\n    .then(new Atom.ForEachStep(\'item\', \'items\', new CustomCompute()))\n    .then(new CustomAfterCompute())\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Constructors');
      ie_close('h2');
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
      itext('Atom()');
      ie_close('td');
      ie_open('td');
      itext('Create an empty Atom');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Atom(Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Create an Atom with initial data');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Methods');
      ie_close('h2');
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
      itext('Atom.State getState()');
      ie_close('td');
      ie_open('td');
      itext('Get the Atom state');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Integer getMaxInterruptions()');
      ie_close('td');
      ie_open('td');
      itext('Get the max interruptions');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Atom setMaxInterruptions(Integer)');
      ie_close('td');
      ie_open('td');
      itext('Set the max interruptions');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Atom then(Atom.Step)');
      ie_close('td');
      ie_open('td');
      itext('Chain the next step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Atom then(Atom.Compute)');
      ie_close('td');
      ie_open('td');
      itext('Chain the next compute in a step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Atom then(Func f)');
      ie_close('td');
      ie_open('td');
      itext('Chain the next Func in a step');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Atom fork()');
      ie_close('td');
      ie_open('td');
      itext('Execute the Atom');
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
    $templateAlias1(soy.$$assignDefaults({ content: param341 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'wedUG.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var wedUG = function (_Component) {
  _inherits(wedUG, _Component);

  function wedUG() {
    _classCallCheck(this, wedUG);

    return _possibleConstructorReturn(this, (wedUG.__proto__ || Object.getPrototypeOf(wedUG)).apply(this, arguments));
  }

  return wedUG;
}(_metalComponent2.default);

_metalSoy2.default.register(wedUG, templates);
exports.wedUG = wedUG;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);