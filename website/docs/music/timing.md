---
title: Timing
---

The next step is to look at rhythm/tempo. Or how to play our notes over time. If
we think of music in terms of axes, pitch is on the y axis, with time stretching
out ahead on the x axis. This gives us the building block of rhythm, which is a
foundation of melody.

## Timing models

### Standard JavaScript timing

JS has `setInterval` & `setTimeout`.

To repeat a note we _could_ do the following:

```js
// Repeat every 1 second
setInterval(() => {
  const sourceNode = context.createBufferSource()
  sourceNode.buffer = audioBuffer
  sourceNode.connect(context.destination)
  sourceNode.start()
}, 1000)
```

The problem with JavaScript's standard `setInterval` and `setTimeout` functions
is that they are not guaranteed to run exactly on schedule. Depending what else
is happening on the page, they may be delayed while the browser catches up. This
is fine for most use-cases, where millisecond delays in e.g. showing a
notification would be unnoticeable, but with music these lags can be very
obvious.

### Web Audio API timing

Instead, the Web Audio API has the concept of scheduling. When you create an
`AudioContext`, it begins counting from 0. We can check it's current time as
follows:

```js
const context = new AudioContext()

console.log(context.currentTime) // => 0

setTimeout(() => {
  console.log(context.currentTime) // => 0.9984580498866213
}, 1000)
```

> #### `context.currentTime` uses seconds _not_ milliseconds
>
> Unlike most timing-related features in JavaScript, the audio clock uses
> seconds, not milliseconds, with all scheduling happening relative to
> `currentTime`.

We can't control this internal clock, but we can schedule events relative to it:

```js
const context = new AudioContext()
const now = context.currentTime

// Play immediately
const sourceNode1 = context.createBufferSource()
sourceNode1.buffer = audioBuffer
sourceNode1.connect(context.destination)
sourceNode1.start(now)

// Play after 1 second
const sourceNode2 = context.createBufferSource()
sourceNode2.buffer = audioBuffer
sourceNode2.connect(context.destination)
sourceNode2.start(now + 1)

// Play after 2 seconds
const sourceNode3 = context.createBufferSource()
sourceNode3.buffer = audioBuffer
sourceNode3.connect(context.destination)
sourceNode3.start(now + 2)
```

> #### `AudioBufferSourceNode`s can only be played once
>
> It's worthing noting that in the above code we create three separate
> `sourceNode`s, each using the same `audioBuffer`. Once started, an
> `AudioBufferSourceNode` cannot be played again. The expensive part of working
> with samples is loading and decoding them, so the idea is to keep around
> `AudioBuffer`s, while freely creating and discarding `AudioBufferSourceNode`s.
> They are intended to be "fire and forget", and are automatically garbage
> collected when they finish playing.

## Metronome

Most music-making apps have some form of metronome, something that emits a
steady pulse given a BPM (beats per minute). Instruments and effects sync to
this pulse, ensuring that everything plays back in time.

### Version 1

We can create a basic metronome that emits a sound every beat using an
`OscillatorNode` and taking advantage of its
[`onended`](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/onended)
event. Passing in a callback, we can then schedule anything we want relative to
the beat.

```js
const context = new AudioContext()

const metronome = (bpm = 60, callback, currentBeat = 0) => {
  const now = context.currentTime

  // How many beats fit in a single second at the given bpm? e.g.
  // 60 bpm = 1 beat per second
  // 120 bpm = 2 beats per second
  // 240 bpm = 4 beats per second
  const beatsPerSecond = bpm / 60.0

  // Our base unit is a quarter note. This defines how many quarter notes fit
  // in a single bar. For now let's use common 4/4 time.
  const quarterBeatsPerBar = 4

  // Multiplying the number of beats in 1 second by the number of quarter
  // beats in a bar, we get the actual number of beats we want in a single bar e.g.
  // 1 beat per second * 4 = 4 beats per bar
  // 2 beat per second * 4 = 8 beats per bar
  // 4 beat per second * 4 = 16 beats per bar
  const beatsPerBar = beatsPerSecond * quarterBeatsPerBar

  // Dividing the number of quarter beats by our actual beats per bar gives us
  // the length of a single beat in milliseconds.
  const beatLength = quarterBeatsPerBar / beatsPerBar

  // console.log(beatsPerSecond, beatsPerBar, beatLength)
  // return

  const freq = currentBeat % beatsPerBar == 1 ? 440 : 880
  const zero = 0
  const gainNode = context.createGain()
  const osc = context.createOscillator()
  gainNode.connect(context.destination)
  osc.connect(gainNode)

  gainNode.gain.linearRampToValueAtTime(zero, now + beatLength / 16)

  osc.frequency.value = freq
  osc.start(now)
  osc.stop(now + beatLength)

  callback(now)

  osc.onended = () => {
    metronome(bpm, callback, (currentBeat += 1))
    osc = null
    gainNode = null
  }
}

metronome(60, (now) => {
  // Here we can trigger any audio we want
  console.log('boop!', now)
})
// metronome(120)
// metronome(240)
```

