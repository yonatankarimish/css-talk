angular.module('app').controller('toyController', ['$state',
    function($state){
        var ctrl = this;

        ctrl.boxModelCss = {};
        ctrl.boxModelPractice = "";

        ctrl.updateCss = function(){
            if(ctrl.boxModelPractice.match(/[,\'\"]/g)){
                console.error('Illegal css characters!');
                return;
            }
            var cssArr = ctrl.boxModelPractice.replace(/[\s\r\n]+/g, ' ').split(';');
            var cssObj = {};
            cssArr.forEach(function(element){
                try{
                    var split = element.split(':');
                    if(split[0] && split[1])
                        cssObj[split[0].replace(/(^\s+|\s+$)/, '')] = split[1].replace(/(^\s+|\s+$)/, '');
                }catch(e){
                    console.error('Invalid css markup!');
                }
            });
            ctrl.boxModelCss = cssObj;
        }
}]);

angular.module('app').directive('toy', function(){
    return {
        controller: 'toyController',
        controllerAs: 'toyCtrl',
        restrict: 'E',
        replace: 'true',
        scope: {},
        templateUrl: 'partials/toy.html'
    };

});