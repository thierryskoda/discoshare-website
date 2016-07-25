import angular from 'angular';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngAnimate from 'angular-animate';

import angEnv from 'angular-environment';

import components from './components/components';
import routes from './routes';
import services from './services';

// var image = require('../assets/images/1x/coffee_image.png');
// console.log("test:", image)

var app = angular.module('app', [
	ngCookies,
	ngAnimate,
	ngResource,
	angEnv,
	components,
	services,
	routes,
])

app.config(function(envServiceProvider) {
	// set the domains and variables for each environment
	envServiceProvider.config({
		domains: {
			development: ['localhost'],
			production: ['']
		},
		vars: {
			development: {
				endpoint: 'http://localhost:3000'
			},
			production: {
				endpoint: ''
			}
		}
	});

	// run the environment check, so the comprobation is made
	// before controllers and services are built
	envServiceProvider.check();
})

app.factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
	return {
	  	// Add authorization token to headers
	  	request: function (config) {
			config.headers = config.headers || {};
			if (config.url && $cookieStore.get('token')) {
			  	config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
			}
			return config;
	  	},

	  	// Intercept 401s and redirect you to login
	  	responseError: function(response) {
			if(response.status === 401) {
		  		$location.path('/login');
		  		// remove any stale tokens
		  		$cookieStore.remove('token');
		  		return $q.reject(response);
			}
			else {
		  		return $q.reject(response);
			}
	  	}
	};
})


app.constant('config', {})


app.run(function ($rootScope, $location, $state, envService, singletonService) {

});
