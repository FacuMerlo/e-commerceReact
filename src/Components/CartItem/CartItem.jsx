import React, { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../../context/cartContext'
import ItemCount from '../../ItemCount/ItemCount'

const CartItem = ({ producto }) => {

    const e = producto

    const { removeItem, addToCart } = useContext(CartContext)


    return (
        <div className='card-item'>
            <h2 className='nombreItem'>{ e.nombre }</h2>
            <img className='imgItem' src={ e.imagen } alt={ `Foto de ${e.nombre}` } />
            <p className='precioItem'>${ e.precio }</p>
            <p>AGREGASTE { e.cantidad } UNIDADES.</p>
            <p>SUBTOTAL:  { e.precio * e.cantidad }</p>
            <ItemCount handleAddToCart={ addToCart } prod={ producto } buttonText="AGREGAR/QUITAR" />
            <button className='botonItem' onClick={ () => removeItem(e.id) }>ELIMINAR PRODUCTO</button>
        </div>
    )
}

export default CartItem