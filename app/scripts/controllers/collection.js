'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:CollectionCtrl
 * @description
 * # CollectionCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('CollectionCtrl', ['$http', '$routeParams', function ($http, $routeParams) {
		var self = this;

		//Get data from server
		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;

			//Break data into objects
			self.collectionId = $routeParams.id;
			self.products = self.data.products;
			self.collections = self.data.collections;
			self.photos = self.data.photos;
			self.countries = self.data.countries;
			self.factories = self.data.factory;
			self.galleries = self.data.galleries;
			self.productTypes = self.data.product_type;
			self.surfaceTypes = self.data.surface_type;
			self.formats = self.data.format;

			//Наша коллекция
			self.collection = self.collections[ self.collectionId ];
			//Фото коллекции
			self.collectionPhoto = self.photos[ self.galleries[ self.collection.gallery_id ].photos[0] ].full;
			//Страна нашей коллекции
			self.country = self.countries[ self.collections[ self.collectionId ].country_id ];
			//Имя фабрики коллекции
			self.factoryName = self.factories[ self.collections[ self.collectionId ].factory_id ].name;
			//Изображение фабрики коллекции
			self.factoryImg = self.photos[ self.factories[ self.collections[ self.collectionId ].factory_id ].image_id ].full;
			//Тип поверхности коллекции
			self.collectionSurfType = self.productTypes[ self.collection.product_type_id ].name;
			self.collectionSurfId = self.productTypes[ self.collection.product_type_id ].id;
			//Слайдшоу коллекции
			self.slides = self.galleries[ self.collection.gallery_id ].photos;

			/*
				В этом блоке будем работать с навигацией среди коллекций бренда
			*/
			self.sameCollections = [];
			//Достанем айдишник фабрики из текущей коллекции
			self.mainFactory = self.collection.factory_id;
			//Теперь переберем все коллеции и сформируем массив братских коллекций
			for(var key in self.collections) {
				if(self.collections[key].factory_id == self.mainFactory) self.sameCollections.push(self.collections[key]);
			}
			//Теперь вычислим место отображаемой коллекции в этом поцизии
			self.collectionPos = self.sameCollections.map(function(e) { return e.id; }).indexOf(self.collection.id);
			self.leftLink = (self.sameCollections[self.collectionPos - 1]) ? self.sameCollections[self.collectionPos - 1].id : '';
			self.rightLink = (self.sameCollections[self.collectionPos + 1]) ? self.sameCollections[self.collectionPos + 1].id : '';

			//Fotorama init
			setTimeout( function(){
				jQuery('.fotorama').fotorama({
					width: '60%',
					height: '400',
					nav: false,
					arrows: 'always',
					autoplay: 3000,
					loop: true
				});
			}, 100);
			
			//Места применения
			self.dicvals = self.collection.related_dicvals;
			self.dicvalsArr = []
			if(self.dicvals.length > 0) {
				for(var i = 0; i < self.dicvals.length; i++) {
					self.dicvalsArr.push(self.dicvals[i].name);
				}
			}


			//Make products array for current collection
			self.productsArr = [];
			for(var key in self.products) {
				if( self.products[key].collection_id == self.collectionId ) {
					self.productsArr.push( self.products[key] );
				}
			}

			// SEO REQUIREMENT: 
		    // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
		    // we are finished with this controller.
		    $scope.htmlReady();
		});

	}]);
