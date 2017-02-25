angular.module('app').controller('flexController', ['$state',
    function($state){
        var ctrl = this;

        ctrl.boxModelPractice = "div#flexBox{\r\n\r\n}\r\ndiv#flexBox .block{\r\n\r\n}";
        ctrl.masterCss = ""

        ctrl.updateCss = function(){
            ctrl.masterCss = ctrl.boxModelPractice;
        }
}]);

angular.module('app').directive('flex', function(){
    return {
        controller: 'flexController',
        controllerAs: 'flexCtrl',
        restrict: 'E',
        replace: 'true',
        scope: {},
        templateUrl: 'partials/flex-controller.html'
    };

});