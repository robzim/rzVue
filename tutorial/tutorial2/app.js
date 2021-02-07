new Vue({
    el: '#vue-app',
    data: {
        age: 25,
    },
    methods: {
        greet: function(time) {
            return 'Good ' + '' + this.name;
        }
    }
});
