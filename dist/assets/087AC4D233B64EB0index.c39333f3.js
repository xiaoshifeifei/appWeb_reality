/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{ba as e,ab as t,F as n,ac as o,T as r,V as a,a0 as i,aW as s,aA as l,G as u,U as p,a as f,X as c,bb as d,bc as v,bd as g,be as m,bf as b,C as h,R as y,z as w,x,B as O,K as R,y as A,a8 as E,o as T,c as C,n as S,H as k,bg as B,a2 as M,bh as j,aM as P,O as F,bi as L,bj as D,d as _,bk as H,bl as I,bm as W,h as q,w as z,bn as N,e as U,b4 as $,bo as V,aE as K,bp as Z,L as X,aY as Y,az as G,bq as J,a6 as Q,a5 as ee,br as te,aH as ne,bs as oe,bt as re,t as ae}from"./087AC4D233B64EB0index.70d09b05.js";import{E as ie}from"./087AC4D233B64EB0index.a54c8ec8.js";const se=(e,t,{checkForDefaultPrevented:n=!0}={})=>o=>{const r=null==e?void 0:e(o);if(!1===n||!r)return null==t?void 0:t(o)},le=e=>t=>"mouse"===t.pointerType?e(t):void 0;function ue(e){return void 0===e}const pe=e({type:t(Boolean),default:null}),fe=e({type:t(Function)}),ce=e=>{const t="update:".concat(e),u="onUpdate:".concat(e),p=[t];return{useModelToggle:({indicator:p,toggleReason:f,shouldHideWhenRouteChanges:c,shouldProceed:d,onShow:v,onHide:g})=>{const m=i(),{emit:b}=m,h=m.props,y=n((()=>o(h[u]))),w=n((()=>null===h[e])),x=e=>{!0!==p.value&&(p.value=!0,f&&(f.value=e),o(v)&&v(e))},O=e=>{!1!==p.value&&(p.value=!1,f&&(f.value=e),o(g)&&g(e))},R=e=>{if(!0===h.disabled||o(d)&&!d())return;const n=y.value&&s;n&&b(t,!0),!w.value&&n||x(e)},A=e=>{if(!0===h.disabled||!s)return;const n=y.value&&s;n&&b(t,!1),!w.value&&n||O(e)},E=e=>{l(e)&&(h.disabled&&e?y.value&&b(t,!1):p.value!==e&&(e?x():O()))};return r((()=>h[e]),E),c&&void 0!==m.appContext.config.globalProperties.$route&&r((()=>({...m.proxy.$route})),(()=>{c.value&&p.value&&A()})),a((()=>{E(h[e])})),{hide:A,show:R,toggle:()=>{p.value?A():R()},hasUpdateHandler:y}},useModelToggleProps:{[e]:pe,[u]:fe},useModelToggleEmits:p}};ce("modelValue");var de="top",ve="bottom",ge="right",me="left",be="auto",he=[de,ve,ge,me],ye="start",we="end",xe="clippingParents",Oe="viewport",Re="popper",Ae="reference",Ee=he.reduce((function(e,t){return e.concat([t+"-"+ye,t+"-"+we])}),[]),Te=[].concat(he,[be]).reduce((function(e,t){return e.concat([t,t+"-"+ye,t+"-"+we])}),[]),Ce=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Se(e){return e?(e.nodeName||"").toLowerCase():null}function ke(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Be(e){return e instanceof ke(e).Element||e instanceof Element}function Me(e){return e instanceof ke(e).HTMLElement||e instanceof HTMLElement}function je(e){return"undefined"!=typeof ShadowRoot&&(e instanceof ke(e).ShadowRoot||e instanceof ShadowRoot)}var Pe={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];!Me(r)||!Se(r)||(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});!Me(o)||!Se(o)||(Object.assign(o.style,a),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};function Fe(e){return e.split("-")[0]}var Le=Math.max,De=Math.min,_e=Math.round;function He(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(Me(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=_e(n.width)/i||1),a>0&&(r=_e(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function Ie(e){var t=He(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function We(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&je(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function qe(e){return ke(e).getComputedStyle(e)}function ze(e){return["table","td","th"].indexOf(Se(e))>=0}function Ne(e){return((Be(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ue(e){return"html"===Se(e)?e:e.assignedSlot||e.parentNode||(je(e)?e.host:null)||Ne(e)}function $e(e){return Me(e)&&"fixed"!==qe(e).position?e.offsetParent:null}function Ve(e){for(var t=ke(e),n=$e(e);n&&ze(n)&&"static"===qe(n).position;)n=$e(n);return n&&("html"===Se(n)||"body"===Se(n)&&"static"===qe(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&Me(e)&&"fixed"===qe(e).position)return null;var n=Ue(e);for(je(n)&&(n=n.host);Me(n)&&["html","body"].indexOf(Se(n))<0;){var o=qe(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}function Ke(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ze(e,t,n){return Le(e,De(t,n))}function Xe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Ye(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var Ge={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,s=Fe(n.placement),l=Ke(s),u=[me,ge].indexOf(s)>=0?"height":"width";if(a&&i){var p=function(e,t){return Xe("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Ye(e,he))}(r.padding,n),f=Ie(a),c="y"===l?de:me,d="y"===l?ve:ge,v=n.rects.reference[u]+n.rects.reference[l]-i[l]-n.rects.popper[u],g=i[l]-n.rects.reference[l],m=Ve(a),b=m?"y"===l?m.clientHeight||0:m.clientWidth||0:0,h=v/2-g/2,y=p[c],w=b-f[u]-p[d],x=b/2-f[u]/2+h,O=Ze(y,x,w),R=l;n.modifiersData[o]=((t={})[R]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"==typeof o&&!(o=t.elements.popper.querySelector(o))||!We(t.elements.popper,o)||(t.elements.arrow=o))},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Je(e){return e.split("-")[1]}var Qe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function et(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,p=e.roundOffsets,f=e.isFixed,c=i.x,d=void 0===c?0:c,v=i.y,g=void 0===v?0:v,m="function"==typeof p?p({x:d,y:g}):{x:d,y:g};d=m.x,g=m.y;var b=i.hasOwnProperty("x"),h=i.hasOwnProperty("y"),y=me,w=de,x=window;if(u){var O=Ve(n),R="clientHeight",A="clientWidth";if(O===ke(n)&&("static"!==qe(O=Ne(n)).position&&"absolute"===s&&(R="scrollHeight",A="scrollWidth")),r===de||(r===me||r===ge)&&a===we)w=ve,g-=(f&&O===x&&x.visualViewport?x.visualViewport.height:O[R])-o.height,g*=l?1:-1;if(r===me||(r===de||r===ve)&&a===we)y=ge,d-=(f&&O===x&&x.visualViewport?x.visualViewport.width:O[A])-o.width,d*=l?1:-1}var E,T=Object.assign({position:s},u&&Qe),C=!0===p?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:_e(t*o)/o||0,y:_e(n*o)/o||0}}({x:d,y:g}):{x:d,y:g};return d=C.x,g=C.y,l?Object.assign({},T,((E={})[w]=h?"0":"",E[y]=b?"0":"",E.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+g+"px)":"translate3d("+d+"px, "+g+"px, 0)",E)):Object.assign({},T,((t={})[w]=h?g+"px":"",t[y]=b?d+"px":"",t.transform="",t))}var tt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,a=n.adaptive,i=void 0===a||a,s=n.roundOffsets,l=void 0===s||s,u={placement:Fe(t.placement),variation:Je(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,et(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,et(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},nt={passive:!0};var ot={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=void 0===r||r,i=o.resize,s=void 0===i||i,l=ke(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,nt)})),s&&l.addEventListener("resize",n.update,nt),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,nt)})),s&&l.removeEventListener("resize",n.update,nt)}},data:{}},rt={left:"right",right:"left",bottom:"top",top:"bottom"};function at(e){return e.replace(/left|right|bottom|top/g,(function(e){return rt[e]}))}var it={start:"end",end:"start"};function st(e){return e.replace(/start|end/g,(function(e){return it[e]}))}function lt(e){var t=ke(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ut(e){return He(Ne(e)).left+lt(e).scrollLeft}function pt(e){var t=qe(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function ft(e){return["html","body","#document"].indexOf(Se(e))>=0?e.ownerDocument.body:Me(e)&&pt(e)?e:ft(Ue(e))}function ct(e,t){var n;void 0===t&&(t=[]);var o=ft(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),a=ke(o),i=r?[a].concat(a.visualViewport||[],pt(o)?o:[]):o,s=t.concat(i);return r?s:s.concat(ct(Ue(i)))}function dt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function vt(e,t){return t===Oe?dt(function(e){var t=ke(e),n=Ne(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,s=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,s=o.offsetTop)),{width:r,height:a,x:i+ut(e),y:s}}(e)):Be(t)?function(e){var t=He(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):dt(function(e){var t,n=Ne(e),o=lt(e),r=null==(t=e.ownerDocument)?void 0:t.body,a=Le(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=Le(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+ut(e),l=-o.scrollTop;return"rtl"===qe(r||n).direction&&(s+=Le(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}(Ne(e)))}function gt(e,t,n){var o="clippingParents"===t?function(e){var t=ct(Ue(e)),n=["absolute","fixed"].indexOf(qe(e).position)>=0&&Me(e)?Ve(e):e;return Be(n)?t.filter((function(e){return Be(e)&&We(e,n)&&"body"!==Se(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce((function(t,n){var o=vt(e,n);return t.top=Le(o.top,t.top),t.right=De(o.right,t.right),t.bottom=De(o.bottom,t.bottom),t.left=Le(o.left,t.left),t}),vt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function mt(e){var t,n=e.reference,o=e.element,r=e.placement,a=r?Fe(r):null,i=r?Je(r):null,s=n.x+n.width/2-o.width/2,l=n.y+n.height/2-o.height/2;switch(a){case de:t={x:s,y:n.y-o.height};break;case ve:t={x:s,y:n.y+n.height};break;case ge:t={x:n.x+n.width,y:l};break;case me:t={x:n.x-o.width,y:l};break;default:t={x:n.x,y:n.y}}var u=a?Ke(a):null;if(null!=u){var p="y"===u?"height":"width";switch(i){case ye:t[u]=t[u]-(n[p]/2-o[p]/2);break;case we:t[u]=t[u]+(n[p]/2-o[p]/2)}}return t}function bt(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,a=n.boundary,i=void 0===a?xe:a,s=n.rootBoundary,l=void 0===s?Oe:s,u=n.elementContext,p=void 0===u?Re:u,f=n.altBoundary,c=void 0!==f&&f,d=n.padding,v=void 0===d?0:d,g=Xe("number"!=typeof v?v:Ye(v,he)),m=p===Re?Ae:Re,b=e.rects.popper,h=e.elements[c?m:p],y=gt(Be(h)?h:h.contextElement||Ne(e.elements.popper),i,l),w=He(e.elements.reference),x=mt({reference:w,element:b,strategy:"absolute",placement:r}),O=dt(Object.assign({},b,x)),R=p===Re?O:w,A={top:y.top-R.top+g.top,bottom:R.bottom-y.bottom+g.bottom,left:y.left-R.left+g.left,right:R.right-y.right+g.right},E=e.modifiersData.offset;if(p===Re&&E){var T=E[r];Object.keys(A).forEach((function(e){var t=[ge,ve].indexOf(e)>=0?1:-1,n=[de,ve].indexOf(e)>=0?"y":"x";A[e]+=T[n]*t}))}return A}var ht={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0===i||i,l=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,c=n.altBoundary,d=n.flipVariations,v=void 0===d||d,g=n.allowedAutoPlacements,m=t.options.placement,b=Fe(m),h=l||(b===m||!v?[at(m)]:function(e){if(Fe(e)===be)return[];var t=at(e);return[st(e),t,st(t)]}(m)),y=[m].concat(h).reduce((function(e,n){return e.concat(Fe(n)===be?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,u=void 0===l?Te:l,p=Je(o),f=p?s?Ee:Ee.filter((function(e){return Je(e)===p})):he,c=f.filter((function(e){return u.indexOf(e)>=0}));0===c.length&&(c=f);var d=c.reduce((function(t,n){return t[n]=bt(e,{placement:n,boundary:r,rootBoundary:a,padding:i})[Fe(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:v,allowedAutoPlacements:g}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,R=!0,A=y[0],E=0;E<y.length;E++){var T=y[E],C=Fe(T),S=Je(T)===ye,k=[de,ve].indexOf(C)>=0,B=k?"width":"height",M=bt(t,{placement:T,boundary:p,rootBoundary:f,altBoundary:c,padding:u}),j=k?S?ge:me:S?ve:de;w[B]>x[B]&&(j=at(j));var P=at(j),F=[];if(a&&F.push(M[C]<=0),s&&F.push(M[j]<=0,M[P]<=0),F.every((function(e){return e}))){A=T,R=!1;break}O.set(T,F)}if(R)for(var L=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},D=v?3:1;D>0;D--){if("break"===L(D))break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function yt(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function wt(e){return[de,ge,ve,me].some((function(t){return e[t]>=0}))}var xt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=bt(t,{elementContext:"reference"}),s=bt(t,{altBoundary:!0}),l=yt(i,o),u=yt(s,r,a),p=wt(l),f=wt(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}};var Ot={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=void 0===r?[0,0]:r,i=Te.reduce((function(e,n){return e[n]=function(e,t,n){var o=Fe(e),r=[me,de].indexOf(o)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[me,ge].indexOf(o)>=0?{x:s,y:i}:{x:i,y:s}}(n,t.rects,a),e}),{}),s=i[t.placement],l=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=i}};var Rt={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=mt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var At={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=void 0===r||r,i=n.altAxis,s=void 0!==i&&i,l=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,c=n.tether,d=void 0===c||c,v=n.tetherOffset,g=void 0===v?0:v,m=bt(t,{boundary:l,rootBoundary:u,padding:f,altBoundary:p}),b=Fe(t.placement),h=Je(t.placement),y=!h,w=Ke(b),x=function(e){return"x"===e?"y":"x"}(w),O=t.modifiersData.popperOffsets,R=t.rects.reference,A=t.rects.popper,E="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,T="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(O){if(a){var k,B="y"===w?de:me,M="y"===w?ve:ge,j="y"===w?"height":"width",P=O[w],F=P+m[B],L=P-m[M],D=d?-A[j]/2:0,_=h===ye?R[j]:A[j],H=h===ye?-A[j]:-R[j],I=t.elements.arrow,W=d&&I?Ie(I):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=q[B],N=q[M],U=Ze(0,R[j],W[j]),$=y?R[j]/2-D-U-z-T.mainAxis:_-U-z-T.mainAxis,V=y?-R[j]/2+D+U+N+T.mainAxis:H+U+N+T.mainAxis,K=t.elements.arrow&&Ve(t.elements.arrow),Z=K?"y"===w?K.clientTop||0:K.clientLeft||0:0,X=null!=(k=null==C?void 0:C[w])?k:0,Y=P+V-X,G=Ze(d?De(F,P+$-X-Z):F,P,d?Le(L,Y):L);O[w]=G,S[w]=G-P}if(s){var J,Q="x"===w?de:me,ee="x"===w?ve:ge,te=O[x],ne="y"===x?"height":"width",oe=te+m[Q],re=te-m[ee],ae=-1!==[de,me].indexOf(b),ie=null!=(J=null==C?void 0:C[x])?J:0,se=ae?oe:te-R[ne]-A[ne]-ie+T.altAxis,le=ae?te+R[ne]+A[ne]-ie-T.altAxis:re,ue=d&&ae?function(e,t,n){var o=Ze(e,t,n);return o>n?n:o}(se,te,le):Ze(d?se:oe,te,d?le:re);O[x]=ue,S[x]=ue-te}t.modifiersData[o]=S}},requiresIfExists:["offset"]};function Et(e,t,n){void 0===n&&(n=!1);var o=Me(t),r=Me(t)&&function(e){var t=e.getBoundingClientRect(),n=_e(t.width)/e.offsetWidth||1,o=_e(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),a=Ne(t),i=He(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(o||!o&&!n)&&(("body"!==Se(t)||pt(a))&&(s=function(e){return e!==ke(e)&&Me(e)?function(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}(e):lt(e)}(t)),Me(t)?((l=He(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=ut(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function Tt(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}function Ct(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var St={placement:"bottom",modifiers:[],strategy:"absolute"};function kt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Bt(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,a=void 0===r?St:r;return function(e,t,n){void 0===n&&(n=a);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},St,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},i=[],s=!1,l={state:r,setOptions:function(n){var s="function"==typeof n?n(r.options):n;u(),r.options=Object.assign({},a,r.options,s),r.scrollParents={reference:Be(e)?ct(e):e.contextElement?ct(e.contextElement):[],popper:ct(t)};var p=function(e){var t=Tt(e);return Ce.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,r.options.modifiers)));return r.orderedModifiers=p.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,a=e.effect;if("function"==typeof a){var s=a({state:r,name:t,instance:l,options:o}),u=function(){};i.push(s||u)}})),l.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,n=e.popper;if(kt(t,n)){r.rects={reference:Et(t,Ve(n),"fixed"===r.options.strategy),popper:Ie(n)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<r.orderedModifiers.length;o++)if(!0!==r.reset){var a=r.orderedModifiers[o],i=a.fn,u=a.options,p=void 0===u?{}:u,f=a.name;"function"==typeof i&&(r=i({state:r,options:p,name:f,instance:l})||r)}else r.reset=!1,o=-1}}},update:Ct((function(){return new Promise((function(e){l.forceUpdate(),e(r)}))})),destroy:function(){u(),s=!0}};if(!kt(e,t))return l;function u(){i.forEach((function(e){return e()})),i=[]}return l.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),l}}Bt(),Bt({defaultModifiers:[ot,Rt,tt,Pe]});var Mt=Bt({defaultModifiers:[ot,Rt,tt,Pe,Ot,ht,At,Ge,xt]});const jt=(e,t,o={})=>{const a={name:"updateState",enabled:!0,phase:"write",fn:({state:e})=>{const t=function(e){const t=Object.keys(e.elements),n=d(t.map((t=>[t,e.styles[t]||{}]))),o=d(t.map((t=>[t,e.attributes[t]])));return{styles:n,attributes:o}}(e);Object.assign(l.value,t)},requires:["computeStyles"]},i=n((()=>{const{onFirstUpdate:e,placement:t,strategy:n,modifiers:r}=u(o);return{onFirstUpdate:e,placement:t||"bottom",strategy:n||"absolute",modifiers:[...r||[],a,{name:"applyStyles",enabled:!1}]}})),s=p(),l=f({styles:{popper:{position:u(i).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),v=()=>{s.value&&(s.value.destroy(),s.value=void 0)};return r(i,(e=>{const t=u(s);t&&t.setOptions(e)}),{deep:!0}),r([e,t],(([e,t])=>{v(),e&&t&&(s.value=Mt(e,t,u(i)))})),c((()=>{v()})),{state:n((()=>{var e;return{...(null==(e=u(s))?void 0:e.state)||{}}})),styles:n((()=>u(l).styles)),attributes:n((()=>u(l).attributes)),update:()=>{var e;return null==(e=u(s))?void 0:e.update()},forceUpdate:()=>{var e;return null==(e=u(s))?void 0:e.forceUpdate()},instanceRef:n((()=>u(s)))}};function Pt(){let e;const t=()=>window.clearTimeout(e);return v((()=>t())),{registerTimeout:(n,o)=>{t(),e=window.setTimeout(n,o)},cancelTimeout:t}}let Ft;const Lt=()=>{const e=m(),t=b(),o=n((()=>"".concat(e.value,"-popper-container-").concat(t.prefix))),r=n((()=>"#".concat(o.value)));return{id:o,selector:r}},Dt=()=>{const{id:e,selector:t}=Lt();return g((()=>{s&&(Ft||document.body.querySelector(t.value)||(Ft=(e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t})(e.value)))})),{id:e,selector:t}},_t=h({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Ht=Symbol("elForwardRef"),It=Symbol("popper"),Wt=Symbol("popperContent"),qt=h({role:{type:String,values:["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],default:"tooltip"}}),zt=x({name:"ElPopper",inheritAttrs:!1});var Nt=R(x({...zt,props:qt,setup(e,{expose:t}){const o=e,r={triggerRef:f(),popperInstanceRef:f(),contentRef:f(),referenceRef:f(),role:n((()=>o.role))};return t(r),w(It,r),(e,t)=>O(e.$slots,"default")}}),[["__file","popper.vue"]]);const Ut=h({arrowOffset:{type:Number,default:5}}),$t=x({name:"ElPopperArrow",inheritAttrs:!1});var Vt=R(x({...$t,props:Ut,setup(e,{expose:t}){const n=e,o=A("popper"),{arrowOffset:a,arrowRef:i,arrowStyle:s}=E(Wt,void 0);return r((()=>n.arrowOffset),(e=>{a.value=e})),c((()=>{i.value=void 0})),t({arrowRef:i}),(e,t)=>(T(),C("span",{ref_key:"arrowRef",ref:i,class:S(u(o).e("arrow")),style:k(u(s)),"data-popper-arrow":""},null,6))}}),[["__file","arrow.vue"]]);const Kt=x({name:"ElOnlyChild",setup(e,{slots:t,attrs:n}){var o;const r=E(Ht),a=(i=null!=(o=null==r?void 0:r.setForwardRef)?o:B,{mounted(e){i(e)},updated(e){i(e)},unmounted(){i(null)}});var i;return()=>{var e;const o=null==(e=t.default)?void 0:e.call(t,n);if(!o)return null;if(o.length>1)return null;const r=Zt(o);return r?M(j(r,n),[[a]]):null}}});function Zt(e){if(!e)return null;const t=e;for(const n of t){if(P(n))switch(n.type){case D:continue;case L:case"svg":return Xt(n);case F:return Zt(n.children);default:return n}return Xt(n)}return null}function Xt(e){const t=A("only-child");return _("span",{class:t.e("content")},[e])}const Yt=h({virtualRef:{type:t(Object)},virtualTriggering:Boolean,onMouseenter:{type:t(Function)},onMouseleave:{type:t(Function)},onClick:{type:t(Function)},onKeydown:{type:t(Function)},onFocus:{type:t(Function)},onBlur:{type:t(Function)},onContextmenu:{type:t(Function)},id:String,open:Boolean}),Gt=x({name:"ElPopperTrigger",inheritAttrs:!1});var Jt=R(x({...Gt,props:Yt,setup(e,{expose:t}){const o=e,{role:i,triggerRef:s}=E(It,void 0);var l;l=s,w(Ht,{setForwardRef:e=>{l.value=e}});const p=n((()=>d.value?o.id:void 0)),f=n((()=>{if(i&&"tooltip"===i.value)return o.open&&o.id?o.id:void 0})),d=n((()=>{if(i&&"tooltip"!==i.value)return i.value})),v=n((()=>d.value?"".concat(o.open):void 0));let g;const m=["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"];return a((()=>{r((()=>o.virtualRef),(e=>{e&&(s.value=H(e))}),{immediate:!0}),r(s,((e,t)=>{null==g||g(),g=void 0,I(e)&&(m.forEach((n=>{var r;const a=o[n];a&&(e.addEventListener(n.slice(2).toLowerCase(),a),null==(r=null==t?void 0:t.removeEventListener)||r.call(t,n.slice(2).toLowerCase(),a))})),g=r([p,f,d,v],(t=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(((n,o)=>{W(t[o])?e.removeAttribute(n):e.setAttribute(n,t[o])}))}),{immediate:!0})),I(t)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((e=>t.removeAttribute(e)))}),{immediate:!0})})),c((()=>{if(null==g||g(),g=void 0,s.value&&I(s.value)){const e=s.value;m.forEach((t=>{const n=o[t];n&&e.removeEventListener(t.slice(2).toLowerCase(),n)})),s.value=void 0}})),t({triggerRef:s}),(e,t)=>e.virtualTriggering?U("v-if",!0):(T(),q(u(Kt),N({key:0},e.$attrs,{"aria-controls":u(p),"aria-describedby":u(f),"aria-expanded":u(v),"aria-haspopup":u(d)}),{default:z((()=>[O(e.$slots,"default")])),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}}),[["__file","trigger.vue"]]);const Qt=h({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:t(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Te,default:"bottom"},popperOptions:{type:t(Object),default:()=>({})},strategy:{type:String,values:["fixed","absolute"],default:"absolute"}}),en=h({...Qt,id:String,style:{type:t([String,Array,Object])},className:{type:t([String,Array,Object])},effect:{type:t(String),default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:t([String,Array,Object])},popperStyle:{type:t([String,Array,Object])},referenceEl:{type:t(Object)},triggerTargetEl:{type:t(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...$(["ariaLabel"])}),tn={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},nn=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...on(e),...t]};return function(e,t){t&&(e.modifiers=[...e.modifiers,...null!=t?t:[]])}(a,null==r?void 0:r.modifiers),a};function on(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,null!=t?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}const rn=e=>{const{popperInstanceRef:t,contentRef:o,triggerRef:i,role:l}=E(It,void 0),p=f(),c=f(),d=n((()=>({name:"eventListeners",enabled:!!e.visible}))),v=n((()=>{var e;const t=u(p),n=null!=(e=u(c))?e:0;return{name:"arrow",enabled:!ue(t),options:{element:t,padding:n}}})),g=n((()=>({onFirstUpdate:()=>{w()},...nn(e,[u(v),u(d)])}))),m=n((()=>(e=>{if(s)return H(e)})(e.referenceEl)||u(i))),{attributes:b,state:h,styles:y,update:w,forceUpdate:x,instanceRef:O}=jt(m,o,g);return r(O,(e=>t.value=e)),a((()=>{r((()=>{var e;return null==(e=u(m))?void 0:e.getBoundingClientRect()}),(()=>{w()}))})),{attributes:b,arrowRef:p,contentRef:o,instanceRef:O,state:h,styles:y,role:l,forceUpdate:x,update:w}},an=x({name:"ElPopperContent"});var sn=R(x({...an,props:en,emits:tn,setup(e,{expose:t,emit:o}){const i=e,{focusStartRef:s,trapped:l,onFocusAfterReleased:p,onFocusAfterTrapped:d,onFocusInTrap:v,onFocusoutPrevented:g,onReleaseRequested:m}=((e,t)=>{const n=f(!1),o=f();return{focusStartRef:o,trapped:n,onFocusAfterReleased:e=>{var n;"pointer"!==(null==(n=e.detail)?void 0:n.focusReason)&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:t=>{e.visible&&!n.value&&(t.target&&(o.value=t.target),n.value=!0)},onFocusoutPrevented:t=>{e.trapping||("pointer"===t.detail.focusReason&&t.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}})(i,o),{attributes:b,arrowRef:h,contentRef:x,styles:R,instanceRef:S,role:k,update:M}=rn(i),{ariaModal:j,arrowStyle:P,contentAttrs:F,contentClass:L,contentStyle:D,updateZIndex:H}=((e,{attributes:t,styles:o,role:r})=>{const{nextZIndex:a}=V(),i=A("popper"),s=n((()=>u(t).popper)),l=f(y(e.zIndex)?e.zIndex:a()),p=n((()=>[i.b(),i.is("pure",e.pure),i.is(e.effect),e.popperClass])),c=n((()=>[{zIndex:u(l)},u(o).popper,e.popperStyle||{}]));return{ariaModal:n((()=>"dialog"===r.value?"false":void 0)),arrowStyle:n((()=>u(o).arrow||{})),contentAttrs:s,contentClass:p,contentStyle:c,contentZIndex:l,updateZIndex:()=>{l.value=y(e.zIndex)?e.zIndex:a()}}})(i,{styles:R,attributes:b,role:k}),q=E(K,void 0),U=f();let $;w(Wt,{arrowStyle:P,arrowRef:h,arrowOffset:U}),q&&w(K,{...q,addInputId:B,removeInputId:B});const X=(e=!0)=>{M(),e&&H()},Y=()=>{X(!1),i.visible&&i.focusOnShow?l.value=!0:!1===i.visible&&(l.value=!1)};return a((()=>{r((()=>i.triggerTargetEl),((e,t)=>{null==$||$(),$=void 0;const n=u(e||x.value),o=u(t||x.value);I(n)&&($=r([k,()=>i.ariaLabel,j,()=>i.id],(e=>{["role","aria-label","aria-modal","id"].forEach(((t,o)=>{W(e[o])?n.removeAttribute(t):n.setAttribute(t,e[o])}))}),{immediate:!0})),o!==n&&I(o)&&["role","aria-label","aria-modal","id"].forEach((e=>{o.removeAttribute(e)}))}),{immediate:!0}),r((()=>i.visible),Y,{immediate:!0})})),c((()=>{null==$||$(),$=void 0})),t({popperContentRef:x,popperInstanceRef:S,updatePopper:X,contentStyle:D}),(e,t)=>(T(),C("div",N({ref_key:"contentRef",ref:x},u(F),{style:u(D),class:u(L),tabindex:"-1",onMouseenter:t=>e.$emit("mouseenter",t),onMouseleave:t=>e.$emit("mouseleave",t)}),[_(u(Z),{trapped:u(l),"trap-on-focus-in":!0,"focus-trap-el":u(x),"focus-start-el":u(s),onFocusAfterTrapped:u(d),onFocusAfterReleased:u(p),onFocusin:u(v),onFocusoutPrevented:u(g),onReleaseRequested:u(m)},{default:z((()=>[O(e.$slots,"default")])),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16,["onMouseenter","onMouseleave"]))}}),[["__file","content.vue"]]);const ln=X(Nt),un=Symbol("elTooltip"),pn=h({..._t,...en,appendTo:{type:t([String,Object])},content:{type:String,default:""},rawContent:Boolean,persistent:Boolean,visible:{type:t(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...$(["ariaLabel"])}),fn=h({...Yt,disabled:Boolean,trigger:{type:t([String,Array]),default:"hover"},triggerKeys:{type:t(Array),default:()=>[Y.enter,Y.space]}}),{useModelToggleProps:cn,useModelToggleEmits:dn,useModelToggle:vn}=ce("visible"),gn=h({...qt,...cn,...pn,...fn,...Ut,showArrow:{type:Boolean,default:!0}}),mn=[...dn,"before-show","before-hide","show","hide","open","close"],bn=(e,t,n)=>o=>{((e,t)=>G(e)?e.includes(t):e===t)(u(e),t)&&n(o)},hn=x({name:"ElTooltipTrigger"});var yn=R(x({...hn,props:fn,setup(e,{expose:t}){const n=e,o=A("tooltip"),{controlled:r,id:a,open:i,onOpen:s,onClose:l,onToggle:p}=E(un,void 0),c=f(null),d=()=>{if(u(r)||n.disabled)return!0},v=J(n,"trigger"),g=se(d,bn(v,"hover",s)),m=se(d,bn(v,"hover",l)),b=se(d,bn(v,"click",(e=>{0===e.button&&p(e)}))),h=se(d,bn(v,"focus",s)),y=se(d,bn(v,"focus",l)),w=se(d,bn(v,"contextmenu",(e=>{e.preventDefault(),p(e)}))),x=se(d,(e=>{const{code:t}=e;n.triggerKeys.includes(t)&&(e.preventDefault(),p(e))}));return t({triggerRef:c}),(e,t)=>(T(),q(u(Jt),{id:u(a),"virtual-ref":e.virtualRef,open:u(i),"virtual-triggering":e.virtualTriggering,class:S(u(o).e("trigger")),onBlur:u(y),onClick:u(b),onContextmenu:u(w),onFocus:u(h),onMouseenter:u(g),onMouseleave:u(m),onKeydown:u(x)},{default:z((()=>[O(e.$slots,"default")])),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}}),[["__file","trigger.vue"]]);const wn=x({name:"ElTooltipContent",inheritAttrs:!1});var xn=R(x({...wn,props:pn,setup(e,{expose:t}){const o=e,{selector:a}=Lt(),i=A("tooltip"),s=f(null);let l;const{controlled:p,id:d,open:v,trigger:g,onClose:m,onOpen:b,onShow:h,onHide:y,onBeforeShow:w,onBeforeHide:x}=E(un,void 0),R=n((()=>o.transition||"".concat(i.namespace.value,"-fade-in-linear"))),C=n((()=>o.persistent));c((()=>{null==l||l()}));const S=n((()=>!!u(C)||u(v))),k=n((()=>!o.disabled&&u(v))),B=n((()=>o.appendTo||a.value)),j=n((()=>{var e;return null!=(e=o.style)?e:{}})),P=n((()=>!u(v))),F=()=>{y()},L=()=>{if(u(p))return!0},D=se(L,(()=>{o.enterable&&"hover"===u(g)&&b()})),H=se(L,(()=>{"hover"===u(g)&&m()})),I=()=>{var e,t;null==(t=null==(e=s.value)?void 0:e.updatePopper)||t.call(e),null==w||w()},W=()=>{null==x||x()},$=()=>{h(),l=te(n((()=>{var e;return null==(e=s.value)?void 0:e.popperContentRef})),(()=>{if(u(p))return;"hover"!==u(g)&&m()}))},V=()=>{o.virtualTriggering||m()};return r((()=>u(v)),(e=>{e||null==l||l()}),{flush:"post"}),r((()=>o.content),(()=>{var e,t;null==(t=null==(e=s.value)?void 0:e.updatePopper)||t.call(e)})),t({contentRef:s}),(e,t)=>(T(),q(u(ie),{disabled:!e.teleported,to:u(B)},{default:z((()=>[_(Q,{name:u(R),onAfterLeave:F,onBeforeEnter:I,onAfterEnter:$,onBeforeLeave:W},{default:z((()=>[u(S)?M((T(),q(u(sn),N({key:0,id:u(d),ref_key:"contentRef",ref:s},e.$attrs,{"aria-label":e.ariaLabel,"aria-hidden":u(P),"boundaries-padding":e.boundariesPadding,"fallback-placements":e.fallbackPlacements,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,placement:e.placement,"popper-options":e.popperOptions,strategy:e.strategy,effect:e.effect,enterable:e.enterable,pure:e.pure,"popper-class":e.popperClass,"popper-style":[e.popperStyle,u(j)],"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,visible:u(k),"z-index":e.zIndex,onMouseenter:u(D),onMouseleave:u(H),onBlur:V,onClose:u(m)}),{default:z((()=>[O(e.$slots,"default")])),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[ee,u(k)]]):U("v-if",!0)])),_:3},8,["name"])])),_:3},8,["disabled","to"]))}}),[["__file","content.vue"]]);const On=x({name:"ElTooltip"});const Rn=X(R(x({...On,props:gn,emits:mn,setup(e,{expose:t,emit:o}){const a=e;Dt();const i=ne(),s=f(),p=f(),c=()=>{var e;const t=u(s);t&&(null==(e=t.popperInstanceRef)||e.update())},d=f(!1),v=f(),{show:g,hide:m,hasUpdateHandler:b}=vn({indicator:d,toggleReason:v}),{onOpen:h,onClose:x}=(({showAfter:e,hideAfter:t,autoClose:n,open:o,close:r})=>{const{registerTimeout:a}=Pt(),{registerTimeout:i,cancelTimeout:s}=Pt();return{onOpen:t=>{a((()=>{o(t);const e=u(n);y(e)&&e>0&&i((()=>{r(t)}),e)}),u(e))},onClose:e=>{s(),a((()=>{r(e)}),u(t))}}})({showAfter:J(a,"showAfter"),hideAfter:J(a,"hideAfter"),autoClose:J(a,"autoClose"),open:g,close:m}),R=n((()=>l(a.visible)&&!b.value));w(un,{controlled:R,id:i,open:oe(d),trigger:J(a,"trigger"),onOpen:e=>{h(e)},onClose:e=>{x(e)},onToggle:e=>{u(d)?x(e):h(e)},onShow:()=>{o("show",v.value)},onHide:()=>{o("hide",v.value)},onBeforeShow:()=>{o("before-show",v.value)},onBeforeHide:()=>{o("before-hide",v.value)},updatePopper:c}),r((()=>a.disabled),(e=>{e&&d.value&&(d.value=!1)}));return re((()=>d.value&&m())),t({popperRef:s,contentRef:p,isFocusInsideContent:e=>{var t,n;const o=null==(n=null==(t=p.value)?void 0:t.contentRef)?void 0:n.popperContentRef,r=(null==e?void 0:e.relatedTarget)||document.activeElement;return o&&o.contains(r)},updatePopper:c,onOpen:h,onClose:x,hide:m}),(e,t)=>(T(),q(u(ln),{ref_key:"popperRef",ref:s,role:e.role},{default:z((()=>[_(yn,{disabled:e.disabled,trigger:e.trigger,"trigger-keys":e.triggerKeys,"virtual-ref":e.virtualRef,"virtual-triggering":e.virtualTriggering},{default:z((()=>[e.$slots.default?O(e.$slots,"default",{key:0}):U("v-if",!0)])),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),_(xn,{ref_key:"contentRef",ref:p,"aria-label":e.ariaLabel,"boundaries-padding":e.boundariesPadding,content:e.content,disabled:e.disabled,effect:e.effect,enterable:e.enterable,"fallback-placements":e.fallbackPlacements,"hide-after":e.hideAfter,"gpu-acceleration":e.gpuAcceleration,offset:e.offset,persistent:e.persistent,"popper-class":e.popperClass,"popper-style":e.popperStyle,placement:e.placement,"popper-options":e.popperOptions,pure:e.pure,"raw-content":e.rawContent,"reference-el":e.referenceEl,"trigger-target-el":e.triggerTargetEl,"show-after":e.showAfter,strategy:e.strategy,teleported:e.teleported,transition:e.transition,"virtual-triggering":e.virtualTriggering,"z-index":e.zIndex,"append-to":e.appendTo},{default:z((()=>[O(e.$slots,"content",{},(()=>[e.rawContent?(T(),C("span",{key:0,innerHTML:e.content},null,8,["innerHTML"])):(T(),C("span",{key:1},ae(e.content),1))])),e.showArrow?(T(),q(u(Vt),{key:0,"arrow-offset":e.arrowOffset},null,8,["arrow-offset"])):U("v-if",!0)])),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])])),_:3},8,["role"]))}}),[["__file","tooltip.vue"]]));export{Rn as E,Kt as O,un as T,Te as a,fn as b,se as c,ue as i,pn as u,le as w};
