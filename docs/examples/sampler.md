---
title: Sampler
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
  [the middle C (C4) note played on a piano](https://unpkg.com/@meleyal/gen/src/samples/piano/c4.mp3)
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
fetch('https://unpkg.com/@meleyal/gen/src/samples/piano/c4.mp3')
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

fetch('https://unpkg.com/@meleyal/gen/src/samples/piano/c4.mp3')
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
keyboard, so that when hitting the key, the assigned sample is played.

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
samplers, but there are a range libraries available for free use. See the
[appendix](../appendix/links) for details.

### Sampler V1

We've already seen how we can load and play back a single sample. We can use the
same principles to load and play back an entire set of samples. For this
example, we're using the
[MISStereoPiano](https://freesound.org/people/neatonk/packs/9133/) sample pack
from Freesound, which contains all the notes from A0–C8.

> [Gen.js](https://www.npmjs.com/settings/meleyal/packages) includes a range of
> samples for different instruments, including the MISStereoPiano pack. We're
> using [unpkg.com](https://unpkg.com/) as a convenient way to serve the files
> from the npm package.

Let's create a `sampler` function that takes a map of samples we want to load,
and returns a function for playing them back:

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
    const notes = typeof note == 'String' ? [note] : note
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
;(async () => {
  const context = new AudioContext()

  const piano = await sampler(context, {
    C4: 'https://unpkg.com/@meleyal/gen/src/samples/piano/c4.mp3',
    E4: 'https://unpkg.com/@meleyal/gen/src/samples/piano/e4.mp3',
    G4: 'https://unpkg.com/@meleyal/gen/src/samples/piano/g4.mp3'
    // ...etc.
  })

  // C major chord
  piano('C4')
  piano('E4')
  piano('G4')
})()
```

### Enharmonic notes

If you inspect the sample pack, you might notice that it doesn't seem to
actually contain _all_ of the notes we need:

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

We need a way to teach our sampler this, so let's write a `sampleMap()` function
that takes care of mapping the 86 note names to their respective sample files,
taking into account enharmonic naming (i.e. `C#4` maps to `db4.mp3`).

```js
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
        return note
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

console.log(sampleMap('https://unpkg.com/@meleyal/gen/src/samples/piano/'))
```

With these functions, we can express our sampler quite concisely:

```js
```
