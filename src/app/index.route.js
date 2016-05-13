(function() {
  'use strict';

  angular
    .module('HacKids')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("/anda", "/anda/list");

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
        abstract: true,
        templateUrl: 'app/anda/home.html',
        controller: 'AndaController',
        controllerAs: 'anda',
        data: {
           bodyClasses: 'anda'
       }
      }).state('anda.list', {
        url: '/list',
        templateUrl: 'app/anda/list.html'
      }).state('anda.detail', {
        url: '/:id',
        templateUrl: 'app/anda/article.html',
        controller: 'AndaArticleController',
        controllerAs: 'andaDetail',
      });

    $urlRouterProvider.otherwise('/');
  }

})();
