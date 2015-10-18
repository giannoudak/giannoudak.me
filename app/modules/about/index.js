module.exports = angular.module('about', [
        require('./directives/AboutDirectives').name
    ])
    .controller('AboutController', require('./controllers/AboutController'));