'use strict';

/**
 * @ngdoc function
 * @name danestuckelWebsiteApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the danestuckelWebsiteApp
 */
angular.module('danestuckelWebsiteApp')
  .controller('ProjectsCtrl', ['$scope', 'TemplateDecorator', function ($scope, TemplateDecorator) {
    TemplateDecorator.apply($scope);
  }]);
