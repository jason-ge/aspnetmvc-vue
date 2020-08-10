<template>
<table width="100%" border="0" cellspacing="0" cellpadding="5"  class="table-border">
    <thead>
        <tr>
            <th colspan="2">Personal Data As Of Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><b>Employee Number</b></td>
            <td><span>{{ employee.EEID }}</span></td>
        </tr>
        <tr>
            <td><b>Employment Status</b></td>
            <td nowrap="">
                <span v-if="employee.STATUS == 'A'">Active</span>
                <span v-if="employee.STATUS == 'L'">Leave</span>
            </td>
        </tr>
        <tr>
            <td><b>Date Of Birth</b></td>
            <td nowrap=""><span>{{ employee.DATEOFBIRTH | date }}</span></td>
        </tr>
        <tr>
            <td><b>Date Of Hire</b></td>
            <td nowrap=""><span>{{ employee.DATEOFHIRE | date }}</span></td>
        </tr>     
        <tr>
            <td><b>Province Of Employment</b></td>
            <td nowrap=""><span>{{ employee.PROVINCE }}</span></td>
        </tr>
        <tr>
            <td><b>Marriage Status</b></td>
            <td nowrap=""><span>{{ employee.MARITALSTATUS == "M" ? "Married": "Single" }}</span></td>
        </tr>
        <tr class="borderBottom">
            <td><b>Spouse Date Of Birth</b></td>
            <td nowrap=""><span>{{ employee.SPDATEOFBIRTH | date }}</span></td>
        </tr>
        <tr>
            <td><b>Pay Current Year</b></td>
            <td><span>{{ employee.PAYRATECURRENTYEAR | currency(2) }}</span></td>
        </tr>
    </tbody>
</table>
</template>

<script>

export default {
  props: ['employee'],
}

</script>

<style>

</style>
