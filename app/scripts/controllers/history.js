'use strict';

/**
 * @ngdoc function
 * @name danestuckelWebsiteApp.controller:HistoryCtrl
 * @description
 * # HistoryCtrl
 * Controller of the danestuckelWebsiteApp
 */
angular.module('danestuckelWebsiteApp')
  .controller('HistoryCtrl', ['$scope', 'TemplateDecorator', function ($scope, TemplateDecorator) {
    TemplateDecorator.apply($scope);
  }]);
