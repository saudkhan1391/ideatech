import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Todos from '../components/Todos.vue'
import Portfolio from '../components/Portfolio.vue'
import Login from '../components/Login.vue'
import ContactUs from '../components/ContactUs.vue'
import Ideas from '../components/Ideas.vue'
// import ShopingCart from '../components/ShopingCart.vue'
// import About from '../views/About.vue'
import PageNotFound from '../components/PageNotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/ideas',
    name: 'ideas',
    component: Ideas
  },
  // {
  //   path: '/cart',
  //   name: 'cart',
  //   component: ShopingCart
  // },
  {
    path: '/contact',
    name: 'contact-us',
    component: ContactUs
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "*",
    name: 'not-found',
    component: PageNotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
