<template>
  <div>
    <BasisHeader />
    <router-view />
    <BasisFooter />
  </div>
</template>
<script>
import BasisHeader from "./components/BasisHeader.vue";
import BasisFooter from "./components/BasisFooter.vue";

export default {
  components: { BasisFooter, BasisHeader },
  computed: {},
};
</script>

<style src="../src/styles/index.css" />
