/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{V as n,aj as e,ca as t,cb as o,G as r,a0 as s}from"./087AC4D233B64EB0index.70d09b05.js";function i(n){return!!t()&&(o(n),!0)}function c(n){return"function"==typeof n?n():r(n)}const a="undefined"!=typeof window&&"undefined"!=typeof document;"undefined"!=typeof WorkerGlobalScope&&(globalThis,WorkerGlobalScope);const u=Object.prototype.toString,l=n=>"[object Object]"===u.call(n),f=()=>{};function p(n,e=200,t={}){return function(n,e){return function(...t){return new Promise(((o,r)=>{Promise.resolve(n((()=>e.apply(this,t)),{fn:e,thisArg:this,args:t})).then(o).catch(r)}))}}(function(n,e={}){let t,o,r=f;const s=n=>{clearTimeout(n),r(),r=f};return i=>{const a=c(n),u=c(e.maxWait);return t&&s(t),a<=0||void 0!==u&&u<=0?(o&&(s(o),o=null),Promise.resolve(i())):new Promise(((n,c)=>{r=e.rejectOnCancel?c:n,u&&!o&&(o=setTimeout((()=>{t&&s(t),o=null,n(i())}),u)),t=setTimeout((()=>{o&&s(o),o=null,n(i())}),a)}))}}(e,t),n)}function m(t,o=!0,r){const i=function(n){return n||s()}();i?n(t,r):o?t():e(t)}export{i as a,a as b,m as c,l as i,f as n,c as t,p as u};
