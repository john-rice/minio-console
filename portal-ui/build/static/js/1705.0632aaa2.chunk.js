(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1705],{71705:function(n,e,t){"use strict";t.r(e);var u=t(29439),r=t(72791),o=t(9505),c=t(64554),i=t(56087),l=t(38442),s=t(26181),a=t.n(s),f=t(81918),d=t(29823),p=t(42419),v=t(75578),Z=t(29945),h=t(87995),x=t(81551),_=t(80184),T=(0,v.Z)(r.lazy((function(){return Promise.all([t.e(5473),t.e(5994),t.e(7391),t.e(247)]).then(t.bind(t,40247))}))),b=(0,v.Z)(r.lazy((function(){return t.e(2763).then(t.bind(t,22763))})));e.default=function(n){var e=n.bucketName,t=(0,x.TL)(),s=(0,r.useState)(null),v=(0,u.Z)(s,2),m=v[0],j=v[1],C=(0,r.useState)(!1),g=(0,u.Z)(C,2),S=g[0],k=g[1],y=(0,r.useState)([]),G=(0,u.Z)(y,2),I=G[0],P=G[1],A=(0,r.useState)(["",""]),E=(0,u.Z)(A,2),F=E[0],N=E[1],U=(0,r.useState)(!1),w=(0,u.Z)(U,2),O=w[0],z=w[1],M=(0,o.Z)((function(n){var e,t;null!=n&&null!=(null===n||void 0===n?void 0:n.details)&&"tags"in(null===n||void 0===n?void 0:n.details)&&(j(null===n||void 0===n||null===(e=n.details)||void 0===e?void 0:e.tags),P(Object.keys(null===n||void 0===n||null===(t=n.details)||void 0===t?void 0:t.tags)))}),(function(n){t((0,h.Ih)(n))})),B=(0,u.Z)(M,2),D=B[0],K=B[1],R=function(){K("GET","/api/v1/buckets/".concat(e))};return(0,r.useEffect)((function(){R()}),[e]),(0,_.jsxs)(c.Z,{children:[D?(0,_.jsx)(Z.aNw,{style:{width:16,height:16}}):null,(0,_.jsx)(l.s,{scopes:[i.Ft.S3_GET_BUCKET_TAGGING,i.Ft.S3_GET_ACTIONS],resource:e,children:(0,_.jsxs)(c.Z,{sx:{display:"flex",flexFlow:"column"},children:[(0,_.jsx)(c.Z,{children:I&&I.map((function(n,t){var u=a()(m,"".concat(n),"");return""!==u?(0,_.jsx)(l.s,{scopes:[i.Ft.S3_PUT_BUCKET_TAGGING,i.Ft.S3_PUT_ACTIONS],resource:e,matchAll:!0,errorProps:{deleteIcon:null,onDelete:null},children:(0,_.jsx)(f.Z,{style:{textTransform:"none",marginRight:"5px"},size:"small",label:"".concat(n," : ").concat(u),color:"primary",deleteIcon:(0,_.jsx)(d.Z,{}),onDelete:function(){!function(n,e){N([n,e]),z(!0)}(n,u)}})},"chip-".concat(t)):null}))}),(0,_.jsx)(l.s,{scopes:[i.Ft.S3_PUT_BUCKET_TAGGING,i.Ft.S3_PUT_ACTIONS],resource:e,errorProps:{disabled:!0,onClick:null},children:(0,_.jsx)(f.Z,{style:{maxWidth:80,marginTop:"10px"},icon:(0,_.jsx)(p.Z,{}),clickable:!0,size:"small",label:"Add tag",color:"primary",variant:"outlined",onClick:function(){k(!0)}})})]})}),S&&(0,_.jsx)(T,{modalOpen:S,currentTags:m,bucketName:e,onCloseAndUpdate:function(n){k(!1),n&&R()}}),O&&(0,_.jsx)(b,{deleteOpen:O,currentTags:m,bucketName:e,onCloseAndUpdate:function(n){z(!1),n&&R()},selectedTag:F})]})}},42419:function(n,e,t){"use strict";var u=t(64836);e.Z=void 0;var r=u(t(45649)),o=t(80184),c=(0,r.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=c},29823:function(n,e,t){"use strict";var u=t(64836);e.Z=void 0;var r=u(t(45649)),o=t(80184),c=(0,r.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");e.Z=c},45649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return u.createSvgIcon}});var u=t(28610)},31260:function(n,e,t){"use strict";var u=t(78949);e.Z=u.Z},28610:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return r.Z},createChainedFunction:function(){return o.Z},createSvgIcon:function(){return c.Z},debounce:function(){return i.Z},deprecatedPropType:function(){return l},isMuiElement:function(){return s.Z},ownerDocument:function(){return a.Z},ownerWindow:function(){return f.Z},requirePropFactory:function(){return d},setRef:function(){return p},unstable_ClassNameGenerator:function(){return m},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return Z.Z},unsupportedProp:function(){return h},useControlled:function(){return x.Z},useEventCallback:function(){return _.Z},useForkRef:function(){return T.Z},useIsFocusVisible:function(){return b.Z}});var u=t(55902),r=t(14036),o=t(31260),c=t(76189),i=t(83199);var l=function(n,e){return function(){return null}},s=t(19103),a=t(98301),f=t(17602);t(87462);var d=function(n,e){return function(){return null}},p=t(62971).Z,v=t(40162),Z=t(67384);var h=function(n,e,t,u,r){return null},x=t(98278),_=t(89683),T=t(42071),b=t(23031),m={configure:function(n){u.Z.configure(n)}}},64836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=1705.0632aaa2.chunk.js.map