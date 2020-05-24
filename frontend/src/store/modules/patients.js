import axios from 'axios'

const state = {
    patients: [],
// {id: 1, name: "Ambrozy"}, {id: 2, name: "Stefan"}
}
const getters = {
    allPatients: state => state.patients
}
const mutations = {
    setPatients: (state, patients) => (state.patients = patients)
}
const actions = {
    async fetchPatients({commit}){
        const response  = await axios.get('/Patient?_count=10')
        console.log(response.data['entry'])

        commit('setPatients', response.data['entry'])
    }
}

export default {state, getters, mutations, actions}