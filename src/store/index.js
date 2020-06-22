import Vue from 'vue';
import Vuex from 'vuex';
import users from './modules/users';
import account from './modules/account';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    users, account
  }
});
