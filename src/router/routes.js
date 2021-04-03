import middleware from "./middleware";
import Register from "../components/Auth/Register.vue";
import Logout from "../components/Auth/Logout.vue";
import Main from "../views/Main.vue";
import Login from "../components/Auth/Login.vue";

export default [
  {
    path: "/",
    name: "Home",
    redirect: { name: "Login" },
    beforeEnter: middleware.guest,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: middleware.guest,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: middleware.guest,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
    beforeEnter: middleware.user,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    beforeEnter: middleware.user,
  },
];
