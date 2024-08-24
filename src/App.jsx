import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './context/cartContext'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/categoria/:cat' element={ <ItemListContainer /> } />
            <Route path='/detalle/:id' element={ <ItemDetailContainer /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/checkout' element={ <Checkout /> } />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
