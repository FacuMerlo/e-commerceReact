import React from 'react'

const ItemDetail = ({ producto }) => {
    const { nombre, imagen, descripcion, precio, id } = producto
    return (
        <div>
            <h2 >{ nombre }</h2>
            <img src={ imagen } alt={ `Foto de ${nombre}` } />
            <p>{ descripcion }</p>
            <p >${ precio }</p>
        </div>
    )
}

export default ItemDetail
