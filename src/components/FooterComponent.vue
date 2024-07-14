<template>
  <footer>
    <img src="@/assets/logo-footer.png" alt="TruckMe Logo" />
    <p>&copy; 2024 TruckMe. Todos os direitos reservados.</p>
    <p>Email: <a href="mailto:contato@truckme.com">contato@truckme.com</a></p>
    <p>Telefone: (11) 1234-5678</p>
    <p>Via Urbana, Km. 1 CIA SUL Simões Filho/BA</p>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">Sobre</a>
      <a href="#services">Serviços</a>
      <a href="#contact">Contato</a>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}
footer img {
  height: 50px;
  margin-bottom: 10px;
}
footer p,
footer a {
  color: #fff;
  margin: 5px 0;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}
img {
  height: 150px !important;
}

nav a {
  margin-left: 5px;
  text-decoration: none;
  padding: 5px;
  color: #fa4800;
}
</style>
