"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[172],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,d=u["".concat(c,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],s={title:"Generative"},c=void 0,l={unversionedId:"primers/generative",id:"primers/generative",title:"Generative",description:"I make art about what confuses me.",source:"@site/docs/primers/generative.md",sourceDirName:"primers",slug:"/primers/generative",permalink:"/generative-music-with-javascript/primers/generative",tags:[],version:"current",frontMatter:{title:"Generative"},sidebar:"main",previous:{title:"Introduction",permalink:"/generative-music-with-javascript/introduction"},next:{title:"Music",permalink:"/generative-music-with-javascript/primers/music"}},m=[{value:"Definition",id:"definition",children:[],level:2},{value:"Concepts",id:"concepts",children:[{value:"Creativity",id:"creativity",children:[],level:3},{value:"Process",id:"process",children:[],level:3},{value:"Music",id:"music",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],p={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I make art about what confuses me."),(0,r.kt)("p",{parentName:"blockquote"},"\u2013 ",(0,r.kt)("a",{parentName:"p",href:"https://lauren-mccarthy.com/"},"Lauren McCarthy"))),(0,r.kt)("p",null,'In this chapter, we\'ll attempt to pin down what we mean by the elusive term\n"generative", and what it means in the context of creating music.'),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,'We probably have an intuitive sense of what "generative" means, which we might\nloosely define as "a process or system that produces something." We can refine\nthis further with a trip to the dictionary:'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Generative")," \u2013\xa0Having the power of generating, originating, producing, or\nreproducing."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.merriam-webster.com/dictionary/generative"},"\u2013 Merriam Webster Dictionary"))),(0,r.kt)("p",null,'This suggests that something "generative" is able to create things, possibly\nwith some degree of autonomy. The "things" produced may be copies, versions, or\nsomething entirely new.'),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"IMG")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Process producing something"))),(0,r.kt)("p",null,"In the context of this book, we can be more specific and say that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"Generative" is shorthand for ',(0,r.kt)("em",{parentName:"p"},"generative system"),", a process that generates a\nresult.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Our generative system will be a computer program, written in JavaScript, that\nruns in a web browser.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The result (or output) of our system will be music, and we're primarily\ninterested in originating ",(0,r.kt)("em",{parentName:"p"},"new")," music."))),(0,r.kt)("p",null,'With these in mind, our working definition of "generative" expands to:'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Generative music system")," \u2013 A program that creates new music.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"IMG")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Code in browser producing music"))),(0,r.kt)("p",null,"As a side note, it's worth mentioning that you may also hear the terms\n",(0,r.kt)("em",{parentName:"p"},"algorithmic music"),", or ",(0,r.kt)("em",{parentName:"p"},"procedural music"),". These are essentially the same\nthing. Generative music is preferred here as it emphasises ",(0,r.kt)("em",{parentName:"p"},"what")," is happening\nrather than ",(0,r.kt)("em",{parentName:"p"},"how")," it's implemented."),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"With this definition in hand, let's examine some of the concepts it encapsulates\nin more detail."),(0,r.kt)("h3",{id:"creativity"},"Creativity"),(0,r.kt)("p",null,"Creativity is obviously a key ingredient in making any kind of art. In the\ncontext of generative art, the creative process is a collaboration between\nyourself and the computer. We play both the creator, defining the rules of the\ngame, and the curator, evaluating the result."),(0,r.kt)("p",null,'Unlike most programming tasks, there are no real "correct" answers here. We\'re\nconstantly evaluating and making choices about the results, and tweaking the\nprogram to nudge it closer to what we desire, or confound it to produce\nsomething unexpected.'),(0,r.kt)("p",null,'One way to think about this is the idea of exploring a "possiblity space".\nWithout any rules, the possiblities are infinite (i.e. chaos). By defining rules\nand heuristics, we can constrain and expore this space. In the time it takes us\nto draw a single circle, the computer can draw many millions. In this way, the\ncomputer can "explore" the possiblity space much more quickly, guided by our\nselection / curation in a continuous feedback loop.'),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"IMG")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Infinity vs. contrained space"))),(0,r.kt)("p",null,"Exploring is a worthy goal in and of itself, but part of our process might be to\ntry and express the internal logic of our programs, or the data we're working\nwith, making it possible to understand or connect with on a deeper level. How we\nevaluate our work is entirely up to us. Is the process important, or just the\nresult?"),(0,r.kt)("p",null,"This interplay is both the draw and the value of generative art, exploring the\nunknown, and hopefully finding something illuminating along the way."),(0,r.kt)("h3",{id:"process"},"Process"),(0,r.kt)("p",null,"A generative system implies some kind of driving process."),(0,r.kt)("p",null,"In an ideal (or dystopian?) world, we could click a button and the computer\nwould generate our desired outcome, or some unkown outcome that surprises or\ndelights us."),(0,r.kt)("p",null,"In the real world, we need to give computers explicit instructions to tell them\nwhat to create (machine learning is changing this somewhat, but we're getting\nahead of ourselves!) These procedures are known as ",(0,r.kt)("em",{parentName:"p"},"algorithms"),", a sequence of\nsteps for the computer to perform, similar to a cooking recipe."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"IMG")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Algorithm"))),(0,r.kt)("p",null,"As we write our program, we can define ",(0,r.kt)("em",{parentName:"p"},"variables")," that influence how the\nprogram behaves (e.g. the likelihood of performing a given step). These\nvariables give us a set of values we can tweak to influence the output of our\nprogram."),(0,r.kt)("p",null,"The rules and values we choose define our system. We may choose intuitively, use\na rigorous set of mathematical rules, or model an existing system such as those\nfound in nature (memesis / biomimicry). We may define a starting state, run our\nprogram, and see what emerges. Or we may specify a desired outcome, and task our\nprogram with creating solutions to achieve that outcome."),(0,r.kt)("p",null,"In programming, we usually aim to solve a problem in the most precise,\neffecient, and reproducible way. In a generative system, on the other hand, it\ncan be helpful to think of it as a more organic process. How can we inject\nchance, autonomy, or interactions to breath life into our programs? This need\nnot seem daunting, as we'll see, simple rules can produce surprising complexity."),(0,r.kt)("h3",{id:"music"},"Music"),(0,r.kt)("p",null,"The output of a generative music system can take many forms, but generally\ndepends on if we're working at the \"sample\" or \"note\" level. At the sample\nlevel, we're dealing with sound itself: signals, frequencies, and actual audio\nwaveforms. At the note level, we're concerned more with structure, composition,\nand symbolic representations of music (e.g. MIDI). We can of course combine\nthese approaches and they often overlap, but it's a useful distinction to think\nin terms of music at the micro or macro level."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"IMG")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Audio vs. notes"))),(0,r.kt)("p",null,"The use of generative / algorithmic processes in music (and art generally) is\nnothing new. As far back as the\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Micrologus"},"Micrologus")," in 1026, people have used\nrule-based systems to aid in the composition process. More recently, movements\nsuch as Serialism, Minimalism, and Stochastic music have explored new ground\nwith similar techniques."),(0,r.kt)("p",null,"Music could itself be seen as a generative process, with the score as the\nalgorithm, and the interpretation and skill of the performer as variables. Less\nrestrictive rules such as those of jazz or improv provide more freedom for\nexploration and self expression."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"IMG")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Bach vs. Cardew"))),(0,r.kt)("p",null,'The rules of what constitutes "music" are constantly evolving. While there are\nwell-established conventions for how music is constructed (which we\'ll cover in\nthe next chapter), they should be seen as just that, rules we can accept,\nsubvert, or reject in pursuit of something that sounds like music to us.'),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Hopefully this chapter has given you a feel for what a generative system is, and\nhow it might be applied to music. In the next chapter, we'll take a tour of\nmusic theory to understand the building blocks and how they combine to form\nmusical works."),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Generative_systems"},"Generative Systems - Wikipedia")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://natureofcode.com/"},"The Nature of Code \u2013\xa0Daniel Shiffman")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.artnome.com/news/2018/8/8/why-love-generative-art"},"Why Love Generative Art? \u2013 Artnome")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.springer.com/gp/book/9783211755396"},"Algorithmic Composition \u2013\xa0Gerhard Nierhaus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mdpi.com/books/pdfview/selection/3013"},"The Machine as Art/ The Machine as Artist")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.amazon.co.uk/Artist-Machine-World-AI-Powered-Creativity-ebook/dp/B08BSZQ2SX"},"The Artist in the Machine"))))}u.isMDXComponent=!0}}]);