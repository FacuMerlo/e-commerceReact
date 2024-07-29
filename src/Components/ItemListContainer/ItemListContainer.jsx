import React, { useState, useEffect } from 'react'
import { getProdc } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const { cat } = useParams()

  useEffect(() => {
    if (cat) {
      getProdc()
        .then(res => setProductos(res.filter(e => e.categoria === cat)))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    } else {
      getProdc()
        .then(res => setProductos(res))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }
  }, [cat])


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
    <div className='ItemListContainer'>
      {
        productos.length > 0 &&
        <ItemList productos={ productos } />
      }

    </div>
  )
}

export default ItemListContainer
