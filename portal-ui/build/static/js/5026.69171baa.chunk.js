(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[5026],{56028:function(e,n,t){"use strict";var a=t(29439),o=t(1413),r=t(72791),i=t(60364),c=t(13400),l=t(55646),s=t(5574),d=t(65661),u=t(39157),v=t(11135),h=t(25787),m=t(23814),p=t(29823),f=t(28057),Z=t(87995),g=t(80184);n.Z=(0,h.Z)((function(e){return(0,v.Z)((0,o.Z)((0,o.Z)({},m.Qw),{},{content:{padding:25,paddingBottom:0},customDialogSize:{width:"100%",maxWidth:765}},m.sN))}))((function(e){var n=e.onClose,t=e.modalOpen,v=e.title,h=e.children,m=e.classes,x=e.wideLimit,k=void 0===x||x,b=e.noContentPadding,y=e.titleIcon,j=void 0===y?null:y,S=(0,i.I0)(),z=(0,r.useState)(!1),C=(0,a.Z)(z,2),E=C[0],I=C[1],M=(0,i.v9)((function(e){return e.system.modalSnackBar}));(0,r.useEffect)((function(){S((0,Z.MK)(""))}),[S]),(0,r.useEffect)((function(){if(M){if(""===M.message)return void I(!1);"error"!==M.type&&I(!0)}}),[M]);var w=k?{classes:{paper:m.customDialogSize}}:{maxWidth:"lg",fullWidth:!0},H="";return M&&(H=M.detailedErrorMsg,(""===M.detailedErrorMsg||M.detailedErrorMsg.length<5)&&(H=M.message)),(0,g.jsxs)(s.Z,(0,o.Z)((0,o.Z)({open:t,classes:m},w),{},{scroll:"paper",onClose:function(e,t){"backdropClick"!==t&&n()},className:m.root,children:[(0,g.jsxs)(d.Z,{className:m.title,children:[(0,g.jsxs)("div",{className:m.titleText,children:[j," ",v]}),(0,g.jsx)("div",{className:m.closeContainer,children:(0,g.jsx)(c.Z,{"aria-label":"close",id:"close",className:m.closeButton,onClick:n,disableRipple:!0,size:"small",children:(0,g.jsx)(p.Z,{})})})]}),(0,g.jsx)(f.Z,{isModal:!0}),(0,g.jsx)(l.Z,{open:E,className:m.snackBarModal,onClose:function(){I(!1),S((0,Z.MK)(""))},message:H,ContentProps:{className:"".concat(m.snackBar," ").concat(M&&"error"===M.type?m.errorSnackBar:"")},autoHideDuration:M&&"error"===M.type?1e4:5e3}),(0,g.jsx)(u.Z,{className:b?"":m.content,children:h})]}))}))},32509:function(e,n,t){"use strict";var a=t(93433),o=t(1413),r=t(72791),i=t(11135),c=t(25787),l=t(23814),s=t(21435),d=t(20068),u=t(13400),v=t(42419),h=t(27247),m=t(40968),p=t(84741),f=t(80184);n.Z=(0,c.Z)((function(e){return(0,i.Z)((0,o.Z)({bottomContainer:{display:"flex",flexGrow:1,alignItems:"center","& div":{flexGrow:1,width:"100%"}},shortened:{gridTemplateColumns:"auto auto 20px 20px",display:"grid",gridGap:20,paddingRight:20}},l.oO))}))((function(e){var n=e.classes,t=e.paramName,o=e.newValues,i=e.setNewValues,c=e.error,l=e.setError,Z=function(e){l((0,p.h)(c,e))};(0,r.useEffect)((function(){for(var e=[],n=0;n<o.length;n++)e.push({fieldKey:"key-".concat(n.toString()),required:!1,value:o[n].key,pattern:/^[a-zA-Z0-9-_.]{1,63}$/,customPatternMessage:"Invalid key"}),e.push({fieldKey:"val-".concat(n.toString()),required:!1,value:o[n].value,pattern:/^[a-zA-Z0-9-_.]{1,63}$/,customPatternMessage:"Invalid value"});var t=(0,m.R)(e);l(t)}),[o,l]);var g=o.map((function(e,l){return(0,f.jsx)(r.Fragment,{children:(0,f.jsxs)("div",{className:n.shortened,children:[(0,f.jsx)(s.Z,{id:"key-".concat(l.toString()),label:"",placeholder:"Key",name:"key-".concat(l.toString()),value:o[l].key,onChange:function(e){var n=(0,a.Z)(o);n[l].key=e.target.value,i(n),Z("key-".concat(l.toString()))},index:l,error:c["key-".concat(l.toString())]||""},"csv-key-".concat(l.toString())),(0,f.jsx)(s.Z,{id:"val-".concat(l.toString()),label:"",placeholder:"Value",name:"val-".concat(l.toString()),value:o[l].value,onChange:function(e){var n=(0,a.Z)(o);n[l].value=e.target.value,i(n),Z("val-".concat(l.toString()))},index:l,error:c["val-".concat(l.toString())]||""},"csv-val-".concat(l.toString())),(0,f.jsx)(d.Z,{title:"Add ".concat(t),"aria-label":"addlabel",children:(0,f.jsx)(u.Z,{size:"small",onClick:function(){var e=(0,a.Z)(o);e.push({key:"",value:""}),i(e)},children:(0,f.jsx)(v.Z,{})})}),(0,f.jsx)(d.Z,{title:"Remove","aria-label":"removeLabel",children:(0,f.jsx)(u.Z,{size:"small",style:{marginLeft:16},onClick:function(){if(1===o.length&&i([{key:"",value:""}]),o.length>1){var e=(0,a.Z)(o);e.splice(l,1),i(e)}},children:(0,f.jsx)(h.Z,{})})})]})},"keyvalue-".concat(l.toString()))}));return(0,f.jsx)(r.Fragment,{children:g})}))},47879:function(e,n,t){"use strict";var a=t(1413),o=t(72791),r=t(60364),i=t(26181),c=t.n(i),l=t(11135),s=t(25787),d=t(23814),u=t(92983),v=t(80184),h=(0,r.$j)((function(e){return{loadingTenant:e.tenants.loadingTenant,selectedTenant:e.tenants.currentTenant,tenant:e.tenants.tenantInfo,logEnabled:c()(e.tenants.tenantInfo,"logEnabled",!1),monitoringEnabled:c()(e.tenants.tenantInfo,"monitoringEnabled",!1),encryptionEnabled:c()(e.tenants.tenantInfo,"encryptionEnabled",!1),minioTLS:c()(e.tenants.tenantInfo,"minioTLS",!1),consoleTLS:c()(e.tenants.tenantInfo,"consoleTLS",!1),consoleEnabled:c()(e.tenants.tenantInfo,"consoleEnabled",!1),adEnabled:c()(e.tenants.tenantInfo,"idpAdEnabled",!1),oidcEnabled:c()(e.tenants.tenantInfo,"idpOidcEnabled",!1)}}),null);n.Z=(0,s.Z)((function(e){return(0,l.Z)((0,a.Z)((0,a.Z)({},d.oZ),{},{listHeight:{height:"50"}},(0,d.Bz)(e.spacing(4))))}))(h((function(e){var n=e.classes,t=e.records,a=e.recordName;return(0,v.jsx)(o.Fragment,{children:(0,v.jsx)(u.Z,{columns:[{label:"Key",elementKey:"key"},{label:"Value",elementKey:"value"}],isLoading:!1,records:t,itemActions:[],entityName:a,idField:"name",customPaperHeight:n.listHeight})})})))},42419:function(e,n,t){"use strict";var a=t(95318);n.Z=void 0;var o=a(t(45649)),r=t(80184),i=(0,o.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.Z=i},26759:function(e,n,t){"use strict";var a=t(95318);n.Z=void 0;var o=a(t(45649)),r=t(80184),i=(0,o.default)((0,r.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");n.Z=i},70366:function(e,n,t){"use strict";var a=t(95318);n.Z=void 0;var o=a(t(45649)),r=t(80184),i=(0,o.default)((0,r.jsx)("path",{d:"m7 14 5-5 5 5z"}),"ArrowDropUp");n.Z=i},27247:function(e,n,t){"use strict";var a=t(95318);n.Z=void 0;var o=a(t(45649)),r=t(80184),i=(0,o.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=i},97911:function(e,n,t){"use strict";var a=t(95318);n.Z=void 0;var o=a(t(45649)),r=t(80184),i=(0,o.default)((0,r.jsx)("path",{d:"M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z"}),"ViewColumn");n.Z=i},94454:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var a=t(4942),o=t(63366),r=t(87462),i=t(72791),c=t(94419),l=t(12065),s=t(97278),d=t(76189),u=t(80184),v=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(14036),f=t(31402),Z=t(66934),g=t(21217);function x(e){return(0,g.Z)("MuiCheckbox",e)}var k=(0,t(75878).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),b=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],y=(0,Z.ZP)(s.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,p.Z)(t.color))]]}})((function(e){var n,t=e.theme,o=e.ownerState;return(0,r.Z)({color:t.palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:(0,l.Fq)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(n={},(0,a.Z)(n,"&.".concat(k.checked,", &.").concat(k.indeterminate),{color:t.palette[o.color].main}),(0,a.Z)(n,"&.".concat(k.disabled),{color:t.palette.action.disabled}),n))})),j=(0,u.jsx)(h,{}),S=(0,u.jsx)(v,{}),z=(0,u.jsx)(m,{}),C=i.forwardRef((function(e,n){var t,a,l=(0,f.Z)({props:e,name:"MuiCheckbox"}),s=l.checkedIcon,d=void 0===s?j:s,v=l.color,h=void 0===v?"primary":v,m=l.icon,Z=void 0===m?S:m,g=l.indeterminate,k=void 0!==g&&g,C=l.indeterminateIcon,E=void 0===C?z:C,I=l.inputProps,M=l.size,w=void 0===M?"medium":M,H=(0,o.Z)(l,b),V=k?E:Z,N=k?E:d,B=(0,r.Z)({},l,{color:h,indeterminate:k,size:w}),P=function(e){var n=e.classes,t=e.indeterminate,a=e.color,o={root:["root",t&&"indeterminate","color".concat((0,p.Z)(a))]},i=(0,c.Z)(o,x,n);return(0,r.Z)({},n,i)}(B);return(0,u.jsx)(y,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":k},I),icon:i.cloneElement(V,{fontSize:null!=(t=V.props.fontSize)?t:w}),checkedIcon:i.cloneElement(N,{fontSize:null!=(a=N.props.fontSize)?a:w}),ownerState:B,ref:n},H,{classes:P}))}))},26769:function(e,n,t){var a=t(39066),o=t(93629),r=t(43141);e.exports=function(e){return"string"==typeof e||!o(e)&&r(e)&&"[object String]"==a(e)}}}]);
//# sourceMappingURL=5026.69171baa.chunk.js.map