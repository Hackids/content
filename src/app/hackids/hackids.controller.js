(function() {
  'use strict';

  angular
    .module('HacKids')
    .controller('HackidsController', HackidsController);

  /** @ngInject */
  function HackidsController($http, $state) {
    var vm = this;
    vm.$state = $state;
    $http.get('content/hackids/projects.json').success (function(data){
      vm.projects = data;
    });
  }
})();
