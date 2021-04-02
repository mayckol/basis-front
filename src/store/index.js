import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import user from "./user";

Vue.use(Vuex);
export default function () {
  const Store = new Vuex.Store({
    modules: {
      auth,
      user,
    },
    strict: process.env.DEV,
  });

  return Store;
}
