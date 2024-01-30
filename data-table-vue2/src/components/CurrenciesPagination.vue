<template>
  <div class="table__pagination">
    <v-pagination v-model="currentPage" :length="getPagesCount"></v-pagination>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    ...mapGetters(['getPagesCount', 'getCurrentPage']),
  },
  methods: {
    ...mapMutations(['setCurrentPage']),
  },
  watch: {
    currentPage: function (val) {
      this.setCurrentPage(val)
    },
    getCurrentPage: function (newVal, oldVal) {
      if (oldVal != newVal) {
        this.currentPage = newVal
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.table__pagination {
  padding-top: 2rem;
  user-select: none;
  ::v-deep .theme--light.v-pagination .v-pagination__item--active {
    background-color: gray;
  }
}
</style>
