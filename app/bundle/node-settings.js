/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/components/node-settings.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/node-settings.vue":
/*!******************************************!*\
  !*** ./app/components/node-settings.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_settings_vue_vue_type_template_id_892dacde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-settings.vue?vue&type=template&id=892dacde& */ \"./app/components/node-settings.vue?vue&type=template&id=892dacde&\");\n/* harmony import */ var _node_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-settings.vue?vue&type=script&lang=js& */ \"./app/components/node-settings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _node_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _node_settings_vue_vue_type_template_id_892dacde___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _node_settings_vue_vue_type_template_id_892dacde___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app/components/node-settings.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/components/node-settings.vue?");

/***/ }),

/***/ "./app/components/node-settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./app/components/node-settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./node-settings.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/node-settings.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_node_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app/components/node-settings.vue?");

/***/ }),

/***/ "./app/components/node-settings.vue?vue&type=template&id=892dacde&":
/*!*************************************************************************!*\
  !*** ./app/components/node-settings.vue?vue&type=template&id=892dacde& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_settings_vue_vue_type_template_id_892dacde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./node-settings.vue?vue&type=template&id=892dacde& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/node-settings.vue?vue&type=template&id=892dacde&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_settings_vue_vue_type_template_id_892dacde___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_node_settings_vue_vue_type_template_id_892dacde___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/components/node-settings.vue?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/node-settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/components/node-settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nconst ContactFormPage = {\n  props: [\"node\", \"roles\"],\n  section: {\n    label: \"Settings\",\n    priority: 0\n  },\n  inject: [\"$components\"],\n\n  data() {\n    return {\n      page: {\n        data: {\n          title: true\n        }\n      },\n      contactformlist: window.$contactform\n    };\n  },\n\n  created() {\n    _.extend(this.$options.components, this.$components);\n\n    if (!this.node.data[\"contact\"]) {\n      this.node.data = _.merge({\n        contact: {\n          main: {\n            name: \"\",\n            email: \"\",\n            phone: \"\",\n            fax: \"\",\n            taxNumber: \"\",\n            taxOffice: \"\",\n            address: \"\",\n            iframeMap: \"\"\n          },\n          contactFormID: \"\"\n        }\n      }, this.node.data);\n    }\n  },\n\n  mounted() {\n    if (!this.node.id) this.node.status = 1;\n  },\n\n  events: {\n    \"save:node\": function (event, data) {\n      data.page = this.page;\n\n      if (!this.node.title) {\n        this.node.title = this.page.title;\n      }\n    }\n  },\n  watch: {\n    \"node.data.defaults.id\": {\n      handler(id) {\n        if (id) {\n          this.$http.get(\"api/site/page{/id}\", {\n            params: {\n              id\n            }\n          }).then(function (res) {\n            this.$set(this, \"page\", res.data);\n          });\n        }\n      },\n\n      immediate: true\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactFormPage);\nwindow.Site.components[\"contact.settings\"] = ContactFormPage;\n\n//# sourceURL=webpack:///./app/components/node-settings.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/node-settings.vue?vue&type=template&id=892dacde&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/node-settings.vue?vue&type=template&id=892dacde& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { \"uk-grid\": \"\" } }, [\n    _c(\"div\", { staticClass: \"uk-form-horizontal uk-width-expand@m\" }, [\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Company Name\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"div\", { staticClass: \"uk-inline\" }, [\n            _c(\"span\", {\n              staticClass: \"uk-form-icon\",\n              attrs: { \"uk-icon\": \"user\" }\n            }),\n            _vm._v(\" \"),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.node.data.contact.main.name,\n                  expression: \"node.data.contact.main.name\"\n                }\n              ],\n              staticClass: \"uk-input uk-form-width-large\",\n              attrs: { type: \"text\", required: \"\" },\n              domProps: { value: _vm.node.data.contact.main.name },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(\n                    _vm.node.data.contact.main,\n                    \"name\",\n                    $event.target.value\n                  )\n                }\n              }\n            })\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Company Email\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"div\", { staticClass: \"uk-inline\" }, [\n            _c(\"span\", {\n              staticClass: \"uk-form-icon\",\n              attrs: { \"uk-icon\": \"mail\" }\n            }),\n            _vm._v(\" \"),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.node.data.contact.main.email,\n                  expression: \"node.data.contact.main.email\"\n                }\n              ],\n              staticClass: \"uk-input uk-form-width-large\",\n              attrs: { type: \"email\" },\n              domProps: { value: _vm.node.data.contact.main.email },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(\n                    _vm.node.data.contact.main,\n                    \"email\",\n                    $event.target.value\n                  )\n                }\n              }\n            })\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Company Phone\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"div\", { staticClass: \"uk-inline\" }, [\n            _c(\"span\", {\n              staticClass: \"uk-form-icon\",\n              attrs: { \"uk-icon\": \"phone\" }\n            }),\n            _vm._v(\" \"),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.node.data.contact.main.phone,\n                  expression: \"node.data.contact.main.phone\"\n                }\n              ],\n              staticClass: \"uk-input uk-form-width-large\",\n              attrs: { type: \"text\" },\n              domProps: { value: _vm.node.data.contact.main.phone },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(\n                    _vm.node.data.contact.main,\n                    \"phone\",\n                    $event.target.value\n                  )\n                }\n              }\n            })\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Company Fax\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"div\", { staticClass: \"uk-inline\" }, [\n            _c(\"span\", {\n              staticClass: \"uk-form-icon\",\n              attrs: { \"uk-icon\": \"print\" }\n            }),\n            _vm._v(\" \"),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.node.data.contact.main.fax,\n                  expression: \"node.data.contact.main.fax\"\n                }\n              ],\n              staticClass: \"uk-input uk-form-width-large\",\n              attrs: { type: \"text\" },\n              domProps: { value: _vm.node.data.contact.main.fax },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(\n                    _vm.node.data.contact.main,\n                    \"fax\",\n                    $event.target.value\n                  )\n                }\n              }\n            })\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Company Tax Number\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"div\", { staticClass: \"uk-inline\" }, [\n            _c(\"span\", {\n              staticClass: \"uk-form-icon\",\n              attrs: { \"uk-icon\": \"file-text\" }\n            }),\n            _vm._v(\" \"),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.node.data.contact.main.taxNumber,\n                  expression: \"node.data.contact.main.taxNumber\"\n                }\n              ],\n              staticClass: \"uk-input uk-form-width-large\",\n              attrs: { type: \"text\" },\n              domProps: { value: _vm.node.data.contact.main.taxNumber },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(\n                    _vm.node.data.contact.main,\n                    \"taxNumber\",\n                    $event.target.value\n                  )\n                }\n              }\n            })\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Company Tax Office\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"div\", { staticClass: \"uk-inline\" }, [\n            _c(\"span\", {\n              staticClass: \"uk-form-icon\",\n              attrs: { \"uk-icon\": \"lifesaver\" }\n            }),\n            _vm._v(\" \"),\n            _c(\"input\", {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.node.data.contact.main.taxOffice,\n                  expression: \"node.data.contact.main.taxOffice\"\n                }\n              ],\n              staticClass: \"uk-input uk-form-width-large\",\n              attrs: { type: \"text\" },\n              domProps: { value: _vm.node.data.contact.main.taxOffice },\n              on: {\n                input: function($event) {\n                  if ($event.target.composing) {\n                    return\n                  }\n                  _vm.$set(\n                    _vm.node.data.contact.main,\n                    \"taxOffice\",\n                    $event.target.value\n                  )\n                }\n              }\n            })\n          ])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Company Map\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"textarea\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.node.data.contact.main.iframeMap,\n                expression: \"node.data.contact.main.iframeMap\"\n              }\n            ],\n            staticClass: \"uk-textarea uk-form-width-large uk-height-small\",\n            attrs: { placeholder: _vm._f(\"trans\")(\"Embed Link\") },\n            domProps: { value: _vm.node.data.contact.main.iframeMap },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.$set(\n                  _vm.node.data.contact.main,\n                  \"iframeMap\",\n                  $event.target.value\n                )\n              }\n            }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Company Address\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\"textarea\", {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.node.data.contact.main.address,\n                expression: \"node.data.contact.main.address\"\n              }\n            ],\n            staticClass: \"uk-textarea uk-form-width-large uk-height-small\",\n            domProps: { value: _vm.node.data.contact.main.address },\n            on: {\n              input: function($event) {\n                if ($event.target.composing) {\n                  return\n                }\n                _vm.$set(\n                  _vm.node.data.contact.main,\n                  \"address\",\n                  $event.target.value\n                )\n              }\n            }\n          })\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"uk-margin\" }, [\n        _c(\"label\", { staticClass: \"uk-form-label\" }, [\n          _vm._v(_vm._s(_vm._f(\"trans\")(\"Contact Form Select\")))\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-form-controls\" }, [\n          _c(\n            \"select\",\n            {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.node.data.contact.contactFormID,\n                  expression: \"node.data.contact.contactFormID\"\n                }\n              ],\n              staticClass: \"uk-select uk-form-width-large\",\n              on: {\n                change: function($event) {\n                  var $$selectedVal = Array.prototype.filter\n                    .call($event.target.options, function(o) {\n                      return o.selected\n                    })\n                    .map(function(o) {\n                      var val = \"_value\" in o ? o._value : o.value\n                      return val\n                    })\n                  _vm.$set(\n                    _vm.node.data.contact,\n                    \"contactFormID\",\n                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n                  )\n                }\n              }\n            },\n            [\n              _c(\"option\", { attrs: { value: \"\" } }, [\n                _vm._v(_vm._s(_vm._f(\"trans\")(\"Blank\")))\n              ]),\n              _vm._v(\" \"),\n              _vm._l(_vm.contactformlist, function(form) {\n                return _c(\n                  \"option\",\n                  { key: form.id, domProps: { value: form.id } },\n                  [_vm._v(_vm._s(form.title))]\n                )\n              })\n            ],\n            2\n          )\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"uk-width-medium@m\" },\n      [\n        _c(\"template-settings\", {\n          tag: \"component\",\n          attrs: { node: _vm.node, roles: _vm.roles }\n        })\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/components/node-settings.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ })

/******/ });