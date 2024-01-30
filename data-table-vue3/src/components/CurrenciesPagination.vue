<template>
  <div class="table__pagination">
    <v-pagination
      v-model="currentPage"
      :length="store.getPagesCount"></v-pagination>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import useStore from '@/store'

const store = useStore()

const currentPage = ref(1)

watch(currentPage, (val) => {
  store.setCurrentPage(val)
})

watch(
  () => store.getCurrentPage,
  (newVal, oldVal) => {
    if (oldVal !== newVal) {
      currentPage.value = newVal
    }
  }
)
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
