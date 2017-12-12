'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartTotal = undefined;

var _compare = require('./compare');

var calcItemPrice = function calcItemPrice(bPrice, markup, quantity) {
  console.log('Calculating a price...');
  console.log(('bPrice: ' + bPrice + '\n').green);
  console.log(('markup: ' + markup + '\n').red);
  console.log(('quantity: ' + quantity + '\n').blue);
  return bPrice + Math.round(bPrice * markup * .01) * quantity;
};

var parseBasePrice = function parseBasePrice(basePrices, currItem) {
  var keys = Object.keys(currItem.options);
  var baseItems = basePrices.filter(function (item) {
    return currItem['product-type'] === item['product-type'];
  });
  keys.map(function (key) {
    console.log('filtering via\n');
    console.log(key + '\n'.cyan);
    console.log(baseItems);
    baseItems = baseItems.filter(function (item) {
      return (0, _compare.equals)(item.options[key], currItem.options[key]);
    });
    console.log(baseItems);
  });
  return baseItems.length === 1 ? calcItemPrice(baseItems[0]['base-price'], currItem['artist-markup'], currItem.quantity) : 0;
};

var cartTotal = exports.cartTotal = function cartTotal(cart, basePrices) {
  return cart.reduce(function (subtotal, currItem) {
    return subtotal + parseBasePrice(basePrices, currItem);
  }, 0);
};
//# sourceMappingURL=calculate.js.map
