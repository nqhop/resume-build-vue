<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col cols="4" class="d-flex justify-start">
              Experience name
            </v-col>
            <v-col cols="8" class="text-subtitle-1">
              <v-fade-transition leave-absolute>
                <span v-if="expanded" key="0"> Enter your experience</span>
                <span v-else key="1">
                  {{ experience.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="main">
          <div class="row">
            <div class="col-half">
              <v-text-field
                v-model="experience.position"
                hide-details
                label="Position"
                color="primary"
                placeholder="e.g web developer"
              ></v-text-field>
            </div>

            <div class="col-half">
              <v-text-field
                v-model="experience.companyName"
                hide-details
                label="Company name"
                color="primary"
              ></v-text-field>
            </div>
          </div>

          <div class="row">
            <div class="col-half">
              <v-text-field
                label="Start & End Date"
                color="primary"
                v-model="firstName"
              >
              </v-text-field>
            </div>

            <div class="col-half">
              <v-text-field
                label="Location"
                color="primary"
                placeholder="e.g District 2, Thao Dien ward"
                v-model="lastName"
              >
              </v-text-field>
            </div>
          </div>

          <div class="row">
            <div class="col-half">
              <div class="row">
                <div class="col-half">
                  <my-month-picker />
                </div>
                <div class="col-half">
                  <my-month-picker />
                </div>
                
              </div>
            </div>

            <!-- <div class="col-half">
              <div class="row">
                <div class="col-half">
                  <my-month-picker />
                </div>
                <div class="col-half">
                  <my-month-picker />
                </div>
              </div>
            </div> -->
          </div>
          <div class="row">
            <div class="col-full">
                <v-textarea variant="solo-filled" v-model="experience.desc"
                color="primary"
                label="Description"/>
            </div>
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import myMonthPicker from "../myMonthPicker.vue";

// import {MonthPickerInput} from "vue-month-picker";
export default {
  components: {
    myMonthPicker,
    // MonthPickerInput,
  },
  data: () => ({
    experience: {
      companyName: "",
      position: "",
      location: null,
      start: null,
      end: null,
      desc: "",
    },
    methods: {
      showDate(date) {
        this.date = date;
      },
    },
  }),
};
</script>
<style scoped>
.main {
  margin-top: 16px;
  padding: 0 16px;
}
.row {
  margin: 0 -16px;
  margin-bottom: 16px;
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
.month-picker {
  /* display: flex; */
}
</style>
