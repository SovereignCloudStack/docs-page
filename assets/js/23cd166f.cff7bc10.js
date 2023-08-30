"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},c="Create a new cluster",i={unversionedId:"container/components/k8s-cluster-api-provider/doc/usage/create-new-cluster",id:"container/components/k8s-cluster-api-provider/doc/usage/create-new-cluster",title:"Create a new cluster",description:"On the management server (login with make ssh), create a directory (below the home of",source:"@site/docs/03-container/components/k8s-cluster-api-provider/doc/usage/create-new-cluster.md",sourceDirName:"03-container/components/k8s-cluster-api-provider/doc/usage",slug:"/container/components/k8s-cluster-api-provider/doc/usage/create-new-cluster",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/create-new-cluster",draft:!1,editUrl:"https://github.com/SovereignCloudStack/docs-page/tree/main/docs/03-container/components/k8s-cluster-api-provider/doc/usage/create-new-cluster.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Usage",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/"},next:{title:"Managing many clusters",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/managing-many-clusters"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-new-cluster"},"Create a new cluster"),(0,a.kt)("p",null,"On the management server (login with ",(0,a.kt)("inlineCode",{parentName:"p"},"make ssh"),"), create a directory (below the home of\nthe standard ubuntu user) with the name of your cluster. Copy over ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterctl.yaml")," from\n",(0,a.kt)("inlineCode",{parentName:"p"},"~/cluster-defaults/")," and edit it according to your needs. You can also copy over other\nfiles from ",(0,a.kt)("inlineCode",{parentName:"p"},"~/cluster-defaults/")," and adjust them, but this is only needed in exceptional\ncases.\nNow run ",(0,a.kt)("inlineCode",{parentName:"p"},"create_cluster.sh <CLUSTER_NAME>")),(0,a.kt)("p",null,"This will copy all missing defaults from ",(0,a.kt)("inlineCode",{parentName:"p"},"~/cluster-defaults/")," into the directory with your\ncluster name and then ask cluster-api to create the cluster. The scripts also take\ncare of security groups, anti-affinity, node image registration (if needed) and\nof deploying CCM, CNI, CSI as well as optional services such as metrics or nginx-ingress\ncontroller."),(0,a.kt)("p",null,"You can access the new cluster with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl --context clustername-admin@cluster"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},"KUBECONFIG=~/clustername/clustername.yaml kubectl"),"."),(0,a.kt)("p",null,"The management cluster is in context ",(0,a.kt)("inlineCode",{parentName:"p"},"kind-kind"),"."),(0,a.kt)("p",null,"Note that you can always change ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterctl.yaml")," and re-run ",(0,a.kt)("inlineCode",{parentName:"p"},"create_cluster.sh"),". The script is idempotent and running\nit multiple times with the unchanged input file will result in no changes to the cluster."))}p.isMDXComponent=!0}}]);