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
          jobtitle: "",
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          country: "",
          city: "",
          summary: "",
          profileLink:"",
          // avatar: 'E:/Workspace/Vue/resume-build-vue/src/assets/logo.png',
          avatar: '@/assets/logo.png',
          // import skillsVue from '@/components/ui/resume/skills.vue';
          skills: [
            {
              id: "01",
              skillName: "Java",
              level: "Good",
            },
          ],
          experiences: [
            {
              id: "01",
              duration: "2013 - 2015",
              title: "Lorem ipsum dolor sit amet",
              desc: "Lorem ipsum dolor sit amet"
            }
          ]
        },
      ],
    };
  },
  mutations,
  getters,
};
