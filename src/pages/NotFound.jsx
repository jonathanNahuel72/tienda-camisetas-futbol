import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <main className="not-found">
      <p className="not-found-code">404</p>
      <h2>Esta página no existe</h2>
      <p>Puede que el link esté mal escrito o que la página se haya movido.</p>
      <Link className="not-found-link" to="/">
        Volver a la tienda
      </Link>
    </main>
  )
}

export default NotFound
