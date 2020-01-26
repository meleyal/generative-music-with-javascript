(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),i=(n(0),n(127)),o={title:"Introduction"},c={id:"introduction",title:"Introduction",description:"> Nature, music, and number are all somehow intertwined ... one can be",source:"@site/docs/introduction.md",permalink:"/gen/docs/introduction",lastUpdatedAt:1579999538,sidebar:"main",next:{title:"Generative",permalink:"/gen/docs/primers/generative"}},l=[{value:"Principles",id:"principles",children:[]},{value:"Structure",id:"structure",children:[{value:"Primers",id:"primers",children:[]},{value:"Music",id:"music",children:[]},{value:"Generative",id:"generative",children:[]}]},{value:"Code Examples",id:"code-examples",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Nature, music, and number are all somehow intertwined ... one can be\ntransformed into another."),Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://www.amazon.com/dp/1439867917"}),"Making Music with Computers"),", Bill\nManaris and Andrew R. Brown"))),Object(i.b)("p",null,"This book is a ",Object(i.b)("mark",null,"work in progress")," guide to creating generative music\nwith JavaScript."),Object(i.b)("p",null,"There already exist\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ciconia/awesome-music/blob/master/README.md#music-programming"}),"many ways"),'\nto make generative music, but this book is about learning how to create\nsomething from scratch using JavaScript and the Web Audio API. We can fairly\neasily write a program to generate noise, and with a little work even something\nthat sounds vaguely like music, but can we design systems that produce something\nthat approaches the qualities of "real" music? Let\'s find out!'),Object(i.b)("h2",{id:"principles"},"Principles"),Object(i.b)("p",null,"To help us focus, the book has a few guiding principles:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Fun over rigour:")," We'll take inspiration from science and nature, but also\ntake some artistic license along the way.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Composition over sound design:")," The focus will be on creating musical\nstructures, with sound generation delegated to instrument samples.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Systems over performance:")," We're aiming for music that is self evolving and\nrequires no interaction from us or the listener (i.e.\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Generative_music#Creative/procedural"}),"procedural music"),"\nin contrast with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Live_coding"}),"live coding"),").")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Simple building blocks:")," We'll build things from the ground up. As we go\nwe'll encapsulate our learning into a set of modules we can plug together to\nmake more sophisticated music."))),Object(i.b)("h2",{id:"structure"},"Structure"),Object(i.b)("h3",{id:"primers"},"Primers"),Object(i.b)("p",null,"To help us get started, the book begins with short primers on each of its three\nsubjects:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"primers/generative"}),Object(i.b)("strong",{parentName:"a"},"Generative:")),' Here we define what we mean by\n"generative", and cover how generative processes can be applied to creating\nart and music')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"primers/music"}),Object(i.b)("strong",{parentName:"a"},"Music:"))," Here we explain the building blocks of music:\nmelody, harmony and rhythm.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"primers/javascript"}),Object(i.b)("strong",{parentName:"a"},"JavaScript:"))," Here we cover modern JavaScript, and\nintroduce the Web Audio API."))),Object(i.b)("h3",{id:"music"},"Music"),Object(i.b)("p",null,"Next, we move on to programming the basic building blocks of music:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Notes"),Object(i.b)("li",{parentName:"ul"},"Scales"),Object(i.b)("li",{parentName:"ul"},"Timing"),Object(i.b)("li",{parentName:"ul"},"Sequencing")),Object(i.b)("h3",{id:"generative"},"Generative"),Object(i.b)("p",null,"Finally, we go on to develop systems that create music based on different\ngenerative ideas:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"TODO: List chapters")),Object(i.b)("h2",{id:"code-examples"},"Code Examples"),Object(i.b)("p",null,"All the code examples in this book are runnable. You should be able to hear the\nresults (or see them in the console) when hitting the ",Object(i.b)("inlineCode",{parentName:"p"},"Run")," bottom in the\nbottom-right corner of each code snippet."),Object(i.b)("p",null,"To avoid repeating big chunks of code we've already seen, once a concept has\nbeen introduced, we'll import relevant functions from the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@meleyal/gen"}),"Gen.js")," library (it's present on\nevery page as the ",Object(i.b)("inlineCode",{parentName:"p"},"gen")," global). The actual implementation might differ from the\npresented examples as the library evolves, but the principles should remain\nsimilar."),Object(i.b)("p",null,"##\xa0Gen.js Library"),Object(i.b)("p",null,"A lot of the ideas are encapsulated in the Gen.js library. If you want to skip\nover how things are implemented and just make music, we'll cross-reference each\nof the code examples with their Gen.js counterpart. The full list of available\nfunctions can be found in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"api/index"}),"API Reference"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://explodingart.com/jmusic/jmDocumentation/index.html"}),"https://explodingart.com/jmusic/jmDocumentation/index.html")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/overtone/overtone"}),"https://github.com/overtone/overtone")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://sonic-pi.net/"}),"https://sonic-pi.net/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://tonejs.github.io/"}),"https://tonejs.github.io/"))))}s.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?a.a.createElement(d,c({ref:t},b,{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);