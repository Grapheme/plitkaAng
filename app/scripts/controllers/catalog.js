'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('CatalogCtrl', ['$http',function ($http) {
		
		//Define controller scope as self
		var self = this;

		//Get data from server
		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;

			//Break data into objects
			self.productType = self.data.product_type;
			self.collections = self.data.collections;
			self.products = self.data.products;

			self.chosenProduct = self.productType[Object.keys(self.productType)[0]];
			self.chosenProductId = self.chosenProduct.id;

			self.collectionsArr = [];
			console.log(self.collections);

			for (var key in self.collections) {
				if ( self.collections[key].product_type_id === self.chosenProductId ){
					self.collectionsArr.push( self.collections[key] );
				}
			}
			//self.chosenCollections = self.collections[self.chosenProductId];
			console.log(self.collectionsArr);
		});
	}]);
