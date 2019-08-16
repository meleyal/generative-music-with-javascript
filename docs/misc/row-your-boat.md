---
title: Row Your Boat
---

This example demonstrates how to make a musical canon.

Adapted from the [`rowYourBoat.py` jythonMusic example](https://git.io/fjyri).

```js
const { Score, Part, Phrase } = gen
const { C4, D4, E4, F4, G4, C5 } = gen.pitches
const { QN, DEN, SN, HN, ENT } = gen.durations

const rowYourBoat = new Score(108)

const flutePart = new Part('piano')
const trumpetPart = new Part('piano')
const clarinetPart = new Part('piano')

// "Row, row, row your boat, gently down the stream"
const pitches1 = [C4, C4, C4, D4, E4, E4, D4, E4, F4, G4]
const durations1 = [QN, QN, DEN, SN, QN, DEN, SN, DEN, SN, HN]

// "merrily, merrily, merrily, merrily"
const pitches2 = [C5, C5, C5, G4, G4, G4, E4, E4, E4, C4, C4, C4]
const durations2 = [ENT, ENT, ENT, ENT, ENT, ENT, ENT, ENT, ENT, ENT, ENT, ENT]

// "life is but a dream."
const pitches3 = [G4, F4, E4, D4, C4]
const durations3 = [DEN, SN, DEN, SN, HN]

const theme = new Phrase()
  .add(pitches1, durations1)
  .add(pitches2, durations2)
  .add(pitches3, durations3)
  .startAt(0)
  .repeat(2)

const response1 = theme
  .copy()
  .transpose(12)
  .startAt(4)
  .repeat(2)

const response2 = theme
  .copy()
  .transpose(-12)
  .startAt(8)
  .repeat(2)

flutePart.add(theme)
trumpetPart.add(response1)
clarinetPart.add(response2)

rowYourBoat
  .add(flutePart)
  .add(trumpetPart)
  .add(clarinetPart)
  .play()
```
