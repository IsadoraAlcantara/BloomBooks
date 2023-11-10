import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/InicialPageView.vue')
  },
  {
    path: '/livros',
    name: 'livros',
    component: () => import('../views/LivrosView.vue')
  },
  {
    path: '/autores',
    name: 'autores',
    component: () => import('../views/AutoresView.vue')
  },
  {
    path: '/generos',
    name: 'generos',
    component: () => import('../views/GeneroView.vue')
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: () => import('../views/CategoriasView.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router