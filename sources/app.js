angular.module('app', ['ngAnimate', 'ngTouch', 'ui.router', 'ui.bootstrap']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/welcome');
     $stateProvider
         .state('welcome', {
             url: '/welcome',
             templateUrl: 'partials/welcome.html'
         });
 });