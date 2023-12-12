<script setup>
import Instagram from 'vue-material-design-icons/Instagram.vue'
import Facebook from 'vue-material-design-icons/Facebook.vue'
import Twitter from 'vue-material-design-icons/Twitter.vue'
import linkedin from 'vue-material-design-icons/Linkedin.vue'

</script>
<template>
  <div class="footer">
    <div class="logo">
      <img
        class="logo-footer"
        size="25"
        src="https://i.ibb.co/m0JgwQf/Black-and-Beige-Elegant-Simple-Modern-Typography-Logo-1-1-removebg-preview-1.png"
      />
      <p class="frase-footer">Fique por dentro de todas as novidades</p>
      <p class="frase-footer2">literárias aqui, livros e autores de qualidade.</p>
    </div>
    <div class="social-icons">
      <facebook size="22" class="icon" />
      <twitter size="22" class="icon" />
      <instagram size="22" class="icon" />
      <linkedin size="22" class="icon" />
    </div>
    <div class="decoration-line-footer"></div>
    <div class="footer-links">
      <RouterLink to="/"> INÍCIO </RouterLink>
      <RouterLink to="/livros"> LIVROS </RouterLink>
      <RouterLink to="/autores"> AUTORES </RouterLink>
      <RouterLink to="/generos"> GÊNERO </RouterLink>
      <RouterLink to="/categorias"> CATEGORIAS</RouterLink>
    </div>
  </div>
</template>
<style scoped>
.frase-footer {
  margin-top: 2vw;
  color: rgba(255, 255, 255, 0.5);

  text-align: center;
  font-family: Poppins;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.frase-footer2 {
  color: rgba(255, 255, 255, 0.5);

  text-align: center;
  font-family: Poppins;
  font-size: 1.4vw;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 2vw;
}

.footer {
  margin-top: 6vw;
  background-color: #bf5a5a;
  color: white;
  padding: 0.2vw;
  text-align: center;
}

.logo {
  margin: 3vw;
}

.logo-footer {
  width: 14vw;
  height: 10vh;
  margin-top: 1vw;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1vw;
  margin-bottom: 5vw;
  margin-top: 1vw;
  display: inline-flex;
  align-items: flex-start;
  gap: 1vw;
}

.footer-links  {
  display: flex;
  justify-content: center;
  gap: 0.3vw;
  margin-bottom: 2vw;
 
  display: inline-flex;
  align-items: flex-start;
  gap: 8vw;
  font-family: Poppins;
  font-size: 2vh;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
}

.footer-links a {
    color: #fff;
    text-decoration: none;
}

.decoration-line {
  width: 140vw;
  height: 0.1vh;
  flex-grow: 1;
  background: #bf5a5a;
  margin-left: 6vw;
  margin-top: 1vw;
}

.decoration-line-footer {
  width: 50vw;
  margin-bottom: 2vw;
  height: 0.1vh;
  flex-grow: 1;
  background: #ffffff;
  width: 100%;
}


</style>