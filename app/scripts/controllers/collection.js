'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:CollectionCtrl
 * @description
 * # CollectionCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
  .controller('CollectionCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
