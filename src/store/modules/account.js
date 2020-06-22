const state = {
  dailyList:[]
};
const mutations = {
  updateDailyList(state, json){
    state.dailyList = json;
  }
};
const actions = {
  loadDailyList({commit}){
    return fetch('http://saran5567.dothome.co.kr/account/json/dailyList.php')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      commit('updateDailyList', json);
    });
  }
};
const getters = {};

export default{
  namespaced:true,
  state,
  mutations,
  actions,
  getters
};
