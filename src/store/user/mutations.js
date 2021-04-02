export const setTask = (state, payload) => {
  state.tasks = payload;
};
export const setNewTask = (state, task) => {
  state.tasks = [...state.tasks, task];
};
export const updateTask = (state, task) => {
  state.tasks = [...state.tasks.filter((t) => t.id !== task.id), task];
};
export const deleteTask = (state, id) => {
  state.tasks = [...state.tasks.filter((t) => t.id !== id)];
};
