<template>
  <main id="app">
    <FilterBox />
    <List />
  </main>
</template>

<script>
import List from '@/components/Job/List.vue'
import FilterBox from './components/Job/FilterBox/FilterBox.vue'

export default {
  name: 'App',
  components: {
    List,
    FilterBox
  }
}
</script>
<style lang="scss">
#app{
  font-family: inherit;
  font-size: inherit;
}
</style>