"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1357],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),d=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,k=u["".concat(m,".").concat(g)]||u[g]||p[g]||l;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1772:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},i="Getting started",o={unversionedId:"iaas/components/openstack-image-manager/getting_started",id:"iaas/components/openstack-image-manager/getting_started",title:"Getting started",description:"Functions of the OpenStack Image Manager",source:"@site/docs/02-iaas/components/openstack-image-manager/getting_started.md",sourceDirName:"02-iaas/components/openstack-image-manager",slug:"/iaas/components/openstack-image-manager/getting_started",permalink:"/docs/iaas/components/openstack-image-manager/getting_started",draft:!1,editUrl:"https://github.com/SovereignCloudStack/docs-page/tree/main/docs/02-iaas/components/openstack-image-manager/getting_started.md",tags:[],version:"current",frontMatter:{}},m={},d=[{value:"Functions of the OpenStack Image Manager",id:"functions-of-the-openstack-image-manager",level:2},{value:"manage (main)",id:"manage-main",level:3},{value:"Validate config",id:"validate-config",level:4},{value:"Cloud Name",id:"cloud-name",level:4},{value:"Location of images",id:"location-of-images",level:4},{value:"Naming Convention",id:"naming-convention",level:4},{value:"Filter images",id:"filter-images",level:4},{value:"Delete images",id:"delete-images",level:4},{value:"Delete images fully",id:"delete-images-fully",level:4},{value:"Change the tag of the managed images",id:"change-the-tag-of-the-managed-images",level:4},{value:"Add new images",id:"add-new-images",level:3},{value:"mirror",id:"mirror",level:3},{value:"table",id:"table",level:3},{value:"update",id:"update",level:3},{value:"Outdated image handling",id:"outdated-image-handling",level:3}],s={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("h2",{id:"functions-of-the-openstack-image-manager"},"Functions of the OpenStack Image Manager"),(0,r.kt)("p",null,"All commands below are executed in this pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tox -- <command> [parameters]\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("em",{parentName:"p"},"command")," beeing one of the options shown below."),(0,r.kt)("p",null,"As you can do many things with this manager here a list with possible commands:"),(0,r.kt)("h3",{id:"manage-main"},"manage (main)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--debug")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables debug messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--dry-run")),(0,r.kt)("td",{parentName:"tr",align:null},"Perform a dry run without any changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--latest")),(0,r.kt)("td",{parentName:"tr",align:null},"Only import latest image versions into your openstack.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Only applies to images that are of type multi.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--cloud openstack")),(0,r.kt)("td",{parentName:"tr",align:null},"The cloud you are working on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default value is ",(0,r.kt)("strong",{parentName:"td"},"openstack"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--images etc/images/")),(0,r.kt)("td",{parentName:"tr",align:null},"Location of the image configuration files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default value is ",(0,r.kt)("strong",{parentName:"td"},"etc/images/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--name foo")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the affected image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--tag foo")),(0,r.kt)("td",{parentName:"tr",align:null},"Manage only images from your OpenStack that match the given tag.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default value is ",(0,r.kt)("strong",{parentName:"td"},"managed_by_osism"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--filter foo")),(0,r.kt)("td",{parentName:"tr",align:null},"Use only images from image config files, that apply to this regex filter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--deactivate")),(0,r.kt)("td",{parentName:"tr",align:null},"Deactivates an image. You cannot create a VM of this image any longer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--hide")),(0,r.kt)("td",{parentName:"tr",align:null},"Hide images. You can still use the ID to create a VM of this image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--delete")),(0,r.kt)("td",{parentName:"tr",align:null},"Delete outdated images. Only removes images, that are not used by any VM or snapshot any more.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--yes_i_really_know_what_i_do")),(0,r.kt)("td",{parentName:"tr",align:null},"Force delete an image. VMs using that image will break.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--use_os_hidden")),(0,r.kt)("td",{parentName:"tr",align:null},"Also manage hidden images in your OpenStack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--share-image Cirros")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the affected image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--share-action add")),(0,r.kt)("td",{parentName:"tr",align:null},"Either ",(0,r.kt)("em",{parentName:"td"},"add")," (default) or ",(0,r.kt)("em",{parentName:"td"},"del")," as valid options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Defines if the image is shared or unshared.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--share-domain default")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the OpenStack domain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--share-target")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the OpenStack project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--share-type")),(0,r.kt)("td",{parentName:"tr",align:null},"Either ",(0,r.kt)("em",{parentName:"td"},"project")," (default) or ",(0,r.kt)("em",{parentName:"td"},"domain")," as valid options.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the scope where the image is (un)shared.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--check")),(0,r.kt)("td",{parentName:"tr",align:null},"Check your OpenStack images metadata against the SCS standards.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Gives you a detailed list of missing metadata.")))),(0,r.kt)("p",null,"Main command. Works through the image config files and applies the changes to your OpenStack as desired.\nCommands prefixed with ",(0,r.kt)("strong",{parentName:"p"},"--share")," make an image available (or unavailable). This can happen on a single project or on all projects of a domain."),(0,r.kt)("h4",{id:"validate-config"},"Validate config"),(0,r.kt)("p",null,"After a change to the configuration, validate it with ",(0,r.kt)("strong",{parentName:"p"},"tox -- --dry-run"),"."),(0,r.kt)("h4",{id:"cloud-name"},"Cloud Name"),(0,r.kt)("p",null,"The cloud environment to be used can be specified via the ",(0,r.kt)("strong",{parentName:"p"},"--cloud")," parameter. The default-value is: ",(0,r.kt)("strong",{parentName:"p"},"openstack"),"\nThe path of the ",(0,r.kt)("strong",{parentName:"p"},"clouds.yaml")," file to be used can be set via the environment variable: ",(0,r.kt)("strong",{parentName:"p"},"OS_CLIENT_CONFIG_FILE")),(0,r.kt)("h4",{id:"location-of-images"},"Location of images"),(0,r.kt)("p",null,"The path to the definitions of the images is set via the parameter ",(0,r.kt)("strong",{parentName:"p"},"--images"),". The default-value is: ",(0,r.kt)("strong",{parentName:"p"},"etc/images/.")),(0,r.kt)("h4",{id:"naming-convention"},"Naming Convention"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Names must be unique"),(0,r.kt)("li",{parentName:"ul"},"Use the full name of the product / distribution, no shortcuts")),(0,r.kt)("p",null,"Samples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Ubuntu 16.04")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"CoreOS"))),(0,r.kt)("h4",{id:"filter-images"},"Filter images"),(0,r.kt)("p",null,"If you wanna use only images from a special filter use regex to find them: tox -- --filter 'Debian*'"),(0,r.kt)("h4",{id:"delete-images"},"Delete images"),(0,r.kt)("p",null,"Simply remove the version of an image you want to delete or the entire image from ",(0,r.kt)("strong",{parentName:"p"},"etc/images/.")," or use ",(0,r.kt)("strong",{parentName:"p"},"tox -- --delete --name foo")),(0,r.kt)("h4",{id:"delete-images-fully"},"Delete images fully"),(0,r.kt)("p",null,"The deletion of images must be explicitly confirmed with the ",(0,r.kt)("strong",{parentName:"p"},"--yes_i_really_know_what_i_do")," parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tox -- --delete --yes_i_really_know-what_i_do\n")),(0,r.kt)("h4",{id:"change-the-tag-of-the-managed-images"},"Change the tag of the managed images"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"old tag: ",(0,r.kt)("strong",{parentName:"li"},"managed_by_betacloud")),(0,r.kt)("li",{parentName:"ul"},"new tag: ",(0,r.kt)("strong",{parentName:"li"},"managed_by_osism"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack --os-cloud service image list --tag managed_by_betacloud -f value -c ID | tr -d '\\r' | xargs -n1 openstack --os-cloud service image set --tag managed_by_osism\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openstack --os-cloud service image list --tag managed_by_betacloud -f value -c ID | tr -d '\\r' | xargs -n1 openstack --os-cloud service image unset --tag managed_by_betacloud\n")),(0,r.kt)("h3",{id:"add-new-images"},"Add new images"),(0,r.kt)("p",null,"Only freely accessible community images may be added. Currently, the decompression of images, as with CoreOS, is not supported.\nIf there is no section for the product / distribution then create it accordingly. Explicitly mark ",(0,r.kt)("strong",{parentName:"p"},"os_version")," as a string to prevent\nevaluation as a double.\nUseful metadata keys can be found at: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openstack.org/glance/latest/admin/useful-image-properties.html"},"https://docs.openstack.org/glance/latest/admin/useful-image-properties.html"),"\nPossible values for ",(0,r.kt)("strong",{parentName:"p"},"os_distro")," can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/libosinfo/osinfo-db/tree/master/data/os"},"libosinfo")," or\n",(0,r.kt)("strong",{parentName:"p"},"osinfo-query os")," (omit ",(0,r.kt)("strong",{parentName:"p"},"os_distro")," if there is no meaningful value for it).\n",(0,r.kt)("strong",{parentName:"p"},"min_disk")," and ",(0,r.kt)("strong",{parentName:"p"},"min_ram")," should always be specified. Keys do not have to be set, by default the values are 0.\nAt ",(0,r.kt)("strong",{parentName:"p"},"login")," specify the user with whom you can log in after the initial start. This is necessary for the generated documentation as well\nas later automatic tests.\nSpecial images offer the login via a password. This can be specified via the parameter ",(0,r.kt)("strong",{parentName:"p"},"password"),"."),(0,r.kt)("h3",{id:"mirror"},"mirror"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--debug")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables debug messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--dry-run")),(0,r.kt)("td",{parentName:"tr",align:null},"Perform a dry run without any changes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--images etc/images/")),(0,r.kt)("td",{parentName:"tr",align:null},"Location of the image configuration files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default value is ",(0,r.kt)("strong",{parentName:"td"},"etc/images/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--minio_access_key foo")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 access key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--minio_secret_key bar")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 secret key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--minio_server http://localhost")),(0,r.kt)("td",{parentName:"tr",align:null},"Hostname of the S3 backend")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--minio_bucket images")),(0,r.kt)("td",{parentName:"tr",align:null},"Bucketname where the images are stored")))),(0,r.kt)("p",null,"All images that are configures in the images config files are downloaded from upstream. After downloading they might be decompressed\n(only applies to ",(0,r.kt)("em",{parentName:"p"},"bz2"),", ",(0,r.kt)("em",{parentName:"p"},"zip")," and ",(0,r.kt)("em",{parentName:"p"},"xz")," files). Now they are uploaded into the S3 backend. Remaining local files are removed."),(0,r.kt)("h3",{id:"table"},"table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--images etc/images/")),(0,r.kt)("td",{parentName:"tr",align:null},"Location of the image configuration files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default value is ",(0,r.kt)("strong",{parentName:"td"},"etc/images/"))))),(0,r.kt)("p",null,"Prints out a list of all images configured in the provided image config path providing login user and password for the respective image.\nExample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"tox -- table --image etc/images/\n=======================  ============  ==========\nName                     Login user    Password\n=======================  ============  ==========\nAlmaLinux 8              almalinux\nAlmaLinux 9              almalinux\nCentOS 7                 centos\nCentOS Stream 8          centos\nCentOS Stream 9          centos\nCirros                   cirros        gocubsgo\nClear Linux              root\nDebian 10                debian\nDebian 11                debian\nFedora 36                fedora\nFedora CoreOS            root\nFlatcar Container Linux  root\nGarden Linux             admin\nKubernetes CAPI          ubuntu\nOPNsense                 root          opnsense\nRocky 8                  rocky\nRocky 9                  rocky\nUbuntu 14.04             ubuntu\nUbuntu 16.04             ubuntu\nUbuntu 16.04 Minimal     ubuntu\nUbuntu 18.04             ubuntu\nUbuntu 18.04 Minimal     ubuntu\nUbuntu 20.04             ubuntu\nUbuntu 20.04 Minimal     ubuntu\nUbuntu 22.04             ubuntu\nUbuntu 22.04 Minimal     ubuntu\nopenSUSE Leap 15.4       opensuse\n=======================  ============  ==========\n")),(0,r.kt)("h3",{id:"update"},"update"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--debug")),(0,r.kt)("td",{parentName:"tr",align:null},"Enables debug messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--images etc/images/")),(0,r.kt)("td",{parentName:"tr",align:null},"Location of the image configuration files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Default value is ",(0,r.kt)("strong",{parentName:"td"},"etc/images/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--minio_access_key foo")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 access key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--minio_secret_key bar")),(0,r.kt)("td",{parentName:"tr",align:null},"S3 secret key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--minio_server http://localhost")),(0,r.kt)("td",{parentName:"tr",align:null},"Hostname of the S3 backend")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--minio_bucket images")),(0,r.kt)("td",{parentName:"tr",align:null},"Bucketname where the images are stored")))),(0,r.kt)("p",null,"Compares the upstream checksum of an image with the checksum provided in the image config files. If they differ, the new checksum updated\nin the image config files. Additionally, the new image is downloaded to the S3 server. When the image is in a ",(0,r.kt)("em",{parentName:"p"},"bz2"),", ",(0,r.kt)("em",{parentName:"p"},"zip")," or ",(0,r.kt)("em",{parentName:"p"},"xz")," format,\nit gets extracted before uploading."),(0,r.kt)("h3",{id:"outdated-image-handling"},"Outdated image handling"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"note:")," By default outdated images are renamed but will stay accessable. There are 3 ways to handle outdated Images:\nhide, deactivate + delete")))}p.isMDXComponent=!0}}]);