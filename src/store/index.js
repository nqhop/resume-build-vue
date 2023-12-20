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
      years: [
        2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
        2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
        2025,
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
    getYears(state) {
      return state.years;
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
