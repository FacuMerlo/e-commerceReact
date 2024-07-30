import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

export const Item = ({ e }) => {
    return (
        <div className='card-producto'>
            <h2 className='nombreCard'>{ e.nombre }</h2>
            <img className='imgCard' src={ e.imagen } alt={ `Foto de ${e.nombre}` } />
            <p className='precioCard'>${ e.precio }</p>
            <Link className='botonCard' to={ `/detalle/${e.id}` }>VER PRODUCTO</Link>
        </div>
    )
}