export default {
    setName(state, payload){
        state.userName = payload.value;
    },
    setjobtitle(state, payload){
        state.jobtitle = payload.jobtitle
        console.log("setjobtitle ", payload.jobtitle)
    }
}