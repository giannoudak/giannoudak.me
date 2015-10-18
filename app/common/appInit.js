function appInit($rootScope, $state){
	
	console.log($state);
	
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		console.log(toState);
		$rootScope.pageTitle = toState.data.pageTitle;	
	})
}


appInit.$inject = ['$rootScope', '$state'];
module.exports = appInit;