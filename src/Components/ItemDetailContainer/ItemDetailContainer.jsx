import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getOneProd } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const { id } = useParams()

    useEffect(() => {
        getOneProd(id)
            .then(res => setProducto(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
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
