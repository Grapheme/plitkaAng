'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('ArticlesCtrl', ['$http', '$rootScope', '$scope', function ($http, $rootScope, $scope) {
	
	//Define controller scope as self
	var self = this;

	$rootScope.route = 'articles';

	//Get data from server
	$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
		self.data = data;

		//Break data into objects
		self.articles = self.data.articles;
		self.photos = self.data.photos;

		$rootScope.h1 = self.data.pages.articles.seo.h1;
		$rootScope.title = self.data.pages.articles.seo.title;
		$rootScope.description = self.data.pages.articles.seo.title;
		$rootScope.keywords = self.data.pages.articles.seo.title;

		// SEO REQUIREMENT: 
        // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
        // we are finished with this controller. 
        $scope.htmlReady();
	});
		
}]);
