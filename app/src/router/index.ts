import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Test from '../pages/Test.vue'
import Counter from '../pages/Counter.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Test',
    component: Test
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
