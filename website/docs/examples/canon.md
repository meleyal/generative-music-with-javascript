---
title: Canon
---

```js
/**
 * "Row Your Boat"
 *
 * Adapted from https://git.io/fjyri
 */

const { pattern, sampler, reverb, pitches, durations } = gen
const { c4, d4, e4, f4, g4, c5, rest } = pitches
const { wn, qn, den, sn, hn, ent } = durations
const { part, repeat, transpose, quantize } = pattern

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
    [c4, hn]
  ]

  // TODO: fx(reverb)

  const bpm = 90.0

  const piano = await sampler('piano')

  const theme = quantize(repeat(notes, 2), bpm)

  const response1 = quantize(
    [...rests, ...repeat(transpose(notes, 12), 2)],
    bpm
  )

  const response2 = quantize(
    [...repeat(rests, 2), ...repeat(transpose(notes, -12), 2)],
    bpm
  )

  part(theme, piano)
  part(response1, piano)
  part(response2, piano)
})()
```
