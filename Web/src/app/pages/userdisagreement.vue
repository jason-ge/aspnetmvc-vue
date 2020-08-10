<template>

<div id="main">
    <div id="disclaimer">
        <h2>Sorry</h2>
        <p>You cannot use this tool if you do not agree with the terms of the User Agreement.</p>
        <div style="text-align:center;">
            <a href="/Home/UserAgreement" class="button"><font-awesome-icon icon="sign-out-alt"></font-awesome-icon> Back To UserAgreement</a>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default {
    data() {
        return {
            employee: null,
        };
    },
    methods: {
    }
};
</script>

<style>
    .topNavBar {
        display: none;
    }

    #userAgreementLink2Modal {
        display: none;
    }
</style>