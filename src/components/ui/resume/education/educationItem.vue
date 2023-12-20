<template>
  <v-expansion-panels v-if="education">
    <v-expansion-panel>
      <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
        <template v-slot:default="{ expanded }">
          <v-row no-gutters>
            <v-col cols="4" class="d-flex justify-start">
              Experience name
            </v-col>
            <v-col cols="8" class="text-subtitle-1">
              <v-fade-transition leave-absolute>
                <span v-if="expanded" key="0"> Enter your education</span>
                <span v-else key="1">
                  {{ education.schoolName }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <div class="main">
          <div class="row">
            <div class="col-full">
              <v-text-field
                v-model="education.education"
                label="Education"
                color="primary"
                placeholder="e.g Engineer"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-half">
              <v-text-field
                v-model="education.schoolName"
                hide-details
                label="School"
                color="primary"
              ></v-text-field>
            </div>

            <div class="col-half">
              <v-text-field
                v-model="education.city"
                hide-details
                label="City"
                color="primary"
                placeholder="e.g. Ho Chi Minh"
              ></v-text-field>
            </div>
          </div>

          <div class="row start-end-date">
            <div class="col-half">Start date</div>
            <div class="col-half">
              <span>End date</span>
              <v-checkbox
                label="Present"
                class="present"
                color="primary"
                v-model="presentSelected"
              ></v-checkbox>
            </div>
          </div>

          <div class="row">
            <div class="col-half">
              <div class="row">
                <div class="col-half">
                  <date-menus-vue
                    :items="months"
                    :isMonth="true"
                    :itemsPlaceholder="education.start"
                  />
                </div>
                <div class="col-half">
                  <date-menus-vue
                    :items="years"
                    :itemsPlaceholder="education.start"
                  />
                </div>
              </div>
            </div>
            <!-- :isDisable="disabledMonthYear()" -->
            <div class="col-half">
              <div class="row">
                <div class="col-half">
                  <date-menus-vue
                    :items="months"
                    :isMonth="true"
                    
                    :itemsPlaceholder="education.end"
                  />
                </div>
                <div class="col-half">
                  <date-menus-vue
                    :items="years"
                    :itemsPlaceholder="education.end"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-full">
              <v-textarea
                variant="solo-filled"
                v-model="education.desc"
                label="Description"
                color="primary"
              ></v-textarea>
            </div>
          </div>

          <div class="row bottom-button">
            <base-button
              class="bottom-button-done"
              name="DONE"
              :icon="mdiCheck"
            />
            <base-button
              name="Delete"
              :icon="mdiDeleteOutline"
              colorBtn="#8c52ff"
            />
          </div>
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import DateMenusVue from "../../DateMenus.vue";
import BaseButton from "../../BaseButton.vue";
import { mdiDeleteOutline } from "@mdi/js";
import { mdiCheck } from "@mdi/js";
export default {
  props: ["education"],
  components: {
    DateMenusVue,
    BaseButton,
  },
  data: () => ({
    mdiCheck: mdiCheck,
    mdiDeleteOutline: mdiDeleteOutline,
    presentCheckBox: true,
    education: {
      education: "",
      schoolName: "",
      city: "",
      location: null,
      start: null,
      end: null,
      desc: "",
    },
    presentSelected: "",
  }),
  computed: {
    months() {
      return this.$store.getters.getMonths;
    },
    years() {
      return this.$store.getters.getYears;
    },
    disabledMonthYear() {
      return this.presentCheckBox;
    },
  },
  watch: {
    presentSelected(value) {
      this.presentSelected = value;
      console.log("presentSelected" + value);
    },
  },
  methods: {
    
    showDate(date) {
      this.date = date;
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
.start-end-date {
  margin-bottom: 0px;
  color: rgb(82 82 90);
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.present {
  display: inline-block;
  float: inline-end;
  height: 45px;
  margin-top: -20px;
}
.bottom-button {
  float: right;
  display: flex;
}

.bottom-button-done {
  margin-right: 16px;
}
</style>
