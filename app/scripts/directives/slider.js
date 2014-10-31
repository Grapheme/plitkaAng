'use strict';

/**
 * @ngdoc directive
 * @name plitkaApp.directive:Slider
 * @description
 * # Slider
 */
angular.module('plitkaApp')
	.directive('promoSlider', function () {
		return {
			templateUrl: 'views/partials/slider.html',
			restrict: 'E'
		};
	});
