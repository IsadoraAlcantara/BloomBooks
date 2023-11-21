<script>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'

const genres = ref([])

onMounted(async () => {
  const response = await api.get('https://www.googleapis.com/books/v1/volumes?q=intitle:nome_do_livro')
}

</script>

<template>
  <div>
    <h1>Gêneros de filmes</h1>
    <ul>
      <li v-for="livro in livros" :key="livro.id">
        {{ livro.volumeInfo.title }}
        {{ livro.volumeInfo.description }}
        {{ livro.volumeInfo. }}



      </li>
    </ul>
  </div>
   
</template>

<style scoped>



</style>