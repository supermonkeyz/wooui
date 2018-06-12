webpackJsonp([19],{344:function(s,t,a){s.exports=a(406)},406:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(409),h=!1,v=function(s){h||a(407)},l=a(2)(null,i.a,v,null,null);l.options.__file="site/docs/Avatar.md",l.esModule&&Object.keys(l.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] Avatar.md: functional components are not supported with templates, they should use render functions."),t.default=l.exports},407:function(s,t,a){var i=a(408);"string"==typeof i&&(i=[[s.i,i,""]]),i.locals&&(s.exports=i.locals);a(1)("036531f2",i,!1)},408:function(s,t,a){(s.exports=a(0)(void 0)).push([s.i,"\n.avatar-users{\n  margin-right:0.625rem;\n}\n",""])},409:function(s,t,a){"use strict";var i=function(){var s=this.$createElement,t=this._self._c||s;return t("section",[t("h2",[this._v("Avatar 头像")]),this._v(" "),t("p",[this._v("微博头像")]),this._v(" "),t("h3",[this._v("基础用法")]),this._v(" "),t("p",[this._v("引用得到一个圆角带描边的图像。例如：")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("woo-avatar",{attrs:{src:"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"}})]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[this._v("src")]),this._v("接收图片地址。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"')]),this._v("\n  >")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("设置头像大小")]),this._v(" "),t("p",[this._v("可通过属性设置头像的大小。例如：")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("woo-avatar",{attrs:{size:50,src:"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"}})]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[this._v("size")]),this._v("属性接收"),t("code",[this._v("Number")]),this._v("。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"50"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"')]),this._v("\n  >")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("设置认证标识")]),this._v(" "),t("p",[this._v("可通过属性设置认证标识，标识可以根据头像大小自动适配尺寸。例如：")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("woo-avatar",{staticClass:"avatar-users",attrs:{verified:"vgold",src:"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"}}),this._v(" "),t("woo-avatar",{staticClass:"avatar-users",attrs:{verified:"vyellow",size:50,src:"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"}}),this._v(" "),t("woo-avatar",{staticClass:"avatar-users",attrs:{verified:"vblue",size:60,src:"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"}})]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[this._v("verified")]),this._v("属性接收"),t("code",[this._v("String")]),this._v("。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("verified")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"vgold"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"avatar-users"')]),this._v("\n  >")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("verified")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"vyellow"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"50"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"avatar-users"')]),this._v("\n  >")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("verified")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"vblue"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"60"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"avatar-users"')]),this._v("\n  >")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),t("span",{attrs:{class:"css"}},[this._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[this._v(".avatar-users")]),this._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[this._v("margin-right")]),this._v(": "),t("span",{attrs:{class:"hljs-number"}},[this._v("10px")]),this._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("style")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("设置头像挂件")]),this._v(" "),t("p",[this._v("可通过属性设置头像挂件。例如：")]),this._v(" "),t("sample-box",[t("template",{slot:"raw"},[[t("woo-avatar",{staticClass:"avatar-users",attrs:{src:"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg",cover:"//h5.sinaimg.cn/upload/2017/03/22/550/gj_vip_140-150.png"}}),this._v(" "),t("woo-avatar",{staticClass:"avatar-users",attrs:{size:50,src:"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg",cover:"//h5.sinaimg.cn/upload/2017/03/22/550/gj_vip_140-150.png"}}),this._v(" "),t("woo-avatar",{staticClass:"avatar-users",attrs:{size:60,src:"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg",cover:"//h5.sinaimg.cn/upload/2017/03/22/550/gj_vip_140-150.png"}})]],2),this._v(" "),t("template",{slot:"meta"},[t("p",[t("code",[this._v("cover")]),this._v("属性接收挂件图片地址。")])]),this._v(" "),t("template",{slot:"code"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("cover")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//h5.sinaimg.cn/upload/2017/03/22/550/gj_vip_140-150.png"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"avatar-users"')]),this._v("\n  >")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"50"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("cover")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//h5.sinaimg.cn/upload/2017/03/22/550/gj_vip_140-150.png"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"avatar-users"')]),this._v("\n  >")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v(">")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("<"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v(":size")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"60"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("src")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("cover")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"//h5.sinaimg.cn/upload/2017/03/22/550/gj_vip_140-150.png"')]),this._v("\n    "),t("span",{attrs:{class:"hljs-attr"}},[this._v("class")]),this._v("="),t("span",{attrs:{class:"hljs-string"}},[this._v('"avatar-users"')]),this._v("\n  >")]),this._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("woo-avatar")]),this._v(">")]),this._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[this._v("</"),t("span",{attrs:{class:"hljs-name"}},[this._v("template")]),this._v(">")]),this._v("\n")])])])],2),this._v(" "),t("h3",[this._v("属性")]),this._v(" "),this._m(0)],1)};i._withStripped=!0;var h={render:i,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"table-wrap"},[t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[this._v("参数")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("类型")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("可选值")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("默认值")])])]),this._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("src")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("头像url")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("String")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("size")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("头像大小")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Number")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("verified")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("认证图标")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("String")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("vyellow / vblue / vgold / vgirl / club")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("cover")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("头像挂件")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("String")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])])])])])}]};t.a=h}});