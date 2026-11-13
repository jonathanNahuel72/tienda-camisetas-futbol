const categories = [
  { id: 'selecciones', name: 'Selecciones' },
  { id: 'clubes-argentinos', name: 'Clubes argentinos' },
  { id: 'clubes-europeos', name: 'Clubes europeos' },
  { id: 'retro', name: 'Retro' },
]

export const getCategoryName = (categoryId) =>
  categories.find((category) => category.id === categoryId)?.name ?? categoryId

export default categories
