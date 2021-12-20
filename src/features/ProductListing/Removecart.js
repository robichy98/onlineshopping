import React from 'react'

const Removecart = props => (
  <button onClick={() => props.removeFromCart(props.cartItem)}>
    Remove item
  </button>
)

export default Removecart