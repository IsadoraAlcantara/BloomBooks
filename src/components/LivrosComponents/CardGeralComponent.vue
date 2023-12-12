<script setup>
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
import Heart from 'vue-material-design-icons/Heart.vue'
import { ref, onMounted } from 'vue'
import api from '../../plugins/axios'

const load = ref(false)
const i = ref(0)
const animRow = ref(true)

const teste = ref([])

function decrementar() {
  if (i.value == 0) {
    i.value = teste.value.results.length - 1
  } else {
    i.value = i.value - 1
  }
}

function acresentar() {
  if (i.value == teste.value.results.length - 1) {
    i.value = 0
  } else {
    i.value = i.value + 1
  }
  console.log(i)
}

onMounted(async () => {
  const response = await api.get('https://gutendex.com/books/')
  teste.value = response.data
  console.log('teste:' + teste.value)
  setInterval(() => {
    load.value = true
  }, 2000)
  setInterval(() => {
    nextSlide()
  }, 2000)
})
//import { useWindowSize } from '@vueuse/core'

//const { width } = useWindowSize()

// const size = computed(() => Math.ceil(width.value * 0.015))
//const size = computed(() => width.value > 1400 ? 28 : 20)


// onMounted(async () => {
//   let response = await api.get('')
//   moviesGenres.value = response.data.items
//   response =  await api.get('books/volume/list?language=pt-BR')
//   TVGenres.value = response.data.items
// })

const images = ref([
  'https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg',
  'https://i.pinimg.com/564x/db/db/0f/dbdb0f73f16b2b7579e7189d30d4568b.jpg',
  'https://i.pinimg.com/564x/fa/95/f4/fa95f40d078d5e444348f631a25f24f6.jpg',
  'https://i.pinimg.com/564x/ce/a6/82/cea68267c3294713623da43dbf9aea7b.jpg'
])

const currentIndex = ref(0)

const goToSlide = (index) => {
  currentIndex.value = index++
}

const nextSlide = () => {
  currentIndex.value = currentIndex.value === images.value.length - 1 ? 0 : currentIndex.value + 1
}
</script>
<template>


      <div v-if="load" class="card-geral">
    <arrow-left size="32" class="arrow-icon-card" @click="decrementar" />

    <div v-for="index in 3" :key="index">
      
        <div v-if="animRow" class="book-card">
          <div class="book-cover">
            <div class="favorite-icon">
              <heart size="22" class="heart-icon" />
            </div>
            <img
              class="img-card"
              src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg"
              alt="Capa do livro"
            />
          </div>

          <div class="book-info">
            <h2 class="book-title">{{ teste.results[i + (index - 1)].title }}</h2>
            <p class="book-author">{{ teste.results[i + (index - 1)].authors[0].name }}</p>
            <div class="book-rating">
              <p class="review-star">2 reviews</p>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">★</span>
              <span class="star">☆</span>
              <span class="star">☆</span>
            </div>
            <p class="book-date">22/12/2022</p>
          </div>
        </div>
     
    </div>

    <arrow-right @click="acresentar" size="32" class="arrow-icon-card" />
  </div>
</template>
<style scoped>
.heart-icon {
  color: white;
  margin-top: 0.6vw;
  right: 1vw;
}
.favorite-icon {
  margin-left: 21vw;
  margin-top: 1vw;
  position: absolute;
  background-color: #bf5a5a;
  border-radius: 50%;
  width: 2.5vw;
  height: 5.2vh;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #bf5a5a;
  border-radius: 50%;
}


.arrow-icon-card {
  margin-top: 35vh;
  color: #bf5a5a;
}

.review-star {
  color: #696969;

  font-family: Poppins;
  font-size: 1vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  margin-left: 24vh;
  margin-top: 2.7vh;
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
  width: 35vw;
  height: 35vh;
  object-fit: cover;
}

.book-card {
  margin: 3vw;
  height: 72vh;
  width: 25vw;
  border: 0.2vh solid #f1dce0;
  border-radius: 1vw;
  overflow: hidden;
  margin-bottom: 6vw;
}

.book-info {
  padding: 1vw;
}

.book-title {
  margin-top: 0.3vh;
  margin-left: 1.5vw;
  color: #111;
  font-family: Poppins;
  font-size: 3.2vh;
}

.book-author {
  color: #696969;
  margin-left: 1.4vw;
  font-family: Poppins;
  font-size: 2.2vh;
}

.book-rating {
  margin-top: 1.3vh;
  margin-left: 2vh;
}

.star {
  color: #ffd748;
  font-size: 2.6vw;
}

.book-date {
  color: #000;
  font-family: Poppins;
  font-size: 2.5vh;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: inline-flex;
  padding: 1.8vh 2.5vh;
  align-items: center;
  gap: 4vh;
  border-radius: 0.8vw;
  border: 0.1vh solid #ecbac4;
  margin-left: 3vh;
  margin-top: 1.8vw;
}




</style>