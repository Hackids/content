(function() {
  'use strict';

  angular
    .module('HacKids')
    .controller('DownloadsController', DownloadsController);

  /** @ngInject */
  function DownloadsController($http) {
    var vm = this;
    $http.get('content/hackids/downloads.json').success (function(data){
      vm.downloads = data;
    });
  }
})();
