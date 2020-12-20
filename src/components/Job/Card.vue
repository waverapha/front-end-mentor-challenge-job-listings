<template>
    <div class="job-card" :class="modifierClasses">
        <div class="job-company-logo">
            <img :src="getCompanyLogoURL(job.logo)" :alt="job.company" :title="job.company">
        </div>

        <div class="job-resume">

            <div class="job-company-name">
                <h4>{{ job.company }}</h4>

                <div class="job-modifiers">
                    <div class="modifier is-new" v-if="job.new">New!</div>
                    <div class="modifier is-featured" v-if="job.featured">Featured</div>
                </div>
            </div>

            <div class="job-description">
                <h3 class="job-position">{{ job.position }}</h3>
                <ul class="job-information">
                    <li>{{ job.postedAt }}</li>
                    <li>{{ job.contract }}</li>
                    <li>{{ job.location }}</li>
                </ul>
            </div>
            
        </div>

        <ul class="job-filter-tags">
            <li class="job-filter-tag" :key="index" v-for="(tag, index) in tags">{{ tag }}</li>
        </ul>
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

    data(){
        return {
            modifierClasses: {
                'is-new': this.job.new,
                'is-featured': this.job.featured
            }
        }
    },

    computed: {
        tags(){
            return [this.job.role].concat(
                this.job.level,
                this.job.languages,
                this.job.tools
            )
        }
    }
}
</script>