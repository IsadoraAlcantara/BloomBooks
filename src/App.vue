<script setup>

</script>

<template>
    <header>
        <nav>
            <img class="logo-nav" src="logo-nav.png" alt="logo-nav">
            <ul class="botoes-nav">
                <li @click="$router.push('/livros')"> <a> livros</a></li>
                <li @click="$router.push('/autores')"><a> Autores</a></li>
                <li @click="$router.push('/genero')"><a> Gênero</a></li>
                <li @click="$router.push('/categorias')"><a> Categorias</a></li>
            </ul>
            <div class="botao-pesquisa">.</div>
        </nav>
    </header>
</template>

<style scoped>
nav{
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
  background-color: #BF5A5A;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  height: 4vh;
 padding:0.3vw 1vh;
 color: white;
 font-family: 'Poppins', sans-serif;
 

}
.logo-nav{
    width: 200px;
    
}
.botao-pesquisa{
    background-color: #BF5A5A;
    height: 6vh;
    width:4vw;
    border-radius: 100%;
}

</style>
