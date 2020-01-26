(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var a=t(1),o=t(6),r=(t(0),t(127)),s={title:"Randomness"},i={id:"generative/randomness",title:"Randomness",description:"Reference:",source:"@site/docs/generative/randomness.md",permalink:"/gen/docs/generative/randomness",lastUpdatedAt:1579999538,sidebar:"main",previous:{title:"Repetition",permalink:"/gen/docs/generative/repetition"},next:{title:"Probability",permalink:"/gen/docs/generative/probability"}},l=[{value:"Random Walk",id:"random-walk",children:[]},{value:"Random Notes",id:"random-notes",children:[{value:"Random Numbers",id:"random-numbers",children:[]},{value:"Random Stream",id:"random-stream",children:[]},{value:"Random Notes",id:"random-notes-1",children:[]}]},{value:"More randomness",id:"more-randomness",children:[]},{value:"Relative notes",id:"relative-notes",children:[]}],m={rightToc:l};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Reference:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/@metalex9/randomizing-program-execution-with-random-number-generators-a7bb613861f9"}),"https://medium.com/@metalex9/randomizing-program-execution-with-random-number-generators-a7bb613861f9"))),Object(r.b)("p",null,"This guide shows how to use randomness to introduce variation to our music,\nspecifically through the idea of a random walk."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Music that relies at least to some degree on randomness is said to be\nstochastic, or aleatoric.")),Object(r.b)("h2",{id:"random-walk"},"Random Walk"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Another approach to generating a melody is sometimes called a random walk. The\nidea is to start on a particular note and treat the sequence of random numbers\nas intervals, rather than as pitches.")),Object(r.b)("p",null,"In 2D graphics, a random walk involves drawing a path by repeatedly choosing a\nrandom direction in which to move. On this 2D plane, each step can be one of\nfour directions: up, down, left, or right (plus a fifth choice if you include\nnot moving as an option). Given a certain set of rules, this might look as\nfollows:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/gen/img/walker/walk.png",alt:null}))),Object(r.b)("p",null,'How might we apply this idea to music? As we\'ve seen, a piano has 88 keys,\ngiving it a range from A0 to C8, which map to the MIDI numbers 21\u2013108. We can\ntreat this as a 1D plane, and say that at each moment we have 4 choices: 1) play\na higher note; 2) play a min note; 3) play the same note; 4) play nothing. The\nrange 21-108 and the 4 choices define the "possibility space" for our random\nwalk.'),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/gen/img/walker/piano.svg",alt:null}))),Object(r.b)("h2",{id:"random-notes"},"Random Notes"),Object(r.b)("p",null,"Let's start simple and just play random notes by repeatedly picking a random\nnumber between 21 and 108. This gives us a random distribution, where each of\nthe 88 notes have an equal chance of being played."),Object(r.b)("h3",{id:"random-numbers"},"Random Numbers"),Object(r.b)("p",null,"For this example, we'll need a way to generate a random number within a given\nrange, which JS doesn't have out-of-the-box, so let's create one:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const random = (min, max) => {\n  return min + Math.floor(Math.random() * (max - min + 1))\n}\n\nconsole.log(random(1, 10)) // => a random number between 1 and 10\n")),Object(r.b)("h3",{id:"random-stream"},"Random Stream"),Object(r.b)("p",null,"Before actually making any sounds, let's just create a regular stream of random\nnumbers within our desired range. We just need to convert our random number\nfunction to an Observable:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { interval } = rxjs\nconst { map } = rxjs.operators\n\nconst random = (min, max) => {\n  return map(x => min + Math.floor(Math.random() * (max - min + 1)))\n}\n\nconst numbers$ = interval(1000).pipe(random(21, 108))\n\nnumbers$.subscribe(console.log) // => a random number between 21 and 108 every second\n")),Object(r.b)("h3",{id:"random-notes-1"},"Random Notes"),Object(r.b)("p",null,"Now, let's plug in the ",Object(r.b)("inlineCode",{parentName:"p"},"sampler()")," function from Gen.js and hear some notes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { interval } = rxjs\nconst { map } = rxjs.operators\nconst { sampler, samples } = gen\n\nconst random = (min, max) => {\n  return map(x => min + Math.floor(Math.random() * (max - min + 1)))\n}\n\n// TODO: our piano samples only support this range, should be 21, 108\nconst notes$ = interval(1000).pipe(random(24, 107))\n\n;(async () => {\n  const context = new AudioContext()\n  const piano = await sampler(context, samples.piano)\n\n  notes$.subscribe(note => {\n    piano(note, { duration: 2 })\n  })\n})()\n")),Object(r.b)("p",null,"Let's refactor this using the ",Object(r.b)("inlineCode",{parentName:"p"},"program()")," structure from Gen.js:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { interval } = rxjs\nconst { map } = rxjs.operators\nconst { program, sampler, samples, random } = gen\n\nconst model = {\n  note: null,\n  piano: null\n}\n\nconst messages = (model, send) => ({\n  note: () => {\n    const notes$ = interval(1000).pipe(map(x => random(21, 108)))\n    notes$.subscribe(note => send({ note }))\n  },\n\n  piano: async () => {\n    const piano = await sampler(model.context, samples.piano)\n    send({ piano })\n  }\n})\n\nconst render = model => {\n  const { piano, note } = model\n  piano(note, { duration: 2 })\n}\n\nprogram({ model, messages, render })\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const {\n  program,\n  sampler2,\n  sampleMap2,\n  metronome,\n  resolution,\n  random,\n  noteName\n} = gen\n\n// -- MODEL\n\nconst model = {\n  bpm: 60,\n  tick: 0,\n  note: null,\n  sampler: null\n}\n\n// -- MESSAGES\n\nconst messages = (model, send) => {\n  const { context, bpm } = model\n\n  const msgs = {\n    tick: () => {\n      const metro = resolution(metronome(context, bpm), 4)\n      metro.subscribe(tick => send({ tick, ...msgs.note() }))\n    },\n\n    note: () => {\n      const rng = random(24, 107)\n      return { note: noteName(rng()) }\n    },\n\n    sampler: async () => {\n      const samples = await sampleMap2(\n        context,\n        '{{PACKAGE_URL}}/samples/piano/'\n      )\n      send({ sampler: sampler2(context, samples) })\n    }\n  }\n\n  return msgs\n}\n\n// -- RENDER\n\nconst render = model => {\n  const { sampler, note } = model\n\n  sampler(note, { duration: 2 })\n}\n\n// -- PROGRAM\n\nprogram({ model, messages, render })\n")),Object(r.b)("p",null,'This probably sounds like the bleeps and bloops you imagine when you hear the\nphrase "computer generated music". At strict intervals and constant velocity the\nresults sound rather mechanical.'),Object(r.b)("h2",{id:"more-randomness"},"More randomness"),Object(r.b)("p",null,"By also applying some randomness to the timing and velocity, we can add more\nnuance."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { instrument, metronome, midi } from 'gen'\n\nconst rand = (min, max) => {\n  return Math.floor(Math.random() * (max - min + 1)) + min\n}\n\nmidi().then(output => {\n  const metro = metronome(10)\n  const inst = instrument({ output, metro })\n\n  // Play a random note, at a random velocity, for a random length of time\n  metro.onTick(() => inst(rand(21, 108), rand(0, 127), rand(250, 2000)))\n  metro.start()\n})\n")),Object(r.b)("p",null,"This makes things feel more natural, emulating the variations of timing and\ntouch of a human player."),Object(r.b)("p",null,"Whilst initially quite interesting though, pure randomness doesn't hold our\nattention for long, as, by definition, it lacks the patterns and structure that\nare a key aspect of our enjoyment of music."),Object(r.b)("h2",{id:"relative-notes"},"Relative notes"),Object(r.b)("p",null,"If we think about taking a walk, even if we're just wandering, we're not taking\nrandom steps and leaps. Our movements have direction, each step is related to\nthe previous ones to keep us moving along a certain path."),Object(r.b)("p",null,"Rather than choosing randomly, we can pick our next note relative to the current\none."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"navigator.requestMIDIAccess().then(midi => {\n  const outputs = midi.outputs.values()\n  let output = outputs.next().value\n\n  function random(min, max) {\n    min = Math.ceil(min)\n    max = Math.floor(max)\n    return Math.floor(Math.random() * (max - min + 1)) + min\n  }\n\n  function playNote(note, length, velocity) {\n    let noteOn = 0x90 // 144 = channel 1 note on\n    let noteOff = 0x80 // 128 = channel 1 note off\n\n    output.send([noteOn, note, velocity])\n    output.send([noteOff, note, velocity], window.performance.now() + length)\n  }\n\n  let startNote = random(21, 108)\n  let startVelocity = random(0, 127)\n  let step = 5\n\n  function play(note, velocity) {\n    let nextNote = random(Math.max(note - step, 21), Math.min(note + step, 108))\n    let length = 500\n    let nextVelocity = random(\n      Math.max(velocity - step, 0),\n      Math.min(velocity + step, 127)\n    )\n    let timer = setTimeout(() => {\n      playNote(nextNote, length, nextVelocity)\n      clearTimeout(timer)\n      play(nextNote, nextVelocity)\n    }, length)\n  }\n\n  play(startNote, startVelocity)\n})\n")),Object(r.b)("p",null,"This gives us something that has more of a flow and sense of direction. We've\nconstrained the options from all possible notes, to just those that are 5 notes\n(a 5th) either up or down from the current note. This gives us some control, but\nwe're still very much at the whim of chaos to determine our path."))}c.isMDXComponent=!0},127:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=o.a.createContext({}),c=function(e){var n=o.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},p=function(e){var n=c(e.components);return o.a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,b=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return t?o.a.createElement(b,i({ref:n},m,{components:t})):o.a.createElement(b,i({ref:n},m))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<r;m++)s[m]=t[m];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);