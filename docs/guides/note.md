---
title: Note
---

An obvious place to start is to understand how to create a musical note. This
guide covers how to generate a single note, first using synthesis, then using a
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
  [the middle C (C4) note played on a piano](https://unpkg.com/@meleyal/gen/samples/piano/c4.mp3)
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
const context = new AudioContext()

fetch('{{PACKAGE_URL}}/samples/piano/c4.mp3')
  .then(response => response.arrayBuffer())
  .then(arrayBuffer =>
    context.decodeAudioData(arrayBuffer).then(audioBuffer => {
      const sourceNode = context.createBufferSource()
      sourceNode.buffer = audioBuffer
      sourceNode.connect(context.destination)
      sourceNode.start()
    })
  )
```
