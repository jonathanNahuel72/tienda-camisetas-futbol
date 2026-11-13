import formatPrice from '../utils/formatPrice'
import './Item.css'

function Item({ product }) {
  const { title, description, price, image } = product

  return (
    <article className="item-card">
      <img className="item-image" src={image} alt={title} />
      <div className="item-body">
        <h3 className="item-title">{title}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">{formatPrice(price)}</p>
      </div>
    </article>
  )
}

export default Item
