<template>
    <div>
        <h1>Patients list</h1>
        <div class="search_div"><h5>Place to implement searching patients</h5>

            <form type="text">
                <input type="text" id="fname" name="fname"><br>
            </form>
            <p> >>> HERE <<< </p>
        </div>

        <div class="patients">
            <div v-for="patient in allPatients" class="patient" v-bind:key="patient.id">
                    {{patient.resource.name}}
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
</style>