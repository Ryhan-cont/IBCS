require('./bootstrap');

import Vue from 'vue'
import App from './App.vue'

//Bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// Globally Registered Components
import './globalComponents.js'

// Vue Router
import router from './router'

// Vuex Store
import store from './store/store'

//Load mixin
import notification from './mixin/notification'
Vue.use(notification);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
