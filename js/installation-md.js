webpackJsonp([31],{390:function(s,t,a){s.exports=a(588)},588:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(589),e=a(2)(null,r.a,null,null,null);e.options.__file="site/docs/installation.md",e.esModule&&Object.keys(e.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] installation.md: functional components are not supported with templates, they should use render functions."),t.default=e.exports},589:function(s,t,a){"use strict";var r=function(){var s=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var e={render:r,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("section",[t("h2",[this._v("安装")]),this._v(" "),t("h3",[this._v("npm安装")]),this._v(" "),t("p",[this._v("推荐使用npm的安装方式，由于目前WooUI是内网发布版本，所以需要在具体业务目录创建 "),t("code",{pre:!0},[this._v(".npmrc")]),this._v(" 文件。在 "),t("code",{pre:!0},[this._v(".npmrc")]),this._v(" 中，需要做以下配置：")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-npmrc"}},[this._v('registry="https://registry.npm.taobao.org"\n@woo:registry=http://registry.npm.intra.weibo.cn\n')])]),this._v(" "),t("p",[this._v("当配置到私有npm之后，我们就可以进行安装了:")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[this._v("npm install @woo/wooui\n")])]),this._v(" "),t("h3",[this._v("CDN 直接 script 引入")]),this._v(" "),t("p",[this._v("静态资源待发布 地址为一个示例")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("\x3c!-- head内 --\x3e")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("link")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("rel")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"stylesheet"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("href")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"http://10.210.244.23/wooui/dist/wooui.css"')]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("\x3c!-- body内 --\x3e")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("id")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"app"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("\x3c!-- built files will be auto injected --\x3e")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"https://cdn.jsdelivr.net/npm/vue@2.4.2/dist/vue.js"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"undefined"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"http://10.210.244.23/dist/wooui.js"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"undefined"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])]),this._v(" "),t("p",[this._v("配置一下webpack")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[this._v("module")]),this._v(".exports = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("externals")]),this._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'vue'")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'Vue'")]),this._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooui'")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'WooUI'")]),this._v("\n  }\n}\n\n")])]),this._v(" "),t("p",[this._v("main.js内引用vue不会打包")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'vue'")]),this._v("\n")])]),this._v(" "),t("p",[this._v("如果你需要改变页面适配可以在main.js内配置")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[this._v("window")]),this._v(".wooui.setViewport.init({ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("weibo")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("preserveAspectRatio")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(" })\n")])]),this._v(" "),t("p",[this._v("详细参数可参见开始>参数设置")]),this._v(" "),t("p",[this._v("现在我们已经准备好了，下一步就是开始如何使用WooUI了")])])}]};t.a=e}});