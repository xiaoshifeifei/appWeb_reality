/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{v as e,a,r as l,ad as t,o,c as u,d as n,b as r,w as d,g as s,q as i,t as m,G as p,at as c,O as v,P as b,h as f,j as g,au as y,J as B,l as E,E as C}from"./087AC4D233B64EB0index.70d09b05.js";/* empty css                               *//* empty css                                *//* empty css                              */import{E as h}from"./087AC4D233B64EB0input-number.525084f9.js";/* empty css                            *//* empty css                               *//* empty css                                  *//* empty css                               *//* empty css                                   */import{E as V,a as j}from"./087AC4D233B64EB0table-column.87522e19.js";import"./087AC4D233B64EB0checkbox.946614c0.js";/* empty css                                */import{a as _,E as A}from"./087AC4D233B64EB0form-item.cbb99123.js";/* empty css                               */import{E as D}from"./087AC4D233B64EB0date-picker.a2585bf6.js";import{_ as N}from"./087AC4D233B64EB0warningBar.fba111b1.js";import{b as x,g as T,a as w}from"./087AC4D233B64EB0autoCode.8131c587.js";import{E as I}from"./087AC4D233B64EB0index.c39333f3.js";import{E as k}from"./087AC4D233B64EB0index.7d3772ac.js";import{E as U,a as S}from"./087AC4D233B64EB0index.46727ea4.js";import{E as O}from"./087AC4D233B64EB0index.cf7c943f.js";import"./087AC4D233B64EB0index.9bcf7e3e.js";import"./087AC4D233B64EB0index.86c76e0e.js";import"./087AC4D233B64EB0_baseIteratee.bc07217d.js";import"./087AC4D233B64EB0_Uint8Array.b8c6af2c.js";import"./087AC4D233B64EB0isEqual.754d772a.js";import"./087AC4D233B64EB0debounce.034956aa.js";import"./087AC4D233B64EB0index.0adebf5a.js";import"./087AC4D233B64EB0_initCloneObject.073b420a.js";import"./087AC4D233B64EB0castArray.0e034210.js";import"./087AC4D233B64EB0_baseClone.a58dc1a4.js";import"./087AC4D233B64EB0arrays.2c626d3b.js";import"./087AC4D233B64EB0index.a54c8ec8.js";import"./087AC4D233B64EB0index.25218fc3.js";import"./087AC4D233B64EB0token.9ae252be.js";import"./087AC4D233B64EB0strings.1dceca3e.js";import"./087AC4D233B64EB0use-dialog.2e6e6d78.js";const J=a=>e({url:"/sysExportTemplate/createSysExportTemplate",method:"post",data:a}),z={class:"gva-search-box"},q={class:"gva-table-box"},L={class:"gva-btn-list"},R={class:"gva-pagination"},F={class:"flex justify-between items-center"},G={class:"text-lg"},K={style:{float:"right",color:"#8492a6","font-size":"13px"}},W={class:"w-full flex gap-4"},H={class:"flex justify-end w-full"},P={class:"flex justify-end w-full"},Q=Object.assign({name:"ExportTemplate"},{__name:"exportTemplate",setup(Q){const M=a({name:"",tableName:"",dbName:"",templateID:"",templateInfo:"",limit:0,order:"",conditions:[],joinTemplate:[]}),Z=a([{label:"=",value:"="},{label:"<>",value:"<>"},{label:">",value:">"},{label:"<",value:"<"},{label:"LIKE",value:"LIKE"},{label:"BETWEEN",value:"BETWEEN"},{label:"NOT BETWEEN",value:"NOT BETWEEN"}]),X=()=>{M.value.conditions.push({from:"",column:"",operator:""})},Y=()=>{M.value.joinTemplate.push({joins:"LEFT JOIN",table:"",on:""})},$=l({name:[{required:!0,message:"",trigger:["input","blur"]},{whitespace:!0,message:"不能只输入空格",trigger:["input","blur"]}],tableName:[{required:!0,message:"",trigger:["input","blur"]},{whitespace:!0,message:"不能只输入空格",trigger:["input","blur"]}],templateID:[{required:!0,message:"",trigger:["input","blur"]},{whitespace:!0,message:"不能只输入空格",trigger:["input","blur"]}],templateInfo:[{required:!0,message:"",trigger:["input","blur"]},{whitespace:!0,message:"不能只输入空格",trigger:["input","blur"]}]}),ee=l({createdAt:[{validator:(e,a,l)=>{re.value.startCreatedAt&&!re.value.endCreatedAt?l(new Error("请填写结束日期")):!re.value.startCreatedAt&&re.value.endCreatedAt?l(new Error("请填写开始日期")):re.value.startCreatedAt&&re.value.endCreatedAt&&(re.value.startCreatedAt.getTime()===re.value.endCreatedAt.getTime()||re.value.startCreatedAt.getTime()>re.value.endCreatedAt.getTime())?l(new Error("开始日期应当早于结束日期")):l()},trigger:"change"}]}),ae=a(),le=a(),te=a(1),oe=a(0),ue=a(10),ne=a([]),re=a({}),de=a([]),se=a([]);(async()=>{const e=await x();0===e.code&&(de.value=e.data.dbList)})();const ie=()=>{M.value.tableName="",M.value.templateInfo="",me()},me=async()=>{const e=await T({businessDB:M.value.dbName});0===e.code&&(se.value=e.data.tables),M.value.tableName=""};me();const pe=async()=>{if(!M.value.tableName)return void g({type:"error",message:"请先选择业务库及选择表后再进行操作"});M.value.templateInfo="";const e=await w({businessDB:M.value.dbName,tableName:M.value.tableName});if(0===e.code){const a={};e.data.columns.forEach((e=>{a[e.columnName]=e.columnComment||e.columnName})),M.value.templateInfo=JSON.stringify(a,null,2)}},ce=()=>{re.value={},ge()},ve=()=>{var e;null==(e=le.value)||e.validate((async e=>{e&&(te.value=1,ue.value=10,ge())}))},be=e=>{ue.value=e,ge()},fe=e=>{te.value=e,ge()},ge=async()=>{const a=await(l={page:te.value,pageSize:ue.value,...re.value},e({url:"/sysExportTemplate/getSysExportTemplateList",method:"get",params:l}));var l;0===a.code&&(ne.value=a.data.list,oe.value=a.data.total,te.value=a.data.page,ue.value=a.data.pageSize)};ge();(async()=>{})();const ye=a([]),Be=e=>{ye.value=e},Ee=async()=>{y.confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const a=[];if(0===ye.value.length)return void g({type:"warning",message:"请选择要删除的数据"});ye.value&&ye.value.map((e=>{a.push(e.ID)}));var l;0===(await(l={ids:a},e({url:"/sysExportTemplate/deleteSysExportTemplateByIds",method:"delete",data:l}))).code&&(g({type:"success",message:"删除成功"}),ne.value.length===a.length&&te.value>1&&te.value--,ge())}))},Ce=a(""),he=async a=>{const l=await(t={ID:a.ID},e({url:"/sysExportTemplate/findSysExportTemplate",method:"get",params:t}));var t;Ce.value="update",0===l.code&&(M.value=l.data.resysExportTemplate,M.value.conditions||(M.value.conditions=[]),M.value.joinTemplate||(M.value.joinTemplate=[]),je.value=!0)},Ve=async a=>{var l;0===(await(l={ID:a.ID},e({url:"/sysExportTemplate/deleteSysExportTemplate",method:"delete",data:l}))).code&&(g({type:"success",message:"删除成功"}),1===ne.value.length&&te.value>1&&te.value--,ge())},je=a(!1),_e=()=>{Ce.value="create",je.value=!0},Ae=()=>{je.value=!1,M.value={name:"",tableName:"",templateID:"",templateInfo:"",limit:0,order:"",conditions:[],joinTemplate:[]}},De=async()=>{var a;try{JSON.parse(M.value.templateInfo)}catch(t){return void g({type:"error",message:"模板信息格式不正确，请检查"})}const l=JSON.parse(JSON.stringify(M.value));for(let e=0;e<l.conditions.length;e++){if(!l.conditions[e].from||!l.conditions[e].column||!l.conditions[e].operator)return void g({type:"error",message:"请填写完整的导出条件"});l.conditions[e].templateID=l.templateID}for(let e=0;e<l.joinTemplate.length;e++){if(!l.joinTemplate[e].joins||!l.joinTemplate[e].on)return void g({type:"error",message:"请填写完整的关联"});l.joinTemplate[e].templateID=l.templateID}null==(a=ae.value)||a.validate((async a=>{if(!a)return;let t;switch(Ce.value){case"create":default:t=await J(l);break;case"update":t=await(o=l,e({url:"/sysExportTemplate/updateSysExportTemplate",method:"put",data:o}))}var o;0===t.code&&(g({type:"success",message:"创建/更改成功"}),Ae(),ge())}))};return(e,a)=>{const l=t("QuestionFilled"),g=B,x=I,T=D,w=_,J=E,Q=C,me=A,ge=V,Ne=j,xe=k,Te=U,we=S,Ie=h,ke=O;return o(),u("div",null,[n(N,{title:"本功能提供同步的表格导出功能，大数据量的异步表格导出功能，可以选择点我定制",href:"https://flipped-aurora.feishu.cn/docx/KwjxdnvatozgwIxGV0rcpkZSn4d"}),r("div",z,[n(me,{ref_key:"elSearchFormRef",ref:le,inline:!0,model:re.value,class:"demo-form-inline",rules:ee,onKeyup:i(ve,["enter"])},{default:d((()=>[n(w,{label:"创建日期",prop:"createdAt"},{label:d((()=>[r("span",null,[s(" 创建日期 "),n(x,{content:"搜索范围是开始日期（包含）至结束日期（不包含）"},{default:d((()=>[n(g,null,{default:d((()=>[n(l)])),_:1})])),_:1})])])),default:d((()=>[n(T,{modelValue:re.value.startCreatedAt,"onUpdate:modelValue":a[0]||(a[0]=e=>re.value.startCreatedAt=e),type:"datetime",placeholder:"开始日期","disabled-date":e=>!!re.value.endCreatedAt&&e.getTime()>re.value.endCreatedAt.getTime()},null,8,["modelValue","disabled-date"]),s(" — "),n(T,{modelValue:re.value.endCreatedAt,"onUpdate:modelValue":a[1]||(a[1]=e=>re.value.endCreatedAt=e),type:"datetime",placeholder:"结束日期","disabled-date":e=>!!re.value.startCreatedAt&&e.getTime()<re.value.startCreatedAt.getTime()},null,8,["modelValue","disabled-date"])])),_:1}),n(w,{label:"模板名称",prop:"name"},{default:d((()=>[n(J,{modelValue:re.value.name,"onUpdate:modelValue":a[2]||(a[2]=e=>re.value.name=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),n(w,{label:"表名称",prop:"tableName"},{default:d((()=>[n(J,{modelValue:re.value.tableName,"onUpdate:modelValue":a[3]||(a[3]=e=>re.value.tableName=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),n(w,{label:"模板标识",prop:"templateID"},{default:d((()=>[n(J,{modelValue:re.value.templateID,"onUpdate:modelValue":a[4]||(a[4]=e=>re.value.templateID=e),placeholder:"搜索条件"},null,8,["modelValue"])])),_:1}),n(w,null,{default:d((()=>[n(Q,{type:"primary",icon:"search",onClick:ve},{default:d((()=>[s("查询")])),_:1}),n(Q,{icon:"refresh",onClick:ce},{default:d((()=>[s("重置")])),_:1})])),_:1})])),_:1},8,["model","rules"])]),r("div",q,[r("div",L,[n(Q,{type:"primary",icon:"plus",onClick:_e},{default:d((()=>[s("新增")])),_:1}),n(Q,{icon:"delete",style:{"margin-left":"10px"},disabled:!ye.value.length,onClick:Ee},{default:d((()=>[s("删除")])),_:1},8,["disabled"])]),n(Ne,{ref:"multipleTable",style:{width:"100%"},"tooltip-effect":"dark",data:ne.value,"row-key":"ID",onSelectionChange:Be},{default:d((()=>[n(ge,{type:"selection",width:"55"}),n(ge,{align:"left",label:"日期",width:"180"},{default:d((e=>[s(m(p(c)(e.row.CreatedAt)),1)])),_:1}),n(ge,{align:"left",label:"数据库",width:"120"},{default:d((e=>[r("span",null,m(e.row.dbName||"GVA库"),1)])),_:1}),n(ge,{align:"left",label:"模板标识",prop:"templateID",width:"120"}),n(ge,{align:"left",label:"模板名称",prop:"name",width:"120"}),n(ge,{align:"left",label:"表名称",prop:"tableName",width:"120"}),n(ge,{align:"left",label:"模板信息",prop:"templateInfo","min-width":"120"}),n(ge,{align:"left",label:"操作","min-width":"120"},{default:d((e=>[n(Q,{type:"primary",link:"",icon:"edit",class:"table-button",onClick:a=>he(e.row)},{default:d((()=>[s("变更")])),_:2},1032,["onClick"]),n(Q,{type:"primary",link:"",icon:"delete",onClick:a=>{return l=e.row,void y.confirm("确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{Ve(l)}));var l}},{default:d((()=>[s("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),r("div",R,[n(xe,{layout:"total, sizes, prev, pager, next, jumper","current-page":te.value,"page-size":ue.value,"page-sizes":[10,30,50,100],total:oe.value,onCurrentChange:fe,onSizeChange:be},null,8,["current-page","page-size","total"])])]),n(ke,{modelValue:je.value,"onUpdate:modelValue":a[12]||(a[12]=e=>je.value=e),size:"60%","before-close":Ae,title:"create"===Ce.value?"添加":"修改","show-close":!1,"destroy-on-close":""},{header:d((()=>[r("div",F,[r("span",G,m("create"===Ce.value?"添加":"修改"),1),r("div",null,[n(Q,{onClick:Ae},{default:d((()=>[s("取 消")])),_:1}),n(Q,{type:"primary",onClick:De},{default:d((()=>[s("确 定")])),_:1})])])])),default:d((()=>[n(me,{ref_key:"elFormRef",ref:ae,model:M.value,"label-position":"right",rules:$,"label-width":"100px"},{default:d((()=>[n(w,{label:"业务库",prop:"dbName"},{label:d((()=>[n(x,{content:"注：需要提前到db-list自行配置多数据库，如未配置需配置后重启服务方可使用。若无法选择，请到config.yaml中设置disabled:false，选择导入导出的目标库。",placement:"bottom",effect:"light"},{default:d((()=>[r("div",null,[s(" 业务库 "),n(g,null,{default:d((()=>[n(l)])),_:1})])])),_:1})])),default:d((()=>[n(we,{modelValue:M.value.dbName,"onUpdate:modelValue":a[5]||(a[5]=e=>M.value.dbName=e),clearable:"",onChange:ie,placeholder:"选择业务库"},{default:d((()=>[(o(!0),u(v,null,b(de.value,(e=>(o(),f(Te,{key:e.aliasName,value:e.aliasName,label:e.aliasName,disabled:e.disable},{default:d((()=>[r("div",null,[r("span",null,m(e.aliasName),1),r("span",K,m(e.dbName),1)])])),_:2},1032,["value","label","disabled"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(w,{label:"模板名称:",prop:"name"},{default:d((()=>[n(J,{modelValue:M.value.name,"onUpdate:modelValue":a[6]||(a[6]=e=>M.value.name=e),clearable:!0,placeholder:"请输入模板名称"},null,8,["modelValue"])])),_:1}),n(w,{label:"表名称:",clearable:"",prop:"tableName"},{default:d((()=>[r("div",W,[n(we,{modelValue:M.value.tableName,"onUpdate:modelValue":a[7]||(a[7]=e=>M.value.tableName=e),class:"flex-1",filterable:"",placeholder:"请选择表"},{default:d((()=>[(o(!0),u(v,null,b(se.value,(e=>(o(),f(Te,{key:e.tableName,label:e.tableName,value:e.tableName},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),n(Q,{type:"primary",onClick:pe},{default:d((()=>[s("自动生成模板")])),_:1})])])),_:1}),n(w,{label:"模板标识:",prop:"templateID"},{default:d((()=>[n(J,{modelValue:M.value.templateID,"onUpdate:modelValue":a[8]||(a[8]=e=>M.value.templateID=e),clearable:!0,placeholder:"模板标识为前端组件需要挂在的标识属性"},null,8,["modelValue"])])),_:1}),n(w,{label:"关联条件:"},{default:d((()=>[(o(!0),u(v,null,b(M.value.joinTemplate,((e,a)=>(o(),u("div",{key:a,class:"flex gap-4 w-full mb-2"},[n(we,{modelValue:e.joins,"onUpdate:modelValue":a=>e.joins=a,placeholder:"请选择关联方式"},{default:d((()=>[n(Te,{label:"LEFT JOIN",value:"LEFT JOIN"}),n(Te,{label:"INNER JOIN",value:"INNER JOIN"}),n(Te,{label:"RIGHT JOIN",value:"RIGHT JOIN"})])),_:2},1032,["modelValue","onUpdate:modelValue"]),n(J,{modelValue:e.table,"onUpdate:modelValue":a=>e.table=a,placeholder:"请输入关联表"},null,8,["modelValue","onUpdate:modelValue"]),n(J,{modelValue:e.on,"onUpdate:modelValue":a=>e.on=a,placeholder:"关联条件 table1.a = table2.b"},null,8,["modelValue","onUpdate:modelValue"]),n(Q,{type:"danger",icon:"delete",onClick:()=>M.value.joinTemplate.splice(a,1)},{default:d((()=>[s("删除")])),_:2},1032,["onClick"])])))),128)),r("div",H,[n(Q,{type:"primary",icon:"plus",onClick:Y},{default:d((()=>[s("添加条件")])),_:1})])])),_:1}),n(w,{label:"模板信息:",prop:"templateInfo"},{default:d((()=>[n(J,{modelValue:M.value.templateInfo,"onUpdate:modelValue":a[9]||(a[9]=e=>M.value.templateInfo=e),type:"textarea",rows:12,clearable:!0,placeholder:'模板信息格式：key标识数据库column列名称（在join模式下需要写为 table.column），value标识导出excel列名称，如key为数据库关键字或函数，请按照关键字的处理模式处理，当前以mysql为例，如下：\n{\n  "table_column1":"第一列",\n  "table_column3":"第三列",\n  "table_column4":"第四列",\n  "`rows`":"我属于数据库关键字或函数",\n}\n如果增加了JOINS导出key应该列为 {table_name1.table_column1:"第一列",table_name2.table_column2:"第二列"}\n如果有重复的列名导出格式应为 {table_name1.table_column1 as key:"第一列",table_name2.table_column2 as key2:"第二列"}\nJOINS模式下不支持导入\n'},null,8,["modelValue"])])),_:1}),n(w,{label:"默认导出条数:"},{default:d((()=>[n(Ie,{modelValue:M.value.limit,"onUpdate:modelValue":a[10]||(a[10]=e=>M.value.limit=e),step:1,"step-strictly":!0,precision:0},null,8,["modelValue"])])),_:1}),n(w,{label:"默认排序条件:"},{default:d((()=>[n(J,{modelValue:M.value.order,"onUpdate:modelValue":a[11]||(a[11]=e=>M.value.order=e),placeholder:"例:id desc"},null,8,["modelValue"])])),_:1}),n(w,{label:"导出条件:"},{default:d((()=>[(o(!0),u(v,null,b(M.value.conditions,((e,a)=>(o(),u("div",{key:a,class:"flex gap-4 w-full mb-2"},[n(J,{modelValue:e.from,"onUpdate:modelValue":a=>e.from=a,placeholder:"需要从查询条件取的json key"},null,8,["modelValue","onUpdate:modelValue"]),n(J,{modelValue:e.column,"onUpdate:modelValue":a=>e.column=a,placeholder:"表对应的column"},null,8,["modelValue","onUpdate:modelValue"]),n(we,{modelValue:e.operator,"onUpdate:modelValue":a=>e.operator=a,placeholder:"请选择查询条件"},{default:d((()=>[(o(!0),u(v,null,b(Z.value,(e=>(o(),f(Te,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"]),n(Q,{type:"danger",icon:"delete",onClick:()=>M.value.conditions.splice(a,1)},{default:d((()=>[s("删除")])),_:2},1032,["onClick"])])))),128)),r("div",P,[n(Q,{type:"primary",icon:"plus",onClick:X},{default:d((()=>[s("添加条件")])),_:1})])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}});export{Q as default};
