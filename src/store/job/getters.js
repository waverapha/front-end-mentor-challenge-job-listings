export function filteredJobs(state, getters){
    if( getters.hasFilterTerm ){
        return state.jobs.filter(job => {
        return state.filter.terms.every(tag => getters.searchJobTags(job.id).includes(tag.toLowerCase()));
        });
    } else {
        return state.jobs;
    }
}

export function hasFilterTerm(state){
    return state.filter.terms.length > 0;
}

export const jobTags = (state) => (id) => {
    const job = state.jobs.find(job => job.id === id);

    return [
        job.role,
        job.level,
        ...job.languages,
        ...job.tools
    ];
}

export const searchJobTags = (state, getters) => (id) => {
    return getters.jobTags(id).map((tag) => tag.toLowerCase());
}