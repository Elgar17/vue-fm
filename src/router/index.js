import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/HotReview.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/songlist',
    name: 'songlist',
    component: () => import('../views/SongList.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
