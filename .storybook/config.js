import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

/**
 * Install Vue Plugins
 */
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = '/api/'
Vue.axios.defaults.withCredentials = false
Vue.axios.defaults.headers.common['Accept'] = 'application/json'
Vue.axios.defaults.headers.common['Content-Type'] = 'application/json'

/**
 * Register Components
 */
const requireComponent = require.context('../resources/js/components',true, /App[A-Z]\w+\.(vue)$/)
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
 * Load Stories
 */

function loadStories() {
    const requireStories = require.context('../resources/js/stories', true, /\.stories\.js$/)
    requireStories.keys().forEach(filename => requireStories(filename))
}

configure(loadStories, module)