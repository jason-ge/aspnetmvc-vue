
<template>
    <div class="callout" v-bind:class="type" data-closable v-if="message != null">
        <div v-html="message"></div>
        <button class="close-button" aria-label="Dismiss alert" type="button" data-close v-if="options && options.closable">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
    props: ['options'],
    data: function () {
        return {
            message: null,
            type: ''
        };
    },
    methods: {
        success(msg) {
            this.type = 'success';
            this.open(msg);
        },
        warn(msg){
            this.type = 'warning'
            this.open(msg);
        },
        error(msg){
            this.type = 'alert'
            this.open(msg);
        },
        open(msg) {
            this.message = msg;
            if (this.options && this.options.autoClose > 0) {
                setTimeout(() => {
                    this.close();
                }, this.options.autoClose * 1000);
            }
        },
        close() {
            this.message = null;
            this.type = ''
        },
    }
}
</script>
