<script setup>
import Magnify from 'vue-material-design-icons/Magnify.vue'
</script>

<template>
  <header>
    <nav>
      <img class="logo-nav" src="https://i.ibb.co/x50HT3f/logo-nav.png" alt="logo-nav" />
      <div class="botoes-nav">
        <RouterLink to="/"> Início</RouterLink>
        <RouterLink to="/livros"> Livros</RouterLink>
        <RouterLink to="/autores"> Autores</RouterLink>
        <RouterLink to="/generos"> Gênero</RouterLink>
        <RouterLink to="/categorias"> Categorias</RouterLink>
      </div>
      <div class="botao-pesquisa"><magnify size="28" class="pesquisa-icon" /></div>
    </nav>
  </header>

  <RouterView/>  
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

a {
  text-decoration: none;
  color:#FAF6F3;
  
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
