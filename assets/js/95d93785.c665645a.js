"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1481],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(v,a(a({ref:n},p),{},{components:t})):r.createElement(v,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7477:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={},a="Requirements",l={unversionedId:"container/components/k8s-cluster-api-provider/doc/requirements",id:"container/components/k8s-cluster-api-provider/doc/requirements",title:"Requirements",description:"Cluster API requires an existing Kubernetes cluster to operate. In our setup, we",source:"@site/docs/03-container/components/k8s-cluster-api-provider/doc/requirements.md",sourceDirName:"03-container/components/k8s-cluster-api-provider/doc",slug:"/container/components/k8s-cluster-api-provider/doc/requirements",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/requirements",draft:!1,editUrl:"https://github.com/SovereignCloudStack/docs-page/tree/main/docs/03-container/components/k8s-cluster-api-provider/doc/requirements.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/overview"},next:{title:"Quickstart",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/quickstart"}},s={},c=[{value:"Environments",id:"environments",level:2},{value:"Plusserver community environment",id:"plusserver-community-environment",level:3},{value:"Wavestack environment",id:"wavestack-environment",level:3},{value:"Custom environment",id:"custom-environment",level:3}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Cluster API requires an existing Kubernetes cluster to operate. In our setup, we\nutilize ",(0,o.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind")," a tool for running Kubernetes clusters using Docker containers, to create\nthe initial management Kubernetes cluster in a single docker container. The OpenStack instance serves as the CAPI\nmanagement server or management cluster, responsible for overseeing the\nmanagement and operation of the created kubernetes clusters."),(0,o.kt)("p",null,"The provisioning of the CAPI management server is done on a deployment host, possibly a tiny jumphost style VM, or some\nLinux/MacOS/WSL laptop."),(0,o.kt)("p",null,"Requirements for the deployment host:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have installed:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Terraform (",(0,o.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"https://learn.hashicorp.com/tutorials/terraform/install-cli"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"yq")," (python3-yq or yq snap)"),(0,o.kt)("li",{parentName:"ul"},"GNU make"),(0,o.kt)("li",{parentName:"ul"},"openstack (python3-openstackclient) and plugin for octavia (python3-octaviaclient) Via pip or your distribution.\n",(0,o.kt)("em",{parentName:"li"},"Needed only in case you want to clean the management server or interact with openstack directly.")))),(0,o.kt)("li",{parentName:"ul"},"You must have credentials to access the cloud. Terraform will look for ",(0,o.kt)("inlineCode",{parentName:"li"},"clouds.yaml")," and optionally ",(0,o.kt)("inlineCode",{parentName:"li"},"secure.yaml")," in\nthe current working directory (",(0,o.kt)("inlineCode",{parentName:"li"},"terraform"),"), in ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.config/openstack/")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/openstack")," (in this order), just like\nthe ",(0,o.kt)("a",{parentName:"li",href:"https://docs.openstack.org/python-openstackclient/latest/configuration/index.html#clouds-yaml"},"openstack client"),"."),(0,o.kt)("li",{parentName:"ul"},"The API endpoints of the OpenStack cloud should have a certificate signed by a trusted CA. (Self-signed or custom CAs\nneed significant manual work -- this will be improved after R4.)"),(0,o.kt)("li",{parentName:"ul"},"An Environment file for the cloud you want to use. See ",(0,o.kt)("a",{parentName:"li",href:"#environments"},"Environments")," below for more details.")),(0,o.kt)("h2",{id:"environments"},"Environments"),(0,o.kt)("p",null,"To use a specific environment, you have to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"ENVIRONMENT")," variable (",(0,o.kt)("inlineCode",{parentName:"p"},"export ENVIRONMENT=<yourcloud>"),") or pass it\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," command by using ",(0,o.kt)("inlineCode",{parentName:"p"},"make <command> ENVIRONMENT=<yourcloud>"),".\nYou can also do the same by utilizing the ",(0,o.kt)("inlineCode",{parentName:"p"},"OS_CLOUD")," (openstack native) variable.\nThe name of the environment is derived from the name of the file ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/environment-<yourcloud>.tfvars"),"."),(0,o.kt)("p",null,"The name of the environment specified either via ",(0,o.kt)("inlineCode",{parentName:"p"},"ENVIRONMENT")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"OS_CLOUD")," has to be equal the name of the\ncloud (",(0,o.kt)("inlineCode",{parentName:"p"},"cloud_provider"),") as specified in your ",(0,o.kt)("inlineCode",{parentName:"p"},"clouds.yaml"),"."),(0,o.kt)("p",null,"In case you use ",(0,o.kt)("a",{parentName:"p",href:"#plusserver-community-environment"},"plusserver community environment"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"#wavestack-environment"},"wavestack environment")," you can use the default environment file for\nthose directly or base your configuration on it. In case you need custom configuration\nsee ",(0,o.kt)("a",{parentName:"p",href:"#custom-environment"},"Custom environment"),"."),(0,o.kt)("p",null,"More information about the configuration options can be found in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/container/components/k8s-cluster-api-provider/doc/configuration"},"configuration documentation"),"."),(0,o.kt)("h3",{id:"plusserver-community-environment"},"Plusserver community environment"),(0,o.kt)("p",null,"Using it directly:\n",(0,o.kt)("inlineCode",{parentName:"p"},"export ENVIRONMENT=gx-scs")),(0,o.kt)("p",null,"or insert inside of Makefile:\n",(0,o.kt)("inlineCode",{parentName:"p"},"ENVIRONMENT=gx-scs")),(0,o.kt)("p",null,"File: ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/environment-gx-scs.tfvars")),(0,o.kt)("p",null,"The name of the cloud has to be ",(0,o.kt)("inlineCode",{parentName:"p"},"gx-scs")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud.yaml")," file, otherwise you will need\nto change the ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud_provider")," variable inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform/environments/environment-gx-scs.tfvars")," file."),(0,o.kt)("h3",{id:"wavestack-environment"},"Wavestack environment"),(0,o.kt)("p",null,"Using it directly:\n",(0,o.kt)("inlineCode",{parentName:"p"},"export ENVIRONMENT=gx-wavestack")),(0,o.kt)("p",null,"or insert inside of Makefile:\n",(0,o.kt)("inlineCode",{parentName:"p"},"ENVIRONMENT=gx-wavestack")),(0,o.kt)("p",null,"File: ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/environment-gx-wavestack.tfvars")),(0,o.kt)("p",null,"The name of the cloud has to be ",(0,o.kt)("inlineCode",{parentName:"p"},"gx-wavestack")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud.yaml")," file, otherwise you will need\nto change the ",(0,o.kt)("inlineCode",{parentName:"p"},"cloud_provider")," variable inside of ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform/environments/environment-gx-scs.tfvars")," file."),(0,o.kt)("h3",{id:"custom-environment"},"Custom environment"),(0,o.kt)("p",null,"You can create your own environment file from the sample file ",(0,o.kt)("inlineCode",{parentName:"p"},"environments/environment-default.tfvars")," and provide the\nnecessary information like machine flavor or machine image. You can comment out all lines where the defaults match your\nneeds."))}m.isMDXComponent=!0}}]);