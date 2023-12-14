<template>
  <personal-details/>
  <skills-vue/>
</template>

<script>
import skillsVue from '@/components/ui/resume/skills.vue';
import personalDetails from '@/components/ui/resume/personalDetails.vue';
export default {
  components: {
    skillsVue,
    personalDetails
  },
};
</script>