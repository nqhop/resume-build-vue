export default {
  setName(state, payload) {
    state.userName = payload.value;
  },
  setjobtitle(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    state.resume[index].jobtitle = payload.jobtitle;
  },
  setFirstName(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    state.resume[index].firstName = payload.firstName;
  },
  setLastName(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    state.resume[index].lastName = payload.lastName;
  },
  setEmail(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    state.resume[index].email = payload.email;
  },
  setPhoneNumber(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    state.resume[index].phoneNumber = payload.phoneNumber;
  },
  setCountry(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    state.resume[index].country = payload.country;
  },
  setCity(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    state.resume[index].city = payload.city;
  },
  setAdress(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    state.resume[index].address = payload.address;
  },
  setAvatar(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    console.log("setAvatar " + this.avatar);
  },

  addNewSkill(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    state.resume[index].skills.push({
      id: new Date().toISOString(),
      skillName: payload.newSkill,
      level: payload.selection,
    });
  },
  setSummary(state, payload) {
    const index = state.resume.findIndex(
      (obj) => obj.id === payload.currendResumeId
    );
    state.resume[index].summary = payload.summary;
  },
};
