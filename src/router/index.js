import { createRouter, createWebHistory } from 'vue-router'
import DashboardIndex from '@/views/Backend/Index.vue'
import ProjectsIndex from '@/views/Backend/ProjectsView.vue'
import ProjectIndex from '@/views/Backend/ProjectView.vue'
import ProjectForm from '@/views/Backend/Forms/ProjectForm.vue'
import SettingsIndex from '@/views/Backend/SettingsView.vue'
import DepartmentsIndex from '@/views/Backend/DepartmentsView.vue'
import DepartmentIndex from '@/views/Backend/DepartmentView.vue'
import ProjectBoard from '@/views/Backend/Departments/Department/Project/Board.vue'
import EventsIndex from '@/views/Backend/EventsView.vue'
import ChatsIndex from '@/views/Backend/ChatsView.vue'
import FrontendIndex from '@/views/Frontend/Index.vue'
import AboutView from '@/views/Frontend/AboutView.vue'
import FeaturesView from '@/views/Frontend/FeaturesView.vue'
import LoginView from '@/views/Frontend/LoginView.vue'
import ContactView from '@/views/Frontend/ContactView.vue'
import FaqView from '@/views/Frontend/FaqView.vue'
import BlogsView from '@/views/Frontend/BlogsView.vue'
import BlogView from '@/views/Frontend/BlogView.vue'
import { useUserStore } from '@/stores/user'
import ContentCreator from '@/views/Backend/Contents/ContentsKpi.vue'
import ContentsView from '@/views/Backend/Contents/ContentsView.vue'
import ContentView from '@/views/Backend/Contents/ContentView.vue'
import CategoriesView from '@/views/Backend/Contents/CategoriesView.vue'
import DepartmentsView from '@/views/Backend/DepartmentsView.vue'

const ifAuthenticated = (to, from, next) => {
  let storedUserInfo = JSON.parse(localStorage.getItem('user'))
  // content manager dashboard redirect
  if (to.path == '/dashboard' && storedUserInfo.role_id == 3) {
    router.push('/content-creator/dashboard')
    return
  }
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
    {
      path: '/blogs',
      name: 'frontend.blogs',
      component: BlogsView
    },
    {
      path: '/blogs/example-blog',
      name: 'frontend.blogs.view',
      component: BlogView
    },
    // End Of Frontend Pages Routes
    // Backend Routes
    // content creator routes
    {
      path: '/content-creator/dashboard',
      name: 'backend.contentCreator',
      component: ContentCreator,
      meta: { roles: [1, 3] },
      beforeEnter: ifAuthenticated // Check if user logged in to enter this page
    },
    {
      path: '/content-creator/pages',
      name: 'backend.contentCreator.pages',
      component: ContentsView,
      meta: { roles: [1, 3] },
      beforeEnter: ifAuthenticated // Check if user logged in to enter this page
    },
    {
      path: '/content-creator/categories',
      name: 'backend.contentCreator.categories',
      component: CategoriesView,
      meta: { roles: [1, 3] },
      beforeEnter: ifAuthenticated // Check if user logged in to enter this page
    },
    {
      path: '/content-creator/content/:slug',
      name: 'backend.contentCreator.content.view',
      meta: { roles: [1, 3] },
      component: ContentView,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/dashboard',
      name: 'backend.index',
      meta: { roles: [1] },
      component: DashboardIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/projects',
      name: 'backend.projects',
      meta: { roles: [1] },
      component: ProjectsIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/project/create',
      name: 'backend.project.create',
      meta: { roles: [1] },
      component: ProjectForm,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/project/:slug',
      name: 'backend.projects.view',
      meta: { roles: [1] },
      component: ProjectIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/departments',
      name: 'backend.departments',
      meta: { roles: [1] },
      component: DepartmentsIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/department/:slug',
      name: 'backend.departments.view',
      component: DepartmentIndex
    },
    {
      path: '/department/:department_slug/:project_slug/tasks',
      name: 'backend.department.project.tasks',
      component: ProjectBoard
    },
    {
      path: '/settings',
      name: 'backend.settings',
      meta: { roles: [1] },
      component: SettingsIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/events',
      name: 'backend.events',
      meta: { roles: [1] },
      component: EventsIndex,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/chats',
      name: 'backend.chats',
      meta: { roles: [1] },
      component: ChatsIndex,
      beforeEnter: ifAuthenticated
    },
    // AUTH ROUTES
    {
      path: '/login',
      name: 'frontend.login',
      component: LoginView
    }
  ]
})

export default router
