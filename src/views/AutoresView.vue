<script>
</script>

<template>

   <div class="card-geral">
   
    <div v-for="index in 5" :key="index">
      <div class="card">
    <div class="row">
      <div class="col-4">
          <img
            class="img-card"
            src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg"
            alt="Capa do livro"
          />
        </div>
      <div class="col-8">
    
        <p class="livro-titulo">Clarice Lispector</p>
        <p class="autor">autor</p>
        <div class="datas">
        <p class="data-nasc">data nasc</p>
        <p class="data-mort">data mort</p>
    </div>
      </div>
    </div>
  </div>
  </div>
  

  <div class="card">
    <div class="row">
      <div class="col-4">
          <img
            class="img-card"
            src="https://i.pinimg.com/564x/81/b4/1b/81b41bf0249a52da787cb0b26f08214d.jpg"
            alt="Capa do livro"
          />
        </div>
      <div class="col-8">
    
        <p class="livro-titulo">Clarice Lispector</p>
        <p class="autor">autor</p>
        <div class="datas">
        <p class="data-nasc">data nasc</p>
        <p class="data-mort">data mort</p>
    </div>
      </div>
    </div>
  </div>

</div>


        
     
  
    

</template>

<style scoped>
.card-geral{
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  margin-right:2vw;
  margin-left: 2vw;
}

.row{
    display: flex;
  

}

.datas{
    color: #BF5A5A;
position: absolute;
font-family: poppins;
font-size: 1vw;

}
.autor{
    color: #BF5A5A;

font-family: poppins;
font-size: 1.6vw;
margin-bottom: 80px;
}
.img-autor{
    width: 45.197px;
height: 42px;
border-radius: 45.197px;

}



.livro-titulo{
    color: rgb(77, 77, 77);
margin-top: 10px;
font-family: poppins;
font-size: 24px;
font-style: normal;
font-weight: 600;
}

.img-card{
    width: 280px;
height: 210px;
border-radius: 20px;
object-fit: cover;
}


.card {
    margin-left: 30px;
    margin-top: 100px;
    border-radius: 20px;
border: 1px solid #f1d6db;
 
  width: 580px;
height: 230px;

}

.col-4, .col-8 {
  padding: 10px;
}

</style>