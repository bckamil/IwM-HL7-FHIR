import Vue from 'vue'
import Vuex from 'vuex'

import patients from './modules/patients'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    patients,
  }
})

export default store