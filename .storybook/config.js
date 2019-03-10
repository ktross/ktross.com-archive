import { configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Install Vue plugins.
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = '/api/'
Vue.axios.defaults.withCredentials = false
Vue.axios.defaults.headers.common['Accept'] = 'application/json'
Vue.axios.defaults.headers.common['Content-Type'] = 'application/json'

function loadStories() {}

configure(loadStories, module)