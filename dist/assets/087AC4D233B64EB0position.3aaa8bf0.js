/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{aW as t}from"./087AC4D233B64EB0index.70d09b05.js";const e=(e,n)=>{if(!t||!e||!n)return!1;const i=e.getBoundingClientRect();let o;return o=n instanceof Element?n.getBoundingClientRect():{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},i.top<o.bottom&&i.bottom>o.top&&i.right>o.left&&i.left<o.right},n=t=>{let e,n;return"touchend"===t.type?(n=t.changedTouches[0].clientY,e=t.changedTouches[0].clientX):t.type.startsWith("touch")?(n=t.touches[0].clientY,e=t.touches[0].clientX):(n=t.clientY,e=t.clientX),{clientX:e,clientY:n}};export{n as g,e as i};
