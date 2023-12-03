<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const favoriteBooks = ref([])

    const fetchFavorites = async () => {
      const response = await axios.get('https://gutendex.com/api/v1/favorites')
      favoriteBooks.value = response.data
    }

    const removeFromFavorites = (id) => {
      favoriteBooks.value = favoriteBooks.value.filter(book => book.id !== id)
    }

    fetchFavorites()

    return {
      favoriteBooks,
      removeFromFavorites
    }
  }
}

</script>

<template>
  <div>
    <h1>Produtos Favoritos</h1>
    <div v-for="book in favoriteBooks" :key="book.id">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }}</p>
      <button @click="removeFromFavorites(book.id)">Remover dos favoritos</button>
    </div>
  </div>

</template>

<style scoped>
</style>