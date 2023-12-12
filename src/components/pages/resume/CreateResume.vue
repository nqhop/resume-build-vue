<template>
  <div class="wrapper">
    <div class="left-right">
      <div class="left">
        <resume-info />
      </div>

      <div class="right">
        <!-- <template-vue/> -->
        <template-2-vue />

        
      </div>
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
};
</script>

<style>
.wrapper .left,
.wrapper .right {
  display: inline-block;
}
.left,
.right {
  width: 50%;
}
.left-right{
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
}
</style>
