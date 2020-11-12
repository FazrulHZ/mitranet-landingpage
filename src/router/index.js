import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Home from '../views/Home'
import About from '../views/About'
import Locatioan from '../views/Location'
import Contact from '../views/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    children:
      [
        {
          path: '/home',
          component: Home,
        },
        {
          path: '/about',
          component: About,
        },
        {
          path: '/location',
          component: Locatioan,
        },
        {
          path: '/contact',
          component: Contact,
        }
      ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
