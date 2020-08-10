import Vue from 'vue'
import Home from '../pages/home.vue'

new Vue({
    el: '#main',
    render: h => h(Home),
    components: { Home }
});