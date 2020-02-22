webpackJsonp([16],{365:function(s,t,a){s.exports=a(456)},456:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(459),l=a(460),r=!1,v=function(s){r||a(457)},_=a(2)(e.a,l.a,v,null,null);_.options.__file="site/docs/Checkbox.md",_.esModule&&Object.keys(_.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),_.options.functional&&console.error("[vue-loader] Checkbox.md: functional components are not supported with templates, they should use render functions."),t.default=_.exports},457:function(s,t,a){var e=a(458);"string"==typeof e&&(e=[[s.i,e,""]]),e.locals&&(s.exports=e.locals);a(1)("1a42d00c",e,!1)},458:function(s,t,a){(s.exports=a(0)(void 0)).push([s.i,"\n.checkbox-item{\n  margin-right:0.625rem;\n}\n",""])},459:function(s,t,a){"use strict";t.a={data:function(){return{check:!0,check1:!1,check2:!0,check3:!0,check4:!0,check5:!0,emoji:"smile",fruit:[]}},methods:{getChange:function(){console.log("work")}}}},460:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Checkbox 多选框")]),s._v(" "),a("p",[s._v("表单控件选择框")]),s._v(" "),a("h3",[s._v("单个勾选框")]),s._v(" "),a("p",[s._v("勾选框使用逻辑值。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("h5",[s._v(s._s(s.check))]),s._v(" "),a("woo-checkbox",{model:{value:s.check,callback:function(t){s.check=t},expression:"check"}},[s._v("关注博主")])]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("v-model")]),s._v(" 绑定一个逻辑值。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{check}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"check"')]),s._v(">")]),s._v("关注博主"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("check")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("单个勾选框")]),s._v(" "),a("p",[s._v("勾选框切换value值。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("h5",[s._v(s._s(s.emoji))]),s._v(" "),a("woo-checkbox",{attrs:{"true-value":"smile","false-value":"cry"},model:{value:s.emoji,callback:function(t){s.emoji=t},expression:"emoji"}},[s._v("微笑")])]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("true-value")]),s._v(" 绑定勾选值，"),a("code",[s._v("false-value")]),s._v(" 绑定未勾选值。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{emoji}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"emoji"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("true-value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"smile"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("false-value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cry"')]),s._v(">")]),s._v("微笑"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("emoji")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'smile'")]),s._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("复选框")]),s._v(" "),a("p",[s._v("作为复选框使用。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("h5",[s._v(s._s(s.fruit))]),s._v(" "),a("woo-checkbox",{staticClass:"checkbox-item",attrs:{value:"apple"},model:{value:s.fruit,callback:function(t){s.fruit=t},expression:"fruit"}},[s._v("🍎 苹果")]),s._v(" "),a("woo-checkbox",{staticClass:"checkbox-item",attrs:{value:"banana"},model:{value:s.fruit,callback:function(t){s.fruit=t},expression:"fruit"}},[s._v("🍌 香蕉")]),s._v(" "),a("woo-checkbox",{staticClass:"checkbox-item",attrs:{value:"grape"},model:{value:s.fruit,callback:function(t){s.fruit=t},expression:"fruit"}},[s._v("🍇 葡萄")])]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("v-model")]),s._v(" 为 "),a("code",[s._v("Array")]),s._v("。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{fruit}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"apple"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"checkbox-item"')]),s._v(">")]),s._v("🍎 苹果"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"banana"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"checkbox-item"')]),s._v(">")]),s._v("🍌 香蕉"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fruit"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"grape"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"checkbox-item"')]),s._v(">")]),s._v("🍇 葡萄"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"css"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".checkbox-item")]),s._v(" {\n    "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-right")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10px")]),s._v(";\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fruit")]),s._v(": []\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("禁用状态")]),s._v(" "),a("p",[s._v("复选框禁用状态。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("h5",[s._v(s._s(s.check1))]),s._v(" "),a("woo-checkbox",{attrs:{disabled:""},model:{value:s.check1,callback:function(t){s.check1=t},expression:"check1"}},[s._v("关注博主")])]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("disabled")]),s._v(" 接受 "),a("code",[s._v("Boolean")]),s._v("。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{check1}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"check1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(">")]),s._v("关注博主"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("check1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("选中颜色")]),s._v(" "),a("p",[s._v("修改勾选状态颜色。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("h5",[s._v(s._s(s.check2))]),s._v(" "),a("woo-checkbox",{attrs:{color:"#eb4005"},model:{value:s.check2,callback:function(t){s.check2=t},expression:"check2"}},[s._v("关注博主")])]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("color")]),s._v(" 接受 "),a("code",[s._v("String")]),s._v("。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{check2}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"check2"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#eb4005"')]),s._v(">")]),s._v("关注博主"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("check2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("复选框大小")]),s._v(" "),a("p",[s._v("设置复选框大小。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("h5",[s._v(s._s(s.check3))]),s._v(" "),a("woo-checkbox",{attrs:{size:1.25},model:{value:s.check3,callback:function(t){s.check3=t},expression:"check3"}},[s._v("关注博主")])]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("size")]),s._v(" 接受 "),a("code",[s._v("Number")]),s._v(", 值为基准大小倍数。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{check3}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"check3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":size")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1.25"')]),s._v(">")]),s._v("关注博主"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("check3")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("复选框反向")]),s._v(" "),a("p",[s._v("设置复选框为反向。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("h5",[s._v(s._s(s.check4))]),s._v(" "),a("woo-checkbox",{attrs:{reverse:""},model:{value:s.check4,callback:function(t){s.check4=t},expression:"check4"}},[s._v("关注博主")])]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("reverse")]),s._v(" 接受 "),a("code",[s._v("Boolean")]),s._v("。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{check4}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"check4"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("reverse")]),s._v(">")]),s._v("关注博主"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("check4")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("无边框复选框")]),s._v(" "),a("p",[s._v("设置无边框复选框。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("h5",[s._v(s._s(s.check5))]),s._v(" "),a("woo-checkbox",{attrs:{reverse:"",simple:""},on:{change:s.getChange},model:{value:s.check5,callback:function(t){s.check5=t},expression:"check5"}},[s._v("关注博主")])]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("simple")]),s._v(" 接受 "),a("code",[s._v("Boolean")]),s._v("。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("{{check5}}"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("h5")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"check5"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("reverse")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("simple")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@change")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"getChange"')]),s._v(">")]),s._v("关注博主"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-checkbox")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("check5")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("属性")]),s._v(" "),s._m(0),a("h3",[s._v("事件")]),s._v(" "),s._m(1)],1)};e._withStripped=!0;var l={render:e,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"table-wrap"},[t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[this._v("参数")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("类型")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("可选值")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("默认值")])])]),this._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("value")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("复选框选项值")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("String")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("true-value")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("单选时选中值")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("String / Number / Boolean")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("true")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("false-value")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("单选时未选中值")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("String / Number /Boolean")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("false")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("disabled")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("禁用状态")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Boolean")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("true / false")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("false")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("color")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("选中图标颜色")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("String")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("size")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("选框大小")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Number")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("reverse")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("反向选框")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Boolean")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("false")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("simple")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("无边框选框")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Boolean")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("false")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"table-wrap"},[t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[this._v("名称")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("回调参数")])])]),this._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("change")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("绑定值发生变化触发")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("最后变更的值")])])])])])}]};t.a=l}});