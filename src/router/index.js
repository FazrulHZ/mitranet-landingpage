import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Home from '../views/Home'
import About from '../views/About'
import Locatioan from '../views/Location'
import Contact from '../views/Contact'
import Profile from '../views/Profile'
import Product from '../views/Product'

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
        },
        {
          path: '/product',
          component: Product,
        },
        {
          path: '/profile/:id',
          component: Profile,
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
