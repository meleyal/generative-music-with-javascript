"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[608],{1875:function(e,t){t.Z=function(){return null}},8617:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r="iconExternalLink_3J9K",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return a.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},261:function(e,t,n){n.d(t,{Z:function(){return be}});var a=n(7294),r=n(6010),l=n(5977),o=n(4973),i=n(4011),c="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,a.useRef)(null),t=(0,l.k6)().action;return(0,i.SL)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var h=function(){var e,t=(0,i.nT)(),n=t.isClosed,l=t.close,c=(0,i.LU)().announcementBar;if(!c)return null;var s=c.content,u=c.backgroundColor,h=c.textColor,g=c.isCloseable;return!s||g&&n?null:a.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},a.createElement("div",{className:(0,r.Z)(f,(e={},e[v]=g,e)),dangerouslySetInnerHTML:{__html:s}}),g?a.createElement("button",{type:"button",className:(0,r.Z)(d,"clean-btn"),onClick:l,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},g=n(7462),b=n(1875),E=n(2263),p={toggle:"toggle_71bT"},Z=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.dark),style:n},t)},k=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(p.toggle,p.light),style:n},t)},_=(0,a.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,i=e.onChange,c=(0,a.useState)(l),s=c[0],u=c[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:i,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function w(e){var t=(0,i.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,c=(0,E.Z)().isClient;return a.createElement(_,(0,g.Z)({disabled:!c,icons:{checked:a.createElement(Z,{icon:n,style:r}),unchecked:a.createElement(k,{icon:l,style:o})}},e))}var N=n(5350),y=n(7898),C=function(e){var t=(0,l.TH)(),n=(0,a.useState)(e),r=n[0],o=n[1],c=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],m=s[1],d=(0,a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,y.Z)((function(t,n){var a=t.scrollY,r=null==n?void 0:n.scrollY;if(e)if(a<u)o(!0);else{if(c.current)return c.current=!1,void o(!1);r&&0===a&&o(!0);var l=document.documentElement.scrollHeight-u,i=window.innerHeight;r&&a>=r?o(!1):a+i<l&&o(!0)}}),[u,c]),(0,i.SL)((function(t){e&&!t.location.hash&&o(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(c.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:r}};var I=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},L=n(3783),T=n(4201),D=n(5537),S=n(3366),B=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,l=void 0===r?30:r,o=e.className,i=(0,S.Z)(e,["width","height","className"]);return a.createElement("svg",(0,g.Z)({className:o,width:n,height:l,viewBox:"0 0 30 30","aria-hidden":"true"},i),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},x="toggle_3Zt9",A="navbarHideable_2qcr",U="navbarHidden_3yey",M="right";function P(){return(0,i.LU)().navbar.items}function R(){var e=(0,i.LU)().colorMode.disableSwitch,t=(0,N.Z)(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?l():r()}),[r,l]),disabled:e}}function H(e){var t=e.sidebarShown,n=e.toggleSidebar;I(t);var l=P(),c=R(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,l=null==(t=(0,i.g8)())?void 0:t({toggleSidebar:r}),o=(0,i.D9)(l),c=(0,a.useState)((function(){return!1})),s=c[0],u=c[1];(0,a.useEffect)((function(){l&&!o&&u(!0)}),[l,o]);var m=!!l;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&t&&a.createElement(w,{checked:c.isDarkTheme,onChange:c.toggle})),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(T.Z,(0,g.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var W=function(){var e,t,n,l,o,c,s,u=(0,i.LU)().navbar,m=u.hideOnScroll,d=u.style,f=(t=(0,L.Z)(),n="mobile"===t,l=(0,a.useState)(!1),o=l[0],c=l[1],s=(0,a.useCallback)((function(){c((function(e){return!e}))}),[]),(0,a.useEffect)((function(){"desktop"===t&&c(!1)}),[t]),{shouldRender:n,toggle:s,shown:o}),v=R(),h=C(m),E=h.navbarRef,p=h.isNavbarVisible,Z=P(),k=Z.some((function(e){return"search"===e.type})),_=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:M)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:M)}))}}(Z),N=_.leftItems,y=_.rightItems;return a.createElement("nav",{ref:E,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===d,"navbar--primary":"primary"===d,"navbar-sidebar--show":f.shown},e[A]=m,e[U]=m&&!p,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},(null==Z?void 0:Z.length)>0&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f.toggle,onKeyDown:f.toggle},a.createElement(B,null)),a.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),N.map((function(e,t){return a.createElement(T.Z,(0,g.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},y.map((function(e,t){return a.createElement(T.Z,(0,g.Z)({},e,{key:t}))})),!v.disabled&&a.createElement(w,{className:x,checked:v.isDarkTheme,onChange:v.toggle}),!k&&a.createElement(b.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:f.toggle}),f.shouldRender&&a.createElement(H,{sidebarShown:f.shown,toggleSidebar:f.toggle}))},V=n(6742),z=n(4996),F=n(3919),O="footerLogoLink_MyFc",G=n(8465),q=n(8617);function j(e){var t=e.to,n=e.href,r=e.label,l=e.prependBaseUrlToHref,o=(0,S.Z)(e,["to","href","label","prependBaseUrlToHref"]),i=(0,z.Z)(t),c=(0,z.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(V.Z,(0,g.Z)({className:"footer__link-item"},n?{href:l?c:n}:{to:i},o),n&&!(0,F.Z)(n)?a.createElement("span",null,r,a.createElement(q.Z,null)):r)}var J=function(e){var t=e.sources,n=e.alt;return a.createElement(G.Z,{className:"footer__logo",alt:n,sources:t})};var K=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,c=t.logo,s=void 0===c?{}:c,u={light:(0,z.Z)(s.src),dark:(0,z.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(j,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(V.Z,{href:s.href,className:O},a.createElement(J,{alt:s.alt,sources:u})):a.createElement(J,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},Q=n(412),Y=(0,i.WA)("theme"),X="light",$="dark",ee=function(e){return e===$?$:X},te=function(e){(0,i.WA)("theme").set(ee(e))},ne=function(){var e=(0,i.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,l=(0,a.useState)(function(e){return Q.Z.canUseDOM?ee(document.documentElement.getAttribute("data-theme")):ee(e)}(t)),o=l[0],c=l[1],s=(0,a.useCallback)((function(){c(X),te(X)}),[]),u=(0,a.useCallback)((function(){c($),te($)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",ee(o))}),[o]),(0,a.useEffect)((function(){if(!n)try{var e=Y.get();null!==e&&c(ee(e))}catch(t){console.error(t)}}),[c]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?$:X)}))}),[]),{isDarkTheme:o===$,setLightTheme:s,setDarkTheme:u}},ae=n(2924);var re=function(e){var t=ne(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(ae.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)},le="docusaurus.tab.",oe=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,i.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,i._f)().forEach((function(t){if(t.startsWith(le)){var n=t.substring(le.length);e[n]=(0,i.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},ie=(0,a.createContext)(void 0);var ce=function(e){var t=oe(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(ie.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function se(e){var t=e.children;return a.createElement(re,null,a.createElement(i.pl,null,a.createElement(ce,null,a.createElement(i.L5,null,a.createElement(i.Cn,null,t)))))}var ue=n(9105);function me(e){var t=e.locale,n=e.version,r=e.tag;return a.createElement(ue.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var de=n(1217);function fe(){var e=(0,E.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,i.l5)();return a.createElement(ue.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ve(e){var t=e.permalink,n=(0,E.Z)().siteConfig.url,r=function(){var e=(0,E.Z)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,z.Z)(t)}(),o=t?""+n+t:r;return a.createElement(ue.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function he(e){var t=(0,E.Z)(),n=t.siteConfig,r=n.favicon,l=n.themeConfig,o=l.metadatas,c=l.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,p=(0,z.Z)(r),Z=(0,i.pe)(d),k=u,_=m[u].direction;return a.createElement(a.Fragment,null,a.createElement(ue.Z,null,a.createElement("html",{lang:k,dir:_}),r&&a.createElement("link",{rel:"shortcut icon",href:p}),a.createElement("title",null,Z),a.createElement("meta",{property:"og:title",content:Z}),v||c&&a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.createElement(de.Z,{description:f,keywords:h,image:v}),a.createElement(ve,null),a.createElement(fe,null),a.createElement(me,(0,g.Z)({tag:i.HX,locale:u},b)),a.createElement(ue.Z,null,o.map((function(e,t){return a.createElement("meta",(0,g.Z)({key:"metadata_"+t},e))}))))}var ge=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var be=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return ge(),a.createElement(se,null,a.createElement(he,e),a.createElement(u,null),a.createElement(h,null),a.createElement(W,null),a.createElement("div",{className:(0,r.Z)(i.kM.wrapper.main,l,o)},t),!n&&a.createElement(K,null))}},5537:function(e,t,n){var a=n(7462),r=n(3366),l=n(7294),o=n(6742),i=n(8465),c=n(4996),s=n(2263);t.Z=function(e){var t=(0,s.Z)(),n=t.siteConfig,u=n.title,m=n.themeConfig.navbar,d=m.title,f=m.logo,v=void 0===f?{src:""}:f,h=t.isClient,g=e.imageClassName,b=e.titleClassName,E=(0,r.Z)(e,["imageClassName","titleClassName"]),p=(0,c.Z)(v.href||"/"),Z={light:(0,c.Z)(v.src),dark:(0,c.Z)(v.srcDark||v.src)};return l.createElement(o.Z,(0,a.Z)({to:p},E,v.target&&{target:v.target}),v.src&&l.createElement(i.Z,{key:h,className:g,sources:Z,alt:v.alt||d||u}),null!=d&&l.createElement("b",{className:b},d))}},5525:function(e,t,n){n.d(t,{O:function(){return m}});var a=n(7462),r=n(3366),l=n(7294),o=n(6010),i=n(6742),c=n(4996),s=n(8617),u=n(3919);function m(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,m=e.href,d=e.label,f=e.activeClassName,v=void 0===f?"navbar__link--active":f,h=e.prependBaseUrlToHref,g=(0,r.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),b=(0,c.Z)(o),E=(0,c.Z)(t),p=(0,c.Z)(m,{forcePrependBaseUrl:!0}),Z=d&&m&&!(0,u.Z)(m),k="dropdown__link--active"===v;return l.createElement(i.Z,(0,a.Z)({},m?{href:h?p:m}:Object.assign({isNavLink:!0,activeClassName:v,to:b},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(E)}}:null),g),Z?l.createElement("span",null,d,l.createElement(s.Z,k&&{width:12,height:12})):d)}function d(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,c=(0,r.Z)(e,["className","isDropdownItem"]),s=l.createElement(m,(0,a.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},c));return i?l.createElement("li",null,s):s}function f(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,["className","isDropdownItem"]));return l.createElement("li",{className:"menu__list-item"},l.createElement(m,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(e.position,(0,r.Z)(e,["mobile","position"])),o=n?f:d;return l.createElement(o,a)}},6400:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),i=n(907),c=n(6010),s=n(4011),u=n(8780);function m(e){var t,n=e.docId,m=e.activeSidebarClassName,d=e.label,f=e.docsPluginId,v=(0,r.Z)(e,["docId","activeSidebarClassName","label","docsPluginId"]),h=(0,i.Iw)(f),g=h.activeVersion,b=h.activeDoc,E=(0,s.J)(f).preferredVersion,p=(0,i.yW)(f),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,u.uniq)([g,E,p].filter(Boolean)),n);return l.createElement(o.Z,(0,a.Z)({exact:!0},v,{className:(0,c.Z)(v.className,(t={},t[m]=b&&b.sidebar===Z.sidebar,t)),label:null!=d?d:Z.id,to:Z.path}))}},9308:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),i=n(3154),c=n(907),s=n(4011),u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function m(e){var t,n,m=e.mobile,d=e.docsPluginId,f=e.dropdownActiveClassDisabled,v=e.dropdownItemsBefore,h=e.dropdownItemsAfter,g=(0,r.Z)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),b=(0,c.Iw)(d),E=(0,c.gB)(d),p=(0,c.yW)(d),Z=(0,s.J)(d),k=Z.preferredVersion,_=Z.savePreferredVersionName;var w,N=(w=E.map((function(e){var t=(null==b?void 0:b.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==b?void 0:b.activeVersion)},onClick:function(){_(e.name)}}})),[].concat(v,w,h)),y=null!=(t=null!=(n=b.activeVersion)?n:k)?t:p,C=m&&N?"Versions":y.label,I=m&&N?void 0:u(y).path;return N.length<=1?l.createElement(o.Z,(0,a.Z)({},g,{mobile:m,label:C,to:I,isActive:f?function(){return!1}:void 0})):l.createElement(i.Z,(0,a.Z)({},g,{mobile:m,label:C,to:I,items:N,isActive:f?function(){return!1}:void 0}))}},7250:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),i=n(907),c=n(4011);function s(e){var t,n=e.label,s=e.to,u=e.docsPluginId,m=(0,r.Z)(e,["label","to","docsPluginId"]),d=(0,i.zu)(u),f=(0,c.J)(u).preferredVersion,v=(0,i.yW)(u),h=null!=(t=null!=d?d:f)?t:v,g=null!=n?n:h.label,b=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return l.createElement(o.Z,(0,a.Z)({},m,{label:g,to:b}))}},3154:function(e,t,n){var a=n(7462),r=n(3366),l=n(7294),o=n(6010),i=n(4011),c=n(5525),s=n(4201);function u(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function m(e){var t,n=e.items,i=e.position,u=e.className,m=(0,r.Z)(e,["items","position","className"]),d=(0,l.useRef)(null),f=(0,l.useRef)(null),v=(0,l.useState)(!1),h=v[0],g=v[1];return(0,l.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]),l.createElement("div",{ref:d,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":h})},l.createElement(c.O,(0,a.Z)({className:(0,o.Z)("navbar__item navbar__link",u)},m,{onClick:m.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!h))}}),null!=(t=m.children)?t:m.label),l.createElement("ul",{ref:f,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var a=d.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function d(e){var t,n=e.items,m=e.className,d=(e.position,(0,r.Z)(e,["items","className","position"])),f=(0,i.be)(),v=u(n,f),h=(0,i.uR)({initialState:function(){return!v}}),g=h.collapsed,b=h.toggleCollapsed,E=h.setCollapsed;return(0,l.useEffect)((function(){v&&E(!v)}),[f,v]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":g})},l.createElement(c.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),b()}}),null!=(t=d.children)?t:d.label),l.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,["mobile"]),o=n?d:m;return l.createElement(o,a)}},4201:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(3366),r=n(7294),l=n(5525),o=n(3154),i=n(7462),c=function(e){var t=e.width,n=void 0===t?20:t,l=e.height,o=void 0===l?20:l,c=(0,a.Z)(e,["width","height"]);return r.createElement("svg",(0,i.Z)({viewBox:"0 0 20 20",width:n,height:o,"aria-hidden":"true"},c),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},s=n(2263),u=n(4011);function m(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,m=(0,a.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),d=(0,s.Z)().i18n,f=d.currentLocale,v=d.locales,h=d.localeConfigs,g=(0,u.l5)();function b(e){return h[e].label}var E=v.map((function(e){var t="pathname://"+g.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:b(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===f?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),p=[].concat(n,E,l),Z=t?"Languages":b(f);return r.createElement(o.Z,(0,i.Z)({},m,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(c,{style:{verticalAlign:"text-bottom",marginRight:5}}),r.createElement("span",null,Z)),items:p}))}var d=n(1875);function f(e){return e.mobile?null:r.createElement(d.Z,null)}var v={default:function(){return l.Z},localeDropdown:function(){return m},search:function(){return f},dropdown:function(){return o.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function h(e){var t=e.type,n=(0,a.Z)(e,["type"]),l=function(e){var t=v[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return r.createElement(l,n)}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(261),l=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},2924:function(e,t,n){var a=n(7294).createContext(void 0);t.Z=a},8465:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),l=n(7294),o=n(6010),i=n(2263),c=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=function(e){var t=(0,i.Z)().isClient,n=(0,c.Z)().isDarkTheme,u=e.sources,m=e.className,d=e.alt,f=void 0===d?"":d,v=(0,r.Z)(e,["sources","className","alt"]),h=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,h.map((function(e){return l.createElement("img",(0,a.Z)({key:e,src:u[e],alt:f,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],m)},v))})))}},7898:function(e,t,n){var a=n(7294),r=n(412),l=function(){return r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(l()),r=function(){var t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},5350:function(e,t,n){var a=n(7294),r=n(2924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);