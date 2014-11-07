'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('MainCtrl', ['$http', '$rootScope', function ($http, $rootScope) {

		var self = this;

		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;
			self.articles = self.data.articles;
			self.photos = self.data.photos;

			//make articles arr
			self.articlesArr = $.map(self.articles, function(value, index){
				return [value];
			});

			//get promo block
			self.promo = self.data.promo;
			console.log(self.promo);

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
			
		});

		
	}]);
