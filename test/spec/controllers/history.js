'use strict';

describe('Controller: HistoryCtrl', function () {

  // load the controller's module
  beforeEach(module('danestuckelWebsiteApp'));

  var HistoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HistoryCtrl = $controller('HistoryCtrl', {
      $scope: scope
    });
  }));

  it('should exist', function () {
    expect(!!HistoryCtrl).toBe(true);
  });
});
