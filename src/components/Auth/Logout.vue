<template><span /></template>
<script>
import { mapActions } from "vuex";

export default {
  created() {
    this.destroyToken().then(() => {
      this.$router.push({ name: "Home" });
    });
  },
  methods: {
    ...mapActions("auth", ["destroyToken"]),
  },
};
</script>
