import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import getProductById from '../services/getProductById'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const { id: productId } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false

    const loadProduct = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await getProductById(productId)
        if (!ignore) setProduct(data)
      } catch (err) {
        if (!ignore) {
          setProduct(null)
          setError(err.message)
        }
      } finally {
        if (!ignore) setLoading(false)
      }
    }

    loadProduct()

    return () => {
      ignore = true
    }
  }, [productId])

  if (loading) return <p className="detail-message">Cargando...</p>
  if (error) {
    return (
      <div className="detail-message">
        <p className="detail-error">{error}</p>
        <Link to="/">Volver a la tienda</Link>
      </div>
    )
  }

  return (
    <main className="detail-page">
      <ItemDetail product={product} />
    </main>
  )
}

export default ItemDetailContainer
