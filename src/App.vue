<script setup>
import Magnify from 'vue-material-design-icons/Magnify.vue'
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
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
});


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
      <div class="Indicators2">
        <span v-for="(image, index) in images" :key="index" class="indicator2" :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"></span>
      </div>
      <arrow-right size="32" class="arrow-icon" />
    </div>


  </div>

  <div class="book-card">
    <div class="book-cover">
      <img class="img-card" src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg" alt="Capa do livro" />
    </div>
    <div class="book-info">
      <h2 class="book-title">Trono de vidro</h2>
      <p class="book-author">Autor do livro</p>
      <div class="book-rating">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">☆</span>
        <span class="star">☆</span>
      </div>
      <p class="book-date">Data de publicação</p>
    </div>
  </div>

  <div class="book-card">
    <div class="book-cover">
      <img class="img-card" src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg" alt="Capa do livro" />
    </div>
    <div class="book-info">
      <h2 class="book-title">Trono de vidro</h2>
      <p class="book-author">Autor do livro</p>
      <div class="book-rating">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">☆</span>
        <span class="star">☆</span>
      </div>
      <p class="book-date">Data de publicação</p>
    </div>
  </div>


  
</template>

<style scoped>

.img-card{
  width:448px ;
  height: 257px;
  object-fit: cover;
  
}
.book-card {
  margin: 50px;
  height: 507px;
  width: 448px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.book-cover {
  position: relative;
}
.book-info {
  padding: 10px;
}
.book-title {
  margin-top: 2px;
  margin-left: 2px;
  color: #111;
font-family: Poppins;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.book-author {
  
  margin: 2px;
  color: #696969;

font-family: Poppins;
font-size: 22px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.book-rating {
  margin: 10px 0;
}
.star {
  color: gold;
}



.arrow-icon{
  position:absolute ;
  color: #F2E8DF;
  margin-top: 680px;
  margin-left: 1600px;
  
}
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
  margin-right: 1490px;
  bottom: 50px;
  
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.indicator {
  width: 10px;
  height: 5px;
  border-radius: 25%;
  background-color: #F2E8DF;
  cursor: pointer;
}

.indicator.active {
  background-color: #F2E8DF;
  width: 30px;
  height: 5px;
}
</style>
