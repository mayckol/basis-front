<template>
  <main class="container">
    <div class="wrapper">
      <img v-if="!modeEdit" src="../assets/todo-img.png" />
      <img
        @click="prepareAddScreen"
        class="clickable"
        v-else
        src="../assets/add.jpg"
      />
      <small class="editTitle" v-if="modeEdit"
        >Para adicionar uma nova tarefa clique na imagem acima</small
      >
      <h1 v-if="!modeEdit">Lista de atividades</h1>
      <h1 class="editTitle" v-else>Editar atividade</h1>
      <form action="#" @submit.prevent="prepareSubmit">
        <input class="title" placeholder="Título" type="text" v-model="title" />
        <textarea v-model="obs" placeholder="Obs" cols="15" />

        <div class="wrapper-group">
          <span class="input-group">
            <input type="radio" id="one" :value="1" v-model="status" />
            <label for="one">A fazer</label>
          </span>
          <span class="input-group">
            <input type="radio" id="two" :value="2" v-model="status" />
            <label for="two">Em andamento</label>
          </span>
          <span class="input-group">
            <input type="radio" id="three" :value="3" v-model="status" />
            <label for="two">Concluído</label>
          </span>
        </div>
        <button v-if="!modeEdit">Adicionar</button>
        <button class="btnEdit" v-else>Editar</button>
        <div class="scrollable">
          <table>
            <tr>
              <th>Título</th>
              <th>Obs</th>
              <th>Estado</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
            <tr v-for="task in tasks" :key="task.id">
              <td>{{ task.title }}</td>
              <td>{{ task.obs }}</td>
              <td>{{ task.status }}</td>
              <td>
                <span class="editable" @click="() => prepareEditScreen(task)">
                  <img src="../assets/edit.jpg" alt="icon edit" />
                </span>
              </td>
              <td>
                <span @click="() => deleteTask(task.id)">
                  <img src="../assets/delete.jpg" alt="icon delete" />
                </span>
              </td>
            </tr>
          </table>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Main",
  data: () => ({
    modeEdit: false,
    status: 1,
    title: "",
    obs: "",
    id: "",
  }),
  mounted() {
    this.getTask();
  },
  computed: {
    ...mapState("user", ["tasks"]),
  },
  methods: {
    ...mapActions("auth", ["retrieveToken"]),
    ...mapActions("user", [
      "getTask",
      "submitNewTask",
      "updateTask",
      "destroyTask",
    ]),
    prepareSubmit() {
      const sendData = {
        task_type_id: 2 /*will be use with default... not implement yet TODO*/,
        title: this.title,
        status: this.status,
        obs: this.obs,
      };
      if (!this.modeEdit) {
        this.submitNewTask(sendData).then(() => this.clearInputs());
        return;
      }
      sendData.id = this.id;
      this.updateTask(sendData);
    },
    prepareEditScreen({ status, title, obs, id }) {
      this.modeEdit = true;
      this.status = status;
      this.title = title;
      this.obs = obs;
      this.id = id;
    },
    prepareAddScreen() {
      this.modeEdit = false;
      this.clearInputs();
    },
    deleteTask(id) {
      this.destroyTask(id);
    },
    clearInputs() {
      this.title = "";
      this.obs = "";
    },
  },
};
</script>

<style scoped src="../styles/main/index.css" />
