const products = [
  {
    id: 'argentina-titular-2026',
    title: 'Camiseta Argentina Titular 2026',
    category: 'selecciones',
    description:
      'La clásica albiceleste a bastones celestes y blancos. Tela liviana con tecnología de secado rápido, cuello redondo y terminaciones reforzadas.',
    price: 85000,
    stock: 12,
    image: '/images/argentina-titular.svg',
    season: '2026',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'brasil-titular-2026',
    title: 'Camiseta Brasil Titular 2026',
    category: 'selecciones',
    description:
      'La verdeamarela de siempre: amarilla con detalles verdes. Tejido respirable y corte regular para usar en la cancha o en la calle.',
    price: 80000,
    stock: 8,
    image: '/images/brasil-titular.svg',
    season: '2026',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'boca-titular-2026',
    title: 'Camiseta Boca Juniors Titular 2026',
    category: 'clubes-argentinos',
    description:
      'Azul con la franja amarilla horizontal en el pecho. Tela de poliéster reciclado y cuello en V con vivos amarillos.',
    price: 70000,
    stock: 15,
    image: '/images/boca-titular.svg',
    season: '2026',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'river-titular-2026',
    title: 'Camiseta River Plate Titular 2026',
    category: 'clubes-argentinos',
    description:
      'Blanca con la banda roja cruzada en diagonal. Corte slim, mangas con terminación elástica y tela de secado rápido.',
    price: 70000,
    stock: 9,
    image: '/images/river-titular.svg',
    season: '2026',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'real-madrid-titular-2026',
    title: 'Camiseta Real Madrid Titular 25/26',
    category: 'clubes-europeos',
    description:
      'Blanca con detalles dorados en cuello y mangas. Tejido técnico liviano, ideal para entrenar o para la tribuna.',
    price: 95000,
    stock: 10,
    image: '/images/real-madrid-titular.svg',
    season: '2025/26',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'barcelona-titular-2026',
    title: 'Camiseta Barcelona Titular 25/26',
    category: 'clubes-europeos',
    description:
      'Bastones azulgranas con detalles dorados. Tela respirable con paneles de ventilación en los costados.',
    price: 95000,
    stock: 4,
    image: '/images/barcelona-titular.svg',
    season: '2025/26',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'argentina-retro-1986',
    title: 'Camiseta Argentina Retro 1986',
    category: 'retro',
    description:
      'Réplica del diseño usado en el Mundial de México 1986: bastones celestes claros, cuello negro y tela de algodón como las de época.',
    price: 65000,
    stock: 5,
    image: '/images/argentina-1986.svg',
    season: '1986',
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: 'paises-bajos-retro-1974',
    title: 'Camiseta Países Bajos Retro 1974',
    category: 'retro',
    description:
      'La naranja mecánica del Mundial 1974. Réplica en algodón con cuello redondo negro y corte clásico.',
    price: 60000,
    stock: 0,
    image: '/images/paises-bajos-1974.svg',
    season: '1974',
    sizes: ['M', 'L', 'XL'],
  },
]

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = categoryId
        ? products.filter((product) => product.category === categoryId)
        : products
      resolve(result)
    }, 2000)
  })
}

export default products
