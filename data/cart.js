const cart = []

function addToCart (productId) {
    let matchingItem
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem
      }
    })
  
    if (matchingItem) {
      matchingItem.quantity += 1
    } 
  
    if (!matchingItem) {
      cart.push({
        productId: productId,
        quantity: 1,
      })
    }
  }

  export {addToCart, cart}