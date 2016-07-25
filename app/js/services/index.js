import SingletonService from './singleton.service';

module.exports = 'app.services';
var app = angular.module(module.exports, [
    SingletonService
]);
