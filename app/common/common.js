require('angular-ui-router');

module.exports = angular.module('common', [
	require('angular-ui-router'),
	require('./elements/header').name,
	require('./elements/footer').name
]);

