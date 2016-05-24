(function() {
  'use strict';

  angular
    .module('HacKids')
    .directive('hackidsNavbar', hackidsNavbar);

  /** @ngInject */
  function hackidsNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          title: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
    }
  }

})();
