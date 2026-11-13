import './CartWidget.css'

function CartWidget() {
  const cantidad = 3 // número fijo por ahora; más adelante vendrá del carrito real

  return (
    <button className="cart-widget" type="button" aria-label={`Carrito con ${cantidad} productos`}>
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cantidad}</span>
    </button>
  )
}

export default CartWidget
