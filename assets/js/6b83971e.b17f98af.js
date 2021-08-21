"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[529],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var i=r.createContext({}),p=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},u=function(n){var e=p(n.components);return r.createElement(i.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,i=n.parentName,u=s(n,["components","mdxType","originalType","parentName"]),f=p(t),m=o,v=f["".concat(i,".").concat(m)]||f[m]||l[m]||a;return t?r.createElement(v,c(c({ref:e},u),{},{components:t})):r.createElement(v,c({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,c=new Array(a);c[0]=f;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s.mdxType="string"==typeof n?n:o,c[1]=s;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4285:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c={title:"Canon"},s=void 0,i={unversionedId:"examples/canon",id:"examples/canon",isDocsHomePage:!1,title:"Canon",description:"`js",source:"@site/book/examples/canon.md",sourceDirName:"examples",slug:"/examples/canon",permalink:"/generative-music-with-javascript/book/examples/canon",version:"current",frontMatter:{title:"Canon"},sidebar:"main",previous:{title:"Sonification",permalink:"/generative-music-with-javascript/book/generative/sonification"},next:{title:"Course Outline",permalink:"/generative-music-with-javascript/book/course/outline"}},p=[],u={toc:p};function l(n){var e=n.components,t=(0,o.Z)(n,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * \"Row Your Boat\"\n *\n * Adapted from https://git.io/fjyri\n */\n\nconst { createEnv, fx, inst, seq, music } = tuplet\nconst { c4, d4, e4, f4, g4, c5, rest } = music.pitches\nconst { wn, qn, den, sn, hn, ent } = music.durations\n\n;(async () => {\n  const rests = [[rest, wn]]\n\n  const notes = [\n    [c4, qn],\n    [c4, qn],\n    [c4, den],\n    [d4, sn],\n    [e4, qn],\n\n    [e4, den],\n    [d4, sn],\n    [e4, den],\n    [f4, sn],\n    [g4, hn],\n\n    [c5, ent],\n    [c5, ent],\n    [c5, ent],\n    [g4, ent],\n    [g4, ent],\n    [g4, ent],\n    [e4, ent],\n    [e4, ent],\n    [e4, ent],\n    [c4, ent],\n    [c4, ent],\n    [c4, ent],\n\n    [g4, den],\n    [f4, sn],\n    [e4, den],\n    [d4, sn],\n    [c4, hn],\n  ]\n\n  const bpm = 90.0\n  const env = createEnv()\n\n  // env.connect(await fx.compressor(env), await fx.reverb(env), env.master)\n\n  const piano = await inst.sampler(env, 'piano')\n\n  const theme = seq(notes).repeat(2).quantize(bpm)\n\n  const res1 = seq\n    .concat(seq(rests), seq(notes).repeat(2).transpose(12))\n    .quantize(bpm)\n\n  const res2 = seq\n    .concat(seq(rests).repeat(2), seq(notes).repeat(2).transpose(-12))\n    .quantize(bpm)\n\n  seq.play(theme, piano)\n  seq.play(res1, piano)\n  seq.play(res2, piano)\n})()\n")))}l.isMDXComponent=!0}}]);