<template>
  <main class="container">
    <form action="#" @submit.prevent="prepareLogin">
      <h2 :class="validationError && 'auth-error'">
        {{ validationError ? validationError : "Login" }}
      </h2>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" />
      </div>

      <div>
        <label for="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
        />
      </div>

      <div>
        <button type="submit">Entrar</button>
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data: () => ({
    email: "",
    password: "",
    validationError: "",
  }),
  watch: {
    validationError() {
      setTimeout(() => {
        this.validationError = "";
      }, 2000);
    },
  },
  methods: {
    ...mapActions("auth", ["retrieveToken"]),
    prepareLogin() {
      this.retrieveToken({ email: this.email, password: this.password }).then(
        (response) => {
          if (response?.status !== 401) {
            this.$router.push({ name: "Main" });
            return;
          }
          this.validationError = response.message;
        }
      );
    },
  },
};
</script>
<style scoped src="./styles/index.css" />
