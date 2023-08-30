"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={title:"Gnocchi as database for metering",type:"Decision Record",status:"Draft",track:"Ops"},o=void 0,s={unversionedId:"active/scs-0410-v1-gnocchi-as-metering-database",id:"active/scs-0410-v1-gnocchi-as-metering-database",title:"Gnocchi as database for metering",description:"for more info. --\x3e",source:"@site/standards/active/scs-0410-v1-gnocchi-as-metering-database.md",sourceDirName:"active",slug:"/active/scs-0410-v1-gnocchi-as-metering-database",permalink:"/standards/active/scs-0410-v1-gnocchi-as-metering-database",draft:!1,tags:[],version:"current",frontMatter:{title:"Gnocchi as database for metering",type:"Decision Record",status:"Draft",track:"Ops"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Design Considerations",id:"design-considerations",level:2},{value:"Options",id:"options",level:3},{value:"Using Gnocchi",id:"using-gnocchi",level:4},{value:"Using Prometheus",id:"using-prometheus",level:4},{value:"Using InfluxDB",id:"using-influxdb",level:4},{value:"Creating a custom TSDB implementation",id:"creating-a-custom-tsdb-implementation",level:4},{value:"Decision",id:"decision",level:2},{value:"Open questions",id:"open-questions",level:2},{value:"Related Documents",id:"related-documents",level:2},{value:"Conformance Tests",id:"conformance-tests",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In the past we noticed missing events in the telemetry stack of OpenStack.\nThis results in situations where the Cloud Service Provider (CSP)\nmay think that a resource is still in use while the owner shut it down,\nor may not be aware of a resource which has been created."),(0,a.kt)("p",null,"Such inaccurate data is a problem,\nwhen it is supposed to be used for billing purposes."),(0,a.kt)("p",null,"This document discusses how such metering data should be stored\nwithin the SCS.\nIn partiuclar,\nit provides rationale for the choice of Gnocchi\nas time-series database for metering data\nwithin SCS."),(0,a.kt)("h2",{id:"definitions"},"Definitions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TSDB, time-series database:\nDatabase which is specialised for storing data which is keyed by a timestamp.\nPopular examples are InfluxDB, Graphite, rrd, and Prometheus.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Metering:\nCollection of usage data of a cloud,\nfor the specific purpose of creating invoices\nto bill customers for the resources they have allocated.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"backfilling:\nThe process of adding and modifying data in the past\nwithin a time-series database.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Metric:\nA single time-series vector.\nTypically, a metric represents a single property of a resource,\nsuch as CPU usage of an instance.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Resource metrics:\nA group of metrics belonging to a single resource.\nA compute instance, for instance,\nmay have a metric indicating the number of CPUs allocated,\nanother metric indicating the amount of RAM allocated,\netc."))),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"Being able to hold users accountable\nfor the resources they use\nis a prerequisite for commercially operating a cloud.\nThe SCS project wants to deliver a cloud stack\nwhich can be used for that purpose,\nhence providing reliable metering data is a requirement."),(0,a.kt)("p",null,"As metering data is inherently keyed by time,\na time-series database is required.\nThe choice of time-series database is an important one\nas different databases come with different trade-offs.\nNot all databases are suitable for the kind of data\nwhich is collected in a metering context."),(0,a.kt)("h2",{id:"design-considerations"},"Design Considerations"),(0,a.kt)("p",null,"The following requirements for a time-series database exist:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MUST support backfilling:\nAs we need to catch up on changes to resources\nwhich may have happened during a brief network interruption,\nwe need to be able to modify data after it has been written to the TSDB.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MUST be able to handle lots of resources:\nAs billing should happen with a resource-level granularity,\nwe expect a lot of different metrics inside the TSDB.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MUST scale to different timescales:\nWe expect to have metrics which change frequently (e.g. object store usage)\nand metrics which change rarely (e.g. cinder volume sizes).\nThe TSDB must be able to cope with both types of metrics efficiently.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SHOULD provide an efficient way to query all currently alive resources.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SHOULD allow truncation of storage to remove old data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MUST be available under an appropriate Open Source license,\neven for productive use cases."))),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("h4",{id:"using-gnocchi"},"Using Gnocchi"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://gnocchi.osci.io/"},"Gnocchi")," is a time-series database\nwhich has its origins in the OpenStack ecosystem."),(0,a.kt)("p",null,"It supports all requirements except truncation,\nwhich might have to be implemented."),(0,a.kt)("h4",{id:"using-prometheus"},"Using Prometheus"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io"},"Prometheus")," is a widely used time-series database\nwith its focus on monitoring and incident response.\nWhile it is considered efficient for this use-case,\nit has shortcomings which make it unsuitable for the metering use case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Explicit recommendation ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/instrumentation/#do-not-overuse-labels"},"against high-cardinality metrics"),":\nAs we would have to label metrics by resource IDs and project IDs,\nwe have to expect a very high cardinality,\nalso with a significant amount of metric churn.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Backfilling, ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/storage/#backfilling-from-openmetrics-format"},"albeit possible"),", is not well-supported."))),(0,a.kt)("h4",{id:"using-influxdb"},"Using InfluxDB"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.influxdata.com/"},"InfluxDB")," is a widely used time-series database\nwith its focus on monitoring."),(0,a.kt)("p",null,"In contrast to Prometheus, it does support backfilling.\nHowever, like Prometheus,\nit seems to run ",(0,a.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/cloud/write-data/best-practices/resolve-high-cardinality/"},"into scalability issues in high-cardinality scenarios"),"."),(0,a.kt)("p",null,"In addition,\nclustering is only available in commercial licensing options."),(0,a.kt)("h4",{id:"creating-a-custom-tsdb-implementation"},"Creating a custom TSDB implementation"),(0,a.kt)("p",null,"A custom TSDB implementation\nis a non-trivial project to pursue."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"We use Gnocchi.\nAccording to research,\nit mostly fulfills the requirements.\nWhile some small development efforts may be needed,\nto make it fully usable,\nthe amount of work is anticipated much less\nthan making Prometheus or Influx fit the bill\n(due to backfilling / cardinality scaling constraints),\nlet alone rolling a custom implementation."),(0,a.kt)("h2",{id:"open-questions"},"Open questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"What will be the granularity of the events meta information?"),(0,a.kt)("p",{parentName:"li"},"If we decide to use resource metadata\nas a place to store slow-changing information\n(e.g. instance flavors, volume sizes),\nwe need to know what the granularity of that is."))),(0,a.kt)("h2",{id:"related-documents"},"Related Documents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SCS-0411-v1")),(0,a.kt)("h2",{id:"conformance-tests"},"Conformance Tests"),(0,a.kt)("p",null,"None (this is a decision record)."))}p.isMDXComponent=!0}}]);