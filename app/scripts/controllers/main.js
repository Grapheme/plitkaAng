'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		//Fotorama init
		jQuery('.fotorama').fotorama({
			width: '100%',
			height: '400',
			nav: false,
			arrows: 'always'
		});
	});
