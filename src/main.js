import Vue from 'vue'
import "babel-polyfill"
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'
import Carousel3d from 'vue-carousel-3d'


Vue.use(Carousel3d);


Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
