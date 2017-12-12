import { equals } from './compare'

const calcItemPrice = (bPrice, markup, quantity) => {
  console.log('Calculating a price...')
  console.log(`bPrice: ${bPrice}\n`.green);
  console.log(`markup: ${markup}\n`.red);
  console.log(`quantity: ${quantity}\n`.blue);
  return (bPrice + Math.round(bPrice * (markup * .01))) * quantity;
}

const parseBasePrice = (basePrices, currItem) => {
  const keys = Object.keys(currItem.options);
  let baseItems = basePrices
  keys.map(key => {
    baseItems = baseItems.filter(item => equals(item.options[key], currItem.key))
  })
  return (baseItems.length === 1) ? 
    calcItemPrice(baseItems[0]['base-price'], currItem['artist-markup'], currItem.quantity) : 0
}

export const cartTotal = (cart, basePrices) => {
  return cart.reduce((subtotal, currItem) => subtotal + parseBasePrice(basePrices, currItem),
  0);
}