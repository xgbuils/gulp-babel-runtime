'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireWildcard = require('babel-runtime/helpers/interop-require-wildcard')['default'];

var _Point = require('./Point');

var Point = _interopRequireWildcard(_Point);

var Line = function Line() {
    var a = arguments.length <= 0 || arguments[0] === undefined ? new Point(0, 0) : arguments[0];
    var b = arguments.length <= 1 || arguments[1] === undefined ? new Point(2, 4) : arguments[1];

    _classCallCheck(this, Line);

    _Object$assign(this, a, b);
};