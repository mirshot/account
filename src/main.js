import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMonthlyPicker from 'vue-monthly-picker';
import moment from 'moment';
import VueMomentJS from 'vue-momentjs';

Vue.component('VueMonthlyPicker',VueMonthlyPicker);
Vue.use(VueMomentJS, moment);

Vue.config.productionTip = false;

console.log('merge');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
