import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      count: 0
    }
  },
  mutations: {
    changeItemToCart (state, payload) {
      const cartList = state.cartList
      cartList.count += payload
      if (cartList.count < 0) {
        cartList.count = 0
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
