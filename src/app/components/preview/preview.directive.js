(function() {
  'use strict';

  angular
    .module('HacKids')
    .directive('hackidsPreview', hackidsPreview);

  /** @ngInject */
  function hackidsPreview() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/preview/preview.html',
      scope: {
          article: '='
      },
      controller: PreviewController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function PreviewController() {
    }
  }

})();
