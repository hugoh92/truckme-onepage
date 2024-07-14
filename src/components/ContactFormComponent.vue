<template>
    <section id="contact" class="contact">
      <h2>Contato</h2>
      <form @submit.prevent="validateForm">
        <input type="text" v-model="name" placeholder="Nome" required>
        <input type="email" v-model="email" placeholder="E-mail" required>
        <textarea v-model="message" placeholder="Mensagem" rows="5" required></textarea>
        <button type="submit">Enviar</button>
        <div v-if="successMessage" class="success-message">Mensagem enviada com sucesso!</div>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        successMessage: false
      }
    },
    methods: {
      validateForm() {
        if (this.name && this.email && this.message) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailPattern.test(this.email)) {
            this.successMessage = true;
            setTimeout(() => {
              this.successMessage = false;
            }, 5000);
            this.name = '';
            this.email = '';
            this.message = '';
          } else {
            alert('Por favor, insira um endereço de e-mail válido.');
          }
        } else {
          alert('Por favor, preencha todos os campos.');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .contact {
    background-color: #fa4800;
    padding: 200px 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
  }
  input, textarea {
    margin-bottom: 10px;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
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
    background-color: #575757;
  }
  .success-message {
    display: none;
    color: green;
    margin-top: 10px;
  }
  </style>
  