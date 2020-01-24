---
title: Probability
---

> TODO

- Probability/Chance
- Markov Models

## Probability

By applying probability, we can still employ randomness, but weigh the odds to
favour specific outcomes. Adjusting the weights, we can influence how our
program behaves.

An easy way to think about this is by visualizing a pie chart. The more pieces
of the pie we assign a given outcome, the more chance that outcome will occur.

![](assets/walker/probability.svg)

```js
navigator.requestMIDIAccess().then(midi => {
  const outputs = midi.outputs.values()
  let output = outputs.next().value

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function playNote(note, length, velocity = 127) {
    let noteOn = 144 // channel 1 note on
    let noteOff = 128 // channel 1 note off

    output.send([noteOn, note, velocity])
    output.send([noteOff, note, velocity], window.performance.now() + length)
  }

  let startNote = random(21, 108)
  let length = 250

  function play(note) {
    let prob = 0.4
    let num = Math.random()
    let nextNote

    if (num < prob) {
      // 40% chance of going down 7 steps
      nextNote = Math.max(note - 7, 21)
    } else {
      // 60% chance of going up 5 steps
      nextNote = Math.min(note + 5, 108)
    }

    let timer = setTimeout(() => {
      playNote(nextNote, length)
      clearTimeout(timer)
      play(nextNote)
    }, length)
  }

  play(startNote)
})
```

Here, we've weighed the odds to favour going up the scale. We'll sometimes dip
downwards, but the results will always trend upwards over time.

## Markov chains

> TODO

> The resulting stochastic system is called a Markov chain. The number of
> previous values observed is called the order of the Markov chain.

## Normal distribution

Probability is one way to reign in randomness. Another way is to emulate a
common pattern found in nature, where values tend to cluster around a certain
range, otherwise known as normal (or Gaussian) distribution (in contrast to pure
randomness, which aims for uniform distribution). This maps well to music, where
melodies tend to use a narrow range of notes and steps.

![](assets/walker/distributions.svg)

```js
import random from 'random'
import clamp from 'lodash'
import { instrument, metronome, midi } from 'gen'

midi().then(output => {
  function playNote(note, length, velocity) {
    let noteOn = 144
    let noteOff = 128

    output.send([noteOn, note, velocity])
    output.send([noteOff, note, velocity], window.performance.now() + length)
  }

  // A mean of middle C with a small deviation
  let noteGen = random.normal(60, 3)

  // A mean of half velocity with a large deviation
  let velGen = random.normal(64, 20)

  let length = 200

  setInterval(() => {
    // We need to 'clamp' these values to prevent them straying out of range
    let note = clamp(Math.round(noteGen()), 21, 108)
    let velocity = clamp(Math.round(velGen()), 0, 127)
    playNote(note, length, velocity)
  }, length)
})
```

Here, the notes cluster around middle C and medium velocity. By increasing the
deviation from the mean we can introduce more variation.

## Perlin noise

Describe what Perlin noise is.

```js
import rangeMap from 'range-map'
import tumult from 'tumult'

import { inst, midi } from 'gen'

midi().then(output => {
  const perlin = new tumult.Perlin1(Math.random())
  const length = 100
  let xoff = 0.0

  setInterval(() => {
    xoff = xoff + 0.01
    const note = rangeMap(perlin.gen(xoff), -1, 1, 21, 108)
    const velocity = rangeMap(perlin.gen(xoff), -1, 1, 0, 127)
    inst(output, note, velocity, length)
  }, length)
})
```

The point so far is that there are many ways to generate streams of notes.
What's lacking is any musical order.

## Scales

Instead of choosing from all notes, we can instead limit our choices to a
particular scale. In fact, we've already been using a scale, the chromatic one.
This is valid, see
[Twelve-tone technique](https://en.wikipedia.org/wiki/Twelve-tone_technique),
but lacks 'musicality' (part of what those composers were getting away from).

For our purposes we can say that a scale is a pattern of white and black keys.
This pattern can be described in terms of intervals. See the Music chapter for
details. These notes sound like they 'belong together'.

C Major scale is just all the white notes, starting at C to next C.

![](assets/walker/scales.svg)

All notes:

```
C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C
60  61  62  63  64  65  66  67  68  69  70  71  72
```

C Major notes:

```
C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C
60  -   62  -   64  65  -   67  -   69  -   71  72
```

If we express that as intervals:

```
C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C
1   -   2   -   2   1   -   2   -   2   -   2   1
```

If we express that as indexes:

```
C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C
0   -   2   -   4   5   -   7   -   9   -   11  12
```

How can we pick that pattern?

```js
import {
  chain,
  range,
  drop,
  dropRight,
  chunk,
  filter,
  includes,
  random,
  sample
} from 'lodash'
import { inst, midi } from 'gen'

const allNotes = range(21, 109)

const cmaj = [0, 2, 4, 5, 7, 9, 11]

const octaves = chain(allNotes)
  .drop(3) // start at first C
  .dropRight(1) // drop last C
  .chunk(12) // split into octaves
  .value()

const notes = chain(octaves)
  .map(o => {
    // select only the notes in the scale
    return filter(o, (n, idx) => {
      return includes(cmaj, idx)
    })
  })
  .flatten() // flatten the octaves
  .value()

navigator.requestMIDIAccess().then(midi => {
  const outputs = midi.outputs.values()
  const output = outputs.next().value

  const length = 300

  setInterval(() => {
    const note = sample(notes)
    const velocity = random(64, 96)

    output.send([0x90, note, velocity])
    output.send([0x80, note, velocity], window.performance.now() + length)
  }, length)
})
```

Now all the notes are in the same scale so things sound a little less random /
more cohesive. Given a single stream of notes this is less jarring than total
randomness.

## Polyphony

Now that we can play in key, we can introduce a second voice and know it will
harmonize with the first.

```js
import { metro, limit2, scale } from 'gen'
import { flow, sample, random, partition, identity } from 'lodash/fp'

const [low, high] = flow(
  scale('cmaj'),
  limit2('piano'),
  partition(n => n < 64)
)([])

navigator.requestMIDIAccess().then(midi => {
  const outputs = midi.outputs.values()
  const output = outputs.next().value

  setInterval(() => {
    const note = sample(high)
    const velocity = random(64, 96)
    output.send([0x90, note, velocity])
    output.send([0x80, note, velocity], window.performance.now() + 400)
  }, 400)

  setInterval(() => {
    const note = sample(low)
    const velocity = random(32, 64)
    output.send([0x91, note, velocity])
    output.send([0x81, note, velocity], window.performance.now() + 1200)
  }, 1200)
})
```

Here we're dividing the notes and sending the high notes to one channel, and the
low notes to a second channel. We're sampling from the same set of notes so we
can be sure they will harmonise. The results are more interesting as hearing how
the two voices interact adds a layer of depth to our music.

## Learning

We covered two main topics in this chapter: 1) we can use various methods to
generate sequences of numbers with different characteristics that we can use as
the input to our programs; and 2) we can apply music theory to coerce that data
into something that makes more musical sense.

