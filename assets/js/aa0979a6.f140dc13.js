"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2661],{7649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>T,frontMatter:()=>E,metadata:()=>x,toc:()=>_});var a=n(7462),i=n(7294),l=n(3905),r=n(3907),o=n(3152),c=n(8993),s=n(5748),d=n(7905);const m="link_wr7g",u="button_gV6k",p=e=>{const{title:t,href:n,handleClick:a}=e;return i.createElement("a",{className:m,href:n},i.createElement("button",{onClick:a,className:u},t))},h="modal__zVM",k="modalContent_zbmJ",b="modalTitle_u975",v="modalDescription_H8cB",g="modalH2_DhYb",y="buttonBox_NbRn",w=e=>{const{calendarEvent:t,onClose:n,show:a}=e;return i.createElement(i.Fragment,null,a&&t&&i.createElement("div",{className:h,onClick:n},i.createElement("div",{className:k},i.createElement("div",{className:b},i.createElement("h2",{className:g},t.title)),i.createElement("div",{className:v},i.createElement("p",null,t.extendedProps.description),i.createElement("p",null,t.extendedProps.location),i.createElement("div",{className:y},i.createElement(p,{handleClick:e=>{e.stopPropagation()},title:"Join Meeting",href:t.extendedProps.location}))))))},C=()=>{const[e,t]=(0,i.useState)(!1),[n,a]=(0,i.useState)();return i.createElement(i.Fragment,null,i.createElement(r.Z,{slotDuration:"00:15:00",slotMinTime:"09:00:00",slotMaxTime:"18:00:00",navLinks:!0,nowIndicator:!0,height:"auto",expandRows:!1,eventClick:n=>(n=>{t(!e),a(n.event)})(n),plugins:[o.Z,c.Z,d.Z,s.ZP],initialView:"timeGridWeek",weekends:!1,events:{url:"https://sovereigncloudstack.github.io/calendar/scs.ics",format:"ics"},headerToolbar:{left:"prev,next today",center:"title",right:"timeGridDay,timeGridWeek,dayGridMonth"}}),i.createElement("div",null,i.createElement(w,{show:e,calendarEvent:n,onClose:()=>t(!1)})))},E={sidebar_position:2,title:"Calendar"},f="Calendar",x={unversionedId:"calendar",id:"calendar",title:"Calendar",description:"We\u2019re an open community",source:"@site/community/calendar.mdx",sourceDirName:".",slug:"/calendar",permalink:"/community/calendar",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Calendar"},sidebar:"community",previous:{title:"Overview",permalink:"/community/"},next:{title:"Collaboration",permalink:"/community/collaboration"}},N={},_=[{value:"We\u2019re an open community",id:"were-an-open-community",level:2}],M={toc:_};function T(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"calendar"},"Calendar"),(0,l.kt)("h2",{id:"were-an-open-community"},"We\u2019re an open community"),(0,l.kt)("p",null,"Our meetings are publicly announced and we are happy to welcome both newcomers and established members alike. You can navigate either through the calendar below or subscribe with your favorite client to ",(0,l.kt)("a",{parentName:"p",href:"https://sovereigncloudstack.github.io/calendar/scs.ics"},"https://sovereigncloudstack.github.io/calendar/scs.ics"),". The calendar is collaboratively maintained on GitHub and new entries, such as a lightning talk, are highly appreciated!"),(0,l.kt)(C,{mdxType:"CommunityCalendar"}))}T.isMDXComponent=!0}}]);