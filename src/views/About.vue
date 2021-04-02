<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import api from "../service/api";

export default {
  name: "Main",
  data: () => ({
    tasks: [],
  }),
  mounted() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      api
        .get("/tasks")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          // reject(error);
        });
    },
  },
};
</script>
