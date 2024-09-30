const initialState = {
  name: '',
  email: '',
  avatar: '',
  status: false
}

export const useUserStore = defineStore('userStore', {
  state: () => (initialState),
  actions: {
    async getUser(token: string) {
      const req = await $fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        method: 'GET',
        headers: {
          "Authorization":`Bearer ${token}`
        }
      })

      this.name = req.name
      this.email = req.email
      this.avatar = req.avatar
      this.status = true
    },
    setUser(data) {
      this.name = data.name
      this.email = data.email
      this.avatar = data.avatar
      this.status = true
    },
    clearState() {
      this.$state = initialState
    },
  },
  persist: true
})
