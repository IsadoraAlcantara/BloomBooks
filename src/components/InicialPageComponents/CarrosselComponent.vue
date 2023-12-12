<script setup>
import { ref, onMounted } from 'vue'

// icon
import Magnify from 'vue-material-design-icons/Magnify.vue'

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

onMounted(() => {
  setInterval(() => {
    nextSlide()
  }, 2000)
})
</script>

<template>
  <div class="LadoForm">
    <div class="Carrossel">
      <div
        class="Slide"
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: index === currentIndex }"
      >
        <img class="ImgC" :src="image" alt="Carrossel Image" />
      </div>
      <div class="titulo">
        <p>BloomBooks</p>
      </div>

      <div class="search">
        <div class="search-bar">
          <input
            type="text"
            v-model="search"
            placeholder="Find Something..."
            class="search-input"
          />
          <Magnify size="22" class="search-button" />
        </div>
      </div>

      <div>
        <span
          v-for="(image, index) in images"
          :key="index"
          class="indicator"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Carrossel {
  position: relative;
  width: 97vw;
  height: 80vh;
  overflow: hidden;
  margin: 4vw 5vw 4vw 2vw;
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

input::placeholder {
  color: #ffffff;
}

.search {
  margin-right: 60vh;
}

.search-bar {
  display: flex;
  align-items: center;
  border-radius: 3vw;
  padding: 0.8vw;
  margin-top: 8vw;
  color: white;
  border: 0.1vw solid white;
  position: absolute;
  text-decoration: none;
}

.search-input {
  flex-grow: 1;
  margin-left: 2vw;
  margin-right: 15vw;
  font-family: poppins;
  background-color: transparent;
}

.search-button {
 
  color: #ffffff;
  cursor: pointer;
  position: absolute;
  text-decoration: none;
  margin-top: 0.6vh;
}


.titulo {
  color: #bf5a5a;
  font-family: 'Pinyon Script', cursive;
  font-size: 16vw;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
}
</style>
