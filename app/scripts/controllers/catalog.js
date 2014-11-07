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
			//Заполняем массив элементами, по которым идет фильтрация
			//Если такой элемент уже есть, то удаляем его из массива
			self.setCountryFilter = function(id){
				if (self.countryFilter.indexOf(id) == -1) {
					self.countryFilter.push(id);
				} else {
					self.countryFilter.splice( self.countryFilter.indexOf(id), 1 );
				}
				console.log(self.countryFilter);
			};
			//Фильтр элементов по имеющимся странам
			self.filterByCountries = function(id){
				if(self.countryFilter.length > 0) {
					return(self.countryFilter.indexOf(id.country_id) !== -1);
				} else {
					return true;
				}				
			};

		});
	}]);
