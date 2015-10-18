function appConfig($urlRouterProvider, $locationProvider, $stateProvider){
	
	$locationProvider.html5Mode({
		enabled: false,
		requireBase: false});
	
	var home = {
		url:'/',
		data:{
			pageTitle:"home"
		}
		
	};
	var about = {
		url:'/about',
		templateUrl:'modules/about/templates/about.html',
		controller:"AboutController",
		controllerAs:"about",
		data:{
			pageTitle:"About"
		}
		
	};
	
	$stateProvider.state('home',home);
	$stateProvider.state('about',about);
	

	
	
	$urlRouterProvider.otherwise('/');
	
}

appConfig.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];
module.exports = appConfig;