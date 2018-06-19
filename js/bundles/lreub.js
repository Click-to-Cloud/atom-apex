var pageComponent =
webpackJsonppageComponent([17],{

/***/ 274:
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

var _methodsSoy = __webpack_require__(275);

var _methodsSoy2 = _interopRequireDefault(_methodsSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lreub = function (_Component) {
  _inherits(lreub, _Component);

  function lreub() {
    _classCallCheck(this, lreub);

    return _possibleConstructorReturn(this, (lreub.__proto__ || Object.getPrototypeOf(lreub)).apply(this, arguments));
  }

  return lreub;
}(_metalComponent2.default);

;

_metalSoy2.default.register(lreub, _methodsSoy2.default);

exports.default = lreub;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.lreub = undefined;

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

  // This file was automatically generated from methods.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace lreub.
   * @public
   */

  goog.module('lreub.incrementaldom');

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
    var param373 = function param373() {
      ie_open('h6');
      var dyn30 = opt_data.page.description;
      if (typeof dyn30 == 'function') dyn30();else if (dyn30 != null) itext(dyn30);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('adjust');
      ie_close('h2');
      ie_open('p');
      itext('Update the element at index with the function.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).adjust(R.add.apply(1), 1).debug(); // (1, 3, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('all');
      ie_close('h2');
      ie_open('p');
      itext('Check if all elements match the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).all(R.equals.apply(1)).debug(); // false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('append');
      ie_close('h2');
      ie_open('p');
      itext('Append the element to the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).append(4).debug(); // (1, 2, 3, 4)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('assoc');
      ie_close('h2');
      ie_open('p');
      itext('Associate the value to the key.');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'value\').assoc(\'name\', \'newValue\').debug(); // {name=newValue}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('capitalize');
      ie_close('h2');
      ie_open('p');
      itext('Return a new string with the first letter in uppercase.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'cat\').capitalize().debug(); // Cat', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('clamp');
      ie_close('h2');
      ie_open('p');
      itext('Return a value that is limited between the min and the max.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(4).clamp(1, 3).debug(); // 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('compact');
      ie_close('h2');
      ie_open('p');
      itext('Remove null values from the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(\'a\', null, 0).compact().debug();\n// (a, 0)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('concat');
      ie_close('h2');
      ie_open('p');
      itext('Concatenate the other.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).concat(R.with(4, 5, 6)).debug();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('contains');
      ie_close('h2');
      ie_open('p');
      itext('Check if the target is contained.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).contains(2).debug(); // true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('containsBy');
      ie_close('h2');
      ie_open('p');
      itext('Check if the target is contained by the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).containsBy(R.equals, 2).debug(); // true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('containsKey');
      ie_close('h2');
      ie_open('p');
      itext('Check if the key is contained.');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'test\').containsKey(\'name\').debug(); // true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '12');
      ie_open('h2');
      itext('countBy');
      ie_close('h2');
      ie_open('p');
      itext('Get a result of count mapped by the key.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 2).countBy(R.identity).debug();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '13');
      ie_open('h2');
      itext('debug');
      ie_close('h2');
      ie_open('p');
      itext('Print debug information.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2).debug(); // (1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '14');
      ie_open('h2');
      itext('defaultTo');
      ie_close('h2');
      ie_open('p');
      itext('Get the default value.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(null).defaultTo(3).debug(); // 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '15');
      ie_open('h2');
      itext('difference');
      ie_close('h2');
      ie_open('p');
      itext('Do a difference with the other object.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).difference(R.with(2, 3, 4)).debug(); // (1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '16');
      ie_open('h2');
      itext('dissoc');
      ie_close('h2');
      ie_open('p');
      itext('Remove the value mapped by the key.');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'value\').dissoc(\'name\').debug(); // {}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '17');
      ie_open('h2');
      itext('doClone');
      ie_close('h2');
      ie_open('p');
      itext('Get a clone.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).doClone().debug(); // (1, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '18');
      ie_open('h2');
      itext('doInsert');
      ie_close('h2');
      ie_open('p');
      itext('Insert the element at the index.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).doInsert(1, \'x\').debug(); // (1, x, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '19');
      ie_open('h2');
      itext('doInsertAll');
      ie_close('h2');
      ie_open('p');
      itext('Insert all the elements at the index.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).doInsertAll(1, R.with(\'x\', \'y\')).debug(); // (1, x, y, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '20');
      ie_open('h2');
      itext('doJoin');
      ie_close('h2');
      ie_open('p');
      itext('Join the elements with the separator.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).doJoin(\'-\').debug(); // 1-2-3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '21');
      ie_open('h2');
      itext('doMap');
      ie_close('h2');
      ie_open('p');
      itext('Map a function over the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).doMap(R.add.apply(1)).debug(); // (2, 3, 4)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '22');
      ie_open('h2');
      itext('doMerge');
      ie_close('h2');
      ie_open('p');
      itext('Merge the source.');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'test\').doMerge(R.withObj(\'name\', \'newTest\')).debug();\n// {name=newTest}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '23');
      ie_open('h2');
      itext('doUpdate');
      ie_close('h2');
      ie_open('p');
      itext('Update the element at the specified index.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).doUpdate(1, 3).debug(); // (1, 3, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '24');
      ie_open('h2');
      itext('drop');
      ie_close('h2');
      ie_open('p');
      itext('Drop the first N elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).drop(2).debug(); // (3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '25');
      ie_open('h2');
      itext('dropRight');
      ie_close('h2');
      ie_open('p');
      itext('Drop the first N elements from right.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).dropRight(2).debug(); // (1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '26');
      ie_open('h2');
      itext('dropRightWhile');
      ie_close('h2');
      ie_open('p');
      itext('Drop from right until the predicate is not satisfied.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).dropRightWhile(R.equals.apply(1)).debug(); // (1, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '27');
      ie_open('h2');
      itext('dropWhile');
      ie_close('h2');
      ie_open('p');
      itext('Drop until the predicate is not satisfied.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).dropWhile(R.equals.apply(1)).debug(); // (2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '28');
      ie_open('h2');
      itext('endsWith');
      ie_close('h2');
      ie_open('p');
      itext('Check if the elements end with the value.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'abc\').endsWith(\'bc\').debug(); // true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '29');
      ie_open('h2');
      itext('every');
      ie_close('h2');
      ie_open('p');
      itext('Check if every element matches the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).every(R.equals.apply(1)).debug(); // false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '30');
      ie_open('h2');
      itext('evolve');
      ie_close('h2');
      ie_open('p');
      itext('Apply the function to the value mapped by the same key and calculate the evolved object.');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'test\').evolve(new Map<String, Object>{ \'name\' => R.append.apply(\'more\') }).debug();\n// {name=testmore}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '31');
      ie_open('h2');
      itext('filter');
      ie_close('h2');
      ie_open('p');
      itext('Call the function to filter the elements of instance R.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).filter(R.equals.apply(2)).debug(); // (2)\nR.with(new Account(Description = \'desc\'), new Account()).filter(\'Description\').debug(); // (Account:{Description=desc})\nR.with(new Account(Description = \'desc\'), new Account()).filter(\'Description\', \'desc\').debug(); // (Account:{Description=desc})\nR.with(new Account(Description = \'desc\'), new Account()).filter(new Map<String, Object>{ \'Description\' => \'desc\' }).debug();\n// (Account:{Description=desc})', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '32');
      ie_open('h2');
      itext('find');
      ie_close('h2');
      ie_open('p');
      itext('Find the first element that satisfies the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).find(R.equals.apply(2)).debug(); // 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '33');
      ie_open('h2');
      itext('findIndex');
      ie_close('h2');
      ie_open('p');
      itext('Find the index of the first element that matches the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).findIndex(R.equals.apply(2)).debug(); // 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '34');
      ie_open('h2');
      itext('findLast');
      ie_close('h2');
      ie_open('p');
      itext('Find the first element that satisfies the predicate from last.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).findLast(R.equals.apply(2)).debug(); // 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '35');
      ie_open('h2');
      itext('findLastIndex');
      ie_close('h2');
      ie_open('p');
      itext('Find the index of the first element that matches the predicate from last.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).findLastIndex(R.equals.apply(2)).debug(); // 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '36');
      ie_open('h2');
      itext('first');
      ie_close('h2');
      ie_open('p');
      itext('Get the first element.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).first().debug(); // 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '37');
      ie_open('h2');
      itext('flatten');
      ie_close('h2');
      ie_open('p');
      itext('Flatten the elements recursively.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, new List<Object>{ 2, new List<Object>{ 3 } }, 4).flatten().debug();\n// (1, 2, 3, 4)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '38');
      ie_open('h2');
      itext('forEach');
      ie_close('h2');
      ie_open('p');
      itext('Call the function to each element of instance R.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).forEach(R.debug);\n// 1\n// 2\n// 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '39');
      ie_open('h2');
      itext('fromPairs');
      ie_close('h2');
      ie_open('p');
      itext('Convert from a list of pairs to a map.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(new R.Pair(\'name\', \'test\')).fromPairs().debug();\n// {name=test}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '40');
      ie_open('h2');
      itext('groupBy');
      ie_close('h2');
      ie_open('p');
      itext('Get a result of count mapped by the key.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 2).countBy(R.identity).debug();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '41');
      ie_open('h2');
      itext('head');
      ie_close('h2');
      ie_open('p');
      itext('Get the first element.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).head().debug(); // 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '42');
      ie_open('h2');
      itext('indexBy');
      ie_close('h2');
      ie_open('p');
      itext('Get object indexed by the key.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 2).indexBy(R.identity).debug();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '43');
      ie_open('h2');
      itext('indexOf');
      ie_close('h2');
      ie_open('p');
      itext('Get the index of the target.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).indexOf(2).debug(); // 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '44');
      ie_open('h2');
      itext('init');
      ie_close('h2');
      ie_open('p');
      itext('Get the elements except the last.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).init().debug(); // (1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '45');
      ie_open('h2');
      itext('intersection');
      ie_close('h2');
      ie_open('p');
      itext('Do an intersection with the other object.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).intersection(R.with(2, 3, 4)).debug(); // (2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '46');
      ie_open('h2');
      itext('invert');
      ie_close('h2');
      ie_open('p');
      itext('Get an inverted map, values mapped by duplicate keys are put in a list.');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'test\').invert().debug();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '47');
      ie_open('h2');
      itext('invertObj');
      ie_close('h2');
      ie_open('p');
      itext('Get an inverted map.');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'test\').invertObj().debug();\n// {test=name}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '48');
      ie_open('h2');
      itext('isEmpty');
      ie_close('h2');
      ie_open('p');
      itext('Check if it is empty.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).isEmpty().debug(); // false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '49');
      ie_open('h2');
      itext('keys');
      ie_close('h2');
      ie_open('p');
      itext('Get the keys of the wrapped map.');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'test\').keys().debug();\n// {name}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '50');
      ie_open('h2');
      itext('last');
      ie_close('h2');
      ie_open('p');
      itext('Get the last element.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).last().debug(); // 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '51');
      ie_open('h2');
      itext('lastIndexOf');
      ie_close('h2');
      ie_open('p');
      itext('Get the index of the target from the last.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).lastIndexOf(2).debug(); // 1', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '52');
      ie_open('h2');
      itext('length');
      ie_close('h2');
      ie_open('p');
      itext('Get the length, same as size().');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).length().debug(); // 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '53');
      ie_open('h2');
      itext('match');
      ie_close('h2');
      ie_open('p');
      itext('Get a list of matched groups after doing a regex match.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'abc\').match(\'.*(a).*\').debug();\n// (abc, a)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '54');
      ie_open('h2');
      itext('none');
      ie_close('h2');
      ie_open('p');
      itext('Check if none of the elements matches the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).none(R.equals.apply(1)).debug(); // false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '55');
      ie_open('h2');
      itext('nth');
      ie_close('h2');
      ie_open('p');
      itext('Get the nth element.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).nth(1).debug(); // 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '56');
      ie_open('h2');
      itext('omit');
      ie_close('h2');
      ie_open('p');
      itext('Omit the values specified by the list of keys.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(new Account(FirstName=\'test\', Description=\'desc\')).omit(new List<String>{ \'Description\' }).debug();\n// {FirstName=test}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '57');
      ie_open('h2');
      itext('pad');
      ie_close('h2');
      ie_open('p');
      itext('Pad the string to the length.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'cat\').pad(5, \'*\').debug(); // *cat*', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '58');
      ie_open('h2');
      itext('padLeft');
      ie_close('h2');
      ie_open('p');
      itext('Pad the string to the length from the left.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'cat\').padLeft(5, \'*\').debug(); // **cat', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '59');
      ie_open('h2');
      itext('padRight');
      ie_close('h2');
      ie_open('p');
      itext('Pad the string to the length from the right.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'cat\').padRight(5, \'*\').debug(); // cat**', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '60');
      ie_open('h2');
      itext('partition');
      ie_close('h2');
      ie_open('p');
      itext('Create a paritioned pair using the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).partition(R.equals.apply(1)).debug();\n// Pair:[fst=(1), snd=(2, 3)]', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '61');
      ie_open('h2');
      itext('pick');
      ie_close('h2');
      ie_open('p');
      itext('Pick the values specified by the list of keys.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(new Account(FirstName=\'test\', Description=\'desc\')).pick(new List<String>{ \'Description\' }).debug();\n// {Description=desc}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '62');
      ie_open('h2');
      itext('pluck');
      ie_close('h2');
      ie_open('p');
      itext('Extract the field out of the object to a new list.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(new Account(Description=\'desc\')).pluck(\'Description\').debug();\n// (desc)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '63');
      ie_open('h2');
      itext('prepend');
      ie_close('h2');
      ie_open('p');
      itext('Prepend the element to the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).prepend(4).debug(); // (4, 1, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '64');
      ie_open('h2');
      itext('project');
      ie_close('h2');
      ie_open('p');
      itext('Project a list of objects using the list of fields.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(new Account(Description=\'desc\', FirstName=\'test\')).project(new List<String>{ \'Description\' }).debug();\n// ({Description=desc})', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '65');
      ie_open('h2');
      itext('reduce');
      ie_close('h2');
      ie_open('p');
      itext('Reduce over the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).reduce(R.add, 0).debug(); // 6', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '66');
      ie_open('h2');
      itext('reject');
      ie_close('h2');
      ie_open('p');
      itext('Reject the elements by checking with the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(new Account(Description = \'desc\'), new Account()).reject((Func)R.complement.run(R.has.apply(\'Description\'))).debug();\n// (Account:{Description=desc})\n\nR.with(new Account(Description = \'desc\'), new Account()).reject(\'Description\').debug();\n// (Account:{})\n\nR.with(new Account(Description = \'desc\'), new Account()).reject(\'Description\', \'desc\').debug();\n// (Account:{})\n\nR.with(new Account(Description = \'desc\'), new Account()).reject(new Map<String, Object>{ \'Description\' => \'desc\' }).debug();\n// (Account:{})', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '67');
      ie_open('h2');
      itext('remove');
      ie_close('h2');
      ie_open('p');
      itext('Remove elements starting at the index and specified by the count.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).remove(1, 3).debug();\n// (1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '68');
      ie_open('h2');
      itext('repeat');
      ie_close('h2');
      ie_open('p');
      itext('Create a list of elements by repeating the element.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'a\').repeat(3).debug(); // (a, a, a)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '69');
      ie_open('h2');
      itext('replace');
      ie_close('h2');
      ie_open('p');
      itext('Replace the string according to the pattern and replacement.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'I love cats\').replace(\'cat\', \'dog\').debug();\n// I love dogs', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '70');
      ie_open('h2');
      itext('replaceAll');
      ie_close('h2');
      ie_open('p');
      itext('Replace all the strings according to the pattern and replacement.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'I love cats\').replaceAll(\'cat\', \'dog\').debug();\n// I love dogs', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '71');
      ie_open('h2');
      itext('reverse');
      ie_close('h2');
      ie_open('p');
      itext('Reverse the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).reverse().debug(); // (3, 2, 1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '72');
      ie_open('h2');
      itext('sample');
      ie_close('h2');
      ie_open('p');
      itext('Get a random element.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).sample().debug(); // 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '73');
      ie_open('h2');
      itext('sampleSize');
      ie_close('h2');
      ie_open('p');
      itext('Get a list of random elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).sampleSize(2).debug(); // (3, 1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '74');
      ie_open('h2');
      itext('shuffle');
      ie_close('h2');
      ie_open('p');
      itext('Create a shuffled list of elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).shuffle().debug(); // (3, 1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '75');
      ie_open('h2');
      itext('size');
      ie_close('h2');
      ie_open('p');
      itext('Get the size, same as length().');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).size().debug(); // 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '76');
      ie_open('h2');
      itext('slice');
      ie_close('h2');
      ie_open('p');
      itext('Get a slice of the elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).slice(1, 2).debug(); // (2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '77');
      ie_open('h2');
      itext('some');
      ie_close('h2');
      ie_open('p');
      itext('Check if some elements match the predicate.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).some(R.equals.apply(1)).debug(); // true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '78');
      ie_open('h2');
      itext('sortBy');
      ie_close('h2');
      ie_open('p');
      itext('Sort the elements by the comparator.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(new Account(Description=\'abc\'), new Account(Description=\'def\')).sortBy((Func)R.descend.run(R.prop.apply(\'Description\'))).debug();\n// (Account:{Description=def}, Account:{Description=abc})', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '79');
      ie_open('h2');
      itext('sortDefault');
      ie_close('h2');
      ie_open('p');
      itext('Sort the elements by default.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(3, 2, 1).sortDefault().debug(); // (1, 2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '80');
      ie_open('h2');
      itext('split');
      ie_close('h2');
      ie_open('p');
      itext('Split the string by the separator.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'a/b/c\').split(\'/\').debug();\n// (a, b, c)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '81');
      ie_open('h2');
      itext('startsWith');
      ie_close('h2');
      ie_open('p');
      itext('Check if the elements start with the value.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).startsWith(new List<Integer>{ 1, 2 }).debug(); // true', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '82');
      ie_open('h2');
      itext('sum');
      ie_close('h2');
      ie_open('p');
      itext('Get the sum.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).sum().debug(); // 6', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '83');
      ie_open('h2');
      itext('tail');
      ie_close('h2');
      ie_open('p');
      itext('Get the elements except the first.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).tail().debug(); // (2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '84');
      ie_open('h2');
      itext('take');
      ie_close('h2');
      ie_open('p');
      itext('Take the first N elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).take(2).debug(); // (1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '85');
      ie_open('h2');
      itext('takeRight');
      ie_close('h2');
      ie_open('p');
      itext('Take the first N elements from right.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).takeRight(2).debug(); // (2, 3)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '86');
      ie_open('h2');
      itext('takeRightWhile');
      ie_close('h2');
      ie_open('p');
      itext('Take elements from right until the predicate is not satisfied.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).takeRightWhile(R.equals.apply(1)).debug(); // ()', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '87');
      ie_open('h2');
      itext('takeWhile');
      ie_close('h2');
      ie_open('p');
      itext('Take elements until the predicate is not satisfied.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).takeWhile(R.equals.apply(1)).debug(); // (1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '88');
      ie_open('h2');
      itext('test');
      ie_close('h2');
      ie_open('p');
      itext('Test the string according to the pattern.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'cat\').test(\'.*b.*\').debug(); // false', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '89');
      ie_open('h2');
      itext('toLower');
      ie_close('h2');
      ie_open('p');
      itext('Convert the string to lowercase.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'Cat\').toLower().debug(); // cat', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '90');
      ie_open('h2');
      itext('toPairs');
      ie_close('h2');
      ie_open('p');
      itext('Convert a map to a list of pairs.');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'test\').toPairs().debug();\n// (Pair:[fst=name, snd=test])', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '91');
      ie_open('h2');
      itext('toUpper');
      ie_close('h2');
      ie_open('p');
      itext('Convert the string to uppercase.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'cat\').toUpper().debug(); // CAT', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '92');
      ie_open('h2');
      itext('transform');
      ie_close('h2');
      ie_open('p');
      itext('Transform the wrapped value using the function.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).transform(R.size).debug(); // 3', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '93');
      ie_open('h2');
      itext('trim');
      ie_close('h2');
      ie_open('p');
      itext('Trim the string.');
      ie_close('p');
      $templateAlias2({ code: 'R.of(\'  a  \').trim().debug(); // a', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '94');
      ie_open('h2');
      itext('union');
      ie_close('h2');
      ie_open('p');
      itext('Do a union with the other object.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).union(R.with(2, 3, 4)).debug(); // (1, 2, 3, 4)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '95');
      ie_open('h2');
      itext('uniq');
      ie_close('h2');
      ie_open('p');
      itext('Return unique elements.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 2).uniq().debug(); // (1, 2)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '96');
      ie_open('h2');
      itext('unnest');
      ie_close('h2');
      ie_open('p');
      itext('Flatten the elements by one level.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, new List<Object>{ 2, 3 }, 4).unnest().debug();\n// (1, 2, 3, 4)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '97');
      ie_open('h2');
      itext('values');
      ie_close('h2');
      ie_open('p');
      itext('Get the values of the wrapped map.');
      ie_close('p');
      $templateAlias2({ code: 'R.withObj(\'name\', \'test\').values().debug();\n// (test)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '98');
      ie_open('h2');
      itext('without');
      ie_close('h2');
      ie_open('p');
      itext('Same as ');
      ie_open('code');
      itext('difference');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).without(R.with(2, 3, 4)).debug(); // (1)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '99');
      ie_open('h2');
      itext('xor');
      ie_close('h2');
      ie_open('p');
      itext('Do an xor with the other object.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(1, 2, 3).xor(R.with(2, 3, 4)).debug(); // (1, 4)', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '100');
      ie_open('h2');
      itext('zip');
      ie_close('h2');
      ie_open('p');
      itext('Create a zipped list of pairs according to the mList.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(\'a\', \'b\').zip(new List<Object>{ 1, 2 }).debug();\n// (Pair:[fst=1, snd=a], Pair:[fst=2, snd=b])', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '101');
      ie_open('h2');
      itext('zipObj');
      ie_close('h2');
      ie_open('p');
      itext('Create a zipped map according to the mList.');
      ie_close('p');
      $templateAlias2({ code: 'R.with(\'a\', \'b\').zipObj(new List<Object>{ 1, 2 }).debug();\n// {1=a, 2=b}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param373 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'lreub.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var lreub = function (_Component) {
  _inherits(lreub, _Component);

  function lreub() {
    _classCallCheck(this, lreub);

    return _possibleConstructorReturn(this, (lreub.__proto__ || Object.getPrototypeOf(lreub)).apply(this, arguments));
  }

  return lreub;
}(_metalComponent2.default);

_metalSoy2.default.register(lreub, templates);
exports.lreub = lreub;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[274]);