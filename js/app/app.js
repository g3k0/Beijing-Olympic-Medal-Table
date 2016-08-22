'use strict';

/**
 * Main module definition
 */
angular.module('appApp', [
  'ui.router'
])
  .config(['$stateProvider', '$urlRouterProvider', _router]);

//---------------------------------------------------------------------------------------------------------------------------

function _router($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('main', {
      url: '/',
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl as vm'
    })

    .state('medal', {
      url: '/',
      templateUrl: 'partials/medal.html',
      controller: 'MainCtrl as vm'
    })

    .state('download', {
      url: '/',
      templateUrl: 'partials/download.html',
      controller: 'MainCtrl as vm'
    })

    .state('contact', {
      url: '/',
      templateUrl: 'partials/contact.html',
      controller: 'MainCtrl as vm'
    });
}