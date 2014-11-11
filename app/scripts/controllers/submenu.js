'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:SubmenuCtrl
 * @description
 * # SubmenuCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('SubmenuCtrl', ['$http', function($http) {
	
		//Define controller scope as self
		var self = this;

		//Get data from server
		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;

			self.places = self.data.scope;
			self.collectionPlaces = self.data.collections_scopes;

			console.log(self.collectionPlaces);
		});
	}]);
