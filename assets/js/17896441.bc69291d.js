"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[918],{5732:(e,t,a)=>{a.r(t),a.d(t,{default:()=>X});var n=a(7294),l=a(6010),s=a(3783),i=a(9960),r=a(5999);const o=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(2263),d=a(907),m=a(2822);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,c.Z)(),{pluginId:s}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,m.J)(s),{latestDocSuggestion:r,latestVersionSuggestion:o}=(0,d.Jo)(s),u=null!=r?r:(h=o).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:o.label,to:u.path,onClick:()=>i(o.name)})))}const p=function(e){let{versionMetadata:t}=e;return t.banner?n.createElement(h,{versionMetadata:t}):n.createElement(n.Fragment,null)};var E=a(1217);function b(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(7462);const k="iconEdit_mS5F",L=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,_.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(k,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function Z(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(L,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const U="tag_WK-t",T="tagRegular_LXbV",C="tagWithCount_S5Zl";const y=function(e){const{permalink:t,name:a,count:s}=e;return n.createElement(i.Z,{href:t,className:(0,l.Z)(U,{[T]:!s,[C]:s})},a,s&&n.createElement("span",null,s))},w="tags_NBRY",M="tag_F03v";function A(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(w,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:M},n.createElement(y,{name:t,permalink:a}))}))))}const x="lastUpdated_mt2f";function H(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(A,e)))}function S(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",x)},(a||s)&&n.createElement(N,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function B(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:c}=a,d=c.length>0,u=!!(s||i||o);return d||u?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(H,{tags:c}),u&&n.createElement(S,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:r})):n.createElement(n.Fragment,null)}function F(e){let{toc:t,className:a,linkClassName:l,isChild:s}=e;return t.length?n.createElement("ul",{className:s?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(F,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function V(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:r,...o}=e;const c=(0,m.LU)(),d=null!=i?i:c.tableOfContents.minHeadingLevel,u=null!=r?r:c.tableOfContents.maxHeadingLevel,v=(0,m.DA)({toc:t,minHeadingLevel:d,maxHeadingLevel:u}),g=(0,n.useMemo)((()=>{if(l&&s)return{linkClassName:l,linkActiveClassName:s,minHeadingLevel:d,maxHeadingLevel:u}}),[l,s,d,u]);return(0,m.Si)(g),n.createElement(F,(0,_.Z)({toc:v,className:a,linkClassName:l},o))}const D="tableOfContents_vrFS";const I=function(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,l.Z)(D,"thin-scrollbar",t)},n.createElement(V,(0,_.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))},O="tocCollapsible_aw-L",R="tocCollapsibleButton_zr6a",z="tocCollapsibleContent_0dom",P="tocCollapsibleExpanded_FSiv";function W(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:o,toggleCollapsed:c}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(O,{[P]:!o},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",R),onClick:c},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:z,collapsed:o},n.createElement(V,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})))}var q=a(9649);const J="docItemContainer_oiyr",Y="docItemCol_zHA2",K="tocMobile_Tx6Y";function X(e){const{content:t,versionMetadata:a}=e,{metadata:i,frontMatter:r}=t,{image:c,keywords:d,hide_title:u,hide_table_of_contents:v,toc_min_heading_level:g,toc_max_heading_level:h}=r,{description:b,title:f}=i,N=!u&&void 0===t.contentTitle,_=(0,s.Z)(),k=!v&&t.toc&&t.toc.length>0,L=k&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:f,description:b,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[Y]:!v})},n.createElement(p,{versionMetadata:a}),n.createElement("div",{className:J},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),k&&n.createElement(W,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:h,className:(0,l.Z)(m.kM.docs.docTocMobile,K)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},N&&n.createElement(q.N,null,f),n.createElement(t,null)),n.createElement(B,e)),n.createElement(o,{metadata:i}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(I,{toc:t.toc,minHeadingLevel:g,maxHeadingLevel:h,className:m.kM.docs.docTocDesktop}))))}},9649:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(7462),l=a(7294),s=a(6010),i=a(5999),r=a(2822);const o="anchorWithStickyNavbar_y2LR",c="anchorWithHideOnScrollNavbar_3ly5",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,r.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,s.Z)("anchor",{[c]:m,[o]:!m}),id:a}),d.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}}}]);