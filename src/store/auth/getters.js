export const accessToken = state => {
  return state.token;
};

export const loggedIn = state => {
  return state.token !== null;
};

export const user = state => {
  return state.user;
};
