import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WizzardViewVue from '@/pages/WizzardView.vue'
import HeaderMainVue from '@/components/HeaderMain.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Wizzard',
  //   component: WizzardViewVue
  // },
  {
    path: '/',
    name: 'Wizzard',
    component: () => import(/* webpackChunkName: "sign up" */ '@/pages/WizzardView.vue')
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "sign up" */ '@/pages/SignUp.vue')
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    component: () => import(/* webpackChunkName: "sign up" */ '@/pages/SignIn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
