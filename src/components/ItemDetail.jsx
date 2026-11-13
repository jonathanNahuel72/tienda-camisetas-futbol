import { useState } from 'react'
import { getCategoryName } from '../data/categories'
import formatPrice from '../utils/formatPrice'
import ItemCount from './ItemCount'
import './ItemDetail.css'

function ItemDetail({ product }) {
  const { title, category, description, price, stock, image, season, sizes } = product
  const [addedQuantity, setAddedQuantity] = useState(0)

  return (
    <article className="item-detail">
      <div className="item-detail-image">
        <img src={image} alt={title} />
      </div>

      <div className="item-detail-info">
        <span className="item-detail-category">{getCategoryName(category)}</span>
        <h2 className="item-detail-title">{title}</h2>
        <p className="item-detail-price">{formatPrice(price)}</p>
        <p className="item-detail-description">{description}</p>

        <dl className="item-detail-data">
          <div>
            <dt>Temporada</dt>
            <dd>{season}</dd>
          </div>
          <div>
            <dt>Talles</dt>
            <dd>{sizes.join(' · ')}</dd>
          </div>
          <div>
            <dt>Stock</dt>
            <dd>{stock > 0 ? `${stock} unidades` : 'Agotado'}</dd>
          </div>
        </dl>

        <ItemCount stock={stock} onAdd={setAddedQuantity} />

        {addedQuantity > 0 && (
          <p className="item-detail-added">
            Elegiste {addedQuantity} {addedQuantity === 1 ? 'unidad' : 'unidades'}. El carrito se conecta en la próxima entrega.
          </p>
        )}
      </div>
    </article>
  )
}

export default ItemDetail
