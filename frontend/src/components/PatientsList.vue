<template>
    <div>
        <h1>Patients list</h1>
        <div class="search_div"><h5>Place to implement searching patients</h5>

            <form type="text">
                <input type="text" id="fname" name="fname"><br>
            </form>
        </div>

        <div class="patients">
            <div v-for="patient in allPatients" class="patient" v-bind:key="patient.id">
                <button v-on:click="showDetails(patient.resource.id)" class="patient_button">
                    <span v-if="typeof patient.resource['name'][0].prefix !== 'undefined'"> {{patient.resource['name'][0].prefix[0]}}</span>
                    {{patient.resource['name'][0].given + " " + patient.resource['name'][0].family + " " }}
                </button>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'Patients',
        methods: {
            ...mapActions(["fetchPatients"]),
            showDetails(id) {
                alert(id)
                this.$router.push({ name: 'patientDetail', params: { patientId : id } })
            }
        },
        computed: mapGetters(['allPatients']),
        created() {
            //Mam tu "Method expression is not of Function type"
            this.fetchPatients()
        },
    }

</script>

<style>
    .patient-name:hover {
        background-color: gray;
    }

    .patient_button {
        margin: 1%;
    }
</style>