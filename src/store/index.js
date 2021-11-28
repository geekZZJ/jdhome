import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: {
      count: 0
    }
  },
  mutations: {
    addItemToCart (state, payload) {
      const cartList = state.cartList
      cartList.count += payload
    }
  },
  actions: {
  },
  modules: {
  }
})
