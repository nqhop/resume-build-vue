<template>
  <personal-details/>
  <skills-vue/>
  <work-experience/>
  <education/>
</template>

<script>
import skillsVue from '@/components/ui/resume/skills/skills.vue';
import personalDetails from '@/components/ui/resume/persionalDetails/personalDetails.vue';
import workExperience from '@/components/ui/resume/experiences/workExperience.vue';
import education from '@/components/ui/resume/education/education.vue';
export default {
  components: {
    skillsVue,
    personalDetails,
    workExperience,
    education
  },
};
</script>