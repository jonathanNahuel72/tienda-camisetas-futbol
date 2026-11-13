import ItemCount from './ItemCount'
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  return (
    <main className="item-list-container">
      <h2>{greeting}</h2>
      <section className="item-count-demo">
        <p>Probá el contador (stock de ejemplo: 5 unidades)</p>
        <ItemCount stock={5} />
      </section>
    </main>
  )
}

export default ItemListContainer
