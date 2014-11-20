'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:SeparticleCtrl
 * @description
 * # SeparticleCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('SeparticleCtrl', ['$http', '$routeParams', '$scope', '$rootScope', function ($http, $routeParams, $scope, $rootScope) {

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

			$rootScope.h1 = self.articles[ self.articleId ].seo.h1;
			$rootScope.title = self.articles[ self.articleId ].seo.title;
			$rootScope.description = self.articles[ self.articleId ].seo.description;
			$rootScope.keywords = self.articles[ self.articleId ].seo.keywords;

			// SEO REQUIREMENT: 
	      	// PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
	      	// we are finished with this controller.
	      	$scope.htmlReady();
		});
	}]);
