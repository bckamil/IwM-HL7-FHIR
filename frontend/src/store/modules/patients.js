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

        let params = {
            '_pretty' : "true",
            "_count" : 10

        }
        const response  = await axios.get('/Patient', {params : params})
        console.log(response.data['entry'])

        commit('setPatients', response.data['entry'])
    },
    async fetchPatient({commit}, id){
        let url = '/Patient/' + id + '/$everything'
        console.log(id)
        const response  = await axios.get(url)
        console.log(response.data['entry'])
        commit('setPatient', response.data)

    },
    async searchForPatients({commit}, querry)
    {
        let params = {
            '_pretty' : "true",
            "_count" : 10,
            "family" : querry

        }
        const response  = await axios.get('/Patient', {params:params})
        console.log(response.data)
        commit('setPatients', response.data['entry'])
    }
}

export default {state, getters, mutations, actions}