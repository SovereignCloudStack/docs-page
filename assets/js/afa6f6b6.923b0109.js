"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Overview",s={unversionedId:"operating-scs/status-page/docs/overview",id:"operating-scs/status-page/docs/overview",title:"Overview",description:"Service providers often times want to communicate the status of their systems transparently to their users.",source:"@site/docs/04-operating-scs/status-page/docs/overview.md",sourceDirName:"04-operating-scs/status-page/docs",slug:"/operating-scs/status-page/docs/overview",permalink:"/docs/operating-scs/status-page/docs/overview",draft:!1,editUrl:"https://github.com/SovereignCloudStack/docs-page/tree/main/docs/04-operating-scs/status-page/docs/overview.md",tags:[],version:"current",frontMatter:{}},p={},l=[{value:"The SCS status page <strong>API</strong>",id:"the-scs-status-page-api",level:2},{value:"Reference implementation",id:"reference-implementation",level:3},{value:"The SCS status page <strong>frontend</strong>",id:"the-scs-status-page-frontend",level:2},{value:"Reference implementation",id:"reference-implementation-1",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,'Service providers often times want to communicate the status of their systems transparently to their users.\nA commonly used pattern is to provide a "status page" web application, where the current system health as well as recent incidents are made available.'),(0,r.kt)("p",null,"SCS strives to implement a status page that works well, while being interoperable with other systems."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"How was the decision to implement a new status page application made? What were the requirements? See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SovereignCloudStack/standards/blob/1fb174da1ee906f0da6a8bbefbd3d95884df5669/Standards/scs-0400-v1-status-page-create-decision.md"},"decision record"),".")),(0,r.kt)("p",null,'To be easily interoperable with other software, being "API-first" is a priority.\nAs such, the status page should not ',(0,r.kt)("em",{parentName:"p"},"need to")," be a typical monolithic web application (even though it could be), hence making it possible to split functionality into an API server and a frontend component."),(0,r.kt)("h2",{id:"the-scs-status-page-api"},"The SCS status page ",(0,r.kt)("strong",{parentName:"h2"},"API")),(0,r.kt)("p",null,"The SCS status page ",(0,r.kt)("strong",{parentName:"p"},"API")," (as opposed to actual implementations) is supposed to be as un-opinionated as possible regarding deployment, user management, persistence and tech stack, to allow operators/developers (1) to make their own decisions regarding these topics and (2) to quickly implement the API with their own tech stack opinions, if the reference implementation does not fit theirs."),(0,r.kt)("p",null,"In particular, the ",(0,r.kt)("strong",{parentName:"p"},"API")," has no opinion about:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How authentication/authorization is done (apart from splitting Read-only from Read-write ",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"; See below)"),(0,r.kt)("li",{parentName:"ul"},"Server implementation, used database, deployment automation, high availability")),(0,r.kt)("p",null,"However, as un-opinionated the API (in its first iteration) strives to be, it is...:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a REST API (no GRPC/GraphQL/...)"),(0,r.kt)("li",{parentName:"ul"},"defined using an OpenAPI file to make use of OpenAPI tooling"),(0,r.kt)("li",{parentName:"ul"},"split in two parts ",(0,r.kt)("sup",{parentName:"li",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Read-only anonymous access"),(0,r.kt)("li",{parentName:"ol"},"Read-write authenticated access")))),(0,r.kt)("h3",{id:"reference-implementation"},"Reference implementation"),(0,r.kt)("p",null,"It is envisioned to have a well-maintained reference implementation of the status page API with some basic tech stack decisions made, to not ",(0,r.kt)("em",{parentName:"p"},"require")," anyone to implement the API themselves:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Programming Language: Go"),(0,r.kt)("li",{parentName:"ul"},"Persistence: Postgres compatible database")),(0,r.kt)("h2",{id:"the-scs-status-page-frontend"},"The SCS status page ",(0,r.kt)("strong",{parentName:"h2"},"frontend")),(0,r.kt)("p",null,"The SCS status page ",(0,r.kt)("strong",{parentName:"p"},"frontend")," is supposed to be an application which uses the status page API to get information. This could be an CLI tool as well as an web application."),(0,r.kt)("h3",{id:"reference-implementation-1"},"Reference implementation"),(0,r.kt)("p",null,"It is envisioned to have a well-maintained reference implementation of an status page frontend with some basic tech stack decisions made:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Platform: Web (HTML/JS/...)"),(0,r.kt)("li",{parentName:"ul"},"Framework: VueJS, Vuetify")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"In the future",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);