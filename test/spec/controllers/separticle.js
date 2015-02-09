'use strict';

describe('Controller: SeparticleCtrl', function () {

  // load the controller's module
  beforeEach(module('plitkaApp'));

  var SeparticleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SeparticleCtrl = $controller('SeparticleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
