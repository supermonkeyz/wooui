webpackJsonp([33],{389:function(s,t,a){s.exports=a(585)},585:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(586),i=a(2)(null,r.a,null,null,null);i.options.__file="site/docs/getstarted.md",i.esModule&&Object.keys(i.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] getstarted.md: functional components are not supported with templates, they should use render functions."),t.default=i.exports},586:function(s,t,a){"use strict";var r=function(){var s=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var i={render:r,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("section",[t("h2",[this._v("开始")]),this._v(" "),t("h3",[this._v("在项目中引入WooUI")]),this._v(" "),t("p",[this._v("在项目的入口文件中引用整个包")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'vue'")]),this._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" WooUI "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'@woo/wooui'")]),this._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'@woo/wooui/dist/wooui.css'")]),this._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" App "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'./App'")]),this._v(";\n\nVue.use(WooUI);\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("new")]),this._v(" Vue({\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("el")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'#app'")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("template")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'<App/>'")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("components")]),this._v(": { App },\n});\n")])]),this._v(" "),t("h4",[this._v("参数设置")]),this._v(" "),t("p",[this._v("WooUI 在引用时提供了一些可配置参数，默认值如下：")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[this._v("{\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("preserveAspectRatio")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("hairline")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("weibo")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("frame")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("375")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("ratio")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("16")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("maxWidth")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("480")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("modalsRegister")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// 0.0.7增加")]),this._v("\n  darkMode: "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// 0.2.0增加")]),this._v("\n}\n")])]),this._v(" "),t("h5",[this._v("preserveAspectRatio")]),this._v(" "),t("p",[this._v("配置 preserveAspectRatio 值为 true，页面中的元素会通过设置根字号方式按照基准大小等比缩放。不过当我们在项目中添加自己的组件元素时，也应该遵守 ratio 为16的基准进行单位转换。在UI元素较为复杂的场景中我们常常会使用到这种屏幕适配方式。当然你可以使用css中的 vw vh 这样的单位适配屏幕。")]),this._v(" "),t("h5",[this._v("hairline")]),this._v(" "),t("p",[this._v("配置 hairline 值为 true，安卓系统会通过缩放viewport的方式实现细边框。")]),this._v(" "),t("h5",[this._v("weibo")]),this._v(" "),t("p",[this._v("配置 weibo 值为 true，页面基础frame会按照weibo内展示规范显示。")]),this._v(" "),t("h5",[this._v("frame")]),this._v(" "),t("p",[this._v("基准屏幕尺寸")]),this._v(" "),t("h5",[this._v("ratio")]),this._v(" "),t("p",[this._v("基准字号，由于WooUI样式定义的基准字号为16，如果你需要更改这个基准，那么WooUI提供的组件也需要自己重新编译，所以不建议变更。")]),this._v(" "),t("h5",[this._v("maxWidth")]),this._v(" "),t("p",[this._v("页面最大宽度")]),this._v(" "),t("h5",[this._v("modalsRegister 0.0.7增加")]),this._v(" "),t("p",[this._v("自动绑定 "),t("code",{pre:!0},[this._v("Toast")]),this._v(" "),t("code",{pre:!0},[this._v("Dialog")]),this._v(" "),t("code",{pre:!0},[this._v("ActionSheet")]),this._v(" "),t("code",{pre:!0},[this._v("StatusBar")]),this._v(" 这些模态组件。")]),this._v(" "),t("p",[this._v("注：WooUI 在 Android端采取的viewport缩放的方式实现Hairline，这个或许会引发一些问题，比如你必须在业务中使用非 "),t("code",{pre:!0},[this._v("px")]),this._v(" 单位 。根据微博客户端特性预制了背景以及组件比例适配关系，这个也许你不需要。这些都可以在option中设置，例如：")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[this._v("Vue.use(WooUI, { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("hairline")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("weibo")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(" });\n")])]),this._v(" "),t("h5",[this._v("darkMode 0.2.0增加")]),this._v(" "),t("p",[this._v("深色模式下是否跟随系统变更为深色模式。可以通过"),t("code",{pre:!0},[this._v("this.$_w_darkSwitcher()")]),this._v("传入"),t("code",{pre:!0},[this._v("true/false")]),this._v("打开或者关闭。")]),this._v(" "),t("h3",[this._v("按需引入组件")]),this._v(" "),t("p",[this._v("按需引用组件可能操作稍微有些复杂。因为需要将包内预编译文件作为你项目的一部分来编译，所以你的业务中也需要配置WooUI的生产环境。")]),this._v(" "),t("p",[this._v("因为WooUI CSS 使用了 "),t("code",{pre:!0},[this._v("postcss")]),this._v(" 作为预编译语言，需要安装一些依赖，在 "),t("code",{pre:!0},[this._v(".postcssrc.js")]),this._v("做一些配置：")]),this._v(" "),t("h4",[this._v("package.json")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-at-rules-variables"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^0.1.1"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-bem-fix"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^1.0.0"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-conditionals"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^2.1.0"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-cssnext"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^3.0.2"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-custom-properties"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^6.0.1"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-discard-comments"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^2.0.4"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-discard-duplicates"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^2.1.0"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-discard-empty"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^2.1.0"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-each"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^0.10.0"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-extend"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^1.0.5"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-flexbugs-fixes"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^3.0.0"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-for"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^2.1.1"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-import"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^10.0.0"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-loader"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^2.0.6"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-mixins"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^6.0.1"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-nested"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^2.0.4"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-pxtorem"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^4.0.1"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-short"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^4.1.0"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-simple-vars"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^4.0.0"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-units"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^1.1.0"')]),this._v(",\n")])]),this._v(" "),t("h4",[this._v(".postcssrc.js")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[this._v("module")]),this._v(".exports = {\n  "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"plugins"')]),this._v(": {\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-import"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-discard-comments"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-mixins"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-bem-fix"')]),this._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("defaultNamespace")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'woo'")]),this._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("style")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'suit'")]),this._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("separators")]),this._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("descendent")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'__'")]),this._v("\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("shortcuts")]),this._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("utility")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'u'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("component")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'b'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("descendent")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'e'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("modifier")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'m'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("when")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'w'")]),this._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-flexbugs-fixes"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-at-rules-variables"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-each"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-custom-properties"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-short"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-simple-vars"')]),this._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("silent")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(" },\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-for"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-cssnext"')]),this._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("features")]),this._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("nesting")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-nested"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-conditionals"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-units"')]),this._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("size")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("16")]),this._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("precision")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("6")]),this._v("\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-pxtorem"')]),this._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("rootValue")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("16")]),this._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("propWhiteList")]),this._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'*'")]),this._v(","),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'!border'")]),this._v(","),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'!border-top'")]),this._v(","),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'!border-right'")]),this._v(","),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'!border-bottom'")]),this._v(","),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'!border-left'")]),this._v(","),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'!border-width'")]),this._v(","),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'!-webkit-backdrop-filter'")]),this._v("],\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("selectorBlackList")]),this._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'html'")]),this._v("],\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("mediaQuery")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v("\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-discard-duplicates"')]),this._v(": {},\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"postcss-discard-empty"')]),this._v(": {}\n  }\n}\n")])]),this._v(" "),t("p",[this._v("WooUI SVG icon 使用了 "),t("code",{pre:!0},[this._v("svg-sprite-loader")]),this._v(" 加载 SVG 资源，所以需要安装对应依赖：")]),this._v(" "),t("h4",[this._v("package.json")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"svg-sprite-loader"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^3.0.5"')]),this._v(",\n"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"svgo-loader"')]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"^1.2.1"')]),this._v(",\n")])]),this._v(" "),t("p",[this._v("如果遇到svgo的报错，请升级 "),t("code",{pre:!0},[this._v("svgo")]),this._v(" 这个依赖，因为 "),t("code",{pre:!0},[this._v("svgo-loader")]),this._v(" 依赖 "),t("code",{pre:!0},[this._v("svgo")]),this._v("。")]),this._v(" "),t("h4",[this._v("webpack配置")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[this._v("resolve: {\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// ……")]),this._v("\n  alias: {\n    "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'@wb/wooui'")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'@wb/wooui/src'")]),this._v("\n  }\n}\n\nrules: [\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// ……")]),this._v("\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("test")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[this._v("/@wb.wooui.src.*?js$/")]),this._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("loader")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'babel-loader'")]),this._v("\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("test")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[this._v("/@wb.wooui.src.*?svg$/")]),this._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("use")]),this._v(": [\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("loader")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'svg-sprite-loader'")]),this._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("loader")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'svgo-loader'")]),this._v("\n      }\n    ],\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("test")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[this._v("/@wb.wooui.src.*?png$/")]),this._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("use")]),this._v(": [\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("loader")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'url-loader'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("options")]),this._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("limit")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("10000")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("name")]),this._v(": utils.assetsPath(\n            config.build.md5\n              ? "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'img/[name].[hash:7].[ext]'")]),this._v("\n              : "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'img/[name].[ext]?[hash:7]'")]),this._v("\n          )\n        }\n      },\n    ],\n  }\n]\n")])]),this._v(" "),t("h4",[this._v("main.js 引用")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// HairLine")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" { device } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'@wb/wooui/base'")]),this._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// 单组件")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" Loading "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'@wb/wooui/components/Loading'")]),this._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("// 组件组")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("import")]),this._v(" * "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("as")]),this._v(" Box "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("from")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'@wb/wooui/components/Box'")]),this._v(";\n\nVue.use(Loading);\nVue.use(Box.Box);\nVue.use(Box.BoxItem);\n\ndevice();\n")])]),this._v(" "),t("p",[this._v("复杂不复杂？建成vue-cli模板之后也许会轻松很多")])])}]};t.a=i}});