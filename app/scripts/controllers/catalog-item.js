'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:CatalogItemCtrl
 * @description
 * # CatalogItemCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
  .controller('CatalogItemCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
