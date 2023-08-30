"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8086],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},s="Usage",c={unversionedId:"container/components/k8s-cluster-api-provider/doc/usage/usage",id:"container/components/k8s-cluster-api-provider/doc/usage/usage",title:"Usage",description:"The subsequent management of the cluster can best be done from the management server VM, as it has all the tools",source:"@site/docs/03-container/components/k8s-cluster-api-provider/doc/usage/usage.md",sourceDirName:"03-container/components/k8s-cluster-api-provider/doc/usage",slug:"/container/components/k8s-cluster-api-provider/doc/usage/",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/",draft:!1,editUrl:"https://github.com/SovereignCloudStack/docs-page/tree/main/docs/03-container/components/k8s-cluster-api-provider/doc/usage/usage.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Roadmap",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/roadmap"},next:{title:"Create a new cluster",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/create-new-cluster"}},i={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The subsequent management of the cluster can best be done from the management server VM, as it has all the tools\ndeployed there and config files can be edited and resubmitted to the kubernetes kind cluster for reconciliation. To log\nin to this management server via ssh, you can issue ",(0,o.kt)("inlineCode",{parentName:"p"},"make ssh"),"."),(0,o.kt)("p",null,"You can create and do life cycle management for many more clusters from this management server."),(0,o.kt)("p",null,"The kubeconfig with admin power for the created testcluster is named ",(0,o.kt)("inlineCode",{parentName:"p"},"testcluster/testcluster.yaml")," (\nor ",(0,o.kt)("inlineCode",{parentName:"p"},"$CLUSTER_NAME/$CLUSTER_NAME.yaml")," for all the other clusters) and can be handed out to users that should get full\nadministrative control over the cluster. You can also retrieve them\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"make get-kubeconfig TESTCLUSTER=${CLUSTER_NAME}")," from the machines where you created the management server from,\nand possibly create an encrypted .zip file for handing these out. (You can omit `"))}p.isMDXComponent=!0}}]);