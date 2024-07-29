import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/categoria/:cat' element={ <ItemListContainer /> } />
          <Route path='/detalle/:id' element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
