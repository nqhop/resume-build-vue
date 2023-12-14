export default {
  userName(state) {
    return state.userName;
  },
  // getJobtitle(state) {
  //   return state.jobtitle;
  // },
  // getFirstName(state) {
  //   return state.firstName;
  // },
  // getLastName(state) {
  //   return state.lastName;
  // },
  // getEmail(state) {
  //   return state.email;
  // },
  // getPhoneNumber(state) {
  //   return state.phoneNumber;
  // },
  // getCountry(state) {
  //   return state.country;
  // },
  // getCity(state) {
  //   return state.city;
  // },
  // getAddress(state) {
  //   return state.address;
  // },

  getFirstNameById(state, _, rootState, _2) {
    const currendResumeId = rootState.currendResumeId;
    const resume = state.resume.find((item) => item.id == currendResumeId);
    return resume.firstName;
  },
  getResumeById(state, _, rootState, _2) {
    const currendResumeId = rootState.currendResumeId;
    return state.resume.find((item) => item.id == currendResumeId);
  },
  getSkillsByResumeId(state, _, rootState, _2) {
    const currendResumeId = rootState.currendResumeId;
    const resume = state.resume.find((item) => item.id == currendResumeId);
    const skills = resume.skills;
    return skills;
  },
};
