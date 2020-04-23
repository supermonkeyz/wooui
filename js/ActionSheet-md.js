webpackJsonp([7],{385:function(s,t,a){s.exports=a(442)},442:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(449),h=a(450),r=!1,n=function(s){r||(a(443),a(445),a(447))},e=a(2)(i.a,h.a,n,null,null);e.options.__file="site/docs/ActionSheet.md",e.esModule&&Object.keys(e.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] ActionSheet.md: functional components are not supported with templates, they should use render functions."),t.default=e.exports},443:function(s,t,a){var i=a(444);"string"==typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);a(1)("7a0b7c3a",i,!1)},444:function(s,t,a){(s.exports=a(0)(void 0)).push([s.i,"\n.action-tips{\n  margin-bottom:0.625rem;\n  font-size:0.875rem;\n}\n",""])},445:function(s,t,a){var i=a(446);"string"==typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);a(1)("2edae50a",i,!1)},446:function(s,t,a){(s.exports=a(0)(void 0)).push([s.i,"\n.action-tips{\n  margin-bottom:0.625rem;\n  font-size:0.875rem;\n}\n",""])},447:function(s,t,a){var i=a(448);"string"==typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);a(1)("57199ebc",i,!1)},448:function(s,t,a){(s.exports=a(0)(void 0)).push([s.i,"\n.action-tips{\n  margin-bottom:0.625rem;\n  font-size:0.875rem;\n}\n",""])},449:function(s,t,a){"use strict";t.a={data:function(){return{value:"",value2:""}},methods:{showActionSheet:function(){var s=this;this.$Bus.$emit("wooAction",{title:"确认操作？",action:function(){s.value="确定"}})},showActionSheetB:function(){var s=this;this.$Bus.$emit("wooAction",{title:"举报",subTitle:"操作后不可撤销",btns:[{text:"替换播放链接",subText:"审核通过后会将该视频替换播放视频链接",icon:"https://image.flaticon.com/icons/svg/126/126502.svg",iconFilter:!0,action:function(){s.value2="替换播放链接"}},{text:"删除该视频",subText:"审核通过后将对该视频进行下架删除",icon:"https://image.flaticon.com/icons/svg/126/126468.svg",iconFilter:!0,action:function(){s.value2="删除该视频"}}]})},showToast:function(){this.$Bus.$emit("wooToast",{type:"success",message:"操作成功"})},showDialog:function(){var s=this;this.$Bus.$emit("wooDialog",{title:"操作后不可取消",message:"确认吗？",btnConfirm:"我确认",action:function(){s.showToast()}})},showActionSheetC:function(){var s=this;this.$Bus.$emit("wooAction",{title:"确认操作？",maskCancel:!0,action:function(){s.showDialog()},cancel:function(){s.$_w_toast({custom:"👋",message:"~ ByeBye ~"})}})}}}},450:function(s,t,a){"use strict";var i=function(){var s=this.$createElement,t=this._self._c||s;return t("section",[t("h2",[this._v("ActionSheet 上拉菜单")]),this._v(" "),t("p",[this._v("用于信息确认的上拉弹层，有确定、取消等操作。")]),this._v(" "),t("h3",[this._v("基础用法")]),this._v(" "),t("p",[this._v("全局注册了")]),this._v(" "),this._m(0),this._v(" "),t("p",[this._v("api结构为：")]),this._v(" "),this._m(1),this._v(" "),t("p",[this._v("提供简写方法(v0.0.6+)：")]),this._v(" "),this._m(2),this._v(" "),t("p",[this._v("可传参类型：")]),this._v(" "),this._m(3),this._v(" "),t("h3",[this._v("基本上拉菜单")]),this._v(" "),t("p",[this._v("基本的上拉菜单，包含主动操作按钮，以及取消操作按钮。")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("div",{staticClass:"action-tips"},[this._v("\n    确认操作: "+this._s(this.value)+"\n  ")]),this._v(" "),t("woo-button",{attrs:{sort:"line",kind:"primary",size:"M","aria-haspopup":"true",id:"AS01"},on:{click:this.showActionSheet}},[this._v("上拉层")]),this._v(" "),t("woo-action-sheet")]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[this._v("只包含确认、取消按钮。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("class")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"action-tips"')]),this._v(">")]),this._v("\n    确认操作: {{value}}\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-button")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("sort")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"line"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("kind")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"M"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("@click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"showActionSheet"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("aria-haspopup")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"true"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("id")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"AS01"')]),this._v(">")]),this._v("上拉层"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-button")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-action-sheet")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-action-sheet")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[this._v(".action-tips")]),this._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[this._v("margin-bottom")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("10px")]),this._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[this._v("font-size")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("14px")]),this._v(";\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("''")]),this._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("value2")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("''")]),this._v("\n    }\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n    showActionSheet() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$Bus.$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooAction'")]),this._v(", {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'确认操作？'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'确定'")]),this._v("\n        }\n      });\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n\n")])])])],2),this._v(" "),t("h3",[this._v("上拉菜单配置按钮")]),this._v(" "),t("p",[this._v("配置上拉菜单的按钮。")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("div",{staticClass:"action-tips"},[this._v("\n    确认操作: "+this._s(this.value2)+"\n  ")]),this._v(" "),t("woo-button",{attrs:{sort:"line",kind:"primary",size:"M"},on:{click:this.showActionSheetB}},[this._v("上拉层")])]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[this._v("btns")]),this._v(" 传参。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("div")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("class")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"action-tips"')]),this._v(">")]),this._v("\n    确认操作: {{value2}}\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("div")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-button")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("sort")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"line"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("kind")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"M"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("@click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"showActionSheetB"')]),this._v(">")]),this._v("上拉层"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-button")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[this._v(".action-tips")]),this._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[this._v("margin-bottom")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("10px")]),this._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[this._v("font-size")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("14px")]),this._v(";\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("''")]),this._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("value2")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("''")]),this._v("\n    }\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n    showActionSheetB() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$Bus.$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooAction'")]),this._v(", {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'举报'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("subTitle")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'操作后不可撤销'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("btns")]),this._v(": [\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'替换播放链接'")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("subText")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'审核通过后会将该视频替换播放视频链接'")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("icon")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'https://image.flaticon.com/icons/svg/126/126502.svg'")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("iconFilter")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n              "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value2 = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'替换播放链接'")]),this._v("\n            }\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'删除该视频'")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("subText")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'审核通过后将对该视频进行下架删除'")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("icon")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'https://image.flaticon.com/icons/svg/126/126468.svg'")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("iconFilter")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n              "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value2 = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'删除该视频'")]),this._v("\n            }\n          }\n        ]\n      });\n    }\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("Modal的组合使用")]),this._v(" "),t("p",[this._v("ActionSheet、Dialog、Toast组合使用。")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("woo-button",{attrs:{sort:"line",kind:"primary",size:"M"},on:{click:this.showActionSheetC}},[this._v("多弹窗")]),this._v(" "),t("woo-dialog"),this._v(" "),t("woo-toast")]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[this._v("多个弹窗。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-button")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("sort")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"line"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("kind")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"primary"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("size")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"M"')]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("@click")]),this._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v('"showActionSheetC"')]),this._v(">")]),this._v("多弹窗"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-button")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-dialog")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-dialog")]),this._v(">")]),this._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-toast")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("woo-toast")]),this._v(">")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"css"}},[this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[this._v(".action-tips")]),this._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[this._v("margin-bottom")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("10px")]),this._v(";\n  "),t("span",{pre:!0,attrs:{class:"hljs-attribute"}},[this._v("font-size")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[this._v("14px")]),this._v(";\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[this._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("export")]),this._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("default")]),this._v(" {\n  data() {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("return")]),this._v(" {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("value")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("''")]),this._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("value2")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("''")]),this._v("\n    }\n  },\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("methods")]),this._v(": {\n    showActionSheet() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$Bus.$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooAction'")]),this._v(", {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'确认操作？'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'确定'")]),this._v("\n        }\n      });\n    },\n    showActionSheetB() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$Bus.$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooAction'")]),this._v(", {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'确认操作？'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("btns")]),this._v(": [\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'删除'")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("kind")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'warn'")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n              "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value2 = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'删除'")]),this._v("\n            }\n          },\n          {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'收藏'")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n              "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".value2 = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'收藏'")]),this._v("\n            }\n          }\n        ]\n      });\n    },\n    showToast() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$Bus.$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooToast'")]),this._v(", {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("type")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'success'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("message")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'操作成功'")]),this._v(",\n      });\n    },\n    showDialog() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$Bus.$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooDialog'")]),this._v(", {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'操作后不可取消'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("message")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'确认吗？'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("btnConfirm")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'我确认'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".showToast();\n        }\n      });\n    },\n    showActionSheetC() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$Bus.$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooAction'")]),this._v(", {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'确认操作？'")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("maskCancel")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("true")]),this._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".showDialog();\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("cancel")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$_w_toast({\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("custom")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'👋'")]),this._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("message")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'~ ByeBye ~'")]),this._v("\n          })\n        }\n      });\n    },\n  }\n}\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[this._v("script")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("添加css类名")]),this._v(" "),t("p",[this._v("用法参看同"),t("router-link",{attrs:{to:"Toast"}},[this._v("Toast")])],1)],1)};i._withStripped=!0;var h={render:i,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[this._v("Vue.prototype.$Bus = Vue.$Bus = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("new")]),this._v(" Vue();\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$Bus.$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooAction'")]),this._v(", parameters);\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$_w_sheet(parameters);\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[this._v("/**\n * @param {Object} data - 参数对象\n * @param {Boolean} [data.autohide = false] - 是否自动消失.\n * @param {String} [data.title = ''] - 上拉菜单标题.\n * @param {String} [data.subTitle = ''] - 上拉菜单小标题.\n * @param {Boolean} [data.mask = true] - 对话框遮罩.\n * @param {Boolean} [data.touchclose = true] - 对话框遮罩点击关闭.\n * @param {String} [data.btnCancel = '取消'] - 对话框取消按钮文案.\n * @param {String} [data.btnConfirm = '确定'] - 对话框确定按钮文案.\n * @param {Function} [data.action = () => {}] - 点击确认提示层关闭后执行动作.\n * @param {Function} [data.cancel = () => {}] - 点击取消提示层关闭后执行动作 v0.0.7后支持.\n * @param {Boolean} [data.maskCancel = false] - 对话框遮罩点击关闭后执行cancel的回调 v0.0.7后支持.\n * @param {Array} [data.btns = []] - 自定义按钮.\n * @param {Object} [data.btns[]] - 自定义按钮格式.\n * @param {String} [data.btns[].text = ''] - 自定义按钮标题.\n * @param {String} [data.btns[].subText = ''] - 自定义按钮描述.\n * @param {String / Object} [data.btns[].icon = '' || { light: '', dark: ''}] - 自定义icon.\n * @param {Boolean} [data.btns[].iconFilter = false] - 自定义icon自动适配深色模式 色值可能不准确.\n * @param {String} [data.btns[].kind = 'primary' || 'success' || 'link' || 'warn' || 'default' ] - 自定义按钮格式.\n * @param {Function} [data.btns[].action = () => {} ] - 自定义按钮格式.\n * @param {Number} [data.duration = 350] - !动画默认执行时间，不需要改变不传参数.\n * @param {Number} [data.hideDuration = 1500] - !自动隐藏停留时间，不需要改变不传参数.\n * @param {String} [data.cssClass = ''] - 外层挂载制定的css类名. v0.1.0\n */")]),this._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$Bus.$emit("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'wooAction'")]),this._v(", {\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("title")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'标题'")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("btnConfirm")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'确认'")]),this._v(",\n  btnCancel = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'取消'")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {},\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("cancel")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {},\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("maskCancel")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[this._v("false")]),this._v(",\n  "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("btns")]),this._v(": [\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("text")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'自定义按钮'")]),this._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("kind")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[this._v("'warn'")]),this._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[this._v("action")]),this._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[this._v("()")]),this._v(" =>")]),this._v(" {}\n    }\n  ]\n});\n")])])}]};t.a=h}});