"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Cluster Management on the capi management node",l={unversionedId:"container/components/k8s-cluster-api-provider/doc/usage/cluster-mgmt-capi-mgmt-node",id:"container/components/k8s-cluster-api-provider/doc/usage/cluster-mgmt-capi-mgmt-node",title:"Cluster Management on the capi management node",description:"You can use make ssh to log in to the capi management server. There you can issueclusterctl and kubectl (aliased",source:"@site/docs/03-container/components/k8s-cluster-api-provider/doc/usage/cluster-mgmt-capi-mgmt-node.md",sourceDirName:"03-container/components/k8s-cluster-api-provider/doc/usage",slug:"/container/components/k8s-cluster-api-provider/doc/usage/cluster-mgmt-capi-mgmt-node",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/cluster-mgmt-capi-mgmt-node",draft:!1,editUrl:"https://github.com/SovereignCloudStack/docs-page/tree/main/docs/03-container/components/k8s-cluster-api-provider/doc/usage/cluster-mgmt-capi-mgmt-node.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Managing many clusters",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/managing-many-clusters"},next:{title:"Multi-AZ and multi-cloud environments",permalink:"/docs/container/components/k8s-cluster-api-provider/doc/usage/multi-az-and-multi-cloud-environments"}},s={},c=[],m={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cluster-management-on-the-capi-management-node"},"Cluster Management on the capi management node"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"make ssh")," to log in to the capi management server. There you can issue",(0,r.kt)("inlineCode",{parentName:"p"},"clusterctl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," (aliased\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),") commands. The context ",(0,r.kt)("inlineCode",{parentName:"p"},"kind-kind"),"\nis used for the CAPI management while the context ",(0,r.kt)("inlineCode",{parentName:"p"},"testcluster-admin@testcluster")," can\nbe used to control the workload cluster ",(0,r.kt)("inlineCode",{parentName:"p"},"testcluster"),". You can of course create many\nof them. There are management scripts on the management server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the user's (ubuntu) home directory, create a subdirectory with the CLUSTERNAME\nto hold your cluster's configuration data. Copy over the ",(0,r.kt)("inlineCode",{parentName:"li"},"clusterctl.yaml")," file\nfrom ",(0,r.kt)("inlineCode",{parentName:"li"},"~/cluster-defaults/")," and edit it to meet your needs. Note that you can also\ncopy over ",(0,r.kt)("inlineCode",{parentName:"li"},"cloud.conf")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster-template.yaml")," and adjust them, but you don't\nneed to. (If you don't create the subdirectory, the ",(0,r.kt)("inlineCode",{parentName:"li"},"create_cluster.sh")," script\nwill do so for you and use all defaults settings.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create_cluster.sh CLUSTERNAME"),": Use this command to create a cluster with\nthe settings from ",(0,r.kt)("inlineCode",{parentName:"li"},"~/$CLUSTERNAME/clusterctl.yaml"),". More precisely, it uses the template\n",(0,r.kt)("inlineCode",{parentName:"li"},"$CLUSTERNAME/cluster-template.yaml")," and fills in the settings from\n",(0,r.kt)("inlineCode",{parentName:"li"},"$CLUSTERNAME/clusterctl.yaml")," to render a config file ",(0,r.kt)("inlineCode",{parentName:"li"},"$CLUSTERNAME/$CLUSTERNAME-config.yaml"),"\nwhich will then be submitted to the capi server (",(0,r.kt)("inlineCode",{parentName:"li"},"kind-kind")," context) for creating\nthe control plane nodes and worker nodes. The script will also apply openstack integration,\ncinder CSI, calico or cilium CNI, and optionally also metrics server, nginx ingress controller,\nflux, cert-manager. (These can be controlled by ",(0,r.kt)("inlineCode",{parentName:"li"},"DEPLOY_XXX")," variables, see below.\nDefaults can be preconfigured from the environment.tfvars file during management server\ncreation.)\nNote that ",(0,r.kt)("inlineCode",{parentName:"li"},"CLUSTERNAME")," defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"testcluster")," and must not contain\nwhitespace.\nThe script also makes sure that appropriate CAPI images are available (it grabs them\nfrom ",(0,r.kt)("a",{parentName:"li",href:"https://minio.services.osism.tech/openstack-k8s-capi-images"},"OSISM"),"\nas needed and registers them with OpenStack, following the SCS image metadata\nstandard).\nThe script returns once the control plane is fully working (the worker\nnodes might still be under construction). The kubectl file to talk to this\ncluster (as admin) can be found in ",(0,r.kt)("inlineCode",{parentName:"li"},"~/$CLUSTERNAME/$CLUSTERNAME.yaml"),". Expect the cluster\ncreation to take ~8mins. (CLUSTERNAME defaults to testcluster.) You can pass\n",(0,r.kt)("inlineCode",{parentName:"li"},"--context=${CLUSTERNAME}-admin@$CLUSTERNAME")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," (with the\ndefault ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.kubernetes/config")," config file) or ",(0,r.kt)("inlineCode",{parentName:"li"},"export KUBECONFIG=$CLUSTERNAME.yaml"),"\\\nto talk to the workload cluster."),(0,r.kt)("li",{parentName:"ul"},"The subdirectory ",(0,r.kt)("inlineCode",{parentName:"li"},"~/$CLUSTERNAME/deployed-manifests.d/")," will contain the\ndeployed manifests for reference (and in case of nginx-ingress also to facilitate\na full cleanup)."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"clusterctl.yaml")," file can be edited the ",(0,r.kt)("inlineCode",{parentName:"li"},"create_cluster.sh")," script\nbe called again to submit the changes. (If you have not done any changes,\nre-running the script again is harmless.) Note that the ",(0,r.kt)("inlineCode",{parentName:"li"},"create_cluster.sh"),"\ndoes not currently remove any of the previously deployed services/deployments\nfrom the workload clusters -- this will be added later on with the appropriate\ncare and warnings. Also note that not all changes are allowed. You can easily\nchange the number of nodes or add k8s services to a cluster. For changing\nmachine flavors, machine images, kubernetes versions ... you will need to\nalso increase the ",(0,r.kt)("inlineCode",{parentName:"li"},"CONTROL_PLANE_MACHINE_GEN")," or the ",(0,r.kt)("inlineCode",{parentName:"li"},"WORKER_MACHINE_GEN"),"\ncounter to add a different suffix to these read-only resources. This will\ncause Cluster-API to orchestrate a rolling upgrade for you on rollout.\n(This is solved more elegantly in the helm chart style cluster management, see below.)"),(0,r.kt)("li",{parentName:"ul"},"The directory ",(0,r.kt)("inlineCode",{parentName:"li"},"~/k8s-cluster-api-provider/")," contains a checked out git tree\nfrom the SCS project. It can be updated (",(0,r.kt)("inlineCode",{parentName:"li"},"git pull"),") to receive the latest\nfixes and improvements. This way, most incremental updates do not need the\nrecreation of the management server (and thus also not the recreation of your\nmanaged workload clusters), but can be applied with calling ",(0,r.kt)("inlineCode",{parentName:"li"},"create_cluster.sh"),"\nagain to the workload clusters."),(0,r.kt)("li",{parentName:"ul"},"The installation of the openstack integration, cinder CSI, metrics server and\nnginx ingress controller is done via the ",(0,r.kt)("inlineCode",{parentName:"li"},"bin/apply_*.sh")," scripts that are called\nfrom ",(0,r.kt)("inlineCode",{parentName:"li"},"create_cluster.sh"),". You can manually call them as well -- they take\nthe cluster name as argument. (It's better to just call ",(0,r.kt)("inlineCode",{parentName:"li"},"create_cluster.sh"),"\nagain, though.) The applied yaml files are collected in\n",(0,r.kt)("inlineCode",{parentName:"li"},"~/$CLUSTERNAME/deployed-manifests.d/"),". You can ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl delete -f")," them\nto remove the functionality again."),(0,r.kt)("li",{parentName:"ul"},"You can, of course, also delete the cluster and create a new one if that\nlevel of disruption is fine for you. (See below in Advanced cluster templating\nwith helm to get an idea how we want to make this more convenient in the future.)"),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get clusters -A")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"kind-kind")," context to see what clusters\nexist. Use ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl get all -A")," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"testcluster-admin@testcluster")," context\nto get an overview over the state of your workload cluster. You can access the logs\nfrom the capo controller in case you have trouble with cluster creation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delete_cluster.sh [CLUSTERNAME]"),": Tell the capi management server to remove\nthe cluster $CLUSTERNAME. It will also remove persistent volume claims belonging\nto the cluster. The script will return once the removal is done."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cleanup.sh"),": Remove all running clusters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add_cluster-network.sh CLUSTERNAME")," adds the management server to the node network\nof the cluster ",(0,r.kt)("inlineCode",{parentName:"li"},"CLUSTERNAME"),", assuming that it runs on the same cloud (a region).\n",(0,r.kt)("inlineCode",{parentName:"li"},"remove_cluster-network.sh")," undoes this again. This is useful for debugging\npurposes.")),(0,r.kt)("p",null,"For your convenience, ",(0,r.kt)("inlineCode",{parentName:"p"},"k9s")," is installed on the management server as well\nas ",(0,r.kt)("inlineCode",{parentName:"p"},"calicoctl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cilium"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hubble"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"cmctl"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sonobuoy"),".\nThese binaries can all be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," while the helper scripts\nhave been deployed to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/bin/"),"."))}u.isMDXComponent=!0}}]);