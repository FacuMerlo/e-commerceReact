import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='cart-container'>
                <h3 className='cart-frase'>CARRITO VACIO, AGREGA TUS PRODUCTOS...</h3>
                <Link className='sinTextDeco boton-cart-msj' to='/'>IR AL INICIO</Link>
            </div>
        )
    }

    return (
        <>
            <div>
                <div className='cartListItem'>
                    { cart.length > 0 &&
                        cart.map(e => {
                            return (
                                <CartItem className='CartItemList' key={ e.id } producto={ e } />
                            )
                        })
                    }
                </div >
                <div className='botonesCart'>
                    <button className='bttVaciar' onClick={ () => setCart([]) }>VACIAR CARRITO</button>
                    <Link className='sinTextDeco bttFinalizar' to='/checkout'>FINALIZAR COMPRA</Link>
                </div>
            </div>
        </>
    )
}

export default Cart