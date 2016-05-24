(function() {
  'use strict';

  angular
    .module('HacKids')
    .controller('AndaController', AndaController);

  /** @ngInject */
  function AndaController($http) {
    var vm = this;
    $http.get('content/anda/articles.json').success (function(data){
      vm.articles = data;
    });
  }
})();
