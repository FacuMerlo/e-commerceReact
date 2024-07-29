import React from 'react'
import './ItemList.css'
import { Item } from '../Item/Item'

const ItemList = ({ productos }) => {

    return (
        <div className='lista'>
            { productos.map((e) => {
                return (
                    <Item key={ e.id } e={ e } />
                )
            }) }
        </div>
    )
}

export default ItemList