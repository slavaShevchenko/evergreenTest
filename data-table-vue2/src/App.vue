<template>
  <div id="app">
    <CurrenciesFilter />
    <v-data-table
      :headers="headers"
      :items="filteredCurrencies"
      :items-per-page="getItemsPerPage"
      :page="getCurrentPage"
      :mobile-breakpoint="0"
      hide-default-footer></v-data-table>
    <CurrenciesPagination />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import axios from 'axios'
import CurrenciesFilter from '@/components/CurrenciesFilter.vue'
import CurrenciesPagination from '@/components/CurrenciesPagination.vue'

export default {
  data() {
    return {
      headers: [
        {
          text: 'ID',
          value: 'r030',
          align: 'start',
          width: 150,
        },
        {
          text: 'Название',
          value: 'txt',
          align: 'start',
          width: 200,
        },
        {
          text: 'Курс',
          value: 'rate',
          align: 'start',
          width: 200,
        },
        {
          text: 'Аббревиатура',
          value: 'cc',
          align: 'start',
          width: 200,
        },
        { text: 'Дата', value: 'exchangedate', align: 'start', width: 200 },
      ],
    }
  },
  components: {
    CurrenciesFilter,
    CurrenciesPagination,
  },
  mounted() {
    this.fetchCurrencies()
  },
  computed: {
    ...mapGetters([
      'getData',
      'getItemsPerPage',
      'getCurrentPage',
      'getCurrFilterMore',
      'getCurrFilterLess',
    ]),
    filteredCurrencies() {
      if (!this.getCurrFilterMore && !this.getCurrFilterLess) {
        return this.getData
      }

      const lowerBound = this.getCurrFilterMore
        ? parseInt(this.getCurrFilterMore)
        : Number.MIN_SAFE_INTEGER
      const upperBound = this.getCurrFilterLess
        ? parseInt(this.getCurrFilterLess)
        : Number.MAX_SAFE_INTEGER

      return this.getData.filter(
        (item) => item.rate >= lowerBound && item.rate <= upperBound
      )
    },
  },
  methods: {
    ...mapMutations(['setData', 'setPagesCount']),
    async fetchCurrencies() {
      try {
        const response = await axios.get(
          'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
        )
        this.setData(response.data)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    },
  },
  watch: {
    filteredCurrencies: function (val) {
      this.setPagesCount(Math.ceil(val.length / this.getItemsPerPage))
    },
  },
}
</script>

<style lang="scss">
#app {
  padding: 2rem;
}
.text-start {
  text-align: left;
}
</style>
