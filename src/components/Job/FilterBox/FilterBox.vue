<template>
    <div class="job-filter-box">
        <div class="job-tag-container">
            <div class="job-tag-item"
            :key="term"
            v-for="term in filter.terms">
                <div class="job-filter-tag">{{ term }}</div>
                <div class="dismiss-button"
                @click="clearFilterTerm(term)">
                    <img src="../../../assets/images/icon-remove.svg" alt="">
                </div>
            </div>

            <p class="no-filter" v-if="!hasFilterTerm">Select a tag to filter</p>
        </div>

        <div class="dismiss-all-button">
            <span @click="clearFilterTerms()">Clear</span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
    methods: {
        ...mapActions('job', [
            'clearFilterTerms',
            'clearFilterTerm'
        ])
    },

    computed: {
        ...mapState('job', [
            'filter'
        ]),

        ...mapGetters('job', [
            'hasFilterTerm'
        ])
    }
}
</script>