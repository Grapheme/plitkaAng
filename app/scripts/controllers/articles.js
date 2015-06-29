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
	$http.get(OriginHref).success(function(data){
		self.data = data;

		//Break data into objects
		var articles_array = [];
		var articles_obj = {};
		$.each(self.data.articles, function(index, value){
			value.this_id = index;
			articles_array.push(value);
		});
		for(var i = articles_array.length - 1; i >= 0; i--) {
			var this_array = articles_array[i];
			articles_obj[this_array.this_id] = this_array;
		}
		console.log(self.data.articles);
		console.log(articles_obj);
		self.articles = articles_array;
		self.photos = self.data.photos;

		$rootScope.h1 = self.data.pages.articles.seo.h1;
		$rootScope.title = self.data.pages.articles.seo.title;
		$rootScope.description = self.data.pages.articles.seo.description;
		$rootScope.keywords = self.data.pages.articles.seo.keywords;

		// SEO REQUIREMENT: 
        // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
        // we are finished with this controller. 
        $scope.htmlReady();
	});
		
}]);
