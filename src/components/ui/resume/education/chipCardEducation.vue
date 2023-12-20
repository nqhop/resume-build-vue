<template>
    <div>
      <!-- <education-item
      v-for="education in educations"
      :key="education.id"
      :education="education.education"
      :schoolName="education.schoolName"
      :city="education.city"
      >

      </education-item> -->

      <education-item class="education-item"
      v-for="education in educations"
      :key="education.id"
      :education="education"
      >

      </education-item>
    </div>
  
    <!-- <education-item/> -->
  
    <!-- <base-button
        class="btn float-left"
        :name="baseButtonName()"
        @click="changeIsPnputSkill"
      /> -->
  </template>
  <script>
  import BaseButton from "../../BaseButton.vue";
  import educationItem from "./educationItem.vue";
  
  export default {
    components: {
      BaseButton,
      educationItem
    },
    data: () => ({
    }),
    computed: {
      educations() {
        console.log("chipCardEducation");
        console.log(this.$store.getters["resumes/getEducationByResumeId"]);
        return this.$store.getters["resumes/getEducationByResumeId"];
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

<style scoped>
.education-item {
  margin-bottom: 8px;
}
</style>