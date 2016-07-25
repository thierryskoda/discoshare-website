/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(24)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(23)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: 'brandon_text_regular';\n  src: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./BrandonText-Regular/BrandonText-Regular.eot\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ");\n  src: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./BrandonText-Regular/BrandonText-Regular.eot\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./BrandonText-Regular/BrandonText-Regular.ttf\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format(\"truetype\"), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./BrandonText-Regular/BrandonText-Regular.svg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n/*@font-face {\n    font-family: 'brandon_text_black';\n    src: url('/../assets/fonts/BrandonText-Black/BrandonText-Black.otf');\n    font-style: normal;\n}\n\n\n@font-face {\n    font-family: 'brandon_text_light';\n    src: url('/../assets/fonts/BrandonText-Light/BrandonText-Light.otf');\n    font-weight: normal;\n    font-style: normal;\n}\n\n\n@font-face {\n    font-family: 'brandon_text_bold';\n    src: url('/../assets/fonts/BrandonText-Bold/BrandonText-Bold.otf');\n    font-weight: normal;\n    font-style: normal;\n}\n*/\n* {\n  box-sizing: border-box; }\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  /*font-family: 'brandon_text_regular';*/ }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.container-fluid,\n.container {\n  margin-right: auto;\n  margin-left: auto; }\n\n.container-fluid {\n  padding-right: 2rem;\n  padding-left: 2rem; }\n\n.row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: 0px;\n  margin-left: 0px; }\n  .row--column {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.row.reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse; }\n\n.col.reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse; }\n\n.col-xs,\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-offset-0,\n.col-xs-offset-1,\n.col-xs-offset-2,\n.col-xs-offset-3,\n.col-xs-offset-4,\n.col-xs-offset-5,\n.col-xs-offset-6,\n.col-xs-offset-7,\n.col-xs-offset-8,\n.col-xs-offset-9,\n.col-xs-offset-10,\n.col-xs-offset-11,\n.col-xs-offset-12 {\n  box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding-right: 0px;\n  padding-left: 0px; }\n\n.col-xs {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%; }\n\n.col-xs-1 {\n  -ms-flex-preferred-size: 8.333%;\n  flex-basis: 8.333%;\n  max-width: 8.333%; }\n\n.col-xs-2 {\n  -ms-flex-preferred-size: 16.666%;\n  flex-basis: 16.666%;\n  max-width: 16.666%; }\n\n.col-xs-3 {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%; }\n\n.col-xs-4 {\n  -ms-flex-preferred-size: 33.333%;\n  flex-basis: 33.333%;\n  max-width: 33.333%; }\n\n.col-xs-5 {\n  -ms-flex-preferred-size: 41.667%;\n  flex-basis: 41.667%;\n  max-width: 41.667%; }\n\n.col-xs-6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%; }\n\n.col-xs-7 {\n  -ms-flex-preferred-size: 58.333%;\n  flex-basis: 58.333%;\n  max-width: 58.333%; }\n\n.col-xs-8 {\n  -ms-flex-preferred-size: 66.667%;\n  flex-basis: 66.667%;\n  max-width: 66.667%; }\n\n.col-xs-9 {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%; }\n\n.col-xs-10 {\n  -ms-flex-preferred-size: 83.333%;\n  flex-basis: 83.333%;\n  max-width: 83.333%; }\n\n.col-xs-11 {\n  -ms-flex-preferred-size: 91.667%;\n  flex-basis: 91.667%;\n  max-width: 91.667%; }\n\n.col-xs-12 {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0; }\n\n.col-xs-offset-1 {\n  margin-left: 8.333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.666%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.667%; }\n\n.start-xs {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start; }\n\n.center-xs {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center; }\n\n.end-xs {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end; }\n\n.top-xs {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  -ms-grid-row-align: flex-start;\n      align-items: flex-start; }\n\n.middle-xs {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n      align-items: center; }\n\n.bottom-xs {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  -ms-grid-row-align: flex-end;\n      align-items: flex-end; }\n\n.around-xs {\n  -ms-flex-pack: distribute;\n  justify-content: space-around; }\n\n.between-xs {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.first-xs {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1; }\n\n.last-xs {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1; }\n\n@media only screen and (min-width: 58em) {\n  .container {\n    width: 49rem; }\n  .col-sm,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-offset-0,\n  .col-sm-offset-1,\n  .col-sm-offset-2,\n  .col-sm-offset-3,\n  .col-sm-offset-4,\n  .col-sm-offset-5,\n  .col-sm-offset-6,\n  .col-sm-offset-7,\n  .col-sm-offset-8,\n  .col-sm-offset-9,\n  .col-sm-offset-10,\n  .col-sm-offset-11,\n  .col-sm-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0px;\n    padding-left: 0px; }\n  .col-sm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%; }\n  .col-sm-1 {\n    -ms-flex-preferred-size: 8.333%;\n    flex-basis: 8.333%;\n    max-width: 8.333%; }\n  .col-sm-2 {\n    -ms-flex-preferred-size: 16.666%;\n    flex-basis: 16.666%;\n    max-width: 16.666%; }\n  .col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -ms-flex-preferred-size: 33.333%;\n    flex-basis: 33.333%;\n    max-width: 33.333%; }\n  .col-sm-5 {\n    -ms-flex-preferred-size: 41.667%;\n    flex-basis: 41.667%;\n    max-width: 41.667%; }\n  .col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -ms-flex-preferred-size: 58.333%;\n    flex-basis: 58.333%;\n    max-width: 58.333%; }\n  .col-sm-8 {\n    -ms-flex-preferred-size: 66.667%;\n    flex-basis: 66.667%;\n    max-width: 66.667%; }\n  .col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -ms-flex-preferred-size: 83.333%;\n    flex-basis: 83.333%;\n    max-width: 83.333%; }\n  .col-sm-11 {\n    -ms-flex-preferred-size: 91.667%;\n    flex-basis: 91.667%;\n    max-width: 91.667%; }\n  .col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0; }\n  .col-sm-offset-1 {\n    margin-left: 8.333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.666%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.667%; }\n  .start-sm {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start; }\n  .center-sm {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center; }\n  .end-sm {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end; }\n  .top-sm {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    -ms-grid-row-align: flex-start;\n        align-items: flex-start; }\n  .middle-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -ms-grid-row-align: center;\n        align-items: center; }\n  .bottom-sm {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    -ms-grid-row-align: flex-end;\n        align-items: flex-end; }\n  .around-sm {\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  .between-sm {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  .first-sm {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1; }\n  .last-sm {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1; } }\n\n@media only screen and (min-width: 64em) {\n  .container {\n    width: 65rem; }\n  .col-md,\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-offset-0,\n  .col-md-offset-1,\n  .col-md-offset-2,\n  .col-md-offset-3,\n  .col-md-offset-4,\n  .col-md-offset-5,\n  .col-md-offset-6,\n  .col-md-offset-7,\n  .col-md-offset-8,\n  .col-md-offset-9,\n  .col-md-offset-10,\n  .col-md-offset-11,\n  .col-md-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0px;\n    padding-left: 0px; }\n  .col-md {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%; }\n  .col-md-1 {\n    -ms-flex-preferred-size: 8.333%;\n    flex-basis: 8.333%;\n    max-width: 8.333%; }\n  .col-md-2 {\n    -ms-flex-preferred-size: 16.666%;\n    flex-basis: 16.666%;\n    max-width: 16.666%; }\n  .col-md-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -ms-flex-preferred-size: 33.333%;\n    flex-basis: 33.333%;\n    max-width: 33.333%; }\n  .col-md-5 {\n    -ms-flex-preferred-size: 41.667%;\n    flex-basis: 41.667%;\n    max-width: 41.667%; }\n  .col-md-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -ms-flex-preferred-size: 58.333%;\n    flex-basis: 58.333%;\n    max-width: 58.333%; }\n  .col-md-8 {\n    -ms-flex-preferred-size: 66.667%;\n    flex-basis: 66.667%;\n    max-width: 66.667%; }\n  .col-md-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -ms-flex-preferred-size: 83.333%;\n    flex-basis: 83.333%;\n    max-width: 83.333%; }\n  .col-md-11 {\n    -ms-flex-preferred-size: 91.667%;\n    flex-basis: 91.667%;\n    max-width: 91.667%; }\n  .col-md-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0; }\n  .col-md-offset-1 {\n    margin-left: 8.333%; }\n  .col-md-offset-2 {\n    margin-left: 16.666%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.333%; }\n  .col-md-offset-5 {\n    margin-left: 41.667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.333%; }\n  .col-md-offset-8 {\n    margin-left: 66.667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.333%; }\n  .col-md-offset-11 {\n    margin-left: 91.667%; }\n  .start-md {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start; }\n  .center-md {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center; }\n  .end-md {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end; }\n  .top-md {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    -ms-grid-row-align: flex-start;\n        align-items: flex-start; }\n  .middle-md {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -ms-grid-row-align: center;\n        align-items: center; }\n  .bottom-md {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    -ms-grid-row-align: flex-end;\n        align-items: flex-end; }\n  .around-md {\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  .between-md {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  .first-md {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1; }\n  .last-md {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1; } }\n\n@media only screen and (min-width: 70em) {\n  .container {\n    width: 76rem; }\n  .col-lg,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-offset-0,\n  .col-lg-offset-1,\n  .col-lg-offset-2,\n  .col-lg-offset-3,\n  .col-lg-offset-4,\n  .col-lg-offset-5,\n  .col-lg-offset-6,\n  .col-lg-offset-7,\n  .col-lg-offset-8,\n  .col-lg-offset-9,\n  .col-lg-offset-10,\n  .col-lg-offset-11,\n  .col-lg-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0px;\n    padding-left: 0px; }\n  .col-lg {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%; }\n  .col-lg-1 {\n    -ms-flex-preferred-size: 8.333%;\n    flex-basis: 8.333%;\n    max-width: 8.333%; }\n  .col-lg-2 {\n    -ms-flex-preferred-size: 16.666%;\n    flex-basis: 16.666%;\n    max-width: 16.666%; }\n  .col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -ms-flex-preferred-size: 33.333%;\n    flex-basis: 33.333%;\n    max-width: 33.333%; }\n  .col-lg-5 {\n    -ms-flex-preferred-size: 41.667%;\n    flex-basis: 41.667%;\n    max-width: 41.667%; }\n  .col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -ms-flex-preferred-size: 58.333%;\n    flex-basis: 58.333%;\n    max-width: 58.333%; }\n  .col-lg-8 {\n    -ms-flex-preferred-size: 66.667%;\n    flex-basis: 66.667%;\n    max-width: 66.667%; }\n  .col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -ms-flex-preferred-size: 83.333%;\n    flex-basis: 83.333%;\n    max-width: 83.333%; }\n  .col-lg-11 {\n    -ms-flex-preferred-size: 91.667%;\n    flex-basis: 91.667%;\n    max-width: 91.667%; }\n  .col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0; }\n  .col-lg-offset-1 {\n    margin-left: 8.333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.666%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.667%; }\n  .start-lg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start; }\n  .center-lg {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center; }\n  .end-lg {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end; }\n  .top-lg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    -ms-grid-row-align: flex-start;\n        align-items: flex-start; }\n  .middle-lg {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -ms-grid-row-align: center;\n        align-items: center; }\n  .bottom-lg {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    -ms-grid-row-align: flex-end;\n        align-items: flex-end; }\n  .around-lg {\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n  .between-lg {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  .first-lg {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1; }\n  .last-lg {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1; } }\n\nbody {\n  font-family: 'brandon_text_regular'; }\n\nui-view.ng-enter {\n  -webkit-animation: fadeIn 0.5s ease;\n          animation: fadeIn 0.5s ease; }\n\n.d-btn {\n  border-radius: 25px;\n  padding: 1em 1em;\n  font-size: 1em;\n  outline: none;\n  border: none;\n  background-color: #FEE35D;\n  cursor: pointer; }\n  .d-btn--pink {\n    background-color: #99559E; }\n\n.d-section {\n  height: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 2em 0em;\n  text-align: center;\n  position: relative;\n  overflow: hidden; }\n  @media screen and (min-width: 58em) {\n    .d-section {\n      min-height: 800px; } }\n  .d-section--column {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .d-section--no-padding {\n    padding: 0em; }\n  .d-section__title  {\n    color: #284656;\n    font-size: 2.5em;\n    margin: 0em; }\n  .d-section__separator {\n    margin: 2em auto 0em;\n    height: 5px;\n    width: 30px;\n    background-color: #284656; }\n    .d-section__separator--blue {\n      background-color: #73CEE1; }\n  .d-section__text-medium {\n    font-size: 1.5em; }\n\n.section-video {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.section-what {\n  padding: 0em; }\n  @media screen and (max-width: 58em) {\n    .section-what {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .section-what__left-side {\n    background-color: #51BE9F;\n    -ms-flex-preferred-size: 65%;\n        flex-basis: 65%;\n    padding: 2em 0em;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: flex;\n        -ms-flex-pack: flex;\n            justify-content: flex; }\n    .section-what__left-side__body-text {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      text-align: left;\n      color: white;\n      width: 100%;\n      max-width: 600px;\n      margin: auto;\n      line-height: 2em; }\n  .section-what__right-side {\n    -ms-flex-preferred-size: 35%;\n        flex-basis: 35%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    background-image: url(\"http://placehold.it/400x400\");\n    background-size: cover;\n    background-position: center; }\n    .section-what__right-side__iphone-img {\n      height: auto;\n      max-height: 100%;\n      max-width: 100%;\n      padding-top: 1em; }\n\n.section-how {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  color: #FFFFFF;\n  background-color: #284656; }\n  .section-how__steps {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    .section-how__steps__item {\n      margin: 0em 2em;\n      -ms-flex-preferred-size: 25%;\n          flex-basis: 25%;\n      width: 25%; }\n      .section-how__steps__item__number {\n        font-size: 3em;\n        display: block;\n        margin-bottom: 1.5em; }\n      .section-how__steps__item__text {\n        line-height: 1.5em; }\n  .section-how__cta .d-btn {\n    margin-top: 1em; }\n\n.section-geofilters {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .section-geofilters__geofilters__carousel {\n    width: 100%;\n    max-width: 800px;\n    margin: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .section-geofilters__geofilters__carousel__item {\n      -ms-flex-preferred-size: 20%;\n          flex-basis: 20%;\n      width: 20%;\n      height: 200px;\n      margin-right: 1em;\n      background-image: url(\"http://placehold.it/200x400\");\n      background-size: cover; }\n      .section-geofilters__geofilters__carousel__item--last {\n        margin-right: 0em; }\n\n.section-reviews {\n  color: #FFFFFF;\n  padding: 0em; }\n  .section-reviews__left-side {\n    width: 35%;\n    -ms-flex-preferred-size: 35%;\n        flex-basis: 35%;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 2em 0em;\n    background-image: url(\"http://placehold.it/400x400\");\n    background-size: cover;\n    background-position: center; }\n  .section-reviews__right-side {\n    background-color: #73CEE1;\n    width: 65%;\n    -ms-flex-preferred-size: 65%;\n        flex-basis: 65%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    .section-reviews__right-side__header img {\n      margin-bottom: 1em; }\n    .section-reviews__right-side__reviews {\n      text-align: left;\n      width: 100%;\n      max-width: 600px;\n      margin: auto;\n      line-height: 1.5em; }\n      .section-reviews__right-side__reviews__text {\n        margin-top: 4em;\n        display: block; }\n      .section-reviews__right-side__reviews__author-img {\n        display: inline-block;\n        margin-right: 0.5em; }\n      .section-reviews__right-side__reviews__author-text {\n        display: inline-block; }\n\n.section-pricing {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .section-pricing__plans {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    max-width: 800px;\n    width: 100%;\n    margin: auto; }\n    .section-pricing__plans__item {\n      border-radius: 25px;\n      -ms-flex-preferred-size: 30%;\n          flex-basis: 30%;\n      margin-right: 5%;\n      border: 10px dotted #284656;\n      padding: 1.5em 1em; }\n      .section-pricing__plans__item__recommended {\n        margin-bottom: 20px; }\n      .section-pricing__plans__item__price {\n        margin-bottom: 40px;\n        font-size: 3em; }\n        .section-pricing__plans__item__price__dolar-sign {\n          font-size: 0.2em; }\n      .section-pricing__plans__item__include {\n        margin-bottom: 20px; }\n      .section-pricing__plans__item__body {\n        line-height: 1.5em;\n        margin-bottom: 40px; }\n      .section-pricing__plans__item__cta button {\n        width: 100%;\n        color: #FFFFFF;\n        background-color: #51BE9F; }\n      .section-pricing__plans__item__cta--middle button {\n        background-color: #73CEE1; }\n      .section-pricing__plans__item--middle {\n        color: #FFFFFF;\n        background-color: #284656; }\n      .section-pricing__plans__item--last {\n        margin-right: 0em;\n        border-color: #73CEE1; }\n\n.section-faq {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  background-color: #51BE9F;\n  color: #FFFFFF; }\n  .section-faq__body {\n    width: 100%;\n    margin: auto;\n    max-width: 1100px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .section-faq__body__item {\n      margin: 60px auto;\n      text-align: left;\n      -ms-flex-preferred-size: 40%;\n          flex-basis: 40%; }\n      .section-faq__body__item__question {\n        font-weight: bold;\n        margin-bottom: 20px; }\n      .section-faq__body__item__answer {\n        line-height: 1.5em; }\n\n.section-last {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  height: auto;\n  padding: 2em 0em; }\n  .section-last__header {\n    margin-bottom: 40px; }\n\n.container_loader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100vh; }\n\n/*.container__loader svg {\n\theight: 130px;\n\tdisplay:inline-block;\n\tmargin: auto;\n\ttext-align: center;\n}*/\n/* SMILE */\n/*body {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tbackground: #ffffff;\n}*/\n/*body .leftEye,\nbody .rightEye {\n\twidth: 5vh;\n\theight: 5vh;\n\tborder-radius: 50%;\n\tbackground: #1F4658;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\ttransform: translate(-50%, -50%);\n\t-webkit-animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n\t\t\t\t\tanimation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\nbody .rightEye {\n\t-webkit-animation: rightEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n\t\t\t\t\tanimation: rightEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\nbody .mouth {\n\twidth: 10vh;\n\theight: 10vh;\n\tborder-radius: 50%;\n\tborder: solid 1.3vh #dfdfc2;\n\tborder-right: solid 1.3vh rgba(223,223,194,0);\n\tborder-left: solid 1.3vh rgba(223,223,194,0);\n\tborder-bottom: solid 1.3vh rgba(223,223,194,0);\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\t-webkit-transform: translate(-50%, -50%) rotate(360deg);\n\t\t\t\t\ttransform: translate(-50%, -50%) rotate(360deg);\n\t-webkit-animation: mouthAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n\t\t\t\t\tanimation: mouthAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\n@-webkit-keyframes mouthAnimation {\n\t0% {\n\t\t-webkit-transform: translate(-50%, -50%) rotateX(180deg);\n\t\t\t\t\t\ttransform: translate(-50%, -50%) rotateX(180deg);\n\t}\n\t10% {\n\t\t-webkit-transform: translate(-50%, -50%) rotateZ(360deg);\n\t\t\t\t\t\ttransform: translate(-50%, -50%) rotateZ(360deg);\n\t}\n\t40% {\n\t\t-webkit-transform: translate(-50%, -50%) rotateZ(320deg);\n\t\t\t\t\t\ttransform: translate(-50%, -50%) rotateZ(320deg);\n\t}\n\t60% {\n\t\t-webkit-transform: translate(-50%, -50%) rotateZ(900deg);\n\t\t\t\t\t\ttransform: translate(-50%, -50%) rotateZ(900deg);\n\t}\n\t100% {\n\t\t-webkit-transform: translate(-50%, -50%) rotateZ(900deg);\n\t\t\t\t\t\ttransform: translate(-50%, -50%) rotateZ(900deg);\n\t}\n}\n@keyframes mouthAnimation {\n\t0% {\n\t\t-webkit-transform: translate(-50%, -50%) rotateX(180deg);\n\t\t\t\t\t\ttransform: translate(-50%, -50%) rotateX(180deg);\n\t}\n\t10% {\n\t\t-webkit-transform: translate(-50%, -50%) rotateZ(360deg);\n\t\t\t\t\t\ttransform: translate(-50%, -50%) rotateZ(360deg);\n\t}\n\t40% {\n\t\t-webkit-transform: translate(-50%, -50%) rotateZ(320deg);\n\t\t\t\t\t\ttransform: translate(-50%, -50%) rotateZ(320deg);\n\t}\n\t60% {\n\t\t-webkit-transform: translate(-50%, -50%) rotateZ(900deg);\n\t\t\t\t\t\ttransform: translate(-50%, -50%) rotateZ(900deg);\n\t}\n\t100% {\n\t\t-webkit-transform: translate(-50%, -50%) rotateZ(900deg);\n\t\t\t\t\t\ttransform: translate(-50%, -50%) rotateZ(900deg);\n\t}\n}\n@-webkit-keyframes leftEyeAnimation {\n\t0% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n\t50% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n\t60% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(-150%, -50%);\n\t\t\t\t\t\ttransform: translate(-150%, -50%);\n\t}\n\t90% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(-150%, -50%);\n\t\t\t\t\t\ttransform: translate(-150%, -50%);\n\t}\n\t100% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n}\n@keyframes leftEyeAnimation {\n\t0% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n\t50% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n\t60% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(-150%, -50%);\n\t\t\t\t\t\ttransform: translate(-150%, -50%);\n\t}\n\t90% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(-150%, -50%);\n\t\t\t\t\t\ttransform: translate(-150%, -50%);\n\t}\n\t100% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n}\n@-webkit-keyframes rightEyeAnimation {\n\t0% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n\t50% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n\t60% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(50%, -50%);\n\t\t\t\t\t\ttransform: translate(50%, -50%);\n\t}\n\t70% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(50%, -50%);\n\t\t\t\t\t\ttransform: translate(50%, -50%);\n\t}\n\t75% {\n\t\twidth: 2vh;\n\t\theight: 2px;\n\t\t-webkit-transform: translate(50%, -50%);\n\t\t\t\t\t\ttransform: translate(50%, -50%);\n\t}\n\t80% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(50%, -50%);\n\t\t\t\t\t\ttransform: translate(50%, -50%);\n\t}\n\t90% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(50%, -50%);\n\t\t\t\t\t\ttransform: translate(50%, -50%);\n\t}\n\t100% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n}\n@keyframes rightEyeAnimation {\n\t0% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n\t50% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n\t60% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(50%, -50%);\n\t\t\t\t\t\ttransform: translate(50%, -50%);\n\t}\n\t70% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(50%, -50%);\n\t\t\t\t\t\ttransform: translate(50%, -50%);\n\t}\n\t75% {\n\t\twidth: 2vh;\n\t\theight: 2px;\n\t\t-webkit-transform: translate(50%, -50%);\n\t\t\t\t\t\ttransform: translate(50%, -50%);\n\t}\n\t80% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(50%, -50%);\n\t\t\t\t\t\ttransform: translate(50%, -50%);\n\t}\n\t90% {\n\t\twidth: 2vh;\n\t\theight: 2vh;\n\t\t-webkit-transform: translate(50%, -50%);\n\t\t\t\t\t\ttransform: translate(50%, -50%);\n\t}\n\t100% {\n\t\twidth: 5vh;\n\t\theight: 5vh;\n\t\t-webkit-transform: translate(-50%, -50%);\n\t\t\t\t\t\ttransform: translate(-50%, -50%);\n\t}\n}\n\n\n\n\n\nsvg {\n\tposition: absolute;\n\tleft: 0; right: 0; top: 0; bottom: 0;\n\tmargin: auto;\n}\n\n.rect {\n\tfill: none;\n\tstroke-width: 8px;\n\tstroke: black;\n\tstroke-dasharray: 40;\n\tstroke-dashoffset: 50%;\n\n\tanimation: movedash 1.5s forwards 0s infinite;\n}\n\n@keyframes movedash {\n\tto {\n\t\tstroke-dashoffset: 250%;\n\t}\n}\n\n\n\n\n\n\n.loader-square {\n\tdisplay: inline-block;\n\twidth: 60px;\n\theight: 60px;\n\tposition: relative;\n\tborder: 4px solid #1F4658;\n\ttop: 50%;\n\tanimation: loader 2s infinite ease;\n}\n\n.loader-inner-square {\n\tvertical-align: top;\n\tdisplay: inline-block;\n\twidth: 100%;\n\tbackground-color: #1F4658;\n\tanimation: loader-inner 2s infinite ease-in;\n}\n\n@keyframes loader {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\n\t25% {\n\t\ttransform: rotate(180deg);\n\t}\n\n\t50% {\n\t\ttransform: rotate(180deg);\n\t}\n\n\t75% {\n\t\ttransform: rotate(360deg);\n\t}\n\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n\n@keyframes loader-inner {\n\t0% {\n\t\theight: 0%;\n\t}\n\n\t25% {\n\t\theight: 0%;\n\t}\n\n\t50% {\n\t\theight: 100%;\n\t}\n\n\t75% {\n\t\theight: 100%;\n\t}\n\n\t100% {\n\t\theight: 0%;\n\t}\n}\n\n\n\n\n\n\n\n.wrapper-ball {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tfilter: blur(15px) contrast(30);\n\tbackground: #fff;\n}\n\n.ball {\n\tposition: absolute;\n\twidth: 120px;\n\theight: 120px;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%) rotate(0deg);\n\ttransform-origin: 66px center;\n\tmargin-left: 40px;\n}\n\n.ball:before {\n\tcontent: '';\n\twidth: 68px;\n\theight: 68px;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: -10px;\n\ttransform: translateY(-50%);\n\tborder-radius: 100%;\n\tbackground: #f00;\n}\n\n.ball-1 {\n\tmargin-left: -50px;\n}\n\n.ball-2 {\n\tmargin-left: 25px;\n\ttransform: translateY(-50%) rotate(180deg);\n\tmargin-left: -100px;\n\tanimation: rotate-1 1.7s linear infinite;\n\tz-index: 2;\n}\n\n@keyframes rotate-1 {\n\t0% {\n\t\tmargin-left: -18px;\n\t\ttransform: translateY(-50%) rotate(0deg);\n\t\ttransform-origin: 66px center;\n\t}\n\t25% {\n\t\tmargin-left: -25px;\n\t\ttransform: translateY(-50%) rotate(-180deg);\n\t\ttransform-origin: 66px center;\n\t}\n\t50% {\n\t\tmargin-left: -33px;\n\t\ttransform: translateY(-50%) rotate(-360deg);\n\t\ttransform-origin: 66px center;\n\t}\n\t50.1% {\n\t\ttransform-origin: -12px center;\n\t}\n\t75% {\n\t\tmargin-left: -36px;\n\t\ttransform: translateY(-50%) rotate(-180deg);\n\t\ttransform-origin: -12px center;\n\t}\n\t75.01 {\n\t\tmargin-left: -66px;\n\t\ttransform: translateY(-50%) rotate(-180deg);\n\t\ttransform-origin: -12px center;\n\t}\n\t100% {\n\t\tmargin-left: -18px;\n\t\ttransform: translateY(-50%) rotate(0deg);\n\t\ttransform-origin: -12px center;\n\t}\n}\n\n.ball-3 {\n\tmargin-left: 120px;\n}*/\n#page {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  background: #1f4658;\n  /* Old browsers */\n  /* FF3.6-15 */\n  background: -webkit-linear-gradient(top, #1f4658 48%, #47b3e6 100%);\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #1f4658 48%, #47b3e6 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1f4658', endColorstr='#47b3e6',GradientType=0 );\n  /* IE6-9 */\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n\n#phrase_box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n  flex-flow: column;\n  height: 150px;\n  overflow: hidden;\n  width: 250px;\n  position: relative; }\n\n#phrases {\n  -webkit-animation: slide-phrases-upward 20s;\n  animation: slide-phrases-upward 20s; }\n\n#footer {\n  bottom: 30px;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0; }\n\n@-webkit-keyframes slide-phrases-upward {\n  0% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  5% {\n    -webkit-transform: translateY(-50px);\n    transform: translateY(-50px); }\n  10% {\n    -webkit-transform: translateY(-100px);\n    transform: translateY(-100px); }\n  15% {\n    -webkit-transform: translateY(-150px);\n    transform: translateY(-150px); }\n  20% {\n    -webkit-transform: translateY(-200px);\n    transform: translateY(-200px); }\n  25% {\n    -webkit-transform: translateY(-250px);\n    transform: translateY(-250px); }\n  30% {\n    -webkit-transform: translateY(-300px);\n    transform: translateY(-300px); }\n  35% {\n    -webkit-transform: translateY(-350px);\n    transform: translateY(-350px); }\n  40% {\n    -webkit-transform: translateY(-400px);\n    transform: translateY(-400px); }\n  45% {\n    -webkit-transform: translateY(-450px);\n    transform: translateY(-450px); }\n  50% {\n    -webkit-transform: translateY(-500px);\n    transform: translateY(-500px); }\n  55% {\n    -webkit-transform: translateY(-550px);\n    transform: translateY(-550px); }\n  60% {\n    -webkit-transform: translateY(-600px);\n    transform: translateY(-600px); }\n  65% {\n    -webkit-transform: translateY(-650px);\n    transform: translateY(-650px); }\n  70% {\n    -webkit-transform: translateY(-700px);\n    transform: translateY(-700px); }\n  75% {\n    -webkit-transform: translateY(-750px);\n    transform: translateY(-750px); }\n  80% {\n    -webkit-transform: translateY(-800px);\n    transform: translateY(-800px); }\n  85% {\n    -webkit-transform: translateY(-850px);\n    transform: translateY(-850px); }\n  90% {\n    -webkit-transform: translateY(-900px);\n    transform: translateY(-900px); }\n  95% {\n    -webkit-transform: translateY(-950px);\n    transform: translateY(-950px); }\n  100% {\n    -webkit-transform: translateY(-1000px);\n    transform: translateY(-1000px); } }\n\n@keyframes slide-phrases-upward {\n  0% {\n    -webkit-transform: translateY(0px);\n    transform: translateY(0px); }\n  5% {\n    -webkit-transform: translateY(-50px);\n    transform: translateY(-50px); }\n  10% {\n    -webkit-transform: translateY(-100px);\n    transform: translateY(-100px); }\n  15% {\n    -webkit-transform: translateY(-150px);\n    transform: translateY(-150px); }\n  20% {\n    -webkit-transform: translateY(-200px);\n    transform: translateY(-200px); }\n  25% {\n    -webkit-transform: translateY(-250px);\n    transform: translateY(-250px); }\n  30% {\n    -webkit-transform: translateY(-300px);\n    transform: translateY(-300px); }\n  35% {\n    -webkit-transform: translateY(-350px);\n    transform: translateY(-350px); }\n  40% {\n    -webkit-transform: translateY(-400px);\n    transform: translateY(-400px); }\n  45% {\n    -webkit-transform: translateY(-450px);\n    transform: translateY(-450px); }\n  50% {\n    -webkit-transform: translateY(-500px);\n    transform: translateY(-500px); }\n  55% {\n    -webkit-transform: translateY(-550px);\n    transform: translateY(-550px); }\n  60% {\n    -webkit-transform: translateY(-600px);\n    transform: translateY(-600px); }\n  65% {\n    -webkit-transform: translateY(-650px);\n    transform: translateY(-650px); }\n  70% {\n    -webkit-transform: translateY(-700px);\n    transform: translateY(-700px); }\n  75% {\n    -webkit-transform: translateY(-750px);\n    transform: translateY(-750px); }\n  80% {\n    -webkit-transform: translateY(-800px);\n    transform: translateY(-800px); }\n  85% {\n    -webkit-transform: translateY(-850px);\n    transform: translateY(-850px); }\n  90% {\n    -webkit-transform: translateY(-900px);\n    transform: translateY(-900px); }\n  95% {\n    -webkit-transform: translateY(-950px);\n    transform: translateY(-950px); }\n  100% {\n    -webkit-transform: translateY(-1000px);\n    transform: translateY(-1000px); } }\n\n#loadingCheckCircleSVG-0 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: -1.5s;\n  animation-delay: -1.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-1 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-2 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-3 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 1.5s;\n  animation-delay: 1.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-4 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 2.5s;\n  animation-delay: 2.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-5 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 3.5s;\n  animation-delay: 3.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-6 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 4.5s;\n  animation-delay: 4.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-7 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 5.5s;\n  animation-delay: 5.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-8 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 6.5s;\n  animation-delay: 6.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-9 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 7.5s;\n  animation-delay: 7.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-10 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 8.5s;\n  animation-delay: 8.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-11 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 9.5s;\n  animation-delay: 9.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-12 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 10.5s;\n  animation-delay: 10.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-13 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 11.5s;\n  animation-delay: 11.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-14 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 12.5s;\n  animation-delay: 12.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-15 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 13.5s;\n  animation-delay: 13.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-16 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 14.5s;\n  animation-delay: 14.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-17 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 15.5s;\n  animation-delay: 15.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-18 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 16.5s;\n  animation-delay: 16.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-19 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 17.5s;\n  animation-delay: 17.5s;\n  fill: white;\n  opacity: 0; }\n\n#loadingCheckCircleSVG-20 {\n  -webkit-animation: fill-to-white 5000ms;\n  animation: fill-to-white 5000ms;\n  -webkit-animation-delay: 18.5s;\n  animation-delay: 18.5s;\n  fill: white;\n  opacity: 0; }\n\n@-webkit-keyframes fill-to-white {\n  0% {\n    opacity: 0; }\n  10% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fill-to-white {\n  0% {\n    opacity: 0; }\n  10% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\n#loadingCheckSVG-0 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: -1.5s;\n  animation-delay: -1.5s; }\n\n#loadingCheckSVG-1 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n#loadingCheckSVG-2 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s; }\n\n#loadingCheckSVG-3 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 1.5s;\n  animation-delay: 1.5s; }\n\n#loadingCheckSVG-4 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 2.5s;\n  animation-delay: 2.5s; }\n\n#loadingCheckSVG-5 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 3.5s;\n  animation-delay: 3.5s; }\n\n#loadingCheckSVG-6 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 4.5s;\n  animation-delay: 4.5s; }\n\n#loadingCheckSVG-7 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 5.5s;\n  animation-delay: 5.5s; }\n\n#loadingCheckSVG-8 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 6.5s;\n  animation-delay: 6.5s; }\n\n#loadingCheckSVG-9 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 7.5s;\n  animation-delay: 7.5s; }\n\n#loadingCheckSVG-10 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 8.5s;\n  animation-delay: 8.5s; }\n\n#loadingCheckSVG-11 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 9.5s;\n  animation-delay: 9.5s; }\n\n#loadingCheckSVG-12 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 10.5s;\n  animation-delay: 10.5s; }\n\n#loadingCheckSVG-13 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 11.5s;\n  animation-delay: 11.5s; }\n\n#loadingCheckSVG-14 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 12.5s;\n  animation-delay: 12.5s; }\n\n#loadingCheckSVG-15 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 13.5s;\n  animation-delay: 13.5s; }\n\n#loadingCheckSVG-16 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 14.5s;\n  animation-delay: 14.5s; }\n\n#loadingCheckSVG-17 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 15.5s;\n  animation-delay: 15.5s; }\n\n#loadingCheckSVG-18 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 16.5s;\n  animation-delay: 16.5s; }\n\n#loadingCheckSVG-19 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 17.5s;\n  animation-delay: 17.5s; }\n\n#loadingCheckSVG-20 {\n  -webkit-animation: fill-to-coral 5000ms;\n  animation: fill-to-coral 5000ms;\n  -webkit-animation-delay: 18.5s;\n  animation-delay: 18.5s; }\n\n@-webkit-keyframes fill-to-coral {\n  0% {\n    fill: white; }\n  10% {\n    fill: #1F4658; }\n  100% {\n    fill: #1F4658; } }\n\n@keyframes fill-to-coral {\n  0% {\n    fill: white; }\n  10% {\n    fill: #1F4658; }\n  100% {\n    fill: #1F4658; } }\n\n.d-navbar {\n  position: absolute;\n  top: 50px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0em 1em;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 50px; }\n  .d-navbar__left-side {\n    -ms-flex-preferred-size: 60%;\n        flex-basis: 60%;\n    max-width: 250px; }\n    .d-navbar__left-side__logo {\n      max-width: 100%;\n      height: auto; }\n  .d-navbar__right-side {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n    .d-navbar__right-side__menu-item {\n      display: none;\n      cursor: pointer;\n      color: white;\n      margin: 1em;\n      margin-right: 1em; }\n      .d-navbar__right-side__menu-item--last {\n        margin-right: 0em; }\n      @media screen and (min-width: 58em) {\n        .d-navbar__right-side__menu-item {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex; } }\n    @media screen and (min-width: 58em) {\n      .d-navbar__right-side__mobile-button {\n        display: none; } }\n\n.hero-wrapper {\n  margin-top: 150px;\n  margin-bottom: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .hero-wrapper__left-side__iphone-img {\n    max-height: 100%; }\n  .hero-wrapper__right-side {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .hero-wrapper__right-side__title {\n      color: white;\n      font-size: 3em;\n      margin-bottom: 1em; }\n\n.hero-background-wrapper__filter {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #284656;\n  opacity: 0.6;\n  z-index: -1; }\n\n.hero-background-wrapper__image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: auto;\n  z-index: -2;\n  background-size: cover; }\n", ""]);

	// exports


/***/ },

/***/ 23:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

/******/ });