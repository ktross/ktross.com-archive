
/**
 * Load dependencies
 */
require('./bootstrap');
import store from './store'
import routes from './routes'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import WebBrowser from './components/WebBrowser'

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
Vue.component('web-browser', WebBrowser)
 
/**
 * Initialize Vue application
 */

const app = new Vue({
    router,
    store: store
}).$mount('#app')
