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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/components/widget-form.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/widget-form.vue":
/*!****************************************!*\
  !*** ./app/components/widget-form.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widget_form_vue_vue_type_template_id_51e98bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget-form.vue?vue&type=template&id=51e98bf0& */ \"./app/components/widget-form.vue?vue&type=template&id=51e98bf0&\");\n/* harmony import */ var _widget_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget-form.vue?vue&type=script&lang=js& */ \"./app/components/widget-form.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _widget_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _widget_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _widget_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _widget_form_vue_vue_type_template_id_51e98bf0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _widget_form_vue_vue_type_template_id_51e98bf0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app/components/widget-form.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app/components/widget-form.vue?");

/***/ }),

/***/ "./app/components/widget-form.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./app/components/widget-form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./widget-form.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/widget-form.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./app/components/widget-form.vue?");

/***/ }),

/***/ "./app/components/widget-form.vue?vue&type=template&id=51e98bf0&":
/*!***********************************************************************!*\
  !*** ./app/components/widget-form.vue?vue&type=template&id=51e98bf0& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_form_vue_vue_type_template_id_51e98bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./widget-form.vue?vue&type=template&id=51e98bf0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/widget-form.vue?vue&type=template&id=51e98bf0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_form_vue_vue_type_template_id_51e98bf0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_widget_form_vue_vue_type_template_id_51e98bf0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app/components/widget-form.vue?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./app/components/widget-form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./app/components/widget-form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nmodule.exports = {\n  section: {\n    label: 'Settings'\n  },\n  props: ['widget', 'config', 'form'],\n\n  data() {\n    return {\n      contactForms: window.$contact_forms\n    };\n  },\n\n  inject: ['$components'],\n  replace: false,\n\n  created() {\n    _.extend(this.$options.components, this.$components);\n  },\n\n  mounted() {\n    if (!this.widget.data['formType']) {\n      this.widget.data = _.merge({\n        formType: this.contactForms[0].id\n      }, this.widget.data);\n    }\n  }\n\n};\nwindow.Widgets.components['contactform-form.settings'] = module.exports;\n\n//# sourceURL=webpack:///./app/components/widget-form.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app/components/widget-form.vue?vue&type=template&id=51e98bf0&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app/components/widget-form.vue?vue&type=template&id=51e98bf0& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"pk-grid-large pk-width-sidebar-large\",\n      attrs: { \"uk-grid\": \"\" }\n    },\n    [\n      _c(\"div\", { staticClass: \"pk-width-content\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"uk-margin\" },\n          [\n            _c(\n              \"label\",\n              { staticClass: \"uk-form-label\", attrs: { for: \"form-title\" } },\n              [_vm._v(_vm._s(_vm._f(\"trans\")(\"Title\")))]\n            ),\n            _vm._v(\" \"),\n            _c(\"v-input\", {\n              attrs: {\n                id: \"form-title\",\n                type: \"text\",\n                name: \"title\",\n                placeholder: \"Enter Title\",\n                view: \"class: uk-width-expand uk-form-large uk-input\",\n                rules: \"required\",\n                message: \"Title cannot be blank.\"\n              },\n              model: {\n                value: _vm.widget.title,\n                callback: function($$v) {\n                  _vm.$set(_vm.widget, \"title\", $$v)\n                },\n                expression: \"widget.title\"\n              }\n            })\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"uk-margin\" }, [\n          _c(\"label\", { staticClass: \"uk-form-label\" }, [\n            _vm._v(_vm._s(_vm._f(\"trans\")(\"Forms\")))\n          ]),\n          _vm._v(\" \"),\n          _c(\n            \"select\",\n            {\n              directives: [\n                {\n                  name: \"model\",\n                  rawName: \"v-model\",\n                  value: _vm.widget.data.formType,\n                  expression: \"widget.data.formType\"\n                }\n              ],\n              staticClass: \"uk-select\",\n              on: {\n                change: function($event) {\n                  var $$selectedVal = Array.prototype.filter\n                    .call($event.target.options, function(o) {\n                      return o.selected\n                    })\n                    .map(function(o) {\n                      var val = \"_value\" in o ? o._value : o.value\n                      return val\n                    })\n                  _vm.$set(\n                    _vm.widget.data,\n                    \"formType\",\n                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]\n                  )\n                }\n              }\n            },\n            _vm._l(_vm.contactForms, function(fm) {\n              return _c(\"option\", { key: fm.id, domProps: { value: fm.id } }, [\n                _vm._v(_vm._s(fm.title))\n              ])\n            }),\n            0\n          )\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"pk-width-sidebar\" },\n        [\n          _c(\"template-settings\", {\n            tag: \"component\",\n            attrs: { widget: _vm.widget, config: _vm.config, form: _vm.form },\n            on: {\n              \"update:widget\": function($event) {\n                _vm.widget = $event\n              },\n              \"update:config\": function($event) {\n                _vm.config = $event\n              }\n            }\n          }),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"uk-margin\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"uk-form-controls uk-form-controls-text\" },\n              [\n                _c(\"p\", { staticClass: \"uk-margin-small\" }, [\n                  _c(\"label\", [\n                    _c(\"input\", {\n                      directives: [\n                        {\n                          name: \"model\",\n                          rawName: \"v-model\",\n                          value: _vm.widget.data.markdown,\n                          expression: \"widget.data.markdown\"\n                        }\n                      ],\n                      staticClass: \"uk-checkbox\",\n                      attrs: { type: \"checkbox\", number: \"\" },\n                      domProps: {\n                        checked: Array.isArray(_vm.widget.data.markdown)\n                          ? _vm._i(_vm.widget.data.markdown, null) > -1\n                          : _vm.widget.data.markdown\n                      },\n                      on: {\n                        change: function($event) {\n                          var $$a = _vm.widget.data.markdown,\n                            $$el = $event.target,\n                            $$c = $$el.checked ? true : false\n                          if (Array.isArray($$a)) {\n                            var $$v = null,\n                              $$i = _vm._i($$a, $$v)\n                            if ($$el.checked) {\n                              $$i < 0 &&\n                                _vm.$set(\n                                  _vm.widget.data,\n                                  \"markdown\",\n                                  $$a.concat([$$v])\n                                )\n                            } else {\n                              $$i > -1 &&\n                                _vm.$set(\n                                  _vm.widget.data,\n                                  \"markdown\",\n                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))\n                                )\n                            }\n                          } else {\n                            _vm.$set(_vm.widget.data, \"markdown\", $$c)\n                          }\n                        }\n                      }\n                    }),\n                    _c(\"span\", { staticClass: \"uk-margin-small-left\" }, [\n                      _vm._v(_vm._s(_vm._f(\"trans\")(\"Markdown\")))\n                    ])\n                  ])\n                ])\n              ]\n            )\n          ])\n        ],\n        1\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app/components/widget-form.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

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