/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{_ as e,a as t,T as a,o,c as s,b as l,d as r,w as n,g as u,t as i,H as d,e as c,dt as m,du as p,j as B,dv as y,aj as f,l as h,E as C}from"./087AC4D233B64EB0index.70d09b05.js";import{E}from"./087AC4D233B64EB0dialog.04c6d5cf.js";/* empty css                                */import{E as D,a as j}from"./087AC4D233B64EB0table-column.87522e19.js";import"./087AC4D233B64EB0checkbox.946614c0.js";/* empty css                                *//* empty css                               *//* empty css                                  *//* empty css                            */import{E as A}from"./087AC4D233B64EB0tree.2034c53a.js";/* empty css                               *//* empty css                              */import{u as v}from"./087AC4D233B64EB0authority.6f3dd0e4.js";import{g as k,s as w}from"./087AC4D233B64EB0authorityBtn.0366f024.js";import{E as I}from"./087AC4D233B64EB0index.86c76e0e.js";import"./087AC4D233B64EB0index.a54c8ec8.js";import"./087AC4D233B64EB0use-dialog.2e6e6d78.js";import"./087AC4D233B64EB0index.c39333f3.js";import"./087AC4D233B64EB0_baseIteratee.bc07217d.js";import"./087AC4D233B64EB0_Uint8Array.b8c6af2c.js";import"./087AC4D233B64EB0isEqual.754d772a.js";import"./087AC4D233B64EB0debounce.034956aa.js";import"./087AC4D233B64EB0index.0adebf5a.js";import"./087AC4D233B64EB0_initCloneObject.073b420a.js";import"./087AC4D233B64EB0token.9ae252be.js";import"./087AC4D233B64EB0index.8862a37e.js";const g={class:"sticky top-0.5 z-10"},b={class:"tree-content clear-both"},_={class:"custom-tree-node"},x={key:0},R={key:1},V={class:"dialog-footer"},N=e(Object.assign({name:"Menus"},{__name:"menus",props:{row:{default:function(){return{}},type:Object}},emits:["changeRow"],setup(e,{expose:N,emit:O}){const T=e,U=O,q=t(""),z=t([]),M=t([]),S=t(!1),H=t({children:"children",label:function(e){return e.meta.title},disabled:function(e){return T.row.defaultRouter===e.name}});(async()=>{const e=await m();z.value=e.data.menus;const t=(await p({authorityId:T.row.authorityId})).data.menus,a=[];t.forEach((e=>{t.some((t=>t.parentId===e.menuId))||a.push(Number(e.menuId))})),M.value=a})();const K=()=>{S.value=!0},L=t(null),Q=async()=>{const e=L.value.getCheckedNodes(!1,!0);0===(await y({menus:e,authorityId:T.row.authorityId})).code&&B({type:"success",message:"菜单设置成功!"})};N({enterAndNext:()=>{Q()},needConfirm:S});const F=t(!1),G=t([]),J=t([]),P=t();let W="";const X=e=>{J.value=e},Y=e=>{F.value=!0,G.value=e.menuBtn},Z=()=>{F.value=!1},$=async()=>{const e=J.value.map((e=>e.ID));0===(await w({menuID:W,selected:e,authorityId:T.row.authorityId})).code&&(B({type:"success",message:"设置成功"}),F.value=!1)},ee=(e,t)=>!e||-1!==t.meta.title.indexOf(e);return a(q,(e=>{L.value.filter(e)})),(t,a)=>{const m=h,p=C,y=A,w=I,N=D,O=j,S=E;return o(),s("div",null,[l("div",g,[r(m,{modelValue:q.value,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value=e),class:"w-3/5",placeholder:"筛选"},null,8,["modelValue"]),r(p,{class:"float-right",type:"primary",onClick:Q},{default:n((()=>[u("确 定")])),_:1})]),l("div",b,[r(w,null,{default:n((()=>[r(y,{ref_key:"menuTree",ref:L,data:z.value,"default-checked-keys":M.value,props:H.value,"default-expand-all":"","highlight-current":"","node-key":"ID","show-checkbox":"","filter-node-method":ee,onCheck:K},{default:n((({node:t,data:a})=>[l("span",_,[l("span",null,i(t.label),1),t.checked?(o(),s("span",x,[r(p,{type:"primary",link:"",style:d({color:e.row.defaultRouter===a.name?"#E6A23C":"#85ce61"}),onClick:()=>(async e=>{const t=await v({authorityId:T.row.authorityId,AuthorityName:T.row.authorityName,parentId:T.row.parentId,defaultRouter:e.name});0===t.code&&(B({type:"success",message:"设置成功"}),U("changeRow","defaultRouter",t.data.authority.defaultRouter))})(a)},{default:n((()=>[u(i(e.row.defaultRouter===a.name?"首页":"设为首页"),1)])),_:2},1032,["style","onClick"])])):c("",!0),a.menuBtn.length?(o(),s("span",R,[r(p,{type:"primary",link:"",onClick:()=>(async e=>{W=e.ID;const t=await k({menuID:W,authorityId:T.row.authorityId});0===t.code&&(Y(e),await f(),t.data.selected&&t.data.selected.forEach((e=>{G.value.some((t=>{t.ID===e&&P.value.toggleRowSelection(t,!0)}))})))})(a)},{default:n((()=>[u(" 分配按钮 ")])),_:2},1032,["onClick"])])):c("",!0)])])),_:1},8,["data","default-checked-keys","props"])])),_:1})]),r(S,{modelValue:F.value,"onUpdate:modelValue":a[1]||(a[1]=e=>F.value=e),title:"分配按钮","destroy-on-close":""},{footer:n((()=>[l("div",V,[r(p,{onClick:Z},{default:n((()=>[u("取 消")])),_:1}),r(p,{type:"primary",onClick:$},{default:n((()=>[u("确 定")])),_:1})])])),default:n((()=>[r(O,{ref_key:"btnTableRef",ref:P,data:G.value,"row-key":"ID",onSelectionChange:X},{default:n((()=>[r(N,{type:"selection",width:"55"}),r(N,{label:"按钮名称",prop:"name"}),r(N,{label:"按钮备注",prop:"desc"})])),_:1},8,["data"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-4d144d5c"]]);export{N as default};
