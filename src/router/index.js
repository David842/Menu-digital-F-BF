import Vue from 'vue'
import VueRouter from 'vue-router'
import Bienvenido from '../views/Bienvenido.vue'
import "core-js/es/set"
import "core-js/es/map"


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Bienvenido',
    component: () => import(/* webpackChunkName: "bienvenido" */ '../views/Bienvenido.vue'),
    meta: {
      auth: true,
      title: 'Menú'
    }
  },
  {
    path: '/detalles/:id',
    name: 'Detalles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detalles" */ '../views/Detalles.vue')
  },
  {
    path: '/home/:id',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: '/elfarolito',
  routes
})


export default router
