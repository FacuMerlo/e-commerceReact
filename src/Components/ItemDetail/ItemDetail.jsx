import React, { useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../../ItemCount/ItemCount'
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({ producto }) => {

    const { addToCart, isInCart, handleAddToCart } = useContext(CartContext)

    const { nombre, imagen, descripcion, precio, id } = producto
    return (
        <div className="item-detail">
            <h2 className="item-detail__title">{ nombre }</h2>
            <div className="item-detail__content">
                <img className="item-detail__image" src={ imagen } alt={ `Foto de ${nombre}` } />
                <div className="item-detail__info">
                    <p className="item-detail__price">${ precio }</p>
                    <p className="item-detail__description">DETALLES: { descripcion }</p>
                </div>
            </div>

            {
                isInCart(producto.id) ?
                    <Link className='sinTextDeco item-detail__button' to='/cart'>IR AL CARRITO</Link>
                    :
                    <ItemCount handleAddToCart={ addToCart } prod={ producto } />
            }
        </div>
    );
}

export default ItemDetail



