/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{U as e,Z as r,$ as t}from"./087AC4D233B64EB0index.70d09b05.js";const a=(a,i)=>{const l={},n=e([]);return{children:n,addChild:e=>{l[e.uid]=e,n.value=((e,a,i)=>r(e.subTree).filter((e=>{var r;return t(e)&&(null==(r=e.type)?void 0:r.name)===a&&!!e.component})).map((e=>e.component.uid)).map((e=>i[e])).filter((e=>!!e)))(a,i,l)},removeChild:e=>{delete l[e],n.value=n.value.filter((r=>r.uid!==e))}}};export{a as u};
