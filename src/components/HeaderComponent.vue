<template>
  <header>
    <img src="@/assets/logo-header.png" alt="TruckMe Logo" />
    <nav>
      <a href="#home">Home</a>
      <a href="#about">Sobre</a>
      <a href="#services">Serviços</a>
      <a href="#contact">Contato</a>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 19px;
}
header img {
  height: 50px;
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
nav a:hover {
  background-color: rgb(252, 99, 38);
  border-radius: 5px;
}
</style>
