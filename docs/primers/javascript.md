---
title: JavaScript
---

JavaScript will be abbreviated as JS.

ES6, Book recommendation –
[Eloquent JavaScript](https://eloquentjavascript.net/)?

## Why the browser?

Other environments are available. But browser is a good platform to build on,
visualisation, collaboration.

## Modules, NPM

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [webpack](https://webpack.js.org/guides/getting-started/)

Mention module support in browser?

## Web Audio APIs

As we saw in Chapter 3, MIDI.

https://webaudio.github.io/web-midi-api/

Numbers are base 16 (hex?). Why? Can they just be integers?

```js
let note = 60 // middle C
let noteOn = 0x90 // 144 = channel 1 note on
let noteOff = 0x80 // 128 = channel 1 note off
let velocity = 0x7f // 127 = maximum velocity
let length = 4000 // 4 seconds = 4 beats at 60 bpm

output.send([noteOn, note, velocity])
output.send([noteOff, note, velocity], window.performance.now() + length)
```

- https://github.com/djipco/webmidi
- https://github.com/google/audion
- https://github.com/spite/WebAudioExtension
- https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#developer-switches

## Audio MIDI setup

1. Open "Audio MIDI Setup"
2. Double-click "IAC Driver"
3. Check "Device is online"

## Browser test

1. Open DevTools

2. Enter the following in the console:

   ```
   navigator.requestMIDIAccess().then(midi => {
   const outputs = midi.outputs.values();
   console.log(outputs.next().value);
   });
   ```

3. Result should look like:

   ```
   MIDIOutput {connection: "closed", id: "-138376787", manufacturer: "Apple Inc.", name: "IAC Driver Bus 1", state: "connected", …}
   ```

Other languages to check out:

SuperCollider PureData Overtone Chuck Sonic Pi Max/MSP Tidal Cycles
