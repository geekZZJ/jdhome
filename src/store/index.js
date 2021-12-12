import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      count: 0,
      checked: false
    }
  },
  mutations: {
    changeItemToCart (state, payload) {
      const cartList = state.cartList
      cartList.count += payload
      if (cartList.count < 0) {
        cartList.count = 0
      }
    },
    changeCartItemCheck (state) {
      const cartList = state.cartList
      cartList.checked = !cartList.checked
    }
  },
  actions: {
  },
  modules: {
  }
})
