"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6803],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),p=a,b=m["".concat(c,".").concat(p)]||m[p]||d[p]||r;return t?o.createElement(b,i(i({ref:n},u),{},{components:t})):o.createElement(b,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5311:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i={title:"Timing"},s=void 0,c={unversionedId:"music/timing",id:"music/timing",isDocsHomePage:!1,title:"Timing",description:"- Metronome / sync to beat vs. note duration",source:"@site/docs/music/timing.md",sourceDirName:"music",slug:"/music/timing",permalink:"/generative-music-with-javascript/music/timing",tags:[],version:"current",frontMatter:{title:"Timing"},sidebar:"main",previous:{title:"Notes",permalink:"/generative-music-with-javascript/music/notes"},next:{title:"Repetition",permalink:"/generative-music-with-javascript/generative/repetition"}},l=[{value:"Timing models",id:"timing-models",children:[{value:"Standard JavaScript timing",id:"standard-javascript-timing",children:[]},{value:"Web Audio API timing",id:"web-audio-api-timing",children:[]}]},{value:"Metronome",id:"metronome",children:[{value:"Version 1",id:"version-1",children:[]},{value:"Version 2",id:"version-2",children:[]},{value:"Version 3",id:"version-3",children:[]},{value:"Note length",id:"note-length",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],u={toc:l};function d(e){var n=e.components,i=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metronome / sync to beat vs. note duration")),(0,r.kt)("p",null,"The next step is to look at rhythm/tempo. Or how to play our notes over time. If\nwe think of music in terms of axes, pitch is on the y axis, with time stretching\nout ahead on the x axis. This gives us the building block of rhythm, which is a\nfoundation of melody."),(0,r.kt)("h2",{id:"timing-models"},"Timing models"),(0,r.kt)("h3",{id:"standard-javascript-timing"},"Standard JavaScript timing"),(0,r.kt)("p",null,"JS has ",(0,r.kt)("inlineCode",{parentName:"p"},"setInterval")," & ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout"),"."),(0,r.kt)("p",null,"To repeat a note we ",(0,r.kt)("em",{parentName:"p"},"could")," do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Repeat every 1 second\nsetInterval(() => {\n  const sourceNode = context.createBufferSource()\n  sourceNode.buffer = audioBuffer\n  sourceNode.connect(context.destination)\n  sourceNode.start()\n}, 1000)\n")),(0,r.kt)("p",null,"The problem with JavaScript's standard ",(0,r.kt)("inlineCode",{parentName:"p"},"setInterval")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"setTimeout")," functions\nis that they are not guaranteed to run exactly on schedule. Depending what else\nis happening on the page, they may be delayed while the browser catches up. This\nis fine for most use-cases, where millisecond delays in e.g. showing a\nnotification would be unnoticeable, but with music these lags can be very\nobvious."),(0,r.kt)("h3",{id:"web-audio-api-timing"},"Web Audio API timing"),(0,r.kt)("p",null,"Instead, the Web Audio API has the concept of scheduling. When you create an\n",(0,r.kt)("inlineCode",{parentName:"p"},"AudioContext"),", it begins counting from 0. We can check it's current time as\nfollows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const context = new AudioContext()\n\nconsole.log(context.currentTime) // => 0\n\nsetTimeout(() => {\n  console.log(context.currentTime) // => 0.9984580498866213\n}, 1000)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"contextcurrenttime-uses-seconds-not-milliseconds"},(0,r.kt)("inlineCode",{parentName:"h4"},"context.currentTime")," uses seconds ",(0,r.kt)("em",{parentName:"h4"},"not")," milliseconds"),(0,r.kt)("p",{parentName:"blockquote"},"Unlike most timing-related features in JavaScript, the audio clock uses\nseconds, not milliseconds, with all scheduling happening relative to\n",(0,r.kt)("inlineCode",{parentName:"p"},"currentTime"),".")),(0,r.kt)("p",null,"We can't control this internal clock, but we can schedule events relative to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const context = new AudioContext()\nconst now = context.currentTime\n\n// Play immediately\nconst sourceNode1 = context.createBufferSource()\nsourceNode1.buffer = audioBuffer\nsourceNode1.connect(context.destination)\nsourceNode1.start(now)\n\n// Play after 1 second\nconst sourceNode2 = context.createBufferSource()\nsourceNode2.buffer = audioBuffer\nsourceNode2.connect(context.destination)\nsourceNode2.start(now + 1)\n\n// Play after 2 seconds\nconst sourceNode3 = context.createBufferSource()\nsourceNode3.buffer = audioBuffer\nsourceNode3.connect(context.destination)\nsourceNode3.start(now + 2)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"audiobuffersourcenodes-can-only-be-played-once"},(0,r.kt)("inlineCode",{parentName:"h4"},"AudioBufferSourceNode"),"s can only be played once"),(0,r.kt)("p",{parentName:"blockquote"},"It's worthing noting that in the above code we create three separate\n",(0,r.kt)("inlineCode",{parentName:"p"},"sourceNode"),"s, each using the same ",(0,r.kt)("inlineCode",{parentName:"p"},"audioBuffer"),". Once started, an\n",(0,r.kt)("inlineCode",{parentName:"p"},"AudioBufferSourceNode")," cannot be played again. The expensive part of working\nwith samples is loading and decoding them, so the idea is to keep around\n",(0,r.kt)("inlineCode",{parentName:"p"},"AudioBuffer"),"s, while freely creating and discarding ",(0,r.kt)("inlineCode",{parentName:"p"},"AudioBufferSourceNode"),'s.\nThey are intended to be "fire and forget", and are automatically garbage\ncollected when they finish playing.')),(0,r.kt)("h2",{id:"metronome"},"Metronome"),(0,r.kt)("p",null,"Most music-making apps have some form of metronome, something that emits a\nsteady pulse given a BPM (beats per minute). Instruments and effects sync to\nthis pulse, ensuring that everything plays back in time."),(0,r.kt)("h3",{id:"version-1"},"Version 1"),(0,r.kt)("p",null,"We can create a basic metronome that emits a sound every beat using an\n",(0,r.kt)("inlineCode",{parentName:"p"},"OscillatorNode")," and taking advantage of its\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/onended"},(0,r.kt)("inlineCode",{parentName:"a"},"onended")),"\nevent. Passing in a callback, we can then schedule anything we want relative to\nthe beat."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const context = new AudioContext()\n\nconst metronome = (bpm = 60, callback, currentBeat = 0) => {\n  const now = context.currentTime\n\n  // How many beats fit in a single second at the given bpm? e.g.\n  // 60 bpm = 1 beat per second\n  // 120 bpm = 2 beats per second\n  // 240 bpm = 4 beats per second\n  const beatsPerSecond = bpm / 60.0\n\n  // Our base unit is a quarter note. This defines how many quarter notes fit\n  // in a single bar. For now let's use common 4/4 time.\n  const quarterBeatsPerBar = 4\n\n  // Multiplying the number of beats in 1 second by the number of quarter\n  // beats in a bar, we get the actual number of beats we want in a single bar e.g.\n  // 1 beat per second * 4 = 4 beats per bar\n  // 2 beat per second * 4 = 8 beats per bar\n  // 4 beat per second * 4 = 16 beats per bar\n  const beatsPerBar = beatsPerSecond * quarterBeatsPerBar\n\n  // Dividing the number of quarter beats by our actual beats per bar gives us\n  // the length of a single beat in milliseconds.\n  const beatLength = quarterBeatsPerBar / beatsPerBar\n\n  // console.log(beatsPerSecond, beatsPerBar, beatLength)\n  // return\n\n  const freq = currentBeat % beatsPerBar == 1 ? 440 : 880\n  const zero = 0\n  const gainNode = context.createGain()\n  const osc = context.createOscillator()\n  gainNode.connect(context.destination)\n  osc.connect(gainNode)\n\n  gainNode.gain.linearRampToValueAtTime(zero, now + beatLength / 16)\n\n  osc.frequency.value = freq\n  osc.start(now)\n  osc.stop(now + beatLength)\n\n  callback(now)\n\n  osc.onended = () => {\n    metronome(bpm, callback, (currentBeat += 1))\n    osc = null\n    gainNode = null\n  }\n}\n\nmetronome(60, (now) => {\n  // Here we can trigger any audio we want\n  console.log('boop!', now)\n})\n// metronome(120)\n// metronome(240)\n")),(0,r.kt)("p",null,"For more details on how we derive the note length from the BPM, refer to the\n",(0,r.kt)("a",{parentName:"p",href:"../primers/music#rhythm"},"Music Primer")," chapter, which breaks this down with\nillustrations."),(0,r.kt)("h3",{id:"version-2"},"Version 2"),(0,r.kt)("p",null,"Currently our metronome only enables us to schedule notes to occur exactly on\nthe beat. To increase our options we need to increase the resolution of the\nevents the metronome emits."),(0,r.kt)("p",null,"If we think of time as the x axis of a grid, resolution means how we subdivide\nthat grid."),(0,r.kt)("p",null,"As we saw in the ",(0,r.kt)("a",{parentName:"p",href:"../primers/music"},"Music chapter"),', in traditional music\nnotation we might call these divisions a "half note" or "quarter note", (or\n"minim" or "crotchet"), while in a pattern sequencer they are usually\nrepresented as fractions. Both refer to the same thing: how to subdivide a bar.'),(0,r.kt)("p",null,"Common subdivisions are 1/2, 1/4, 1/8, 1/16, 1/32, 1/64 and 1/128 (plus some\ntriplet divisions which we'll ignore for now)."),(0,r.kt)("p",null,"If we presume a time signature of 4/4 (4 beats per bar), these resolutions break\ndown as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7383).Z})),(0,r.kt)("p",null,"Rather than passing in a callback to be triggered on the beat, we can instead\nextend our metronome to emit events at each subdivision and listen for those."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const metronome = (context, bpm = 60, options = { audible: false }) => {\n  const secondsPerBeat = 60.0 / bpm\n  const beatsPerBar = 4\n\n  const wholeNote = secondsPerBeat * beatsPerBar\n  const sixtyFourthNote = wholeNote / 64\n\n  const gainNode = context.createGain()\n  gainNode.connect(context.destination)\n  let osc\n\n  const tick = (currentBeat = 1, wholeBeat = 1) => {\n    const resolution = sixtyFourthNote\n    const now = context.currentTime\n\n    gainNode.gain.value = 0\n\n    osc = context.createOscillator()\n    osc.connect(gainNode)\n    osc.start()\n    osc.stop(now + resolution)\n\n    if (currentBeat === 1 || currentBeat % 16 === 0) {\n      gainNode.gain.value = 1\n      gainNode.gain.linearRampToValueAtTime(0, now + resolution)\n      osc.frequency.value = 400\n      callbacks['beat'](wholeBeat)\n      wholeBeat += 1\n      // callbacks['beat/4'](currentBeat)\n    } else if (currentBeat % 8 === 0) {\n      gainNode.gain.value = 1\n      gainNode.gain.linearRampToValueAtTime(0, now + resolution)\n      osc.frequency.value = 800\n      callbacks['beat/8']()\n    } else if (currentBeat % 4 === 0) {\n      gainNode.gain.value = 1\n      gainNode.gain.linearRampToValueAtTime(0, now + resolution)\n      osc.frequency.value = 1600\n      callbacks['beat/16']()\n    } else if (currentBeat % 2 === 0) {\n      gainNode.gain.value = 1\n      gainNode.gain.linearRampToValueAtTime(0, now + resolution)\n      osc.frequency.value = 3200\n      callbacks['beat/32']()\n    } else {\n      gainNode.gain.value = 1\n      gainNode.gain.linearRampToValueAtTime(0, now + resolution)\n      osc.frequency.value = 6400\n      callbacks['beat/64']()\n    }\n\n    osc.onended = () => {\n      tick((currentBeat += 1), wholeBeat)\n    }\n  }\n\n  const stop = () => {\n    osc.onended = null\n    osc = null\n  }\n\n  const callbacks = {\n    beat: () => null,\n    'beat/4': () => null,\n    'beat/8': () => null,\n    'beat/16': () => null,\n    'beat/32': () => null,\n    'beat/64': () => null,\n  }\n\n  const on = (event, fn) => {\n    callbacks[event] = fn\n  }\n\n  return {\n    start: tick,\n    stop,\n    on,\n  }\n}\n\nconst context = new AudioContext()\n\nconst metro = metronome(context, 60)\n\nmetro.on('beat', (beat) => {\n  console.log('beat', beat)\n})\n\n// metro.on('beat/64', beat => {\n//   console.log('beat/64')\n// })\n\nmetro.start()\n\nsetTimeout(() => {\n  metro.stop()\n}, 4000)\n")),(0,r.kt)("h3",{id:"version-3"},"Version 3"),(0,r.kt)("p",null,"Async: Callbacks, Promises, Event Emitters, Observables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Sync"),(0,r.kt)("th",{parentName:"tr",align:null},"Async"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Single"),(0,r.kt)("td",{parentName:"tr",align:null},"Variable"),(0,r.kt)("td",{parentName:"tr",align:null},"Promise")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"Observable")))),(0,r.kt)("p",null,"Observable (spec, RxJS)"),(0,r.kt)("h3",{id:"note-length"},"Note length"),(0,r.kt)("p",null,"If our metronome is ticking away at 60 bpm, we know that each beat lasts 1\nsecond. A bar of 4 beats will therefore last 4 seconds. Knowing this, we just\nneed to divide the bar length by the resolution to give us our note length."),(0,r.kt)("p",null,"We can encapsulate this knowledge into a ",(0,r.kt)("inlineCode",{parentName:"p"},"resolution()")," function that given a\nbpm and resolution, returns the length of our note:"),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"metronome()")," function tells us the current bpm at each tick..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const resolution = (bpm, res) => {\n  const beat = bpm / 60 // 1 second\n  const bar = beat * 4 // 4 seconds\n  return bar / res\n}\nconst bpm = 60\n\nresolution(bpm, 1) // => 4 seconds\nresolution(bpm, 2) // => 2 seconds\nresolution(bpm, 4) // => 1 second\nresolution(bpm, 8) // => 0.5 seconds\nresolution(bpm, 16) // => 0.25 seconds\nresolution(bpm, 32) // => 0.125 seconds\nresolution(bpm, 64) // => 0.0625 seconds\nresolution(bpm, 128) // => 0.03125 seconds\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const bpm = 60\nconst beat = bpm / 60 // 1 second\nconst bar = beat * 4 // 4 seconds\n\nbar / 1 // => 4 seconds\nbar / 2 // => 2 seconds\nbar / 4 // => 1 second\nbar / 8 // => 0.5 seconds\nbar / 16 // => 0.25 seconds\nbar / 32 // => 0.125 seconds\nbar / 64 // => 0.0625 seconds\nbar / 128 // => 0.03125 seconds\n")),(0,r.kt)("p",null,"##\xa0Learning"),(0,r.kt)("p",null,"TODO: ",(0,r.kt)("inlineCode",{parentName:"p"},"metronome")," is part of ",(0,r.kt)("strong",{parentName:"p"},"TODO")," package, see API docs."),(0,r.kt)("p",null,"While the musical results are less than inspiring, we now have a way to generate\ntwo key aspects of music: notes/pitch and rhythm/time, which combined can give\nus melody. With that in mind, we're ready to move on to a more interesting\nexample."),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.html5rocks.com/en/tutorials/audio/scheduling/"},"A Tale of Two Clocks - Scheduling Web Audio with Precision"))))}d.isMDXComponent=!0},7383:function(e,n,t){n.Z=t.p+"assets/images/resolution-477cdd912fbc9c46fd7b76e042da60c8.svg"}}]);