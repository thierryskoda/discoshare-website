module.exports = "app.components.navbar";

import template from './navbar.html';

let navbarModule = angular.module(module.exports, [])

navbarModule.directive('discoNavbar', function($state) {
	return {
        restrict: 'E',
        replace: true,
        template: template,
        link: function(scope, elem, attrs) {
        }
	};
});

export default navbarModule;

