import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    itemsPerPage: 10,
    pagesCount: 1,
    currentPage: 1,
    currencieFilterMore: '',
    currencieFilterLess: '',
  },
  getters: {
    getData(state) {
      return state.data
    },
    getItemsPerPage(state) {
      return state.itemsPerPage
    },
    getPagesCount(state) {
      return state.pagesCount
    },
    getCurrentPage(state) {
      return state.currentPage
    },
    getCurrFilterMore(state) {
      return state.currencieFilterMore
    },
    getCurrFilterLess(state) {
      return state.currencieFilterLess
    },
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    },
    setPagesCount(state, payload) {
      state.pagesCount = payload
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload
    },
    setCurrFilterMore(state, payload) {
      state.currencieFilterMore = payload
    },
    setCurrFilterLess(state, payload) {
      state.currencieFilterLess = payload
    },
  },
  actions: {},
  modules: {},
})
