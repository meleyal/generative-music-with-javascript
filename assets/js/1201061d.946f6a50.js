"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[862],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var i=2;i<o;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1807:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),c={title:"Scratchpad"},p=void 0,s={unversionedId:"examples/scratchpad",id:"examples/scratchpad",isDocsHomePage:!1,title:"Scratchpad",description:"`js",source:"@site/book/examples/scratchpad.md",sourceDirName:"examples",slug:"/examples/scratchpad",permalink:"/generative-music-with-javascript/book/examples/scratchpad",version:"current",frontMatter:{title:"Scratchpad"}},i=[],l={toc:i};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const score = new Tuplet()\n\nconst melody1 = {\n  pitches: [A0, A0, A1, A1],\n  durations: [QN, QN, QN, QN],\n}\n\nconst melody2 = {\n  pitches: [B0, B0, B1, B1],\n  durations: [QN, QN, QN, QN],\n}\n\nconst piano = score\n  .part('piano')\n  .phrase('melody1', melody1)\n  .phrase('melody2', melody2)\n\nscore.on('bar:1', (req, res) => {\n  piano.phrase('melody1').play()\n})\n\nscore.on('bar:5', (req, res) => {\n  piano.phrase('melody2').reverse().play()\n})\n\nscore.every('bar', (req, res) => {\n  piano.phrase('melody2').reverse().play()\n})\n\nscore.play(108)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const app = tuplet()\n\nconst pitches = [A0, A0, A1, A1]\nconst durations = [QN, QN, QN, QN]\n\nconst piano = app.part('piano').add(pitches, durations)\n\napp.beat(1, (req, res) => {\n  piano.play().repeat(2)\n})\n\napp.play(108)\napp.stop()\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Score, Part, Phrase, pitches, durations } = tuplet\nconst { A0, A1 } = pitches\nconst { QN } = durations\n\nconst score = new Score(108)\n\nconst piano = new Part('piano')\n\nconst pitches1 = [A0, A0, A1, A1]\nconst durations1 = [QN, QN, QN, QN]\n\nconst theme = new Phrase().add(pitches1, durations1).startAt(0).repeat(2)\n\npiano.add(theme)\n\nscore.add(piano).play()\n")))}u.isMDXComponent=!0}}]);