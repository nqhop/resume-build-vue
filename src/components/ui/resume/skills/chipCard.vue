<template>
  <div>
    <skill-item-vue
      v-for="skill in skills"
      :key="skill"
      :name="skill.skillName"
      :level="skill.level"
      :id="skill.id"
      @edit-skill="editSkill"
    >
    </skill-item-vue>
  </div>

  <v-card v-if="IsInPutSkill || IsUpdateSkill" class="mx-auto mx-4 mb-4">
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
    :name="baseButtonName()"
    @click="changeIsPnputSkill"
  />
</template>
<script>
import BaseButton from "../../BaseButton.vue";
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
    IsUpdateSkill: false,
    newSkill: "",
    skillIdForUpdate: "",
  }),
  computed: {
    skills() {
      return this.$store.getters["resumes/getSkillsByResumeId"];
    },
  },
  methods: {
    baseButtonName() {
      return this.IsUpdateSkill ? "update" : "Add skill";
    },
    changeIsPnputSkill() {

      this.IsInPutSkill = true;

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
      // console.log("editSkill " + skillId + " " + name + " " + level);
      this.skillIdForUpdate = skillId;
      this.newSkill = name;
      this.selection = level;
      this.IsUpdateSkill = true;
    },
  },
};
</script>
