"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={title:"Status page OpenAPI decision",type:"Decision Record",status:"Draft",track:"Ops"},r=void 0,s={unversionedId:"active/scs-0402-v1-status-page-openapi-spec-decision",id:"active/scs-0402-v1-status-page-openapi-spec-decision",title:"Status page OpenAPI decision",description:"Introduction",source:"@site/standards/active/scs-0402-v1-status-page-openapi-spec-decision.md",sourceDirName:"active",slug:"/active/scs-0402-v1-status-page-openapi-spec-decision",permalink:"/standards/active/scs-0402-v1-status-page-openapi-spec-decision",draft:!1,tags:[],version:"current",frontMatter:{title:"Status page OpenAPI decision",type:"Decision Record",status:"Draft",track:"Ops"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Decision",id:"decision",level:2},{value:"Common definitions",id:"common-definitions",level:3},{value:"Id",id:"id",level:4},{value:"Incremental",id:"incremental",level:4},{value:"Generation and order",id:"generation-and-order",level:4},{value:"API objects",id:"api-objects",level:3},{value:"API object fields",id:"api-object-fields",level:3},{value:"Endpoint naming",id:"endpoint-naming",level:3},{value:"Phase list",id:"phase-list",level:3},{value:"Labels",id:"labels",level:3},{value:"Impact",id:"impact",level:3},{value:"Component impacts",id:"component-impacts",level:3},{value:"Return of <code>POST</code> requests",id:"return-of-post-requests",level:3},{value:"Return of <code>PATCH</code> requestes",id:"return-of-patch-requestes",level:3},{value:"<code>PATCH</code> vs <code>PUT</code> for updating resources",id:"patch-vs-put-for-updating-resources",level:3},{value:"Authentication and authorization",id:"authentication-and-authorization",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"While defining the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SovereignCloudStack/status-page-openapi"},"OpenAPI spec")," some considerations and decisions are made and should be documented."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,'The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in ',(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc2119"},"RFC 2119"),"."),(0,a.kt)("p",null,'In addition, "FORBIDDEN" is to be interpreted equivalent to "MUST NOT".'),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The spec should be as minimal as possible, while being as understandable as possible, so some choices to the design of API objects, requests and responses are made."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("h3",{id:"common-definitions"},"Common definitions"),(0,a.kt)("p",null,"Some defined schemas are used as common types. These common definitions help to simplify the actual object definitions by providing meaningful names, and reduce duplication. A change of ID type for example only needs one change in the common definition, and not in any of the object definitions which include an ID."),(0,a.kt)("p",null,"Special mentions:"),(0,a.kt)("h4",{id:"id"},"Id"),(0,a.kt)("p",null,"IDs are used for identification of resources, which can be retrieved by the API."),(0,a.kt)("p",null,"UUIDs are used, to ensure uniqueness. Also, they can be visually recognized as identifier."),(0,a.kt)("h4",{id:"incremental"},"Incremental"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental")," is used in combination with other identifiers to identify a sub resource of any kind. ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental"),"s themselves are not globally unique, but unique for every sub resource of an unique resource."),(0,a.kt)("h4",{id:"generation-and-order"},"Generation and order"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Generation")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Order")," are predefined objects which include a ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental")," typed field for the common usages of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental")," value."),(0,a.kt)("h3",{id:"api-objects"},"API objects"),(0,a.kt)("p",null,"All objects which are used as payload, either as request or response, are defined by schemas. This centralizes the maintanence of field names and types, for both requests and responses."),(0,a.kt)("h3",{id:"api-object-fields"},"API object fields"),(0,a.kt)("p",null,"Most fields of objects are not required. This allows usage as request and response payloads."),(0,a.kt)("p",null,"Responses of payload objects, which contain an ID or an ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental")," typed field, MUST fill the ID or ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental")," field to fully identify the (sub) resource."),(0,a.kt)("p",null,"Requests on a single resource MUST contain the ID in the path parameters. Request on sub resources MUST contain the ID and ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental")," typed value as path parameters. The payload SHOULD NOT contain the ID or ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental")," typed field.\nIf it contains these fields as payload, they SHALL NOT change them."),(0,a.kt)("p",null,"Requests to updating operations SHOULD contain the minimum of the changed fields, but MAY contain the full object. ID and ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental")," typed fields MUST follow the same rules as stated above."),(0,a.kt)("h3",{id:"endpoint-naming"},"Endpoint naming"),(0,a.kt)("p",null,"The endpoints are named in plural form, even when handeling single objects, to keep uniform paths."),(0,a.kt)("h3",{id:"phase-list"},"Phase list"),(0,a.kt)("p",null,"The list of phases that an incident can go through has a crucial order. So it MUST be handled as the given list."),(0,a.kt)("p",null,"Delete or update operations are FORBIDDEN."),(0,a.kt)("p",null,'To "change" a phase list, a new one must be created. The old one must be kept. For this mechanic the lists are structured in generations. All references to phases MUST include their generation to ensure correct references.'),(0,a.kt)("p",null,"To reference a single phase a ",(0,a.kt)("inlineCode",{parentName:"p"},"PhaseReference")," MUST include a generation and an order field. This MAY be used to reference a single generation too."),(0,a.kt)("h3",{id:"labels"},"Labels"),(0,a.kt)("p",null,"Labels are identifying metadata to components. They do not represent a resource or sub resource of any kind. They are designed as non system critical pieces of information, mainly intended for human consumption."),(0,a.kt)("p",null,"Labels are simple key/value pairs attached to components, categorizing them dynamically."),(0,a.kt)("h3",{id:"impact"},"Impact"),(0,a.kt)("p",null,"An impact defines the relation between an incident and a component. A component can be affected by multiple incidents and an incident can affect multiple components. Each of these impacts can have a different type depending on the incident and component, like for example connectivity or performance issues."),(0,a.kt)("p",null,"To reflect this, each component and incident can have a list of impacts, stating the type of impact and a reference to the incident or component, it refers to."),(0,a.kt)("h3",{id:"component-impacts"},"Component impacts"),(0,a.kt)("p",null,"Components list their impacts, which they are affected by, as read only. Only an incident creates an impact on a component. Components MUST only list their currently active impacts."),(0,a.kt)("h3",{id:"return-of-post-requests"},"Return of ",(0,a.kt)("inlineCode",{parentName:"h3"},"POST")," requests"),(0,a.kt)("p",null,"Generally ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," requests create new resources. These endpoints do not return the new resource, but a unique identifier to the resource e.g. an UUID."),(0,a.kt)("p",null,"In most cases the new resource won't be used directly after creation. Most often list calls are used. If the new resource is used directly, it can be retrieved by the returned identifier."),(0,a.kt)("p",null,"Payloads to POST requests SHALL NOT include ID or ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental")," typed fields, it lies in the responsibility of the API server to assign IDs and ",(0,a.kt)("inlineCode",{parentName:"p"},"Incremental"),"s to objects."),(0,a.kt)("h3",{id:"return-of-patch-requestes"},"Return of ",(0,a.kt)("inlineCode",{parentName:"h3"},"PATCH")," requestes"),(0,a.kt)("p",null,"Most commonly ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH")," requests are used to partially or fully change a resource. These requests do not respond with the changed resource, nor an identifier."),(0,a.kt)("p",null,"Both the old state as well as the new state are known on the client at that point in time and if they need to load the actual recent version from the server, the identifier is already known."),(0,a.kt)("h3",{id:"patch-vs-put-for-updating-resources"},(0,a.kt)("inlineCode",{parentName:"h3"},"PATCH")," vs ",(0,a.kt)("inlineCode",{parentName:"h3"},"PUT")," for updating resources"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT")," requests is most commonly used to update full objects, whereas ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH")," is used for partial updates."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PATCH")," is used as the default method for updating resources because it does not require the full object for an update, but does not discourage the use of the complete object."),(0,a.kt)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,a.kt)("p",null,"The API spec does not include either authentication (AuthN) nor authorization (AuthZ) of any kind. The API server MUST be secured by an reverse/auth proxy."))}p.isMDXComponent=!0}}]);