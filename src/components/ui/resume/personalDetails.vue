<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <template v-slot:default>
          <v-row no-gutters>
            <v-col cols="4" class="d-flex justify-start text-h5">
              Personal Details</v-col
            >
            <v-col cols="8" class="text-grey"> </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <div class="main">
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
                v-model="avatar"
              ></v-file-input>
            </div>
          </div>

          <div class="row">
            <div class="col-half">
              <v-text-field
                label="First Name"
                color="primary"
                v-model="firstName"
              >
              </v-text-field>
            </div>

            <div class="col-half">
              <v-text-field
                label="Last Name"
                color="primary"
                v-model="lastName"
              >
              </v-text-field>
            </div>
          </div>

          <div class="row">
            <div class="col-half">
              <v-text-field label="Email" color="primary" v-model="email">
              </v-text-field>
            </div>

            <div class="col-half">
              <v-text-field label="Phone" color="primary" v-model="phoneNumber">
              </v-text-field>
            </div>
          </div>

          <div class="row">
            <div class="col-half">
              <v-text-field
                label="Country"
                color="primary"
                v-model="country"
                placeholder="e.g. VietNam"
              >
              </v-text-field>
            </div>

            <div class="col-half">
              <v-text-field
                label="City"
                color="primary"
                v-model="city"
                placeholder="e.g. Ho Chi Minh"
              >
              </v-text-field>
            </div>
          </div>

          <div class="row">
            <div class="col-full">
              <v-text-field
                label="Address"
                color="primary"
                placeholder="e.g District 2, Thao Dien ward"
                v-model="address"
              >
              </v-text-field>
            </div>
          </div>

          <p class="title">Professional Summary</p>
          <p class="sumary">
            Write 2-4 short, mention your role, experience & most importantly -
            your biggest achievements, best qualities and skills.
          </p>
          <v-textarea variant="solo-filled" v-model="summary"></v-textarea>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
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
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    address: "",
    avatar: null,
    summary: ""
  }),
  watch: {
    jobtitle() {
      this.$store.commit("resumes/setjobtitle", {
        jobtitle: this.jobtitle,
        currendResumeId: this.$store.state.currendResumeId,
      });
    },
    firstName() {
      this.$store.commit("resumes/setFirstName", {
        firstName: this.firstName,
        currendResumeId: this.$store.state.currendResumeId,
      });
    },
    lastName() {
      this.$store.commit("resumes/setLastName", {
        lastName: this.lastName,
        currendResumeId: this.$store.state.currendResumeId,
      });
    },
    email() {
      this.$store.commit("resumes/setEmail", {
        email: this.email,
        currendResumeId: this.$store.state.currendResumeId,
      });
    },
    phoneNumber() {
      this.$store.commit("resumes/setPhoneNumber", {
        phoneNumber: this.phoneNumber,
        currendResumeId: this.$store.state.currendResumeId,
      });
    },
    country() {
      this.$store.commit("resumes/setCountry", {
        country: this.country,
        currendResumeId: this.$store.state.currendResumeId,
      });
    },
    city() {
      this.$store.commit("resumes/setCity", {
        city: this.city,
        currendResumeId: this.$store.state.currendResumeId,
      });
    },
    address() {
      this.$store.commit("resumes/setAdress", {
        address: this.address,
        currendResumeId: this.$store.state.currendResumeId,
      });
    },

    avatar() {
      this.$store.commit("resumes/setAvatar", {
        avatar: this.avatar,
        currendResumeId: this.$store.state.currendResumeId,
      });
      console.log("Avatar " + this.avatar);
    },
    summary(){
        this.$store.commit("resumes/setSummary", {
        summary: this.summary,
        currendResumeId: this.$store.state.currendResumeId,
      });
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
.col-full {
  display: inline-block;
  width: 100%;
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
.sumary {
  margin-bottom: 4px;
  color: rgb(130, 139, 162);
  font-size: 14px;
  line-height: 20px;
}
</style>
