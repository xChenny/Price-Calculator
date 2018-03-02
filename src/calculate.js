import { equals } from './compare'

/**
 * Applies formula to obtain price per item 
 * @param bPrice base price
 * @param markup artist's markup
 * @param quantity # of items
 */
export const calcItemPrice = (bPrice, markup, quantity) => {
  return (bPrice + Math.round(bPrice * markup * .01)) * quantity;
}

/**
 * Gets all products with the same product-type as the item we're interested in
 * @param product item that we're interested in
 * @param prodList list of all items in the catalogue
 */
const getSimilarProducts = (product, prodList) => {
  return prodList.filter(curr => product['product-type'] === curr['product-type'])
}

/**
 * parses the basePrices object to calculate the price of `item`
 * @param basePrices the object of properties and prices
 * @param item the item we're interested in knowing the price for
 */
export const parseBasePrice = (basePrices, item) => {
  const options = Object.keys(item.options);
  let itemsOfInterest = getSimilarProducts(item, basePrices)
  options.map(option => { 
    itemsOfInterest = itemsOfInterest.filter(currItem => equals(currItem.options[option], item.options[option]))
  })
  switch(itemsOfInterest.length) {
    case 0:
      console.log("This item is not in the basePrices file:")
      throw `${item}`
    case 1:
      return calcItemPrice(itemsOfInterest[0]['base-price'], item['artist-markup'], item.quantity) 
    default:
      console.log("Please remove these duplicates found in the basePrices file:")
      throw `${JSON.stringify(itemsOfInterest, null, 2)}`
  }
}

/**
 * Returns the total for all items in the cart
 * @param cart json object of the cart 
 * @param basePrices json object of the catalogue of items
 */
export const cartTotal = (cart, basePrices) => {
  return cart.reduce((subtotal, currItem) => subtotal + parseBasePrice(basePrices, currItem),
  0);
}
