(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[844],{74932:(e,t,o)=>{"use strict";o.d(t,{S:()=>a});o(69060);var n=o(39427),r=o(82496);const a=[{label:"Access Key",elementKey:"accessKey"},{label:"Expiry",elementKey:"expiration",renderFunction:e=>{if(e){const t=n.CS.fromISO(e).toUTC().toFormat("y/M/d hh:mm:ss z");return(0,r.jsx)("span",{title:t,children:t})}return""}},{label:"Status",elementKey:"accountStatus",renderFunction:e=>"off"===e?"Disabled":"Enabled"},{label:"Name",elementKey:"name"},{label:"Description",elementKey:"description"}]},45971:(e,t,o)=>{"use strict";o.d(t,{c:()=>y});var n=o(69060),r=o(66152),a=o(61180),i=o(78256),l=o(18728),c=o(66156),s=o(61060),p=o(95705),u=o(4836),d=o(61628),f=o(39427),m=o(82496);const y=e=>{let{open:t,selectedAccessKey:o,closeModalAndRefresh:y}=e;const b=(0,c.Ab)(),[h,g]=(0,n.useState)(!1),[x,v]=(0,n.useState)(""),[C,S]=(0,n.useState)(""),[w,k]=(0,n.useState)(""),[j,E]=(0,n.useState)(),[_,A]=(0,n.useState)("enabled");(0,n.useEffect)((()=>{if(!h&&""!==o){const e=(0,s.CO)(o);g(!0),a.m.serviceAccounts.getServiceAccount(e).then((e=>{g(!1);const t=e.data;S((null===t||void 0===t?void 0:t.name)||""),null!==t&&void 0!==t&&t.expiration&&E(f.CS.fromISO(null===t||void 0===t?void 0:t.expiration)),k((null===t||void 0===t?void 0:t.description)||""),A(t.accountStatus),v(t.policy||"")})).catch((e=>{g(!1),b((0,p.op)((0,i.K)(e)))}))}}),[o]);return(0,m.jsx)(u.c,{title:"Edit details of - ".concat(o),modalOpen:t,onClose:()=>{y()},titleIcon:(0,m.jsx)(r.GfT,{}),children:(0,m.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:e=>{var t;t=x,e.preventDefault(),a.m.serviceAccounts.updateServiceAccount((0,s.CO)(o),{policy:t,description:w,expiry:j,name:C,status:_}).then((()=>{y()})).catch((async e=>{const t=await e.json();b((0,p.aW)((0,i.K)(t)))}))},children:(0,m.jsxs)(r.yeN,{container:!0,children:[(0,m.jsx)(r.yeN,{item:!0,xs:12,children:(0,m.jsx)(l.c,{label:"Access Key Policy",value:x,onChange:e=>{v(e)},editorHeight:"350px",helptip:(0,m.jsx)(n.Fragment,{children:(0,m.jsx)("a",{target:"blank",href:"https://min.io/docs/minio/kubernetes/upstream/administration/identity-access-management/policy-based-access-control.html#policy-document-structure",children:"Guide to access policy structure"})})})}),(0,m.jsx)(r.kvh,{sx:{marginBottom:"15px",marginTop:"15px",display:"flex",width:"100%","& label":{width:"195px"}},children:(0,m.jsx)(r.KuV,{noLabelMinWidth:!0,value:j,onChange:e=>{E(e)},id:"expiryTime",label:"Expiry",timeFormat:"24h",secondsSelector:!1})}),(0,m.jsx)(r.yeN,{xs:12,sx:{marginBottom:"15px"},children:(0,m.jsx)(r.q22,{value:C,size:120,label:"Name",id:"name",name:"name",type:"text",placeholder:"Enter a name",onChange:e=>{S(e.target.value)}})}),(0,m.jsx)(r.yeN,{xs:12,sx:{marginBottom:"15px"},children:(0,m.jsx)(r.q22,{size:120,value:w,label:"Description",id:"description",name:"description",type:"text",placeholder:"Enter a description",onChange:e=>{k(e.target.value)}})}),(0,m.jsxs)(r.yeN,{xs:12,sx:{display:"flex",alignItems:"center",justifyContent:"start",fontWeight:600,color:"rgb(7, 25, 62)",gap:2,marginBottom:"15px"},children:[(0,m.jsx)("label",{style:{width:"150px"},children:"Status"}),(0,m.jsx)(r.kvh,{sx:{padding:"2px"},children:(0,m.jsx)(r.Wkk,{style:{gap:"115px"},indicatorLabels:["Enabled","Disabled"],checked:"on"===_,id:"saStatus",name:"saStatus",label:"",onChange:e=>{A(e.target.checked?"on":"off")},value:"yes"})})]}),(0,m.jsxs)(r.yeN,{item:!0,xs:12,sx:d.W2.modalButtonBar,children:[(0,m.jsx)(r.qaq,{id:"cancel-sa-policy",type:"button",variant:"regular",onClick:()=>{y()},disabled:h,label:"Cancel"}),(0,m.jsx)(r.qaq,{id:"save-sa-policy",type:"submit",variant:"callAction",color:"primary",disabled:h,label:"Update"})]})]})})})}},99748:(e,t,o)=>{"use strict";o.d(t,{c:()=>a});var n=o(69060),r=o(82496);const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(o){return(0,r.jsx)(n.Suspense,{fallback:t,children:(0,r.jsx)(e,{...o})})}}},18728:(e,t,o)=>{"use strict";o.d(t,{c:()=>s});var n=o(69060),r=o(66152),a=o(86876),i=o.n(a),l=o(84612),c=o(82496);const s=e=>{let{value:t,label:o="",tooltip:a="",mode:s="json",onChange:p,editorHeight:u=250,helptip:d}=e;return(0,c.jsx)(r.MlX,{value:t,onChange:e=>p(e),mode:s,tooltip:a,editorHeight:u,label:o,helpTools:(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(l.c,{tooltip:"Copy to Clipboard",children:(0,c.jsx)(i(),{text:t,children:(0,c.jsx)(r.qaq,{type:"button",id:"copy-code-mirror",icon:(0,c.jsx)(r.gJD,{}),color:"primary",variant:"regular"})})})}),helpTip:d,helpTipPlacement:"right"})}},13844:(e,t,o)=>{"use strict";o.d(t,{Mj:()=>a,Ow:()=>i,ay:()=>l,i2:()=>c,yU:()=>s});o(69060);var n=o(66152),r=o(82496);const a=[{icon:(0,r.jsx)(n.Csk,{}),configuration_id:"region",configuration_label:"Region"},{icon:(0,r.jsx)(n.GQs,{}),configuration_id:"compression",configuration_label:"Compression"},{icon:(0,r.jsx)(n.UGn,{}),configuration_id:"api",configuration_label:"API"},{icon:(0,r.jsx)(n.QLM,{}),configuration_id:"heal",configuration_label:"Heal"},{icon:(0,r.jsx)(n.cKz,{}),configuration_id:"scanner",configuration_label:"Scanner"},{icon:(0,r.jsx)(n.on8,{}),configuration_id:"etcd",configuration_label:"Etcd"},{icon:(0,r.jsx)(n.Mz0,{}),configuration_id:"logger_webhook",configuration_label:"Logger Webhook"},{icon:(0,r.jsx)(n.CEO,{}),configuration_id:"audit_webhook",configuration_label:"Audit Webhook"},{icon:(0,r.jsx)(n.IvS,{}),configuration_id:"audit_kafka",configuration_label:"Audit Kafka"}],i={region:[{name:"name",required:!0,label:"Server Location",tooltip:'Name of the location of the server e.g. "us-west-rack2"',type:"string",placeholder:"e.g. us-west-rack-2"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",placeholder:"Enter custom notes if any"}],compression:[{name:"extensions",required:!1,label:"Extensions",tooltip:'Extensions to compress e.g. ".txt", ".log" or ".csv" -  you can write one per field',type:"csv",placeholder:"Enter an Extension",withBorder:!0},{name:"mime_types",required:!1,label:"Mime Types",tooltip:'Mime types e.g. "text/*", "application/json" or "application/xml" - you can write one per field',type:"csv",placeholder:"Enter a Mime Type",withBorder:!0}],api:[{name:"requests_max",required:!1,label:"Requests Max",tooltip:"Maximum number of concurrent requests, e.g. '1600'",type:"number",placeholder:"Enter Requests Max"},{name:"cors_allow_origin",required:!1,label:"Cors Allow Origin",tooltip:"List of origins allowed for CORS requests",type:"csv",placeholder:"Enter allowed origin e.g. https://example.com"},{name:"replication_workers",required:!1,label:"Replication Workers",tooltip:"Number of replication workers, defaults to 100",type:"number",placeholder:"Enter Replication Workers"},{name:"replication_failed_workers",required:!1,label:"Replication Failed Workers",tooltip:"Number of replication workers for recently failed replicas, defaults to 4",type:"number",placeholder:"Enter Replication Failed Workers"}],heal:[{name:"bitrotscan",required:!1,label:"Bitrot Scan",tooltip:"Perform bitrot scan on disks when checking objects during scanner",type:"on|off"},{name:"max_sleep",required:!1,label:"Max Sleep",tooltip:"Maximum sleep duration between objects to slow down heal operation, e.g. 2s",type:"duration",placeholder:"Enter Max Sleep Duration"},{name:"max_io",required:!1,label:"Max IO",tooltip:"Maximum IO requests allowed between objects to slow down heal operation, e.g. 3",type:"number",placeholder:"Enter Max IO"}],scanner:[{name:"delay",required:!1,label:"Delay Multiplier",tooltip:"Scanner delay multiplier, defaults to '10.0'",type:"number",placeholder:"Enter Delay"},{name:"max_wait",required:!1,label:"Max Wait",tooltip:"Maximum wait time between operations, defaults to '15s'",type:"duration",placeholder:"Enter Max Wait"},{name:"cycle",required:!1,label:"Cycle",tooltip:"Time duration between scanner cycles, defaults to '1m'",type:"duration",placeholder:"Enter Cycle"}],etcd:[{name:"endpoints",required:!0,label:"Endpoints",tooltip:'List of etcd endpoints e.g. "http://localhost:2379" - you can write one per field',type:"csv",placeholder:"Enter Endpoint"},{name:"path_prefix",required:!1,label:"Path Prefix",tooltip:'Namespace prefix to isolate tenants e.g. "customer1/"',type:"string",placeholder:"Enter Path Prefix"},{name:"coredns_path",required:!1,label:"Coredns Path",tooltip:'Shared bucket DNS records, default is "/skydns"',type:"string",placeholder:"Enter Coredns Path"},{name:"client_cert",required:!1,label:"Client Cert",tooltip:"Client cert for mTLS authentication",type:"string",placeholder:"Enter Client Cert"},{name:"client_cert_key",required:!1,label:"Client Cert Key",tooltip:"Client cert key for mTLS authentication",type:"string",placeholder:"Enter Client Cert Key"},{name:"comment",required:!1,label:"Comment",tooltip:"You can add a comment to this setting",type:"comment",multiline:!0,placeholder:"Enter custom notes if any"}],logger_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}],audit_webhook:[{name:"endpoint",required:!0,label:"Endpoint",type:"string",placeholder:"Enter Endpoint"},{name:"auth_token",required:!0,label:"Auth Token",type:"string",placeholder:"Enter Auth Token"}],audit_kafka:[{name:"enable",required:!1,label:"Enable",tooltip:"Enable audit_kafka target",type:"on|off",customValueProcess:e=>""===e||"on"===e?"on":"off"},{name:"brokers",required:!0,label:"Brokers",type:"csv",placeholder:"Enter Kafka Broker"},{name:"topic",required:!1,label:"Topic",type:"string",placeholder:"Enter Kafka Topic",tooltip:"Kafka topic used for bucket notifications"},{name:"sasl",required:!1,label:"Use SASL",tooltip:"Enable SASL (Simple Authentication and Security Layer) authentication",type:"on|off"},{name:"sasl_username",required:!1,label:"SASL Username",type:"string",placeholder:"Enter SASL Username",tooltip:"Username for SASL/PLAIN or SASL/SCRAM authentication"},{name:"sasl_password",required:!1,label:"SASL Password",type:"password",placeholder:"Enter SASL Password",tooltip:"Password for SASL/PLAIN or SASL/SCRAM authentication"},{name:"sasl_mechanism",required:!1,label:"SASL Mechanism",type:"string",placeholder:"Enter SASL Mechanism",tooltip:"SASL authentication mechanism"},{name:"tls",required:!1,label:"Use TLS",tooltip:"Enable TLS (Transport Layer Security)",type:"on|off"},{name:"tls_skip_verify",required:!1,label:"Skip TLS Verification",tooltip:"Trust server TLS without verification",type:"on|off"},{name:"client_tls_cert",required:!1,label:"Client Cert",tooltip:"Client cert for mTLS authentication",type:"string",placeholder:"Enter Client Cert"},{name:"client_tls_key",required:!1,label:"Client Cert Key",tooltip:"Client cert key for mTLS authentication",type:"string",placeholder:"Enter Client Cert Key"},{name:"tls_client_auth",required:!1,label:"TLS Client Auth",tooltip:"ClientAuth determines the Kafka server's policy for TLS client authorization",type:"string"},{name:"version",required:!1,label:"Version",tooltip:"Specify the version of the Kafka cluster",type:"string"}]},l=e=>e.filter((e=>""!==e.value)),c=(e,t,o)=>{const n=e.target,r=n.value;let a=[...o];return n.checked?a.push(r):a=a.filter((e=>e!==r)),t(a),a},s=e=>{let t={};return e.forEach((e=>{if(e.env_override){const o={value:e.env_override.value||"",overrideEnv:e.env_override.name||""};t={...t,[e.key]:o}}})),t}},52756:(e,t,o)=>{"use strict";o.d(t,{c:()=>u});var n=o(69060),r=o(66152),a=o(70780),i=o(95705),l=o(66156),c=o(61180),s=o(78256),p=o(82496);const u=e=>{let{closeDeleteModalAndRefresh:t,deleteOpen:o,selectedSAs:u}=e;const d=(0,l.Ab)(),[f,m]=(0,n.useState)(!1);if(!u)return null;return(0,p.jsx)(a.c,{title:"Delete Access Keys",confirmText:"Delete",isOpen:o,titleIcon:(0,p.jsx)(r.sB6,{}),isLoading:f,onConfirm:()=>{m(!0),c.m.serviceAccounts.deleteMultipleServiceAccounts(u).then((e=>{t(!0)})).catch((async e=>{const o=await e.json();d((0,i.aW)((0,s.K)(o))),t(!1)})).finally((()=>m(!1)))},onClose:()=>t(!1),confirmationContent:(0,p.jsxs)(n.Fragment,{children:["Are you sure you want to delete the selected ",u.length," ","Access Keys?"," "]})})}},43528:(e,t,o)=>{"use strict";o.d(t,{Kc:()=>a,aw:()=>r,iE:()=>i,m6:()=>n});const n=(e,t)=>{if(e.accessKey&&t.accessKey){if(e.accessKey>t.accessKey)return 1;if(e.accessKey<t.accessKey)return-1}return 0},r=(e,t)=>e.name>t.name?1:e.name<t.name?-1:0,a=(e,t)=>e>t?1:e<t?-1:0,i=(e,t)=>e.policy>t.policy?1:e.policy<t.policy?-1:0},2472:(e,t,o)=>{"use strict";var n=o(30888),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var o,a,i,l,c,s,p=!1;t||(t={}),o=t.debug||!1;try{if(i=n(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[t.format]||r.default;window.clipboardData.setData(a,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(u){o&&console.error("unable to copy using execCommand: ",u),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(u){o&&console.error("unable to copy using clipboardData: ",u),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),i()}return p}},80892:(e,t,o)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=l(o(69060)),a=l(o(2472)),i=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){b(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=y(e);if(t){var a=y(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,o)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(c,e);var t,o,n,l=f(c);function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return b(m(e=l.call.apply(l,[this].concat(o))),"onClick",(function(t){var o=e.props,n=o.text,i=o.onCopy,l=o.children,c=o.options,s=r.default.Children.only(l),p=(0,a.default)(n,c);i&&i(n,p),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t)})),e}return t=c,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=p(e,i),n=r.default.Children.only(t);return r.default.cloneElement(n,s(s({},o),{},{onClick:this.onClick}))}}])&&u(t.prototype,o),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(r.default.PureComponent);t.CopyToClipboard=h,b(h,"defaultProps",{onCopy:void 0,options:void 0})},86876:(e,t,o)=>{"use strict";var n=o(80892).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},30888:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=844.53519725.chunk.js.map