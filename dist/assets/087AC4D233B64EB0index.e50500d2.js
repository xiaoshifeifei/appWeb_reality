/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{a as e,T as a,o as l,c as s,b as u,d as o,w as d,l as r}from"./087AC4D233B64EB0index.70d09b05.js";import{a as p,E as t}from"./087AC4D233B64EB0form-item.cbb99123.js";/* empty css                              */import{E as m}from"./087AC4D233B64EB0input-number.525084f9.js";import{E as n,a as i}from"./087AC4D233B64EB0col.8e8483c8.js";/* empty css                                     *//* empty css                                                                              *//* empty css                               *//* empty css                                *//* empty css                                   *//* empty css                            *//* empty css                               *//* empty css                                  *//* empty css                               *//* empty css                               *//* empty css                               *//* empty css                                 *//* empty css                                                                              */import"./087AC4D233B64EB0castArray.0e034210.js";import"./087AC4D233B64EB0_baseClone.a58dc1a4.js";import"./087AC4D233B64EB0_Uint8Array.b8c6af2c.js";import"./087AC4D233B64EB0_initCloneObject.073b420a.js";import"./087AC4D233B64EB0index.9bcf7e3e.js";const _={class:"gva-table-box"},f=u("div",{class:"setting"},"收集奖励设置",-1),B=u("div",{class:"dj"},'提示:10-20-30-40 可用" - "号连接，设置多个等级',-1),g=u("div",{class:"setting"},"等级-收集限制设置",-1),v=u("span",{style:{"margin-left":"10px"}},"级",-1),w=u("span",{style:{"margin-left":"10px"}},"级",-1),V=u("span",{style:{"margin-left":"10px"}},"级",-1),c=u("span",{style:{"margin-left":"10px"}},"级",-1),b=u("span",{style:{"margin-left":"10px"}},"星",-1),E=u("span",{style:{"margin-left":"10px"}},"级",-1),j=u("span",{style:{"margin-left":"10px"}},"星",-1),A=Object.assign({name:"limitation"},{__name:"index",setup(A){e("/api/"),e(1),e(0),e(10);const C=e([]);a((()=>C.value),(()=>{D()}));const D=()=>{C.value&&C.value.forEach((e=>{e.authorityIds=e.authorities&&e.authorities.map((e=>e.authorityId))}))};e(null),e([]);const y=e({userName:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[],enable:1}),x=e({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],phone:[{pattern:/^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/,message:"请输入合法手机号",trigger:"blur"}],email:[{pattern:/^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,message:"请输入正确的邮箱",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),N=e(null);return e(!1),e("add"),(e,a)=>{const A=r,C=p,D=n,U=i,k=m,h=t;return l(),s("div",null,[u("div",_,[f,o(h,{ref_key:"userForm",ref:N,"label-width":"110px",rules:x.value,model:y.value,inline:!0},{default:d((()=>[o(U,{class:"w-full"},{default:d((()=>[o(D,{span:6},{default:d((()=>[o(C,{label:"总投注",prop:"password"},{default:d((()=>[o(A,{modelValue:y.value.password,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value.password=e)},null,8,["modelValue"])])),_:1})])),_:1}),o(D,{span:6},{default:d((()=>[o(C,{label:"奖励积分",prop:"nickName"},{default:d((()=>[o(A,{modelValue:y.value.nickName,"onUpdate:modelValue":a[1]||(a[1]=e=>y.value.nickName=e)},null,8,["modelValue"])])),_:1})])),_:1}),o(D,{span:6},{default:d((()=>[o(C,{label:"总赢",prop:"password"},{default:d((()=>[o(A,{modelValue:y.value.password,"onUpdate:modelValue":a[2]||(a[2]=e=>y.value.password=e)},null,8,["modelValue"])])),_:1})])),_:1}),o(D,{span:6},{default:d((()=>[o(C,{label:"奖励钻石",prop:"nickName"},{default:d((()=>[o(A,{modelValue:y.value.nickName,"onUpdate:modelValue":a[3]||(a[3]=e=>y.value.nickName=e)},null,8,["modelValue"])])),_:1})])),_:1}),o(D,{span:6},{default:d((()=>[o(C,{label:"回合赢",prop:"password"},{default:d((()=>[o(A,{modelValue:y.value.password,"onUpdate:modelValue":a[4]||(a[4]=e=>y.value.password=e)},null,8,["modelValue"])])),_:1})])),_:1}),o(D,{span:6},{default:d((()=>[o(C,{label:"奖励道具",prop:"nickName"},{default:d((()=>[o(A,{modelValue:y.value.nickName,"onUpdate:modelValue":a[5]||(a[5]=e=>y.value.nickName=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),B,o(C,{label:"下载领奖等级",prop:"password"},{default:d((()=>[o(A,{modelValue:y.value.password,"onUpdate:modelValue":a[6]||(a[6]=e=>y.value.password=e),style:{width:"200%"}},null,8,["modelValue"])])),_:1}),g,o(U,{class:"w-full"},{default:d((()=>[o(D,{span:24},{default:d((()=>[o(C,{label:"游戏一",prop:"password"},{default:d((()=>[o(k,{min:0,modelValue:y.value.password,"onUpdate:modelValue":a[7]||(a[7]=e=>y.value.password=e),"label-suffix":"级"},null,8,["modelValue"]),v])),_:1})])),_:1}),o(D,{span:24},{default:d((()=>[o(C,{label:"游戏二",prop:"password"},{default:d((()=>[o(k,{min:0,modelValue:y.value.password,"onUpdate:modelValue":a[8]||(a[8]=e=>y.value.password=e)},null,8,["modelValue"]),w])),_:1})])),_:1}),o(D,{span:24},{default:d((()=>[o(C,{label:"游戏三",prop:"password"},{default:d((()=>[o(k,{min:0,modelValue:y.value.password,"onUpdate:modelValue":a[9]||(a[9]=e=>y.value.password=e)},null,8,["modelValue"]),V])),_:1})])),_:1})])),_:1}),o(U,{class:"w-full"},{default:d((()=>[o(D,{span:6},{default:d((()=>[o(C,{label:"游戏四",prop:"password"},{default:d((()=>[o(k,{min:0,modelValue:y.value.password,"onUpdate:modelValue":a[10]||(a[10]=e=>y.value.password=e)},null,8,["modelValue"]),c])),_:1})])),_:1}),o(D,{span:6},{default:d((()=>[o(C,{label:"拼图",prop:"nickName"},{default:d((()=>[o(k,{min:0,modelValue:y.value.password,"onUpdate:modelValue":a[11]||(a[11]=e=>y.value.password=e)},null,8,["modelValue"]),b])),_:1})])),_:1})])),_:1}),o(U,{class:"w-full"},{default:d((()=>[o(D,{span:6},{default:d((()=>[o(C,{label:"游戏五",prop:"password"},{default:d((()=>[o(k,{min:0,modelValue:y.value.password,"onUpdate:modelValue":a[12]||(a[12]=e=>y.value.password=e)},null,8,["modelValue"]),E])),_:1})])),_:1}),o(D,{span:6},{default:d((()=>[o(C,{label:"拼图",prop:"nickName"},{default:d((()=>[o(k,{min:0,modelValue:y.value.password,"onUpdate:modelValue":a[13]||(a[13]=e=>y.value.password=e)},null,8,["modelValue"]),j])),_:1})])),_:1})])),_:1})])),_:1},8,["rules","model"])])])}}});export{A as default};
