---
title: Metronome
---

## Repeating note

### `setInterval` & `setTimeout`

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

### Scheduling

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

### Metronome

Most music-making apps have some form of metronome, something that emits a
steady pulse given a BPM (beats per minute). Instruments and effects sync to
this pulse, ensuring that everything plays back in time.

We can create a basic metronome that emits a sound every beat using an
`OscillatorNode` and taking advantage of its
[`onended`](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/onended)
event. Passing in a callback, we can then schedule anything we want relative to
the beat.

```js
const context = new AudioContext()

const metronome = (bpm = 60, callback, currentBeat = 1) => {
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
  const zero = 0.00001

  let gainNode = context.createGain()
  let osc = context.createOscillator()
  gainNode.connect(context.destination)
  osc.connect(gainNode)

  gainNode.gain.exponentialRampToValueAtTime(zero, now + beatLength / 16)

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

metronome(60, now => {
  // Here we can trigger any audio we want
  console.log('boop!', now)
})
// metronome(120)
// metronome(240)
```

For more details on how we derive the note length from the BPM, refer to the
[Music Primer](../primers/music#rhythm) chapter, which breaks this down with
illustrations.

While the musical results are less than inspiring, we now have a way to generate
two key aspects of music: notes/pitch and rhythm/time, which combined can give
us melody. With that in mind, we're ready to move on to a more interesting
example.
