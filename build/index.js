#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.arguments('<word>').action(function (word) {
  winston.log('word: %s'.green, word);
}).parse(process.argv);
//# sourceMappingURL=index.js.map
