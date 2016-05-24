(function() {
  'use strict';

  angular
    .module('HacKids')
    .controller('AndaArticleController', AndaArticleController);

  /** @ngInject */
  function AndaArticleController($scope,$stateParams,$state) {
    var vm = this;
    if($scope.$parent.anda.articles && $scope.$parent.anda.articles[$stateParams.id]){
      vm.article = $scope.$parent.anda.articles[$stateParams.id];
    }else{
      $state.go('^.list');
    }

    vm.next = function(){
      var found = false;
      for (var id in $scope.$parent.anda.articles) {
          if(found){
            $state.go('^.detail',{'id':id});
            return;
          }
          if(id==$stateParams.id){
            found = true;
          }
      }
    }
    vm.prev = function(){
      var found = false;
      for (var id in $scope.$parent.anda.articles) {
        if(id==$stateParams.id){
          if(found){
            $state.go('^.detail',{'id':found});
            return;
          }
        }
        found = id;
      }
    }
  }
})();
