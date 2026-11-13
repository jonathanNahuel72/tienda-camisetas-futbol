import CartWidget from './CartWidget'
import './Navbar.css'

const categorias = ['Selecciones', 'Clubes argentinos', 'Clubes europeos', 'Retro']

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-brand">⚽ Camisetas Store</h1>

      <nav>
        <ul className="navbar-categories">
          {categorias.map((categoria) => (
            <li key={categoria}>
              <button className="navbar-link" type="button">
                {categoria}
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
