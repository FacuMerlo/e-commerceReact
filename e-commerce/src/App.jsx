import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import  NavBar from './Components/NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Saludos a todos mis clientes!"/>
    </>
  )
}

export default App