For more details on how we derive the note length from the BPM, refer to the
[Music Primer](../primers/music#rhythm) chapter, which breaks this down with
illustrations.

### Version 2

Currently our metronome only enables us to schedule notes to occur exactly on
the beat. To increase our options we need to increase the resolution of the
events the metronome emits.

If we think of time as the x axis of a grid, resolution means how we subdivide
that grid.

As we saw in the [Music chapter](../primers/music), in traditional music
notation we might call these divisions a "half note" or "quarter note", (or
"minim" or "crotchet"), while in a pattern sequencer they are usually
represented as fractions. Both refer to the same thing: how to subdivide a bar.

Common subdivisions are 1/2, 1/4, 1/8, 1/16, 1/32, 1/64 and 1/128 (plus some
triplet divisions which we'll ignore for now).

If we presume a time signature of 4/4 (4 beats per bar), these resolutions break
down as follows:

![](/img/sequencer/resolution.svg)

Rather than passing in a callback to be triggered on the beat, we can instead
extend our metronome to emit events at each subdivision and listen for those.

```js
const metronome = (context, bpm = 60, options = { audible: false }) => {
  const secondsPerBeat = 60.0 / bpm
  const beatsPerBar = 4

  const wholeNote = secondsPerBeat * beatsPerBar
  const sixtyFourthNote = wholeNote / 64

  const gainNode = context.createGain()
  gainNode.connect(context.destination)
  let osc

  const tick = (currentBeat = 1, wholeBeat = 1) => {
    const resolution = sixtyFourthNote
    const now = context.currentTime

    gainNode.gain.value = 0

    osc = context.createOscillator()
    osc.connect(gainNode)
    osc.start()
    osc.stop(now + resolution)

    if (currentBeat === 1 || currentBeat % 16 === 0) {
      gainNode.gain.value = 1
      gainNode.gain.linearRampToValueAtTime(0, now + resolution)
      osc.frequency.value = 400
      callbacks['beat'](wholeBeat)
      wholeBeat += 1
      // callbacks['beat/4'](currentBeat)
    } else if (currentBeat % 8 === 0) {
      gainNode.gain.value = 1
      gainNode.gain.linearRampToValueAtTime(0, now + resolution)
      osc.frequency.value = 800
      callbacks['beat/8']()
    } else if (currentBeat % 4 === 0) {
      gainNode.gain.value = 1
      gainNode.gain.linearRampToValueAtTime(0, now + resolution)
      osc.frequency.value = 1600
      callbacks['beat/16']()
    } else if (currentBeat % 2 === 0) {
      gainNode.gain.value = 1
      gainNode.gain.linearRampToValueAtTime(0, now + resolution)
      osc.frequency.value = 3200
      callbacks['beat/32']()
    } else {
      gainNode.gain.value = 1
      gainNode.gain.linearRampToValueAtTime(0, now + resolution)
      osc.frequency.value = 6400
      callbacks['beat/64']()
    }

    osc.onended = () => {
      tick((currentBeat += 1), wholeBeat)
    }
  }

  const stop = () => {
    osc.onended = null
    osc = null
  }

  const callbacks = {
    beat: () => null,
    'beat/4': () => null,
    'beat/8': () => null,
    'beat/16': () => null,
    'beat/32': () => null,
    'beat/64': () => null,
  }

  const on = (event, fn) => {
    callbacks[event] = fn
  }

  return {
    start: tick,
    stop,
    on,
  }
}

const context = new AudioContext()

const metro = metronome(context, 60)

metro.on('beat', (beat) => {
  console.log('beat', beat)
})

// metro.on('beat/64', beat => {
//   console.log('beat/64')
// })

metro.start()

setTimeout(() => {
  metro.stop()
}, 4000)
```

### Version 3

Async: Callbacks, Promises, Event Emitters, Observables

|            | Sync     | Async      |
| ---------- | -------- | ---------- |
| Single     | Variable | Promise    |
| Collection | Array    | Observable |

Observable (spec, RxJS)

### Note length

If our metronome is ticking away at 60 bpm, we know that each beat lasts 1
second. A bar of 4 beats will therefore last 4 seconds. Knowing this, we just
need to divide the bar length by the resolution to give us our note length.

We can encapsulate this knowledge into a `resolution()` function that given a
bpm and resolution, returns the length of our note:

Our `metronome()` function tells us the current bpm at each tick...

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

## Learning

TODO: `metronome` is part of Tuplet package, see API docs.

While the musical results are less than inspiring, we now have a way to generate
two key aspects of music: notes/pitch and rhythm/time, which combined can give
us melody. With that in mind, we're ready to move on to a more interesting
example.

## Further Reading

- [A Tale of Two Clocks - Scheduling Web Audio with Precision](https://www.html5rocks.com/en/tutorials/audio/scheduling/)
