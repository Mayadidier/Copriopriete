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
  component: () => import(/* webpackChunkName: "home" */ '@/views/WaterForm.vue'),
},
{
  path: '/GasForm',
  name: 'gasForm',
  component: () => import(/* webpackChunkName: "home" */ '@/views/GasForm.vue'),
},
{
  path: '/WaterBill',
  name: 'waterBill',
  component: () => import(/* webpackChunkName: "home" */ '@/views/WaterBill.vue'),
},
{
  path: '/GasBill',
  name: 'gasBill',
  component: () => import(/* webpackChunkName: "home" */ '@/views/GasBill.vue'),
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
