import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue';

import router from './router/index';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import axios from 'axios'
axios.defaults.baseURL = 'https://hapi.fhir.org/baseDstu3'
// axios.defaults.baseURL = 'http://localhost:8081/baseDstu3/'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
