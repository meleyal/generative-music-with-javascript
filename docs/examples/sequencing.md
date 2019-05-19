---
title: Sequencing
---

In this chapter we're going to look at the concept of sequencing, or, how to
combine notes into patterns and play them back. It combines what we've learned
so far about notes and timing to help us build more complete musical structures.

## Sequencers

Most music apps include some form of sequencer, often called a "pattern
sequencer" or "step sequencer". At a minimum, they usually have the following
features:

- Draw or record a sequence or "pattern" of notes and their velocities.
- The number of steps (i.e. length) of the pattern can be adjusted (4 steps, 8
  steps, etc.).
- When played back, the sequencer "steps" through the pattern note by note,
  looping back around when it reaches the end of the pattern.
- The rate or "resolution" of the pattern can be adjusted. This defines how fast
  the sequencer steps through the pattern.
- Patterns themselves can also be sequenced, meaning you can cycle through or
  alternate between different patterns.
- Patterns can be copied to serve as the basis for new patterns.
- TODO: Mention pattern "banks"

An example is the
["Matrix"](https://www.propellerheads.com/en/reason/recording/matrix) pattern
sequencer found in Reason, which has all the features listed above. We're going
to build a basic emulation of the Matrix sequencer in this chapter, so let's
take a look at it:

![](assets/sequencer/matrix.png)

## Patterns

At it's most basic, we could represent a pattern as an array of note values:

```js
const pattern = [
  'C',
  'C',
  'D',
  'D',
  'D',
  'D',
  'D',
  'E',
  'F#',
  'G#',
  'G#',
  'G#',
  'G#',
  'G#',
  'G#',
  'G#'
]

console.log(pattern.length) // => 16
```

### Steps

To step through the pattern, we just need a counter to keep track of the current
step and use that as an index into the pattern array, then wrap around back to
the start when it reaches the last step:

```js
const pattern = [
  'C',
  'C',
  'D',
  'D',
  'D',
  'D',
  'D',
  'E',
  'F#',
  'G#',
  'G#',
  'G#',
  'G#',
  'G#',
  'G#',
  'G#'
]

let step = 0

setInterval(() => {
  console.log(`s${step} : ${pattern[step]}`)

  if (step < pattern.length - 1) {
    step += 1
  } else {
    step = 0
  }
}, 1000)
```

Recall that we already have our `metronome()` function. Rather than keeping
track of the step ourselves, can we use metronome to update the step? Recall
that our metronome simply counts beats upwards from 0. It has no concept of
pattern length, so it would work for the first 16 beats then continue past the
end of the pattern.

We could extend our metronome to tick in units of 8, 16 etc. but this would be
limiting as it would prevent combining patterns of different lengths.

It would be nice if we could pass our pattern our incrementing beat, and our
pattern would just know when it needed to loop back around. Enter rings!

#### Rings

Rings (or [ring buffers](https://en.wikipedia.org/wiki/Circular_buffer)) are a
special type of array where the values 'loop'. With a regular array, accessing
an element that's out of range returns undefined. Accessing an element beyond
the end of a ringed array 'wraps around' to give you back the element at the
equivalent index from the start of the array. Another way to think about it is
that the ringed array repeats itself.

```js
const array = ['a', 'b', 'c']
console.log(array[1]) // => b
console.log(array[4]) // => undefined

const fakeRing = ['a', 'b', 'c'].concat(['a', 'b', 'c'])
console.log(fakeRing[1]) // => b
console.log(fakeRing[4]) // => b
```

Let's make our own `ring()` function that takes a regular array and returns a
function we can use to access the array like a ring:

```js
const ring = arr => {
  const len = arr.length

  return index => {
    if (typeof index !== 'undefined') {
      return arr[index % len]
    } else {
      return arr
    }
  }
}

const r = ring(['a', 'b', 'c'])

console.log(r(0) == r(3), r(1) == r(4), r(2) == r(5))
```

We can now plug our newly ringed pattern into our metronome and it will loop
back around:

```js
;(async () => {
  // const metronome = await import('https://unpkg.com/@meleyal/gen/src/metro.js')
  const { metronome, ring } = await import('http://localhost:8081/src/index.js')

  const pattern = ring(['a', 'b', 'c', 'd'])

  const context = new AudioContext()

  const metro = metronome(context, 60)

  metro.on('beat', beat => {
    console.log(pattern(beat)) // => a, b, c, d, a, b...
  })

  metro.start()
})()
```

### Resolution

Resolution defines how fast a pattern plays back, relative to the current bpm,
giving you a way to control the speed of a pattern without altering the overall
speed of the music. This is useful to hear how a pattern sounds at double speed,
half speed, or any resolution the sequencer supports.

Our `metronome()` function already supports different resolutions. We can use
this to sequence two patterns at different speeds:

```js
;(async () => {
  // const metronome = await import('https://unpkg.com/@meleyal/gen/src/metro.js')
  const { metronome, ring } = await import('http://localhost:8081/src/index.js')
  const context = new AudioContext()

  const metro = metronome(context, 60)

  const pattern1 = ring(['a', 'b', 'c', 'd'])
  const pattern2 = ring([1, 2, 3, 4])

  metro.on('tick', tick => {
    console.log(pattern1(tick)) // => a, b, c, d, a, b...
  })

  metro.on('tick/16', tick => {
    console.log(pattern2(tick)) // => 1, 2, 3, 4, 1, 2...
  })

  metro.start()

  // => a, 1, 2, 3, 4, b, 1, 2, 3, 4, c, 1, 2...
})()
```

## Sequencing

### Patterns

If we define a pattern "bank" as just an array of patterns, then moving between
patterns is similar to progressing through the individual steps of a pattern,
and we can use the same `ring()` trick.

```js
;(async () => {
  // const metronome = await import('https://unpkg.com/@meleyal/gen/src/metro.js')
  const { metronome, ring } = await import('http://localhost:8081/src/index.js')
  const context = new AudioContext()

  const metro = metronome(context, 60)

  const pattern1 = ring(['a', 'b', 'c', 'd'])
  const pattern2 = ring(['e', 'f', 'g', 'h'])
  const bankA = ring([pattern1, pattern2])

  metro.on('tock', tock => {
    metro.on('tick', tick => {
      console.log(bankA(tock)(tick)) // a, b, c, d, e, f, g, h, a, b...
    })
  })

  metro.start()
})()
```

## Generating patterns

> TODO: Research if Generator functions would be useful here.

It would be nice if we could avoid writing out all of our patterns by hand. This
is a book on generative music after all! For this purpose, we'll introduce the
concept of "generators". In this context, a generator is just a name we'll give
to something that produces a pattern (not to be confused with
[JavaScript generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)).

We'll start simple, and reuse some of our learning from the previous chapter to
generate a random pattern for our sequencer to play back.

```js
import { limit, scale } from 'gen'
import {
  flow,
  sample,
  random,
  shuffle,
  take,
  fill,
  map,
  reverse
} from 'lodash/fp'

const pattern1 = flow(
  scale('cmaj'),
  limit('piano'),
  shuffle,
  take(8),
  map(n => [n, 127])
)([])

const bpm = 60
const beat = (bpm / 60) * 1000 // 1000ms = 1s
const bar = beat * 4 // 4000ms = 4s
const resolution = 16
const length = bar / resolution

let pattern = 0
let step = 0
const patterns = [pattern1, reverse(pattern1)]

navigator.requestMIDIAccess().then(midi => {
  const outputs = midi.outputs.values()
  const output = outputs.next().value

  setInterval(() => {
    console.log(`p${pattern + 1} : s${step + 1} : ${patterns[pattern][step]}`)

    const [note, velocity] = patterns[pattern][step]
    output.send([0x90, note, velocity])
    output.send([0x80, note, velocity], window.performance.now() + length)

    if (step < patterns[pattern].length - 1) {
      step += 1
    } else {
      step = 0
      if (pattern < patterns.length - 1) {
        pattern += 1
      } else {
        pattern = 0
      }
    }
  }, length)
})
```

Here, we're shuffling the notes of the scale, then taking 16 of them to produce
a random pattern. To introduce some symmetry, our second pattern is just our
first pattern reversed.

### Seeding

We can now reload the browser and get a new random pattern each time. But what
if we hit upon a pattern we like? If we reload, our pattern will be lost forever
(or at least has only a small chance of occurring again).

Random number generators often let you provide a "seed" for the purpose of
reproducing randomness. Given the same seed, you'll always get the same result.

The Lodash `shuffle` function we're using here relies on JS' native
`Math.random()` function, which unfortunately doesn't support seeding.

Luckily there's [`seedrandom`](https://github.com/davidbau/seedrandom) which
replaces `Math.random()` with a seedable version.

TODO: Can we just overwrite/mixin a custom `random()` function?
https://github.com/lodash/lodash/issues/3289#issuecomment-434854622

```js
import seedrandom from 'seedrandom'
import cryptoRandomString from 'crypto-random-string'

// const seed = 'hello'
const seed = cryptoRandomString(7)

console.log('seed:', seed)

const rng = new seedrandom(seed)

function random(lower, upper) {
  return lower + Math.floor(rng() * (upper - lower + 1))
}

function shuffle(collection) {
  var index = -1,
    result = [...collection],
    length = result.length,
    lastIndex = length - 1

  while (++index < length) {
    var rand = random(index, lastIndex)
    result[index] = result[rand]
  }

  return result
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr)
console.log(shuffle(arr))
```

### Altering patterns

Being that our pattern is just an array, it's easy to copy and alter it:

```js
const pattern = [
  'C',
  'C',
  'D',
  'D',
  'D',
  'D',
  'D',
  'E',
  'F#',
  'G#',
  'G#',
  'G#',
  'G#',
  'G#',
  'G#',
  'G#'
]

const pattern2 = pattern.slice(0, 8).reverse()

console.log(pattern2) // => ['E', 'D', 'D', 'D', 'D', 'D', 'C', 'C']
console.log(pattern2.length) // => 8
```

To also model velocity, we can make each value an array (or tuple):

```js
const pattern = [
  ['C', 127],
  ['C', 127],
  ['D', 127],
  ['D', 127],
  ['D', 127],
  ['D', 127],
  ['D', 127],
  ['E', 127],
  ['F#', 127],
  ['G#', 127],
  ['G#', 127],
  ['G#', 127],
  ['G#', 127],
  ['G#', 127],
  ['G#', 127],
  ['G#', 127]
]
```

### Transforms

We've already seen how we can produce a new pattern based on an existing one via
reversing it. The beauty of our patterns being arrays is that they're easy to
slice and dice using built-in functions, or anything that works with arrays,
such as the Lodash array and collection functions.

This can be useful for creating both melodies and harmonies. Melodies might
reuse the same notes in a different order to create a variation, while harmonies
might play the same notes in a lower octave on a different instrument.

We'll refer to this as "transforming" a pattern, and there are many ways we
could do it:

![](assets/sequencer/transforms.svg)

And here's how these transformations might look in code:

```js
const original = [1, 2, 3, 4]

const reverse = arr => [...arr].reverse()

// TODO: Handle positive and negative steps > 1
const nudge = (arr, step = 1) => {
  const _arr = [...arr]
  const last = _arr.pop()
  _arr.unshift(last)
  return _arr
}

// TODO
const shuffle = arr => {
  return [...arr]
}

const transpose = (arr, step = 1) => {
  return arr.map(n => n + step)
}

const swap = arr => {
  const a = arr.filter((n, idx) => idx % 2 == 0)
  const b = arr.filter((n, idx) => idx % 2 == 1)
  return a.map((n, idx) => [n, b[idx]].reverse())
}

original // => 1,2,3,4
reverse(original) // => 4,3,2,1
nudge(original) // => 4,1,2,3
shuffle(original) // => 3,2,1,4
transpose(original) // => 2,3,4,5
swap(original) // => 2,1,4,3
```

It should be noted that our patterns _are_ technically
[matrices](<https://en.wikipedia.org/wiki/Matrix_(mathematics)>) (or vectors),
and that matrix transformation is a rich topic, but beyond the scope of this
book.

## Sequencer

Putting this all together, let's build a `sequencer()` function that does..?

- Has it's own metronome (or argument)?
- Has it's own sampler (or argument)?

> Not sure we need this

```js
const metro = metronome(context, 60)

const piano = sampler(context, 'piano')
const cello = sampler(context, 'cello')

const pianoPattern = somePatternGenerator()
const celloPattern = someOtherPatternGenerator(pianoPattern?)

const sequencer = (met, samp) => {}

const pianoSeq = sequencer(metro, piano)
const celloSeq = sequencer(metro, cello)

// console.log(seq)
```

## Learning

Before proceeding, let's encapsulate our learning so far.

- **Generating patterns:** Functions for generating new patterns →
  [`gen`](../api/gen).

- **Transforming patterns:** Functions for transforming patterns →
  [`array/collection/transform/pattern`](../api/?).

- **Sequencing patterns:** Functions for sequencing patterns →
  [`seq`](../api/seq).
