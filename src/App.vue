<script setup>
import Magnify from 'vue-material-design-icons/Magnify.vue'
import { ref, onMounted } from 'vue';


const images = ref([
  'https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg',
  'https://i.pinimg.com/564x/db/db/0f/dbdb0f73f16b2b7579e7189d30d4568b.jpg',
  'https://i.pinimg.com/564x/fa/95/f4/fa95f40d078d5e444348f631a25f24f6.jpg',
  'https://i.pinimg.com/564x/ce/a6/82/cea68267c3294713623da43dbf9aea7b.jpg',

]);

const currentIndex = ref(0);

const goToSlide = (index) => {
  currentIndex.value = index++;
};

const nextSlide = () => {
  currentIndex.value = currentIndex.value === images.value.length - 1 ? 0 : currentIndex.value + 1
}

onMounted(() => {
  setInterval(() => {
    nextSlide()
  }, 2000)
})



  

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
      <div class="botao-pesquisa">
        <magnify size="28" class="pesquisa-icon" />
      </div>
    </nav>
  </header>

  <RouterView />
  <div class="LadoForm">

    <div class="Carrossel">
      <div class="Slide" v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }">
        <img class="ImgC" :src="image" alt="Carrossel Image">

      </div>
      <div class="titulo">
        <p> BloomBooks</p>
      </div>

      <div class="search">
    <div class="search-bar">
      <input type="text" v-model="search"  placeholder="Find Something..."  class="search-input"/>
      <magnify size="22" class="search-button" />
    </div>
   
  </div>




      <div class="Indicators">
        <span v-for="(image, index) in images" :key="index" class="indicator" :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"></span>
      </div>
    </div>


  </div>
</template>

<style scoped>
  input::placeholder{
    color: #ffffff;
  }
  .search{
    margin-right: 400px;
  }
.search-bar {
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding: 10px;
  margin-top: 100px;

  border: 1px solid white;
  position: absolute;
  text-decoration: none;
 
 
  
}

.search-input {
  flex-grow: 1;
  margin-left: 30px;
  margin-right: 180px;
 font-family: poppins, ;
  background-color: transparent;
 
 
}

.search-button {
  border-radius: 25px;
  color:#ffffff ;
  cursor: pointer;
  position: absolute;
  text-decoration: none;
  margin-top: 5px;
 
 

}






.titulo {
  color: #BF5A5A;
  font-family: 'Pinyon Script', cursive;
  font-size: 200px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
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
  color: #FAF6F3;

}

.botao-pesquisa {
  background-color: #bf5a5a;
  border-radius: 50%;
  width: 2.3vw;
  height: 2.3vw;
  color: white;
  padding: .8vw 0 0 .8vw;
}


.Carrossel {
  position: relative;
  width: 97vw;
  height: 80vh;
  overflow: hidden;
  margin: 60px 70px 90px 24px;
  align-items: center;
  display: flex;
  justify-content: center;

}

.Slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;

}

.Slide.active {
  opacity: 1;
}

.ImgC {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3vh;
}

.Indicators {
  position: absolute;
  align-items: center;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #BF5A5A;
  cursor: pointer;
}

.indicator.active {
  background-color: #F2E8DF;
  width: 13px;
  height: 13px;
}
</style>
