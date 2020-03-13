import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import { directive as onClickOutside } from 'vue-on-click-outside'
Vue.directive('on-click-outside', onClickOutside)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
    // Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')