<template>
  <div class="job-card-list">
    <Card :key="job.id" v-for="job in jobs" :job="job" />
  </div>
</template>

<script>
import Card from '@/components/Job/Card';

export default {
  name: 'List',

  components: {
    Card
  },

  data() {
    return {
      jobs: []
    }
  },

  mounted() {
    fetch('data.json')
    .then(stream => stream.json())
    .then(data => {
      this.jobs = data;
    })
    .catch(error => console.error(error))
  }
}
</script>