import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/cart.vue'),
    props: true
  },  
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import( '../views/contacts.vue'),
    props: true
  },  
  {
    path: '/games',
    name: 'games',
    component: () => import('../views/games.vue'),
    props: true
  },
  {
    path: '/item-full',
    name: 'item-full',
    component: () => import('../views/item-full.vue'),
    props: true
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
    component: () => import('../views/noveltys.vue'),
    props: true
  },
  {
    path: '/Catalog',
    name: 'Catalog',
    component: () => import('../views/Catalog.vue'),
    props: true
  },
  {
    path: '/Category',
    name: 'Category',
    component: () => import('../views/Category.vue'),
    props: true
  },
  {
    path: '/ItemCard',
    name: 'ItemCard',
    component: () => import('../components/item-card.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
