import React from 'react'

const Addcart = props => (
  <button onClick={() => props.addToCart(props.product)}>
    Add this item ({(props.cartItem && props.cartItem.quantity) || 0})
  </button>
)

export default Addcart