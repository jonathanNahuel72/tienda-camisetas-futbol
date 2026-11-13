import { getCategoryName } from '../data/categories'
import formatPrice from '../utils/formatPrice'
import './Item.css'

function Item({ product }) {
  const { title, category, price, image } = product

  return (
    <article className="item-card">
      <img className="item-image" src={image} alt={title} />
      <div className="item-body">
        <span className="item-category">{getCategoryName(category)}</span>
        <h3 className="item-title">{title}</h3>
        <p className="item-price">{formatPrice(price)}</p>
      </div>
    </article>
  )
}

export default Item
