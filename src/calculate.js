import { equals } from './compare'
import _ from 'lodash'

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

export const getSubtotals = (cart, basePrices) => {
  return cart.map(currItem => {
      return [
        currItem['product-type'],
        parseBasePrice(basePrices, currItem),
        currItem['quantity']
      ]
  })
}

export const cartTotal = (cart, basePrices, discountPrices) => {
  let subtotals = getSubtotals(cart, basePrices)
  let groups = _.groupBy(subtotals, item => item[0])
  const groupKeys = Object.keys(groups)
  return groupKeys.map(key => {
    const product = groups[key]
    return product.reduce((prodObject, prod) => {
      if (prodObject[prod[0]] === undefined) {
        return Object.assign({
          type: prod[0],
          subtotal: prod[1],
          count: prod[2]
        }, prodObject)
      }
      if (prodObject.type !== undefined) {
        console.log("exists!")
        return Object.assign({
          type: prod[0],
          subtotal: prod[1] + prodObject.subtotal,
          count: prod[2] + prodObject.count,
        }, prodObject)
      }
    }, {})
  })
}
