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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/views/form-index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/views/form-index.js":
/*!*********************************!*\
  !*** ./app/views/form-index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Index = {\n  el: '#app',\n  name: 'FormIndex',\n\n  data() {\n    return _.merge({\n      forms: [],\n      config: {\n        filter: this.$session.get('form.filter', {\n          limit: 10,\n          order: 'date desc'\n        })\n      },\n      pages: 0,\n      count: '',\n      selected: []\n    }, window.$data);\n  },\n\n  mounted() {\n    this.resource = this.$resource('admin/api/contactform{/id}');\n    this.$watch('config.page', this.load, {\n      immediate: true\n    });\n  },\n\n  watch: {\n    'config.filter': {\n      handler(filter) {\n        if (this.config.page) {\n          this.config.page = 0;\n        } else {\n          this.load();\n        }\n\n        this.$session.set('form.filter', filter);\n      },\n\n      deep: true\n    }\n  },\n  methods: {\n    load() {\n      this.resource.query({\n        filter: this.config.filter,\n        page: this.config.page\n      }).then(res => {\n        const {\n          data\n        } = res;\n        this.$set(this, 'forms', data.forms);\n        this.$set(this, 'pages', data.pages);\n        this.$set(this, 'count', data.count);\n        this.$set(this, 'selected', []);\n      });\n    },\n\n    active(form) {},\n\n    copy() {\n      if (!this.selected.length) {\n        return;\n      }\n\n      this.resource.save({\n        id: 'copy'\n      }, {\n        ids: this.selected\n      }).then(res => {\n        this.load();\n        this.$notify(this.$trans('Forms copied.'));\n      });\n    },\n\n    remove() {\n      this.resource.delete({\n        id: 'bulk'\n      }, {\n        ids: this.selected\n      }).then(res => {\n        this.load();\n        this.$notify(this.$trans('Deleted forms!'));\n      });\n    },\n\n    getType(value) {\n      return this.types[value];\n    }\n\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nVue.ready(Index);\n\n//# sourceURL=webpack:///./app/views/form-index.js?");

/***/ })

/******/ });