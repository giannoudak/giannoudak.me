function appConfig($urlRouterProvider, $locationProvider, $stateProvider){
	
	$locationProvider.html5Mode({
		enabled: false,
		requireBase: false});
	
	var home = {
		url:'/',
		
	};
	var about = {
		url:'/about',
		templateUrl:'modules/about/templates/about.html',
		controller:"AboutController",
		controllerAs:"about"
	};
	
	$stateProvider.state('home',home);
	$stateProvider.state('about',about);
	

	
	
	$urlRouterProvider.otherwise('/');
	
}

appConfig.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];
module.exports = appConfig;