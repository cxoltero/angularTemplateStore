'use strict';

// Declare app level module which depends on views, and components
angular.module('templateSite', [
  'ngRoute',
  'templateSite.view1',
  'templateSite.view2',
  'templateSite.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
