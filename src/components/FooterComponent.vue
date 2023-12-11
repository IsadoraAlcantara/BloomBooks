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
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.5);

  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.frase-footer2 {
  color: rgba(255, 255, 255, 0.5);

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
  background-color: #bf5a5a;
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

.footer-links  {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  padding-top: 10px;
  display: inline-flex;
  align-items: flex-start;
  gap: 100px;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
}

.footer-links a {
    color: #fff;
    text-decoration: none;
}

.decoration-line {
  width: 842.087px;
  height: 1px;
  flex-grow: 1;
  background: #bf5a5a;
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


</style>