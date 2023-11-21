<script setup>
import Magnify from 'vue-material-design-icons/Magnify.vue'
import Instagram from 'vue-material-design-icons/Instagram.vue'
import Facebook from 'vue-material-design-icons/Facebook.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import linkedin from 'vue-material-design-icons/Linkedin.vue'
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import { ref, onMounted } from 'vue'
import api from './plugins/axios'
import { ref, onMounted, computed } from 'vue';

//import { useWindowSize } from '@vueuse/core'

//const { width } = useWindowSize()

// const size = computed(() => Math.ceil(width.value * 0.015))
//const size = computed(() => width.value > 1400 ? 28 : 20)
const livros = ref([])

onMounted(async () => {
  let response = await api.get('')
  moviesGenres.value = response.data.items
  response =  await api.get('books/volume/list?language=pt-BR')
  TVGenres.value = response.data.items
})





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
          <input type="text" v-model="search" placeholder="Find Something..." class="search-input" />
          <magnify size="22" class="search-button" />
        </div>

      </div>




      <div class="Indicators">
        <span v-for="(image, index) in images" :key="index" class="indicator" :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"></span>
      </div>

      <arrow-right size="32" class="arrow-icon" />
    </div>


  </div>
  <div class="title-line">
    <p class="title-card">Populares</p>
    <div class="decoration-line"></div>
  </div>
  <div class="card-geral">
   
    <arrow-left size="32" class="arrow-icon-card" />
    <div class="book-card">

      <div class="book-cover">
        <div class="favorite-icon">
        <heart size="22" class="heart-icon" />
      </div>
        <img class="img-card" src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg"
          alt="Capa do livro" />
      </div>
     
      <div class="book-info">
        <h2 class="book-title">Trono de vidro</h2>
        <p class="book-author">Sarah J. Mass</p>
        <div class="book-rating">
          <p class="review-star">2 reviews</p>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">☆</span>
          <span class="star">☆</span>
        </div>
        <p class="book-date">22|12|2022</p>
      </div>
    </div>



    <div class="book-card">

      <div class="book-cover">
        <div class="favorite-icon">
        <heart size="22" class="heart-icon" />
      </div>
        <img class="img-card" src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg"
          alt="Capa do livro" />
      </div>
      <div class="book-info">
        <h2 class="book-title">Trono de vidro</h2>
        <p class="book-author">Autor do livro</p>
        <div class="book-rating">
          <p class="review-star">2 reviews</p>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">☆</span>
          <span class="star">☆</span>
        </div>
        <p class="book-date">22|12|2022</p>
      </div>
    </div>
    <div class="book-card">
      <div class="book-cover">
        <div class="favorite-icon">
        <heart size="22" class="heart-icon" />
      </div>
        <img class="img-card" src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg"
          alt="Capa do livro" />
      </div>
      <div class="book-info">
        <h2 class="book-title">Trono de vidro</h2>
        <p class="book-author">Autor do livro</p>
        <div class="book-rating">
          <p class="review-star">2 reviews</p>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">☆</span>
          <span class="star">☆</span>
        </div>
        <p class="book-date">22|12|2022</p>
      </div>
    </div>
   
    <arrow-right size="32" class="arrow-icon-card" />
  
  </div>
  <div class="scroll-bar">
      <div class="scroll-thumb" :style="{ left: scrollPosition + '%' }"></div>
    </div>
  
  

  <div class="title-line">
    <p class="title-card">Lançamentos</p>
    <div class="decoration-line"></div>
  </div>
  <div class="card-geral">
    <arrow-left size="32" class="arrow-icon-card" />
    <div class="book-card">

      <div class="book-cover">
        <div class="favorite-icon">
        <heart size="22" class="heart-icon" />
      </div>
        <img class="img-card" src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg"
          alt="Capa do livro" />
      </div>
      <div class="book-info">
        <h2 class="book-title">Trono de vidro</h2>
        <p class="book-author">Sarah J. Mass</p>
        <div class="book-rating">
          <p class="review-star">2 reviews</p>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">☆</span>
          <span class="star">☆</span>
        </div>
        <p class="book-date">22|12|2022</p>
      </div>
    </div>

    <div class="book-card">
      <div class="book-cover">
        <div class="favorite-icon">
        <heart size="22" class="heart-icon" />
      </div>
        <img class="img-card" src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg"
          alt="Capa do livro" />
      </div>
      <div class="book-info">
        <h2 class="book-title">Trono de vidro</h2>
        <p class="book-author">Autor do livro</p>
        <div class="book-rating">
          <p class="review-star">2 reviews</p>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">☆</span>
          <span class="star">☆</span>
        </div>
        <p class="book-date">22|12|2022</p>
      </div>
    </div>
    <div class="book-card">
      <div class="book-cover">
        <div class="favorite-icon">
        <heart size="22" class="heart-icon" />
      </div>
        <img class="img-card" src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg"
          alt="Capa do livro" />
      </div>
      <div class="book-info">
        <h2 class="book-title">Trono de vidro</h2>
        <p class="book-author">Autor do livro</p>
        <div class="book-rating">
          <p class="review-star">2 reviews</p>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">☆</span>
          <span class="star">☆</span>
        </div>
        <p class="book-date">22|12|2022</p>
      </div>
    </div>
    <arrow-right size="32" class="arrow-icon-card" />

  </div>
  <div class="scroll-bar">
      <div class="scroll-thumb" :style="{ left: scrollPosition + '%' }"></div>
    </div>
  

  <div class="footer">
    <div class="logo">
      <img class="logo-footer" size="25"
        src="https://i.ibb.co/m0JgwQf/Black-and-Beige-Elegant-Simple-Modern-Typography-Logo-1-1-removebg-preview-1.png" />
      <p class="frase-footer">Fique por dentro de todas as novidades </p>
      <p class="frase-footer2">literárias aqui, livros e autores de qualidade.</p>
    </div>
    <div class="social-icons">
      <facebook size="22" class="icon" />
      <twitter size="22" class="icon" />
      <instagram size="22" class="icon" />
      <linkedin size="22" class="icon" />
    </div>
    <div class="decoration-line-footer"></div>
    <div class="nav-links">
      <RouterLink to="/"> INÍCIO </RouterLink>
      <RouterLink to="/livros"> LIVROS </RouterLink>
      <RouterLink to="/autores"> AUTORES </RouterLink>
      <RouterLink to="/generos"> GÊNERO </RouterLink>
      <RouterLink to="/categorias"> CATEGORIAS</RouterLink>


    </div>
  </div>
