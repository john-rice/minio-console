"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[1324,5851,4705],{85851:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var l=t(65043),n=t(89923),i=t(56483),o=t(64159),c=t(20554),r=t(58661),a=t(56629),d=t(53518),u=t(70579);const x=e=>{let{selectedGroups:s,deleteOpen:t,closeDeleteModalAndRefresh:x}=e;const p=(0,c.jL)(),[h,m]=(0,l.useState)(!1);if(!s)return null;const j=s.map((e=>(0,u.jsx)("div",{children:(0,u.jsx)("b",{children:e})},e)));return(0,u.jsx)(r.A,{title:"Delete Group".concat(s.length>1?"s":""),confirmText:"Delete",isOpen:t,titleIcon:(0,u.jsx)(n.xWY,{}),isLoading:h,onConfirm:()=>{for(let e of s)m(!0),a.F.group.removeGroup((0,i.nf)(e)).then((e=>{x(!0)})).catch((async e=>{const s=await e.json();p((0,o.C9)((0,d.S)(s))),x(!1)})).finally((()=>m(!1)))},onClose:()=>x(!1),confirmationContent:(0,u.jsxs)(l.Fragment,{children:["Are you sure you want to delete the following"," ",1===s.length?"":s.length," group",s.length>1?"s?":"?",j]})})}},91324:(e,s,t)=>{t.r(s),t.d(s,{default:()=>G,formatPolicy:()=>P});var l=t(65043),n=t(73216),i=t(89923),o=t(56629),c=t(53518),r=t(99161),a=t(77938),d=t(56483),u=t(64159),x=t(20554),p=t(62560),h=t(74705),m=t(77403),j=t(22923),b=t(94141),g=t(70579);const y=e=>{let{title:s="",groupStatus:t="enabled",preSelectedUsers:n=[],selectedGroup:r="",open:a,onClose:p}=e;const h=(0,x.jL)(),[y,f]=(0,l.useState)(n);return(0,g.jsxs)(b.A,{modalOpen:a,onClose:p,title:s,titleIcon:(0,g.jsx)(i.WC,{}),children:[(0,g.jsxs)(i.Hbc,{withBorders:!1,containerPadding:!1,children:[(0,g.jsx)(i.EmB,{label:"Selected Group",sx:{width:"100%"},children:r}),(0,g.jsx)(j.A,{selectedUsers:y,setSelectedUsers:f,editMode:!r})]}),(0,g.jsxs)(i.xA9,{item:!0,xs:12,sx:m.Uz.modalButtonBar,children:[(0,g.jsx)(i.$nd,{id:"reset-add-group-member",type:"button",variant:"regular",onClick:()=>{f(n)},label:"Reset"}),(0,g.jsx)(i.$nd,{id:"save-add-group-member",type:"button",variant:"callAction",onClick:()=>{o.F.group.updateGroup((0,d.nf)(r),{members:y,status:t}).then((()=>{p()})).catch((e=>{p(),h((0,u.Dy)((0,c.S)(e.error)))}))},label:"Save"})]})]})};var f=t(85851),v=t(64681),A=t(6681),S=t(55968),C=t(48793);const P=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length<=0?[]:e.split(",")},G=()=>{const e=(0,x.jL)(),s=(0,n.Zp)(),t=(0,n.g)(),[m,j]=(0,l.useState)({}),[b,G]=(0,l.useState)(!1),[M,U]=(0,l.useState)(!1),[k,w]=(0,l.useState)(!1),[E,z]=(0,l.useState)(""),[L,D]=(0,l.useState)("members"),F=(0,d.x6)(t.groupName||""),{members:K=[],policy:B="",status:R}=m,_=K.filter((e=>e.includes(E))),I=(0,a._)(r.Ms,r.Ld,!0);(0,l.useEffect)((()=>{e((0,u.ph)("group_details"))}),[]),(0,l.useEffect)((()=>{F&&Z()}),[F]);const O=P(B),N="enabled"===R,$=K.length>0?"Edit Members":"Add Members",H=(0,a._)(r.Ms,r.Oh),J=(0,a._)(r.Ms,r.Hr,!0),T=(0,a._)(r.Ms,r.QR,!0),Q=(0,a._)(r.Ms,r.yv,!0);function Z(){H&&o.F.group.groupInfo((0,d.nf)(F)).then((e=>{j(e.data)})).catch((s=>{e((0,u.Dy)((0,c.S)(s.error))),j({})}))}const W=(0,g.jsxs)(i.azJ,{onMouseMove:()=>{e((0,u.ph)("groups_members"))},children:[(0,g.jsx)(i._xt,{separator:!0,sx:{marginBottom:15},actions:(0,g.jsxs)(i.azJ,{sx:{display:"flex",gap:10},children:[(0,g.jsx)(v.A,{placeholder:"Search members",onChange:e=>{z(e)},value:E,sx:{maxWidth:280}}),(0,g.jsx)(a.R,{resource:r.Ms,scopes:r.BD,errorProps:{disabled:!0},children:(0,g.jsx)(A.A,{tooltip:J?$:(0,r.vj)(r.k1,"edit Group membership"),children:(0,g.jsx)(i.$nd,{id:"add-user-group",label:$,variant:"callAction",icon:(0,g.jsx)(i.REV,{}),onClick:()=>{U(!0)},disabled:!J})})})]}),children:"Members"}),(0,g.jsx)(i.xA9,{item:!0,xs:12,children:(0,g.jsx)(a.R,{resource:r.Ms,scopes:r.x6,errorProps:{disabled:!0},children:(0,g.jsx)(A.A,{tooltip:I?"":(0,r.vj)(r.Ld,"view User details"),children:(0,g.jsx)(i.bQt,{itemActions:[{type:"view",onClick:e=>{s("".concat(r.zZ.USERS,"/").concat((0,d.nf)(e)))},isDisabled:!I}],columns:[{label:"Access Key"}],selectedItems:[],isLoading:!1,records:_,entityName:"Users"})})})})]}),Y=(0,g.jsxs)(l.Fragment,{children:[(0,g.jsx)(i.azJ,{onMouseMove:()=>{e((0,u.ph)("groups_policies"))},children:(0,g.jsx)(i._xt,{separator:!0,sx:{marginBottom:15},actions:(0,g.jsx)(A.A,{tooltip:T?"Set Policies":(0,r.vj)(r.QR,"assign Policies"),children:(0,g.jsx)(i.$nd,{id:"set-policies",label:"Set Policies",variant:"callAction",icon:(0,g.jsx)(i.n$X,{}),onClick:()=>{G(!0)},disabled:!T})}),children:"Policies"})}),(0,g.jsx)(i.xA9,{item:!0,xs:12,children:(0,g.jsx)(A.A,{tooltip:Q?"":(0,r.vj)(r.yv,"view Policy details"),children:(0,g.jsx)(i.bQt,{itemActions:[{type:"view",onClick:e=>{s("".concat(r.zZ.POLICIES,"/").concat((0,d.nf)(e)))},isDisabled:!Q}],columns:[{label:"Policy"}],isLoading:!1,records:O,entityName:"Policies"})})})]});return(0,g.jsxs)(l.Fragment,{children:[b?(0,g.jsx)(h.default,{open:b,selectedGroups:[F],selectedUser:null,closeModalAndRefresh:()=>{G(!1),Z(),e((0,p.Gy)([]))}}):null,M?(0,g.jsx)(y,{selectedGroup:F,onSaveClick:()=>{},title:$,groupStatus:R,preSelectedUsers:K,open:M,onClose:()=>{U(!1),Z()}}):null,k&&(0,g.jsx)(f.default,{deleteOpen:k,selectedGroups:[F],closeDeleteModalAndRefresh:e=>{w(!1),e&&s(r.zZ.GROUPS)}}),(0,g.jsx)(C.A,{label:(0,g.jsx)(l.Fragment,{children:(0,g.jsx)(i.EGL,{label:"Groups",onClick:()=>s(r.zZ.GROUPS)})}),actions:(0,g.jsx)(S.A,{})}),(0,g.jsxs)(i.Mxu,{children:[(0,g.jsx)(i.xA9,{item:!0,xs:12,children:(0,g.jsx)(i.lcx,{icon:(0,g.jsx)(l.Fragment,{children:(0,g.jsx)(i.YXz,{width:40})}),title:F,subTitle:null,bottomBorder:!0,actions:(0,g.jsxs)(i.azJ,{sx:{display:"flex",fontSize:14,alignItems:"center",gap:15},children:[(0,g.jsx)("span",{children:"Group Status:"}),(0,g.jsx)("span",{id:"group-status-label",style:{fontWeight:"bold"},children:N?"Enabled":"Disabled"}),(0,g.jsx)(A.A,{tooltip:(0,a._)(r.Ms,r.pf,!0)?"":(0,r.vj)(r.pf,"enable or disable Groups"),children:(0,g.jsx)(a.R,{resource:r.Ms,scopes:r.pf,errorProps:{disabled:!0},matchAll:!0,children:(0,g.jsx)(i.dOG,{indicatorLabels:["Enabled","Disabled"],checked:N,value:"group_enabled",id:"group-status",name:"group-status",onChange:()=>{var s;s=!N,o.F.group.updateGroup((0,d.nf)(F),{members:K,status:s?"enabled":"disabled"}).then((()=>{Z()})).catch((s=>{e((0,u.Dy)((0,c.S)(s.error)))}))},switchOnly:!0})})}),(0,g.jsx)(A.A,{tooltip:"Delete Group",children:(0,g.jsx)(i.$nd,{id:"delete-user-group",variant:"secondary",icon:(0,g.jsx)(i.ucK,{}),onClick:()=>{w(!0)}})})]}),sx:{marginBottom:15}})}),(0,g.jsx)(i.xA9,{item:!0,xs:12,children:(0,g.jsx)(i.tUM,{options:[{tabConfig:{id:"members",label:"Members"},content:W},{tabConfig:{id:"policies",label:"Policies"},content:Y}],currentTabOrPath:L,onTabClick:D})})]})]})}},22923:(e,s,t)=>{t.d(s,{A:()=>h});var l=t(65043),n=t(33097),i=t.n(n),o=t(56629),c=t(53518),r=t(89923),a=t(8185),d=t(64159),u=t(20554),x=t(64681),p=t(70579);const h=e=>{let{selectedUsers:s,setSelectedUsers:t,editMode:n=!1}=e;const h=(0,u.jL)(),[m,j]=(0,l.useState)([]),[b,g]=(0,l.useState)(!1),[y,f]=(0,l.useState)(""),v=(0,l.useCallback)((()=>{o.F.users.listUsers().then((e=>{let s=i()(e.data,"users",[]);s||(s=[]),j(s.sort(a.LA)),g(!1)})).catch((e=>{h((0,d.Dy)((0,c.S)(e.error))),g(!1)}))}),[h]);(0,l.useEffect)((()=>{g(!0)}),[]),(0,l.useEffect)((()=>{b&&v()}),[b,v]);const A=s||[],S=m.filter((e=>e.accessKey.includes(y)));return(0,p.jsx)(r.xA9,{item:!0,xs:12,className:"inputItem",children:(0,p.jsxs)(r.azJ,{children:[b&&(0,p.jsx)(r.z21,{}),(null===m||void 0===m?void 0:m.length)>0?(0,p.jsxs)(l.Fragment,{children:[(0,p.jsx)(r.xA9,{item:!0,xs:12,className:"inputItem",children:(0,p.jsx)(x.A,{label:n?"Edit Members":"Assign Users",placeholder:"Filter Users",onChange:f,value:y})}),(0,p.jsx)(r.bQt,{columns:[{label:"Access Key",elementKey:"accessKey"}],onSelect:e=>{const s=e.target,l=s.value,n=s.checked;let i=[...A];return n?i.push(l):i=i.filter((e=>e!==l)),t(i),i},selectedItems:A,isLoading:b,records:S,entityName:"Users",idField:"accessKey",customPaperHeight:"200px"})]}):(0,p.jsx)(r.azJ,{sx:{textAlign:"center",padding:"10px 0"},children:"No Users to display"})]})})}},42967:(e,s,t)=>{t.d(s,{A:()=>p});var l=t(65043),n=t(89923),i=t(8185),o=t(64681),c=t(64159),r=t(20554),a=t(62560),d=t(22166),u=t(56629),x=t(70579);const p=e=>{let{noTitle:s=!1}=e;const t=(0,r.jL)(),[p,h]=(0,l.useState)([]),[m,j]=(0,l.useState)(!1),[b,g]=(0,l.useState)(""),y=(0,d.d4)((e=>e.createUser.selectedPolicies)),f=(0,l.useCallback)((()=>{j(!0),u.F.policies.listPolicies().then((e=>{var s;const t=null!==(s=e.data.policies)&&void 0!==s?s:[];j(!1),h(t.sort(i.Hw))})).catch((e=>{j(!1),t((0,c.Dy)(e))}))}),[t]);(0,l.useEffect)((()=>{j(!0)}),[]),(0,l.useEffect)((()=>{m&&f()}),[m,f]);const v=p.filter((e=>e.name.includes(b)));return(0,x.jsxs)(n.xA9,{item:!0,xs:12,className:"inputItem",children:[m&&(0,x.jsx)(n.z21,{}),p.length>0?(0,x.jsxs)(l.Fragment,{children:[(0,x.jsx)(n.xA9,{item:!0,xs:12,className:"inputItem",children:(0,x.jsx)(o.A,{placeholder:"Start typing to search for a Policy",onChange:e=>{g(e)},value:b,label:s?"":"Assign Policies"})}),(0,x.jsx)(n.bQt,{columns:[{label:"Policy",elementKey:"name"}],onSelect:e=>{const s=e.target,l=s.value,n=s.checked;let i=[...y];n?i.push(l):i=i.filter((e=>e!==l)),i=i.filter((e=>""!==e)),t((0,a.Gy)(i))},selectedItems:y,isLoading:m,records:v,entityName:"Policies",idField:"name",customPaperHeight:"200px"})]}):(0,x.jsx)(n.azJ,{sx:{textAlign:"center",padding:"10px 0"},children:"No Policies Available"})]})}},74705:(e,s,t)=>{t.r(s),t.d(s,{default:()=>b});var l=t(65043),n=t(33097),i=t.n(n),o=t(22166),c=t(89923),r=t(56483),a=t(64159),d=t(20554),u=t(77403),x=t(62560),p=t(94141),h=t(42967),m=t(20649),j=t(70579);const b=e=>{let{closeModalAndRefresh:s,selectedUser:t,selectedGroups:n,open:b}=e;const g=(0,d.jL)(),[y,f]=(0,l.useState)(!1),[v,A]=(0,l.useState)([]),[S,C]=(0,l.useState)([]),P=(0,o.d4)((e=>e.createUser.selectedPolicies));(0,l.useEffect)((()=>{if(b){if(1===(null===n||void 0===n?void 0:n.length))return void(1===(null===n||void 0===n?void 0:n.length)&&m.A.invoke("GET","/api/v1/group/".concat((0,r.nf)(n[0]))).then((e=>{const s=i()(e,"policy","");A(s.split(",")),C(s.split(",")),g((0,x.Gy)(s.split(",")))})).catch((e=>{g((0,a.Dy)(e)),f(!1)})));const e=i()(t,"policy",[]);A(e),C(e),g((0,x.Gy)(e))}}),[b,null===n||void 0===n?void 0:n.length,t]);const G=i()(t,"accessKey","");return(0,j.jsxs)(p.A,{onClose:()=>{s()},modalOpen:b,title:"Set Policies",children:[(0,j.jsxs)(c.Hbc,{withBorders:!1,containerPadding:!1,children:[(1===(null===n||void 0===n?void 0:n.length)||null!=t)&&(0,j.jsxs)(l.Fragment,{children:[(0,j.jsx)(c.EmB,{label:"Selected ".concat(null!==n?"Group":"User"),sx:{width:"100%"},children:null!==n?n[0]:G}),(0,j.jsx)(c.EmB,{label:"Current Policy",sx:{width:"100%"},children:v.join(", ")})]}),n&&(null===n||void 0===n?void 0:n.length)>1&&(0,j.jsx)(c.EmB,{label:"Selected Groups",sx:{width:"100%"},children:n.join(", ")}),(0,j.jsx)(c.xA9,{item:!0,xs:12,children:(0,j.jsx)(h.A,{selectedPolicy:S})})]}),(0,j.jsxs)(c.xA9,{item:!0,xs:12,sx:u.Uz.modalButtonBar,children:[(0,j.jsx)(c.$nd,{id:"reset",type:"button",variant:"regular",onClick:()=>{C(v),g((0,x.Gy)(v))},label:"Reset"}),(0,j.jsx)(c.$nd,{id:"save",type:"button",variant:"callAction",color:"primary",disabled:y,onClick:()=>{let e=null,l=null;null!==n?l=n:null!==t&&(e=[t.accessKey]||0),f(!0),m.A.invoke("PUT","/api/v1/set-policy-multi",{name:P,groups:l,users:e}).then((()=>{f(!1),s()})).catch((e=>{f(!1),g((0,a.Dy)(e))}))},label:"Save"})]}),y&&(0,j.jsx)(c.xA9,{item:!0,xs:12,children:(0,j.jsx)(c.z21,{})})]})}},8185:(e,s,t)=>{t.d(s,{Hw:()=>n,LA:()=>l,SO:()=>i,rY:()=>o});const l=(e,s)=>{if(e.accessKey&&s.accessKey){if(e.accessKey>s.accessKey)return 1;if(e.accessKey<s.accessKey)return-1}return 0},n=(e,s)=>e.name>s.name?1:e.name<s.name?-1:0,i=(e,s)=>e>s?1:e<s?-1:0,o=(e,s)=>e.policy>s.policy?1:e.policy<s.policy?-1:0}}]);
//# sourceMappingURL=1324.62d917da.chunk.js.map