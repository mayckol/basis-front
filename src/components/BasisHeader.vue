<template>
  <header class="container">
    <router-link v-if="!isAuthenticated" to="/">Home</router-link>
    <router-link v-if="isAuthenticated" :to="{ name: 'Main' }">Home</router-link>
    <span v-if="authUser">Olá, {{ authUser.name }}</span>
    <router-link v-if="!isAuthenticated" :to="{ name: 'Login' }">Entrar</router-link>
    <router-link v-if="!isAuthenticated" :to="{ name: 'Register' }"
    >Registrar
    </router-link
    >
    <router-link v-if="isAuthenticated" :to="{ name: 'Logout' }">Sair</router-link>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BasisHeader",
  computed: {
    ...mapGetters("auth", ["isAuthenticated", "authUser"]),
  }
};
</script>

<style scoped src="../styles/layout/header.css" />
