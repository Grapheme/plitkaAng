'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
