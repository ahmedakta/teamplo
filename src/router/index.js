import { createRouter, createWebHistory } from 'vue-router'
import DashboardIndex from '@/views/Backend/Index.vue'
import FrontendIndex from '@/views/Frontend/Index.vue'
import CounterView from '@/views/CounterView.vue'
import { useUserStore } from '@/stores/user'

const ifAuthenticated = (to, from, next) => {
  // const userStore = useUserStore()
  // userStore.getUser()
  // alert(user.image)
  let storedUserInfo = JSON.parse(localStorage.getItem('user'))
  console.log(storedUserInfo)
  if (storedUserInfo) {
    next()
    return
  }
  router.push('/')
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontend.index',
      component: FrontendIndex
    },
    {
      path: '/dashboard',
      name: 'backend.index',
      component: DashboardIndex,
      beforeEnter: ifAuthenticated // Check if user logged in to enter this page
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Frontend/AboutView.vue')
    }
  ]
})

export default router
