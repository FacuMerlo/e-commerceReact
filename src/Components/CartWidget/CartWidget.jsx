import React, { useContext } from 'react'
import { TiShoppingCart } from "react-icons/ti"
import { CartContext } from '../../context/cartContext'
import './CartWidget.css'

const CartWidget = () => {
  const { itemQuantity } = useContext(CartContext)

  return (
    <div>
      <span className='numbCart'>{ itemQuantity() }</span>
      <TiShoppingCart className='shoppingCart' />
    </div>
  )
}

export default CartWidget