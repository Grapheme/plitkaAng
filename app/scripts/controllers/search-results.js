'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:SearchResultsCtrl
 * @description
 * # SearchResultsCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('SearchResultsCtrl', ['$rootScope', '$location', '$scope', '$http', function ($rootScope, $location, $scope, $http) {
		
		var self = this;

		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;

			var data = $rootScope.searchData;

			if (data) {

				self.queryStr = data.queryStr;
				self.articles = data.results.articles;
				self.collections = data.results.collections;

				self.allCollections = self.data.collections;
				self.allArticles = self.data.articles;

				self.photos = self.data.photos;
				self.galleries = self.data.galleries;
				self.factories = self.data.factory;
				self.collectionPrices = self.data.collections_prices;

				self.articlesArr = [];
				self.collectionsArr = [];

				self.resultsCount = 0;

				for(var k in self.articles) {
					self.resultsCount++;
					self.articlesArr.push(k);
				}
				for(var j in self.collections) {
					self.resultsCount++;
					self.collectionsArr.push(j);
				}

				self.searchCollections = [];
				for(var i = 0; i < self.collectionsArr.length; i++) {
					for(var key in self.allCollections) {
						if( self.collectionsArr[i] == key ) {
							self.searchCollections.push(self.allCollections[key]);
						}
					}
				}

				self.searchArticles = [];
				for(var l = 0; l < self.articlesArr.length; l++){
					for(var key in self.allArticles) {
						if( self.articlesArr[l] == key ) {
							self.searchArticles.push(self.allArticles[key]);
						}
					}
				}

				// SEO REQUIREMENT: 
		      	// PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
		      	// we are finished with this controller.
		      	$scope.htmlReady();
			}
		});
	}]);
