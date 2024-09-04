/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{aY as e,cL as t,K as n,x as l,y as a,o,h as s,w as u,B as r,bn as i,a6 as c,cj as d,cl as p,ck as v,F as m,cM as h,C as f,D as b,a8 as x,aF as M,a as g,b2 as y,a7 as I,r as C,T as S,z as k,V as E,X as O,A as w,Y as T,J as N,a2 as A,a5 as B,O as P,a0 as z,cD as j,ab as L,bY as $,cN as W,ah as D,W as _,Z as q,aM as R,bm as F,aj as V,bq as Y,ad as G,c as Z,b as H,n as J,g as K,t as X,L as Q,M as U}from"./087AC4D233B64EB0index.70d09b05.js";import{E as ee}from"./087AC4D233B64EB0index.8862a37e.js";import{E as te}from"./087AC4D233B64EB0index.c39333f3.js";import{C as ne}from"./087AC4D233B64EB0index.0adebf5a.js";let le=class{constructor(e,t){this.parent=e,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e}addListeners(){const n=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(l=>{l.addEventListener("keydown",(l=>{let a=!1;switch(l.code){case e.down:this.gotoSubIndex(this.subIndex+1),a=!0;break;case e.up:this.gotoSubIndex(this.subIndex-1),a=!0;break;case e.tab:t(n,"mouseleave");break;case e.enter:case e.space:a=!0,l.currentTarget.click()}return a&&(l.preventDefault(),l.stopPropagation()),!1}))}))}},ae=class{constructor(e,t){this.domNode=e,this.submenu=null,this.submenu=null,this.init(t)}init(e){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(".".concat(e,"-menu"));t&&(this.submenu=new le(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",(n=>{let l=!1;switch(n.code){case e.down:t(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),l=!0;break;case e.up:t(n.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),l=!0;break;case e.tab:t(n.currentTarget,"mouseleave");break;case e.enter:case e.space:l=!0,n.currentTarget.click()}l&&n.preventDefault()}))}},oe=class{constructor(e,t){this.domNode=e,this.init(t)}init(e){const t=this.domNode.childNodes;Array.from(t).forEach((t=>{1===t.nodeType&&new ae(t,e)}))}};var se=n(l({name:"ElMenuCollapseTransition",setup(){const e=a("menu");return{listeners:{onBeforeEnter:e=>e.style.opacity="0.2",onEnter(t,n){d(t,"".concat(e.namespace.value,"-opacity-transition")),t.style.opacity="1",n()},onAfterEnter(t){p(t,"".concat(e.namespace.value,"-opacity-transition")),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),v(t,e.m("collapse"))?(p(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),d(t,e.m("collapse"))):(d(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),p(t,e.m("collapse"))),t.style.width="".concat(t.scrollWidth,"px"),t.style.overflow="hidden"},onLeave(e){d(e,"horizontal-collapse-transition"),e.style.width="".concat(e.dataset.scrollWidth,"px")}}}}}),[["render",function(e,t,n,l,a,d){return o(),s(c,i({mode:"out-in"},e.listeners),{default:u((()=>[r(e.$slots,"default")])),_:3},16)}],["__file","menu-collapse-transition.vue"]]);function ue(e,t){const n=m((()=>{let n=e.parent;const l=[t.value];for(;"ElMenu"!==n.type.name;)n.props.index&&l.unshift(n.props.index),n=n.parent;return l}));return{parentMenu:m((()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t})),indexPath:n}}function re(e){return m((()=>{const t=e.backgroundColor;return t?new h(t).shade(20).toString():""}))}const ie=(e,t)=>{const n=a("menu");return m((()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":re(e).value||"","active-color":e.activeTextColor||"",level:"".concat(t)})))},ce=f({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:b},expandOpenIcon:{type:b},collapseCloseIcon:{type:b},collapseOpenIcon:{type:b}}),de="ElSubMenu";var pe=l({name:de,props:ce,setup(e,{slots:t,expose:n}){const l=z(),{indexPath:o,parentMenu:s}=ue(l,m((()=>e.index))),u=a("menu"),r=a("sub-menu"),i=x("rootMenu");i||M(de,"can not inject root menu");const c=x("subMenu:".concat(s.value.uid));c||M(de,"can not inject sub menu");const d=g({}),p=g({});let v;const h=g(!1),f=g(),b=g(null),L=m((()=>"horizontal"===V.value&&W.value?"bottom-start":"right-start")),$=m((()=>"horizontal"===V.value&&W.value||"vertical"===V.value&&!i.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?R.value?e.expandOpenIcon:e.expandCloseIcon:y:e.collapseCloseIcon&&e.collapseOpenIcon?R.value?e.collapseOpenIcon:e.collapseCloseIcon:I)),W=m((()=>0===c.level)),D=m((()=>{const t=e.teleported;return void 0===t?W.value:t})),_=m((()=>i.props.collapse?"".concat(u.namespace.value,"-zoom-in-left"):"".concat(u.namespace.value,"-zoom-in-top"))),q=m((()=>"horizontal"===V.value&&W.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"])),R=m((()=>i.openedMenus.includes(e.index))),F=m((()=>{let e=!1;return Object.values(d.value).forEach((t=>{t.active&&(e=!0)})),Object.values(p.value).forEach((t=>{t.active&&(e=!0)})),e})),V=m((()=>i.props.mode)),Y=C({index:e.index,indexPath:o,active:F}),G=ie(i.props,c.level+1),Z=m((()=>{var t;return null!=(t=e.popperOffset)?t:i.props.popperOffset})),H=m((()=>{var t;return null!=(t=e.popperClass)?t:i.props.popperClass})),J=m((()=>{var t;return null!=(t=e.showTimeout)?t:i.props.showTimeout})),K=m((()=>{var t;return null!=(t=e.hideTimeout)?t:i.props.hideTimeout})),X=e=>{var t,n,l;e||null==(l=null==(n=null==(t=b.value)?void 0:t.popperRef)?void 0:n.popperInstanceRef)||l.destroy()},Q=()=>{"hover"===i.props.menuTrigger&&"horizontal"===i.props.mode||i.props.collapse&&"vertical"===i.props.mode||e.disabled||i.handleSubMenuClick({index:e.index,indexPath:o.value,active:F.value})},U=(t,n=J.value)=>{var l;"focus"!==t.type&&("click"===i.props.menuTrigger&&"horizontal"===i.props.mode||!i.props.collapse&&"vertical"===i.props.mode||e.disabled?c.mouseInChild.value=!0:(c.mouseInChild.value=!0,null==v||v(),({stop:v}=j((()=>{i.openMenu(e.index,o.value)}),n)),D.value&&(null==(l=s.value.vnode.el)||l.dispatchEvent(new MouseEvent("mouseenter")))))},ne=(t=!1)=>{var n;"click"===i.props.menuTrigger&&"horizontal"===i.props.mode||!i.props.collapse&&"vertical"===i.props.mode?c.mouseInChild.value=!1:(null==v||v(),c.mouseInChild.value=!1,({stop:v}=j((()=>!h.value&&i.closeMenu(e.index,o.value)),K.value)),D.value&&t&&(null==(n=c.handleMouseleave)||n.call(c,!0)))};S((()=>i.props.collapse),(e=>X(Boolean(e))));{const e=e=>{p.value[e.index]=e},t=e=>{delete p.value[e.index]};k("subMenu:".concat(l.uid),{addSubMenu:e,removeSubMenu:t,handleMouseleave:ne,mouseInChild:h,level:c.level+1})}return n({opened:R}),E((()=>{i.addSubMenu(Y),c.addSubMenu(Y)})),O((()=>{c.removeSubMenu(Y),i.removeSubMenu(Y)})),()=>{var n;const a=[null==(n=t.title)?void 0:n.call(t),w(N,{class:r.e("icon-arrow"),style:{transform:R.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&i.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>T($.value)?w(l.appContext.components[$.value]):w($.value)})],o=i.isMenuPopup?w(te,{ref:b,visible:R.value,effect:"light",pure:!0,offset:Z.value,showArrow:!1,persistent:!0,popperClass:H.value,placement:L.value,teleported:D.value,fallbackPlacements:q.value,transition:_.value,gpuAcceleration:!1},{content:()=>{var e;return w("div",{class:[u.m(V.value),u.m("popup-container"),H.value],onMouseenter:e=>U(e,100),onMouseleave:()=>ne(!0),onFocus:e=>U(e,100)},[w("ul",{class:[u.b(),u.m("popup"),u.m("popup-".concat(L.value))],style:G.value},[null==(e=t.default)?void 0:e.call(t)])])},default:()=>w("div",{class:r.e("title"),onClick:Q},a)}):w(P,{},[w("div",{class:r.e("title"),ref:f,onClick:Q},a),w(ee,{},{default:()=>{var e;return A(w("ul",{role:"menu",class:[u.b(),u.m("inline")],style:G.value},[null==(e=t.default)?void 0:e.call(t)]),[[B,R.value]])}})]);return w("li",{class:[r.b(),r.is("active",F.value),r.is("opened",R.value),r.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:R.value,onMouseenter:U,onMouseleave:()=>ne(),onFocus:U},[o])}}});const ve=f({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:L(Array),default:()=>$([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:b,default:()=>W},popperEffect:{type:L(String),default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),me=e=>Array.isArray(e)&&e.every((e=>T(e)));var he=l({name:"ElMenu",props:ve,emits:{close:(e,t)=>T(e)&&me(t),open:(e,t)=>T(e)&&me(t),select:(e,t,n,l)=>T(e)&&me(t)&&R(n)&&(void 0===l||l instanceof Promise)},setup(e,{emit:t,slots:n,expose:l}){const o=z(),s=o.appContext.config.globalProperties.$router,u=g(),r=a("menu"),i=a("sub-menu"),c=g(-1),d=g(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),p=g(e.defaultActive),v=g({}),h=g({}),f=m((()=>"horizontal"===e.mode||"vertical"===e.mode&&e.collapse)),b=(n,l)=>{d.value.includes(n)||(e.uniqueOpened&&(d.value=d.value.filter((e=>l.includes(e)))),d.value.push(n),t("open",n,l))},x=e=>{const t=d.value.indexOf(e);-1!==t&&d.value.splice(t,1)},M=(e,n)=>{x(e),t("close",e,n)},y=({index:e,indexPath:t})=>{d.value.includes(e)?M(e,t):b(e,t)},I=n=>{("horizontal"===e.mode||e.collapse)&&(d.value=[]);const{index:l,indexPath:a}=n;if(!F(l)&&!F(a))if(e.router&&s){const e=n.route||l,o=s.push(e).then((e=>(e||(p.value=l),e)));t("select",l,a,{index:l,indexPath:a,route:e},o)}else p.value=l,t("select",l,a,{index:l,indexPath:a})},O=()=>{var e,t;if(!u.value)return-1;const n=Array.from(null!=(t=null==(e=u.value)?void 0:e.childNodes)?t:[]).filter((e=>"#comment"!==e.nodeName&&("#text"!==e.nodeName||e.nodeValue))),l=getComputedStyle(u.value),a=Number.parseInt(l.paddingLeft,10),o=Number.parseInt(l.paddingRight,10),s=u.value.clientWidth-a-o;let r=0,i=0;return n.forEach(((e,t)=>{r+=(e=>{const t=getComputedStyle(e),n=Number.parseInt(t.marginLeft,10),l=Number.parseInt(t.marginRight,10);return e.offsetWidth+n+l||0})(e),r<=s-64&&(i=t+1)})),i===n.length?-1:i};let T=!0;const B=()=>{if(c.value===O())return;const e=()=>{c.value=-1,V((()=>{c.value=O()}))};T?e():((e,t=33.34)=>{let n;return()=>{n&&clearTimeout(n),n=setTimeout((()=>{e()}),t)}})(e)(),T=!1};let P;S((()=>e.defaultActive),(t=>{v.value[t]||(p.value=""),(t=>{const n=v.value,l=n[t]||p.value&&n[p.value]||n[e.defaultActive];p.value=l?l.index:t})(t)})),S((()=>e.collapse),(e=>{e&&(d.value=[])})),S(v.value,(()=>{const t=p.value&&v.value[p.value];if(!t||"horizontal"===e.mode||e.collapse)return;t.indexPath.forEach((e=>{const t=h.value[e];t&&b(e,t.indexPath)}))})),D((()=>{"horizontal"===e.mode&&e.ellipsis?P=_(u,B).stop:null==P||P()}));const j=g(!1);{const t=e=>{h.value[e.index]=e},n=e=>{delete h.value[e.index]},l=e=>{v.value[e.index]=e},a=e=>{delete v.value[e.index]};k("rootMenu",C({props:e,openedMenus:d,items:v,subMenus:h,activeIndex:p,isMenuPopup:f,addMenuItem:l,removeMenuItem:a,addSubMenu:t,removeSubMenu:n,openMenu:b,closeMenu:M,handleMenuItemClick:I,handleSubMenuClick:y})),k("subMenu:".concat(o.uid),{addSubMenu:t,removeSubMenu:n,mouseInChild:j,level:0})}E((()=>{"horizontal"===e.mode&&new oe(o.vnode.el,r.namespace.value)}));l({open:e=>{const{indexPath:t}=h.value[e];t.forEach((e=>b(e,t)))},close:x,handleResize:B});return()=>{var l,a;let o=null!=(a=null==(l=n.default)?void 0:l.call(n))?a:[];const s=[];if("horizontal"===e.mode&&u.value){const t=q(o),n=-1===c.value?t:t.slice(0,c.value),l=-1===c.value?[]:t.slice(c.value);(null==l?void 0:l.length)&&e.ellipsis&&(o=n,s.push(w(pe,{index:"sub-menu-more",class:i.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>w(N,{class:i.e("icon-more")},{default:()=>w(e.ellipsisIcon)}),default:()=>l})))}const p=ie(e,0),v=e.closeOnClickOutside?[[ne,()=>{d.value.length&&(j.value||(d.value.forEach((e=>{return t("close",e,(n=e,h.value[n].indexPath));var n})),d.value=[]))}]]:[],m=A(w("ul",{key:String(e.collapse),role:"menubar",ref:u,style:p.value,class:{[r.b()]:!0,[r.m(e.mode)]:!0,[r.m("collapse")]:e.collapse}},[...o,...s]),v);return e.collapseTransition&&"vertical"===e.mode?w(se,(()=>m)):m}}});const fe=f({index:{type:L([String,null]),default:null},route:{type:L([String,Object])},disabled:Boolean}),be="ElMenuItem";var xe=n(l({name:be,components:{ElTooltip:te},props:fe,emits:{click:e=>T(e.index)&&Array.isArray(e.indexPath)},setup(e,{emit:t}){const n=z(),l=x("rootMenu"),o=a("menu"),s=a("menu-item");l||M(be,"can not inject root menu");const{parentMenu:u,indexPath:r}=ue(n,Y(e,"index")),i=x("subMenu:".concat(u.value.uid));i||M(be,"can not inject sub menu");const c=m((()=>e.index===l.activeIndex)),d=C({index:e.index,indexPath:r,active:c});return E((()=>{i.addSubMenu(d),l.addMenuItem(d)})),O((()=>{i.removeSubMenu(d),l.removeMenuItem(d)})),{parentMenu:u,rootMenu:l,active:c,nsMenu:o,nsMenuItem:s,handleClick:()=>{e.disabled||(l.handleMenuItemClick({index:e.index,indexPath:r.value,route:e.route}),t("click",d))}}}}),[["render",function(e,t,n,l,a,i){const c=G("el-tooltip");return o(),Z("li",{class:J([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:e.handleClick},["ElMenu"===e.parentMenu.type.name&&e.rootMenu.props.collapse&&e.$slots.title?(o(),s(c,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:u((()=>[r(e.$slots,"title")])),default:u((()=>[H("div",{class:J(e.nsMenu.be("tooltip","trigger"))},[r(e.$slots,"default")],2)])),_:3},8,["effect"])):(o(),Z(P,{key:1},[r(e.$slots,"default"),r(e.$slots,"title")],64))],10,["onClick"])}],["__file","menu-item.vue"]]);var Me=n(l({name:"ElMenuItemGroup",props:{title:String},setup:()=>({ns:a("menu-item-group")})}),[["render",function(e,t,n,l,a,s){return o(),Z("li",{class:J(e.ns.b())},[H("div",{class:J(e.ns.e("title"))},[e.$slots.title?r(e.$slots,"title",{key:1}):(o(),Z(P,{key:0},[K(X(e.title),1)],64))],2),H("ul",null,[r(e.$slots,"default")])],2)}],["__file","menu-item-group.vue"]]);const ge=Q(he,{MenuItem:xe,MenuItemGroup:Me,SubMenu:pe}),ye=U(xe);U(Me);const Ie=U(pe);export{Ie as E,ye as a,ge as b};
