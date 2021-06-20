import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'

const TheHeader = () => import('@/components/layout/TheHeader')

const Dashboard = () => import('@/views/Dashboard')
const Home = () => import('@/views/Home')
const Login = () => import('@/views/Login')
const TwoFactor = () => import('@/views/TwoFactor')
const ShareRequest = () => import('@/views/ShareRequest')

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    components: {
      default: Dashboard,
      header: TheHeader
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      header: TheHeader
    }
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      default: Login,
      header: TheHeader
    },
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/two-factor',
    name: 'TwoFactor',
    components: {
      default: TwoFactor,
      header: TheHeader
    },
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/share-request',
    name: 'ShareRequest',
    components: {
      default: ShareRequest,
      header: TheHeader
    },
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({
      path: '/login',
      query: { redirect: to.name }
    })
  } else {
    if (store.getters.isAuthenticated && to.meta.requiresAuth === false) {
      next({ path: '/dashboard' })
    } else {
      next()
    }
  }
})

export default router
