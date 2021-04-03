import store from "../../../store";

export default (to, from, next) => {
  if (store().getters["auth/isAuthenticated"]) {
    next();
  } else {
    next({ name: "Login" });
  }
};
