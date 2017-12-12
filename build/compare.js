'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var equals = exports.equals = function equals(large, small) {
  if (typeof large === 'undefined') return true;
  if (Array.isArray(large)) {
    return large.includes(small);
  } else {
    return large === small;
  }
};
//# sourceMappingURL=compare.js.map
