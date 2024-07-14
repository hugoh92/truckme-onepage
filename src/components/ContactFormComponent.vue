<!-- <template>
  <section id="contact" class="contact">
    <h2>Contato</h2>
    <form @submit.prevent="validateForm">
      <input type="text" v-model="name" placeholder="Nome" required />
      <input type="email" v-model="email" placeholder="E-mail" required />
      <textarea
        v-model="message"
        placeholder="Mensagem"
        rows="5"
        required
      ></textarea>
      <button type="submit">Enviar</button>
      <div v-if="successMessage" class="success-message">
        Mensagem enviada com sucesso!
      </div>
    </form>
  </section>
</template> -->

<template>
  <section id="contact" class="contact">
    <h2>Contato</h2>
    <form @submit.prevent="validateForm">
      <input
        type="text"
        name="name"
        placeholder="Nome"
        v-model="name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        v-model="email"
        required
      />
      <textarea
        name="message"
        placeholder="Mensagem"
        rows="5"
        v-model="message"
        required
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </section>
</template>

<script>
export default {
  name: "ContactFormComponent",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      successMessage: "",
    };
  },
  methods: {
    validateForm() {
      if (!this.name || !this.email || !this.message) {
        alert("Por favor, preencha todos os campos.");
        return false;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
      }

      this.successMessage = "Sua mensagem foi enviada com sucesso!";
      setTimeout(() => {
        this.successMessage = "";
      }, 5000);

      this.resetForm();
      return true;
    },
    resetForm() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
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
input,
textarea {
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
  color: #333;
  font-weight: bold;
  margin-top: 10px;
}

@media (max-width: 768px) {
  section {
    padding: 20px 10px;
  }

  .contact {
    padding: 100px 20px;
  }
}
</style>
