---
title: Canon
---

```js
/**
 * "Row Your Boat"
 *
 * Adapted from https://git.io/fjyri
 */

const { sampler, pattern, zip, pitches, durations } = gen
const { c4, d4, e4, f4, g4, c5 } = pitches
const { qn, den, sn, hn, ent } = durations

;(async () => {
  const context = new AudioContext()
  const app = gen(context)

  const flute = await sampler(context, 'piano')
  const trumpet = await sampler(context, 'piano')
  // const clarinet = await sampler('piano')

  const bpm = 60.0

  const notes = [
    [
      // Row, row, row your boat, gently down the stream,
      [c4, qn],
      [c4, qn],
      [c4, den],
      [d4, sn],
      [e4, qn],
      [e4, den],
      [d4, sn],
      [e4, den],
      [f4, sn],
      [g4, hn]
    ],
    [
      // merrily, merrily, merrily, merrily,
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
      [c4, ent]
    ],
    [
      // life is but a dream.
      [g4, den],
      [f4, sn],
      [e4, den],
      [d4, sn],
      [c4, hn]
    ]
  ].flat()

  const theme = pattern(context, notes).use(flute)
  // .repeat(1)
  // .quantize(bpm)
  // .startAt(0)

  const response1 = pattern(context, notes).use(trumpet)
  // .startAt(73)
  // .repeat(1)
  // .transpose(12)
  // .quantize(bpm)
  // .repeat(1)

  // const response2 = pattern(notes)
  //   .use(clarinet)
  //   .quantize(bpm)
  //   .transpose(-12)
  //   .startAt(576)
  //   .repeat(1)

  app
    .on('tick', (beatNumber, time) => {
      console.log('tick', beatNumber)
      theme.play(beatNumber, time)
      if (beatNumber >= 578) {
        response1.play(beatNumber, time)
      }

      // response2.play(tick)
    })
    .play(bpm)
})()
```
