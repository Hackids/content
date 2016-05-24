(function() {
  'use strict';

  angular
    .module('HacKids')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http) {
    var vm = this;
    $http.get('content/sites.json').success (function(data){
      vm.subSites = data;
    });
  }
})();
