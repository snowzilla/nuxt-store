
const isLoading = ref<boolean>(false)

export default function () {

  function startLoading() {
    isLoading.value = true
    console.log(1)
  }

  function endLoading() {
    isLoading.value = false
    console.log(2)
  }


  return {startLoading, endLoading, isLoading}
}
