'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:SubmenuCtrl
 * @description
 * # SubmenuCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('SubmenuCtrl', ['$http', '$routeParams', '$location', function($http, $routeParams, $location) {
	
		//Define controller scope as self
		var self = this;

		self.isActive = function(num){
			return num === $routeParams.type;
		};
		//Get data from server
		$http.get(OriginHref).success(function(data){
			self.data = data;

			self.places = self.data.scope;
			self.collectionPlaces = self.data.collections_scopes;

			
			self.materials = self.data.product_type_others_collections;
		});
	}]);
