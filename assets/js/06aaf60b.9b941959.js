"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4930],{3905:function(n,e,t){t.d(e,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),i=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},l=function(n){var e=i(n.components);return r.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,l=p(n,["components","mdxType","originalType","parentName"]),m=i(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return t?r.createElement(d,c(c({ref:e},l),{},{components:t})):r.createElement(d,c({ref:e},l))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,c=new Array(a);c[0]=m;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=n,p.mdxType="string"==typeof n?n:o,c[1]=p;for(var i=2;i<a;i++)c[i]=t[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},868:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c={title:"Canon (Elm v2)"},p=void 0,s={unversionedId:"examples/canon-elm2",id:"examples/canon-elm2",isDocsHomePage:!1,title:"Canon (Elm v2)",description:"`js",source:"@site/docs/examples/canon-elm2.md",sourceDirName:"examples",slug:"/examples/canon-elm2",permalink:"/generative-music-with-javascript/examples/canon-elm2",tags:[],version:"current",frontMatter:{title:"Canon (Elm v2)"}},i=[],l={toc:i};function u(n){var e=n.components,t=(0,o.Z)(n,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { app, sampler, pattern, music } = tuplet\nconst { c4, d4, e4, f4, g4, c5, rest } = music.pitches\nconst { wn, qn, den, sn, hn, ent } = music.durations\n\nconst model = async () => {\n  const notes = [\n    [c4, qn],\n    [c4, qn],\n    [c4, den],\n    [d4, sn],\n    [e4, qn],\n\n    [e4, den],\n    [d4, sn],\n    [e4, den],\n    [f4, sn],\n    [g4, hn],\n\n    [c5, ent],\n    [c5, ent],\n    [c5, ent],\n    [g4, ent],\n    [g4, ent],\n    [g4, ent],\n    [e4, ent],\n    [e4, ent],\n    [e4, ent],\n    [c4, ent],\n    [c4, ent],\n    [c4, ent],\n\n    [g4, den],\n    [f4, sn],\n    [e4, den],\n    [d4, sn],\n    [c4, hn],\n  ]\n\n  return {\n    bpm: 60.0,\n    parts: {\n      piano: pattern(notes).loop(),\n      trumpet: pattern(notes).transpose(12).loop(),\n      bass: pattern(notes).transpose(-12).loop(),\n    },\n  }\n}\n\nconst update = async () => {\n  return (model, time) => {\n    model.now = time.now\n    return model\n  }\n}\n\nconst view = async () => {\n  const $piano = await sampler('piano')\n\n  return (model) => {\n    const { parts, now } = model\n    const { piano, trumpet, bass } = parts\n    $piano.play(piano.at(now))\n    // TODO: play when time.beat = x\n    $piano.play(trumpet.at(now))\n    $piano.play(bass.at(now))\n  }\n}\n\napp(model, update, view)\n")))}u.isMDXComponent=!0}}]);