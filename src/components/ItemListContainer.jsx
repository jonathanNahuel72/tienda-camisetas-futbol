import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../data/products'
import { getCategoryName } from '../data/categories'
import ItemList from './ItemList'
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  const { id: categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true)
      const data = await getProducts(categoryId)
      setItems(data)
      setLoading(false)
    }

    loadProducts()
  }, [categoryId])

  const title = categoryId ? getCategoryName(categoryId) : greeting

  return (
    <main className="item-list-container">
      <h2>{title}</h2>
      {loading && <p className="loading">Cargando productos...</p>}
      {!loading && items.length === 0 && <p className="loading">No hay productos en esta categoría.</p>}
      {!loading && items.length > 0 && <ItemList products={items} />}
    </main>
  )
}

export default ItemListContainer
