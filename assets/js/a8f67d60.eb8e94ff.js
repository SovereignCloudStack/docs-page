"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2517],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var o=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=o.createContext({}),u=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=u(t.components);return o.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},p=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),p=u(n),s=i,h=p["".concat(c,".").concat(s)]||p[s]||m[s]||a;return n?o.createElement(h,r(r({ref:e},d),{},{components:n})):o.createElement(h,r({ref:e},d))}));function s(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8899:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const a={},r="Adding Docs Guide",l={unversionedId:"contribute/adding-docs-guide",id:"contribute/adding-docs-guide",title:"Adding Docs Guide",description:"In this Guide you will learn how to integrate your documentation to the SCS documentation, which you will find on docs.scs.community.",source:"@site/community/contribute/adding-docs-guide.md",sourceDirName:"contribute",slug:"/contribute/adding-docs-guide",permalink:"/community/contribute/adding-docs-guide",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"community",previous:{title:"Contribute",permalink:"/community/category/contribute"},next:{title:"Documentation Files Structure",permalink:"/community/contribute/doc-files-structure-guide"}},c={},u=[{value:"Step 1 \u2013 Documentation type",id:"step-1--documentation-type",level:2},{value:"1. Technical Documentation",id:"1-technical-documentation",level:2},{value:"Step 1 \u2013 Checklist",id:"step-1--checklist",level:3},{value:"Step 2 \u2013 Adding your repo to the docs.json",id:"step-2--adding-your-repo-to-the-docsjson",level:3},{value:"2. Operational documentation",id:"2-operational-documentation",level:2},{value:"3. Community documentation",id:"3-community-documentation",level:2}],d={toc:u};function m(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-docs-guide"},"Adding Docs Guide"),(0,i.kt)("p",null,"In this Guide you will learn how to integrate your documentation to the SCS documentation, which you will find on ",(0,i.kt)("a",{parentName:"p",href:"https://docs.scs.community"},"docs.scs.community"),"."),(0,i.kt)("h2",{id:"step-1--documentation-type"},"Step 1 \u2013 Documentation type"),(0,i.kt)("p",null,"Determine the type of your documentation and click to continue."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-technical-documentation"},"Technical documentation")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-operational-documentation"},"Operational documentation")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#3-community-documentation"},"Community documentation"))),(0,i.kt)("p",null,"If unsure don't hestitate to ask us at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SovereignCloudStack/docs/blob/main/community/communication/matrix.md"},"Matrix")),(0,i.kt)("h2",{id:"1-technical-documentation"},"1. Technical Documentation"),(0,i.kt)("h3",{id:"step-1--checklist"},"Step 1 \u2013 Checklist"),(0,i.kt)("p",null,"Your repository containing the documentation has to..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"be a public repository"),(0,i.kt)("li",{parentName:"ul"},"contain a directory named ",(0,i.kt)("inlineCode",{parentName:"li"},"/doc")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"/docs")," within root, containing the documentation files")),(0,i.kt)("p",null,"The documentation files have to be in markdown format and..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"comply ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/SovereignCloudStack/docs/blob/main/community/github/dco-and-licenses.md"},"SCS licensing guidelines")),(0,i.kt)("li",{parentName:"ul"},"match our",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SovereignCloudStack/docs/blob/main/community/contribute/doc-files-structure-guide.md"},"markdown file structure guideline")),(0,i.kt)("li",{parentName:"ul"},"linting Rules"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SovereignCloudStack/docs/blob/main/community/contribute/styleguide.md"},"styleguide"))))),(0,i.kt)("h3",{id:"step-2--adding-your-repo-to-the-docsjson"},"Step 2 \u2013 Adding your repo to the docs.json"),(0,i.kt)("p",null,"File a Pull Request within the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SovereignCloudStack/docs-page"},"docs-page")," repository and add your repo to the docs.package.json:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "repo": "demo-organisation/demo-repository",\n    "source": "doc/*.md",\n    "target": "docs",\n    "label": "demo-repository-label"\n  }\n]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"key"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"repo"),(0,i.kt)("td",{parentName:"tr",align:null},"reference to github organisation and repository")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source"),(0,i.kt)("td",{parentName:"tr",align:null},"path to content to copy: Either glob matching individual markdown files OR the path of a single directory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"target"),(0,i.kt)("td",{parentName:"tr",align:null},"directory where the files should be copied to within the docs-page repo")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"label"),(0,i.kt)("td",{parentName:"tr",align:null},"label for directory. only mandatory if source file is set to copy only ","*",".md files and not the complete directory")))),(0,i.kt)("p",null,"Once it is approved and merged, a postinstall script will be triggered within the build process. This initiates downloading, copy and distilling which results in this static generated ",(0,i.kt)("a",{parentName:"p",href:"https://docs.scs.community"},"documentation")," page \u2013 now with your content."),(0,i.kt)("p",null,"An explanation on how the sync & distill workflow and a guide on how to test it in a local development environment you will find ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SovereignCloudStack/docs/blob/main/community/contribute/docs-workflow-explanation.md"},"here"),"."),(0,i.kt)("h2",{id:"2-operational-documentation"},"2. Operational documentation"),(0,i.kt)("p",null,"Your doc files contain operational knowledge. Which layer in the stack do they belong to?"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"iaas"),(0,i.kt)("li",{parentName:"ol"},"iam"),(0,i.kt)("li",{parentName:"ol"},"kaas"),(0,i.kt)("li",{parentName:"ol"},"operations")),(0,i.kt)("p",null,"File a Pull Request within the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SovereignCloudStack/docs"},"docs")," repository and add your markdown files to the fitting directory."),(0,i.kt)("h2",{id:"3-community-documentation"},"3. Community documentation"),(0,i.kt)("p",null,"Your doc files contain knowledge regarding our community? Choose the right directory. If unsure don't hestitate to ask us at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SovereignCloudStack/docs/blob/main/community/communication/matrix.md"},"Matrix"),"."),(0,i.kt)("p",null,"File a Pull Request within the ",(0,i.kt)("inlineCode",{parentName:"p"},"docs")," repository and add your markdown files to the fitting directory."))}m.isMDXComponent=!0}}]);