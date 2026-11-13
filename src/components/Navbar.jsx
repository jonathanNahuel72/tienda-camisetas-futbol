import categories from '../data/categories'
import CartWidget from './CartWidget'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-brand">⚽ Camisetas Store</h1>

      <nav>
        <ul className="navbar-categories">
          {categories.map((category) => (
            <li key={category.id}>
              <button className="navbar-link" type="button">
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default Navbar
