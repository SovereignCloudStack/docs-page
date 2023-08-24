"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return n?o.createElement(d,s(s({ref:t},c),{},{components:n})):o.createElement(d,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},s='"Levels of consensus"',l={unversionedId:"operating-scs/status-page/docs/levels_of_consensus",id:"operating-scs/status-page/docs/levels_of_consensus",title:'"Levels of consensus"',description:"When implementing any system to be used by a group of potential users, there will be varying use cases and opinions about API's, programming languages, persistence models, authentication, authorization, deployment options and so on.",source:"@site/docs/04-operating-scs/status-page/docs/levels_of_consensus.md",sourceDirName:"04-operating-scs/status-page/docs",slug:"/operating-scs/status-page/docs/levels_of_consensus",permalink:"/docs/operating-scs/status-page/docs/levels_of_consensus",draft:!1,editUrl:"https://github.com/SovereignCloudStack/docs-page/tree/main/docs/04-operating-scs/status-page/docs/levels_of_consensus.md",tags:[],version:"current",frontMatter:{}},i={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"levels-of-consensus"},'"Levels of consensus"'),(0,r.kt)("p",null,"When implementing any system to be used by a group of potential users, there will be varying use cases and opinions about API's, programming languages, persistence models, authentication, authorization, deployment options and so on.\nHence, building a complete one-fits-all solution is difficult, but (while offering a pretty un-opinionated reference implementation) even finding consensus on a few basic concepts may make adaptation and integration of different solutions possible."),(0,r.kt)("p",null,'The "levels" of consensus could be split into:'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Consensus on...")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Resource Definition"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"What is an incident?"'),(0,r.kt)("li",{parentName:"ul"},"Core REST API Spec"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"General Architecture"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"Monolithic Web App or multiple components?"'),(0,r.kt)("li",{parentName:"ul"},'"Use static password file or rely on OIDC provider?"'),(0,r.kt)("li",{parentName:"ul"},"(If any:) Interfaces between components:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AuthN mechanisms"),(0,r.kt)("li",{parentName:"ul"},"AuthZ decisions"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Implementation of core component(s)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"Use reference implementation components?"'),(0,r.kt)("li",{parentName:"ul"},'"Go vs. JavaScript?"'),(0,r.kt)("li",{parentName:"ul"},'"Postgres vs. MySQL?"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Choice of all used components"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"Policy: Istio vs. traefik?"'),(0,r.kt)("li",{parentName:"ul"},'"Deployment: Helm vs. ansible?"'),(0,r.kt)("li",{parentName:"ul"},'"dex vs. keycloak vs. zitadel?"')))),(0,r.kt)("p",null,"Every user of the Status Page (API) should be able to either make full use of the full reference implementation, building little to none on their own; Or just pick core concepts/API's/automation and build partial compatibility."),(0,r.kt)("p",null,'E.g. while the value on agreeing on every aspect would bring the most value, this most likely is not likely to happen, but adopting only the "Resource Definition", should ideally bring value already.'))}u.isMDXComponent=!0}}]);