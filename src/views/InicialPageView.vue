<script>
import { ref, onMounted } from 'vue';
const images = ref([
    'https://i.pinimg.com/564x/ae/94/33/ae9433deee62f6ab97970b0b5d1fe8dd.jpg',
    'https://i.pinimg.com/736x/84/c9/70/84c970b054e4a775fef5a878eff249a7.jpg',
    'https://i.pinimg.com/564x/0b/9a/13/0b9a13919760215ad5617beb2500cd18.jpg'

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
    <div class="carousel">
        <div class="Slide" v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }">
            <img class="ImgC" :src="image" alt="Carousel Image">
        </div>
        <div class="Indicators">
            <span v-for="(image, index) in images" :key="index" class="indicator"
                :class="{ active: index === currentIndex }" @click="goToSlide(index)"></span>
        </div>
    </div>
</template>

<style scoped>
.carousel {
    position: relative;
    width: 50vw;
    height: 100vh;
    overflow: hidden;
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
    background-color: #40140A;
    cursor: pointer;
}

.indicator.active {
    background-color: #40140A;
    width: 13px;
    height: 13px;
}
</style>