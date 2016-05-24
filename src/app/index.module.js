(function() {
  'use strict';

  var app = angular
    .module('HacKids', ['ui.router', 'ui.bootstrap']);


  angular
    .module('HacKids')
    .controller('AppController', AppController);

  /** @ngInject */
  function AppController($timeout,$scope) {
    var vm = this;
    vm.bodyClasses = 'default';

    // this'll be called on every state change in the app
    $scope.$on('$stateChangeSuccess', function(event, toState){
        if (angular.isDefined(toState.data.bodyClasses)) {
            vm.bodyClasses = toState.data.bodyClasses;
            return;
        }

        vm.bodyClasses = 'default';
    });
  }

  app.filter("sanitize", function($sce) {
    return function(htmlCode){
      return $sce.trustAsHtml(htmlCode);
    }
  });

})();
