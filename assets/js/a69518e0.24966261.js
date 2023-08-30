"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4137],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>d});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(h,o(o({ref:e},u),{},{components:a})):n.createElement(h,o({ref:e},u))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3383:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={title:"Status Page create decision",type:"Decision Record",status:"Draft",track:"Ops",enhances:"status-page-comparison.md"},o=void 0,s={unversionedId:"active/scs-0400-v1-status-page-create-decision",id:"active/scs-0400-v1-status-page-create-decision",title:"Status Page create decision",description:"Introduction",source:"@site/standards/active/scs-0400-v1-status-page-create-decision.md",sourceDirName:"active",slug:"/active/scs-0400-v1-status-page-create-decision",permalink:"/standards/active/scs-0400-v1-status-page-create-decision",draft:!1,tags:[],version:"current",frontMatter:{title:"Status Page create decision",type:"Decision Record",status:"Draft",track:"Ops",enhances:"status-page-comparison.md"},sidebar:"standards",previous:{title:"Requirements for SSO identity federation",permalink:"/standards/active/scs-0300-v1-requirements-for-sso-identity-federation"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Existing Applications",id:"existing-applications",level:2},{value:"Decision",id:"decision",level:2},{value:"Status Page Requirements",id:"status-page-requirements",level:2},{value:"Comparison matrix",id:"comparison-matrix",level:3}],u={toc:p};function m(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,'Creating and maintaining IT infrastructure is a complex task.\nAny kind of consumer (e.g. operators, cutsomers) can\nbe supported by presenting the status of all possible parts of the\nserving infrastructure. Whether a service is not reachable or\nthe used hardware is having an outage we want the consumers to be easily informed\nby using a "Status Page" application. The need for a "Status Page"\ncame up early in the SCS project and the requirements a "Status Page" application\nhas to fulfill were defined and written down on 2022-06-02 as a\n',(0,i.kt)("a",{parentName:"p",href:"https://github.com/SovereignCloudStack/issues/issues/123"},"MVP-0 epic"),'.\nThe upcoming research on existing solutions came to the conclusion that we want to\ncreate a new "Status Page" application.'),(0,i.kt)("h2",{id:"existing-applications"},"Existing Applications"),(0,i.kt)("p",null,'Since we want to use as much as possible from existing projects and contribute to\nupstream projects to support the community with our efforts, it was a hard\ndecision to create a new "Status Page" application.'),(0,i.kt)("p",null,"Before the decision was made some existing and known applications were tested\nand analyzed if they would fit to our use case. An overview of this\ncomparison can be found ",(0,i.kt)("a",{parentName:"p",href:"#comparison-matrix"},"below in this document"),"\nWhile this is not a complete list of all existing applications it did\ncapture the most promising ones from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ivbeg/awesome-status-pages"},"awesome-status-page list"),"\nin order to have base to decide upon."),(0,i.kt)("p",null,"Work on an existing project only makes sense if the project is healthy OR can be\nbrought into a healthy state. If upstream does not accept patches a fork is needed.\nThe fork however only makes sense if the underlying technology is worth to be maintained.\nThe possible candidates did not fulfill these conditions - in the cases where\ncontribution seemed possible the candidates looked abandoned and long existing CVEs weren't\nworked on."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"Based on the results the decision was made, that the effort is likely to be the same if\nwe pick up an existing project and try to get it in shape for our use case. It was not\n100% clear if this would even be possible or if we still would have to maintain our\nown additional patches."),(0,i.kt)("p",null,"So there will be a reference implementation that will match the requirements we have.\nIn addition there will be an architecture design documentation. So if the reference\nimplementation may not fit to you, it will be possible to create your own application."),(0,i.kt)("h2",{id:"status-page-requirements"},"Status Page Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The status page application should be simplistic in software design and should not depend on a large\nvariety of services"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"simplistic, yet existing user management for write access (oauth? OIDC?)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Simple RBAC (role based access control) is nice to have"))),(0,i.kt)("li",{parentName:"ul"},"support that components are only visible to a subset of users",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"implies that there is a role that is read-only"),(0,i.kt)("li",{parentName:"ul"},"On-Prem use case might be handled by having an authenticating reverse proxy in front"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The status page applicaton should allow for simple and easy theming"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Page = (Possibly simple) Web-UI"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As a CSP, I want to have a status page that allows to"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"define locations and similar grouping (AZs, ...)"),(0,i.kt)("li",{parentName:"ul"},"define components globally or per location\n",(0,i.kt)("em",{parentName:"li"},"to ease maintenance I want to define per component where it belongs so that I only have\nto define a component once, but have it visible in several locations\n")," status per component should be allowed to be toggleable per location or overall ","*"," a component should allow for several statuses, that are defined by me"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Status, Status Items should be easy to extract"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"REST(less)-API to interact with\n",(0,i.kt)("em",{parentName:"li"},"API should be versioned\n")," this allows for embedding status information in other applications, such as cloud\ndashboards\n",(0,i.kt)("em",{parentName:"li"},"this also allows for submitting items from other tooling\n")," incoming webhooks (https POST) should be supported (e.g. for air-gapped setups) \u2013\ni.e. submitting a health beacon every x seconds\n",(0,i.kt)("em",{parentName:"li"},"web-UI wanted for posting updates as well\n")," Token based Auth"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configuration should be manageable with YAML files (imho this annoys me using Uptime Kuma)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As a consumer of the status page, I'd like to subscribe to events on the status page via e-mail"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for everything"),(0,i.kt)("li",{parentName:"ul"},"for specific components"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As a consumer of the status page, I'd like to subscribe to an RSS or atom feed")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Allow for the ability to trigger webhooks upon certain events (to submit info to other systems via\nwebhooks, e.g. chat/messenger)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As a CSP Operator, I want to be able to flag a component with a new status quick and easy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"to minimize the probability of making errors, updating the status of a component should not be\nhard brainwork"),(0,i.kt)("li",{parentName:"ul"},"updates can be both machine generated status changes (triggered e.g. by health monitoring)\nas well as updates from human operators"),(0,i.kt)("li",{parentName:"ul"},"updating a status should allow the CSP Operator to do that in a fashion that either pushes\ninfos to the subscribers or just updates the status on the status page"),(0,i.kt)("li",{parentName:"ul"},"updating the status can either be toggling the status of the component or can be\naccompanied by additional textual information."),(0,i.kt)("li",{parentName:"ul"},"When updating a status with textual information the status page application should make it\neasy for me as the CSP Operator to do in a way that if different people submit infos over time\nthey are presented in a similar way (eg. the status page application should guide so that the\nresulting infos are presented in a identical way. Example: when updating infos of an incident\nover time the timeline should automatically be sorted by the status page application so that it\ndoes not depend on the Operator whether the newest info is on top or at the bottom. This is\ntypical thing that varies if several people update items"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Allow for templates for certain types of incidents")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User-specific monitoring (how are MY instances, load-balancers, ... doing?) is OUT OF SCOPE for\nthe status page."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"But having it would be useful and if we have something like this, link it from the status page\n(and a link to horizon might be the default)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Sidenote: External hosting is desired to avoid status page going down with infra"))),(0,i.kt)("p",null,"With those requirements in mind the projects that initially were found, were evaluated."),(0,i.kt)("h3",{id:"comparison-matrix"},"Comparison matrix"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"CachetHQ"),(0,i.kt)("th",{parentName:"tr",align:null},"ClearStatus"),(0,i.kt)("th",{parentName:"tr",align:null},"ciao"),(0,i.kt)("th",{parentName:"tr",align:null},"cState"),(0,i.kt)("th",{parentName:"tr",align:null},"Gatus"),(0,i.kt)("th",{parentName:"tr",align:null},"Issue Status"),(0,i.kt)("th",{parentName:"tr",align:null},"statusfy"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CSP VIEW"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"small dependency tree"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c Composer"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c ruby gems"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2047 helm chart"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c npm/github/zapier"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c npm dependencies very huge")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"easy themable"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"grouping (by location...)"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2047"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,i.kt)("p",null,"| components definition ...\n| ... local or global | \u2705 | \u274c | \u274c | \u2705 | \u2047 | \u2705 | \u274c |\n| ... easy flagging with new status | \u2705 | \u2705 | \u274c | \u2705 | \u2047 | \u2705 | \u274c |\n| ... push notification on update | \u2705 | \u274c | \u2705 | \u274c | \u2705 | \u2047 | \u2705 |\n| ... updates with additional information | \u2705 | \u2705 | \u274c | \u2705 | \u2047 | \u2047 | \u2047 |\n| API Support ... | \u2705 | \u2705 | \u2705 | \u274c read only | \u274c | \u2705 GitHub API | \u274c | \u274c read only |\n| ... versioned | \u2705 | \u274c | \u274c | \u274c | \u274c | \u2705 | \u2047 |\n| ... web ui for posting updates | \u2705 | \u2705 | \u274c | \u2705 | \u274c | \u274c | \u274c |\n| ... token based auth | \u2705 | \u2705 Auth managed by git provider | \u274c only basic auth | \u274c | \u274c BUT OIDC! | \u2705 | \u274c |\n| manageable configuration | \u274c config depends on web server and initial install relies on env variables | \u274c based on hugo CMS | \u274c config by env variables | \u274c based on hugo CMS | \u2705 | \u274c | \u274c no real config needed |\n| templating support | \u2705 twig | \u274c Hugo itself uses GO template libraries | \u274c | \u274c | \u274c | \u274c | \u274c |\n| CUSTOMER VIEW | | | | | | |\n| subscription support ... | \u2705 | \u274c only by git provider | \u2705 | \u274c | \u274c | \u2705 | \u2705 |\n| ... send by eMail | \u2705 | \u274c | \u2705 | \u274c | \u2705 | \u2705 | \u274c | \u274c |\n| watchdog for status page support | \u2047 | \u2047 | \u2705 | \u274c | \u2705 | \u2047 | \u274c |\n| trigger webhook support | \u274c needs cachet-monitor | \u2047 | \u2705 | \u2047 | \u2705 | \u2047 | \u274c |\n| additional infos | - | basically a theme for hugo cms, depends on netlify cms | - | basically a theme for hugo cms, depends on netlify cms | - | It's highly optimized for github pages | SPA created with netlify |\n| hidden components | \u2705 | \u274c | \u274c | \u274c | \u274c | \u274c | \u274c |\n| user management | \u2705 | \u274c | \u274c | \u274c | \u2705 by OIDC | \u2047 through github? | \u274c |\n| different output format on notification | \u274c | \u274c | \u2705 | \u2705 | \u2705 | \u274c | \u2705 |\n| external hosting | \u2705 | \u2705 | \u2705 | \u2705 | \u2705 | \u274c looks like you are limited to github | \u2705 |\n| project healthy | \u274c last commit 17 months | \u274c last commit 3 years | \u274c last commit 5 months | \u2705 last commit 2 months | \u2705 recent activities | \u2705 recent activities | \u274c archived and abondend by the owner |\n| documentation | \u2705 API \u274c User Documentation | \u274c | \u274c | \u274c | \u2705 | \u2047u | \u274c not reachable anymore |\n| git based | \u274c | \u2705 | \u274c | \u2705 | \u274c | \u2705 | \u2047 a netlify based installation is able to communicate with github |\n| project page | ",(0,i.kt)("a",{parentName:"p",href:"https://cachethq.io/"},"https://cachethq.io/")," | ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/weeblrpress/clearstatus"},"https://github.com/weeblrpress/clearstatus")," | ",(0,i.kt)("a",{parentName:"p",href:"https://www.brotandgames.com/ciao/"},"https://www.brotandgames.com/ciao/")," | ",(0,i.kt)("a",{parentName:"p",href:"https://cstate.netlify.app/"},"https://cstate.netlify.app/")," | ",(0,i.kt)("a",{parentName:"p",href:"https://gatus.io/"},"https://gatus.io/")," | ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tadhglewis/issue-status"},"https://github.com/tadhglewis/issue-status")," | ",(0,i.kt)("a",{parentName:"p",href:"https://marquez.co/statusfy"},"https://marquez.co/statusfy")," |"))}m.isMDXComponent=!0}}]);