webpackJsonp([9],{360:function(s,t,a){s.exports=a(445)},445:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(450),e=a(451),r=!1,n=function(s){r||(a(446),a(448))},v=a(2)(l.a,e.a,n,null,null);v.options.__file="site/docs/Cell.md",v.esModule&&Object.keys(v.esModule).some(function(s){return"default"!==s&&"__"!==s.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),v.options.functional&&console.error("[vue-loader] Cell.md: functional components are not supported with templates, they should use render functions."),t.default=v.exports},446:function(s,t,a){var l=a(447);"string"==typeof l&&(l=[[s.i,l,""]]),l.locals&&(s.exports=l.locals);a(1)("0448110c",l,!1)},447:function(s,t,a){(s.exports=a(0)(void 0)).push([s.i,"\n.item{\n  padding:0.75rem;\n}\n.item .pic{\n  vertical-align:middle;\n}\n.item .nick{\n  margin-left:0.3125rem;\n}\n",""])},448:function(s,t,a){var l=a(449);"string"==typeof l&&(l=[[s.i,l,""]]),l.locals&&(s.exports=l.locals);a(1)("4861454e",l,!1)},449:function(s,t,a){(s.exports=a(0)(void 0)).push([s.i,"\n.gap{\n  text-indent:1rem;\n}\n",""])},450:function(s,t,a){"use strict";t.a={data:function(){return{value:!0}}}},451:function(s,t,a){"use strict";var l=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("Cell")]),s._v(" "),a("p",[s._v("常用单元格")]),s._v(" "),a("h3",[s._v("基本用法")]),s._v(" "),a("p",[s._v("基本用法。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("woo-cell-group",s._l(5,function(t){return a("woo-cell",{key:t},[s._v("\n      "+s._s(t)+"\n      ")])}),1)]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[s._v("配合cell-group父组件，实现自动分割。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"n in 5"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"n"')]),s._v(">")]),s._v("\n      {{ n }}\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- <template v-slot:sub>\n      测试\n      </template> --\x3e")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("干掉分割线")]),s._v(" "),a("p",[s._v("去掉上下两条分割线。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("woo-cell-group",{attrs:{"no-edge":""}},s._l(5,function(t){return a("woo-cell",{key:t},[s._v("\n      "+s._s(t)+"\n      ")])}),1)]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("no-edge")]),s._v("接受"),a("code",[s._v("Boolean")]),s._v("。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("no-edge")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"n in 5"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"n"')]),s._v(">")]),s._v("\n      {{ n }}\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- <template v-slot:sub>\n      测试\n      </template> --\x3e")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("右箭头")]),s._v(" "),a("p",[s._v("列表加入右箭头。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("woo-cell-group",{staticClass:"group2"},s._l(3,function(t){return a("woo-cell",{key:t,attrs:{arr:""}},[a("div",{staticClass:"item"},[a("woo-avatar",{staticClass:"pic",attrs:{src:"//tvax2.sinaimg.cn/crop.0.0.1125.1125.1024/69e273f8ly8fuqt81zh3dj20v90v9abc.jpg"}}),s._v(" "),a("span",{staticClass:"nick"},[s._v("mata川の弟弟")])],1)])}),1)]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("arr")]),s._v(" 接受 "),a("code",[s._v("Boolean")]),s._v("。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"group2"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"n in 3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"n"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("arr")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-avatar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"pic"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"//tvax2.sinaimg.cn/crop.0.0.1125.1125.1024/69e273f8ly8fuqt81zh3dj20v90v9abc.jpg"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-avatar")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"nick"')]),s._v(">")]),s._v("mata川の弟弟"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".item")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("padding")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12px")]),s._v(";\n}\n\n"),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".pic")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("vertical-align")]),s._v(": middle;\n}\n\n"),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".nick")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("margin-left")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5px")]),s._v(";\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("分割线间隔")]),s._v(" "),a("p",[s._v("分割线的左右间隔。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("woo-cell-group",s._l(3,function(t){return a("woo-cell",{key:t,staticClass:"gap",attrs:{"gap-start":12}},[s._v("\n      "+s._s(t)+"\n      ")])}),1)]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("gap-start")]),s._v("、"),a("code",[s._v("gap-end")]),s._v("接受"),a("code",[s._v("Number")]),s._v("。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"n in 3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"n"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":gap-start")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"12"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"gap"')]),s._v(">")]),s._v("\n      {{ n }}\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- <template v-slot:sub>\n      测试\n      </template> --\x3e")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".gap")]),s._v(" {\n  "),a("span",{pre:!0,attrs:{class:"hljs-attribute"}},[s._v("text-indent")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("16px")]),s._v(";\n}\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("分割线颜色")]),s._v(" "),a("p",[s._v("分割线的颜色。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("woo-cell-group",{attrs:{"border-color":"#ff8200"}},s._l(3,function(t){return a("woo-cell",{key:t},[s._v("\n      "+s._s(t)+"\n    ")])}),1)]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[a("code",[s._v("border-color")]),s._v("接受"),a("code",[s._v("String")]),s._v("。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("border-color")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#ff8200"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"n in 3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"n"')]),s._v(">")]),s._v("\n      {{ n }}\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("右侧插槽")]),s._v(" "),a("p",[s._v("配置右侧内容。例如：")]),s._v(" "),a("sample-box",[a("template",{slot:"raw"},[[a("woo-cell-group",[a("woo-cell",{scopedSlots:s._u([{key:"sub",fn:function(){return[a("woo-switch",{model:{value:s.value,callback:function(t){s.value=t},expression:"value"}})]},proxy:!0}])},[s._v("\n      switch\n      ")]),s._v(" "),a("woo-cell",{attrs:{arr:""},scopedSlots:s._u([{key:"sub",fn:function(){return[s._v("\n        100M\n      ")]},proxy:!0}])},[s._v("\n      arr + word\n      ")]),s._v(" "),a("woo-cell",{scopedSlots:s._u([{key:"sub",fn:function(){return[a("woo-badge",{attrs:{dot:""}})]},proxy:!0}])},[s._v("\n      badge\n      ")])],1)]],2),s._v(" "),a("template",{slot:"meta"},[a("p",[s._v("在 "),a("code",[s._v("slot")]),s._v(" 为 "),a("code",[s._v("sub")]),s._v(" 的插槽中自定义内容。")])]),s._v(" "),a("template",{slot:"code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(">")]),s._v("\n      switch\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-slot:sub")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"value"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-switch")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("arr")]),s._v(">")]),s._v("\n      arr + word\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-slot:sub")]),s._v(">")]),s._v("\n        100M\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(">")]),s._v("\n      badge\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-slot:sub")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-badge")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dot")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-badge")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("woo-cell-group")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      };\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2),s._v(" "),a("h3",[s._v("属性")]),s._v(" "),a("h4",[s._v("woo-cell-group")]),s._v(" "),s._m(0),a("h4",[s._v("woo-cell")]),s._v(" "),s._m(1)],1)};l._withStripped=!0;var e={render:l,staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"table-wrap"},[t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[this._v("参数")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("类型")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("可选值")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("默认值")])])]),this._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("no-edge")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("是否有上下边框")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Boolean")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("true/false")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("false")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("border-color")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("边框色")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("String")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"table-wrap"},[t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[this._v("参数")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("说明")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("类型")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("可选值")]),this._v(" "),t("th",{staticStyle:{"text-align":"left"}},[this._v("默认值")])])]),this._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("arr")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("是否有箭头")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Boolean")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("true/false")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("false")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("border-color")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("边框色")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("String")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("gap-start")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("分割线左间距")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Number")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])]),this._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[this._v("gap-end")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("分割线右间距")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("Number")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")]),this._v(" "),t("td",{staticStyle:{"text-align":"left"}},[this._v("—")])])])])])}]};t.a=e}});