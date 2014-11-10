'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('CatalogCtrl', ['$http',function ($http) {
		
		//Define controller scope as self
		var self = this;

		//Get data from server
		$http.get('http://plitka.dev.grapheme.ru/application/get').success(function(data){
			self.data = data;

			//Break data into objects
			self.productType = self.data.product_type;
			//Коллекции
			self.collections = self.data.collections;
			//Продукты
			self.products = self.data.products;
			//Страны
			self.countries = self.data.countries;
			//Фабрики
			self.factories = self.data.factory;
			//Изображения
			self.photos = self.data.photos;
			//Галереи
			self.galleries = self.data.galleries;
			//Цвета
			self.colors = self.data.colors;
			//Цвета - коллекции
			self.collectionColors = self.data.collections_colors;

			self.chosenProduct = self.productType[Object.keys(self.productType)[0]];
			self.chosenProductId = self.chosenProduct.id;

			//Get all collections for this product type
			self.collectionsArr = [];

			for (var key in self.collections) {
				if ( self.collections[key].product_type_id === self.chosenProductId ){
					self.collectionsArr.push( self.collections[key] );
				}
			}

			//make articles arr
			self.collections = $.map(self.collections, function(value, index){
				return [value];
			});

			//Filters logic
			self.countryFilter = [];
			self.factoryFilter = [];
			self.colorFilter = [];
			self.colorFilterArr = [];
			//Заполняем массив элементами, по которым идет фильтрация
			//Если такой элемент уже есть, то удаляем его из массива
			self.setCountryFilter = function(id){
				var $parent = $('.filter-countries');

				if (self.countryFilter.indexOf(id) == -1) {
					self.countryFilter.push(id);

					//Add active class to filter
					$parent.find('[data-country="' + id + '"]').addClass('active');
				} else {
					self.countryFilter.splice( self.countryFilter.indexOf(id), 1 );
					console.log(id);
					//Remove active class to filter
					$parent.find('[data-country="' + id + '"]').removeClass('active');
				}
				console.log(self.countryFilter);

				//Обновим отображения фильтров
				var chosenFilters = $parent.find('.filter-chosen');
				var filterString = '';
				for( var i = 0; i < self.countryFilter.length; i++ ) {
					filterString += '<li>' + self.countries[ self.countryFilter[i] ].name + '</li> ';
				}
				chosenFilters.html( filterString );
			};
			//Фильтр элементов по имеющимся странам
			self.filterByCountries = function(id){
				if(self.countryFilter.length > 0) {
					return(self.countryFilter.indexOf(id.country_id) !== -1);
				} else {
					return true;
				}				
			};
			//Фильтр по фабрикам
			self.setFactoryFilter = function(id){
				var $parent = $('.filter-factories');

				if (self.factoryFilter.indexOf(id) == -1) {
					self.factoryFilter.push(id);

					//Add active class to filter
					$parent.find('[data-factory="' + id + '"]').addClass('active');
				} else {
					self.factoryFilter.splice( self.factoryFilter.indexOf(id), 1 );
					//Remove active class to filter
					$parent.find('[data-factory="' + id + '"]').removeClass('active');
				}
				console.log(self.factoryFilter);

				//Обновим отображения фильтров
				var chosenFilters = $parent.find('.filter-chosen');
				var filterString = '';
				for( var i = 0; i < self.factoryFilter.length; i++ ) {
					filterString += '<li>' + self.factories[ self.factoryFilter[i] ].name + '</li> ';
				}
				chosenFilters.html( filterString );
			};
			self.filterByFactories = function(id){
				if(self.factoryFilter.length > 0) {
					return(self.factoryFilter.indexOf(id.factory_id) !== -1);
				} else {
					return true;
				}
			};
			//Фильтр по фабрикам
			self.setColorFilter = function(id) {
				var $parent = $('.filter-colors');

				if (self.colorFilter.indexOf(id) == -1) {
					self.colorFilter.push(id);

					//Add active class to filter
					$parent.find('[data-color="' + id + '"]').addClass('active');
				} else {
					self.colorFilter.splice( self.colorFilter.indexOf(id), 1 );
					//Remove active class to filter
					$parent.find('[data-color="' + id + '"]').removeClass('active');
				}

				//Обновим отображения фильтров
				var chosenFilters = $parent.find('.filter-chosen');
				var filterString = '';
				for( var i = 0; i < self.colorFilter.length; i++ ) {
					filterString += '<li>' + self.colors[ self.colorFilter[i] ].name + '</li> ';
				}
				chosenFilters.html( filterString );

				//Сольем все цвета в один массив, чтобы удобней было фильтровать продукты
				self.colorFilterArr = [];
				if(self.colorFilter.length > 0) {
					// for(var j = 0; j < self.colorFilter.length; j++) {
					// 	$.merge(self.colorFilterArr, self.collectionColors[ self.colorFilter[j] ]);
					// }
					console.log(self.collectionColors);
					for(var j = 0; j < self.colorFilter.length; j++) {
						//if( self.colorFilterArr.indexOf( self.colorFilter[j] ) == -1 ) self.colorFilterArr.push( self.colorFilter[j] );
						// for(var k = 0; k < self.colorFilter[j].length; k++) {
						// 	if( self.colorFilterArr.indexOf( self.colorFilter[j][k] ) == -1 ) self.colorFilterArr.push( self.colorFilter[j][k] );
						// }
						// console.log(self.colorFilter.length);
						// console.log(self.colorFilter);
						// console.log(self.colorFilter[j]);
						console.log( self.collectionColors[ self.colorFilter[j] ] );
						//console.log(self.colorFilter[j]);
					}
				}
			};

			self.filterByColors = function(id) {

				if(self.colorFilter.length > 0) {
					
				} else {
					return true;
				}
			}

			//Показываем фильтры
			self.showFilters = function(elem){
				$(elem).toggleClass('active');
			};

		});
	}]);
