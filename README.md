# Camisetas Store

E-commerce de camisetas de fútbol desarrollado como proyecto final del curso de React JS en Coderhouse. En esta etapa contiene el layout inicial: barra de navegación con categorías y carrito, y el contenedor principal con un mensaje de bienvenida; en las próximas entregas se suman el catálogo de productos, las rutas, el carrito de compras, el checkout y la conexión con Firebase.

## Tecnologías

- React 19
- Vite
- JavaScript
- Git y GitHub

## Componentes

- **Navbar** (`src/components/Navbar.jsx`): barra de navegación fija arriba. Muestra el nombre de la tienda, las categorías de productos (Selecciones, Clubes argentinos, Clubes europeos y Retro) generadas con `.map()` desde un array, e incluye el `CartWidget`.
- **CartWidget** (`src/components/CartWidget.jsx`): ícono de carrito con un número que indica la cantidad de productos (por ahora fijo en 3).
- **ItemCount** (`src/components/ItemCount.jsx`): contador con `useState` para elegir la cantidad. Recibe el `stock` por props, no deja superar el stock ni bajar de 1.
- **ItemListContainer** (`src/components/ItemListContainer.jsx`): contenedor principal. Recibe la prop `greeting` desde `App.jsx` y la muestra como título centrado.

Cada componente tiene su propio archivo `.css` en la misma carpeta. La Navbar usa Flexbox para alinear la marca a la izquierda, las categorías al centro y el carrito a la derecha.

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
