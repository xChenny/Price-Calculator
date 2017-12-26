import * as calculate from '../calculate';
import fs from 'fs'

describe('Testing calculate.js module', () => {

  const cartFiles = fs.readdirSync('./assets/cart', 'utf8').map(file => {
    return [file, JSON.parse(fs.readFileSync(`./assets/cart/${file}`, 'utf8'))]
  })
  const basePriceFile = fs.readdirSync('./assets/basePrice', 'utf8').map(file => {
    return JSON.parse(fs.readFileSync(`./assets/basePrice/${file}`, 'utf8'))
  })

  it('Calculates price for an entry in cart', () => {
    const bp = 1000;
    const mu = 20;
    const quant = 2;
    expect(calculate.calcItemPrice(bp, mu, quant)).toEqual(2400);
  })

  cartFiles.forEach((file, index) => {
    it('Testing all cart Files', () => {
      (function(file) {
        const price = parseInt(file[0].match(/\d+/)[0], 10);
        expect(calculate.cartTotal(file[1], basePriceFile[0])).toBe(price)
      })(file)
    })
  })

  // No testing conformation of the item to schemas required.
  // therefore, they are omitted

})

