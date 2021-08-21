"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[110],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,y=f["".concat(p,".").concat(m)]||f[m]||l[m]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},153:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i={title:"Phasing"},c=void 0,p={unversionedId:"examples/phasing",id:"examples/phasing",isDocsHomePage:!1,title:"Phasing",description:"`js",source:"@site/book/examples/phasing.md",sourceDirName:"examples",slug:"/examples/phasing",permalink:"/generative-music-with-javascript/book/examples/phasing",version:"current",frontMatter:{title:"Phasing"}},s=[],u={toc:s};function l(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \"Piano Phase\" by Steve Reich\n\nconst { sampler, metronome, pattern } = tuplet\n\n;(async () => {\n  const piano1 = await sampler('piano')\n  const piano2 = await sampler('piano')\n  const metro = metronome(80)\n\n  const notes = pattern([\n    'E4',\n    'F#4',\n    'B4',\n    'C#5',\n    'D5',\n    'F#4',\n    'E4',\n    'C#5',\n    'B4',\n    'F#4',\n    'D5',\n    'C#5',\n  ]).ring()\n\n  let phase = 0\n\n  metro\n    .on('tick/16', (tick, now) => {\n      const note = notes(tick)\n      piano1(note, { start: now })\n      piano2(note, { start: now + phase })\n      phase += 0.0009\n    })\n    .start()\n})()\n")))}l.isMDXComponent=!0}}]);