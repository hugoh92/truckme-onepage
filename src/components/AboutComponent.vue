<template>
  <section id="about" class="about">
    <div class="text-about">
      <h2>Sobre nós</h2>
      <p class="about-text">
        A TruckMe é uma empresa dedicada a fornecer serviços de transporte de
        qualidade. Nossa missão é oferecer soluções logísticas eficientes e
        seguras para nossos clientes.
        <br />
        <span v-if="showMore" class="more-text"
          >Através do nosso Aplicativo para transportadores, divulgamos as
          melhores ofertas de cargas, sem intermediação, comissionamento ou
          taxas. Cuidamos da burocracia e lhe ajudamos a encontrar as melhores
          ofertas de cargas, permitindo-lhes o poder da negociação do frete,
          direto com o Embarcador.Seja nosso parceiro, aproveite as ofertas de
          fretes e faça parte da mudança.</span
        >
      </p>

      <button @click="toggleReadMore">
        {{ showMore ? "Leia menos" : "Leia mais" }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
    };
  },
  methods: {
    toggleReadMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<style scoped>
.about {
  background-color: #fa4800;
  padding: 200px 20px;
}
p {
  width: 1000px;
  margin: 20px auto;
}
</style>
