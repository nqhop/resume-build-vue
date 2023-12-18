<template>
  <div>
    <experience-item
      v-for="experience in experiences"
      :key="experience.id"
      :title="experience.title"
      :desc="experience.desc"
      :id="experience.id"
      @edit-skill="editSkill"
    >
    </experience-item>
  </div>

  <v-card class="mx-auto mx-4 mb-4">
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
  </v-card>

  <experience-item-vue/>

  <!-- <base-button
      class="btn float-left"
      :name="baseButtonName()"
      @click="changeIsPnputSkill"
    /> -->
</template>
<script>
import BaseButton from "../BaseButton.vue";
import experienceItemVue from './experienceItem.vue';
import experienceItem from "./experienceItem.vue";

export default {
  components: {
    BaseButton,
    experienceItem,
    experienceItemVue
  },
  data: () => ({
    
    selection: "Beginner",
    levels: ["Beginner", "Moderate", "Good", "Very good", "Excellent"],
    IsInPutSkill: false,
    IsUpdateSkill: false,
    newSkill: "",
    skillIdForUpdate: "",
  }),
  computed: {
    experiences() {
      return this.$store.getters["resumes/getExperiencesByResumeId"];
    },
  },
  methods: {
    baseButtonName() {
      return this.IsUpdateSkill ? "update" : "Add skill";
    },
    changeIsPnputSkill() {
      console.log(
        "getSkillsByResumeId " +
          this.$store.getters["resumes/getSkillsByResumeId"]
      );

      this.IsInPutSkill = true;
      console.log("newSkill " + this.newSkill);
      console.log("selection " + this.selection);

      if (this.newSkill.length > 0) {
        if (this.IsUpdateSkill) {
          this.$store.commit("resumes/editSkill", {
            skillIdForUpdate: this.skillIdForUpdate,
            updateSelection: this.selection,
            updateSkillName: this.newSkill,
            currendResumeId: this.$store.state.currendResumeId,
          });
        } else {
          this.$store.commit("resumes/addNewSkill", {
            newSkill: this.newSkill,
            selection: this.selection,
            currendResumeId: this.$store.state.currendResumeId,
          });
        }

        this.newSkill = "";
        this.selection = "Beginner";
        this.IsInPutSkill = false;
        this.IsUpdateSkill = false;
      }
    },
    editSkill(skillId, name, level) {
      this.skillIdForUpdate = skillId;
      this.newSkill = name;
      this.selection = level;
      this.IsUpdateSkill = true;
    },
  },
  mutations: {
    updateData(state, newData) {
      console.log("newData " + newData);
    },
  },
};
</script>
