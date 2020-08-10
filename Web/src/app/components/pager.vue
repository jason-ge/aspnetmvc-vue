<template>
    <div class="paging" v-if="pager.totalCount > 0">
        <a title="Go to first page" v-if="pager.pageNumber != 1" v-on:click="gotoPage(1)">&laquo;</a><a title="Go to previous page" v-if="pager.pageNumber != 1" v-on:click="gotoPage(pager.pageNumber-1)">&lsaquo;&nbsp;</a>
        <span> Page </span><input type="text" class="form-control" v-model="pager.pageNumber" /><span> of </span><span>{{ pager.totalPages }}</span>
        <a title="Go to next page" v-if="pager.pageNumber != pager.totalPages" v-on:click="gotoPage(pager.pageNumber+1)">&nbsp;&rsaquo;</a><a title="Go to last page" v-if="pager.pageNumber != pager.totalPages" v-on:click="gotoPage(pager.totalPages)">&raquo;</a>
        <button class="button" title="Change the page number and click this button to directly jump to the page" v-if="pager.totalPages > 1" v-on:click="gotoPage(pager.pageNumber)">Jump</button>&nbsp;&nbsp;&nbsp;<span>{{ pager.totalCount }} records in total.</span>
    </div>
</template>

<script>

export default {
    props: ['pager'],
    methods: {
        gotoPage(num) {
            if (num < 1) {
                this.pager.pageNumber = 1;
            }
            else if (num > this.pager.totalPages) {
                this.pager.pageNumber = this.pager.totalPages;
            }
            else {
                this.pager.pageNumber = num;
            }
            this.$emit('page-changed', this.pager.pageNumber);
        },
    }
};
</script>
