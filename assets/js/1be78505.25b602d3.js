/*! For license information please see 1be78505.25b602d3.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[514],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4470:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ve}});var r=n(7294),a=n(3905),o=n(2263),l=n(6291),i=n(261),c=n(6010),s=n(4011),u=n(3783),d=n(7898),p=n(5537),m=n(7462),f=function(e){return r.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),r.createElement("g",{fill:"#7a7a7a"},r.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},y=n(4973),h=n(3366),v=n(6742),b=n(3919),g=n(8617),E="menuLinkText_1J2g",k=function e(t,n){return"link"===t.type?(0,s.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},C=(0,r.memo)((function(e){var t=e.items,n=(0,h.Z)(e,["items"]);return r.createElement(r.Fragment,null,t.map((function(e,t){return r.createElement(Z,(0,m.Z)({key:t,item:e},n))})))}));function Z(e){var t=e.item,n=(0,h.Z)(e,["item"]);switch(t.type){case"category":return 0===t.items.length?null:r.createElement(_,(0,m.Z)({item:t},n));case"link":default:return r.createElement(N,(0,m.Z)({item:t},n))}}function _(e){var t,n=e.item,a=e.onItemClick,o=e.activePath,l=(0,h.Z)(e,["item","onItemClick","activePath"]),i=n.items,u=n.label,d=n.collapsible,p=k(n,o),f=(0,s.uR)({initialState:function(){return!!d&&(!p&&n.collapsed)}}),y=f.collapsed,v=f.setCollapsed,b=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,a=e.setCollapsed,o=(0,s.D9)(t);(0,r.useEffect)((function(){t&&!o&&n&&a(!1)}),[t,o,n])}({isActive:p,collapsed:y,setCollapsed:v}),r.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":y})},r.createElement("a",(0,m.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&p},t[E]=!d,t)),onClick:d?function(e){e.preventDefault(),b()}:void 0,href:d?"#":void 0},l),u),r.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:y},r.createElement(C,{items:i,tabIndex:y?-1:0,onItemClick:a,activePath:o})))}function N(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(0,h.Z)(e,["item","onItemClick","activePath"]),l=t.href,i=t.label,s=k(t,a);return r.createElement("li",{className:"menu__list-item",key:i},r.createElement(v.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:l},(0,b.Z)(l)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,b.Z)(l)?i:r.createElement("span",null,i,r.createElement(g.Z,null))))}var O="sidebar_15mo",T="sidebarWithHideableNavbar_267A",S="sidebarHidden_2kNb",P="sidebarLogo_3h0W",w="menu_Bmed",x="menuWithAnnouncementBar_2WvA",j="collapseSidebarButton_1CGd",I="collapseSidebarButtonIcon_3E-R";function D(e){var t=e.onClick;return r.createElement("button",{type:"button",title:(0,y.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",j),onClick:t},r.createElement(f,{className:I}))}function L(e){var t,n,a=e.path,o=e.sidebar,l=e.onCollapse,i=e.isHidden,u=function(){var e=(0,s.nT)().isClosed,t=(0,r.useState)(!e),n=t[0],a=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||a(0===n)})),n}(),m=(0,s.LU)(),f=m.navbar.hideOnScroll,y=m.hideableSidebar,h=(0,s.nT)().isClosed;return r.createElement("div",{className:(0,c.Z)(O,(t={},t[T]=f,t[S]=i,t))},f&&r.createElement(p.Z,{tabIndex:-1,className:P}),r.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",w,(n={},n[x]=!h&&u,n))},r.createElement("ul",{className:"menu__list"},r.createElement(C,{items:o,activePath:a}))),y&&r.createElement(D,{onClick:l}))}var A=function(e){var t=e.toggleSidebar,n=e.sidebar,a=e.path;return r.createElement("ul",{className:"menu__list"},r.createElement(C,{items:n,activePath:a,onItemClick:function(){return t()}}))};function M(e){return r.createElement(s.Cv,{component:A,props:e})}var B=r.memo(L),R=r.memo(M);function H(e){var t=(0,u.Z)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return r.createElement(r.Fragment,null,n&&r.createElement(B,e),a&&r.createElement(R,e))}var z=n(4184),F=n.n(z),W={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},V={Prism:n(7410).Z,theme:W};function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var K=/\r\n|\r|\n/,U=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},X=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},q=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=J({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=J({},n,{backgroundColor:null}),a};function G(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var Q=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),Y(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?q(e.theme,e.language):void 0;return t.themeDict=n})),Y(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=J({},G(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?J({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),Y(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},i=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(i))}})),Y(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=J({},G(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?J({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),Y(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,i=[],c=[i];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],d=n[l][o];if("string"==typeof d?(u=l>0?u:["plain"],s=d):(u=X(u,d.type),d.alias&&(u=X(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(K),m=p.length;i.push({types:u,content:p[0]});for(var f=1;f<m;f++)U(i),c.push(i=[]),i.push({types:u,content:p[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return U(i),c}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),$={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},ee="codeBlockContent_3z4W",te="codeBlock_6upA",ne="runButton_2gRE",re="codeBlockLines_xlV7",ae=function(e){var t=e.children,n=e.className,a=(0,r.useRef)(null),o=(0,r.useRef)(null),l=n&&n.replace(/language-/,""),i=(0,r.useState)(!1),c=i[0],s=i[1],u=r.createElement("button",{ref:o,type:"button",className:F()(ne),onClick:function(){c&&window.location.reload(),Function(a.current.innerText)(),s(!0)}},c?"Stop":"Run");return r.createElement(Q,(0,m.Z)({},V,{theme:$,code:t,language:l}),(function(e){return r.createElement("div",{className:ee},u,(n=(t=e).className,o=t.style,l=t.tokens,i=t.getLineProps,c=t.getTokenProps,r.createElement("div",{className:F()(n,te)},r.createElement("div",{ref:a,className:re,style:o},l.map((function(e,t){var n=i({line:e,key:t});return r.createElement("div",(0,m.Z)({key:t},n),e.map((function(e,t){return r.createElement("span",(0,m.Z)({key:t},c({token:e,key:t})))})))}))))));var t,n,o,l,i,c}))},oe=n(6159),le="details_1VDD";function ie(e){var t=Object.assign({},e);return r.createElement(s.PO,(0,m.Z)({},t,{className:(0,c.Z)("alert alert--info",le,t.className)}))}var ce={code:function(e){var t=e.children;return(0,r.isValidElement)(t)?t:t.includes("\n")?r.createElement(ae,e):r.createElement("code",e)},a:function(e){return r.createElement(v.Z,e)},pre:function(e){var t,n=e.children;return(0,r.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:r.createElement(ae,(0,r.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ie,(0,m.Z)({},e,{summary:n}),a)},h1:(0,oe.Z)("h1"),h2:(0,oe.Z)("h2"),h3:(0,oe.Z)("h3"),h4:(0,oe.Z)("h4"),h5:(0,oe.Z)("h5"),h6:(0,oe.Z)("h6")},se=n(4608),ue="backToTopButton_35hR",de="backToTopButtonShow_18ls";function pe(){var e=(0,r.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var me=function(){var e,t=pe(),n=t.smoothScrollTop,a=t.cancelScrollToTop,o=(0,r.useState)(!1),l=o[0],i=o[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var r=n<t.scrollY;if(r||a(),n<300)i(!1);else if(r){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&i(!0)}else i(!1)}}),[]),r.createElement("button",{className:(0,c.Z)("clean-btn",ue,(e={},e[de]=l,e)),type:"button",title:"Scroll to top",onClick:function(){return n()}},r.createElement("svg",{viewBox:"0 0 24 24",width:"28"},r.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},fe=n(5977),ye={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function he(e){var t,n,l,u=e.currentDocRoute,d=e.versionMetadata,p=e.children,m=(0,o.Z)().isClient,h=d.pluginId,v=d.version,b=u.sidebar,g=b?d.docsSidebars[b]:void 0,E=(0,r.useState)(!1),k=E[0],C=E[1],Z=(0,r.useState)(!1),_=Z[0],N=Z[1],O=(0,r.useCallback)((function(){_&&N(!1),C(!k)}),[_]);return r.createElement(i.Z,{key:m,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:v,tag:(0,s.os)(h,v)}},r.createElement("div",{className:ye.docPage},r.createElement(me,null),g&&r.createElement("aside",{className:(0,c.Z)(ye.docSidebarContainer,(t={},t[ye.docSidebarContainerHidden]=k,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ye.docSidebarContainer)&&k&&N(!0)}},r.createElement(H,{key:b,sidebar:g,path:u.path,onCollapse:O,isHidden:_}),_&&r.createElement("div",{className:ye.collapsedDocSidebar,title:(0,y.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:O,onClick:O},r.createElement(f,{className:ye.expandSidebarButtonIcon}))),r.createElement("main",{className:(0,c.Z)(ye.docMainContainer,(n={},n[ye.docMainContainerEnhanced]=k||!g,n))},r.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",ye.docItemWrapper,(l={},l[ye.docItemWrapperEnhanced]=k,l))},r.createElement(a.Zo,{components:ce},p)))))}var ve=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return(0,fe.LX)(a.pathname,e)}));return o?r.createElement(he,{currentDocRoute:o,versionMetadata:n},(0,l.Z)(t,{versionMetadata:n})):r.createElement(se.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return d},Z:function(){return p}});var r=n(3366),a=n(7462),o=n(7294),l=n(6010),i=n(4973),c=n(4011),s="enhancedAnchor_2LWZ",u="h1Heading_27L5",d=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,a.Z)({},t,{id:void 0,className:u}),t.children))},p=function(e){return"h1"===e?d:(t=e,function(e){var n,a=e.id,u=(0,r.Z)(e,["id"]),d=(0,c.LU)().navbar.hideOnScroll;return a?o.createElement(t,u,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,l.Z)("anchor",(n={},n[s]=!d,n)),id:a}),u.children,o.createElement("a",{className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,u)});var t}},4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=a.apply(null,n);l&&e.push(l)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);