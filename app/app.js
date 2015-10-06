var angular = require('angular');
//var router = require('angular-ui-router');
 	


var app = angular.module('app', [
	require('./common/common').name,
	require('./modules').name
])
app.config(require('./common/appConfig'))
//app.run()
//app.controller('MainController', ['$scope', MainController])