"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var equals = exports.equals = function equals(large, small) {
  if (Array.isArray(large)) {
    return large.includes(small);
  } else {
    return large === small;
  }
};
//# sourceMappingURL=compare.js.map
