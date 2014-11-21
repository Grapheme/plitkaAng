'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('MainCtrl', ['$http', '$rootScope', '$scope', function ($http, $rootScope, $scope) {

		var self = this;

		$rootScope.route = '';

		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;
			self.articles = self.data.articles;
			self.photos = self.data.photos;
			self.galleries = self.data.galleries;
			self.factories = self.data.factory;
			self.countries = self.data.countries;
			self.collectionPrices = self.data.collections_prices;

			//make articles arr
			self.articlesArr = $.map(self.articles, function(value, index){
				return [value];
			});

			console.log(self.articlesArr);

			//get promo block
			self.promo = self.data.promo;

			//get collections
			self.collections = self.data.collections;
			self.recCollections = [];

			for(var key in self.collections) {
				if( self.collections[key].show_on_mainpage == 1 ) {
					self.recCollections.push(self.collections[key]);
				}
			}

			//Seo block
			$rootScope.h1 = self.data.pages.index.seo.h1;
			$rootScope.title = self.data.pages.index.seo.title;
			$rootScope.description = self.data.pages.index.seo.title;
			$rootScope.keywords = self.data.pages.index.seo.title;


			//Fotorama init
			setTimeout( function(){
				jQuery('.fotorama').fotorama({
					width: '100%',
					height: '400',
					nav: false,
					arrows: 'always',
					autoplay: 3000,
					loop: true
				});
			}, 100);

			// SEO REQUIREMENT: 
      		// PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
      		// we are finished with this controller. 
      		// See: http://lawsonry.com/p?11040
      		$scope.htmlReady();
			
		});

		
	}]);
