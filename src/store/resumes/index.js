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
          profileLink: "",
          // avatar: 'E:/Workspace/Vue/resume-build-vue/src/assets/logo.png',
          avatar: "@/assets/logo.png",
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
              desc: "Lorem ipsum dolor sit amet",
            },
          ],
          educations: [
            {
              id: "01",
              education: "bachelor",
              schoolName: "Ton Duc Thang Univercirt",
              city: "Ho Chi Minh",
              start: "May 2022",
              end: "May 2023",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!",
            },
            {
              id: "02",
              education: "certificate",
              schoolName: "Koria IT school",
              city: "Ho Chi Minh",
              start: "May 2023",
              end: "movember 2023",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!",
            },
          ],
        },
      ],
    };
  },
  mutations,
  getters,
};
