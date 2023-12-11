<script setup>
import Magnify from 'vue-material-design-icons/Magnify.vue'

</script>
<template>
    <nav>
      <div class="wrap-header">
        <img class="logo-nav" src="https://i.ibb.co/x50HT3f/logo-nav.png" alt="logo-nav" />
      </div>
      <div class="botoes-nav">
        <RouterLink to="/"> Início</RouterLink>
        <RouterLink to="/livros"> Livros</RouterLink>
        <RouterLink to="/autores"> Autores</RouterLink>
        <RouterLink to="/generos"> Gênero</RouterLink>
        <RouterLink to="/categorias"> Categorias</RouterLink>
      </div>

      <div class="wrap-header right">
        <div class="botao-pesquisa">
          <magnify :size="size" class="pesquisa-icon" />
        </div>
      </div>
    </nav>
</template>
<style scoped>


.wrap-header {
  width: 10%;
  display: flex;
  flex-direction: row;
}



.wrap-header.right {
  justify-content: end;
}


 nav {
  display: flex;
  flex-direction: row;
  width: 96vw;
  margin-left: 2vw;
  margin-top: 3vh;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
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
  color: #faf6f3;
}

 .botao-pesquisa {
  background-color: #bf5a5a;
  border-radius: 50%;
  width: 4vh;
  height: 4vh;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

} 


</style>
