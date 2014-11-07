'use strict';

describe('Controller: CatalogItemCtrl', function () {

  // load the controller's module
  beforeEach(module('plitkaApp'));

  var CatalogItemCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatalogItemCtrl = $controller('CatalogItemCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
