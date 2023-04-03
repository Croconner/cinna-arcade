import { createRouter, createWebHistory } from 'vue-router'
import StoreHomePage from '../views/StoreHomePage.vue'
import GameDetailsView from '../views/GameDetailsView.vue'
import UserLibraryView from '../views/UserLibraryView.vue'

const routes = [
  {
    path: '/store',
    name: 'store',
    component: StoreHomePage
  },
  {
    path: '/games/:gameId',
    name: "gameDetailsView",
    component: GameDetailsView,
    props: true
  },
  {
    path: '/games',
    name: 'gameList',
    component: StoreHomePage
  },
  {
    path: '/library',
    name: 'library',
    component: UserLibraryView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
