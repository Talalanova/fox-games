import { createStore } from 'vuex'

export default createStore({
  state: {
    categoryTree: [],
    cart: []
  },
  mutations: {
    SET_TREE: (state, payload) => {
      state.categoryTree = payload;
    },
    SET_CART: (state, product) => {
      state.cart.push(product)
    }
  },
  getters: {
    TREE: state => {
      return state.categoryTree
    },
    CART: state => {
      return state.cart
    }
  },
  actions: {
    ADD_TO_CART({commit},product) {
      commit('SET_CART', product)
    }
  },
  modules: {
  }
})
