"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2559],{92217:function(e,t,o){var n=o(93433),r=o(29439),c=o(1413),i=o(72791),a=o(61889),l=(o(2574),o(60708)),s=o(35026),d=o(51862),u=o(80745),f=o(30829),m=o(20068),p=o(64554),x=o(11135),h=o(25787),g=o(84570),b=o(23814),Z=o(51047),j=o(40603),v=o(78029),C=o.n(v),k=o(81045),y=o(80184),B={json:d.AV,yaml:function(){return s.i.define(u.r)}},S=k.tk.theme({"&":{backgroundColor:"#FBFAFA"},".cm-content":{caretColor:"#05122B"},"&.cm-focused .cm-cursor":{borderLeftColor:"#05122B"},".cm-gutters":{backgroundColor:"#FBFAFA",color:"#000000",border:"none"},".cm-gutter.cm-foldGutter":{borderRight:"1px solid #eaeaea"},".cm-gutterElement":{fontSize:"13px"},".cm-line":{fontSize:"13px",color:"#2781B0","& .\u037cc":{color:"#C83B51"}},"& .\u037cb":{color:"#2781B0"},".cm-activeLine":{backgroundColor:"#dde1f1"},".cm-matchingBracket":{backgroundColor:"#05122B",color:"#ffffff"},".cm-selectionMatch":{backgroundColor:"#ebe7f1"},".cm-selectionLayer":{fontWeight:500}," .cm-selectionBackground":{backgroundColor:"#a180c7",color:"#ffffff"}},{dark:!1}),N=k.tk.theme({"&":{backgroundColor:"#282a36",color:"#ffb86c"},".cm-gutter.cm-foldGutter":{borderRight:"1px solid #eaeaea"},".cm-gutterElement":{fontSize:"13px"},".cm-line":{fontSize:"13px","& .\u037cd, & .\u037cc":{color:"#8e6cef"}},"& .\u037cb":{color:"#2781B0"},".cm-activeLine":{backgroundColor:"#44475a"},".cm-matchingBracket":{backgroundColor:"#842de5",color:"#ff79c6"},".cm-selectionLayer .cm-selectionBackground":{backgroundColor:"green"}},{dark:!0});t.Z=(0,h.Z)((function(e){return(0,x.Z)((0,c.Z)({},b.YI))}))((function(e){var t=e.value,o=e.label,c=void 0===o?"":o,s=e.tooltip,d=void 0===s?"":s,u=e.mode,x=void 0===u?"json":u,h=e.classes,b=e.onBeforeChange,v=e.readOnly,k=void 0!==v&&v,P=e.editorHeight,M=void 0===P?"250px":P,w=(0,i.useState)(!1),E=(0,r.Z)(w,2),F=E[0],O=E[1],L=[];return B[x]&&(L=[].concat((0,n.Z)(L),[B[x]()])),(0,y.jsxs)(i.Fragment,{children:[(0,y.jsxs)(f.Z,{className:h.inputLabel,children:[(0,y.jsx)("span",{children:c}),""!==d&&(0,y.jsx)("div",{className:h.tooltipContainer,children:(0,y.jsx)(m.Z,{title:d,placement:"top-start",children:(0,y.jsx)("div",{className:h.tooltip,children:(0,y.jsx)(g.Z,{})})})})]}),(0,y.jsx)(a.ZP,{item:!0,xs:12,children:(0,y.jsx)("br",{})}),(0,y.jsxs)(a.ZP,{item:!0,xs:12,sx:{border:"1px solid #eaeaea"},children:[(0,y.jsx)(a.ZP,{item:!0,xs:12,children:(0,y.jsx)(l.ZP,{value:t,theme:F?N:S,extensions:L,editable:!k,basicSetup:!0,height:M,onChange:function(e,t){b(null,null,e)}})}),(0,y.jsx)(a.ZP,{item:!0,xs:12,sx:{borderTop:"1px solid #eaeaea",background:F?"#282c34":"#f7f7f7"},children:(0,y.jsxs)(p.Z,{className:F?"dark-theme":"",sx:{display:"flex",alignItems:"center",padding:"2px",paddingRight:"5px",justifyContent:"flex-end","& button":{height:"26px",width:"26px",padding:"2px"," .min-icon":{marginLeft:"0"}},"&.dark-theme button":{background:"#FFFFFF"}},children:[(0,y.jsx)(j.Z,{tooltip:"Change theme",onClick:function(){O(!F)},text:"",icon:(0,y.jsx)(Z.EOM,{}),color:"primary",variant:"outlined"}),(0,y.jsx)(C(),{text:t,children:(0,y.jsx)(j.Z,{tooltip:"Copy to Clipboard",onClick:function(){},text:"",icon:(0,y.jsx)(Z.TIy,{}),color:"primary",variant:"outlined"})})]})})]})]})}))},56028:function(e,t,o){var n=o(29439),r=o(1413),c=o(72791),i=o(60364),a=o(13400),l=o(55646),s=o(5574),d=o(65661),u=o(39157),f=o(11135),m=o(25787),p=o(23814),x=o(29823),h=o(28057),g=o(87995),b=o(80184);t.Z=(0,m.Z)((function(e){return(0,f.Z)((0,r.Z)((0,r.Z)({},p.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},p.sN))}))((function(e){var t=e.onClose,o=e.modalOpen,f=e.title,m=e.children,p=e.classes,Z=e.wideLimit,j=void 0===Z||Z,v=e.noContentPadding,C=e.titleIcon,k=void 0===C?null:C,y=(0,i.I0)(),B=(0,c.useState)(!1),S=(0,n.Z)(B,2),N=S[0],P=S[1],M=(0,i.v9)((function(e){return e.system.modalSnackBar}));(0,c.useEffect)((function(){y((0,g.MK)(""))}),[y]),(0,c.useEffect)((function(){if(M){if(""===M.message)return void P(!1);"error"!==M.type&&P(!0)}}),[M]);var w=j?{classes:{paper:p.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},E="";return M&&(E=M.detailedErrorMsg,(""===M.detailedErrorMsg||M.detailedErrorMsg.length<5)&&(E=M.message)),(0,b.jsxs)(s.Z,(0,r.Z)((0,r.Z)({open:o,classes:p},w),{},{scroll:"paper",onClose:function(e,o){"backdropClick"!==o&&t()},className:p.root,children:[(0,b.jsxs)(d.Z,{className:p.title,children:[(0,b.jsxs)("div",{className:p.titleText,children:[k," ",f]}),(0,b.jsx)("div",{className:p.closeContainer,children:(0,b.jsx)(a.Z,{"aria-label":"close",id:"close",className:p.closeButton,onClick:t,disableRipple:!0,size:"small",children:(0,b.jsx)(x.Z,{})})})]}),(0,b.jsx)(h.Z,{isModal:!0}),(0,b.jsx)(l.Z,{open:N,className:p.snackBarModal,onClose:function(){P(!1),y((0,g.MK)(""))},message:E,ContentProps:{className:"".concat(p.snackBar," ").concat(M&&"error"===M.type?p.errorSnackBar:"")},autoHideDuration:M&&"error"===M.type?1e4:5e3}),(0,b.jsx)(u.Z,{className:v?"":p.content,children:m})]}))}))},82859:function(e,t,o){o.r(t);var n=o(29439),r=o(1413),c=o(72791),i=o(60364),a=o(61889),l=o(40986),s=o(36151),d=o(11135),u=o(25787),f=o(81207),m=o(23814),p=o(56028),x=o(92217),h=o(51047),g=o(87995),b=o(80184);t.default=(0,u.Z)((function(e){return(0,d.Z)((0,r.Z)((0,r.Z)({errorState:{color:"#b53b4b",fontSize:14,fontWeight:"bold"},codeMirrorContainer:{marginBottom:20,paddingLeft:15,"& label":{marginBottom:".5rem"},"& label + div":{display:"none"}}},m.ID),m.YI))}))((function(e){var t=e.classes,o=e.open,r=e.closeModalAndRefresh,d=e.tenant,u=e.namespace,m=(0,i.I0)(),Z=(0,c.useState)(!1),j=(0,n.Z)(Z,2),v=j[0],C=j[1],k=(0,c.useState)(!1),y=(0,n.Z)(k,2),B=y[0],S=y[1],N=(0,c.useState)(""),P=(0,n.Z)(N,2),M=P[0],w=P[1],E=(0,c.useState)(""),F=(0,n.Z)(E,2),O=F[0],L=F[1];(0,c.useEffect)((function(){f.Z.invoke("GET","/api/v1/namespaces/".concat(u,"/tenants/").concat(d,"/yaml")).then((function(e){S(!1),w(e.yaml)})).catch((function(e){S(!1),m((0,g.zb)(e))}))}),[d,u,m]),(0,c.useEffect)((function(){}),[]);var z=""!==M.trim();return(0,b.jsxs)(p.Z,{modalOpen:o,onClose:function(){r(!1)},title:"YAML",titleIcon:(0,b.jsx)(h.wK7,{}),children:[v||B&&(0,b.jsx)(a.ZP,{item:!0,xs:12,children:(0,b.jsx)(l.Z,{})}),""!==O&&(0,b.jsx)("div",{className:t.errorState,children:O}),!B&&(0,b.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),v||(C(!0),L(""),f.Z.invoke("PUT","/api/v1/namespaces/".concat(u,"/tenants/").concat(d,"/yaml"),{yaml:M}).then((function(e){C(!1),r(!0),L("")})).catch((function(e){C(!1),L(e.errorMessage)})))},children:(0,b.jsxs)(a.ZP,{container:!0,children:[(0,b.jsx)(a.ZP,{item:!0,xs:12,className:t.codeMirrorContainer,children:(0,b.jsx)(x.Z,{label:"Tenant Specification",value:M,mode:"yaml",onBeforeChange:function(e,t,o){w(o)},editorHeight:"550px"})}),(0,b.jsxs)(a.ZP,{item:!0,xs:12,className:t.modalButtonBar,children:[(0,b.jsx)(s.Z,{type:"button",variant:"outlined",color:"primary",disabled:v,onClick:function(){r(!1)},children:"Cancel"}),(0,b.jsx)(s.Z,{type:"submit",variant:"contained",color:"primary",disabled:v||!z,children:"Save"})]})]})})]})}))},61120:function(e,t,o){function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}o.d(t,{Z:function(){return n}})},60136:function(e,t,o){o.d(t,{Z:function(){return r}});var n=o(89611);function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,n.Z)(e,t)}},82963:function(e,t,o){o.d(t,{Z:function(){return c}});var n=o(71002),r=o(97326);function c(e,t){if(t&&("object"===(0,n.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,r.Z)(e)}}}]);
//# sourceMappingURL=2559.b0c6bddf.chunk.js.map