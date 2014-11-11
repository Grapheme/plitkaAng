'use strict';

describe('Controller: SubmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('plitkaApp'));

  var SubmenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmenuCtrl = $controller('SubmenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
