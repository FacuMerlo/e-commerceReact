import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
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
        </div>
    );
}

export default ItemDetail



