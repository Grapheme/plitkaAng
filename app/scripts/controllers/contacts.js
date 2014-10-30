'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('ContactsCtrl', function () {

		this.mapTo = 'salon';

		this.mapCoords = {
			salon: {
				x: 47.244747,
				y: 39.723161
			},
			store: {
				x: 47.244392,
				y: 39.723188
			}
		};

		this.setMap = function(mapObj) {
			this.mapTo = mapObj;

			this.initialize( this.mapCoords[this.mapTo] );
		};

		this.checkMap = function(mapObj) {
			return this.mapTo === mapObj;
		};
		
		this.initialize = function(coords){
			var mapOptions = {
				zoom: 15,
				zoomControl: false,
				draggable: false,
				scrollwheel: false,
				center: new google.maps.LatLng(coords.x, coords.y),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

			var marker = new google.maps.Marker({
				position: mapOptions.center,
				map: map
			//	icon: 'images/map.png'
			});
		};

		//Init default map
		this.setMap('salon');

	});
