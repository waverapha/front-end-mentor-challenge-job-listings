export function SET_JOBS(state, data){
    state.jobs = data;
}

export function ADD_IN_FILTER(state, data){
    state.filter.terms.push(data);
}

export function CLEAR_FILTER_TERMS(state){
    state.filter.terms = [];
}

export function CLEAR_FILTER_TERM(state, data){
    state.filter.terms = state.filter.terms.filter((term) => {
        return term !== data;
    });
}