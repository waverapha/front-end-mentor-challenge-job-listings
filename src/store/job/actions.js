export function fetchJobs({ commit }){
    fetch('data.json')
    .then(stream => stream.json())
    .then(data => {
        commit("SET_JOBS", data);
    })
    .catch(error => console.error(error));
}

export function addFilterTerm({ commit, state }, term){
    if( !(state.filter.terms.includes(term)) ){
        commit('ADD_IN_FILTER', term);
    }
}

export function clearFilterTerms({ commit, getters }){
    if( getters.hasFilterTerm ){
        commit('CLEAR_FILTER_TERMS');
    }
}

export function clearFilterTerm({ commit }, term){
    commit('CLEAR_FILTER_TERM', term);
}