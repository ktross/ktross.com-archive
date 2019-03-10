const state = {
    projects: [
        {
            id: 1,
            title: 'placeholder',
            image: 'placeholder'
        },
        {
            id: 2,
            title: 'placeholder',
            image: 'placeholder'
        },
        {
            id: 3,
            title: 'placeholder',
            image: 'placeholder'
        }
    ]
}

const getters = {}

const actions = {
    updateHome(context, json) {
        context.commit('setHome', json.data)
    },
    updatePosts(context, json) {
        context.commit('setPosts', json.data)
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
    setHome(state, data) {
        state.projects = []
    },
    updateSlide() {

    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
