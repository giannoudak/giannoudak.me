function MainController() {
	this.message = 'hello all'
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
//MainController.$inject = ['$scope'];
module.exports = MainController;