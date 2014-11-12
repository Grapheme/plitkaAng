'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:SearchResultsCtrl
 * @description
 * # SearchResultsCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('SearchResultsCtrl', ['$rootScope', '$location', '$scope', function ($rootScope, $location, $scope) {
		
		var self = this;
		var data = $rootScope.searchData;

		if (data) {
			console.log(data.results);
			console.log(data);

			self.queryStr = data.queryStr;
			self.articles = data.results.articles;
			self.collections = data.results.collections;
			self.resultsCount = 0;

			for(var k in self.articles) {
				self.resultsCount++;
			}
			for(var j in self.collections) {
				self.resultsCount++;
			}

		}

	}]);
