'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var Point = (function () {
	function Point() {
		var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
		var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		_classCallCheck(this, Point);

		_Object$assign(this, { x: x, y: y });
	}

	_createClass(Point, [{
		key: 'toString',
		value: function toString() {
			return '(${this.x},${this.y})';
		}
	}]);

	return Point;
})();

exports['default'] = Point;
module.exports = exports['default'];