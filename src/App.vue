<template>
  <main id="app">
    <List />
  </main>
</template>

<script>
import List from '@/components/Job/List.vue'

export default {
  name: 'App',
  components: {
    List
  }
}
</script>

<style lang="scss">
#app{
  font-family: inherit;
  font-size: inherit;
}
</style>