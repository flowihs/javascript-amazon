let cart = [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,

    },

    {
        productId: '3ebe75dc-64d2-4137-8860-1f5a963e534b',
        quantity: 2,

    }
]

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

  function removeFromCart (productId) {
    const newCart = []

    newCart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem)
        }
    })

    cart = newCart
  }

  export {addToCart, cart, removeFromCart}