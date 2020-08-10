import Vue from 'vue';

Vue.filter('currency', function (value, decimals = 2, symbol = 'USD') {
    if (isNaN(parseFloat(value))) {
        return value;
    }
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: symbol,
        minimumFractionDigits: decimals
    });
    return formatter.format(value);
});
Vue.filter('number', function (value, decimals = 2) {
    if (isNaN(parseFloat(value))) {
        return value;
    }
    var formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals
    });
    return formatter.format(value);
});
Vue.filter('date', function (value) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    let valArray = value.split("/");
    let date = new Date(valArray[2], valArray[0], valArray[1]);
    return new Intl.DateTimeFormat('en-US', options).format(date);
});

Vue.filter('datetime', function (value) {
    var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(value));
});
