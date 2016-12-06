'use strict';

angular.
  module('myApp').
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
   $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
   }).otherwise({redirectTo: '/view1'});
}]);

