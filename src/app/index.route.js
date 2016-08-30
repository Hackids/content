(function() {
  'use strict';

  angular
    .module('HacKids')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .when("/anda", "/anda/list")
      .when("/h", "/h/projects");

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        data: {
           bodyClasses: 'main'
        }
      }).state('hackids', {
         url: '/h',
         abstract: true,
         templateUrl: 'app/hackids/home.html',
         controller: 'HackidsController',
         controllerAs: 'hackids',
         data: {
            bodyClasses: 'hackids'
        }
      }).state('hackids.list', {
        url:'/projects',
        templateUrl: 'app/hackids/projects.html'
      }).state('hackids.downloads', {
        url: '/downloads',
        controller: 'DownloadsController',
        templateUrl: 'app/hackids/downloads.html',
        controllerAs: 'downloads'
      }).state('hackids.detail', {
        url: '/:id',
        templateUrl: 'app/hackids/project.html',
        controller: 'HackidsProjectController',
        controllerAs: 'projectDetail'
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
        controllerAs: 'andaDetail'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
