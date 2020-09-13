---
title: Notes
---

A good place to start is to understand how to create a musical note. This guide
covers how to generate a single note, first using synthesis, then using a
sample.

## Synthesis

The Web Audio API provides all the building blocks required to synthesise your
own sounds by combining oscillators and effects. The easiest way to hear some
noise is to create an
[`OscillatorNode`](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode).

An oscillator can be tuned to (or oscillate at) a specific frequency. Musical
notes are just the names we've given to certain frequencies. If we know the
frequency of a note, we can set the oscillator to that frequency and it will
produce that note.

Here, we set the oscillator to 440 Hz, which is the frequency of the middle C
(C4) note on a piano. The default oscillator type is `sine`, so when running
this code we hear a pure sine wave tone at middle C.

```js
const context = new AudioContext()
const osc = context.createOscillator()
osc.frequency.value = 440
osc.connect(context.destination)
osc.start()
```

With an understanding of sound synthesis you can generate an infinite range of
sounds. As mentioned in the introduction, however, it's not the focus of this
book, so we won't delve much deeper into synthesis here.

## Sample

Our focus is music composition, so rather than synthesising our own sounds,
we're instead going to delegate that work to pre-recorded instrument samples.

To play back samples we need a few elements:

- A sample audio file: e.g.
  [the middle C (C4) note played on a piano](https://unpkg.com/@meleyal/tuplet/samples/piano/c4.mp3)
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
// Create the Web Audio environment.
const context = new AudioContext()

// Load a sample from the server.
fetch('sample.mp3')
  .then((response) => {
    // Get the `arrayBuffer` representation of the sample.
    return response.arrayBuffer()
  })
  .then((arrayBuffer) => {
    // Decode the `arrayBuffer` into actual audio.
    return context.decodeAudioData(arrayBuffer)
  })
  .then((audioBuffer) => {
    // Create an `AudioBufferSourceNode`.
    const sourceNode = context.createBufferSource()

    // Assign the audio to its buffer.
    sourceNode.buffer = audioBuffer

    // Connect the `sourceNode` to the destination output (our speakers).
    sourceNode.connect(context.destination)

    // Start playback of the sample.
    sourceNode.start()
  })
```

## Learning

We now know the steps involved in loading a sample, decoding it, and playing it
back. **Tuplet** includes the [`sample()`](api/index.md#sample) function which
abstracts away some of these details for us:

```js
const { sample } = tuplet

;(async () => {
  const context = new AudioContext()
  const s = await sample(context, 'sample.mp3')
  s.connect(context.destination)
  s.start()
})()
```

## Playing Different Notes

Our musical options would be quite limited if we could only play middle C, so
let's explore ways to make other notes.

### Pitch Shifting

One approach we could take is to adjust the pitch of our sample to emulate
different notes. Thanks to the intricacies of frequency and the human ear, we
perceive a sample played at twice the speed to be twice the pitch.

```js
const context = new AudioContext()

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
```

This works surprisingly well within a limited range, but pitch shifting too much
can start to sound unnatural, especially for real instruments, where we have an
expectation of how they should sound at different pitches.

### Samplers and Sample Libraries

A better approach, and one used in most music production, is to have a sample
for each note. This brings us to the topic of samplers and sample libraries.

A sampler, at its most basic, is an instrument that can load and play back
samples. You can assign samples to physical triggers such as the keys of a
keyboard, so that when pressing the key, the assigned sample is played.

Sample libraries (or sample packs) are bundles of samples, usually with a
metadata file that tells the sampler how the individual sample files map to
keyboard notes. A library maker records each individual note of an instrument,
often at various velocities (e.g. how hard a piano key is hit) and with
different techniques (e.g. whether a violin string is bowed or plucked) to
capture the full range of sounds the instrument can make. Whilst this can't
match the subtleties of how a musician might play, it's usually good enough for
composition.

> **Note:** Sample libraries don't always contain recordings of all possible
> notes, but combine a subset of samples with the pitch shifting trick mentioned
> above.

Most sample libraries are commercial products, often bundled with software
samplers, but there are several libraries available for free use. **Tuplet**
includes a range of samples for different instruments, which we'll be using
throughout this book. It includes a
[piano](https://github.com/meleyal/tuplet/tree/master/src/samples/piano) sample
pack, which contains recordings of all the notes of a piano (A0–C8).

### Sampler v1

We've already seen how we can load and play back a single sample. We can use the
same principles to load and play back an entire set of samples.

Let's create a `sampler()` function that takes an audio context and a map of
samples we want to load, and returns a function for playing them back:

```js
const sampler = async (context, samples) => {
  const buffers = await Promise.all(
    Object.keys(samples).map((note) =>
      fetch(samples[note])
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
        .then((buffer) => Object.create({ note, buffer }))
    )
  )

  return (note) => {
    const notes = typeof note == 'string' ? [note] : note
    const now = context.currentTime
    notes.map((n) => {
      const buffer = buffers.find((b) => b.note == n).buffer
      const sourceNode = context.createBufferSource()
      sourceNode.buffer = buffer
      sourceNode.start(now)
      sourceNode.connect(context.destination)
    })
  }
}
;(async () => {
  const context = new AudioContext()

  const piano = await sampler(context, {
    C4: 'samples/piano/c4.mp3',
    D4: 'samples/piano/d4.mp3',
    E4: 'samples/piano/e4.mp3',
    F4: 'samples/piano/f4.mp3',
    G4: 'samples/piano/g4.mp3',
    // ...etc.
  })

  // Single C note
  piano('C4')

  // C major chord
  piano(['C4', 'E4', 'G4'])
})()
```

## Mapping Notes to Samples

Rather than writing out a sample map of 88 notes by hand, we can automate this
process with a `sampleMap()` function. But first, we'll need to understand a
small nuance of sample libraries.

### Enharmonic Notes

If you inspect the piano samples, you might notice that they don't seem to
actually include _all_ of the notes we need:

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

![](/img/sampler/enharmonic.svg)

These are known as "enharmonic" notes, which just means they are the same note
written in a different way. We can write a simple `enharmonic()` function to
convert in either direction:

```js
const enharmonic = (note) => {
  switch (note) {
    case 'A#':
      return 'Bb'
    case 'Bb':
      return 'A#'
    case 'C#':
      return 'Db'
    case 'Db':
      return 'C#'
    case 'D#':
      return 'Eb'
    case 'Eb':
      return 'D#'
    case 'F#':
      return 'Gb'
    case 'Gb':
      return 'F#'
    case 'G#':
      return 'Ab'
    case 'Ab':
      return 'G#'
    default:
      return note
  }
}

enharmonic('C#') // => Db
enharmonic('Db') // => C#
```

### Sample Map

With our knowledge of enharmonics in hand, let's write a `sampleMap()` function
that maps the 88 note names to their respective sample files, taking into
account enharmonic naming (e.g. `C#4` maps to `db4.mp3`).

Different sample libraries may use different naming conventions and file
formats, so to account for that, our function will take a `pathFn` function to
construct the final url to the sample.

> **Note:** Here we're mapping over all octaves and notes, but most instruments
> have a more limited range than the piano. A fully-fledged `sampleMap()`
> implementation might allow for specifying a given range to map over.

```js
const { enharmonic } = tuplet

const sampleMap = (pathFn) => {
  const notes = 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B'.split(',')
  const octaves = [1, 2, 3, 4, 5, 6, 7]

  return notes
    .flatMap((note) =>
      octaves.map((octave) => {
        const name = `${note}${octave}`
        return { [name]: pathFn(note, octave) }
      })
    )
    .reduce((a, b) => Object.assign(a, b), {})
}

const samples = sampleMap((note, octave) => {
  const baseUrl = 'https://example.com'
  const noteName = enharmonic(note).toLowerCase()
  return `${baseUrl}/samples/piano/${noteName}${octave}.mp3`
})

console.log(samples)

// Logs:
//
//  {
//    A1: "http://localhost:3001/samples/piano/a1.mp3",
//    A2: "http://localhost:3001/samples/piano/a2.mp3",
//    A3: "http://localhost:3001/samples/piano/a3.mp3",
//    A4: "http://localhost:3001/samples/piano/a4.mp3",
//    A5: "http://localhost:3001/samples/piano/a5.mp3",
//    ...etc.
//  }
```

### Note Numbers

When we get into generating notes and patterns later in the book, it will be
useful to be able to translate between note names and numbers. MIDI, which we
covered briefly in the [Music](../primers/music) chapter, already has a
convention for note numbers, so we'll use that.

As we know, a piano keyboard has 88 keys spanning 7 octaves, going from A0 to
C8. MIDI note numbers go from 0 (C-1) to 127 (G9), which encompasses the full
range of notes produced by
[most instruments](<https://en.wikipedia.org/wiki/Range_(music)>).

Let's write two functions `noteNumber()` to get the MIDI note number given a
note name, and `noteName()` to get the the note name from the MIDI note number.

```js
const noteNumber = (name) => {
  const re = /(?<note>\w(\w|\W)?)(?<octave>\d{1})/u
  const {
    groups: { note, octave },
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
    B: 11,
  }

  return notes[note] + 12 + 12 * octave
}

noteNumber('C0') // => 12
noteNumber('C4') // => 60
noteNumber('Gb4') // => 66
noteNumber('G4') // => 67
noteNumber('A4') // => 69
noteNumber('A#4') // => 70
noteNumber('Bb4') // => 70
noteNumber('B4') // => 71
```

```js
const noteName = (num) => {
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
    11: 'B',
  }

  // Normalize the note number so it maps to our 0-indexed `numbers` map.
  const norm = num - 12

  // Dividing the note number by 12 (the number of notes in an octave) gives us
  // the octave that the note falls into.
  const octave = Math.floor(norm / 12)

  // Remove the octaves to get a valid index into our numbers map.
  const note = norm - 12 * octave

  return numbers[note]
    .split('/')
    .map((name) => name + octave)
    .join('/')
}

noteName(12) // => C0
noteName(14) // => D0
noteName(21) // => A0
noteName(24) // => C1
noteName(60) // => C4
noteName(80) // => G#5/Ab5
noteName(107) // => B7
```

### Sampler v2

Putting this all together, we can combine our `sampleMap()` function with a
modified version of `sampler()` that can play notes given either a note name or
note number:

```js
const { noteName, enharmonic, sampleMap } = tuplet

const sampler = async (context, samples) => {
  const buffers = await Promise.all(
    Object.keys(samples).map((note) =>
      fetch(samples[note])
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
        .then((buffer) => Object.create({ note, buffer }))
    )
  )

  const parseNote = (note) => {
    if (Array.isArray(note)) {
      return note.map(parseNote)
    } else if (typeof note === 'number') {
      return [noteName(note)]
    } else {
      return [note]
    }
  }

  return (note) => {
    const notes = parseNote(note)
    const now = context.currentTime
    notes.map((n) => {
      const buffer = buffers.find((b) => b.note == n).buffer
      const sourceNode = context.createBufferSource()
      sourceNode.buffer = buffer
      sourceNode.start(now)
      sourceNode.connect(context.destination)
    })
  }
}

;(async () => {
  const context = new AudioContext()

  const samples = sampleMap((note, octave) => {
    const baseUrl = 'https://example.com'
    const noteName = enharmonic(note).toLowerCase()
    return `${baseUrl}/samples/piano/${noteName}${octave}.mp3`
  })

  const piano = await sampler(context, samples)

  // Single C note
  piano('C4')

  // C major chord
  piano(['C4', 'E4', 'G4'])

  // Single C note
  piano(60)

  // C major chord
  piano([60, 64, 67])
})()
```

## Controlling Notes

This is a good start, but our sampler is still missing a few essential features.

Currently, once triggered, our notes play at full volume from start to finish.
This is equivalent to playing a piano and pressing each key with the same
velocity and holding it for the same length of time.

To model how a real piano is played, where notes may be quiet, loud, short, or
long, we need a way to control our samples as they are playing.

### Volume

We can control the volume of a sample with a
[`GainNode`](https://developer.mozilla.org/en-US/docs/Web/API/GainNode), which
changes the volume of any signal passing through it according to its
`gain.value`.

> We use gain and volume interchangeably here, but technically _gain_ is the
> change applied, resulting in a different _volume_.

Returning back to our simple oscillator example, we can control its volume by
inserting a `GainNode` between it and our speakers.

```js
const context = new AudioContext()
const osc = context.createOscillator()
const volume = context.createGain()

osc.connect(volume)
volume.connect(context.destination)

volume.gain.value = 0.5
osc.start()
```

### Envelope

To control how long a note lasts, we can use what's known as an _envelope_. An
envelope controls how a sound evolves over time, and is broken down into four
phases:

- Attack: when a note is triggered, how long it takes to reach full volume.
- Decay: how long it takes to drop to the sustain level.
- Sustain: the constant volume after decay until a note is released.
- Release: how quickly the sound fades after a note is released.

These four phases define what's known as an _ADSR envelope_. For our purposes,
we can simplify this down to just the attack and release phases, which will
allow us to control how a sound peaks, and how long it lasts, known as an _AR
envelope_:

![](/img/notes/envelopes.svg)

Envelopes can be modelled with a `GainNode`, taking advantage of the fact that
its `gain` property is an
[`AudioParam`](https://developer.mozilla.org/en-US/docs/Web/API/AudioParam) that
can be controlled over time:

```js
const context = new AudioContext()
const osc = context.createOscillator()
const envelope = context.createGain()

const now = context.currentTime
const zero = 0.00001 // value must be positive for exponentialRamp
const volume = 1 // full volume
const attack = 1 // note takes 1 second to reach full volume
const release = 3 // note lasts for 3 seconds

envelope.gain
  .setValueAtTime(0, now)
  .linearRampToValueAtTime(volume, now + attack)
  .exponentialRampToValueAtTime(zero, now + attack + release)

osc.connect(envelope)
envelope.connect(context.destination)
osc.start()
```

### Panning

Panning describes where a sound is placed in the stereo field, and emulates the
effect of sounds coming from different physical spaces. When mixing different
sounds together, panning can give each sound it's own place in the mix.

For our purposes, we're only working with two audio channels: left and right.
Panning essentially just controls how "much" of a sound goes to each channel.

To pan sounds we can use a
[`StereoPannerNode`](https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode).
Setting its `pan.value` determines where the sound is panned, ranging from `-1`
being fully left, `0` being centre, to `1` being fully right.

```js
const context = new AudioContext()
const osc = context.createOscillator()
const panner = context.createStereoPanner()

panner.pan.value = -1 // fully left

osc.connect(panner)
panner.connect(context.destination)
osc.start()
```

### Compression

Compression, in simple terms, is the process of modifying, or _limiting_, the
quietness and/or loudness of a sound signal.

When combining multiple sounds, their volumes (or _amplitudes_) are added
together, which can result in distortion if their combined amplitudes exceed the
range of our speakers. By running our audio signal through a compressor, we can
ensure that the resulting signal never exceeds or drops below a given threshold.

The example below shows combining two oscillators without compression. If you
turn up your volume, you should notice that the sound starts to distort at some
point:

```js
const context = new AudioContext()
const osc1 = context.createOscillator()
const osc2 = context.createOscillator()

osc1.frequency.value = 440
osc2.frequency.value = 880

osc1.connect(context.destination)
osc2.connect(context.destination)

osc1.start()
osc2.start()
```

Compare this with the example below where we run both oscillators through a
compressor. Even when increasing the volume to maximum, there should be no
distortion:

```js
const context = new AudioContext()
const now = context.currentTime

const osc1 = context.createOscillator()
const osc2 = context.createOscillator()
const compressor = context.createDynamicsCompressor()

osc1.frequency.value = 440
osc2.frequency.value = 880

compressor.threshold.setValueAtTime(-50, now)
compressor.knee.setValueAtTime(40, now)
compressor.ratio.setValueAtTime(12, now)
compressor.attack.setValueAtTime(0, now)
compressor.release.setValueAtTime(0.25, now)

osc1.connect(compressor)
osc2.connect(compressor)
compressor.connect(context.destination)

osc1.start()
osc2.start()
```

### Reverb

TODO: Impulse responses.

```js
const reverbNode = await createReverb(context, context.destination, reverb)

const createReverb = async (context, output, impulse) => {
  const impulseBuffer = await loadImpulse(context, reverbSamples[impulse])
  const convolverNode = context.createConvolver()
  convolverNode.buffer = impulseBuffer.buffer
  convolverNode.connect(output)
  return convolverNode
}
```

### Sampler v3

Putting all of these concepts together, we can build a sampler.

```js
const sampler = async (context, samples) => {
  const buffers = await Promise.all(
    Object.keys(samples).map((note) =>
      fetch(samples[note])
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
        .then((buffer) => Object.create({ note, buffer }))
    )
  )

  const compressorNode = context.createDynamicsCompressor()
  compressorNode.threshold.value = -50
  compressorNode.knee.value = 40
  compressorNode.ratio.value = 12
  compressorNode.attack.value = 0
  compressorNode.release.value = 0.25

  const gainNode = context.createGain()

  return (note, options) => {
    const now = context.currentTime
    const notes = typeof note == 'string' ? [note] : note
    const defaults = { volume: 1, duration: Infinity }
    const { volume, duration } = Object.assign(defaults, options)

    notes.map((n) => {
      const buffer = buffers.find((b) => b.note == n).buffer
      const sourceNode = context.createBufferSource()
      sourceNode.buffer = buffer
      sourceNode.start()

      const zero = 0.00001 // value must be positive for exponentialRamp
      gainNode.gain.value = volume
      gainNode.gain.exponentialRampToValueAtTime(
        zero,
        now + Math.min(duration, buffer.duration)
      )

      sourceNode.connect(gainNode)
      gainNode.connect(compressorNode)
      compressorNode.connect(context.destination)
    })
  }
}

tuplet.run(async (context) => {
  const piano = await sampler(context, tuplet.sampleMap('samples/piano/'))

  // Single C note
  piano('C4', { volume: 0.5 })

  // C major chord
  piano(['C4', 'E4', 'G4'], { volume: 0.8, duration: 2 })
})
```

## Learning

TODO: Mention that these functions are part of Tuplet, and we'll use them going
forward.
