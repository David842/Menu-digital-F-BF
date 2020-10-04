import Vue from 'vue'
import "babel-polyfill"
import App from './App.vue'
import router from './router'
//import VueMaterial from 'vue-material/dist/vue-material.min.js'
import  MdDialog from 'vue-material/dist/components/MdDialog'
import  MdButton from 'vue-material/dist/components/MdButton'
import  MdToolbar from 'vue-material/dist/components/MdToolbar'
import  MdList from 'vue-material/dist/components/MdList'
import  MdIcon from 'vue-material/dist/components/MdIcon'
import  MdSnackbar from 'vue-material/dist/components/MdSnackbar'
import  MdCard from 'vue-material/dist/components/MdCard'
import  MdTooltip from 'vue-material/dist/components/MdTooltip'
import  MdDivider from 'vue-material/dist/components/MdDivider'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'
import Carousel3d from 'vue-carousel-3d'
import json from './assets/config/toks.json'

import {Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
const {Swiper, SwiperSlide} = getAwesomeSwiper(SwiperClass)




Vue.use(Carousel3d);


Vue.config.productionTip = false
//Vue.use(VueMaterial)
Vue.use(MdButton)
Vue.use(MdSnackbar)
Vue.use(MdToolbar)
Vue.use(MdList)
Vue.use(MdIcon)
Vue.use(MdCard)
Vue.use(MdDialog)
Vue.use(MdTooltip)
Vue.use(MdDivider)
Vue.prototype.$http = axios
Vue.prototype.$json = json
Vue.prototype.$baseURL = "https://menugrg.com.mx:7443"
Vue.prototype.$id_marca = "1"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
