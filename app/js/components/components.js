// import Navbar from './navbar/navbar'
module.exports = "app.components";

let componentsModuel = angular.module(module.exports, [
  	require('./navbar/navbar'),
  	require('./loader/loader')
]);

