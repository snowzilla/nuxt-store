export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: []
  }),

  actions: {
    setToCart(data) {
      if (!this.cart.find(item => item.id === data.id)) {
        this.cart.push({
          ...data,
          counter: 1
        });
      } else {
        this.cart = this.cart.map(item => {
          if (item.id === data.id) {
            return {
              ...item,
              counter: item.counter + 1
            };
          }
          return item
        })
      }
    },
    incrementProductCounter(id) {
      this.cart = this.cart.map(item => {
        if (item.id === id) {
          return {
            ...item,
            counter: item.counter + 1
          };
        }
        return item
      })
    },
    decrementProductCounter(id) {
      this.cart = this.cart.map(item => {
        if (item.id === id) {
          return {
            ...item,
            counter: item.counter - 1
          };
        }
        return item
      })
    },
    removeFromCart(data) {
      this.cart = this.cart.filter(item => item.id !== data)
    }
  },
  getters: {
    setToStorage: (state) => {
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    getNumberItemsCart: (state) => {
      return state.cart.reduce((acc, item) => {
        return acc + item.counter
      }, 0)
    }
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
})
