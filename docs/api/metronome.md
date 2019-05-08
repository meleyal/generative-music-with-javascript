---
title: metronome
---

The `metronome` functions handle timing and control playback.

```js
const metro = metronome(60)

start(metro)
stop(metro)

// Returns the duration of one metronome 'tick' in milliseconds
tick(metro) // => 1000

// Returns the duration of one bar in milliseconds
tock(metro) // => 4000

bpm(metro, [120]) // => Get the current bpm or change the bpm to 'new-bpm'

const runSequencer = m => {}

runSequencer(metro)
```
