(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{123:function(n,t,i){},277:function(n,t,i){"use strict";var s=i(123);i.n(s).a},326:function(n,t,i){"use strict";i.r(t);var s={props:{html:{type:String,default:""},css:{type:String,default:""}},data:function(){return{show:!1,html1:'\n<div class="dots">\n  <div></div>\n  <div></div>\n  <div></div>\n</div>\n\n      ',css1:"\n.dots {\n  width: 3.5em;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.dots div {\n  width: 0.8em;\n  height: 0.8em;\n  border-radius: 50%;\n  background-color: #fc2f70;\n  animation: fade 0.8s ease-in-out alternate infinite;\n}\n\n.dots div:nth-of-type(1) {\n  animation-delay: -0.4s;\n}\n\n.dots div:nth-of-type(2) {\n  animation-delay: -0.2s;\n}\n\n@keyframes fade {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n      "}}},e=(i(277),i(0)),o=Object(e.a)(s,(function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"loading-item"},[i("div",{on:{click:function(t){n.show=!n.show}}},[n._m(0)]),n._v(" "),i("Modal",{attrs:{show:n.show,html:n.html1,css:n.css1},on:{close:function(t){n.show=!1}}})],1)}),[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"dots"},[t("div"),this._v(" "),t("div"),this._v(" "),t("div")])}],!1,null,"5fffbcde",null);t.default=o.exports}}]);