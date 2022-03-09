import { createStore } from 'vuex'

export default createStore({
  state: {
    categoryTree: []
  },
  mutations: {
    SET_TREE: (state, payload) => {
      state.categoryTree = payload;
    },
  },
  getters: {
    TREE: state => {
      return state.categoryTree
    },
  },
  actions: {
  },
  modules: {
  }
})
