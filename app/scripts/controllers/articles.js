'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
  .controller('ArticlesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
