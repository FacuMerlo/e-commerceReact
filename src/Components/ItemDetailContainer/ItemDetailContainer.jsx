import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const { id } = useParams()

    useEffect(() => {
        const productoRef = doc(db, "productos", id)

        getDoc(productoRef).then(snapshot => {
            const dataProducto = snapshot.data()
            const productoListo = { ...dataProducto, id: snapshot.id }
            setProducto(productoListo)
        }).finally(setLoading(false))
    }, [])

    if (loading) {
        return (
            <h2 className='loading-message'>Cargando...</h2>
        )
    }

    if (error) {
        return (
            <h2 className='error-message'>{ error }</h2>
        )
    }

    return (
        <div>
            <ItemDetail producto={ producto } />
        </div>
    )
}

export default ItemDetailContainer
