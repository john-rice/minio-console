"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[8648],{28648:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(69060),l=n(66152),s=n(61060),r=n(95705),c=n(66156),a=n(70780),i=n(61180),u=n(78256),p=n(82496);const h=e=>{let{selectedGroups:t,deleteOpen:n,closeDeleteModalAndRefresh:h}=e;const d=(0,c.Ab)(),[f,g]=(0,o.useState)(!1);if(!t)return null;const m=t.map((e=>(0,p.jsx)("div",{children:(0,p.jsx)("b",{children:e})},e)));return(0,p.jsx)(a.c,{title:"Delete Group".concat(t.length>1?"s":""),confirmText:"Delete",isOpen:n,titleIcon:(0,p.jsx)(l.sB6,{}),isLoading:f,onConfirm:()=>{for(let e of t)g(!0),i.m.group.removeGroup((0,s.CO)(e)).then((e=>{h(!0)})).catch((async e=>{const t=await e.json();d((0,r.aW)((0,u.K)(t))),h(!1)})).finally((()=>g(!1)))},onClose:()=>h(!1),confirmationContent:(0,p.jsxs)(o.Fragment,{children:["Are you sure you want to delete the following"," ",1===t.length?"":t.length," group",t.length>1?"s?":"?",m]})})}}}]);
//# sourceMappingURL=8648.1d9c893d.chunk.js.map