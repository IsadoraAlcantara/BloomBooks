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
    path: '/genero',
    name: 'genero',
    component: () => import('../views/GeneroView.vue')
  },
  {
    path: '/categoria',
    name: 'categoria',
    component: () => import('../views/CategoriaView.vue'),
    meta: {
      requiresAuth: true // Definindo que a rota requer autenticação
    }
  },
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router