</template>

<style scoped>
  .heart-icon{
    color:white;
    margin-top:6px;
   right:1px;
  }
.favorite-icon{
 margin-left: 370px;
 margin-top:25px;
  position:absolute;
  background-color: #bf5a5a;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #BF5A5A;
  border-radius: 50%;
 

}
.scroll-bar {
  position: relative;
  width: 100%;
  height: 15px;
  background:#eee2e4;
  margin-bottom: 80px;
 
}
.scroll-thumb {
  position: absolute;
  top: 0;
  width: 33%;
  height: 100%;
  background: #da9b9b;
  border-radius: 25px;
  
}

.arrow-icon-card{
  margin-top:280px;
  color:#bf5a5a;
}
.frase-footer {
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.50);

  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.frase-footer2 {

  color: rgba(255, 255, 255, 0.50);

  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 40px;
}


.footer {
  margin-top: 100px;
  background-color: #BF5A5A;
  color: white;
  padding: 10px;
  text-align: center;
}

.logo {
  margin: 20px;

}

.logo-footer {
  width: 183.389px;
  height: 65px;
  margin-top: 20px;

}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 60px;
  margin-top: 10px;
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;

}

.nav-links {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  padding-top: 10px;
  display: inline-flex;
  align-items: flex-start;
  gap: 100px;
  color: #FFF;

  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
}

.decoration-line {
  width: 842.087px;
  height: 1px;
  flex-grow: 1;
  background: #BF5A5A;
  margin-left: 60px;
  margin-top: 24px;

}

.decoration-line-footer {
  width: 5000px;
  margin-bottom: 20px;
  height: 1px;
  flex-grow: 1;
  background: #ffffff;
   width: 100%;



}

.title-line {
  display: flex;


}

.title-card {
  margin-left: 56px;
  color: #BF5A5A;
  margin-bottom: 10px;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.review-star {
  color: #696969;

  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  margin-left: 155px;
  margin-top: 19px;

}

.wrap-header {
  width: 10%;
  display: flex;
  flex-direction: row;
}

.card-geral {
  display: flex;
  justify-content: space-around;

}


.wrap-header.right {
  justify-content: end;
}

.img-card {
  width: 448px;
  height: 257px;
  object-fit: cover;

}

.book-card {
  margin: 50px;
  height: 507px;
  width: 448px;
  border: 1px solid #f1dce0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 40px;




}


.book-info {
  padding: 10px;
}

.book-title {
  margin-top: 5px;
  margin-left: 20px;
  margin-bottom: 0;
  color: #111;
  font-family: Poppins;
  font-size: 22px;

}

.book-author {

  margin-top: 0;
  color: #696969;
  margin-left: 20px;
  font-family: Poppins;
  font-size: 22px;

}

.book-rating {
  margin-top: 10px;

  size: 100px;
  margin-left: 17px;
}

.star {
  color: #FFD748;
  font-size: 35px;



}

.book-date {
  color: #000;

  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline-flex;
  padding: 12px 13px;
  align-items: center;
  gap: 14px;
  border-radius: 12px;
  border: 1px solid #ECBAC4;
  margin-left: 17px;
  margin-top: 20px;

}


.arrow-icon {
  position: absolute;
  color: #F2E8DF;
  margin-top: 680px;
  margin-left: 1600px;

}

input::placeholder {
  color: #ffffff;
}

.search {
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
  color: #ffffff;
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
  width: 4vh;
  height: 4vh;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 1.3vh 0 0 1.3vh; */
}


.Carrossel {
  position: relative;
  width: 97vw;
  height: 80vh;
  overflow: hidden;
  margin: 60px 70px 60px 24px;
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
