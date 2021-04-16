---
title: Canon
---

```js
/**
 * "Row Your Boat"
 *
 * Adapted from https://git.io/fjyri
 */

const { createEnv, fx, inst, seq, music } = tuplet
const { c4, d4, e4, f4, g4, c5, rest } = music.pitches
const { wn, qn, den, sn, hn, ent } = music.durations

;(async () => {
  const rests = [[rest, wn]]

  const notes = [
    [c4, qn],
    [c4, qn],
    [c4, den],
    [d4, sn],
    [e4, qn],

    [e4, den],
    [d4, sn],
    [e4, den],
    [f4, sn],
    [g4, hn],

    [c5, ent],
    [c5, ent],
    [c5, ent],
    [g4, ent],
    [g4, ent],
    [g4, ent],
    [e4, ent],
    [e4, ent],
    [e4, ent],
    [c4, ent],
    [c4, ent],
    [c4, ent],

    [g4, den],
    [f4, sn],
    [e4, den],
    [d4, sn],
    [c4, hn],
  ]

  const bpm = 90.0
  const env = createEnv()

  // env.connect(await fx.compressor(env), await fx.reverb(env), env.master)

  const piano = await inst.sampler(env, 'piano')

  const theme = seq(notes).repeat(2).quantize(bpm)

  const res1 = seq
    .concat(seq(rests), seq(notes).repeat(2).transpose(12))
    .quantize(bpm)

  const res2 = seq
    .concat(seq(rests).repeat(2), seq(notes).repeat(2).transpose(-12))
    .quantize(bpm)

  seq.play(theme, piano)
  seq.play(res1, piano)
  seq.play(res2, piano)
})()
```
