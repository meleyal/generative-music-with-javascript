"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[584],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),f=a,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,s(s({ref:n},c),{},{components:t})):r.createElement(d,s({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2462:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s={title:"Phrases"},i=void 0,p={unversionedId:"music/phrases",id:"music/phrases",isDocsHomePage:!1,title:"Phrases",description:"At it's most basic, we could represent a pattern as an array of notes:",source:"@site/book/music/phrases.md",sourceDirName:"music",slug:"/music/phrases",permalink:"/generative-music-with-javascript/book/music/phrases",version:"current",frontMatter:{title:"Phrases"}},l=[{value:"Rings",id:"rings",children:[]},{value:"Resolution",id:"resolution",children:[]},{value:"Transforms",id:"transforms",children:[]},{value:"Generators",id:"generators",children:[]}],c={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At it's most basic, we could represent a pattern as an array of notes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const pattern = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']\n")),(0,o.kt)("p",null,"##\xa0Steps"),(0,o.kt)("p",null,"To step through the pattern, we just need a counter to keep track of the current\nstep and use that as an index into the pattern array, then wrap around back to\nthe start when it reaches the last step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const pattern = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']\n\nlet step = 0\n\nsetInterval(() => {\n  console.log(`s${step} : ${pattern[step]}`)\n\n  if (step < pattern.length - 1) {\n    step += 1\n  } else {\n    step = 0\n  }\n}, 1000)\n")),(0,o.kt)("p",null,"Recall that we already have our ",(0,o.kt)("inlineCode",{parentName:"p"},"metronome()")," function. Rather than keeping\ntrack of the step ourselves, can we use metronome to update the step? Recall\nthat our metronome simply counts beats upwards from 0. It has no concept of\npattern length, so it would work for the first 16 beats then continue past the\nend of the pattern."),(0,o.kt)("p",null,"We could extend our metronome to tick in units of 8, 16 etc. but this would be\nlimiting as it would prevent combining patterns of different lengths."),(0,o.kt)("p",null,"It would be nice if we could pass our pattern our incrementing beat, and our\npattern would just know when it needed to loop back around. Enter rings!"),(0,o.kt)("h2",{id:"rings"},"Rings"),(0,o.kt)("p",null,"Rings (or ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Circular_buffer"},"ring buffers"),") are a\nspecial type of array where the values 'loop'. With a regular array, accessing\nan element that's out of range returns undefined. Accessing an element beyond\nthe end of a ringed array 'wraps around' to give you back the element at the\nequivalent index from the start of the array. Another way to think about it is\nthat the ringed array repeats itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const array = ['A4', 'B4', 'C4']\narray[1] // => B4\narray[4] // => undefined\n\nconst fakeRing = ['A4', 'B4', 'C4'].concat(['A4', 'B4', 'C4'])\nfakeRing[1] // => B4\nfakeRing[4] // => B4\n")),(0,o.kt)("p",null,"We can make our own ",(0,o.kt)("inlineCode",{parentName:"p"},"ring()")," function that takes a regular array and returns a\nfunction we can use to access the array like a ring:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const ring = (arr) => {\n  const len = arr.length\n\n  return (index) => {\n    if (typeof index !== 'undefined') {\n      return arr[index % len]\n    } else {\n      return arr\n    }\n  }\n}\n\nconst r = ring(['A4', 'B4', 'C4'])\n\nr(0) == r(3) // => true\nr(1) == r(4) // => true\nr(2) == r(5) // => true\n")),(0,o.kt)("p",null,"We can now plug our newly ringed pattern into our metronome and it will loop\nback around:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { metronome, ring } = tuplet\n\nconst pattern = ring(['A4', 'B4', 'C4', 'D4'])\nconst metro = metronome(60)\n\nmetro.on('tick', (tick) => {\n  pattern(tick) // => A4, B4, C4, D4, A4, B4...\n})\n\nmetro.start()\n")),(0,o.kt)("h2",{id:"resolution"},"Resolution"),(0,o.kt)("p",null,"Resolution defines how fast a pattern plays back, relative to the current bpm,\ngiving you a way to control the speed of a pattern without altering the overall\nspeed of the music. This is useful to hear how a pattern sounds at double speed,\nhalf speed, or any resolution the sequencer supports."),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"metronome()")," function already supports different resolutions. We can use\nthis to sequence two patterns at different speeds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { sampler, metronome, ring } = tuplet\n\n;(async () => {\n  const piano = await sampler('piano')\n  const metro = metronome(60)\n  const pattern1 = ring(['A4', 'B4', 'C4', 'D4'])\n  const pattern2 = ring(['E4', 'F4', 'G4', 'A4'])\n\n  metro.on('tick', (tick) => {\n    piano(pattern1(tick)) // => A4, B4, C4, D4, A4, B4...\n  })\n\n  metro.on('tick/16', (tick) => {\n    piano(pattern2(tick)) // => E4, F4, G4, A4, E4, F4...\n  })\n\n  metro.start()\n\n  // => A4, E4, F4, G4, A4, B4, E4, F4, G4, A4, C4, E4, F4...\n})()\n")),(0,o.kt)("h2",{id:"transforms"},"Transforms"),(0,o.kt)("p",null,"Being that our pattern is just an array, it's easy to copy and alter it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const pattern = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']\n\nconst pattern2 = pattern.slice(4, 8).reverse()\n\npattern2 // => ['C5', 'B4', 'A4', 'G4']\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TODO: Expand: See Sequencing chapter.")),(0,o.kt)("h2",{id:"generators"},"Generators"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TODO: Research if Generator functions would be useful here.")),(0,o.kt)("p",null,"It would be nice if we could avoid writing out all of our patterns by hand. This\nis a book on generative music after all! For this purpose, we'll introduce the\nconcept of \"generators\". In this context, a generator is just a name we'll give\nto something that produces a pattern (not to be confused with\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*"},"JavaScript generator functions"),")."),(0,o.kt)("p",null,"Let's start simple and just generate a random sequence of notes from the C major\nscale. As we progress through the book, we'll explore more interesting ways of\ngenerating patterns."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const {\n  sampler,\n  metronome,\n  music,\n  util,\n  pipe,\n  scale,\n  limit,\n  ring,\n  transpose,\n  take,\n  shuffle,\n} = tuplet\n\n;(async () => {\n  const piano = await sampler('piano')\n  const metro = metronome(120)\n\n  const pattern1 = pipe(scale('cmaj'), limit('piano'), shuffle(), take(8))([])\n\n  const pattern2 = pipe(transpose(-5))(pattern1)\n\n  const ring1 = ring(pattern1)\n  const ring2 = ring(pattern2)\n\n  metro.on('tick', (tick) => {\n    piano(ring1(tick))\n    piano(ring2(tick))\n  })\n\n  metro.start()\n})()\n")))}u.isMDXComponent=!0}}]);