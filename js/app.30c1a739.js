(function(t){function e(e){for(var n,i,c=e[0],s=e[1],u=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Post-it-VueJS/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"07a7":function(t,e,r){},1612:function(t,e,r){"use strict";var n=r("ca4a"),o=r.n(n);e["default"]=o.a},"228f":function(t,e,r){t.exports=r.p+"img/more.90a93ace.png"},"25f8":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("router-view")],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-dark bg-dark nav"},[t._v(" Post it App "),n("img",{attrs:{src:r("9dfe"),width:"50",height:"50",alt:"dot"}})])}]},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("a026"),o=r("612c"),a=r("2f62"),i=r("8c4f"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"categories d-flex flex-wrap"},[t._l(t.filterCategories(),(function(e){return n("div",{key:e.id},[n("div",{staticClass:"card text bg-warning mb-3 item",staticStyle:{"max-width":"25rem"}},[n("div",{staticClass:"card-header header d-flex justify-content-between"},[n("div",{staticClass:"title"},[t._v(" "+t._s(e.title)+" ")]),n("router-link",{attrs:{to:"/"+e._id}},[n("img",{staticClass:"more",attrs:{src:r("228f"),width:"25",height:"25",alt:"dot"}})])],1),n("div",{staticClass:"card-body card-style"},[t._l(e.content,(function(e){return n("div",{key:e.id,staticClass:"subcard"},[t._v(" "+t._s(e)+" ")])})),n("div",{attrs:{id:"add-post-it"}},[n("AddNote",{attrs:{category:e}})],1)],2)])])})),n("div",{staticClass:"addNote input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.titleCategory,expression:"titleCategory"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Add new category","aria-describedby":"basic-addon2"},domProps:{value:t.titleCategory},on:{input:function(e){e.target.composing||(t.titleCategory=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:t.addtitleCategory}},[t._v(" + Add Category ")])])]),t.showModal?n("div",{staticClass:"modal-route"},[n("div",{staticClass:"modal-content"},[n("router-view")],1)]):t._e()],2)},s=[],u=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("bd86")),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"addNote input-group mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.newPostit,expression:"newPostit"}],staticClass:"form-control",attrs:{placeholder:"Add new task"},domProps:{value:t.newPostit},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.onSubmit(t.getNote(t.category._id))},input:function(e){e.target.composing||(t.newPostit=e.target.value)}}})])},d=[];function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var g={name:"AddNote",data:function(){return{newPostit:""}},props:["category"],methods:p(p({},Object(a["b"])(["addNote"])),{},{onSubmit:function(t){var e=t.content;e.push(this.newPostit);var r={id:t._id,title:t.title,content:e};this.addNote(r),this.newPostit=""}}),computed:Object(a["c"])(["getNote"],["getAllCategories"])},b=g,y=r("2877"),v=Object(y["a"])(b,l,d,!1,null,"70fc9c32",null),m=v.exports;function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={watch:{$route:{immediate:!0,handler:function(t){this.showModal=t.meta&&t.meta.showModal}}},components:{AddNote:m},data:function(){return{showModal:!1,newPostit:null,titleCategory:""}},methods:w(w(w({},Object(a["b"])(["addCategory"])),Object(a["b"])(["setCategories"])),{},{addtitleCategory:function(t){t.preventDefault(),this.titleCategory&&(this.addCategory(this.titleCategory),this.titleCategory="")},filterCategories:function(){for(var t in this.getAllCategories)for(var e in null==this.getAllCategories[t].title&&(this.getAllCategories[t].title="<invalid title>"),this.getAllCategories[t].content)null==this.getAllCategories[t].content[e]&&(this.getAllCategories[t].content[e]="<invalid note>");return this.getAllCategories}}),computed:Object(a["c"])(["getAllCategories"]),created:function(){this.setCategories()}},j=O,C=(r("c751"),Object(y["a"])(j,c,s,!1,null,null,null)),P=C.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"note-info"},[r("router-link",{attrs:{to:"/"}},[t._v("X")]),r("h2",{staticClass:"d-flex justify-content-center"},[t._v(" "+t._s(t.getNote(t.categoryId).title)+" ")]),t._l(t.getNote(t.categoryId).content,(function(e,n){return r("div",{key:e.id},[r("div",{staticClass:"item d-flex justify-content-between align-items-center"},[r("input",{staticStyle:{"font-size":"1.5rem"},attrs:{readonly:"readonly"},domProps:{value:e}}),r("button",{staticClass:"btn btn-sm btn-outline-danger",attrs:{type:"button"},on:{click:function(e){t.onClick(t.getNote(t.categoryId),n)}}},[t._v(" Delete note ")])])])})),r("router-link",{attrs:{to:"/"}},[r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteMyCategory(t.categoryId)}}},[t._v(" Delete category ")])]),r("router-view")],2)},x=[];function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){Object(u["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var S={props:["categoryId"],data:function(){return{title:"",newNote:""}},methods:N(N(N({},Object(a["b"])(["deleteCategory"])),{},{deleteMyCategory:function(t){this.deleteCategory(t)}},Object(a["b"])(["editNote"])),{},{onClick:function(t,e){var r=t.content;r.splice(e,1);var n={id:t._id,title:t.title,content:r,index:e};this.editNote(n)}}),computed:Object(a["c"])(["getNote"],["getAllCategories"])},M=S,A=(r("edea"),Object(y["a"])(M,_,x,!1,null,"2b7cc762",null)),D=A.exports;n["a"].use(i["a"]),n["a"].use(a["a"]);var E=new i["a"]({routes:[{path:"/",component:P,children:[{meta:{showModal:!0},path:":categoryId",component:D,props:!0}]}]}),R=(r("54ba"),r("96cf"),r("3b8d")),I=r("bc3a"),$=r.n(I),J={categories:[],note:{}},T={getAllCategories:function(t){return t.categories},getNote:function(t){return function(e){for(var r in t.categories)if(t.categories[r]._id===e)return t.categories[r]}}},z={setCategories:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,$.a.get("http://postit.wac.under-wolf.eu/notes");case 3:n=t.sent,r("setMyCategories",n.data.notes);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),addCategory:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e,r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,$.a.post("http://postit.wac.under-wolf.eu/notes",{title:r,content:[]});case 3:return o=t.sent,t.next=6,$.a.get("http://postit.wac.under-wolf.eu/notes/".concat(o.data.note_id));case 6:o=t.sent,n("addMyCategory",o.data.note);case 8:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),deleteCategory:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,$.a.delete("http://postit.wac.under-wolf.eu/notes/".concat(r));case 3:n("deteleMyCategory",r);case 4:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),editNote:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,$.a.put("http://postit.wac.under-wolf.eu/notes/".concat(r.id),r);case 3:n("editMyNote",r);case 4:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}(),addNote:function(){var t=Object(R["a"])(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,$.a.put("http://postit.wac.under-wolf.eu/notes/".concat(r.id),r);case 3:n("addMyNote",r);case 4:case"end":return t.stop()}}),t)})));function e(e,r){return t.apply(this,arguments)}return e}()},V={setMyCategories:function(t,e){t.categories=e},addMyCategory:function(t,e){return t.categories.push(e)},deteleMyCategory:function(t,e){return t.categories=t.categories.filter((function(t){return t._id!==e}))},editMyNote:function(t,e){return"object"===e&&null!==e},addMyNote:function(t){return"object"===t&&null!==t}},X={state:J,getters:T,actions:z,mutations:V};n["a"].use(a["a"]);var q=new a["a"].Store({name:"store",modules:{postit:X},state:{version:""},mutations:{initialiseStore:function(t){localStorage.getItem("store")&&this.replaceState(Object.assign(t,JSON.parse(localStorage.getItem("store"))))}}});n["a"].config.productionTip=!1,new n["a"]({router:E,store:q,beforeCreate:function(){this.$store.commit("initialiseStore")},render:function(t){return t(o["default"])}}).$mount("#app"),q.subscribe((function(t,e){localStorage.setItem("store",JSON.stringify(e))}))},"612c":function(t,e,r){"use strict";var n=r("25f8"),o=r("1612"),a=(r("c796"),r("2877")),i=Object(a["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"8ad7":function(t,e,r){},"915b":function(t,e,r){},"9dfe":function(t,e,r){t.exports=r.p+"img/post-it.c65c4bff.png"},c751:function(t,e,r){"use strict";r("8ad7")},c796:function(t,e,r){"use strict";r("07a7")},ca4a:function(t,e){},edea:function(t,e,r){"use strict";r("915b")}});
//# sourceMappingURL=app.30c1a739.js.map