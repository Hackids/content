(function() {
  'use strict';

  angular
    .module('HacKids')
    .controller('AndaArticleController', AndaArticleController);

  /** @ngInject */
  function AndaArticleController($scope,$stateParams) {
    var vm = this;
    vm.article = $scope.$parent.anda.articles[$stateParams.id];
    console.log(vm.article);
  }
})();
