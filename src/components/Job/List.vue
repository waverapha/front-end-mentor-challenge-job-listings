<template>
  <div class="job-card-list">
    <Card :job="job" />
    <Card :job="job" />
    <Card :job="job" />
  </div>
</template>

<script>
import Card from '@/components/Job/Card';

export default {
  name: 'List',

  props: {
    msg: String
  },

  components: {
    Card
  },

  data() {
    return {
      job: {
        logo: 'manage'
      }
    }
  }
}
</script>