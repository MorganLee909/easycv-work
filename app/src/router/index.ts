import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "sign up" */ '@/pages/WizzardView.vue'),
    alias: '/logout'
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
  },
  {
    path: '/logged-in',
    name: 'Logged In',
    component: () => import(/* webpackChunkName: "sign up" */ '@/pages/LoggedIn.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
