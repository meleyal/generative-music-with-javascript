---
title: Canon
---

```js
/**
 * "Row Your Boat"
 *
 * Adapted from https://git.io/fjyri
 */

const { env, pattern, sampler, reverb, compressor, pitches, durations } = gen
const { context, connect, clock, master } = env
const { part, repeat, transpose, quantize } = pattern
const { c4, d4, e4, f4, g4, c5, rest } = pitches
const { wn, qn, den, sn, hn, ent } = durations

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

  const bpm = 90.0

  const ctx = context()
  const time = clock(ctx)
  const output = connect(
    compressor(ctx),
    await reverb('bottle-hall', ctx),
    master(ctx)
  )

  const piano = await sampler('piano', ctx, time, output)

  const theme = quantize(repeat(notes, 2), bpm)

  const response1 = quantize(
    [...rests, ...repeat(transpose(notes, 12), 2)],
    bpm
  )

  const response2 = quantize(
    [...repeat(rests, 2), ...repeat(transpose(notes, -12), 2)],
    bpm
  )

  // TODO: Wrap in score(bpm, parts) that does quantize?

  part(theme, piano)
  part(response1, piano)
  part(response2, piano)
})()
```
