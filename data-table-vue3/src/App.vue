<template>
  <v-app>
    <v-main>
      <CurrenciesFilter />
      <v-data-table
        :headers="headers"
        :items="filteredCurrencies"
        :items-per-page="store.getItemsPerPage"
        :page="store.getCurrentPage"
        :mobile-breakpoint="0"
        hide-default-footer>
        <template v-slot:bottom> <CurrenciesPagination /> </template
      ></v-data-table>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import useStore from '@/store'
import axios from 'axios'

const store = useStore()

const headers = ref([
  {
    title: 'ID',
    key: 'r030',
    align: 'start',
    width: 150,
    minWidth: 150,
  },
  {
    title: 'Название',
    key: 'txt',
    align: 'start',
    width: 200,
    minWidth: 200,
  },
  {
    title: 'Курс',
    key: 'rate',
    align: 'start',
    width: 200,
    minWidth: 200,
  },
  {
    title: 'Аббревиатура',
    key: 'cc',
    align: 'start',
    width: 200,
    minWidth: 200,
  },
  {
    title: 'Дата',
    key: 'exchangedate',
    align: 'start',
    width: 200,
    minWidth: 200,
  },
])

const fetchCurrencies = async () => {
  try {
    const response = await axios.get(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    )
    store.setData(response.data)
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error)
  }
}

const filteredCurrencies = computed(() => {
  if (!store.getCurrFilterMore && !store.getCurrFilterLess) {
    return store.getData
  }

  const lowerBound = store.getCurrFilterMore
    ? parseInt(store.getCurrFilterMore)
    : Number.MIN_SAFE_INTEGER
  const upperBound = store.getCurrFilterLess
    ? parseInt(store.getCurrFilterLess)
    : Number.MAX_SAFE_INTEGER

  return store.data.filter(
    (item) => item.rate >= lowerBound && item.rate <= upperBound
  )
})

watch(filteredCurrencies, (val) => {
  store.setPagesCount(Math.ceil(val.length / store.getItemsPerPage))
})

fetchCurrencies()
</script>

<style lang="scss">
#app {
  padding: 2rem;
}
.text-start {
  text-align: left;
}
</style>
