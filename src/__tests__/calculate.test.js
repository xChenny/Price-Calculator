import { calcItemPrice, cartTotal, parseBasePrice } from '../calculate'

describe('Testing Calculation functions', () => {
  it('Calculates price for an entry in cart', () => {
    const basePrice = 1000
    const markup = 20
    const quantity = 2
    expect(calcItemPrice(basePrice, markup, quantity)).toEqual(2400)
  })
})