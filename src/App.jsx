import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a ZonaGaming!" />
    </div>
  );
}

export default App
