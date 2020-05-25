import axios from 'axios'

const state = {
    patients: [],
    patientDetails: {}
}
const getters = {
    allPatients: state => state.patients,
    patientDetails: state =>state.patientDetails
}
const mutations = {
    setPatients: (state, patients) => (state.patients = patients),
    setPatient: (state, patientDetails) => (state.patientDetails = patientDetails)
}
const actions = {
    async fetchPatients({commit}){
        const response  = await axios.get('/Patient?_count=25&_pretty=true')
        console.log(response.data['entry'])

        commit('setPatients', response.data['entry'])
    },
    async fetchPatient({commit}, id){
        let url = '/Patient/' + id + '/$everything'
        console.log(id)
        const response  = await axios.get(url)
        console.log(response.data['entry'])
        commit('setPatient', response.data)

    }
}

export default {state, getters, mutations, actions}