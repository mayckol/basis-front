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

export function submitNewTask({ commit }, payload) {
  return new Promise((resolve) => {
    api
      .post("/tasks", payload)
      .then((response) => {
        commit("setNewTask", response.data);
        resolve(response.data);
      })
      .catch((error) => {
        resolve({ message: error, status: 422 });
      });
  });
}

export function updateTask({ commit }, payload) {
  return new Promise((resolve) => {
    api
      .put("/tasks", payload)
      .then((response) => {
        commit("updateTask", response.data);
        resolve(response.data);
      })
      .catch((error) => {
        resolve({ message: error, status: 422 });
      });
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
