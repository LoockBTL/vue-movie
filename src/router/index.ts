import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import FullMovie from '../views/FullMovie.vue'
import FavoriteMovie from '../views/FavoriteMovie.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-view',
      component: MainView
    },
    {
      path: '/favorite',
      name: 'favorite-movie',
      component: FavoriteMovie
    },
    {
      path: '/watch/:id',
      name: 'full-movie',
      component: FullMovie
    }
  ]
})

export default router
