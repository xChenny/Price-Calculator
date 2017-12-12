#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _calculate = require('./calculate');

var _calculate2 = _interopRequireDefault(_calculate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.arguments('<cart> <basePrices>').action(function (cart, basePrices) {}).parse(process.argv);
//# sourceMappingURL=index.js.map
