webpackJsonp([30],{391:function(s,t,e){s.exports=e(590)},590:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(591),n=e(2)(null,o.a,null,null,null);n.options.__file="site/docs/static.md",n.esModule&&Object.keys(n.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] static.md: functional components are not supported with templates, they should use render functions."),t.default=n.exports},591:function(s,t,e){"use strict";var o=function(){var s=this.$createElement;this._self._c;return this._m(0)};o._withStripped=!0;var n={render:o,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("section",[t("h1",[this._v("静态资源")]),this._v(" "),t("h2",[this._v("字体图标")]),this._v(" "),t("p",[this._v("字体图标组件文件夹 "),t("code",{pre:!0},[this._v("src/components/Fonticon/svg")]),this._v(" 文件夹内存了字体图标源文件，新增一个字体图标需要将svg文件放至此文件夹，命令行运行：")]),this._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-shell"}},[this._v("gulp iconfont\n")])]),this._v(" "),t("p",[this._v("在 "),t("code",{pre:!0},[this._v("src/components/Fonticon/fonts")]),this._v(" 会得到字体文件。编译vue文件的时候，通过template.css模板，每个字体图标对应的css属性会被自动生成。")]),this._v(" "),t("p",[this._v("在 "),t("code",{pre:!0},[this._v("site/_template.json")]),this._v(" 内也会写入新增图标的信息，在"),t("a",{attrs:{href:"/components/Fonticon"}},[this._v("字体图标预览页")]),this._v("会自动生成对应图标的预览。")]),this._v(" "),t("h2",[this._v("SVG图标")]),this._v(" "),t("p",[this._v("svg图标分别位于 "),t("code",{pre:!0},[this._v("src/components/Icon/svgs")]),this._v("、 "),t("code",{pre:!0},[this._v("src/components/IconExtra/svgs")]),this._v("、 "),t("code",{pre:!0},[this._v("src/components/Loading/svgs")]),this._v("、 "),t("code",{pre:!0},[this._v("src/components/Like/svgs")]),this._v("，处理这些资源的是svg-sprite-loader。这样就可以使用symbol方式引用图标。新增icon文件，可以直接将svg文件放入对应svg文件夹，loader会自动根据文件名生成对应id的图标。")])])}]};t.a=n}});