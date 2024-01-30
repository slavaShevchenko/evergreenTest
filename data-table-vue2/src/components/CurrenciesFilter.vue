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
      <v-btn elevation="2" @click="clearFilter">Сбросить фильтр</v-btn>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      currencieFilterMore: '',
      currencieFilterLess: '',
    }
  },
  methods: {
    ...mapMutations([
      'setCurrFilterMore',
      'setCurrFilterLess',
      'setCurrentPage',
    ]),
    clearFilter() {
      console.log(this.currencieFilterMore)
      if (this.currencieFilterMore || this.currencieFilterLess) {
        this.currencieFilterMore = ''
        this.currencieFilterLess = ''
        this.setCurrentPage(1)
      }
    },
  },
  watch: {
    currencieFilterMore: function (val) {
      this.setCurrFilterMore(val)
      this.setCurrentPage(1)
    },
    currencieFilterLess: function (val) {
      this.setCurrFilterLess(val)
      this.setCurrentPage(1)
    },
  },
}
</script>

<style lang="scss" scoped>
.filter__fields {
  display: grid;
  grid-template-columns: 1fr 1fr 12rem;
  gap: 1rem;
  align-items: center;

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
