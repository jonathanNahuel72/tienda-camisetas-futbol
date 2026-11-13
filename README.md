# Camisetas Store

E-commerce de camisetas de fútbol desarrollado como proyecto final del curso de React JS en Coderhouse. En esta etapa muestra el catálogo de camisetas cargado de forma asíncrona desde datos simulados y la vista de detalle de un producto; en las próximas entregas se suman el catálogo de productos, las rutas, el carrito de compras, el checkout y la conexión con Firebase.

## Tecnologías

- React 19
- Vite
- JavaScript
- Git y GitHub

## Componentes

- **Navbar** (`src/components/Navbar.jsx`): barra de navegación fija arriba con el nombre de la tienda, las categorías de productos (Selecciones, Clubes argentinos, Clubes europeos y Retro) generadas con `.map()` y el `CartWidget`.
- **CartWidget** (`src/components/CartWidget.jsx`): ícono de carrito con la cantidad de productos (por ahora fija en 3).
- **ItemListContainer** (`src/components/ItemListContainer.jsx`): recibe la prop `greeting`, pide los productos con `getProducts()` dentro de un `useEffect` (solo al montar el componente) y los guarda en el estado `items`. Mientras espera muestra "Cargando productos...". No hace el `.map()`: le pasa los productos a `ItemList`.
- **ItemList** (`src/components/ItemList.jsx`): recibe los productos por props y los recorre con `.map()`, renderizando un `Item` por producto con `key={product.id}`.
- **Item** (`src/components/Item.jsx`): solo presentación; muestra la card resumida de un producto (imagen, nombre, categoría y precio).
- **ItemDetailContainer** (`src/components/ItemDetailContainer.jsx`): recibe el `productId`, ejecuta `getProductById` dentro de un `useEffect`, guarda el producto en estado, muestra "Cargando..." mientras espera (o un mensaje si el producto no existe) y le pasa el producto a `ItemDetail` por props.
- **ItemDetail** (`src/components/ItemDetail.jsx`): solo presentación; muestra el detalle completo en dos columnas (imagen e información: nombre, categoría, precio, descripción, temporada, talles y stock) y reutiliza `ItemCount` pasándole el stock del producto.
- **ItemCount** (`src/components/ItemCount.jsx`): contador con `useState`. Recibe el `stock` del producto por props, no deja superar el stock ni bajar de 1 y, si el stock es 0, muestra "Sin stock disponible".

## Datos simulados

`src/data/products.js` contiene un array de 8 camisetas (`id`, `title`, `category`, `description`, `price`, `stock`, `image`, `season`, `sizes`) y la función `getProducts()`, que devuelve una `Promise` resuelta con `setTimeout` a los 2 segundos para simular una API. Las imágenes son ilustraciones propias en `public/images`.

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
