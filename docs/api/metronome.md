---
title: metronome
---

The `metronome` functions handle timing and control playback.

https://github.com/overtone/overtone/blob/f6d414f884f1b6d3166195b49276174efddf2cf2/src/overtone/music/rhythm.clj

```js
const metro = metronome(60)

metroStart(metro)
metroStop(metro)

// Returns the duration of one metronome 'tick' in milliseconds
metroTick(metro) // => 1000

// Returns the duration of one bar in milliseconds
metroTock(metro) // => 4000

metroBpm(metro, [120]) // => Get the current bpm or change the bpm to 'new-bpm'

const runSequencer = m => {}

runSequencer(metro)
```
