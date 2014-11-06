'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('SearchCtrl', ['$http', function ($http) {
		var self = this;

		self.searchStr = '';
		self.sendForm = function(data){

			var request = $http({
			    method: 'post',
			    url: 'http://plitka.dev.grapheme.ru/ajax/search',
			    data: {
					searctString: data
			    },
			    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});
		};
	}]);
