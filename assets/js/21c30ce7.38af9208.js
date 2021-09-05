"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1039],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,d=u["".concat(p,".").concat(f)]||u[f]||s[f]||o;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a={title:"Twinkle"},c=void 0,p={unversionedId:"examples/twinkle",id:"examples/twinkle",isDocsHomePage:!1,title:"Twinkle",description:"`js",source:"@site/docs/examples/twinkle.md",sourceDirName:"examples",slug:"/examples/twinkle",permalink:"/generative-music-with-javascript/examples/twinkle",tags:[],version:"current",frontMatter:{title:"Twinkle"}},l=[],m={toc:l};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},";(async () => {\n  const { metronome, sampler, pattern, plugins } = tuplet\n  const { magenta } = plugins\n\n  TWINKLE_TWINKLE = {\n    notes: [\n      { pitch: 60, startTime: 0.0, endTime: 0.5 },\n      { pitch: 60, startTime: 0.5, endTime: 1.0 },\n      { pitch: 67, startTime: 1.0, endTime: 1.5 },\n      { pitch: 67, startTime: 1.5, endTime: 2.0 },\n      { pitch: 69, startTime: 2.0, endTime: 2.5 },\n      { pitch: 69, startTime: 2.5, endTime: 3.0 },\n      { pitch: 67, startTime: 3.0, endTime: 4.0 },\n      { pitch: 65, startTime: 4.0, endTime: 4.5 },\n      { pitch: 65, startTime: 4.5, endTime: 5.0 },\n      { pitch: 64, startTime: 5.0, endTime: 5.5 },\n      { pitch: 64, startTime: 5.5, endTime: 6.0 },\n      { pitch: 62, startTime: 6.0, endTime: 6.5 },\n      { pitch: 62, startTime: 6.5, endTime: 7.0 },\n      { pitch: 60, startTime: 7.0, endTime: 8.0 },\n    ],\n    totalTime: 8,\n  }\n\n  pattern.use(magenta)\n\n  const piano1 = await sampler('piano')\n  const piano2 = await sampler('piano')\n\n  const twinkle = await pattern.from(TWINKLE_TWINKLE)\n  const continued1 = await twinkle.continue({ loop: true })\n  const continued2 = await twinkle.continue({ loop: true })\n  // const combined = pattern.concat([twinkle, continued], { loop: true })\n  const metro = metronome({ bpm: 60 })\n\n  // console.log(melody.fold())\n\n  metro.on('tick', (time) => {\n    piano1.play(continued1.at(time))\n    piano2.play(continued2.at(time))\n  })\n\n  metro.start()\n})()\n")))}s.isMDXComponent=!0}}]);