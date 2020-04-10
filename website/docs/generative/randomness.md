---
title: Randomness
---

Notes:

- Pure randomness (seeds)
- Range
- Perlin, Gaussian
- Random number generation
- Apply to: pitch, velocity, timing

"Mining the possibility space / unseen"

Reference:

- https://medium.com/@metalex9/randomizing-program-execution-with-random-number-generators-a7bb613861f9

This guide shows how to use randomness to introduce variation to our music,
specifically through the idea of a random walk.

> Music that relies at least to some degree on randomness is said to be
> stochastic, or aleatoric.

## Random Walk

> Another approach to generating a melody is sometimes called a random walk. The
> idea is to start on a particular note and treat the sequence of random numbers
> as intervals, rather than as pitches.

In 2D graphics, a random walk involves drawing a path by repeatedly choosing a
random direction in which to move. On this 2D plane, each step can be one of
four directions: up, down, left, or right (plus a fifth choice if you include
not moving as an option). Given a certain set of rules, this might look as
follows:

![](/gen/img/walker/walk.png)

How might we apply this idea to music? As we've seen, a piano has 88 keys,
giving it a range from A0 to C8, which map to the MIDI numbers 21–108. We can
treat this as a 1D plane, and say that at each moment we have 4 choices: 1) play
a higher note; 2) play a min note; 3) play the same note; 4) play nothing. The
range 21-108 and the 4 choices define the "possibility space" for our random
walk.

![](/gen/img/walker/piano.svg)

## Random Notes

Let's start simple and just play random notes by repeatedly picking a random
number between 21 and 108. This gives us a random distribution, where each of
the 88 notes have an equal chance of being played.

### Random Numbers

For this example, we'll need a way to generate a random number within a given
range, which JS doesn't have out-of-the-box, so let's create one:

```js
const random = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1))
}

console.log(random(1, 10)) // => a random number between 1 and 10
```

### Random Stream

Before actually making any sounds, let's just create a regular stream of random
numbers within our desired range. We just need to convert our random number
function to an Observable:

```js
const { interval } = rxjs
const { map } = rxjs.operators

const random = (min, max) => {
  return map((x) => min + Math.floor(Math.random() * (max - min + 1)))
}

const numbers$ = interval(1000).pipe(random(21, 108))

numbers$.subscribe(console.log) // => a random number between 21 and 108 every second
```

### Random Notes

Now, let's plug in the `sampler()` function from Gen.js and hear some notes:

```js
const { interval } = rxjs
const { map } = rxjs.operators
const { sampler, samples } = gen

const random = (min, max) => {
  return map((x) => min + Math.floor(Math.random() * (max - min + 1)))
}

// TODO: our piano samples only support this range, should be 21, 108
const notes$ = interval(1000).pipe(random(24, 107))

;(async () => {
  const context = new AudioContext()
  const piano = await sampler(context, samples.piano)

  notes$.subscribe((note) => {
    piano(note, { duration: 2 })
  })
})()
```

Let's refactor this using the `program()` structure from Gen.js:

```js
const { interval } = rxjs
const { map } = rxjs.operators
const { program, sampler, samples, random } = gen

const model = {
  note: null,
  piano: null,
}

const messages = (model, send) => ({
  note: () => {
    const notes$ = interval(1000).pipe(map((x) => random(21, 108)))
    notes$.subscribe((note) => send({ note }))
  },

  piano: async () => {
    const piano = await sampler(model.context, samples.piano)
    send({ piano })
  },
})

const render = (model) => {
  const { piano, note } = model
  piano(note, { duration: 2 })
}

program({ model, messages, render })
```

```js
const {
  program,
  sampler2,
  sampleMap2,
  metronome,
  resolution,
  random,
  noteName,
} = gen

// -- MODEL

const model = {
  bpm: 60,
  tick: 0,
  note: null,
  sampler: null,
}

// -- MESSAGES

const messages = (model, send) => {
  const { context, bpm } = model

  const msgs = {
    tick: () => {
      const metro = resolution(metronome(context, bpm), 4)
      metro.subscribe((tick) => send({ tick, ...msgs.note() }))
    },

    note: () => {
      const rng = random(24, 107)
      return { note: noteName(rng()) }
    },

    sampler: async () => {
      const samples = await sampleMap2(
        context,
        '{{PACKAGE_URL}}/samples/piano/'
      )
      send({ sampler: sampler2(context, samples) })
    },
  }

  return msgs
}

// -- RENDER

const render = (model) => {
  const { sampler, note } = model

  sampler(note, { duration: 2 })
}

// -- PROGRAM

program({ model, messages, render })
```

This probably sounds like the bleeps and bloops you imagine when you hear the
phrase "computer generated music". At strict intervals and constant velocity the
results sound rather mechanical.

## More randomness

By also applying some randomness to the timing and velocity, we can add more
nuance.

```js
import { instrument, metronome, midi } from 'gen'

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

midi().then((output) => {
  const metro = metronome(10)
  const inst = instrument({ output, metro })

  // Play a random note, at a random velocity, for a random length of time
  metro.onTick(() => inst(rand(21, 108), rand(0, 127), rand(250, 2000)))
  metro.start()
})
```

This makes things feel more natural, emulating the variations of timing and
touch of a human player.

Whilst initially quite interesting though, pure randomness doesn't hold our
attention for long, as, by definition, it lacks the patterns and structure that
are a key aspect of our enjoyment of music.

## Relative notes

If we think about taking a walk, even if we're just wandering, we're not taking
random steps and leaps. Our movements have direction, each step is related to
the previous ones to keep us moving along a certain path.

Rather than choosing randomly, we can pick our next note relative to the current
one.

```js
navigator.requestMIDIAccess().then((midi) => {
  const outputs = midi.outputs.values()
  let output = outputs.next().value

  function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function playNote(note, length, velocity) {
    let noteOn = 0x90 // 144 = channel 1 note on
    let noteOff = 0x80 // 128 = channel 1 note off

    output.send([noteOn, note, velocity])
    output.send([noteOff, note, velocity], window.performance.now() + length)
  }

  let startNote = random(21, 108)
  let startVelocity = random(0, 127)
  let step = 5

  function play(note, velocity) {
    let nextNote = random(Math.max(note - step, 21), Math.min(note + step, 108))
    let length = 500
    let nextVelocity = random(
      Math.max(velocity - step, 0),
      Math.min(velocity + step, 127)
    )
    let timer = setTimeout(() => {
      playNote(nextNote, length, nextVelocity)
      clearTimeout(timer)
      play(nextNote, nextVelocity)
    }, length)
  }

  play(startNote, startVelocity)
})
```

This gives us something that has more of a flow and sense of direction. We've
constrained the options from all possible notes, to just those that are 5 notes
(a 5th) either up or down from the current note. This gives us some control, but
we're still very much at the whim of chaos to determine our path.
