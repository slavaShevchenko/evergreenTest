import { defineStore } from 'pinia'

const useStore = defineStore('store', {
  state: () => ({
    data: [],
    itemsPerPage: 10,
    pagesCount: 1,
    currentPage: 1,
    currencieFilterMore: '',
    currencieFilterLess: '',
  }),
  getters: {
    getData: (state) => state.data,
    getItemsPerPage: (state) => state.itemsPerPage,
    getPagesCount: (state) => state.pagesCount,
    getCurrentPage: (state) => state.currentPage,
    getCurrFilterMore: (state) => state.currencieFilterMore,
    getCurrFilterLess: (state) => state.currencieFilterLess,
  },
  actions: {
    setData(payload) {
      this.data = payload
    },
    setPagesCount(payload) {
      this.pagesCount = payload
    },
    setCurrentPage(payload) {
      this.currentPage = payload
    },
    setCurrFilterMore(payload) {
      this.currencieFilterMore = payload
    },
    setCurrFilterLess(payload) {
      this.currencieFilterLess = payload
    },
  },
})

export default useStore
