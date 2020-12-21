<template>
  <div class="job-card-list">
    <Card :key="job.id" v-for="job in jobs" :job="job" />
  </div>
</template>

<script>
import Card from '@/components/Job/Card';

import { mapGetters } from 'vuex'

export default {
  name: 'List',

  components: {
    Card
  },

  mounted() {
    this.$store.dispatch('job/fetchJobs');
  },

  computed: {
    ...mapGetters('job', {
      jobs: 'filteredJobs'
    })
  },
}
</script>