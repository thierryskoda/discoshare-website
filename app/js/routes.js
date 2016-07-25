require('angular-ui-router');

module.exports = 'app.routes';
var app = angular.module(module.exports, [
  'ui.router',
  require('./controllers/home.controller')
]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  const ROOT_URL = '';

  $stateProvider
        .state('home', {
            url: ROOT_URL + '/',
            template: require('../templates/home.html'),
            controller: 'HomeController'
        })

  $httpProvider.interceptors.push('authInterceptor');
  $locationProvider.html5Mode(true);
})


