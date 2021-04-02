import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Auth/Login.vue";
import Register from "../components/Auth/Register.vue";
import Logout from "../components/Auth/Logout.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: { name: "Login" }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
