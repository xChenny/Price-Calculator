import { equals } from './compare'

export const calcItemPrice = (bPrice, markup, quantity) => {
  return (bPrice + Math.round(bPrice * markup * .01)) * quantity;
}

// With respect to BasePrices.json, the Big O efficiency is:
export const parseBasePrice = (basePrices, currItem) => {
  const options = Object.keys(currItem.options);
  let baseItems = basePrices.filter(item => currItem['product-type'] === item['product-type']) // O(n)
  options.map(key => { // O(1)
    baseItems = baseItems.filter(item => equals(item.options[key], currItem.options[key])) // O(n)
  })
  return (baseItems.length === 1) ? 
    calcItemPrice(baseItems[0]['base-price'], currItem['artist-markup'], currItem.quantity) : 0 // O(1)
}

export const joinAndFilter = (json1, json2) => {
  const combinedJson = Object.assign({}, json1, json2)
  const cart = combinedJson.filter(item => typeof item.quantity != 'undefined')
  return cart.reduce((subtotal, merchItem) => subtotal + calcItemPrice())
}

export const cartTotal = (cart, basePrices) => {
  return cart.reduce((subtotal, currItem) => subtotal + parseBasePrice(basePrices, currItem),
  0);
}