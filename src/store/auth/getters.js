export const isAuthenticated = (state) => {
  return state.token !== null && localStorage.getItem("access_token");
};

export const authUser = (state) => {
  return state.user;
};
