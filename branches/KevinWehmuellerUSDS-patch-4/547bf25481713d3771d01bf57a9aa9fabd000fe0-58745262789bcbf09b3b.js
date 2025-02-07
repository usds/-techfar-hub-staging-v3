"use strict";(self.webpackChunktech_far_hub=self.webpackChunktech_far_hub||[]).push([[1713],{407:function(e,t,r){r.d(t,{Z:function(){return H}});var n=r(7294),a=r(1151);const l=e=>{let{children:t}=e;return n.createElement("div",{className:"usa-alert usa-alert--warning"},n.createElement("div",{className:"usa-alert__body"},n.createElement("h4",{className:"usa-alert__heading"},"TODO or Question"),n.createElement("p",{className:"usa-alert__text"},t)))},s=e=>{let{children:t,heading:r}=e;return r=r||"Summary",n.createElement("div",{className:"usa-alert usa-alert--info"},n.createElement("div",{className:"usa-alert__body"},n.createElement("h4",{className:"usa-alert__heading"},r),n.createElement("div",{className:"usa-alert__text"},t)))};var i=r(958),o=r(1883);var c,m=e=>{let{children:t,media:r="/assets/img/ux-indonesia-8mikJ83LmSQ-unsplash.jpg",media_alt:a="A stock image",heading:l="External resources"}=e;return n.createElement(i.Card,{layout:"flagDefault",headerFirst:!0,gridLayout:{tablet:{col:12}},className:"tfh-lifecycleResouces"},n.createElement(i.CardHeader,null,n.createElement("h3",{className:"usa-card__heading"},l)),n.createElement(i.CardMedia,{exdent:!0},n.createElement("img",{src:(0,o.withPrefix)(r),alt:a})),n.createElement("div",{className:"tfh-lifecycleResouces-internal"},n.createElement(i.CardBody,null,t)))},d=new Uint8Array(16);function u(){if(!c&&!(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(d)}var p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var h=function(e){return"string"==typeof e&&p.test(e)},f=[],y=0;y<256;++y)f.push((y+256).toString(16).substr(1));var g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase();if(!h(r))throw TypeError("Stringified UUID is invalid");return r};var E=function(e,t,r){var n=(e=e||{}).random||(e.rng||u)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var a=0;a<16;++a)t[r+a]=n[a];return t}return g(n)};const b=e=>{let{children:t}=e;return n.createElement("div",{className:"process-list"},(e=>{const t=n.createElement(i.Alert,{type:"warning",headingLevel:"h3",heading:"Error in process list"},"A process list must be an ordered list.",n.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if("ol"!==e.type)return t;const r=E(),a=e=>e&&"object"==typeof e&&"type"in e;let l=e.props.children.filter(a);return l.every((e=>"li"==e.type))?n.createElement(i.ProcessList,null,l.map(((e,t)=>{if("string"==typeof e.props.children)return n.createElement(i.ProcessListItem,{key:"process-list-"+r+"-item-"+t},n.createElement(i.ProcessListHeading,{type:"h4",key:"process-list-"+r+"-heading-"+t},e.props.children));{const l=e.props.children.filter(a);return n.createElement(i.ProcessListItem,{key:"process-list-"+r+"-item-"+t},n.createElement(i.ProcessListHeading,{type:"h4",key:"process-list-"+r+"-heading-"+t},l[0].props.children),l.length>1&&l.slice(1))}}))):t})(t))};var v=r(5785);const w=e=>{let{children:t}=e;const r=n.createElement(i.Alert,{type:"warning",headingLevel:"h3",heading:"Error in process list"},"A MultiStep list must be an ordered list.",n.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if("ol"!==t.type)return r;const a=E(),l=e=>e&&"object"==typeof e&&"type"in e;let s=t.props.children.filter(l);if(!s.every((e=>e&&"object"==typeof e&&"type"in e&&"li"==e.type)))return r;const[o,c]=n.useState([!0].concat((0,v.Z)(Array(s.length).fill(!1)))),m=[],d=[];return s.forEach(((e,t)=>{if(e&&"object"==typeof e&&"props"in e&&"children"in e.props){const r=e.props.children.filter(l);m.push(n.createElement("li",{className:"usa-step-indicator__segment "+(o[t]?"usa-step-indicator__segment--current":"usa-step-indicator__segment--complete"),key:"multistep-"+a+"-heading-"+t},n.createElement("div",{className:"usa-step-indicator__segment-label",key:"multistep-"+a+"--indicator-"+t},!o[t]&&n.createElement("a",{key:"multistep-"+a+"-heading-control-"+t,href:"#","aria-selected":!!o[t],role:"tab",tabIndex:o[t]?-1:0,id:"multistep-"+a+"-heading-"+t,onClick:e=>{(e=>{c((()=>{const t=Array(o.length).fill(!1);return t[e]=!0,t}))})(t),e.preventDefault()}},r[0]),o[t]&&n.createElement("div",{"aria-selected":!!o[t],role:"tab",tabIndex:o[t]?-1:0,id:"multistep-"+a+"-heading-"+t},r[0])))),d.push(n.createElement("div",{key:"multistep-"+a+"-body-wrapper-"+t,role:"tabpanel","aria-labelledby":"multistep-"+a+"-heading-"+t},o[t]&&n.createElement("div",{key:"multistep-"+a+"-body-"+t,className:"tfh-multistep__content-item"},r.slice(1))))}})),n.createElement(i.CardGroup,{className:"tfh-multistep-container"},n.createElement(i.Card,{key:"tfh-multistep-"+a+"-wrapper",role:"tablist"},n.createElement(i.CardBody,null,n.createElement("div",{className:"tfh-multistep",key:"tfh-multistep-"+a},n.createElement("div",{className:"usa-step-indicator","aria-label":"progress",key:"tfh-multistep-indicator-wrapper-"+a},n.createElement("ol",{className:"usa-step-indicator__segments",key:"tfh-multistep-"+a+"-headings-container"},m)),n.createElement("div",{className:"tfh-multipstep__content-block",key:"tfh-multistep-"+a+"-bodies-container"},d)))))};var k=e=>(0,n.isValidElement)(e)&&Boolean(e.props.children);const _=e=>null==e||"boolean"==typeof e||"{}"===JSON.stringify(e)?"":e.toString(),A=e=>e instanceof Array||(0,n.isValidElement)(e)?n.Children.toArray(e).reduce(((e,t)=>{let r="";return r=(0,n.isValidElement)(t)&&k(t)?A(t.props.children):(0,n.isValidElement)(t)&&!k(t)?"":_(t),e.concat(r)}),""):_(e);var C=A;const N=e=>e&&"object"==typeof e&&"type"in e,x=e=>e&&"object"==typeof e&&"type"in e&&"ol"==e.type&&"props"in e&&"children"in e.props&&Array.isArray(e.props.children),S=e=>{let{children:t}=e;const r=n.createElement(i.Alert,{type:"warning",headingLevel:"h3",heading:"Error in Assessment"},"An assessment must be an ordered list with a score section at the end",n.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if(!t||!Array.isArray(t)||2!==t.length)return r;let a,l;if("object"!=typeof t[0]||!("type"in t[0])||"ol"!==t[0].type)return r;if(a=t[0],"object"!=typeof t[1])return r;l=t[1];let s=a.props.children.filter(N);if(!s.every((e=>e&&"object"==typeof e&&"type"in e&&"li"==e.type)))return r;const[o,c]=n.useState([!0].concat((0,v.Z)(Array(s.length+1).fill(!1)))),[m,d]=n.useState(Array(s.length).fill(1)),u=e=>{c((()=>{const t=Array(o.length).fill(!1);return t[e]=!0,t}))},p=(e,t)=>{d((()=>{const r=(0,v.Z)(m);return r[e]=t,r}))},h=s.map(((e,t)=>{let r,a="Next Question",l=!1;return t===s.length-1&&(a="Complete Assessment",l=!0),r=n.createElement("a",{onClick:()=>{u(t+1)},className:"tfh-assessment__next-question-link"},a),n.createElement(n.Fragment,null,o[t]&&n.createElement(L,{itemNumber:t,handleUpdate:p,currentScores:m},e),o[t]&&r)})),f=n.createElement(j,{scores:m,children:l.props.children,clickHandler:u});return h.push(n.createElement(n.Fragment,null,o[s.length]&&f)),n.createElement(n.Fragment,null,n.createElement(i.Card,{className:"tfh-assessment"},n.createElement(i.CardBody,null,h)))},L=e=>{let{children:t,itemNumber:r,handleUpdate:a,currentScores:l}=e;const s=n.createElement(i.Alert,{type:"warning",headingLevel:"h3",heading:"Error in Assessment Item"},"An assessment item must contain an ordered list",n.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));if(!(t&&"object"==typeof t&&"props"in t&&"children"in t.props&&Array.isArray(t.props.children)))return s;const o=t.props.children.filter(N);if(!o.some(x))return s;const c=o.map((e=>{if(e&&x(e)&&"object"==typeof e&&"props"in e){const t=e.props.children.filter(N);return n.createElement(i.Fieldset,null,n.createElement("ol",{className:"add-list-reset"},t.map(((e,t)=>{const s=e.props.children,o=t+1,c="assessment-"+r,m="assessment-"+r+"-"+t;return n.createElement("li",null,n.createElement(i.Radio,{id:m,name:c,label:o+" - "+s,value:o,onClick:()=>a(r,o),checked:l[r]===o}))}))))}return e&&"object"==typeof e&&"type"in e&&"p"===e.type&&"props"in e&&"children"in e.props?n.createElement("h3",null,e.props.children):e}));return n.createElement("form",null,c)},j=e=>{let{children:t,scores:r=[],clickHandler:a}=e;const l=r.reduce(((e,t)=>+e+ +t)),s=n.createElement(i.Alert,{type:"warning",headingLevel:"h3",heading:"Error in score key"},"An assessment score must contain an ordered list of score ranges",n.createElement("a",{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"See the markdown guide for examples."));return t&&Array.isArray(t)&&t.some(x)?n.createElement(n.Fragment,null,n.createElement("h3",null,"Total: ",String(l)," Points"),t.filter(N).map((e=>{if(e)return e&&x(e)&&"object"==typeof e&&"props"in e?R(e.props.children.filter(N),l):e})),n.createElement("span",{onClick:()=>a(0),className:"usa-button"},"Retake Assessment"),n.createElement("span",{className:"usa-clearfix"})):s},R=(e,t)=>e.map((e=>{if(e.props.children.length>=2){const r=e.props.children.filter(N)[0],n=C(r).match(/\(\s*(?<lowBound>[0-9]+)\s*-\s*(?<highBound>[0-9]+).* points/);let a,l;if(n&&n.groups&&(a=Number(n.groups.lowBound),l=Number(n.groups.highBound),t>=a&&t<=l))return e}}));var F=r(991),P=r(272);const V=e=>{if(e&&"src"in e&&e.src){const{site:t}=(0,o.useStaticQuery)("1271460761"),r=t.siteMetadata.siteUrl,a=new P.h(e.src,r);return a.isAbsolute||(e={...e,src:(0,o.withPrefix)(a.authoritative)}),n.createElement("img",e)}return n.createElement("img",e)};var H=e=>{let{children:t}=e;const r={Alert:l,Summary:s,ExternalResources:m,ProcessList:b,MultiStep:w,Assessment:S,AssessmentScore:j,a:F.n,img:V};return n.createElement(a.Zo,{components:r},t)}},5007:function(e,t,r){var n=r(1865),a=r.n(n),l=r(958),s=r(1883),i=r(7294);t.Z=e=>{let{node:t,width:r=3}=e;return t.html&&t.frontmatter&&t.frontmatter.link&&t.frontmatter.heading?i.createElement(l.Card,{headerFirst:!0,gridLayout:{tablet:{col:r}},key:"resource-"+a()(t.frontmatter.heading)},i.createElement(l.CardHeader,null,i.createElement("h4",null,t.frontmatter.heading)),i.createElement(l.CardBody,{dangerouslySetInnerHTML:{__html:t.html}}),i.createElement(l.CardFooter,null,i.createElement(s.Link,{to:t.frontmatter.link,className:"usa-button","aria-label":"View "+t.frontmatter.heading},"View"))):i.createElement(l.Card,{headerFirst:!0},i.createElement(l.CardHeader,null,"ERROR in Resouces Snippet"))}},4001:function(e,t,r){r.d(t,{H:function(){return a}});var n=r(7294);const a=e=>{var t,r,a,l;let{frontmatter:s}=e;const i=null!==(t=null!==(r=null==s?void 0:s.meta_title)&&void 0!==r?r:null==s?void 0:s.heading)&&void 0!==t?t:"TechFAR Hub",o=null!==(a=null!==(l=null==s?void 0:s.meta_description)&&void 0!==l?l:null==s?void 0:s.promo_description)&&void 0!==a?a:null,c=null==s?void 0:s.robots,m=null==s?void 0:s.canonical;return n.createElement(n.Fragment,null,n.createElement("title",null,i),n.createElement("meta",{name:"title",content:i}),n.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.createElement("meta",{charSet:"utf-8"}),n.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),o&&n.createElement("meta",{name:"description",content:o}),c&&n.createElement("meta",{name:"robots",content:c}),m&&n.createElement("link",{rel:"canonical",href:m}))}},1151:function(e,t,r){r.d(t,{Zo:function(){return i},ah:function(){return l}});var n=r(7294);const a=n.createContext({});function l(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:r}){let i=l(e);return r&&(i=e||s),n.createElement(a.Provider,{value:i},t)}}}]);
//# sourceMappingURL=547bf25481713d3771d01bf57a9aa9fabd000fe0-58745262789bcbf09b3b.js.map