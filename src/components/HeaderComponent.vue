<template>
  <header>
    <img src="@/assets/logo-header.png" alt="TruckMe Logo" />
    <nav :class="{ 'nav-active': navActive }">
      <a href="#home" @click="toggleNav">Home</a>
      <a href="#about" @click="toggleNav">Sobre</a>
      <a href="#services" @click="toggleNav">Serviços</a>
      <a href="#contact" @click="toggleNav">Contato</a>
    </nav>
    <div class="hamburger" @click="toggleNav">
      <div class="line" v-for="n in 3" :key="n"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      navActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.navActive = !this.navActive;
    },
  },
};
</script>

<style scoped>
header {
  background-color: #ffffff;
  color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 19px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

nav {
  display: flex;
}

nav a {
  color: #333;
  margin-left: 15px;
  text-decoration: none;
  padding: 10px;
}

header img {
  height: 60px;
}

nav a:hover {
  background-color: rgb(252, 99, 38);
  border-radius: 5px;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  cursor: pointer;
}

.hamburger .line {
  width: 30px;
  height: 3px;
  background-color: #333;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  nav {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #fff;
    flex-direction: column;
    align-items: center;
    transform: translateY(-200%);
    transition: transform 0.3s ease-in-out;
    z-index: 999;
  }

  nav a {
    margin: 10px 0;
  }

  nav.nav-active {
    transform: translateY(0);
  }
}
</style>
