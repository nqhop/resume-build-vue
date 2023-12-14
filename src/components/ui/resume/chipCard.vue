<template>
  <skill-item-vue
    v-for="skill in skills"
    :key="skill"
    :name="skill.skillName"
    :level="skill.level"
  >
  </skill-item-vue>
  <v-card v-if="IsInPutSkill" class="mx-auto mx-4 mb-4">
    <v-card-title>
      <span class="text-h6">
        <v-text-field
          placeholder="e.g Java"
          color="primary"
          v-model="newSkill"
        ></v-text-field>
      </span>
    </v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <span class="subheading">Level</span>

      <v-chip-group
        v-model="selection"
        selected-class="text-deep-purple-accent-4"
        mandatory
      >
        <v-chip v-for="level in levels" :key="level" :value="level">
          {{ level }}
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
  <base-button
    class="btn float-left"
    name="Add skill"
    @click="changeIsPnputSkill"
  />
</template>
<script>
import BaseButton from "../BaseButton.vue";
import skillItemVue from "./skillItem.vue";

export default {
  components: {
    BaseButton,
    skillItemVue,
  },
  data: () => ({
    selection: "Beginner",
    levels: ["Beginner", "Moderate", "Good", "Very good", "Excellent"],
    IsInPutSkill: false,
    newSkill: "",
  }),
  computed: {
    skills() {
      return this.$store.getters["resumes/getSkillsByResumeId"];
    },
  },
  methods: {
    changeIsPnputSkill() {
      this.IsInPutSkill = true;
      console.log("newSkill " + this.newSkill);
      console.log("selection " + this.selection);

      if (this.newSkill.length > 0) {
        this.$store.commit("resumes/addNewSkill", {
          newSkill: this.newSkill,
          selection: this.selection,
          currendResumeId: this.$store.state.currendResumeId,
        });

        this.newSkill = ''
        this.selection = 'Beginner'
        this.IsInPutSkill = false;
      }
    },
  },
};
</script>
