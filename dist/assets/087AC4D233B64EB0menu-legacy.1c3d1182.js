/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var t,n={},r=Object.prototype,a=r.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},o=u.iterator||"@@iterator",i=u.asyncIterator||"@@asyncIterator",c=u.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(t){f=function(e,t,n){return e[t]=n}}function d(e,t,n,r){var a=t&&t.prototype instanceof g?t:g,u=Object.create(a.prototype),o=new I(r||[]);return l(u,"_invoke",{value:V(e,n,o)}),u}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}n.wrap=d;var p="suspendedStart",m="suspendedYield",v="executing",h="completed",y={};function g(){}function w(){}function b(){}var _={};f(_,o,(function(){return this}));var B=Object.getPrototypeOf,x=B&&B(B(L([])));x&&x!==r&&a.call(x,o)&&(_=x);var E=b.prototype=g.prototype=Object.create(_);function D(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(r,l,u,o){var i=s(e[r],e,l);if("throw"!==i.type){var c=i.arg,f=c.value;return f&&"object"==typeof f&&a.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,u,o)}),(function(e){n("throw",e,u,o)})):t.resolve(f).then((function(e){c.value=e,u(c)}),(function(e){return n("throw",e,u,o)}))}o(i.arg)}var r;l(this,"_invoke",{value:function(e,a){function l(){return new t((function(t,r){n(e,a,t,r)}))}return r=r?r.then(l,l):l()}})}function V(e,n,r){var a=p;return function(l,u){if(a===v)throw Error("Generator is already running");if(a===h){if("throw"===l)throw u;return{value:t,done:!0}}for(r.method=l,r.arg=u;;){var o=r.delegate;if(o){var i=k(o,r);if(i){if(i===y)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=v;var c=s(e,n,r);if("normal"===c.type){if(a=r.done?h:m,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=h,r.method="throw",r.arg=c.arg)}}}function k(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var l=s(a,e.iterator,n.arg);if("throw"===l.type)return n.method="throw",n.arg=l.arg,n.delegate=null,y;var u=l.arg;return u?u.done?(n[e.resultName]=u.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):u:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e||""===e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return l.next=l}}throw new TypeError(typeof e+" is not iterable")}return w.prototype=b,l(E,"constructor",{value:b,configurable:!0}),l(b,"constructor",{value:w,configurable:!0}),w.displayName=f(b,c,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,f(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return{__await:e}},D(C.prototype),f(C.prototype,i,(function(){return this})),n.AsyncIterator=C,n.async=function(e,t,r,a,l){void 0===l&&(l=Promise);var u=new C(d(e,t,r,a),l);return n.isGeneratorFunction(t)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},D(E),f(E,c,"Generator"),f(E,o,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=L,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,a){return o.type="throw",o.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var l=this.tryEntries.length-1;l>=0;--l){var u=this.tryEntries[l],o=u.completion;if("root"===u.tryLoc)return r("end");if(u.tryLoc<=this.prev){var i=a.call(u,"catchLoc"),c=a.call(u,"finallyLoc");if(i&&c){if(this.prev<u.catchLoc)return r(u.catchLoc,!0);if(this.prev<u.finallyLoc)return r(u.finallyLoc)}else if(i){if(this.prev<u.catchLoc)return r(u.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return r(u.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var u=l?l.completion:{};return u.type=e,u.arg=t,l?(this.method="next",this.next=l.finallyLoc,y):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;A(n)}return a}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},n}function t(e,t,n,r,a,l,u){try{var o=e[l](u),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(a,l){var u=e.apply(n,r);function o(e){t(u,a,l,o,i,"next",e)}function i(e){t(u,a,l,o,i,"throw",e)}o(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.60a78b40.js","./087AC4D233B64EB0drawer-legacy.1ee8626a.js","./087AC4D233B64EB0overlay-legacy.30738a26.js","./087AC4D233B64EB0form-item-legacy.ea84400e.js","./087AC4D233B64EB0tooltip-legacy.b3c86740.js","./087AC4D233B64EB0popper-legacy.558ecc70.js","./087AC4D233B64EB0radio-legacy.71b9c111.js","./087AC4D233B64EB0input-legacy.12c190df.js","./087AC4D233B64EB0tag-legacy.5e0686c8.js","./087AC4D233B64EB0checkbox-legacy.0cf00473.js","./087AC4D233B64EB0scrollbar-legacy.0817fabf.js","./087AC4D233B64EB0col-legacy.34fb0626.js","./087AC4D233B64EB0select-legacy.6d03c293.js","./087AC4D233B64EB0table-column-legacy.89cf370d.js","./087AC4D233B64EB0button-legacy.fa07c5be.js","./087AC4D233B64EB0icon-legacy.b1d144fa.js","./087AC4D233B64EB0warningBar-legacy.e315ec7b.js","./087AC4D233B64EB0authorityBtn-legacy.90bad5c2.js","./087AC4D233B64EB0doc-legacy.d4eaa869.js","./087AC4D233B64EB0stringFun-legacy.7a0441ab.js","./087AC4D233B64EB0index-legacy.2a022eb8.js","./087AC4D233B64EB0index-legacy.bedc16ef.js","./087AC4D233B64EB0index-legacy.62d65aa9.js","./087AC4D233B64EB0castArray-legacy.9d5c87d5.js","./087AC4D233B64EB0_baseClone-legacy.2f3ffcc2.js","./087AC4D233B64EB0_Uint8Array-legacy.50fb1dd4.js","./087AC4D233B64EB0_initCloneObject-legacy.685321ef.js","./087AC4D233B64EB0index-legacy.16843866.js","./087AC4D233B64EB0strings-legacy.6c9fe27d.js","./087AC4D233B64EB0isEqual-legacy.ebfc9113.js","./087AC4D233B64EB0arrays-legacy.eb0e089a.js","./087AC4D233B64EB0cloneDeep-legacy.fe069fb1.js","./087AC4D233B64EB0index-legacy.4d9f9713.js","./087AC4D233B64EB0index-legacy.2cfa0458.js","./087AC4D233B64EB0debounce-legacy.b09e9c7e.js","./087AC4D233B64EB0_baseIteratee-legacy.4e82855a.js","./087AC4D233B64EB0index-legacy.59ac3308.js","./087AC4D233B64EB0token-legacy.91fd35f2.js","./087AC4D233B64EB0use-dialog-legacy.9ffafc73.js"],(function(t,r){"use strict";var a,l,u,o,i,c,f,d,s,p,m,v,h,y,g,w,b,_,B,x,E,D,C,V,k,j,A,I,L,U,N,O,P,T,G,S,q,F,M,z,K,Y,$,H,J,Q,R,W;return{setters:[function(e){a=e._,l=e.r,u=e.V,o=e.dA,i=e.a,c=e.o,f=e.c,d=e.b,s=e.d,p=e.w,m=e.g,v=e.t,h=e.h,y=e.I,g=e.e,w=e.O,b=e.P,_=e.G,B=e.dB,x=e.dC,E=e.au,D=e.dD,C=e.j,V=e.dE,k=e.dF,j=e.dG,A=e.E,I=e.J,L=e.l,U=e.p,N=e.i},null,null,function(e){O=e.a,P=e.E},null,null,function(e){T=e.E},null,null,function(e){G=e.E},null,function(e){S=e.E,q=e.a},null,function(e){F=e.E,M=e.a},null,function(e){z=e.default},function(e){K=e._},function(e){Y=e.c},function(e){$=e.t},function(e){H=e.a},function(e){J=e.E,Q=e.a},function(e){R=e.E},function(e){W=e.E},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".warning[data-v-1d70415b]{color:#dc143c}.icon-column[data-v-1d70415b]{display:flex;align-items:center}.icon-column .el-icon[data-v-1d70415b]{margin-right:8px}\n",document.head.appendChild(r);var X=function(e){return U("data-v-1d70415b"),e=e(),N(),e},Z={class:"gva-table-box"},ee={class:"gva-btn-list"},te={key:0,class:"icon-column"},ne={class:"flex justify-between items-center"},re={class:"text-lg"},ae=X((function(){return d("span",{style:{"font-size":"12px","margin-right":"12px"}},"如果菜单包含子菜单，请创建router-view二级路由页面或者",-1)})),le={style:{display:"inline-flex","align-items":"center"}},ue=X((function(){return d("span",null,"路由Path",-1)})),oe=X((function(){return d("span",null," 高亮菜单 ",-1)})),ie=X((function(){return d("span",null," 是否为基础页面 ",-1)})),ce={class:"flex items-center gap-2"},fe={class:"flex items-center gap-2 mt-3"},de=Object.assign({name:"Menus"},{__name:"menu",setup:function(t){var r=l({});u((function(){for(var e in o)r[e.replace(/^\/src\//,"")]=o[e]}));var a=l({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),U=i([]),N=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x({page:1,pageSize:999});case 2:0===(n=e.sent).code&&(U.value=n.data.list);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();N();var X=function(){se.value.component=se.value.component.replace(/\\/g,"/"),se.value.name=H(r[se.value.component]),se.value.path=se.value.name},de=function(){var t=n(e().mark((function t(n,r){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(a=n[r]).ID){e.next=4;break}return n.splice(r,1),e.abrupt("return");case 4:return e.next=6,Y({id:a.ID});case 6:0===e.sent.code&&n.splice(r,1);case 8:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),se=i({ID:0,path:"",name:"",hidden:!1,parentId:0,component:"",meta:{activeName:"",title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1},parameters:[],menuBtn:[]}),pe=function(){se.value.path=se.value.name},me=function(e){ye(),e()},ve=i(null),he=i(!1),ye=function(){he.value=!1,ve.value.resetFields(),se.value={ID:0,path:"",name:"",hidden:!1,parentId:0,component:"",meta:{title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1}}},ge=i(!1),we=function(){ye(),ge.value=!1},be=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ve.value.validate(function(){var t=n(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=13;break}if(!Ee.value){e.next=7;break}return e.next=4,V(se.value);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,k(se.value);case 9:r=e.sent;case 10:0===r.code&&(C({type:"success",message:Ee.value?"编辑成功":"添加成功!"}),N()),ye(),ge.value=!1;case 13:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_e=i([{ID:"0",title:"根菜单"}]),Be=function(){_e.value=[{ID:0,title:"根目录"}],xe(U.value,_e.value,!1)},xe=function(e,t,n){e&&e.forEach((function(e){if(e.children&&e.children.length){var r={title:e.meta.title,ID:e.ID,disabled:n||e.ID===se.value.ID,children:[]};xe(e.children,r.children,n||e.ID===se.value.ID),t.push(r)}else{var a={title:e.meta.title,ID:e.ID,disabled:n||e.ID===se.value.ID};t.push(a)}}))},Ee=i(!1),De=i("新增菜单"),Ce=function(e){De.value="新增菜单",se.value.parentId=e,Ee.value=!1,Be(),ge.value=!0},Ve=function(){var t=n(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return De.value="编辑菜单",e.next=3,j({id:n});case 3:r=e.sent,se.value=r.data.menu,Ee.value=!0,Be(),ge.value=!0;case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(t,l){var u=A,o=F,i=I,x=M,V=J,k=Q,j=O,Y=S,H=L,ye=q,Be=G,xe=T,ke=R,je=P,Ae=W;return c(),f("div",null,[d("div",Z,[d("div",ee,[s(u,{type:"primary",icon:"plus",onClick:l[0]||(l[0]=function(e){return Ce(0)})},{default:p((function(){return[m(" 新增根菜单 ")]})),_:1})]),s(x,{data:U.value,"row-key":"ID"},{default:p((function(){return[s(o,{align:"left",label:"ID","min-width":"100",prop:"ID"}),s(o,{align:"left",label:"展示名称","min-width":"120",prop:"authorityName"},{default:p((function(e){return[d("span",null,v(e.row.meta.title),1)]})),_:1}),s(o,{align:"left",label:"图标","min-width":"140",prop:"authorityName"},{default:p((function(e){return[e.row.meta.icon?(c(),f("div",te,[s(i,null,{default:p((function(){return[(c(),h(y(e.row.meta.icon)))]})),_:2},1024),d("span",null,v(e.row.meta.icon),1)])):g("",!0)]})),_:1}),s(o,{align:"left",label:"路由Name","show-overflow-tooltip":"","min-width":"160",prop:"name"}),s(o,{align:"left",label:"路由Path","show-overflow-tooltip":"","min-width":"160",prop:"path"}),s(o,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:p((function(e){return[d("span",null,v(e.row.hidden?"隐藏":"显示"),1)]})),_:1}),s(o,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),s(o,{align:"left",label:"排序","min-width":"70",prop:"sort"}),s(o,{align:"left",label:"文件路径","min-width":"360",prop:"component"}),s(o,{align:"left",fixed:"right",label:"操作",width:"300"},{default:p((function(t){return[s(u,{type:"primary",link:"",icon:"plus",onClick:function(e){return Ce(t.row.ID)}},{default:p((function(){return[m(" 添加子菜单 ")]})),_:2},1032,["onClick"]),s(u,{type:"primary",link:"",icon:"edit",onClick:function(e){return Ve(t.row.ID)}},{default:p((function(){return[m(" 编辑 ")]})),_:2},1032,["onClick"]),s(u,{type:"primary",link:"",icon:"delete",onClick:function(r){return a=t.row.ID,void E.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(n(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D({ID:a});case 2:0===e.sent.code&&(C({type:"success",message:"删除成功!"}),N());case 4:case"end":return e.stop()}}),t)})))).catch((function(){C({type:"info",message:"已取消删除"})}));var a}},{default:p((function(){return[m(" 删除 ")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]),s(Ae,{modelValue:ge.value,"onUpdate:modelValue":l[17]||(l[17]=function(e){return ge.value=e}),size:"60%","before-close":me,"show-close":!1},{header:p((function(){return[d("div",ne,[d("span",re,v(De.value),1),d("div",null,[s(u,{onClick:we},{default:p((function(){return[m(" 取 消 ")]})),_:1}),s(u,{type:"primary",onClick:be},{default:p((function(){return[m(" 确 定 ")]})),_:1})])])]})),default:p((function(){return[s(K,{title:"新增菜单，需要在角色管理内配置权限才可使用"}),ge.value?(c(),h(je,{key:0,ref_key:"menuForm",ref:ve,inline:!0,model:se.value,rules:a,"label-position":"top"},{default:p((function(){return[s(ye,{class:"w-full"},{default:p((function(){return[s(Y,{span:16},{default:p((function(){return[s(j,{label:"文件路径",prop:"component"},{default:p((function(){return[s(k,{modelValue:se.value.component,"onUpdate:modelValue":l[1]||(l[1]=function(e){return se.value.component=e}),filterable:"","allow-create":"",autocomplete:"off",style:{width:"100%"},placeholder:"页面:view/xxx/xx.vue 插件:plugin/xx/xx.vue","default-first-option":"",onChange:X},{default:p((function(){return[(c(!0),f(w,null,b(r,(function(e,t){return c(),h(V,{key:t,label:t,value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"]),ae,s(u,{style:{"margin-top":"4px"},onClick:l[2]||(l[2]=function(e){return se.value.component="view/routerHolder.vue"})},{default:p((function(){return[m(" 点我设置 ")]})),_:1})]})),_:1})]})),_:1}),s(Y,{span:8},{default:p((function(){return[s(j,{label:"展示名称",prop:"meta.title"},{default:p((function(){return[s(H,{modelValue:se.value.meta.title,"onUpdate:modelValue":l[3]||(l[3]=function(e){return se.value.meta.title=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),s(ye,{class:"w-full"},{default:p((function(){return[s(Y,{span:8},{default:p((function(){return[s(j,{label:"路由Name",prop:"path"},{default:p((function(){return[s(H,{modelValue:se.value.name,"onUpdate:modelValue":l[4]||(l[4]=function(e){return se.value.name=e}),autocomplete:"off",placeholder:"唯一英文字符串",onChange:pe},null,8,["modelValue"])]})),_:1})]})),_:1}),s(Y,{span:8},{default:p((function(){return[s(j,{prop:"path"},{label:p((function(){return[d("span",le,[ue,s(Be,{modelValue:he.value,"onUpdate:modelValue":l[5]||(l[5]=function(e){return he.value=e}),style:{"margin-left":"12px",height:"auto"}},{default:p((function(){return[m("添加参数")]})),_:1},8,["modelValue"])])]})),default:p((function(){return[s(H,{modelValue:se.value.path,"onUpdate:modelValue":l[6]||(l[6]=function(e){return se.value.path=e}),disabled:!he.value,autocomplete:"off",placeholder:"建议只在后方拼接参数"},null,8,["modelValue","disabled"])]})),_:1})]})),_:1}),s(Y,{span:8},{default:p((function(){return[s(j,{label:"是否隐藏"},{default:p((function(){return[s(k,{modelValue:se.value.hidden,"onUpdate:modelValue":l[7]||(l[7]=function(e){return se.value.hidden=e}),style:{width:"100%"},placeholder:"是否在列表隐藏"},{default:p((function(){return[s(V,{value:!1,label:"否"}),s(V,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),s(ye,{class:"w-full"},{default:p((function(){return[s(Y,{span:8},{default:p((function(){return[s(j,{label:"父节点ID"},{default:p((function(){return[s(xe,{modelValue:se.value.parentId,"onUpdate:modelValue":l[8]||(l[8]=function(e){return se.value.parentId=e}),style:{width:"100%"},disabled:!Ee.value,options:_e.value,props:{checkStrictly:!0,label:"title",value:"ID",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])]})),_:1})]})),_:1}),s(Y,{span:8},{default:p((function(){return[s(j,{label:"图标",prop:"meta.icon"},{default:p((function(){return[s(z,{meta:se.value.meta},null,8,["meta"])]})),_:1})]})),_:1}),s(Y,{span:8},{default:p((function(){return[s(j,{label:"排序标记",prop:"sort"},{default:p((function(){return[s(H,{modelValue:se.value.sort,"onUpdate:modelValue":l[9]||(l[9]=function(e){return se.value.sort=e}),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),s(ye,{class:"w-full"},{default:p((function(){return[s(Y,{span:8},{default:p((function(){return[s(j,{prop:"meta.activeName"},{label:p((function(){return[d("div",null,[oe,s(ke,{content:"注：当到达此路由时候，指定左侧菜单指定name会处于活跃状态（亮起），可为空，为空则为本路由Name。",placement:"top",effect:"light"},{default:p((function(){return[s(i,null,{default:p((function(){return[s(_(B))]})),_:1})]})),_:1})])]})),default:p((function(){return[s(H,{modelValue:se.value.meta.activeName,"onUpdate:modelValue":l[10]||(l[10]=function(e){return se.value.meta.activeName=e}),placeholder:se.value.name,autocomplete:"off"},null,8,["modelValue","placeholder"])]})),_:1})]})),_:1}),s(Y,{span:8},{default:p((function(){return[s(j,{label:"KeepAlive",prop:"meta.keepAlive"},{default:p((function(){return[s(k,{modelValue:se.value.meta.keepAlive,"onUpdate:modelValue":l[11]||(l[11]=function(e){return se.value.meta.keepAlive=e}),style:{width:"100%"},placeholder:"是否keepAlive缓存页面"},{default:p((function(){return[s(V,{value:!1,label:"否"}),s(V,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1}),s(Y,{span:8},{default:p((function(){return[s(j,{label:"CloseTab",prop:"meta.closeTab"},{default:p((function(){return[s(k,{modelValue:se.value.meta.closeTab,"onUpdate:modelValue":l[12]||(l[12]=function(e){return se.value.meta.closeTab=e}),style:{width:"100%"},placeholder:"是否自动关闭tab"},{default:p((function(){return[s(V,{value:!1,label:"否"}),s(V,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),s(ye,{class:"w-full"},{default:p((function(){return[s(Y,{span:8},{default:p((function(){return[s(j,null,{label:p((function(){return[d("div",null,[ie,s(ke,{content:"此项选择为是，则不会展示左侧菜单以及顶部信息。",placement:"top",effect:"light"},{default:p((function(){return[s(i,null,{default:p((function(){return[s(_(B))]})),_:1})]})),_:1})])]})),default:p((function(){return[s(k,{modelValue:se.value.meta.defaultMenu,"onUpdate:modelValue":l[13]||(l[13]=function(e){return se.value.meta.defaultMenu=e}),style:{width:"100%"},placeholder:"是否为基础页面"},{default:p((function(){return[s(V,{value:!1,label:"否"}),s(V,{value:!0,label:"是"})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1},8,["model","rules"])):g("",!0),d("div",null,[d("div",ce,[s(u,{type:"primary",icon:"edit",onClick:l[14]||(l[14]=function(e){return function(e){e.parameters||(e.parameters=[]),e.parameters.push({type:"query",key:"",value:""})}(se.value)})},{default:p((function(){return[m(" 新增菜单参数 ")]})),_:1})]),s(x,{data:se.value.parameters,style:{width:"100%","margin-top":"12px"}},{default:p((function(){return[s(o,{align:"left",prop:"type",label:"参数类型",width:"180"},{default:p((function(e){return[s(k,{modelValue:e.row.type,"onUpdate:modelValue":function(t){return e.row.type=t},placeholder:"请选择"},{default:p((function(){return[s(V,{key:"query",value:"query",label:"query"}),s(V,{key:"params",value:"params",label:"params"})]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),s(o,{align:"left",prop:"key",label:"参数key",width:"180"},{default:p((function(e){return[d("div",null,[s(H,{modelValue:e.row.key,"onUpdate:modelValue":function(t){return e.row.key=t}},null,8,["modelValue","onUpdate:modelValue"])])]})),_:1}),s(o,{align:"left",prop:"value",label:"参数值"},{default:p((function(e){return[d("div",null,[s(H,{modelValue:e.row.value,"onUpdate:modelValue":function(t){return e.row.value=t}},null,8,["modelValue","onUpdate:modelValue"])])]})),_:1}),s(o,{align:"left"},{default:p((function(e){return[d("div",null,[s(u,{type:"danger",icon:"delete",onClick:function(t){return n=se.value.parameters,r=e.$index,void n.splice(r,1);var n,r}},{default:p((function(){return[m(" 删除 ")]})),_:2},1032,["onClick"])])]})),_:1})]})),_:1},8,["data"]),d("div",fe,[s(u,{type:"primary",icon:"edit",onClick:l[15]||(l[15]=function(e){return function(e){e.menuBtn||(e.menuBtn=[]),e.menuBtn.push({name:"",desc:""})}(se.value)})},{default:p((function(){return[m(" 新增可控按钮 ")]})),_:1}),s(i,{class:"cursor-pointer",onClick:l[16]||(l[16]=function(e){return _($)("https://www.gin-vue-admin.com/guide/web/button-auth.html")})},{default:p((function(){return[s(_(B))]})),_:1})]),s(x,{data:se.value.menuBtn,style:{width:"100%","margin-top":"12px"}},{default:p((function(){return[s(o,{align:"left",prop:"name",label:"按钮名称",width:"180"},{default:p((function(e){return[d("div",null,[s(H,{modelValue:e.row.name,"onUpdate:modelValue":function(t){return e.row.name=t}},null,8,["modelValue","onUpdate:modelValue"])])]})),_:1}),s(o,{align:"left",prop:"name",label:"备注",width:"180"},{default:p((function(e){return[d("div",null,[s(H,{modelValue:e.row.desc,"onUpdate:modelValue":function(t){return e.row.desc=t}},null,8,["modelValue","onUpdate:modelValue"])])]})),_:1}),s(o,{align:"left"},{default:p((function(e){return[d("div",null,[s(u,{type:"danger",icon:"delete",onClick:function(t){return de(se.value.menuBtn,e.$index)}},{default:p((function(){return[m(" 删除 ")]})),_:2},1032,["onClick"])])]})),_:1})]})),_:1},8,["data"])])]})),_:1},8,["modelValue"])])}}});t("default",a(de,[["__scopeId","data-v-1d70415b"]]))}}}))}();
