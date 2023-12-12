<template>
  <div class="main">
    <p class="title">Personal Details</p>

    <div class="row">
      <div class="col-half">
        <v-text-field
          label="Job Title"
          color="primary"
          placeholder="e.g. Java developer"
          v-model="jobtitle"
        >
        </v-text-field>
      </div>

      <div class="col-half upload-image">
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Pick an avatar"
          prepend-icon="mdi-camera"
          label="Avatar"
        ></v-file-input>
      </div>
    </div>

    <div class="row">
      <div class="col-half">
        <v-text-field label="First Name" color="primary"> </v-text-field>
      </div>

      <div class="col-half">
        <v-text-field label="Last Name" color="primary"> </v-text-field>
      </div>
    </div>

    <div class="row">
      <div class="col-half">
        <v-text-field label="Email" color="primary"> </v-text-field>
      </div>

      <div class="col-half">
        <v-text-field label="Phone" color="primary"> </v-text-field>
      </div>
    </div>

    <div class="row">
      <div class="col-half">
        <v-text-field label="Country" color="primary"> </v-text-field>
      </div>

      <div class="col-half">
        <v-text-field label="City" color="primary"> </v-text-field>
      </div>
    </div>

    <v-text-field
      label="Main input"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>

    <p class="title">Professional Summary</p>
    <v-textarea label="Label" variant="solo-filled"></v-textarea>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) => {
        return (
          !value ||
          !value.length ||
          value[0].size < 2000000 ||
          "Avatar size should be less than 2 MB!"
        );
      },
    ],
    jobtitle: "",
  }),
  watch: {
    jobtitle(value) {
      console.log("jobTitle: " + value);
      this.$store.commit("resumes/setjobtitle", {
        jobtitle: this.jobtitle,
      });

      console.log("getjobtitle" +this.$store.getters['resumes/getjobtitle'])
    },
  },
};
</script>

<style scoped>
.main {
  margin-top: 16px;
  padding: 0 16px;
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
.upload-image {
  display: flex;
  float: right;
}
.title {
  font-size: 22px;
  margin: 8px 0px;
}
</style>
