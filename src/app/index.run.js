(function() {
  'use strict';

  angular
    .module('HacKids')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
