'use strict';

/**
 * @ngdoc overview
 * @name plitkaApp
 * @description
 * # plitkaApp
 *
 * Main module of the application.
 */
angular
	.module('plitkaApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch'
	])
	.config(['$httpProvider', function ($httpProvider) {
		// enable http caching
		$httpProvider.defaults.cache = true;
	}])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'MCtrl'
			})
			.when('/about', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl'
			})
			.when('/contacts', {
				templateUrl: 'views/contacts.html',
				controller: 'ContactsCtrl',
				controllerAs: 'ContCtrl'
			})
			.when('/articles', {
				templateUrl: 'views/articles.html',
				controller: 'ArticlesCtrl',
				controllerAs: 'ArtCtrl'
			})
			.when('/catalog', {
				templateUrl: 'views/catalog.html',
				controller: 'CatalogCtrl',
				controllerAs: 'CatCtrl'
			})
			.when('/catalog/:id', {
				templateUrl: 'views/catalog.html',
				controller: 'CatalogCtrl',
				controllerAs: 'CatCtrl'
			})
			.when('/projects', {
				templateUrl: 'views/projects.html',
				controller: 'ProjectsCtrl',
				controllerAs: 'ProjCtrl'
			})
			.when('/article/:id', {
				templateUrl: 'views/separticle.html',
				controller: 'SeparticleCtrl',
				controllerAs: 'SepCtrl'
			})
			.when('/404', {
				templateUrl: 'views/404.html'
			})
.when('/search-results', {
  templateUrl: 'views/search-results.html',
  controller: 'SearchResultsCtrl'
})
			.otherwise({
				redirectTo: '/404'
			});
	});
