/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
import{u as a,a as e,r as s,m as t,o as l,c as r,b as n,t as o,d as c,w as i,q as d,s as u,h as m,e as p,g as f,j as h,l as g,E as b}from"./087AC4D233B64EB0index.70d09b05.js";import{E as w,a as v}from"./087AC4D233B64EB0form-item.cbb99123.js";/* empty css                               *//* empty css                              */import{_ as B,c as y}from"./087AC4D233B64EB0initdb.5478038d.js";import{_}from"./087AC4D233B64EB0bottomInfo.ed3f5347.js";import"./087AC4D233B64EB0castArray.0e034210.js";import"./087AC4D233B64EB0_baseClone.a58dc1a4.js";import"./087AC4D233B64EB0_Uint8Array.b8c6af2c.js";import"./087AC4D233B64EB0_initCloneObject.073b420a.js";const C={id:"userLayout",class:"w-full h-full relative"},x={class:"rounded-lg flex items-center justify-evenly w-full h-full md:w-screen md:h-screen md:bg-[#194bfb]"},j={class:"md:w-3/5 w-10/12 h-full flex items-center justify-evenly"},A=n("div",{class:"oblique h-[130%] w-3/5 bg-white dark:bg-slate-900 transform -rotate-12 absolute -ml-52"},null,-1),E={class:"z-[999] pt-12 pb-10 md:w-96 w-full rounded-lg flex flex-col justify-between box-border"},D={class:"flex items-center justify-center"},k=["src"],I={class:"mb-9"},V={class:"text-center text-4xl font-bold"},z=n("p",{class:"text-center text-sm font-normal text-gray-500 mt-2.5"},"A management platform using Golang and Vue ",-1),L={class:"flex w-full justify-between"},N={class:"w-1/3 h-11 bg-[#c3d4f2] rounded"},U=["src"],q=n("div",{class:"hidden md:block w-1/2 h-full float-right bg-[#194bfb]"},[n("img",{class:"h-full",src:B,alt:"banner"})],-1),G=n("div",{class:"links items-center justify-center gap-2 hidden md:flex"},[n("a",{href:"https://www.gin-vue-admin.com/",target:"_blank"},[n("img",{src:"/assets/087AC4D233B64EB0docs.2aa96a87.png",class:"w-8 h-8",alt:"文档"})]),n("a",{href:"https://support.qq.com/product/371961",target:"_blank"},[n("img",{src:"/assets/087AC4D233B64EB0kefu.825734dc.png",class:"w-8 h-8",alt:"客服"})]),n("a",{href:"https://github.com/flipped-aurora/gin-vue-admin",target:"_blank"},[n("img",{src:"/assets/087AC4D233B64EB0github.b6042bac.png",class:"w-8 h-8",alt:"github"})]),n("a",{href:"https://space.bilibili.com/322210472",target:"_blank"},[n("img",{src:"/assets/087AC4D233B64EB0video.24d1e7fa.png",class:"w-8 h-8",alt:"视频站"})])],-1),M=Object.assign({name:"Login"},{__name:"index",setup(B){const M=a(),O=async()=>{const a=await u();P.captcha.push({max:a.data.captchaLength,min:a.data.captchaLength,message:"请输入".concat(a.data.captchaLength,"位验证码"),trigger:"blur"}),F.value=a.data.picPath,K.captchaId=a.data.captchaId,K.openCaptcha=a.data.openCaptcha};O();const $=e(null),F=e(""),K=s({username:"admin",password:"",captcha:"",captchaId:"",openCaptcha:!1}),P=s({username:[{validator:(a,e,s)=>{if(e.length<5)return s(new Error("请输入正确的用户名"));s()},trigger:"blur"}],password:[{validator:(a,e,s)=>{if(e.length<6)return s(new Error("请输入正确的密码"));s()},trigger:"blur"}],captcha:[{message:"验证码格式不正确",trigger:"blur"}]}),H=t(),J=()=>{$.value.validate((async a=>{if(!a)return h({type:"error",message:"请正确填写登录信息",showClose:!0}),O(),!1;return!!(await(async()=>await H.LoginIn(K))())||(O(),!1)}))},Q=async()=>{var a;const e=await y();0===e.code&&((null==(a=e.data)?void 0:a.needInit)?(H.NeedInit(),M.push({name:"Init"})):h({type:"info",message:"已配置数据库信息，无法初始化"}))};return(a,e)=>{const s=g,t=v,u=b,h=w;return l(),r("div",C,[n("div",x,[n("div",j,[A,n("div",E,[n("div",null,[n("div",D,[n("img",{class:"w-24",src:a.$GIN_VUE_ADMIN.appLogo,alt:""},null,8,k)]),n("div",I,[n("p",V,o(a.$GIN_VUE_ADMIN.appName),1),z]),c(h,{ref_key:"loginForm",ref:$,model:K,rules:P,"validate-on-rule-change":!1,onKeyup:d(J,["enter"])},{default:i((()=>[c(t,{prop:"username",class:"mb-6"},{default:i((()=>[c(s,{modelValue:K.username,"onUpdate:modelValue":e[0]||(e[0]=a=>K.username=a),size:"large",placeholder:"请输入用户名","suffix-icon":"user"},null,8,["modelValue"])])),_:1}),c(t,{prop:"password",class:"mb-6"},{default:i((()=>[c(s,{modelValue:K.password,"onUpdate:modelValue":e[1]||(e[1]=a=>K.password=a),"show-password":"",size:"large",type:"password",placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),K.openCaptcha?(l(),m(t,{key:0,prop:"captcha",class:"mb-6"},{default:i((()=>[n("div",L,[c(s,{modelValue:K.captcha,"onUpdate:modelValue":e[2]||(e[2]=a=>K.captcha=a),placeholder:"请输入验证码",size:"large",class:"flex-1 mr-5"},null,8,["modelValue"]),n("div",N,[F.value?(l(),r("img",{key:0,class:"w-full h-full",src:F.value,alt:"请输入验证码",onClick:e[3]||(e[3]=a=>O())},null,8,U)):p("",!0)])])])),_:1})):p("",!0),c(t,{class:"mb-6"},{default:i((()=>[c(u,{class:"shadow shadow-active h-11 w-full",type:"primary",size:"large",onClick:J},{default:i((()=>[f("登 录")])),_:1})])),_:1}),c(t,{class:"mb-6"},{default:i((()=>[c(u,{class:"shadow shadow-active h-11 w-full",type:"primary",size:"large",onClick:Q},{default:i((()=>[f("前往初始化")])),_:1})])),_:1})])),_:1},8,["model","rules"])])])]),q]),c(_,{class:"left-0 right-0 absolute bottom-3 mx-auto w-full z-20"},{default:i((()=>[G])),_:1})])}}});export{M as default};
