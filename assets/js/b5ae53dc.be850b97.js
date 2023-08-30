"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2003],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,u=d["".concat(c,".").concat(f)]||d[f]||m[f]||a;return t?r.createElement(u,p(p({ref:n},l),{},{components:t})):r.createElement(u,p({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4388:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},p="Component Overview",i={unversionedId:"operating-scs/status-page/docs/component_overview",id:"operating-scs/status-page/docs/component_overview",title:"Component Overview",description:"This represents a part of the decision process related to the overall structure the API wants to represent.",source:"@site/docs/04-operating-scs/status-page/docs/component_overview.md",sourceDirName:"04-operating-scs/status-page/docs",slug:"/operating-scs/status-page/docs/component_overview",permalink:"/docs/operating-scs/status-page/docs/component_overview",draft:!1,editUrl:"https://github.com/SovereignCloudStack/docs-page/tree/main/docs/04-operating-scs/status-page/docs/component_overview.md",tags:[],version:"current",frontMatter:{}},c={},s=[],l={toc:s};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"component-overview"},"Component Overview"),(0,o.kt)("p",null,"This represents a part of the decision process related to the overall structure the API wants to represent."),(0,o.kt)("mermaid",{value:'C4Component\n  title status-page-openapi\n\n  Container_Boundary(impacts, "Impacts") {\n    Component(impactType, ImpactType, "ID, displayName, description")\n    Component(impact, Impact, "type, reference")\n    Component(impactComponentList, ImpactComponentList, "[]Impact", "Impacts reference components")\n    Component(impactIncidentList, ImpactIncidentList, "<<readonly>>[]Impact", "Impacts reference incidents")\n\n    Rel(impact, impactType, "has")\n    Rel(impactComponentList, impact, "lists")\n    Rel(impactIncidentList, impact, "lists")\n\n    UpdateElementStyle(impact, $bgColor="green")\n    UpdateElementStyle(impactComponentList, $bgColor="green")\n    UpdateElementStyle(impactIncidentList, $bgColor="green")\n\n    UpdateRelStyle(impact, impactType, "green", "green", $offsetY="-10")\n    UpdateRelStyle(impactComponentList, impact, "green", "green", $offsetY="-15")\n    UpdateRelStyle(impactIncidentList, impact, "green", "green")\n  }\n\n  Container_Boundary(incidents, "Incidents") {\n    Component(incidentUpdate, IncidentUpdate, "order, displayName, description, createdAt")\n    Component(incident, Incident, "ID, displayName, description, updates, affects, beganAt, endedAt, Phase")\n\n    Rel(incident, incidentUpdate, "contains")\n  }\n\n  Container_Boundary(phases, "Phases") {\n    Component(phaseReference, PhaseReference, "Phase, order, generation")\n    Component(phase, Phase, "", "it is just a name")\n    Component(phaseList, PhaseList, "generation, []Phase")\n\n    Rel(phaseList, phase, "lists")\n    Rel(phaseReference, phase, "references")\n    Rel(phaseReference, phaseList, "references")\n\n    UpdateElementStyle(phaseReference, $bgColor="green")\n    UpdateElementStyle(phaseList, $bgColor="green")\n\n    UpdateRelStyle(phaseList, phase, "green", "green", $offsetY="5")\n    UpdateRelStyle(phaseReference, phase, "green", "green", $offsetX="-30", $offsetY="10")\n    UpdateRelStyle(phaseReference, phaseList, "green", "green", $offsetY="5")\n\n  }\n\n  Container_Boundary(components, "Components") {\n    Component(component, Component, "ID, displayName, Labels, activelyAffectedBy")\n    Component(labels, Labels, "", "Key value pairs")\n\n    Rel(component, labels, "contains")\n  }\n\n  %% global relations %%\n  %% deprecated %%\n  Rel(incident, impactType, "has")\n  BiRel(component, incident, "affects / affected by")\n\n  UpdateRelStyle(incident, impactType, "red", "red")\n  UpdateRelStyle(component, incident, "red", "red", $offsetX="10")\n\n  %% new %%\n  Rel(incident, impactComponentList, "affects")\n  Rel(component, impactIncidentList, "actively affected by", "only list active/open impacts")\n  Rel(incident, phaseReference, "has")\n  Rel(impact, component, "references", "from impactComponentList")\n  Rel(impact, incident, "references", "from impactIncidentList")\n\n  UpdateRelStyle(incident, impactComponentList, "green", "green")\n  UpdateRelStyle(component, impactIncidentList, "green", "green", $offsetX="-180", $offsetY="-70")\n  UpdateRelStyle(incident, phaseReference, "green", "green", $offsetX="-70", $offsetY="40")\n  UpdateRelStyle(impact, component, "green", "green", $offsetX="-140")\n  UpdateRelStyle(impact, incident, "green", "green", $offsetX="-100")\n'}),(0,o.kt)("p",null,"Color meaning:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Blue: Existing structure"),(0,o.kt)("li",{parentName:"ul"},"Red: Deprecated / removed"),(0,o.kt)("li",{parentName:"ul"},"Green: New")))}m.isMDXComponent=!0}}]);