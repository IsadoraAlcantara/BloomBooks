import { defineStore } from 'pinia'

// export const useContadorStore = defineStore('contador', {
//   state: () => ({
//     counter: 0
//   }),
//   actions: {
//     increment() {
//       this.counter++
//     }
//   }
// })

import { reactive, computed } from 'vue'

import api from '@/plugins/axios'

export const useBooksStore = defineStore('apiIntegracao', () => {
  const state = reactive({
    apiIntegracao: []
  })

  const apiIntegracao = computed(() => state.apiIntegracao)

  const getAllBooks = async () => {
    const response = await api.get(`https://gutendex.com/books/`)
    state.apiIntegracao = response.data.results

  }

  return { apiIntegracao, getAllBooks }
})

export default useBooksStore
