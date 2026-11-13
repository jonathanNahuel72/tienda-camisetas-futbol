import { useEffect, useState } from 'react'
import getProductById from '../services/getProductById'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer({ productId }) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getProductById(productId)
        setProduct(data)
      } catch (err) {
        setProduct(null)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [productId])

  if (loading) return <p className="detail-message">Cargando...</p>
  if (error) return <p className="detail-message detail-error">{error}</p>

  return <ItemDetail product={product} />
}

export default ItemDetailContainer
