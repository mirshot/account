const state = {
  users:[]
};
const mutations = {
  updateUsers(state, json){
    state.users = json;
  }
};
const actions = {
  loadUsers({commit}){
    return fetch('http://saran5567.dothome.co.kr/account/json/users.php')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      commit('updateUsers', json);
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
