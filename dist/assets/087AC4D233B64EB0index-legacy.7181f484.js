/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},o=u.iterator||"@@iterator",i=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(t){f=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,u=Object.create(a.prototype),o=new O(r||[]);return l(u,"_invoke",{value:V(e,n,o)}),u}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=d;var p="suspendedStart",v="suspendedYield",m="executing",y="completed",h={};function g(){}function b(){}function w(){}var _={};f(_,o,(function(){return this}));var B=Object.getPrototypeOf,k=B&&B(B(L([])));k&&k!==r&&a.call(k,o)&&(_=k);var E=w.prototype=g.prototype=Object.create(_);function j(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(r,l,u,o){var i=s(e[r],e,l);if("throw"!==i.type){var c=i.arg,f=c.value;return f&&"object"==typeof f&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,u,o)}),(function(e){n("throw",e,u,o)})):t.resolve(f).then((function(e){c.value=e,u(c)}),(function(e){return n("throw",e,u,o)}))}o(i.arg)}var r;l(this,"_invoke",{value:function(e,a){function l(){return new t((function(t,r){n(e,a,t,r)}))}return r=r?r.then(l,l):l()}})}function V(e,n,r){var a=p;return function(l,u){if(a===m)throw Error("Generator is already running");if(a===y){if("throw"===l)throw u;return{value:t,done:!0}}for(r.method=l,r.arg=u;;){var o=r.delegate;if(o){var i=C(o,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=m;var c=s(e,n,r);if("normal"===c.type){if(a=r.done?y:v,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=y,r.method="throw",r.arg=c.arg)}}}function C(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var l=s(a,e.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,h;var u=l.arg;return u?u.done?(n[e.resultName]=u.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,h):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function L(e){if(e||""===e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return l.next=l}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=w,l(E,"constructor",{value:w,configurable:!0}),l(w,"constructor",{value:b,configurable:!0}),b.displayName=f(w,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,f(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return{__await:e}},j(x.prototype),f(x.prototype,i,(function(){return this})),n.AsyncIterator=x,n.async=function(e,t,r,a,l){void 0===l&&(l=Promise);var u=new x(d(e,t,r,a),l);return n.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},j(E),f(E,c,"Generator"),f(E,o,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return o.type="throw",o.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var l=this.tryEntries.length-1;l>=0;--l){var u=this.tryEntries[l],o=u.completion;if("root"===u.tryLoc)return r("end");if(u.tryLoc<=this.prev){var i=a.call(u,"catchLoc"),c=a.call(u,"finallyLoc");if(i&&c){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return r(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return r(u.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var u=l?l.completion:{};return u.type=e,u.arg=t,l?(this.method="next",this.next=l.finallyLoc,h):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),h}},n}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n,r,a,l,u){try{var o=e[l](u),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,l){var u=e.apply(t,n);function o(e){a(u,r,l,o,i,"next",e)}function i(e){a(u,r,l,o,i,"throw",e)}o(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.60a78b40.js","./087AC4D233B64EB0drawer-legacy.1ee8626a.js","./087AC4D233B64EB0overlay-legacy.30738a26.js","./087AC4D233B64EB0col-legacy.34fb0626.js","./087AC4D233B64EB0input-legacy.12c190df.js","./087AC4D233B64EB0input-number-legacy.5f26c79b.js","./087AC4D233B64EB0pagination-legacy.6a631520.js","./087AC4D233B64EB0tag-legacy.5e0686c8.js","./087AC4D233B64EB0select-legacy.6d03c293.js","./087AC4D233B64EB0scrollbar-legacy.0817fabf.js","./087AC4D233B64EB0popper-legacy.558ecc70.js","./087AC4D233B64EB0table-column-legacy.89cf370d.js","./087AC4D233B64EB0checkbox-legacy.0cf00473.js","./087AC4D233B64EB0tooltip-legacy.b3c86740.js","./087AC4D233B64EB0link-legacy.c6ba8429.js","./087AC4D233B64EB0form-item-legacy.ea84400e.js","./087AC4D233B64EB0button-legacy.fa07c5be.js","./087AC4D233B64EB0tack-legacy.26eef020.js","./087AC4D233B64EB0index-legacy.cc3fdaf3.js","./087AC4D233B64EB0index-legacy.62d65aa9.js","./087AC4D233B64EB0index-legacy.078648e7.js","./087AC4D233B64EB0index-legacy.16843866.js","./087AC4D233B64EB0index-legacy.bedc16ef.js","./087AC4D233B64EB0index-legacy.59ac3308.js","./087AC4D233B64EB0_baseIteratee-legacy.4e82855a.js","./087AC4D233B64EB0_Uint8Array-legacy.50fb1dd4.js","./087AC4D233B64EB0isEqual-legacy.ebfc9113.js","./087AC4D233B64EB0debounce-legacy.b09e9c7e.js","./087AC4D233B64EB0index-legacy.2cfa0458.js","./087AC4D233B64EB0_initCloneObject-legacy.685321ef.js","./087AC4D233B64EB0castArray-legacy.9d5c87d5.js","./087AC4D233B64EB0_baseClone-legacy.2f3ffcc2.js","./087AC4D233B64EB0index-legacy.2a022eb8.js","./087AC4D233B64EB0index-legacy.4d9f9713.js","./087AC4D233B64EB0token-legacy.91fd35f2.js","./087AC4D233B64EB0strings-legacy.6c9fe27d.js","./087AC4D233B64EB0use-dialog-legacy.9ffafc73.js"],(function(t,r){"use strict";var a,u,o,i,c,f,d,s,p,v,m,y,h,g,b,w,_,B,k,E,j,x,V,C,D,A,O,L,U,P,S,z;return{setters:[function(e){a=e._,u=e.u,o=e.a,i=e.o,c=e.c,f=e.b,d=e.d,s=e.w,p=e.g,v=e.t,m=e.h,y=e.e,h=e.j,g=e.au,b=e.l,w=e.E,_=e.p,B=e.i},null,null,function(e){k=e.E,E=e.a},null,function(e){j=e.E},null,null,null,null,null,function(e){x=e.E,V=e.a},null,null,function(e){C=e.E},function(e){D=e.a,A=e.E},null,function(e){O=e.g,L=e.u,U=e.c,P=e.l},function(e){S=e.E},function(e){z=e.E},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".warning[data-v-8d19a859]{color:#dc143c}.el-input-number[data-v-8d19a859]{width:50%}\n",document.head.appendChild(r);var N=function(e){return _("data-v-8d19a859"),e=e(),B(),e},T={class:"gva-search-box"},F={class:"gva-table-box"},G={class:"gva-btn-list"},I={class:"gva-pagination"},q={class:"flex justify-between items-center"},J={class:"text-lg"},Y=N((function(){return f("div",{style:{padding:"0 0 20px 40px",color:"black","font-size":"16px"}}," 模版 ",-1)})),K=N((function(){return f("div",{style:{padding:"0 0 20px 40px",color:"black","font-size":"16px"}}," 奖励 ",-1)})),M=N((function(){return f("div",{style:{padding:"0 0 20px 40px",color:"black","font-size":"16px"}}," 解锁 ",-1)})),Q=Object.assign({name:"tack"},{__name:"index",setup:function(t){var r=u(),a=o([]),_=o({id:0,before:0,desc:"",complete:[{type:0,value:0,code:"",game:"",mode:"",limit:0,initialize:"",value2:0}],award:[{type:0,id:0,code:"",num:0}],unlock:[{type:0,level:0}],tag:""}),B=o(""),N=o({id:[{required:!0,message:"请输入id",trigger:"blur"}],desc:[{required:!0,message:"请输入desc",trigger:"blur"}],complete:[{required:!0,message:"请选择类型",trigger:"blur"}],award:[{required:!0,message:"请选择类型",trigger:"blur"}]}),Q=o(1),R=o(0),H=o(10),W=o([]),X=o({}),Z=function(){X.value={}},$=function(){Q.value=1,H.value=10,ne()},ee=function(e){H.value=e,ne()},te=function(e){Q.value=e,ne()},ne=function(){var t=l(e().mark((function t(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(n({page:Q.value,pageSize:H.value},X.value));case 2:0===(r=e.sent).code&&(W.value=r.data.list,R.value=r.data.total,Q.value=r.data.page,H.value=r.data.pageSize);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();ne();var re=function(e){a.value=e},ae=o(null),le=o("新增"),ue=o(!1),oe=function(e){switch(e){case"add":le.value="新增";break;case"edit":le.value="编辑"}B.value=e,ue.value=!0},ie=function(){ae.value.resetFields(),_.value={id:0,before:0,desc:"",complete:[{type:0,value:0,code:"",game:"",mode:"",limit:0,initialize:"",value2:0}],award:[{type:0,id:0,code:"",num:0}],unlock:[{type:0,level:0}],tag:""},ue.value=!1},ce=function(){var t=l(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=JSON.parse(JSON.stringify(n)),_.value=r,oe("edit");case 3:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),fe=function(){var t=l(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae.value.validate(function(){var t=l(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=20;break}e.t0=B.value,e.next="add"===e.t0?4:"edit"===e.t0?11:18;break;case 4:return e.next=6,U(_.value);case 6:return 0===e.sent.code&&h({type:"success",message:"添加成功",showClose:!0}),ne(),ie(),e.abrupt("break",20);case 11:return e.next=13,L(_.value);case 13:return 0===e.sent.code&&h({type:"success",message:"编辑成功",showClose:!0}),ne(),ie(),e.abrupt("break",20);case 18:return h({type:"error",message:"未知操作",showClose:!0}),e.abrupt("break",20);case 20:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),de=function(){var t=l(e().mark((function t(n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g.confirm("此操作将永久删除任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(l(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({id:n.id});case 2:0===e.sent.code&&(h({type:"success",message:"删除成功!"}),ne());case 4:case"end":return e.stop()}}),t)}))));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(e,t){var n=b,a=D,l=w,u=A,o=x,h=C,g=V,O=S,L=j,U=k,P=E,ne=z;return i(),c("div",null,[f("div",T,[d(u,{ref:"searchForm",inline:!0,model:X.value},{default:s((function(){return[d(a,{label:"ID"},{default:s((function(){return[d(n,{modelValue:X.value.id,"onUpdate:modelValue":t[0]||(t[0]=function(e){return X.value.id=e}),placeholder:"ID"},null,8,["modelValue"])]})),_:1}),d(a,{label:"任务名"},{default:s((function(){return[d(n,{modelValue:X.value.key,"onUpdate:modelValue":t[1]||(t[1]=function(e){return X.value.key=e}),placeholder:"任务名"},null,8,["modelValue"])]})),_:1}),d(a,null,{default:s((function(){return[d(l,{type:"primary",icon:"search",onClick:$},{default:s((function(){return[p(" 查询 ")]})),_:1}),d(l,{icon:"refresh",onClick:Z},{default:s((function(){return[p(" 重置 ")]})),_:1})]})),_:1})]})),_:1},8,["model"])]),f("div",F,[f("div",G,[d(l,{type:"primary",icon:"plus",onClick:t[2]||(t[2]=function(e){return oe("add")})},{default:s((function(){return[p(" 新增 ")]})),_:1})]),d(g,{border:"",data:W.value,onSortChange:e.sortChange,onSelectionChange:re},{default:s((function(){return[d(o,{type:"selection",width:"60"}),d(o,{align:"center","min-width":"90",label:"id",prop:"id"},{default:s((function(e){return[d(h,{type:"primary",onClick:function(t){return n=e.row.id,(a={}).id=n,void r.push({name:"taskDetails",query:a});var n,a}},{default:s((function(){return[p(v(e.row.id),1)]})),_:2},1032,["onClick"])]})),_:1}),d(o,{align:"center",label:"desc","min-width":"150",prop:"desc"}),d(o,{align:"center",label:"模版","min-width":"170",prop:"complete"},{default:s((function(e){return[f("div",null,v(e.row.complete),1)]})),_:1}),d(o,{align:"center",label:"奖励","min-width":"200",prop:"award"},{default:s((function(e){return[f("div",null,v(e.row.award),1)]})),_:1}),d(o,{align:"center",label:"unlock","min-width":"150",prop:"unlock"},{default:s((function(e){return[f("div",null,v(e.row.unlock),1)]})),_:1}),d(o,{align:"center",label:"标签","min-width":"150",prop:"tag"}),d(o,{align:"center",label:"before","min-width":"150",prop:"before"}),d(o,{align:"center",fixed:"right",label:"操作",width:"200"},{default:s((function(e){return[d(l,{icon:"edit",type:"primary",link:"",onClick:function(t){return ce(e.row)}},{default:s((function(){return[p(" 编辑 ")]})),_:2},1032,["onClick"]),d(l,{icon:"delete",type:"primary",link:"",onClick:function(t){return de(e.row)}},{default:s((function(){return[p(" 删除 ")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data","onSortChange"]),f("div",I,[d(O,{"current-page":Q.value,"page-size":H.value,"page-sizes":[10,30,50,100],total:R.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:te,onSizeChange:ee},null,8,["current-page","page-size","total"])])]),ue.value?(i(),m(ne,{key:0,modelValue:ue.value,"onUpdate:modelValue":t[21]||(t[21]=function(e){return ue.value=e}),size:"60%","before-close":ie,"show-close":!1},{header:s((function(){return[f("div",q,[f("span",J,v(le.value),1),f("div",null,[d(l,{onClick:ie},{default:s((function(){return[p(" 取 消 ")]})),_:1}),d(l,{type:"primary",onClick:fe},{default:s((function(){return[p(" 确 定 ")]})),_:1})])])]})),default:s((function(){return[d(u,{class:"myForm",ref_key:"apiForm",ref:ae,model:_.value,rules:N.value,"label-width":"80px"},{default:s((function(){return[d(P,{class:"w-full"},{default:s((function(){return[d(U,{span:12},{default:s((function(){return[d(a,{label:"ID",prop:"id"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.id,"onUpdate:modelValue":t[3]||(t[3]=function(e){return _.value.id=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),d(P,{class:"w-full"},{default:s((function(){return[d(U,{span:12},{default:s((function(){return[d(a,{label:"before",prop:"before"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.before,"onUpdate:modelValue":t[4]||(t[4]=function(e){return _.value.before=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),d(a,{label:"desc",prop:"desc"},{default:s((function(){return[d(n,{modelValue:_.value.desc,"onUpdate:modelValue":t[5]||(t[5]=function(e){return _.value.desc=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),Y,d(P,{class:"w-full"},{default:s((function(){return[_.value.complete[0].type||"add"===B.value?(i(),m(U,{key:0,span:12},{default:s((function(){return[d(a,{label:"type",prop:"complete"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.complete[0].type,"onUpdate:modelValue":t[6]||(t[6]=function(e){return _.value.complete[0].type=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.complete[0].value||"add"===B.value?(i(),m(U,{key:1,span:12},{default:s((function(){return[d(a,{label:"value"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.complete[0].value,"onUpdate:modelValue":t[7]||(t[7]=function(e){return _.value.complete[0].value=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.complete[0].code||"add"===B.value?(i(),m(U,{key:2,span:12},{default:s((function(){return[d(a,{label:"code"},{default:s((function(){return[d(n,{modelValue:_.value.complete[0].code,"onUpdate:modelValue":t[8]||(t[8]=function(e){return _.value.complete[0].code=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.complete[0].game?(i(),m(U,{key:3,span:12},{default:s((function(){return[d(a,{label:"game"},{default:s((function(){return[d(n,{modelValue:_.value.complete[0].game,"onUpdate:modelValue":t[9]||(t[9]=function(e){return _.value.complete[0].game=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.complete[0].mode||"add"===B.value?(i(),m(U,{key:4,span:12},{default:s((function(){return[d(a,{label:"mode"},{default:s((function(){return[d(n,{modelValue:_.value.complete[0].mode,"onUpdate:modelValue":t[10]||(t[10]=function(e){return _.value.complete[0].mode=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.complete[0].limit||"add"===B.value?(i(),m(U,{key:5,span:12},{default:s((function(){return[d(a,{label:"limit"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.complete[0].limit,"onUpdate:modelValue":t[11]||(t[11]=function(e){return _.value.complete[0].limit=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.complete[0].initialize||"add"===B.value?(i(),m(U,{key:6,span:12},{default:s((function(){return[d(a,{label:"initialize"},{default:s((function(){return[d(n,{modelValue:_.value.complete[0].initialize,"onUpdate:modelValue":t[12]||(t[12]=function(e){return _.value.complete[0].initialize=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.complete[0].value2||"add"===B.value?(i(),m(U,{key:7,span:12},{default:s((function(){return[d(a,{label:"value2"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.complete[0].value2,"onUpdate:modelValue":t[13]||(t[13]=function(e){return _.value.complete[0].value2=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0)]})),_:1}),K,d(P,{class:"w-full"},{default:s((function(){return[_.value.award[0].type||"add"===B.value?(i(),m(U,{key:0,span:12},{default:s((function(){return[d(a,{label:"type",prop:"award"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.award[0].type,"onUpdate:modelValue":t[14]||(t[14]=function(e){return _.value.award[0].type=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.award[0].id||"add"===B.value?(i(),m(U,{key:1,span:12},{default:s((function(){return[d(a,{label:"id"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.award[0].id,"onUpdate:modelValue":t[15]||(t[15]=function(e){return _.value.award[0].id=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.award[0].code||"add"===B.value?(i(),m(U,{key:2,span:12},{default:s((function(){return[d(a,{label:"code"},{default:s((function(){return[d(n,{min:0,modelValue:_.value.award[0].code,"onUpdate:modelValue":t[16]||(t[16]=function(e){return _.value.award[0].code=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.award[0].num||"add"===B.value?(i(),m(U,{key:3,span:12},{default:s((function(){return[d(a,{label:"num"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.award[0].num,"onUpdate:modelValue":t[17]||(t[17]=function(e){return _.value.award[0].num=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0)]})),_:1}),M,d(P,{class:"w-full"},{default:s((function(){return[_.value.unlock[0].type||"add"===B.value?(i(),m(U,{key:0,span:12},{default:s((function(){return[d(a,{label:"type",prop:"unlock"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.unlock[0].type,"onUpdate:modelValue":t[18]||(t[18]=function(e){return _.value.unlock[0].type=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0),_.value.unlock[0].level||"add"===B.value?(i(),m(U,{key:1,span:12},{default:s((function(){return[d(a,{label:"level",prop:"unlock"},{default:s((function(){return[d(L,{min:0,modelValue:_.value.unlock[0].level,"onUpdate:modelValue":t[19]||(t[19]=function(e){return _.value.unlock[0].level=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})):y("",!0)]})),_:1}),d(a,{label:"标签",prop:"tag"},{default:s((function(){return[d(n,{modelValue:_.value.tag,"onUpdate:modelValue":t[20]||(t[20]=function(e){return _.value.tag=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"])):y("",!0)])}}});t("default",a(Q,[["__scopeId","data-v-8d19a859"]]))}}}))}();
