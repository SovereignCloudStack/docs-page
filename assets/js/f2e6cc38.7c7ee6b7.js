"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Standards, Docs and Organisation",type:"Procedural",status:"Stable",stabilized_at:new Date("2023-02-06T00:00:00.000Z"),track:"Global"},i=void 0,s={unversionedId:"active/scs-0002-v1-standards-docs-org",id:"active/scs-0002-v1-standards-docs-org",title:"Standards, Docs and Organisation",description:"Introduction",source:"@site/standards/active/scs-0002-v1-standards-docs-org.md",sourceDirName:"active",slug:"/active/scs-0002-v1-standards-docs-org",permalink:"/standards/active/scs-0002-v1-standards-docs-org",draft:!1,tags:[],version:"current",frontMatter:{title:"Standards, Docs and Organisation",type:"Procedural",status:"Stable",stabilized_at:"2023-02-06T00:00:00.000Z",track:"Global"},sidebar:"standards",previous:{title:"Sovereign Cloud Standards",permalink:"/standards/active/scs-0001-v1-sovereign-cloud-standards"},next:{title:"Sovereign Cloud Standards YAML",permalink:"/standards/active/scs-0003-v1-sovereign-cloud-standards-yaml"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Suggested cleanup (step 1)",id:"suggested-cleanup-step-1",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The old Docs repository had a subdirectory ",(0,a.kt)("inlineCode",{parentName:"p"},"Design-Docs/")," which holds Docs on\nDesign Considerations, older Architecture Decision Records (ADRs) and even\nStandards. It also has a ",(0,a.kt)("inlineCode",{parentName:"p"},"Design-Docs/tools/")," subdirectory with conformance\nchecks and our overall conformance check driver (from PR#182)."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"This directory structure is confusing in a number of ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The conformance checks are hard to find."),(0,a.kt)("li",{parentName:"ul"},"The mixture of document types requires searching at two or three places.")),(0,a.kt)("p",null,"We want to improve this (while avoiding unnecessary churn)."),(0,a.kt)("h2",{id:"suggested-cleanup-step-1"},"Suggested cleanup (step 1)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Move ",(0,a.kt)("inlineCode",{parentName:"li"},"Design-Docs/tools/")," contents to ",(0,a.kt)("inlineCode",{parentName:"li"},"Tests/"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Also create subdirectories then for layers and test, while the overall\nconformance check tool, certification specs and README remain in ",(0,a.kt)("inlineCode",{parentName:"li"},"Tests/"),"."))),(0,a.kt)("li",{parentName:"ul"},"Rename ",(0,a.kt)("inlineCode",{parentName:"li"},"Design-Docs/")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Drafts/"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use individual PRs to rewrite existing ADRs and Standards there to conform\nto our standards and move them over to ",(0,a.kt)("inlineCode",{parentName:"li"},"Standards/"),".")))),(0,a.kt)("p",null,"Some documents with findings will remain in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Drafts")," directory.\nWe may want to categorize these and have a folder e.g. for research results."))}u.isMDXComponent=!0}}]);