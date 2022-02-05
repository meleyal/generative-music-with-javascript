"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[296],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(h,s(s({ref:n},c),{},{components:t})):r.createElement(h,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1318:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),s=["components"],i={title:"Parts"},l=void 0,p={unversionedId:"music/parts",id:"music/parts",title:"Parts",description:"In this chapter we're going to look at the concept of sequencing, or, how to",source:"@site/docs/music/parts.md",sourceDirName:"music",slug:"/music/parts",permalink:"/generative-music-with-javascript/music/parts",tags:[],version:"current",frontMatter:{title:"Parts"}},c=[{value:"Sequencing",id:"sequencing",children:[{value:"Patterns",id:"patterns",children:[],level:3},{value:"Altering patterns",id:"altering-patterns",children:[],level:3},{value:"Transforms",id:"transforms",children:[],level:3}],level:2},{value:"Sequencer",id:"sequencer",children:[],level:2},{value:"Learning",id:"learning",children:[],level:2}],u={toc:c};function m(e){var n=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this chapter we're going to look at the concept of sequencing, or, how to\ncombine notes into patterns and play them back. It combines what we've learned\nso far about notes and timing to help us build more complete musical structures."),(0,o.kt)("p",null,"##\xa0Sequencers"),(0,o.kt)("p",null,'Most music apps include some form of sequencer, often called a "pattern\nsequencer" or "step sequencer". At a minimum, they usually have the following\nfeatures:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Draw or record a sequence or "pattern" of notes and their velocities.'),(0,o.kt)("li",{parentName:"ul"},"The number of steps (i.e. length) of the pattern can be adjusted (4 steps, 8\nsteps, etc.)."),(0,o.kt)("li",{parentName:"ul"},'When played back, the sequencer "steps" through the pattern note by note,\nlooping back around when it reaches the end of the pattern.'),(0,o.kt)("li",{parentName:"ul"},'The rate or "resolution" of the pattern can be adjusted. This defines how fast\nthe sequencer steps through the pattern.'),(0,o.kt)("li",{parentName:"ul"},"Patterns themselves can also be sequenced, meaning you can cycle through or\nalternate between different patterns."),(0,o.kt)("li",{parentName:"ul"},"Patterns can be copied to serve as the basis for new patterns."),(0,o.kt)("li",{parentName:"ul"},'TODO: Mention pattern "banks"')),(0,o.kt)("p",null,"An example is the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.propellerheads.com/en/reason/recording/matrix"},'"Matrix"')," pattern\nsequencer found in Reason, which has all the features listed above. We're going\nto build a basic emulation of the Matrix sequencer in this chapter, so let's\ntake a look at it:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(7207).Z,width:"831",height:"481"})),(0,o.kt)("h2",{id:"sequencing"},"Sequencing"),(0,o.kt)("h3",{id:"patterns"},"Patterns"),(0,o.kt)("p",null,'If we define a pattern "bank" as just an array of patterns, then moving between\npatterns is similar to progressing through the individual steps of a pattern,\nand we can use the same ',(0,o.kt)("inlineCode",{parentName:"p"},"ring()")," trick."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},";(async () => {\n  // const metronome = await import('https://unpkg.com/@meleyal/tuplet/src/metro.js')\n  const { metronome, ring } = await import('http://localhost:8081/src/index.js')\n  const context = new AudioContext()\n\n  const metro = metronome(context, 60)\n\n  const pattern1 = ring(['a', 'b', 'c', 'd'])\n  const pattern2 = ring(['e', 'f', 'g', 'h'])\n  const bankA = ring([pattern1, pattern2])\n\n  metro.on('tock', (tock) => {\n    metro.on('tick', (tick) => {\n      console.log(bankA(tock)(tick)) // a, b, c, d, e, f, g, h, a, b...\n    })\n  })\n\n  metro.start()\n})()\n")),(0,o.kt)("p",null,"##\xa0Generating patterns"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TODO: Research if Generator functions would be useful here.")),(0,o.kt)("p",null,"It would be nice if we could avoid writing out all of our patterns by hand. This\nis a book on generative music after all! For this purpose, we'll introduce the\nconcept of \"generators\". In this context, a generator is just a name we'll give\nto something that produces a pattern (not to be confused with\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*"},"JavaScript generator functions"),")."),(0,o.kt)("p",null,"We'll start simple, and reuse some of our learning from the previous chapter to\ngenerate a random pattern for our sequencer to play back."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { limit, scale } from 'tuplet'\nimport {\n  flow,\n  sample,\n  random,\n  shuffle,\n  take,\n  fill,\n  map,\n  reverse,\n} from 'lodash/fp'\n\nconst pattern1 = flow(\n  scale('cmaj'),\n  limit('piano'),\n  shuffle,\n  take(8),\n  map((n) => [n, 127])\n)([])\n\nconst bpm = 60\nconst beat = (bpm / 60) * 1000 // 1000ms = 1s\nconst bar = beat * 4 // 4000ms = 4s\nconst resolution = 16\nconst length = bar / resolution\n\nlet pattern = 0\nlet step = 0\nconst patterns = [pattern1, reverse(pattern1)]\n\nnavigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  const output = outputs.next().value\n\n  setInterval(() => {\n    console.log(`p${pattern + 1} : s${step + 1} : ${patterns[pattern][step]}`)\n\n    const [note, velocity] = patterns[pattern][step]\n    output.send([0x90, note, velocity])\n    output.send([0x80, note, velocity], window.performance.now() + length)\n\n    if (step < patterns[pattern].length - 1) {\n      step += 1\n    } else {\n      step = 0\n      if (pattern < patterns.length - 1) {\n        pattern += 1\n      } else {\n        pattern = 0\n      }\n    }\n  }, length)\n})\n")),(0,o.kt)("p",null,"Here, we're shuffling the notes of the scale, then taking 16 of them to produce\na random pattern. To introduce some symmetry, our second pattern is just our\nfirst pattern reversed."),(0,o.kt)("p",null,"###\xa0Seeding"),(0,o.kt)("p",null,"We can now reload the browser and get a new random pattern each time. But what\nif we hit upon a pattern we like? If we reload, our pattern will be lost forever\n(or at least has only a small chance of occurring again)."),(0,o.kt)("p",null,'Random number generators often let you provide a "seed" for the purpose of\nreproducing randomness. Given the same seed, you\'ll always get the same result.'),(0,o.kt)("p",null,"The Lodash ",(0,o.kt)("inlineCode",{parentName:"p"},"shuffle")," function we're using here relies on JS' native\n",(0,o.kt)("inlineCode",{parentName:"p"},"Math.random()")," function, which unfortunately doesn't support seeding."),(0,o.kt)("p",null,"Luckily there's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/davidbau/seedrandom"},(0,o.kt)("inlineCode",{parentName:"a"},"seedrandom"))," which\nreplaces ",(0,o.kt)("inlineCode",{parentName:"p"},"Math.random()")," with a seedable version."),(0,o.kt)("p",null,"TODO: Can we just overwrite/mixin a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"random()")," function?\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lodash/lodash/issues/3289#issuecomment-434854622"},"https://github.com/lodash/lodash/issues/3289#issuecomment-434854622")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import seedrandom from 'seedrandom'\nimport cryptoRandomString from 'crypto-random-string'\n\n// const seed = 'hello'\nconst seed = cryptoRandomString(7)\n\nconsole.log('seed:', seed)\n\nconst rng = new seedrandom(seed)\n\nfunction random(lower, upper) {\n  return lower + Math.floor(rng() * (upper - lower + 1))\n}\n\nfunction shuffle(collection) {\n  var index = -1,\n    result = [...collection],\n    length = result.length,\n    lastIndex = length - 1\n\n  while (++index < length) {\n    var rand = random(index, lastIndex)\n    result[index] = result[rand]\n  }\n\n  return result\n}\n\nconst arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\nconsole.log(arr)\nconsole.log(shuffle(arr))\n")),(0,o.kt)("h3",{id:"altering-patterns"},"Altering patterns"),(0,o.kt)("p",null,"Being that our pattern is just an array, it's easy to copy and alter it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const pattern = [\n  'C',\n  'C',\n  'D',\n  'D',\n  'D',\n  'D',\n  'D',\n  'E',\n  'F#',\n  'G#',\n  'G#',\n  'G#',\n  'G#',\n  'G#',\n  'G#',\n  'G#',\n]\n\nconst pattern2 = pattern.slice(0, 8).reverse()\n\nconsole.log(pattern2) // => ['E', 'D', 'D', 'D', 'D', 'D', 'C', 'C']\nconsole.log(pattern2.length) // => 8\n")),(0,o.kt)("p",null,"To also model velocity, we can make each value an array (or tuple):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const pattern = [\n  ['C', 127],\n  ['C', 127],\n  ['D', 127],\n  ['D', 127],\n  ['D', 127],\n  ['D', 127],\n  ['D', 127],\n  ['E', 127],\n  ['F#', 127],\n  ['G#', 127],\n  ['G#', 127],\n  ['G#', 127],\n  ['G#', 127],\n  ['G#', 127],\n  ['G#', 127],\n  ['G#', 127],\n]\n")),(0,o.kt)("h3",{id:"transforms"},"Transforms"),(0,o.kt)("p",null,"We've already seen how we can produce a new pattern based on an existing one via\nreversing it. The beauty of our patterns being arrays is that they're easy to\nslice and dice using built-in functions, or anything that works with arrays,\nsuch as the Lodash array and collection functions."),(0,o.kt)("p",null,"This can be useful for creating both melodies and harmonies. Melodies might\nreuse the same notes in a different order to create a variation, while harmonies\nmight play the same notes in a lower octave on a different instrument."),(0,o.kt)("p",null,'We\'ll refer to this as "transforming" a pattern, and there are many ways we\ncould do it:'),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(8242).Z,width:"669",height:"611"})),(0,o.kt)("p",null,"And here's how these transformations might look in code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const original = [1, 2, 3, 4]\n\nconst reverse = (arr) => [...arr].reverse()\n\n// TODO: Handle positive and negative steps > 1\nconst nudge = (arr, step = 1) => {\n  const _arr = [...arr]\n  const last = _arr.pop()\n  _arr.unshift(last)\n  return _arr\n}\n\n// TODO\nconst shuffle = (arr) => {\n  return [...arr]\n}\n\nconst transpose = (arr, step = 1) => {\n  return arr.map((n) => n + step)\n}\n\nconst swap = (arr) => {\n  const a = arr.filter((n, idx) => idx % 2 == 0)\n  const b = arr.filter((n, idx) => idx % 2 == 1)\n  return a.map((n, idx) => [n, b[idx]].reverse())\n}\n\noriginal // => 1,2,3,4\nreverse(original) // => 4,3,2,1\nnudge(original) // => 4,1,2,3\nshuffle(original) // => 3,2,1,4\ntranspose(original) // => 2,3,4,5\nswap(original) // => 2,1,4,3\n")),(0,o.kt)("p",null,"It should be noted that our patterns ",(0,o.kt)("em",{parentName:"p"},"are")," technically\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Matrix_(mathematics)"},"matrices")," (or vectors),\nand that matrix transformation is a rich topic, but beyond the scope of this\nbook."),(0,o.kt)("h2",{id:"sequencer"},"Sequencer"),(0,o.kt)("p",null,"Putting this all together, let's build a ",(0,o.kt)("inlineCode",{parentName:"p"},"sequencer()")," function that does..?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Has it's own metronome (or argument)?"),(0,o.kt)("li",{parentName:"ul"},"Has it's own sampler (or argument)?")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Not sure we need this")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const metro = metronome(context, 60)\n\nconst piano = sampler(context, 'piano')\nconst cello = sampler(context, 'cello')\n\nconst pianoPattern = somePatternGenerator()\nconst celloPattern = someOtherPatternGenerator(pianoPattern?)\n\nconst sequencer = (met, samp) => {}\n\nconst pianoSeq = sequencer(metro, piano)\nconst celloSeq = sequencer(metro, cello)\n\n// console.log(seq)\n")),(0,o.kt)("h2",{id:"learning"},"Learning"),(0,o.kt)("p",null,"Before proceeding, let's encapsulate our learning so far."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Generating patterns:")," Functions for generating new patterns \u2192 TODO.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Transforming patterns:")," Functions for transforming patterns \u2192 TODO.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Sequencing patterns:")," Functions for sequencing patterns \u2192 TODO."))))}m.isMDXComponent=!0},7207:function(e,n,t){n.Z=t.p+"assets/images/matrix-19d86487232234726660e90a8758b820.png"},8242:function(e,n,t){n.Z=t.p+"assets/images/transforms-de4db3873dd9425b7ee532f473d2720c.svg"}}]);