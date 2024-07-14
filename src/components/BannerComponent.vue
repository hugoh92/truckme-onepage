<template>
  <div class="banner">
    <div class="text-banner">
      <span>Bem-vindo à TruckMe</span>
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
  background: url("@/assets/imgs/img-carrosel (1).jpeg") no-repeat center
    center/cover;
  color: #fff;
  padding: 300px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-shadow:
    2px 2px 4px red,
    -2px -2px 4px blue;
  opacity: 0.9;
}

.text-banner {
  max-width: 1000px;
}
.banner h1 {
  font-size: 3em;
  margin: 0;
}
p {
  font-size: 25px;
  color: #fff;
}
span {
  font-size: 80px;
  font-weight: 600;
}
@media (max-width: 768px) {
  .banner {
    background: url("@/assets/banner2.jpeg") no-repeat center center/cover;
    opacity: 0.9;
  }

  .banner h1 {
    font-size: 2.5em;
  }
  p {
    font-size: 20px;
  }

  span {
    font-size: 50px;
  }

  .services table {
    width: 100%;
  }
}
</style>
