import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(stock > 0 ? initial : 0)

  const decrement = () => {
    if (count > 1) setCount(count - 1)
  }

  const increment = () => {
    if (count < stock) setCount(count + 1)
  }

  if (stock === 0) {
    return <p className="item-count-empty">Sin stock disponible</p>
  }

  return (
    <div className="item-count">
      <div className="item-count-controls">
        <button type="button" onClick={decrement} disabled={count <= 1} aria-label="Restar uno">
          −
        </button>
        <span className="item-count-value">{count}</span>
        <button type="button" onClick={increment} disabled={count >= stock} aria-label="Sumar uno">
          +
        </button>
      </div>
      <p className="item-count-stock">Stock disponible: {stock}</p>
      {onAdd && (
        <button type="button" className="item-count-add" onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      )}
    </div>
  )
}

export default ItemCount
