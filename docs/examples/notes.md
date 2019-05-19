---
title: Notes
---

An obvious place to start is to understand how to create musical notes. This
example covers how to generate notes, first using synthesis, then using samples,
before building a general purpose sampler we can use to load and play back a
whole set of sampled notes.

## Single note

### Synthesised

The Web Audio API provides all the building blocks required to synthesise your
own sounds by combining oscillators and effects. The easiest way to hear some
noise is to create an
[`OscillatorNode`](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode).

An oscillator can be tuned to (or oscillate at) a specific frequency. Musical
notes are basically just the names we've given to certain frequencies. If we
know the frequency of a note, we can set the oscillator to that frequency and it
will produce that note.

Here, we set the oscillator to 440 Hz, which is the frequency of the middle C
(C4) note on a piano. The default oscillator type is `sine`, so when running
this code we hear a pure sine wave tone at middle C.

```js
// Create our global AudioContext
const context = new AudioContext()

// Create an OscillatorNode
const osc = context.createOscillator()

// Set its frequency to 440 Hz = middle C
osc.frequency.value = 440

// Connect it to the default destination (our speakers)
osc.connect(context.destination)

// Start (play) the oscillator
osc.start()
```

Sound synthesis is its own rich topic. With it you can generate an infinite
range of sounds. As mentioned in the introduction, however, it's not the focus
of this book, so we won't delve much deeper here.

### Sampled

Our focus is music composition, so rather than synthesising our own sounds,
we're instead going to delegate that work to pre-recorded instrument samples.

To play back samples we need a few elements:

