"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7389],{67389:(e,r,t)=>{t.r(r),t.d(r,{default:()=>E});var a=t(7552),o=t(963),n=t(943),c=t(36715),l=t(5401),s=t(99546),i=t(75785),d=t(68446),p=t(93507),g=t(7009),m=t(61599);const u=(0,i.n9)()((e=>({error:{margin:e.spacing(2)},errorHeader:{background:e.palette.error.light,color:e.palette.error.contrastText,padding:e.spacing(2),textAlign:"center"},errorMessage:{padding:e.spacing(2)}})));function b({error:e}){const{classes:r}=u();return a.createElement(n.A,{className:r.error},a.createElement("div",{className:r.errorHeader},a.createElement(m.A,{color:"inherit",fontSize:"large"}),a.createElement("div",null,a.createElement(c.A,{variant:"h6",color:"inherit",align:"center"},"Import error"))),a.createElement(c.A,{className:r.errorMessage},`${e}`))}function h(e,r){return t=>r[t[e]]}const v=(0,i.n9)()((e=>({root:{margin:e.spacing(1)},paper:{display:"flex",flexDirection:"column"},dropZone:{textAlign:"center",margin:e.spacing(2),padding:e.spacing(2),borderWidth:2,borderRadius:2,borderColor:h("isDragActive",{true:e.palette.secondary.light,false:e.palette.divider}),borderStyle:"dashed",backgroundColor:h("isDragActive",{true:(0,o.X4)(e.palette.text.primary,e.palette.action.hoverOpacity),false:e.palette.background.default}),outline:"none",transition:"border .24s ease-in-out","&:focus":{borderColor:e.palette.secondary.light}},uploadIcon:{color:e.palette.text.secondary}}))),E=(0,d.observer)((function({model:e}){const[r,t]=(0,a.useState)(),{getRootProps:o,getInputProps:i,isDragActive:d}=(0,p.VB)({accept:"application/json",maxSize:536870912,multiple:!1,onDrop:async(r,a)=>{try{if(a.length>0)throw new Error(a[0].errors.map((e=>`${e}`)).join(", "));const t=await r[0].text();(0,s.getSession)(e).setSession?.(JSON.parse(t).session)}catch(e){console.error(e),t(e)}}}),{classes:m}=v({isDragActive:d});return a.createElement("div",{className:m.root},a.createElement(n.A,{className:m.paper},a.createElement("div",o({className:m.dropZone}),a.createElement("input",i()),a.createElement(g.A,{className:m.uploadIcon,fontSize:"large"}),a.createElement(c.A,{color:"textSecondary",align:"center",variant:"body1"},"Drag and drop files here"),a.createElement(c.A,{color:"textSecondary",align:"center",variant:"body2"},"or"),a.createElement(l.A,{color:"primary",variant:"contained"},"Browse Files"))),r?a.createElement(b,{error:r}):null)}))}}]);
//# sourceMappingURL=7389.c98e4f72.chunk.js.map