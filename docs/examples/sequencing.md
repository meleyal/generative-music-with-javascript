---
title: Sequencing
---

In this chapter we're going to look at the concept of sequencing, or, how to
combine notes into patterns and play them back. It combines what we've learned
so far about notes and timing to help us build more complete musical structures.

Most music apps include some form of sequencer, often called a "pattern
sequencer" or "step sequencer". At a minimum, they usually have the following
features:

- You can draw or record a sequence or "pattern" of notes and their velocities.
- A rest (no note) is a note with 0 velocity.
- The number of steps (i.e. length) of the pattern can be adjusted (4 beats, 8
  beats, etc.).
- When played back, the sequencer "steps" through the pattern note by note,
  looping back around when it reaches the end.
- The "resolution" of the pattern can be adjusted. This defines how fast the
  sequencer steps through the pattern.
- Patterns can also be sequenced, meaning you can cycle through or alternate
  between different patterns.
- Patterns can be copied to serve as the basis for new patterns.

A good example is the
["Matrix"](https://www.propellerheads.com/en/reason/recording/matrix) pattern
sequencer found in Reason, which we're going to try and emulate in this chapter.
The relevant parts of the interface are highlighted below:

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

  const context = new AudioContext()

  const pattern = ring(['a', 'b', 'c', 'd'])

  metronome(context, 60, (now, beat) => {
    console.log(pattern(beat))
  })
})()
```

### Resolution

Resolution defines how fast a pattern plays back, relative to the current bpm,
giving you a way to control the speed of a pattern without altering the overall
speed of the music. This is useful if you want to hear how a pattern sounds at
double speed, or half speed, or any resolution the sequencer supports.

The Matrix sequencer supports the following resolutions: 1/2, 1/4, 1/8, 1/16,
1/32, 1/64 and 1/128 (plus some triplet divisions which we'll ignore for now).

If we presume a time signature of 4/4 (4 beats per bar), these resolutions break
down as follows:

![](assets/sequencer/resolution.svg)

As we saw in the [Music chapter](../primers/music), in traditional music
notation we might call these divisions a "half note" or "quarter note", (or
"minim" or "crotchet"), while in a pattern sequencer they are usually
represented as fractions. Both refer to the same thing: how to subdivide a bar.

Let's say our metronome is ticking away at 60 bpm, meaning each beat lasts 1
second. A bar of 4 beats will therefore last 4 seconds. Knowing this, we just
need to divide the bar length by the resolution to give us the length of our
notes.

We can encapsulate this knowledge into a `resolution()` function that given a
bpm and resolution, returns the length of our note:

```js
const resolution = (bpm, res) => {
  const beat = bpm / 60 // 1 second
  const bar = beat * 4 // 4 seconds
  return bar / res
}
const bpm = 60

resolution(bpm, 1) // => 4 seconds
resolution(bpm, 2) // => 2 seconds
resolution(bpm, 4) // => 1 second
resolution(bpm, 8) // => 0.5 seconds
resolution(bpm, 16) // => 0.25 seconds
resolution(bpm, 32) // => 0.125 seconds
resolution(bpm, 64) // => 0.0625 seconds
resolution(bpm, 128) // => 0.03125 seconds
```

```js
const bpm = 60
const beat = bpm / 60 // 1 second
const bar = beat * 4 // 4 seconds

bar / 1 // => 4 seconds
bar / 2 // => 2 seconds
bar / 4 // => 1 second
bar / 8 // => 0.5 seconds
bar / 16 // => 0.25 seconds
bar / 32 // => 0.125 seconds
bar / 64 // => 0.0625 seconds
bar / 128 // => 0.03125 seconds
```

Our `metronome()` function tells us the current bpm at each tick...

## Sequencing

### Patterns

If we define our pattern "bank" as just an array of patterns, then moving
between patterns is similar to progressing through the individual steps of a
pattern:

```js
let pattern = 0
let step = 0
const patterns = [
  [
    [60, 127],
    [60, 127],
    [62, 127],
    [62, 127],
    [62, 127],
    [60, 127],
    [62, 127],
    [62, 127]
  ],
  [
    [62, 127],
    [64, 127],
    [66, 127],
    [68, 127],
    [68, 127],
    [68, 127],
    [68, 127],
    [68, 127]
  ]
]

setInterval(() => {
  console.log(`p${pattern + 1} : s${step + 1} : ${patterns[pattern][step]}`)
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
}, 1000)

/*

Output:

p1 : s1 : 60,127
p1 : s2 : 60,127
p1 : s3 : 62,127
p1 : s4 : 62,127
p1 : s5 : 62,127
p1 : s6 : 60,127
p1 : s7 : 62,127
p1 : s8 : 62,127
p2 : s1 : 62,127
p2 : s2 : 64,127
p2 : s3 : 66,127
...

*/
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

Putting this all together, we can already build a basic version of our pattern
sequencer:

```js
const bpm = 60
const beat = (bpm / 60) * 1000 // 1000ms = 1s
const bar = beat * 4 // 4000ms = 4s
const resolution = 4
const length = bar / resolution

let pattern = 0
let step = 0
const patterns = [
  [
    [60, 127],
    [60, 127],
    [62, 127],
    [62, 127],
    [62, 127],
    [60, 127],
    [62, 127],
    [62, 127]
  ],
  [
    [62, 127],
    [64, 127],
    [66, 127],
    [68, 127],
    [68, 127],
    [68, 127],
    [68, 127],
    [68, 127]
  ]
]

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

### Sequencer v2

Let's combine the above ideas into a new and improved version of our pattern
sequencer.

```js
```

## Learning

Before proceeding, let's encapsulate our learning so far.

- **Generating patterns:** Functions for generating new patterns →
  [`gen`](../api/gen).

- **Transforming patterns:** Functions for transforming patterns →
  [`array/collection/transform/pattern`](../api/?).

- **Sequencing patterns:** Functions for sequencing patterns →
  [`seq`](../api/seq).