- A sample audio file: e.g.
  [the middle C (C4) note played on a piano](https://unpkg.com/@meleyal/gen-samples/piano/c4.mp3)
- A way to load the audio file:
  [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- A way to decode the audio file for playback:
  [`decodeAudioData`](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData)
- A place to store the decoded audio:
  [`AudioBuffer`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer)
- A way to play back the decoded audio:
  [`AudioBufferSourceNode`](https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode)

With these, we can create something equivalent to the synthesised example above,
but this time using our pre-recorded sample. When running this code, we hear our
piano sample play from start to finish.

```js
// Create our global AudioContext
const context = new AudioContext()

// Fetch the sample from the server (the file must be hosted somewhere)
fetch('https://unpkg.com/@meleyal/gen-samples/piano/c4.mp3')
  // Get the arrayBuffer representation of the file from the response
  .then(response => response.arrayBuffer())
  .then(arrayBuffer =>
    // Decode the arrayBuffer into an audioBuffer
    context.decodeAudioData(arrayBuffer).then(audioBuffer => {
      // Create an AudioBufferSourceNode
      const sourceNode = context.createBufferSource()

      // Set its buffer property to our returned audioBuffer
      sourceNode.buffer = audioBuffer

      // Connect it to the default destination (our speakers)
      sourceNode.connect(context.destination)

      // Start (play) the sample
      sourceNode.start()
    })
  )
```

## Different notes

Our musical options would be quite limited if we could only play middle C, so
let's explore ways to make other notes.

### Pitch shifting

One approach we could take is to adjust the pitch of our sample to emulate
different notes. Thanks to the intricacies of frequency and the human ear, we
perceive a sample played at twice the speed to be twice the pitch.

```js
const context = new AudioContext()

fetch('https://unpkg.com/@meleyal/gen-samples/piano/c4.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer =>
    context.decodeAudioData(arrayBuffer).then(audioBuffer => {
      // Half speed = 22,050 Hz = -1 octave = C3
      const c3 = context.createBufferSource()
      c3.buffer = audioBuffer
      c3.playbackRate.value = 0.5

      // Full speed = 44,100 Hz = C4
      const c4 = context.createBufferSource()
      c4.buffer = audioBuffer
      c4.playbackRate.value = 1.0

      // Double speed = 88,200 Hz = +1 octave = C5
      const c5 = context.createBufferSource()
      c5.buffer = audioBuffer
      c5.playbackRate.value = 2.0

      c3.connect(context.destination)
      c4.connect(context.destination)
      c5.connect(context.destination)

      c3.start()
      c4.start()
      c5.start()
    })
  )
```

This works surprisingly well within a limited range, but pitch shifting too much
can start to sound unnatural, especially for real instruments, where we have an
expectation of how they should sound at different pitches.

### Samplers & sample libraries

A sampler, in it's basic form, is an instrument that can load and play back
samples. You can assign samples to physical triggers such as the keys of a
keyboard, so that when pressing the key, the assigned sample is played.

Sample libraries (or sample packs) are just bundles of samples, usually with a
metadata file that tells the sampler how the individual sample files map to
keyboard notes. A library maker records each individual note of an instrument,
often at various velocities (e.g. how hard a piano key is hit) and with
different techniques (e.g. whether a violin string is bowed or plucked) to
capture the full range of sounds the instrument can make. Whilst this can't
match the subtleties of how a musician might play, it's usually good enough for
composition.

> Many sample libraries don't contain recordings of all possible notes, but
> combine a subset of samples with the pitch shifting trick mentioned above.

Most sample libraries are commercial products, often bundled with software
samplers, but there are several libraries available for free use.

The [`gen-samples`](https://www.npmjs.com/package/@meleyal/gen-samples) npm
package includes a range of samples for different instruments, which we'll be
using throughout this book. It includes the
[MISStereoPiano](https://freesound.org/people/neatonk/packs/9133/) sample pack
from Freesound, which contains recordings of all the notes of a piano (A0–C8).

### Enharmonic notes

If you download and inspect the sample pack, you might notice that it doesn't
seem to actually contain _all_ of the notes we need:

```text
.
├── ...
├── c4.mp3
├── ... <- where is c#4.mp3?
├── db4.mp3
├── d4.mp3
├── ...
```

Recall from the [Music](../primers/music) chapter that some notes can be sharp
(C#, half a semitone above C) or flat (Db, half a semitone below D). Looking at
our keyboard, we can see that these are actually the same note:

![](assets/sampler/enharmonic.png)

These are known as "enharmonic" notes, which just means they are the same note
written in a different way.

### Note numbers

> TODO: Show mapping note names to MIDI numbers and why that's useful.

When we get into generating notes and patterns later in the book, it will be
useful to be able to translate between note names and numbers.

MIDI already has a simple convention, so we'll use that.

A piano keyboard has 88 keys (52 white, 36 black) spanning 7 octaves, going from
A0 to C8.

MIDI note numbers go from 0 (C-1) to 127 (G9) to encompasses the full range of
notes produced by most instruments: https://en.wikipedia.org/wiki/Range_(music).

Let's write two functions `noteNumber()` to get the MIDI note number given a
note name, and `noteName()` to get the the note name from the MIDI note number.

```js
const noteNumber = name => {
  const re = /(?<note>\w(\w|\W)?)(?<octave>\d{1})/u
  const {
    groups: { note, octave }
  } = re.exec(name)

  const notes = {
    C: 0,
    'C#': 1,
    Db: 1,
    D: 2,
    'D#': 3,
    Eb: 3,
    E: 4,
    F: 5,
    'F#': 6,
    Gb: 6,
    G: 7,
    'G#': 8,
    Ab: 8,
    A: 9,
    'A#': 10,
    Bb: 10,
    B: 11
  }

  return notes[note] + 12 + 12 * octave
}

console.log(noteNumber('C0')) // => 12
console.log(noteNumber('C4')) // => 60
console.log(noteNumber('Gb4')) // => 66
console.log(noteNumber('G4')) // => 67
console.log(noteNumber('A4')) // => 69
console.log(noteNumber('A#4')) // => 70
console.log(noteNumber('Bb4')) // => 70
console.log(noteNumber('B4')) // => 71
```

```js
const noteName = num => {
  const numbers = {
    0: 'C',
    1: 'C#/Db',
    2: 'D',
    3: 'D#/Eb',
    4: 'E',
    5: 'F',
    6: 'F#/Gb',
    7: 'G',
    8: 'G#/Ab',
    9: 'A',
    10: 'A#/Bb',
    11: 'B'
  }

  // Normalize the note number so it maps to our 0-indexed `numbers` map
  const norm = num - 12

  // Dividing the note number by 12 (the number of notes in an octave) gives us
  // the octave that the note falls into.
  const octave = Math.floor(norm / 12)

  // Remove the octaves to get a valid index into our numbers map
  const note = norm - 12 * octave

  return numbers[note]
    .split('/')
    .map(name => name + octave)
    .join('/')
}

// console.log(noteName(0)) // => C0
console.log(noteName(12)) // => C0
console.log(noteName(14)) // => D0
console.log(noteName(21)) // => A0
console.log(noteName(24)) // => C1
console.log(noteName(60)) // => C4
console.log(noteName(80)) // => G#5/Ab5
console.log(noteName(107)) // => B7
```

## Note control

This is a pretty good start, but our sampler is missing a few essential
features.

Currently, once triggered, our notes play at full volume from start to finish.
This is equivalent to playing a piano and pressing each key with the same
velocity and holding it for the same length of time.

To model how a real piano is played, where notes may be quiet, loud, short, or
long, we need a way to control our samples as they are playing.

### Volume

We can achieve all of the above using a
[`GainNode`](https://developer.mozilla.org/en-US/docs/Web/API/GainNode), which
is essentially just a volume control. We can control the volume of any signal
passing through it by setting its `gain.value`.

Returning back to our simple oscillator example, we can control its volume by
inserting a `GainNode` between it and our speakers.

```js
const context = new AudioContext()
const now = context.currentTime
const osc = context.createOscillator()
const volume = context.createGain()

osc.connect(volume)
volume.connect(context.destination)

volume.gain.value = 0.5
osc.start()
```

### Envelope

TODO

### Reverb

TODO

## Sampler v1

We've already seen how we can load and play back a single sample. We can use the
same principles to load and play back an entire set of samples.

Let's create the following:

- A `sampler()` function that takes a map of samples we want to load, and
  returns a function for playing them back
- A `sampleMap()` function that maps the 86 note names to their respective
  sample files, taking into account enharmonic naming (e.g. `C#4` maps to
  `db4.mp3`).

```js
const sampler = async (context, samples) => {
  const buffers = await Promise.all(
    Object.keys(samples).map(note =>
      fetch(samples[note])
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(buffer => Object.create({ note, buffer }))
    )
  )

  return note => {
    const notes = typeof note == 'string' ? [note] : note
    const now = context.currentTime
    notes.map(n => {
      const buffer = buffers.find(b => b.note == n).buffer
      const sourceNode = context.createBufferSource()
      sourceNode.buffer = buffer
      sourceNode.start(now)
      sourceNode.stop(now + buffer.duration)
      sourceNode.connect(context.destination)
    })
  }
}

const sampleMap = baseUrl => {
  const notes = 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B'.split(',')
  const octaves = [1, 2, 3, 4, 5, 6, 7]
  const extension = '.mp3'

  const enharmonic = note => {
    switch (note) {
      case 'A#':
        return 'bb'
      case 'C#':
        return 'db'
      case 'D#':
        return 'eb'
      case 'F#':
        return 'bb'
      case 'G#':
        return 'ab'
      default:
        return note.toLowerCase()
    }
  }

  return notes
    .flatMap(note =>
      octaves.map(octave => {
        const name = `${note}${octave}`
        const path = `${baseUrl}${enharmonic(note)}${octave}${extension}`
        return { [name]: path }
      })
    )
    .reduce((a, b) => Object.assign(a, b), {})
}

;(async () => {
  const context = new AudioContext()

  const piano = await sampler(
    context,
    sampleMap('https://unpkg.com/@meleyal/gen-samples/piano/')
  )

  // Single C note
  piano('C4')

  // C major chord
  piano(['C4', 'E4', 'G4'])
})()
```

## Sampler v2

```js
import { map, find, isString, defaults } from 'lodash'
import { instruments as instrumentSamples } from 'gen-samples'
import { reverbs as reverbSamples } from 'gen-samples'

export const sampler = async (context, samples, globalOptions = {}) => {
  const { pan, volume, reverb } = defaults(globalOptions, {
    volume: 0.8,
    pan: 0,
    reverb: 'room'
  })

  const buffers = await createSampleBuffers(context, samples)
  const reverbNode = await createReverb(context, context.destination, reverb)
  const panNode = createPan(context, reverbNode, pan)
  const gainNode = createGain(context, panNode, volume)

  return (note, localOptions) => {
    const buffer = find(buffers, { note }).buffer
    play(context, gainNode, buffer, localOptions)
  }
}

const load = async (context, path) => {
  return fetch(path)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
}

const loadSample = async (context, path, note) => {
  return load(context, path).then(audioBuffer => {
    return {
      note,
      buffer: audioBuffer
    }
  })
}

const loadImpulse = async (context, path) => {
  return load(context, path).then(audioBuffer => {
    return {
      buffer: audioBuffer
    }
  })
}

const createSampleBuffers = async (context, samples) => {
  const sampleMap = isString(samples) ? instrumentSamples[samples] : samples

  return await Promise.all(
    map(sampleMap, (path, note) => loadSample(context, path, note))
  )
}

const createReverb = async (context, output, impulse) => {
  const impulseBuffer = await loadImpulse(context, reverbSamples[impulse])
  const convolverNode = context.createConvolver()
  convolverNode.buffer = impulseBuffer.buffer
  convolverNode.connect(output)
  return convolverNode
}

const createGain = (context, output, volume) => {
  const now = context.currentTime
  const gainNode = context.createGain()
  gainNode.gain.setValueAtTime(volume, now)
  gainNode.connect(output)
  return gainNode
}

const createPan = (context, output, pan) => {
  const panNode = context.createStereoPanner()
  panNode.pan.value = pan
  panNode.connect(output)
  return panNode
}

const createSource = (context, output, buffer) => {
  const now = context.currentTime
  const sourceNode = context.createBufferSource()
  sourceNode.buffer = buffer
  sourceNode.start(now)
  sourceNode.stop(now + buffer.duration)
  sourceNode.connect(output)
  return sourceNode
}

const createEnvelope = (context, output, volume, attack, release) => {
  const now = context.currentTime
  const zero = 0.00001 // value must be positive for exponentialRamp
  const gainNode = context.createGain()
  gainNode.gain
    .setValueAtTime(0, now)
    .linearRampToValueAtTime(volume, now + attack)
    .exponentialRampToValueAtTime(zero, now + attack + release)
  gainNode.connect(output)
  return gainNode
}

const play = (context, output, buffer, options = {}) => {
  const { volume, attack, release } = defaults(options, {
    volume: 0.8,
    attack: 0,
    release: 100
  })

  const envelopeNode = createEnvelope(context, output, volume, attack, release)
  createSource(context, envelopeNode, buffer)
}
```

## Learning

TODO: Mention that these functions are part of `gen`, and we'll use them going
forward.
