import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/cart.vue')
  },  
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import( '../views/contacts.vue')
  },  
  {
    path: '/games',
    name: 'games',
    component: () => import('../views/games.vue')
  },
  {
    path: '/item-full',
    name: 'item-full',
    component: () => import('../views/item-full.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news.vue'),
    props: true
  },
  {
    path: '/noveltys',
    name: 'noveltys',
    component: () => import('../views/noveltys.vue')
  },
  {
    path: '/Catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/ItemCard',
    name: 'ItemCard',
    component: () => import('../components/item-card.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
