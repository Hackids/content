(function() {
  'use strict';

  angular
    .module('HacKids')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.subSites = [
      {
        'title': 'HacKids',
        'url': '#/hackids',
        'image': 'assets/images/btn1.svg'
      },
      {
        'title': 'OIM',
        'url': '#',
        'image': 'assets/images/btn2.svg'
      },
      {
        'title': 'KA Lite',
        'url': '#',
        'image': 'assets/images/btn3.svg'
      },
      {
        'title': 'Wordpress',
        'url': '#',
        'image': 'assets/images/btn4.svg'
      },
      {
        'title': 'Colsubsidio',
        'url': '#',
        'image': 'assets/images/btn5.svg'
      },
      {
        'title': 'Anda',
        'url': '#/anda',
        'image': 'assets/images/btn6.svg'
      },

    ];

  }
})();
