/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{k as t,g as e,s as r,b as n,a,n as o,c,i as b,S as s,d as i}from"./087AC4D233B64EB0_Uint8Array.b8c6af2c.js";import{bx as u,by as j,bz as f,bA as y,b9 as A,bB as l}from"./087AC4D233B64EB0index.70d09b05.js";import{c as p,k as v,g as d,a as m,b as w,d as g,e as x,i as B}from"./087AC4D233B64EB0_initCloneObject.073b420a.js";const S=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)u(r,e(t)),t=d(t);return r}:r;function O(t){return n(t,v,S)}var U=Object.prototype.hasOwnProperty;var E=/\w*$/;var I=j?j.prototype:void 0,h=I?I.valueOf:void 0;var D="[object Boolean]",C="[object Date]",F="[object Map]",M="[object Number]",k="[object RegExp]",N="[object Set]",P="[object String]",R="[object Symbol]",V="[object ArrayBuffer]",_="[object DataView]",z="[object Float32Array]",G="[object Float64Array]",L="[object Int8Array]",W="[object Int16Array]",$="[object Int32Array]",q="[object Uint8Array]",H="[object Uint8ClampedArray]",J="[object Uint16Array]",K="[object Uint32Array]";function Q(t,e,r){var n,a,o,c=t.constructor;switch(e){case V:return m(t);case D:case C:return new c(+t);case _:return function(t,e){var r=e?m(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case z:case G:case L:case W:case $:case q:case H:case J:case K:return w(t,r);case F:return new c;case M:case P:return new c(t);case k:return(o=new(a=t).constructor(a.source,E.exec(a))).lastIndex=a.lastIndex,o;case N:return new c;case R:return n=t,h?Object(h.call(n)):{}}}var T=o&&o.isMap;const X=T?c(T):function(t){return f(t)&&"[object Map]"==a(t)};var Y=o&&o.isSet;const Z=Y?c(Y):function(t){return f(t)&&"[object Set]"==a(t)};var tt="[object Arguments]",et="[object Function]",rt="[object Object]",nt={};function at(r,n,o,c,u,j){var f,d=1&n,m=2&n,w=4&n;if(o&&(f=u?o(r,c,u,j):o(r)),void 0!==f)return f;if(!y(r))return r;var E=A(r);if(E){if(f=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&U.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(r),!d)return g(r,f)}else{var I=a(r),h=I==et||"[object GeneratorFunction]"==I;if(b(r))return x(r,d);if(I==rt||I==tt||h&&!u){if(f=m||h?{}:B(r),!d)return m?function(t,e){return p(t,S(t),e)}(r,function(t,e){return t&&p(e,v(e),t)}(f,r)):function(t,r){return p(t,e(t),r)}(r,function(e,r){return e&&p(r,t(r),e)}(f,r))}else{if(!nt[I])return u?r:{};f=Q(r,I,d)}}j||(j=new s);var D=j.get(r);if(D)return D;j.set(r,f),Z(r)?r.forEach((function(t){f.add(at(t,n,o,t,r,j))})):X(r)&&r.forEach((function(t,e){f.set(e,at(t,n,o,e,r,j))}));var C=E?void 0:(w?m?O:i:m?v:t)(r);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););}(C||r,(function(t,e){C&&(t=r[e=t]),l(f,e,at(t,n,o,e,r,j))})),f}nt[tt]=nt["[object Array]"]=nt["[object ArrayBuffer]"]=nt["[object DataView]"]=nt["[object Boolean]"]=nt["[object Date]"]=nt["[object Float32Array]"]=nt["[object Float64Array]"]=nt["[object Int8Array]"]=nt["[object Int16Array]"]=nt["[object Int32Array]"]=nt["[object Map]"]=nt["[object Number]"]=nt[rt]=nt["[object RegExp]"]=nt["[object Set]"]=nt["[object String]"]=nt["[object Symbol]"]=nt["[object Uint8Array]"]=nt["[object Uint8ClampedArray]"]=nt["[object Uint16Array]"]=nt["[object Uint32Array]"]=!0,nt["[object Error]"]=nt[et]=nt["[object WeakMap]"]=!1;export{at as b};
