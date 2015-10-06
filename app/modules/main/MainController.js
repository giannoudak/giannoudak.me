function MainController() {
	this.message = 'main view'
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
//MainController.$inject = ['$scope'];
module.exports = MainController;