import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  axios,
  store,
}).$mount('#app');
