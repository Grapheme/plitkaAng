'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:SeparticleCtrl
 * @description
 * # SeparticleCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('SeparticleCtrl', ['$http', '$routeParams', function ($http, $routeParams) {
		//Define controller scope as self
		var self = this;

		//Get data from server
		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;

			//Break data into objects
			self.articleId = $routeParams.id;
			self.articles = self.data.articles;
			self.photos = self.data.photos;
			
		});
	}]);
