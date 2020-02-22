webpackJsonp([12],{384:function(s,t,e){s.exports=e(562)},562:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(565),a=e(566),r=!1,i=function(s){r||e(563)},h=e(2)(n.a,a.a,i,null,null);h.options.__file="site/docs/component.md",h.esModule&&Object.keys(h.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),h.options.functional&&console.error("[vue-loader] component.md: functional components are not supported with templates, they should use render functions."),t.default=h.exports},563:function(s,t,e){var n=e(564);"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);e(1)("08c4eec0",n,!1)},564:function(s,t,e){(s.exports=e(0)(void 0)).push([s.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},565:function(s,t,e){"use strict";t.a={name:"woo-demo"}},566:function(s,t,e){"use strict";var n=function(){var s=this.$createElement;this._self._c;return this._m(0)};n._withStripped=!0;var a={render:n,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("section",[t("h1",[this._v("组件规范")]),this._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#new"}},[this._v("新建组件")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#name"}},[this._v("组件命名")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#entry"}},[this._v("入口文件")])]),this._v(" "),t("li",[t("a",{attrs:{href:"#code"}},[this._v("组件开发")])])]),this._v(" "),t("h2",[this._v("新建组件 "),t("a",{attrs:{name:"new"}})]),this._v(" "),t("h3",[this._v("普通组件")]),this._v(" "),t("p",[this._v("通过命令行新建一个组件。")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[this._v("npm run new\n")])]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[this._v("Your Component Name?\n")])]),this._v(" "),t("p",[this._v("会在 "),t("code",{pre:!0},[this._v("src/components")]),this._v(" 目录，得到组件对应名称的目录，目录里面包含了.vue、index.js、var.css，会将对应var.css import入 "),t("code",{pre:!0},[this._v("base/global.css")]),this._v("，会在 "),t("code",{pre:!0},[this._v("src/components.json")]),this._v(" 文件内写入组件名与对应路径。会在 "),t("code",{pre:!0},[this._v("site/docs")]),this._v(" 目录新建对应组件的.md说明文件，会在 "),t("code",{pre:!0},[this._v("site/site.conf.json")]),this._v(" 内配置组件说明信息。当然这是自动的。")]),this._v(" "),t("h3",[this._v("组件组")]),this._v(" "),t("p",[this._v("通过命令行新建一个组件组。")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[this._v("yarn new -c g\n")])]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[this._v("Your Component Group Name?\n")])]),this._v(" "),t("p",[this._v("组件组生成的文件略有不同，最大区别在于index.js入口文件，未来再增加子组件的时候需要自己手动加入对应的子组件。可以参考Box组件")]),this._v(" "),t("h2",[this._v("组件命名 "),t("a",{attrs:{name:"name"}})]),this._v(" "),t("p",[this._v("新建组件键入组件名称，对于单词组件，可直接输入单词。最终会得到一个大写字母开头的组件。如：")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[this._v("Your Component Name? avatar\n")])]),this._v(" "),t("p",[this._v("将得到一个名称为 "),t("code",{pre:!0},[this._v("Avatar")]),this._v(" 的组件。")]),this._v(" "),t("p",[this._v("如果组件名称比较复杂，需要一个词组，那么单词间使用 "),t("code",{pre:!0},[this._v("-")]),this._v(" 连字符。如：")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[this._v("Your Component Name? action-sheet\n")])]),this._v(" "),t("p",[this._v("将得到一个名称为 "),t("code",{pre:!0},[this._v("ActionSheet")]),this._v(" 的组件，组件名最终按照大写驼峰命名转换，当然也可以直接按照这种方式命名组件。")]),this._v(" "),t("h2",[this._v("入口文件 "),t("a",{attrs:{name:"entry"}})]),this._v(" "),t("p",[t("code",{pre:!0},[this._v("src/index.js")]),this._v(" 入口文件也是通过编译得到的。")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[this._v("npm run entry\n")])]),this._v(" "),t("p",[this._v("运行之后，入口文件将被重新编译。")]),this._v(" "),t("h2",[this._v("组件开发 "),t("a",{attrs:{name:"code"}})]),this._v(" "),t("p",[this._v("组件开发基本是在.vue文件内，组件生成的时候会预制一个模板。类似于：")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("lang")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"html"')]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("class")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"woo-demo"')]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("name")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'woo-demo'")]),this._v("\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("style")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("lang")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"css"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"undefined"}},[this._v("\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n")])]),this._v(" "),t("p",[this._v("开发过程中，按照eslint stylelint编码即可。一些复杂逻辑建议放到script内处理。")])])}]};t.a=a}});