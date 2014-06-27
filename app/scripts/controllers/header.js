'use strict';

/**
 * @ngdoc function
 * @name danestuckelWebsiteApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the danestuckelWebsiteApp
 */
angular.module('daneStuckelWebsiteApp')
  .controller('HeaderCtrl', ['$scope', '$location', '$log', function ($scope, $location, $log) {
    $scope.isActive = function (path) {
      return path === $location.path();
    };
  }]);
