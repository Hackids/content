(function() {
  'use strict';

  angular
    .module('HacKids')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
  }

})();
