---
title: Canon
---

```js
/**
 * "Row Your Boat"
 *
 * Adapted from https://git.io/fjyri
 */

const { score, part, phrase, pitches, durations } = gen
const { c4, d4, e4, f4, g4, c5 } = pitches
const { qn, den, sn, hn, ent } = durations

const bpm = 108.0

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
    [g4, hn],
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
    [c4, ent],
  ],
  [
    // life is but a dream.
    [g4, den],
    [f4, sn],
    [e4, den],
    [d4, sn],
    [c4, hn],
  ],
]

const app = score(bpm)

const flute = part('piano')
const trumpet = part('piano')
const clarinet = part('piano')

const theme = phrase()
  .add(notes)
  .startAt(0)
  .repeat(2)

const response1 = theme
  .transpose(12)
  .startAt(4)
  .repeat(2)

const response2 = theme
  .transpose(-12)
  .startAt(8)
  .repeat(2)

flute.add(theme)
trumpet.add(response1)
clarinet.add(response2)

app
  .add(flute)
  .add(trumpet)
  .add(clarinet)
  .play()
```
