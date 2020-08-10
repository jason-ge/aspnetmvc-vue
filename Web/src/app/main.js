import "./main.scss";

import 'script-loader!jquery/dist/jquery.min';
import 'script-loader!what-input/dist/what-input.min';
import 'script-loader!foundation-sites/dist/js/foundation.min';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPrint, faPhone, faClock, faIdCard, faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Vue from 'vue'
import UserAgreementContent from './components/useragreement';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faUser, faPrint, faPhone, faClock, faIdCard, faHome, faSignOutAlt)

new Vue({
    el: '#app',
    data: {
        employee: null
    },
    components: { UserAgreementContent }
});
