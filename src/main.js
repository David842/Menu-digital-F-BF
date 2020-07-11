import Vue from 'vue'
import "babel-polyfill"
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'
import Carousel3d from 'vue-carousel-3d'
import json from './assets/config/elfarolito.json'


Vue.use(Carousel3d);


Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.prototype.$http = axios
Vue.prototype.$json = json
Vue.prototype.$baseURL = "https://menugrg.com.mx:7443"
Vue.prototype.$id_marca = "3"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
