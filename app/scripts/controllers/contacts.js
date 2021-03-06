'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:ContactsCtrl
 * @description
 * # ContactsCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('ContactsCtrl', ['$http', '$scope', '$rootScope', function($http, $scope, $rootScope) {

		var self = this;

		$rootScope.route = 'contacts';

		this.mapTo = 'salon';
		this.mapCoords = {
			salon: {
				x: 47.244747,
				y: 39.723161,
				zoom: 15
			},
			store: {
				x: 47.249539,
				y: 39.621147,
				zoom: 14
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
				zoom: coords.zoom,
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
		//Form
		this.formData = {};
		this.sendForm = function(data){
			
			$.ajax({
				type: 'POST',
				url: 'http://plitka.dev.grapheme.ru/ajax/feedback',
				data: {
					name: data.name,
					email: data.email,
					text: data.text
				},
				dataType: 'json'
			})
			.done(function() {
				$('.feedback-form').addClass('sended').html('<p><strong>Спасибо!</strong></p><p>Мы получили ваше сообщение и постараемся<br>как можно быстрее ответить</p>');
			})
			.fail(function() {
				
			})
			.always(function() {
				
			});
		};

		//Get contacts - page data
		$http.get(OriginHref).success(function(data){
			self.data = data;

			self.contactsDataBlocks = self.data.pages.contacts.blocks;

			self.header = self.data.pages.contacts.name;
			self.phones = self.contactsDataBlocks['phones'].content;
			self.email = self.contactsDataBlocks['email'].content;
			self.workTime = self.contactsDataBlocks['work-time-clearfix'].content;
			self.contactsColumn = self.contactsDataBlocks['contacts-column'].content;

			$rootScope.h1 = self.data.pages.contacts.seo.h1;
			$rootScope.title = self.data.pages.contacts.seo.title;
			$rootScope.description = self.data.pages.contacts.seo.description;
			$rootScope.keywords = self.data.pages.contacts.seo.keywords;

			// SEO REQUIREMENT: 
      		// PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
    	    // we are finished with this controller.
      		$scope.htmlReady();
		});

	}]);
