<script setup>
import CardGeral from '../components/LivrosComponents/CardGeralComponent.vue'
import ScrollBar from '../components/LivrosComponents/ScrollBarComponent.vue'
import TitlePopulares from '../components/LivrosComponents/TitlePopularesComponent.vue'
import TitleFavoritos from '../components/LivrosComponents/TitleFavoritosComponent.vue'

</script>

<template>
    <TitlePopulares />
    <CardGeral />
    <ScrollBar />
    <TitleFavoritos />
    <CardGeral />
    <ScrollBar />
</template>

<style scoped>
</style>