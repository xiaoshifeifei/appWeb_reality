/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var e,r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},i=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(e){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,u=Object.create(a.prototype),i=new L(n||[]);return o(u,"_invoke",{value:I(t,r,i)}),u}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var h="suspendedStart",y="suspendedYield",p="executing",v="completed",g={};function m(){}function B(){}function w(){}var b={};s(b,i,(function(){return this}));var E=Object.getPrototypeOf,C=E&&E(E(N([])));C&&C!==n&&a.call(C,i)&&(b=C);var j=w.prototype=m.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function r(n,o,u,i){var l=d(t[n],t,o);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&a.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,u,i)}),(function(t){r("throw",t,u,i)})):e.resolve(s).then((function(t){c.value=t,u(c)}),(function(t){return r("throw",t,u,i)}))}i(l.arg)}var n;o(this,"_invoke",{value:function(t,a){function o(){return new e((function(e,n){r(t,a,e,n)}))}return n=n?n.then(o,o):o()}})}function I(t,r,n){var a=h;return function(o,u){if(a===p)throw Error("Generator is already running");if(a===v){if("throw"===o)throw u;return{value:e,done:!0}}for(n.method=o,n.arg=u;;){var i=n.delegate;if(i){var l=D(i,n);if(l){if(l===g)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=p;var c=d(t,r,n);if("normal"===c.type){if(a=n.done?v:y,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=v,n.method="throw",n.arg=c.arg)}}}function D(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,D(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=d(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var u=o.arg;return u?u.done?(r[t.resultName]=u.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):u:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return B.prototype=w,o(j,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:B,configurable:!0}),B.displayName=s(w,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===B||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},x(A.prototype),s(A.prototype,l,(function(){return this})),r.AsyncIterator=A,r.async=function(t,e,n,a,o){void 0===o&&(o=Promise);var u=new A(f(t,e,n,a),o);return r.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},x(j),s(j,c,"Generator"),s(j,i,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],i=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var l=a.call(u,"catchLoc"),c=a.call(u,"finallyLoc");if(l&&c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(l){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}function e(t,e,r,n,a,o,u){try{var i=t[o](u),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(n,a)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(a,o){var u=t.apply(r,n);function i(t){e(u,a,o,i,l,"next",t)}function l(t){e(u,a,o,i,l,"throw",t)}i(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.60a78b40.js","./087AC4D233B64EB0tab-pane-legacy.1ab9d80d.js","./087AC4D233B64EB0drawer-legacy.1ee8626a.js","./087AC4D233B64EB0overlay-legacy.30738a26.js","./087AC4D233B64EB0form-item-legacy.ea84400e.js","./087AC4D233B64EB0input-legacy.12c190df.js","./087AC4D233B64EB0radio-legacy.71b9c111.js","./087AC4D233B64EB0popper-legacy.558ecc70.js","./087AC4D233B64EB0tag-legacy.5e0686c8.js","./087AC4D233B64EB0checkbox-legacy.0cf00473.js","./087AC4D233B64EB0scrollbar-legacy.0817fabf.js","./087AC4D233B64EB0table-column-legacy.89cf370d.js","./087AC4D233B64EB0tooltip-legacy.b3c86740.js","./087AC4D233B64EB0button-legacy.fa07c5be.js","./087AC4D233B64EB0authority-legacy.ccac8873.js","./087AC4D233B64EB0menus-legacy.f09762f0.js","./087AC4D233B64EB0apis-legacy.47f44f13.js","./087AC4D233B64EB0datas-legacy.a5ca74b7.js","./087AC4D233B64EB0warningBar-legacy.e315ec7b.js","./087AC4D233B64EB0index-legacy.62d65aa9.js","./087AC4D233B64EB0strings-legacy.6c9fe27d.js","./087AC4D233B64EB0index-legacy.2c2151f3.js","./087AC4D233B64EB0castArray-legacy.9d5c87d5.js","./087AC4D233B64EB0_baseClone-legacy.2f3ffcc2.js","./087AC4D233B64EB0_Uint8Array-legacy.50fb1dd4.js","./087AC4D233B64EB0_initCloneObject-legacy.685321ef.js","./087AC4D233B64EB0index-legacy.16843866.js","./087AC4D233B64EB0isEqual-legacy.ebfc9113.js","./087AC4D233B64EB0arrays-legacy.eb0e089a.js","./087AC4D233B64EB0cloneDeep-legacy.fe069fb1.js","./087AC4D233B64EB0index-legacy.bedc16ef.js","./087AC4D233B64EB0index-legacy.59ac3308.js","./087AC4D233B64EB0index-legacy.4d9f9713.js","./087AC4D233B64EB0index-legacy.2cfa0458.js","./087AC4D233B64EB0debounce-legacy.b09e9c7e.js","./087AC4D233B64EB0_baseIteratee-legacy.4e82855a.js","./087AC4D233B64EB0dialog-legacy.573b0b62.js","./087AC4D233B64EB0use-dialog-legacy.9ffafc73.js","./087AC4D233B64EB0tree-legacy.84c00cd3.js","./087AC4D233B64EB0token-legacy.91fd35f2.js","./087AC4D233B64EB0index-legacy.548d24f4.js","./087AC4D233B64EB0authorityBtn-legacy.90bad5c2.js","./087AC4D233B64EB0api-legacy.2202adc6.js","./087AC4D233B64EB0checkbox-group-legacy.8d8ae0d6.js"],(function(e,n){"use strict";var a,o,u,i,l,c,s,f,d,h,y,p,v,g,m,B,w,b,E,C,j,x,A,I,D,_,k,L,N,V,O;return{setters:[function(t){a=t.a,o=t.o,u=t.c,i=t.d,l=t.b,c=t.w,s=t.g,f=t.t,d=t.h,h=t.e,y=t.au,p=t.j,v=t.E,g=t.l},function(t){m=t.E,B=t.a},null,null,function(t){w=t.a,b=t.E},null,function(t){E=t.E},null,null,null,null,function(t){C=t.E,j=t.a},null,null,function(t){x=t.g,A=t.d,I=t.c,D=t.u,_=t.a},function(t){k=t.default},function(t){L=t.default},function(t){N=t.default},function(t){V=t._},function(t){O=t.E},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".authority .el-input-number{margin-left:15px}.authority .el-input-number span{display:none}.tree-content{margin-top:10px;height:calc(100vh - 158px);overflow:auto}\n",document.head.appendChild(n);var P={class:"authority"},S={class:"gva-table-box"},G={class:"gva-btn-list"},T={class:"flex justify-between items-center"},F={class:"text-lg"};e("default",Object.assign({name:"Authority"},{__name:"authority",setup:function(e){var n=a([{authorityId:0,authorityName:"根角色"}]),U=a(!1),q=a("add"),R=a({}),z=a("新增角色"),Q=a(!1),Y=a(!1),H=a({}),K=a({authorityId:0,authorityName:"",parentId:0}),M=a({authorityId:[{required:!0,message:"请输入角色ID",trigger:"blur"},{validator:function(t,e,r){return/^[0-9]*[1-9][0-9]*$/.test(e)?r():r(new Error("请输入正整数"))},trigger:"blur",message:"必须为正整数"}],authorityName:[{required:!0,message:"请输入角色名",trigger:"blur"}],parentId:[{required:!0,message:"请选择父角色",trigger:"blur"}]}),$=a([]),J=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x({page:1,pageSize:999});case 2:0===(r=t.sent).code&&($.value=r.data.list);case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();J();var W=function(t,e){R.value[t]=e},X=a(null),Z=a(null),tt=a(null),et=function(t,e){var r=[X,Z,tt];e&&r[e].value.needConfirm&&(r[e].value.enterAndNext(),r[e].value.needConfirm=!1)},rt=a(null),nt=function(){rt.value&&rt.value.resetFields(),K.value={authorityId:0,authorityName:"",parentId:0}},at=function(){nt(),Q.value=!1,Y.value=!1},ot=function(){rt.value.validate(function(){var e=r(t().mark((function e(r){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=27;break}K.value.authorityId=Number(K.value.authorityId),t.t0=q.value,t.next="add"===t.t0?5:"edit"===t.t0?10:"copy"===t.t0?15:25;break;case 5:return t.next=7,_(K.value);case 7:return 0===t.sent.code&&(p({type:"success",message:"添加成功!"}),J(),at()),t.abrupt("break",25);case 10:return t.next=12,D(K.value);case 12:return 0===t.sent.code&&(p({type:"success",message:"添加成功!"}),J(),at()),t.abrupt("break",25);case 15:return(n={authority:{authorityId:0,authorityName:"",datauthorityId:[],parentId:0},oldAuthorityId:0}).authority.authorityId=K.value.authorityId,n.authority.authorityName=K.value.authorityName,n.authority.parentId=K.value.parentId,n.authority.dataAuthorityId=H.value.dataAuthorityId,n.oldAuthorityId=H.value.authorityId,t.next=23,I(n);case 23:0===t.sent.code&&(p({type:"success",message:"复制成功！"}),J());case 25:nt(),Q.value=!1;case 27:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ut=function(){n.value=[{authorityId:0,authorityName:"根角色"}],it($.value,n.value,!1)},it=function(t,e,r){t&&t.forEach((function(t){if(t.children&&t.children.length){var n={authorityId:t.authorityId,authorityName:t.authorityName,disabled:r||t.authorityId===K.value.authorityId,children:[]};it(t.children,n.children,r||t.authorityId===K.value.authorityId),e.push(n)}else{var a={authorityId:t.authorityId,authorityName:t.authorityName,disabled:r||t.authorityId===K.value.authorityId};e.push(a)}}))},lt=function(t){nt(),z.value="新增角色",q.value="add",K.value.parentId=t,ut(),Q.value=!0};return function(e,a){var x=v,I=C,D=j,_=E,Y=w,nt=g,it=b,ct=O,st=m,ft=B;return o(),u("div",P,[i(V,{title:"注：右上角头像下拉可切换角色"}),l("div",S,[l("div",G,[i(x,{type:"primary",icon:"plus",onClick:a[0]||(a[0]=function(t){return lt(0)})},{default:c((function(){return[s("新增角色")]})),_:1})]),i(D,{data:$.value,"tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"authorityId",style:{width:"100%"}},{default:c((function(){return[i(I,{label:"角色ID","min-width":"180",prop:"authorityId"}),i(I,{align:"left",label:"角色名称","min-width":"180",prop:"authorityName"}),i(I,{align:"left",label:"操作",width:"460"},{default:c((function(e){return[i(x,{icon:"setting",type:"primary",link:"",onClick:function(t){return r=e.row,U.value=!0,void(R.value=r);var r}},{default:c((function(){return[s("设置权限")]})),_:2},1032,["onClick"]),i(x,{icon:"plus",type:"primary",link:"",onClick:function(t){return lt(e.row.authorityId)}},{default:c((function(){return[s("新增子角色")]})),_:2},1032,["onClick"]),i(x,{icon:"copy-document",type:"primary",link:"",onClick:function(t){return function(t){for(var e in ut(),z.value="拷贝角色",q.value="copy",K.value)K.value[e]=t[e];H.value=t,Q.value=!0}(e.row)}},{default:c((function(){return[s("拷贝")]})),_:2},1032,["onClick"]),i(x,{icon:"edit",type:"primary",link:"",onClick:function(t){return function(t){for(var e in ut(),z.value="编辑角色",q.value="edit",K.value)K.value[e]=t[e];ut(),rt.value&&rt.value.clearValidate(),Q.value=!0}(e.row)}},{default:c((function(){return[s("编辑")]})),_:2},1032,["onClick"]),i(x,{icon:"delete",type:"primary",link:"",onClick:function(n){return a=e.row,void y.confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(r(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A({authorityId:a.authorityId});case 2:0===t.sent.code&&(p({type:"success",message:"删除成功!"}),J());case 4:case"end":return t.stop()}}),e)})))).catch((function(){p({type:"info",message:"已取消删除"})}));var a}},{default:c((function(){return[s("删除")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]),i(ct,{modelValue:Q.value,"onUpdate:modelValue":a[4]||(a[4]=function(t){return Q.value=t}),"show-close":!1},{header:c((function(){return[l("div",T,[l("span",F,f(z.value),1),l("div",null,[i(x,{onClick:at},{default:c((function(){return[s("取 消")]})),_:1}),i(x,{type:"primary",onClick:ot},{default:c((function(){return[s("确 定")]})),_:1})])])]})),default:c((function(){return[i(it,{ref_key:"authorityForm",ref:rt,model:K.value,rules:M.value,"label-width":"80px"},{default:c((function(){return[i(Y,{label:"父级角色",prop:"parentId"},{default:c((function(){return[i(_,{modelValue:K.value.parentId,"onUpdate:modelValue":a[1]||(a[1]=function(t){return K.value.parentId=t}),style:{width:"100%"},disabled:"add"===q.value,options:n.value,props:{checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])]})),_:1}),i(Y,{label:"角色ID",prop:"authorityId"},{default:c((function(){return[i(nt,{modelValue:K.value.authorityId,"onUpdate:modelValue":a[2]||(a[2]=function(t){return K.value.authorityId=t}),disabled:"edit"===q.value,autocomplete:"off",maxlength:"15"},null,8,["modelValue","disabled"])]})),_:1}),i(Y,{label:"角色姓名",prop:"authorityName"},{default:c((function(){return[i(nt,{modelValue:K.value.authorityName,"onUpdate:modelValue":a[3]||(a[3]=function(t){return K.value.authorityName=t}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue"]),U.value?(o(),d(ct,{key:0,modelValue:U.value,"onUpdate:modelValue":a[5]||(a[5]=function(t){return U.value=t}),"with-header":!1,size:"40%",title:"角色配置"},{default:c((function(){return[i(ft,{"before-leave":et,type:"border-card"},{default:c((function(){return[i(st,{label:"角色菜单"},{default:c((function(){return[i(k,{ref_key:"menus",ref:X,row:R.value,onChangeRow:W},null,8,["row"])]})),_:1}),i(st,{label:"角色api"},{default:c((function(){return[i(L,{ref_key:"apis",ref:Z,row:R.value,onChangeRow:W},null,8,["row"])]})),_:1}),i(st,{label:"资源权限"},{default:c((function(){return[i(N,{ref_key:"datas",ref:tt,authority:$.value,row:R.value,onChangeRow:W},null,8,["authority","row"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])):h("",!0)])}}}))}}}))}();
