/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{ae as e,af as a,cP as t,u as l,av as s,a as o,F as r,ah as i,z as u,ad as n,o as d,c as p,d as m,w as c,O as f,P as v,G as h,h as B,e as x,n as b,H as y,b as w,J as A}from"./087AC4D233B64EB0index.70d09b05.js";/* empty css                                  *//* empty css                             *//* empty css                                *//* empty css                               */import g from"./087AC4D233B64EB0index.e97033a9.js";import{b as j}from"./087AC4D233B64EB0index.3f0c929c.js";import{E as C}from"./087AC4D233B64EB0index.86c76e0e.js";import"./087AC4D233B64EB0menuItem.2a994fe1.js";import"./087AC4D233B64EB0index.8862a37e.js";import"./087AC4D233B64EB0index.c39333f3.js";import"./087AC4D233B64EB0index.a54c8ec8.js";import"./087AC4D233B64EB0index.0adebf5a.js";import"./087AC4D233B64EB0asyncSubmenu.766249ce.js";const D={class:"h-full"},E={key:0,class:"bg-white h-[calc(100%-4px)] text-slate-700 dark:text-slate-300 mx-2 dark:bg-slate-900 flex items-center w-[calc(100vw-600px)] overflow-auto"},k=Object.assign({name:"GvaAside"},{__name:"combinationMode",props:{mode:{type:String,default:"normal"}},setup(k){const _=e(),{device:q,config:M}=a(_),z=t(),O=l(),S=s(),G=o(!1),L=o(""),P=r((()=>G.value?M.value.layout_side_collapsed_width:M.value.layout_side_width));i((()=>{L.value=z.meta.activeName||z.name})),i((()=>{"mobile"===q.value?G.value=!0:G.value=!1})),u("isCollapse",G);const F=(e,a,t,l)=>{var s,o;const r={},i={};if((null==(s=S.routeMap[e])?void 0:s.parameters)&&(null==(o=S.routeMap[e])||o.parameters.forEach((e=>{"query"===e.type?r[e.key]=e.value:i[e.key]=e.value}))),e!==z.name)if(e.indexOf("http://")>-1||e.indexOf("https://")>-1)window.open(e);else{if(!l)return void O.push({name:e,query:r,params:i});S.setLeftMenu(e)||O.push({name:e,query:r,params:i})}},H=()=>{G.value=!G.value};return(e,a)=>{const t=j,l=C,s=n("DArrowLeft"),o=A,r=n("DArrowRight");return d(),p("div",D,["head"===k.mode?(d(),p("div",E,[m(t,{"default-active":h(S).topActive,mode:"horizontal",class:"border-r-0 border-b-0 w-full flex gap-1 items-center box-border h-[calc(100%-1px)]","unique-opened":"",onSelect:a[0]||(a[0]=(e,a,t)=>F(e,0,0,!0))},{default:c((()=>[(d(!0),p(f,null,v(h(S).topMenu,(e=>(d(),p(f,null,[e.hidden?x("",!0):(d(),B(g,{key:e.name,"router-info":e,mode:"horizontal"},null,8,["router-info"]))],64)))),256))])),_:1},8,["default-active"])])):x("",!0),"normal"===k.mode?(d(),p("div",{key:1,class:b(["relative h-full bg-white text-slate-700 dark:text-slate-300 dark:bg-slate-900 border-r shadow dark:shadow-gray-700",G.value?"":"  px-2"]),style:y({width:P.value+"px"})},[m(l,null,{default:c((()=>[m(t,{collapse:G.value,"collapse-transition":!1,"default-active":L.value,class:"border-r-0 w-full","unique-opened":"",onSelect:a[1]||(a[1]=(e,a,t)=>F(e,0,0,!1))},{default:c((()=>[(d(!0),p(f,null,v(h(S).leftMenu,(e=>(d(),p(f,null,[e.hidden?x("",!0):(d(),B(g,{key:e.name,"router-info":e},null,8,["router-info"]))],64)))),256))])),_:1},8,["collapse","default-active"])])),_:1}),w("div",{class:b(["absolute bottom-8 right-2 w-8 h-8 bg-gray-50 dark:bg-slate-800 flex items-center justify-center rounded cursor-pointer",G.value?"right-0 left-0 mx-auto":"right-2"]),onClick:H},[G.value?(d(),B(o,{key:1},{default:c((()=>[m(r)])),_:1})):(d(),B(o,{key:0},{default:c((()=>[m(s)])),_:1}))],2)],6)):x("",!0)])}}});export{k as default};
