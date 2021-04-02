<template>
  <header class="container">
    <router-link v-if="!loggedIn" to="/">Home</router-link>
    <router-link v-if="loggedIn" :to="{ name: 'Main' }">Home</router-link>
    <span v-if="userName">Olá, {{ userName }}</span>
    <router-link v-if="!loggedIn" :to="{ name: 'Login' }">Entrar</router-link>
    <router-link v-if="!loggedIn" :to="{ name: 'Register' }"
    >Registrar
    </router-link
    >
    <router-link v-if="loggedIn" :to="{ name: 'Logout' }">Sair</router-link>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BasisHeader",
  computed: {
    ...mapGetters("auth", ["loggedIn", "user", "user"]),
    ...mapGetters("user", ["userName"]),
  }
};
</script>

<style scoped src="../styles/layout/header.css" />
