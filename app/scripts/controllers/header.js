'use strict';

/**
 * @ngdoc function
 * @name danestuckelWebsiteApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the danestuckelWebsiteApp
 */
angular.module('danestuckelWebsiteApp')
  .controller('HeaderCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (path) {
      return path === $location.path();
    };
  }]);
