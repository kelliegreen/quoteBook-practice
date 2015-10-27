angular.module('quoteBook').controller('mainCtrl', function($scope, dataService) {
	
	$scope.textInput = "mfjftjyjvy";
	
	
	$scope.test = "Hello";
	$scope.quotes = dataService.quotes;
	
	$scope.addQuote = function() {
		var quote = {
			text: $scope.textInput,
			author: $scope.authorInput
		};
		
		dataService.addQuote(quote);
		
	};
	
	$scope.quoteRemove = function (quote) {
		dataService.quoteRemove(quote);
	};
});