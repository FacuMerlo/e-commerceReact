import React, { useState } from 'react'
import './ItemCount.css'


const ItemCount = ({ handleAddToCart, prod, buttonText = "AGREGAR AL CARRITO" }) => {

    const [count, setCount] = useState(1)

    return (
        <div className="itemC">
            <button className="btn" onClick={ () => setCount(count + 1) }>+</button>
            <span className="display">{ count }</span>
            <button className="btn" onClick={ () => setCount(count - 1) }>-</button>
            <button className="btn add" onClick={ () => handleAddToCart(prod, count) }>{ buttonText }</button>
        </div>
    )
}

export default ItemCount
