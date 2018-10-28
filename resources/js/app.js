
/**
 * Load dependencies
 */

require('./bootstrap');

/**
 * Initialize Vue application
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
