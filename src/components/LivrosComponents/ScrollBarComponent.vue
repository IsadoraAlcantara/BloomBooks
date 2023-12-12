<script setup>
</script>
<template>
  <div class="scroll-bar">
    <div class="scroll-thumb" :style="{ left: scrollPosition + '%' }"></div>
  </div>
</template>
<style scoped>
.scroll-bar {
  position: relative;
  width: 100%;
  height: 2vh;
  background: #eee2e4;
  margin-bottom: 5vw;
}
.scroll-thumb {
  position: absolute;
  top: 0;
  width: 33%;
  height: 100%;
  background: #da9b9b;
  border-radius: 2vw;
}
</style> 