
module.exports = angular.module('modules',[
	require('./about').name
])
.controller('MainController',require('./main/MainController'));