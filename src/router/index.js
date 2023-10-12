import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../layout/Main'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Main',
  component: Main,
  children: [{
      path: '/home',
      component: () => import(
        /* webpackChunkName: "Home" */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '../views/Home.vue'
      )
    },
    {
      path: '/about',
      component: () => import(
        /* webpackChunkName: "about" */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '../views/About.vue'
      )
    },
    {
      path: '/location',
      component: () => import(
        /* webpackChunkName: "location" */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '../views/Location.vue'
      )
    },
    {
      path: '/contact',
      component: () => import(
        /* webpackChunkName: "contact" */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '../views/Contact.vue'
      )
    },
    {
      path: '/product',
      component: () => import(
        /* webpackChunkName: "product" */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '../views/Product.vue'
      )
    },
    {
      path: '/profile/:id',
      component: () => import(
        /* webpackChunkName: "profile" */
        /* webpackPrefetch: true */
        /* webpackPreload: true */
        '../views/Profile.vue'
      )
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: '/app/web',
  routes
})

export default router