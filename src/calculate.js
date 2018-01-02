import { equals } from './compare'

export const calcItemPrice = (bPrice, markup, quantity) => {
  return (bPrice + Math.round(bPrice * markup * .01)) * quantity;
}

// With respect to BasePrices.json, the Big O efficiency is:
export const parseBasePrice = (basePrices, item) => {
  const options = Object.keys(item.options);
  let baseItems = basePrices.filter(currEntry => item['product-type'] === currEntry['product-type']) // O(n)
  options.map(key => { // O(1)
    baseItems = baseItems.filter(currEntry=> equals(currEntry.options[key], item.options[key])) // O(n)
  })
  return (baseItems.length === 1) ? 
    calcItemPrice(baseItems[0]['base-price'], item['artist-markup'], item.quantity) : 0 // O(1)
}

export const cartTotal = (cart, basePrices) => {
  return cart.reduce((subtotal, currItem) => subtotal + parseBasePrice(basePrices, currItem),
  0);
}
