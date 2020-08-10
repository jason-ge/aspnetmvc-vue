<template>
    <div id="main">
        <loading-screen :loading="loading"></loading-screen>
        <div class="grid-x grid-padding-x" v-if="employee != null">
            <div class="cell medium-12">
                <h1><font-awesome-icon icon="id-card"></font-awesome-icon>Personal Data</h1>
                <p>Pharetra vel turpis nunc eget lorem dolor. Volutpat lacus laoreet non curabitur gravida arcu ac. Pellentesque elit ullamcorper dignissim cras. Euismod nisi porta lorem mollis. Sed ullamcorper morbi tincidunt ornare massa. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Leo integer malesuada nunc vel risus. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Aliquam eleifend mi in nulla. Ipsum dolor sit amet consectetur adipiscing. Sed viverra ipsum nunc aliquet bibendum enim.</p>
            </div>

            <div class="cell medium-8">
                <personal-profile :employee="employee"></personal-profile>
            </div>

            <div class="cell medium-4">
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import employeeService from '../services/employeeservice';
import LoadingScreen from '../components/loading';
import PersonalProfile from '../components/personalprofile';
import "../filters";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
    data() {
        return {
            loading: false,
            employee: null,
        };
    },
    components: {
        LoadingScreen,
        PersonalProfile
    },
    mounted: function () {
        this.getEmployee();
    },
    methods: {
        getEmployee() {
            this.loading = true;
            employeeService.getEmployee().then(
                (result) => {
                    this.loading = false;;
                    console.log(result.data);
                    this.employee = result.data;
                },
                (err) => {
                    this.loading = false;;
                    console.log(err);
                }
            );
        }
    }
};
</script>

<style>
    .topNavBar a[href$='personaldata'i] {
        background: #08c;
    }
</style>