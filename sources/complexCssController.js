angular.module('app').controller('complexCssController', ['$state',
    function($state){
        var ctrl = this;

        ctrl.boxModelPractice = "table#devTeamTable{\r\n\r\n}";
        ctrl.masterCss = ""

        ctrl.updateCss = function(){
            ctrl.masterCss = ctrl.boxModelPractice;
        }
}]);

angular.module('app').directive('complexCss', function(){
    return {
        controller: 'complexCssController',
        controllerAs: 'cssCtrl',
        restrict: 'E',
        replace: 'true',
        scope: {},
        templateUrl: 'partials/complex-css.html'
    };

});