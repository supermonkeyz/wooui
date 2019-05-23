webpackJsonp([0],{372:function(s,a,t){s.exports=t(518)},518:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t(531),l=t(532),e=!1,v=function(s){e||(t(519),t(521),t(523),t(525),t(527),t(529))},p=t(2)(r.a,l.a,v,null,null);p.options.__file="site/docs/Radio.md",p.esModule&&Object.keys(p.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),p.options.functional&&console.error("[vue-loader] Radio.md: functional components are not supported with templates, they should use render functions."),a.default=p.exports},519:function(s,a,t){var r=t(520);"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);t(1)("690eec82",r,!1)},520:function(s,a,t){(s.exports=t(0)(void 0)).push([s.i,"\n.radio-item{\n  margin-right:0.625rem;\n}\n",""])},521:function(s,a,t){var r=t(522);"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);t(1)("49884283",r,!1)},522:function(s,a,t){(s.exports=t(0)(void 0)).push([s.i,"\n.radio-item{\n  margin-right:0.625rem;\n}\n",""])},523:function(s,a,t){var r=t(524);"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);t(1)("2a019884",r,!1)},524:function(s,a,t){(s.exports=t(0)(void 0)).push([s.i,"\n.radio-item{\n  margin-right:0.625rem;\n}\n",""])},525:function(s,a,t){var r=t(526);"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);t(1)("0a7aee85",r,!1)},526:function(s,a,t){(s.exports=t(0)(void 0)).push([s.i,"\n.radio-item{\n  margin-right:0.625rem;\n}\n",""])},527:function(s,a,t){var r=t(528);"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);t(1)("2a1776f4",r,!1)},528:function(s,a,t){(s.exports=t(0)(void 0)).push([s.i,"\n.radio-item{\n  margin-right:0.625rem;\n}\n",""])},529:function(s,a,t){var r=t(530);"string"==typeof r&&(r=[[s.i,r,""]]),r.locals&&(s.exports=r.locals);t(1)("6924caf2",r,!1)},530:function(s,a,t){(s.exports=t(0)(void 0)).push([s.i,"\n.radio-item-r{\n  height:2.75rem;\n  padding:0 0.75rem;\n}\n",""])},531:function(s,a,t){"use strict";a.a={data:function(){return{fruit:"apple",fruit1:"apple",fruit2:"apple",fruit3:"apple",fruit4:"apple",fruit5:"apple"}}}},532:function(s,a,t){"use strict";var r=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h2",[s._v("Radio 单选框")]),s._v(" "),t("p",[s._v("表单控件单选框")]),s._v(" "),t("h3",[s._v("基础用法")]),s._v(" "),t("p",[s._v("单选框。例如：")]),s._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("h5",[s._v(s._s(s.fruit))]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"apple"},model:{value:s.fruit,callback:function(a){s.fruit=a},expression:"fruit"}},[s._v("🍎 苹果")]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"banana"},model:{value:s.fruit,callback:function(a){s.fruit=a},expression:"fruit"}},[s._v("🍌 香蕉")]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"grape"},model:{value:s.fruit,callback:function(a){s.fruit=a},expression:"fruit"}},[s._v("🍇 香蕉")])]],2),s._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[s._v("v-model")]),s._v(" 和 "),t("code",[s._v("value")]),s._v(" 配合使用。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{fruit}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"apple"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(">")]),s._v("🍎 苹果"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"banana"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(">")]),s._v("🍌 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"grape"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(">")]),s._v("🍇 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".radio-item")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-right")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fruit")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'apple'")]),s._v("\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),t("h3",[s._v("禁用状态")]),s._v(" "),t("p",[s._v("单选框禁用状态。例如：")]),s._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("h5",[s._v(s._s(s.fruit1))]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"apple",disabled:""},model:{value:s.fruit1,callback:function(a){s.fruit1=a},expression:"fruit1"}},[s._v("🍎 苹果")]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"banana",disabled:""},model:{value:s.fruit1,callback:function(a){s.fruit1=a},expression:"fruit1"}},[s._v("🍌 香蕉")]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"grape",disabled:""},model:{value:s.fruit1,callback:function(a){s.fruit1=a},expression:"fruit1"}},[s._v("🍇 香蕉")])]],2),s._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[s._v("disabled")]),s._v(" 接受 "),t("code",[s._v("Boolean")]),s._v("。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{fruit1}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"apple"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("🍎 苹果"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"banana"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("🍌 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit1"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"grape"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("🍇 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".radio-item")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-right")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fruit1")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'apple'")]),s._v("\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),t("h3",[s._v("选中颜色")]),s._v(" "),t("p",[s._v("修改选中状态颜色。例如：")]),s._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("h5",[s._v(s._s(s.fruit2))]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"apple",color:"#eb4005"},model:{value:s.fruit2,callback:function(a){s.fruit2=a},expression:"fruit2"}},[s._v("🍎 苹果")]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"banana",color:"#eb4005"},model:{value:s.fruit2,callback:function(a){s.fruit2=a},expression:"fruit2"}},[s._v("🍌 香蕉")]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"grape",color:"#eb4005"},model:{value:s.fruit2,callback:function(a){s.fruit2=a},expression:"fruit2"}},[s._v("🍇 香蕉")])]],2),s._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[s._v("v-model")]),s._v(" 和 "),t("code",[s._v("value")]),s._v(" 配合使用。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{fruit2}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"apple"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#eb4005"')]),s._v(">")]),s._v("🍎 苹果"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"banana"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#eb4005"')]),s._v(">")]),s._v("🍌 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"grape"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#eb4005"')]),s._v(">")]),s._v("🍇 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".radio-item")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-right")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fruit2")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'apple'")]),s._v("\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),t("h3",[s._v("单选框大小")]),s._v(" "),t("p",[s._v("单选框大小设置。例如：")]),s._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("h5",[s._v(s._s(s.fruit3))]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"apple",size:1.25},model:{value:s.fruit3,callback:function(a){s.fruit3=a},expression:"fruit3"}},[s._v("🍎 苹果")]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"banana",size:1.25},model:{value:s.fruit3,callback:function(a){s.fruit3=a},expression:"fruit3"}},[s._v("🍌 香蕉")]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"grape",size:1.25},model:{value:s.fruit3,callback:function(a){s.fruit3=a},expression:"fruit3"}},[s._v("🍇 香蕉")])]],2),s._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[s._v("size")]),s._v(" 接受 "),t("code",[s._v("Number")]),s._v("。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{fruit3}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"apple"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1.25"')]),s._v(">")]),s._v("🍎 苹果"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"banana"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1.25"')]),s._v(">")]),s._v("🍌 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit3"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"grape"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1.25"')]),s._v(">")]),s._v("🍇 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".radio-item")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-right")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fruit3")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'apple'")]),s._v("\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),t("h3",[s._v("无边框勾选模式")]),s._v(" "),t("p",[s._v("切换为无边框勾选模式。例如：")]),s._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("h5",[s._v(s._s(s.fruit4))]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"apple",simple:""},model:{value:s.fruit4,callback:function(a){s.fruit4=a},expression:"fruit4"}},[s._v("🍎 苹果")]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"banana",simple:""},model:{value:s.fruit4,callback:function(a){s.fruit4=a},expression:"fruit4"}},[s._v("🍌 香蕉")]),s._v(" "),t("woo-radio",{staticClass:"radio-item",attrs:{value:"grape",simple:""},model:{value:s.fruit4,callback:function(a){s.fruit4=a},expression:"fruit4"}},[s._v("🍇 香蕉")])]],2),s._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[s._v("simple")]),s._v(" 接受 "),t("code",[s._v("Boolean")]),s._v("。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{fruit4}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit4"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"apple"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("simple")]),s._v(">")]),s._v("🍎 苹果"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit4"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"banana"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("simple")]),s._v(">")]),s._v("🍌 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit4"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"grape"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("simple")]),s._v(">")]),s._v("🍇 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".radio-item")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-right")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fruit3")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'apple'")]),s._v("\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),t("h3",[s._v("反向勾选模式")]),s._v(" "),t("p",[s._v("切换为反向勾选模式。例如：")]),s._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("h5",[s._v(s._s(s.fruit5))]),s._v(" "),t("woo-panel",{attrs:{border:"all"}},[t("woo-radio",{directives:[{name:"active",rawName:"v-active"}],staticClass:"radio-item-r",attrs:{value:"apple",reverse:"",simple:""},model:{value:s.fruit5,callback:function(a){s.fruit5=a},expression:"fruit5"}},[s._v("🍎 苹果")]),s._v(" "),t("woo-divider"),s._v(" "),t("woo-radio",{directives:[{name:"active",rawName:"v-active"}],staticClass:"radio-item-r",attrs:{value:"banana",reverse:"",simple:""},model:{value:s.fruit5,callback:function(a){s.fruit5=a},expression:"fruit5"}},[s._v("🍌 香蕉")]),s._v(" "),t("woo-divider"),s._v(" "),t("woo-radio",{directives:[{name:"active",rawName:"v-active"}],staticClass:"radio-item-r",attrs:{value:"grape",reverse:"",simple:""},model:{value:s.fruit5,callback:function(a){s.fruit5=a},expression:"fruit5"}},[s._v("🍇 香蕉")])],1)]],2),s._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[s._v("simple")]),s._v(" 接受 "),t("code",[s._v("Boolean")]),s._v("。")])]),s._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{fruit5}}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-panel")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("border")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"all"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit5"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"apple"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item-r"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("reverse")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("simple")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-active")]),s._v(">")]),s._v("🍎 苹果"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-divider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-divider")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit5"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"banana"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item-r"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("reverse")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("simple")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-active")]),s._v(">")]),s._v("🍌 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-divider")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-divider")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit5"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"grape"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"radio-item-r"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("reverse")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("simple")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-active")]),s._v(">")]),s._v("🍇 香蕉"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-radio")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-panel")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".radio-item-r")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("44px")]),s._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12px")]),s._v(";\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fruit5")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'apple'")]),s._v("\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),t("h3",[s._v("属性")]),s._v(" "),s._m(0),t("h3",[s._v("事件")]),s._v(" "),s._m(1)],1)};r._withStripped=!0;var l={render:r,staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"table-wrap"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[this._v("参数")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("类型")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("可选值")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("默认值")])])]),this._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[this._v("value")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("单选框选项值")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("String")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[this._v("disabled")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("禁用状态")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("Boolean")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("true / false")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("false")])]),this._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[this._v("color")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("选中图标颜色")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("String")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[this._v("size")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("选框大小")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("Number")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[this._v("reverse")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("反向选框")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("Boolean")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("false")])]),this._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[this._v("simple")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("无边框选框")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("Boolean")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("false")])])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"table-wrap"},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[this._v("名称")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),a("th",{staticStyle:{"text-align":"left"}},[this._v("回调参数")])])]),this._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[this._v("change")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("绑定值发生变化触发")]),this._v(" "),a("td",{staticStyle:{"text-align":"left"}},[this._v("最后变更的值")])])])])])}]};a.a=l}});