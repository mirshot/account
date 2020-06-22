import Vue from 'vue'
import VueRouter from 'vue-router'
import Daily from '../views/account/Daily.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Daily',
    component: Daily
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
