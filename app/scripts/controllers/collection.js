'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:CollectionCtrl
 * @description
 * # CollectionCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('CollectionCtrl', ['$http', '$routeParams', '$scope', '$rootScope', function ($http, $routeParams, $scope, $rootScope) {
		var self = this;

		//Get data from server
		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;

			$.each(self.data.options, function(index, value){
				if(value.slug == 'course_euro_rub') {
					self.course_euro_rub = value.name;
				}
			});

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

			//Теперь нам нужно получить коллекцию не по айдишнику, а по уникальному имени(slug)
			//Сначала из ассоциативного массива коллекций сделаем обычный, чтоб перебрать его и получить
			//Искомую коллекцию
			//А еще лучше - сделаем свой массив с блэкджеком и шлюхами, ключ в котором - slug

			self.collectionBySlug = {};
			for (var key in self.collections) {
				self.collectionBySlug[ self.collections[ key ].slug ] = self.collections[ key ];
			}

			//console.log( self.collectionBySlug );
			self.collections = self.collectionBySlug;

			//Наша коллекция
			self.collection = self.collections[ self.collectionId ];
			//Фото коллекции
			self.collectionPhoto = self.photos[ self.galleries[ self.collection.gallery_id ].photos[0] ].full;
			//Страна нашей коллекции
			self.country = self.countries[ self.collections[ self.collectionId ].country_id ];

			if( self.factories[ self.collections[ self.collectionId ].factory_id ] ) {
				//Имя фабрики коллекции
				self.factoryName = self.factories[ self.collections[ self.collectionId ].factory_id ].name;
				//Изображение фабрики коллекции
				if( self.factories[ self.collections[ self.collectionId ].factory_id ].image_id ) {
					self.factoryImg = self.photos[ self.factories[ self.collections[ self.collectionId ].factory_id ].image_id ].full;
				} else {
					self.factoryImg = '';
				}
				//Тип поверхности коллекции
			}
			
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
			self.leftLink = (self.sameCollections[self.collectionPos - 1]) ? self.sameCollections[self.collectionPos - 1].slug : '';
			self.rightLink = (self.sameCollections[self.collectionPos + 1]) ? self.sameCollections[self.collectionPos + 1].slug : '';

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

			//Fancybox init
			var fancybox = $('.fancybox').fancybox({
				maxWidth: 450,
				wrapCSS: 'collFancybox',
				padding: 0,
				helpers: {
					title: {
						type: 'inside'
					}
				}
			});
			
			//Места применения
			self.dicvals = self.collection.related_dicvals;
			self.dicvalsArr = []
			if(self.dicvals.length > 0) {
				for(var i = 0; i < self.dicvals.length; i++) {
					self.dicvalsArr.push(self.dicvals[i].name);
				}
			}

			self.collectionNumId = self.collectionBySlug[ self.collectionId ].id;
			//Make products array for current collection
			self.productsArr = [];
			for(var key in self.products) {
				if( self.products[key].collection_id == self.collectionNumId ) {
					var product_obj = self.products[key];
					if(product_obj.unit) {
						product_obj.price = parseInt(product_obj.price, 10);
					}
					if(product_obj.price_euro) {
						var product_price = product_obj.price_euro * self.course_euro_rub;
						product_obj.price = product_price;
					}
					if(product_obj.unit) {
						if(self.data.units[product_obj.unit]) {
							var unit_str = self.data.units[product_obj.unit].name;
							product_obj.price += ' руб/' + unit_str;
						}
					}
					self.productsArr.push( product_obj );
				}
			}
			self.realName = self.collection.name;
			var h1_name = self.collection.seo.h1
			if(h1_name && h1_name != '') {
				self.realName = h1_name;
			}

			$rootScope.title = self.collection.seo.title;
			$rootScope.description = self.collection.seo.title;
			$rootScope.keywords = self.collection.seo.title;

			// SEO REQUIREMENT: 
		    // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
		    // we are finished with this controller.
		    $scope.htmlReady();
		});

	}]);
