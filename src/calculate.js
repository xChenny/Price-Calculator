const calcPrice = (bPrice, markup, quantity) => {
  return (bPrice + Math.round(bPrice * markup)) * quantity
}

export default calcPrice