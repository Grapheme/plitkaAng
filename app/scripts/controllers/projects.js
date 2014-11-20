'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('ProjectsCtrl', ['$http', '$scope', function ($http, $scope) {

		//Define controller scope as self
		var self = this;

		//Get data from server
		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;

			//Break data into objects
			self.projects = self.data.projects;
			self.galleries = self.data.galleries;
			self.photos = self.data.photos;

			self.collections = self.data.collections;
			self.products = self.data.products;
			self.factory = self.data.factory;
			self.productTypes = self.data.product_type;


			// SEO REQUIREMENT: 
	      	// PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
	      	// we are finished with this controller.
	      	$scope.htmlReady();
		});
		// Init fancybox for project
		var fancybox = $('.fancybox').fancybox({
			padding: 0,
			helpers: {
				title: {
					type: 'inside'
				}
			}
		});
}]);
