angular.module('app', ['ngAnimate', 'ngTouch', 'ui.router', 'ui.bootstrap']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/welcome');
     $stateProvider
        .state('welcome', {
            url: '/welcome',
            templateUrl: 'partials/welcome.html'
        })
        .state('animations', {
            url: '/animations',
            templateUrl: 'partials/animations.html'
        })
        .state('boxModel', {
            url: '/box-model',
            templateUrl: 'partials/box-model.html'
        })
        .state('crossBrowser', {
            url: '/cross-browser',
            templateUrl: 'partials/cross-browser.html'
        })
        .state('flex', {
            url: '/flex',
            templateUrl: 'partials/flex.html'
        })
        .state('goodPractices', {
            url: '/good-practices',
            templateUrl: 'partials/good-practices.html'
        })
        .state('measure', {
            url: '/measure',
            templateUrl: 'partials/measure.html'
        })
        .state('multiClasses', {
            url: '/multi-classes',
            templateUrl: 'partials/multi-classes.html'
        })
        .state('ngClass', {
            url: '/ng-class',
            templateUrl: 'partials/ng-class.html'
        })
        .state('pseudoClasses', {
            url: '/pseudo-classes',
            templateUrl: 'partials/pseudo-classes.html'
        })
        .state('responsive', {
            url: '/responsive',
            templateUrl: 'partials/responsive.html'
        })
        .state('selectors', {
            url: '/selectors',
            templateUrl: 'partials/selectors.html'
        })
        .state('selectors2', {
            url: '/selectors2',
            templateUrl: 'partials/selectors2.html'
        })
        .state('selectors3', {
            url: '/selectors3',
            templateUrl: 'partials/selectors3.html'
        })
        .state('specificity', {
            url: '/specificity',
            templateUrl: 'partials/specificity.html'
        });
});