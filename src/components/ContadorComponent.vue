<script setup>
import { mapActions, storeToRefs } from 'pinia'
import { useContadorStore } from '../stores/contadorVezesLida'

const contador = useContadorStore()

const { counter } = storeToRefs(contador)

const { increment } = mapActions(useContadorStore, ['increment'])

</script>
<template>
  <div>
    <button class="bt-lido" type="button" @click="increment">Vezes lido {{ counter }}</button>
  </div>
</template>
<style scoped>
.bt-lido {
    margin:  0 0 0 1.3vw;
    font-family: Proppins;
    background: none;
    color: black;
    padding: 1vh;
    border-radius: 1vh;
    border: solid 0.2vh #da9b9b;
}
</style>
