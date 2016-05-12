(function() {
  'use strict';

  angular
    .module('HacKids')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        data: {
           bodyClasses: 'main'
       }
      }).state('anda', {
        url: '/anda',
        templateUrl: 'app/blog/home.html',
        controller: 'BlogController',
        controllerAs: 'anda',
        data: {
           bodyClasses: 'anda'
       }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
