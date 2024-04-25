import { createRouter, createWebHistory } from 'vue-router'
import DashboardIndex from '@/views/Backend/Index.vue'
import FrontendIndex from '@/views/Frontend/Index.vue'
import CounterView from '@/views/CounterView.vue'
import { useUserStore } from '@/stores/user'
import ContentCreator from '@/views/Backend/ContentCreator.vue'

const ifAuthenticated = (to, from, next) => {
  let storedUserInfo = JSON.parse(localStorage.getItem('user'))
  // check first if there is required role for this page....
  if (to.meta.roles) {
    if (storedUserInfo && !to.meta.roles.includes(storedUserInfo.role_id)) {
      router.go(-1) // Redirect back  if role doesn't match
      return
    }
  }
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
      path: '/content-creator/dashboard',
      name: 'backend.contentCreator',
      component: ContentCreator,
      meta: { roles: [1, 3] },
      beforeEnter: ifAuthenticated // Check if user logged in to enter this page
    },
    {
      path: '/dashboard',
      name: 'backend.index',
      meta: { roles: [1] },
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
