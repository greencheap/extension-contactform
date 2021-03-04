!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";function r(t,e,n,r,a,i,o,s){var d,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):a&&(d=s?function(){a.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:a),d)if(c.functional){c._injectStyles=d;var l=c.render;c.render=function(t,e){return d.call(e),l(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";n.r(e);var r=n(2),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=a.a},function(t,e){t.exports={section:{label:"Settings"},props:["widget","config","form"],data:()=>({contactForms:window.$contact_forms}),inject:["$components"],replace:!1,created(){_.extend(this.$options.components,this.$components)},mounted(){this.widget.data.formType||(this.widget.data=_.merge({formType:this.contactForms[0].id},this.widget.data))}},window.Widgets.components["contactform-form.settings"]=t.exports},function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pk-grid-large pk-width-sidebar-large",attrs:{"uk-grid":""}},[n("div",{staticClass:"pk-width-content"},[n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label",attrs:{for:"form-title"}},[t._v(t._s(t._f("trans")("Title")))]),t._v(" "),n("v-input",{attrs:{id:"form-title",type:"text",name:"title",placeholder:"Enter Title",view:"class: uk-width-expand uk-form-large uk-input",rules:"required",message:"Title cannot be blank."},model:{value:t.widget.title,callback:function(e){t.$set(t.widget,"title",e)},expression:"widget.title"}})],1),t._v(" "),n("div",{staticClass:"uk-margin"},[n("label",{staticClass:"uk-form-label"},[t._v(t._s(t._f("trans")("Forms")))]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.widget.data.formType,expression:"widget.data.formType"}],staticClass:"uk-select",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.widget.data,"formType",e.target.multiple?n:n[0])}}},t._l(t.contactForms,(function(e){return n("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.title))])})),0)])]),t._v(" "),n("div",{staticClass:"pk-width-sidebar"},[n("template-settings",{tag:"component",attrs:{widget:t.widget,config:t.config,form:t.form},on:{"update:widget":function(e){t.widget=e},"update:config":function(e){t.config=e}}}),t._v(" "),n("div",{staticClass:"uk-margin"},[n("div",{staticClass:"uk-form-controls uk-form-controls-text"},[n("p",{staticClass:"uk-margin-small"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.widget.data.markdown,expression:"widget.data.markdown"}],staticClass:"uk-checkbox",attrs:{type:"checkbox",number:""},domProps:{checked:Array.isArray(t.widget.data.markdown)?t._i(t.widget.data.markdown,null)>-1:t.widget.data.markdown},on:{change:function(e){var n=t.widget.data.markdown,r=e.target,a=!!r.checked;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&t.$set(t.widget.data,"markdown",n.concat([null])):i>-1&&t.$set(t.widget.data,"markdown",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(t.widget.data,"markdown",a)}}}),n("span",{staticClass:"uk-margin-small-left"},[t._v(t._s(t._f("trans")("Markdown")))])])])])])],1)])},a=[];r._withStripped=!0},,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(3),a=n(1);for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var o=n(0),s=Object(o.a)(a.default,r.a,r.b,!1,null,null,null);s.options.__file="app/components/widget-form.vue",e.default=s.exports}]);