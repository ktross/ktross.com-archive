
/**
 * Load dependencies
 */
require('./bootstrap');
import Vue from 'vue'
import store from './store'
import routes from './routes'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

/**
 * Axios (HTTP Requests)
 */

Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = '/api/'
Vue.axios.defaults.withCredentials = false
Vue.axios.defaults.headers.common['Accept'] = 'application/json'
Vue.axios.defaults.headers.common['Content-Type'] = 'application/json'

/**
 * Vue Router
 */

Vue.use(VueRouter)
const router = new VueRouter({
    routes,
    mode: 'history'
})

/**
 * Register Components
 */
const requireComponent = require.context('./components',true, /\w+\.(vue|js)$/)
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(
        camelCase(
            fileName.split('/').pop().replace(/\.\w+$/, '')
        )
    )
    Vue.component(componentName, componentConfig.default || componentConfig)
})

/**
 * Initialize Vue application
 */
const app = new Vue({
    router,
    store: store
}).$mount('#app')
