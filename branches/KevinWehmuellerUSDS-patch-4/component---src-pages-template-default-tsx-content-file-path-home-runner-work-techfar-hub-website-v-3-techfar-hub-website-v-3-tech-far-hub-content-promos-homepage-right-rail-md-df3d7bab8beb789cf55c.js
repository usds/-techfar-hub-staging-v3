(self.webpackChunktech_far_hub=self.webpackChunktech_far_hub||[]).push([[7695],{2632:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return f},default:function(){return h}});var r=n(1151),a=n(7294);function l(e){const t=Object.assign({h3:"h3",ol:"ol",li:"li",a:"a",p:"p"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,{id:"01-get-started"},"01. Get Started"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/KevinWehmuellerUSDS-patch-4/get-started/"},"What is the TechFAR Hub?")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/KevinWehmuellerUSDS-patch-4/get-started/#how-to-use-techfar-hub"},"How to Use the TFH")),"\n"),"\n",a.createElement(t.h3,{id:"02-tfh-lifecycle"},"02. TFH Lifecycle"),"\n",a.createElement(t.p,null,"See how the TechFAR Hub takes an agile approach to digital acquisition."),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/KevinWehmuellerUSDS-patch-4/pre-solicitation/"},"Pre-Solicitation")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/KevinWehmuellerUSDS-patch-4/solicitation/"},"Solicitation")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/KevinWehmuellerUSDS-patch-4/evaluation/"},"Evaluation")),"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/KevinWehmuellerUSDS-patch-4/contract-administration/"},"Contract Administration")),"\n"),"\n",a.createElement(t.h3,{id:"03-resources"},"03. Resources"),"\n",a.createElement(t.p,null,"View first-hand experiences of fellows acquisition professionals, get tools, access training, and more"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,a.createElement(t.a,{href:"/techfar-hub-staging-v3/branches/KevinWehmuellerUSDS-patch-4/resources/templates-samples/agile-team-estimator/"},"Agile Estimator")),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(1244),s=n(407),o=n(4001),m=n(5537);const u=e=>{let{data:t,children:n,pageContext:r}=e;return t.currentPage.frontmatter&&t.siblings&&t.currentPage.tableOfContents?a.createElement(m.Z,{frontmatter:t.currentPage.frontmatter,siblings:t.siblings,tableOfContents:t.currentPage.tableOfContents,pageContext:r,useNextLink:!1},a.createElement(s.Z,null,n)):a.createElement(c.Z,{pagePath:r.pagePath},a.createElement("h1",null,"Something went wrong"))};function h(e){return a.createElement(u,e,a.createElement(i,e))}const f=e=>{var t;let{data:n}=e;return a.createElement(o.H,{frontmatter:null===(t=n.currentPage)||void 0===t?void 0:t.frontmatter})}},5537:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(958),a=n(1883),l=n(7294),i=n(1244),c=n(5007);var s=()=>{const e=(0,a.useStaticQuery)("681239289");return l.createElement(r.CardGroup,null,e.allMarkdownRemark.edges.map((e=>{let{node:t}=e;return l.createElement(c.Z,{node:t,key:t.id})})))},o=n(991),m=n(1804),u=n.n(m);const h=e=>{let{tags:t}=e;if(t&&t.length){const e=t.map((e=>{if(e){const t=(0,a.withPrefix)("/tags/"+u()(e));return l.createElement(o.n,{href:t,key:"tag-"+e},e)}}));return l.createElement("div",{className:"tfh-tagBox"},l.createElement("h4",null,"Tags"),e)}return null};var f=e=>{let{frontmatter:t,siblings:n,tableOfContents:c,pageContext:m,children:u,useNextLink:f=!1,showSiblings:g=!0}=e;const E=null==t?void 0:t.slug,d=2===m.pathParts.length,p=c.items?c.items.map((e=>{const t=g?"font-ui-3xs":"";return l.createElement("a",{href:e.url,key:e.url,className:t},e.title)})):[];let b=!1,v=null;const k=n.nodes.map((e=>{if(e&&e.frontmatter&&e.frontmatter.slug&&e.frontmatter.heading&&e.parent&&"relativeDirectory"in e.parent){const t="index"===e.frontmatter.slug?"":e.frontmatter.slug;if(d)return e.parent.relativeDirectory.startsWith(m.pathParts.join("/").slice(1))&&e.parent.relativePath!==m.filePath?e.frontmatter.link?l.createElement(o.n,{href:e.frontmatter.link},e.frontmatter.heading):l.createElement(a.Link,{to:"/"+e.parent.relativeDirectory+"/"+t},e.frontmatter.heading):null;if(e.frontmatter.slug===E&&e.parent.relativePath===m.filePath)return b=!0,l.createElement(l.Fragment,null,g&&l.createElement("a",{href:"#",className:"usa-current",key:"current"},e.frontmatter.heading),p.length>0&&l.createElement(r.SideNav,{items:p}));if(g)return b&&(e.frontmatter.link||(v=e.frontmatter),b=!1),e.frontmatter.link?l.createElement(o.n,{href:e.frontmatter.link},e.frontmatter.heading):l.createElement(a.Link,{to:"/"+e.parent.relativeDirectory+"/"+t},e.frontmatter.heading)}})).filter((e=>!!e));return l.createElement(i.Z,{breadCrumbs:m.breadCrumbs,pagePath:m.pagePath},l.createElement(r.Grid,{row:!0,gap:2,className:"margin-bottom-4"},l.createElement(r.Grid,{tablet:{col:2}},l.createElement("div",{className:"position-sticky top-0"},l.createElement(r.SideNav,{items:k}),(null==t?void 0:t.tags)&&l.createElement(h,{tags:t.tags}))),l.createElement(r.Grid,{tablet:{col:10}},l.createElement("h1",null,null==t?void 0:t.heading),u,f&&null!==v&&l.createElement("span",{className:"tfh-next-link"},l.createElement(a.Link,{to:m.parentPath+"/"+v.slug},l.createElement("strong",null,"Next: ",v.heading))))),l.createElement(r.Grid,{row:!0,className:"tfh-resources-bar"},l.createElement(r.Grid,{col:"fill"},l.createElement("hr",null),l.createElement("h3",{className:"font-ui-xl"},"Resources"),l.createElement(s,null))))}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r}}]);
//# sourceMappingURL=component---src-pages-template-default-tsx-content-file-path-home-runner-work-techfar-hub-website-v-3-techfar-hub-website-v-3-tech-far-hub-content-promos-homepage-right-rail-md-df3d7bab8beb789cf55c.js.map