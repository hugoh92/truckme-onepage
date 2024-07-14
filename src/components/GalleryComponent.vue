<template>
  <section id="gallery" class="gallery">
    <img
      v-for="(image, index) in images"
      :src="image"
      :key="index"
      :class="{ active: currentImageIndex === index }"
      alt="Galeria de Imagens"
    />
    <div>
      <button @click="prevImage">Anterior</button>
      <button @click="nextImage">Próximo</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentImageIndex: 0,
      images: [
        require("@/assets/imgs/img-carrosel (1).jpeg"),
        require("@/assets/imgs/img-carrosel (2).jpeg"),
        require("@/assets/imgs/img-carrosel (3).jpeg"),
      ],
    };
  },
  methods: {
    showImage(index) {
      this.currentImageIndex = index;
    },
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    autoSlide() {
      this.nextImage();
      setTimeout(this.autoSlide, 3000);
    },
  },
  mounted() {
    this.autoSlide();
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
.gallery img {
  max-width: 100%;
  max-height: 400px;
  display: none;
}
.gallery img.active {
  display: block;
}

.gallery button {
  margin: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
</style>
