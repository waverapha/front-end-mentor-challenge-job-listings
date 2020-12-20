<template>
    <div class="job-card">
        <img :src="requiredImg" alt="">
    </div>
</template>

<script>
export default {
    props: {
        job: Object
    },

    computed: {
        requiredImg(){
            return require(`@/assets/images/${this.job.logo}.svg`);
        }
    }
}
</script>