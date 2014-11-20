'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('AboutCtrl', ['$http', '$scope', function ($http, $scope) {
		
		var self = this;

		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;
			
			self.photos = self.data.photos;

			self.gallery = self.data.galleries[69];

			self.slides = self.gallery.photos;

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
		    $scope.htmlReady();

		});
	}]);