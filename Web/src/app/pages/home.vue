<template>
    <div id="main">
        <loading-screen :loading="loading"></loading-screen>
        <h1><font-awesome-icon icon="home"></font-awesome-icon> Home</h1>
        <div class="grid-x grid-padding-x" v-if="employee != null">
            <div class="cell medium-8">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at risus viverra. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Imperdiet dui accumsan sit amet. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Fermentum odio eu feugiat pretium. Amet est placerat in egestas. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Eu nisl nunc mi ipsum faucibus vitae. Sagittis id consectetur purus ut. Et netus et malesuada fames ac turpis egestas.
                </p>
                <p>
                    Elementum sagittis vitae et leo duis. Eu nisl nunc mi ipsum faucibus vitae. Ultrices dui sapien eget mi proin sed. Turpis massa sed elementum tempus egestas sed sed risus pretium. Etiam sit amet nisl purus in mollis. Non arcu risus quis varius quam quisque id diam. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Facilisi nullam vehicula ipsum a. Nisl purus in mollis nunc sed id semper risus in. Hac habitasse platea dictumst vestibulum rhoncus. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Malesuada fames ac turpis egestas sed tempus urna et. Tellus orci ac auctor augue mauris augue neque gravida. Sociis natoque penatibus et magnis dis parturient. Vitae congue eu consequat ac felis donec et odio. Ut tristique et egestas quis. Blandit massa enim nec dui. Elementum nisi quis eleifend quam adipiscing vitae proin. Vestibulum sed arcu non odio euismod.
                </p>
                <p>
                    Pharetra vel turpis nunc eget lorem dolor. Volutpat lacus laoreet non curabitur gravida arcu ac. Pellentesque elit ullamcorper dignissim cras. Euismod nisi porta lorem mollis. Sed ullamcorper morbi tincidunt ornare massa. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Leo integer malesuada nunc vel risus. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Aliquam eleifend mi in nulla. Ipsum dolor sit amet consectetur adipiscing. Sed viverra ipsum nunc aliquet bibendum enim.
                </p>
            </div><!-- col-sm-8 -->
            <div class="cell medium-4">
                <side-bar :employee="employee"></side-bar>
            </div><!-- col-sm-3 -->
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import employeeService from '../services/employeeservice';
import LoadingScreen from '../components/loading';
import SideBar from '../components/sidebar';
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
        SideBar
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
    .topNavBar a[href$='home'i] {
        background: #08c;
    }
</style>