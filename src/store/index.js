import { createStore } from "vuex";

import resumes from "./resumes/index.js";

const store = createStore({
  modules: {
    resumes: resumes,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
      console.log('isLoggedIn: ' + state.isLoggedIn);
    },
    logout(state) {
      state.isLoggedIn = false;
      console.log('isLoggedIn: ' + state.isLoggedIn);
    },
  },
});

export default store;
