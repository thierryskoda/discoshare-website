'use strict'

module.exports = "app.components.loader";

import template from './loader.html';

let loaderModule = angular.module(module.exports, [])

loaderModule.directive('loader', function($state, $rootScope) {
	return {
    	restrict: 'E',
	    replace: true,
	    template: template,
	    link: function(scope, element) {
      		$rootScope.$on('$stateChangeStart', function(event, currentRoute, previousRoute) {
    			if (previousRoute) return;
        		$timeout(function() {
		          element.removeClass('ng-hide');
	        	});
      		});

      		$rootScope.$on('$stateChangeSuccess', function() {
      	    	element.addClass('ng-hide');
      		});
    	}
  	};
});

export default loaderModule;

