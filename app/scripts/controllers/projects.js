'use strict';

/**
 * @ngdoc function
 * @name plitkaApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the plitkaApp
 */
angular.module('plitkaApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
