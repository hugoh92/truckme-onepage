<template>
  <div class="banner">
    <div class="text-banner">
      <h1>Bem-vindo à TruckMe</h1>
      <p>
        A TruckMe é uma transportadora 100% digital, somos frutos da uberização
        de serviços. Nossa solução inteligente surgiu devido a necessidade de
        inovação e agilidade no modelo tradicional dos processos de frete,
        objetivando dinamizar o dia a dia dos nossos clientes e trazer muito
        mais economia.
      </p>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background: url("@/assets/banner.png") no-repeat center center/cover;
  color: #fff;
  padding: 300px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
}
.text-banner {
  max-width: 1000px;
}
.banner h1 {
  font-size: 3em;
  margin: 0;
}
@media (max-width: 768px) {
  .banner {
    background: url("@/assets/banner2.jpeg") no-repeat center center/cover;
    opacity: 1;
  }

  .banner h1 {
    font-size: 2em;
  }

  .services table {
    width: 100%;
  }
}
</style>
