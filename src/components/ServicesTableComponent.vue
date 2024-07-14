<template>
  <section id="services" class="services">
    <h2>Serviços</h2>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Transporte Rápido</td>
          <td>Serviço de transporte de cargas pesadas.</td>
          <td>R$ 300,00</td>
        </tr>
        <tr>
          <td>Transporte de Carga</td>
          <td>Serviço de transporte expresso.</td>
          <td>R$ 500,00</td>
        </tr>
        <tr>
          <td>Frete Internacional</td>
          <td>Serviço de transporte para fora do país.</td>
          <td>R$ 1000,00</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.services {
  padding: 200px 20px;
}
.services table {
  margin: 0 auto;
  width: 80%;
  border-collapse: collapse;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
table,
th,
td {
  border: 1px solid #ddd;
}
th,
td {
  padding: 15px;
  text-align: left;
}
</style>
