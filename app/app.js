var angular = require('angular');

var app = angular.module('app', [
	'app.templates',
	require('./common/common').name,
	require('./modules').name
])
app.config(require('./common/appConfig'))
app.run(['$rootScope','$state', function($rootScope, $state){
	
	console.log($state);
	
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		console.log(toState);
		$rootScope.pageTitle = toState.data.pageTitle;	
	})
}])
//app.controller('MainController', ['$scope', MainController])