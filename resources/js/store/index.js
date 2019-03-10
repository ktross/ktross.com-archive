import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import posts from './modules/posts'
import projects from './modules/projects'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        home,
        posts,
        projects
    },
    strict: debug,
    plugins: []
})
