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
		});

		//Fotorama init
		jQuery('.fotorama').fotorama({
			width: '100%',
			height: '400',
			nav: false,
			arrows: 'always'
		});
	}]);
