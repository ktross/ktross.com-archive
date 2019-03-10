const state = {
    per_page: 0,
    current_page: 0,
    last_page: 0,
    from: 0,
    to: 0,
    total: 0,
    data: []
}

const getters = {}

const actions = {
    updateProjects(context, json) {
        context.commit('setProjects', json.data)
        context.commit('setPagination', {
            per_page: json.per_page,
            current_page: json.current_page,
            last_page: json.last_page,
            from: json.from,
            to: json.to,
            total: json.total
        })
    }
}

const mutations = {
    setProjects(state, projects) {
        state.data = projects
    },
    setPagination(state, data) {
        state.per_page = data.per_page
        state.current_page = data.current_page
        state.last_page = data.last_page
        state.from = data.from
        state.to = data.to
        state.total = data.total
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
