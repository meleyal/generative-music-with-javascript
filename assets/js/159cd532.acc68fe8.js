"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[788],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,g=f["".concat(s,".").concat(m)]||f[m]||l[m]||c;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2329:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=t(3117),o=t(102),c=(t(7294),t(3905)),a=["components"],i={title:"Plugins"},s=void 0,u={unversionedId:"examples/plugins",id:"examples/plugins",title:"Plugins",description:"Sketching out a plugin interface.",source:"@site/docs/examples/plugins.md",sourceDirName:"examples",slug:"/examples/plugins",permalink:"/generative-music-with-javascript/examples/plugins",tags:[],version:"current",frontMatter:{title:"Plugins"}},p=[],l={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Sketching out a plugin interface."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-js"},"const { createEnv, inst, fx, seq, music, plugins } = tuplet\nconst { c4, d4, e4 } = music.pitches\nconst { qn } = music.durations\n\nconst { magenta } = plugins\n\nseq.use(magenta)\n\nconst notes = seq([\n  [c4, qn],\n  [d4, qn],\n  [e4, qn],\n])\n\n// console.log(notes.repeat(2).viz('canvas'))\n\n;(async () => {\n  const bpm = 120.0\n  const env = createEnv()\n\n  env.connect(await fx.compressor(env), await fx.reverb(env), env.master)\n\n  const continued = await notes.continue()\n  console.log(continued)\n\n  const s = seq(continued).quantize(bpm)\n\n  const piano = await inst.sampler(env, 'piano')\n\n  seq.loop(s, piano)\n})()\n")))}f.isMDXComponent=!0}}]);