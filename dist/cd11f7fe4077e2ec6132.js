(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{284:function(t,e,o){var content=o(302);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("34239cb0",content,!0,{sourceMap:!1})},287:function(t,e,o){var content=o(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("1f92e638",content,!0,{sourceMap:!1})},301:function(t,e,o){"use strict";var n=o(284);o.n(n).a},302:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,".viewport-container[data-v-5e9fd169]{width:500px;height:500px;background:#f5f5f5;position:relative}.viewport-container .viewport[data-v-5e9fd169]{left:50%;top:50%;transform:translate(-50%,-50%);position:absolute;background:#fff}.viewport-container .viewport .shape[data-v-5e9fd169]{background:red;opacity:.5;width:100%;height:100%;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}",""])},334:function(t,e,o){"use strict";var n=o(287);o.n(n).a},335:function(t,e,o){(t.exports=o(12)(!1)).push([t.i,".device-dimention[data-v-7462406b]{background:#f5f5f5}.device-dimention-input[data-v-7462406b],.device-dimention-x[data-v-7462406b]{text-align:center;width:100%}.device-dimention-x[data-v-7462406b]{display:inline-block}",""])},342:function(t,e,o){"use strict";o.r(e);o(161),o(20);var n={props:{deviceWidth:Number,deviceHeight:Number},computed:{pixelScale:function(){return this.deviceWidth>=this.deviceHeight?500/this.deviceWidth:500/this.deviceHeight},clipPaths:function(){var t=this;return this.$store.state.shapes.map(function(e){return t.scalePoints(e.points,t.pixelScale)})},height:function(){return this.deviceWidth>=this.deviceHeight?this.maxWidth*(this.deviceHeight/this.deviceWidth):this.maxHeight},width:function(){return this.deviceWidth>=this.deviceHeight?this.maxWidth:this.maxHeight*(this.deviceWidth/this.deviceHeight)}},data:function(){return{maxWidth:100,maxHeight:100}},methods:{scalePoints:function(t,e){return t.map(function(t){return[Math.round(t[0]*e*100)/100,Math.round(t[1]*e*100)/100]}).map(function(t){return t.join("px ")+"px"}).join(", ")}}},r=(o(301),o(54)),l=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"viewport-container"},[e("div",{ref:"viewport",staticClass:"viewport",style:"width: "+this.width+"%; height: "+this.height+"%"},this._l(this.clipPaths,function(t){return e("div",{staticClass:"shape",style:"clip-path: polygon("+t+");"})}),0)])},[],!1,null,"5e9fd169",null).exports,c=o(303),d={created:function(){},methods:{newShape:function(t){this.$store.commit("newShape")},editShape:function(t){this.$store.commit("editShape",{shapeUUID:t})},deleteShape:function(t){this.$store.commit("deleteShape",{shapeUUID:t})}},computed:{shapes:function(){return this.$store.state.shapes}},data:function(){return{icons:{mdiAccount:c.a,mdiPencil:c.e,mdiEye:c.c,mdiEyeOff:c.d,mdiShareVariant:c.f,mdiDelete:c.b}}}},v=o(69),h=o.n(v),m=o(281),f=o(288),x=o(265),_=o(290),w=o(285),S=o(293),y=o(282),V=o(286),D=o(27),k=o(109),$=Object(r.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{ref:"viewport",staticClass:"viewport"},[o("v-toolbar",{staticClass:"shapes-header",attrs:{extended:"","extension-height":"10"},scopedSlots:t._u([{key:"extension",fn:function(){return[o("v-btn",{attrs:{color:"pink",dark:"",small:"",absolute:"",bottom:"",left:"",fab:""},on:{click:t.newShape}},[o("v-icon",[t._v("mdi-plus")])],1)]},proxy:!0}])},[o("v-toolbar-title",[t._v("Shapes")])],1),t._v(" "),o("v-list",{staticClass:"mt-2"},[0===t.shapes.length?o("v-list-item",[o("span",[t._v("No shapes: "),o("a",{attrs:{href:"#"},on:{click:t.newShape}},[t._v("add a new shape")])])]):t._e(),t._v(" "),t._l(t.shapes,function(e){return o("v-list-item",{key:e.uuid},[o("v-list-item-avatar",[o("svg",{attrs:{width:"100%",height:"100%",viewBox:e.viewport.x1+" "+e.viewport.y1+" "+e.viewport.x2+" "+e.viewport.y2}},[o("path",{attrs:{d:e.path}})])]),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1),t._v(" "),o("v-list-item-icon",[o("v-btn",{attrs:{icon:"",small:"",color:"blue"}},[o("v-icon",[t._v(t._s(t.icons.mdiEye))])],1),t._v(" "),o("v-btn",{attrs:{icon:"",small:"",color:"blue"},on:{click:function(o){return t.editShape(e.uuid)}}},[o("v-icon",[t._v(t._s(t.icons.mdiPencil))])],1),t._v(" "),o("v-btn",{attrs:{icon:"",small:"",color:"blue"},on:{click:function(o){return t.deleteShape(e.uuid)}}},[o("v-icon",[t._v(t._s(t.icons.mdiDelete))])],1)],1)],1)})],2)],1)},[],!1,null,"6793149d",null),C=$.exports;h()($,{VBtn:m.a,VCard:f.a,VIcon:x.a,VList:_.a,VListItem:w.a,VListItemAvatar:S.a,VListItemContent:y.a,VListItemIcon:V.a,VListItemTitle:y.b,VToolbar:D.a,VToolbarTitle:k.b});var O={methods:{closeDialog:function(){this.$store.commit("closeDialog")},addShape:function(){var t=this.newShape;this.$store.commit("addShape",{shape:t}),this.$store.commit("closeNewDialog")}},computed:{newDialog:function(){return this.$store.state.newDialog}},data:function(){return{newShape:{}}}},I=o(283),P=o(344),H=o(339),T=o(343),W=Object(r.a)(O,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.newShape?o("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.newDialog,callback:function(e){t.newDialog=e},expression:"newDialog"}},[o("v-card",{attrs:{tile:""}},[o("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeDialog}},[o("v-icon",[t._v("mdi-close")])],1),t._v(" "),o("v-toolbar-title",[t._v("Settings")]),t._v(" "),o("div",{staticClass:"flex-grow-1"}),t._v(" "),o("v-toolbar-items",[o("v-btn",{attrs:{dark:"",text:""},on:{click:t.addShape}},[t._v("Save")])],1)],1),t._v(" "),o("v-card-text",[o("v-list",{attrs:{"three-line":"",subheader:""}},[o("v-subheader",[t._v("Shape")]),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("v-text-field",{attrs:{color:"teal"},scopedSlots:t._u([{key:"label",fn:function(){return[o("div",[t._v("Name")])]},proxy:!0}],null,!1,4264995312),model:{value:t.newShape.name,callback:function(e){t.$set(t.newShape,"name",e)},expression:"newShape.name"}})],1)],1),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("v-text-field",{attrs:{color:"teal"},scopedSlots:t._u([{key:"label",fn:function(){return[o("div",[t._v("Path")])]},proxy:!0}],null,!1,427068058),model:{value:t.newShape.path,callback:function(e){t.$set(t.newShape,"path",e)},expression:"newShape.path"}})],1)],1)],1)],1),t._v(" "),o("div",{staticStyle:{flex:"1 1 auto"}})],1)],1):t._e()},[],!1,null,"069597ae",null),j=W.exports;h()(W,{VBtn:m.a,VCard:f.a,VCardText:I.a,VDialog:P.a,VIcon:x.a,VList:_.a,VListItem:w.a,VListItemContent:y.a,VSubheader:H.a,VTextField:T.a,VToolbar:D.a,VToolbarItems:k.a,VToolbarTitle:k.b});o(9),o(6),o(5),o(3),o(7);var L=o(2);function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable})),e.push.apply(e,o)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(source,!0).forEach(function(e){Object(L.a)(t,e,source[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(source).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))})}return t}var B={props:["shape"],methods:{closeDialog:function(){this.$store.commit("closeDialog")},updateShape:function(){var t=this.updatedShape;this.$store.commit("updateShape",{shape:t}),this.$store.commit("closeEditDialog")}},computed:{editDialog:function(){return this.$store.state.editDialog}},data:function(){return{updatedShape:N({},this.shape)}}},M=Object(r.a)(B,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[o("v-card",{attrs:{tile:""}},[o("v-toolbar",{attrs:{flat:"",dark:"",color:"primary"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeDialog}},[o("v-icon",[t._v("mdi-close")])],1),t._v(" "),o("v-toolbar-title",[t._v("Settings")]),t._v(" "),o("div",{staticClass:"flex-grow-1"}),t._v(" "),o("v-toolbar-items",[o("v-btn",{attrs:{dark:"",text:""},on:{click:t.updateShape}},[t._v("Save")])],1)],1),t._v(" "),o("v-card-text",[o("v-list",{attrs:{"three-line":"",subheader:""}},[o("v-subheader",[t._v("Shape")]),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("v-text-field",{attrs:{color:"teal"},scopedSlots:t._u([{key:"label",fn:function(){return[o("div",[t._v("Name")])]},proxy:!0}]),model:{value:t.updatedShape.name,callback:function(e){t.$set(t.updatedShape,"name",e)},expression:"updatedShape.name"}})],1)],1),t._v(" "),o("v-list-item",[o("v-list-item-content",[o("v-text-field",{attrs:{color:"teal"},scopedSlots:t._u([{key:"label",fn:function(){return[o("div",[t._v("Path")])]},proxy:!0}]),model:{value:t.updatedShape.path,callback:function(e){t.$set(t.updatedShape,"path",e)},expression:"updatedShape.path"}})],1)],1)],1)],1),t._v(" "),o("div",{staticStyle:{flex:"1 1 auto"}})],1)],1)},[],!1,null,"d55e00da",null),U=M.exports;h()(M,{VBtn:m.a,VCard:f.a,VCardText:I.a,VDialog:P.a,VIcon:x.a,VList:_.a,VListItem:w.a,VListItemContent:y.a,VSubheader:H.a,VTextField:T.a,VToolbar:D.a,VToolbarItems:k.a,VToolbarTitle:k.b});var F={components:{Viewport:l,ShapesList:C,NewDialog:j,EditDialog:U},computed:{deviceRatio:function(){return this.deviceWidth/this.deviceHeight},editDialogShape:function(){var t=this;return this.$store.state.shapes.find(function(e){return e.uuid===t.editDialogShapeId})},editDialogShapeId:function(){return this.$store.state.editDialogShapeId},editDialog:function(){return this.$store.state.editDialog},newDialog:function(){return this.$store.state.newDialog}},data:function(){return{deviceWidth:800,deviceHeight:1200}}},A=(o(334),o(299)),J=o(300),R=o(340),z=Object(r.a)(F,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:""}},[o("v-flex",{attrs:{xs12:"",sm9:"",md9:"","pa-2":""}},[o("v-card",[o("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[o("v-card-title",{attrs:{"primary-title":""}},[o("v-flex",{attrs:{xs3:"",sm3:"",md3:""}},[t._v("\n            Shapes preview\n          ")]),t._v(" "),o("v-flex",{attrs:{xs2:"",sm2:"",md2:""}},[o("v-row",{staticClass:"device-dimention"},[o("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.deviceWidth,expression:"deviceWidth"}],staticClass:"device-dimention-input",attrs:{type:"text"},domProps:{value:t.deviceWidth},on:{input:function(e){e.target.composing||(t.deviceWidth=e.target.value)}}})]),t._v(" "),o("v-flex",{attrs:{xs2:"",sm2:"",md2:""}},[o("span",{staticClass:"device-dimention-x"},[t._v("x")])]),t._v(" "),o("v-flex",{attrs:{xs5:"",sm5:"",md5:""}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.deviceHeight,expression:"deviceHeight"}],staticClass:"device-dimention-input",attrs:{type:"text"},domProps:{value:t.deviceHeight},on:{input:function(e){e.target.composing||(t.deviceHeight=e.target.value)}}})])],1)],1)],1)],1),t._v(" "),o("v-card-text",[o("v-flex",{attrs:{xs12:"",sm12:"",md12:""}},[o("viewport",{attrs:{deviceWidth:+t.deviceWidth,deviceHeight:+t.deviceHeight}})],1)],1)],1)],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm3:"",md3:"","pa-2":""}},[o("shapes-list")],1),t._v(" "),t.editDialog?o("edit-dialog",{attrs:{shape:t.editDialogShape}}):t._e(),t._v(" "),t.newDialog?o("new-dialog"):t._e()],1)},[],!1,null,"7462406b",null);e.default=z.exports;h()(z,{VCard:f.a,VCardText:I.a,VCardTitle:I.b,VFlex:A.a,VLayout:J.a,VRow:R.a})}}]);