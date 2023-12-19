import { createStore } from "vuex";

import resumes from "./resumes/index.js";

const store = createStore({
  modules: {
    resumes: resumes,
  },
  state() {
    return {
      isLoggedIn: false,
      currendResumeId: "01",
      // monthsOfyear: 1,
      monthsOfyear: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
    getCurrendResumeId(state) {
      return state.currendResumeId;
    },
    getMonths(state) {
      return state.monthsOfyear;
    },
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
      console.log("isLoggedIn: " + state.isLoggedIn);
    },
    logout(state) {
      state.isLoggedIn = false;
      console.log("isLoggedIn: " + state.isLoggedIn);
    },
  },
});

export default store;
