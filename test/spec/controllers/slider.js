'use strict';

describe('Controller: SliderCtrl', function () {

  // load the controller's module
  beforeEach(module('plitkaApp'));

  var SliderctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SliderctrlCtrl = $controller('SliderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
