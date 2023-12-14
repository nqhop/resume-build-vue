<template>
  <div class="wrapper">
    <div class="scrolled-heighted-box-left redbox wrapper-left">
      <resume-info />
    </div>
    <div class="scrolled-heighted-box redbox wrapper-right">
      <template-2-vue />
    </div>
  </div>
</template>

<script>
import templateVue from "../template/template.vue";
import ResumeInfo from "./ResumeInfo.vue";
import Template2Vue from "../template/Template2.vue";
export default {
  components: { ResumeInfo, templateVue, Template2Vue },

  data: () => ({
    // right
    trip: {
      name: "",
      location: null,
      start: null,
      end: null,
    },
    locations: [
      "Australia",
      "Barbados",
      "Chile",
      "Denmark",
      "Ecuador",
      "France",
    ],
  }),
  methods: {
    getUserName(){
        console.log("resume/userName " + this.$store.getters['resumes/userName']);
        console.log("resume/userName " + this.$store.getters.userName);

        this.$store.commit('login');
        console.log("userIsAuthenticated:"+this.$store.getters.userIsAuthenticated);
    }

  },
  created() {
    this.getUserName();
  },
};
</script>

<style scoped>
.wrapper {
  margin-top: 65px;
  display: inline-block;
  width: 100%;
}
.list-item {
  height: 100px;
  border: 1px solid grey;
}
.scrolled-heighted-box-left {
  overflow-y: scroll;
  overflow-x: hidden;
  display: inline-block;
}
.scrolled-heighted-box {
  overflow-y: scroll;
  overflow-x: hidden;
  display: inline-block;
  height: 100vh;
}

.redbox {
  border: 2px solid red;
}
.wrapper-left,
.wrapper-right {
  width: 50%;
}
.wrapper-right {
  right: 0;
  position: fixed;
}
/* 
.wrapper .left,
.wrapper .right {
  display: inline-block;
}
.left,
.right {
  width: 50%;
}
.left-right {
  margin-top: 30px;
}
.row {
  margin: 0 -16px;
}
.col-half {
  display: inline-block;
  width: 50%;
  padding: 0 16px;
}
.left {
  padding: 32px;
}
.right {
  display: flex;
  float: right;
  height: 100vh;
  padding-right: 32px;
}

.upload-image {
  display: flex;
  float: right;
}
.title {
  font-size: 22px;
  margin-bottom: 8px;
} */
</style>
