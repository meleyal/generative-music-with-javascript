---
title: Canon
---

```js
/**
 * "Row Your Boat"
 *
 * Adapted from https://git.io/fjyri
 */

const { gen, sampler, pattern, zip, pitches, durations } = gen
const { c4, d4, e4, f4, g4, c5 } = pitches
const { qn, den, sn, hn, ent } = durations

;(async () => {
  const app = gen()

  const flute = await sampler('piano')
  const trumpet = await sampler('piano')
  const clarinet = await sampler('piano')

  const notes = [
    [
      // Row, row, row your boat, gently down the stream,
      [c4, c4, c4, d4, e4, e4, d4, e4, f4, g4],
      [qn, qn, den, sn, qn, den, sn, den, sn, hn]
    ],
    [
      // merrily, merrily, merrily, merrily,
      [c5, c5, c5, g4, g4, g4, e4, e4, e4, c4, c4, c4],
      [ent, ent, ent, ent, ent, ent, ent, ent, ent, ent, ent, ent]
    ],
    [
      // life is but a dream.
      [g4, f4, e4, d4, c4],
      [den, sn, den, sn, hn]
    ]
  ].flatMap(phrases => _.zip(...phrases))

  const theme = pattern(notes).repeat(2)
  const response1 = theme.transpose(12)
  const response2 = theme.transpose(-12)

  app
    .on('bar/1', () => flute(theme))
    .on('bar/2', () => trumpet(response1))
    .on('bar/3', () => clarinet(response2))
    .play(108)
})()
```
