#!/usr/bin/env node
'use strict';

require('babel-polyfill');

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _calculate = require('./calculate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.arguments('<cartFile> <basePricesFile>').usage('<cartFile> <basePricesFile>').action(function (cartFile, basePricesFile) {
  var cart = JSON.parse(_fs2.default.readFileSync(cartFile, 'utf8'));
  var basePrices = JSON.parse(_fs2.default.readFileSync(basePricesFile, 'utf8'));
  console.log((0, _calculate.cartTotal)(cart, basePrices));
}).parse(process.argv);
//# sourceMappingURL=index.js.map
