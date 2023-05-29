// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    },
    {
  path: '/WaterForm',
  name: 'waterForm',
  component: () => import(/* webpackChunkName: "home" */ '@/views/Form_water.vue'),
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
