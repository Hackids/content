(function() {
  'use strict';

  angular
    .module('HacKids')
    .controller('HackidsProjectController', HackidsProjectController);

  /** @ngInject */
  function HackidsProjectController($scope,$stateParams,$state) {
    var vm = this;
    if($scope.$parent.hackids.projects && $scope.$parent.hackids.projects[$stateParams.id]){
      vm.project = $scope.$parent.hackids.projects[$stateParams.id];
    }else{
      $state.go('^.list');
    }

    vm.next = function(){
      var found = false;
      var first = false;
      for (var id in $scope.$parent.hackids.projects) {
          if(!first){
            first = id;
          }
          if(found){
            $state.go('^.detail',{'id':id});
            return;
          }
          if(id==$stateParams.id){
            found = true;
          }
      }
      $state.go('^.detail',{'id':first});
    }
    vm.prev = function(){
      var found = false;
      for (var id in $scope.$parent.hackids.projects) {
        if(id==$stateParams.id){
          if(found){
            $state.go('^.detail',{'id':found});
            return;
          }
        }
        found = id;
      }
      $state.go('^.detail',{'id':id});
    }
  }
})();
