"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cartTotal=exports.parseBasePrice=exports.calcItemPrice=void 0;var _compare=require("./compare"),calcItemPrice=exports.calcItemPrice=function(e,r,t){return(e+Math.round(e*r*.01))*t},parseBasePrice=exports.parseBasePrice=function(e,r){var t=Object.keys(r.options),c=e.filter(function(e){return r["product-type"]===e["product-type"]});return t.map(function(e){c=c.filter(function(t){return(0,_compare.equals)(t.options[e],r.options[e])})}),1===c.length?calcItemPrice(c[0]["base-price"],r["artist-markup"],r.quantity):0},cartTotal=exports.cartTotal=function(e,r){return e.reduce(function(e,t){return e+parseBasePrice(r,t)},0)};