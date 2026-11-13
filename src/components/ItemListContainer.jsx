import { useEffect, useState } from 'react'
import { getProducts } from '../data/products'
import ItemList from './ItemList'
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts()
      setItems(data)
      setLoading(false)
    }

    loadProducts()
  }, [])

  return (
    <main className="item-list-container">
      <h2>{greeting}</h2>
      {loading ? <p className="loading">Cargando productos...</p> : <ItemList products={items} />}
    </main>
  )
}

export default ItemListContainer
