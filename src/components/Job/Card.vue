<template>
    <div class="job-card">
        <img :src="getCompanyLogoURL(job.logo)" :alt="job.company" :title="job.company">
    </div>
</template>

<script>
export default {
    props: {
        job: Object
    },

    methods: {
        getCompanyLogoURL(name) {
            const imagePathSplitted = name.split('/');

            const imageName = imagePathSplitted[ imagePathSplitted.length - 1 ];

            return require(`@/assets/images/${imageName}`);
        }
    },
}
</script>