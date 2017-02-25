angular.module('app').controller('scrollController', ['$state',
    function($state){
        var ctrl = this;

        ctrl.views = ['welcome', 'boxModel', 'measure', 'selectors', 'pseudoClasses', 'multiClasses', 'specificity', 'responsive', 'ngClass', 'flex', 'animations', 'goodPractices', 'crossBrowser'];
        ctrl.currentView = 0;

        ctrl.next = function(){
            ctrl.currentView = (ctrl.currentView == ctrl.views.length-1? 0: ctrl.currentView+1);
            $state.go(ctrl.views[ctrl.currentView]);
        };

        ctrl.previous = function(){
            ctrl.currentView = (ctrl.currentView > 0? ctrl.currentView-1 : ctrl.views.length-1);
            $state.go(ctrl.views[ctrl.currentView]);
        };
}]);