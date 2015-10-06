
module.exports = angular.module('commonHeader', [])
	.directive('commonHeader',function(){
		return {
			templateUrl: 'common/elements/header/common-header.html',
			restrict: 'EA',
			replace: true
		};
	});