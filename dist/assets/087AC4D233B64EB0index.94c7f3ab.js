/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{_ as e,u as l,a,o,c as t,b as u,d,w as i,g as m,t as p,h as n,e as s,j as r,au as c,l as v,E as f,p as B,i as g}from"./087AC4D233B64EB0index.70d09b05.js";/* empty css                               *//* empty css                                */import{E as y,a as _}from"./087AC4D233B64EB0col.8e8483c8.js";/* empty css                              */import{E as b}from"./087AC4D233B64EB0input-number.525084f9.js";/* empty css                                   *//* empty css                            *//* empty css                               *//* empty css                                  *//* empty css                               */import{E as V,a as C}from"./087AC4D233B64EB0table-column.87522e19.js";import"./087AC4D233B64EB0checkbox.946614c0.js";/* empty css                                */import{E as k}from"./087AC4D233B64EB0link.7ea6995b.js";import{a as w,E}from"./087AC4D233B64EB0form-item.cbb99123.js";/* empty css                               */import{g as j,u as D,c as A,l as h}from"./087AC4D233B64EB0tack.f6fb0d39.js";import{E as x}from"./087AC4D233B64EB0index.7d3772ac.js";import{E as U}from"./087AC4D233B64EB0index.cf7c943f.js";import"./087AC4D233B64EB0index.9bcf7e3e.js";import"./087AC4D233B64EB0index.86c76e0e.js";import"./087AC4D233B64EB0index.c39333f3.js";import"./087AC4D233B64EB0index.a54c8ec8.js";import"./087AC4D233B64EB0_baseIteratee.bc07217d.js";import"./087AC4D233B64EB0_Uint8Array.b8c6af2c.js";import"./087AC4D233B64EB0isEqual.754d772a.js";import"./087AC4D233B64EB0debounce.034956aa.js";import"./087AC4D233B64EB0index.0adebf5a.js";import"./087AC4D233B64EB0_initCloneObject.073b420a.js";import"./087AC4D233B64EB0castArray.0e034210.js";import"./087AC4D233B64EB0_baseClone.a58dc1a4.js";import"./087AC4D233B64EB0index.46727ea4.js";import"./087AC4D233B64EB0index.25218fc3.js";import"./087AC4D233B64EB0token.9ae252be.js";import"./087AC4D233B64EB0strings.1dceca3e.js";import"./087AC4D233B64EB0use-dialog.2e6e6d78.js";const z=e=>(B("data-v-8d19a859"),e=e(),g(),e),S={class:"gva-search-box"},q={class:"gva-table-box"},I={class:"gva-btn-list"},F={class:"gva-pagination"},O={class:"flex justify-between items-center"},T={class:"text-lg"},J=z((()=>u("div",{style:{padding:"0 0 20px 40px",color:"black","font-size":"16px"}}," 模版 ",-1))),N=z((()=>u("div",{style:{padding:"0 0 20px 40px",color:"black","font-size":"16px"}}," 奖励 ",-1))),K=z((()=>u("div",{style:{padding:"0 0 20px 40px",color:"black","font-size":"16px"}}," 解锁 ",-1))),L=e(Object.assign({name:"tack"},{__name:"index",setup(e){const B=l(),g=a([]),z=a({id:0,before:0,desc:"",complete:[{type:0,value:0,code:"",game:"",mode:"",limit:0,initialize:"",value2:0}],award:[{type:0,id:0,code:"",num:0}],unlock:[{type:0,level:0}],tag:""}),L=a(""),M=a({id:[{required:!0,message:"请输入id",trigger:"blur"}],desc:[{required:!0,message:"请输入desc",trigger:"blur"}],complete:[{required:!0,message:"请选择类型",trigger:"blur"}],award:[{required:!0,message:"请选择类型",trigger:"blur"}]}),P=a(1),Q=a(0),R=a(10),G=a([]),H=a({}),W=()=>{H.value={}},X=()=>{P.value=1,R.value=10,$()},Y=e=>{R.value=e,$()},Z=e=>{P.value=e,$()},$=async()=>{const e=await j({page:P.value,pageSize:R.value,...H.value});0===e.code&&(G.value=e.data.list,Q.value=e.data.total,P.value=e.data.page,R.value=e.data.pageSize)};$();const ee=e=>{g.value=e},le=a(null),ae=a("新增"),oe=a(!1),te=e=>{switch(e){case"add":ae.value="新增";break;case"edit":ae.value="编辑"}L.value=e,oe.value=!0},ue=()=>{le.value.resetFields(),z.value={id:0,before:0,desc:"",complete:[{type:0,value:0,code:"",game:"",mode:"",limit:0,initialize:"",value2:0}],award:[{type:0,id:0,code:"",num:0}],unlock:[{type:0,level:0}],tag:""},oe.value=!1},de=async()=>{le.value.validate((async e=>{if(e)switch(L.value){case"add":0===(await A(z.value)).code&&r({type:"success",message:"添加成功",showClose:!0}),$(),ue();break;case"edit":0===(await D(z.value)).code&&r({type:"success",message:"编辑成功",showClose:!0}),$(),ue();break;default:r({type:"error",message:"未知操作",showClose:!0})}}))};return(e,l)=>{const a=v,g=w,j=f,D=E,A=V,ie=k,me=C,pe=x,ne=b,se=y,re=_,ce=U;return o(),t("div",null,[u("div",S,[d(D,{ref:"searchForm",inline:!0,model:H.value},{default:i((()=>[d(g,{label:"ID"},{default:i((()=>[d(a,{modelValue:H.value.id,"onUpdate:modelValue":l[0]||(l[0]=e=>H.value.id=e),placeholder:"ID"},null,8,["modelValue"])])),_:1}),d(g,{label:"任务名"},{default:i((()=>[d(a,{modelValue:H.value.key,"onUpdate:modelValue":l[1]||(l[1]=e=>H.value.key=e),placeholder:"任务名"},null,8,["modelValue"])])),_:1}),d(g,null,{default:i((()=>[d(j,{type:"primary",icon:"search",onClick:X},{default:i((()=>[m(" 查询 ")])),_:1}),d(j,{icon:"refresh",onClick:W},{default:i((()=>[m(" 重置 ")])),_:1})])),_:1})])),_:1},8,["model"])]),u("div",q,[u("div",I,[d(j,{type:"primary",icon:"plus",onClick:l[2]||(l[2]=e=>te("add"))},{default:i((()=>[m(" 新增 ")])),_:1})]),d(me,{border:"",data:G.value,onSortChange:e.sortChange,onSelectionChange:ee},{default:i((()=>[d(A,{type:"selection",width:"60"}),d(A,{align:"center","min-width":"90",label:"id",prop:"id"},{default:i((e=>[d(ie,{type:"primary",onClick:l=>(e=>{let l={};l.id=e,B.push({name:"taskDetails",query:l})})(e.row.id)},{default:i((()=>[m(p(e.row.id),1)])),_:2},1032,["onClick"])])),_:1}),d(A,{align:"center",label:"desc","min-width":"150",prop:"desc"}),d(A,{align:"center",label:"模版","min-width":"170",prop:"complete"},{default:i((e=>[u("div",null,p(e.row.complete),1)])),_:1}),d(A,{align:"center",label:"奖励","min-width":"200",prop:"award"},{default:i((e=>[u("div",null,p(e.row.award),1)])),_:1}),d(A,{align:"center",label:"unlock","min-width":"150",prop:"unlock"},{default:i((e=>[u("div",null,p(e.row.unlock),1)])),_:1}),d(A,{align:"center",label:"标签","min-width":"150",prop:"tag"}),d(A,{align:"center",label:"before","min-width":"150",prop:"before"}),d(A,{align:"center",fixed:"right",label:"操作",width:"200"},{default:i((e=>[d(j,{icon:"edit",type:"primary",link:"",onClick:l=>(async e=>{let l=JSON.parse(JSON.stringify(e));z.value=l,te("edit")})(e.row)},{default:i((()=>[m(" 编辑 ")])),_:2},1032,["onClick"]),d(j,{icon:"delete",type:"primary",link:"",onClick:l=>(async e=>{c.confirm("此操作将永久删除任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await h({id:e.id})).code&&(r({type:"success",message:"删除成功!"}),$())}))})(e.row)},{default:i((()=>[m(" 删除 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSortChange"]),u("div",F,[d(pe,{"current-page":P.value,"page-size":R.value,"page-sizes":[10,30,50,100],total:Q.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:Z,onSizeChange:Y},null,8,["current-page","page-size","total"])])]),oe.value?(o(),n(ce,{key:0,modelValue:oe.value,"onUpdate:modelValue":l[21]||(l[21]=e=>oe.value=e),size:"60%","before-close":ue,"show-close":!1},{header:i((()=>[u("div",O,[u("span",T,p(ae.value),1),u("div",null,[d(j,{onClick:ue},{default:i((()=>[m(" 取 消 ")])),_:1}),d(j,{type:"primary",onClick:de},{default:i((()=>[m(" 确 定 ")])),_:1})])])])),default:i((()=>[d(D,{class:"myForm",ref_key:"apiForm",ref:le,model:z.value,rules:M.value,"label-width":"80px"},{default:i((()=>[d(re,{class:"w-full"},{default:i((()=>[d(se,{span:12},{default:i((()=>[d(g,{label:"ID",prop:"id"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.id,"onUpdate:modelValue":l[3]||(l[3]=e=>z.value.id=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(re,{class:"w-full"},{default:i((()=>[d(se,{span:12},{default:i((()=>[d(g,{label:"before",prop:"before"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.before,"onUpdate:modelValue":l[4]||(l[4]=e=>z.value.before=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(g,{label:"desc",prop:"desc"},{default:i((()=>[d(a,{modelValue:z.value.desc,"onUpdate:modelValue":l[5]||(l[5]=e=>z.value.desc=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),J,d(re,{class:"w-full"},{default:i((()=>[z.value.complete[0].type||"add"===L.value?(o(),n(se,{key:0,span:12},{default:i((()=>[d(g,{label:"type",prop:"complete"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.complete[0].type,"onUpdate:modelValue":l[6]||(l[6]=e=>z.value.complete[0].type=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.complete[0].value||"add"===L.value?(o(),n(se,{key:1,span:12},{default:i((()=>[d(g,{label:"value"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.complete[0].value,"onUpdate:modelValue":l[7]||(l[7]=e=>z.value.complete[0].value=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.complete[0].code||"add"===L.value?(o(),n(se,{key:2,span:12},{default:i((()=>[d(g,{label:"code"},{default:i((()=>[d(a,{modelValue:z.value.complete[0].code,"onUpdate:modelValue":l[8]||(l[8]=e=>z.value.complete[0].code=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.complete[0].game?(o(),n(se,{key:3,span:12},{default:i((()=>[d(g,{label:"game"},{default:i((()=>[d(a,{modelValue:z.value.complete[0].game,"onUpdate:modelValue":l[9]||(l[9]=e=>z.value.complete[0].game=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.complete[0].mode||"add"===L.value?(o(),n(se,{key:4,span:12},{default:i((()=>[d(g,{label:"mode"},{default:i((()=>[d(a,{modelValue:z.value.complete[0].mode,"onUpdate:modelValue":l[10]||(l[10]=e=>z.value.complete[0].mode=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.complete[0].limit||"add"===L.value?(o(),n(se,{key:5,span:12},{default:i((()=>[d(g,{label:"limit"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.complete[0].limit,"onUpdate:modelValue":l[11]||(l[11]=e=>z.value.complete[0].limit=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.complete[0].initialize||"add"===L.value?(o(),n(se,{key:6,span:12},{default:i((()=>[d(g,{label:"initialize"},{default:i((()=>[d(a,{modelValue:z.value.complete[0].initialize,"onUpdate:modelValue":l[12]||(l[12]=e=>z.value.complete[0].initialize=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.complete[0].value2||"add"===L.value?(o(),n(se,{key:7,span:12},{default:i((()=>[d(g,{label:"value2"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.complete[0].value2,"onUpdate:modelValue":l[13]||(l[13]=e=>z.value.complete[0].value2=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0)])),_:1}),N,d(re,{class:"w-full"},{default:i((()=>[z.value.award[0].type||"add"===L.value?(o(),n(se,{key:0,span:12},{default:i((()=>[d(g,{label:"type",prop:"award"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.award[0].type,"onUpdate:modelValue":l[14]||(l[14]=e=>z.value.award[0].type=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.award[0].id||"add"===L.value?(o(),n(se,{key:1,span:12},{default:i((()=>[d(g,{label:"id"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.award[0].id,"onUpdate:modelValue":l[15]||(l[15]=e=>z.value.award[0].id=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.award[0].code||"add"===L.value?(o(),n(se,{key:2,span:12},{default:i((()=>[d(g,{label:"code"},{default:i((()=>[d(a,{min:0,modelValue:z.value.award[0].code,"onUpdate:modelValue":l[16]||(l[16]=e=>z.value.award[0].code=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.award[0].num||"add"===L.value?(o(),n(se,{key:3,span:12},{default:i((()=>[d(g,{label:"num"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.award[0].num,"onUpdate:modelValue":l[17]||(l[17]=e=>z.value.award[0].num=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0)])),_:1}),K,d(re,{class:"w-full"},{default:i((()=>[z.value.unlock[0].type||"add"===L.value?(o(),n(se,{key:0,span:12},{default:i((()=>[d(g,{label:"type",prop:"unlock"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.unlock[0].type,"onUpdate:modelValue":l[18]||(l[18]=e=>z.value.unlock[0].type=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0),z.value.unlock[0].level||"add"===L.value?(o(),n(se,{key:1,span:12},{default:i((()=>[d(g,{label:"level",prop:"unlock"},{default:i((()=>[d(ne,{min:0,modelValue:z.value.unlock[0].level,"onUpdate:modelValue":l[19]||(l[19]=e=>z.value.unlock[0].level=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1})):s("",!0)])),_:1}),d(g,{label:"标签",prop:"tag"},{default:i((()=>[d(a,{modelValue:z.value.tag,"onUpdate:modelValue":l[20]||(l[20]=e=>z.value.tag=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])):s("",!0)])}}}),[["__scopeId","data-v-8d19a859"]]);export{L as default};
