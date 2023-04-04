import { createRouter, createWebHistory } from 'vue-router'
import StoreHomePage from '../views/store/StoreHomePageView.vue'
import GameDetailsView from '../views/GameDetailsView.vue'
import UserLibraryView from '../views/UserLibraryView.vue'
import BrowseGamesList from '@/views/store/BrowseGamesList.vue'

const routes = [
  {
    path: '/store',
    name: 'store',
    component: StoreHomePage
  },
  {
    path: '/games/:gameId',
    name: 'gameDetailsView',
    component: GameDetailsView,
    props: true
  },
  {
    path: '/library',
    name: 'library',
    component: UserLibraryView
  },
  {
    path: '/store/games/:page?',
    name: 'browseGames',
    component: BrowseGamesList,
  },  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
