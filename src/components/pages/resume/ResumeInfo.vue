<template>
  <personal-details/>
  <skills-vue/>
  <work-experience/>
</template>

<script>
import skillsVue from '@/components/ui/resume/skills.vue';
import personalDetails from '@/components/ui/resume/personalDetails.vue';
import workExperience from '@/components/ui/resume/workExperience.vue';
export default {
  components: {
    skillsVue,
    personalDetails,
    workExperience
  },
};
</script>