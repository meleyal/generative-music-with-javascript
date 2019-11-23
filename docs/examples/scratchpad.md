---
title: Scratchpad
---

```js
const app = gen()

const pitches = [A0, A0, A1, A1]
const durations = [QN, QN, QN, QN]

const piano = app.part('piano').add(pitches, durations)

app.beat(1, (req, res) => {
  piano.play().repeat(2)
})

app.play(108)
app.stop()
```

```js
const { Score, Part, Phrase, pitches, durations } = gen
const { A0, A1 } = pitches
const { QN } = durations

const score = new Score(108)

const piano = new Part('piano')

const pitches1 = [A0, A0, A1, A1]
const durations1 = [QN, QN, QN, QN]

const theme = new Phrase()
  .add(pitches1, durations1)
  .startAt(0)
  .repeat(2)

piano.add(theme)

score.add(piano).play()
```
