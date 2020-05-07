(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return c}));var o=t(1),a=(t(0),t(141));const r={title:"Probability"},i={id:"generative/probability",title:"Probability",description:"> TODO",source:"@site/book/generative/probability.md",permalink:"/book/generative/probability",sidebar:"main",previous:{title:"Randomness",permalink:"/book/generative/randomness"},next:{title:"Grammars",permalink:"/book/generative/grammars"}},l=[{value:"Probability",id:"probability",children:[]},{value:"Markov chains",id:"markov-chains",children:[]},{value:"Normal distribution",id:"normal-distribution",children:[]},{value:"Perlin noise",id:"perlin-noise",children:[]},{value:"Scales",id:"scales",children:[]},{value:"Polyphony",id:"polyphony",children:[]}],s={rightToc:l};function c({components:e,...n}){return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"TODO")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Probability/Chance/Dice/Choices"),Object(a.b)("li",{parentName:"ul"},"Markov Models/Chains, State Machines"),Object(a.b)("li",{parentName:"ul"},"Apply to: notes, phrase choice")),Object(a.b)("h2",{id:"probability"},"Probability"),Object(a.b)("p",null,"By applying probability, we can still employ randomness, but weigh the odds to\nfavour specific outcomes. Adjusting the weights, we can influence how our\nprogram behaves."),Object(a.b)("p",null,"An easy way to think about this is by visualizing a pie chart. The more pieces\nof the pie we assign a given outcome, the more chance that outcome will occur."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/walker/probability.svg",alt:null}))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"navigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  let output = outputs.next().value\n\n  function random(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min\n  }\n\n  function playNote(note, length, velocity = 127) {\n    let noteOn = 144 // channel 1 note on\n    let noteOff = 128 // channel 1 note off\n\n    output.send([noteOn, note, velocity])\n    output.send([noteOff, note, velocity], window.performance.now() + length)\n  }\n\n  let startNote = random(21, 108)\n  let length = 250\n\n  function play(note) {\n    let prob = 0.4\n    let num = Math.random()\n    let nextNote\n\n    if (num < prob) {\n      // 40% chance of going down 7 steps\n      nextNote = Math.max(note - 7, 21)\n    } else {\n      // 60% chance of going up 5 steps\n      nextNote = Math.min(note + 5, 108)\n    }\n\n    let timer = setTimeout(() => {\n      playNote(nextNote, length)\n      clearTimeout(timer)\n      play(nextNote)\n    }, length)\n  }\n\n  play(startNote)\n})\n")),Object(a.b)("p",null,"Here, we've weighed the odds to favour going up the scale. We'll sometimes dip\ndownwards, but the results will always trend upwards over time."),Object(a.b)("h2",{id:"markov-chains"},"Markov chains"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"TODO")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The resulting stochastic system is called a Markov chain. The number of\nprevious values observed is called the order of the Markov chain.")),Object(a.b)("h2",{id:"normal-distribution"},"Normal distribution"),Object(a.b)("p",null,"Probability is one way to reign in randomness. Another way is to emulate a\ncommon pattern found in nature, where values tend to cluster around a certain\nrange, otherwise known as normal (or Gaussian) distribution (in contrast to pure\nrandomness, which aims for uniform distribution). This maps well to music, where\nmelodies tend to use a narrow range of notes and steps."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/walker/distributions.svg",alt:null}))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import random from 'random'\nimport clamp from 'lodash'\nimport { instrument, metronome, midi } from 'tuplet'\n\nmidi().then((output) => {\n  function playNote(note, length, velocity) {\n    let noteOn = 144\n    let noteOff = 128\n\n    output.send([noteOn, note, velocity])\n    output.send([noteOff, note, velocity], window.performance.now() + length)\n  }\n\n  // A mean of middle C with a small deviation\n  let noteGen = random.normal(60, 3)\n\n  // A mean of half velocity with a large deviation\n  let velGen = random.normal(64, 20)\n\n  let length = 200\n\n  setInterval(() => {\n    // We need to 'clamp' these values to prevent them straying out of range\n    let note = clamp(Math.round(noteGen()), 21, 108)\n    let velocity = clamp(Math.round(velGen()), 0, 127)\n    playNote(note, length, velocity)\n  }, length)\n})\n")),Object(a.b)("p",null,"Here, the notes cluster around middle C and medium velocity. By increasing the\ndeviation from the mean we can introduce more variation."),Object(a.b)("h2",{id:"perlin-noise"},"Perlin noise"),Object(a.b)("p",null,"Describe what Perlin noise is."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import rangeMap from 'range-map'\nimport tumult from 'tumult'\n\nimport { inst, midi } from 'tuplet'\n\nmidi().then((output) => {\n  const perlin = new tumult.Perlin1(Math.random())\n  const length = 100\n  let xoff = 0.0\n\n  setInterval(() => {\n    xoff = xoff + 0.01\n    const note = rangeMap(perlin.gen(xoff), -1, 1, 21, 108)\n    const velocity = rangeMap(perlin.gen(xoff), -1, 1, 0, 127)\n    inst(output, note, velocity, length)\n  }, length)\n})\n")),Object(a.b)("p",null,"The point so far is that there are many ways to generate streams of notes.\nWhat's lacking is any musical order."),Object(a.b)("h2",{id:"scales"},"Scales"),Object(a.b)("p",null,"Instead of choosing from all notes, we can instead limit our choices to a\nparticular scale. In fact, we've already been using a scale, the chromatic one.\nThis is valid, see\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Twelve-tone_technique"}),"Twelve-tone technique"),",\nbut lacks 'musicality' (part of what those composers were getting away from)."),Object(a.b)("p",null,"For our purposes we can say that a scale is a pattern of white and black keys.\nThis pattern can be described in terms of intervals. See the Music chapter for\ndetails. These notes sound like they 'belong together'."),Object(a.b)("p",null,"C Major scale is just all the white notes, starting at C to next C."),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"/img/walker/scales.svg",alt:null}))),Object(a.b)("p",null,"All notes:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C\n60  61  62  63  64  65  66  67  68  69  70  71  72\n")),Object(a.b)("p",null,"C Major notes:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C\n60  -   62  -   64  65  -   67  -   69  -   71  72\n")),Object(a.b)("p",null,"If we express that as intervals:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C\n1   -   2   -   2   1   -   2   -   2   -   2   1\n")),Object(a.b)("p",null,"If we express that as indexes:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C\n0   -   2   -   4   5   -   7   -   9   -   11  12\n")),Object(a.b)("p",null,"How can we pick that pattern?"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import {\n  chain,\n  range,\n  drop,\n  dropRight,\n  chunk,\n  filter,\n  includes,\n  random,\n  sample,\n} from 'lodash'\nimport { inst, midi } from 'tuplet'\n\nconst allNotes = range(21, 109)\n\nconst cmaj = [0, 2, 4, 5, 7, 9, 11]\n\nconst octaves = chain(allNotes)\n  .drop(3) // start at first C\n  .dropRight(1) // drop last C\n  .chunk(12) // split into octaves\n  .value()\n\nconst notes = chain(octaves)\n  .map((o) => {\n    // select only the notes in the scale\n    return filter(o, (n, idx) => {\n      return includes(cmaj, idx)\n    })\n  })\n  .flatten() // flatten the octaves\n  .value()\n\nnavigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  const output = outputs.next().value\n\n  const length = 300\n\n  setInterval(() => {\n    const note = sample(notes)\n    const velocity = random(64, 96)\n\n    output.send([0x90, note, velocity])\n    output.send([0x80, note, velocity], window.performance.now() + length)\n  }, length)\n})\n")),Object(a.b)("p",null,"Now all the notes are in the same scale so things sound a little less random /\nmore cohesive. Given a single stream of notes this is less jarring than total\nrandomness."),Object(a.b)("h2",{id:"polyphony"},"Polyphony"),Object(a.b)("p",null,"Now that we can play in key, we can introduce a second voice and know it will\nharmonize with the first."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { metro, limit2, scale } from 'tuplet'\nimport { flow, sample, random, partition, identity } from 'lodash/fp'\n\nconst [low, high] = flow(\n  scale('cmaj'),\n  limit2('piano'),\n  partition((n) => n < 64)\n)([])\n\nnavigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  const output = outputs.next().value\n\n  setInterval(() => {\n    const note = sample(high)\n    const velocity = random(64, 96)\n    output.send([0x90, note, velocity])\n    output.send([0x80, note, velocity], window.performance.now() + 400)\n  }, 400)\n\n  setInterval(() => {\n    const note = sample(low)\n    const velocity = random(32, 64)\n    output.send([0x91, note, velocity])\n    output.send([0x81, note, velocity], window.performance.now() + 1200)\n  }, 1200)\n})\n")),Object(a.b)("p",null,"Here we're dividing the notes and sending the high notes to one channel, and the\nlow notes to a second channel. We're sampling from the same set of notes so we\ncan be sure they will harmonise. The results are more interesting as hearing how\nthe two voices interact adds a layer of depth to our music."),Object(a.b)("p",null,"##\xa0Learning"),Object(a.b)("p",null,"We covered two main topics in this chapter: 1) we can use various methods to\ngenerate sequences of numbers with different characteristics that we can use as\nthe input to our programs; and 2) we can apply music theory to coerce that data\ninto something that makes more musical sense."),Object(a.b)("p",null,"With that in mind, we can encapsulate our learning into two new utilities:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Generative:")," Functions for generating data we can use in our programs,\neither algorithms we write ourselves, or ones we might use from other\nlibraries \u2192 ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../api/gen"}),Object(a.b)("inlineCode",{parentName:"a"},"gen")),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Music:")," A place to wrap up our musical knowledge and handle the details of\nmapping that to midi \u2192 ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"../api/music"}),Object(a.b)("inlineCode",{parentName:"a"},"music")),"."))),Object(a.b)("p",null,"With these in our toolbelt, we could rewrite our last example as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { midi, send, metro, limit, scale } from 'tuplet'\nimport { flow, sample, random, partition } from 'lodash/fp'\n\nmidi.then((output) => {\n  const ch1 = send(output, 0x90)\n  const ch2 = send(output, 0x91)\n  const [low, high] = flow(\n    scale('cmaj'),\n    limit('piano'),\n    partition((n) => n < 64)\n  )([])\n\n  loop(() => ch1(sample(high), random(64, 96)), 400)\n  loop(() => ch2(sample(low), random(32, 64)), 1200)\n})\n")),Object(a.b)("p",null,"Right now our music is basically just streams of notes. To take it further, we\nneed a way to generate cohesive patterns of notes, and sequence them with other\npatterns. As it happens, that's just the goal of the next chapter!"),Object(a.b)("p",null,"###\xa0Notes"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import {\n  chain,\n  range,\n  drop,\n  dropRight,\n  chunk,\n  filter,\n  includes,\n  random,\n  sample,\n} from 'lodash'\nimport { inst, midi } from 'tuplet'\n\nconst allNotes = range(21, 109)\n\nconst cmaj = [0, 2, 4, 5, 7, 9, 11]\n\nconst octaves = chain(allNotes)\n  .drop(3) // start at first C\n  .dropRight(1) // drop last C\n  .chunk(12) // split into octaves\n  .value()\n\nconst notes = chain(octaves)\n  .map((o) => {\n    // select only the notes in the scale\n    return filter(o, (n, idx) => {\n      return includes(cmaj, idx)\n    })\n  })\n  .flatten() // flatten the octaves\n  .value()\n\nnavigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  const output = outputs.next().value\n\n  const length = 300\n\n  setInterval(() => {\n    const note = sample(notes)\n    const velocity = random(64, 96)\n\n    output.send([0x90, note, velocity])\n    output.send([0x80, note, velocity], window.performance.now() + length)\n  }, length)\n})\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { output } from 'midi'\nimport { Piano } from 'inst/piano'\nimport random from 'random'\n\nexport default class {\n  constructor() {\n    console.log('Walker')\n  }\n\n  async walk() {\n    const midi = await output()\n    const piano = new Piano(midi)\n    const length = 200\n\n    const mean = 0\n    const sd = 1\n\n    const normal = random.normal(mean, sd)\n\n    console.log(normal())\n\n    function play(note) {\n      let nextNote = normal()\n\n      const timer = setTimeout(() => {\n        piano.play(nextNote, length)\n        clearTimeout(timer)\n        play(nextNote)\n      }, length)\n    }\n\n    // play(normal());\n  }\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"navigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  let output = outputs.next().value\n\n  function random(min, max) {\n    min = Math.ceil(min)\n    max = Math.floor(max)\n    return Math.floor(Math.random() * (max - min + 1)) + min\n  }\n\n  function playNote(note, length, velocity = random(0, 127)) {\n    let noteOn = 144 // channel 1 note on\n    let noteOff = 128 // channel 1 note off\n\n    output.send([noteOn, note, velocity])\n    output.send([noteOff, note, velocity], window.performance.now() + length)\n  }\n\n  let startNote = random(21, 108)\n  let length = 250\n\n  function play(note) {\n    let prob = 0.4\n    let num = Math.random()\n    let nextNote\n\n    if (num < prob) {\n      // 40% chance of going down 7 steps\n      nextNote = Math.max(note - 7, 21)\n    } else {\n      // 60% chance of going up 5 steps\n      nextNote = Math.min(note + 5, 108)\n    }\n\n    let timer = setTimeout(() => {\n      playNote(nextNote, length)\n      clearTimeout(timer)\n      play(nextNote)\n    }, length)\n  }\n\n  // play(startNote);\n})\n")))}c.isMDXComponent=!0},141:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=o,h=p["".concat(i,".").concat(b)]||p[b]||m[b]||r;return t?a.a.createElement(h,l({ref:n},c,{components:t})):a.a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);