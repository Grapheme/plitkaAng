'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:CatalogCtrl
 * @description
 * # CatalogCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
  .controller('CatalogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
