'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:SeparticleCtrl
 * @description
 * # SeparticleCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('SeparticleCtrl', ['$http', '$routeParams', '$scope', function ($http, $routeParams, $scope) {

		//Scroll to the top of article
		$( 'html, body').animate({
	        scrollTop: $( 'main' ).offset().top
	    }, 400);

		//Define controller scope as self
		var self = this;

		//Get data from server
		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;

			//Break data into objects
			self.articleId = $routeParams.id;
			self.articles = self.data.articles;
			self.photos = self.data.photos;

			// SEO REQUIREMENT: 
	      	// PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
	      	// we are finished with this controller.
	      	$scope.htmlReady();
		});
	}]);
