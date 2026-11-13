# Camisetas Store

E-commerce de camisetas de fútbol desarrollado como proyecto final del curso de React JS en Coderhouse. En esta etapa tiene navegación completa con React Router: catálogo, filtro por categoría, detalle de producto y página 404; en las próximas entregas se suman el catálogo de productos, las rutas, el carrito de compras, el checkout y la conexión con Firebase.

## Tecnologías

- React 19
- Vite
- React Router (`react-router-dom`)
- JavaScript
- Git y GitHub

## Componentes

- **Navbar** (`src/components/Navbar.jsx`): barra de navegación fija arriba con el nombre de la tienda, las categorías de productos (Selecciones, Clubes argentinos, Clubes europeos y Retro) generadas con `.map()` y el `CartWidget`.
- **Footer** (`src/components/Footer.jsx`): pie de página que se muestra en todas las rutas.
- **CartWidget** (`src/components/CartWidget.jsx`): ícono de carrito con la cantidad de productos (por ahora fija en 3).
- **ItemListContainer** (`src/components/ItemListContainer.jsx`): recibe la prop `greeting`, pide los productos con `getProducts(categoryId)` dentro de un `useEffect` (al montar el componente y cada vez que cambia la categoría de la URL) y los guarda en el estado `items`. Mientras espera muestra "Cargando productos...". No hace el `.map()`: le pasa los productos a `ItemList`.
- **ItemList** (`src/components/ItemList.jsx`): recibe los productos por props y los recorre con `.map()`, renderizando un `Item` por producto con `key={product.id}`.
- **Item** (`src/components/Item.jsx`): solo presentación; muestra la card resumida de un producto (imagen, nombre, categoría y precio).
- **ItemDetailContainer** (`src/components/ItemDetailContainer.jsx`): toma el id del producto de la URL, ejecuta `getProductById` dentro de un `useEffect`, guarda el producto en estado, muestra "Cargando..." mientras espera (o un mensaje si el producto no existe) y le pasa el producto a `ItemDetail` por props.
- **ItemDetail** (`src/components/ItemDetail.jsx`): solo presentación; muestra el detalle completo en dos columnas (imagen e información: nombre, categoría, precio, descripción, temporada, talles y stock) y reutiliza `ItemCount` pasándole el stock del producto.
- **ItemCount** (`src/components/ItemCount.jsx`): contador con `useState`. Recibe el `stock` del producto por props, no deja superar el stock ni bajar de 1 y, si el stock es 0, muestra "Sin stock disponible".

## Navegación

| Ruta | Qué muestra |
|---|---|
| `/` | Todo el catálogo (`ItemListContainer` con el mensaje de bienvenida) |
| `/category/:id` | Los productos de una categoría, por ejemplo `/category/retro` |
| `/item/:id` | El detalle de un producto, por ejemplo `/item/argentina-retro-1986` |
| `*` | Página 404 (`NotFound`) para cualquier ruta que no exista |

- `BrowserRouter` envuelve la app en `App.jsx`.
- Las rutas están anidadas dentro de `Layout` (`src/layouts/Layout.jsx`), que muestra siempre la `Navbar` y el `Footer` y renderiza la página actual con `<Outlet />`.
- La `Navbar` usa `<NavLink>` para las categorías (la activa se resalta) y `<Link>` para volver al inicio. Cada card tiene un `<Link>` a `/item/:id`. No se usan etiquetas `<a>`, así que la página nunca se recarga.
- `ItemListContainer` lee la categoría con `useParams` y la incluye en el array de dependencias del `useEffect`, así el listado se vuelve a cargar y filtrar cada vez que cambia la URL. Es el mismo componente para el inicio y para todas las categorías.
- `ItemDetailContainer` lee el id del producto con `useParams` y se lo pasa a `getProductById`.
- Si la categoría o el producto no existen, se muestra un mensaje de error o la página 404.

## Datos simulados

`src/data/products.js` contiene un array de 8 camisetas (`id`, `title`, `category`, `description`, `price`, `stock`, `image`, `season`, `sizes`) y la función `getProducts(categoryId)`, que devuelve una `Promise` resuelta con `setTimeout` a los 2 segundos para simular una API. Si recibe una categoría, devuelve solo esos productos. Las imágenes son ilustraciones propias en `public/images`.

`src/services/getProductById.js` recibe un `id`, busca el producto en el array con `.find()` y devuelve una `Promise`: se resuelve con el producto o se rechaza si no existe ninguno con ese id.

`src/data/categories.js` centraliza las categorías que usan la `Navbar` y las cards.

## Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/jonathanNahuel72/tienda-camisetas-futbol.git
   ```

2. Entrar a la carpeta del proyecto:

   ```bash
   cd tienda-camisetas-futbol
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Ejecutar en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Abrir en el navegador la dirección que muestra la terminal (por defecto `http://localhost:5173`).
