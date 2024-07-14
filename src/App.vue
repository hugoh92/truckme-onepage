<template>
  <div id="app">
    <HeaderComponent />
    <BannerComponent />
    <AboutComponent />
    <ServicesTableComponent />
    <ContactFormComponent />
    <GalleryComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import BannerComponent from "./components/BannerComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import ServicesTableComponent from "./components/ServicesTableComponent.vue";
import ContactFormComponent from "./components/ContactFormComponent.vue";
import GalleryComponent from "./components/GalleryComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    ServicesTableComponent,
    ContactFormComponent,
    GalleryComponent,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
section {
  padding: 50px 20px;
  text-align: center;
}

button {
  padding: 15px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

button:hover {
  background-color: #575757 !important;
}
</style>
