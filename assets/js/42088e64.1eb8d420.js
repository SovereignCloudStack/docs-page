"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1409:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="Multi-AZ and multi-cloud environments",s={unversionedId:"container/components/k8s-cluster-api-provider/doc/usage/multi-az-and-multi-cloud-environments",id:"container/components/k8s-cluster-api-provider/doc/usage/multi-az-and-multi-cloud-environments",title:"Multi-AZ and multi-cloud environments",description:"The provided cluster-template.yaml assumes that all control nodes on one hand and all worker nodes on the other are",source:"@site/docs/03-container/components/k8s-cluster-api-provider/doc/usage/multi-az-and-multi-cloud-environments.md",sourceDirName:"03-container/components/k8s-cluster-api-provider/doc/usage",slug:"/container/components/k8s-cluster-api-provider/doc/usage/multi-az-and-multi-cloud-environments",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/multi-az-and-multi-cloud-environments",draft:!1,editUrl:"https://github.com/SovereignCloudStack/docs-page/tree/main/docs/03-container/components/k8s-cluster-api-provider/doc/usage/multi-az-and-multi-cloud-environments.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Cluster Management on the capi management node",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/cluster-mgmt-capi-mgmt-node"},next:{title:"Testing",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/testing"}},c={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multi-az-and-multi-cloud-environments"},"Multi-AZ and multi-cloud environments"),(0,o.kt)("p",null,"The provided ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-template.yaml")," assumes that all control nodes on one hand and all worker nodes on the other are\nequal. They are in the same cloud within the same availability zone, using the same flavor. cluster API allows k8s\nclusters to have varying flavors, span availability zones and even clouds. For this, you can create an advanced\ncluster-template with more different machine descriptions and potentially several secrets. Depending on your changes,\nthe logic in ",(0,o.kt)("inlineCode",{parentName:"p"},"create_cluster.sh")," might also need enhancements to handle this. Extending this is not hard and we're happy\nto hear from your use cases and take patches."),(0,o.kt)("p",null,"However, we are currently investigating to use helm templating for anything beyond the simple use cases instead, see\nnext chapter."))}d.isMDXComponent=!0}}]);