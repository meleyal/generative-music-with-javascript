---
title: Scratchpad
---

```js
const { Score, Part, Phrase, pitches, durations } = gen
const { A0, A1 } = pitches
const { QN } = durations

const score = new Score(108)

const flute = new Part('piano')

const pitches1 = [A0, A0, A1, A1]
const durations1 = [QN, QN, QN, QN]

const theme = new Phrase()
  .add(pitches1, durations1)
  .startAt(0)
  .repeat(2)

flute.add(theme)

score.add(flute).play()
```
