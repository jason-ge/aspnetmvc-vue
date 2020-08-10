<template>
    <div id="main">
        <loading-screen :loading="loading"></loading-screen>
        <user-agreement-content :employee="employee"></user-agreement-content>
        <form action='/Home/UserAgreement' method="post">
            <table class="disclaimerPanel">
                <thead>
                    <tr>
                        <th>Do you agree to the above Terms of Use and Privacy Notice?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 0em 2em">
                            <div v-if="$v.agreed.$dirty && !$v.agreed.required" class="validationError" style="margin-top: 5px;">
                                You need to choose if you agree or disagree.
                            </div>
                            <div>
                                <input type="radio" name="bAgreed" value="true" v-model="agreed" id="userAgreement_agree">
                                <label class="labelForRadio" for="userAgreement_agree">I Agree</label>
                            </div>
                            <div>
                                <input type="radio" name="bAgreed" value="false" v-model="agreed" id="userAgreement_disagree">
                                <label class="labelForRadio" for="userAgreement_disagree">I Do Not Agree </label>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td style="text-align:center; ">
                            <button type="submit" v-on:click="validateAgreement($event)" class="button">Submit</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import employeeService from '../services/employeeservice';
import LoadingScreen from '../components/loading';
import UserAgreementContent from '../components/useragreement';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(Vuelidate);

export default {
    data() {
        return {
            loading: false,
            agreed: null,
            employee: null,
        };
    },
    components: {
        LoadingScreen,
        UserAgreementContent
    },
    validations: {
        agreed: {
            required,
        }
    },
    mounted: function () {
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
    },
    methods: {
        validateAgreement(e) {
            this.$v.$touch()
            if (!this.$v.$invalid) {
                document.forms[0].submit();
                return true;
            }
            else {
                e.preventDefault();
                return false;
            }
        }
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
    .disclaimerPanel {
        margin: 10px auto;
        width: 50%;
        min-width: 400px;
    }
</style>