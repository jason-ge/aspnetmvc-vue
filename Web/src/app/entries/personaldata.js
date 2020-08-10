import Vue from 'vue'
import PersonalData from '../pages/personaldata.vue'

new Vue({
    el: '#main',
    render: h => h(PersonalData),
    components: { PersonalData }
});