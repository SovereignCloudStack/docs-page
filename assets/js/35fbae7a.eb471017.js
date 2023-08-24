"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2656],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7837:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"Getting Started Gaia-X Demonstrator @ plusserver",version:new Date("2022-12-22T00:00:00.000Z"),author:"Ralf Heiringhoff, Mathias Fechner"},i=void 0,s={unversionedId:"cloud-resources/plusserver-gx-scs",id:"cloud-resources/plusserver-gx-scs",title:"Getting Started Gaia-X Demonstrator @ plusserver",description:"Getting Started for the Gaia-X Demonstrator @ plusserver",source:"@site/community/cloud-resources/plusserver-gx-scs.md",sourceDirName:"cloud-resources",slug:"/cloud-resources/plusserver-gx-scs",permalink:"/community/cloud-resources/plusserver-gx-scs",draft:!1,tags:[],version:"current",frontMatter:{title:"Getting Started Gaia-X Demonstrator @ plusserver",version:"2022-12-22T00:00:00.000Z",author:"Ralf Heiringhoff, Mathias Fechner"},sidebar:"community",previous:{title:"Getting Started with OpenStack",permalink:"/community/cloud-resources/getting-started-openstack"},next:{title:"Getting Started with Wavestack",permalink:"/community/cloud-resources/wavestack"}},c={},l=[{value:"Getting Started for the Gaia-X Demonstrator @ plusserver",id:"getting-started-for-the-gaia-x-demonstrator--plusserver",level:2},{value:"URLs for access",id:"urls-for-access",level:2},{value:"Authentication (UI)",id:"authentication-ui",level:2},{value:"Getting Started with OpenStack",id:"getting-started-with-openstack",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getting-started-for-the-gaia-x-demonstrator--plusserver"},"Getting Started for the Gaia-X Demonstrator @ plusserver"),(0,a.kt)("h2",{id:"urls-for-access"},"URLs for access"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UI (Horizon): ",(0,a.kt)("a",{parentName:"li",href:"https://ui.gx-scs.sovereignit.cloud/"},"https://ui.gx-scs.sovereignit.cloud/")),(0,a.kt)("li",{parentName:"ul"},"API auth url (Keystone): ",(0,a.kt)("a",{parentName:"li",href:"https://api.gx-scs.sovereignit.cloud:5000"},"https://api.gx-scs.sovereignit.cloud:5000")),(0,a.kt)("li",{parentName:"ul"},"Object Storage endpoint (S3/SWIFT): ",(0,a.kt)("a",{parentName:"li",href:"https://api.gx-scs.sovereignit.cloud:8080"},"https://api.gx-scs.sovereignit.cloud:8080"))),(0,a.kt)("h2",{id:"authentication-ui"},"Authentication (UI)"),(0,a.kt)("p",null,"For your login you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Username (",(0,a.kt)("inlineCode",{parentName:"li"},"u500924-<github handle>"),")"),(0,a.kt)("li",{parentName:"ul"},"Password"),(0,a.kt)("li",{parentName:"ul"},"Domain (",(0,a.kt)("inlineCode",{parentName:"li"},"d500924"),")")),(0,a.kt)("h2",{id:"getting-started-with-openstack"},"Getting Started with OpenStack"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/community/cloud-resources/getting-started-openstack"},"Getting Started with OpenStack")))}p.isMDXComponent=!0}}]);