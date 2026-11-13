import products from '../data/products'

const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === productId)

      if (product) {
        resolve(product)
      } else {
        reject(new Error(`No existe un producto con el id "${productId}"`))
      }
    }, 1500)
  })
}

export default getProductById
