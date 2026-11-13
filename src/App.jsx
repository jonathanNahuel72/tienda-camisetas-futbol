import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenidos a Camisetas Store! Encontrá la camiseta de tu equipo." />
      <section className="detail-section">
        <h2>Producto destacado</h2>
        <ItemDetailContainer productId="argentina-retro-1986" />
      </section>
    </>
  )
}

export default App
