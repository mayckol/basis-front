import api from "../../service/api";

export async function getTask({ commit }, payload) {
  api
    .get("/tasks", payload)
    .then((response) => {
      commit("setTask", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function submitNewTask({ commit }, payload) {
  api
    .post("/tasks", payload)
    .then((response) => {
      commit("setNewTask", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function updateTask({ commit }, payload) {
  api
    .put(`/tasks/${payload.id}`, payload)
    .then((response) => {
      commit("updateTask", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function destroyTask({ commit }, id) {
  api
    .delete(`/tasks/${id}`)
    .then(() => {
      commit("deleteTask", id);
    })
    .catch((error) => {
      console.log(error);
    });
}
