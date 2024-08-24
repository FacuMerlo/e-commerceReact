import React, { useContext, useState } from 'react'
import { db } from '../../services/firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import './Checkout.css'

const Checkout = () => {

    const [nombreP, setNombreP] = useState("")
    const [mail, setMail] = useState("")
    const [dir, setDir] = useState("")

    const [orden, setOrden] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { cart, setCart } = useContext(CartContext)

    const formatOrder = {
        cart: cart,
        nombreP: nombreP,
        mail,
        dir
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        const ordenRef = collection(db, "ordenes")
        const orderId = await addDoc(ordenRef, formatOrder)
        setCart([])
        setOrden(orderId.id)
        setIsSubmitting(false)
    }

    if (orden) {
        return (
            <div className='finishContainer'>
                <h3 className='finishFrase'>
                    <span className='spanFinish'>
                        OPERACION REALIZADA CON EXITO!
                    </span>
                    <h4 className='gracias'>GRACIAS POR COMPRAR EN EL POTRERO</h4>
                    <p className='idCompra'>EL ID DE TU COMPRA ES: { orden }</p>
                </h3>
                <Link className='sinTextDeco boton-cart-msj' to='/'>IR AL INICIO, SEGUIR COMPRANDO...</Link>
            </div>
        )
    }

    return (
        <div className='formContainer'>
            <form onSubmit={ (e) => handleSubmit(e) }>
                <h3 className='tituloForm'>INFORMACION PARA FINALIZAR LA COMPRA</h3>
                <p className='TextForm'>NOMBRE: </p>
                <input className='inputs' type="text" onChange={ (e) => setNombreP(e.target.value) } />
                <p className='TextForm'>MAIL: </p>
                <input className='inputs' type="email" onChange={ (e) => setMail(e.target.value) } />
                <p className='TextForm'>DIRECCIÓN: </p>
                <input className='inputs' type="text" onChange={ (e) => setDir(e.target.value) } />
                <button className='inputsButton' type='submit'>{ isSubmitting ? "CARGANDO..." : "CONFIRMAR COMPRA" }</button>
            </form>
        </div>
    )
}

export default Checkout