/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var t,r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(t){s=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),u=new L(n||[]);return o(i,"_invoke",{value:k(e,r,u)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=f;var d="suspendedStart",h="suspendedYield",v="executing",y="completed",g={};function m(){}function b(){}function w(){}var B={};s(B,u,(function(){return this}));var E=Object.getPrototypeOf,j=E&&E(E(P([])));j&&j!==n&&a.call(j,u)&&(B=j);var x=w.prototype=m.prototype=Object.create(B);function C(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(n,o,i,u){var l=p(e[n],e,o);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,u)}),(function(e){r("throw",e,i,u)})):t.resolve(s).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,u)}))}u(l.arg)}var n;o(this,"_invoke",{value:function(e,a){function o(){return new t((function(t,n){r(e,a,t,n)}))}return n=n?n.then(o,o):o()}})}function k(e,r,n){var a=d;return function(o,i){if(a===v)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var u=n.delegate;if(u){var l=D(u,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===d)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=v;var c=p(e,r,n);if("normal"===c.type){if(a=n.done?y:h,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=y,n.method="throw",n.arg=c.arg)}}}function D(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,D(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=p(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[u];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return b.prototype=w,o(x,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,c,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},r.awrap=function(e){return{__await:e}},C(_.prototype),s(_.prototype,l,(function(){return this})),r.AsyncIterator=_,r.async=function(e,t,n,a,o){void 0===o&&(o=Promise);var i=new _(f(e,t,n,a),o);return r.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},C(x),s(x,c,"Generator"),s(x,u,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=P,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,a){return u.type="throw",u.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t,r,n,a,o,i){try{var u=e[o](i),l=u.value}catch(e){return void r(e)}u.done?t(l):Promise.resolve(l).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function u(e){a(i,n,o,u,l,"next",e)}function l(e){a(i,n,o,u,l,"throw",e)}u(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.60a78b40.js","./087AC4D233B64EB0drawer-legacy.1ee8626a.js","./087AC4D233B64EB0overlay-legacy.30738a26.js","./087AC4D233B64EB0input-legacy.12c190df.js","./087AC4D233B64EB0pagination-legacy.6a631520.js","./087AC4D233B64EB0tag-legacy.5e0686c8.js","./087AC4D233B64EB0select-legacy.6d03c293.js","./087AC4D233B64EB0scrollbar-legacy.0817fabf.js","./087AC4D233B64EB0popper-legacy.558ecc70.js","./087AC4D233B64EB0table-column-legacy.89cf370d.js","./087AC4D233B64EB0checkbox-legacy.0cf00473.js","./087AC4D233B64EB0tooltip-legacy.b3c86740.js","./087AC4D233B64EB0link-legacy.c6ba8429.js","./087AC4D233B64EB0form-item-legacy.ea84400e.js","./087AC4D233B64EB0button-legacy.fa07c5be.js","./087AC4D233B64EB0tack-legacy.26eef020.js","./087AC4D233B64EB0index-legacy.2a022eb8.js","./087AC4D233B64EB0index-legacy.cc3fdaf3.js","./087AC4D233B64EB0index-legacy.62d65aa9.js","./087AC4D233B64EB0index-legacy.16843866.js","./087AC4D233B64EB0index-legacy.bedc16ef.js","./087AC4D233B64EB0index-legacy.59ac3308.js","./087AC4D233B64EB0_baseIteratee-legacy.4e82855a.js","./087AC4D233B64EB0_Uint8Array-legacy.50fb1dd4.js","./087AC4D233B64EB0isEqual-legacy.ebfc9113.js","./087AC4D233B64EB0debounce-legacy.b09e9c7e.js","./087AC4D233B64EB0index-legacy.2cfa0458.js","./087AC4D233B64EB0_initCloneObject-legacy.685321ef.js","./087AC4D233B64EB0castArray-legacy.9d5c87d5.js","./087AC4D233B64EB0_baseClone-legacy.2f3ffcc2.js","./087AC4D233B64EB0index-legacy.4d9f9713.js","./087AC4D233B64EB0token-legacy.91fd35f2.js","./087AC4D233B64EB0strings-legacy.6c9fe27d.js","./087AC4D233B64EB0use-dialog-legacy.9ffafc73.js"],(function(t,n){"use strict";var a,i,u,l,c,s,f,p,d,h,v,y,g,m,b,w,B,E,j,x,C,_,k,D,A,O,L,P,S;return{setters:[function(e){a=e._,i=e.u,u=e.a,l=e.o,c=e.c,s=e.b,f=e.d,p=e.w,d=e.O,h=e.P,v=e.h,y=e.g,g=e.t,m=e.j,b=e.au,w=e.E,B=e.l},null,null,null,null,null,null,null,null,function(e){E=e.E,j=e.a},null,null,function(e){x=e.E},function(e){C=e.a,_=e.E},null,function(e){k=e.d,D=e.a,A=e.b},function(e){O=e.E,L=e.a},function(e){P=e.E},function(e){S=e.E},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".warning[data-v-244c1649]{color:#dc143c}\n",document.head.appendChild(n);var N={class:"gva-search-box"},T={class:"gva-table-box"},V={class:"gva-btn-list"},z={class:"gva-pagination"},F={class:"flex justify-between items-center"},G={class:"text-lg"},q=Object.assign({name:"dailyOrWeekly"},{__name:"index",setup:function(t){var n=i(),a=u([]),q=u({id:""}),I=u([{value:"daily",label:"日常任务"},{value:"weekly",label:"周常任务"}]),U=u(""),Y=u({id:[{required:!0,message:"请输入id",trigger:"blur"}],desc:[{required:!0,message:"请输入desc",trigger:"blur"}],complete:[{required:!0,message:"请选择请求方式",trigger:"blur"}],award:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}),K=u(1),M=u(0),Q=u(9999),R=u([]),W=u({type:"日常任务"}),H=function(){W.value={type:"日常任务"}},J=function(){K.value=1,Q.value=9999,$()},X=function(e){Q.value=e},Z=function(e){K.value=e},$=function(){var t=o(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"日常任务"==W.value.type&&(W.value.type="daily"),e.next=3,k(r({page:K.value,pageSize:Q.value},W.value));case 3:0===(n=e.sent).code&&(R.value=n.data,M.value=n.data.total,K.value=n.data.page,Q.value=n.data.pageSize);case 5:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();$();var ee=function(e){a.value=e},te=u(null),re=u("新增"),ne=u(!1),ae=function(){te.value.resetFields(),q.value={id:""},ne.value=!1},oe=function(){var t=o(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:te.value.validate(function(){var t=o(e().mark((function t(r){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=15;break}e.t0=U.value,e.next="add"===e.t0?4:13;break;case 4:return q.value.id=Number(q.value.id),q.value.type=W.value.type,e.next=8,D(q.value);case 8:return 0===(n=e.sent).code&&m({type:"success",message:n.msg,showClose:!0}),$(),ae(),e.abrupt("break",15);case 13:return m({type:"error",message:"未知操作",showClose:!0}),e.abrupt("break",15);case 15:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ie=function(){var t=o(e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b.confirm("此操作将永久删除任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(o(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({id:r.id,type:W.value.type});case 2:0===e.sent.code&&(m({type:"success",message:"删除成功!"}),$());case 4:case"end":return e.stop()}}),t)}))));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(e,t){var r=O,a=L,o=C,i=w,u=_,m=E,b=x,k=j,D=P,A=B,$=S;return l(),c("div",null,[s("div",N,[f(u,{ref:"searchForm",inline:!0,model:W.value},{default:p((function(){return[f(o,{label:"日/周"},{default:p((function(){return[f(a,{modelValue:W.value.type,"onUpdate:modelValue":t[0]||(t[0]=function(e){return W.value.type=e}),clearable:"",placeholder:"请选择"},{default:p((function(){return[(l(!0),c(d,null,h(I.value,(function(e){return l(),v(r,{key:e.value,label:"".concat(e.label),value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),f(o,null,{default:p((function(){return[f(i,{type:"primary",icon:"search",onClick:J},{default:p((function(){return[y(" 查询 ")]})),_:1}),f(i,{icon:"refresh",onClick:H},{default:p((function(){return[y(" 重置 ")]})),_:1})]})),_:1})]})),_:1},8,["model"])]),s("div",T,[s("div",V,[f(i,{type:"primary",icon:"plus",onClick:t[1]||(t[1]=function(e){return function(e){switch(e){case"add":re.value="新增";break;case"edit":re.value="编辑"}U.value=e,ne.value=!0}("add")})},{default:p((function(){return[y(" 新增 ")]})),_:1})]),f(k,{border:"",data:R.value,onSortChange:e.sortChange,onSelectionChange:ee},{default:p((function(){return[f(m,{type:"selection",width:"60"}),f(m,{align:"center","min-width":"90",label:"id",prop:"id"},{default:p((function(e){return[f(b,{type:"primary",onClick:function(t){return r=e.row.id,(a={}).id=r,void n.push({name:"taskDetails",query:a});var r,a}},{default:p((function(){return[y(g(e.row.id),1)]})),_:2},1032,["onClick"])]})),_:1}),f(m,{align:"center",label:"desc","min-width":"150",prop:"desc"}),f(m,{align:"center",label:"模版","min-width":"170",prop:"complete"},{default:p((function(e){return[s("div",null,g(e.row.complete),1)]})),_:1}),f(m,{align:"center",label:"奖励","min-width":"200",prop:"award"},{default:p((function(e){return[s("div",null,g(e.row.award),1)]})),_:1}),f(m,{align:"center",label:"unlock","min-width":"150",prop:"unlock"},{default:p((function(e){return[s("div",null,g(e.row.unlock),1)]})),_:1}),f(m,{align:"center",label:"标签","min-width":"150",prop:"tag"}),f(m,{align:"center",label:"before","min-width":"150",prop:"before"}),f(m,{align:"center",fixed:"right",label:"操作",width:"200"},{default:p((function(e){return[f(i,{icon:"delete",type:"primary",link:"",onClick:function(t){return ie(e.row)}},{default:p((function(){return[y(" 删除 ")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data","onSortChange"]),s("div",z,[f(D,{"current-page":K.value,"page-size":Q.value,"page-sizes":[10,30,50,100],total:M.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:Z,onSizeChange:X},null,8,["current-page","page-size","total"])])]),f($,{modelValue:ne.value,"onUpdate:modelValue":t[3]||(t[3]=function(e){return ne.value=e}),size:"40%","before-close":ae,"show-close":!1},{header:p((function(){return[s("div",F,[s("span",G,g(re.value),1),s("div",null,[f(i,{onClick:ae},{default:p((function(){return[y(" 取 消 ")]})),_:1}),f(i,{type:"primary",onClick:oe},{default:p((function(){return[y(" 确 定 ")]})),_:1})])])]})),default:p((function(){return[f(u,{class:"myForm",ref_key:"apiForm",ref:te,model:q.value,rules:Y.value,"label-width":"80px"},{default:p((function(){return[f(o,{label:"ID",prop:"id"},{default:p((function(){return[f(A,{modelValue:q.value.id,"onUpdate:modelValue":t[2]||(t[2]=function(e){return q.value.id=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"])])}}});t("default",a(q,[["__scopeId","data-v-244c1649"]]))}}}))}();
