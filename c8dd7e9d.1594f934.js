(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(1),a=(n(0),n(141));const i={title:"Introduction"},o={id:"introduction",title:"Introduction",description:"> Nature, music, and number are all somehow intertwined ... one can be",source:"@site/book/introduction.md",permalink:"/book/introduction",sidebar:"main",next:{title:"Generative",permalink:"/book/primers/generative"}},c=[{value:"Principles",id:"principles",children:[]},{value:"Structure",id:"structure",children:[{value:"Primers",id:"primers",children:[]},{value:"Music",id:"music",children:[]},{value:"Generative",id:"generative",children:[]}]},{value:"Code Examples",id:"code-examples",children:[]},{value:"Tuplet Library",id:"tuplet-library",children:[]},{value:"Prior Art",id:"prior-art",children:[]}],l={rightToc:c};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Nature, music, and number are all somehow intertwined ... one can be\ntransformed into another."),Object(a.b)("p",{parentName:"blockquote"},"\u2013\xa0",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://www.amazon.com/dp/1439867917"}),"Making Music with Computers"),", Bill\nManaris and Andrew R. Brown"))),Object(a.b)("p",null,"This book is a ",Object(a.b)("mark",null,"work in progress")," guide to creating generative music\nwith JavaScript."),Object(a.b)("p",null,"There already exist\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ciconia/awesome-music/blob/master/README.md#music-programming"}),"many ways"),'\nto make generative music, but this book is about learning how to create\nsomething from scratch using JavaScript and the Web Audio API. We can fairly\neasily write a program to generate noise, and with a little work even something\nthat sounds vaguely like music, but can we design systems that produce something\nthat approaches the qualities of "real" music? Let\'s find out!'),Object(a.b)("h2",{id:"principles"},"Principles"),Object(a.b)("p",null,"To help us focus, the book has a few guiding principles:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Fun over rigour:")," We'll take inspiration from science and nature, but also\ntake some artistic license along the way.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Composition over sound design:")," The focus will be on creating musical\nstructures, with sound generation delegated to instrument samples.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Systems over performance:")," We're aiming for music that is self evolving and\nrequires no interaction from us or the listener (i.e.\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Generative_music#Creative/procedural"}),"procedural music"),"\nin contrast with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Live_coding"}),"live coding"),").")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Simple building blocks:")," We'll build things from the ground up. As we go\nwe'll encapsulate our learning into a set of modules we can plug together to\nmake more sophisticated music."))),Object(a.b)("h2",{id:"structure"},"Structure"),Object(a.b)("h3",{id:"primers"},"Primers"),Object(a.b)("p",null,"To help us get started, the book begins with short primers on each of its three\nsubjects:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"primers/generative"}),Object(a.b)("strong",{parentName:"a"},"Generative:")),' Here we define what we mean by\n"generative", and cover how generative processes can be applied to creating\nart and music')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"primers/music"}),Object(a.b)("strong",{parentName:"a"},"Music:"))," Here we explain the building blocks of music:\nmelody, harmony and rhythm.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"primers/javascript"}),Object(a.b)("strong",{parentName:"a"},"JavaScript:"))," Here we cover modern JavaScript, and\nintroduce the Web Audio API."))),Object(a.b)("h3",{id:"music"},"Music"),Object(a.b)("p",null,"Next, we move on to programming the basic building blocks of music:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Notes"),Object(a.b)("li",{parentName:"ul"},"Scales"),Object(a.b)("li",{parentName:"ul"},"Timing"),Object(a.b)("li",{parentName:"ul"},"Sequencing")),Object(a.b)("h3",{id:"generative"},"Generative"),Object(a.b)("p",null,"Finally, we go on to develop systems that create music based on different\ngenerative ideas:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"TODO: List chapters")),Object(a.b)("h2",{id:"code-examples"},"Code Examples"),Object(a.b)("p",null,"All the code examples in this book are runnable. You should be able to hear the\nresults (or see them in the console) when hitting the ",Object(a.b)("inlineCode",{parentName:"p"},"Run")," bottom in the\nbottom-right corner of each code snippet."),Object(a.b)("p",null,"To avoid repeating big chunks of code we've already seen, once a concept has\nbeen introduced, we'll import relevant functions from the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@meleyal/tuplet"}),"Tuplet")," library (it's present on\nevery page as the ",Object(a.b)("inlineCode",{parentName:"p"},"tuplet")," global). The actual implementation might differ from the\npresented examples as the library evolves, but the principles should remain\nsimilar."),Object(a.b)("h2",{id:"tuplet-library"},"Tuplet Library"),Object(a.b)("p",null,"A lot of the ideas here are encapsulated in the Tuplet library. If you want to\nskip over how things are implemented and just make music, we'll cross-reference\neach of the code examples with their Tuplet counterpart. The full list of\navailable functions can be found in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"api/index"}),"API Reference"),"."),Object(a.b)("h2",{id:"prior-art"},"Prior Art"),Object(a.b)("p",null,"This book and the design of Tuplet take inspiration from the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://natureofcode.com/"}),"The Nature of Code")," \u2013 simulations of natural\nsystems."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/overtone/overtone"}),"Overtone")," \u2013\xa0collaborative programmable\nmusic."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://sonic-pi.net/"}),"Sonic Pi")," \u2013\xa0a code-based music creation and\nperformance tool."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://tonejs.github.io/"}),"Tone.js")," \u2013\xa0a framework for creating interactive\nmusic in the browser."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://explodingart.com/jmusic/jmDocumentation/index.html"}),"jMusic"),"\xa0\u2013 music\ncomposition in Java.")))}b.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return n?a.a.createElement(d,c({ref:t},b,{components:n})):a.a.createElement(d,c({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);