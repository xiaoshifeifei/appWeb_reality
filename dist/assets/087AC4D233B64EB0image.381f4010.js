/*! 
 Build based on gin-vue-admin 
 Time : 1725432472000 */
class t{constructor(t,e,i=1920){this.file=t,this.fileSize=e,this.maxWH=i}compress(){const t=this.file.type,e=this.file.size/1024;return new Promise((i=>{const s=new FileReader;s.readAsDataURL(this.file),s.onload=()=>{const h=document.createElement("canvas"),a=document.createElement("img");a.src=s.result,a.onload=()=>{const s=h.getContext("2d"),n=this.dWH(a.width,a.height,this.maxWH);h.width=n.width,h.height=n.height,s.clearRect(0,0,h.width,h.height),s.drawImage(a,0,0,h.width,h.height);const o=h.toDataURL(t,.9),l=this.fileSizeKB(o);l>this.fileSize&&console.log("图片尺寸太大!"+e+" >> "+l);const d=this.dataURLtoBlob(o,t),r=new File([d],this.file.name);i(r)}}}))}dWH(t,e,i){const s={width:t,height:e};return Math.max(t,e)>i?t>e?(s.width=i,s.height=Math.round(e*(i/t)),s):(s.height=i,s.width=Math.round(t*(i/e)),s):s}fileSizeKB(t){let e=0;return e=Math.round(3*t.split(",")[1].length/4/1024),e}dataURLtoBlob(t,e){const i=atob(t.split(",")[1]);let s=t.split(",")[0].split(":")[1].split(";")[0];const h=new ArrayBuffer(i.length),a=new Uint8Array(h);for(let n=0;n<i.length;n++)a[n]=i.charCodeAt(n);return e&&(s=e),new Blob([h],{type:s,lastModifiedDate:new Date})}}const e="/api",i=t=>t&&"http"!==t.slice(0,4)?"/"===t.slice(0,1)?e+t:e+"/"+t:t,s=t=>t.endsWith(".mp4")||t.endsWith(".mov")||t.endsWith(".webm")||t.endsWith(".ogg"),h=t=>"video/mp4"==t||"video/webm"==t||"video/ogg"==t,a=t=>"image/jpeg"==t||"image/png"==t||"image/webp"==t||"image/svg+xml"==t;export{t as I,a,s as b,i as g,h as i};
