import { defineStore } from 'pinia'

export const useContadorStore = defineStore('contador', {
  state: () => ({
    counter: 0
  }),
  actions: {
    increment() {
      this.counter++
    }
  }
})
