 import Vue from 'vue'
import Router from 'vue-router'

import PatientsView from '../views/PatientsView'
import PatientView from '../views/PatientView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'patients',
      component: PatientsView,
    },{
      path: '/patient/:patientId',
      name: 'patientDetail',
      component: PatientView,
    },
  ]
})