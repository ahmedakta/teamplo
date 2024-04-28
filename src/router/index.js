import { createRouter, createWebHistory } from 'vue-router'
import DashboardIndex from '@/views/Backend/Index.vue'
import FrontendIndex from '@/views/Frontend/Index.vue'
import AboutView from '@/views/Frontend/AboutView.vue'
import FeaturesView from '@/views/Frontend/FeaturesView.vue'
import ContactView from '@/views/Frontend/ContactView.vue'
import FaqView from '@/views/Frontend/FaqView.vue'
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
    // frontend pages
    {
      path: '/',
      name: 'frontend.index',
      component: FrontendIndex
    },
    {
      path: '/about-us',
      name: 'frontend.aboutUs',
      component: AboutView
    },
    {
      path: '/features',
      name: 'frontend.features',
      component: FeaturesView
    },
    {
      path: '/contact-us',
      name: 'frontend.contactUs',
      component: ContactView
    },
    {
      path: '/faq',
      name: 'frontend.faq',
      component: FaqView
    },
    // End Of Frontend Pages Routes
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
      beforeEnter: ifAuthenticated
    }
  ]
})

export default router
