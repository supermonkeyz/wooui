webpackJsonp([28],{371:function(s,t,a){s.exports=a(480)},480:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(481),h=a(482),i=a(2)(l.a,h.a,null,null,null);i.options.__file="site/docs/Follow.md",i.esModule&&Object.keys(i.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] Follow.md: functional components are not supported with templates, they should use render functions."),t.default=i.exports},481:function(s,t,a){"use strict";t.a={data:function(){return{value:!0,value1:!1,following:!1}},methods:{add:function(){var s=this;this.following=!0,setTimeout(function(){s.following=!1,s.value=!s.value},500)},follow:function(){var s=this;this.value?this.$Bus.$emit("wooDialog",{type:"confirm",title:"取消关注",message:"是否要取消对XXX的关注？",action:function(){s.add()}}):this.add()},followOnce:function(){this.value1=!this.value1}}}},482:function(s,t,a){"use strict";var l=function(){var s=this.$createElement,t=this._self._c||s;return t("section",[t("h2",[this._v("Follow")]),this._v(" "),t("p",[this._v("标准微博关注按钮")]),this._v(" "),t("h3",[this._v("普通用法")]),this._v(" "),t("p",[this._v("微博关注关系按钮，默认为中号大小，品牌色值。例如：")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("woo-follow")]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[this._v("sample。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("按钮大小")]),this._v(" "),t("p",[this._v("关注按钮继承于普通按钮，同按钮组件属性。例如：")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("p",[t("woo-follow",{attrs:{size:"L"}})],1),this._v(" "),t("p",[t("woo-follow",{attrs:{size:"M"}})],1),this._v(" "),t("p",[t("woo-follow",{attrs:{size:"S"}})],1)]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[this._v("size")]),this._v(" 可选值为 "),t("code",[this._v("L")]),this._v("、"),t("code",[this._v("M")]),this._v("、"),t("code",[this._v("S")]),this._v("。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"L"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"M"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"S"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("按钮风格")]),this._v(" "),t("p",[this._v("配置按钮为实色或线框。例如：")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("woo-follow",{attrs:{sort:"flat"}}),this._v(" "),t("woo-follow",{attrs:{sort:"simple"}})]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[this._v("sort")]),this._v(" 可选值为 "),t("code",[this._v("flat")]),this._v("、"),t("code",[this._v("line")]),this._v("、"),t("code",[this._v("simple")]),this._v("。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("sort")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"flat"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("sort")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"simple"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("按钮颜色")]),this._v(" "),t("p",[this._v("虽然规范按钮色值为主题色，但是按钮颜色仍可配色。例如：")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("woo-follow",{attrs:{kind:"success"}}),this._v(" "),t("woo-follow",{attrs:{kind:"link"}}),this._v(" "),t("woo-follow",{attrs:{kind:"warn"}}),this._v(" "),t("woo-follow",{attrs:{kind:"default"}})]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[this._v("kind")]),this._v(" 可选值为 "),t("code",[this._v("success")]),this._v("、"),t("code",[this._v("link")]),this._v("、"),t("code",[this._v("warn")]),this._v("、"),t("code",[this._v("default")]),this._v("。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("kind")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"success"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("kind")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"link"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("kind")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"warn"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("kind")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"default"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("关注状态")]),this._v(" "),t("p",[this._v("关注状态。例如：")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("p",[this._v("现在是否关注："+this._s(this.value))]),this._v(" "),t("woo-dialog"),this._v(" "),t("woo-follow",{attrs:{loading:this.following,follow:this.value},on:{click:this.follow}})]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[this._v("follow")]),this._v(" 接受 "),t("code",[this._v("Boolean")]),this._v("。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("现在是否关注：{{ value }}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-dialog")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-dialog")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v(":loading")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"following"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v(":follow")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"value"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("@click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"follow"')]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("following")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v("\n    };\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n    add() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".following = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(";\n      setTimeout("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".following = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(";\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value = !"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value;\n      }, "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("500")]),this._v(")\n    },\n    follow() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("if")]),this._v(" ("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$Bus.$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooDialog'")]),this._v(", {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'confirm'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'取消关注'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("message")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'是否要取消对XXX的关注？'")]),this._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".add();\n          }\n        });\n      } "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("else")]),this._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".add();\n      }\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("只允许关注行为")]),this._v(" "),t("p",[this._v("按钮不可以取消关注，按钮变为disabled。例如：")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("p",[this._v("现在是否关注："+this._s(this.value1))]),this._v(" "),t("woo-follow",{attrs:{follow:this.value1,once:""},on:{click:this.followOnce}})]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[this._v("once")]),this._v(" 接受 "),t("code",[this._v("Boolean")]),this._v("。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("现在是否关注：{{ value1 }}"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("p")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v(":follow")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"value1"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("@click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"followOnce"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("once")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-follow")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("value1")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v("\n    };\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n    followOnce() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value1 = !"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value1;\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("属性")]),this._v(" "),t("p",[this._v("其余属性参见Button组件。")]),this._v(" "),this._m(0)],1)};l._withStripped=!0;var h={render:l,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"table-wrap"},[t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[this._v("参数")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("类型")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("可选值")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("默认值")])])]),this._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("follow")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("关注状态")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Boolean")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("true/false")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("false")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("once")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("关注后是否可以取消")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Boolean")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("true/false")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("false")])])])])])}]};t.a=h}});