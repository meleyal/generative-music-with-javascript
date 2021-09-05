---
title: Plugins
---

Sketching out a plugin interface.

<!-- <canvas id="canvas" style={{width: '100%', height: '300px'}} /> -->

```js
const { createEnv, inst, fx, seq, music, plugins } = tuplet
const { c4, d4, e4 } = music.pitches
const { qn } = music.durations

const { magenta } = plugins

seq.use(magenta)

const notes = seq([
  [c4, qn],
  [d4, qn],
  [e4, qn],
])

// console.log(notes.repeat(2).viz('canvas'))

;(async () => {
  const bpm = 120.0
  const env = createEnv()

  env.connect(await fx.compressor(env), await fx.reverb(env), env.master)

  const continued = await notes.continue()
  console.log(continued)

  const s = seq(continued).quantize(bpm)

  const piano = await inst.sampler(env, 'piano')

  seq.loop(s, piano)
})()
```
