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
    component: Bienvenido,
    meta: {
      auth: true,
      title: 'Menú Toks'
    }
  },
  {
    path: '/detalles/:id',
    name: 'Detalles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detalles.vue')
  },
  {
    path: '/home/:id',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/toks',
  routes
})

export default router
