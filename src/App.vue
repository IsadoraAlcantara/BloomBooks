<script setup>
import Magnify from 'vue-material-design-icons/Magnify.vue'
</script>

<template>
  <header>
    <nav>
      <img class="logo-nav" src="https://i.ibb.co/x50HT3f/logo-nav.png" alt="logo-nav" />
      <ul class="botoes-nav">
        <li @click="$router.push('/LivrosView')"><a> Livros</a></li>
        <li @click="$router.push('/AutoresView')"><a> Autores</a></li>
        <li @click="$router.push('/GeneroView')"><a> Gênero</a></li>
        <li @click="$router.push('/CategoriasView')"><a> Categorias</a></li>
      </ul>
      <div class="botao-pesquisa"><magnify size="20" class="pesquisa-icon" /></div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  width: 96vw;
  margin-left: 2vw;
  margin-top: 3vh;
  height: 8vh;
  justify-content: space-between;
}
.botoes-nav {
  list-style: none;
  display: flex;
  gap: 2vw;
  background-color: #bf5a5a;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  height: 4vh;
  padding: 0.5vw 3vh;
  color: white;
  font-family: 'Poppins', sans-serif;
}
.logo-nav {
  height: 6vh;
  
}
.botao-pesquisa {
  background-color: #bf5a5a;
  border-radius: 50%;
  width: 2.3vw;
  height: 2.3vw;
  color: white;
  padding: .8vw 0 0 .8vw;
}

</style>
