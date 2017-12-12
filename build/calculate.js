"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var calcPrice = function calcPrice(bPrice, markup, quantity) {
  return (bPrice + Math.round(bPrice * markup)) * quantity;
};

exports.default = calcPrice;
//# sourceMappingURL=calculate.js.map
