"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[2492],{92492:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(69060),s=a(39427),d=a(66152),o=a(19536),l=a(4836),r=a(66156),i=a(10732),c=a(61628),u=a(82496);const w=e=>{let{closeModalAndRefresh:t,open:a,bucketName:w}=e;const b=(0,r.Ab)(),h=(0,o.w1)((e=>e.objectBrowser.rewind.rewindEnabled)),S=(0,o.w1)((e=>e.objectBrowser.rewind.dateToRewind)),[p,k]=(0,n.useState)(!1),[x,C]=(0,n.useState)(!0),[j,m]=(0,n.useState)(s.CS.fromJSDate(new Date));(0,n.useEffect)((()=>{h&&(C(!0),m(s.CS.fromISO(S||s.CS.now().toISO()||"")))}),[h,S]);return(0,u.jsx)(l.c,{modalOpen:a,onClose:()=>{t()},title:"Rewind - ".concat(w),children:(0,u.jsxs)(d.yE_,{withBorders:!1,containerPadding:!1,children:[(0,u.jsx)(d.KuV,{value:j,onChange:e=>e?m(e):null,id:"rewind-selector",label:"Rewind to",timeFormat:"24h",secondsSelector:!1,disabled:!x}),h&&(0,u.jsx)(d.Wkk,{value:"status",id:"status",name:"status",checked:x,onChange:e=>{C(e.target.checked)},label:"Current Status",indicatorLabels:["Enabled","Disabled"]}),(0,u.jsx)(d.yeN,{item:!0,xs:12,sx:c.W2.modalButtonBar,children:(0,u.jsx)(d.qaq,{type:"button",variant:"callAction",disabled:p||!j&&x,onClick:()=>{!x&&h?b((0,i.It)()):(k(!0),b((0,i.sV)({state:!0,bucket:w,dateRewind:j.toISO()}))),b((0,i.QP)(!0)),t()},id:"rewind-apply-button",label:!x&&h?"Show Current Data":"Show Rewind Data"})}),p&&(0,u.jsx)(d.yeN,{item:!0,xs:12,children:(0,u.jsx)(d.cHM,{})})]})})}}}]);
//# sourceMappingURL=2492.ad98215a.chunk.js.map