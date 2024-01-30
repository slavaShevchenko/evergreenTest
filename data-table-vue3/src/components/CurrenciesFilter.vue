<template>
  <div>
    <h2>Фильтр по курсу</h2>
    <div class="filter__fields">
      <v-text-field
        v-model="currencieFilterMore"
        type="number"
        label="Больше, чем"></v-text-field>
      <v-text-field
        v-model="currencieFilterLess"
        type="number"
        label="Меньше, чем"></v-text-field>
      <v-btn elevation="2" height="55" @click="clearFilter"
        >Сбросить фильтр</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import useStore from '@/store'

const store = useStore()

const currencieFilterMore = ref('')
const currencieFilterLess = ref('')

const clearFilter = () => {
  if (currencieFilterMore.value || currencieFilterLess.value) {
    currencieFilterMore.value = ''
    currencieFilterLess.value = ''
    store.setCurrentPage(1)
  }
}

watch(currencieFilterMore, (val) => {
  store.setCurrFilterMore(val)
  store.setCurrentPage(1)
})

watch(currencieFilterLess, (val) => {
  store.setCurrFilterLess(val)
  store.setCurrentPage(1)
})
</script>

<style lang="scss" scoped>
.filter__fields {
  display: grid;
  grid-template-columns: 1fr 1fr 12rem;
  gap: 1rem;

  ::v-deep .v-label {
    transform-origin: left center;
  }
}

@media (max-width: 600px) {
  .filter__fields {
    display: block;

    ::v-deep .v-btn {
      width: 100%;
    }
  }
}
</style>
