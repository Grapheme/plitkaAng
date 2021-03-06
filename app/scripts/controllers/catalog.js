'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
	.controller('CatalogCtrl', ['$http', '$routeParams', '$cookies', '$scope', '$rootScope', function ($http, $routeParams, $cookies, $scope, $rootScope) {

		//Define controller scope as self
		var self = this;

		$rootScope.route = 'catalog';
		
		//Get data from server
		$http.get(OriginHref).success(function(data){
			self.data = data;
			self.catalogHeader = 'Каталог';

			setTimeout( function(){
				if($cookies.countryFilter) {
					var _cookieCountry = $cookies.countryFilter.split(',');
					for( var i = 0; i < _cookieCountry.length; i++) {
						
							$('[data-country="' + _cookieCountry[i] + '"]').trigger('click');
					}
				}
				if($cookies.factoryFilter) {
					var _cookieFactory = $cookies.factoryFilter.split(',');
					for( var i = 0; i < _cookieFactory.length; i++) {
						
							$('[data-factory="' + _cookieFactory[i] + '"]').trigger('click');
						
					}
				}
				if($cookies.colorFilter) {
					var _cookieColor = $cookies.colorFilter.split(',');
					for( var i = 0; i < _cookieColor.length; i++) {
						
							$('[data-color="' + _cookieColor[i] + '"]').trigger('click');
						
					}
				}
				if($cookies.placeFilter) {
					var _cookiePlace = $cookies.placeFilter.split(',');
					for( var i = 0; i < _cookiePlace.length; i++) {
						
							$('[data-place="' + _cookiePlace[i] + '"]').trigger('click');
						
					}			
				}
				if($cookies.formatFilter) {
					var _cookieFormat = $cookies.formatFilter.split(',');
					for( var i = 0; i < _cookieFormat.length; i++) {
						
							$('[data-format="' + _cookieFormat[i] + '"]').trigger('click');
						
					}		
				}
				if($cookies.surfaceTypesFilter) {
					var _cookieSurfaceTypes = $cookies.surfaceTypesFilter.split(',');
					for( var i = 0; i < _cookieSurfaceTypes.length; i++) {
						
							$('[data-surface-type="' + _cookieSurfaceTypes[i] + '"]').trigger('click');
						
					}		
				}
				if($cookies.surfaceFilter) {
					var _cookieSurface = $cookies.surfaceFilter.split(',');
					for( var i = 0; i < _cookieSurface.length; i++) {
						
							$('[data-surface="' + _cookieSurface[i] + '"]').trigger('click');
						
					}
				}
			}, 1000);

			//Break data into objects
			self.productType = self.data.product_type;
			//Коллекции
			self.collections = self.data.collections;
			//Сопутствующие материалы
			self.materialsCollections = self.data.product_type_others_collections;
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
			//Цена - коллекции
			self.collectionPrices = self.data.collections_prices;
			//Типы поверхности - коллекции
			self.surfaceTypes = self.data.surface_type;			
			self.collectionSurfaces = self.data.collections_surface_types;
			//Места - коллекции
			self.places = self.data.scope;
			self.collectionPlaces = self.data.collections_scopes;
			//Формат - коллекции
			self.formats = self.data.format;
			self.collectionFormats = self.data.collections_formats;
			//Поверхности - коллекции
			self.surfaces = self.data.surface;
			self.collectionSurfacesTypes = self.data.collections_surfaces;

			self.chosenProduct = self.productType[Object.keys(self.productType)[0]];
			self.chosenProductId = self.chosenProduct.id;

			self.collectionsFilter = [];
			//Если указана единица - то мы применяем к коллекциям фильтр по типу поверхности
			self.catalogPos = $routeParams.type;

			if($routeParams.id == 'plitka') {
				for(var key in self.collections) {
					if(self.collections[key].product_type_id == 75) {
						self.collectionsFilter.push(self.collections[key]);
					}
				}
				self.collections = self.collectionsFilter;
				self.catalogHeader = self.productType[75].name || 'Каталог';
			}
			if($routeParams.id == 'iskusstvenniy_kamen') {
				for(var key in self.collections) {
					if(self.collections[key].product_type_id == 76) {
						self.collectionsFilter.push(self.collections[key]);
					}
				}
				self.collections = self.collectionsFilter;
				self.catalogHeader = self.productType[76].name || 'Каталог';
			}
			if($routeParams.id == 'kamen') {
				for(var key in self.collections) {
					if(self.collections[key].product_type_id == 76.5-0.5 || self.collections[key].product_type_id == 76.5+0.5) {
						self.collectionsFilter.push(self.collections[key]);
					}
				}
				self.collections = self.collectionsFilter;
				self.catalogHeader = 'Камень';
			}
			if($routeParams.id == 'naturalniy_kamen') {
				for(var key in self.collections) {
					if(self.collections[key].product_type_id == 77) {
						self.collectionsFilter.push(self.collections[key]);
					}
				}
				self.collections = self.collectionsFilter;
				self.catalogHeader = self.productType[77].name || 'Каталог';
			}
			if($routeParams.id == 'mozaika') {
				for(var key in self.collections) {
					if(self.collections[key].product_type_id == 78) {
						self.collectionsFilter.push(self.collections[key]);
					}
				}
				self.collections = self.collectionsFilter;
				self.catalogHeader = self.productType[78].name || 'Каталог';
			}
			if($routeParams.id == 'soputstvuiuschie_materiali') {
				for(var key in self.materialsCollections) {
					if(self.materialsCollections[key].product_type_id == 79) {
						self.collectionsFilter.push(self.materialsCollections[key]);
					}
				}
				self.collections = self.collectionsFilter;
				self.catalogHeader = self.productType[79].name || 'Каталог';
			}

			self.clearFiltersByURL = function(){
				$cookies.placeFilter = [];
				$cookies.surfaceTypesFilter = [];
				$cookies.factoryFilter = [];
			}

			//Если указана двойка - то мы применяем к коллекция фильтр по месту применения
			if($routeParams.id == 1 && $routeParams.places) {
				self.clearFiltersByURL();

				setTimeout( function(){
					$('[data-place="' + $routeParams.places + '"]').trigger('click');
				}, 1001);
			}
			if($routeParams.id == 1 && $routeParams.surface) {
				self.clearFiltersByURL();

				setTimeout( function(){
					$('[data-surface-type="' + $routeParams.surface + '"]').trigger('click');
				}, 1001);
			}
			if($routeParams.id == 1 && $routeParams.factory) {
				self.clearFiltersByURL();

				setTimeout( function(){
					$('[data-factory="' + $routeParams.factory + '"]').trigger('click');
				}, 1001);
			}

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
			self.minPrice = '';
			self.surfaceFilter = [];
			self.surfaceFilterArr = [];
			self.placeFilter = [];
			self.placeFilterArr = [];
			self.formatFilter = [];
			self.formatFilterArr = [];
			self.surfaceTypesFilter = [];
			self.surfaceTypesFilterArr = [];
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
					//Remove active class to filter
					$parent.find('[data-country="' + id + '"]').removeClass('active');
				}

				//Добавляем результаты в куки
				$cookies.countryFilter = self.countryFilter;

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
				
				//Добавляем результаты в куки
				$cookies.factoryFilter = self.factoryFilter;

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
			//Фильтр по цветам
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

				//Добавляем результаты в куки
				$cookies.colorFilter = self.colorFilter;

				//Обновим отображения фильтров
				var chosenFilters = $parent.find('.filter-chosen');
				var filterString = '';
				for( var i = 0; i < self.colorFilter.length; i++ ) {
					filterString += '<li style="background-color: #' + self.colors[ self.colorFilter[i] ].css_code + '"></li> ';
				}
				chosenFilters.html( filterString );

				//Сольем все цвета в один массив, чтобы удобней было фильтровать продукты
				self.colorFilterArr = [];

				if(self.colorFilter.length > 0) {

					for(var j = 0; j < self.colorFilter.length; j++) {

						for(var k = 0; k < self.collectionColors[ self.colorFilter[j] ].length; k++) {

							if( self.colorFilterArr.indexOf( self.collectionColors[ self.colorFilter[j] ][k] ) == -1 ) {
								self.colorFilterArr.push( self.collectionColors[ self.colorFilter[j] ][k] );
							}

						}

					}

				}
			};
			self.filterByColors = function(id) {

				if(self.colorFilterArr.length > 0) {
					return(self.colorFilterArr.indexOf( +id.id) !== -1);
				} else {
					return true;
				}
			};
			//Фильтр по ценам
			self.setPriceFilter = function(id) {
				var $parent = $('.filter-prices');

				if( $parent.find('[data-price="' + id + '"]').hasClass('active') ) {
					$parent.find('[data-price]').removeClass('active');
					self.minPrice = '';
				} else {
					$parent.find('[data-price]').removeClass('active');
					$parent.find('[data-price="' + id + '"]').toggleClass('active');

					self.minPrice = +id;
				}
				var chosenFilters = $parent.find('.filter-chosen');
				var filterPriceText = '';

				if( self.minPrice != '' ) {
					filterPriceText = $parent.find('[data-price="' + id + '"]').text();
				}
				else {
					filterPriceText = '';
				}
				//Добавляем результаты в куки
				$cookies.filterPriceText = filterPriceText;
				chosenFilters.html( '<li>' + filterPriceText + '</li>' );
			}
			self.filterByPrice = function(id) {
				if(self.minPrice == 1000) {
					return( self.collectionPrices[id.id] <= 1000 );
				}
				else if(self.minPrice == 2000) {
					return( self.collectionPrices[id.id] > 1000 && self.collectionPrices[id.id] <= 2000 );
				}
				else if(self.minPrice == 2001) {
					return( self.collectionPrices[id.id] >= 2001 );
				}
				else {
					return true;
				}
			}
			//Фильтр по поверхностям
			self.setSurfaceFilter = function(id) {
				var $parent = $('.filter-surface');

				if (self.surfaceFilter.indexOf(id) == -1) {
					self.surfaceFilter.push(id);

					//Add active class to filter
					$parent.find('[data-surface="' + id + '"]').addClass('active');
				} else {
					self.surfaceFilter.splice( self.surfaceFilter.indexOf(id), 1 );
					//Remove active class to filter
					$parent.find('[data-surface="' + id + '"]').removeClass('active');
				}

				//Добавляем результаты в куки
				$cookies.surfaceFilter = self.surfaceFilter;

				//Обновим отображения фильтров
				var chosenFilters = $parent.find('.filter-chosen');
				var filterString = '';
				for( var i = 0; i < self.surfaceFilter.length; i++ ) {
					filterString += '<li>' + self.surfaceTypes[ self.surfaceFilter[i] ].name + '</li> ';
				}
				chosenFilters.html( filterString );

				//Сольем все поверзности в один массив
				self.surfaceFilterArr = [];

				if(self.surfaceFilter.length > 0) {

					for(var j = 0; j < self.surfaceFilter.length; j++) {

						for(var k = 0; k < self.collectionSurfaces[ self.surfaceFilter[j] ].length; k++) {

							if( self.surfaceFilterArr.indexOf( self.collectionSurfaces[ self.surfaceFilter[j] ][k] ) == -1 ) {
								self.surfaceFilterArr.push( self.collectionSurfaces[ self.surfaceFilter[j] ][k] );
							}

						}

					}

				}
			}
			self.filterBySurface = function(id) {
				if(self.surfaceFilterArr.length > 0) {
					return(self.surfaceFilterArr.indexOf( +id.id) !== -1);
				} else {
					return true;
				}
			}
			//Фильтр по местам применения
			self.setPlacesFilter = function(id) {
				var $parent = $('.filter-place');

				if (self.placeFilter.indexOf(id) == -1) {
					self.placeFilter.push(id);

					//Add active class to filter
					$parent.find('[data-place="' + id + '"]').addClass('active');
				} else {
					self.placeFilter.splice( self.placeFilter.indexOf(id), 1 );
					//Remove active class to filter
					$parent.find('[data-place="' + id + '"]').removeClass('active');
				}

				//Добавляем результаты в куки
				$cookies.placeFilter = self.placeFilter;

				//Обновим отображения фильтров
				var chosenFilters = $parent.find('.filter-chosen');
				var filterString = '';
				for( var i = 0; i < self.placeFilter.length; i++ ) {
					filterString += '<li>' + self.places[ self.placeFilter[i] ].name + '</li> ';
				}
				chosenFilters.html( filterString );

				//Сольем все поверзности в один массив
				self.placeFilterArr = [];

				if(self.placeFilter.length > 0) {

				 	for(var j = 0; j < self.placeFilter.length; j++) {

						for(var k = 0; k < self.collectionPlaces[ self.placeFilter[j] ].length; k++) {

							if( self.placeFilterArr.indexOf( self.collectionPlaces[ self.placeFilter[j] ][k] ) == -1 ) {
								self.placeFilterArr.push( self.collectionPlaces[ self.placeFilter[j] ][k] );
							}

						}

					}

				}
			}
			self.filterByPlace = function(id) {
				if(self.placeFilterArr.length > 0) {
					return(self.placeFilterArr.indexOf( id.id) !== -1);
				} else {
					return true;
				}
			}
			//Фильтр по форматам
			self.setFormatsFilter = function(id) {

				var $parent = $('.filter-format');

				if (self.formatFilter.indexOf(id) == -1) {
					self.formatFilter.push(id);

					//Add active class to filter
					$parent.find('[data-format="' + id + '"]').addClass('active');
				} else {
					self.formatFilter.splice( self.formatFilter.indexOf(id), 1 );
					//Remove active class to filter
					$parent.find('[data-format="' + id + '"]').removeClass('active');
				}

				//Добавляем результаты в куки
				$cookies.formatFilter = self.formatFilter;

				//Обновим отображения фильтров
				var chosenFilters = $parent.find('.filter-chosen');
				var filterString = '';
				for( var i = 0; i < self.formatFilter.length; i++ ) {
					filterString += '<li>' + self.formats[ self.formatFilter[i] ].name + '</li> ';
				}
				chosenFilters.html( filterString );

				//Сольем все поверзности в один массив
				self.formatFilterArr = [];

				if(self.formatFilter.length > 0) {

				 	for(var j = 0; j < self.formatFilter.length; j++) {

						for(var k = 0; k < self.collectionFormats[ self.formatFilter[j] ].length; k++) {

							if( self.formatFilterArr.indexOf( self.collectionFormats[ self.formatFilter[j] ][k] ) == -1 ) {
								self.formatFilterArr.push( self.collectionFormats[ self.formatFilter[j] ][k] );
							}

						}

					}

				}
			}
			self.filterByFormat = function(id) {
				if(self.formatFilterArr.length > 0) {
					return(self.formatFilterArr.indexOf( +id.id) !== -1);
				} else {
					return true;
				}
			}
			//Фильтр по типам поверхности
			self.setSurfaceTypesFilter = function(id) {
				// self.surfaces = self.data.surface;
				// self.collectionsSurfaces = self.data.collections_surfaces;
				// self.surfaceTypesFilter = [];
				// self.surfaceTypesFilterArr = [];

				var $parent = $('.filter-surface-type');

				if (self.surfaceTypesFilter.indexOf(id) == -1) {
					self.surfaceTypesFilter.push(id);

					//Add active class to filter
					$parent.find('[data-surface-type="' + id + '"]').addClass('active');
				} else {
					self.surfaceTypesFilter.splice( self.surfaceTypesFilter.indexOf(id), 1 );
					//Remove active class to filter
					$parent.find('[data-surface-type="' + id + '"]').removeClass('active');
				}

				//Добавляем результаты в куки
				$cookies.surfaceTypesFilter = self.surfaceTypesFilter;

				//Обновим отображения фильтров
				var chosenFilters = $parent.find('.filter-chosen');
				var filterString = '';
				for( var i = 0; i < self.surfaceTypesFilter.length; i++ ) {
					filterString += '<li>' + self.surfaces[ self.surfaceTypesFilter[i] ].name + '</li> ';
				}
				chosenFilters.html( filterString );

				//Сольем все поверзности в один массив
				self.surfaceTypesFilterArr = [];

				if(self.surfaceTypesFilter.length > 0) {

				 	for(var j = 0; j < self.surfaceTypesFilter.length; j++) {

						for(var k = 0; k < self.collectionSurfacesTypes[ self.surfaceTypesFilter[j] ].length; k++) {

							if( self.surfaceTypesFilterArr.indexOf( self.collectionSurfacesTypes[ self.surfaceTypesFilter[j] ][k] ) == -1 ) {
								self.surfaceTypesFilterArr.push( self.collectionSurfacesTypes[ self.surfaceTypesFilter[j] ][k] );
							}

						}

					}

				}
			}
			self.filterBySurfaceTypes = function(id) {
				if(self.surfaceTypesFilterArr.length > 0) {
					return(self.surfaceTypesFilterArr.indexOf(id.id) !== -1);
				} else {
					return true;
				}
			}

			//Показываем фильтры
			self.showFilters = function(elem){
				if( $(elem).hasClass('active') ) {
					$(elem).removeClass('active');
				} else {
					$('.filter').removeClass('active');
					$(elem).addClass('active');
				}				
			};

			//Событие скрытия фильтров
			$('.filter').click( function(e){
				e.stopPropagation();
			});
			$(document).click( function(){
				$('.filter').removeClass('active');
			});

			$rootScope.h1 = self.data.pages.catalog.seo.h1;
			$rootScope.title = self.data.pages.catalog.seo.title;
			$rootScope.description = self.data.pages.catalog.seo.description;
			$rootScope.keywords = self.data.pages.catalog.seo.keywords;

			// SEO REQUIREMENT: 
	        // PhantomJS pre-rendering workflow requires the page to declare, through htmlReady(), that
	        // we are finished with this controller.
	        $scope.htmlReady();

		});
	}]);
