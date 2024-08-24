import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const { cat } = useParams()

  useEffect(() => {
    if (cat) {
      const productosPorCat = query(collection(db, "productos"), where('categoria', '==', cat))
      getDocs(productosPorCat).then(snapshot => {
        const dataProductos = snapshot.docs.map(doc => {
          const conId = doc.data()
          return { id: doc.id, ...conId }
        })
        setProductos(dataProductos)
      }).finally(() => setLoading(false))
    } else {
      const productosRef = collection(db, "productos")
      getDocs(productosRef).then(snapshot => {
        const dataProductos = snapshot.docs.map(doc => {
          const conId = doc.data()
          return { id: doc.id, ...conId }
        })
        setProductos(dataProductos)
      }).finally(() => setLoading(false))
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
