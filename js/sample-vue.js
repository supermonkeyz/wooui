webpackJsonp([22],{360:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(416),s=e(417),a=!1,i=function(t){a||e(414)},r=e(2)(o.a,s.a,i,null,null);r.options.__file="site/views/sample.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] sample.vue: functional components are not supported with templates, they should use render functions."),n.default=r.exports},414:function(t,n,e){var o=e(415);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(1)("30e06e80",o,!1)},415:function(t,n,e){(t.exports=e(0)(!1)).push([t.i,"\n.sample{\n  margin:0 -0.75rem;\n}\n.sample-panel{\n  margin-top:0.75rem;\n  padding:0.625rem;\n}\n.fix-ios{\n  display:-webkit-box;\n  display:-ms-flexbox;\n  display:flex;\n}\n.sample-ctrl{\n  width:100%;\n}\n.items{\n  font-size:0.875rem;\n  margin-left:0.625rem;\n}\n.items__bd{\n    font-size:0.75rem;\n    margin-top:0.25rem;\n    color:#636363;\n}\n.items__ft{\n    font-size:0.75rem;\n    margin-top:0.25rem;\n    color:#939393;\n}\n.items__ft a{\n      color:#507daf;\n      text-decoration:none;\n}\n.sample-an-enter, .sample-an-leave-to{\n    -webkit-transform:translate3d(-100%, 0, 0);\n            transform:translate3d(-100%, 0, 0);\n    opacity:0;\n}\n.sample-an-enter-active, .sample-an-leave-active{\n    -webkit-transition:all 0.5s ease;\n    transition:all 0.5s ease;\n}\n.img-box{\n  max-width:12.5rem;\n  margin:auto;\n}\n.button-box{\n  padding:0.75rem;\n}\n",""])},416:function(t,n,e){"use strict";n.a={data:function(){return{value:!1,loading:!1,show:!1,items:["关注","热门","榜单"]}},computed:{icon:function(){return this.value?"check":"add"},type:function(){return this.value?"default":"primary"}},methods:{change:function(t){console.log(t)},showToast:function(){var t=this;this.$Bus.$emit("wooToast",{type:"success",message:"成功"},function(){t.changeState()})},showActionSheet:function(){var t=this;this.$Bus.$emit("wooAction",{title:this.value?"你不关注@青春的猴小野了？":"你将关注@青春的猴小野",btnConfirm:this.value?"不爱":"爱吗",action:function(){t.$Bus.$emit("wooAction",{action:function(){t.changeState()}})}})},changeState:function(){var t=this;this.value||(this.loading=!0),this.value=!this.value,setTimeout(function(){t.loading=!1},1e3)}}}},417:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"sample"},[e("woo-toast"),t._v(" "),e("woo-action-sheet"),t._v(" "),e("woo-frame",[e("woo-tab",{on:{change:t.change}},t._l(t.items,function(n,o){return e("woo-tab-item",{key:o,staticStyle:{height:"300px"},attrs:{title:n,cur:0===o}},[e("woo-panel",{staticClass:"sample-panel",attrs:{border:"top, bottom"}},[e("woo-box",[e("woo-avatar",{staticClass:"avatar-users",attrs:{verified:"vyellow",size:50,src:"//tva4.sinaimg.cn/crop.0.32.687.687.180/621ff2c2jw1em78i0mk5kj20j60y3117.jpg"}}),t._v(" "),e("div",{staticClass:"items"},[e("div",{staticClass:"items__hd"},[t._v("青春的猴小野-"+t._s(o))]),t._v(" "),e("div",{staticClass:"items__bd"},[t._v("\n                猴哥\n              ")]),t._v(" "),e("div",{staticClass:"items__ft"},[t._v("来自"),e("a",{attrs:{href:""}},[t._v("推荐的人")])])]),t._v(" "),e("woo-box-item",{staticClass:"fix-ios"},[e("woo-box",{staticClass:"sample-ctrl",attrs:{align:"center",justify:"end"}},[e("woo-button",{staticClass:"button",attrs:{fonticon:t.icon,kind:t.type,loading:t.loading},on:{click:t.showActionSheet}},[t._v("\n                  关注\n                ")])],1)],1)],1)],1)],1)}),1),t._v(" "),e("div",{staticClass:"button-box"},[e("woo-button",{attrs:{fluid:"",sort:"flat",kind:"primary",size:"L",round:"",gradient:["#FC0A46","#FD8063"]},on:{click:function(n){t.show=!0}}},[t._v("\n        确定\n      ")])],1),t._v(" "),e("woo-tool-bar",{attrs:{show:t.show}},[e("woo-tool-bar-item",[t._v("\n        操作1\n      ")]),t._v(" "),e("woo-tool-bar-split"),t._v(" "),e("woo-tool-bar-item",[t._v("\n        操作2\n      ")]),t._v(" "),e("woo-tool-bar-split"),t._v(" "),e("woo-tool-bar-item",[t._v("\n        操作3\n      ")])],1)],1)],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};n.a=s}});