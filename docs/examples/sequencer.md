---
title: Sequencer
---

In this chapter we'll be modelling a pattern sequencer, namely the
[Matrix](https://www.propellerheads.com/en/reason/recording/matrix) sequencer
found in Reason by Propellerhead Software. This is not strictly a generative
idea, but it will give us a structure on which to plug in more generative ideas
later. Being able to generate and sequence patterns will help us build up more
complete musical structures.

The Matrix sequencer lets you draw in a pattern of notes and their velocities.
It plays each step of the pattern one at a time, then loops back around to the
start. A rest (no note) is just a note with 0 velocity. The number of steps
(i.e. the length) of the pattern can be adjusted, as well as the "resolution",
or how fast the sequencer steps through the pattern. If a pattern of 16 steps at
1/16 resolution is full speed, the same pattern at 1/8 resolution would play
back at half that speed. In other words each step would last twice as long.
Patterns are stored in banks and can also be sequenced, automatically cycling or
jumping between them. Patterns can be copied and pasted between banks to serve
as the basis for new patterns.

The relevant parts of the interface are highlighted below:

![](assets/sequencer/matrix.png)

How might we go about modelling this?

## Patterns

At it's most basic, a pattern is just an array of note values:

```js
//               C   .   .   D   .   .   .   .   .   E   F#  G#  .   .   .   .
const pattern = [60, 60, 60, 62, 62, 62, 62, 62, 62, 64, 66, 68, 68, 68, 68, 68]

pattern.length // => 16
```

To also model velocity, we can make each value an array (or tuple):

```js
const pattern = [
  [60, 127],
  [60, 127],
  [60, 127],
  [62, 127],
  [62, 127],
  [62, 127],
  [62, 127],
  [62, 127],
  [62, 127],
  [64, 127],
  [66, 127],
  [68, 127],
  [68, 127],
  [68, 127],
  [68, 127],
  [68, 127]
]
```

Being that our pattern is just an array, it's easy to copy and alter it:

```js
const pattern2 = flow(
  slice(0, 8),
  shuffle
)(pattern)

console.log(pattern2) /* =>
[
  [60, 127],
  [60, 127],
  [62, 127],
  [62, 127],
  [62, 127],
  [60, 127],
  [62, 127],
  [62, 127]
]
*/

pattern2.length // => 8
```

## Steps

To step through the pattern, we just need a counter to keep track of the current
step and use that as an index into the pattern array:

```js
let step = 0
const pattern = [
  [60, 127],
  [60, 127],
  [62, 127],
  [62, 127],
  [62, 127],
  [60, 127],
  [62, 127],
  [62, 127]
]

setInterval(() => {
  console.log(`s${step + 1} : ${pattern[step]}`)
  if (step < pattern.length - 1) {
    step += 1
  } else {
    step = 0
  }
}, 1000)

/*

Output:

s1 : 60,127
s2 : 60,127
s3 : 62,127
s4 : 62,127
s5 : 62,127
s6 : 60,127
s7 : 62,127
s8 : 62,127
s1 : 60,127
s2 : 60,127
...

*/
```

## Resolution

Resolution is slightly more tricky, but this is where our
[`metro`](../api/metro) utility will come in handy.

The Matrix sequencer supports the following resolutions: 1/2, 1/4, 1/8, 1/16,
1/32, 1/64 and 1/128 (plus some triplet divisions which we'll ignore for now).

If we presume a time signature of 4/4 (4 beats per bar), the resolutions break
down as follows:

![](assets/sequencer/resolution.svg)

As we saw in the [Music chapter](../primers/music), in traditional music
notation we might call these divisions a "half note" or "quarter note", (or
"minim" or "crotchet"), while in a pattern sequencer they are usually
represented as fractions. Both refer to the same thing: how to subdivide a bar.

Let's say our metronome is ticking away at 60 bpm, meaning each beat lasts 1
second. A bar of 4 beats will therefore last 4 seconds, or 4000 milliseconds.
Knowing this, we just need to divide the bar length by the resolution to give us
the length of our notes.

```js
const bpm = 60
const beat = (bpm / 60) * 1000 // 1000ms = 1s
const bar = beat * 4 // 4000ms = 4s

bar / 1 // => 4000
bar / 2 // => 2000
bar / 4 // => 1000
bar / 8 // => 500
bar / 16 // => 250
bar / 32 // => 125
bar / 64 // => 62.5
bar / 128 // => 31.25
```

## Sequencing

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

## First version

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

## Generators

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

## Seeding

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

## Transforms

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

## Learning

Before proceeding, let's encapsulate our learning so far.

- **Generating patterns:** Functions for generating new patterns →
  [`gen`](../api/gen).

- **Transforming patterns:** Functions for transforming patterns →
  [`array/collection/transform/pattern`](../api/?).

- **Sequencing patterns:** Functions for sequencing patterns →
  [`seq`](../api/seq).

## Second version

Let's combine the above ideas into a new and improved version of our pattern
sequencer.

```js
```

## Harmony

2 part harmony 4 part harmony
