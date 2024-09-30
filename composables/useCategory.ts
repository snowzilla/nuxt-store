export function useCategory() {
  const route = useRoute()

  const {data: categories} = useFetch('https://api.escuelajs.co/api/v1/categories')

  const category = computed(() => {
    return categories.value.find(item => item.id === +route.params.categoryId)
  })

  return {category, categories}
}