With that in mind, we can encapsulate our learning into two new utilities:

- **Generative:** Functions for generating data we can use in our programs,
  either algorithms we write ourselves, or ones we might use from other
  libraries → [`gen`](../api/gen).

- **Music:** A place to wrap up our musical knowledge and handle the details of
  mapping that to midi → [`music`](../api/music).

With these in our toolbelt, we could rewrite our last example as follows:

```js
import { midi, send, metro, limit, scale } from 'gen'
import { flow, sample, random, partition } from 'lodash/fp'

midi.then(output => {
  const ch1 = send(output, 0x90)
  const ch2 = send(output, 0x91)
  const [low, high] = flow(
    scale('cmaj'),
    limit('piano'),
    partition(n => n < 64)
  )([])

  loop(() => ch1(sample(high), random(64, 96)), 400)
  loop(() => ch2(sample(low), random(32, 64)), 1200)
})
```

Right now our music is basically just streams of notes. To take it further, we
need a way to generate cohesive patterns of notes, and sequence them with other
patterns. As it happens, that's just the goal of the next chapter!

### Notes

```js
import {
  chain,
  range,
  drop,
  dropRight,
  chunk,
  filter,
  includes,
  random,
  sample
} from 'lodash'
import { inst, midi } from 'gen'

const allNotes = range(21, 109)

const cmaj = [0, 2, 4, 5, 7, 9, 11]

const octaves = chain(allNotes)
  .drop(3) // start at first C
  .dropRight(1) // drop last C
  .chunk(12) // split into octaves
  .value()

const notes = chain(octaves)
  .map(o => {
    // select only the notes in the scale
    return filter(o, (n, idx) => {
      return includes(cmaj, idx)
    })
  })
  .flatten() // flatten the octaves
  .value()

navigator.requestMIDIAccess().then(midi => {
  const outputs = midi.outputs.values()
  const output = outputs.next().value

  const length = 300

  setInterval(() => {
    const note = sample(notes)
    const velocity = random(64, 96)

    output.send([0x90, note, velocity])
    output.send([0x80, note, velocity], window.performance.now() + length)
  }, length)
})
```

```js
import { output } from 'midi'
import { Piano } from 'inst/piano'
import random from 'random'

export default class {
  constructor() {
    console.log('Walker')
  }

  async walk() {
    const midi = await output()
    const piano = new Piano(midi)
    const length = 200

    const mean = 0
    const sd = 1

    const normal = random.normal(mean, sd)

    console.log(normal())

    function play(note) {
      let nextNote = normal()

      const timer = setTimeout(() => {
        piano.play(nextNote, length)
        clearTimeout(timer)
        play(nextNote)
      }, length)
    }

    // play(normal());
  }
}
```

```js
navigator.requestMIDIAccess().then(midi => {
  const outputs = midi.outputs.values()
  let output = outputs.next().value

  function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function playNote(note, length, velocity = random(0, 127)) {
    let noteOn = 144 // channel 1 note on
    let noteOff = 128 // channel 1 note off

    output.send([noteOn, note, velocity])
    output.send([noteOff, note, velocity], window.performance.now() + length)
  }

  let startNote = random(21, 108)
  let length = 250

  function play(note) {
    let prob = 0.4
    let num = Math.random()
    let nextNote

    if (num < prob) {
      // 40% chance of going down 7 steps
      nextNote = Math.max(note - 7, 21)
    } else {
      // 60% chance of going up 5 steps
      nextNote = Math.min(note + 5, 108)
    }

    let timer = setTimeout(() => {
      playNote(nextNote, length)
      clearTimeout(timer)
      play(nextNote)
    }, length)
  }

  // play(startNote);
})
```
