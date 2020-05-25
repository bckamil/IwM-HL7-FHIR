<template>
    <div>
        <h1>Patient Details</h1>

        <table v-for="entry in patientDetails.entry" >
            <tr > {{entry}}</tr>

        </table>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "PatientDetails",

        methods: {
            ...mapActions(["fetchPatient"]),
        },
        computed: mapGetters(['patientDetails']),
        created() {
            //TODO sprawdź czy to właściwy sposób dostępu
            console.log(typeof this.$route.params.patientId)

            this.fetchPatient(this.$route.params.patientId)

        },

    }
</script>

<style scoped>

</style>