<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <template v-slot:default>
          <v-row no-gutters>
            <v-col cols="4" class="d-flex justify-start text-h5"> Work Experience</v-col>
            <v-col cols="8" class="text-grey"> </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <chip-card-work-experience/>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
import chipCardWorkExperience from './chipCardWorkExperience.vue';
export default {
  components: { chipCardWorkExperience },
  data: () => ({}),
};
</script>
