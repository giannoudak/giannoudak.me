require('angular-ui-router');

module.exports = angular.module('common', [
	'ui.router',
	require('./elements/header').name,
	require('./elements/footer').name
]);

