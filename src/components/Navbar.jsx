import { Link, NavLink } from 'react-router-dom'
import categories from '../data/categories'
import CartWidget from './CartWidget'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        ⚽ Camisetas Store
      </Link>

      <nav>
        <ul className="navbar-categories">
          {categories.map((category) => (
            <li key={category.id}>
              <NavLink to={`/category/${category.id}`} className="navbar-link">
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default Navbar
