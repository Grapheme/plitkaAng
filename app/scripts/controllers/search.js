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

			$.ajax({
				type: 'POST',
				url: 'http://plitka.dev.grapheme.ru/ajax/search',
				data: {
					searctString: data
				},
				dataType: 'json'
			})
			.done(function() {
				
			})
			.fail(function() {
				
			})
			.always(function() {
				
			});
		};
	}]);
