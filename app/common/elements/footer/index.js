module.exports = angular.module('commonFooter',[])
		.directive('commonFooter',function(){
			return {
				templateUrl: 'common/elements/footer/common-footer.html',
				restrict: 'EA',
				replace: true,
				controller: function(){
					this.name = "giannoudak.me";
					this.year = new Date().getFullYear();
				},
				controllerAs: "footerCtrl"
			};
		});