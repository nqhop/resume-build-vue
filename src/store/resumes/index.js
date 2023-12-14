import mutations from "./mutations";
import getters from "./getters";
export default {
  namespaced: true,
  state() {
    return {
      userName: "",
      jobtitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
      city: "",
      resume: [
        {
          id: "01",
          jobtitle: "java",
          firstName: "Hop",
          lastName: "Nguyen",
          email: "",
          phoneNumber: "",
          country: "",
          city: "",
          summary: "",
          // avatar: 'E:/Workspace/Vue/resume-build-vue/src/assets/logo.png',
          avatar: '@/assets/logo.png',
          // import skillsVue from '@/components/ui/resume/skills.vue';
          skills: [
            {
              id: "01",
              skillName: "java",
              level: "Good",
            },
          ],

        },
      ],
    };
  },
  mutations,
  getters,
};
