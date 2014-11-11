'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('SearchCtrl', ['$http', '$location', '$rootScope', '$scope', function ($http, $location, $rootScope, $scope) {
		var self = this;

		self.searchStr = '';

		self.sendForm = function(data){
			$.ajax({
				type: 'POST',
				url: 'http://plitka.dev.grapheme.ru/ajax/search',
				data: {
					searctString: data
				},
				dataType: 'json'
			})
			.done(function(data) {
				$rootScope.searchData = data;
				$rootScope.searchData.queryStr = self.searchStr;
				$scope.$apply(function() {
			        $location.path("/search-results");
			    });
			})
			.fail(function(data) {
			})
			.always(function(data) {
			});
		};
	}]);
