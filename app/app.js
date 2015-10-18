var angular = require('angular');

var app = angular.module('app', [
	'app.templates',
	require('./common/common').name,
	require('./modules').name
])
app.config(require('./common/appConfig'))
app.run(require('./common/appInit'));
//app.controller('MainController', ['$scope', MainController])